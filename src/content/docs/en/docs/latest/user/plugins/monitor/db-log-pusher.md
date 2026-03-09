---
title: DB Log Pusher Plugin and Log Collector Service
keywords: [db-log-pusher, db-log-collector, log collection, monitoring, audit]
description: "The DB Log Pusher plugin collects HTTP request/response logs and pushes them to external collector services, supporting various monitoring and audit scenarios. Contains two components: db-log-pusher (WASM plugin responsible for collecting and pushing logs) and db-log-collector (server-side component responsible for receiving and storing logs)."
---

# DB Log Pusher Plugin and Log Collector Service

The `db-log-pusher` is a WASM plugin that collects HTTP request/response logs and pushes them to external collector services (`db-log-collector`) for storage and analysis. These two components together form a complete log collection solution. This plugin captures complete request/response lifecycle information and sends it to the specified target service.

## Features

- **Comprehensive Log Collection**: Captures complete request/response information including basic info, traffic statistics, connection details, etc.
- **AI Log Support**: Specifically designed for AI application scenarios, supports collecting model invocation logs and token statistics
- **Flexible Configuration**: Supports custom collector service addresses and paths
- **Real-time Push**: Asynchronously pushes logs to external collectors in real-time
- **Performance Optimized**: Uses non-blocking mode to send logs without affecting main business processes
- **Smart Client**: Automatically creates internal cluster clients using `collector_service_name` and `collector_port` configuration
- **Timeout Handling**: Includes 5-second timeout setting to prevent long-term blocking
- **Error Handling**: Records sending failures and exceptions without affecting main business processes
- **Database Storage**: Built-in database storage mechanism for persistent log management

## Configuration Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `collector_service_name` | string | Yes | - | Collector service name in FQDN format, e.g., "log-collector.higress-system.svc.cluster.local" |
| `collector_port` | int | Yes | - | Collector port, e.g., 8080 |
| `collector_path` | string | No | "/" | API path for receiving logs, e.g., "/api/log" |

## Collected Data Fields

The plugin collects the following detailed information:

### Basic Request Information
- `start_time`: Request start time
- `authority`: Host/Authority
- `method`: HTTP method
- `path`: Request path
- `protocol`: HTTP protocol version
- `request_id`: X-Request-ID
- `trace_id`: X-B3-TraceID
- `user_agent`: User-Agent
- `x_forwarded_for`: X-Forwarded-For

### Response Information
- `response_code`: Response status code
- `response_flags`: Envoy response flags
- `response_code_details`: Response code details

### Traffic Information
- `bytes_received`: Bytes received
- `bytes_sent`: Bytes sent
- `duration`: Request total duration (milliseconds)

### Upstream Information
- `upstream_cluster`: Upstream cluster name
- `upstream_host`: Upstream host
- `upstream_service_time`: Upstream service time
- `upstream_transport_failure_reason`: Upstream transport failure reason

### Connection Information
- `downstream_local_address`: Downstream local address
- `downstream_remote_address`: Downstream remote address
- `upstream_local_address`: Upstream local address

### Routing Information
- `route_name`: Route name
- `requested_server_name`: SNI

### AI Related Information
- `ai_log`: WASM AI log
- `input_tokens`: Number of input tokens
- `output_tokens`: Number of output tokens
- `total_tokens`: Total number of tokens
- `model`: Model name
- `api`: API name
- `consumer`: Consumer information

### Monitoring Metadata
- `instance_id`: Instance ID
- `route`: Route
- `service`: Service
- `mcp_server`: MCP Server
- `mcp_tool`: MCP Tool

## Configuration Example

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: db-log-pusher
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

## Supporting Component: Log Collector Deployment

The `db-log-pusher` plugin needs to be used with a log collection service. Below is a simple log collector deployment example.

### 1. Prepare Database

First, create a MySQL database to store log data. Execute the following SQL to create the table structure:

