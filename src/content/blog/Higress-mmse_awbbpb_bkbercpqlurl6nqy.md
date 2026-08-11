---
title: "MCP 重回 HTTP 范式，再次证明架构设计和工程实践才是稀缺资源"
description: "MCP 重回 HTTP 范式，再次证明架构设计和工程实践才是稀缺资源"
date: "2026-08-11"
category: "article"
keywords: ["Higress"]
authors: "王晨"
---

作者：望宸

Higress 在国内率先支持过 MCP Server 的管理， 也一直在关注 MCP 的发展。比如 [MCP 在2024年11月开源后](https://mp.weixin.qq.com/s/Nc1rwUIj9skbG9BZ6H3Qcw)，我们就预感这是相比 Function Calling 更加容易被广泛使用的 Agent 接入外部系统的协议，[加速模型的货币化](https://mp.weixin.qq.com/s/kcQ1lifA8oH2ee16QxDYYg)。



2025年3月，[Higress 开源 Remote MCP Server 托管方案，并将上线 MCP 市场](https://mp.weixin.qq.com/s/WYlqHm2YZSiRv4USUNUBgg)。

2025年4月，Higress 支持将[存量 OpenAPI 批量转化为 MCP Server](https://mp.weixin.qq.com/s/yY8_G2XQ-0bKG8kl9GTDNQ)，加速企业存量资产的增值。

2025年4月，MCP 引入了全新的 Streamable HTTP 传输层，我们对比分析了 [Streamable HTTP vs. HTTP+SSE](https://mp.weixin.qq.com/s/5L6KUTUmTXwwovMaRagE4g)。



但 MCP 爆火后，也遇到了一系列挑战，尤其当主流 Agent 客户端开始将 CLI 作为连接外部系统的技术方案时，MCP 被沦为弃子的说法甚嚣尘上。社区对 MCP 的吐槽集中在上下文拥挤和费钱。



AI 时代，造软件简单，但是一旦遇到规模化落地，架构设计和工程质量就成了稀缺资源，这是 AI Coding 很难直接替代的。



## 一、这次升级，解决了什么问题？
最新版的核心改动，是把 MCP 从一个有状态、依赖长连接的协议，改回了无状态的请求/响应模型。这也是文章标题所说的"重回 HTTP 范式"的由来，HTTP 协议的无状态是 Web 架构里最基础、最成熟的做法。



过去 MCP 依赖 initialize/initialized 握手和 Mcp-Session-Id 会话标识来维持上下文。这意味着同一会话的多次请求必须落到同一个服务端实例，否则上下文就会丢失。



以高德地图的 MCP Server 为例。用户问"从公司到最近的充电桩怎么走"，Agent 在一次会话里往往要连着调用这个 Server 暴露的多个 tool：先用地理编码工具把地址换成坐标，再用 POI 搜索工具找到附近的充电桩，最后用路径规划工具计算出路线。地理编码、POI 搜索、路径规划这三个 tool 共享同一个会话上下文，在有状态模式下就必须由同一个实例来承载。



可当调用量涨上来、后端部署了多个实例时，负载均衡就不能简单地把请求打散，而要保证同一会话始终回到最初那个实例，也就是会话亲和性。要维持这种亲和性，要么让负载均衡记住会话与实例的绑定关系，要么在实例之间共享会话状态，这些都是横向扩容时额外的架构成本。



新版本把这套握手和会话标识退役了（SEP-2575、SEP-2567），改为每个请求自描述，协议版本、客户端身份和能力都随请求携带，即任何请求都可以落到普通轮询负载均衡后面的任意实例，不再需要共享存储。



原先那些需要服务端主动发起、依赖长连接的交互（elicitation、sampling、roots），被替换成了多轮请求 MRTR：服务端返回 input_required，客户端带上答案重试。Streamable HTTP 请求也开始强制携带 Mcp-Method 和 Mcp-Name 两个 header（SEP-2243），网关、限流器可以直接按 header 路由和计量，无需解析请求体。



## 二、社区并非一面倒的支持，新版本是否解决了最痛的槽点？
无状态化解决的是部署和扩展的问题，降低的是运维复杂度，但社区对 MCP 最集中的抱怨是上下文拥挤和费钱，是开发者体验问题，而新版本几乎没有正面回应它们。



上下文拥挤的根源，在于工具定义是前置加载的。Agent 在干活之前，要先把所有可用工具的说明读进上下文，工具数量一多，光这些定义就会占掉相当一部分窗口，真正留给任务本身的空间被压缩。



新版本里和这个问题最接近的改动，是 tools/list、prompts/list、resources/list 的返回结果开始携带 ttlMs 和 cacheScope（SEP-2549），客户端可以缓存工具目录、在重连后保持上游 prompt 缓存稳定。此外还新增了一个可选的 server/discover，让能力发现更前置。但这里需要区分清楚的是：缓存优化的是不要反复重新拉取工具清单，它并没有降低单轮对话里工具定义占用的 token。该占的上下文仍然要占，只是重复获取的次数减少了。因此，对上下文拥挤这个核心槽点来说，缓存是外围的改善，不是本质的解法。



费钱是上下文拥挤的直接结果。token 占用没有下降，调用成本自然也降不下来。新版本没有任何一条改动是来优化压缩工具的。开发者们真正想要的是：工具可以按需加载，只在需要时把相关工具的定义喂进上下文。



新版本自身还带来了一笔新成本，就是迁移。无状态化是一次破坏性变更，对那些依赖会话标识的实现来说，需要改造代码。配套的弃用清单也不短：Dynamic Client Registration 被正式弃用，转向 CIMD；Roots、Sampling、Logging 被弃用；Legacy HTTP+SSE 传输进入退场倒计时。



## 三、扎实的架构设计和丰富的工程实践才是稀缺资源
回过头看，这次升级没有引入什么新颖的机制，无状态、请求自描述、按 header 路由，都是 Web 架构里用了很多年的老办法。MCP 之所以要绕一圈再回到这些做法上，是因为爆火之后真正的考验不再是"是否定义了 Agent 连接外部系统的新标准"，而是"能不能在规模化的流量下，保障调用方和维护方的体验"。



前者靠一个 idea 就能解决，后者则是对可扩展性、部署形态和治理成本的通盘考量。这需要扎实的架构设计和丰富的工程实践。这恰恰是 AI 时代最容易被低估、也最稀缺的东西。



Higress 已开发对 MCP 最新版的支持：[https://github.com/higress-group/higress/pull/4059](https://github.com/higress-group/higress/pull/4059)




