---
title: "使用 Nacos + HiMarket 构建MCP私有市场"
description: "使用 Nacos + HiMarket 构建MCP私有市场"
date: "2025-09-17"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：子葵

## MCP Registry 正式发布
最近，MCP 社区发布了 [MCP Registry（2025‑09‑08，预览版）](https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/)，为公开 MCP Server 提供“统一目录服务和开放 API”。

Nacos 已原生支持 MCP Registry API，可直接作为“MCP Registry”对外提供标准 REST/OpenAPI 服务端，天然融入企业现有注册中心与配置治理体系，并与 Higress/HiMarket 对接打通，让企业能够高效的构建自己的私有MCP 市场。

## 为什么需要 MCP Registry
从 LAMP/单体 → SOA/微服务 → 容器/K8s 的演进，带来了开发与运维效率的飞跃。随着 ChatGPT/DeepSeek 等模型与应用爆发，业务逻辑正加速“下沉到模型”，应用架构进入“AI 原生”阶段：

+ 模型驱动：核心业务规则更多由模型完成；
+ Agent 驱动：通过 Agent 强化可控性与多步骤任务编排；
+ 数据为中心：重视高质量私域数据的治理、评估与持续优化；
+ 工具链整合：模型需要标准化地调用外部工具/数据源。

MCP（Model Context Protocol）正是连接“云原生资产 → AI 原生能力”的桥梁：由 Anthropic 发起的开源协议，为 LLM/Agent 提供“统一的工具与数据接入接口”，像 AI 领域的“USB‑C”，用一致方式挂接文件、数据库、API 等异构资源，避免每种模型/系统都自定义适配。

MCP（Model Context Protocol）让“AI 客户端 ⇄ 工具/服务（MCP Server）”的连接更标准、更可组合。官方推出的 MCP Registry 的最终目标是：

+ 标准化 MCP Server 的分发与发现，降低接入成本。
+ 作为“单一事实来源”（Single Source of Truth），为各类“子 MCP Registry”提供上游数据。
+ 通过开放的 REST/OpenAPI 规范，便于客户端/市场接入与二次加工。
+ 社区共建与审议：提供合规与去劣的机制（可提 issue、denylist 等）。

在官方的博客中有两个关键概念：

+ 公开子 MCP Registry（Public Sub-Registry）：例如各家 AI 客户端的“工具市场”，在官方 MCP Registry 数据上再做“精选、打分、扩展”。
+ 私有 MCP Registry（Private Sub-Registry）：企业内网/合规环境，用同一套 API Schema 自建、共用 SDK/工具链，同时可叠加内部元数据与准入策略。

因此企业可以把“工具发现与治理”从“人肉收集”升级为“平台化接入 + 私有治理”，并与现有 API 网关/门户体系打通。

官方 MCP Registry 聚焦“公开 MCP Server”的自报与审核，通常包含名称、说明、维护方、源码地址、能力与工具、连接端点/认证方式、版本、标签、信誉/合规等元数据。企业私有 MCP Registry 可以复用同一套Schema，并平滑扩展“数据域、负责人、SLA、成本中心”等内部字段。

## 为什么 需要标准化的 MCP Registry API
+ 互操作与可移植：统一的 REST/OpenAPI 让客户端、市场、CI/CD、数据平台可以“即插即用”，避免专有接口割裂生态。
+ 自动化与工程化：支持“发现 → 审核 → 上架/下架 → 监控”的流水线化，简化大规模治理（含审批、denylist、版本策略）。
+ 治理与合规对齐：标准化 Schema 使可观测、审计、溯源、合规标签（数据域/PII/SLA 等）有共同语义，便于监管与审计对接。
+ 安全与分发控制：子 MCP Registry 可在同一 API 层叠加 RBAC、去标识化与镜像/缓存等策略，对外/对内分域分层分发。
+ 生态共建：统一 API 促进 SDK/工具/客户端共享，缩短从“能力产出”到“可被消费”的时间。

