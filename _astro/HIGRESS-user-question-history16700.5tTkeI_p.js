import{c as d,__tla as r}from"./astro-component.cI6d52vQ.js";import{r as p,m as y,u,__tla as h}from"./constant.DPqNCY_w.js";import{__tla as v}from"./astro/assets-service.Da9pL5MS.js";let s,o,a,t,l,c,n,E=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u5982\u4F55\u4F7F\u7528apikey\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u63D0\u4F9B\u6848\u4F8B</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u4F7F\u7528Higress\u7684API Key\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u914D\u7F6E\u548C\u4F7F\u7528\u3002\u8FD9\u5C06\u57FA\u4E8E\u63D0\u4F9B\u7684\u6848\u4F8B\u548C\u8BF4\u660E\u6765\u8FDB\u884C\u8BE6\u7EC6\u89E3\u7B54\uFF1A</p>
<h3 id="1-\u7406\u89E3api-key\u8BA4\u8BC1\u539F\u7406">1. \u7406\u89E3API Key\u8BA4\u8BC1\u539F\u7406</h3>
<p>API Key\u8BA4\u8BC1\u662F\u4E00\u79CD\u7B80\u5355\u7684\u9274\u6743\u65B9\u5F0F\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u4E00\u4E2A\u9884\u5148\u5171\u4EAB\u7684\u5BC6\u94A5\uFF08API Key\uFF09\u6765\u9A8C\u8BC1\u8BF7\u6C42\u7684\u53D1\u8D77\u8005\u662F\u5426\u88AB\u6388\u6743\u8BBF\u95EE\u7279\u5B9A\u8D44\u6E90\u3002Higress\u7684<code dir="auto">key-auth</code>\u63D2\u4EF6\u5141\u8BB8\u60A8\u4ECEHTTP\u8BF7\u6C42\u7684URL\u53C2\u6570\u6216\u8BF7\u6C42\u5934\u4E2D\u63D0\u53D6API Key\uFF0C\u5E76\u9A8C\u8BC1\u8BE5Key\u7684\u6709\u6548\u6027\u53CA\u5176\u5BF9\u5E94\u7684\u8BBF\u95EE\u6743\u9650\u3002</p>
<h3 id="2-\u914D\u7F6E\u5168\u5C40\u6216\u7279\u5B9A\u8DEF\u7531\u57DF\u540D\u7684\u8BA4\u8BC1\u673A\u5236">2. \u914D\u7F6E\u5168\u5C40\u6216\u7279\u5B9A\u8DEF\u7531/\u57DF\u540D\u7684\u8BA4\u8BC1\u673A\u5236</h3>
<h4 id="\u5168\u5C40\u914D\u7F6E\u793A\u4F8B">\u5168\u5C40\u914D\u7F6E\u793A\u4F8B</h4>
<p>\u5982\u679C\u60A8\u5E0C\u671B\u5728\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5168\u5C40\u542F\u7528API Key\u8BA4\u8BC1\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_auth</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">consumers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">2bda943c-ba2b-11ec-ba07-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">credential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">c8c8e9ca-558e-4a2d-bb62-e700dcc40e35</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">x-api-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">in_query</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="global_auth: true\x7Fconsumers:\x7F- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5\x7F  name: consumer1\x7F- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35\x7F  name: consumer2\x7Fkeys:\x7F- apikey\x7F- x-api-key\x7Fin_query: true"><div></div></button></div></figure></div>
<p>\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E24\u4E2A\u6D88\u8D39\u8005\uFF08consumer1\u548Cconsumer2\uFF09\uFF0C\u5E76\u6307\u5B9A\u4E86API Key\u53EF\u4EE5\u4ECEURL\u53C2\u6570<code dir="auto">apikey</code>\u6216\u8BF7\u6C42\u5934<code dir="auto">x-api-key</code>\u4E2D\u83B7\u53D6\u3002</p>
<h4 id="\u8DEF\u7531\u57DF\u540D\u7EA7\u914D\u7F6E">\u8DEF\u7531/\u57DF\u540D\u7EA7\u914D\u7F6E</h4>
<p>\u5BF9\u4E8E\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\uFF0C\u53EF\u4EE5\u5728\u76F8\u5E94\u7684\u8DEF\u7531\u89C4\u5219\u4E2D\u6307\u5B9A\u5141\u8BB8\u7684\u6D88\u8D39\u8005\u5217\u8868\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u8DEF\u7531\u7EA7\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u6216\u57DF\u540D\u7EA7\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">allow</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">consumer2</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u8DEF\u7531\u7EA7\u914D\u7F6E\x7Fallow:\x7F- consumer1\x7F\x7F# \u6216\u57DF\u540D\u7EA7\u914D\u7F6E\x7Fallow:\x7F- consumer2"><div></div></button></div></figure></div>
<h3 id="3-\u4F7F\u7528api-key\u53D1\u8D77\u8BF7\u6C42">3. \u4F7F\u7528API Key\u53D1\u8D77\u8BF7\u6C42</h3>
<p>\u4E00\u65E6\u914D\u7F6E\u5B8C\u6210\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5728\u8BF7\u6C42\u4E2D\u643A\u5E26\u6B63\u786E\u7684API Key\u3002\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u4F20\u9012API Key\uFF1A</p>
<ul>
<li><strong>URL\u53C2\u6570</strong>\uFF1A\u5982<code dir="auto">http://xxx.hello.com/test?apikey=YOUR_API_KEY_HERE</code></li>
<li><strong>\u8BF7\u6C42\u5934</strong>\uFF1A\u5728HTTP\u8BF7\u6C42\u5934\u4E2D\u52A0\u5165<code dir="auto">X-API-Key: YOUR_API_KEY_HERE</code></li>
</ul>
<h3 id="4-\u9A8C\u8BC1\u4E0E\u54CD\u5E94">4. \u9A8C\u8BC1\u4E0E\u54CD\u5E94</h3>
<ul>
<li>\u6210\u529F\u8BA4\u8BC1\u540E\uFF0C\u54CD\u5E94\u7684HTTP\u5934\u90E8\u4F1A\u5305\u542B<code dir="auto">X-Mse-Consumer</code>\uFF0C\u663E\u793A\u8C03\u7528\u8005\u7684\u540D\u79F0\uFF08\u5982<code dir="auto">consumer1</code>\uFF09\u3002</li>
<li>\u5982\u679C\u8BA4\u8BC1\u5931\u8D25\uFF0C\u53EF\u80FD\u4F1A\u6536\u5230\u4EE5\u4E0B\u9519\u8BEF\u4EE3\u7801\uFF1A
<ul>
<li><strong>401 Unauthorized</strong>\uFF1A\u672A\u63D0\u4F9BAPI Key\uFF0C\u6216\u63D0\u4F9B\u4E86\u65E0\u6548/\u65E0\u6743\u9650\u7684API Key\u3002</li>
<li><strong>403 Forbidden</strong>\uFF1AAPI Key\u6709\u6548\u4F46\u5BF9\u5E94\u7684\u6D88\u8D39\u8005\u65E0\u6743\u8BBF\u95EE\u8BF7\u6C42\u7684\u8D44\u6E90\u3002</li>
</ul>
</li>
</ul>
<h3 id="\u603B\u7ED3">\u603B\u7ED3</h3>
<p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6709\u6548\u5730\u5728Higress\u4E2D\u914D\u7F6E\u5E76\u4F7F\u7528API Key\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u786E\u4FDDAPI\u8BBF\u95EE\u7684\u5B89\u5168\u6027\u548C\u53EF\u63A7\u6027\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9009\u62E9\u5168\u5C40\u6216\u5C40\u90E8\u542F\u7528\u8BA4\u8BC1\uFF0C\u5E76\u786E\u4FDD\u5BA2\u6237\u7AEF\u6B63\u786E\u5730\u4F20\u9012API Key\u3002\u52A1\u5FC5\u7BA1\u7406\u597D\u6D88\u8D39\u8005\u7684\u51ED\u636E\uFF0C\u4EE5\u7EF4\u62A4\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Key \u8BA4\u8BC1</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16701" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16700",title:"higress\u5982\u4F55\u4F7F\u7528apikey\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u63D0\u4F9B\u6848\u4F8B",date:"2024-09-03",category:"expertConsultation",description:"\u8981\u4F7F\u7528Higress\u7684API Key\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u914D\u7F6E\u548C\u4F7F\u7528\u3002\u8FD9\u5C06\u57FA\u4E8E\u63D0\u4F9B\u7684\u6848\u4F8B\u548C\u8BF4\u660E\u6765\u8FDB\u884C\u8BE6\u7EC6\u89E3\u7B54\uFF1A### 1. \u7406\u89E3API Key\u8BA4\u8BC1\u539F\u7406API Key\u8BA4\u8BC1\u662F\u4E00\u79CD\u7B80\u5355\u7684\u9274\u6743\u65B9\u5F0F\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u4E00\u4E2A\u9884\u5148\u5171\u4EAB\u7684\u5BC6\u94A5\uFF08API Key\uFF09\u6765\u9A8C\u8BC1\u8BF7\u6C42\u7684\u53D1\u8D77\u8005\u662F\u5426\u88AB\u6388\u6743\u8BBF\u95EE\u7279\u5B9A\u8D44\u6E90\u3002Higress",tags:["higress","apikey","\u8BA4\u8BC1","\u63D2\u4EF6","\u4F7F\u7528","\u6848\u4F8B"],keywords:["higress","apikey","\u8BA4\u8BC1","\u63D2\u4EF6","\u4F7F\u7528","\u6848\u4F8B"]},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16700.md",n=void 0,c=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u5982\u4F55\u4F7F\u7528apikey\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u63D0\u4F9B\u6848\u4F8B  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u4F7F\u7528Higress\u7684API Key\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u60A8\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u6B65\u9AA4\u8FDB\u884C\u914D\u7F6E\u548C\u4F7F\u7528\u3002\u8FD9\u5C06\u57FA\u4E8E\u63D0\u4F9B\u7684\u6848\u4F8B\u548C\u8BF4\u660E\u6765\u8FDB\u884C\u8BE6\u7EC6\u89E3\u7B54\uFF1A

