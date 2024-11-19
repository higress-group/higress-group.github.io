import{c as l,__tla as u}from"./astro-component.DIa0fJKh.js";import{r as p,m as h,u as c,__tla as f}from"./constant.Ds720_7Q.js";import{__tla as I}from"./astro/assets-service.tyfV9CK3.js";let e,i,s,r,a,g,n,d=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return I}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>\u4ECEnginx \u5230 higress api gateway \u4E91\u539F\u751F\u7F51\u5173\u7684\u6F14\u8FDB\u53F2\u4ECB\u7ECD</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u56DE\u7B54\u95EE\u9898\u4E4B\u524D\uFF0C\u6211\u9700\u8981\u5148\u8BF4\u660E\u4E00\u70B9\uFF0C\u6839\u636E\u5F53\u524D\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u6211\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u6216\u5F15\u7528{{{\u77E5\u8BC6:}}}\u4E2D\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u793A\u610F\u6027\u7684\u5360\u4F4D\u7B26\uFF0C\u5E76\u6CA1\u6709\u5B9E\u9645\u7684\u94FE\u63A5\u6216\u6570\u636E\u586B\u5145\u5176\u4E2D\u3002\u4F46\u57FA\u4E8E\u60A8\u7684\u95EE\u9898\uFF0C\u6211\u53EF\u4EE5\u5C1D\u8BD5\u63D0\u4F9B\u5173\u4E8EHigress\u4ECENginx\u5230Higress API Gateway\uFF08\u4E91\u539F\u751F\u7F51\u5173\uFF09\u6F14\u8FDB\u53F2\u7684\u4E00\u4E2A\u6982\u62EC\u6027\u4ECB\u7ECD\uFF0C\u4EE5\u53CA\u4E00\u822C\u6027\u7684\u6307\u5BFC\u601D\u8DEF\uFF0C\u8FD9\u5C06\u4E0D\u4F9D\u8D56\u4E8E\u5177\u4F53\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u5185\u5BB9\u3002</p>
<h3 id="higress-api-gateway-\u6F14\u8FDB\u53F2\u6982\u89C8">Higress API Gateway \u6F14\u8FDB\u53F2\u6982\u89C8</h3>
<ol>
<li>
<p><strong>Nginx \u65F6\u4EE3</strong></p>
<ul>
<li><strong>\u8D77\u6E90</strong>\uFF1ANginx \u662F\u4E00\u6B3E\u9AD8\u6027\u80FD\u7684Web\u670D\u52A1\u5668\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4EE5\u5176\u7A33\u5B9A\u6027\u3001\u9AD8\u5E76\u53D1\u5904\u7406\u80FD\u529B\u548C\u4F4E\u5185\u5B58\u6D88\u8017\u8457\u79F0\u3002\u5728\u65E9\u671F\uFF0C\u5B83\u5E38\u88AB\u7528\u4E8E\u7B80\u5355\u7684\u8D1F\u8F7D\u5747\u8861\u3001\u9759\u6001\u5185\u5BB9\u670D\u52A1\u53CA\u4F5C\u4E3AAPI\u7F51\u5173\u7684\u57FA\u7840\u3002</li>
<li><strong>API\u7BA1\u7406</strong>\uFF1A\u968F\u7740\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u5174\u8D77\uFF0CNginx\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u548C\u6A21\u5757\uFF08\u5982ngx_http_lua_module\uFF09\u589E\u5F3A\uFF0C\u5F00\u59CB\u627F\u62C5API\u8DEF\u7531\u3001\u5B89\u5168\u63A7\u5236\u548C\u9650\u6D41\u7B49API\u7BA1\u7406\u529F\u80FD\u3002</li>
</ul>
</li>
<li>
<p><strong>\u4E91\u539F\u751F\u8D8B\u52BF\u7684\u5F71\u54CD</strong></p>
<ul>
<li><strong>\u9700\u6C42\u53D8\u5316</strong>\uFF1A\u968F\u7740\u4E91\u539F\u751F\u6280\u672F\u7684\u53D1\u5C55\uFF0C\u5E94\u7528\u90E8\u7F72\u8D8B\u5411\u4E8E\u5BB9\u5668\u5316\u3001\u5FAE\u670D\u52A1\u5316\uFF0C\u5BF9API\u7F51\u5173\u7684\u9700\u6C42\u4E5F\u66F4\u52A0\u590D\u6742\uFF0C\u5305\u62EC\u52A8\u6001\u914D\u7F6E\u3001\u81EA\u52A8\u6269\u7F29\u5BB9\u3001\u4E0EKubernetes\u7B49\u4E91\u5E73\u53F0\u6DF1\u5EA6\u96C6\u6210\u7B49\u3002</li>
<li><strong>\u4E0D\u8DB3\u663E\u73B0</strong>\uFF1A\u867D\u7136Nginx\u53EF\u4EE5\u901A\u8FC7\u5404\u79CD\u63D2\u4EF6\u548C\u811A\u672C\u589E\u5F3A\u529F\u80FD\uFF0C\u4F46\u5728\u52A8\u6001\u914D\u7F6E\u7BA1\u7406\u3001\u4E0E\u4E91\u539F\u751F\u751F\u6001\u7684\u65E0\u7F1D\u96C6\u6210\u7B49\u65B9\u9762\u9010\u6E10\u663E\u5F97\u529B\u4E0D\u4ECE\u5FC3\u3002</li>
</ul>
</li>
<li>
<p><strong>Higress API Gateway \u7684\u8BDE\u751F</strong></p>
<ul>
<li><strong>\u8BBE\u8BA1\u7406\u5FF5</strong>\uFF1A\u4E3A\u6EE1\u8DB3\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684API\u7BA1\u7406\u9700\u6C42\uFF0CHigress API Gateway\u5E94\u8FD0\u800C\u751F\uFF0C\u5B83\u8BBE\u8BA1\u4E4B\u521D\u4FBF\u5145\u5206\u8003\u8651\u4E86\u4E0EKubernetes\u7B49\u73B0\u4EE3\u4E91\u57FA\u7840\u8BBE\u65BD\u7684\u7D27\u5BC6\u96C6\u6210\uFF0C\u652F\u6301\u58F0\u660E\u5F0F\u914D\u7F6E\u3001\u81EA\u52A8\u53D1\u73B0\u670D\u52A1\u3001\u52A8\u6001\u8DEF\u7531\u7B49\u7279\u6027\u3002</li>
<li><strong>\u5173\u952E\u6280\u672F\u7279\u70B9</strong>\uFF1AHigress\u5F3A\u8C03\u6613\u7528\u6027\u3001\u7075\u6D3B\u6027\u548C\u9AD8\u6027\u80FD\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684API\u7BA1\u7406\u529F\u80FD\uFF0C\u5982\u8BA4\u8BC1\u9274\u6743\u3001\u6D41\u91CF\u63A7\u5236\u3001\u53EF\u89C2\u6D4B\u6027\u7B49\uFF0C\u5E76\u4E14\u80FD\u591F\u5F88\u597D\u5730\u9002\u5E94\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u5FEB\u901F\u8FED\u4EE3\u548C\u6269\u5C55\u9700\u6C42\u3002</li>
<li><strong>\u4E91\u539F\u751F\u96C6\u6210</strong>\uFF1A\u652F\u6301\u4E0EKubernetes Ingress\u8D44\u6E90\u65E0\u7F1D\u5BF9\u63A5\uFF0C\u5229\u7528CRD\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u8FDB\u884C\u914D\u7F6E\u7BA1\u7406\uFF0C\u5B9E\u73B0API\u8DEF\u7531\u7684\u58F0\u660E\u5F0F\u5B9A\u4E49\uFF0C\u540C\u65F6\u652F\u6301\u670D\u52A1\u7F51\u683C\uFF08\u5982Istio\uFF09\u7684\u96C6\u6210\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u670D\u52A1\u95F4\u7684\u901A\u4FE1\u5B89\u5168\u548C\u6548\u7387\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u5206\u6790\u4E0E\u5EFA\u8BAE">\u5206\u6790\u4E0E\u5EFA\u8BAE</h3>
<p>\u867D\u7136\u6CA1\u6709\u76F4\u63A5\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u5185\u5BB9\u53EF\u4EE5\u4F9D\u6258\uFF0C\u4F46\u57FA\u4E8E\u4E0A\u8FF0\u5206\u6790\uFF0C\u5982\u679C\u60A8\u6B63\u8003\u8651\u4ECENginx\u8FC1\u79FB\u5230Higress\u6216\u5176\u4ED6\u4E91\u539F\u751FAPI Gateway\uFF0C\u4EE5\u4E0B\u662F\u4E00\u822C\u6027\u6B65\u9AA4\u5EFA\u8BAE\uFF1A</p>
<ol>
<li><strong>\u8BC4\u4F30\u9700\u6C42</strong>\uFF1A\u660E\u786E\u60A8\u7684\u4E1A\u52A1\u5BF9API\u7F51\u5173\u7684\u5177\u4F53\u9700\u6C42\uFF0C\u7279\u522B\u662F\u662F\u5426\u9700\u8981\u4E91\u539F\u751F\u7279\u6027\uFF0C\u5982\u52A8\u6001\u914D\u7F6E\u3001Kubernetes\u96C6\u6210\u7B49\u3002</li>
<li><strong>\u6280\u672F\u8C03\u7814</strong>\uFF1A\u6DF1\u5165\u4E86\u89E3Higress\u6216\u5176\u4ED6\u4E91\u539F\u751FAPI Gateway\u7684\u529F\u80FD\u3001\u6027\u80FD\u3001\u793E\u533A\u652F\u6301\u5EA6\u7B49\uFF0C\u5BF9\u6BD4Nginx\u76EE\u524D\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u786E\u5B9A\u8FC1\u79FB\u7684\u5FC5\u8981\u6027\u548C\u53EF\u884C\u6027\u3002</li>
<li><strong>\u89C4\u5212\u8FC1\u79FB\u8DEF\u5F84</strong>\uFF1A\u8BBE\u8BA1\u8BE6\u7EC6\u7684\u8FC1\u79FB\u8BA1\u5212\uFF0C\u5305\u62EC\u9010\u6B65\u8FC1\u79FB\u7B56\u7565\u3001\u98CE\u9669\u8BC4\u4F30\u3001\u56DE\u6EDA\u65B9\u6848\u7B49\u3002</li>
<li><strong>\u6D4B\u8BD5\u90E8\u7F72</strong>\uFF1A\u5728\u975E\u751F\u4EA7\u73AF\u5883\u4E2D\u90E8\u7F72Higress\uFF0C\u8FDB\u884C\u529F\u80FD\u9A8C\u8BC1\u3001\u6027\u80FD\u6D4B\u8BD5\u548C\u7A33\u5B9A\u6027\u89C2\u5BDF\u3002</li>
<li><strong>\u9010\u6B65\u8FC1\u79FB\u4E0E\u76D1\u63A7</strong>\uFF1A\u6309\u7167\u8BA1\u5212\u9010\u6B65\u8FC1\u79FBAPI\u8DEF\u7531\u81F3Higress\uFF0C\u540C\u65F6\u5BC6\u5207\u76D1\u63A7\u7CFB\u7EDF\u6027\u80FD\u548C\u7A33\u5B9A\u6027\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FC1\u79FB\u901F\u5EA6\u548C\u7B56\u7565\u3002</li>
<li><strong>\u6587\u6863\u4E0E\u57F9\u8BAD</strong>\uFF1A\u66F4\u65B0\u76F8\u5173\u6587\u6863\uFF0C\u5BF9\u56E2\u961F\u6210\u5458\u8FDB\u884C\u65B0\u5E73\u53F0\u64CD\u4F5C\u548C\u7EF4\u62A4\u7684\u57F9\u8BAD\u3002</li>
</ol>
<p>\u8BF7\u6839\u636E\u5177\u4F53\u60C5\u51B5\u7075\u6D3B\u8C03\u6574\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u5E76\u7ED3\u5408\u5B9E\u9645\u4F7F\u7528\u7684{{\u77E5\u8BC6}}\u8D44\u6E90\u8FDB\u884C\u6DF1\u5165\u5B66\u4E60\u548C\u6280\u672F\u5B9E\u8DF5\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress FAQ</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16951" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,r={id:"question-history-16940",title:"\u4ECEnginx \u5230 higress api gateway \u4E91\u539F\u751F\u7F51\u5173\u7684\u6F14\u8FDB\u53F2\u4ECB\u7ECD",date:"2024-09-26",category:"expertConsultation",description:"\u56DE\u7B54\u95EE\u9898\u4E4B\u524D\uFF0C\u6211\u9700\u8981\u5148\u8BF4\u660E\u4E00\u70B9\uFF0C\u6839\u636E\u5F53\u524D\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u6211\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u6216\u5F15\u7528\u77E5\u8BC6:\u4E2D\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u793A\u610F\u6027\u7684\u5360\u4F4D\u7B26\uFF0C\u5E76\u6CA1\u6709\u5B9E\u9645\u7684\u94FE\u63A5\u6216\u6570\u636E\u586B\u5145\u5176\u4E2D\u3002\u4F46\u57FA\u4E8E\u60A8\u7684\u95EE\u9898\uFF0C\u6211\u53EF\u4EE5\u5C1D\u8BD5\u63D0\u4F9B\u5173\u4E8EHigress\u4ECENginx\u5230Higress API Gateway\uFF08\u4E91\u539F\u751F\u7F51\u5173\uFF09\u6F14\u8FDB\u53F2\u7684\u4E00\u4E2A\u6982\u62EC\u6027\u4ECB\u7ECD\uFF0C\u4EE5\u53CA\u4E00\u822C\u6027",tags:["higress","nginx","higress","api","gateway","\u4E91\u539F\u751F\u7F51\u5173","\u6F14\u8FDB\u53F2"],keywords:["higress","nginx","higress","api","gateway","\u4E91\u539F\u751F\u7F51\u5173","\u6F14\u8FDB\u53F2"]},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16940.md",n=void 0,g=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u4ECEnginx \u5230 higress api gateway \u4E91\u539F\u751F\u7F51\u5173\u7684\u6F14\u8FDB\u53F2\u4ECB\u7ECD  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u56DE\u7B54\u95EE\u9898\u4E4B\u524D\uFF0C\u6211\u9700\u8981\u5148\u8BF4\u660E\u4E00\u70B9\uFF0C\u6839\u636E\u5F53\u524D\u63D0\u4F9B\u7684\u4FE1\u606F\uFF0C\u6211\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u6216\u5F15\u7528{{{\u77E5\u8BC6:}}}\u4E2D\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u56E0\u4E3A\u8FD9\u662F\u4E00\u4E2A\u793A\u610F\u6027\u7684\u5360\u4F4D\u7B26\uFF0C\u5E76\u6CA1\u6709\u5B9E\u9645\u7684\u94FE\u63A5\u6216\u6570\u636E\u586B\u5145\u5176\u4E2D\u3002\u4F46\u57FA\u4E8E\u60A8\u7684\u95EE\u9898\uFF0C\u6211\u53EF\u4EE5\u5C1D\u8BD5\u63D0\u4F9B\u5173\u4E8EHigress\u4ECENginx\u5230Higress API Gateway\uFF08\u4E91\u539F\u751F\u7F51\u5173\uFF09\u6F14\u8FDB\u53F2\u7684\u4E00\u4E2A\u6982\u62EC\u6027\u4ECB\u7ECD\uFF0C\u4EE5\u53CA\u4E00\u822C\u6027\u7684\u6307\u5BFC\u601D\u8DEF\uFF0C\u8FD9\u5C06\u4E0D\u4F9D\u8D56\u4E8E\u5177\u4F53\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u5185\u5BB9\u3002

