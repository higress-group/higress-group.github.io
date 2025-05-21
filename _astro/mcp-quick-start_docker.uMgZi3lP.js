import{c as d,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as o,m as v,u as E,__tla as y}from"./constant.C798a0v1.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let e,r,a,n,t,l,i,h=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u6982\u8FF0">\u6982\u8FF0</h2>
<p>Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server\u3002\u672C\u6587\u5C06\u4EE5 \u4E00\u4E2A\u7B80\u5355\u7684 REST API \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u901A\u8FC7 Higress \u5C06\u4E00\u4E2A REST API \u8F6C\u5316\u4E3A MCP Server \u7684\u914D\u7F6E\u6D41\u7A0B\u3002</p>
<h2 id="\u524D\u63D0\u6761\u4EF6">\u524D\u63D0\u6761\u4EF6</h2>
<ol>
<li>\u786E\u8BA4\u672C\u673A\u5B89\u88C5\u6709 Docker \u4E14 <code dir="auto">docker</code> \u547D\u4EE4\u53EF\u7528\u3002</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker"><div></div></button></div></figure></div>
<ol start="2">
<li>\u786E\u8BA4\u672C\u673A\u53EF\u4EE5\u8BBF\u95EE\u5916\u7F51\u3002</li>
</ol>
<h2 id="\u90E8\u7F72-higress">\u90E8\u7F72 Higress</h2>
<p>\u5728\u5F00\u59CB\u4F7F\u7528 MCP Server \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u90E8\u7F72 Higress\u3002\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528\u7684\u662F all-in-one \u955C\u50CF\u7684\u90E8\u7F72\u65B9\u5F0F\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">mkdir</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8">; </span><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u62C9\u53D6\u6700\u65B0\u7684 Higress all-in-one \u955C\u50CF</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pull</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u542F\u52A8 Higress\uFF0C\u914D\u7F6E\u6587\u4EF6\u4F1A\u5199\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E0B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> \${PWD}</span><span style="--0:#9ECBFF">:/data</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8001:8001</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8080:8080</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8443:8443</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mkdir higress; cd higress\x7Fdocker pull higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest\x7Fdocker run -d --rm --name higress-ai -v \${PWD}:/data \\\x7F        -p 8001:8001 -p 8080:8080 -p 8443:8443 \\\x7F        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest"><div></div></button></div></figure></div>
<p>**\u91CD\u8981\uFF1A**\u540E\u7EED\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\uFF0C\u8BF7\u52FF\u5207\u6362\u7EC8\u7AEF\u7684\u5DE5\u4F5C\u76EE\u5F55\u3002\u5E94\u4F7F\u5176\u4FDD\u6301\u5728\u65B0\u521B\u5EFA\u7684 <code dir="auto">higress</code> \u76EE\u5F55\u4E0B\u3002</p>
<p>\u60A8\u4E5F\u53EF\u4EE5\u53C2\u8003 <a href="https://higress.cn/docs/latest/user/quickstart" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress \u5FEB\u901F\u5165\u95E8\u6307\u5357</a> \u5B8C\u6210\u8FD9\u90E8\u5206\u7684\u90E8\u7F72\u5DE5\u4F5C\u3002</p>
<h2 id="\u90E8\u7F72-redis">\u90E8\u7F72 Redis</h2>
<p>MCP Server \u7684 SSE \u529F\u80FD\u9700\u8981\u4F9D\u8D56 Redis \u670D\u52A1\u7528\u4E8E\u6570\u636E\u7F13\u5B58\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5728\u540E\u53F0\u542F\u52A8\u4E00\u4E2A Redis \u670D\u52A1\u5BB9\u5668\uFF0C\u5E76\u5C06\u5176 6379 \u7AEF\u53E3\u6620\u5C04\u5230\u672C\u673A\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-redis</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">6379:6379</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run -d --rm --name higress-redis -p 6379:6379 higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3"><div></div></button></div></figure></div>
<h2 id="\u914D\u7F6E-mcp-server">\u914D\u7F6E MCP Server</h2>
<h3 id="configmap-\u5168\u5C40\u53C2\u6570\u914D\u7F6E">ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E</h3>
<p>\u5728 ConfigMap \u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">vi</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./configmaps/higress-config.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="vi ./configmaps/higress-config.yaml"><div></div></button></div></figure></div>
<p>\u914D\u7F6E Redis \u8FDE\u63A5\u4FE1\u606F\u548C MCP Server \u7684\u8DEF\u7531\u89C4\u5219\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">creationTimestamp</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2000-01-01T00:00:00Z"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">resourceVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">mcpServer:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true          # \u542F\u7528 MCP Server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">redis:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">address: IP:6379 # Redis\u670D\u52A1\u5730\u5740\u3002\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u672C\u673A\u7684\u5185\u7F51 IP\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">username: "" # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">password: "" # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">match_list:          # MCP Server \u4F1A\u8BDD\u4FDD\u6301\u8DEF\u7531\u89C4\u5219\uFF08\u5F53\u5339\u914D\u4E0B\u9762\u8DEF\u5F84\u65F6\uFF0C\u5C06\u88AB\u8BC6\u522B\u4E3A\u4E00\u4E2A MCP \u4F1A\u8BDD\uFF0C\u901A\u8FC7 SSE \u7B49\u673A\u5236\u8FDB\u884C\u4F1A\u8BDD\u4FDD\u6301\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- match_rule_domain: "*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_path: /user</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">match_rule_type: "prefix"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">servers: []</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">downstream:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF"># \u4EE5\u4E0B\u914D\u7F6E\u65E0\u9700\u4FEE\u6539\uFF0C\u6B64\u5904\u7701\u7565</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system\x7F  creationTimestamp: &#x22;2000-01-01T00:00:00Z&#x22;\x7F  resourceVersion: &#x22;1&#x22;\x7Fdata:\x7F  higress: |-\x7F    mcpServer:\x7F      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00\x7F      enable: true          # \u542F\u7528 MCP Server\x7F      redis:\x7F        address: IP:6379 # Redis\u670D\u52A1\u5730\u5740\u3002\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u672C\u673A\u7684\u5185\u7F51 IP\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1\x7F        username: &#x22;&#x22; # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09\x7F        password: &#x22;&#x22; # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09\x7F        db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09\x7F      match_list:          # MCP Server \u4F1A\u8BDD\u4FDD\u6301\u8DEF\u7531\u89C4\u5219\uFF08\u5F53\u5339\u914D\u4E0B\u9762\u8DEF\u5F84\u65F6\uFF0C\u5C06\u88AB\u8BC6\u522B\u4E3A\u4E00\u4E2A MCP \u4F1A\u8BDD\uFF0C\u901A\u8FC7 SSE \u7B49\u673A\u5236\u8FDB\u884C\u4F1A\u8BDD\u4FDD\u6301\uFF09\x7F        - match_rule_domain: &#x22;*&#x22;\x7F          match_rule_path: /user\x7F          match_rule_type: &#x22;prefix&#x22;\x7F      servers: []\x7F    downstream:\x7F    # \u4EE5\u4E0B\u914D\u7F6E\u65E0\u9700\u4FEE\u6539\uFF0C\u6B64\u5904\u7701\u7565"><div></div></button></div></figure></div>
<p>**\u6CE8\u610F\uFF1A**\u53D7 Docker \u8FD0\u884C\u73AF\u5883\u7684\u9650\u5236\uFF0C\u975E Linux \u64CD\u4F5C\u7CFB\u7EDF\u5728\u4FEE\u6539 yaml \u6587\u4EF6\u4E4B\u540E\uFF0C\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u8BA9\u65B0\u7684\u914D\u7F6E\u751F\u6548\u3002\u5982\u679C\u5E0C\u671B\u7ACB\u5373\u751F\u6548\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u91CD\u542F higress-ai \u5BB9\u5668\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">stop</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> \${PWD}</span><span style="--0:#9ECBFF">:/data</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8001:8001</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8080:8080</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8443:8443</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker stop higress-ai\x7Fdocker run -d --rm --name higress-ai -v \${PWD}:/data \\\x7F        -p 8001:8001 -p 8080:8080 -p 8443:8443 \\\x7F        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6E-rest-api-mcp-server">\u914D\u7F6E REST API MCP Server</h3>
<p>\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u5FEB\u901F\u8F6C\u6362\u4E3A MCP Server\uFF1A</p>
<h4 id="1-\u6253\u5F00-higress-\u63A7\u5236\u53F0">1. \u6253\u5F00 Higress \u63A7\u5236\u53F0</h4>
<p>\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE <code dir="auto">http://localhost:8001</code>\u3002</p>
<p>\u9996\u6B21\u8BBF\u95EE\u5C06\u4F1A\u8981\u6C42\u914D\u7F6E\u767B\u5F55\u8D26\u53F7\u4FE1\u606F\u3002\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u8BF7\u4F7F\u7528\u914D\u7F6E\u597D\u7684\u8D26\u53F7\u767B\u5F55\u3002</p>
<h4 id="1-\u6DFB\u52A0\u670D\u52A1\u6765\u6E90">1. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90</h4>
<p>\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\u3002\u672C\u793A\u4F8B\u4F7F\u7528 <code dir="auto">randomuser.me</code> \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90\u3002</p>
<p><img src="/img/ai/mcp-quick-start_docker/zh/add-servicesource-info.png" alt="\u6DFB\u52A0\u670D\u52A1\u6765\u6E90-\u4FE1\u606F" referrerpolicy="no-referrer"></p>
<p>\u6DFB\u52A0\u5B8C\u6210\u540E\uFF0C\u670D\u52A1\u6765\u6E90\u5217\u8868\u663E\u793A\u5982\u4E0B\uFF1A</p>
<p><img src="/img/ai/mcp-quick-start_docker/zh/add-servicesource-list.png" alt="\u6DFB\u52A0\u670D\u52A1\u6765\u6E90-\u5217\u8868" referrerpolicy="no-referrer"></p>
<h4 id="2-\u914D\u7F6E\u8DEF\u7531">2. \u914D\u7F6E\u8DEF\u7531</h4>
<p>\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u8DEF\u7531\u5E76\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A</p>
<p><img src="/img/ai/mcp-quick-start_docker/zh/add-route-info.png" alt="\u914D\u7F6E\u8DEF\u7531-\u4FE1\u606F" referrerpolicy="no-referrer"></p>
<p>\u6DFB\u52A0\u5B8C\u6210\u540E\uFF0C\u8DEF\u7531\u5217\u8868\u663E\u793A\u5982\u4E0B\uFF1A</p>
<p><img src="/img/ai/mcp-quick-start_docker/zh/add-route-list.png" alt="\u914D\u7F6E\u8DEF\u7531-\u5217\u8868" referrerpolicy="no-referrer"></p>
<h4 id="3-\u914D\u7F6E-mcp-server-\u63D2\u4EF6">3. \u914D\u7F6E MCP Server \u63D2\u4EF6</h4>
<ol>
<li>\u70B9\u51FB\u65B0\u521B\u5EFA\u7684\u8DEF\u7531\u53F3\u4FA7\u7684\u201C\u7B56\u7565\u201D\u94FE\u63A5\u8FDB\u5165\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\u3002</li>
<li>\u627E\u5230\u201CMCP \u670D\u52A1\u5668\u201D\u63D2\u4EF6\uFF0C\u5E76\u70B9\u51FB\u5176\u4E0B\u65B9\u7684\u914D\u7F6E\u6309\u94AE</li>
<li>\u5C06\u201C\u5F00\u542F\u72B6\u6001\u201D\u5207\u6362\u81F3\u7EFF\u8272\u7684\u5F00\u3002</li>
<li>\u5C06\u4E0B\u53D1\u914D\u7F6E\u90E8\u5206\u5207\u6362\u5230 YAML \u89C6\u56FE\uFF0C\u5E76\u586B\u5165\u4EE5\u4E0B\u914D\u7F6E\u3002</li>
<li>\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u4FDD\u5B58\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"random-user-server"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get random user information"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"get-user"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://randomuser.me/api/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># User Information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- with (index .results 0) }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Name**: {{.name.first}} {{.name.last}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Email**: {{.email}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Location**: {{.location.city}}, {{.location.country}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Phone**: {{.phone}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;random-user-server&#x22;\x7Ftools:\x7F- description: &#x22;Get random user information&#x22;\x7F  name: &#x22;get-user&#x22;\x7F  requestTemplate:\x7F    method: &#x22;GET&#x22;\x7F    url: &#x22;https://randomuser.me/api/&#x22;\x7F  responseTemplate:\x7F    body: |-\x7F      # User Information\x7F      {{- with (index .results 0) }}\x7F      - **Name**: {{.name.first}} {{.name.last}}\x7F      - **Email**: {{.email}}\x7F      - **Location**: {{.location.city}}, {{.location.country}}\x7F      - **Phone**: {{.phone}}\x7F      {{- end }}"><div></div></button></div></figure></div>
<br>
<p><img src="https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg" alt="\u914D\u7F6EMCP Server\u63D2\u4EF6" referrerpolicy="no-referrer"></p>
<h2 id="mcp-server-\u4F7F\u7528">MCP Server \u4F7F\u7528</h2>
<p>\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE Server\uFF0C\u672C\u6587\u4EE5 <a href="https://cherry-ai.com/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Cherry Studio</a> \u4E3A\u4F8B\u3002</p>
<h3 id="1-\u6DFB\u52A0-mcp-\u670D\u52A1\u5668">1. \u6DFB\u52A0 MCP \u670D\u52A1\u5668</h3>
<p>\u6309\u7167\u4EE5\u4E0B\u8BF4\u660E\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 MCP \u670D\u52A1\u5668\u6307\u5411\u6211\u4EEC\u521A\u521A\u914D\u7F6E\u7684\u8DEF\u7531\uFF1A</p>
<ol>
<li>\u540D\u79F0\uFF1A\u53EF\u4EE5\u4EFB\u610F\u586B\u5199</li>
<li>\u7C7B\u578B\uFF1A<code dir="auto">\u670D\u52A1\u5668\u53D1\u9001\u4E8B\u4EF6\uFF08sse\uFF09</code></li>
<li>URL\uFF1A<code dir="auto">http://localhost:8080/user/sse</code></li>
</ol>
<p><img src="/img/ai/mcp-quick-start_docker/zh/cherry-studio-add-mcp-1.png" alt="\u914D\u7F6EMCP Server\u63D2\u4EF6-1" referrerpolicy="no-referrer"></p>
<p><img src="/img/ai/mcp-quick-start_docker/zh/cherry-studio-add-mcp-2.png" alt="\u914D\u7F6EMCP Server\u63D2\u4EF6-2" referrerpolicy="no-referrer"></p>
<h3 id="2-\u4F7F\u7528-mcp-\u670D\u52A1">2. \u4F7F\u7528 MCP \u670D\u52A1</h3>
<p>\u5728 Cherry Studio \u4E2D\uFF0C\u8981\u5728\u5BF9\u8BDD\u4E2D\u4F7F\u7528 MCP \u670D\u52A1\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u6FC0\u6D3B\u5B83\u3002</p>
<ol>
<li>\u5207\u6362\u5230\u201C\u52A9\u624B\u201D\u9875\u9762</li>
<li>\u70B9\u51FB\u53F3\u4FA7\u8F93\u5165\u6846\u4E0B\u65B9\u7684\u201CMCP \u670D\u52A1\u5668\u201D\u6309\u94AE</li>
<li>\u5728\u5F39\u51FA\u7684 MCP \u670D\u52A1\u5668\u5217\u8868\u4E2D\u70B9\u51FB\u6211\u4EEC\u521A\u521A\u6DFB\u52A0\u7684\u201CGetRandomUser\u201D\u670D\u52A1\uFF0C\u4F7F\u5176\u53D8\u7EFF\u4E14\u53F3\u4FA7\u51FA\u73B0\u201C\u221A\u201D\u6807\u8BC6</li>
</ol>
<p><img src="/img/ai/mcp-quick-start_docker/zh/activate-mcp-server.png" alt="\u6FC0\u6D3BMCP Server" referrerpolicy="no-referrer"></p>
<p>\u73B0\u5728\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u5BF9\u8BDD\u4E2D\u4F7F\u7528\u8FD9\u4E2A MCP \u670D\u52A1\u670D\u52A1\u4E86\u3002</p>
<p>\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u201C\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u7528\u6237\u4FE1\u606F\u201D\u3002\u5C31\u53EF\u4EE5\u770B\u5230 Cherry Studio \u5229\u7528\u5927\u6A21\u578B\u5E76\u901A\u8FC7 MCP Server \u6765\u4E3A\u6211\u4EEC\u751F\u6210\u4E86\u4E00\u6BB5\u968F\u673A\u7684\u7528\u6237\u4FE1\u606F\u3002</p>
<p><img src="/img/ai/mcp-quick-start_docker/zh/use-mcp-server.png" alt="\u4F7F\u7528MCP Server" referrerpolicy="no-referrer"></p>
<h2 id="\u5E38\u89C1\u95EE\u9898">\u5E38\u89C1\u95EE\u9898</h2>
<h3 id="1-higress-config-\u4E2D\u7684-mcpserver-\u914D\u7F6E\u4E0E\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u8DEF\u7531\u7B56\u7565\u4E2D\u7684-mcp-\u670D\u52A1\u5668\u63D2\u4EF6\u4E4B\u95F4\u662F\u4EC0\u4E48\u5173\u7CFB">1. higress-config \u4E2D\u7684 mcpServer \u914D\u7F6E\u4E0E\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u8DEF\u7531\u7B56\u7565\u4E2D\u7684 MCP \u670D\u52A1\u5668\u63D2\u4EF6\u4E4B\u95F4\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F</h3>
<p><code dir="auto">higress-config</code> \u4E2D\u7684 <code dir="auto">mcpServer</code> \u914D\u7F6E\u662F\u7528\u6765\u8FDB\u884C SSE \u6570\u636E\u6D41\u63A8\u9001\u7684\u3002\u6240\u4EE5\u5B83\u91CC\u9762\u7684 <code dir="auto">matchList</code> \u4E2D\u7684\u5339\u914D\u89C4\u5219\u5FC5\u987B\u8981\u8986\u76D6\u6240\u6709\u4F7F\u7528 SSE \u534F\u8BAE\u7684 MCP \u670D\u52A1\u5668\u8DEF\u5F84\u3002</p>
<p>\u8DEF\u7531\u914D\u7F6E\u662F\u7528\u6765\u8BA9\u8BF7\u6C42\u80FD\u591F\u6B63\u5E38\u88AB\u8F6C\u53D1\u5230\u76EE\u6807 REST API \u7684\u3002\u6240\u4EE5\u8DEF\u7531\u6240\u6307\u5411\u7684\u76EE\u6807\u670D\u52A1\u5FC5\u987B\u662F MCP \u670D\u52A1\u6240\u5BF9\u5E94\u7684 REST API\u3002</p>
<p>\u8DEF\u7531\u7B56\u7565\u914D\u7F6E\u4E2D\u7684 MCP \u670D\u52A1\u5668\u63D2\u4EF6\u914D\u7F6E\u6709\u4E24\u4E2A\u529F\u80FD\uFF0C\u4E00\u4E2A\u662F\u5411 MCP \u5BA2\u6237\u7AEF\uFF08\u4E5F\u5C31\u662F\u4F8B\u5B50\u4E2D\u7684 Cherry Studio\uFF09\u63D0\u4F9B MCP \u670D\u52A1\u6240\u652F\u6301\u7684\u5DE5\u5177\u65B9\u6CD5\u7684\u5143\u6570\u636E\uFF0C\u53E6\u4E00\u4E2A\u5219\u662F\u5728\u8F6C\u53D1\u8BF7\u6C42\u7684\u65F6\u5019\u5C06 MCP \u8BF7\u6C42\u8F6C\u6362\u6210\u76EE\u6807\u670D\u52A1\u53EF\u4EE5\u652F\u6301\u7684\u683C\u5F0F\uFF0C\u4E5F\u5C31\u662F <code dir="auto">requestTemplate</code> \u90E8\u5206\u6240\u914D\u7F6E\u7684\u5185\u5BB9\u3002</p>
<h3 id="2-\u662F\u5426\u53EF\u4EE5\u4E0D\u7528\u90E8\u7F72-redis">2. \u662F\u5426\u53EF\u4EE5\u4E0D\u7528\u90E8\u7F72 Redis\uFF1F</h3>
<p>\u7531\u4E8E MCP \u534F\u8BAE\u53D1\u8D77\u5DE5\u5177\u8C03\u7528\u548C\u63A8\u9001\u54CD\u5E94\u6240\u5BF9\u5E94\u7684\u662F\u4E0D\u540C\u7684\u8BF7\u6C42\uFF0C\u751A\u81F3\u5728\u96C6\u7FA4\u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u8BF7\u6C42\u53EF\u80FD\u4F1A\u7531\u96C6\u7FA4\u4E2D\u7684\u4E0D\u540C\u670D\u52A1\u5668\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5 Higress \u5F15\u5165\u4E86 Redis \u6765\u8FDB\u884C\u4F1A\u8BDD\u7BA1\u7406\uFF0C\u786E\u4FDD\u6240\u6709\u7684\u5DE5\u5177\u8C03\u7528\u90FD\u53EF\u4EE5\u5173\u8054\u5230\u6700\u521D\u5F00\u542F\u4F1A\u8BDD\u7684 SSE \u8BF7\u6C42\u3002</p>
<p>\u5982\u679C\u4E0D\u60F3\u7528 Redis \u7684\u8BDD\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B MCP \u534F\u8BAE\u4E2D\u65B0\u63A8\u51FA\u7684 Streamble HTTP \u901A\u4FE1\u65B9\u5F0F\u3002</p>
<h3 id="3-\u5982\u4F55\u67E5\u770B\u65E5\u5FD7">3. \u5982\u4F55\u67E5\u770B\u65E5\u5FD7\uFF1F</h3>
<p>Higress all-in-one \u5BB9\u5668\u7684\u6240\u6709\u65E5\u5FD7\u90FD\u4FDD\u5B58\u5728\u5BB9\u5668\u4E2D\u7684 <code dir="auto">/var/log/higress</code> \u76EE\u5F55\u4E2D\u3002\u5927\u5BB6\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u5165\u5230\u5BB9\u5668\u4E2D\u8FDB\u884C\u67E5\u770B\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/var/log/higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">cat</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-ai bash\x7Fcd /var/log/higress\x7Fcat gateway.log"><div></div></button></div></figure></div>
<h2 id="\u603B\u7ED3">\u603B\u7ED3</h2>
<p>\u901A\u8FC7 Higress \u7684 MCP Server \u529F\u80FD\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002</p>
<blockquote>
<p>\u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Issue</a> \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002</p>
<p>\u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star <a href="https://github.com/alibaba/higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress Github Repo</a>\u3002</p>
</blockquote>`,n={title:"MCP Server \u5FEB\u901F\u5F00\u59CB\uFF08Docker \u7248\uFF09",description:"Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server",date:"2025-04-20",category:"article",keywords:["MCP Server"],authors:"CH3CHO"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-quick-start_docker.md",i=void 0,l=function(){return`
## \u6982\u8FF0 

Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server\u3002\u672C\u6587\u5C06\u4EE5 \u4E00\u4E2A\u7B80\u5355\u7684 REST API \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u901A\u8FC7 Higress \u5C06\u4E00\u4E2A REST API \u8F6C\u5316\u4E3A MCP Server \u7684\u914D\u7F6E\u6D41\u7A0B\u3002

