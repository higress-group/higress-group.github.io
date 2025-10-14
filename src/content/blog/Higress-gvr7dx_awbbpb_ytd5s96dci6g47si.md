---
title: "Higress AI 网关开发挑战赛参赛指引"
description: "Higress AI 网关开发挑战赛参赛指引"
date: "2025-10-14"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

## <font style="color:rgb(27, 28, 29);">大赛技术栈核心解读</font>
### <font style="color:rgb(27, 28, 29);">1.1. 扩展 Higress：Go 与 Wasm 插件入门</font>
<font style="color:rgb(27, 28, 29);">插件是向 Higress 数据平面注入智能的核心机制。本次大赛的所有赛题，基本都需要通过编写或使用插件来实现。</font>

#### <font style="color:rgb(27, 28, 29);">WebAssembly (Wasm)：安全、跨语言的沙箱技术</font>
<font style="color:rgb(27, 28, 29);">WebAssembly (Wasm) 是一种可移植的、运行在安全沙箱环境中的二进制指令格式。它允许使用 Go、Rust、C++ 等多种语言编写的代码，安全地运行在像 Envoy/Higress 这样的宿主应用中 </font><sup><font style="color:rgb(87, 91, 95);"></font></sup><font style="color:rgb(27, 28, 29);">。</font>

