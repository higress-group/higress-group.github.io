import{c,__tla as o}from"./astro-component.YcfuVWta.js";import{r,m as v,u as y,__tla as E}from"./constant.Cx6UCuye.js";import{__tla as u}from"./astro/assets-service.r1ocst81.js";let e,i,a,n,p,l,d,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">mcp-server</code>\u63D2\u4EF6\u63D0\u4F9B\u4E86\u57FA\u4E8E Model Context Protocol (MCP) \u7684 AI \u5DE5\u5177\u96C6\u6210\u80FD\u529B\u3002MCP \u662F\u4E00\u79CD\u4E13\u4E3A AI \u52A9\u624B\u8BBE\u8BA1\u7684\u534F\u8BAE\uFF0C\u5B83\u5B9A\u4E49\u4E86 AI \u6A21\u578B\u4E0E\u5916\u90E8\u5DE5\u5177\u548C\u8D44\u6E90\u4EA4\u4E92\u7684\u6807\u51C6\u65B9\u5F0F\u3002\u901A\u8FC7\u6B64\u63D2\u4EF6\uFF0C\u60A8\u53EF\u4EE5\uFF1A</p>
<ol>
<li>\u65E0\u9700\u7F16\u5199\u4EE3\u7801\uFF0C\u5C06\u73B0\u6709\u7684 REST API \u8F6C\u6362\u4E3A AI \u52A9\u624B\u53EF\u8C03\u7528\u7684\u5DE5\u5177</li>
<li>\u5229\u7528 Higress \u7F51\u5173\u63D0\u4F9B\u7684\u7EDF\u4E00\u8BA4\u8BC1\u3001\u9274\u6743\u3001\u9650\u6D41\u548C\u53EF\u89C2\u6D4B\u6027\u80FD\u529B</li>
<li>\u5FEB\u901F\u6784\u5EFA\u548C\u90E8\u7F72 AI \u5DE5\u5177\u548C\u670D\u52A1</li>
</ol>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u901A\u8FC7 Higress \u6258\u7BA1 MCP Server\uFF0C\u53EF\u4EE5\u5B9E\u73B0\uFF1A</p>
<ul>
<li>\u7EDF\u4E00\u7684\u8BA4\u8BC1\u548C\u9274\u6743\u673A\u5236\uFF0C\u786E\u4FDD AI \u5DE5\u5177\u8C03\u7528\u7684\u5B89\u5168\u6027</li>
<li>\u7CBE\u7EC6\u5316\u7684\u901F\u7387\u9650\u5236\uFF0C\u9632\u6B62\u6EE5\u7528\u548C\u8D44\u6E90\u8017\u5C3D</li>
<li>\u5B8C\u6574\u7684\u5BA1\u8BA1\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u6240\u6709\u5DE5\u5177\u8C03\u7528\u884C\u4E3A</li>
<li>\u4E30\u5BCC\u7684\u53EF\u89C2\u6D4B\u6027\uFF0C\u76D1\u63A7\u5DE5\u5177\u8C03\u7528\u7684\u6027\u80FD\u548C\u5065\u5EB7\u72B6\u51B5</li>
<li>\u7B80\u5316\u7684\u90E8\u7F72\u548C\u7BA1\u7406\uFF0C\u901A\u8FC7 Higress \u63D2\u4EF6\u673A\u5236\u5FEB\u901F\u6DFB\u52A0\u65B0\u7684 MCP Server</li>
</ul>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">30</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<h3 id="\u670D\u52A1\u5668\u914D\u7F6E">\u670D\u52A1\u5668\u914D\u7F6E</h3>


















































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">server.name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>MCP \u670D\u52A1\u5668\u7684\u540D\u79F0\u3002\u5982\u679C\u4F7F\u7528\u63D2\u4EF6\u5185\u7F6E\u7684 MCP \u670D\u52A1\u5668\uFF08\u5982 quark-search\uFF09\uFF0C\u53EA\u9700\u914D\u7F6E\u6B64\u5B57\u6BB5\u4E3A\u5BF9\u5E94\u7684\u540D\u79F0\uFF0C\u65E0\u9700\u914D\u7F6E tools \u5B57\u6BB5\u3002\u5982\u679C\u662F REST-to-MCP \u573A\u666F\uFF0C\u6B64\u5B57\u6BB5\u53EF\u4EE5\u586B\u5199\u4EFB\u610F\u503C\u3002</td></tr><tr><td><code dir="auto">server.type</code></td><td>string</td><td>\u9009\u586B</td><td>rest</td><td>MCP \u670D\u52A1\u5668\u7C7B\u578B\u3002\u53EF\u9009\u503C\uFF1A<code dir="auto">rest</code>\uFF08REST-to-MCP \u8F6C\u6362\uFF09\u3001<code dir="auto">mcp-proxy</code>\uFF08MCP \u4EE3\u7406\uFF09\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4E3A <code dir="auto">rest</code> \u7C7B\u578B\u3002</td></tr><tr><td><code dir="auto">server.config</code></td><td>object</td><td>\u9009\u586B</td><td>{}</td><td>\u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u5982 API \u5BC6\u94A5\u7B49</td></tr><tr><td><code dir="auto">server.mcpServerURL</code></td><td>string</td><td>\u5F53 <code dir="auto">server.type</code> \u4E3A <code dir="auto">mcp-proxy</code> \u65F6\u5FC5\u586B</td><td>-</td><td>\u540E\u7AEF MCP \u670D\u52A1\u5668\u7684 URL \u5730\u5740\u3002\u4EC5\u5728 <code dir="auto">mcp-proxy</code> \u7C7B\u578B\u65F6\u4F7F\u7528\u3002\u652F\u6301\u5B8C\u6574 URL\uFF08\u5982 <code dir="auto">http://example.com/mcp</code>\uFF09\u6216\u8DEF\u5F84\uFF08\u5982 <code dir="auto">/mcp</code>\uFF0C\u5C06\u4F7F\u7528\u8DEF\u7531\u96C6\u7FA4\u7684\u57FA\u7840 URL\uFF09\u3002</td></tr><tr><td><code dir="auto">server.timeout</code></td><td>integer</td><td>\u9009\u586B</td><td>5000</td><td>\u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\u3002\u9002\u7528\u4E8E <code dir="auto">mcp-proxy</code> \u7C7B\u578B\u3002</td></tr><tr><td><code dir="auto">server.transport</code></td><td>string</td><td>\u5F53 <code dir="auto">server.type</code> \u4E3A <code dir="auto">mcp-proxy</code> \u65F6\u5FC5\u586B</td><td>-</td><td>\u4F20\u8F93\u534F\u8BAE\u7C7B\u578B\u3002\u53EF\u9009\u503C\uFF1A<code dir="auto">http</code>\uFF08StreamableHTTP\uFF09\u3001<code dir="auto">sse</code>\uFF08Server-Sent Events\uFF09\u3002</td></tr><tr><td><code dir="auto">server.passthroughAuthHeader</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u662F\u5426\u900F\u4F20 Authorization \u8BF7\u6C42\u5934\u3002\u5F53\u8BBE\u7F6E\u4E3A <code dir="auto">true</code> \u65F6\uFF0C\u5373\u4F7F\u6CA1\u6709\u914D\u7F6E\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u7684\u5B89\u5168\u8BA4\u8BC1\uFF08<code dir="auto">defaultDownstreamSecurity</code> \u6216\u5DE5\u5177\u7EA7 <code dir="auto">security</code>\uFF09\uFF0C\u4E5F\u4F1A\u5C06\u5BA2\u6237\u7AEF\u7684 <code dir="auto">Authorization</code> \u8BF7\u6C42\u5934\u900F\u4F20\u5230\u540E\u7AEF\u3002\u9ED8\u8BA4\u4E3A <code dir="auto">false</code>\uFF0C\u5373\u5728\u6CA1\u6709\u660E\u786E\u914D\u7F6E\u5B89\u5168\u8BA4\u8BC1\u65F6\u4F1A\u79FB\u9664 <code dir="auto">Authorization</code> \u8BF7\u6C42\u5934\uFF0C\u9632\u6B62\u5BA2\u6237\u7AEF\u51ED\u8BC1\u88AB\u9519\u8BEF\u5730\u4F20\u9012\u5230\u540E\u7AEF\u3002\u6B64\u5B57\u6BB5\u9002\u7528\u4E8E\u9700\u8981\u76F4\u63A5\u900F\u4F20\u539F\u59CB\u8BA4\u8BC1\u4FE1\u606F\u7684\u573A\u666F\u3002</td></tr><tr><td><code dir="auto">server.securitySchemes</code></td><td>array of object</td><td>\u9009\u586B</td><td>-</td><td>\u5B9A\u4E49\u53EF\u91CD\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\uFF0C\u4F9B\u5DE5\u5177\u5F15\u7528\u3002\u8BE6\u89C1\u201D\u8BA4\u8BC1\u4E0E\u5B89\u5168\u201D\u7AE0\u8282\u3002</td></tr><tr><td><code dir="auto">server.defaultDownstreamSecurity</code></td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u8BA4\u8BC1\u914D\u7F6E\uFF0C\u7528\u4E8E\u6240\u6709 tools/list \u548C tools/call \u8BF7\u6C42\u3002\u53EF\u88AB\u5DE5\u5177\u7EA7\u522B\u7684 <code dir="auto">security</code> \u914D\u7F6E\u8986\u76D6\u3002\u652F\u6301 <code dir="auto">id</code>\uFF08\u5F15\u7528 securitySchemes\uFF09\u548C <code dir="auto">passthrough</code>\uFF08\u900F\u4F20\u6807\u5FD7\uFF09\u5B57\u6BB5\u3002</td></tr><tr><td><code dir="auto">server.defaultUpstreamSecurity</code></td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1\u914D\u7F6E\uFF0C\u7528\u4E8E\u6240\u6709\u540E\u7AEF\u8BF7\u6C42\u3002\u53EF\u88AB\u5DE5\u5177\u7EA7\u522B\u7684 <code dir="auto">requestTemplate.security</code> \u914D\u7F6E\u8986\u76D6\u3002\u652F\u6301 <code dir="auto">id</code>\uFF08\u5F15\u7528 securitySchemes\uFF09\u548C <code dir="auto">credential</code>\uFF08\u8986\u76D6\u9ED8\u8BA4\u51ED\u8BC1\uFF09\u5B57\u6BB5\u3002</td></tr></tbody></table>
<h3 id="\u5141\u8BB8\u7684\u5DE5\u5177\u914D\u7F6E">\u5141\u8BB8\u7684\u5DE5\u5177\u914D\u7F6E</h3>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">allowTools</code></td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u5141\u8BB8\u8C03\u7528\u7684\u5DE5\u5177\u5217\u8868\u3002\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219\u5141\u8BB8\u6240\u6709\u5DE5\u5177</td></tr></tbody></table>
<h4 id="\u52A8\u6001\u5DE5\u5177\u6743\u9650\u63A7\u5236">\u52A8\u6001\u5DE5\u5177\u6743\u9650\u63A7\u5236</h4>
<p>\u9664\u4E86\u5728\u914D\u7F6E\u4E2D\u9759\u6001\u5B9A\u4E49 <code dir="auto">allowTools</code> \u5916\uFF0C\u8FD8\u652F\u6301\u901A\u8FC7 HTTP \u8BF7\u6C42\u5934 <code dir="auto">x-envoy-allow-mcp-tools</code> \u52A8\u6001\u63A7\u5236\u5DE5\u5177\u8BBF\u95EE\u6743\u9650\u3002\u8FD9\u4F7F\u5F97\u524D\u7F6E\u63D2\u4EF6\uFF08\u5982\u8BA4\u8BC1\u3001\u9274\u6743\u63D2\u4EF6\uFF09\u53EF\u4EE5\u6839\u636E\u7528\u6237\u8EAB\u4EFD\u6216\u5176\u4ED6\u6761\u4EF6\u52A8\u6001\u8BBE\u7F6E\u5141\u8BB8\u7684\u5DE5\u5177\u5217\u8868\u3002</p>
<p><strong>Header \u683C\u5F0F</strong>\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-allow-mcp-tools: tool1,tool2,tool3</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="x-envoy-allow-mcp-tools: tool1,tool2,tool3"><div></div></button></div></figure></div>
<p><strong>\u6743\u9650\u63A7\u5236\u903B\u8F91</strong>\uFF1A</p>
<ol>
<li><strong>\u914D\u7F6E\u7EA7\u522B <code dir="auto">allowTools</code></strong>\uFF08\u9759\u6001\uFF09\uFF1A\u5728\u63D2\u4EF6\u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u57FA\u7840\u5DE5\u5177\u767D\u540D\u5355</li>
<li><strong>Header \u7EA7\u522B <code dir="auto">x-envoy-allow-mcp-tools</code></strong>\uFF08\u52A8\u6001\uFF09\uFF1A\u4ECE\u8BF7\u6C42\u5934\u4E2D\u8BFB\u53D6\u7684\u5DE5\u5177\u767D\u540D\u5355</li>
<li><strong>\u6700\u7EC8\u751F\u6548\u6743\u9650</strong>\uFF1A\u914D\u7F6E\u548C Header \u4E2D\u6307\u5B9A\u7684\u5DE5\u5177\u5217\u8868\u7684<strong>\u4EA4\u96C6</strong></li>
</ol>
<p><strong>Header \u503C\u7684\u8BED\u4E49</strong>\uFF1A</p>

























