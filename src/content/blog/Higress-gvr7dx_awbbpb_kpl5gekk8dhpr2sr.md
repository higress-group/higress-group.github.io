---
title: "一等奖6万，Higress AI 网关开发挑战赛正式上线"
description: "一等奖6万，Higress AI 网关开发挑战赛正式上线"
date: "2025-10-10"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

> **<font style="color:#000000;">报名地址：https://competition.atomgit.com/competitionInfo?id=c16f796963021f21711ad25819c664b4#heading-0-0</font>**
>

## <font style="color:rgb(27, 28, 29);">一、赛项简介</font>
### <font style="color:rgb(27, 28, 29);">(一) 赛项背景</font>
<font style="color:rgb(27, 28, 29);">随着生成式人工智能（Generative AI）技术的飞速发展，大型语言模型（LLM）正逐步成为现代软件架构的核心。这一变革对底层基础设施提出了全新的要求，特别是作为流量入口和策略执行核心的API网关。传统的API网关主要负责请求路由、认证鉴权和流量控制，但在AI时代，其角色必须演进为“AI网关”，以原生方式支持和加速AI应用。</font>

<font style="color:rgb(27, 28, 29);">Higress是一款基于Envoy和Istio构建的云原生API网关，诞生于阿里巴巴集团内部，经过了每秒数十万请求的大规模生产环境验证。它具备动态配置、毫秒级生效、无状态、支持多种插件扩展（Wasm）等核心优势，并为阿里巴巴的通义千问等核心AI业务提供了关键支撑。Higress致力于成为连接AI技术与现实世界服务的桥梁，通过提供AI代理、可观测性、安全防护和高级插件等能力，打造下一代AI原生网关。</font>

<font style="color:rgb(27, 28, 29);">目前，Higress社区已开源了一系列AI插件，为开发者提供了基础能力。然而，为了真正释放AI网关的潜力，我们需要解决AI领域最前沿、最具挑战性的技术难题。本次挑战赛正是基于这一目标，面向全球开发者征集解决方案，聚焦于三个核心方向：加速 AI Agent 构建、RAG（检索增强生成）增强以及智能路由。我们期望通过本次竞赛，将学术界的前沿理论与工业界的最佳实践相结合，共同丰富Higress的AI插件生态，推动AI基础设施的创新与演进。</font>

### <font style="color:rgb(27, 28, 29);">(二) 赛项信息</font>
+ **<font style="color:rgb(27, 28, 29);">赛项名称</font>**<font style="color:rgb(27, 28, 29);">：Higress AI网关开发挑战赛</font>
+ **<font style="color:rgb(27, 28, 29);">赛项主题</font>**<font style="color:rgb(27, 28, 29);">：构建下一代智能AI网关</font>
+ **<font style="color:rgb(27, 28, 29);">赛项目的</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - <font style="color:rgb(27, 28, 29);">通过引入具备前沿理论支撑和卓越工程效果的解决方案，极大丰富Higress AI插件生态系统。</font>
    - <font style="color:rgb(27, 28, 29);">探索并实践在网关层实现加速 AI Agent 构建、全链路优化RAG以及智能LLM模型路由的先进架构。</font>
    - <font style="color:rgb(27, 28, 29);">围绕Higress开源项目构建一个充满活力的全球开发者社区，吸引顶尖人才共同打造AI时代的关键基础设施。</font>
    - <font style="color:rgb(27, 28, 29);">加速将人工智能系统领域的最新学术研究成果转化为可落地、可验证的工业级应用。</font>
+ **<font style="color:rgb(27, 28, 29);">赛项时间</font>**<font style="color:rgb(27, 28, 29);">：2025年9月 – 2025年12月</font>

### <font style="color:rgb(27, 28, 29);">(三) 组织单位</font>
+ **<font style="color:rgb(27, 28, 29);">主办单位</font>**<font style="color:rgb(27, 28, 29);">：开放原子开源基金会</font>
+ **<font style="color:rgb(27, 28, 29);">承办单位</font>**<font style="color:rgb(27, 28, 29);">：阿里云 | Higress 社区</font>

## <font style="color:rgb(27, 28, 29);">二、竞赛内容</font>
<font style="color:rgb(27, 28, 29);">本次竞赛设置三个独立的子方向，参赛者可任选其一。每个方向都旨在解决当前AI网关领域的关键技术瓶颈，要求参赛作品不仅在功能上完整，更要在技术深度、理论依据和工程效果上达到业界领先水平。</font>

