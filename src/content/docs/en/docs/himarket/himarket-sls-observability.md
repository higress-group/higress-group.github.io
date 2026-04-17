---
title: "Observability with Alibaba Cloud SLS (Recommended)"
description: "Configuration guide for HiMarket observability dashboards based on Alibaba Cloud SLS Log Service"
date: "2025-12-24"
category: "article"
keywords: ["HiMarket", "Observability", "Metering", "SLS", "Alibaba Cloud"]
authors: "Higress Team"
---

## Introduction

HiMarket integrates with Alibaba Cloud SLS (Simple Log Service) to provide observability capabilities, supporting metric aggregation, chart visualization, and log search based on access logs. This guide walks you through configuring SLS observability.

The SLS approach is suitable for the following scenarios:

- Using the Alibaba Cloud commercial AI Gateway (Alibaba Cloud AI Gateway or Apsara Stack Enterprise Edition) — simply enable SLS log delivery (works out of the box)
- Using open-source Higress — configure the ai-statistics plugin and log collection to deliver logs to Alibaba Cloud SLS

If you are not using an Alibaba Cloud environment, you can choose the [Database-based Observability](/en/docs/himarket/himarket-db-observability/) approach instead.

## Feature Overview

- **Observability Dashboards**: Model invocation statistics, MCP tool invocation statistics, request success rate, response time, and more
- **Log Query**: Custom SQL queries against access logs
- **Authentication**: Supports both STS (default) and AK/SK authentication methods
- **Automatic Degradation**: When SLS is not configured, the system automatically returns empty data without affecting normal operation


## Configuration Steps

- For open-source Higress, the following configuration is required
- For the Alibaba Cloud commercial AI Gateway (Alibaba Cloud / Apsara Stack Enterprise Edition), no configuration below is needed — just enable log delivery.

### Step 1: Prepare SLS Resources

Before starting the configuration, you need to prepare the following resources in the Alibaba Cloud SLS console:

#### 1.1 Create a Project and Logstore

