import{c,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as p,m as v,u,__tla as y}from"./constant.Dvn6RT6C.js";import{__tla as g}from"./astro/assets-service.tyfV9CK3.js";let s,o,a,n,r,l,i,x=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let e;e=`<h2 id="functional-description">Functional Description</h2>
<p><code dir="auto">AI History Dialogue</code> implements user identity recognition based on request headers and automatically caches the historical dialogues of corresponding users, which are then automatically filled into the context in subsequent dialogues. It also supports users to actively query historical dialogues.</p>
<p><strong>Note</strong></p>
<blockquote>
<p>When the path suffix matches <code dir="auto">ai-history/query</code>, it will return the historical dialogues.</p>
</blockquote>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin Execution Phase: <code dir="auto">Default Phase</code>
Plugin Execution Priority: <code dir="auto">650</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>











































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>identityHeader</td><td>string</td><td>optional</td><td>\u201DAuthorization\u201D</td><td>The request header for identity resolution, can be Authorization, X-Mse-Consumer, etc.</td></tr><tr><td>fillHistoryCnt</td><td>integer</td><td>optional</td><td>3</td><td>Default number of historical dialogues to be filled.</td></tr><tr><td>cacheKeyPrefix</td><td>string</td><td>optional</td><td>\u201Dhigress-ai-history:\u201C</td><td>Prefix for Redis cache key.</td></tr><tr><td>cacheTTL</td><td>integer</td><td>optional</td><td>0</td><td>Cache expiration time in seconds, default value is 0, meaning it never expires.</td></tr><tr><td>redis.serviceName</td><td>string</td><td>required</td><td>-</td><td>Redis service name, full FQDN name with service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local</td></tr><tr><td>redis.servicePort</td><td>integer</td><td>optional</td><td>6379</td><td>Redis service port.</td></tr><tr><td>redis.timeout</td><td>integer</td><td>optional</td><td>1000</td><td>Timeout for requests to Redis, in milliseconds.</td></tr><tr><td>redis.username</td><td>string</td><td>optional</td><td>-</td><td>Username for logging into Redis.</td></tr><tr><td>redis.password</td><td>string</td><td>optional</td><td>-</td><td>Password for logging into Redis.</td></tr></tbody></table>
<h2 id="usage-example">Usage Example</h2>
<h3 id="configuration-information">Configuration Information</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis:\x7F  serviceName: my-redis.dns\x7F  timeout: 2000"><div></div></button></div></figure></div>
<h3 id="request-example">Request Example</h3>
<p><strong>Auto-fill Request Example:</strong></p>
<p>First Round Request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8"> </span></span><span style="--0:#e1e4e8">curl 'http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Accept: application/json, text/event-stream' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Content-Type: application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data-raw '{"model":"qwen-long","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"content": "Can Higress replace Nginx?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">],"presence_penalty":0,"temperature":0.7,"top_p":0.95}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=" curl &#x27;http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3&#x27; \\\x7F  -H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -H &#x27;Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3&#x27;\x7F  --data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen-long&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Can Higress replace Nginx?&#x22;\x7F        }\x7F    ],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0.7,&#x22;top_p&#x22;:0.95}&#x27;"><div></div></button></div></figure></div>
<p>After Request Fill:</p>
<blockquote>
<p>First round request, no fill. Consistent with the original request.</p>
</blockquote>
<p>First Round Response:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"02f4c621-820e-97d4-a905-1e3d0d8f59c6"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.</span><span style="--0:#79B8FF">\\n\\n</span><span style="--0:#9ECBFF">Therefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1724077770</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-long"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"usage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"prompt_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7316</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"completion_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">164</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"total_tokens"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7480</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;id&#x22;: &#x22;02f4c621-820e-97d4-a905-1e3d0d8f59c6&#x22;,\x7F  &#x22;choices&#x22;: [\x7F    {\x7F      &#x22;index&#x22;: 0,\x7F      &#x22;message&#x22;: {\x7F        &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F        &#x22;content&#x22;: &#x22;While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\n\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it&#x27;s a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct.&#x22;\x7F      },\x7F      &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F    }\x7F  ],\x7F  &#x22;created&#x22;: 1724077770,\x7F  &#x22;model&#x22;: &#x22;qwen-long&#x22;,\x7F  &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F  &#x22;usage&#x22;: {\x7F    &#x22;prompt_tokens&#x22;: 7316,\x7F    &#x22;completion_tokens&#x22;: 164,\x7F    &#x22;total_tokens&#x22;: 7480\x7F  }\x7F}"><div></div></button></div></figure></div>
<p>Second Round Request:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8"> </span></span><span style="--0:#e1e4e8">curl 'http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Accept: application/json, text/event-stream' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Content-Type: application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data-raw '{"model":"qwen-long","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"content": "What about Spring Cloud GateWay?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">],"presence_penalty":0,"temperature":0.7,"top_p":0.95}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=" curl &#x27;http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3&#x27; \\\x7F  -H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -H &#x27;Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3&#x27;\x7F  --data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen-long&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;What about Spring Cloud GateWay?&#x22;\x7F        }\x7F    ],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0.7,&#x22;top_p&#x22;:0.95}&#x27;"><div></div></button></div></figure></div>
<p>After Request Fill:</p>
<blockquote>
<p>Second round request, automatically filled with the historical dialogue from the previous round.</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8"> </span></span><span style="--0:#e1e4e8">curl 'http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Accept: application/json, text/event-stream' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Content-Type: application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data-raw '{"model":"qwen-long","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">         </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"content": "Can Higress replace Nginx?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"role": "assistant",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"content": "While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\n\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"content": "What about Spring Cloud GateWay?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">],"presence_penalty":0,"temperature":0.7,"top_p":0.95}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code=" curl &#x27;http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3&#x27; \\\x7F  -H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -H &#x27;Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3&#x27;\x7F  --data-raw &#x27;{&#x22;model&#x22;:&#x22;qwen-long&#x22;,&#x22;frequency_penalty&#x22;:0,&#x22;max_tokens&#x22;:800,&#x22;stream&#x22;:false,&#x22;messages&#x22;:[\x7F         {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;Can Higress replace Nginx?&#x22;\x7F        },\x7F        {\x7F            &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F            &#x22;content&#x22;: &#x22;While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\n\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it&#x27;s a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct.&#x22;\x7F        },\x7F        {\x7F            &#x22;role&#x22;: &#x22;user&#x22;,\x7F            &#x22;content&#x22;: &#x22;What about Spring Cloud GateWay?&#x22;\x7F        }\x7F    ],&#x22;presence_penalty&#x22;:0,&#x22;temperature&#x22;:0.7,&#x22;top_p&#x22;:0.95}&#x27;"><div></div></button></div></figure></div>
<p>Each round of requests only needs to include the current question and the number of historical dialogues to fill in, enabling automatic filling of historical dialogues.</p>
<p><strong>Example of Retrieving Historical Data:</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl 'http://example.com/api/openai/v1/chat/completions/ai-history/query?cnt=3' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Accept: application/json, text/event-stream' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Content-Type: application/json' \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">-H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;http://example.com/api/openai/v1/chat/completions/ai-history/query?cnt=3&#x27; \\\x7F  -H &#x27;Accept: application/json, text/event-stream&#x27; \\\x7F  -H &#x27;Content-Type: application/json&#x27; \\\x7F  -H &#x27;Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3&#x27;"><div></div></button></div></figure></div>
<p>Response Example:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Can Higress replace Nginx?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">n</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"What about Spring Cloud GateWay?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Compared to Spring Cloud Gateway, Higress is also an API gateway, but there are some key differences between them:</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">n</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">n- **Design Philosophy**: Spring Cloud Gateway mainly targets service-to-service communication and routing in microservice architectures. As part of the Spring Cloud ecosystem, it is more focused on scenarios for Java developers in microservices. In contrast, Higress, as a cloud-native gateway, not only focuses on service communication but also offers a range of cloud-native features such as service mesh, observability, security management, etc.</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">n- **Deployment Method**: Spring Cloud Gateway typically runs as part of microservice applications on application servers, whereas Higress usually deploys as an independent microservice or containerized service in Kubernetes environments, suitable for modern cloud-native deployment models.</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">n- **Scalability and Integration**: Higress provides wider integration and support, for example, deep integration with ecosystems like Istio, Kubernetes, etc., making it better suited for complex cloud-native environments.</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">n</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">nTherefore, if your application is built on Spring Cloud and you want a lightweight, easy-to-integrate service gateway, then Spring Cloud Gateway might be a suitable choice. However, if you are building or refactoring cloud-native applications and require more powerful routing rules, service governance, observability, etc., then Higress is likely a better choice."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Can Higress replace Nginx?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">n</span><span style="--0:#79B8FF">\\\\</span><span style="--0:#9ECBFF">nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="[\x7F  {\x7F    &#x22;role&#x22;: &#x22;user&#x22;,\x7F    &#x22;content&#x22;: &#x22;Can Higress replace Nginx?&#x22;\x7F  },\x7F  {\x7F    &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F    &#x22;content&#x22;: &#x22;While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\\\n\\\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it&#x27;s a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct.&#x22;\x7F  },\x7F  {\x7F    &#x22;role&#x22;: &#x22;user&#x22;,\x7F    &#x22;content&#x22;: &#x22;What about Spring Cloud GateWay?&#x22;\x7F  },\x7F  {\x7F    &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F    &#x22;content&#x22;: &#x22;Compared to Spring Cloud Gateway, Higress is also an API gateway, but there are some key differences between them:\\\\n\\\\n- **Design Philosophy**: Spring Cloud Gateway mainly targets service-to-service communication and routing in microservice architectures. As part of the Spring Cloud ecosystem, it is more focused on scenarios for Java developers in microservices. In contrast, Higress, as a cloud-native gateway, not only focuses on service communication but also offers a range of cloud-native features such as service mesh, observability, security management, etc.\\\\n- **Deployment Method**: Spring Cloud Gateway typically runs as part of microservice applications on application servers, whereas Higress usually deploys as an independent microservice or containerized service in Kubernetes environments, suitable for modern cloud-native deployment models.\\\\n- **Scalability and Integration**: Higress provides wider integration and support, for example, deep integration with ecosystems like Istio, Kubernetes, etc., making it better suited for complex cloud-native environments.\\\\n\\\\nTherefore, if your application is built on Spring Cloud and you want a lightweight, easy-to-integrate service gateway, then Spring Cloud Gateway might be a suitable choice. However, if you are building or refactoring cloud-native applications and require more powerful routing rules, service governance, observability, etc., then Higress is likely a better choice.&#x22;\x7F  },\x7F  {\x7F    &#x22;role&#x22;: &#x22;user&#x22;,\x7F    &#x22;content&#x22;: &#x22;Can Higress replace Nginx?&#x22;\x7F  },\x7F  {\x7F    &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F    &#x22;content&#x22;: &#x22;While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\\\n\\\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it&#x27;s a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct.&#x22;\x7F  }\x7F]"><div></div></button></div></figure></div>
<p>Returns three historical dialogues. If the <code dir="auto">cnt</code> parameter is not provided, it will default to returning all cached historical dialogues.</p>`,n={title:"AI History Dialogue",keywords:["AI Gateway","AI History Dialogue"],description:"AI History Dialogue Plugin Configuration Reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/others/ai-history.md",i=void 0,l=function(){return`## Functional Description
\`AI History Dialogue\` implements user identity recognition based on request headers and automatically caches the historical dialogues of corresponding users, which are then automatically filled into the context in subsequent dialogues. It also supports users to actively query historical dialogues.

**Note**

> When the path suffix matches \`ai-history/query\`, it will return the historical dialogues.

## Runtime Properties
Plugin Execution Phase: \`Default Phase\`
Plugin Execution Priority: \`650\`

## Configuration Fields
| Name                | Data Type  | Required   | Default Value                   | Description                                                               |
|-------------------|---------|----------|-----------------------|---------------------------------------------------------------------------|
| identityHeader    | string  | optional | "Authorization"       | The request header for identity resolution, can be Authorization, X-Mse-Consumer, etc.                               |
| fillHistoryCnt    | integer | optional | 3                     | Default number of historical dialogues to be filled.                                                                |
| cacheKeyPrefix    | string  | optional | "higress-ai-history:" | Prefix for Redis cache key.                                                             |
| cacheTTL          | integer | optional | 0                     | Cache expiration time in seconds, default value is 0, meaning it never expires.                                                  |
| redis.serviceName | string  | required | -                     | Redis service name, full FQDN name with service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local |
| redis.servicePort | integer | optional | 6379                  | Redis service port.                                                                |
| redis.timeout     | integer | optional | 1000                  | Timeout for requests to Redis, in milliseconds.                                                      |
| redis.username    | string  | optional | -                     | Username for logging into Redis.                                                             |
| redis.password    | string  | optional | -                     | Password for logging into Redis.                                                              |

## Usage Example
### Configuration Information
\`\`\`yaml
redis:
  serviceName: my-redis.dns
  timeout: 2000
\`\`\`

### Request Example
**Auto-fill Request Example:**

First Round Request:
\`\`\`
 curl 'http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3' \\
  -H 'Accept: application/json, text/event-stream' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'
  --data-raw '{"model":"qwen-long","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[
        {
            "role": "user",
            "content": "Can Higress replace Nginx?"
        }
    ],"presence_penalty":0,"temperature":0.7,"top_p":0.95}'
\`\`\`
After Request Fill:
> First round request, no fill. Consistent with the original request.

First Round Response:
\`\`\`json
{
  "id": "02f4c621-820e-97d4-a905-1e3d0d8f59c6",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\n\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."
      },
      "finish_reason": "stop"
    }
  ],
  "created": 1724077770,
  "model": "qwen-long",
  "object": "chat.completion",
  "usage": {
    "prompt_tokens": 7316,
    "completion_tokens": 164,
    "total_tokens": 7480
  }
}
\`\`\`

Second Round Request:
\`\`\`
 curl 'http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3' \\
  -H 'Accept: application/json, text/event-stream' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'
  --data-raw '{"model":"qwen-long","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[
        {
            "role": "user",
            "content": "What about Spring Cloud GateWay?"
        }
    ],"presence_penalty":0,"temperature":0.7,"top_p":0.95}'
\`\`\`
After Request Fill:
> Second round request, automatically filled with the historical dialogue from the previous round.
\`\`\` 
 curl 'http://example.com/api/openai/v1/chat/completions?fill_history_cnt=3' \\
  -H 'Accept: application/json, text/event-stream' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'
  --data-raw '{"model":"qwen-long","frequency_penalty":0,"max_tokens":800,"stream":false,"messages":[
         {
            "role": "user",
            "content": "Can Higress replace Nginx?"
        },
        {
            "role": "assistant",
            "content": "While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\n\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."
        },
        {
            "role": "user",
            "content": "What about Spring Cloud GateWay?"
        }
    ],"presence_penalty":0,"temperature":0.7,"top_p":0.95}'
\`\`\`

Each round of requests only needs to include the current question and the number of historical dialogues to fill in, enabling automatic filling of historical dialogues.

**Example of Retrieving Historical Data:**
\`\`\`
curl 'http://example.com/api/openai/v1/chat/completions/ai-history/query?cnt=3' \\
  -H 'Accept: application/json, text/event-stream' \\
  -H 'Content-Type: application/json' \\
  -H 'Authorization: Bearer sk-Nzf7RtkdS4s0zFyn5575124129254d9bAf9473A5D7D06dD3'
\`\`\`

Response Example:
\`\`\`json
[
  {
    "role": "user",
    "content": "Can Higress replace Nginx?"
  },
  {
    "role": "assistant",
    "content": "While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\\\n\\\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."
  },
  {
    "role": "user",
    "content": "What about Spring Cloud GateWay?"
  },
  {
    "role": "assistant",
    "content": "Compared to Spring Cloud Gateway, Higress is also an API gateway, but there are some key differences between them:\\\\n\\\\n- **Design Philosophy**: Spring Cloud Gateway mainly targets service-to-service communication and routing in microservice architectures. As part of the Spring Cloud ecosystem, it is more focused on scenarios for Java developers in microservices. In contrast, Higress, as a cloud-native gateway, not only focuses on service communication but also offers a range of cloud-native features such as service mesh, observability, security management, etc.\\\\n- **Deployment Method**: Spring Cloud Gateway typically runs as part of microservice applications on application servers, whereas Higress usually deploys as an independent microservice or containerized service in Kubernetes environments, suitable for modern cloud-native deployment models.\\\\n- **Scalability and Integration**: Higress provides wider integration and support, for example, deep integration with ecosystems like Istio, Kubernetes, etc., making it better suited for complex cloud-native environments.\\\\n\\\\nTherefore, if your application is built on Spring Cloud and you want a lightweight, easy-to-integrate service gateway, then Spring Cloud Gateway might be a suitable choice. However, if you are building or refactoring cloud-native applications and require more powerful routing rules, service governance, observability, etc., then Higress is likely a better choice."
  },
  {
    "role": "user",
    "content": "Can Higress replace Nginx?"
  },
  {
    "role": "assistant",
    "content": "While both Higress and Nginx have gateway functionalities, their design philosophies and application scenarios differ. Nginx is better known as a high-performance HTTP and reverse proxy server, while Higress is a cloud-native gateway that integrates many cloud-native features such as service mesh, observability, and security management in addition to basic routing capabilities.\\\\n\\\\nTherefore, if you want to deploy applications in a cloud-native environment and wish to obtain advanced features required for modern applications, such as service governance, gray release, circuit breaker and rate limiting, and security authentication, then Higress can be a good alternative to Nginx. However, if it's a relatively simple static website or only requires basic reverse proxy functionality, traditional Nginx configurations may be simpler and more direct."
  }
]
\`\`\`

Returns three historical dialogues. If the \`cnt\` parameter is not provided, it will default to returning all cached historical dialogues.
`},o=function(){return e},r=function(){return[{depth:2,slug:"functional-description",text:"Functional Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"usage-example",text:"Usage Example"},{depth:3,slug:"configuration-information",text:"Configuration Information"},{depth:3,slug:"request-example",text:"Request Example"}]},s=c((f,h,m)=>{const{layout:E,...t}=n;return t.file=a,t.url=i,p`${v()}${u(e)}`})});export{s as Content,x as __tla,o as compiledContent,s as default,a as file,n as frontmatter,r as getHeadings,l as rawContent,i as url};