### <font style="color:rgb(27, 28, 29);">(一) 方向一: 加速 </font><font style="color:rgb(27, 28, 29);">AI Agent 构建</font>
#### 1**. 赛题基本描述**
**当前现状与挑战**：AI Agent 的构建正从学术探索走向产业落地，但开发者普遍面临“从想法到生产”的巨大鸿沟。当前 Agent 的研发过程高度复杂，存在诸多挑战：首先是**集成地狱**，将 Agent 与企业内部繁杂的存量 API 和数据源（即“工具”）进行安全、可靠的连接，需要耗费大量定制开发工作；其次是**开发体验割裂**，Agent 的逻辑编排、工具开发与底层基础设施（如网关、服务网格）的管理相互脱节，减缓了迭代速度；最后，从原型到生产级的 Agent 对安全性、可观测性和治理能力提出了极高要求，而这恰恰是大多数 Agent 框架的短板。

**赛题目标**：本赛题旨在利用 Higress 作为 AI 原生网关的核心能力，赋能并**加速 AI Agent 的构建过程**。参赛者需要基于 Higress 的插件化架构、LLM API 接入以及 MCP（模型上下文协议）等能力，打造一个能够帮助开发者以**零代码或少代码**方式，快速构建、测试、部署和管理生产级 AI Agent 的解决方案。最终目标是实现从一个想法到强大功能 Agent 的极速落地。

**技术要求与架构参考：**

参赛作品形式较为发散，可以是创新的 AI Agent 插件，也可以是结合 Higress 多种能力的综合性解决方案。方案设计可以参考以下内容（不限于）：

+ **核心框架**：方案必须**基于 Higress 的核心能力**。利用其 Wasm 插件机制作为 Agent “技能”或“工具”的载体，实现与 Agent 核心逻辑的解耦。Higress 网关层负责处理安全认证、流量治理、API 协议转换等基础设施任务。
+ **低代码/零代码 Agent 构建体验**：方案应提供覆盖 Agent 构建全流程的低代码/零代码体验，而不仅限于工具集成。这包括 Agent 逻辑的可视化编排、工作流定义、工具的快速接入与配置、以及一键式的部署与调试能力，让开发者能将精力聚焦于 Agent 的业务价值本身。
+ **Agent 能力开放与动态管理**：方案应与 Higress 现有的 AI 开放平台 **Himarket** 实现无缝集成。开发者不仅可以通过平台动态管理（如热插拔、版本控制、动态配置）Agent 的各项能力（技能），更关键的是，能将构建好的 Agent 整体能力封装成标准的 API 服务，通过 Himarket 对外开放，将 Agent 转变为可被其他应用轻松集成的可复用资产。
+ **生产级价值与演进**：方案必须证明其具备生产使用价值，而非一个仅用于快速原型验证（POC）的演示工具。评审将重点考量方案本身的健壮性、可观测性与可扩展性，确保基于该方案构建的 Agent 具备快速演进至生产环境、承载真实业务负载的潜力。

#### <font style="color:rgb(27, 28, 29);">2. 赛题评审标准</font>
本赛题的评审将重点考察方案在加速 Agent 构建方面的创新性、开发体验的流畅度、生成 Agent 的综合能力以及方案的生产可用性。

