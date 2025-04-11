import{c as l,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as y,__tla as u}from"./constant.jgQmvKtB.js";import{__tla as x}from"./astro/assets-service.BhtN0nM5.js";let a,i,s,t,c,p,d,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">hmac-auth</code>\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HMAC \u7B97\u6CD5\u4E3A HTTP \u8BF7\u6C42\u751F\u6210\u4E0D\u53EF\u4F2A\u9020\u7684\u7B7E\u540D\uFF0C\u5E76\u57FA\u4E8E\u7B7E\u540D\u5B9E\u73B0\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u9274\u6743</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">330</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<p><strong>\u6CE8\u610F\uFF1A</strong></p>
<ul>
<li>\u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728</li>
<li>\u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684header\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A<code dir="auto">X-Mse-Consumer</code>\u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002</li>
</ul>
<h3 id="\u8BA4\u8BC1\u914D\u7F6E">\u8BA4\u8BC1\u914D\u7F6E</h3>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">global_auth</code></td><td>bool</td><td>\u9009\u586B\uFF08<strong>\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E</strong>\uFF09</td><td>-</td><td>\u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF0C\u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09\u3002</td></tr><tr><td><code dir="auto">consumers</code></td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1</td></tr><tr><td><code dir="auto">date_offset</code></td><td>number</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u5141\u8BB8\u7684\u5BA2\u6237\u7AEF\u6700\u5927\u65F6\u95F4\u504F\u79FB\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u6839\u636E\u8BF7\u6C42\u5934<code dir="auto">Date</code>\u89E3\u6790\u5BA2\u6237\u7AEF UTC \u65F6\u95F4\uFF0C\u53EF\u7528\u4E8E\u907F\u514D\u8BF7\u6C42\u91CD\u653E\uFF1B\u672A\u914D\u7F6E\u65F6\uFF0C\u4E0D\u505A\u6821\u9A8C</td></tr></tbody></table>
<p><code dir="auto">consumers</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">key</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u4ECE\u8BF7\u6C42\u7684<code dir="auto">x-ca-key</code>\u5934\u4E2D\u63D0\u53D6\u7684key</td></tr><tr><td><code dir="auto">secret</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u751F\u6210\u7B7E\u540D\u7684secret</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u8BE5consumer\u7684\u540D\u79F0</td></tr></tbody></table>
<h3 id="\u9274\u6743\u914D\u7F6E\u975E\u5FC5\u9700">\u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09</h3>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">allow</code></td><td>array of string</td><td>\u9009\u586B(<strong>\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E</strong>)</td><td>-</td><td>\u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743">\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743</h3>
<p>\u5728\u5B9E\u4F8B\u7EA7\u522B\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E, \u6CE8\u610F<code dir="auto">key</code>\u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: false\x7Fconsumers:\x7F- key: appKey-example-1\x7F  secret: appSecret-example-1\x7F  name: consumer-1\x7F- key: appKey-example-2\x7F  secret: appSecret-example-2\x7F  name: consumer-2"><div></div></button></div></figure></div>
<p>route-a\u548Croute-b\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer1"><div></div></button></div></figure></div>
<p>\u5728*.example.com\u548Ctest.com\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow:\x7F- consumer2"><div></div></button></div></figure></div>
<p>\u82E5\u662F\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF0C\u6B64\u4F8B\u6307\u5B9A\u7684route-a\u548Croute-b\u5373\u5728\u521B\u5EFA\u7F51\u5173\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer1\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002</p>
<p>\u6B64\u4F8B\u6307\u5B9A\u7684*.example.com\u548Ctest.com\u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer2\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u88AB\u5141\u8BB8\u8BBF\u95EE\u3002</p>
<h3 id="\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F">\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F</h3>
<p>\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F Hamc Auth \u8BA4\u8BC1\uFF0C\u6240\u6709\u8BF7\u6C42\u5747\u9700\u8981\u7ECF\u8FC7\u8BA4\u8BC1\u540E\u624D\u80FD\u8BBF\u95EE\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appKey-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appSecret-example-2</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer-2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- key: appKey-example-1\x7F  secret: appSecret-example-1\x7F  name: consumer-1\x7F- key: appKey-example-2\x7F  secret: appSecret-example-2\x7F  name: consumer-2"><div></div></button></div></figure></div>
<h2 id="\u7B7E\u540D\u673A\u5236\u8BF4\u660E">\u7B7E\u540D\u673A\u5236\u8BF4\u660E</h2>
<h3 id="\u914D\u7F6E\u51C6\u5907">\u914D\u7F6E\u51C6\u5907</h3>
<p>\u5982\u4E0A\u6307\u5F15\uFF0C\u5728\u63D2\u4EF6\u914D\u7F6E\u4E2D\u914D\u7F6E\u751F\u6210\u548C\u9A8C\u8BC1\u7B7E\u540D\u9700\u8981\u7528\u7684\u51ED\u8BC1\u914D\u7F6E</p>
<ul>
<li>key: \u7528\u4E8E\u8BF7\u6C42\u5934 <code dir="auto">x-ca-key</code> \u4E2D\u8BBE\u7F6E</li>
<li>secret: \u7528\u4E8E\u751F\u6210\u8BF7\u6C42\u7B7E\u540D</li>
</ul>
<h3 id="\u5BA2\u6237\u7AEF\u7B7E\u540D\u751F\u6210\u65B9\u5F0F">\u5BA2\u6237\u7AEF\u7B7E\u540D\u751F\u6210\u65B9\u5F0F</h3>
<h4 id="\u6D41\u7A0B\u7B80\u4ECB">\u6D41\u7A0B\u7B80\u4ECB</h4>
<p>\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u4E00\u5171\u5206\u4E09\u6B65\u5904\u7406\uFF1A</p>
<ol>
<li>
<p>\u4ECE\u539F\u59CB\u8BF7\u6C42\u4E2D\u63D0\u53D6\u5173\u952E\u6570\u636E\uFF0C\u5F97\u5230\u4E00\u4E2A\u7528\u6765\u7B7E\u540D\u7684\u5B57\u7B26\u4E32</p>
</li>
<li>
<p>\u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u548C\u914D\u7F6E\u7684 <code dir="auto">secret</code> \u5BF9\u5173\u952E\u6570\u636E\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\uFF0C\u5F97\u5230\u7B7E\u540D</p>
</li>
<li>
<p>\u5C06\u7B7E\u540D\u6240\u76F8\u5173\u7684\u6240\u6709\u5934\u52A0\u5165\u5230\u539F\u59CBHTTP\u8BF7\u6C42\u4E2D\uFF0C\u5F97\u5230\u6700\u7EC8HTTP\u8BF7\u6C42</p>
</li>
</ol>
<p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="\u7B7E\u540D\u4E32\u63D0\u53D6\u6D41\u7A0B">\u7B7E\u540D\u4E32\u63D0\u53D6\u6D41\u7A0B</h4>
<p>\u5BA2\u6237\u7AEF\u9700\u8981\u4ECEHttp\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51FA\u5173\u952E\u6570\u636E\uFF0C\u7EC4\u5408\u6210\u4E00\u4E2A\u7B7E\u540D\u4E32\uFF0C\u751F\u6210\u7684\u7B7E\u540D\u4E32\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTPMethod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Accept</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-MD5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Date</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">PathAndParameters</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTPMethod\x7FAccept\x7FContent-MD5\x7FContent-Type\x7FDate\x7FHeaders\x7FPathAndParameters"><div></div></button></div></figure></div>
<p>\u4EE5\u4E0A7\u4E2A\u5B57\u6BB5\u6784\u6210\u6574\u4E2A\u7B7E\u540D\u4E32\uFF0C\u5B57\u6BB5\u4E4B\u95F4\u4F7F\u7528\\n\u95F4\u9694\uFF0C\u5982\u679CHeaders\u4E3A\u7A7A\uFF0C\u5219\u4E0D\u9700\u8981\u52A0\\n\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5982\u679C\u4E3A\u7A7A\u90FD\u9700\u8981\u4FDD\u7559\\n\u3002\u7B7E\u540D\u5927\u5C0F\u5199\u654F\u611F\u3002\u4E0B\u9762\u4ECB\u7ECD\u4E0B\u6BCF\u4E2A\u5B57\u6BB5\u7684\u63D0\u53D6\u89C4\u5219\uFF1A</p>
<ul>
<li>
<p>HTTPMethod\uFF1AHTTP\u7684\u65B9\u6CD5\uFF0C\u5168\u90E8\u5927\u5199\uFF0C\u6BD4\u5982POST</p>
</li>
<li>
<p>Accept\uFF1A\u8BF7\u6C42\u4E2D\u7684Accept\u5934\u7684\u503C\uFF0C\u53EF\u4E3A\u7A7A\u3002\u5EFA\u8BAE\u663E\u5F0F\u8BBE\u7F6E Accept Header\u3002\u5F53 Accept \u4E3A\u7A7A\u65F6\uFF0C\u90E8\u5206 Http \u5BA2\u6237\u7AEF\u4F1A\u7ED9 Accept \u8BBE\u7F6E\u9ED8\u8BA4\u503C\u4E3A <code dir="auto">*/*</code>\uFF0C\u5BFC\u81F4\u7B7E\u540D\u6821\u9A8C\u5931\u8D25\u3002</p>
</li>
<li>
<p>Content-MD5\uFF1A\u8BF7\u6C42\u4E2D\u7684Content-MD5\u5934\u7684\u503C\uFF0C\u53EF\u4E3A\u7A7A\u53EA\u6709\u5728\u8BF7\u6C42\u5B58\u5728Body\u4E14Body\u4E3A\u975EForm\u5F62\u5F0F\u65F6\u624D\u8BA1\u7B97Content-MD5\u5934\uFF0C\u4E0B\u9762\u662FJava\u7684Content-MD5\u503C\u7684\u53C2\u8003\u8BA1\u7B97\u65B9\u5F0F\uFF1A</p>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">String content</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">MD5 </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Base64.</span><span style="--0:#B392F0">encodeBase64</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">MD5</span><span style="--0:#E1E4E8">(bodyStream.</span><span style="--0:#B392F0">getbytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">)));</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getbytes(&#x22;UTF-8&#x22;)));"><div></div></button></div></figure></div>
<ul>
<li>
<p>Content-Type\uFF1A\u8BF7\u6C42\u4E2D\u7684Content-Type\u5934\u7684\u503C\uFF0C\u53EF\u4E3A\u7A7A</p>
</li>
<li>
<p>Date\uFF1A\u8BF7\u6C42\u4E2D\u7684Date\u5934\u7684\u503C\uFF0C\u5F53\u672A\u5F00\u542F<code dir="auto">date_offset</code>\u914D\u7F6E\u65F6\uFF0C\u53EF\u4E3A\u7A7A\uFF0C\u5426\u5219\u5C06\u7528\u4E8E\u65F6\u95F4\u504F\u79FB\u6821\u9A8C</p>
</li>
<li>
<p>Headers\uFF1A\u7528\u6237\u53EF\u4EE5\u9009\u53D6\u6307\u5B9A\u7684header\u53C2\u4E0E\u7B7E\u540D\uFF0C\u5173\u4E8Eheader\u7684\u7B7E\u540D\u4E32\u62FC\u63A5\u65B9\u5F0F\u6709\u4EE5\u4E0B\u89C4\u5219\uFF1A</p>
<ul>
<li>\u53C2\u4E0E\u7B7E\u540D\u8BA1\u7B97\u7684Header\u7684Key\u6309\u7167\u5B57\u5178\u6392\u5E8F\u540E\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u62FC\u63A5</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKey2 + ":" + HeaderValue2 + "\\n"\\+</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HeaderKeyN + ":" + HeaderValueN + "\\n"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HeaderKey1 + &#x22;:&#x22; + HeaderValue1 + &#x22;\\n&#x22;\\+\x7FHeaderKey2 + &#x22;:&#x22; + HeaderValue2 + &#x22;\\n&#x22;\\+\x7F...\x7FHeaderKeyN + &#x22;:&#x22; + HeaderValueN + &#x22;\\n&#x22;"><div></div></button></div></figure></div>
<ul>
<li>\u67D0\u4E2AHeader\u7684Value\u4E3A\u7A7A\uFF0C\u5219\u4F7F\u7528HeaderKey+\u201D:\u201D+\u201C\\n\u201D\u53C2\u4E0E\u7B7E\u540D\uFF0C\u9700\u8981\u4FDD\u7559Key\u548C\u82F1\u6587\u5192\u53F7</li>
<li>\u6240\u6709\u53C2\u4E0E\u7B7E\u540D\u7684Header\u7684Key\u7684\u96C6\u5408\u4F7F\u7528\u82F1\u6587\u9017\u53F7\u5206\u5272\u653E\u5230Key\u4E3AX-Ca-Signature-Headers\u7684Header\u4E2D</li>
<li>\u4EE5\u4E0BHeader\u4E0D\u53C2\u4E0EHeader\u7B7E\u540D\u8BA1\u7B97\uFF1AX-Ca-Signature\u3001X-Ca-Signature-Headers\u3001Accept\u3001Content-MD5\u3001Content-Type\u3001Date</li>
</ul>
</li>
<li>
<p>PathAndParameters: \u8FD9\u4E2A\u5B57\u6BB5\u5305\u542BPath\uFF0CQuery\u548CForm\u4E2D\u7684\u6240\u6709\u53C2\u6570\uFF0C\u5177\u4F53\u7EC4\u7EC7\u5F62\u5F0F\u5982\u4E0B</p>
</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Path + "?" + Key1 + "=" + Value1 + "&#x26;" + Key2 + "=" + Value2 + ... "&#x26;" + KeyN + "=" + ValueN</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Path + &#x22;?&#x22; + Key1 + &#x22;=&#x22; + Value1 + &#x22;&#x26;&#x22; + Key2 + &#x22;=&#x22; + Value2 + ... &#x22;&#x26;&#x22; + KeyN + &#x22;=&#x22; + ValueN"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\uFF1A</p>
<ol>
<li>
<p>Query\u548CForm\u53C2\u6570\u5BF9\u7684Key\u6309\u7167\u5B57\u5178\u6392\u5E8F\u540E\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u5F0F\u62FC\u63A5</p>
</li>
<li>
<p>Query\u548CForm\u53C2\u6570\u4E3A\u7A7A\u65F6\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528Path\uFF0C\u4E0D\u9700\u8981\u6DFB\u52A0?</p>
</li>
<li>
<p>\u53C2\u6570\u7684Value\u4E3A\u7A7A\u65F6\u53EA\u4FDD\u7559Key\u53C2\u4E0E\u7B7E\u540D\uFF0C\u7B49\u53F7\u4E0D\u9700\u8981\u518D\u52A0\u5165\u7B7E\u540D</p>
</li>
<li>
<p>Query\u548CForm\u5B58\u5728\u6570\u7EC4\u53C2\u6570\u65F6\uFF08key\u76F8\u540C\uFF0Cvalue\u4E0D\u540C\u7684\u53C2\u6570\uFF09 \uFF0C\u53D6\u7B2C\u4E00\u4E2AValue\u53C2\u4E0E\u7B7E\u540D\u8BA1\u7B97</p>
</li>
</ol>
<h4 id="\u7B7E\u540D\u4E32\u63D0\u53D6\u793A\u4F8B">\u7B7E\u540D\u4E32\u63D0\u53D6\u793A\u4F8B</h4>
<p>\u521D\u59CB\u7684HTTP\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789"><div></div></button></div></figure></div>
<p>\u751F\u6210\u7684\u6B63\u786E\u7B7E\u540D\u4E32\u4E3A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST\x7Fapplication/json; charset=utf-8\x7Fapplication/x-www-form-urlencoded; charset=utf-8\x7FWed, 09 May 2018 13:30:29 GMT+00:00\x7Fx-ca-key:203753385\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fx-ca-signature-method:HmacSHA256\x7Fx-ca-timestamp:1525872629832\x7F/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming"><div></div></button></div></figure></div>
<h4 id="\u7B7E\u540D\u8BA1\u7B97\u6D41\u7A0B">\u7B7E\u540D\u8BA1\u7B97\u6D41\u7A0B</h4>
<p>\u5BA2\u6237\u7AEF\u4ECEHTTP\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51FA\u5173\u952E\u6570\u636E\u7EC4\u88C5\u6210\u7B7E\u540D\u4E32\u540E\uFF0C\u9700\u8981\u5BF9\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u53CA\u7F16\u7801\u5904\u7406\uFF0C\u5F62\u6210\u6700\u7EC8\u7684\u7B7E\u540D</p>
<p>\u5177\u4F53\u7684\u52A0\u5BC6\u5F62\u5F0F\u5982\u4E0B\uFF0C\u5176\u4E2D <code dir="auto">stringToSign</code> \u662F\u63D0\u53D6\u51FA\u6765\u7684\u7B7E\u540D\u4E32\uFF0C<code dir="auto">secret</code> \u5C31\u662F\u63D2\u4EF6\u914D\u7F6E\u4E2D\u586B\u5199\u7684\uFF0C<code dir="auto">sign</code> \u662F\u6700\u7EC8\u751F\u6210\u7684\u7B7E\u540D\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">Mac hmacSha256 </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Mac.</span><span style="--0:#B392F0">getInstance</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] secretBytes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> secret.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">hmacSha256.</span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">SecretKeySpec</span><span style="--0:#E1E4E8">(secretBytes, </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">, secretBytes.length, </span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] result </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmacSha256.</span><span style="--0:#B392F0">doFinal</span><span style="--0:#E1E4E8">(stringToSign.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">String sign </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Base64.</span><span style="--0:#B392F0">encodeBase64String</span><span style="--0:#E1E4E8">(result);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Mac hmacSha256 = Mac.getInstance(&#x22;HmacSHA256&#x22;);\x7Fbyte[] secretBytes = secret.getBytes(&#x22;UTF-8&#x22;);\x7FhmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, &#x22;HmacSHA256&#x22;));\x7Fbyte[] result = hmacSha256.doFinal(stringToSign.getBytes(&#x22;UTF-8&#x22;));\x7FString sign = Base64.encodeBase64String(result);"><div></div></button></div></figure></div>
<p>\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5C31\u662F\u5C06 <code dir="auto">stringToSign</code> \u4F7F\u7528UTF-8\u89E3\u7801\u540E\u5F97\u5230Byte\u6570\u7EC4\uFF0C\u7136\u540E\u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u5BF9Byte\u6570\u7EC4\u8FDB\u884C\u52A0\u5BC6\uFF0C\u7136\u540E\u4F7F\u7528Base64\u7B97\u6CD5\u8FDB\u884C\u7F16\u7801\uFF0C\u5F62\u6210\u6700\u7EC8\u7684\u7B7E\u540D\u3002</p>
<h4 id="\u6DFB\u52A0\u7B7E\u540D\u6D41\u7A0B">\u6DFB\u52A0\u7B7E\u540D\u6D41\u7A0B</h4>
<p>\u5BA2\u6237\u7AEF\u9700\u8981\u5C06\u4EE5\u4E0B\u56DB\u4E2AHeader\u653E\u5728HTTP\u8BF7\u6C42\u4E2D\u4F20\u8F93\u7ED9API\u7F51\u5173\uFF0C\u8FDB\u884C\u7B7E\u540D\u6821\u9A8C\uFF1A</p>
<ul>
<li>
<p>x-ca-key\uFF1A\u53D6\u503CAPP Key\uFF0C\u5FC5\u9009</p>
</li>
<li>
<p>x-ca-signature-method\uFF1A\u7B7E\u540D\u7B97\u6CD5\uFF0C\u53D6\u503CHmacSHA256\u6216\u8005HmacSHA1\uFF0C\u53EF\u9009\uFF0C\u9ED8\u8BA4\u503C\u4E3AHmacSHA256</p>
</li>
<li>
<p>x-ca-signature-headers\uFF1A\u6240\u6709\u7B7E\u540D\u5934\u7684Key\u7684\u96C6\u5408\uFF0C\u4F7F\u7528\u82F1\u6587\u9017\u53F7\u5206\u9694\uFF0C\u53EF\u9009</p>
</li>
<li>
<p>x-ca-signature\uFF1A\u7B7E\u540D\uFF0C\u5FC5\u9009</p>
</li>
</ul>
<p>\u4E0B\u9762\u662F\u643A\u5E26\u7B7E\u540D\u7684\u6574\u4E2AHTTP\u8BF7\u6C42\u7684\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fx-ca-key:203753385\x7Fx-ca-signature-method:HmacSHA256\x7Fx-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method\x7Fx-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789"><div></div></button></div></figure></div>
<h3 id="\u670D\u52A1\u7AEF\u7B7E\u540D\u9A8C\u8BC1\u65B9\u5F0F">\u670D\u52A1\u7AEF\u7B7E\u540D\u9A8C\u8BC1\u65B9\u5F0F</h3>
<h4 id="\u6D41\u7A0B\u7B80\u4ECB-1">\u6D41\u7A0B\u7B80\u4ECB</h4>
<p>\u670D\u52A1\u5668\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u7B7E\u540D\u4E00\u5171\u5206\u56DB\u6B65\u5904\u7406\uFF1A</p>
<ol>
<li>
<p>\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u63D0\u53D6\u5173\u952E\u6570\u636E\uFF0C\u5F97\u5230\u4E00\u4E2A\u7528\u6765\u7B7E\u540D\u7684\u5B57\u7B26\u4E32</p>
</li>
<li>
<p>\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6 <code dir="auto">key</code> \uFF0C\u901A\u8FC7 <code dir="auto">key</code> \u67E5\u8BE2\u5230\u5BF9\u5E94\u7684 <code dir="auto">secret</code></p>
</li>
<li>
<p>\u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u548C <code dir="auto">secret</code> \u5BF9\u5173\u952E\u6570\u636E\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\uFF0C\u5F97\u5230\u7B7E\u540D</p>
</li>
<li>
<p>\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6\u5BA2\u6237\u7AEF\u7B7E\u540D\uFF0C\u5BF9\u6BD4\u670D\u52A1\u5668\u7AEF\u7B7E\u540D\u548C\u5BA2\u6237\u7AEF\u7B7E\u540D\u7684\u4E00\u81F4\u6027</p>
</li>
</ol>
<p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A
<img src="https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="\u7B7E\u540D\u6392\u9519\u65B9\u6CD5">\u7B7E\u540D\u6392\u9519\u65B9\u6CD5</h3>
<p>\u7F51\u5173\u7B7E\u540D\u6821\u9A8C\u5931\u8D25\u65F6\uFF0C\u4F1A\u5C06\u670D\u52A1\u7AEF\u7684\u7B7E\u540D\u4E32\uFF08StringToSign\uFF09\u653E\u5230HTTP Response\u7684Header\u4E2D\u8FD4\u56DE\u5230\u5BA2\u6237\u7AEF\uFF0CKey\u4E3A\uFF1AX-Ca-Error-Message\uFF0C\u7528\u6237\u53EA\u9700\u8981\u5C06\u672C\u5730\u8BA1\u7B97\u7684\u7B7E\u540D\u4E32\uFF08StringToSign\uFF09\u4E0E\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u7B7E\u540D\u4E32\u8FDB\u884C\u5BF9\u6BD4\u5373\u53EF\u627E\u5230\u95EE\u9898\uFF1B</p>
<p>\u5982\u679C\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u7684StringToSign\u4E00\u81F4\u8BF7\u68C0\u67E5\u7528\u4E8E\u7B7E\u540D\u8BA1\u7B97\u7684APP Secret\u662F\u5426\u6B63\u786E\uFF1B</p>
<p>\u56E0\u4E3AHTTP Header\u4E2D\u65E0\u6CD5\u8868\u793A\u6362\u884C\uFF0C\u56E0\u6B64StringToSign\u4E2D\u7684\u6362\u884C\u7B26\u90FD\u88AB\u66FF\u6362\u6210<code dir="auto">#</code>\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Ca-Error-Message:  Server StringToSign:\`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST\`</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="X-Ca-Error-Message:  Server StringToSign:&#x60;GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST&#x60;"><div></div></button></div></figure></div>
<h2 id="\u76F8\u5173\u9519\u8BEF\u7801">\u76F8\u5173\u9519\u8BEF\u7801</h2>


















































<table><thead><tr><th>HTTP \u72B6\u6001\u7801</th><th>\u51FA\u9519\u4FE1\u606F</th><th>\u539F\u56E0\u8BF4\u660E</th></tr></thead><tbody><tr><td>401</td><td>Invalid Key</td><td>\u8BF7\u6C42\u5934\u672A\u63D0\u4F9B x-ca-key\uFF0C\u6216\u8005 x-ca-key \u65E0\u6548</td></tr><tr><td>401</td><td>Empty Signature</td><td>\u8BF7\u6C42\u5934\u672A\u63D0\u4F9B x-ca-signature \u7B7E\u540D\u4E32</td></tr><tr><td>400</td><td>Invalid Signature</td><td>\u8BF7\u6C42\u5934 x-ca-signature \u7B7E\u540D\u4E32\uFF0C\u4E0E\u670D\u52A1\u7AEF\u8BA1\u7B97\u5F97\u5230\u7B7E\u540D\u4E0D\u4E00\u81F4</td></tr><tr><td>400</td><td>Invalid Content-MD5</td><td>\u8BF7\u6C42\u5934 content-md5 \u4E0D\u6B63\u786E</td></tr><tr><td>400</td><td>Invalid Date</td><td>\u6839\u636E\u8BF7\u6C42\u5934 date \u8BA1\u7B97\u65F6\u95F4\u504F\u79FB\u8D85\u8FC7\u914D\u7F6E\u7684 date_offset</td></tr><tr><td>413</td><td>Request Body Too Large</td><td>\u8BF7\u6C42 Body \u8D85\u8FC7\u9650\u5236\u5927\u5C0F\uFF1A32 MB</td></tr><tr><td>413</td><td>Payload Too Large</td><td>\u8BF7\u6C42 Body \u8D85\u8FC7\u5168\u5C40\u914D\u7F6E DownstreamConnectionBufferLimits</td></tr><tr><td>403</td><td>Unauthorized Consumer</td><td>\u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650</td></tr></tbody></table>`,t={title:"HMAC \u8BA4\u8BC1",keywords:["higress","hmac auth"],description:"HMAC \u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",githubHigressUrl:"https://github.com/alibaba/higress/tree/main/plugins/wasm-cpp/extensions/hmac_auth"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/hmac-auth.md",d=void 0,p=function(){return`
## \u529F\u80FD\u8BF4\u660E
\`hmac-auth\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HMAC \u7B97\u6CD5\u4E3A HTTP \u8BF7\u6C42\u751F\u6210\u4E0D\u53EF\u4F2A\u9020\u7684\u7B7E\u540D\uFF0C\u5E76\u57FA\u4E8E\u7B7E\u540D\u5B9E\u73B0\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u9274\u6743

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`330\`

## \u914D\u7F6E\u5B57\u6BB5

**\u6CE8\u610F\uFF1A**

- \u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684header\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A\`X-Mse-Consumer\`\u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

### \u8BA4\u8BC1\u914D\u7F6E

| \u540D\u79F0          | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                |
| ------------- | --------------- | -------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| \`global_auth\` | bool            | \u9009\u586B\uFF08**\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**\uFF09                  | -      | \u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236\uFF0C\u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09\u3002 |
| \`consumers\`   | array of object | \u5FC5\u586B     | -      | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                                                                                |
| \`date_offset\` | number          | \u9009\u586B     | -      | \u914D\u7F6E\u5141\u8BB8\u7684\u5BA2\u6237\u7AEF\u6700\u5927\u65F6\u95F4\u504F\u79FB\uFF0C\u5355\u4F4D\u4E3A\u79D2\uFF0C\u6839\u636E\u8BF7\u6C42\u5934\`Date\`\u89E3\u6790\u5BA2\u6237\u7AEF UTC \u65F6\u95F4\uFF0C\u53EF\u7528\u4E8E\u907F\u514D\u8BF7\u6C42\u91CD\u653E\uFF1B\u672A\u914D\u7F6E\u65F6\uFF0C\u4E0D\u505A\u6821\u9A8C |


\`consumers\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0     | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                |
| -------- | -------- | -------- | ------ | ----------------------------------- |
| \`key\`    | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u4ECE\u8BF7\u6C42\u7684\`x-ca-key\`\u5934\u4E2D\u63D0\u53D6\u7684key |
| \`secret\` | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u7528\u4E8E\u751F\u6210\u7B7E\u540D\u7684secret            |
| \`name\`   | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5consumer\u7684\u540D\u79F0                |

### \u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                           |
| ----------- | --------------- | ------------------------------------------- | ------ | -----------------------------------------------------------                                                                                                    |
| \`allow\`     | array of string | \u9009\u586B(**\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**)                    | -      | \u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236 |


## \u914D\u7F6E\u793A\u4F8B

### \u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743

\u5728\u5B9E\u4F8B\u7EA7\u522B\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E, \u6CE8\u610F\`key\`\u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D:

\`\`\`yaml
global_auth: false
consumers: 
- key: appKey-example-1
  secret: appSecret-example-1
  name: consumer-1
- key: appKey-example-2
  secret: appSecret-example-2
  name: consumer-2
\`\`\`

route-a\u548Croute-b\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A

\`\`\`yaml
allow:
- consumer1
\`\`\`

\u5728*.example.com\u548Ctest.com\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A

\`\`\`yaml
allow:
- consumer2
\`\`\`

\u82E5\u662F\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF0C\u6B64\u4F8B\u6307\u5B9A\u7684route-a\u548Croute-b\u5373\u5728\u521B\u5EFA\u7F51\u5173\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer1\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002

\u6B64\u4F8B\u6307\u5B9A\u7684*.example.com\u548Ctest.com\u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8name\u4E3Aconsumer2\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u88AB\u5141\u8BB8\u8BBF\u95EE\u3002


### \u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F Hamc Auth \u8BA4\u8BC1\uFF0C\u6240\u6709\u8BF7\u6C42\u5747\u9700\u8981\u7ECF\u8FC7\u8BA4\u8BC1\u540E\u624D\u80FD\u8BBF\u95EE\u3002

\`\`\`yaml
global_auth: true
consumers: 
- key: appKey-example-1
  secret: appSecret-example-1
  name: consumer-1
- key: appKey-example-2
  secret: appSecret-example-2
  name: consumer-2
\`\`\`


## \u7B7E\u540D\u673A\u5236\u8BF4\u660E

### \u914D\u7F6E\u51C6\u5907

\u5982\u4E0A\u6307\u5F15\uFF0C\u5728\u63D2\u4EF6\u914D\u7F6E\u4E2D\u914D\u7F6E\u751F\u6210\u548C\u9A8C\u8BC1\u7B7E\u540D\u9700\u8981\u7528\u7684\u51ED\u8BC1\u914D\u7F6E

- key: \u7528\u4E8E\u8BF7\u6C42\u5934 \`x-ca-key\` \u4E2D\u8BBE\u7F6E
- secret: \u7528\u4E8E\u751F\u6210\u8BF7\u6C42\u7B7E\u540D

### \u5BA2\u6237\u7AEF\u7B7E\u540D\u751F\u6210\u65B9\u5F0F

#### \u6D41\u7A0B\u7B80\u4ECB

\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u4E00\u5171\u5206\u4E09\u6B65\u5904\u7406\uFF1A

1. \u4ECE\u539F\u59CB\u8BF7\u6C42\u4E2D\u63D0\u53D6\u5173\u952E\u6570\u636E\uFF0C\u5F97\u5230\u4E00\u4E2A\u7528\u6765\u7B7E\u540D\u7684\u5B57\u7B26\u4E32

2. \u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u548C\u914D\u7F6E\u7684 \`secret\` \u5BF9\u5173\u952E\u6570\u636E\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\uFF0C\u5F97\u5230\u7B7E\u540D

3. \u5C06\u7B7E\u540D\u6240\u76F8\u5173\u7684\u6240\u6709\u5934\u52A0\u5165\u5230\u539F\u59CBHTTP\u8BF7\u6C42\u4E2D\uFF0C\u5F97\u5230\u6700\u7EC8HTTP\u8BF7\u6C42

\u5982\u4E0B\u56FE\u6240\u793A\uFF1A
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png)

#### \u7B7E\u540D\u4E32\u63D0\u53D6\u6D41\u7A0B

\u5BA2\u6237\u7AEF\u9700\u8981\u4ECEHttp\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51FA\u5173\u952E\u6570\u636E\uFF0C\u7EC4\u5408\u6210\u4E00\u4E2A\u7B7E\u540D\u4E32\uFF0C\u751F\u6210\u7684\u7B7E\u540D\u4E32\u7684\u683C\u5F0F\u5982\u4E0B\uFF1A

\`\`\`text
HTTPMethod
Accept
Content-MD5
Content-Type
Date
Headers
PathAndParameters
\`\`\`

\u4EE5\u4E0A7\u4E2A\u5B57\u6BB5\u6784\u6210\u6574\u4E2A\u7B7E\u540D\u4E32\uFF0C\u5B57\u6BB5\u4E4B\u95F4\u4F7F\u7528\\n\u95F4\u9694\uFF0C\u5982\u679CHeaders\u4E3A\u7A7A\uFF0C\u5219\u4E0D\u9700\u8981\u52A0\\n\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5982\u679C\u4E3A\u7A7A\u90FD\u9700\u8981\u4FDD\u7559\\n\u3002\u7B7E\u540D\u5927\u5C0F\u5199\u654F\u611F\u3002\u4E0B\u9762\u4ECB\u7ECD\u4E0B\u6BCF\u4E2A\u5B57\u6BB5\u7684\u63D0\u53D6\u89C4\u5219\uFF1A

- HTTPMethod\uFF1AHTTP\u7684\u65B9\u6CD5\uFF0C\u5168\u90E8\u5927\u5199\uFF0C\u6BD4\u5982POST

- Accept\uFF1A\u8BF7\u6C42\u4E2D\u7684Accept\u5934\u7684\u503C\uFF0C\u53EF\u4E3A\u7A7A\u3002\u5EFA\u8BAE\u663E\u5F0F\u8BBE\u7F6E Accept Header\u3002\u5F53 Accept \u4E3A\u7A7A\u65F6\uFF0C\u90E8\u5206 Http \u5BA2\u6237\u7AEF\u4F1A\u7ED9 Accept \u8BBE\u7F6E\u9ED8\u8BA4\u503C\u4E3A \`*/*\`\uFF0C\u5BFC\u81F4\u7B7E\u540D\u6821\u9A8C\u5931\u8D25\u3002

- Content-MD5\uFF1A\u8BF7\u6C42\u4E2D\u7684Content-MD5\u5934\u7684\u503C\uFF0C\u53EF\u4E3A\u7A7A\u53EA\u6709\u5728\u8BF7\u6C42\u5B58\u5728Body\u4E14Body\u4E3A\u975EForm\u5F62\u5F0F\u65F6\u624D\u8BA1\u7B97Content-MD5\u5934\uFF0C\u4E0B\u9762\u662FJava\u7684Content-MD5\u503C\u7684\u53C2\u8003\u8BA1\u7B97\u65B9\u5F0F\uFF1A

\`\`\`java
String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getbytes("UTF-8")));
\`\`\`

- Content-Type\uFF1A\u8BF7\u6C42\u4E2D\u7684Content-Type\u5934\u7684\u503C\uFF0C\u53EF\u4E3A\u7A7A

- Date\uFF1A\u8BF7\u6C42\u4E2D\u7684Date\u5934\u7684\u503C\uFF0C\u5F53\u672A\u5F00\u542F\`date_offset\`\u914D\u7F6E\u65F6\uFF0C\u53EF\u4E3A\u7A7A\uFF0C\u5426\u5219\u5C06\u7528\u4E8E\u65F6\u95F4\u504F\u79FB\u6821\u9A8C

- Headers\uFF1A\u7528\u6237\u53EF\u4EE5\u9009\u53D6\u6307\u5B9A\u7684header\u53C2\u4E0E\u7B7E\u540D\uFF0C\u5173\u4E8Eheader\u7684\u7B7E\u540D\u4E32\u62FC\u63A5\u65B9\u5F0F\u6709\u4EE5\u4E0B\u89C4\u5219\uFF1A
    - \u53C2\u4E0E\u7B7E\u540D\u8BA1\u7B97\u7684Header\u7684Key\u6309\u7167\u5B57\u5178\u6392\u5E8F\u540E\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F\u62FC\u63A5
    \`\`\`text
    HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+
    HeaderKey2 + ":" + HeaderValue2 + "\\n"\\+
    ...
    HeaderKeyN + ":" + HeaderValueN + "\\n"
    \`\`\`
    - \u67D0\u4E2AHeader\u7684Value\u4E3A\u7A7A\uFF0C\u5219\u4F7F\u7528HeaderKey+":"+"\\n"\u53C2\u4E0E\u7B7E\u540D\uFF0C\u9700\u8981\u4FDD\u7559Key\u548C\u82F1\u6587\u5192\u53F7
    - \u6240\u6709\u53C2\u4E0E\u7B7E\u540D\u7684Header\u7684Key\u7684\u96C6\u5408\u4F7F\u7528\u82F1\u6587\u9017\u53F7\u5206\u5272\u653E\u5230Key\u4E3AX-Ca-Signature-Headers\u7684Header\u4E2D
    - \u4EE5\u4E0BHeader\u4E0D\u53C2\u4E0EHeader\u7B7E\u540D\u8BA1\u7B97\uFF1AX-Ca-Signature\u3001X-Ca-Signature-Headers\u3001Accept\u3001Content-MD5\u3001Content-Type\u3001Date
    
- PathAndParameters: \u8FD9\u4E2A\u5B57\u6BB5\u5305\u542BPath\uFF0CQuery\u548CForm\u4E2D\u7684\u6240\u6709\u53C2\u6570\uFF0C\u5177\u4F53\u7EC4\u7EC7\u5F62\u5F0F\u5982\u4E0B
\`\`\`text
Path + "?" + Key1 + "=" + Value1 + "&" + Key2 + "=" + Value2 + ... "&" + KeyN + "=" + ValueN
\`\`\`

\u6CE8\u610F\uFF1A
1. Query\u548CForm\u53C2\u6570\u5BF9\u7684Key\u6309\u7167\u5B57\u5178\u6392\u5E8F\u540E\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u5F0F\u62FC\u63A5
    
2. Query\u548CForm\u53C2\u6570\u4E3A\u7A7A\u65F6\uFF0C\u5219\u76F4\u63A5\u4F7F\u7528Path\uFF0C\u4E0D\u9700\u8981\u6DFB\u52A0?
    
3. \u53C2\u6570\u7684Value\u4E3A\u7A7A\u65F6\u53EA\u4FDD\u7559Key\u53C2\u4E0E\u7B7E\u540D\uFF0C\u7B49\u53F7\u4E0D\u9700\u8981\u518D\u52A0\u5165\u7B7E\u540D
   
4. Query\u548CForm\u5B58\u5728\u6570\u7EC4\u53C2\u6570\u65F6\uFF08key\u76F8\u540C\uFF0Cvalue\u4E0D\u540C\u7684\u53C2\u6570\uFF09 \uFF0C\u53D6\u7B2C\u4E00\u4E2AValue\u53C2\u4E0E\u7B7E\u540D\u8BA1\u7B97
    
#### \u7B7E\u540D\u4E32\u63D0\u53D6\u793A\u4F8B

\u521D\u59CB\u7684HTTP\u8BF7\u6C42\uFF1A
\`\`\`text
POST /http2test/test?param1=test HTTP/1.1
host:api.aliyun.com
accept:application/json; charset=utf-8
ca_version:1
content-type:application/x-www-form-urlencoded; charset=utf-8
x-ca-timestamp:1525872629832
date:Wed, 09 May 2018 13:30:29 GMT+00:00
user-agent:ALIYUN-ANDROID-DEMO
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
content-length:33
username=xiaoming&password=123456789
\`\`\`

\u751F\u6210\u7684\u6B63\u786E\u7B7E\u540D\u4E32\u4E3A\uFF1A
\`\`\`text
POST
application/json; charset=utf-8
application/x-www-form-urlencoded; charset=utf-8
Wed, 09 May 2018 13:30:29 GMT+00:00
x-ca-key:203753385
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-signature-method:HmacSHA256
x-ca-timestamp:1525872629832
/http2test/test?param1=test&password=123456789&username=xiaoming
\`\`\`

#### \u7B7E\u540D\u8BA1\u7B97\u6D41\u7A0B

\u5BA2\u6237\u7AEF\u4ECEHTTP\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51FA\u5173\u952E\u6570\u636E\u7EC4\u88C5\u6210\u7B7E\u540D\u4E32\u540E\uFF0C\u9700\u8981\u5BF9\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u53CA\u7F16\u7801\u5904\u7406\uFF0C\u5F62\u6210\u6700\u7EC8\u7684\u7B7E\u540D

\u5177\u4F53\u7684\u52A0\u5BC6\u5F62\u5F0F\u5982\u4E0B\uFF0C\u5176\u4E2D \`stringToSign\` \u662F\u63D0\u53D6\u51FA\u6765\u7684\u7B7E\u540D\u4E32\uFF0C\`secret\` \u5C31\u662F\u63D2\u4EF6\u914D\u7F6E\u4E2D\u586B\u5199\u7684\uFF0C\`sign\` \u662F\u6700\u7EC8\u751F\u6210\u7684\u7B7E\u540D\uFF1A

\`\`\`java
Mac hmacSha256 = Mac.getInstance("HmacSHA256");
byte[] secretBytes = secret.getBytes("UTF-8");
hmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256"));
byte[] result = hmacSha256.doFinal(stringToSign.getBytes("UTF-8"));
String sign = Base64.encodeBase64String(result);
\`\`\`

\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5C31\u662F\u5C06 \`stringToSign\` \u4F7F\u7528UTF-8\u89E3\u7801\u540E\u5F97\u5230Byte\u6570\u7EC4\uFF0C\u7136\u540E\u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u5BF9Byte\u6570\u7EC4\u8FDB\u884C\u52A0\u5BC6\uFF0C\u7136\u540E\u4F7F\u7528Base64\u7B97\u6CD5\u8FDB\u884C\u7F16\u7801\uFF0C\u5F62\u6210\u6700\u7EC8\u7684\u7B7E\u540D\u3002

#### \u6DFB\u52A0\u7B7E\u540D\u6D41\u7A0B

\u5BA2\u6237\u7AEF\u9700\u8981\u5C06\u4EE5\u4E0B\u56DB\u4E2AHeader\u653E\u5728HTTP\u8BF7\u6C42\u4E2D\u4F20\u8F93\u7ED9API\u7F51\u5173\uFF0C\u8FDB\u884C\u7B7E\u540D\u6821\u9A8C\uFF1A

- x-ca-key\uFF1A\u53D6\u503CAPP Key\uFF0C\u5FC5\u9009

- x-ca-signature-method\uFF1A\u7B7E\u540D\u7B97\u6CD5\uFF0C\u53D6\u503CHmacSHA256\u6216\u8005HmacSHA1\uFF0C\u53EF\u9009\uFF0C\u9ED8\u8BA4\u503C\u4E3AHmacSHA256

- x-ca-signature-headers\uFF1A\u6240\u6709\u7B7E\u540D\u5934\u7684Key\u7684\u96C6\u5408\uFF0C\u4F7F\u7528\u82F1\u6587\u9017\u53F7\u5206\u9694\uFF0C\u53EF\u9009

- x-ca-signature\uFF1A\u7B7E\u540D\uFF0C\u5FC5\u9009

\u4E0B\u9762\u662F\u643A\u5E26\u7B7E\u540D\u7684\u6574\u4E2AHTTP\u8BF7\u6C42\u7684\u793A\u4F8B\uFF1A

\`\`\`text
POST /http2test/test?param1=test HTTP/1.1
host:api.aliyun.com
accept:application/json; charset=utf-8
ca_version:1
content-type:application/x-www-form-urlencoded; charset=utf-8
x-ca-timestamp:1525872629832
date:Wed, 09 May 2018 13:30:29 GMT+00:00
user-agent:ALIYUN-ANDROID-DEMO
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-key:203753385
x-ca-signature-method:HmacSHA256
x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method
x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=
content-length:33
username=xiaoming&password=123456789
\`\`\`

### \u670D\u52A1\u7AEF\u7B7E\u540D\u9A8C\u8BC1\u65B9\u5F0F

#### \u6D41\u7A0B\u7B80\u4ECB

\u670D\u52A1\u5668\u9A8C\u8BC1\u5BA2\u6237\u7AEF\u7B7E\u540D\u4E00\u5171\u5206\u56DB\u6B65\u5904\u7406\uFF1A

1. \u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u63D0\u53D6\u5173\u952E\u6570\u636E\uFF0C\u5F97\u5230\u4E00\u4E2A\u7528\u6765\u7B7E\u540D\u7684\u5B57\u7B26\u4E32

2. \u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6 \`key\` \uFF0C\u901A\u8FC7 \`key\` \u67E5\u8BE2\u5230\u5BF9\u5E94\u7684 \`secret\`

3. \u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u548C \`secret\` \u5BF9\u5173\u952E\u6570\u636E\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\uFF0C\u5F97\u5230\u7B7E\u540D

4. \u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6\u5BA2\u6237\u7AEF\u7B7E\u540D\uFF0C\u5BF9\u6BD4\u670D\u52A1\u5668\u7AEF\u7B7E\u540D\u548C\u5BA2\u6237\u7AEF\u7B7E\u540D\u7684\u4E00\u81F4\u6027

\u5982\u4E0B\u56FE\u6240\u793A\uFF1A
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png)


### \u7B7E\u540D\u6392\u9519\u65B9\u6CD5

\u7F51\u5173\u7B7E\u540D\u6821\u9A8C\u5931\u8D25\u65F6\uFF0C\u4F1A\u5C06\u670D\u52A1\u7AEF\u7684\u7B7E\u540D\u4E32\uFF08StringToSign\uFF09\u653E\u5230HTTP Response\u7684Header\u4E2D\u8FD4\u56DE\u5230\u5BA2\u6237\u7AEF\uFF0CKey\u4E3A\uFF1AX-Ca-Error-Message\uFF0C\u7528\u6237\u53EA\u9700\u8981\u5C06\u672C\u5730\u8BA1\u7B97\u7684\u7B7E\u540D\u4E32\uFF08StringToSign\uFF09\u4E0E\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u7B7E\u540D\u4E32\u8FDB\u884C\u5BF9\u6BD4\u5373\u53EF\u627E\u5230\u95EE\u9898\uFF1B

\u5982\u679C\u670D\u52A1\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u7684StringToSign\u4E00\u81F4\u8BF7\u68C0\u67E5\u7528\u4E8E\u7B7E\u540D\u8BA1\u7B97\u7684APP Secret\u662F\u5426\u6B63\u786E\uFF1B

\u56E0\u4E3AHTTP Header\u4E2D\u65E0\u6CD5\u8868\u793A\u6362\u884C\uFF0C\u56E0\u6B64StringToSign\u4E2D\u7684\u6362\u884C\u7B26\u90FD\u88AB\u66FF\u6362\u6210\`#\`\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A

\`\`\`text
X-Ca-Error-Message:  Server StringToSign:\`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST\`

\`\`\`

## \u76F8\u5173\u9519\u8BEF\u7801

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F               | \u539F\u56E0\u8BF4\u660E                                                                         |
| ----------- | ---------------------- | -------------------------------------------------------------------------------- |
| 401         | Invalid Key            | \u8BF7\u6C42\u5934\u672A\u63D0\u4F9B x-ca-key\uFF0C\u6216\u8005 x-ca-key \u65E0\u6548                                        |
| 401         | Empty Signature        | \u8BF7\u6C42\u5934\u672A\u63D0\u4F9B x-ca-signature \u7B7E\u540D\u4E32                                               |
| 400         | Invalid Signature      | \u8BF7\u6C42\u5934 x-ca-signature \u7B7E\u540D\u4E32\uFF0C\u4E0E\u670D\u52A1\u7AEF\u8BA1\u7B97\u5F97\u5230\u7B7E\u540D\u4E0D\u4E00\u81F4                         |
| 400         | Invalid Content-MD5    | \u8BF7\u6C42\u5934 content-md5 \u4E0D\u6B63\u786E                                                        |
| 400         | Invalid Date           | \u6839\u636E\u8BF7\u6C42\u5934 date \u8BA1\u7B97\u65F6\u95F4\u504F\u79FB\u8D85\u8FC7\u914D\u7F6E\u7684 date_offset                               |
| 413         | Request Body Too Large | \u8BF7\u6C42 Body \u8D85\u8FC7\u9650\u5236\u5927\u5C0F\uFF1A32 MB                                                    |
| 413         | Payload Too Large      | \u8BF7\u6C42 Body \u8D85\u8FC7\u5168\u5C40\u914D\u7F6E DownstreamConnectionBufferLimits                          |
| 403         | Unauthorized Consumer  | \u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650                                                           |
`},i=function(){return e},c=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u8BA4\u8BC1\u914D\u7F6E",text:"\u8BA4\u8BC1\u914D\u7F6E"},{depth:3,slug:"\u9274\u6743\u914D\u7F6E\u975E\u5FC5\u9700",text:"\u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743",text:"\u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\u548C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743"},{depth:3,slug:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F",text:"\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F"},{depth:2,slug:"\u7B7E\u540D\u673A\u5236\u8BF4\u660E",text:"\u7B7E\u540D\u673A\u5236\u8BF4\u660E"},{depth:3,slug:"\u914D\u7F6E\u51C6\u5907",text:"\u914D\u7F6E\u51C6\u5907"},{depth:3,slug:"\u5BA2\u6237\u7AEF\u7B7E\u540D\u751F\u6210\u65B9\u5F0F",text:"\u5BA2\u6237\u7AEF\u7B7E\u540D\u751F\u6210\u65B9\u5F0F"},{depth:4,slug:"\u6D41\u7A0B\u7B80\u4ECB",text:"\u6D41\u7A0B\u7B80\u4ECB"},{depth:4,slug:"\u7B7E\u540D\u4E32\u63D0\u53D6\u6D41\u7A0B",text:"\u7B7E\u540D\u4E32\u63D0\u53D6\u6D41\u7A0B"},{depth:4,slug:"\u7B7E\u540D\u4E32\u63D0\u53D6\u793A\u4F8B",text:"\u7B7E\u540D\u4E32\u63D0\u53D6\u793A\u4F8B"},{depth:4,slug:"\u7B7E\u540D\u8BA1\u7B97\u6D41\u7A0B",text:"\u7B7E\u540D\u8BA1\u7B97\u6D41\u7A0B"},{depth:4,slug:"\u6DFB\u52A0\u7B7E\u540D\u6D41\u7A0B",text:"\u6DFB\u52A0\u7B7E\u540D\u6D41\u7A0B"},{depth:3,slug:"\u670D\u52A1\u7AEF\u7B7E\u540D\u9A8C\u8BC1\u65B9\u5F0F",text:"\u670D\u52A1\u7AEF\u7B7E\u540D\u9A8C\u8BC1\u65B9\u5F0F"},{depth:4,slug:"\u6D41\u7A0B\u7B80\u4ECB-1",text:"\u6D41\u7A0B\u7B80\u4ECB"},{depth:3,slug:"\u7B7E\u540D\u6392\u9519\u65B9\u6CD5",text:"\u7B7E\u540D\u6392\u9519\u65B9\u6CD5"},{depth:2,slug:"\u76F8\u5173\u9519\u8BEF\u7801",text:"\u76F8\u5173\u9519\u8BEF\u7801"}]},a=l((h,g,f)=>{const{layout:E,...n}=t;return n.file=s,n.url=d,r`${v()}${y(e)}`})});export{a as Content,m as __tla,i as compiledContent,a as default,s as file,t as frontmatter,c as getHeadings,p as rawContent,d as url};
