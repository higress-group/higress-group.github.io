const e="HIGRESS-user-question-history16979.md",o="faq",r="higress-user-question-history16979",s=`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 dependency failed to start: container higress-controller-1 is unhealthy  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898 "higress dependency failed to start: container higress-controller-1 is unhealthy"\uFF0C\u8FD9\u8868\u660E Higress \u63A7\u5236\u5668\u5BB9\u5668\u542F\u52A8\u65F6\u9047\u5230\u5065\u5EB7\u68C0\u67E5\u5931\u8D25\u7684\u95EE\u9898\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u6587\u6863\u6CA1\u6709\u76F4\u63A5\u89E3\u51B3\u6B64\u7279\u5B9A\u9519\u8BEF\u7684\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E\u4E00\u822C\u7684\u6545\u969C\u6392\u67E5\u903B\u8F91\u548CHigress\u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E\u7684\u77E5\u8BC6\u6765\u8FDB\u884C\u5206\u6790\u5E76\u7ED9\u51FA\u4E00\u4E9B\u5EFA\u8BAE\u6027\u7684\u6392\u67E5\u65B9\u5411\u3002

### \u5206\u6790\u539F\u56E0\uFF1A

1. **\u914D\u7F6E\u9519\u8BEF**\uFF1A\u5065\u5EB7\u68C0\u67E5\u914D\u7F6E\u4E0D\u6B63\u786E\u6216\u670D\u52A1\u5B9E\u9645\u7AEF\u53E3\u3001\u8DEF\u5F84\u4E0E\u914D\u7F6E\u4E0D\u7B26\u3002
2. **\u670D\u52A1\u672A\u5C31\u7EEA**\uFF1AHigress Controller\u670D\u52A1\u53EF\u80FD\u56E0\u4E3A\u4F9D\u8D56\u95EE\u9898\u3001\u8D44\u6E90\u4E0D\u8DB3\u6216\u5176\u4ED6\u5185\u90E8\u9519\u8BEF\u672A\u80FD\u6210\u529F\u521D\u59CB\u5316\u3002
3. **\u7F51\u7EDC\u95EE\u9898**\uFF1A\u5BB9\u5668\u7F51\u7EDC\u914D\u7F6E\u4E0D\u5F53\uFF0C\u5BFC\u81F4\u5065\u5EB7\u68C0\u67E5\u8BF7\u6C42\u65E0\u6CD5\u5230\u8FBE\u670D\u52A1\u3002
4. **\u65E5\u5FD7\u68C0\u67E5**\uFF1A\u5177\u4F53\u9519\u8BEF\u4FE1\u606F\u901A\u5E38\u8BB0\u5F55\u5728\u5BB9\u5668\u7684\u65E5\u5FD7\u4E2D\uFF0C\u9700\u8981\u67E5\u770B\u4EE5\u83B7\u53D6\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u3002

### \u6392\u67E5\u6B65\u9AA4\uFF1A

#### 1. \u68C0\u67E5\u5065\u5EB7\u68C0\u67E5\u914D\u7F6E
- \u786E\u8BA4\`higress-controller\`\u90E8\u7F72\u914D\u7F6E\u4E2D\u7684\u5065\u5EB7\u68C0\u67E5\u8BBE\u7F6E\u662F\u5426\u6B63\u786E\uFF0C\u5305\u62EC\u63A2\u6D4B\u8DEF\u5F84\u3001\u7AEF\u53E3\u4EE5\u53CA\u9884\u671F\u7684\u54CD\u5E94\u72B6\u6001\u3002

#### 2. \u67E5\u770B\u5BB9\u5668\u65E5\u5FD7
- \u4F7F\u7528\u547D\u4EE4\u5982\`kubectl logs higress-controller-1\`\u6765\u83B7\u53D6\u5BB9\u5668\u5185\u90E8\u7684\u65E5\u5FD7\u8F93\u51FA\uFF0C\u5BFB\u627E\u53EF\u80FD\u7684\u9519\u8BEF\u4FE1\u606F\u6216\u5F02\u5E38\u5806\u6808\u8DDF\u8E2A\u3002

#### 3. \u786E\u8BA4\u4F9D\u8D56\u548C\u670D\u52A1\u72B6\u6001
- \u68C0\u67E5Higress Controller\u4F9D\u8D56\u7684\u670D\u52A1\uFF08\u5982Istio Pilot\uFF09\u662F\u5426\u6B63\u5E38\u8FD0\u884C\uFF0C\u4EE5\u53CA\u662F\u5426\u6709\u4F9D\u8D56\u670D\u52A1\u672A\u6210\u529F\u542F\u52A8\u5BFC\u81F4\u7684\u8FDE\u9501\u6545\u969C\u3002

#### 4. \u8D44\u6E90\u4E0E\u6743\u9650\u68C0\u67E5
- \u786E\u8BA4\u5BB9\u5668\u662F\u5426\u6709\u8DB3\u591F\u7684\u8D44\u6E90\u5206\u914D\uFF08CPU\u3001\u5185\u5B58\uFF09\uFF0C\u4EE5\u53CA\u5FC5\u8981\u7684\u6743\u9650\uFF08\u5982\u8BBF\u95EEIstio API\u7684\u6743\u9650\uFF09\u3002

#### 5. \u7F51\u7EDC\u8FDE\u901A\u6027\u9A8C\u8BC1
- \u7B80\u5355\u7684\u7F51\u7EDC\u8FDE\u901A\u6027\u6D4B\u8BD5\uFF0C\u6BD4\u5982\u4ECE\u540C\u4E00\u7F51\u7EDC\u5185\u7684\u5176\u4ED6\u670D\u52A1\u5C1D\u8BD5\u8BBF\u95EEHigress Controller\u7684\u5065\u5EB7\u68C0\u67E5\u7AEF\u70B9\u3002

### \u89E3\u91CA\uFF1A
\u4EE5\u4E0A\u6B65\u9AA4\u65E8\u5728\u7CFB\u7EDF\u6027\u5730\u6392\u67E5\u548C\u5B9A\u4F4D\u95EE\u9898\u6240\u5728\uFF0C\u4ECE\u914D\u7F6E\u5230\u5177\u4F53\u670D\u52A1\u8FD0\u884C\u72B6\u6001\uFF0C\u6BCF\u4E00\u6B65\u90FD\u662F\u57FA\u4E8E\u5E38\u89C1\u7684\u6545\u969C\u573A\u666F\u8BBE\u8BA1\u7684\u3002\u67E5\u770B\u65E5\u5FD7\u662F\u5173\u952E\u6B65\u9AA4\uFF0C\u56E0\u4E3A\u5B83\u80FD\u76F4\u63A5\u63D0\u4F9B\u670D\u52A1\u5185\u90E8\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u5B9A\u4F4D\u95EE\u9898\u3002\u540C\u65F6\uFF0C\u786E\u4FDD\u6240\u6709\u4F9D\u8D56\u670D\u52A1\u7684\u6B63\u5E38\u8FD0\u884C\u548C\u9002\u5F53\u7684\u8D44\u6E90\u914D\u7F6E\u4E5F\u662F\u907F\u514D\u6B64\u7C7B\u95EE\u9898\u7684\u91CD\u8981\u73AF\u8282\u3002

\u7531\u4E8E\u5177\u4F53\u89E3\u51B3\u65B9\u6848\u4F9D\u8D56\u4E8E\u65E5\u5FD7\u5206\u6790\u7ED3\u679C\uFF0C\u8FD9\u91CC\u672A\u7ED9\u51FA\u76F4\u63A5\u6267\u884C\u7684\u4FEE\u590D\u547D\u4EE4\u3002\u5E0C\u671B\u4E0A\u8FF0\u5206\u6790\u548C\u5EFA\u8BAE\u80FD\u5E2E\u52A9\u60A8\u89E3\u51B3\u95EE\u9898\u3002\u5982\u679C\u95EE\u9898\u4F9D\u65E7\uFF0C\u8003\u8651\u8FDB\u4E00\u6B65\u6DF1\u5165\u65E5\u5FD7\u5206\u6790\u6216\u5BFB\u6C42\u793E\u533A\u652F\u6301\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u7EC4\u4EF6\u7F16\u8BD1\u8BF4\u660E 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16986)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`,t={title:"dependency failed to start: container higress-controller-1 is ",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898 higress dependency failed to start: container higress-controller-1 is unhealthy\uFF0C\u8FD9\u8868\u660E Higress \u63A7\u5236\u5668\u5BB9\u5668\u542F\u52A8\u65F6\u9047\u5230\u5065\u5EB7\u68C0\u67E5\u5931\u8D25\u7684\u95EE\u9898\u3002\u867D\u7136\u63D0\u4F9B\u7684\u77E5\u8BC6\u6587\u6863\u6CA1\u6709\u76F4\u63A5\u89E3\u51B3\u6B64\u7279\u5B9A\u9519\u8BEF\u7684\u6B65\u9AA4\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u4F9D\u636E",keywords:["higress","dependency","failed","start","container","unhealthy"],date:"2024-09-11",category:"expertConsultation"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16979.md",rawData:void 0};export{n as _internal,s as body,o as collection,t as data,e as id,r as slug};