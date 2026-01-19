---
title: "玩转 DeepSeek：和 ChatGPT 对弈中国象棋"
description: "玩转 DeepSeek：和 ChatGPT 对弈中国象棋"
date: "2025-02-14"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739184724526-54c2eb35-7e2f-45ce-beba-0a842ac286a4.png)

国外 up 主让 DeepSeek 跟 ChatGPT 下了一把国际象棋，DeepSeek 借助“孙子兵法”，让 ChatGPT 在优势局面下，直接认输：

[https://mp.weixin.qq.com/s/LCFcqrxQbwNEdjLe6uWpqg](https://mp.weixin.qq.com/s/LCFcqrxQbwNEdjLe6uWpqg)



如果让两个 AI 在中国象棋上对弈一把，效果会如何呢？话不多说，让我们直接来看看效果：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739243044358-1c242640-9035-425a-9f03-8593aab3447b.png)

相比传统基于搜索算法等棋类 AI，至少目前看大模型没有太多优势。不过相比传统 AI，因为大模型可以输出一些聊天对话，会让棋局变得更有趣味性。



如果你对此感兴趣，可以看看下方的实现原理，在你自己的电脑上复现一把。



## 对弈实现原理
首先找了一个开源的基于终端命令行输出的象棋对弈程序：[https://github.com/techkang/xiangqi](https://github.com/techkang/xiangqi)

因为是基于终端命令行的，棋局也很方便通过文本的方式传递给大模型，例如：

> 车马象士将士象马车
>
> 〇〇〇〇〇〇〇〇〇
>
> 〇砲〇〇〇〇〇砲〇
>
> 卒〇卒〇卒〇卒〇卒
>
> 〇〇〇〇〇〇〇〇〇
>
>    楚河      汉界
>
> 〇〇〇〇〇〇〇〇〇
>
> 兵〇兵〇兵〇兵〇兵
>
> 〇炮〇〇〇〇〇炮〇
>
> 〇〇〇〇〇〇〇〇〇
>
> 車馬相仕帅仕相馬車
>



同时考虑到对战的双方可以复用同一套 AI Agent 逻辑，只是配置的模型参数不同，可以引入一个 AI 网关来简化 Agent 对接不同模型，整体架构如下：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739186232072-eba732bd-1c1f-40ad-8a77-168246acebf0.png)

这里是最终实现修改后的开源代码：[https://github.com/johnlanni/xiangqi](https://github.com/johnlanni/xiangqi)



AI Agent 的相关逻辑都在 ai_agent.py 这个文件中。AI 网关使用 Higress，只需要一行命令就可以安装完成：

`curl -sS  https://higress.cn/ai-gateway/install.sh | bash` 

> 注意：AI 网关的启动过程需要访问公网资源。请确保其运行环境具备外网访问条件。

按照指引可以分别录入 OpenAI（或者 Azure OpenAI），以及 DeepSeek 的 API Key

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739186417909-43eb19a3-f77b-4a8c-bf96-11db227a2ef8.png)

配置好 API Key，AI 网关就启动完成，可以直接使用了（默认监听在本地 8080 端口）。然后运行下面这行命令，启动对弈程序，让红方（先手）使用 deepseek-chat 模型，让黑方使用 gpt-4o 模型：

`python xiangqi.py --ai --red-model deepseek-v3 --black-model gpt-4o`



启动后，还可以在 llm.log 下看两个 AI Agent 的心理历程，类似这样：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739188972462-301a803c-6bbd-4683-9c7c-e19f1e440bf5.png)

## Higress AI 网关介绍
随着 AI 供应商越来越多，LLM 模型的能力也逐渐趋同。为了解决使用中的各种需求，出现了 AI 网关这一工具。AI 网关能统一接收用户的问题，然后转发给不同的 LLM 模型处理。



使用 AI 网关有几个常见的使用场景：

+ 提高整体服务的稳定性：当一个模型出问题时，可以切换到另一个模型
+ 降低成本：可以在适当的时候用便宜的模型替代昂贵的模型，例如使用 DeepSeek 替代 ChatGPT



并且，这种切换对用户是无感知的，使用体验不会受到影响。通过 AI 网关，可以更灵活高效地利用各种模型资源。因此被 AI 应用开发者广泛采纳。



Higress 是一款基于 API 网关能力构建的开源 AI 网关：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739190005240-c7d1227a-47e4-4615-9d5b-da3e4c30a005.png)

除了通过命令行方式配置，Higress 还提供了开箱即用的控制台和可观测能力，例如：



供应商 API Key 配置：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739189871531-857be5d3-4f8d-415d-a6cc-9cde2250945e.png)



可以在监控面板看到每个模型，以及每个消费者的 token 消耗情况以及调用延时：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739189930217-3f07adf1-241f-4d5a-9966-ecb0312baa00.png)



此外，Higress 提供了更多实用的功能，例如：

1. 内容安全：支持对接阿里云内容安全服务（通过信通院认证）实现全方面的AI生成内容防护
2. API Key 治理：支持配置 API Key 池实现多 Key 均衡，API Key 被限流等不可用情况会自动屏蔽，并在可用时自动恢复
3. 消费者管理：可以通过创建消费者，实现 API Key 的二次分发，无需将真正的供应商 API Key 暴露给调用方，并且可以精细化管理不同消费者的调用权限和调用额度
4. 兜底模型：支持配置兜底模型，例如当请求 DeepSeek 模型失败时，自动降级到 OpenAI 模型
5. 模型灰度：支持模型平滑按比例灰度，可以参考《[DeepSeek-R1来了，如何从OpenAI平滑迁移到DeepSeek](https://aliyuque.antfin.com/gvr7dx/awbbpb/gyimp3n0tumtreo4)》



Higress 的插件市场里还有很多开箱即用的插件，例如提示词模版，AI 缓存，数据脱敏等等：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1739189835320-47a24b34-766e-49df-bfc0-834815f46bd7.png)

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">插件代码也都是开源的，并且支持自己开发插件，支持在网关上热装载，对流量完全无损。这对于 RealTime API 等实时会话的场景十分友好，不会断开长连接。  
</font>

<font style="color:rgb(38, 38, 38);">这是 Higress 的社区交流群，在使用过程中有遇到任何问题，或者有新的需求，都可以在群里进行反馈：  
</font>![](https://intranetproxy.alipay.com/skylark/lark/0/2025/jpeg/22499/1739260135685-97b9e936-5e12-4cfc-99d1-6d7daf77bbf4.jpeg)

  





