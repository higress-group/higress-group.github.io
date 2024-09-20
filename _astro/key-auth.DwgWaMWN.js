import{c as o,__tla as p}from"./astro-component.cI6d52vQ.js";import{r,m as u,u as y,__tla as v}from"./constant.DynMic-r.js";import{__tla as b}from"./astro/assets-service.Da9pL5MS.js";let s,c,a,t,i,l,d,E=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return b}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">key-auth</code> \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E API Key \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECE HTTP \u8BF7\u6C42\u7684 URL \u53C2\u6570\u6216\u8005\u8BF7\u6C42\u5934\u89E3\u6790 API Key\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5 API Key \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002</p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>\u9009\u586B</td><td>-</td><td>\u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u673A\u5236\uFF09</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1</td></tr><tr><td><code dir="auto">keys</code></td><td>array of string</td><td>\u5FC5\u586B</td><td>-</td><td>API Key \u7684\u6765\u6E90\u5B57\u6BB5\u540D\u79F0\uFF0C\u53EF\u4EE5\u662F URL \u53C2\u6570\u6216\u8005 HTTP \u8BF7\u6C42\u5934\u540D\u79F0</td></tr><tr><td><code dir="auto">in_query</code></td><td>bool</td><td><code dir="auto">in_query</code> \u548C <code dir="auto">in_header</code> \u81F3\u5C11\u6709\u4E00\u4E2A\u4E3A true</td><td>true</td><td>\u914D\u7F6E true \u65F6\uFF0C\u7F51\u5173\u4F1A\u5C1D\u8BD5\u4ECE URL \u53C2\u6570\u4E2D\u89E3\u6790 API Key</td></tr><tr><td><code dir="auto">in_header</code></td><td>bool</td><td><code dir="auto">in_query</code> \u548C <code dir="auto">in_header</code> \u81F3\u5C11\u6709\u4E00\u4E2A\u4E3A true</td><td>true</td><td>\u914D\u7F6E true \u65F6\uFF0C\u7F51\u5173\u4F1A\u5C1D\u8BD5\u4ECE HTTP \u8BF7\u6C42\u5934\u4E2D\u89E3\u6790 API Key</td></tr></tbody></table>
<p><code dir="auto">consumers</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">credential</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u8BE5 consumer \u7684\u8BBF\u95EE\u51ED\u8BC1</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0</td></tr></tbody></table>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<ul>
<li>\u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A <code dir="auto">X-Mse-Consumer</code> \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002</li>
</ul>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F">\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F</h3>
<p>\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Key Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F <code dir="auto">credential</code> \u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">x-api-key</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F  name: consumer1\x7F- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7F  name: consumer2\x7Fkeys:\x7F- apikey\x7F- x-api-key"><div></div></button></div></figure></div>
<p><strong>\u8DEF\u7531\u7EA7\u914D\u7F6E</strong></p>
<p>\u5BF9 route-a \u548C route-b \u8FD9\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>\u5BF9 *.example.com \u548C test.com \u5728\u8FD9\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u914D\u7F6E:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p><strong>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\u3002</strong></p>
<p>\u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u4F1A\u5339\u914D\u5230 route-a \u8FD9\u6761\u8DEF\u7531\u3002</p>
<p>\u5C06 API Key \u8BBE\u7F6E\u5728 url \u53C2\u6570\u4E2D\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5"><div></div></button></div></figure></div>
<p>\u5C06 API Key \u8BBE\u7F6E\u5728 http \u8BF7\u6C42\u5934\u4E2D\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test -H &#x27;x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5&#x27;"><div></div></button></div></figure></div>
<p>\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684header\u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A <code dir="auto">X-Mse-Consumer</code> \u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A <code dir="auto">consumer1</code>\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0</p>
<p><strong>\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\u3002</strong></p>
<p>\u8BF7\u6C42\u672A\u63D0\u4F9B API Key\uFF0C\u8FD4\u56DE 401\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p>\u8BF7\u6C42\u63D0\u4F9B\u7684 API Key \u65E0\u6743\u8BBF\u95EE\uFF0C\u8FD4\u56DE 401\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BF7\u6C42\u63D0\u4F9B\u7684 API Key\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE 403\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer2\u4E0D\u5728route-a\u7684allow\u5217\u8868\u91CC</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35"><div></div></button></div></figure></div>
<h3 id="\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F">\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F</h3>
<p>\u4EE5\u4E0B\u914D\u7F6E\u672A\u6307\u5B9A <code dir="auto">matchRules</code> \u5B57\u6BB5\uFF0C\u56E0\u6B64\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40 Key Auth \u8BA4\u8BC1.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">defaultConfig</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">in_query</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="defaultConfig\x7F  consumers:\x7F  - credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F    name: consumer1\x7F  - credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7F    name: consumer2\x7F  keys:\x7F  - apikey\x7F  in_query: true"><div></div></button></div></figure></div>
<p>\u5F00\u542F <code dir="auto">matchRules</code> \u65B9\u5F0F\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="matchRules:\x7F  - config:\x7F      allow:\x7F        - consumer1"><div></div></button></div></figure></div>
<h2 id="\u76F8\u5173\u9519\u8BEF\u7801">\u76F8\u5173\u9519\u8BEF\u7801</h2>






