| <font style="color:rgb(27, 28, 29);">评分项</font> | <font style="color:rgb(27, 28, 29);">子评分项</font> | <font style="color:rgb(27, 28, 29);">评分标准</font> |
| --- | --- | --- |
| **<font style="color:rgb(27, 28, 29);">方案架构设计 (30分)</font>** | <font style="color:rgb(27, 28, 29);">开发体验 (15)</font> | **重点考察方案是否显著简化了 Agent 的构建全流程，是否真正实现了“零代码”或“少代码”的目标。用户界面、工具链或文档的易用性和流畅度是核心评估点。** |
| | <font style="color:rgb(27, 28, 29);">创新性与价值 (10)</font> | <font style="color:rgb(27, 28, 29);">方案是否针对当前 Agent 构建的痛点提出了新颖且有效的解决方案。方案在加速 Agent 从想法到落地的整个生命周期中所体现的价值有多大。</font> |
| | <font style="color:rgb(27, 28, 29);">技术架构合理性 (5)</font> | 方案是否充分、合理地利用了 Higress 插件、MCP、LLM API 等核心技术。架构设计是否清晰、模块化且具备良好的扩展性。 |
| **<font style="color:rgb(27, 28, 29);">方案代码实现 (50分)</font>** | **Himarket 集成与能力开放 (20)** | **重点考察方案与 Himarket 集成的紧密性和效果。是否成功将 Agent 能力封装为标准 API并通过 Himarket 平台进行服务化开放，评估其作为可复用资产的完整度和便捷性。** |
| | <font style="color:rgb(27, 28, 29);">Agent 综合能力 (GAIA 测试集) (15)</font> | <font style="color:rgb(27, 28, 29);">使用参赛者方案构建出的 Agent，在 GAIA 基准测试集上的表现如何。评审将关注 Agent 在需要复杂工具调用、网页浏览和推理的任务上的通过率和准确性。</font> |
| | <font style="color:rgb(27, 28, 29);">功能完整性 (15)</font> | <font style="color:rgb(27, 28, 29);">参赛作品是否完整实现了其设计方案中承诺的核心功能，例如 API 的一键转换、Agent 技能的动态管理、安全策略的有效执行等。</font> |
| **<font style="color:rgb(27, 28, 29);">非功能性指标 (20分)</font>** | **生产级价值 (10)** | **重点考察方案是否超越了原型（POC）阶段，具备生产可用性。评估维度包括方案的健壮性、可观测性、扩展性以及是否有清晰的路径演进到生产环境。** |
| | <font style="color:rgb(27, 28, 29);">性能与稳定性 (5)</font> | <font style="color:rgb(27, 28, 29);">方案的运行效率、资源消耗情况以及在连续运行和异常处理方面的稳定性。</font> |
| | <font style="color:rgb(27, 28, 29);">代码质量与文档 (5)</font> | <font style="color:rgb(27, 28, 29);">代码风格清晰、注释充分，提供详尽的设计文档、架构图和用户指南（README）。</font> |


### <font style="color:rgb(27, 28, 29);">(二) 方向二: RAG 增强</font>
#### <font style="color:rgb(27, 28, 29);">1. 赛题基本描述</font>
**<font style="color:rgb(27, 28, 29);">当前现状与挑战</font>**<font style="color:rgb(27, 28, 29);">：Higress已提供了 RAG MCP Server 能力（基于golang-filter插件实现），支持对接 Agent 实现简单的 RAG 检索召回能力。然而，业界领先的RAG系统早已超越了简单的“检索-生成”模式，演变为一个包含查询优化、多路召回、结果重排、内容压缩和自我修正等多个阶段的复杂管道。现有插件功能单一，缺乏对RAG流程的整体优化能力。</font>

**<font style="color:rgb(27, 28, 29);">赛题目标</font>**<font style="color:rgb(27, 28, 29);">：本赛题要求参赛者实现一个统一的、功能强大的</font>**<font style="color:rgb(27, 28, 29);">增强型RAG（Enhanced RAG）能力</font>**<font style="color:rgb(27, 28, 29);">。将业界最前沿的RAG优化技术整合到一个模块化、可配置的 Higress MCP Server 中，显著提升在复杂查询场景下生成内容的准确性、相关性和时效性。</font>

**技术要求与架构参考：**

插件的实现必须体现对RAG全链路优化的深刻理解，设计方案可以参考以下内容（不限于）：

+ **<font style="color:rgb(27, 28, 29);">检索前优化（Pre-Retrieval）</font>**<font style="color:rgb(27, 28, 29);">：在执行任何检索操作之前，必须对原始用户查询进行处理。参赛者需要实现相关技术，例如：</font>
    - **<font style="color:rgb(27, 28, 29);">查询重写与分解</font>**<font style="color:rgb(27, 28, 29);">：借鉴 `PreQRAG` 等研究成果，插件应能自动分析查询意图，对其进行重写以提高检索召回率，或将复杂问题分解为多个可以独立检索的子问题。</font>
    - **<font style="color:rgb(27, 28, 29);">多路混合检索（Multi-Path & Hybrid Retrieval）</font>**<font style="color:rgb(27, 28, 29);">：插件需要统一对多种数据源（如向量数据库、全文搜索引擎、结构化数据库等）的访问接口，并支持多路召回策略。特别是要实现</font>**<font style="color:rgb(27, 28, 29);">混合搜索（Hybrid Search）</font>**<font style="color:rgb(27, 28, 29);">，即结合稀疏检索（如BM25）和稠密检索（向量搜索）的优势，最大化召回相关文档。</font>
