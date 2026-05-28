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
> - **Official image release**: Both `db-log-pusher` and `db-log-collector` are published by the source repository CI to the official Higress open-source registry

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

Create the database first. The latest `db-log-collector` automatically creates the missing `access_logs` table in the database pointed to by `MYSQL_DSN`, and creates any missing indexes.

:::tip[About Database Selection]
HiMarket DB observability queries reuse the application datasource (`spring.datasource`). There is currently no separate log datasource configuration. Therefore, `access_logs` must exist in the database pointed to by the HiMarket application datasource. For small-to-medium traffic scenarios, sharing the same database with the HiMarket business tables is recommended to simplify deployment.
:::

If you need to create the table manually, use the schema below, which matches the current `db-log-collector` source code. `start_time` is stored as Unix epoch seconds, and the table includes the `request_body` and `response_body` columns.

```sql
CREATE DATABASE IF NOT EXISTS higress_poc
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE higress_poc;

CREATE TABLE IF NOT EXISTS access_logs (
  id bigint NOT NULL AUTO_INCREMENT COMMENT 'Primary key ID',
  start_time bigint NULL DEFAULT NULL COMMENT 'Request start time (Unix epoch seconds)',
  trace_id varchar(64) NULL DEFAULT NULL COMMENT 'X-B3-TraceID distributed tracing ID',
  authority varchar(128) NULL DEFAULT NULL COMMENT 'Host/Authority domain',
  method varchar(16) NULL DEFAULT NULL COMMENT 'HTTP method (GET/POST, etc.)',
  path varchar(1024) NULL DEFAULT NULL COMMENT 'Request path',
  protocol varchar(16) NULL DEFAULT NULL COMMENT 'HTTP protocol version (HTTP/1.1, etc.)',
  request_id varchar(64) NULL DEFAULT NULL COMMENT 'X-Request-ID request identifier',
  user_agent varchar(512) NULL DEFAULT NULL COMMENT 'User-Agent client information',
  x_forwarded_for varchar(256) NULL DEFAULT NULL COMMENT 'X-Forwarded-For client IP',
  response_code int NULL DEFAULT NULL COMMENT 'Response status code (200/404/500, etc.)',
  response_flags varchar(64) NULL DEFAULT NULL COMMENT 'Envoy response flags',
  response_code_details varchar(256) NULL DEFAULT NULL COMMENT 'Response code details',
  bytes_received bigint NULL DEFAULT NULL COMMENT 'Bytes received',
  bytes_sent bigint NULL DEFAULT NULL COMMENT 'Bytes sent',
  duration int NULL DEFAULT NULL COMMENT 'Total request duration (ms)',
  upstream_cluster varchar(256) NULL DEFAULT NULL COMMENT 'Upstream cluster name',
  upstream_host varchar(256) NULL DEFAULT NULL COMMENT 'Upstream host address',
  upstream_service_time varchar(32) NULL DEFAULT NULL COMMENT 'Upstream service time',
  upstream_transport_failure_reason varchar(256) NULL DEFAULT NULL COMMENT 'Upstream transport failure reason',
  upstream_local_address varchar(64) NULL DEFAULT NULL COMMENT 'Upstream local address',
  downstream_local_address varchar(64) NULL DEFAULT NULL COMMENT 'Downstream local address',
  downstream_remote_address varchar(64) NULL DEFAULT NULL COMMENT 'Downstream remote address',
  route_name varchar(256) NULL DEFAULT NULL COMMENT 'Route name',
  requested_server_name varchar(256) NULL DEFAULT NULL COMMENT 'SNI server name',
  istio_policy_status varchar(64) NULL DEFAULT NULL COMMENT 'Istio policy status',
  ai_log json NULL DEFAULT NULL COMMENT 'WASM AI log (JSON string)',
  instance_id varchar(128) NULL DEFAULT NULL COMMENT 'Instance ID (Pod name or container ID)',
  api varchar(128) NULL DEFAULT NULL COMMENT 'API name (for example, chat/completions)',
  model varchar(128) NULL DEFAULT NULL COMMENT 'Model name (for example, qwen-max)',
  consumer varchar(256) NULL DEFAULT NULL COMMENT 'Consumer information (username/API key, etc.)',
  route varchar(256) NULL DEFAULT NULL COMMENT 'Route name (redundant field for easier queries)',
  service varchar(256) NULL DEFAULT NULL COMMENT 'Service name (upstream service)',
  mcp_server varchar(256) NULL DEFAULT NULL COMMENT 'MCP server name',
  mcp_tool varchar(256) NULL DEFAULT NULL COMMENT 'MCP tool name',
  input_tokens bigint NULL DEFAULT NULL COMMENT 'Input token count',
  output_tokens bigint NULL DEFAULT NULL COMMENT 'Output token count',
  total_tokens bigint NULL DEFAULT NULL COMMENT 'Total token count',
  request_body mediumtext NULL DEFAULT NULL COMMENT 'Request body (up to 16MB)',
  response_body mediumtext NULL DEFAULT NULL COMMENT 'Response body (up to 16MB)',
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='HTTP access log table';

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

:::caution[Existing Table Migration]
If you already created an `access_logs` table from the old document with `start_time DATETIME`, the latest `db-log-collector` will not automatically alter existing columns or add request/response body columns. Migrate the table manually, or drop the old table and let the collector create the new schema.
:::

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
  opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/log-collector:latest
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
   - **Image URL**: `oci://opensource-registry.cn-hangzhou.cr.aliyuncs.com/plugins/db-log-pusher:latest`
   - **Plugin Execution Phase**: Select **Authentication Phase** (AUTHN)
   - **Plugin Execution Priority**: `1000` (must be higher than `ai-statistics`; within the same phase, higher numbers run earlier on the request path and later on the response path)
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
- **Execution Phase**: Select the Authentication Phase (AUTHN), so `db-log-pusher` is placed before `ai-statistics` in the request filter chain and therefore reads AI logs after `ai-statistics` on the response path
- **Priority**: Set it to 1000 to keep it higher than `ai-statistics` when they are in the same phase; within the same phase, higher numbers run earlier on the request path and later on the response path
- **Pull Policy**: When using `latest`, select Always so the gateway re-pulls the registry's current `latest` content; the actual version still depends on what the registry tag points to

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
  url: oci://opensource-registry.cn-hangzhou.cr.aliyuncs.com/plugins/db-log-pusher:latest
  defaultConfigDisable: true
  failStrategy: FAIL_OPEN
  imagePullPolicy: Always
  phase: AUTHN
  priority: 1000
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
        # instance_id: "higress-gateway"  # Optional. If unset, the plugin tries to read it from gateway metadata.