## \u524D\u63D0\u6761\u4EF6

1. \u786E\u8BA4\u672C\u673A\u5B89\u88C5\u6709 Docker \u4E14 \`docker\` \u547D\u4EE4\u53EF\u7528\u3002
  \`\`\`bash
  docker
  \`\`\`
2. \u786E\u8BA4\u672C\u673A\u53EF\u4EE5\u8BBF\u95EE\u5916\u7F51\u3002

## \u90E8\u7F72 Higress

\u5728\u5F00\u59CB\u4F7F\u7528 MCP Server \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u90E8\u7F72 Higress\u3002\u6211\u4EEC\u8FD9\u91CC\u4F7F\u7528\u7684\u662F all-in-one \u955C\u50CF\u7684\u90E8\u7F72\u65B9\u5F0F\u3002

\`\`\`bash
# \u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u76EE\u5F55
mkdir higress; cd higress
# \u62C9\u53D6\u6700\u65B0\u7684 Higress all-in-one \u955C\u50CF
docker pull higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
# \u542F\u52A8 Higress\uFF0C\u914D\u7F6E\u6587\u4EF6\u4F1A\u5199\u5230\u5DE5\u4F5C\u76EE\u5F55\u4E0B
docker run -d --rm --name higress-ai -v \${PWD}:/data \\
        -p 8001:8001 -p 8080:8080 -p 8443:8443 \\
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
\`\`\`

**\u91CD\u8981\uFF1A**\u540E\u7EED\u64CD\u4F5C\u8FC7\u7A0B\u4E2D\uFF0C\u8BF7\u52FF\u5207\u6362\u7EC8\u7AEF\u7684\u5DE5\u4F5C\u76EE\u5F55\u3002\u5E94\u4F7F\u5176\u4FDD\u6301\u5728\u65B0\u521B\u5EFA\u7684 \`higress\` \u76EE\u5F55\u4E0B\u3002

\u60A8\u4E5F\u53EF\u4EE5\u53C2\u8003 [Higress \u5FEB\u901F\u5165\u95E8\u6307\u5357](https://higress.cn/docs/latest/user/quickstart) \u5B8C\u6210\u8FD9\u90E8\u5206\u7684\u90E8\u7F72\u5DE5\u4F5C\u3002

## \u90E8\u7F72 Redis

MCP Server \u7684 SSE \u529F\u80FD\u9700\u8981\u4F9D\u8D56 Redis \u670D\u52A1\u7528\u4E8E\u6570\u636E\u7F13\u5B58\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5728\u540E\u53F0\u542F\u52A8\u4E00\u4E2A Redis \u670D\u52A1\u5BB9\u5668\uFF0C\u5E76\u5C06\u5176 6379 \u7AEF\u53E3\u6620\u5C04\u5230\u672C\u673A\u3002

\`\`\`bash
docker run -d --rm --name higress-redis -p 6379:6379 higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3
\`\`\`

## \u914D\u7F6E MCP Server

### ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E

\u5728 ConfigMap \u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\u3002

\`\`\`bash
vi ./configmaps/higress-config.yaml
\`\`\`

\u914D\u7F6E Redis \u8FDE\u63A5\u4FE1\u606F\u548C MCP Server \u7684\u8DEF\u7531\u89C4\u5219\uFF1A

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
  creationTimestamp: "2000-01-01T00:00:00Z"
  resourceVersion: "1"
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00
      enable: true          # \u542F\u7528 MCP Server
      redis:
        address: IP:6379 # Redis\u670D\u52A1\u5730\u5740\u3002\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u672C\u673A\u7684\u5185\u7F51 IP\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1
        username: "" # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09
        password: "" # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09
        db: 0 # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09
      match_list:          # MCP Server \u4F1A\u8BDD\u4FDD\u6301\u8DEF\u7531\u89C4\u5219\uFF08\u5F53\u5339\u914D\u4E0B\u9762\u8DEF\u5F84\u65F6\uFF0C\u5C06\u88AB\u8BC6\u522B\u4E3A\u4E00\u4E2A MCP \u4F1A\u8BDD\uFF0C\u901A\u8FC7 SSE \u7B49\u673A\u5236\u8FDB\u884C\u4F1A\u8BDD\u4FDD\u6301\uFF09
        - match_rule_domain: "*"
          match_rule_path: /user
          match_rule_type: "prefix"
      servers: []
    downstream:
    # \u4EE5\u4E0B\u914D\u7F6E\u65E0\u9700\u4FEE\u6539\uFF0C\u6B64\u5904\u7701\u7565
\`\`\`

**\u6CE8\u610F\uFF1A**\u53D7 Docker \u8FD0\u884C\u73AF\u5883\u7684\u9650\u5236\uFF0C\u975E Linux \u64CD\u4F5C\u7CFB\u7EDF\u5728\u4FEE\u6539 yaml \u6587\u4EF6\u4E4B\u540E\uFF0C\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u8BA9\u65B0\u7684\u914D\u7F6E\u751F\u6548\u3002\u5982\u679C\u5E0C\u671B\u7ACB\u5373\u751F\u6548\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u91CD\u542F higress-ai \u5BB9\u5668\uFF1A

\`\`\`bash
docker stop higress-ai
docker run -d --rm --name higress-ai -v \${PWD}:/data \\
        -p 8001:8001 -p 8080:8080 -p 8443:8443 \\
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
\`\`\`

### \u914D\u7F6E REST API MCP Server

\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u5FEB\u901F\u8F6C\u6362\u4E3A MCP Server\uFF1A

#### 1. \u6253\u5F00 Higress \u63A7\u5236\u53F0

\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE \`http://localhost:8001\`\u3002

\u9996\u6B21\u8BBF\u95EE\u5C06\u4F1A\u8981\u6C42\u914D\u7F6E\u767B\u5F55\u8D26\u53F7\u4FE1\u606F\u3002\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u8BF7\u4F7F\u7528\u914D\u7F6E\u597D\u7684\u8D26\u53F7\u767B\u5F55\u3002

#### 1. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\u3002\u672C\u793A\u4F8B\u4F7F\u7528 \`randomuser.me\` \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90\u3002

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90-\u4FE1\u606F](/img/ai/mcp-quick-start_docker/zh/add-servicesource-info.png)

\u6DFB\u52A0\u5B8C\u6210\u540E\uFF0C\u670D\u52A1\u6765\u6E90\u5217\u8868\u663E\u793A\u5982\u4E0B\uFF1A

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90-\u5217\u8868](/img/ai/mcp-quick-start_docker/zh/add-servicesource-list.png)

#### 2. \u914D\u7F6E\u8DEF\u7531

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u8DEF\u7531\u5E76\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A

![\u914D\u7F6E\u8DEF\u7531-\u4FE1\u606F](/img/ai/mcp-quick-start_docker/zh/add-route-info.png)

\u6DFB\u52A0\u5B8C\u6210\u540E\uFF0C\u8DEF\u7531\u5217\u8868\u663E\u793A\u5982\u4E0B\uFF1A

![\u914D\u7F6E\u8DEF\u7531-\u5217\u8868](/img/ai/mcp-quick-start_docker/zh/add-route-list.png)

#### 3. \u914D\u7F6E MCP Server \u63D2\u4EF6

1. \u70B9\u51FB\u65B0\u521B\u5EFA\u7684\u8DEF\u7531\u53F3\u4FA7\u7684\u201C\u7B56\u7565\u201D\u94FE\u63A5\u8FDB\u5165\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\u3002
2. \u627E\u5230\u201CMCP \u670D\u52A1\u5668\u201D\u63D2\u4EF6\uFF0C\u5E76\u70B9\u51FB\u5176\u4E0B\u65B9\u7684\u914D\u7F6E\u6309\u94AE
3. \u5C06\u201C\u5F00\u542F\u72B6\u6001\u201D\u5207\u6362\u81F3\u7EFF\u8272\u7684\u5F00\u3002
4. \u5C06\u4E0B\u53D1\u914D\u7F6E\u90E8\u5206\u5207\u6362\u5230 YAML \u89C6\u56FE\uFF0C\u5E76\u586B\u5165\u4EE5\u4E0B\u914D\u7F6E\u3002
5. \u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u4FDD\u5B58\u3002

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

<br/>

![\u914D\u7F6EMCP Server\u63D2\u4EF6](https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg)

## MCP Server \u4F7F\u7528

\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE Server\uFF0C\u672C\u6587\u4EE5 [Cherry Studio](https://cherry-ai.com/) \u4E3A\u4F8B\u3002

### 1. \u6DFB\u52A0 MCP \u670D\u52A1\u5668

\u6309\u7167\u4EE5\u4E0B\u8BF4\u660E\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684 MCP \u670D\u52A1\u5668\u6307\u5411\u6211\u4EEC\u521A\u521A\u914D\u7F6E\u7684\u8DEF\u7531\uFF1A

1. \u540D\u79F0\uFF1A\u53EF\u4EE5\u4EFB\u610F\u586B\u5199
2. \u7C7B\u578B\uFF1A\`\u670D\u52A1\u5668\u53D1\u9001\u4E8B\u4EF6\uFF08sse\uFF09\`
3. URL\uFF1A\`http://localhost:8080/user/sse\`

![\u914D\u7F6EMCP Server\u63D2\u4EF6-1](/img/ai/mcp-quick-start_docker/zh/cherry-studio-add-mcp-1.png)

![\u914D\u7F6EMCP Server\u63D2\u4EF6-2](/img/ai/mcp-quick-start_docker/zh/cherry-studio-add-mcp-2.png)

### 2. \u4F7F\u7528 MCP \u670D\u52A1

\u5728 Cherry Studio \u4E2D\uFF0C\u8981\u5728\u5BF9\u8BDD\u4E2D\u4F7F\u7528 MCP \u670D\u52A1\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u6FC0\u6D3B\u5B83\u3002

1. \u5207\u6362\u5230\u201C\u52A9\u624B\u201D\u9875\u9762
2. \u70B9\u51FB\u53F3\u4FA7\u8F93\u5165\u6846\u4E0B\u65B9\u7684\u201CMCP \u670D\u52A1\u5668\u201D\u6309\u94AE
3. \u5728\u5F39\u51FA\u7684 MCP \u670D\u52A1\u5668\u5217\u8868\u4E2D\u70B9\u51FB\u6211\u4EEC\u521A\u521A\u6DFB\u52A0\u7684\u201CGetRandomUser\u201D\u670D\u52A1\uFF0C\u4F7F\u5176\u53D8\u7EFF\u4E14\u53F3\u4FA7\u51FA\u73B0\u201C\u221A\u201D\u6807\u8BC6

![\u6FC0\u6D3BMCP Server](/img/ai/mcp-quick-start_docker/zh/activate-mcp-server.png)

\u73B0\u5728\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u5BF9\u8BDD\u4E2D\u4F7F\u7528\u8FD9\u4E2A MCP \u670D\u52A1\u670D\u52A1\u4E86\u3002

\u5728\u8F93\u5165\u6846\u4E2D\u8F93\u5165\u201C\u5E2E\u6211\u751F\u6210\u4E00\u6BB5\u7528\u6237\u4FE1\u606F\u201D\u3002\u5C31\u53EF\u4EE5\u770B\u5230 Cherry Studio \u5229\u7528\u5927\u6A21\u578B\u5E76\u901A\u8FC7 MCP Server \u6765\u4E3A\u6211\u4EEC\u751F\u6210\u4E86\u4E00\u6BB5\u968F\u673A\u7684\u7528\u6237\u4FE1\u606F\u3002

![\u4F7F\u7528MCP Server](/img/ai/mcp-quick-start_docker/zh/use-mcp-server.png)

## \u5E38\u89C1\u95EE\u9898

### 1. higress-config \u4E2D\u7684 mcpServer \u914D\u7F6E\u4E0E\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u8DEF\u7531\u7B56\u7565\u4E2D\u7684 MCP \u670D\u52A1\u5668\u63D2\u4EF6\u4E4B\u95F4\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F

\`higress-config\` \u4E2D\u7684 \`mcpServer\` \u914D\u7F6E\u662F\u7528\u6765\u8FDB\u884C SSE \u6570\u636E\u6D41\u63A8\u9001\u7684\u3002\u6240\u4EE5\u5B83\u91CC\u9762\u7684 \`matchList\` \u4E2D\u7684\u5339\u914D\u89C4\u5219\u5FC5\u987B\u8981\u8986\u76D6\u6240\u6709\u4F7F\u7528 SSE \u534F\u8BAE\u7684 MCP \u670D\u52A1\u5668\u8DEF\u5F84\u3002

\u8DEF\u7531\u914D\u7F6E\u662F\u7528\u6765\u8BA9\u8BF7\u6C42\u80FD\u591F\u6B63\u5E38\u88AB\u8F6C\u53D1\u5230\u76EE\u6807 REST API \u7684\u3002\u6240\u4EE5\u8DEF\u7531\u6240\u6307\u5411\u7684\u76EE\u6807\u670D\u52A1\u5FC5\u987B\u662F MCP \u670D\u52A1\u6240\u5BF9\u5E94\u7684 REST API\u3002

\u8DEF\u7531\u7B56\u7565\u914D\u7F6E\u4E2D\u7684 MCP \u670D\u52A1\u5668\u63D2\u4EF6\u914D\u7F6E\u6709\u4E24\u4E2A\u529F\u80FD\uFF0C\u4E00\u4E2A\u662F\u5411 MCP \u5BA2\u6237\u7AEF\uFF08\u4E5F\u5C31\u662F\u4F8B\u5B50\u4E2D\u7684 Cherry Studio\uFF09\u63D0\u4F9B MCP \u670D\u52A1\u6240\u652F\u6301\u7684\u5DE5\u5177\u65B9\u6CD5\u7684\u5143\u6570\u636E\uFF0C\u53E6\u4E00\u4E2A\u5219\u662F\u5728\u8F6C\u53D1\u8BF7\u6C42\u7684\u65F6\u5019\u5C06 MCP \u8BF7\u6C42\u8F6C\u6362\u6210\u76EE\u6807\u670D\u52A1\u53EF\u4EE5\u652F\u6301\u7684\u683C\u5F0F\uFF0C\u4E5F\u5C31\u662F \`requestTemplate\` \u90E8\u5206\u6240\u914D\u7F6E\u7684\u5185\u5BB9\u3002

### 2. \u662F\u5426\u53EF\u4EE5\u4E0D\u7528\u90E8\u7F72 Redis\uFF1F

\u7531\u4E8E MCP \u534F\u8BAE\u53D1\u8D77\u5DE5\u5177\u8C03\u7528\u548C\u63A8\u9001\u54CD\u5E94\u6240\u5BF9\u5E94\u7684\u662F\u4E0D\u540C\u7684\u8BF7\u6C42\uFF0C\u751A\u81F3\u5728\u96C6\u7FA4\u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u8FD9\u4E9B\u8BF7\u6C42\u53EF\u80FD\u4F1A\u7531\u96C6\u7FA4\u4E2D\u7684\u4E0D\u540C\u670D\u52A1\u5668\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5 Higress \u5F15\u5165\u4E86 Redis \u6765\u8FDB\u884C\u4F1A\u8BDD\u7BA1\u7406\uFF0C\u786E\u4FDD\u6240\u6709\u7684\u5DE5\u5177\u8C03\u7528\u90FD\u53EF\u4EE5\u5173\u8054\u5230\u6700\u521D\u5F00\u542F\u4F1A\u8BDD\u7684 SSE \u8BF7\u6C42\u3002

\u5982\u679C\u4E0D\u60F3\u7528 Redis \u7684\u8BDD\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4E00\u4E0B MCP \u534F\u8BAE\u4E2D\u65B0\u63A8\u51FA\u7684 Streamble HTTP \u901A\u4FE1\u65B9\u5F0F\u3002

### 3. \u5982\u4F55\u67E5\u770B\u65E5\u5FD7\uFF1F

Higress all-in-one \u5BB9\u5668\u7684\u6240\u6709\u65E5\u5FD7\u90FD\u4FDD\u5B58\u5728\u5BB9\u5668\u4E2D\u7684 \`/var/log/higress\` \u76EE\u5F55\u4E2D\u3002\u5927\u5BB6\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u5165\u5230\u5BB9\u5668\u4E2D\u8FDB\u884C\u67E5\u770B\u3002

\`\`\`bash
docker exec -it higress-ai bash
cd /var/log/higress
cat gateway.log
\`\`\`

## \u603B\u7ED3

\u901A\u8FC7 Higress \u7684 MCP Server \u529F\u80FD\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5DE5\u4F5C\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002

> \u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 [Higress Github Issue](https://github.com/alibaba/higress/issues) \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002
>
> \u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star [Higress Github Repo](https://github.com/alibaba/higress/)\u3002
`},r=function(){return s},t=function(){return[{depth:2,slug:"\u6982\u8FF0",text:"\u6982\u8FF0"},{depth:2,slug:"\u524D\u63D0\u6761\u4EF6",text:"\u524D\u63D0\u6761\u4EF6"},{depth:2,slug:"\u90E8\u7F72-higress",text:"\u90E8\u7F72 Higress"},{depth:2,slug:"\u90E8\u7F72-redis",text:"\u90E8\u7F72 Redis"},{depth:2,slug:"\u914D\u7F6E-mcp-server",text:"\u914D\u7F6E MCP Server"},{depth:3,slug:"configmap-\u5168\u5C40\u53C2\u6570\u914D\u7F6E",text:"ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E"},{depth:3,slug:"\u914D\u7F6E-rest-api-mcp-server",text:"\u914D\u7F6E REST API MCP Server"},{depth:4,slug:"1-\u6253\u5F00-higress-\u63A7\u5236\u53F0",text:"1. \u6253\u5F00 Higress \u63A7\u5236\u53F0"},{depth:4,slug:"1-\u6DFB\u52A0\u670D\u52A1\u6765\u6E90",text:"1. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90"},{depth:4,slug:"2-\u914D\u7F6E\u8DEF\u7531",text:"2. \u914D\u7F6E\u8DEF\u7531"},{depth:4,slug:"3-\u914D\u7F6E-mcp-server-\u63D2\u4EF6",text:"3. \u914D\u7F6E MCP Server \u63D2\u4EF6"},{depth:2,slug:"mcp-server-\u4F7F\u7528",text:"MCP Server \u4F7F\u7528"},{depth:3,slug:"1-\u6DFB\u52A0-mcp-\u670D\u52A1\u5668",text:"1. \u6DFB\u52A0 MCP \u670D\u52A1\u5668"},{depth:3,slug:"2-\u4F7F\u7528-mcp-\u670D\u52A1",text:"2. \u4F7F\u7528 MCP \u670D\u52A1"},{depth:2,slug:"\u5E38\u89C1\u95EE\u9898",text:"\u5E38\u89C1\u95EE\u9898"},{depth:3,slug:"1-higress-config-\u4E2D\u7684-mcpserver-\u914D\u7F6E\u4E0E\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u8DEF\u7531\u7B56\u7565\u4E2D\u7684-mcp-\u670D\u52A1\u5668\u63D2\u4EF6\u4E4B\u95F4\u662F\u4EC0\u4E48\u5173\u7CFB",text:"1. higress-config \u4E2D\u7684 mcpServer \u914D\u7F6E\u4E0E\u8DEF\u7531\u914D\u7F6E\u4EE5\u53CA\u8DEF\u7531\u7B56\u7565\u4E2D\u7684 MCP \u670D\u52A1\u5668\u63D2\u4EF6\u4E4B\u95F4\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F"},{depth:3,slug:"2-\u662F\u5426\u53EF\u4EE5\u4E0D\u7528\u90E8\u7F72-redis",text:"2. \u662F\u5426\u53EF\u4EE5\u4E0D\u7528\u90E8\u7F72 Redis\uFF1F"},{depth:3,slug:"3-\u5982\u4F55\u67E5\u770B\u65E5\u5FD7",text:"3. \u5982\u4F55\u67E5\u770B\u65E5\u5FD7\uFF1F"},{depth:2,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"}]},e=d((m,u,F)=>{const{layout:C,...p}=n;return p.file=a,p.url=i,o`${v()}${E(s)}`})});export{e as Content,h as __tla,r as compiledContent,e as default,a as file,n as frontmatter,t as getHeadings,l as rawContent,i as url};
