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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)


默认情况下，网关所使用的HTTP服务端口为8080，HTTPS服务端口为8443，控制台的服务端口为8001。如您需要使用其他端口，则可使用下方的命令，按需修改其中的默认端口即可：

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | GATEWAY_HTTP_PORT=8080 GATEWAY_HTTPS_PORT=8443 CONSOLE_PORT=8001 bash
```

部署完成后，会出现以下界面：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png)



# 控制台配置
通过浏览器访问控制台界面 [http://localhost:8001/](http://localhost:8001/)，首次登录需要配置管理员及密码。

在AI服务提供者管理界面，可以配置已集成供应商的 API-KEY。当前已集成的供应商有阿里云、DeepSeek、Azure OpenAI、OpenAI、豆包等。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742801827479-cb1c559b-8be0-485c-a0e5-f91efb8e265a.png)



每个**AI服务提供商**都可以单独配置令牌降级策略，当某一认证令牌返回异常响应的数量超出阈值，Higress 将暂停使用该令牌发起请求，直至后续健康检测请求连续收到一定数量的正常响应。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742801862323-799a2480-78f9-45f2-a22e-ef6e3f40416b.png)

在**AI路由管理**界面，支持配置不同路由的域名、模型匹配方式、降级配置、请求消费者等。也可以通过策略，配置不同认证鉴权方式、限流策略等，也支持如 RAG、Prompt 模板、语义缓存等功能。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802104860-bd014ac1-ccf2-4a29-a22a-7af8c81e31df.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742801984540-2b14e062-4c47-4e49-a0e8-666d9eec369d.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802143799-0c759460-e4f6-467e-8e6b-708496ae67eb.png)

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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741074397724-5d96c60b-a61c-43cc-8eac-a1b9bebc244f.png)



# 结果观测
在**AI监控面板**界面，可以对 AI 请求进行观测。观测指标包括每秒输入输出 Token 数量、各供应商及模型 Token 使用数量等。

通过观测指标，可以进一步比较当前多个模型的使用情况及时延对比，帮助开发者进一步优化模型调用策略。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741077322520-55959b84-3f15-442c-a7fb-12cc333f1b0f.png)


> 如您在部署过程中遇到问题，可在 [Higress Github Issue](https://github.com/alibaba/higress/issues) 中留下您的信息。
> 
> 如您对 Higress 后续更新感兴趣，或希望给 Higress 提供反馈，欢迎 Star [Higress Github Repo](https://github.com/alibaba/higress/)。