```

Apply the configuration:

```bash
kubectl apply -f db-log-pusher.yaml
```

:::note[Collector Address for Local Development]
If db-log-collector runs outside the K8s cluster, set `collector_service_name` to an address that the Higress gateway pods can resolve and reach, and make sure the data plane has a matching outbound cluster, for example through a Kubernetes Service, ServiceEntry, or resolvable DNS/FQDN. Do not use a local `localhost` address that the gateway pods cannot access.
:::

Plugin configuration parameters:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `collector_service_name` | string | Yes | - | Collector service address resolvable and reachable from the gateway data plane, such as a FQDN or service address |
| `collector_port` | int | Yes | - | Collector port |
| `collector_path` | string | No | `/` | API path for receiving logs |
| `instance_id` | string | No | Automatically read from gateway metadata | Gateway instance ID for instance-level queries |

#### Plugin Execution Order

`db-log-pusher` reads AI logs written by `ai-statistics` on the response path. Because HTTP filters run in reverse order on the response path, ensure that `db-log-pusher` is placed before `ai-statistics` in the request filter chain:
- When in different phases, the phase of `db-log-pusher` should be earlier than that of `ai-statistics` (for example, AUTHN is earlier than the default phase)
- When in the same phase, the priority of `db-log-pusher` should be higher than that of `ai-statistics` (higher numbers run earlier on the request path and later on the response path)

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
By default, HiMarket reuses the application datasource (i.e., the `spring.datasource` configuration) to query the `access_logs` table. If the `access_logs` table and the HiMarket business tables are in the same database, no additional configuration is needed. Do not create `access_logs` only in a separate database and expect `OBSERVABILITY_LOG_SOURCE=DB` to connect to it automatically.
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

# Enter the directory and build the image
cd db-log-pusher/log-collector
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
