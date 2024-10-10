import{c,__tla as o}from"./astro-component.COZxaGv5.js";import{r,m as y,u as E,__tla as v}from"./constant.C9P4cBlv.js";import{__tla as u}from"./astro/assets-service.8AFaQ3Qd.js";let e,d,a,n,l,i,t,h=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u5BF9\u8BF7\u6C42/\u8FD4\u56DE\u4E2D\u7684\u654F\u611F\u8BCD\u62E6\u622A\u3001\u66FF\u6362</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN0156Wtko1T9JO0RiWow_!!6000000002339-0-tps-1314-638.jpg" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="\u5904\u7406\u6570\u636E\u8303\u56F4">\u5904\u7406\u6570\u636E\u8303\u56F4</h3>
<ul>
<li>openai\u534F\u8BAE\uFF1A\u8BF7\u6C42/\u8FD4\u56DE\u5BF9\u8BDD\u5185\u5BB9</li>
<li>jsonpath\uFF1A\u53EA\u5904\u7406\u6307\u5B9A\u5B57\u6BB5</li>
<li>raw\uFF1A\u6574\u4E2A\u8BF7\u6C42/\u8FD4\u56DEbody</li>
</ul>
<h3 id="\u654F\u611F\u8BCD\u62E6\u622A">\u654F\u611F\u8BCD\u62E6\u622A</h3>
<ul>
<li>\u5904\u7406\u6570\u636E\u8303\u56F4\u4E2D\u51FA\u73B0\u654F\u611F\u8BCD\u76F4\u63A5\u62E6\u622A\uFF0C\u8FD4\u56DE\u9884\u8BBE\u9519\u8BEF\u4FE1\u606F</li>
<li>\u652F\u6301\u7CFB\u7EDF\u5185\u7F6E\u654F\u611F\u8BCD\u5E93\u548C\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD</li>
</ul>
<h3 id="\u654F\u611F\u8BCD\u66FF\u6362">\u654F\u611F\u8BCD\u66FF\u6362</h3>
<ul>
<li>\u5C06\u8BF7\u6C42\u6570\u636E\u4E2D\u51FA\u73B0\u7684\u654F\u611F\u8BCD\u66FF\u6362\u4E3A\u8131\u654F\u5B57\u7B26\u4E32\uFF0C\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\u3002\u53EF\u4FDD\u8BC1\u654F\u611F\u6570\u636E\u4E0D\u51FA\u57DF</li>
<li>\u90E8\u5206\u8131\u654F\u6570\u636E\u5728\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u540E\u53EF\u8FDB\u884C\u8FD8\u539F</li>
<li>\u81EA\u5B9A\u4E49\u89C4\u5219\u652F\u6301\u6807\u51C6\u6B63\u5219\u548Cgrok\u89C4\u5219\uFF0C\u66FF\u6362\u5B57\u7B26\u4E32\u652F\u6301\u53D8\u91CF\u66FF\u6362</li>
</ul>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">991</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>































































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>deny_openai</td><td>bool</td><td>true</td><td>\u5BF9openai\u534F\u8BAE\u8FDB\u884C\u62E6\u622A</td></tr><tr><td>deny_jsonpath</td><td>string</td><td>[]</td><td>\u5BF9\u6307\u5B9Ajsonpath\u62E6\u622A</td></tr><tr><td>deny_raw</td><td>bool</td><td>false</td><td>\u5BF9\u539F\u59CBbody\u62E6\u622A</td></tr><tr><td>system_deny</td><td>bool</td><td>true</td><td>\u5F00\u542F\u5185\u7F6E\u62E6\u622A\u89C4\u5219</td></tr><tr><td>deny_code</td><td>int</td><td>200</td><td>\u62E6\u622A\u65F6http\u72B6\u6001\u7801</td></tr><tr><td>deny_message</td><td>string</td><td>\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D</td><td>\u62E6\u622A\u65F6ai\u8FD4\u56DE\u6D88\u606F</td></tr><tr><td>deny_raw_message</td><td>string</td><td>{\u201Cerrmsg\u201D:\u201C\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D\u201D}</td><td>\u975Eopenai\u62E6\u622A\u65F6\u8FD4\u56DE\u5185\u5BB9</td></tr><tr><td>deny_content_type</td><td>string</td><td>application/json</td><td>\u975Eopenai\u62E6\u622A\u65F6\u8FD4\u56DEcontent_type\u5934</td></tr><tr><td>deny_words</td><td>array of string</td><td>[]</td><td>\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD\u5217\u8868</td></tr><tr><td>replace_roles</td><td>array</td><td>-</td><td>\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD\u6B63\u5219\u66FF\u6362</td></tr><tr><td>replace_roles.regex</td><td>string</td><td>-</td><td>\u89C4\u5219\u6B63\u5219(\u5185\u7F6EGROK\u89C4\u5219)</td></tr><tr><td>replace_roles.type</td><td>[replace, hash]</td><td>-</td><td>\u66FF\u6362\u7C7B\u578B</td></tr><tr><td>replace_roles.restore</td><td>bool</td><td>false</td><td>\u662F\u5426\u6062\u590D</td></tr><tr><td>replace_roles.value</td><td>string</td><td>-</td><td>\u66FF\u6362\u503C\uFF08\u652F\u6301\u6B63\u5219\u53D8\u91CF\uFF09</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">system_deny</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_openai</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_jsonpath</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"$.messages[*].content"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_raw</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_message</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_raw_message</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">errmsg</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_content_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"application/json"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">deny_words</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD2"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">replace_roles</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{MOBILE}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"****"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u624B\u673A\u53F7  13800138000 -> ****</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{EMAILLOCALPART}@%{HOSTNAME:domain}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restore</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"****@$domain"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u7535\u5B50\u90AE\u7BB1  admin@gmail.com -> ****@gmail.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{IP}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restore</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"***.***.***.***"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># ip 192.168.0.1 -> ***.***.***.***</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%{IDCARD}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"replace"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"****"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u8EAB\u4EFD\u8BC1\u53F7 110000000000000000 -> ****</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">regex</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"sk-[0-9a-zA-Z]*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">restore</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"hash"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># hash sk-12345 -> 9cb495455da32f41567dab1d07f1973d</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># hash\u540E\u7684\u503C\u63D0\u4F9B\u7ED9\u5927\u6A21\u578B\uFF0C\u4ECE\u5927\u6A21\u578B\u8FD4\u56DE\u7684\u6570\u636E\u4E2D\u4F1A\u5C06hash\u503C\u8FD8\u539F\u4E3A\u539F\u59CB\u503C</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="system_deny: true\x7Fdeny_openai: true\x7Fdeny_jsonpath:\x7F  - &#x22;$.messages[*].content&#x22;\x7Fdeny_raw: true\x7Fdeny_code: 200\x7Fdeny_message: &#x22;\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D&#x22;\x7Fdeny_raw_message: &#x22;{\\&#x22;errmsg\\&#x22;:\\&#x22;\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D\\&#x22;}&#x22;\x7Fdeny_content_type: &#x22;application/json&#x22;\x7Fdeny_words:\x7F  - &#x22;\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD1&#x22;\x7F  - &#x22;\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD2&#x22;\x7Freplace_roles:\x7F  - regex: &#x22;%{MOBILE}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    value: &#x22;****&#x22;\x7F    # \u624B\u673A\u53F7  13800138000 -> ****\x7F  - regex: &#x22;%{EMAILLOCALPART}@%{HOSTNAME:domain}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    restore: true\x7F    value: &#x22;****@$domain&#x22;\x7F    # \u7535\u5B50\u90AE\u7BB1  admin@gmail.com -> ****@gmail.com\x7F  - regex: &#x22;%{IP}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    restore: true\x7F    value: &#x22;***.***.***.***&#x22;\x7F    # ip 192.168.0.1 -> ***.***.***.***\x7F  - regex: &#x22;%{IDCARD}&#x22;\x7F    type: &#x22;replace&#x22;\x7F    value: &#x22;****&#x22;\x7F    # \u8EAB\u4EFD\u8BC1\u53F7 110000000000000000 -> ****\x7F  - regex: &#x22;sk-[0-9a-zA-Z]*&#x22;\x7F    restore: true\x7F    type: &#x22;hash&#x22;\x7F    # hash sk-12345 -> 9cb495455da32f41567dab1d07f1973d\x7F    # hash\u540E\u7684\u503C\u63D0\u4F9B\u7ED9\u5927\u6A21\u578B\uFF0C\u4ECE\u5927\u6A21\u578B\u8FD4\u56DE\u7684\u6570\u636E\u4E2D\u4F1A\u5C06hash\u503C\u8FD8\u539F\u4E3A\u539F\u59CB\u503C"><div></div></button></div></figure></div>
<h2 id="\u654F\u611F\u8BCD\u66FF\u6362\u6837\u4F8B">\u654F\u611F\u8BCD\u66FF\u6362\u6837\u4F8B</h2>
<h3 id="\u7528\u6237\u8BF7\u6C42\u5185\u5BB9">\u7528\u6237\u8BF7\u6C42\u5185\u5BB9</h3>
<p>\u8BF7\u5C06 <code dir="auto">curl http://172.20.5.14/api/openai/v1/chat/completions -H "Authorization: sk-12345" -H "Auth: test@gmail.com"</code> \u6539\u6210post\u65B9\u5F0F</p>
<h3 id="\u5904\u7406\u540E\u8BF7\u6C42\u5927\u6A21\u578B\u5185\u5BB9">\u5904\u7406\u540E\u8BF7\u6C42\u5927\u6A21\u578B\u5185\u5BB9</h3>
<p><code dir="auto">curl http://***.***.***.***/api/openai/v1/chat/completions -H "Authorization: 48a7e98a91d93896d8dac522c5853948" -H "Auth: ****@gmail.com"</code> \u6539\u6210post\u65B9\u5F0F</p>
<h3 id="\u5927\u6A21\u578B\u8FD4\u56DE\u5185\u5BB9">\u5927\u6A21\u578B\u8FD4\u56DE\u5185\u5BB9</h3>
<p>\u60A8\u60F3\u8981\u5C06\u4E00\u4E2A <code dir="auto">curl</code> \u7684 GET \u8BF7\u6C42\u8F6C\u6362\u4E3A POST \u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8BF7\u6C42\u662F\u5411\u4E00\u4E2A\u7279\u5B9A\u7684 API \u53D1\u9001\u6570\u636E\u3002\u4E0B\u9762\u662F\u4FEE\u6539\u540E\u7684 <code dir="auto">curl</code> \u547D\u4EE4\uFF0C\u4EE5 POST \u65B9\u5F0F\u53D1\u9001\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: 48a7e98a91d93896d8dac522c5853948"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Auth: ****@gmail.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"key":"value"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#9ECBFF">http://</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">.</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">.</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">.</span><span style="--0:#79B8FF">***</span><span style="--0:#9ECBFF">/api/openai/v1/chat/completions</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST \\\x7F     -H &#x22;Authorization: 48a7e98a91d93896d8dac522c5853948&#x22; \\\x7F     -H &#x22;Auth: ****@gmail.com&#x22; \\\x7F     -H &#x22;Content-Type: application/json&#x22; \\\x7F     -d &#x27;{&#x22;key&#x22;:&#x22;value&#x22;}&#x27; \\\x7F     http://***.***.***.***/api/openai/v1/chat/completions"><div></div></button></div></figure></div>
<p>\u8FD9\u91CC\u505A\u4E86\u5982\u4E0B\u51E0\u4E2A\u4FEE\u6539:</p>
<ul>
<li><code dir="auto">-X POST</code> \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u5F0F\u4E3A POST\u3002</li>
<li><code dir="auto">-H "Content-Type: application/json"</code> \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4E2D\u7684 <code dir="auto">Content-Type</code> \u4E3A <code dir="auto">application/json</code>\uFF0C\u8FD9\u901A\u5E38\u7528\u6765\u544A\u8BC9\u670D\u52A1\u5668\u60A8\u53D1\u9001\u7684\u6570\u636E\u683C\u5F0F\u662F JSON\u3002</li>
<li><code dir="auto">-d '{"key":"value"}'</code> \u8FD9\u91CC\u8BBE\u7F6E\u4E86\u8981\u53D1\u9001\u7684\u6570\u636E\uFF0C<code dir="auto">'{"key":"value"}'</code> \u662F\u4E00\u4E2A\u7B80\u5355\u7684 JSON \u5BF9\u8C61\u793A\u4F8B\u3002\u60A8\u9700\u8981\u5C06\u5176\u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u60F3\u8981\u53D1\u9001\u7684\u6570\u636E\u3002</li>
</ul>
<p>\u8BF7\u6CE8\u610F\uFF0C\u60A8\u9700\u8981\u5C06 <code dir="auto">"key":"value"</code> \u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u8981\u53D1\u9001\u7684\u6570\u636E\u5185\u5BB9\u3002\u5982\u679C\u60A8\u7684 API \u63A5\u53D7\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6216\u8005\u9700\u8981\u7279\u5B9A\u7684\u5B57\u6BB5\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FD9\u90E8\u5206\u5185\u5BB9\u3002</p>
<h3 id="\u5904\u7406\u540E\u8FD4\u56DE\u7528\u6237\u5185\u5BB9">\u5904\u7406\u540E\u8FD4\u56DE\u7528\u6237\u5185\u5BB9</h3>
<p>\u60A8\u60F3\u8981\u5C06\u4E00\u4E2A <code dir="auto">curl</code> \u7684 GET \u8BF7\u6C42\u8F6C\u6362\u4E3A POST \u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8BF7\u6C42\u662F\u5411\u4E00\u4E2A\u7279\u5B9A\u7684 API \u53D1\u9001\u6570\u636E\u3002\u4E0B\u9762\u662F\u4FEE\u6539\u540E\u7684 <code dir="auto">curl</code> \u547D\u4EE4\uFF0C\u4EE5 POST \u65B9\u5F0F\u53D1\u9001\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: sk-12345"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Auth: test@gmail.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"key":"value"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#9ECBFF">http://172.20.5.14/api/openai/v1/chat/completions</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST \\\x7F     -H &#x22;Authorization: sk-12345&#x22; \\\x7F     -H &#x22;Auth: test@gmail.com&#x22; \\\x7F     -H &#x22;Content-Type: application/json&#x22; \\\x7F     -d &#x27;{&#x22;key&#x22;:&#x22;value&#x22;}&#x27; \\\x7F     http://172.20.5.14/api/openai/v1/chat/completions"><div></div></button></div></figure></div>
<p>\u8FD9\u91CC\u505A\u4E86\u5982\u4E0B\u51E0\u4E2A\u4FEE\u6539:</p>
<ul>
<li><code dir="auto">-X POST</code> \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u5F0F\u4E3A POST\u3002</li>
<li><code dir="auto">-H "Content-Type: application/json"</code> \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4E2D\u7684 <code dir="auto">Content-Type</code> \u4E3A <code dir="auto">application/json</code>\uFF0C\u8FD9\u901A\u5E38\u7528\u6765\u544A\u8BC9\u670D\u52A1\u5668\u60A8\u53D1\u9001\u7684\u6570\u636E\u683C\u5F0F\u662F JSON\u3002</li>
<li><code dir="auto">-d '{"key":"value"}'</code> \u8FD9\u91CC\u8BBE\u7F6E\u4E86\u8981\u53D1\u9001\u7684\u6570\u636E\uFF0C<code dir="auto">'{"key":"value"}'</code> \u662F\u4E00\u4E2A\u7B80\u5355\u7684 JSON \u5BF9\u8C61\u793A\u4F8B\u3002\u60A8\u9700\u8981\u5C06\u5176\u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u60F3\u8981\u53D1\u9001\u7684\u6570\u636E\u3002</li>
</ul>
<p>\u8BF7\u6CE8\u610F\uFF0C\u60A8\u9700\u8981\u5C06 <code dir="auto">"key":"value"</code> \u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u8981\u53D1\u9001\u7684\u6570\u636E\u5185\u5BB9\u3002\u5982\u679C\u60A8\u7684 API \u63A5\u53D7\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6216\u8005\u9700\u8981\u7279\u5B9A\u7684\u5B57\u6BB5\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FD9\u90E8\u5206\u5185\u5BB9\u3002</p>
<h2 id="\u76F8\u5173\u8BF4\u660E">\u76F8\u5173\u8BF4\u660E</h2>
<ul>
<li>\u6D41\u6A21\u5F0F\u4E2D\u5982\u679C\u8131\u654F\u540E\u7684\u8BCD\u88AB\u591A\u4E2Achunk\u62C6\u5206\uFF0C\u53EF\u80FD\u65E0\u6CD5\u8FDB\u884C\u8FD8\u539F</li>
<li>\u6D41\u6A21\u5F0F\u4E2D\uFF0C\u5982\u679C\u654F\u611F\u8BCD\u8BED\u88AB\u591A\u4E2Achunk\u62C6\u5206\uFF0C\u53EF\u80FD\u4F1A\u6709\u654F\u611F\u8BCD\u7684\u4E00\u90E8\u5206\u8FD4\u56DE\u7ED9\u7528\u6237\u7684\u60C5\u51B5</li>
<li>grok \u5185\u7F6E\u89C4\u5219\u5217\u8868 <a href="https://help.aliyun.com/zh/sls/user-guide/grok-patterns" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://help.aliyun.com/zh/sls/user-guide/grok-patterns</a></li>
<li>\u5185\u7F6E\u654F\u611F\u8BCD\u5E93\u6570\u636E\u6765\u6E90 <a href="https://github.com/houbb/sensitive-word/tree/master/src/main/resources" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/houbb/sensitive-word/tree/master/src/main/resources</a></li>
</ul>`,n={title:"AI \u6570\u636E\u8131\u654F",keywords:["higress","ai data masking"],description:"AI \u6570\u636E\u8131\u654F\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-consumer/ai-data-masking.md",t=void 0,i=function(){return`
## \u529F\u80FD\u8BF4\u660E

  \u5BF9\u8BF7\u6C42/\u8FD4\u56DE\u4E2D\u7684\u654F\u611F\u8BCD\u62E6\u622A\u3001\u66FF\u6362

