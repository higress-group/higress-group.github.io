import{c as l,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as p,m as u,u as g,__tla as m}from"./constant.DH0MXVtR.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let s,o,i,n,r,c,a,y=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h1 id="scene-description">Scene Description</h1>
<p>The AI gateway can track the number of tokens used by LLMs and impose restrictions when consumers exceed their limits, thereby better managing user quotas for AI applications and providing data support for token usage analysis.</p>
<p>The token management scenario is based on consumer authentication, token rate limiting, and token quota plugins. It integrates observability capabilities to transform token resources into quantifiable, manageable, and optimizable service units. Based on custom strategies, it ensures the stability, security, and fairness of services under high concurrency.</p>
<h1 id="deploy-higress-ai-gateway">Deploy Higress AI Gateway</h1>
<p>This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to <a href="https://higress.cn/en/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Quick Start</a>\u3002</p>
<p>Execute the following command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-sS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/ai-gateway/install.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -sS https://higress.cn/ai-gateway/install.sh | bash"><div></div></button></div></figure></div>
<p>Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press <code dir="auto">Enter</code> to skip and modify it later in the console.</p>
<p><img src="/img/1744031874563.png" alt="" referrerpolicy="no-referrer"></p>
<p>The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using <code dir="auto">wget https://higress.cn/ai-gateway/install.sh</code>, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.</p>
<p><img src="/img/1744031877520.png" alt="" referrerpolicy="no-referrer"></p>
<p>After the deployment is completed, the following command display will appear.</p>
<p><img src="/img/1744031880983.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="console-configuration">Console Configuration</h1>
<p>Access the Higress console via a browser at <a href="http://localhost:8001/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8001/</a>. The first login requires setting up an administrator account and password.</p>
<p>In the <code dir="auto">LLM Provider Management</code>, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.</p>
<p><img src="/img/1744031885344.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-consumers">Configure Consumers</h2>
<p>In the <code dir="auto">Consumer Management</code> of the console, create consumers for the current gateway to manage quotas and send requests.</p>
<p><img src="/img/1744031889293.png" alt="" referrerpolicy="no-referrer"></p>
<p>Click to create a consumer, and based on <code dir="auto">Key Auth</code>, create three consumers named aliyun-admin, aliyun-user1, and aliyun-user2. Authentication is performed based on the <code dir="auto">x-api-key</code> field in the HTTP Header.</p>
<p><img src="/img/1744031893488.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744031898290.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-redis-storage-service">Configure Redis Storage Service</h2>
<p>A Redis service needs to be created for caching token usages. This example uses Docker to set up a local Redis service for Higress.</p>
<h3 id="build-redis-service">Build Redis Service</h3>
<ol>
<li>Use the docker command to start a redis container</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">docker run --name my-redis -p 6379:6379 -d redis</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run --name my-redis -p 6379:6379 -d redis"><div></div></button></div></figure></div>
<ol start="2">
<li>Check the IP address of the my-redis service:
<ol>
<li>
<p>Use <code dir="auto">docker network ls</code> to get the NETWORK ID of the bridge network.
<img src="/img/1744031901541.png" alt="" referrerpolicy="no-referrer"></p>
</li>
<li>
<p>Use <code dir="auto">docker network inspect &#x3C;network-id></code> to check if the my-redis container is connected to the bridge network.</p>
<ol>
<li>If not, connect it to the network using the <code dir="auto">docker network connect bridge my-redis</code> command.</li>
</ol>
</li>
</ol>
</li>
<li>Get the IP address of the my-redis service.</li>
</ol>
<p><img src="/img/1744031904274.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="configure-redis-service-source">Configure Redis Service Source</h3>
<p>Create a service source in the console\u2019s <code dir="auto">Service Sources</code>. Fill in the corresponding fields in the <code dir="auto">Service Sources</code>:</p>
<ul>
<li>Type: Static Addresses</li>
<li>Service Address: Concatenate the IP address of my-redis with the service port</li>
<li>Service Protocol: HTTP</li>
</ul>
<p><img src="/img/1744031908029.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="configure-ai-route-strategy">Configure AI Route Strategy</h2>
<h3 id="consumer-authentication-configuration">Consumer Authentication Configuration</h3>
<p>In the <code dir="auto">AI Route Config</code>, configure consumers for aliyun and click Edit.</p>
<p><img src="/img/1744031912118.png" alt="" referrerpolicy="no-referrer"></p>
<p>Enable request authentication and add the consumers created earlier.</p>
<p><img src="/img/1744031915338.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="token-quota-configuration">Token Quota Configuration</h3>
<p>In the <code dir="auto">AI Route Config</code>, click Edit and configure <code dir="auto">AI Quota</code> for aliyun .</p>
<p><img src="/img/1744031919345.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744031923431.png" alt="" referrerpolicy="no-referrer"></p>
<p>Fill in the following fields as a reference in <code dir="auto">AI Quota</code> configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis_key_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'chat_quota:'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">aliyun-admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/quota</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-redis.static</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis_key_prefix: &#x27;chat_quota:&#x27;\x7Fadmin_consumer: aliyun-admin\x7Fadmin_path: /quota\x7Fredis:\x7F  service_name: local-redis.static\x7F  service_port: 80\x7F  timeout: 2000"><div></div></button></div></figure></div>
<p><img src="/img/1744031926928.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="token-rate-limiting-configuration">Token Rate Limiting Configuration</h3>
<p>In the <code dir="auto">AI Route Config</code>, click Edit and configure <code dir="auto">AI Token Rate Limit</code> for aliyun.</p>
<p><img src="/img/1744031931351.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744031935221.png" alt="" referrerpolicy="no-referrer"></p>
<p>Fill in the following fields as a reference in <code dir="auto">AI Token Rate Limit</code> configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Limit to 5 tokens per minute</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"default_rule"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local-redis.static</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_items:\x7F- limit_by_per_header: x-api-key\x7F  limit_keys:\x7F  - key: &#x22;*&#x22;\x7F    token_per_minute: 5 # Limit to 5 tokens per minute\x7Frule_name: &#x22;default_rule&#x22;\x7F\x7Fredis:\x7F  service_name: local-redis.static\x7F  service_port: 80"><div></div></button></div></figure></div>
<p><img src="/img/1744031938650.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="debugging">Debugging</h1>
<p>Open the system\u2019s built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Query quota, x-api-key is the credential for aliyun-admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'x-higress-llm-model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Refresh quota, x-api-key is the credential for aliyun-admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions/quota/refresh' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d 'consumer=aliyun-user1&#x26;quota=100' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'x-higress-llm-model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Increase quota, x-api-key is the credential for aliyun-admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions/quota/delta' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d 'consumer=aliyun-user1&#x26;value=100' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'x-higress-llm-model</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-max'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Request, x-api-key is the credential for aliyun-user1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl 'http://localhost:8080/v1/chat/completions' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-H 'x-api-key:xxxxxxxxxxxx' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">-H 'Content-Type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">-d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span><span style="--0:#9ECBFF">'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# Query quota, x-api-key is the credential for aliyun-admin\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;x-higress-llm-model: qwen-max&#x27;\x7F\x7F# Refresh quota, x-api-key is the credential for aliyun-admin\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions/quota/refresh&#x27; \\\x7F  -d &#x27;consumer=aliyun-user1&#x26;quota=100&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;x-higress-llm-model: qwen-max&#x27;\x7F\x7F# Increase quota, x-api-key is the credential for aliyun-admin\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions/quota/delta&#x27; \\\x7F  -d &#x27;consumer=aliyun-user1&#x26;value=100&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;x-higress-llm-model: qwen-max&#x27;\x7F\x7F# Request, x-api-key is the credential for aliyun-user1\x7Fcurl &#x27;http://localhost:8080/v1/chat/completions&#x27; \\\x7F  -H &#x27;x-api-key:xxxxxxxxxxxx&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -d &#x27;{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;messages&#x22;: [\x7F      {\x7F        &#x22;role&#x22;: &#x22;user&#x22;,\x7F        &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F      }\x7F    ]\x7F  }&#x27;"><div></div></button></div></figure></div>
<p>Sample response:</p>
<p><img src="/img/1744031942367.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1744031945996.png" alt="" referrerpolicy="no-referrer"></p>
<h1 id="observability">Observability</h1>
<p>In the <code dir="auto">AI Dashboard</code>, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, and the token usage of consumers etc.</p>
<p><img src="/img/1744031949872.png" alt="" referrerpolicy="no-referrer"></p>
<blockquote>
<p>If you encounter any issues during deployment, feel free to leave your information in the <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a>.</p>
<p>If you are interested in future updates of Higress or wish to provide feedback, welcome to star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>.</p>
</blockquote>`,n={title:"Token Management",description:"Open-source workflow for token management",date:"2025-03-03",category:"article",keywords:["Higress"],authors:"\u5B50\u91C9"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/scene-guide/token-management.md",a=void 0,c=function(){return`
# Scene Description
The AI gateway can track the number of tokens used by LLMs and impose restrictions when consumers exceed their limits, thereby better managing user quotas for AI applications and providing data support for token usage analysis.

