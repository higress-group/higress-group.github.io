---
title: 通义千问2.5“客串”ChatGPT4，你分的清吗
keywords: [Higress,Wasm,AI,Qwen,ChatGPT,NextChat]
description: 基于通义千问大模型，使用 Higress 和 NextChat 搭建跨平台的私人 ChatGPT 应用
author: CH3CHO、澄潭
date: "2024-05-11"
category: "ecosystem"
---

## 引子

OpenAI 发布了最新的 GPT-4o 模型，通义千问也在前不久刚发布通义千问 2.5，已经和 GPT-4-Turbo 不分伯仲：

![](https://img.alicdn.com/imgextra/i1/O1CN0148JrOd21va23GzrEb_!!6000000007047-0-tps-1080-813.jpg)

既然目前还没有和 GPT-4o 文本生成能力的对比数据，就让我们来和大模型一起做个游戏测试一下：

> 我们让通义千问 2.5 扮演 GPT4，来和真正的 GPT4 进行问答 PK，读者不妨来猜一猜谁是通义千问。
>
> 两名选手的头像和昵称分别是：
>
> 🌝 ：我是GPT4
> 
> 🌚 ：如假包换GPT4

谁是通义千问，谁是ChatGPT，答案将在文末揭晓。

## Round 1

第一轮由“我是GPT4”选手提问，由“如假包换GPT4”选手作答

🌝：角色设定+第一个问题

![QA](https://img.alicdn.com/imgextra/i2/O1CN01RXt7bg1Pl5YpGvDHW_!!6000000001880-2-tps-855-480.png)

🌚 ：角色设定+第一个回答

![QA](https://img.alicdn.com/imgextra/i3/O1CN01UOHsOZ1tFt3GPBsRr_!!6000000005873-2-tps-855-422.png)

![QA](https://img.alicdn.com/imgextra/i2/O1CN01LJQ5zW1IOv4xlYt6k_!!6000000000884-2-tps-855-525.png)

🌝 ：第二个问题

![QA](https://img.alicdn.com/imgextra/i3/O1CN01h0fgCS1WNupcRJqr3_!!6000000002777-2-tps-860-411.png)

🌚 ：第二个回答

![QA](https://img.alicdn.com/imgextra/i3/O1CN01h4Oqhu1EeFsSfNVXZ_!!6000000000376-2-tps-855-507.png)

🌝 ：第三个问题

![QA](https://img.alicdn.com/imgextra/i3/O1CN01iD3xp32AAFe6pUMTY_!!6000000008162-2-tps-860-374.png)

🌚 ：第三个回答

![QA](https://img.alicdn.com/imgextra/i2/O1CN01yDu0m41r9oZFojWHF_!!6000000005589-2-tps-855-433.png)

## Round 2

第二轮由“如假包换GPT4”选手提问，由“我是GPT4”选手作答

🌚 ：角色设定+第一个问题

![QA](https://img.alicdn.com/imgextra/i2/O1CN01v1PrMd1HrwYtq3N7x_!!6000000000812-2-tps-855-517.png)

🌝 ：角色设定+第一个回答

![QA](https://img.alicdn.com/imgextra/i4/O1CN01Jm4Ke81CjAtwWAz9g_!!6000000000116-2-tps-855-422.png)

![QA](https://img.alicdn.com/imgextra/i1/O1CN01CNkl9B1la1XSUOJIG_!!6000000004834-2-tps-855-441.png)

🌚 ：第二个问题

![QA](https://img.alicdn.com/imgextra/i1/O1CN01lD1DTl1FgpitHnhmI_!!6000000000517-2-tps-860-353.png)

🌝 ：第二个回答

![QA](https://img.alicdn.com/imgextra/i1/O1CN01v8g20421HjZh3EtET_!!6000000006960-2-tps-855-517.png)

🌚 ：第三个问题

![QA](https://img.alicdn.com/imgextra/i2/O1CN01Dbl4ub1UacaQ6vBlT_!!6000000002534-2-tps-860-353.png)

🌝 ：第三个回答

![QA](https://img.alicdn.com/imgextra/i2/O1CN01jDt0gk1SnKLN6Ay8W_!!6000000002291-2-tps-855-749.png)


🌚 的回答更简短，更符合设定的要求，也是因为 🌝 的提问根据给定的要求更聚焦，相比下 🌚 的问题更发散，且都包含子问题，比较难用一两句话来作答。整体来说确实不分伯仲。

不过，聪明的你，可能已经有了答案。如果急于验证，可以直接划到文末查看。如果你对上面通义千问是如何扮演 ChatGPT，以及聊天框工具感到好奇，不妨先来看我们是如何搭建这个测试场景的。

## 测试场景介绍

我们使用了两个开源软件工具来搭建：**NextChat** 和 **Higress**。

[NextChat (ChatGPT Next Web)](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) 是一个可以私有化部署的开源 ChatGPT 网页应用，目前支持对接 OpenAI、Azure OpenAI、Google Gemini Pro 和 Anthropic Claude 这些 LLM 服务提供商。

[Higress](https://github.com/alibaba/higress) 是阿里云开源的高集成、易使用、易扩展、热更新的云原生API网关，遵循开源 Ingress/Gateway API 标准，提供流量调度、服务治理、安全防护三合一的网关能力。

我们使用 NextChat 来搭建前端，并使用 Higress 将通义千问的应答转换为 OpenAI 协议返回给 NextChat。

### 具体搭建步骤：

#### 第一步：启动容器

完整的 docker compose 配置贴在 Higress 社区的这个 [issue](https://github.com/alibaba/higress/issues/938) 中。

> **注意：**
>
> Higress 容器环境变量中的 `YOUR_DASHSCOPE_API_KEY` 需要替换为你自己的[通义千问的 API Key](https://help.aliyun.com/zh/dashscope/opening-service?spm=higress-website.topbar.0.0.0)。

```bash
docker compose -p higress-ai up -d
```

#### 第二步：在浏览器里访问 http://localhost:3000/，打开 NextChat 页面；

![image](https://img.alicdn.com/imgextra/i1/O1CN01gJKDHH1vg6xdW0Zei_!!6000000006201-2-tps-1913-1129.png)

#### 第三步：点击对话输入框工具栏最右侧的模型设置按钮，切换模型

因为 Higress 的 AI Proxy 插件（可以访问 http://localhost:8001 登录 Higress 的控制台查看插件配置）配置了 gpt-4o 到 qwen-max （即通义千问 2.5）的模型映射，所以实际上这里提供的模型服务是 qwen-max 

![image](https://img.alicdn.com/imgextra/i1/O1CN01w8Zih920gdUdllSJS_!!6000000006879-0-tps-1150-1248.jpg)

#### 完成！现在你就可以与 AI 进行对话了。

可以看到 Higress 实现了流式的效果，这不仅基于 Higress 底层对 SSE 等流式协议的良好支持，也依赖 Higress 的 Wasm 插件扩展机制可以实现通义千问协议到 OpenAI 协议的流式转换

![](https://img.alicdn.com/imgextra/i3/O1CN01VBt9mC1SYffZ7gbPY_!!6000000002259-1-tps-900-1188.gif)

## Higress AI 网关介绍

随着 LLM 技术蓬勃发展，AI Web 应用创新如火如荼，对于构建一款 Web 应用来说，网关是必须的。而 AI Web 应用流量有以下特征，和对 AI 网关的需求：

1. 长连接：由 AI Web 应用常见的 Websocket 和 SSE 协议决定，长连接的比例很高，要求网关更新配置操作对长连接无影响，不影响业务
2. 高延时：LLM 推理的响应延时比普通 Web 应用要高出很多，使得 AI Web 应用面向 CC 攻击很脆弱，容易被攻击长时间维持住大量长连接，消耗大量计算和存储资源
3. 大带宽：结合 LLM 上下文来回传输，以及高延时的特性，AI Web 应用对带宽的消耗远超普通应用，网关或后端如果没有实现较好的流式处理能力，容易导致内存快速上涨，继而触发 OOM
   
Higress 可以很好地解决这些痛点：

1. 长连接：不同于 Nginx 变更配置需要 Reload，导致连接断开，Higress 基于 Envoy 实现了连接无损的真正配置热更新
2. 高延时：Higress 基于安全网关能力可以提供 CC 防护能力，并面向 AI 场景，除了 QPS，还可以扩展针对 Token 生成的限流防护
3. 大带宽：Higress 支持完全流式转发，在 AI Web 应用场景下，所需的内存占用极低，同时也可以开发 Wasm 插件对请求和响应进行自定义逻辑的流式处理

从上面的测试环境搭建流程来看，Higress AI 代理插件可以很方便的让 AI 对话应用直接对接通义千问等接口契约不同的大模型服务。除了通义千问和 ChatGPT 之外，这个插件还支持 Azure OpenAI 和月之暗面（Moonshot）等大模型服务提供商，并且支持配置一个外部文件地址作为聊天上下文，可以用来快速搭建一个个人 AI 助理服务。

整个插件使用 Go 语言进行开发，代码可以在这里找到：https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/ai-proxy

对于流式相应的处理方法，大家可以参考这段代码：

```go
// 这个 handler 函数会重入。在收到响应 body 的流式分块后，每次调用此函数会传入一个分块（chunk）。isLastChunk 标识是否是最后一个分块。方法处理完需要返回修改后的分块。
func onStreamingResponseBody(ctx wrapper.HttpContext, pluginConfig config.PluginConfig, chunk []byte, isLastChunk bool, log wrapper.Log) []byte {
	activeProvider := pluginConfig.GetProvider()

	if activeProvider == nil {
		log.Debugf("[onStreamingResponseBody] no active provider, skip processing")
		return chunk
	}

	log.Debugf("[onStreamingResponseBody] provider=%s", activeProvider.GetProviderType())
	log.Debugf("isLastChunk=%v chunk: %s", isLastChunk, string(chunk))

	if handler, ok := activeProvider.(provider.StreamingResponseBodyHandler); ok {
		apiName := ctx.GetContext(ctxKeyApiName).(provider.ApiName)
		modifiedChunk, err := handler.OnStreamingResponseBody(ctx, apiName, chunk, isLastChunk, log)
		if err == nil && modifiedChunk != nil {
			return modifiedChunk
		}
		return chunk
	}
	return chunk
}
```

有兴趣参与 Higress 社区贡献，实现更多大模型 API 的适配，可以到这个 issue 下认领任务：

https://github.com/alibaba/higress/issues/940

也欢迎参与 NextChat 社区贡献，参与到 3.0 版本的建设中：

https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/issues/4622

有任何使用问题，也欢迎到社区提 issue，也可以进微信或钉钉群交流：

![](https://img.alicdn.com/imgextra/i1/O1CN01LWh6QW1TxEWflxKVg_!!6000000002448-0-tps-720-405.jpg)

此外，由中国科学院软件研究所“开源软件供应链点亮计划”发起并长期支持的暑期开源活动“开源之夏”正在进行中。Higress 也有两个与 AI 网关相关的项目参与其中，分别是“基于向量相似度实现LLM结果召回的WASM插件”和“基于AI网关实现AI模型的轻量化部署”。欢迎各位在校同学积极报名参与。

详情可查看开源之夏的 [Higress 社区页面](https://summer-ospp.ac.cn/org/orgdetail/1f8ea42c-86c9-46b8-b1f5-344de5741ef0)。

## 答案揭晓

最后，我们来揭晓前面问题的答案。不知道各位猜对了吗？

![](https://img.alicdn.com/imgextra/i1/O1CN01hVms8W1JleLluvbuJ_!!6000000001069-2-tps-860-338.png)
