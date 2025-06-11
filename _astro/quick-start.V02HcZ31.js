import{c as p,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as d,m as u,u as g,__tla as h}from"./constant.BwWfJoOA.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,o,t,a,i,l,n,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p>This guide provides a quick deployment method for the Higress AI Gateway using <strong>Docker</strong>. If you need to use other deployment methods (such as standard Kubernetes clusters or local Kubernetes clusters), please refer to the <a href="https://higress.cn/en/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Quick Start</a>.</p>
<p>Achieve Remote MCP Server hosting based on Higress AI Gateway, please refer to <a href="../../ai/mcp-quick-start/" referrerpolicy="unsafe-url">MCP Server Quick Start</a>.</p>
<h1 id="install-higress-ai-gateway">Install Higress AI Gateway</h1>
<p>In your local console, execute the following command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>Follow the prompts to enter the API-KEYs for model providers; you can also press Enter to skip and modify it later in the console. You can also press <code dir="auto">Enter</code> to skip and modify it later in the console.</p>
<p><img src="/img/1749608613069.png" alt="" referrerpolicy="no-referrer"></p>
<p>If your current port is occupied and need to use another port, download the installer script using <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>, modify <em>DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT</em>, and then execute the script using bash.</p>
<p><img src="/img/1749608615524.png" alt="" referrerpolicy="no-referrer"></p>
<p>After the deployment is completed, the following command display will appear.</p>
<p><img src="/img/1749608618697.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="console-configuration">Console Configuration</h1>
<p>Access the Higress console via a browser at <a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>. The first login requires setting up an administrator account and password.</p>
<p>In the <code dir="auto">LLM Provider Management</code>, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc.</p>
<p><img src="/img/1749608621621.png" alt="" referrerpolicy="no-referrer"></p>
<p>Each <code dir="auto">AI Service Provider</code> can independently configure token failover strategies. When the number of abnormal responses from a particular authentication token exceeds the threshold, Higress will pause requests using that token until subsequent health check requests receive a certain number of normal responses.</p>
<p><img src="/img/1749608624425.png" alt="" referrerpolicy="no-referrer"></p>
<p>In the <code dir="auto">AI Route Config</code>, you can configure domain, model match types, fallback configurations, and allowed consumers for different routes. You can also configure different authentication methods, rate-limiting strategies, and AI features such as RAG, Prompt templates, and semantic caching through <code dir="auto">Strategy</code>.</p>
<p><img src="/img/1749608627473.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1749608630085.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1749608633031.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="debugging">Debugging</h1>
<p>Open the system\u2019s built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>Sample response:</p>
<p><img src="/img/1749608635965.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="observability">Observability</h1>
<p>In the <code dir="auto">AI Dashboard</code>, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.</p>
<p>Through these observation metrics, you can further compare the usage and latency of multiple models currently in use, helping developers optimize model strategies.</p>
<p><img src="/img/1749608639018.png" alt="" referrerpolicy="no-referrer"></p>
<blockquote>
<p>If you encounter any issues during deployment, feel free to leave your information in the <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a>.</p>
<p>If you are interested in future updates of Higress or wish to provide feedback, welcome to star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>.</p>
</blockquote>`,a={title:"QuickStart of Higress AI Gateway",description:"Docker based quickstart of AI gateway, integrating multi-model protocol proxy functions, observing model usage, and managing calling consumers",date:"2025-03-24",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/quick-start.md",n=void 0,l=function(){return`
This guide provides a quick deployment method for the Higress AI Gateway using **Docker**. If you need to use other deployment methods (such as standard Kubernetes clusters or local Kubernetes clusters), please refer to the [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/).

Achieve Remote MCP Server hosting based on Higress AI Gateway, please refer to [MCP Server Quick Start](../ai/mcp-quick-start.md).

# Install Higress AI Gateway

In your local console, execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the API-KEYs for model providers; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1749608613069.png)



If your current port is occupied and need to use another port, download the installer script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify *DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT*, and then execute the script using bash.

![](/img/1749608615524.png)



After the deployment is completed, the following command display will appear.

![](/img/1749608618697.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc.

![](/img/1749608621621.png)

Each \`AI Service Provider\` can independently configure token failover strategies. When the number of abnormal responses from a particular authentication token exceeds the threshold, Higress will pause requests using that token until subsequent health check requests receive a certain number of normal responses.



![](/img/1749608624425.png)



In the \`AI Route Config\`, you can configure domain, model match types, fallback configurations, and allowed consumers for different routes. You can also configure different authentication methods, rate-limiting strategies, and AI features such as RAG, Prompt templates, and semantic caching through \`Strategy\`.

![](/img/1749608627473.png)

![](/img/1749608630085.png)

![](/img/1749608633031.png)



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

![](/img/1749608635965.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, etc.

Through these observation metrics, you can further compare the usage and latency of multiple models currently in use, helping developers optimize model strategies.

![](/img/1749608639018.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).
`},o=function(){return e},i=function(){return[{depth:1,slug:"install-higress-ai-gateway",text:"Install Higress AI Gateway"},{depth:1,slug:"console-configuration",text:"Console Configuration"},{depth:1,slug:"debugging",text:"Debugging"},{depth:1,slug:"observability",text:"Observability"}]},s=p((y,v,b)=>{const{layout:E,...r}=a;return r.file=t,r.url=n,d`${u()}${g(e)}`})});export{s as Content,f as __tla,o as compiledContent,s as default,t as file,a as frontmatter,i as getHeadings,l as rawContent,n as url};
