import{c as l,__tla as u}from"./astro-component.DIa0fJKh.js";import{r as h,m as p,u as c,__tla as d}from"./constant.BFWUArEa.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let s,n,r,t,a,g,i,v=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return d}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>knative \u5BF9\u63A5 higress</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5173\u4E8E\u95EE\u9898\u201Chigress knative \u5BF9\u63A5 higress\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u6790\u5E76\u63D0\u4F9B\u4EE5\u4E0B\u89E3\u7B54\uFF1A</p>
<h3 id="\u5206\u6790\u539F\u56E0">\u5206\u6790\u539F\u56E0</h3>
<p>\u7528\u6237\u53EF\u80FD\u60F3\u4E86\u89E3\u5982\u4F55\u5C06Higress\u4F5C\u4E3AKnative\u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\u6216\u8005\u5982\u4F55\u5728Knative\u73AF\u5883\u4E2D\u96C6\u6210Higress\u3002\u6839\u636E\u77E5\u8BC6\u5185\u5BB9\u4E2D\u7684\u4FE1\u606F\uFF0C\u5728Higress\u7684\u7248\u672C\u8BA1\u5212\u4E2D\uFF0C\u7279\u522B\u63D0\u5230\u4E86\u7248\u672Cv1.3.0\u5C06\u4F1A\u201C\u652F\u6301\u4F5C\u4E3AKnative\u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\u201D\u3002\u8FD9\u610F\u5473\u7740Higress\u56E2\u961F\u6709\u8BA1\u5212\u76F4\u63A5\u96C6\u6210\u5BF9Knative\u7684\u652F\u6301\u3002</p>
<h3 id="\u5177\u4F53\u6B65\u9AA4">\u5177\u4F53\u6B65\u9AA4</h3>
<p>\u867D\u7136\u77E5\u8BC6\u5185\u5BB9\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u5B9E\u73B0Higress\u4E0EKnative\u5BF9\u63A5\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u4E00\u822C\u7684\u96C6\u6210\u5B9E\u8DF5\u548CHigress\u7684\u7248\u672C\u8BA1\u5212\uFF0C\u63A8\u6D4B\u6574\u5408\u8FC7\u7A0B\u53EF\u80FD\u6D89\u53CA\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\uFF1A</p>
<ol>
<li>
<p><strong>\u73AF\u5883\u51C6\u5907</strong>\uFF1A</p>
<ul>
<li>\u786E\u4FDD\u4F60\u7684Knative\u73AF\u5883\u5DF2\u7ECF\u6B63\u786E\u90E8\u7F72\u5E76\u4E14\u8FD0\u884C\u826F\u597D\u3002</li>
<li>\u51C6\u5907\u6216\u66F4\u65B0\u81F3Higress\u7684v1.3.0\u6216\u66F4\u9AD8\u7248\u672C\uFF0C\u8BE5\u7248\u672C\u9884\u8BA1\u4E8E2023\u5E7411\u6708\u53D1\u5E03\uFF0C\u63D0\u4F9B\u4E86\u5BF9Knative\u96C6\u6210\u7684\u652F\u6301\u3002</li>
</ul>
</li>
<li>
<p><strong>\u914D\u7F6EHigress</strong>\uFF1A</p>
<ul>
<li>\u6839\u636EHigress v1.3.0\u53D1\u5E03\u65F6\u7684\u5B98\u65B9\u6587\u6863\uFF0C\u914D\u7F6EHigress\u4EE5\u8BC6\u522B\u548C\u8DEF\u7531\u5230Knative\u7684\u670D\u52A1\u3002\u8FD9\u53EF\u80FD\u5305\u62EC\u8BBE\u7F6E\u9002\u5F53\u7684\u8DEF\u7531\u89C4\u5219\u3001\u670D\u52A1\u53D1\u73B0\u673A\u5236\u4EE5\u53CA\u5FC5\u8981\u7684\u8BA4\u8BC1\u4E0E\u6388\u6743\u914D\u7F6E\u3002</li>
</ul>
</li>
<li>
<p><strong>\u8C03\u6574Knative\u914D\u7F6E</strong>\uFF1A</p>
<ul>
<li>\u5728Knative\u4FA7\uFF0C\u53EF\u80FD\u9700\u8981\u914D\u7F6E\u7F51\u7EDC\u8DEF\u7531\u6307\u5411Higress\u4F5C\u4E3A\u5165\u53E3\u7F51\u5173\uFF0C\u786E\u4FDD\u6D41\u91CF\u80FD\u591F\u88AB\u6B63\u786E\u5730\u4EE3\u7406\u5230Knative\u7684\u670D\u52A1\u5B9E\u4F8B\u4E0A\u3002</li>
</ul>
</li>
<li>
<p><strong>\u6D4B\u8BD5\u9A8C\u8BC1</strong>\uFF1A</p>
<ul>
<li>\u90E8\u7F72\u793A\u4F8B\u5E94\u7528\u5230Knative\uFF0C\u5E76\u901A\u8FC7Higress\u8BBF\u95EE\u8FD9\u4E9B\u5E94\u7528\uFF0C\u9A8C\u8BC1\u8BF7\u6C42\u662F\u5426\u80FD\u6B63\u5E38\u8DEF\u7531\u53CA\u54CD\u5E94\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u89E3\u91CA">\u89E3\u91CA</h3>
<p>\u7531\u4E8E\u76F4\u63A5\u7684\u64CD\u4F5C\u6307\u5357\u4F9D\u8D56\u4E8EHigress\u672A\u6765\u53D1\u5E03\u7684\u7279\u5B9A\u7248\u672C\u548C\u5176\u4F34\u968F\u7684\u5B98\u65B9\u6587\u6863\uFF0C\u76EE\u524D\u65E0\u6CD5\u63D0\u4F9B\u786E\u5207\u7684\u6B65\u9AA4\u3002\u7528\u6237\u5E94\u5173\u6CE8Higress\u7684\u5B98\u65B9\u66F4\u65B0\uFF0C\u7279\u522B\u662Fv1.3.0\u7248\u672C\u7684\u53D1\u5E03\uFF0C\u8BE5\u7248\u672C\u5C06\u5305\u542B\u5177\u4F53\u7684\u96C6\u6210\u8BF4\u660E\u548C\u6700\u4F73\u5B9E\u8DF5\u3002\u5728\u5B9E\u9645\u64CD\u4F5C\u524D\uFF0C\u67E5\u9605\u6700\u65B0\u7684\u5B98\u65B9\u6587\u6863\u548C\u793E\u533A\u8BA8\u8BBA\u5C06\u662F\u83B7\u53D6\u6700\u51C6\u786E\u6307\u5BFC\u7684\u6700\u4F73\u9014\u5F84\u3002</p>
<h3 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879</h3>
<ul>
<li>\u8BF7\u7559\u610FHigress\u7684\u5B98\u65B9\u516C\u544A\u548C\u6587\u6863\u66F4\u65B0\uFF0C\u5C24\u5176\u662F\u5728\u8BA1\u5212\u5B9E\u65BD\u5BF9\u63A5\u524D\uFF0C\u786E\u8BA4\u6240\u4F9D\u8D56\u7684Higress\u7248\u672C\u786E\u5B9E\u5305\u542B\u4E86Knative\u96C6\u6210\u7684\u529F\u80FD\u3002</li>
<li>\u8003\u8651\u5230\u4F01\u4E1A\u7248\u4E0E\u5F00\u6E90\u7248\u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0C\u5982\u679C\u662F\u5728\u4F01\u4E1A\u73AF\u5883\u4E2D\u90E8\u7F72\uFF0C\u8FD8\u9700\u53C2\u8003\u4F01\u4E1A\u7248\u7684\u7279\u5B9A\u6587\u6863\u548C\u6CE8\u610F\u4E8B\u9879\u3002</li>
</ul>
<p>\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u867D\u7136\u5F53\u524D\u65E0\u6CD5\u63D0\u4F9B\u8BE6\u5C3D\u7684\u5B9E\u65BD\u6B65\u9AA4\uFF0C\u4F46\u6839\u636EHigress\u7684\u7248\u672C\u8BA1\u5212\uFF0C\u5BF9\u63A5Knative\u7684\u80FD\u529B\u5DF2\u88AB\u89C4\u5212\uFF0C\u7528\u6237\u5E94\u8DDF\u8FDB\u5B98\u65B9\u8D44\u6E90\u4EE5\u83B7\u53D6\u6700\u65B0\u4E14\u51C6\u786E\u7684\u96C6\u6210\u6307\u5BFC\u3002[<a href="https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/opensergo-gray.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u5BF9\u63A5OpenSergo\u5B9E\u73B0\u5168\u94FE\u8DEF\u7070\u5EA6\u6587\u6863</a>] \u548C [<a href="https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/roadmap.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress\u7248\u672C\u8BA1\u5212</a>] \u662F\u8DDF\u8FDB\u6B64\u95EE\u9898\u8FDB\u5C55\u7684\u91CD\u8981\u53C2\u8003\u8D44\u6599\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5BF9\u63A5 OpenSergo \u5B9E\u73B0\u5168\u94FE\u8DEF\u7070\u5EA6</p>
</li>
<li>
<p>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u7248\u672C\u8BA1\u5212</p>
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
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16987" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,t={id:"question-history-16980",title:"knative \u5BF9\u63A5 higress",date:"2024-09-26",category:"expertConsultation",description:"\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5173\u4E8E\u95EE\u9898\u201Chigress knative \u5BF9\u63A5 higress\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u6790\u5E76\u63D0\u4F9B\u4EE5\u4E0B\u89E3\u7B54\uFF1A### \u5206\u6790\u539F\u56E0\u7528\u6237\u53EF\u80FD\u60F3\u4E86\u89E3\u5982\u4F55\u5C06Higress\u4F5C\u4E3AKnative\u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\u6216\u8005\u5982\u4F55\u5728Knative\u73AF\u5883\u4E2D\u96C6\u6210Higress\u3002\u6839\u636E\u77E5\u8BC6\u5185\u5BB9\u4E2D\u7684\u4FE1\u606F\uFF0C\u5728Higress\u7684\u7248\u672C\u8BA1\u5212\u4E2D\uFF0C\u7279\u522B",tags:["higress","knative","\u5BF9\u63A5"],keywords:["higress","knative","\u5BF9\u63A5"]},r="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16980.md",i=void 0,g=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 knative \u5BF9\u63A5 higress  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u5185\u5BB9\uFF0C\u5173\u4E8E\u95EE\u9898\u201Chigress knative \u5BF9\u63A5 higress\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5206\u6790\u5E76\u63D0\u4F9B\u4EE5\u4E0B\u89E3\u7B54\uFF1A

