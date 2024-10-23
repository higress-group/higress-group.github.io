import{c as r,__tla as n}from"./astro-component.BNo6A4i3.js";import{r as p,m as u,u as f,__tla as h}from"./constant.DJKTwoWF.js";import{__tla as _}from"./astro/assets-service.lesyujvn.js";let o,d,a,s,t,c,l,v=Promise.all([(()=>{try{return n}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>cors \u600E\u4E48\u914D\u7F6E\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF1F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u914D\u7F6E Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF1A</p>
<ol>
<li>
<p><strong>\u786E\u5B9A\u9700\u6C42</strong>\uFF1A\u4F60\u5E0C\u671B\u670D\u52A1\u5668\u63A5\u53D7\u6765\u81EA\u4EFB\u4F55\u6E90\u7684\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u5E76\u4E14\u4E0D\u643A\u5E26\u51ED\u636E\uFF08\u5982Cookie\uFF09\u3002\u6839\u636E\u8FD9\u4E00\u9700\u6C42\uFF0C\u6211\u4EEC\u5E94\u8BE5\u914D\u7F6E<code dir="auto">allow_origins</code>\u4E3A<code dir="auto">"*"</code>\uFF0C\u8868\u793A\u63A5\u53D7\u6240\u6709\u6765\u6E90\uFF0C\u540C\u65F6\u5C06<code dir="auto">allow_credentials</code>\u8BBE\u7F6E\u4E3A<code dir="auto">false</code>\uFF0C\u56E0\u4E3A\u643A\u5E26\u51ED\u636E\u65F6\u4E0D\u80FD\u5C06<code dir="auto">allow_origins</code>\u8BBE\u4E3A\u901A\u914D\u7B26\u3002</p>
</li>
<li>
<p><strong>\u7F16\u5199\u914D\u7F6E</strong>\uFF1A\u57FA\u4E8E\u4E0A\u8FF0\u9700\u6C42\uFF0C\u914D\u7F6E\u5E94\u5305\u542B\u4EE5\u4E0B\u5173\u952E\u5B57\u6BB5\uFF1A</p>
</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">allow_origins:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- '*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">allow_methods:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- '*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">allow_headers:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- '*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">expose_headers:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- '*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">allow_credentials: false</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">max_age: 7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origins:\x7F- &#x27;*&#x27;\x7F\x7Fallow_methods:\x7F- &#x27;*&#x27;\x7F\x7Fallow_headers:\x7F- &#x27;*&#x27;\x7F\x7Fexpose_headers:\x7F- &#x27;*&#x27;\x7F\x7Fallow_credentials: false\x7F\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<ul>
<li><code dir="auto">allow_origins</code>: \u8BBE\u7F6E\u4E3A<code dir="auto">"*"</code>\uFF0C\u5141\u8BB8\u6765\u81EA\u4EFB\u4F55\u6E90\u7684\u8BF7\u6C42\u3002</li>
<li><code dir="auto">allow_methods</code>: \u8BBE\u4E3A<code dir="auto">"*"</code>\uFF0C\u5141\u8BB8\u6240\u6709HTTP\u65B9\u6CD5\u3002</li>
<li><code dir="auto">allow_headers</code>: \u540C\u6837\u8BBE\u4E3A<code dir="auto">"*"</code>\uFF0C\u5141\u8BB8\u643A\u5E26\u4EFB\u4F55\u5934\u90E8\u4FE1\u606F\u3002</li>
<li><code dir="auto">expose_headers</code>: \u5982\u679C\u65E0\u9700\u7279\u522B\u6307\u5B9A\u54CD\u5E94\u5934\uFF0C\u4E5F\u53EF\u8BBE\u4E3A<code dir="auto">"*"</code>\uFF0C\u5141\u8BB8\u66B4\u9732\u6240\u6709\u5934\u90E8\u7ED9\u5BA2\u6237\u7AEF\u3002</li>
<li><code dir="auto">allow_credentials</code>: \u8BBE\u4E3A<code dir="auto">false</code>\uFF0C\u56E0\u4E3A\u5F53\u5141\u8BB8\u6240\u6709\u6E90\u65F6\uFF0C\u6839\u636ECORS\u89C4\u8303\u4E0D\u5141\u8BB8\u643A\u5E26\u51ED\u636E\u3002</li>
<li><code dir="auto">max_age</code>: \u8BBE\u7F6E\u4E3A7200\u79D2\uFF0C\u5373\u4E24\u5C0F\u65F6\uFF0C\u8FD9\u662F\u6D4F\u89C8\u5668\u7F13\u5B58\u9884\u68C0\u8BF7\u6C42\u7ED3\u679C\u7684\u65F6\u95F4\u3002</li>
</ul>
<ol start="3">
<li>
<p><strong>\u89E3\u91CA\u914D\u7F6E</strong>\uFF1A</p>
<ul>
<li>\u901A\u8FC7\u5C06<code dir="auto">allow_origins</code>\u8BBE\u7F6E\u4E3A\u661F\u53F7<code dir="auto">"*"</code>\uFF0C\u8868\u660E\u670D\u52A1\u5668\u613F\u610F\u63A5\u53D7\u4EFB\u4F55\u6E90\u53D1\u8D77\u7684\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u8FD9\u9002\u7528\u4E8E\u90A3\u4E9B\u4E0D\u9700\u8981\u4E25\u683C\u63A7\u5236\u6765\u6E90\u7684\u573A\u666F\u3002</li>
<li><code dir="auto">allow_methods</code>\u548C<code dir="auto">allow_headers</code>\u4F7F\u7528\u901A\u914D\u7B26<code dir="auto">"*"</code>\u786E\u4FDD\u4E86\u6240\u6709HTTP\u65B9\u6CD5\u548C\u81EA\u5B9A\u4E49\u5934\u90E8\u90FD\u80FD\u88AB\u8DE8\u57DF\u8BF7\u6C42\u4F7F\u7528\u3002</li>
<li><code dir="auto">expose_headers</code>\u8BBE\u7F6E\u4E3A<code dir="auto">"*"</code>\u610F\u5473\u7740\u670D\u52A1\u5668\u7AEF\u54CD\u5E94\u4E2D\u6240\u6709\u5934\u90E8\u90FD\u5C06\u66B4\u9732\u7ED9JavaScript\u7684<code dir="auto">XMLHttpRequest</code>\u6216<code dir="auto">fetch</code>API\uFF0C\u5C3D\u7BA1\u901A\u5E38\u53EA\u6709\u4E00\u4E9B\u7279\u5B9A\u7684\u5934\u90E8\uFF08\u5982<code dir="auto">Cache-Control</code>\uFF09\u9700\u8981\u88AB\u524D\u7AEF\u8BBF\u95EE\u3002</li>
<li><code dir="auto">allow_credentials</code>\u8BBE\u4E3A<code dir="auto">false</code>\u662F\u56E0\u4E3A\u5F53\u5141\u8BB8\u4EFB\u610F\u6E90\u65F6\uFF0C\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0CCORS\u6807\u51C6\u7981\u6B62\u643A\u5E26\u51ED\u636E\u3002\u5982\u679C\u786E\u5B9E\u9700\u8981\u643A\u5E26\u51ED\u636E\uFF08\u4F8B\u5982\u8BA4\u8BC1\u4FE1\u606F\uFF09\uFF0C\u5219\u9700\u660E\u786E\u6307\u5B9A\u5141\u8BB8\u7684\u6E90\u800C\u4E0D\u80FD\u4F7F\u7528\u901A\u914D\u7B26\u3002</li>
<li><code dir="auto">max_age</code>\u8F83\u5927\u503C\u51CF\u5C11\u4E86\u56E0\u6D4F\u89C8\u5668\u9891\u7E41\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\u800C\u5BFC\u81F4\u7684\u6027\u80FD\u5F00\u9500\uFF0C\u63D0\u9AD8\u4E86\u7528\u6237\u4F53\u9A8C\u3002</li>
</ul>
</li>
</ol>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u4EE5\u4E0A\u914D\u7F6E\u5373\u53EF\u6EE1\u8DB3\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\u7684\u9700\u6C42\uFF0C\u4F46\u8BF7\u6CE8\u610F\u8FD9\u6837\u505A\u53EF\u80FD\u4F1A\u589E\u52A0\u5B89\u5168\u98CE\u9669\uFF0C\u7279\u522B\u662F\u5728\u9700\u8981\u4FDD\u62A4\u8D44\u6E90\u6216\u5904\u7406\u654F\u611F\u6570\u636E\u7684\u573A\u666F\u4E0B\u3002\u52A1\u5FC5\u6839\u636E\u5B9E\u9645\u5E94\u7528\u573A\u666F\u6743\u8861\u5229\u5F0A\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress CORS \u914D\u7F6E</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17132" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,s={id:"question-history-16391",title:"cors \u600E\u4E48\u914D\u7F6E\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF1F",date:"2024-09-26",category:"expertConsultation",description:"\u8981\u914D\u7F6E Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF1A1. **\u786E\u5B9A\u9700\u6C42**\uFF1A\u4F60\u5E0C\u671B\u670D\u52A1\u5668\u63A5\u53D7\u6765\u81EA\u4EFB\u4F55\u6E90\u7684\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u5E76\u4E14\u4E0D\u643A\u5E26\u51ED\u636E\uFF08\u5982Cookie\uFF09\u3002\u6839\u636E\u8FD9\u4E00\u9700\u6C42\uFF0C\u6211\u4EEC\u5E94\u8BE5\u914D\u7F6E`allow_origins`\u4E3A`*`\uFF0C\u8868\u793A\u63A5\u53D7\u6240\u6709\u6765\u6E90\uFF0C\u540C\u65F6\u5C06`allow_credentials`\u8BBE\u7F6E\u4E3A",tags:["Higress","CORS","\u914D\u7F6E","\u5141\u8BB8","\u8DE8\u57DF","\u8BF7\u6C42","\u65B9\u6CD5"],keywords:["Higress","CORS","\u914D\u7F6E","\u5141\u8BB8","\u8DE8\u57DF","\u8BF7\u6C42","\u65B9\u6CD5"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16391.md",l=void 0,c=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 cors \u600E\u4E48\u914D\u7F6E\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u914D\u7F6E Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF1A

1. **\u786E\u5B9A\u9700\u6C42**\uFF1A\u4F60\u5E0C\u671B\u670D\u52A1\u5668\u63A5\u53D7\u6765\u81EA\u4EFB\u4F55\u6E90\u7684\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u5E76\u4E14\u4E0D\u643A\u5E26\u51ED\u636E\uFF08\u5982Cookie\uFF09\u3002\u6839\u636E\u8FD9\u4E00\u9700\u6C42\uFF0C\u6211\u4EEC\u5E94\u8BE5\u914D\u7F6E\`allow_origins\`\u4E3A\`"*"\`\uFF0C\u8868\u793A\u63A5\u53D7\u6240\u6709\u6765\u6E90\uFF0C\u540C\u65F6\u5C06\`allow_credentials\`\u8BBE\u7F6E\u4E3A\`false\`\uFF0C\u56E0\u4E3A\u643A\u5E26\u51ED\u636E\u65F6\u4E0D\u80FD\u5C06\`allow_origins\`\u8BBE\u4E3A\u901A\u914D\u7B26\u3002

2. **\u7F16\u5199\u914D\u7F6E**\uFF1A\u57FA\u4E8E\u4E0A\u8FF0\u9700\u6C42\uFF0C\u914D\u7F6E\u5E94\u5305\u542B\u4EE5\u4E0B\u5173\u952E\u5B57\u6BB5\uFF1A

\`\`\`plaintext
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

- \`allow_origins\`: \u8BBE\u7F6E\u4E3A\`"*"\`\uFF0C\u5141\u8BB8\u6765\u81EA\u4EFB\u4F55\u6E90\u7684\u8BF7\u6C42\u3002
- \`allow_methods\`: \u8BBE\u4E3A\`"*"\`\uFF0C\u5141\u8BB8\u6240\u6709HTTP\u65B9\u6CD5\u3002
- \`allow_headers\`: \u540C\u6837\u8BBE\u4E3A\`"*"\`\uFF0C\u5141\u8BB8\u643A\u5E26\u4EFB\u4F55\u5934\u90E8\u4FE1\u606F\u3002
- \`expose_headers\`: \u5982\u679C\u65E0\u9700\u7279\u522B\u6307\u5B9A\u54CD\u5E94\u5934\uFF0C\u4E5F\u53EF\u8BBE\u4E3A\`"*"\`\uFF0C\u5141\u8BB8\u66B4\u9732\u6240\u6709\u5934\u90E8\u7ED9\u5BA2\u6237\u7AEF\u3002
- \`allow_credentials\`: \u8BBE\u4E3A\`false\`\uFF0C\u56E0\u4E3A\u5F53\u5141\u8BB8\u6240\u6709\u6E90\u65F6\uFF0C\u6839\u636ECORS\u89C4\u8303\u4E0D\u5141\u8BB8\u643A\u5E26\u51ED\u636E\u3002
- \`max_age\`: \u8BBE\u7F6E\u4E3A7200\u79D2\uFF0C\u5373\u4E24\u5C0F\u65F6\uFF0C\u8FD9\u662F\u6D4F\u89C8\u5668\u7F13\u5B58\u9884\u68C0\u8BF7\u6C42\u7ED3\u679C\u7684\u65F6\u95F4\u3002

3. **\u89E3\u91CA\u914D\u7F6E**\uFF1A

   - \u901A\u8FC7\u5C06\`allow_origins\`\u8BBE\u7F6E\u4E3A\u661F\u53F7\`"*"\`\uFF0C\u8868\u660E\u670D\u52A1\u5668\u613F\u610F\u63A5\u53D7\u4EFB\u4F55\u6E90\u53D1\u8D77\u7684\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u8FD9\u9002\u7528\u4E8E\u90A3\u4E9B\u4E0D\u9700\u8981\u4E25\u683C\u63A7\u5236\u6765\u6E90\u7684\u573A\u666F\u3002
   - \`allow_methods\`\u548C\`allow_headers\`\u4F7F\u7528\u901A\u914D\u7B26\`"*"\`\u786E\u4FDD\u4E86\u6240\u6709HTTP\u65B9\u6CD5\u548C\u81EA\u5B9A\u4E49\u5934\u90E8\u90FD\u80FD\u88AB\u8DE8\u57DF\u8BF7\u6C42\u4F7F\u7528\u3002
   - \`expose_headers\`\u8BBE\u7F6E\u4E3A\`"*"\`\u610F\u5473\u7740\u670D\u52A1\u5668\u7AEF\u54CD\u5E94\u4E2D\u6240\u6709\u5934\u90E8\u90FD\u5C06\u66B4\u9732\u7ED9JavaScript\u7684\`XMLHttpRequest\`\u6216\`fetch\`API\uFF0C\u5C3D\u7BA1\u901A\u5E38\u53EA\u6709\u4E00\u4E9B\u7279\u5B9A\u7684\u5934\u90E8\uFF08\u5982\`Cache-Control\`\uFF09\u9700\u8981\u88AB\u524D\u7AEF\u8BBF\u95EE\u3002
   - \`allow_credentials\`\u8BBE\u4E3A\`false\`\u662F\u56E0\u4E3A\u5F53\u5141\u8BB8\u4EFB\u610F\u6E90\u65F6\uFF0C\u51FA\u4E8E\u5B89\u5168\u6027\u8003\u8651\uFF0CCORS\u6807\u51C6\u7981\u6B62\u643A\u5E26\u51ED\u636E\u3002\u5982\u679C\u786E\u5B9E\u9700\u8981\u643A\u5E26\u51ED\u636E\uFF08\u4F8B\u5982\u8BA4\u8BC1\u4FE1\u606F\uFF09\uFF0C\u5219\u9700\u660E\u786E\u6307\u5B9A\u5141\u8BB8\u7684\u6E90\u800C\u4E0D\u80FD\u4F7F\u7528\u901A\u914D\u7B26\u3002
   - \`max_age\`\u8F83\u5927\u503C\u51CF\u5C11\u4E86\u56E0\u6D4F\u89C8\u5668\u9891\u7E41\u53D1\u9001\u9884\u68C0\u8BF7\u6C42\u800C\u5BFC\u81F4\u7684\u6027\u80FD\u5F00\u9500\uFF0C\u63D0\u9AD8\u4E86\u7528\u6237\u4F53\u9A8C\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u4EE5\u4E0A\u914D\u7F6E\u5373\u53EF\u6EE1\u8DB3\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\u7684\u9700\u6C42\uFF0C\u4F46\u8BF7\u6CE8\u610F\u8FD9\u6837\u505A\u53EF\u80FD\u4F1A\u589E\u52A0\u5B89\u5168\u98CE\u9669\uFF0C\u7279\u522B\u662F\u5728\u9700\u8981\u4FDD\u62A4\u8D44\u6E90\u6216\u5904\u7406\u654F\u611F\u6570\u636E\u7684\u573A\u666F\u4E0B\u3002\u52A1\u5FC5\u6839\u636E\u5B9E\u9645\u5E94\u7528\u573A\u666F\u6743\u8861\u5229\u5F0A\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress CORS \u914D\u7F6E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17132)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},d=function(){return e},t=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},o=r((g,w,x)=>{const{layout:m,...i}=s;return i.file=a,i.url=l,p`${u()}${f(e)}`})});export{o as Content,v as __tla,d as compiledContent,o as default,a as file,s as frontmatter,t as getHeadings,c as rawContent,l as url};
