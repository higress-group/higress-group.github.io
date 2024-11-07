import{c,__tla as o}from"./astro-component.DIa0fJKh.js";import{r,m as y,u as E,__tla as v}from"./constant.Bo_tcuUS.js";import{__tla as x}from"./astro/assets-service.tyfV9CK3.js";let e,p,a,n,d,l,t,F=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">jwt-auth</code>\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8EJWT(JSON Web Tokens)\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECEHTTP\u8BF7\u6C42\u7684URL\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie\u5B57\u6BB5\u89E3\u6790JWT\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5Token\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002</p>
<p>\u672C\u63D2\u4EF6\u548C<code dir="auto">\u5B89\u5168\u80FD\u529B->\u8BA4\u8BC1\u9274\u6743</code>\u4E2DJWT\u8BA4\u8BC1\u7684\u533A\u522B\u662F\uFF0C\u989D\u5916\u63D0\u4F9B\u4E86\u8C03\u7528\u65B9\u8EAB\u4EFD\u8BC6\u522B\u7684\u80FD\u529B\uFF0C\u652F\u6301\u5BF9\u4E0D\u540C\u8C03\u7528\u65B9\u914D\u7F6E\u4E0D\u540C\u7684JWT\u51ED\u8BC1\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">340</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<ul>
<li>\u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728</li>
<li>\u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684header\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A<code dir="auto">X-Mse-Consumer</code>\u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002</li>
</ul>
<h3 id="\u8BA4\u8BC1\u914D\u7F6E">\u8BA4\u8BC1\u914D\u7F6E</h3>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>\u9009\u586B\uFF08<strong>\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E</strong>\uFF09</td><td>-</td><td>\u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF0C\u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09\u3002</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1</td></tr></tbody></table>
<p><code dir="auto">consumers</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>











































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u8BE5consumer\u7684\u540D\u79F0</td></tr><tr><td><code dir="auto">jwks</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td><a href="https://www.rfc-editor.org/rfc/rfc7517" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.rfc-editor.org/rfc/rfc7517</a> \u6307\u5B9A\u7684json\u683C\u5F0F\u5B57\u7B26\u4E32\uFF0C\u662F\u7531\u9A8C\u8BC1JWT\u4E2D\u7B7E\u540D\u7684\u516C\u94A5\uFF08\u6216\u5BF9\u79F0\u5BC6\u94A5\uFF09\u7EC4\u6210\u7684Json Web Key Set</td></tr><tr><td><code dir="auto">issuer</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>JWT\u7684\u7B7E\u53D1\u8005\uFF0C\u9700\u8981\u548Cpayload\u4E2D\u7684iss\u5B57\u6BB5\u4FDD\u6301\u4E00\u81F4</td></tr><tr><td><code dir="auto">claims_to_headers</code></td><td>array of object</td><td>\u9009\u586B</td><td>-</td><td>\u62BD\u53D6JWT\u7684payload\u4E2D\u6307\u5B9A\u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u5230\u6307\u5B9A\u7684\u8BF7\u6C42\u5934\u4E2D\u8F6C\u53D1\u7ED9\u540E\u7AEF</td></tr><tr><td><code dir="auto">from_headers</code></td><td>array of object</td><td>\u9009\u586B</td><td>{\u201Cname\u201D:\u201CAuthorization\u201D,\u201Cvalue_prefix\u201D:\u201CBearer \u201C}</td><td>\u4ECE\u6307\u5B9A\u7684\u8BF7\u6C42\u5934\u4E2D\u62BD\u53D6JWT</td></tr><tr><td><code dir="auto">from_params</code></td><td>array of string</td><td>\u9009\u586B</td><td>access_token</td><td>\u4ECE\u6307\u5B9A\u7684URL\u53C2\u6570\u4E2D\u62BD\u53D6JWT</td></tr><tr><td><code dir="auto">from_cookies</code></td><td>array of string</td><td>\u9009\u586B</td><td>-</td><td>\u4ECE\u6307\u5B9A\u7684cookie\u4E2D\u62BD\u53D6JWT</td></tr><tr><td><code dir="auto">clock_skew_seconds</code></td><td>number</td><td>\u9009\u586B</td><td>60</td><td>\u6821\u9A8CJWT\u7684exp\u548Ciat\u5B57\u6BB5\u65F6\u5141\u8BB8\u7684\u65F6\u949F\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D\u4E3A\u79D2</td></tr><tr><td><code dir="auto">keep_token</code></td><td>bool</td><td>\u9009\u586B</td><td>ture</td><td>\u8F6C\u53D1\u7ED9\u540E\u7AEF\u65F6\u662F\u5426\u4FDD\u7559JWT</td></tr></tbody></table>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<ul>
<li>\u53EA\u6709\u5F53<code dir="auto">from_headers</code>,<code dir="auto">from_params</code>,<code dir="auto">from_cookies</code>\u5747\u672A\u914D\u7F6E\u65F6\uFF0C\u624D\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C</li>
</ul>
<p><code dir="auto">from_headers</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u62BD\u53D6JWT\u7684\u8BF7\u6C42header</td></tr><tr><td><code dir="auto">value_prefix</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5BF9\u8BF7\u6C42header\u7684value\u53BB\u9664\u6B64\u524D\u7F00\uFF0C\u5269\u4F59\u90E8\u5206\u4F5C\u4E3AJWT</td></tr></tbody></table>
<p><code dir="auto">claims_to_headers</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">claim</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>JWT payload\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\uFF0C\u8981\u6C42\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u65E0\u7B26\u53F7\u6574\u6570\u7C7B\u578B</td></tr><tr><td><code dir="auto">header</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u4ECEpayload\u53D6\u51FA\u5B57\u6BB5\u7684\u503C\u8BBE\u7F6E\u5230\u8FD9\u4E2A\u8BF7\u6C42\u5934\u4E2D\uFF0C\u8F6C\u53D1\u7ED9\u540E\u7AEF</td></tr><tr><td><code dir="auto">override</code></td><td>bool</td><td>\u9009\u586B</td><td>true</td><td>true\u65F6\uFF0C\u5B58\u5728\u540C\u540D\u8BF7\u6C42\u5934\u4F1A\u8FDB\u884C\u8986\u76D6\uFF1Bfalse\u65F6\uFF0C\u8FFD\u52A0\u540C\u540D\u8BF7\u6C42\u5934</td></tr></tbody></table>
<h3 id="\u9274\u6743\u914D\u7F6E\u975E\u5FC5\u9700">\u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09</h3>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>\u9009\u586B(<strong>\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E</strong>)</td><td>-</td><td>\u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743">\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743</h3>
<p>\u6CE8\u610F\u5982\u679C\u4E00\u4E2AJWT\u80FD\u5339\u914D\u591A\u4E2A<code dir="auto">jwks</code>\uFF0C\u5219\u6309\u7167\u914D\u7F6E\u987A\u5E8F\u547D\u4E2D\u7B2C\u4E00\u4E2A\u5339\u914D\u7684<code dir="auto">consumer</code></p>
<p>\u5728\u5B9E\u4F8B\u7EA7\u522B\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcd</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "oct",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "HS256"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abc</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "RSA",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"e": "AQAB",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"use": "sig",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "RS256",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- name: consumer1\x7F  issuer: abcd\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;oct&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;k&#x22;: &#x22;hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew&#x22;,\x7F          &#x22;alg&#x22;: &#x22;HS256&#x22;\x7F        }\x7F      ]\x7F    }\x7F- name: consumer2\x7F  issuer: abc\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;RSA&#x22;,\x7F          &#x22;e&#x22;: &#x22;AQAB&#x22;,\x7F          &#x22;use&#x22;: &#x22;sig&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;alg&#x22;: &#x22;RS256&#x22;,\x7F          &#x22;n&#x22;: &#x22;i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw&#x22;\x7F        }\x7F      ]\x7F    }"><div></div></button></div></figure></div>
<p>\u5BF9 route-a \u548C route-b \u8FD9\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>\u5BF9 *.example.com \u548C test.com \u5728\u8FD9\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u914D\u7F6E:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p><strong>\u8BF4\u660E\uFF1A</strong></p>
<p>\u6B64\u4F8B\u6307\u5B9A\u7684route-a\u548Croute-b\u5373\u5728\u521B\u5EFA\u7F51\u5173\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer1\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002</p>
<p>\u6B64\u4F8B\u6307\u5B9A\u7684*.example.com\u548Ctest.com\u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer2\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u88AB\u5141\u8BB8\u8BBF\u95EE\u3002</p>
<p>\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\uFF1A</p>
<p>\u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u4F1A\u5339\u914D\u5230route-a\u8FD9\u6761\u8DEF\u7531</p>
<p><strong>\u5C06 JWT \u8BBE\u7F6E\u5728 url \u53C2\u6570\u4E2D</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">'http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  &#x27;http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<p><strong>\u5C06 JWT \u8BBE\u7F6E\u5728 http \u8BF7\u6C42\u5934\u4E2D</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test -H &#x27;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<p>\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684header\u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A<code dir="auto">X-Mse-Consumer</code>\u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A<code dir="auto">consumer1</code>\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0</p>
<p>\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\uFF1A</p>
<p><strong>\u8BF7\u6C42\u672A\u63D0\u4F9BJWT\uFF0C\u8FD4\u56DE401</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://xxx.hello.com/test</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test"><div></div></button></div></figure></div>
<p><strong>\u6839\u636E\u8BF7\u6C42\u63D0\u4F9B\u7684JWT\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE403</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># consumer1\u4E0D\u5728*.example.com\u7684allow\u5217\u8868\u91CC</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">'http://xxx.example.com/test'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  &#x27;http://xxx.example.com/test&#x27; -H &#x27;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4&#x27;"><div></div></button></div></figure></div>
<h4 id="\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F">\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F</h4>
<p>\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F JWT Auth \u8BA4\u8BC1\uFF0C\u6240\u6709\u8BF7\u6C42\u5747\u9700\u8981\u7ECF\u8FC7\u8BA4\u8BC1\u540E\u624D\u80FD\u8BBF\u95EE\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abcd</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "oct",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "HS256"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">issuer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">abc</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">jwks</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kty": "RSA",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"e": "AQAB",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"use": "sig",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"kid": "123",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"alg": "RS256",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">"n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- name: consumer1\x7F  issuer: abcd\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;oct&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;k&#x22;: &#x22;hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew&#x22;,\x7F          &#x22;alg&#x22;: &#x22;HS256&#x22;\x7F        }\x7F      ]\x7F    }\x7F- name: consumer2\x7F  issuer: abc\x7F  jwks: |\x7F    {\x7F      &#x22;keys&#x22;: [\x7F        {\x7F          &#x22;kty&#x22;: &#x22;RSA&#x22;,\x7F          &#x22;e&#x22;: &#x22;AQAB&#x22;,\x7F          &#x22;use&#x22;: &#x22;sig&#x22;,\x7F          &#x22;kid&#x22;: &#x22;123&#x22;,\x7F          &#x22;alg&#x22;: &#x22;RS256&#x22;,\x7F          &#x22;n&#x22;: &#x22;i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw&#x22;\x7F        }\x7F      ]\x7F    }"><div></div></button></div></figure></div>
<h2 id="\u5E38\u89C1\u9519\u8BEF\u7801\u8BF4\u660E">\u5E38\u89C1\u9519\u8BEF\u7801\u8BF4\u660E</h2>






























