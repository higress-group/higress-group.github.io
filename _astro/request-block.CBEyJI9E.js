import{c as n,__tla as p}from"./astro-component.CD2fzakh.js";import{r,m as v,u as E,__tla as y}from"./constant.BH97KGt6.js";import{__tla as u}from"./astro/assets-service.Bk7KqR8o.js";let e,o,a,d,c,i,t,b=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">request-block</code> \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732\u3002</p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>




































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>block_urls</td><td>array of string</td><td>\u9009\u586B\uFF0C<code dir="auto">block_urls</code>,<code dir="auto">block_headers</code>,<code dir="auto">block_bodies</code> \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D URL \u7684\u5B57\u7B26\u4E32</td></tr><tr><td>block_exact_urls</td><td>array of string</td><td>\u9009\u586B\uFF0C<code dir="auto">block_urls</code>,<code dir="auto">block_headers</code>,<code dir="auto">block_bodies</code> \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u7CBE\u786E\u5C4F\u853D URL \u7684\u5B57\u7B26\u4E32</td></tr><tr><td>block_regexp_urls</td><td>array of string</td><td>\u9009\u586B\uFF0C<code dir="auto">block_urls</code>,<code dir="auto">block_headers</code>,<code dir="auto">block_bodies</code> \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D URL \u7684\u6B63\u5219\u8868\u8FBE\u5F0F</td></tr><tr><td>block_headers</td><td>array of string</td><td>\u9009\u586B\uFF0C<code dir="auto">block_urls</code>,<code dir="auto">block_headers</code>,<code dir="auto">block_bodies</code> \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Header \u7684\u5B57\u7B26\u4E32</td></tr><tr><td>block_bodies</td><td>array of string</td><td>\u9009\u586B\uFF0C<code dir="auto">block_urls</code>,<code dir="auto">block_headers</code>,<code dir="auto">block_bodies</code> \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Body \u7684\u5B57\u7B26\u4E32</td></tr><tr><td>blocked_code</td><td>number</td><td>\u9009\u586B</td><td>403</td><td>\u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</td></tr><tr><td>blocked_message</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u5E94\u7B54 Body</td></tr><tr><td>case_sensitive</td><td>bool</td><td>\u9009\u586B</td><td>true</td><td>\u914D\u7F6E\u5339\u914D\u65F6\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u9ED8\u8BA4\u533A\u5206</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5C4F\u853D\u8BF7\u6C42-url-\u8DEF\u5F84">\u5C4F\u853D\u8BF7\u6C42 URL \u8DEF\u5F84</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_urls:\x7F- swagger.html\x7F- foo=bar\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com?foo=Bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/Swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com?foo=Bar\x7Fcurl http://exmaple.com/Swagger.html"><div></div></button></div></figure></div>
<h3 id="\u5C4F\u853D\u8BF7\u6C42-header">\u5C4F\u853D\u8BF7\u6C42 Header</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_headers:\x7F- example-key\x7F- example-value"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'example-key: 123'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'my-header: example-value'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -H &#x27;example-key: 123&#x27;\x7Fcurl http://exmaple.com -H &#x27;my-header: example-value&#x27;"><div></div></button></div></figure></div>
<h3 id="\u5C4F\u853D\u8BF7\u6C42-body">\u5C4F\u853D\u8BF7\u6C42 Body</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"hello world"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_bodies:\x7F- &#x22;hello world&#x22;\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Hello World'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'hello world'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com -d &#x27;Hello World&#x27;\x7Fcurl http://exmaple.com -d &#x27;hello world&#x27;"><div></div></button></div></figure></div>
<h3 id="\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F">\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4F7F\u7528 matchRules \u5B57\u6BB5\u8FDB\u884C\u7EC6\u7C92\u5EA6\u89C4\u5219\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u89C4\u5219\u4E00\uFF1A\u6309 Ingress \u540D\u79F0\u5339\u914D\u751F\u6548</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/foo</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"hello world"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u89C4\u5219\u4E8C\uFF1A\u6309\u57DF\u540D\u5339\u914D\u751F\u6548</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"swagger.html"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"hello world"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u4F7F\u7528 matchRules \u5B57\u6BB5\u8FDB\u884C\u7EC6\u7C92\u5EA6\u89C4\u5219\u914D\u7F6E\x7FmatchRules:\x7F# \u89C4\u5219\u4E00\uFF1A\u6309 Ingress \u540D\u79F0\u5339\u914D\u751F\u6548\x7F- ingress:\x7F  - default/foo\x7F  - default/bar\x7F  block_bodies:\x7F  - &#x22;hello world&#x22;\x7F# \u89C4\u5219\u4E8C\uFF1A\u6309\u57DF\u540D\u5339\u914D\u751F\u6548\x7F- domain:\x7F  - &#x22;*.example.com&#x22;\x7F  - test.com\x7F  block_urls:\x7F  - &#x22;swagger.html&#x22;\x7F  block_bodies:\x7F  - &#x22;hello world&#x22;"><div></div></button></div></figure></div>
<p>\u6B64\u4F8B <code dir="auto">ingress</code> \u4E2D\u6307\u5B9A\u7684 <code dir="auto">default/foo</code> \u548C <code dir="auto">default/bar</code> \u5BF9\u5E94 default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u548C bar \u7684 Ingress\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A Ingress \u65F6\uFF0C\u5C06\u4F7F\u7528\u6B64\u6BB5\u914D\u7F6E\uFF1B
\u6B64\u4F8B <code dir="auto">domain</code> \u4E2D\u6307\u5B9A\u7684 <code dir="auto">*.example.com</code> \u548C <code dir="auto">test.com</code> \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u4F7F\u7528\u6B64\u6BB5\u914D\u7F6E\uFF1B
\u914D\u7F6E\u7684\u5339\u914D\u751F\u6548\u987A\u5E8F\uFF0C\u5C06\u6309\u7167 <code dir="auto">matchRules</code> \u4E0B\u89C4\u5219\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2A\u89C4\u5219\u540E\u751F\u6548\u5BF9\u5E94\u914D\u7F6E\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565\u3002</p>
<h2 id="\u8BF7\u6C42-body-\u5927\u5C0F\u9650\u5236">\u8BF7\u6C42 Body \u5927\u5C0F\u9650\u5236</h2>
<p>\u5F53\u914D\u7F6E\u4E86 <code dir="auto">block_bodies</code> \u65F6\uFF0C\u4EC5\u652F\u6301\u5C0F\u4E8E 32 MB \u7684\u8BF7\u6C42 Body \u8FDB\u884C\u5339\u914D\u3002\u82E5\u8BF7\u6C42 Body \u5927\u4E8E\u6B64\u9650\u5236\uFF0C\u5E76\u4E14\u4E0D\u5B58\u5728\u5339\u914D\u5230\u7684 <code dir="auto">block_urls</code> \u548C <code dir="auto">block_headers</code> \u9879\u65F6\uFF0C\u4E0D\u4F1A\u5BF9\u8BE5\u8BF7\u6C42\u6267\u884C\u5C4F\u853D\u64CD\u4F5C\u3002
\u5F53\u914D\u7F6E\u4E86 <code dir="auto">block_bodies</code> \u65F6\uFF0C\u82E5\u8BF7\u6C42 Body \u8D85\u8FC7\u5168\u5C40\u914D\u7F6E DownstreamConnectionBufferLimits\uFF0C\u5C06\u8FD4\u56DE <code dir="auto">413 Payload Too Large</code>\u3002</p>`,d={title:"\u8BF7\u6C42\u5C4F\u853D",keywords:["higress"],description:"\u8BF7\u6C42\u5C4F\u853D\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732\u3002"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/request-block.md",t=void 0,i=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`request-block\` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
|  block_urls     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D URL \u7684\u5B57\u7B26\u4E32   |
|  block_exact_urls     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u7CBE\u786E\u5C4F\u853D URL \u7684\u5B57\u7B26\u4E32   |
|  block_regexp_urls     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D URL \u7684\u6B63\u5219\u8868\u8FBE\u5F0F  |
|  block_headers     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Header \u7684\u5B57\u7B26\u4E32   |
|  block_bodies     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Body \u7684\u5B57\u7B26\u4E32   |
|  blocked_code     |  number     | \u9009\u586B     |   403  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801   |
|  blocked_message     |  string     | \u9009\u586B     |   -  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u5E94\u7B54 Body   |
|  case_sensitive     |  bool     | \u9009\u586B     |   true  |  \u914D\u7F6E\u5339\u914D\u65F6\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u9ED8\u8BA4\u533A\u5206   |

## \u914D\u7F6E\u793A\u4F8B

### \u5C4F\u853D\u8BF7\u6C42 URL \u8DEF\u5F84

\`\`\`yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com?foo=Bar
curl http://exmaple.com/Swagger.html
\`\`\`

### \u5C4F\u853D\u8BF7\u6C42 Header

\`\`\`yaml
block_headers:
- example-key
- example-value
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com -H 'example-key: 123'
curl http://exmaple.com -H 'my-header: example-value'
\`\`\`

### \u5C4F\u853D\u8BF7\u6C42 Body

\`\`\`yaml
block_bodies:
- "hello world"
case_sensitive: false
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com -d 'Hello World'
curl http://exmaple.com -d 'hello world'
\`\`\`

### \u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F

\`\`\`yaml
# \u4F7F\u7528 matchRules \u5B57\u6BB5\u8FDB\u884C\u7EC6\u7C92\u5EA6\u89C4\u5219\u914D\u7F6E
matchRules:
# \u89C4\u5219\u4E00\uFF1A\u6309 Ingress \u540D\u79F0\u5339\u914D\u751F\u6548
- ingress:
  - default/foo
  - default/bar
  block_bodies: 
  - "hello world"
# \u89C4\u5219\u4E8C\uFF1A\u6309\u57DF\u540D\u5339\u914D\u751F\u6548
- domain:
  - "*.example.com"
  - test.com
  block_urls: 
  - "swagger.html"
  block_bodies:
  - "hello world"
\`\`\`

\u6B64\u4F8B \`ingress\` \u4E2D\u6307\u5B9A\u7684 \`default/foo\` \u548C \`default/bar\` \u5BF9\u5E94 default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u548C bar \u7684 Ingress\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A Ingress \u65F6\uFF0C\u5C06\u4F7F\u7528\u6B64\u6BB5\u914D\u7F6E\uFF1B
\u6B64\u4F8B \`domain\` \u4E2D\u6307\u5B9A\u7684 \`*.example.com\` \u548C \`test.com\` \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u4F7F\u7528\u6B64\u6BB5\u914D\u7F6E\uFF1B
\u914D\u7F6E\u7684\u5339\u914D\u751F\u6548\u987A\u5E8F\uFF0C\u5C06\u6309\u7167 \`matchRules\` \u4E0B\u89C4\u5219\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2A\u89C4\u5219\u540E\u751F\u6548\u5BF9\u5E94\u914D\u7F6E\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565\u3002

## \u8BF7\u6C42 Body \u5927\u5C0F\u9650\u5236

\u5F53\u914D\u7F6E\u4E86 \`block_bodies\` \u65F6\uFF0C\u4EC5\u652F\u6301\u5C0F\u4E8E 32 MB \u7684\u8BF7\u6C42 Body \u8FDB\u884C\u5339\u914D\u3002\u82E5\u8BF7\u6C42 Body \u5927\u4E8E\u6B64\u9650\u5236\uFF0C\u5E76\u4E14\u4E0D\u5B58\u5728\u5339\u914D\u5230\u7684 \`block_urls\` \u548C \`block_headers\` \u9879\u65F6\uFF0C\u4E0D\u4F1A\u5BF9\u8BE5\u8BF7\u6C42\u6267\u884C\u5C4F\u853D\u64CD\u4F5C\u3002
\u5F53\u914D\u7F6E\u4E86 \`block_bodies\` \u65F6\uFF0C\u82E5\u8BF7\u6C42 Body \u8D85\u8FC7\u5168\u5C40\u914D\u7F6E DownstreamConnectionBufferLimits\uFF0C\u5C06\u8FD4\u56DE \`413 Payload Too Large\`\u3002`},o=function(){return s},c=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5C4F\u853D\u8BF7\u6C42-url-\u8DEF\u5F84",text:"\u5C4F\u853D\u8BF7\u6C42 URL \u8DEF\u5F84"},{depth:3,slug:"\u5C4F\u853D\u8BF7\u6C42-header",text:"\u5C4F\u853D\u8BF7\u6C42 Header"},{depth:3,slug:"\u5C4F\u853D\u8BF7\u6C42-body",text:"\u5C4F\u853D\u8BF7\u6C42 Body"},{depth:3,slug:"\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F",text:"\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F"},{depth:2,slug:"\u8BF7\u6C42-body-\u5927\u5C0F\u9650\u5236",text:"\u8BF7\u6C42 Body \u5927\u5C0F\u9650\u5236"}]},e=n((h,m,f)=>{const{layout:x,...l}=d;return l.file=a,l.url=t,r`${v()}${E(s)}`})});export{e as Content,b as __tla,o as compiledContent,e as default,a as file,d as frontmatter,c as getHeadings,i as rawContent,t as url};
