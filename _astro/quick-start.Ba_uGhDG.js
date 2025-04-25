const e="en/quick-start.md",t="ai",a="en/quick-start",s=`
This guide provides a quick deployment method for the Higress AI Gateway using **Docker**. If you need to use other deployment methods (such as standard Kubernetes clusters or local Kubernetes clusters), please refer to the [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/).

Achieve Remote MCP Server hosting based on Higress AI Gateway, please refer to [MCP Server Quick Start](../ai/mcp-quick-start.md).

# Install Higress AI Gateway

In your local console, execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the API-KEYs for model providers; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)



If your current port is occupied and need to use another port, download the installer script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify *DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*, and then execute the script using bash.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741059869116-ab053c2c-0aaf-451b-8cad-21ac9664c28d.png)



After the deployment is completed, the following command display will appear.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742801837367-13136bd3-0481-4569-a739-3c988297d6e4.png)

Each \`AI Service Provider\` can independently configure token failover strategies. When the number of abnormal responses from a particular authentication token exceeds the threshold, Higress will pause requests using that token until subsequent health check requests receive a certain number of normal responses.



![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742801879234-bf9d23ff-6a61-40ff-bcae-cabf5dbb3091.png)



In the \`AI Route Config\`, you can configure domain, model match types, fallback configurations, and allowed consumers for different routes. You can also configure different authentication methods, rate-limiting strategies, and AI features such as RAG, Prompt templates, and semantic caching through \`Strategy\`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802115240-ab3ce046-f8db-486a-9fab-95ecefd15889.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802001349-179c2ec1-1a2b-45e5-b5ce-df2e927a6db3.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802137146-e3975a31-d91e-4184-aa00-7390243bdbee.png)



# Debugging
Open the system's built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):

\`\`\`yaml
curl 'http://localhost:8080/v1/chat/completions' \\
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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354509233-53a38717-3b3d-49cb-9c4e-7d9b6ec5c77d.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

Through these observation metrics, you can further compare the usage and latency of multiple models currently in use, helping developers optimize model strategies.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).
`,o={title:"QuickStart of Higress AI Gateway",description:"Docker based quickstart of AI gateway, integrating multi-model protocol proxy functions, observing model usage, and managing calling consumers",keywords:["Higress"],date:"2025-03-24",category:"article"},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/quick-start.md",rawData:void 0};export{r as _internal,s as body,t as collection,o as data,e as id,a as slug};
