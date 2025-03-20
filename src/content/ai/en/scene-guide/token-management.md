---
title: "Token Management"
description: "Open-source workflow for token management"
date: "2025-03-03"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---

# Scene Description
The AI gateway can track the number of tokens used by LLMs and impose restrictions when consumers exceed their limits, thereby better managing user quotas for AI applications and providing data support for token usage analysis.

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
In the `Consumer Management` of the console, create consumers for the current gateway to manage quotas and send requests.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452028233-1d3c95dc-a3c7-4b9b-b618-74ec3a714bfc.png)

Click to create a consumer, and based on `Key Auth`, create three consumers named aliyun-admin, aliyun-user1, and aliyun-user2. Authentication is performed based on the `x-api-key` field in the HTTP Header.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452054997-d4360ca9-56c0-43c7-96b2-beea7dfc68a4.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452065377-5f92dbb5-7f90-4739-92a3-aec98d0f37ca.png)



## Configure Redis Storage Service
A Redis service needs to be created for caching token usages. This example uses Docker to set up a local Redis service for Higress.


### Build Redis Service
1. Use the docker command to start a redis container

```plain
docker run --name my-redis -p 6379:6379 -d redis
```

2. Check the IP address of the my-redis service:
    1. Use `docker network ls` to get the NETWORK ID of the bridge network.
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165645724-273cc80e-8999-4411-ad0e-5af7a5aebf08.png)

    2. Use `docker network inspect <network-id>` to check if the my-redis container is connected to the bridge network.
       1. If not, connect it to the network using the `docker network connect bridge my-redis` command.
    
3. Get the IP address of the my-redis service.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741165741053-28f5caa1-e1d3-43ff-bfd0-af244893d8ad.png)



### Configure Redis Service Source
Create a service source in the console's `Service Sources`. Fill in the corresponding fields in the `Service Sources`:

+ Type: Static Addresses
+ Service Address: Concatenate the IP address of my-redis with the service port
+ Service Protocol: HTTP

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452386465-2e205d8f-b17f-456a-9cb2-deb568db42a2.png)



## Configure AI Route Strategy
### Consumer Authentication Configuration
In the `AI Route Config`, configure consumers for aliyun and click Edit.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452410068-b886501f-af6b-4cae-b02e-f87e382750ed.png)

Enable request authentication and add the consumers created earlier.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452426573-472f117b-90b3-47e7-9eb5-6bace01e0ac4.png)





### Token Quota Configuration
In the `AI Route Config`, click Edit and configure `AI Quota` for aliyun .

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452472992-fd844a9a-da55-4869-80d5-c9f99830a1db.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452500612-52b86b66-d398-4803-89aa-0026be4ed797.png)

Fill in the following fields as a reference in `AI Quota` configuration:

```yaml
redis_key_prefix: 'chat_quota:'
admin_consumer: aliyun-admin
admin_path: /quota
redis:
  service_name: local-redis.static
  service_port: 80
  timeout: 2000
```

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452707375-032f4170-1be7-4bac-b6e6-fbbef8124703.png)

### Token Rate Limiting Configuration
In the `AI Route Config`, click Edit and configure `AI Token Rate Limit` for aliyun.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452472992-fd844a9a-da55-4869-80d5-c9f99830a1db.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452792408-92b7cf88-dbc0-488a-a67a-bef884a4006b.png)

Fill in the following fields as a reference in `AI Token Rate Limit` configuration:

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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742452808674-8cfa2056-f58c-404d-bfb8-82bfda72b3f2.png)



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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742453159934-a8b42e48-36b8-44eb-8f06-bd50a37184ff.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742453303331-a216e70b-854f-4e6c-935a-da1458a002b5.png)



# Observability
In the `AI Dashboard`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, and the token usage of consumers etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742453607727-3136de22-22d2-48ef-bdc1-b9a015abe83d.png)

