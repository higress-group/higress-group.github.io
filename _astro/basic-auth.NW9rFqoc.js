import{c as l,__tla as p}from"./astro-component.cI6d52vQ.js";import{r,m as u,u as h,__tla as v}from"./constant.tyGMsvAz.js";import{__tla as m}from"./astro/assets-service.Da9pL5MS.js";let e,o,s,a,c,i,d,y=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">basic-auth</code> \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HTTP Basic Auth \u6807\u51C6\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002</p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<h3 id="\u5168\u5C40\u914D\u7F6E">\u5168\u5C40\u914D\u7F6E</h3>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1</td></tr><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>\u9009\u586B</td><td>-</td><td>\u82E5\u914D\u7F6E\u4E3A true\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3A false\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u673A\u5236\uFF09</td></tr></tbody></table>
<p><code dir="auto">consumers</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">credential</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u8BE5 consumer \u7684\u8BBF\u95EE\u51ED\u8BC1</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0</td></tr></tbody></table>
<h3 id="\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E">\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E</h3>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer \u540D\u79F0</td></tr></tbody></table>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<ul>
<li>\u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A <code dir="auto">X-Mse-Consumer</code> \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002</li>
</ul>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F\u8BA4\u8BC1\u548C\u9274\u6743">\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F\u8BA4\u8BC1\u548C\u9274\u6743</h3>
<p>\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Basic Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F\u51ED\u8BC1\u4FE1\u606F\u4E2D\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u95F4\u4F7F\u7528 \u201D:\u201D \u5206\u9694\uFF0C<code dir="auto">credential</code> \u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D</p>
<p><strong>\u5168\u5C40\u914D\u7F6E</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'admin:123456'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'guest:abc'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="consumers:\x7F- credential: &#x27;admin:123456&#x27;\x7F  name: consumer1\x7F- credential: &#x27;guest:abc&#x27;\x7F  name: consumer2\x7Fglobal_auth: false"><div></div></button></div></figure></div>
<p><strong>\u8DEF\u7531\u7EA7\u914D\u7F6E</strong></p>
<p>\u5BF9 route-a \u548C route-b \u8FD9\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>\u5BF9 *.example.com \u548C test.com \u5728\u8FD9\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u914D\u7F6E:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p>\u82E5\u662F\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF0C\u6B64\u4F8B\u6307\u5B9A\u7684 <code dir="auto">route-a</code> \u548C <code dir="auto">route-b</code> \u5373\u5728\u63A7\u5236\u53F0\u521B\u5EFA\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8 <code dir="auto">name</code> \u4E3A <code dir="auto">consumer1</code> \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\uFF1B</p>
<p>\u6B64\u4F8B\u6307\u5B9A\u7684 <code dir="auto">*.example.com</code> \u548C <code dir="auto">test.com</code> \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8 <code dir="auto">name</code> \u4E3A <code dir="auto">consumer2</code> \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002</p>
<p><strong>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\u3002</strong></p>
<p>\u8BF7\u6C42\u6307\u5B9A\u7528\u6237\u540D\u5BC6\u7801\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u4F1A\u5339\u914D\u5230 route-a \u8DEF\u7531</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4F7F\u7528 curl \u7684 -u \u53C2\u6570\u6307\u5B9A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin:123456</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u6216\u8005\u76F4\u63A5\u6307\u5B9A Authorization \u8BF7\u6C42\u5934\uFF0C\u7528\u6237\u540D\u5BC6\u7801\u4F7F\u7528 base64 \u7F16\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Basic YWRtaW46MTIzNDU2'</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u admin:123456  http://xxx.hello.com/test\x7Fcurl -H &#x27;Authorization: Basic YWRtaW46MTIzNDU2&#x27;  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p>\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684 header \u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A <code dir="auto">X-Mse-Consumer</code> \u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A <code dir="auto">consumer1</code>\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0</p>
<p><strong>\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\u3002</strong></p>
<p>\u8BF7\u6C42\u672A\u63D0\u4F9B\u7528\u6237\u540D\u5BC6\u7801\uFF0C\u8FD4\u56DE 401\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p>\u8BF7\u6C42\u63D0\u4F9B\u7684\u7528\u6237\u540D\u5BC6\u7801\u9519\u8BEF\uFF0C\u8FD4\u56DE401\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">admin:abc</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u admin:abc  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p>\u6839\u636E\u8BF7\u6C42\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE 403\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer2 \u4E0D\u5728 route-a \u7684 allow \u5217\u8868\u91CC</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-u</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">guest:abc</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -u guest:abc  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<h2 id="\u76F8\u5173\u9519\u8BEF\u7801">\u76F8\u5173\u9519\u8BEF\u7801</h2>

























