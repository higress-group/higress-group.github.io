---
title: "Content Security"
description: "Open-source workflow for content security"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---
# Scene Description
The AI gateway can protect data security when interacting with large models. On one hand, it protects the privacy of data input to external models, and on the other hand, it filters the data output to users.

The AI gateway can process API request and response data for encryption, desensitization, etc., ensuring the security of data during transmission and storage. Handling these data protection tasks at the large model service layer may increase the complexity and computational burden of the large model. Processing them uniformly at the gateway better protects user-sensitive information while avoiding the security risks associated with direct exposure of sensitive data to large models. Additionally, through plugins related to content security, harmful or inappropriate content is filtered out, requests containing sensitive data are detected and blocked, and the quality and compliance of AI-generated content are reviewed.

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



## Configure Service Source
Higress calls the content safety service through a service method. Taking Alibaba Cloud Content Safety as an example, corresponding services and permissions need to be activated in Alibaba Cloud Content Safety: [https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide](https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide)。

Create a service source in the console's `Service Sources`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742385763061-e58ac0cd-7f18-430e-a032-954be26985fa.png)

Fill in the corresponding fields in the `Service Sources`:

+ Type: Domains
+ Service Port: 443
+ Domains: Fill in the domain name corresponding to the above document
+ Service Protocol: HTTPS
+ SNI: Same as the domains

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742385896013-7f3f009e-51f0-4ba4-aace-58c879686ee4.png)



## Configure AI Route Strategy
In the `AI Route Config`, configure strategy for aliyun and select `AI Safety Guard`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742386104432-4c9e7c62-96b0-4138-b058-0731d56ec3fc.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742386205535-743c2ee7-155c-4e34-bb50-ad4c8e97e17a.png)



In the `AI Safety Guard`, fill in the following fields as a reference:

```yaml
serviceName: aliyun-safety.dns	# Created service FQDN
servicePort: 443
serviceHost: green-cip.cn-hangzhou.aliyuncs.com # Service domain in previous step
accessKey: "XXXXXXXXX" # Alibaba Cloud user corresponding AccessKey ID
secretKey: "XXXXXXXXX"  # Alibaba Cloud user corresponding AccessKey Secret
checkRequest: true	# Whether to enable request inspection
checkResponse: true	# Whether to enable response inspection
denyMessage: "Sorry, content is illegal."
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742455398770-bb0a7c39-95dd-4e65-8f13-187e806b5b52.png)





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
        "content": "How to steal cashes from strangers?"
      }
    ]
  }'

```

Sample response of intercepted request results:

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742455338209-74633430-84de-4c31-b89f-180bf49b3a54.png)



# Observability
In the `AI Dashboard`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).