<table><thead><tr><th>HTTP \u72B6\u6001\u7801</th><th>\u51FA\u9519\u4FE1\u606F</th><th>\u539F\u56E0\u8BF4\u660E</th></tr></thead><tbody><tr><td>401</td><td>Jwt missing</td><td>\u8BF7\u6C42\u5934\u672A\u63D0\u4F9BJWT</td></tr><tr><td>401</td><td>Jwt expired</td><td>JWT\u5DF2\u7ECF\u8FC7\u671F</td></tr><tr><td>401</td><td>Jwt verification fails</td><td>JWT payload\u6821\u9A8C\u5931\u8D25\uFF0C\u5982iss\u4E0D\u5339\u914D</td></tr><tr><td>403</td><td>Access Denied</td><td>\u65E0\u6743\u9650\u8BBF\u95EE\u5F53\u524D\u8DEF\u7531</td></tr></tbody></table>
<h2 id="\u8BE6\u7EC6\u8BF4\u660E">\u8BE6\u7EC6\u8BF4\u660E</h2>
<h3 id="1\u57FA\u4E8Etoken\u7684\u8BA4\u8BC1">1\u3001\u57FA\u4E8Etoken\u7684\u8BA4\u8BC1</h3>
<h4 id="11-\u7B80\u4ECB">1.1 \u7B80\u4ECB</h4>
<p>\u5F88\u591A\u5BF9\u5916\u5F00\u653E\u7684API\u9700\u8981\u8BC6\u522B\u8BF7\u6C42\u8005\u7684\u8EAB\u4EFD\uFF0C\u5E76\u636E\u6B64\u5224\u65AD\u6240\u8BF7\u6C42\u7684\u8D44\u6E90\u662F\u5426\u53EF\u4EE5\u8FD4\u56DE\u7ED9\u8BF7\u6C42\u8005\u3002token\u5C31\u662F\u4E00\u79CD\u7528\u4E8E\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u673A\u5236\uFF0C\u57FA\u4E8E\u8FD9\u79CD\u673A\u5236\uFF0C\u5E94\u7528\u4E0D\u9700\u8981\u5728\u670D\u52A1\u7AEF\u4FDD\u7559\u7528\u6237\u7684\u8BA4\u8BC1\u4FE1\u606F\u6216\u8005\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u53EF\u5B9E\u73B0\u65E0\u72B6\u6001\u3001\u5206\u5E03\u5F0F\u7684Web\u5E94\u7528\u6388\u6743\uFF0C\u4E3A\u5E94\u7528\u7684\u6269\u5C55\u63D0\u4F9B\u4E86\u4FBF\u5229\u3002</p>
<h4 id="12-\u6D41\u7A0B\u63CF\u8FF0">1.2 \u6D41\u7A0B\u63CF\u8FF0</h4>
<p><img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135822.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u4E0A\u56FE\u662F\u7F51\u5173\u5229\u7528JWT\u5B9E\u73B0\u8BA4\u8BC1\u7684\u6574\u4E2A\u4E1A\u52A1\u6D41\u7A0B\u65F6\u5E8F\u56FE\uFF0C\u4E0B\u9762\u6211\u4EEC\u7528\u6587\u5B57\u6765\u8BE6\u7EC6\u63CF\u8FF0\u56FE\u4E2D\u6807\u6CE8\u7684\u6B65\u9AA4\uFF1A</p>
<ol>
<li>
<p>\u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u8D77\u8BA4\u8BC1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u4E00\u822C\u4F1A\u643A\u5E26\u7EC8\u7AEF\u7528\u6237\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1B</p>
</li>
<li>
<p>\u7F51\u5173\u5C06\u8BF7\u6C42\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B</p>
</li>
<li>
<p>\u540E\u7AEF\u670D\u52A1\u8BFB\u53D6\u8BF7\u6C42\u4E2D\u7684\u9A8C\u8BC1\u4FE1\u606F\uFF08\u6BD4\u5982\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF09\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\u4F7F\u7528\u79C1\u94A5\u751F\u6210\u6807\u51C6\u7684token\uFF0C\u8FD4\u56DE\u7ED9\u7F51\u5173\uFF1B</p>
</li>
<li>
<p>\u7F51\u5173\u5C06\u643A\u5E26token\u7684\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5C06\u8FD9\u4E2Atoken\u7F13\u5B58\u5230\u672C\u5730\uFF1B</p>
</li>
<li>
<p>\u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u9001\u4E1A\u52A1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u643A\u5E26token\uFF1B</p>
</li>
<li>
<p>\u7F51\u5173\u4F7F\u7528\u7528\u6237\u8BBE\u5B9A\u7684\u516C\u94A5\u5BF9\u8BF7\u6C42\u4E2D\u7684token\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u5C06\u8BF7\u6C42\u900F\u4F20\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B</p>
</li>
<li>
<p>\u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u4E1A\u52A1\u5904\u7406\u540E\u5E94\u7B54\uFF1B</p>
</li>
<li>
<p>\u7F51\u5173\u5C06\u4E1A\u52A1\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p>
</li>
</ol>
<p>\u5728\u8FD9\u4E2A\u6574\u4E2A\u8FC7\u7A0B\u4E2D, \u7F51\u5173\u5229\u7528token\u8BA4\u8BC1\u673A\u5236\uFF0C\u5B9E\u73B0\u4E86\u7528\u6237\u4F7F\u7528\u81EA\u5DF1\u7684\u7528\u6237\u4F53\u7CFB\u5BF9\u81EA\u5DF1API\u8FDB\u884C\u6388\u6743\u7684\u80FD\u529B\u3002\u4E0B\u9762\u6211\u4EEC\u5C31\u8981\u4ECB\u7ECD\u7F51\u5173\u5B9E\u73B0token\u8BA4\u8BC1\u6240\u4F7F\u7528\u7684\u7ED3\u6784\u5316\u4EE4\u724CJson Web Token(JWT)\u3002</p>
<h4 id="13-jwt">1.3 JWT</h4>
<h5 id="131-\u7B80\u4ECB">1.3.1 \u7B80\u4ECB</h5>
<p>Json Web Toke\uFF08JWT\uFF09\uFF0C\u662F\u4E3A\u4E86\u5728\u7F51\u7EDC\u5E94\u7528\u73AF\u5883\u95F4\u4F20\u9012\u58F0\u660E\u800C\u6267\u884C\u7684\u4E00\u79CD\u57FA\u4E8EJSON\u7684\u5F00\u653E\u6807\u51C6RFC7519\u3002JWT\u4E00\u822C\u53EF\u4EE5\u7528\u4F5C\u72EC\u7ACB\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u4EE4\u724C\uFF0C\u53EF\u4EE5\u5305\u542B\u7528\u6237\u6807\u8BC6\u3001\u7528\u6237\u89D2\u8272\u548C\u6743\u9650\u7B49\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u4E8E\u4ECE\u8D44\u6E90\u670D\u52A1\u5668\u83B7\u53D6\u8D44\u6E90\uFF0C\u4E5F\u53EF\u4EE5\u589E\u52A0\u4E00\u4E9B\u989D\u5916\u7684\u5176\u5B83\u4E1A\u52A1\u903B\u8F91\u6240\u5FC5\u987B\u7684\u58F0\u660E\u4FE1\u606F\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u5206\u5E03\u5F0F\u7AD9\u70B9\u7684\u767B\u5F55\u573A\u666F\u3002</p>
<h5 id="132-jwt\u7684\u6784\u6210">1.3.2 JWT\u7684\u6784\u6210</h5>
<p><code dir="auto">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</code></p>
<p>\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u6240\u793A\uFF0CJWT\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7531\u4E09\u90E8\u5206\u6784\u6210\uFF1A</p>
<ul>
<li>Header\uFF08\u5934\u90E8\uFF09</li>
<li>Payload\uFF08\u6570\u636E\uFF09</li>
<li>Signature\uFF08\u7B7E\u540D\uFF09</li>
</ul>
<p><strong>Header</strong></p>
<p>JWT\u7684\u5934\u90E8\u627F\u8F7D\u4E24\u4E2A\u4FE1\u606F\uFF1A</p>
<ul>
<li>\u58F0\u660E\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662FJWT</li>
<li>\u58F0\u660E\u52A0\u5BC6\u7684\u7B97\u6CD5</li>
</ul>
<p>\u7F51\u5173\u652F\u6301\u7684\u52A0\u5BC6\u7B97\u6CD5\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ES256, ES384, ES512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HS256, HS384, HS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">RS256, RS384, RS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">PS256, PS384, PS512,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">EdDSA</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ES256, ES384, ES512,\x7FHS256, HS384, HS512,\x7FRS256, RS384, RS512,\x7FPS256, PS384, PS512,\x7FEdDSA"><div></div></button></div></figure></div>
<p>\u5B8C\u6574\u7684\u5934\u90E8\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u7684JSON\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">'typ'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'JWT'</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">'alg'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'HS256'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x27;typ&#x27;: &#x27;JWT&#x27;,\x7F  &#x27;alg&#x27;: &#x27;HS256&#x27;\x7F}"><div></div></button></div></figure></div>
<p>\u7136\u540E\u5C06\u5934\u90E8\u8FDB\u884CBase64\u7F16\u7801\uFF08\u8BE5\u7F16\u7801\u662F\u53EF\u4EE5\u5BF9\u79F0\u89E3\u7801\u7684\uFF09\uFF0C\u6784\u6210\u4E86\u7B2C\u4E00\u90E8\u5206\u3002</p>
<p><code dir="auto">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9</code></p>
<p><strong>Payload</strong></p>
<p>\u8F7D\u8377\u5C31\u662F\u5B58\u653E\u6709\u6548\u4FE1\u606F\u7684\u5730\u65B9\u3002\u5B9A\u4E49\u7EC6\u8282\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iss\uFF1A\u4EE4\u724C\u9881\u53D1\u8005\u3002\u8868\u793A\u8BE5\u4EE4\u724C\u7531\u8C01\u521B\u5EFA\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">sub: Subject Identifier\uFF0Ciss\u63D0\u4F9B\u7684\u7EC8\u7AEF\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5728iss\u8303\u56F4\u5185\u552F\u4E00\uFF0C\u6700\u957F\u4E3A255\u4E2AASCII\u4E2A\u5B57\u7B26\uFF0C\u533A\u5206\u5927\u5C0F\u5199</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">aud\uFF1AAudience(s)\uFF0C\u4EE4\u724C\u7684\u53D7\u4F17\uFF0C\u5206\u5927\u5C0F\u5199\u7684\u5B57\u7B26\u4E32\u6570\u7EC4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">exp\uFF1AExpiration time\uFF0C\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\u6233\u3002\u8D85\u8FC7\u6B64\u65F6\u95F4\u7684token\u4F1A\u4F5C\u5E9F\uFF0C \u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iat: \u4EE4\u724C\u7684\u9881\u53D1\u65F6\u95F4\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">jti: \u4EE4\u724C\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BE5\u58F0\u660E\u7684\u503C\u5728\u4EE4\u724C\u9881\u53D1\u8005\u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u4EE4\u724C\u4E2D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81\uFF0C\u5B83\u901A\u5E38\u662F\u4E00\u4E2A\u5BC6\u7801\u5B66\u968F\u673A\u503C\u3002\u8FD9\u4E2A\u503C\u76F8\u5F53\u4E8E\u5411\u7ED3\u6784\u5316\u4EE4\u724C\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u5F97\u7684\u968F\u673A\u71B5\u7EC4\u4EF6\uFF0C\u6709\u5229\u4E8E\u9632\u6B62\u4EE4\u724C\u731C\u6D4B\u653B\u51FB\u548C\u91CD\u653E\u653B\u51FB\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="iss\uFF1A\u4EE4\u724C\u9881\u53D1\u8005\u3002\u8868\u793A\u8BE5\u4EE4\u724C\u7531\u8C01\u521B\u5EFA\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\x7Fsub: Subject Identifier\uFF0Ciss\u63D0\u4F9B\u7684\u7EC8\u7AEF\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5728iss\u8303\u56F4\u5185\u552F\u4E00\uFF0C\u6700\u957F\u4E3A255\u4E2AASCII\u4E2A\u5B57\u7B26\uFF0C\u533A\u5206\u5927\u5C0F\u5199\x7Faud\uFF1AAudience(s)\uFF0C\u4EE4\u724C\u7684\u53D7\u4F17\uFF0C\u5206\u5927\u5C0F\u5199\u7684\u5B57\u7B26\u4E32\u6570\u7EC4\x7Fexp\uFF1AExpiration time\uFF0C\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\u6233\u3002\u8D85\u8FC7\u6B64\u65F6\u95F4\u7684token\u4F1A\u4F5C\u5E9F\uFF0C \u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570\x7Fiat: \u4EE4\u724C\u7684\u9881\u53D1\u65F6\u95F4\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570\x7Fjti: \u4EE4\u724C\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BE5\u58F0\u660E\u7684\u503C\u5728\u4EE4\u724C\u9881\u53D1\u8005\u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u4EE4\u724C\u4E2D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81\uFF0C\u5B83\u901A\u5E38\u662F\u4E00\u4E2A\u5BC6\u7801\u5B66\u968F\u673A\u503C\u3002\u8FD9\u4E2A\u503C\u76F8\u5F53\u4E8E\u5411\u7ED3\u6784\u5316\u4EE4\u724C\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u5F97\u7684\u968F\u673A\u71B5\u7EC4\u4EF6\uFF0C\u6709\u5229\u4E8E\u9632\u6B62\u4EE4\u724C\u731C\u6D4B\u653B\u51FB\u548C\u91CD\u653E\u653B\u51FB\u3002"><div></div></button></div></figure></div>
<p>\u4E5F\u53EF\u4EE5\u65B0\u589E\u7528\u6237\u7CFB\u7EDF\u9700\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6DFB\u52A0\u4E86name \u7528\u6237\u6635\u79F0\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"sub"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1234567890"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"John Doe"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;sub&#x22;: &#x22;1234567890&#x22;,\x7F  &#x22;name&#x22;: &#x22;John Doe&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u7136\u540E\u5C06\u5176\u8FDB\u884CBase64\u7F16\u7801\uFF0C\u5F97\u5230JWT\u7684\u7B2C\u4E8C\u90E8\u5206\uFF1A</p>
<p><code dir="auto">JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE</code></p>
<p><strong>Signature</strong></p>
<p>\u8FD9\u4E2A\u90E8\u5206\u9700\u8981Base64\u7F16\u7801\u540E\u7684Header\u548CBase64\u7F16\u7801\u540E\u7684Payload\u4F7F\u7528 . \u8FDE\u63A5\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u901A\u8FC7Header\u4E2D\u58F0\u660E\u7684\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u52A0\u5BC6\uFF08$secret \u8868\u793A\u7528\u6237\u7684\u79C1\u94A5\uFF09\uFF0C\u7136\u540E\u5C31\u6784\u6210\u4E86jwt\u7684\u7B2C\u4E09\u90E8\u5206\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> encodedString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">base64UrlEncode</span><span style="--0:#E1E4E8">(header) </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'.'</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">base64UrlEncode</span><span style="--0:#E1E4E8">(payload);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">var</span><span style="--0:#E1E4E8"> signature </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">HMACSHA256</span><span style="--0:#E1E4E8">(encodedString, </span><span style="--0:#9ECBFF">'$secret'</span><span style="--0:#E1E4E8">);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="var encodedString = base64UrlEncode(header) + &#x27;.&#x27; + base64UrlEncode(payload);\x7Fvar signature = HMACSHA256(encodedString, &#x27;$secret&#x27;);"><div></div></button></div></figure></div>
<p>\u5C06\u8FD9\u4E09\u90E8\u5206\u7528 . \u8FDE\u63A5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u5B57\u7B26\u4E32\uFF0C\u5C31\u6784\u6210\u4E86 1.3.2 \u8282\u6700\u5F00\u59CB\u7684JWT\u793A\u4F8B\u3002</p>
<h5 id="133-\u65F6\u6548">1.3.3 \u65F6\u6548</h5>
<p>\u7F51\u5173\u4F1A\u9A8C\u8BC1token\u4E2D\u7684exp\u5B57\u6BB5\uFF0C\u4E00\u65E6\u8FD9\u4E2A\u5B57\u6BB5\u8FC7\u671F\u4E86\uFF0C\u7F51\u5173\u4F1A\u8BA4\u4E3A\u8FD9\u4E2Atoken\u65E0\u6548\u800C\u5C06\u8BF7\u6C42\u76F4\u63A5\u6253\u56DE\u3002\u8FC7\u671F\u65F6\u95F4\u8FD9\u4E2A\u503C\u5FC5\u987B\u8BBE\u7F6E\u3002</p>
<h5 id="134-jwt\u7684\u51E0\u4E2A\u7279\u70B9">1.3.4 JWT\u7684\u51E0\u4E2A\u7279\u70B9</h5>
<ol>
<li>JWT \u9ED8\u8BA4\u662F\u4E0D\u52A0\u5BC6\uFF0C\u4E0D\u80FD\u5C06\u79D8\u5BC6\u6570\u636E\u5199\u5165 JWT\u3002</li>
<li>JWT \u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u8BA4\u8BC1\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u4EA4\u6362\u4FE1\u606F\u3002\u6709\u6548\u4F7F\u7528 JWT\uFF0C\u53EF\u4EE5\u964D\u4F4E\u670D\u52A1\u5668\u67E5\u8BE2\u6570\u636E\u5E93\u7684\u6B21\u6570\u3002</li>
<li>JWT \u7684\u6700\u5927\u7F3A\u70B9\u662F\uFF0C\u7531\u4E8E\u670D\u52A1\u5668\u4E0D\u4FDD\u5B58 session \u72B6\u6001\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5E9F\u6B62\u67D0\u4E2A token\uFF0C\u6216\u8005\u66F4\u6539 token \u7684\u6743\u9650\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u65E6 JWT \u7B7E\u53D1\u4E86\uFF0C\u5728\u5230\u671F\u4E4B\u524D\u5C31\u4F1A\u59CB\u7EC8\u6709\u6548\uFF0C\u9664\u975E\u670D\u52A1\u5668\u90E8\u7F72\u989D\u5916\u7684\u903B\u8F91\u3002</li>
<li>JWT \u672C\u8EAB\u5305\u542B\u4E86\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E00\u65E6\u6CC4\u9732\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u83B7\u5F97\u8BE5\u4EE4\u724C\u7684\u6240\u6709\u6743\u9650\u3002\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u7684\u6709\u6548\u671F\u5E94\u8BE5\u8BBE\u7F6E\u5F97\u6BD4\u8F83\u77ED\u3002\u5BF9\u4E8E\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u6743\u9650\uFF0C\u4F7F\u7528\u65F6\u5E94\u8BE5\u518D\u6B21\u5BF9\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\u3002</li>
<li>\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u4E0D\u5E94\u8BE5\u4F7F\u7528 HTTP \u534F\u8BAE\u660E\u7801\u4F20\u8F93\uFF0C\u8981\u4F7F\u7528HTTPS \u534F\u8BAE\u4F20\u8F93\u3002</li>
</ol>
<h3 id="2\u7528\u6237\u7CFB\u7EDF\u5982\u4F55\u5E94\u7528jwt\u63D2\u4EF6\u4FDD\u62A4api">2\u3001\u7528\u6237\u7CFB\u7EDF\u5982\u4F55\u5E94\u7528JWT\u63D2\u4EF6\u4FDD\u62A4API</h3>
<h4 id="21-\u751F\u6210\u4E00\u5BF9jwkjson-web-\u5BC6\u94A5">2.1 \u751F\u6210\u4E00\u5BF9JWK\uFF08JSON Web \u5BC6\u94A5\uFF09</h4>
<p><strong>\u65B9\u6CD5\u4E00\u3001\u5728\u7EBF\u751F\u6210\uFF1A</strong></p>
<p>\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u4E2A\u7AD9\u70B9<a href="https://mkjwk.org" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://mkjwk.org</a> \u751F\u6210\u7528\u4E8Etoken\u751F\u6210\u4E0E\u9A8C\u8BC1\u7684\u79C1\u94A5\u4E0E\u516C\u94A5\uFF0C \u79C1\u94A5\u7528\u4E8E\u6388\u6743\u670D\u52A1\u7B7E\u53D1JWT\uFF0C\u516C\u94A5\u914D\u7F6E\u5230JWT\u63D2\u4EF6\u4E2D\u7528\u4E8E\u7F51\u5173\u5BF9\u8BF7\u6C42\u9A8C\u7B7E\uFF0C\u6CE8\u610F\u7F51\u5173\u4F7F\u7528\u7684jwks\u683C\u5F0F\u914D\u7F6E\uFF0C\u4E0B\u56FE\u4E2DPublic Key\u9700\u8981\u653E\u5230keys\u7ED3\u6784\u4F53\u4E2D\uFF0C\u5982\uFF1A<code dir="auto">{"keys":[{"kty":"RSA","e":"AQAB",...}]}</code></p>
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135823.png" style="zoom:50%">
<p><strong>\u65B9\u6CD5\u4E8C\u3001\u672C\u5730\u751F\u6210\uFF1A</strong></p>
<p>\u672C\u6587\u5E94\u7528Java\u793A\u4F8B\u8BF4\u660E\uFF0C\u5176\u4ED6\u8BED\u8A00\u7528\u6237\u4E5F\u53EF\u4EE5\u627E\u5230\u76F8\u5173\u7684\u5DE5\u5177\u751F\u6210\u5BC6\u94A5\u5BF9\u3002 \u65B0\u5EFA\u4E00\u4E2AMaven\u9879\u76EE\uFF0C\u52A0\u5165\u5982\u4E0B\u4F9D\u8D56\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">>org.bitbucket.b_c&#x3C;/</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">>jose4j&#x3C;/</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">>0.7.0&#x3C;/</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<dependency>\x7F     <groupId>org.bitbucket.b_c</groupId>\x7F     <artifactId>jose4j</artifactId>\x7F     <version>0.7.0</version>\x7F</dependency>"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u5982\u4E0B\u7684\u4EE3\u7801\u751F\u6210\u4E00\u5BF9RSA\u5BC6\u94A5\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">RsaJsonWebKey rsaJsonWebKey </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> RsaJwkGenerator.</span><span style="--0:#B392F0">generateJwk</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">2048</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">final</span><span style="--0:#E1E4E8"> String publicKeyString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> rsaJsonWebKey.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">final</span><span style="--0:#E1E4E8"> String privateKeyString </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> rsaJsonWebKey.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="RsaJsonWebKey rsaJsonWebKey = RsaJwkGenerator.generateJwk(2048);\x7Ffinal String publicKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);\x7Ffinal String privateKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);"><div></div></button></div></figure></div>
<h4 id="22-\u4F7F\u7528jwk\u4E2D\u7684\u79C1\u94A5\u5B9E\u73B0\u9881\u53D1token-\u7684\u8BA4\u8BC1\u670D\u52A1">2.2 \u4F7F\u7528JWK\u4E2D\u7684\u79C1\u94A5\u5B9E\u73B0\u9881\u53D1token \u7684\u8BA4\u8BC1\u670D\u52A1</h4>
<p>\u9700\u8981\u4F7F\u75282.1\u8282\u4E2D\u5728\u7EBF\u751F\u6210\u7684 Keypair JSON\u5B57\u7B26\u4E32\uFF08\u4E09\u4E2A\u65B9\u6846\u5185\u7684\u7B2C\u4E00\u4E2A\uFF09\u6216\u8005\u672C\u5730\u751F\u6210\u7684 privateKeyString JSON\u5B57\u7B26\u4E32\u4F5C\u4E3A\u79C1\u94A5\u6765\u9881\u53D1token\uFF0C\u7528\u4E8E\u6388\u6743\u53EF\u4FE1\u7684\u7528\u6237\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684API\uFF0C\u5177\u4F53\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003\u4E0B\u65B9\u793A\u4F8B\u3002 \u5411\u5BA2\u6237\u9881\u53D1token\u7684\u5F62\u5F0F\u7531\u7528\u6237\u6839\u636E\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u51B3\u5B9A\uFF0C\u53EF\u4EE5\u5C06\u9881\u53D1token\u7684\u529F\u80FD\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\uFF0C\u914D\u7F6E\u6210\u666E\u901AAPI\u540E\u7531\u8BBF\u95EE\u8005\u901A\u8FC7\u7528\u6237\u540D\u5BC6\u7801\u83B7\u5F97\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u672C\u5730\u73AF\u5883\u751F\u6210token \u540E\uFF0C\u76F4\u63A5\u62F7\u8D1D\u7ED9\u6307\u5B9A\u7528\u6237\u4F7F\u7528\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> java.security.PrivateKey;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.json.JsonUtil;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwk.RsaJsonWebKey;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwk.RsaJwkGenerator;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jws.AlgorithmIdentifiers;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jws.JsonWebSignature;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwt.JwtClaims;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.jwt.NumericDate;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.jose4j.lang.JoseException;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">class</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">GenerateJwtDemo</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">static</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">void</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">String</span><span style="--0:#E1E4E8">[] </span><span style="--0:#FFAB70">args</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">throws</span><span style="--0:#E1E4E8"> JoseException  {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String keyId </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"uniq_key"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#99A0A6">//\u4F7F\u7528\u672C\u65872.1\u8282\u751F\u6210\u7684Keypair</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String privateKeyJson </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">kty</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">RSA</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">d</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: "</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">e</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">AQAB</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">alg</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">RS256</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">,</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"  </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">n</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">: </span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw</span><span style="--0:#79B8FF">\\"\\n</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"}"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">JwtClaims claims </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">JwtClaims</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setGeneratedJwtId</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setIssuedAtToNow</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">//\u8FC7\u671F\u65F6\u95F4\u4E00\u5B9A\u8981\u8BBE\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">NumericDate date </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> NumericDate.</span><span style="--0:#B392F0">now</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">date.</span><span style="--0:#B392F0">addSeconds</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">120</span><span style="--0:#F97583">*</span><span style="--0:#79B8FF">60</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setExpirationTime</span><span style="--0:#E1E4E8">(date);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setNotBeforeMinutesInThePast</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setSubject</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"YOUR_SUBJECT"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setAudience</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"YOUR_AUDIENCE"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">//\u6DFB\u52A0\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u6240\u6709\u503C\u8BF7\u90FD\u4F7F\u7528String\u7C7B\u578B</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setClaim</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"userId"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"1213234"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">claims.</span><span style="--0:#B392F0">setClaim</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"email"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"userEmail@youapp.com"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">JsonWebSignature jws </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">JsonWebSignature</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setAlgorithmHeaderValue</span><span style="--0:#E1E4E8">(AlgorithmIdentifiers.RSA_USING_SHA256);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setKeyIdHeaderValue</span><span style="--0:#E1E4E8">(keyId);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setPayload</span><span style="--0:#E1E4E8">(claims.</span><span style="--0:#B392F0">toJson</span><span style="--0:#E1E4E8">());</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">PrivateKey privateKey </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RsaJsonWebKey</span><span style="--0:#E1E4E8">(JsonUtil.</span><span style="--0:#B392F0">parseJson</span><span style="--0:#E1E4E8">(privateKeyJson)).</span><span style="--0:#B392F0">getPrivateKey</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">jws.</span><span style="--0:#B392F0">setKey</span><span style="--0:#E1E4E8">(privateKey);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">String jwtResult </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> jws.</span><span style="--0:#B392F0">getCompactSerialization</span><span style="--0:#E1E4E8">();</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">System.out.</span><span style="--0:#B392F0">println</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Generate Json Web token , result is "</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> jwtResult);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import java.security.PrivateKey;\x7Fimport org.jose4j.json.JsonUtil;\x7Fimport org.jose4j.jwk.RsaJsonWebKey;\x7Fimport org.jose4j.jwk.RsaJwkGenerator;\x7Fimport org.jose4j.jws.AlgorithmIdentifiers;\x7Fimport org.jose4j.jws.JsonWebSignature;\x7Fimport org.jose4j.jwt.JwtClaims;\x7Fimport org.jose4j.jwt.NumericDate;\x7Fimport org.jose4j.lang.JoseException;\x7Fpublic class GenerateJwtDemo {\x7F    public static void main(String[] args) throws JoseException  {\x7F        String keyId = &#x22;uniq_key&#x22;;\x7F          //\u4F7F\u7528\u672C\u65872.1\u8282\u751F\u6210\u7684Keypair\x7F        String privateKeyJson = &#x22;{\\n&#x22;\x7F            + &#x22;  \\&#x22;kty\\&#x22;: \\&#x22;RSA\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;d\\&#x22;: &#x22;\x7F            +\x7F            &#x22;\\&#x22;O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;e\\&#x22;: \\&#x22;AQAB\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;alg\\&#x22;: \\&#x22;RS256\\&#x22;,\\n&#x22;\x7F            + &#x22;  \\&#x22;n\\&#x22;: \\&#x22;vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe&#x22;\x7F            +\x7F            &#x22;--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw\\&#x22;\\n&#x22;\x7F            + &#x22;}&#x22;;\x7F        JwtClaims claims = new JwtClaims();\x7F        claims.setGeneratedJwtId();\x7F        claims.setIssuedAtToNow();\x7F        //\u8FC7\u671F\u65F6\u95F4\u4E00\u5B9A\u8981\u8BBE\u7F6E\x7F        NumericDate date = NumericDate.now();\x7F        date.addSeconds(120*60);\x7F        claims.setExpirationTime(date);\x7F        claims.setNotBeforeMinutesInThePast(1);\x7F        claims.setSubject(&#x22;YOUR_SUBJECT&#x22;);\x7F        claims.setAudience(&#x22;YOUR_AUDIENCE&#x22;);\x7F        //\u6DFB\u52A0\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u6240\u6709\u503C\u8BF7\u90FD\u4F7F\u7528String\u7C7B\u578B\x7F        claims.setClaim(&#x22;userId&#x22;, &#x22;1213234&#x22;);\x7F        claims.setClaim(&#x22;email&#x22;, &#x22;userEmail@youapp.com&#x22;);\x7F        JsonWebSignature jws = new JsonWebSignature();\x7F        jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);\x7F        jws.setKeyIdHeaderValue(keyId);\x7F        jws.setPayload(claims.toJson());\x7F        PrivateKey privateKey = new RsaJsonWebKey(JsonUtil.parseJson(privateKeyJson)).getPrivateKey();\x7F\x7F        jws.setKey(privateKey);\x7F        String jwtResult = jws.getCompactSerialization();\x7F        System.out.println(&#x22;Generate Json Web token , result is &#x22; + jwtResult);\x7F    }\x7F}"><div></div></button></div></figure></div>`,n={title:"JWT \u8BA4\u8BC1",keywords:["higress","jwt auth"],description:"JWT \u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/jwt-auth.md",t=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E
\`jwt-auth\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8EJWT(JSON Web Tokens)\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECEHTTP\u8BF7\u6C42\u7684URL\u53C2\u6570\u3001\u8BF7\u6C42\u5934\u3001Cookie\u5B57\u6BB5\u89E3\u6790JWT\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5Token\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002

\u672C\u63D2\u4EF6\u548C\`\u5B89\u5168\u80FD\u529B->\u8BA4\u8BC1\u9274\u6743\`\u4E2DJWT\u8BA4\u8BC1\u7684\u533A\u522B\u662F\uFF0C\u989D\u5916\u63D0\u4F9B\u4E86\u8C03\u7528\u65B9\u8EAB\u4EFD\u8BC6\u522B\u7684\u80FD\u529B\uFF0C\u652F\u6301\u5BF9\u4E0D\u540C\u8C03\u7528\u65B9\u914D\u7F6E\u4E0D\u540C\u7684JWT\u51ED\u8BC1\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`340\`

## \u914D\u7F6E\u5B57\u6BB5

**\u6CE8\u610F\uFF1A**

- \u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684header\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A\`X-Mse-Consumer\`\u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

### \u8BA4\u8BC1\u914D\u7F6E

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                        |
| ----------- | --------------- | ------------------------------------------- | ------ | ----------------------------------------------------------- |
| \`global_auth\` | bool            | \u9009\u586B\uFF08**\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**\uFF09                  | -      | \u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF0C\u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09\u3002 |
| \`consumers\` | array of object | \u5FC5\u586B                                        | -      | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                        |

\`consumers\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0                    | \u6570\u636E\u7C7B\u578B          | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C                                            | \u63CF\u8FF0                     |
| ----------------------- | ----------------- | -------- | ------------------------------------------------- | ------------------------ |
| \`name\`                  | string            | \u5FC5\u586B     | -                                                 | \u914D\u7F6E\u8BE5consumer\u7684\u540D\u79F0     |
| \`jwks\`                  | string            | \u5FC5\u586B     | -                                                 | https://www.rfc-editor.org/rfc/rfc7517 \u6307\u5B9A\u7684json\u683C\u5F0F\u5B57\u7B26\u4E32\uFF0C\u662F\u7531\u9A8C\u8BC1JWT\u4E2D\u7B7E\u540D\u7684\u516C\u94A5\uFF08\u6216\u5BF9\u79F0\u5BC6\u94A5\uFF09\u7EC4\u6210\u7684Json Web Key Set  |
| \`issuer\`                | string            | \u5FC5\u586B     | -                                                 | JWT\u7684\u7B7E\u53D1\u8005\uFF0C\u9700\u8981\u548Cpayload\u4E2D\u7684iss\u5B57\u6BB5\u4FDD\u6301\u4E00\u81F4              |
| \`claims_to_headers\`     | array of object   | \u9009\u586B     | -                                                 | \u62BD\u53D6JWT\u7684payload\u4E2D\u6307\u5B9A\u5B57\u6BB5\uFF0C\u8BBE\u7F6E\u5230\u6307\u5B9A\u7684\u8BF7\u6C42\u5934\u4E2D\u8F6C\u53D1\u7ED9\u540E\u7AEF |
| \`from_headers\`          | array of object   | \u9009\u586B     | {"name":"Authorization","value_prefix":"Bearer "} | \u4ECE\u6307\u5B9A\u7684\u8BF7\u6C42\u5934\u4E2D\u62BD\u53D6JWT |
| \`from_params\`           | array of string   | \u9009\u586B     | access_token                                      | \u4ECE\u6307\u5B9A\u7684URL\u53C2\u6570\u4E2D\u62BD\u53D6JWT                                   |
| \`from_cookies\`          | array of string   | \u9009\u586B     | -                                                 | \u4ECE\u6307\u5B9A\u7684cookie\u4E2D\u62BD\u53D6JWT                                    |
| \`clock_skew_seconds\`    | number            | \u9009\u586B     | 60                                                | \u6821\u9A8CJWT\u7684exp\u548Ciat\u5B57\u6BB5\u65F6\u5141\u8BB8\u7684\u65F6\u949F\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D\u4E3A\u79D2          |
| \`keep_token\`            | bool              | \u9009\u586B     | ture                                              | \u8F6C\u53D1\u7ED9\u540E\u7AEF\u65F6\u662F\u5426\u4FDD\u7559JWT                                    |

**\u6CE8\u610F\uFF1A** 
- \u53EA\u6709\u5F53\`from_headers\`,\`from_params\`,\`from_cookies\`\u5747\u672A\u914D\u7F6E\u65F6\uFF0C\u624D\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u503C

\`from_headers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42| \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                      |
| ---------------- | --------------- | ------- | ------ | --------------------------------------------------------- |
| \`name\`           | string          | \u5FC5\u586B    | -      | \u62BD\u53D6JWT\u7684\u8BF7\u6C42header                                       |
| \`value_prefix\`   | string          | \u5FC5\u586B    | -      | \u5BF9\u8BF7\u6C42header\u7684value\u53BB\u9664\u6B64\u524D\u7F00\uFF0C\u5269\u4F59\u90E8\u5206\u4F5C\u4E3AJWT            |

\`claims_to_headers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42| \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                      |
| ---------------- | --------------- | ------- | ------ | --------------------------------------------------------- |
| \`claim\`          | string          | \u5FC5\u586B    | -      | JWT payload\u4E2D\u7684\u6307\u5B9A\u5B57\u6BB5\uFF0C\u8981\u6C42\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u65E0\u7B26\u53F7\u6574\u6570\u7C7B\u578B |
| \`header\`         | string          | \u5FC5\u586B    | -      | \u4ECEpayload\u53D6\u51FA\u5B57\u6BB5\u7684\u503C\u8BBE\u7F6E\u5230\u8FD9\u4E2A\u8BF7\u6C42\u5934\u4E2D\uFF0C\u8F6C\u53D1\u7ED9\u540E\u7AEF       |
| \`override\`       | bool            | \u9009\u586B    | true   | true\u65F6\uFF0C\u5B58\u5728\u540C\u540D\u8BF7\u6C42\u5934\u4F1A\u8FDB\u884C\u8986\u76D6\uFF1Bfalse\u65F6\uFF0C\u8FFD\u52A0\u540C\u540D\u8BF7\u6C42\u5934 |


### \u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                           |
| ----------- | --------------- | ------------------------------------------- | ------ | -----------------------------------------------------------                                                                                                    |
| \`allow\`     | array of string | \u9009\u586B(**\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**)                    | -      | \u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236 |

## \u914D\u7F6E\u793A\u4F8B

### \u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743

\u6CE8\u610F\u5982\u679C\u4E00\u4E2AJWT\u80FD\u5339\u914D\u591A\u4E2A\`jwks\`\uFF0C\u5219\u6309\u7167\u914D\u7F6E\u987A\u5E8F\u547D\u4E2D\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\`consumer\`

\u5728\u5B9E\u4F8B\u7EA7\u522B\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A

\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  issuer: abcd
  jwks: |
    {
      "keys": [
        {
          "kty": "oct",
          "kid": "123",
          "k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",
          "alg": "HS256"
        }
      ]
    }
- name: consumer2
  issuer: abc
  jwks: |
    {
      "keys": [
        {
          "kty": "RSA",
          "e": "AQAB",
          "use": "sig",
          "kid": "123",
          "alg": "RS256",
          "n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"
        }
      ]
    }
\`\`\`

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

**\u8BF4\u660E\uFF1A**

\u6B64\u4F8B\u6307\u5B9A\u7684route-a\u548Croute-b\u5373\u5728\u521B\u5EFA\u7F51\u5173\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer1\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002

\u6B64\u4F8B\u6307\u5B9A\u7684*.example.com\u548Ctest.com\u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer2\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u88AB\u5141\u8BB8\u8BBF\u95EE\u3002

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\uFF1A

\u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u4F1A\u5339\u914D\u5230route-a\u8FD9\u6761\u8DEF\u7531

**\u5C06 JWT \u8BBE\u7F6E\u5728 url \u53C2\u6570\u4E2D**
\`\`\`bash
curl  'http://xxx.hello.com/test?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`
**\u5C06 JWT \u8BBE\u7F6E\u5728 http \u8BF7\u6C42\u5934\u4E2D**
\`\`\`bash
curl  http://xxx.hello.com/test -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684header\u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A\`X-Mse-Consumer\`\u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A\`consumer1\`\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0

\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\uFF1A

**\u8BF7\u6C42\u672A\u63D0\u4F9BJWT\uFF0C\u8FD4\u56DE401**
\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`

