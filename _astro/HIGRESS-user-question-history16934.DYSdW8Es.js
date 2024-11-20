import{c as g,__tla as h}from"./astro-component.DIa0fJKh.js";import{r as c,m as u,u as d,__tla as p}from"./constant.DnWM9dcJ.js";import{__tla as H}from"./astro/assets-service.tyfV9CK3.js";let t,n,r,s,a,l,o,f=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return H}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u8BF7\u95EE higress \u53EF\u4EE5\u5B9E\u73B0 nginx \u7684 rewrite \u4E48\uFF1F\u6211\u6CA1\u6709 k8s</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress \u662F\u4E00\u4E2A\u7528\u4E8E Kubernetes \u73AF\u5883\u4E0B\u7684 Ingress \u63A7\u5236\u5668\uFF0C\u5B83\u8BBE\u8BA1\u4E86\u7C7B\u4F3C\u4E8E Nginx \u7684 rewrite \u529F\u80FD\u6765\u5B9E\u73B0\u5728\u8BF7\u6C42\u88AB\u8F6C\u53D1\u5230\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u4FEE\u6539\u8BF7\u6C42\u7684\u8DEF\u5F84\uFF08Path\uFF09\u548C\u4E3B\u673A\u57DF\u540D\uFF08Host\uFF09\u3002\u56E0\u6B64\uFF0C\u7B54\u6848\u662F\u80AF\u5B9A\u7684\uFF0CHigress \u80FD\u591F\u5B9E\u73B0\u7C7B\u4F3C Nginx \u7684 rewrite \u529F\u80FD\u3002</p>
<h3 id="\u539F\u56E0\u5206\u6790\u4F9D\u6258\u6211\u4E86\u89E3\u7684\u77E5\u8BC6">\u539F\u56E0\u5206\u6790\uFF08\u4F9D\u6258\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF09:</h3>
<p>\u6839\u636E\u63D0\u4F9B\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF0CHigress \u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u6CE8\u89E3\u5B9E\u73B0\u4E86 rewrite \u529F\u80FD\uFF1A</p>
<ul>
<li>
<p><strong>higress.io/rewrite-target</strong>: \u7528\u4E8E\u91CD\u5199\u8BF7\u6C42\u7684 Path\u3002\u8FD9\u4E2A\u6CE8\u89E3\u652F\u6301\u6355\u83B7\u7EC4\uFF0C\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4ECE\u539F\u59CB\u8BF7\u6C42\u7684 URL \u4E2D\u6355\u83B7\u90E8\u5206\u5B57\u7B26\u4E32\u5E76\u5C06\u5176\u63D2\u5165\u5230\u65B0\u7684 Path \u4E2D\u3002</p>
</li>
<li>
<p><strong>higress.io/upstream-vhost</strong>: \u7528\u4E8E\u91CD\u5199\u8BF7\u6C42\u7684 Host\u3002</p>
</li>
</ul>
<h3 id="\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA">\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA\uFF1A</h3>
<p>\u867D\u7136\u60A8\u7684\u573A\u666F\u6CA1\u6709\u76F4\u63A5\u6D89\u53CA Kubernetes\uFF0C\u4F46\u4E3A\u4E86\u8BF4\u660E Higress \u5982\u4F55\u5B9E\u73B0\u7C7B\u4F3C Nginx \u7684 rewrite \u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8E\u4E0A\u8FF0\u77E5\u8BC6\u70B9\uFF0C\u6982\u8FF0\u5982\u679C\u5728 Kubernetes \u73AF\u5883\u4E0B\u914D\u7F6E Higress \u4EE5\u5B9E\u73B0 rewrite \u529F\u80FD\u7684\u903B\u8F91\u6B65\u9AA4\uFF1A</p>
<ol>
<li>
<p><strong>\u5B9A\u4E49\u91CD\u5199 Path \u793A\u4F8B</strong>:</p>
<ul>
<li>\u5047\u8BBE\u4F60\u60F3\u5C06\u6240\u6709\u8BBF\u95EE <code dir="auto">example.com/test</code> \u7684\u8BF7\u6C42\u91CD\u5199\u4E3A <code dir="auto">example.com/dev</code>\uFF0C\u4F60\u9700\u8981\u5728\u4F60\u7684 Ingress \u8D44\u6E90\u7684\u5143\u6570\u636E\u90E8\u5206\u6DFB\u52A0 <code dir="auto">higress.io/rewrite-target</code> \u6CE8\u89E3\uFF0C\u5E76\u8BBE\u7F6E\u5176\u503C\u4E3A <code dir="auto">/dev</code>\u3002\u8FD9\u4F1A\u544A\u8BC9 Higress \u5728\u8F6C\u53D1\u8BF7\u6C42\u524D\u4FEE\u6539 Path\u3002</li>
</ul>
</li>
<li>
<p><strong>\u91CD\u5199 Host \u793A\u4F8B</strong>:</p>
<ul>
<li>\u5982\u679C\u8981\u6539\u53D8\u8BF7\u6C42\u7684 Host\uFF0C\u4F8B\u5982\u5C06 <code dir="auto">example.com/test</code> \u7684 Host \u6539\u4E3A <code dir="auto">test.com/test</code>\uFF0C\u5219\u9700\u4F7F\u7528 <code dir="auto">higress.io/upstream-vhost</code> \u6CE8\u89E3\uFF0C\u5E76\u8BBE\u7F6E\u5176\u503C\u4E3A <code dir="auto">test.com</code>\u3002</li>
</ul>
</li>
<li>
<p><strong>HTTP \u81F3 HTTPS \u91CD\u5B9A\u5411</strong>:</p>
<ul>
<li>\u82E5\u8981\u914D\u7F6E\u4ECE HTTP \u81EA\u52A8\u91CD\u5B9A\u5411\u5230 HTTPS\uFF0C\u53EF\u4EE5\u5229\u7528 <code dir="auto">higress.io/ssl-redirect</code> \u6CE8\u89E3\u5E76\u8BBE\u7F6E\u5176\u503C\u4E3A <code dir="auto">"true"</code>\u3002\u8FD9\u786E\u4FDD\u4E86\u4EFB\u4F55\u5230\u8FBE\u7684 HTTP \u8BF7\u6C42\u90FD\u4F1A\u88AB\u91CD\u5B9A\u5411\u5230\u5BF9\u5E94\u7684 HTTPS \u7248\u672C\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA\uFF1A</h3>
<p>\u8FD9\u4E9B\u6B65\u9AA4\u5C55\u793A\u4E86 Higress \u5982\u4F55\u63D0\u4F9B\u4E0E Nginx rewrite \u7C7B\u4F3C\u7684\u529F\u80FD\uFF0C\u5141\u8BB8\u7528\u6237\u7075\u6D3B\u5730\u63A7\u5236\u8FDB\u5165\u96C6\u7FA4\u7684\u6D41\u91CF\u8DEF\u5F84\u548C\u76EE\u6807\uFF0C\u65E0\u8BBA\u662F\u8C03\u6574\u8BF7\u6C42\u7684\u8DEF\u5F84\u8FD8\u662F\u6267\u884C\u534F\u8BAE\u91CD\u5B9A\u5411\uFF0C\u90FD\u80FD\u6709\u6548\u5730\u7BA1\u7406\u670D\u52A1\u7684\u5BF9\u5916\u8BBF\u95EE\u65B9\u5F0F\u3002\u5C3D\u7BA1\u4F60\u7684\u95EE\u9898\u63D0\u53CA\u6CA1\u6709 K8s \u73AF\u5883\uFF0C\u4F46\u7406\u89E3 Higress \u5728 Kubernetes \u4E0A\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u6709\u52A9\u4E8E\u8BA4\u8BC6\u5230\u5176\u4F5C\u4E3A\u670D\u52A1\u8DEF\u7531\u89E3\u51B3\u65B9\u6848\u7684\u80FD\u529B\uFF0C\u5373\u4FBF\u5728\u975E K8s \u73AF\u5883\u4E0B\u65E0\u6CD5\u76F4\u63A5\u5E94\u7528\u8FD9\u4E9B\u914D\u7F6E\u3002</p>
<p>\u603B\u4E4B\uFF0CHigress \u7684\u786E\u5177\u5907\u5B9E\u73B0\u7C7B\u4F3C Nginx rewrite \u89C4\u5219\u7684\u529F\u80FD\uFF0C\u7279\u522B\u662F\u5728 Kubernetes \u96C6\u7FA4\u4E2D\u7BA1\u7406 HTTP(S) \u6D41\u91CF\u65F6\uFF0C\u901A\u8FC7\u5176\u7279\u5B9A\u7684\u6CE8\u89E3\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u8DEF\u7531\u548C\u91CD\u5199\u80FD\u529B\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Rewrite\u91CD\u5199Path\u548CHost\u3001\u914D\u7F6EHTTP\u91CD\u5B9A\u5411\u81F3HTTPS-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16936" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,s={id:"question-history-16934",title:"\u8BF7\u95EE higress \u53EF\u4EE5\u5B9E\u73B0 nginx \u7684 rewrite \u4E48\uFF1F\u6211\u6CA1\u6709 k8s",date:"2024-09-26",category:"expertConsultation",description:"Higress \u662F\u4E00\u4E2A\u7528\u4E8E Kubernetes \u73AF\u5883\u4E0B\u7684 Ingress \u63A7\u5236\u5668\uFF0C\u5B83\u8BBE\u8BA1\u4E86\u7C7B\u4F3C\u4E8E Nginx \u7684 rewrite \u529F\u80FD\u6765\u5B9E\u73B0\u5728\u8BF7\u6C42\u88AB\u8F6C\u53D1\u5230\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u4FEE\u6539\u8BF7\u6C42\u7684\u8DEF\u5F84\uFF08Path\uFF09\u548C\u4E3B\u673A\u57DF\u540D\uFF08Host\uFF09\u3002\u56E0\u6B64\uFF0C\u7B54\u6848\u662F\u80AF\u5B9A\u7684\uFF0CHigress \u80FD\u591F\u5B9E\u73B0\u7C7B\u4F3C Nginx \u7684 rewrite",tags:["higress","nginx","rewrite","\u5B9E\u73B0","k8s","\u8BF7\u95EE","\u53EF\u4EE5"],keywords:["higress","nginx","rewrite","\u5B9E\u73B0","k8s","\u8BF7\u95EE","\u53EF\u4EE5"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16934.md",o=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u8BF7\u95EE higress \u53EF\u4EE5\u5B9E\u73B0 nginx \u7684 rewrite \u4E48\uFF1F\u6211\u6CA1\u6709 k8s  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress \u662F\u4E00\u4E2A\u7528\u4E8E Kubernetes \u73AF\u5883\u4E0B\u7684 Ingress \u63A7\u5236\u5668\uFF0C\u5B83\u8BBE\u8BA1\u4E86\u7C7B\u4F3C\u4E8E Nginx \u7684 rewrite \u529F\u80FD\u6765\u5B9E\u73B0\u5728\u8BF7\u6C42\u88AB\u8F6C\u53D1\u5230\u540E\u7AEF\u670D\u52A1\u4E4B\u524D\uFF0C\u4FEE\u6539\u8BF7\u6C42\u7684\u8DEF\u5F84\uFF08Path\uFF09\u548C\u4E3B\u673A\u57DF\u540D\uFF08Host\uFF09\u3002\u56E0\u6B64\uFF0C\u7B54\u6848\u662F\u80AF\u5B9A\u7684\uFF0CHigress \u80FD\u591F\u5B9E\u73B0\u7C7B\u4F3C Nginx \u7684 rewrite \u529F\u80FD\u3002

