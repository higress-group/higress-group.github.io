import{c,__tla as p}from"./astro-component.m4CCZO6J.js";import{r as d,m as h,u as y,__tla as u}from"./constant.Bv82Twhq.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let s,o,a,t,r,l,n,f=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let e;e=`<h1 id="scene-description">Scene Description</h1>
<p>The AI gateway supports precise caching and semantic caching of inference result contexts. For common similar or repeated questions, it saves tokens and reduces latency, thereby enhancing the calling experience.</p>
<p>The AI gateway caches LLM responses in an in-memory database and improves inference latency and cost in the form of a gateway plugin. It automatically caches the historical conversations of corresponding users at the gateway level and automatically fills them into the context in subsequent conversations, thus enabling large models to understand the semantics of the context.</p>
<h1 id="deploy-higress-ai-gateway">Deploy Higress AI Gateway</h1>
<p>This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to <a href="https://higress.cn/en/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Quick Start</a>\u3002</p>
<p>Execute the following command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press <code dir="auto">Enter</code> to skip and modify it later in the console.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png" alt="" referrerpolicy="no-referrer"></p>
<p>The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741059869116-ab053c2c-0aaf-451b-8cad-21ac9664c28d.png" alt="" referrerpolicy="no-referrer"></p>
<p>After the deployment is completed, the following command display will appear.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="console-configuration">Console Configuration</h1>
<p>Access the Higress console via a browser at <a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>. The first login requires setting up an administrator account and password.</p>
<p>In the <code dir="auto">LLM Provider Management</code>, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450604844-3e00e291-d68e-4873-a98a-6c98ada86b36.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-vector-cache-service">Configure Vector Cache Service</h2>
<p>Semantic caching in Higress calls the text embedding service for embedding and the vector database service for vector storage and retrieval. Here, we use Alibaba Cloud BaiLian text-embedding-v3 text embedding service and Alibaba Cloud DashVector vector search service as examples. You need to activate the corresponding services and permissions in Alibaba Cloud console:<a href="https://www.alibabacloud.com/help/en/model-studio/user-guide/embedding" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba Cloud BaiLian text-embedding</a>, <a href="https://www.alibabacloud.com/help/en/vrs/latest/opening-service" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba Cloud DashVector</a>. Among these, the DashVector requires creating a cluster and a collection for storing embedded vectors. The configuration of the created collection specifies a vector dimension of 1024 (corresponding to text-embedding-v3) and a distance metric of Cosine.</p>
<p>Create a service source in the console\u2019s <code dir="auto">Service Sources</code>.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742385763061-e58ac0cd-7f18-430e-a032-954be26985fa.png" alt="" referrerpolicy="no-referrer"></p>
<p>Fill in the corresponding fields in the <code dir="auto">Service Sources</code>:</p>
<ul>
<li>Type: Domains</li>
<li>Service Port: 443</li>
<li>Domains:
<ul>
<li>Alibaba Cloud text-embedding-v3 service: dashscope.aliyuncs.com</li>
<li>Alibaba Cloud DashVector service: Endpoint address of the corresponding cluster, viewed in <em>DashVector Console - Cluster - Collection</em></li>
</ul>
</li>
<li>Service Protocol: HTTPS</li>
<li>SNI: Same as the domains</li>
</ul>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450867742-ede6faa3-cb64-4c59-81f5-361443facfa3.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450914179-3fa91e8f-8e01-4eb3-bbfc-d34e9a27a4eb.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-ai-route-strategy">Configure AI Route Strategy</h2>
<p>In the <code dir="auto">AI Route Config</code>, configure strategy for aliyun and select <code dir="auto">AI Cache</code>.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450947408-bf16a2af-5d46-493c-b201-0bae5adefee9.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450959559-b42d33a6-9054-43db-86cf-0e7b3d4ea2c6.png" alt="" referrerpolicy="no-referrer"></p>
<p>In the <code dir="auto">AI Cache</code>, fill in the following fields as a reference:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">vector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashvector</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"aliyun-dashvector.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">collectionID</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXX"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Name of the collection storing vectors</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Endpoint address of the cluster</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-xxxxxxxxxxxxxxxxxx"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># api-key of DashVector</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">threshold</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.12</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">embedding</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"aliyun-embedding.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-xxxxxxxxxx"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">#api-key of Alibaba Cloud text-embedding-v3</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v3"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6">#embedding model</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="vector:\x7F  type: dashvector\x7F  serviceName: &#x22;aliyun-dashvector.dns&#x22;\x7F  collectionID: &#x22;XXXXX&#x22;  # Name of the collection storing vectors\x7F  serviceHost: &#x22;vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com&#x22;  # Endpoint address of the cluster\x7F  apiKey: &#x22;sk-xxxxxxxxxxxxxxxxxx&#x22;  # api-key of DashVector\x7F  threshold: 0.12\x7F\x7Fembedding:\x7F  type: dashscope\x7F  serviceName: &#x22;aliyun-embedding.dns&#x22;\x7F  apiKey: &#x22;sk-xxxxxxxxxx&#x22;  #api-key of Alibaba Cloud text-embedding-v3\x7F  model: &#x22;text-embedding-v3&#x22; #embedding model"><div></div></button></div></figure></div>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742451004302-277663ed-4910-4bfc-8bae-72ee0333b1db.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="debugging">Debugging</h1>
<p>Open the system\u2019s built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"What are stars?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;What are stars?&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>You can try the following questions:</p>
<ul>
<li>What are stars?</li>
<li>What is a star?</li>
<li>What does star mean?</li>
</ul>
<p>Sample response:</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742451101808-5dc19297-cf26-445d-9888-3c196abd4f3e.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="observability">Observability</h1>
<p>In the <code dir="auto">AI Dashboard</code>, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png" alt="" referrerpolicy="no-referrer"></p>
<blockquote>
<p>If you encounter any issues during deployment, feel free to leave your information in the <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a>.</p>
<p>If you are interested in future updates of Higress or wish to provide feedback, welcome to star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>.</p>
</blockquote>`,t={title:"Semantic Caching",description:"Open-source workflow for semantic caching",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/semantic-cache.md",n=void 0,l=function(){return`# Scene Description
The AI gateway supports precise caching and semantic caching of inference result contexts. For common similar or repeated questions, it saves tokens and reduces latency, thereby enhancing the calling experience.

