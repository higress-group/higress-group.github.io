---
title: "Dify 官方上架 Higress 插件，轻松接入 AI 网关访问模型服务"
description: "Dify 官方上架 Higress 插件，轻松接入 AI 网关访问模型服务"
date: "2026-02-10"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：如漫

# Dify 应用构建中的模型接入问题
随着 AI 应用的快速发展，越来越多的开发者选择 Dify 作为 AI 应用构建平台。在实际落地过程中，访问模型往往不只是「调一个 API」这么简单——开发者通常需要对接多个模型供应商，并且在生产环境中面临一系列工程化挑战：

+ **多模型管理复杂**：即使同一应用、同一场景，为保证效果和可用性，也经常需要对接多家模型。但现有模型插件多为单一供应商，多供应商的接入与切换需用户自行实现。
+ **缺乏统一治理**：模型调用的流量保护、限流熔断、智能路由、上下文压缩等治理能力，目前暂时没有开箱即用的实现，需要额外的基础设施支撑。
+ **细粒度鉴权需求：** API Key 在一定程度上保证了访问模型服务的整体安全性，但生产环境中往往还需要更细粒度的访问控制，例如按应用、按调用方区分权限与配额，对不同消费者实施差异化的限流和审计策略。

针对上述问题，Higress AI 网关支持通过统一的 Model API 代理各类模型供应商和自建推理服务，同时提供高可用治理、安全鉴权、可观测性等生产级能力。

此前，我们提供了通过 Dify 的 Open-AI-Compatible 插件对接 Higress AI 网关的方案，但在用户实际使用中，发现依然存在一定局限，包括：仅支持 OpenAI 兼容协议的部分场景，无法覆盖多模态、图片生成等场景，以及非 OpenAI 的其他原生协议；部分模型通过 Higress AI 网关访问存在兼容性问题；消费者鉴权方式单一等等。上述方案在易用性与兼容性上均有一定不足，因此需要面向 Higress 网关的专用模型插件。

# Higress 插件上架 Dify 插件市场
为了提高 Dify 用户接入和使用 Higress AI 网关的便捷性，Higress 官方推出了 Dify 模型代理插件，目前已正式上架 Dify 插件市场。

**开发者在 Dify 插件市场搜索 higress 即可获取对应插件并安装。**

该插件的核心价值在于：让 Dify 与 Higress AI 网关简易联动，用户在 Dify 中只需配置网关路由、协议和鉴权方式等，即可便捷通过 Higress AI 网关访问模型服务，同时配置并使用网关所提供的丰富能力。

通过这种方式，Dify 负责 AI 应用的编排与构建，Higress 负责模型流量的代理与管理，各司其职。

该插件同时适用于开源自建 Higress 和阿里云云原生 AI 网关（商业版）。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770367855759-0d979d88-0c9f-4d5f-a6dd-d2b594d33241.png)

# Higress 插件功能说明
目前，Higress 模型插件支持访问以下场景和协议的 Higress Model API，并且均支持开启 API Key 和 HMAC (AK/SK) 的鉴权方式。

| 支持场景 | 支持协议 | 支持鉴权方式 |
| --- | --- | --- |
| 文本生成 | OpenAI 兼容 | API Key 、HMAC |
| 图片生成 | 阿里云百炼图片生成 | API Key 、HMAC |
| 向量嵌入 | OpenAI 兼容 | API Key 、HMAC |
| 文本排序 | 阿里云百炼文本排序 | API Key 、HMAC |


针对文本生成场景，插件支持思考模式、工具调用、流式调用、结构化输出等能力配置；同时支持温度、Top P 等多项采样与生成参数的可配置，满足用户对模型调用的丰富自定义需求。

此外，Higress 插件正在持续建设和迭代中，如果您有任何兴趣和需求，可以访问[https://github.com/higress-group/higress-dify-plugin](https://github.com/higress-group/higress-dify-plugin) 提交 Issue 或直接参与贡献。

完成插件安装后，Dify 应用通过 Higress 网关访问模型，自然继承网关侧已配置的各项治理能力：

+ **流量保护**：Token 限流、模型 Fallback、熔断、超时等策略，保障模型调用的稳定性
+ **负载均衡**：多后端模型与实例的智能流量分配
+ **可观测性**：统一的调用日志、指标监控、链路追踪
+ **安全防护**：消费者鉴权、IP 黑白名单等访问控制
+ **插件扩展**：Higress 丰富的插件生态，可按需叠加更多 AI 能力

这些能力无需在 Dify 侧额外开发，只需在 Higress 网关控制台配置即可生效。

# 实践指南
接下来我们通过构建两个经典 Demo 场景，演示如何在 Dify 中通过 Higress 插件经 AI 网关访问模型服务。

## Demo 1：Agent 智能助手
在 Dify 中构建一个企业智能客服 Agent 应用。用户提问后，Agent 检索知识库相关文档，结合检索结果生成回答，并在必要时调用工具完成操作。

在这个过程中，Dify 应用访问 LLM、Embedding 和 Rerank 模型均通过 Higress 插件 +  Higress AI 网关代理访问实现。具体构建与操作步骤如下所示。

1. 在 Higress 网关创建 Model API 路由。

以 Higress 商业版阿里云云原生 AI 网关为例，分别创建三条路由，分别用于访问 LLM、Embedding 和 Rerank 模型，实际使用的协议和模型以及路由策略可以按需配置。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770602463698-c82103b8-4dae-4052-a980-cbe5740fbec6.png)