<table><thead><tr><th>HTTP \u72B6\u6001\u7801</th><th>\u51FA\u9519\u4FE1\u606F</th><th>\u539F\u56E0\u8BF4\u660E</th></tr></thead><tbody><tr><td>401</td><td>Request denied by Key Auth check. Muti API key found in request</td><td>\u8BF7\u6C42\u63D0\u4F9B\u591A\u4E2A API Key</td></tr><tr><td>401</td><td>Request denied by Key Auth check. No API key found in request</td><td>\u8BF7\u6C42\u672A\u63D0\u4F9B API Key</td></tr><tr><td>401</td><td>Request denied by Key Auth check. Invalid API key</td><td>\u4E0D\u5141\u8BB8\u5F53\u524D API Key \u8BBF\u95EE</td></tr><tr><td>403</td><td>Request denied by Key Auth check. Unauthorized consumer</td><td>\u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650</td></tr></tbody></table>`,t={title:"Key \u8BA4\u8BC1",keywords:["higress","auth"],description:"API Key \u8BA4\u8BC1\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E API Key \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECE HTTP \u8BF7\u6C42\u7684 URL \u53C2\u6570\u6216\u8005\u8BF7\u6C42\u5934\u89E3\u6790 API Key\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5 API Key \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/key-auth.md",d=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`key-auth\` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E API Key \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECE HTTP \u8BF7\u6C42\u7684 URL \u53C2\u6570\u6216\u8005\u8BF7\u6C42\u5934\u89E3\u6790 API Key\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5 API Key \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                        |
| ----------- | --------------- | ------------------------------------------- | ------ | ----------------------------------------------------------- |
| \`global_auth\` | bool | \u9009\u586B     | -      | \u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u673A\u5236\uFF09  |
| \`consumers\` | array of object | \u5FC5\u586B                                        | -      | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                        |
| \`keys\`      | array of string | \u5FC5\u586B                                        | -      | API Key \u7684\u6765\u6E90\u5B57\u6BB5\u540D\u79F0\uFF0C\u53EF\u4EE5\u662F URL \u53C2\u6570\u6216\u8005 HTTP \u8BF7\u6C42\u5934\u540D\u79F0 |
| \`in_query\`  | bool            | \`in_query\` \u548C \`in_header\` \u81F3\u5C11\u6709\u4E00\u4E2A\u4E3A true | true   | \u914D\u7F6E true \u65F6\uFF0C\u7F51\u5173\u4F1A\u5C1D\u8BD5\u4ECE URL \u53C2\u6570\u4E2D\u89E3\u6790 API Key           |
| \`in_header\` | bool            | \`in_query\` \u548C \`in_header\` \u81F3\u5C11\u6709\u4E00\u4E2A\u4E3A true | true   | \u914D\u7F6E true \u65F6\uFF0C\u7F51\u5173\u4F1A\u5C1D\u8BD5\u4ECE HTTP \u8BF7\u6C42\u5934\u4E2D\u89E3\u6790 API Key        |

\`consumers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                 |
| ------------ | -------- | -------- | ------ |--------------------|
| \`credential\` | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u8BBF\u95EE\u51ED\u8BC1 |
| \`name\`       | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0   |


**\u6CE8\u610F\uFF1A**
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Key Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F \`credential\` \u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D\u3002

\`\`\`yaml
global_auth: true
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
- x-api-key
\`\`\`

**\u8DEF\u7531\u7EA7\u914D\u7F6E**

\u5BF9 route-a \u548C route-b \u8FD9\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`yaml
allow: 
- consumer1
\`\`\`

\u5BF9 *.example.com \u548C test.com \u5728\u8FD9\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u914D\u7F6E:

\`\`\`yaml
allow:
- consumer2
\`\`\`

**\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\u3002**

\u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u4F1A\u5339\u914D\u5230 route-a \u8FD9\u6761\u8DEF\u7531\u3002

\u5C06 API Key \u8BBE\u7F6E\u5728 url \u53C2\u6570\u4E2D\u3002

\`\`\`bash
curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5
\`\`\`
\u5C06 API Key \u8BBE\u7F6E\u5728 http \u8BF7\u6C42\u5934\u4E2D\u3002

\`\`\`bash
curl  http://xxx.hello.com/test -H 'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'
\`\`\`

\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684header\u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A \`consumer1\`\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0

**\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\u3002**

\u8BF7\u6C42\u672A\u63D0\u4F9B API Key\uFF0C\u8FD4\u56DE 401\u3002

\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`
\u8BF7\u6C42\u63D0\u4F9B\u7684 API Key \u65E0\u6743\u8BBF\u95EE\uFF0C\u8FD4\u56DE 401\u3002

