---
title: "从新版 MCP 到 Gateway API 推理扩展：读懂 Higress v2.2.4 的关键变化"
description: "从新版 MCP 到 Gateway API 推理扩展：读懂 Higress v2.2.4 的关键变化"
date: "2026-08-19"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：如漫、澄潭

最近几套和 AI 基础设施有关的标准都在更新。

2026 年 7 月 28 日，MCP 发布了新的正式协议修订，把远程工具调用从“先握手、再维持会话”调整为“每个请求都带齐上下文”；Kubernetes 的 Gateway API 已经演进到 1.6 系列；在它之上，面向 GPU 推理流量的 Gateway API Inference Extension（下文简称“推理扩展”）也在继续推进。

这些变化最后都会落到网关上。客户端怎么带协议版本，网关怎么区分新旧 MCP Server，Endpoint Picker 选出的 PodIP:port 是否真的被数据面执行，都是升级时需要确认的事。

v2.2.4 给这些链路补上了实现，也给出了可验证范围。

| 你关心的事情 | v2.2.4 带来了什么 | 验证方式与结果 |
| :--- | :--- | :--- |
| Agent 工具调用能否横向扩容 | MCP 2026-07-28 无状态 HTTP Tools 基线，新旧协议显式桥接 | Higress 可运行 Demo：server/discover、tools/list、tools/call |
| Kubernetes 入口标准能否稳妥升级 | 生产模块与转换语义对齐 Gateway API v1.6.0 | 运行 Gateway API v1.6 官方 HTTP 一致性测试套件：37/37 通过，0 失败、0 跳过 |
| 推理请求能否落到正确模型端点 | 补齐推理扩展 v1.4 多端口、数据并行与 served-endpoint 支持 | 运行推理扩展 v1.4 官方网关一致性测试套件：12/12 通过，0 失败、0 跳过 |


## MCP 支持 2026-07-28 最新协议版本
**Higress 是首个支持 MCP 2026-07-28 无状态 HTTP Tools 基线的开源网关。** 这项支持覆盖服务发现、工具列表与工具调用，也明确了新旧协议的边界。

早期远程 MCP 调用通常要先 `initialize`，再通过 Session ID 维持后续交互。单实例场景下，这件事不算复杂；但 MCP Server 一旦开始横向扩容，问题就会出现：后续请求是继续黏在原实例，还是把会话状态放进共享存储？实例重启后，会话又怎么恢复？

MCP `2026-07-28` 做了一次直接影响部署方式的调整：远程工具调用不再依赖 `initialize/initialized` 握手和协议级 Session 来维持后续请求。每个请求都携带自己的协议版本、客户端身份和能力；客户端如果想提前了解服务端能力，可以调用新的 `server/discover`。在 Higress 这次实现里，工具方法和工具名也会进入 HTTP Header，网关不必先解析 JSON Body，就能做路由、鉴权、限流和计量。

打个比方：**过去像“先办一张会话卡，再连续办事”，现在更像“每次办事都带齐材料，哪个窗口接到都能处理”。**

协议发布后不到三周，Higress v2.2.4 已经实现这套无状态 HTTP Tools 基线：

+ 实现 `server/discover`、确定性排序的 `tools/list` 和 `tools/call`；
+ 在调用工具前执行输入 Schema 校验，尽量让错误停在边界上，不进入后端后才暴露；
+ 支持 modern → modern、modern → legacy、legacy → legacy 三条显式路径，方便新客户端逐步接入已有 MCP Server；
+ 对 Origin、媒体类型、请求大小、单条 JSON-RPC 消息、Header/Body 一致性做边界校验；
+ 默认隔离 Cookie、Session、`Last-Event-ID`、内部路由 Header 和无关凭据，减少跨服务代理时的状态泄漏；
+ 提供无状态 HTTP、REST-to-MCP、modern-to-legacy 和请求校验等可复现实例。

