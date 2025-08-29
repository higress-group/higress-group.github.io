---
title: "释放 RAG 潜能，用 AI 网关帮助 Dify 应用“开外挂”"
description: "释放 RAG 潜能，用 AI 网关帮助 Dify 应用“开外挂”"
date: "2025-08-29"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：王灏廷、赵源筱

Dify 是一款开源的 AI 应用开发平台，旨在帮助开发者和非技术人员快速构建和运营基于生成式AI的应用。截至目前，Dify 开源 Star 数量已经突破 11 万，具有庞大的用户群体，<font style="color:rgb(13, 18, 57);">已成为构建生成式 AI 应用的热门选择之一。</font>

然而，随着 Dify 在实际生产实践中持续落地，根据云上客户以及社区反馈，其内置的 RAG 引擎逐渐暴露出复杂文本分块处理能力低、检索功能薄弱、配置不够简洁智能等问题，<font style="color:rgb(13, 18, 57);">这些问题直接导致 Dify 内置 RAG 的召回质量不理想，进而影响了大模型生成内容的准确性与可靠性，难以满足企业级生产环境对高精度知识检索的需求。</font>

<font style="color:rgb(13, 18, 57);">为解决上述云上客户以及社区用户反馈的问题，Higress AI 网关通过提供关键桥梁作用，支持 Dify 应用便捷对接业界成熟的 RAG 引擎。通过 AI 网关将 Dify 的高效编排能力与专业 RAG 引擎的检索效能结合，企业可在保留现有 Dify 应用资产的同时，有效规避其内置 RAG 的局限，显著提升知识驱动型 AI 应用的生产环境表现。</font>

## **Dify 内置 RAG 引擎的局限**
通过分析 Dify 开源社区近几个月的 Issue，同时结合云上客户以及内部的 Dify 生产实践，尽管目前 Dify 提供了开箱即用的内置 RAG 引擎，但在实际落地中，依然会遇到一些问题，其中被云上以及社区客户反馈比较多的问题包括：

+ <font style="color:rgb(13, 18, 57);">复杂文档处理能力不足：对含图片、图表、PDF 等非结构化文档的解析与分块能力较弱，信息提取精度有限。</font>
+ <font style="color:rgb(13, 18, 57);">检索功能薄弱：内置检索策略在复杂查询或大型知识库场景下，召回效果和相关性排序表现欠佳，导致关键信息遗漏或排序不当。</font>
+ <font style="color:rgb(13, 18, 57);">配置不够简洁智能：分块策略、参数调整等配置项繁多，缺乏自适应优化，用户需较高技术门槛才能调优，易用性不足。</font>

这些问题导致 Dify 内置 RAG 引擎和业界被广泛认可的高质量 RAG 引擎相比，仍存在一定的提升空间。从开源视角来看，Dify 内置 RAG 能力的提升，是一项需要持续迭代和优化的过程。

## **通过 AI 网关帮助 Dify 应用 “开挂”**
目前，市面上的 RAG 引擎层出不穷，但易用性和运行效果上也良莠不齐，想要构建一套优秀的 RAG 引擎，并不仅仅是向量化、向量存储与向量匹配那么简单，还需要优质的内容理解与处理算法以及检索优化策略，并且持续不断的调优。

好在市面上已经逐渐涌现了许多优秀的 RAG 引擎，逐渐得到越来越多的开发者认可。例如阿里云百炼知识库以其配置简洁、开箱即用的特性，加之以底层持续调优，其 RAG 效果也得到越来越多企业用户的认可；以深度文档理解能力著称的 RagFlow，作为一款开源的专业 RAG 引擎，得到许多对数据存储有安全和隐私性要求用户的青睐，目前能够通过阿里云 SAE 一键部署高可用的 RagFlow 实例，极大降低自部署和运维的成本。

**因此，快速打通更专业更优质的 RAG 引擎，现阶段也不失为一个更优解。**

为了突破Dify内置知识库的限制，Higress AI网关支持 Dify 应用快速对接外部优质 RAG 引擎，以更高质量的 RAG 能力替代其原生功能，从而实现让用户在使用 Dify 强大的Workflow、Agent 编排能力同时，获得更专业的文本处理与信息检索体验。

根据用户对检索结果处理方式的不同需求，Higress AI 网关提供了两种灵活的集成方案：

+ **方案一：RAG 检索代理。** Higress AI 网关仅做检索并返回给用户，由用户自主处理检索结果，并更新到Context中。适用于场景相对复杂，用户对信息整合有自定义诉求的场景。
+ **方案二：自动检索注入。** 在调用 LLM 的链路中，Higress AI 网关自动执行 RAG 检索结果并将接入注入到 Context 中。适用于场景相对简单，用户只关注LLM调用结果，无信息自主处理的场景。

