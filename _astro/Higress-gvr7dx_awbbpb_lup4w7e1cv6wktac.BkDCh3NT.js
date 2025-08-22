import{c as r,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as o,m as y,u as v,__tla as E}from"./constant.C1QLXgsI.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let a,t,e,n,c,l,i,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<p>\u4F5C\u8005\uFF1A\u5B50\u8475</p>
<p>Naocs 3.0 \u4E2D\u5DF2\u7ECF\u652F\u6301\u548CHigress\u914D\u5408\u4F7F\u7528\u5B9E\u73B0\u5B58\u91CFHttp\u8F6C\u5316\u4E3AMCP\u670D\u52A1\uFF0C3.0.1 \u53CA\u4EE5\u4E0A\u7248\u672C\u5728\u652F\u6301\u5B58\u91CF\u8F6C\u5316\u7684\u57FA\u7840\u4E0A\u540C\u65F6\u652F\u6301\u540C\u6B65Nacos\u4E2D\u5DF2\u7ECF\u6CE8\u518C\u7684\u539F\u751F\u7684MCP\u670D\u52A1\uFF0C\u5E76\u5728Higress\u4E0A\u8FDB\u884C\u66B4\u9732\uFF0C\u5B8C\u6210\u4E86\u5BF9\u6240\u6709Remote Server\u7C7B\u578B\u7684\u4EE3\u7406\u8BBF\u95EE\u652F\u6301\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01cIKoQq1OJK3C0Z7wW_!!6000000001684-2-tps-1113-369.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u901A\u8FC7\u7ED3\u5408 Spring AI Alibaba\uFF0CFastMCP \u7B49\u6846\u67B6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5E94\u7528\u81EA\u52A8\u6CE8\u518C\u5230Nacos\u4E2D\uFF0C\u5E76\u901A\u8FC7 Higress \u81EA\u52A8\u5C06\u6CE8\u518C\u7684\u5E94\u7528\u5BF9\u5916\u66B4\u9732\u7ED9Client\u4FA7\u8BBF\u95EE\u3002\u6B64\u6587\u6863\u4ECE0\u5230\u4E00\u5B8C\u6210Higress+Nacos\u914D\u5408\u5B9E\u73B0REST API\u8F6CMCP\u548C\u900F\u660E\u4EE3\u7406\u66B4\u9732\u6807\u51C6 MCP \u670D\u52A1\u3002</p>
<h2 id="\u73AF\u5883\u51C6\u5907">\u73AF\u5883\u51C6\u5907</h2>
<h3 id="\u521B\u5EFA\u72EC\u7ACB\u7684docker\u7F51\u7EDC">\u521B\u5EFA\u72EC\u7ACB\u7684docker\u7F51\u7EDC</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">docker network create mcp</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker network create mcp"><div></div></button></div></figure></div>
<h3 id="higress-\u90E8\u7F72">Higress \u90E8\u7F72</h3>
<p>\u4F7F\u7528docker\u90E8\u7F72Higress</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> \${PWD}</span><span style="--0:#9ECBFF">:/data</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8001:8001</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8080:8080</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8443:8443</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--network</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mcp</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run -d --rm --name higress-ai -v \${PWD}:/data \\\x7F        -p 8001:8001 -p 8080:8080 -p 8443:8443 --network mcp \\\x7F        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest"><div></div></button></div></figure></div>
<p>\u90E8\u7F72redis</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-redis</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">6379:6379</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--network</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mcp</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run -d --rm --name higress-redis -p 6379:6379 --network mcp higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3"><div></div></button></div></figure></div>
<p>\u914D\u7F6EMCP Server\u7684\u5168\u5C40\u53C2\u6570</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">vi</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./configmaps/higress-config.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="vi ./configmaps/higress-config.yaml"><div></div></button></div></figure></div>
<p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">apiVersion:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">metadata:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">name:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">namespace:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">creationTimestamp:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"2000-01-01T00:00:00Z"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">resourceVersion:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"1"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">data:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">higress:</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#B392F0">-</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">mcpServer:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">sse_path_suffix:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/sse</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">enable:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">          </span><span style="--0:#99A0A6"># \u542F\u7528 MCP Server</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">redis:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">address:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-redis:6379</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Redis\u670D\u52A1\u5730\u5740\u3002\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u672C\u673A\u7684\u5185\u7F51 IP\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">downstream:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u4EE5\u4E0B\u914D\u7F6E\u65E0\u9700\u4FEE\u6539\uFF0C\u6B64\u5904\u7701\u7565</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system\x7F  creationTimestamp: &#x22;2000-01-01T00:00:00Z&#x22;\x7F  resourceVersion: &#x22;1&#x22;\x7Fdata:\x7F  higress: |-\x7F    mcpServer:\x7F      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00\x7F      enable: true          # \u542F\u7528 MCP Server\x7F      redis:\x7F        address: higress-redis:6379 # Redis\u670D\u52A1\u5730\u5740\u3002\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u672C\u673A\u7684\u5185\u7F51 IP\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1\x7F    downstream:"><div></div></button></div></figure></div>
<blockquote>
<p><font style="color:rgb(53, 56, 65);">\u53D7 Docker \u8FD0\u884C\u73AF\u5883\u7684\u9650\u5236\uFF0C\u975E Linux \u64CD\u4F5C\u7CFB\u7EDF\u5728\u4FEE\u6539 yaml \u6587\u4EF6\u4E4B\u540E\uFF0C\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u8BA9\u65B0\u7684\u914D\u7F6E\u751F\u6548\u3002\u5982\u679C\u5E0C\u671B\u7ACB\u5373\u751F\u6548\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u91CD\u542F higress-ai \u5BB9\u5668\uFF1A</font></p>
</blockquote>
<h3 id="nacos\u90E8\u7F72">Nacos\u90E8\u7F72</h3>
<p>\u901A\u8FC7docker\u76F4\u63A5\u90E8\u7F72</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">nacos</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">MODE=standalone</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">NACOS_AUTH_TOKEN=your_token_base64</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">NACOS_AUTH_IDENTITY_KEY=your_key</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">NACOS_AUTH_IDENTITY_VALUE=your_value</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8081:8080</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">8848:8848</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-p</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">9848:9848</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">--network</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mcp</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">nacos-registry.cn-hangzhou.cr.aliyuncs.com/nacos/nacos-server:v3.0.1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker run --name nacos \\\x7F    -e MODE=standalone \\\x7F    -e NACOS_AUTH_TOKEN=your_token_base64 \\\x7F    -e NACOS_AUTH_IDENTITY_KEY=your_key \\\x7F    -e NACOS_AUTH_IDENTITY_VALUE=your_value \\\x7F    -p 8081:8080 \\\x7F    -p 8848:8848 \\\x7F    -p 9848:9848 \\\x7F    --network mcp \\\x7F    -d nacos-registry.cn-hangzhou.cr.aliyuncs.com/nacos/nacos-server:v3.0.1"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6Ehigress-\u8FDE\u63A5\u5230nacos-mcp-registry">\u914D\u7F6EHigress \u8FDE\u63A5\u5230Nacos mcp registry</h3>
<p>\u5728Higress \u670D\u52A1\u6765\u6E90\u4E2D\u589E\u52A0Nacos3.x\u670D\u52A1\u6765\u6E90</p>
<p>\u6253\u5F00 higress \u63A7\u5236\u53F0\uFF0C\u90E8\u7F72\u4E3B\u673A\u5730\u5740:8001, \u70B9\u51FB\u670D\u52A1\u6765\u6E90\u6DFB\u52A0\uFF0C\u5E76\u6DFB\u52A0nacos3.x \u670D\u52A1\u6765\u6E90\uFF0C\u5730\u5740\u586B\u5199 nacos</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01Y4aeLJ1PVybjtamiq_!!6000000001847-2-tps-2425-1167.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u670D\u52A1\u90E8\u7F72\u548C\u9A8C\u8BC1">\u670D\u52A1\u90E8\u7F72\u548C\u9A8C\u8BC1</h2>
<h3 id="rest-api-\u8F6C-mcp">REST API \u8F6C MCP</h3>
<p>\u8FDB\u5165nacos\u63A7\u5236\u53F0\uFF0C\u8BBF\u95EE \u90E8\u7F72\u4E3B\u673Aip:8081,\u70B9\u51FB mcp regsitry \u5E76\u521B\u5EFA mcp server</p>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01Bs8xDj29oGkl8uugi_!!6000000008114-2-tps-2426-1165.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN017yHGx51miYeTFZnlh_!!6000000004988-2-tps-2433-845.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u6DFB\u52A0 TOOL\uFF0CTool \u540D\u79F0\u4E3A get_weather, \u53C2\u6570\u4E3A city\uFF0C \u534F\u8BAE\u8F6C\u5316\u914D\u7F6E\u4E3A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"requestTemplate"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"url"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"/v3/weather/weatherInfo?key=yourkey",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"argsToUrlParam"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span><span style="--0:#9ECBFF">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"method"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;requestTemplate&#x22;: {\x7F    &#x22;url&#x22;: &#x22;/v3/weather/weatherInfo?key=yourkey&#x22;,\x7F    &#x22;argsToUrlParam&#x22;: true,\x7F    &#x22;method&#x22;: &#x22;GET&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<p>\u5E76\u53D1\u5E03\u4E3A\u6700\u65B0\u7248\u672C, \u901A\u8FC7 sse ednpoint \u76F4\u63A5\u8BBF\u95EE <a href="http://%E5%AE%BF%E4%B8%BB%E6%9C%BAhost:8080/mcp/amap/sse" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://\u5BBF\u4E3B\u673Ahost:8080/mcp/amap/sse</a></p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01mcEpUo21LrG36cHeF_!!6000000006969-2-tps-2419-935.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u5728 3.0.0 \u57FA\u7840\u4E0A\uFF0C3.0.1 \u652F\u6301\u5728\u6A21\u7248\u4E2D\u5F15\u7528 Nacos \u914D\u7F6E\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\u5B9E\u73B0\u5BF9\u6A21\u7248\u7684\u52A8\u6001\u63A7\u5236\u3002</p>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01cA54CN20EF3Xxlwlh_!!6000000006817-2-tps-1088-423.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u901A\u8FC7Nacos \u52A8\u6001\u914D\u7F6E\u80FD\u529B\uFF0C\u52A8\u6001\u66F4\u65B0\u6A21\u7248\u4E2D\u7684\u503C\uFF0C\u52A8\u6001\u8F6E\u8F6C\u540E\u7AEF\u8BBF\u95EEtoken\uFF0C\u52A8\u6001\u63A7\u5236\u7F51\u5173\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\u7684\u53C2\u6570\u3002</p>
<p>\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6 amap_key \uFF0C \u5206\u7EC4\u4E3Adata\u7684\u914D\u7F6E\uFF0C\u914D\u7F6E\u5185\u5BB9\u4E3A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"data"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your_key"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;data&#x22;: &#x22;your_key&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u5E76\u5728\u6A21\u7248\u4E2D\u76F4\u63A5\u8FDB\u884C\u5F15\u7528</p>
<p><img src="https://img.alicdn.com/imgextra/i3/O1CN01xEDznl1qnpfzwfUjj_!!6000000005541-2-tps-1686-526.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u4FDD\u5B58\u4E3A\u6700\u65B0\u7248\u672C\uFF0C\u901A\u8FC7\u4E0A\u9762\u7684endpoint\u8FDB\u884C\u8BBF\u95EE</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN019dq4WM23F6eQxLaka_!!6000000007225-2-tps-2415-858.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u8BBF\u95EE\u6210\u529F\uFF0C\u4FEE\u6539\u914D\u7F6E\u4E2D\u7684key\u7684\u503C\u4E3A\u975E\u6CD5\u503C</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01STKDe11ood8Ph3weB_!!6000000005272-2-tps-2425-537.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u8BBF\u95EE\u5931\u8D25</p>
<h3 id="\u901A\u8FC7-spring-ai-alibaba-\u5B9E\u73B0\u81EA\u52A8\u6CE8\u518C\u548C\u81EA\u52A8\u66B4\u9732\u5230-higress">\u901A\u8FC7 Spring AI Alibaba \u5B9E\u73B0\u81EA\u52A8\u6CE8\u518C\u548C\u81EA\u52A8\u66B4\u9732\u5230 Higress</h3>
<p>\u514B\u9686 sping ai alibaba examples \u4ED3\u5E93</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clone</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/springaialibaba/spring-ai-alibaba-examples.git</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git clone https://github.com/springaialibaba/spring-ai-alibaba-examples.git"><div></div></button></div></figure></div>
<p>\u8FDB\u5165nacos mcp example \u76EE\u5F55</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./spring-ai-alibaba-examples/spring-ai-alibaba-mcp-example/spring-ai-alibaba-mcp-nacos-example/server/mcp-nacos-registry-example</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd ./spring-ai-alibaba-examples/spring-ai-alibaba-mcp-example/spring-ai-alibaba-mcp-nacos-example/server/mcp-nacos-registry-example"><div></div></button></div></figure></div>
<p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4E2Dnacos\u7684\u7528\u6237\u540D\u5BC6\u7801\u4E3A\u81EA\u5DF1\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">vi</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./src/main/resources/application.yml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="vi ./src/main/resources/application.yml"><div></div></button></div></figure></div>
<p>\u542F\u52A8\u9879\u76EE</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">mvn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">spring-boot:run</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mvn spring-boot:run"><div></div></button></div></figure></div>
<p>\u542F\u52A8\u4E4B\u540E\uFF0C\u5728nacos\u4E2D\u67E5\u770B\u6CE8\u518C\u7684mcp\u670D\u52A1</p>
<p><img src="https://img.alicdn.com/imgextra/i2/O1CN01Fb2RPN1a35OnRHHPN_!!6000000003273-2-tps-2551-746.png" alt="" referrerpolicy="no-referrer"></p>
<p>higress \u4F1A\u81EA\u52A8\u53D1\u73B0\u6CE8\u518C\u7684mcp\u670D\u52A1\u5E76\u4EA7\u751F\u900F\u660E\u4EE3\u7406\u89C4\u5219\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7higress\u8BBF\u95EEmcp\u670D\u52A1\u3002\u901A\u8FC7inspector\u5E94\u7528\u8C03\u8BD5\u901A\u8FC7higress\u66B4\u9732\u7684 mcp \u670D\u52A1</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01yqKB7d2A9nMvkI9zS_!!6000000008161-2-tps-2552-1324.png" alt="" referrerpolicy="no-referrer"></p>
<h2 id="\u603B\u7ED3">\u603B\u7ED3</h2>
<p>\u5728\u65B0\u7248\u672C\u7684 higress \u548C nacos \u4E2D\uFF0Chigress \u901A\u8FC7 nacos \u505A\u7EDF\u4E00\u53D1\u73B0\u5B9E\u73B0\u5B58\u91CF\u5E94\u7528\u7684\u96F6\u6539\u9020\u9002\u914DMCP\u534F\u8BAE\uFF0C\u5E76\u4E14\u80FD\u591F\u5B9E\u73B0 MCP \u670D\u52A1\u7684\u81EA\u52A8\u4EE3\u7406\uFF0CHigress \u4F5C\u4E3A MCP \u7F51\u5173\u5BF9\u5916\u63D0\u4F9B\u7EDF\u4E00\u7684MCP\u66B4\u9732\uFF0CNacos\u4F5C\u4E3AMCP Regsitry \u5BF9MCP \u670D\u52A1\u505A\u7EDF\u4E00\u7BA1\u7406\uFF0C\u5BF9\u5916\u63D0\u4F9B\u7EDF\u4E00\u7684\u670D\u52A1\u53D1\u73B0\uFF0C\u52A8\u6001\u53D8\u66F4\u7B49\u80FD\u529B\u3002</p>`,n={title:"\u624B\u628A\u624B\u5E26\u4F60\u73A9\u8F6C\u57FA\u4E8E Nacos + Higress \u7684 MCP \u5F00\u53D1\u65B0\u8303\u5F0F",description:"\u624B\u628A\u624B\u5E26\u4F60\u73A9\u8F6C\u57FA\u4E8E Nacos + Higress \u7684 MCP \u5F00\u53D1\u65B0\u8303\u5F0F",date:"2025-07-22",category:"article",keywords:["Higress"],authors:"CH3CHO"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_lup4w7e1cv6wktac.md",i=void 0,l=function(){return`
\u4F5C\u8005\uFF1A\u5B50\u8475

