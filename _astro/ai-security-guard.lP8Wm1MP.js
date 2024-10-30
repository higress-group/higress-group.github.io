import{c as l,__tla as o}from"./astro-component.DIa0fJKh.js";import{r,m as v,u as y,__tla as X}from"./constant.XaZN9xy-.js";import{__tla as E}from"./astro/assets-service.tyfV9CK3.js";let e,d,t,a,c,p,n,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u901A\u8FC7\u5BF9\u63A5\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u5927\u6A21\u578B\u7684\u8F93\u5165\u8F93\u51FA\uFF0C\u4FDD\u969CAI\u5E94\u7528\u5185\u5BB9\u5408\u6CD5\u5408\u89C4\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">300</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>














































































































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>requried</td><td>-</td><td>\u670D\u52A1\u540D</td></tr><tr><td><code dir="auto">servicePort</code></td><td>string</td><td>requried</td><td>-</td><td>\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td><code dir="auto">serviceHost</code></td><td>string</td><td>requried</td><td>-</td><td>\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168endpoint\u7684\u57DF\u540D</td></tr><tr><td><code dir="auto">accessKey</code></td><td>string</td><td>requried</td><td>-</td><td>\u963F\u91CC\u4E91AK</td></tr><tr><td><code dir="auto">secretKey</code></td><td>string</td><td>requried</td><td>-</td><td>\u963F\u91CC\u4E91SK</td></tr><tr><td><code dir="auto">checkRequest</code></td><td>bool</td><td>optional</td><td>false</td><td>\u68C0\u67E5\u63D0\u95EE\u5185\u5BB9\u662F\u5426\u5408\u89C4</td></tr><tr><td><code dir="auto">checkResponse</code></td><td>bool</td><td>optional</td><td>false</td><td>\u68C0\u67E5\u5927\u6A21\u578B\u7684\u56DE\u7B54\u5185\u5BB9\u662F\u5426\u5408\u89C4\uFF0C\u751F\u6548\u65F6\u4F1A\u4F7F\u6D41\u5F0F\u54CD\u5E94\u53D8\u4E3A\u975E\u6D41\u5F0F</td></tr><tr><td><code dir="auto">requestCheckService</code></td><td>string</td><td>optional</td><td>llm_query_moderation</td><td>\u6307\u5B9A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7528\u4E8E\u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u7684\u670D\u52A1</td></tr><tr><td><code dir="auto">responseCheckService</code></td><td>string</td><td>optional</td><td>llm_response_moderation</td><td>\u6307\u5B9A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7528\u4E8E\u68C0\u6D4B\u8F93\u51FA\u5185\u5BB9\u7684\u670D\u52A1</td></tr><tr><td><code dir="auto">requestContentJsonPath</code></td><td>string</td><td>optional</td><td><code dir="auto">messages.@reverse.0.content</code></td><td>\u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u8BF7\u6C42body\u4E2D\u7684jsonpath</td></tr><tr><td><code dir="auto">responseContentJsonPath</code></td><td>string</td><td>optional</td><td><code dir="auto">choices.0.message.content</code></td><td>\u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u54CD\u5E94body\u4E2D\u7684jsonpath</td></tr><tr><td><code dir="auto">responseStreamContentJsonPath</code></td><td>string</td><td>optional</td><td><code dir="auto">choices.0.delta.content</code></td><td>\u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u6D41\u5F0F\u54CD\u5E94body\u4E2D\u7684jsonpath</td></tr><tr><td><code dir="auto">denyCode</code></td><td>int</td><td>optional</td><td>200</td><td>\u6307\u5B9A\u5185\u5BB9\u975E\u6CD5\u65F6\u7684\u54CD\u5E94\u72B6\u6001\u7801</td></tr><tr><td><code dir="auto">denyMessage</code></td><td>string</td><td>optional</td><td>openai\u683C\u5F0F\u7684\u6D41\u5931/\u975E\u6D41\u5F0F\u54CD\u5E94\uFF0C\u56DE\u7B54\u5185\u5BB9\u4E3A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7684\u5EFA\u8BAE\u56DE\u7B54</td><td>\u6307\u5B9A\u5185\u5BB9\u975E\u6CD5\u65F6\u7684\u54CD\u5E94\u5185\u5BB9</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u524D\u63D0\u6761\u4EF6">\u524D\u63D0\u6761\u4EF6</h3>
<p>\u7531\u4E8E\u63D2\u4EF6\u4E2D\u9700\u8981\u8C03\u7528\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u670D\u52A1\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u521B\u5EFA\u4E00\u4E2ADNS\u7C7B\u578B\u7684\u670D\u52A1\uFF0C\u4F8B\u5982\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN013AbDcn1slCY19inU2_!!6000000005806-0-tps-1754-1320.jpg" alt="" referrerpolicy="no-referrer"></p>
<h3 id="\u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u662F\u5426\u5408\u89C4">\u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u662F\u5426\u5408\u89C4</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">safecheck.dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"green-cip.cn-shanghai.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">accessKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secretKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkRequest</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: safecheck.dns\x7FservicePort: 443\x7FserviceHost: &#x22;green-cip.cn-shanghai.aliyuncs.com&#x22;\x7FaccessKey: &#x22;XXXXXXXXX&#x22;\x7FsecretKey: &#x22;XXXXXXXXXXXXXXX&#x22;\x7FcheckRequest: true"><div></div></button></div></figure></div>
<h3 id="\u68C0\u6D4B\u8F93\u5165\u4E0E\u8F93\u51FA\u662F\u5426\u5408\u89C4">\u68C0\u6D4B\u8F93\u5165\u4E0E\u8F93\u51FA\u662F\u5426\u5408\u89C4</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">safecheck.dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">green-cip.cn-shanghai.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">accessKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secretKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkRequest</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkResponse</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: safecheck.dns\x7FservicePort: 443\x7FserviceHost: green-cip.cn-shanghai.aliyuncs.com\x7FaccessKey: &#x22;XXXXXXXXX&#x22;\x7FsecretKey: &#x22;XXXXXXXXXXXXXXX&#x22;\x7FcheckRequest: true\x7FcheckResponse: true"><div></div></button></div></figure></div>
<h3 id="\u6307\u5B9A\u81EA\u5B9A\u4E49\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1">\u6307\u5B9A\u81EA\u5B9A\u4E49\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1</h3>
<p>\u7528\u6237\u53EF\u80FD\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u573A\u666F\u914D\u7F6E\u4E0D\u540C\u7684\u68C0\u6D4B\u89C4\u5219\uFF0C\u8BE5\u95EE\u9898\u53EF\u901A\u8FC7\u4E3A\u4E0D\u540C\u57DF\u540D/\u8DEF\u7531/\u670D\u52A1\u914D\u7F6E\u4E0D\u540C\u7684\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1\u5B9E\u73B0\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A llm_query_moderation_01 \u7684\u68C0\u6D4B\u670D\u52A1\uFF0C\u5176\u4E2D\u7684\u68C0\u6D4B\u89C4\u5219\u5728 llm_query_moderation \u4E4B\u4E0A\u505A\u4E86\u4E00\u4E9B\u6539\u52A8\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01bAtcvn1N9sB16iiZR_!!6000000001528-0-tps-2728-822.jpg" alt="" referrerpolicy="no-referrer"></p>
<p>\u63A5\u4E0B\u6765\u5728\u76EE\u6807\u57DF\u540D/\u8DEF\u7531/\u670D\u52A1\u7EA7\u522B\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u6307\u5B9A\u4F7F\u7528\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684 llm_query_moderation_01 \u4E2D\u7684\u89C4\u5219\u8FDB\u884C\u68C0\u6D4B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">safecheck.dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"green-cip.cn-shanghai.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">accessKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secretKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkRequest</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestCheckService</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">llm_query_moderation_01</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: safecheck.dns\x7FservicePort: 443\x7FserviceHost: &#x22;green-cip.cn-shanghai.aliyuncs.com&#x22;\x7FaccessKey: &#x22;XXXXXXXXX&#x22;\x7FsecretKey: &#x22;XXXXXXXXXXXXXXX&#x22;\x7FcheckRequest: true\x7FrequestCheckService: llm_query_moderation_01"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6E\u975Eopenai\u534F\u8BAE\u4F8B\u5982\u767E\u70BCapp">\u914D\u7F6E\u975Eopenai\u534F\u8BAE\uFF08\u4F8B\u5982\u767E\u70BCApp\uFF09</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">safecheck.dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"green-cip.cn-shanghai.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">accessKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secretKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkRequest</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkResponse</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">requestContentJsonPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"input.prompt"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">responseContentJsonPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"output.text"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">denyCode</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">denyMessage</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u5F88\u62B1\u6B49\uFF0C\u6211\u65E0\u6CD5\u56DE\u7B54\u60A8\u7684\u95EE\u9898"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: safecheck.dns\x7FservicePort: 443\x7FserviceHost: &#x22;green-cip.cn-shanghai.aliyuncs.com&#x22;\x7FaccessKey: &#x22;XXXXXXXXX&#x22;\x7FsecretKey: &#x22;XXXXXXXXXXXXXXX&#x22;\x7FcheckRequest: true\x7FcheckResponse: true\x7FrequestContentJsonPath: &#x22;input.prompt&#x22;\x7FresponseContentJsonPath: &#x22;output.text&#x22;\x7FdenyCode: 200\x7FdenyMessage: &#x22;\u5F88\u62B1\u6B49\uFF0C\u6211\u65E0\u6CD5\u56DE\u7B54\u60A8\u7684\u95EE\u9898&#x22;"><div></div></button></div></figure></div>
<h2 id="\u53EF\u89C2\u6D4B">\u53EF\u89C2\u6D4B</h2>
<h3 id="metric">Metric</h3>
<p>ai-security-guard \u63D2\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u76D1\u63A7\u6307\u6807\uFF1A</p>
<ul>
<li><code dir="auto">ai_sec_request_deny</code>: \u8BF7\u6C42\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u5931\u8D25\u8BF7\u6C42\u6570</li>
<li><code dir="auto">ai_sec_response_deny</code>: \u6A21\u578B\u56DE\u7B54\u5B89\u5168\u68C0\u6D4B\u5931\u8D25\u8BF7\u6C42\u6570</li>
</ul>
<h3 id="trace">Trace</h3>
<p>\u5982\u679C\u5F00\u542F\u4E86\u94FE\u8DEF\u8FFD\u8E2A\uFF0Cai-security-guard \u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42 span \u4E2D\u6DFB\u52A0\u4EE5\u4E0B attributes:</p>
<ul>
<li><code dir="auto">ai_sec_risklabel</code>: \u8868\u793A\u8BF7\u6C42\u547D\u4E2D\u7684\u98CE\u9669\u7C7B\u578B</li>
<li><code dir="auto">ai_sec_deny_phase</code>: \u8868\u793A\u8BF7\u6C42\u88AB\u68C0\u6D4B\u5230\u98CE\u9669\u7684\u9636\u6BB5\uFF08\u53D6\u503C\u4E3Arequest\u6216\u8005response\uFF09</li>
</ul>
<h2 id="\u8BF7\u6C42\u793A\u4F8B">\u8BF7\u6C42\u793A\u4F8B</h2>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/v1/chat/completions</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-4o-mini",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u8FD9\u662F\u4E00\u6BB5\u975E\u6CD5\u5185\u5BB9"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/v1/chat/completions \\\x7F-H &#x22;Content-Type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-4o-mini&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u8FD9\u662F\u4E00\u6BB5\u975E\u6CD5\u5185\u5BB9&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<p>\u8BF7\u6C42\u5185\u5BB9\u4F1A\u88AB\u53D1\u9001\u5230\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u670D\u52A1\u8FDB\u884C\u68C0\u6D4B\uFF0C\u5982\u679C\u8BF7\u6C42\u5185\u5BB9\u68C0\u6D4B\u7ED3\u679C\u4E3A\u975E\u6CD5\uFF0C\u7F51\u5173\u5C06\u8FD4\u56DE\u5F62\u5982\u4EE5\u4E0B\u7684\u56DE\u7B54\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chatcmpl-123"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"object"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat.completion"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"created"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1677652288</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4o-mini"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"system_fingerprint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"fp_44709d6fcb"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"choices"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"index"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"assistant"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F5C\u4E3A\u4E00\u540D\u4EBA\u5DE5\u667A\u80FD\u52A9\u624B\uFF0C\u6211\u4E0D\u80FD\u63D0\u4F9B\u6D89\u53CA\u8272\u60C5\u3001\u66B4\u529B\u3001\u653F\u6CBB\u7B49\u654F\u611F\u8BDD\u9898\u7684\u5185\u5BB9\u3002\u5982\u679C\u60A8\u6709\u5176\u4ED6\u76F8\u5173\u95EE\u9898\uFF0C\u6B22\u8FCE\u60A8\u63D0\u95EE\u3002"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"logprobs"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">null</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"finish_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"stop"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;id&#x22;: &#x22;chatcmpl-123&#x22;,\x7F    &#x22;object&#x22;: &#x22;chat.completion&#x22;,\x7F    &#x22;created&#x22;: 1677652288,\x7F    &#x22;model&#x22;: &#x22;gpt-4o-mini&#x22;,\x7F    &#x22;system_fingerprint&#x22;: &#x22;fp_44709d6fcb&#x22;,\x7F    &#x22;choices&#x22;: [\x7F        {\x7F            &#x22;index&#x22;: 0,\x7F            &#x22;message&#x22;: {\x7F                &#x22;role&#x22;: &#x22;assistant&#x22;,\x7F                &#x22;content&#x22;: &#x22;\u4F5C\u4E3A\u4E00\u540D\u4EBA\u5DE5\u667A\u80FD\u52A9\u624B\uFF0C\u6211\u4E0D\u80FD\u63D0\u4F9B\u6D89\u53CA\u8272\u60C5\u3001\u66B4\u529B\u3001\u653F\u6CBB\u7B49\u654F\u611F\u8BDD\u9898\u7684\u5185\u5BB9\u3002\u5982\u679C\u60A8\u6709\u5176\u4ED6\u76F8\u5173\u95EE\u9898\uFF0C\u6B22\u8FCE\u60A8\u63D0\u95EE\u3002&#x22;,\x7F            },\x7F            &#x22;logprobs&#x22;: null,\x7F            &#x22;finish_reason&#x22;: &#x22;stop&#x22;\x7F        }\x7F    ]\x7F}"><div></div></button></div></figure></div>`,a={title:"AI\u5185\u5BB9\u5B89\u5168",keywords:["higress","AI","security"],description:"\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-security-guard.md",n=void 0,p=function(){return`
## \u529F\u80FD\u8BF4\u660E
\u901A\u8FC7\u5BF9\u63A5\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u5927\u6A21\u578B\u7684\u8F93\u5165\u8F93\u51FA\uFF0C\u4FDD\u969CAI\u5E94\u7528\u5185\u5BB9\u5408\u6CD5\u5408\u89C4\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`300\`

## \u914D\u7F6E\u8BF4\u660E
| Name | Type | Requirement | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| \`serviceName\` | string | requried | - | \u670D\u52A1\u540D |
| \`servicePort\` | string | requried | - | \u670D\u52A1\u7AEF\u53E3 |
| \`serviceHost\` | string | requried | - | \u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168endpoint\u7684\u57DF\u540D |
| \`accessKey\` | string | requried | - | \u963F\u91CC\u4E91AK |
| \`secretKey\` | string | requried | - | \u963F\u91CC\u4E91SK |
| \`checkRequest\` | bool | optional | false | \u68C0\u67E5\u63D0\u95EE\u5185\u5BB9\u662F\u5426\u5408\u89C4 |
| \`checkResponse\` | bool | optional | false | \u68C0\u67E5\u5927\u6A21\u578B\u7684\u56DE\u7B54\u5185\u5BB9\u662F\u5426\u5408\u89C4\uFF0C\u751F\u6548\u65F6\u4F1A\u4F7F\u6D41\u5F0F\u54CD\u5E94\u53D8\u4E3A\u975E\u6D41\u5F0F |
| \`requestCheckService\` | string | optional | llm_query_moderation | \u6307\u5B9A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7528\u4E8E\u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u7684\u670D\u52A1 |
| \`responseCheckService\` | string | optional | llm_response_moderation | \u6307\u5B9A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7528\u4E8E\u68C0\u6D4B\u8F93\u51FA\u5185\u5BB9\u7684\u670D\u52A1 |
| \`requestContentJsonPath\` | string | optional | \`messages.@reverse.0.content\` | \u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u8BF7\u6C42body\u4E2D\u7684jsonpath |
| \`responseContentJsonPath\` | string | optional | \`choices.0.message.content\` | \u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u54CD\u5E94body\u4E2D\u7684jsonpath |
| \`responseStreamContentJsonPath\` | string | optional | \`choices.0.delta.content\` | \u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u6D41\u5F0F\u54CD\u5E94body\u4E2D\u7684jsonpath |
| \`denyCode\` | int | optional | 200 | \u6307\u5B9A\u5185\u5BB9\u975E\u6CD5\u65F6\u7684\u54CD\u5E94\u72B6\u6001\u7801 |
| \`denyMessage\` | string | optional | openai\u683C\u5F0F\u7684\u6D41\u5931/\u975E\u6D41\u5F0F\u54CD\u5E94\uFF0C\u56DE\u7B54\u5185\u5BB9\u4E3A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7684\u5EFA\u8BAE\u56DE\u7B54 | \u6307\u5B9A\u5185\u5BB9\u975E\u6CD5\u65F6\u7684\u54CD\u5E94\u5185\u5BB9 |


## \u914D\u7F6E\u793A\u4F8B
### \u524D\u63D0\u6761\u4EF6
\u7531\u4E8E\u63D2\u4EF6\u4E2D\u9700\u8981\u8C03\u7528\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u670D\u52A1\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u521B\u5EFA\u4E00\u4E2ADNS\u7C7B\u578B\u7684\u670D\u52A1\uFF0C\u4F8B\u5982\uFF1A

![](https://img.alicdn.com/imgextra/i4/O1CN013AbDcn1slCY19inU2_!!6000000005806-0-tps-1754-1320.jpg)

### \u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u662F\u5426\u5408\u89C4

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: "green-cip.cn-shanghai.aliyuncs.com"
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
\`\`\`

### \u68C0\u6D4B\u8F93\u5165\u4E0E\u8F93\u51FA\u662F\u5426\u5408\u89C4

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: green-cip.cn-shanghai.aliyuncs.com
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
checkResponse: true
\`\`\`

### \u6307\u5B9A\u81EA\u5B9A\u4E49\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1
\u7528\u6237\u53EF\u80FD\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u573A\u666F\u914D\u7F6E\u4E0D\u540C\u7684\u68C0\u6D4B\u89C4\u5219\uFF0C\u8BE5\u95EE\u9898\u53EF\u901A\u8FC7\u4E3A\u4E0D\u540C\u57DF\u540D/\u8DEF\u7531/\u670D\u52A1\u914D\u7F6E\u4E0D\u540C\u7684\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1\u5B9E\u73B0\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A llm_query_moderation_01 \u7684\u68C0\u6D4B\u670D\u52A1\uFF0C\u5176\u4E2D\u7684\u68C0\u6D4B\u89C4\u5219\u5728 llm_query_moderation \u4E4B\u4E0A\u505A\u4E86\u4E00\u4E9B\u6539\u52A8\uFF1A

![](https://img.alicdn.com/imgextra/i4/O1CN01bAtcvn1N9sB16iiZR_!!6000000001528-0-tps-2728-822.jpg)

\u63A5\u4E0B\u6765\u5728\u76EE\u6807\u57DF\u540D/\u8DEF\u7531/\u670D\u52A1\u7EA7\u522B\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u6307\u5B9A\u4F7F\u7528\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684 llm_query_moderation_01 \u4E2D\u7684\u89C4\u5219\u8FDB\u884C\u68C0\u6D4B\uFF1A

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: "green-cip.cn-shanghai.aliyuncs.com"
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
requestCheckService: llm_query_moderation_01
\`\`\`

### \u914D\u7F6E\u975Eopenai\u534F\u8BAE\uFF08\u4F8B\u5982\u767E\u70BCApp\uFF09

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: "green-cip.cn-shanghai.aliyuncs.com"
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
checkResponse: true
requestContentJsonPath: "input.prompt"
responseContentJsonPath: "output.text"
denyCode: 200
denyMessage: "\u5F88\u62B1\u6B49\uFF0C\u6211\u65E0\u6CD5\u56DE\u7B54\u60A8\u7684\u95EE\u9898"
\`\`\`

## \u53EF\u89C2\u6D4B
### Metric
ai-security-guard \u63D2\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u76D1\u63A7\u6307\u6807\uFF1A
- \`ai_sec_request_deny\`: \u8BF7\u6C42\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u5931\u8D25\u8BF7\u6C42\u6570
- \`ai_sec_response_deny\`: \u6A21\u578B\u56DE\u7B54\u5B89\u5168\u68C0\u6D4B\u5931\u8D25\u8BF7\u6C42\u6570

### Trace
\u5982\u679C\u5F00\u542F\u4E86\u94FE\u8DEF\u8FFD\u8E2A\uFF0Cai-security-guard \u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42 span \u4E2D\u6DFB\u52A0\u4EE5\u4E0B attributes:
- \`ai_sec_risklabel\`: \u8868\u793A\u8BF7\u6C42\u547D\u4E2D\u7684\u98CE\u9669\u7C7B\u578B
- \`ai_sec_deny_phase\`: \u8868\u793A\u8BF7\u6C42\u88AB\u68C0\u6D4B\u5230\u98CE\u9669\u7684\u9636\u6BB5\uFF08\u53D6\u503C\u4E3Arequest\u6216\u8005response\uFF09

## \u8BF7\u6C42\u793A\u4F8B
\`\`\`bash
curl http://localhost/v1/chat/completions \\
-H "Content-Type: application/json" \\
-d '{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "user",
      "content": "\u8FD9\u662F\u4E00\u6BB5\u975E\u6CD5\u5185\u5BB9"
    }
  ]
}'
\`\`\`

\u8BF7\u6C42\u5185\u5BB9\u4F1A\u88AB\u53D1\u9001\u5230\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u670D\u52A1\u8FDB\u884C\u68C0\u6D4B\uFF0C\u5982\u679C\u8BF7\u6C42\u5185\u5BB9\u68C0\u6D4B\u7ED3\u679C\u4E3A\u975E\u6CD5\uFF0C\u7F51\u5173\u5C06\u8FD4\u56DE\u5F62\u5982\u4EE5\u4E0B\u7684\u56DE\u7B54\uFF1A

\`\`\`json
{
    "id": "chatcmpl-123",
    "object": "chat.completion",
    "created": 1677652288,
    "model": "gpt-4o-mini",
    "system_fingerprint": "fp_44709d6fcb",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\u4F5C\u4E3A\u4E00\u540D\u4EBA\u5DE5\u667A\u80FD\u52A9\u624B\uFF0C\u6211\u4E0D\u80FD\u63D0\u4F9B\u6D89\u53CA\u8272\u60C5\u3001\u66B4\u529B\u3001\u653F\u6CBB\u7B49\u654F\u611F\u8BDD\u9898\u7684\u5185\u5BB9\u3002\u5982\u679C\u60A8\u6709\u5176\u4ED6\u76F8\u5173\u95EE\u9898\uFF0C\u6B22\u8FCE\u60A8\u63D0\u95EE\u3002",
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ]
}
\`\`\`
`},d=function(){return s},c=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u524D\u63D0\u6761\u4EF6",text:"\u524D\u63D0\u6761\u4EF6"},{depth:3,slug:"\u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u662F\u5426\u5408\u89C4",text:"\u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u662F\u5426\u5408\u89C4"},{depth:3,slug:"\u68C0\u6D4B\u8F93\u5165\u4E0E\u8F93\u51FA\u662F\u5426\u5408\u89C4",text:"\u68C0\u6D4B\u8F93\u5165\u4E0E\u8F93\u51FA\u662F\u5426\u5408\u89C4"},{depth:3,slug:"\u6307\u5B9A\u81EA\u5B9A\u4E49\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1",text:"\u6307\u5B9A\u81EA\u5B9A\u4E49\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1"},{depth:3,slug:"\u914D\u7F6E\u975Eopenai\u534F\u8BAE\u4F8B\u5982\u767E\u70BCapp",text:"\u914D\u7F6E\u975Eopenai\u534F\u8BAE\uFF08\u4F8B\u5982\u767E\u70BCApp\uFF09"},{depth:2,slug:"\u53EF\u89C2\u6D4B",text:"\u53EF\u89C2\u6D4B"},{depth:3,slug:"metric",text:"Metric"},{depth:3,slug:"trace",text:"Trace"},{depth:2,slug:"\u8BF7\u6C42\u793A\u4F8B",text:"\u8BF7\u6C42\u793A\u4F8B"}]},e=l((h,x,F)=>{const{layout:g,...i}=a;return i.file=t,i.url=n,r`${v()}${y(s)}`})});export{e as Content,u as __tla,d as compiledContent,e as default,t as file,a as frontmatter,c as getHeadings,p as rawContent,n as url};