### Higress API Gateway \u6F14\u8FDB\u53F2\u6982\u89C8

1. **Nginx \u65F6\u4EE3**
   - **\u8D77\u6E90**\uFF1ANginx \u662F\u4E00\u6B3E\u9AD8\u6027\u80FD\u7684Web\u670D\u52A1\u5668\u548C\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u4EE5\u5176\u7A33\u5B9A\u6027\u3001\u9AD8\u5E76\u53D1\u5904\u7406\u80FD\u529B\u548C\u4F4E\u5185\u5B58\u6D88\u8017\u8457\u79F0\u3002\u5728\u65E9\u671F\uFF0C\u5B83\u5E38\u88AB\u7528\u4E8E\u7B80\u5355\u7684\u8D1F\u8F7D\u5747\u8861\u3001\u9759\u6001\u5185\u5BB9\u670D\u52A1\u53CA\u4F5C\u4E3AAPI\u7F51\u5173\u7684\u57FA\u7840\u3002
   - **API\u7BA1\u7406**\uFF1A\u968F\u7740\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u5174\u8D77\uFF0CNginx\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u548C\u6A21\u5757\uFF08\u5982ngx_http_lua_module\uFF09\u589E\u5F3A\uFF0C\u5F00\u59CB\u627F\u62C5API\u8DEF\u7531\u3001\u5B89\u5168\u63A7\u5236\u548C\u9650\u6D41\u7B49API\u7BA1\u7406\u529F\u80FD\u3002

