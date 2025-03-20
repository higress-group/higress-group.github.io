const e="en/scene-guide/semantic-cache.md",t="ai",o="en/scene-guide/semantic-cache",s=`# Scene Description
The AI gateway supports precise caching and semantic caching of inference result contexts. For common similar or repeated questions, it saves tokens and reduces latency, thereby enhancing the calling experience.

The AI gateway caches LLM responses in an in-memory database and improves inference latency and cost in the form of a gateway plugin. It automatically caches the historical conversations of corresponding users at the gateway level and automatically fills them into the context in subsequent conversations, thus enabling large models to understand the semantics of the context.

# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1742449853728.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](/img/1742449856746.png)



After the deployment is completed, the following command display will appear.

![](/img/1742449860618.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](/img/1742449864911.png)



## Configure Vector Cache Service
Semantic caching in Higress calls the text vectorization service for embedding and the vector database service for vector storage and retrieval. Here, we use Alibaba Cloud BaiLian text-embedding-v3 text embedding service and Alibaba Cloud DashVector vector search service as examples. You need to activate the corresponding services and permissions in Alibaba Cloud console:[Alibaba Cloud BaiLian text-embedding](https://help.aliyun.com/zh/model-studio/user-guide/embedding), [Alibaba Cloud DashVector](https://help.aliyun.com/product/2510217.html)\u3002Among these, the DashVector requires creating a cluster and a collection for storing embedded vectors. The configuration of the created collection specifies a vector dimension of 1024 (corresponding to text-embedding-v3) and a distance metric of Cosine.

Create a service source in the console's \`Service Source\`.

![](/img/1742449868873.png)

Fill in the corresponding fields in the \`Service Source\`:

+ Type: Domains
+ Service port: 443
+ Domains: 
    - Alibaba Cloud text-embedding-v3 service: dashscope.aliyuncs.com
    - Alibaba Cloud DashVector service: Endpoint address of the corresponding cluster, viewed in DashVector Console - Cluster - Collection
+ Service protocol: HTTPS
+ SNI: Same as the domains

![](/img/1742449872148.png)![](/img/1742449875727.png)



## Configure AI Route Strategy
In the \`AI Route Config\`, configure strategy for aliyun and select \`AI Cache\`.

![](/img/1742449879646.png)

![](/img/1742449883726.png)

In the \`AI Cache\`, fill in the following fields as a reference:

\`\`\`yaml
vector:
  type: dashvector
  serviceName: "aliyun-dashvector.dns"
  collectionID: "XXXXX"	# Name of the collection storing vectors
  serviceHost: "vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com"	# Endpoint address of the cluster
  apiKey: "sk-xxxxxxxxxxxxxxxxxx"	# api-key of DashVector
  threshold: 0.12

embedding:
  type: dashscope
  serviceName: "aliyun-embedding.dns"
  apiKey: "sk-xxxxxxxxxx"	#api-key of Alibaba Cloud text-embedding-v3
  model: "text-embedding-v3" #embedding model

\`\`\`

![](/img/1742449886946.png)



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
        "content": "What are stars?"
      }
    ]
  }'

\`\`\`



You can try the following questions:

+ What are stars?
+ What is a star?
+ What does the term star usually refer to?

Sample response:

![](/img/1742449890770.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](/img/1742449895228.png)

`,i={title:"Semantic Caching",description:"Open-source workflow for semantic caching",keywords:["Higress"],date:"2025-03-03",category:"article"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/semantic-cache.md",rawData:void 0};export{n as _internal,s as body,t as collection,i as data,e as id,o as slug};
