import{c as l,__tla as p}from"./astro-component.CXlaF79K.js";import{r as d,m as u,u as h,__tla as g}from"./constant.hgs8MuJn.js";import{__tla as y}from"./astro/assets-service.DQopRnBr.js";let s,o,t,n,r,c,a,f=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h1 id="scene-description">Scene Description</h1>
<p>The AI gateway can protect data security when interacting with large models. On one hand, it protects the privacy of data input to external models, and on the other hand, it filters the data output to users.</p>
<p>The AI gateway can process API request and response data for encryption, desensitization, etc., ensuring the security of data during transmission and storage. Handling these data protection tasks at the large model service layer may increase the complexity and computational burden of the large model. Processing them uniformly at the gateway better protects user-sensitive information while avoiding the security risks associated with direct exposure of sensitive data to large models. Additionally, through plugins related to content security, harmful or inappropriate content is filtered out, requests containing sensitive data are detected and blocked, and the quality and compliance of AI-generated content are reviewed.</p>
<h1 id="deploy-higress-ai-gateway">Deploy Higress AI Gateway</h1>
<p>This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to <a href="https://higress.cn/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Quick Start</a>\u3002</p>
<p>Execute the following command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press <code dir="auto">Enter</code> to skip and modify it later in the console.</p>
<p><img src="/img/1742449779220.png" alt="" referrerpolicy="no-referrer"></p>
<p>The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.</p>
<p><img src="/img/1742449782238.png" alt="" referrerpolicy="no-referrer"></p>
<p>After the deployment is completed, the following command display will appear.</p>
<p><img src="/img/1742449786117.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="console-configuration">Console Configuration</h1>
<p>Access the Higress console via a browser at <a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>. The first login requires setting up an administrator account and password.</p>
<p>In the <code dir="auto">LLM Provider Management</code>, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.</p>
<p><img src="/img/1742449790810.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-service-source">Configure Service Source</h2>
<p>Higress calls the content safety service through a service method. Taking Alibaba Cloud Content Safety as an example, corresponding services and permissions need to be activated in Alibaba Cloud Content Safety: <a href="https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide</a>\u3002</p>
<p>Create a service source in the console\u2019s <code dir="auto">Service Source</code>.</p>
<p><img src="/img/1742449795206.png" alt="" referrerpolicy="no-referrer"></p>
<p>Fill in the corresponding fields in the <code dir="auto">Service Source</code>:</p>
<ul>
<li>Type: Domains</li>
<li>Service port: 443</li>
<li>Domains: Fill in the domain name corresponding to the above document</li>
<li>Service protocol: HTTPS</li>
<li>SNI: Same as the domains</li>
</ul>
<p><img src="/img/1742449798726.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-ai-route-strategy">Configure AI Route Strategy</h2>
<p>In the <code dir="auto">AI Route Config</code>, configure strategy for aliyun and select <code dir="auto">AI Safety Guard</code>.</p>
<p><img src="/img/1742449802826.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1742449807273.png" alt="" referrerpolicy="no-referrer"></p>
<p>In the <code dir="auto">AI Safety Guard</code>, fill in the following fields as a reference:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">aliyun-safety.dns</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Created service FQDN</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">green-cip.cn-hangzhou.aliyuncs.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Service domain in previous step</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">accessKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Alibaba Cloud user corresponding AccessKey ID</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secretKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Alibaba Cloud user corresponding AccessKey Secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkRequest</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Whether to enable request inspection</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkResponse</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># Whether to enable response inspection</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: aliyun-safety.dns  # Created service FQDN\x7FservicePort: 443\x7FserviceHost: green-cip.cn-hangzhou.aliyuncs.com # Service domain in previous step\x7FaccessKey: &#x22;XXXXXXXXX&#x22; # Alibaba Cloud user corresponding AccessKey ID\x7FsecretKey: &#x22;XXXXXXXXX&#x22;  # Alibaba Cloud user corresponding AccessKey Secret\x7FcheckRequest: true  # Whether to enable request inspection\x7FcheckResponse: true  # Whether to enable response inspection"><div></div></button></div></figure></div>
<p><img src="/img/1742449810961.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="debugging">Debugging</h1>
<p>Open the system\u2019s built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u82B1\u5457\u5957\u73B0"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;\u82B1\u5457\u5957\u73B0&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>Sample response of intercepted request results:</p>
<p><img src="/img/1742449814494.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="observability">Observability</h1>
<p>In the <code dir="auto">AI Dashboard</code>, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.</p>
<p><img src="/img/1742449818754.png" alt="" referrerpolicy="no-referrer"></p>`,n={title:"Content Security",description:"Open-source workflow for content security",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/application-safety.md",a=void 0,c=function(){return`# Scene Description
The AI gateway can protect data security when interacting with large models. On one hand, it protects the privacy of data input to external models, and on the other hand, it filters the data output to users.