## MCP 核心架构
![](https://img.alicdn.com/imgextra/i2/O1CN01CfOOm625bfPIiQxuX_!!6000000007545-2-tps-964-806.png)

+ Marketplace：面向开发者/用户的“市场层”，提供检索、认证/授权、调用分析、上架管理、计量/结算、SDK/调试等。
+ MCP Registry：服务目录与元数据中心，支撑发现与配置；可构建“子 MCP Registry”以满足企业私域治理。
+ MCP Proxy/API 网关：统一入口，负责 REST↔MCP 转换、路由、限流/配额、安全与可观测性。
+ MCP Servers：承载具体工具/服务；常部署于 K8s/Istio 等云原生基础设施

Registry 解决“有什么、在哪里、怎么连”的问题，是供给侧的数据源；而市场（Marketplace）面向消费侧，解决“怎么找、如何评估、如何申请与调用、如何计量与结算”的问题。前者奠定标准与数据基座，后者把能力真正“变成商品”触达开发者与业务。因此，在明确了 Registry 的定位与 API 之后，下一步自然是讨论 MCP 市场如何承接这些数据并叠加运营与治理。

## 为什么企业需要自建 MCP 市场（Marketplace）
在 Registry 构建好数据基础之后，企业需要把能力推向消费侧，这正是自建 MCP 市场的意义：让能力被发现、被准入、被计量并被持续运营。

![](https://img.alicdn.com/imgextra/i4/O1CN01pwRTIa1Gi2VvEZ4yG_!!6000000000655-2-tps-2602-1210.png)

+ 管理视角：统一纳管与分级治理，动态上/下线，快速处置风险服务，控制成本与配额。
+ 运营视角：提升工具使用度与质量，沉淀文档与最佳实践，促进内部/外部创新与复用。

电商类比：

+ “商品管理”≈ MCP 上架管理（能力分类/说明/定价/示例）；
+ “订单管理”≈ 订阅与调用记录（谁在用/用多少/用得如何）；
+ “客户管理”≈ 开发者/消费者管理（账号、权限、额度）；
+ “支付/结算”≈ 计量/计费/分账；
+ “自助服务”≈ 文档/搜索/查询接口（商品详情、搜索、订单/支付/客户查询）。

## 如何构建一个私有MCP市场（Nacos + Higress + HiMarket）
+ Nacos MCP Registry：服务注册/配置中心，承载传统微服务与部分后端能力的注册治理。
+ Higress（AI 原生网关）：统一入口，对接 LLM 提供商、托管 MCP Server（含远程 MCP）、统一认证/限流/审计/可观测。
+ HiMarket（AI 开放平台）：把模型 API、MCP Server、Agent 等“能力”产品化，形成“门户/开发者/订阅/调用”闭环。

组合价值：

+ 用 Nacos 汇聚企业内部服务；Higress 从 Nacos/静态/远程等多源发现并托管成统一 API/MCP 能力；
+ 用 HiMarket 把这些能力“上架”为 AI 产品，开发者自助申请、查看文档、拿凭证、在线调试；

与 MCP Registry 的衔接：

+ 将官方 MCP Registry 作为可信来源，使用其 REST API 周期性拉取公开 MCP Server 清单（或按需筛选）。
+ 在企业内部构建“私有 MCP Registry”，对外部清单做合规/风险/可用性校验，并补充内部标签、域、负责人、SLA 等信息。
+ 将通过治理的条目映射到 Higress 与 HiMarket：
    - 在 Higress 中托管/连接对应 MCP Server，纳入统一的认证、限流、审计与可观测；
    - 在 HiMarket 生成 API Product 草案（包含用法指引模版与示例），进入运营审批，上架到企业门户。

![](https://img.alicdn.com/imgextra/i2/O1CN01EctsJQ1w78SklcGnY_!!6000000006260-2-tps-3106-1746.png)

## 总结
MCP Registry 以开放标准把“能力发现与治理”的底座统一起来，Nacos/Higress/HiMarket 则把企业既有服务与新生的 MCP 生态有机串联，形成“注册→托管→上架→消费→运营”的闭环。短期可优先完成：按统一 Schema 落地私有 MCP Registry、建立从官方 Registry 的拉取/审核流水线，在 Higress 托管核心能力并打通 HiMarket 上架与凭证发放；中长期围绕“数据与治理”持续演进，沉淀可信元数据与准入策略，完善计量/计费与可观测体系，使能力从产出到被消费的全链路更可控、可度量、可迭代，最终把 AI 原生能力转化为可持续运营的企业生产力。


