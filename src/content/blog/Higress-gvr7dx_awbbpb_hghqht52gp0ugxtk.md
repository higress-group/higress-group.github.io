---
title: "大模型应用部署过程中流量管控的常见需求和应对方案"
description: "大模型应用部署过程中流量管控的常见需求和应对方案"
date: "2025-02-10"
category: "case"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：<font style="color:rgba(0, 0, 0, 0.3);">梧同、望宸</font>

# 背景
目前，和 DeepSeek 相关的需求总结为两类：

+ 因官方 APP/Web 服务经常无法返回结果，各类云厂商、硬件或软件企业提供满血版或蒸馏版的 API + 算力服务，还有不少基于开源+家用计算和存储设备的本地部署方案，以分担 DeepSeek 官方的服务压力。
+ 各行各业开始调用 DeepSeek  API 来设计大模型应用，服务于企业内外部，关注应用的构建效率和稳定性。



此前，我们已经针对以上的第一点需求，发布了不少云端和本地的部署；本篇文章，将针对第二点需求，谈谈流量管理层的工程化方案。

# DeepSeek 部署
由于 DeepSeek 开源了完整的 DeepSeek-R1 模型权重，企业可以将模型部署到自己的网络内，从而使得整个AI 应用的数据链路都掌握在自己手里。

