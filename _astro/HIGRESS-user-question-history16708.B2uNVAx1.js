import{c as g,__tla as u}from"./astro-component.cI6d52vQ.js";import{r as c,m as h,u as d,__tla as p}from"./constant.BZpKXPh9.js";import{__tla as f}from"./astro/assets-service.Da9pL5MS.js";let t,n,r,o,a,l,s,w=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress-core.gateway.hostNetwork \u8BBE\u7F6E\u4E3Atrue\u540E \u6CA1\u770B\u523080\u548C443\u7AEF\u53E3\u5F00\u542F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\uFF0C\u770B\u8D77\u6765\u60A8\u5728\u914D\u7F6EHigress\u65F6\u9047\u5230\u4E86\u4E3B\u673A\u7F51\u7EDC(hostNetwork)\u8BBE\u7F6E\u4E3Atrue\u540E\uFF0C\u9884\u671F\u768480\u548C443\u7AEF\u53E3\u5E76\u672A\u76D1\u542C\u7684\u60C5\u51B5\u3002\u867D\u7136\u53C2\u8003\u5185\u5BB9\u672A\u76F4\u63A5\u6DB5\u76D6\u8FD9\u4E00\u7279\u5B9A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u53CA\u5176\u4E00\u822CKubernetes\u7F51\u7EDC\u914D\u7F6E\u539F\u7406\u8FDB\u884C\u5206\u6790\u3002</p>
<h3 id="\u5206\u6790\u95EE\u9898\u539F\u56E0">\u5206\u6790\u95EE\u9898\u539F\u56E0</h3>
<ol>
<li>
<p><strong>hostNetwork\u914D\u7F6E\u542B\u4E49</strong>\uFF1A\u5F53<code dir="auto">higress-core.gateway.hostNetwork</code>\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0CHigress Gateway\u7684Pod\u5C06\u76F4\u63A5\u4F7F\u7528\u5BBF\u4E3B\u673A\u7684\u7F51\u7EDC\u547D\u540D\u7A7A\u95F4\uFF0C\u8FD9\u610F\u5473\u7740Pod\u5C06\u5171\u4EAB\u5BBF\u4E3B\u673A\u7684\u7F51\u7EDC\u63A5\u53E3\u548C\u7AEF\u53E3\u3002\u7406\u8BBA\u4E0A\uFF0C\u5982\u679C\u60A8\u7684\u670D\u52A1\u914D\u7F6E\u6B63\u786E\uFF0CHigress\u5E94\u8BE5\u80FD\u591F\u76F4\u63A5\u76D1\u542C80\u548C443\u7AEF\u53E3\u3002</p>
</li>
<li>
<p><strong>\u7AEF\u53E3\u672A\u5F00\u542F\u7684\u53EF\u80FD\u6027</strong>\uFF1A</p>
<ul>
<li><strong>\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528</strong>\uFF1A\u53EF\u80FD\u662F\u5BBF\u4E3B\u673A\u4E0A\u5DF2\u7ECF\u6709\u5176\u4ED6\u670D\u52A1\u5360\u7528\u4E8680\u548C443\u7AEF\u53E3\u3002</li>
<li><strong>Higress\u914D\u7F6E\u672A\u6307\u5B9A\u7AEF\u53E3</strong>\uFF1A\u5C3D\u7BA1\u5F00\u542F\u4E86<code dir="auto">hostNetwork</code>\uFF0C\u4F46Higress\u7684\u914D\u7F6E\u53EF\u80FD\u6CA1\u6709\u6B63\u786E\u5730\u6307\u5B9A\u76D1\u542C80\u548C443\u7AEF\u53E3\u3002</li>
<li><strong>Service\u6216Ingress\u8D44\u6E90\u914D\u7F6E\u95EE\u9898</strong>\uFF1A\u786E\u4FDD\u5173\u8054\u7684Kubernetes Service\u6216Ingress\u8D44\u6E90\u6B63\u786E\u914D\u7F6E\u4EE5\u66B4\u9732\u8FD9\u4E9B\u7AEF\u53E3\u3002</li>
<li><strong>\u9632\u706B\u5899\u9650\u5236</strong>\uFF1A\u5BBF\u4E3B\u673A\u6216\u96C6\u7FA4\u7F51\u7EDC\u7684\u9632\u706B\u5899\u89C4\u5219\u53EF\u80FD\u963B\u6B62\u4E86\u5916\u90E8\u8BBF\u95EE\u8FD9\u4E9B\u7AEF\u53E3\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u89E3\u51B3\u6B65\u9AA4">\u89E3\u51B3\u6B65\u9AA4</h3>
<p>\u7531\u4E8E\u53C2\u8003\u5185\u5BB9\u672A\u76F4\u63A5\u63D0\u4F9B\u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u4EE5\u4E0B\u662F\u4E00\u822C\u6027\u7684\u6392\u67E5\u548C\u89E3\u51B3\u601D\u8DEF\uFF1A</p>
<ol>
<li>
<p><strong>\u68C0\u67E5Higress\u914D\u7F6E</strong>\uFF1A</p>
<ul>
<li>\u786E\u8BA4Higress Gateway\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u662F\u5426\u660E\u786E\u6307\u5B9A\u4E86\u76D1\u542C80\u548C443\u7AEF\u53E3\u7684\u914D\u7F6E\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u5230\u7F16\u8F91Higress\u7684\u8DEF\u7531\u914D\u7F6E\u6216\u8005\u76F8\u5173\u7684TCP/UDP\u8DEF\u7531\u914D\u7F6E\u3002</li>
</ul>
</li>
<li>
<p><strong>\u67E5\u770BPod\u65E5\u5FD7</strong>\uFF1A</p>
<ul>
<li>\u901A\u8FC7<code dir="auto">kubectl logs &#x3C;higress-pod-name></code>\u547D\u4EE4\u68C0\u67E5Higress Gateway Pod\u7684\u65E5\u5FD7\uFF0C\u5BFB\u627E\u5173\u4E8E\u7AEF\u53E3\u7ED1\u5B9A\u5931\u8D25\u6216\u914D\u7F6E\u9519\u8BEF\u7684\u7EBF\u7D22\u3002</li>
</ul>
</li>
<li>
<p><strong>\u68C0\u67E5\u7AEF\u53E3\u5360\u7528\u60C5\u51B5</strong>\uFF1A</p>
<ul>
<li>\u5728\u5BBF\u4E3B\u673A\u4E0A\u8FD0\u884C<code dir="auto">sudo netstat -tulnp | grep :80</code>\u548C<code dir="auto">sudo netstat -tulnp | grep :443</code>\uFF0C\u786E\u8BA4\u8FD9\u4E24\u4E2A\u7AEF\u53E3\u662F\u5426\u5DF2\u88AB\u5176\u4ED6\u8FDB\u7A0B\u5360\u7528\u3002</li>
</ul>
</li>
<li>
<p><strong>\u8C03\u6574Service\u914D\u7F6E</strong>\uFF1A</p>
<ul>
<li>\u786E\u4FDD\u5173\u8054\u7684Kubernetes Service\u5BF9\u8C61\u6B63\u786E\u5730\u5B9A\u4E49\u4E86\u7C7B\u578B\uFF08\u5982<code dir="auto">LoadBalancer</code>\u6216<code dir="auto">NodePort</code>\uFF09\uFF0C\u5E76\u6307\u5B9A\u4E86\u6B63\u786E\u7684\u7AEF\u53E3\u6620\u5C04\u3002</li>
</ul>
</li>
<li>
<p><strong>\u68C0\u67E5\u7F51\u7EDC\u7B56\u7565\u4E0E\u9632\u706B\u5899</strong>\uFF1A</p>
<ul>
<li>\u786E\u8BA4\u6CA1\u6709\u7F51\u7EDC\u7B56\u7565\u6216\u9632\u706B\u5899\u89C4\u5219\u963B\u6B62\u8BBF\u95EE80\u548C443\u7AEF\u53E3\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u5E2E\u52A9\u8BCA\u65AD\u548C\u89E3\u51B3Higress\u672A\u80FD\u76D1\u542C\u671F\u671B\u7AEF\u53E3\u7684\u95EE\u9898\u3002\u901A\u8FC7\u68C0\u67E5\u914D\u7F6E\u3001\u65E5\u5FD7\u3001\u7AEF\u53E3\u5360\u7528\u60C5\u51B5\u3001\u670D\u52A1\u5B9A\u4E49\u4EE5\u53CA\u7F51\u7EDC\u7B56\u7565\uFF0C\u53EF\u4EE5\u9010\u6B65\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u5E76\u91C7\u53D6\u76F8\u5E94\u63AA\u65BD\u3002\u8BF7\u6CE8\u610F\uFF0C\u5177\u4F53\u7684\u914D\u7F6E\u8C03\u6574\u53EF\u80FD\u9700\u8981\u4F9D\u636EHigress\u7684\u6700\u65B0\u6587\u6863\u6307\u5BFC\u8FDB\u884C\uFF0C\u56E0\u4E3A\u5177\u4F53\u7684\u914D\u7F6E\u6307\u4EE4\u6216\u9009\u9879\u53EF\u80FD\u4F1A\u968F\u7248\u672C\u66F4\u65B0\u800C\u53D8\u5316\u3002\u5982\u679C\u95EE\u9898\u4F9D\u65E7\uFF0C\u5EFA\u8BAE\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u6216\u5728\u793E\u533A\u8BBA\u575B\u5BFB\u6C42\u5E2E\u52A9\u3002</p>
<p>\u7531\u4E8E\u63D0\u4F9B\u7684\u53C2\u8003\u8D44\u6599[$1]]\u672A\u76F4\u63A5\u5305\u542B\u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\u7684\u64CD\u4F5C\u6307\u5357\uFF0C\u4EE5\u4E0A\u89E3\u7B54\u4E3B\u8981\u57FA\u4E8E\u901A\u7528\u7684Kubernetes\u548C\u7F51\u7EDC\u914D\u7F6E\u7406\u89E3\u3002\u5E0C\u671B\u8FD9\u4E9B\u6B65\u9AA4\u80FD\u5E2E\u52A9\u60A8\u89E3\u51B3\u95EE\u9898\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4FEE\u6539 Gateway \u76D1\u542C\u7AEF\u53E3</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16722" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,o={id:"question-history-16708",title:"higress-core.gateway.hostNetwork \u8BBE\u7F6E\u4E3Atrue\u540E \u6CA1\u770B\u523080\u548C443\u7AEF\u53E3\u5F00\u542F",date:"2024-09-03",category:"expertConsultation",description:"\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\uFF0C\u770B\u8D77\u6765\u60A8\u5728\u914D\u7F6EHigress\u65F6\u9047\u5230\u4E86\u4E3B\u673A\u7F51\u7EDC(hostNetwork)\u8BBE\u7F6E\u4E3Atrue\u540E\uFF0C\u9884\u671F\u768480\u548C443\u7AEF\u53E3\u5E76\u672A\u76D1\u542C\u7684\u60C5\u51B5\u3002\u867D\u7136\u53C2\u8003\u5185\u5BB9\u672A\u76F4\u63A5\u6DB5\u76D6\u8FD9\u4E00\u7279\u5B9A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u53CA\u5176\u4E00\u822CKubernetes\u7F51\u7EDC\u914D\u7F6E\u539F\u7406\u8FDB\u884C\u5206\u6790\u3002### \u5206\u6790\u95EE\u9898\u539F\u56E01. **hostNet",tags:["higress","higress-core","gateway","hostNetwork","true","80","443"],keywords:["higress","higress-core","gateway","hostNetwork","true","80","443"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16708.md",s=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress-core.gateway.hostNetwork \u8BBE\u7F6E\u4E3Atrue\u540E \u6CA1\u770B\u523080\u548C443\u7AEF\u53E3\u5F00\u542F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u63D0\u4F9B\u7684\u95EE\u9898\uFF0C\u770B\u8D77\u6765\u60A8\u5728\u914D\u7F6EHigress\u65F6\u9047\u5230\u4E86\u4E3B\u673A\u7F51\u7EDC(hostNetwork)\u8BBE\u7F6E\u4E3Atrue\u540E\uFF0C\u9884\u671F\u768480\u548C443\u7AEF\u53E3\u5E76\u672A\u76D1\u542C\u7684\u60C5\u51B5\u3002\u867D\u7136\u53C2\u8003\u5185\u5BB9\u672A\u76F4\u63A5\u6DB5\u76D6\u8FD9\u4E00\u7279\u5B9A\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EHigress\u53CA\u5176\u4E00\u822CKubernetes\u7F51\u7EDC\u914D\u7F6E\u539F\u7406\u8FDB\u884C\u5206\u6790\u3002

