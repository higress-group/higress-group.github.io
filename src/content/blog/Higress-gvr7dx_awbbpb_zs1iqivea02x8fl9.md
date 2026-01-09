---
title: "Lobechat使用WolframAlpha MCP工具减少LLM幻觉"
description: "Lobechat使用WolframAlpha MCP工具减少LLM幻觉"
date: "2025-04-24"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

# 为什么需要WolframAlpha
随着人工智能技术的飞速发展，大型语言模型（LLM）如GPT-4在自然语言处理和生成方面取得了显著的成就。然而，这些模型在处理复杂的科学和数学问题时，常常出现所谓的“幻觉”现象，即生成错误或不合理的结果。这种现象不仅影响了模型的可靠性，也限制了其在教育、科研等领域的广泛应用。_[1]_

大语言模型在生成文本时，往往依赖于其训练数据中的模式和关联，而缺乏对现实世界的物理规律和逻辑规则的深入理解。这导致在处理科学和数学问题时，模型可能会生成看似合理但实际上错误的答案。例如，在解决物理问题时，模型可能会忽略单位转换、物理定律的应用，甚至在数学计算中出现低级错误。这种幻觉现象不仅影响了问题解决的正确性，也使得模型在面对复杂问题时显得力不从心。  
Wolfram Alpha是一个强大的计算知识引擎，能够处理各种科学、数学和技术问题。它基于广泛的数学和科学知识库，能够进行精确的计算、符号操作和公式推导。与大语言模型相比，Wolfram Alpha在处理复杂的数学公式、物理定律和科学概念时具有显著的优势。它能够准确地执行计算任务，避免因模型自身的局限性而导致的错误。_[2]_ 



Higress MCP 市场近期上线了WolframAlpha LLM API，可以通过Wolfram MCP形式调用，支持如Lobechat、Cline、Cherry Studio、DeepChat等多种调用形式。目前提供单用户10次/月的免费试用限额，欢迎大家试用！

# 配置流程
## 获取 WolframAlpha MCP 工具
进入 Higress MCP 市场主页：[https://mcp.higress.ai/](https://mcp.higress.ai/)，点击WolframAlpha

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745389150326-f067654b-05a2-4216-b157-2a10bc0425d8.png)



在WolframAlpha中，使用自定义或试用的API-KEY 来生成URL

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745389230524-0ec5885e-3e76-4131-93e2-3bac58b1d554.png)



选择保存好生成的Streamable HTTP URL，用于后续的配置。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745397199165-efd8dba0-ed2f-418a-b2ea-c9a369ea333e.png)

## 在 Lobechat 中配置 Higress MCP
### 安装Lobechat
Lobechat提供在线版本及开源版本，目前最新版均支持MCP工具的使用。在线版本可通过[https://lobechat.com/](https://lobechat.com/) 访问，Lobechat官方为每位新用户提供50,000的免费积分进行试用。在线付费版本支持文件&知识库、更多模型服务、云服务等增值服务。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745469955985-fafe19ae-2137-4c7d-97bd-21e809ae310b.png)



对于开源版本，需要用户在本地具有docker环境，执行以下命令，一键即可安装：

```json
docker run -d -p 3210:3210 \
       --name lobe-chat \
       lobehub/lobe-chat:1.82.4
```



在设置界面，可以配置不同模型供应商对应的API-KEY。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745473015733-39e39a08-c5c4-4b96-8175-ec699ee69a51.png)

### 配置Higress MCP
在lobechat的插件商店中，选择自定义插件：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745397064710-b751c46c-c538-404a-b20c-d7c0308bef0a.png)



选择MCP插件，并指定Streamable HTTP模式，填写上一步中获取的URL，然后安装插件。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745397090441-45ebb8c8-540f-4287-8d80-8d391df25aff.png)



在对话界面，启用wolframAlpha插件。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745397164143-1993be71-9173-4087-baeb-ae869940e7f3.png)

# 测试案例
对于一些基本的推理、常识性的知识，引入WolframAlpha能够很好解决推理过程中的幻觉问题。同时，对于计算、绘图等基本数学功能，WolframAlpha也能获得较好的表现。

## 数学推理
对于推理较难的非常识性数学知识，比如以下问题：

> 2^136279841-1是素数吗？
>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745465529357-e80ff5a3-ff6f-4641-b217-4a4afc437489.png)



当没有调用WolframAlpha工具时，由于问题较为复杂，基于模型推理过程无法给出准确答案。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745465631624-31a37753-ef00-410b-b448-3b1f0359cd47.png)

## 日常计算
对于一些日常数学问题，也可以借助WolframAlpha来进行计算：

> 假设当前有 10,000 元，未来 10 年 的通货膨胀率以 0.5% 的连续复利增长，那么这笔钱的未来购买力相当于今天的多少钱？
>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745465784553-ace84469-ab94-4907-ab19-dabcb723aff0.png)

## 图像绘制
除此之外，WolframAlpha还支持一些基本的图像绘制及生成的功能：

> 获取10000以内素数的分布，使用合适的绘图方式表示出每千位素数数量的变化
>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1745466007484-fd411038-8aa6-453a-bb0f-c9bcccbf36c8.png)

此外，WolframAlpha LLM API 在调用出错的情况下，会根据返回结果来提示更优的提问方式；Agent在接收到类似的指令返回后，也会优化提问方式再次调用工具，从而获取正确的结果。

# 展望
通过结合Wolfram Alpha工具，可以有效解决大语言模型在处理科学和数学问题时的幻觉现象。WolframAlpha的精确计算能力和广泛的知识库能够弥补大语言模型的不足，提升其在复杂问题解决中的准确性和可靠性。未来，随着技术的进一步发展，这种结合方式有望在更多领域得到应用，推动人工智能技术的更广泛发展。



Higress MCP 市场目前已上架40+款 MCP 服务，包含如搜索、沙盒工具、基础信息查询等多个服务，欢迎使用接入！



*[1]*  [https://arxiv.org/html/2308.05713v4](https://arxiv.org/html/2308.05713v4)

*[2]*  [https://products.wolframalpha.com/api](https://products.wolframalpha.com/api)

---

**<font style="color:rgba(0, 0, 0, 0.9);">Higress MCP 市场上线 Product Hunt，</font><font style="color:rgb(36, 36, 36);">快来给 Higress “upvote”！</font>**

> **<font style="color:rgba(0, 0, 0, 0.9);">https://www.producthunt.com/posts/higress</font>**
>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1745488487544-eb89feca-c267-478b-8378-78b2fbded409.webp)