**\u6839\u636E\u8BF7\u6C42\u63D0\u4F9B\u7684JWT\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE403**
\`\`\`bash
# consumer1\u4E0D\u5728*.example.com\u7684allow\u5217\u8868\u91CC
curl  'http://xxx.example.com/test' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.eyJpc3MiOiJhYmNkIiwic3ViIjoidGVzdCIsImlhdCI6MTY2NTY2MDUyNywiZXhwIjoxODY1NjczODE5fQ.-vBSV0bKeDwQcuS6eeSZN9dLTUnSnZVk8eVCXdooCQ4'
\`\`\`

#### \u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F JWT Auth \u8BA4\u8BC1\uFF0C\u6240\u6709\u8BF7\u6C42\u5747\u9700\u8981\u7ECF\u8FC7\u8BA4\u8BC1\u540E\u624D\u80FD\u8BBF\u95EE\u3002

\`\`\`yaml
global_auth: true
consumers:
- name: consumer1
  issuer: abcd
  jwks: |
    {
      "keys": [
        {
          "kty": "oct",
          "kid": "123",
          "k": "hM0k3AbXBPpKOGg__Ql2Obcq7s60myWDpbHXzgKUQdYo7YCRp0gUqkCnbGSvZ2rGEl4YFkKqIqW7mTHdj-bcqXpNr-NOznEyMpVPOIlqG_NWVC3dydBgcsIZIdD-MR2AQceEaxriPA_VmiUCwfwL2Bhs6_i7eolXoY11EapLQtutz0BV6ZxQQ4dYUmct--7PLNb4BWJyQeWu0QfbIthnvhYllyl2dgeLTEJT58wzFz5HeNMNz8ohY5K0XaKAe5cepryqoXLhA-V-O1OjSG8lCNdKS09OY6O0fkyweKEtuDfien5tHHSsHXoAxYEHPFcSRL4bFPLZ0orTt1_4zpyfew",
          "alg": "HS256"
        }
      ]
    }
- name: consumer2
  issuer: abc
  jwks: |
    {
      "keys": [
        {
          "kty": "RSA",
          "e": "AQAB",
          "use": "sig",
          "kid": "123",
          "alg": "RS256",
          "n": "i0B67f1jggT9QJlZ_8QL9QQ56LfurrqDhpuu8BxtVcfxrYmaXaCtqTn7OfCuca7cGHdrJIjq99rz890NmYFZuvhaZ-LMt2iyiSb9LZJAeJmHf7ecguXS_-4x3hvbsrgUDi9tlg7xxbqGYcrco3anmalAFxsbswtu2PAXLtTnUo6aYwZsWA6ksq4FL3-anPNL5oZUgIp3HGyhhLTLdlQcC83jzxbguOim-0OEz-N4fniTYRivK7MlibHKrJfO3xa_6whBS07HW4Ydc37ZN3Rx9Ov3ZyV0idFblU519nUdqp_inXj1eEpynlxH60Ys_aTU2POGZh_25KXGdF_ZC_MSRw"
        }
      ]
    }
\`\`\`

## \u5E38\u89C1\u9519\u8BEF\u7801\u8BF4\u660E

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F               | \u539F\u56E0\u8BF4\u660E                                                                         |
| ----------- | ---------------------- | -------------------------------------------------------------------------------- |
| 401         | Jwt missing            | \u8BF7\u6C42\u5934\u672A\u63D0\u4F9BJWT                                                                  |
| 401         | Jwt expired            | JWT\u5DF2\u7ECF\u8FC7\u671F                                                                      |
| 401         | Jwt verification fails | JWT payload\u6821\u9A8C\u5931\u8D25\uFF0C\u5982iss\u4E0D\u5339\u914D                                                 |
| 403         | Access Denied          | \u65E0\u6743\u9650\u8BBF\u95EE\u5F53\u524D\u8DEF\u7531                                                               |

## \u8BE6\u7EC6\u8BF4\u660E

### 1\u3001\u57FA\u4E8Etoken\u7684\u8BA4\u8BC1

#### 1.1 \u7B80\u4ECB

\u5F88\u591A\u5BF9\u5916\u5F00\u653E\u7684API\u9700\u8981\u8BC6\u522B\u8BF7\u6C42\u8005\u7684\u8EAB\u4EFD\uFF0C\u5E76\u636E\u6B64\u5224\u65AD\u6240\u8BF7\u6C42\u7684\u8D44\u6E90\u662F\u5426\u53EF\u4EE5\u8FD4\u56DE\u7ED9\u8BF7\u6C42\u8005\u3002token\u5C31\u662F\u4E00\u79CD\u7528\u4E8E\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u673A\u5236\uFF0C\u57FA\u4E8E\u8FD9\u79CD\u673A\u5236\uFF0C\u5E94\u7528\u4E0D\u9700\u8981\u5728\u670D\u52A1\u7AEF\u4FDD\u7559\u7528\u6237\u7684\u8BA4\u8BC1\u4FE1\u606F\u6216\u8005\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u53EF\u5B9E\u73B0\u65E0\u72B6\u6001\u3001\u5206\u5E03\u5F0F\u7684Web\u5E94\u7528\u6388\u6743\uFF0C\u4E3A\u5E94\u7528\u7684\u6269\u5C55\u63D0\u4F9B\u4E86\u4FBF\u5229\u3002

#### 1.2 \u6D41\u7A0B\u63CF\u8FF0

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135822.png)

\u4E0A\u56FE\u662F\u7F51\u5173\u5229\u7528JWT\u5B9E\u73B0\u8BA4\u8BC1\u7684\u6574\u4E2A\u4E1A\u52A1\u6D41\u7A0B\u65F6\u5E8F\u56FE\uFF0C\u4E0B\u9762\u6211\u4EEC\u7528\u6587\u5B57\u6765\u8BE6\u7EC6\u63CF\u8FF0\u56FE\u4E2D\u6807\u6CE8\u7684\u6B65\u9AA4\uFF1A

1. \u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u8D77\u8BA4\u8BC1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u4E00\u822C\u4F1A\u643A\u5E26\u7EC8\u7AEF\u7528\u6237\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF1B

2. \u7F51\u5173\u5C06\u8BF7\u6C42\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B

3. \u540E\u7AEF\u670D\u52A1\u8BFB\u53D6\u8BF7\u6C42\u4E2D\u7684\u9A8C\u8BC1\u4FE1\u606F\uFF08\u6BD4\u5982\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF09\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\u4F7F\u7528\u79C1\u94A5\u751F\u6210\u6807\u51C6\u7684token\uFF0C\u8FD4\u56DE\u7ED9\u7F51\u5173\uFF1B

4. \u7F51\u5173\u5C06\u643A\u5E26token\u7684\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5C06\u8FD9\u4E2Atoken\u7F13\u5B58\u5230\u672C\u5730\uFF1B

5. \u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u9001\u4E1A\u52A1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u643A\u5E26token\uFF1B

6. \u7F51\u5173\u4F7F\u7528\u7528\u6237\u8BBE\u5B9A\u7684\u516C\u94A5\u5BF9\u8BF7\u6C42\u4E2D\u7684token\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u5C06\u8BF7\u6C42\u900F\u4F20\u7ED9\u540E\u7AEF\u670D\u52A1\uFF1B

7. \u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u4E1A\u52A1\u5904\u7406\u540E\u5E94\u7B54\uFF1B

8. \u7F51\u5173\u5C06\u4E1A\u52A1\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002

\u5728\u8FD9\u4E2A\u6574\u4E2A\u8FC7\u7A0B\u4E2D, \u7F51\u5173\u5229\u7528token\u8BA4\u8BC1\u673A\u5236\uFF0C\u5B9E\u73B0\u4E86\u7528\u6237\u4F7F\u7528\u81EA\u5DF1\u7684\u7528\u6237\u4F53\u7CFB\u5BF9\u81EA\u5DF1API\u8FDB\u884C\u6388\u6743\u7684\u80FD\u529B\u3002\u4E0B\u9762\u6211\u4EEC\u5C31\u8981\u4ECB\u7ECD\u7F51\u5173\u5B9E\u73B0token\u8BA4\u8BC1\u6240\u4F7F\u7528\u7684\u7ED3\u6784\u5316\u4EE4\u724CJson Web Token(JWT)\u3002

#### 1.3 JWT

##### 1.3.1 \u7B80\u4ECB

Json Web Toke\uFF08JWT\uFF09\uFF0C\u662F\u4E3A\u4E86\u5728\u7F51\u7EDC\u5E94\u7528\u73AF\u5883\u95F4\u4F20\u9012\u58F0\u660E\u800C\u6267\u884C\u7684\u4E00\u79CD\u57FA\u4E8EJSON\u7684\u5F00\u653E\u6807\u51C6RFC7519\u3002JWT\u4E00\u822C\u53EF\u4EE5\u7528\u4F5C\u72EC\u7ACB\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u4EE4\u724C\uFF0C\u53EF\u4EE5\u5305\u542B\u7528\u6237\u6807\u8BC6\u3001\u7528\u6237\u89D2\u8272\u548C\u6743\u9650\u7B49\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u4E8E\u4ECE\u8D44\u6E90\u670D\u52A1\u5668\u83B7\u53D6\u8D44\u6E90\uFF0C\u4E5F\u53EF\u4EE5\u589E\u52A0\u4E00\u4E9B\u989D\u5916\u7684\u5176\u5B83\u4E1A\u52A1\u903B\u8F91\u6240\u5FC5\u987B\u7684\u58F0\u660E\u4FE1\u606F\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u5206\u5E03\u5F0F\u7AD9\u70B9\u7684\u767B\u5F55\u573A\u666F\u3002

##### 1.3.2 JWT\u7684\u6784\u6210

\`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\`

\u5982\u4E0A\u9762\u7684\u4F8B\u5B50\u6240\u793A\uFF0CJWT\u5C31\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7531\u4E09\u90E8\u5206\u6784\u6210\uFF1A

- Header\uFF08\u5934\u90E8\uFF09
- Payload\uFF08\u6570\u636E\uFF09
- Signature\uFF08\u7B7E\u540D\uFF09

**Header**

JWT\u7684\u5934\u90E8\u627F\u8F7D\u4E24\u4E2A\u4FE1\u606F\uFF1A

- \u58F0\u660E\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662FJWT
- \u58F0\u660E\u52A0\u5BC6\u7684\u7B97\u6CD5

\u7F51\u5173\u652F\u6301\u7684\u52A0\u5BC6\u7B97\u6CD5\u5982\u4E0B\uFF1A

\`\`\`text
ES256, ES384, ES512,
HS256, HS384, HS512,
RS256, RS384, RS512,
PS256, PS384, PS512,
EdDSA
\`\`\`

\u5B8C\u6574\u7684\u5934\u90E8\u5C31\u50CF\u4E0B\u9762\u8FD9\u6837\u7684JSON\uFF1A

\`\`\`js
{
  'typ': 'JWT',
  'alg': 'HS256'
}
\`\`\`

\u7136\u540E\u5C06\u5934\u90E8\u8FDB\u884CBase64\u7F16\u7801\uFF08\u8BE5\u7F16\u7801\u662F\u53EF\u4EE5\u5BF9\u79F0\u89E3\u7801\u7684\uFF09\uFF0C\u6784\u6210\u4E86\u7B2C\u4E00\u90E8\u5206\u3002

\`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\`

**Payload**

\u8F7D\u8377\u5C31\u662F\u5B58\u653E\u6709\u6548\u4FE1\u606F\u7684\u5730\u65B9\u3002\u5B9A\u4E49\u7EC6\u8282\u5982\u4E0B\uFF1A

\`\`\`text
iss\uFF1A\u4EE4\u724C\u9881\u53D1\u8005\u3002\u8868\u793A\u8BE5\u4EE4\u724C\u7531\u8C01\u521B\u5EFA\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32
sub: Subject Identifier\uFF0Ciss\u63D0\u4F9B\u7684\u7EC8\u7AEF\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5728iss\u8303\u56F4\u5185\u552F\u4E00\uFF0C\u6700\u957F\u4E3A255\u4E2AASCII\u4E2A\u5B57\u7B26\uFF0C\u533A\u5206\u5927\u5C0F\u5199
aud\uFF1AAudience(s)\uFF0C\u4EE4\u724C\u7684\u53D7\u4F17\uFF0C\u5206\u5927\u5C0F\u5199\u7684\u5B57\u7B26\u4E32\u6570\u7EC4
exp\uFF1AExpiration time\uFF0C\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\u6233\u3002\u8D85\u8FC7\u6B64\u65F6\u95F4\u7684token\u4F1A\u4F5C\u5E9F\uFF0C \u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570
iat: \u4EE4\u724C\u7684\u9881\u53D1\u65F6\u95F4\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570
jti: \u4EE4\u724C\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BE5\u58F0\u660E\u7684\u503C\u5728\u4EE4\u724C\u9881\u53D1\u8005\u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u4EE4\u724C\u4E2D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81\uFF0C\u5B83\u901A\u5E38\u662F\u4E00\u4E2A\u5BC6\u7801\u5B66\u968F\u673A\u503C\u3002\u8FD9\u4E2A\u503C\u76F8\u5F53\u4E8E\u5411\u7ED3\u6784\u5316\u4EE4\u724C\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u5F97\u7684\u968F\u673A\u71B5\u7EC4\u4EF6\uFF0C\u6709\u5229\u4E8E\u9632\u6B62\u4EE4\u724C\u731C\u6D4B\u653B\u51FB\u548C\u91CD\u653E\u653B\u51FB\u3002
\`\`\`

\u4E5F\u53EF\u4EE5\u65B0\u589E\u7528\u6237\u7CFB\u7EDF\u9700\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6DFB\u52A0\u4E86name \u7528\u6237\u6635\u79F0\uFF1A

\`\`\`js
{
  "sub": "1234567890",
  "name": "John Doe"
}
\`\`\`

\u7136\u540E\u5C06\u5176\u8FDB\u884CBase64\u7F16\u7801\uFF0C\u5F97\u5230JWT\u7684\u7B2C\u4E8C\u90E8\u5206\uFF1A

\`JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE\`

**Signature**

\u8FD9\u4E2A\u90E8\u5206\u9700\u8981Base64\u7F16\u7801\u540E\u7684Header\u548CBase64\u7F16\u7801\u540E\u7684Payload\u4F7F\u7528 . \u8FDE\u63A5\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u901A\u8FC7Header\u4E2D\u58F0\u660E\u7684\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u52A0\u5BC6\uFF08$secret \u8868\u793A\u7528\u6237\u7684\u79C1\u94A5\uFF09\uFF0C\u7136\u540E\u5C31\u6784\u6210\u4E86jwt\u7684\u7B2C\u4E09\u90E8\u5206\u3002

\`\`\`js
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, '$secret');
\`\`\`

\u5C06\u8FD9\u4E09\u90E8\u5206\u7528 . \u8FDE\u63A5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u5B57\u7B26\u4E32\uFF0C\u5C31\u6784\u6210\u4E86 1.3.2 \u8282\u6700\u5F00\u59CB\u7684JWT\u793A\u4F8B\u3002


##### 1.3.3 \u65F6\u6548

\u7F51\u5173\u4F1A\u9A8C\u8BC1token\u4E2D\u7684exp\u5B57\u6BB5\uFF0C\u4E00\u65E6\u8FD9\u4E2A\u5B57\u6BB5\u8FC7\u671F\u4E86\uFF0C\u7F51\u5173\u4F1A\u8BA4\u4E3A\u8FD9\u4E2Atoken\u65E0\u6548\u800C\u5C06\u8BF7\u6C42\u76F4\u63A5\u6253\u56DE\u3002\u8FC7\u671F\u65F6\u95F4\u8FD9\u4E2A\u503C\u5FC5\u987B\u8BBE\u7F6E\u3002

##### 1.3.4 JWT\u7684\u51E0\u4E2A\u7279\u70B9

1. JWT \u9ED8\u8BA4\u662F\u4E0D\u52A0\u5BC6\uFF0C\u4E0D\u80FD\u5C06\u79D8\u5BC6\u6570\u636E\u5199\u5165 JWT\u3002
2. JWT \u4E0D\u4EC5\u53EF\u4EE5\u7528\u4E8E\u8BA4\u8BC1\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u4EA4\u6362\u4FE1\u606F\u3002\u6709\u6548\u4F7F\u7528 JWT\uFF0C\u53EF\u4EE5\u964D\u4F4E\u670D\u52A1\u5668\u67E5\u8BE2\u6570\u636E\u5E93\u7684\u6B21\u6570\u3002
3. JWT \u7684\u6700\u5927\u7F3A\u70B9\u662F\uFF0C\u7531\u4E8E\u670D\u52A1\u5668\u4E0D\u4FDD\u5B58 session \u72B6\u6001\uFF0C\u56E0\u6B64\u65E0\u6CD5\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u5E9F\u6B62\u67D0\u4E2A token\uFF0C\u6216\u8005\u66F4\u6539 token \u7684\u6743\u9650\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u65E6 JWT \u7B7E\u53D1\u4E86\uFF0C\u5728\u5230\u671F\u4E4B\u524D\u5C31\u4F1A\u59CB\u7EC8\u6709\u6548\uFF0C\u9664\u975E\u670D\u52A1\u5668\u90E8\u7F72\u989D\u5916\u7684\u903B\u8F91\u3002
4. JWT \u672C\u8EAB\u5305\u542B\u4E86\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E00\u65E6\u6CC4\u9732\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u83B7\u5F97\u8BE5\u4EE4\u724C\u7684\u6240\u6709\u6743\u9650\u3002\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u7684\u6709\u6548\u671F\u5E94\u8BE5\u8BBE\u7F6E\u5F97\u6BD4\u8F83\u77ED\u3002\u5BF9\u4E8E\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u6743\u9650\uFF0C\u4F7F\u7528\u65F6\u5E94\u8BE5\u518D\u6B21\u5BF9\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\u3002
5. \u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u4E0D\u5E94\u8BE5\u4F7F\u7528 HTTP \u534F\u8BAE\u660E\u7801\u4F20\u8F93\uFF0C\u8981\u4F7F\u7528HTTPS \u534F\u8BAE\u4F20\u8F93\u3002

### 2\u3001\u7528\u6237\u7CFB\u7EDF\u5982\u4F55\u5E94\u7528JWT\u63D2\u4EF6\u4FDD\u62A4API

#### 2.1 \u751F\u6210\u4E00\u5BF9JWK\uFF08JSON Web \u5BC6\u94A5\uFF09

**\u65B9\u6CD5\u4E00\u3001\u5728\u7EBF\u751F\u6210\uFF1A**

\u7528\u6237\u53EF\u4EE5\u5728\u8FD9\u4E2A\u7AD9\u70B9https://mkjwk.org \u751F\u6210\u7528\u4E8Etoken\u751F\u6210\u4E0E\u9A8C\u8BC1\u7684\u79C1\u94A5\u4E0E\u516C\u94A5\uFF0C \u79C1\u94A5\u7528\u4E8E\u6388\u6743\u670D\u52A1\u7B7E\u53D1JWT\uFF0C\u516C\u94A5\u914D\u7F6E\u5230JWT\u63D2\u4EF6\u4E2D\u7528\u4E8E\u7F51\u5173\u5BF9\u8BF7\u6C42\u9A8C\u7B7E\uFF0C\u6CE8\u610F\u7F51\u5173\u4F7F\u7528\u7684jwks\u683C\u5F0F\u914D\u7F6E\uFF0C\u4E0B\u56FE\u4E2DPublic Key\u9700\u8981\u653E\u5230keys\u7ED3\u6784\u4F53\u4E2D\uFF0C\u5982\uFF1A\`{"keys":[{"kty":"RSA","e":"AQAB",...}]}\`


<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2336348951/p135823.png" style="zoom:50%" />

**\u65B9\u6CD5\u4E8C\u3001\u672C\u5730\u751F\u6210\uFF1A**

\u672C\u6587\u5E94\u7528Java\u793A\u4F8B\u8BF4\u660E\uFF0C\u5176\u4ED6\u8BED\u8A00\u7528\u6237\u4E5F\u53EF\u4EE5\u627E\u5230\u76F8\u5173\u7684\u5DE5\u5177\u751F\u6210\u5BC6\u94A5\u5BF9\u3002 \u65B0\u5EFA\u4E00\u4E2AMaven\u9879\u76EE\uFF0C\u52A0\u5165\u5982\u4E0B\u4F9D\u8D56\uFF1A

\`\`\`xml
<dependency>
     <groupId>org.bitbucket.b_c</groupId>
     <artifactId>jose4j</artifactId>
     <version>0.7.0</version>
</dependency>
\`\`\`

\u4F7F\u7528\u5982\u4E0B\u7684\u4EE3\u7801\u751F\u6210\u4E00\u5BF9RSA\u5BC6\u94A5\uFF1A

\`\`\`java
RsaJsonWebKey rsaJsonWebKey = RsaJwkGenerator.generateJwk(2048);
final String publicKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.PUBLIC_ONLY);
final String privateKeyString = rsaJsonWebKey.toJson(JsonWebKey.OutputControlLevel.INCLUDE_PRIVATE);
\`\`\`

#### 2.2 \u4F7F\u7528JWK\u4E2D\u7684\u79C1\u94A5\u5B9E\u73B0\u9881\u53D1token \u7684\u8BA4\u8BC1\u670D\u52A1

\u9700\u8981\u4F7F\u75282.1\u8282\u4E2D\u5728\u7EBF\u751F\u6210\u7684 Keypair JSON\u5B57\u7B26\u4E32\uFF08\u4E09\u4E2A\u65B9\u6846\u5185\u7684\u7B2C\u4E00\u4E2A\uFF09\u6216\u8005\u672C\u5730\u751F\u6210\u7684 privateKeyString JSON\u5B57\u7B26\u4E32\u4F5C\u4E3A\u79C1\u94A5\u6765\u9881\u53D1token\uFF0C\u7528\u4E8E\u6388\u6743\u53EF\u4FE1\u7684\u7528\u6237\u8BBF\u95EE\u53D7\u4FDD\u62A4\u7684API\uFF0C\u5177\u4F53\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003\u4E0B\u65B9\u793A\u4F8B\u3002 \u5411\u5BA2\u6237\u9881\u53D1token\u7684\u5F62\u5F0F\u7531\u7528\u6237\u6839\u636E\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u51B3\u5B9A\uFF0C\u53EF\u4EE5\u5C06\u9881\u53D1token\u7684\u529F\u80FD\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\uFF0C\u914D\u7F6E\u6210\u666E\u901AAPI\u540E\u7531\u8BBF\u95EE\u8005\u901A\u8FC7\u7528\u6237\u540D\u5BC6\u7801\u83B7\u5F97\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u672C\u5730\u73AF\u5883\u751F\u6210token \u540E\uFF0C\u76F4\u63A5\u62F7\u8D1D\u7ED9\u6307\u5B9A\u7528\u6237\u4F7F\u7528\u3002

\`\`\`java
import java.security.PrivateKey; 
import org.jose4j.json.JsonUtil;
import org.jose4j.jwk.RsaJsonWebKey;
import org.jose4j.jwk.RsaJwkGenerator;
import org.jose4j.jws.AlgorithmIdentifiers;
import org.jose4j.jws.JsonWebSignature;
import org.jose4j.jwt.JwtClaims;
import org.jose4j.jwt.NumericDate;
import org.jose4j.lang.JoseException;
public class GenerateJwtDemo {
    public static void main(String[] args) throws JoseException  {
        String keyId = "uniq_key";
          //\u4F7F\u7528\u672C\u65872.1\u8282\u751F\u6210\u7684Keypair
        String privateKeyJson = "{\\n"
            + "  \\"kty\\": \\"RSA\\",\\n"
            + "  \\"d\\": "
            +
            "\\"O9MJSOgcjjiVMNJ4jmBAh0mRHF_TlaVva70Imghtlgwxl8BLfcf1S8ueN1PD7xV6Cnq8YenSKsfiNOhC6yZ_fjW1syn5raWfj68eR7cjHWjLOvKjwVY33GBPNOvspNhVAFzeqfWneRTBbga53Agb6jjN0SUcZdJgnelzz5JNdOGaLzhacjH6YPJKpbuzCQYPkWtoZHDqWTzCSb4mJ3n0NRTsWy7Pm8LwG_Fd3pACl7JIY38IanPQDLoighFfo-Lriv5z3IdlhwbPnx0tk9sBwQBTRdZ8JkqqYkxUiB06phwr7mAnKEpQJ6HvhZBQ1cCnYZ_nIlrX9-I7qomrlE1UoQ\\",\\n"
            + "  \\"e\\": \\"AQAB\\",\\n"
            + "  \\"alg\\": \\"RS256\\",\\n"
            + "  \\"n\\": \\"vCuB8MgwPZfziMSytEbBoOEwxsG7XI3MaVMoocziP4SjzU4IuWuE_DodbOHQwb_thUru57_Efe"
            +
            "--sfATHEa0Odv5ny3QbByqsvjyeHk6ZE4mSAV9BsHYa6GWAgEZtnDceeeDc0y76utXK2XHhC1Pysi2KG8KAzqDa099Yh7s31AyoueoMnrYTmWfEyDsQL_OAIiwgXakkS5U8QyXmWicCwXntDzkIMh8MjfPskesyli0XQD1AmCXVV3h2Opm1Amx0ggSOOiINUR5YRD6mKo49_cN-nrJWjtwSouqDdxHYP-4c7epuTcdS6kQHiQERBd1ejdpAxV4c0t0FHF7MOy9kw\\"\\n"
            + "}";
        JwtClaims claims = new JwtClaims();
        claims.setGeneratedJwtId();
        claims.setIssuedAtToNow();
        //\u8FC7\u671F\u65F6\u95F4\u4E00\u5B9A\u8981\u8BBE\u7F6E
        NumericDate date = NumericDate.now();
        date.addSeconds(120*60);
        claims.setExpirationTime(date);
        claims.setNotBeforeMinutesInThePast(1);
        claims.setSubject("YOUR_SUBJECT");
        claims.setAudience("YOUR_AUDIENCE");
        //\u6DFB\u52A0\u81EA\u5B9A\u4E49\u53C2\u6570\uFF0C\u6240\u6709\u503C\u8BF7\u90FD\u4F7F\u7528String\u7C7B\u578B
        claims.setClaim("userId", "1213234");
        claims.setClaim("email", "userEmail@youapp.com");
        JsonWebSignature jws = new JsonWebSignature();
        jws.setAlgorithmHeaderValue(AlgorithmIdentifiers.RSA_USING_SHA256);
        jws.setKeyIdHeaderValue(keyId);
        jws.setPayload(claims.toJson());
        PrivateKey privateKey = new RsaJsonWebKey(JsonUtil.parseJson(privateKeyJson)).getPrivateKey();
     
        jws.setKey(privateKey);
        String jwtResult = jws.getCompactSerialization();
        System.out.println("Generate Json Web token , result is " + jwtResult);
    }
}
\`\`\`
`},p=function(){return s},d=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u8BA4\u8BC1\u914D\u7F6E",text:"\u8BA4\u8BC1\u914D\u7F6E"},{depth:3,slug:"\u9274\u6743\u914D\u7F6E\u975E\u5FC5\u9700",text:"\u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743",text:"\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743"},{depth:4,slug:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F",text:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F"},{depth:2,slug:"\u5E38\u89C1\u9519\u8BEF\u7801\u8BF4\u660E",text:"\u5E38\u89C1\u9519\u8BEF\u7801\u8BF4\u660E"},{depth:2,slug:"\u8BE6\u7EC6\u8BF4\u660E",text:"\u8BE6\u7EC6\u8BF4\u660E"},{depth:3,slug:"1\u57FA\u4E8Etoken\u7684\u8BA4\u8BC1",text:"1\u3001\u57FA\u4E8Etoken\u7684\u8BA4\u8BC1"},{depth:4,slug:"11-\u7B80\u4ECB",text:"1.1 \u7B80\u4ECB"},{depth:4,slug:"12-\u6D41\u7A0B\u63CF\u8FF0",text:"1.2 \u6D41\u7A0B\u63CF\u8FF0"},{depth:4,slug:"13-jwt",text:"1.3 JWT"},{depth:5,slug:"131-\u7B80\u4ECB",text:"1.3.1 \u7B80\u4ECB"},{depth:5,slug:"132-jwt\u7684\u6784\u6210",text:"1.3.2 JWT\u7684\u6784\u6210"},{depth:5,slug:"133-\u65F6\u6548",text:"1.3.3 \u65F6\u6548"},{depth:5,slug:"134-jwt\u7684\u51E0\u4E2A\u7279\u70B9",text:"1.3.4 JWT\u7684\u51E0\u4E2A\u7279\u70B9"},{depth:3,slug:"2\u7528\u6237\u7CFB\u7EDF\u5982\u4F55\u5E94\u7528jwt\u63D2\u4EF6\u4FDD\u62A4api",text:"2\u3001\u7528\u6237\u7CFB\u7EDF\u5982\u4F55\u5E94\u7528JWT\u63D2\u4EF6\u4FDD\u62A4API"},{depth:4,slug:"21-\u751F\u6210\u4E00\u5BF9jwkjson-web-\u5BC6\u94A5",text:"2.1 \u751F\u6210\u4E00\u5BF9JWK\uFF08JSON Web \u5BC6\u94A5\uFF09"},{depth:4,slug:"22-\u4F7F\u7528jwk\u4E2D\u7684\u79C1\u94A5\u5B9E\u73B0\u9881\u53D1token-\u7684\u8BA4\u8BC1\u670D\u52A1",text:"2.2 \u4F7F\u7528JWK\u4E2D\u7684\u79C1\u94A5\u5B9E\u73B0\u9881\u53D1token \u7684\u8BA4\u8BC1\u670D\u52A1"}]},e=c((u,h,m)=>{const{layout:f,...i}=n;return i.file=a,i.url=t,r`${y()}${E(s)}`})});export{e as Content,F as __tla,p as compiledContent,e as default,a as file,n as frontmatter,d as getHeadings,l as rawContent,t as url};
