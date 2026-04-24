---
title: "阿里云 AI 网关支持 DeepSeek V4"
description: "阿里云 AI 网关支持 DeepSeek V4"
date: "2026-04-24"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：望宸、梧同

今天，DeepSeek 发布两个模型，V4-Pro 和 V4-Flash。其架构和技术优势可以总结为：

+ 架构升级：流形约束残差连接mHC、Muon 优化器，提升训练质量。
+ 后训练范式升级：引入领域专家培育和 on-policy distillation（将多个专家能力融合到一个学生模型里），提升后训练效率和效果。
+ 全新的注意力机制：在 DSA 的基础上引入 CSA 和 HCA，提升1M 上下文情况下的对话效果。



从而带来了模型效果和性价比方面的提升，[包括](https://mp.weixin.qq.com/s/8bxXqS2R8Fx5-1TLDBiEDg)：

+ Agent 能力大幅提高：在 Agentic Coding 评测中，V4-Pro 已达到当前开源模型最佳水平，据评测反馈使用体验优于 Sonnet 4.5，交付质量接近 Opus 4.6 非思考模式，但仍与 Opus 4.6 思考模式存在一定差距。
+ 丰富的世界知识：DeepSeek-V4-Pro 在世界知识测评中，大幅领先其他开源模型，仅稍逊于顶尖闭源模型 Gemini-Pro-3.1。
+ 世界顶级推理性能：在数学、STEM、竞赛型代码的测评中，DeepSeek-V4-Pro 超越当前所有已公开评测的开源模型，取得了比肩世界顶级闭源模型的优异成绩。
+ 1M token 上下文，推理 FLOPs 只有上一代 V3.2 的 27%，KV cache 只要 10%。



DeepSeek-V4 支持 OpenAI ChatCompletions 接口与 Anthropic 接口。调用新模型 API 时，Model 参数需要改为 deepseek-v4-pro 或 deepseek-v4-flash。



**阿里云 AI 网关，提供 Model API、Agent API、MCP Server 的管理能力，现已率先支持 DeepSeek-V4 API 的管理。** 您可以通过阿里云 AI 网关，调用 DeepSeek-V4 API 服务，包括思考、多轮对话、Tool Call、Anthropic /v1/messages 兼容调用等功能，并支持在 Claude Code 上接入 DeepSeek-V4，此外，还实现了 DeepSeek-V4 和 Qwen 等其他模型之间的 Fallback 能力。



### 配置方式：
打开[AI 网关](https://apigw.console.aliyun.com/#/cn-hangzhou/ai-gateway)页面，点击进入控制台，单击目标实例 ID。在左侧导航栏，单击 Model API，然后单击创建 Model API。

![](https://img.alicdn.com/imgextra/i1/O1CN01I0ZufA1I2wFOK95vm_!!6000000000836-2-tps-2552-1518.png)



进入**创建 Model API** 表单后，您可按以下说明进行配置：

![](https://img.alicdn.com/imgextra/i3/O1CN01sYghrS1E6MkRGlZA9_!!6000000000302-2-tps-2818-1500.png)

+ **协议**：不同协议对应该场景下的一组内置默认路由，用于快速生成常用的 OpenAI/DashScope/vLLM 等兼容接口。
+ **API 名称**：您可自定义 API 名称，需注意名称必须全局唯一（同一账号下不可重复），支持英文、数字、下划线“_”、“-”，且不超过64个字符。
+ **域名**：访问该 API 的域名，支持选择多个。域名与基本路径 `<font style="background-color:rgba(0, 0, 0, 0.04);">BasePath</font>` 的组合必须唯一。
+ **Base Path**：配置 API 的基本请求路径，默认为 `<font style="background-color:rgba(0, 0, 0, 0.04);">/</font>`。可选择是否启用**转发至后端服务时移除**。



配置完后，进行用例测试：

![](https://img.alicdn.com/imgextra/i2/O1CN010IjQkV1lKueEltHt3_!!6000000004801-2-tps-1052-322.png)



![](https://img.alicdn.com/imgextra/i1/O1CN01q4KlL91DPJWB6ky2E_!!6000000000208-2-tps-1728-2304.png)


