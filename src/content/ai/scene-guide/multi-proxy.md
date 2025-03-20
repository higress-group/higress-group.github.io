---
title: "多模型代理"
description: "多模型代理场景开源运行流程"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---
# 场景描述
AI网关能够将外部调用不同大模型的请求，通过统一的调用方式转发到内部对应的大模型上，使得后端模型调度更加灵活；Higress AI网关支持常用的100+个模型的统一协议转换，并支持模型级Fallback。

在大模型评测过程中，多模型代理功能可以构造统一数据集，将模型请求转发到后端模型，验证模型的效果；结合可观测插件，能够清晰地追踪不同模型的链路。

# 部署Higress.AI
本指南中基于docker部署，如您需要其他部署方式（k8s、helm等），请参照[快速开始](https://higress.cn/docs/latest/user/quickstart/)。



执行以下命令：

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
```

按照指引可以分别录入 Aliyun Dashscope或其他API-KEY；也可以键入回车后跳过，之后在控制台中修改。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)



上述命令的默认的HTTP的服务端口为8080，HTTPS的服务端口为8443，控制台的服务端口为8001。如您需要使用其他端口，可使用 `wget https://higress.cn/ai-gateway/install.sh`下载部署脚本后，修改*DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*结果；然后是使用bash执行脚本。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741059869116-ab053c2c-0aaf-451b-8cad-21ac9664c28d.png)



部署完成后，会出现以下界面：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png)



# 控制台配置
通过浏览器访问控制台界面[http://localhost:8001/](http://localhost:8001/)，首次登录需要配置管理员及密码。

在AI服务提供者管理界面，可以配置已集成供应商的API-KEY。当前已集成的供应商有阿里云、DeepSeek、Azure OpenAI、OpenAI、豆包等。这里我们配置上通义千问及DeepSeek的多模型代理。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741072990161-d335d2e4-e728-4bae-9ef1-541f400161df.png)





在AI路由管理中，为DeepSeek路由进行降级配置；当请求目标服务失败（如限流、访问失败等）时，降级到阿里云qwen-turbo模型。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742353981781-486b5569-9e37-4b6e-9d90-3958dbb9456c.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741073269504-fcac5d3c-8e41-4977-a25e-4fb0f9d19fe7.png)



# 调试
打开系统自带命令行，通过以下命令进行请求（如HTTP服务未部署在8080端口上，修改为对应端口即可）

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
在AI监控面板界面，可以对AI请求进行观测。观测指标包括每秒输入输出Token数量、各供应商/模型Token使用数量等。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741077322520-55959b84-3f15-442c-a7fb-12cc333f1b0f.png)

