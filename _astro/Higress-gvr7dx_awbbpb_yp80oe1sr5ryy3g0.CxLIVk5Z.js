import{c as d,__tla as r}from"./astro-component.m4CCZO6J.js";import{r as p,m as f,u as v,__tla as y}from"./constant.DH0MXVtR.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let s,i,t,a,c,l,o,b=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u524D\u8A00">\u524D\u8A00</h2>
<p><font style="color:rgb(24, 24, 24);">\u4E91\u539F\u751FAPI\u7F51\u5173\uFF08\u4EE5\u4E0B\u7B80\u79F0-\u7F51\u5173\uFF09\u662F\u4E91\u539F\u751F\u7F51\u5173\u7684\u5347\u7EA7\u7248\uFF0C\u9664\u7EE7\u627F\u4E86\u539F\u4E91\u539F\u751F\u7F51\u5173\u7684\u5168\u90E8\u80FD\u529B\uFF0C\u4E3A\u7528\u6237\u53E0\u52A0\u4E86API\u7BA1\u7406\u7684\u80FD\u529B\u3002API\u4F5C\u4E3A\u4F01\u4E1A\u7684\u91CD\u8981\u6570\u5B57\u8D44\u6E90\uFF0C\u5728\u7ED9\u4F01\u4E1A\u5E26\u6765\u5DE8\u5927\u4FBF\u5229\u7684\u540C\u65F6\u4E5F\u5E26\u6765\u4E86\u65B0\u7684\u5B89\u5168\u95EE\u9898\uFF0C\u4E00\u65E6\u88AB\u653B\u51FB\u53EF\u80FD\u5BFC\u81F4\u6570\u636E\u6CC4\u6F0F\u91CD\u5927\u5B89\u5168\u95EE\u9898\uFF0C\u4ECE\u800C\u7ED9\u4F01\u4E1A\u7684\u4E1A\u52A1\u53D1\u5C55\u5E26\u6765\u6781\u5927\u7684\u5B89\u5168\u98CE\u9669\u3002</font></p>
<p><font style="color:rgb(24, 24, 24);">\u6B63\u662F\u5728\u8FD9\u6837\u7684\u80CC\u666F\u4E0B\uFF0COpenAPI\u89C4\u8303\u4E2D\u9488\u5BF9API\u5B89\u5168\u505A\u4E86\u660E\u786E\u7684\u5B9A\u4E49\u548C\u5F15\u5BFC\uFF0C\u4EE5\u4FBF\u7528\u6237\u53EF\u4EE5\u5B89\u5168\u7684\u7BA1\u7406\u81EA\u5DF1\u7684API\u3002</font></p>
<p><font style="color:rgb(24, 24, 24);">\u4EE5\u4E0B\u4E3Aopenapi\u7684\u5B9A\u4E49\uFF1A</font><a href="https://swagger.io/docs/specification/v3_0/about/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">What is openAPI</a></p>
<p><font style="color:rgb(33, 37, 41);">An OpenAPI file allows you to describe your entire API, including:</font></p>
<ul>
<li><font style="color:rgb(33, 37, 41);">Available endpoints (</font><code dir="auto">&#x3C;font style="color:rgb(33, 37, 41);">/users&#x3C;/font></code><font style="color:rgb(33, 37, 41);">) and operations on each endpoint (</font><code dir="auto">&#x3C;font style="color:rgb(33, 37, 41);">GET /users&#x3C;/font></code><font style="color:rgb(33, 37, 41);">,</font><font style="color:rgb(33, 37, 41);"> </font><code dir="auto">&#x3C;font style="color:rgb(33, 37, 41);">POST /users&#x3C;/font></code><font style="color:rgb(33, 37, 41);">)</font></li>
<li><font style="color:rgb(33, 37, 41);">Operation parameters Input and output for each operation</font></li>
<li><font style="color:rgb(33, 37, 41);">Authentication methods</font></li>
<li><font style="color:rgb(33, 37, 41);">Contact information, license, terms of use, and other information.</font></li>
</ul>
<p><font style="color:rgb(33, 37, 41);">\u53EF\u4EE5\u770B\u5230\u8BA4\u8BC1\u9274\u6743\u662F\u4FDD\u62A4API\u5FC5\u8981\u800C\u53C8\u6700\u5E38\u7528\u7684\u624B\u6BB5\u3002\u4E91\u539F\u751FAPI\u7F51\u5173\u662F\u5B8C\u5168\u9075\u5FAAOpenAPI\u89C4\u8303\u7684\u963F\u91CC\u4E91\u65B0\u4E00\u4EE3API\u7F51\u5173\uFF0C\u652F\u6301\u4E30\u5BCC\u7684\u8BA4\u8BC1\u9274\u6743\u662F\u5176\u6838\u5FC3\u7ADE\u4E89\u529B\u4E4B\u4E00</font></p>
<h2 id="\u4EC0\u4E48\u662F\u8BA4\u8BC1\u9274\u6743"><font style="color:rgb(33, 37, 41);">\u4EC0\u4E48\u662F\u8BA4\u8BC1\u9274\u6743</font></h2>
<p>\u8BA4\u8BC1\uFF1A\u662F\u6307\u9A8C\u8BC1\u7528\u6237\u8EAB\u4EFD\u7684\u8FC7\u7A0B\u3002\u7B80\u5355\u6765\u8BF4\uFF0C\u8BA4\u8BC1\u7684\u76EE\u7684\u662F\u786E\u8BA4\u7528\u6237\u662F\u8C01\u3002\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u7528\u6237\u901A\u5E38\u9700\u8981\u63D0\u4F9B\u67D0\u79CD\u51ED\u8BC1\uFF0C\u4F8B\u5982\u7528\u6237\u540D\u548C\u5BC6\u7801\u3001\u6307\u7EB9\u3001\u9762\u90E8\u8BC6\u522B\uFF0C\u6216\u662F\u5176\u4ED6\u751F\u7269\u7279\u5F81\uFF0C\u751A\u81F3\u662F\u5B89\u5168\u4EE4\u724C\uFF08\u5982\u4E24\u6B65\u9A8C\u8BC1\u4E2D\u7684\u9A8C\u8BC1\u7801\uFF09\u3002\u901A\u8FC7\u8FD9\u4E9B\u51ED\u8BC1\uFF0C\u7CFB\u7EDF\u5C06\u7528\u6237\u7684\u8EAB\u4EFD\u4E0E\u5DF2\u6709\u7684\u8EAB\u4EFD\u4FE1\u606F\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u4ECE\u800C\u786E\u8BA4\u5176\u771F\u5B9E\u6027\u3002</p>
<p>\u9274\u6743\uFF1A\u662F\u6307\u9A8C\u8BC1\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u67D0\u9879\u8D44\u6E90\u6216\u6267\u884C\u67D0\u9879\u64CD\u4F5C\u3002\u867D\u7136\u8BA4\u8BC1\u786E\u8BA4\u4E86\u7528\u6237\u8EAB\u4EFD\uFF0C\u4F46\u5B83\u5E76\u4E0D\u80FD\u786E\u5B9A\u8BE5\u7528\u6237\u53EF\u4EE5\u505A\u4EC0\u4E48\u3002\u8FD9\u65B9\u9762\u7684\u51B3\u7B56\u4F9D\u8D56\u4E8E\u7CFB\u7EDF\u7684\u6743\u9650\u7BA1\u7406\u7B56\u7565\u3002\u4F8B\u5982\uFF0C\u5728\u4E00\u4E2A\u4F01\u4E1A\u5185\u90E8\u7CFB\u7EDF\u4E2D\uFF0C\u67D0\u4F4D\u5458\u5DE5\u53EF\u80FD\u62E5\u6709\u8BBF\u95EE\u67D0\u4E9B\u6587\u4EF6\u7684\u6743\u9650\uFF0C\u4F46\u53E6\u4E00\u4E9B\u654F\u611F\u6587\u4EF6\u5219\u53EF\u80FD\u53EA\u5BF9\u9AD8\u7EA7\u7BA1\u7406\u5C42\u5F00\u653E\u3002\u9274\u6743\u7684\u76EE\u7684\u5C31\u662F\u5728\u7528\u6237\u7ECF\u8FC7\u8BA4\u8BC1\u540E\uFF0C\u6839\u636E\u5176\u89D2\u8272\u548C\u6743\u9650\u8BBE\u7F6E\uFF0C\u51B3\u5B9A\u662F\u5426\u5141\u8BB8\u5176\u8BBF\u95EE\u7279\u5B9A\u8D44\u6E90\u6216\u6267\u884C\u7279\u5B9A\u64CD\u4F5C\u3002</p>
<h2 id="\u8BA4\u8BC1authentication">\u8BA4\u8BC1\uFF08Authentication\uFF09</h2>
<h3 id="key-\u8BA4\u8BC1">Key \u8BA4\u8BC1</h3>
<p>\u4E91\u539F\u751FAPI\u7F51\u5173\u4E2D\u7684Key\u8BA4\u8BC1\u53EBApi Key\u8BA4\u8BC1\u5728\u6D88\u8D39\u8005\u9274\u6743\u4E2D\u7EDF\u4E00\u900F\u51FA\u3002Key\u8BA4\u8BC1\u662F\u5BF9\u7528\u6237\u5BC6\u7801\u8BA4\u8BC1\u65B9\u5F0F\u7684\u65B9\u5F0F\u7684\u4F18\u5316\u7248\u672C\uFF0C\u901A\u8FC7\u9759\u6001\u79D8\u94A5\u7684\u65B9\u5F0F\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u4E00\u79CD\u7B80\u4FBF\u5FEB\u6377\u4E14\u5B89\u5168\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5177\u6709\u8F83\u4E3A\u9C9C\u660E\u7684\u4F18\u7F3A\u70B9\uFF1A</p>
<h4 id="\u4F18\u70B9">\u4F18\u70B9\uFF1A</h4>
<p>1\u3001\u7B80\u5355\u6613\u7528\uFF0C\u53EA\u9700\u8981\u5728\u8BF7\u6C42\u4E2D\u4F20\u8F93\u79D8\u94A5\u5373\u53EF\uFF0C\u9A8C\u8BC1\u975E\u5E38\u7B80\u5355\u3001\u6027\u80FD\u9AD8</p>
<p>2\u3001\u8BA4\u8BC1\u8FC7\u7A0B\u65E0\u9700\u7528\u6237\u53C2\u4E0E\uFF0C\u5BF9\u81EA\u52A8\u5316\u5E94\u7528\u975E\u5E38\u53CB\u597D</p>
<p>3\u3001\u670D\u52A1\u5668\uFF08\u7F51\u5173\uFF09\u53EF\u4EE5\u968F\u65F6\u751F\u6210\u3001\u6C70\u6362\uFF08\u5220\u9664\uFF09\u3001\u91CD\u7F6E\uFF08\u5207\u6362\uFF09\u79D8\u94A5\uFF0C\u7BA1\u7406\u65B9\u4FBF</p>
<h4 id="\u7F3A\u70B9">\u7F3A\u70B9\uFF1A</h4>
<p>1\u3001\u5B89\u5168\u9690\u60A3\uFF0C\u79D8\u94A5\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u5F88\u5BB9\u6613\u6CC4\u6F0F\uFF0C\u6CC4\u6F0F\u540E\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u4F7F\u7528\u79D8\u94A5\u6765\u4F2A\u88C5\u5408\u6CD5\u8EAB\u4EFD\uFF0C\u8FDB\u884C\u672A\u6388\u6743\u7684\u64CD\u4F5C\uFF1B\u79D8\u94A5\u7684\u5206\u914D\u548C\u7BA1\u7406\u590D\u6742</p>
<p>2\u3001\u65E0\u6CD5\u63D0\u4F9B\u7528\u6237\u8EAB\u4EFD\uFF0C\u5BA1\u8BA1\u8F83\u4E3A\u56F0\u96BE</p>
<h4 id="api-key\u8BA4\u8BC1\u7684\u57FA\u672C\u6D41\u7A0B">Api Key\u8BA4\u8BC1\u7684\u57FA\u672C\u6D41\u7A0B</h4>
<p><a href="https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=GW85R" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743</a></p>
<p>\u4E91\u539F\u751FAPI\u7F51\u5173\u7684\u901A\u8FC7\u6D88\u8D39\u8005\u6388\u6743\u6765\u652F\u6301 Api Key\u8BA4\u8BC1\uFF0C\u7528\u6237\u5728\u6D88\u8D39\u8005\u521B\u5EFA\u6D41\u7A0B\u4E2D\uFF0C\u9009\u62E9API Key\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u5E76\u4E14\u4E3A\u5176\u8BBE\u7F6E\u51ED\u8BC1\u6765\u6E90\u548C\u6DFB\u52A0\u51ED\u8BC1</p>
<p><img src="/img/1744033003625.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u4E91\u539F\u751F\u7F51\u5173\u652F\u6301\u4E09\u79CD\u51ED\u8BC1\u6765\u6E90\u8BBE\u7F6E\u65B9\u5F0F\uFF1A\u6765\u6E90\u4E8E\u56FA\u5B9AHeader\u5934\u201DAuthorization\u201D\u3001\u6765\u6E90\u4E8E\u81EA\u5B9A\u4E49Header\u5934\u3001\u4EE5\u53CA\u6765\u6E90\u81EA\u5B9A\u4E49QueryString</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl  http://xxx.hello.com/test -H 'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://xxx.hello.com/test -H &#x27;x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5&#x27;"><div></div></button></div></figure></div>
<h3 id="jwt-\u8BA4\u8BC1">JWT \u8BA4\u8BC1</h3>
<h4 id="\u4EC0\u4E48\u662Fjwt">\u4EC0\u4E48\u662FJWT</h4>
<p><font style="color:rgb(51, 51, 51);">JWT\uFF08JSON Web Token\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u5B89\u5168\u4FE1\u606F\u4F20\u9012\u7684\u5F00\u653E\u6807\u51C6\uFF0C\u5B83\u5141\u8BB8\u5728\u901A\u4FE1\u53CC\u65B9\u4E4B\u95F4\u4EE5JSON\u5BF9\u8C61\u7684\u5F62\u5F0F\u4F20\u8F93\u5B89\u5168\u4FE1\u606F\uFF0C\u5B83\u8BBE\u8BA1\u4E3A\u5176\u4E2D\u7684\u4FE1\u606F\u53EF\u4EE5\u88AB\u9A8C\u8BC1\u548C\u4FE1\u4EFB\u3002</font></p>
<p><font style="color:rgb(51, 51, 51);">JWT\u901A\u5E38\u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF1A\u5934\u90E8\uFF08Header\uFF09\u3001\u8F7D\u8377\uFF08Payload\uFF09\u548C\u7B7E\u540D\uFF08Signature\uFF09\uFF0C\u5176\u5185\u5BB9\u6784\u9020\u8FC7\u7A0B\u5982\u4E0B\uFF1A</font></p>
<ol>
<li><strong><font style="color:rgb(51, 51, 51);">\u5934\u90E8\uFF08Header\uFF09</font></strong><font style="color:rgb(51, 51, 51);">:</font></li>
</ol>
<p>\u901A\u5E38\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A\u4EE4\u724C\u7684\u7C7B\u578B\uFF08\u901A\u5E38\u662FJWT\uFF09\u548C\u6240\u4F7F\u7528\u7684\u7B7E\u540D\u7B97\u6CD5\uFF08\u5982HMAC SHA256\uFF0C<font style="color:rgb(51, 51, 51);">\u5728\u4E0B\u6587JWKS\u4E2D\u6307\u5B9A</font>\uFF09\uFF1B</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"alg": "HS256",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"typ": "JWT"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;alg&#x22;: &#x22;HS256&#x22;,\x7F  &#x22;typ&#x22;: &#x22;JWT&#x22;\x7F}"><div></div></button></div></figure></div>
<p><font style="color:rgb(51, 51, 51);">\u7136\u540E\u5C06\u5934\u90E8\u8FDB\u884CBase64\u7F16\u7801\uFF08\u8BE5\u7F16\u7801\u662F\u53EF\u4EE5\u5BF9\u79F0\u89E3\u7801\u7684\uFF09\uFF0C\u5F97\u5230\u7B2C\u4E00\u90E8\u5206\uFF1A</font></p>
<p>eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9</p>
<ol start="2">
<li><strong><font style="color:rgb(51, 51, 51);">\u8F7D\u8377\uFF08Payload\uFF09</font></strong><font style="color:rgb(51, 51, 51);">:</font></li>
</ol>
<p><font style="color:rgb(51, 51, 51);">\u5305\u542B\u5BF9JWT\u7684\u58F0\u660E\uFF08Claims\uFF09\uFF0C\u8FD9\u4E9B\u58F0\u660E\u662F\u5173\u4E8E\u5B9E\u4F53\uFF08\u901A\u5E38\u662F\u7528\u6237\uFF09\u548C\u5176\u4ED6\u6570\u636E\u7684\u3002\u5B9A\u4E49\u7EC6\u8282\u5982\u4E0B\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iss\uFF1A\u4EE4\u724C\u9881\u53D1\u8005\u3002\u8868\u793A\u8BE5\u4EE4\u724C\u7531\u8C01\u521B\u5EFA\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">sub: Subject Identifier\uFF0Ciss\u63D0\u4F9B\u7684\u7EC8\u7AEF\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5728iss\u8303\u56F4\u5185\u552F\u4E00\uFF0C\u6700\u957F\u4E3A255\u4E2AASCII\u4E2A\u5B57\u7B26\uFF0C\u533A\u5206\u5927\u5C0F\u5199</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">aud\uFF1AAudience(s)\uFF0C\u4EE4\u724C\u7684\u53D7\u4F17\uFF0C\u5206\u5927\u5C0F\u5199\u7684\u5B57\u7B26\u4E32\u6570\u7EC4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">exp\uFF1AExpiration time\uFF0C\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\u6233\u3002\u8D85\u8FC7\u6B64\u65F6\u95F4\u7684token\u4F1A\u4F5C\u5E9F\uFF0C \u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">iat: \u4EE4\u724C\u7684\u9881\u53D1\u65F6\u95F4\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">jti: \u4EE4\u724C\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BE5\u58F0\u660E\u7684\u503C\u5728\u4EE4\u724C\u9881\u53D1\u8005\u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u4EE4\u724C\u4E2D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81\uFF0C\u5B83\u901A\u5E38\u662F\u4E00\u4E2A\u5BC6\u7801\u5B66\u968F\u673A\u503C\u3002\u8FD9\u4E2A\u503C\u76F8\u5F53\u4E8E\u5411\u7ED3\u6784\u5316\u4EE4\u724C\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u5F97\u7684\u968F\u673A\u71B5\u7EC4\u4EF6\uFF0C\u6709\u5229\u4E8E\u9632\u6B62\u4EE4\u724C\u731C\u6D4B\u653B\u51FB\u548C\u91CD\u653E\u653B\u51FB\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="iss\uFF1A\u4EE4\u724C\u9881\u53D1\u8005\u3002\u8868\u793A\u8BE5\u4EE4\u724C\u7531\u8C01\u521B\u5EFA\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\x7Fsub: Subject Identifier\uFF0Ciss\u63D0\u4F9B\u7684\u7EC8\u7AEF\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5728iss\u8303\u56F4\u5185\u552F\u4E00\uFF0C\u6700\u957F\u4E3A255\u4E2AASCII\u4E2A\u5B57\u7B26\uFF0C\u533A\u5206\u5927\u5C0F\u5199\x7Faud\uFF1AAudience(s)\uFF0C\u4EE4\u724C\u7684\u53D7\u4F17\uFF0C\u5206\u5927\u5C0F\u5199\u7684\u5B57\u7B26\u4E32\u6570\u7EC4\x7Fexp\uFF1AExpiration time\uFF0C\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\u6233\u3002\u8D85\u8FC7\u6B64\u65F6\u95F4\u7684token\u4F1A\u4F5C\u5E9F\uFF0C \u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570\x7Fiat: \u4EE4\u724C\u7684\u9881\u53D1\u65F6\u95F4\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570\x7Fjti: \u4EE4\u724C\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BE5\u58F0\u660E\u7684\u503C\u5728\u4EE4\u724C\u9881\u53D1\u8005\u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u4EE4\u724C\u4E2D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81\uFF0C\u5B83\u901A\u5E38\u662F\u4E00\u4E2A\u5BC6\u7801\u5B66\u968F\u673A\u503C\u3002\u8FD9\u4E2A\u503C\u76F8\u5F53\u4E8E\u5411\u7ED3\u6784\u5316\u4EE4\u724C\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u5F97\u7684\u968F\u673A\u71B5\u7EC4\u4EF6\uFF0C\u6709\u5229\u4E8E\u9632\u6B62\u4EE4\u724C\u731C\u6D4B\u653B\u51FB\u548C\u91CD\u653E\u653B\u51FB\u3002"><div></div></button></div></figure></div>
<p><font style="color:rgb(51, 51, 51);">\u4E5F\u53EF\u4EE5\u65B0\u589E\u7528\u6237\u7CFB\u7EDF\u9700\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6DFB\u52A0\u4E86name \u7528\u6237\u6635\u79F0\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"sub": "1234567890",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"name": "John Doe"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;sub&#x22;: &#x22;1234567890&#x22;,\x7F  &#x22;name&#x22;: &#x22;John Doe&#x22;\x7F}"><div></div></button></div></figure></div>
<p><font style="color:rgb(51, 51, 51);">\u7136\u540E\u5C06\u5176\u8FDB\u884CBase64\u7F16\u7801\uFF0C\u5F97\u5230JWT\u7684\u7B2C\u4E8C\u90E8\u5206\uFF1A</font></p>
<p><code dir="auto">JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE</code></p>
<ol start="3">
<li><strong>\u7B7E\u540D\uFF08Signature\uFF09</strong>:</li>
</ol>
<p><font style="color:rgb(51, 51, 51);">\u4E3A\u4E86\u751F\u6210\u7B7E\u540D\u90E8\u5206\uFF0C\u9700\u8981\u5C06\u7F16\u7801\u540E\u7684\u5934\u90E8\u3001\u8F7D\u8377\u548C\u4E00\u4E2A\u5BC6\u94A5\uFF08\u6709\u4E9B\u60C5\u51B5\u4E0B\u662F\u79C1\u94A5\uFF09\u6309\u7167\u6307\u5B9A\u7684\u7B97\u6CD5\uFF08\u5728\u4E0B\u6587JWKS\u4E2D\u6307\u5B9A\uFF09\u7EC4\u5408\u5728\u4E00\u8D77\u8FDB\u884C\u7B7E\u540D\u3002<br>
</font><font style="color:rgb(51, 51, 51);">\u8FD9\u4E2A\u90E8\u5206\u9700\u8981Base64\u7F16\u7801\u540E\u7684Header\u548CBase64\u7F16\u7801\u540E\u7684Payload\u4F7F\u7528 . \u8FDE\u63A5\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u901A\u8FC7Header\u4E2D\u58F0\u660E\u7684\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u52A0\u5BC6\uFF08$secret \u8868\u793A\u7528\u6237\u7684\u79C1\u94A5\uFF09\uFF0C\u7136\u540E\u5C31\u6784\u6210\u4E86jwt\u7684\u7B2C\u4E09\u90E8\u5206\u3002</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">var signature = HMACSHA256(encodedString, '$secret');</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="var encodedString = base64UrlEncode(header) + &#x27;.&#x27; + base64UrlEncode(payload);\x7Fvar signature = HMACSHA256(encodedString, &#x27;$secret&#x27;);"><div></div></button></div></figure></div>
<p><font style="color:rgb(51, 51, 51);">\u5C06\u8FD9\u4E09\u90E8\u5206\u7528 . \u8FDE\u63A5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u5B57\u7B26\u4E32\uFF0C</font><code dir="auto">&#x3C;font style="color:rgb(51, 51, 51);">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.&#x3C;/font>JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE&#x3C;font style="color:rgb(51, 51, 51);">.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&#x3C;/font></code></p>
<h4 id="\u4EC0\u4E48\u662Fjwks">\u4EC0\u4E48\u662FJWKS</h4>
<p>\u5728\u4E91\u539F\u751FAPI\u7F51\u5173\u4E2D\uFF0C\u901A\u8FC7\u4E00\u7EC4<font style="color:rgb(51, 51, 51);">JWKS</font>\u6765\u63CF\u8FF0Header\u4FE1\u606F\uFF0C<font style="color:rgb(51, 51, 51);">JWKS\uFF08JSON Web Key Set\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u8868\u793A\u516C\u94A5\u548C\u79C1\u94A5\u96C6\u5408\u7684\u683C\u5F0F\uFF0C\u901A\u5E38\u7528\u4E8E\u652F\u6301 JWT \u7684\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u6388\u6743\u573A\u666F\u3002</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"kty": "oct",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"k": "GFmQpiJq42SxAWyIN5vnlUzrVDhcdBjKZ8uw0ag3XO1",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"alg": "HS256"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;keys&#x22;: [\x7F        {\x7F            &#x22;kty&#x22;: &#x22;oct&#x22;,\x7F            &#x22;k&#x22;: &#x22;GFmQpiJq42SxAWyIN5vnlUzrVDhcdBjKZ8uw0ag3XO1&#x22;,\x7F            &#x22;alg&#x22;: &#x22;HS256&#x22;\x7F        }\x7F    ]\x7F}"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"keys": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"e": "\u516C\u94A5\u7684\u6307\u6570\uFF0C\u4F8B\u5982AQAB",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"kid": "Key ID",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"kty": "\u4F7F\u7528\u7684\u52A0\u5BC6\u7B97\u6CD5\u7684\u5BB6\u65CF\uFF0C\u4F8B\u5982RSA\uFF0C\u5FC5\u586B\uFF0C\u5927\u5C0F\u5199\u654F\u611F",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"alg": "\u4F7F\u7528\u7684\u5177\u4F53\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u4F8B\u5982RS256\uFF0C\u5FC5\u586B\uFF0C\u5927\u5C0F\u5199\u654F\u611F",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"use": "\u5BC6\u94A5\u7684\u7528\u9014\uFF0C\u4F8B\u5982sig\uFF0C\u7528\u4E8E\u7B7E\u540D",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">"n": "\u516C\u94A5\u7684\u6A21\u503C"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;keys&#x22;: [\x7F        {\x7F            &#x22;e&#x22;: &#x22;\u516C\u94A5\u7684\u6307\u6570\uFF0C\u4F8B\u5982AQAB&#x22;,\x7F            &#x22;kid&#x22;: &#x22;Key ID&#x22;,\x7F            &#x22;kty&#x22;: &#x22;\u4F7F\u7528\u7684\u52A0\u5BC6\u7B97\u6CD5\u7684\u5BB6\u65CF\uFF0C\u4F8B\u5982RSA\uFF0C\u5FC5\u586B\uFF0C\u5927\u5C0F\u5199\u654F\u611F&#x22;,\x7F            &#x22;alg&#x22;: &#x22;\u4F7F\u7528\u7684\u5177\u4F53\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u4F8B\u5982RS256\uFF0C\u5FC5\u586B\uFF0C\u5927\u5C0F\u5199\u654F\u611F&#x22;,\x7F            &#x22;use&#x22;: &#x22;\u5BC6\u94A5\u7684\u7528\u9014\uFF0C\u4F8B\u5982sig\uFF0C\u7528\u4E8E\u7B7E\u540D&#x22;,\x7F            &#x22;n&#x22;: &#x22;\u516C\u94A5\u7684\u6A21\u503C&#x22;\x7F        }\x7F    ]\x7F}"><div></div></button></div></figure></div>
<h4 id="jwt-\u8BA4\u8BC1\u662F\u4E91\u539F\u751Fapi\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5982\u4E0B"><font style="color:rgb(51, 51, 51);">JWT \u8BA4\u8BC1\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\uFF0C\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5982\u4E0B\uFF1A</font></h4>
<p><a href="https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=anS1c" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743</a></p>
<ol>
<li><font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u8D77\u8BA4\u8BC1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u4E00\u822C\u4F1A\u643A\u5E26\u7EC8\u7AEF\u7528\u6237\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">\u7F51\u5173\u5C06\u8BF7\u6C42\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">\u540E\u7AEF\u670D\u52A1\u8BFB\u53D6\u8BF7\u6C42\u4E2D\u7684\u9A8C\u8BC1\u4FE1\u606F\uFF08\u6BD4\u5982\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF09\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\u4F7F\u7528\u79C1\u94A5\u751F\u6210\u6807\u51C6\u7684token\uFF0C\u8FD4\u56DE\u7ED9\u7F51\u5173\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">\u7F51\u5173\u5C06\u643A\u5E26token\u7684\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5C06\u8FD9\u4E2Atoken\u7F13\u5B58\u5230\u672C\u5730\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u9001\u4E1A\u52A1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u643A\u5E26token\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">\u7F51\u5173\u4F7F\u7528\u7528\u6237\u901A\u8FC7JWT\u8BA4\u8BC1\u914D\u7F6E\u4E2DJWKS\u8BBE\u5B9A\u7684\u516C\u94A5\u5BF9\u8BF7\u6C42\u4E2D\u7684token\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u5C06\u8BF7\u6C42\u900F\u4F20\u7ED9\u540E\u7AEF\u670D\u52A1\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">\u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u4E1A\u52A1\u5904\u7406\u540E\u5E94\u7B54\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">\u7F51\u5173\u5C06\u4E1A\u52A1\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</font></li>
</ol>
<h4 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879\uFF1A</h4>
<ol>
<li><font style="color:rgb(51, 51, 51);">JWT \u901A\u5E38\u8BBE\u7F6E\u6709\u8FC7\u671F\u65F6\u95F4\uFF0C\u8FC7\u671F\u65F6\u95F4\u7684\u8BBE\u7F6E\u662F\u4E00\u6B21\u6027\u7684\uFF0C\u5373\u5BA2\u6237\u7AEF\u9700\u8981\u5408\u7406\u7684\u7BA1\u7406 Token \u7684\u5931\u6548\u4EE5\u514D Token \u5931\u6548\u540E\u5F71\u54CD\u8BBF\u95EE\uFF0C\u540C\u65F6 Token \u4E00\u65E6\u9881\u53D1\u65E0\u6CD5\u64A4\u9500\uFF0C\u5373\u4F7F\u7528\u6237\u5DF2\u7ECF\u65E0\u6743\u9650\uFF0C\u53EA\u8981 Token \u8FD8\u5728\u6709\u6548\u671F\uFF0C\u4FBF\u4F9D\u7136\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5F15\u53D1\u5B89\u5168\u98CE\u9669\u3002</font></li>
<li><font style="color:rgb(51, 51, 51);">JWT \u9ED8\u8BA4\u662F\u4E0D\u52A0\u5BC6\uFF0C\u4E0D\u8981\u5C06\u79D8\u5BC6\u6570\u636E\u5199\u5165 JWT\u3002</font></li>
<li>JWT \u672C\u8EAB\u5305\u542B\u4E86\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E00\u65E6\u6CC4\u9732\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u83B7\u5F97\u8BE5\u4EE4\u724C\u7684\u6240\u6709\u6743\u9650\u3002\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u7684\u6709\u6548\u671F\u5E94\u8BE5\u8BBE\u7F6E\u5F97\u6BD4\u8F83\u77ED\u3002\u5BF9\u4E8E\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u6743\u9650\uFF0C\u4F7F\u7528\u65F6\u5E94\u8BE5\u518D\u6B21\u5BF9\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\u3002</li>
<li>\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u4E0D\u5E94\u8BE5\u4F7F\u7528 HTTP \u534F\u8BAE\u660E\u7801\u4F20\u8F93\uFF0C\u8981\u4F7F\u7528HTTPS \u534F\u8BAE\u4F20\u8F93\u3002</li>
</ol>
<h3 id="aksk-\u8BA4\u8BC1">AK/SK \u8BA4\u8BC1</h3>
<p><strong><font style="color:rgb(51, 51, 51);">AK(Access Key ID)/SK\uFF08Access Secret Key\uFF09</font></strong><font style="color:rgb(51, 51, 51);">\uFF1A\u662F\u963F\u91CC\u4E91\u5BF9\u4E00\u4E2A\u660E\u786E\u7684\u7528\u6237\u8EAB\u4EFD\u7684\u4E00\u4E2A\u62BD\u8C61\uFF0C\u4E91\u539F\u751FAPI\u7F51\u5173\u6CBF\u7528\u8FD9\u4E2A\u8BBE\u8BA1\uFF08\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684\u4E91\u539F\u751F API \u7F51\u5173\u751F\u6210\u7684 AK/SK \u4E0E RAM \u7684 AK /SK \u76F8\u4E92\u72EC\u7ACB\uFF0C\u5E76\u4E0D\u80FD\u4E92\u901A\u4F7F\u7528\uFF09\uFF0C\u7528\u6765\u6807\u8BC6\u4E00\u4E2A\u7F51\u5173\u7528\u6237\u7684\u8EAB\u4EFD\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u7528\u6237\u53EF\u80FD\u6709\u591A\u79CD\u8EAB\u4EFD\u7C7B\u578B\uFF0C\u6BCF\u79CD\u8EAB\u4EFD\u7C7B\u578B\u53EF\u4EE5\u6709\u591A\u4E2A\u51ED\u8BC1\uFF0C\u7C7B\u4F3C\u591A\u4E2A\u8D26\u53F7\uFF0C\u4E00\u7EC4AK/SK\u53EF\u4EE5\u7B80\u5355\u5BF9\u5E94\u5230\u4E00\u7EC4\u7528\u6237\u8D26\u5BC6\u3002</font></p>
<p><font style="color:rgb(51, 51, 51);">API\u63D0\u4F9B\u8005\u7ED9\u6709\u6743\u9650\u7684\u7528\u6237\u5206\u914DAK/SK\uFF0CAPI\u6D88\u8D39\u8005\u8BF7\u6C42\u65F6\u5E26\u4E0AAK\uFF0C\u670D\u52A1\u7AEF\u5C31\u53EF\u4EE5\u8BC6\u522B\u8C03\u7528\u8005\u7684\u4FE1\u606F\uFF0C\u5E76\u8FDB\u884C\u66F4\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u7BA1\u7406\u3002</font></p>
<p><strong><font style="color:rgb(51, 51, 51);">HMAC\uFF1A</font></strong><font style="color:rgb(51, 51, 51);">HMAC\uFF08Hash-based Message Authentication Code\uFF09\u662F\u4E00\u79CD\u57FA\u4E8E\u54C8\u5E0C\u51FD\u6570\u7684\u6D88\u606F\u8BA4\u8BC1\u7801\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u4FE1\u606F\u7684\u5B8C\u6574\u6027\u548C\u8EAB\u4EFD\u9A8C\u8BC1\u3002HMAC\u7ED3\u5408\u4E86\u54C8\u5E0C\u51FD\u6570\u548C\u5BC6\u94A5\u7684\u4F18\u70B9\uFF0C\u63D0\u4F9B\u4E86\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u5B89\u5168\u8BA4\u8BC1\u7684\u4FDD\u8BC1\u3002</font></p>
<p><font style="color:rgb(51, 51, 51);">\u5728\u57FA\u4E8EHMAC \u7684AK/SK \u8BA4\u8BC1\u8FC7\u7A0B\u4E2D\uFF0CHMAC\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u786E\u4FDD\u6D88\u606F\u7684\u5B8C\u6574\u6027\u548C\u8EAB\u4EFD\u9A8C\u8BC1\u3002\u5176\u5177\u4F53\u4F5C\u7528\u5982\u4E0B\uFF1A</font></p>
<ol>
<li><strong>\u8EAB\u4EFD\u9A8C\u8BC1</strong>\uFF1A\u901A\u8FC7\u4F7F\u7528\u5171\u4EAB\u5BC6\u94A5\uFF0C\u53EA\u6709\u6301\u6709\u8BE5\u5BC6\u94A5\u7684\u7528\u6237\u624D\u80FD\u751F\u6210\u6B63\u786E\u7684HMAC\uFF0C\u4ECE\u800C\u53EF\u4EE5\u786E\u8BA4\u6D88\u606F\u7684\u53D1\u9001\u8005\u7684\u8EAB\u4EFD\u3002</li>
<li><strong>\u6570\u636E\u5B8C\u6574\u6027</strong>\uFF1A\u4EFB\u4F55\u5BF9\u6D88\u606F\u5185\u5BB9\u7684\u4FEE\u6539\u90FD\u4F1A\u5BFC\u81F4HMAC\u503C\u7684\u53D8\u5316\uFF0C\u56E0\u6B64\u63A5\u6536\u65B9\u53EF\u4EE5\u901A\u8FC7\u8BA1\u7B97\u63A5\u6536\u5230\u7684\u6D88\u606F\u7684HMAC\u503C\u6765\u9A8C\u8BC1\u6D88\u606F\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u662F\u5426\u88AB\u7BE1\u6539\u3002</li>
<li><strong>\u9632\u6B62\u91CD\u653E\u653B\u51FB</strong>\uFF1A\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0CHMAC\u8FD8\u53EF\u4EE5\u5E2E\u52A9\u9632\u6B62\u91CD\u653E\u653B\u51FB\u3002\u901A\u8FC7\u5728\u6D88\u606F\u4E2D\u52A0\u5165\u65F6\u95F4\u6233\u6216\u968F\u673A\u6570\uFF0C\u63A5\u6536\u65B9\u53EF\u4EE5\u786E\u4FDD\u6D88\u606F\u7684\u552F\u4E00\u6027\u548C\u65B0\u9C9C\u6027\u3002</li>
</ol>
<h4 id="akskhmac\u8BA4\u8BC1\u662F\u4E91\u539F\u751Fapi\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5305\u62EC\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u548C\u670D\u52A1\u7AEF\u9A8C\u8BC1\u524D\u9762\u4E24\u4E2A\u6B65\u9AA4"><font style="color:rgb(51, 51, 51);">AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\uFF0C\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5305\u62EC\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u548C\u670D\u52A1\u7AEF\u9A8C\u8BC1\u524D\u9762\u4E24\u4E2A\u6B65\u9AA4</font></h4>
<h5 id="\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u6D41\u7A0B"><font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u6D41\u7A0B\uFF1A</font></h5>
<p><a href="https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=x7N1B" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743</a></p>
<ol>
<li><font style="color:rgb(51, 51, 51);">\u63D0\u53D6\u7B7E\u540D\u4E32\uFF1A\u5BA2\u6237\u7AEF\u4ECEHTTP\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51FA\u5173\u952E\u6570\u636E\uFF0C\u7EC4\u6210\u4E00\u4E2A\u7B7E\u540D\u4E32\uFF0C\u5982\u4E91\u539F\u751FAPI\u7F51\u5173\u7684\u7B7E\u540D\u4E32\u5185\u5BB9\u4E3B\u8981\u7531\u4EE5\u4E0B7\u90E8\u5206\u7EC4\u6210\uFF1A</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTPMethod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Accept</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-MD5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Type</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Date</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">PathAndParameters</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTPMethod\x7FAccept\x7FContent-MD5\x7FContent-Type\x7FDate\x7FHeaders\x7FPathAndParameters"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789"><div></div></button></div></figure></div>
<p>\u63D0\u53D6\u539F\u7B7E\u540D\u4E32\u5E76\u8FFD\u52A0AK/SK\u8BA4\u8BC1\u7684 AK\u548C\u7B7E\u540D\u7B97\u6CD5\uFF0C\u5F62\u6210\u6700\u7EC8\u7B7E\u540D\u4E32\uFF0Cheader\u4E4B\u95F4\u7528\\n \u6362\u884C\u7B26\u5206\u9694</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385\uFF0CAK/SK\u8EAB\u4EFD\u914D\u7F6E\u4E2D\u7684AK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST\x7Fapplication/json; charset=utf-8\x7Fapplication/x-www-form-urlencoded; charset=utf-8\x7FWed, 09 May 2018 13:30:29 GMT+00:00\x7F/http2test/test?param1=test&#x26;password=123456789&#x26;username=xiaoming\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fx-ca-timestamp:1525872629832\x7F\x7F##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers\x7Fx-ca-key:203753385\uFF0CAK/SK\u8EAB\u4EFD\u914D\u7F6E\u4E2D\u7684AK\x7Fx-ca-signature-method:HmacSHA256"><div></div></button></div></figure></div>
<ol start="2">
<li><font style="color:rgb(51, 51, 51);">\u52A0\u5BC6\u7B7E\u540D\uFF1A\u5BF9\u7B2C1\u6B65\u63D0\u53D6\u7684\u7B7E\u540D\u4E32\u4F7F\u7528HmacSha256\u7B97\u6CD5\u8FDB\u884C\u52A0\u5BC6\u548CBase64\u7F16\u7801\u5904\u7406\u5F97\u5230\u7B7E\u540D\u5185\u5BB9\uFF0C\u5982</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">Mac hmacSha256 </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Mac.</span><span style="--0:#B392F0">getInstance</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] secretBytes </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> secret.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">);</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">hmacSha256.</span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">new</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">SecretKeySpec</span><span style="--0:#E1E4E8">(secretBytes, </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8">, secretBytes.length, </span><span style="--0:#9ECBFF">"HmacSHA256"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">[] result </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> hmacSha256.</span><span style="--0:#B392F0">doFinal</span><span style="--0:#E1E4E8">(stringToSign.</span><span style="--0:#B392F0">getBytes</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"UTF-8"</span><span style="--0:#E1E4E8">));</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">String sign </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> Base64.</span><span style="--0:#B392F0">encodeBase64String</span><span style="--0:#E1E4E8">(result);</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Mac hmacSha256 = Mac.getInstance(&#x22;HmacSHA256&#x22;);\x7Fbyte[] secretBytes = secret.getBytes(&#x22;UTF-8&#x22;);\x7FhmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, &#x22;HmacSHA256&#x22;));\x7Fbyte[] result = hmacSha256.doFinal(stringToSign.getBytes(&#x22;UTF-8&#x22;));\x7FString sign = Base64.encodeBase64String(result);"><div></div></button></div></figure></div>
<ol start="3">
<li><font style="color:rgb(51, 51, 51);">\u6DFB\u52A0\u7B7E\u540D\uFF1A\u5C06\u7B2C2\u6B65\u751F\u6210\u7684\u7B7E\u540D\u548C\u53C2\u4E0E\u524D\u9762\u53C2\u4E0E\u52A0\u7B7E\u7684header\u4F5C\u4E3Aheader\u4E00\u5E76\u6DFB\u52A0\u5230http\u8BF7\u6C42\u4E2D</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-headers\uFF1A\u53C2\u4E0E\u7B7E\u540D\u7684header\u7684key\u7684\u96C6\u5408\uFF0C\u82F1\u6587\u9017\u53F7\u5206\u9694</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature\uFF1A\u7B7E\u540D\uFF0C\u5FC5\u9009\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="x-ca-signature-headers\uFF1A\u53C2\u4E0E\u7B7E\u540D\u7684header\u7684key\u7684\u96C6\u5408\uFF0C\u82F1\u6587\u9017\u53F7\u5206\u9694\x7Fx-ca-signature\uFF1A\u7B7E\u540D\uFF0C\u5FC5\u9009\u3002"><div></div></button></div></figure></div>
<p>\u5F97\u5230\u5F85\u53D1\u9001\u7ED9\u7F51\u5173\u7684\u643A\u5E26\u7B7E\u540D\u7684HTTP\u8BF7\u6C42</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers\u7B7E\u540D\u76F8\u5173\u7684headers</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789\x7F\x7F##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers\x7Fx-ca-key:203753385\x7Fx-ca-signature-method:HmacSHA256\x7F\x7F##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers\u7B7E\u540D\u76F8\u5173\u7684headers\x7Fx-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method\x7Fx-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM="><div></div></button></div></figure></div>
<h5 id="\u7F51\u5173\u9A8C\u8BC1\u7B7E\u540D\u6D41\u7A0B\u56FE"><font style="color:rgb(51, 51, 51);">\u7F51\u5173\u9A8C\u8BC1\u7B7E\u540D\u6D41\u7A0B\u56FE\uFF1A</font></h5>
<p><a href="https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=VUh5K" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743</a></p>
<ol>
<li><font style="color:rgb(24, 24, 24);">\u63D0\u53D6\u7B7E\u540D\u4E32\uFF1A\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u63D0\u53D6\u5173\u952E\u6570\u636E\uFF0C\u5F97\u5230\u4E00\u4E2A\u7528\u6765\u7B7E\u540D\u7684\u5B57\u7B26\u4E32\u3002</font></li>
</ol>
<p>\u6536\u5230\u7684HTTP\u8BF7\u6C42</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">##AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u65B0\u589E\u7684header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">##\u7B7E\u540D\u65B0\u589E\u7684header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789\x7F\x7F##AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u65B0\u589E\u7684header\x7Fx-ca-key:203753385\x7Fx-ca-signature-method:HmacSHA256\x7F\x7F##\u7B7E\u540D\u65B0\u589E\u7684header\x7Fx-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method\x7Fx-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM="><div></div></button></div></figure></div>
<ol start="2">
<li><font style="color:rgb(24, 24, 24);">\u63D0\u53D6AK\uFF1A\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6AK \uFF0C\u901A\u8FC7AK \u67E5\u8BE2\u5230\u5BF9\u5E94\u7684SK</font></li>
<li><font style="color:rgb(24, 24, 24);">\u63D0\u53D6\u7B7E\u540D\u4E32\u5E76\u8BA1\u7B97\u7B7E\u540D\uFF1A\u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u548CSK\u5BF9\u5173\u952E\u6570\u636E\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\uFF0C\u5F97\u5230\u7B7E\u540D\u3002</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /http2test/test?param1=test HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">host:api.aliyun.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">accept:application/json; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ca_version:1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-type:application/x-www-form-urlencoded; charset=utf-8</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-timestamp:1525872629832</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date:Wed, 09 May 2018 13:30:29 GMT+00:00</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">user-agent:ALIYUN-ANDROID-DEMO</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length:33</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">username=xiaoming&#x26;password=123456789</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">##AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u65B0\u589E\u7684header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-key:203753385</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-ca-signature-method:HmacSHA256</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /http2test/test?param1=test HTTP/1.1\x7Fhost:api.aliyun.com\x7Faccept:application/json; charset=utf-8\x7Fca_version:1\x7Fcontent-type:application/x-www-form-urlencoded; charset=utf-8\x7Fx-ca-timestamp:1525872629832\x7Fdate:Wed, 09 May 2018 13:30:29 GMT+00:00\x7Fuser-agent:ALIYUN-ANDROID-DEMO\x7Fx-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44\x7Fcontent-length:33\x7Fusername=xiaoming&#x26;password=123456789\x7F\x7F##AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u65B0\u589E\u7684header\x7Fx-ca-key:203753385\x7Fx-ca-signature-method:HmacSHA256"><div></div></button></div></figure></div>
<ol start="4">
<li><font style="color:rgb(24, 24, 24);">\u7B7E\u540D\u9A8C\u8BC1\uFF1A\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6\u5BA2\u6237\u7AEF\u7B7E\u540D\uFF0C\u670D\u52A1\u7AEF\u4F7F\u7528\u7B2C3\u4E0D\u83B7\u53D6\u7684\u79C1\u94A5\u8FDB\u884C\u7B7E\u540D\u9A8C\u8BC1\uFF0C\u5BF9\u6BD4\u670D\u52A1\u5668\u7AEF\u7B7E\u540D\u548C\u5BA2\u6237\u7AEF\u7B7E\u540D\u7684\u4E00\u81F4\u6027\uFF0C\u4ECE\u800C\u5224\u65AD\u5BA2\u6237\u662F\u5426\u8BA4\u8BC1\u901A\u8FC7</font></li>
</ol>
<h3 id="oauth2\u8BA4\u8BC1">OAuth2\u8BA4\u8BC1</h3>
<h4 id="\u4EC0\u4E48\u662Foauth-20"><font style="color:rgb(51, 51, 51);">\u4EC0\u4E48\u662FOAuth 2.0</font></h4>
<p><font style="color:rgb(51, 51, 51);">OAuth 2.0 \u662F\u4E00\u79CD\u7528\u4E8E\u6388\u6743\u7684\u534F\u8BAE\uFF0C\u5E7F\u6CDB\u7528\u4E8E\u4E92\u8054\u7F51\u5E94\u7528\u4EE5\u5B9E\u73B0\u5B89\u5168\u7684\u6388\u6743\u673A\u5236\u3002OAuth 2.0\u5B9A\u4E49\u4EE5\u4E0B\u51E0\u79CD\u89D2\u8272\uFF1A</font></p>
<ul>
<li><strong><font style="color:rgb(51, 51, 51);">\u8D44\u6E90\u62E5\u6709\u8005\uFF08Resource Owner\uFF09</font></strong><font style="color:rgb(51, 51, 51);">\uFF1A\u901A\u5E38\u662F\u7528\u6237\uFF0C\u62E5\u6709\u6570\u636E\u8BBF\u95EE\u6743\u9650\uFF0C\u4EE5\u4E0B\u7B80\u79F0\u4E3A\u7528\u6237</font></li>
<li><strong><font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\uFF08Client\uFF09</font></strong><font style="color:rgb(51, 51, 51);">\uFF1A\u8BF7\u6C42\u8BBF\u95EE\u8D44\u6E90\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</font></li>
<li><strong><font style="color:rgb(51, 51, 51);">\u6388\u6743\u670D\u52A1\u5668\uFF08Authorization Server\uFF09</font></strong><font style="color:rgb(51, 51, 51);">\uFF1A\u8D1F\u8D23\u9A8C\u8BC1\u7528\u6237\u5E76\u53D1\u653E\u8BBF\u95EE\u4EE4\u724C\u7684\u670D\u52A1\u5668\u3002</font></li>
<li><strong><font style="color:rgb(51, 51, 51);">\u8D44\u6E90\u670D\u52A1\u5668\uFF08Resource Server\uFF09</font></strong><font style="color:rgb(51, 51, 51);">\uFF1A\u5B58\u50A8\u7528\u6237\u6570\u636E\u7684\u670D\u52A1\u5668\u3002</font></li>
</ul>
<h4 id="oauth-20\u534F\u8BAE\u7684\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4"><font style="color:rgb(51, 51, 51);">OAuth 2.0\u534F\u8BAE\u7684\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A</font></h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">1\u3001\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7528\u6237\u6388\u6743\uFF0C\u6B64\u65F6\u901A\u5E38\u4F1A\u8DF3\u8F6C\u7B2C\u4E09\u65B9\u767B\u5F55\u9875</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">2\u3001\u8D44\u6E90\u62E5\u6709\u8005\u7528\u6237\u540C\u610F\u6388\u6743</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">3\u3001\u5BA2\u6237\u7AEF\u4F7F\u7528\u5DF2\u83B7\u5F97\u6388\u6743\uFF0C\u8BF7\u6C42\u6388\u6743\u670D\u52A1\u5668\u53D1\u653EAccess Token</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">4\u3001\u6388\u6743\u670D\u52A1\u5668\u8FD4\u56DEAccess Token</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">5\u3001\u5BA2\u6237\u7AEF\u4F7F\u7528Access Token\uFF0C\u8BF7\u6C42\u8D44\u6E90\u670D\u52A1\u5668</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">6\u3001\u8D44\u6E90\u670D\u52A1\u5668\u9A8C\u8BC1Access Token\uFF0C\u5E76\u8FD4\u56DE\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="1\u3001\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7528\u6237\u6388\u6743\uFF0C\u6B64\u65F6\u901A\u5E38\u4F1A\u8DF3\u8F6C\u7B2C\u4E09\u65B9\u767B\u5F55\u9875\x7F2\u3001\u8D44\u6E90\u62E5\u6709\u8005\u7528\u6237\u540C\u610F\u6388\u6743\x7F3\u3001\u5BA2\u6237\u7AEF\u4F7F\u7528\u5DF2\u83B7\u5F97\u6388\u6743\uFF0C\u8BF7\u6C42\u6388\u6743\u670D\u52A1\u5668\u53D1\u653EAccess Token\x7F4\u3001\u6388\u6743\u670D\u52A1\u5668\u8FD4\u56DEAccess Token\x7F5\u3001\u5BA2\u6237\u7AEF\u4F7F\u7528Access Token\uFF0C\u8BF7\u6C42\u8D44\u6E90\u670D\u52A1\u5668\x7F6\u3001\u8D44\u6E90\u670D\u52A1\u5668\u9A8C\u8BC1Access Token\uFF0C\u5E76\u8FD4\u56DE\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90"><div></div></button></div></figure></div>
<h4 id="\u62BD\u8C61\u6D41\u7A0B\u56FE">\u62BD\u8C61\u6D41\u7A0B\u56FE</h4>
<p><img src="/img/1744033007781.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="oauth-20\u534F\u8BAE\u5B9A\u4E49\u4E864\u79CD\u6388\u6743\u6A21\u5F0F">OAuth 2.0\u534F\u8BAE\u5B9A\u4E49\u4E864\u79CD\u6388\u6743\u6A21\u5F0F\uFF1A</h4>
<ul>
<li>\u6388\u6743\u7801\u6A21\u5F0F\uFF08authorization code\uFF09</li>
<li>\u7B80\u5316\u6A21\u5F0F\uFF08implicit\uFF09</li>
<li>\u5BC6\u7801\u6A21\u5F0F\uFF08resource owner password credentials\uFF09</li>
<li>\u5BA2\u6237\u7AEF\u6A21\u5F0F\uFF08client credentials\uFF09</li>
</ul>
<h5 id="\u6388\u6743\u7801\u6A21\u5F0F">\u6388\u6743\u7801\u6A21\u5F0F\uFF1A</h5>
<p>\u5176\u4E2D\u6388\u6743\u7801\u6A21\u5F0F\u662F\u6700\u4E3A\u5E7F\u6CDB\u4F7F\u7528\u7684\u6388\u6743\u6A21\u5F0F\uFF0C\u5B83\u9002\u7528\u4E8E\u7528\u6237\u6388\u4E88\u7B2C\u4E09\u65B9\u5BA2\u6237\u7AEF\u8BBF\u95EE\u81EA\u8EAB\u8D44\u6E90\u7684\u573A\u666F\uFF0C\u5176\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u7528\u6237\u901A\u8FC7User-Agent\uFF08\u7528\u6237\u4EE3\u7406\uFF0C\u901A\u5E38\u662F\u6D4F\u89C8\u5668\uFF09\u4E0EClient\u7B2C\u4E09\u65B9\u5BA2\u6237\u7AEF\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5176\u4EA4\u4E92\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u4E09\u6B65\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">A\u3001\u6D4F\u89C8\u5668\u8BBF\u95EE\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">B\u3001\u7528\u6237\u901A\u8FC7\u6D4F\u89C8\u5668\u4E0E\u5BA2\u6237\u7AEF\u4EA4\u4E92</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">C\u3001\u5BA2\u6237\u7AEF\u901A\u8FC7\u6D4F\u89C8\u5668\u900F\u4F20AuthorizationCode\u53CARedirectUri\u7B49\u53C2\u6570</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">User-Agent\u4EE3\u7406\u7528\u6237\u4E0E\u6388\u6743\u670D\u52A1\u5668\u4EA4\u4E92\uFF0C\u5176\u4EA4\u4E92\u6D41\u7A0B\u5982\u4E0B\uFF1A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">A\u3001User-Agent\u4F7F\u7528\u7B2C\u4E09\u65B9\u6388\u6743\uFF0CUser-Agent\u643A\u5E26client\u5B9A\u4F4D\u7B26\u4E0E\u91CD\u5B9A\u5411uri\u5730\u5740\u5C06\u7528\u6237\u6307\u5411</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u8BA4\u8BC1\u670D\u52A1\u5668\u7684\u8BA4\u8BC1\u9875</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">B\u3001\u7528\u6237\u901A\u8FC7User-Agent\u6388\u6743\u8BBF\u95EE</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">C\u3001\u6388\u6743\u670D\u52A1\u5668\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\uFF0C\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\u5C06\u6388\u6743\u7801\u9644\u5728A\u6B65\u9AA4\u91CD\u5B9A\u5411Uri\u5730\u5740\u4E4B\u540E\uFF0C\u7136\u540E\u5BFC\u5411\u91CD\u5B9A\u5411Uri</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">D\u3001\u5BA2\u6237\u7AEF\u6536\u5230\u6388\u6743\u7801\u5C06\u5176\u9644\u5728\u91CD\u5B9A\u5411uri\u4E2D\uFF0C\u8BF7\u6C42\u6388\u6743\u670D\u52A1\u5668\uFF0C\u83B7\u53D6Access Token</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">E\u3001\u6388\u6743\u670D\u52A1\u5668\u548C\u6838\u5BF9\u91CD\u5B9A\u5411uri\u5730\u5740\u548C\u6388\u6743\u7801\u65E0\u8BEF\u540E\uFF0C\u53D1\u653EAccess Token\u548CRefresh Token\uFF08\u53EF\u9009\u7684\uFF09</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="\u7528\u6237\u901A\u8FC7User-Agent\uFF08\u7528\u6237\u4EE3\u7406\uFF0C\u901A\u5E38\u662F\u6D4F\u89C8\u5668\uFF09\u4E0EClient\u7B2C\u4E09\u65B9\u5BA2\u6237\u7AEF\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5176\u4EA4\u4E92\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u4E09\u6B65\uFF1A\x7FA\u3001\u6D4F\u89C8\u5668\u8BBF\u95EE\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F\x7FB\u3001\u7528\u6237\u901A\u8FC7\u6D4F\u89C8\u5668\u4E0E\u5BA2\u6237\u7AEF\u4EA4\u4E92\x7FC\u3001\u5BA2\u6237\u7AEF\u901A\u8FC7\u6D4F\u89C8\u5668\u900F\u4F20AuthorizationCode\u53CARedirectUri\u7B49\u53C2\u6570\x7F\x7FUser-Agent\u4EE3\u7406\u7528\u6237\u4E0E\u6388\u6743\u670D\u52A1\u5668\u4EA4\u4E92\uFF0C\u5176\u4EA4\u4E92\u6D41\u7A0B\u5982\u4E0B\uFF1A\x7FA\u3001User-Agent\u4F7F\u7528\u7B2C\u4E09\u65B9\u6388\u6743\uFF0CUser-Agent\u643A\u5E26client\u5B9A\u4F4D\u7B26\u4E0E\u91CD\u5B9A\u5411uri\u5730\u5740\u5C06\u7528\u6237\u6307\u5411\x7F\u8BA4\u8BC1\u670D\u52A1\u5668\u7684\u8BA4\u8BC1\u9875\x7FB\u3001\u7528\u6237\u901A\u8FC7User-Agent\u6388\u6743\u8BBF\u95EE\x7FC\u3001\u6388\u6743\u670D\u52A1\u5668\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\uFF0C\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\u5C06\u6388\u6743\u7801\u9644\u5728A\u6B65\u9AA4\u91CD\u5B9A\u5411Uri\u5730\u5740\u4E4B\u540E\uFF0C\u7136\u540E\u5BFC\u5411\u91CD\u5B9A\u5411Uri\x7FD\u3001\u5BA2\u6237\u7AEF\u6536\u5230\u6388\u6743\u7801\u5C06\u5176\u9644\u5728\u91CD\u5B9A\u5411uri\u4E2D\uFF0C\u8BF7\u6C42\u6388\u6743\u670D\u52A1\u5668\uFF0C\u83B7\u53D6Access Token\x7FE\u3001\u6388\u6743\u670D\u52A1\u5668\u548C\u6838\u5BF9\u91CD\u5B9A\u5411uri\u5730\u5740\u548C\u6388\u6743\u7801\u65E0\u8BEF\u540E\uFF0C\u53D1\u653EAccess Token\u548CRefresh Token\uFF08\u53EF\u9009\u7684\uFF09"><div></div></button></div></figure></div>
<h5 id="\u6388\u6743\u7801\u6388\u6743\u6D41\u7A0B\u56FE">\u6388\u6743\u7801\u6388\u6743\u6D41\u7A0B\u56FE\uFF1A</h5>
<p><img src="/img/1744033011502.png" alt="" referrerpolicy="no-referrer"></p>
<h5 id="\u5BA2\u6237\u7AEF\u6A21\u5F0F">\u5BA2\u6237\u7AEF\u6A21\u5F0F\uFF1A</h5>
<p>\u5BA2\u6237\u7AEF\u6A21\u5F0F\u662F\u4E00\u79CD\u7B80\u5316\u7684\u6388\u6743\u6A21\u5F0F\uFF0C\u5B83\u662F\u5BA2\u6237\u7AEF\u4EE5\u201DClient\u201D\u7684\u540D\u4E49\u8BF7\u6C42\u8D44\u6E90\u670D\u52A1\u5668\uFF0C\u800C\u4E0D\u662F\u4EE5\u201D\u7528\u6237\u201D\u540D\u4E49\uFF0C\u5B83\u9002\u7528\u4E8E\u53D7\u4FE1\u7684\u5BA2\u6237\u7AEF\u8BBF\u95EE</p>
<p><img src="/img/1744033014543.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="oidc-\u8BA4\u8BC1">OIDC \u8BA4\u8BC1</h3>
<p><font style="color:rgb(51, 51, 51);">OIDC\u662FOpenID Connect\u7684\u7B80\u79F0\u3002OIDC\uFF08OpenID Connect\uFF09\u662F\u5728OAuth 2.0\u4E4B\u4E0A\u6784\u5EFA\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u5C42\uFF0C\u4E3A\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u7528\u6237\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u80FD\u529B\u3002</font></p>
<h4 id="\u4E3A\u4EC0\u4E48\u8981\u6709oidc"><font style="color:rgb(51, 51, 51);">\u4E3A\u4EC0\u4E48\u8981\u6709OIDC</font></h4>
<ol>
<li><strong>\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u6388\u6743\u7684\u5206\u79BB</strong>\uFF1AOAuth 2.0\u4E3B\u8981\u5173\u6CE8\u6388\u6743Authorization\uFF0C\u800COIDC\u6269\u5C55\u4E86\u8BA4\u8BC1\u7684\u62BD\u8C61\uFF0C\u4EFB\u610F\u5B8C\u6210\u8EAB\u4EFD\u8BA4\u8BC1\u7684 Provider\u5B9E\u73B0\uFF0C\u90FD\u80FD\u6210\u4E3A Identity Provider\uFF0C\u5E76\u4F5C\u4E3AOpenID Provider\u5728 OIDC\u534F\u8BAE\u4E2D\u627F\u62C5\u8BA4\u8BC1\u7684\u804C\u8D23</li>
<li><strong>\u7528\u6237\u4FE1\u606F\u83B7\u53D6</strong>\uFF1AOIDC\u5728\u6269\u5C55\u8BA4\u8BC1\u7684\u57FA\u7840\u63D0\u4F9B\u4E86\u6807\u51C6\u5316\u7684API\u6765\u83B7\u53D6\u7528\u6237\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u80FD\u591F\u8F7B\u677E\u96C6\u6210\u7528\u6237\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002</li>
</ol>
<p>\u603B\u7ED3\u4E00\u4E0B\uFF1AOAuth 2.0\u8BBE\u8BA1\u4E4B\u521D\u662F\u4E3A\u4E86\u89E3\u51B3\u6388\u6743\u7684\u95EE\u9898\uFF0C\u800COIDC \u5728OAuth 2.0\u7684\u57FA\u7840\u4E0A\u6269\u5C55\u4E86\u5173\u4E8E\u8BA4\u8BC1\u7684\u5B9A\u4E49\u5E76\u4E14\u6DFB\u52A0\u4E00\u7EC4\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684API\uFF0C\u4E14OIDC \u5B8C\u5168\u517C\u5BB9OAuth 2.0\u534F\u8BAE\u3002</p>
<h4 id="oidc-\u57FA\u4E8Eoauth-20\u534F\u8BAE\u5B9E\u73B0\u7684\u89D2\u8272\u53CA\u5173\u952E\u8D44\u6E90\u5B9A\u4E49">OIDC \u57FA\u4E8EOAuth 2.0\u534F\u8BAE\u5B9E\u73B0\u7684\u89D2\u8272\u53CA\u5173\u952E\u8D44\u6E90\u5B9A\u4E49</h4>


















































<table><thead><tr><th>OIDC</th><th>OAuth 2.0</th><th>\u8EAB\u4EFD\u63CF\u8FF0</th></tr></thead><tbody><tr><td>EU End User</td><td>Resource Owner</td><td>\u7528\u6237\u3001\u8D44\u6E90\u62E5\u6709\u8005</td></tr><tr><td>RP Relying Party</td><td>Client</td><td>\u5BA2\u6237\u7AEF\uFF08\u524D\u7AEF\u3001\u79FB\u52A8\u7AEF\uFF09</td></tr><tr><td>OpenID Provider</td><td>Authorization Server</td><td>\u8BA4\u8BC1\u670D\u52A1</td></tr><tr><td>Resource Server</td><td>Resource Server</td><td>\u8D44\u6E90\u670D\u52A1\u5668\uFF0C\u63D0\u4F9B\u8D44\u6E90\u8BF7\u6C42\u7684\u670D\u52A1\u5668</td></tr><tr><td>ID Token</td><td>-</td><td>\u8EAB\u4EFD\u4EE4\u724C\uFF08JWT\uFF09\uFF0C\u7528\u4E8E\u6807\u8BC6\u7528\u6237\u901A\u8FC7\u8BA4\u8BC1\u7684\u8EAB\u4EFD\uFF0C\u53EF\u4EE5\u7528\u83B7\u53D6\u7528\u6237\u4FE1\u606F</td></tr><tr><td>Access Token</td><td>Access Token</td><td>\u8BBF\u95EE\u4EE4\u724C\uFF08JWT\uFF09\uFF0C\u7528\u4E8E\u6807\u8BC6\u7528\u6237\u901A\u8FC7\u6388\u6743\uFF0CClient \u643A\u5E26Access Token\u8BBF\u95EE</td></tr><tr><td>Refresh Token</td><td>Refresh Token</td><td>\u5237\u65B0\u4EE4\u724C\uFF0C\u7528\u4E8EAccess Token\u8FC7\u671F\u4E4B\u540E \u7684\u8F6E\u6362</td></tr><tr><td>User-Agent</td><td>User-Agent</td><td>\u7528\u6237\u4EE3\u7406\uFF0C\u901A\u5E38\u662F\u7528\u6237\u4E0E\u4E92\u8054\u4EA4\u4E92\u7684\u754C\u9762\uFF0C\u6BD4\u5982\u6D4F\u89C8\u5668</td></tr></tbody></table>
<h4 id="oidc-\u8BA4\u8BC1-1">OIDC \u8BA4\u8BC1</h4>
<p><font style="color:rgb(24, 24, 24);">\u901A\u8FC7\u4E91\u539F\u751FAPI\u7F51\u5173\u7684OIDC\u8BA4\u8BC1\u529F\u80FD\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5728\u7F51\u5173\u7EDF\u4E00\u8BA4\u8BC1\u9274\u6743\uFF0C\u5E76\u652F\u6301\u57DF\u540D\u7EA7\u522B\u7684\u9ED1\u767D\u540D\u5355\u65B9\u4FBF\u7528\u6237\u7075\u6D3B\u7684\u7BA1\u7406\u8BA4\u8BC1\u6388\u6743\u7684\u7C92\u5EA6\uFF0C\u5176\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\uFF1A</font></p>
<h5 id="oidc-\u8BA4\u8BC1\u8BE6\u7EC6\u6D41\u7A0B">OIDC \u8BA4\u8BC1\u8BE6\u7EC6\u6D41\u7A0B</h5>
<p><a href="https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=rtmQr" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743</a></p>
<ol>
<li><font style="color:rgb(31, 35, 40);">\u8BBF\u95EE\u7528\u6237\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF08\u9700\u8981\u8BA4\u8BC1\u6388\u6743\u8BBF\u95EE\u7684API\uFF09</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl --url "foo.bar.com/headers"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl --url &#x22;foo.bar.com/headers&#x22;"><div></div></button></div></figure></div>
<ol start="2">
<li><font style="color:rgb(31, 35, 40);">\u4E91\u539F\u751FAPI\u7F51\u5173\u5C06\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\u8EAB\u4EFD\u63D0\u4F9B\u5546\uFF08IDP\uFF09\u767B\u5F55\u9875\u540C\u65F6\u643A\u5E26 client_id\u3001response_type\u3001scope \u7B49OIDC \u8BA4\u8BC1\u7684\u53C2\u6570\uFF0Cresponse_type\u8BBE\u7F6E\u4E3Acode\uFF0C\u5373\u4F7F\u7528OAuth 2.0\u6388\u6743\u7801\u6A21\u5F0F\u83B7\u53D6token\uFF0C\u540C\u65F6\u8BBE\u7F6Ecsrf cookie\uFF0C \u9632\u5FA1csrf\u653B\u51FB\uFF08</font><font style="color:rgb(51, 51, 51);">Cross-Site Request Forgery -\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020</font><font style="color:rgb(31, 35, 40);">) </font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/authorize"\\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "approval_prompt=force" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "response_type=code" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "scope=openid+email+offline_access" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--header "Set-Cookie: _oauth2_proxy_csrf=LPruATEDgcdmelr8zScD_ObhsbP4zSzvcgmPlcNDcJpFJ0OvhxP2hFotsU-kZnYxd5KsIjzeIXGTOjf8TKcbTHbDIt-aQoZORXI_0id3qeY0Jt78223DPeJ1xBqa8VO0UiEOUFOR53FGxirJOdKFxaAvxDFb1Ok=|1718962455|V1QGWyjQ4hMNOQ4Jtf17HeQJdVqHdt5d65uraFduMIU=; Path=/; Expires=Fri, 21 Jun 2024 08:06:20 GMT; HttpOnly"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl --url &#x22;https://dev-o43xb1mz7ya7ach4.us.auth0.com/authorize&#x22;\\\x7F  --url-query &#x22;approval_prompt=force&#x22; \\\x7F  --url-query &#x22;client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ&#x22; \\\x7F  --url-query &#x22;redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback&#x22; \\\x7F  --url-query &#x22;response_type=code&#x22; \\\x7F  --url-query &#x22;scope=openid+email+offline_access&#x22; \\\x7F  --url-query &#x22;state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo&#x22; \\\x7F  --header &#x22;Set-Cookie: _oauth2_proxy_csrf=LPruATEDgcdmelr8zScD_ObhsbP4zSzvcgmPlcNDcJpFJ0OvhxP2hFotsU-kZnYxd5KsIjzeIXGTOjf8TKcbTHbDIt-aQoZORXI_0id3qeY0Jt78223DPeJ1xBqa8VO0UiEOUFOR53FGxirJOdKFxaAvxDFb1Ok=|1718962455|V1QGWyjQ4hMNOQ4Jtf17HeQJdVqHdt5d65uraFduMIU=; Path=/; Expires=Fri, 21 Jun 2024 08:06:20 GMT; HttpOnly&#x22;"><div></div></button></div></figure></div>
<ol start="3">
<li><font style="color:rgb(31, 35, 40);">\u91CD\u5B9A\u5411\u5230\u8EAB\u4EFD\u63D0\u4F9B\u5546\uFF08IDP\uFF09\u767B\u5F55\u9875\uFF08\u5728\u4E91\u539F\u751F\u7F51\u5173\u4E3A\u7528\u6237\u914D\u7F6E\u7684\u8BA4\u8BC1\u670D\u52A1\u63D0\u4F9B\u7684\u767B\u5F55\u9875\uFF09</font></li>
</ol>
<p><img src="/img/1744033017425.png" alt="" referrerpolicy="no-referrer"></p>
<ol start="4">
<li><font style="color:rgb(31, 35, 40);">\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5B8C\u6210\uFF0C\u5B8C\u6210\u8BA4\u8BC1\u6388\u6743</font></li>
<li><font style="color:rgb(31, 35, 40);">\u643A\u5E26\u6388\u6743\u7801\u91CD\u5B9A\u5411\u5230\u4E91\u539F\u751FAPI\u7F51\u5173\u5E76\u643A\u5E26\u4E86state\u53C2\u6570\u7528\u4E8E\u9A8C\u8BC1csrf cookie \uFF0C\u6388\u6743\u7801\u7528\u4E8E\u4EA4\u6362token</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl --url "http://foo.bar.com/oauth2/callback" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url-query "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl --url &#x22;http://foo.bar.com/oauth2/callback&#x22; \\\x7F  --url-query &#x22;state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo&#x22; \\\x7F  --url-query &#x22;code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm&#x22;"><div></div></button></div></figure></div>
<ol start="6">
<li><font style="color:rgb(31, 35, 40);">\u6821\u9A8C csrf cookie \u4E2D\u52A0\u5BC6\u5B58\u50A8\u7684 state \u503C\u4E0E url \u53C2\u6570\u4E2D\u7684 state \u503C\u5FC5\u987B\u76F8\u540C</font></li>
<li><font style="color:rgb(31, 35, 40);">\u5229\u7528\u6388\u6743\u7801\uFF0C\u8BF7\u6C42\u8EAB\u4EFD\u63D0\u4F9B\u5546\uFF08IDP\uFF09\u4EA4\u6362id_token \u548C access_token\u3001refresh_token</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl -X POST \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "grant_type=authorization_code" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm" \\</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST \\\x7F  --url &#x22;https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token&#x22; \\\x7F  --data &#x22;grant_type=authorization_code&#x22; \\\x7F  --data &#x22;client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ&#x22; \\\x7F  --data &#x22;client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ&#x22; \\\x7F  --data &#x22;redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback&#x22; \\\x7F  --data &#x22;code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm&#x22; \\"><div></div></button></div></figure></div>
<p><font style="color:rgb(31, 35, 40);">\u8FD4\u56DE\u7684\u8BF7\u6C42\u91CC\u5305\u542B\u4E86 id_token, access_token\uFF0Crefresh_token \u7528\u4E8E\u540E\u7EED\u5237\u65B0 token</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"access_token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"refresh_token": "GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imc1Z1ExSF9ZbTY0WUlvVkQwSVpXTCJ9.eyJlbWFpbCI6IjE2MDExNTYyNjhAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL2Rldi1vNDN4YjFtejd5YTdhY2g0LnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJZYWdGcVJEOXRmTklhYWM1QmFtamhzU2F0anJBbnNuWiIsImlhdCI6MTcxOTE5ODYzOCwiZXhwIjoxNzE5MjM0NjM4LCJzdWIiOiJhdXRoMHw2NjVkNzFlNzRjMTMxMTc3YmU2NmU2MDciLCJzaWQiOiJjdDJVOF9ZUS16VDdFOGkwRTNNeUstejc5ZGlWUWhhVSJ9.gfzXKJ0FeqzYqOUDLQHWcUG19IOLqkpLN09xTmIat0umrlGV5VNSumgWH3XJmmwnhdb8AThH3Jf-7kbRJzu4rM-BbGbFTRBTzNHeUajFOFrIgld5VENQ_M_sXHkTp0psWKSr9vF24kmilCfSbvC5lBKjt878ljZ7-xteWuaUYOMUdcJb4DSv0-zjX01sonJxYamTlhji3M4TAW7VwhwqyZt8dBhVSNaRw1wUKj-M1JrBDLyx65sroZtSqVA0udIrqMHEbWYb2de7JjzlqG003HRMzwOm7OXgEd5ZVFqgmBLosgixOU5DJ4A26nlqK92Sp6VqDMRvA-3ym8W_m-wJ_A",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"scope": "openid email offline_access",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"expires_in": 86400,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"token_type": "Bearer"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;access_token&#x22;: &#x22;eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ&#x22;,\x7F    &#x22;refresh_token&#x22;: &#x22;GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG&#x22;,\x7F    &#x22;id_token&#x22;: &#x22;eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imc1Z1ExSF9ZbTY0WUlvVkQwSVpXTCJ9.eyJlbWFpbCI6IjE2MDExNTYyNjhAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL2Rldi1vNDN4YjFtejd5YTdhY2g0LnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJZYWdGcVJEOXRmTklhYWM1QmFtamhzU2F0anJBbnNuWiIsImlhdCI6MTcxOTE5ODYzOCwiZXhwIjoxNzE5MjM0NjM4LCJzdWIiOiJhdXRoMHw2NjVkNzFlNzRjMTMxMTc3YmU2NmU2MDciLCJzaWQiOiJjdDJVOF9ZUS16VDdFOGkwRTNNeUstejc5ZGlWUWhhVSJ9.gfzXKJ0FeqzYqOUDLQHWcUG19IOLqkpLN09xTmIat0umrlGV5VNSumgWH3XJmmwnhdb8AThH3Jf-7kbRJzu4rM-BbGbFTRBTzNHeUajFOFrIgld5VENQ_M_sXHkTp0psWKSr9vF24kmilCfSbvC5lBKjt878ljZ7-xteWuaUYOMUdcJb4DSv0-zjX01sonJxYamTlhji3M4TAW7VwhwqyZt8dBhVSNaRw1wUKj-M1JrBDLyx65sroZtSqVA0udIrqMHEbWYb2de7JjzlqG003HRMzwOm7OXgEd5ZVFqgmBLosgixOU5DJ4A26nlqK92Sp6VqDMRvA-3ym8W_m-wJ_A&#x22;,\x7F    &#x22;scope&#x22;: &#x22;openid email offline_access&#x22;,\x7F    &#x22;expires_in&#x22;: 86400,\x7F    &#x22;token_type&#x22;: &#x22;Bearer&#x22;\x7F}"><div></div></button></div></figure></div>
<ol start="8">
<li><font style="color:rgb(31, 35, 40);">\u7F51\u5173\u5C06\u83B7\u5F97\u7684 id_token, access_token, refresh_token\u52A0\u5BC6\u5B58\u50A8\u5728cookie _oauth2_proxy\u4E2D</font></li>
<li><font style="color:rgb(31, 35, 40);">\u91CD\u5B9A\u5411\u5230\u7528\u6237\u8BBF\u95EE\u7684\u540E\u7AEF\u670D\u52A1\u5E76\u8BBE\u7F6E cookie\uFF0C\u7528\u4E8E\u540E\u7EED\u7528\u6237\u767B\u5F55\u72B6\u6001\u7684\u9A8C\u8BC1\uFF0C\u540C\u65F6\u6E05\u9664csrf\u9632\u62A4\u4E2D\u8BBE\u7F6E\u7684cookie _oauth2_proxy_csrf</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">"Set-Cookie": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"_oauth2_proxy_csrf=; Path=/; Expires=Mon, 24 Jun 2024 02:17:39 GMT; HttpOnly",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"_oauth2_proxy=8zM_Pcfpp_gesKFe4SMg08o5Iv0A8WAOQOmG1-vZBbQ56UggYVC0Cu-gFMEoxJZU5q1O5vqRlVBizlLetgVjRCksGVbttwl8tQ7h5YiyIubbbtvF1T4JzLh3QfzUUrwbB-VznOkh8qLbjAhddocecjBt4rMiDyceKXqMr4eO5TUEMx4vHtJYnTYalMeTYhGXk5MNSyrdZX9NnQnkdrCjiOQM13ggwob2nYwhGWaAlgzFSWkgkdtBy2Cl_YMWZ8_gKk9rDX289-JrJyGpr5k9O9RzRhZoY2iE3Mcr8-Q37RTji1Ga22QO-XkAcSaGqY1Qo7jLdmgZTYKC5JvtdLc4rj3vcbveYxU7R3Pt2vEribQjKTh4Sqb0aA03p4cxXyZN4SUfBW1NAOm4JLPUhKJy8frqC9_E0nVqPvpvnacaoQs8WkX2zp75xHoMa3SD6KZhQ5JUiPEiNkOaUsyafLvht6lLkNDhgzW3BP2czoe0DCDBLnsot0jH-qQpMZYkaGr-ZnRKI1OPl1vHls3mao5juOAW1VB2A9aughgc8SJ55IFZpMfFMdHdTDdMqPODkItX2PK44GX-pHeLxkOqrzp3GHtMInpL5QIQlTuux3erm3CG-ntlUE7JBtN2T9LEb8XfIFu58X9_vzMun4JQlje2Thi9_taI_z1DSaTtvNNb54wJfSPwYCCl4OsH-BacVmPQhH6TTZ6gP2Qsm5TR2o1U2D9fuVkSM-OPCG9l3tILambIQwC3vofMW6X8SIFSmhJUDvN7NbwxowBiZ6Y7GJRZlAk_GKDkpsdrdIvC67QqczZFphRVnm6qi-gPO41APCbcO6fgTwyOhbP3RrZZKWSIqWJYhNE3_Sfkf0565H7sC7Hc8XUUjJvP3WnjKS9x7KwzWa-dsUjV3-Q-VNl-rXTguVNAIirYK-qrMNMZGCRcJqcLnUF0V_J2lVmFyVsSlE3t0sDw2xmbkOwDptXFOjQL5Rb4esUMYdCBWFajBfvUtcZEFtYhD0kb6VcbjXO3NCVW5qKh_l9C9SRCc7TG1vcRAqUQlRXHacTGWfcWsuQkCJ3Mp_oWaDxs1GRDykQYxAn5sTICovThWEU2C6o75grWaNrkj5NU-0eHh3ryvxLmGLBOXZV9OQhtKShWmUgywSWMxOHOuZAqdAPULc8KheuGFjXYp-RnCbFYWePJmwzfQw89kSkj1KUZgMYwKEjSz62z2qc9KLczomv76ortQzvo4Hv9kaW6xVuQj5R5Oq6_WMBOqsmUMzcXpxCIOGjcdcZRBc0Fm09Uy9oV1PRqvAE4PGtfyrCaoqILBix8UIww63B07YGwzQ-hAXDysBK-Vca2x7GmGdXsNXXcTgu00bdsjtHZPDBBWGfL3g_rMAXr2vWyvK4CwNjcaPAmrlF3geHPwbIePT0hskBboX1v1bsuhzsai7rGM4r53pnb1ZEoTQDa1B-HyokFgo14XiwME0zE1ifpNzefjpkz1YY2krJlqfCydNwoKaTit4tD2yHlnxAeFF9iIrxzSKErNUFpmyLa7ge7V33vhEH-6k5oBTLE2Q2BrC6aAkLCcPwU9xv_SzBDQPRY0MEYv3kGF03Swo1crRbGh-aifYX9NiHDsmG6r1vAnx0MAOw2Jzuz2x6SSdfBrzlcoWBlrwiZzd9kAKq75n1Uy9uzZ8SRnkBrEZySHBwEbu196VklkRE0jqwC-e3wWNNuviSOfwkVeX-7QdOoO10yw9VK2sW52lFvIEf4chv_ta7bGfAZOWBjpktG6ZLD81SE6A88zpqG2SysSyNMp9hl-umG-5sFsjCn_c9E8bDvwkUOUVb9bNqhBDsZgR0BNPawiOZjmyfhzmwmWf-zgFzfFSV6BvOwNRi3sCOHTsWcuk9NBQ_YK8CpNkVl3WeIBSDfidimuC_QV9UWKs1GPk35ZRkM4zKtLY2JsBFWKaDy_P80TcOzcMBoP8gIBClXZ-WUqfE8s1yyc4jrq-qL1_wJ24ef1O9FktsbyZiDKXw2vnqsT8-g_hCeG-unrT1ZFscf8oNdqczARHX-K4vKH2k3uIqEx1M=|1719199056|2rsgdUIClHNEpxBLlHOVRYup6e4oKensQfljtmn4B80=; Path=/; Expires=Mon, 01 Jul 2024 03:17:36 GMT; HttpOnly"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;Set-Cookie&#x22;: [\x7F    &#x22;_oauth2_proxy_csrf=; Path=/; Expires=Mon, 24 Jun 2024 02:17:39 GMT; HttpOnly&#x22;,\x7F    &#x22;_oauth2_proxy=8zM_Pcfpp_gesKFe4SMg08o5Iv0A8WAOQOmG1-vZBbQ56UggYVC0Cu-gFMEoxJZU5q1O5vqRlVBizlLetgVjRCksGVbttwl8tQ7h5YiyIubbbtvF1T4JzLh3QfzUUrwbB-VznOkh8qLbjAhddocecjBt4rMiDyceKXqMr4eO5TUEMx4vHtJYnTYalMeTYhGXk5MNSyrdZX9NnQnkdrCjiOQM13ggwob2nYwhGWaAlgzFSWkgkdtBy2Cl_YMWZ8_gKk9rDX289-JrJyGpr5k9O9RzRhZoY2iE3Mcr8-Q37RTji1Ga22QO-XkAcSaGqY1Qo7jLdmgZTYKC5JvtdLc4rj3vcbveYxU7R3Pt2vEribQjKTh4Sqb0aA03p4cxXyZN4SUfBW1NAOm4JLPUhKJy8frqC9_E0nVqPvpvnacaoQs8WkX2zp75xHoMa3SD6KZhQ5JUiPEiNkOaUsyafLvht6lLkNDhgzW3BP2czoe0DCDBLnsot0jH-qQpMZYkaGr-ZnRKI1OPl1vHls3mao5juOAW1VB2A9aughgc8SJ55IFZpMfFMdHdTDdMqPODkItX2PK44GX-pHeLxkOqrzp3GHtMInpL5QIQlTuux3erm3CG-ntlUE7JBtN2T9LEb8XfIFu58X9_vzMun4JQlje2Thi9_taI_z1DSaTtvNNb54wJfSPwYCCl4OsH-BacVmPQhH6TTZ6gP2Qsm5TR2o1U2D9fuVkSM-OPCG9l3tILambIQwC3vofMW6X8SIFSmhJUDvN7NbwxowBiZ6Y7GJRZlAk_GKDkpsdrdIvC67QqczZFphRVnm6qi-gPO41APCbcO6fgTwyOhbP3RrZZKWSIqWJYhNE3_Sfkf0565H7sC7Hc8XUUjJvP3WnjKS9x7KwzWa-dsUjV3-Q-VNl-rXTguVNAIirYK-qrMNMZGCRcJqcLnUF0V_J2lVmFyVsSlE3t0sDw2xmbkOwDptXFOjQL5Rb4esUMYdCBWFajBfvUtcZEFtYhD0kb6VcbjXO3NCVW5qKh_l9C9SRCc7TG1vcRAqUQlRXHacTGWfcWsuQkCJ3Mp_oWaDxs1GRDykQYxAn5sTICovThWEU2C6o75grWaNrkj5NU-0eHh3ryvxLmGLBOXZV9OQhtKShWmUgywSWMxOHOuZAqdAPULc8KheuGFjXYp-RnCbFYWePJmwzfQw89kSkj1KUZgMYwKEjSz62z2qc9KLczomv76ortQzvo4Hv9kaW6xVuQj5R5Oq6_WMBOqsmUMzcXpxCIOGjcdcZRBc0Fm09Uy9oV1PRqvAE4PGtfyrCaoqILBix8UIww63B07YGwzQ-hAXDysBK-Vca2x7GmGdXsNXXcTgu00bdsjtHZPDBBWGfL3g_rMAXr2vWyvK4CwNjcaPAmrlF3geHPwbIePT0hskBboX1v1bsuhzsai7rGM4r53pnb1ZEoTQDa1B-HyokFgo14XiwME0zE1ifpNzefjpkz1YY2krJlqfCydNwoKaTit4tD2yHlnxAeFF9iIrxzSKErNUFpmyLa7ge7V33vhEH-6k5oBTLE2Q2BrC6aAkLCcPwU9xv_SzBDQPRY0MEYv3kGF03Swo1crRbGh-aifYX9NiHDsmG6r1vAnx0MAOw2Jzuz2x6SSdfBrzlcoWBlrwiZzd9kAKq75n1Uy9uzZ8SRnkBrEZySHBwEbu196VklkRE0jqwC-e3wWNNuviSOfwkVeX-7QdOoO10yw9VK2sW52lFvIEf4chv_ta7bGfAZOWBjpktG6ZLD81SE6A88zpqG2SysSyNMp9hl-umG-5sFsjCn_c9E8bDvwkUOUVb9bNqhBDsZgR0BNPawiOZjmyfhzmwmWf-zgFzfFSV6BvOwNRi3sCOHTsWcuk9NBQ_YK8CpNkVl3WeIBSDfidimuC_QV9UWKs1GPk35ZRkM4zKtLY2JsBFWKaDy_P80TcOzcMBoP8gIBClXZ-WUqfE8s1yyc4jrq-qL1_wJ24ef1O9FktsbyZiDKXw2vnqsT8-g_hCeG-unrT1ZFscf8oNdqczARHX-K4vKH2k3uIqEx1M=|1719199056|2rsgdUIClHNEpxBLlHOVRYup6e4oKensQfljtmn4B80=; Path=/; Expires=Mon, 01 Jul 2024 03:17:36 GMT; HttpOnly&#x22;\x7F]"><div></div></button></div></figure></div>
<ol start="10">
<li><font style="color:rgb(31, 35, 40);">\u6821\u9A8C\u662F\u5426\u5B58\u5728\u6B64cookie\uFF0C\u5E76\u4E14cookie\u4E2D\u5B58\u50A8\u4E86\u7528\u6237\u7684 token\u4FE1\u606F\u540C\u65F6\u67E5\u770B\u662F\u5426\u8FC7\u671F</font></li>
<li><font style="color:rgb(31, 35, 40);">\u4F7F\u7528\u542B\u6709 Authorization \u5934\u90E8\u5B58\u50A8\u7528\u6237\u7684 access_token \u8BBF\u95EE\u76F8\u5E94\u7684 API</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl --url "foo.bar.com/headers"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--header "Authorization: Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl --url &#x22;foo.bar.com/headers&#x22;\x7F  --header &#x22;Authorization: Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ&#x22;"><div></div></button></div></figure></div>
<ol start="12">
<li><font style="color:rgb(31, 35, 40);">\u540E\u7AEF\u670D\u52A1\u6839\u636E access_token \u83B7\u53D6\u7528\u6237\u6388\u6743\u4FE1\u606F\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684 HTTP \u54CD\u5E94</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"email": "******",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"email_verified": false,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"iss": "https://dev-o43xb1mz7ya7ach4.us.auth0.com/",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"aud": "YagFqRD9tfNIaac5BamjhsSatjrAnsnZ",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"iat": 1719198638,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"exp": 1719234638,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"sub": "auth0|665d71e74c131177be66e607",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"sid": "ct2U8_YQ-zT7E8i0E3MyK-z79diVQhaU"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;email&#x22;: &#x22;******&#x22;,\x7F    &#x22;email_verified&#x22;: false,\x7F    &#x22;iss&#x22;: &#x22;https://dev-o43xb1mz7ya7ach4.us.auth0.com/&#x22;,\x7F    &#x22;aud&#x22;: &#x22;YagFqRD9tfNIaac5BamjhsSatjrAnsnZ&#x22;,\x7F    &#x22;iat&#x22;: 1719198638,\x7F    &#x22;exp&#x22;: 1719234638,\x7F    &#x22;sub&#x22;: &#x22;auth0|665d71e74c131177be66e607&#x22;,\x7F    &#x22;sid&#x22;: &#x22;ct2U8_YQ-zT7E8i0E3MyK-z79diVQhaU&#x22;\x7F}"><div></div></button></div></figure></div>
<h5 id="\u7528\u6237\u4EE4\u724C\u5237\u65B0"><font style="color:rgb(31, 35, 40);">\u7528\u6237\u4EE4\u724C\u5237\u65B0</font></h5>
<p><a href="https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=MEqLG" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743</a></p>
<ol>
<li><font style="color:rgb(31, 35, 40);">\u8BBF\u95EE\u7528\u6237\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF08\u9700\u8981\u8BA4\u8BC1\u6388\u6743\u8BBF\u95EE\u7684API\uFF09</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl --url "foo.bar.com/headers"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl --url &#x22;foo.bar.com/headers&#x22;"><div></div></button></div></figure></div>
<ol start="2">
<li><font style="color:rgb(31, 35, 40);">\u68C0\u67E5AccessToken \u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5982\u679C\u8FC7\u671F\u6216\u8005\u5373\u5C06\u8FC7\u671F\uFF0C\u8BF7\u6C42\u5237\u65B0\u4EE4\u724C</font></li>
<li><font style="color:rgb(31, 35, 40);">\u5982\u679C\u5728 cookie \u4E2D\u68C0\u6D4B\u5230\u5B58\u5728 refresh_token\uFF0C\u5219\u53EF\u4EE5\u8BBF\u95EE\u76F8\u5E94\u7684\u63A5\u53E3\u4EE5\u4EA4\u6362\u65B0\u7684 id_token\uFF0Caccess_token</font></li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl -X POST \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "grant_type=refresh_token" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \\</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">--data "refresh_token=GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST \\\x7F  --url &#x22;https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token&#x22; \\\x7F  --data &#x22;grant_type=refresh_token&#x22; \\\x7F  --data &#x22;client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ&#x22; \\\x7F  --data &#x22;client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ&#x22; \\\x7F  --data &#x22;refresh_token=GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG&#x22;"><div></div></button></div></figure></div>
<ol start="4">
<li><font style="color:rgb(31, 35, 40);">\u66F4\u65B0\u4F1A\u8BDD\uFF0C\u5E76\u5B58\u50A8\u65B0\u7684\u4EE4\u724C</font></li>
<li><font style="color:rgb(31, 35, 40);">\u643A\u5E26 Authorization\u6807\u5934\u5E76\u4F7F\u7528\u65B0\u7684access_token\u8BBF\u95EE\u5BF9\u5E94 API</font></li>
<li><font style="color:rgb(31, 35, 40);">\u540E\u7AEF\u670D\u52A1\u6839\u636E access_token \u83B7\u53D6\u7528\u6237\u6388\u6743\u4FE1\u606F\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684 HTTP \u54CD\u5E94</font></li>
</ol>
<h2 id="\u4E91\u539F\u751F\u7F51\u5173\u4E2D\u7684\u8BA4\u8BC1\u9274\u6743\u80FD\u529B">\u4E91\u539F\u751F\u7F51\u5173\u4E2D\u7684\u8BA4\u8BC1\u9274\u6743\u80FD\u529B</h2>
<p>\u4E91\u539F\u751FAPI\u7F51\u5173\u652F\u6301\u4EE5\u4E0B\u4E09\u7C7B\u8BA4\u8BC1\u9274\u6743\u7684\u65B9\u5F0F\uFF0C\u7528\u6237\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u4E1A\u52A1\u573A\u666F\u9009\u62E9\u9002\u5408\u7684\u8BA4\u8BC1\u7C7B\u578B\u548C\u65B9\u5F0F</p>



