![image](https://img.alicdn.com/imgextra/i4/O1CN0156Wtko1T9JO0RiWow_!!6000000002339-0-tps-1314-638.jpg)

### \u5904\u7406\u6570\u636E\u8303\u56F4
  - openai\u534F\u8BAE\uFF1A\u8BF7\u6C42/\u8FD4\u56DE\u5BF9\u8BDD\u5185\u5BB9
  - jsonpath\uFF1A\u53EA\u5904\u7406\u6307\u5B9A\u5B57\u6BB5
  - raw\uFF1A\u6574\u4E2A\u8BF7\u6C42/\u8FD4\u56DEbody

### \u654F\u611F\u8BCD\u62E6\u622A
  - \u5904\u7406\u6570\u636E\u8303\u56F4\u4E2D\u51FA\u73B0\u654F\u611F\u8BCD\u76F4\u63A5\u62E6\u622A\uFF0C\u8FD4\u56DE\u9884\u8BBE\u9519\u8BEF\u4FE1\u606F
  - \u652F\u6301\u7CFB\u7EDF\u5185\u7F6E\u654F\u611F\u8BCD\u5E93\u548C\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD

### \u654F\u611F\u8BCD\u66FF\u6362
  - \u5C06\u8BF7\u6C42\u6570\u636E\u4E2D\u51FA\u73B0\u7684\u654F\u611F\u8BCD\u66FF\u6362\u4E3A\u8131\u654F\u5B57\u7B26\u4E32\uFF0C\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\u3002\u53EF\u4FDD\u8BC1\u654F\u611F\u6570\u636E\u4E0D\u51FA\u57DF
  - \u90E8\u5206\u8131\u654F\u6570\u636E\u5728\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u540E\u53EF\u8FDB\u884C\u8FD8\u539F
  - \u81EA\u5B9A\u4E49\u89C4\u5219\u652F\u6301\u6807\u51C6\u6B63\u5219\u548Cgrok\u89C4\u5219\uFF0C\u66FF\u6362\u5B57\u7B26\u4E32\u652F\u6301\u53D8\u91CF\u66FF\u6362

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`991\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | --------  | -------- | -------- |
|  deny_openai            | bool            | true  |  \u5BF9openai\u534F\u8BAE\u8FDB\u884C\u62E6\u622A |
|  deny_jsonpath          | string          |   []  |  \u5BF9\u6307\u5B9Ajsonpath\u62E6\u622A |
|  deny_raw               | bool            | false |  \u5BF9\u539F\u59CBbody\u62E6\u622A |
|  system_deny            | bool            | true  |  \u5F00\u542F\u5185\u7F6E\u62E6\u622A\u89C4\u5219  |
|  deny_code              | int             | 200   |  \u62E6\u622A\u65F6http\u72B6\u6001\u7801   |
|  deny_message           | string          | \u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D |  \u62E6\u622A\u65F6ai\u8FD4\u56DE\u6D88\u606F   |
|  deny_raw_message       | string          | {"errmsg":"\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D"} |  \u975Eopenai\u62E6\u622A\u65F6\u8FD4\u56DE\u5185\u5BB9   |
|  deny_content_type      | string          | application/json  |  \u975Eopenai\u62E6\u622A\u65F6\u8FD4\u56DEcontent_type\u5934 |
|  deny_words             | array of string | []    |  \u81EA\u5B9A\u4E49\u654F\u611F\u8BCD\u5217\u8868  |
|  replace_roles          | array           |   -   |  \u81EA\u5B9A\u4E49\u654F\u611F\u8BCD\u6B63\u5219\u66FF\u6362  |
|  replace_roles.regex    | string          |   -   |  \u89C4\u5219\u6B63\u5219(\u5185\u7F6EGROK\u89C4\u5219) |
|  replace_roles.type     | [replace, hash] |   -   |  \u66FF\u6362\u7C7B\u578B  |
|  replace_roles.restore  | bool            | false |  \u662F\u5426\u6062\u590D  |
|  replace_roles.value    | string          |   -   |  \u66FF\u6362\u503C\uFF08\u652F\u6301\u6B63\u5219\u53D8\u91CF\uFF09  |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
system_deny: true
deny_openai: true
deny_jsonpath:
  - "$.messages[*].content"
deny_raw: true
deny_code: 200
deny_message: "\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D"
deny_raw_message: "{\\"errmsg\\":\\"\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D\\"}"
deny_content_type: "application/json"
deny_words: 
  - "\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD1"
  - "\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD2"
replace_roles:
  - regex: "%{MOBILE}"
    type: "replace"
    value: "****"
    # \u624B\u673A\u53F7  13800138000 -> ****
  - regex: "%{EMAILLOCALPART}@%{HOSTNAME:domain}"
    type: "replace"
    restore: true
    value: "****@$domain"
    # \u7535\u5B50\u90AE\u7BB1  admin@gmail.com -> ****@gmail.com
  - regex: "%{IP}"
    type: "replace"
    restore: true
    value: "***.***.***.***"
    # ip 192.168.0.1 -> ***.***.***.***
  - regex: "%{IDCARD}"
    type: "replace"
    value: "****"
    # \u8EAB\u4EFD\u8BC1\u53F7 110000000000000000 -> ****
  - regex: "sk-[0-9a-zA-Z]*"
    restore: true
    type: "hash"
    # hash sk-12345 -> 9cb495455da32f41567dab1d07f1973d
    # hash\u540E\u7684\u503C\u63D0\u4F9B\u7ED9\u5927\u6A21\u578B\uFF0C\u4ECE\u5927\u6A21\u578B\u8FD4\u56DE\u7684\u6570\u636E\u4E2D\u4F1A\u5C06hash\u503C\u8FD8\u539F\u4E3A\u539F\u59CB\u503C
\`\`\`

## \u654F\u611F\u8BCD\u66FF\u6362\u6837\u4F8B

### \u7528\u6237\u8BF7\u6C42\u5185\u5BB9

  \u8BF7\u5C06 \`curl http://172.20.5.14/api/openai/v1/chat/completions -H "Authorization: sk-12345" -H "Auth: test@gmail.com"\` \u6539\u6210post\u65B9\u5F0F

### \u5904\u7406\u540E\u8BF7\u6C42\u5927\u6A21\u578B\u5185\u5BB9

  \`curl http://***.***.***.***/api/openai/v1/chat/completions -H "Authorization: 48a7e98a91d93896d8dac522c5853948" -H "Auth: ****@gmail.com"\` \u6539\u6210post\u65B9\u5F0F

### \u5927\u6A21\u578B\u8FD4\u56DE\u5185\u5BB9

  \u60A8\u60F3\u8981\u5C06\u4E00\u4E2A \`curl\` \u7684 GET \u8BF7\u6C42\u8F6C\u6362\u4E3A POST \u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8BF7\u6C42\u662F\u5411\u4E00\u4E2A\u7279\u5B9A\u7684 API \u53D1\u9001\u6570\u636E\u3002\u4E0B\u9762\u662F\u4FEE\u6539\u540E\u7684 \`curl\` \u547D\u4EE4\uFF0C\u4EE5 POST \u65B9\u5F0F\u53D1\u9001\uFF1A

\`\`\`sh
curl -X POST \\
     -H "Authorization: 48a7e98a91d93896d8dac522c5853948" \\
     -H "Auth: ****@gmail.com" \\
     -H "Content-Type: application/json" \\
     -d '{"key":"value"}' \\
     http://***.***.***.***/api/openai/v1/chat/completions
\`\`\`

\u8FD9\u91CC\u505A\u4E86\u5982\u4E0B\u51E0\u4E2A\u4FEE\u6539:

- \`-X POST\` \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u5F0F\u4E3A POST\u3002
- \`-H "Content-Type: application/json"\` \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4E2D\u7684 \`Content-Type\` \u4E3A \`application/json\`\uFF0C\u8FD9\u901A\u5E38\u7528\u6765\u544A\u8BC9\u670D\u52A1\u5668\u60A8\u53D1\u9001\u7684\u6570\u636E\u683C\u5F0F\u662F JSON\u3002
- \`-d '{"key":"value"}'\` \u8FD9\u91CC\u8BBE\u7F6E\u4E86\u8981\u53D1\u9001\u7684\u6570\u636E\uFF0C\`'{"key":"value"}'\` \u662F\u4E00\u4E2A\u7B80\u5355\u7684 JSON \u5BF9\u8C61\u793A\u4F8B\u3002\u60A8\u9700\u8981\u5C06\u5176\u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u60F3\u8981\u53D1\u9001\u7684\u6570\u636E\u3002

\u8BF7\u6CE8\u610F\uFF0C\u60A8\u9700\u8981\u5C06 \`"key":"value"\` \u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u8981\u53D1\u9001\u7684\u6570\u636E\u5185\u5BB9\u3002\u5982\u679C\u60A8\u7684 API \u63A5\u53D7\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6216\u8005\u9700\u8981\u7279\u5B9A\u7684\u5B57\u6BB5\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FD9\u90E8\u5206\u5185\u5BB9\u3002

### \u5904\u7406\u540E\u8FD4\u56DE\u7528\u6237\u5185\u5BB9

  \u60A8\u60F3\u8981\u5C06\u4E00\u4E2A \`curl\` \u7684 GET \u8BF7\u6C42\u8F6C\u6362\u4E3A POST \u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8BF7\u6C42\u662F\u5411\u4E00\u4E2A\u7279\u5B9A\u7684 API \u53D1\u9001\u6570\u636E\u3002\u4E0B\u9762\u662F\u4FEE\u6539\u540E\u7684 \`curl\` \u547D\u4EE4\uFF0C\u4EE5 POST \u65B9\u5F0F\u53D1\u9001\uFF1A

\`\`\`sh
curl -X POST \\
     -H "Authorization: sk-12345" \\
     -H "Auth: test@gmail.com" \\
     -H "Content-Type: application/json" \\
     -d '{"key":"value"}' \\
     http://172.20.5.14/api/openai/v1/chat/completions
\`\`\`

\u8FD9\u91CC\u505A\u4E86\u5982\u4E0B\u51E0\u4E2A\u4FEE\u6539:

- \`-X POST\` \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u5F0F\u4E3A POST\u3002
- \`-H "Content-Type: application/json"\` \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4E2D\u7684 \`Content-Type\` \u4E3A \`application/json\`\uFF0C\u8FD9\u901A\u5E38\u7528\u6765\u544A\u8BC9\u670D\u52A1\u5668\u60A8\u53D1\u9001\u7684\u6570\u636E\u683C\u5F0F\u662F JSON\u3002
- \`-d '{"key":"value"}'\` \u8FD9\u91CC\u8BBE\u7F6E\u4E86\u8981\u53D1\u9001\u7684\u6570\u636E\uFF0C\`'{"key":"value"}'\` \u662F\u4E00\u4E2A\u7B80\u5355\u7684 JSON \u5BF9\u8C61\u793A\u4F8B\u3002\u60A8\u9700\u8981\u5C06\u5176\u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u60F3\u8981\u53D1\u9001\u7684\u6570\u636E\u3002

\u8BF7\u6CE8\u610F\uFF0C\u60A8\u9700\u8981\u5C06 \`"key":"value"\` \u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u8981\u53D1\u9001\u7684\u6570\u636E\u5185\u5BB9\u3002\u5982\u679C\u60A8\u7684 API \u63A5\u53D7\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6216\u8005\u9700\u8981\u7279\u5B9A\u7684\u5B57\u6BB5\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FD9\u90E8\u5206\u5185\u5BB9\u3002


## \u76F8\u5173\u8BF4\u660E

 - \u6D41\u6A21\u5F0F\u4E2D\u5982\u679C\u8131\u654F\u540E\u7684\u8BCD\u88AB\u591A\u4E2Achunk\u62C6\u5206\uFF0C\u53EF\u80FD\u65E0\u6CD5\u8FDB\u884C\u8FD8\u539F
 - \u6D41\u6A21\u5F0F\u4E2D\uFF0C\u5982\u679C\u654F\u611F\u8BCD\u8BED\u88AB\u591A\u4E2Achunk\u62C6\u5206\uFF0C\u53EF\u80FD\u4F1A\u6709\u654F\u611F\u8BCD\u7684\u4E00\u90E8\u5206\u8FD4\u56DE\u7ED9\u7528\u6237\u7684\u60C5\u51B5
 - grok \u5185\u7F6E\u89C4\u5219\u5217\u8868 https://help.aliyun.com/zh/sls/user-guide/grok-patterns
 - \u5185\u7F6E\u654F\u611F\u8BCD\u5E93\u6570\u636E\u6765\u6E90 https://github.com/houbb/sensitive-word/tree/master/src/main/resources
 
`},d=function(){return s},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:3,slug:"\u5904\u7406\u6570\u636E\u8303\u56F4",text:"\u5904\u7406\u6570\u636E\u8303\u56F4"},{depth:3,slug:"\u654F\u611F\u8BCD\u62E6\u622A",text:"\u654F\u611F\u8BCD\u62E6\u622A"},{depth:3,slug:"\u654F\u611F\u8BCD\u66FF\u6362",text:"\u654F\u611F\u8BCD\u66FF\u6362"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:2,slug:"\u654F\u611F\u8BCD\u66FF\u6362\u6837\u4F8B",text:"\u654F\u611F\u8BCD\u66FF\u6362\u6837\u4F8B"},{depth:3,slug:"\u7528\u6237\u8BF7\u6C42\u5185\u5BB9",text:"\u7528\u6237\u8BF7\u6C42\u5185\u5BB9"},{depth:3,slug:"\u5904\u7406\u540E\u8BF7\u6C42\u5927\u6A21\u578B\u5185\u5BB9",text:"\u5904\u7406\u540E\u8BF7\u6C42\u5927\u6A21\u578B\u5185\u5BB9"},{depth:3,slug:"\u5927\u6A21\u578B\u8FD4\u56DE\u5185\u5BB9",text:"\u5927\u6A21\u578B\u8FD4\u56DE\u5185\u5BB9"},{depth:3,slug:"\u5904\u7406\u540E\u8FD4\u56DE\u7528\u6237\u5185\u5BB9",text:"\u5904\u7406\u540E\u8FD4\u56DE\u7528\u6237\u5185\u5BB9"},{depth:2,slug:"\u76F8\u5173\u8BF4\u660E",text:"\u76F8\u5173\u8BF4\u660E"}]},e=c((F,x,g)=>{const{layout:m,...p}=n;return p.file=a,p.url=t,r`${y()}${E(s)}`})});export{e as Content,h as __tla,d as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,i as rawContent,t as url};