2. **\u4E91\u539F\u751F\u8D8B\u52BF\u7684\u5F71\u54CD**
   - **\u9700\u6C42\u53D8\u5316**\uFF1A\u968F\u7740\u4E91\u539F\u751F\u6280\u672F\u7684\u53D1\u5C55\uFF0C\u5E94\u7528\u90E8\u7F72\u8D8B\u5411\u4E8E\u5BB9\u5668\u5316\u3001\u5FAE\u670D\u52A1\u5316\uFF0C\u5BF9API\u7F51\u5173\u7684\u9700\u6C42\u4E5F\u66F4\u52A0\u590D\u6742\uFF0C\u5305\u62EC\u52A8\u6001\u914D\u7F6E\u3001\u81EA\u52A8\u6269\u7F29\u5BB9\u3001\u4E0EKubernetes\u7B49\u4E91\u5E73\u53F0\u6DF1\u5EA6\u96C6\u6210\u7B49\u3002
   - **\u4E0D\u8DB3\u663E\u73B0**\uFF1A\u867D\u7136Nginx\u53EF\u4EE5\u901A\u8FC7\u5404\u79CD\u63D2\u4EF6\u548C\u811A\u672C\u589E\u5F3A\u529F\u80FD\uFF0C\u4F46\u5728\u52A8\u6001\u914D\u7F6E\u7BA1\u7406\u3001\u4E0E\u4E91\u539F\u751F\u751F\u6001\u7684\u65E0\u7F1D\u96C6\u6210\u7B49\u65B9\u9762\u9010\u6E10\u663E\u5F97\u529B\u4E0D\u4ECE\u5FC3\u3002

