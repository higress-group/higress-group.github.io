---
title: "使用数据库实现可观测"
keywords: [db-log-pusher, db-log-collector, 日志收集, 可观测, 数据库]
description: 基于 db-log-pusher（WASM 插件）+ db-log-collector（日志收集服务）+ MySQL 的开源可观测方案。
---

# 使用数据库实现可观测

## 简介

本方案基于 `db-log-pusher`（WASM 插件）+ `db-log-collector`（日志收集服务）+ MySQL，提供完全开源的可观测能力。适用于不使用阿里云环境、希望将日志数据存储在自有数据库中的中小流量场景。

如果您使用阿里云环境，推荐使用 [阿里云 SLS 方案](/docs/himarket/himarket-sls-observability/)。

## 架构概览

```
Higress 网关
  └─ db-log-pusher (WASM 插件) ──HTTP POST──▶ db-log-collector (Go 服务) ──▶ MySQL (access_logs 表)
                                                                                      ▲
                                                                              HiMarket 后端查询
```

组件说明：

- `db-log-pusher`：Higress WASM 插件，异步采集请求/响应日志并推送到 collector 服务，不阻塞主业务流程
- `db-log-collector`：Go 编写的日志收集服务，接收日志并批量写入 MySQL（默认每 50 条或每秒刷新一次）
- `access_logs` 表：存储所有访问日志，HiMarket 后端直接查询该表实现可观测大盘

## 配置步骤

### 步骤 1：准备 MySQL 数据库

创建数据库和 `access_logs` 表。

:::tip[关于数据库选择]
`access_logs` 表可以和 HiMarket 业务表放在同一个 MySQL 实例中（HiMarket 会复用应用数据源查询），也可以放在独立的 MySQL 实例中。如果使用独立实例，需要在步骤 4 中额外配置数据源连接。对于中小流量场景，推荐共用同一实例以简化部署。
:::

```sql
CREATE DATABASE IF NOT EXISTS higress_poc DEFAULT CHARACTER SET utf8mb4;

USE higress_poc;

CREATE TABLE access_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    start_time DATETIME NOT NULL COMMENT '请求开始时间',
    trace_id VARCHAR(255) COMMENT 'X-B3-TraceID',
    authority VARCHAR(255) COMMENT 'Host/Authority',
    method VARCHAR(10) COMMENT 'HTTP 方法',
    path TEXT COMMENT '请求路径',
    protocol VARCHAR(20) COMMENT 'HTTP 协议版本',
    request_id VARCHAR(255) COMMENT 'X-Request-ID',
    user_agent TEXT COMMENT 'User-Agent',
    x_forwarded_for TEXT COMMENT 'X-Forwarded-For',
    response_code INT COMMENT '响应状态码',
    response_flags VARCHAR(100) COMMENT 'Envoy 响应标志',
    response_code_details TEXT COMMENT '响应码详情',
    bytes_received BIGINT COMMENT '接收字节数',
    bytes_sent BIGINT COMMENT '发送字节数',
    duration BIGINT COMMENT '请求总耗时 (ms)',
    upstream_cluster VARCHAR(255) COMMENT '上游集群名',
    upstream_host VARCHAR(255) COMMENT '上游主机',
    upstream_service_time VARCHAR(50) COMMENT '上游服务耗时',
    upstream_transport_failure_reason TEXT COMMENT '上游传输失败原因',
    upstream_local_address VARCHAR(255) COMMENT '上游本地地址',
    downstream_local_address VARCHAR(255) COMMENT '下游本地地址',
    downstream_remote_address VARCHAR(255) COMMENT '下游远程地址',
    route_name VARCHAR(255) COMMENT '路由名称',
    requested_server_name VARCHAR(255) COMMENT 'SNI',
    istio_policy_status VARCHAR(100) COMMENT 'Istio 策略状态',
    ai_log JSON COMMENT 'AI 日志（模型、Token、MCP 等）',
    instance_id VARCHAR(255) COMMENT '实例 ID',
    api VARCHAR(255) COMMENT 'API 名称',
    model VARCHAR(255) COMMENT '模型名称',
    consumer VARCHAR(255) COMMENT '消费者信息',
    route VARCHAR(255) COMMENT '路由名称',
    service VARCHAR(255) COMMENT '服务名称',
    mcp_server VARCHAR(255) COMMENT 'MCP Server',
    mcp_tool VARCHAR(255) COMMENT 'MCP Tool',
    input_tokens BIGINT COMMENT '输入 token 数量',
    output_tokens BIGINT COMMENT '输出 token 数量',
    total_tokens BIGINT COMMENT '总 token 数量',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_start_time (start_time),
    INDEX idx_trace_id (trace_id),
    INDEX idx_authority (authority),
    INDEX idx_method (method),
    INDEX idx_response_code (response_code),
    INDEX idx_instance_id (instance_id),
    INDEX idx_api (api),
    INDEX idx_model (model),
    INDEX idx_consumer (consumer),
    INDEX idx_mcp_server (mcp_server)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Higress Access Logs';
```

