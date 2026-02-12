---
title: "一键部署 Higress AI 网关"
description: "docker一键部署 AI 网关,接入多模型协议代理功能,观测模型使用情况,管理调用消费者"
date: "2025-03-24"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---

本指南基于 docker 提供 Higress AI 网关一键快速部署的方式，如您需要使用其他部署方式（如标准k8s集群、本地k8s集群等），请参照 [快速开始](https://higress.cn/docs/latest/user/quickstart/)。

基于 Higress AI 网关实现 Remote MCP Server 托管，请参照[MCP Server 快速开始](../ai/mcp-quick-start.md)。

# 安装 Higress AI 网关

在本地控制台，执行以下命令：

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
```

> 注意：AI 网关的启动过程需要访问公网资源。请确保其运行环境具备外网访问条件。

按照指引可以分别录入模型供应商的 API-KEY ；也可以键入回车后跳过，之后在控制台中修改。

![](https://img.alicdn.com/imgextra/i4/O1CN01fYm6zP1jwLmK3OgTC_!!6000000004612-2-tps-1422-760.png)



如您当前端口已被占用，需要使用其他端口，可使用 `wget https://higress.cn/ai-gateway/install.sh`命令下载部署脚本后，修改*DEFAULT_GATEWAY_HTTP_PORT_/_DEFAULT_GATEWAY_HTTPS_PORT_/_DEFAULT_CONSOLE_PORT*；然后使用bash执行脚本。

![](https://img.alicdn.com/imgextra/i3/O1CN01LLnBD11RRW1uTxMcD_!!6000000002108-2-tps-1562-248.png)



部署完成后，会出现以下界面：

![](https://img.alicdn.com/imgextra/i3/O1CN01Wn8sOi1FpXPk6M0qC_!!6000000000536-2-tps-2472-1746.png)



# 控制台配置
通过浏览器访问控制台界面 [http://localhost:8001/](http://localhost:8001/)，首次登录需要配置管理员及密码。

在AI服务提供者管理界面，可以配置已集成供应商的 API-KEY。当前已集成的供应商有阿里云、DeepSeek、Azure OpenAI、OpenAI、豆包等。

![](https://img.alicdn.com/imgextra/i4/O1CN01JwDpA41KFseqAIxhg_!!6000000001135-2-tps-3034-1654.png)



每个**AI服务提供商**都可以单独配置令牌降级策略，当某一认证令牌返回异常响应的数量超出阈值，Higress 将暂停使用该令牌发起请求，直至后续健康检测请求连续收到一定数量的正常响应。

![](https://img.alicdn.com/imgextra/i4/O1CN01kXIVEn1qokW1tuKhO_!!6000000005543-2-tps-1146-1660.png)

在**AI路由管理**界面，支持配置不同路由的域名、模型匹配方式、降级配置、请求消费者等。也可以通过策略，配置不同认证鉴权方式、限流策略等，也支持如 RAG、Prompt 模板、语义缓存等功能。

![](https://img.alicdn.com/imgextra/i1/O1CN01IYtCA3209CkLhXSm7_!!6000000006806-2-tps-3028-1670.png)

![](https://img.alicdn.com/imgextra/i3/O1CN01zl8X9O1tWps6xhTjZ_!!6000000005910-2-tps-1158-1660.png)

![](https://img.alicdn.com/imgextra/i2/O1CN014TDXMe1eaIdAIaVel_!!6000000003887-2-tps-3042-1672.png)

# 调试
打开系统自带命令行，通过以下命令进行请求（如 HTTP 服务未部署在8080端口上，修改为对应端口即可）

```yaml
curl 'http://localhost:8080/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "你是谁"
      }
    ]
  }'

```

请求结果示例：

![](https://img.alicdn.com/imgextra/i4/O1CN01NLvfue1xrDxyjiMB9_!!6000000006496-2-tps-3168-1102.png)



# 结果观测
在**AI监控面板**界面，可以对 AI 请求进行观测。观测指标包括每秒输入输出 Token 数量、各供应商及模型 Token 使用数量等。

通过观测指标，可以进一步比较当前多个模型的使用情况及时延对比，帮助开发者进一步优化模型调用策略。

![](https://img.alicdn.com/imgextra/i1/O1CN018OYZ0J1Q22NgVvPmU_!!6000000001917-2-tps-3350-1574.png)


> 如您在部署过程中遇到问题，可在 [Higress Github Issue](https://github.com/alibaba/higress/issues) 中留下您的信息。
> 
> 如您对 Higress 后续更新感兴趣，或希望给 Higress 提供反馈，欢迎 Star [Higress Github Repo](https://github.com/alibaba/higress/)。

---

# 下一步

恭喜你完成了 Higress AI 网关的部署！接下来你可以：

| 场景 | 推荐操作 |
|------|----------|
| **配置更多模型** | 在控制台的 AI 服务提供者中添加更多供应商的 API-KEY |
| **设置 Token 限流** | 通过 AI 路由管理配置消费者额度，控制调用成本 |
| **接入 MCP Server** | 查看 [MCP Server 快速开始](../ai/mcp-quick-start.md) 托管你的 MCP 服务 |
| **了解更多功能** | 访问 [AI 网关产品介绍](/ai-gateway/) 了解完整能力 |
