import{c as g,__tla as u}from"./astro-component.cI6d52vQ.js";import{r as p,m as c,u as h,__tla as I}from"./constant.DynMic-r.js";import{__tla as d}from"./astro/assets-service.Da9pL5MS.js";let s,a,r,t,i,l,o,f=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return I}catch{}})(),(()=>{try{return d}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>Application   Container    Kubernetes   Istio   Ingress Gateway
higress  \u80FD\u66FF\u6362\u54EA\u4E9B\u7EC4\u4EF6\uFF1F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress \u662F\u4E00\u4E2A\u5177\u5907\u9AD8\u5EA6\u53EF\u6269\u5C55\u6027\u548C\u7075\u6D3B\u6027\u7684\u73B0\u4EE3\u5316\u4E91\u539F\u751FIngress\u7F51\u5173\u89E3\u51B3\u65B9\u6848\u3002\u9488\u5BF9\u95EE\u9898\u201Chigress\u80FD\u66FF\u6362\u54EA\u4E9B\u7EC4\u4EF6\uFF1F\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u6790\u5F97\u51FA\u4EE5\u4E0B\u4FE1\u606F\uFF1A</p>
<p><strong>Higress\u53EF\u4EE5\u66FF\u4EE3\u6216\u6574\u5408\u7684\u7EC4\u4EF6\u5305\u62EC\uFF1A</strong></p>
<ol>
<li>
<p><strong>\u4F20\u7EDF\u7684Ingress Controllers</strong>: \u5982Nginx Ingress Controller\uFF0C\u901A\u8FC7\u5176<code dir="auto">global.ingressClass</code>\u53C2\u6570\uFF0CHigress\u80FD\u591F\u63A5\u7BA1\u548C\u5904\u7406Kubernetes\u96C6\u7FA4\u4E2D\u7684Ingress\u8D44\u6E90\uFF0C\u63D0\u4F9B\u7C7B\u4F3C\u7684\u670D\u52A1\u8DEF\u7531\u548C\u8D1F\u8F7D\u5747\u8861\u529F\u80FD\u3002</p>
</li>
<li>
<p><strong>Istio Gateway</strong>: \u5F53<code dir="auto">global.enableIstioAPI</code>\u8BBE\u7F6E\u4E3A<code dir="auto">true</code>\u65F6\uFF0CHigress\u80FD\u76D1\u542C\u5E76\u5904\u7406Istio\u7684\u670D\u52A1\u7F51\u683C\u8D44\u6E90\uFF0C\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u4F5C\u4E3AIstio\u4F53\u7CFB\u4E2D\u7684Ingress Gateway\u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u5904\u7406\u5916\u90E8\u6D41\u91CF\u63A5\u5165\u670D\u52A1\u7F51\u683C\u3002</p>
</li>
<li>
<p><strong>Gateway API\u8D44\u6E90\u7684\u63A7\u5236\u5668</strong>: \u542F\u7528<code dir="auto">global.enableGatewayAPI</code>\u5141\u8BB8Higress\u76D1\u542CKubernetes\u7684Gateway API\u8D44\u6E90\uFF0C\u8FD9\u4F7F\u5F97Higress\u80FD\u591F\u66FF\u4EE3\u4E13\u95E8\u5904\u7406Kubernetes Gateway API\u7684\u63A7\u5236\u5668\uFF0C\u6210\u4E3A\u652F\u6301\u73B0\u4EE3Kubernetes\u670D\u52A1\u66B4\u9732\u6807\u51C6\u7684\u7F51\u5173\u3002</p>
</li>
<li>
<p><strong>\u90E8\u5206\u7F51\u7EDC\u76D1\u63A7\u548C\u53EF\u89C2\u6D4B\u6027\u7EC4\u4EF6\u7684\u96C6\u6210</strong>: \u4F8B\u5982\uFF0C\u901A\u8FC7\u914D\u7F6E<code dir="auto">higress-core.meshConfig.enablePrometheusMerge</code>\uFF0CHigress\u53EF\u4EE5\u4E0EPrometheus\u96C6\u6210\uFF0C\u5F71\u54CD\u76D1\u63A7\u6570\u636E\u7684\u805A\u5408\u65B9\u5F0F\uFF0C\u4ECE\u800C\u95F4\u63A5\u5730\u5F71\u54CD\u6216\u51CF\u5C11\u5BF9\u7279\u5B9A\u53EF\u89C2\u6D4B\u6027\u5DE5\u5177\u7684\u4F9D\u8D56\u3002</p>
</li>
</ol>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4F5C\u4E3A\u4E00\u4E2A\u7EFC\u5408\u6027\u7684\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u4E0D\u4EC5\u80FD\u591F\u66FF\u6362\u4F20\u7EDF\u7684Ingress\u63A7\u5236\u5668\uFF0C\u8FD8\u80FD\u6574\u5408Istio\u670D\u52A1\u7F51\u683C\u7684\u529F\u80FD\u4EE5\u53CA\u73B0\u4EE3\u5316\u7684Kubernetes Gateway API\uFF0C\u540C\u65F6\u5BF9\u76D1\u63A7\u96C6\u6210\u4E5F\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u652F\u6301\uFF0C\u5C55\u793A\u4E86\u5176\u4F5C\u4E3A\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u57FA\u7840\u8BBE\u65BD\u7EC4\u4EF6\u7684\u6F5C\u529B\u3002</p>
<p><strong>\u65E0\u9700\u989D\u5916\u6B65\u9AA4\u6307\u5BFC</strong>\uFF1A\u7531\u4E8E\u95EE\u9898\u4E3B\u8981\u6D89\u53CAHigress\u7684\u529F\u80FD\u6982\u8FF0\u53CA\u5176\u5728\u67B6\u6784\u4E2D\u7684\u6F5C\u5728\u66FF\u6362\u80FD\u529B\uFF0C\u77E5\u8BC6\u5185\u5BB9\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u5177\u4F53\u7684\u64CD\u4F5C\u6B65\u9AA4\u6216\u914D\u7F6E\u6307\u5357\uFF0C\u56E0\u6B64\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u63D0\u4F9B\u5177\u4F53\u7684\u6267\u884C\u6B65\u9AA4\u3002</p>
<p><strong>\u77E5\u8BC6\u5173\u8054\u6027\u8BF4\u660E</strong>\uFF1A\u672C\u6B21\u4E3B\u8981\u4F9D\u636E\u4E86Higress\u53C2\u6570\u914D\u7F6E\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5176\u4ED6\u672A\u63D0\u53CA\u7684\u53C2\u8003\u5185\u5BB9\u4E0E\u5F53\u524D\u95EE\u9898\u5173\u8054\u6027\u4E0D\u5927\uFF0C\u6545\u672A\u7EB3\u5165\u5206\u6790\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress\u53C2\u6570\u914D\u7F6E</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16970" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16960",title:"Application   Container    Kubernetes   Istio   Ingress Gatewa",date:"2024-09-11",category:"expertConsultation",description:"\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress \u662F\u4E00\u4E2A\u5177\u5907\u9AD8\u5EA6\u53EF\u6269\u5C55\u6027\u548C\u7075\u6D3B\u6027\u7684\u73B0\u4EE3\u5316\u4E91\u539F\u751FIngress\u7F51\u5173\u89E3\u51B3\u65B9\u6848\u3002\u9488\u5BF9\u95EE\u9898\u201Chigress\u80FD\u66FF\u6362\u54EA\u4E9B\u7EC4\u4EF6\uFF1F\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u6790\u5F97\u51FA\u4EE5\u4E0B\u4FE1\u606F\uFF1A**Higress\u53EF\u4EE5\u66FF\u4EE3\u6216\u6574\u5408\u7684\u7EC4\u4EF6\u5305\u62EC\uFF1A**1. **\u4F20\u7EDF\u7684Ingress Controllers**: \u5982Nginx",tags:["higress","Application","Container","Kubernetes","Istio","Ingress","Gateway"],keywords:["higress","Application","Container","Kubernetes","Istio","Ingress","Gateway"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16960.md",o=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 Application   Container    Kubernetes   Istio   Ingress Gateway
higress  \u80FD\u66FF\u6362\u54EA\u4E9B\u7EC4\u4EF6\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0CHigress \u662F\u4E00\u4E2A\u5177\u5907\u9AD8\u5EA6\u53EF\u6269\u5C55\u6027\u548C\u7075\u6D3B\u6027\u7684\u73B0\u4EE3\u5316\u4E91\u539F\u751FIngress\u7F51\u5173\u89E3\u51B3\u65B9\u6848\u3002\u9488\u5BF9\u95EE\u9898\u201Chigress\u80FD\u66FF\u6362\u54EA\u4E9B\u7EC4\u4EF6\uFF1F\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u6790\u5F97\u51FA\u4EE5\u4E0B\u4FE1\u606F\uFF1A

**Higress\u53EF\u4EE5\u66FF\u4EE3\u6216\u6574\u5408\u7684\u7EC4\u4EF6\u5305\u62EC\uFF1A**

1. **\u4F20\u7EDF\u7684Ingress Controllers**: \u5982Nginx Ingress Controller\uFF0C\u901A\u8FC7\u5176\`global.ingressClass\`\u53C2\u6570\uFF0CHigress\u80FD\u591F\u63A5\u7BA1\u548C\u5904\u7406Kubernetes\u96C6\u7FA4\u4E2D\u7684Ingress\u8D44\u6E90\uFF0C\u63D0\u4F9B\u7C7B\u4F3C\u7684\u670D\u52A1\u8DEF\u7531\u548C\u8D1F\u8F7D\u5747\u8861\u529F\u80FD\u3002

2. **Istio Gateway**: \u5F53\`global.enableIstioAPI\`\u8BBE\u7F6E\u4E3A\`true\`\u65F6\uFF0CHigress\u80FD\u76D1\u542C\u5E76\u5904\u7406Istio\u7684\u670D\u52A1\u7F51\u683C\u8D44\u6E90\uFF0C\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u4F5C\u4E3AIstio\u4F53\u7CFB\u4E2D\u7684Ingress Gateway\u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u5904\u7406\u5916\u90E8\u6D41\u91CF\u63A5\u5165\u670D\u52A1\u7F51\u683C\u3002

3. **Gateway API\u8D44\u6E90\u7684\u63A7\u5236\u5668**: \u542F\u7528\`global.enableGatewayAPI\`\u5141\u8BB8Higress\u76D1\u542CKubernetes\u7684Gateway API\u8D44\u6E90\uFF0C\u8FD9\u4F7F\u5F97Higress\u80FD\u591F\u66FF\u4EE3\u4E13\u95E8\u5904\u7406Kubernetes Gateway API\u7684\u63A7\u5236\u5668\uFF0C\u6210\u4E3A\u652F\u6301\u73B0\u4EE3Kubernetes\u670D\u52A1\u66B4\u9732\u6807\u51C6\u7684\u7F51\u5173\u3002

4. **\u90E8\u5206\u7F51\u7EDC\u76D1\u63A7\u548C\u53EF\u89C2\u6D4B\u6027\u7EC4\u4EF6\u7684\u96C6\u6210**: \u4F8B\u5982\uFF0C\u901A\u8FC7\u914D\u7F6E\`higress-core.meshConfig.enablePrometheusMerge\`\uFF0CHigress\u53EF\u4EE5\u4E0EPrometheus\u96C6\u6210\uFF0C\u5F71\u54CD\u76D1\u63A7\u6570\u636E\u7684\u805A\u5408\u65B9\u5F0F\uFF0C\u4ECE\u800C\u95F4\u63A5\u5730\u5F71\u54CD\u6216\u51CF\u5C11\u5BF9\u7279\u5B9A\u53EF\u89C2\u6D4B\u6027\u5DE5\u5177\u7684\u4F9D\u8D56\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4F5C\u4E3A\u4E00\u4E2A\u7EFC\u5408\u6027\u7684\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u4E0D\u4EC5\u80FD\u591F\u66FF\u6362\u4F20\u7EDF\u7684Ingress\u63A7\u5236\u5668\uFF0C\u8FD8\u80FD\u6574\u5408Istio\u670D\u52A1\u7F51\u683C\u7684\u529F\u80FD\u4EE5\u53CA\u73B0\u4EE3\u5316\u7684Kubernetes Gateway API\uFF0C\u540C\u65F6\u5BF9\u76D1\u63A7\u96C6\u6210\u4E5F\u63D0\u4F9B\u4E86\u7075\u6D3B\u7684\u652F\u6301\uFF0C\u5C55\u793A\u4E86\u5176\u4F5C\u4E3A\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u57FA\u7840\u8BBE\u65BD\u7EC4\u4EF6\u7684\u6F5C\u529B\u3002

**\u65E0\u9700\u989D\u5916\u6B65\u9AA4\u6307\u5BFC**\uFF1A\u7531\u4E8E\u95EE\u9898\u4E3B\u8981\u6D89\u53CAHigress\u7684\u529F\u80FD\u6982\u8FF0\u53CA\u5176\u5728\u67B6\u6784\u4E2D\u7684\u6F5C\u5728\u66FF\u6362\u80FD\u529B\uFF0C\u77E5\u8BC6\u5185\u5BB9\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u5177\u4F53\u7684\u64CD\u4F5C\u6B65\u9AA4\u6216\u914D\u7F6E\u6307\u5357\uFF0C\u56E0\u6B64\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u63D0\u4F9B\u5177\u4F53\u7684\u6267\u884C\u6B65\u9AA4\u3002

**\u77E5\u8BC6\u5173\u8054\u6027\u8BF4\u660E**\uFF1A\u672C\u6B21\u4E3B\u8981\u4F9D\u636E\u4E86Higress\u53C2\u6570\u914D\u7F6E\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5176\u4ED6\u672A\u63D0\u53CA\u7684\u53C2\u8003\u5185\u5BB9\u4E0E\u5F53\u524D\u95EE\u9898\u5173\u8054\u6027\u4E0D\u5927\uFF0C\u6545\u672A\u7EB3\u5165\u5206\u6790\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress\u53C2\u6570\u914D\u7F6E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16970)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},a=function(){return e},i=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=g((b,y,w)=>{const{layout:H,...n}=t;return n.file=r,n.url=o,p`${c()}${h(e)}`})});export{s as Content,f as __tla,a as compiledContent,s as default,r as file,t as frontmatter,i as getHeadings,l as rawContent,o as url};