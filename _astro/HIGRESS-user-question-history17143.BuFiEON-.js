const i="HIGRESS-user-question-history17143.md",s="faq",o="higress-user-question-history17143",e=`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 Higress \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-config \u91CC\u9762\u7684chunkSize \u662F\u4EC0\u4E48\u610F\u601D\uFF1F  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u5728 Higress \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 \`higress-config\` \u91CC\u9762\uFF0C\`chunkSize\` \u662F\u4E00\u4E2A\u4E0E Gzip \u538B\u7F29\u76F8\u5173\u7684\u914D\u7F6E\u53C2\u6570\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u53C2\u6570\u6307\u5B9A\u4E86\u5728\u8FDB\u884C Gzip \u538B\u7F29\u65F6\u5904\u7406\u6570\u636E\u7684\u5757\u5927\u5C0F\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09\u3002\u9ED8\u8BA4\u503C\u901A\u5E38\u662F 4096 \u5B57\u8282\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8C03\u6574\u3002

**\u5206\u6790\u539F\u56E0\uFF1A**
Gzip \u538B\u7F29\u662F\u4E00\u79CD\u7528\u4E8E\u51CF\u5C11\u6587\u4EF6\u5927\u5C0F\u4EE5\u4FBF\u66F4\u5FEB\u4F20\u8F93\u7684\u7B97\u6CD5\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u6587\u672C\u7C7B\u6570\u636E\u3002\u5728 Higress \u7684\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u542F\u7528 Gzip \u53EF\u4EE5\u63D0\u9AD8\u901A\u8FC7 Ingress \u4F20\u8F93\u7684\u6570\u636E\u6548\u7387\uFF0C\u5C24\u5176\u662F\u5BF9\u4E8E\u5927\u4F53\u79EF\u6216\u9AD8\u6D41\u91CF\u7684\u6587\u672C\u8D44\u6E90\u3002\`chunkSize\` \u7684\u8BBE\u7F6E\u5F71\u54CD\u4E86\u538B\u7F29\u5904\u7406\u7684\u6548\u7387\u548C\u6700\u7EC8\u8F93\u51FA\u7684\u538B\u7F29\u5305\u7ED3\u6784\uFF0C\u4E0D\u540C\u7684\u5E94\u7528\u573A\u666F\u53EF\u80FD\u9700\u8981\u4E0D\u540C\u7684 \`chunkSize\` \u6765\u8FBE\u5230\u6700\u4F18\u7684\u538B\u7F29\u6548\u679C\u548C\u6027\u80FD\u5E73\u8861\u3002

**\u77E5\u8BC6\u4F9D\u6258\uFF1A**
\u6839\u636E\u63D0\u4F9B\u7684\u914D\u7F6E\u793A\u4F8B\uFF0C\u5728 Higress \u7684\u914D\u7F6E\u4E2D\uFF0C\`chunkSize\` \u88AB\u8BBE\u7F6E\u4E3A 4096 \u5B57\u8282\uFF0C\u8FD9\u8868\u660E\u5728\u8FDB\u884C Gzip \u538B\u7F29\u5904\u7406\u65F6\uFF0C\u6570\u636E\u4F1A\u88AB\u5206\u6210\u5927\u5C0F\u4E3A 4096 \u5B57\u8282\u7684\u5757\u6765\u8FDB\u884C\u5355\u72EC\u538B\u7F29\u3002\u6B64\u914D\u7F6E\u4F4D\u4E8E Gzip \u90E8\u5206\u4E0B\uFF0C\u4E0E\u8BF8\u5982 \`enable\`\uFF08\u662F\u5426\u542F\u7528 Gzip\uFF09\u3001\`minContentLength\`\uFF08\u6700\u5C0F\u538B\u7F29\u5185\u5BB9\u957F\u5EA6\uFF09\u7B49\u5176\u4ED6\u76F8\u5173\u914D\u7F6E\u9009\u9879\u5171\u540C\u4F5C\u7528\uFF0C\u4EE5\u51B3\u5B9A\u4F55\u65F6\u4EE5\u53CA\u5982\u4F55\u5E94\u7528 Gzip \u538B\u7F29\u3002

**\u603B\u7ED3\uFF1A**
Higress \u5168\u5C40\u914D\u7F6E ConfigMap \u4E2D\u7684 \`chunkSize\` \u53C2\u6570\u63A7\u5236\u4E86 Gzip \u538B\u7F29\u5904\u7406\u65F6\u7684\u6570\u636E\u5757\u5927\u5C0F\uFF0C\u662F\u4E00\u4E2A\u4F18\u5316\u538B\u7F29\u8FC7\u7A0B\u6548\u7387\u7684\u7EC6\u8C03\u9009\u9879\u3002\u7528\u6237\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u670D\u52A1\u7279\u6027\u548C\u6027\u80FD\u9700\u6C42\uFF0C\u9002\u5F53\u8C03\u6574\u8BE5\u503C\u4EE5\u8FBE\u5230\u6700\u4F73\u7684\u538B\u7F29\u6548\u679C\u548C\u54CD\u5E94\u901F\u5EA6\u3002\u5728\u672A\u63D0\u4F9B\u660E\u786E\u5EFA\u8BAE\u6B65\u9AA4\u53D8\u66F4\u7684\u60C5\u51B5\u4E0B\uFF0C\u7EF4\u6301\u9ED8\u8BA4\u503C\u6216\u6839\u636E\u5B9E\u9645\u76D1\u63A7\u6570\u636E\u8FDB\u884C\u5FAE\u8C03\u901A\u5E38\u662F\u63A8\u8350\u7684\u505A\u6CD5\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u5168\u5C40\u914D\u7F6E\u8BF4\u660E 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u5168\u5C40\u914D\u7F6E\u8BF4\u660E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17156)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`,n={title:"Higress \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-config \u91CC\u9762\u7684chunkSize \u662F\u4EC0\u4E48\u610F\u601D\uFF1F",description:"\u5728 Higress \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 `higress-config` \u91CC\u9762\uFF0C`chunkSize` \u662F\u4E00\u4E2A\u4E0E Gzip \u538B\u7F29\u76F8\u5173\u7684\u914D\u7F6E\u53C2\u6570\u3002\u5177\u4F53\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u53C2\u6570\u6307\u5B9A\u4E86\u5728\u8FDB\u884C Gzip \u538B\u7F29\u65F6\u5904\u7406\u6570\u636E\u7684\u5757\u5927\u5C0F\uFF08\u4EE5\u5B57\u8282\u4E3A\u5355\u4F4D\uFF09\u3002\u9ED8\u8BA4\u503C\u901A\u5E38\u662F 4096 \u5B57\u8282\uFF0C\u4F46\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u6C42\u8C03\u6574\u3002*",keywords:["Higress","\u5168\u5C40\u914D\u7F6E","ConfigMap","higress-config","chunkSize","\u610F\u601D"],date:"2024-09-19",category:"expertConsultation"},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17143.md",rawData:void 0};export{r as _internal,e as body,s as collection,n as data,i as id,o as slug};