\`\`\`bash
curl  http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5
\`\`\`

\u6839\u636E\u8BF7\u6C42\u63D0\u4F9B\u7684 API Key\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE 403\u3002

\`\`\`bash
# consumer2\u4E0D\u5728route-a\u7684allow\u5217\u8868\u91CC
curl  http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

### \u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u672A\u6307\u5B9A \`matchRules\` \u5B57\u6BB5\uFF0C\u56E0\u6B64\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40 Key Auth \u8BA4\u8BC1.

\`\`\`yaml
defaultConfig
  consumers:
  - credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
    name: consumer1
  - credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
    name: consumer2
  keys:
  - apikey
  in_query: true
\`\`\`

\u5F00\u542F \`matchRules\` \u65B9\u5F0F\u5982\u4E0B\uFF1A
\`\`\`yaml
matchRules:
  - config:
      allow:
        - consumer1
\`\`\`

## \u76F8\u5173\u9519\u8BEF\u7801

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F                                                  | \u539F\u56E0\u8BF4\u660E                |
| ----------- | --------------------------------------------------------- | ----------------------- |
| 401         | Request denied by Key Auth check. Muti API key found in request | \u8BF7\u6C42\u63D0\u4F9B\u591A\u4E2A API Key      |
| 401         | Request denied by Key Auth check. No API key found in request | \u8BF7\u6C42\u672A\u63D0\u4F9B API Key      |
| 401         | Request denied by Key Auth check. Invalid API key         | \u4E0D\u5141\u8BB8\u5F53\u524D API Key \u8BBF\u95EE |
| 403         | Request denied by Key Auth check. Unauthorized consumer   | \u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650  |`},c=function(){return e},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F",text:"\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F"},{depth:3,slug:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F",text:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F"},{depth:2,slug:"\u76F8\u5173\u9519\u8BEF\u7801",text:"\u76F8\u5173\u9519\u8BEF\u7801"}]},s=o((h,m,x)=>{const{layout:f,...n}=t;return n.file=a,n.url=d,r`${u()}${y(e)}`})});export{s as Content,E as __tla,c as compiledContent,s as default,a as file,t as frontmatter,i as getHeadings,l as rawContent,d as url};