## 模型权重下载
可以通过魔搭社区([https://modelscope.cn/](https://modelscope.cn/))下载模型权重

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1738994269355-abb5b6e9-11d4-4e38-bee6-093a0beced93.png)

由于完整的 DeepSeek-R1 模型有 671B 参数，运行其全量参数模型需要大量的 GPU 资源，可以考虑通过 int8/int4 等量化方式推理。同时，DeepSeek 也放出了几个不同规格的蒸馏模型，可以在较低配置的机器上部署。



## 部署方案
阿里云官方已经提供了多种部署方式，包括 PAI、GPU + ACK、魔搭社区+FC、Spring AI Alibaba + Ollama。本文不再详细展开，感兴趣的朋友可自行选择下方链接，了解详情。

PAI：[https://mp.weixin.qq.com/s/Ly9bseQxhmunlbePphRsnA](https://mp.weixin.qq.com/s/Ly9bseQxhmunlbePphRsnA)

百炼：[https://mp.weixin.qq.com/s/UgB90HfKlMDfarMugc5F5w](https://mp.weixin.qq.com/s/UgB90HfKlMDfarMugc5F5w)

容器化部署（GPU + ACK）：[https://mp.weixin.qq.com/s/SSGD5G7KL8iYLy2jxh9FOg](https://mp.weixin.qq.com/s/SSGD5G7KL8iYLy2jxh9FOg)

Serverless 部署（魔搭社区+FC）：[https://mp.weixin.qq.com/s/yk5t0oIv7XQR0ky6phiq6g](https://mp.weixin.qq.com/s/yk5t0oIv7XQR0ky6phiq6g)

本地部署（Spring AI Alibaba + Ollama + Higress）：[https://mp.weixin.qq.com/s/-8z9OFHvn0A1ga2rFsmeww](https://mp.weixin.qq.com/s/-8z9OFHvn0A1ga2rFsmeww)



### 通过 PAI 部署
<font style="color:rgb(24, 24, 24);">本方案以 DeepSeek-R1-Distill-Qwen-7B 为例进行演示，用户通过人工智能平台 PAI 的 Model Gallery，无须写代码即可完成模型部署。用户也可以在 PAI-Model Gallery 中选择 DeepSeek-R1 等其他模型进行一键部署，系统将自动适配所需的实例规格。</font>



### 通过百炼部署
<font style="color:rgb(24, 24, 24);">百炼提供了 DeepSeek 模型调用的 API，其中 DeepSeek-R1 与 DeepSeek-V3 分别有 100万的免费 Token，另有多款开源 Qwen 及 Llama 蒸馏模型支持调用。</font>

<font style="color:rgb(24, 24, 24);"></font>

### 通过容器化方式部署
选择使用 ACK，配置 GPU 主机，通过 KServe 和 Arena，来部署 <font style="color:rgb(24, 24, 24);">DeepSeek 模型推理服务</font>。



### 通过 Serverless 范式部署
通过云原生应用开发平台 CAP 部署 Ollama 和 Open WebUI 两个 FC 函数。Ollama 负责托管模型，它是基于 DeepSeek-R1 的推理能力，通过蒸馏技术将推理模式迁移到较小的 Qwen 模型上，从而在保持高效性能的同时降低了计算成本。



### 本地部署
下载 Ollama，在项目中加入 <font style="color:rgb(25, 25, 25) !important;background-color:rgb(255, 254, 213);">spring-ai-ollama-spring-boot-starter</font> 依赖，由于模型是通过 ollama 运行的，这里我们也加入，再将 <font style="color:rgb(25, 25, 25) !important;background-color:rgb(255, 254, 213);">ChatClientBean</font> 注入就可以实现与 DS 模型聊天了。



# 大模型应用落地过程中的常见需求
和部署 Web 应用一样，当我们在部署大模型应用时，也会遇到诸如流量突发与过载、网络波动与延迟、安全与合规问题、调用额度和成本管控、发布引起的线上故障等工程化难题，但是由于大模型应用的架构和  Web 应用有所不同，因此应对方案也会有所差异。如下图。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/jpeg/133108/1739085047795-67941f9a-885e-434f-ac86-95011742d447.jpeg)



在[《大模型推理全景图》](https://mp.weixin.qq.com/s/Fz_oWjhGdsCYkUUNLTDzUQ)一文中，我们分享了流量管控对大模型应用工程化的重要性，而 AI 网关已经成了大模型应用的标配，通过 AI 网关将部署的模型作为服务注册，API 暴露给需要的调用方，同时并具备了限流、鉴权、统计等能力。接下来，我们来看看 AI 网关如何解决大模型应用落地过程中的工程化难题。



> <font style="color:rgb(0, 0, 0);">Higress 是阿里云开源的一款高性能的网关，用于部署 Web 应用和大模型应用，并提供商业版服务，即阿里云云原生 API 网关，本文将以云原生 API 网关的控制台进行演示。</font>
>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1739007652842-4ba4e7d4-22de-4ab0-8c8f-5fd3033e60b2.png)



## 需求一：自建的 DeepSeek 服务并发有限，调用失败怎么兜底？

DeepSeek-R1拥有 671B 的庞大参数，部署成本较高，可以部署一些 R1 系列的蒸馏模型进行兜底，如基于 Qwen 模型训练的 [DeepSeek-R1-Distill-Qwen-32B](https://modelscope.cn/models/deepseek-ai/DeepSeek-R1-Distill-Qwen-32B) 是个不错的选择。



云原生 API 网关中的 AI 网关支持配置多个后端模型服务，且可以通过 Fallback 能力将失败的请求重新调度，如调用自部署的 DeepSeek-R1 失败后，就可以路由至一些参数较小的模型。此外，也可以选择路由至在线 API 服务以确保整体服务能力，如 DeepSeek-V3、Qwen-max 等。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1738997542436-a85569b8-bbcb-4734-a942-e27fbf7d7a32.png)

如图，配置了 DeepSeek 的服务，Fallback 策略为调用 qwen-max。

## 需求二：自建的 DeepSeek 服务怎么保证内容安全？

DeepSeek的 R1 系列开源模型的输出风格整体是偏“自由”的，如果使用其提供对外服务，难免会有对内容安全的担忧，一旦模型对一些敏感问题做了回复，可能会为企业带来一些额外的解释成本。



云原生API网关对接了阿里云内容安全，能够做到对大模型请求/响应的实时处理与内容封禁，阿里云内容安全通过了信通院的认证，能够提供强有力的 AI 内容安全保障。



开启内容安全后，此时如果发送违规内容，将会得到如下响应：

```json
{
  "id": "chatcmpl-E45zRLc5hUCxhsda4ODEhjvkEycC9",
  "object": "chat.completion",
  "model": "from-security-guard",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "我不能处理隐私信息"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 0,
    "completion_tokens": 0,
    "total_tokens": 0
  }
}
```

同时，在内容安全控制台可以查看每一个请求的审计日志：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1738998955898-93003dc2-19af-46e2-b0f6-9d65b7a1f736.png)



## 需求三：我想把 API 授权给特定的用户使用，并且控制他们的额度

基于云原生 API 网关的消费者鉴权能力支持模型服务的分租，用户可以像模型服务商一样在网关上签发自己的 API Key 供用户使用，并能够控制消费者的调用权限和调用额度，配合可观测能力，还可以对每个消费者的 token 用量进行观测统计。



对于在线模型服务，则可以通过此功能屏蔽掉模型提供商的 API Key，从而做到 API Key 的分租。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1738999510619-37ca4210-ebf8-41da-9d00-48fef0753f3b.png)



## 需求四：现在已经有在使用别的 LLM，想切一点流量到 DeepSeek 看看效果

云原生 API 网关支持模型按比例灰度能力，便于用户在模型间迁移，如下图所示，请求流量将有90%被路由到 openai，10%被路由到 DeepSeek，后续灰度的切换也只需修改配置并发布，不需要做任何代码层级的变更。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/6356291/1738999475950-591a105a-dc35-4ae2-a6e0-22918a7adb99.png)

## 需求五：部署模型推理的成本很高，常见的请求能用缓存挡掉就好了

<font style="color:rgb(51, 51, 51);">云原生 API 网关支持对 LLM 生产结果进行缓存，开启缓存能力后，一些常用的请求，如打招呼、询问产品能力等，均可通过命中的缓存直接回复，不会进入到后端模型，占用宝贵的推理资源。</font>

## 上面的这些能力怎么看效果呢？
云原生 API 网关提供了更丰富的可观测能力，例如内容安全、限流、缓存等相关的监控。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737444921195-f7d20843-15a5-4be4-8d95-632808067e41.png)



此外，我们联合 SLS 提供了基于大模型对话的语义向量索引功能以及进阶的语义富化功能，可以实现话题聚类、意图识别、情绪识别、质量评估等能力，帮助用户逐步提升模型应用效果。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1739087682472-01c0fc94-b3d8-4a3f-b8d2-efd48f4f7286.png)



本文配图均基于 FLUX-ai 生成。


