import{c,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as p,m as h,u,__tla as g}from"./constant.ZI3O5-xu.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let s,o,a,n,r,l,t,v=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h1 id="scene-description">Scene Description</h1>
<p>The AI gateway supports precise caching and semantic caching of inference result contexts. For common similar or repeated questions, it saves tokens and reduces latency, thereby enhancing the calling experience.</p>
<p>The AI gateway caches LLM responses in an in-memory database and improves inference latency and cost in the form of a gateway plugin. It automatically caches the historical conversations of corresponding users at the gateway level and automatically fills them into the context in subsequent conversations, thus enabling large models to understand the semantics of the context.</p>
<h1 id="deploy-higress-ai-gateway">Deploy Higress AI Gateway</h1>
<p>This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to <a href="https://higress.cn/en/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Quick Start</a>\u3002</p>
<p>Execute the following command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press <code dir="auto">Enter</code> to skip and modify it later in the console.</p>
<p><img src="/img/1751533390656.png" alt="" referrerpolicy="no-referrer"></p>
<p>The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.</p>
<p><img src="/img/1751533393266.png" alt="" referrerpolicy="no-referrer"></p>
<p>After the deployment is completed, the following command display will appear.</p>
<p><img src="/img/1751533396391.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="console-configuration">Console Configuration</h1>
<p>Access the Higress console via a browser at <a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>. The first login requires setting up an administrator account and password.</p>
<p>In the <code dir="auto">LLM Provider Management</code>, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.</p>
<p><img src="/img/1751533399569.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-vector-cache-service">Configure Vector Cache Service</h2>
<p>Semantic caching in Higress calls the text embedding service for embedding and the vector database service for vector storage and retrieval. Here, we use Alibaba Cloud BaiLian text-embedding-v3 text embedding service and Alibaba Cloud DashVector vector search service as examples. You need to activate the corresponding services and permissions in Alibaba Cloud console:<a href="https://www.alibabacloud.com/help/en/model-studio/user-guide/embedding" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba Cloud BaiLian text-embedding</a>, <a href="https://www.alibabacloud.com/help/en/vrs/latest/opening-service" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba Cloud DashVector</a>. Among these, the DashVector requires creating a cluster and a collection for storing embedded vectors. The configuration of the created collection specifies a vector dimension of 1024 (corresponding to text-embedding-v3) and a distance metric of Cosine.</p>
<p>Create a service source in the console\u2019s <code dir="auto">Service Sources</code>.</p>
<p><img src="/img/1751533403341.png" alt="" referrerpolicy="no-referrer"></p>
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
<p><img src="/img/1751533406389.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1751533409633.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-ai-route-strategy">Configure AI Route Strategy</h2>
<p>In the <code dir="auto">AI Route Config</code>, configure strategy for aliyun and select <code dir="auto">AI Cache</code>.</p>
<p><img src="/img/1751533413205.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1751533416731.png" alt="" referrerpolicy="no-referrer"></p>
<p>In the <code dir="auto">AI Cache</code>, fill in the following fields as a reference:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">vector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashvector</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"aliyun-dashvector.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">collectionID</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXX"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Name of the collection storing vectors</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Endpoint address of the cluster</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-xxxxxxxxxxxxxxxxxx"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># api-key of DashVector</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">threshold</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.12</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">embedding</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"aliyun-embedding.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-xxxxxxxxxx"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6">#api-key of Alibaba Cloud text-embedding-v3</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"text-embedding-v3"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6">#embedding model</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="vector:\x7F  type: dashvector\x7F  serviceName: &#x22;aliyun-dashvector.dns&#x22;\x7F  collectionID: &#x22;XXXXX&#x22;  # Name of the collection storing vectors\x7F  serviceHost: &#x22;vrs-cn-xxxxxx.dashvector.cn-hangzhou.aliyuncs.com&#x22;  # Endpoint address of the cluster\x7F  apiKey: &#x22;sk-xxxxxxxxxxxxxxxxxx&#x22;  # api-key of DashVector\x7F  threshold: 0.12\x7F\x7Fembedding:\x7F  type: dashscope\x7F  serviceName: &#x22;aliyun-embedding.dns&#x22;\x7F  apiKey: &#x22;sk-xxxxxxxxxx&#x22;  #api-key of Alibaba Cloud text-embedding-v3\x7F  model: &#x22;text-embedding-v3&#x22; #embedding model"><div></div></button></div></figure></div>
<p><img src="/img/1751533420268.png" alt="" referrerpolicy="no-referrer"></p>
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
<p><img src="/img/1751533424486.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="observability">Observability</h1>
<p>In the <code dir="auto">AI Dashboard</code>, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.</p>
<p><img src="/img/1751533427916.png" alt="" referrerpolicy="no-referrer"></p>
<blockquote>
<p>If you encounter any issues during deployment, feel free to leave your information in the <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a>.</p>
<p>If you are interested in future updates of Higress or wish to provide feedback, welcome to star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>.</p>
</blockquote>`,n={title:"Semantic Caching",description:"Open-source workflow for semantic caching",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/semantic-cache.md",t=void 0,l=function(){return`# Scene Description
The AI gateway supports precise caching and semantic caching of inference result contexts. For common similar or repeated questions, it saves tokens and reduces latency, thereby enhancing the calling experience.

