import{c as g,__tla as c}from"./astro-component.BNo6A4i3.js";import{r as h,m as d,u,__tla as p}from"./constant.Cnf2nzHm.js";import{__tla as f}from"./astro/assets-service.lesyujvn.js";let s,i,r,o,a,l,t,H=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u4ECB\u7ECD</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u4E3B\u8981\u4F9D\u6258\u4E8E\u5176Ingress\u8D44\u6E90\u7684\u9AD8\u7EA7\u8DEF\u7531\u548C\u6D41\u91CF\u6CBB\u7406\u80FD\u529B\uFF0C\u7279\u522B\u662F\u901A\u8FC7Annotation\u6765\u5B9E\u73B0\u590D\u6742\u7684\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF\u7B56\u7565\u3002\u4E0B\u9762\u5C06\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5BF9Higress\u7684\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u5E76\u5C1D\u8BD5\u6784\u5EFA\u4E00\u4E2A\u7B80\u5316\u7684\u7406\u89E3\u6846\u67B6\u3002</p>
<h3 id="\u6D41\u91CF\u8F6C\u53D1\u57FA\u7840">\u6D41\u91CF\u8F6C\u53D1\u57FA\u7840</h3>
<p>Higress\u4F5C\u4E3AKubernetes\u96C6\u7FA4\u4E2D\u7684Ingress\u63A7\u5236\u5668\uFF0C\u8D1F\u8D23\u5904\u7406\u8FDB\u5165\u96C6\u7FA4\u7684HTTP\u548CHTTPS\u6D41\u91CF\uFF0C\u5E76\u6839\u636E\u5B9A\u4E49\u7684\u89C4\u5219\u5C06\u5176\u8DEF\u7531\u5230\u6B63\u786E\u7684\u540E\u7AEF\u670D\u52A1\u3002\u8FD9\u4E00\u8FC7\u7A0B\u7684\u5173\u952E\u5728\u4E8E\u5982\u4F55\u89E3\u6790Ingress\u8D44\u6E90\u4E2D\u5B9A\u4E49\u7684\u8DEF\u7531\u89C4\u5219\u548C\u6CE8\u89E3\uFF08Annotations\uFF09\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u89C4\u5219\u5E94\u7528\u4E8E\u5B9E\u9645\u7684\u7F51\u7EDC\u6D41\u91CF\u7BA1\u7406\u3002</p>
<h3 id="higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u5206\u6790">Higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u5206\u6790</h3>
<ol>
<li>
<p><strong>\u524D\u63D0\u6761\u4EF6</strong>\uFF1A</p>
<ul>
<li>\u5FC5\u987B\u5148\u5B89\u88C5Higress\u5E76\u914D\u7F6E\u597DKubernetes\u96C6\u7FA4\u53CAkubectl\u5DE5\u5177\u3002\u8FD9\u786E\u4FDD\u4E86Higress\u80FD\u591F\u8FD0\u884C\u5728\u9002\u5F53\u7684\u73AF\u5883\u4E2D\u5E76\u80FD\u4E0E\u96C6\u7FA4\u4EA4\u4E92\u3002</li>
</ul>
</li>
<li>
<p><strong>\u7070\u5EA6\u53D1\u5E03\u673A\u5236</strong>\uFF1A</p>
<ul>
<li><strong>\u57FA\u4E8EHeader</strong>\uFF1AHigress\u901A\u8FC7\u68C0\u67E5HTTP\u8BF7\u6C42\u5934\u4E2D\u7684\u7279\u5B9A\u5B57\u6BB5\uFF08\u5982<code dir="auto">higress</code>\uFF09\uFF0C\u6839\u636E\u9884\u5148\u8BBE\u5B9A\u7684\u89C4\u5219\uFF08\u5982\u503C\u4E3A<code dir="auto">always</code>\u6216\u7279\u5B9A\u7248\u672C\u6807\u8BC6\uFF09\uFF0C\u51B3\u5B9A\u662F\u5426\u5C06\u6D41\u91CF\u5BFC\u5411\u7070\u5EA6\u670D\u52A1\u3002\u8FD9\u79CD\u673A\u5236\u5141\u8BB8\u7CBE\u786E\u63A7\u5236\u54EA\u4E9B\u8BF7\u6C42\u5E94\u88AB\u91CD\u5B9A\u5411\u81F3\u65B0\u7248\u672C\u7684\u670D\u52A1\u3002</li>
<li><strong>\u57FA\u4E8ECookie</strong>\uFF1A\u7C7B\u4F3C\u5730\uFF0C\u4E5F\u53EF\u4EE5\u5229\u7528\u8BF7\u6C42\u4E2D\u7684Cookie\u4FE1\u606F\u6765\u8FDB\u884C\u6D41\u91CF\u5206\u5272\u3002\u4F8B\u5982\uFF0C\u82E5Cookie\u4E2D\u5B58\u5728\u7279\u5B9A\u952E\u503C\u5BF9\uFF08\u5982<code dir="auto">demo=always</code>\uFF09\uFF0C\u5219\u8BF7\u6C42\u88AB\u8F6C\u53D1\u81F3\u7070\u5EA6\u670D\u52A1\u3002</li>
<li><strong>\u57FA\u4E8E\u6743\u91CD</strong>\uFF1A\u901A\u8FC7\u8BBE\u5B9A\u4E0D\u540C\u670D\u52A1\u7684\u6743\u91CD\u767E\u5206\u6BD4\uFF0CHigress\u80FD\u591F\u5728\u8BF7\u6C42\u95F4\u81EA\u52A8\u5206\u914D\u6D41\u91CF\uFF0C\u5B9E\u73B0\u66F4\u5E73\u6ED1\u7684\u7248\u672C\u8FC7\u6E21\u3002\u6B64\u65B9\u6CD5\u4E0D\u4F9D\u8D56\u7279\u5B9A\u8BF7\u6C42\u5C5E\u6027\uFF0C\u800C\u662F\u57FA\u4E8E\u968F\u673A\u6216\u8F6E\u8BE2\u7B49\u7B97\u6CD5\u52A8\u6001\u5206\u914D\u3002</li>
</ul>
</li>
<li>
<p><strong>\u6D41\u91CF\u6CBB\u7406Annotation</strong>\uFF1A</p>
<ul>
<li>\u5173\u952E\u7684Annotation\u5982<code dir="auto">higress.io/canary</code>\u7528\u4E8E\u542F\u7528\u7070\u5EA6\u53D1\u5E03\u7279\u6027\uFF0C\u800C<code dir="auto">higress.io/canary-by-header</code>\u3001<code dir="auto">higress.io/canary-by-header-value</code>\u3001<code dir="auto">higress.io/canary-by-cookie</code>\u548C<code dir="auto">higress.io/canary-weight</code>\u7B49\u5219\u8FDB\u4E00\u6B65\u7EC6\u5316\u4E86\u6D41\u91CF\u5206\u914D\u7684\u89C4\u5219\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA">\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA</h3>
<p>\u867D\u7136\u539F\u59CB\u95EE\u9898\u5E76\u672A\u76F4\u63A5\u8BE2\u95EE\u5177\u4F53\u64CD\u4F5C\u6B65\u9AA4\uFF0C\u4F46\u57FA\u4E8E\u4E0A\u8FF0\u539F\u7406\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6982\u8FF0\u5982\u4F55\u5229\u7528Higress\u5B9E\u65BD\u7070\u5EA6\u53D1\u5E03\uFF1A</p>
<ol>
<li>
<p><strong>\u5B9A\u4E49Ingress\u8D44\u6E90</strong>\uFF1A\u521B\u5EFAIngress\u8D44\u6E90\u5B9A\u4E49\uFF0C\u5176\u4E2D\u5305\u542B\u5FC5\u8981\u7684\u8DEF\u7531\u89C4\u5219\u548C\u670D\u52A1\u540E\u7AEF\u4FE1\u606F\u3002\u4F8B\u5982\uFF0C\u4E3A\u7070\u5EA6\u670D\u52A1\u548C\u751F\u4EA7\u670D\u52A1\u5206\u522B\u521B\u5EFAIngress\u914D\u7F6E\uFF0C\u5E76\u901A\u8FC7Annotation\u6307\u5B9A\u7070\u5EA6\u53D1\u5E03\u7684\u89C4\u5219\u3002</p>
</li>
<li>
<p><strong>\u8BBE\u7F6E\u7070\u5EA6\u7B56\u7565</strong>\uFF1A\u6839\u636E\u9700\u6C42\u9009\u62E9\u7070\u5EA6\u53D1\u5E03\u7684\u7C7B\u578B\uFF08Header\u3001Cookie\u3001\u6216\u6743\u91CD\uFF09\uFF0C\u5E76\u901A\u8FC7\u76F8\u5E94\u7684Annotation\u8FDB\u884C\u914D\u7F6E\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528<code dir="auto">higress.io/canary-by-header: "higress"</code>\u548C\u76F8\u5E94\u7684\u503C\u6765\u5B9E\u73B0\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03\u3002</p>
</li>
<li>
<p><strong>\u9A8C\u8BC1\u914D\u7F6E</strong>\uFF1A\u5E94\u7528Ingress\u914D\u7F6E\u5E76\u4F7F\u7528\u6A21\u62DF\u8BF7\u6C42\u9A8C\u8BC1\u6D41\u91CF\u662F\u5426\u6309\u7167\u9884\u671F\u88AB\u8DEF\u7531\u81F3\u7070\u5EA6\u6216\u751F\u4EA7\u670D\u52A1\u3002\u8FD9\u4E00\u6B65\u9AA4\u53EF\u80FD\u6D89\u53CA\u53D1\u9001\u5E26\u6709\u7279\u5B9AHeader\u6216Cookie\u7684HTTP\u8BF7\u6C42\uFF0C\u5E76\u89C2\u5BDF\u54CD\u5E94\u6765\u6E90\u3002</p>
</li>
<li>
<p><strong>\u76D1\u63A7\u4E0E\u8C03\u6574</strong>\uFF1A\u6839\u636E\u5B9E\u9645\u6D41\u91CF\u60C5\u51B5\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u901A\u8FC7\u8C03\u6574\u6743\u91CD\u6216\u5176\u4ED6\u53C2\u6570\u6765\u4F18\u5316\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\uFF0C\u786E\u4FDD\u670D\u52A1\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002</p>
</li>
</ol>
<p>\u901A\u8FC7\u4E0A\u8FF0\u5206\u6790\uFF0C\u53EF\u4EE5\u770B\u5230Higress\u7684\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u9AD8\u5EA6\u4F9D\u8D56\u4E8E\u5176\u7075\u6D3B\u7684\u8DEF\u7531\u89C4\u5219\u914D\u7F6E\u80FD\u529B\u548C\u4E30\u5BCC\u7684Annotation\u7CFB\u7EDF\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u9AD8\u6548\u7684\u7070\u5EA6\u53D1\u5E03\u7BA1\u7406\u548C\u8DE8\u57DF\u652F\u6301\u3002[<a href="https://higress.io/docs/latest/user/quickstart/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5B89\u88C5Higress</a>] \u662F\u5B9E\u8DF5\u8FD9\u4E9B\u7B56\u7565\u7684\u524D\u63D0\uFF0C\u800C\u5177\u4F53\u7684\u914D\u7F6E\u793A\u4F8B\u5DF2\u5728\u524D\u8FF0\u77E5\u8BC6\u4E2D\u8BE6\u7EC6\u7ED9\u51FA\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16988" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,o={id:"question-history-16981",title:"higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u4ECB\u7ECD",date:"2024-09-26",category:"expertConsultation",description:"Higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u4E3B\u8981\u4F9D\u6258\u4E8E\u5176Ingress\u8D44\u6E90\u7684\u9AD8\u7EA7\u8DEF\u7531\u548C\u6D41\u91CF\u6CBB\u7406\u80FD\u529B\uFF0C\u7279\u522B\u662F\u901A\u8FC7Annotation\u6765\u5B9E\u73B0\u590D\u6742\u7684\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF\u7B56\u7565\u3002\u4E0B\u9762\u5C06\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5BF9Higress\u7684\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u5E76\u5C1D\u8BD5\u6784\u5EFA\u4E00\u4E2A\u7B80\u5316\u7684\u7406\u89E3\u6846\u67B6\u3002### \u6D41\u91CF\u8F6C\u53D1\u57FA\u7840Higress\u4F5C\u4E3AKubernetes\u96C6",tags:["higress","\u6D41\u91CF","\u8F6C\u53D1","\u539F\u7406","\u4ECB\u7ECD"],keywords:["higress","\u6D41\u91CF","\u8F6C\u53D1","\u539F\u7406","\u4ECB\u7ECD"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16981.md",t=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u4ECB\u7ECD  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u4E3B\u8981\u4F9D\u6258\u4E8E\u5176Ingress\u8D44\u6E90\u7684\u9AD8\u7EA7\u8DEF\u7531\u548C\u6D41\u91CF\u6CBB\u7406\u80FD\u529B\uFF0C\u7279\u522B\u662F\u901A\u8FC7Annotation\u6765\u5B9E\u73B0\u590D\u6742\u7684\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF\u7B56\u7565\u3002\u4E0B\u9762\u5C06\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5BF9Higress\u7684\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u5E76\u5C1D\u8BD5\u6784\u5EFA\u4E00\u4E2A\u7B80\u5316\u7684\u7406\u89E3\u6846\u67B6\u3002

### \u6D41\u91CF\u8F6C\u53D1\u57FA\u7840

Higress\u4F5C\u4E3AKubernetes\u96C6\u7FA4\u4E2D\u7684Ingress\u63A7\u5236\u5668\uFF0C\u8D1F\u8D23\u5904\u7406\u8FDB\u5165\u96C6\u7FA4\u7684HTTP\u548CHTTPS\u6D41\u91CF\uFF0C\u5E76\u6839\u636E\u5B9A\u4E49\u7684\u89C4\u5219\u5C06\u5176\u8DEF\u7531\u5230\u6B63\u786E\u7684\u540E\u7AEF\u670D\u52A1\u3002\u8FD9\u4E00\u8FC7\u7A0B\u7684\u5173\u952E\u5728\u4E8E\u5982\u4F55\u89E3\u6790Ingress\u8D44\u6E90\u4E2D\u5B9A\u4E49\u7684\u8DEF\u7531\u89C4\u5219\u548C\u6CE8\u89E3\uFF08Annotations\uFF09\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u89C4\u5219\u5E94\u7528\u4E8E\u5B9E\u9645\u7684\u7F51\u7EDC\u6D41\u91CF\u7BA1\u7406\u3002

### Higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u5206\u6790

1. **\u524D\u63D0\u6761\u4EF6**\uFF1A
   - \u5FC5\u987B\u5148\u5B89\u88C5Higress\u5E76\u914D\u7F6E\u597DKubernetes\u96C6\u7FA4\u53CAkubectl\u5DE5\u5177\u3002\u8FD9\u786E\u4FDD\u4E86Higress\u80FD\u591F\u8FD0\u884C\u5728\u9002\u5F53\u7684\u73AF\u5883\u4E2D\u5E76\u80FD\u4E0E\u96C6\u7FA4\u4EA4\u4E92\u3002

2. **\u7070\u5EA6\u53D1\u5E03\u673A\u5236**\uFF1A
   - **\u57FA\u4E8EHeader**\uFF1AHigress\u901A\u8FC7\u68C0\u67E5HTTP\u8BF7\u6C42\u5934\u4E2D\u7684\u7279\u5B9A\u5B57\u6BB5\uFF08\u5982\`higress\`\uFF09\uFF0C\u6839\u636E\u9884\u5148\u8BBE\u5B9A\u7684\u89C4\u5219\uFF08\u5982\u503C\u4E3A\`always\`\u6216\u7279\u5B9A\u7248\u672C\u6807\u8BC6\uFF09\uFF0C\u51B3\u5B9A\u662F\u5426\u5C06\u6D41\u91CF\u5BFC\u5411\u7070\u5EA6\u670D\u52A1\u3002\u8FD9\u79CD\u673A\u5236\u5141\u8BB8\u7CBE\u786E\u63A7\u5236\u54EA\u4E9B\u8BF7\u6C42\u5E94\u88AB\u91CD\u5B9A\u5411\u81F3\u65B0\u7248\u672C\u7684\u670D\u52A1\u3002
   - **\u57FA\u4E8ECookie**\uFF1A\u7C7B\u4F3C\u5730\uFF0C\u4E5F\u53EF\u4EE5\u5229\u7528\u8BF7\u6C42\u4E2D\u7684Cookie\u4FE1\u606F\u6765\u8FDB\u884C\u6D41\u91CF\u5206\u5272\u3002\u4F8B\u5982\uFF0C\u82E5Cookie\u4E2D\u5B58\u5728\u7279\u5B9A\u952E\u503C\u5BF9\uFF08\u5982\`demo=always\`\uFF09\uFF0C\u5219\u8BF7\u6C42\u88AB\u8F6C\u53D1\u81F3\u7070\u5EA6\u670D\u52A1\u3002
   - **\u57FA\u4E8E\u6743\u91CD**\uFF1A\u901A\u8FC7\u8BBE\u5B9A\u4E0D\u540C\u670D\u52A1\u7684\u6743\u91CD\u767E\u5206\u6BD4\uFF0CHigress\u80FD\u591F\u5728\u8BF7\u6C42\u95F4\u81EA\u52A8\u5206\u914D\u6D41\u91CF\uFF0C\u5B9E\u73B0\u66F4\u5E73\u6ED1\u7684\u7248\u672C\u8FC7\u6E21\u3002\u6B64\u65B9\u6CD5\u4E0D\u4F9D\u8D56\u7279\u5B9A\u8BF7\u6C42\u5C5E\u6027\uFF0C\u800C\u662F\u57FA\u4E8E\u968F\u673A\u6216\u8F6E\u8BE2\u7B49\u7B97\u6CD5\u52A8\u6001\u5206\u914D\u3002

3. **\u6D41\u91CF\u6CBB\u7406Annotation**\uFF1A
   - \u5173\u952E\u7684Annotation\u5982\`higress.io/canary\`\u7528\u4E8E\u542F\u7528\u7070\u5EA6\u53D1\u5E03\u7279\u6027\uFF0C\u800C\`higress.io/canary-by-header\`\u3001\`higress.io/canary-by-header-value\`\u3001\`higress.io/canary-by-cookie\`\u548C\`higress.io/canary-weight\`\u7B49\u5219\u8FDB\u4E00\u6B65\u7EC6\u5316\u4E86\u6D41\u91CF\u5206\u914D\u7684\u89C4\u5219\u3002

### \u5177\u4F53\u6B65\u9AA4\u89E3\u91CA

\u867D\u7136\u539F\u59CB\u95EE\u9898\u5E76\u672A\u76F4\u63A5\u8BE2\u95EE\u5177\u4F53\u64CD\u4F5C\u6B65\u9AA4\uFF0C\u4F46\u57FA\u4E8E\u4E0A\u8FF0\u539F\u7406\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6982\u8FF0\u5982\u4F55\u5229\u7528Higress\u5B9E\u65BD\u7070\u5EA6\u53D1\u5E03\uFF1A

1. **\u5B9A\u4E49Ingress\u8D44\u6E90**\uFF1A\u521B\u5EFAIngress\u8D44\u6E90\u5B9A\u4E49\uFF0C\u5176\u4E2D\u5305\u542B\u5FC5\u8981\u7684\u8DEF\u7531\u89C4\u5219\u548C\u670D\u52A1\u540E\u7AEF\u4FE1\u606F\u3002\u4F8B\u5982\uFF0C\u4E3A\u7070\u5EA6\u670D\u52A1\u548C\u751F\u4EA7\u670D\u52A1\u5206\u522B\u521B\u5EFAIngress\u914D\u7F6E\uFF0C\u5E76\u901A\u8FC7Annotation\u6307\u5B9A\u7070\u5EA6\u53D1\u5E03\u7684\u89C4\u5219\u3002

2. **\u8BBE\u7F6E\u7070\u5EA6\u7B56\u7565**\uFF1A\u6839\u636E\u9700\u6C42\u9009\u62E9\u7070\u5EA6\u53D1\u5E03\u7684\u7C7B\u578B\uFF08Header\u3001Cookie\u3001\u6216\u6743\u91CD\uFF09\uFF0C\u5E76\u901A\u8FC7\u76F8\u5E94\u7684Annotation\u8FDB\u884C\u914D\u7F6E\u3002\u4F8B\u5982\uFF0C\u4F7F\u7528\`higress.io/canary-by-header: "higress"\`\u548C\u76F8\u5E94\u7684\u503C\u6765\u5B9E\u73B0\u57FA\u4E8EHeader\u7684\u7070\u5EA6\u53D1\u5E03\u3002

3. **\u9A8C\u8BC1\u914D\u7F6E**\uFF1A\u5E94\u7528Ingress\u914D\u7F6E\u5E76\u4F7F\u7528\u6A21\u62DF\u8BF7\u6C42\u9A8C\u8BC1\u6D41\u91CF\u662F\u5426\u6309\u7167\u9884\u671F\u88AB\u8DEF\u7531\u81F3\u7070\u5EA6\u6216\u751F\u4EA7\u670D\u52A1\u3002\u8FD9\u4E00\u6B65\u9AA4\u53EF\u80FD\u6D89\u53CA\u53D1\u9001\u5E26\u6709\u7279\u5B9AHeader\u6216Cookie\u7684HTTP\u8BF7\u6C42\uFF0C\u5E76\u89C2\u5BDF\u54CD\u5E94\u6765\u6E90\u3002

4. **\u76D1\u63A7\u4E0E\u8C03\u6574**\uFF1A\u6839\u636E\u5B9E\u9645\u6D41\u91CF\u60C5\u51B5\u548C\u4E1A\u52A1\u9700\u6C42\uFF0C\u901A\u8FC7\u8C03\u6574\u6743\u91CD\u6216\u5176\u4ED6\u53C2\u6570\u6765\u4F18\u5316\u7070\u5EA6\u53D1\u5E03\u7B56\u7565\uFF0C\u786E\u4FDD\u670D\u52A1\u7A33\u5B9A\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002

\u901A\u8FC7\u4E0A\u8FF0\u5206\u6790\uFF0C\u53EF\u4EE5\u770B\u5230Higress\u7684\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u9AD8\u5EA6\u4F9D\u8D56\u4E8E\u5176\u7075\u6D3B\u7684\u8DEF\u7531\u89C4\u5219\u914D\u7F6E\u80FD\u529B\u548C\u4E30\u5BCC\u7684Annotation\u7CFB\u7EDF\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u9AD8\u6548\u7684\u7070\u5EA6\u53D1\u5E03\u7BA1\u7406\u548C\u8DE8\u57DF\u652F\u6301\u3002[[\u5B89\u88C5Higress](https://higress.io/docs/latest/user/quickstart/)] \u662F\u5B9E\u8DF5\u8FD9\u4E9B\u7B56\u7565\u7684\u524D\u63D0\uFF0C\u800C\u5177\u4F53\u7684\u914D\u7F6E\u793A\u4F8B\u5DF2\u5728\u524D\u8FF0\u77E5\u8BC6\u4E2D\u8BE6\u7EC6\u7ED9\u51FA\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u7070\u5EA6\u53D1\u5E03\u548C\u8DE8\u57DF-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16988)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return e},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u6D41\u91CF\u8F6C\u53D1\u57FA\u7840",text:"\u6D41\u91CF\u8F6C\u53D1\u57FA\u7840"},{depth:3,slug:"higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u5206\u6790",text:"Higress\u6D41\u91CF\u8F6C\u53D1\u539F\u7406\u5206\u6790"},{depth:3,slug:"\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA",text:"\u5177\u4F53\u6B65\u9AA4\u89E3\u91CA"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=g((y,b,k)=>{const{layout:I,...n}=o;return n.file=r,n.url=t,h`${d()}${u(e)}`})});export{s as Content,H as __tla,i as compiledContent,s as default,r as file,o as frontmatter,a as getHeadings,l as rawContent,t as url};