<table><thead><tr><th>HTTP \u72B6\u6001\u7801</th><th>\u51FA\u9519\u4FE1\u606F</th><th>\u539F\u56E0\u8BF4\u660E</th></tr></thead><tbody><tr><td>401</td><td>Request denied by Basic Auth check. No Basic Authentication information found.</td><td>\u8BF7\u6C42\u672A\u63D0\u4F9B\u51ED\u8BC1</td></tr><tr><td>401</td><td>Request denied by Basic Auth check. Invalid username and/or password</td><td>\u8BF7\u6C42\u51ED\u8BC1\u65E0\u6548</td></tr><tr><td>403</td><td>Request denied by Basic Auth check. Unauthorized consumer</td><td>\u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650</td></tr></tbody></table>`,a={title:"Basic \u8BA4\u8BC1",keywords:["higress","auth"],description:"Basic \u8BA4\u8BC1\u63D2\u4EF6\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HTTP Basic Auth \u6807\u51C6\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/basic-auth.md",d=void 0,i=function(){return`
## \u529F\u80FD\u8BF4\u660E
\`basic-auth\` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HTTP Basic Auth \u6807\u51C6\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002

## \u914D\u7F6E\u5B57\u6BB5

### \u5168\u5C40\u914D\u7F6E

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                               |
| ----------- | --------------- | -------- | ------ |----------------------------------------------------------------------------------|
| \`consumers\` | array of object | \u5FC5\u586B     | -      | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                                                               |
| \`global_auth\` | bool | \u9009\u586B     | -      | \u82E5\u914D\u7F6E\u4E3A true\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3A false\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u673A\u5236\uFF09 |

\`consumers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                 |
| ------------ | -------- | -------- | ------ |--------------------|
| \`credential\` | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u8BBF\u95EE\u51ED\u8BC1 |
| \`name\`       | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0   |

### \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                          | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                              |
| ---------------- | --------------- | ------------------------------------------------- | ------ |---------------------------------|
| \`allow\`          | array of string | \u5FC5\u586B                                              | -      | \u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer \u540D\u79F0 |

**\u6CE8\u610F\uFF1A**
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F\u8BA4\u8BC1\u548C\u9274\u6743

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Basic Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F\u51ED\u8BC1\u4FE1\u606F\u4E2D\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u95F4\u4F7F\u7528 ":" \u5206\u9694\uFF0C\`credential\` \u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D

**\u5168\u5C40\u914D\u7F6E**

\`\`\`yaml
consumers:
- credential: 'admin:123456'
  name: consumer1
- credential: 'guest:abc'
  name: consumer2
global_auth: false
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

\u82E5\u662F\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF0C\u6B64\u4F8B\u6307\u5B9A\u7684 \`route-a\` \u548C \`route-b\` \u5373\u5728\u63A7\u5236\u53F0\u521B\u5EFA\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8 \`name\` \u4E3A \`consumer1\` \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\uFF1B

\u6B64\u4F8B\u6307\u5B9A\u7684 \`*.example.com\` \u548C \`test.com\` \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8 \`name\` \u4E3A \`consumer2\` \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002

**\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\u3002**

\u8BF7\u6C42\u6307\u5B9A\u7528\u6237\u540D\u5BC6\u7801\u3002

\`\`\`bash
# \u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u4F1A\u5339\u914D\u5230 route-a \u8DEF\u7531
# \u4F7F\u7528 curl \u7684 -u \u53C2\u6570\u6307\u5B9A
curl -u admin:123456  http://xxx.hello.com/test
# \u6216\u8005\u76F4\u63A5\u6307\u5B9A Authorization \u8BF7\u6C42\u5934\uFF0C\u7528\u6237\u540D\u5BC6\u7801\u4F7F\u7528 base64 \u7F16\u7801
curl -H 'Authorization: Basic YWRtaW46MTIzNDU2'  http://xxx.hello.com/test
\`\`\`

\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684 header \u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A \`consumer1\`\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0

**\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\u3002**

\u8BF7\u6C42\u672A\u63D0\u4F9B\u7528\u6237\u540D\u5BC6\u7801\uFF0C\u8FD4\u56DE 401\u3002

\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`
\u8BF7\u6C42\u63D0\u4F9B\u7684\u7528\u6237\u540D\u5BC6\u7801\u9519\u8BEF\uFF0C\u8FD4\u56DE401\u3002

\`\`\`bash
curl -u admin:abc  http://xxx.hello.com/test
\`\`\`

\u6839\u636E\u8BF7\u6C42\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE 403\u3002

\`\`\`bash
# consumer2 \u4E0D\u5728 route-a \u7684 allow \u5217\u8868\u91CC
curl -u guest:abc  http://xxx.hello.com/test
\`\`\`

## \u76F8\u5173\u9519\u8BEF\u7801

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F                                                                       | \u539F\u56E0\u8BF4\u660E               |
| ----------- | ------------------------------------------------------------------------------ | ---------------------- |
| 401         | Request denied by Basic Auth check. No Basic Authentication information found. | \u8BF7\u6C42\u672A\u63D0\u4F9B\u51ED\u8BC1         |
| 401         | Request denied by Basic Auth check. Invalid username and/or password           | \u8BF7\u6C42\u51ED\u8BC1\u65E0\u6548           |
| 403         | Request denied by Basic Auth check. Unauthorized consumer                      | \u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650 |
`},o=function(){return t},c=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u5168\u5C40\u914D\u7F6E",text:"\u5168\u5C40\u914D\u7F6E"},{depth:3,slug:"\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E",text:"\u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F\u8BA4\u8BC1\u548C\u9274\u6743",text:"\u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F\u8BA4\u8BC1\u548C\u9274\u6743"},{depth:2,slug:"\u76F8\u5173\u9519\u8BEF\u7801",text:"\u76F8\u5173\u9519\u8BEF\u7801"}]},e=l((E,x,b)=>{const{layout:g,...n}=a;return n.file=s,n.url=d,r`${u()}${h(t)}`})});export{e as Content,y as __tla,o as compiledContent,e as default,s as file,a as frontmatter,c as getHeadings,i as rawContent,d as url};
