---
title: "Higress 加入 CNCF：保障 Nginx Ingress 迁移，提供企业级 AI 网关"
description: "Higress 加入 CNCF：保障 Nginx Ingress 迁移，提供企业级 AI 网关"
date: "2026-03-19"
category: "article"
keywords: ["Higress"]
authors: "CH3CH0"
---


我们很高兴地宣布，**Higress** 已正式通过 TOC 投票表决，加入云原生计算基金会（CNCF）Sandbox 项目，成为 CNCF 生态的一员。



### Higress 是什么？
Higress 是一款基于 Envoy 和 Istio 构建的 AI 原生、高性能 API 网关。它将流量网关、微服务网关与 AI 网关统一于单一控制面，降低云原生与 AI 工作负载的运维复杂度。



Higress 诞生于阿里巴巴内部大规模生产实践，为 CNCF 生态带来企业级稳定性与 WebAssembly（Wasm）扩展能力。目前，其核心能力聚焦两大方向：

+ **Ingress Controller 与 Gateway 能力：** Higress 是成熟的 Kubernetes Ingress Controller，同时完整支持 Gateway API 及其 Inference Extension。随着 Nginx Ingress 计划于 2026 年退役，Higress 可作为安全、即插即用的替代方案——兼容主流 Nginx Ingress 注解，以 xDS 控制面与 Wasm 沙箱替代脆弱的配置注入模式，消除传统架构中的安全风险。无论是继续使用 Ingress 还是迁移至 Gateway API，Higress 均提供统一、可扩展的流量治理能力。
+ **AI 原生网关能力：** Higress 将 AI 流量视为一等公民，原生支持 LLM 调用、Model Context Protocol（MCP）及 AI 推理场景，提供基于 Token 的限流、多模型 Fallback、RAG 检索、模型感知路由与智能负载均衡等能力，标准化云原生应用消费大语言模型的方式，使 Higress 成为 AI Agent 与 LLM 流量的标准入口。



### Higress 企业案例
Higress 已在多种不同的环境中展现出了足以投入生产的可靠性。目前的企业采用者包括阿里巴巴集团、蚂蚁集团、携程、大疆创新、国泰产险、唯品会、Boss 直聘、快手、Sealos 等，覆盖互联网、金融、旅游出行、硬件、娱乐、创新企业等多个行业和领域。这些企业既使用了Higress 云原生网关的能力，也将其 AI 网关能力部署到企业的 Agent 应用或 MCP 服务上。此外，在 Higress 的基础上，延伸出诸多 AI 相关的创新开源项目，包括 HiMarket、HiClaw 等。



### 为什么申请加入 CNCF
Higress 加入云原生计算基金会（CNCF），是其发展进程中的关键一步，主要源于以下三方面的考虑：

+ CNCF 汇聚了包括 Kubernetes、Envoy 等在内的众多核心开源项目。Higress 基于 Envoy 和 Istio 构建，其技术基因与云原生环境天然契合。成为 CNCF 的一员，**意味着 Higress 能够更深入地与这些顶级项目协作，共同定义技术标准，确保其在云原生架构中的兼容性和领先地位。**
+ 其次，**开源项目的长期健康发展依赖于一个多元且活跃的贡献者社区。**依托 CNCF 的中立地位和成熟的治理框架，Higress 可以吸引更多来自不同组织的开发者、用户和企业参与贡献，避免项目发展受单一厂商意志的影响。这种开放的社区模式将加速技术创新，使 Higress 能够更敏捷地响应全球用户不断演进的需求。
+ 最后，**加入 CNCF 有助于推动 AI 网关技术的标准化和普及。**随着 AI 应用的爆发，市场迫切需要专门针对 AI 场景优化的基础设施。Higress 凭借其在 AI 代理（Agent）、多模型统一管理等方面的领先实践，有望在 CNCF 的平台上推动 AI 网关相关标准的建立。



### 后续规划：长期兼容与生态共建
展望未来，项目将围绕两大核心方向持续演进：

+ **长期兼容 Ingress，支持完善的 Gateway API 及其 Inference Extension，同时提供完善的 Nginx Ingress 迁移方案：** 持续支持并兼容 Ingress 与 Nginx Ingress 注解，与 Gateway API 双栈共存；强化对 Gateway API 及 Inference Extension 核心版本与能力的适配与稳定供给，为云原生网络与 AI 应用提供可持续的开源基础设施选择；提供完善的 Ingress 迁移方案，无论用户选择迁移至 Gateway API 还是继续使用 Ingress，均能获得平滑、可落地的迁移路径。
+ **持续推进 AI 能力建设：** 深化对 Model Context Protocol（MCP）的支持，使 Higress 成为 AI Agent 与 LLM 流量的标准入口；引入「Higress Agent」实现自主流量治理；支持 AI 场景的实时通信需求；构建 Skill 渐进式披露与安全管理能力；持续完善基于 Token 的限流、多模型 Fallback、智能负载均衡等 AI 原生能力。



### Sandbox 只是起点
加入 CNCF Sandbox 是起点，而非终点。Higress 社区将持续投入治理、文档与社区建设。接下来我们将继续向 **CNCF Incubation（孵化）** 阶段迈进。感谢 CNCF 技术监督委员会、更广泛的云原生社区，以及所有支持 Higress 的贡献者与采用方。我们期待与 CNCF 生态携手，共建安全、可扩展、AI 友好的云原生基础设施。



预告：Higress 将参与 KubeCon EU 2026，分享 Higress 未来的详细规划，Gateway as a Service。



**了解更多:** [higress.ai](https://higress.ai) | [GitHub](https://github.com/higress-group/higress) 


