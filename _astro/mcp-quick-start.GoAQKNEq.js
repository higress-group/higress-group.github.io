import{c as d,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as o,m as v,u as E,__tla as g}from"./constant.G_0v9EW-.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let e,i,a,t,r,l,n,h=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002</p>
</blockquote>
<p>MCP Server \u662F Higress AI \u7F51\u5173\u63D0\u4F9B\u7684\u4E00\u79CD\u7EDF\u4E00\u4EE3\u7406\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001\u641C\u7D22\u5F15\u64CE\u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF0C\u4E0D\u80FD\u8DDF\u968F\u63D2\u4EF6\u52A8\u6001\u66F4\u65B0\u3002\u672C\u6587\u5C06\u4EE5 postgres \u6570\u636E\u5E93\u548C\u5938\u514B\u641C\u7D22\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002</p>
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
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">mcpServer</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">sse_path_suffix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/sse</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">enable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">          </span><span style="--0:#99A0A6"># \u542F\u7528 MCP Server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis-stack-server.higress-system.svc.cluster.local:6379</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Redis \u670D\u52A1\u5730\u5740</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">match_list</span><span style="--0:#E1E4E8">:          </span><span style="--0:#99A0A6"># MCP Server \u8DEF\u7531\u89C4\u5219</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">match_rule_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/postgres</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">match_rule_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"prefix"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match_rule_domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">match_rule_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/quark</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">match_rule_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"prefix"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serves</span><span style="--0:#E1E4E8">:</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mcpServer:\x7F  sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00\x7F  enable: true          # \u542F\u7528 MCP Server\x7F  redis:\x7F    address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis \u670D\u52A1\u5730\u5740\x7F  match_list:          # MCP Server \u8DEF\u7531\u89C4\u5219\x7F    - match_rule_domain: &#x22;*&#x22;\x7F      match_rule_path: /postgres\x7F      match_rule_type: &#x22;prefix&#x22;\x7F    - match_rule_domain: &#x22;*&#x22;\x7F      match_rule_path: /quark\x7F      match_rule_type: &#x22;prefix&#x22;\x7F  serves:"><div></div></button></div></figure></div>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server \u5728 Config Map \u4E2D\u914D\u7F6E\uFF0C\u63D2\u4EF6\u7C7B\u578B\u5728 Higress \u63A7\u5236\u53F0\u914D\u7F6E\u3002</p>
</blockquote>
<h3 id="\u914D\u7F6E-postgres-mcp-server">\u914D\u7F6E postgres MCP Server</h3>
<p>\u5728 Config Map \u4E2D\u914D\u7F6E postgres MCP Server\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">servers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">postgres</span><span style="--0:#E1E4E8">      </span><span style="--0:#99A0A6"># MCP Server \u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/postgres</span><span style="--0:#E1E4E8">     </span><span style="--0:#99A0A6"># \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">database</span><span style="--0:#E1E4E8">      </span><span style="--0:#99A0A6"># \u7C7B\u578B\u4E3A\u6570\u636E\u5E93</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dsn</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your postgres database connect dsn"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u6570\u636E\u5E93\u8FDE\u63A5\u4E32</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">dbType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"postgres"</span><span style="--0:#E1E4E8">                        </span><span style="--0:#99A0A6"># \u6570\u636E\u5E93\u7C7B\u578B</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="servers:\x7F  - name: postgres      # MCP Server \u540D\u79F0\x7F    path: /postgres     # \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D\x7F    type: database      # \u7C7B\u578B\u4E3A\u6570\u636E\u5E93\x7F    config:\x7F      dsn: &#x22;your postgres database connect dsn&#x22; # \u6570\u636E\u5E93\u8FDE\u63A5\u4E32\x7F      dbType: &#x22;postgres&#x22;                        # \u6570\u636E\u5E93\u7C7B\u578B"><div></div></button></div></figure></div>
<p>\u6570\u636E\u5E93\u8FDE\u63A5\u4E32\u683C\u5F0F\u8BF7\u53C2\u8003 <a href="https://gorm.io/docs/connecting_to_the_database.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">gorm \u6587\u6863</a>\u3002</p>
<h3 id="\u914D\u7F6E\u5938\u514B\u641C\u7D22-mcp-server">\u914D\u7F6E\u5938\u514B\u641C\u7D22 MCP Server</h3>
<h4 id="1-\u7533\u8BF7-api-key">1. \u7533\u8BF7 API Key</h4>
<p><a href="https://help.aliyun.com/document_detail/2872258.html?spm=a2c4g.11186623.0.0.632e3350xkb4hu" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u7533\u8BF7\u5938\u514B\u641C\u7D22\u8C03\u7528\u7684 API Key</a></p>
<h4 id="2-\u6DFB\u52A0\u670D\u52A1\u6765\u6E90">2. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90</h4>
<p>\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u5938\u514B\u641C\u7D22\u7684\u670D\u52A1\u6765\u6E90\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i3/O1CN018CbgsB1o7Zs7LNCO7_!!6000000005178-0-tps-2434-146.jpg" alt="\u6DFB\u52A0\u670D\u52A1\u6765\u6E90" referrerpolicy="no-referrer"></p>
<h4 id="3-\u914D\u7F6E\u8DEF\u7531">3. \u914D\u7F6E\u8DEF\u7531</h4>
<p>\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u5938\u514B\u641C\u7D22\u7684\u8DEF\u7531\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i1/O1CN01Yx0SDr1YLHsTz23OD_!!6000000003042-0-tps-2522-738.jpg" alt="\u914D\u7F6E\u8DEF\u7531" referrerpolicy="no-referrer"></p>
<h4 id="4-\u914D\u7F6E\u63D2\u4EF6">4. \u914D\u7F6E\u63D2\u4EF6</h4>
<p>\u5BF9\u521B\u5EFA\u7684\u8DEF\u7531\u70B9\u51FB\u7B56\u7565\u6309\u952E\u6DFB\u52A0\u63D2\u4EF6\uFF1A</p>
<div align="center">
<img src="https://gw.alicdn.com/imgextra/i4/O1CN01vrUE1z1fClp4Lr0dv_!!6000000003971-0-tps-1286-1072.jpg" width="500" alt="\u63D2\u4EF6\u914D\u7F6E">
</div>
<p>\u5BF9\u6DFB\u52A0\u7684\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF1A</p>
<div align="center">
<img src="https://gw.alicdn.com/imgextra/i1/O1CN01RkKZa01gZxUVFVm1l_!!6000000004157-0-tps-1302-692.jpg" width="500" alt="\u63D2\u4EF6\u53C2\u6570">
</div>
<h2 id="mcp-server-\u4F7F\u7528">MCP Server \u4F7F\u7528</h2>
<p>\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 cursor \u4E3A\u4F8B\uFF1A</p>
<ul>
<li>\u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix</li>
<li>\u63D2\u4EF6\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">"mcpServers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"postgres"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/postgres/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"quark"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/quark-search/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;mcpServers&#x22;: {\x7F  &#x22;postgres&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/postgres/sse&#x22;\x7F  },\x7F  &#x22;quark&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/quark-search/sse&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<p>cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A</p>
<p><img src="https://gw.alicdn.com/imgextra/i3/O1CN01WS1eN01xovuMAlRQh_!!6000000006491-0-tps-1918-622.jpg" alt="cursor\u914D\u7F6E\u5B8C\u6210" referrerpolicy="no-referrer"></p>
<h2 id="\u4F7F\u7528\u573A\u666F">\u4F7F\u7528\u573A\u666F</h2>
<p>MCP Server \u4E3B\u8981\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A</p>
<ol>
<li><strong>\u6570\u636E\u5E93\u8BBF\u95EE</strong>\uFF1AAI Agent \u9700\u8981\u67E5\u8BE2\u6570\u636E\u5E93\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u76F4\u63A5\u8BBF\u95EE\uFF0C\u65E0\u9700\u5904\u7406\u6570\u636E\u5E93\u8FDE\u63A5\u548C\u67E5\u8BE2\u903B\u8F91</li>
<li><strong>\u641C\u7D22\u5F15\u64CE\u96C6\u6210</strong>\uFF1AAI Agent \u9700\u8981\u641C\u7D22\u4FE1\u606F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u8C03\u7528\u641C\u7D22\u5F15\u64CE\u670D\u52A1</li>
<li><strong>\u5916\u90E8\u670D\u52A1\u5BF9\u63A5</strong>\uFF1AAI Agent \u9700\u8981\u8C03\u7528\u5176\u4ED6\u5916\u90E8\u670D\u52A1\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u7EDF\u4E00\u7BA1\u7406</li>
</ol>
<p>\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002</p>`,t={title:"MCP Server \u5FEB\u901F\u5F00\u59CB",description:"MCP Server \u5FEB\u901F\u5F00\u59CB\u6307\u5357",date:"2025-03-31",category:"article",keywords:["MCP Server"],authors:"\u9759\u62E9"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-quick-start.md",n=void 0,l=function(){return`
# MCP Server \u5FEB\u901F\u5F00\u59CB

