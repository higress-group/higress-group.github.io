import{c,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as o,m as v,u as E,__tla as y}from"./constant.BwWfJoOA.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let e,t,a,n,r,l,i,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002</p>
</blockquote>
<p>Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server\u3002\u672C\u6587\u5C06\u4EE5 PostgreSQL \u6570\u636E\u5E93\u548C\u4E00\u4E2A\u7B80\u5355\u7684 REST API \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002</p>
<h2 id="\u524D\u63D0\u6761\u4EF6">\u524D\u63D0\u6761\u4EF6</h2>
<p>\u5728\u5F00\u59CB\u4F7F\u7528 MCP Server \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u90E8\u7F72 Higress\u3002\u60A8\u53EF\u4EE5\u53C2\u8003 <a href="https://higress.cn/docs/latest/user/quickstart" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress \u5FEB\u901F\u5165\u95E8\u6307\u5357</a> \u5B8C\u6210\u90E8\u7F72\u3002\u5728\u5B89\u88C5 Higress \u65F6\uFF0C\u8BF7\u786E\u4FDD\u5728 Helm \u547D\u4EE4\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> [...\u5176\u4ED6\u53C2\u6570...] --set global.enableRedis</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system [...\u5176\u4ED6\u53C2\u6570...] --set global.enableRedis=true"><div></div></button></div></figure></div>
<p>MCP Server \u9700\u8981\u4F9D\u8D56 Redis \u670D\u52A1\u7528\u4E8E\u6570\u636E\u7F13\u5B58\uFF0C\u542F\u7528\u540E\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B Redis \u670D\u52A1\u7684\u5730\u5740\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">redis-stack-server</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wide</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc redis-stack-server -n higress-system -o wide"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E-mcp-server">\u914D\u7F6E MCP Server</h2>
<h3 id="configmap-\u5168\u5C40\u53C2\u6570\u914D\u7F6E">ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E</h3>
<p>\u5728 ConfigMap \u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">configmap</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-config</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl edit configmap higress-config -n higress-system"><div></div></button></div></figure></div>
<p>\u914D\u7F6E Redis \u8FDE\u63A5\u4FE1\u606F\u548C MCP Server \u7684\u8DEF\u7531\u89C4\u5219\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">mcpServer:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true          # \u542F\u7528 MCP Server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">redis:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis\u670D\u52A1\u5730\u5740</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">username: "" # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">password: "" # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">match_list:          # MCP Server \u4F1A\u8BDD\u4FDD\u6301\u8DEF\u7531\u89C4\u5219\uFF08\u5F53\u5339\u914D\u4E0B\u9762\u8DEF\u5F84\u65F6\uFF0C\u5C06\u88AB\u8BC6\u522B\u4E3A\u4E00\u4E2A MCP \u4F1A\u8BDD\uFF0C\u901A\u8FC7 SSE \u7B49\u673A\u5236\u8FDB\u884C\u4F1A\u8BDD\u4FDD\u6301\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- match_rule_domain: "*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_path: /postgres</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_type: "prefix"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- match_rule_domain: "*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_path: /user</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_type: "prefix"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">servers: []</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  higress: |-\x7F    mcpServer:\x7F      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00\x7F      enable: true          # \u542F\u7528 MCP Server\x7F      redis:\x7F        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis\u670D\u52A1\u5730\u5740\x7F        username: &#x22;&#x22; # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09\x7F        password: &#x22;&#x22; # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09\x7F        db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09\x7F      match_list:          # MCP Server \u4F1A\u8BDD\u4FDD\u6301\u8DEF\u7531\u89C4\u5219\uFF08\u5F53\u5339\u914D\u4E0B\u9762\u8DEF\u5F84\u65F6\uFF0C\u5C06\u88AB\u8BC6\u522B\u4E3A\u4E00\u4E2A MCP \u4F1A\u8BDD\uFF0C\u901A\u8FC7 SSE \u7B49\u673A\u5236\u8FDB\u884C\u4F1A\u8BDD\u4FDD\u6301\uFF09\x7F        - match_rule_domain: &#x22;*&#x22;\x7F          match_rule_path: /postgres\x7F          match_rule_type: &#x22;prefix&#x22;\x7F        - match_rule_domain: &#x22;*&#x22;\x7F          match_rule_path: /user\x7F          match_rule_type: &#x22;prefix&#x22;\x7F      servers: []\x7F...\x7F\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system"><div></div></button></div></figure></div>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<p>\u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server \u5728 ConfigMap \u4E2D\u914D\u7F6E\uFF0CREST API \u7C7B\u578B\u5728 Higress \u63A7\u5236\u53F0\u914D\u7F6E\u3002</p>
</blockquote>
<h3 id="\u914D\u7F6E-database-mcp-server">\u914D\u7F6E Database MCP Server</h3>
<p>\u5728 Config Map \u4E2D\u914D\u7F6E Database MCP Server\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">servers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">postgres</span><span style="--0:#E1E4E8">      </span><span style="--0:#99A0A6"># MCP Server \u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/postgres</span><span style="--0:#E1E4E8">     </span><span style="--0:#99A0A6"># \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">database</span><span style="--0:#E1E4E8">      </span><span style="--0:#99A0A6"># \u7C7B\u578B\u4E3A\u6570\u636E\u5E93</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dsn</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your postgres database connect dsn"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u6570\u636E\u5E93\u8FDE\u63A5\u4E32</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dbType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"postgres"</span><span style="--0:#E1E4E8">                        </span><span style="--0:#99A0A6"># \u6570\u636E\u5E93\u7C7B\u578B\uFF0C\u76EE\u524D\u5DF2\u652F\u6301 postgres/mysql/clickhouse/sqlite</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="servers:\x7F  - name: postgres      # MCP Server \u540D\u79F0\x7F    path: /postgres     # \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D\x7F    type: database      # \u7C7B\u578B\u4E3A\u6570\u636E\u5E93\x7F    config:\x7F      dsn: &#x22;your postgres database connect dsn&#x22; # \u6570\u636E\u5E93\u8FDE\u63A5\u4E32\x7F      dbType: &#x22;postgres&#x22;                        # \u6570\u636E\u5E93\u7C7B\u578B\uFF0C\u76EE\u524D\u5DF2\u652F\u6301 postgres/mysql/clickhouse/sqlite"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6E-nacos-mcp-registry">\u914D\u7F6E Nacos MCP Registry</h3>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong>
\u9700\u8981Nacos\u7248\u672C\u4E3A3.0\u53CA\u4EE5\u4E0A\uFF0CHigress\u7248\u672C\u57282.1.2\u53CA\u4EE5\u4E0A</p>
</blockquote>
<p>\u5728mcpbridge\u4E2D\u914D\u7F6Enacos mcp registry\u670D\u52A1\u6765\u6E90
\u5177\u4F53\u7684\u914D\u7F6E\u4FE1\u606F\u89C1\u6587\u6863 <a href="https://higress.cn/docs/latest/user/mcp-bridge/?spm=36971b57.31888769.0.0.559550f86sCJw2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Mcp Bridge \u914D\u7F6E\u8BF4\u660E</a></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">localhost</span><span style="--0:#E1E4E8">                            </span><span style="--0:#99A0A6">#nacos\u7684\u5730\u5740\uFF0Cip\u5730\u5740\u6216\u8005\u57DF\u540D</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerBaseUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">you_custom_url_prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">you_custom_name</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8848</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">nacos3</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="registries:\x7F- domain: localhost                            #nacos\u7684\u5730\u5740\uFF0Cip\u5730\u5740\u6216\u8005\u57DF\u540D\x7F  mcpServerBaseUrl: you_custom_url_prefix\x7F  name: you_custom_name\x7F  port: 8848\x7F  type: nacos3"><div></div></button></div></figure></div>
<p>\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u5373\u53EF\u901A\u8FC7higress\u8BBF\u95EE\u6CE8\u518C\u5728nacos\u4E2D\u7684mcp\u670D\u52A1\u3002
\u8BBF\u95EE\u7684endpoint\u4E3A http://{higresshost}/you_custom_url_prefix/{nacos\u4E2DMCP\u670D\u52A1\u7684\u540D\u79F0}/{nacos\u4E2Dmcp\u670D\u52A1\u914D\u7F6E\u4E2D\u7684\u8BBF\u95EE\u8DEF\u5F84}</p>
<h3 id="\u914D\u7F6E-rest-api-mcp-server">\u914D\u7F6E REST API MCP Server</h3>
<p>\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u5FEB\u901F\u8F6C\u6362\u4E3A MCP Server\uFF1A</p>
<h4 id="1-\u6DFB\u52A0\u670D\u52A1\u6765\u6E90">1. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90</h4>
<p>\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\uFF0C\u672C\u793A\u4F8B\u4F7F\u7528 <code dir="auto">randomuser.me</code> \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg" alt="\u6DFB\u52A0\u670D\u52A1\u6765\u6E90" referrerpolicy="no-referrer"></p>
<h4 id="2-\u914D\u7F6E\u8DEF\u7531">2. \u914D\u7F6E\u8DEF\u7531</h4>
<p>\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u8DEF\u7531\u5E76\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i2/O1CN01AvGOMg1ysswRGHvuM_!!6000000006635-0-tps-2528-624.jpg" alt="\u914D\u7F6E\u8DEF\u7531" referrerpolicy="no-referrer"></p>
<h4 id="3-\u914D\u7F6E-mcp-server-\u63D2\u4EF6">3. \u914D\u7F6E MCP Server \u63D2\u4EF6</h4>
<p><strong>\u63A8\u8350\uFF1A\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/higress-group/openapi-to-mcpserver" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">OpenAPI to MCP</a> \u5DE5\u5177\uFF0C\u5B9E\u73B0 API \u6587\u6863\u5230 MCP Server \u63D2\u4EF6\u914D\u7F6E\u7684\u81EA\u52A8\u8F6C\u6362</strong></p>
<p>\u5BF9\u521B\u5EFA\u7684\u8DEF\u7531\u6DFB\u52A0 MCP Server \u63D2\u4EF6\u5E76\u8FDB\u884C\u914D\u7F6E\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg" alt="\u914D\u7F6EMCP Server\u63D2\u4EF6" referrerpolicy="no-referrer"></p>
<p>\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"random-user-server"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get random user information"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"get-user"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://randomuser.me/api/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># User Information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- with (index .results 0) }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Name**: {{.name.first}} {{.name.last}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Email**: {{.email}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Location**: {{.location.city}}, {{.location.country}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Phone**: {{.phone}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;random-user-server&#x22;\x7Ftools:\x7F- description: &#x22;Get random user information&#x22;\x7F  name: &#x22;get-user&#x22;\x7F  requestTemplate:\x7F    method: &#x22;GET&#x22;\x7F    url: &#x22;https://randomuser.me/api/&#x22;\x7F  responseTemplate:\x7F    body: |-\x7F      # User Information\x7F      {{- with (index .results 0) }}\x7F      - **Name**: {{.name.first}} {{.name.last}}\x7F      - **Email**: {{.email}}\x7F      - **Location**: {{.location.city}}, {{.location.country}}\x7F      - **Phone**: {{.phone}}\x7F      {{- end }}"><div></div></button></div></figure></div>
<p>\u66F4\u591A\u5173\u4E8E\u5982\u4F55\u914D\u7F6E REST API \u5230 MCP Server \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 <a href="../../ai/mcp-server/" referrerpolicy="unsafe-url">MCP Server \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003</a>\u548C<a href="https://higress.cn/docs/latest/plugins/intro/?spm=36971b57.2ef5001f.0.0.2a932c1fWNtqNf" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Wasm\u63D2\u4EF6\u4F7F\u7528\u7B80\u4ECB</a></p>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u5BF9\u4E8E 2025-03-26 <a href="https://spec.modelcontextprotocol.io/specification/2025-03-26/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">MCP streamable HTTP</a> \u534F\u8BAE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6B64\u63D2\u4EF6\uFF0C\u65E0\u9700\u5168\u5C40 ConfigMap \u914D\u7F6E</p>
</blockquote>
<h2 id="mcp-server-\u4F7F\u7528">MCP Server \u4F7F\u7528</h2>
<p>\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 cursor \u4E3A\u4F8B\uFF1A</p>
<ul>
<li>\u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix</li>
<li>REST API \u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">"mcpServers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"postgres"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/postgres/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"rest-api"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/user/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;mcpServers&#x22;: {\x7F  &#x22;postgres&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/postgres/sse&#x22;\x7F  },\x7F  &#x22;rest-api&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/user/sse&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<p>cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg" alt="cursor\u914D\u7F6E\u5B8C\u6210" referrerpolicy="no-referrer"></p>
<p>\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002</p>
<blockquote>
<p>\u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a> \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002</p>
<p>\u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>\u3002</p>
</blockquote>`,n={title:"MCP Server \u5FEB\u901F\u5F00\u59CB",description:"Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server",date:"2025-04-03",category:"article",keywords:["MCP Server"],authors:"\u9759\u62E9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-quick-start.md",i=void 0,l=function(){return`
# MCP Server \u5FEB\u901F\u5F00\u59CB

