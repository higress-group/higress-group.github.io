---
title: "Multi-Model Proxy"
description: "Open-source workflow for multi-model proxy"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---
# Scene Description
The AI gateway can forward external calls to different large models through a unified invocation method to the corresponding large models internally, making backend model scheduling more flexible. Higress AI Gateway supports the unified protocol conversion of over 100 commonly used models and also supports model-level fallback.

During the evaluation of large models, the multi-model proxy function can construct a unified dataset, forwarding model requests to backend models to verify the effectiveness of the models. Combined with observability plugins, it can clearly track the chains of different models.

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

In the `LLM Provider Management`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen and DeepSeek.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742353878452-5c534a42-df83-4061-8077-22131be501ff.png)




In the `AI Route Config`, configure the fallback settings for the DeepSeek route. When the request to the target service fails (e.g., due to rate limiting or access failure), it will fallback to the Alibaba Cloud qwen-turbo model.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742353967779-6091c4f0-1a72-46af-8a0d-494564c398f8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354050172-98109fda-ae0c-4993-ad2e-d0f1fe6ecaaa.png)



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
        "content": "Who are you?"
      }
    ]
  }'

```

Sample response:

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354509233-53a38717-3b3d-49cb-9c4e-7d9b6ec5c77d.png)



# Observability
In the `AI Dashboard`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png)

