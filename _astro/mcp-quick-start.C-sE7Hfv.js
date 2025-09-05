import{c,__tla as d}from"./astro-component.B3fYMMDi.js";import{r as o,m as v,u as E,__tla as y}from"./constant.Cgp6cJPa.js";import{__tla as g}from"./astro/assets-service.DmDXK_Mj.js";let e,t,a,n,r,l,i,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002</p>
</blockquote>
<p>Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server\u3002\u672C\u6587\u5C06\u4EE5 PostgreSQL \u6570\u636E\u5E93\u548C\u4E00\u4E2A\u7B80\u5355\u7684 REST API \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002</p>
<h2 id="\u524D\u63D0\u6761\u4EF6">\u524D\u63D0\u6761\u4EF6</h2>
<p>\u5728\u5F00\u59CB\u4F7F\u7528 MCP Server \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u90E8\u7F72 Higress\u3002\u60A8\u53EF\u4EE5\u53C2\u8003 <a href="https://higress.cn/docs/latest/user/quickstart" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress \u5FEB\u901F\u5165\u95E8\u6307\u5357</a> \u5B8C\u6210\u90E8\u7F72\u3002\u5728\u5B89\u88C5 Higress \u65F6\uFF0C\u8BF7\u786E\u4FDD\u5728 Helm \u547D\u4EE4\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> [...\u5176\u4ED6\u53C2\u6570...] --set global.enableRedis</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install higress -n higress-system [...\u5176\u4ED6\u53C2\u6570...] --set global.enableRedis=true"><div></div></button></div></figure></div>
<p>MCP Server \u9700\u8981\u4F9D\u8D56 Redis \u670D\u52A1\u7528\u4E8E\u6570\u636E\u7F13\u5B58\uFF0C\u542F\u7528\u540E\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B Redis \u670D\u52A1\u7684\u5730\u5740\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">redis-stack-server</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wide</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc redis-stack-server -n higress-system -o wide"><div></div></button></div></figure></div>
<p>\u5982\u679C Redis \u670D\u52A1\u542F\u52A8\u6B63\u5E38\uFF0C\u4F60\u4F1A\u5F97\u5230\u7C7B\u4F3C\u5982\u4E0B\u5F62\u5F0F\u7684\u8F93\u51FA\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">NAME</span><span style="--0:#E1E4E8">                 </span><span style="--0:#9ECBFF">TYPE</span><span style="--0:#E1E4E8">        </span><span style="--0:#9ECBFF">CLUSTER-IP</span><span style="--0:#E1E4E8">      </span><span style="--0:#9ECBFF">EXTERNAL-IP</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">PORT</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">S</span><span style="--0:#E1E4E8">)    </span><span style="--0:#9ECBFF">AGE</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">SELECTOR</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">redis-stack-server</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">ClusterIP</span><span style="--0:#E1E4E8">   </span><span style="--0:#79B8FF">192.168.51.87</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">&#x3C;none></span><span style="--0:#E1E4E8">        </span><span style="--0:#9ECBFF">6379/TCP</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">10s</span><span style="--0:#E1E4E8">   </span><span style="--0:#9ECBFF">app.kubernetes.io/instance=higress,app.kubernetes.io/name=redis-stack-server</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE   SELECTOR\x7Fredis-stack-server   ClusterIP   192.168.51.87   <none>        6379/TCP   10s   app.kubernetes.io/instance=higress,app.kubernetes.io/name=redis-stack-server"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E-mcp-server">\u914D\u7F6E MCP Server</h2>
<h3 id="\u5168\u5C40\u53C2\u6570\u914D\u7F6E">\u5168\u5C40\u53C2\u6570\u914D\u7F6E</h3>
<p>\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\uFF1A
<img src="https://img.alicdn.com/imgextra/i2/O1CN01CabBas1f1JxTqfEre_!!6000000003946-2-tps-3014-1594.png" alt="\u914D\u7F6E\u5168\u5C40\u53C2\u6570" referrerpolicy="no-referrer"></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">mcpServer:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true          # \u542F\u7528 MCP Server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">redis:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis\u670D\u52A1\u5730\u5740</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">username: "" # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">password: "" # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">match_list: []</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">servers: []</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  higress: |-\x7F    mcpServer:\x7F      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00\x7F      enable: true          # \u542F\u7528 MCP Server\x7F      redis:\x7F        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis\u670D\u52A1\u5730\u5740\x7F        username: &#x22;&#x22; # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09\x7F        password: &#x22;&#x22; # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09\x7F        db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09\x7F      match_list: []\x7F      servers: []\x7F...\x7F\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system"><div></div></button></div></figure></div>
<h4 id="\u914D\u7F6E-rest-api-mcp-server-\u4F5C\u4E3A\u670D\u52A1\u6765\u6E90">\u914D\u7F6E REST API MCP Server \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90</h4>
<p>\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\uFF0C\u672C\u793A\u4F8B\u4F7F\u7528\u516C\u7F51\u670D\u52A1 <code dir="auto">randomuser.me</code> \uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg" alt="\u6DFB\u52A0\u670D\u52A1\u6765\u6E90" referrerpolicy="no-referrer"></p>
<h4 id="\u914D\u7F6E-nacos-\u4F5C\u4E3A\u670D\u52A1\u6765\u6E90-optional">\u914D\u7F6E Nacos \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90 (Optional)</h4>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong>
\u9700\u8981Nacos\u7248\u672C\u4E3A3.0\u53CA\u4EE5\u4E0A\uFF0CHigress\u7248\u672C\u57282.1.2\u53CA\u4EE5\u4E0A</p>
</blockquote>
<p>\u521B\u5EFANacos3.x\u670D\u52A1\u6765\u6E90\u5E76\u5B8C\u5584\u76F8\u5173\u4FE1\u606F</p>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01FGvSE71HVVGHTp1Cu_!!6000000000763-2-tps-588-1039.png" alt="\u6DFB\u52A0Nacos3.x\u670D\u52A1\u6765\u6E90" referrerpolicy="no-referrer"></p>
<h3 id="\u914D\u7F6E-mcp-\u7BA1\u7406">\u914D\u7F6E MCP \u7BA1\u7406</h3>
<p>\u8FDB\u5165 MCP \u7BA1\u7406\u754C\u9762\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01xzeROD1GX30611tEy_!!6000000000631-2-tps-3008-1586.png" alt="MCP\u7BA1\u7406\u754C\u9762" referrerpolicy="no-referrer"></p>
<p>\u521B\u5EFA MCP \u670D\u52A1\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01PYboEy1QbIq1xt1F3_!!6000000001994-2-tps-3012-1590.png" alt="\u521B\u5EFAMCP\u670D\u52A1" referrerpolicy="no-referrer"></p>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
</blockquote>
<blockquote>
<ol>
<li>\u5BF9\u4E8E DB \u7C7B\u578B\u7684 MCP \u670D\u52A1\u9700\u8981\u989D\u5916\u914D\u7F6E\uFF1A</li>
</ol>
</blockquote>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01AUuAh61fATsVvAjm8_!!6000000003966-2-tps-1156-1016.png" alt="DB\u7C7B\u578BMCP\u670D\u52A1" referrerpolicy="no-referrer"></p>
<blockquote>
<ol start="2">
<li>\u5BF9\u4E8E OpenAPI \u7C7B\u578B\u7684 MCP \u670D\u52A1\uFF0C\u9700\u8981\u5728\u521B\u5EFA\u540E\u7F16\u8F91\u5DE5\u5177\u89C4\u8303\uFF0C\u53EF\u4EE5\u4F7F\u7528 OpenAPI/Swagger \u89C4\u8303\u6216\u76F4\u63A5\u4F7F\u7528 MCP \u5DE5\u5177\uFF0C\u8FD9\u91CC\u4EE5 MCP \u4E3A\u4F8B\uFF1A</li>
</ol>
</blockquote>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN016AMQp71rUsuibww0U_!!6000000005635-2-tps-3008-900.png" alt="\u7F16\u8F91\u5DE5\u5177" referrerpolicy="no-referrer"></p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01ln5gRK20KebmUicsi_!!6000000006831-2-tps-3018-1588.png" alt="Yaml\u7F16\u8F91" referrerpolicy="no-referrer"></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">server:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">name:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"random-user-server"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">tools:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">description:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Get random user information"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">name:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"get-user"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">method:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">url:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://randomuser.me/api/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">responseTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">body:</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#B392F0">-</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># User Information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{{- with (index .results 0) }}</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">Name</span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{{.name.first}}</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{{.name.last}}</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">Email</span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{{.email}}</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">Location</span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{{.location.city}},</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{{.location.country}}</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">-</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">Phone</span><span style="--0:#79B8FF">**</span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{{.phone}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;random-user-server&#x22;\x7Ftools:\x7F- description: &#x22;Get random user information&#x22;\x7F  name: &#x22;get-user&#x22;\x7F  requestTemplate:\x7F    method: &#x22;GET&#x22;\x7F    url: &#x22;https://randomuser.me/api/&#x22;\x7F  responseTemplate:\x7F    body: |-\x7F      {{- with (index .results 0) }}\x7F      - **Name**: {{.name.first}} {{.name.last}}\x7F      - **Email**: {{.email}}\x7F      - **Location**: {{.location.city}}, {{.location.country}}\x7F      - **Phone**: {{.phone}}\x7F      {{- end }}"><div></div></button></div></figure></div>
<h2 id="\u4F7F\u7528-mcp-server">\u4F7F\u7528 MCP Server</h2>
<p>\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 Streamable HTTP/SSE \u8FDE\u63A5\uFF0C\u53C2\u8003 MCP \u670D\u52A1\u4E2D\u7684\u8FDE\u63A5\u4FE1\u606F\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01wmYl3u1FkV17tAUAW_!!6000000000525-2-tps-3018-1590.png" alt="\u8FDE\u63A5\u4FE1\u606F" referrerpolicy="no-referrer"></p>
<p>\u4EE5 Cursor \u4E3A\u4F8B\uFF0C\u8FDB\u5165 Cursor Settings - Tools &#x26; Integrations - Add Custom MCP\uFF0C\u586B\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"mcpServers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://&#x3C;higress-gateway-ip>/mcp-servers/user/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;mcpServers&#x22;: {\x7F    &#x22;user&#x22;: {\x7F      &#x22;url&#x22;: &#x22;http://<higress-gateway-ip>/mcp-servers/user/sse&#x22;\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<p>Cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01k5hHbI1IQIORhlyQQ_!!6000000000887-2-tps-1868-1038.png" alt="Cursor\u914D\u7F6E\u5B8C\u6210" referrerpolicy="no-referrer"></p>
<p>\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002</p>
<blockquote>
<p>\u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a> \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002</p>
<p>\u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>\u3002</p>
<p>\u60A8\u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/higress-group/openapi-to-mcpserver" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">OpenAPI to MCP</a> \u5DE5\u5177\uFF0C\u5B9E\u73B0 OpenAPI \u89C4\u8303\u6587\u6863\u5230 MCP Server \u914D\u7F6E\u7684\u81EA\u52A8\u8F6C\u6362</p>
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

