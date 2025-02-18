---
title: "AI 网关需要具备的10大基本能力"
description: "AI 网关需要具备的10大基本能力"
date: "2025-02-18"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸、澄潭

大模型主战场从训练转向推理，已经成为业内共识。越来越多的公司已经开始设计符满足企业内部需求和外部商业方向的大模型应用，并在生产环境中进行部署。这个过程中，我们遇到了一系列新的需求，这些需求与最初的大模型应用在 “概念验证阶段” 有所不同。这些新需求更多地源于对规模化和安全使用，其中，AI 网关成为被讨论较多的 AI 基础设施关键组件之一。  
  
我们认为 AI 网关并不是独立于 API 网关的新形态，本质也是一种 API 网关，区别在于针对 AI 场景的新需求专门做了扩展，它既是 API 网关的继承，也是 API 网关的演进。因此我们从 API 视角，对 AI 网关的能力做了分类，便于形成概念的共识。



## 01 API 网关的继承
由于围绕 API 提供的网关能力繁多，涉及的角色众多，我们将所有能力基于使用方进行分类，包括研发、供应和消费场景三大场景，分别对应 API 接口的研发团队、API 平台的研发和运维团队、API 平台的外部调用方。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/jpeg/133108/1739759144302-bc8841c6-1e95-44ed-a8be-be83c7070561.jpeg)

### API 研发场景
<font style="color:rgb(51, 51, 51);">API First 是先定义好 API 规范，再 code。不同于不定义 API，直接 coding，API First 强调的是在构建应用程序之前优先设计和开发 API 接口，将 API 视为系统的核心架构组件，通过定义良好的接口规范实现模块化。例如公共云的云产品都提供了 API 的调用方式，微信小程序、钉钉开放平台也面向开发者提供了 API 接口，类似乐高积木的模块化系统，通过标准接口实现服务间的灵活组合，提升系统的可扩展性和维护性，从而提升生态效率。</font>

<font style="color:rgb(51, 51, 51);"></font>

### API 供应场景
<font style="color:rgb(0, 0, 0);">API 供应场景指 API 提供方（如企业、平台或服务）通过标准化接口对外暴露数据或功能的过程。其核心是创建、管理和维护 API，确保其可用性、安全性和高效性。核心能力包括：</font>

+ <font style="color:rgb(0, 0, 0);">API 安全：</font><font style="color:rgba(0, 0, 0, 0.85);">保护 API 免受各种安全威胁，确保只有经过授权的用户、应用程序能够访问 API，并保障数据在传输和存储过程中的保密性、完整性和可用性。例如身份验证、授权管理、数据加解密、防攻击机制。</font>
+ <font style="color:rgb(0, 0, 0);">灰度：</font><font style="color:rgba(0, 0, 0, 0.85);">是一种在生产环境中逐步引入新 API 版本或功能的策略，允许将一部分用户或请求流量导向新版本的 API，同时将其余部分仍保持在旧版本上，从而在不影响整体系统稳定性和用户体验的前提下，对新 API 进行测试和验证。</font>
+ <font style="color:rgb(0, 0, 0);">缓存：</font>指将 API 的响应结果临时存储在缓存服务器中，当有相同的请求再次到来时，直接从缓存中获取响应结果，而无需再次访问后端服务器，从而提高 API 的响应速度和系统的性能。

<font style="color:rgb(0, 0, 0);"></font>

### API 消费场景
<font style="color:rgb(0, 0, 0);">API 消费场景指调用方（如应用、开发者）通过集成外部 API 快速实现功能或获取数据的过程。其核心是使用平台方提供的能力或数据，实现业务需求。</font>

+ <font style="color:rgba(0, 0, 0, 0.85);">调用审计：</font><font style="color:rgba(0, 0, 0, 0.85);">对 API 的调用活动进行全面记录、监控和分析的过程。它会详细记录每一次 API 调用的相关信息，包括调用时间、调用方身份、调用的 API 接口、请求参数、响应结果、响应时间等。</font>
+ <font style="color:rgba(0, 0, 0, 0.85);">调用方配额限速：</font><font style="color:rgba(0, 0, 0, 0.85);">指 API 网关根据预先设定的规则，对每个调用方（如用户、应用程序、IP 地址等）在一定时间内对 API 的调用次数、流量大小或资源使用量进行限制的机制。</font>
+ <font style="color:rgb(0, 0, 0);">后端保护式限流：</font><font style="color:rgba(0, 0, 0, 0.85);">对 API 的访问流量进行管理和控制，确保 </font><font style="color:rgb(0, 0, 0);">API 能够稳定、高效地运行，避免因流量过大或异常流量导致的系统崩溃和性能下降，包括负载均衡、限流、降级、熔断等能力。</font>



## 02 API 网关的演进
在大模型场景下，大模型通过 API 对外提供服务，因此研发场景、供应场景、消费场景都出现了更加丰富的诉求。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/jpeg/133108/1739759254437-7163f91f-047e-4dfb-99c5-9c4be2bca464.jpeg)