> **\u6CE8\u610F\uFF1A** \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002

Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server\u3002\u672C\u6587\u5C06\u4EE5 PostgreSQL \u6570\u636E\u5E93\u548C\u4E00\u4E2A\u7B80\u5355\u7684 REST API \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002

## \u524D\u63D0\u6761\u4EF6

\u5728\u5F00\u59CB\u4F7F\u7528 MCP Server \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u90E8\u7F72 Higress\u3002\u60A8\u53EF\u4EE5\u53C2\u8003 [Higress \u5FEB\u901F\u5165\u95E8\u6307\u5357](https://higress.cn/docs/latest/user/quickstart) \u5B8C\u6210\u90E8\u7F72\u3002\u5728\u5B89\u88C5 Higress \u65F6\uFF0C\u8BF7\u786E\u4FDD\u5728 Helm \u547D\u4EE4\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\uFF1A

\`\`\`bash
helm install higress -n higress-system [...\u5176\u4ED6\u53C2\u6570...] --set global.enableRedis=true
\`\`\`

MCP Server \u9700\u8981\u4F9D\u8D56 Redis \u670D\u52A1\u7528\u4E8E\u6570\u636E\u7F13\u5B58\uFF0C\u542F\u7528\u540E\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B Redis \u670D\u52A1\u7684\u5730\u5740\uFF1A

\`\`\`bash
kubectl get svc redis-stack-server -n higress-system -o wide
\`\`\`

## \u914D\u7F6E MCP Server

### ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E

\u5728 ConfigMap \u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\uFF1A

\`\`\`bash
kubectl edit configmap higress-config -n higress-system
\`\`\`

\u914D\u7F6E Redis \u8FDE\u63A5\u4FE1\u606F\u548C MCP Server \u7684\u8DEF\u7531\u89C4\u5219\uFF1A

\`\`\`yaml
apiVersion: v1
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00
      enable: true          # \u542F\u7528 MCP Server
      redis:
        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis\u670D\u52A1\u5730\u5740
        username: "" # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09
        password: "" # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09
        db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09
      match_list:          # MCP Server \u4F1A\u8BDD\u4FDD\u6301\u8DEF\u7531\u89C4\u5219\uFF08\u5F53\u5339\u914D\u4E0B\u9762\u8DEF\u5F84\u65F6\uFF0C\u5C06\u88AB\u8BC6\u522B\u4E3A\u4E00\u4E2A MCP \u4F1A\u8BDD\uFF0C\u901A\u8FC7 SSE \u7B49\u673A\u5236\u8FDB\u884C\u4F1A\u8BDD\u4FDD\u6301\uFF09
        - match_rule_domain: "*"
          match_rule_path: /postgres
          match_rule_type: "prefix"
        - match_rule_domain: "*"
          match_rule_path: /user
          match_rule_type: "prefix"
      servers: []
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
\`\`\`

> **\u6CE8\u610F\uFF1A**
>
> \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server \u5728 ConfigMap \u4E2D\u914D\u7F6E\uFF0CREST API \u7C7B\u578B\u5728 Higress \u63A7\u5236\u53F0\u914D\u7F6E\u3002

### \u914D\u7F6E Database MCP Server

\u5728 Config Map \u4E2D\u914D\u7F6E Database MCP Server\uFF1A

\`\`\`yaml
servers:
  - name: postgres      # MCP Server \u540D\u79F0
    path: /postgres     # \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D
    type: database      # \u7C7B\u578B\u4E3A\u6570\u636E\u5E93
    config:
      dsn: "your postgres database connect dsn" # \u6570\u636E\u5E93\u8FDE\u63A5\u4E32
      dbType: "postgres"                        # \u6570\u636E\u5E93\u7C7B\u578B\uFF0C\u76EE\u524D\u5DF2\u652F\u6301 postgres/mysql/clickhouse/sqlite
\`\`\`

### \u914D\u7F6E Nacos MCP Registry
> **\u6CE8\u610F\uFF1A**
> \u9700\u8981Nacos\u7248\u672C\u4E3A3.0\u53CA\u4EE5\u4E0A\uFF0CHigress\u7248\u672C\u57282.1.2\u53CA\u4EE5\u4E0A

\u5728mcpbridge\u4E2D\u914D\u7F6Enacos mcp registry\u670D\u52A1\u6765\u6E90
\u5177\u4F53\u7684\u914D\u7F6E\u4FE1\u606F\u89C1\u6587\u6863 [Mcp Bridge \u914D\u7F6E\u8BF4\u660E](https://higress.cn/docs/latest/user/mcp-bridge/?spm=36971b57.31888769.0.0.559550f86sCJw2)
\`\`\`yaml
registries:
- domain: localhost                            #nacos\u7684\u5730\u5740\uFF0Cip\u5730\u5740\u6216\u8005\u57DF\u540D
  mcpServerBaseUrl: you_custom_url_prefix
  name: you_custom_name
  port: 8848
  type: nacos3
\`\`\`
\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u5373\u53EF\u901A\u8FC7higress\u8BBF\u95EE\u6CE8\u518C\u5728nacos\u4E2D\u7684mcp\u670D\u52A1\u3002
\u8BBF\u95EE\u7684endpoint\u4E3A http://{higresshost}/you_custom_url_prefix/{nacos\u4E2DMCP\u670D\u52A1\u7684\u540D\u79F0}/{nacos\u4E2Dmcp\u670D\u52A1\u914D\u7F6E\u4E2D\u7684\u8BBF\u95EE\u8DEF\u5F84}

### \u914D\u7F6E REST API MCP Server

\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u5FEB\u901F\u8F6C\u6362\u4E3A MCP Server\uFF1A

#### 1. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\uFF0C\u672C\u793A\u4F8B\u4F7F\u7528 \`randomuser.me\` \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90\uFF1A

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90](https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg)

#### 2. \u914D\u7F6E\u8DEF\u7531

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u8DEF\u7531\u5E76\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A

![\u914D\u7F6E\u8DEF\u7531](https://gw.alicdn.com/imgextra/i2/O1CN01AvGOMg1ysswRGHvuM_!!6000000006635-0-tps-2528-624.jpg)

#### 3. \u914D\u7F6E MCP Server \u63D2\u4EF6

**\u63A8\u8350\uFF1A\u53EF\u4EE5\u4F7F\u7528 [OpenAPI to MCP](https://github.com/higress-group/openapi-to-mcpserver) \u5DE5\u5177\uFF0C\u5B9E\u73B0 API \u6587\u6863\u5230 MCP Server \u63D2\u4EF6\u914D\u7F6E\u7684\u81EA\u52A8\u8F6C\u6362**

\u5BF9\u521B\u5EFA\u7684\u8DEF\u7531\u6DFB\u52A0 MCP Server \u63D2\u4EF6\u5E76\u8FDB\u884C\u914D\u7F6E\uFF1A

![\u914D\u7F6EMCP Server\u63D2\u4EF6](https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg)

\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
server:
  name: "random-user-server"
tools:
- description: "Get random user information"
  name: "get-user"
  requestTemplate:
    method: "GET"
    url: "https://randomuser.me/api/"
  responseTemplate:
    body: |-
      # User Information
      {{- with (index .results 0) }}
      - **Name**: {{.name.first}} {{.name.last}}
      - **Email**: {{.email}}
      - **Location**: {{.location.city}}, {{.location.country}}
      - **Phone**: {{.phone}}
      {{- end }}
\`\`\`
\u66F4\u591A\u5173\u4E8E\u5982\u4F55\u914D\u7F6E REST API \u5230 MCP Server \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 [MCP Server \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003](../ai/mcp-server.md)\u548C[Higress Wasm\u63D2\u4EF6\u4F7F\u7528\u7B80\u4ECB](https://higress.cn/docs/latest/plugins/intro/?spm=36971b57.2ef5001f.0.0.2a932c1fWNtqNf)

> **\u6CE8\u610F\uFF1A** \u5BF9\u4E8E 2025-03-26 [MCP streamable HTTP](https://spec.modelcontextprotocol.io/specification/2025-03-26/) \u534F\u8BAE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6B64\u63D2\u4EF6\uFF0C\u65E0\u9700\u5168\u5C40 ConfigMap \u914D\u7F6E

## MCP Server \u4F7F\u7528

\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 cursor \u4E3A\u4F8B\uFF1A

* \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix
* REST API \u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix

\`\`\`yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "rest-api": {
    "url": "http://your-higress-address/user/sse"
  }
}
\`\`\`

cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A

![cursor\u914D\u7F6E\u5B8C\u6210](https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg)


\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002

> \u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 [Higress Github Issue](https://github.com/alibaba/higress/issues) \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002
> 
> \u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star [Higress Github Repo](https://github.com/alibaba/higress/)\u3002
`},t=function(){return s},r=function(){return[{depth:2,slug:"\u524D\u63D0\u6761\u4EF6",text:"\u524D\u63D0\u6761\u4EF6"},{depth:2,slug:"\u914D\u7F6E-mcp-server",text:"\u914D\u7F6E MCP Server"},{depth:3,slug:"configmap-\u5168\u5C40\u53C2\u6570\u914D\u7F6E",text:"ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E"},{depth:3,slug:"\u914D\u7F6E-database-mcp-server",text:"\u914D\u7F6E Database MCP Server"},{depth:3,slug:"\u914D\u7F6E-nacos-mcp-registry",text:"\u914D\u7F6E Nacos MCP Registry"},{depth:3,slug:"\u914D\u7F6E-rest-api-mcp-server",text:"\u914D\u7F6E REST API MCP Server"},{depth:4,slug:"1-\u6DFB\u52A0\u670D\u52A1\u6765\u6E90",text:"1. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90"},{depth:4,slug:"2-\u914D\u7F6E\u8DEF\u7531",text:"2. \u914D\u7F6E\u8DEF\u7531"},{depth:4,slug:"3-\u914D\u7F6E-mcp-server-\u63D2\u4EF6",text:"3. \u914D\u7F6E MCP Server \u63D2\u4EF6"},{depth:2,slug:"mcp-server-\u4F7F\u7528",text:"MCP Server \u4F7F\u7528"}]},e=c((u,h,f)=>{const{layout:C,...p}=n;return p.file=a,p.url=i,o`${v()}${E(s)}`})});export{e as Content,m as __tla,t as compiledContent,e as default,a as file,n as frontmatter,r as getHeadings,l as rawContent,i as url};
