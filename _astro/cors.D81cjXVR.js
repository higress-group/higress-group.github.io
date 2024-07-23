import{c,__tla as o}from"./astro-component.DeDyO-JF.js";import{r as E,m as v,u as r,__tla as y}from"./constant.BHGk4wmw.js";import{__tla as h}from"./astro/assets-service.B3vdYoe2.js";let a,i,e,n,p,d,t,x=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">cors</code> \u63D2\u4EF6\u53EF\u4EE5\u4E3A\u670D\u52A1\u7AEF\u542F\u7528 CORS\uFF08Cross-Origin Resource Sharing\uFF0C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u7684\u8FD4\u56DE HTTP \u54CD\u5E94\u5934\u3002</p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>





























































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>allow_origins</td><td>array of string</td><td>\u9009\u586B</td><td>*</td><td>\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Origin\uFF0C\u683C\u5F0F\u4E3A scheme://host:port
\uFF0C\u793A\u4F8B\u5982 <a href="http://example.com:8081%E3%80%82%E5%BD%93" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://example.com:8081\u3002\u5F53</a> allow_credentials \u4E3A false \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u6240\u6709 Origin \u901A\u8FC7</td></tr><tr><td>allow_origin_patterns</td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Origin \u6A21\u5F0F\u5339\u914D\uFF0C \u7528 * \u5339\u914D\u57DF\u540D\u6216\u8005\u7AEF\u53E3\uFF0C <br>\u6BD4\u5982 http://<em>.example.com \u2014 \u5339\u914D\u57DF\u540D\uFF0C http://</em>.example.com:[8080,9090] \u2014 \u5339\u914D\u57DF\u540D\u548C\u6307\u5B9A\u7AEF\u53E3\uFF0C http://<em>.example.com:[</em>] \u2014 \u5339\u914D\u57DF\u540D\u548C\u6240\u6709\u7AEF\u53E3\u3002\u5355\u72EC * \u8868\u793A\u5339\u914D\u6240\u6709\u57DF\u540D\u548C\u7AEF\u53E3</td></tr><tr><td>allow_methods</td><td>array of string</td><td>\u9009\u586B</td><td>GET, PUT, POST, DELETE, PATCH, OPTIONS</td><td>\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Method\uFF0C\u6BD4\u5982\uFF1AGET\uFF0CPOST \u7B49\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u6240\u6709 Method\u3002</td></tr><tr><td>allow_headers</td><td>array of string</td><td>\u9009\u586B</td><td>DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With\uFF0C<br>If-Modified-Since,Cache-Control,Content-Type,Authorization</td><td>\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u65F6\u8BF7\u6C42\u65B9\u643A\u5E26\u54EA\u4E9B\u975E CORS \u89C4\u8303\u4EE5\u5916\u7684 Header\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u4EFB\u610F Header\u3002</td></tr><tr><td>expose_headers</td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u65F6\u54CD\u5E94\u65B9\u643A\u5E26\u54EA\u4E9B\u975E CORS \u89C4\u8303\u4EE5\u5916\u7684 Header\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u4EFB\u610F Header\u3002</td></tr><tr><td>allow_credentials</td><td>bool</td><td>\u9009\u586B</td><td>false</td><td>\u662F\u5426\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E\uFF08\u5982 Cookie \u7B49\uFF09\u3002\u6839\u636E CORS \u89C4\u8303\uFF0C\u5982\u679C\u8BBE\u7F6E\u8BE5\u9009\u9879\u4E3A true\uFF0C\u5728 allow_origins \u4E0D\u80FD\u4F7F\u7528 *\uFF0C \u66FF\u6362\u6210\u4F7F\u7528 allow_origin_patterns *</td></tr><tr><td>max_age</td><td>number</td><td>\u9009\u586B</td><td>86400\u79D2</td><td>\u6D4F\u89C8\u5668\u7F13\u5B58 CORS \u7ED3\u679C\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002<br>\u5728\u8FD9\u4E2A\u65F6\u95F4\u8303\u56F4\u5185\uFF0C\u6D4F\u89C8\u5668\u4F1A\u590D\u7528\u4E0A\u4E00\u6B21\u7684\u68C0\u67E5\u7ED3\u679C</td></tr></tbody></table>
<blockquote>
<p>\u6CE8\u610F</p>
<ul>
<li>allow_credentials \u662F\u4E00\u4E2A\u5F88\u654F\u611F\u7684\u9009\u9879\uFF0C\u8BF7\u8C28\u614E\u5F00\u542F\u3002\u5F00\u542F\u4E4B\u540E\uFF0Callow_credentials \u548C allow_origins \u4E3A * \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528\uFF0C\u540C\u65F6\u8BBE\u7F6E\u65F6\uFF0C allow_origins \u503C\u4E3A \u201D*\u201D \u751F\u6548\u3002</li>
<li>allow_origins \u548C allow_origin_patterns \u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\uFF0C \u5148\u68C0\u67E5 allow_origins \u662F\u5426\u5339\u914D\uFF0C\u7136\u540E\u518D\u68C0\u67E5 allow_origin_patterns \u662F\u5426\u5339\u914D\u3002</li>
<li>\u975E\u6CD5 CORS \u8BF7\u6C42\uFF0C HTTP \u72B6\u6001\u7801\u8FD4\u56DE\u662F 403\uFF0C \u8FD4\u56DE\u4F53\u5185\u5BB9\u4E3A \u201CInvalid CORS request\u201D\u3002</li>
</ul>
</blockquote>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE-\u4E0D\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E">\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE, \u4E0D\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origins:\x7F  - &#x27;*&#x27;\x7Fallow_methods:\x7F  - &#x27;*&#x27;\x7Fallow_headers:\x7F  - &#x27;*&#x27;\x7Fexpose_headers:\x7F  - &#x27;*&#x27;\x7Fallow_credentials: false\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<h3 id="\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E">\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE,\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origin_patterns</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origin_patterns:\x7F  - &#x27;*&#x27;\x7Fallow_methods:\x7F  - &#x27;*&#x27;\x7Fallow_headers:\x7F  - &#x27;*&#x27;\x7Fexpose_headers:\x7F  - &#x27;*&#x27;\x7Fallow_credentials: true\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<h3 id="\u5141\u8BB8\u7279\u5B9A\u5B50\u57DF\u7279\u5B9A\u65B9\u6CD5\u7279\u5B9A\u8BF7\u6C42\u5934\u8DE8\u57DF\u8BBF\u95EE\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E">\u5141\u8BB8\u7279\u5B9A\u5B50\u57DF\uFF0C\u7279\u5B9A\u65B9\u6CD5\uFF0C\u7279\u5B9A\u8BF7\u6C42\u5934\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origin_patterns</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.org:[8080,9090]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">PUT</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">DELETE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Token</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Authorization</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origin_patterns:\x7F  - http://*.example.com\x7F  - http://*.example.org:[8080,9090]\x7Fallow_methods:\x7F  - GET\x7F  - PUT\x7F  - POST\x7F  - DELETE\x7Fallow_headers:\x7F  - Token\x7F  - Content-Type\x7F  - Authorization\x7Fexpose_headers:\x7F  - &#x27;*&#x27;\x7Fallow_credentials: true\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<h2 id="\u6D4B\u8BD5">\u6D4B\u8BD5</h2>
<h3 id="\u6D4B\u8BD5\u914D\u7F6E">\u6D4B\u8BD5\u914D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.org</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/upstream-vhost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"httpbin.org"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTP</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin.example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasm-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfigDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_origins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://httpbin.example.net</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_origin_patterns</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.com:[*]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">http://*.example.org:[9090,8080]</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">PATCH</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Content-Type</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Token</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">Authorization</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Custom-Header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">X-Env-UTM</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3600</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">ingress-cors-httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/cors:1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Always</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: mcp-cors-httpbin\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    - domain: httpbin.org\x7F      name: httpbin\x7F      port: 80\x7F      type: dns\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: httpbin.dns\x7F    higress.io/upstream-vhost: &#x22;httpbin.org&#x22;\x7F    higress.io/backend-protocol: HTTP\x7F  name: ingress-cors-httpbin\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: httpbin.example.com\x7F      http:\x7F        paths:\x7F          - backend:\x7F              resource:\x7F                apiGroup: networking.higress.io\x7F                kind: McpBridge\x7F                name: mcp-cors-httpbin\x7F            path: /\x7F            pathType: Prefix\x7F---\x7FapiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: wasm-cors-httpbin\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfigDisable: true\x7F  matchRules:\x7F    - config:\x7F        allow_origins:\x7F          - http://httpbin.example.net\x7F        allow_origin_patterns:\x7F          - http://*.example.com:[*]\x7F          - http://*.example.org:[9090,8080]\x7F        allow_methods:\x7F          - GET\x7F          - POST\x7F          - PATCH\x7F        allow_headers:\x7F          - Content-Type\x7F          - Token\x7F          - Authorization\x7F        expose_headers:\x7F          - X-Custom-Header\x7F          - X-Env-UTM\x7F        allow_credentials: true\x7F        max_age: 3600\x7F      configDisable: false\x7F      ingress:\x7F        - ingress-cors-httpbin\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/cors:1.0.0\x7F  imagePullPolicy: Always"><div></div></button></div></figure></div>
<h3 id="\u8BF7\u6C42\u6D4B\u8BD5">\u8BF7\u6C42\u6D4B\u8BD5</h3>
<p><strong>\u7B80\u5355\u8BF7\u6C42</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> access-control-allow-origin: http://httpbin2.example.org:9090</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> access-control-expose-headers: X-Custom-Header,X-Env-UTM</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> access-control-allow-credentials: true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H  &#x22;Host: httpbin.example.com&#x22;  http://127.0.0.1/anything/get\\?foo\\=1\x7F\x7F< HTTP/1.1 200 OK\x7F> x-cors-version: 1.0.0\x7F> access-control-allow-origin: http://httpbin2.example.org:9090\x7F> access-control-expose-headers: X-Custom-Header,X-Env-UTM\x7F> access-control-allow-credentials: true"><div></div></button></div></figure></div>
<p><strong>\u9884\u68C0\u8BF7\u6C42</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: POST"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Headers: Content-Type, Token"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 200 OK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-origin: http://httpbin2.example.org:9090</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-methods: GET,POST,PATCH</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-headers: Content-Type,Token,Authorization</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-expose-headers: X-Custom-Header,X-Env-UTM</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-allow-credentials: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> access-control-max-age: 3600</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:41:28 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Closing connection 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H  &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: POST&#x22;  -H &#x22;Access-Control-Request-Headers: Content-Type, Token&#x22; http://127.0.0.1/anything/get\\?foo\\=1\x7F\x7F< HTTP/1.1 200 OK\x7F< x-cors-version: 1.0.0\x7F< access-control-allow-origin: http://httpbin2.example.org:9090\x7F< access-control-allow-methods: GET,POST,PATCH\x7F< access-control-allow-headers: Content-Type,Token,Authorization\x7F< access-control-expose-headers: X-Custom-Header,X-Env-UTM\x7F< access-control-allow-credentials: true\x7F< access-control-max-age: 3600\x7F< date: Tue, 23 May 2023 11:41:28 GMT\x7F< server: istio-envoy\x7F< content-length: 0\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7F* Closing connection 0"><div></div></button></div></figure></div>
<p><strong>\u975E\u6CD5 CORS Origin \u9884\u68C0\u8BF7\u6C42</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: GET"</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">HTTP/1.1</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">403</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 70</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: text/plain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:27:01 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Invalid</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CORS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">request</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org&#x22; -H  &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: GET&#x22;  http://127.0.0.1/anything/get\\?foo\\=1\x7F\x7F HTTP/1.1 403 Forbidden\x7F< content-length: 70\x7F< content-type: text/plain\x7F< x-cors-version: 1.0.0\x7F< date: Tue, 23 May 2023 11:27:01 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7FInvalid CORS request"><div></div></button></div></figure></div>
<p><strong>\u975E\u6CD5 CORS Method \u9884\u68C0\u8BF7\u6C42</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: DELETE"</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 49</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: text/plain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:28:51 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Invalid</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CORS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">request</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H  &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: DELETE&#x22;  http://127.0.0.1/anything/get\\?foo\\=1\x7F\x7F< HTTP/1.1 403 Forbidden\x7F< content-length: 49\x7F< content-type: text/plain\x7F< x-cors-version: 1.0.0\x7F< date: Tue, 23 May 2023 11:28:51 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7FInvalid CORS request"><div></div></button></div></figure></div>
<p><strong>\u975E\u6CD5 CORS Header \u9884\u68C0\u8BF7\u6C42</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">OPTIONS</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Origin: http://httpbin2.example.org:9090"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">"Host: httpbin.example.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Method: GET"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Access-Control-Request-Headers: TokenView"</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/anything/get</span><span style="--0:#79B8FF">\\?</span><span style="--0:#9ECBFF">foo</span><span style="--0:#79B8FF">\\=</span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-length: 52</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> content-type: text/plain</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> x-cors-version: 1.0.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> date: Tue, 23 May 2023 11:31:03 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span><span style="--0:#E1E4E8"> server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">&#x3C;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">*</span><span style="--0:#E1E4E8"> Connection </span><span style="--0:#99A0A6">#0 to host 127.0.0.1 left intact</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">Invalid</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">CORS</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">request</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -v -X OPTIONS -H &#x22;Origin: http://httpbin2.example.org:9090&#x22; -H  &#x22;Host: httpbin.example.com&#x22; -H &#x22;Access-Control-Request-Method: GET&#x22; -H &#x22;Access-Control-Request-Headers: TokenView&#x22;  http://127.0.0.1/anything/get\\?foo\\=1\x7F\x7F< HTTP/1.1 403 Forbidden\x7F< content-length: 52\x7F< content-type: text/plain\x7F< x-cors-version: 1.0.0\x7F< date: Tue, 23 May 2023 11:31:03 GMT\x7F< server: istio-envoy\x7F<\x7F* Connection #0 to host 127.0.0.1 left intact\x7FInvalid CORS request"><div></div></button></div></figure></div>
<h2 id="\u53C2\u8003\u6587\u6863">\u53C2\u8003\u6587\u6863</h2>
<ul>
<li><a href="https://www.ruanyifeng.com/blog/2016/04/cors.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.ruanyifeng.com/blog/2016/04/cors.html</a></li>
<li><a href="https://fetch.spec.whatwg.org/#http-cors-protocol" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://fetch.spec.whatwg.org/#http-cors-protocol</a></li>
</ul>`,n={title:"CORS",keywords:["higress","cors"],description:"CORS \u63D2\u4EF6\u53EF\u4EE5\u4E3A\u670D\u52A1\u7AEF\u542F\u7528 CORS\uFF08Cross-Origin Resource Sharing\uFF0C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u7684\u8FD4\u56DE HTTP \u54CD\u5E94\u5934\u3002"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/cors.md",t=void 0,d=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`cors\` \u63D2\u4EF6\u53EF\u4EE5\u4E3A\u670D\u52A1\u7AEF\u542F\u7528 CORS\uFF08Cross-Origin Resource Sharing\uFF0C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u7684\u8FD4\u56DE HTTP \u54CD\u5E94\u5934\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0                    | \u6570\u636E\u7C7B\u578B         | \u586B\u5199\u8981\u6C42  | \u9ED8\u8BA4\u503C                                                                                                                       | \u63CF\u8FF0                                                                                                                                                                           |
|-----------------------|-----------------|-------|---------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allow_origins         | array of string | \u9009\u586B    | *                                                                                                                         | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Origin\uFF0C\u683C\u5F0F\u4E3A scheme://host:port\uFF0C\u793A\u4F8B\u5982 http://example.com:8081\u3002\u5F53 allow_credentials \u4E3A false \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u6240\u6709 Origin \u901A\u8FC7                                                     |
| allow_origin_patterns | array of string | \u9009\u586B    | -                                                                                                                         | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Origin \u6A21\u5F0F\u5339\u914D\uFF0C \u7528 * \u5339\u914D\u57DF\u540D\u6216\u8005\u7AEF\u53E3\uFF0C <br/>\u6BD4\u5982 http://*.example.com -- \u5339\u914D\u57DF\u540D\uFF0C http://*.example.com:[8080,9090] -- \u5339\u914D\u57DF\u540D\u548C\u6307\u5B9A\u7AEF\u53E3\uFF0C http://*.example.com:[*] -- \u5339\u914D\u57DF\u540D\u548C\u6240\u6709\u7AEF\u53E3\u3002\u5355\u72EC * \u8868\u793A\u5339\u914D\u6240\u6709\u57DF\u540D\u548C\u7AEF\u53E3 |
| allow_methods         | array of string | \u9009\u586B    | GET, PUT, POST, DELETE, PATCH, OPTIONS                                                                                    | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Method\uFF0C\u6BD4\u5982\uFF1AGET\uFF0CPOST \u7B49\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u6240\u6709 Method\u3002                                                                                                                          |
| allow_headers         | array of string | \u9009\u586B    | DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With\uFF0C<br/>If-Modified-Since,Cache-Control,Content-Type,Authorization | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u65F6\u8BF7\u6C42\u65B9\u643A\u5E26\u54EA\u4E9B\u975E CORS \u89C4\u8303\u4EE5\u5916\u7684 Header\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u4EFB\u610F Header\u3002                                                                                                                     |
| expose_headers        | array of string | \u9009\u586B    | -                                                                                                                         | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u65F6\u54CD\u5E94\u65B9\u643A\u5E26\u54EA\u4E9B\u975E CORS \u89C4\u8303\u4EE5\u5916\u7684 Header\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u4EFB\u610F Header\u3002                                                                                                                     |
| allow_credentials     | bool            | \u9009\u586B    | false                                                                                                                     | \u662F\u5426\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E\uFF08\u5982 Cookie \u7B49\uFF09\u3002\u6839\u636E CORS \u89C4\u8303\uFF0C\u5982\u679C\u8BBE\u7F6E\u8BE5\u9009\u9879\u4E3A true\uFF0C\u5728 allow_origins \u4E0D\u80FD\u4F7F\u7528 *\uFF0C \u66FF\u6362\u6210\u4F7F\u7528 allow_origin_patterns *                                                                  |
| max_age               | number          | \u9009\u586B    | 86400\u79D2                                                                                                                     | \u6D4F\u89C8\u5668\u7F13\u5B58 CORS \u7ED3\u679C\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002<br/>\u5728\u8FD9\u4E2A\u65F6\u95F4\u8303\u56F4\u5185\uFF0C\u6D4F\u89C8\u5668\u4F1A\u590D\u7528\u4E0A\u4E00\u6B21\u7684\u68C0\u67E5\u7ED3\u679C                                                                                                                         |

> \u6CE8\u610F
> * allow_credentials \u662F\u4E00\u4E2A\u5F88\u654F\u611F\u7684\u9009\u9879\uFF0C\u8BF7\u8C28\u614E\u5F00\u542F\u3002\u5F00\u542F\u4E4B\u540E\uFF0Callow_credentials \u548C allow_origins \u4E3A * \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528\uFF0C\u540C\u65F6\u8BBE\u7F6E\u65F6\uFF0C allow_origins \u503C\u4E3A "*" \u751F\u6548\u3002
> * allow_origins \u548C allow_origin_patterns \u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\uFF0C \u5148\u68C0\u67E5 allow_origins \u662F\u5426\u5339\u914D\uFF0C\u7136\u540E\u518D\u68C0\u67E5 allow_origin_patterns \u662F\u5426\u5339\u914D\u3002
> * \u975E\u6CD5 CORS \u8BF7\u6C42\uFF0C HTTP \u72B6\u6001\u7801\u8FD4\u56DE\u662F 403\uFF0C \u8FD4\u56DE\u4F53\u5185\u5BB9\u4E3A "Invalid CORS request"\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE, \u4E0D\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E

\`\`\`yaml
allow_origins:
  - '*'
allow_methods:
  - '*'  
allow_headers:
  - '*'
expose_headers:
  - '*'
allow_credentials: false
max_age: 7200
\`\`\`

### \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE,\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E

\`\`\`yaml
allow_origin_patterns:
  - '*'
allow_methods:
  - '*'  
allow_headers:
  - '*'
expose_headers:
  - '*'
allow_credentials: true
max_age: 7200
\`\`\`

### \u5141\u8BB8\u7279\u5B9A\u5B50\u57DF\uFF0C\u7279\u5B9A\u65B9\u6CD5\uFF0C\u7279\u5B9A\u8BF7\u6C42\u5934\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E

\`\`\`yaml
allow_origin_patterns:
  - http://*.example.com
  - http://*.example.org:[8080,9090]
allow_methods:
  - GET
  - PUT
  - POST
  - DELETE
allow_headers:
  - Token
  - Content-Type
  - Authorization
expose_headers:
  - '*'
allow_credentials: true
max_age: 7200
\`\`\`

## \u6D4B\u8BD5

### \u6D4B\u8BD5\u914D\u7F6E

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: mcp-cors-httpbin
  namespace: higress-system
spec:
  registries:
    - domain: httpbin.org
      name: httpbin
      port: 80
      type: dns
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: httpbin.dns
    higress.io/upstream-vhost: "httpbin.org"
    higress.io/backend-protocol: HTTP
  name: ingress-cors-httpbin
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
    - host: httpbin.example.com
      http:
        paths:
          - backend:
              resource:
                apiGroup: networking.higress.io
                kind: McpBridge
                name: mcp-cors-httpbin
            path: /
            pathType: Prefix
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: wasm-cors-httpbin
  namespace: higress-system
spec:
  defaultConfigDisable: true
  matchRules:
    - config:
        allow_origins:
          - http://httpbin.example.net
        allow_origin_patterns:
          - http://*.example.com:[*]
          - http://*.example.org:[9090,8080]
        allow_methods:
          - GET
          - POST
          - PATCH
        allow_headers:
          - Content-Type
          - Token
          - Authorization
        expose_headers:
          - X-Custom-Header
          - X-Env-UTM
        allow_credentials: true
        max_age: 3600
      configDisable: false
      ingress:
        - ingress-cors-httpbin
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/cors:1.0.0
  imagePullPolicy: Always
\`\`\`

### \u8BF7\u6C42\u6D4B\u8BD5

**\u7B80\u5355\u8BF7\u6C42**

\`\`\`shell
curl -v -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com"  http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 200 OK
> x-cors-version: 1.0.0
> access-control-allow-origin: http://httpbin2.example.org:9090
> access-control-expose-headers: X-Custom-Header,X-Env-UTM
> access-control-allow-credentials: true
\`\`\`

**\u9884\u68C0\u8BF7\u6C42**

\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: POST"  -H "Access-Control-Request-Headers: Content-Type, Token" http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 200 OK
< x-cors-version: 1.0.0
< access-control-allow-origin: http://httpbin2.example.org:9090
< access-control-allow-methods: GET,POST,PATCH
< access-control-allow-headers: Content-Type,Token,Authorization
< access-control-expose-headers: X-Custom-Header,X-Env-UTM
< access-control-allow-credentials: true
< access-control-max-age: 3600
< date: Tue, 23 May 2023 11:41:28 GMT
< server: istio-envoy
< content-length: 0
<
* Connection #0 to host 127.0.0.1 left intact
* Closing connection 0
\`\`\`

**\u975E\u6CD5 CORS Origin \u9884\u68C0\u8BF7\u6C42**

\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: GET"  http://127.0.0.1/anything/get\\?foo\\=1

 HTTP/1.1 403 Forbidden
< content-length: 70
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:27:01 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

**\u975E\u6CD5 CORS Method \u9884\u68C0\u8BF7\u6C42**

\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: DELETE"  http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 403 Forbidden
< content-length: 49
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:28:51 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

**\u975E\u6CD5 CORS Header \u9884\u68C0\u8BF7\u6C42**

\`\`\`shell
 curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: TokenView"  http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 403 Forbidden
< content-length: 52
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:31:03 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

## \u53C2\u8003\u6587\u6863
- https://www.ruanyifeng.com/blog/2016/04/cors.html
- https://fetch.spec.whatwg.org/#http-cors-protocol
`},i=function(){return s},p=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE-\u4E0D\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E",text:"\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE, \u4E0D\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E"},{depth:3,slug:"\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E",text:"\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE,\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E"},{depth:3,slug:"\u5141\u8BB8\u7279\u5B9A\u5B50\u57DF\u7279\u5B9A\u65B9\u6CD5\u7279\u5B9A\u8BF7\u6C42\u5934\u8DE8\u57DF\u8BBF\u95EE\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E",text:"\u5141\u8BB8\u7279\u5B9A\u5B50\u57DF\uFF0C\u7279\u5B9A\u65B9\u6CD5\uFF0C\u7279\u5B9A\u8BF7\u6C42\u5934\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E"},{depth:2,slug:"\u6D4B\u8BD5",text:"\u6D4B\u8BD5"},{depth:3,slug:"\u6D4B\u8BD5\u914D\u7F6E",text:"\u6D4B\u8BD5\u914D\u7F6E"},{depth:3,slug:"\u8BF7\u6C42\u6D4B\u8BD5",text:"\u8BF7\u6C42\u6D4B\u8BD5"},{depth:2,slug:"\u53C2\u8003\u6587\u6863",text:"\u53C2\u8003\u6587\u6863"}]},a=c((F,g,f)=>{const{layout:m,...l}=n;return l.file=e,l.url=t,E`${v()}${r(s)}`})});export{a as Content,x as __tla,i as compiledContent,a as default,e as file,n as frontmatter,p as getHeadings,d as rawContent,t as url};
