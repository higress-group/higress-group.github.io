import{c as p,__tla as l}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as y,__tla as v}from"./constant.6JLohjY_.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let t,c,s,n,i,o,d,u=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u9632\u91CD\u653E\u63D2\u4EF6\u901A\u8FC7\u9A8C\u8BC1\u8BF7\u6C42\u4E2D\u7684\u4E00\u6B21\u6027\u968F\u673A\u6570\u6765\u9632\u6B62\u8BF7\u6C42\u91CD\u653E\u653B\u51FB\u3002\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u9700\u8981\u643A\u5E26\u4E00\u4E2A\u552F\u4E00\u7684 nonce \u503C\uFF0C\u670D\u52A1\u5668\u4F1A\u8BB0\u5F55\u5E76\u6821\u9A8C\u8FD9\u4E2A\u503C\u7684\u552F\u4E00\u6027\uFF0C\u4ECE\u800C\u9632\u6B62\u8BF7\u6C42\u88AB\u6076\u610F\u91CD\u653E</p>
<p>\u5177\u4F53\u5305\u542B\u4E00\u4E0B\u529F\u80FD\uFF1A</p>
<ul>
<li><strong>\u5F3A\u5236\u6216\u53EF\u9009\u7684 nonce \u6821\u9A8C</strong>\uFF1A\u53EF\u6839\u636E\u914D\u7F6E\u51B3\u5B9A\u662F\u5426\u5F3A\u5236\u8981\u6C42\u8BF7\u6C42\u643A\u5E26 nonce \u503C\u3002</li>
<li><strong>\u57FA\u4E8E Redis \u7684 nonce \u552F\u4E00\u6027\u9A8C\u8BC1</strong>\uFF1A\u901A\u8FC7 Redis \u5B58\u50A8\u548C\u6821\u9A8C nonce \u503C\uFF0C\u786E\u4FDD\u5176\u552F\u4E00\u6027\u3002</li>
<li><strong>\u53EF\u914D\u7F6E\u7684 nonce \u6709\u6548\u671F</strong>\uFF1A\u652F\u6301\u8BBE\u7F6E nonce \u7684\u6709\u6548\u671F\uFF0C\u8FC7\u671F\u540E\u81EA\u52A8\u5931\u6548\u3002</li>
<li><strong>nonce \u683C\u5F0F\u548C\u957F\u5EA6\u6821\u9A8C</strong>\uFF1A\u652F\u6301\u5BF9 nonce \u503C\u7684\u683C\u5F0F\uFF08Base64\uFF09\u548C\u957F\u5EA6\u8FDB\u884C\u9A8C\u8BC1\u3002</li>
<li><strong>\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94</strong>\uFF1A\u652F\u6301\u914D\u7F6E\u62D2\u7EDD\u8BF7\u6C42\u65F6\u7684\u72B6\u6001\u7801\u548C\u9519\u8BEF\u4FE1\u606F\u3002</li>
<li><strong>\u53EF\u81EA\u5B9A\u4E49 nonce \u8BF7\u6C42\u5934</strong>\uFF1A\u53EF\u4EE5\u81EA\u5B9A\u4E49\u643A\u5E26 nonce \u7684\u8BF7\u6C42\u5934\u540D\u79F0\u3002</li>
</ul>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">800</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>











































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">force_nonce</code></td><td>bool</td><td>\u5426</td><td>true</td><td>\u662F\u5426\u5F3A\u5236\u8981\u6C42\u8BF7\u6C42\u643A\u5E26 nonce \u503C</td></tr><tr><td><code dir="auto">nonce_header</code></td><td>string</td><td>\u5426</td><td><code dir="auto">X-Higress-Nonce</code></td><td>\u6307\u5B9A\u643A\u5E26 nonce \u503C\u7684\u8BF7\u6C42\u5934\u540D\u79F0</td></tr><tr><td><code dir="auto">nonce_ttl</code></td><td>int</td><td>\u5426</td><td>900</td><td>nonce \u7684\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u79D2</td></tr><tr><td><code dir="auto">nonce_min_length</code></td><td>int</td><td>\u5426</td><td>8</td><td>nonce \u503C\u7684\u6700\u5C0F\u957F\u5EA6</td></tr><tr><td><code dir="auto">nonce_max_length</code></td><td>int</td><td>\u5426</td><td>128</td><td>nonce \u503C\u7684\u6700\u5927\u957F\u5EA6</td></tr><tr><td><code dir="auto">reject_code</code></td><td>int</td><td>\u5426</td><td>429</td><td>\u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u72B6\u6001\u7801</td></tr><tr><td><code dir="auto">reject_msg</code></td><td>string</td><td>\u5426</td><td><code dir="auto">Replay Attack Detected</code></td><td>\u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F</td></tr><tr><td><code dir="auto">validate_base64</code></td><td>bool</td><td>\u5426</td><td>false</td><td>\u662F\u5426\u6821\u9A8C nonce \u7684 base64 \u7F16\u7801\u683C\u5F0F</td></tr><tr><td><code dir="auto">redis</code></td><td>Object</td><td>\u662F</td><td>-</td><td>redis \u76F8\u5173\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">redis</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>





























































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">service_name</code></td><td>string</td><td>\u662F</td><td>-</td><td>redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local</td></tr><tr><td><code dir="auto">service_port</code></td><td>int</td><td>\u5426</td><td>6379</td><td>redis \u670D\u52A1\u7AEF\u53E3</td></tr><tr><td><code dir="auto">username</code></td><td>string</td><td>\u5426</td><td>-</td><td>redis \u7528\u6237\u540D</td></tr><tr><td><code dir="auto">password</code></td><td>string</td><td>\u5426</td><td>-</td><td>redis \u5BC6\u7801</td></tr><tr><td><code dir="auto">timeout</code></td><td>int</td><td>\u5426</td><td>1000</td><td>redis \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr><tr><td>database</td><td>int</td><td>\u5426</td><td>0</td><td>\u4F7F\u7528\u7684\u6570\u636E\u5E93id\uFF0C\u4F8B\u5982\u914D\u7F6E\u4E3A1\uFF0C\u5BF9\u5E94<code dir="auto">SELECT 1</code></td></tr><tr><td><code dir="auto">key_prefix</code></td><td>string</td><td>\u5426</td><td><code dir="auto">replay-protection</code></td><td>redis \u952E\u524D\u7F00\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 nonce \u952E</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u9632\u91CD\u653E\u653B\u51FB\u63D2\u4EF6\u7684\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">force_nonce</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"X-Higress-Nonce"</span><span style="--0:#E1E4E8">    </span><span style="--0:#99A0A6"># \u6307\u5B9A nonce \u8BF7\u6C42\u5934\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_ttl</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">900</span><span style="--0:#E1E4E8">                    </span><span style="--0:#99A0A6"># nonce \u6709\u6548\u671F\uFF0C\u8BBE\u7F6E\u4E3A 900 \u79D2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_min_length</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8</span><span style="--0:#E1E4E8">               </span><span style="--0:#99A0A6"># nonce \u7684\u6700\u5C0F\u957F\u5EA6</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nonce_max_length</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">128</span><span style="--0:#E1E4E8">             </span><span style="--0:#99A0A6"># nonce \u7684\u6700\u5927\u957F\u5EA6</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">validate_base64</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">             </span><span style="--0:#99A0A6"># \u662F\u5426\u5F00\u542F base64 \u683C\u5F0F\u6821\u9A8C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">reject_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">429</span><span style="--0:#E1E4E8">                  </span><span style="--0:#99A0A6"># \u5F53\u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">reject_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Replay Attack Detected"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u5185\u5BB9</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span><span style="--0:#E1E4E8">       </span><span style="--0:#99A0A6"># Redis \u670D\u52A1\u7684\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span><span style="--0:#E1E4E8">                </span><span style="--0:#99A0A6"># Redis \u670D\u52A1\u6240\u4F7F\u7528\u7684\u7AEF\u53E3</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span><span style="--0:#E1E4E8">                   </span><span style="--0:#99A0A6"># Redis \u64CD\u4F5C\u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF09</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">key_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replay-protection"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Redis \u4E2D\u952E\u7684\u524D\u7F00</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="force_nonce: true\x7Fnonce_header: &#x22;X-Higress-Nonce&#x22;    # \u6307\u5B9A nonce \u8BF7\u6C42\u5934\u540D\u79F0\x7Fnonce_ttl: 900                    # nonce \u6709\u6548\u671F\uFF0C\u8BBE\u7F6E\u4E3A 900 \u79D2\x7Fnonce_min_length: 8               # nonce \u7684\u6700\u5C0F\u957F\u5EA6\x7Fnonce_max_length: 128             # nonce \u7684\u6700\u5927\u957F\u5EA6\x7Fvalidate_base64: true             # \u662F\u5426\u5F00\u542F base64 \u683C\u5F0F\u6821\u9A8C\x7Freject_code: 429                  # \u5F53\u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801\x7Freject_msg: &#x22;Replay Attack Detected&#x22;  # \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u5185\u5BB9\x7Fredis:\x7F  service_name: redis.static       # Redis \u670D\u52A1\u7684\u540D\u79F0\x7F  service_port: 80                # Redis \u670D\u52A1\u6240\u4F7F\u7528\u7684\u7AEF\u53E3\x7F  timeout: 1000                   # Redis \u64CD\u4F5C\u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF09\x7F  key_prefix: &#x22;replay-protection&#x22; # Redis \u4E2D\u952E\u7684\u524D\u7F00"><div></div></button></div></figure></div>
<h2 id="\u4F7F\u7528\u8BF4\u660E">\u4F7F\u7528\u8BF4\u660E</h2>
<h3 id="\u8BF7\u6C42\u5934\u8981\u6C42">\u8BF7\u6C42\u5934\u8981\u6C42</h3>