+ **<font style="color:rgb(27, 28, 29);">检索后处理（Post-Retrieval）</font>**<font style="color:rgb(27, 28, 29);">：在从数据源获取初步的文档列表后，必须进行精细化处理，包括：</font>
    - **<font style="color:rgb(27, 28, 29);">重排序（Re-ranking）</font>**<font style="color:rgb(27, 28, 29);">：使用更强大的模型（如Cross-Encoder）或算法对初步检索到的Top-K结果进行重新排序，以提升排序结果的精准度。</font>
    - **<font style="color:rgb(27, 28, 29);">上下文压缩（Compression）</font>**<font style="color:rgb(27, 28, 29);">：根据最新的文档压缩研究，对检索到的文档内容进行智能压缩或摘要，以便在有限的LLM上下文中注入更多、更关键的信息。</font>
+ **<font style="color:rgb(27, 28, 29);">纠正性检索（Corrective Retrieval）</font>**<font style="color:rgb(27, 28, 29);">：插件可以考虑实现一个纠正性检索增强生成（Corrective-Action RAG, CRAG）的闭环机制。该机制可能包括：</font>
    - <font style="color:rgb(27, 28, 29);">一个轻量级的</font>**<font style="color:rgb(27, 28, 29);">检索评估器（Retrieval Evaluator）</font>**<font style="color:rgb(27, 28, 29);">，用于评估已检索文档与查询的相关性。</font>
    - <font style="color:rgb(27, 28, 29);">根据评估器给出的置信度，触发不同行动：若为`Correct`（正确），则对文档进行精炼后使用；若为`Incorrect`（不正确），则丢弃文档并通过网页搜索（Web Search）获取新知识；若为`Ambiguous`（模糊），则结合精炼文档和网页搜索结果。</font>

#### <font style="color:rgb(27, 28, 29);">2. 赛题评审标准</font>
<font style="color:rgb(27, 28, 29);">本赛题的评审将聚焦于参赛者构建的RAG管道的完整性、各项优化技术的理论深度和最终可量化的效果提升。</font>

| <font style="color:rgb(27, 28, 29);">评分项</font> | <font style="color:rgb(27, 28, 29);">子评分项</font> | <font style="color:rgb(27, 28, 29);">评分标准</font> |
| --- | --- | --- |
| **<font style="color:rgb(27, 28, 29);">方案架构设计 (30分)</font>** | <font style="color:rgb(27, 28, 29);">完整性与理论支撑 (15)</font> | <font style="color:rgb(27, 28, 29);">方案设计是否完整覆盖了检索前、多路检索、检索后和纠正性检索等关键阶段。每个阶段的技术选型是否具备充分的理论依据（如引用CRAG、PreQRAG等相关论文）。</font> |
| | <font style="color:rgb(27, 28, 29);">模块化与统一性 (10)</font> | <font style="color:rgb(27, 28, 29);">架构是否清晰、模块化，便于独立开启/关闭或替换不同优化技术。是否成功实现了对多种后端数据源的统一抽象和访问。</font> |
| | <font style="color:rgb(27, 28, 29);">先进性与创新性 (5)</font> | <font style="color:rgb(27, 28, 29);">方案是否提出了新颖的RAG技术组合方式，或在某一环节（如检索评估器）的实现上具有独到之处。</font> |
| **<font style="color:rgb(27, 28, 29);">方案代码实现 (50分)</font>** | <font style="color:rgb(27, 28, 29);">Pre/Post-Retrieval实现 (15)</font> | <font style="color:rgb(27, 28, 29);">完整实现至少一种检索前优化技术（如查询重写）和一种检索后处理技术（如重排序）。</font> |
| | <font style="color:rgb(27, 28, 29);">RAG增强核心逻辑实现 (20)</font> | <font style="color:rgb(27, 28, 29);">例如可以实现CRAG的机制，需要具备功能完备的检索评估器及其关联的纠正行动。</font> |
| | <font style="color:rgb(27, 28, 29);">可复现的效果验证 (15)</font> | <font style="color:rgb(27, 28, 29);">提供一套完整且可复现的评测方案，在公开数据集（如HotpotQA, Natural Questions等）上进行测试，并提供量化指标（如检索的Precision/Recall、生成的Factuality Score等），证明方案相比基线RAG有显著提升。</font> |
| **<font style="color:rgb(27, 28, 29);">非功能性指标 (20分)</font>** | <font style="color:rgb(27, 28, 29);">代码质量与文档 (10)</font> | <font style="color:rgb(27, 28, 29);">代码质量高，文档清晰，并明确标注所参考的学术文献和技术资料。</font> |
| | <font style="color:rgb(27, 28, 29);">性能与效率 (10)</font> | <font style="color:rgb(27, 28, 29);">整个RAG管道的端到端处理延迟、资源消耗情况。</font> |


