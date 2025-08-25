---
title: "Dify 性能瓶颈？Higress AI 网关为它注入「高可用之魂」！"
description: "Dify 性能瓶颈？Higress AI 网关为它注入「高可用之魂」！"
date: "2025-08-19"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：赵源筱、王灏廷

<font style="color:rgba(0, 0, 0, 0.9);">Dify 作为一款开源的 AI 应用开发平台，凭借其灵活的工作流编排和易用的界面，在社区和云上部署中获得了广泛的关注。在 github 上，Dify 平均日增 20 个左右 issue，在开源也具有较高的活跃度。</font>

<font style="color:rgba(0, 0, 0, 0.9);">然而，随着 Dify 用户规模扩大、生产落地增加，Dify 应用在性能方面的问题也逐渐暴露，影响了用户体验和生产环境的稳定性。</font>

<font style="color:rgba(0, 0, 0, 0.9);">针对 Dify 性能问题，本文将介绍如何使用 Higress AI 网关保证 Dify 应用的全链路高可用性，并给出操作实践指南。</font>

# Dify 应用性能问题
<font style="color:rgba(0, 0, 0, 0.9);">对于一个对外提供服务的 Dify AI 应用，能够正常运行的核心基础依赖包括：Dify 系统组件、模型服务、MCP 服务、向量库与记忆库等。其中更容易达到性能瓶颈的节点在于 Dify 系统组件和模型服务。</font>

+ Dify 系统组件

<font style="color:rgba(0, 0, 0, 0.9);">在高并发场景下，Dify 系统组件很容易达到 CPU 性能瓶颈。在内部某生产实践中，在 Dify 所有服务端组件规格为 4C8G 单实例的情况下，对仅 10 节点的 Dify 工作流应用进行压测，约 10qps 便把 CPU 使用率打满，导致 Dify 应用和 Dify 管理端均不可用。</font>

<font style="color:rgba(0, 0, 0, 0.9);">Dify 系统组件的性能问题，究其原因，主要和 Dify 本身的实现架构和逻辑有关，主要的影响因素包括：</font>

<font style="color:rgba(0, 0, 0, 0.9);">1. 工作流引擎实现。一套 Dify 系统上构建的多个 Dify 应用，底层执行逻辑全部共用同一套工作流引擎，工作流引擎除了串联并完成用户自定义的流程，还会额外进行状态流转管理、频繁数据读写、观测数据生成与存储等过程，这些逻辑本身占用了较高的计算资源，导致即使是简单的逻辑，由于这些额外但必要的的执行逻辑存在，也会带来一定的资源消耗。</font>

<font style="color:rgba(0, 0, 0, 0.9);">2. 运行链路长。以 Dify 应用中调用大模型为例，工作流引擎运行在 api 组件中，需要调用模型时，会调用 deamon-plugin 组件，由 deamon-plugin 执行真正的模型调用，并返回结果给到 api。由于当前版本 Dify 实现了插件化改造，大部分的节点或工具，都以插件的形式存在，导致一个工作流会频繁出现多次组件间调用。</font>

<font style="color:rgba(0, 0, 0, 0.9);">3. Python 语言实现。Dify 系统的核心服务端组件 api 由 Python 语言实现，和 C++、Golang、Rust 等语言相比，Python 语言本身的性能表现相对较差。</font>

<font style="color:rgba(0, 0, 0, 0.9);">从上述分析中看出，如果我们希望提升 Dify 系统组件的性能，需要在源码侧持续优化，中短期来看，难以取得较大的性能提升。</font>

+ 模型服务

<font style="color:rgba(0, 0, 0, 0.9);">对于自建模型服务的场景，由于模型推理过程本身对 GPU 算力和显存有较高消耗，在 Dify 应用依赖到自建模型的场景，在高并发情况下，也会出现因为模型服务资源打满导致应用请求耗时翻倍、卡住卡死的情况，除了严重影响用户使用体验，也容易由于模型服务不可用导致 Dify 系统本身崩溃。</font>