1. Log in to the [Alibaba Cloud SLS Console](https://sls.console.aliyun.com/)
2. Create a Project (e.g., `apigateway-csb-cop`)
3. Create a Logstore under the Project (e.g., `apig-access-log`)

#### 1.2 Configure Log Collection

Collect gateway access logs into the Logstore created above. We recommend using Higress 2.1.9 or later, as the accesslogformat has been optimized for the HiMarket observability dashboards.

The log format includes the following key fields:

**Basic Fields:**

- `__time__`: Timestamp
- `response_code`: Response status code
- `duration`: Request duration
- `method`: Request method
- `consumer`: Caller identifier
- `route_name`: Route name
- `upstream_cluster`: Upstream service

**AI-related Fields (JSON-formatted `ai_log` field):**
- `model`: Model name
- `api`: API name
- `input_token`: Input token count
- `output_token`: Output token count
- `response_type`: Response type (stream/normal)
- `llm_service_duration`: LLM service duration
- `cache_status`: Cache status (hit/miss/skip)
- `token_ratelimit_status`: Rate limiting status
- `mcp_tool_name`: MCP tool name

#### 1.3 Configure Indexes

HiMarket provides an automatic index update API that configures indexes automatically on startup (AK/SK must have index creation permissions).

- **Text fields**: `method`, `consumer`, `route_name`, `upstream_cluster`, etc.
- **Numeric fields**: `duration`, `bytes_received`, `bytes_sent`, `response_code`, etc.
- **JSON fields**: `ai_log` (enable JSON indexing, which includes the AI-related fields listed above)

#### 1.4 Obtain Authentication Credentials

Prepare AK/SK authentication credentials:

**AK/SK (Recommended for development and testing environments)**

1. Log in to the Alibaba Cloud console
2. Navigate to the AccessKey management page
3. Create or retrieve your AccessKey ID and AccessKey Secret
4. Ensure the AccessKey has SLS read permissions

### Step 2: Configure HiMarket

All SLS configuration in HiMarket is injected via environment variables — no configuration file changes are needed. `application.yml` already includes environment variable placeholders with default values:

| Environment Variable | Description | Default Value |
|----------|------|--------|
| `SLS_ENDPOINT` | SLS service endpoint (required), format: `<region>.log.aliyuncs.com` | Empty (automatically degrades to returning empty data when not configured) |
| `SLS_AUTH_TYPE` | Authentication method | `STS` |
| `SLS_ACCESS_KEY_ID` | AccessKey ID (required for `AK_SK` mode) | Empty |
| `SLS_ACCESS_KEY_SECRET` | AccessKey Secret (required for `AK_SK` mode) | Empty |
| `SLS_DEFAULT_PROJECT` | SLS Project name | `apigateway-csb-cop` |
| `SLS_DEFAULT_LOGSTORE` | SLS Logstore name | `apig-access-log` |
| `OBSERVABILITY_LOG_SOURCE` | Log data source type | `SLS` |

> `SLS_AUTH_TYPE` supports two values: `STS` (for Alibaba Cloud ECS/ACK and other environments with instance roles) and `AK_SK` (for development/testing or non-Alibaba Cloud environments).

Choose the configuration method based on your deployment approach:

#### Local Development / Bare Metal Deployment

```bash
export SLS_ENDPOINT="cn-hangzhou.log.aliyuncs.com"
export SLS_AUTH_TYPE="AK_SK"
export SLS_ACCESS_KEY_ID="your-access-key-id"
export SLS_ACCESS_KEY_SECRET="your-access-key-secret"
# The following two can be omitted if they match the default values
export SLS_DEFAULT_PROJECT="apigateway-csb-cop"
export SLS_DEFAULT_LOGSTORE="apig-access-log"
```

#### Docker Compose Deployment

Add the following to the `environment` section in `docker-compose.yml`:

```yaml
services:
  himarket-server:
    environment:
      - SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com
      - SLS_AUTH_TYPE=AK_SK
      - SLS_ACCESS_KEY_ID=your-access-key-id
      - SLS_ACCESS_KEY_SECRET=your-access-key-secret
```

#### Kubernetes / Helm Deployment

Inject the environment variables above via Secret or ConfigMap. It is recommended to store AK/SK in a Secret:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: himarket-sls-secret
type: Opaque
stringData:
  SLS_ACCESS_KEY_ID: "your-access-key-id"
  SLS_ACCESS_KEY_SECRET: "your-access-key-secret"
---
# Reference in Deployment
env:
  - name: SLS_ENDPOINT
    value: "cn-hangzhou.log.aliyuncs.com"
  - name: SLS_AUTH_TYPE
    value: "AK_SK"
  - name: SLS_ACCESS_KEY_ID
    valueFrom:
      secretKeyRef:
        name: himarket-sls-secret
        key: SLS_ACCESS_KEY_ID
  - name: SLS_ACCESS_KEY_SECRET
    valueFrom:
      secretKeyRef:
        name: himarket-sls-secret
        key: SLS_ACCESS_KEY_SECRET
```

### Step 3: Start and Verify

After starting HiMarket, check the logs to confirm that the SLS configuration was loaded successfully:

```bash
# Development environment
mvn clean install -pl himarket-bootstrap -am
cd himarket-bootstrap && mvn spring-boot:run

# Production environment
java -jar himarket-bootstrap/target/himarket-bootstrap.jar
```

Log output on successful startup:

```
INFO  c.a.h.config.ObservabilityConfig - Observability log source: SLS
INFO  c.a.h.config.ObservabilityConfig - SLS endpoint: cn-hangzhou.log.aliyuncs.com, project: apigateway-csb-cop, logstore: apig-access-log, authType: AK_SK
```

If `SLS_ENDPOINT` is not configured, the following warning will be logged (this does not affect system operation; observability APIs will return empty data):

```
WARN  c.a.h.config.ObservabilityConfig - SLS endpoint is not configured! Queries will return empty results.
```

## Higress Plugin Configuration

### Model Dashboard

`ai-statistics` plugin configuration example:

```yaml
  - config:
      attributes:
      - apply_to_log: true
        default_value: unknown
        key: consumer
        value: x-mse-consumer
        value_source: request_header
      - apply_to_log: true
        key: fallback_from
        value: x-higress-fallback-from
        value_source: request_header
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: question
        trace_span_key: gen_ai.input.messages
        value: messages.@reverse.0.content
        value_source: request_body
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: answer
        rule: append
        trace_span_key: gen_ai.input.messages
        value: choices.0.delta.content
        value_source: response_streaming_body
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: answer
        trace_span_key: gen_ai.input.messages
        value: choices.0.message.content
        value_source: response_body
    configDisable: false
    ingress:
    - ai-route-higress-qwen-max.internal
```

### MCP Dashboard

`ai-statistics` plugin configuration example:

```yaml
  - config:
      attributes:
      - apply_to_log: true
        key: jsonrpc_version
        value: x-envoy-jsonrpc-version
        value_source: request_header
        trace_span_key: network.protocol.version
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_id
        value: x-envoy-jsonrpc-id
        value_source: request_header
        trace_span_key: rpc.jsonrpc.request_id
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_method
        value: x-envoy-jsonrpc-method
        value_source: request_header
        trace_span_key: mcp.method.name
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_params
        value: x-envoy-jsonrpc-params
        value_source: request_header
        trace_span_key: mcp.arguments
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_result
        value: x-envoy-jsonrpc-result
        value_source: response_header
      - apply_to_log: true
        apply_to_span: true
        attribute_key: tool.name
        key: mcp_tool_name
        value: x-envoy-mcp-tool-name
        value_source: request_header
        trace_span_key: mcp.tool.name
        apply_to_span: true
      - apply_to_log: true
        apply_to_span: true
        attribute_key: tool.parameters
        key: mcp_tool_arguments
        value: x-envoy-mcp-tool-arguments
        value_source: request_header
      - apply_to_log: true
        key: mcp_tool_response
        value: x-envoy-mcp-tool-response
        value_source: response_header
      - apply_to_log: true
        key: mcp_tool_error
        value: x-envoy-mcp-tool-error
        value_source: response_header
    configDisable: false
    ingress:
    - mcp-server-travel.internal
```

`pre-request` plugin configuration example:

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  annotations:
  name: pre-request.internal
  namespace: himarket-system
spec:
  imagePullPolicy: Always
  matchRules:
  - config:
      stage: request
    configDisable: false
    ingress:
    - mcp-server-travel.internal
  phase: AUTHN
  priority: 1000
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0
```

`pre-response` plugin configuration example:

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  annotations:
  name: pre-response.internal
  namespace: himarket-system
spec:
  imagePullPolicy: Always
  matchRules:
  - config:
      stage: response
    configDisable: false
    ingress:
    - mcp-server-travel.internal
  phase: UNSPECIFIED_PHASE
  priority: 1000
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0
```

Plugin priority configuration:

```yaml
pre-request(json-converter):
  phase: AUTHN
  priority: 1000
  
key-auth:
  phase: AUTHN
  priority: 310

ai-statistics:
  phase: AUTHN
  priority: 100

pre-response(json-converter):
  phase: UNSPECIFIED_PHASE
  priority: 1000

mcp-server:
  phase: UNSPECIFIED_PHASE
  priority: 999
  
ai-security-guard:
  phase: UNSPECIFIED_PHASE
  priority: 850
```

## Preset Scenarios

HiMarket includes a rich set of preset query scenarios covering the Model Dashboard, MCP Dashboard, and more:

### Card Type (CARD)

| Scenario ID | Description | Applicable Dashboard |
|----------|------|----------|
| `pv` | Total request count | Model, MCP |
| `uv` | Unique caller count | Model, MCP |
| `fallback_count` | Fallback request count | Model |
| `bytes_received` | Gateway inbound traffic (MB) | MCP |
| `bytes_sent` | Gateway outbound traffic (MB) | MCP |
| `input_token_total` | Total input tokens | Model |
| `output_token_total` | Total output tokens | Model |
| `token_total` | Total tokens | Model |

### Line Chart Type (LINE)

| Scenario ID | Description | Applicable Dashboard |
|----------|------|----------|
| `qps_stream` | Streaming QPS | Model |
| `qps_normal` | Non-streaming QPS | Model |
| `qps_total` | Overall QPS | Model |
| `success_rate` | Request success rate | Model, MCP |
| `token_per_sec_input` | Input tokens/s | Model |
| `token_per_sec_output` | Output tokens/s | Model |
| `token_per_sec_total` | Total tokens/s | Model |
| `rt_avg_total` | Average response time (overall) | Model |
| `rt_avg_stream` | Average response time (streaming) | Model |
| `rt_avg_normal` | Average response time (non-streaming) | Model |
| `rt_first_token` | Time to first token | Model |
| `cache_hit/miss/skip` | Cache hit/miss/skip | Model |
| `ratelimited_per_sec` | Rate-limited requests/s | Model |
| `qps_by_status` | QPS grouped by status code | MCP |
| `qps_total_simple` | Total QPS | MCP |
| `rt_avg` | Average response time | MCP |
| `rt_p99/p95/p90/p50` | P99/P95/P90/P50 response time | MCP |

### Table Type (TABLE)

| Scenario ID | Description | Applicable Dashboard |
|----------|------|----------|
| `model_token_table` | Model token usage statistics | Model |
| `consumer_token_table` | Consumer token usage statistics | Model |
| `service_token_table` | Service token usage statistics | Model |
| `error_requests_table` | Error request statistics | Model |
| `ratelimited_consumer_table` | Rate-limited consumer statistics | Model |
| `risk_label_table` | Risk type statistics | Model |
| `risk_consumer_table` | Risk consumer statistics | Model |
| `method_distribution` | Method distribution | MCP |
| `gateway_status_distribution` | Gateway status code distribution | MCP |
| `backend_status_distribution` | Backend status code distribution | MCP |
| `request_distribution` | Request distribution | MCP |

### Filter Options Type (TABLE)

| Scenario ID | Description |
|----------|------|
| `filter_service_options` | Instance list |
| `filter_api_options` | API list |
| `filter_model_options` | Model list |
| `filter_route_options` | Route list |
| `filter_consumer_options` | Consumer list |
| `filter_upstream_options` | Upstream service list |
| `filter_mcp_tool_options` | MCP tool name list |
| `filter_mcp_server_options` | MCP Server list |


## Troubleshooting

### Issue 1: API Returns Empty Data

**Possible Causes:**
- SLS is not configured (`endpoint` is empty)
- Project or Logstore does not exist
- No log data within the specified time range
- Incorrect authentication credentials

**Solutions:**
1. Check that the configuration file or environment variables are set correctly
2. Review application logs to confirm SLS configuration loading status
3. Log in to the SLS console to verify that the Project and Logstore exist
4. Use the SLS console to query and verify that data exists
5. Verify that the AccessKey has SLS read permissions

### Issue 2: Query Timeout

**Possible Causes:**
- Time range is too large
- Log volume is too high
- Indexes are not configured or misconfigured

**Solutions:**
1. Narrow the query time range
2. Configure indexes for the Logstore in the SLS console
3. Use preset scenarios instead of complex custom queries
4. Increase the `interval` parameter to reduce the number of data points

### Issue 3: Query Results Do Not Match Expectations

**Possible Causes:**
- Log field mapping mismatch
- Incorrect index configuration
- SQL syntax errors

**Solutions:**
1. Confirm that log field names match the preset SQL queries
2. Check that JSON fields (e.g., `ai_log`) have JSON indexing enabled
3. Review application logs to see the actual SQL being executed
4. Manually execute the SQL in the SLS console to verify

### Issue 4: Authentication Failure

**Error Log:**
```
ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client
LogException: AccessKeyId is required
```

**Solutions:**
1. Confirm that environment variables are set correctly
2. Confirm that `auth-type` is set to `AK_SK`
3. Verify that the AccessKey ID and Secret are correct
4. Confirm that the AccessKey has not been disabled or expired



## Best Practices

### 1. Security

- **Do not** write AccessKeys directly into configuration files
- **Use** environment variables or Kubernetes Secrets to manage sensitive information
- **Rotate** AccessKeys regularly
- **Follow the principle of least privilege** — grant only SLS read permissions

### 2. Performance Optimization

- **Set reasonable** query time ranges — avoid querying more than 7 days at once
- **Configure indexes** to improve query performance
- **Use preset scenarios** instead of complex custom queries
- **Increase the interval** to reduce the number of time-series data points

### 3. Cost Control

- Configure Logstore retention periods based on actual needs
- Set reasonable log collection rules to avoid collecting unnecessary logs
- Use the SLS data lifecycle management feature

### 4. Monitoring and Alerting

- Configure query anomaly alerts in the SLS console
- Monitor SLS-related errors in HiMarket application logs
- Regularly check SLS usage and costs


## Appendix

### A. SLS Regional Endpoint List

| Region | Endpoint |
|------|----------|
| China East 1 (Hangzhou) | cn-hangzhou.log.aliyuncs.com |
| China East 2 (Shanghai) | cn-shanghai.log.aliyuncs.com |
| China North 1 (Qingdao) | cn-qingdao.log.aliyuncs.com |
| China North 2 (Beijing) | cn-beijing.log.aliyuncs.com |
| China North 3 (Zhangjiakou) | cn-zhangjiakou.log.aliyuncs.com |
| China South 1 (Shenzhen) | cn-shenzhen.log.aliyuncs.com |
| China Southwest 1 (Chengdu) | cn-chengdu.log.aliyuncs.com |

For more regions, refer to: https://help.aliyun.com/document_detail/29008.html

## Related Links

- [Alibaba Cloud SLS Official Documentation](https://help.aliyun.com/product/28958.html)
- [SLS SQL Syntax Reference](https://help.aliyun.com/document_detail/63449.html)
