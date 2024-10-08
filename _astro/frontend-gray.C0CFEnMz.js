import{c as o,__tla as c}from"./astro-component.CwRucF1h.js";import{r,m as y,u as v,__tla as E}from"./constant.B1AWh3JM.js";import{__tla as u}from"./astro/assets-service.Dd3mQuiC.js";let s,i,a,n,l,p,d,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">frontend-gray</code>\u63D2\u4EF6\u5B9E\u73B0\u4E86\u524D\u7AEF\u7528\u6237\u7070\u5EA6\u7684\u7684\u529F\u80FD\uFF0C\u901A\u8FC7\u6B64\u63D2\u4EF6\uFF0C\u4E0D\u4F46\u53EF\u4EE5\u7528\u4E8E\u4E1A\u52A1<code dir="auto">A/B\u5B9E\u9A8C</code>\uFF0C\u540C\u65F6\u901A\u8FC7<code dir="auto">\u53EF\u7070\u5EA6</code>\u914D\u5408<code dir="auto">\u53EF\u76D1\u63A7</code>,<code dir="auto">\u53EF\u56DE\u6EDA</code>\u7B56\u7565\u4FDD\u8BC1\u7CFB\u7EDF\u53D1\u5E03\u8FD0\u7EF4\u7684\u7A33\u5B9A\u6027\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">450</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>






















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">grayKey</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u6237ID\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u53EF\u4EE5\u6765\u81EACookie\u6216\u8005Header\u4E2D\uFF0C\u6BD4\u5982 userid\uFF0C\u5982\u679C\u6CA1\u6709\u586B\u5199\u5219\u4F7F\u7528<code dir="auto">rules[].grayTagKey</code>\u548C<code dir="auto">rules[].grayTagValue</code>\u8FC7\u6EE4\u7070\u5EA6\u89C4\u5219</td></tr><tr><td><code dir="auto">graySubKey</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u6237\u8EAB\u4EFD\u4FE1\u606F\u53EF\u80FD\u4EE5JSON\u5F62\u5F0F\u900F\u51FA\uFF0C\u6BD4\u5982\uFF1A<code dir="auto">userInfo:{ userCode:"001" }</code>,\u5F53\u524D\u4F8B\u5B50<code dir="auto">graySubKey</code>\u53D6\u503C\u4E3A<code dir="auto">userCode</code></td></tr><tr><td><code dir="auto">rules</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u7528\u6237\u5B9A\u4E49\u4E0D\u540C\u7684\u7070\u5EA6\u89C4\u5219\uFF0C\u9002\u914D\u4E0D\u540C\u7684\u7070\u5EA6\u573A\u666F</td></tr><tr><td><code dir="auto">rewrite</code></td><td>object</td><td>\u5FC5\u586B</td><td>-</td><td>\u91CD\u5199\u914D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8EOSS/CDN\u524D\u7AEF\u90E8\u7F72\u7684\u91CD\u5199\u914D\u7F6E</td></tr><tr><td><code dir="auto">baseDeployment</code></td><td>object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6EBase\u57FA\u7EBF\u89C4\u5219\u7684\u914D\u7F6E</td></tr><tr><td><code dir="auto">grayDeployments</code></td><td>array of object</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6EGray\u7070\u5EA6\u7684\u751F\u6548\u89C4\u5219\uFF0C\u4EE5\u53CA\u751F\u6548\u7248\u672C</td></tr></tbody></table>
<p><code dir="auto">rules</code>\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A</p>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u89C4\u5219\u540D\u79F0\u552F\u4E00\u6807\u8BC6\uFF0C\u548C<code dir="auto">deploy.gray[].name</code>\u8FDB\u884C\u5173\u8054\u751F\u6548</td></tr><tr><td><code dir="auto">grayKeyValue</code></td><td>array of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u6237ID \u767D\u540D\u5355\u5217\u8868</td></tr><tr><td><code dir="auto">grayTagKey</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u6237\u5206\u7C7B\u6253\u6807\u7684\u6807\u7B7Ekey\u503C\uFF0C\u6765\u81EACookie</td></tr><tr><td><code dir="auto">grayTagValue</code></td><td>array of string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u6237\u5206\u7C7B\u6253\u6807\u7684\u6807\u7B7Evalue\u503C\uFF0C\u6765\u81EACookie</td></tr></tbody></table>
<p><code dir="auto">rewrite</code>\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A</p>
<blockquote>
<p><code dir="auto">indexRouting</code>\u9996\u9875\u91CD\u5199\u548C<code dir="auto">fileRouting</code>\u6587\u4EF6\u91CD\u5199\uFF0C\u672C\u8D28\u90FD\u662F\u524D\u7F00\u5339\u914D\uFF0C\u6BD4\u5982<code dir="auto">/app1</code>: <code dir="auto">/mfe/app1/{version}/index.html</code>\u4EE3\u8868/app1\u4E3A\u524D\u7F00\u7684\u8BF7\u6C42\uFF0C\u8DEF\u7531\u5230<code dir="auto">/mfe/app1/{version}/index.html</code>\u9875\u9762\u4E0A\uFF0C\u5176\u4E2D<code dir="auto">{version}</code>\u4EE3\u8868\u7248\u672C\u53F7\uFF0C\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u88AB<code dir="auto">baseDeployment.version</code>\u6216\u8005<code dir="auto">grayDeployments[].version</code>\u52A8\u6001\u66FF\u6362\u3002</p>
</blockquote>
<blockquote>
<p><code dir="auto">{version}</code> \u4F5C\u4E3A\u4FDD\u7559\u5B57\u6BB5\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u88AB<code dir="auto">baseDeployment.version</code>\u6216\u8005<code dir="auto">grayDeployments[].version</code>\u52A8\u6001\u66FF\u6362\u524D\u7AEF\u7248\u672C\u3002</p>
</blockquote>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">host</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>host\u5730\u5740\uFF0C\u5982\u679C\u662FOSS\u5219\u8BBE\u7F6E\u4E3A VPC \u5185\u7F51\u8BBF\u95EE\u5730\u5740</td></tr><tr><td><code dir="auto">notFoundUri</code></td><td>string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>404 \u9875\u9762\u914D\u7F6E</td></tr><tr><td><code dir="auto">indexRouting</code></td><td>map of string to string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5B9A\u4E49\u9996\u9875\u91CD\u5199\u8DEF\u7531\u89C4\u5219\u3002\u6BCF\u4E2A\u952E (Key) \u8868\u793A\u9996\u9875\u7684\u8DEF\u7531\u8DEF\u5F84\uFF0C\u503C (Value) \u5219\u6307\u5411\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u952E\u4E3A <code dir="auto">/app1</code> \u5BF9\u5E94\u7684\u503C\u4E3A <code dir="auto">/mfe/app1/{version}/index.html</code>\u3002\u751F\u6548version\u4E3A<code dir="auto">0.0.1</code>\uFF0C \u8BBF\u95EE\u8DEF\u5F84\u4E3A <code dir="auto">/app1</code>\uFF0C\u5219\u91CD\u5B9A\u5411\u5230 <code dir="auto">/mfe/app1/0.0.1/index.html</code>\u3002</td></tr><tr><td><code dir="auto">fileRouting</code></td><td>map of string to string</td><td>\u975E\u5FC5\u586B</td><td>-</td><td>\u7528\u4E8E\u5B9A\u4E49\u8D44\u6E90\u6587\u4EF6\u91CD\u5199\u8DEF\u7531\u89C4\u5219\u3002\u6BCF\u4E2A\u952E (Key) \u8868\u793A\u8D44\u6E90\u8BBF\u95EE\u8DEF\u5F84\uFF0C\u503C (Value) \u5219\u6307\u5411\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u952E\u4E3A <code dir="auto">/app1/</code> \u5BF9\u5E94\u7684\u503C\u4E3A <code dir="auto">/mfe/app1/{version}</code>\u3002\u751F\u6548version\u4E3A<code dir="auto">0.0.1</code>\uFF0C\u8BBF\u95EE\u8DEF\u5F84\u4E3A <code dir="auto">/app1/js/a.js</code>\uFF0C\u5219\u91CD\u5B9A\u5411\u5230 <code dir="auto">/mfe/app1/0.0.1/js/a.js</code>\u3002</td></tr></tbody></table>
<p><code dir="auto">baseDeployment</code>\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A</p>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">version</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>Base\u7248\u672C\u7684\u7248\u672C\u53F7\uFF0C\u4F5C\u4E3A\u515C\u5E95\u7684\u7248\u672C</td></tr></tbody></table>
<p><code dir="auto">grayDeployments</code>\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A</p>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">version</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>Gray\u7248\u672C\u7684\u7248\u672C\u53F7\uFF0C\u5982\u679C\u547D\u4E2D\u7070\u5EA6\u89C4\u5219\uFF0C\u5219\u4F7F\u7528\u6B64\u7248\u672C\u3002\u5982\u679C\u662F\u975ECDN\u90E8\u7F72\uFF0C\u5728header\u6DFB\u52A0<code dir="auto">x-higress-tag</code></td></tr><tr><td><code dir="auto">backendVersion</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u540E\u7AEF\u7070\u5EA6\u7248\u672C\uFF0C\u4F1A\u5728<code dir="auto">XHR/Fetch</code>\u8BF7\u6C42\u7684header\u5934\u6DFB\u52A0 <code dir="auto">x-mse-tag</code>\u5230\u540E\u7AEF</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u89C4\u5219\u540D\u79F0\u548C<code dir="auto">rules[].name</code>\u5173\u8054\uFF0C</td></tr><tr><td><code dir="auto">enabled</code></td><td>boolean</td><td>\u5FC5\u586B</td><td>-</td><td>\u662F\u5426\u542F\u52A8\u5F53\u524D\u7070\u5EA6\u89C4\u5219</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u57FA\u7840\u914D\u7F6E">\u57FA\u7840\u914D\u7F6E</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userid</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">inner-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000001'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000005'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000002'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000003'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">level</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">baseDeployment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayDeployments</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grayKey: userid\x7Frules:\x7F- name: inner-user\x7F  grayKeyValue:\x7F  - &#x27;00000001&#x27;\x7F  - &#x27;00000005&#x27;\x7F- name: beta-user\x7F  grayKeyValue:\x7F  - &#x27;00000002&#x27;\x7F  - &#x27;00000003&#x27;\x7F  grayTagKey: level\x7F  grayTagValue:\x7F  - level3\x7F  - level5\x7FbaseDeployment:\x7F  version: base\x7FgrayDeployments:\x7F  - name: beta-user\x7F    version: gray\x7F    enabled: true"><div></div></button></div></figure></div>
<p>cookie\u4E2D\u7684\u7528\u6237\u552F\u4E00\u6807\u8BC6\u4E3A <code dir="auto">userid</code>\uFF0C\u5F53\u524D\u7070\u5EA6\u89C4\u5219\u914D\u7F6E\u4E86<code dir="auto">beta-user</code>\u7684\u89C4\u5219\u3002</p>
<p>\u5F53\u6EE1\u8DB3\u4E0B\u9762\u8C03\u8BD5\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528<code dir="auto">version: gray</code>\u7248\u672C</p>
<ul>
<li>cookie\u4E2D<code dir="auto">userid</code>\u7B49\u4E8E<code dir="auto">00000002</code>\u6216\u8005<code dir="auto">00000003</code></li>
<li>cookie\u4E2D<code dir="auto">level</code>\u7B49\u4E8E<code dir="auto">level3</code>\u6216\u8005<code dir="auto">level5</code>\u7684\u7528\u6237</li>
</ul>
<p>\u5426\u5219\u4F7F\u7528<code dir="auto">version: base</code>\u7248\u672C</p>
<h3 id="\u7528\u6237\u4FE1\u606F\u5B58\u5728json\u4E2D">\u7528\u6237\u4FE1\u606F\u5B58\u5728JSON\u4E2D</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appInfo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">graySubKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userId</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">inner-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000001'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000005'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000002'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000003'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">level</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">baseDeployment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayDeployments</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grayKey: appInfo\x7FgraySubKey: userId\x7Frules:\x7F- name: inner-user\x7F  grayKeyValue:\x7F  - &#x27;00000001&#x27;\x7F  - &#x27;00000005&#x27;\x7F- name: beta-user\x7F  grayKeyValue:\x7F  - &#x27;00000002&#x27;\x7F  - &#x27;00000003&#x27;\x7F  grayTagKey: level\x7F  grayTagValue:\x7F  - level3\x7F  - level5\x7FbaseDeployment:\x7F  version: base\x7FgrayDeployments:\x7F  - name: beta-user\x7F    version: gray\x7F    enabled: true"><div></div></button></div></figure></div>
<p>cookie\u5B58\u5728<code dir="auto">appInfo</code>\u7684JSON\u6570\u636E\uFF0C\u5176\u4E2D\u5305\u542B<code dir="auto">userId</code>\u5B57\u6BB5\u4E3A\u5F53\u524D\u7684\u552F\u4E00\u6807\u8BC6
\u5F53\u524D\u7070\u5EA6\u89C4\u5219\u914D\u7F6E\u4E86<code dir="auto">beta-user</code>\u7684\u89C4\u5219\u3002
\u5F53\u6EE1\u8DB3\u4E0B\u9762\u8C03\u8BD5\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528<code dir="auto">version: gray</code>\u7248\u672C</p>
<ul>
<li>cookie\u4E2D<code dir="auto">userid</code>\u7B49\u4E8E<code dir="auto">00000002</code>\u6216\u8005<code dir="auto">00000003</code></li>
<li>cookie\u4E2D<code dir="auto">level</code>\u7B49\u4E8E<code dir="auto">level3</code>\u6216\u8005<code dir="auto">level5</code>\u7684\u7528\u6237</li>
</ul>
<p>\u5426\u5219\u4F7F\u7528<code dir="auto">version: base</code>\u7248\u672C</p>
<h3 id="rewrite\u91CD\u5199\u914D\u7F6E">rewrite\u91CD\u5199\u914D\u7F6E</h3>
<blockquote>
<p>\u4E00\u822C\u7528\u4E8ECDN\u90E8\u7F72\u573A\u666F</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userid</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">inner-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000001'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000005'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000002'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000003'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">level</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rewrite</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">frontend-gray.oss-cn-shanghai-internal.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">notFoundUri</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/mfe/app1/dev/404.html</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">indexRouting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/app1</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}/index.html'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}/index.html'</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">fileRouting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/app1/</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">baseDeployment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayDeployments</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grayKey: userid\x7Frules:\x7F- name: inner-user\x7F  grayKeyValue:\x7F  - &#x27;00000001&#x27;\x7F  - &#x27;00000005&#x27;\x7F- name: beta-user\x7F  grayKeyValue:\x7F  - &#x27;00000002&#x27;\x7F  - &#x27;00000003&#x27;\x7F  grayTagKey: level\x7F  grayTagValue:\x7F  - level3\x7F  - level5\x7Frewrite:\x7F  host: frontend-gray.oss-cn-shanghai-internal.aliyuncs.com\x7F  notFoundUri: /mfe/app1/dev/404.html\x7F  indexRouting:\x7F    /app1: &#x27;/mfe/app1/{version}/index.html&#x27;\x7F    /: &#x27;/mfe/app1/{version}/index.html&#x27;,\x7F  fileRouting:\x7F    /: &#x27;/mfe/app1/{version}&#x27;\x7F    /app1/: &#x27;/mfe/app1/{version}&#x27;\x7FbaseDeployment:\x7F  version: base\x7FgrayDeployments:\x7F  - name: beta-user\x7F    version: gray\x7F    enabled: true"><div></div></button></div></figure></div>
<p><code dir="auto">{version}</code>\u4F1A\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u52A8\u6001\u66FF\u6362\u4E3A\u771F\u6B63\u7684\u7248\u672C</p>
<h4 id="indexrouting\u9996\u9875\u8DEF\u7531\u914D\u7F6E">indexRouting\uFF1A\u9996\u9875\u8DEF\u7531\u914D\u7F6E</h4>
<p>\u8BBF\u95EE <code dir="auto">/app1</code>, <code dir="auto">/app123</code>,<code dir="auto">/app1/index.html</code>, <code dir="auto">/app1/xxx</code>, <code dir="auto">/xxxx</code> \u90FD\u4F1A\u8DEF\u7531\u5230\u2019/mfe/app1/{version}/index.html\u2019</p>
<h4 id="filerouting\u6587\u4EF6\u8DEF\u7531\u914D\u7F6E">fileRouting\uFF1A\u6587\u4EF6\u8DEF\u7531\u914D\u7F6E</h4>
<p>\u4E0B\u9762\u6587\u4EF6\u6620\u5C04\u5747\u751F\u6548</p>
<ul>
<li><code dir="auto">/js/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/a.js</code></li>
<li><code dir="auto">/js/template/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/template/a.js</code></li>
<li><code dir="auto">/app1/js/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/a.js</code></li>
<li><code dir="auto">/app1/js/template/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/template/a.js</code></li>
</ul>`,n={title:"\u524D\u7AEF\u7070\u5EA6",keywords:["higress","frontend gray"],description:"\u524D\u7AEF\u7070\u5EA6\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/transformation/frontend-gray.md",d=void 0,p=function(){return"\n## \u529F\u80FD\u8BF4\u660E\n`frontend-gray`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u524D\u7AEF\u7528\u6237\u7070\u5EA6\u7684\u7684\u529F\u80FD\uFF0C\u901A\u8FC7\u6B64\u63D2\u4EF6\uFF0C\u4E0D\u4F46\u53EF\u4EE5\u7528\u4E8E\u4E1A\u52A1`A/B\u5B9E\u9A8C`\uFF0C\u540C\u65F6\u901A\u8FC7`\u53EF\u7070\u5EA6`\u914D\u5408`\u53EF\u76D1\u63A7`,`\u53EF\u56DE\u6EDA`\u7B56\u7565\u4FDD\u8BC1\u7CFB\u7EDF\u53D1\u5E03\u8FD0\u7EF4\u7684\u7A33\u5B9A\u6027\u3002\n\n## \u8FD0\u884C\u5C5E\u6027\n\n\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A`\u8BA4\u8BC1\u9636\u6BB5`\n\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A`450`\n\n\n## \u914D\u7F6E\u5B57\u6BB5\n| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B         | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                 |\n|----------------|--------------|----|-----|----------------------------------------------------------------------------------------------------|\n| `grayKey`         | string       | \u975E\u5FC5\u586B | -   | \u7528\u6237ID\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u53EF\u4EE5\u6765\u81EACookie\u6216\u8005Header\u4E2D\uFF0C\u6BD4\u5982 userid\uFF0C\u5982\u679C\u6CA1\u6709\u586B\u5199\u5219\u4F7F\u7528`rules[].grayTagKey`\u548C`rules[].grayTagValue`\u8FC7\u6EE4\u7070\u5EA6\u89C4\u5219 |\n| `graySubKey`    | string       | \u975E\u5FC5\u586B | -   | \u7528\u6237\u8EAB\u4EFD\u4FE1\u606F\u53EF\u80FD\u4EE5JSON\u5F62\u5F0F\u900F\u51FA\uFF0C\u6BD4\u5982\uFF1A`userInfo:{ userCode:\"001\" }`,\u5F53\u524D\u4F8B\u5B50`graySubKey`\u53D6\u503C\u4E3A`userCode`                   |\n| `rules`      | array of object | \u5FC5\u586B | -   | \u7528\u6237\u5B9A\u4E49\u4E0D\u540C\u7684\u7070\u5EA6\u89C4\u5219\uFF0C\u9002\u914D\u4E0D\u540C\u7684\u7070\u5EA6\u573A\u666F                                                                              |\n| `rewrite`      | object | \u5FC5\u586B | -   | \u91CD\u5199\u914D\u7F6E\uFF0C\u4E00\u822C\u7528\u4E8EOSS/CDN\u524D\u7AEF\u90E8\u7F72\u7684\u91CD\u5199\u914D\u7F6E                                                                           |\n| `baseDeployment` | object   | \u975E\u5FC5\u586B | -   | \u914D\u7F6EBase\u57FA\u7EBF\u89C4\u5219\u7684\u914D\u7F6E                                                                                      |\n| `grayDeployments` |  array of object   | \u975E\u5FC5\u586B | -   | \u914D\u7F6EGray\u7070\u5EA6\u7684\u751F\u6548\u89C4\u5219\uFF0C\u4EE5\u53CA\u751F\u6548\u7248\u672C                                                                               |\n\n`rules`\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A\n\n| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B         | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                |\n|----------------|--------------|------|-----|-----------------------------------------------------------------------------------|\n| `name`         | string       | \u5FC5\u586B   | -   | \u89C4\u5219\u540D\u79F0\u552F\u4E00\u6807\u8BC6\uFF0C\u548C`deploy.gray[].name`\u8FDB\u884C\u5173\u8054\u751F\u6548                                          |\n| `grayKeyValue`    | array of string       | \u975E\u5FC5\u586B   | -   | \u7528\u6237ID \u767D\u540D\u5355\u5217\u8868 |\n| `grayTagKey`      | string | \u975E\u5FC5\u586B  | -   | \u7528\u6237\u5206\u7C7B\u6253\u6807\u7684\u6807\u7B7Ekey\u503C\uFF0C\u6765\u81EACookie                                                             |\n| `grayTagValue` | array of string   | \u975E\u5FC5\u586B  | -   | \u7528\u6237\u5206\u7C7B\u6253\u6807\u7684\u6807\u7B7Evalue\u503C\uFF0C\u6765\u81EACookie                                                         |\n\n`rewrite`\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A\n> `indexRouting`\u9996\u9875\u91CD\u5199\u548C`fileRouting`\u6587\u4EF6\u91CD\u5199\uFF0C\u672C\u8D28\u90FD\u662F\u524D\u7F00\u5339\u914D\uFF0C\u6BD4\u5982`/app1`: `/mfe/app1/{version}/index.html`\u4EE3\u8868/app1\u4E3A\u524D\u7F00\u7684\u8BF7\u6C42\uFF0C\u8DEF\u7531\u5230`/mfe/app1/{version}/index.html`\u9875\u9762\u4E0A\uFF0C\u5176\u4E2D`{version}`\u4EE3\u8868\u7248\u672C\u53F7\uFF0C\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u88AB`baseDeployment.version`\u6216\u8005`grayDeployments[].version`\u52A8\u6001\u66FF\u6362\u3002\n\n> `{version}` \u4F5C\u4E3A\u4FDD\u7559\u5B57\u6BB5\uFF0C\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u4F1A\u88AB`baseDeployment.version`\u6216\u8005`grayDeployments[].version`\u52A8\u6001\u66FF\u6362\u524D\u7AEF\u7248\u672C\u3002\n\n\n| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B         | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                           |\n|------------|--------------|------|-----|------------------------------|\n| `host`     | string       | \u975E\u5FC5\u586B  | -   | host\u5730\u5740\uFF0C\u5982\u679C\u662FOSS\u5219\u8BBE\u7F6E\u4E3A VPC \u5185\u7F51\u8BBF\u95EE\u5730\u5740 |\n| `notFoundUri` | string       | \u975E\u5FC5\u586B  | -   | 404 \u9875\u9762\u914D\u7F6E                     |\n| `indexRouting`    | map of string to string       | \u975E\u5FC5\u586B  | -   | \u7528\u4E8E\u5B9A\u4E49\u9996\u9875\u91CD\u5199\u8DEF\u7531\u89C4\u5219\u3002\u6BCF\u4E2A\u952E (Key) \u8868\u793A\u9996\u9875\u7684\u8DEF\u7531\u8DEF\u5F84\uFF0C\u503C (Value) \u5219\u6307\u5411\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u952E\u4E3A `/app1` \u5BF9\u5E94\u7684\u503C\u4E3A `/mfe/app1/{version}/index.html`\u3002\u751F\u6548version\u4E3A`0.0.1`\uFF0C \u8BBF\u95EE\u8DEF\u5F84\u4E3A `/app1`\uFF0C\u5219\u91CD\u5B9A\u5411\u5230 `/mfe/app1/0.0.1/index.html`\u3002                     |\n| `fileRouting`     | map of string to string       | \u975E\u5FC5\u586B  | -   | \u7528\u4E8E\u5B9A\u4E49\u8D44\u6E90\u6587\u4EF6\u91CD\u5199\u8DEF\u7531\u89C4\u5219\u3002\u6BCF\u4E2A\u952E (Key) \u8868\u793A\u8D44\u6E90\u8BBF\u95EE\u8DEF\u5F84\uFF0C\u503C (Value) \u5219\u6307\u5411\u91CD\u5B9A\u5411\u7684\u76EE\u6807\u6587\u4EF6\u3002\u4F8B\u5982\uFF0C\u952E\u4E3A `/app1/` \u5BF9\u5E94\u7684\u503C\u4E3A `/mfe/app1/{version}`\u3002\u751F\u6548version\u4E3A`0.0.1`\uFF0C\u8BBF\u95EE\u8DEF\u5F84\u4E3A `/app1/js/a.js`\uFF0C\u5219\u91CD\u5B9A\u5411\u5230 `/mfe/app1/0.0.1/js/a.js`\u3002                     |\n\n`baseDeployment`\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A\n\n| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B         | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                |\n|----------------|--------------|------|-----|-----------------------------------------------------------------------------------|\n| `version`         | string       | \u5FC5\u586B   | -   | Base\u7248\u672C\u7684\u7248\u672C\u53F7\uFF0C\u4F5C\u4E3A\u515C\u5E95\u7684\u7248\u672C                                         |\n\n`grayDeployments`\u5B57\u6BB5\u914D\u7F6E\u8BF4\u660E\uFF1A\n\n| \u540D\u79F0     | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                              |\n|--------|--------|------|-----|-------------------------------------------------|\n| `version`  | string | \u5FC5\u586B   | -   | Gray\u7248\u672C\u7684\u7248\u672C\u53F7\uFF0C\u5982\u679C\u547D\u4E2D\u7070\u5EA6\u89C4\u5219\uFF0C\u5219\u4F7F\u7528\u6B64\u7248\u672C\u3002\u5982\u679C\u662F\u975ECDN\u90E8\u7F72\uFF0C\u5728header\u6DFB\u52A0`x-higress-tag`                     |\n| `backendVersion`  | string | \u5FC5\u586B   | -   | \u540E\u7AEF\u7070\u5EA6\u7248\u672C\uFF0C\u4F1A\u5728`XHR/Fetch`\u8BF7\u6C42\u7684header\u5934\u6DFB\u52A0 `x-mse-tag`\u5230\u540E\u7AEF |\n| `name` | string | \u5FC5\u586B   | -   | \u89C4\u5219\u540D\u79F0\u548C`rules[].name`\u5173\u8054\uFF0C                          |\n| `enabled`  | boolean   | \u5FC5\u586B   | -   | \u662F\u5426\u542F\u52A8\u5F53\u524D\u7070\u5EA6\u89C4\u5219                                      |\n\n## \u914D\u7F6E\u793A\u4F8B\n### \u57FA\u7840\u914D\u7F6E\n```yml\ngrayKey: userid\nrules:\n- name: inner-user\n  grayKeyValue:\n  - '00000001'\n  - '00000005'\n- name: beta-user\n  grayKeyValue:\n  - '00000002'\n  - '00000003'\n  grayTagKey: level\n  grayTagValue:\n  - level3\n  - level5\nbaseDeployment:\n  version: base\ngrayDeployments:\n  - name: beta-user\n    version: gray\n    enabled: true\n```\n\n\ncookie\u4E2D\u7684\u7528\u6237\u552F\u4E00\u6807\u8BC6\u4E3A `userid`\uFF0C\u5F53\u524D\u7070\u5EA6\u89C4\u5219\u914D\u7F6E\u4E86`beta-user`\u7684\u89C4\u5219\u3002\n\n\u5F53\u6EE1\u8DB3\u4E0B\u9762\u8C03\u8BD5\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528`version: gray`\u7248\u672C\n- cookie\u4E2D`userid`\u7B49\u4E8E`00000002`\u6216\u8005`00000003`\n- cookie\u4E2D`level`\u7B49\u4E8E`level3`\u6216\u8005`level5`\u7684\u7528\u6237\n\n\u5426\u5219\u4F7F\u7528`version: base`\u7248\u672C\n\n### \u7528\u6237\u4FE1\u606F\u5B58\u5728JSON\u4E2D\n\n```yml\ngrayKey: appInfo\ngraySubKey: userId\nrules:\n- name: inner-user\n  grayKeyValue:\n  - '00000001'\n  - '00000005'\n- name: beta-user\n  grayKeyValue:\n  - '00000002'\n  - '00000003'\n  grayTagKey: level\n  grayTagValue:\n  - level3\n  - level5\nbaseDeployment:\n  version: base\ngrayDeployments:\n  - name: beta-user\n    version: gray\n    enabled: true\n```\n\ncookie\u5B58\u5728`appInfo`\u7684JSON\u6570\u636E\uFF0C\u5176\u4E2D\u5305\u542B`userId`\u5B57\u6BB5\u4E3A\u5F53\u524D\u7684\u552F\u4E00\u6807\u8BC6\n\u5F53\u524D\u7070\u5EA6\u89C4\u5219\u914D\u7F6E\u4E86`beta-user`\u7684\u89C4\u5219\u3002\n\u5F53\u6EE1\u8DB3\u4E0B\u9762\u8C03\u8BD5\u7684\u65F6\u5019\uFF0C\u4F1A\u4F7F\u7528`version: gray`\u7248\u672C\n- cookie\u4E2D`userid`\u7B49\u4E8E`00000002`\u6216\u8005`00000003`\n- cookie\u4E2D`level`\u7B49\u4E8E`level3`\u6216\u8005`level5`\u7684\u7528\u6237\n\n\u5426\u5219\u4F7F\u7528`version: base`\u7248\u672C\n\n### rewrite\u91CD\u5199\u914D\u7F6E\n> \u4E00\u822C\u7528\u4E8ECDN\u90E8\u7F72\u573A\u666F\n```yml\ngrayKey: userid\nrules:\n- name: inner-user\n  grayKeyValue:\n  - '00000001'\n  - '00000005'\n- name: beta-user\n  grayKeyValue:\n  - '00000002'\n  - '00000003'\n  grayTagKey: level\n  grayTagValue:\n  - level3\n  - level5\nrewrite:\n  host: frontend-gray.oss-cn-shanghai-internal.aliyuncs.com\n  notFoundUri: /mfe/app1/dev/404.html\n  indexRouting:\n    /app1: '/mfe/app1/{version}/index.html'\n    /: '/mfe/app1/{version}/index.html',\n  fileRouting:\n    /: '/mfe/app1/{version}'\n    /app1/: '/mfe/app1/{version}'\nbaseDeployment:\n  version: base\ngrayDeployments:\n  - name: beta-user\n    version: gray\n    enabled: true\n```\n\n`{version}`\u4F1A\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u52A8\u6001\u66FF\u6362\u4E3A\u771F\u6B63\u7684\u7248\u672C\n\n#### indexRouting\uFF1A\u9996\u9875\u8DEF\u7531\u914D\u7F6E\n\u8BBF\u95EE `/app1`, `/app123`,`/app1/index.html`, `/app1/xxx`, `/xxxx` \u90FD\u4F1A\u8DEF\u7531\u5230'/mfe/app1/{version}/index.html'\n\n#### fileRouting\uFF1A\u6587\u4EF6\u8DEF\u7531\u914D\u7F6E\n\u4E0B\u9762\u6587\u4EF6\u6620\u5C04\u5747\u751F\u6548\n- `/js/a.js` => `/mfe/app1/v1.0.0/js/a.js`\n- `/js/template/a.js` => `/mfe/app1/v1.0.0/js/template/a.js`\n- `/app1/js/a.js` => `/mfe/app1/v1.0.0/js/a.js`\n- `/app1/js/template/a.js` => `/mfe/app1/v1.0.0/js/template/a.js`\n\n"},i=function(){return e},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u57FA\u7840\u914D\u7F6E",text:"\u57FA\u7840\u914D\u7F6E"},{depth:3,slug:"\u7528\u6237\u4FE1\u606F\u5B58\u5728json\u4E2D",text:"\u7528\u6237\u4FE1\u606F\u5B58\u5728JSON\u4E2D"},{depth:3,slug:"rewrite\u91CD\u5199\u914D\u7F6E",text:"rewrite\u91CD\u5199\u914D\u7F6E"},{depth:4,slug:"indexrouting\u9996\u9875\u8DEF\u7531\u914D\u7F6E",text:"indexRouting\uFF1A\u9996\u9875\u8DEF\u7531\u914D\u7F6E"},{depth:4,slug:"filerouting\u6587\u4EF6\u8DEF\u7531\u914D\u7F6E",text:"fileRouting\uFF1A\u6587\u4EF6\u8DEF\u7531\u914D\u7F6E"}]},s=o((f,m,x)=>{const{layout:h,...t}=n;return t.file=a,t.url=d,r`${y()}${v(e)}`})});export{s as Content,g as __tla,i as compiledContent,s as default,a as file,n as frontmatter,l as getHeadings,p as rawContent,d as url};