<font style="color:rgba(0, 0, 0, 0.9);">由于目前国内市场的状况依然是一卡难求，通过扩大 GPU 资源来支持更高的并发来提升吞吐能力，意味着大量的财力消耗，这其中的性价比可能需要谨慎评估。</font>

<font style="color:rgba(0, 0, 0, 0.9);"></font>

<font style="color:rgba(0, 0, 0, 0.9);">针对上述问题，在 Dify 系统组件性能中短期不会显著提升，GPU 资源短期内不计划扩容的情况下，面对突发或并发的 Dify 应用请求时，面向 Dify 应用的高可用治理，在生产级场景下便显得尤为重要。</font>



## **AI 网关简介**
Higress AI 网关是外界与企业 AI 应用、企业AI应用与大语言模型服务和 MCP 服务的桥梁，旨在解决模型集成复杂、安全合规难、管理效率低等挑战，提供统一治理入口。具备以下核心特性：

1. **<font style="color:rgb(13, 18, 57);">协议标准化</font>**<font style="color:rgb(13, 18, 57);">：将差异化的模型 API 统一转换为 OpenAI 兼容格式</font>
2. **<font style="color:rgb(13, 18, 57);">可观测体系</font>**<font style="color:rgb(13, 18, 57);">：提供 Token 级监控（QPS/成功率/耗时）和请求全链路追踪</font>
3. **<font style="color:#000000;">安全防护层</font>**<font style="color:#000000;">：实现 API-KEY 自动轮转、JWT 认证、敏感内容实时拦截</font>
4. **<font style="color:#000000;">稳定性引擎</font>**<font style="color:#000000;">：集成多级 Fallback、AI 缓存、Token 限流等治理能力</font>

<font style="color:#000000;">AI 网关通过通过简化集成、统一治理、强化安全和加速响应，企业在利用 AI 技术创新过程中将更加高效、安全、稳定。</font>

## **AI 网关高可用能力**
AI 网关提供了一整套专为 AI 应用与模型设计的高可用性保障能力，确保应用与模型服务的稳定与可靠：

+ **多维度请求限流**：支持针对应用、模型等服务，按多时间尺度（秒、分、时）对请求量进行精细化控制，有效防止突发和高并发流量冲垮应用和模型服务，保障系统稳定性。
+ **Token 级资源流控**：除请求量外，提供基于 Token 消耗量的限流能力，更精准地控制大模型资源使用，避免因个别“大请求”耗尽资源池而影响其他用户，实现更公平的资源调度。
+ **模型 Fallback**：当主模型服务出现故障或响应异常时，网关能够自动、透明地将请求切换到预设的备用模型服务，保证核心业务不中断，实现服务故障的秒级容灾。
+ **模型负载均衡**：针对自建模型集群，提供包括 GPU 感知、前缀匹配在内的多种智能负载均衡策略，能够在不增加硬件成本的前提下，显著提升系统吞吐能力、降低响应延迟，最大化 GPU 资源利用率。
+ **AI 缓存**：对高频、重复的请求结果进行缓存，直接从网关返回响应，大幅降低对底层大模型的调用频次，不仅能显著提升响应速度，还能有效节约模型调用成本。

## **AI 网关代理 Dify 应用出入流量**
<font style="color:rgba(0, 0, 0, 0.9);">使用 Higress AI 网关提高 Dify 应用的高可用性，需要将 AI 网关和 Dify 系统整合，我们提供的整合方案如下图所示。在原架构下，Dify 内置的 Nginx 作为反向代理代理入流量，Dify 直接调用大模型、RAG 服务、Mcp Server 等；新架构下，AI 网关替换 Dify 内置 Nginx，作为 Dify 应用出入流量的代理。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01fx1p871VE0mDqJH0p_!!6000000002620-2-tps-3894-1765.png)

