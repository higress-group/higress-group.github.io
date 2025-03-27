---
title: "Higress.ai 站点全新发布，轻松解锁 AI 新能力，开启全球服务！"
description: "Higress.ai 站点全新发布，轻松解锁 AI 新能力，开启全球服务！"
date: "2025-03-20"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

随着大模型技术的快速发展，AI服务的规模化落地对底层基础设施提出了新需求。在讨论到大模型规模化和安全使用时，AI网关是非常重要的AI 基础设施关键组件之一。

AI网关是传统API网关面向大模型场景的深度演进，它在保障基础网关能力的同时，针对AI服务的特性进行了专项增强：

+ **场景特性适配**：专门优化长连接、高并发、大带宽等传输需求，适配大模型服务的高延迟特性
+ **智能流量治理**：支持多模型动态路由、智能负载均衡、API Key轮转调度、语义化请求缓存
+ **安全合规保障**：内置内容安全过滤、Token配额管理、多级限流熔断等安全能力
+ **成本精细管控**：提供调用审计分析、流量灰度分发、失败请求自动重试等运维工具

通过统一接入层协议，AI网关帮助开发者实现多源AI服务的高效整合与管理，降低复杂场景下的接入与运维成本。



Higress开源站在原有渠道站点[https://higress.cn/](https://higress.cn/)上，新增了**higress.ai**子站点，提供中文版和国际版(Beta)的形式供开发者们访问，点击访问：[https://higress.ai/](https://higress.ai/)。

higress.ai提供了多种场景下商业化及开源侧AI网关的体验渠道，并展示Higress在AI网关上最新的探索和新闻，如果您感兴趣的话，请关注我们后续的动态。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742297546510-96d33798-b4c9-425f-b097-38014b0cf0c0.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742297568325-dccc4409-7f86-4c40-96b6-42946839baed.png)



您可能会关心以下几个问题：

# higress.cn 和 higress.ai 有什么不同？
Higress是一款云原生 API 网关，内核基于 Istio 和 Envoy，将流量网关、微服务网关、安全网关和AI 网关四合一可以用 Go/Rust/JS 等编写 Wasm 插件，提供了数十个现成的通用插件，以及开箱即用的控制台。

higress.cn 作为 Higress 云原生 API 网关的官方技术门户及一站式资源平台，专注于为开发者提供与 Higress 技术栈相关的核心能力展示、开源生态支持及企业用户最佳实践。 

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742301323020-0ca231d5-314f-4056-b456-9079bbc972a1.png)

其中，AI网关作为现代AI基础设施的关键组件，其技术演进与大语言模型的生态发展存在深度耦合。在LLM技术栈中，检索增强生成（RAG）、智能体（Agent）、MCP协议等新技术路径不断涌现，这为AI网关在协议优化、流量治理、模型调度等维度开辟了多维度的技术演进方向。

为了更好向开发者们展示AI网关内容的丰富程度，higress.ai 应运而生，旨在为Agent开发框架集成、LLM API治理等典型AI应用场景，提供体验AI网关及展示的渠道。同时，higress.ai上也会展示目前Higress在AI网关下进行的探索，和AI开发者们共同定义下一代AI原生网关的技术方向。

需要注意的是，AI 网关并不是独立的新形态，本质也是一种 API 网关，区别在于针对 AI 场景的新需求专门做了扩展，它既是 API 网关的继承，也是 API 网关的演进。

# Higress以后只做AI网关了吗？
**当然不是。**

AI 网关只是Higress面向大模型场景的新增能力，Higress一直在流量网关、微服务网关、安全网关上做能力增强和体验提升。

在**流量网关**层面，Higress 可以作为 K8s 集群的 Ingress 入口网关, 并且兼容了大量 K8s Nginx Ingress 的注解，可以从 K8s Nginx Ingress 快速平滑迁移到 Higress。

在**微服务网关**层面，Higress能够对接多种类型的注册中心发现服务配置路由，例如 Nacos、ZooKeeper、Consul、Eureka 等，并且深度集成了 Dubbo、Nacos、 Sentinel 等微服务技术栈。相比传统 Java 类微服务网关，Higress 基于 Envoy C++ 网关内核能够表现出更出色性能，可以显著降低资源使用率，减少成本。

在**安全网关**层面，Higress 提供 WAF 的能力，并且支持多种认证鉴权策略，例如 key-auth、hmac-auth、jwt-auth、basic-auth、OIDC 等。

# 如何体验higress.ai的场景？
higress.ai目前已经提供了多模型代理、内容安全、语义缓存、令牌限流四个场景的体验渠道，通过首页对应的场景说明，或顶部的导航栏就可以进行一键体验。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742292339039-45e01b9e-07e3-4301-91cd-60424abf0c0c.png)

点击对应的场景，即可进入体验渠道的落地页。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742292081204-21bb0ece-facd-4b4d-af42-4aec28ebc778.png)

目前higress.ai体验提供两种渠道：

+ 云上体验：开发者可通过登录阿里云账号，在阿里云AI网关产品上，通过“云起实验室”的方式使用**免费额度**体验网关功能。
+ 开源体验：开发者可通过本地docker环境，一键部署AI网关，体验多个场景下AI网关的发挥的作用。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742297462197-8280142f-184f-4b05-91cd-87e049e52d6b.png)



# higress.ai 未来的规划是什么？
<font style="color:rgba(0, 0, 0, 0.9);">Higress.ai 整体界面和功能展示都在持续完善中，我们下一步计划是：</font>

+ 国际版上线：站点全量内容将进行国际化适配，并同步在海外社交媒体矩阵开展品牌推广，也欢迎大家在各个渠道上follow我们
+ 更多场景演示：基于当前AI网关中10+个插件功能，我们会计划结合目前在商业版上的用户场景，推出更多的场景演示；如果您在开源版有创新性应用实践，也欢迎联系我们共建
+ 在线插件编辑器：我们即将推出在线的插件编辑器，开发者无需配置本地编译环境即可完成插件研发；在该编辑器上，我们将基于AI的能力，提供自然语言生成插件代码、在线编译调试、AI助手问题解决等一站式插件生成服务，帮助您快速基于Higress能力构建插件
+ 最佳实践展示：我们将陆续会输出一系列最佳实践，涵盖不同规模的AI场景下，开发者及企业在AI应用场景的架构设计参考方案与性能调优建议。
+ 更多的体验场景：基于开源<font style="color:rgba(0, 0, 0, 0.9);">版中的10+个插件功能，以及商业版上的用户场景，上线更多体验场景；如果您在开源版上有任何创新性的实践，欢迎联系我们共建。</font>


