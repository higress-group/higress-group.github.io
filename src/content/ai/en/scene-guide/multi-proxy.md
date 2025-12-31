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
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/)。



Execute the following command:

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
```

> Note: During start-up, AI Gateway needs to access Internet resources. Please make sure its runtime environment has proper Internet access.

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press `Enter` to skip and modify it later in the console.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)

The gateway uses 8080 as the default HTTP port, 8443 as the default HTTPS port. And the default port of console is 8001. If you'd like to use other ports, please use the command below with port number(s) changed accordingly.

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | GATEWAY_HTTP_PORT=8080 GATEWAY_HTTPS_PORT=8443 CONSOLE_PORT=8001 bash
```

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


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).