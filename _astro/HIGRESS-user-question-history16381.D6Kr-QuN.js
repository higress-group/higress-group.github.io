import{c as g,__tla as p}from"./astro-component.DIa0fJKh.js";import{r as h,m as c,u,__tla as f}from"./constant.Ds720_7Q.js";import{__tla as y}from"./astro/assets-service.tyfV9CK3.js";let o,i,e,s,a,l,r,d=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u4ECB\u7ECD\u4E00\u4E0Bhigress</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress\u662F\u4E00\u6B3E\u9AD8\u6027\u80FD\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u5B83\u57FA\u4E8E\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u53D1\u5C55\u800C\u6765\uFF0C\u6838\u5FC3\u6784\u5EFA\u4E8E\u5F00\u6E90\u7684Istio\u4E0EEnvoy\u4E4B\u4E0A\u3002Higress\u7684\u4E3B\u8981\u7279\u70B9\u662F\u96C6\u6210\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u4EE5\u53CA\u5B89\u5168\u7F51\u5173\u7684\u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u4E09\u5408\u4E00\u7684\u9AD8\u5EA6\u96C6\u6210\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86\u90E8\u7F72\u548C\u8FD0\u7EF4\u6210\u672C\uFF0C\u540C\u65F6\u4FDD\u6301\u4E86\u5F3A\u5927\u7684\u529F\u80FD\u7279\u6027\u3002\u5B83\u6DF1\u5EA6\u96C6\u6210\u4E86Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u786E\u4FDD\u4E86\u4E0E\u73B0\u6709\u4E91\u539F\u751F\u751F\u6001\u7684\u65E0\u7F1D\u5BF9\u63A5\u3002</p>
<h3 id="higress\u7684\u5173\u952E\u7279\u70B9\u4E0E\u4F18\u52BF">Higress\u7684\u5173\u952E\u7279\u70B9\u4E0E\u4F18\u52BF\uFF1A</h3>
<ol>
<li>
<p><strong>\u4E09\u5408\u4E00\u9AD8\u96C6\u6210\u80FD\u529B</strong>\uFF1AHigress\u5C06\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u548C\u5B89\u5168\u7F51\u5173\u6574\u5408\u5728\u4E00\u8D77\uFF0C\u7B80\u5316\u4E86\u67B6\u6784\uFF0C\u63D0\u9AD8\u4E86\u6548\u7387\u3002\u5B83\u80FD\u5904\u7406\u5357\u5317\u5411\uFF08\u5916\u90E8\u5230\u96C6\u7FA4\uFF09\u548C\u4E1C\u897F\u5411\uFF08\u96C6\u7FA4\u5185\u90E8\uFF09\u7684\u6D41\u91CF\uFF0C\u540C\u65F6\u5185\u7F6EWAF\u6A21\u5757\uFF0C\u63D0\u4F9B\u5B89\u5168\u9632\u62A4\u3002</p>
</li>
<li>
<p><strong>\u4E91\u539F\u751F\u53CB\u597D</strong>\uFF1A\u5B8C\u5168\u517C\u5BB9Kubernetes\u751F\u6001\uFF0C\u652F\u6301Ingress\u4E0EGateway API\u6807\u51C6\uFF0C\u6613\u4E8E\u878D\u5165\u73B0\u6709\u7684\u4E91\u539F\u751F\u6280\u672F\u6808\uFF0C\u5E76\u4E14\u652F\u6301\u4ECENginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u964D\u4F4E\u4E86\u8FC1\u79FB\u6210\u672C\u3002</p>
</li>
<li>
<p><strong>\u9AD8\u6027\u80FD\u4E0E\u4F4E\u5EF6\u8FDF</strong>\uFF1A\u57FA\u4E8EEnvoy\u7684\u9AD8\u6027\u80FD\u4EE3\u7406\uFF0C\u4F18\u5316\u4E86\u7F51\u7EDC\u8BF7\u6C42\u7684\u5904\u7406\u901F\u5EA6\uFF0C\u51CF\u5C11\u94FE\u8DEF\u5F80\u8FD4\u65F6\u95F4\uFF08RT\uFF09\uFF0C\u63D0\u5347\u4E86\u7528\u6237\u4F53\u9A8C\u3002</p>
</li>
<li>
<p><strong>\u5F3A\u5927\u7684\u5B89\u5168\u9632\u62A4</strong>\uFF1A\u5185\u7F6E\u7684WAF\u6A21\u5757\u80FD\u591F\u5728\u5355\u4E00\u7F51\u5173\u5C42\u9762\u5B8C\u6210Web\u5E94\u7528\u9632\u706B\u5899\u7684\u529F\u80FD\uFF0C\u65E0\u9700\u989D\u5916\u90E8\u7F72\uFF0C\u589E\u5F3A\u4E86\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u3002</p>
</li>
<li>
<p><strong>\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u9A8C\u8BC1</strong>\uFF1AHigress\u8D77\u6E90\u4E8E\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u7684\u5B9E\u6218\u9700\u6C42\uFF0C\u5DF2\u7ECF\u8FC7\u53CC11\u3001\u53CC12\u7B49\u5927\u89C4\u6A21\u6D41\u91CF\u8003\u9A8C\uFF0C\u652F\u6301\u5305\u62EC\u4F18\u9177\u3001\u9489\u9489\u5728\u5185\u7684\u591A\u4E2A\u91CD\u8981\u4E1A\u52A1\uFF0C\u8BC1\u660E\u4E86\u5176\u7A33\u5B9A\u6027\u548C\u53EF\u9760\u6027\u3002</p>
</li>
</ol>
<h3 id="\u4E3A\u4EC0\u4E48\u9009\u62E9envoy--istio\u4F5C\u4E3A\u5185\u6838">\u4E3A\u4EC0\u4E48\u9009\u62E9Envoy + Istio\u4F5C\u4E3A\u5185\u6838\uFF1A</h3>
<ul>
<li>
<p><strong>\u4E91\u539F\u751F\u8D8B\u52BF</strong>\uFF1AEnvoy\u7684\u589E\u957F\u8FC5\u901F\uFF0C\u5C24\u5176\u662F\u5728Service Mesh\u9886\u57DF\uFF0CIstio + Envoy\u7684\u7EC4\u5408\u80FD\u591F\u8986\u76D6\u670D\u52A1\u95F4\u901A\u4FE1\uFF08\u4E1C\u897F\u5411\uFF09\u548C\u5916\u90E8\u8BBF\u95EE\uFF08\u5357\u5317\u5411\uFF09\u7684\u5168\u573A\u666F\u6D41\u91CF\u7BA1\u7406\u3002</p>
</li>
<li>
<p><strong>\u6807\u51C6\u5316\u4E0E\u517C\u5BB9\u6027</strong>\uFF1A\u5C3D\u7BA1Ingress\u5B58\u5728\u4E00\u4E9B\u9650\u5236\uFF0C\u4F46\u4ECD\u662F\u4E3B\u6D41\u6807\u51C6\u3002Envoy\u4E0EIstio\u7684\u7ED3\u5408\u65E2\u7B26\u5408\u5F53\u524D\u6807\u51C6\uFF0C\u53C8\u4E3A\u672A\u6765\u7684Gateway API\u6807\u51C6\u505A\u597D\u51C6\u5907\uFF0C\u786E\u4FDD\u4E86\u957F\u671F\u7684\u6280\u672F\u5148\u8FDB\u6027\u548C\u751F\u6001\u9002\u5E94\u6027\u3002</p>
</li>
</ul>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4EE5\u5176\u72EC\u7279\u7684\u8BBE\u8BA1\u548C\u5F3A\u5927\u7684\u529F\u80FD\u96C6\u5408\uFF0C\u6210\u4E3A\u73B0\u4EE3\u4E91\u539F\u751F\u67B6\u6784\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u7EC4\u4EF6\uFF0C\u7279\u522B\u9002\u5408\u8FFD\u6C42\u9AD8\u6548\u3001\u5B89\u5168\u3001\u6613\u7EF4\u62A4\u7684\u5FAE\u670D\u52A1\u90E8\u7F72\u73AF\u5883\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16382" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,s={id:"question-history-16381",title:"\u4ECB\u7ECD\u4E00\u4E0Bhigress",date:"2024-09-26",category:"expertConsultation",description:"Higress\u662F\u4E00\u6B3E\u9AD8\u6027\u80FD\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u5B83\u57FA\u4E8E\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u53D1\u5C55\u800C\u6765\uFF0C\u6838\u5FC3\u6784\u5EFA\u4E8E\u5F00\u6E90\u7684Istio\u4E0EEnvoy\u4E4B\u4E0A\u3002Higress\u7684\u4E3B\u8981\u7279\u70B9\u662F\u96C6\u6210\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u4EE5\u53CA\u5B89\u5168\u7F51\u5173\u7684\u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u4E09\u5408\u4E00\u7684\u9AD8\u5EA6\u96C6\u6210\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86\u90E8\u7F72\u548C\u8FD0\u7EF4\u6210\u672C\uFF0C\u540C\u65F6\u4FDD\u6301\u4E86\u5F3A\u5927\u7684\u529F\u80FD\u7279\u6027\u3002\u5B83",tags:["higress","\u4ECB\u7ECD"],keywords:["higress","\u4ECB\u7ECD"]},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16381.md",r=void 0,l=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u4ECB\u7ECD\u4E00\u4E0Bhigress  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress\u662F\u4E00\u6B3E\u9AD8\u6027\u80FD\u7684\u4E91\u539F\u751FAPI\u7F51\u5173\uFF0C\u5B83\u57FA\u4E8E\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u53D1\u5C55\u800C\u6765\uFF0C\u6838\u5FC3\u6784\u5EFA\u4E8E\u5F00\u6E90\u7684Istio\u4E0EEnvoy\u4E4B\u4E0A\u3002Higress\u7684\u4E3B\u8981\u7279\u70B9\u662F\u96C6\u6210\u4E86\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u4EE5\u53CA\u5B89\u5168\u7F51\u5173\u7684\u529F\u80FD\uFF0C\u5B9E\u73B0\u4E86\u4E09\u5408\u4E00\u7684\u9AD8\u5EA6\u96C6\u6210\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86\u90E8\u7F72\u548C\u8FD0\u7EF4\u6210\u672C\uFF0C\u540C\u65F6\u4FDD\u6301\u4E86\u5F3A\u5927\u7684\u529F\u80FD\u7279\u6027\u3002\u5B83\u6DF1\u5EA6\u96C6\u6210\u4E86Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u786E\u4FDD\u4E86\u4E0E\u73B0\u6709\u4E91\u539F\u751F\u751F\u6001\u7684\u65E0\u7F1D\u5BF9\u63A5\u3002

