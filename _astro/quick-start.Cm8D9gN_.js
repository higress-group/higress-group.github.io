import{c as p,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as d,m as u,u as h,__tla as g}from"./constant.DEehjojY.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let s,o,a,t,i,l,n,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<p>This guide provides a quick deployment method for the Higress AI Gateway using <strong>Docker</strong>. If you need to use other deployment methods (such as standard Kubernetes clusters or local Kubernetes clusters), please refer to the <a href="https://higress.cn/en/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Quick Start</a>.</p>
<p>Achieve Remote MCP Server hosting based on Higress AI Gateway, please refer to <a href="../../ai/mcp-quick-start/" referrerpolicy="unsafe-url">MCP Server Quick Start</a>.</p>
<h1 id="install-higress-ai-gateway">Install Higress AI Gateway</h1>
<p>In your local console, execute the following command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>Follow the prompts to enter the API-KEYs for model providers; you can also press Enter to skip and modify it later in the console. You can also press <code dir="auto">Enter</code> to skip and modify it later in the console.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063971166-0b83c7c9-b093-49f1-b38b-145994623f30.png" alt="" referrerpolicy="no-referrer"></p>
<p>If your current port is occupied and need to use another port, download the installer script using <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>, modify <em>DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT</em>, and then execute the script using bash.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741059869116-ab053c2c-0aaf-451b-8cad-21ac9664c28d.png" alt="" referrerpolicy="no-referrer"></p>
<p>After the deployment is completed, the following command display will appear.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1741063935811-ddf2eef7-967d-49a8-92e6-f99613b7dbf7.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="console-configuration">Console Configuration</h1>
<p>Access the Higress console via a browser at <a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>. The first login requires setting up an administrator account and password.</p>
<p>In the <code dir="auto">LLM Provider Management</code>, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742801837367-13136bd3-0481-4569-a739-3c988297d6e4.png" alt="" referrerpolicy="no-referrer"></p>
<p>Each <code dir="auto">AI Service Provider</code> can independently configure token failover strategies. When the number of abnormal responses from a particular authentication token exceeds the threshold, Higress will pause requests using that token until subsequent health check requests receive a certain number of normal responses.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742801879234-bf9d23ff-6a61-40ff-bcae-cabf5dbb3091.png" alt="" referrerpolicy="no-referrer"></p>
<p>In the <code dir="auto">AI Route Config</code>, you can configure domain, model match types, fallback configurations, and allowed consumers for different routes. You can also configure different authentication methods, rate-limiting strategies, and AI features such as RAG, Prompt templates, and semantic caching through <code dir="auto">Strategy</code>.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802115240-ab3ce046-f8db-486a-9fab-95ecefd15889.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802001349-179c2ec1-1a2b-45e5-b5ce-df2e927a6db3.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742802137146-e3975a31-d91e-4184-aa00-7390243bdbee.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="debugging">Debugging</h1>
<p>Open the system\u2019s built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>Sample response:</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354509233-53a38717-3b3d-49cb-9c4e-7d9b6ec5c77d.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="observability">Observability</h1>
<p>In the <code dir="auto">AI Dashboard</code>, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.</p>
<p>Through these observation metrics, you can further compare the usage and latency of multiple models currently in use, helping developers optimize model strategies.</p>
<p><img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/66357218/1742354552167-7efc3978-1942-4935-83ce-fcf3a229e859.png" alt="" referrerpolicy="no-referrer"></p>
<blockquote>
<p>If you encounter any issues during deployment, feel free to leave your information in the <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a>.</p>
<p>If you are interested in future updates of Higress or wish to provide feedback, welcome to star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>.</p>
</blockquote>`,t={title:"QuickStart of Higress AI Gateway",description:"Docker based quickstart of AI gateway, integrating multi-model protocol proxy functions, observing model usage, and managing calling consumers",date:"2025-03-24",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/quick-start.md",n=void 0,l=function(){return`
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
`},o=function(){return e},i=function(){return[{depth:1,slug:"install-higress-ai-gateway",text:"Install Higress AI Gateway"},{depth:1,slug:"console-configuration",text:"Console Configuration"},{depth:1,slug:"debugging",text:"Debugging"},{depth:1,slug:"observability",text:"Observability"}]},s=p((m,b,v)=>{const{layout:k,...r}=t;return r.file=a,r.url=n,d`${u()}${h(e)}`})});export{s as Content,f as __tla,o as compiledContent,s as default,a as file,t as frontmatter,i as getHeadings,l as rawContent,n as url};