> **\u6CE8\u610F\uFF1A** \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002

MCP Server \u662F Higress AI \u7F51\u5173\u63D0\u4F9B\u7684\u4E00\u79CD\u7EDF\u4E00\u4EE3\u7406\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001\u641C\u7D22\u5F15\u64CE\u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF0C\u4E0D\u80FD\u8DDF\u968F\u63D2\u4EF6\u52A8\u6001\u66F4\u65B0\u3002\u672C\u6587\u5C06\u4EE5 postgres \u6570\u636E\u5E93\u548C\u5938\u514B\u641C\u7D22\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002

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
mcpServer:
  sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00
  enable: true          # \u542F\u7528 MCP Server
  redis:
    address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis \u670D\u52A1\u5730\u5740
  match_list:          # MCP Server \u8DEF\u7531\u89C4\u5219
    - match_rule_domain: "*"
      match_rule_path: /postgres
      match_rule_type: "prefix"
    - match_rule_domain: "*"
      match_rule_path: /quark
      match_rule_type: "prefix"
  serves: 
\`\`\`

> **\u6CE8\u610F\uFF1A** \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server \u5728 Config Map \u4E2D\u914D\u7F6E\uFF0C\u63D2\u4EF6\u7C7B\u578B\u5728 Higress \u63A7\u5236\u53F0\u914D\u7F6E\u3002

### \u914D\u7F6E postgres MCP Server

\u5728 Config Map \u4E2D\u914D\u7F6E postgres MCP Server\uFF1A

\`\`\`yaml
servers:
  - name: postgres      # MCP Server \u540D\u79F0
    path: /postgres     # \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D
    type: database      # \u7C7B\u578B\u4E3A\u6570\u636E\u5E93
    config:
      dsn: "your postgres database connect dsn" # \u6570\u636E\u5E93\u8FDE\u63A5\u4E32
      dbType: "postgres"                        # \u6570\u636E\u5E93\u7C7B\u578B
\`\`\`

\u6570\u636E\u5E93\u8FDE\u63A5\u4E32\u683C\u5F0F\u8BF7\u53C2\u8003 [gorm \u6587\u6863](https://gorm.io/docs/connecting_to_the_database.html)\u3002

### \u914D\u7F6E\u5938\u514B\u641C\u7D22 MCP Server

#### 1. \u7533\u8BF7 API Key

[\u7533\u8BF7\u5938\u514B\u641C\u7D22\u8C03\u7528\u7684 API Key](https://help.aliyun.com/document_detail/2872258.html?spm=a2c4g.11186623.0.0.632e3350xkb4hu)

#### 2. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u5938\u514B\u641C\u7D22\u7684\u670D\u52A1\u6765\u6E90\uFF1A

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90](https://gw.alicdn.com/imgextra/i3/O1CN018CbgsB1o7Zs7LNCO7_!!6000000005178-0-tps-2434-146.jpg)

#### 3. \u914D\u7F6E\u8DEF\u7531

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u5938\u514B\u641C\u7D22\u7684\u8DEF\u7531\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A

![\u914D\u7F6E\u8DEF\u7531](https://gw.alicdn.com/imgextra/i1/O1CN01Yx0SDr1YLHsTz23OD_!!6000000003042-0-tps-2522-738.jpg)

#### 4. \u914D\u7F6E\u63D2\u4EF6

\u5BF9\u521B\u5EFA\u7684\u8DEF\u7531\u70B9\u51FB\u7B56\u7565\u6309\u952E\u6DFB\u52A0\u63D2\u4EF6\uFF1A

<div align="center">
<img src="https://gw.alicdn.com/imgextra/i4/O1CN01vrUE1z1fClp4Lr0dv_!!6000000003971-0-tps-1286-1072.jpg" width="500" alt="\u63D2\u4EF6\u914D\u7F6E" />
</div>

\u5BF9\u6DFB\u52A0\u7684\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF1A

<div align="center">
<img src="https://gw.alicdn.com/imgextra/i1/O1CN01RkKZa01gZxUVFVm1l_!!6000000004157-0-tps-1302-692.jpg" width="500" alt="\u63D2\u4EF6\u53C2\u6570"/>
</div>

## MCP Server \u4F7F\u7528

\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 cursor \u4E3A\u4F8B\uFF1A

* \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix
* \u63D2\u4EF6\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix

\`\`\`yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "quark": {
    "url": "http://your-higress-address/quark-search/sse"
  }
}
\`\`\`

cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A

![cursor\u914D\u7F6E\u5B8C\u6210](https://gw.alicdn.com/imgextra/i3/O1CN01WS1eN01xovuMAlRQh_!!6000000006491-0-tps-1918-622.jpg)

## \u4F7F\u7528\u573A\u666F

MCP Server \u4E3B\u8981\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A

1. **\u6570\u636E\u5E93\u8BBF\u95EE**\uFF1AAI Agent \u9700\u8981\u67E5\u8BE2\u6570\u636E\u5E93\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u76F4\u63A5\u8BBF\u95EE\uFF0C\u65E0\u9700\u5904\u7406\u6570\u636E\u5E93\u8FDE\u63A5\u548C\u67E5\u8BE2\u903B\u8F91
2. **\u641C\u7D22\u5F15\u64CE\u96C6\u6210**\uFF1AAI Agent \u9700\u8981\u641C\u7D22\u4FE1\u606F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u8C03\u7528\u641C\u7D22\u5F15\u64CE\u670D\u52A1
3. **\u5916\u90E8\u670D\u52A1\u5BF9\u63A5**\uFF1AAI Agent \u9700\u8981\u8C03\u7528\u5176\u4ED6\u5916\u90E8\u670D\u52A1\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u7EDF\u4E00\u7BA1\u7406

\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002`},i=function(){return s},r=function(){return[{depth:2,slug:"\u524D\u63D0\u6761\u4EF6",text:"\u524D\u63D0\u6761\u4EF6"},{depth:2,slug:"\u914D\u7F6E-mcp-server",text:"\u914D\u7F6E MCP Server"},{depth:3,slug:"configmap-\u5168\u5C40\u53C2\u6570\u914D\u7F6E",text:"ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E"},{depth:3,slug:"\u914D\u7F6E-postgres-mcp-server",text:"\u914D\u7F6E postgres MCP Server"},{depth:3,slug:"\u914D\u7F6E\u5938\u514B\u641C\u7D22-mcp-server",text:"\u914D\u7F6E\u5938\u514B\u641C\u7D22 MCP Server"},{depth:4,slug:"1-\u7533\u8BF7-api-key",text:"1. \u7533\u8BF7 API Key"},{depth:4,slug:"2-\u6DFB\u52A0\u670D\u52A1\u6765\u6E90",text:"2. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90"},{depth:4,slug:"3-\u914D\u7F6E\u8DEF\u7531",text:"3. \u914D\u7F6E\u8DEF\u7531"},{depth:4,slug:"4-\u914D\u7F6E\u63D2\u4EF6",text:"4. \u914D\u7F6E\u63D2\u4EF6"},{depth:2,slug:"mcp-server-\u4F7F\u7528",text:"MCP Server \u4F7F\u7528"},{depth:2,slug:"\u4F7F\u7528\u573A\u666F",text:"\u4F7F\u7528\u573A\u666F"}]},e=d((u,m,C)=>{const{layout:f,...p}=t;return p.file=a,p.url=n,o`${v()}${E(s)}`})});export{e as Content,h as __tla,i as compiledContent,e as default,a as file,t as frontmatter,r as getHeadings,l as rawContent,n as url};