### Higress\u7684\u5173\u952E\u7279\u70B9\u4E0E\u4F18\u52BF\uFF1A

1. **\u4E09\u5408\u4E00\u9AD8\u96C6\u6210\u80FD\u529B**\uFF1AHigress\u5C06\u6D41\u91CF\u7F51\u5173\u3001\u5FAE\u670D\u52A1\u7F51\u5173\u548C\u5B89\u5168\u7F51\u5173\u6574\u5408\u5728\u4E00\u8D77\uFF0C\u7B80\u5316\u4E86\u67B6\u6784\uFF0C\u63D0\u9AD8\u4E86\u6548\u7387\u3002\u5B83\u80FD\u5904\u7406\u5357\u5317\u5411\uFF08\u5916\u90E8\u5230\u96C6\u7FA4\uFF09\u548C\u4E1C\u897F\u5411\uFF08\u96C6\u7FA4\u5185\u90E8\uFF09\u7684\u6D41\u91CF\uFF0C\u540C\u65F6\u5185\u7F6EWAF\u6A21\u5757\uFF0C\u63D0\u4F9B\u5B89\u5168\u9632\u62A4\u3002

2. **\u4E91\u539F\u751F\u53CB\u597D**\uFF1A\u5B8C\u5168\u517C\u5BB9Kubernetes\u751F\u6001\uFF0C\u652F\u6301Ingress\u4E0EGateway API\u6807\u51C6\uFF0C\u6613\u4E8E\u878D\u5165\u73B0\u6709\u7684\u4E91\u539F\u751F\u6280\u672F\u6808\uFF0C\u5E76\u4E14\u652F\u6301\u4ECENginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u964D\u4F4E\u4E86\u8FC1\u79FB\u6210\u672C\u3002