The AI gateway can process API request and response data for encryption, desensitization, etc., ensuring the security of data during transmission and storage. Handling these data protection tasks at the large model service layer may increase the complexity and computational burden of the large model. Processing them uniformly at the gateway better protects user-sensitive information while avoiding the security risks associated with direct exposure of sensitive data to large models. Additionally, through plugins related to content security, harmful or inappropriate content is filtered out, requests containing sensitive data are detected and blocked, and the quality and compliance of AI-generated content are reviewed.

# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1742449779220.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](/img/1742449782238.png)



After the deployment is completed, the following command display will appear.

![](/img/1742449786117.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](/img/1742449790810.png)



## Configure Service Source
Higress calls the content safety service through a service method. Taking Alibaba Cloud Content Safety as an example, corresponding services and permissions need to be activated in Alibaba Cloud Content Safety: [https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide](https://www.alibabacloud.com/help/en/content-moderation/latest/access-guide)\u3002

Create a service source in the console's \`Service Source\`.

![](/img/1742449795206.png)

Fill in the corresponding fields in the \`Service Source\`:

+ Type: Domains
+ Service port: 443
+ Domains: Fill in the domain name corresponding to the above document
+ Service protocol: HTTPS
+ SNI: Same as the domains

![](/img/1742449798726.png)



## Configure AI Route Strategy
In the \`AI Route Config\`, configure strategy for aliyun and select \`AI Safety Guard\`.

![](/img/1742449802826.png)

![](/img/1742449807273.png)



In the \`AI Safety Guard\`, fill in the following fields as a reference:

\`\`\`yaml
serviceName: aliyun-safety.dns	# Created service FQDN
servicePort: 443
serviceHost: green-cip.cn-hangzhou.aliyuncs.com # Service domain in previous step
accessKey: "XXXXXXXXX" # Alibaba Cloud user corresponding AccessKey ID
secretKey: "XXXXXXXXX"  # Alibaba Cloud user corresponding AccessKey Secret
checkRequest: true	# Whether to enable request inspection
checkResponse: true	# Whether to enable response inspection
\`\`\`

![](/img/1742449810961.png)





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
        "content": "\u82B1\u5457\u5957\u73B0"
      }
    ]
  }'

\`\`\`

Sample response of intercepted request results:

![](/img/1742449814494.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

![](/img/1742449818754.png)


`},o=function(){return e},r=function(){return[{depth:1,slug:"scene-description",text:"Scene Description"},{depth:1,slug:"deploy-higress-ai-gateway",text:"Deploy Higress AI Gateway"},{depth:1,slug:"console-configuration",text:"Console Configuration"},{depth:2,slug:"configure-service-source",text:"Configure Service Source"},{depth:2,slug:"configure-ai-route-strategy",text:"Configure AI Route Strategy"},{depth:1,slug:"debugging",text:"Debugging"},{depth:1,slug:"observability",text:"Observability"}]},s=l((m,v,E)=>{const{layout:b,...i}=n;return i.file=t,i.url=a,d`${u()}${h(e)}`})});export{s as Content,f as __tla,o as compiledContent,s as default,t as file,n as frontmatter,r as getHeadings,c as rawContent,a as url};
