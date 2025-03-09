---
title: "DeepSeek-R1来了，如何从OpenAI平滑迁移到DeepSeek"
description: "DeepSeek-R1来了，如何从OpenAI平滑迁移到DeepSeek"
date: "2025-01-22"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

## 背景
1 月 20 日晚，DeepSeek（深度求索）公司发布推理模型 DeepSeek-R1 正式版，同步开源模型权重，并允许用户利用模型输出、通过模型蒸馏等方式训练其他模型。网友热评：这，才是真正的OpenAI。能力相当于一个月 200 美元的 ChatGPT o1 版本，却完全免费。

同时 DeepSeek 也开放了对应的 API 调用方式，过去依赖 OpenAI 的业务，可以考虑直接迁移到 DeepSeek，节省大量成本。

而 Higress 作为一款开源的 AI 网关工具，可以提供基于灰度+观测的平滑迁移方案：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737449122874-1f3c9a1b-73b6-448c-ae80-2f75f9d8a1c7.png)

## 快速安装 Higress
仅需一行命令，即可快速在本地搭建好 Higress A I网关（此步骤需要有 Docker 环境）：

```bash
curl -sS  https://higress.cn/ai-gateway/install.sh | bash
```

执行以上命令后，会进入引导界面，可以在此处配置provider的apikey，也可以输入回车直接跳过：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737343509297-63a4dc2e-3eae-4e01-a15c-087af3b6abb4.png)

配置完provider，AI网关就启动完成了：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737100287213-d61d7b46-b63f-4aa7-8b6d-7cd0a9024a41.png)

根据启动脚本提供的地址可以访问 Higress 控制台，Higress AI 网关内置了主流的 LLM Provider，仅需要在控制台上简单填写APIKey即可完成 provider的配置，例如配置 deepseek provider：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737343471567-382e3b05-d8e7-421b-aba7-1c33ce768eb9.png)

执行以下 python 脚本即可访问 DeepSeek：

```python
import json
from openai import OpenAI

client = OpenAI(
    api_key="none",
    base_url="http://localhost:8080/v1",
    default_headers={"Accept-Encoding": "identity"},
)

completion = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello!"}
    ],
    stream=False
)

print(completion.choices[0].message.content)
```

```plain
Hello! How can I assist you today? 
```

## 实现从 OpenAI 到 DeepSeek 的平滑迁移
### 配置灰度路由
网关支持模型按比例灰度能力，便于用户在模型间迁移，如下图所示，请求流量将有90%被路由到 openai，10%被路由到 deepseek。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737444113969-b94c9d6d-bab2-4e1d-be7b-7de7c30612f2.png)

### API Key 二次分租
Higress 基于 API 网关的消费者鉴权能力支持 API Key 的二次分租，使用者在对外提供服务时，可以屏蔽掉模型提供商的 API Key，在网关上签发自己的 API Key 供用户使用，从而可以兼容历史调用方的 API Key；除了能够控制消费者的调用权限和调用额度，配合可观测能力，还可以对每个消费者的 token 用量进行观测统计。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737443085537-67cd7dcc-2a02-460d-805b-3d0af3f074d4.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737440731348-eb304c79-61c6-4c79-b529-4784f94a054a.png)

### 观测灰度过程
在灰度的过程中，需要持续观测不同模型的 token 开销以及响应速度的情况，来整体衡量切换效果。

网关具备开箱即用的 AI 可观测能力，提供了全局、provider 维度、模型维度以及消费者维度的 token 消耗/延时等观测能力。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737443577409-71a48bc1-00b1-436a-8c89-77ad26124abc.png)

### 实现 AI API 的安全调用
DeepSeek 的用户协议里明确提到：

> **<font style="color:rgb(51, 51, 51);">7.2 我们致力于提供安全、稳定、持续的服务，保障用户正常使用，但本服务仅以“现状”、“当前功能”的状态提供。尽管我们已经尽了最大努力，但是由于本服务所依赖的技术本身存在的技术瓶颈和科技客观限制，我们不能对以下事项作出任何保证，具体如下：</font>**
>
> **<font style="color:rgb(51, 51, 51);">...</font>**
>
> **<font style="color:rgb(51, 51, 51);">（4）本服务的输入和输出虽已经过过滤审查，但仍不排除无法发现您的输入或本服务输出中存在违规问题，不排除其中部分信息具有瑕疵、存在虚假内容或存在不合理、引发用户不适的地方；</font>**
>
> **<font style="color:rgb(51, 51, 51);">...</font>**
>

Higress 对接了阿里云内容安全，能够做到对大模型请求/响应的实时处理与内容封禁，阿里云内容安全通过了信通院的认证，能够提供强有力的 AI 内容安全保障。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737345311603-c20ae6e7-f1c3-4c66-826c-6eecbf8a7452.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737443911767-ed774756-0753-4cc9-8145-b05078c43d0a.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737352395966-1e90faa9-8609-4683-9b88-8e21f7cf89fc.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737352466153-f6c1e80b-7ce2-4022-a139-b5c5aa84e537.png)

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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737428957706-a9d2ad4d-b67a-4e09-bb94-ec6cac497022.png)

## 使用阿里云云原生 API 网关
阿里云云原生 API 网关是 Higress 的云上托管产品（可以[点击原文](https://www.aliyun.com/product/apigateway?spm=36971b57.2ef5001f.0.0.2a932c1fl5YjTj)了解详情）。云原生 API 网关特别推出了 AI API 作为 AI 流量的管理入口：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737429188115-e48333c4-f3e4-4028-a9dc-a5566ee17ee9.png)

相比于开源 Higress AI 网关，云原生 API 网关 AI API 具有更强大的可观测能力以及更便捷的策略配置能力，用户可一键接入内容安全、限流、缓存等功能，无需填写 yaml 配置。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737430384446-dacbd893-12f2-4a84-a421-298c0bdf8658.png)

此外，云原生 API 网关提供了更丰富的可观测能力，例如内容安全、限流、缓存等相关的监控：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737444921195-f7d20843-15a5-4be4-8d95-632808067e41.png)

此外，我们联合 SLS 提供了基于大模型对话的语义向量索引功能以及进阶的语义富化功能，可以实现话题聚类、意图识别、情绪识别、质量评估等能力。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/90456445/1737444608261-bbf1892e-4fa4-4a8c-80d8-5cf1eaa63d9c.png)




