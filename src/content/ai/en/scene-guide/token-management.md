---
title: "Token Management"
description: "Open-source workflow for token management"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---

# Scene Description
The AI gateway can track the number of tokens used by large models and impose restrictions when consumers exceed their limits, thereby better managing user quotas for AI applications and providing data support for token usage analysis.

The token management scenario is based on consumer authentication, token rate limiting, and token quota plugins. It integrates observability capabilities to transform token resources into quantifiable, manageable, and optimizable service units. Based on custom strategies, it ensures the stability, security, and fairness of services under high concurrency.



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



## Configure Consumers
In the consumer management interface of the console, add consumers for the current gateway to manage quotas and send requests.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741163343009-d86b6ab1-ac65-4bff-85d5-b10470cdb5d2.png)

Click to create a consumer, and based on Key Auth, create three consumers named aliyun-admin, aliyun-user1, and aliyun-user2. Authentication is performed based on the x-api-key field in the HTTP Header.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741163423118-136460aa-2343-4d21-a650-2582cc54f7a5.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741163549425-932c37ba-dac9-479f-a8e4-4da178f2923b.png)



## Configure Redis Storage Service
Token information needs to be temporarily stored for access, so a Redis service needs to be created for caching. This example uses Docker to set up a local Redis service for Higress.


### Build Redis Service
1. Use the docker command to start a redis container

```plain
docker run --name my-redis -p 6379:6379 -d redis
```

2. Check the IP address of the my-redis service:
    1. Use `docker network ls` to get the ID of the bridge network.
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165645724-273cc80e-8999-4411-ad0e-5af7a5aebf08.png)

    2. Use `docker network inspect <network-id>` to check if the my-redis container is connected to the bridge network.
       1. If not, connect it to the network using the `docker network connect bridge my-redis` command.
    
3. Get the IP address of the my-redis service.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165741053-28f5caa1-e1d3-43ff-bfd0-af244893d8ad.png)



### Configure Redis Service Source
Create a service source in the console's `Service Sources`. Fill in the corresponding fields in the `Service Sources`:

+ Type: Domains
+ Service port: 443
+ Domains: Concatenate the IP address of my-redis with the service portt
+ Service protocol: HTTP

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165841319-2c1310d2-253c-4127-8464-326c5dbbf305.png)



## Configure AI Route Strategy
### Consumer Authentication Configuration
In the `AI Route`, configure consumers for aliyun and click Edit.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741166983812-8a2d6ce9-4c09-4415-a591-2a7fe6eea38f.png)

Enable request authentication and add the consumers created earlier.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741166960430-81abef16-03f3-4580-8bd9-2c0b26d86763.png)





### Token Quota Configuration
In the `AI Route`, configure token quota for aliyun and click Edit.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082325606-a8bed434-c49d-4daa-aba6-1a0e2bb8b7d8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741167450711-b9d1b3da-b821-4e0a-88bf-4e48453387e1.png)

In the `AI Quota`plugin configuration interface, fill in the following fields as a reference:

```yaml
redis_key_prefix: 'chat_quota:'
admin_consumer: aliyun-admin
admin_path: /quota
redis:
  service_name: local-redis.static
  service_port: 80
  timeout: 2000
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741167559447-bd6ecc5b-9c07-4fdc-b006-526399707731.png)

### Token Rate Limiting Configuration
In the `AI Route`, configure token rate limit for aliyun and click Edit.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741082325606-a8bed434-c49d-4daa-aba6-1a0e2bb8b7d8.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741190894349-a7790310-3f03-4fe6-80d8-e2b48bcce815.png)

In the `AI Token Rate Limiting` plugin configuration interface, fill in the following fields as a reference:

```yaml
rule_items:
- limit_by_per_header: x-api-key
  limit_keys:
  - key: "*"
    token_per_minute: 5 # Limit to 5 tokens per minute
rule_name: "default_rule"

redis:
  service_name: local-redis.static
  service_port: 80
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741190983553-93b83b07-345d-4315-a7e6-8269b37dd933.png)



# Debugging
Open the system's built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):

```yaml
# Query quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1' \
  -H 'x-api-key:xxxxxxxxxxxx' \
  -H 'x-higress-llm-model: qwen-max'
  
# Refresh quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota/refresh' \
  -d 'consumer=aliyun-user1&quota=100' \
  -H 'x-api-key:xxxxxxxxxxxx' \
  -H 'x-higress-llm-model: qwen-max'
  
# Increase quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota/delta' \
  -d 'consumer=aliyun-user1&value=100' \
  -H 'x-api-key:xxxxxxxxxxxx' \
  -H 'x-higress-llm-model: qwen-max'

# Request, x-api-key is the credential for aliyun-user1
curl 'http://localhost:8080/v1/chat/completions' \
  -H 'x-api-key:xxxxxxxxxxxx' \
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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741191138320-6be5d195-a26c-403d-a260-0588530d5813.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741191958688-f724afa7-0dfc-43be-9798-8feb7fcf1c37.png)



# Observability
In the `AI Dashboard`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, and the token usage of consumers etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741191602518-6e6009a6-ee53-4450-9066-4a2dcc312bbf.png)

