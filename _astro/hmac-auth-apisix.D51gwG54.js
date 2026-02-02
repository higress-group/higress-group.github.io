import{c,__tla as E}from"./astro-component.YcfuVWta.js";import{r as o,m as r,u as y,__tla as v}from"./constant.Cx6UCuye.js";import{__tla as u}from"./astro/assets-service.r1ocst81.js";let a,i,e,n,l,d,t,h=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">hmac-auth-apisix</code> \u63D2\u4EF6\u517C\u5BB9 Apache APISIX \u7684 HMAC \u8BA4\u8BC1\u673A\u5236\uFF0C\u901A\u8FC7 HMAC \u7B97\u6CD5\u4E3A HTTP \u8BF7\u6C42\u751F\u6210\u9632\u7BE1\u6539\u7684\u6570\u5B57\u7B7E\u540D\uFF0C\u5B9E\u73B0\u8BF7\u6C42\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u6743\u9650\u63A7\u5236\u3002\u8BE5\u63D2\u4EF6\u5B8C\u5168\u517C\u5BB9 Apache APISIX HMAC \u8BA4\u8BC1\u63D2\u4EF6\u7684\u914D\u7F6E\u548C\u7B7E\u540D\u7B97\u6CD5\uFF0C\u7B7E\u540D\u751F\u6210\u65B9\u6CD5\u53EF\u53C2\u8003 <a href="https://apisix.apache.org/docs/apisix/plugins/hmac-auth/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Apache APISIX HMAC \u8BA4\u8BC1\u6587\u6863</a></p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">330</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<ul>
<li>\u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728</li>
<li>\u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A <code dir="auto">X-Mse-Consumer</code> \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0</li>
</ul>
<h3 id="\u8BA4\u8BC1\u914D\u7F6E">\u8BA4\u8BC1\u914D\u7F6E</h3>




































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>\u9009\u586B\uFF08<strong>\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E</strong>\uFF09</td><td>-</td><td>\u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3A true\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF1B\u82E5\u914D\u7F6E\u4E3A false\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF0C\u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1</td></tr><tr><td><code dir="auto">allowed_algorithms</code></td><td>array of string</td><td>\u9009\u586B</td><td>[\u201Chmac-sha1\u201D, \u201Chmac-sha256\u201D, \u201Chmac-sha512\u201D]</td><td>\u5141\u8BB8\u7684 HMAC \u7B97\u6CD5\u5217\u8868\u3002\u6709\u6548\u503C\u4E3A \u201Chmac-sha1\u201D\u3001\u201Chmac-sha256\u201D \u548C \u201Chmac-sha512\u201D \u7684\u7EC4\u5408</td></tr><tr><td><code dir="auto">clock_skew</code></td><td>number</td><td>\u9009\u586B</td><td>300</td><td>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u65F6\u95F4\u6233\u4E0E Higress \u670D\u52A1\u5668\u5F53\u524D\u65F6\u95F4\u4E4B\u95F4\u5141\u8BB8\u7684\u6700\u5927\u65F6\u95F4\u5DEE\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002\u8FD9\u6709\u52A9\u4E8E\u89E3\u51B3\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u65F6\u95F4\u540C\u6B65\u5DEE\u5F02\uFF0C\u5E76\u9632\u6B62\u91CD\u653E\u653B\u51FB\u3002\u65F6\u95F4\u6233\u5C06\u6839\u636E Date \u5934\u4E2D\u7684\u65F6\u95F4\uFF08\u5FC5\u987B\u4E3A GMT \u683C\u5F0F\uFF09\u8FDB\u884C\u8BA1\u7B97\u3002\u5982\u679C\u914D\u7F6E\u4E3A0\uFF0C\u4F1A\u8DF3\u8FC7\u8BE5\u6821\u9A8C</td></tr><tr><td><code dir="auto">signed_headers</code></td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684 HMAC \u7B7E\u540D\u4E2D\u5E94\u5305\u542B\u7684 HMAC \u7B7E\u540D\u5934\u5217\u8868</td></tr><tr><td><code dir="auto">validate_request_body</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u5982\u679C\u4E3A true\uFF0C\u5219\u9A8C\u8BC1\u8BF7\u6C42\u6B63\u6587\u7684\u5B8C\u6574\u6027\uFF0C\u4EE5\u786E\u4FDD\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u88AB\u7BE1\u6539\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u63D2\u4EF6\u4F1A\u521B\u5EFA\u4E00\u4E2A SHA-256 \u7684 base64 \u7F16\u7801 digest\uFF0C\u5E76\u5C06\u5176\u4E0E <code dir="auto">Digest</code> \u5934\u8FDB\u884C\u6BD4\u8F83\u3002\u5982\u679C <code dir="auto">Digest</code> \u5934\u4E22\u5931\u6216 digest \u4E0D\u5339\u914D\uFF0C\u9A8C\u8BC1\u5C06\u5931\u8D25</td></tr><tr><td><code dir="auto">hide_credentials</code></td><td>boolean</td><td>\u9009\u586B</td><td>false</td><td>\u5982\u679C\u4E3A true\uFF0C\u5219\u4E0D\u4F1A\u5C06\u6388\u6743\u8BF7\u6C42\u5934\u4F20\u9012\u7ED9\u4E0A\u6E38\u670D\u52A1</td></tr><tr><td><code dir="auto">anonymous_consumer</code></td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u533F\u540D\u6D88\u8D39\u8005\u540D\u79F0\u3002\u5982\u679C\u5DF2\u914D\u7F6E\uFF0C\u5219\u5141\u8BB8\u533F\u540D\u7528\u6237\u7ED5\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1</td></tr></tbody></table>
<p><code dir="auto">consumers</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">access_key</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6D88\u8D39\u8005\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u6807\u8BC6\u76F8\u5173\u914D\u7F6E\uFF0C\u4F8B\u5982\u5BC6\u94A5</td></tr><tr><td><code dir="auto">secret_key</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u751F\u6210 HMAC \u7684\u5BC6\u94A5</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u9009\u586B</td><td><code dir="auto">access_key</code></td><td>\u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0</td></tr></tbody></table>
<h3 id="\u9274\u6743\u914D\u7F6E\u975E\u5FC5\u9700">\u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09</h3>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>\u9009\u586B(<strong>\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E</strong>)</td><td>-</td><td>\u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u9274\u6743">\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u9274\u6743</h3>
<p>\u4EE5\u4E0B\u914D\u7F6E\u7528\u4E8E\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Hmac Auth \u8BA4\u8BC1\u548C\u9274\u6743\u3002<strong>\u6CE8\u610F\uFF1Aaccess_key \u5B57\u6BB5\u4E0D\u53EF\u91CD\u590D</strong></p>
<h4 id="\u793A\u4F8B1\u57FA\u7840\u8DEF\u7531\u4E0E\u57DF\u540D\u9274\u6743\u914D\u7F6E">\u793A\u4F8B1\uFF1A\u57FA\u7840\u8DEF\u7531\u4E0E\u57DF\u540D\u9274\u6743\u914D\u7F6E</h4>
<p><strong>\u5B9E\u4F8B\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E</strong>\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- name: consumer1\x7F  access_key: consumer1-key\x7F  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F- name: consumer2\x7F  access_key: consumer2-key\x7F  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35"><div></div></button></div></figure></div>
<p><strong>\u8DEF\u7531\u7EA7\u914D\u7F6E</strong>\uFF08\u9002\u7528\u4E8E route-a \u548C route-b\uFF09\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u4EC5\u5141\u8BB8consumer1\u8BBF\u95EE</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1  # \u4EC5\u5141\u8BB8consumer1\u8BBF\u95EE"><div></div></button></div></figure></div>
<p><strong>\u57DF\u540D\u7EA7\u914D\u7F6E</strong>\uFF08\u9002\u7528\u4E8E <code dir="auto">*.example.com</code> \u548C <code dir="auto">test.com</code>\uFF09\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u4EC5\u5141\u8BB8consumer2\u8BBF\u95EE</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2  # \u4EC5\u5141\u8BB8consumer2\u8BBF\u95EE"><div></div></button></div></figure></div>
<p><strong>\u914D\u7F6E\u8BF4\u660E</strong>\uFF1A</p>
<ul>
<li>\u8DEF\u7531\u540D\u79F0\uFF08\u5982 route-a\u3001route-b\uFF09\u5BF9\u5E94\u7F51\u5173\u8DEF\u7531\u521B\u5EFA\u65F6\u5B9A\u4E49\u7684\u540D\u79F0\uFF0C\u5339\u914D\u65F6\u4EC5\u5141\u8BB8consumer1\u8BBF\u95EE</li>
<li>\u57DF\u540D\u5339\u914D\uFF08\u5982 <code dir="auto">*.example.com</code>\u3001<code dir="auto">test.com</code>\uFF09\u7528\u4E8E\u8FC7\u6EE4\u8BF7\u6C42\u57DF\u540D\uFF0C\u5339\u914D\u65F6\u4EC5\u5141\u8BB8consumer2\u8BBF\u95EE</li>
<li>\u672A\u5728allow\u5217\u8868\u4E2D\u7684\u8C03\u7528\u8005\u5C06\u88AB\u62D2\u7EDD\u8BBF\u95EE</li>
</ul>
<p><strong>\u751F\u6210\u7B7E\u540D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B Go \u4EE3\u7801\u7247\u6BB5\u6216\u5176\u4ED6\u6280\u672F\u6808</strong>\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/hmac</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/sha1</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/sha256</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">crypto/sha512</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">encoding/base64</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">fmt</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">hash</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">strings</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">time</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// SignedHeader \u5B9A\u4E49\u7B7E\u540D\u5934\u7684\u7ED3\u6784</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">SignedHeader</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">Name  </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">Value </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u914D\u7F6E\u53C2\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">keyID </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"consumer1-key"</span><span style="--0:#E1E4E8">                            </span><span style="--0:#99A0A6">// key id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">secretKey </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"2bda943c-ba2b-11ec-ba07-00163e1250b5"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6">// secret key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">requestMethod </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"POST"</span><span style="--0:#E1E4E8">                             </span><span style="--0:#99A0A6">// HTTP method</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">requestPath </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"/foo"</span><span style="--0:#E1E4E8">                               </span><span style="--0:#99A0A6">// Route URI</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">algorithm </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha256"</span><span style="--0:#E1E4E8">                          </span><span style="--0:#99A0A6">// algorithm</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">validateRequestBody </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">                        </span><span style="--0:#99A0A6">// \u662F\u5426\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u8BBE\u7F6E\u4E3Atrue\u65F6\u4F1A\u6DFB\u52A0Digest\u5934\u90E8</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5982\u679C\u914D\u7F6E\u4E86 signed_headers\uFF0C\u5219\u9700\u8981\u6309\u7167\u987A\u5E8F\u6DFB\u52A0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signedHeaders </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> []</span><span style="--0:#B392F0">SignedHeader</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//{Name: "x-custom-header-a", Value: "test1"},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">//{Name: "x-custom-header-b", Value: "test2"},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">body </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"{}"</span><span style="--0:#E1E4E8">) </span><span style="--0:#99A0A6">// request body</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u83B7\u53D6\u5F53\u524D GMT \u65F6\u95F4</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">gmtTime </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> time.</span><span style="--0:#B392F0">Now</span><span style="--0:#E1E4E8">().</span><span style="--0:#B392F0">UTC</span><span style="--0:#E1E4E8">().</span><span style="--0:#B392F0">Format</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Mon, 02 Jan 2006 15:04:05 GMT"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u52A8\u6001\u6784\u9020\u7B7E\u540D\u5B57\u7B26\u4E32\uFF08\u6709\u5E8F\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signingStringBuilder </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">strings</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Builder</span><span style="--0:#E1E4E8">{}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signingStringBuilder.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s\\n%s</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">date: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">keyID,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestMethod,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestPath,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">gmtTime))</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6309\u7167signedHeaders\u4E2D\u7684\u987A\u5E8F\u6DFB\u52A0header</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, header </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> signedHeaders {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">signingStringBuilder.</span><span style="--0:#B392F0">WriteString</span><span style="--0:#E1E4E8">(fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, header.Name, header.Value))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signingString </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> signingStringBuilder.</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u521B\u5EFA\u7B7E\u540D</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signature, err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">generateHmacSignature</span><span style="--0:#E1E4E8">(secretKey, algorithm, signingString)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Printf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Error generating signature: </span><span style="--0:#79B8FF">%v\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, err)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u52A8\u6001\u6784\u5EFAheaders\u5B57\u6BB5\u5185\u5BB9</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">headersField </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"@request-target date"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, header </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> signedHeaders {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">headersField </span><span style="--0:#F97583">+=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">" "</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> header.Name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6784\u9020\u8BF7\u6C42\u5934\u90E8</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">headers </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"Date"</span><span style="--0:#E1E4E8">: gmtTime,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"Authorization"</span><span style="--0:#E1E4E8">: fmt.</span><span style="--0:#B392F0">Sprintf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">\`Signature keyId="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">",algorithm="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">",headers="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">",signature="</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">"\`</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">keyID,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">algorithm,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">headersField,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">signature,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5982\u679C\u9700\u8981\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u5219\u6DFB\u52A0Digest\u5934\u90E8</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> validateRequestBody {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">headers[</span><span style="--0:#9ECBFF">"Digest"</span><span style="--0:#E1E4E8">] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">calculateBodyDigest</span><span style="--0:#E1E4E8">(body)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6DFB\u52A0\u7B7E\u540D\u7684\u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> _, header </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> signedHeaders {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">formattedHeaderName </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">formatHeaderName</span><span style="--0:#E1E4E8">(header.Name)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">headers[formattedHeaderName] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> header.Value</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6253\u5370\u7B7E\u540D\u5B57\u7B26\u4E32</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Printf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"signingString: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, signingString)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u6253\u5370\u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Println</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Headers:"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> key, value </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> headers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">fmt.</span><span style="--0:#B392F0">Printf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">%s\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, key, value)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// generateHmacSignature \u751F\u6210HMAC\u7B7E\u540D</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">generateHmacSignature</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">secretKey</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">algorithm</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">message</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) (</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> mac </span><span style="--0:#B392F0">hash</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Hash</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">switch</span><span style="--0:#E1E4E8"> algorithm {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha1"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mac </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmac.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(sha1.New, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(secretKey))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha256"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mac </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmac.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(sha256.New, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(secretKey))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"hmac-sha512"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">mac </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmac.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(sha512.New, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(secretKey))</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">default</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8">, fmt.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"unsupported algorithm: </span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, algorithm)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">mac.</span><span style="--0:#B392F0">Write</span><span style="--0:#E1E4E8">([]</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(message))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">signature </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> mac.</span><span style="--0:#B392F0">Sum</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> base64.StdEncoding.</span><span style="--0:#B392F0">EncodeToString</span><span style="--0:#E1E4E8">(signature), </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// calculateBodyDigest \u8BA1\u7B97body\u7684\u6458\u8981</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">calculateBodyDigest</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">body</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">hash </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> sha256.</span><span style="--0:#B392F0">Sum256</span><span style="--0:#E1E4E8">(body)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">encodedDigest </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> base64.StdEncoding.</span><span style="--0:#B392F0">EncodeToString</span><span style="--0:#E1E4E8">(hash[:])</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"SHA-256="</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> encodedDigest</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// formatHeaderName \u5C06header name\u8F6C\u6362\u4E3A\u6807\u51C6HTTP\u5934\u683C\u5F0F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">formatHeaderName</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">headerName</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">parts </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">Split</span><span style="--0:#E1E4E8">(headerName, </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">for</span><span style="--0:#E1E4E8"> i, part </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">range</span><span style="--0:#E1E4E8"> parts {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">len</span><span style="--0:#E1E4E8">(part) </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">parts[i] </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">ToUpper</span><span style="--0:#E1E4E8">(part[:</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">]) </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">ToLower</span><span style="--0:#E1E4E8">(part[</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">:])</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">Join</span><span style="--0:#E1E4E8">(parts, </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;crypto/hmac&#x22;\x7F  &#x22;crypto/sha1&#x22;\x7F  &#x22;crypto/sha256&#x22;\x7F  &#x22;crypto/sha512&#x22;\x7F  &#x22;encoding/base64&#x22;\x7F  &#x22;fmt&#x22;\x7F  &#x22;hash&#x22;\x7F  &#x22;strings&#x22;\x7F  &#x22;time&#x22;\x7F)\x7F\x7F// SignedHeader \u5B9A\u4E49\u7B7E\u540D\u5934\u7684\u7ED3\u6784\x7Ftype SignedHeader struct {\x7F  Name  string\x7F  Value string\x7F}\x7F\x7Ffunc main() {\x7F  // \u914D\u7F6E\u53C2\u6570\x7F  keyID := &#x22;consumer1-key&#x22;                            // key id\x7F  secretKey := &#x22;2bda943c-ba2b-11ec-ba07-00163e1250b5&#x22; // secret key\x7F  requestMethod := &#x22;POST&#x22;                             // HTTP method\x7F  requestPath := &#x22;/foo&#x22;                               // Route URI\x7F  algorithm := &#x22;hmac-sha256&#x22;                          // algorithm\x7F  validateRequestBody := false                        // \u662F\u5426\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u8BBE\u7F6E\u4E3Atrue\u65F6\u4F1A\u6DFB\u52A0Digest\u5934\u90E8\x7F\x7F  // \u5982\u679C\u914D\u7F6E\u4E86 signed_headers\uFF0C\u5219\u9700\u8981\u6309\u7167\u987A\u5E8F\u6DFB\u52A0\x7F  signedHeaders := []SignedHeader{\x7F    //{Name: &#x22;x-custom-header-a&#x22;, Value: &#x22;test1&#x22;},\x7F    //{Name: &#x22;x-custom-header-b&#x22;, Value: &#x22;test2&#x22;},\x7F  }\x7F\x7F  body := []byte(&#x22;{}&#x22;) // request body\x7F\x7F  // \u83B7\u53D6\u5F53\u524D GMT \u65F6\u95F4\x7F  gmtTime := time.Now().UTC().Format(&#x22;Mon, 02 Jan 2006 15:04:05 GMT&#x22;)\x7F\x7F  // \u52A8\u6001\u6784\u9020\u7B7E\u540D\u5B57\u7B26\u4E32\uFF08\u6709\u5E8F\uFF09\x7F  signingStringBuilder := strings.Builder{}\x7F  signingStringBuilder.WriteString(fmt.Sprintf(&#x22;%s\\n%s %s\\ndate: %s\\n&#x22;,\x7F    keyID,\x7F    requestMethod,\x7F    requestPath,\x7F    gmtTime))\x7F\x7F  // \u6309\u7167signedHeaders\u4E2D\u7684\u987A\u5E8F\u6DFB\u52A0header\x7F  for _, header := range signedHeaders {\x7F    signingStringBuilder.WriteString(fmt.Sprintf(&#x22;%s: %s\\n&#x22;, header.Name, header.Value))\x7F  }\x7F\x7F  signingString := signingStringBuilder.String()\x7F\x7F  // \u521B\u5EFA\u7B7E\u540D\x7F  signature, err := generateHmacSignature(secretKey, algorithm, signingString)\x7F  if err != nil {\x7F    fmt.Printf(&#x22;Error generating signature: %v\\n&#x22;, err)\x7F    return\x7F  }\x7F\x7F  // \u52A8\u6001\u6784\u5EFAheaders\u5B57\u6BB5\u5185\u5BB9\x7F  headersField := &#x22;@request-target date&#x22;\x7F  for _, header := range signedHeaders {\x7F    headersField += &#x22; &#x22; + header.Name\x7F  }\x7F\x7F  // \u6784\u9020\u8BF7\u6C42\u5934\u90E8\x7F  headers := map[string]string{\x7F    &#x22;Date&#x22;: gmtTime,\x7F    &#x22;Authorization&#x22;: fmt.Sprintf(&#x60;Signature keyId=&#x22;%s&#x22;,algorithm=&#x22;%s&#x22;,headers=&#x22;%s&#x22;,signature=&#x22;%s&#x22;&#x60;,\x7F      keyID,\x7F      algorithm,\x7F      headersField,\x7F      signature,\x7F    ),\x7F  }\x7F\x7F  // \u5982\u679C\u9700\u8981\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u5219\u6DFB\u52A0Digest\u5934\u90E8\x7F  if validateRequestBody {\x7F    headers[&#x22;Digest&#x22;] = calculateBodyDigest(body)\x7F  }\x7F\x7F  // \u6DFB\u52A0\u7B7E\u540D\u7684\u8BF7\u6C42\u5934\x7F  for _, header := range signedHeaders {\x7F    formattedHeaderName := formatHeaderName(header.Name)\x7F    headers[formattedHeaderName] = header.Value\x7F  }\x7F\x7F  // \u6253\u5370\u7B7E\u540D\u5B57\u7B26\u4E32\x7F  fmt.Printf(&#x22;signingString: %s\\n&#x22;, signingString)\x7F  // \u6253\u5370\u8BF7\u6C42\u5934\x7F  fmt.Println(&#x22;Headers:&#x22;)\x7F  for key, value := range headers {\x7F    fmt.Printf(&#x22;%s: %s\\n&#x22;, key, value)\x7F  }\x7F}\x7F\x7F// generateHmacSignature \u751F\u6210HMAC\u7B7E\u540D\x7Ffunc generateHmacSignature(secretKey, algorithm, message string) (string, error) {\x7F  var mac hash.Hash\x7F\x7F  switch algorithm {\x7F  case &#x22;hmac-sha1&#x22;:\x7F    mac = hmac.New(sha1.New, []byte(secretKey))\x7F  case &#x22;hmac-sha256&#x22;:\x7F    mac = hmac.New(sha256.New, []byte(secretKey))\x7F  case &#x22;hmac-sha512&#x22;:\x7F    mac = hmac.New(sha512.New, []byte(secretKey))\x7F  default:\x7F    return &#x22;&#x22;, fmt.Errorf(&#x22;unsupported algorithm: %s&#x22;, algorithm)\x7F  }\x7F\x7F  mac.Write([]byte(message))\x7F  signature := mac.Sum(nil)\x7F  return base64.StdEncoding.EncodeToString(signature), nil\x7F}\x7F\x7F// calculateBodyDigest \u8BA1\u7B97body\u7684\u6458\u8981\x7Ffunc calculateBodyDigest(body []byte) string {\x7F  hash := sha256.Sum256(body)\x7F  encodedDigest := base64.StdEncoding.EncodeToString(hash[:])\x7F  return &#x22;SHA-256=&#x22; + encodedDigest\x7F}\x7F\x7F// formatHeaderName \u5C06header name\u8F6C\u6362\u4E3A\u6807\u51C6HTTP\u5934\u683C\u5F0F\x7Ffunc formatHeaderName(headerName string) string {\x7F  parts := strings.Split(headerName, &#x22;-&#x22;)\x7F  for i, part := range parts {\x7F    if len(part) > 0 {\x7F      parts[i] = strings.ToUpper(part[:1]) + strings.ToLower(part[1:])\x7F    }\x7F  }\x7F  return strings.Join(parts, &#x22;-&#x22;)\x7F}"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u4E0E\u54CD\u5E94\u793A\u4F8B</strong>\uFF1A</p>
<ol>
<li><strong>\u9A8C\u8BC1\u901A\u8FC7\u573A\u666F</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:53:18 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:53:18 GMT&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li>\u54CD\u5E94\uFF1A\u8FD4\u56DE\u540E\u7AEF\u670D\u52A1\u6B63\u5E38\u54CD\u5E94</li>
<li>\u9644\u52A0\u4FE1\u606F\uFF1A\u8BA4\u8BC1\u901A\u8FC7\u540E\u4F1A\u81EA\u52A8\u6DFB\u52A0\u8BF7\u6C42\u5934 <code dir="auto">X-Mse-Consumer: consumer1</code> \u4F20\u9012\u7ED9\u540E\u7AEF</li>
</ul>
<ol start="2">
<li><strong>\u8BF7\u6C42\u65B9\u6CD5\u4FEE\u6539\u5BFC\u81F4\u9A8C\u7B7E\u5931\u8D25</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">PUT</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u6B64\u5904\u5C06POST\u6539\u4E3APUT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:53:18 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X PUT &#x27;http://localhost:8082/foo&#x27; \\  # \u6B64\u5904\u5C06POST\u6539\u4E3APUT\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:53:18 GMT&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li>\u54CD\u5E94\uFF1A<code dir="auto">401 Unauthorized</code></li>
<li>\u9519\u8BEF\u4FE1\u606F\uFF1A<code dir="auto">{"message":"client request can't be validated: Invalid signature"}</code></li>
</ul>
<ol start="3">
<li><strong>\u4E0D\u5728\u5141\u8BB8\u5217\u8868\u4E2D\u7684\u8C03\u7528\u8005</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer2-key",algorithm="hmac-sha256",headers="@request-target date",signature="dltotPwd4iWGGz//kuehPJlHXZemR5WKwCPAJD/KPhE="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:59:01 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer2-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;dltotPwd4iWGGz//kuehPJlHXZemR5WKwCPAJD/KPhE=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:59:01 GMT&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li>\u54CD\u5E94\uFF1A<code dir="auto">401 Unauthorized</code></li>
<li>\u9519\u8BEF\u4FE1\u606F\uFF1A<code dir="auto">{"message":"client request can't be validated: consumer 'consumer2' is not allowed"}</code></li>
</ul>
<ol start="4">
<li><strong>\u65F6\u95F4\u6233\u8FC7\u671F</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Fri, 12 Sep 2025 23:53:18 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8FC7\u671F\u7684\u65F6\u95F4\u6233</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date&#x22;,signature=&#x22;746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU=&#x22;&#x27; \\\x7F-H &#x27;Date:Fri, 12 Sep 2025 23:53:18 GMT&#x27; \\  # \u8FC7\u671F\u7684\u65F6\u95F4\u6233\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li>\u54CD\u5E94\uFF1A<code dir="auto">401 Unauthorized</code></li>
<li>\u9519\u8BEF\u4FE1\u606F\uFF1A<code dir="auto">{"message":"client request can't be validated: Clock skew exceeded"}</code></li>
</ul>
<h4 id="\u793A\u4F8B2\u5E26\u81EA\u5B9A\u4E49\u7B7E\u540D\u5934\u4E0E\u8BF7\u6C42\u4F53\u9A8C\u8BC1\u7684\u914D\u7F6E">\u793A\u4F8B2\uFF1A\u5E26\u81EA\u5B9A\u4E49\u7B7E\u540D\u5934\u4E0E\u8BF7\u6C42\u4F53\u9A8C\u8BC1\u7684\u914D\u7F6E</h4>
<p><strong>\u5B9E\u4F8B\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E</strong>\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">signed_headers</span><span style="--0:#E1E4E8">:  </span><span style="--0:#99A0A6"># \u9700\u8981\u7EB3\u5165\u7B7E\u540D\u7684\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Custom-Header-A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Custom-Header-B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">validate_request_body</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u542F\u7528\u8BF7\u6C42\u4F53\u7B7E\u540D\u6821\u9A8C</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- name: consumer1\x7F  access_key: consumer1-key\x7F  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F- name: consumer2\x7F  access_key: consumer2-key\x7F  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7Fsigned_headers:  # \u9700\u8981\u7EB3\u5165\u7B7E\u540D\u7684\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\x7F- X-Custom-Header-A\x7F- X-Custom-Header-B\x7Fvalidate_request_body: true  # \u542F\u7528\u8BF7\u6C42\u4F53\u7B7E\u540D\u6821\u9A8C"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42\u4E0E\u54CD\u5E94\u793A\u4F8B</strong>\uFF1A</p>
<ol>
<li><strong>\u9A8C\u8BC1\u901A\u8FC7\u573A\u666F</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Sat, 13 Sep 2025 00:04:34 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o='</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8BF7\u6C42\u4F53\u6458\u8981</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-Custom-Header-A:test1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-B:test2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date x-custom-header-a x-custom-header-b&#x22;,signature=&#x22;KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo=&#x22;&#x27; \\\x7F-H &#x27;Date:Sat, 13 Sep 2025 00:04:34 GMT&#x27; \\\x7F-H &#x27;Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=&#x27; \\  # \u8BF7\u6C42\u4F53\u6458\u8981\x7F-H &#x27;X-Custom-Header-A:test1&#x27; \\\x7F-H &#x27;X-Custom-Header-B:test2&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li>\u54CD\u5E94\uFF1A\u8FD4\u56DE\u540E\u7AEF\u670D\u52A1\u6B63\u5E38\u54CD\u5E94</li>
</ul>
<ol start="2">
<li><strong>\u7F3A\u5C11\u7B7E\u540D\u5934</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Sat, 13 Sep 2025 00:04:34 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o='</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-B:test2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\ </span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u7F3A\u5C11X-Custom-Header-A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date x-custom-header-b&#x22;,signature=&#x22;KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo=&#x22;&#x27; \\\x7F-H &#x27;Date:Sat, 13 Sep 2025 00:04:34 GMT&#x27; \\\x7F-H &#x27;Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=&#x27; \\\x7F-H &#x27;X-Custom-Header-B:test2&#x27; \\  # \u7F3A\u5C11X-Custom-Header-A\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{}&#x27;"><div></div></button></div></figure></div>
<ul>
<li>\u54CD\u5E94\uFF1A<code dir="auto">401 Unauthorized</code></li>
<li>\u9519\u8BEF\u4FE1\u606F\uFF1A<code dir="auto">{"message":"client request can't be validated: expected header "X-Custom-Header-A" missing in signing"}</code></li>
</ul>
<ol start="3">
<li><strong>\u8BF7\u6C42\u4F53\u88AB\u7BE1\u6539</strong></li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'http://localhost:8082/foo'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="NcA+44FFtl2rjNvV28wSn8Rln02i4i2tFXKp3/ahyYA="'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Date:Sat, 13 Sep 2025 00:09:40 GMT'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o='</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-A:test1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-Custom-Header-B:test2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"key":"value"}'</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u7BE1\u6539\u540E\u7684\u8BF7\u6C42\u4F53</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x27;http://localhost:8082/foo&#x27; \\\x7F-H &#x27;Authorization:Signature keyId=&#x22;consumer1-key&#x22;,algorithm=&#x22;hmac-sha256&#x22;,headers=&#x22;@request-target date x-custom-header-a x-custom-header-b&#x22;,signature=&#x22;NcA+44FFtl2rjNvV28wSn8Rln02i4i2tFXKp3/ahyYA=&#x22;&#x27; \\\x7F-H &#x27;Date:Sat, 13 Sep 2025 00:09:40 GMT&#x27; \\\x7F-H &#x27;Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=&#x27; \\\x7F-H &#x27;X-Custom-Header-A:test1&#x27; \\\x7F-H &#x27;X-Custom-Header-B:test2&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;key&#x22;:&#x22;value&#x22;}&#x27;  # \u7BE1\u6539\u540E\u7684\u8BF7\u6C42\u4F53"><div></div></button></div></figure></div>
<ul>
<li>\u54CD\u5E94\uFF1A<code dir="auto">401 Unauthorized</code></li>
<li>\u9519\u8BEF\u4FE1\u606F\uFF1A<code dir="auto">{"message":"client request can't be validated: Invalid digest"}</code></li>
</ul>
<h3 id="\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1">\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1</h3>
<p>\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5728\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F Hmac Auth \u8BA4\u8BC1\uFF0C<strong>\u6240\u6709\u8BF7\u6C42\u5FC5\u987B\u7ECF\u8FC7\u8BA4\u8BC1\u624D\u80FD\u8BBF\u95EE</strong>\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u5F00\u542F\u5168\u5C40\u8BA4\u8BC1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true  # \u5F00\u542F\u5168\u5C40\u8BA4\u8BC1\x7Fconsumers:\x7F- name: consumer1\x7F  access_key: consumer1-key\x7F  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F- name: consumer2\x7F  access_key: consumer2-key\x7F  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35"><div></div></button></div></figure></div>
<p><strong>\u8BF4\u660E</strong>\uFF1A\u5F53 <code dir="auto">global_auth: true</code> \u65F6\uFF0C\u6240\u6709\u8BBF\u95EE\u7F51\u5173\u7684\u8BF7\u6C42\u90FD\u9700\u8981\u643A\u5E26\u6709\u6548\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u672A\u8BA4\u8BC1\u7684\u8BF7\u6C42\u5C06\u88AB\u76F4\u63A5\u62D2\u7EDD</p>`,n={title:"APISIX HMAC \u8BA4\u8BC1",keywords:["higress","hmac auth","apisix"],description:"APISIX HMAC \u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/hmac-auth-apisix.md",t=void 0,d=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`hmac-auth-apisix\` \u63D2\u4EF6\u517C\u5BB9 Apache APISIX \u7684 HMAC \u8BA4\u8BC1\u673A\u5236\uFF0C\u901A\u8FC7 HMAC \u7B97\u6CD5\u4E3A HTTP \u8BF7\u6C42\u751F\u6210\u9632\u7BE1\u6539\u7684\u6570\u5B57\u7B7E\u540D\uFF0C\u5B9E\u73B0\u8BF7\u6C42\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u6743\u9650\u63A7\u5236\u3002\u8BE5\u63D2\u4EF6\u5B8C\u5168\u517C\u5BB9 Apache APISIX HMAC \u8BA4\u8BC1\u63D2\u4EF6\u7684\u914D\u7F6E\u548C\u7B7E\u540D\u7B97\u6CD5\uFF0C\u7B7E\u540D\u751F\u6210\u65B9\u6CD5\u53EF\u53C2\u8003 [Apache APISIX HMAC \u8BA4\u8BC1\u6587\u6863](https://apisix.apache.org/docs/apisix/plugins/hmac-auth/)

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`330\`

## \u914D\u7F6E\u5B57\u6BB5

**\u6CE8\u610F\uFF1A**

- \u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0

### \u8BA4\u8BC1\u914D\u7F6E

| \u540D\u79F0                    | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                   | \u9ED8\u8BA4\u503C                                      | \u63CF\u8FF0                                                         |
| ----------------------- | --------------- | -------------------------- | ------------------------------------------- | ------------------------------------------------------------ |
| \`global_auth\`           | bool            | \u9009\u586B\uFF08**\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**\uFF09 | -                                           | \u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3A true\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF1B\u82E5\u914D\u7F6E\u4E3A false\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF0C\u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09 |
| \`consumers\`             | array of object | \u5FC5\u586B                       | -                                           | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                         |
| \`allowed_algorithms\`    | array of string | \u9009\u586B                       | ["hmac-sha1", "hmac-sha256", "hmac-sha512"] | \u5141\u8BB8\u7684 HMAC \u7B97\u6CD5\u5217\u8868\u3002\u6709\u6548\u503C\u4E3A "hmac-sha1"\u3001"hmac-sha256" \u548C "hmac-sha512" \u7684\u7EC4\u5408 |
| \`clock_skew\`            | number          | \u9009\u586B                       | 300                                         | \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u65F6\u95F4\u6233\u4E0E Higress \u670D\u52A1\u5668\u5F53\u524D\u65F6\u95F4\u4E4B\u95F4\u5141\u8BB8\u7684\u6700\u5927\u65F6\u95F4\u5DEE\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\u3002\u8FD9\u6709\u52A9\u4E8E\u89E3\u51B3\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u65F6\u95F4\u540C\u6B65\u5DEE\u5F02\uFF0C\u5E76\u9632\u6B62\u91CD\u653E\u653B\u51FB\u3002\u65F6\u95F4\u6233\u5C06\u6839\u636E Date \u5934\u4E2D\u7684\u65F6\u95F4\uFF08\u5FC5\u987B\u4E3A GMT \u683C\u5F0F\uFF09\u8FDB\u884C\u8BA1\u7B97\u3002\u5982\u679C\u914D\u7F6E\u4E3A0\uFF0C\u4F1A\u8DF3\u8FC7\u8BE5\u6821\u9A8C |
| \`signed_headers\`        | array of string | \u9009\u586B                       | -                                           | \u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684 HMAC \u7B7E\u540D\u4E2D\u5E94\u5305\u542B\u7684 HMAC \u7B7E\u540D\u5934\u5217\u8868             |
| \`validate_request_body\` | boolean         | \u9009\u586B                       | false                                       | \u5982\u679C\u4E3A true\uFF0C\u5219\u9A8C\u8BC1\u8BF7\u6C42\u6B63\u6587\u7684\u5B8C\u6574\u6027\uFF0C\u4EE5\u786E\u4FDD\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u6CA1\u6709\u88AB\u7BE1\u6539\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u63D2\u4EF6\u4F1A\u521B\u5EFA\u4E00\u4E2A SHA-256 \u7684 base64 \u7F16\u7801 digest\uFF0C\u5E76\u5C06\u5176\u4E0E \`Digest\` \u5934\u8FDB\u884C\u6BD4\u8F83\u3002\u5982\u679C \`Digest\` \u5934\u4E22\u5931\u6216 digest \u4E0D\u5339\u914D\uFF0C\u9A8C\u8BC1\u5C06\u5931\u8D25 |
| \`hide_credentials\`      | boolean         | \u9009\u586B                       | false                                       | \u5982\u679C\u4E3A true\uFF0C\u5219\u4E0D\u4F1A\u5C06\u6388\u6743\u8BF7\u6C42\u5934\u4F20\u9012\u7ED9\u4E0A\u6E38\u670D\u52A1                |
| \`anonymous_consumer\`    | string          | \u9009\u586B                       | -                                           | \u533F\u540D\u6D88\u8D39\u8005\u540D\u79F0\u3002\u5982\u679C\u5DF2\u914D\u7F6E\uFF0C\u5219\u5141\u8BB8\u533F\u540D\u7528\u6237\u7ED5\u8FC7\u8EAB\u4EFD\u9A8C\u8BC1       |


\`consumers\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C       | \u63CF\u8FF0                                           |
| ------------ | -------- | -------- | ------------ | ---------------------------------------------- |
| \`access_key\` | string   | \u5FC5\u586B     | -            | \u6D88\u8D39\u8005\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u6807\u8BC6\u76F8\u5173\u914D\u7F6E\uFF0C\u4F8B\u5982\u5BC6\u94A5 |
| \`secret_key\` | string   | \u5FC5\u586B     | -            | \u7528\u4E8E\u751F\u6210 HMAC \u7684\u5BC6\u94A5                           |
| \`name\`       | string   | \u9009\u586B     | \`access_key\` | \u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0                         |

### \u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09

| \u540D\u79F0    | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                         |
| ------- | --------------- | ------------------------ | ------ | ------------------------------------------------------------ |
| \`allow\` | array of string | \u9009\u586B(**\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**) | -      | \u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236 |

## \u914D\u7F6E\u793A\u4F8B

### \u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u9274\u6743

\u4EE5\u4E0B\u914D\u7F6E\u7528\u4E8E\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Hmac Auth \u8BA4\u8BC1\u548C\u9274\u6743\u3002**\u6CE8\u610F\uFF1Aaccess_key \u5B57\u6BB5\u4E0D\u53EF\u91CD\u590D**

#### \u793A\u4F8B1\uFF1A\u57FA\u7840\u8DEF\u7531\u4E0E\u57DF\u540D\u9274\u6743\u914D\u7F6E

**\u5B9E\u4F8B\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E**\uFF1A
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

**\u8DEF\u7531\u7EA7\u914D\u7F6E**\uFF08\u9002\u7528\u4E8E route-a \u548C route-b\uFF09\uFF1A
\`\`\`yaml
allow: 
- consumer1  # \u4EC5\u5141\u8BB8consumer1\u8BBF\u95EE
\`\`\`

**\u57DF\u540D\u7EA7\u914D\u7F6E**\uFF08\u9002\u7528\u4E8E \`*.example.com\` \u548C \`test.com\`\uFF09\uFF1A
\`\`\`yaml
allow:
- consumer2  # \u4EC5\u5141\u8BB8consumer2\u8BBF\u95EE
\`\`\`

**\u914D\u7F6E\u8BF4\u660E**\uFF1A

- \u8DEF\u7531\u540D\u79F0\uFF08\u5982 route-a\u3001route-b\uFF09\u5BF9\u5E94\u7F51\u5173\u8DEF\u7531\u521B\u5EFA\u65F6\u5B9A\u4E49\u7684\u540D\u79F0\uFF0C\u5339\u914D\u65F6\u4EC5\u5141\u8BB8consumer1\u8BBF\u95EE
- \u57DF\u540D\u5339\u914D\uFF08\u5982 \`*.example.com\`\u3001\`test.com\`\uFF09\u7528\u4E8E\u8FC7\u6EE4\u8BF7\u6C42\u57DF\u540D\uFF0C\u5339\u914D\u65F6\u4EC5\u5141\u8BB8consumer2\u8BBF\u95EE
- \u672A\u5728allow\u5217\u8868\u4E2D\u7684\u8C03\u7528\u8005\u5C06\u88AB\u62D2\u7EDD\u8BBF\u95EE

**\u751F\u6210\u7B7E\u540D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B Go \u4EE3\u7801\u7247\u6BB5\u6216\u5176\u4ED6\u6280\u672F\u6808**\uFF1A

\`\`\`go
package main

import (
	"crypto/hmac"
	"crypto/sha1"
	"crypto/sha256"
	"crypto/sha512"
	"encoding/base64"
	"fmt"
	"hash"
	"strings"
	"time"
)

// SignedHeader \u5B9A\u4E49\u7B7E\u540D\u5934\u7684\u7ED3\u6784
type SignedHeader struct {
	Name  string
	Value string
}

func main() {
	// \u914D\u7F6E\u53C2\u6570
	keyID := "consumer1-key"                            // key id
	secretKey := "2bda943c-ba2b-11ec-ba07-00163e1250b5" // secret key
	requestMethod := "POST"                             // HTTP method
	requestPath := "/foo"                               // Route URI
	algorithm := "hmac-sha256"                          // algorithm
	validateRequestBody := false                        // \u662F\u5426\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u8BBE\u7F6E\u4E3Atrue\u65F6\u4F1A\u6DFB\u52A0Digest\u5934\u90E8

	// \u5982\u679C\u914D\u7F6E\u4E86 signed_headers\uFF0C\u5219\u9700\u8981\u6309\u7167\u987A\u5E8F\u6DFB\u52A0
	signedHeaders := []SignedHeader{
		//{Name: "x-custom-header-a", Value: "test1"},
		//{Name: "x-custom-header-b", Value: "test2"},
	}

	body := []byte("{}") // request body

	// \u83B7\u53D6\u5F53\u524D GMT \u65F6\u95F4
	gmtTime := time.Now().UTC().Format("Mon, 02 Jan 2006 15:04:05 GMT")

	// \u52A8\u6001\u6784\u9020\u7B7E\u540D\u5B57\u7B26\u4E32\uFF08\u6709\u5E8F\uFF09
	signingStringBuilder := strings.Builder{}
	signingStringBuilder.WriteString(fmt.Sprintf("%s\\n%s %s\\ndate: %s\\n",
		keyID,
		requestMethod,
		requestPath,
		gmtTime))

	// \u6309\u7167signedHeaders\u4E2D\u7684\u987A\u5E8F\u6DFB\u52A0header
	for _, header := range signedHeaders {
		signingStringBuilder.WriteString(fmt.Sprintf("%s: %s\\n", header.Name, header.Value))
	}

	signingString := signingStringBuilder.String()

	// \u521B\u5EFA\u7B7E\u540D
	signature, err := generateHmacSignature(secretKey, algorithm, signingString)
	if err != nil {
		fmt.Printf("Error generating signature: %v\\n", err)
		return
	}

	// \u52A8\u6001\u6784\u5EFAheaders\u5B57\u6BB5\u5185\u5BB9
	headersField := "@request-target date"
	for _, header := range signedHeaders {
		headersField += " " + header.Name
	}

	// \u6784\u9020\u8BF7\u6C42\u5934\u90E8
	headers := map[string]string{
		"Date": gmtTime,
		"Authorization": fmt.Sprintf(\`Signature keyId="%s",algorithm="%s",headers="%s",signature="%s"\`,
			keyID,
			algorithm,
			headersField,
			signature,
		),
	}

	// \u5982\u679C\u9700\u8981\u9A8C\u8BC1\u8BF7\u6C42\u4F53\uFF0C\u5219\u6DFB\u52A0Digest\u5934\u90E8
	if validateRequestBody {
		headers["Digest"] = calculateBodyDigest(body)
	}

	// \u6DFB\u52A0\u7B7E\u540D\u7684\u8BF7\u6C42\u5934
	for _, header := range signedHeaders {
		formattedHeaderName := formatHeaderName(header.Name)
		headers[formattedHeaderName] = header.Value
	}

	// \u6253\u5370\u7B7E\u540D\u5B57\u7B26\u4E32
	fmt.Printf("signingString: %s\\n", signingString)
	// \u6253\u5370\u8BF7\u6C42\u5934
	fmt.Println("Headers:")
	for key, value := range headers {
		fmt.Printf("%s: %s\\n", key, value)
	}
}

// generateHmacSignature \u751F\u6210HMAC\u7B7E\u540D
func generateHmacSignature(secretKey, algorithm, message string) (string, error) {
	var mac hash.Hash

	switch algorithm {
	case "hmac-sha1":
		mac = hmac.New(sha1.New, []byte(secretKey))
	case "hmac-sha256":
		mac = hmac.New(sha256.New, []byte(secretKey))
	case "hmac-sha512":
		mac = hmac.New(sha512.New, []byte(secretKey))
	default:
		return "", fmt.Errorf("unsupported algorithm: %s", algorithm)
	}

	mac.Write([]byte(message))
	signature := mac.Sum(nil)
	return base64.StdEncoding.EncodeToString(signature), nil
}

// calculateBodyDigest \u8BA1\u7B97body\u7684\u6458\u8981
func calculateBodyDigest(body []byte) string {
	hash := sha256.Sum256(body)
	encodedDigest := base64.StdEncoding.EncodeToString(hash[:])
	return "SHA-256=" + encodedDigest
}

// formatHeaderName \u5C06header name\u8F6C\u6362\u4E3A\u6807\u51C6HTTP\u5934\u683C\u5F0F
func formatHeaderName(headerName string) string {
	parts := strings.Split(headerName, "-")
	for i, part := range parts {
		if len(part) > 0 {
			parts[i] = strings.ToUpper(part[:1]) + strings.ToLower(part[1:])
		}
	}
	return strings.Join(parts, "-")
}
\`\`\`

**\u8BF7\u6C42\u4E0E\u54CD\u5E94\u793A\u4F8B**\uFF1A

1. **\u9A8C\u8BC1\u901A\u8FC7\u573A\u666F**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\u8FD4\u56DE\u540E\u7AEF\u670D\u52A1\u6B63\u5E38\u54CD\u5E94
- \u9644\u52A0\u4FE1\u606F\uFF1A\u8BA4\u8BC1\u901A\u8FC7\u540E\u4F1A\u81EA\u52A8\u6DFB\u52A0\u8BF7\u6C42\u5934 \`X-Mse-Consumer: consumer1\` \u4F20\u9012\u7ED9\u540E\u7AEF

2. **\u8BF7\u6C42\u65B9\u6CD5\u4FEE\u6539\u5BFC\u81F4\u9A8C\u7B7E\u5931\u8D25**
\`\`\`shell
curl -X PUT 'http://localhost:8082/foo' \\  # \u6B64\u5904\u5C06POST\u6539\u4E3APUT
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: Invalid signature"}\`

3. **\u4E0D\u5728\u5141\u8BB8\u5217\u8868\u4E2D\u7684\u8C03\u7528\u8005**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer2-key",algorithm="hmac-sha256",headers="@request-target date",signature="dltotPwd4iWGGz//kuehPJlHXZemR5WKwCPAJD/KPhE="' \\
-H 'Date:Fri, 12 Sep 2025 23:59:01 GMT' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: consumer 'consumer2' is not allowed"}\`

4. **\u65F6\u95F4\u6233\u8FC7\u671F**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date",signature="746z4VISwZehUwZdzTV486ZMMbBtakmMHKPfs/A4RdU="' \\
-H 'Date:Fri, 12 Sep 2025 23:53:18 GMT' \\  # \u8FC7\u671F\u7684\u65F6\u95F4\u6233
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: Clock skew exceeded"}\`

#### \u793A\u4F8B2\uFF1A\u5E26\u81EA\u5B9A\u4E49\u7B7E\u540D\u5934\u4E0E\u8BF7\u6C42\u4F53\u9A8C\u8BC1\u7684\u914D\u7F6E

**\u5B9E\u4F8B\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E**\uFF1A
\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
signed_headers:  # \u9700\u8981\u7EB3\u5165\u7B7E\u540D\u7684\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934
- X-Custom-Header-A
- X-Custom-Header-B
validate_request_body: true  # \u542F\u7528\u8BF7\u6C42\u4F53\u7B7E\u540D\u6821\u9A8C
\`\`\`

**\u8BF7\u6C42\u4E0E\u54CD\u5E94\u793A\u4F8B**\uFF1A

1. **\u9A8C\u8BC1\u901A\u8FC7\u573A\u666F**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="' \\
-H 'Date:Sat, 13 Sep 2025 00:04:34 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\  # \u8BF7\u6C42\u4F53\u6458\u8981
-H 'X-Custom-Header-A:test1' \\
-H 'X-Custom-Header-B:test2' \\
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`

