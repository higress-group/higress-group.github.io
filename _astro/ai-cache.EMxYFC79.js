import{c,__tla as l}from"./astro-component.m4CCZO6J.js";import{r as p,m as u,u as h,__tla as g}from"./constant.NEBTwwBu.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let t,a,s,o,i,d,r,f=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>LLM result caching plugin, the default configuration can be directly used for result caching under the OpenAI protocol, and it supports caching of both streaming and non-streaming responses.</p>
<p><strong>Tips</strong></p>
<p>When carrying the request header <code dir="auto">x-higress-skip-ai-cache: on</code>, the current request will not use content from the cache but will be directly forwarded to the backend service. Additionally, the response content from this request will not be cached.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code>
Plugin Execution Priority: <code dir="auto">10</code></p>
<h2 id="configuration-description">Configuration Description</h2>







































































































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>cacheKeyFrom.requestBody</td><td>string</td><td>optional</td><td>\u201D<a href="mailto:messages.@reverse.0.content" referrerpolicy="unsafe-url">messages.@reverse.0.content</a>\u201D</td><td>Extracts a string from the request Body based on <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> syntax</td></tr><tr><td>cacheValueFrom.responseBody</td><td>string</td><td>optional</td><td>\u201Dchoices.0.message.content\u201D</td><td>Extracts a string from the response Body based on <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> syntax</td></tr><tr><td>cacheStreamValueFrom.responseBody</td><td>string</td><td>optional</td><td>\u201Dchoices.0.delta.content\u201D</td><td>Extracts a string from the streaming response Body based on <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON PATH</a> syntax</td></tr><tr><td>cacheKeyPrefix</td><td>string</td><td>optional</td><td>\u201Dhigress-ai-cache:\u201C</td><td>Prefix for the Redis cache key</td></tr><tr><td>cacheTTL</td><td>integer</td><td>optional</td><td>0</td><td>Cache expiration time in seconds, default value is 0, which means never expire</td></tr><tr><td>redis.serviceName</td><td>string</td><td>required</td><td>-</td><td>The complete FQDN name of the Redis service, including the service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local</td></tr><tr><td>redis.servicePort</td><td>integer</td><td>optional</td><td>6379</td><td>Redis service port</td></tr><tr><td>redis.timeout</td><td>integer</td><td>optional</td><td>1000</td><td>Timeout for requests to Redis, in milliseconds</td></tr><tr><td>redis.username</td><td>string</td><td>optional</td><td>-</td><td>Username for logging into Redis</td></tr><tr><td>redis.database</td><td>int</td><td>optional</td><td>0</td><td>The database ID used, limited to Redis, for example, configured as 1, corresponds to <code dir="auto">SELECT 1</code>.</td></tr><tr><td>redis.password</td><td>string</td><td>optional</td><td>-</td><td>Password for logging into Redis</td></tr><tr><td>returnResponseTemplate</td><td>string</td><td>optional</td><td><code dir="auto">{"id":"from-cache","choices":[%s],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}</code></td><td>Template for returning HTTP response, with %s marking the part to be replaced by cache value</td></tr><tr><td>returnStreamResponseTemplate</td><td>string</td><td>optional</td><td><code dir="auto">data:{"id":"from-cache","choices":[{"index":0,"delta":{"role":"assistant","content":"%s"},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\\n\\ndata:[DONE]\\n\\n</code></td><td>Template for returning streaming HTTP response, with %s marking the part to be replaced by cache value</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">database</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis:\x7F  serviceName: my-redis.dns\x7F  timeout: 2000\x7F  servicePort: 6379\x7F  database: 1"><div></div></button></div></figure></div>
<h2 id="advanced-usage">Advanced Usage</h2>
<p>The current default cache key is based on the GJSON PATH expression: <code dir="auto">messages.@reverse.0.content</code>, meaning to get the content of the first item after reversing the messages array;<br>
GJSON PATH supports conditional syntax, for instance, if you want to take the content of the last role as user as the key, it can be written as: <code dir="auto">messages.@reverse.#(role=="user").content</code>;<br>
If you want to concatenate all the content with role as user into an array as the key, it can be written as: <code dir="auto">messages.@reverse.#(role=="user")#.content</code>;<br>
It also supports pipeline syntax, for example, if you want to take the second role as user as the key, it can be written as: <code dir="auto">messages.@reverse.#(role=="user")#.content|1</code>.<br>
For more usage, you can refer to the <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">official documentation</a> and use the <a href="https://gjson.dev/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Playground</a> for syntax testing.</p>`,o={title:"AI Cache",keywords:["higress","ai cache"],description:"AI Cache Plugin Configuration Reference"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-provider/ai-cache.md",r=void 0,d=function(){return`## Function Description
LLM result caching plugin, the default configuration can be directly used for result caching under the OpenAI protocol, and it supports caching of both streaming and non-streaming responses.

**Tips**

When carrying the request header \`x-higress-skip-ai-cache: on\`, the current request will not use content from the cache but will be directly forwarded to the backend service. Additionally, the response content from this request will not be cached.

## Runtime Properties
Plugin Execution Phase: \`Authentication Phase\`
Plugin Execution Priority: \`10\`

## Configuration Description
| Name                              | Type     | Requirement | Default                                                                                                                                                                                                                                                 | Description                                                                                                                             |
| --------                          | -------- | --------    | --------                                                                                                                                                                                                                                                | --------                                                                                                                                |
| cacheKeyFrom.requestBody          | string   | optional    | "messages.@reverse.0.content"                                                                                                                                                                                                                           | Extracts a string from the request Body based on [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) syntax            |
| cacheValueFrom.responseBody       | string   | optional    | "choices.0.message.content"                                                                                                                                                                                                                             | Extracts a string from the response Body based on [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) syntax           |
| cacheStreamValueFrom.responseBody | string   | optional    | "choices.0.delta.content"                                                                                                                                                                                                                               | Extracts a string from the streaming response Body based on [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) syntax |
| cacheKeyPrefix                    | string   | optional    | "higress-ai-cache:"                                                                                                                                                                                                                                     | Prefix for the Redis cache key                                                                                                          |
| cacheTTL                          | integer  | optional    | 0                                                                                                                                                                                                                                                       | Cache expiration time in seconds, default value is 0, which means never expire                                                          |
| redis.serviceName                 | string   | required    | -                                                                                                                                                                                                                                                       | The complete FQDN name of the Redis service, including the service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local              |
| redis.servicePort                 | integer  | optional    | 6379                                                                                                                                                                                                                                                    | Redis service port                                                                                                                      |
| redis.timeout                     | integer  | optional    | 1000                                                                                                                                                                                                                                                    | Timeout for requests to Redis, in milliseconds                                                                                          |
| redis.username                    | string   | optional    | -                                                                                                                                                                                                                                                       | Username for logging into Redis                                                                                                         |
| redis.database                    | int      | optional    | 0                                                                                                                                                                                                                                                       | The database ID used, limited to Redis, for example, configured as 1, corresponds to \`SELECT 1\`.                                        |
| redis.password                    | string   | optional    | -                                                                                                                                                                                                                                                       | Password for logging into Redis                                                                                                         |
| returnResponseTemplate            | string   | optional    | \`{"id":"from-cache","choices":[%s],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\`                                                                                                     | Template for returning HTTP response, with %s marking the part to be replaced by cache value                                            |
| returnStreamResponseTemplate      | string   | optional    | \`data:{"id":"from-cache","choices":[{"index":0,"delta":{"role":"assistant","content":"%s"},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\\n\\ndata:[DONE]\\n\\n\` | Template for returning streaming HTTP response, with %s marking the part to be replaced by cache value                                  |

## Configuration Example
\`\`\`yaml  
redis:  
  serviceName: my-redis.dns  
  timeout: 2000  
  servicePort: 6379
  database: 1
\`\`\`  

## Advanced Usage
The current default cache key is based on the GJSON PATH expression: \`messages.@reverse.0.content\`, meaning to get the content of the first item after reversing the messages array;  
GJSON PATH supports conditional syntax, for instance, if you want to take the content of the last role as user as the key, it can be written as: \`messages.@reverse.#(role=="user").content\`;  
If you want to concatenate all the content with role as user into an array as the key, it can be written as: \`messages.@reverse.#(role=="user")#.content\`;  
It also supports pipeline syntax, for example, if you want to take the second role as user as the key, it can be written as: \`messages.@reverse.#(role=="user")#.content|1\`.  
For more usage, you can refer to the [official documentation](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) and use the [GJSON Playground](https://gjson.dev/) for syntax testing.
`},a=function(){return e},i=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:2,slug:"advanced-usage",text:"Advanced Usage"}]},t=c((y,b,v)=>{const{layout:x,...n}=o;return n.file=s,n.url=r,p`${u()}${h(e)}`})});export{t as Content,f as __tla,a as compiledContent,t as default,s as file,o as frontmatter,i as getHeadings,d as rawContent,r as url};