### 步骤 2：部署 db-log-collector 服务

db-log-collector 是一个 Go 编写的 HTTP 服务，接收 db-log-pusher 推送的日志并批量写入 MySQL。根据部署方式选择：

#### 本地开发

本地开发时可以直接运行 db-log-collector 二进制或容器：

```bash
docker run -d --name log-collector \
  -p 8081:8080 \
  -e MYSQL_DSN="user:password@tcp(host.docker.internal:3306)/higress_poc?charset=utf8mb4&parseTime=True&loc=Local" \
  registry.cn-shanghai.aliyuncs.com/daofeng/log-collector:latest

# 验证健康检查
curl http://localhost:8081/health
```

#### Docker Compose 部署

在 `docker-compose.yml` 中添加 log-collector 服务：

```yaml
services:
  log-collector:
    image: registry.cn-shanghai.aliyuncs.com/daofeng/log-collector:latest
    ports:
      - "8081:8080"
    environment:
      - MYSQL_DSN=user:password@tcp(mysql:3306)/higress_poc?charset=utf8mb4&parseTime=True&loc=Local
    depends_on:
      - mysql
```

#### Kubernetes 部署

将以下 YAML 保存为 `log-collector.yaml` 并应用：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: log-collector
  namespace: higress-system
  labels:
    app: log-collector
spec:
  replicas: 1
  selector:
    matchLabels:
      app: log-collector
  template:
    metadata:
      labels:
        app: log-collector
    spec:
      containers:
      - name: collector
        image: registry.cn-shanghai.aliyuncs.com/daofeng/log-collector:latest
        imagePullPolicy: Always
        ports:
        - containerPort: 8080
        env:
        - name: MYSQL_DSN
          value: "user:password@tcp(mysql-host:3306)/higress_poc?charset=utf8mb4&parseTime=True&loc=Local"
        resources:
          limits:
            cpu: "500m"
            memory: "512Mi"
          requests:
            cpu: "100m"
            memory: "128Mi"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 10
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: log-collector
  namespace: higress-system
spec:
  selector:
    app: log-collector
  ports:
  - port: 80
    targetPort: 8080
    protocol: TCP
  type: ClusterIP
```

部署并验证：

```bash
kubectl apply -f log-collector.yaml
kubectl get pods -n higress-system -l app=log-collector
kubectl exec -n higress-system deployment/log-collector -- wget -qO- http://localhost:8080/health
```

### 步骤 3：配置 db-log-pusher 插件

在 Higress 中配置 `db-log-pusher` WASM 插件，将网关日志推送到 collector 服务：

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: db-log-pusher-plugin
  namespace: higress-system
  labels:
    higress.io/wasm-plugin-name: db-log-pusher
    higress.io/wasm-plugin-category: logging
spec:
  url: https://pysrc-test.oss-cn-beijing.aliyuncs.com/higress-plugin/plugin-20260309-122804.wasm
  defaultConfigDisable: true
  failStrategy: FAIL_OPEN
  imagePullPolicy: Always
  phase: AUTHN
  priority: 1010
  matchRules:
    - configDisable: false
      ingress:
        - model-api-qwen3-plus-0    # 替换为您的路由名称
        - travel-assistant
      config:
        log_level: info
        collector_service_name: "log-collector.higress-system.svc.cluster.local"
        collector_port: 80
        collector_path: "/ingest"
```

