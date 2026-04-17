---
title: "Database-Based Observability"
keywords: [db-log-pusher, db-log-collector, log collection, observability, database]
description: An open-source observability solution based on db-log-pusher (WASM plugin) + db-log-collector (log collection service) + MySQL.
---

# Database-Based Observability

:::caution[Important Notice]
Database-based observability is currently an experimental feature intended for PoC demonstrations only. For production environments, please use the [Alibaba Cloud SLS solution](/en/docs/himarket/himarket-sls-observability/).
:::

## Introduction

> **Source Repositories**:
> - **Plugin + Collector source code**: [https://github.com/higress-group/db-log-pusher](https://github.com/higress-group/db-log-pusher)
> - **Higress integration**: You need to manually clone the source code and integrate it into the `plugins/wasm-go/extensions` directory of the [Higress repository](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions)

This solution is based on `db-log-pusher` (WASM plugin) + `db-log-collector` (log collection service) + MySQL, providing fully open-source observability capabilities. It is suitable for small-to-medium traffic scenarios where you are not using Alibaba Cloud and prefer to store log data in your own database.

If you are using Alibaba Cloud, we recommend the [Alibaba Cloud SLS solution](/en/docs/himarket/himarket-sls-observability/).

## Architecture Overview

```
Higress Gateway
  └─ db-log-pusher (WASM Plugin) ──HTTP POST──▶ db-log-collector (Go Service) ──▶ MySQL (access_logs table)
                                                                                      ▲
                                                                              HiMarket Backend Queries
```

Component descriptions:

- `db-log-pusher`: A Higress WASM plugin that asynchronously collects request/response logs and pushes them to the collector service without blocking the main business flow
- `db-log-collector`: A log collection service written in Go that receives logs and batch-writes them to MySQL (by default, every 50 records or once per second)
- `access_logs` table: Stores all access logs; the HiMarket backend queries this table directly to power the observability dashboard

## Configuration Steps

### Step 1: Prepare the MySQL Database

Create the database and the `access_logs` table.

:::tip[About Database Selection]
The `access_logs` table can be placed in the same MySQL instance as the HiMarket business tables (HiMarket will reuse the application datasource for queries), or in a separate MySQL instance. If you use a separate instance, you will need to configure an additional datasource connection in Step 4. For small-to-medium traffic scenarios, sharing the same instance is recommended to simplify deployment.
:::

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
    duration BIGINT COMMENT 'Total request duration (ms)',
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
    ai_log JSON COMMENT 'AI log (model, token, MCP, etc.)',
    instance_id VARCHAR(255) COMMENT 'Instance ID',
    api VARCHAR(255) COMMENT 'API name',
    model VARCHAR(255) COMMENT 'Model name',
    consumer VARCHAR(255) COMMENT 'Consumer info',
    route VARCHAR(255) COMMENT 'Route name',
    service VARCHAR(255) COMMENT 'Service name',
    mcp_server VARCHAR(255) COMMENT 'MCP Server',
    mcp_tool VARCHAR(255) COMMENT 'MCP Tool',
    input_tokens BIGINT COMMENT 'Input token count',
    output_tokens BIGINT COMMENT 'Output token count',
    total_tokens BIGINT COMMENT 'Total token count',
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

### Step 2: Deploy the db-log-collector Service

db-log-collector is an HTTP service written in Go that receives logs pushed by db-log-pusher and batch-writes them to MySQL. Choose a deployment method below:

#### Option 1: Kubernetes Deployment (Recommended)

Save the following YAML as `log-collector.yaml` and apply it:

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

Deploy and verify:

```bash
kubectl apply -f log-collector.yaml
kubectl get pods -n higress-system -l app=log-collector
kubectl exec -n higress-system deployment/log-collector -- wget -qO- http://localhost:8080/health
```

#### Option 2: Docker Standalone Deployment

If you want to quickly deploy on a local machine or a single server, you can run the log collection service using Docker.

**Deployment command:**

```bash
docker run -d \
  --name log-collector \
  -p 8080:8080 \
  -e MYSQL_DSN="user:password@tcp(mysql-host:3306)/higress_poc?charset=utf8mb4&parseTime=True&loc=Local" \
  --restart unless-stopped \
  registry.cn-shanghai.aliyuncs.com/daofeng/log-collector:latest
```

**Parameter descriptions:**
- `-d`: Run the container in the background
- `--name log-collector`: Specify the container name
- `-p 8080:8080`: Map the container's port 8080 to the host
- `-e MYSQL_DSN`: Set the MySQL database connection string; modify according to your environment
- `--restart unless-stopped`: Automatically restart the container on exit (unless manually stopped)

**Verify the deployment:**

Check the container status:
```bash
docker ps | grep log-collector
```

View container logs:
```bash
docker logs -f log-collector
```

Test the health check endpoint:
```bash
curl http://localhost:8080/health
```

**Stop and remove the container:**

```bash
# Stop the container
docker stop log-collector

# Remove the container
docker rm log-collector
```

### Step 3: Configure the db-log-pusher Plugin

Configure the `db-log-pusher` WASM plugin in Higress to push gateway logs to the collector service.

#### Option 1: Configure via Higress Console (Recommended)

This is the simplest and most straightforward approach — you can complete the plugin installation and configuration through the Higress Console's graphical interface.

1. **Access the Higress Console**
   - Log in to the Higress Console management page
   - Navigate to **Plugin Configuration** -> **Add Plugin**

2. **Fill in the plugin information**
   - **Plugin Name**: `db-log-pusher-plugin`
   - **Plugin Description**: `Collect HTTP request logs to database`
   - **Image URL**: `https://pysrc-test.oss-cn-beijing.aliyuncs.com/higress-plugin/plugin-20260323-101235.wasm`
   - **Plugin Execution Phase**: Select **Authentication Phase** (AUTHN)
   - **Plugin Execution Priority**: `1010` (range 1~1000, higher values mean higher priority)
   - **Plugin Pull Policy**: Select **Always Pull** (Always)

3. **Configure routes and policies**
   - On the plugin configuration page, click "Add Match Rule"
   - In the **ingress** list, select or enter the service names to which this plugin should be applied, for example:
     - `model-api-qwen3-plus-0`
     - `travel-assistant`

4. **Configure plugin parameters**
   - In the **Custom Plugin Configuration** area, select the `db-log-pusher` plugin you just created
   - In the parameter configuration form, enter the following parameters one per line (format: `key: value`):
   ```
   log_level: info
   collector_service_name: log-collector.higress-system.svc.cluster.local
   collector_port: 80
   collector_path: /ingest
   ```
   - Ensure **configDisable** is set to `false` (enable configuration)

5. **Save the configuration**
   - Click the "Save" button to complete the configuration
   - Higress will automatically deploy the plugin to the gateway

Configuration notes:
- **Execution Phase**: Select the Authentication Phase (AUTHN) for statistics and log collection
- **Priority**: Set to 1010 to ensure it is higher than the `ai-statistics` plugin's priority
- **Pull Policy**: Always pull the latest version to ensure you are using the newest plugin features

#### Option 2: Configure via Kubernetes YAML

If you prefer using Kubernetes-native configuration, you can deploy the plugin by creating a WasmPlugin resource:

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
  url: https://pysrc-test.oss-cn-beijing.aliyuncs.com/higress-plugin/plugin-20260323-101235.wasm
  sha256: ""  # Recommended: fill in the SHA256 checksum of the WASM file
  defaultConfigDisable: true
  failStrategy: FAIL_OPEN
  imagePullPolicy: Always
  phase: AUTHN
  priority: 1010
  matchRules:
    - configDisable: false
      ingress:
        - model-api-qwen3-plus-0    # Replace with your route names
        - travel-assistant
      config:
        log_level: info
        collector_service_name: "log-collector.higress-system.svc.cluster.local"
        collector_port: 80
        collector_path: "/ingest"
```

Apply the configuration:

```bash
kubectl apply -f db-log-pusher.yaml
```

:::note[Collector Address for Local Development]
If db-log-collector is running locally (not in K8s), change `collector_service_name` to your machine's IP (e.g., `192.168.1.100`) and `collector_port` to the mapped port (e.g., `8081`).
:::

Plugin configuration parameters:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `collector_service_name` | string | Yes | - | Collector service address (K8s FQDN or IP) |
| `collector_port` | int | Yes | - | Collector port |
| `collector_path` | string | No | `/` | API path for receiving logs |

#### Plugin Execution Order

If you need to read AI logs written by the `ai-statistics` plugin, ensure that `db-log-pusher` executes after `ai-statistics`:
- When in different phases, the phase of `db-log-pusher` should be later than that of `ai-statistics`
- When in the same phase, the priority of `db-log-pusher` should be higher than that of `ai-statistics` (higher numbers execute first)

### Step 4: Configure HiMarket

Switch HiMarket's log datasource to DB:

```bash
export OBSERVABILITY_LOG_SOURCE="DB"
```

Or edit `himarket-bootstrap/src/main/resources/application.yml`:

```yaml
observability:
  log-source: DB
```

:::tip[Database Connection]
By default, HiMarket reuses the application datasource (i.e., the `spring.datasource` configuration) to query the `access_logs` table. If the `access_logs` table and the HiMarket business tables are in the same MySQL instance, no additional configuration is needed. If you use a separate MySQL instance for log storage, you need to point HiMarket's database connection to that instance, or create the `access_logs` table in the HiMarket business database.
:::

### Step 5: Start and Verify

After starting HiMarket, check the logs to confirm the datasource switch was successful:

```
INFO  c.a.h.config.ObservabilityConfig - Observability log source: DB
INFO  c.a.h.config.ObservabilityConfig - DB datasource URL: jdbc:mysql://..., table: access_logs
```

Verify the data pipeline:

1. Send a few requests through the Higress gateway to generate access logs
2. Check whether data has been written to the `access_logs` table: `SELECT COUNT(*) FROM access_logs;`
3. Log in to the HiMarket admin console and check whether the observability dashboard shows data

## Custom Development

If you need to customize db-log-pusher or db-log-collector, refer to the source code:

**Source repository relationships:**
- **Standalone repository**: [https://github.com/higress-group/db-log-pusher](https://github.com/higress-group/db-log-pusher) - Contains the complete plugin and collector source code
- **Higress integration**: [https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions) - The plugin directory in the official Higress repository

**Source code structure:**
```
db-log-pusher/
├── main.go                      # Pusher plugin main program
└── log-collector/               # Collector server
    ├── main.go                  # Collector main program
    ├── Dockerfile               # Docker image build file
    └── ...                      # Other dependency files
```

db-log-collector main interfaces:
- `POST /ingest`: Receive logs
- `GET /query`: Query logs
- `GET /health`: Health check

Build the image:

```bash
# Clone the db-log-pusher repository
git clone git@github.com:higress-group/db-log-pusher.git

# Clone the higress repository
git clone git@github.com:alibaba/higress.git

# Copy the db-log-collector directory to the higress plugin directory
cp -r db-log-pusher/log-collector higress/plugins/wasm-go/extensions/db-log-pusher/

# Enter the directory and build the image
cd higress/plugins/wasm-go/extensions/db-log-pusher/log-collector
docker build -t your-registry/log-collector:latest .
```

## Important Notes

1. **Performance**: Deployed as a single instance by default, suitable for small-to-medium traffic. For high-concurrency scenarios, consider increasing replicas or introducing a message queue as a buffer.
2. **Data Security**: It is recommended to use a dedicated database account with restricted permissions. Use TLS-encrypted connections in production environments.
3. **Resource Limits**: Adjust the container's CPU and memory limits based on actual traffic.
4. **Plugin Characteristics**: Logs are sent asynchronously in a non-blocking manner. Send failures do not affect the main business flow. A built-in 5-second timeout prevents blocking.

## Troubleshooting

### Logs Not Written to the Database

1. Check whether db-log-collector is running properly (`curl http://<collector-host>:<port>/health`)
2. Verify that the `MYSQL_DSN` configuration is correct and the collector can connect to MySQL
3. Review the db-log-collector logs for errors
4. Confirm that the `collector_service_name` and `collector_port` in the db-log-pusher plugin configuration are correct

### No Data on the HiMarket Dashboard

1. Confirm that `OBSERVABILITY_LOG_SOURCE` is set to `DB`
2. Confirm that the `access_logs` table contains data: `SELECT COUNT(*) FROM access_logs;`
3. Confirm that HiMarket's database connection points to the MySQL instance containing the `access_logs` table
4. Review the HiMarket application logs for query errors
