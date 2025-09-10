---
title: "Claude Code用不了? 使用AI网关迁移至任意模型"
description: "Claude Code用不了? 使用AI网关迁移至任意模型"
date: "2025-09-10"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

9月5日，Anthropic 宣布停止向中国资本控股（超50%股权）的企业及其子公司提供 Claude 服务。此前，Claude 系列模型因其编程能力出众受到开发者的好评和广泛应用。

为此，阿里云 AI 网关（Higress 企业版）第一时间提供了迁移方案。

现在，开发者使用阿里云 AI 网关，**只需三步**就将 Claude Code 使用的模型从 Anthropic 的官方模型**迁移到任意 模型服务**，例如阿里云百炼 Qwen3，智谱 GLM3.5，月之暗面 Kimi2 等等国产模型。

基于阿里云 AI 网关，可以实现通过一个统一的入口屏蔽各家模型协议差异，且**避免被特定供应商锁定**。同时对接多个供应商，还可以实现供应商 A 失败后兜底到供应商 B 的[高可用能力](https://mp.weixin.qq.com/s/WmQcGITBfoUG62gfV5rUvA)。

## 迁移步骤
### 第一步：在阿里云 AI 网关上配置 LLM 供应商的 API Key
阿里云 AI 网关支持对接多达 20 个不同的 LLM 供应商，可以选择任意供应商（也可以对接在阿里云上自建的开源模型服务），填写 API Key：

![](https://img.alicdn.com/imgextra/i2/O1CN01vzScPR23yRsJqQKHT_!!6000000007324-2-tps-1902-736.png)

API Key 通过引用凭据方式可以安全存储在用户自己的阿里云 KMS 实例中，避免 API Key 泄漏风险：

![](https://img.alicdn.com/imgextra/i1/O1CN01lRKrmV1dPTce9nDFN_!!6000000003728-2-tps-3016-1614.png)

这里为了演示方便创建了三个服务，分别对应阿里云百炼，月之暗面和智谱 GLM：

![](https://img.alicdn.com/imgextra/i4/O1CN011KXMAr2214uy2Vt90_!!6000000007059-2-tps-2918-544.png)

### 第二步：创建 Model API，按模型名称路由到不同供应商
服务模型选择**多模型服务（按模型名称路由）**，这样可以根据请求中的不同模型名称，路由到不同模型：

+ `kimi-k2-`开头的模型路由到月之暗面（服务名：moonshot）
+ `glm-`开头的模型路由到智谱GLM（服务名：glm）
+ `qwen`开头到模型路由到阿里云百炼（服务名： bailian）

![](https://img.alicdn.com/imgextra/i4/O1CN01FKTc4321NESb77GG4_!!6000000006972-2-tps-3022-1610.png)

配置好后可以立即进行调试，我们用“你是谁”进行测试，可以看到：

+ 当请求模型名称指定为 kimi-k2-0905-preview 时，正确路由到了月之暗面的服务

![](https://img.alicdn.com/imgextra/i2/O1CN01mwbUZ624zC8Uolwbe_!!6000000007461-2-tps-3020-1282.png)

+ 当请求模型名称指定为 glm-4.5 时，正确路由到了智谱 GLM 的服务

![](https://img.alicdn.com/imgextra/i1/O1CN01o47bLA1umEm0AZcOb_!!6000000006079-2-tps-3022-1610.png)

+ 当请求模型名称指定为 qwen3-max-preview 时，正确路由到了阿里云百炼的服务

![](https://img.alicdn.com/imgextra/i3/O1CN01gXffiC1GepjwYlhbt_!!6000000000648-2-tps-3022-1332.png)

### 第三步：启动 Claude Code，并使用指定模型
在 Model API 上可以看到实例访问入口，可以复制下来：

![](https://img.alicdn.com/imgextra/i4/O1CN01iGzG4H21a3Y94NBK0_!!6000000007000-2-tps-2544-258.png)

在启动 claude 之前 设置环境变量：

```bash
export ANTHROPIC_BASE_URL=http://env-xxxxxx-cn-hangzhou.alicloudapi.com
# 可以为这个 Model API 开启认证，配置独立的 API Key，这里填写对应的 API Key
# 如果没有开启认证，这里也需要填一个任意值，不能填空，否则无法启动 claude code
export ANTHROPIC_AUTH_TOKEN=xxxx
```

然后指定模型启动 claude code 即可：

```bash
# 使用阿里云 qwen3 模型
claude --model qwen3-coder-plus
# 使用 kimi-k2 模型：
claude --model kimi-k2-0905-preview
# 使用 glm 模型：
claude --model glm-3.5
```

## 迁移后效果对比
完成迁移后，我们可以来对比一下 Qwen3 和原生 Claude Sonnet4 的模型效果。

这里设计了一个基于代码文档结合互联网搜索，基于 three.js 来实现一个钟摆波效应的动画。可以结合 MCP 工具比较全面地测试切换后 Claude Code 的功能是否正常使用，同时任务又具备一定难度，可以同时考量模型的多步工具调用和实现完整项目的代码能力。

这里使用 Context7 查询 three.js 的代码文档，用 BraveSearch 搜索物理公式等相关资料，再结合 Firecrawl 将 Context7 和 BraveSearch 查询到的资料中的 URL 连接解析成完整文本，从而提供更详细的信息。

这里使用 qwen3-coder-plus 模型启动 Claude Code，使用下图中的提示词，可以看到各个工具可以被正确调用：

![](https://img.alicdn.com/imgextra/i2/O1CN01SbcpUQ1eNTVViZZBJ_!!6000000003859-2-tps-1220-970.png)

最后我们来对比 Qwen3 和 Claude Sonnet4 的效果差异，Qwen3 的效果看上去略优于 Claude Sonnet4，而且 Qwen3是一次成功的，Claude Sonnet4 第一次生成有包引用错误，提示后才修复。生成的代码在这里：
[https://gist.github.com/johnlanni/4e6f84eb1fb676c45a6ac14b69ca2db6](https://gist.github.com/johnlanni/4e6f84eb1fb676c45a6ac14b69ca2db6)

### Qwen3
![](https://img.alicdn.com/imgextra/i4/O1CN01FMO6Vi1ywY9dfflQm_!!6000000006643-1-tps-982-554.gif)

### Claude Sonnet 4
![](https://img.alicdn.com/imgextra/i3/O1CN01hfptAm1wFNaehtrUY_!!6000000006278-1-tps-982-554.gif)

## 