<font style="color:rgba(0, 0, 0, 0.9);">在入流量代理处，我们推荐将 AI 网关替代 Nginx，而不是将 AI 网关路由到 Nginx，理由如下：</font>

<font style="color:rgba(0, 0, 0, 0.9);">1. 能力全覆盖：AI 网关已完整覆盖 Nginx 代理能力，并额外提供 20+ AI 专属治理策略，Nginx 默认缓冲机制会破坏 SSE 流式传输，需手动调整复杂参数，且缺乏深度可观测性支持。</font>

<font style="color:rgba(0, 0, 0, 0.9);">2. 架构精简化：入口流量经 AI 网关直连 Dify 服务，消除冗余网关层。双网关架构（AI 网关→Nginx→Dify）不仅增加额外网络跃点导致性能损耗，问题定位更需增加 Nginx 异常排查环节，降低故障定位效率。</font>

<font style="color:rgba(0, 0, 0, 0.9);">3. 运维成本优化：Nginx 实例需独立部署并占用额外计算/内存资源，且需人工维护扩缩容。路由配置变更需同步维护两套系统，配置不一致风险显著增加。相较之下，AI 网关托管部署提供企业级 SLA 保障，原生集成监控告警体系，维护成本更低。</font>

# **实操指南与能力效果**
## **AI 网关流量代理配置**
### Dify 应用入流量代理
AI网关支持创建Agent API，代理访问AI应用，并针对访问AI应用的流量提供观测、安全、高可用治理等能力。本文将选取高可用治理能力进行重点介绍。

#### 创建服务来源
在 AI 网关为 Dify 的 api 组件创建服务来源。如果您的 Dify 部署在 SAE 或者 ACK 上，可以参考以下方式创建服务。

+ **SAE（通过 SAE 或计算巢 Dify 社区版-Serverless 部署）**

在服务-服务-创建服务处添加部署 Dify 的 SAE 命名空间下的 dify-api-{namespace}应用。

