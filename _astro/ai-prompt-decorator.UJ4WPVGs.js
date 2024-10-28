import{c,__tla as o}from"./astro-component.DIa0fJKh.js";import{r as v,m as r,u as y,__tla as F}from"./constant.9AuC1NO1.js";import{__tla as E}from"./astro/assets-service.tyfV9CK3.js";let a,d,e,n,i,l,t,x=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return F}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>AI\u63D0\u793A\u8BCD\u63D2\u4EF6\uFF0C\u652F\u6301\u5728LLM\u7684\u8BF7\u6C42\u524D\u540E\u63D2\u5165prompt\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">450</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">prepend</code></td><td>array of message object</td><td>optional</td><td>-</td><td>\u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5</td></tr><tr><td><code dir="auto">append</code></td><td>array of message object</td><td>optional</td><td>-</td><td>\u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5</td></tr></tbody></table>
<p>message object \u914D\u7F6E\u8BF4\u660E\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">role</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u89D2\u8272</td></tr><tr><td><code dir="auto">content</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u6D88\u606F</td></tr></tbody></table>
<h2 id="\u793A\u4F8B">\u793A\u4F8B</h2>
<p>\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">prepend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">append</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="prepend:\x7F- role: system\x7F  content: &#x22;\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898&#x22;\x7Fappend:\x7F- role: user\x7F  content: &#x22;\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE&#x22;"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<h2 id="\u57FA\u4E8Egeo-ip\u63D2\u4EF6\u7684\u80FD\u529B\u6269\u5C55ai\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u643A\u5E26\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F">\u57FA\u4E8Egeo-ip\u63D2\u4EF6\u7684\u80FD\u529B\uFF0C\u6269\u5C55AI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u643A\u5E26\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F</h2>
<p>\u5982\u679C\u9700\u8981\u5728LLM\u7684\u8BF7\u6C42\u524D\u540E\u52A0\u5165\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u786E\u4FDD\u540C\u65F6\u5F00\u542Fgeo-ip\u63D2\u4EF6\u548CAI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u3002\u5E76\u4E14\u5728\u76F8\u540C\u7684\u8BF7\u6C42\u5904\u7406\u9636\u6BB5\u91CC\uFF0Cgeo-ip\u63D2\u4EF6\u7684\u4F18\u5148\u7EA7\u5FC5\u987B\u9AD8\u4E8EAI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u3002\u9996\u5148geo-ip\u63D2\u4EF6\u4F1A\u6839\u636E\u7528\u6237ip\u8BA1\u7B97\u51FA\u7528\u6237\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u7136\u540E\u901A\u8FC7\u8BF7\u6C42\u5C5E\u6027\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002\u6BD4\u5982\u5728\u9ED8\u8BA4\u9636\u6BB5\u91CC\uFF0Cgeo-ip\u63D2\u4EF6\u7684priority\u914D\u7F6E1000\uFF0Cai-prompt-decorator\u63D2\u4EF6\u7684priority\u914D\u7F6E500\u3002</p>
<p>geo-ip\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ipProtocal</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ipv4"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ipProtocal: &#x22;ipv4&#x22;"><div></div></button></div></figure></div>
<p>AI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u7684\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">prepend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">append</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="prepend:\x7F- role: system\x7F  content: &#x22;\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}&#x22;\x7Fappend:\x7F- role: user\x7F  content: &#x22;\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE&#x22;"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"x-forwarded-for: 87.254.207.100,4.5.6.7"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-H &#x22;x-forwarded-for: 87.254.207.100,4.5.6.7&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<p>\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"x-forwarded-for: 87.254.207.100,4.5.6.7"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\u4E2D\u56FD\uFF0C\u7701\u4EFD\uFF1A\u5317\u4EAC, \u57CE\u5E02\uFF1A\u5317\u4EAC"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-H &#x22;x-forwarded-for: 87.254.207.100,4.5.6.7&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\u4E2D\u56FD\uFF0C\u7701\u4EFD\uFF1A\u5317\u4EAC, \u57CE\u5E02\uFF1A\u5317\u4EAC&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>`,n={title:"AI \u63D0\u793A\u8BCD",keywords:["AI\u7F51\u5173","AI\u63D0\u793A\u8BCD"],description:"AI \u63D0\u793A\u8BCD\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-prompt-decorator.md",t=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E

AI\u63D0\u793A\u8BCD\u63D2\u4EF6\uFF0C\u652F\u6301\u5728LLM\u7684\u8BF7\u6C42\u524D\u540E\u63D2\u5165prompt\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`450\`

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`prepend\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5 |
| \`append\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

## \u793A\u4F8B

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
prepend:
- role: system
  content: "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"
append:
- role: user
  content: "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"
    },
    {
      "role": "user",
      "content": "\u4F60\u662F\u8C01\uFF1F"
    },
    {
      "role": "user",
      "content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
    }
  ]
}
\`\`\`


## \u57FA\u4E8Egeo-ip\u63D2\u4EF6\u7684\u80FD\u529B\uFF0C\u6269\u5C55AI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u643A\u5E26\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F
\u5982\u679C\u9700\u8981\u5728LLM\u7684\u8BF7\u6C42\u524D\u540E\u52A0\u5165\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u786E\u4FDD\u540C\u65F6\u5F00\u542Fgeo-ip\u63D2\u4EF6\u548CAI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u3002\u5E76\u4E14\u5728\u76F8\u540C\u7684\u8BF7\u6C42\u5904\u7406\u9636\u6BB5\u91CC\uFF0Cgeo-ip\u63D2\u4EF6\u7684\u4F18\u5148\u7EA7\u5FC5\u987B\u9AD8\u4E8EAI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u3002\u9996\u5148geo-ip\u63D2\u4EF6\u4F1A\u6839\u636E\u7528\u6237ip\u8BA1\u7B97\u51FA\u7528\u6237\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u7136\u540E\u901A\u8FC7\u8BF7\u6C42\u5C5E\u6027\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002\u6BD4\u5982\u5728\u9ED8\u8BA4\u9636\u6BB5\u91CC\uFF0Cgeo-ip\u63D2\u4EF6\u7684priority\u914D\u7F6E1000\uFF0Cai-prompt-decorator\u63D2\u4EF6\u7684priority\u914D\u7F6E500\u3002

geo-ip\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A
\`\`\`yaml
ipProtocal: "ipv4"
\`\`\`




AI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u7684\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A
\`\`\`yaml
prepend:
- role: system
  content: "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}"
append:
- role: user
  content: "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F"
    }
  ]
}'
\`\`\`

\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\u4E2D\u56FD\uFF0C\u7701\u4EFD\uFF1A\u5317\u4EAC, \u57CE\u5E02\uFF1A\u5317\u4EAC"
    },
    {
      "role": "user",
      "content": "\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F"
    },
    {
      "role": "user",
      "content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
    }
  ]
}'
\`\`\`


`},d=function(){return s},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u793A\u4F8B",text:"\u793A\u4F8B"},{depth:2,slug:"\u57FA\u4E8Egeo-ip\u63D2\u4EF6\u7684\u80FD\u529B\u6269\u5C55ai\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u643A\u5E26\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F",text:"\u57FA\u4E8Egeo-ip\u63D2\u4EF6\u7684\u80FD\u529B\uFF0C\u6269\u5C55AI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u643A\u5E26\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F"}]},a=c((C,f,B)=>{const{layout:u,...p}=n;return p.file=e,p.url=t,v`${r()}${y(s)}`})});export{a as Content,x as __tla,d as compiledContent,a as default,e as file,n as frontmatter,i as getHeadings,l as rawContent,t as url};