### \u539F\u56E0\u5206\u6790\uFF08\u4F9D\u6258\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF09:

\u6839\u636E\u63D0\u4F9B\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF0CHigress \u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u6CE8\u89E3\u5B9E\u73B0\u4E86 rewrite \u529F\u80FD\uFF1A

- **higress.io/rewrite-target**: \u7528\u4E8E\u91CD\u5199\u8BF7\u6C42\u7684 Path\u3002\u8FD9\u4E2A\u6CE8\u89E3\u652F\u6301\u6355\u83B7\u7EC4\uFF0C\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4ECE\u539F\u59CB\u8BF7\u6C42\u7684 URL \u4E2D\u6355\u83B7\u90E8\u5206\u5B57\u7B26\u4E32\u5E76\u5C06\u5176\u63D2\u5165\u5230\u65B0\u7684 Path \u4E2D\u3002
  
- **higress.io/upstream-vhost**: \u7528\u4E8E\u91CD\u5199\u8BF7\u6C42\u7684 Host\u3002

### \u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA\uFF1A

\u867D\u7136\u60A8\u7684\u573A\u666F\u6CA1\u6709\u76F4\u63A5\u6D89\u53CA Kubernetes\uFF0C\u4F46\u4E3A\u4E86\u8BF4\u660E Higress \u5982\u4F55\u5B9E\u73B0\u7C7B\u4F3C Nginx \u7684 rewrite \u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8E\u4E0A\u8FF0\u77E5\u8BC6\u70B9\uFF0C\u6982\u8FF0\u5982\u679C\u5728 Kubernetes \u73AF\u5883\u4E0B\u914D\u7F6E Higress \u4EE5\u5B9E\u73B0 rewrite \u529F\u80FD\u7684\u903B\u8F91\u6B65\u9AA4\uFF1A

