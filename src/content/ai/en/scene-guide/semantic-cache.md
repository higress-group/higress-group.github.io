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
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/)。



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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450604844-3e00e291-d68e-4873-a98a-6c98ada86b36.png)



## Configure Vector Cache Service
Semantic caching in Higress calls the text embedding service for embedding and the vector database service for vector storage and retrieval. Here, we use Alibaba Cloud BaiLian text-embedding-v3 text embedding service and Alibaba Cloud DashVector vector search service as examples. You need to activate the corresponding services and permissions in Alibaba Cloud console:[Alibaba Cloud BaiLian text-embedding](https://www.alibabacloud.com/help/en/model-studio/user-guide/embedding), [Alibaba Cloud DashVector](https://www.alibabacloud.com/help/en/vrs/latest/opening-service). Among these, the DashVector requires creating a cluster and a collection for storing embedded vectors. The configuration of the created collection specifies a vector dimension of 1024 (corresponding to text-embedding-v3) and a distance metric of Cosine.

Create a service source in the console's `Service Sources`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742385763061-e58ac0cd-7f18-430e-a032-954be26985fa.png)

Fill in the corresponding fields in the `Service Sources`:

+ Type: Domains
+ Service Port: 443
+ Domains: 
    - Alibaba Cloud text-embedding-v3 service: dashscope.aliyuncs.com
    - Alibaba Cloud DashVector service: Endpoint address of the corresponding cluster, viewed in *DashVector Console - Cluster - Collection*
+ Service Protocol: HTTPS
+ SNI: Same as the domains

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450867742-ede6faa3-cb64-4c59-81f5-361443facfa3.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450914179-3fa91e8f-8e01-4eb3-bbfc-d34e9a27a4eb.png)



## Configure AI Route Strategy
In the `AI Route Config`, configure strategy for aliyun and select `AI Cache`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450947408-bf16a2af-5d46-493c-b201-0bae5adefee9.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450959559-b42d33a6-9054-43db-86cf-0e7b3d4ea2c6.png)

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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742451004302-277663ed-4910-4bfc-8bae-72ee0333b1db.png)



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
+ What does star mean?

Sample response:

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742451101808-5dc19297-cf26-445d-9888-3c196abd4f3e.png)



# Observability
In the `AI Dashboard`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).