2. 在 Dify 中安装 higress 模型插件并创建模型。

在插件市场中搜索 higress 模型插件并安装，安装完成后，前往模型供应商处分别创建 LLM、Embedding 和 Rerank 模型，分别用于访问上述 Higress AI 网关创建的三条 Model API。下图所示为创建 LLM 模型时的配置示例。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770605831790-5a7ccbb7-c372-46c6-886b-2b100103c402.png)

3. 创建知识库，使用 Higress AI 网关作为 Embedding 和 Rerank 模型 Provider。

我们为本 Demo 模拟构建一个年货节主推产品知识库，知识库中维护当天每两个小时更新的一款主推产品，以及对应的产品介绍。

在创建知识库时，Embedding 和 Rerank 模型选择上述步骤中通过 higress 插件创建的模型即可。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770606750142-4e569ba3-8866-4116-9f5a-d3a4faaaaf1f.png)

4. 创建 Agent 应用并调试，使用 Higress AI 网关作为 LLM 模型 Provider。

创建 Agent 时，Agent 使用的模型选择上述步骤中通过 higress 插件创建的 LLM 模型，同时，为 Agent 配置提示词、上述步骤创建的知识库以及必要工具。

在调试窗口与 Agent 对话，让 Agent 推荐当前主推的年货信息，Agent 能够借助已有工具判断当前时间，并且从知识库中检索到该时间段内主推的年货产品并给出详细介绍。

在这个过程中，Agent 访问 LLM 模型 、以及采用 Agentic 方式检索知识库时访问的 Embedding 和 Rerank 模型，均为通过 higress 插件访问 Higress AI 网关实现。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770608181608-0b0d6af5-4c2f-4a54-9357-94cc76feb392.png)

## Demo 2：Workflow 图片生成
在 Dify 中构建一个简易的图片生成 Workflow。应用根据用户的输入描述，生成并返回符合相应描述的图片。

在这个过程中，Dify 应用访问文生图模型均通过 Higress 插件 +  Higress AI 网关代理访问实现。具体构建与操作步骤如下所示。

1. 在 Higress 网关创建 Model API 路由。

以 Higress 商业版阿里云云原生 AI 网关为例，创建一条图片生成路由，用于访问图片生成模型，实际使用的协议和模型以及路由策略可以按需配置。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770624137249-fc0919f2-f52f-4ec9-9b81-73a98b0da04c.png)

2. 在 Dify 中安装 higress 模型插件并创建模型。配置示例如下图所示。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770624424436-e955ae58-4a6d-4621-8149-ec8686b56a3d.png)

3. 创建 Workflow 并调试，在模型节点中使用 Higress AI 网关作为图片生成模型 Provider。

本 Demo 的流程如下图所示，模型节点中的模型使用上述步骤创建的模型，用户输入的图片描述作为模型节点的 user prompt，生成图片的 url 在模型节点的 text 信息中返回，使用模版转换节点将返回结果转换为 markdown 格式，方便在输出节点中直接展示图片结果。

测试运行上述 Workflow 的输入和结果如下图所示。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770625394077-751033ad-8036-439d-bee0-181d06ad5c66.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/124356404/1770625481859-864f6112-82fc-4dc2-bf70-b9343c88d3cb.png)

# 总结与展望
Higress 插件提高了 Dify 与 Higress AI 网关的对接易用性，便于二者便捷打通：用户在 Dify 中配置网关路由与鉴权后，即可经网关访问文本生成、图片生成、向量嵌入、文本排序等模型服务，并复用网关侧的流量治理、安全鉴权、可观测性等能力。插件同时支持开源 Higress 与阿里云云原生 API 网关。

目前，Higress 插件初步覆盖了相对主流的使用场景和模型协议，欢迎开发者在 Dify 插件市场搜索 higress 安装并使用**。**后续我们计划在以下方向持续迭代：

+ 补充更多场景与协议支持：支持并适配更多主流场景及对应场景下的主流协议，与 Higress Model API 支持的场景与协议对齐，满足用户多样化的使用诉求
+ 增强与 Higress 功能的联动：在插件侧提供更多与 Higress 网关能力配合的功能，例如细粒度的流量策略配置等

插件代码已完全开源，仓库地址：[https://github.com/higress-group/higress-dify-plugin](https://github.com/higress-group/higress-dify-plugin)。欢迎开发者通过 Issue 反馈需求或问题，也欢迎直接参与插件的开发贡献。