<table><thead><tr><th align="left"><strong><font style="color:rgb(24, 24, 24);">\u5BF9\u6BD4\u9879</font></strong></th><th><strong><font style="color:rgb(24, 24, 24);">\u6D88\u8D39\u8005\u8BA4\u8BC1\u9274\u6743</font></strong></th><th><strong><font style="color:rgb(24, 24, 24);">\u5168\u5C40\u8BA4\u8BC1\u9274\u6743</font></strong></th><th><strong><font style="color:rgb(24, 24, 24);">\u63D2\u4EF6\u8BA4\u8BC1\u9274\u6743</font></strong></th></tr></thead><tbody><tr><td align="left"><strong><font style="color:rgb(24, 24, 24);">\u652F\u6301\u7684\u8BA4\u8BC1\u65B9\u5F0F</font></strong></td><td>API Key\u8BA4\u8BC1\u3001AKSK\u8BA4\u8BC1\u3001JWT\u8BA4\u8BC1</td><td>JWT\u8BA4\u8BC1\u3001OIDC\u8BA4\u8BC1\u3001\u81EA\u5B9A\u4E49\u8BA4\u8BC1</td><td>Baisc\u8BA4\u8BC1\u3001Key\u8BA4\u8BC1\u3001JWT\u8BA4\u8BC1\u3001HMAC\u8BA4\u8BC1\u3001\u81EA\u5B9A\u4E49\u5916\u90E8\u8BA4\u8BC1</td></tr><tr><td align="left"><strong><font style="color:rgb(24, 24, 24);">\u9274\u6743\u65B9\u5F0F</font></strong></td><td>\u9274\u6743\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u81EA\u884C\u914D\u7F6E\u5230\u4EE5\u4E0B\u7C92\u5EA6\u7684\u6388\u6743\uFF0C\u7F51\u5173\u6309\u914D\u7F6E\u7684\u6388\u6743\u7C92\u5EA6\u4E25\u683C\u9274\u6743<br>1\u3001REST <font style="color:rgb(24, 24, 24);">API</font><br>2\u3001REST <font style="color:rgb(24, 24, 24);">API</font> \u63A5\u53E3<br>3\u3001HTTP API/WebSocket API \u8DEF\u7531</td><td>\u9274\u6743\u65B9\u5F0F\uFF1A\u9ED8\u8BA4\u7F51\u5173\u7EA7\u522B\uFF0C\u4E0D\u53EF\u4EE5\u8C03\u6574\uFF0C\u901A\u8FC7\u8BA4\u8BC1\u5373\u901A\u8FC7\u9274\u6743<br>\u9ED1\u767D\u540D\u5355\uFF1A<br>1\u3001\u652F\u6301\u8BA4\u8BC1\u914D\u7F6E\u9ED1\u767D\u540D\u5355<br>2\u3001\u9ED1\u767D\u540D\u5355\u652F\u6301\u914D\u7F6E\u5230\u8DEF\u7531\u3001\u57DF\u540D<br><strong><font style="color:rgb(24, 24, 24);">\u9ED1\u540D\u5355\u6A21\u5F0F</font></strong><font style="color:rgb(24, 24, 24);">\uFF1A\u914D\u7F6E\u7684</font><strong><font style="color:rgb(24, 24, 24);">\u57DF\u540D</font></strong><font style="color:rgb(24, 24, 24);">\u548C</font><strong><font style="color:rgb(24, 24, 24);">\u8DEF\u7531</font></strong><font style="color:rgb(24, 24, 24);">\u9700\u8981\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u5176\u4F59\u65E0\u9700\u8BA4\u8BC1\u53EF\u76F4\u63A5\u8BBF\u95EE\u3002</font><br><strong><font style="color:rgb(24, 24, 24);">\u767D\u540D\u5355\u6A21\u5F0F</font></strong><font style="color:rgb(24, 24, 24);">\uFF1A\u914D\u7F6E\u7684</font><strong><font style="color:rgb(24, 24, 24);">\u57DF\u540D</font></strong><font style="color:rgb(24, 24, 24);">\u548C</font><strong><font style="color:rgb(24, 24, 24);">\u8DEF\u7531</font></strong><font style="color:rgb(24, 24, 24);">\u4E0D\u9700\u8981\u8BA4\u8BC1\u5373\u53EF\u8BBF\u95EE\uFF0C\u5176\u4F59\u9700\u8981\u8FDB\u884C\u8BA4\u8BC1\u3002</font><br><font style="color:rgb(24, 24, 24);">\u81EA\u5EFA\u9274\u6743\u670D\u52A1\uFF1A</font><br><font style="color:rgb(24, 24, 24);">\u5BA2\u6237\u81EA\u5B9A\u4E49\u5B8C\u6210\u8BA4\u8BC1\u9274\u6743</font></td><td>\u9274\u6743\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u81EA\u884C\u914D\u7F6E\u5230\u4EE5\u4E0B\u7C92\u5EA6\u7684\u6388\u6743\uFF0C\u7F51\u5173\u6309\u914D\u7F6E\u7684\u6388\u6743\u7C92\u5EA6\u4E25\u683C\u9274\u6743<br>1\u3001\u7F51\u5173\u5B9E\u4F8B<br>2\u3001\u90E8\u7F72\u5230\u7F51\u5173\u7684\u57DF\u540D<br>3\u3001REST <font style="color:rgb(24, 24, 24);">API</font><br>4\u3001REST <font style="color:rgb(24, 24, 24);">API\u63A5\u53E3</font><br>5\u3001HTTP API/WebSocket API \u8DEF\u7531</td></tr><tr><td align="left"><strong><font style="color:rgb(24, 24, 24);">\u64CD\u4F5C\u8DEF\u5F84</font></strong></td><td><strong>\u5F00\u542F\u8BA4\u8BC1\uFF1A</strong><br><font style="color:rgb(24, 24, 24);">1\u3001API\u5217\u8868 ->HTTP API\u6216\u8005/WebScoket API ->\u8DEF\u7531\u7BA1\u7406->\u7B56\u7565\u914D\u7F6E->\u6DFB\u52A0\u5E76\u5F00\u542F\u6D88\u8D39\u8005\u8BA4\u8BC1\u7B56\u7565\u3002</font><br><font style="color:rgb(24, 24, 24);">2\u3001API\u7BA1\u7406 > REST-API </font><br><strong>\u5F00\u542F\u9274\u6743\uFF1A</strong><br><font style="color:rgb(24, 24, 24);">1\u3001\u6D88\u8D39\u8005-> \u6D88\u8D39\u8005\u8BE6\u60C5 -> \u6D88\u8D39\u8005\u9274\u6743-> \u6DFB\u52A0\u6388\u6743</font><br><font style="color:rgb(24, 24, 24);">2\u3001\u63A5\u53E3\u8BE6\u60C5 -> \u6D88\u8D39\u8005\u8BA4\u8BC1->\u6388\u6743\u7ED9\u6D88\u8D39\u8005</font></td><td><strong>\u5F00\u542F\u8BA4\u8BC1\u9274\u6743\uFF1A</strong><br><font style="color:rgb(24, 24, 24);">\u5B9E\u4F8B > \u5B89\u5168\u7BA1\u7406 > \u5168\u5C40\u8BA4\u8BC1\u9274\u6743</font></td><td><strong>\u5F00\u542F\u8BA4\u8BC1\u9274\u6743\uFF1A</strong><br>1\u3001\u63D2\u4EF6->\u5B89\u88C5\u63D2\u4EF6\u5230\u7F51\u5173->\u63D2\u4EF6\u914D\u7F6E<br>\u5B9E\u4F8B->\u5DF2\u5B89\u88C5\u63D2\u4EF6->\u63D2\u4EF6\u914D\u7F6E<br>2\u3001\u914D\u7F6E\u4E0D\u540C\u7C92\u5EA6\u7684\u5728\u63D2\u4EF6\u89C4\u5219\uFF0C\u5E76\u914D\u7F6E\u6388\u6743\u5173\u7CFB<br>3\u3001\u542F\u7528\u9700\u8981\u7684\u63D2\u4EF6\u89C4\u5219</td></tr><tr><td align="left"><strong>\u4F18\u7F3A\u70B9</strong></td><td><strong>\u4F18\u70B9\uFF1A</strong><br>1\u3001\u652F\u6301\u5E38\u89C1\u7684API Key\u8BA4\u8BC1\u3001AK/SK\u8BA4\u8BC1\u3001JWT\u8BA4\u8BC1\u5E76\u968F\u7740\u4EA7\u54C1\u8FED\u4EE3\u4E0D\u65AD\u6269\u5C55\uFF08\u957F\u671F\u53D1\u5C55\u7684\u65B9\u5411\uFF09<br>2\u3001\u767D\u5C4F\u7BA1\u7406\u80FD\u529B\uFF0C\u5305\u62EC\u51ED\u8BC1\u7BA1\u7406\uFF08\u91CD\u7F6E\u3001\u6C70\u6362\u3001\u5220\u9664\uFF09\uFF0C\u6743\u9650\u7BA1\u7406<br>3\u3001\u7075\u6D3B\u7684\u6388\u6743\u7C92\u5EA6\u548C\u6388\u6743\u65B9\u5F0F<br>4\u3001\u7F51\u5173\u5B9E\u73B0\u8BA4\u8BC1\u9274\u6743\uFF0C\u5BA2\u6237\u4E0D\u9700\u8981\u81EA\u5EFA\u8BA4\u8BC1\u9274\u6743\u670D\u52A1<br></td><td><strong>\u4F18\u70B9\uFF1A</strong><br>1\u3001\u914D\u7F6E\u7B80\u5355\uFF0C\u8BA4\u8BC1\u6388\u6743\u5168\u5C40\u7EDF\u4E00\u63A7\u5236\uFF0C\u4E0D\u9700\u8981\u6309\u670D\u52A1\u5B9E\u73B0\u591A\u6B21<br>2\u3001\u652F\u6301\u8DEF\u7531\u548C\u57DF\u540D\u7EA7\u522B\u7684\u9ED1\u767D\u540D\u5355\u914D\u7F6E\uFF0C\u7528\u6237\u53EF\u4EE5\u6309\u57DF\u540D\u548C\u8DEF\u7531\u653E\u8FC7\u548C\u62E6\u622A\u8BF7\u6C42<br><strong>\u7F3A\u70B9\uFF1A</strong><br>1\u3001\u9700\u8981\u5BA2\u6237\u81EA\u5EFA\u8BA4\u8BC1\u6388\u6743\u670D\u52A1<br>2\u3001\u4E0D\u652F\u6301\u7EC6\u7C92\u5EA6\u7684\u6388\u6743\u89C4\u5219</td><td><strong>\u4F18\u70B9\uFF1A</strong><br>1\u3001\u5171\u4EABHigress\u793E\u533A\u63D2\u4EF6\u751F\u6001\uFF0C\u652F\u6301\u591A\u6837\u6027\u7684\u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\uFF0C\u5E76\u6709\u8BA1\u5212\u6027\u5C06\u793E\u533A\u7684\u4F18\u5148\u63D2\u4EF6\u7EB3\u5165\u5230\u4E91\u539F\u751FAPI\u7F51\u5173<br><strong>\u7F3A\u70B9\uFF1A</strong><br>1\u3001\u6587\u672C\u7F16\u8F91\u63D2\u4EF6\u89C4\u5219\u7684\u65B9\u5F0F\u5BB9\u6613\u51FA\u9519\u800C\u5F71\u54CD\u7EBF\u4E0A\u6D41\u91CF<br>2\u3001\u63D2\u4EF6\u7684\u79CD\u7C7B\u591A\u800C\u4E14\u4EA4\u4E92\u590D\u6742\uFF0C\u7BA1\u7406\u6210\u672C\u9AD8</td></tr></tbody></table>
<h2 id="\u4E91\u539F\u751Fapi\u7F51\u5173\u7684\u5176\u4ED6\u5B89\u5168\u80FD\u529B"><font style="color:rgb(0, 0, 0);">\u4E91\u539F\u751FAPI\u7F51\u5173\u7684\u5176\u4ED6\u5B89\u5168\u80FD\u529B</font></h2>
<p><font style="color:rgb(51, 51, 51);">\u4FDD\u62A4API\u5B89\u5168\uFF0C\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u4F5C\u4E3A\u63A5\u5165\u5C42\u91CD\u8981\u7684\u80FD\u529B\uFF0C\u8BA4\u8BC1\u9274\u6743\u53EA\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u8BF8\u591A\u5B89\u5168\u80FD\u529B\u4E2D\u7684\u4E00\u90E8\u5206\uFF1B\u4E91\u539F\u751F\u7F51\u5173\u8FD8\u63D0\u4F9B\u4E0B\u8868\u4E2D\u7684\u591A\u79CD\u5B89\u5168\u80FD\u529B\uFF0C\u4EE5\u4FBF\u7528\u6237\u8FDB\u4E00\u6B65\u7EF4\u62A4\u4F01\u4E1AAPI\u8D44\u4EA7\u7684\u5B89\u5168</font></p>





