Naocs 3.0 \u4E2D\u5DF2\u7ECF\u652F\u6301\u548CHigress\u914D\u5408\u4F7F\u7528\u5B9E\u73B0\u5B58\u91CFHttp\u8F6C\u5316\u4E3AMCP\u670D\u52A1\uFF0C3.0.1 \u53CA\u4EE5\u4E0A\u7248\u672C\u5728\u652F\u6301\u5B58\u91CF\u8F6C\u5316\u7684\u57FA\u7840\u4E0A\u540C\u65F6\u652F\u6301\u540C\u6B65Nacos\u4E2D\u5DF2\u7ECF\u6CE8\u518C\u7684\u539F\u751F\u7684MCP\u670D\u52A1\uFF0C\u5E76\u5728Higress\u4E0A\u8FDB\u884C\u66B4\u9732\uFF0C\u5B8C\u6210\u4E86\u5BF9\u6240\u6709Remote Server\u7C7B\u578B\u7684\u4EE3\u7406\u8BBF\u95EE\u652F\u6301\u3002

![](https://img.alicdn.com/imgextra/i4/O1CN01cIKoQq1OJK3C0Z7wW_!!6000000001684-2-tps-1113-369.png)

\u901A\u8FC7\u7ED3\u5408 Spring AI Alibaba\uFF0CFastMCP \u7B49\u6846\u67B6\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5E94\u7528\u81EA\u52A8\u6CE8\u518C\u5230Nacos\u4E2D\uFF0C\u5E76\u901A\u8FC7 Higress \u81EA\u52A8\u5C06\u6CE8\u518C\u7684\u5E94\u7528\u5BF9\u5916\u66B4\u9732\u7ED9Client\u4FA7\u8BBF\u95EE\u3002\u6B64\u6587\u6863\u4ECE0\u5230\u4E00\u5B8C\u6210Higress+Nacos\u914D\u5408\u5B9E\u73B0REST API\u8F6CMCP\u548C\u900F\u660E\u4EE3\u7406\u66B4\u9732\u6807\u51C6 MCP \u670D\u52A1\u3002

## \u73AF\u5883\u51C6\u5907
### \u521B\u5EFA\u72EC\u7ACB\u7684docker\u7F51\u7EDC
\`\`\`yaml
docker network create mcp
\`\`\`

### Higress \u90E8\u7F72
\u4F7F\u7528docker\u90E8\u7F72Higress

\`\`\`shell
docker run -d --rm --name higress-ai -v \${PWD}:/data \\
        -p 8001:8001 -p 8080:8080 -p 8443:8443 --network mcp \\
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
\`\`\`

\u90E8\u7F72redis

\`\`\`shell
docker run -d --rm --name higress-redis -p 6379:6379 --network mcp higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3
\`\`\`

\u914D\u7F6EMCP Server\u7684\u5168\u5C40\u53C2\u6570

\`\`\`shell
vi ./configmaps/higress-config.yaml
\`\`\`

\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6

\`\`\`shell
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
        address: higress-redis:6379 # Redis\u670D\u52A1\u5730\u5740\u3002\u8FD9\u91CC\u9700\u8981\u4F7F\u7528\u672C\u673A\u7684\u5185\u7F51 IP\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528 127.0.0.1
    downstream:
    # \u4EE5\u4E0B\u914D\u7F6E\u65E0\u9700\u4FEE\u6539\uFF0C\u6B64\u5904\u7701\u7565
\`\`\`

> <font style="color:rgb(53, 56, 65);">\u53D7 Docker \u8FD0\u884C\u73AF\u5883\u7684\u9650\u5236\uFF0C\u975E Linux \u64CD\u4F5C\u7CFB\u7EDF\u5728\u4FEE\u6539 yaml \u6587\u4EF6\u4E4B\u540E\uFF0C\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u624D\u80FD\u8BA9\u65B0\u7684\u914D\u7F6E\u751F\u6548\u3002\u5982\u679C\u5E0C\u671B\u7ACB\u5373\u751F\u6548\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u91CD\u542F higress-ai \u5BB9\u5668\uFF1A</font>
>

### Nacos\u90E8\u7F72
\u901A\u8FC7docker\u76F4\u63A5\u90E8\u7F72

\`\`\`shell
docker run --name nacos \\
    -e MODE=standalone \\
    -e NACOS_AUTH_TOKEN=your_token_base64 \\
    -e NACOS_AUTH_IDENTITY_KEY=your_key \\
    -e NACOS_AUTH_IDENTITY_VALUE=your_value \\
    -p 8081:8080 \\
    -p 8848:8848 \\
    -p 9848:9848 \\
    --network mcp \\
    -d nacos-registry.cn-hangzhou.cr.aliyuncs.com/nacos/nacos-server:v3.0.1
\`\`\`

### \u914D\u7F6EHigress \u8FDE\u63A5\u5230Nacos mcp registry
\u5728Higress \u670D\u52A1\u6765\u6E90\u4E2D\u589E\u52A0Nacos3.x\u670D\u52A1\u6765\u6E90

\u6253\u5F00 higress \u63A7\u5236\u53F0\uFF0C\u90E8\u7F72\u4E3B\u673A\u5730\u5740:8001, \u70B9\u51FB\u670D\u52A1\u6765\u6E90\u6DFB\u52A0\uFF0C\u5E76\u6DFB\u52A0nacos3.x \u670D\u52A1\u6765\u6E90\uFF0C\u5730\u5740\u586B\u5199 nacos

![](https://img.alicdn.com/imgextra/i2/O1CN01Y4aeLJ1PVybjtamiq_!!6000000001847-2-tps-2425-1167.png)

## \u670D\u52A1\u90E8\u7F72\u548C\u9A8C\u8BC1
### REST API \u8F6C MCP
\u8FDB\u5165nacos\u63A7\u5236\u53F0\uFF0C\u8BBF\u95EE \u90E8\u7F72\u4E3B\u673Aip:8081,\u70B9\u51FB mcp regsitry \u5E76\u521B\u5EFA mcp server

![](https://img.alicdn.com/imgextra/i3/O1CN01Bs8xDj29oGkl8uugi_!!6000000008114-2-tps-2426-1165.png)

![](https://img.alicdn.com/imgextra/i4/O1CN017yHGx51miYeTFZnlh_!!6000000004988-2-tps-2433-845.png)

\u6DFB\u52A0 TOOL\uFF0CTool \u540D\u79F0\u4E3A get_weather, \u53C2\u6570\u4E3A city\uFF0C \u534F\u8BAE\u8F6C\u5316\u914D\u7F6E\u4E3A

\`\`\`shell
{
  "requestTemplate": {
    "url": "/v3/weather/weatherInfo?key=yourkey",
    "argsToUrlParam": true,
    "method": "GET"
  }
}
\`\`\`

\u5E76\u53D1\u5E03\u4E3A\u6700\u65B0\u7248\u672C, \u901A\u8FC7 sse ednpoint \u76F4\u63A5\u8BBF\u95EE http://\u5BBF\u4E3B\u673Ahost:8080/mcp/amap/sse

![](https://img.alicdn.com/imgextra/i4/O1CN01mcEpUo21LrG36cHeF_!!6000000006969-2-tps-2419-935.png)

\u5728 3.0.0 \u57FA\u7840\u4E0A\uFF0C3.0.1 \u652F\u6301\u5728\u6A21\u7248\u4E2D\u5F15\u7528 Nacos \u914D\u7F6E\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u52A8\u6001\u4FEE\u6539\u914D\u7F6E\u5B9E\u73B0\u5BF9\u6A21\u7248\u7684\u52A8\u6001\u63A7\u5236\u3002

![](https://img.alicdn.com/imgextra/i3/O1CN01cA54CN20EF3Xxlwlh_!!6000000006817-2-tps-1088-423.png)

\u901A\u8FC7Nacos \u52A8\u6001\u914D\u7F6E\u80FD\u529B\uFF0C\u52A8\u6001\u66F4\u65B0\u6A21\u7248\u4E2D\u7684\u503C\uFF0C\u52A8\u6001\u8F6E\u8F6C\u540E\u7AEF\u8BBF\u95EEtoken\uFF0C\u52A8\u6001\u63A7\u5236\u7F51\u5173\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\u7684\u53C2\u6570\u3002

\u65B0\u5EFA\u914D\u7F6E\u6587\u4EF6 amap_key \uFF0C \u5206\u7EC4\u4E3Adata\u7684\u914D\u7F6E\uFF0C\u914D\u7F6E\u5185\u5BB9\u4E3A

\`\`\`json
{
  "data": "your_key"
}
\`\`\`

\u5E76\u5728\u6A21\u7248\u4E2D\u76F4\u63A5\u8FDB\u884C\u5F15\u7528

![](https://img.alicdn.com/imgextra/i3/O1CN01xEDznl1qnpfzwfUjj_!!6000000005541-2-tps-1686-526.png)

\u4FDD\u5B58\u4E3A\u6700\u65B0\u7248\u672C\uFF0C\u901A\u8FC7\u4E0A\u9762\u7684endpoint\u8FDB\u884C\u8BBF\u95EE

![](https://img.alicdn.com/imgextra/i4/O1CN019dq4WM23F6eQxLaka_!!6000000007225-2-tps-2415-858.png)

\u8BBF\u95EE\u6210\u529F\uFF0C\u4FEE\u6539\u914D\u7F6E\u4E2D\u7684key\u7684\u503C\u4E3A\u975E\u6CD5\u503C

![](https://img.alicdn.com/imgextra/i1/O1CN01STKDe11ood8Ph3weB_!!6000000005272-2-tps-2425-537.png)

\u8BBF\u95EE\u5931\u8D25

### \u901A\u8FC7 Spring AI Alibaba \u5B9E\u73B0\u81EA\u52A8\u6CE8\u518C\u548C\u81EA\u52A8\u66B4\u9732\u5230 Higress
\u514B\u9686 sping ai alibaba examples \u4ED3\u5E93

\`\`\`shell
git clone https://github.com/springaialibaba/spring-ai-alibaba-examples.git
\`\`\`

\u8FDB\u5165nacos mcp example \u76EE\u5F55

\`\`\`shell

cd ./spring-ai-alibaba-examples/spring-ai-alibaba-mcp-example/spring-ai-alibaba-mcp-nacos-example/server/mcp-nacos-registry-example
\`\`\`

\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u4E2Dnacos\u7684\u7528\u6237\u540D\u5BC6\u7801\u4E3A\u81EA\u5DF1\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801

\`\`\`shell
vi ./src/main/resources/application.yml
\`\`\`

\u542F\u52A8\u9879\u76EE

\`\`\`shell
mvn spring-boot:run
\`\`\`

\u542F\u52A8\u4E4B\u540E\uFF0C\u5728nacos\u4E2D\u67E5\u770B\u6CE8\u518C\u7684mcp\u670D\u52A1

![](https://img.alicdn.com/imgextra/i2/O1CN01Fb2RPN1a35OnRHHPN_!!6000000003273-2-tps-2551-746.png)

higress \u4F1A\u81EA\u52A8\u53D1\u73B0\u6CE8\u518C\u7684mcp\u670D\u52A1\u5E76\u4EA7\u751F\u900F\u660E\u4EE3\u7406\u89C4\u5219\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7higress\u8BBF\u95EEmcp\u670D\u52A1\u3002\u901A\u8FC7inspector\u5E94\u7528\u8C03\u8BD5\u901A\u8FC7higress\u66B4\u9732\u7684 mcp \u670D\u52A1

![](https://img.alicdn.com/imgextra/i1/O1CN01yqKB7d2A9nMvkI9zS_!!6000000008161-2-tps-2552-1324.png)

## \u603B\u7ED3
\u5728\u65B0\u7248\u672C\u7684 higress \u548C nacos \u4E2D\uFF0Chigress \u901A\u8FC7 nacos \u505A\u7EDF\u4E00\u53D1\u73B0\u5B9E\u73B0\u5B58\u91CF\u5E94\u7528\u7684\u96F6\u6539\u9020\u9002\u914DMCP\u534F\u8BAE\uFF0C\u5E76\u4E14\u80FD\u591F\u5B9E\u73B0 MCP \u670D\u52A1\u7684\u81EA\u52A8\u4EE3\u7406\uFF0CHigress \u4F5C\u4E3A MCP \u7F51\u5173\u5BF9\u5916\u63D0\u4F9B\u7EDF\u4E00\u7684MCP\u66B4\u9732\uFF0CNacos\u4F5C\u4E3AMCP Regsitry \u5BF9MCP \u670D\u52A1\u505A\u7EDF\u4E00\u7BA1\u7406\uFF0C\u5BF9\u5916\u63D0\u4F9B\u7EDF\u4E00\u7684\u670D\u52A1\u53D1\u73B0\uFF0C\u52A8\u6001\u53D8\u66F4\u7B49\u80FD\u529B\u3002


`},t=function(){return s},c=function(){return[{depth:2,slug:"\u73AF\u5883\u51C6\u5907",text:"\u73AF\u5883\u51C6\u5907"},{depth:3,slug:"\u521B\u5EFA\u72EC\u7ACB\u7684docker\u7F51\u7EDC",text:"\u521B\u5EFA\u72EC\u7ACB\u7684docker\u7F51\u7EDC"},{depth:3,slug:"higress-\u90E8\u7F72",text:"Higress \u90E8\u7F72"},{depth:3,slug:"nacos\u90E8\u7F72",text:"Nacos\u90E8\u7F72"},{depth:3,slug:"\u914D\u7F6Ehigress-\u8FDE\u63A5\u5230nacos-mcp-registry",text:"\u914D\u7F6EHigress \u8FDE\u63A5\u5230Nacos mcp registry"},{depth:2,slug:"\u670D\u52A1\u90E8\u7F72\u548C\u9A8C\u8BC1",text:"\u670D\u52A1\u90E8\u7F72\u548C\u9A8C\u8BC1"},{depth:3,slug:"rest-api-\u8F6C-mcp",text:"REST API \u8F6C MCP"},{depth:3,slug:"\u901A\u8FC7-spring-ai-alibaba-\u5B9E\u73B0\u81EA\u52A8\u6CE8\u518C\u548C\u81EA\u52A8\u66B4\u9732\u5230-higress",text:"\u901A\u8FC7 Spring AI Alibaba \u5B9E\u73B0\u81EA\u52A8\u6CE8\u518C\u548C\u81EA\u52A8\u66B4\u9732\u5230 Higress"},{depth:2,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"}]},a=r((F,h,u)=>{const{layout:f,...p}=n;return p.file=e,p.url=i,o`${y()}${v(s)}`})});export{a as Content,m as __tla,t as compiledContent,a as default,e as file,n as frontmatter,c as getHeadings,l as rawContent,i as url};