![](https://img.alicdn.com/imgextra/i3/O1CN01SM72WpTVWMG37MB6_!!6000000002491-2-tps-1536-1024.png)

图：每次请求先经过四类边界校验，再按显式策略三选一：Direct / REST Tool、modern MCP 或 legacy MCP。三条线表示可选路径，不是同时向三个上游广播；升级默认不切换协议，本期范围也在图中单独标明。

相关实现与验证见 [PR #4281](https://github.com/higress-group/higress/pull/4281)，可运行 Demo 见 [PR #4451](https://github.com/higress-group/higress/pull/4451)。MCP 本次协议变化可参考[官方发布说明](https://blog.modelcontextprotocol.io/posts/2026-07-28/)。

> **边界说明：** v2.2.4 聚焦最常用的 Tools 基线，并不等于已经实现 MCP 2026-07-28 的全部能力。MRTR、Tasks、Subscriptions、Resources、Prompts、MCP Apps 和完整 OAuth 等不在本期范围；已有代理默认仍走 legacy，不会因为升级被静默切换。
>

---

## Kubernetes 网关标准协议升级到最新版本
**Higress 也是为数不多同时支持 Gateway API v1.6 与 Gateway API Inference Extension v1.4 的开源网关之一。** 两套标准同步升级，既覆盖 Kubernetes 网关入口，也把 EPP 选出的精确模型端点落到数据面转发。

如果把 Kubernetes 集群想象成一座城市，Gateway API 负责定义道路、入口和通行规则；推理扩展则在此基础上增加了一位懂模型负载的调度员。

两者解决的问题并不相同：

![](https://img.alicdn.com/imgextra/i4/O1CN01MKmBAUoTB7E2R3fr_!!6000000002310-0-tps-1200-455.jpg)

### Gateway API v1.6：升级标准，也隔离不同 Gateway 的工作负载
v2.2.4 将生产模块、API 类型和控制面转换语义升级到 Gateway API `v1.6.0`，并把 v1.4 与 v1.6 的依赖、CRD 和测试模块彼此隔离，避免测试或运行时静默混用版本。

另一项更贴近实际运维的变化，是新增可选的 per-Gateway Deployment/Service 模式。开启后，每个受管 Gateway 都拥有标签隔离的工作负载，以及与 Listener 对应的 Service 端口，从而解决多 Gateway 场景中的流量隔离和任意监听端口问题。这个模式默认关闭，已有安装仍保留原来的共享 Gateway 模型，不会在升级时悄悄改变部署拓扑。

这次对齐有明确的验证结果：运行 Gateway API v1.6 官方 HTTP 一致性测试套件，**37 项通过、0 失败、0 跳过**。测试覆盖 Gateway、HTTPRoute 与 ReferenceGrant，不包括 TLS、gRPC、TCP、UDP 或实验性 Profile。详见 [PR #4142](https://github.com/higress-group/higress/pull/4142) 与 [Gateway API v1.6.0 官方说明](https://github.com/kubernetes-sigs/gateway-api/releases/tag/v1.6.0)。

### 推理扩展 v1.4：Endpoint Picker 选对了，网关还要送得到
普通负载均衡通常只回答“哪个 Pod 还活着”。大模型推理还要回答更多问题：哪个实例已经有这段前缀缓存？谁的队列更短？需要的 LoRA Adapter 在哪里？数据并行场景下，请求应该落到同一 Pod 的哪个端口或 rank？

推理扩展通过 `InferencePool + Endpoint Picker` 把这套协作变成标准接口。Endpoint Picker 负责结合模型与实例状态选目标，网关负责按这个目标转发请求。

v2.2.4 补齐了推理扩展 v1.4 的关键运行链路：一个 InferencePool 的多个 `targetPorts` 都可以成为可选端点；数据并行场景中的端点能够聚合；Endpoint Picker 选中的精确 `PodIP:port` 能被数据面执行；最终实际服务请求的端点也可以回传。运行推理扩展 v1.4 官方网关一致性测试套件，**12 项通过、0 失败、0 跳过**。详见 [PR #4318](https://github.com/higress-group/higress/pull/4318) 与 [推理扩展 v1.4.0 官方说明](https://github.com/kubernetes-sigs/gateway-api-inference-extension/releases/tag/v1.4.0)。

![](https://img.alicdn.com/imgextra/i3/O1CN01Hnq5QnoKCvF3FPfU_!!6000000006969-2-tps-1600-1000.png)

图：上半部分是 Gateway、HTTPRoute 与 InferencePool 如何被控制面转换为路由和端点配置；下半部分是推理请求如何调用 EPP、拿到候选 PodIP:targetPort，再由 Higress 精确转发。若中间发生重试，最终处理请求的端点可能不是首个候选；响应阶段，Higress 会通过 x-gateway-destination-endpoint-served 把真实落点回报给 EPP，方便核对和订正状态。

这项能力默认关闭。准备使用时，需要先安装匹配的 CRD 和 Endpoint Picker，再显式开启 `global.enableInferenceExtension`。

---

## 持续投入社区维护，冲刺 CNCF 孵化申请
Higress 正在冲刺 CNCF Incubation，TOC 已介入前置技术、安全等评审。社区维护的重点放在公开治理、安全门禁、社区协作和 Agent 辅助贡献规范上。

为配合孵化阶段的治理与材料准备，社区已将治理、维护者、会议、采用者、路线图和评审材料集中到 Higress Community 仓库，并保留原路径的兼容链接。

近期的主要进展：

+ 建立 LFX 月度社区会议与 GitHub 议题提交流程，任何人都可以提前提出议题；公开维护者名册，目前 7 位维护者来自 4 家机构。
+ CodeQL 覆盖 Pull Request、main 分支提交和周期扫描，Go vet 建立零 warning 门禁；OpenSSF Best Practices 已达到 Passing。
+ 面向实质性 AI/Agent 辅助贡献，社区要求先获得 Maintainer 对 Proposal 与 Design 的批准，再按授权 TASK 实施，并记录验证命令、结果、证据和哈希。

Higress 社区从本月起每月举办一次社区会议，讨论版本进展、技术方案和社区议题。首场月会定于 8 月 20 日晚 8 点，欢迎感兴趣的开发者带着实际问题和议题参加。会议链接：https://zoom-lfx.platform.linuxfoundation.org/meetings/higress 。

## 其他改动
AI 负载均衡新增 AdaptiveScore，综合首 Token 延迟、总响应延迟、当前并发和累计失败率选择后端；需要跨网关协同时可接入 Redis，异常时自动回退本地计算。见 [PR #4051](https://github.com/higress-group/higress/pull/4051)。

观测与限流继续补齐生产细节：ai-statistics 增加 llm_failure_count，SSE 按完整事件分帧，ai-token-ratelimit 与 cluster-key-rate-limit 支持多条规则共同生效；旧版 vLLM 也可以关闭流式 usage 参数注入。见 [PR #3975](https://github.com/higress-group/higress/pull/3975)、[PR #4265](https://github.com/higress-group/higress/pull/4265)、[PR #4011](https://github.com/higress-group/higress/pull/4011) 和 [PR #4258](https://github.com/higress-group/higress/pull/4258)。

插件发布从零散管理改为统一版本机制。后续 Higress 社区新增插件会自动同步到 Higress 控制台；插件版本统一跟随 Higress 版本发布，同时仍支持脱离 Higress 版本单独升级。v2.2.4 还为 43 个官方 Go/Rust 插件记录了版本、OCI digest、源码 commit 和 input hash。详见 [PR #4449](https://github.com/higress-group/higress/pull/4449)、[PR #4488](https://github.com/higress-group/higress/pull/4488) 和 [2.2.4 插件快照](https://github.com/higress-group/higress/blob/v2.2.4/plugins/release/snapshots/2.2.4.json)。

稳定性方面，v2.2.4 针对生产环境完成了 65 项修复和优化，覆盖运行时资源效率、配置热更新、异常处理和协议兼容。Proxy-Wasm worker 线程调度做了优化，Redis 热重载期间可保持在途请求连续；异常类型与空值处理更完整，大请求可提前返回 413，并修复了 CORS、JWT/Cookie 和模型协议映射等场景的兼容性问题。Console 侧同步改进了 AI 路由插件展示与上游搜索，并新增 Qwen Provider、MCP Server 配置和正则路径重写等能力。

仓库还新增了可自行构建验证的 Qwen3Guard 插件实现，当前未进入 v2.2.4 官方插件快照。

最后，感谢参与 v2.2.4 的每一位贡献者。也欢迎你通过 [GitHub Issues](https://github.com/higress-group/higress/issues)、[Higress Community](https://github.com/higress-group/community) 和[公开社区会议](https://zoom-lfx.platform.linuxfoundation.org/meetings/higress)，把使用中遇到的问题带回来。