### 方案一：**RAG 检索代理**
基于Dify外部知识库扩展功能，通过 Higress AI 网关代理，能够实现在 Dify 知识库中创建并连接 RagFlow 以及百炼知识库。对于 Workflow，可以使用知识检索节点选择对应外部知识库获取检索结果；对于 Agent，可以直接选择对应外部知识库实现检索。详细介绍请见[AI RAG 检索代理](https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/ai-retrieval-agent)。

![](https://framerusercontent.com/images/CEY3s1XZEn0XgettWx4rIWHRDTc.png?scale-down-to=2048&width=5283&height=1749)

这种方式专门针对 Dify 应用设计，更符合 Dify 的标准用法，通过 Dify 知识库扩展的能力实现了对外部知识库的访问，同时能够便捷的通过 Dify 内置的观测能力观察知识检索节点的输入输出信息。

![](https://framerusercontent.com/images/H6OkHHY0E2CG1qiN4ptcDrjhoQ.png?scale-down-to=2048&width=3816&height=866)

### 方案二：**自动检索注入**
Dify 应用访问 LLM 时，使用 Higress AI 网关的 Model API 代理，Higress AI 网关在发起LLM调用前，自动执行 RAG 检索并把结果写入到调用模型的 Context中。其中，Context 的写入方式包括：追加新的系统提示词；添加到用户指定的 Prompt 模版位置中。详细介绍请见[AI检索增强生成（加强版）](https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/ai-retrieval-enhanced-generation-enhanced-version)。

![](https://framerusercontent.com/images/UzvF2xxkg5C7Sh0t4DVgpFMLbk8.png?scale-down-to=2048&width=5283&height=1949)

这种方式能够实现对应用开发者透明，无需手动实现复杂的知识库检索步骤，只需直接调用模型即可自动获得开箱即用的 RAG 能力。此外，该方式同样适用于 Spring AI Alibaba、N8N 等不同平台或框架。

![](https://framerusercontent.com/images/sncKzohjwA3lxr2RPz310Y6o.png?width=1360&height=368)

## 实操指南与效果展示
接下来，本文将分别以使用 RAG 检索代理方案打通 Dify 与百炼知识库、使用自动检索注入方案打通 Dify 与 RagFlow 为例，详细介绍上述两种方案的操作方式，并展示实际效果。

### 实践案例一：Dify 知识检索节点访问百炼知识库
本节将以 Dify 应用打通已经存在的百炼知识库为例，介绍 RAG 检索代理方案的操作方式与实际效果。

1. AI网关创建百炼服务、自定义Agent API路由，作为 Dify 外部知识库 API。
    1. AI网关创建百炼检索服务。

![](https://framerusercontent.com/images/JpZaEHzRpjNbBvvEurRC6sQUSk.png?width=1734&height=1422)

   2. 创建自定义Agent API。点击Agent API-创建Agent API，域名和Base Path可按需自定义，协议选择自定义，如下图所示。

![](https://framerusercontent.com/images/5BzoW5CtnCYOMH07uB490s4n48s.png?width=1872&height=1064)

   3. 创建Agent API路由。进入已经创建的Agent API，点击创建路由，注意需要确保路径后缀为/retrieval，服务选择前述步骤创建的百炼服务。

![](https://framerusercontent.com/images/w95aade9314pFTLkj1j00DzqyHo.png?scale-down-to=2048&width=2120&height=1084)

2. AI 网关配置插件。
    1. 获取百炼 API KEY。登录阿里云百炼平台 [API Key](https://bailian.console.aliyun.com/?tab=model#/api-key) 并获取API Key。
    2. 配置插件。在网关实例控制台，点击插件-安装插件-AI，选择 **AI RAG 检索代理** 插件，点击安装并配置规则，设置启用并点击保存后，插件即可生效，如下图所示。

![](https://framerusercontent.com/images/LnWXZgGkYRovVjSjHCwngrwpoA.png?scale-down-to=2048&width=3010&height=992)

3. Dify 创建百炼知识库。
    1. Dify 知识库创建外部 API。在 Dify 控制台，点击知识库-外部知识库API-添加外部知识库 API，配置示例如下图所示。

![](https://framerusercontent.com/images/l1ZlJbiQEkm8fIc1200KAPZpno.webp?width=928&height=626)

   2. 获取知识库 ID。前往百炼知识库控制台，选择待检索的知识库并获取 ID，如下图所示。

![](https://framerusercontent.com/images/iOTaIB50DE9iuwhOvN3Vhi6QY.png?scale-down-to=2048&width=3394&height=322)

   3. 配置知识库信息。在 Dify 控制台，点击知识库-连接外部知识库，配置示例如下图所示。

![](https://framerusercontent.com/images/dAgQjMwm4SFIhhCWhsvcrDmcDGI.png?width=1460&height=1202)

4. 验证检索连通性。在Dify知识库页面点击上述步骤创建的知识库，在召回测试输入源文本进行验证，能够根据召回设置返回文本分块，即说明实现连通。接下来就可以在 Workflow 和 Agent 中通过访问已创建好的知识库进行百炼 RAG 检索。

![](https://framerusercontent.com/images/Wg3y7yOYhRnbwo7gMU91Kvl5rxw.png?scale-down-to=2048&width=3408&height=936)

![](https://framerusercontent.com/images/SW5EyIEcmtxmqzbUi9388lcAnw.png?width=1890&height=184)

### 实践案例二：模型调用前自动检索 RagFlow 
接下来，本节以 Dify 应用打通已经存在的 RagFlow 知识库为例，介绍自动检索注入方案的操作方式与实际效果。

1. 部署 RagFlow 、创建知识库并上传知识。对于企业级场景，推荐使用阿里云 SAE 一键部署高可用版本 RagFlow 服务，降低部署和运维成本，详情请见[RAGFlow社区版-Serverless部署](https://saenext.console.aliyun.com/cn-hangzhou/scene-market/market/detail/service-611f1d5343924329a69e?tab=document&name=RAGFlow%E7%A4%BE%E5%8C%BA%E7%89%88-Serverless%E9%83%A8%E7%BD%B2&dataSource=computeNest)。
2. 在AI网关创建AI服务和文本生成场景Model API，让 Dify 应用通过调用该 API 访问模型。使用 AI 网关代理 Dify 模型流量操作方式可参考[Dify 性能瓶颈？Higress AI 网关为它注入「高可用之魂」！](https://mp.weixin.qq.com/s/gqwj5MindVZmmYM3nQZdCg)。
3. AI 网关插件配置。
    1. AI网关创建 RagFlow 服务，同时获取 RagFlow 服务的 FQDN 和 Port。

![](https://framerusercontent.com/images/hrddOdFnfIVDwoGNRDlyxLZ618.png?width=1708&height=992)

   2. 获取 RagFlow API Key。进入RAGFlow控制台，点击右上角用户头像 -> 左侧选择API -> API KEY，获取API Key。

![](https://framerusercontent.com/images/drBo65FhchHFxZSeK9V74q1NW0.png?scale-down-to=2048&width=3004&height=1558)

   3. 获取 RagFlow 知识库 ID。在 RAGFlow 知识库页面，点击对应知识库，网页url中的id即为知识库 ID。

![](https://framerusercontent.com/images/khFsbKNG0zOqpTR09qk4at51mSA.png?scale-down-to=2048&width=2388&height=938)

   4. 配置网关插件。在网关实例控制台，点击插件-安装插件-AI，选择 **<font style="color:rgb(51, 51, 51);">AI检索增强生成(加强版)</font>**插件，点击安装并配置规则，配置到对应的生效范围，将前述步骤获取的参数添入到指定参数位置，配置示意如下图所示。

![](https://framerusercontent.com/images/HNYCEli3loiFNd4yjqYymsvLR2A.png?scale-down-to=2048&width=2760&height=1208)

4. 调试并验证效果。在 AI 网关实例控制台，点击插件作用生效的 Model API 并调试，验证添加自动检索能力之后的模型返回结果。验证无误后，在 Dify 中通过访问该 API 进行模型访问，即可具备打通 RagFlow 知识库的 RAG 能力。

![](https://framerusercontent.com/images/ZtttIR0R4lCzl0J6SeaNvxjb5Ec.png?width=1548&height=586)

## 总结与展望
由于 Dify 内置 RAG 引擎在生产实践中的效果局限，许多 Dify 应用开发者期望能便捷的为 Dify 系统打通更多外部知识库，丰富 RAG 系统的选型。Higress AI 网关提供了快速打通外部 RAG 引擎的方案，<font style="color:rgb(13, 18, 57);">将 Dify 的高效编排能力与专业 RAG 引擎的检索效能结合。通过帮助 Dify 应用“开外挂”，主要带来以下增益：</font>

1. <font style="color:rgb(13, 18, 57);">效果跃升：通过集成 RAGFlow、百炼知识库 等专业引擎，显著提升知识分块质量与检索准确性。</font>
2. <font style="color:rgb(13, 18, 57);">无缝增强：配置化实现，无需改造 Dify 应用代码即可获得高阶 RAG 能力，0 开发成本。</font>
3. <font style="color:rgb(13, 18, 57);">灵活适配：支持开源引擎私有化部署或 SaaS 化服务的 RAG 引擎选型，满足多样化场景需求。</font>

目前，该能力已经上线至[阿里云云原生AI网关](https://www.aliyun.com/product/apigateway)中，除此以外，Higress AI 网关还提供了安全、高可用治理等其他丰富能力，提升 Dify 应用安全性和可用性。在 RAG 方面， Higress AI 网关将持续深化 RAG 能力，在多模态、生态扩展、场景扩展等方面持续探索，帮助 Dify 等 AI 应用从<font style="color:rgb(13, 18, 57);">“可用”走向“高精度、高可靠”的企业级知识中枢。</font>