The token management scenario is based on consumer authentication, token rate limiting, and token quota plugins. It integrates observability capabilities to transform token resources into quantifiable, manageable, and optimizable service units. Based on custom strategies, it ensures the stability, security, and fairness of services under high concurrency.



# Deploy Higress AI Gateway
This guide is based on Docker deployment. If you need other deployment methods (such as k8s, helm, etc.), please refer to [Quick Start](https://higress.cn/en/docs/latest/user/quickstart/)\u3002



Execute the following command:

\`\`\`bash
curl -sS https://higress.cn/ai-gateway/install.sh | bash
\`\`\`

Follow the prompts to enter the Aliyun Dashscope or other API-KEY; you can also press Enter to skip and modify it later in the console. You can also press \`Enter\` to skip and modify it later in the console.

![](/img/1744031874563.png)



The default HTTP service port is 8080, the HTTPS service port is 8443, and the console service port is 8001. If you need to use other ports, download the deployment script using \`wget https://higress.cn/ai-gateway/install.sh\`, modify DEFAULT_GATEWAY_HTTP_PORT/DEFAULT_GATEWAY_HTTPS_PORT/DEFAULT_CONSOLE_PORT, and then execute the script using bash.

![](/img/1744031877520.png)



After the deployment is completed, the following command display will appear.

![](/img/1744031880983.png)



# Console Configuration
Access the Higress console via a browser at [http://localhost:8001/](http://localhost:8001/). The first login requires setting up an administrator account and password.

In the \`LLM Provider Management\`, you can configure the API-KEYs for integrated suppliers. Currently integrated suppliers include Alibaba Cloud, DeepSeek, Azure OpenAI, OpenAI, DouBao, etc. Here we configure multi-model proxies for Tongyi Qwen, which can be ignored if already configured in the previous step.

![](/img/1744031885344.png)



## Configure Consumers
In the \`Consumer Management\` of the console, create consumers for the current gateway to manage quotas and send requests.

![](/img/1744031889293.png)

Click to create a consumer, and based on \`Key Auth\`, create three consumers named aliyun-admin, aliyun-user1, and aliyun-user2. Authentication is performed based on the \`x-api-key\` field in the HTTP Header.

![](/img/1744031893488.png)

![](/img/1744031898290.png)



## Configure Redis Storage Service
A Redis service needs to be created for caching token usages. This example uses Docker to set up a local Redis service for Higress.


### Build Redis Service
1. Use the docker command to start a redis container

\`\`\`plain
docker run --name my-redis -p 6379:6379 -d redis
\`\`\`

2. Check the IP address of the my-redis service:
    1. Use \`docker network ls\` to get the NETWORK ID of the bridge network.
![](/img/1744031901541.png)

    2. Use \`docker network inspect <network-id>\` to check if the my-redis container is connected to the bridge network.
       1. If not, connect it to the network using the \`docker network connect bridge my-redis\` command.
    
3. Get the IP address of the my-redis service.

![](/img/1744031904274.png)



### Configure Redis Service Source
Create a service source in the console's \`Service Sources\`. Fill in the corresponding fields in the \`Service Sources\`:

+ Type: Static Addresses
+ Service Address: Concatenate the IP address of my-redis with the service port
+ Service Protocol: HTTP

![](/img/1744031908029.png)



## Configure AI Route Strategy
### Consumer Authentication Configuration
In the \`AI Route Config\`, configure consumers for aliyun and click Edit.

![](/img/1744031912118.png)

Enable request authentication and add the consumers created earlier.

![](/img/1744031915338.png)





### Token Quota Configuration
In the \`AI Route Config\`, click Edit and configure \`AI Quota\` for aliyun .

![](/img/1744031919345.png)

![](/img/1744031923431.png)

Fill in the following fields as a reference in \`AI Quota\` configuration:

\`\`\`yaml
redis_key_prefix: 'chat_quota:'
admin_consumer: aliyun-admin
admin_path: /quota
redis:
  service_name: local-redis.static
  service_port: 80
  timeout: 2000
\`\`\`

![](/img/1744031926928.png)

### Token Rate Limiting Configuration
In the \`AI Route Config\`, click Edit and configure \`AI Token Rate Limit\` for aliyun.

![](/img/1744031931351.png)

![](/img/1744031935221.png)

Fill in the following fields as a reference in \`AI Token Rate Limit\` configuration:

\`\`\`yaml
rule_items:
- limit_by_per_header: x-api-key
  limit_keys:
  - key: "*"
    token_per_minute: 5 # Limit to 5 tokens per minute
rule_name: "default_rule"

redis:
  service_name: local-redis.static
  service_port: 80
\`\`\`

![](/img/1744031938650.png)



# Debugging
Open the system's built-in command line and send a request using the following command (if the HTTP service is not deployed on port 8080, modify it to the corresponding port):

\`\`\`yaml
# Query quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota?consumer=aliyun-user1' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'
  
# Refresh quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota/refresh' \\
  -d 'consumer=aliyun-user1&quota=100' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'
  
# Increase quota, x-api-key is the credential for aliyun-admin
curl 'http://localhost:8080/v1/chat/completions/quota/delta' \\
  -d 'consumer=aliyun-user1&value=100' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
  -H 'x-higress-llm-model: qwen-max'

# Request, x-api-key is the credential for aliyun-user1
curl 'http://localhost:8080/v1/chat/completions' \\
  -H 'x-api-key:xxxxxxxxxxxx' \\
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

![](/img/1744031942367.png)

![](/img/1744031945996.png)



# Observability
In the \`AI Dashboard\`, you can observe AI requests. Observability metrics include the number of input/output tokens per second, token usage by each provider/model, and the token usage of consumers etc.

![](/img/1744031949872.png)


> If you encounter any issues during deployment, feel free to leave your information in the [Higress Github Issue](https://github.com/alibaba/higress/issues).
>
> If you are interested in future updates of Higress or wish to provide feedback, welcome to star [Higress Github Repo](https://github.com/alibaba/higress/).`},o=function(){return e},r=function(){return[{depth:1,slug:"scene-description",text:"Scene Description"},{depth:1,slug:"deploy-higress-ai-gateway",text:"Deploy Higress AI Gateway"},{depth:1,slug:"console-configuration",text:"Console Configuration"},{depth:2,slug:"configure-consumers",text:"Configure Consumers"},{depth:2,slug:"configure-redis-storage-service",text:"Configure Redis Storage Service"},{depth:3,slug:"build-redis-service",text:"Build Redis Service"},{depth:3,slug:"configure-redis-service-source",text:"Configure Redis Service Source"},{depth:2,slug:"configure-ai-route-strategy",text:"Configure AI Route Strategy"},{depth:3,slug:"consumer-authentication-configuration",text:"Consumer Authentication Configuration"},{depth:3,slug:"token-quota-configuration",text:"Token Quota Configuration"},{depth:3,slug:"token-rate-limiting-configuration",text:"Token Rate Limiting Configuration"},{depth:1,slug:"debugging",text:"Debugging"},{depth:1,slug:"observability",text:"Observability"}]},s=l((f,v,x)=>{const{layout:E,...t}=n;return t.file=i,t.url=a,p`${u()}${g(e)}`})});export{s as Content,y as __tla,o as compiledContent,s as default,i as file,n as frontmatter,r as getHeadings,c as rawContent,a as url};
