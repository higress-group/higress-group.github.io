---
title: "Higress MCP Server 功能更新：拥抱 MCP 2026-07-28，兼容既有协议"
description: "Higress MCP Server 功能更新：拥抱 MCP 2026-07-28，兼容既有协议"
date: "2026-08-14"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者： 洵沐（孙校）  
2026 年 7 月 28 日，MCP 发布 2026-07-28 版本，核心协议从依赖握手和 Session 的双向有状态模型转向无状态请求—响应模型。每个请求独立描述协议上下文，方法和工具名称进入 HTTP Header，能力发现和缓存约定也更加明确。[MCP 官方发布说明](https://blog.modelcontextprotocol.io/posts/2026-07-28/)将无状态协议核心列为本次升级的重点。

Remote MCP 此前从 2024-11-05 的 HTTP+SSE 演进到 2025-03-26 的 Streamable HTTP，虽然统一了 MCP Endpoint 并让长连接变为可选，仍保留协议 Session 等跨请求机制。2026-07-28 进一步移除 initialize、notifications/initialized 和协议级 Mcp-Session-Id，将协议上下文放入每个请求；server/discover 仅用于按需发现能力，不再是其他方法的前置步骤。

![](https://img.alicdn.com/imgextra/i1/O1CN01jzWt1wa9YUF3OTaP_!!6000000008021-2-tps-1672-941.png)

Higress MCP Server 已在[PR #4281](https://github.com/higress-group/higress/pull/4281)中完成 MCP 2026-07-28 适配，同时保留对既有协议的兼容。对用户而言，这次更新不仅仅是简单省去一次握手，而是让 MCP 服务可以像普通 HTTP 服务一样部署、扩缩容和治理。

已经使用 Higress 2.1.0 及以上版本的用户无需升级 Higress，只需将 mcp-server 插件升级到 latest，即可使用本次新增能力。当前 mcp-server 版本也将随 Higress 2.2.4 作为默认 MCP Server 插件版本发布。

最直接的变化有三点：无状态请求可以分发到任意实例；MCP 方法和工具名称可以进入现有的鉴权、限流与可观测体系；新版客户端可以通过 Higress 继续访问尚未升级的旧版本 MCP Server。

这意味着客户端、网关和服务端不必在同一时间完成升级，企业可以在保持存量服务可用的同时，逐步把 MCP 纳入现有 HTTP 与 API 治理体系。

下面先说明本次适配带来的变化，再给出数据面验证方法和后续计划。

## 一、升级后，Higress 用户获得了什么
### 1. MCP 服务可以像普通 HTTP 服务一样部署
升级后，无状态请求可以被普通负载均衡策略分发到不同实例，不再要求 sticky session，也不需要为了维护协议 Session 建设共享状态存储。扩缩容、故障替换、多可用区和 Serverless 部署因此更接近普通 HTTP 服务。

这里的“无状态”只针对协议传输层，并不意味着业务不能有状态。创建资源、扣费、发消息等操作仍需在业务层做好幂等设计，确保多次调用对业务是安全的。

![](https://img.alicdn.com/imgextra/i3/O1CN01IsvExOtpgrJ3OTaP_!!6000000005316-2-tps-1672-941.png)

当团队通过 Remote MCP 暴露内部工具，并由网关统一管理 Agent 的访问入口、身份和权限时，无状态协议可以减少跨请求状态关联，也使服务实例更容易横向扩展。

### 2. 治理粒度可以下沉到 MCP 方法和工具
新版 Streamable HTTP 请求会把协议版本、MCP 方法和工具名称映射到 HTTP Header。网关无需先解析整个 JSON-RPC Body，就能识别当前请求要执行的方法和工具。

```plain
MCP-Protocol-Version: 2026-07-28
Mcp-Method: tools/call
Mcp-Name: get_weather
```

请求 Body 仍然保留完整的 JSON-RPC 消息，Header 是供负载均衡、网关和观测系统使用的镜像信号。

这些 Header 只有在协议标识得到确认，并且与 Body 中的方法和工具一致后，才会进入后续治理链路。不完整或不一致的新版请求会被直接拒绝，不会回退为旧协议继续处理。

![](https://img.alicdn.com/imgextra/i1/O1CN011syU6EEaVfL3U8mv_!!6000000002255-2-tps-1717-916.png)

对开源用户来说，这些 Header 可以直接接入 Higress 已有的可观测和限流插件，把治理粒度从统一的 /mcp 路径下沉到具体工具。

+ [ai-statistics](https://github.com/higress-group/higress/tree/main/plugins/wasm-go/extensions/ai-statistics) 可以从请求 Header 提取 Mcp-Method 和 Mcp-Name，并将其写入访问日志与链路追踪。对于普通 MCP 流量，可以关闭 OpenAI usage 解析，只保留工具维度的自定义属性。

```plain
disable_openai_usage: true
enable_path_suffixes:
  - /mcp
attributes:
  - key: mcp_method
    value_source: request_header
    value: mcp-method
    apply_to_log: true
    apply_to_span: true
  - key: mcp_tool
    value_source: request_header
    value: mcp-name
    apply_to_log: true
    apply_to_span: true
```

+ [cluster-key-rate-limit](https://github.com/higress-group/higress/tree/main/plugins/wasm-go/extensions/cluster-key-rate-limit) 可以按 Mcp-Name 区分配额。例如查询工具可以保持较高并发，而 create_order 等写操作工具使用更严格的限流。

```plain
rule_name: mcp-tool-rate-limit
rule_items:
  - limit_by_header: mcp-name
    limit_keys:
      - key: create_order
        query_per_minute: 30
redis:
  service_name: redis.static
```

### 3. 无需握手即可完成能力发现与工具调用
新版协议通过 <font style="background-color:#f4f5f7;">server/discover</font> 提供按需能力发现，并为工具列表和调用结果定义了更明确的返回约定。客户端可以先发现能力，也可以直接执行工具调用。

Higress 当前已支持三个核心方法：

+ <font style="background-color:#f4f5f7;">server/discover</font>：返回当前可用的 Tools 能力和服务端身份信息；
+ <font style="background-color:#f4f5f7;">tools/list</font>：以确定性顺序返回工具列表；
+ <font style="background-color:#f4f5f7;">tools/call</font>：调用已注册的工具，包括 REST 工具、组合工具和上游 MCP Server。

这三项能力覆盖能力发现、工具枚举和工具执行的完整调用链路，客户端无需先执行旧版握手即可按需调用。

对于 Higress 直接托管的工具，输入参数会在调用 REST 后端之前完成校验，非法请求不会到达业务服务。

确定性的工具列表可以减少无意义的上下文变化，使客户端缓存和 Prompt Cache 更加稳定。

成功的工具调用会携带 <font style="background-color:#f4f5f7;">resultType: complete</font>，并在 <font style="background-color:#f4f5f7;">_meta</font> 中返回真实的 <font style="background-color:#f4f5f7;">ServerInfo</font>；Higress同时也适配了新版协议的对缓存的要求。对于新版 MCP 的服务端，<font style="background-color:#f4f5f7;">server/discover</font> 和 <font style="background-color:#f4f5f7;">tools/list</font> 会直接透传用于控制缓存的 `ttlMs` 和 `<font style="background-color:#f4f5f7;">cacheScope</font>`字段。而对于非新版 MCP 的服务端，<font style="background-color:#f4f5f7;">server/discover</font> 和 <font style="background-color:#f4f5f7;">tools/list</font> 会明确返回 <font style="background-color:#f4f5f7;">ttlMs: 0</font> 与 <font style="background-color:#f4f5f7;">cacheScope: private</font>。

客户端可根据 `resultType` 判断调用状态，根据 `ServerInfo` 识别实际服务端，并依据 `ttlMs` 和 `cacheScope` 决定是否缓存结果。

### 4. 新旧协议可以分阶段迁移
MCP 2026-07-28 包含握手、Session 和返回结果等方面的破坏性变化，客户端和服务端通常难以在同一时间全部完成升级。企业内部会长期存在新版客户端、新版服务端和旧版服务端并行运行的情况。

Higress 同时支持新版协议和旧版协议。新版客户端既可以直接访问新版 MCP 服务，也可以通过 Higress 访问尚未升级的旧版 MCP 服务；已有的旧版客户端和旧版服务端仍然保持兼容。

为便于阅读，下文将 MCP 2026-07-28 的无状态协议称为 <font style="background-color:#f4f5f7;">modern</font>，将 MCP 2024-11-05、2025-03-26 和 2025-06-18 等既有协议称为 <font style="background-color:#f4f5f7;">legacy</font>。两者是本文对协议形态的简写，客户端与上游服务的适配关系如下：

| **下游客户端** | **上游服务** | **当前状态** |
| :--- | :--- | :--- |
| modern | Higress 注册工具、REST 工具、组合工具 | <font style="color:#2e7d32;">支持</font> |
| modern | modern MCP Server | <font style="color:#2e7d32;">支持</font> |
| modern | legacy MCP Server | <font style="color:#2e7d32;">支持</font> |
| legacy | legacy MCP Server | <font style="color:#2e7d32;">保持兼容</font> |
| legacy | modern-only MCP Server | 暂不支持 |


对于 <font style="background-color:#f4f5f7;">modern MCP Server</font>，Higress 直接使用新版协议；对于 <font style="background-color:#f4f5f7;">legacy MCP Server</font>，Higress 会在网关侧完成必要的协议转换，并将旧版服务端响应转换为新版结果。

![](https://img.alicdn.com/imgextra/i2/O1CN01d5ecSVXfGoF3OTaP_!!6000000003710-2-tps-1672-941.png)

Higress 同时处理新旧协议，因此客户端和服务端可以分别升级。为避免重复执行带副作用的工具，Higress 不会对同一次调用依次尝试多个协议版本；协议转换时，也不会默认把下游 Session 和无关凭据传给上游。

更具体的请求校验、工具执行、协议桥接和凭据隔离实现，可参考 [PR #4281](https://github.com/higress-group/higress/pull/4281)。

## 二、数据面验证
Higress 主仓库提供了一组 [MCP Demo](https://github.com/higress-group/higress/tree/main/samples/mcp)，覆盖无状态调用、REST API 转换、版本兼容和请求校验四个场景，可供读者体验 MCP 2026-07-28 的最新能力。

![](https://img.alicdn.com/imgextra/i3/O1CN01PQDlxCCHudL3OTaP_!!6000000003493-2-tps-1672-941.png)

Demo 使用统一的 Kind 和 Higress 环境。读者可以从 Higress 仓库根目录执行以下命令完成准备。

```plain
cd samples/mcp
./protocol/2026-07-28/plugin/build.sh
./environment/scripts/up.sh
```

完整环境要求、部署资源、请求报文、预期响应和清理命令见 [Sample 环境说明](https://github.com/higress-group/higress/blob/main/samples/mcp/environment/README.md)。

### 1. 验证无状态 MCP over HTTP
这一组请求不发送 <font style="background-color:#f4f5f7;">initialize</font>，也不使用协议 Session，直接检查新版调用能否独立完成。

1. 部署 Stateless MCP 示例配置；
2. 不发送 <font style="background-color:#f4f5f7;">initialize</font>，依次调用 <font style="background-color:#f4f5f7;">server/discover</font>、<font style="background-color:#f4f5f7;">tools/list</font> 和 <font style="background-color:#f4f5f7;">tools/call</font>；
3. 检查工具调用结果和响应头。

```plain
server/discover：成功
tools/list：返回 say_hello
tools/call：返回 hello Higress
响应头：没有 Mcp-Session-Id
```

判定标准是三次调用都独立成功，且响应头符合新版协议。复现命令见 [01-stateless-http README](https://github.com/higress-group/higress/blob/main/samples/mcp/protocol/2026-07-28/01-stateless-http/README.md)。

### 2. 将 REST API 暴露为 MCP 工具
这里直接把现有 REST API 暴露给 Agent，不额外部署 MCP Server。

1. 部署 REST-to-MCP 配置并重置观测后端；
2. 通过 <font style="background-color:#f4f5f7;">tools/list</font> 查看网关生成的 <font style="background-color:#f4f5f7;">get_weather</font> 工具；
3. 通过 <font style="background-color:#f4f5f7;">tools/call</font> 查询杭州天气；
4. 检查后端记录的真实 HTTP 请求。

```plain
Agent：1 次 tools/call
Higress：完成 MCP → REST 转换
后端：1 次 GET /weather?location=Hangzhou
```

除了确认工具可以被发现和调用，还需要检查后端事件数是否为 1，以验证协议转换没有重复执行业务请求。复现命令见 [02-rest-to-mcp README](https://github.com/higress-group/higress/blob/main/samples/mcp/protocol/2026-07-28/02-rest-to-mcp/README.md)。

### 3. 新版客户端访问旧版 MCP 服务
这一组检查新版客户端访问旧版服务端的兼容路径：新版客户端只看到无状态调用，旧版握手和 Session 由 Higress 在上游侧完成。

1. 部署旧版 MCP Server Fixture 和 Higress 兼容配置；
2. 使用新版 <font style="background-color:#f4f5f7;">tools/list</font>、<font style="background-color:#f4f5f7;">tools/call</font> 访问 Higress；
3. 确认旧版 Session 没有暴露给客户端；
4. 查看上游记录的真实调用序列。

```plain
initialize
notifications/initialized
tools/list
initialize
notifications/initialized
tools/call
```

观测重点是 Cookie、<font style="background-color:#f4f5f7;">Authorization</font> 和 <font style="background-color:#f4f5f7;">Mcp-Session-Id</font> 等上下文没有越过协议边界，同时上游收到完整的旧版调用序列。复现命令见 [03-modern-to-legacy README](https://github.com/higress-group/higress/blob/main/samples/mcp/protocol/2026-07-28/03-modern-to-legacy/README.md)。

### 4. 在调用后端之前拒绝非法请求
最后一组把错误请求送到 Higress，检查它们是否在业务服务执行前被终止，并区分 Tool Execution Error 与传输层协议错误。

1. 发送缺少必填 <font style="background-color:#f4f5f7;">location</font> 的 <font style="background-color:#f4f5f7;">tools/call</font>；
2. 发送携带不可信 <font style="background-color:#f4f5f7;">Origin</font> 的请求；
3. 发送 Header 声明 <font style="background-color:#f4f5f7;">tools/call</font>、Body 实际为 <font style="background-color:#f4f5f7;">tools/list</font> 的不一致请求；
4. 检查后端调用记录。

```plain
参数错误：HTTP 200，Tool Result isError=true
不可信 Origin：HTTP 403
Header/Body 不一致：HTTP 400 / JSON-RPC -32020
后端事件数：0
```

关键结果是后端事件数为零：非法请求在数据面被终止，没有先访问业务服务再包装错误。复现命令见 [04-request-validation README](https://github.com/higress-group/higress/blob/main/samples/mcp/protocol/2026-07-28/04-request-validation/README.md)。

## 三、下一步：一起完善 MCP 网关
随着 MCP 加速进入生产环境，网关在协议协商、工具治理、多轮交互和企业安全等方向还有广阔的演进空间。Higress 希望与社区开发者一起探索这些方向，把实践沉淀为可复用的实现、测试和示例。

![](https://img.alicdn.com/imgextra/i1/O1CN01Uo43GTP9bVK3OTaP_!!6000000005880-2-tps-1672-941.png)

### 1. 协议能力协商 [(Issue #4467)](https://github.com/higress-group/higress/issues/4467)
协议能力协商可以让网关基于上游能力声明自动选择合适的协议路径，减少人工配置和版本迁移成本，并形成行为确定、可观测、可治理的协商机制。

网关可以优先通过 <font style="background-color:#f4f5f7;">server/discover</font> 判断上游能力，只有明确收到“不支持该协议或方法”的响应时，才尝试旧版 <font style="background-color:#f4f5f7;">initialize</font>。

认证失败、限流、网络异常和服务端 <font style="background-color:#f4f5f7;">5xx</font> 不触发协议降级；服务端能力描述则可以结合 TTL 和作用域进行安全缓存。

在此基础上，还可以继续打通 legacy 客户端访问 modern-only 服务端等跨版本路径。

### 2. Schema 和工具级策略治理 [(Issue #4468)](https://github.com/higress-group/higress/issues/4468)
工具目录和策略治理可以沿以下方向继续深化：

+ 完整 JSON Schema 2020-12 支持；
+ <font style="background-color:#f4f5f7;">outputSchema</font> 校验；
+ <font style="background-color:#f4f5f7;">title</font>、<font style="background-color:#f4f5f7;">icons</font> 和 <font style="background-color:#f4f5f7;">annotations</font>；
+ 大规模工具目录分页；
+ <font style="background-color:#f4f5f7;">Mcp-Param-*</font> 的安全映射；
+ MCP <font style="background-color:#f4f5f7;">_meta</font> 与 Envoy Trace Context 的关联。

这些信息将帮助网关把策略精确匹配到 MCP 方法、工具、输入和输出，让工具治理从 URL 层继续深入到调用语义。

### 3. 多轮交互和长任务 [(Issue #4469)](https://github.com/higress-group/higress/issues/4469)
MCP 网关还可以承载需要补充输入、等待外部事件或持续运行的工具调用。为此，需要引入显式、可治理的状态机制。

重点方向包括：

+ MRTR 和 <font style="background-color:#f4f5f7;">resultType: input_required</font>；
+ 可鉴权、可过期的 <font style="background-color:#f4f5f7;">requestState</font>；
+ <font style="background-color:#f4f5f7;">subscriptions/listen</font>；
+ 工具列表变更通知；
+ 面向长时间执行的 Tasks 扩展。

这些状态可以作为显式业务资源，绑定调用方、租户和工具，并支持过期、撤销、持久化和跨实例恢复。

### 4. OAuth 和扩展生态 [(Issue #4470)](https://github.com/higress-group/higress/issues/4470)
面向企业和公网环境，可以围绕以下方向完善认证与扩展生态：

+ MCP OAuth Resource Server；
+ Protected Resource Metadata；
+ <font style="background-color:#f4f5f7;">issuer</font>、<font style="background-color:#f4f5f7;">audience</font> 和 <font style="background-color:#f4f5f7;">scope</font> 校验；
+ Token 生命周期和凭据隔离；
+ Tasks、MCP Apps、Resources、Prompts、Completion 等扩展能力。

这些方向横跨认证插件、控制面、状态存储和客户端生态。欢迎开发者通过 Issue、Proposal 和 PR 一起推进。

## 结语
MCP 2026-07-28 让工具调用更接近标准 HTTP 工作负载。Higress MCP Server 已完成无状态 Tools 方法、新旧协议兼容和请求安全校验，并通过插件独立升级降低了存量用户的采用成本。

随着 MCP 逐渐成为 Agent 访问外部世界的标准接口，网关不会只负责转发流量。它还需要理解工具身份、调用语义和运行状态，并围绕动态发现、细粒度授权、版本协商、长任务治理和全链路观测持续演进。

Higress 希望成为连接 MCP 客户端、工具服务、现有 API 与企业基础设施的统一入口，让 MCP 能够像 HTTP API 一样安全、稳定地用于生产环境。

这个方向离不开社区共同建设。欢迎通过 Higress Issue、Proposal 和 PR 参与设计与实现，也欢迎从补充 [MCP Samples](https://github.com/higress-group/higress/tree/main/samples/mcp)、Conformance 用例等开始贡献。  
 