### 大模型 API 研发场景
API First 或者 API 是一等公民不再是一种口号，而是逐步成为实实在在的应用开发规范。Agent 的开发和运行，要调用 API，Agent 通过开放平台形式提供对外服务，也要提供 API。API 网关可以覆盖 API 的设计、开发、测试、发布、售卖、运维监测、安全管控、下线等各个生命周期阶段，企业的诉求将更为强烈。基于 API 网关，还可以提供多个插件能力，提升 Agent 开发效率，例如 AI 提示词模版 **<font style="color:#2F4BDA;">[1]</font>**，API AI Agent **<font style="color:#2F4BDA;">[2]</font>**<font style="color:rgb(53, 56, 65);">，</font><font style="color:rgb(53, 56, 65);">Json 格式化</font>**<font style="color:#2F4BDA;">[3]</font>**<font style="color:rgb(53, 56, 65);">，用于根据默认或用户配置的 Json Schema 对 AI 的响应进行结构化等等。</font>


### 大模型 API 供应场景
+ 多模型灵活切换&兜底重试：大模型应用后端对接多个大模型，已经成为应用的标配，一是供用户选择使用哪一个后端模型，二是应用出现故障或容量限制时的 fallback 机制。**<font style="color:#2F4BDA;">[4]</font>**
+ 内容安全和合规：通过内容安全插件，过滤掉有害或不适当的内容，检测和阻止包含敏感数据的请求，并对 AI 生成内容进行质量和合规性审核。**<font style="color:#2F4BDA;">[5]</font>**
+ 语义化缓存：大模型 API 服务定价分为每百万输入 tokens X 元（缓存命中）/ Y 元（缓存未命中），X 远低于 Y，以通义系列为例，X 仅为 Y 的40%，通过在内存数据库中缓存 LLM 响应，并以网关插件的形式来改善推理的延迟和成本。在网关层自动缓存对应用户的历史对话，在后续对话中自动填充到上下文，从而实现大模型对上下文语义的理解。**<font style="color:#2F4BDA;">[6]</font>**
+ 多 API Key 均衡：API Key 是用于识别和验证调用方身份以及控制其对 API 访问权限的密钥。多 API Key 均衡就是当存在多个 API Key 时，API 网关通过一定的策略将 API 请求均匀地或根据特定规则分配到这些 API Key 上进行处理。**<font style="color:#2F4BDA;"></font>**



### 大模型 API 消费场景
+ Token 配额管理和限流：“令牌”（Token）是大模型应用的常见衡量单位，准确地量化了大模型应用处理的数据量，和传统网关管理服务的访问量一样，AI 网关也需要具备对 Token 的管理能力，包括对使用量的观测，并提供限流功能，以及面向调用租户配置精确的调用额度限制。**<font style="color:#2F4BDA;">[7][8]</font>**
+ 流量灰度：基模和大模型应用都在持续改善内容生成质量，使得大模型应用的变更频率保持在一个较高的 level，将会高度依赖 A/B 测试和服务灰度能力来进行模型迭代。作为流量入口，AI 网关需要在流量灰度和观测方面发挥关键作用，包括灰度打标以及入口流量延时和成功率等指标的监测。**<font style="color:#2F4BDA;"></font>**
+ 调用成本审计：大模型调用所消耗的计算资源远高于 Web 应用请求所消耗的计算资源，因此对调用成本的控制需求更加刚需。这里的调用既包括直接的经济成本，例如使用第三方 API 服务时需支付的费用，或者因 API 调用消耗企业内部计算资源（如服务器、存储、带宽等）而产生的成本；也包括间接成本，例如因 API 调用错误导致的资源成本等。



## 03 为什么要在网关上，而非大模型服务层实现这些能力
### 架构设计与解耦
+ **功能分离**：网关和大模型服务层承担着不同的核心功能。大模型服务层专注于执行复杂的计算任务，如自然语言处理、图像识别等，为用户提供智能响应。而 API 网关的主要功能是管理 API 的访问，包括安全认证、流量控制、协议转换等。将 API 网关的能力放在网关上实现，能够实现功能的清晰分离，使各个组件的职责更加明确，便于系统的开发、维护和扩展。
+ **解耦系统**：如果在大模型服务层实现 API 网关的功能，会导致大模型服务与 API 管理功能紧密耦合。当需要对 API 管理策略进行调整（如更改安全认证方式、调整流量限制规则）时，可能会影响到大模型服务的稳定性和性能。而在网关上实现 API 网关能力，可以将大模型服务与 API 管理解耦，使两者可以独立发展和升级，降低系统的复杂度和维护成本。

### 性能优化
+ **减少大模型负载**：大模型通常需要大量的计算资源和内存来运行，处理复杂的推理任务已经消耗了大量的系统资源。如果再在大模型服务层实现 API 网关的功能，如身份验证、限流、缓存等，会进一步增加大模型的负载，影响其处理速度和响应时间。而将这些功能放在网关上实现，可以在请求到达大模型服务层之前对其进行预处理和过滤，减少不必要的请求进入大模型服务层，从而提高大模型的性能和效率。
+ **提高并发处理能力**：网关可以通过负载均衡等技术，将大量的 API 请求均匀地分配到多个大模型服务实例上，提高系统的并发处理能力。如果在大模型服务层实现 API 网关功能，每个大模型服务实例都需要独立处理 API 管理任务，这会限制系统的并发处理能力。而网关可以集中处理这些任务，更好地应对高并发场景。

