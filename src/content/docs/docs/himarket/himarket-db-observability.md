---
title: "使用数据库实现可观测"
keywords: [db-log-pusher, db-log-collector, 日志收集, 可观测, 数据库]
description: 基于 db-log-pusher（WASM 插件）+ db-log-collector（日志收集服务）+ MySQL 的开源可观测方案。
---

# 使用数据库实现可观测

:::caution[重要提示]
使用数据库实现可观测目前为实验性功能，仅用于 PoC 演示。生产环境请使用 [阿里云 SLS 方案](/docs/himarket/himarket-sls-observability/)。
:::

## 简介

> **源码仓库**：
> - **插件 + 收集器源码**：[https://github.com/higress-group/db-log-pusher](https://github.com/higress-group/db-log-pusher)
> - **官方镜像发布**：`db-log-pusher` 和 `db-log-collector` 均由源码仓库的 CI 发布到 Higress 官方开源镜像仓库

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

先创建数据库。最新版本的 `db-log-collector` 启动时会在 `MYSQL_DSN` 指向的数据库中自动创建缺失的 `access_logs` 表，并补建缺失索引。

:::tip[关于数据库选择]
HiMarket 的 DB 可观测查询会复用应用数据源（`spring.datasource`），当前没有单独的日志数据源配置。因此 `access_logs` 需要建在 HiMarket 应用数据源指向的数据库中。对于中小流量场景，推荐和 HiMarket 业务表共用同一个数据库以简化部署。
:::

如果需要手动建表，请使用下面与当前 `db-log-collector` 源码一致的表结构。`start_time` 为 Unix epoch 秒，且包含 `request_body`、`response_body` 两个字段。

```sql
CREATE DATABASE IF NOT EXISTS higress_poc
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE higress_poc;

CREATE TABLE IF NOT EXISTS access_logs (
  id bigint NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  start_time bigint NULL DEFAULT NULL COMMENT '请求开始时间(Unix epoch 秒)',
  trace_id varchar(64) NULL DEFAULT NULL COMMENT 'X-B3-TraceID 分布式追踪ID',
  authority varchar(128) NULL DEFAULT NULL COMMENT 'Host/Authority 域名',
  method varchar(16) NULL DEFAULT NULL COMMENT 'HTTP 方法 (GET/POST等)',
  path varchar(1024) NULL DEFAULT NULL COMMENT '请求路径',
  protocol varchar(16) NULL DEFAULT NULL COMMENT 'HTTP 协议版本 (HTTP/1.1等)',
  request_id varchar(64) NULL DEFAULT NULL COMMENT 'X-Request-ID 请求唯一标识',
  user_agent varchar(512) NULL DEFAULT NULL COMMENT 'User-Agent 客户端信息',
  x_forwarded_for varchar(256) NULL DEFAULT NULL COMMENT 'X-Forwarded-For 客户端真实IP',
  response_code int NULL DEFAULT NULL COMMENT '响应状态码 (200/404/500等)',
  response_flags varchar(64) NULL DEFAULT NULL COMMENT 'Envoy 响应标志',
  response_code_details varchar(256) NULL DEFAULT NULL COMMENT '响应码详情',
  bytes_received bigint NULL DEFAULT NULL COMMENT '接收字节数',
  bytes_sent bigint NULL DEFAULT NULL COMMENT '发送字节数',
  duration int NULL DEFAULT NULL COMMENT '请求总耗时(ms)',
  upstream_cluster varchar(256) NULL DEFAULT NULL COMMENT '上游集群名',
  upstream_host varchar(256) NULL DEFAULT NULL COMMENT '上游主机地址',
  upstream_service_time varchar(32) NULL DEFAULT NULL COMMENT '上游服务耗时',
  upstream_transport_failure_reason varchar(256) NULL DEFAULT NULL COMMENT '上游传输失败原因',
  upstream_local_address varchar(64) NULL DEFAULT NULL COMMENT '上游本地地址',
  downstream_local_address varchar(64) NULL DEFAULT NULL COMMENT '下游本地地址',
  downstream_remote_address varchar(64) NULL DEFAULT NULL COMMENT '下游远程地址',
  route_name varchar(256) NULL DEFAULT NULL COMMENT '路由名称',
  requested_server_name varchar(256) NULL DEFAULT NULL COMMENT 'SNI 服务器名称',
  istio_policy_status varchar(64) NULL DEFAULT NULL COMMENT 'Istio 策略状态',
  ai_log json NULL DEFAULT NULL COMMENT 'WASM AI 日志 (JSON字符串)',
  instance_id varchar(128) NULL DEFAULT NULL COMMENT '实例ID（Pod名称或容器ID）',
  api varchar(128) NULL DEFAULT NULL COMMENT 'API名称（如 chat/completions）',
  model varchar(128) NULL DEFAULT NULL COMMENT '模型名称（如 qwen-max）',
  consumer varchar(256) NULL DEFAULT NULL COMMENT '消费者信息（用户名/API Key等）',
  route varchar(256) NULL DEFAULT NULL COMMENT '路由名称（冗余字段，便于查询）',
  service varchar(256) NULL DEFAULT NULL COMMENT '服务名称（上游服务）',
  mcp_server varchar(256) NULL DEFAULT NULL COMMENT 'MCP服务器名称',
  mcp_tool varchar(256) NULL DEFAULT NULL COMMENT 'MCP工具名称',
  input_tokens bigint NULL DEFAULT NULL COMMENT '输入token数量',
  output_tokens bigint NULL DEFAULT NULL COMMENT '输出token数量',
  total_tokens bigint NULL DEFAULT NULL COMMENT '总token数量',
  request_body mediumtext NULL DEFAULT NULL COMMENT '请求体（最大16MB）',
  response_body mediumtext NULL DEFAULT NULL COMMENT '响应体（最大16MB）',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='HTTP 访问日志表';

CREATE INDEX idx_start_time ON access_logs (start_time DESC);
CREATE INDEX idx_trace_id ON access_logs (trace_id);
CREATE INDEX idx_authority_time ON access_logs (authority, start_time DESC);
CREATE INDEX idx_response_code_time ON access_logs (response_code, start_time DESC);
CREATE INDEX idx_path ON access_logs (path(255));
CREATE INDEX idx_method_authority ON access_logs (method, authority);
CREATE INDEX idx_duration ON access_logs (duration DESC);
CREATE INDEX idx_upstream_cluster ON access_logs (upstream_cluster, start_time DESC);
CREATE INDEX idx_route_name ON access_logs (route_name, start_time DESC);
CREATE INDEX idx_instance_id ON access_logs (instance_id, start_time DESC);
CREATE INDEX idx_api ON access_logs (api, start_time DESC);
CREATE INDEX idx_model ON access_logs (model, start_time DESC);
CREATE INDEX idx_consumer ON access_logs (consumer, start_time DESC);
CREATE INDEX idx_service ON access_logs (service, start_time DESC);
CREATE INDEX idx_mcp_server ON access_logs (mcp_server, start_time DESC);
CREATE INDEX idx_mcp_tool ON access_logs (mcp_tool, start_time DESC);
```

:::caution[旧表迁移]
如果您已经按照旧文档创建了 `start_time DATETIME` 的 `access_logs` 表，最新 `db-log-collector` 不会自动修改已有字段或补齐请求/响应体字段。请先手动迁移，或删除旧表后让 collector 按新结构自动创建。
:::

### 步骤 2：部署 db-log-collector 服务

db-log-collector 是一个 Go 编写的 HTTP 服务，接收 db-log-pusher 推送的日志并批量写入 MySQL。根据部署方式选择：

#### 方式一：Kubernetes 部署（推荐）

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
        image: opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/log-collector:latest
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

#### 方式二：Docker 单机部署

如果您想在本地或单台服务器上快速部署，可以使用 Docker 运行日志收集服务。

**部署命令：**

```bash
docker run -d \
  --name log-collector \
  -p 8080:8080 \
  -e MYSQL_DSN="user:password@tcp(mysql-host:3306)/higress_poc?charset=utf8mb4&parseTime=True&loc=Local" \
  --restart unless-stopped \
  opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/log-collector:latest
```

**参数说明：**
- `-d`: 后台运行容器
- `--name log-collector`: 指定容器名称
- `-p 8080:8080`: 将容器的 8080 端口映射到宿主机
- `-e MYSQL_DSN`: 设置 MySQL 数据库连接字符串，请根据实际情况修改
- `--restart unless-stopped`: 容器退出时自动重启（除非手动停止）

**验证部署：**

检查容器运行状态：
```bash
docker ps | grep log-collector
```

查看容器日志：
```bash
docker logs -f log-collector
```

测试健康检查端点：
```bash
curl http://localhost:8080/health
```

**停止和删除容器：**

```bash
# 停止容器
docker stop log-collector

# 删除容器
docker rm log-collector
```

### 步骤 3：配置 db-log-pusher 插件

在 Higress 中配置 `db-log-pusher` WASM 插件，将网关日志推送到 collector 服务。

#### 方式一：通过 Higress Console 配置（推荐）

这是最简单直接的配置方式，通过 Higress Console 的图形化界面即可完成插件安装和配置。

1. **访问 Higress Console**
   - 登录 Higress Console 管理页面
   - 导航到 **插件配置** -> **添加插件**

2. **填写插件信息**
   - **插件名称**: `db-log-pusher-plugin`
   - **插件描述**: `Collect HTTP request logs to database`
   - **镜像地址**: `oci://opensource-registry.cn-hangzhou.cr.aliyuncs.com/plugins/db-log-pusher:latest`
   - **插件执行阶段**: 选择 **认证阶段** (AUTHN)
   - **插件执行优先级**: `1000`（需要高于 `ai-statistics`，同一阶段内数字越大，请求阶段越先执行、响应阶段越后执行）
   - **插件拉取策略**: 选择 **总是拉取** (Always)

3. **配置路由和策略**
   - 在插件配置页面，点击"添加匹配规则"
   - 在 **ingress** 列表中选择或输入需要应用此插件的服务名称，例如：
     - `model-api-qwen3-plus-0`
     - `travel-assistant`

4. **配置插件参数**
   - 在 **自定义插件配置** 区域，选择刚才创建的 `db-log-pusher` 插件
   - 在参数配置表单中，逐行填写以下参数（每行一个参数，格式为 `key: value`）：
   ```
   log_level: info
   collector_service_name: log-collector.higress-system.svc.cluster.local
   collector_port: 80
   collector_path: /ingest
   ```
   - 确保 **configDisable** 设置为 `false`（启用配置）

5. **保存配置**
   - 点击"保存"按钮完成配置
   - Higress 会自动部署插件到网关

配置说明：
- **执行阶段**: 选择认证阶段（AUTHN），使 `db-log-pusher` 在请求过滤器链中位于 `ai-statistics` 之前，从而在响应阶段晚于 `ai-statistics` 读取 AI 日志
- **优先级**: 建议设置为 1000，确保同一阶段下高于 `ai-statistics`；同一阶段内数字越大，请求阶段越先执行、响应阶段越后执行
- **拉取策略**: 使用 `latest` 时建议选择 Always，确保网关重新拉取仓库中当前的 `latest` 内容；实际版本仍以镜像仓库中 `latest` 指向的构建为准

#### 方式二：通过 Kubernetes YAML 配置

如果您更喜欢使用 Kubernetes 原生配置方式，可以通过创建 WasmPlugin 资源来部署插件：

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
  url: oci://opensource-registry.cn-hangzhou.cr.aliyuncs.com/plugins/db-log-pusher:latest
  defaultConfigDisable: true
  failStrategy: FAIL_OPEN
  imagePullPolicy: Always
  phase: AUTHN
  priority: 1000
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
        # instance_id: "higress-gateway"  # 可选，不配置时会尝试从网关元数据读取
```

应用配置：

```bash
kubectl apply -f db-log-pusher.yaml
```

:::note[本地开发时的 collector 地址]
如果 db-log-collector 运行在 K8s 集群外，请填写 Higress 网关 Pod 能解析且能访问的地址，并确保数据面中存在对应的出站集群（例如通过 Kubernetes Service、ServiceEntry 或可解析的 DNS/FQDN 暴露）。不要填写网关 Pod 无法访问的本机 `localhost` 地址。
:::

插件配置参数：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `collector_service_name` | string | 是 | - | collector 服务地址，需为网关数据面可解析、可访问的 FQDN/服务地址 |
| `collector_port` | int | 是 | - | collector 端口 |
| `collector_path` | string | 否 | `/` | 接收日志的 API 路径 |
| `instance_id` | string | 否 | 自动从网关元数据读取 | 网关实例 ID，用于实例维度查询 |

#### 插件执行顺序

`db-log-pusher` 在响应阶段读取 `ai-statistics` 写入的 AI 日志。由于 HTTP 过滤器的响应阶段按请求链的反向执行，请确保 `db-log-pusher` 在请求过滤器链中位于 `ai-statistics` 之前：
- 在不同 phase 中，`db-log-pusher` 的 phase 应早于 `ai-statistics`（例如使用 AUTHN，早于默认阶段）
- 在同一 phase 中，`db-log-pusher` 的 priority 应高于 `ai-statistics`（数字越大，请求阶段越先执行、响应阶段越后执行）

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
HiMarket 默认复用应用的数据源（即 `spring.datasource` 配置）来查询 `access_logs` 表。如果 `access_logs` 表和 HiMarket 业务表在同一个数据库中，无需额外配置。不要只把 `access_logs` 建在独立数据库中并期待 `OBSERVABILITY_LOG_SOURCE=DB` 自动连接该数据库。
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

**源码仓库关系：**
- **独立仓库**：[https://github.com/higress-group/db-log-pusher](https://github.com/higress-group/db-log-pusher) - 包含完整的插件和收集器源码

**源码结构：**
```
db-log-pusher/
├── main.go                      # Pusher 插件主程序
└── log-collector/               # Collector 服务端
    ├── main.go                  # Collector 主程序
    ├── Dockerfile               # Docker 镜像构建文件
    └── ...                      # 其他依赖文件
```

db-log-collector 主要接口：
- `POST /ingest`：接收日志
- `GET /query`：查询日志
- `GET /health`：健康检查

构建镜像：

```bash
# 克隆 db-log-pusher 仓库
git clone git@github.com:higress-group/db-log-pusher.git

# 进入目录并构建镜像
cd db-log-pusher/log-collector
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