3. **Higress API Gateway \u7684\u8BDE\u751F**
   - **\u8BBE\u8BA1\u7406\u5FF5**\uFF1A\u4E3A\u6EE1\u8DB3\u4E91\u539F\u751F\u73AF\u5883\u4E0B\u7684API\u7BA1\u7406\u9700\u6C42\uFF0CHigress API Gateway\u5E94\u8FD0\u800C\u751F\uFF0C\u5B83\u8BBE\u8BA1\u4E4B\u521D\u4FBF\u5145\u5206\u8003\u8651\u4E86\u4E0EKubernetes\u7B49\u73B0\u4EE3\u4E91\u57FA\u7840\u8BBE\u65BD\u7684\u7D27\u5BC6\u96C6\u6210\uFF0C\u652F\u6301\u58F0\u660E\u5F0F\u914D\u7F6E\u3001\u81EA\u52A8\u53D1\u73B0\u670D\u52A1\u3001\u52A8\u6001\u8DEF\u7531\u7B49\u7279\u6027\u3002
   - **\u5173\u952E\u6280\u672F\u7279\u70B9**\uFF1AHigress\u5F3A\u8C03\u6613\u7528\u6027\u3001\u7075\u6D3B\u6027\u548C\u9AD8\u6027\u80FD\uFF0C\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684API\u7BA1\u7406\u529F\u80FD\uFF0C\u5982\u8BA4\u8BC1\u9274\u6743\u3001\u6D41\u91CF\u63A7\u5236\u3001\u53EF\u89C2\u6D4B\u6027\u7B49\uFF0C\u5E76\u4E14\u80FD\u591F\u5F88\u597D\u5730\u9002\u5E94\u5FAE\u670D\u52A1\u67B6\u6784\u7684\u5FEB\u901F\u8FED\u4EE3\u548C\u6269\u5C55\u9700\u6C42\u3002
   - **\u4E91\u539F\u751F\u96C6\u6210**\uFF1A\u652F\u6301\u4E0EKubernetes Ingress\u8D44\u6E90\u65E0\u7F1D\u5BF9\u63A5\uFF0C\u5229\u7528CRD\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u8FDB\u884C\u914D\u7F6E\u7BA1\u7406\uFF0C\u5B9E\u73B0API\u8DEF\u7531\u7684\u58F0\u660E\u5F0F\u5B9A\u4E49\uFF0C\u540C\u65F6\u652F\u6301\u670D\u52A1\u7F51\u683C\uFF08\u5982Istio\uFF09\u7684\u96C6\u6210\uFF0C\u8FDB\u4E00\u6B65\u63D0\u5347\u670D\u52A1\u95F4\u7684\u901A\u4FE1\u5B89\u5168\u548C\u6548\u7387\u3002