### 安全保障
+ **统一安全防护**：网关作为系统的入口，可以对所有进入系统的 API 请求进行全面的安全检查，形成一道统一的安全防线。在网关上实现身份验证、授权、防攻击等安全功能，可以有效阻止恶意请求进入大模型服务层，保护大模型和相关数据的安全。如果在大模型服务层实现安全功能，可能会因为大模型服务的分散性而导致安全防护存在漏洞。
+ **数据保护**：网关可以对 API 请求和响应的数据进行加密、脱敏等处理，确保数据在传输和存储过程中的安全性。在大模型服务层处理这些数据保护任务可能会增加大模型的复杂性和计算负担。而在网关上统一处理，可以更好地保护用户的敏感信息，同时避免大模型直接接触敏感数据带来的安全风险。

### 可扩展性与灵活性
+ **方便新功能集成**：随着业务的发展，可能需要为 API 管理添加新的功能，如支持新的安全认证协议、引入新的流量控制算法等。在网关上实现 API 网关能力，更容易集成这些新功能，而无需对大模型服务层进行大规模的修改。这样可以快速响应业务需求的变化，提高系统的扩展性。
+ **支持多模型接入**：在实际应用中，可能会同时使用多个不同的大模型服务。网关可以作为统一的接入点，为不同的大模型服务提供相同的 API 管理服务，方便对多个大模型进行管理和调度。如果在每个大模型服务层分别实现 API 网关功能，会增加系统的复杂性和管理难度。

### 可观测性与监控
+ **集中监控与分析**：网关可以对所有 API 请求进行集中监控和分析，收集各种指标数据，如请求响应时间、调用频率、错误率等。通过对这些数据的分析，可以及时发现系统中存在的问题，如性能瓶颈、安全漏洞等，并采取相应的措施进行优化和修复。如果在大模型服务层实现监控功能，将难以对整个系统的 API 调用情况进行全面的了解和分析。
+ **故障排查与定位**：当出现 API 调用故障时，在网关上可以更容易地进行故障排查和定位。网关可以记录每个 API 请求的详细信息，包括请求的来源、请求参数、响应结果等，通过分析这些信息可以快速确定故障的原因和位置，减少故障修复的时间和成本。



## 04 AI 网关的演进方向
得益于 Wasm 插件的动态扩展能力，Higress 在 AI 时代快速演进并发展 AI 时代的能力。本文提到的大模型 API 管理底层能力，均已经在开源 Higress 和阿里云云原生 API 网关上线：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739786061497-f4de5992-ed2e-4d1a-a1a9-b907a53458df.png)

<div style="text-align:center">Higress 开源控制台</div>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1739783921793-20acc7cb-3a61-4cf9-b46c-e4b52ed1dc44.png)

<div style="text-align:center">阿里云云原生 API 网关控制台</div>

同时在阿里云云原生 API 网关上我们提供了 AI API 管理能力，可以更便捷更高效地管理 AI 时代的 API：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739790023536-cc545d98-842c-4243-9885-b7fd97e2b48e.png)

<div style="text-align:center">创建 AI API 选项</div>

未来，我们将向内容规范化输出、减少幻觉，以及其他稳定性、易用性上进行演进，欢迎开发者们加入我们的社群，将您遇到的需求或难题告知我们，一起开发更好用的开源产品和商业服务。

**<font style="color:#2F4BDA;">[1] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-dev/ai-prompt-template/**](https://higress.cn/docs/latest/plugins/ai/api-dev/ai-prompt-template/)

**<font style="color:#2F4BDA;">[2] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-dev/ai-agent/**](https://higress.cn/docs/latest/plugins/ai/api-dev/ai-agent/)

**<font style="color:#2F4BDA;">[3] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-dev/ai-json-resp/**](https://higress.cn/docs/latest/plugins/ai/api-dev/ai-json-resp/?)

**<font style="color:#2F4BDA;">[4] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-provider/ai-proxy/**](https://higress.cn/docs/latest/plugins/ai/api-provider/ai-proxy/)**<font style="color:#2F4BDA;"> </font>**

**<font style="color:#2F4BDA;">[5] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-provider/ai-security-guard/**](https://higress.cn/docs/latest/plugins/ai/api-provider/ai-security-guard/)

**<font style="color:#2F4BDA;">[6] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-provider/ai-cache/**](https://higress.cn/docs/latest/plugins/ai/api-provider/ai-cache/)

**<font style="color:#2F4BDA;">[7] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-consumer/ai-token-ratelimit/**](https://higress.cn/docs/latest/plugins/ai/api-consumer/ai-token-ratelimit/)

**<font style="color:#2F4BDA;">[8] </font>**[**https://higress.cn/docs/latest/plugins/ai/api-consumer/ai-quota**](https://higress.cn/docs/latest/plugins/ai/api-consumer/ai-quota)


