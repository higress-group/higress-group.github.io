---
title: "AI Gateway 分析：OpenRouter vs Higress"
description: "AI Gateway 分析：OpenRouter vs Higress"
date: "2025-07-24"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸

在经典应用架构中，「网关」往往意味着对用户请求的统一接入、认证鉴权、流控、协议转换等功能，Nginx、Envoy、Kong 等网关项目便是这一类能力的典型代表。而无论是微服务架构，还是云原生架构，这类产品的使用逻辑相对清晰、选型依据也相对稳定。



但进入 AI 应用时代后，原本定义清晰的「网关」概念正在被重新塑造。例如近期较热的 OpenRouter，早期以 LLM MarketPlace 自居的产品，如今也开始将自己定位为 “AI Gateway”。

![](https://img.alicdn.com/imgextra/i2/O1CN01nUQCXm1pRYngfORoA_!!6000000005357-2-tps-2786-710.png)

这标志着三个重要变化：

+ AI Gateway 的供应商类型更多元化了：不仅有公共云厂商，如阿里云 API 网关（ Higress）、独立网关厂商，如 Kong，提供私有化服务和开源方案，也有由 OpenRouter 这种从模型调用的刚性需求切入的初创企业。
+ AI Gateway 的使用者画像更加丰富了：不仅有负责基础设施的运维和 SRE，也有使用通用模型和 AI 编程模型调用服务的广大的程序员群体。
+ AI Gateway 的能力范畴被扩展了：不仅限于面向企业交付场景，构建 AI 应用时提供的大模型层面的流量治理和用户访问权限管控能力，也面向于程序员调用大模型服务的场景，提供统一、易用、成本效益可控的模型集成能力。



对开发者和企业用户而言，这会带来一定的认知负担。过去我们只需对比网关遵循的标准、内核、性能、插件体系、上下游集成能力、可观测性、以及其他企业级能力等几个硬指标；而今天，需要结合使用者画像、需求场景来界定不同类型的 AI Gateway。本文旨在以 OpenRouter vs. Higress 为代表，从上线背景、发展历程、定位、功能等维度，试图厘清这两款不同形态的 AI Gateway 的相关性和差异性。



## 一、上线背景和演进历程
每一个技术型产品的演进轨迹，都深受其初始形态与客户需求的双重塑造。AI Gateway 也不例外。因此，了解 Higress 与 OpenRouter 的上线背景与演进过程，更能加深我们对两者的认知。



### OpenRouter：模型繁荣下的产物
OpenRouter 最初上线于 2023 年，目标是解决“调用和对比多个主流大模型 API 性能差异太繁琐”的问题。OpenRouter 统一封装了 OpenAI、Anthropic、Google、DeepSeek、Qwen、Kimi 等主流模型厂商的 API 接口，将原本分散、结构不一的调用方式整合成统一标准（大多数遵循 OpenAI 的接口规范），并提供一个单一的 API Key 管理入口，开发者可以同时调用多个大模型供应商的 API，既可使用自己的 API Key（BYOK），也可以充值使用平台提供的 Key（收取5%的手续费）。



调用模型速度快和热门模型上线快是其核心优势，切中了程序员群体的痛点。



从早期简单的接口统一集成，到逐步引入模型之间的负载均衡、不断优化的调用性能、调用日志查询、Key 权限划分、模型可用性观测等能力，逐步从一个“模型聚合器”演变成轻量的“模型调用网关”。在 2024 年后期，OpenRouter 明确提出自己是 “AI Gateway”，并将其能力边界拓展至模型负载均衡、限流、即时缓存等更贴近网关能力的方向。



这种演化路径的核心驱动力来自企业级客户的真实需求：如何以最小的接入成本调用多个模型、试验模型效果、管理 Token 成本等。因此，OpenRouter 始终围绕“简化调用体验”这条主线展开，形成了它今天模型聚合+轻网关的形态。



### Higress：随应用架构的发展而演进
相比 OpenRouter 的“新物种”特征，Higress 代表的则是经典的网关演进路线，即随着应用架构的发展而逐步演进。



Higress 于 2022 年开源，起初旨在构建一个面向云原生场景的网关，融合了 Istio 的服务治理思想、Envoy 的高性能数据面能力，并基于 WebAssembly 插件架构实现了强大的定制能力。进入 2024 年后，随着 AI 应用浪潮的来临，Higress 发布[v1.4](https://mp.weixin.qq.com/s/JqlMXA-SGcBrNQbF2FVQog)，在国内率先提供面向大模型场景的大模型代理、安全防护、访问鉴权、可观测、缓存、提示词工程等能力，快速吸引了 AI 开发者的注意力；2025年，加码开源，实现存量 API 批量0代码转化为 MCP Server 的能力，以及 MCP 网络协议卸载，无须承担 MCP 发布新版本带来的维护工作等，并发布 Higress MCP Marketplace，成为国内面向 MCP 场景的唯一的开源网关方案。



Higress 的演进是一种应用架构升级驱动下的扩展，不是另起炉灶，而是在云原生网关的基座上，通过插件、集成机制，把 AI 场景的能力有机的融合进去。这种方式天然契合存量应用 AI 化的诉求，对企业级客户更加友好。



## 二、产品定位与功能
虽然 OpenRouter 和 Higress 都打出了 “AI Gateway” 的旗号，但从产品定位与功能来看，两者并非同类对手，而是在不同出发点上，对“网关”能力做出了各自的解构与重塑。



**一句话总结是：OpenRouter 是为程序员调用 AI 服务而生，而 Higress 是为企业交付 AI 应用而建。** 接下来，我们结合两个项目的使用界面，了解各自的定位和核心功能。



### OpenRouter：为程序员调用 AI 服务而生
OpenRouter 的定位：围绕 “标准化模型的调用体验” 展开，持续提供增值能力的 SaaS 服务。功能上，OpenRouter 关注的是模型聚合（Model）与调用体验（Chat）两个核心维度。



模型聚合（Model）：它支持对多家模型厂商，提供统一的 API，让用户通过单个端点访问数百个 AI 模型，同时通过白屏的参数配置，例如 input 类型、支持的上下文长度、单价筛选模型。

![](https://img.alicdn.com/imgextra/i3/O1CN015KtX151dJ443Au8v3_!!6000000003714-2-tps-2836-1606.png)



<font style="color:rgb(9, 9, 11);">OpenRouter 为 400 多个模型和提供商提供了与 OpenAI 兼容的补全 API，可以直接调用，也可以使用 OpenAI SDK 调用。此外，还提供了一些第三方 SDK。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN011728al23TlKENe6sH_!!6000000007257-2-tps-2060-1198.png)



调用体验（Chat）：在线多模型对话工具，提供统一的对话界面，方便开发者查看输出差异，对比模型的响应效果，进行提示词调试和评估上下文表现。

![](https://img.alicdn.com/imgextra/i1/O1CN01SogbaG1V6gQoLDktR_!!6000000002604-2-tps-2806-1586.png)



排行榜（Ranking）：以 token 作为计量单位，提供了通用模型、Coding 模型、Agent 三个维度的调用量排行。

![](https://img.alicdn.com/imgextra/i2/O1CN01wugNxe1Lfoegh9cqz_!!6000000001327-2-tps-2036-888.png)



此外，围绕模型调用提供了诸多的体验优化，比如：

+ 路由与策略控制方面：提供了模型优先级设置、请求条件路由、Token 使用监控、失败重试等轻量控制能力，帮助开发者优化调用稳定性与成本效率。
+ 权限与多租户支持：支持为每个 API Key 设置访问范围、频率限制，便于团队共享资源同时保证安全隔离。
+ 可用性检测与模型状态反馈：尤其适合做 prompt 实验、A/B 调优等高频迭代的场景。



整体而言，OpenRouter 天然适用于构建模型调用的抽象层，但在更底层的网络协议、细粒度安全治理、企业应用接入等方面仍有明显短板。



### Higress：为企业交付 AI 应用而建
Higress 的定位：为企业交付 AI 应用打造的网关，支撑的是企业 AI 应用的生产化落地。这意味着 Higress 服务的客户并不是程序员，而是企业，让企业可靠地把模型服务交付给用户使用，其三大使用场景如下：

+ 容器和微服务网关：提供从集群入口流量到后端微服务的管理，包括路由转发、安全认证、协议转化，并结合微服务治理能力提供全链路灰度、限流降级保障链路稳定。
+ 大模型网关：统一代理各主流大模型和自建大模型服务，提供 OpenAI兼容的访问方式，并提供二次 API KEY 签发、限流、安全防护、观测等治理能力 。
+ MCP 网关：支持 API-to-MCP 快速转化，并提供 MCP Server 代理、安全认证，以及统一观测、限流等治理能力。



因此，从 Higress 控制台上看，提供了企业应用接入时的路由、域名、服务来源配置，同时提供消费者管理、证书管理和网关的 CPU、Memory、用户请求等观测指标。



![](https://framerusercontent.com/images/C5dDkyZySA0u2tHz0uANeLzRnNI.png)



并通过丰富的插件，扩展网关的能力，例如限流、意图识别、内容审核审核等。

![](https://framerusercontent.com/images/M2CZDhxmzdKwQlz5ZtVsvZvLg.png)



在 Higress 的 MCP 市场，可以将存量 API 转化为 Remote MCP Server，并上传到市场。

![](https://framerusercontent.com/images/z49gQVtPQTqQ3BL5hYU3FwBxe8.png)



支持国内主流开源 Agent 的快速集成和调用。

![](https://framerusercontent.com/images/eXaXpaOEriyq0yPXiU6kAHMagAM.png)  


此外，Higress 对多云与私有化部署友好，其架构支持多种部署形态，可灵活接入企业内已有应用架构体系。因此，Higress 是一款面向“复杂接入场景 + 高稳定性要求”的企业级 AI 网关，适合承担企业内部 AI 应用落地的基础设施角色。



## 三、服务和计费
从定位上看，OpenRouter 和 Higress 是在使用场景上，两种完全不同的 AI Gateway，因此服务和计费模式也完全不同。



由于 OpenRouter 提供的是模型的调用服务，因此是基于各个模型厂商的计费规则提供服务：

+ 通过 OpenRouter 申请各个模型的 API Key：充值 OpenRouter 的 Credit 额度，并收取 5.5% 过路费（支持加密货币，过路费 5%），Credit 按照模型厂商的定价进行等值消耗。
+ 使用自己的 API Key（BYOK），OpenRouter 加收 5% 过路费，通过 Credit 额度抵扣。
+ 部分能力通过 SDK 开源，比如 openrouter‑runner（Star 1k），提供多个模型的接入和 fallback 能力。



Higress 内核基于 Istio 和 Envoy，核心能力均是开源的，遵循 Apache-2.0 协议，提供公共云、专有云、混合云等多种部署模式。此外，提供云上托管版本阿里云 API 网关，在性能、稳定性、易用性、安全、云产品集成、可观测、以及其他企业级能力均作了增强。
