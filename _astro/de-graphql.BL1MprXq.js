import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r,m as v,u as E,__tla as y}from"./constant.BJJ7tkf7.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let a,l,n,e,t,d,i,g=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">de-graphql</code>\u63D2\u4EF6\u901A\u8FC7\u5C06URIs\u6620\u5C04\u5230GraphQL\u67E5\u8BE2\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5C06GraphQL\u4E0A\u6E38\u8F6C\u6362\u4E3A\u4F20\u7EDF\u670D\u52A1\u8FDB\u884C\u8BBF\u95EE</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">430</code></p>
<h3 id="\u53C2\u6570\u914D\u7F6E">\u53C2\u6570\u914D\u7F6E</h3>






























<table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td><code dir="auto">gql</code></td><td>graphql \u67E5\u8BE2</td><td>\u4E0D\u80FD\u4E3A\u7A7A</td></tr><tr><td><code dir="auto">endpoint</code></td><td>graphql \u67E5\u8BE2\u7AEF\u70B9</td><td><code dir="auto">/graphql</code></td></tr><tr><td><code dir="auto">timeout</code></td><td>\u67E5\u8BE2\u8FDE\u63A5\u8D85\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td><code dir="auto">5000</code></td></tr><tr><td><code dir="auto">domain</code></td><td>\u670D\u52A1\u57DF\u540D\uFF0C\u5F53\u670D\u52A1\u6765\u6E90\u662Fdns\u914D\u7F6E</td><td></td></tr></tbody></table>
<h3 id="\u63D2\u4EF6\u4F7F\u7528">\u63D2\u4EF6\u4F7F\u7528</h3>
<p><a href="https://github.com/alibaba/higress/issues/268" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/issues/268</a></p>
<ul>
<li>\u6D4B\u8BD5\u914D\u7F6E</li>
</ul>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.github.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">github</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">github.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/upstream-vhost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"api.github.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPS</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">github-api</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/api</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">de-graphql-github-api</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">github-api</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5000</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/graphql</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">api.github.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">gql</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">           </span></span><span style="--0:#9ECBFF">query ($owner:String! $name:String!){</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">              </span></span><span style="--0:#9ECBFF">repository(owner:$owner, name:$name) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">forkCount</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">description</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">             </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">           </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/de-graphql:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: api.github.com\x7F    name: github\x7F    port: 443\x7F    type: dns\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: github.dns\x7F    higress.io/upstream-vhost: &#x22;api.github.com&#x22;\x7F    higress.io/backend-protocol: HTTPS\x7F  name: github-api\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /api\x7F        pathType: Prefix\x7F---\x7FapiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: de-graphql-github-api\x7F  namespace: higress-system\x7Fspec:\x7F  matchRules:\x7F  - ingress:\x7F    - github-api\x7F    config:\x7F      timeout: 5000\x7F      endpoint: /graphql\x7F      domain: api.github.com\x7F      gql: |\x7F           query ($owner:String! $name:String!){\x7F              repository(owner:$owner, name:$name) {\x7F                name\x7F                forkCount\x7F                description\x7F             }\x7F           }\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/de-graphql:1.0.0"><div></div></button></div></figure></div>
<ul>
<li>\u6D4B\u8BD5\u7ED3\u679C</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://localhost/api?owner=alibaba&#x26;name=higress"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: Bearer some-token"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"data"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"repository"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"description"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Next-generation Cloud Native Gateway",</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"forkCount"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">149,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"higress"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x22;http://localhost/api?owner=alibaba&#x26;name=higress&#x22; -H &#x22;Authorization: Bearer some-token&#x22;\x7F\x7F{\x7F  &#x22;data&#x22;: {\x7F    &#x22;repository&#x22;: {\x7F      &#x22;description&#x22;: &#x22;Next-generation Cloud Native Gateway&#x22;,\x7F      &#x22;forkCount&#x22;: 149,\x7F      &#x22;name&#x22;: &#x22;higress&#x22;\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<h2 id="graphql\u4ECB\u7ECD">GraphQL\u4ECB\u7ECD</h2>
<h3 id="graphql-\u7AEF\u70B9">GraphQL \u7AEF\u70B9</h3>
<p>REST API \u6709\u591A\u4E2A\u7AEF\u70B9\uFF0CGraphQL API \u53EA\u6709\u4E00\u4E2A\u7AEF\u70B9\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">https://api.github.com/graphql</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="https://api.github.com/graphql"><div></div></button></div></figure></div>
<h3 id="\u4E0E-graphql-\u901A\u4FE1">\u4E0E GraphQL \u901A\u4FE1</h3>
<p>\u7531\u4E8E GraphQL \u64CD\u4F5C\u7531\u591A\u884C JSON \u7EC4\u6210\uFF0C\u53EF\u4EE5\u4F7F\u7528 curl \u6216\u4EFB\u4F55\u5176\u4ED6\u91C7\u7528 HTTP \u7684\u5E93\u3002</p>
<p>\u5728 REST \u4E2D\uFF0CHTTP \u8C13\u8BCD\u786E\u5B9A\u6267\u884C\u7684\u64CD\u4F5C\u3002 \u5728 GraphQL \u4E2D\uFF0C\u6267\u884C\u67E5\u8BE2\u8981\u63D0\u4F9B JSON \u8BF7\u6C42\u4F53\uFF0C\u56E0\u6B64 HTTP \u8C13\u8BCD\u4E3A POST\u3002 \u552F\u4E00\u7684\u4F8B\u5916\u662F\u5185\u7701\u67E5\u8BE2\uFF0C\u5B83\u662F\u4E00\u79CD\u7B80\u5355\u7684 GET \u5230\u7EC8\u7ED3\u70B9\u67E5\u8BE2\u3002</p>
<h3 id="graphql-post-\u8BF7\u6C42\u53C2\u6570">GraphQL POST \u8BF7\u6C42\u53C2\u6570</h3>
<p>\u6807\u51C6\u7684 GraphQL POST \u8BF7\u6C42\u60C5\u51B5\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u6DFB\u52A0 HTTP \u8BF7\u6C42\u5934\uFF1A Content-Type: application/json</li>
<li>\u4F7F\u7528 JSON \u683C\u5F0F\u7684\u8BF7\u6C42\u4F53</li>
<li>JSON \u8BF7\u6C42\u4F53\u5305\u542B\u4E09\u4E2A\u5B57\u6BB5
<ul>
<li>query\uFF1A\u67E5\u8BE2\u6587\u6863\uFF0C\u5FC5\u586B</li>
<li>variables\uFF1A\u53D8\u91CF\uFF0C\u9009\u586B</li>
<li>operationName\uFF1A\u64CD\u4F5C\u540D\u79F0\uFF0C\u9009\u586B\uFF0C\u67E5\u8BE2\u6587\u6863\u6709\u591A\u4E2A\u64CD\u4F5C\u65F6\u5FC5\u586B</li>
</ul>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"query"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{viewer{name}}"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"operationName"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"variables"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"value"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;query&#x22;: &#x22;{viewer{name}}&#x22;,\x7F  &#x22;operationName&#x22;: &#x22;&#x22;,\x7F  &#x22;variables&#x22;: {\x7F    &#x22;name&#x22;: &#x22;value&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="graphql-\u57FA\u672C\u53C2\u6570\u7C7B\u578B">GraphQL \u57FA\u672C\u53C2\u6570\u7C7B\u578B</h3>
<ul>
<li>\u57FA\u672C\u53C2\u6570\u7C7B\u578B\u5305\u542B\uFF1A String, Int, Float, Boolean</li>
<li>[\u7C7B\u578B]\u4EE3\u8868\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A[Int]\u4EE3\u8868\u6574\u578B\u6570\u7EC4</li>
<li>GraphQL \u57FA\u672C\u53C2\u6570\u4F20\u9012
<ul>
<li>\u5C0F\u62EC\u53F7\u5185\u5B9A\u4E49\u5F62\u53C2\uFF0C\u6CE8\u610F\uFF1A\u53C2\u6570\u9700\u8981\u5B9A\u4E49\u7C7B\u578B</li>
<li>!\uFF08\u53F9\u53F7\uFF09\u4EE3\u8868\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A</li>
</ul>
</li>
</ul>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">query</span><span style="--0:#E1E4E8"> ($owner </span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">String!,</span><span style="--0:#E1E4E8"> $name </span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">String!</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">repository(owner:</span><span style="--0:#E1E4E8"> $owner</span><span style="--0:#9ECBFF">,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">name:</span><span style="--0:#E1E4E8"> $name) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">forkCount</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">description</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="query ($owner : String!, $name : String!) {\x7F  repository(owner: $owner, name: $name) {\x7F    name\x7F    forkCount\x7F    description\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="github-graphql-\u6D4B\u8BD5">GitHub GraphQL \u6D4B\u8BD5</h3>
<p>\u4F7F\u7528 curl \u547D\u4EE4\u67E5\u8BE2 GraphQL\uFF0C \u7528\u6709\u6548 JSON \u8BF7\u6C42\u4F53\u53D1\u51FA POST \u8BF7\u6C42\u3002 \u6709\u6548\u8BF7\u6C42\u4F53\u5FC5\u987B\u5305\u542B\u4E00\u4E2A\u540D\u4E3A query \u7684\u5B57\u7B26\u4E32\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://api.github.com/graphql</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Authorization: bearer &#x3C;PAT>"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">query</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">query { viewer { login }}</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"data"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"viewer"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"login"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"2456868764"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl https://api.github.com/graphql -X POST \\\x7F-H &#x22;Authorization: bearer <PAT>&#x22; \\\x7F-d &#x22;{\\&#x22;query\\&#x22;: \\&#x22;query { viewer { login }}\\&#x22;}&#x22;\x7F\x7F{\x7F  &#x22;data&#x22;: {\x7F    &#x22;viewer&#x22;: {\x7F      &#x22;login&#x22;: &#x22;2456868764&#x22;\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'https://api.github.com/graphql'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization: bearer &#x3C;PAT>'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"query":"query ($owner: String!, $name: String!) {\\n  repository(owner: $owner, name: $name) {\\n    name\\n    forkCount\\n    description\\n  }\\n}\\n","variables":{"owner":"2456868764","name":"higress"}}'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"data"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"repository"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"higress",</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"forkCount"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">149,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"description"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Next-generation Cloud Native Gateway | \u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x27;https://api.github.com/graphql&#x27; -X POST \\\x7F-H &#x27;Authorization: bearer <PAT>&#x27; \\\x7F-d &#x27;{&#x22;query&#x22;:&#x22;query ($owner: String!, $name: String!) {\\n  repository(owner: $owner, name: $name) {\\n    name\\n    forkCount\\n    description\\n  }\\n}\\n&#x22;,&#x22;variables&#x22;:{&#x22;owner&#x22;:&#x22;2456868764&#x22;,&#x22;name&#x22;:&#x22;higress&#x22;}}&#x27;\x7F\x7F{\x7F  &#x22;data&#x22;: {\x7F    &#x22;repository&#x22;: {\x7F      &#x22;name&#x22;: &#x22;higress&#x22;,\x7F      &#x22;forkCount&#x22;: 149,\x7F      &#x22;description&#x22;: &#x22;Next-generation Cloud Native Gateway | \u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173&#x22;\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<h2 id="\u53C2\u8003\u6587\u6863">\u53C2\u8003\u6587\u6863</h2>
<ul>
<li><a href="https://github.com/graphql/graphql-spec" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/graphql/graphql-spec</a></li>
<li><a href="https://docs.github.com/zh/graphql/guides/forming-calls-with-graphql" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://docs.github.com/zh/graphql/guides/forming-calls-with-graphql</a></li>
<li><a href="https://github.com/altair-graphql/altair" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/altair-graphql/altair</a></li>
</ul>`,e={title:"DeGraphQL",keywords:["higress","DeGraphQL"],description:"DeGraphQL \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/transformation/de-graphql.md",i=void 0,d=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`de-graphql\`\u63D2\u4EF6\u901A\u8FC7\u5C06URIs\u6620\u5C04\u5230GraphQL\u67E5\u8BE2\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5C06GraphQL\u4E0A\u6E38\u8F6C\u6362\u4E3A\u4F20\u7EDF\u670D\u52A1\u8FDB\u884C\u8BBF\u95EE

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`430\`

### \u53C2\u6570\u914D\u7F6E

| \u53C2\u6570             | \u63CF\u8FF0                          | \u9ED8\u8BA4        |
| ---------------- | ------------------------      | ----------- |
| \`gql\`            | graphql \u67E5\u8BE2                  | \u4E0D\u80FD\u4E3A\u7A7A    |
| \`endpoint\`       | graphql \u67E5\u8BE2\u7AEF\u70B9              | \`/graphql\`  |
| \`timeout\`        | \u67E5\u8BE2\u8FDE\u63A5\u8D85\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2        | \`5000\`      |
| \`domain\`         | \u670D\u52A1\u57DF\u540D\uFF0C\u5F53\u670D\u52A1\u6765\u6E90\u662Fdns\u914D\u7F6E |             |

### \u63D2\u4EF6\u4F7F\u7528

https://github.com/alibaba/higress/issues/268

- \u6D4B\u8BD5\u914D\u7F6E
\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: api.github.com
    name: github
    port: 443
    type: dns
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: github.dns
    higress.io/upstream-vhost: "api.github.com"
    higress.io/backend-protocol: HTTPS
  name: github-api
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: de-graphql-github-api
  namespace: higress-system
spec:
  matchRules:
  - ingress:
    - github-api
    config:
      timeout: 5000
      endpoint: /graphql
      domain: api.github.com
      gql: |
           query ($owner:String! $name:String!){
              repository(owner:$owner, name:$name) {
                name
                forkCount
                description
             }
           }
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/de-graphql:1.0.0
\`\`\`

- \u6D4B\u8BD5\u7ED3\u679C

\`\`\`shell
curl "http://localhost/api?owner=alibaba&name=higress" -H "Authorization: Bearer some-token"

{
	"data": {
		"repository": {
			"description": "Next-generation Cloud Native Gateway",
			"forkCount": 149,
			"name": "higress"
		}
	}
}
\`\`\`

## GraphQL\u4ECB\u7ECD

### GraphQL \u7AEF\u70B9

REST API \u6709\u591A\u4E2A\u7AEF\u70B9\uFF0CGraphQL API \u53EA\u6709\u4E00\u4E2A\u7AEF\u70B9\u3002

\`\`\`shell
https://api.github.com/graphql
\`\`\`
### \u4E0E GraphQL \u901A\u4FE1

\u7531\u4E8E GraphQL \u64CD\u4F5C\u7531\u591A\u884C JSON \u7EC4\u6210\uFF0C\u53EF\u4EE5\u4F7F\u7528 curl \u6216\u4EFB\u4F55\u5176\u4ED6\u91C7\u7528 HTTP \u7684\u5E93\u3002

\u5728 REST \u4E2D\uFF0CHTTP \u8C13\u8BCD\u786E\u5B9A\u6267\u884C\u7684\u64CD\u4F5C\u3002 \u5728 GraphQL \u4E2D\uFF0C\u6267\u884C\u67E5\u8BE2\u8981\u63D0\u4F9B JSON \u8BF7\u6C42\u4F53\uFF0C\u56E0\u6B64 HTTP \u8C13\u8BCD\u4E3A POST\u3002 \u552F\u4E00\u7684\u4F8B\u5916\u662F\u5185\u7701\u67E5\u8BE2\uFF0C\u5B83\u662F\u4E00\u79CD\u7B80\u5355\u7684 GET \u5230\u7EC8\u7ED3\u70B9\u67E5\u8BE2\u3002

### GraphQL POST \u8BF7\u6C42\u53C2\u6570

\u6807\u51C6\u7684 GraphQL POST \u8BF7\u6C42\u60C5\u51B5\u5982\u4E0B\uFF1A

- \u6DFB\u52A0 HTTP \u8BF7\u6C42\u5934\uFF1A Content-Type: application/json
- \u4F7F\u7528 JSON \u683C\u5F0F\u7684\u8BF7\u6C42\u4F53
- JSON \u8BF7\u6C42\u4F53\u5305\u542B\u4E09\u4E2A\u5B57\u6BB5
  - query\uFF1A\u67E5\u8BE2\u6587\u6863\uFF0C\u5FC5\u586B
  - variables\uFF1A\u53D8\u91CF\uFF0C\u9009\u586B
  - operationName\uFF1A\u64CD\u4F5C\u540D\u79F0\uFF0C\u9009\u586B\uFF0C\u67E5\u8BE2\u6587\u6863\u6709\u591A\u4E2A\u64CD\u4F5C\u65F6\u5FC5\u586B

\`\`\`json
{
  "query": "{viewer{name}}",
  "operationName": "",
  "variables": {
    "name": "value"
  }
}
\`\`\`

### GraphQL \u57FA\u672C\u53C2\u6570\u7C7B\u578B

- \u57FA\u672C\u53C2\u6570\u7C7B\u578B\u5305\u542B\uFF1A String, Int, Float, Boolean
- [\u7C7B\u578B]\u4EE3\u8868\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A[Int]\u4EE3\u8868\u6574\u578B\u6570\u7EC4
- GraphQL \u57FA\u672C\u53C2\u6570\u4F20\u9012
  - \u5C0F\u62EC\u53F7\u5185\u5B9A\u4E49\u5F62\u53C2\uFF0C\u6CE8\u610F\uFF1A\u53C2\u6570\u9700\u8981\u5B9A\u4E49\u7C7B\u578B
  - !\uFF08\u53F9\u53F7\uFF09\u4EE3\u8868\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A

\`\`\`shell
query ($owner : String!, $name : String!) {
  repository(owner: $owner, name: $name) {
    name
    forkCount
    description
  }
}
\`\`\`


### GitHub GraphQL \u6D4B\u8BD5

\u4F7F\u7528 curl \u547D\u4EE4\u67E5\u8BE2 GraphQL\uFF0C \u7528\u6709\u6548 JSON \u8BF7\u6C42\u4F53\u53D1\u51FA POST \u8BF7\u6C42\u3002 \u6709\u6548\u8BF7\u6C42\u4F53\u5FC5\u987B\u5305\u542B\u4E00\u4E2A\u540D\u4E3A query \u7684\u5B57\u7B26\u4E32\u3002

\`\`\`shell

curl https://api.github.com/graphql -X POST \\
-H "Authorization: bearer <PAT>" \\
-d "{\\"query\\": \\"query { viewer { login }}\\"}"

{
	"data": {
		"viewer": {
			"login": "2456868764"
		}
	}
}
\`\`\`

\`\`\`shell
curl 'https://api.github.com/graphql' -X POST \\
-H 'Authorization: bearer <PAT>' \\
-d '{"query":"query ($owner: String!, $name: String!) {\\n  repository(owner: $owner, name: $name) {\\n    name\\n    forkCount\\n    description\\n  }\\n}\\n","variables":{"owner":"2456868764","name":"higress"}}'

{
	"data": {
		"repository": {
			"name": "higress",
			"forkCount": 149,
			"description": "Next-generation Cloud Native Gateway | \u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173"
		}
	}
}
\`\`\`

## \u53C2\u8003\u6587\u6863

- https://github.com/graphql/graphql-spec
- https://docs.github.com/zh/graphql/guides/forming-calls-with-graphql
- https://github.com/altair-graphql/altair
`},l=function(){return s},t=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:3,slug:"\u53C2\u6570\u914D\u7F6E",text:"\u53C2\u6570\u914D\u7F6E"},{depth:3,slug:"\u63D2\u4EF6\u4F7F\u7528",text:"\u63D2\u4EF6\u4F7F\u7528"},{depth:2,slug:"graphql\u4ECB\u7ECD",text:"GraphQL\u4ECB\u7ECD"},{depth:3,slug:"graphql-\u7AEF\u70B9",text:"GraphQL \u7AEF\u70B9"},{depth:3,slug:"\u4E0E-graphql-\u901A\u4FE1",text:"\u4E0E GraphQL \u901A\u4FE1"},{depth:3,slug:"graphql-post-\u8BF7\u6C42\u53C2\u6570",text:"GraphQL POST \u8BF7\u6C42\u53C2\u6570"},{depth:3,slug:"graphql-\u57FA\u672C\u53C2\u6570\u7C7B\u578B",text:"GraphQL \u57FA\u672C\u53C2\u6570\u7C7B\u578B"},{depth:3,slug:"github-graphql-\u6D4B\u8BD5",text:"GitHub GraphQL \u6D4B\u8BD5"},{depth:2,slug:"\u53C2\u8003\u6587\u6863",text:"\u53C2\u8003\u6587\u6863"}]},a=c((u,F,x)=>{const{layout:m,...p}=e;return p.file=n,p.url=i,r`${v()}${E(s)}`})});export{a as Content,g as __tla,l as compiledContent,a as default,n as file,e as frontmatter,t as getHeadings,d as rawContent,i as url};