\u5982\u679C Redis \u670D\u52A1\u542F\u52A8\u6B63\u5E38\uFF0C\u4F60\u4F1A\u5F97\u5230\u7C7B\u4F3C\u5982\u4E0B\u5F62\u5F0F\u7684\u8F93\u51FA\uFF1A

\`\`\`bash
NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE   SELECTOR
redis-stack-server   ClusterIP   192.168.51.87   <none>        6379/TCP   10s   app.kubernetes.io/instance=higress,app.kubernetes.io/name=redis-stack-server
\`\`\`

## \u914D\u7F6E MCP Server

### \u5168\u5C40\u53C2\u6570\u914D\u7F6E

\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\uFF1A
![\u914D\u7F6E\u5168\u5C40\u53C2\u6570](https://img.alicdn.com/imgextra/i2/O1CN01CabBas1f1JxTqfEre_!!6000000003946-2-tps-3014-1594.png)

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
      match_list: []
      servers: []
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
\`\`\`

#### \u914D\u7F6E REST API MCP Server \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\uFF0C\u672C\u793A\u4F8B\u4F7F\u7528\u516C\u7F51\u670D\u52A1 \`randomuser.me\` \uFF1A

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90](https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg)

#### \u914D\u7F6E Nacos \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90 (Optional)
> **\u6CE8\u610F\uFF1A**
> \u9700\u8981Nacos\u7248\u672C\u4E3A3.0\u53CA\u4EE5\u4E0A\uFF0CHigress\u7248\u672C\u57282.1.2\u53CA\u4EE5\u4E0A

\u521B\u5EFANacos3.x\u670D\u52A1\u6765\u6E90\u5E76\u5B8C\u5584\u76F8\u5173\u4FE1\u606F

![\u6DFB\u52A0Nacos3.x\u670D\u52A1\u6765\u6E90](https://img.alicdn.com/imgextra/i3/O1CN01FGvSE71HVVGHTp1Cu_!!6000000000763-2-tps-588-1039.png)

### \u914D\u7F6E MCP \u7BA1\u7406

\u8FDB\u5165 MCP \u7BA1\u7406\u754C\u9762\uFF1A

![MCP\u7BA1\u7406\u754C\u9762](https://img.alicdn.com/imgextra/i1/O1CN01xzeROD1GX30611tEy_!!6000000000631-2-tps-3008-1586.png)

\u521B\u5EFA MCP \u670D\u52A1\uFF1A

![\u521B\u5EFAMCP\u670D\u52A1](https://img.alicdn.com/imgextra/i1/O1CN01PYboEy1QbIq1xt1F3_!!6000000001994-2-tps-3012-1590.png)


> **\u6CE8\u610F\uFF1A**

> 1. \u5BF9\u4E8E DB \u7C7B\u578B\u7684 MCP \u670D\u52A1\u9700\u8981\u989D\u5916\u914D\u7F6E\uFF1A

![DB\u7C7B\u578BMCP\u670D\u52A1](https://img.alicdn.com/imgextra/i2/O1CN01AUuAh61fATsVvAjm8_!!6000000003966-2-tps-1156-1016.png)

> 2. \u5BF9\u4E8E OpenAPI \u7C7B\u578B\u7684 MCP \u670D\u52A1\uFF0C\u9700\u8981\u5728\u521B\u5EFA\u540E\u7F16\u8F91\u5DE5\u5177\u89C4\u8303\uFF0C\u53EF\u4EE5\u4F7F\u7528 OpenAPI/Swagger \u89C4\u8303\u6216\u76F4\u63A5\u4F7F\u7528 MCP \u5DE5\u5177\uFF0C\u8FD9\u91CC\u4EE5 MCP \u4E3A\u4F8B\uFF1A

![\u7F16\u8F91\u5DE5\u5177](https://img.alicdn.com/imgextra/i1/O1CN016AMQp71rUsuibww0U_!!6000000005635-2-tps-3008-900.png)

![Yaml\u7F16\u8F91](https://img.alicdn.com/imgextra/i1/O1CN01ln5gRK20KebmUicsi_!!6000000006831-2-tps-3018-1588.png)

\`\`\`bash
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


## \u4F7F\u7528 MCP Server

\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 Streamable HTTP/SSE \u8FDE\u63A5\uFF0C\u53C2\u8003 MCP \u670D\u52A1\u4E2D\u7684\u8FDE\u63A5\u4FE1\u606F\uFF1A

![\u8FDE\u63A5\u4FE1\u606F](https://img.alicdn.com/imgextra/i2/O1CN01wmYl3u1FkV17tAUAW_!!6000000000525-2-tps-3018-1590.png)

\u4EE5 Cursor \u4E3A\u4F8B\uFF0C\u8FDB\u5165 Cursor Settings - Tools & Integrations - Add Custom MCP\uFF0C\u586B\u5165\u5982\u4E0B\u5185\u5BB9\uFF1A

\`\`\`yaml
{
  "mcpServers": {
    "user": {
      "url": "http://<higress-gateway-ip>/mcp-servers/user/sse"
    }
  }
}
\`\`\`

Cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A

![Cursor\u914D\u7F6E\u5B8C\u6210](https://img.alicdn.com/imgextra/i2/O1CN01k5hHbI1IQIORhlyQQ_!!6000000000887-2-tps-1868-1038.png)


\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002

> \u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 [Higress Github Issue](https://github.com/alibaba/higress/issues) \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002
> 
> \u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star [Higress Github Repo](https://github.com/alibaba/higress/)\u3002
>
> \u60A8\u53EF\u4EE5\u4F7F\u7528 [OpenAPI to MCP](https://github.com/higress-group/openapi-to-mcpserver) \u5DE5\u5177\uFF0C\u5B9E\u73B0 OpenAPI \u89C4\u8303\u6587\u6863\u5230 MCP Server \u914D\u7F6E\u7684\u81EA\u52A8\u8F6C\u6362`},t=function(){return s},r=function(){return[{depth:2,slug:"\u524D\u63D0\u6761\u4EF6",text:"\u524D\u63D0\u6761\u4EF6"},{depth:2,slug:"\u914D\u7F6E-mcp-server",text:"\u914D\u7F6E MCP Server"},{depth:3,slug:"\u5168\u5C40\u53C2\u6570\u914D\u7F6E",text:"\u5168\u5C40\u53C2\u6570\u914D\u7F6E"},{depth:4,slug:"\u914D\u7F6E-rest-api-mcp-server-\u4F5C\u4E3A\u670D\u52A1\u6765\u6E90",text:"\u914D\u7F6E REST API MCP Server \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90"},{depth:4,slug:"\u914D\u7F6E-nacos-\u4F5C\u4E3A\u670D\u52A1\u6765\u6E90-optional",text:"\u914D\u7F6E Nacos \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90 (Optional)"},{depth:3,slug:"\u914D\u7F6E-mcp-\u7BA1\u7406",text:"\u914D\u7F6E MCP \u7BA1\u7406"},{depth:2,slug:"\u4F7F\u7528-mcp-server",text:"\u4F7F\u7528 MCP Server"}]},e=c((C,F,u)=>{const{layout:h,...p}=n;return p.file=a,p.url=i,o`${v()}${E(s)}`})});export{e as Content,m as __tla,t as compiledContent,e as default,a as file,n as frontmatter,r as getHeadings,l as rawContent,i as url};