### \u5206\u6790\u539F\u56E0

\u7528\u6237\u53EF\u80FD\u60F3\u4E86\u89E3\u5982\u4F55\u5C06Higress\u4F5C\u4E3AKnative\u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\u6216\u8005\u5982\u4F55\u5728Knative\u73AF\u5883\u4E2D\u96C6\u6210Higress\u3002\u6839\u636E\u77E5\u8BC6\u5185\u5BB9\u4E2D\u7684\u4FE1\u606F\uFF0C\u5728Higress\u7684\u7248\u672C\u8BA1\u5212\u4E2D\uFF0C\u7279\u522B\u63D0\u5230\u4E86\u7248\u672Cv1.3.0\u5C06\u4F1A\u201C\u652F\u6301\u4F5C\u4E3AKnative\u7684\u7F51\u7EDC\u5C42\u4F7F\u7528\u201D\u3002\u8FD9\u610F\u5473\u7740Higress\u56E2\u961F\u6709\u8BA1\u5212\u76F4\u63A5\u96C6\u6210\u5BF9Knative\u7684\u652F\u6301\u3002

### \u5177\u4F53\u6B65\u9AA4

\u867D\u7136\u77E5\u8BC6\u5185\u5BB9\u4E2D\u5E76\u672A\u76F4\u63A5\u63D0\u4F9B\u5B9E\u73B0Higress\u4E0EKnative\u5BF9\u63A5\u7684\u8BE6\u7EC6\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u4E00\u822C\u7684\u96C6\u6210\u5B9E\u8DF5\u548CHigress\u7684\u7248\u672C\u8BA1\u5212\uFF0C\u63A8\u6D4B\u6574\u5408\u8FC7\u7A0B\u53EF\u80FD\u6D89\u53CA\u4EE5\u4E0B\u51E0\u4E2A\u65B9\u9762\uFF1A

