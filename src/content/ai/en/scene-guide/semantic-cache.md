---
title: "Semantic Caching"
description: "Open-source workflow for semantic caching"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---
# Scene Description
The AI gateway supports precise caching and semantic caching of inference result contexts. For common similar or repeated questions, it saves tokens and reduces latency, thereby enhancing the calling experience.

The AI gateway caches LLM responses in an in-memory database and improves inference latency and cost in the form of a gateway plugin. It automatically caches the historical conversations of corresponding users at the gateway level and automatically fills them into the context in subsequent conversations, thus enabling large models to understand the semantics of the context.

# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/docs/latest/user/quickstart/)。



Execute the following command:

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
```

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press `Enter` to skip and modify it later in the console.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using `wget https://higress.cn/ai-gateway/install.sh`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741059869116-ab053c2c-0aaf-451b-8cad-21ac9664c28d.png)



After the deployment is completed, the following command display will appear.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the `LLM Provider Management`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742353878452-5c534a42-df83-4061-8077-22131be501ff.png)



## Configure Vector Cache Service
Semantic caching in Higress calls the text vectorization service for embedding and the vector database service for vector storage and retrieval. Here, we use Alibaba Cloud BaiLian text-embedding-v3 text embedding service and Alibaba Cloud DashVector vector search service as examples. You need to activate the corresponding services and permissions in Alibaba Cloud console:[Alibaba Cloud BaiLian text-embedding](https://help.aliyun.com/zh/model-studio/user-guide/embedding), [Alibaba Cloud DashVector](https://help.aliyun.com/product/2510217.html)。Among these, the DashVector requires creating a cluster and a collection for storing embedded vectors. The configuration of the created collection specifies a vector dimension of 1024 (corresponding to text-embedding-v3) and a distance metric of Cosine.

Create a service source in the console's `Service Source`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742385763061-e58ac0cd-7f18-430e-a032-954be26985fa.png)

Fill in the corresponding fields in the `Service Source`:

+ Type: Domains
+ Service port: 443
+ Domains: 
    - Alibaba Cloud text-embedding-v3 service: dashscope.aliyuncs.com
    - Alibaba Cloud DashVector service: Endpoint address of the corresponding cluster, viewed in DashVector Console - Cluster - Collection
+ Service protocol: HTTPS
+ SNI: Same as the domains

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741158247961-49ea8c56-2e1b-4c0f-87a7-426acfafef47.png)![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741158647414-5582124c-0353-454b-b3a2-0c4cbebd4ec1.png)



## Configure AI Route Strategy
In the `AI Route Config`, configure strategy for aliyun and select `AI Cache`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082325606-a8bed434-c49d-4daa-aba6-1a0e2bb8b7d8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741159081909-6b3665ca-a0a9-47a4-b2ca-f4aef8538ec7.png)

In the `AI Cache`, fill in the following fields as a reference:

```yaml
vector:
  type: dashvector
  serviceName: "aliyun-dashvector.dns"
  collectionID: "XXXXX"	# Name of the collection storing vectors
  serviceHost: "vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com"	# Endpoint address of the cluster
  apiKey: "sk-xxxxxxxxxxxxxxxxxx"	# api-key of DashVector
  threshold: 0.12

embedding:
  type: dashscope
  serviceName: "aliyun-embedding.dns"
  apiKey: "sk-xxxxxxxxxx"	#api-key of Alibaba Cloud text-embedding-v3
  model: "text-embedding-v3" #embedding model

```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741159265275-a695f6d5-f614-4548-98d0-7c8cd649638f.png)



# Debugging
Open the system's built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):

```yaml
curl 'http://localhost:8080/v1/chat/completions' \
  -H 'Content-Type: application/json' \
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "What are stars?"
      }
    ]
  }'

```



You can try the following questions:

+ What are stars?
+ What is a star?
+ What does the term star usually refer to?

Sample response:

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741159983902-4f27c181-68d4-4bff-bad1-81fff4514038.png)



# Observability
In the `AI Dashboard`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png)

