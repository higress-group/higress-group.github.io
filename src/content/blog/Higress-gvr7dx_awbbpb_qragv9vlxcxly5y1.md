---
title: "警惕！2万星开源AI工具遭挖矿木马入侵，这些隐患你必须知道！"
description: "警惕！2万星开源AI工具遭挖矿木马入侵，这些隐患你必须知道！"
date: "2025-01-23"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

## 事情经过
<font style="color:rgb(27, 44, 61);"> OneAPI 是在开源代码托管平台 GitHub 上拥有 2万 Star 的 AI 网关工具，该工具的用户发现安装最新版本镜像后，会固定消耗一定比例的 CPU：</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737360141954-0f4621f6-f152-4c6d-ac90-fa33294d41ad.png)

最终定位是 DockerHub 的镜像被投毒，<font style="color:rgb(27, 44, 61);">向镜像植入了 XMR 门罗币挖矿脚本，导致 CPU 跑高：</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737360123789-c3e07b9b-f663-43f8-87af-4c464aa39019.png)

目前可以确认是 DockerHub 的推送密钥泄漏，导致黑客向多个镜像版本植入了挖矿脚本：



![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737360816954-3a8cb0f9-f1b9-4ea8-99d3-f670c126c8da.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737385694394-c424183b-691a-438d-be33-793c516e734c.png)

因为加密货币行情的火热，近年来挖矿脚本相关的安全事件也呈不断上升趋势，黑客会找一些流行开源项目的 DockerHub 仓库进行攻破。

Palo Alto Network 的安全研究员 Aviv Sasson 曾发现了 30 个被植入挖矿木马的 Docker 镜像，这些镜像一共被下载了 2000万次。估计帮助黑客挖掘了价值 20 万美元的加密货币。

Docker 镜像被注入挖矿脚本并不是个别现象，而是一个需要引起重视的安全问题。

##  一些背景知识
### DockerHub
<font style="color:rgb(51, 51, 51);">DockerHub 是世界上最大的容器镜像托管服务，有来自软件供应商、开源项目的超过十万个容器镜像。</font>

<font style="color:rgb(51, 51, 51);">容器镜像是一个软件及其运行环境的完整包。在安装时，可以省去复杂的配置过程。</font>

<font style="color:rgb(51, 51, 51);">容器镜像托管服务</font>是一个在线平台，用于存储和分享软件的容器镜像。可以把它看作应用程序的“大商店”，里面有各种软件的包装。

因为 DockerHub 提供免费服务，很多开源软件项目选择在这里发布他们的容器镜像。这使得用户可以很方便地获取、安装和使用这些软件。

### AI 网关
被黑客植入木马的 OneAPI 是一款开源的 AI 网关工具。

随着 AI 供应商越来越多，LLM 模型的能力也逐渐趋同。为了解决使用中的各种需求，出现了 AI 网关这一工具。AI 网关能统一接收用户的问题，然后转发给不同的 LLM 模型处理。

使用 AI 网关有几个常见的使用场景：

+ 提高整体服务的稳定性：当一个模型出问题时，可以切换到另一个模型
+ 降低成本：可以在适当的时候用便宜的模型替代昂贵的模型，例如使用 DeepSeek 替代 ChatGPT

并且，这种切换对用户是无感知的，使用体验不会受到影响。通过 AI 网关，可以更灵活高效地利用各种模型资源。因此被 AI 应用开发者广泛采纳。

## 如何防范类似风险
本文作者是另一款开源 AI 网关项目 Higress 的维护成员之一。在关注 OneAPI 这个项目时，看到了这个问题，所以向大家分享下 Higress 防范此类风险的相关经验。

Higress 是由阿里云在 2022 年云栖大会上宣布开源的网关软件（GitHub：https://github.com/alibaba/higress），与 OneAPI 这款仅支持 AI 网关的工具不同，Higress 是基于 API 网关的能力之上构建了 AI 网关能力，并且由阿里云 API 网关这款商业产品背后的研发团队共同维护，而非个人项目。