<table><thead><tr><th>\u8BF7\u6C42\u5934\u540D\u79F0</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code dir="auto">X-Higress-Nonce</code></td><td>\u6839\u636E <code dir="auto">force_nonce</code> \u914D\u7F6E\u51B3\u5B9A</td><td>\u8BF7\u6C42\u4E2D\u643A\u5E26\u7684\u968F\u673A\u751F\u6210\u7684 nonce \u503C\uFF0C\u9700\u7B26\u5408 Base64 \u683C\u5F0F\u3002</td></tr></tbody></table>
<blockquote>
<p><strong>\u6CE8\u610F</strong>\uFF1A\u53EF\u4EE5\u901A\u8FC7 <code dir="auto">nonce_header</code> \u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u4E3A <code dir="auto">X-Higress-Nonce</code>\u3002</p>
</blockquote>
<h3 id="\u4F7F\u7528\u793A\u4F8B">\u4F7F\u7528\u793A\u4F8B</h3>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Generate nonce</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">nonce</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">$(</span><span style="--0:#B392F0">openssl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">rand</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-base64</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">32</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Send request</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'https://api.example.com/path'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"X-Higress-Nonce: </span><span style="--0:#E1E4E8">$nonce</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"key": "value"}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="nonce=$(openssl rand -base64 32)\x7Fcurl -X POST &#x27;https://api.example.com/path&#x27; \\\x7F  -H &#x22;X-Higress-Nonce: $nonce&#x22; \\\x7F  -d &#x27;{&#x22;key&#x22;: &#x22;value&#x22;}&#x27;"><div></div></button></div></figure></div>
<h2 id="\u8FD4\u56DE\u7ED3\u679C">\u8FD4\u56DE\u7ED3\u679C</h2>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">429</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"message"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Replay Attack Detected"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;code&#x22;: 429,\x7F  &#x22;message&#x22;: &#x22;Replay Attack Detected&#x22;\x7F}"><div></div></button></div></figure></div>
<h2 id="\u9519\u8BEF\u54CD\u5E94\u793A\u4F8B">\u9519\u8BEF\u54CD\u5E94\u793A\u4F8B</h2>






























<table><thead><tr><th>\u9519\u8BEF\u573A\u666F</th><th>\u72B6\u6001\u7801</th><th>\u9519\u8BEF\u4FE1\u606F</th></tr></thead><tbody><tr><td>\u7F3A\u5C11 nonce \u8BF7\u6C42\u5934</td><td>400</td><td><code dir="auto">Missing Required Header</code></td></tr><tr><td>nonce \u957F\u5EA6\u4E0D\u7B26\u5408\u8981\u6C42</td><td>400</td><td><code dir="auto">Invalid Nonce</code></td></tr><tr><td>nonce \u683C\u5F0F\u4E0D\u7B26\u5408 Base64</td><td>400</td><td><code dir="auto">Invalid Nonce</code></td></tr><tr><td>nonce \u5DF2\u88AB\u4F7F\u7528\uFF08\u91CD\u653E\u653B\u51FB\uFF09</td><td>429</td><td><code dir="auto">Replay Attack Detected</code></td></tr></tbody></table>`,n={title:"\u9632\u91CD\u653E\u653B\u51FB",keywords:["higress","replay-protection"],description:"\u9632\u91CD\u653E\u653B\u51FB\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/replay-protection.md",d=void 0,o=function(){return`
## \u529F\u80FD\u8BF4\u660E

\u9632\u91CD\u653E\u63D2\u4EF6\u901A\u8FC7\u9A8C\u8BC1\u8BF7\u6C42\u4E2D\u7684\u4E00\u6B21\u6027\u968F\u673A\u6570\u6765\u9632\u6B62\u8BF7\u6C42\u91CD\u653E\u653B\u51FB\u3002\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u9700\u8981\u643A\u5E26\u4E00\u4E2A\u552F\u4E00\u7684 nonce \u503C\uFF0C\u670D\u52A1\u5668\u4F1A\u8BB0\u5F55\u5E76\u6821\u9A8C\u8FD9\u4E2A\u503C\u7684\u552F\u4E00\u6027\uFF0C\u4ECE\u800C\u9632\u6B62\u8BF7\u6C42\u88AB\u6076\u610F\u91CD\u653E

\u5177\u4F53\u5305\u542B\u4E00\u4E0B\u529F\u80FD\uFF1A

- **\u5F3A\u5236\u6216\u53EF\u9009\u7684 nonce \u6821\u9A8C**\uFF1A\u53EF\u6839\u636E\u914D\u7F6E\u51B3\u5B9A\u662F\u5426\u5F3A\u5236\u8981\u6C42\u8BF7\u6C42\u643A\u5E26 nonce \u503C\u3002
- **\u57FA\u4E8E Redis \u7684 nonce \u552F\u4E00\u6027\u9A8C\u8BC1**\uFF1A\u901A\u8FC7 Redis \u5B58\u50A8\u548C\u6821\u9A8C nonce \u503C\uFF0C\u786E\u4FDD\u5176\u552F\u4E00\u6027\u3002
- **\u53EF\u914D\u7F6E\u7684 nonce \u6709\u6548\u671F**\uFF1A\u652F\u6301\u8BBE\u7F6E nonce \u7684\u6709\u6548\u671F\uFF0C\u8FC7\u671F\u540E\u81EA\u52A8\u5931\u6548\u3002
- **nonce \u683C\u5F0F\u548C\u957F\u5EA6\u6821\u9A8C**\uFF1A\u652F\u6301\u5BF9 nonce \u503C\u7684\u683C\u5F0F\uFF08Base64\uFF09\u548C\u957F\u5EA6\u8FDB\u884C\u9A8C\u8BC1\u3002
- **\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94**\uFF1A\u652F\u6301\u914D\u7F6E\u62D2\u7EDD\u8BF7\u6C42\u65F6\u7684\u72B6\u6001\u7801\u548C\u9519\u8BEF\u4FE1\u606F\u3002
- **\u53EF\u81EA\u5B9A\u4E49 nonce \u8BF7\u6C42\u5934**\uFF1A\u53EF\u4EE5\u81EA\u5B9A\u4E49\u643A\u5E26 nonce \u7684\u8BF7\u6C42\u5934\u540D\u79F0\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`800\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C          | \u63CF\u8FF0                              |
|----------------------|--------|------|-----------------|---------------------------------|
| \`force_nonce\`        | bool   | \u5426   | true      | \u662F\u5426\u5F3A\u5236\u8981\u6C42\u8BF7\u6C42\u643A\u5E26 nonce \u503C       |
| \`nonce_header\`       | string | \u5426   | \`X-Higress-Nonce\`   | \u6307\u5B9A\u643A\u5E26 nonce \u503C\u7684\u8BF7\u6C42\u5934\u540D\u79F0       |
| \`nonce_ttl\`          | int    | \u5426   | 900        | nonce \u7684\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u79D2    |
| \`nonce_min_length\`   | int    | \u5426   | 8            | nonce \u503C\u7684\u6700\u5C0F\u957F\u5EA6               |
| \`nonce_max_length\`   | int    | \u5426   | 128        | nonce \u503C\u7684\u6700\u5927\u957F\u5EA6               |
| \`reject_code\`        | int    | \u5426   | 429        | \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u72B6\u6001\u7801             |
| \`reject_msg\`         | string | \u5426   | \`Replay Attack Detected\` | \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F           |
| \`validate_base64\`    | bool    | \u5426   | false | \u662F\u5426\u6821\u9A8C nonce \u7684 base64 \u7F16\u7801\u683C\u5F0F |
| \`redis\` | Object | \u662F   | -              | redis \u76F8\u5173\u914D\u7F6E |

\`redis\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u540D\u79F0           | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C                 | \u63CF\u8FF0|
| -------------- | -------- | ---- |---------------------| --------------------------------------- |
| \`service_name\` | string   | \u662F   | -                   | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local |
| \`service_port\` | int      | \u5426   | 6379                | redis \u670D\u52A1\u7AEF\u53E3|
| \`username\`     | string | \u5426   | -                   | redis \u7528\u6237\u540D|
| \`password\`     | string | \u5426   | -                   | redis \u5BC6\u7801|
| \`timeout\`      | int      | \u5426   | 1000                | redis \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |
| database     | int    | \u5426   | 0                   | \u4F7F\u7528\u7684\u6570\u636E\u5E93id\uFF0C\u4F8B\u5982\u914D\u7F6E\u4E3A1\uFF0C\u5BF9\u5E94\`SELECT 1\`|
| \`key_prefix\`   | string   | \u5426   | \`replay-protection\` | redis \u952E\u524D\u7F00\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 nonce \u952E |

## \u914D\u7F6E\u793A\u4F8B

\u4EE5\u4E0B\u662F\u4E00\u4E2A\u9632\u91CD\u653E\u653B\u51FB\u63D2\u4EF6\u7684\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
force_nonce: true
nonce_header: "X-Higress-Nonce"    # \u6307\u5B9A nonce \u8BF7\u6C42\u5934\u540D\u79F0
nonce_ttl: 900                    # nonce \u6709\u6548\u671F\uFF0C\u8BBE\u7F6E\u4E3A 900 \u79D2
nonce_min_length: 8               # nonce \u7684\u6700\u5C0F\u957F\u5EA6
nonce_max_length: 128             # nonce \u7684\u6700\u5927\u957F\u5EA6
validate_base64: true             # \u662F\u5426\u5F00\u542F base64 \u683C\u5F0F\u6821\u9A8C
reject_code: 429                  # \u5F53\u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801
reject_msg: "Replay Attack Detected"  # \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u5185\u5BB9
redis:
  service_name: redis.static       # Redis \u670D\u52A1\u7684\u540D\u79F0
  service_port: 80                # Redis \u670D\u52A1\u6240\u4F7F\u7528\u7684\u7AEF\u53E3
  timeout: 1000                   # Redis \u64CD\u4F5C\u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF09
  key_prefix: "replay-protection" # Redis \u4E2D\u952E\u7684\u524D\u7F00
\`\`\`

## \u4F7F\u7528\u8BF4\u660E

### \u8BF7\u6C42\u5934\u8981\u6C42

| \u8BF7\u6C42\u5934\u540D\u79F0       | \u662F\u5426\u5FC5\u987B         | \u8BF4\u660E                                       |
|-----------------|----------------|------------------------------------------|
| \`X-Higress-Nonce\`  | \u6839\u636E \`force_nonce\` \u914D\u7F6E\u51B3\u5B9A | \u8BF7\u6C42\u4E2D\u643A\u5E26\u7684\u968F\u673A\u751F\u6210\u7684 nonce \u503C\uFF0C\u9700\u7B26\u5408 Base64 \u683C\u5F0F\u3002 |

> **\u6CE8\u610F**\uFF1A\u53EF\u4EE5\u901A\u8FC7 \`nonce_header\` \u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u4E3A \`X-Higress-Nonce\`\u3002

### \u4F7F\u7528\u793A\u4F8B

\`\`\`bash
# Generate nonce
nonce=$(openssl rand -base64 32)

# Send request
curl -X POST 'https://api.example.com/path' \\
  -H "X-Higress-Nonce: $nonce" \\
  -d '{"key": "value"}'
\`\`\`

## \u8FD4\u56DE\u7ED3\u679C

\`\`\`json
{
  "code": 429,
  "message": "Replay Attack Detected"
}
\`\`\`

## \u9519\u8BEF\u54CD\u5E94\u793A\u4F8B

| \u9519\u8BEF\u573A\u666F                 | \u72B6\u6001\u7801 | \u9519\u8BEF\u4FE1\u606F               |
|------------------------|-------|--------------------|
| \u7F3A\u5C11 nonce \u8BF7\u6C42\u5934         | 400 | \`Missing Required Header\` |
| nonce \u957F\u5EA6\u4E0D\u7B26\u5408\u8981\u6C42      | 400 | \`Invalid Nonce\` |
| nonce \u683C\u5F0F\u4E0D\u7B26\u5408 Base64 | 400 | \`Invalid Nonce\` |
| nonce \u5DF2\u88AB\u4F7F\u7528\uFF08\u91CD\u653E\u653B\u51FB\uFF09 | 429 | \`Replay Attack Detected\` |

`},c=function(){return e},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:2,slug:"\u4F7F\u7528\u8BF4\u660E",text:"\u4F7F\u7528\u8BF4\u660E"},{depth:3,slug:"\u8BF7\u6C42\u5934\u8981\u6C42",text:"\u8BF7\u6C42\u5934\u8981\u6C42"},{depth:3,slug:"\u4F7F\u7528\u793A\u4F8B",text:"\u4F7F\u7528\u793A\u4F8B"},{depth:2,slug:"\u8FD4\u56DE\u7ED3\u679C",text:"\u8FD4\u56DE\u7ED3\u679C"},{depth:2,slug:"\u9519\u8BEF\u54CD\u5E94\u793A\u4F8B",text:"\u9519\u8BEF\u54CD\u5E94\u793A\u4F8B"}]},t=p((g,_,x)=>{const{layout:F,...a}=n;return a.file=s,a.url=d,r`${E()}${y(e)}`})});export{t as Content,u as __tla,c as compiledContent,t as default,s as file,n as frontmatter,i as getHeadings,o as rawContent,d as url};
