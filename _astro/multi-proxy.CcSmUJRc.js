const e="en/scene-guide/multi-proxy.md",t="ai",o="en/scene-guide/multi-proxy",s=`# Scene Description
The AI gateway can forward external calls to different large models through a unified invocation method to the corresponding large models internally, making backend model scheduling more flexible. Higress AI Gateway supports the unified protocol conversion of over 100 commonly used models and also supports model-level fallback.

During the evaluation of large models, the multi-model proxy function can construct a unified dataset, forwarding model requests to backend models to verify the effectiveness of the models. Combined with observability plugins, it can clearly track the chains of different models.

# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1743748513383.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](/img/1743748516220.png)



After the deployment is completed, the following command display will appear.

![](/img/1743748519525.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen and DeepSeek.

![](/img/1743748523052.png)




In the \`AI Route Config\`, configure the fallback settings for the DeepSeek route. When the request to the target service fails (e.g., due to rate limiting or access failure), it will fallback to the Alibaba Cloud qwen-turbo model.

![](/img/1743748526549.png)

![](/img/1743748529931.png)



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

![](/img/1743748532897.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](/img/1743748536436.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).`,i={title:"Multi-Model Proxy",description:"Open-source workflow for multi-model proxy",keywords:["Higress"],date:"2025-03-03",category:"article"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/multi-proxy.md",rawData:void 0};export{n as _internal,s as body,t as collection,i as data,e as id,o as slug};
