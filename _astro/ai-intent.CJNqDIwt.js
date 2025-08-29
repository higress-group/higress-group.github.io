import{c as l,__tla as c}from"./astro-component.B3fYMMDi.js";import{r as p,m as u,u as g,__tla as h}from"./constant.B9AWHwfy.js";import{__tla as m}from"./astro/assets-service.DmDXK_Mj.js";let t,r,s,n,a,d,o,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>LLM Intent Recognition plugin can intelligently determine the alignment between user requests and the functionalities of a certain domain or agent, thereby enhancing the application effectiveness of different models and user experience.</p>
<h2 id="execution-attributes">Execution Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Default Phase</code></p>
<p>Plugin execution priority: <code dir="auto">700</code></p>
<h2 id="configuration-instructions">Configuration Instructions</h2>
<blockquote>
<ol>
<li>This plugin\u2019s priority is higher than that of plugins such as ai-proxy which follow up and use intent. Subsequent plugins can retrieve the intent category using the proxywasm.GetProperty([]string{\u201Cintent_category\u201D}) method and make selections for different cache libraries or large models based on the intent category.</li>
<li>A new Higress large model route needs to be created to allow this plugin to access the large model. For example: the route should use <code dir="auto">/intent</code> as a prefix, the service should select the large model service, and the ai-proxy plugin should be enabled for this route.</li>
<li>A fixed-address service needs to be created (for example, intent-service), which points to 127.0.0.1:80 (i.e., the gateway instance and port). The ai-intent plugin requires this service for calling to access the newly added route. The service name corresponds to llm.proxyServiceName (a DNS type service can also be created to allow the plugin to access other large models).</li>
<li>If using a fixed-address service to call the gateway itself, 127.0.0.1 must be added to the gateway\u2019s access whitelist.</li>
</ol>
</blockquote>











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">scene.category</code></td><td>string</td><td>Required</td><td>-</td><td>Preset scene categories, separated by \u201D|\u201D, e.g.: \u201CFinance|E-commerce|Law|Higress\u201D</td></tr><tr><td><code dir="auto">scene.prompt</code></td><td>string</td><td>Optional</td><td>You are a smart category recognition assistant responsible for determining which preset category a user\u2019s question belongs to based on the question posed by the user and the preset categories, and returning the corresponding category. The user\u2019s question is: %s, the preset categories are %s, directly return a specific category; if not found, return \u2018NotFound\u2019.</td><td>llm request prompt template</td></tr><tr><td><code dir="auto">llm.proxyServiceName</code></td><td>string</td><td>Required</td><td>-</td><td>Newly created Higress service pointing to the large model (use the FQDN value from Higress)</td></tr><tr><td><code dir="auto">llm.proxyUrl</code></td><td>string</td><td>Required</td><td>-</td><td>The full path to the large model route request address, which can be the gateway\u2019s own address or the address of another large model (OpenAI protocol), for example: <a href="http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions</a></td></tr><tr><td><code dir="auto">llm.proxyDomain</code></td><td>string</td><td>Optional</td><td>Retrieved from proxyUrl</td><td>Domain of the large model service</td></tr><tr><td><code dir="auto">llm.proxyPort</code></td><td>string</td><td>Optional</td><td>Retrieved from proxyUrl</td><td>Port number of the large model service</td></tr><tr><td><code dir="auto">llm.proxyApiKey</code></td><td>string</td><td>Optional</td><td>-</td><td>API_KEY corresponding to the external large model service when using it</td></tr><tr><td><code dir="auto">llm.proxyModel</code></td><td>string</td><td>Optional</td><td>qwen-long</td><td>Type of the large model</td></tr><tr><td><code dir="auto">llm.proxyTimeout</code></td><td>number</td><td>Optional</td><td>10000</td><td>Timeout for calling the large model, unit ms, default: 10000ms</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">scene</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">category</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Finance|E-commerce|Law|Higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">prompt</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You are a smart category recognition assistant responsible for determining which preset category a user's question belongs to based on the question posed by the user and the preset categories, and returning the corresponding category. The user's question is: '%s', the preset categories are '%s', directly return a specific category; if not found, return 'NotFound'."</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">llm</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyServiceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"intent-service.static"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyDomain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"127.0.0.1"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"80"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyModel</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-long"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyApiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">proxyTimeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"10000"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="scene:\x7F  category: &#x22;Finance|E-commerce|Law|Higress&#x22;\x7F  prompt: &#x22;You are a smart category recognition assistant responsible for determining which preset category a user&#x27;s question belongs to based on the question posed by the user and the preset categories, and returning the corresponding category. The user&#x27;s question is: &#x27;%s&#x27;, the preset categories are &#x27;%s&#x27;, directly return a specific category; if not found, return &#x27;NotFound&#x27;.&#x22;\x7Fllm:\x7F  proxyServiceName: &#x22;intent-service.static&#x22;\x7F  proxyUrl: &#x22;http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions&#x22;\x7F  proxyDomain: &#x22;127.0.0.1&#x22;\x7F  proxyPort: &#x22;80&#x22;\x7F  proxyModel: &#x22;qwen-long&#x22;\x7F  proxyApiKey: &#x22;&#x22;\x7F  proxyTimeout: &#x22;10000&#x22;"><div></div></button></div></figure></div>`,n={title:"AI Intent Recognition",keywords:["AI Gateway","AI Intent Recognition"],description:"AI Intent Recognition Plugin Configuration Reference"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/others/ai-intent.md",o=void 0,d=function(){return`## Function Description
LLM Intent Recognition plugin can intelligently determine the alignment between user requests and the functionalities of a certain domain or agent, thereby enhancing the application effectiveness of different models and user experience.