### <font style="color:rgb(27, 28, 29);">(三) 方向三: 智能路由</font>
#### <font style="color:rgb(27, 28, 29);">1. 赛题基本描述</font>
**<font style="color:rgb(27, 28, 29);">当前现状与挑战</font>**<font style="color:rgb(27, 28, 29);">：随着大模型应用的深入，企业和服务商通常会部署一个由多种模型组成的“模型矩阵”，而非依赖单一的通用大模型。这个矩阵可能包含一个或多个能力顶尖但成本高昂的旗舰模型（如qwen3-max），以及多个经过微调、在特定领域（如代码生成、财报分析）表现出色且成本效益更高的垂直小模型。然而，当前API网关大多采用简单的、与内容无关的路由策略（如基于URL路径），无法理解AI请求的内在语义。这种“语义盲”的路由方式导致所有请求，无论简单或复杂，都被发往同一个默认模型，造成了严重的资源错配：简单任务使用昂贵模型导致成本浪费，而复杂任务被发往能力不足的模型则导致效果不佳。</font>

**<font style="color:rgb(27, 28, 29);">赛题目标</font>**<font style="color:rgb(27, 28, 29);">：本赛题要求参赛者为Higress设计并实现一个具备</font>**<font style="color:rgb(27, 28, 29);">语义感知（Semantic-Aware）能力的智能路由插件</font>**<font style="color:rgb(27, 28, 29);">。该插件的核心目标是成为一个LLM流量的智能调度器，它能实时解析符合OpenAI协议的API请求，深刻理解其内在的任务意图、复杂度和所需工具，然后将请求动态、精准地转发至预定义模型池中最合适的模型。此外，插件需依托网关的流量拦截能力，实现一个“数据飞轮”机制：从真实的API交互中自动生成标注数据，用于持续迭代和优化路由模型本身。</font>

**技术要求与架构参考：**

参赛者需要设计并训练一个轻量级的“智能路由模型”，并将其集成到Higress插件中，设计方案可以参考以下内容（不限于）：

+ **路由模型核心**：插件的核心是一个能对输入请求进行快速分类或评估的预测模型。该模型接收用户Prompt作为输入，输出目标模型的标识符。参赛者可以探索多种实现路径：
    - **分类器方法**：训练一个高效的文本分类器（例如，基于DistilBERT或更轻量的模型），将不同的用户意图（如“闲聊”、“代码生成”、“摘要提取”）映射到不同的后端模型服务。
    - **语义匹配方法**：为每个后端模型定义一组“典型查询”的Embedding向量。插件在运行时计算新请求的Embedding，并通过向量相似度计算（如余弦相似度）来决定最佳路由目标。
+ **自优化数据流水线**：插件需要实现一个可配置的“数据生成模式”。在此模式下，插件可以将请求同时发往“路由模型选择的经济型模型”和一个“基准旗舰模型”，并将`{request, model_A_output, model_B_output, latency, cost}`等信息记录下来，形成高质量的训练/评估数据集，为路由模型的持续迭代提供数据基础。
+ **性能与可控性**：路由决策过程必须在毫秒级完成，以避免对端到端延迟产生显著影响。同时，整个系统必须提供清晰、易于操作的**权衡（Trade-off）机制**，允许运维人员通过简单配置（如调整一个置信度阈值）在“成本优先”和“质量优先”两种策略间灵活切换。

#### <font style="color:rgb(27, 28, 29);">2. 赛题评审标准</font>
本赛题的评审将综合评估路由策略的智能化程度、对系统性能（成本、延迟、准确率）的实际优化效果，以及整体架构的创新性和工程质量。

