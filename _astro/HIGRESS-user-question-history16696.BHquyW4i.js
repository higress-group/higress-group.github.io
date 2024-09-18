import{c as a,__tla as d}from"./astro-component.cI6d52vQ.js";import{r as c,m as p,u as h,__tla as g}from"./constant.BZpKXPh9.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let o,i,t,r,u,n,l,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress \u7ED3\u5408 kruise rollout\u53EF\u4EE5\u5B9E\u73B0End to End Canary release \u53D1\u5E03\u600E\u4E48\u505A</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u8981\u5B9E\u73B0End to End\u7684\u91D1\u4E1D\u96C0\u53D1\u5E03\u6D41\u7A0B\uFF0C\u7ED3\u5408Higress\u548CKruise Rollout\uFF0C\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\u64CD\u4F5C\uFF1A</p>
<h3 id="1-\u73AF\u5883\u51C6\u5907">1. \u73AF\u5883\u51C6\u5907</h3>
<p>\u786E\u4FDD\u4F60\u5DF2\u5177\u5907\u4EE5\u4E0B\u524D\u63D0\u6761\u4EF6\uFF1A</p>
<ul>
<li><strong>\u5B89\u88C5Higress</strong>\uFF1A\u6839\u636E<a href="../../ops/deploy-by-helm/" referrerpolicy="unsafe-url">\u5B89\u88C5\u90E8\u7F72\u6587\u6863</a>\u6307\u5F15\u5B8C\u6210Higress\u7684\u5B89\u88C5\u3002</li>
<li><strong>\u5B89\u88C5Kruise Rollout</strong>\uFF1A\u901A\u8FC7 Helm \u5B89\u88C5 Kruise Rollout \u7EC4\u4EF6\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0"><div></div></button></div></figure></div>
</li>
<li><strong>\u5B89\u88C5kubectl-kruise</strong>\uFF1A\u4E3A\u4E86\u66F4\u65B9\u4FBF\u5730\u64CD\u4F5CKruise\u8D44\u6E90\uFF0C\u5B89\u88C5<a href="https://github.com/openkruise/kruise-tools/blob/master/README.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kubectl-kruise\u547D\u4EE4\u884C\u5DE5\u5177</a>\u3002</li>
</ul>
<h3 id="2-\u5E94\u7528\u90E8\u7F72\u57FA\u7840\u914D\u7F6E">2. \u5E94\u7528\u90E8\u7F72\u57FA\u7840\u914D\u7F6E</h3>
<p>\u5047\u8BBE\u4F60\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E2A\u540D\u4E3A<code dir="auto">demo</code>\u7684\u670D\u52A1\uFF0C\u5176Deployment\u3001Service\u548CIngress\u914D\u7F6E\u5982\u77E5\u8BC6\u4E2D\u6240\u793A\u3002\u8FD9\u5305\u62EC\u5B9A\u4E49\u4E86\u670D\u52A1\u7684\u526F\u672C\u6570\u91CF\u3001\u7AEF\u53E3\u6620\u5C04\u4EE5\u53CA\u5916\u90E8\u8BBF\u95EE\u5165\u53E3\u3002</p>
<h3 id="3-\u5B9A\u4E49\u91D1\u4E1D\u96C0\u53D1\u5E03\u7B56\u7565">3. \u5B9A\u4E49\u91D1\u4E1D\u96C0\u53D1\u5E03\u7B56\u7565</h3>
<p>\u63A5\u4E0B\u6765\uFF0C\u4F60\u9700\u8981\u4E3A<code dir="auto">demo</code>\u670D\u52A1\u5B9A\u4E49\u91D1\u4E1D\u96C0\u53D1\u5E03\u7B56\u7565\u3002\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A<code dir="auto">Rollout</code>\u8D44\u6E90\u5BF9\u8C61\uFF0C\u5177\u4F53\u914D\u7F6E\u5982\u540C\u77E5\u8BC6\u4E2D\u7ED9\u51FA\u7684\u4F8B\u5B50\u3002\u8FD9\u4E2A\u7B56\u7565\u4F1A\u63A7\u5236\u65B0\u7248\u672CPod\u7684\u9010\u6B65\u90E8\u7F72\u53CA\u5176\u63A5\u6536\u7684\u6D41\u91CF\u6BD4\u4F8B\uFF0C\u786E\u4FDD\u5728\u6574\u4E2A\u53D1\u5E03\u8FC7\u7A0B\u4E2D\u6D41\u91CF\u7684\u5E73\u6ED1\u8FC7\u6E21\u3002</p>
<h3 id="4-\u66F4\u65B0\u955C\u50CF\u5E76\u542F\u52A8\u91D1\u4E1D\u96C0\u53D1\u5E03">4. \u66F4\u65B0\u955C\u50CF\u5E76\u542F\u52A8\u91D1\u4E1D\u96C0\u53D1\u5E03</h3>
<p>\u4FEE\u6539<code dir="auto">demo</code>\u670D\u52A1\u7684Deployment\u914D\u7F6E\uFF0C\u5C06\u955C\u50CF\u66F4\u65B0\u4E3A\u65B0\u7248\u672C\uFF08\u4F8B\u5982\uFF0C\u4ECE<code dir="auto">v1</code>\u66F4\u65B0\u5230<code dir="auto">v2</code>\uFF09\u3002\u63D0\u4EA4\u66F4\u6539\u540E\uFF0C\u89C2\u5BDFRollout\u63A7\u5236\u5668\u5F00\u59CB\u6309\u7167\u4F60\u5B9A\u4E49\u7684\u7B56\u7565\u6267\u884C\u91D1\u4E1D\u96C0\u53D1\u5E03\u8FC7\u7A0B\u3002</p>
<h3 id="5-\u76D1\u63A7\u4E0E\u786E\u8BA4">5. \u76D1\u63A7\u4E0E\u786E\u8BA4</h3>
<ul>
<li><strong>\u76D1\u63A7Rollout\u72B6\u6001</strong>\uFF1A\u4F7F\u7528<code dir="auto">kubectl get rollout</code>\u547D\u4EE4\u67E5\u770B\u5F53\u524DRollout\u7684\u72B6\u6001\uFF0C\u786E\u4FDD\u53D1\u5E03\u6309\u8BA1\u5212\u8FDB\u884C\u3002\u5982\u9047\u6682\u505C\u70B9\uFF0C\u9700\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\u3002</li>
<li><strong>\u68C0\u67E5Pod\u72B6\u6001</strong>\uFF1A\u901A\u8FC7<code dir="auto">kubectl get pods</code>\u67E5\u770B\u65B0\u65E7\u7248\u672CPod\u7684\u6570\u91CF\u53D8\u5316\uFF0C\u9A8C\u8BC1\u91D1\u4E1D\u96C0\u6B65\u9AA4\u662F\u5426\u6B63\u786E\u6267\u884C\u3002</li>
<li><strong>\u9A8C\u8BC1\u6D41\u91CF\u5206\u914D</strong>\uFF1A\u4F7F\u7528\u6D41\u91CF\u6D4B\u8BD5\u5DE5\u5177\u6216\u76F4\u63A5\u8BBF\u95EE\u5E94\u7528\uFF0C\u786E\u8BA4\u4E0D\u540C\u9636\u6BB5\u6D41\u91CF\u662F\u5426\u6309\u9884\u671F\u6BD4\u4F8B\u5206\u914D\u7ED9\u65B0\u65E7\u7248\u672C\u670D\u52A1\u3002</li>
</ul>
<h3 id="6-\u5206\u9636\u6BB5\u63A8\u8FDB\u53D1\u5E03">6. \u5206\u9636\u6BB5\u63A8\u8FDB\u53D1\u5E03</h3>
<ul>
<li>\u5728\u6BCF\u4E2A\u91D1\u4E1D\u96C0\u6B65\u9AA4\u5B8C\u6210\u540E\uFF0C\u6839\u636E\u6D4B\u8BD5\u7ED3\u679C\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u901A\u8FC7<code dir="auto">kubectl rollout resume</code>\u547D\u4EE4\u7EE7\u7EED\u5230\u4E0B\u4E00\u4E2A\u53D1\u5E03\u9636\u6BB5\uFF0C\u6216\u8005\u6839\u636E\u9700\u8981\u8FDB\u884C\u56DE\u6EDA\u3002</li>
<li>\u6700\u7EC8\uFF0C\u5F53\u6240\u6709\u6B65\u9AA4\u6267\u884C\u5B8C\u6BD5\uFF0C\u65B0\u7248\u672C\u5C06\u5168\u91CF\u66FF\u4EE3\u65E7\u7248\u672C\uFF0C\u5B8C\u6210\u6574\u4E2A\u91D1\u4E1D\u96C0\u53D1\u5E03\u6D41\u7A0B\u3002</li>
</ul>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4ECE\u73AF\u5883\u51C6\u5907\u3001\u57FA\u7840\u914D\u7F6E\u3001\u7B56\u7565\u5B9A\u4E49\u5230\u9010\u6B65\u53D1\u5E03\u7684\u5168\u8FC7\u7A0B\u3002Higress\u4F5C\u4E3A\u5165\u53E3\u7F51\u5173\uFF0C\u914D\u5408Kruise Rollout\u7684\u7CBE\u7EC6\u5316\u53D1\u5E03\u7B56\u7565\uFF0C\u80FD\u591F\u6709\u6548\u5730\u63A7\u5236\u6D41\u91CF\u5207\u6362\uFF0C\u786E\u4FDD\u5728\u4E0D\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u7684\u524D\u63D0\u4E0B\u5B89\u5168\u5730\u5B8C\u6210\u7248\u672C\u5347\u7EA7\u3002\u6574\u4E2A\u6D41\u7A0B\u9AD8\u5EA6\u81EA\u52A8\u5316\uFF0C\u540C\u65F6\u4FDD\u7559\u4E86\u4EBA\u5DE5\u5E72\u9884\u7684\u7075\u6D3B\u6027\uFF0C\u4EE5\u5E94\u5BF9\u53D1\u5E03\u8FC7\u7A0B\u4E2D\u7684\u4E0D\u786E\u5B9A\u6027\uFF0C\u4FDD\u969C\u4E86\u53D1\u5E03\u7684\u7A33\u5B9A\u6027\u548C\u6548\u7387\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u901A\u8FC7 OpenKruise Rollout \u5B9E\u73B0\u7070\u5EA6\u53D1\u5E03</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16697" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,r={id:"question-history-16696",title:"higress \u7ED3\u5408 kruise rollout\u53EF\u4EE5\u5B9E\u73B0End to End Canary release \u53D1\u5E03\u600E\u4E48\u505A",date:"2024-09-03",category:"expertConsultation",description:"\u8981\u5B9E\u73B0End to End\u7684\u91D1\u4E1D\u96C0\u53D1\u5E03\u6D41\u7A0B\uFF0C\u7ED3\u5408Higress\u548CKruise Rollout\uFF0C\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\u64CD\u4F5C\uFF1A### 1. \u73AF\u5883\u51C6\u5907\u786E\u4FDD\u4F60\u5DF2\u5177\u5907\u4EE5\u4E0B\u524D\u63D0\u6761\u4EF6\uFF1A- **\u5B89\u88C5Higress**\uFF1A\u6839\u636E[\u5B89\u88C5\u90E8\u7F72\u6587\u6863](../ops/deploy-by-helm.md)\u6307\u5F15\u5B8C\u6210Higress\u7684\u5B89\u88C5",tags:["higress","kruise","rollout","End","to","End","Canary"],keywords:["higress","kruise","rollout","End","to","End","Canary"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16696.md",l=void 0,n=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress \u7ED3\u5408 kruise rollout\u53EF\u4EE5\u5B9E\u73B0End to End Canary release \u53D1\u5E03\u600E\u4E48\u505A  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u8981\u5B9E\u73B0End to End\u7684\u91D1\u4E1D\u96C0\u53D1\u5E03\u6D41\u7A0B\uFF0C\u7ED3\u5408Higress\u548CKruise Rollout\uFF0C\u53EF\u4EE5\u9075\u5FAA\u4EE5\u4E0B\u8BE6\u7EC6\u6B65\u9AA4\u64CD\u4F5C\uFF1A

