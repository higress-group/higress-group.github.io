---
title: "HiMarket 可观测大盘使用指南"
description: "HiMarket 可观测大盘使用指南"
date: "2025-12-24"
category: "article"
keywords: ["HiMarket", "可观测", "计量"]
authors: "Higress Team"
---

# HiMarket 可观测大盘使用指南

## 简介

HiMarket 集成了阿里云 SLS（日志服务）提供可观测能力，支持基于访问日志的指标聚合、图表展示和日志检索。本手册将指导您完成 SLS 可观测功能的配置。

HiMarket 可观测功能模块依赖 SLS，暂未提供开源实现，目前只有以下情况可正常使用：

- 使用阿里云商业化 AI 网关（阿里云 AI 网关或者飞天企业版），开启 SLS 投递即可（开箱即用）
- 使用开源 Higress，通过配置 ai-statistics 插件和日志采集，投递到阿里云 SLS

## 功能概览

- **可观测大盘**：模型调用统计、MCP 工具调用统计、请求成功率、响应时间等
- **日志查询**：支持自定义 SQL 查询访问日志
- **认证方式**：支持 AK/SK 认证方式，STS 待支持
- **自动降级**：SLS 未配置时自动返回空数据，不影响系统正常运行


## 配置步骤

- 使用开源 Higress，需要进行如下配置
- 使用阿里云商业化 AI 网关（阿里云/飞天企业版），则无需进行以下配置，只需要开启日志投递即可。

### 步骤 1：准备 SLS 资源

在开始配置前，您需要在阿里云 SLS 控制台准备以下资源：

#### 1.1 创建 Project 和 Logstore