1. **\u73AF\u5883\u51C6\u5907**\uFF1A
   - \u786E\u4FDD\u4F60\u7684Knative\u73AF\u5883\u5DF2\u7ECF\u6B63\u786E\u90E8\u7F72\u5E76\u4E14\u8FD0\u884C\u826F\u597D\u3002
   - \u51C6\u5907\u6216\u66F4\u65B0\u81F3Higress\u7684v1.3.0\u6216\u66F4\u9AD8\u7248\u672C\uFF0C\u8BE5\u7248\u672C\u9884\u8BA1\u4E8E2023\u5E7411\u6708\u53D1\u5E03\uFF0C\u63D0\u4F9B\u4E86\u5BF9Knative\u96C6\u6210\u7684\u652F\u6301\u3002

2. **\u914D\u7F6EHigress**\uFF1A
   - \u6839\u636EHigress v1.3.0\u53D1\u5E03\u65F6\u7684\u5B98\u65B9\u6587\u6863\uFF0C\u914D\u7F6EHigress\u4EE5\u8BC6\u522B\u548C\u8DEF\u7531\u5230Knative\u7684\u670D\u52A1\u3002\u8FD9\u53EF\u80FD\u5305\u62EC\u8BBE\u7F6E\u9002\u5F53\u7684\u8DEF\u7531\u89C4\u5219\u3001\u670D\u52A1\u53D1\u73B0\u673A\u5236\u4EE5\u53CA\u5FC5\u8981\u7684\u8BA4\u8BC1\u4E0E\u6388\u6743\u914D\u7F6E\u3002