<table><thead><tr><th>\u6A21\u5757</th><th>\u80FD\u529B</th></tr></thead><tbody><tr><td>\u73AF\u5883</td><td>1\u3001\u652F\u6301\u57FA\u4E8E\u73AF\u5883\u7684\u9694\u79BB\u8BBF\u95EE\uFF0C\u5E76\u5339\u914D\u76F8\u5E94\u7684\u73AF\u5883\u57DF\u540D</td></tr><tr><td>\u57DF\u540D</td><td>1\u3001\u652F\u6301HTTPS \u57DF\u540D\u4F7F\u7528\u6307\u5B9A\u52A0\u5BC6\u5957\u4EF6</td></tr><tr><td>\u7B56\u7565</td><td>1\u3001<font style="color:rgb(51, 51, 51);">\u652F\u6301API\u7EA7\u522B\u3001\u63A5\u53E3\u7EA7\u522B\u3001\u8DEF\u7531\u7EA7\u522B\u7684\u6309QPS\u9650\u6D41\u3001\u6309\u5E76\u53D1\u6570\u9650\u6D41\u3001\u4EE5\u53CA\u7194\u65AD\u7B56\u7565</font><br><font style="color:rgb(51, 51, 51);">2\u3001\u652F\u6301\u7F51\u5173\u7EA7\u522B\u3001\u57DF\u540D\u7EA7\u522B\u3001API\u7EA7\u522B\u3001\u63A5\u53E3\u7EA7\u522B\u3001\u8DEF\u7531\u7EA7\u522B\u7684IP\u9ED1\u767D\u540D\u5355 \u8BBF\u95EE\u63A7\u5236\uFF1B</font><br>3\u3001<font style="color:rgb(51, 51, 51);">\u652F\u6301API\u7EA7\u522B\u3001\u63A5\u53E3\u7EA7\u522B\u3001\u8DEF\u7531\u7EA7\u522B\u7684\u8DE8\u57DF\u8BBF\u95EE\u63A7\u5236 CORS\uFF1B</font><br>4\u3001\u652F\u6301\u8DEF\u7531\u7EA7\u522B\u3001\u7F51\u5173\u7EA7\u522B\u7684 \u4E14\u4E0EAliyun Web \u5E94\u7528\u9632\u706B\u5899\u6DF1\u5EA6\u96C6\u6210\u7684<font style="color:rgb(51, 51, 51);"> WAF\u9632\u63A7</font></td></tr><tr><td>\u63D2\u4EF6</td><td>1\u3001\u652F\u6301\u4E30\u5BCC\u7684\u8BA4\u8BC1\u9274\u6743\u63D2\u4EF6\u80FD\u529B<br>2\u3001\u652F\u6301\u8BF7\u6C42\u5C4F\u853D\u63D2\u4EF6\uFF0C\u53EF\u4EE5<font style="color:rgb(51, 51, 51);">\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732</font><br>3\u3001\u652F\u6301\u673A\u5668\u4EBA\u62E6\u622A\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BC6\u522B\u5E76\u963B\u6B62\u4E92\u8054\u7F51\u722C\u866B\u5BF9\u7AD9\u70B9\u8D44\u6E90\u7684\u722C\u53D6<br>4\u3001\u652F\u6301WAF \u9632\u62A4\u63D2\u4EF6<br>5\u3001\u652F\u6301\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u63D2\u4EF6<br>6\u3001\u652F\u6301IP\u9650\u5236\u63D2\u4EF6</td></tr><tr><td>\u670D\u52A1</td><td>1\u3001\u652F\u6301\u670D\u52A1\u7EA7\u522B\u7684TLS\uFF0CMTLS</td></tr></tbody></table>`,a={title:"\u5927\u6A21\u578B\u5E26\u706B API \u540E\uFF0C\u5206\u4EAB\u6211\u5BF9 API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743\u7684\u5B9E\u8DF5",description:"\u5927\u6A21\u578B\u5E26\u706B API \u540E\uFF0C\u5206\u4EAB\u6211\u5BF9 API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743\u7684\u5B9E\u8DF5",date:"2025-03-11",category:"article",keywords:["Higress"],authors:"CH3CHO"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_yp80oe1sr5ryy3g0.md",o=void 0,l=function(){return`
## \u524D\u8A00
<font style="color:rgb(24, 24, 24);">\u4E91\u539F\u751FAPI\u7F51\u5173\uFF08\u4EE5\u4E0B\u7B80\u79F0-\u7F51\u5173\uFF09\u662F\u4E91\u539F\u751F\u7F51\u5173\u7684\u5347\u7EA7\u7248\uFF0C\u9664\u7EE7\u627F\u4E86\u539F\u4E91\u539F\u751F\u7F51\u5173\u7684\u5168\u90E8\u80FD\u529B\uFF0C\u4E3A\u7528\u6237\u53E0\u52A0\u4E86API\u7BA1\u7406\u7684\u80FD\u529B\u3002API\u4F5C\u4E3A\u4F01\u4E1A\u7684\u91CD\u8981\u6570\u5B57\u8D44\u6E90\uFF0C\u5728\u7ED9\u4F01\u4E1A\u5E26\u6765\u5DE8\u5927\u4FBF\u5229\u7684\u540C\u65F6\u4E5F\u5E26\u6765\u4E86\u65B0\u7684\u5B89\u5168\u95EE\u9898\uFF0C\u4E00\u65E6\u88AB\u653B\u51FB\u53EF\u80FD\u5BFC\u81F4\u6570\u636E\u6CC4\u6F0F\u91CD\u5927\u5B89\u5168\u95EE\u9898\uFF0C\u4ECE\u800C\u7ED9\u4F01\u4E1A\u7684\u4E1A\u52A1\u53D1\u5C55\u5E26\u6765\u6781\u5927\u7684\u5B89\u5168\u98CE\u9669\u3002</font>