1. **\u5B9A\u4E49\u91CD\u5199 Path \u793A\u4F8B**:
   - \u5047\u8BBE\u4F60\u60F3\u5C06\u6240\u6709\u8BBF\u95EE \`example.com/test\` \u7684\u8BF7\u6C42\u91CD\u5199\u4E3A \`example.com/dev\`\uFF0C\u4F60\u9700\u8981\u5728\u4F60\u7684 Ingress \u8D44\u6E90\u7684\u5143\u6570\u636E\u90E8\u5206\u6DFB\u52A0 \`higress.io/rewrite-target\` \u6CE8\u89E3\uFF0C\u5E76\u8BBE\u7F6E\u5176\u503C\u4E3A \`/dev\`\u3002\u8FD9\u4F1A\u544A\u8BC9 Higress \u5728\u8F6C\u53D1\u8BF7\u6C42\u524D\u4FEE\u6539 Path\u3002

2. **\u91CD\u5199 Host \u793A\u4F8B**:
   - \u5982\u679C\u8981\u6539\u53D8\u8BF7\u6C42\u7684 Host\uFF0C\u4F8B\u5982\u5C06 \`example.com/test\` \u7684 Host \u6539\u4E3A \`test.com/test\`\uFF0C\u5219\u9700\u4F7F\u7528 \`higress.io/upstream-vhost\` \u6CE8\u89E3\uFF0C\u5E76\u8BBE\u7F6E\u5176\u503C\u4E3A \`test.com\`\u3002

3. **HTTP \u81F3 HTTPS \u91CD\u5B9A\u5411**:
   - \u82E5\u8981\u914D\u7F6E\u4ECE HTTP \u81EA\u52A8\u91CD\u5B9A\u5411\u5230 HTTPS\uFF0C\u53EF\u4EE5\u5229\u7528 \`higress.io/ssl-redirect\` \u6CE8\u89E3\u5E76\u8BBE\u7F6E\u5176\u503C\u4E3A \`"true"\`\u3002\u8FD9\u786E\u4FDD\u4E86\u4EFB\u4F55\u5230\u8FBE\u7684 HTTP \u8BF7\u6C42\u90FD\u4F1A\u88AB\u91CD\u5B9A\u5411\u5230\u5BF9\u5E94\u7684 HTTPS \u7248\u672C\u3002

### \u89E3\u91CA\uFF1A

\u8FD9\u4E9B\u6B65\u9AA4\u5C55\u793A\u4E86 Higress \u5982\u4F55\u63D0\u4F9B\u4E0E Nginx rewrite \u7C7B\u4F3C\u7684\u529F\u80FD\uFF0C\u5141\u8BB8\u7528\u6237\u7075\u6D3B\u5730\u63A7\u5236\u8FDB\u5165\u96C6\u7FA4\u7684\u6D41\u91CF\u8DEF\u5F84\u548C\u76EE\u6807\uFF0C\u65E0\u8BBA\u662F\u8C03\u6574\u8BF7\u6C42\u7684\u8DEF\u5F84\u8FD8\u662F\u6267\u884C\u534F\u8BAE\u91CD\u5B9A\u5411\uFF0C\u90FD\u80FD\u6709\u6548\u5730\u7BA1\u7406\u670D\u52A1\u7684\u5BF9\u5916\u8BBF\u95EE\u65B9\u5F0F\u3002\u5C3D\u7BA1\u4F60\u7684\u95EE\u9898\u63D0\u53CA\u6CA1\u6709 K8s \u73AF\u5883\uFF0C\u4F46\u7406\u89E3 Higress \u5728 Kubernetes \u4E0A\u5982\u4F55\u5B9E\u73B0\u8FD9\u4E9B\u529F\u80FD\u6709\u52A9\u4E8E\u8BA4\u8BC6\u5230\u5176\u4F5C\u4E3A\u670D\u52A1\u8DEF\u7531\u89E3\u51B3\u65B9\u6848\u7684\u80FD\u529B\uFF0C\u5373\u4FBF\u5728\u975E K8s \u73AF\u5883\u4E0B\u65E0\u6CD5\u76F4\u63A5\u5E94\u7528\u8FD9\u4E9B\u914D\u7F6E\u3002

\u603B\u4E4B\uFF0CHigress \u7684\u786E\u5177\u5907\u5B9E\u73B0\u7C7B\u4F3C Nginx rewrite \u89C4\u5219\u7684\u529F\u80FD\uFF0C\u7279\u522B\u662F\u5728 Kubernetes \u96C6\u7FA4\u4E2D\u7BA1\u7406 HTTP(S) \u6D41\u91CF\u65F6\uFF0C\u901A\u8FC7\u5176\u7279\u5B9A\u7684\u6CE8\u89E3\u7CFB\u7EDF\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u8DEF\u7531\u548C\u91CD\u5199\u80FD\u529B\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Rewrite\u91CD\u5199Path\u548CHost\u3001\u914D\u7F6EHTTP\u91CD\u5B9A\u5411\u81F3HTTPS-\u901A\u8FC7Ingress Annotation\u5B9E\u73B0\u9AD8\u9636\u6D41\u91CF\u6CBB\u7406 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16936)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return e},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u539F\u56E0\u5206\u6790\u4F9D\u6258\u6211\u4E86\u89E3\u7684\u77E5\u8BC6",text:"\u539F\u56E0\u5206\u6790\uFF08\u4F9D\u6258\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\uFF09:"},{depth:3,slug:"\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA",text:"\u5177\u4F53\u6B65\u9AA4\u4E0E\u89E3\u91CA\uFF1A"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA\uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},t=g((w,m,T)=>{const{layout:P,...i}=s;return i.file=r,i.url=o,c`${u()}${d(e)}`})});export{t as Content,f as __tla,n as compiledContent,t as default,r as file,s as frontmatter,a as getHeadings,l as rawContent,o as url};