3. **\u9AD8\u6027\u80FD\u4E0E\u4F4E\u5EF6\u8FDF**\uFF1A\u57FA\u4E8EEnvoy\u7684\u9AD8\u6027\u80FD\u4EE3\u7406\uFF0C\u4F18\u5316\u4E86\u7F51\u7EDC\u8BF7\u6C42\u7684\u5904\u7406\u901F\u5EA6\uFF0C\u51CF\u5C11\u94FE\u8DEF\u5F80\u8FD4\u65F6\u95F4\uFF08RT\uFF09\uFF0C\u63D0\u5347\u4E86\u7528\u6237\u4F53\u9A8C\u3002

4. **\u5F3A\u5927\u7684\u5B89\u5168\u9632\u62A4**\uFF1A\u5185\u7F6E\u7684WAF\u6A21\u5757\u80FD\u591F\u5728\u5355\u4E00\u7F51\u5173\u5C42\u9762\u5B8C\u6210Web\u5E94\u7528\u9632\u706B\u5899\u7684\u529F\u80FD\uFF0C\u65E0\u9700\u989D\u5916\u90E8\u7F72\uFF0C\u589E\u5F3A\u4E86\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u3002

5. **\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u9A8C\u8BC1**\uFF1AHigress\u8D77\u6E90\u4E8E\u963F\u91CC\u5DF4\u5DF4\u5185\u90E8\u7684\u5B9E\u6218\u9700\u6C42\uFF0C\u5DF2\u7ECF\u8FC7\u53CC11\u3001\u53CC12\u7B49\u5927\u89C4\u6A21\u6D41\u91CF\u8003\u9A8C\uFF0C\u652F\u6301\u5305\u62EC\u4F18\u9177\u3001\u9489\u9489\u5728\u5185\u7684\u591A\u4E2A\u91CD\u8981\u4E1A\u52A1\uFF0C\u8BC1\u660E\u4E86\u5176\u7A33\u5B9A\u6027\u548C\u53EF\u9760\u6027\u3002