### 1. \u7406\u89E3API Key\u8BA4\u8BC1\u539F\u7406
API Key\u8BA4\u8BC1\u662F\u4E00\u79CD\u7B80\u5355\u7684\u9274\u6743\u65B9\u5F0F\uFF0C\u5B83\u4F9D\u8D56\u4E8E\u4E00\u4E2A\u9884\u5148\u5171\u4EAB\u7684\u5BC6\u94A5\uFF08API Key\uFF09\u6765\u9A8C\u8BC1\u8BF7\u6C42\u7684\u53D1\u8D77\u8005\u662F\u5426\u88AB\u6388\u6743\u8BBF\u95EE\u7279\u5B9A\u8D44\u6E90\u3002Higress\u7684\`key-auth\`\u63D2\u4EF6\u5141\u8BB8\u60A8\u4ECEHTTP\u8BF7\u6C42\u7684URL\u53C2\u6570\u6216\u8BF7\u6C42\u5934\u4E2D\u63D0\u53D6API Key\uFF0C\u5E76\u9A8C\u8BC1\u8BE5Key\u7684\u6709\u6548\u6027\u53CA\u5176\u5BF9\u5E94\u7684\u8BBF\u95EE\u6743\u9650\u3002

### 2. \u914D\u7F6E\u5168\u5C40\u6216\u7279\u5B9A\u8DEF\u7531/\u57DF\u540D\u7684\u8BA4\u8BC1\u673A\u5236
#### \u5168\u5C40\u914D\u7F6E\u793A\u4F8B
\u5982\u679C\u60A8\u5E0C\u671B\u5728\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5168\u5C40\u542F\u7528API Key\u8BA4\u8BC1\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
global_auth: true
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
- x-api-key
in_query: true
\`\`\`
\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E24\u4E2A\u6D88\u8D39\u8005\uFF08consumer1\u548Cconsumer2\uFF09\uFF0C\u5E76\u6307\u5B9A\u4E86API Key\u53EF\u4EE5\u4ECEURL\u53C2\u6570\`apikey\`\u6216\u8BF7\u6C42\u5934\`x-api-key\`\u4E2D\u83B7\u53D6\u3002

#### \u8DEF\u7531/\u57DF\u540D\u7EA7\u914D\u7F6E
\u5BF9\u4E8E\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\uFF0C\u53EF\u4EE5\u5728\u76F8\u5E94\u7684\u8DEF\u7531\u89C4\u5219\u4E2D\u6307\u5B9A\u5141\u8BB8\u7684\u6D88\u8D39\u8005\u5217\u8868\uFF0C\u4F8B\u5982\uFF1A

\`\`\`yaml
# \u8DEF\u7531\u7EA7\u914D\u7F6E
allow:
- consumer1

# \u6216\u57DF\u540D\u7EA7\u914D\u7F6E
allow:
- consumer2
\`\`\`

### 3. \u4F7F\u7528API Key\u53D1\u8D77\u8BF7\u6C42
\u4E00\u65E6\u914D\u7F6E\u5B8C\u6210\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u5728\u8BF7\u6C42\u4E2D\u643A\u5E26\u6B63\u786E\u7684API Key\u3002\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u4F20\u9012API Key\uFF1A

- **URL\u53C2\u6570**\uFF1A\u5982\`http://xxx.hello.com/test?apikey=YOUR_API_KEY_HERE\`
- **\u8BF7\u6C42\u5934**\uFF1A\u5728HTTP\u8BF7\u6C42\u5934\u4E2D\u52A0\u5165\`X-API-Key: YOUR_API_KEY_HERE\`

### 4. \u9A8C\u8BC1\u4E0E\u54CD\u5E94
- \u6210\u529F\u8BA4\u8BC1\u540E\uFF0C\u54CD\u5E94\u7684HTTP\u5934\u90E8\u4F1A\u5305\u542B\`X-Mse-Consumer\`\uFF0C\u663E\u793A\u8C03\u7528\u8005\u7684\u540D\u79F0\uFF08\u5982\`consumer1\`\uFF09\u3002
- \u5982\u679C\u8BA4\u8BC1\u5931\u8D25\uFF0C\u53EF\u80FD\u4F1A\u6536\u5230\u4EE5\u4E0B\u9519\u8BEF\u4EE3\u7801\uFF1A
  - **401 Unauthorized**\uFF1A\u672A\u63D0\u4F9BAPI Key\uFF0C\u6216\u63D0\u4F9B\u4E86\u65E0\u6548/\u65E0\u6743\u9650\u7684API Key\u3002
  - **403 Forbidden**\uFF1AAPI Key\u6709\u6548\u4F46\u5BF9\u5E94\u7684\u6D88\u8D39\u8005\u65E0\u6743\u8BBF\u95EE\u8BF7\u6C42\u7684\u8D44\u6E90\u3002

### \u603B\u7ED3
\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u60A8\u53EF\u4EE5\u6709\u6548\u5730\u5728Higress\u4E2D\u914D\u7F6E\u5E76\u4F7F\u7528API Key\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u786E\u4FDDAPI\u8BBF\u95EE\u7684\u5B89\u5168\u6027\u548C\u53EF\u63A7\u6027\u3002\u8BF7\u6839\u636E\u5B9E\u9645\u9700\u6C42\u9009\u62E9\u5168\u5C40\u6216\u5C40\u90E8\u542F\u7528\u8BA4\u8BC1\uFF0C\u5E76\u786E\u4FDD\u5BA2\u6237\u7AEF\u6B63\u786E\u5730\u4F20\u9012API Key\u3002\u52A1\u5FC5\u7BA1\u7406\u597D\u6D88\u8D39\u8005\u7684\u51ED\u636E\uFF0C\u4EE5\u7EF4\u62A4\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Key \u8BA4\u8BC1 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16701)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},o=function(){return e},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u7406\u89E3api-key\u8BA4\u8BC1\u539F\u7406",text:"1. \u7406\u89E3API Key\u8BA4\u8BC1\u539F\u7406"},{depth:3,slug:"2-\u914D\u7F6E\u5168\u5C40\u6216\u7279\u5B9A\u8DEF\u7531\u57DF\u540D\u7684\u8BA4\u8BC1\u673A\u5236",text:"2. \u914D\u7F6E\u5168\u5C40\u6216\u7279\u5B9A\u8DEF\u7531/\u57DF\u540D\u7684\u8BA4\u8BC1\u673A\u5236"},{depth:4,slug:"\u5168\u5C40\u914D\u7F6E\u793A\u4F8B",text:"\u5168\u5C40\u914D\u7F6E\u793A\u4F8B"},{depth:4,slug:"\u8DEF\u7531\u57DF\u540D\u7EA7\u914D\u7F6E",text:"\u8DEF\u7531/\u57DF\u540D\u7EA7\u914D\u7F6E"},{depth:3,slug:"3-\u4F7F\u7528api-key\u53D1\u8D77\u8BF7\u6C42",text:"3. \u4F7F\u7528API Key\u53D1\u8D77\u8BF7\u6C42"},{depth:3,slug:"4-\u9A8C\u8BC1\u4E0E\u54CD\u5E94",text:"4. \u9A8C\u8BC1\u4E0E\u54CD\u5E94"},{depth:3,slug:"\u603B\u7ED3",text:"\u603B\u7ED3"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=d((f,g,P)=>{const{layout:m,...i}=t;return i.file=a,i.url=n,p`${y()}${u(e)}`})});export{s as Content,E as __tla,o as compiledContent,s as default,a as file,t as frontmatter,l as getHeadings,c as rawContent,n as url};