## Execution Attributes
Plugin execution phase: \`Default Phase\`

Plugin execution priority: \`700\`

## Configuration Instructions
> 1. This plugin's priority is higher than that of plugins such as ai-proxy which follow up and use intent. Subsequent plugins can retrieve the intent category using the proxywasm.GetProperty([]string{"intent_category"}) method and make selections for different cache libraries or large models based on the intent category.
> 2. A new Higress large model route needs to be created to allow this plugin to access the large model. For example: the route should use \`/intent\` as a prefix, the service should select the large model service, and the ai-proxy plugin should be enabled for this route.
> 3. A fixed-address service needs to be created (for example, intent-service), which points to 127.0.0.1:80 (i.e., the gateway instance and port). The ai-intent plugin requires this service for calling to access the newly added route. The service name corresponds to llm.proxyServiceName (a DNS type service can also be created to allow the plugin to access other large models).
> 4. If using a fixed-address service to call the gateway itself, 127.0.0.1 must be added to the gateway's access whitelist.

| Name           |   Data Type        | Requirement | Default Value | Description                                                      |
| -------------- | --------------- | ----------- | ------------- | --------------------------------------------------------------- |
| \`scene.category\`         | string          | Required     | -             | Preset scene categories, separated by "\\|", e.g.: "Finance\\|E-commerce\\|Law\\|Higress" |
| \`scene.prompt\`         | string          | Optional     | You are a smart category recognition assistant responsible for determining which preset category a user\u2019s question belongs to based on the question posed by the user and the preset categories, and returning the corresponding category. The user's question is: %s, the preset categories are %s, directly return a specific category; if not found, return 'NotFound'.     | llm request prompt template |
| \`llm.proxyServiceName\`         | string          | Required     | -             | Newly created Higress service pointing to the large model (use the FQDN value from Higress) |
| \`llm.proxyUrl\`         | string          | Required     | -             | The full path to the large model route request address, which can be the gateway\u2019s own address or the address of another large model (OpenAI protocol), for example: http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions |
| \`llm.proxyDomain\`         | string          | Optional     |   Retrieved from proxyUrl      | Domain of the large model service |
| \`llm.proxyPort\`         | string          | Optional     | Retrieved from proxyUrl     | Port number of the large model service |
| \`llm.proxyApiKey\`         | string          | Optional     | -             | API_KEY corresponding to the external large model service when using it |
| \`llm.proxyModel\`         | string          | Optional     | qwen-long      | Type of the large model |
| \`llm.proxyTimeout\`         | number          | Optional     | 10000         | Timeout for calling the large model, unit ms, default: 10000ms |

## Configuration Example
\`\`\`yaml
scene:
  category: "Finance|E-commerce|Law|Higress"
  prompt: "You are a smart category recognition assistant responsible for determining which preset category a user's question belongs to based on the question posed by the user and the preset categories, and returning the corresponding category. The user's question is: '%s', the preset categories are '%s', directly return a specific category; if not found, return 'NotFound'."
llm:
  proxyServiceName: "intent-service.static"
  proxyUrl: "http://127.0.0.1:80/intent/compatible-mode/v1/chat/completions"
  proxyDomain: "127.0.0.1"
  proxyPort: "80"
  proxyModel: "qwen-long"
  proxyApiKey: ""
  proxyTimeout: "10000"
\`\`\`
`},r=function(){return e},a=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-attributes",text:"Execution Attributes"},{depth:2,slug:"configuration-instructions",text:"Configuration Instructions"},{depth:2,slug:"configuration-example",text:"Configuration Example"}]},t=l((f,x,v)=>{const{layout:b,...i}=n;return i.file=s,i.url=o,p`${u()}${g(e)}`})});export{t as Content,y as __tla,r as compiledContent,t as default,s as file,n as frontmatter,a as getHeadings,d as rawContent,o as url};
