---
title: "语义缓存"
description: "语义缓存场景开源运行流程"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---
# 场景描述
AI网关支持精确缓存及语义缓存推理的结果上下文，对于常见的相似/重复的问题节省Token并减小时延，从而提升调用体验。

AI网关通过在内存数据库中缓存 LLM 响应，并以网关插件的形式来改善推理的延迟和成本，在网关层自动缓存对应用户的历史对话，在后续对话中自动填充到上下文，从而实现大模型对上下文语义的理解。

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

在AI服务提供者管理界面，可以配置已集成供应商的API-KEY。当前已集成的供应商有阿里云、DeepSeek、Azure OpenAI、OpenAI、豆包等。这里我们为阿里云配置API-KEY，如您在上一步中已经配置，则直接忽略。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082187334-4ffee05e-04d9-49c0-b3e9-aa40c1d4ce9c.png)



## 配置向量缓存服务
Higress语义缓存调用文本向量化服务进行embedding、调用向量数据库服务进行向量存储及检索；这里以阿里云百炼text-embedding-v3文本向量化服务、阿里云DashVector向量检索服务为例，需要在阿里云内容安全开通对应的服务及权限：[阿里云百炼Embedding](https://help.aliyun.com/zh/model-studio/user-guide/embedding)、[向量检索服务](https://help.aliyun.com/product/2510217.html)。其中，向量检索服务需要创建cluster及存储向量的collection；创建的collection配置的向量维度为1024（text-embedding-v3对应维度），度量距离为Cosine。

在控制台服务来源界面中，创建服务来源。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082407459-06808672-bfa1-4423-bf3f-25b4ad46cfb5.png)

在服务来源的界面，填写对应的字段：

文本向量化服务：

+ 类型：DNS域名
+ 服务端口：443
+ 域名列表：
    - 阿里云文本向量化服务：dashscope.aliyuncs.com
    - 阿里云向量数据库服务：对应cluster的端点地址，在_向量检索服务控制台-cluster-collection_中查看
+ 服务协议：HTTPS
+ SNI：和域名列表相同

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741158247961-49ea8c56-2e1b-4c0f-87a7-426acfafef47.png)![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741158647414-5582124c-0353-454b-b3a2-0c4cbebd4ec1.png)



## 配置AI路由策略
在AI路由管理界面中，为阿里云配置插件策略，选择AI缓存。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082325606-a8bed434-c49d-4daa-aba6-1a0e2bb8b7d8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741159081909-6b3665ca-a0a9-47a4-b2ca-f4aef8538ec7.png)

在AI缓存插件配置界面中，参考以下字段填写：

```yaml
vector:
  type: dashvector
  serviceName: "aliyun-dashvector.dns"
  collectionID: "XXXXX"	#存储向量的collection名称
  serviceHost: "vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com"	#存储cluster的端点地址
  apiKey: "sk-xxxxxxxxxxxxxxxxxx"	#向量检索api-key
  threshold: 0.12

embedding:
  type: dashscope
  serviceName: "aliyun-embedding.dns"
  apiKey: "sk-xxxxxxxxxx"	#阿里云百炼api-key
  model: "text-embedding-v3" #使用的embedding模型

```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741159265275-a695f6d5-f614-4548-98d0-7c8cd649638f.png)



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
        "content": "星星是什么"
      }
    ]
  }'

```



可以尝试以下问题：

+ 星星是什么
+ 什么是星星
+ 星星通常指什么

请求结果示例：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741159983902-4f27c181-68d4-4bff-bad1-81fff4514038.png)



# 结果观测
在AI监控面板界面，可以对AI请求进行观测。观测指标包括每秒输入输出Token数量、各供应商/模型Token使用数量等。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741077322520-55959b84-3f15-442c-a7fb-12cc333f1b0f.png)