| <font style="color:rgb(27, 28, 29);">评分项</font> | <font style="color:rgb(27, 28, 29);">子评分项</font> | <font style="color:rgb(27, 28, 29);">评分标准</font> |
| --- | --- | --- |
| **<font style="color:rgb(27, 28, 29);">方案架构设计 (30分)</font>** | <font style="color:rgb(27, 28, 29);">路由策略与理论支撑 (15)</font> | <font style="color:rgb(27, 28, 29);">路由模型的设计是否合理、高效，并有清晰的理论依据。对路由策略（如分类、语义匹配等）的选择论证是否充分。数据飞轮和自优化机制的设计是否具备可行性和创新性。</font> |
| | <font style="color:rgb(27, 28, 29);">方案完整性 (10)</font> | <font style="color:rgb(27, 28, 29);">设计是否全面考虑了多模型管理、动态配置等实际问题。所提供的成本/质量权衡机制是否设计良好、易于操作。</font> |
| | <font style="color:rgb(27, 28, 29);">先进性与创新性 (5)</font> | <font style="color:rgb(27, 28, 29);">是否在语义路由、数据生成或模型迭代方面提出了新颖且有效的实现方法。</font> |
| **<font style="color:rgb(27, 28, 29);">方案代码实现 (50分)</font>** | <font style="color:rgb(27, 28, 29);">核心路由逻辑实现 (20)</font> | <font style="color:rgb(27, 28, 29);">完整、高效地实现语义感知的路由转发逻辑。插件能够正确解析请求并根据路由模型的决策结果将流量导向不同的后端LLM。</font> |
| | <font style="color:rgb(27, 28, 29);">可复现的效果验证 (15)</font> | 提供一套完整的基准测试方案和脚本。在给定的测试集上，量化评估插件在**答案准确率**、**访问延时**和**综合成本**三个维度上的表现，并证明其相比简单的轮询策略有显著的综合收益,<br/>**<font style="color:rgb(51, 51, 51);">测试集及验证集访问地址：</font>**[<font style="color:rgb(0, 123, 255) !important;">https://github.com/alibaba/higress/issues/2946</font>](https://github.com/alibaba/higress/issues/2946) |
| **<font style="color:rgb(27, 28, 29);">非功能性指标 (20分)</font>** | <font style="color:rgb(27, 28, 29);">代码质量与文档 (10)</font> | <font style="color:rgb(27, 28, 29);">代码风格清晰，注释充分，文档详尽，包含架构图、设计决策和用户指南。</font> |
| | <font style="color:rgb(27, 28, 29);">性能与稳定性 (10)</font> | <font style="color:rgb(27, 28, 29);">路由插件本身引入的延迟极低。在并发请求下，系统运行稳定，资源消耗合理。</font> |




## <font style="color:rgb(27, 28, 29);">三、竞赛机制</font>
### <font style="color:rgb(27, 28, 29);">(一) 竞赛形式</font>
<font style="color:rgb(27, 28, 29);">以个人或团队形式参赛，每支队伍成员不超过5人。</font>

### <font style="color:rgb(27, 28, 29);">(二) 参赛对象</font>
<font style="color:rgb(27, 28, 29);">面向全球范围内的企业开发者、在校师生、科研人员及个人开发者，不限国籍和年龄。</font>

### <font style="color:rgb(27, 28, 29);">(三) 报名</font>
<font style="color:rgb(27, 28, 29);">参赛队伍需通过第三届开放原子大赛官方网站进行统一报名，具体报名通道待后续公布。</font>

### <font style="color:rgb(27, 28, 29);">(四) 初赛作品提交</font>
+ **<font style="color:rgb(27, 28, 29);">提交内容</font>**<font style="color:rgb(27, 28, 29);">：需提交完整的作品方案设计和实现原理介绍文档、托管于AtomGit平台上的项目源代码、以及一段清晰演示作品核心功能和性能测试过程的视频。</font>
+ **<font style="color:rgb(27, 28, 29);">提交规范</font>**<font style="color:rgb(27, 28, 29);">：参赛作品必须为原创，不得侵犯任何第三方的知识产权。若使用开源代码，必须遵守其开源许可协议，并在文档中明确声明来源、协议和依赖关系。</font>

### <font style="color:rgb(27, 28, 29);">(五) 决赛作品提交</font>
<font style="color:rgb(27, 28, 29);">入围决赛的队伍需准备并提交最终版的答辩PPT、可完整复现运行的源代码。决赛将以线下路演形式进行，参赛队伍需现场运行代码并展示作品效果。</font>

## <font style="color:rgb(27, 28, 29);">四、评审机制和奖项设置</font>
### <font style="color:rgb(27, 28, 29);">(一) 评审规则</font>
<font style="color:rgb(27, 28, 29);">大赛将组建由阿里云技术专家、Higress社区核心贡献者以及学术界知名学者构成的专家评审委员会。初赛阶段采用线上材料评审，决赛阶段采用线下路演答辩的形式进行。</font>

### <font style="color:rgb(27, 28, 29);">(二) 奖项评审补充说明</font>
<font style="color:rgb(27, 28, 29);">为确保奖项的权威性和技术含量，各奖项的评定设有严格的基础要求：</font>

+ **<font style="color:rgb(27, 28, 29);">一等奖：得分需要在90分及以上</font>**
+ **<font style="color:rgb(27, 28, 29);">二等奖</font>**<font style="color:rgb(27, 28, 29);">：</font>**<font style="color:rgb(27, 28, 29);">得分需要在85分及以上</font>**
+ **<font style="color:rgb(27, 28, 29);">三等奖</font>**<font style="color:rgb(27, 28, 29);">：</font>**<font style="color:rgb(27, 28, 29);">得分需要在80分及以上</font>**
+ **<font style="color:rgb(27, 28, 29);">开源贡献奖</font>**<font style="color:rgb(27, 28, 29);">：</font>**<font style="color:rgb(27, 28, 29);">得分需要在60分及以上</font>**<font style="color:rgb(27, 28, 29);">。</font>

<font style="color:rgb(27, 28, 29);">注：1名一等奖和2名二等奖共3名获奖者，将从三个子方向各选1名优胜者，从中综合评选产生。</font>

### <font style="color:rgb(27, 28, 29);">(三) 奖项设置</font>
<font style="color:rgb(27, 28, 29);">本次竞赛总奖金池为20万元人民币，具体奖项设置如下：</font>

| <font style="color:rgb(27, 28, 29);">奖项</font> | <font style="color:rgb(27, 28, 29);">奖金（人民币）</font> | <font style="color:rgb(27, 28, 29);">数量（名）</font> |
| --- | --- | --- |
| <font style="color:rgb(27, 28, 29);">一等奖</font> | <font style="color:rgb(27, 28, 29);">60,000元</font> | <font style="color:rgb(27, 28, 29);">1</font> |
| <font style="color:rgb(27, 28, 29);">二等奖</font> | <font style="color:rgb(27, 28, 29);">50,000元</font> | <font style="color:rgb(27, 28, 29);">2</font> |
| <font style="color:rgb(27, 28, 29);">三等奖</font> | <font style="color:rgb(27, 28, 29);">10,000元</font> | <font style="color:rgb(27, 28, 29);">3</font> |
| <font style="color:rgb(27, 28, 29);">开源贡献奖</font> | <font style="color:rgb(27, 28, 29);">2,000元</font> | <font style="color:rgb(27, 28, 29);">5</font> |
| **<font style="color:rgb(27, 28, 29);">合计</font>** | **<font style="color:rgb(27, 28, 29);">200,000元</font>** | **<font style="color:rgb(27, 28, 29);">11</font>** |


## <font style="color:rgb(27, 28, 29);">五、竞赛支持</font>
### <font style="color:rgb(27, 28, 29);">(一) 官方资料</font>
+ <font style="color:rgb(27, 28, 29);">Higress 项目代码库：</font>[<font style="color:rgb(11, 87, 208);">https://github.com/alibaba/higress</font>](https://github.com/alibaba/higress)
+ <font style="color:rgb(27, 28, 29);">Higress AI网关官网：</font>[https://higress.ai/](https://higress.ai/)

### <font style="color:rgb(27, 28, 29);">(二) 联系我们</font>
<font style="color:rgb(27, 28, 29);">为帮助参赛者更好地理解赛题和选择方向，大赛组委会提供赛前咨询。对各方向报名情况或技术选型有疑问的，可邮件联系组委会：zty98751@alibaba-inc.com。</font>