:::note[本地开发时的 collector 地址]
如果 db-log-collector 运行在本地（非 K8s），将 `collector_service_name` 改为本机 IP（如 `192.168.1.100`），`collector_port` 改为映射端口（如 `8081`）。
:::

插件配置参数：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `collector_service_name` | string | 是 | - | collector 服务地址（K8s FQDN 或 IP） |
| `collector_port` | int | 是 | - | collector 端口 |
| `collector_path` | string | 否 | `/` | 接收日志的 API 路径 |

#### 插件执行顺序

如果需要读取 `ai-statistics` 插件写入的 AI 日志，请确保 `db-log-pusher` 的执行顺序晚于 `ai-statistics`：
- 在不同 phase 中，`db-log-pusher` 的 phase 应晚于 `ai-statistics`
- 在同一 phase 中，`db-log-pusher` 的 priority 应高于 `ai-statistics`（数字越大越先执行）

### 步骤 4：配置 HiMarket

将 HiMarket 的日志数据源切换为 DB：

```bash
export OBSERVABILITY_LOG_SOURCE="DB"
```

或编辑 `himarket-bootstrap/src/main/resources/application.yml`：

```yaml
observability:
  log-source: DB
```

:::tip[数据库连接]
HiMarket 默认复用应用的数据源（即 `spring.datasource` 配置）来查询 `access_logs` 表。如果 `access_logs` 表和 HiMarket 业务表在同一个 MySQL 实例中，无需额外配置。如果使用独立的 MySQL 实例存储日志，需要将 HiMarket 的数据库连接指向该实例，或者将 `access_logs` 表建在 HiMarket 业务库中。
:::

### 步骤 5：启动并验证

启动 HiMarket 后，查看日志确认数据源切换成功：

```
INFO  c.a.h.config.ObservabilityConfig - Observability log source: DB
INFO  c.a.h.config.ObservabilityConfig - DB datasource URL: jdbc:mysql://..., table: access_logs
```

验证数据链路：

1. 通过 Higress 网关发送几个请求，产生访问日志
2. 检查 `access_logs` 表是否有数据写入：`SELECT COUNT(*) FROM access_logs;`
3. 登录 HiMarket 管理后台，查看可观测大盘是否有数据

## 自定义开发

如果需要自定义 db-log-pusher 或 db-log-collector，可以参考源码：

| 组件 | 源码位置 |
|------|----------|
| db-log-pusher 插件 | `higress/plugins/wasm-go/extensions/db-log-pusher/main.go` |
| db-log-collector 服务 | `higress/plugins/wasm-go/extensions/db-log-pusher/log-collector/` |

db-log-collector 主要接口：
- `POST /ingest`：接收日志
- `GET /query`：查询日志
- `GET /health`：健康检查

构建镜像：

```bash
cd higress/plugins/wasm-go/extensions/db-log-pusher/log-collector
docker build -t your-registry/log-collector:latest .
```

## 注意事项

1. **性能**：默认单实例部署，适用于中小流量。高并发场景建议增加 replicas 或引入消息队列缓冲。
2. **数据安全**：建议使用独立数据库账号并限制权限，生产环境使用 TLS 加密连接。
3. **资源限制**：根据实际流量调整容器的 CPU 和内存限制。
4. **插件特性**：采用异步非阻塞方式发送日志，发送失败不影响主业务流程，内置 5 秒超时防止阻塞。

## 故障排查

### 日志未写入数据库

1. 检查 db-log-collector 是否正常运行（`curl http://<collector-host>:<port>/health`）
2. 确认 `MYSQL_DSN` 配置正确，collector 能连接到 MySQL
3. 查看 db-log-collector 日志排查错误
4. 确认 db-log-pusher 插件的 `collector_service_name` 和 `collector_port` 配置正确

### HiMarket 大盘无数据

1. 确认 `OBSERVABILITY_LOG_SOURCE` 已设置为 `DB`
2. 确认 `access_logs` 表中有数据：`SELECT COUNT(*) FROM access_logs;`
3. 确认 HiMarket 数据库连接指向包含 `access_logs` 表的 MySQL 实例
4. 查看 HiMarket 应用日志排查查询错误