1. 登录[阿里云 SLS 控制台](https://sls.console.aliyun.com/)
2. 创建 Project（例如：`apigateway-csb-cop`）
3. 在 Project 下创建 Logstore（例如：`apig-access-log`）

#### 1.2 配置日志采集

将网关访问日志采集到上述 logstore。建议使用 higress 2.1.9 及以上版本，accesslogformat 已优化，适配了 HiMarket 可观测大盘。

日志格式包含以下关键字段：

**基础字段：**

- `__time__`: 时间戳
- `response_code`: 响应状态码
- `duration`: 请求耗时
- `method`: 请求方法
- `consumer`: 调用者标识
- `route_name`: 路由名称
- `upstream_cluster`: 上游服务

**AI 相关字段（JSON 格式的 `ai_log` 字段）：**
- `model`: 模型名称
- `api`: API 名称
- `input_token`: 输入 Token 数
- `output_token`: 输出 Token 数
- `response_type`: 响应类型（stream/normal）
- `llm_service_duration`: LLM 服务耗时
- `cache_status`: 缓存状态（hit/miss/skip）
- `token_ratelimit_status`: 限流状态
- `mcp_tool_name`: MCP 工具名称

#### 1.3 配置索引

HiMarket 提供了自动索引更新接口，启动后会自动配置索引（AK/SK 需要具备创建索引权限）

- **文本字段**：`method`、`consumer`、`route_name`、`upstream_cluster` 等
- **数值字段**：`duration`、`bytes_received`、`bytes_sent`、`response_code` 等
- **JSON 字段**：`ai_log`（开启 JSON 索引，包含上述 AI 相关字段）

#### 1.4 获取认证凭证

准备 AK/SK 认证凭证：

**AK/SK（推荐用于开发测试环境）**

1. 登录阿里云控制台
2. 进入 AccessKey 管理页面
3. 创建或获取 AccessKey ID 和 AccessKey Secret
4. 确保该 AccessKey 具有 SLS 读取权限

### 步骤 2：配置 HiMarket

#### 2.1 修改配置文件

编辑 `himarket-bootstrap/src/main/resources/application.yml`：

```yaml
sls:
  # SLS 服务端点（必填）
  # 格式：<region-id>.log.aliyuncs.com
  # 例如：cn-hangzhou.log.aliyuncs.com、cn-beijing.log.aliyuncs.com
  endpoint: ${SLS_ENDPOINT:}
  
  # 认证方式：AK_SK
  auth-type: ${SLS_AUTH_TYPE:AK_SK}
  
  # AK/SK 认证方式的密钥
  access-key-id: ${SLS_ACCESS_KEY_ID:}
  access-key-secret: ${SLS_ACCESS_KEY_SECRET:}
  
  # 默认 Project 名称
  default-project: ${SLS_DEFAULT_PROJECT:apigateway-csb-cop}
  
  # 默认 Logstore 名称
  default-logstore: ${SLS_DEFAULT_LOGSTORE:apig-access-log}
  
  # AliyunLogConfig CR 配置（K8s 环境使用）
  aliyun-log-config:
    # CR 所在的 namespace
    namespace: ${SLS_ALIYUN_LOG_CONFIG_NAMESPACE:apigateway-system}
    # CR 的名称
    cr-name: ${SLS_ALIYUN_LOG_CONFIG_CR_NAME:apigateway-access-log}
```

#### 2.2 使用环境变量配置（推荐）

为了安全性，建议通过环境变量传递敏感信息，而不是直接写入配置文件：

**Linux/macOS：**
```bash
export SLS_ENDPOINT="cn-hangzhou.log.aliyuncs.com"
export SLS_AUTH_TYPE="AK_SK"
export SLS_ACCESS_KEY_ID="your-access-key-id"
export SLS_ACCESS_KEY_SECRET="your-access-key-secret"
export SLS_DEFAULT_PROJECT="apigateway-csb-cop"
export SLS_DEFAULT_LOGSTORE="apig-access-log"
```

**Windows：**
```cmd
set SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com
set SLS_AUTH_TYPE=AK_SK
set SLS_ACCESS_KEY_ID=your-access-key-id
set SLS_ACCESS_KEY_SECRET=your-access-key-secret
set SLS_DEFAULT_PROJECT=apigateway-csb-cop
set SLS_DEFAULT_LOGSTORE=apig-access-log
```

**Docker 部署：**

编辑 `deploy/docker/docker-compose.yml`：

```yaml
services:
  himarket-server:
    environment:
      - SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com
      - SLS_AUTH_TYPE=AK_SK
      - SLS_ACCESS_KEY_ID=your-access-key-id
      - SLS_ACCESS_KEY_SECRET=your-access-key-secret
      - SLS_DEFAULT_PROJECT=apigateway-csb-cop
      - SLS_DEFAULT_LOGSTORE=apig-access-log
```

**Kubernetes 部署：**

编辑 `deploy/helm/values.yaml`：

```yaml
sls:
  endpoint: "cn-hangzhou.log.aliyuncs.com"
  authType: "AK_SK"
  accessKeyId: "your-access-key-id"
  accessKeySecret: "your-access-key-secret"
  defaultProject: "apigateway-csb-cop"
  defaultLogstore: "apig-access-log"
```

### 步骤 3：启动并验证

#### 3.1 启动 HiMarket

```bash
# 开发环境
mvn clean install
cd himarket-bootstrap
mvn spring-boot:run

# 生产环境
java -jar himarket-bootstrap/target/himarket-bootstrap.jar
```

#### 3.2 检查配置状态

启动后查看日志，确认 SLS 配置加载成功：

```
INFO  c.a.h.config.SlsConfig - SLS endpoint configured: cn-hangzhou.log.aliyuncs.com
INFO  c.a.h.config.SlsConfig - SLS auth type: AK_SK
INFO  c.a.h.config.SlsConfig - SLS default project: apigateway-csb-cop
INFO  c.a.h.config.SlsConfig - SLS default logstore: apig-access-log
```

## Higress 插件配置

### Model 大盘

`ai-statistics` 插件配置示例：

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

### MCP 大盘

`ai-statistics` 插件配置示例

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

`pre-request` 插件配置示例

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

`pre-response` 插件配置示例：

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

插件优先级调整：

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

## 预设场景说明

HiMarket 内置了丰富的预设查询场景，涵盖模型大盘、MCP 大盘等：

### 卡片类（CARD）

| 场景标识 | 说明 | 适用大盘 |
||||
| `pv` | 总请求次数 | 模型、MCP |
| `uv` | 独立调用者数量 | 模型、MCP |
| `fallback_count` | Fallback 请求数 | 模型 |
| `bytes_received` | 网关入流量（MB） | MCP |
| `bytes_sent` | 网关出流量（MB） | MCP |
| `input_token_total` | 输入 Token 总数 | 模型 |
| `output_token_total` | 输出 Token 总数 | 模型 |
| `token_total` | Token 总数 | 模型 |

### 线图类（LINE）

| 场景标识 | 说明 | 适用大盘 |
||||
| `qps_stream` | 流式 QPS | 模型 |
| `qps_normal` | 非流式 QPS | 模型 |
| `qps_total` | 总体 QPS | 模型 |
| `success_rate` | 请求成功率 | 模型、MCP |
| `token_per_sec_input` | 输入 Token/s | 模型 |
| `token_per_sec_output` | 输出 Token/s | 模型 |
| `token_per_sec_total` | 总 Token/s | 模型 |
| `rt_avg_total` | 平均响应时间（整体） | 模型 |
| `rt_avg_stream` | 平均响应时间（流式） | 模型 |
| `rt_avg_normal` | 平均响应时间（非流式） | 模型 |
| `rt_first_token` | 首包响应时间 | 模型 |
| `cache_hit/miss/skip` | 缓存命中/未命中/跳过 | 模型 |
| `ratelimited_per_sec` | 限流请求数/s | 模型 |
| `qps_by_status` | 按状态码分组的 QPS | MCP |
| `qps_total_simple` | 总 QPS | MCP |
| `rt_avg` | 平均响应时间 | MCP |
| `rt_p99/p95/p90/p50` | P99/P95/P90/P50 响应时间 | MCP |

### 表格类（TABLE）

| 场景标识 | 说明 | 适用大盘 |
||||
| `model_token_table` | 模型 Token 使用统计 | 模型 |
| `consumer_token_table` | 消费者 Token 使用统计 | 模型 |
| `service_token_table` | 服务 Token 使用统计 | 模型 |
| `error_requests_table` | 错误请求统计 | 模型 |
| `ratelimited_consumer_table` | 限流消费者统计 | 模型 |
| `risk_label_table` | 风险类型统计 | 模型 |
| `risk_consumer_table` | 风险消费者统计 | 模型 |
| `method_distribution` | Method 分布 | MCP |
| `gateway_status_distribution` | 网关状态码分布 | MCP |
| `backend_status_distribution` | 后端状态码分布 | MCP |
| `request_distribution` | 请求分布 | MCP |

### 筛选选项类（TABLE）

| 场景标识 | 说明 |
|||
| `filter_service_options` | 实例列表 |
| `filter_api_options` | API 列表 |
| `filter_model_options` | 模型列表 |
| `filter_route_options` | 路由列表 |
| `filter_consumer_options` | 消费者列表 |
| `filter_upstream_options` | 上游服务列表 |
| `filter_mcp_tool_options` | MCP 工具名称列表 |



## 故障排查

### 问题 1：接口返回空数据

**原因分析：**
- SLS 未配置（`endpoint` 为空）
- Project 或 Logstore 不存在
- 时间范围内无日志数据
- 认证信息错误

**解决方法：**
1. 检查配置文件或环境变量是否正确设置
2. 查看应用日志，确认 SLS 配置加载状态
3. 登录 SLS 控制台确认 Project 和 Logstore 存在
4. 使用 SLS 控制台查询验证数据是否存在
5. 验证 AccessKey 权限是否包含 SLS 读取权限

### 问题 2：查询超时

**原因分析：**
- 时间范围过大
- 日志量过大
- 索引未配置或配置不当

**解决方法：**
1. 缩小查询时间范围
2. 在 SLS 控制台为 Logstore 配置索引
3. 使用预设场景而非复杂自定义查询
4. 增加 `interval` 参数减少数据点数量

### 问题 3：查询结果与预期不符

**原因分析：**
- 日志字段映射不匹配
- 索引配置不正确
- SQL 语法错误

**解决方法：**
1. 确认日志字段名称与预设 SQL 一致
2. 检查 JSON 字段（如 `ai_log`）是否开启 JSON 索引
3. 查看应用日志获取实际执行的 SQL
4. 在 SLS 控制台手动执行 SQL 验证

### 问题 4：认证失败

**错误日志：**
```
ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client
LogException: AccessKeyId is required
```

**解决方法：**
1. 确认环境变量已正确设置
2. 确认 `auth-type` 为 `AK_SK`
3. 确认 AccessKey ID 和 Secret 无误
4. 确认 AccessKey 未被禁用或过期



## 最佳实践

### 1. 安全性

- **不要**将 AccessKey 直接写入配置文件
- **使用**环境变量或 Kubernetes Secret 管理敏感信息
- **定期轮换** AccessKey
- **遵循最小权限原则**，仅授予 SLS 读取权限

### 2. 性能优化

- **合理设置**查询时间范围，避免一次查询超过 7 天
- **配置索引**提升查询性能
- **使用预设场景**而非复杂自定义查询
- **增大 interval** 减少时序图数据点

### 3. 成本控制

- 按需配置 Logstore 存储周期
- 合理设置日志采集规则，避免采集无用日志
- 使用 SLS 的数据生命周期管理功能

### 4. 监控告警

- 在 SLS 控制台配置查询异常告警
- 监控 HiMarket 应用日志中的 SLS 相关错误
- 定期检查 SLS 使用量和费用



## 配置示例

### 开发环境完整配置

```yaml
sls:
  endpoint: cn-hangzhou.log.aliyuncs.com
  auth-type: AK_SK
  access-key-id: LTAI5tXXXXXXXXXXXXXX
  access-key-secret: YourAccessKeySecretHere
  default-project: dev-apigateway
  default-logstore: dev-access-log
  aliyun-log-config:
    namespace: apigateway-system
    cr-name: apigateway-access-log
```

### 生产环境配置（使用环境变量）

**application.yml：**
```yaml
sls:
  endpoint: ${SLS_ENDPOINT:}
  auth-type: ${SLS_AUTH_TYPE:AK_SK}
  access-key-id: ${SLS_ACCESS_KEY_ID:}
  access-key-secret: ${SLS_ACCESS_KEY_SECRET:}
  default-project: ${SLS_DEFAULT_PROJECT:prod-apigateway}
  default-logstore: ${SLS_DEFAULT_LOGSTORE:prod-access-log}
```

**环境变量：**
```bash
export SLS_ENDPOINT="cn-beijing.log.aliyuncs.com"
export SLS_AUTH_TYPE="AK_SK"
export SLS_ACCESS_KEY_ID="LTAI5tProdXXXXXXXXXX"
export SLS_ACCESS_KEY_SECRET="ProdAccessKeySecretHere"
```



## 附录

### A. SLS 区域 Endpoint 列表

| 区域 | Endpoint |
||-|
| 华东1（杭州） | cn-hangzhou.log.aliyuncs.com |
| 华东2（上海） | cn-shanghai.log.aliyuncs.com |
| 华北1（青岛） | cn-qingdao.log.aliyuncs.com |
| 华北2（北京） | cn-beijing.log.aliyuncs.com |
| 华北3（张家口） | cn-zhangjiakou.log.aliyuncs.com |
| 华南1（深圳） | cn-shenzhen.log.aliyuncs.com |
| 西南1（成都） | cn-chengdu.log.aliyuncs.com |

更多区域请参考：https://help.aliyun.com/document_detail/29008.html

### B. 配置参数完整列表

| 参数 | 类型 | 必填 | 默认值 | 说明 |
||||--||
| `endpoint` | String | 是 | - | SLS 服务端点 |
| `auth-type` | Enum | 否 | `AK_SK` | 认证方式：`AK_SK` |
| `access-key-id` | String | 条件 | - | AccessKey ID（auth-type=AK_SK 时必填） |
| `access-key-secret` | String | 条件 | - | AccessKey Secret（auth-type=AK_SK 时必填） |
| `default-project` | String | 是 | - | 默认 Project 名称 |
| `default-logstore` | String | 是 | - | 默认 Logstore 名称 |
| `aliyun-log-config.namespace` | String | 否 | `apigateway-system` | AliyunLogConfig CR 所在 namespace |
| `aliyun-log-config.cr-name` | String | 否 | `apigateway-access-log` | AliyunLogConfig CR 名称 |

## 相关链接

- [阿里云 SLS 官方文档](https://help.aliyun.com/product/28958.html)
- [SLS SQL 语法参考](https://help.aliyun.com/document_detail/63449.html)
