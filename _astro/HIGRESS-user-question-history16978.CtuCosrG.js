import{c as g,__tla as y}from"./astro-component.DIa0fJKh.js";import{r as p,m as u,u as h,__tla as v}from"./constant.CAV5GtKj.js";import{__tla as f}from"./astro/assets-service.tyfV9CK3.js";let e,n,t,o,l,a,s,E=Promise.all([(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let r;r=`<h2 id="\u7528\u6237\u95EE\u9898">\u7528\u6237\u95EE\u9898 \uFF1A</h2>
<p>higress envoy filter\u7528\u6CD5\u8BE6\u89E3</p>
<hr>
<h2 id="\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54">\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A</h2>
<p>\u4E3A\u4E86\u89E3\u7B54\u5173\u4E8EHigress\u4E0EEnvoy Filter\u7684\u7528\u6CD5\u8BE6\u89E3\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u7406\u89E3\u8FD9\u4E24\u4E2A\u6982\u5FF5\u7684\u57FA\u672C\u80CC\u666F\u548C\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u3002</p>
<p>{{{\u77E5\u8BC6: Higress \u662F\u4E00\u4E2A\u57FA\u4E8EIstio\u548CEnvoy\u7684\u6269\u5C55\u9879\u76EE\uFF0C\u65E8\u5728\u63D0\u4F9B\u66F4\u7075\u6D3B\u7684\u670D\u52A1\u7F51\u683C\u529F\u80FD\u548C\u66F4\u4F18\u5316\u7684\u6027\u80FD\u3002\u5B83\u901A\u8FC7\u96C6\u6210\u7279\u5B9A\u7684Envoy\u6269\u5C55\u548C\u7B56\u7565\uFF0C\u589E\u5F3A\u4E86\u670D\u52A1\u7F51\u683C\u7684\u80FD\u529B\uFF0C\u7279\u522B\u662F\u5728\u6D41\u91CF\u7BA1\u7406\u548C\u5B89\u5168\u63A7\u5236\u65B9\u9762\u3002Envoy Filter \u5219\u662FEnvoy\u4EE3\u7406\u4E2D\u4E00\u4E2A\u5F3A\u5927\u7684\u529F\u80FD\u7EC4\u4EF6\uFF0C\u5141\u8BB8\u7528\u6237\u63D2\u5165\u81EA\u5B9A\u4E49\u7684\u8FC7\u6EE4\u5668\u6765\u4FEE\u6539\u6216\u68C0\u67E5\u8FDB\u51FA Envoy \u7684\u7F51\u7EDC\u6D41\u91CF\u3002\u8FD9\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u5728\u4F20\u8F93\u5C42\u3001\u5E94\u7528\u5C42\u7B49\u4E0D\u540C\u5C42\u7EA7\u4E0A\u5B9E\u73B0\u590D\u6742\u7684\u6D41\u91CF\u5904\u7406\u903B\u8F91\u3002}}}</p>
<h3 id="\u5206\u6790\u95EE\u9898\u539F\u56E0">\u5206\u6790\u95EE\u9898\u539F\u56E0</h3>
<p>\u60A8\u60F3\u4E86\u89E3Higress\u7ED3\u5408Envoy Filter\u7684\u5177\u4F53\u7528\u6CD5\uFF0C\u8FD9\u8868\u660E\u60A8\u53EF\u80FD\u6B63\u5C1D\u8BD5\u5229\u7528Higress\u7684\u9AD8\u7EA7\u7279\u6027\u6765\u5B9A\u5236\u5316\u60A8\u7684\u670D\u52A1\u7F51\u683C\u6D41\u91CF\u7BA1\u7406\u7B56\u7565\uFF0C\u7279\u522B\u662F\u901A\u8FC7Envoy Filter\u6765\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u6D41\u91CF\u63A7\u5236\u548C\u89C2\u6D4B\u3002</p>
<h3 id="\u89E3\u7B54\u6B65\u9AA4">\u89E3\u7B54\u6B65\u9AA4</h3>
<p>\u867D\u7136\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u5173\u4E8EHigress\u4E0EEnvoy Filter\u7ED3\u5408\u4F7F\u7528\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EEnvoy Filter\u7684\u4E00\u822C\u7528\u6CD5\u548CHigress\u7684\u6269\u5C55\u7279\u6027\uFF0C\u6784\u5EFA\u4E00\u4E2A\u6982\u8981\u6027\u7684\u6307\u5BFC\u6D41\u7A0B\uFF1A</p>
<ol>
<li>
<p><strong>\u7406\u89E3Higress\u914D\u7F6E\u7ED3\u6784</strong>\uFF1A</p>
<ul>
<li>\u9996\u5148\uFF0C\u719F\u6089Higress\u5982\u4F55\u5728\u5176\u914D\u7F6E\u6A21\u578B\u4E2D\u96C6\u6210Envoy\u6269\u5C55\u3002\u67E5\u9605Higress\u6587\u6863\u4EE5\u4E86\u89E3\u5176\u7279\u6709\u7684CRDs\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u548C\u5982\u4F55\u901A\u8FC7\u8FD9\u4E9BCRDs\u914D\u7F6EEnvoy Filter\u3002</li>
</ul>
</li>
<li>
<p><strong>\u8BBE\u8BA1Envoy Filter\u9700\u6C42</strong>\uFF1A</p>
<ul>
<li>\u786E\u5B9A\u60A8\u5E0C\u671B\u901A\u8FC7Envoy Filter\u5B9E\u73B0\u7684\u5177\u4F53\u529F\u80FD\uFF0C\u6BD4\u5982\u8BF7\u6C42\u5934\u90E8\u7684\u4FEE\u6539\u3001\u6D41\u91CF\u8DEF\u7531\u89C4\u5219\u3001\u5B89\u5168\u7B56\u7565\u5B9E\u65BD\u7B49\u3002</li>
</ul>
</li>
<li>
<p><strong>\u7F16\u5199Envoy Filter\u914D\u7F6E</strong>\uFF1A</p>
<ul>
<li>\u6839\u636E\u9700\u6C42\uFF0C\u7F16\u5199Envoy Filter\u7684YAML\u914D\u7F6E\u6587\u4EF6\u3002\u914D\u7F6E\u5E94\u5305\u62ECfilter\u7684\u7C7B\u578B\uFF08\u5982HTTP\u3001\u7F51\u7EDC\u8FC7\u6EE4\u5668\uFF09\u3001\u5339\u914D\u6761\u4EF6\u3001\u8FC7\u6EE4\u5668\u7684\u884C\u4E3A\u903B\u8F91\u7B49\u3002Higress\u53EF\u80FD\u63D0\u4F9B\u4E86\u7279\u5B9A\u7684\u6A21\u677F\u6216\u6307\u5357\u6765\u7B80\u5316\u8FD9\u4E00\u8FC7\u7A0B\u3002</li>
</ul>
</li>
<li>
<p><strong>\u96C6\u6210\u81F3Higress</strong>\uFF1A</p>
<ul>
<li>\u4F7F\u7528Higress\u7684API\u6216\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u5C06\u7F16\u5199\u7684Envoy Filter\u914D\u7F6E\u90E8\u7F72\u5230\u670D\u52A1\u7F51\u683C\u4E2D\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u521B\u5EFA\u6216\u66F4\u65B0\u76F8\u5E94\u7684Istio Gateway\u3001VirtualService\u7B49\u8D44\u6E90\uFF0C\u5E76\u786E\u4FDDEnvoy Filter\u914D\u7F6E\u88AB\u6B63\u786E\u5F15\u7528\u3002</li>
</ul>
</li>
<li>
<p><strong>\u9A8C\u8BC1\u4E0E\u8C03\u8BD5</strong>\uFF1A</p>
<ul>
<li>\u5E94\u7528\u914D\u7F6E\u540E\uFF0C\u901A\u8FC7\u6A21\u62DF\u6D41\u91CF\u6216\u5B9E\u9645\u670D\u52A1\u4EA4\u4E92\u6765\u9A8C\u8BC1Envoy Filter\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\u3002\u5229\u7528Higress\u548CEnvoy\u7684\u65E5\u5FD7\u3001\u8DDF\u8E2A\u4EE5\u53CAIstio\u7684\u76D1\u63A7\u5DE5\u5177\u6765\u8BCA\u65AD\u4EFB\u4F55\u95EE\u9898\u3002</li>
</ul>
</li>
<li>
<p><strong>\u6301\u7EED\u4F18\u5316\u4E0E\u8C03\u6574</strong>\uFF1A</p>
<ul>
<li>\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u7684\u53D8\u5316\u548C\u4ECE\u76D1\u63A7\u4E2D\u83B7\u5F97\u7684\u53CD\u9988\uFF0C\u4E0D\u65AD\u8C03\u6574\u548C\u5B8C\u5584Envoy Filter\u914D\u7F6E\uFF0C\u4EE5\u8FBE\u5230\u6700\u4F73\u7684\u670D\u52A1\u6027\u80FD\u548C\u5B89\u5168\u6027\u3002</li>
</ul>
</li>
</ol>
<h3 id="\u89E3\u91CA\u8BF4\u660E">\u89E3\u91CA\u8BF4\u660E</h3>
<p>\u4E0A\u8FF0\u6B65\u9AA4\u63D0\u4F9B\u4E86\u4E00\u79CD\u901A\u7528\u7684\u65B9\u6CD5\u8BBA\u6765\u5728Higress\u670D\u52A1\u7F51\u683C\u4E2D\u5229\u7528Envoy Filter\u3002\u7531\u4E8EHigress\u4F5C\u4E3AIstio\u7684\u6269\u5C55\uFF0C\u5176\u914D\u7F6E\u548C\u7BA1\u7406\u6D41\u7A0B\u5927\u4F53\u9075\u5FAAIstio\u7684\u6A21\u5F0F\uFF0C\u4F46\u5177\u4F53\u5B9E\u8DF5\u65F6\u8FD8\u9700\u53C2\u8003Higress\u7684\u5B98\u65B9\u6587\u6863\uFF0C\u4EE5\u83B7\u53D6\u9488\u5BF9\u5176\u7279\u6709\u529F\u80FD\u7684\u6700\u4F73\u5B9E\u8DF5\u6307\u5BFC\u3002\u901A\u8FC7\u7EC6\u81F4\u89C4\u5212\u548C\u9010\u6B65\u5B9E\u65BD\uFF0C\u60A8\u53EF\u4EE5\u6709\u6548\u5229\u7528Higress\u4E0EEnvoy Filter\u7684\u5F3A\u5927\u7EC4\u5408\uFF0C\u5B9E\u73B0\u590D\u6742\u4E14\u7075\u6D3B\u7684\u6D41\u91CF\u7BA1\u7406\u7B56\u7565\u3002</p>
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
<p>\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A<a href="https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16985" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5DEE\u8BC4</a>\u7ED9\u6211\u4EEC\u53CD\u9988\u3002</p>`,o={id:"question-history-16978",title:"higress envoy filter\u7528\u6CD5\u8BE6\u89E3",date:"2024-09-26",category:"expertConsultation",description:"\u4E3A\u4E86\u89E3\u7B54\u5173\u4E8EHigress\u4E0EEnvoy Filter\u7684\u7528\u6CD5\u8BE6\u89E3\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u7406\u89E3\u8FD9\u4E24\u4E2A\u6982\u5FF5\u7684\u57FA\u672C\u80CC\u666F\u548C\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u3002\u77E5\u8BC6: Higress \u662F\u4E00\u4E2A\u57FA\u4E8EIstio\u548CEnvoy\u7684\u6269\u5C55\u9879\u76EE\uFF0C\u65E8\u5728\u63D0\u4F9B\u66F4\u7075\u6D3B\u7684\u670D\u52A1\u7F51\u683C\u529F\u80FD\u548C\u66F4\u4F18\u5316\u7684\u6027\u80FD\u3002\u5B83\u901A\u8FC7\u96C6\u6210\u7279\u5B9A\u7684Envoy\u6269\u5C55\u548C\u7B56\u7565\uFF0C\u589E\u5F3A\u4E86\u670D\u52A1\u7F51\u683C\u7684\u80FD\u529B\uFF0C\u7279\u522B\u662F\u5728\u6D41",tags:["higress","envoy","filter","\u7528\u6CD5","\u8BE6\u89E3"],keywords:["higress","envoy","filter","\u7528\u6CD5","\u8BE6\u89E3"]},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16978.md",s=void 0,a=function(){return`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress envoy filter\u7528\u6CD5\u8BE6\u89E3  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u4E3A\u4E86\u89E3\u7B54\u5173\u4E8EHigress\u4E0EEnvoy Filter\u7684\u7528\u6CD5\u8BE6\u89E3\uFF0C\u6211\u4EEC\u9996\u5148\u9700\u8981\u7406\u89E3\u8FD9\u4E24\u4E2A\u6982\u5FF5\u7684\u57FA\u672C\u80CC\u666F\u548C\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u3002

{{{\u77E5\u8BC6: Higress \u662F\u4E00\u4E2A\u57FA\u4E8EIstio\u548CEnvoy\u7684\u6269\u5C55\u9879\u76EE\uFF0C\u65E8\u5728\u63D0\u4F9B\u66F4\u7075\u6D3B\u7684\u670D\u52A1\u7F51\u683C\u529F\u80FD\u548C\u66F4\u4F18\u5316\u7684\u6027\u80FD\u3002\u5B83\u901A\u8FC7\u96C6\u6210\u7279\u5B9A\u7684Envoy\u6269\u5C55\u548C\u7B56\u7565\uFF0C\u589E\u5F3A\u4E86\u670D\u52A1\u7F51\u683C\u7684\u80FD\u529B\uFF0C\u7279\u522B\u662F\u5728\u6D41\u91CF\u7BA1\u7406\u548C\u5B89\u5168\u63A7\u5236\u65B9\u9762\u3002Envoy Filter \u5219\u662FEnvoy\u4EE3\u7406\u4E2D\u4E00\u4E2A\u5F3A\u5927\u7684\u529F\u80FD\u7EC4\u4EF6\uFF0C\u5141\u8BB8\u7528\u6237\u63D2\u5165\u81EA\u5B9A\u4E49\u7684\u8FC7\u6EE4\u5668\u6765\u4FEE\u6539\u6216\u68C0\u67E5\u8FDB\u51FA Envoy \u7684\u7F51\u7EDC\u6D41\u91CF\u3002\u8FD9\u4F7F\u5F97\u7528\u6237\u53EF\u4EE5\u5728\u4F20\u8F93\u5C42\u3001\u5E94\u7528\u5C42\u7B49\u4E0D\u540C\u5C42\u7EA7\u4E0A\u5B9E\u73B0\u590D\u6742\u7684\u6D41\u91CF\u5904\u7406\u903B\u8F91\u3002}}}

### \u5206\u6790\u95EE\u9898\u539F\u56E0

\u60A8\u60F3\u4E86\u89E3Higress\u7ED3\u5408Envoy Filter\u7684\u5177\u4F53\u7528\u6CD5\uFF0C\u8FD9\u8868\u660E\u60A8\u53EF\u80FD\u6B63\u5C1D\u8BD5\u5229\u7528Higress\u7684\u9AD8\u7EA7\u7279\u6027\u6765\u5B9A\u5236\u5316\u60A8\u7684\u670D\u52A1\u7F51\u683C\u6D41\u91CF\u7BA1\u7406\u7B56\u7565\uFF0C\u7279\u522B\u662F\u901A\u8FC7Envoy Filter\u6765\u5B9E\u73B0\u66F4\u7EC6\u7C92\u5EA6\u7684\u6D41\u91CF\u63A7\u5236\u548C\u89C2\u6D4B\u3002

### \u89E3\u7B54\u6B65\u9AA4

\u867D\u7136\u6211\u4E86\u89E3\u7684\u77E5\u8BC6\u4E2D\u6CA1\u6709\u76F4\u63A5\u63D0\u4F9B\u5173\u4E8EHigress\u4E0EEnvoy Filter\u7ED3\u5408\u4F7F\u7528\u7684\u5177\u4F53\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u57FA\u4E8EEnvoy Filter\u7684\u4E00\u822C\u7528\u6CD5\u548CHigress\u7684\u6269\u5C55\u7279\u6027\uFF0C\u6784\u5EFA\u4E00\u4E2A\u6982\u8981\u6027\u7684\u6307\u5BFC\u6D41\u7A0B\uFF1A

1. **\u7406\u89E3Higress\u914D\u7F6E\u7ED3\u6784**\uFF1A
   - \u9996\u5148\uFF0C\u719F\u6089Higress\u5982\u4F55\u5728\u5176\u914D\u7F6E\u6A21\u578B\u4E2D\u96C6\u6210Envoy\u6269\u5C55\u3002\u67E5\u9605Higress\u6587\u6863\u4EE5\u4E86\u89E3\u5176\u7279\u6709\u7684CRDs\uFF08\u81EA\u5B9A\u4E49\u8D44\u6E90\u5B9A\u4E49\uFF09\u548C\u5982\u4F55\u901A\u8FC7\u8FD9\u4E9BCRDs\u914D\u7F6EEnvoy Filter\u3002

2. **\u8BBE\u8BA1Envoy Filter\u9700\u6C42**\uFF1A
   - \u786E\u5B9A\u60A8\u5E0C\u671B\u901A\u8FC7Envoy Filter\u5B9E\u73B0\u7684\u5177\u4F53\u529F\u80FD\uFF0C\u6BD4\u5982\u8BF7\u6C42\u5934\u90E8\u7684\u4FEE\u6539\u3001\u6D41\u91CF\u8DEF\u7531\u89C4\u5219\u3001\u5B89\u5168\u7B56\u7565\u5B9E\u65BD\u7B49\u3002

3. **\u7F16\u5199Envoy Filter\u914D\u7F6E**\uFF1A
   - \u6839\u636E\u9700\u6C42\uFF0C\u7F16\u5199Envoy Filter\u7684YAML\u914D\u7F6E\u6587\u4EF6\u3002\u914D\u7F6E\u5E94\u5305\u62ECfilter\u7684\u7C7B\u578B\uFF08\u5982HTTP\u3001\u7F51\u7EDC\u8FC7\u6EE4\u5668\uFF09\u3001\u5339\u914D\u6761\u4EF6\u3001\u8FC7\u6EE4\u5668\u7684\u884C\u4E3A\u903B\u8F91\u7B49\u3002Higress\u53EF\u80FD\u63D0\u4F9B\u4E86\u7279\u5B9A\u7684\u6A21\u677F\u6216\u6307\u5357\u6765\u7B80\u5316\u8FD9\u4E00\u8FC7\u7A0B\u3002

4. **\u96C6\u6210\u81F3Higress**\uFF1A
   - \u4F7F\u7528Higress\u7684API\u6216\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u5C06\u7F16\u5199\u7684Envoy Filter\u914D\u7F6E\u90E8\u7F72\u5230\u670D\u52A1\u7F51\u683C\u4E2D\u3002\u8FD9\u901A\u5E38\u6D89\u53CA\u521B\u5EFA\u6216\u66F4\u65B0\u76F8\u5E94\u7684Istio Gateway\u3001VirtualService\u7B49\u8D44\u6E90\uFF0C\u5E76\u786E\u4FDDEnvoy Filter\u914D\u7F6E\u88AB\u6B63\u786E\u5F15\u7528\u3002

5. **\u9A8C\u8BC1\u4E0E\u8C03\u8BD5**\uFF1A
   - \u5E94\u7528\u914D\u7F6E\u540E\uFF0C\u901A\u8FC7\u6A21\u62DF\u6D41\u91CF\u6216\u5B9E\u9645\u670D\u52A1\u4EA4\u4E92\u6765\u9A8C\u8BC1Envoy Filter\u662F\u5426\u6309\u9884\u671F\u5DE5\u4F5C\u3002\u5229\u7528Higress\u548CEnvoy\u7684\u65E5\u5FD7\u3001\u8DDF\u8E2A\u4EE5\u53CAIstio\u7684\u76D1\u63A7\u5DE5\u5177\u6765\u8BCA\u65AD\u4EFB\u4F55\u95EE\u9898\u3002

6. **\u6301\u7EED\u4F18\u5316\u4E0E\u8C03\u6574**\uFF1A
   - \u6839\u636E\u4E1A\u52A1\u9700\u6C42\u7684\u53D8\u5316\u548C\u4ECE\u76D1\u63A7\u4E2D\u83B7\u5F97\u7684\u53CD\u9988\uFF0C\u4E0D\u65AD\u8C03\u6574\u548C\u5B8C\u5584Envoy Filter\u914D\u7F6E\uFF0C\u4EE5\u8FBE\u5230\u6700\u4F73\u7684\u670D\u52A1\u6027\u80FD\u548C\u5B89\u5168\u6027\u3002

### \u89E3\u91CA\u8BF4\u660E

\u4E0A\u8FF0\u6B65\u9AA4\u63D0\u4F9B\u4E86\u4E00\u79CD\u901A\u7528\u7684\u65B9\u6CD5\u8BBA\u6765\u5728Higress\u670D\u52A1\u7F51\u683C\u4E2D\u5229\u7528Envoy Filter\u3002\u7531\u4E8EHigress\u4F5C\u4E3AIstio\u7684\u6269\u5C55\uFF0C\u5176\u914D\u7F6E\u548C\u7BA1\u7406\u6D41\u7A0B\u5927\u4F53\u9075\u5FAAIstio\u7684\u6A21\u5F0F\uFF0C\u4F46\u5177\u4F53\u5B9E\u8DF5\u65F6\u8FD8\u9700\u53C2\u8003Higress\u7684\u5B98\u65B9\u6587\u6863\uFF0C\u4EE5\u83B7\u53D6\u9488\u5BF9\u5176\u7279\u6709\u529F\u80FD\u7684\u6700\u4F73\u5B9E\u8DF5\u6307\u5BFC\u3002\u901A\u8FC7\u7EC6\u81F4\u89C4\u5212\u548C\u9010\u6B65\u5B9E\u65BD\uFF0C\u60A8\u53EF\u4EE5\u6709\u6548\u5229\u7528Higress\u4E0EEnvoy Filter\u7684\u5F3A\u5927\u7EC4\u5408\uFF0C\u5B9E\u73B0\u590D\u6742\u4E14\u7075\u6D3B\u7684\u6D41\u91CF\u7BA1\u7406\u7B56\u7565\u3002


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
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16985)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`},n=function(){return r},l=function(){return[{depth:2,slug:"\u7528\u6237\u95EE\u9898",text:"\u7528\u6237\u95EE\u9898 \uFF1A"},{depth:2,slug:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54",text:"\u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A"},{depth:3,slug:"\u5206\u6790\u95EE\u9898\u539F\u56E0",text:"\u5206\u6790\u95EE\u9898\u539F\u56E0"},{depth:3,slug:"\u89E3\u7B54\u6B65\u9AA4",text:"\u89E3\u7B54\u6B65\u9AA4"},{depth:3,slug:"\u89E3\u91CA\u8BF4\u660E",text:"\u89E3\u91CA\u8BF4\u660E"},{depth:2,slug:"\u53C2\u8003\u94FE\u63A5",text:"\u53C2\u8003\u94FE\u63A5 \uFF1A"},{depth:2,slug:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E",text:"\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A"},{depth:3,slug:"\u53E6",text:"\u53E6\uFF1A"},{depth:3,slug:"\u53CD\u9988",text:"\u53CD\u9988"}]},e=g((c,F,d)=>{const{layout:H,...i}=o;return i.file=t,i.url=s,p`${u()}${h(r)}`})});export{e as Content,E as __tla,n as compiledContent,e as default,t as file,o as frontmatter,l as getHeadings,a as rawContent,s as url};