+ **<font style="color:rgb(27, 28, 29);">Proxy-Wasm 规范</font>**<font style="color:rgb(27, 28, 29);">：这是一个为代理环境制定的标准应用二进制接口（ABI），它定义了 Wasm 模块如何与代理的底层网络能力（如读写 Header、Body）进行交互 </font><sup><font style="color:rgb(87, 91, 95);"></font></sup><font style="color:rgb(27, 28, 29);">。</font>
+ **<font style="color:rgb(27, 28, 29);">语言 SDK</font>**<font style="color:rgb(27, 28, 29);">：为了简化开发，社区提供了特定语言的 SDK，例如 </font>`[https://github.com/higress-group/wasm-go](https://github.com/higress-group/wasm-go)`<font style="color:rgb(27, 28, 29);"> 。SDK 将底层的 ABI 细节进行了封装，让开发者可以用更符合语言习惯的方式编写插件逻辑 。这个 SDK 的使用可以参考这篇文档：</font>[https://higress.cn/docs/latest/user/wasm-go](https://higress.cn/docs/latest/user/wasm-go/?spm=36971b57.2ef5001f.0.0.2a932c1fUCsllX)

#### <font style="color:rgb(27, 28, 29);">原生 Go 插件：高性能与开发简洁性</font>
<font style="color:rgb(27, 28, 29);">除了 Wasm，Higress 也支持使用原生 Go 语言开发插件。相比 Wasm 提供的安全沙箱和多语言支持，原生 Go 插件在某些场景下可以提供更简洁的开发流程和对宿主能力的直接访问。特别是对于赛题三（智能路由），参赛者可以自由选择</font>**<font style="color:rgb(27, 28, 29);">任意一种插件扩展方式</font>**<font style="color:rgb(27, 28, 29);">，包括 Wasm 或原生 Go 插件，来实现其解决方案。</font>

### <font style="color:rgb(27, 28, 29);">1.2. Agent 的语言：MCP</font>
#### <font style="color:rgb(27, 28, 29);">超越传统 API</font>
<font style="color:rgb(27, 28, 29);">随着 AI Agent 的兴起，传统的 REST API 在处理其动态、有状态、工具驱动的交互模式时显得力不从心。MCP 协议（Model Context Protocol）应运而生，旨在解决这一挑战。</font>

#### <font style="color:rgb(27, 28, 29);">什么是 MCP？</font>
<font style="color:rgb(27, 28, 29);">MCP 是一个由 Anthropic 公司首创并已开源的开放标准，用于连接 AI 应用与外部的工具、数据源和工作流。MCP 可以被比作“AI 世界的 USB-C 接口”，它为不同系统间的互联互通提供了一个统一、标准的规范。</font>

#### <font style="color:rgb(27, 28, 29);">客户端-服务器架构</font>
<font style="color:rgb(27, 28, 29);">MCP 遵循客户端-服务器架构模式：</font>

+ **<font style="color:rgb(27, 28, 29);">MCP 服务器</font>**<font style="color:rgb(27, 28, 29);">：一个向 AI Agent 暴露一系列能力（工具）的程序。例如，一个 MCP 服务器可以提供查询数据库或发送邮件的工具。在赛题二中，参赛者将对一个已有的 RAG MCP 服务器进行功能增强。</font>
+ **<font style="color:rgb(27, 28, 29);">MCP 客户端</font>**<font style="color:rgb(27, 28, 29);">：通常内嵌于 AI 应用中，负责与服务器通信，以发现并调用其提供的工具。</font>
+ **<font style="color:rgb(27, 28, 29);">Higress 的角色</font>**<font style="color:rgb(27, 28, 29);">：Higress 可以通过其插件机制来托管 MCP 服务器。这带来了一个关键的架构优势：所有对 Agent 工具的调用都可以通过 Higress 这个统一的入口，从而享受到网关提供的认证、限流、可观测性等企业级治理能力。</font>

### <font style="color:rgb(27, 28, 29);">1.3. HiMarket AI 市场</font>
#### <font style="color:rgb(27, 28, 29);">从项目到产品</font>
<font style="color:rgb(27, 28, 29);">HiMarket 是一个“企业级的 AI 能力市场和开发者生态中心”。它的核心目标是将模型 API、MCP 服务器、Agent API 等 AI 核心资产，通过标准化的方式进行打包、发布、管理和运营，使其从一个内部项目转变为一个可被发现、可被订阅的“AI 产品”。</font>

<font style="color:rgb(27, 28, 29);">HiMarket 的核心组件包括：</font>

+ **<font style="color:rgb(27, 28, 29);">AI 开放平台管理后台</font>**<font style="color:rgb(27, 28, 29);">：管理员和运营人员在这里将底层的 AI 能力打包成“AI 产品”。</font>
+ **<font style="color:rgb(27, 28, 29);">AI 开放平台门户</font>**<font style="color:rgb(27, 28, 29);">：面向开发者的“店面”，开发者可在此发现、订阅和测试 AI 产品。</font>
+ **<font style="color:rgb(27, 28, 29);">AI 网关 (Higress)</font>**<font style="color:rgb(27, 28, 29);">：承载所有 AI 调用的底层引擎，负责执行安全、流控等策略。</font>

#### <font style="color:rgb(27, 28, 29);">发布工作流</font>
<font style="color:rgb(27, 28, 29);">对于选择赛题一的团队，将最终成果发布到 HiMarket 是一个关键步骤。流程举例如下：</font>

1. <font style="color:rgb(27, 28, 29);">在管理后台创建一个“API Product”。</font>
2. <font style="color:rgb(27, 28, 29);">将该产品与在 Higress 中配置的 Agent 路由进行关联。</font>
3. <font style="color:rgb(27, 28, 29);">为产品添加完善的文档和使用指南。</font>
4. <font style="color:rgb(27, 28, 29);">将配置好的产品一键发布到门户网站。</font>
5. <font style="color:rgb(27, 28, 29);">此后，其他开发者便可以在门户注册、创建消费者（获取凭证），并订阅使用该 Agent API。</font>

## <font style="color:rgb(27, 28, 29);">赛题深入介绍与指南</font>
本次赛事共设三大赛题方向，参赛者可以任选一个方向参赛。下面是对每个赛题方向的参赛指南：

### <font style="color:rgb(27, 28, 29);">2.1. 赛题一：加速 AI Agent 构建</font>
#### <font style="color:rgb(27, 28, 29);">2.1.1. 愿景：赋能 Agent 开发过程</font>
<font style="color:rgb(27, 28, 29);">构建高质量的 AI Agent 是一项复杂的系统工程，它需要编排 LLM、通过 MCP 等协议管理外部工具，并处理复杂的业务逻辑。本赛题的终极目标是创造一个能够显著降低这一复杂性的工具，抽象并简化 Agent 的构建过程。如赛题指引中所强调的，开发的工具需要在“降低开发成本”和“提升 Agent 质量”方面扮演“关键性作用”，这是衡量作品价值的核心标准。</font>

#### <font style="color:rgb(27, 28, 29);">2.1.2. 任务：打造一个“生产力放大器”</font>
<font style="color:rgb(27, 28, 29);">本赛题要求交付一个命令行工具或一个带有图形化界面的 Web 工具。这个工具必须利用 Higress 插件、LLM 和 MCP 的能力，来赋能和简化 Agent 的创建流程。</font>

**<font style="color:rgb(27, 28, 29);">一些可供参考的创新思路：</font>**

+ **<font style="color:rgb(27, 28, 29);">MCP 自动化生成工具</font>**<font style="color:rgb(27, 28, 29);">： 例如用户提供一个 http 接口或这个接口实现对应的代码仓库，这个工具可以读取这些资料然后自动生成 Higress 上可以运行的 MCP Server 插件配置。Higress 社区已有的 </font>`openapi-to-mcpserver`<font style="color:rgb(27, 28, 29);"> 项目（</font>[https://github.com/higress-group/openapi-to-mcpserver](https://github.com/higress-group/openapi-to-mcpserver)<font style="color:rgb(27, 28, 29);">），就可以读取标准的 OpenAPI (Swagger) 规范文档并生成可在 Higress 中运行的 MCP Server 插件配置，可以作为一个工作基础。</font>
+ **<font style="color:rgb(27, 28, 29);">面向 Agent 的 MCP 智能组装</font>**<font style="color:rgb(27, 28, 29);">：扩展 Higress 的 MCP Server 插件能力，让 Higress 作为一个 MCP Hub，可以根据不同场景下的 Agent 需求，智能选取工具组装，使得 Agent 的工具调用准确率提升，成本下降。</font>
+ **<font style="color:rgb(27, 28, 29);">可视化 Agent 编排器</font>**<font style="color:rgb(27, 28, 29);">：创建一个 Web UI，允许开发者通过拖拽的方式，将不同的 MCP 工具和提示词链接成一个完整的工作流，然后自动生成 Agent 的核心逻辑代码并依托于 Higress 插件实现。</font>

#### <font style="color:rgb(27, 28, 29);">2.1.3. 关键点：发布到 HiMarket</font>
<font style="color:rgb(27, 28, 29);">将构建的 Agent API 发布到 HiMarket，是该赛题的关键环节。</font>

<font style="color:rgb(27, 28, 29);">具体发布流程如下：</font>

1. **<font style="color:rgb(27, 28, 29);">容器化 Agent 服务</font>**<font style="color:rgb(27, 28, 29);">：将 Agent 的核心逻辑及其 MCP 服务器打包成一个 Docker 镜像。</font>
2. **<font style="color:rgb(27, 28, 29);">配置 Higress</font>**<font style="color:rgb(27, 28, 29);">：在 Higress 中设置路由规则，将外部流量正确地转发到 Agent MCP 服务器。</font>
3. **<font style="color:rgb(27, 28, 29);">创建 HiMarket API 产品</font>**<font style="color:rgb(27, 28, 29);">：登录 HiMarket 管理后台，定义产品信息，将其与 Higress 路由关联，并可以设置不同的使用计划（如免费版、付费版）。</font>
4. **<font style="color:rgb(27, 28, 29);">编写使用指南</font>**<font style="color:rgb(27, 28, 29);">：在 HiMarket 中为 API 产品撰写一份清晰、详尽的使用文档。这是决定产品能否被其他开发者顺利使用的关键。</font>
5. **<font style="color:rgb(27, 28, 29);">发布与测试</font>**<font style="color:rgb(27, 28, 29);">：将产品发布到门户。然后，可以模拟最终用户，在开发者门户上完成注册、订阅，并对整个流程进行端到端测试。</font>

### <font style="color:rgb(27, 28, 29);">2.2. 赛题二: RAG 能力增强</font>
#### <font style="color:rgb(27, 28, 29);">2.2.1. 挑战：从“简单 RAG”到“高级 RAG”</font>
<font style="color:rgb(27, 28, 29);">基础的 RAG 系统存在明显瓶颈：它可能会检索到不相关或充满噪声的文档，这会直接导致 LLM 产生事实性错误或“幻觉”。本赛题的使命，正是通过实现一种或多种高级 RAG 技术，来显著提升 Higress 内置的 RAG MCP 服务器的性能和鲁棒性。</font>

#### <font style="color:rgb(27, 28, 29);">2.2.2. 起点：基线 RAG MCP 服务器</font>
+ **<font style="color:rgb(27, 28, 29);">代码库地址</font>**<font style="color:rgb(27, 28, 29);">：</font>`https://github.com/alibaba/higress/tree/main/plugins/golang-filter/mcp-server/servers/rag</font>`
+ **<font style="color:rgb(27, 28, 29);">操作指南</font>**<font style="color:rgb(27, 28, 29);">：首先 fork 该仓库，作为项目的起点。在开始编码前，建议先深入分析现有代码的结构，理解其数据处理流程，明确查询编码、检索、生成等关键环节，以便找到注入增强逻辑的最佳切入点。</font>

#### <font style="color:rgb(27, 28, 29);">2.2.3. 增强路径：高级 RAG 技术深度探索</font>
<font style="color:rgb(27, 28, 29);">工作将围绕 RAG 流程的各个阶段进行优化。以下是三个主要的技术方向，可选择一个或多个进行深入实现。</font>

##### <font style="color:rgb(27, 28, 29);">A. 检索前优化 (Pre-Retrieval)</font>
<font style="color:rgb(27, 28, 29);">该阶段的核心思想是在用户查询被送入向量数据库</font>**<font style="color:rgb(27, 28, 29);">之前</font>**<font style="color:rgb(27, 28, 29);">，对其进行优化，以提升检索的“命中率”。</font>

+ **<font style="color:rgb(27, 28, 29);">查询扩展 (Query Expansion)</font>**<font style="color:rgb(27, 28, 29);">：通过算法或 LLM，将原始查询扩展为包含同义词、近义词或相关术语的更丰富版本，从而扩大检索范围。</font>
+ **<font style="color:rgb(27, 28, 29);">查询转换 (Query Transformation)</font>**<font style="color:rgb(27, 28, 29);">：利用 LLM 的理解能力，将模糊的、口语化的用户提问，改写成更适合向量检索的、结构化的查询语句。对于复杂问题，还可以将其分解为多个更简单的子问题，分别进行检索后再汇总。</font>

##### <font style="color:rgb(27, 28, 29);">B. 检索后优化 (Post-Retrieval)</font>
<font style="color:rgb(27, 28, 29);">该阶段在从数据库检索到文档</font>**<font style="color:rgb(27, 28, 29);">之后</font>**<font style="color:rgb(27, 28, 29);">、将其送入 LLM </font>**<font style="color:rgb(27, 28, 29);">之前</font>**<font style="color:rgb(27, 28, 29);">，对检索结果进行“清洗”和“精炼”。</font>

+ **<font style="color:rgb(27, 28, 29);">重排序 (Reranking)</font>**<font style="color:rgb(27, 28, 29);">：初步检索（通常使用高效的向量相似度计算）旨在保证“召回率”，即尽可能多地找出相关文档。但这也可能引入噪声。重排序则使用一个更强大但计算成本更高的模型（如交叉编码器 Cross-Encoder），对初步检索出的文档列表进行二次排序，将最相关的文档精准地排在最前面。这一步至关重要，因为研究表明 LLM 对上下文中信息的位置非常敏感（即“迷失在中间”问题），将最关键的信息放在开头能显著提升生成质量。</font>
+ **<font style="color:rgb(27, 28, 29);">上下文压缩 (Context Compression)</font>**<font style="color:rgb(27, 28, 29);">：为了减少噪声、缩短输入给 LLM 的上下文长度（从而降低 API 成本和延迟），可以对检索到的文档进行压缩。这包括过滤掉不相关的句子，甚至丢弃整个不相关的文档。</font>

##### <font style="color:rgb(27, 28, 29);">C. 纠正性检索 (Corrective Retrieval)</font>
<font style="color:rgb(27, 28, 29);">这是一个更前沿的范式，它为 RAG 系统引入了主动的验证和自我纠正机制。</font>

+ **<font style="color:rgb(27, 28, 29);">CRAG 简介 (Corrective Retrieval Augmented Generation)</font>**<font style="color:rgb(27, 28, 29);">：CRAG 方法的核心是引入一个轻量级的“检索评估器”（retrieval evaluator），它负责为检索到的文档集与原始查询的相关性打分。</font>
+ <font style="color:rgb(27, 28, 29);">三种纠正行为：</font>
    - **<font style="color:rgb(27, 28, 29);">Correct</font>**<font style="color:rgb(27, 28, 29);">：如果评估器给出的置信度很高，系统将对检索到的文档进行精炼（例如，分解并过滤掉无关部分），然后用于生成。</font>
    - **<font style="color:rgb(27, 28, 29);">Incorrect</font>**<font style="color:rgb(27, 28, 29);">：如果置信度很低，系统会果断抛弃这些内部检索结果，并主动触发</font>**<font style="color:rgb(27, 28, 29);">网页搜索</font>**<font style="color:rgb(27, 28, 29);">，从更广阔的外部信源中寻找更准确的信息。</font>
    - **<font style="color:rgb(27, 28, 29);">Ambiguous</font>**<font style="color:rgb(27, 28, 29);">：如果置信度介于中间，系统将采取一种混合策略，结合内部文档精炼和外部网页搜索的结果。</font>

<font style="color:rgb(27, 28, 29);">实现 CRAG 将是本项目的一大亮点，它不仅是简单的优化，而是构建了一个更智能、更鲁棒的 RAG 架构，体现了对 RAG 系统失效模式的深刻理解。</font>

#### <font style="color:rgb(27, 28, 29);">2.2.4. 证明改进：严谨的量化评估指南</font>
<font style="color:rgb(27, 28, 29);">本赛题要求提供量化的评估结果。选手需要自行选择公开数据集（如HotpotQA, Natural Questions等，并提供量化指标（如检索的 Precision/Recall、生成的 Factuality Score等），证明方案相比现有代码的 RAG 能力有显著提升。</font>

##### <font style="color:rgb(27, 28, 29);">选择数据集</font>
<font style="color:rgb(27, 28, 29);">建议使用公开的、标准化的问答数据集进行评测。</font>

+ **<font style="color:rgb(27, 28, 29);">HotpotQA</font>**<font style="color:rgb(27, 28, 29);">：该数据集包含约 11.3 万个基于维基百科的问答对，其特点是问题需要进行“多跳推理”，即必须结合多个文档中的信息才能回答。它非常适合用于评估那些需要整合、推理多个信息源的 RAG 增强策略。</font>
+ **<font style="color:rgb(27, 28, 29);">Natural Questions (NQ)</font>**<font style="color:rgb(27, 28, 29);">：该数据集包含超过 30 万个真实的谷歌搜索查询，答案由人工从维基百科页面中标注。它提供了一个更贴近真实世界应用场景的、多样化的问题分布。</font>

##### <font style="color:rgb(27, 28, 29);">定义评估指标</font>
<font style="color:rgb(27, 28, 29);">建议从“检索”和“生成”两个维度来衡量系统的性能。</font>

+ **<font style="color:rgb(27, 28, 29);">检索质量指标</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - **<font style="color:rgb(27, 28, 29);">准确率 (Precision)</font>**<font style="color:rgb(27, 28, 29);">：在所有被检索出的文档中，真正相关的文档所占的比例。</font>
    - **<font style="color:rgb(27, 28, 29);">召回率 (Recall)</font>**<font style="color:rgb(27, 28, 29);">：在所有应该被检索出的相关文档中，被系统成功检索出的比例。</font>
+ **<font style="color:rgb(27, 28, 29);">生成质量指标</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - **<font style="color:rgb(27, 28, 29);">事实性得分 (Factuality Score)</font>**<font style="color:rgb(27, 28, 29);">：这是衡量 RAG 系统端到端质量的最终标准。它评估 LLM 生成的最终答案与“标准答案”（ground-truth）在事实上的一致性 。可以参考业界常用的评估框架（如 promptfoo）中的分类体系，将答案一致性分为 A（子集且一致）、B（超集且一致）、C（完全一致）、D（矛盾）、E（表述不同但事实一致）等类别，并基于此计算得分。</font>

### <font style="color:rgb(27, 28, 29);">2.3. 赛题三: 智能路由</font>
#### <font style="color:rgb(27, 28, 29);">2.3.1. 目标：智能、高效、数据驱动的 LLM 路由</font>
<font style="color:rgb(27, 28, 29);">在现实世界的 LLM 应用中，并非所有请求都具有同等的复杂性。用一个庞大、昂贵的模型来回答简单问题是资源的浪费；而用一个小模型处理复杂任务则无法保证效果。本赛题的使命是构建一个智能路由系统，它能够根据请求内容的语义，将其精准地分发给最合适的模型，从而在成本、延迟和准确性之间找到最佳平衡。</font>

#### <font style="color:rgb(27, 28, 29);">2.3.2. 架构灵感：vLLM Semantic Router</font>
<font style="color:rgb(27, 28, 29);">本赛题的概念模型源自社区的优秀开源项目 </font>`vllm-project/semantic-router`<sup><font style="color:rgb(87, 91, 95);"></font></sup><font style="color:rgb(27, 28, 29);">。其核心工作机制是：</font>

+ **<font style="color:rgb(27, 28, 29);">语义分类</font>**<font style="color:rgb(27, 28, 29);">：使用一个轻量级的分类模型（例如 BERT），对传入请求的</font>**<font style="color:rgb(27, 28, 29);">语义</font>**<font style="color:rgb(27, 28, 29);">进行分析，并将其意图分类（例如，“这是一个编码问题”、“这是一个数学问题”等）</font><sup><font style="color:rgb(87, 91, 95);"></font></sup><font style="color:rgb(27, 28, 29);">。</font>
+ **<font style="color:rgb(27, 28, 29);">Envoy 集成</font>**<font style="color:rgb(27, 28, 29);">：该项目通过 Envoy 的 </font>`ext_proc`<font style="color:rgb(27, 28, 29);"> 扩展机制实现，这与为 Higress（同样基于 Envoy）构建插件的思路形成了直接的平行参考。</font>

#### <font style="color:rgb(27, 28, 29);">2.3.3. 核心创新：自优化的数据流水线</font>
<font style="color:rgb(27, 28, 29);">这是本赛题最关键、最具创新性的要求。需要实现的不仅仅是一个静态的路由器，而是一个能够持续自我进化的系统。具体要求是：网关在处理请求时，除了将请求路由到</font>**<font style="color:rgb(27, 28, 29);">预测的最佳模型</font>**<font style="color:rgb(27, 28, 29);">（例如模型 A），还必须</font>**<font style="color:rgb(27, 28, 29);">同时</font>**<font style="color:rgb(27, 28, 29);">将该请求发送给一个</font>**<font style="color:rgb(27, 28, 29);">基线模型</font>**<font style="color:rgb(27, 28, 29);">（例如模型 B）。</font>

+ **<font style="color:rgb(27, 28, 29);">数据收集</font>**<font style="color:rgb(27, 28, 29);">：插件必须为每个请求捕获一条完整的、结构化的数据记录，格式为 </font>`{request, model_A_output, model_B_output, latency, cost}`<sup><font style="color:rgb(87, 91, 95);"></font></sup><font style="color:rgb(27, 28, 29);">。这些高质量的、带有并行结果的数据，将成为未来迭代训练的宝贵财富。</font>
+ **<font style="color:rgb(27, 28, 29);">飞轮效应</font>**<font style="color:rgb(27, 28, 29);">：这个设计创造了一个强大的“飞轮效应”。初始的路由模型进行预测；系统通过并行调用收集到更精准的训练数据；使用这些新数据可以训练出更好的路由模型；更优的模型做出更精准的预测，从而收集到质量更高的数据……如此循环，系统便进入了一个持续自我优化的正向循环。这体现了 MLOps 和系统设计的核心思想，是衡量方案先进性的关键。</font>

#### <font style="color:rgb(27, 28, 29);">2.3.4. 评估与测试：使用官方 Mock 服务</font>
<font style="color:rgb(27, 28, 29);">本赛题提供了一套完整的 Mock 服务和评估 API，所有开发和测试都必须基于此进行。需要严格遵循此处定义的规范：</font>[https://github.com/alibaba/higress/issues/2946](https://github.com/alibaba/higress/issues/2946)

**<font style="color:rgb(27, 28, 29);">开发与验证流程：</font>**

1. **<font style="color:rgb(27, 28, 29);">数据收集阶段</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - <font style="color:rgb(27, 28, 29);">使用训练数据集服务 </font>`http://sem-router-train.higress.io/questions`<font style="color:rgb(27, 28, 29);"> 获取问题列表。</font>
    - <font style="color:rgb(27, 28, 29);">对于每个问题，插件应将其</font>**<font style="color:rgb(27, 28, 29);">并行发送</font>**<font style="color:rgb(27, 28, 29);">给多个模型（例如，一个通用大模型和一个或多个领域专用小模型）。</font>
2. **<font style="color:rgb(27, 28, 29);">获取真值分数</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - <font style="color:rgb(27, 28, 29);">对于每个模型返回的答案，</font>**<font style="color:rgb(27, 28, 29);">必须</font>**<font style="color:rgb(27, 28, 29);">调用 </font>`/v1/evaluate`<font style="color:rgb(27, 28, 29);"> 接口来获取一个客观的正确性分数。这个分数将作为训练数据的标签（label）。</font>
3. **<font style="color:rgb(27, 28, 29);">训练分类器</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - <font style="color:rgb(27, 28, 29);">使用收集到的数据（包含问题文本、使用的模型、延迟、成本以及评估分数），训练一个分类模型。这个模型的任务是：输入一个问题，输出预测的最佳模型。</font>
4. **<font style="color:rgb(27, 28, 29);">部署与验证阶段</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - <font style="color:rgb(27, 28, 29);">使用验证数据集服务 </font>`http://sem-router-verify.higress.io/questions`<font style="color:rgb(27, 28, 29);"> 获取验证问题。</font>
    - <font style="color:rgb(27, 28, 29);">此时，插件应使用上一步训练好的分类器，为每个问题选择</font>**<font style="color:rgb(27, 28, 29);">唯一一个</font>**<font style="color:rgb(27, 28, 29);">模型进行调用。</font>
5. **<font style="color:rgb(27, 28, 29);">客观评估</font>**<font style="color:rgb(27, 28, 29);">：</font>
    - <font style="color:rgb(27, 28, 29);">作品的客观得分，将基于在</font>**<font style="color:rgb(27, 28, 29);">整个验证集</font>**<font style="color:rgb(27, 28, 29);">上的平均准确率（来自 </font>`/v1/evaluate`<font style="color:rgb(27, 28, 29);"> 接口）和平均响应延迟。</font>

## <font style="color:rgb(27, 28, 29);">大赛流程与参赛须知</font>
### <font style="color:rgb(27, 28, 29);">3.1. 关键里程碑与截止日期</font>
<font style="color:rgb(27, 28, 29);">务必牢记以下关键时间点，并合理规划项目进度。</font>

+ **<font style="color:rgb(27, 28, 29);">作品提交截止:</font>**<font style="color:rgb(27, 28, 29);"> 2025年12月10日</font>
+ **<font style="color:rgb(27, 28, 29);">决赛答辩时间:</font>**<font style="color:rgb(27, 28, 29);"> 2025年12月29日</font>

<font style="color:rgb(27, 28, 29);">比赛主要分为两个阶段：在提交截止日期前，需要专注于项目的开发、编码和文档撰写；提交作品后，入围决赛的团队需要准备演示文稿和现场 Demo，以迎接评委的提问和评审。</font>

### <font style="color:rgb(27, 28, 29);">3.2. 提交指南与最佳实践</font>
<font style="color:rgb(27, 28, 29);">需提交完整的作品方案介绍文档、项目源代码、 Demo 演示视频。作品提交地址：</font>

[https://survey.taobao.com/apps/zhiliao/6lgXsPIYX](https://survey.taobao.com/apps/zhiliao/6lgXsPIYX)

#### <font style="color:rgb(27, 28, 29);">代码提交</font>
+ **<font style="color:rgb(27, 28, 29);">代码工程文件</font>**<font style="color:rgb(27, 28, 29);">：确保所有代码都存放在一个组织良好的代码工程文件中， 并便于后续在 AtomGit 平台上开源。</font>
+ **<font style="color:rgb(27, 28, 29);">README 是项目的“门面”</font>**<font style="color:rgb(27, 28, 29);">：投入精力撰写一份高质量的 </font>`README.md`<font style="color:rgb(27, 28, 29);"> 文件。它应该清晰地阐述项目的核心思想、架构设计、创新点，并提供详尽的安装、配置和运行指南。</font>
+ **<font style="color:rgb(27, 28, 29);">代码质量</font>**<font style="color:rgb(27, 28, 29);">：整洁、规范、有良好注释的代码会给评委留下非常好的印象。</font>

#### <font style="color:rgb(27, 28, 29);">项目文档</font>
+ **<font style="color:rgb(27, 28, 29);">设计文档</font>**<font style="color:rgb(27, 28, 29);">：建议附上一份简明的设计文档，说明在技术选型、架构设计上所做的权衡与决策。</font>
+ **<font style="color:rgb(27, 28, 29);">结果与评估（尤其适用于赛题二和三）</font>**<font style="color:rgb(27, 28, 29);">：需要有一个专门的章节，详细描述评估方法、展示量化结果（使用表格和图表），并对结果进行深入分析和解读。</font>

#### <font style="color:rgb(27, 28, 29);">项目演示</font>
+ **<font style="color:rgb(27, 28, 29);">演示视频</font>**<font style="color:rgb(27, 28, 29);">：强烈建议录制一段 3-5 分钟的项目演示视频。视频是展示项目实际运行效果和用户体验最直观、最有效的方式。</font>

#### <font style="color:rgb(27, 28, 29);">决赛答辩准备</font>
+ <font style="color:rgb(27, 28, 29);">准备一份逻辑清晰、重点突出的演示文稿（PPT）。</font>
+ <font style="color:rgb(27, 28, 29);">确保项目可以进行流畅的现场演示。</font>
+ <font style="color:rgb(27, 28, 29);">准备好回答评委可能提出的深入技术问题，充分展现对项目和相关技术的深刻理解。</font>




