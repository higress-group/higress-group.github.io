---
title: "QuickStart of Higress AI Gateway"
description: "Docker based quickstart of AI gateway, integrating multi-model protocol proxy functions, observing model usage, and managing calling consumers"
date: "2025-03-24"
category: "article"
keywords: ["Higress"]
authors: "子釉"
---

This guide provides a quick deployment method for the Higress AI Gateway using **Docker**. If you need to use other deployment methods (such as standard Kubernetes clusters or local Kubernetes clusters), please refer to the [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/).

Achieve Remote MCP Server hosting based on Higress AI Gateway, please refer to [MCP Server Quick Start](../ai/mcp-quick-start.md).

# Install Higress AI Gateway

In your local console, execute the following command:

```bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
```

> Note: During start-up, AI Gateway needs to access Internet resources. Please make sure its runtime environment has proper Internet access.

Follow the prompts to enter the API-KEYs for model providers; you can also press Enter to skip and modify it later in the console. You can also press `Enter` to skip and modify it later in the console.

![](https://img.alicdn.com/imgextra/i4/O1CN01fYm6zP1jwLmK3OgTC_!!6000000004612-2-tps-1422-760.png)



If your current port is occupied and need to use another port, download the installer script using `wget https://higress.cn/ai-gateway/install.sh`, modify *DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*, and then execute the script using bash.

![](https://img.alicdn.com/imgextra/i3/O1CN01LLnBD11RRW1uTxMcD_!!6000000002108-2-tps-1562-248.png)



After the deployment is completed, the following command display will appear.

![](https://img.alicdn.com/imgextra/i3/O1CN01Wn8sOi1FpXPk6M0qC_!!6000000000536-2-tps-2472-1746.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the `LLM Provider Management`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc.

![](https://img.alicdn.com/imgextra/i4/O1CN01LqXNkh23A4LEG0phz_!!6000000007214-2-tps-3020-1650.png)

Each `AI Service Provider` can independently configure token failover strategies. When the number of abnormal responses from a particular authentication token exceeds the threshold, Higress will pause requests using that token until subsequent health check requests receive a certain number of normal responses.



![](https://img.alicdn.com/imgextra/i2/O1CN01WDBtzz1UcSL0dfVGa_!!6000000002538-2-tps-1150-1634.png)



In the `AI Route Config`, you can configure domain, model match types, fallback configurations, and allowed consumers for different routes. You can also configure different authentication methods, rate-limiting strategies, and AI features such as RAG, Prompt templates, and semantic caching through `Strategy`.

![](https://img.alicdn.com/imgextra/i4/O1CN01FUZsQu25PIkGzmWvl_!!6000000007518-2-tps-3042-1658.png)

![](https://img.alicdn.com/imgextra/i1/O1CN01l9UAjD1EP8yPxT4YX_!!6000000000343-2-tps-1132-1632.png)

![](https://img.alicdn.com/imgextra/i1/O1CN01sBR3XG28VChHgegNF_!!6000000007937-2-tps-3048-1676.png)



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

![](https://img.alicdn.com/imgextra/i3/O1CN01fS4tpH1P9ze4z7NrE_!!6000000001799-2-tps-2828-1066.png)



# Observability
In the `AI Dashboard`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

Through these observation metrics, you can further compare the usage and latency of multiple models currently in use, helping developers optimize model strategies.

![](https://img.alicdn.com/imgextra/i3/O1CN01xz73LG1xEkhGq11F7_!!6000000006412-2-tps-2606-1362.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).

---

# Next Steps

Congratulations on deploying the Higress AI Gateway! Here's what you can do next:

| Scenario | Recommended Action |
|----------|-------------------|
| **Configure more models** | Add more provider API-KEYs in the AI Service Provider section of the console |
| **Set up Token rate limiting** | Configure consumer quotas via AI Route Management to control costs |
| **Connect MCP Server** | Check [MCP Server Quick Start](../ai/mcp-quick-start.md) to host your MCP services |
| **Learn more features** | Visit [AI Gateway Product Page](/en/ai-gateway/) for the full capabilities |
