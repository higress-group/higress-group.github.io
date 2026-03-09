---
title: DB 日志收集器
keywords: [db-log-collector, 日志收集, 监控, 审计]
description: DB 日志收集器插件用于收集和转发 HTTP 请求/响应日志到外部收集器，支持多种监控和审计场景。
---

# DB 日志收集器

DB 日志收集器插件用于收集和转发 HTTP 请求/响应日志到外部收集器，支持多种监控和审计场景。该插件能够捕获完整的请求/响应生命周期信息，并将其发送到指定的目标服务。

## 功能特性

- **全面的日志收集**: 捕获请求/响应的完整信息，包括基础信息、流量统计、连接信息等
- **AI 日志支持**: 特别针对 AI 应用场景，支持收集模型调用日志和 token 统计
- **灵活的配置**: 支持自定义收集器服务地址和路径
- **实时推送**: 异步将日志实时推送到外部收集器
- **性能优化**: 采用非阻塞方式发送日志，不影响主业务流程
- **智能客户端**: 自动创建内部集群客户端，使用 `collector_service_name` 和 `collector_port` 配置建立连接
- **超时处理**: 包含 5 秒超时设置，防止长时间阻塞
- **错误处理**: 记录发送失败和异常情况，不影响主业务流程
- **数据库存储**: 内置数据库存储机制，用于持久化日志管理

## 配置参数

| 参数 | 类型 | 必填 | 默认值 | 描述 |
|------|------|------|--------|------|
| `collector_service_name` | string | 是 | - | 收集器服务名称，格式为 FQDN，例如 "log-collector.higress-system.svc.cluster.local" |
| `collector_port` | int | 是 | - | 收集器端口，例如 8080 |
| `collector_path` | string | 否 | "/" | 接收日志的 API 路径，例如 "/api/log" |

## 收集的数据字段

插件会收集以下类型的详细信息：

### 基础请求信息
- `start_time`: 请求开始时间
- `authority`: Host/Authority
- `method`: HTTP 方法
- `path`: 请求路径
- `protocol`: HTTP 协议版本
- `request_id`: X-Request-ID
- `trace_id`: X-B3-TraceID
- `user_agent`: User-Agent
- `x_forwarded_for`: X-Forwarded-For

### 响应信息
- `response_code`: 响应状态码
- `response_flags`: Envoy 响应标志
- `response_code_details`: 响应码详情

### 流量信息
- `bytes_received`: 接收字节数
- `bytes_sent`: 发送字节数
- `duration`: 请求总耗时(毫秒)

### 上游信息
- `upstream_cluster`: 上游集群名
- `upstream_host`: 上游主机
- `upstream_service_time`: 上游服务耗时
- `upstream_transport_failure_reason`: 上游传输失败原因

### 连接信息
- `downstream_local_address`: 下游本地地址
- `downstream_remote_address`: 下游远程地址
- `upstream_local_address`: 上游本地地址

### 路由信息
- `route_name`: 路由名称
- `requested_server_name`: SNI

### AI 相关信息
- `ai_log`: WASM AI 日志
- `input_tokens`: 输入 token 数量
- `output_tokens`: 输出 token 数量
- `total_tokens`: 总 token 数量
- `model`: 模型名称
- `api`: API 名称
- `consumer`: 消费者信息

### 监控元数据
- `instance_id`: 实例 ID
- `route`: 路由
- `service`: 服务
- `mcp_server`: MCP Server
- `mcp_tool`: MCP Tool

## 配置示例

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: db-log-collector
  namespace: higress-system
spec:
  selector:
    matchLabels:
      app: higress-gateway
  config:
    collector_service_name: "log-collector.higress-system.svc.cluster.local"
    collector_port: 80
    collector_path: "/ingest"
```

## 配套组件：Log Collector 部署

`db-log-collector` 插件需要配合日志收集服务一起使用。以下是一个简单的日志收集器部署示例。

### 1. 准备数据库

首先创建一个 MySQL 数据库用于存储日志数据。执行以下 SQL 创建表结构：

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
    ai_log JSON COMMENT 'WASM AI 日志',
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

### 2. 部署 Log Collector 服务

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
        # 修改为你的 MySQL 连接信息
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

应用部署：

```bash
kubectl apply -f log-collector.yaml
```

### 3. 验证部署

检查 Pod 状态：

```bash
kubectl get pods -n higress-system -l app=log-collector
```

查看日志确认服务启动正常：

```bash
kubectl logs -n higress-system deployment/log-collector
```

测试健康检查端点：

```bash
kubectl exec -n higress-system deployment/log-collector -- wget -qO- http://localhost:8080/health
```

### 4. 自定义 Log Collector（可选）

如果需要自定义日志收集器的功能，可以参考源码进行修改和重新构建：

**源码位置：**
```
higress/plugins/wasm-go/extensions/db-log-collector/log-collector/
```

**主要功能：**
- 提供 `/ingest` 端点接收日志（POST）
- 提供 `/query` 端点查询日志（GET）
- 提供 `/health` 端点健康检查
- 批量写入数据库（默认每 50 条或每秒刷新一次）
- 支持丰富的查询参数（时间范围、实例 ID、API、模型、MCP Server 等）

**构建镜像：**
```bash
cd higress/plugins/wasm-go/extensions/db-log-collector/log-collector
docker build -t your-registry/log-collector:latest .
```

### 5. 注意事项

1. **性能考虑**: 默认的 log-collector 是单实例部署，适用于中小流量场景。对于高并发场景，建议：
   - 增加 replicas 数量
   - 使用消息队列（如 Kafka）作为缓冲
   - 采用专业的日志系统（如 Elasticsearch + Logstash）

2. **数据安全**: 
   - 建议使用独立的数据库账号，限制权限
   - 生产环境应使用 TLS 加密数据库连接
   - 定期备份日志数据

3. **资源限制**: 根据实际流量调整容器的 CPU 和内存限制

4. **监控告警**: 建议为 log-collector 添加监控指标，如：
   - HTTP 请求成功率
   - 数据库写入延迟
   - Buffer 队列长度

## 使用注意事项

### 插件执行顺序
如果需要读取 `ai-statistics` 插件写入的 AI 日志，请确保：
1. 在 WasmPlugin 资源中，`db-log-collector` 的 phase 应该晚于 `ai-statistics`
2. 或者在同一 phase 中，`db-log-collector` 的 priority 应该低于 `ai-statistics`（数字越大优先级越高）

### 性能考虑
- 插件采用异步方式发送日志，不会阻塞主请求流程
- 对于大请求体，插件会进行适当处理以避免内存问题
- 日志发送失败不会影响主业务流程

### 与其他插件的配合
- 与认证插件配合时，可以从认证信息中获取消费者信息
- 与路由插件配合时，可以获取更精确的路由和服务信息
- 与 MCP 服务配合时，可以获取工具调用相关信息

## 故障排除

### 日志未发送
1. 检查收集器服务是否正常运行
2. 确认网络连通性
3. 查看 Higress 网关日志中的错误信息

### 配置验证
- 确保 `collector_service_name` 和 `collector_port` 配置正确
- 验证收集器服务能够接收 JSON 格式的日志数据

## 高级配置

对于更复杂的部署场景，您可以根据需要调整以下参数：
- `collector_path`: 根据您的日志收集服务 API 路径进行调整
- 配合其他监控工具进行日志格式化和处理