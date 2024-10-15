import{c as g,__tla as u}from"./astro-component.BNo6A4i3.js";import{r as d,m as c,u as h,__tla as p}from"./constant.Cnf2nzHm.js";import{__tla as f}from"./astro/assets-service.lesyujvn.js";let t,l,s,o,n,a,r,F=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>WAF\u914D\u7F6E\u4E0D\u751F\u6548</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u9488\u5BF9\u95EE\u9898\u201Chigress WAF\u914D\u7F6E\u4E0D\u751F\u6548\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u5206\u6790\u5E76\u5C1D\u8BD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002\u4EE5\u4E0B\u662F\u5206\u6790\u53CA\u5EFA\u8BAE\u6B65\u9AA4\uFF1A</p>
<h3 id="\u5206\u6790\u539F\u56E0">\u5206\u6790\u539F\u56E0</h3>
<ol>
<li><strong>\u914D\u7F6E\u9519\u8BEF</strong>\uFF1A\u68C0\u67E5WAF\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u7279\u522B\u662F\u81EA\u5B9A\u4E49\u89C4\u5219\u3001\u9ED8\u8BA4\u914D\u7F6E\u4EE5\u53CA\u5339\u914D\u89C4\u5219\u662F\u5426\u6309\u7167Higress\u7684\u8981\u6C42\u683C\u5F0F\u7F16\u5199\u3002</li>
<li><strong>\u8D44\u6E90\u5E94\u7528\u95EE\u9898</strong>\uFF1A\u786E\u4FDDWASM\u63D2\u4EF6\u914D\u7F6E\uFF08\u5982\u4E0A\u4F8B\u6240\u793A\u7684<code dir="auto">WasmPlugin</code>\u8D44\u6E90\uFF09\u5DF2\u6B63\u786E\u5E94\u7528\u4E8EKubernetes\u96C6\u7FA4\u4E2D\uFF0C\u4E14\u65E0\u9519\u8BEF\u6216\u8B66\u544A\u4FE1\u606F\u3002</li>
<li><strong>\u89C4\u5219\u751F\u6548\u8303\u56F4</strong>\uFF1A\u786E\u8BA4\u8BF7\u6C42\u7684Ingress\u8DEF\u5F84\u786E\u5B9E\u5339\u914D\u4E86\u914D\u7F6E\u4E2D\u9884\u671F\u751F\u6548\u7684\u89C4\u5219\uFF0C\u6BD4\u5982\u662F\u5426\u6B63\u786E\u6307\u5411\u4E86<code dir="auto">default/echo-ingress</code>\u6216\u5176\u5B83\u8BBE\u7F6E\u4E86WAF\u9632\u62A4\u7684\u8DEF\u7531\u3002</li>
<li><strong>WAF\u63D2\u4EF6\u72B6\u6001</strong>\uFF1A\u68C0\u67E5WAF\u63D2\u4EF6\uFF08\u4F8B\u5982<code dir="auto">go-waf</code>\uFF09\u662F\u5426\u6210\u529F\u90E8\u7F72\u5E76\u8FD0\u884C\u4E8EHigress\u7CFB\u7EDF\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u786E\u4FDD\u5176\u955C\u50CF\u5730\u5740\u6B63\u786E\u65E0\u8BEF\u4E14\u53EF\u8BBF\u95EE\u3002</li>
<li><strong>\u65E5\u5FD7\u4E0E\u8C03\u8BD5</strong>\uFF1A\u67E5\u770BHigress\u548CWAF\u63D2\u4EF6\u7684\u65E5\u5FD7\uFF0C\u7279\u522B\u662F<code dir="auto">SecDebugLogLevel</code>\u8BBE\u7F6E\u4E3A3\u65F6\u5E94\u80FD\u63D0\u4F9B\u66F4\u591A\u8C03\u8BD5\u4FE1\u606F\uFF0C\u5E2E\u52A9\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u3002</li>
</ol>
<h3 id="\u89E3\u51B3\u6B65\u9AA4">\u89E3\u51B3\u6B65\u9AA4</h3>
<h4 id="\u6B65\u9AA41\u9A8C\u8BC1\u914D\u7F6E\u8BED\u6CD5">\u6B65\u9AA41\uFF1A\u9A8C\u8BC1\u914D\u7F6E\u8BED\u6CD5</h4>
<ul>
<li>\u91CD\u65B0\u5BA1\u89C6\u60A8\u7684<code dir="auto">WasmPlugin</code>\u914D\u7F6E\uFF0C\u5BF9\u7167Higress\u5B98\u65B9\u6587\u6863\u6216\u793A\u4F8B\u4EE3\u7801\u68C0\u67E5\u662F\u5426\u6709\u683C\u5F0F\u9519\u8BEF\u6216\u9057\u6F0F\u3002</li>
</ul>
<h4 id="\u6B65\u9AA42\u68C0\u67E5\u90E8\u7F72\u72B6\u6001">\u6B65\u9AA42\uFF1A\u68C0\u67E5\u90E8\u7F72\u72B6\u6001</h4>
<ul>
<li>\u6267\u884C<code dir="auto">kubectl get wasmplugin -n higress-system</code>\uFF0C\u786E\u8BA4<code dir="auto">waf-go</code>\u63D2\u4EF6\u7684\u72B6\u6001\uFF0C\u786E\u4FDD\u5B83\u5904\u4E8E<code dir="auto">Running</code>\u72B6\u6001\u3002</li>
<li>\u4F7F\u7528<code dir="auto">kubectl describe wasmplugin waf-go -n higress-system</code>\u67E5\u770B\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u4E86\u89E3\u53EF\u80FD\u7684\u90E8\u7F72\u95EE\u9898\u3002</li>
</ul>
<h4 id="\u6B65\u9AA43\u9A8C\u8BC1\u89C4\u5219\u5339\u914D">\u6B65\u9AA43\uFF1A\u9A8C\u8BC1\u89C4\u5219\u5339\u914D</h4>
<ul>
<li>\u786E\u8BA4\u8BF7\u6C42\u7684URL\u786E\u5207\u5730\u4E0E\u914D\u7F6E\u4E2D\u7684\u8DEF\u7531\u89C4\u5219\u76F8\u5339\u914D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u6D4B\u8BD5\u8BF7\u6C42\u7684URL\u6216\u4FEE\u6539\u914D\u7F6E\u4E2D\u7684\u5339\u914D\u89C4\u5219\u6765\u8FDB\u884C\u6D4B\u8BD5\u3002</li>
</ul>
<h4 id="\u6B65\u9AA44\u67E5\u770B\u65E5\u5FD7">\u6B65\u9AA44\uFF1A\u67E5\u770B\u65E5\u5FD7</h4>
<ul>
<li>\u4F7F\u7528<code dir="auto">kubectl logs &#x3C;higress-controller-pod-name> -n higress-system</code>\u67E5\u770BHigress\u63A7\u5236\u5668\u65E5\u5FD7\uFF0C\u5BFB\u627E\u6709\u5173WAF\u914D\u7F6E\u5E94\u7528\u6216\u89C4\u5219\u6267\u884C\u7684\u9519\u8BEF\u4FE1\u606F\u3002</li>
<li>\u540C\u6837\uFF0C\u68C0\u67E5WAF\u63D2\u4EF6\u5BB9\u5668\u7684\u65E5\u5FD7\uFF0C\u8FD9\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u83B7\u53D6\u4E0EWAF\u63D2\u4EF6\u76F8\u5173\u7684Pod\u540D\u79F0\u540E\uFF0C\u6267\u884C\u7C7B\u4F3C<code dir="auto">kubectl logs &#x3C;waf-plugin-pod-name> -n higress-system</code>\u547D\u4EE4\u5B8C\u6210\u3002</li>
</ul>
<h4 id="\u6B65\u9AA45\u8C03\u8BD5\u4E0E\u8C03\u6574">\u6B65\u9AA45\uFF1A\u8C03\u8BD5\u4E0E\u8C03\u6574</h4>
<ul>
<li>\u6839\u636E\u65E5\u5FD7\u4FE1\u606F\u8C03\u6574\u914D\u7F6E\u6216\u89C4\u5219\uFF0C\u5FC5\u8981\u65F6\u53EF\u4EE5\u6682\u65F6\u589E\u52A0\u65E5\u5FD7\u7EA7\u522B\u4EE5\u83B7\u5F97\u66F4\u8BE6\u7EC6\u7684\u8C03\u8BD5\u8F93\u51FA\u3002</li>
<li>\u5982\u679C\u95EE\u9898\u4ECD\u672A\u89E3\u51B3\uFF0C\u8003\u8651\u9010\u6B65\u56DE\u9000\u914D\u7F6E\uFF0C\u4ECE\u6700\u7B80\u914D\u7F6E\u5F00\u59CB\uFF0C\u9010\u6B65\u6DFB\u52A0\u89C4\u5219\u4EE5\u9694\u79BB\u95EE\u9898\u70B9\u3002</li>
</ul>
<h3 id="\u89E3\u91CA\u8BF4\u660E">\u89E3\u91CA\u8BF4\u660E</h3>
<p>\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u901A\u8FC7\u903B\u8F91\u987A\u5E8F\u6392\u67E5\u914D\u7F6E\u4E0D\u751F\u6548\u7684\u5E38\u89C1\u539F\u56E0\uFF0C\u4ECE\u57FA\u7840\u914D\u7F6E\u9A8C\u8BC1\u5230\u6DF1\u5165\u7684\u65E5\u5FD7\u5206\u6790\uFF0C\u6BCF\u4E00\u6B65\u90FD\u662F\u4E3A\u4E86\u7F29\u5C0F\u95EE\u9898\u8303\u56F4\u5E76\u6700\u7EC8\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u3002\u901A\u8FC7\u7EC6\u81F4\u7684\u68C0\u67E5\u548C\u8C03\u8BD5\uFF0C\u901A\u5E38\u53EF\u4EE5\u8BC6\u522B\u5E76\u4FEE\u6B63\u914D\u7F6E\u95EE\u9898\uFF0C\u786E\u4FDDWAF\u9632\u62A4\u529F\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002\u5728\u6574\u4E2A\u8FC7\u7A0B\u4E2D\uFF0CHigress\u7684\u5B98\u65B9\u6587\u6863\u548C\u793E\u533A\u8D44\u6E90\uFF08\u5982\u63D0\u4F9B\u7684\u94FE\u63A5\uFF09\u5C06\u662F\u91CD\u8981\u7684\u53C2\u8003\u548C\u652F\u6301\u6765\u6E90\u3002</p>
<p><font color="#949494">---------------</font></p>
<h2 id="\u53C2\u8003\u94FE\u63A5">\u53C2\u8003\u94FE\u63A5 \uFF1A</h2>
<ul>
<li>\u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5F00\u542F WAF \u9632\u62A4\u7684\u6700\u4F73\u5B9E\u8DF5</li>
</ul>
<p><font color="#949494">---------------</font></p>
<h2 id="\u7B54\u7591\u670D\u52A1\u8BF4\u660E"><font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font></h2>
<p>\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E13\u5BB6\u7B54\u7591\u9875</a>\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09</p>
<h3 id="\u53E6">\u53E6\uFF1A</h3>
<p>\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F<a href="https://answer.opensource.alibaba.com/docs/intro" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1</a>\u3002</p>
<h3 id="\u53CD\u9988">\u53CD\u9988</h3>
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17149" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,o={id:"question-history-17137",title:"WAF\u914D\u7F6E\u4E0D\u751F\u6548",date:"2024-09-26",category:"expertConsultation",description:"\u9488\u5BF9\u95EE\u9898\u201Chigress WAF\u914D\u7F6E\u4E0D\u751F\u6548\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u5206\u6790\u5E76\u5C1D\u8BD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002\u4EE5\u4E0B\u662F\u5206\u6790\u53CA\u5EFA\u8BAE\u6B65\u9AA4\uFF1A### \u5206\u6790\u539F\u56E01. **\u914D\u7F6E\u9519\u8BEF**\uFF1A\u68C0\u67E5WAF\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u7279\u522B\u662F\u81EA\u5B9A\u4E49\u89C4\u5219\u3001\u9ED8\u8BA4\u914D\u7F6E\u4EE5\u53CA\u5339\u914D\u89C4\u5219\u662F\u5426\u6309\u7167Higress\u7684\u8981\u6C42\u683C\u5F0F\u7F16\u5199\u30022. **\u8D44\u6E90\u5E94\u7528\u95EE\u9898**\uFF1A\u786E\u4FDDWASM",tags:["higress","WAF","\u914D\u7F6E","\u4E0D","\u751F\u6548","\u89E3\u51B3\u65B9\u6CD5"],keywords:["higress","WAF","\u914D\u7F6E","\u4E0D","\u751F\u6548","\u89E3\u51B3\u65B9\u6CD5"]},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17137.md",r=void 0,a=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 WAF\u914D\u7F6E\u4E0D\u751F\u6548  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u9488\u5BF9\u95EE\u9898\u201Chigress WAF\u914D\u7F6E\u4E0D\u751F\u6548\u201D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u5206\u6790\u5E76\u5C1D\u8BD5\u89E3\u51B3\u6B64\u95EE\u9898\u3002\u4EE5\u4E0B\u662F\u5206\u6790\u53CA\u5EFA\u8BAE\u6B65\u9AA4\uFF1A

