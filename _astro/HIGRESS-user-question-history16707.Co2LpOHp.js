const s="HIGRESS-user-question-history16707.md",e="faq",r="higress-user-question-history16707",o=`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 \u5982\u4F55\u5728higress\u91CC\u83B7\u53D6\u7528\u6237\u7684\u771F\u5B9E\u8BBF\u95EEIP  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u5728 Higress \u4E2D\u83B7\u53D6\u7528\u6237\u7684\u771F\u5B9E\u8BBF\u95EE IP\uFF0C\u901A\u5E38\u6D89\u53CA\u5230 HTTP \u8BF7\u6C42\u5934\u7684\u5904\u7406\uFF0C\u56E0\u4E3A\u8D1F\u8F7D\u5747\u8861\u5668\u6216\u4EE3\u7406\u670D\u52A1\u5668\uFF08\u5982 Nginx\u3001HAProxy \u6216\u4E91\u670D\u52A1\u5546\u7684\u8D1F\u8F7D\u5747\u8861\uFF09\u4F1A\u5728\u8F6C\u53D1\u8BF7\u6C42\u65F6\u6DFB\u52A0\u7279\u5B9A\u7684 HTTP \u5934\u90E8\uFF0C\u7528\u4E8E\u6307\u793A\u539F\u59CB\u5BA2\u6237\u7AEF\u7684 IP \u5730\u5740\u3002Higress \u4F5C\u4E3A Ingress \u63A7\u5236\u5668\uFF0C\u9700\u8981\u914D\u7F6E\u4EE5\u8BC6\u522B\u5E76\u4F7F\u7528\u8FD9\u4E9B\u5934\u90E8\u6765\u786E\u5B9A\u771F\u5B9E\u5BA2\u6237\u7AEF IP\u3002

### \u5206\u6790\u539F\u56E0
- **X-Forwarded-For (XFF) Header**: \u901A\u5E38\u662F\u7528\u6765\u4F20\u9012\u539F\u59CB\u5BA2\u6237\u7AEF\u7684 IP \u5730\u5740\uFF0C\u5F53\u8BF7\u6C42\u7ECF\u8FC7\u591A\u4E2A\u4EE3\u7406\u6216\u8D1F\u8F7D\u5747\u8861\u5668\u65F6\uFF0C\u8FD9\u4E2A\u5934\u90E8\u4F1A\u5305\u542B\u6240\u6709\u4E2D\u95F4\u8282\u70B9\u7684 IP\uFF0C\u6700\u540E\u4E00\u4E2A IP \u901A\u5E38\u662F\u539F\u59CB\u5BA2\u6237\u7AEF\u7684 IP\u3002
- **Higress \u914D\u7F6E**: \u9700\u8981\u6B63\u786E\u914D\u7F6E\u4EE5\u89E3\u6790\u8FD9\u4E9B\u5934\u90E8\u4FE1\u606F\uFF0C\u5E76\u5C06\u6B63\u786E\u7684 IP \u5730\u5740\u7528\u4E8E\u65E5\u5FD7\u8BB0\u5F55\u3001\u8BBF\u95EE\u63A7\u5236\u6216\u5176\u4ED6\u76EE\u7684\u3002

### \u89E3\u51B3\u6B65\u9AA4
\u867D\u7136\u76F4\u63A5\u7684\u914D\u7F6E\u793A\u4F8B\u672A\u5728\u63D0\u4F9B\u7684\u77E5\u8BC6\u4E2D\u7ED9\u51FA\uFF0C\u4F46\u57FA\u4E8E\u901A\u7528\u505A\u6CD5\uFF0C\u4F60\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0B\u6B65\u9AA4\u914D\u7F6E Higress \u4EE5\u8BC6\u522B\u771F\u5B9E\u8BBF\u95EE IP\uFF1A

1. **\u68C0\u67E5\u73B0\u6709\u914D\u7F6E**: \u9996\u5148\uFF0C\u67E5\u770B\u73B0\u6709\u7684 Higress Ingress \u89C4\u5219\u914D\u7F6E\uFF0C\u786E\u8BA4\u662F\u5426\u5DF2\u6709\u76F8\u5173\u8BBE\u7F6E\u5904\u7406 \`X-Forwarded-For\` \u6216\u5176\u4ED6\u7C7B\u4F3C\u5934\u90E8\uFF08\u5982 \`X-Real-IP\`\uFF09\u3002

2. **\u66F4\u65B0\u6216\u521B\u5EFA Ingress \u89C4\u5219**: \u5982\u679C\u6CA1\u6709\u76F8\u5173\u8BBE\u7F6E\uFF0C\u4F60\u9700\u8981\u5728\u5BF9\u5E94\u7684 Higress Ingress \u89C4\u5219\u4E2D\u6DFB\u52A0\u6CE8\u89E3\u6765\u542F\u7528\u548C\u914D\u7F6E\u771F\u5B9E IP \u7684\u8BC6\u522B\u3002\u793A\u4F8B\u5982\u4E0B\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E2A\u793A\u610F\u6027\u7684\u914D\u7F6E\uFF0C\u5B9E\u9645\u914D\u7F6E\u53EF\u80FD\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\uFF1A

   \`\`\`yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: example-ingress
     annotations:
       # \u6CE8\u610F\uFF1A\u6B64\u5904\u7684\u6CE8\u89E3\u540D\u79F0\u662F\u793A\u610F\u6027\u7684\uFF0CHigress \u53EF\u80FD\u6709\u5176\u7279\u5B9A\u7684\u6CE8\u89E3\u6765\u5904\u7406\u6B64\u7C7B\u9700\u6C42
       higress.io/real-ip-header: "X-Forwarded-For"
       higress.io/trusted-proxy-list: "10.0.0.1,10.0.0.2" # \u5217\u51FA\u4F60\u7684\u4FE1\u4EFB\u4EE3\u7406 IP\uFF0C\u786E\u4FDD\u5B83\u4EEC\u4E0D\u4F1A\u88AB\u9519\u8BEF\u5730\u5F53\u4F5C\u5BA2\u6237\u7AEF IP
   spec:
     rules:
     - host: example.com
       http:
         paths:
         - pathType: Prefix
           path: "/"
           backend:
             service:
               name: example-service
               port:
                 name: http
   \`\`\`

3. **\u9A8C\u8BC1\u914D\u7F6E**: \u5E94\u7528\u914D\u7F6E\u66F4\u6539\u540E\uFF0C\u53D1\u9001\u4E00\u4E9B\u6D4B\u8BD5\u8BF7\u6C42\u81F3\u4F60\u7684\u670D\u52A1\uFF0C\u5E76\u68C0\u67E5 Higress \u751F\u6210\u7684\u65E5\u5FD7\u6216\u8BBF\u95EE\u8BB0\u5F55\uFF0C\u786E\u8BA4\u771F\u5B9E\u5BA2\u6237\u7AEF IP \u662F\u5426\u88AB\u6B63\u786E\u8BC6\u522B\u3002

### \u89E3\u91CA
- **\u4E3A\u4EC0\u4E48\u9700\u8981\u4FE1\u4EFB\u4EE3\u7406\u5217\u8868**: \u6307\u5B9A\u4FE1\u4EFB\u7684\u4EE3\u7406 IP \u662F\u4E3A\u4E86\u5B89\u5168\u8003\u8651\uFF0C\u786E\u4FDD\u53EA\u6709\u6765\u81EA\u8FD9\u4E9B IP \u7684 \`X-Forwarded-For\` \u5934\u90E8\u624D\u4F1A\u88AB Higress \u4F7F\u7528\uFF0C\u907F\u514D\u6076\u610F\u7528\u6237\u4F2A\u9020\u6B64\u5934\u90E8\u4FE1\u606F\u3002
- **\u914D\u7F6E\u7075\u6D3B\u6027**: Higress \u652F\u6301\u591A\u79CD\u914D\u7F6E\u65B9\u5F0F\uFF0C\u5177\u4F53\u5B9E\u73B0\u53EF\u80FD\u4F9D\u8D56\u4E8E\u5176\u5185\u7F6E\u7684\u529F\u80FD\u6216\u901A\u8FC7\u63D2\u4EF6\u6269\u5C55\uFF0C\u56E0\u6B64\u4E0A\u8FF0\u914D\u7F6E\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5B9E\u9645\u64CD\u4F5C\u65F6\u5E94\u53C2\u7167 Higress \u6700\u65B0\u6587\u6863\u8FDB\u884C\u3002

### \u6CE8\u610F
\u8BF7\u67E5\u9605 Higress \u7684\u5B98\u65B9\u6587\u6863\uFF0C\u7279\u522B\u662F\u5173\u4E8E\u914D\u7F6E\u548C\u670D\u52A1\u53D1\u73B0\u7684\u90E8\u5206[[Higress \u914D\u7F6E](https://higress.io/docs/user/configurations)]\uFF0C\u4EE5\u83B7\u53D6\u6700\u51C6\u786E\u548C\u6700\u65B0\u7684\u914D\u7F6E\u6307\u5BFC\u3002\u5982\u679C\u6709\u5173\u4E8E\u7279\u5B9A\u7248\u672C\u6216\u529F\u80FD\u7684\u7591\u95EE\uFF0C\u76F4\u63A5\u67E5\u8BE2\u6587\u6863\u6216\u793E\u533A\u8BBA\u575B\u5C06\u662F\u6700\u4F73\u9009\u62E9\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528higress 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1Ahigress \u80FD\u5426\u652F\u6301\u6309\u57DF\u540D\u8BB0\u5F55\u8BBF\u95EE\u65E5\u5FD7 
 
 * \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress \u5982\u4F55\u81EA\u52A8\u53D1\u73B0service 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16721)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`,i={title:"\u5982\u4F55\u5728higress\u91CC\u83B7\u53D6\u7528\u6237\u7684\u771F\u5B9E\u8BBF\u95EEIP",description:"\u5728 Higress \u4E2D\u83B7\u53D6\u7528\u6237\u7684\u771F\u5B9E\u8BBF\u95EE IP\uFF0C\u901A\u5E38\u6D89\u53CA\u5230 HTTP \u8BF7\u6C42\u5934\u7684\u5904\u7406\uFF0C\u56E0\u4E3A\u8D1F\u8F7D\u5747\u8861\u5668\u6216\u4EE3\u7406\u670D\u52A1\u5668\uFF08\u5982 Nginx\u3001HAProxy \u6216\u4E91\u670D\u52A1\u5546\u7684\u8D1F\u8F7D\u5747\u8861\uFF09\u4F1A\u5728\u8F6C\u53D1\u8BF7\u6C42\u65F6\u6DFB\u52A0\u7279\u5B9A\u7684 HTTP \u5934\u90E8\uFF0C\u7528\u4E8E\u6307\u793A\u539F\u59CB\u5BA2\u6237\u7AEF\u7684 IP \u5730\u5740\u3002Higress \u4F5C\u4E3A Ingress \u63A7\u5236\u5668\uFF0C\u9700\u8981\u914D\u7F6E\u4EE5\u8BC6",keywords:["higress","\u83B7\u53D6","\u7528\u6237","\u771F\u5B9E","\u8BBF\u95EE","IP","\u65B9\u6CD5"],date:"2024-09-26",category:"expertConsultation"},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history16707.md",rawData:void 0};export{t as _internal,o as body,e as collection,i as data,s as id,r as slug};