---
title: "内容安全"
description: "内容安全场景开源运行流程"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---
# 场景描述
AI网关能够保护和大模型交互时的数据安全，一方面对于输入到外部模型的数据进行隐私保护，另一方面对于输出给用户的数据进行内容过滤。

AI网关可以对 API 请求和响应的数据进行加密、脱敏等处理，确保数据在传输和存储过程中的安全性。在大模型服务层处理这些数据保护任务可能会增加大模型的复杂性和计算负担，而在网关上统一处理，可以更好地保护用户的敏感信息，同时避免大模型直接接触敏感数据带来的安全风险。此外，通过内容安全等相关插件，过滤掉有害或不适当的内容，检测和阻止包含敏感数据的请求，并对 AI 生成内容进行质量和合规性审核。

# 部署Higress.AI
本指南中基于docker部署，如您需要其他部署方式（k8s、helm等），请参照 [快速开始](https://higress.cn/docs/latest/user/quickstart/)

执行以下命令：

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
```

> 注意：AI 网关的启动过程需要访问公网资源。请确保其运行环境具备外网访问条件。

按照指引可以分别录入 Aliyun Dashscope或其他API-KEY；也可以键入回车后跳过，之后在控制台中修改。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)

默认情况下，网关所使用的HTTP服务端口为8080，HTTPS服务端口为8443，控制台的服务端口为8001。如您需要使用其他端口，则可使用下方的命令，按需修改其中的默认端口即可：

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | GATEWAY_HTTP_PORT=8080 GATEWAY_HTTPS_PORT=8443 CONSOLE_PORT=8001 bash
```

部署完成后，会出现以下界面：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png)



# 控制台配置
通过浏览器访问控制台界面[http://localhost:8001/](http://localhost:8001/)，首次登录需要配置管理员及密码。

在AI服务提供者管理界面，可以配置已集成供应商的API-KEY。当前已集成的供应商有阿里云、DeepSeek、Azure OpenAI、OpenAI、豆包等。这里我们为阿里云配置API-KEY，如您在上一步中已经配置，则直接忽略。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082187334-4ffee05e-04d9-49c0-b3e9-aa40c1d4ce9c.png)



## 配置内容安全服务
Higress通过服务方式调用内容安全服务，这里以阿里云内容安全服务为例，需要在阿里云内容安全开通对应的服务及权限：[https://help.aliyun.com/document_detail/434034.html](https://help.aliyun.com/document_detail/434034.html)。

在控制台服务来源界面中，创建服务来源。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742385778415-b004e604-a95c-4b4f-b15f-74f9a6336691.png)

在服务来源的界面，填写对应的字段：

+ 类型：DNS域名
+ 服务端口：443
+ 域名列表：填写上述文档中对应的域名
+ 服务协议：HTTPS
+ SNI：和域名列表相同

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741146188864-43242a02-ca78-47a1-b0d5-dc238d22b966.png)



## 配置AI路由策略
在AI路由管理界面中，为阿里云配置插件策略，选择AI内容安全。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082325606-a8bed434-c49d-4daa-aba6-1a0e2bb8b7d8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741146462187-66f40d9b-531c-486c-8946-ba2af296ec65.png)



在AI内容安全配置界面中，参考以下字段进行填写：

```yaml
serviceName: aliyun-safety.dns	#创建的服务FQDN
servicePort: 443
serviceHost: green-cip.cn-hangzhou.aliyuncs.com
accessKey: "XXXXXXXXX" #阿里云用户对应AccessKey ID
secretKey: "XXXXXXXXX" #阿里云用户对应的AccessKey Secret
checkRequest: true	#是否打开检查请求
checkResponse: true	#是否打开检查响应
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741146275358-c0d3ba9e-9cc3-4363-b53c-418d7111c37c.png)





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
        "content": "花呗套现"
      }
    ]
  }'

```

请求结果示例，结果被拦截：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741150732225-186b8fba-cfe7-4e59-94bf-d5fc90004bd7.png)



# 结果观测
在AI监控面板界面，可以对AI请求进行观测。观测指标包括每秒输入输出Token数量、各供应商/模型Token使用数量等。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741077322520-55959b84-3f15-442c-a7fb-12cc333f1b0f.png)


> 如您在部署过程中遇到问题，可在 [Higress Github Issue](https://github.com/alibaba/higress/issues) 中留下您的信息。
> 
> 如您对 Higress 后续更新感兴趣，或希望给 Higress 提供反馈，欢迎 Star [Higress Github Repo](https://github.com/alibaba/higress/)。