The AI gateway caches LLM responses in an in-memory database and improves inference latency and cost in the form of a gateway plugin. It automatically caches the historical conversations of corresponding users at the gateway level and automatically fills them into the context in subsequent conversations, thus enabling large models to understand the semantics of the context.

# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1751533390656.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](/img/1751533393266.png)



After the deployment is completed, the following command display will appear.

![](/img/1751533396391.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](/img/1751533399569.png)



## Configure Vector Cache Service
Semantic caching in Higress calls the text embedding service for embedding and the vector database service for vector storage and retrieval. Here, we use Alibaba Cloud BaiLian text-embedding-v3 text embedding service and Alibaba Cloud DashVector vector search service as examples. You need to activate the corresponding services and permissions in Alibaba Cloud console:[Alibaba Cloud BaiLian text-embedding](https://www.alibabacloud.com/help/en/model-studio/user-guide/embedding), [Alibaba Cloud DashVector](https://www.alibabacloud.com/help/en/vrs/latest/opening-service). Among these, the DashVector requires creating a cluster and a collection for storing embedded vectors. The configuration of the created collection specifies a vector dimension of 1024 (corresponding to text-embedding-v3) and a distance metric of Cosine.

Create a service source in the console's \`Service Sources\`.

![](/img/1751533403341.png)

Fill in the corresponding fields in the \`Service Sources\`:

+ Type: Domains
+ Service Port: 443
+ Domains: 
    - Alibaba Cloud text-embedding-v3 service: dashscope.aliyuncs.com
    - Alibaba Cloud DashVector service: Endpoint address of the corresponding cluster, viewed in *DashVector Console - Cluster - Collection*
+ Service Protocol: HTTPS
+ SNI: Same as the domains

![](/img/1751533406389.png)

![](/img/1751533409633.png)



## Configure AI Route Strategy
In the \`AI Route Config\`, configure strategy for aliyun and select \`AI Cache\`.

![](/img/1751533413205.png)

![](/img/1751533416731.png)

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

![](/img/1751533420268.png)



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

![](/img/1751533424486.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](/img/1751533427916.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).`},o=function(){return e},r=function(){return[{depth:1,slug:"scene-description",text:"Scene Description"},{depth:1,slug:"deploy-higress-ai-gateway",text:"Deploy Higress AI Gateway"},{depth:1,slug:"console-configuration",text:"Console Configuration"},{depth:2,slug:"configure-vector-cache-service",text:"Configure Vector Cache Service"},{depth:2,slug:"configure-ai-route-strategy",text:"Configure AI Route Strategy"},{depth:1,slug:"debugging",text:"Debugging"},{depth:1,slug:"observability",text:"Observability"}]},s=c((m,f,x)=>{const{layout:b,...i}=n;return i.file=a,i.url=t,p`${h()}${u(e)}`})});export{s as Content,v as __tla,o as compiledContent,s as default,a as file,n as frontmatter,r as getHeadings,l as rawContent,t as url};