### \u4E3A\u4EC0\u4E48\u9009\u62E9Envoy + Istio\u4F5C\u4E3A\u5185\u6838\uFF1A

- **\u4E91\u539F\u751F\u8D8B\u52BF**\uFF1AEnvoy\u7684\u589E\u957F\u8FC5\u901F\uFF0C\u5C24\u5176\u662F\u5728Service Mesh\u9886\u57DF\uFF0CIstio + Envoy\u7684\u7EC4\u5408\u80FD\u591F\u8986\u76D6\u670D\u52A1\u95F4\u901A\u4FE1\uFF08\u4E1C\u897F\u5411\uFF09\u548C\u5916\u90E8\u8BBF\u95EE\uFF08\u5357\u5317\u5411\uFF09\u7684\u5168\u573A\u666F\u6D41\u91CF\u7BA1\u7406\u3002
  
- **\u6807\u51C6\u5316\u4E0E\u517C\u5BB9\u6027**\uFF1A\u5C3D\u7BA1Ingress\u5B58\u5728\u4E00\u4E9B\u9650\u5236\uFF0C\u4F46\u4ECD\u662F\u4E3B\u6D41\u6807\u51C6\u3002Envoy\u4E0EIstio\u7684\u7ED3\u5408\u65E2\u7B26\u5408\u5F53\u524D\u6807\u51C6\uFF0C\u53C8\u4E3A\u672A\u6765\u7684Gateway API\u6807\u51C6\u505A\u597D\u51C6\u5907\uFF0C\u786E\u4FDD\u4E86\u957F\u671F\u7684\u6280\u672F\u5148\u8FDB\u6027\u548C\u751F\u6001\u9002\u5E94\u6027\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4EE5\u5176\u72EC\u7279\u7684\u8BBE\u8BA1\u548C\u5F3A\u5927\u7684\u529F\u80FD\u96C6\u5408\uFF0C\u6210\u4E3A\u73B0\u4EE3\u4E91\u539F\u751F\u67B6\u6784\u4E2D\u4E0D\u53EF\u6216\u7F3A\u7684\u7EC4\u4EF6\uFF0C\u7279\u522B\u9002\u5408\u8FFD\u6C42\u9AD8\u6548\u3001\u5B89\u5168\u3001\u6613\u7EF4\u62A4\u7684\u5FAE\u670D\u52A1\u90E8\u7F72\u73AF\u5883\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A



 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16382)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return t},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"higress\u7684\u5173\u952E\u7279\u70B9\u4E0E\u4F18\u52BF",text:"Higress\u7684\u5173\u952E\u7279\u70B9\u4E0E\u4F18\u52BF\uFF1A"},{depth:3,slug:"\u4E3A\u4EC0\u4E48\u9009\u62E9envoy--istio\u4F5C\u4E3A\u5185\u6838",text:"\u4E3A\u4EC0\u4E48\u9009\u62E9Envoy + Istio\u4F5C\u4E3A\u5185\u6838\uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},o=g((I,b,v)=>{const{layout:E,...n}=s;return n.file=e,n.url=r,h`${c()}${u(t)}`})});export{o as Content,d as __tla,i as compiledContent,o as default,e as file,s as frontmatter,a as getHeadings,l as rawContent,r as url};