### \u5206\u6790\u4E0E\u5EFA\u8BAE

\u867D\u7136\u6CA1\u6709\u76F4\u63A5\u7684\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u5185\u5BB9\u53EF\u4EE5\u4F9D\u6258\uFF0C\u4F46\u57FA\u4E8E\u4E0A\u8FF0\u5206\u6790\uFF0C\u5982\u679C\u60A8\u6B63\u8003\u8651\u4ECENginx\u8FC1\u79FB\u5230Higress\u6216\u5176\u4ED6\u4E91\u539F\u751FAPI Gateway\uFF0C\u4EE5\u4E0B\u662F\u4E00\u822C\u6027\u6B65\u9AA4\u5EFA\u8BAE\uFF1A

1. **\u8BC4\u4F30\u9700\u6C42**\uFF1A\u660E\u786E\u60A8\u7684\u4E1A\u52A1\u5BF9API\u7F51\u5173\u7684\u5177\u4F53\u9700\u6C42\uFF0C\u7279\u522B\u662F\u662F\u5426\u9700\u8981\u4E91\u539F\u751F\u7279\u6027\uFF0C\u5982\u52A8\u6001\u914D\u7F6E\u3001Kubernetes\u96C6\u6210\u7B49\u3002
2. **\u6280\u672F\u8C03\u7814**\uFF1A\u6DF1\u5165\u4E86\u89E3Higress\u6216\u5176\u4ED6\u4E91\u539F\u751FAPI Gateway\u7684\u529F\u80FD\u3001\u6027\u80FD\u3001\u793E\u533A\u652F\u6301\u5EA6\u7B49\uFF0C\u5BF9\u6BD4Nginx\u76EE\u524D\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u786E\u5B9A\u8FC1\u79FB\u7684\u5FC5\u8981\u6027\u548C\u53EF\u884C\u6027\u3002
3. **\u89C4\u5212\u8FC1\u79FB\u8DEF\u5F84**\uFF1A\u8BBE\u8BA1\u8BE6\u7EC6\u7684\u8FC1\u79FB\u8BA1\u5212\uFF0C\u5305\u62EC\u9010\u6B65\u8FC1\u79FB\u7B56\u7565\u3001\u98CE\u9669\u8BC4\u4F30\u3001\u56DE\u6EDA\u65B9\u6848\u7B49\u3002
4. **\u6D4B\u8BD5\u90E8\u7F72**\uFF1A\u5728\u975E\u751F\u4EA7\u73AF\u5883\u4E2D\u90E8\u7F72Higress\uFF0C\u8FDB\u884C\u529F\u80FD\u9A8C\u8BC1\u3001\u6027\u80FD\u6D4B\u8BD5\u548C\u7A33\u5B9A\u6027\u89C2\u5BDF\u3002
5. **\u9010\u6B65\u8FC1\u79FB\u4E0E\u76D1\u63A7**\uFF1A\u6309\u7167\u8BA1\u5212\u9010\u6B65\u8FC1\u79FBAPI\u8DEF\u7531\u81F3Higress\uFF0C\u540C\u65F6\u5BC6\u5207\u76D1\u63A7\u7CFB\u7EDF\u6027\u80FD\u548C\u7A33\u5B9A\u6027\uFF0C\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FC1\u79FB\u901F\u5EA6\u548C\u7B56\u7565\u3002
6. **\u6587\u6863\u4E0E\u57F9\u8BAD**\uFF1A\u66F4\u65B0\u76F8\u5173\u6587\u6863\uFF0C\u5BF9\u56E2\u961F\u6210\u5458\u8FDB\u884C\u65B0\u5E73\u53F0\u64CD\u4F5C\u548C\u7EF4\u62A4\u7684\u57F9\u8BAD\u3002

\u8BF7\u6839\u636E\u5177\u4F53\u60C5\u51B5\u7075\u6D3B\u8C03\u6574\u4E0A\u8FF0\u6B65\u9AA4\uFF0C\u5E76\u7ED3\u5408\u5B9E\u9645\u4F7F\u7528\u7684{{\u77E5\u8BC6}}\u8D44\u6E90\u8FDB\u884C\u6DF1\u5165\u5B66\u4E60\u548C\u6280\u672F\u5B9E\u8DF5\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress FAQ 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16951)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},i=function(){return t},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"higress-api-gateway-\u6F14\u8FDB\u53F2\u6982\u89C8",text:"Higress API Gateway \u6F14\u8FDB\u53F2\u6982\u89C8"},{depth:3,slug:"\u5206\u6790\u4E0E\u5EFA\u8BAE",text:"\u5206\u6790\u4E0E\u5EFA\u8BAE"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=l((P,A,y)=>{const{layout:x,...o}=r;return o.file=s,o.url=n,p`${h()}${c(t)}`})});export{e as Content,d as __tla,i as compiledContent,e as default,s as file,r as frontmatter,a as getHeadings,g as rawContent,n as url};