### \u5206\u6790\u539F\u56E0

1. **\u914D\u7F6E\u9519\u8BEF**\uFF1A\u68C0\u67E5WAF\u914D\u7F6E\u662F\u5426\u6B63\u786E\u65E0\u8BEF\uFF0C\u7279\u522B\u662F\u81EA\u5B9A\u4E49\u89C4\u5219\u3001\u9ED8\u8BA4\u914D\u7F6E\u4EE5\u53CA\u5339\u914D\u89C4\u5219\u662F\u5426\u6309\u7167Higress\u7684\u8981\u6C42\u683C\u5F0F\u7F16\u5199\u3002
2. **\u8D44\u6E90\u5E94\u7528\u95EE\u9898**\uFF1A\u786E\u4FDDWASM\u63D2\u4EF6\u914D\u7F6E\uFF08\u5982\u4E0A\u4F8B\u6240\u793A\u7684\`WasmPlugin\`\u8D44\u6E90\uFF09\u5DF2\u6B63\u786E\u5E94\u7528\u4E8EKubernetes\u96C6\u7FA4\u4E2D\uFF0C\u4E14\u65E0\u9519\u8BEF\u6216\u8B66\u544A\u4FE1\u606F\u3002
3. **\u89C4\u5219\u751F\u6548\u8303\u56F4**\uFF1A\u786E\u8BA4\u8BF7\u6C42\u7684Ingress\u8DEF\u5F84\u786E\u5B9E\u5339\u914D\u4E86\u914D\u7F6E\u4E2D\u9884\u671F\u751F\u6548\u7684\u89C4\u5219\uFF0C\u6BD4\u5982\u662F\u5426\u6B63\u786E\u6307\u5411\u4E86\`default/echo-ingress\`\u6216\u5176\u5B83\u8BBE\u7F6E\u4E86WAF\u9632\u62A4\u7684\u8DEF\u7531\u3002
4. **WAF\u63D2\u4EF6\u72B6\u6001**\uFF1A\u68C0\u67E5WAF\u63D2\u4EF6\uFF08\u4F8B\u5982\`go-waf\`\uFF09\u662F\u5426\u6210\u529F\u90E8\u7F72\u5E76\u8FD0\u884C\u4E8EHigress\u7CFB\u7EDF\u547D\u540D\u7A7A\u95F4\u4E2D\uFF0C\u786E\u4FDD\u5176\u955C\u50CF\u5730\u5740\u6B63\u786E\u65E0\u8BEF\u4E14\u53EF\u8BBF\u95EE\u3002
5. **\u65E5\u5FD7\u4E0E\u8C03\u8BD5**\uFF1A\u67E5\u770BHigress\u548CWAF\u63D2\u4EF6\u7684\u65E5\u5FD7\uFF0C\u7279\u522B\u662F\`SecDebugLogLevel\`\u8BBE\u7F6E\u4E3A3\u65F6\u5E94\u80FD\u63D0\u4F9B\u66F4\u591A\u8C03\u8BD5\u4FE1\u606F\uFF0C\u5E2E\u52A9\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u3002

### \u89E3\u51B3\u6B65\u9AA4

#### \u6B65\u9AA41\uFF1A\u9A8C\u8BC1\u914D\u7F6E\u8BED\u6CD5
- \u91CD\u65B0\u5BA1\u89C6\u60A8\u7684\`WasmPlugin\`\u914D\u7F6E\uFF0C\u5BF9\u7167Higress\u5B98\u65B9\u6587\u6863\u6216\u793A\u4F8B\u4EE3\u7801\u68C0\u67E5\u662F\u5426\u6709\u683C\u5F0F\u9519\u8BEF\u6216\u9057\u6F0F\u3002

#### \u6B65\u9AA42\uFF1A\u68C0\u67E5\u90E8\u7F72\u72B6\u6001
- \u6267\u884C\`kubectl get wasmplugin -n higress-system\`\uFF0C\u786E\u8BA4\`waf-go\`\u63D2\u4EF6\u7684\u72B6\u6001\uFF0C\u786E\u4FDD\u5B83\u5904\u4E8E\`Running\`\u72B6\u6001\u3002
- \u4F7F\u7528\`kubectl describe wasmplugin waf-go -n higress-system\`\u67E5\u770B\u8BE6\u7EC6\u63CF\u8FF0\uFF0C\u4E86\u89E3\u53EF\u80FD\u7684\u90E8\u7F72\u95EE\u9898\u3002

#### \u6B65\u9AA43\uFF1A\u9A8C\u8BC1\u89C4\u5219\u5339\u914D
- \u786E\u8BA4\u8BF7\u6C42\u7684URL\u786E\u5207\u5730\u4E0E\u914D\u7F6E\u4E2D\u7684\u8DEF\u7531\u89C4\u5219\u76F8\u5339\u914D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u6D4B\u8BD5\u8BF7\u6C42\u7684URL\u6216\u4FEE\u6539\u914D\u7F6E\u4E2D\u7684\u5339\u914D\u89C4\u5219\u6765\u8FDB\u884C\u6D4B\u8BD5\u3002

#### \u6B65\u9AA44\uFF1A\u67E5\u770B\u65E5\u5FD7
- \u4F7F\u7528\`kubectl logs <higress-controller-pod-name> -n higress-system\`\u67E5\u770BHigress\u63A7\u5236\u5668\u65E5\u5FD7\uFF0C\u5BFB\u627E\u6709\u5173WAF\u914D\u7F6E\u5E94\u7528\u6216\u89C4\u5219\u6267\u884C\u7684\u9519\u8BEF\u4FE1\u606F\u3002
- \u540C\u6837\uFF0C\u68C0\u67E5WAF\u63D2\u4EF6\u5BB9\u5668\u7684\u65E5\u5FD7\uFF0C\u8FD9\u901A\u5E38\u53EF\u4EE5\u901A\u8FC7\u83B7\u53D6\u4E0EWAF\u63D2\u4EF6\u76F8\u5173\u7684Pod\u540D\u79F0\u540E\uFF0C\u6267\u884C\u7C7B\u4F3C\`kubectl logs <waf-plugin-pod-name> -n higress-system\`\u547D\u4EE4\u5B8C\u6210\u3002

#### \u6B65\u9AA45\uFF1A\u8C03\u8BD5\u4E0E\u8C03\u6574
- \u6839\u636E\u65E5\u5FD7\u4FE1\u606F\u8C03\u6574\u914D\u7F6E\u6216\u89C4\u5219\uFF0C\u5FC5\u8981\u65F6\u53EF\u4EE5\u6682\u65F6\u589E\u52A0\u65E5\u5FD7\u7EA7\u522B\u4EE5\u83B7\u5F97\u66F4\u8BE6\u7EC6\u7684\u8C03\u8BD5\u8F93\u51FA\u3002
- \u5982\u679C\u95EE\u9898\u4ECD\u672A\u89E3\u51B3\uFF0C\u8003\u8651\u9010\u6B65\u56DE\u9000\u914D\u7F6E\uFF0C\u4ECE\u6700\u7B80\u914D\u7F6E\u5F00\u59CB\uFF0C\u9010\u6B65\u6DFB\u52A0\u89C4\u5219\u4EE5\u9694\u79BB\u95EE\u9898\u70B9\u3002

### \u89E3\u91CA\u8BF4\u660E
\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u901A\u8FC7\u903B\u8F91\u987A\u5E8F\u6392\u67E5\u914D\u7F6E\u4E0D\u751F\u6548\u7684\u5E38\u89C1\u539F\u56E0\uFF0C\u4ECE\u57FA\u7840\u914D\u7F6E\u9A8C\u8BC1\u5230\u6DF1\u5165\u7684\u65E5\u5FD7\u5206\u6790\uFF0C\u6BCF\u4E00\u6B65\u90FD\u662F\u4E3A\u4E86\u7F29\u5C0F\u95EE\u9898\u8303\u56F4\u5E76\u6700\u7EC8\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\u3002\u901A\u8FC7\u7EC6\u81F4\u7684\u68C0\u67E5\u548C\u8C03\u8BD5\uFF0C\u901A\u5E38\u53EF\u4EE5\u8BC6\u522B\u5E76\u4FEE\u6B63\u914D\u7F6E\u95EE\u9898\uFF0C\u786E\u4FDDWAF\u9632\u62A4\u529F\u80FD\u6B63\u5E38\u5DE5\u4F5C\u3002\u5728\u6574\u4E2A\u8FC7\u7A0B\u4E2D\uFF0CHigress\u7684\u5B98\u65B9\u6587\u6863\u548C\u793E\u533A\u8D44\u6E90\uFF08\u5982\u63D0\u4F9B\u7684\u94FE\u63A5\uFF09\u5C06\u662F\u91CD\u8981\u7684\u53C2\u8003\u548C\u652F\u6301\u6765\u6E90\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5F00\u542F WAF \u9632\u62A4\u7684\u6700\u4F73\u5B9E\u8DF5 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17149)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},l=function(){return e},n=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u539F\u56E0",text:"\u5206\u6790\u539F\u56E0"},{depth:3,slug:"\u89E3\u51B3\u6B65\u9AA4",text:"\u89E3\u51B3\u6B65\u9AA4"},{depth:4,slug:"\u6B65\u9AA41\u9A8C\u8BC1\u914D\u7F6E\u8BED\u6CD5",text:"\u6B65\u9AA41\uFF1A\u9A8C\u8BC1\u914D\u7F6E\u8BED\u6CD5"},{depth:4,slug:"\u6B65\u9AA42\u68C0\u67E5\u90E8\u7F72\u72B6\u6001",text:"\u6B65\u9AA42\uFF1A\u68C0\u67E5\u90E8\u7F72\u72B6\u6001"},{depth:4,slug:"\u6B65\u9AA43\u9A8C\u8BC1\u89C4\u5219\u5339\u914D",text:"\u6B65\u9AA43\uFF1A\u9A8C\u8BC1\u89C4\u5219\u5339\u914D"},{depth:4,slug:"\u6B65\u9AA44\u67E5\u770B\u65E5\u5FD7",text:"\u6B65\u9AA44\uFF1A\u67E5\u770B\u65E5\u5FD7"},{depth:4,slug:"\u6B65\u9AA45\u8C03\u8BD5\u4E0E\u8C03\u6574",text:"\u6B65\u9AA45\uFF1A\u8C03\u8BD5\u4E0E\u8C03\u6574"},{depth:3,slug:"\u89E3\u91CA\u8BF4\u660E",text:"\u89E3\u91CA\u8BF4\u660E"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},t=g((m,W,A)=>{const{layout:b,...i}=o;return i.file=s,i.url=r,d`${c()}${h(e)}`})});export{t as Content,F as __tla,l as compiledContent,t as default,s as file,o as frontmatter,n as getHeadings,a as rawContent,r as url};
