import{c,__tla as r}from"./astro-component.DeDyO-JF.js";import{r as p,m as v,u as f,__tla as g}from"./constant.CMNEeMd7.js";import{__tla as h}from"./astro/assets-service.B3vdYoe2.js";let s,l,a,i,t,n,d,u=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>cors \u600E\u4E48\u914D\u7F6E\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF1F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u914D\u7F6E Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF1A</p>
<h3 id="\u5206\u6790\u95EE\u9898\u539F\u56E0">\u5206\u6790\u95EE\u9898\u539F\u56E0</h3>
<p>\u6839\u636E CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u89C4\u8303\uFF0C\u6D4F\u89C8\u5668\u51FA\u4E8E\u5B89\u5168\u8003\u8651\u4F1A\u5BF9\u4E0D\u540C\u6E90\u7684\u8BF7\u6C42\u8FDB\u884C\u9650\u5236\u3002\u4E3A\u4E86\u5141\u8BB8\u4E0D\u540C\u6E90\u7684\u8BF7\u6C42\u80FD\u591F\u6210\u529F\u8BBF\u95EE API \u6216\u8D44\u6E90\uFF0C\u9700\u8981\u5728\u670D\u52A1\u5668\u7AEF\u914D\u7F6E CORS \u76F8\u5173\u7684 HTTP \u5934\u90E8\u4FE1\u606F\u3002</p>
<h3 id="\u914D\u7F6E\u6B65\u9AA4">\u914D\u7F6E\u6B65\u9AA4</h3>
<h4 id="\u65B9\u6CD5\u4E00\u4F7F\u7528-cors-\u63D2\u4EF6\u914D\u7F6E">\u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 <code dir="auto">cors</code> \u63D2\u4EF6\u914D\u7F6E</h4>
<ol>
<li>
<p><strong>\u5141\u8BB8\u6240\u6709 Origin</strong>
\u5728 Higress \u7684\u914D\u7F6E\u4E2D\uFF0C\u901A\u8FC7 <code dir="auto">allow_origins</code> \u5B57\u6BB5\u8BBE\u7F6E\u5141\u8BB8\u7684 Origin \u5217\u8868\u3002\u8981\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u5C06\u6B64\u5B57\u6BB5\u8BBE\u7F6E\u4E3A <code dir="auto">'*'</code>\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origins:\x7F- &#x27;*&#x27;"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u5141\u8BB8\u6240\u6709 Methods</strong>
\u8BBE\u7F6E <code dir="auto">allow_methods</code> \u5B57\u6BB5\u4EE5\u5141\u8BB8\u6240\u6709 HTTP \u65B9\u6CD5\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_methods:\x7F- &#x27;*&#x27;"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u5141\u8BB8\u6240\u6709 Headers</strong>
\u914D\u7F6E <code dir="auto">allow_headers</code> \u5B57\u6BB5\u5141\u8BB8\u4EFB\u610F\u975E CORS \u89C4\u8303\u5916\u7684 Header\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_headers:\x7F- &#x27;*&#x27;"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u5141\u8BB8\u66B4\u9732\u6240\u6709 Headers</strong>
\u82E5\u8981\u54CD\u5E94\u4E2D\u5305\u542B\u6240\u6709\u975E\u6807\u51C6\u7684 Headers\uFF0C\u8BBE\u7F6E <code dir="auto">expose_headers</code>\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="expose_headers:\x7F- &#x27;*&#x27;"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u51ED\u636E\u5904\u7406</strong>
\u82E5\u65E0\u9700\u643A\u5E26 Cookie \u7B49\u51ED\u8BC1\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u8BBE\u7F6E\u6216\u663E\u5F0F\u8BBE\u5B9A <code dir="auto">allow_credentials</code> \u4E3A <code dir="auto">false</code>\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_credentials: false"><div></div></button></div></figure></div>
</li>
<li>
<p><strong>\u8BBE\u7F6E\u7F13\u5B58\u65F6\u95F4</strong>
\u901A\u8FC7 <code dir="auto">max_age</code> \u6307\u5B9A CORS \u9884\u68C0\u8BF7\u6C42\u7ED3\u679C\u7684\u7F13\u5B58\u65F6\u95F4\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="max_age: 7200"><div></div></button></div></figure></div>
</li>
</ol>
<h4 id="\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B">\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_origins</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_methods</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">expose_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'*'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow_credentials</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">max_age</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7200</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="allow_origins:\x7F- &#x27;*&#x27;\x7F\x7Fallow_methods:\x7F- &#x27;*&#x27;\x7F\x7Fallow_headers:\x7F- &#x27;*&#x27;\x7F\x7Fexpose_headers:\x7F- &#x27;*&#x27;\x7F\x7Fallow_credentials: false\x7F\x7Fmax_age: 7200"><div></div></button></div></figure></div>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4EE5\u4E0A\u914D\u7F6E\u5141\u8BB8\u4E86\u6765\u81EA\u4EFB\u4F55\u6E90\u7684\u8BF7\u6C42\uFF0C\u652F\u6301\u6240\u6709 HTTP \u65B9\u6CD5\uFF0C\u5141\u8BB8\u643A\u5E26\u4EFB\u4F55\u81EA\u5B9A\u4E49 Header\uFF0C\u540C\u65F6\u4E0D\u5F3A\u5236\u8981\u6C42\u51ED\u8BC1\uFF0C\u5E76\u8BBE\u7F6E\u4E86\u9884\u68C0\u8BF7\u6C42\u7ED3\u679C\u7684\u7F13\u5B58\u65F6\u95F4\u4E3A 2 \u5C0F\u65F6\uFF0C\u8FD9\u6837\u53EF\u4EE5\u63D0\u9AD8\u540E\u7EED\u76F8\u540C\u6E90\u8BF7\u6C42\u7684\u6548\u7387\u3002</p>
<h3 id="\u6CE8\u610F">\u6CE8\u610F</h3>
<ul>
<li>\u4F7F\u7528 <code dir="auto">allow_origins: '*'</code> \u548C <code dir="auto">allow_credentials: true</code> \u7684\u7EC4\u5408\u9700\u8C28\u614E\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u5BFC\u81F4\u5B89\u5168\u98CE\u9669\u3002</li>
<li>\u5F53\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u786E\u4FDD\u91CD\u542F\u6216\u66F4\u65B0 Higress \u670D\u52A1\u4EE5\u4F7F\u66F4\u6539\u751F\u6548\u3002</li>
</ul>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\u914D\u7F6E\u5373\u53EF\u5B9E\u73B0 Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\u7684\u76EE\u6807\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress CORS \u914D\u7F6E</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406</p>
</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : <a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5168\u5C40\u4E13\u5BB6\u7B54\u7591</a> \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16392" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,i={id:"question-history-16391",title:"cors \u600E\u4E48\u914D\u7F6E\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF1F",date:"2024-07-31",category:"expertConsultation",description:"\u8981\u914D\u7F6E Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF1A### \u5206\u6790\u95EE\u9898\u539F\u56E0\u6839\u636E CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u89C4\u8303\uFF0C\u6D4F\u89C8\u5668\u51FA\u4E8E\u5B89\u5168\u8003\u8651\u4F1A\u5BF9\u4E0D\u540C\u6E90\u7684\u8BF7\u6C42\u8FDB\u884C\u9650\u5236\u3002\u4E3A\u4E86\u5141\u8BB8\u4E0D\u540C\u6E90\u7684\u8BF7\u6C42\u80FD\u591F\u6210\u529F\u8BBF\u95EE API \u6216\u8D44\u6E90\uFF0C\u9700\u8981\u5728\u670D\u52A1\u5668\u7AEF\u914D\u7F6E CORS \u76F8\u5173\u7684 HTTP \u5934\u90E8\u4FE1\u606F\u3002### \u914D\u7F6E\u6B65\u9AA4###"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16391.md",d=void 0,n=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 cors \u600E\u4E48\u914D\u7F6E\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u914D\u7F6E Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u8BBE\u7F6E\uFF1A