```sql
CREATE DATABASE IF NOT EXISTS higress_poc DEFAULT CHARACTER SET utf8mb4;

USE higress_poc;

CREATE TABLE access_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    start_time DATETIME NOT NULL COMMENT 'Request start time',
    trace_id VARCHAR(255) COMMENT 'X-B3-TraceID',
    authority VARCHAR(255) COMMENT 'Host/Authority',
    method VARCHAR(10) COMMENT 'HTTP method',
    path TEXT COMMENT 'Request path',
    protocol VARCHAR(20) COMMENT 'HTTP protocol version',
    request_id VARCHAR(255) COMMENT 'X-Request-ID',
    user_agent TEXT COMMENT 'User-Agent',
    x_forwarded_for TEXT COMMENT 'X-Forwarded-For',
    response_code INT COMMENT 'Response status code',
    response_flags VARCHAR(100) COMMENT 'Envoy response flags',
    response_code_details TEXT COMMENT 'Response code details',
    bytes_received BIGINT COMMENT 'Bytes received',
    bytes_sent BIGINT COMMENT 'Bytes sent',
    duration BIGINT COMMENT 'Request duration (ms)',
    upstream_cluster VARCHAR(255) COMMENT 'Upstream cluster name',
    upstream_host VARCHAR(255) COMMENT 'Upstream host',
    upstream_service_time VARCHAR(50) COMMENT 'Upstream service time',
    upstream_transport_failure_reason TEXT COMMENT 'Upstream transport failure reason',
    upstream_local_address VARCHAR(255) COMMENT 'Upstream local address',
    downstream_local_address VARCHAR(255) COMMENT 'Downstream local address',
    downstream_remote_address VARCHAR(255) COMMENT 'Downstream remote address',
    route_name VARCHAR(255) COMMENT 'Route name',
    requested_server_name VARCHAR(255) COMMENT 'SNI',
    istio_policy_status VARCHAR(100) COMMENT 'Istio policy status',
    ai_log JSON COMMENT 'WASM AI log',
    instance_id VARCHAR(255) COMMENT 'Instance ID',
    api VARCHAR(255) COMMENT 'API name',
    model VARCHAR(255) COMMENT 'Model name',
    consumer VARCHAR(255) COMMENT 'Consumer information',
    route VARCHAR(255) COMMENT 'Route name',
    service VARCHAR(255) COMMENT 'Service name',
    mcp_server VARCHAR(255) COMMENT 'MCP Server',
    mcp_tool VARCHAR(255) COMMENT 'MCP Tool',
    input_tokens BIGINT COMMENT 'Number of input tokens',
    output_tokens BIGINT COMMENT 'Number of output tokens',
    total_tokens BIGINT COMMENT 'Total number of tokens',
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

### 2. Deploy Log Collector Service

Save the following YAML as `log-collector.yaml` and apply:

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
        # Modify to your MySQL connection information
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

Apply the deployment:

```bash
kubectl apply -f log-collector.yaml
```

### 3. Verify Deployment

Check Pod status:

```bash
kubectl get pods -n higress-system -l app=log-collector
```

View logs to confirm service started normally:

```bash
kubectl logs -n higress-system deployment/log-collector
```

Test health check endpoint:

```bash
kubectl exec -n higress-system deployment/log-collector -- wget -qO- http://localhost:8080/health
```

### 4. Customize Log Collector (Optional)

If you need to customize the log pusher functionality, you can reference the source code for modifications and rebuild:

**Source Code Location:**
```
higress/plugins/wasm-go/extensions/db-log-pusher/
```

**Pusher Source Code Location:**
```
higress/plugins/wasm-go/extensions/db-log-pusher/main.go
```

**Collector Source Code Location:**
```
higress/plugins/wasm-go/extensions/db-log-pusher/log-collector/
```

**Main Features:**
- Provides `/ingest` endpoint to receive logs (POST)
- Provides `/query` endpoint to query logs (GET)
- Provides `/health` endpoint for health check
- Batch write to database (refresh every 50 records or every second by default)
- Supports rich query parameters (time range, instance ID, API, model, MCP Server, etc.)

**Build Image:**
```bash
cd higress/plugins/wasm-go/extensions/db-log-pusher/log-collector
docker build -t your-registry/log-collector:latest .
```

### 5. Considerations

1. **Performance Considerations**: The default log-collector is deployed as a single instance, suitable for small to medium traffic scenarios. For high concurrency scenarios, it is recommended to:
   - Increase the number of replicas
   - Use message queues (such as Kafka) as buffers
   - Adopt professional log systems (such as Elasticsearch + Logstash)

2. **Data Security**: 
   - It is recommended to use independent database accounts with limited permissions
   - Use TLS encryption for database connections in production environments
   - Regularly backup log data

3. **Resource Limits**: Adjust container CPU and memory limits according to actual traffic

4. **Monitoring and Alerting**: It is recommended to add monitoring metrics for log-collector, such as:
   - HTTP request success rate
   - Database write latency
   - Buffer queue length

## Usage Notes

### Plugin Execution Order
If you need to read AI logs written by the `ai-statistics` plugin, ensure that:
1. In the WasmPlugin resource, the phase of `db-log-pusher` should be later than `ai-statistics`
2. Or in the same phase, the priority of `db-log-pusher` should be lower than `ai-statistics` (higher numbers mean higher priority)

### Performance Considerations
- The plugin uses asynchronous mode to send logs without blocking the main request flow
- For large request bodies, the plugin will handle them appropriately to avoid memory issues
- Log sending failures will not affect the main business process

### Integration with Other Plugins
- When integrated with authentication plugins, consumer information can be obtained from authentication information
- When integrated with routing plugins, more accurate routing and service information can be obtained
- When integrated with MCP services, tool invocation related information can be obtained

## Troubleshooting

### Logs Not Sent
1. Check if the collector service is running normally
2. Verify network connectivity
3. Check error messages in Higress gateway logs

### Configuration Verification
- Ensure `collector_service_name` and `collector_port` are configured correctly
- Verify that the collector service can receive log data in JSON format

## Advanced Configuration

For more complex deployment scenarios, you can adjust the following parameters as needed:
- `collector_path`: Adjust according to your log collection service API path
- Coordinate with other monitoring tools for log formatting and processing