- \u54CD\u5E94\uFF1A\u8FD4\u56DE\u540E\u7AEF\u670D\u52A1\u6B63\u5E38\u54CD\u5E94

2. **\u7F3A\u5C11\u7B7E\u540D\u5934**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-b",signature="KoOlbkDIR/JzlKK47eURewnIpmhpkQU+KIyBUhqVfmo="' \\
-H 'Date:Sat, 13 Sep 2025 00:04:34 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\
-H 'X-Custom-Header-B:test2' \\  # \u7F3A\u5C11X-Custom-Header-A
-H 'Content-Type: application/json' \\
-d '{}'
\`\`\`

- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: expected header "X-Custom-Header-A" missing in signing"}\`

3. **\u8BF7\u6C42\u4F53\u88AB\u7BE1\u6539**
\`\`\`shell
curl -X POST 'http://localhost:8082/foo' \\
-H 'Authorization:Signature keyId="consumer1-key",algorithm="hmac-sha256",headers="@request-target date x-custom-header-a x-custom-header-b",signature="NcA+44FFtl2rjNvV28wSn8Rln02i4i2tFXKp3/ahyYA="' \\
-H 'Date:Sat, 13 Sep 2025 00:09:40 GMT' \\
-H 'Digest:SHA-256=RBNvo1WzZ4oRRq0W9+hknpT7T8If536DEMBg9hyq/4o=' \\
-H 'X-Custom-Header-A:test1' \\
-H 'X-Custom-Header-B:test2' \\
-H 'Content-Type: application/json' \\
-d '{"key":"value"}'  # \u7BE1\u6539\u540E\u7684\u8BF7\u6C42\u4F53
\`\`\`
- \u54CD\u5E94\uFF1A\`401 Unauthorized\`
- \u9519\u8BEF\u4FE1\u606F\uFF1A\`{"message":"client request can't be validated: Invalid digest"}\`

### \u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5728\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F Hmac Auth \u8BA4\u8BC1\uFF0C**\u6240\u6709\u8BF7\u6C42\u5FC5\u987B\u7ECF\u8FC7\u8BA4\u8BC1\u624D\u80FD\u8BBF\u95EE**\uFF1A

\`\`\`yaml
global_auth: true  # \u5F00\u542F\u5168\u5C40\u8BA4\u8BC1
consumers:
- name: consumer1
  access_key: consumer1-key
  secret_key: 2bda943c-ba2b-11ec-ba07-00163e1250b5
- name: consumer2
  access_key: consumer2-key
  secret_key: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

**\u8BF4\u660E**\uFF1A\u5F53 \`global_auth: true\` \u65F6\uFF0C\u6240\u6709\u8BBF\u95EE\u7F51\u5173\u7684\u8BF7\u6C42\u90FD\u9700\u8981\u643A\u5E26\u6709\u6548\u7684\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u672A\u8BA4\u8BC1\u7684\u8BF7\u6C42\u5C06\u88AB\u76F4\u63A5\u62D2\u7EDD`},i=function(){return s},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u8BA4\u8BC1\u914D\u7F6E",text:"\u8BA4\u8BC1\u914D\u7F6E"},{depth:3,slug:"\u9274\u6743\u914D\u7F6E\u975E\u5FC5\u9700",text:"\u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u9274\u6743",text:"\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u9274\u6743"},{depth:4,slug:"\u793A\u4F8B1\u57FA\u7840\u8DEF\u7531\u4E0E\u57DF\u540D\u9274\u6743\u914D\u7F6E",text:"\u793A\u4F8B1\uFF1A\u57FA\u7840\u8DEF\u7531\u4E0E\u57DF\u540D\u9274\u6743\u914D\u7F6E"},{depth:4,slug:"\u793A\u4F8B2\u5E26\u81EA\u5B9A\u4E49\u7B7E\u540D\u5934\u4E0E\u8BF7\u6C42\u4F53\u9A8C\u8BC1\u7684\u914D\u7F6E",text:"\u793A\u4F8B2\uFF1A\u5E26\u81EA\u5B9A\u4E49\u7B7E\u540D\u5934\u4E0E\u8BF7\u6C42\u4F53\u9A8C\u8BC1\u7684\u914D\u7F6E"},{depth:3,slug:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1",text:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1"}]},a=c((F,g,m)=>{const{layout:x,...p}=n;return p.file=e,p.url=t,o`${r()}${y(s)}`})});export{a as Content,h as __tla,i as compiledContent,a as default,e as file,n as frontmatter,l as getHeadings,d as rawContent,t as url};