3. **\u8C03\u6574Knative\u914D\u7F6E**\uFF1A
   - \u5728Knative\u4FA7\uFF0C\u53EF\u80FD\u9700\u8981\u914D\u7F6E\u7F51\u7EDC\u8DEF\u7531\u6307\u5411Higress\u4F5C\u4E3A\u5165\u53E3\u7F51\u5173\uFF0C\u786E\u4FDD\u6D41\u91CF\u80FD\u591F\u88AB\u6B63\u786E\u5730\u4EE3\u7406\u5230Knative\u7684\u670D\u52A1\u5B9E\u4F8B\u4E0A\u3002

4. **\u6D4B\u8BD5\u9A8C\u8BC1**\uFF1A
   - \u90E8\u7F72\u793A\u4F8B\u5E94\u7528\u5230Knative\uFF0C\u5E76\u901A\u8FC7Higress\u8BBF\u95EE\u8FD9\u4E9B\u5E94\u7528\uFF0C\u9A8C\u8BC1\u8BF7\u6C42\u662F\u5426\u80FD\u6B63\u5E38\u8DEF\u7531\u53CA\u54CD\u5E94\u3002

### \u89E3\u91CA

\u7531\u4E8E\u76F4\u63A5\u7684\u64CD\u4F5C\u6307\u5357\u4F9D\u8D56\u4E8EHigress\u672A\u6765\u53D1\u5E03\u7684\u7279\u5B9A\u7248\u672C\u548C\u5176\u4F34\u968F\u7684\u5B98\u65B9\u6587\u6863\uFF0C\u76EE\u524D\u65E0\u6CD5\u63D0\u4F9B\u786E\u5207\u7684\u6B65\u9AA4\u3002\u7528\u6237\u5E94\u5173\u6CE8Higress\u7684\u5B98\u65B9\u66F4\u65B0\uFF0C\u7279\u522B\u662Fv1.3.0\u7248\u672C\u7684\u53D1\u5E03\uFF0C\u8BE5\u7248\u672C\u5C06\u5305\u542B\u5177\u4F53\u7684\u96C6\u6210\u8BF4\u660E\u548C\u6700\u4F73\u5B9E\u8DF5\u3002\u5728\u5B9E\u9645\u64CD\u4F5C\u524D\uFF0C\u67E5\u9605\u6700\u65B0\u7684\u5B98\u65B9\u6587\u6863\u548C\u793E\u533A\u8BA8\u8BBA\u5C06\u662F\u83B7\u53D6\u6700\u51C6\u786E\u6307\u5BFC\u7684\u6700\u4F73\u9014\u5F84\u3002