### \u5206\u6790\u95EE\u9898\u539F\u56E0
\u6839\u636E CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u89C4\u8303\uFF0C\u6D4F\u89C8\u5668\u51FA\u4E8E\u5B89\u5168\u8003\u8651\u4F1A\u5BF9\u4E0D\u540C\u6E90\u7684\u8BF7\u6C42\u8FDB\u884C\u9650\u5236\u3002\u4E3A\u4E86\u5141\u8BB8\u4E0D\u540C\u6E90\u7684\u8BF7\u6C42\u80FD\u591F\u6210\u529F\u8BBF\u95EE API \u6216\u8D44\u6E90\uFF0C\u9700\u8981\u5728\u670D\u52A1\u5668\u7AEF\u914D\u7F6E CORS \u76F8\u5173\u7684 HTTP \u5934\u90E8\u4FE1\u606F\u3002

### \u914D\u7F6E\u6B65\u9AA4
#### \u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 \`cors\` \u63D2\u4EF6\u914D\u7F6E
1. **\u5141\u8BB8\u6240\u6709 Origin**
   \u5728 Higress \u7684\u914D\u7F6E\u4E2D\uFF0C\u901A\u8FC7 \`allow_origins\` \u5B57\u6BB5\u8BBE\u7F6E\u5141\u8BB8\u7684 Origin \u5217\u8868\u3002\u8981\u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u5C06\u6B64\u5B57\u6BB5\u8BBE\u7F6E\u4E3A \`'*'\`\u3002

   \`\`\`yaml
   allow_origins:
   - '*'
   \`\`\`

2. **\u5141\u8BB8\u6240\u6709 Methods**
   \u8BBE\u7F6E \`allow_methods\` \u5B57\u6BB5\u4EE5\u5141\u8BB8\u6240\u6709 HTTP \u65B9\u6CD5\u3002

   \`\`\`yaml
   allow_methods:
   - '*'
   \`\`\`

3. **\u5141\u8BB8\u6240\u6709 Headers**
   \u914D\u7F6E \`allow_headers\` \u5B57\u6BB5\u5141\u8BB8\u4EFB\u610F\u975E CORS \u89C4\u8303\u5916\u7684 Header\u3002

   \`\`\`yaml
   allow_headers:
   - '*'
   \`\`\`

4. **\u5141\u8BB8\u66B4\u9732\u6240\u6709 Headers**
   \u82E5\u8981\u54CD\u5E94\u4E2D\u5305\u542B\u6240\u6709\u975E\u6807\u51C6\u7684 Headers\uFF0C\u8BBE\u7F6E \`expose_headers\`\u3002

   \`\`\`yaml
   expose_headers:
   - '*'
   \`\`\`

5. **\u51ED\u636E\u5904\u7406**
   \u82E5\u65E0\u9700\u643A\u5E26 Cookie \u7B49\u51ED\u8BC1\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u8BBE\u7F6E\u6216\u663E\u5F0F\u8BBE\u5B9A \`allow_credentials\` \u4E3A \`false\`\u3002

   \`\`\`yaml
   allow_credentials: false
   \`\`\`

6. **\u8BBE\u7F6E\u7F13\u5B58\u65F6\u95F4**
   \u901A\u8FC7 \`max_age\` \u6307\u5B9A CORS \u9884\u68C0\u8BF7\u6C42\u7ED3\u679C\u7684\u7F13\u5B58\u65F6\u95F4\u3002

   \`\`\`yaml
   max_age: 7200
   \`\`\`

#### \u5B8C\u6574\u914D\u7F6E\u793A\u4F8B
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

### \u89E3\u91CA
\u4EE5\u4E0A\u914D\u7F6E\u5141\u8BB8\u4E86\u6765\u81EA\u4EFB\u4F55\u6E90\u7684\u8BF7\u6C42\uFF0C\u652F\u6301\u6240\u6709 HTTP \u65B9\u6CD5\uFF0C\u5141\u8BB8\u643A\u5E26\u4EFB\u4F55\u81EA\u5B9A\u4E49 Header\uFF0C\u540C\u65F6\u4E0D\u5F3A\u5236\u8981\u6C42\u51ED\u8BC1\uFF0C\u5E76\u8BBE\u7F6E\u4E86\u9884\u68C0\u8BF7\u6C42\u7ED3\u679C\u7684\u7F13\u5B58\u65F6\u95F4\u4E3A 2 \u5C0F\u65F6\uFF0C\u8FD9\u6837\u53EF\u4EE5\u63D0\u9AD8\u540E\u7EED\u76F8\u540C\u6E90\u8BF7\u6C42\u7684\u6548\u7387\u3002

### \u6CE8\u610F
- \u4F7F\u7528 \`allow_origins: '*'\` \u548C \`allow_credentials: true\` \u7684\u7EC4\u5408\u9700\u8C28\u614E\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u5BFC\u81F4\u5B89\u5168\u98CE\u9669\u3002
- \u5F53\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u786E\u4FDD\u91CD\u542F\u6216\u66F4\u65B0 Higress \u670D\u52A1\u4EE5\u4F7F\u66F4\u6539\u751F\u6548\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\u914D\u7F6E\u5373\u53EF\u5B9E\u73B0 Higress \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BF7\u6C42\u7684\u76EE\u6807\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress CORS \u914D\u7F6E 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>\uFF0C\u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002\u60A8\u4E5F\u53EF\u4EE5\u8BBF\u95EE : [\u5168\u5C40\u4E13\u5BB6\u7B54\u7591](https://answer.opensource.alibaba.com/docs/intro) \u3002 \u54A8\u8BE2\u5176\u4ED6\u4EA7\u54C1\u7684\u7684\u95EE\u9898

### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16392)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return e},t=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"\u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:3,slug:"\u914D\u7F6E\u6B65\u9AA4",text:"\u914D\u7F6E\u6B65\u9AA4"},{depth:4,slug:"\u65B9\u6CD5\u4E00\u4F7F\u7528-cors-\u63D2\u4EF6\u914D\u7F6E",text:"\u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 cors \u63D2\u4EF6\u914D\u7F6E"},{depth:4,slug:"\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B",text:"\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:3,slug:"\u6CE8\u610F",text:"\u6CE8\u610F"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=c((E,y,x)=>{const{layout:_,...o}=i;return o.file=a,o.url=d,p`${v()}${f(e)}`})});export{s as Content,u as __tla,l as compiledContent,s as default,a as file,i as frontmatter,t as getHeadings,n as rawContent,d as url};
