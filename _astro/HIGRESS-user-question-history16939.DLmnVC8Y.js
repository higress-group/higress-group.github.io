import{c as u,__tla as g}from"./astro-component.CwRucF1h.js";import{r as p,m as h,u as c,__tla as f}from"./constant.C1VdaCsC.js";import{__tla as d}from"./astro/assets-service.Dd3mQuiC.js";let e,l,t,r,n,a,o,H=Promise.all([(()=>{try{return g}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return d}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u4E3A\u4EC0\u4E48\u9700\u8981\u4E91\u539F\u751F\u7F51\u5173\uFF1F</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>Higress\u4E4B\u6240\u4EE5\u9700\u8981\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u539F\u56E0\uFF0C\u4F9D\u6258\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u5206\u6790\uFF1A</p>
<ol>
<li>
<p><strong>\u4F20\u7EDF\u7F51\u5173\u7684\u5C40\u9650\u6027\uFF1A</strong></p>
<ul>
<li>\u4F20\u7EDF\u7F51\u5173\u5F80\u5F80\u5206\u4E3A\u6D41\u91CF\u7F51\u5173\u4E0E\u4E1A\u52A1\u7F51\u5173\u4E24\u5927\u7C7B\uFF0C\u5206\u522B\u5904\u7406\u5357\u5317\u5411\u6D41\u91CF\u548C\u4E1C\u897F\u5411\u6D41\u91CF\uFF0C\u4EE5\u53CA\u4E0D\u540C\u5C42\u7EA7\u7684\u670D\u52A1\u6CBB\u7406\u9700\u6C42\u3002\u4F46\u5728\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u5E94\u7528\u67B6\u6784\u5411\u5FAE\u670D\u52A1\u8F6C\u578B\uFF0C\u5BB9\u5668\u6280\u672F\u548CKubernetes\u6210\u4E3A\u4E3B\u6D41\uFF0C\u5355\u4E00\u804C\u8D23\u7684\u7F51\u5173\u96BE\u4EE5\u9AD8\u6548\u5E94\u5BF9\u590D\u6742\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u548C\u52A8\u6001\u53D8\u5316\u7684\u4E91\u73AF\u5883\u3002</li>
</ul>
</li>
<li>
<p><strong>\u4E91\u539F\u751F\u73AF\u5883\u7684\u9700\u6C42\uFF1A</strong></p>
<ul>
<li>\u4E91\u539F\u751F\u73AF\u5883\u5F3A\u8C03\u81EA\u52A8\u5316\u3001\u5F39\u6027\u4F38\u7F29\u548C\u5FAE\u670D\u52A1\u6CBB\u7406\u3002Kubernetes Ingress\u4F5C\u4E3A\u4E91\u539F\u751F\u751F\u6001\u7684\u6807\u51C6\u63A5\u53E3\uFF0C\u7B80\u5316\u4E86\u5916\u90E8\u8BBF\u95EE\u96C6\u7FA4\u5185\u90E8\u670D\u52A1\u7684\u914D\u7F6E\u7BA1\u7406\u3002\u7136\u800C\uFF0C\u539F\u751FIngress\u5728\u8DEF\u7531\u8868\u8FBE\u80FD\u529B\u7B49\u65B9\u9762\u5B58\u5728\u5C40\u9650\uFF0C\u4FC3\u4F7F\u4E86\u66F4\u5F3A\u5927\u3001\u7075\u6D3B\u7684\u4E91\u539F\u751F\u7F51\u5173\u89E3\u51B3\u65B9\u6848\u7684\u9700\u6C42\u3002</li>
</ul>
</li>
<li>
<p><strong>\u96C6\u6210\u4E0E\u6269\u5C55\u6027\uFF1A</strong></p>
<ul>
<li>Higress\u9009\u62E9Envoy + Istio\u4F5C\u4E3A\u5185\u6838\uFF0C\u662F\u56E0\u4E3A\u5B83\u4EEC\u5728\u4E91\u539F\u751F\u9886\u57DF\u5177\u6709\u5E7F\u6CDB\u7684\u63A5\u53D7\u5EA6\u548C\u5F3A\u5927\u7684\u529F\u80FD\u96C6\u3002Envoy\u4F5C\u4E3A\u9AD8\u6027\u80FD\u7684\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u7F51\u7EDC\u529F\u80FD\u548C\u53EF\u89C2\u6D4B\u6027\uFF1BIstio\u5219\u8FDB\u4E00\u6B65\u589E\u5F3A\u4E86\u670D\u52A1\u7F51\u683C\u7684\u80FD\u529B\uFF0C\u4F7F\u5F97\u6D41\u91CF\u7BA1\u7406\u548C\u5B89\u5168\u63A7\u5236\u66F4\u4E3A\u96C6\u4E2D\u548C\u9AD8\u6548\u3002\u8FD9\u79CD\u7EC4\u5408\u80FD\u591F\u66F4\u597D\u5730\u652F\u6301\u5FAE\u670D\u52A1\u95F4\u901A\u4FE1\u3001\u5B89\u5168\u63A7\u5236\u548C\u7B56\u7565\u5B9E\u65BD\u3002</li>
</ul>
</li>
<li>
<p><strong>\u4E00\u7AD9\u5F0F\u89E3\u51B3\u65B9\u6848\uFF1A</strong></p>
<ul>
<li>Higress\u8BBE\u8BA1\u4E3A\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u7684\u9AD8\u96C6\u6210\u5F62\u6001\uFF0C\u65E8\u5728\u964D\u4F4E\u90E8\u7F72\u8FD0\u7EF4\u6210\u672C\uFF0C\u63D0\u5347\u6548\u7387\u3002\u5B83\u4E0D\u4EC5\u652F\u6301\u5357\u5317\u5411\u6D41\u91CF\u7BA1\u7406\uFF0C\u8FD8\u6DF1\u5EA6\u96C6\u6210\u4E86Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u5B9E\u73B0\u4E86\u4E00\u7AD9\u5F0F\u7684\u670D\u52A1\u53D1\u73B0\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u9650\u6D41\u7194\u65AD\u7B49\u529F\u80FD\uFF0C\u7B80\u5316\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u7684\u7F51\u5173\u90E8\u7F72\u548C\u7BA1\u7406\u3002</li>
</ul>
</li>
<li>
<p><strong>\u70ED\u66F4\u65B0\u4E0E\u7075\u6D3B\u6027\uFF1A</strong></p>
<ul>
<li>\u4E0E\u4F20\u7EDF\u7684Nginx\u76F8\u6BD4\uFF0CHigress\u652F\u6301\u957F\u8FDE\u63A5\u70ED\u66F4\u65B0\uFF0C\u51CF\u5C11\u4E86\u914D\u7F6E\u53D8\u66F4\u5E26\u6765\u7684\u670D\u52A1\u4E2D\u65AD\u98CE\u9669\uFF0C\u63D0\u5347\u4E86\u670D\u52A1\u8FDE\u7EED\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002\u8FD9\u5BF9\u4E8E\u9891\u7E41\u66F4\u65B0\u914D\u7F6E\u7684\u4E91\u539F\u751F\u73AF\u5883\u81F3\u5173\u91CD\u8981\u3002</li>
</ul>
</li>
<li>
<p><strong>\u5B89\u5168\u4E0E\u6027\u80FD\uFF1A</strong></p>
<ul>
<li>\u5185\u7F6E\u7684\u5B89\u5168\u6A21\u5757\uFF0C\u5982WAF\uFF0C\u76F4\u63A5\u96C6\u6210\u5230Higress\u4E2D\uFF0C\u7B80\u5316\u4E86\u5B89\u5168\u9632\u62A4\u94FE\u8DEF\uFF0C\u964D\u4F4E\u4E86\u8BF7\u6C42\u5EF6\u8FDF\uFF0C\u540C\u65F6\u63D0\u5347\u4E86\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u3002</li>
</ul>
</li>
</ol>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4F5C\u4E3A\u4E00\u6B3E\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u662F\u4E3A\u4E86\u89E3\u51B3\u4F20\u7EDF\u7F51\u5173\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u9762\u4E34\u7684\u6311\u6218\uFF0C\u6EE1\u8DB3\u73B0\u4EE3\u5FAE\u670D\u52A1\u67B6\u6784\u5BF9\u9AD8\u96C6\u6210\u5EA6\u3001\u9AD8\u6027\u80FD\u3001\u6613\u8FD0\u7EF4\u3001\u5B89\u5168\u53EF\u63A7\u7684\u9700\u6C42\u3002\u901A\u8FC7\u5229\u7528Envoy\u548CIstio\u7684\u5F3A\u5927\u529B\u91CF\uFF0CHigress\u63D0\u4F9B\u4E86\u4E00\u4E2A\u66F4\u52A0\u9002\u5E94\u4E91\u539F\u751F\u8D8B\u52BF\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5E2E\u52A9\u7528\u6237\u6784\u5EFA\u66F4\u52A0\u5065\u58EE\u3001\u7075\u6D3B\u7684\u670D\u52A1\u67B6\u6784\u3002</p>
<p>\u76F8\u5173\u94FE\u63A5\uFF1A</p>
<ul>
<li><a href="https://link.zhihu.com/?target=https%3A//higress.cn/docs/latest/overview/what-is-higress/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u662F\u4EC0\u4E48?</a></li>
<li><a href="https://higress.io/docs/latest/plugins/authentication/ext-auth/?source=plugin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u5B98\u65B9\u6587\u6863 - \u5916\u90E8\u8BA4\u8BC1\u63D2\u4EF6</a></li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u652F\u6301\u914D\u7F6E\u70ED\u66F4\u65B0\u5417?\uFF1F</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress\u662F\u4EC0\u4E48?</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5F00\u6E90\u7684higress\u652F\u6301 mse\u7684\u9274\u6743\u6A21\u5757\u529F\u80FD\u5417</p>
</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16944" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,r={id:"question-history-16939",title:"\u4E3A\u4EC0\u4E48\u9700\u8981\u4E91\u539F\u751F\u7F51\u5173\uFF1F",date:"2024-09-26",category:"expertConsultation",description:"Higress\u4E4B\u6240\u4EE5\u9700\u8981\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u539F\u56E0\uFF0C\u4F9D\u6258\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u5206\u6790\uFF1A1. **\u4F20\u7EDF\u7F51\u5173\u7684\u5C40\u9650\u6027\uFF1A**   - \u4F20\u7EDF\u7F51\u5173\u5F80\u5F80\u5206\u4E3A\u6D41\u91CF\u7F51\u5173\u4E0E\u4E1A\u52A1\u7F51\u5173\u4E24\u5927\u7C7B\uFF0C\u5206\u522B\u5904\u7406\u5357\u5317\u5411\u6D41\u91CF\u548C\u4E1C\u897F\u5411\u6D41\u91CF\uFF0C\u4EE5\u53CA\u4E0D\u540C\u5C42\u7EA7\u7684\u670D\u52A1\u6CBB\u7406\u9700\u6C42\u3002\u4F46\u5728\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u5E94\u7528\u67B6\u6784\u5411\u5FAE\u670D\u52A1\u8F6C\u578B\uFF0C\u5BB9\u5668\u6280\u672F\u548CKubernetes\u6210",tags:["\u4E91\u539F\u751F","\u7F51\u5173","\u9700\u8981","Higress"],keywords:["\u4E91\u539F\u751F","\u7F51\u5173","\u9700\u8981","Higress"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16939.md",o=void 0,a=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u4E3A\u4EC0\u4E48\u9700\u8981\u4E91\u539F\u751F\u7F51\u5173\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

Higress\u4E4B\u6240\u4EE5\u9700\u8981\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u4E3B\u8981\u662F\u56E0\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u539F\u56E0\uFF0C\u4F9D\u6258\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u5206\u6790\uFF1A

1. **\u4F20\u7EDF\u7F51\u5173\u7684\u5C40\u9650\u6027\uFF1A**
   - \u4F20\u7EDF\u7F51\u5173\u5F80\u5F80\u5206\u4E3A\u6D41\u91CF\u7F51\u5173\u4E0E\u4E1A\u52A1\u7F51\u5173\u4E24\u5927\u7C7B\uFF0C\u5206\u522B\u5904\u7406\u5357\u5317\u5411\u6D41\u91CF\u548C\u4E1C\u897F\u5411\u6D41\u91CF\uFF0C\u4EE5\u53CA\u4E0D\u540C\u5C42\u7EA7\u7684\u670D\u52A1\u6CBB\u7406\u9700\u6C42\u3002\u4F46\u5728\u4E91\u539F\u751F\u65F6\u4EE3\uFF0C\u5E94\u7528\u67B6\u6784\u5411\u5FAE\u670D\u52A1\u8F6C\u578B\uFF0C\u5BB9\u5668\u6280\u672F\u548CKubernetes\u6210\u4E3A\u4E3B\u6D41\uFF0C\u5355\u4E00\u804C\u8D23\u7684\u7F51\u5173\u96BE\u4EE5\u9AD8\u6548\u5E94\u5BF9\u590D\u6742\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u548C\u52A8\u6001\u53D8\u5316\u7684\u4E91\u73AF\u5883\u3002

2. **\u4E91\u539F\u751F\u73AF\u5883\u7684\u9700\u6C42\uFF1A**
   - \u4E91\u539F\u751F\u73AF\u5883\u5F3A\u8C03\u81EA\u52A8\u5316\u3001\u5F39\u6027\u4F38\u7F29\u548C\u5FAE\u670D\u52A1\u6CBB\u7406\u3002Kubernetes Ingress\u4F5C\u4E3A\u4E91\u539F\u751F\u751F\u6001\u7684\u6807\u51C6\u63A5\u53E3\uFF0C\u7B80\u5316\u4E86\u5916\u90E8\u8BBF\u95EE\u96C6\u7FA4\u5185\u90E8\u670D\u52A1\u7684\u914D\u7F6E\u7BA1\u7406\u3002\u7136\u800C\uFF0C\u539F\u751FIngress\u5728\u8DEF\u7531\u8868\u8FBE\u80FD\u529B\u7B49\u65B9\u9762\u5B58\u5728\u5C40\u9650\uFF0C\u4FC3\u4F7F\u4E86\u66F4\u5F3A\u5927\u3001\u7075\u6D3B\u7684\u4E91\u539F\u751F\u7F51\u5173\u89E3\u51B3\u65B9\u6848\u7684\u9700\u6C42\u3002

3. **\u96C6\u6210\u4E0E\u6269\u5C55\u6027\uFF1A**
   - Higress\u9009\u62E9Envoy + Istio\u4F5C\u4E3A\u5185\u6838\uFF0C\u662F\u56E0\u4E3A\u5B83\u4EEC\u5728\u4E91\u539F\u751F\u9886\u57DF\u5177\u6709\u5E7F\u6CDB\u7684\u63A5\u53D7\u5EA6\u548C\u5F3A\u5927\u7684\u529F\u80FD\u96C6\u3002Envoy\u4F5C\u4E3A\u9AD8\u6027\u80FD\u7684\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u7F51\u7EDC\u529F\u80FD\u548C\u53EF\u89C2\u6D4B\u6027\uFF1BIstio\u5219\u8FDB\u4E00\u6B65\u589E\u5F3A\u4E86\u670D\u52A1\u7F51\u683C\u7684\u80FD\u529B\uFF0C\u4F7F\u5F97\u6D41\u91CF\u7BA1\u7406\u548C\u5B89\u5168\u63A7\u5236\u66F4\u4E3A\u96C6\u4E2D\u548C\u9AD8\u6548\u3002\u8FD9\u79CD\u7EC4\u5408\u80FD\u591F\u66F4\u597D\u5730\u652F\u6301\u5FAE\u670D\u52A1\u95F4\u901A\u4FE1\u3001\u5B89\u5168\u63A7\u5236\u548C\u7B56\u7565\u5B9E\u65BD\u3002

4. **\u4E00\u7AD9\u5F0F\u89E3\u51B3\u65B9\u6848\uFF1A**
   - Higress\u8BBE\u8BA1\u4E3A\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u7684\u9AD8\u96C6\u6210\u5F62\u6001\uFF0C\u65E8\u5728\u964D\u4F4E\u90E8\u7F72\u8FD0\u7EF4\u6210\u672C\uFF0C\u63D0\u5347\u6548\u7387\u3002\u5B83\u4E0D\u4EC5\u652F\u6301\u5357\u5317\u5411\u6D41\u91CF\u7BA1\u7406\uFF0C\u8FD8\u6DF1\u5EA6\u96C6\u6210\u4E86Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u5B9E\u73B0\u4E86\u4E00\u7AD9\u5F0F\u7684\u670D\u52A1\u53D1\u73B0\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u9650\u6D41\u7194\u65AD\u7B49\u529F\u80FD\uFF0C\u7B80\u5316\u4E86\u5FAE\u670D\u52A1\u67B6\u6784\u4E0B\u7684\u7F51\u5173\u90E8\u7F72\u548C\u7BA1\u7406\u3002

5. **\u70ED\u66F4\u65B0\u4E0E\u7075\u6D3B\u6027\uFF1A**
   - \u4E0E\u4F20\u7EDF\u7684Nginx\u76F8\u6BD4\uFF0CHigress\u652F\u6301\u957F\u8FDE\u63A5\u70ED\u66F4\u65B0\uFF0C\u51CF\u5C11\u4E86\u914D\u7F6E\u53D8\u66F4\u5E26\u6765\u7684\u670D\u52A1\u4E2D\u65AD\u98CE\u9669\uFF0C\u63D0\u5347\u4E86\u670D\u52A1\u8FDE\u7EED\u6027\u548C\u7528\u6237\u4F53\u9A8C\u3002\u8FD9\u5BF9\u4E8E\u9891\u7E41\u66F4\u65B0\u914D\u7F6E\u7684\u4E91\u539F\u751F\u73AF\u5883\u81F3\u5173\u91CD\u8981\u3002

6. **\u5B89\u5168\u4E0E\u6027\u80FD\uFF1A**
   - \u5185\u7F6E\u7684\u5B89\u5168\u6A21\u5757\uFF0C\u5982WAF\uFF0C\u76F4\u63A5\u96C6\u6210\u5230Higress\u4E2D\uFF0C\u7B80\u5316\u4E86\u5B89\u5168\u9632\u62A4\u94FE\u8DEF\uFF0C\u964D\u4F4E\u4E86\u8BF7\u6C42\u5EF6\u8FDF\uFF0C\u540C\u65F6\u63D0\u5347\u4E86\u7CFB\u7EDF\u7684\u5B89\u5168\u6027\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0CHigress\u4F5C\u4E3A\u4E00\u6B3E\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u662F\u4E3A\u4E86\u89E3\u51B3\u4F20\u7EDF\u7F51\u5173\u5728\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u9762\u4E34\u7684\u6311\u6218\uFF0C\u6EE1\u8DB3\u73B0\u4EE3\u5FAE\u670D\u52A1\u67B6\u6784\u5BF9\u9AD8\u96C6\u6210\u5EA6\u3001\u9AD8\u6027\u80FD\u3001\u6613\u8FD0\u7EF4\u3001\u5B89\u5168\u53EF\u63A7\u7684\u9700\u6C42\u3002\u901A\u8FC7\u5229\u7528Envoy\u548CIstio\u7684\u5F3A\u5927\u529B\u91CF\uFF0CHigress\u63D0\u4F9B\u4E86\u4E00\u4E2A\u66F4\u52A0\u9002\u5E94\u4E91\u539F\u751F\u8D8B\u52BF\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5E2E\u52A9\u7528\u6237\u6784\u5EFA\u66F4\u52A0\u5065\u58EE\u3001\u7075\u6D3B\u7684\u670D\u52A1\u67B6\u6784\u3002

\u76F8\u5173\u94FE\u63A5\uFF1A
- [Higress\u662F\u4EC0\u4E48?](https://link.zhihu.com/?target=https%3A//higress.cn/docs/latest/overview/what-is-higress/)
- [Higress\u5B98\u65B9\u6587\u6863 - \u5916\u90E8\u8BA4\u8BC1\u63D2\u4EF6](https://higress.io/docs/latest/plugins/authentication/ext-auth/?source=plugin)


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u652F\u6301\u914D\u7F6E\u70ED\u66F4\u65B0\u5417?\uFF1F 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress Higress\u662F\u4EC0\u4E48? 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5F00\u6E90\u7684higress\u652F\u6301 mse\u7684\u9274\u6743\u6A21\u5757\u529F\u80FD\u5417 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16944)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return s},n=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=u((b,y,_)=>{const{layout:m,...i}=r;return i.file=t,i.url=o,p`${h()}${c(s)}`})});export{e as Content,H as __tla,l as compiledContent,e as default,t as file,r as frontmatter,n as getHeadings,a as rawContent,o as url};