### \u6CE8\u610F\u4E8B\u9879

- \u8BF7\u7559\u610FHigress\u7684\u5B98\u65B9\u516C\u544A\u548C\u6587\u6863\u66F4\u65B0\uFF0C\u5C24\u5176\u662F\u5728\u8BA1\u5212\u5B9E\u65BD\u5BF9\u63A5\u524D\uFF0C\u786E\u8BA4\u6240\u4F9D\u8D56\u7684Higress\u7248\u672C\u786E\u5B9E\u5305\u542B\u4E86Knative\u96C6\u6210\u7684\u529F\u80FD\u3002
- \u8003\u8651\u5230\u4F01\u4E1A\u7248\u4E0E\u5F00\u6E90\u7248\u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0C\u5982\u679C\u662F\u5728\u4F01\u4E1A\u73AF\u5883\u4E2D\u90E8\u7F72\uFF0C\u8FD8\u9700\u53C2\u8003\u4F01\u4E1A\u7248\u7684\u7279\u5B9A\u6587\u6863\u548C\u6CE8\u610F\u4E8B\u9879\u3002

\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u867D\u7136\u5F53\u524D\u65E0\u6CD5\u63D0\u4F9B\u8BE6\u5C3D\u7684\u5B9E\u65BD\u6B65\u9AA4\uFF0C\u4F46\u6839\u636EHigress\u7684\u7248\u672C\u8BA1\u5212\uFF0C\u5BF9\u63A5Knative\u7684\u80FD\u529B\u5DF2\u88AB\u89C4\u5212\uFF0C\u7528\u6237\u5E94\u8DDF\u8FDB\u5B98\u65B9\u8D44\u6E90\u4EE5\u83B7\u53D6\u6700\u65B0\u4E14\u51C6\u786E\u7684\u96C6\u6210\u6307\u5BFC\u3002[[Higress\u5BF9\u63A5OpenSergo\u5B9E\u73B0\u5168\u94FE\u8DEF\u7070\u5EA6\u6587\u6863](https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/opensergo-gray.md)] \u548C [[Higress\u7248\u672C\u8BA1\u5212](https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/roadmap.md)] \u662F\u8DDF\u8FDB\u6B64\u95EE\u9898\u8FDB\u5C55\u7684\u91CD\u8981\u53C2\u8003\u8D44\u6599\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5BF9\u63A5 OpenSergo \u5B9E\u73B0\u5168\u94FE\u8DEF\u7070\u5EA6 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u7248\u672C\u8BA1\u5212 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16987)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return e},a=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u539F\u56E0",text:"\u5206\u6790\u539F\u56E0"},{depth:3,slug:"\u5177\u4F53\u6B65\u9AA4",text:"\u5177\u4F53\u6B65\u9AA4"},{depth:3,slug:"\u89E3\u91CA",text:"\u89E3\u91CA"},{depth:3,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},s=l((H,b,m)=>{const{layout:K,...o}=t;return o.file=r,o.url=i,h`${p()}${c(e)}`})});export{s as Content,v as __tla,n as compiledContent,s as default,r as file,t as frontmatter,a as getHeadings,g as rawContent,i as url};
