const e="en/scene-guide/token-management.md",t="ai",n="en/scene-guide/token-management",i=`
# Scene Description
The AI gateway can track the number of tokens used by large models and impose restrictions when consumers exceed their limits, thereby better managing user quotas for AI applications and providing data support for token usage analysis.

The token management scenario is based on consumer authentication, token rate limiting, and token quota plugins. It integrates observability capabilities to transform token resources into quantifiable, manageable, and optimizable service units. Based on custom strategies, it ensures the stability, security, and fairness of services under high concurrency.



# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1742449898549.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](/img/1742449903083.png)



After the deployment is completed, the following command display will appear.

![](/img/1742449906657.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](/img/1742449910594.png)



## Configure Consumers
In the consumer management interface of the console, add consumers for the current gateway to manage quotas and send requests.

![](/img/1742449914332.png)

Click to create a consumer, and based on Key Auth, create three consumers named aliyun-admin, aliyun-user1, and aliyun-user2. Authentication is performed based on the x-api-key field in the HTTP Header.

![](/img/1742449917569.png)

![](/img/1742449920844.png)



## Configure Redis Storage Service
Token information needs to be temporarily stored for access, so a Redis service needs to be created for caching. This example uses Docker to set up a local Redis service for Higress.


### Build Redis Service
1. Use the docker command to start a redis container

\`\`\`plain
docker run --name my-redis -p 6379:6379 -d redis
\`\`\`

2. Check the IP address of the my-redis service:
    1. Use \`docker network ls\` to get the ID of the bridge network.
![](/img/1742449924038.png)

    2. Use \`docker network inspect <network-id>\` to check if the my-redis container is connected to the bridge network.
       1. If not, connect it to the network using the \`docker network connect bridge my-redis\` command.
    
3. Get the IP address of the my-redis service.

![](/img/1742449926948.png)



### Configure Redis Service Source
Create a service source in the console's \`Service Source\`. Fill in the corresponding fields in the \`Service Source\`:

+ Type: Domains
+ Service port: 443
+ Domains: Concatenate the IP address of my-redis with the service portt
+ Service protocol: HTTP

![](/img/1742449930345.png)



## Configure AI Route Strategy
### Consumer Authentication Configuration
In the \`AI Route\`, configure consumers for aliyun and click Edit.

![](/img/1742449934231.png)

Enable request authentication and add the consumers created earlier.

![](/img/1742449937136.png)





### Token Quota Configuration
In the \`AI Route\`, configure token quota for aliyun and click Edit.

![](/img/1742449940827.png)

![](/img/1742449945044.png)

In the \`AI Quota\`plugin configuration interface, fill in the following fields as a reference:

\`\`\`yaml
redis_key_prefix: 'chat_quota:'
admin_consumer: aliyun-admin
admin_path: /quota
redis:
  service_name: local-redis.static
  service_port: 80
  timeout: 2000
\`\`\`

![](/img/1742449948035.png)

### Token Rate Limiting Configuration
In the \`AI Route\`, configure token rate limit for aliyun and click Edit.

![](/img/1742449951807.png)

![](/img/1742449955463.png)

In the \`AI Token Rate Limiting\` plugin configuration interface, fill in the following fields as a reference:

\`\`\`yaml
rule_items:
- limit_by_per_header: x-api-key
  limit_keys:
  - key: "*"
    token_per_minute: 5 # Limit to 5 tokens per minute
rule_name: "default_rule"

redis:
  service_name: local-redis.static
  service_port: 80
\`\`\`

![](/img/1742449958745.png)



# Debugging
Open the system's built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):

\`\`\`yaml
# Query quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'
  
# Refresh quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota/refresh' \\
  -d 'consumer=aliyun-user1&quota=100' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'
  
# Increase quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota/delta' \\
  -d 'consumer=aliyun-user1&value=100' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'

# Request, x-api-key is the credential for aliyun-user1
curl 'http://localhost:8080/v1/chat/completions' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "model": "qwen-max",
    "messages": [
      {
        "role": "user",
        "content": "Who are you?"
      }
    ]
  }'

\`\`\`

Sample response:

![](/img/1742449962806.png)

![](/img/1742449967707.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, and the token usage of consumers etc.

![](/img/1742449971639.png)

`,o={title:"Token Management",description:"Open-source workflow for token management",keywords:["Higress"],date:"2025-03-03",category:"article"},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/token-management.md",rawData:void 0};export{s as _internal,i as body,t as collection,o as data,e as id,n as slug};