The AI gateway caches LLM responses in an in-memory database and improves inference latency and cost in the form of a gateway plugin. It automatically caches the historical conversations of corresponding users at the gateway level and automatically fills them into the context in subsequent conversations, thus enabling large models to understand the semantics of the context.

# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741059869116-ab053c2c-0aaf-451b-8cad-21ac9664c28d.png)



After the deployment is completed, the following command display will appear.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450604844-3e00e291-d68e-4873-a98a-6c98ada86b36.png)



## Configure Vector Cache Service
Semantic caching in Higress calls the text embedding service for embedding and the vector database service for vector storage and retrieval. Here, we use Alibaba Cloud BaiLian text-embedding-v3 text embedding service and Alibaba Cloud DashVector vector search service as examples. You need to activate the corresponding services and permissions in Alibaba Cloud console:[Alibaba Cloud BaiLian text-embedding](https://www.alibabacloud.com/help/en/model-studio/user-guide/embedding), [Alibaba Cloud DashVector](https://www.alibabacloud.com/help/en/vrs/latest/opening-service). Among these, the DashVector requires creating a cluster and a collection for storing embedded vectors. The configuration of the created collection specifies a vector dimension of 1024 (corresponding to text-embedding-v3) and a distance metric of Cosine.

Create a service source in the console's \`Service Sources\`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742385763061-e58ac0cd-7f18-430e-a032-954be26985fa.png)

Fill in the corresponding fields in the \`Service Sources\`:

+ Type: Domains
+ Service Port: 443
+ Domains: 
    - Alibaba Cloud text-embedding-v3 service: dashscope.aliyuncs.com
    - Alibaba Cloud DashVector service: Endpoint address of the corresponding cluster, viewed in *DashVector Console - Cluster - Collection*
+ Service Protocol: HTTPS
+ SNI: Same as the domains

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450867742-ede6faa3-cb64-4c59-81f5-361443facfa3.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450914179-3fa91e8f-8e01-4eb3-bbfc-d34e9a27a4eb.png)



## Configure AI Route Strategy
In the \`AI Route Config\`, configure strategy for aliyun and select \`AI Cache\`.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450947408-bf16a2af-5d46-493c-b201-0bae5adefee9.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742450959559-b42d33a6-9054-43db-86cf-0e7b3d4ea2c6.png)

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

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742451004302-277663ed-4910-4bfc-8bae-72ee0333b1db.png)



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
+ What does star mean?

Sample response:

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742451101808-5dc19297-cf26-445d-9888-3c196abd4f3e.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).`},o=function(){return e},r=function(){return[{depth:1,slug:"scene-description",text:"Scene Description"},{depth:1,slug:"deploy-higress-ai-gateway",text:"Deploy Higress AI Gateway"},{depth:1,slug:"console-configuration",text:"Console Configuration"},{depth:2,slug:"configure-vector-cache-service",text:"Configure Vector Cache Service"},{depth:2,slug:"configure-ai-route-strategy",text:"Configure AI Route Strategy"},{depth:1,slug:"debugging",text:"Debugging"},{depth:1,slug:"observability",text:"Observability"}]},s=c((v,m,x)=>{const{layout:b,...i}=t;return i.file=a,i.url=n,d`${h()}${y(e)}`})});export{s as Content,f as __tla,o as compiledContent,s as default,a as file,t as frontmatter,r as getHeadings,l as rawContent,n as url};