![](https://img.alicdn.com/imgextra/i1/O1CN01jx1x721c9cHpcA6wU_!!6000000003558-2-tps-1724-1656.png)

![](https://img.alicdn.com/imgextra/i4/O1CN013RniFA1JemXQTkiv1_!!6000000001054-2-tps-3420-628.png)

+ **ACK（通过 ACK Helm 或计算巢 Dify 社区版-高可用版部署）**

在服务-来源-创建来源处创建容器来源后，在服务-服务-创建服务处添加对应容器服务中 dify-system 命名空间下的 ack-dify-api。

![](https://img.alicdn.com/imgextra/i4/O1CN01MxVllB22fqAA8ds8V_!!6000000007148-2-tps-1724-1810.png)

![](https://img.alicdn.com/imgextra/i3/O1CN01aXmlLX1oeYQj5t365_!!6000000005250-2-tps-3352-520.png)


#### 配置路由
接下来，在 AI 网关上通过 Agent API 的方式为 Dify 服务配置路由。步骤如下：

1. 创建 Agent API。点击 Agent API- 创建 Agent API，其中域名和 Base Path 可以根据实际情况配置，用于通过域名访问 Dify 并且避免和其他服务的路径冲突，勾选转发至后端服务时移除，协议选择 Dify。

![](https://img.alicdn.com/imgextra/i3/O1CN015BMCM01ksW2StNZDt_!!6000000004739-2-tps-1902-1810.png)

2. 创建路由。在 Agent API 处点击上述步骤创建的 API，点击创建路由，如果您的 Dify 存在 workflow 应用，路径选择 /v1/workflows/run，如果您的 Dify 存在 agent 应用，路径选择 /v1/chat-messages，服务选择上述步骤创建的 api 服务。</font>

:::warning
如果您希望一条路由对应一个 Dify 应用，可以在更多匹配规则中，设置请求头和请求参数匹配，如设置 header-key=app-id，需要注意您在通过 AI 网关访问 Dify 应用时，需自主携带对应的匹配内容。

:::

![](https://img.alicdn.com/imgextra/i4/O1CN01x5v3HK1kDIOUnvu9Z_!!6000000004649-2-tps-2112-1810.png)

![](https://img.alicdn.com/imgextra/i3/O1CN01TYA5ks1HsrTyFjxoC_!!6000000000814-2-tps-2126-1802.png)

3. <font style="color:rgb(0, 0, 0);">应用访问验证。使用上述步骤配置的域名 + Path 访问 Dify 应用，能够正常调用则说明入流量代理配置成功。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01EtOJCS1plFq6rHdng_!!6000000005400-54-tps-1080-720.apng)

### Dify 应用模型出流量代理
<font style="color:rgba(0, 0, 0, 0.9);">AI 网关支持创建 LLM API 代理访问大模型，支持创建 Mcp Server 实现 Mcp 代理，支持通过使用 RAG 插件实现 Rag 检索代理，并针对不同类型的流量提供丰富的观测、安全、高可用治理等能力。</font>

<font style="color:rgba(0, 0, 0, 0.9);">由于访问大模型是 AI 应用最核心场景，本节将主要重点介绍 AI 网关代理大模型流量的操作方式，以及相应的高可用治理能力。</font>

1. AI 网关控制台创建 LLM API，用于访问自建或三方大模型，参考[管理LLM API](https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/manage-the-ai-api?spm=a2c4g.11186623.help-menu-29462.d_2_1_0.7460d13312enOB)
2. 前往 Dify 应用市场，安装插件 OpenAI-API-compatible

![](https://img.alicdn.com/imgextra/i3/O1CN01IxPBNn23Pdlk4aOgc_!!6000000007248-2-tps-1852-472.png)

3. 在 Dify 控制台，在右上角点击设置-模型供应商，为 OpenAI-API-compatible 添加模型，以 LLM 模型为例，其中模型类型、模型名称和 API Endpoint URL 为必填，API Endpoint URL 为步骤 1 在 AI 网关创建的 LLM API 的域名+前缀，其他参数可按需配置，点击保存。

![](https://img.alicdn.com/imgextra/i1/O1CN01pPklvU1pfl5Rl1bUs_!!6000000005388-2-tps-1278-1526.png)

4. 在应用中需要选择模型的节点，选择步骤 3 已创建的模型即可

![](https://img.alicdn.com/imgextra/i2/O1CN018Gmdz31vh1sfliTKg_!!6000000006203-2-tps-1560-844.png)

5. 在 Dify 中运行 Workflow 或 Agent，验证通过 AI 网关代理访问 LLM 能正常返回结果，说明大模型出流量代理配置生效。

![](https://img.alicdn.com/imgextra/i1/O1CN01yuCkMO267GjHmr2S3_!!6000000007614-54-tps-1430-540.apng)

## **Dify 应用入流量治理**
<font style="color:rgba(0, 0, 0, 0.9);">以 AI 网关作为 Dify 应用流量入口，可以在AI网关上通过配置集群限流，进行全局级、应用级等多维度流量控制。本节将以应用级限流为例进行简单介绍和演示。</font>

<font style="color:rgba(0, 0, 0, 0.9);">为了实现全局级和应用级限流，需要额外引入 Redis 实例进行计数，在 Dify 系统的存储组成中，Redis 是必要组件之一，因此可以刚好复用 Dify 系统的 Redis。</font>

在 AI 网关中完成 Redis 应用创建之后，在插件市场中使用<font style="color:rgb(51, 51, 51);">基于 Key 集群限流插件，通过配置插件规则，即可实现针对不同 Dify 应用的限流策略。基于集群限流插件的详细使用方式见</font>[基于 Key 集群限流](https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/throttle-based-on-cluster-keys?spm=a2c4g.11186623.help-menu-29462.d_2_10_5_1_5.3b543465zMXnxL)<font style="color:rgb(51, 51, 51);">。</font>

<font style="color:rgb(51, 51, 51);">以下图为例，假设对某 Dify 应用设置 1 分钟只允许通过一次的请求。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01TtnYTR1msAygT6nCE_!!6000000005009-2-tps-2514-1020.png)

对该应用发起调用，当一分钟内发起第 2 次请求的时候，会因为触发 AI 网关限流规则，导致调用失败。但是调用其他应用时，由于无流控规则，依然能够无限制请求。

![](https://img.alicdn.com/imgextra/i1/O1CN01YZ3cdp1KAqGLrHFVt_!!6000000001124-2-tps-1848-860.png)

## **Dify 应用出流量治理**
### 请求与 Token 限流
<font style="color:rgba(0, 0, 0, 0.9);">使用 AI 网关对模型调用代理，对于 Dify 应用调用模型服务的场景，可以实现不同时间尺度的请求数限流，其使用方式和效果同上文所述基本一致，差异在于限流位置，因此不再赘述。</font>

<font style="color:rgba(0, 0, 0, 0.9);">除了请求数限流，对于 Dify 应用调用模型服务的场景，还可以实现基于 token 消耗的流量控制，配置示意如下图所示，更详细的使用指引请详见</font>[限流](https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/current-limiting?spm=a2c4g.11186623.help-menu-29462.d_2_1_1_0.b4d3d133d6xeWc&scm=20140722.H_2873941._.OR_help-T_cn~zh-V_1)。

![](https://img.alicdn.com/imgextra/i4/O1CN01bQlg0V22pSTq2kiEu_!!6000000007169-2-tps-3668-946.png)

在该例中，配置全局 500 token/min，配置生效后，当模型服务整体在 1 分钟时间范围内超出 500 token 消耗后，访问模型的请求将会被 AI 网关直接拒绝。

![](https://img.alicdn.com/imgextra/i3/O1CN01rLIfAs1lnJ9UNmIit_!!6000000004863-2-tps-2402-526.png)

### Fallback
为模型访问配置 Fallback 能力，可以保证当默认访问的模型服务响应异常时，自动 Fallback 到备用模型服务，从而保证模型调用的高可用性，进而提升 Dify 应用的整体可用性。详细的配置和使用方式详见 [AI Fallback](https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/ai-fallback?spm=a2c4g.11186623.help-menu-29462.d_2_1_5.436c72acppE5xi&scm=20140722.H_2880076._.OR_help-T_cn~zh-V_1)。

为了模拟 Fallback 的效果，在本例中，为 Dify 应用所访问的 Model API 配置一个无法访问的主模型服务，再配置一个可以正常访问的百炼模型服务。

![](https://img.alicdn.com/imgextra/i2/O1CN01lRRBoL1LEKts2zphC_!!6000000001267-2-tps-1852-910.png)

运行 Dify 应用，能够看到 LLM 节点依然能正常返回结果，工作流运行正常。

![](https://img.alicdn.com/imgextra/i4/O1CN01ydhZap1LrixghDTkS_!!6000000001353-2-tps-2418-490.png)

通过网关日志我们能够看到，AI 网关在访问主模型服务时发生了 503 异常，于是自动 Fallback 到了百炼 qwen-turbo 模型进行了调用，并返回了正常调用结果，从而保证了 Dify 应用整体运行正常。

![](https://img.alicdn.com/imgextra/i3/O1CN014Me1Ht1y8cyijJRdK_!!6000000006534-54-tps-936-356.apng)

![](https://img.alicdn.com/imgextra/i2/O1CN01cl7EJP1lIccFrK6Xk_!!6000000004796-54-tps-920-434.apng)

### 负载均衡
<font style="color:rgba(0, 0, 0, 0.9);">对于 Dify 访问自建模型(如在阿里云 PAI 自建)的场景，AI 网关提供了面向 LLM 服务的负载均衡策略，包括全局最小请求数负载均衡、前缀匹配负载均衡以及 GPU 感知负载均衡，能够在不增加硬件成本的前提下，提升系统的吞吐能力、降低响应延迟，并实现更公平、高效的任务调度。具体介绍和使用方式参考</font>[AI负载均衡](https://apig.console.aliyun.com/?spm=5176.56205.J_5253785160.4.1d434dfeUKuHQy&region=cn-beijing#/cn-hangzhou/ai-gateway-plugin-manage/pls-eqeargh5ckt8xxatkpba?tab=document)、[不增加 GPU，首 Token 延迟下降50%｜LLM 服务负载均衡的新实践](https://mp.weixin.qq.com/s/ndETDBo2aAbyFrkDJx7dww)。

<font style="color:rgba(0, 0, 0, 0.9);">以前缀匹配负载均衡为例，压测工具使用 NVIDIA GenAI-Perf，设置每轮输入平均为 200 token，输出平均为 800 token，并发为 20，每个会话包含 5 轮对话，共计 60 个会话，性能指标前后对比如下。能够明显地感受到，通过合理的负载均衡策略，首 Token 延迟能够下降 50%。</font>

| **<font style="color:rgba(0, 0, 0, 0.9);">指标</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">无负载均衡</font>** | **<font style="color:rgba(0, 0, 0, 0.9);">前缀匹配负载均衡</font>** |
| --- | :--- | :--- |
| <font style="color:rgba(0, 0, 0, 0.9);">TTFT（首Token延迟）</font> | <font style="color:rgba(0, 0, 0, 0.9);">240 ms</font> | <font style="color:rgba(0, 0, 0, 0.9);">120 ms</font> |
| <font style="color:rgba(0, 0, 0, 0.9);">平均 RT</font> | <font style="color:rgba(0, 0, 0, 0.9);">14934.85 ms</font> | <font style="color:rgba(0, 0, 0, 0.9);">14402.36 ms</font> |
| <font style="color:rgba(0, 0, 0, 0.9);">P99 RT</font> | <font style="color:rgba(0, 0, 0, 0.9);">35345.65 ms</font> | <font style="color:rgba(0, 0, 0, 0.9);">30215.01 ms</font> |
| <font style="color:rgba(0, 0, 0, 0.9);">Token 吞吐</font> | <font style="color:rgba(0, 0, 0, 0.9);">367.48 (token/s)</font> | <font style="color:rgba(0, 0, 0, 0.9);">418.96 (token/s)</font> |
| <font style="color:rgba(0, 0, 0, 0.9);">Prefix Cache 命中率</font> | <font style="color:rgba(0, 0, 0, 0.9);">40 % +</font> | <font style="color:rgba(0, 0, 0, 0.9);">80 % +</font> |


<font style="color:rgba(0, 0, 0, 0.9);">以前缀匹配负载均衡为例，针对 Dify 应用访问的 Model API，可通过插件便捷地配置负载均衡策略，配置示意如下图所示。</font>



![](https://img.alicdn.com/imgextra/i3/O1CN01qcqke21RszksrX7Dn_!!6000000002168-2-tps-2602-1806.png)

插件生效后，Dify 应用通过 AI 网关对 LLM 服务发起调用，即可实现对自建 LLM 服务实例的负载均衡。

# 总结
<font style="color:rgba(0, 0, 0, 0.9);">通过 Higress AI 网关的赋能，Dify 不再是一个“单打独斗”的开源平台，而是拥有了一个强大的企业级治理与增强引擎。无论是应用层的高可用防护，还是模型层的稳定与性能优化，AI 网关都提供了开箱即用的解决方案，将开发者从复杂的运维中解放出来，更专注于业务创新。</font>

<font style="color:rgba(0, 0, 0, 0.9);">除了高可用能力外，Higress AI 还提供了安全、RAG 代理等其他丰富能力，提升 Dify 应用安全性、便捷对接外部 RAG 引擎。如果你正在使用 Dify，并被高可用、安全、RAG 等问题所困扰，那么使用 Higress AI 网关代理 Dify 应用出入流量，绝对是你不可错过的最佳实践。</font>