<table><thead><tr><th>Header \u72B6\u6001</th><th>\u884C\u4E3A</th></tr></thead><tbody><tr><td>Header \u4E0D\u5B58\u5728</td><td>\u6CA1\u6709\u989D\u5916\u9650\u5236\uFF0C\u4F7F\u7528\u914D\u7F6E\u4E2D\u7684 <code dir="auto">allowTools</code></td></tr><tr><td>Header \u4E3A\u7A7A\u5B57\u7B26\u4E32 <code dir="auto">""</code></td><td>\u6CA1\u6709\u989D\u5916\u9650\u5236\uFF0C\u4F7F\u7528\u914D\u7F6E\u4E2D\u7684 <code dir="auto">allowTools</code></td></tr><tr><td>Header \u4E3A\u7A7A\u767D\u5B57\u7B26\u4E32 <code dir="auto">"  ,  ,  "</code></td><td>\u7981\u6B62\u8BBF\u95EE\u6240\u6709\u5DE5\u5177\uFF08\u7A7A\u96C6\u5408\uFF09</td></tr><tr><td>Header \u6709\u503C <code dir="auto">"tool1,tool2"</code></td><td>\u4E0E\u914D\u7F6E\u7684 <code dir="auto">allowTools</code> \u53D6\u4EA4\u96C6</td></tr></tbody></table>
<p><strong>\u4F7F\u7528\u573A\u666F\u793A\u4F8B</strong>\uFF1A</p>
<ol>
<li>
<p><strong>\u57FA\u4E8E\u7528\u6237\u89D2\u8272\u7684\u6743\u9650\u63A7\u5236</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u914D\u7F6E\u4E2D\u5B9A\u4E49\u6240\u6709\u53EF\u7528\u5DE5\u5177</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allowTools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">get-user-info</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">update-user-info</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">delete-user-info</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">admin-operation</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u914D\u7F6E\u4E2D\u5B9A\u4E49\u6240\u6709\u53EF\u7528\u5DE5\u5177\x7FallowTools:\x7F- get-user-info\x7F- update-user-info\x7F- delete-user-info\x7F- admin-operation"><div></div></button></div></figure></div>
<p>\u524D\u7F6E\u8BA4\u8BC1\u63D2\u4EF6\u53EF\u4EE5\u6839\u636E\u7528\u6237\u89D2\u8272\u8BBE\u7F6E\u4E0D\u540C\u7684\u5DE5\u5177\u6743\u9650\uFF1A</p>
<ul>
<li>\u666E\u901A\u7528\u6237\uFF1A<code dir="auto">x-envoy-allow-mcp-tools: get-user-info</code></li>
<li>\u9AD8\u7EA7\u7528\u6237\uFF1A<code dir="auto">x-envoy-allow-mcp-tools: get-user-info,update-user-info</code></li>
<li>\u7BA1\u7406\u5458\uFF1A\u4E0D\u8BBE\u7F6E header\uFF08\u5141\u8BB8\u6240\u6709\u914D\u7F6E\u4E2D\u7684\u5DE5\u5177\uFF09</li>
</ul>
</li>
<li>
<p><strong>\u591A\u79DF\u6237\u573A\u666F</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u914D\u7F6E\u4E2D\u5B9A\u4E49\u79DF\u6237\u53EF\u7528\u7684\u5DE5\u5177</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allowTools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tenant-query-data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tenant-update-data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tenant-report</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u914D\u7F6E\u4E2D\u5B9A\u4E49\u79DF\u6237\u53EF\u7528\u7684\u5DE5\u5177\x7FallowTools:\x7F- tenant-query-data\x7F- tenant-update-data\x7F- tenant-report"><div></div></button></div></figure></div>
<p>\u524D\u7F6E\u63D2\u4EF6\u6839\u636E\u79DF\u6237\u8BA2\u9605\u5957\u9910\u52A8\u6001\u63A7\u5236\uFF1A</p>
<ul>
<li>\u57FA\u7840\u7248\uFF1A<code dir="auto">x-envoy-allow-mcp-tools: tenant-query-data</code></li>
<li>\u4E13\u4E1A\u7248\uFF1A<code dir="auto">x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data</code></li>
<li>\u4F01\u4E1A\u7248\uFF1A<code dir="auto">x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data,tenant-report</code></li>
</ul>
</li>
<li>
<p><strong>\u4E34\u65F6\u6743\u9650\u9650\u5236</strong></p>
<p>\u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF08\u5982\u7CFB\u7EDF\u7EF4\u62A4\uFF09\uFF0C\u524D\u7F6E\u63D2\u4EF6\u53EF\u4EE5\u4E34\u65F6\u9650\u5236\u67D0\u4E9B\u5DE5\u5177\u7684\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-allow-mcp-tools: read-only-tool1,read-only-tool2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="x-envoy-allow-mcp-tools: read-only-tool1,read-only-tool2"><div></div></button></div></figure></div>
</li>
</ol>
<p><strong>\u524D\u7F6E\u63D2\u4EF6\u96C6\u6210\u6307\u5357</strong>\uFF1A</p>
<p>\u5BF9\u4E8E\u9700\u8981\u52A8\u6001\u8BBE\u7F6E\u5DE5\u5177\u6743\u9650\u7684\u524D\u7F6E\u63D2\u4EF6\uFF08\u5982\u8BA4\u8BC1\u3001\u9274\u6743\u63D2\u4EF6\uFF09\uFF0C<strong>\u5FC5\u987B\u4F7F\u7528 <code dir="auto">proxywasm.ReplaceHttpRequestHeader</code></strong> \u6765\u8BBE\u7F6E <code dir="auto">x-envoy-allow-mcp-tools</code> header\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u6B63\u786E\u7684\u65B9\u5F0F\uFF1A\u4F7F\u7528 ReplaceHttpRequestHeader</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8FD9\u4F1A\u8986\u76D6\u7528\u6237\u53EF\u80FD\u4F20\u5165\u7684\u4EFB\u4F55\u503C\uFF0C\u786E\u4FDD\u5B89\u5168\u6027</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ReplaceHttpRequestHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"x-envoy-allow-mcp-tools"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tool1,tool2,tool3"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u274C \u9519\u8BEF\u7684\u65B9\u5F0F\uFF1A\u4F7F\u7528 AddHttpRequestHeader</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// \u8FD9\u53EF\u80FD\u5BFC\u81F4\u7528\u6237\u4F20\u5165\u7684\u503C\u88AB\u4FDD\u7559\uFF0C\u9020\u6210\u5B89\u5168\u9690\u60A3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpRequestHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"x-envoy-allow-mcp-tools"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tool1,tool2,tool3"</span><span style="--0:#E1E4E8">)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// \u6B63\u786E\u7684\u65B9\u5F0F\uFF1A\u4F7F\u7528 ReplaceHttpRequestHeader\x7F// \u8FD9\u4F1A\u8986\u76D6\u7528\u6237\u53EF\u80FD\u4F20\u5165\u7684\u4EFB\u4F55\u503C\uFF0C\u786E\u4FDD\u5B89\u5168\u6027\x7Fproxywasm.ReplaceHttpRequestHeader(&#x22;x-envoy-allow-mcp-tools&#x22;, &#x22;tool1,tool2,tool3&#x22;)\x7F\x7F// \u274C \u9519\u8BEF\u7684\u65B9\u5F0F\uFF1A\u4F7F\u7528 AddHttpRequestHeader\x7F// \u8FD9\u53EF\u80FD\u5BFC\u81F4\u7528\u6237\u4F20\u5165\u7684\u503C\u88AB\u4FDD\u7559\uFF0C\u9020\u6210\u5B89\u5168\u9690\u60A3\x7Fproxywasm.AddHttpRequestHeader(&#x22;x-envoy-allow-mcp-tools&#x22;, &#x22;tool1,tool2,tool3&#x22;)"><div></div></button></div></figure></div>
<p>\u4F7F\u7528 <code dir="auto">ReplaceHttpRequestHeader</code> \u53EF\u4EE5\u786E\u4FDD\uFF1A</p>
<ol>
<li><strong>\u5B89\u5168\u6027</strong>\uFF1A\u7528\u6237\u65E0\u6CD5\u901A\u8FC7\u76F4\u63A5\u5728\u8BF7\u6C42\u4E2D\u4F20\u5165 <code dir="auto">x-envoy-allow-mcp-tools</code> header \u6765\u7ED5\u8FC7\u6743\u9650\u63A7\u5236</li>
<li><strong>\u53EF\u9760\u6027</strong>\uFF1A\u524D\u7F6E\u63D2\u4EF6\u8BBE\u7F6E\u7684\u6743\u9650\u914D\u7F6E\u59CB\u7EC8\u751F\u6548\uFF0C\u4E0D\u4F1A\u88AB\u7528\u6237\u8F93\u5165\u8986\u76D6</li>
<li><strong>\u53EF\u9884\u6D4B\u6027</strong>\uFF1AMCP Server \u63D2\u4EF6\u63A5\u6536\u5230\u7684\u59CB\u7EC8\u662F\u524D\u7F6E\u63D2\u4EF6\u8BBE\u7F6E\u7684\u6743\u9650\u503C</li>
</ol>
<p><strong>\u6CE8\u610F\u4E8B\u9879</strong>\uFF1A</p>
<ul>
<li>Header \u503C\u4F7F\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5DE5\u5177\u540D\u79F0</li>
<li>\u5DE5\u5177\u540D\u79F0\u524D\u540E\u7684\u7A7A\u767D\u5B57\u7B26\u4F1A\u88AB\u81EA\u52A8\u53BB\u9664</li>
<li>\u5F53\u914D\u7F6E\u7684 <code dir="auto">allowTools</code> \u4E3A\u7A7A\u6570\u7EC4\u65F6\uFF0C\u65E0\u8BBA header \u5982\u4F55\u8BBE\u7F6E\uFF0C\u90FD\u4F1A\u7981\u6B62\u6240\u6709\u5DE5\u5177\u8BBF\u95EE</li>
<li>MCP Server \u63D2\u4EF6\u4F1A\u81EA\u52A8\u79FB\u9664 <code dir="auto">x-envoy-allow-mcp-tools</code> header\uFF0C\u4E0D\u4F1A\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1</li>
</ul>
<h3 id="rest-to-mcp-\u5DE5\u5177\u914D\u7F6E">REST-to-MCP \u5DE5\u5177\u914D\u7F6E</h3>


























































































































































































































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">tools</code></td><td>array of object</td><td>\u9009\u586B</td><td>[]</td><td>REST-to-MCP \u5DE5\u5177\u914D\u7F6E\u5217\u8868</td></tr><tr><td><code dir="auto">tools[].name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5DE5\u5177\u540D\u79F0</td></tr><tr><td><code dir="auto">tools[].description</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5DE5\u5177\u529F\u80FD\u63CF\u8FF0</td></tr><tr><td><code dir="auto">tools[].args</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>[]</td><td>\u5DE5\u5177\u53C2\u6570\u5B9A\u4E49</td></tr><tr><td><code dir="auto">tools[].args[].name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u53C2\u6570\u540D\u79F0</td></tr><tr><td><code dir="auto">tools[].args[].description</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u53C2\u6570\u63CF\u8FF0</td></tr><tr><td><code dir="auto">tools[].args[].type</code></td><td>string</td><td>\u9009\u586B</td><td>string</td><td>\u53C2\u6570\u7C7B\u578B\uFF08string, number, integer, boolean, array, object\uFF09</td></tr><tr><td><code dir="auto">tools[].args[].required</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u53C2\u6570\u662F\u5426\u5FC5\u9700</td></tr><tr><td><code dir="auto">tools[].args[].default</code></td><td>any</td><td>\u9009\u586B</td><td>-</td><td>\u53C2\u6570\u9ED8\u8BA4\u503C</td></tr><tr><td><code dir="auto">tools[].args[].enum</code></td><td>array</td><td>\u9009\u586B</td><td>-</td><td>\u53C2\u6570\u5141\u8BB8\u7684\u503C\u5217\u8868</td></tr><tr><td><code dir="auto">tools[].args[].items</code></td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u6570\u7EC4\u9879\u7684\u6A21\u5F0F\uFF08\u5F53type\u4E3Aarray\u65F6\uFF09</td></tr><tr><td><code dir="auto">tools[].args[].properties</code></td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u5BF9\u8C61\u5C5E\u6027\u7684\u6A21\u5F0F\uFF08\u5F53type\u4E3Aobject\u65F6\uFF09</td></tr><tr><td><code dir="auto">tools[].args[].position</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u53C2\u6570\u5728\u8BF7\u6C42\u4E2D\u7684\u4F4D\u7F6E\uFF08query, path, header, cookie, body\uFF09</td></tr><tr><td><code dir="auto">tools[].requestTemplate</code></td><td>object</td><td>\u5FC5\u586B</td><td>-</td><td>HTTP \u8BF7\u6C42\u6A21\u677F</td></tr><tr><td><code dir="auto">tools[].requestTemplate.url</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BF7\u6C42 URL \u6A21\u677F</td></tr><tr><td><code dir="auto">tools[].requestTemplate.method</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>HTTP \u65B9\u6CD5(GET/POST\u7B49)</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers</code></td><td>array of object</td><td>\u9009\u586B</td><td>[]</td><td>\u8BF7\u6C42\u5934\u6A21\u677F</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].key</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BF7\u6C42\u5934\u540D\u79F0</td></tr><tr><td><code dir="auto">tools[].requestTemplate.headers[].value</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8BF7\u6C42\u5934\u503C\u6A21\u677F</td></tr><tr><td><code dir="auto">tools[].requestTemplate.body</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u8BF7\u6C42\u4F53\u6A21\u677F\uFF08\u4E0EargsToJsonBody\u3001argsToUrlParam\u3001argsToFormBody\u4E92\u65A5\uFF09</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToJsonBody</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u76F4\u63A5\u7528\u4F5CJSON\u8BF7\u6C42\u4F53\uFF08\u4E0Ebody\u3001argsToUrlParam\u3001argsToFormBody\u4E92\u65A5\uFF09</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToUrlParam</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230URL\u4E2D\uFF08\u4E0Ebody\u3001argsToJsonBody\u3001argsToFormBody\u4E92\u65A5\uFF09</td></tr><tr><td><code dir="auto">tools[].requestTemplate.argsToFormBody</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u4EE5application/x-www-form-urlencoded\u683C\u5F0F\u7F16\u7801\u5728\u8BF7\u6C42\u4F53\u4E2D\uFF08\u4E0Ebody\u3001argsToJsonBody\u3001argsToUrlParam\u4E92\u65A5\uFF09</td></tr><tr><td><code dir="auto">tools[].responseTemplate</code></td><td>object</td><td>\u5FC5\u586B</td><td>-</td><td>HTTP \u54CD\u5E94\u8F6C\u6362\u6A21\u677F</td></tr><tr><td><code dir="auto">tools[].responseTemplate.body</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u54CD\u5E94\u4F53\u8F6C\u6362\u6A21\u677F\uFF08\u4E0EprependBody\u548CappendBody\u4E92\u65A5\uFF09</td></tr><tr><td><code dir="auto">tools[].responseTemplate.prependBody</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728\u54CD\u5E94\u4F53\u524D\u63D2\u5165\u7684\u6587\u672C\uFF08\u4E0Ebody\u4E92\u65A5\uFF09</td></tr><tr><td><code dir="auto">tools[].responseTemplate.appendBody</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728\u54CD\u5E94\u4F53\u540E\u63D2\u5165\u7684\u6587\u672C\uFF08\u4E0Ebody\u4E92\u65A5\uFF09</td></tr><tr><td><code dir="auto">tools[].security</code></td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u5DE5\u5177\u7EA7\u522B\u5B89\u5168\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9A\u4E49 MCP Client \u548C MCP Server \u4E4B\u95F4\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5E76\u652F\u6301\u51ED\u8BC1\u900F\u4F20\u3002</td></tr><tr><td><code dir="auto">tools[].security.id</code></td><td>string</td><td>\u5F53 <code dir="auto">tools[].security</code> \u914D\u7F6E\u65F6\u5FC5\u586B</td><td>-</td><td>\u5F15\u7528\u5728 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID\u3002</td></tr><tr><td><code dir="auto">tools[].security.passthrough</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u662F\u5426\u542F\u7528\u900F\u660E\u8BA4\u8BC1\u3002\u5982\u679C\u4E3A <code dir="auto">true</code>\uFF0C\u5219\u4ECE MCP Client \u8BF7\u6C42\u4E2D\u63D0\u53D6\u7684\u51ED\u8BC1\u5C06\u7528\u4E8E <code dir="auto">requestTemplate.security</code> \u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u3002</td></tr><tr><td><code dir="auto">tools[].requestTemplate.security</code></td><td>object</td><td>\u9009\u586B</td><td>-</td><td>HTTP \u8BF7\u6C42\u6A21\u677F\u7684\u5B89\u5168\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9A\u4E49 MCP Server \u548C REST API \u4E4B\u95F4\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002</td></tr><tr><td><code dir="auto">tools[].requestTemplate.security.id</code></td><td>string</td><td>\u5F53 <code dir="auto">tools[].requestTemplate.security</code> \u914D\u7F6E\u65F6\u5FC5\u586B</td><td>-</td><td>\u5F15\u7528\u5728 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID\u3002</td></tr><tr><td><code dir="auto">tools[].requestTemplate.security.credential</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u8986\u76D6 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u9ED8\u8BA4\u51ED\u8BC1\u3002\u5982\u679C\u540C\u65F6\u542F\u7528\u4E86 <code dir="auto">tools[].security.passthrough</code>\uFF0C\u5219\u6B64\u5B57\u6BB5\u5C06\u88AB\u5FFD\u7565\uFF0C\u4F18\u5148\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u3002</td></tr><tr><td><code dir="auto">tools[].errorResponseTemplate</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>HTTP\u54CD\u5E94Status>=300 \\</td></tr></tbody></table>
<h2 id="mcp-\u4F20\u8F93\u534F\u8BAE">MCP \u4F20\u8F93\u534F\u8BAE</h2>
<p>MCP \u4EE3\u7406\u670D\u52A1\u5668 (<code dir="auto">mcp-proxy</code> \u7C7B\u578B) \u652F\u6301\u4E24\u79CD\u4F20\u8F93\u534F\u8BAE\u4E0E\u540E\u7AEF MCP \u670D\u52A1\u5668\u901A\u4FE1\uFF1A</p>
<h3 id="streamablehttp-\u534F\u8BAE-transport-http">StreamableHTTP \u534F\u8BAE (<code dir="auto">transport: http</code>)</h3>
<p>StreamableHTTP \u662F MCP \u7684\u9ED8\u8BA4 HTTP \u4F20\u8F93\u534F\u8BAE\uFF0C\u4F7F\u7528\u6807\u51C6\u7684 HTTP \u8BF7\u6C42/\u54CD\u5E94\u6A21\u578B\uFF1A</p>
<ul>
<li>
<p><strong>\u7279\u70B9</strong>\uFF1A</p>
<ul>
<li>\u7B80\u5355\u7684\u8BF7\u6C42-\u54CD\u5E94\u6A21\u578B</li>
<li>\u4F7F\u7528\u6807\u51C6 HTTP POST \u8BF7\u6C42</li>
<li>\u54CD\u5E94\u4E3A\u5B8C\u6574\u7684 JSON \u6570\u636E</li>
<li>\u9002\u5408\u5927\u591A\u6570 MCP \u670D\u52A1\u5668\u5B9E\u73B0</li>
</ul>
</li>
<li>
<p><strong>\u914D\u7F6E\u793A\u4F8B</strong>\uFF1A</p>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">transport</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com/mcp"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-mcp-proxy\x7F  type: mcp-proxy\x7F  transport: http\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com/mcp&#x22;"><div></div></button></div></figure></div>
<h3 id="sse-\u534F\u8BAE-transport-sse">SSE \u534F\u8BAE (<code dir="auto">transport: sse</code>)</h3>
<p>SSE (Server-Sent Events) \u662F MCP \u7684\u6D41\u5F0F\u4F20\u8F93\u534F\u8BAE\uFF0C\u652F\u6301\u5B9E\u65F6\u6570\u636E\u63A8\u9001\uFF1A</p>
<ul>
<li>
<p><strong>\u7279\u70B9</strong>\uFF1A</p>
<ul>
<li>\u57FA\u4E8E HTTP \u7684\u5355\u5411\u6D41\u5F0F\u901A\u4FE1</li>
<li>\u652F\u6301\u957F\u8FDE\u63A5\u548C\u5B9E\u65F6\u6D88\u606F\u63A8\u9001</li>
<li>\u9002\u5408\u9700\u8981\u5B9E\u65F6\u66F4\u65B0\u7684\u573A\u666F</li>
<li>\u534F\u8BAE\u6D41\u7A0B\uFF1A
<ol>
<li><strong>\u53D1\u73B0\u9636\u6BB5</strong>\uFF1A\u5411\u540E\u7AEF\u53D1\u9001 POST \u8BF7\u6C42\u83B7\u53D6 SSE \u7AEF\u70B9 URL</li>
<li><strong>\u521D\u59CB\u5316\u9636\u6BB5</strong>\uFF1A\u901A\u8FC7 SSE \u7AEF\u70B9\u53D1\u9001 <code dir="auto">initialize</code> \u6D88\u606F</li>
<li><strong>\u901A\u77E5\u9636\u6BB5</strong>\uFF1A\u53D1\u9001 <code dir="auto">notifications/initialized</code> \u901A\u77E5</li>
<li><strong>\u5DE5\u5177\u8C03\u7528</strong>\uFF1A\u6839\u636E\u9700\u8981\u6267\u884C <code dir="auto">tools/list</code> \u6216 <code dir="auto">tools/call</code> \u8BF7\u6C42</li>
</ol>
</li>
</ul>
</li>
<li>
<p><strong>URL \u914D\u7F6E</strong>\uFF1A</p>
<ul>
<li>\u652F\u6301\u5B8C\u6574 URL\uFF1A<code dir="auto">http://example.com/sse</code></li>
<li>\u652F\u6301\u8DEF\u5F84\uFF1A<code dir="auto">/sse</code>\uFF08\u5C06\u4F7F\u7528 <code dir="auto">mcpServerURL</code> \u7684\u57FA\u7840 URL\uFF09</li>
</ul>
</li>
<li>
<p><strong>\u914D\u7F6E\u793A\u4F8B</strong>\uFF1A</p>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-sse-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">transport</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sse</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># SSE \u53EF\u80FD\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-sse-proxy\x7F  type: mcp-proxy\x7F  transport: sse\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com&#x22;\x7F  timeout: 10000  # SSE \u53EF\u80FD\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4"><div></div></button></div></figure></div>
<h2 id="\u8BA4\u8BC1\u4E0E\u5B89\u5168">\u8BA4\u8BC1\u4E0E\u5B89\u5168</h2>
<p>MCP Server \u63D2\u4EF6\u652F\u6301\u7075\u6D3B\u7684\u8BA4\u8BC1\u914D\u7F6E\uFF0C\u4EE5\u786E\u4FDD\u4E0E\u540E\u7AEF REST API \u6216 MCP \u670D\u52A1\u5668\u901A\u4FE1\u7684\u5B89\u5168\u6027\u3002\u63D2\u4EF6\u652F\u6301\u4E24\u79CD\u670D\u52A1\u5668\u7C7B\u578B\u7684\u8BA4\u8BC1\u914D\u7F6E\uFF1A</p>
<ul>
<li><strong>REST-to-MCP \u670D\u52A1\u5668 (<code dir="auto">rest</code> \u7C7B\u578B)</strong>\uFF1A\u5C06\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8F6C\u6362\u4E3A REST API \u8C03\u7528</li>
<li><strong>MCP \u4EE3\u7406\u670D\u52A1\u5668 (<code dir="auto">mcp-proxy</code> \u7C7B\u578B)</strong>\uFF1A\u5C06\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668</li>
</ul>
<p>\u65E0\u8BBA\u54EA\u79CD\u7C7B\u578B\uFF0C\u90FD\u652F\u6301<strong>\u4E24\u5C42\u8BA4\u8BC1\u673A\u5236</strong>\uFF1A</p>
<ol>
<li><strong>\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u8BA4\u8BC1</strong>\uFF1A\u9A8C\u8BC1\u8C03\u7528 MCP Server \u7684\u5BA2\u6237\u7AEF\u8EAB\u4EFD</li>
<li><strong>\u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1</strong>\uFF1AMCP Server \u8C03\u7528\u540E\u7AEF\u670D\u52A1\u65F6\u7684\u8BA4\u8BC1\u65B9\u5F0F</li>
</ol>
<h3 id="\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848-serversecurityschemes">\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848 (<code dir="auto">server.securitySchemes</code>)</h3>
<p>\u60A8\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u7EA7\u522B\u5B9A\u4E49\u4E00\u7EC4\u53EF\u91CD\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u8FD9\u4E9B\u65B9\u6848\u4E4B\u540E\u53EF\u4EE5\u88AB\u5404\u4E2A\u5DE5\u5177\u5F15\u7528\uFF0C\u7528\u4E8E\u914D\u7F6E MCP Server \u5411\u540E\u7AEF REST API \u53D1\u8D77\u8BF7\u6C42\u65F6\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002</p>
<p><strong>\u914D\u7F6E\u5B57\u6BB5 (<code dir="auto">server.securitySchemes[]</code>)</strong>:</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td>string</td><td>\u5FC5\u586B</td><td>\u8BA4\u8BC1\u65B9\u6848\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4F9B\u5DE5\u5177\u914D\u7F6E\u5F15\u7528\u3002</td></tr><tr><td><code dir="auto">type</code></td><td>string</td><td>\u5FC5\u586B</td><td>\u8BA4\u8BC1\u7C7B\u578B\uFF0C\u652F\u6301 <code dir="auto">http</code> (\u7528\u4E8E Basic \u548C Bearer\u8BA4\u8BC1) \u548C <code dir="auto">apiKey</code>\u3002</td></tr><tr><td><code dir="auto">scheme</code></td><td>string</td><td>\u9009\u586B</td><td>\u5F53 <code dir="auto">type</code> \u4E3A <code dir="auto">http</code> \u65F6\u6307\u5B9A\u5177\u4F53\u7684\u65B9\u6848\uFF0C\u5982 <code dir="auto">basic</code> \u6216 <code dir="auto">bearer</code>\u3002</td></tr><tr><td><code dir="auto">in</code></td><td>string</td><td>\u9009\u586B</td><td>\u5F53 <code dir="auto">type</code> \u4E3A <code dir="auto">apiKey</code> \u65F6\u6307\u5B9A API \u5BC6\u94A5\u7684\u4F4D\u7F6E\uFF0C\u5982 <code dir="auto">header</code> \u6216 <code dir="auto">query</code>\u3002</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u9009\u586B</td><td>\u5F53 <code dir="auto">type</code> \u4E3A <code dir="auto">apiKey</code> \u65F6\u6307\u5B9A Header \u540D\u79F0\u6216\u67E5\u8BE2\u53C2\u6570\u540D\u79F0\u3002</td></tr><tr><td><code dir="auto">defaultCredential</code></td><td>string</td><td>\u9009\u586B</td><td>\u6B64\u65B9\u6848\u7684\u9ED8\u8BA4\u51ED\u8BC1\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E Basic Auth\uFF0C\u53EF\u4EE5\u662F \u201Cuser:password
\u201D\uFF1B\u5BF9\u4E8E Bearer Token\uFF0C\u662F Token \u672C\u8EAB\uFF1B\u5BF9\u4E8E API Key\uFF0C\u662F Key \u672C\u8EAB\u3002</td></tr></tbody></table>
<p><strong>\u793A\u4F8B (<code dir="auto">server.securitySchemes</code>)</strong>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyBasicAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">basic</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"admin:secretpassword"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u9ED8\u8BA4\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyBearerToken</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u9ED8\u8BA4\u7684Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyApiKeyInHeader</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Custom-API-Key</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># API Key \u5728\u540D\u4E3A X-Custom-API-Key \u7684 Header \u4E2D</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"abcdef123456"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u9ED8\u8BA4\u7684 API Key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyApiKeyInQuery</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"api_token"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># API Key \u5728\u540D\u4E3A api_token \u7684\u67E5\u8BE2\u53C2\u6570\u4E2D</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"uvwxyz789012"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-api-server\x7F  securitySchemes:\x7F  - id: MyBasicAuth\x7F    type: http\x7F    scheme: basic\x7F    defaultCredential: &#x22;admin:secretpassword&#x22; # \u9ED8\u8BA4\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\x7F  - id: MyBearerToken\x7F    type: http\x7F    scheme: bearer\x7F    defaultCredential: &#x22;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&#x22; # \u9ED8\u8BA4\u7684Bearer Token\x7F  - id: MyApiKeyInHeader\x7F    type: apiKey\x7F    in: header\x7F    name: X-Custom-API-Key # API Key \u5728\u540D\u4E3A X-Custom-API-Key \u7684 Header \u4E2D\x7F    defaultCredential: &#x22;abcdef123456&#x22; # \u9ED8\u8BA4\u7684 API Key\x7F  - id: MyApiKeyInQuery\x7F    type: apiKey\x7F    in: query\x7F    name: &#x22;api_token&#x22; # API Key \u5728\u540D\u4E3A api_token \u7684\u67E5\u8BE2\u53C2\u6570\u4E2D\x7F    defaultCredential: &#x22;uvwxyz789012&#x22;"><div></div></button></div></figure></div>
<h3 id="\u5728\u5DE5\u5177\u4E2D\u5E94\u7528\u8BA4\u8BC1\u65B9\u6848">\u5728\u5DE5\u5177\u4E2D\u5E94\u7528\u8BA4\u8BC1\u65B9\u6848</h3>
<p>\u5B9A\u4E49\u4E86 <code dir="auto">server.securitySchemes</code> \u540E\uFF0C\u60A8\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5DE5\u5177\u7684 <code dir="auto">requestTemplate.security</code> \u4E2D\u901A\u8FC7 <code dir="auto">id</code> \u5F15\u7528\u8FD9\u4E9B\u65B9\u6848\uFF0C\u4EE5\u6307\u5B9A MCP Server \u8C03\u7528\u540E\u7AEF REST API \u65F6\u4F7F\u7528\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002</p>
<ul>
<li><strong><code dir="auto">tools[].requestTemplate.security.id</code></strong>: \u5F15\u7528 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u7684 <code dir="auto">id</code>\u3002</li>
<li><strong><code dir="auto">tools[].requestTemplate.security.credential</code></strong>: \u53EF\u9009\u3002\u5982\u679C\u63D0\u4F9B\uFF0C\u5B83\u5C06\u8986\u76D6\u6240\u5F15\u7528\u65B9\u6848\u4E2D\u7684 <code dir="auto">defaultCredential</code>\u3002\u8FD9\u5141\u8BB8\u60A8\u4E3A\u7279\u5B9A\u5DE5\u5177\u4F7F\u7528\u4E0D\u540C\u7684\u51ED\u8BC1\uFF0C\u5373\u4F7F\u5B83\u4EEC\u5171\u4EAB\u76F8\u540C\u7684\u8BA4\u8BC1\u673A\u5236\u3002</li>
</ul>
<p><strong>\u793A\u4F8B</strong>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-user-details</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/users/{{.args.userId}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyBearerToken</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u4F7F\u7528\u4E0A\u9762\u5B9A\u4E49\u7684 MyBearerToken \u65B9\u6848</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># credential: "override_token_for_this_tool" # \u53EF\u9009\uFF1A\u4E3A\u6B64\u5DE5\u5177\u8986\u76D6\u9ED8\u8BA4Token</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># ...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">update-inventory</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/inventory/{{.args.itemId}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">MyApiKeyInHeader</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u4F7F\u7528 MyApiKeyInHeader \u65B9\u6848</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B64\u5DE5\u5177\u5C06\u4F7F\u7528 MyApiKeyInHeader \u4E2D\u5B9A\u4E49\u7684 defaultCredential</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tools:\x7F- name: get-user-details\x7F  # ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/users/{{.args.userId}}&#x22;\x7F    method: GET\x7F    security:\x7F      id: MyBearerToken # \u4F7F\u7528\u4E0A\u9762\u5B9A\u4E49\u7684 MyBearerToken \u65B9\u6848\x7F      # credential: &#x22;override_token_for_this_tool&#x22; # \u53EF\u9009\uFF1A\u4E3A\u6B64\u5DE5\u5177\u8986\u76D6\u9ED8\u8BA4Token\x7F# ...\x7F- name: update-inventory\x7F  # ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/inventory/{{.args.itemId}}&#x22;\x7F    method: POST\x7F    security:\x7F      id: MyApiKeyInHeader # \u4F7F\u7528 MyApiKeyInHeader \u65B9\u6848\x7F      # \u6B64\u5DE5\u5177\u5C06\u4F7F\u7528 MyApiKeyInHeader \u4E2D\u5B9A\u4E49\u7684 defaultCredential"><div></div></button></div></figure></div>
<h3 id="\u900F\u660E\u8BA4\u8BC1-passthrough-authentication">\u900F\u660E\u8BA4\u8BC1 (Passthrough Authentication)</h3>
<p>\u900F\u660E\u8BA4\u8BC1\u529F\u80FD\u5141\u8BB8\u5C06 MCP Client (\u4F8B\u5982 AI \u52A9\u624B) \u8C03\u7528 MCP Server \u65F6\u63D0\u4F9B\u7684\u51ED\u8BC1\uFF0C\u900F\u4F20\u7ED9 MCP Server \u8C03\u7528\u540E\u7AEF REST API \u65F6\u7684\u8BA4\u8BC1\u8FC7\u7A0B\u3002</p>
<p><strong>\u914D\u7F6E\u65B9\u5F0F</strong>:</p>
<ol>
<li>
<p><strong>\u786E\u4FDD\u76F8\u5173\u8BA4\u8BC1\u65B9\u6848\u5DF2\u5728 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49</strong>\u3002\u8FD9\u5305\u62EC\u5BA2\u6237\u7AEF\u7528\u4E8E\u8FDE\u63A5\u5230 MCP Server \u7684\u65B9\u6848\uFF0C\u4EE5\u53CA MCP Server \u7528\u4E8E\u8FDE\u63A5\u5230\u540E\u7AEF REST API \u7684\u65B9\u6848\u3002</p>
</li>
<li>
<p><strong>\u914D\u7F6E\u5DE5\u5177\u7EA7\u522B\u8BA4\u8BC1 (<code dir="auto">tools[].security</code>)</strong>:
\u5728\u9700\u8981\u900F\u4F20\u51ED\u8BC1\u7684\u5DE5\u5177\u4E2D\uFF0C\u914D\u7F6E <code dir="auto">security</code> \u5B57\u6BB5\uFF1A</p>
<ul>
<li><code dir="auto">id</code>: \u5F15\u7528 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u3001\u7528\u4E8E <strong>MCP Client \u4E0E MCP Server \u4E4B\u95F4</strong>\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u63D2\u4EF6\u5C06\u6839\u636E\u6B64\u65B9\u6848\u4ECE\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51ED\u8BC1\uFF0C\u5E76\u6E05\u7406\u539F\u59CB\u8BF7\u6C42\u4E2D\u7684\u8BE5\u51ED\u8BC1\u3002</li>
<li><code dir="auto">passthrough: true</code>: \u542F\u7528\u900F\u660E\u8BA4\u8BC1\u3002</li>
</ul>
</li>
<li>
<p><strong>\u914D\u7F6E\u8BF7\u6C42\u6A21\u677F\u8BA4\u8BC1 (<code dir="auto">tools[].requestTemplate.security</code>)</strong>:
\u5728\u5DE5\u5177\u7684 <code dir="auto">requestTemplate</code> \u4E2D\uFF0C\u914D\u7F6E <code dir="auto">security</code> \u5B57\u6BB5\uFF1A</p>
<ul>
<li><code dir="auto">id</code>: \u5F15\u7528 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u3001\u7528\u4E8E <strong>MCP Server \u4E0E\u540E\u7AEF REST API \u4E4B\u95F4</strong>\u7684\u8BA4\u8BC1\u65B9\u6848\u3002</li>
<li>\u5F53 <code dir="auto">tools[].security.passthrough</code> \u4E3A <code dir="auto">true</code> \u65F6\uFF0C\u4ECE\u5BA2\u6237\u7AEF\u63D0\u53D6\u7684\u51ED\u8BC1\u5C06\u6839\u636E\u6B64 <code dir="auto">requestTemplate.security</code> \u65B9\u6848\u5E94\u7528\u4E8E\u5BF9\u540E\u7AEF REST API \u7684\u8C03\u7528\u3002</li>
</ul>
</li>
</ol>
<p><strong>\u793A\u4F8B</strong>:</p>
<p>\u5047\u8BBE MCP Client \u4F7F\u7528 Bearer Token \u8C03\u7528 MCP Server\uFF0C\u800C MCP Server \u9700\u8981\u4F7F\u7528 API Key \u8C03\u7528\u540E\u7AEF\u7684 REST API\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientSideBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u5BA2\u6237\u7AEF\u4F7F\u7528Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span><span style="--0:#E1E4E8">    </span><span style="--0:#99A0A6"># \u540E\u7AEFAPI\u4F7F\u7528X-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># defaultCredential: "optional_default_backend_key"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-product-securely</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u83B7\u53D6\u4EA7\u54C1\u4FE1\u606F\uFF08\u5B89\u5168\u900F\u4F20\uFF09"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u5BA2\u6237\u7AEF -> MCP Server \u8BA4\u8BC1\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientSideBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># MCP Server\u671F\u671B\u5BA2\u6237\u7AEF\u4F7F\u7528\u6B64\u65B9\u6848\uFF0C\u5E76\u4F1A\u5C1D\u8BD5\u63D0\u53D6\u6B64\u7C7B\u578B\u7684\u51ED\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># \u542F\u7528\u900F\u4F20</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4EA7\u54C1ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># MCP Server -> \u540E\u7AEF REST API \u8BA4\u8BC1\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u540E\u7AEFAPI\u9700\u8981\u6B64\u65B9\u6848\u3002\u900F\u4F20\u7684\u51ED\u8BC1\u5C06\u6309\u6B64\u65B9\u6848\u5E94\u7528\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/products/{{.args.product_id}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: product-api-server\x7F  securitySchemes:\x7F  - id: ClientSideBearer # \u5BA2\u6237\u7AEF\u4F7F\u7528Bearer Token\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendApiKey    # \u540E\u7AEFAPI\u4F7F\u7528X-API-Key\x7F    type: apiKey\x7F    in: header\x7F    name: X-API-Key\x7F    # defaultCredential: &#x22;optional_default_backend_key&#x22;\x7F\x7Ftools:\x7F- name: get-product-securely\x7F  description: &#x22;\u83B7\u53D6\u4EA7\u54C1\u4FE1\u606F\uFF08\u5B89\u5168\u900F\u4F20\uFF09&#x22;\x7F  security: # \u5BA2\u6237\u7AEF -> MCP Server \u8BA4\u8BC1\u914D\u7F6E\x7F    id: ClientSideBearer # MCP Server\u671F\u671B\u5BA2\u6237\u7AEF\u4F7F\u7528\u6B64\u65B9\u6848\uFF0C\u5E76\u4F1A\u5C1D\u8BD5\u63D0\u53D6\u6B64\u7C7B\u578B\u7684\u51ED\u8BC1\x7F    passthrough: true   # \u542F\u7528\u900F\u4F20\x7F  args:\x7F  - name: product_id\x7F    description: &#x22;\u4EA7\u54C1ID&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # MCP Server -> \u540E\u7AEF REST API \u8BA4\u8BC1\u914D\u7F6E\x7F      id: BackendApiKey # \u540E\u7AEFAPI\u9700\u8981\u6B64\u65B9\u6848\u3002\u900F\u4F20\u7684\u51ED\u8BC1\u5C06\u6309\u6B64\u65B9\u6848\u5E94\u7528\u3002\x7F    url: &#x22;https://api.example.com/products/{{.args.product_id}}&#x22;\x7F    method: GET"><div></div></button></div></figure></div>
<p><strong>\u5DE5\u4F5C\u6D41\u7A0B</strong>:</p>
<ol>
<li>MCP Client \u53D1\u8D77\u8BF7\u6C42\u5230 MCP Server \u7684 <code dir="auto">get-product-securely</code> \u5DE5\u5177\uFF0C\u5E76\u5728 <code dir="auto">Authorization</code> \u5934\u4E2D\u643A\u5E26 <code dir="auto">Bearer &#x3C;client_token></code>\u3002</li>
<li>MCP Server \u6839\u636E <code dir="auto">tools[].security</code> (id: <code dir="auto">ClientSideBearer</code>) \u8BC6\u522B\u51FA\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u662F Bearer Token\u3002\u5B83\u4F1A\u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6 <code dir="auto">&#x3C;client_token></code> \u5E76\u79FB\u9664\u539F\u59CB\u7684 <code dir="auto">Authorization</code> \u5934\u3002</li>
<li>\u56E0\u4E3A <code dir="auto">passthrough: true</code>\uFF0C\u63D0\u53D6\u51FA\u7684 <code dir="auto">&#x3C;client_token></code> \u88AB\u6807\u8BB0\u4E3A\u900F\u4F20\u51ED\u8BC1\u3002</li>
<li>MCP Server \u51C6\u5907\u8C03\u7528\u540E\u7AEF REST API\u3002\u5B83\u67E5\u770B <code dir="auto">requestTemplate.security</code> (id: <code dir="auto">BackendApiKey</code>)\u3002</li>
<li>\u7531\u4E8E\u542F\u7528\u4E86\u900F\u4F20\uFF0CMCP Server \u5C06\u4E4B\u524D\u63D0\u53D6\u7684 <code dir="auto">&#x3C;client_token></code> \u4F5C\u4E3A\u51ED\u8BC1\u503C\uFF0C\u6309\u7167 <code dir="auto">BackendApiKey</code> \u65B9\u6848\uFF08\u5373\u4F5C\u4E3A\u540D\u4E3A <code dir="auto">X-API-Key</code> \u7684 HTTP Header\uFF09\u6DFB\u52A0\u5230\u5BF9 <code dir="auto">https://api.example.com/products/...</code> \u7684\u8BF7\u6C42\u4E2D\u3002</li>
<li>\u540E\u7AEF REST API \u6536\u5230\u8BF7\u6C42\uFF0C\u5176\u4E2D <code dir="auto">X-API-Key</code> Header \u7684\u503C\u4E3A <code dir="auto">&#x3C;client_token></code>\u3002</li>
</ol>
<p><strong>\u6CE8\u610F\u4E8B\u9879</strong>:</p>
<ul>
<li>\u5F53 <code dir="auto">tools[].security.passthrough</code> \u4E3A <code dir="auto">true</code> \u65F6\uFF0C<code dir="auto">requestTemplate.security.credential</code> \u5B57\u6BB5\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4F18\u5148\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u3002</li>
<li>\u900F\u4F20\u7684\u51ED\u8BC1\u503C\u4F1A\u76F4\u63A5\u7528\u4E8E <code dir="auto">requestTemplate.security</code> \u6307\u5B9A\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u8BF7\u786E\u4FDD\u51ED\u8BC1\u7684\u683C\u5F0F\u4E0E\u76EE\u6807\u8BA4\u8BC1\u65B9\u6848\u517C\u5BB9\u3002<code dir="auto">extractAndRemoveIncomingCredential</code> \u51FD\u6570\u4F1A\u5C1D\u8BD5\u63D0\u53D6\u6838\u5FC3\u51ED\u8BC1\u90E8\u5206\uFF08\u4F8B\u5982\uFF0CBearer token \u503C\uFF0CBasic auth \u7684 base64 \u7F16\u7801\u90E8\u5206\uFF09\u3002</li>
</ul>
<h3 id="\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E">\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E</h3>
<p>\u4E3A\u4E86\u7B80\u5316\u914D\u7F6E\u548C\u786E\u4FDD\u4E00\u81F4\u6027\uFF0CMCP Server \u63D2\u4EF6\u652F\u6301\u5728\u670D\u52A1\u5668\u7EA7\u522B\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u8BA4\u8BC1\u914D\u7F6E\u3002\u8FD9\u4E9B\u9ED8\u8BA4\u914D\u7F6E\u5C06\u5E94\u7528\u4E8E\u6240\u6709\u5DE5\u5177\u548C\u975E\u5DE5\u5177\u7279\u5B9A\u7684\u63A5\u53E3\uFF08\u5982 <code dir="auto">tools/list</code>\uFF09\u3002</p>
<h4 id="serverdefaultdownstreamsecurity"><code dir="auto">server.defaultDownstreamSecurity</code></h4>
<p>\u5B9A\u4E49\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E\u3002\u8FD9\u4E2A\u914D\u7F6E\u5C06\u5E94\u7528\u4E8E\uFF1A</p>
<ul>
<li>\u6240\u6709\u6CA1\u6709\u660E\u786E\u914D\u7F6E <code dir="auto">security</code> \u5B57\u6BB5\u7684\u5DE5\u5177</li>
<li><code dir="auto">tools/list</code> \u8BF7\u6C42\uFF08\u83B7\u53D6\u5DE5\u5177\u5217\u8868\uFF09</li>
<li>\u5176\u4ED6\u975E\u5DE5\u5177\u7279\u5B9A\u7684 MCP \u534F\u8BAE\u63A5\u53E3</li>
</ul>
<p><strong>\u914D\u7F6E\u5B57\u6BB5</strong>\uFF1A</p>
<ul>
<li><code dir="auto">id</code>\uFF1A\u5F15\u7528 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID</li>
<li><code dir="auto">passthrough</code>\uFF1A\u662F\u5426\u542F\u7528\u900F\u660E\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A false\uFF09</li>
</ul>
<h4 id="serverdefaultupstreamsecurity"><code dir="auto">server.defaultUpstreamSecurity</code></h4>
<p>\u5B9A\u4E49\u7F51\u5173\u5230\u540E\u7AEF\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E\u3002\u8FD9\u4E2A\u914D\u7F6E\u5C06\u5E94\u7528\u4E8E\uFF1A</p>
<ul>
<li>\u6240\u6709\u6CA1\u6709\u660E\u786E\u914D\u7F6E <code dir="auto">requestTemplate.security</code> \u5B57\u6BB5\u7684\u5DE5\u5177</li>
<li><code dir="auto">tools/list</code> \u7B49\u9700\u8981\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\u7684\u8BF7\u6C42</li>
</ul>
<p><strong>\u914D\u7F6E\u5B57\u6BB5</strong>\uFF1A</p>
<ul>
<li><code dir="auto">id</code>\uFF1A\u5F15\u7528 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID</li>
<li><code dir="auto">credential</code>\uFF1A\u8986\u76D6\u9ED8\u8BA4\u51ED\u8BC1\uFF08\u53EF\u9009\uFF09</li>
</ul>
<h4 id="\u4F18\u5148\u7EA7\u89C4\u5219">\u4F18\u5148\u7EA7\u89C4\u5219</h4>
<p>\u8BA4\u8BC1\u914D\u7F6E\u7684\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\uFF1A</p>
<ol>
<li>\u5DE5\u5177\u7EA7\u522B\u914D\u7F6E\uFF08<code dir="auto">tools[].security</code> \u548C <code dir="auto">tools[].requestTemplate.security</code>\uFF09</li>
<li>\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u914D\u7F6E\uFF08<code dir="auto">server.defaultDownstreamSecurity</code> \u548C <code dir="auto">server.defaultUpstreamSecurity</code>\uFF09</li>
<li>\u8BA4\u8BC1\u65B9\u6848\u4E2D\u7684\u9ED8\u8BA4\u51ED\u8BC1\uFF08<code dir="auto">server.securitySchemes[].defaultCredential</code>\uFF09</li>
</ol>
<h4 id="\u4F7F\u7528\u573A\u666F">\u4F7F\u7528\u573A\u666F</h4>
<p>\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\u7279\u522B\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A</p>
<ul>
<li><strong>\u7EDF\u4E00\u8BA4\u8BC1\u7B56\u7565</strong>\uFF1A\u6240\u6709\u5DE5\u5177\u90FD\u4F7F\u7528\u76F8\u540C\u7684\u8BA4\u8BC1\u65B9\u5F0F</li>
<li><strong>MCP \u4EE3\u7406\u670D\u52A1\u5668</strong>\uFF1A\u9700\u8981\u4E3A <code dir="auto">tools/list</code> \u7B49\u975E\u5DE5\u5177\u7279\u5B9A\u8BF7\u6C42\u63D0\u4F9B\u8BA4\u8BC1</li>
<li><strong>\u7B80\u5316\u914D\u7F6E</strong>\uFF1A\u51CF\u5C11\u6BCF\u4E2A\u5DE5\u5177\u91CD\u590D\u914D\u7F6E\u76F8\u540C\u7684\u8BA4\u8BC1\u4FE1\u606F</li>
</ul>
<h2 id="\u53C2\u6570\u7C7B\u578B\u652F\u6301">\u53C2\u6570\u7C7B\u578B\u652F\u6301</h2>
<p>REST-to-MCP \u5DE5\u5177\u652F\u6301\u591A\u79CD\u53C2\u6570\u7C7B\u578B\uFF0C\u4F7F\u60A8\u53EF\u4EE5\u66F4\u7CBE\u786E\u5730\u5B9A\u4E49\u5DE5\u5177\u53C2\u6570\uFF1A</p>
<ul>
<li><strong>string</strong>: \u5B57\u7B26\u4E32\u7C7B\u578B\uFF08\u9ED8\u8BA4\uFF09</li>
<li><strong>number</strong>: \u6570\u5B57\u7C7B\u578B\uFF08\u6D6E\u70B9\u6570\uFF09</li>
<li><strong>integer</strong>: \u6574\u6570\u7C7B\u578B</li>
<li><strong>boolean</strong>: \u5E03\u5C14\u7C7B\u578B\uFF08true/false\uFF09</li>
<li><strong>array</strong>: \u6570\u7EC4\u7C7B\u578B\uFF0C\u4F7F\u7528 <code dir="auto">items</code> \u5B57\u6BB5\u5B9A\u4E49\u6570\u7EC4\u5143\u7D20\u7684\u6A21\u5F0F</li>
<li><strong>object</strong>: \u5BF9\u8C61\u7C7B\u578B\uFF0C\u4F7F\u7528 <code dir="auto">properties</code> \u5B57\u6BB5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u7684\u6A21\u5F0F</li>
</ul>
<p>\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u641C\u7D22\u5173\u952E\u8BCD"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">filters</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8FC7\u6EE4\u6761\u4EF6"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">category</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"food"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"hotel"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"attraction"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">price</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">coordinates</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5750\u6807\u70B9\u5217\u8868"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lat</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">lng</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">number</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="args:\x7F- name: query\x7F  description: &#x22;\u641C\u7D22\u5173\u952E\u8BCD&#x22;\x7F  type: string\x7F  required: true\x7F- name: limit\x7F  description: &#x22;\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF&#x22;\x7F  type: integer\x7F  default: 10\x7F- name: filters\x7F  description: &#x22;\u8FC7\u6EE4\u6761\u4EF6&#x22;\x7F  type: object\x7F  properties:\x7F    category:\x7F      type: string\x7F      enum: [&#x22;food&#x22;, &#x22;hotel&#x22;, &#x22;attraction&#x22;]\x7F    price:\x7F      type: integer\x7F      minimum: 0\x7F- name: coordinates\x7F  description: &#x22;\u5750\u6807\u70B9\u5217\u8868&#x22;\x7F  type: array\x7F  items:\x7F    type: object\x7F    properties:\x7F      lat:\x7F        type: number\x7F      lng:\x7F        type: number"><div></div></button></div></figure></div>
<h2 id="\u53C2\u6570\u4F4D\u7F6E\u63A7\u5236">\u53C2\u6570\u4F4D\u7F6E\u63A7\u5236</h2>
<p>REST-to-MCP \u5DE5\u5177\u652F\u6301\u901A\u8FC7 <code dir="auto">position</code> \u5B57\u6BB5\u7CBE\u786E\u63A7\u5236\u6BCF\u4E2A\u53C2\u6570\u5728\u8BF7\u6C42\u4E2D\u7684\u4F4D\u7F6E\u3002\u8FD9\u4F7F\u60A8\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u6784\u5EFA API \u8BF7\u6C42\uFF0C\u4F8B\u5982\u540C\u65F6\u4F7F\u7528\u8DEF\u5F84\u53C2\u6570\u3001\u67E5\u8BE2\u53C2\u6570\u548C\u8BF7\u6C42\u4F53\u53C2\u6570\u3002</p>
<h3 id="\u652F\u6301\u7684\u4F4D\u7F6E\u7C7B\u578B">\u652F\u6301\u7684\u4F4D\u7F6E\u7C7B\u578B</h3>
<ul>
<li><strong>query</strong>: \u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D</li>
<li><strong>path</strong>: \u53C2\u6570\u5C06\u66FF\u6362 URL \u4E2D\u7684\u8DEF\u5F84\u5360\u4F4D\u7B26\uFF0C\u4F8B\u5982 <code dir="auto">/pet/{petId}</code> \u4E2D\u7684 <code dir="auto">{petId}</code></li>
<li><strong>header</strong>: \u53C2\u6570\u5C06\u4F5C\u4E3A HTTP \u5934\u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D</li>
<li><strong>cookie</strong>: \u53C2\u6570\u5C06\u4F5C\u4E3A Cookie \u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D</li>
<li><strong>body</strong>: \u53C2\u6570\u5C06\u6DFB\u52A0\u5230\u8BF7\u6C42\u4F53\u4E2D\uFF08\u6839\u636E\u5185\u5BB9\u7C7B\u578B\u81EA\u52A8\u683C\u5F0F\u5316\u4E3A JSON \u6216\u8868\u5355\uFF09</li>
</ul>
<h3 id="\u4F7F\u7528\u793A\u4F8B">\u4F7F\u7528\u793A\u4F8B</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">petId</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5BA0\u7269ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">path</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8BA4\u8BC1\u4EE4\u724C"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sessionId</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F1A\u8BDDID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cookie</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tags</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6807\u7B7E\u5217\u8868"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">body</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="args:\x7F- name: petId\x7F  description: &#x22;\u5BA0\u7269ID&#x22;\x7F  type: string\x7F  required: true\x7F  position: path\x7F- name: token\x7F  description: &#x22;\u8BA4\u8BC1\u4EE4\u724C&#x22;\x7F  type: string\x7F  required: true\x7F  position: header\x7F- name: sessionId\x7F  description: &#x22;\u4F1A\u8BDDID&#x22;\x7F  type: string\x7F  position: cookie\x7F- name: limit\x7F  description: &#x22;\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF&#x22;\x7F  type: integer\x7F  default: 10\x7F  position: query\x7F- name: tags\x7F  description: &#x22;\u6807\u7B7E\u5217\u8868&#x22;\x7F  type: array\x7F  position: body"><div></div></button></div></figure></div>
<p>\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF1A</p>
<ul>
<li><code dir="auto">petId</code> \u5C06\u66FF\u6362 URL \u4E2D\u7684 <code dir="auto">{petId}</code> \u5360\u4F4D\u7B26</li>
<li><code dir="auto">token</code> \u5C06\u4F5C\u4E3A HTTP \u5934\u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D</li>
<li><code dir="auto">sessionId</code> \u5C06\u4F5C\u4E3A Cookie \u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D</li>
<li><code dir="auto">limit</code> \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D</li>
<li><code dir="auto">tags</code> \u5C06\u6DFB\u52A0\u5230\u8BF7\u6C42\u4F53\u4E2D</li>
</ul>
<h3 id="\u4E0E\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\u7684\u5173\u7CFB">\u4E0E\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\u7684\u5173\u7CFB</h3>
<p>\u5F53\u4F7F\u7528 <code dir="auto">position</code> \u6307\u5B9A\u53C2\u6570\u4F4D\u7F6E\u65F6\uFF0C\u8FD9\u4E9B\u53C2\u6570\u5C06\u6309\u7167\u6307\u5B9A\u7684\u4F4D\u7F6E\u5904\u7406\uFF0C\u800C\u4E0D\u4F1A\u53D7\u5230\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\uFF08<code dir="auto">argsToJsonBody</code>\u3001<code dir="auto">argsToUrlParam</code>\u3001<code dir="auto">argsToFormBody</code>\uFF09\u7684\u5F71\u54CD\u3002\u53EA\u6709\u672A\u6307\u5B9A <code dir="auto">position</code> \u7684\u53C2\u6570\u624D\u4F1A\u53D7\u5230\u8FD9\u4E9B\u6279\u91CF\u9009\u9879\u7684\u5F71\u54CD\u3002</p>
<p>\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u540C\u65F6\u4F7F\u7528\u4E86 <code dir="auto">position</code> \u548C <code dir="auto">argsToJsonBody</code>\uFF1A</p>
<ul>
<li>\u6307\u5B9A\u4E86 <code dir="auto">position: query</code> \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 URL \u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D</li>
<li>\u6307\u5B9A\u4E86 <code dir="auto">position: header</code> \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 HTTP \u5934\u4E2D</li>
<li>\u6307\u5B9A\u4E86 <code dir="auto">position: path</code> \u7684\u53C2\u6570\u4F1A\u66FF\u6362 URL \u4E2D\u7684\u5360\u4F4D\u7B26</li>
<li>\u6307\u5B9A\u4E86 <code dir="auto">position: cookie</code> \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 Cookie \u4E2D</li>
<li>\u6307\u5B9A\u4E86 <code dir="auto">position: body</code> \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 JSON \u8BF7\u6C42\u4F53\u4E2D</li>
<li>\u672A\u6307\u5B9A <code dir="auto">position</code> \u7684\u53C2\u6570\u4F1A\u901A\u8FC7 <code dir="auto">argsToJsonBody</code> \u6DFB\u52A0\u5230 JSON \u8BF7\u6C42\u4F53\u4E2D</li>
</ul>
<p>\u6B64\u5916\uFF0C\u5982\u679C\u5728 <code dir="auto">requestTemplate</code> \u4E2D\u660E\u786E\u6307\u5B9A\u4E86 <code dir="auto">body</code>\uFF0C\u5219\u6240\u6709 <code dir="auto">position: body</code> \u7684\u53C2\u6570\u90FD\u5C06\u88AB\u5FFD\u7565\uFF0C\u4EE5\u907F\u514D\u51B2\u7A81\u3002</p>
<h2 id="\u8BF7\u6C42\u53C2\u6570\u4F20\u9012\u65B9\u5F0F">\u8BF7\u6C42\u53C2\u6570\u4F20\u9012\u65B9\u5F0F</h2>
<p>\u9664\u4E86\u4F7F\u7528 <code dir="auto">position</code> \u7CBE\u786E\u63A7\u5236\u6BCF\u4E2A\u53C2\u6570\u7684\u4F4D\u7F6E\u5916\uFF0CREST-to-MCP \u5DE5\u5177\u8FD8\u652F\u6301\u56DB\u79CD\u6279\u91CF\u53C2\u6570\u5904\u7406\u65B9\u5F0F\uFF0C\u8FD9\u4E9B\u9009\u9879\u662F<strong>\u4E92\u65A5\u7684</strong>\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD\uFF1A</p>
<ol>
<li>
<p><strong>body</strong>: \u4F7F\u7528\u6A21\u677F\u624B\u52A8\u6784\u5EFA\u8BF7\u6C42\u4F53\u3002\u8FD9\u662F\u6700\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u5141\u8BB8\u60A8\u5B8C\u5168\u63A7\u5236\u8BF7\u6C42\u4F53\u7684\u683C\u5F0F\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"query": "{{.args.query}}",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"filters": {{toJson .args.filters}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"options": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"limit": {{.args.limit}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  body: |\x7F    {\x7F      &#x22;query&#x22;: &#x22;{{.args.query}}&#x22;,\x7F      &#x22;filters&#x22;: {{toJson .args.filters}},\x7F      &#x22;options&#x22;: {\x7F        &#x22;limit&#x22;: {{.args.limit}}\x7F      }\x7F    }"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToJsonBody</strong>: \u5F53\u8BBE\u7F6E\u4E3A <code dir="auto">true</code> \u65F6\uFF0C\u672A\u6307\u5B9A <code dir="auto">position</code> \u7684\u53C2\u6570\u5C06\u76F4\u63A5\u4F5C\u4E3A JSON \u5BF9\u8C61\u53D1\u9001\u5230\u8BF7\u6C42\u4F53\u4E2D\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0 <code dir="auto">Content-Type: application/json; charset=utf-8</code> \u5934\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToJsonBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToJsonBody: true"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToUrlParam</strong>: \u5F53\u8BBE\u7F6E\u4E3A <code dir="auto">true</code> \u65F6\uFF0C\u672A\u6307\u5B9A <code dir="auto">position</code> \u7684\u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToUrlParam: true"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>argsToFormBody</strong>: \u5F53\u8BBE\u7F6E\u4E3A <code dir="auto">true</code> \u65F6\uFF0C\u672A\u6307\u5B9A <code dir="auto">position</code> \u7684\u53C2\u6570\u5C06\u4EE5 <code dir="auto">application/x-www-form-urlencoded</code> \u683C\u5F0F\u7F16\u7801\u5728\u8BF7\u6C42\u4F53\u4E2D\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0\u76F8\u5E94\u7684 Content-Type \u5934\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">argsToFormBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="requestTemplate:\x7F  argsToFormBody: true"><div></div></button></div></figure></div>
</li>
</ol>
<p>\u8FD9\u4E9B\u9009\u9879\u7B80\u5316\u4E86\u5E38\u89C1 API \u8C03\u7528\u6A21\u5F0F\u7684\u914D\u7F6E\uFF0C\u65E0\u9700\u624B\u52A8\u6784\u5EFA\u8BF7\u6C42\u4F53\u6216 URL \u53C2\u6570\u3002\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u56DB\u4E2A\u9009\u9879\u662F\u4E92\u65A5\u7684\uFF0C\u5728\u4E00\u4E2A\u5DE5\u5177\u914D\u7F6E\u4E2D\u53EA\u80FD\u4F7F\u7528\u5176\u4E2D\u4E00\u79CD\u3002\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86\u591A\u4E2A\u9009\u9879\uFF0C\u7CFB\u7EDF\u4F1A\u62A5\u9519\u5E76\u62D2\u7EDD\u52A0\u8F7D\u8BE5\u5DE5\u5177\u914D\u7F6E\u3002</p>
<h2 id="\u6A21\u677F\u8BED\u6CD5">\u6A21\u677F\u8BED\u6CD5</h2>
<p>REST-to-MCP \u529F\u80FD\u4F7F\u7528 <a href="https://github.com/higress-group/gjson_template" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Template</a> \u5E93\u8FDB\u884C\u6A21\u677F\u6E32\u67D3\uFF0C\u5B83\u7ED3\u5408\u4E86 Go \u7684\u6A21\u677F\u8BED\u6CD5\u548C GJSON \u7684\u5F3A\u5927\u8DEF\u5F84\u8BED\u6CD5\uFF1A</p>
<h3 id="\u8BF7\u6C42\u6A21\u677F">\u8BF7\u6C42\u6A21\u677F</h3>
<p>\u7528\u4E8E\u6784\u9020 HTTP \u8BF7\u6C42 URL\u3001\u5934\u90E8\u548C\u6B63\u6587\uFF1A</p>
<ul>
<li>\u8BBF\u95EE\u914D\u7F6E\u503C\uFF1A<code dir="auto">.config.\u5B57\u6BB5\u540D</code></li>
<li>\u8BBF\u95EE\u5DE5\u5177\u53C2\u6570\uFF1A<code dir="auto">.args.\u53C2\u6570\u540D</code></li>
</ul>
<h3 id="\u54CD\u5E94\u6A21\u677F">\u54CD\u5E94\u6A21\u677F</h3>
<p>\u7528\u4E8E\u5C06 HTTP \u54CD\u5E94\u8F6C\u6362\u4E3A\u9002\u5408 AI \u6D88\u8D39\u7684\u683C\u5F0F\uFF1A</p>
<ul>
<li>\u4F7F\u7528 GJSON \u8DEF\u5F84\u8BED\u6CD5\u8BBF\u95EE JSON \u54CD\u5E94\u5B57\u6BB5</li>
<li>\u4F7F\u7528\u6A21\u677F\u51FD\u6570\u5982 <code dir="auto">add</code>\u3001<code dir="auto">upper</code>\u3001<code dir="auto">lower</code> \u7B49</li>
<li>\u4F7F\u7528\u63A7\u5236\u7ED3\u6784\u5982 <code dir="auto">if</code>\u3001<code dir="auto">range</code> \u7B49</li>
</ul>
<p>GJSON Template \u5305\u542B\u4E86\u6240\u6709 <a href="https://github.com/Masterminds/sprig" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Sprig</a> \u7684\u51FD\u6570\uFF0C\u63D0\u4F9B\u4E86 70+ \u79CD\u7528\u4E8E\u5B57\u7B26\u4E32\u64CD\u4F5C\u3001\u6570\u5B66\u8FD0\u7B97\u3001\u65E5\u671F\u683C\u5F0F\u5316\u7B49\u7684\u6A21\u677F\u51FD\u6570\uFF0C\u529F\u80FD\u7B49\u540C\u4E8E Helm \u7684\u6A21\u677F\u80FD\u529B\u3002</p>
<p>\u5E38\u7528\u7684 Sprig \u51FD\u6570\u5305\u62EC\uFF1A</p>
<ul>
<li><strong>\u5B57\u7B26\u4E32\u64CD\u4F5C</strong>\uFF1A<code dir="auto">trim</code>\u3001<code dir="auto">upper</code>\u3001<code dir="auto">lower</code>\u3001<code dir="auto">replace</code>\u3001<code dir="auto">plural</code>\u3001<code dir="auto">nospace</code></li>
<li><strong>\u6570\u5B66\u8FD0\u7B97</strong>\uFF1A<code dir="auto">add</code>\u3001<code dir="auto">sub</code>\u3001<code dir="auto">mul</code>\u3001<code dir="auto">div</code>\u3001<code dir="auto">max</code>\u3001<code dir="auto">min</code></li>
<li><strong>\u65E5\u671F\u683C\u5F0F\u5316</strong>\uFF1A<code dir="auto">now</code>\u3001<code dir="auto">date</code>\u3001<code dir="auto">dateInZone</code>\u3001<code dir="auto">dateModify</code></li>
<li><strong>\u5217\u8868\u64CD\u4F5C</strong>\uFF1A<code dir="auto">list</code>\u3001<code dir="auto">first</code>\u3001<code dir="auto">last</code>\u3001<code dir="auto">uniq</code>\u3001<code dir="auto">sortAlpha</code></li>
<li><strong>\u5B57\u5178\u64CD\u4F5C</strong>\uFF1A<code dir="auto">dict</code>\u3001<code dir="auto">get</code>\u3001<code dir="auto">set</code>\u3001<code dir="auto">hasKey</code>\u3001<code dir="auto">pluck</code></li>
<li><strong>\u6D41\u7A0B\u63A7\u5236</strong>\uFF1A<code dir="auto">ternary</code>\u3001<code dir="auto">default</code>\u3001<code dir="auto">empty</code>\u3001<code dir="auto">coalesce</code></li>
<li><strong>\u7C7B\u578B\u8F6C\u6362</strong>\uFF1A<code dir="auto">toString</code>\u3001<code dir="auto">toJson</code>\u3001<code dir="auto">toPrettyJson</code>\u3001<code dir="auto">toRawJson</code></li>
<li><strong>\u7F16\u7801/\u89E3\u7801</strong>\uFF1A<code dir="auto">b64enc</code>\u3001<code dir="auto">b64dec</code>\u3001<code dir="auto">urlquery</code>\u3001<code dir="auto">urlqueryescape</code></li>
<li><strong>UUID \u751F\u6210</strong>\uFF1A<code dir="auto">uuidv4</code></li>
</ul>
<p>\u6709\u5173\u6240\u6709\u53EF\u7528\u51FD\u6570\u7684\u5B8C\u6574\u53C2\u8003\uFF0C\u8BF7\u53C2\u9605 <a href="https://helm.sh/docs/chart_template_guide/function_list/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Helm \u51FD\u6570\u6587\u6863</a>\uFF0C\u56E0\u4E3A GJSON Template \u5305\u542B\u4E86\u76F8\u540C\u7684\u51FD\u6570\u96C6\u3002</p>
<h3 id="gjson-\u8DEF\u5F84\u8BED\u6CD5">GJSON \u8DEF\u5F84\u8BED\u6CD5</h3>
<p>GJSON \u63D0\u4F9B\u4E86\u5F3A\u5927\u7684 JSON \u67E5\u8BE2\u80FD\u529B\uFF1A</p>
<ul>
<li><strong>\u70B9\u8868\u793A\u6CD5</strong>\uFF1A<code dir="auto">address.city</code></li>
<li><strong>\u6570\u7EC4\u7D22\u5F15</strong>\uFF1A<code dir="auto">users.0.name</code></li>
<li><strong>\u6570\u7EC4\u8FED\u4EE3</strong>\uFF1A<code dir="auto">users.#.name</code></li>
<li><strong>\u6570\u7EC4\u8FC7\u6EE4</strong>\uFF1A<code dir="auto">users.#(age>=30)#.name</code></li>
<li><strong>\u4FEE\u9970\u7B26</strong>\uFF1A<code dir="auto">users.@reverse.#.name</code></li>
<li><strong>\u591A\u8DEF\u5F84</strong>\uFF1A<code dir="auto">{name:users.0.name,count:users.#}</code></li>
<li><strong>\u8F6C\u4E49\u5B57\u7B26</strong>\uFF1A<code dir="auto">path.with\\.dot</code></li>
</ul>
<p>\u5BF9\u4E8E\u66F4\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code dir="auto">gjson</code> \u51FD\u6570\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- \u4F7F\u7528 gjson \u51FD\u6570\u8FDB\u884C\u590D\u6742\u67E5\u8BE2 --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u6D3B\u8DC3\u7528\u6237: {{gjson "users.#(active==true)#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- \u5E26\u6709\u591A\u4E2A\u6761\u4EF6\u7684\u6570\u7EC4\u8FC7\u6EE4 --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">30\u5C81\u4EE5\u4E0A\u7684\u6D3B\u8DC3\u5F00\u53D1\u8005: {{gjson "users.#(active==true &#x26;&#x26; age>30)#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- \u4F7F\u7528\u4FEE\u9970\u7B26 --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u7528\u6237\u540D\uFF08\u5012\u5E8F\uFF09: {{gjson "users.@reverse.#.name"}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">&#x3C;!-- \u8FED\u4EE3\u8FC7\u6EE4\u7ED3\u679C --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u7BA1\u7406\u5458:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- {{$user.name}} ({{$user.age}})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<!-- \u4F7F\u7528 gjson \u51FD\u6570\u8FDB\u884C\u590D\u6742\u67E5\u8BE2 -->\x7F\u6D3B\u8DC3\u7528\u6237: {{gjson &#x22;users.#(active==true)#.name&#x22;}}\x7F\x7F<!-- \u5E26\u6709\u591A\u4E2A\u6761\u4EF6\u7684\u6570\u7EC4\u8FC7\u6EE4 -->\x7F30\u5C81\u4EE5\u4E0A\u7684\u6D3B\u8DC3\u5F00\u53D1\u8005: {{gjson &#x22;users.#(active==true &#x26;&#x26; age>30)#.name&#x22;}}\x7F\x7F<!-- \u4F7F\u7528\u4FEE\u9970\u7B26 -->\x7F\u7528\u6237\u540D\uFF08\u5012\u5E8F\uFF09: {{gjson &#x22;users.@reverse.#.name&#x22;}}\x7F\x7F<!-- \u8FED\u4EE3\u8FC7\u6EE4\u7ED3\u679C -->\x7F\u7BA1\u7406\u5458:\x7F{{range $user := gjson &#x22;users.#(roles.#(==admin)>0)#&#x22;}}\x7F  - {{$user.name}} ({{$user.age}})\x7F{{end}}"><div></div></button></div></figure></div>
<p>\u5B8C\u6574\u7684 GJSON \u8DEF\u5F84\u8BED\u6CD5\u53C2\u8003\u53EF\u67E5\u770B <a href="https://github.com/tidwall/gjson#path-syntax" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON \u6587\u6863</a>\u3002</p>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u4F7F\u7528\u5185\u7F6E-mcp-\u670D\u52A1\u5668\u793A\u4F8B\u914D\u7F6E-quark-search">\u4F7F\u7528\u5185\u7F6E MCP \u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u914D\u7F6E quark-search</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"quark-search"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"xxxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;quark-search&#x22;\x7F  config:\x7F    apiKey: &#x22;xxxx&#x22;"><div></div></button></div></figure></div>
<p>\u6B64\u914D\u7F6E\u4F7F\u7528\u4E86 Higress \u5185\u7F6E\u7684 quark-search MCP \u670D\u52A1\u5668\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u670D\u52A1\u5668\u540D\u79F0\u548C\u5FC5\u8981\u7684\u914D\u7F6E\uFF08\u5982 API \u5BC6\u94A5\uFF09\uFF0C\u65E0\u9700\u914D\u7F6E tools \u5B57\u6BB5\uFF0C\u56E0\u4E3A\u5DE5\u5177\u5DF2\u7ECF\u5728\u670D\u52A1\u5668\u4E2D\u9884\u5B9A\u4E49\u597D\u4E86\u3002</p>
<h3 id="mcp-\u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\u4EE3\u7406\u5230\u540E\u7AEF-mcp-\u670D\u52A1\u5668streamablehttp">MCP \u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668\uFF08StreamableHTTP\uFF09</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-mcpserver-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">transport</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u4F7F\u7528 StreamableHTTP \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com/mcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u7684\u9ED8\u8BA4\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u7F51\u5173\u5230\u540E\u7AEF\u7684\u9ED8\u8BA4\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Client-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Backend-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"backend-secret-key"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-secure-product</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u83B7\u53D6\u5B89\u5168\u4EA7\u54C1\u4FE1\u606F"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4EA7\u54C1ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u5DE5\u5177\u7EA7\u522B\u7684\u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1\uFF0C\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"special-key-for-this-tool"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-mcpserver-proxy\x7F  type: mcp-proxy\x7F  transport: http  # \u4F7F\u7528 StreamableHTTP \u534F\u8BAE\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com/mcp&#x22;\x7F  timeout: 5000\x7F  defaultDownstreamSecurity: # \u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u7684\u9ED8\u8BA4\u8BA4\u8BC1\x7F    id: ClientApiKey\x7F  defaultUpstreamSecurity: # \u7F51\u5173\u5230\u540E\u7AEF\u7684\u9ED8\u8BA4\u8BA4\u8BC1\x7F    id: BackendApiKey\x7F  securitySchemes:\x7F  - id: ClientApiKey\x7F    type: apiKey\x7F    in: header\x7F    name: X-Client-API-Key\x7F  - id: BackendApiKey\x7F    type: apiKey\x7F    in: header\x7F    name: X-Backend-API-Key\x7F    defaultCredential: &#x22;backend-secret-key&#x22;\x7F\x7Ftools:\x7F- name: get-secure-product\x7F  description: &#x22;\u83B7\u53D6\u5B89\u5168\u4EA7\u54C1\u4FE1\u606F&#x22;\x7F  args:\x7F  - name: product_id\x7F    description: &#x22;\u4EA7\u54C1ID&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # \u5DE5\u5177\u7EA7\u522B\u7684\u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1\uFF0C\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E\x7F      id: BackendApiKey\x7F      credential: &#x22;special-key-for-this-tool&#x22;"><div></div></button></div></figure></div>
<p>\u6B64\u914D\u7F6E\u521B\u5EFA\u4E86\u4E00\u4E2A MCP \u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5B83\uFF1A</p>
<ol>
<li>\u4F7F\u7528 StreamableHTTP \u534F\u8BAE\u5C06\u5BA2\u6237\u7AEF\u7684 MCP \u8BF7\u6C42\u4EE3\u7406\u5230 <code dir="auto">http://backend-mcp.example.com/mcp</code></li>
<li>\u4F7F\u7528\u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E\u5904\u7406 <code dir="auto">tools/list</code> \u7B49\u901A\u7528\u8BF7\u6C42</li>
<li>\u5DE5\u5177\u7EA7\u522B\u7684\u8BA4\u8BC1\u914D\u7F6E\u53EF\u4EE5\u8986\u76D6\u9ED8\u8BA4\u8BBE\u7F6E</li>
<li>\u652F\u6301\u900F\u660E\u8BA4\u8BC1\u548C\u51ED\u8BC1\u8986\u76D6</li>
</ol>
<h3 id="mcp-\u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\u4F7F\u7528-sse-\u534F\u8BAE">MCP \u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u4F7F\u7528 SSE \u534F\u8BAE</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-sse-mcpserver-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">transport</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sse</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u4F7F\u7528 SSE \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># SSE \u8FDE\u63A5\u53EF\u80FD\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allowTools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">weather-tool</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">news-tool</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-sse-mcpserver-proxy\x7F  type: mcp-proxy\x7F  transport: sse  # \u4F7F\u7528 SSE \u534F\u8BAE\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com&#x22;\x7F  timeout: 10000  # SSE \u8FDE\u63A5\u53EF\u80FD\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4\x7F  defaultDownstreamSecurity:\x7F    id: ClientBearer\x7F  defaultUpstreamSecurity:\x7F    id: BackendBearer\x7F  securitySchemes:\x7F  - id: ClientBearer\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendBearer\x7F    type: http\x7F    scheme: bearer\x7F\x7FallowTools:\x7F- weather-tool\x7F- news-tool"><div></div></button></div></figure></div>
<p>\u6B64\u914D\u7F6E\u521B\u5EFA\u4E86\u4E00\u4E2A\u4F7F\u7528 SSE \u534F\u8BAE\u7684 MCP \u4EE3\u7406\u670D\u52A1\u5668\uFF1A</p>
<ol>
<li>\u4F7F\u7528 SSE \u6D41\u5F0F\u534F\u8BAE\u4E0E\u540E\u7AEF\u901A\u4FE1\uFF0C\u652F\u6301\u5B9E\u65F6\u6D88\u606F\u63A8\u9001</li>
<li>\u81EA\u52A8\u5904\u7406 SSE \u8FDE\u63A5\u7684\u751F\u547D\u5468\u671F\uFF08\u53D1\u73B0\u3001\u521D\u59CB\u5316\u3001\u901A\u77E5\u3001\u5DE5\u5177\u8C03\u7528\uFF09</li>
<li>\u539F\u59CB\u8BF7\u6C42\u5934\u4F1A\u81EA\u52A8\u590D\u5236\u5230\u540E\u7AEF\u8C03\u7528\u4E2D</li>
<li>\u652F\u6301 <code dir="auto">allowTools</code> \u8FC7\u6EE4\u53EF\u7528\u5DE5\u5177\u5217\u8868</li>
<li>\u8BA4\u8BC1\u5934\u4F1A\u6B63\u786E\u4F20\u9012\u5230\u6240\u6709 SSE \u8BF7\u6C42\u4E2D</li>
</ol>
<h3 id="mcp-\u4EE3\u7406\u670D\u52A1\u5668\u9AD8\u7EA7\u793A\u4F8B\u900F\u660E\u8BA4\u8BC1">MCP \u4EE3\u7406\u670D\u52A1\u5668\u9AD8\u7EA7\u793A\u4F8B\uFF1A\u900F\u660E\u8BA4\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-secure-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.backend-mcp.com/v1/mcp"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u9ED8\u8BA4\u8981\u6C42\u5BA2\u6237\u7AEF\u63D0\u4F9B Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u542F\u7528\u900F\u660E\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u9ED8\u8BA4\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u8C03\u7528\u540E\u7AEF</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u5BA2\u6237\u7AEF\u4F7F\u7528 Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u540E\u7AEF\u4E5F\u4F7F\u7528 Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AdminApiKey</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u7BA1\u7406\u5458\u5DE5\u5177\u4F7F\u7528\u7279\u6B8A API Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Admin-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"admin-secret-key"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-user-data</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u83B7\u53D6\u7528\u6237\u6570\u636E\uFF08\u4F7F\u7528\u900F\u4F20\u8BA4\u8BC1\uFF09"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u7528\u6237ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u6B64\u5DE5\u5177\u4F7F\u7528\u9ED8\u8BA4\u7684\u900F\u4F20\u8BA4\u8BC1\uFF0C\u5BA2\u6237\u7AEF\u7684 Bearer Token \u4F1A\u4F20\u9012\u7ED9\u540E\u7AEF</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">admin-operation</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6267\u884C\u7BA1\u7406\u5458\u64CD\u4F5C\uFF08\u4F7F\u7528\u7279\u6B8A\u8BA4\u8BC1\uFF09"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u5DE5\u5177\u7EA7\u522B\u5BA2\u6237\u7AEF\u8BA4\u8BC1\uFF1A\u4ECD\u8981\u6C42\u5BA2\u6237\u7AEF\u63D0\u4F9B Bearer Token</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u4E0D\u900F\u4F20\u5BA2\u6237\u7AEF\u51ED\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">operation</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u64CD\u4F5C\u7C7B\u578B"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u5DE5\u5177\u7EA7\u522B\u540E\u7AEF\u8BA4\u8BC1\uFF1A\u4F7F\u7528\u7BA1\u7406\u5458 API Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AdminApiKey</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-secure-proxy\x7F  type: mcp-proxy\x7F  mcpServerURL: &#x22;https://api.backend-mcp.com/v1/mcp&#x22;\x7F  timeout: 10000\x7F  defaultDownstreamSecurity: # \u9ED8\u8BA4\u8981\u6C42\u5BA2\u6237\u7AEF\u63D0\u4F9B Bearer Token\x7F    id: ClientBearer\x7F    passthrough: true # \u542F\u7528\u900F\u660E\u8BA4\u8BC1\x7F  defaultUpstreamSecurity: # \u9ED8\u8BA4\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u8C03\u7528\u540E\u7AEF\x7F    id: BackendBearer\x7F  securitySchemes:\x7F  - id: ClientBearer # \u5BA2\u6237\u7AEF\u4F7F\u7528 Bearer Token\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendBearer # \u540E\u7AEF\u4E5F\u4F7F\u7528 Bearer Token\x7F    type: http\x7F    scheme: bearer\x7F  - id: AdminApiKey # \u7BA1\u7406\u5458\u5DE5\u5177\u4F7F\u7528\u7279\u6B8A API Key\x7F    type: apiKey\x7F    in: header\x7F    name: X-Admin-Key\x7F    defaultCredential: &#x22;admin-secret-key&#x22;\x7F\x7Ftools:\x7F- name: get-user-data\x7F  description: &#x22;\u83B7\u53D6\u7528\u6237\u6570\u636E\uFF08\u4F7F\u7528\u900F\u4F20\u8BA4\u8BC1\uFF09&#x22;\x7F  args:\x7F  - name: user_id\x7F    description: &#x22;\u7528\u6237ID&#x22;\x7F    type: string\x7F    required: true\x7F  # \u6B64\u5DE5\u5177\u4F7F\u7528\u9ED8\u8BA4\u7684\u900F\u4F20\u8BA4\u8BC1\uFF0C\u5BA2\u6237\u7AEF\u7684 Bearer Token \u4F1A\u4F20\u9012\u7ED9\u540E\u7AEF\x7F\x7F- name: admin-operation\x7F  description: &#x22;\u6267\u884C\u7BA1\u7406\u5458\u64CD\u4F5C\uFF08\u4F7F\u7528\u7279\u6B8A\u8BA4\u8BC1\uFF09&#x22;\x7F  security: # \u5DE5\u5177\u7EA7\u522B\u5BA2\u6237\u7AEF\u8BA4\u8BC1\uFF1A\u4ECD\u8981\u6C42\u5BA2\u6237\u7AEF\u63D0\u4F9B Bearer Token\x7F    id: ClientBearer\x7F    passthrough: false # \u4E0D\u900F\u4F20\u5BA2\u6237\u7AEF\u51ED\u8BC1\x7F  args:\x7F  - name: operation\x7F    description: &#x22;\u64CD\u4F5C\u7C7B\u578B&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # \u5DE5\u5177\u7EA7\u522B\u540E\u7AEF\u8BA4\u8BC1\uFF1A\u4F7F\u7528\u7BA1\u7406\u5458 API Key\x7F      id: AdminApiKey"><div></div></button></div></figure></div>
<p>\u6B64\u9AD8\u7EA7\u914D\u7F6E\u5C55\u793A\u4E86\uFF1A</p>
<ol>
<li><strong>\u900F\u660E\u8BA4\u8BC1</strong>\uFF1A<code dir="auto">get-user-data</code> \u5DE5\u5177\u4F1A\u5C06\u5BA2\u6237\u7AEF\u7684 Bearer Token \u900F\u4F20\u7ED9\u540E\u7AEF</li>
<li><strong>\u6DF7\u5408\u8BA4\u8BC1</strong>\uFF1A<code dir="auto">admin-operation</code> \u5DE5\u5177\u8981\u6C42\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u4F46\u4F7F\u7528\u4E0D\u540C\u7684\u540E\u7AEF\u8BA4\u8BC1</li>
<li><strong>\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u914D\u7F6E</strong>\uFF1A\u4E3A\u6240\u6709 <code dir="auto">tools/list</code> \u8BF7\u6C42\u63D0\u4F9B\u7EDF\u4E00\u7684\u8BA4\u8BC1\u7B56\u7565</li>
<li><strong>\u7075\u6D3B\u7684\u8BA4\u8BC1\u65B9\u6848</strong>\uFF1A\u652F\u6301 HTTP Bearer Token \u548C API Key \u4E24\u79CD\u8BA4\u8BC1\u65B9\u5F0F</li>
</ol>
<h3 id="\u57FA\u7840\u914D\u7F6E\u793A\u4F8B\u8F6C\u6362\u9AD8\u5FB7\u5730\u56FE-api">\u57FA\u7840\u914D\u7F6E\u793A\u4F8B\uFF1A\u8F6C\u6362\u9AD8\u5FB7\u5730\u56FE API</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rest-amap-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-api-key-here</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">maps-geo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5C06\u8BE6\u7EC6\u7684\u7ED3\u6784\u5316\u5730\u5740\u8F6C\u6362\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807\u3002\u652F\u6301\u5BF9\u5730\u6807\u6027\u540D\u80DC\u666F\u533A\u3001\u5EFA\u7B51\u7269\u540D\u79F0\u89E3\u6790\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">address</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5F85\u89E3\u6790\u7684\u7ED3\u6784\u5316\u5730\u5740\u4FE1\u606F"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">city</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6307\u5B9A\u67E5\u8BE2\u7684\u57CE\u5E02"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">output</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8F93\u51FA\u683C\u5F0F"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"json"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"xml"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"json"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://restapi.amap.com/v3/geocode/geo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># \u5730\u7406\u7F16\u7801\u4FE1\u606F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- range $index, $geo := .geocodes }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">## \u5730\u70B9 {{add $index 1}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u56FD\u5BB6**: {{ $geo.country }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u7701\u4EFD**: {{ $geo.province }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u57CE\u5E02**: {{ $geo.city }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u57CE\u5E02\u4EE3\u7801**: {{ $geo.citycode }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u533A/\u53BF**: {{ $geo.district }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u8857\u9053**: {{ $geo.street }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u95E8\u724C\u53F7**: {{ $geo.number }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u884C\u653F\u7F16\u7801**: {{ $geo.adcode }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u5750\u6807**: {{ $geo.location }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u7EA7\u522B**: {{ $geo.level }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: rest-amap-server\x7F  config:\x7F    apiKey: your-api-key-here\x7Ftools:\x7F- name: maps-geo\x7F  description: &#x22;\u5C06\u8BE6\u7EC6\u7684\u7ED3\u6784\u5316\u5730\u5740\u8F6C\u6362\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807\u3002\u652F\u6301\u5BF9\u5730\u6807\u6027\u540D\u80DC\u666F\u533A\u3001\u5EFA\u7B51\u7269\u540D\u79F0\u89E3\u6790\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807&#x22;\x7F  args:\x7F  - name: address\x7F    description: &#x22;\u5F85\u89E3\u6790\u7684\u7ED3\u6784\u5316\u5730\u5740\u4FE1\u606F&#x22;\x7F    type: string\x7F    required: true\x7F  - name: city\x7F    description: &#x22;\u6307\u5B9A\u67E5\u8BE2\u7684\u57CE\u5E02&#x22;\x7F    type: string\x7F    required: false\x7F  - name: output\x7F    description: &#x22;\u8F93\u51FA\u683C\u5F0F&#x22;\x7F    type: string\x7F    enum: [&#x22;json&#x22;, &#x22;xml&#x22;]\x7F    default: &#x22;json&#x22;\x7F  requestTemplate:\x7F    url: &#x22;https://restapi.amap.com/v3/geocode/geo&#x22;\x7F    method: GET\x7F    argsToUrlParam: true\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # \u5730\u7406\u7F16\u7801\u4FE1\u606F\x7F      {{- range $index, $geo := .geocodes }}\x7F      ## \u5730\u70B9 {{add $index 1}}\x7F\x7F      - **\u56FD\u5BB6**: {{ $geo.country }}\x7F      - **\u7701\u4EFD**: {{ $geo.province }}\x7F      - **\u57CE\u5E02**: {{ $geo.city }}\x7F      - **\u57CE\u5E02\u4EE3\u7801**: {{ $geo.citycode }}\x7F      - **\u533A/\u53BF**: {{ $geo.district }}\x7F      - **\u8857\u9053**: {{ $geo.street }}\x7F      - **\u95E8\u724C\u53F7**: {{ $geo.number }}\x7F      - **\u884C\u653F\u7F16\u7801**: {{ $geo.adcode }}\x7F      - **\u5750\u6807**: {{ $geo.location }}\x7F      - **\u7EA7\u522B**: {{ $geo.level }}\x7F      {{- end }}"><div></div></button></div></figure></div>
<p>\u6B64\u914D\u7F6E\u5C06\u9AD8\u5FB7\u5730\u56FE\u7684\u5730\u7406\u7F16\u7801 API \u8F6C\u6362\u4E3A AI \u53EF\u8C03\u7528\u7684\u5DE5\u5177\u3002\u5F53 AI \u8C03\u7528\u6B64\u5DE5\u5177\u65F6\uFF1A</p>
<ol>
<li>\u4F7F\u7528\u63D0\u4F9B\u7684\u5730\u5740\u548C\u57CE\u5E02\u53C2\u6570\u6784\u5EFA API \u8BF7\u6C42</li>
<li>\u8C03\u7528\u9AD8\u5FB7\u5730\u56FE API</li>
<li>\u5C06 JSON \u54CD\u5E94\u8F6C\u6362\u4E3A\u6613\u4E8E\u9605\u8BFB\u7684 Markdown \u683C\u5F0F</li>
<li>\u5C06\u683C\u5F0F\u5316\u540E\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9 AI \u52A9\u624B</li>
</ol>
<h3 id="\u9AD8\u7EA7\u914D\u7F6E\u793A\u4F8B\u5E26\u6709\u6761\u4EF6\u903B\u8F91\u7684\u590D\u6742\u54CD\u5E94\u5904\u7406">\u9AD8\u7EA7\u914D\u7F6E\u793A\u4F8B\uFF1A\u5E26\u6709\u6761\u4EF6\u903B\u8F91\u7684\u590D\u6742\u54CD\u5E94\u5904\u7406</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">weather-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-weather-api-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-weather</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u9884\u62A5\u4FE1\u606F"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">city</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u57CE\u5E02\u540D\u79F0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">days</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5929\u6570(1-7)"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">include_hourly</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u662F\u5426\u5305\u542B\u6BCF\u5C0F\u65F6\u9884\u62A5"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.weatherapi.com/v1/forecast.json"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># {{.location.name}}, {{.location.country}} \u5929\u6C14\u9884\u62A5</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**\u5F53\u524D\u6E29\u5EA6**: {{.current.temp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**\u4F53\u611F\u6E29\u5EA6**: {{.current.feelslike_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**\u5929\u6C14\u72B6\u51B5**: {{.current.condition.text}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**\u6E7F\u5EA6**: {{.current.humidity}}%</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">**\u98CE\u901F**: {{.current.wind_kph}} km/h</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">## \u672A\u6765\u9884\u62A5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{range $index, $day := .forecast.forecastday}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if gt $day.day.maxtemp_c 30}}**\u9AD8\u6E29\u9884\u8B66!**{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{if lt $day.day.mintemp_c 0}}**\u4F4E\u6E29\u9884\u8B66!**{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u6700\u9AD8\u6E29\u5EA6**: {{$day.day.maxtemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u6700\u4F4E\u6E29\u5EA6**: {{$day.day.mintemp_c}}\xB0C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u964D\u6C34\u6982\u7387**: {{$day.day.daily_chance_of_rain}}%</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **\u5929\u6C14\u72B6\u51B5**: {{$day.day.condition.text}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">#### \u5206\u65F6\u9884\u62A5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{range $hour := slice $day.hour 6 24 3}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: weather-api-server\x7F  config:\x7F    apiKey: your-weather-api-key\x7Ftools:\x7F- name: get-weather\x7F  description: &#x22;\u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u9884\u62A5\u4FE1\u606F&#x22;\x7F  args:\x7F  - name: city\x7F    description: &#x22;\u57CE\u5E02\u540D\u79F0&#x22;\x7F    type: string\x7F    required: true\x7F  - name: days\x7F    description: &#x22;\u5929\u6570(1-7)&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 3\x7F  - name: include_hourly\x7F    description: &#x22;\u662F\u5426\u5305\u542B\u6BCF\u5C0F\u65F6\u9884\u62A5&#x22;\x7F    type: boolean\x7F    default: true\x7F  requestTemplate:\x7F    url: &#x22;https://api.weatherapi.com/v1/forecast.json&#x22;\x7F    method: GET\x7F    argsToUrlParam: true\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # {{.location.name}}, {{.location.country}} \u5929\u6C14\u9884\u62A5\x7F\x7F      **\u5F53\u524D\u6E29\u5EA6**: {{.current.temp_c}}\xB0C\x7F      **\u4F53\u611F\u6E29\u5EA6**: {{.current.feelslike_c}}\xB0C\x7F      **\u5929\u6C14\u72B6\u51B5**: {{.current.condition.text}}\x7F      **\u6E7F\u5EA6**: {{.current.humidity}}%\x7F      **\u98CE\u901F**: {{.current.wind_kph}} km/h\x7F\x7F      ## \u672A\u6765\u9884\u62A5\x7F      {{range $index, $day := .forecast.forecastday}}\x7F      ### {{$day.date}} ({{dateFormat &#x22;Monday&#x22; $day.date_epoch | title}})\x7F\x7F      {{if gt $day.day.maxtemp_c 30}}**\u9AD8\u6E29\u9884\u8B66!**{{end}}\x7F      {{if lt $day.day.mintemp_c 0}}**\u4F4E\u6E29\u9884\u8B66!**{{end}}\x7F\x7F      - **\u6700\u9AD8\u6E29\u5EA6**: {{$day.day.maxtemp_c}}\xB0C\x7F      - **\u6700\u4F4E\u6E29\u5EA6**: {{$day.day.mintemp_c}}\xB0C\x7F      - **\u964D\u6C34\u6982\u7387**: {{$day.day.daily_chance_of_rain}}%\x7F      - **\u5929\u6C14\u72B6\u51B5**: {{$day.day.condition.text}}\x7F\x7F      #### \u5206\u65F6\u9884\u62A5\x7F      {{range $hour := slice $day.hour 6 24 3}}\x7F      - **{{dateFormat &#x22;15:04&#x22; $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}\x7F      {{end}}\x7F      {{end}}"><div></div></button></div></figure></div>
<p>\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A</p>
<ul>
<li>\u4F7F\u7528\u6761\u4EF6\u8BED\u53E5 (<code dir="auto">if</code>) \u8FDB\u884C\u6E29\u5EA6\u8B66\u544A</li>
<li>\u4F7F\u7528\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570 (<code dir="auto">dateFormat</code>)</li>
<li>\u4F7F\u7528\u6570\u7EC4\u5207\u7247 (<code dir="auto">slice</code>) \u9009\u62E9\u7279\u5B9A\u65F6\u95F4\u7684\u5929\u6C14</li>
<li>\u5D4C\u5957\u5FAA\u73AF\u904D\u5386\u591A\u5929\u548C\u591A\u65F6\u6BB5\u7684\u5929\u6C14\u6570\u636E</li>
</ul>
<h3 id="\u4F7F\u7528-prependbody-\u548C-appendbody-\u7684\u793A\u4F8Bopenapi-\u8F6C\u6362">\u4F7F\u7528 PrependBody \u548C AppendBody \u7684\u793A\u4F8B\uFF1AOpenAPI \u8F6C\u6362</h3>
<p>\u5F53\u60A8\u60F3\u4FDD\u7559\u539F\u59CB API \u54CD\u5E94\u4F46\u6DFB\u52A0\u989D\u5916\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\u65F6\uFF0C<code dir="auto">prependBody</code> \u548C <code dir="auto">appendBody</code> \u5B57\u6BB5\u975E\u5E38\u6709\u7528\u3002\u8FD9\u5728\u5C06 OpenAPI/Swagger \u89C4\u8303\u8F6C\u6362\u4E3A MCP \u5DE5\u5177\u65F6\u7279\u522B\u6709\u4EF7\u503C\uFF0C\u56E0\u4E3A\u60A8\u53EF\u4EE5\u4FDD\u7559\u539F\u59CB JSON \u54CD\u5E94\uFF0C\u540C\u65F6\u4E3A AI \u52A9\u624B\u63D0\u4F9B\u5B57\u6BB5\u542B\u4E49\u7684\u8BF4\u660E\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-api-key-here</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-product</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u83B7\u53D6\u4EA7\u54C1\u8BE6\u7EC6\u4FE1\u606F"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">product_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4EA7\u54C1ID"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/products/{{.args.product_id}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Authorization</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Bearer {{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">prependBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># \u4EA7\u54C1\u4FE1\u606F</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">\u4EE5\u4E0B\u662F\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5JSON\u683C\u5F0F\u8FD4\u56DE\u3002\u5B57\u6BB5\u8BF4\u660E\uFF1A</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **id**: \u4EA7\u54C1\u552F\u4E00\u6807\u8BC6\u7B26</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **name**: \u4EA7\u54C1\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **description**: \u4EA7\u54C1\u63CF\u8FF0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **price**: \u4EA7\u54C1\u4EF7\u683C\uFF08\u7F8E\u5143\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **category**: \u4EA7\u54C1\u7C7B\u522B</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **inventory**: \u5E93\u5B58\u4FE1\u606F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **quantity**: \u5F53\u524D\u5E93\u5B58\u6570\u91CF</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **warehouse**: \u4ED3\u5E93\u4F4D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **ratings**: \u7528\u6237\u8BC4\u5206\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **score**: \u8BC4\u5206\uFF081-5\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **comment**: \u8BC4\u8BBA\u5185\u5BB9</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">\u539F\u59CBJSON\u54CD\u5E94\uFF1A</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">\u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u4E86\u89E3\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u72B6\u6001\u548C\u7528\u6237\u8BC4\u4EF7\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: product-api-server\x7F  config:\x7F    apiKey: your-api-key-here\x7Ftools:\x7F- name: get-product\x7F  description: &#x22;\u83B7\u53D6\u4EA7\u54C1\u8BE6\u7EC6\u4FE1\u606F&#x22;\x7F  args:\x7F  - name: product_id\x7F    description: &#x22;\u4EA7\u54C1ID&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/products/{{.args.product_id}}&#x22;\x7F    method: GET\x7F    headers:\x7F    - key: Authorization\x7F      value: &#x22;Bearer {{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    prependBody: |\x7F      # \u4EA7\u54C1\u4FE1\u606F\x7F\x7F      \u4EE5\u4E0B\u662F\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5JSON\u683C\u5F0F\u8FD4\u56DE\u3002\u5B57\u6BB5\u8BF4\u660E\uFF1A\x7F\x7F      - **id**: \u4EA7\u54C1\u552F\u4E00\u6807\u8BC6\u7B26\x7F      - **name**: \u4EA7\u54C1\u540D\u79F0\x7F      - **description**: \u4EA7\u54C1\u63CF\u8FF0\x7F      - **price**: \u4EA7\u54C1\u4EF7\u683C\uFF08\u7F8E\u5143\uFF09\x7F      - **category**: \u4EA7\u54C1\u7C7B\u522B\x7F      - **inventory**: \u5E93\u5B58\u4FE1\u606F\x7F        - **quantity**: \u5F53\u524D\u5E93\u5B58\u6570\u91CF\x7F        - **warehouse**: \u4ED3\u5E93\u4F4D\u7F6E\x7F      - **ratings**: \u7528\u6237\u8BC4\u5206\u5217\u8868\x7F        - **score**: \u8BC4\u5206\uFF081-5\uFF09\x7F        - **comment**: \u8BC4\u8BBA\u5185\u5BB9\x7F\x7F      \u539F\u59CBJSON\u54CD\u5E94\uFF1A\x7F\x7F    appendBody: |\x7F\x7F      \u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u4E86\u89E3\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u72B6\u6001\u548C\u7528\u6237\u8BC4\u4EF7\u3002"><div></div></button></div></figure></div>
<p>\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A</p>
<ul>
<li>\u4F7F\u7528 <code dir="auto">prependBody</code> \u5728\u539F\u59CB JSON \u54CD\u5E94\u524D\u6DFB\u52A0\u5B57\u6BB5\u8BF4\u660E</li>
<li>\u4F7F\u7528 <code dir="auto">appendBody</code> \u5728\u54CD\u5E94\u672B\u5C3E\u6DFB\u52A0\u4F7F\u7528\u5EFA\u8BAE</li>
<li>\u4FDD\u7559\u539F\u59CB JSON \u54CD\u5E94\uFF0C\u4F7F AI \u52A9\u624B\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u6240\u6709\u6570\u636E</li>
</ul>
<h3 id="\u4F7F\u7528-errorresponsetemplate\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94\u7684\u793A\u4F8B">\u4F7F\u7528 errorResponseTemplate\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94\u7684\u793A\u4F8B</h3>
<p>errorResponseTemplate\u7528\u4E8E\u5728HTTP\u54CD\u5E94status code>=300 || &#x3C;200\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94\u8F6C\u6362\u6A21\u677F\u3002\u652F\u6301\u901A\u8FC7_headers\u8BBF\u95EEmap\u7ED3\u6784\u7684header key value, \u4EE5\u4FBF\u5728errorResponseTemplate\u4E2D\u5F15\u7528header\u4E2D\u7684\u503C\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94\u7ED3\u679C\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appCode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">""</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u94F6\u884C\u5361\u4E8C\u4E09\u56DB\u8981\u7D20"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u94F6\u884C\u5361\u53F7"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cardno"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u59D3\u540D\uFF08\u6CE8\u610FUrlEncode\u7F16\u7801\uFF09"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"name"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u9884\u7559\u624B\u673A\u53F7"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"mobile"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8EAB\u4EFD\u8BC1\u53F7\u7801"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"idcard"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">position</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u9A8C\u8BC1\u5361\u53F7\u3001\u59D3\u540D\u3001\u624B\u673A\u53F7\u3001\u8BC1\u4EF6\u53F7\u662F\u5426\u4E00\u81F4"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">errorResponseTemplate</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">statusCode: {{gjson "_headers.\\\\:status"}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">errorCode: {{gjson "_headers.x-ca-error-code"}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">data: {{.data.value}}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u94F6\u884C\u5361\u4E8C\u4E09\u56DB\u8981\u7D20\u9A8C\u8BC1"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToFormBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToJsonBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://ckid.market.alicloudapi.com/lundear/verifyBank"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span><span style="--0:#79B8FF">2</span><span style="--0:#F97583">-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u4EE5\u4E0B\u662F\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: code, \u53C2\u6570\u7C7B\u578B: integer, \u53C2\u6570\u63CF\u8FF0: \u54CD\u5E94\u72B6\u6001\u7801</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: desc, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u63CF\u8FF0\u4FE1\u606F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data, \u53C2\u6570\u7C7B\u578B: object, \u53C2\u6570\u63CF\u8FF0: \u65E0\u63CF\u8FF0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.bankId, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7F16\u7801</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.bankName, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.abbr, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u82F1\u6587\u7F29\u5199</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.cardName, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.cardType, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u7C7B\u578B</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.cardBin, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361bin</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.binLen, \u53C2\u6570\u7C7B\u578B: integer, \u53C2\u6570\u63CF\u8FF0: \u5361bin\u957F\u5EA6</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.area, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u6240\u5728\u5730\u533A</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.bankPhone, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7535\u8BDD</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.bankUrl, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7F51\u5740</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- \u53C2\u6570\u540D\u79F0: data.bankLogo, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884Clogo</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  config:\x7F    appCode: &#x22;&#x22;\x7F  name: &#x22;\u94F6\u884C\u5361\u4E8C\u4E09\u56DB\u8981\u7D20&#x22;\x7Ftools:\x7F- args:\x7F  - description: &#x22;\u94F6\u884C\u5361\u53F7&#x22;\x7F    name: &#x22;cardno&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: true\x7F    type: &#x22;string&#x22;\x7F  - description: &#x22;\u59D3\u540D\uFF08\u6CE8\u610FUrlEncode\u7F16\u7801\uFF09&#x22;\x7F    name: &#x22;name&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: false\x7F    type: &#x22;string&#x22;\x7F  - description: &#x22;\u9884\u7559\u624B\u673A\u53F7&#x22;\x7F    name: &#x22;mobile&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: false\x7F    type: &#x22;string&#x22;\x7F  - description: &#x22;\u8EAB\u4EFD\u8BC1\u53F7\u7801&#x22;\x7F    name: &#x22;idcard&#x22;\x7F    position: &#x22;query&#x22;\x7F    required: false\x7F    type: &#x22;string&#x22;\x7F  description: &#x22;\u9A8C\u8BC1\u5361\u53F7\u3001\u59D3\u540D\u3001\u624B\u673A\u53F7\u3001\u8BC1\u4EF6\u53F7\u662F\u5426\u4E00\u81F4&#x22;\x7F  errorResponseTemplate: |-\x7F    statusCode: {{gjson &#x22;_headers.\\\\:status&#x22;}}\x7F    errorCode: {{gjson &#x22;_headers.x-ca-error-code&#x22;}}\x7F    data: {{.data.value}}\x7F  name: &#x22;\u94F6\u884C\u5361\u4E8C\u4E09\u56DB\u8981\u7D20\u9A8C\u8BC1&#x22;\x7F  requestTemplate:\x7F    argsToFormBody: false\x7F    argsToJsonBody: false\x7F    argsToUrlParam: true\x7F    method: &#x22;GET&#x22;\x7F    url: &#x22;https://ckid.market.alicloudapi.com/lundear/verifyBank&#x22;\x7F  responseTemplate:\x7F    appendBody: |2-\x7F        - \u4EE5\u4E0B\u662F\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E\x7F        - \u53C2\u6570\u540D\u79F0: code, \u53C2\u6570\u7C7B\u578B: integer, \u53C2\u6570\u63CF\u8FF0: \u54CD\u5E94\u72B6\u6001\u7801\x7F        - \u53C2\u6570\u540D\u79F0: desc, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u63CF\u8FF0\u4FE1\u606F\x7F        - \u53C2\u6570\u540D\u79F0: data, \u53C2\u6570\u7C7B\u578B: object, \u53C2\u6570\u63CF\u8FF0: \u65E0\u63CF\u8FF0\x7F        - \u53C2\u6570\u540D\u79F0: data.bankId, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7F16\u7801\x7F        - \u53C2\u6570\u540D\u79F0: data.bankName, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u540D\u79F0\x7F        - \u53C2\u6570\u540D\u79F0: data.abbr, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u82F1\u6587\u7F29\u5199\x7F        - \u53C2\u6570\u540D\u79F0: data.cardName, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u540D\u79F0\x7F        - \u53C2\u6570\u540D\u79F0: data.cardType, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u7C7B\u578B\x7F        - \u53C2\u6570\u540D\u79F0: data.cardBin, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361bin\x7F        - \u53C2\u6570\u540D\u79F0: data.binLen, \u53C2\u6570\u7C7B\u578B: integer, \u53C2\u6570\u63CF\u8FF0: \u5361bin\u957F\u5EA6\x7F        - \u53C2\u6570\u540D\u79F0: data.area, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u6240\u5728\u5730\u533A\x7F        - \u53C2\u6570\u540D\u79F0: data.bankPhone, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7535\u8BDD\x7F        - \u53C2\u6570\u540D\u79F0: data.bankUrl, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7F51\u5740\x7F        - \u53C2\u6570\u540D\u79F0: data.bankLogo, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884Clogo"><div></div></button></div></figure></div>
<p>\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A</p>
<ul>
<li>{{gjson \u201C_headers.\\:status
\u201D}} -> \u8BBF\u95EEHTTP\u54CD\u5E94code</li>
<li>{{gjson \u201C_headers.x-ca-error-code\u201D}} -> \u8BBF\u95EEHeader\u4E2D\u201Dx-ca-error-code\u201D\u7684\u503C</li>
<li>{{.data.value}} -> \u8BBF\u95EE\u54CD\u5E94\u4F53 (e.g., JSON \u5B57\u6BB5 \u201Cdata.value\u201D)</li>
</ul>
<h2 id="ai-\u63D0\u793A\u8BCD\u751F\u6210\u6A21\u677F">AI \u63D0\u793A\u8BCD\u751F\u6210\u6A21\u677F</h2>
<p>\u5728\u4E0E AI \u52A9\u624B\u4E00\u8D77\u751F\u6210 REST-to-MCP \u914D\u7F6E\u7684\u6A21\u677F\u65F6\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u63D0\u793A\u8BCD\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u8BF7\u5E2E\u6211\u521B\u5EFA\u4E00\u4E2A Higress \u7684 MCP \u670D\u52A1\u5668\u914D\u7F6E\u3002\u652F\u6301\u4E24\u79CD\u7C7B\u578B\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. **REST-to-MCP \u670D\u52A1\u5668**\uFF1A\u5C06 REST API \u8F6C\u6362\u4E3A MCP \u5DE5\u5177</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. **MCP \u4EE3\u7406\u670D\u52A1\u5668**\uFF1A\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## \u914D\u7F6E\u683C\u5F0F</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">### REST-to-MCP \u670D\u52A1\u5668\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\`\`\`yaml</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">name: rest-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">type: rest  # \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A rest</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">apiKey: \u60A8\u7684API\u5BC6\u94A5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8"># \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">defaultDownstreamSecurity:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">id: ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">defaultUpstreamSecurity:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">id: BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">securitySchemes:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- id: ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: http</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">scheme: bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- id: BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">in: header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">name: X-API-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">defaultCredential: \u60A8\u7684\u540E\u7AEFAPI\u5BC6\u94A5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">tools:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- name: tool-name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">description: "\u8BE6\u7EC6\u63CF\u8FF0\u8FD9\u4E2A\u5DE5\u5177\u7684\u529F\u80FD"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">security: # \u5DE5\u5177\u7EA7\u522B\u5BA2\u6237\u7AEF\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u8986\u76D6\u670D\u52A1\u5668\u9ED8\u8BA4\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">id: ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">passthrough: true  # \u542F\u7528\u900F\u660E\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "\u53C2\u65701\u7684\u63CF\u8FF0"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: string  # \u53EF\u9009\u7C7B\u578B: string, number, integer, boolean, array, object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">position: path  # \u53EF\u9009\u4F4D\u7F6E: query, path, header, cookie, body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">- name: arg2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">description: "\u53C2\u65702\u7684\u63CF\u8FF0"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">type: integer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">required: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">default: 10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">position: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">url: "https://api.example.com/endpoint"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">method: POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">security: # \u5DE5\u5177\u7EA7\u522B\u540E\u7AEF\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u8986\u76D6\u670D\u52A1\u5668\u9ED8\u8BA4\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">id: BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">credential: "\u7279\u5B9A\u5DE5\u5177\u7684\u51ED\u8BC1"  # \u53EF\u9009\uFF0C\u8986\u76D6\u9ED8\u8BA4\u51ED\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># \u4EE5\u4E0B\u56DB\u4E2A\u9009\u9879\u4E92\u65A5\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">argsToUrlParam: true  # \u5C06\u53C2\u6570\u6DFB\u52A0\u5230URL\u67E5\u8BE2\u53C2\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8"># \u6216\u8005\u5176\u4ED6\u9009\u9879...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">headers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">- key: x-api-key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">value: "{{.config.apiKey}}"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">responseTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">body: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8"># \u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- range $index, $item := .items }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">## \u9879\u76EE {{add $index 1}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **\u540D\u79F0**: {{ $item.name }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">- **\u503C**: {{ $item.value }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="\u8BF7\u5E2E\u6211\u521B\u5EFA\u4E00\u4E2A Higress \u7684 MCP \u670D\u52A1\u5668\u914D\u7F6E\u3002\u652F\u6301\u4E24\u79CD\u7C7B\u578B\uFF1A\x7F1. **REST-to-MCP \u670D\u52A1\u5668**\uFF1A\u5C06 REST API \u8F6C\u6362\u4E3A MCP \u5DE5\u5177\x7F2. **MCP \u4EE3\u7406\u670D\u52A1\u5668**\uFF1A\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668\x7F\x7F## \u914D\u7F6E\u683C\u5F0F\x7F\x7F### REST-to-MCP \u670D\u52A1\u5668\u914D\u7F6E\x7F\x7F&#x60;&#x60;&#x60;yaml\x7Fserver:\x7F  name: rest-api-server\x7F  type: rest  # \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A rest\x7F  config:\x7F    apiKey: \u60A8\u7684API\u5BC6\u94A5\x7F  # \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF09\x7F  defaultDownstreamSecurity:\x7F    id: ClientAuth\x7F  defaultUpstreamSecurity:\x7F    id: BackendAuth\x7F  securitySchemes:\x7F  - id: ClientAuth\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendAuth\x7F    type: apiKey\x7F    in: header\x7F    name: X-API-Key\x7F    defaultCredential: \u60A8\u7684\u540E\u7AEFAPI\u5BC6\u94A5\x7Ftools:\x7F- name: tool-name\x7F  description: &#x22;\u8BE6\u7EC6\u63CF\u8FF0\u8FD9\u4E2A\u5DE5\u5177\u7684\u529F\u80FD&#x22;\x7F  security: # \u5DE5\u5177\u7EA7\u522B\u5BA2\u6237\u7AEF\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u8986\u76D6\u670D\u52A1\u5668\u9ED8\u8BA4\uFF09\x7F    id: ClientAuth\x7F    passthrough: true  # \u542F\u7528\u900F\u660E\u8BA4\u8BC1\x7F  args:\x7F  - name: arg1\x7F    description: &#x22;\u53C2\u65701\u7684\u63CF\u8FF0&#x22;\x7F    type: string  # \u53EF\u9009\u7C7B\u578B: string, number, integer, boolean, array, object\x7F    required: true\x7F    position: path  # \u53EF\u9009\u4F4D\u7F6E: query, path, header, cookie, body\x7F  - name: arg2\x7F    description: &#x22;\u53C2\u65702\u7684\u63CF\u8FF0&#x22;\x7F    type: integer\x7F    required: false\x7F    default: 10\x7F    position: query\x7F  requestTemplate:\x7F    url: &#x22;https://api.example.com/endpoint&#x22;\x7F    method: POST\x7F    security: # \u5DE5\u5177\u7EA7\u522B\u540E\u7AEF\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u8986\u76D6\u670D\u52A1\u5668\u9ED8\u8BA4\uFF09\x7F      id: BackendAuth\x7F      credential: &#x22;\u7279\u5B9A\u5DE5\u5177\u7684\u51ED\u8BC1&#x22;  # \u53EF\u9009\uFF0C\u8986\u76D6\u9ED8\u8BA4\u51ED\u8BC1\x7F    # \u4EE5\u4E0B\u56DB\u4E2A\u9009\u9879\u4E92\u65A5\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD\x7F    argsToUrlParam: true  # \u5C06\u53C2\u6570\u6DFB\u52A0\u5230URL\u67E5\u8BE2\u53C2\u6570\x7F    # \u6216\u8005\u5176\u4ED6\u9009\u9879...\x7F    headers:\x7F    - key: x-api-key\x7F      value: &#x22;{{.config.apiKey}}&#x22;\x7F  responseTemplate:\x7F    body: |\x7F      # \u7ED3\u679C\x7F      {{- range $index, $item := .items }}\x7F      ## \u9879\u76EE {{add $index 1}}\x7F      - **\u540D\u79F0**: {{ $item.name }}\x7F      - **\u503C**: {{ $item.value }}\x7F      {{- end }}"><div></div></button></div></figure></div>
<h3 id="mcp-\u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E">MCP \u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E</h3>
<h4 id="streamablehttp-\u534F\u8BAE">StreamableHTTP \u534F\u8BAE</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">transport</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># StreamableHTTP \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com/mcp"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u540E\u7AEF MCP \u670D\u52A1\u5668 URL</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5000</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\uFF08\u63A8\u8350\u914D\u7F6E\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">:  </span><span style="--0:#99A0A6"># \u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u542F\u7528\u900F\u660E\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">:   </span><span style="--0:#99A0A6"># \u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Backend-Key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u540E\u7AEF\u670D\u52A1\u5BC6\u94A5"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5BF9\u4E8E MCP \u4EE3\u7406\uFF0Ctools \u914D\u7F6E\u662F\u53EF\u9009\u7684</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5982\u679C\u914D\u7F6E\u4E86 tools\uFF0C\u5219\u53EA\u6709\u5217\u51FA\u7684\u5DE5\u5177\u53EF\u7528</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5982\u679C\u4E0D\u914D\u7F6E tools\uFF0C\u5219\u4EE3\u7406\u6240\u6709\u540E\u7AEF MCP \u670D\u52A1\u5668\u7684\u5DE5\u5177</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">specific-tool</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u7279\u5B9A\u5DE5\u5177\u7684\u914D\u7F6E\uFF08\u53EF\u9009\uFF09"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u8986\u76D6\u9ED8\u8BA4\u7684\u5BA2\u6237\u7AEF\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u4E0D\u900F\u4F20</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">param1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u53C2\u6570\u63CF\u8FF0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u8986\u76D6\u9ED8\u8BA4\u7684\u540E\u7AEF\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u7279\u5B9A\u5DE5\u5177\u7684\u540E\u7AEF\u51ED\u8BC1"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: mcp-proxy-server\x7F  type: mcp-proxy\x7F  transport: http  # StreamableHTTP \u534F\u8BAE\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com/mcp&#x22;  # \u540E\u7AEF MCP \u670D\u52A1\u5668 URL\x7F  timeout: 5000  # \u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\x7F  # \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\uFF08\u63A8\u8350\u914D\u7F6E\uFF09\x7F  defaultDownstreamSecurity:  # \u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u8BA4\u8BC1\x7F    id: ClientAuth\x7F    passthrough: true  # \u542F\u7528\u900F\u660E\u8BA4\u8BC1\x7F  defaultUpstreamSecurity:   # \u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1\x7F    id: BackendAuth\x7F  securitySchemes:\x7F  - id: ClientAuth\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendAuth\x7F    type: apiKey\x7F    in: header\x7F    name: X-Backend-Key\x7F    defaultCredential: &#x22;\u540E\u7AEF\u670D\u52A1\u5BC6\u94A5&#x22;\x7F\x7F# \u5BF9\u4E8E MCP \u4EE3\u7406\uFF0Ctools \u914D\u7F6E\u662F\u53EF\u9009\u7684\x7F# \u5982\u679C\u914D\u7F6E\u4E86 tools\uFF0C\u5219\u53EA\u6709\u5217\u51FA\u7684\u5DE5\u5177\u53EF\u7528\x7F# \u5982\u679C\u4E0D\u914D\u7F6E tools\uFF0C\u5219\u4EE3\u7406\u6240\u6709\u540E\u7AEF MCP \u670D\u52A1\u5668\u7684\u5DE5\u5177\x7Ftools:\x7F- name: specific-tool\x7F  description: &#x22;\u7279\u5B9A\u5DE5\u5177\u7684\u914D\u7F6E\uFF08\u53EF\u9009\uFF09&#x22;\x7F  security: # \u8986\u76D6\u9ED8\u8BA4\u7684\u5BA2\u6237\u7AEF\u8BA4\u8BC1\x7F    id: ClientAuth\x7F    passthrough: false  # \u4E0D\u900F\u4F20\x7F  args:\x7F  - name: param1\x7F    description: &#x22;\u53C2\u6570\u63CF\u8FF0&#x22;\x7F    type: string\x7F    required: true\x7F  requestTemplate:\x7F    security: # \u8986\u76D6\u9ED8\u8BA4\u7684\u540E\u7AEF\u8BA4\u8BC1\x7F      id: BackendAuth\x7F      credential: &#x22;\u7279\u5B9A\u5DE5\u5177\u7684\u540E\u7AEF\u51ED\u8BC1&#x22;"><div></div></button></div></figure></div>
<h4 id="sse-\u534F\u8BAE">SSE \u534F\u8BAE</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-sse-proxy-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">transport</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">sse</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># SSE \u534F\u8BAE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mcpServerURL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://backend-mcp.example.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u540E\u7AEF MCP \u670D\u52A1\u5668\u57FA\u7840 URL</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># SSE \u901A\u5E38\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultDownstreamSecurity</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultUpstreamSecurity</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ClientBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">BackendBearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u540E\u7AEFBearer Token"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u53EF\u9009\uFF1A\u9650\u5236\u5141\u8BB8\u7684\u5DE5\u5177</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allowTools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tool1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">tool2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: mcp-sse-proxy-server\x7F  type: mcp-proxy\x7F  transport: sse  # SSE \u534F\u8BAE\x7F  mcpServerURL: &#x22;http://backend-mcp.example.com&#x22;  # \u540E\u7AEF MCP \u670D\u52A1\u5668\u57FA\u7840 URL\x7F  timeout: 10000  # SSE \u901A\u5E38\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4\x7F  # \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\x7F  defaultDownstreamSecurity:\x7F    id: ClientBearer\x7F  defaultUpstreamSecurity:\x7F    id: BackendBearer\x7F  securitySchemes:\x7F  - id: ClientBearer\x7F    type: http\x7F    scheme: bearer\x7F  - id: BackendBearer\x7F    type: http\x7F    scheme: bearer\x7F    defaultCredential: &#x22;\u540E\u7AEFBearer Token&#x22;\x7F\x7F# \u53EF\u9009\uFF1A\u9650\u5236\u5141\u8BB8\u7684\u5DE5\u5177\x7FallowTools:\x7F- tool1\x7F- tool2"><div></div></button></div></figure></div>
<h2 id="\u6A21\u677F\u8BED\u6CD5-1">\u6A21\u677F\u8BED\u6CD5</h2>
<p>\u6A21\u677F\u4F7F\u7528 GJSON Template \u8BED\u6CD5 (<a href="https://github.com/higress-group/gjson_template)%EF%BC%8C%E8%AF%A5%E8%AF%AD%E6%B3%95%E7%BB%93%E5%90%88%E4%BA%86" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/gjson_template)\uFF0C\u8BE5\u8BED\u6CD5\u7ED3\u5408\u4E86</a> Go \u6A21\u677F\u548C GJSON \u8DEF\u5F84\u8BED\u6CD5\u8FDB\u884C JSON \u5904\u7406\u3002\u6A21\u677F\u5F15\u64CE\u652F\u6301\uFF1A</p>
<ol>
<li>\u57FA\u672C\u70B9\u8868\u793A\u6CD5\u8BBF\u95EE\u5B57\u6BB5\uFF1A{{.fieldName}}</li>
<li>\u7528\u4E8E\u590D\u6742\u67E5\u8BE2\u7684 gjson \u51FD\u6570\uFF1A{{gjson \u201Cusers.#(active==true)#.name\u201D}}</li>
<li>\u6240\u6709 Sprig \u6A21\u677F\u51FD\u6570\uFF08\u7C7B\u4F3C Helm\uFF09\uFF1A{{add}}\u3001{{upper}}\u3001{{lower}}\u3001{{date}} \u7B49</li>
<li>\u63A7\u5236\u7ED3\u6784\uFF1A{{if}}\u3001{{range}}\u3001{{with}} \u7B49</li>
<li>\u53D8\u91CF\u8D4B\u503C\uFF1A{{$var := .value}}</li>
</ol>
<p>\u5BF9\u4E8E\u590D\u6742\u7684 JSON \u54CD\u5E94\uFF0C\u8BF7\u8003\u8651\u4F7F\u7528 GJSON \u5F3A\u5927\u7684\u8FC7\u6EE4\u548C\u67E5\u8BE2\u80FD\u529B\u6765\u63D0\u53D6\u548C\u683C\u5F0F\u5316\u6700\u76F8\u5173\u7684\u4FE1\u606F\u3002</p>
<h2 id="\u6211\u7684\u9700\u6C42">\u6211\u7684\u9700\u6C42</h2>
<p>\u8BF7\u9009\u62E9\u60A8\u7684\u9700\u6C42\u7C7B\u578B\uFF1A</p>
<h3 id="\u5982\u679C\u8981\u8F6C\u6362-rest-api-\u4E3A-mcp-\u5DE5\u5177">\u5982\u679C\u8981\u8F6C\u6362 REST API \u4E3A MCP \u5DE5\u5177</h3>
<p>\u8BF7\u63CF\u8FF0\u60A8\u7684 REST API\uFF1A</p>
<ul>
<li>API \u7AEF\u70B9 URL</li>
<li>\u8BA4\u8BC1\u65B9\u5F0F\uFF08API Key\u3001Bearer Token \u7B49\uFF09</li>
<li>\u53C2\u6570\u548C\u54CD\u5E94\u683C\u5F0F</li>
<li>\u6216\u8005\u7C98\u8D34 Swagger/OpenAPI \u89C4\u8303</li>
</ul>
<h3 id="\u5982\u679C\u8981\u4EE3\u7406\u73B0\u6709\u7684-mcp-\u670D\u52A1\u5668">\u5982\u679C\u8981\u4EE3\u7406\u73B0\u6709\u7684 MCP \u670D\u52A1\u5668</h3>
<p>\u8BF7\u63D0\u4F9B\uFF1A</p>
<ul>
<li>\u540E\u7AEF MCP \u670D\u52A1\u5668\u7684 URL</li>
<li>\u4F20\u8F93\u534F\u8BAE\u7C7B\u578B\uFF08StreamableHTTP \u6216 SSE\uFF09</li>
<li>\u8BA4\u8BC1\u8981\u6C42\uFF08\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u3001\u540E\u7AEF\u8BA4\u8BC1\uFF09</li>
<li>\u662F\u5426\u9700\u8981\u900F\u660E\u8BA4\u8BC1\uFF08\u5C06\u5BA2\u6237\u7AEF\u51ED\u8BC1\u4F20\u9012\u7ED9\u540E\u7AEF\uFF09</li>
<li>\u662F\u5426\u9700\u8981\u9650\u5236\u53EF\u7528\u5DE5\u5177\uFF08allowTools\uFF09</li>
<li>\u7279\u5B9A\u5DE5\u5177\u7684\u914D\u7F6E\u9700\u6C42</li>
</ul>
<p>[\u5728\u6B64\u63CF\u8FF0\u60A8\u7684\u5177\u4F53\u9700\u6C42]</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## \u751F\u6210\u8981\u6C42</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\u751F\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\uFF1A</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">### \u5BF9\u4E8E REST-to-MCP \u670D\u52A1\u5668\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. \u5177\u6709\u63CF\u8FF0\u6027\u540D\u79F0\u548C\u9002\u5F53\u7684\u670D\u52A1\u5668\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. \u5B9A\u4E49\u6240\u6709\u5FC5\u8981\u7684\u53C2\u6570\uFF0C\u5E76\u63D0\u4F9B\u6E05\u6670\u7684\u63CF\u8FF0\u548C\u9002\u5F53\u7684\u7C7B\u578B\u3001\u5FC5\u586B/\u9ED8\u8BA4\u503C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. \u9009\u62E9\u5408\u9002\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\uFF08argsToUrlParam\u3001argsToJsonBody\u3001argsToFormBody \u6216\u81EA\u5B9A\u4E49 body\uFF09</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4. \u521B\u5EFA\u5C06 API \u54CD\u5E94\u8F6C\u6362\u4E3A\u9002\u5408 AI \u6D88\u8D39\u7684\u53EF\u8BFB\u683C\u5F0F\u7684 responseTemplate</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">5. \u914D\u7F6E\u9002\u5F53\u7684\u8BA4\u8BC1\u65B9\u6848\u548C\u5B89\u5168\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">### \u5BF9\u4E8E MCP \u4EE3\u7406\u670D\u52A1\u5668\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1. \u9009\u62E9\u5408\u9002\u7684\u4F20\u8F93\u534F\u8BAE\uFF08\`http\` \u7528\u4E8E StreamableHTTP\uFF0C\`sse\` \u7528\u4E8E SSE\uFF09</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2. \u914D\u7F6E\u540E\u7AEF MCP \u670D\u52A1\u5668 URL \u548C\u8D85\u65F6\u65F6\u95F4\uFF08SSE \u5EFA\u8BAE\u4F7F\u7528\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4\uFF09</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3. \u8BBE\u7F6E\u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4. \u6839\u636E\u9700\u8981\u914D\u7F6E\u900F\u660E\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">5. \u914D\u7F6E \`allowTools\` \u4EE5\u9650\u5236\u53EF\u7528\u5DE5\u5177\uFF08\u53EF\u9009\uFF09</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">6. \u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF0C\u914D\u7F6E\u7279\u5B9A\u5DE5\u5177\u7684\u8BA4\u8BC1\u8986\u76D6</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">7. \u786E\u4FDD\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u548C\u7F51\u5173\u5230\u540E\u7AEF\u7684\u8BA4\u8BC1\u94FE\u8DEF\u5B8C\u6574</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="## \u751F\u6210\u8981\u6C42\x7F\x7F\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\u751F\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\uFF1A\x7F\x7F### \u5BF9\u4E8E REST-to-MCP \u670D\u52A1\u5668\uFF1A\x7F1. \u5177\u6709\u63CF\u8FF0\u6027\u540D\u79F0\u548C\u9002\u5F53\u7684\u670D\u52A1\u5668\u914D\u7F6E\x7F2. \u5B9A\u4E49\u6240\u6709\u5FC5\u8981\u7684\u53C2\u6570\uFF0C\u5E76\u63D0\u4F9B\u6E05\u6670\u7684\u63CF\u8FF0\u548C\u9002\u5F53\u7684\u7C7B\u578B\u3001\u5FC5\u586B/\u9ED8\u8BA4\u503C\x7F3. \u9009\u62E9\u5408\u9002\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\uFF08argsToUrlParam\u3001argsToJsonBody\u3001argsToFormBody \u6216\u81EA\u5B9A\u4E49 body\uFF09\x7F4. \u521B\u5EFA\u5C06 API \u54CD\u5E94\u8F6C\u6362\u4E3A\u9002\u5408 AI \u6D88\u8D39\u7684\u53EF\u8BFB\u683C\u5F0F\u7684 responseTemplate\x7F5. \u914D\u7F6E\u9002\u5F53\u7684\u8BA4\u8BC1\u65B9\u6848\u548C\u5B89\u5168\u914D\u7F6E\x7F\x7F### \u5BF9\u4E8E MCP \u4EE3\u7406\u670D\u52A1\u5668\uFF1A\x7F1. \u9009\u62E9\u5408\u9002\u7684\u4F20\u8F93\u534F\u8BAE\uFF08&#x60;http&#x60; \u7528\u4E8E StreamableHTTP\uFF0C&#x60;sse&#x60; \u7528\u4E8E SSE\uFF09\x7F2. \u914D\u7F6E\u540E\u7AEF MCP \u670D\u52A1\u5668 URL \u548C\u8D85\u65F6\u65F6\u95F4\uFF08SSE \u5EFA\u8BAE\u4F7F\u7528\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4\uFF09\x7F3. \u8BBE\u7F6E\u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E\x7F4. \u6839\u636E\u9700\u8981\u914D\u7F6E\u900F\u660E\u8BA4\u8BC1\x7F5. \u914D\u7F6E &#x60;allowTools&#x60; \u4EE5\u9650\u5236\u53EF\u7528\u5DE5\u5177\uFF08\u53EF\u9009\uFF09\x7F6. \u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF0C\u914D\u7F6E\u7279\u5B9A\u5DE5\u5177\u7684\u8BA4\u8BC1\u8986\u76D6\x7F7. \u786E\u4FDD\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u548C\u7F51\u5173\u5230\u540E\u7AEF\u7684\u8BA4\u8BC1\u94FE\u8DEF\u5B8C\u6574"><div></div></button></div></figure></div>`,n={title:"MCP Server \u63D2\u4EF6\u914D\u7F6E",description:"MCP Server \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",date:"2025-04-03",category:"article",keywords:["higress","mcp","ai"],authors:"\u6F84\u6F6D"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-server.md",d=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`mcp-server\`\u63D2\u4EF6\u63D0\u4F9B\u4E86\u57FA\u4E8E Model Context Protocol (MCP) \u7684 AI \u5DE5\u5177\u96C6\u6210\u80FD\u529B\u3002MCP \u662F\u4E00\u79CD\u4E13\u4E3A AI \u52A9\u624B\u8BBE\u8BA1\u7684\u534F\u8BAE\uFF0C\u5B83\u5B9A\u4E49\u4E86 AI \u6A21\u578B\u4E0E\u5916\u90E8\u5DE5\u5177\u548C\u8D44\u6E90\u4EA4\u4E92\u7684\u6807\u51C6\u65B9\u5F0F\u3002\u901A\u8FC7\u6B64\u63D2\u4EF6\uFF0C\u60A8\u53EF\u4EE5\uFF1A

1. \u65E0\u9700\u7F16\u5199\u4EE3\u7801\uFF0C\u5C06\u73B0\u6709\u7684 REST API \u8F6C\u6362\u4E3A AI \u52A9\u624B\u53EF\u8C03\u7528\u7684\u5DE5\u5177
2. \u5229\u7528 Higress \u7F51\u5173\u63D0\u4F9B\u7684\u7EDF\u4E00\u8BA4\u8BC1\u3001\u9274\u6743\u3001\u9650\u6D41\u548C\u53EF\u89C2\u6D4B\u6027\u80FD\u529B
3. \u5FEB\u901F\u6784\u5EFA\u548C\u90E8\u7F72 AI \u5DE5\u5177\u548C\u670D\u52A1

![](https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png)

\u901A\u8FC7 Higress \u6258\u7BA1 MCP Server\uFF0C\u53EF\u4EE5\u5B9E\u73B0\uFF1A
- \u7EDF\u4E00\u7684\u8BA4\u8BC1\u548C\u9274\u6743\u673A\u5236\uFF0C\u786E\u4FDD AI \u5DE5\u5177\u8C03\u7528\u7684\u5B89\u5168\u6027
- \u7CBE\u7EC6\u5316\u7684\u901F\u7387\u9650\u5236\uFF0C\u9632\u6B62\u6EE5\u7528\u548C\u8D44\u6E90\u8017\u5C3D
- \u5B8C\u6574\u7684\u5BA1\u8BA1\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u6240\u6709\u5DE5\u5177\u8C03\u7528\u884C\u4E3A
- \u4E30\u5BCC\u7684\u53EF\u89C2\u6D4B\u6027\uFF0C\u76D1\u63A7\u5DE5\u5177\u8C03\u7528\u7684\u6027\u80FD\u548C\u5065\u5EB7\u72B6\u51B5
- \u7B80\u5316\u7684\u90E8\u7F72\u548C\u7BA1\u7406\uFF0C\u901A\u8FC7 Higress \u63D2\u4EF6\u673A\u5236\u5FEB\u901F\u6DFB\u52A0\u65B0\u7684 MCP Server

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`30\`

## \u914D\u7F6E\u5B57\u6BB5

### \u670D\u52A1\u5668\u914D\u7F6E

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                           |
| ------------ | ---------- | -------- | ------ | ------------------------------ |
| \`server.name\` | string     | \u5FC5\u586B     | -      | MCP \u670D\u52A1\u5668\u7684\u540D\u79F0\u3002\u5982\u679C\u4F7F\u7528\u63D2\u4EF6\u5185\u7F6E\u7684 MCP \u670D\u52A1\u5668\uFF08\u5982 quark-search\uFF09\uFF0C\u53EA\u9700\u914D\u7F6E\u6B64\u5B57\u6BB5\u4E3A\u5BF9\u5E94\u7684\u540D\u79F0\uFF0C\u65E0\u9700\u914D\u7F6E tools \u5B57\u6BB5\u3002\u5982\u679C\u662F REST-to-MCP \u573A\u666F\uFF0C\u6B64\u5B57\u6BB5\u53EF\u4EE5\u586B\u5199\u4EFB\u610F\u503C\u3002 |
| \`server.type\` | string     | \u9009\u586B     | rest   | MCP \u670D\u52A1\u5668\u7C7B\u578B\u3002\u53EF\u9009\u503C\uFF1A\`rest\`\uFF08REST-to-MCP \u8F6C\u6362\uFF09\u3001\`mcp-proxy\`\uFF08MCP \u4EE3\u7406\uFF09\u3002\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u9ED8\u8BA4\u4E3A \`rest\` \u7C7B\u578B\u3002 |
| \`server.config\` | object     | \u9009\u586B     | {}     | \u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u5982 API \u5BC6\u94A5\u7B49      |
| \`server.mcpServerURL\` | string | \u5F53 \`server.type\` \u4E3A \`mcp-proxy\` \u65F6\u5FC5\u586B | - | \u540E\u7AEF MCP \u670D\u52A1\u5668\u7684 URL \u5730\u5740\u3002\u4EC5\u5728 \`mcp-proxy\` \u7C7B\u578B\u65F6\u4F7F\u7528\u3002\u652F\u6301\u5B8C\u6574 URL\uFF08\u5982 \`http://example.com/mcp\`\uFF09\u6216\u8DEF\u5F84\uFF08\u5982 \`/mcp\`\uFF0C\u5C06\u4F7F\u7528\u8DEF\u7531\u96C6\u7FA4\u7684\u57FA\u7840 URL\uFF09\u3002 |
| \`server.timeout\` | integer | \u9009\u586B | 5000 | \u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\u3002\u9002\u7528\u4E8E \`mcp-proxy\` \u7C7B\u578B\u3002 |
| \`server.transport\` | string | \u5F53 \`server.type\` \u4E3A \`mcp-proxy\` \u65F6\u5FC5\u586B | - | \u4F20\u8F93\u534F\u8BAE\u7C7B\u578B\u3002\u53EF\u9009\u503C\uFF1A\`http\`\uFF08StreamableHTTP\uFF09\u3001\`sse\`\uFF08Server-Sent Events\uFF09\u3002 |
| \`server.passthroughAuthHeader\` | boolean | \u9009\u586B | false | \u662F\u5426\u900F\u4F20 Authorization \u8BF7\u6C42\u5934\u3002\u5F53\u8BBE\u7F6E\u4E3A \`true\` \u65F6\uFF0C\u5373\u4F7F\u6CA1\u6709\u914D\u7F6E\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u7684\u5B89\u5168\u8BA4\u8BC1\uFF08\`defaultDownstreamSecurity\` \u6216\u5DE5\u5177\u7EA7 \`security\`\uFF09\uFF0C\u4E5F\u4F1A\u5C06\u5BA2\u6237\u7AEF\u7684 \`Authorization\` \u8BF7\u6C42\u5934\u900F\u4F20\u5230\u540E\u7AEF\u3002\u9ED8\u8BA4\u4E3A \`false\`\uFF0C\u5373\u5728\u6CA1\u6709\u660E\u786E\u914D\u7F6E\u5B89\u5168\u8BA4\u8BC1\u65F6\u4F1A\u79FB\u9664 \`Authorization\` \u8BF7\u6C42\u5934\uFF0C\u9632\u6B62\u5BA2\u6237\u7AEF\u51ED\u8BC1\u88AB\u9519\u8BEF\u5730\u4F20\u9012\u5230\u540E\u7AEF\u3002\u6B64\u5B57\u6BB5\u9002\u7528\u4E8E\u9700\u8981\u76F4\u63A5\u900F\u4F20\u539F\u59CB\u8BA4\u8BC1\u4FE1\u606F\u7684\u573A\u666F\u3002 |
| \`server.securitySchemes\` | array of object | \u9009\u586B | - | \u5B9A\u4E49\u53EF\u91CD\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\uFF0C\u4F9B\u5DE5\u5177\u5F15\u7528\u3002\u8BE6\u89C1"\u8BA4\u8BC1\u4E0E\u5B89\u5168"\u7AE0\u8282\u3002 |
| \`server.defaultDownstreamSecurity\` | object | \u9009\u586B | - | \u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u8BA4\u8BC1\u914D\u7F6E\uFF0C\u7528\u4E8E\u6240\u6709 tools/list \u548C tools/call \u8BF7\u6C42\u3002\u53EF\u88AB\u5DE5\u5177\u7EA7\u522B\u7684 \`security\` \u914D\u7F6E\u8986\u76D6\u3002\u652F\u6301 \`id\`\uFF08\u5F15\u7528 securitySchemes\uFF09\u548C \`passthrough\`\uFF08\u900F\u4F20\u6807\u5FD7\uFF09\u5B57\u6BB5\u3002 |
| \`server.defaultUpstreamSecurity\` | object | \u9009\u586B | - | \u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1\u914D\u7F6E\uFF0C\u7528\u4E8E\u6240\u6709\u540E\u7AEF\u8BF7\u6C42\u3002\u53EF\u88AB\u5DE5\u5177\u7EA7\u522B\u7684 \`requestTemplate.security\` \u914D\u7F6E\u8986\u76D6\u3002\u652F\u6301 \`id\`\uFF08\u5F15\u7528 securitySchemes\uFF09\u548C \`credential\`\uFF08\u8986\u76D6\u9ED8\u8BA4\u51ED\u8BC1\uFF09\u5B57\u6BB5\u3002 |

### \u5141\u8BB8\u7684\u5DE5\u5177\u914D\u7F6E

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                   |
| ------------ | --------------- | -------- | ------ | -------------------------------------- |
| \`allowTools\` | array of string | \u9009\u586B     | -      | \u5141\u8BB8\u8C03\u7528\u7684\u5DE5\u5177\u5217\u8868\u3002\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219\u5141\u8BB8\u6240\u6709\u5DE5\u5177 |

#### \u52A8\u6001\u5DE5\u5177\u6743\u9650\u63A7\u5236

\u9664\u4E86\u5728\u914D\u7F6E\u4E2D\u9759\u6001\u5B9A\u4E49 \`allowTools\` \u5916\uFF0C\u8FD8\u652F\u6301\u901A\u8FC7 HTTP \u8BF7\u6C42\u5934 \`x-envoy-allow-mcp-tools\` \u52A8\u6001\u63A7\u5236\u5DE5\u5177\u8BBF\u95EE\u6743\u9650\u3002\u8FD9\u4F7F\u5F97\u524D\u7F6E\u63D2\u4EF6\uFF08\u5982\u8BA4\u8BC1\u3001\u9274\u6743\u63D2\u4EF6\uFF09\u53EF\u4EE5\u6839\u636E\u7528\u6237\u8EAB\u4EFD\u6216\u5176\u4ED6\u6761\u4EF6\u52A8\u6001\u8BBE\u7F6E\u5141\u8BB8\u7684\u5DE5\u5177\u5217\u8868\u3002

**Header \u683C\u5F0F**\uFF1A
\`\`\`
x-envoy-allow-mcp-tools: tool1,tool2,tool3
\`\`\`

**\u6743\u9650\u63A7\u5236\u903B\u8F91**\uFF1A

1. **\u914D\u7F6E\u7EA7\u522B \`allowTools\`**\uFF08\u9759\u6001\uFF09\uFF1A\u5728\u63D2\u4EF6\u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u57FA\u7840\u5DE5\u5177\u767D\u540D\u5355
2. **Header \u7EA7\u522B \`x-envoy-allow-mcp-tools\`**\uFF08\u52A8\u6001\uFF09\uFF1A\u4ECE\u8BF7\u6C42\u5934\u4E2D\u8BFB\u53D6\u7684\u5DE5\u5177\u767D\u540D\u5355
3. **\u6700\u7EC8\u751F\u6548\u6743\u9650**\uFF1A\u914D\u7F6E\u548C Header \u4E2D\u6307\u5B9A\u7684\u5DE5\u5177\u5217\u8868\u7684**\u4EA4\u96C6**

**Header \u503C\u7684\u8BED\u4E49**\uFF1A

| Header \u72B6\u6001 | \u884C\u4E3A |
|------------|------|
| Header \u4E0D\u5B58\u5728 | \u6CA1\u6709\u989D\u5916\u9650\u5236\uFF0C\u4F7F\u7528\u914D\u7F6E\u4E2D\u7684 \`allowTools\` |
| Header \u4E3A\u7A7A\u5B57\u7B26\u4E32 \`""\` | \u6CA1\u6709\u989D\u5916\u9650\u5236\uFF0C\u4F7F\u7528\u914D\u7F6E\u4E2D\u7684 \`allowTools\` |
| Header \u4E3A\u7A7A\u767D\u5B57\u7B26\u4E32 \`"  ,  ,  "\` | \u7981\u6B62\u8BBF\u95EE\u6240\u6709\u5DE5\u5177\uFF08\u7A7A\u96C6\u5408\uFF09 |
| Header \u6709\u503C \`"tool1,tool2"\` | \u4E0E\u914D\u7F6E\u7684 \`allowTools\` \u53D6\u4EA4\u96C6 |

**\u4F7F\u7528\u573A\u666F\u793A\u4F8B**\uFF1A

1. **\u57FA\u4E8E\u7528\u6237\u89D2\u8272\u7684\u6743\u9650\u63A7\u5236**
   \`\`\`yaml
   # \u914D\u7F6E\u4E2D\u5B9A\u4E49\u6240\u6709\u53EF\u7528\u5DE5\u5177
   allowTools:
   - get-user-info
   - update-user-info
   - delete-user-info
   - admin-operation
   \`\`\`
   
   \u524D\u7F6E\u8BA4\u8BC1\u63D2\u4EF6\u53EF\u4EE5\u6839\u636E\u7528\u6237\u89D2\u8272\u8BBE\u7F6E\u4E0D\u540C\u7684\u5DE5\u5177\u6743\u9650\uFF1A
   - \u666E\u901A\u7528\u6237\uFF1A\`x-envoy-allow-mcp-tools: get-user-info\`
   - \u9AD8\u7EA7\u7528\u6237\uFF1A\`x-envoy-allow-mcp-tools: get-user-info,update-user-info\`
   - \u7BA1\u7406\u5458\uFF1A\u4E0D\u8BBE\u7F6E header\uFF08\u5141\u8BB8\u6240\u6709\u914D\u7F6E\u4E2D\u7684\u5DE5\u5177\uFF09

2. **\u591A\u79DF\u6237\u573A\u666F**
   \`\`\`yaml
   # \u914D\u7F6E\u4E2D\u5B9A\u4E49\u79DF\u6237\u53EF\u7528\u7684\u5DE5\u5177
   allowTools:
   - tenant-query-data
   - tenant-update-data
   - tenant-report
   \`\`\`
   
   \u524D\u7F6E\u63D2\u4EF6\u6839\u636E\u79DF\u6237\u8BA2\u9605\u5957\u9910\u52A8\u6001\u63A7\u5236\uFF1A
   - \u57FA\u7840\u7248\uFF1A\`x-envoy-allow-mcp-tools: tenant-query-data\`
   - \u4E13\u4E1A\u7248\uFF1A\`x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data\`
   - \u4F01\u4E1A\u7248\uFF1A\`x-envoy-allow-mcp-tools: tenant-query-data,tenant-update-data,tenant-report\`

3. **\u4E34\u65F6\u6743\u9650\u9650\u5236**
   
   \u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF08\u5982\u7CFB\u7EDF\u7EF4\u62A4\uFF09\uFF0C\u524D\u7F6E\u63D2\u4EF6\u53EF\u4EE5\u4E34\u65F6\u9650\u5236\u67D0\u4E9B\u5DE5\u5177\u7684\u8BBF\u95EE\uFF1A
   \`\`\`
   x-envoy-allow-mcp-tools: read-only-tool1,read-only-tool2
   \`\`\`

**\u524D\u7F6E\u63D2\u4EF6\u96C6\u6210\u6307\u5357**\uFF1A

\u5BF9\u4E8E\u9700\u8981\u52A8\u6001\u8BBE\u7F6E\u5DE5\u5177\u6743\u9650\u7684\u524D\u7F6E\u63D2\u4EF6\uFF08\u5982\u8BA4\u8BC1\u3001\u9274\u6743\u63D2\u4EF6\uFF09\uFF0C**\u5FC5\u987B\u4F7F\u7528 \`proxywasm.ReplaceHttpRequestHeader\`** \u6765\u8BBE\u7F6E \`x-envoy-allow-mcp-tools\` header\uFF1A

\`\`\`go
// \u6B63\u786E\u7684\u65B9\u5F0F\uFF1A\u4F7F\u7528 ReplaceHttpRequestHeader
// \u8FD9\u4F1A\u8986\u76D6\u7528\u6237\u53EF\u80FD\u4F20\u5165\u7684\u4EFB\u4F55\u503C\uFF0C\u786E\u4FDD\u5B89\u5168\u6027
proxywasm.ReplaceHttpRequestHeader("x-envoy-allow-mcp-tools", "tool1,tool2,tool3")

// \u274C \u9519\u8BEF\u7684\u65B9\u5F0F\uFF1A\u4F7F\u7528 AddHttpRequestHeader
// \u8FD9\u53EF\u80FD\u5BFC\u81F4\u7528\u6237\u4F20\u5165\u7684\u503C\u88AB\u4FDD\u7559\uFF0C\u9020\u6210\u5B89\u5168\u9690\u60A3
proxywasm.AddHttpRequestHeader("x-envoy-allow-mcp-tools", "tool1,tool2,tool3")
\`\`\`

\u4F7F\u7528 \`ReplaceHttpRequestHeader\` \u53EF\u4EE5\u786E\u4FDD\uFF1A
1. **\u5B89\u5168\u6027**\uFF1A\u7528\u6237\u65E0\u6CD5\u901A\u8FC7\u76F4\u63A5\u5728\u8BF7\u6C42\u4E2D\u4F20\u5165 \`x-envoy-allow-mcp-tools\` header \u6765\u7ED5\u8FC7\u6743\u9650\u63A7\u5236
2. **\u53EF\u9760\u6027**\uFF1A\u524D\u7F6E\u63D2\u4EF6\u8BBE\u7F6E\u7684\u6743\u9650\u914D\u7F6E\u59CB\u7EC8\u751F\u6548\uFF0C\u4E0D\u4F1A\u88AB\u7528\u6237\u8F93\u5165\u8986\u76D6
3. **\u53EF\u9884\u6D4B\u6027**\uFF1AMCP Server \u63D2\u4EF6\u63A5\u6536\u5230\u7684\u59CB\u7EC8\u662F\u524D\u7F6E\u63D2\u4EF6\u8BBE\u7F6E\u7684\u6743\u9650\u503C

**\u6CE8\u610F\u4E8B\u9879**\uFF1A
- Header \u503C\u4F7F\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u5DE5\u5177\u540D\u79F0
- \u5DE5\u5177\u540D\u79F0\u524D\u540E\u7684\u7A7A\u767D\u5B57\u7B26\u4F1A\u88AB\u81EA\u52A8\u53BB\u9664
- \u5F53\u914D\u7F6E\u7684 \`allowTools\` \u4E3A\u7A7A\u6570\u7EC4\u65F6\uFF0C\u65E0\u8BBA header \u5982\u4F55\u8BBE\u7F6E\uFF0C\u90FD\u4F1A\u7981\u6B62\u6240\u6709\u5DE5\u5177\u8BBF\u95EE
- MCP Server \u63D2\u4EF6\u4F1A\u81EA\u52A8\u79FB\u9664 \`x-envoy-allow-mcp-tools\` header\uFF0C\u4E0D\u4F1A\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1

### REST-to-MCP \u5DE5\u5177\u914D\u7F6E

| \u540D\u79F0                          | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                           |
| ----------------------------- | --------------- | -------- | ------ | ------------------------------ |
| \`tools\`                       | array of object | \u9009\u586B     | []     | REST-to-MCP \u5DE5\u5177\u914D\u7F6E\u5217\u8868       |
| \`tools[].name\`                | string          | \u5FC5\u586B     | -      | \u5DE5\u5177\u540D\u79F0                       |
| \`tools[].description\`         | string          | \u5FC5\u586B     | -      | \u5DE5\u5177\u529F\u80FD\u63CF\u8FF0                   |
| \`tools[].args\`                | array of object | \u5FC5\u586B     | []     | \u5DE5\u5177\u53C2\u6570\u5B9A\u4E49                   |
| \`tools[].args[].name\`         | string          | \u5FC5\u586B     | -      | \u53C2\u6570\u540D\u79F0                       |
| \`tools[].args[].description\`  | string          | \u5FC5\u586B     | -      | \u53C2\u6570\u63CF\u8FF0                       |
| \`tools[].args[].type\`         | string          | \u9009\u586B     | string | \u53C2\u6570\u7C7B\u578B\uFF08string, number, integer, boolean, array, object\uFF09 |
| \`tools[].args[].required\`     | boolean         | \u9009\u586B     | false  | \u53C2\u6570\u662F\u5426\u5FC5\u9700                   |
| \`tools[].args[].default\`      | any             | \u9009\u586B     | -      | \u53C2\u6570\u9ED8\u8BA4\u503C                     |
| \`tools[].args[].enum\`         | array           | \u9009\u586B     | -      | \u53C2\u6570\u5141\u8BB8\u7684\u503C\u5217\u8868               |
| \`tools[].args[].items\`        | object          | \u9009\u586B     | -      | \u6570\u7EC4\u9879\u7684\u6A21\u5F0F\uFF08\u5F53type\u4E3Aarray\u65F6\uFF09  |
| \`tools[].args[].properties\`   | object          | \u9009\u586B     | -      | \u5BF9\u8C61\u5C5E\u6027\u7684\u6A21\u5F0F\uFF08\u5F53type\u4E3Aobject\u65F6\uFF09|
| \`tools[].args[].position\`     | string          | \u9009\u586B     | -      | \u53C2\u6570\u5728\u8BF7\u6C42\u4E2D\u7684\u4F4D\u7F6E\uFF08query, path, header, cookie, body\uFF09 |
| \`tools[].requestTemplate\`     | object          | \u5FC5\u586B     | -      | HTTP \u8BF7\u6C42\u6A21\u677F                  |
| \`tools[].requestTemplate.url\` | string          | \u5FC5\u586B     | -      | \u8BF7\u6C42 URL \u6A21\u677F                  |
| \`tools[].requestTemplate.method\` | string       | \u5FC5\u586B     | -      | HTTP \u65B9\u6CD5(GET/POST\u7B49)          |
| \`tools[].requestTemplate.headers\` | array of object | \u9009\u586B | [] | \u8BF7\u6C42\u5934\u6A21\u677F                     |
| \`tools[].requestTemplate.headers[].key\` | string | \u5FC5\u586B   | -      | \u8BF7\u6C42\u5934\u540D\u79F0                     |
| \`tools[].requestTemplate.headers[].value\` | string | \u5FC5\u586B | -      | \u8BF7\u6C42\u5934\u503C\u6A21\u677F                   |
| \`tools[].requestTemplate.body\` | string         | \u9009\u586B     | -      | \u8BF7\u6C42\u4F53\u6A21\u677F\uFF08\u4E0EargsToJsonBody\u3001argsToUrlParam\u3001argsToFormBody\u4E92\u65A5\uFF09 |
| \`tools[].requestTemplate.argsToJsonBody\` | boolean | \u9009\u586B  | false  | \u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u76F4\u63A5\u7528\u4F5CJSON\u8BF7\u6C42\u4F53\uFF08\u4E0Ebody\u3001argsToUrlParam\u3001argsToFormBody\u4E92\u65A5\uFF09 |
| \`tools[].requestTemplate.argsToUrlParam\` | boolean | \u9009\u586B  | false  | \u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230URL\u4E2D\uFF08\u4E0Ebody\u3001argsToJsonBody\u3001argsToFormBody\u4E92\u65A5\uFF09 |
| \`tools[].requestTemplate.argsToFormBody\` | boolean | \u9009\u586B  | false  | \u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u4EE5application/x-www-form-urlencoded\u683C\u5F0F\u7F16\u7801\u5728\u8BF7\u6C42\u4F53\u4E2D\uFF08\u4E0Ebody\u3001argsToJsonBody\u3001argsToUrlParam\u4E92\u65A5\uFF09 |
| \`tools[].responseTemplate\`    | object          | \u5FC5\u586B     | -      | HTTP \u54CD\u5E94\u8F6C\u6362\u6A21\u677F              |
| \`tools[].responseTemplate.body\` | string        | \u9009\u586B     | -      | \u54CD\u5E94\u4F53\u8F6C\u6362\u6A21\u677F\uFF08\u4E0EprependBody\u548CappendBody\u4E92\u65A5\uFF09 |
| \`tools[].responseTemplate.prependBody\` | string | \u9009\u586B     | -      | \u5728\u54CD\u5E94\u4F53\u524D\u63D2\u5165\u7684\u6587\u672C\uFF08\u4E0Ebody\u4E92\u65A5\uFF09 |
| \`tools[].responseTemplate.appendBody\` | string  | \u9009\u586B     | -      | \u5728\u54CD\u5E94\u4F53\u540E\u63D2\u5165\u7684\u6587\u672C\uFF08\u4E0Ebody\u4E92\u65A5\uFF09 |
| \`tools[].security\`                    | object  | \u9009\u586B     | -      | \u5DE5\u5177\u7EA7\u522B\u5B89\u5168\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9A\u4E49 MCP Client \u548C MCP Server \u4E4B\u95F4\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5E76\u652F\u6301\u51ED\u8BC1\u900F\u4F20\u3002 |
| \`tools[].security.id\`                 | string  | \u5F53 \`tools[].security\` \u914D\u7F6E\u65F6\u5FC5\u586B | -      | \u5F15\u7528\u5728 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID\u3002 |
| \`tools[].security.passthrough\`        | boolean | \u9009\u586B     | false  | \u662F\u5426\u542F\u7528\u900F\u660E\u8BA4\u8BC1\u3002\u5982\u679C\u4E3A \`true\`\uFF0C\u5219\u4ECE MCP Client \u8BF7\u6C42\u4E2D\u63D0\u53D6\u7684\u51ED\u8BC1\u5C06\u7528\u4E8E \`requestTemplate.security\` \u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u3002 |
| \`tools[].requestTemplate.security\`    | object  | \u9009\u586B     | -      | HTTP \u8BF7\u6C42\u6A21\u677F\u7684\u5B89\u5168\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9A\u4E49 MCP Server \u548C REST API \u4E4B\u95F4\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002 |
| \`tools[].requestTemplate.security.id\` | string  | \u5F53 \`tools[].requestTemplate.security\` \u914D\u7F6E\u65F6\u5FC5\u586B | - | \u5F15\u7528\u5728 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID\u3002 |
| \`tools[].requestTemplate.security.credential\` | string | \u9009\u586B | - | \u8986\u76D6 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u9ED8\u8BA4\u51ED\u8BC1\u3002\u5982\u679C\u540C\u65F6\u542F\u7528\u4E86 \`tools[].security.passthrough\`\uFF0C\u5219\u6B64\u5B57\u6BB5\u5C06\u88AB\u5FFD\u7565\uFF0C\u4F18\u5148\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u3002 |
| \`tools[].errorResponseTemplate\`       | string  | \u9009\u586B     | -      | HTTP\u54CD\u5E94Status>=300 \\\\|\\\\| <200 \u65F6\u7684\u9519\u8BEF\u54CD\u5E94\u8F6C\u6362\u6A21\u677F |

## MCP \u4F20\u8F93\u534F\u8BAE

MCP \u4EE3\u7406\u670D\u52A1\u5668 (\`mcp-proxy\` \u7C7B\u578B) \u652F\u6301\u4E24\u79CD\u4F20\u8F93\u534F\u8BAE\u4E0E\u540E\u7AEF MCP \u670D\u52A1\u5668\u901A\u4FE1\uFF1A

### StreamableHTTP \u534F\u8BAE (\`transport: http\`)

StreamableHTTP \u662F MCP \u7684\u9ED8\u8BA4 HTTP \u4F20\u8F93\u534F\u8BAE\uFF0C\u4F7F\u7528\u6807\u51C6\u7684 HTTP \u8BF7\u6C42/\u54CD\u5E94\u6A21\u578B\uFF1A

- **\u7279\u70B9**\uFF1A
  - \u7B80\u5355\u7684\u8BF7\u6C42-\u54CD\u5E94\u6A21\u578B
  - \u4F7F\u7528\u6807\u51C6 HTTP POST \u8BF7\u6C42
  - \u54CD\u5E94\u4E3A\u5B8C\u6574\u7684 JSON \u6570\u636E
  - \u9002\u5408\u5927\u591A\u6570 MCP \u670D\u52A1\u5668\u5B9E\u73B0

- **\u914D\u7F6E\u793A\u4F8B**\uFF1A
\`\`\`yaml
server:
  name: my-mcp-proxy
  type: mcp-proxy
  transport: http
  mcpServerURL: "http://backend-mcp.example.com/mcp"
\`\`\`

### SSE \u534F\u8BAE (\`transport: sse\`)

SSE (Server-Sent Events) \u662F MCP \u7684\u6D41\u5F0F\u4F20\u8F93\u534F\u8BAE\uFF0C\u652F\u6301\u5B9E\u65F6\u6570\u636E\u63A8\u9001\uFF1A

- **\u7279\u70B9**\uFF1A
  - \u57FA\u4E8E HTTP \u7684\u5355\u5411\u6D41\u5F0F\u901A\u4FE1
  - \u652F\u6301\u957F\u8FDE\u63A5\u548C\u5B9E\u65F6\u6D88\u606F\u63A8\u9001
  - \u9002\u5408\u9700\u8981\u5B9E\u65F6\u66F4\u65B0\u7684\u573A\u666F
  - \u534F\u8BAE\u6D41\u7A0B\uFF1A
    1. **\u53D1\u73B0\u9636\u6BB5**\uFF1A\u5411\u540E\u7AEF\u53D1\u9001 POST \u8BF7\u6C42\u83B7\u53D6 SSE \u7AEF\u70B9 URL
    2. **\u521D\u59CB\u5316\u9636\u6BB5**\uFF1A\u901A\u8FC7 SSE \u7AEF\u70B9\u53D1\u9001 \`initialize\` \u6D88\u606F
    3. **\u901A\u77E5\u9636\u6BB5**\uFF1A\u53D1\u9001 \`notifications/initialized\` \u901A\u77E5
    4. **\u5DE5\u5177\u8C03\u7528**\uFF1A\u6839\u636E\u9700\u8981\u6267\u884C \`tools/list\` \u6216 \`tools/call\` \u8BF7\u6C42

- **URL \u914D\u7F6E**\uFF1A
  - \u652F\u6301\u5B8C\u6574 URL\uFF1A\`http://example.com/sse\`
  - \u652F\u6301\u8DEF\u5F84\uFF1A\`/sse\`\uFF08\u5C06\u4F7F\u7528 \`mcpServerURL\` \u7684\u57FA\u7840 URL\uFF09

- **\u914D\u7F6E\u793A\u4F8B**\uFF1A
\`\`\`yaml
server:
  name: my-sse-proxy
  type: mcp-proxy
  transport: sse
  mcpServerURL: "http://backend-mcp.example.com"
  timeout: 10000  # SSE \u53EF\u80FD\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4
\`\`\`
## \u8BA4\u8BC1\u4E0E\u5B89\u5168

MCP Server \u63D2\u4EF6\u652F\u6301\u7075\u6D3B\u7684\u8BA4\u8BC1\u914D\u7F6E\uFF0C\u4EE5\u786E\u4FDD\u4E0E\u540E\u7AEF REST API \u6216 MCP \u670D\u52A1\u5668\u901A\u4FE1\u7684\u5B89\u5168\u6027\u3002\u63D2\u4EF6\u652F\u6301\u4E24\u79CD\u670D\u52A1\u5668\u7C7B\u578B\u7684\u8BA4\u8BC1\u914D\u7F6E\uFF1A

- **REST-to-MCP \u670D\u52A1\u5668 (\`rest\` \u7C7B\u578B)**\uFF1A\u5C06\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8F6C\u6362\u4E3A REST API \u8C03\u7528
- **MCP \u4EE3\u7406\u670D\u52A1\u5668 (\`mcp-proxy\` \u7C7B\u578B)**\uFF1A\u5C06\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668

\u65E0\u8BBA\u54EA\u79CD\u7C7B\u578B\uFF0C\u90FD\u652F\u6301**\u4E24\u5C42\u8BA4\u8BC1\u673A\u5236**\uFF1A
1. **\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u8BA4\u8BC1**\uFF1A\u9A8C\u8BC1\u8C03\u7528 MCP Server \u7684\u5BA2\u6237\u7AEF\u8EAB\u4EFD
2. **\u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1**\uFF1AMCP Server \u8C03\u7528\u540E\u7AEF\u670D\u52A1\u65F6\u7684\u8BA4\u8BC1\u65B9\u5F0F

### \u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848 (\`server.securitySchemes\`)

\u60A8\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u7EA7\u522B\u5B9A\u4E49\u4E00\u7EC4\u53EF\u91CD\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u8FD9\u4E9B\u65B9\u6848\u4E4B\u540E\u53EF\u4EE5\u88AB\u5404\u4E2A\u5DE5\u5177\u5F15\u7528\uFF0C\u7528\u4E8E\u914D\u7F6E MCP Server \u5411\u540E\u7AEF REST API \u53D1\u8D77\u8BF7\u6C42\u65F6\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002

**\u914D\u7F6E\u5B57\u6BB5 (\`server.securitySchemes[]\`)**:

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u63CF\u8FF0                                                                 |
| ------------------- | -------- | -------- | -------------------------------------------------------------------- |
| \`id\`                | string   | \u5FC5\u586B     | \u8BA4\u8BC1\u65B9\u6848\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4F9B\u5DE5\u5177\u914D\u7F6E\u5F15\u7528\u3002                                 |
| \`type\`              | string   | \u5FC5\u586B     | \u8BA4\u8BC1\u7C7B\u578B\uFF0C\u652F\u6301 \`http\` (\u7528\u4E8E Basic \u548C Bearer\u8BA4\u8BC1) \u548C \`apiKey\`\u3002         |
| \`scheme\`            | string   | \u9009\u586B     | \u5F53 \`type\` \u4E3A \`http\` \u65F6\u6307\u5B9A\u5177\u4F53\u7684\u65B9\u6848\uFF0C\u5982 \`basic\` \u6216 \`bearer\`\u3002           |
| \`in\`                | string   | \u9009\u586B     | \u5F53 \`type\` \u4E3A \`apiKey\` \u65F6\u6307\u5B9A API \u5BC6\u94A5\u7684\u4F4D\u7F6E\uFF0C\u5982 \`header\` \u6216 \`query\`\u3002    |
| \`name\`              | string   | \u9009\u586B     | \u5F53 \`type\` \u4E3A \`apiKey\` \u65F6\u6307\u5B9A Header \u540D\u79F0\u6216\u67E5\u8BE2\u53C2\u6570\u540D\u79F0\u3002                 |
| \`defaultCredential\` | string   | \u9009\u586B     | \u6B64\u65B9\u6848\u7684\u9ED8\u8BA4\u51ED\u8BC1\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E Basic Auth\uFF0C\u53EF\u4EE5\u662F "user:password"\uFF1B\u5BF9\u4E8E Bearer Token\uFF0C\u662F Token \u672C\u8EAB\uFF1B\u5BF9\u4E8E API Key\uFF0C\u662F Key \u672C\u8EAB\u3002 |

**\u793A\u4F8B (\`server.securitySchemes\`)**:

\`\`\`yaml
server:
  name: my-api-server
  securitySchemes:
  - id: MyBasicAuth
    type: http
    scheme: basic
    defaultCredential: "admin:secretpassword" # \u9ED8\u8BA4\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801
  - id: MyBearerToken
    type: http
    scheme: bearer
    defaultCredential: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." # \u9ED8\u8BA4\u7684Bearer Token
  - id: MyApiKeyInHeader
    type: apiKey
    in: header
    name: X-Custom-API-Key # API Key \u5728\u540D\u4E3A X-Custom-API-Key \u7684 Header \u4E2D
    defaultCredential: "abcdef123456" # \u9ED8\u8BA4\u7684 API Key
  - id: MyApiKeyInQuery
    type: apiKey
    in: query
    name: "api_token" # API Key \u5728\u540D\u4E3A api_token \u7684\u67E5\u8BE2\u53C2\u6570\u4E2D
    defaultCredential: "uvwxyz789012"
\`\`\`

### \u5728\u5DE5\u5177\u4E2D\u5E94\u7528\u8BA4\u8BC1\u65B9\u6848

\u5B9A\u4E49\u4E86 \`server.securitySchemes\` \u540E\uFF0C\u60A8\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5DE5\u5177\u7684 \`requestTemplate.security\` \u4E2D\u901A\u8FC7 \`id\` \u5F15\u7528\u8FD9\u4E9B\u65B9\u6848\uFF0C\u4EE5\u6307\u5B9A MCP Server \u8C03\u7528\u540E\u7AEF REST API \u65F6\u4F7F\u7528\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002

- **\`tools[].requestTemplate.security.id\`**: \u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u7684 \`id\`\u3002
- **\`tools[].requestTemplate.security.credential\`**: \u53EF\u9009\u3002\u5982\u679C\u63D0\u4F9B\uFF0C\u5B83\u5C06\u8986\u76D6\u6240\u5F15\u7528\u65B9\u6848\u4E2D\u7684 \`defaultCredential\`\u3002\u8FD9\u5141\u8BB8\u60A8\u4E3A\u7279\u5B9A\u5DE5\u5177\u4F7F\u7528\u4E0D\u540C\u7684\u51ED\u8BC1\uFF0C\u5373\u4F7F\u5B83\u4EEC\u5171\u4EAB\u76F8\u540C\u7684\u8BA4\u8BC1\u673A\u5236\u3002

**\u793A\u4F8B**:

\`\`\`yaml
tools:
- name: get-user-details
  # ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...
  requestTemplate:
    url: "https://api.example.com/users/{{.args.userId}}"
    method: GET
    security:
      id: MyBearerToken # \u4F7F\u7528\u4E0A\u9762\u5B9A\u4E49\u7684 MyBearerToken \u65B9\u6848
      # credential: "override_token_for_this_tool" # \u53EF\u9009\uFF1A\u4E3A\u6B64\u5DE5\u5177\u8986\u76D6\u9ED8\u8BA4Token
# ...
- name: update-inventory
  # ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...
  requestTemplate:
    url: "https://api.example.com/inventory/{{.args.itemId}}"
    method: POST
    security:
      id: MyApiKeyInHeader # \u4F7F\u7528 MyApiKeyInHeader \u65B9\u6848
      # \u6B64\u5DE5\u5177\u5C06\u4F7F\u7528 MyApiKeyInHeader \u4E2D\u5B9A\u4E49\u7684 defaultCredential
\`\`\`

### \u900F\u660E\u8BA4\u8BC1 (Passthrough Authentication)

\u900F\u660E\u8BA4\u8BC1\u529F\u80FD\u5141\u8BB8\u5C06 MCP Client (\u4F8B\u5982 AI \u52A9\u624B) \u8C03\u7528 MCP Server \u65F6\u63D0\u4F9B\u7684\u51ED\u8BC1\uFF0C\u900F\u4F20\u7ED9 MCP Server \u8C03\u7528\u540E\u7AEF REST API \u65F6\u7684\u8BA4\u8BC1\u8FC7\u7A0B\u3002

**\u914D\u7F6E\u65B9\u5F0F**:

1.  **\u786E\u4FDD\u76F8\u5173\u8BA4\u8BC1\u65B9\u6848\u5DF2\u5728 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49**\u3002\u8FD9\u5305\u62EC\u5BA2\u6237\u7AEF\u7528\u4E8E\u8FDE\u63A5\u5230 MCP Server \u7684\u65B9\u6848\uFF0C\u4EE5\u53CA MCP Server \u7528\u4E8E\u8FDE\u63A5\u5230\u540E\u7AEF REST API \u7684\u65B9\u6848\u3002
2.  **\u914D\u7F6E\u5DE5\u5177\u7EA7\u522B\u8BA4\u8BC1 (\`tools[].security\`)**:
    \u5728\u9700\u8981\u900F\u4F20\u51ED\u8BC1\u7684\u5DE5\u5177\u4E2D\uFF0C\u914D\u7F6E \`security\` \u5B57\u6BB5\uFF1A
    - \`id\`: \u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u3001\u7528\u4E8E **MCP Client \u4E0E MCP Server \u4E4B\u95F4**\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u63D2\u4EF6\u5C06\u6839\u636E\u6B64\u65B9\u6848\u4ECE\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51ED\u8BC1\uFF0C\u5E76\u6E05\u7406\u539F\u59CB\u8BF7\u6C42\u4E2D\u7684\u8BE5\u51ED\u8BC1\u3002
    - \`passthrough: true\`: \u542F\u7528\u900F\u660E\u8BA4\u8BC1\u3002

3.  **\u914D\u7F6E\u8BF7\u6C42\u6A21\u677F\u8BA4\u8BC1 (\`tools[].requestTemplate.security\`)**:
    \u5728\u5DE5\u5177\u7684 \`requestTemplate\` \u4E2D\uFF0C\u914D\u7F6E \`security\` \u5B57\u6BB5\uFF1A
    - \`id\`: \u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u3001\u7528\u4E8E **MCP Server \u4E0E\u540E\u7AEF REST API \u4E4B\u95F4**\u7684\u8BA4\u8BC1\u65B9\u6848\u3002
    - \u5F53 \`tools[].security.passthrough\` \u4E3A \`true\` \u65F6\uFF0C\u4ECE\u5BA2\u6237\u7AEF\u63D0\u53D6\u7684\u51ED\u8BC1\u5C06\u6839\u636E\u6B64 \`requestTemplate.security\` \u65B9\u6848\u5E94\u7528\u4E8E\u5BF9\u540E\u7AEF REST API \u7684\u8C03\u7528\u3002

**\u793A\u4F8B**:

\u5047\u8BBE MCP Client \u4F7F\u7528 Bearer Token \u8C03\u7528 MCP Server\uFF0C\u800C MCP Server \u9700\u8981\u4F7F\u7528 API Key \u8C03\u7528\u540E\u7AEF\u7684 REST API\u3002

\`\`\`yaml
server:
  name: product-api-server
  securitySchemes:
  - id: ClientSideBearer # \u5BA2\u6237\u7AEF\u4F7F\u7528Bearer Token
    type: http
    scheme: bearer
  - id: BackendApiKey    # \u540E\u7AEFAPI\u4F7F\u7528X-API-Key
    type: apiKey
    in: header
    name: X-API-Key
    # defaultCredential: "optional_default_backend_key"

tools:
- name: get-product-securely
  description: "\u83B7\u53D6\u4EA7\u54C1\u4FE1\u606F\uFF08\u5B89\u5168\u900F\u4F20\uFF09"
  security: # \u5BA2\u6237\u7AEF -> MCP Server \u8BA4\u8BC1\u914D\u7F6E
    id: ClientSideBearer # MCP Server\u671F\u671B\u5BA2\u6237\u7AEF\u4F7F\u7528\u6B64\u65B9\u6848\uFF0C\u5E76\u4F1A\u5C1D\u8BD5\u63D0\u53D6\u6B64\u7C7B\u578B\u7684\u51ED\u8BC1
    passthrough: true   # \u542F\u7528\u900F\u4F20
  args:
  - name: product_id
    description: "\u4EA7\u54C1ID"
    type: string
    required: true
  requestTemplate:
    security: # MCP Server -> \u540E\u7AEF REST API \u8BA4\u8BC1\u914D\u7F6E
      id: BackendApiKey # \u540E\u7AEFAPI\u9700\u8981\u6B64\u65B9\u6848\u3002\u900F\u4F20\u7684\u51ED\u8BC1\u5C06\u6309\u6B64\u65B9\u6848\u5E94\u7528\u3002
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
\`\`\`

**\u5DE5\u4F5C\u6D41\u7A0B**:

1.  MCP Client \u53D1\u8D77\u8BF7\u6C42\u5230 MCP Server \u7684 \`get-product-securely\` \u5DE5\u5177\uFF0C\u5E76\u5728 \`Authorization\` \u5934\u4E2D\u643A\u5E26 \`Bearer <client_token>\`\u3002
2.  MCP Server \u6839\u636E \`tools[].security\` (id: \`ClientSideBearer\`) \u8BC6\u522B\u51FA\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u662F Bearer Token\u3002\u5B83\u4F1A\u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6 \`<client_token>\` \u5E76\u79FB\u9664\u539F\u59CB\u7684 \`Authorization\` \u5934\u3002
3.  \u56E0\u4E3A \`passthrough: true\`\uFF0C\u63D0\u53D6\u51FA\u7684 \`<client_token>\` \u88AB\u6807\u8BB0\u4E3A\u900F\u4F20\u51ED\u8BC1\u3002
4.  MCP Server \u51C6\u5907\u8C03\u7528\u540E\u7AEF REST API\u3002\u5B83\u67E5\u770B \`requestTemplate.security\` (id: \`BackendApiKey\`)\u3002
5.  \u7531\u4E8E\u542F\u7528\u4E86\u900F\u4F20\uFF0CMCP Server \u5C06\u4E4B\u524D\u63D0\u53D6\u7684 \`<client_token>\` \u4F5C\u4E3A\u51ED\u8BC1\u503C\uFF0C\u6309\u7167 \`BackendApiKey\` \u65B9\u6848\uFF08\u5373\u4F5C\u4E3A\u540D\u4E3A \`X-API-Key\` \u7684 HTTP Header\uFF09\u6DFB\u52A0\u5230\u5BF9 \`https://api.example.com/products/...\` \u7684\u8BF7\u6C42\u4E2D\u3002
6.  \u540E\u7AEF REST API \u6536\u5230\u8BF7\u6C42\uFF0C\u5176\u4E2D \`X-API-Key\` Header \u7684\u503C\u4E3A \`<client_token>\`\u3002

**\u6CE8\u610F\u4E8B\u9879**:
- \u5F53 \`tools[].security.passthrough\` \u4E3A \`true\` \u65F6\uFF0C\`requestTemplate.security.credential\` \u5B57\u6BB5\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4F18\u5148\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u3002
- \u900F\u4F20\u7684\u51ED\u8BC1\u503C\u4F1A\u76F4\u63A5\u7528\u4E8E \`requestTemplate.security\` \u6307\u5B9A\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u8BF7\u786E\u4FDD\u51ED\u8BC1\u7684\u683C\u5F0F\u4E0E\u76EE\u6807\u8BA4\u8BC1\u65B9\u6848\u517C\u5BB9\u3002\`extractAndRemoveIncomingCredential\` \u51FD\u6570\u4F1A\u5C1D\u8BD5\u63D0\u53D6\u6838\u5FC3\u51ED\u8BC1\u90E8\u5206\uFF08\u4F8B\u5982\uFF0CBearer token \u503C\uFF0CBasic auth \u7684 base64 \u7F16\u7801\u90E8\u5206\uFF09\u3002

### \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E

\u4E3A\u4E86\u7B80\u5316\u914D\u7F6E\u548C\u786E\u4FDD\u4E00\u81F4\u6027\uFF0CMCP Server \u63D2\u4EF6\u652F\u6301\u5728\u670D\u52A1\u5668\u7EA7\u522B\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u8BA4\u8BC1\u914D\u7F6E\u3002\u8FD9\u4E9B\u9ED8\u8BA4\u914D\u7F6E\u5C06\u5E94\u7528\u4E8E\u6240\u6709\u5DE5\u5177\u548C\u975E\u5DE5\u5177\u7279\u5B9A\u7684\u63A5\u53E3\uFF08\u5982 \`tools/list\`\uFF09\u3002

#### \`server.defaultDownstreamSecurity\`

\u5B9A\u4E49\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E\u3002\u8FD9\u4E2A\u914D\u7F6E\u5C06\u5E94\u7528\u4E8E\uFF1A
- \u6240\u6709\u6CA1\u6709\u660E\u786E\u914D\u7F6E \`security\` \u5B57\u6BB5\u7684\u5DE5\u5177
- \`tools/list\` \u8BF7\u6C42\uFF08\u83B7\u53D6\u5DE5\u5177\u5217\u8868\uFF09
- \u5176\u4ED6\u975E\u5DE5\u5177\u7279\u5B9A\u7684 MCP \u534F\u8BAE\u63A5\u53E3

**\u914D\u7F6E\u5B57\u6BB5**\uFF1A
- \`id\`\uFF1A\u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID
- \`passthrough\`\uFF1A\u662F\u5426\u542F\u7528\u900F\u660E\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A false\uFF09

#### \`server.defaultUpstreamSecurity\`

\u5B9A\u4E49\u7F51\u5173\u5230\u540E\u7AEF\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E\u3002\u8FD9\u4E2A\u914D\u7F6E\u5C06\u5E94\u7528\u4E8E\uFF1A
- \u6240\u6709\u6CA1\u6709\u660E\u786E\u914D\u7F6E \`requestTemplate.security\` \u5B57\u6BB5\u7684\u5DE5\u5177
- \`tools/list\` \u7B49\u9700\u8981\u8BBF\u95EE\u540E\u7AEF\u670D\u52A1\u7684\u8BF7\u6C42

**\u914D\u7F6E\u5B57\u6BB5**\uFF1A
- \`id\`\uFF1A\u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID
- \`credential\`\uFF1A\u8986\u76D6\u9ED8\u8BA4\u51ED\u8BC1\uFF08\u53EF\u9009\uFF09

#### \u4F18\u5148\u7EA7\u89C4\u5219

\u8BA4\u8BC1\u914D\u7F6E\u7684\u4F18\u5148\u7EA7\u4ECE\u9AD8\u5230\u4F4E\uFF1A
1. \u5DE5\u5177\u7EA7\u522B\u914D\u7F6E\uFF08\`tools[].security\` \u548C \`tools[].requestTemplate.security\`\uFF09
2. \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u914D\u7F6E\uFF08\`server.defaultDownstreamSecurity\` \u548C \`server.defaultUpstreamSecurity\`\uFF09
3. \u8BA4\u8BC1\u65B9\u6848\u4E2D\u7684\u9ED8\u8BA4\u51ED\u8BC1\uFF08\`server.securitySchemes[].defaultCredential\`\uFF09

#### \u4F7F\u7528\u573A\u666F

\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\u7279\u522B\u9002\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A
- **\u7EDF\u4E00\u8BA4\u8BC1\u7B56\u7565**\uFF1A\u6240\u6709\u5DE5\u5177\u90FD\u4F7F\u7528\u76F8\u540C\u7684\u8BA4\u8BC1\u65B9\u5F0F
- **MCP \u4EE3\u7406\u670D\u52A1\u5668**\uFF1A\u9700\u8981\u4E3A \`tools/list\` \u7B49\u975E\u5DE5\u5177\u7279\u5B9A\u8BF7\u6C42\u63D0\u4F9B\u8BA4\u8BC1
- **\u7B80\u5316\u914D\u7F6E**\uFF1A\u51CF\u5C11\u6BCF\u4E2A\u5DE5\u5177\u91CD\u590D\u914D\u7F6E\u76F8\u540C\u7684\u8BA4\u8BC1\u4FE1\u606F

## \u53C2\u6570\u7C7B\u578B\u652F\u6301

REST-to-MCP \u5DE5\u5177\u652F\u6301\u591A\u79CD\u53C2\u6570\u7C7B\u578B\uFF0C\u4F7F\u60A8\u53EF\u4EE5\u66F4\u7CBE\u786E\u5730\u5B9A\u4E49\u5DE5\u5177\u53C2\u6570\uFF1A

- **string**: \u5B57\u7B26\u4E32\u7C7B\u578B\uFF08\u9ED8\u8BA4\uFF09
- **number**: \u6570\u5B57\u7C7B\u578B\uFF08\u6D6E\u70B9\u6570\uFF09
- **integer**: \u6574\u6570\u7C7B\u578B
- **boolean**: \u5E03\u5C14\u7C7B\u578B\uFF08true/false\uFF09
- **array**: \u6570\u7EC4\u7C7B\u578B\uFF0C\u4F7F\u7528 \`items\` \u5B57\u6BB5\u5B9A\u4E49\u6570\u7EC4\u5143\u7D20\u7684\u6A21\u5F0F
- **object**: \u5BF9\u8C61\u7C7B\u578B\uFF0C\u4F7F\u7528 \`properties\` \u5B57\u6BB5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u7684\u6A21\u5F0F

\u793A\u4F8B\uFF1A

\`\`\`yaml
args:
- name: query
  description: "\u641C\u7D22\u5173\u952E\u8BCD"
  type: string
  required: true
- name: limit
  description: "\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF"
  type: integer
  default: 10
- name: filters
  description: "\u8FC7\u6EE4\u6761\u4EF6"
  type: object
  properties:
    category:
      type: string
      enum: ["food", "hotel", "attraction"]
    price:
      type: integer
      minimum: 0
- name: coordinates
  description: "\u5750\u6807\u70B9\u5217\u8868"
  type: array
  items:
    type: object
    properties:
      lat:
        type: number
      lng:
        type: number
\`\`\`

## \u53C2\u6570\u4F4D\u7F6E\u63A7\u5236

REST-to-MCP \u5DE5\u5177\u652F\u6301\u901A\u8FC7 \`position\` \u5B57\u6BB5\u7CBE\u786E\u63A7\u5236\u6BCF\u4E2A\u53C2\u6570\u5728\u8BF7\u6C42\u4E2D\u7684\u4F4D\u7F6E\u3002\u8FD9\u4F7F\u60A8\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u6784\u5EFA API \u8BF7\u6C42\uFF0C\u4F8B\u5982\u540C\u65F6\u4F7F\u7528\u8DEF\u5F84\u53C2\u6570\u3001\u67E5\u8BE2\u53C2\u6570\u548C\u8BF7\u6C42\u4F53\u53C2\u6570\u3002

### \u652F\u6301\u7684\u4F4D\u7F6E\u7C7B\u578B

- **query**: \u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D
- **path**: \u53C2\u6570\u5C06\u66FF\u6362 URL \u4E2D\u7684\u8DEF\u5F84\u5360\u4F4D\u7B26\uFF0C\u4F8B\u5982 \`/pet/{petId}\` \u4E2D\u7684 \`{petId}\`
- **header**: \u53C2\u6570\u5C06\u4F5C\u4E3A HTTP \u5934\u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- **cookie**: \u53C2\u6570\u5C06\u4F5C\u4E3A Cookie \u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- **body**: \u53C2\u6570\u5C06\u6DFB\u52A0\u5230\u8BF7\u6C42\u4F53\u4E2D\uFF08\u6839\u636E\u5185\u5BB9\u7C7B\u578B\u81EA\u52A8\u683C\u5F0F\u5316\u4E3A JSON \u6216\u8868\u5355\uFF09

### \u4F7F\u7528\u793A\u4F8B

\`\`\`yaml
args:
- name: petId
  description: "\u5BA0\u7269ID"
  type: string
  required: true
  position: path
- name: token
  description: "\u8BA4\u8BC1\u4EE4\u724C"
  type: string
  required: true
  position: header
- name: sessionId
  description: "\u4F1A\u8BDDID"
  type: string
  position: cookie
- name: limit
  description: "\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF"
  type: integer
  default: 10
  position: query
- name: tags
  description: "\u6807\u7B7E\u5217\u8868"
  type: array
  position: body
\`\`\`

\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF1A
- \`petId\` \u5C06\u66FF\u6362 URL \u4E2D\u7684 \`{petId}\` \u5360\u4F4D\u7B26
- \`token\` \u5C06\u4F5C\u4E3A HTTP \u5934\u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- \`sessionId\` \u5C06\u4F5C\u4E3A Cookie \u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- \`limit\` \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D
- \`tags\` \u5C06\u6DFB\u52A0\u5230\u8BF7\u6C42\u4F53\u4E2D

### \u4E0E\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\u7684\u5173\u7CFB

\u5F53\u4F7F\u7528 \`position\` \u6307\u5B9A\u53C2\u6570\u4F4D\u7F6E\u65F6\uFF0C\u8FD9\u4E9B\u53C2\u6570\u5C06\u6309\u7167\u6307\u5B9A\u7684\u4F4D\u7F6E\u5904\u7406\uFF0C\u800C\u4E0D\u4F1A\u53D7\u5230\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\uFF08\`argsToJsonBody\`\u3001\`argsToUrlParam\`\u3001\`argsToFormBody\`\uFF09\u7684\u5F71\u54CD\u3002\u53EA\u6709\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u624D\u4F1A\u53D7\u5230\u8FD9\u4E9B\u6279\u91CF\u9009\u9879\u7684\u5F71\u54CD\u3002

\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u540C\u65F6\u4F7F\u7528\u4E86 \`position\` \u548C \`argsToJsonBody\`\uFF1A
- \u6307\u5B9A\u4E86 \`position: query\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 URL \u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D
- \u6307\u5B9A\u4E86 \`position: header\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 HTTP \u5934\u4E2D
- \u6307\u5B9A\u4E86 \`position: path\` \u7684\u53C2\u6570\u4F1A\u66FF\u6362 URL \u4E2D\u7684\u5360\u4F4D\u7B26
- \u6307\u5B9A\u4E86 \`position: cookie\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 Cookie \u4E2D
- \u6307\u5B9A\u4E86 \`position: body\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 JSON \u8BF7\u6C42\u4F53\u4E2D
- \u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u4F1A\u901A\u8FC7 \`argsToJsonBody\` \u6DFB\u52A0\u5230 JSON \u8BF7\u6C42\u4F53\u4E2D

\u6B64\u5916\uFF0C\u5982\u679C\u5728 \`requestTemplate\` \u4E2D\u660E\u786E\u6307\u5B9A\u4E86 \`body\`\uFF0C\u5219\u6240\u6709 \`position: body\` \u7684\u53C2\u6570\u90FD\u5C06\u88AB\u5FFD\u7565\uFF0C\u4EE5\u907F\u514D\u51B2\u7A81\u3002

## \u8BF7\u6C42\u53C2\u6570\u4F20\u9012\u65B9\u5F0F

\u9664\u4E86\u4F7F\u7528 \`position\` \u7CBE\u786E\u63A7\u5236\u6BCF\u4E2A\u53C2\u6570\u7684\u4F4D\u7F6E\u5916\uFF0CREST-to-MCP \u5DE5\u5177\u8FD8\u652F\u6301\u56DB\u79CD\u6279\u91CF\u53C2\u6570\u5904\u7406\u65B9\u5F0F\uFF0C\u8FD9\u4E9B\u9009\u9879\u662F**\u4E92\u65A5\u7684**\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD\uFF1A

1. **body**: \u4F7F\u7528\u6A21\u677F\u624B\u52A8\u6784\u5EFA\u8BF7\u6C42\u4F53\u3002\u8FD9\u662F\u6700\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u5141\u8BB8\u60A8\u5B8C\u5168\u63A7\u5236\u8BF7\u6C42\u4F53\u7684\u683C\u5F0F\u3002
   \`\`\`yaml
   requestTemplate:
     body: |
       {
         "query": "{{.args.query}}",
         "filters": {{toJson .args.filters}},
         "options": {
           "limit": {{.args.limit}}
         }
       }
   \`\`\`

2. **argsToJsonBody**: \u5F53\u8BBE\u7F6E\u4E3A \`true\` \u65F6\uFF0C\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u5C06\u76F4\u63A5\u4F5C\u4E3A JSON \u5BF9\u8C61\u53D1\u9001\u5230\u8BF7\u6C42\u4F53\u4E2D\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0 \`Content-Type: application/json; charset=utf-8\` \u5934\u3002
   \`\`\`yaml
   requestTemplate:
     argsToJsonBody: true
   \`\`\`

3. **argsToUrlParam**: \u5F53\u8BBE\u7F6E\u4E3A \`true\` \u65F6\uFF0C\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D\u3002
   \`\`\`yaml
   requestTemplate:
     argsToUrlParam: true
   \`\`\`

4. **argsToFormBody**: \u5F53\u8BBE\u7F6E\u4E3A \`true\` \u65F6\uFF0C\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u5C06\u4EE5 \`application/x-www-form-urlencoded\` \u683C\u5F0F\u7F16\u7801\u5728\u8BF7\u6C42\u4F53\u4E2D\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0\u76F8\u5E94\u7684 Content-Type \u5934\u3002
   \`\`\`yaml
   requestTemplate:
     argsToFormBody: true
   \`\`\`

\u8FD9\u4E9B\u9009\u9879\u7B80\u5316\u4E86\u5E38\u89C1 API \u8C03\u7528\u6A21\u5F0F\u7684\u914D\u7F6E\uFF0C\u65E0\u9700\u624B\u52A8\u6784\u5EFA\u8BF7\u6C42\u4F53\u6216 URL \u53C2\u6570\u3002\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u56DB\u4E2A\u9009\u9879\u662F\u4E92\u65A5\u7684\uFF0C\u5728\u4E00\u4E2A\u5DE5\u5177\u914D\u7F6E\u4E2D\u53EA\u80FD\u4F7F\u7528\u5176\u4E2D\u4E00\u79CD\u3002\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86\u591A\u4E2A\u9009\u9879\uFF0C\u7CFB\u7EDF\u4F1A\u62A5\u9519\u5E76\u62D2\u7EDD\u52A0\u8F7D\u8BE5\u5DE5\u5177\u914D\u7F6E\u3002

## \u6A21\u677F\u8BED\u6CD5

REST-to-MCP \u529F\u80FD\u4F7F\u7528 [GJSON Template](https://github.com/higress-group/gjson_template) \u5E93\u8FDB\u884C\u6A21\u677F\u6E32\u67D3\uFF0C\u5B83\u7ED3\u5408\u4E86 Go \u7684\u6A21\u677F\u8BED\u6CD5\u548C GJSON \u7684\u5F3A\u5927\u8DEF\u5F84\u8BED\u6CD5\uFF1A

### \u8BF7\u6C42\u6A21\u677F

\u7528\u4E8E\u6784\u9020 HTTP \u8BF7\u6C42 URL\u3001\u5934\u90E8\u548C\u6B63\u6587\uFF1A
- \u8BBF\u95EE\u914D\u7F6E\u503C\uFF1A\`.config.\u5B57\u6BB5\u540D\`
- \u8BBF\u95EE\u5DE5\u5177\u53C2\u6570\uFF1A\`.args.\u53C2\u6570\u540D\`

### \u54CD\u5E94\u6A21\u677F

\u7528\u4E8E\u5C06 HTTP \u54CD\u5E94\u8F6C\u6362\u4E3A\u9002\u5408 AI \u6D88\u8D39\u7684\u683C\u5F0F\uFF1A
- \u4F7F\u7528 GJSON \u8DEF\u5F84\u8BED\u6CD5\u8BBF\u95EE JSON \u54CD\u5E94\u5B57\u6BB5
- \u4F7F\u7528\u6A21\u677F\u51FD\u6570\u5982 \`add\`\u3001\`upper\`\u3001\`lower\` \u7B49
- \u4F7F\u7528\u63A7\u5236\u7ED3\u6784\u5982 \`if\`\u3001\`range\` \u7B49

GJSON Template \u5305\u542B\u4E86\u6240\u6709 [Sprig](https://github.com/Masterminds/sprig) \u7684\u51FD\u6570\uFF0C\u63D0\u4F9B\u4E86 70+ \u79CD\u7528\u4E8E\u5B57\u7B26\u4E32\u64CD\u4F5C\u3001\u6570\u5B66\u8FD0\u7B97\u3001\u65E5\u671F\u683C\u5F0F\u5316\u7B49\u7684\u6A21\u677F\u51FD\u6570\uFF0C\u529F\u80FD\u7B49\u540C\u4E8E Helm \u7684\u6A21\u677F\u80FD\u529B\u3002

\u5E38\u7528\u7684 Sprig \u51FD\u6570\u5305\u62EC\uFF1A

- **\u5B57\u7B26\u4E32\u64CD\u4F5C**\uFF1A\`trim\`\u3001\`upper\`\u3001\`lower\`\u3001\`replace\`\u3001\`plural\`\u3001\`nospace\`
- **\u6570\u5B66\u8FD0\u7B97**\uFF1A\`add\`\u3001\`sub\`\u3001\`mul\`\u3001\`div\`\u3001\`max\`\u3001\`min\`
- **\u65E5\u671F\u683C\u5F0F\u5316**\uFF1A\`now\`\u3001\`date\`\u3001\`dateInZone\`\u3001\`dateModify\`
- **\u5217\u8868\u64CD\u4F5C**\uFF1A\`list\`\u3001\`first\`\u3001\`last\`\u3001\`uniq\`\u3001\`sortAlpha\`
- **\u5B57\u5178\u64CD\u4F5C**\uFF1A\`dict\`\u3001\`get\`\u3001\`set\`\u3001\`hasKey\`\u3001\`pluck\`
- **\u6D41\u7A0B\u63A7\u5236**\uFF1A\`ternary\`\u3001\`default\`\u3001\`empty\`\u3001\`coalesce\`
- **\u7C7B\u578B\u8F6C\u6362**\uFF1A\`toString\`\u3001\`toJson\`\u3001\`toPrettyJson\`\u3001\`toRawJson\`
- **\u7F16\u7801/\u89E3\u7801**\uFF1A\`b64enc\`\u3001\`b64dec\`\u3001\`urlquery\`\u3001\`urlqueryescape\`
- **UUID \u751F\u6210**\uFF1A\`uuidv4\`

\u6709\u5173\u6240\u6709\u53EF\u7528\u51FD\u6570\u7684\u5B8C\u6574\u53C2\u8003\uFF0C\u8BF7\u53C2\u9605 [Helm \u51FD\u6570\u6587\u6863](https://helm.sh/docs/chart_template_guide/function_list/)\uFF0C\u56E0\u4E3A GJSON Template \u5305\u542B\u4E86\u76F8\u540C\u7684\u51FD\u6570\u96C6\u3002

### GJSON \u8DEF\u5F84\u8BED\u6CD5

GJSON \u63D0\u4F9B\u4E86\u5F3A\u5927\u7684 JSON \u67E5\u8BE2\u80FD\u529B\uFF1A

- **\u70B9\u8868\u793A\u6CD5**\uFF1A\`address.city\`
- **\u6570\u7EC4\u7D22\u5F15**\uFF1A\`users.0.name\`
- **\u6570\u7EC4\u8FED\u4EE3**\uFF1A\`users.#.name\`
- **\u6570\u7EC4\u8FC7\u6EE4**\uFF1A\`users.#(age>=30)#.name\`
- **\u4FEE\u9970\u7B26**\uFF1A\`users.@reverse.#.name\`
- **\u591A\u8DEF\u5F84**\uFF1A\`{name:users.0.name,count:users.#}\`
- **\u8F6C\u4E49\u5B57\u7B26**\uFF1A\`path.with\\.dot\`

\u5BF9\u4E8E\u66F4\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`gjson\` \u51FD\u6570\uFF1A

\`\`\`
<!-- \u4F7F\u7528 gjson \u51FD\u6570\u8FDB\u884C\u590D\u6742\u67E5\u8BE2 -->
\u6D3B\u8DC3\u7528\u6237: {{gjson "users.#(active==true)#.name"}}

<!-- \u5E26\u6709\u591A\u4E2A\u6761\u4EF6\u7684\u6570\u7EC4\u8FC7\u6EE4 -->
30\u5C81\u4EE5\u4E0A\u7684\u6D3B\u8DC3\u5F00\u53D1\u8005: {{gjson "users.#(active==true && age>30)#.name"}}

<!-- \u4F7F\u7528\u4FEE\u9970\u7B26 -->
\u7528\u6237\u540D\uFF08\u5012\u5E8F\uFF09: {{gjson "users.@reverse.#.name"}}

<!-- \u8FED\u4EE3\u8FC7\u6EE4\u7ED3\u679C -->
\u7BA1\u7406\u5458:
{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}
  - {{$user.name}} ({{$user.age}})
{{end}}
\`\`\`

\u5B8C\u6574\u7684 GJSON \u8DEF\u5F84\u8BED\u6CD5\u53C2\u8003\u53EF\u67E5\u770B [GJSON \u6587\u6863](https://github.com/tidwall/gjson#path-syntax)\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u4F7F\u7528\u5185\u7F6E MCP \u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u914D\u7F6E quark-search

\`\`\`yaml
server:
  name: "quark-search"
  config:
    apiKey: "xxxx"
\`\`\`

\u6B64\u914D\u7F6E\u4F7F\u7528\u4E86 Higress \u5185\u7F6E\u7684 quark-search MCP \u670D\u52A1\u5668\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u670D\u52A1\u5668\u540D\u79F0\u548C\u5FC5\u8981\u7684\u914D\u7F6E\uFF08\u5982 API \u5BC6\u94A5\uFF09\uFF0C\u65E0\u9700\u914D\u7F6E tools \u5B57\u6BB5\uFF0C\u56E0\u4E3A\u5DE5\u5177\u5DF2\u7ECF\u5728\u670D\u52A1\u5668\u4E2D\u9884\u5B9A\u4E49\u597D\u4E86\u3002

### MCP \u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668\uFF08StreamableHTTP\uFF09

\`\`\`yaml
server:
  name: my-mcpserver-proxy
  type: mcp-proxy
  transport: http  # \u4F7F\u7528 StreamableHTTP \u534F\u8BAE
  mcpServerURL: "http://backend-mcp.example.com/mcp"
  timeout: 5000
  defaultDownstreamSecurity: # \u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u7684\u9ED8\u8BA4\u8BA4\u8BC1
    id: ClientApiKey
  defaultUpstreamSecurity: # \u7F51\u5173\u5230\u540E\u7AEF\u7684\u9ED8\u8BA4\u8BA4\u8BC1
    id: BackendApiKey
  securitySchemes:
  - id: ClientApiKey
    type: apiKey
    in: header
    name: X-Client-API-Key
  - id: BackendApiKey
    type: apiKey
    in: header
    name: X-Backend-API-Key
    defaultCredential: "backend-secret-key"

tools:
- name: get-secure-product
  description: "\u83B7\u53D6\u5B89\u5168\u4EA7\u54C1\u4FE1\u606F"
  args:
  - name: product_id
    description: "\u4EA7\u54C1ID"
    type: string
    required: true
  requestTemplate:
    security: # \u5DE5\u5177\u7EA7\u522B\u7684\u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1\uFF0C\u8986\u76D6\u9ED8\u8BA4\u914D\u7F6E
      id: BackendApiKey
      credential: "special-key-for-this-tool"
\`\`\`

\u6B64\u914D\u7F6E\u521B\u5EFA\u4E86\u4E00\u4E2A MCP \u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5B83\uFF1A
1. \u4F7F\u7528 StreamableHTTP \u534F\u8BAE\u5C06\u5BA2\u6237\u7AEF\u7684 MCP \u8BF7\u6C42\u4EE3\u7406\u5230 \`http://backend-mcp.example.com/mcp\`
2. \u4F7F\u7528\u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E\u5904\u7406 \`tools/list\` \u7B49\u901A\u7528\u8BF7\u6C42
3. \u5DE5\u5177\u7EA7\u522B\u7684\u8BA4\u8BC1\u914D\u7F6E\u53EF\u4EE5\u8986\u76D6\u9ED8\u8BA4\u8BBE\u7F6E
4. \u652F\u6301\u900F\u660E\u8BA4\u8BC1\u548C\u51ED\u8BC1\u8986\u76D6

### MCP \u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u4F7F\u7528 SSE \u534F\u8BAE

\`\`\`yaml
server:
  name: my-sse-mcpserver-proxy
  type: mcp-proxy
  transport: sse  # \u4F7F\u7528 SSE \u534F\u8BAE
  mcpServerURL: "http://backend-mcp.example.com"
  timeout: 10000  # SSE \u8FDE\u63A5\u53EF\u80FD\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4
  defaultDownstreamSecurity:
    id: ClientBearer
  defaultUpstreamSecurity:
    id: BackendBearer
  securitySchemes:
  - id: ClientBearer
    type: http
    scheme: bearer
  - id: BackendBearer
    type: http
    scheme: bearer

allowTools:
- weather-tool
- news-tool
\`\`\`

\u6B64\u914D\u7F6E\u521B\u5EFA\u4E86\u4E00\u4E2A\u4F7F\u7528 SSE \u534F\u8BAE\u7684 MCP \u4EE3\u7406\u670D\u52A1\u5668\uFF1A
1. \u4F7F\u7528 SSE \u6D41\u5F0F\u534F\u8BAE\u4E0E\u540E\u7AEF\u901A\u4FE1\uFF0C\u652F\u6301\u5B9E\u65F6\u6D88\u606F\u63A8\u9001
2. \u81EA\u52A8\u5904\u7406 SSE \u8FDE\u63A5\u7684\u751F\u547D\u5468\u671F\uFF08\u53D1\u73B0\u3001\u521D\u59CB\u5316\u3001\u901A\u77E5\u3001\u5DE5\u5177\u8C03\u7528\uFF09
3. \u539F\u59CB\u8BF7\u6C42\u5934\u4F1A\u81EA\u52A8\u590D\u5236\u5230\u540E\u7AEF\u8C03\u7528\u4E2D
4. \u652F\u6301 \`allowTools\` \u8FC7\u6EE4\u53EF\u7528\u5DE5\u5177\u5217\u8868
5. \u8BA4\u8BC1\u5934\u4F1A\u6B63\u786E\u4F20\u9012\u5230\u6240\u6709 SSE \u8BF7\u6C42\u4E2D

### MCP \u4EE3\u7406\u670D\u52A1\u5668\u9AD8\u7EA7\u793A\u4F8B\uFF1A\u900F\u660E\u8BA4\u8BC1

\`\`\`yaml
server:
  name: my-secure-proxy
  type: mcp-proxy
  mcpServerURL: "https://api.backend-mcp.com/v1/mcp"
  timeout: 10000
  defaultDownstreamSecurity: # \u9ED8\u8BA4\u8981\u6C42\u5BA2\u6237\u7AEF\u63D0\u4F9B Bearer Token
    id: ClientBearer
    passthrough: true # \u542F\u7528\u900F\u660E\u8BA4\u8BC1
  defaultUpstreamSecurity: # \u9ED8\u8BA4\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u8C03\u7528\u540E\u7AEF
    id: BackendBearer
  securitySchemes:
  - id: ClientBearer # \u5BA2\u6237\u7AEF\u4F7F\u7528 Bearer Token
    type: http
    scheme: bearer
  - id: BackendBearer # \u540E\u7AEF\u4E5F\u4F7F\u7528 Bearer Token
    type: http
    scheme: bearer
  - id: AdminApiKey # \u7BA1\u7406\u5458\u5DE5\u5177\u4F7F\u7528\u7279\u6B8A API Key
    type: apiKey
    in: header
    name: X-Admin-Key
    defaultCredential: "admin-secret-key"

tools:
- name: get-user-data
  description: "\u83B7\u53D6\u7528\u6237\u6570\u636E\uFF08\u4F7F\u7528\u900F\u4F20\u8BA4\u8BC1\uFF09"
  args:
  - name: user_id
    description: "\u7528\u6237ID"
    type: string
    required: true
  # \u6B64\u5DE5\u5177\u4F7F\u7528\u9ED8\u8BA4\u7684\u900F\u4F20\u8BA4\u8BC1\uFF0C\u5BA2\u6237\u7AEF\u7684 Bearer Token \u4F1A\u4F20\u9012\u7ED9\u540E\u7AEF

- name: admin-operation
  description: "\u6267\u884C\u7BA1\u7406\u5458\u64CD\u4F5C\uFF08\u4F7F\u7528\u7279\u6B8A\u8BA4\u8BC1\uFF09"
  security: # \u5DE5\u5177\u7EA7\u522B\u5BA2\u6237\u7AEF\u8BA4\u8BC1\uFF1A\u4ECD\u8981\u6C42\u5BA2\u6237\u7AEF\u63D0\u4F9B Bearer Token
    id: ClientBearer
    passthrough: false # \u4E0D\u900F\u4F20\u5BA2\u6237\u7AEF\u51ED\u8BC1
  args:
  - name: operation
    description: "\u64CD\u4F5C\u7C7B\u578B"
    type: string
    required: true
  requestTemplate:
    security: # \u5DE5\u5177\u7EA7\u522B\u540E\u7AEF\u8BA4\u8BC1\uFF1A\u4F7F\u7528\u7BA1\u7406\u5458 API Key
      id: AdminApiKey
\`\`\`

\u6B64\u9AD8\u7EA7\u914D\u7F6E\u5C55\u793A\u4E86\uFF1A
1. **\u900F\u660E\u8BA4\u8BC1**\uFF1A\`get-user-data\` \u5DE5\u5177\u4F1A\u5C06\u5BA2\u6237\u7AEF\u7684 Bearer Token \u900F\u4F20\u7ED9\u540E\u7AEF
2. **\u6DF7\u5408\u8BA4\u8BC1**\uFF1A\`admin-operation\` \u5DE5\u5177\u8981\u6C42\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u4F46\u4F7F\u7528\u4E0D\u540C\u7684\u540E\u7AEF\u8BA4\u8BC1
3. **\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u914D\u7F6E**\uFF1A\u4E3A\u6240\u6709 \`tools/list\` \u8BF7\u6C42\u63D0\u4F9B\u7EDF\u4E00\u7684\u8BA4\u8BC1\u7B56\u7565
4. **\u7075\u6D3B\u7684\u8BA4\u8BC1\u65B9\u6848**\uFF1A\u652F\u6301 HTTP Bearer Token \u548C API Key \u4E24\u79CD\u8BA4\u8BC1\u65B9\u5F0F

### \u57FA\u7840\u914D\u7F6E\u793A\u4F8B\uFF1A\u8F6C\u6362\u9AD8\u5FB7\u5730\u56FE API

\`\`\`yaml
server:
  name: rest-amap-server
  config:
    apiKey: your-api-key-here
tools:
- name: maps-geo
  description: "\u5C06\u8BE6\u7EC6\u7684\u7ED3\u6784\u5316\u5730\u5740\u8F6C\u6362\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807\u3002\u652F\u6301\u5BF9\u5730\u6807\u6027\u540D\u80DC\u666F\u533A\u3001\u5EFA\u7B51\u7269\u540D\u79F0\u89E3\u6790\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807"
  args:
  - name: address
    description: "\u5F85\u89E3\u6790\u7684\u7ED3\u6784\u5316\u5730\u5740\u4FE1\u606F"
    type: string
    required: true
  - name: city
    description: "\u6307\u5B9A\u67E5\u8BE2\u7684\u57CE\u5E02"
    type: string
    required: false
  - name: output
    description: "\u8F93\u51FA\u683C\u5F0F"
    type: string
    enum: ["json", "xml"]
    default: "json"
  requestTemplate:
    url: "https://restapi.amap.com/v3/geocode/geo"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # \u5730\u7406\u7F16\u7801\u4FE1\u606F
      {{- range $index, $geo := .geocodes }}
      ## \u5730\u70B9 {{add $index 1}}

      - **\u56FD\u5BB6**: {{ $geo.country }}
      - **\u7701\u4EFD**: {{ $geo.province }}
      - **\u57CE\u5E02**: {{ $geo.city }}
      - **\u57CE\u5E02\u4EE3\u7801**: {{ $geo.citycode }}
      - **\u533A/\u53BF**: {{ $geo.district }}
      - **\u8857\u9053**: {{ $geo.street }}
      - **\u95E8\u724C\u53F7**: {{ $geo.number }}
      - **\u884C\u653F\u7F16\u7801**: {{ $geo.adcode }}
      - **\u5750\u6807**: {{ $geo.location }}
      - **\u7EA7\u522B**: {{ $geo.level }}
      {{- end }}
\`\`\`

\u6B64\u914D\u7F6E\u5C06\u9AD8\u5FB7\u5730\u56FE\u7684\u5730\u7406\u7F16\u7801 API \u8F6C\u6362\u4E3A AI \u53EF\u8C03\u7528\u7684\u5DE5\u5177\u3002\u5F53 AI \u8C03\u7528\u6B64\u5DE5\u5177\u65F6\uFF1A

1. \u4F7F\u7528\u63D0\u4F9B\u7684\u5730\u5740\u548C\u57CE\u5E02\u53C2\u6570\u6784\u5EFA API \u8BF7\u6C42
2. \u8C03\u7528\u9AD8\u5FB7\u5730\u56FE API
3. \u5C06 JSON \u54CD\u5E94\u8F6C\u6362\u4E3A\u6613\u4E8E\u9605\u8BFB\u7684 Markdown \u683C\u5F0F
4. \u5C06\u683C\u5F0F\u5316\u540E\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9 AI \u52A9\u624B

### \u9AD8\u7EA7\u914D\u7F6E\u793A\u4F8B\uFF1A\u5E26\u6709\u6761\u4EF6\u903B\u8F91\u7684\u590D\u6742\u54CD\u5E94\u5904\u7406

\`\`\`yaml
server:
  name: weather-api-server
  config:
    apiKey: your-weather-api-key
tools:
- name: get-weather
  description: "\u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u9884\u62A5\u4FE1\u606F"
  args:
  - name: city
    description: "\u57CE\u5E02\u540D\u79F0"
    type: string
    required: true
  - name: days
    description: "\u5929\u6570(1-7)"
    type: integer
    required: false
    default: 3
  - name: include_hourly
    description: "\u662F\u5426\u5305\u542B\u6BCF\u5C0F\u65F6\u9884\u62A5"
    type: boolean
    default: true
  requestTemplate:
    url: "https://api.weatherapi.com/v1/forecast.json"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # {{.location.name}}, {{.location.country}} \u5929\u6C14\u9884\u62A5

      **\u5F53\u524D\u6E29\u5EA6**: {{.current.temp_c}}\xB0C
      **\u4F53\u611F\u6E29\u5EA6**: {{.current.feelslike_c}}\xB0C
      **\u5929\u6C14\u72B6\u51B5**: {{.current.condition.text}}
      **\u6E7F\u5EA6**: {{.current.humidity}}%
      **\u98CE\u901F**: {{.current.wind_kph}} km/h

      ## \u672A\u6765\u9884\u62A5
      {{range $index, $day := .forecast.forecastday}}
      ### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})
      
      {{if gt $day.day.maxtemp_c 30}}**\u9AD8\u6E29\u9884\u8B66!**{{end}}
      {{if lt $day.day.mintemp_c 0}}**\u4F4E\u6E29\u9884\u8B66!**{{end}}
      
      - **\u6700\u9AD8\u6E29\u5EA6**: {{$day.day.maxtemp_c}}\xB0C
      - **\u6700\u4F4E\u6E29\u5EA6**: {{$day.day.mintemp_c}}\xB0C
      - **\u964D\u6C34\u6982\u7387**: {{$day.day.daily_chance_of_rain}}%
      - **\u5929\u6C14\u72B6\u51B5**: {{$day.day.condition.text}}
      
      #### \u5206\u65F6\u9884\u62A5
      {{range $hour := slice $day.hour 6 24 3}}
      - **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}
      {{end}}
      {{end}}
\`\`\`

\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A
- \u4F7F\u7528\u6761\u4EF6\u8BED\u53E5 (\`if\`) \u8FDB\u884C\u6E29\u5EA6\u8B66\u544A
- \u4F7F\u7528\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570 (\`dateFormat\`)
- \u4F7F\u7528\u6570\u7EC4\u5207\u7247 (\`slice\`) \u9009\u62E9\u7279\u5B9A\u65F6\u95F4\u7684\u5929\u6C14
- \u5D4C\u5957\u5FAA\u73AF\u904D\u5386\u591A\u5929\u548C\u591A\u65F6\u6BB5\u7684\u5929\u6C14\u6570\u636E

### \u4F7F\u7528 PrependBody \u548C AppendBody \u7684\u793A\u4F8B\uFF1AOpenAPI \u8F6C\u6362

\u5F53\u60A8\u60F3\u4FDD\u7559\u539F\u59CB API \u54CD\u5E94\u4F46\u6DFB\u52A0\u989D\u5916\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\u65F6\uFF0C\`prependBody\` \u548C \`appendBody\` \u5B57\u6BB5\u975E\u5E38\u6709\u7528\u3002\u8FD9\u5728\u5C06 OpenAPI/Swagger \u89C4\u8303\u8F6C\u6362\u4E3A MCP \u5DE5\u5177\u65F6\u7279\u522B\u6709\u4EF7\u503C\uFF0C\u56E0\u4E3A\u60A8\u53EF\u4EE5\u4FDD\u7559\u539F\u59CB JSON \u54CD\u5E94\uFF0C\u540C\u65F6\u4E3A AI \u52A9\u624B\u63D0\u4F9B\u5B57\u6BB5\u542B\u4E49\u7684\u8BF4\u660E\u3002

\`\`\`yaml
server:
  name: product-api-server
  config:
    apiKey: your-api-key-here
tools:
- name: get-product
  description: "\u83B7\u53D6\u4EA7\u54C1\u8BE6\u7EC6\u4FE1\u606F"
  args:
  - name: product_id
    description: "\u4EA7\u54C1ID"
    type: string
    required: true
  requestTemplate:
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
    headers:
    - key: Authorization
      value: "Bearer {{.config.apiKey}}"
  responseTemplate:
    prependBody: |
      # \u4EA7\u54C1\u4FE1\u606F
      
      \u4EE5\u4E0B\u662F\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5JSON\u683C\u5F0F\u8FD4\u56DE\u3002\u5B57\u6BB5\u8BF4\u660E\uFF1A
      
      - **id**: \u4EA7\u54C1\u552F\u4E00\u6807\u8BC6\u7B26
      - **name**: \u4EA7\u54C1\u540D\u79F0
      - **description**: \u4EA7\u54C1\u63CF\u8FF0
      - **price**: \u4EA7\u54C1\u4EF7\u683C\uFF08\u7F8E\u5143\uFF09
      - **category**: \u4EA7\u54C1\u7C7B\u522B
      - **inventory**: \u5E93\u5B58\u4FE1\u606F
        - **quantity**: \u5F53\u524D\u5E93\u5B58\u6570\u91CF
        - **warehouse**: \u4ED3\u5E93\u4F4D\u7F6E
      - **ratings**: \u7528\u6237\u8BC4\u5206\u5217\u8868
        - **score**: \u8BC4\u5206\uFF081-5\uFF09
        - **comment**: \u8BC4\u8BBA\u5185\u5BB9
      
      \u539F\u59CBJSON\u54CD\u5E94\uFF1A
      
    appendBody: |
      
      \u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u4E86\u89E3\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u72B6\u6001\u548C\u7528\u6237\u8BC4\u4EF7\u3002
\`\`\`

\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A
- \u4F7F\u7528 \`prependBody\` \u5728\u539F\u59CB JSON \u54CD\u5E94\u524D\u6DFB\u52A0\u5B57\u6BB5\u8BF4\u660E
- \u4F7F\u7528 \`appendBody\` \u5728\u54CD\u5E94\u672B\u5C3E\u6DFB\u52A0\u4F7F\u7528\u5EFA\u8BAE
- \u4FDD\u7559\u539F\u59CB JSON \u54CD\u5E94\uFF0C\u4F7F AI \u52A9\u624B\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u6240\u6709\u6570\u636E

### \u4F7F\u7528 errorResponseTemplate\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94\u7684\u793A\u4F8B

errorResponseTemplate\u7528\u4E8E\u5728HTTP\u54CD\u5E94status code>=300 || <200\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94\u8F6C\u6362\u6A21\u677F\u3002\u652F\u6301\u901A\u8FC7_headers\u8BBF\u95EEmap\u7ED3\u6784\u7684header key value, \u4EE5\u4FBF\u5728errorResponseTemplate\u4E2D\u5F15\u7528header\u4E2D\u7684\u503C\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94\u7ED3\u679C\u3002

\`\`\`yaml
server:
  config:
    appCode: ""
  name: "\u94F6\u884C\u5361\u4E8C\u4E09\u56DB\u8981\u7D20"
tools:
- args:
  - description: "\u94F6\u884C\u5361\u53F7"
    name: "cardno"
    position: "query"
    required: true
    type: "string"
  - description: "\u59D3\u540D\uFF08\u6CE8\u610FUrlEncode\u7F16\u7801\uFF09"
    name: "name"
    position: "query"
    required: false
    type: "string"
  - description: "\u9884\u7559\u624B\u673A\u53F7"
    name: "mobile"
    position: "query"
    required: false
    type: "string"
  - description: "\u8EAB\u4EFD\u8BC1\u53F7\u7801"
    name: "idcard"
    position: "query"
    required: false
    type: "string"
  description: "\u9A8C\u8BC1\u5361\u53F7\u3001\u59D3\u540D\u3001\u624B\u673A\u53F7\u3001\u8BC1\u4EF6\u53F7\u662F\u5426\u4E00\u81F4"
  errorResponseTemplate: |-
    statusCode: {{gjson "_headers.\\\\:status"}}
    errorCode: {{gjson "_headers.x-ca-error-code"}}
    data: {{.data.value}}
  name: "\u94F6\u884C\u5361\u4E8C\u4E09\u56DB\u8981\u7D20\u9A8C\u8BC1"
  requestTemplate:
    argsToFormBody: false
    argsToJsonBody: false
    argsToUrlParam: true
    method: "GET"
    url: "https://ckid.market.alicloudapi.com/lundear/verifyBank"
  responseTemplate:
    appendBody: |2-
        - \u4EE5\u4E0B\u662F\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E
        - \u53C2\u6570\u540D\u79F0: code, \u53C2\u6570\u7C7B\u578B: integer, \u53C2\u6570\u63CF\u8FF0: \u54CD\u5E94\u72B6\u6001\u7801
        - \u53C2\u6570\u540D\u79F0: desc, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u63CF\u8FF0\u4FE1\u606F
        - \u53C2\u6570\u540D\u79F0: data, \u53C2\u6570\u7C7B\u578B: object, \u53C2\u6570\u63CF\u8FF0: \u65E0\u63CF\u8FF0
        - \u53C2\u6570\u540D\u79F0: data.bankId, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7F16\u7801
        - \u53C2\u6570\u540D\u79F0: data.bankName, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u540D\u79F0
        - \u53C2\u6570\u540D\u79F0: data.abbr, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u82F1\u6587\u7F29\u5199
        - \u53C2\u6570\u540D\u79F0: data.cardName, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u540D\u79F0
        - \u53C2\u6570\u540D\u79F0: data.cardType, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u7C7B\u578B
        - \u53C2\u6570\u540D\u79F0: data.cardBin, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361bin
        - \u53C2\u6570\u540D\u79F0: data.binLen, \u53C2\u6570\u7C7B\u578B: integer, \u53C2\u6570\u63CF\u8FF0: \u5361bin\u957F\u5EA6
        - \u53C2\u6570\u540D\u79F0: data.area, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u5361\u6240\u5728\u5730\u533A
        - \u53C2\u6570\u540D\u79F0: data.bankPhone, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7535\u8BDD
        - \u53C2\u6570\u540D\u79F0: data.bankUrl, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884C\u7F51\u5740
        - \u53C2\u6570\u540D\u79F0: data.bankLogo, \u53C2\u6570\u7C7B\u578B: string, \u53C2\u6570\u63CF\u8FF0: \u94F6\u884Clogo

\`\`\`
\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A
- {{gjson "_headers.\\\\:status"}} -> \u8BBF\u95EEHTTP\u54CD\u5E94code
- {{gjson "_headers.x-ca-error-code"}} -> \u8BBF\u95EEHeader\u4E2D"x-ca-error-code"\u7684\u503C
- {{.data.value}} -> \u8BBF\u95EE\u54CD\u5E94\u4F53 (e.g., JSON \u5B57\u6BB5 "data.value")

## AI \u63D0\u793A\u8BCD\u751F\u6210\u6A21\u677F

\u5728\u4E0E AI \u52A9\u624B\u4E00\u8D77\u751F\u6210 REST-to-MCP \u914D\u7F6E\u7684\u6A21\u677F\u65F6\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u63D0\u793A\u8BCD\uFF1A

\`\`\`
\u8BF7\u5E2E\u6211\u521B\u5EFA\u4E00\u4E2A Higress \u7684 MCP \u670D\u52A1\u5668\u914D\u7F6E\u3002\u652F\u6301\u4E24\u79CD\u7C7B\u578B\uFF1A
1. **REST-to-MCP \u670D\u52A1\u5668**\uFF1A\u5C06 REST API \u8F6C\u6362\u4E3A MCP \u5DE5\u5177
2. **MCP \u4EE3\u7406\u670D\u52A1\u5668**\uFF1A\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668

## \u914D\u7F6E\u683C\u5F0F

### REST-to-MCP \u670D\u52A1\u5668\u914D\u7F6E

\`\`\`yaml
server:
  name: rest-api-server
  type: rest  # \u53EF\u9009\uFF0C\u9ED8\u8BA4\u4E3A rest
  config:
    apiKey: \u60A8\u7684API\u5BC6\u94A5
  # \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF09
  defaultDownstreamSecurity:
    id: ClientAuth
  defaultUpstreamSecurity:
    id: BackendAuth
  securitySchemes:
  - id: ClientAuth
    type: http
    scheme: bearer
  - id: BackendAuth
    type: apiKey
    in: header
    name: X-API-Key
    defaultCredential: \u60A8\u7684\u540E\u7AEFAPI\u5BC6\u94A5
tools:
- name: tool-name
  description: "\u8BE6\u7EC6\u63CF\u8FF0\u8FD9\u4E2A\u5DE5\u5177\u7684\u529F\u80FD"
  security: # \u5DE5\u5177\u7EA7\u522B\u5BA2\u6237\u7AEF\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u8986\u76D6\u670D\u52A1\u5668\u9ED8\u8BA4\uFF09
    id: ClientAuth
    passthrough: true  # \u542F\u7528\u900F\u660E\u8BA4\u8BC1
  args:
  - name: arg1
    description: "\u53C2\u65701\u7684\u63CF\u8FF0"
    type: string  # \u53EF\u9009\u7C7B\u578B: string, number, integer, boolean, array, object
    required: true
    position: path  # \u53EF\u9009\u4F4D\u7F6E: query, path, header, cookie, body
  - name: arg2
    description: "\u53C2\u65702\u7684\u63CF\u8FF0"
    type: integer
    required: false
    default: 10
    position: query
  requestTemplate:
    url: "https://api.example.com/endpoint"
    method: POST
    security: # \u5DE5\u5177\u7EA7\u522B\u540E\u7AEF\u8BA4\u8BC1\uFF08\u53EF\u9009\uFF0C\u8986\u76D6\u670D\u52A1\u5668\u9ED8\u8BA4\uFF09
      id: BackendAuth
      credential: "\u7279\u5B9A\u5DE5\u5177\u7684\u51ED\u8BC1"  # \u53EF\u9009\uFF0C\u8986\u76D6\u9ED8\u8BA4\u51ED\u8BC1
    # \u4EE5\u4E0B\u56DB\u4E2A\u9009\u9879\u4E92\u65A5\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD
    argsToUrlParam: true  # \u5C06\u53C2\u6570\u6DFB\u52A0\u5230URL\u67E5\u8BE2\u53C2\u6570
    # \u6216\u8005\u5176\u4ED6\u9009\u9879...
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # \u7ED3\u679C
      {{- range $index, $item := .items }}
      ## \u9879\u76EE {{add $index 1}}
      - **\u540D\u79F0**: {{ $item.name }}
      - **\u503C**: {{ $item.value }}
      {{- end }}
\`\`\`

### MCP \u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E

#### StreamableHTTP \u534F\u8BAE

\`\`\`yaml
server:
  name: mcp-proxy-server
  type: mcp-proxy
  transport: http  # StreamableHTTP \u534F\u8BAE
  mcpServerURL: "http://backend-mcp.example.com/mcp"  # \u540E\u7AEF MCP \u670D\u52A1\u5668 URL
  timeout: 5000  # \u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09
  # \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\uFF08\u63A8\u8350\u914D\u7F6E\uFF09
  defaultDownstreamSecurity:  # \u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u8BA4\u8BC1
    id: ClientAuth
    passthrough: true  # \u542F\u7528\u900F\u660E\u8BA4\u8BC1
  defaultUpstreamSecurity:   # \u7F51\u5173\u5230\u540E\u7AEF\u8BA4\u8BC1
    id: BackendAuth
  securitySchemes:
  - id: ClientAuth
    type: http
    scheme: bearer
  - id: BackendAuth
    type: apiKey
    in: header
    name: X-Backend-Key
    defaultCredential: "\u540E\u7AEF\u670D\u52A1\u5BC6\u94A5"

# \u5BF9\u4E8E MCP \u4EE3\u7406\uFF0Ctools \u914D\u7F6E\u662F\u53EF\u9009\u7684
# \u5982\u679C\u914D\u7F6E\u4E86 tools\uFF0C\u5219\u53EA\u6709\u5217\u51FA\u7684\u5DE5\u5177\u53EF\u7528
# \u5982\u679C\u4E0D\u914D\u7F6E tools\uFF0C\u5219\u4EE3\u7406\u6240\u6709\u540E\u7AEF MCP \u670D\u52A1\u5668\u7684\u5DE5\u5177
tools:
- name: specific-tool
  description: "\u7279\u5B9A\u5DE5\u5177\u7684\u914D\u7F6E\uFF08\u53EF\u9009\uFF09"
  security: # \u8986\u76D6\u9ED8\u8BA4\u7684\u5BA2\u6237\u7AEF\u8BA4\u8BC1
    id: ClientAuth
    passthrough: false  # \u4E0D\u900F\u4F20
  args:
  - name: param1
    description: "\u53C2\u6570\u63CF\u8FF0"
    type: string
    required: true
  requestTemplate:
    security: # \u8986\u76D6\u9ED8\u8BA4\u7684\u540E\u7AEF\u8BA4\u8BC1
      id: BackendAuth
      credential: "\u7279\u5B9A\u5DE5\u5177\u7684\u540E\u7AEF\u51ED\u8BC1"
\`\`\`

#### SSE \u534F\u8BAE

\`\`\`yaml
server:
  name: mcp-sse-proxy-server
  type: mcp-proxy
  transport: sse  # SSE \u534F\u8BAE
  mcpServerURL: "http://backend-mcp.example.com"  # \u540E\u7AEF MCP \u670D\u52A1\u5668\u57FA\u7840 URL
  timeout: 10000  # SSE \u901A\u5E38\u9700\u8981\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4
  # \u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1
  defaultDownstreamSecurity:
    id: ClientBearer
  defaultUpstreamSecurity:
    id: BackendBearer
  securitySchemes:
  - id: ClientBearer
    type: http
    scheme: bearer
  - id: BackendBearer
    type: http
    scheme: bearer
    defaultCredential: "\u540E\u7AEFBearer Token"

# \u53EF\u9009\uFF1A\u9650\u5236\u5141\u8BB8\u7684\u5DE5\u5177
allowTools:
- tool1
- tool2
\`\`\`

## \u6A21\u677F\u8BED\u6CD5

\u6A21\u677F\u4F7F\u7528 GJSON Template \u8BED\u6CD5 (https://github.com/higress-group/gjson_template)\uFF0C\u8BE5\u8BED\u6CD5\u7ED3\u5408\u4E86 Go \u6A21\u677F\u548C GJSON \u8DEF\u5F84\u8BED\u6CD5\u8FDB\u884C JSON \u5904\u7406\u3002\u6A21\u677F\u5F15\u64CE\u652F\u6301\uFF1A

1. \u57FA\u672C\u70B9\u8868\u793A\u6CD5\u8BBF\u95EE\u5B57\u6BB5\uFF1A{{.fieldName}}
2. \u7528\u4E8E\u590D\u6742\u67E5\u8BE2\u7684 gjson \u51FD\u6570\uFF1A{{gjson "users.#(active==true)#.name"}}
3. \u6240\u6709 Sprig \u6A21\u677F\u51FD\u6570\uFF08\u7C7B\u4F3C Helm\uFF09\uFF1A{{add}}\u3001{{upper}}\u3001{{lower}}\u3001{{date}} \u7B49
4. \u63A7\u5236\u7ED3\u6784\uFF1A{{if}}\u3001{{range}}\u3001{{with}} \u7B49
5. \u53D8\u91CF\u8D4B\u503C\uFF1A{{$var := .value}}

\u5BF9\u4E8E\u590D\u6742\u7684 JSON \u54CD\u5E94\uFF0C\u8BF7\u8003\u8651\u4F7F\u7528 GJSON \u5F3A\u5927\u7684\u8FC7\u6EE4\u548C\u67E5\u8BE2\u80FD\u529B\u6765\u63D0\u53D6\u548C\u683C\u5F0F\u5316\u6700\u76F8\u5173\u7684\u4FE1\u606F\u3002

## \u6211\u7684\u9700\u6C42

\u8BF7\u9009\u62E9\u60A8\u7684\u9700\u6C42\u7C7B\u578B\uFF1A

### \u5982\u679C\u8981\u8F6C\u6362 REST API \u4E3A MCP \u5DE5\u5177
\u8BF7\u63CF\u8FF0\u60A8\u7684 REST API\uFF1A
- API \u7AEF\u70B9 URL
- \u8BA4\u8BC1\u65B9\u5F0F\uFF08API Key\u3001Bearer Token \u7B49\uFF09
- \u53C2\u6570\u548C\u54CD\u5E94\u683C\u5F0F
- \u6216\u8005\u7C98\u8D34 Swagger/OpenAPI \u89C4\u8303

### \u5982\u679C\u8981\u4EE3\u7406\u73B0\u6709\u7684 MCP \u670D\u52A1\u5668
\u8BF7\u63D0\u4F9B\uFF1A
- \u540E\u7AEF MCP \u670D\u52A1\u5668\u7684 URL
- \u4F20\u8F93\u534F\u8BAE\u7C7B\u578B\uFF08StreamableHTTP \u6216 SSE\uFF09
- \u8BA4\u8BC1\u8981\u6C42\uFF08\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u3001\u540E\u7AEF\u8BA4\u8BC1\uFF09
- \u662F\u5426\u9700\u8981\u900F\u660E\u8BA4\u8BC1\uFF08\u5C06\u5BA2\u6237\u7AEF\u51ED\u8BC1\u4F20\u9012\u7ED9\u540E\u7AEF\uFF09
- \u662F\u5426\u9700\u8981\u9650\u5236\u53EF\u7528\u5DE5\u5177\uFF08allowTools\uFF09
- \u7279\u5B9A\u5DE5\u5177\u7684\u914D\u7F6E\u9700\u6C42

[\u5728\u6B64\u63CF\u8FF0\u60A8\u7684\u5177\u4F53\u9700\u6C42]
\`\`\`

## \u751F\u6210\u8981\u6C42

\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\u751F\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\uFF1A

### \u5BF9\u4E8E REST-to-MCP \u670D\u52A1\u5668\uFF1A
1. \u5177\u6709\u63CF\u8FF0\u6027\u540D\u79F0\u548C\u9002\u5F53\u7684\u670D\u52A1\u5668\u914D\u7F6E
2. \u5B9A\u4E49\u6240\u6709\u5FC5\u8981\u7684\u53C2\u6570\uFF0C\u5E76\u63D0\u4F9B\u6E05\u6670\u7684\u63CF\u8FF0\u548C\u9002\u5F53\u7684\u7C7B\u578B\u3001\u5FC5\u586B/\u9ED8\u8BA4\u503C
3. \u9009\u62E9\u5408\u9002\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\uFF08argsToUrlParam\u3001argsToJsonBody\u3001argsToFormBody \u6216\u81EA\u5B9A\u4E49 body\uFF09
4. \u521B\u5EFA\u5C06 API \u54CD\u5E94\u8F6C\u6362\u4E3A\u9002\u5408 AI \u6D88\u8D39\u7684\u53EF\u8BFB\u683C\u5F0F\u7684 responseTemplate
5. \u914D\u7F6E\u9002\u5F53\u7684\u8BA4\u8BC1\u65B9\u6848\u548C\u5B89\u5168\u914D\u7F6E

### \u5BF9\u4E8E MCP \u4EE3\u7406\u670D\u52A1\u5668\uFF1A
1. \u9009\u62E9\u5408\u9002\u7684\u4F20\u8F93\u534F\u8BAE\uFF08\`http\` \u7528\u4E8E StreamableHTTP\uFF0C\`sse\` \u7528\u4E8E SSE\uFF09
2. \u914D\u7F6E\u540E\u7AEF MCP \u670D\u52A1\u5668 URL \u548C\u8D85\u65F6\u65F6\u95F4\uFF08SSE \u5EFA\u8BAE\u4F7F\u7528\u66F4\u957F\u7684\u8D85\u65F6\u65F6\u95F4\uFF09
3. \u8BBE\u7F6E\u670D\u52A1\u5668\u7EA7\u522B\u7684\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E
4. \u6839\u636E\u9700\u8981\u914D\u7F6E\u900F\u660E\u8BA4\u8BC1
5. \u914D\u7F6E \`allowTools\` \u4EE5\u9650\u5236\u53EF\u7528\u5DE5\u5177\uFF08\u53EF\u9009\uFF09
6. \u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF0C\u914D\u7F6E\u7279\u5B9A\u5DE5\u5177\u7684\u8BA4\u8BC1\u8986\u76D6
7. \u786E\u4FDD\u5BA2\u6237\u7AEF\u5230\u7F51\u5173\u548C\u7F51\u5173\u5230\u540E\u7AEF\u7684\u8BA4\u8BC1\u94FE\u8DEF\u5B8C\u6574

`},i=function(){return s},p=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u670D\u52A1\u5668\u914D\u7F6E",text:"\u670D\u52A1\u5668\u914D\u7F6E"},{depth:3,slug:"\u5141\u8BB8\u7684\u5DE5\u5177\u914D\u7F6E",text:"\u5141\u8BB8\u7684\u5DE5\u5177\u914D\u7F6E"},{depth:4,slug:"\u52A8\u6001\u5DE5\u5177\u6743\u9650\u63A7\u5236",text:"\u52A8\u6001\u5DE5\u5177\u6743\u9650\u63A7\u5236"},{depth:3,slug:"rest-to-mcp-\u5DE5\u5177\u914D\u7F6E",text:"REST-to-MCP \u5DE5\u5177\u914D\u7F6E"},{depth:2,slug:"mcp-\u4F20\u8F93\u534F\u8BAE",text:"MCP \u4F20\u8F93\u534F\u8BAE"},{depth:3,slug:"streamablehttp-\u534F\u8BAE-transport-http",text:"StreamableHTTP \u534F\u8BAE (transport: http)"},{depth:3,slug:"sse-\u534F\u8BAE-transport-sse",text:"SSE \u534F\u8BAE (transport: sse)"},{depth:2,slug:"\u8BA4\u8BC1\u4E0E\u5B89\u5168",text:"\u8BA4\u8BC1\u4E0E\u5B89\u5168"},{depth:3,slug:"\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848-serversecurityschemes",text:"\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848 (server.securitySchemes)"},{depth:3,slug:"\u5728\u5DE5\u5177\u4E2D\u5E94\u7528\u8BA4\u8BC1\u65B9\u6848",text:"\u5728\u5DE5\u5177\u4E2D\u5E94\u7528\u8BA4\u8BC1\u65B9\u6848"},{depth:3,slug:"\u900F\u660E\u8BA4\u8BC1-passthrough-authentication",text:"\u900F\u660E\u8BA4\u8BC1 (Passthrough Authentication)"},{depth:3,slug:"\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E",text:"\u670D\u52A1\u5668\u7EA7\u522B\u9ED8\u8BA4\u8BA4\u8BC1\u914D\u7F6E"},{depth:4,slug:"serverdefaultdownstreamsecurity",text:"server.defaultDownstreamSecurity"},{depth:4,slug:"serverdefaultupstreamsecurity",text:"server.defaultUpstreamSecurity"},{depth:4,slug:"\u4F18\u5148\u7EA7\u89C4\u5219",text:"\u4F18\u5148\u7EA7\u89C4\u5219"},{depth:4,slug:"\u4F7F\u7528\u573A\u666F",text:"\u4F7F\u7528\u573A\u666F"},{depth:2,slug:"\u53C2\u6570\u7C7B\u578B\u652F\u6301",text:"\u53C2\u6570\u7C7B\u578B\u652F\u6301"},{depth:2,slug:"\u53C2\u6570\u4F4D\u7F6E\u63A7\u5236",text:"\u53C2\u6570\u4F4D\u7F6E\u63A7\u5236"},{depth:3,slug:"\u652F\u6301\u7684\u4F4D\u7F6E\u7C7B\u578B",text:"\u652F\u6301\u7684\u4F4D\u7F6E\u7C7B\u578B"},{depth:3,slug:"\u4F7F\u7528\u793A\u4F8B",text:"\u4F7F\u7528\u793A\u4F8B"},{depth:3,slug:"\u4E0E\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\u7684\u5173\u7CFB",text:"\u4E0E\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\u7684\u5173\u7CFB"},{depth:2,slug:"\u8BF7\u6C42\u53C2\u6570\u4F20\u9012\u65B9\u5F0F",text:"\u8BF7\u6C42\u53C2\u6570\u4F20\u9012\u65B9\u5F0F"},{depth:2,slug:"\u6A21\u677F\u8BED\u6CD5",text:"\u6A21\u677F\u8BED\u6CD5"},{depth:3,slug:"\u8BF7\u6C42\u6A21\u677F",text:"\u8BF7\u6C42\u6A21\u677F"},{depth:3,slug:"\u54CD\u5E94\u6A21\u677F",text:"\u54CD\u5E94\u6A21\u677F"},{depth:3,slug:"gjson-\u8DEF\u5F84\u8BED\u6CD5",text:"GJSON \u8DEF\u5F84\u8BED\u6CD5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u4F7F\u7528\u5185\u7F6E-mcp-\u670D\u52A1\u5668\u793A\u4F8B\u914D\u7F6E-quark-search",text:"\u4F7F\u7528\u5185\u7F6E MCP \u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u914D\u7F6E quark-search"},{depth:3,slug:"mcp-\u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\u4EE3\u7406\u5230\u540E\u7AEF-mcp-\u670D\u52A1\u5668streamablehttp",text:"MCP \u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u4EE3\u7406\u5230\u540E\u7AEF MCP \u670D\u52A1\u5668\uFF08StreamableHTTP\uFF09"},{depth:3,slug:"mcp-\u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\u4F7F\u7528-sse-\u534F\u8BAE",text:"MCP \u4EE3\u7406\u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u4F7F\u7528 SSE \u534F\u8BAE"},{depth:3,slug:"mcp-\u4EE3\u7406\u670D\u52A1\u5668\u9AD8\u7EA7\u793A\u4F8B\u900F\u660E\u8BA4\u8BC1",text:"MCP \u4EE3\u7406\u670D\u52A1\u5668\u9AD8\u7EA7\u793A\u4F8B\uFF1A\u900F\u660E\u8BA4\u8BC1"},{depth:3,slug:"\u57FA\u7840\u914D\u7F6E\u793A\u4F8B\u8F6C\u6362\u9AD8\u5FB7\u5730\u56FE-api",text:"\u57FA\u7840\u914D\u7F6E\u793A\u4F8B\uFF1A\u8F6C\u6362\u9AD8\u5FB7\u5730\u56FE API"},{depth:3,slug:"\u9AD8\u7EA7\u914D\u7F6E\u793A\u4F8B\u5E26\u6709\u6761\u4EF6\u903B\u8F91\u7684\u590D\u6742\u54CD\u5E94\u5904\u7406",text:"\u9AD8\u7EA7\u914D\u7F6E\u793A\u4F8B\uFF1A\u5E26\u6709\u6761\u4EF6\u903B\u8F91\u7684\u590D\u6742\u54CD\u5E94\u5904\u7406"},{depth:3,slug:"\u4F7F\u7528-prependbody-\u548C-appendbody-\u7684\u793A\u4F8Bopenapi-\u8F6C\u6362",text:"\u4F7F\u7528 PrependBody \u548C AppendBody \u7684\u793A\u4F8B\uFF1AOpenAPI \u8F6C\u6362"},{depth:3,slug:"\u4F7F\u7528-errorresponsetemplate\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94\u7684\u793A\u4F8B",text:"\u4F7F\u7528 errorResponseTemplate\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94\u7684\u793A\u4F8B"},{depth:2,slug:"ai-\u63D0\u793A\u8BCD\u751F\u6210\u6A21\u677F",text:"AI \u63D0\u793A\u8BCD\u751F\u6210\u6A21\u677F"},{depth:3,slug:"mcp-\u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E",text:"MCP \u4EE3\u7406\u670D\u52A1\u5668\u914D\u7F6E"},{depth:4,slug:"streamablehttp-\u534F\u8BAE",text:"StreamableHTTP \u534F\u8BAE"},{depth:4,slug:"sse-\u534F\u8BAE",text:"SSE \u534F\u8BAE"},{depth:2,slug:"\u6A21\u677F\u8BED\u6CD5-1",text:"\u6A21\u677F\u8BED\u6CD5"},{depth:2,slug:"\u6211\u7684\u9700\u6C42",text:"\u6211\u7684\u9700\u6C42"},{depth:3,slug:"\u5982\u679C\u8981\u8F6C\u6362-rest-api-\u4E3A-mcp-\u5DE5\u5177",text:"\u5982\u679C\u8981\u8F6C\u6362 REST API \u4E3A MCP \u5DE5\u5177"},{depth:3,slug:"\u5982\u679C\u8981\u4EE3\u7406\u73B0\u6709\u7684-mcp-\u670D\u52A1\u5668",text:"\u5982\u679C\u8981\u4EE3\u7406\u73B0\u6709\u7684 MCP \u670D\u52A1\u5668"}]},e=c((x,f,g)=>{const{layout:F,...t}=n;return t.file=a,t.url=d,r`${v()}${y(s)}`})});export{e as Content,m as __tla,i as compiledContent,e as default,a as file,n as frontmatter,p as getHeadings,l as rawContent,d as url};