Higress 一直使用阿里云容器镜像服务用于镜像存储，并有自己官方的 Helm 仓库（K8s 环境的安装包管理）。

使用阿里云容器镜像服务至少有两个好处：

1. 不受 DockerHub 网络封禁影响，对国内用户更友好，镜像拉取速度也更快
2. 可以进行镜像安全扫描，自动拦截有风险的镜像提交

第二点，也是防范开源镜像投毒的核心，如下截图所示：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737366702566-7e18099f-84a0-4ada-933b-aeed55549767.png)

基于阿里云容器镜像服务的云原生交付链功能，可以在镜像推送之后，立即进行恶意脚本扫描，如若发现风险可以立即删除镜像。

此外，每次新版本发布，不依赖人，而是由程序自动完成也很重要。Higress 社区在每次版本 release 发布后，会通过 GitHub Action 自动制作容器镜像以及安装包，镜像仓库密钥基于 GitHub Secret 存储。发布版本的权限可以给到社区里其他合作者，但无需提供给合作者镜像仓库的密码。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737385514853-b072e814-9c6f-4db0-abd0-42d6611e13d9.png)

## 快速体验 Higress AI 网关
Higress AI 网关支持一行命令安装：

```bash
curl -sS  https://higress.cn/ai-gateway/install.sh | bash
```

执行完命令后可以通过命令行初始化配置，可以看到，Higress 的 AI 网关能力支持对接国内外所有主流 LLM 模型供应商：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737430070649-ed4ca294-0222-494f-b5c2-f1069fc8c250.png)

也可以选择跳过这个步骤，到 Higress 的控制台进行配置对应供应商的 API Key：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737430287320-397adc11-fdd8-4800-9b7a-b1207b9a9f20.png)

配置后，就可以直接使用了，例如使用 OpenAI 的 SDK：

```python
import json
from openai import OpenAI

client = OpenAI(
    api_key=xxxxx, #  可以通过Higress生成消费者Key实现API key的二次分租
    base_url="http://127.0.0.1:8080/v1"
)

completion = client.chat.completions.create(
    # model="qwen-max",
    # model="gemini-1.5-pro",
    model="deepseek-chat", #  可以填写任意模型名称，Higress根据模型名称路由到对应供应商
    messages=[
        {"role": "user", "content": "你好"}
    ],
    stream=True
)

for chunk in completion:
    print(chunk.choices[0].delta)
```

可以在监控面板看到每个模型，以及每个消费者的 token 消耗情况以及调用延时：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737438297539-6cd214af-b07f-4ee9-8206-fd04e6f133bc.png)

此外，相比 OneAPI，Higress 提供了更多实用的功能，例如：

1. API Key 治理：支持配置 API Key 池实现多 Key 均衡，API Key 被限流等不可用情况会自动屏蔽，并在可用时自动恢复
2. 消费者管理：可以通过创建消费者，实现 API Key 的二次分发，无需将真正的供应商 API Key 暴露给调用方，并且可以精细化管理不同消费者的调用权限和调用额度
3. 兜底模型：支持配置兜底模型，例如当请求 DeepSeek 模型失败时，自动降级到 OpenAI 模型
4. 模型灰度：支持模型平滑按比例灰度，可以参考《[DeepSeek-R1来了，如何从OpenAI平滑迁移到DeepSeek](https://aliyuque.antfin.com/gvr7dx/awbbpb/gyimp3n0tumtreo4)》

Higress 的插件市场里还有很多开箱即用的插件，例如提示词模版，AI 缓存，数据脱敏，内容安全等等：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1737438052589-45f75ac9-9524-4a58-834b-3b74670edc7b.png)

插件代码也都是开源的，并且支持自己开发插件，支持在网关上热装载，对流量完全无损。这对于 RealTime API 等实时会话的场景十分友好，不会断开长连接。

这是 Higress 的社区交流群，在使用过程中有遇到任何问题，或者有新的需求，都可以在群里进行反馈：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/jpeg/22499/1737439078033-884d252f-31b9-4d3a-93fe-dbd6897b13ef.jpeg)