### \u5206\u6790\u95EE\u9898\u539F\u56E0

1. **hostNetwork\u914D\u7F6E\u542B\u4E49**\uFF1A\u5F53\`higress-core.gateway.hostNetwork\`\u8BBE\u7F6E\u4E3Atrue\u65F6\uFF0CHigress Gateway\u7684Pod\u5C06\u76F4\u63A5\u4F7F\u7528\u5BBF\u4E3B\u673A\u7684\u7F51\u7EDC\u547D\u540D\u7A7A\u95F4\uFF0C\u8FD9\u610F\u5473\u7740Pod\u5C06\u5171\u4EAB\u5BBF\u4E3B\u673A\u7684\u7F51\u7EDC\u63A5\u53E3\u548C\u7AEF\u53E3\u3002\u7406\u8BBA\u4E0A\uFF0C\u5982\u679C\u60A8\u7684\u670D\u52A1\u914D\u7F6E\u6B63\u786E\uFF0CHigress\u5E94\u8BE5\u80FD\u591F\u76F4\u63A5\u76D1\u542C80\u548C443\u7AEF\u53E3\u3002

2. **\u7AEF\u53E3\u672A\u5F00\u542F\u7684\u53EF\u80FD\u6027**\uFF1A
   - **\u7AEF\u53E3\u5DF2\u88AB\u5360\u7528**\uFF1A\u53EF\u80FD\u662F\u5BBF\u4E3B\u673A\u4E0A\u5DF2\u7ECF\u6709\u5176\u4ED6\u670D\u52A1\u5360\u7528\u4E8680\u548C443\u7AEF\u53E3\u3002
   - **Higress\u914D\u7F6E\u672A\u6307\u5B9A\u7AEF\u53E3**\uFF1A\u5C3D\u7BA1\u5F00\u542F\u4E86\`hostNetwork\`\uFF0C\u4F46Higress\u7684\u914D\u7F6E\u53EF\u80FD\u6CA1\u6709\u6B63\u786E\u5730\u6307\u5B9A\u76D1\u542C80\u548C443\u7AEF\u53E3\u3002
   - **Service\u6216Ingress\u8D44\u6E90\u914D\u7F6E\u95EE\u9898**\uFF1A\u786E\u4FDD\u5173\u8054\u7684Kubernetes Service\u6216Ingress\u8D44\u6E90\u6B63\u786E\u914D\u7F6E\u4EE5\u66B4\u9732\u8FD9\u4E9B\u7AEF\u53E3\u3002
   - **\u9632\u706B\u5899\u9650\u5236**\uFF1A\u5BBF\u4E3B\u673A\u6216\u96C6\u7FA4\u7F51\u7EDC\u7684\u9632\u706B\u5899\u89C4\u5219\u53EF\u80FD\u963B\u6B62\u4E86\u5916\u90E8\u8BBF\u95EE\u8FD9\u4E9B\u7AEF\u53E3\u3002

### \u89E3\u51B3\u6B65\u9AA4

\u7531\u4E8E\u53C2\u8003\u5185\u5BB9\u672A\u76F4\u63A5\u63D0\u4F9B\u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u4EE5\u4E0B\u662F\u4E00\u822C\u6027\u7684\u6392\u67E5\u548C\u89E3\u51B3\u601D\u8DEF\uFF1A

1. **\u68C0\u67E5Higress\u914D\u7F6E**\uFF1A
   - \u786E\u8BA4Higress Gateway\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u662F\u5426\u660E\u786E\u6307\u5B9A\u4E86\u76D1\u542C80\u548C443\u7AEF\u53E3\u7684\u914D\u7F6E\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u5230\u7F16\u8F91Higress\u7684\u8DEF\u7531\u914D\u7F6E\u6216\u8005\u76F8\u5173\u7684TCP/UDP\u8DEF\u7531\u914D\u7F6E\u3002

2. **\u67E5\u770BPod\u65E5\u5FD7**\uFF1A
   - \u901A\u8FC7\`kubectl logs <higress-pod-name>\`\u547D\u4EE4\u68C0\u67E5Higress Gateway Pod\u7684\u65E5\u5FD7\uFF0C\u5BFB\u627E\u5173\u4E8E\u7AEF\u53E3\u7ED1\u5B9A\u5931\u8D25\u6216\u914D\u7F6E\u9519\u8BEF\u7684\u7EBF\u7D22\u3002

3. **\u68C0\u67E5\u7AEF\u53E3\u5360\u7528\u60C5\u51B5**\uFF1A
   - \u5728\u5BBF\u4E3B\u673A\u4E0A\u8FD0\u884C\`sudo netstat -tulnp | grep :80\`\u548C\`sudo netstat -tulnp | grep :443\`\uFF0C\u786E\u8BA4\u8FD9\u4E24\u4E2A\u7AEF\u53E3\u662F\u5426\u5DF2\u88AB\u5176\u4ED6\u8FDB\u7A0B\u5360\u7528\u3002

4. **\u8C03\u6574Service\u914D\u7F6E**\uFF1A
   - \u786E\u4FDD\u5173\u8054\u7684Kubernetes Service\u5BF9\u8C61\u6B63\u786E\u5730\u5B9A\u4E49\u4E86\u7C7B\u578B\uFF08\u5982\`LoadBalancer\`\u6216\`NodePort\`\uFF09\uFF0C\u5E76\u6307\u5B9A\u4E86\u6B63\u786E\u7684\u7AEF\u53E3\u6620\u5C04\u3002

5. **\u68C0\u67E5\u7F51\u7EDC\u7B56\u7565\u4E0E\u9632\u706B\u5899**\uFF1A
   - \u786E\u8BA4\u6CA1\u6709\u7F51\u7EDC\u7B56\u7565\u6216\u9632\u706B\u5899\u89C4\u5219\u963B\u6B62\u8BBF\u95EE80\u548C443\u7AEF\u53E3\u3002

### \u89E3\u91CA

\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u5E2E\u52A9\u8BCA\u65AD\u548C\u89E3\u51B3Higress\u672A\u80FD\u76D1\u542C\u671F\u671B\u7AEF\u53E3\u7684\u95EE\u9898\u3002\u901A\u8FC7\u68C0\u67E5\u914D\u7F6E\u3001\u65E5\u5FD7\u3001\u7AEF\u53E3\u5360\u7528\u60C5\u51B5\u3001\u670D\u52A1\u5B9A\u4E49\u4EE5\u53CA\u7F51\u7EDC\u7B56\u7565\uFF0C\u53EF\u4EE5\u9010\u6B65\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u5E76\u91C7\u53D6\u76F8\u5E94\u63AA\u65BD\u3002\u8BF7\u6CE8\u610F\uFF0C\u5177\u4F53\u7684\u914D\u7F6E\u8C03\u6574\u53EF\u80FD\u9700\u8981\u4F9D\u636EHigress\u7684\u6700\u65B0\u6587\u6863\u6307\u5BFC\u8FDB\u884C\uFF0C\u56E0\u4E3A\u5177\u4F53\u7684\u914D\u7F6E\u6307\u4EE4\u6216\u9009\u9879\u53EF\u80FD\u4F1A\u968F\u7248\u672C\u66F4\u65B0\u800C\u53D8\u5316\u3002\u5982\u679C\u95EE\u9898\u4F9D\u65E7\uFF0C\u5EFA\u8BAE\u67E5\u9605Higress\u7684\u5B98\u65B9\u6587\u6863\u6216\u5728\u793E\u533A\u8BBA\u575B\u5BFB\u6C42\u5E2E\u52A9\u3002

\u7531\u4E8E\u63D0\u4F9B\u7684\u53C2\u8003\u8D44\u6599[$1]]\u672A\u76F4\u63A5\u5305\u542B\u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\u7684\u64CD\u4F5C\u6307\u5357\uFF0C\u4EE5\u4E0A\u89E3\u7B54\u4E3B\u8981\u57FA\u4E8E\u901A\u7528\u7684Kubernetes\u548C\u7F51\u7EDC\u914D\u7F6E\u7406\u89E3\u3002\u5E0C\u671B\u8FD9\u4E9B\u6B65\u9AA4\u80FD\u5E2E\u52A9\u60A8\u89E3\u51B3\u95EE\u9898\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u4FEE\u6539 Gateway \u76D1\u542C\u7AEF\u53E3 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16722)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return e},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"\u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:3,slug:"\u89E3\u51B3\u6B65\u9AA4",text:"\u89E3\u51B3\u6B65\u9AA4"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},t=g((H,y,b)=>{const{layout:k,...i}=o;return i.file=r,i.url=s,c`${h()}${d(e)}`})});export{t as Content,w as __tla,n as compiledContent,t as default,r as file,o as frontmatter,a as getHeadings,l as rawContent,s as url};