### 1. \u73AF\u5883\u51C6\u5907
\u786E\u4FDD\u4F60\u5DF2\u5177\u5907\u4EE5\u4E0B\u524D\u63D0\u6761\u4EF6\uFF1A
- **\u5B89\u88C5Higress**\uFF1A\u6839\u636E[\u5B89\u88C5\u90E8\u7F72\u6587\u6863](../ops/deploy-by-helm.md)\u6307\u5F15\u5B8C\u6210Higress\u7684\u5B89\u88C5\u3002
- **\u5B89\u88C5Kruise Rollout**\uFF1A\u901A\u8FC7 Helm \u5B89\u88C5 Kruise Rollout \u7EC4\u4EF6\uFF0C\u547D\u4EE4\u5982\u4E0B\uFF1A
  \`\`\`
  helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0
  \`\`\`
- **\u5B89\u88C5kubectl-kruise**\uFF1A\u4E3A\u4E86\u66F4\u65B9\u4FBF\u5730\u64CD\u4F5CKruise\u8D44\u6E90\uFF0C\u5B89\u88C5[kubectl-kruise\u547D\u4EE4\u884C\u5DE5\u5177](https://github.com/openkruise/kruise-tools/blob/master/README.md)\u3002

### 2. \u5E94\u7528\u90E8\u7F72\u57FA\u7840\u914D\u7F6E
\u5047\u8BBE\u4F60\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E2A\u540D\u4E3A\`demo\`\u7684\u670D\u52A1\uFF0C\u5176Deployment\u3001Service\u548CIngress\u914D\u7F6E\u5982\u77E5\u8BC6\u4E2D\u6240\u793A\u3002\u8FD9\u5305\u62EC\u5B9A\u4E49\u4E86\u670D\u52A1\u7684\u526F\u672C\u6570\u91CF\u3001\u7AEF\u53E3\u6620\u5C04\u4EE5\u53CA\u5916\u90E8\u8BBF\u95EE\u5165\u53E3\u3002

### 3. \u5B9A\u4E49\u91D1\u4E1D\u96C0\u53D1\u5E03\u7B56\u7565
\u63A5\u4E0B\u6765\uFF0C\u4F60\u9700\u8981\u4E3A\`demo\`\u670D\u52A1\u5B9A\u4E49\u91D1\u4E1D\u96C0\u53D1\u5E03\u7B56\u7565\u3002\u901A\u8FC7\u521B\u5EFA\u4E00\u4E2A\`Rollout\`\u8D44\u6E90\u5BF9\u8C61\uFF0C\u5177\u4F53\u914D\u7F6E\u5982\u540C\u77E5\u8BC6\u4E2D\u7ED9\u51FA\u7684\u4F8B\u5B50\u3002\u8FD9\u4E2A\u7B56\u7565\u4F1A\u63A7\u5236\u65B0\u7248\u672CPod\u7684\u9010\u6B65\u90E8\u7F72\u53CA\u5176\u63A5\u6536\u7684\u6D41\u91CF\u6BD4\u4F8B\uFF0C\u786E\u4FDD\u5728\u6574\u4E2A\u53D1\u5E03\u8FC7\u7A0B\u4E2D\u6D41\u91CF\u7684\u5E73\u6ED1\u8FC7\u6E21\u3002

### 4. \u66F4\u65B0\u955C\u50CF\u5E76\u542F\u52A8\u91D1\u4E1D\u96C0\u53D1\u5E03
\u4FEE\u6539\`demo\`\u670D\u52A1\u7684Deployment\u914D\u7F6E\uFF0C\u5C06\u955C\u50CF\u66F4\u65B0\u4E3A\u65B0\u7248\u672C\uFF08\u4F8B\u5982\uFF0C\u4ECE\`v1\`\u66F4\u65B0\u5230\`v2\`\uFF09\u3002\u63D0\u4EA4\u66F4\u6539\u540E\uFF0C\u89C2\u5BDFRollout\u63A7\u5236\u5668\u5F00\u59CB\u6309\u7167\u4F60\u5B9A\u4E49\u7684\u7B56\u7565\u6267\u884C\u91D1\u4E1D\u96C0\u53D1\u5E03\u8FC7\u7A0B\u3002

### 5. \u76D1\u63A7\u4E0E\u786E\u8BA4
- **\u76D1\u63A7Rollout\u72B6\u6001**\uFF1A\u4F7F\u7528\`kubectl get rollout\`\u547D\u4EE4\u67E5\u770B\u5F53\u524DRollout\u7684\u72B6\u6001\uFF0C\u786E\u4FDD\u53D1\u5E03\u6309\u8BA1\u5212\u8FDB\u884C\u3002\u5982\u9047\u6682\u505C\u70B9\uFF0C\u9700\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\u3002
- **\u68C0\u67E5Pod\u72B6\u6001**\uFF1A\u901A\u8FC7\`kubectl get pods\`\u67E5\u770B\u65B0\u65E7\u7248\u672CPod\u7684\u6570\u91CF\u53D8\u5316\uFF0C\u9A8C\u8BC1\u91D1\u4E1D\u96C0\u6B65\u9AA4\u662F\u5426\u6B63\u786E\u6267\u884C\u3002
- **\u9A8C\u8BC1\u6D41\u91CF\u5206\u914D**\uFF1A\u4F7F\u7528\u6D41\u91CF\u6D4B\u8BD5\u5DE5\u5177\u6216\u76F4\u63A5\u8BBF\u95EE\u5E94\u7528\uFF0C\u786E\u8BA4\u4E0D\u540C\u9636\u6BB5\u6D41\u91CF\u662F\u5426\u6309\u9884\u671F\u6BD4\u4F8B\u5206\u914D\u7ED9\u65B0\u65E7\u7248\u672C\u670D\u52A1\u3002

### 6. \u5206\u9636\u6BB5\u63A8\u8FDB\u53D1\u5E03
- \u5728\u6BCF\u4E2A\u91D1\u4E1D\u96C0\u6B65\u9AA4\u5B8C\u6210\u540E\uFF0C\u6839\u636E\u6D4B\u8BD5\u7ED3\u679C\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u901A\u8FC7\`kubectl rollout resume\`\u547D\u4EE4\u7EE7\u7EED\u5230\u4E0B\u4E00\u4E2A\u53D1\u5E03\u9636\u6BB5\uFF0C\u6216\u8005\u6839\u636E\u9700\u8981\u8FDB\u884C\u56DE\u6EDA\u3002
- \u6700\u7EC8\uFF0C\u5F53\u6240\u6709\u6B65\u9AA4\u6267\u884C\u5B8C\u6BD5\uFF0C\u65B0\u7248\u672C\u5C06\u5168\u91CF\u66FF\u4EE3\u65E7\u7248\u672C\uFF0C\u5B8C\u6210\u6574\u4E2A\u91D1\u4E1D\u96C0\u53D1\u5E03\u6D41\u7A0B\u3002

### \u89E3\u91CA
\u901A\u8FC7\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4ECE\u73AF\u5883\u51C6\u5907\u3001\u57FA\u7840\u914D\u7F6E\u3001\u7B56\u7565\u5B9A\u4E49\u5230\u9010\u6B65\u53D1\u5E03\u7684\u5168\u8FC7\u7A0B\u3002Higress\u4F5C\u4E3A\u5165\u53E3\u7F51\u5173\uFF0C\u914D\u5408Kruise Rollout\u7684\u7CBE\u7EC6\u5316\u53D1\u5E03\u7B56\u7565\uFF0C\u80FD\u591F\u6709\u6548\u5730\u63A7\u5236\u6D41\u91CF\u5207\u6362\uFF0C\u786E\u4FDD\u5728\u4E0D\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u7684\u524D\u63D0\u4E0B\u5B89\u5168\u5730\u5B8C\u6210\u7248\u672C\u5347\u7EA7\u3002\u6574\u4E2A\u6D41\u7A0B\u9AD8\u5EA6\u81EA\u52A8\u5316\uFF0C\u540C\u65F6\u4FDD\u7559\u4E86\u4EBA\u5DE5\u5E72\u9884\u7684\u7075\u6D3B\u6027\uFF0C\u4EE5\u5E94\u5BF9\u53D1\u5E03\u8FC7\u7A0B\u4E2D\u7684\u4E0D\u786E\u5B9A\u6027\uFF0C\u4FDD\u969C\u4E86\u53D1\u5E03\u7684\u7A33\u5B9A\u6027\u548C\u6548\u7387\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u901A\u8FC7 OpenKruise Rollout \u5B9E\u73B0\u7070\u5EA6\u53D1\u5E03 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16697)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return e},u=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"1-\u73AF\u5883\u51C6\u5907",text:"1. \u73AF\u5883\u51C6\u5907"},{depth:3,slug:"2-\u5E94\u7528\u90E8\u7F72\u57FA\u7840\u914D\u7F6E",text:"2. \u5E94\u7528\u90E8\u7F72\u57FA\u7840\u914D\u7F6E"},{depth:3,slug:"3-\u5B9A\u4E49\u91D1\u4E1D\u96C0\u53D1\u5E03\u7B56\u7565",text:"3. \u5B9A\u4E49\u91D1\u4E1D\u96C0\u53D1\u5E03\u7B56\u7565"},{depth:3,slug:"4-\u66F4\u65B0\u955C\u50CF\u5E76\u542F\u52A8\u91D1\u4E1D\u96C0\u53D1\u5E03",text:"4. \u66F4\u65B0\u955C\u50CF\u5E76\u542F\u52A8\u91D1\u4E1D\u96C0\u53D1\u5E03"},{depth:3,slug:"5-\u76D1\u63A7\u4E0E\u786E\u8BA4",text:"5. \u76D1\u63A7\u4E0E\u786E\u8BA4"},{depth:3,slug:"6-\u5206\u9636\u6BB5\u63A8\u8FDB\u53D1\u5E03",text:"6. \u5206\u9636\u6BB5\u63A8\u8FDB\u53D1\u5E03"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},o=a((k,b,y)=>{const{layout:E,...s}=r;return s.file=t,s.url=l,c`${p()}${h(e)}`})});export{o as Content,m as __tla,i as compiledContent,o as default,t as file,r as frontmatter,u as getHeadings,n as rawContent,l as url};
