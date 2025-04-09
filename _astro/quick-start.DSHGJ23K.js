const e="en/quick-start.md",t="ai",s="en/quick-start",o=`
This guide provides a quick deployment method for the Higress AI Gateway using **Docker**. If you need to use other deployment methods (such as standard Kubernetes clusters or local Kubernetes clusters), please refer to the [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/).

Achieve Remote MCP Server hosting based on Higress AI Gateway, please refer to [MCP Server Quick Start](../ai/mcp-quick-start.md).

# Install Higress AI Gateway

In your local console, execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the API-KEYs for model providers; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1744194432517.png)



If your current port is occupied and need to use another port, download the installer script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify *DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*, and then execute the script using bash.

![](/img/1744194435084.png)



After the deployment is completed, the following command display will appear.

![](/img/1744194438393.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc.

![](/img/1744194441583.png)

Each \`AI Service Provider\` can independently configure token failover strategies. When the number of abnormal responses from a particular authentication token exceeds the threshold, Higress will pause requests using that token until subsequent health check requests receive a certain number of normal responses.



![](/img/1744194444344.png)



In the \`AI Route Config\`, you can configure domain, model match types, fallback configurations, and allowed consumers for different routes. You can also configure different authentication methods, rate-limiting strategies, and AI features such as RAG, Prompt templates, and semantic caching through \`Strategy\`.

![](/img/1744194447984.png)

![](/img/1744194450662.png)

![](/img/1744194453596.png)



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

![](/img/1744194456369.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

Through these observation metrics, you can further compare the usage and latency of multiple models currently in use, helping developers optimize model strategies.

![](/img/1744194459778.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).
`,n={title:"QuickStart of Higress AI Gateway",description:"Docker based quickstart of AI gateway, integrating multi-model protocol proxy functions, observing model usage, and managing calling consumers",keywords:["Higress"],date:"2025-03-24",category:"article"},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/quick-start.md",rawData:void 0};export{i as _internal,o as body,t as collection,n as data,e as id,s as slug};