<font style="color:rgb(24, 24, 24);">\u6B63\u662F\u5728\u8FD9\u6837\u7684\u80CC\u666F\u4E0B\uFF0COpenAPI\u89C4\u8303\u4E2D\u9488\u5BF9API\u5B89\u5168\u505A\u4E86\u660E\u786E\u7684\u5B9A\u4E49\u548C\u5F15\u5BFC\uFF0C\u4EE5\u4FBF\u7528\u6237\u53EF\u4EE5\u5B89\u5168\u7684\u7BA1\u7406\u81EA\u5DF1\u7684API\u3002</font>

<font style="color:rgb(24, 24, 24);">\u4EE5\u4E0B\u4E3Aopenapi\u7684\u5B9A\u4E49\uFF1A</font>[What is openAPI](https://swagger.io/docs/specification/v3_0/about/)

<font style="color:rgb(33, 37, 41);">An OpenAPI file allows you to describe your entire API, including:</font>

+ <font style="color:rgb(33, 37, 41);">Available endpoints (</font>\`<font style="color:rgb(33, 37, 41);">/users</font>\`<font style="color:rgb(33, 37, 41);">) and operations on each endpoint (</font>\`<font style="color:rgb(33, 37, 41);">GET /users</font>\`<font style="color:rgb(33, 37, 41);">,</font><font style="color:rgb(33, 37, 41);"> </font>\`<font style="color:rgb(33, 37, 41);">POST /users</font>\`<font style="color:rgb(33, 37, 41);">)</font>
+ <font style="color:rgb(33, 37, 41);">Operation parameters Input and output for each operation</font>
+ <font style="color:rgb(33, 37, 41);">Authentication methods</font>
+ <font style="color:rgb(33, 37, 41);">Contact information, license, terms of use, and other information.</font>

<font style="color:rgb(33, 37, 41);">\u53EF\u4EE5\u770B\u5230\u8BA4\u8BC1\u9274\u6743\u662F\u4FDD\u62A4API\u5FC5\u8981\u800C\u53C8\u6700\u5E38\u7528\u7684\u624B\u6BB5\u3002\u4E91\u539F\u751FAPI\u7F51\u5173\u662F\u5B8C\u5168\u9075\u5FAAOpenAPI\u89C4\u8303\u7684\u963F\u91CC\u4E91\u65B0\u4E00\u4EE3API\u7F51\u5173\uFF0C\u652F\u6301\u4E30\u5BCC\u7684\u8BA4\u8BC1\u9274\u6743\u662F\u5176\u6838\u5FC3\u7ADE\u4E89\u529B\u4E4B\u4E00</font>

## <font style="color:rgb(33, 37, 41);">\u4EC0\u4E48\u662F\u8BA4\u8BC1\u9274\u6743</font>
\u8BA4\u8BC1\uFF1A\u662F\u6307\u9A8C\u8BC1\u7528\u6237\u8EAB\u4EFD\u7684\u8FC7\u7A0B\u3002\u7B80\u5355\u6765\u8BF4\uFF0C\u8BA4\u8BC1\u7684\u76EE\u7684\u662F\u786E\u8BA4\u7528\u6237\u662F\u8C01\u3002\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\uFF0C\u7528\u6237\u901A\u5E38\u9700\u8981\u63D0\u4F9B\u67D0\u79CD\u51ED\u8BC1\uFF0C\u4F8B\u5982\u7528\u6237\u540D\u548C\u5BC6\u7801\u3001\u6307\u7EB9\u3001\u9762\u90E8\u8BC6\u522B\uFF0C\u6216\u662F\u5176\u4ED6\u751F\u7269\u7279\u5F81\uFF0C\u751A\u81F3\u662F\u5B89\u5168\u4EE4\u724C\uFF08\u5982\u4E24\u6B65\u9A8C\u8BC1\u4E2D\u7684\u9A8C\u8BC1\u7801\uFF09\u3002\u901A\u8FC7\u8FD9\u4E9B\u51ED\u8BC1\uFF0C\u7CFB\u7EDF\u5C06\u7528\u6237\u7684\u8EAB\u4EFD\u4E0E\u5DF2\u6709\u7684\u8EAB\u4EFD\u4FE1\u606F\u8FDB\u884C\u6BD4\u5BF9\uFF0C\u4ECE\u800C\u786E\u8BA4\u5176\u771F\u5B9E\u6027\u3002

\u9274\u6743\uFF1A\u662F\u6307\u9A8C\u8BC1\u7528\u6237\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u67D0\u9879\u8D44\u6E90\u6216\u6267\u884C\u67D0\u9879\u64CD\u4F5C\u3002\u867D\u7136\u8BA4\u8BC1\u786E\u8BA4\u4E86\u7528\u6237\u8EAB\u4EFD\uFF0C\u4F46\u5B83\u5E76\u4E0D\u80FD\u786E\u5B9A\u8BE5\u7528\u6237\u53EF\u4EE5\u505A\u4EC0\u4E48\u3002\u8FD9\u65B9\u9762\u7684\u51B3\u7B56\u4F9D\u8D56\u4E8E\u7CFB\u7EDF\u7684\u6743\u9650\u7BA1\u7406\u7B56\u7565\u3002\u4F8B\u5982\uFF0C\u5728\u4E00\u4E2A\u4F01\u4E1A\u5185\u90E8\u7CFB\u7EDF\u4E2D\uFF0C\u67D0\u4F4D\u5458\u5DE5\u53EF\u80FD\u62E5\u6709\u8BBF\u95EE\u67D0\u4E9B\u6587\u4EF6\u7684\u6743\u9650\uFF0C\u4F46\u53E6\u4E00\u4E9B\u654F\u611F\u6587\u4EF6\u5219\u53EF\u80FD\u53EA\u5BF9\u9AD8\u7EA7\u7BA1\u7406\u5C42\u5F00\u653E\u3002\u9274\u6743\u7684\u76EE\u7684\u5C31\u662F\u5728\u7528\u6237\u7ECF\u8FC7\u8BA4\u8BC1\u540E\uFF0C\u6839\u636E\u5176\u89D2\u8272\u548C\u6743\u9650\u8BBE\u7F6E\uFF0C\u51B3\u5B9A\u662F\u5426\u5141\u8BB8\u5176\u8BBF\u95EE\u7279\u5B9A\u8D44\u6E90\u6216\u6267\u884C\u7279\u5B9A\u64CD\u4F5C\u3002

## \u8BA4\u8BC1\uFF08Authentication\uFF09
### Key \u8BA4\u8BC1
\u4E91\u539F\u751FAPI\u7F51\u5173\u4E2D\u7684Key\u8BA4\u8BC1\u53EBApi Key\u8BA4\u8BC1\u5728\u6D88\u8D39\u8005\u9274\u6743\u4E2D\u7EDF\u4E00\u900F\u51FA\u3002Key\u8BA4\u8BC1\u662F\u5BF9\u7528\u6237\u5BC6\u7801\u8BA4\u8BC1\u65B9\u5F0F\u7684\u65B9\u5F0F\u7684\u4F18\u5316\u7248\u672C\uFF0C\u901A\u8FC7\u9759\u6001\u79D8\u94A5\u7684\u65B9\u5F0F\uFF0C\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u4E00\u79CD\u7B80\u4FBF\u5FEB\u6377\u4E14\u5B89\u5168\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5177\u6709\u8F83\u4E3A\u9C9C\u660E\u7684\u4F18\u7F3A\u70B9\uFF1A

#### \u4F18\u70B9\uFF1A
1\u3001\u7B80\u5355\u6613\u7528\uFF0C\u53EA\u9700\u8981\u5728\u8BF7\u6C42\u4E2D\u4F20\u8F93\u79D8\u94A5\u5373\u53EF\uFF0C\u9A8C\u8BC1\u975E\u5E38\u7B80\u5355\u3001\u6027\u80FD\u9AD8

2\u3001\u8BA4\u8BC1\u8FC7\u7A0B\u65E0\u9700\u7528\u6237\u53C2\u4E0E\uFF0C\u5BF9\u81EA\u52A8\u5316\u5E94\u7528\u975E\u5E38\u53CB\u597D

3\u3001\u670D\u52A1\u5668\uFF08\u7F51\u5173\uFF09\u53EF\u4EE5\u968F\u65F6\u751F\u6210\u3001\u6C70\u6362\uFF08\u5220\u9664\uFF09\u3001\u91CD\u7F6E\uFF08\u5207\u6362\uFF09\u79D8\u94A5\uFF0C\u7BA1\u7406\u65B9\u4FBF

#### \u7F3A\u70B9\uFF1A
1\u3001\u5B89\u5168\u9690\u60A3\uFF0C\u79D8\u94A5\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u5F88\u5BB9\u6613\u6CC4\u6F0F\uFF0C\u6CC4\u6F0F\u540E\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u4F7F\u7528\u79D8\u94A5\u6765\u4F2A\u88C5\u5408\u6CD5\u8EAB\u4EFD\uFF0C\u8FDB\u884C\u672A\u6388\u6743\u7684\u64CD\u4F5C\uFF1B\u79D8\u94A5\u7684\u5206\u914D\u548C\u7BA1\u7406\u590D\u6742

2\u3001\u65E0\u6CD5\u63D0\u4F9B\u7528\u6237\u8EAB\u4EFD\uFF0C\u5BA1\u8BA1\u8F83\u4E3A\u56F0\u96BE

#### Api Key\u8BA4\u8BC1\u7684\u57FA\u672C\u6D41\u7A0B
[\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=GW85R)

\u4E91\u539F\u751FAPI\u7F51\u5173\u7684\u901A\u8FC7\u6D88\u8D39\u8005\u6388\u6743\u6765\u652F\u6301 Api Key\u8BA4\u8BC1\uFF0C\u7528\u6237\u5728\u6D88\u8D39\u8005\u521B\u5EFA\u6D41\u7A0B\u4E2D\uFF0C\u9009\u62E9API Key\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u5E76\u4E14\u4E3A\u5176\u8BBE\u7F6E\u51ED\u8BC1\u6765\u6E90\u548C\u6DFB\u52A0\u51ED\u8BC1

![](/img/1744033003625.png)

\u4E91\u539F\u751F\u7F51\u5173\u652F\u6301\u4E09\u79CD\u51ED\u8BC1\u6765\u6E90\u8BBE\u7F6E\u65B9\u5F0F\uFF1A\u6765\u6E90\u4E8E\u56FA\u5B9AHeader\u5934"Authorization"\u3001\u6765\u6E90\u4E8E\u81EA\u5B9A\u4E49Header\u5934\u3001\u4EE5\u53CA\u6765\u6E90\u81EA\u5B9A\u4E49QueryString

\`\`\`plain
curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5
\`\`\`

\`\`\`plain
curl  http://xxx.hello.com/test -H 'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'
\`\`\`

### JWT \u8BA4\u8BC1
#### \u4EC0\u4E48\u662FJWT
<font style="color:rgb(51, 51, 51);">JWT\uFF08JSON Web Token\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u5B89\u5168\u4FE1\u606F\u4F20\u9012\u7684\u5F00\u653E\u6807\u51C6\uFF0C\u5B83\u5141\u8BB8\u5728\u901A\u4FE1\u53CC\u65B9\u4E4B\u95F4\u4EE5JSON\u5BF9\u8C61\u7684\u5F62\u5F0F\u4F20\u8F93\u5B89\u5168\u4FE1\u606F\uFF0C\u5B83\u8BBE\u8BA1\u4E3A\u5176\u4E2D\u7684\u4FE1\u606F\u53EF\u4EE5\u88AB\u9A8C\u8BC1\u548C\u4FE1\u4EFB\u3002</font>

<font style="color:rgb(51, 51, 51);">JWT\u901A\u5E38\u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF1A\u5934\u90E8\uFF08Header\uFF09\u3001\u8F7D\u8377\uFF08Payload\uFF09\u548C\u7B7E\u540D\uFF08Signature\uFF09\uFF0C\u5176\u5185\u5BB9\u6784\u9020\u8FC7\u7A0B\u5982\u4E0B\uFF1A</font>

1. **<font style="color:rgb(51, 51, 51);">\u5934\u90E8\uFF08Header\uFF09</font>**<font style="color:rgb(51, 51, 51);">:</font>

\u901A\u5E38\u7531\u4E24\u90E8\u5206\u7EC4\u6210\uFF1A\u4EE4\u724C\u7684\u7C7B\u578B\uFF08\u901A\u5E38\u662FJWT\uFF09\u548C\u6240\u4F7F\u7528\u7684\u7B7E\u540D\u7B97\u6CD5\uFF08\u5982HMAC SHA256\uFF0C<font style="color:rgb(51, 51, 51);">\u5728\u4E0B\u6587JWKS\u4E2D\u6307\u5B9A</font>\uFF09\uFF1B

\`\`\`plain
{
  "alg": "HS256",
  "typ": "JWT"
}
\`\`\`

<font style="color:rgb(51, 51, 51);">\u7136\u540E\u5C06\u5934\u90E8\u8FDB\u884CBase64\u7F16\u7801\uFF08\u8BE5\u7F16\u7801\u662F\u53EF\u4EE5\u5BF9\u79F0\u89E3\u7801\u7684\uFF09\uFF0C\u5F97\u5230\u7B2C\u4E00\u90E8\u5206\uFF1A</font>

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9

2. **<font style="color:rgb(51, 51, 51);">\u8F7D\u8377\uFF08Payload\uFF09</font>**<font style="color:rgb(51, 51, 51);">:</font>

<font style="color:rgb(51, 51, 51);">\u5305\u542B\u5BF9JWT\u7684\u58F0\u660E\uFF08Claims\uFF09\uFF0C\u8FD9\u4E9B\u58F0\u660E\u662F\u5173\u4E8E\u5B9E\u4F53\uFF08\u901A\u5E38\u662F\u7528\u6237\uFF09\u548C\u5176\u4ED6\u6570\u636E\u7684\u3002\u5B9A\u4E49\u7EC6\u8282\u5982\u4E0B\uFF1A</font>

\`\`\`plain
iss\uFF1A\u4EE4\u724C\u9881\u53D1\u8005\u3002\u8868\u793A\u8BE5\u4EE4\u724C\u7531\u8C01\u521B\u5EFA\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32
sub: Subject Identifier\uFF0Ciss\u63D0\u4F9B\u7684\u7EC8\u7AEF\u7528\u6237\u7684\u6807\u8BC6\uFF0C\u5728iss\u8303\u56F4\u5185\u552F\u4E00\uFF0C\u6700\u957F\u4E3A255\u4E2AASCII\u4E2A\u5B57\u7B26\uFF0C\u533A\u5206\u5927\u5C0F\u5199
aud\uFF1AAudience(s)\uFF0C\u4EE4\u724C\u7684\u53D7\u4F17\uFF0C\u5206\u5927\u5C0F\u5199\u7684\u5B57\u7B26\u4E32\u6570\u7EC4
exp\uFF1AExpiration time\uFF0C\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\u6233\u3002\u8D85\u8FC7\u6B64\u65F6\u95F4\u7684token\u4F1A\u4F5C\u5E9F\uFF0C \u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570
iat: \u4EE4\u724C\u7684\u9881\u53D1\u65F6\u95F4\uFF0C\u8BE5\u58F0\u660E\u662F\u4E00\u4E2A\u6574\u6570\uFF0C\u662F1970\u5E741\u67081\u65E5\u4EE5\u6765\u7684\u79D2\u6570
jti: \u4EE4\u724C\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u8BE5\u58F0\u660E\u7684\u503C\u5728\u4EE4\u724C\u9881\u53D1\u8005\u521B\u5EFA\u7684\u6BCF\u4E00\u4E2A\u4EE4\u724C\u4E2D\u90FD\u662F\u552F\u4E00\u7684\uFF0C\u4E3A\u4E86\u9632\u6B62\u51B2\u7A81\uFF0C\u5B83\u901A\u5E38\u662F\u4E00\u4E2A\u5BC6\u7801\u5B66\u968F\u673A\u503C\u3002\u8FD9\u4E2A\u503C\u76F8\u5F53\u4E8E\u5411\u7ED3\u6784\u5316\u4EE4\u724C\u4E2D\u52A0\u5165\u4E86\u4E00\u4E2A\u653B\u51FB\u8005\u65E0\u6CD5\u83B7\u5F97\u7684\u968F\u673A\u71B5\u7EC4\u4EF6\uFF0C\u6709\u5229\u4E8E\u9632\u6B62\u4EE4\u724C\u731C\u6D4B\u653B\u51FB\u548C\u91CD\u653E\u653B\u51FB\u3002
\`\`\`

<font style="color:rgb(51, 51, 51);">\u4E5F\u53EF\u4EE5\u65B0\u589E\u7528\u6237\u7CFB\u7EDF\u9700\u8981\u4F7F\u7528\u7684\u81EA\u5B9A\u4E49\u5B57\u6BB5\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u4F8B\u5B50\u6DFB\u52A0\u4E86name \u7528\u6237\u6635\u79F0\uFF1A</font>

\`\`\`plain
{
  "sub": "1234567890",
  "name": "John Doe"
}
\`\`\`

<font style="color:rgb(51, 51, 51);">\u7136\u540E\u5C06\u5176\u8FDB\u884CBase64\u7F16\u7801\uFF0C\u5F97\u5230JWT\u7684\u7B2C\u4E8C\u90E8\u5206\uFF1A</font>

\`JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE\`

3. **\u7B7E\u540D\uFF08Signature\uFF09**:

<font style="color:rgb(51, 51, 51);">\u4E3A\u4E86\u751F\u6210\u7B7E\u540D\u90E8\u5206\uFF0C\u9700\u8981\u5C06\u7F16\u7801\u540E\u7684\u5934\u90E8\u3001\u8F7D\u8377\u548C\u4E00\u4E2A\u5BC6\u94A5\uFF08\u6709\u4E9B\u60C5\u51B5\u4E0B\u662F\u79C1\u94A5\uFF09\u6309\u7167\u6307\u5B9A\u7684\u7B97\u6CD5\uFF08\u5728\u4E0B\u6587JWKS\u4E2D\u6307\u5B9A\uFF09\u7EC4\u5408\u5728\u4E00\u8D77\u8FDB\u884C\u7B7E\u540D\u3002  
</font><font style="color:rgb(51, 51, 51);">\u8FD9\u4E2A\u90E8\u5206\u9700\u8981Base64\u7F16\u7801\u540E\u7684Header\u548CBase64\u7F16\u7801\u540E\u7684Payload\u4F7F\u7528 . \u8FDE\u63A5\u7EC4\u6210\u7684\u5B57\u7B26\u4E32\uFF0C\u7136\u540E\u901A\u8FC7Header\u4E2D\u58F0\u660E\u7684\u52A0\u5BC6\u65B9\u5F0F\u8FDB\u884C\u52A0\u5BC6\uFF08$secret \u8868\u793A\u7528\u6237\u7684\u79C1\u94A5\uFF09\uFF0C\u7136\u540E\u5C31\u6784\u6210\u4E86jwt\u7684\u7B2C\u4E09\u90E8\u5206\u3002</font>

\`\`\`plain
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, '$secret');
\`\`\`

<font style="color:rgb(51, 51, 51);">\u5C06\u8FD9\u4E09\u90E8\u5206\u7528 . \u8FDE\u63A5\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u5B57\u7B26\u4E32\uFF0C</font>\`<font style="color:rgb(51, 51, 51);">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.</font>JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE<font style="color:rgb(51, 51, 51);">.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</font>\`

#### \u4EC0\u4E48\u662FJWKS
\u5728\u4E91\u539F\u751FAPI\u7F51\u5173\u4E2D\uFF0C\u901A\u8FC7\u4E00\u7EC4<font style="color:rgb(51, 51, 51);">JWKS</font>\u6765\u63CF\u8FF0Header\u4FE1\u606F\uFF0C<font style="color:rgb(51, 51, 51);">JWKS\uFF08JSON Web Key Set\uFF09\u662F\u4E00\u79CD\u7528\u4E8E\u8868\u793A\u516C\u94A5\u548C\u79C1\u94A5\u96C6\u5408\u7684\u683C\u5F0F\uFF0C\u901A\u5E38\u7528\u4E8E\u652F\u6301 JWT \u7684\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u6388\u6743\u573A\u666F\u3002</font>

\`\`\`plain
{
    "keys": [
        {
            "kty": "oct",
            "k": "GFmQpiJq42SxAWyIN5vnlUzrVDhcdBjKZ8uw0ag3XO1",
            "alg": "HS256"
        }
    ]
}
\`\`\`

\`\`\`plain
{
    "keys": [
        {
            "e": "\u516C\u94A5\u7684\u6307\u6570\uFF0C\u4F8B\u5982AQAB",
            "kid": "Key ID",
            "kty": "\u4F7F\u7528\u7684\u52A0\u5BC6\u7B97\u6CD5\u7684\u5BB6\u65CF\uFF0C\u4F8B\u5982RSA\uFF0C\u5FC5\u586B\uFF0C\u5927\u5C0F\u5199\u654F\u611F",
            "alg": "\u4F7F\u7528\u7684\u5177\u4F53\u7684\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u4F8B\u5982RS256\uFF0C\u5FC5\u586B\uFF0C\u5927\u5C0F\u5199\u654F\u611F",
            "use": "\u5BC6\u94A5\u7684\u7528\u9014\uFF0C\u4F8B\u5982sig\uFF0C\u7528\u4E8E\u7B7E\u540D",
            "n": "\u516C\u94A5\u7684\u6A21\u503C"
        }
    ]
}
\`\`\`

#### <font style="color:rgb(51, 51, 51);">JWT \u8BA4\u8BC1\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\uFF0C\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5982\u4E0B\uFF1A</font>
[\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=anS1c)

1. <font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u8D77\u8BA4\u8BC1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u4E00\u822C\u4F1A\u643A\u5E26\u7EC8\u7AEF\u7528\u6237\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u3002</font>
2. <font style="color:rgb(51, 51, 51);">\u7F51\u5173\u5C06\u8BF7\u6C42\u76F4\u63A5\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\u3002</font>
3. <font style="color:rgb(51, 51, 51);">\u540E\u7AEF\u670D\u52A1\u8BFB\u53D6\u8BF7\u6C42\u4E2D\u7684\u9A8C\u8BC1\u4FE1\u606F\uFF08\u6BD4\u5982\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF09\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\u4F7F\u7528\u79C1\u94A5\u751F\u6210\u6807\u51C6\u7684token\uFF0C\u8FD4\u56DE\u7ED9\u7F51\u5173\u3002</font>
4. <font style="color:rgb(51, 51, 51);">\u7F51\u5173\u5C06\u643A\u5E26token\u7684\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5C06\u8FD9\u4E2Atoken\u7F13\u5B58\u5230\u672C\u5730\u3002</font>
5. <font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\u5411API\u7F51\u5173\u53D1\u9001\u4E1A\u52A1\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E2D\u643A\u5E26token\u3002</font>
6. <font style="color:rgb(51, 51, 51);">\u7F51\u5173\u4F7F\u7528\u7528\u6237\u901A\u8FC7JWT\u8BA4\u8BC1\u914D\u7F6E\u4E2DJWKS\u8BBE\u5B9A\u7684\u516C\u94A5\u5BF9\u8BF7\u6C42\u4E2D\u7684token\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u5C06\u8BF7\u6C42\u900F\u4F20\u7ED9\u540E\u7AEF\u670D\u52A1\u3002</font>
7. <font style="color:rgb(51, 51, 51);">\u540E\u7AEF\u670D\u52A1\u8FDB\u884C\u4E1A\u52A1\u5904\u7406\u540E\u5E94\u7B54\u3002</font>
8. <font style="color:rgb(51, 51, 51);">\u7F51\u5173\u5C06\u4E1A\u52A1\u5E94\u7B54\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</font>

#### \u6CE8\u610F\u4E8B\u9879\uFF1A
1. <font style="color:rgb(51, 51, 51);">JWT \u901A\u5E38\u8BBE\u7F6E\u6709\u8FC7\u671F\u65F6\u95F4\uFF0C\u8FC7\u671F\u65F6\u95F4\u7684\u8BBE\u7F6E\u662F\u4E00\u6B21\u6027\u7684\uFF0C\u5373\u5BA2\u6237\u7AEF\u9700\u8981\u5408\u7406\u7684\u7BA1\u7406 Token \u7684\u5931\u6548\u4EE5\u514D Token \u5931\u6548\u540E\u5F71\u54CD\u8BBF\u95EE\uFF0C\u540C\u65F6 Token \u4E00\u65E6\u9881\u53D1\u65E0\u6CD5\u64A4\u9500\uFF0C\u5373\u4F7F\u7528\u6237\u5DF2\u7ECF\u65E0\u6743\u9650\uFF0C\u53EA\u8981 Token \u8FD8\u5728\u6709\u6548\u671F\uFF0C\u4FBF\u4F9D\u7136\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5F15\u53D1\u5B89\u5168\u98CE\u9669\u3002</font>
2. <font style="color:rgb(51, 51, 51);">JWT \u9ED8\u8BA4\u662F\u4E0D\u52A0\u5BC6\uFF0C\u4E0D\u8981\u5C06\u79D8\u5BC6\u6570\u636E\u5199\u5165 JWT\u3002</font>
3. JWT \u672C\u8EAB\u5305\u542B\u4E86\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u4E00\u65E6\u6CC4\u9732\uFF0C\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u83B7\u5F97\u8BE5\u4EE4\u724C\u7684\u6240\u6709\u6743\u9650\u3002\u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u7684\u6709\u6548\u671F\u5E94\u8BE5\u8BBE\u7F6E\u5F97\u6BD4\u8F83\u77ED\u3002\u5BF9\u4E8E\u4E00\u4E9B\u6BD4\u8F83\u91CD\u8981\u7684\u6743\u9650\uFF0C\u4F7F\u7528\u65F6\u5E94\u8BE5\u518D\u6B21\u5BF9\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\u3002
4. \u4E3A\u4E86\u51CF\u5C11\u76D7\u7528\uFF0CJWT \u4E0D\u5E94\u8BE5\u4F7F\u7528 HTTP \u534F\u8BAE\u660E\u7801\u4F20\u8F93\uFF0C\u8981\u4F7F\u7528HTTPS \u534F\u8BAE\u4F20\u8F93\u3002

### AK/SK \u8BA4\u8BC1
**<font style="color:rgb(51, 51, 51);">AK(Access Key ID)/SK\uFF08Access Secret Key\uFF09</font>**<font style="color:rgb(51, 51, 51);">\uFF1A\u662F\u963F\u91CC\u4E91\u5BF9\u4E00\u4E2A\u660E\u786E\u7684\u7528\u6237\u8EAB\u4EFD\u7684\u4E00\u4E2A\u62BD\u8C61\uFF0C\u4E91\u539F\u751FAPI\u7F51\u5173\u6CBF\u7528\u8FD9\u4E2A\u8BBE\u8BA1\uFF08\u6CE8\u610F\uFF1A\u8FD9\u91CC\u7684\u4E91\u539F\u751F API \u7F51\u5173\u751F\u6210\u7684 AK/SK \u4E0E RAM \u7684 AK /SK \u76F8\u4E92\u72EC\u7ACB\uFF0C\u5E76\u4E0D\u80FD\u4E92\u901A\u4F7F\u7528\uFF09\uFF0C\u7528\u6765\u6807\u8BC6\u4E00\u4E2A\u7F51\u5173\u7528\u6237\u7684\u8EAB\u4EFD\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u7528\u6237\u53EF\u80FD\u6709\u591A\u79CD\u8EAB\u4EFD\u7C7B\u578B\uFF0C\u6BCF\u79CD\u8EAB\u4EFD\u7C7B\u578B\u53EF\u4EE5\u6709\u591A\u4E2A\u51ED\u8BC1\uFF0C\u7C7B\u4F3C\u591A\u4E2A\u8D26\u53F7\uFF0C\u4E00\u7EC4AK/SK\u53EF\u4EE5\u7B80\u5355\u5BF9\u5E94\u5230\u4E00\u7EC4\u7528\u6237\u8D26\u5BC6\u3002</font>

<font style="color:rgb(51, 51, 51);">API\u63D0\u4F9B\u8005\u7ED9\u6709\u6743\u9650\u7684\u7528\u6237\u5206\u914DAK/SK\uFF0CAPI\u6D88\u8D39\u8005\u8BF7\u6C42\u65F6\u5E26\u4E0AAK\uFF0C\u670D\u52A1\u7AEF\u5C31\u53EF\u4EE5\u8BC6\u522B\u8C03\u7528\u8005\u7684\u4FE1\u606F\uFF0C\u5E76\u8FDB\u884C\u66F4\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u7BA1\u7406\u3002</font>

**<font style="color:rgb(51, 51, 51);">HMAC\uFF1A</font>**<font style="color:rgb(51, 51, 51);">HMAC\uFF08Hash-based Message Authentication Code\uFF09\u662F\u4E00\u79CD\u57FA\u4E8E\u54C8\u5E0C\u51FD\u6570\u7684\u6D88\u606F\u8BA4\u8BC1\u7801\uFF0C\u7528\u4E8E\u9A8C\u8BC1\u4FE1\u606F\u7684\u5B8C\u6574\u6027\u548C\u8EAB\u4EFD\u9A8C\u8BC1\u3002HMAC\u7ED3\u5408\u4E86\u54C8\u5E0C\u51FD\u6570\u548C\u5BC6\u94A5\u7684\u4F18\u70B9\uFF0C\u63D0\u4F9B\u4E86\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u5B89\u5168\u8BA4\u8BC1\u7684\u4FDD\u8BC1\u3002</font>

<font style="color:rgb(51, 51, 51);">\u5728\u57FA\u4E8EHMAC \u7684AK/SK \u8BA4\u8BC1\u8FC7\u7A0B\u4E2D\uFF0CHMAC\u7684\u4E3B\u8981\u4F5C\u7528\u662F\u786E\u4FDD\u6D88\u606F\u7684\u5B8C\u6574\u6027\u548C\u8EAB\u4EFD\u9A8C\u8BC1\u3002\u5176\u5177\u4F53\u4F5C\u7528\u5982\u4E0B\uFF1A</font>

1. **\u8EAB\u4EFD\u9A8C\u8BC1**\uFF1A\u901A\u8FC7\u4F7F\u7528\u5171\u4EAB\u5BC6\u94A5\uFF0C\u53EA\u6709\u6301\u6709\u8BE5\u5BC6\u94A5\u7684\u7528\u6237\u624D\u80FD\u751F\u6210\u6B63\u786E\u7684HMAC\uFF0C\u4ECE\u800C\u53EF\u4EE5\u786E\u8BA4\u6D88\u606F\u7684\u53D1\u9001\u8005\u7684\u8EAB\u4EFD\u3002
2. **\u6570\u636E\u5B8C\u6574\u6027**\uFF1A\u4EFB\u4F55\u5BF9\u6D88\u606F\u5185\u5BB9\u7684\u4FEE\u6539\u90FD\u4F1A\u5BFC\u81F4HMAC\u503C\u7684\u53D8\u5316\uFF0C\u56E0\u6B64\u63A5\u6536\u65B9\u53EF\u4EE5\u901A\u8FC7\u8BA1\u7B97\u63A5\u6536\u5230\u7684\u6D88\u606F\u7684HMAC\u503C\u6765\u9A8C\u8BC1\u6D88\u606F\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u662F\u5426\u88AB\u7BE1\u6539\u3002
3. **\u9632\u6B62\u91CD\u653E\u653B\u51FB**\uFF1A\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0CHMAC\u8FD8\u53EF\u4EE5\u5E2E\u52A9\u9632\u6B62\u91CD\u653E\u653B\u51FB\u3002\u901A\u8FC7\u5728\u6D88\u606F\u4E2D\u52A0\u5165\u65F6\u95F4\u6233\u6216\u968F\u673A\u6570\uFF0C\u63A5\u6536\u65B9\u53EF\u4EE5\u786E\u4FDD\u6D88\u606F\u7684\u552F\u4E00\u6027\u548C\u65B0\u9C9C\u6027\u3002

#### <font style="color:rgb(51, 51, 51);">AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\uFF0C\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5305\u62EC\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u548C\u670D\u52A1\u7AEF\u9A8C\u8BC1\u524D\u9762\u4E24\u4E2A\u6B65\u9AA4</font>
##### <font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u6D41\u7A0B\uFF1A</font>
[\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=x7N1B)

1. <font style="color:rgb(51, 51, 51);">\u63D0\u53D6\u7B7E\u540D\u4E32\uFF1A\u5BA2\u6237\u7AEF\u4ECEHTTP\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51FA\u5173\u952E\u6570\u636E\uFF0C\u7EC4\u6210\u4E00\u4E2A\u7B7E\u540D\u4E32\uFF0C\u5982\u4E91\u539F\u751FAPI\u7F51\u5173\u7684\u7B7E\u540D\u4E32\u5185\u5BB9\u4E3B\u8981\u7531\u4EE5\u4E0B7\u90E8\u5206\u7EC4\u6210\uFF1A</font>

\`\`\`plain
HTTPMethod
Accept
Content-MD5
Content-Type
Date
Headers
PathAndParameters
\`\`\`

\`\`\`plain
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

\u63D0\u53D6\u539F\u7B7E\u540D\u4E32\u5E76\u8FFD\u52A0AK/SK\u8BA4\u8BC1\u7684 AK\u548C\u7B7E\u540D\u7B97\u6CD5\uFF0C\u5F62\u6210\u6700\u7EC8\u7B7E\u540D\u4E32\uFF0Cheader\u4E4B\u95F4\u7528\\n \u6362\u884C\u7B26\u5206\u9694

\`\`\`plain
POST
application/json; charset=utf-8
application/x-www-form-urlencoded; charset=utf-8
Wed, 09 May 2018 13:30:29 GMT+00:00
/http2test/test?param1=test&password=123456789&username=xiaoming
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-timestamp:1525872629832

##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers
x-ca-key:203753385\uFF0CAK/SK\u8EAB\u4EFD\u914D\u7F6E\u4E2D\u7684AK
x-ca-signature-method:HmacSHA256

\`\`\`

2. <font style="color:rgb(51, 51, 51);">\u52A0\u5BC6\u7B7E\u540D\uFF1A\u5BF9\u7B2C1\u6B65\u63D0\u53D6\u7684\u7B7E\u540D\u4E32\u4F7F\u7528HmacSha256\u7B97\u6CD5\u8FDB\u884C\u52A0\u5BC6\u548CBase64\u7F16\u7801\u5904\u7406\u5F97\u5230\u7B7E\u540D\u5185\u5BB9\uFF0C\u5982</font>

\`\`\`java
Mac hmacSha256 = Mac.getInstance("HmacSHA256");
byte[] secretBytes = secret.getBytes("UTF-8");
hmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256"));
byte[] result = hmacSha256.doFinal(stringToSign.getBytes("UTF-8"));
String sign = Base64.encodeBase64String(result);
\`\`\`

3. <font style="color:rgb(51, 51, 51);">\u6DFB\u52A0\u7B7E\u540D\uFF1A\u5C06\u7B2C2\u6B65\u751F\u6210\u7684\u7B7E\u540D\u548C\u53C2\u4E0E\u524D\u9762\u53C2\u4E0E\u52A0\u7B7E\u7684header\u4F5C\u4E3Aheader\u4E00\u5E76\u6DFB\u52A0\u5230http\u8BF7\u6C42\u4E2D</font>

\`\`\`plain
x-ca-signature-headers\uFF1A\u53C2\u4E0E\u7B7E\u540D\u7684header\u7684key\u7684\u96C6\u5408\uFF0C\u82F1\u6587\u9017\u53F7\u5206\u9694
x-ca-signature\uFF1A\u7B7E\u540D\uFF0C\u5FC5\u9009\u3002
\`\`\`

\u5F97\u5230\u5F85\u53D1\u9001\u7ED9\u7F51\u5173\u7684\u643A\u5E26\u7B7E\u540D\u7684HTTP\u8BF7\u6C42

\`\`\`plain
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

##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers
x-ca-key:203753385
x-ca-signature-method:HmacSHA256

##\u6DFB\u52A0AK/SK\u8BA4\u8BC1Headers\u7B7E\u540D\u76F8\u5173\u7684headers
x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method
x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=
\`\`\`

##### <font style="color:rgb(51, 51, 51);">\u7F51\u5173\u9A8C\u8BC1\u7B7E\u540D\u6D41\u7A0B\u56FE\uFF1A</font>
[\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=VUh5K)

1. <font style="color:rgb(24, 24, 24);">\u63D0\u53D6\u7B7E\u540D\u4E32\uFF1A\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u63D0\u53D6\u5173\u952E\u6570\u636E\uFF0C\u5F97\u5230\u4E00\u4E2A\u7528\u6765\u7B7E\u540D\u7684\u5B57\u7B26\u4E32\u3002</font>

\u6536\u5230\u7684HTTP\u8BF7\u6C42

\`\`\`plain
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

##AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u65B0\u589E\u7684header
x-ca-key:203753385
x-ca-signature-method:HmacSHA256

##\u7B7E\u540D\u65B0\u589E\u7684header
x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method
x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=
\`\`\`

2. <font style="color:rgb(24, 24, 24);">\u63D0\u53D6AK\uFF1A\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6AK \uFF0C\u901A\u8FC7AK \u67E5\u8BE2\u5230\u5BF9\u5E94\u7684SK</font>
3. <font style="color:rgb(24, 24, 24);">\u63D0\u53D6\u7B7E\u540D\u4E32\u5E76\u8BA1\u7B97\u7B7E\u540D\uFF1A\u4F7F\u7528\u52A0\u5BC6\u7B97\u6CD5\u548CSK\u5BF9\u5173\u952E\u6570\u636E\u7B7E\u540D\u4E32\u8FDB\u884C\u52A0\u5BC6\u5904\u7406\uFF0C\u5F97\u5230\u7B7E\u540D\u3002</font>

\`\`\`plain
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

##AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u65B0\u589E\u7684header
x-ca-key:203753385
x-ca-signature-method:HmacSHA256
\`\`\`

4. <font style="color:rgb(24, 24, 24);">\u7B7E\u540D\u9A8C\u8BC1\uFF1A\u4ECE\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u4E2D\u8BFB\u53D6\u5BA2\u6237\u7AEF\u7B7E\u540D\uFF0C\u670D\u52A1\u7AEF\u4F7F\u7528\u7B2C3\u4E0D\u83B7\u53D6\u7684\u79C1\u94A5\u8FDB\u884C\u7B7E\u540D\u9A8C\u8BC1\uFF0C\u5BF9\u6BD4\u670D\u52A1\u5668\u7AEF\u7B7E\u540D\u548C\u5BA2\u6237\u7AEF\u7B7E\u540D\u7684\u4E00\u81F4\u6027\uFF0C\u4ECE\u800C\u5224\u65AD\u5BA2\u6237\u662F\u5426\u8BA4\u8BC1\u901A\u8FC7</font>

### OAuth2\u8BA4\u8BC1
#### <font style="color:rgb(51, 51, 51);">\u4EC0\u4E48\u662FOAuth 2.0</font>
<font style="color:rgb(51, 51, 51);">OAuth 2.0 \u662F\u4E00\u79CD\u7528\u4E8E\u6388\u6743\u7684\u534F\u8BAE\uFF0C\u5E7F\u6CDB\u7528\u4E8E\u4E92\u8054\u7F51\u5E94\u7528\u4EE5\u5B9E\u73B0\u5B89\u5168\u7684\u6388\u6743\u673A\u5236\u3002OAuth 2.0\u5B9A\u4E49\u4EE5\u4E0B\u51E0\u79CD\u89D2\u8272\uFF1A</font>

+ **<font style="color:rgb(51, 51, 51);">\u8D44\u6E90\u62E5\u6709\u8005\uFF08Resource Owner\uFF09</font>**<font style="color:rgb(51, 51, 51);">\uFF1A\u901A\u5E38\u662F\u7528\u6237\uFF0C\u62E5\u6709\u6570\u636E\u8BBF\u95EE\u6743\u9650\uFF0C\u4EE5\u4E0B\u7B80\u79F0\u4E3A\u7528\u6237</font>
+ **<font style="color:rgb(51, 51, 51);">\u5BA2\u6237\u7AEF\uFF08Client\uFF09</font>**<font style="color:rgb(51, 51, 51);">\uFF1A\u8BF7\u6C42\u8BBF\u95EE\u8D44\u6E90\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</font>
+ **<font style="color:rgb(51, 51, 51);">\u6388\u6743\u670D\u52A1\u5668\uFF08Authorization Server\uFF09</font>**<font style="color:rgb(51, 51, 51);">\uFF1A\u8D1F\u8D23\u9A8C\u8BC1\u7528\u6237\u5E76\u53D1\u653E\u8BBF\u95EE\u4EE4\u724C\u7684\u670D\u52A1\u5668\u3002</font>
+ **<font style="color:rgb(51, 51, 51);">\u8D44\u6E90\u670D\u52A1\u5668\uFF08Resource Server\uFF09</font>**<font style="color:rgb(51, 51, 51);">\uFF1A\u5B58\u50A8\u7528\u6237\u6570\u636E\u7684\u670D\u52A1\u5668\u3002</font>

#### <font style="color:rgb(51, 51, 51);">OAuth 2.0\u534F\u8BAE\u7684\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A</font>
\`\`\`plain
1\u3001\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7528\u6237\u6388\u6743\uFF0C\u6B64\u65F6\u901A\u5E38\u4F1A\u8DF3\u8F6C\u7B2C\u4E09\u65B9\u767B\u5F55\u9875
2\u3001\u8D44\u6E90\u62E5\u6709\u8005\u7528\u6237\u540C\u610F\u6388\u6743
3\u3001\u5BA2\u6237\u7AEF\u4F7F\u7528\u5DF2\u83B7\u5F97\u6388\u6743\uFF0C\u8BF7\u6C42\u6388\u6743\u670D\u52A1\u5668\u53D1\u653EAccess Token
4\u3001\u6388\u6743\u670D\u52A1\u5668\u8FD4\u56DEAccess Token
5\u3001\u5BA2\u6237\u7AEF\u4F7F\u7528Access Token\uFF0C\u8BF7\u6C42\u8D44\u6E90\u670D\u52A1\u5668
6\u3001\u8D44\u6E90\u670D\u52A1\u5668\u9A8C\u8BC1Access Token\uFF0C\u5E76\u8FD4\u56DE\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90
\`\`\`

#### \u62BD\u8C61\u6D41\u7A0B\u56FE
![](/img/1744033007781.png)

#### OAuth 2.0\u534F\u8BAE\u5B9A\u4E49\u4E864\u79CD\u6388\u6743\u6A21\u5F0F\uFF1A
+ \u6388\u6743\u7801\u6A21\u5F0F\uFF08authorization code\uFF09
+ \u7B80\u5316\u6A21\u5F0F\uFF08implicit\uFF09
+ \u5BC6\u7801\u6A21\u5F0F\uFF08resource owner password credentials\uFF09
+ \u5BA2\u6237\u7AEF\u6A21\u5F0F\uFF08client credentials\uFF09

##### \u6388\u6743\u7801\u6A21\u5F0F\uFF1A
\u5176\u4E2D\u6388\u6743\u7801\u6A21\u5F0F\u662F\u6700\u4E3A\u5E7F\u6CDB\u4F7F\u7528\u7684\u6388\u6743\u6A21\u5F0F\uFF0C\u5B83\u9002\u7528\u4E8E\u7528\u6237\u6388\u4E88\u7B2C\u4E09\u65B9\u5BA2\u6237\u7AEF\u8BBF\u95EE\u81EA\u8EAB\u8D44\u6E90\u7684\u573A\u666F\uFF0C\u5176\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\uFF1A

\`\`\`plain
\u7528\u6237\u901A\u8FC7User-Agent\uFF08\u7528\u6237\u4EE3\u7406\uFF0C\u901A\u5E38\u662F\u6D4F\u89C8\u5668\uFF09\u4E0EClient\u7B2C\u4E09\u65B9\u5BA2\u6237\u7AEF\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5176\u4EA4\u4E92\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u4E09\u6B65\uFF1A
A\u3001\u6D4F\u89C8\u5668\u8BBF\u95EE\u5BA2\u6237\u7AEF\u5E94\u7528\u7A0B\u5E8F
B\u3001\u7528\u6237\u901A\u8FC7\u6D4F\u89C8\u5668\u4E0E\u5BA2\u6237\u7AEF\u4EA4\u4E92
C\u3001\u5BA2\u6237\u7AEF\u901A\u8FC7\u6D4F\u89C8\u5668\u900F\u4F20AuthorizationCode\u53CARedirectUri\u7B49\u53C2\u6570

User-Agent\u4EE3\u7406\u7528\u6237\u4E0E\u6388\u6743\u670D\u52A1\u5668\u4EA4\u4E92\uFF0C\u5176\u4EA4\u4E92\u6D41\u7A0B\u5982\u4E0B\uFF1A
A\u3001User-Agent\u4F7F\u7528\u7B2C\u4E09\u65B9\u6388\u6743\uFF0CUser-Agent\u643A\u5E26client\u5B9A\u4F4D\u7B26\u4E0E\u91CD\u5B9A\u5411uri\u5730\u5740\u5C06\u7528\u6237\u6307\u5411
\u8BA4\u8BC1\u670D\u52A1\u5668\u7684\u8BA4\u8BC1\u9875
B\u3001\u7528\u6237\u901A\u8FC7User-Agent\u6388\u6743\u8BBF\u95EE
C\u3001\u6388\u6743\u670D\u52A1\u5668\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\uFF0C\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\u5C06\u6388\u6743\u7801\u9644\u5728A\u6B65\u9AA4\u91CD\u5B9A\u5411Uri\u5730\u5740\u4E4B\u540E\uFF0C\u7136\u540E\u5BFC\u5411\u91CD\u5B9A\u5411Uri
D\u3001\u5BA2\u6237\u7AEF\u6536\u5230\u6388\u6743\u7801\u5C06\u5176\u9644\u5728\u91CD\u5B9A\u5411uri\u4E2D\uFF0C\u8BF7\u6C42\u6388\u6743\u670D\u52A1\u5668\uFF0C\u83B7\u53D6Access Token
E\u3001\u6388\u6743\u670D\u52A1\u5668\u548C\u6838\u5BF9\u91CD\u5B9A\u5411uri\u5730\u5740\u548C\u6388\u6743\u7801\u65E0\u8BEF\u540E\uFF0C\u53D1\u653EAccess Token\u548CRefresh Token\uFF08\u53EF\u9009\u7684\uFF09
\`\`\`

##### \u6388\u6743\u7801\u6388\u6743\u6D41\u7A0B\u56FE\uFF1A
![](/img/1744033011502.png)

##### \u5BA2\u6237\u7AEF\u6A21\u5F0F\uFF1A
\u5BA2\u6237\u7AEF\u6A21\u5F0F\u662F\u4E00\u79CD\u7B80\u5316\u7684\u6388\u6743\u6A21\u5F0F\uFF0C\u5B83\u662F\u5BA2\u6237\u7AEF\u4EE5"Client"\u7684\u540D\u4E49\u8BF7\u6C42\u8D44\u6E90\u670D\u52A1\u5668\uFF0C\u800C\u4E0D\u662F\u4EE5"\u7528\u6237"\u540D\u4E49\uFF0C\u5B83\u9002\u7528\u4E8E\u53D7\u4FE1\u7684\u5BA2\u6237\u7AEF\u8BBF\u95EE

![](/img/1744033014543.png)

### OIDC \u8BA4\u8BC1
<font style="color:rgb(51, 51, 51);">OIDC\u662FOpenID Connect\u7684\u7B80\u79F0\u3002OIDC\uFF08OpenID Connect\uFF09\u662F\u5728OAuth 2.0\u4E4B\u4E0A\u6784\u5EFA\u7684\u8EAB\u4EFD\u8BA4\u8BC1\u5C42\uFF0C\u4E3A\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u7528\u6237\u8EAB\u4EFD\u9A8C\u8BC1\u7684\u80FD\u529B\u3002</font>

#### <font style="color:rgb(51, 51, 51);">\u4E3A\u4EC0\u4E48\u8981\u6709OIDC</font>
1. **\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u6388\u6743\u7684\u5206\u79BB**\uFF1AOAuth 2.0\u4E3B\u8981\u5173\u6CE8\u6388\u6743Authorization\uFF0C\u800COIDC\u6269\u5C55\u4E86\u8BA4\u8BC1\u7684\u62BD\u8C61\uFF0C\u4EFB\u610F\u5B8C\u6210\u8EAB\u4EFD\u8BA4\u8BC1\u7684 Provider\u5B9E\u73B0\uFF0C\u90FD\u80FD\u6210\u4E3A Identity Provider\uFF0C\u5E76\u4F5C\u4E3AOpenID Provider\u5728 OIDC\u534F\u8BAE\u4E2D\u627F\u62C5\u8BA4\u8BC1\u7684\u804C\u8D23
2. **\u7528\u6237\u4FE1\u606F\u83B7\u53D6**\uFF1AOIDC\u5728\u6269\u5C55\u8BA4\u8BC1\u7684\u57FA\u7840\u63D0\u4F9B\u4E86\u6807\u51C6\u5316\u7684API\u6765\u83B7\u53D6\u7528\u6237\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u80FD\u591F\u8F7B\u677E\u96C6\u6210\u7528\u6237\u7684\u4E2A\u4EBA\u4FE1\u606F\u3002

\u603B\u7ED3\u4E00\u4E0B\uFF1AOAuth 2.0\u8BBE\u8BA1\u4E4B\u521D\u662F\u4E3A\u4E86\u89E3\u51B3\u6388\u6743\u7684\u95EE\u9898\uFF0C\u800COIDC \u5728OAuth 2.0\u7684\u57FA\u7840\u4E0A\u6269\u5C55\u4E86\u5173\u4E8E\u8BA4\u8BC1\u7684\u5B9A\u4E49\u5E76\u4E14\u6DFB\u52A0\u4E00\u7EC4\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684API\uFF0C\u4E14OIDC \u5B8C\u5168\u517C\u5BB9OAuth 2.0\u534F\u8BAE\u3002

#### OIDC \u57FA\u4E8EOAuth 2.0\u534F\u8BAE\u5B9E\u73B0\u7684\u89D2\u8272\u53CA\u5173\u952E\u8D44\u6E90\u5B9A\u4E49
| OIDC  | OAuth 2.0 | \u8EAB\u4EFD\u63CF\u8FF0 |
| --- | --- | --- |
| EU End User | Resource Owner | \u7528\u6237\u3001\u8D44\u6E90\u62E5\u6709\u8005 |
| RP Relying Party | Client | \u5BA2\u6237\u7AEF\uFF08\u524D\u7AEF\u3001\u79FB\u52A8\u7AEF\uFF09 |
| OpenID Provider  | Authorization Server | \u8BA4\u8BC1\u670D\u52A1 |
| Resource Server  | Resource Server | \u8D44\u6E90\u670D\u52A1\u5668\uFF0C\u63D0\u4F9B\u8D44\u6E90\u8BF7\u6C42\u7684\u670D\u52A1\u5668 |
| ID Token | - | \u8EAB\u4EFD\u4EE4\u724C\uFF08JWT\uFF09\uFF0C\u7528\u4E8E\u6807\u8BC6\u7528\u6237\u901A\u8FC7\u8BA4\u8BC1\u7684\u8EAB\u4EFD\uFF0C\u53EF\u4EE5\u7528\u83B7\u53D6\u7528\u6237\u4FE1\u606F |
| Access Token | Access Token | \u8BBF\u95EE\u4EE4\u724C\uFF08JWT\uFF09\uFF0C\u7528\u4E8E\u6807\u8BC6\u7528\u6237\u901A\u8FC7\u6388\u6743\uFF0CClient \u643A\u5E26Access Token\u8BBF\u95EE |
| Refresh Token | Refresh Token | \u5237\u65B0\u4EE4\u724C\uFF0C\u7528\u4E8EAccess Token\u8FC7\u671F\u4E4B\u540E \u7684\u8F6E\u6362 |
| User-Agent | User-Agent | \u7528\u6237\u4EE3\u7406\uFF0C\u901A\u5E38\u662F\u7528\u6237\u4E0E\u4E92\u8054\u4EA4\u4E92\u7684\u754C\u9762\uFF0C\u6BD4\u5982\u6D4F\u89C8\u5668 |


#### OIDC \u8BA4\u8BC1
<font style="color:rgb(24, 24, 24);">\u901A\u8FC7\u4E91\u539F\u751FAPI\u7F51\u5173\u7684OIDC\u8BA4\u8BC1\u529F\u80FD\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5728\u7F51\u5173\u7EDF\u4E00\u8BA4\u8BC1\u9274\u6743\uFF0C\u5E76\u652F\u6301\u57DF\u540D\u7EA7\u522B\u7684\u9ED1\u767D\u540D\u5355\u65B9\u4FBF\u7528\u6237\u7075\u6D3B\u7684\u7BA1\u7406\u8BA4\u8BC1\u6388\u6743\u7684\u7C92\u5EA6\uFF0C\u5176\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\uFF1A</font>

##### OIDC \u8BA4\u8BC1\u8BE6\u7EC6\u6D41\u7A0B
[\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=rtmQr)

1. <font style="color:rgb(31, 35, 40);">\u8BBF\u95EE\u7528\u6237\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF08\u9700\u8981\u8BA4\u8BC1\u6388\u6743\u8BBF\u95EE\u7684API\uFF09</font>

\`\`\`plain
curl --url "foo.bar.com/headers"
\`\`\`

2. <font style="color:rgb(31, 35, 40);">\u4E91\u539F\u751FAPI\u7F51\u5173\u5C06\u8BF7\u6C42\u91CD\u5B9A\u5411\u5230\u8EAB\u4EFD\u63D0\u4F9B\u5546\uFF08IDP\uFF09\u767B\u5F55\u9875\u540C\u65F6\u643A\u5E26 client_id\u3001response_type\u3001scope \u7B49OIDC \u8BA4\u8BC1\u7684\u53C2\u6570\uFF0Cresponse_type\u8BBE\u7F6E\u4E3Acode\uFF0C\u5373\u4F7F\u7528OAuth 2.0\u6388\u6743\u7801\u6A21\u5F0F\u83B7\u53D6token\uFF0C\u540C\u65F6\u8BBE\u7F6Ecsrf cookie\uFF0C \u9632\u5FA1csrf\u653B\u51FB\uFF08</font><font style="color:rgb(51, 51, 51);">Cross-Site Request Forgery -\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020</font><font style="color:rgb(31, 35, 40);">) </font>

\`\`\`plain
curl --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/authorize"\\
  --url-query "approval_prompt=force" \\
  --url-query "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\
  --url-query "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \\
  --url-query "response_type=code" \\
  --url-query "scope=openid+email+offline_access" \\
  --url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \\
  --header "Set-Cookie: _oauth2_proxy_csrf=LPruATEDgcdmelr8zScD_ObhsbP4zSzvcgmPlcNDcJpFJ0OvhxP2hFotsU-kZnYxd5KsIjzeIXGTOjf8TKcbTHbDIt-aQoZORXI_0id3qeY0Jt78223DPeJ1xBqa8VO0UiEOUFOR53FGxirJOdKFxaAvxDFb1Ok=|1718962455|V1QGWyjQ4hMNOQ4Jtf17HeQJdVqHdt5d65uraFduMIU=; Path=/; Expires=Fri, 21 Jun 2024 08:06:20 GMT; HttpOnly"
\`\`\`

3. <font style="color:rgb(31, 35, 40);">\u91CD\u5B9A\u5411\u5230\u8EAB\u4EFD\u63D0\u4F9B\u5546\uFF08IDP\uFF09\u767B\u5F55\u9875\uFF08\u5728\u4E91\u539F\u751F\u7F51\u5173\u4E3A\u7528\u6237\u914D\u7F6E\u7684\u8BA4\u8BC1\u670D\u52A1\u63D0\u4F9B\u7684\u767B\u5F55\u9875\uFF09</font>

![](/img/1744033017425.png)

4. <font style="color:rgb(31, 35, 40);">\u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5B8C\u6210\uFF0C\u5B8C\u6210\u8BA4\u8BC1\u6388\u6743</font>
5. <font style="color:rgb(31, 35, 40);">\u643A\u5E26\u6388\u6743\u7801\u91CD\u5B9A\u5411\u5230\u4E91\u539F\u751FAPI\u7F51\u5173\u5E76\u643A\u5E26\u4E86state\u53C2\u6570\u7528\u4E8E\u9A8C\u8BC1csrf cookie \uFF0C\u6388\u6743\u7801\u7528\u4E8E\u4EA4\u6362token</font>

\`\`\`plain
curl --url "http://foo.bar.com/oauth2/callback" \\
  --url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \\
  --url-query "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm"
\`\`\`

6. <font style="color:rgb(31, 35, 40);">\u6821\u9A8C csrf cookie \u4E2D\u52A0\u5BC6\u5B58\u50A8\u7684 state \u503C\u4E0E url \u53C2\u6570\u4E2D\u7684 state \u503C\u5FC5\u987B\u76F8\u540C</font>
7. <font style="color:rgb(31, 35, 40);">\u5229\u7528\u6388\u6743\u7801\uFF0C\u8BF7\u6C42\u8EAB\u4EFD\u63D0\u4F9B\u5546\uFF08IDP\uFF09\u4EA4\u6362id_token \u548C access_token\u3001refresh_token</font>

\`\`\`plain
curl -X POST \\
  --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \\
  --data "grant_type=authorization_code" \\
  --data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\
  --data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \\
  --data "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \\
  --data "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm" \\
\`\`\`

<font style="color:rgb(31, 35, 40);">\u8FD4\u56DE\u7684\u8BF7\u6C42\u91CC\u5305\u542B\u4E86 id_token, access_token\uFF0Crefresh_token \u7528\u4E8E\u540E\u7EED\u5237\u65B0 token</font>

\`\`\`plain
{
    "access_token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ",
    "refresh_token": "GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG",
    "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imc1Z1ExSF9ZbTY0WUlvVkQwSVpXTCJ9.eyJlbWFpbCI6IjE2MDExNTYyNjhAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL2Rldi1vNDN4YjFtejd5YTdhY2g0LnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJZYWdGcVJEOXRmTklhYWM1QmFtamhzU2F0anJBbnNuWiIsImlhdCI6MTcxOTE5ODYzOCwiZXhwIjoxNzE5MjM0NjM4LCJzdWIiOiJhdXRoMHw2NjVkNzFlNzRjMTMxMTc3YmU2NmU2MDciLCJzaWQiOiJjdDJVOF9ZUS16VDdFOGkwRTNNeUstejc5ZGlWUWhhVSJ9.gfzXKJ0FeqzYqOUDLQHWcUG19IOLqkpLN09xTmIat0umrlGV5VNSumgWH3XJmmwnhdb8AThH3Jf-7kbRJzu4rM-BbGbFTRBTzNHeUajFOFrIgld5VENQ_M_sXHkTp0psWKSr9vF24kmilCfSbvC5lBKjt878ljZ7-xteWuaUYOMUdcJb4DSv0-zjX01sonJxYamTlhji3M4TAW7VwhwqyZt8dBhVSNaRw1wUKj-M1JrBDLyx65sroZtSqVA0udIrqMHEbWYb2de7JjzlqG003HRMzwOm7OXgEd5ZVFqgmBLosgixOU5DJ4A26nlqK92Sp6VqDMRvA-3ym8W_m-wJ_A",
    "scope": "openid email offline_access",
    "expires_in": 86400,
    "token_type": "Bearer"
}
\`\`\`

8. <font style="color:rgb(31, 35, 40);">\u7F51\u5173\u5C06\u83B7\u5F97\u7684 id_token, access_token, refresh_token\u52A0\u5BC6\u5B58\u50A8\u5728cookie _oauth2_proxy\u4E2D</font>
9. <font style="color:rgb(31, 35, 40);">\u91CD\u5B9A\u5411\u5230\u7528\u6237\u8BBF\u95EE\u7684\u540E\u7AEF\u670D\u52A1\u5E76\u8BBE\u7F6E cookie\uFF0C\u7528\u4E8E\u540E\u7EED\u7528\u6237\u767B\u5F55\u72B6\u6001\u7684\u9A8C\u8BC1\uFF0C\u540C\u65F6\u6E05\u9664csrf\u9632\u62A4\u4E2D\u8BBE\u7F6E\u7684cookie _oauth2_proxy_csrf</font>

\`\`\`plain
"Set-Cookie": [
    "_oauth2_proxy_csrf=; Path=/; Expires=Mon, 24 Jun 2024 02:17:39 GMT; HttpOnly",
    "_oauth2_proxy=8zM_Pcfpp_gesKFe4SMg08o5Iv0A8WAOQOmG1-vZBbQ56UggYVC0Cu-gFMEoxJZU5q1O5vqRlVBizlLetgVjRCksGVbttwl8tQ7h5YiyIubbbtvF1T4JzLh3QfzUUrwbB-VznOkh8qLbjAhddocecjBt4rMiDyceKXqMr4eO5TUEMx4vHtJYnTYalMeTYhGXk5MNSyrdZX9NnQnkdrCjiOQM13ggwob2nYwhGWaAlgzFSWkgkdtBy2Cl_YMWZ8_gKk9rDX289-JrJyGpr5k9O9RzRhZoY2iE3Mcr8-Q37RTji1Ga22QO-XkAcSaGqY1Qo7jLdmgZTYKC5JvtdLc4rj3vcbveYxU7R3Pt2vEribQjKTh4Sqb0aA03p4cxXyZN4SUfBW1NAOm4JLPUhKJy8frqC9_E0nVqPvpvnacaoQs8WkX2zp75xHoMa3SD6KZhQ5JUiPEiNkOaUsyafLvht6lLkNDhgzW3BP2czoe0DCDBLnsot0jH-qQpMZYkaGr-ZnRKI1OPl1vHls3mao5juOAW1VB2A9aughgc8SJ55IFZpMfFMdHdTDdMqPODkItX2PK44GX-pHeLxkOqrzp3GHtMInpL5QIQlTuux3erm3CG-ntlUE7JBtN2T9LEb8XfIFu58X9_vzMun4JQlje2Thi9_taI_z1DSaTtvNNb54wJfSPwYCCl4OsH-BacVmPQhH6TTZ6gP2Qsm5TR2o1U2D9fuVkSM-OPCG9l3tILambIQwC3vofMW6X8SIFSmhJUDvN7NbwxowBiZ6Y7GJRZlAk_GKDkpsdrdIvC67QqczZFphRVnm6qi-gPO41APCbcO6fgTwyOhbP3RrZZKWSIqWJYhNE3_Sfkf0565H7sC7Hc8XUUjJvP3WnjKS9x7KwzWa-dsUjV3-Q-VNl-rXTguVNAIirYK-qrMNMZGCRcJqcLnUF0V_J2lVmFyVsSlE3t0sDw2xmbkOwDptXFOjQL5Rb4esUMYdCBWFajBfvUtcZEFtYhD0kb6VcbjXO3NCVW5qKh_l9C9SRCc7TG1vcRAqUQlRXHacTGWfcWsuQkCJ3Mp_oWaDxs1GRDykQYxAn5sTICovThWEU2C6o75grWaNrkj5NU-0eHh3ryvxLmGLBOXZV9OQhtKShWmUgywSWMxOHOuZAqdAPULc8KheuGFjXYp-RnCbFYWePJmwzfQw89kSkj1KUZgMYwKEjSz62z2qc9KLczomv76ortQzvo4Hv9kaW6xVuQj5R5Oq6_WMBOqsmUMzcXpxCIOGjcdcZRBc0Fm09Uy9oV1PRqvAE4PGtfyrCaoqILBix8UIww63B07YGwzQ-hAXDysBK-Vca2x7GmGdXsNXXcTgu00bdsjtHZPDBBWGfL3g_rMAXr2vWyvK4CwNjcaPAmrlF3geHPwbIePT0hskBboX1v1bsuhzsai7rGM4r53pnb1ZEoTQDa1B-HyokFgo14XiwME0zE1ifpNzefjpkz1YY2krJlqfCydNwoKaTit4tD2yHlnxAeFF9iIrxzSKErNUFpmyLa7ge7V33vhEH-6k5oBTLE2Q2BrC6aAkLCcPwU9xv_SzBDQPRY0MEYv3kGF03Swo1crRbGh-aifYX9NiHDsmG6r1vAnx0MAOw2Jzuz2x6SSdfBrzlcoWBlrwiZzd9kAKq75n1Uy9uzZ8SRnkBrEZySHBwEbu196VklkRE0jqwC-e3wWNNuviSOfwkVeX-7QdOoO10yw9VK2sW52lFvIEf4chv_ta7bGfAZOWBjpktG6ZLD81SE6A88zpqG2SysSyNMp9hl-umG-5sFsjCn_c9E8bDvwkUOUVb9bNqhBDsZgR0BNPawiOZjmyfhzmwmWf-zgFzfFSV6BvOwNRi3sCOHTsWcuk9NBQ_YK8CpNkVl3WeIBSDfidimuC_QV9UWKs1GPk35ZRkM4zKtLY2JsBFWKaDy_P80TcOzcMBoP8gIBClXZ-WUqfE8s1yyc4jrq-qL1_wJ24ef1O9FktsbyZiDKXw2vnqsT8-g_hCeG-unrT1ZFscf8oNdqczARHX-K4vKH2k3uIqEx1M=|1719199056|2rsgdUIClHNEpxBLlHOVRYup6e4oKensQfljtmn4B80=; Path=/; Expires=Mon, 01 Jul 2024 03:17:36 GMT; HttpOnly"
]
\`\`\`

10. <font style="color:rgb(31, 35, 40);">\u6821\u9A8C\u662F\u5426\u5B58\u5728\u6B64cookie\uFF0C\u5E76\u4E14cookie\u4E2D\u5B58\u50A8\u4E86\u7528\u6237\u7684 token\u4FE1\u606F\u540C\u65F6\u67E5\u770B\u662F\u5426\u8FC7\u671F</font>
11. <font style="color:rgb(31, 35, 40);">\u4F7F\u7528\u542B\u6709 Authorization \u5934\u90E8\u5B58\u50A8\u7528\u6237\u7684 access_token \u8BBF\u95EE\u76F8\u5E94\u7684 API</font>

\`\`\`plain
curl --url "foo.bar.com/headers"
  --header "Authorization: Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ"
\`\`\`

12. <font style="color:rgb(31, 35, 40);">\u540E\u7AEF\u670D\u52A1\u6839\u636E access_token \u83B7\u53D6\u7528\u6237\u6388\u6743\u4FE1\u606F\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684 HTTP \u54CD\u5E94</font>

\`\`\`plain
{
    "email": "******",
    "email_verified": false,
    "iss": "https://dev-o43xb1mz7ya7ach4.us.auth0.com/",
    "aud": "YagFqRD9tfNIaac5BamjhsSatjrAnsnZ",
    "iat": 1719198638,
    "exp": 1719234638,
    "sub": "auth0|665d71e74c131177be66e607",
    "sid": "ct2U8_YQ-zT7E8i0E3MyK-z79diVQhaU"
}
\`\`\`

##### <font style="color:rgb(31, 35, 40);">\u7528\u6237\u4EE4\u724C\u5237\u65B0</font>
[\u4E91\u539F\u751F API \u7F51\u5173- API \u5B89\u5168\u4E4B\u8BA4\u8BC1\u9274\u6743](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=MEqLG)

1. <font style="color:rgb(31, 35, 40);">\u8BBF\u95EE\u7528\u6237\u53D7\u4FDD\u62A4\u7684\u8D44\u6E90\uFF08\u9700\u8981\u8BA4\u8BC1\u6388\u6743\u8BBF\u95EE\u7684API\uFF09</font>

\`\`\`plain
curl --url "foo.bar.com/headers"
\`\`\`

2. <font style="color:rgb(31, 35, 40);">\u68C0\u67E5AccessToken \u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5982\u679C\u8FC7\u671F\u6216\u8005\u5373\u5C06\u8FC7\u671F\uFF0C\u8BF7\u6C42\u5237\u65B0\u4EE4\u724C</font>
3. <font style="color:rgb(31, 35, 40);">\u5982\u679C\u5728 cookie \u4E2D\u68C0\u6D4B\u5230\u5B58\u5728 refresh_token\uFF0C\u5219\u53EF\u4EE5\u8BBF\u95EE\u76F8\u5E94\u7684\u63A5\u53E3\u4EE5\u4EA4\u6362\u65B0\u7684 id_token\uFF0Caccess_token</font>

\`\`\`plain
curl -X POST \\
  --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \\
  --data "grant_type=refresh_token" \\
  --data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\
  --data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \\
  --data "refresh_token=GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG"
\`\`\`

4. <font style="color:rgb(31, 35, 40);">\u66F4\u65B0\u4F1A\u8BDD\uFF0C\u5E76\u5B58\u50A8\u65B0\u7684\u4EE4\u724C</font>
5. <font style="color:rgb(31, 35, 40);">\u643A\u5E26 Authorization\u6807\u5934\u5E76\u4F7F\u7528\u65B0\u7684access_token\u8BBF\u95EE\u5BF9\u5E94 API</font>
6. <font style="color:rgb(31, 35, 40);">\u540E\u7AEF\u670D\u52A1\u6839\u636E access_token \u83B7\u53D6\u7528\u6237\u6388\u6743\u4FE1\u606F\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684 HTTP \u54CD\u5E94</font>

## \u4E91\u539F\u751F\u7F51\u5173\u4E2D\u7684\u8BA4\u8BC1\u9274\u6743\u80FD\u529B
\u4E91\u539F\u751FAPI\u7F51\u5173\u652F\u6301\u4EE5\u4E0B\u4E09\u7C7B\u8BA4\u8BC1\u9274\u6743\u7684\u65B9\u5F0F\uFF0C\u7528\u6237\u53EF\u4EE5\u6309\u7167\u81EA\u5DF1\u7684\u4E1A\u52A1\u573A\u666F\u9009\u62E9\u9002\u5408\u7684\u8BA4\u8BC1\u7C7B\u578B\u548C\u65B9\u5F0F

| **<font style="color:rgb(24, 24, 24);">\u5BF9\u6BD4\u9879</font>** | **<font style="color:rgb(24, 24, 24);">\u6D88\u8D39\u8005\u8BA4\u8BC1\u9274\u6743</font>** | **<font style="color:rgb(24, 24, 24);">\u5168\u5C40\u8BA4\u8BC1\u9274\u6743</font>** | **<font style="color:rgb(24, 24, 24);">\u63D2\u4EF6\u8BA4\u8BC1\u9274\u6743</font>** |
| :--- | --- | --- | --- |
| **<font style="color:rgb(24, 24, 24);">\u652F\u6301\u7684\u8BA4\u8BC1\u65B9\u5F0F</font>** | API Key\u8BA4\u8BC1\u3001AKSK\u8BA4\u8BC1\u3001JWT\u8BA4\u8BC1 | JWT\u8BA4\u8BC1\u3001OIDC\u8BA4\u8BC1\u3001\u81EA\u5B9A\u4E49\u8BA4\u8BC1 | Baisc\u8BA4\u8BC1\u3001Key\u8BA4\u8BC1\u3001JWT\u8BA4\u8BC1\u3001HMAC\u8BA4\u8BC1\u3001\u81EA\u5B9A\u4E49\u5916\u90E8\u8BA4\u8BC1 |
| **<font style="color:rgb(24, 24, 24);">\u9274\u6743\u65B9\u5F0F</font>** | \u9274\u6743\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u81EA\u884C\u914D\u7F6E\u5230\u4EE5\u4E0B\u7C92\u5EA6\u7684\u6388\u6743\uFF0C\u7F51\u5173\u6309\u914D\u7F6E\u7684\u6388\u6743\u7C92\u5EA6\u4E25\u683C\u9274\u6743<br/>1\u3001REST <font style="color:rgb(24, 24, 24);">API</font><br/>2\u3001REST <font style="color:rgb(24, 24, 24);">API</font> \u63A5\u53E3<br/>3\u3001HTTP API/WebSocket API \u8DEF\u7531 | \u9274\u6743\u65B9\u5F0F\uFF1A\u9ED8\u8BA4\u7F51\u5173\u7EA7\u522B\uFF0C\u4E0D\u53EF\u4EE5\u8C03\u6574\uFF0C\u901A\u8FC7\u8BA4\u8BC1\u5373\u901A\u8FC7\u9274\u6743<br/>\u9ED1\u767D\u540D\u5355\uFF1A<br/>1\u3001\u652F\u6301\u8BA4\u8BC1\u914D\u7F6E\u9ED1\u767D\u540D\u5355<br/>2\u3001\u9ED1\u767D\u540D\u5355\u652F\u6301\u914D\u7F6E\u5230\u8DEF\u7531\u3001\u57DF\u540D<br/>**<font style="color:rgb(24, 24, 24);">\u9ED1\u540D\u5355\u6A21\u5F0F</font>**<font style="color:rgb(24, 24, 24);">\uFF1A\u914D\u7F6E\u7684</font>**<font style="color:rgb(24, 24, 24);">\u57DF\u540D</font>**<font style="color:rgb(24, 24, 24);">\u548C</font>**<font style="color:rgb(24, 24, 24);">\u8DEF\u7531</font>**<font style="color:rgb(24, 24, 24);">\u9700\u8981\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u5176\u4F59\u65E0\u9700\u8BA4\u8BC1\u53EF\u76F4\u63A5\u8BBF\u95EE\u3002</font><br/>**<font style="color:rgb(24, 24, 24);">\u767D\u540D\u5355\u6A21\u5F0F</font>**<font style="color:rgb(24, 24, 24);">\uFF1A\u914D\u7F6E\u7684</font>**<font style="color:rgb(24, 24, 24);">\u57DF\u540D</font>**<font style="color:rgb(24, 24, 24);">\u548C</font>**<font style="color:rgb(24, 24, 24);">\u8DEF\u7531</font>**<font style="color:rgb(24, 24, 24);">\u4E0D\u9700\u8981\u8BA4\u8BC1\u5373\u53EF\u8BBF\u95EE\uFF0C\u5176\u4F59\u9700\u8981\u8FDB\u884C\u8BA4\u8BC1\u3002</font><br/><font style="color:rgb(24, 24, 24);">\u81EA\u5EFA\u9274\u6743\u670D\u52A1\uFF1A</font><br/><font style="color:rgb(24, 24, 24);">\u5BA2\u6237\u81EA\u5B9A\u4E49\u5B8C\u6210\u8BA4\u8BC1\u9274\u6743</font> | \u9274\u6743\u65B9\u5F0F\uFF1A\u53EF\u4EE5\u81EA\u884C\u914D\u7F6E\u5230\u4EE5\u4E0B\u7C92\u5EA6\u7684\u6388\u6743\uFF0C\u7F51\u5173\u6309\u914D\u7F6E\u7684\u6388\u6743\u7C92\u5EA6\u4E25\u683C\u9274\u6743<br/>1\u3001\u7F51\u5173\u5B9E\u4F8B<br/>2\u3001\u90E8\u7F72\u5230\u7F51\u5173\u7684\u57DF\u540D<br/>3\u3001REST <font style="color:rgb(24, 24, 24);">API</font><br/>4\u3001REST <font style="color:rgb(24, 24, 24);">API\u63A5\u53E3</font><br/>5\u3001HTTP API/WebSocket API \u8DEF\u7531 |
| **<font style="color:rgb(24, 24, 24);">\u64CD\u4F5C\u8DEF\u5F84</font>** | **\u5F00\u542F\u8BA4\u8BC1\uFF1A**<br/><font style="color:rgb(24, 24, 24);">1\u3001API\u5217\u8868 ->HTTP API\u6216\u8005/WebScoket API ->\u8DEF\u7531\u7BA1\u7406->\u7B56\u7565\u914D\u7F6E->\u6DFB\u52A0\u5E76\u5F00\u542F\u6D88\u8D39\u8005\u8BA4\u8BC1\u7B56\u7565\u3002</font><br/><font style="color:rgb(24, 24, 24);">2\u3001API\u7BA1\u7406 > REST-API </font><br/>**\u5F00\u542F\u9274\u6743\uFF1A**<br/><font style="color:rgb(24, 24, 24);">1\u3001\u6D88\u8D39\u8005-> \u6D88\u8D39\u8005\u8BE6\u60C5 -> \u6D88\u8D39\u8005\u9274\u6743-> \u6DFB\u52A0\u6388\u6743</font><br/><font style="color:rgb(24, 24, 24);">2\u3001\u63A5\u53E3\u8BE6\u60C5 -> \u6D88\u8D39\u8005\u8BA4\u8BC1->\u6388\u6743\u7ED9\u6D88\u8D39\u8005</font> | **\u5F00\u542F\u8BA4\u8BC1\u9274\u6743\uFF1A**<br/><font style="color:rgb(24, 24, 24);">\u5B9E\u4F8B > \u5B89\u5168\u7BA1\u7406 > \u5168\u5C40\u8BA4\u8BC1\u9274\u6743</font> | **\u5F00\u542F\u8BA4\u8BC1\u9274\u6743\uFF1A**<br/>1\u3001\u63D2\u4EF6->\u5B89\u88C5\u63D2\u4EF6\u5230\u7F51\u5173->\u63D2\u4EF6\u914D\u7F6E<br/>\u5B9E\u4F8B->\u5DF2\u5B89\u88C5\u63D2\u4EF6->\u63D2\u4EF6\u914D\u7F6E<br/>2\u3001\u914D\u7F6E\u4E0D\u540C\u7C92\u5EA6\u7684\u5728\u63D2\u4EF6\u89C4\u5219\uFF0C\u5E76\u914D\u7F6E\u6388\u6743\u5173\u7CFB<br/>3\u3001\u542F\u7528\u9700\u8981\u7684\u63D2\u4EF6\u89C4\u5219 |
| **\u4F18\u7F3A\u70B9** | **\u4F18\u70B9\uFF1A**<br/>1\u3001\u652F\u6301\u5E38\u89C1\u7684API Key\u8BA4\u8BC1\u3001AK/SK\u8BA4\u8BC1\u3001JWT\u8BA4\u8BC1\u5E76\u968F\u7740\u4EA7\u54C1\u8FED\u4EE3\u4E0D\u65AD\u6269\u5C55\uFF08\u957F\u671F\u53D1\u5C55\u7684\u65B9\u5411\uFF09<br/>2\u3001\u767D\u5C4F\u7BA1\u7406\u80FD\u529B\uFF0C\u5305\u62EC\u51ED\u8BC1\u7BA1\u7406\uFF08\u91CD\u7F6E\u3001\u6C70\u6362\u3001\u5220\u9664\uFF09\uFF0C\u6743\u9650\u7BA1\u7406<br/>3\u3001\u7075\u6D3B\u7684\u6388\u6743\u7C92\u5EA6\u548C\u6388\u6743\u65B9\u5F0F<br/>4\u3001\u7F51\u5173\u5B9E\u73B0\u8BA4\u8BC1\u9274\u6743\uFF0C\u5BA2\u6237\u4E0D\u9700\u8981\u81EA\u5EFA\u8BA4\u8BC1\u9274\u6743\u670D\u52A1<br/> | **\u4F18\u70B9\uFF1A**<br/>1\u3001\u914D\u7F6E\u7B80\u5355\uFF0C\u8BA4\u8BC1\u6388\u6743\u5168\u5C40\u7EDF\u4E00\u63A7\u5236\uFF0C\u4E0D\u9700\u8981\u6309\u670D\u52A1\u5B9E\u73B0\u591A\u6B21<br/>2\u3001\u652F\u6301\u8DEF\u7531\u548C\u57DF\u540D\u7EA7\u522B\u7684\u9ED1\u767D\u540D\u5355\u914D\u7F6E\uFF0C\u7528\u6237\u53EF\u4EE5\u6309\u57DF\u540D\u548C\u8DEF\u7531\u653E\u8FC7\u548C\u62E6\u622A\u8BF7\u6C42<br/>**\u7F3A\u70B9\uFF1A**<br/>1\u3001\u9700\u8981\u5BA2\u6237\u81EA\u5EFA\u8BA4\u8BC1\u6388\u6743\u670D\u52A1<br/>2\u3001\u4E0D\u652F\u6301\u7EC6\u7C92\u5EA6\u7684\u6388\u6743\u89C4\u5219 | **\u4F18\u70B9\uFF1A**<br/>1\u3001\u5171\u4EABHigress\u793E\u533A\u63D2\u4EF6\u751F\u6001\uFF0C\u652F\u6301\u591A\u6837\u6027\u7684\u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\uFF0C\u5E76\u6709\u8BA1\u5212\u6027\u5C06\u793E\u533A\u7684\u4F18\u5148\u63D2\u4EF6\u7EB3\u5165\u5230\u4E91\u539F\u751FAPI\u7F51\u5173<br/>**\u7F3A\u70B9\uFF1A**<br/>1\u3001\u6587\u672C\u7F16\u8F91\u63D2\u4EF6\u89C4\u5219\u7684\u65B9\u5F0F\u5BB9\u6613\u51FA\u9519\u800C\u5F71\u54CD\u7EBF\u4E0A\u6D41\u91CF<br/>2\u3001\u63D2\u4EF6\u7684\u79CD\u7C7B\u591A\u800C\u4E14\u4EA4\u4E92\u590D\u6742\uFF0C\u7BA1\u7406\u6210\u672C\u9AD8 |


## <font style="color:rgb(0, 0, 0);">\u4E91\u539F\u751FAPI\u7F51\u5173\u7684\u5176\u4ED6\u5B89\u5168\u80FD\u529B</font>
<font style="color:rgb(51, 51, 51);">\u4FDD\u62A4API\u5B89\u5168\uFF0C\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u4F5C\u4E3A\u63A5\u5165\u5C42\u91CD\u8981\u7684\u80FD\u529B\uFF0C\u8BA4\u8BC1\u9274\u6743\u53EA\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u8BF8\u591A\u5B89\u5168\u80FD\u529B\u4E2D\u7684\u4E00\u90E8\u5206\uFF1B\u4E91\u539F\u751F\u7F51\u5173\u8FD8\u63D0\u4F9B\u4E0B\u8868\u4E2D\u7684\u591A\u79CD\u5B89\u5168\u80FD\u529B\uFF0C\u4EE5\u4FBF\u7528\u6237\u8FDB\u4E00\u6B65\u7EF4\u62A4\u4F01\u4E1AAPI\u8D44\u4EA7\u7684\u5B89\u5168</font>

| \u6A21\u5757 | \u80FD\u529B |
| --- | --- |
| \u73AF\u5883 | 1\u3001\u652F\u6301\u57FA\u4E8E\u73AF\u5883\u7684\u9694\u79BB\u8BBF\u95EE\uFF0C\u5E76\u5339\u914D\u76F8\u5E94\u7684\u73AF\u5883\u57DF\u540D |
| \u57DF\u540D | 1\u3001\u652F\u6301HTTPS \u57DF\u540D\u4F7F\u7528\u6307\u5B9A\u52A0\u5BC6\u5957\u4EF6 |
| \u7B56\u7565 | 1\u3001<font style="color:rgb(51, 51, 51);">\u652F\u6301API\u7EA7\u522B\u3001\u63A5\u53E3\u7EA7\u522B\u3001\u8DEF\u7531\u7EA7\u522B\u7684\u6309QPS\u9650\u6D41\u3001\u6309\u5E76\u53D1\u6570\u9650\u6D41\u3001\u4EE5\u53CA\u7194\u65AD\u7B56\u7565</font><br/><font style="color:rgb(51, 51, 51);">2\u3001\u652F\u6301\u7F51\u5173\u7EA7\u522B\u3001\u57DF\u540D\u7EA7\u522B\u3001API\u7EA7\u522B\u3001\u63A5\u53E3\u7EA7\u522B\u3001\u8DEF\u7531\u7EA7\u522B\u7684IP\u9ED1\u767D\u540D\u5355 \u8BBF\u95EE\u63A7\u5236\uFF1B</font><br/>3\u3001<font style="color:rgb(51, 51, 51);">\u652F\u6301API\u7EA7\u522B\u3001\u63A5\u53E3\u7EA7\u522B\u3001\u8DEF\u7531\u7EA7\u522B\u7684\u8DE8\u57DF\u8BBF\u95EE\u63A7\u5236 CORS\uFF1B</font><br/>4\u3001\u652F\u6301\u8DEF\u7531\u7EA7\u522B\u3001\u7F51\u5173\u7EA7\u522B\u7684 \u4E14\u4E0EAliyun Web \u5E94\u7528\u9632\u706B\u5899\u6DF1\u5EA6\u96C6\u6210\u7684<font style="color:rgb(51, 51, 51);"> WAF\u9632\u63A7</font> |
| \u63D2\u4EF6 | 1\u3001\u652F\u6301\u4E30\u5BCC\u7684\u8BA4\u8BC1\u9274\u6743\u63D2\u4EF6\u80FD\u529B<br/>2\u3001\u652F\u6301\u8BF7\u6C42\u5C4F\u853D\u63D2\u4EF6\uFF0C\u53EF\u4EE5<font style="color:rgb(51, 51, 51);">\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732</font><br/>3\u3001\u652F\u6301\u673A\u5668\u4EBA\u62E6\u622A\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BC6\u522B\u5E76\u963B\u6B62\u4E92\u8054\u7F51\u722C\u866B\u5BF9\u7AD9\u70B9\u8D44\u6E90\u7684\u722C\u53D6<br/>4\u3001\u652F\u6301WAF \u9632\u62A4\u63D2\u4EF6<br/>5\u3001\u652F\u6301\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u63D2\u4EF6<br/>6\u3001\u652F\u6301IP\u9650\u5236\u63D2\u4EF6 |
| \u670D\u52A1 | 1\u3001\u652F\u6301\u670D\u52A1\u7EA7\u522B\u7684TLS\uFF0CMTLS |





`},i=function(){return e},c=function(){return[{depth:2,slug:"\u524D\u8A00",text:"\u524D\u8A00"},{depth:2,slug:"\u4EC0\u4E48\u662F\u8BA4\u8BC1\u9274\u6743",text:"\u4EC0\u4E48\u662F\u8BA4\u8BC1\u9274\u6743"},{depth:2,slug:"\u8BA4\u8BC1authentication",text:"\u8BA4\u8BC1\uFF08Authentication\uFF09"},{depth:3,slug:"key-\u8BA4\u8BC1",text:"Key \u8BA4\u8BC1"},{depth:4,slug:"\u4F18\u70B9",text:"\u4F18\u70B9\uFF1A"},{depth:4,slug:"\u7F3A\u70B9",text:"\u7F3A\u70B9\uFF1A"},{depth:4,slug:"api-key\u8BA4\u8BC1\u7684\u57FA\u672C\u6D41\u7A0B",text:"Api Key\u8BA4\u8BC1\u7684\u57FA\u672C\u6D41\u7A0B"},{depth:3,slug:"jwt-\u8BA4\u8BC1",text:"JWT \u8BA4\u8BC1"},{depth:4,slug:"\u4EC0\u4E48\u662Fjwt",text:"\u4EC0\u4E48\u662FJWT"},{depth:4,slug:"\u4EC0\u4E48\u662Fjwks",text:"\u4EC0\u4E48\u662FJWKS"},{depth:4,slug:"jwt-\u8BA4\u8BC1\u662F\u4E91\u539F\u751Fapi\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5982\u4E0B",text:"JWT \u8BA4\u8BC1\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\uFF0C\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5982\u4E0B\uFF1A"},{depth:4,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879\uFF1A"},{depth:3,slug:"aksk-\u8BA4\u8BC1",text:"AK/SK \u8BA4\u8BC1"},{depth:4,slug:"akskhmac\u8BA4\u8BC1\u662F\u4E91\u539F\u751Fapi\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5305\u62EC\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u548C\u670D\u52A1\u7AEF\u9A8C\u8BC1\u524D\u9762\u4E24\u4E2A\u6B65\u9AA4",text:"AK/SK\uFF08HMAC\uFF09\u8BA4\u8BC1\u662F\u4E91\u539F\u751FAPI\u7F51\u5173\u6D88\u8D39\u8005\u8BA4\u8BC1\u80FD\u529B\u4E2D\u7684\u4E00\u79CD\uFF0C\u5176\u8BA4\u8BC1\u6D41\u7A0B\u5305\u62EC\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u548C\u670D\u52A1\u7AEF\u9A8C\u8BC1\u524D\u9762\u4E24\u4E2A\u6B65\u9AA4"},{depth:5,slug:"\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u6D41\u7A0B",text:"\u5BA2\u6237\u7AEF\u751F\u6210\u7B7E\u540D\u6D41\u7A0B\uFF1A"},{depth:5,slug:"\u7F51\u5173\u9A8C\u8BC1\u7B7E\u540D\u6D41\u7A0B\u56FE",text:"\u7F51\u5173\u9A8C\u8BC1\u7B7E\u540D\u6D41\u7A0B\u56FE\uFF1A"},{depth:3,slug:"oauth2\u8BA4\u8BC1",text:"OAuth2\u8BA4\u8BC1"},{depth:4,slug:"\u4EC0\u4E48\u662Foauth-20",text:"\u4EC0\u4E48\u662FOAuth 2.0"},{depth:4,slug:"oauth-20\u534F\u8BAE\u7684\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4",text:"OAuth 2.0\u534F\u8BAE\u7684\u6D41\u7A0B\u4E3B\u8981\u5305\u542B\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A"},{depth:4,slug:"\u62BD\u8C61\u6D41\u7A0B\u56FE",text:"\u62BD\u8C61\u6D41\u7A0B\u56FE"},{depth:4,slug:"oauth-20\u534F\u8BAE\u5B9A\u4E49\u4E864\u79CD\u6388\u6743\u6A21\u5F0F",text:"OAuth 2.0\u534F\u8BAE\u5B9A\u4E49\u4E864\u79CD\u6388\u6743\u6A21\u5F0F\uFF1A"},{depth:5,slug:"\u6388\u6743\u7801\u6A21\u5F0F",text:"\u6388\u6743\u7801\u6A21\u5F0F\uFF1A"},{depth:5,slug:"\u6388\u6743\u7801\u6388\u6743\u6D41\u7A0B\u56FE",text:"\u6388\u6743\u7801\u6388\u6743\u6D41\u7A0B\u56FE\uFF1A"},{depth:5,slug:"\u5BA2\u6237\u7AEF\u6A21\u5F0F",text:"\u5BA2\u6237\u7AEF\u6A21\u5F0F\uFF1A"},{depth:3,slug:"oidc-\u8BA4\u8BC1",text:"OIDC \u8BA4\u8BC1"},{depth:4,slug:"\u4E3A\u4EC0\u4E48\u8981\u6709oidc",text:"\u4E3A\u4EC0\u4E48\u8981\u6709OIDC"},{depth:4,slug:"oidc-\u57FA\u4E8Eoauth-20\u534F\u8BAE\u5B9E\u73B0\u7684\u89D2\u8272\u53CA\u5173\u952E\u8D44\u6E90\u5B9A\u4E49",text:"OIDC \u57FA\u4E8EOAuth 2.0\u534F\u8BAE\u5B9E\u73B0\u7684\u89D2\u8272\u53CA\u5173\u952E\u8D44\u6E90\u5B9A\u4E49"},{depth:4,slug:"oidc-\u8BA4\u8BC1-1",text:"OIDC \u8BA4\u8BC1"},{depth:5,slug:"oidc-\u8BA4\u8BC1\u8BE6\u7EC6\u6D41\u7A0B",text:"OIDC \u8BA4\u8BC1\u8BE6\u7EC6\u6D41\u7A0B"},{depth:5,slug:"\u7528\u6237\u4EE4\u724C\u5237\u65B0",text:"\u7528\u6237\u4EE4\u724C\u5237\u65B0"},{depth:2,slug:"\u4E91\u539F\u751F\u7F51\u5173\u4E2D\u7684\u8BA4\u8BC1\u9274\u6743\u80FD\u529B",text:"\u4E91\u539F\u751F\u7F51\u5173\u4E2D\u7684\u8BA4\u8BC1\u9274\u6743\u80FD\u529B"},{depth:2,slug:"\u4E91\u539F\u751Fapi\u7F51\u5173\u7684\u5176\u4ED6\u5B89\u5168\u80FD\u529B",text:"\u4E91\u539F\u751FAPI\u7F51\u5173\u7684\u5176\u4ED6\u5B89\u5168\u80FD\u529B"}]},s=d((u,x,h)=>{const{layout:A,...n}=a;return n.file=t,n.url=o,p`${f()}${v(e)}`})});export{s as Content,b as __tla,i as compiledContent,s as default,t as file,a as frontmatter,c as getHeadings,l as rawContent,o as url};
