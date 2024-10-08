const s="HIGRESS-user-question-history17012.md",e="faq",o="higress-user-question-history17012",r=`
## \u7528\u6237\u95EE\u9898 \uFF1A 
 higress jwt token  

---------------
## \u4E13\u5BB6\u5B98\u65B9\u89E3\u7B54 \uFF1A

\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress higress jwt token\u300D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5173\u4E8EHigress\u5982\u4F55\u4F7F\u7528JWT\uFF08JSON Web Token\uFF09\u8FDB\u884C\u8BA4\u8BC1\u7684\u4FE1\u606F\u3002\u4E0B\u9762\u6211\u5C06\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u89E3\u7B54\u3002

### Higress JWT \u8BA4\u8BC1\u6982\u89C8

JWT\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u6388\u6743\u6807\u51C6\uFF0C\u5B83\u5141\u8BB8\u5B89\u5168\u5730\u5C06\u4FE1\u606F\u4F5C\u4E3AJSON\u5BF9\u8C61\u5728\u53CC\u65B9\u4E4B\u95F4\u4F20\u8F93\u3002Higress\u5229\u7528JWT\u8BA4\u8BC1\u529F\u80FD\u53EF\u4EE5\u4FDD\u62A4API\uFF0C\u786E\u4FDD\u53EA\u6709\u7ECF\u8FC7\u9A8C\u8BC1\u7684\u7528\u6237\u624D\u80FD\u8BBF\u95EE\u7279\u5B9A\u8D44\u6E90\u3002\u4EE5\u4E0B\u662F\u5173\u952E\u70B9\u6982\u8FF0\uFF1A

1. **JWT\u7ED3\u6784**\uFF1AJWT\u7531\u4E09\u90E8\u5206\u7EC4\u6210\u2014\u2014Header\u3001Payload\u3001Signature\uFF0C\u5206\u522B\u8D1F\u8D23\u5B58\u50A8\u5143\u6570\u636E\u3001\u5B9E\u9645\u8F7D\u8377\u4FE1\u606F\u4EE5\u53CA\u786E\u4FDD\u6D88\u606F\u5B8C\u6574\u6027\u7684\u7B7E\u540D\u3002

2. **\u8BA4\u8BC1\u6D41\u7A0B**\uFF1A\u5F53\u5BA2\u6237\u7AEF\u5411\u53D7\u4FDD\u62A4\u7684\u8DEF\u7531\u53D1\u8D77\u8BF7\u6C42\u65F6\uFF0C\u9700\u643A\u5E26JWT\uFF0C\u8FD9\u53EF\u4EE5\u901A\u8FC7HTTP\u5934\uFF08\u5E38\u89C1\u4E3A\`Authorization: Bearer {token}\`\uFF09\u3001URL\u53C2\u6570\u6216Cookie\u7B49\u65B9\u5F0F\u4F20\u9012\u3002

3. **\u9A8C\u8BC1\u4E0E\u5904\u7406**\uFF1AHigress\u4F1A\u9A8C\u8BC1JWT\u7684\u6709\u6548\u6027\uFF0C\u5305\u62EC\u68C0\u67E5\u7B7E\u540D\u662F\u5426\u6B63\u786E\u3001\u662F\u5426\u8FC7\u671F\u7B49\u3002\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C\u53EF\u57FA\u4E8EJWT\u4E2D\u7684\u58F0\u660E\uFF08claims\uFF09\u8FDB\u4E00\u6B65\u63A7\u5236\u8BBF\u95EE\u6743\u9650\uFF0C\u4F8B\u5982\u901A\u8FC7\`claims_to_headers\`\u914D\u7F6E\u5C06JWT\u4E2D\u7684\u58F0\u660E\u8F6C\u6362\u4E3AHTTP\u54CD\u5E94\u5934\u3002

4. **\u9519\u8BEF\u5904\u7406**\uFF1A\u5982\u679CJWT\u7F3A\u5931\u3001\u8FC7\u671F\u6216\u9A8C\u8BC1\u5931\u8D25\uFF0CHigress\u4F1A\u8FD4\u56DE\u76F8\u5E94\u7684HTTP\u72B6\u6001\u7801\uFF0C\u5982401 Unauthorized\u6216403 Forbidden\uFF0C\u9644\u5E26\u5177\u4F53\u7684\u9519\u8BEF\u4FE1\u606F\u3002

5. **\u914D\u7F6E\u793A\u4F8B**\uFF1A\u901A\u8FC7\u914D\u7F6E\uFF0C\u6BD4\u5982\u8BBE\u7F6E\`consumers\`\u3001\`global_auth\`\u7B49\uFF0C\u53EF\u4EE5\u5B9A\u4E49\u54EA\u4E9BJWT\u7B7E\u53D1\u8005\uFF08issuers\uFF09\u662F\u53EF\u4FE1\u7684\uFF0C\u4EE5\u53CA\u54EA\u4E9B\u8DEF\u7531\u9700\u8981JWT\u8BA4\u8BC1\uFF0C\u751A\u81F3\u53EF\u4EE5\u57FA\u4E8EJWT\u7684\u7279\u5B9A\u58F0\u660E\u6765\u52A8\u6001\u8C03\u6574\u8DEF\u7531\u884C\u4E3A\u3002

### \u793A\u4F8B\u4E0E\u5206\u6790

- **\u5141\u8BB8\u8BBF\u95EE\u7684\u8BF7\u6C42**\uFF1A\u5C55\u793A\u4E86\u5982\u4F55\u901A\u8FC7URL\u53C2\u6570\u548CHTTP\u5934\u4E24\u79CD\u65B9\u5F0F\u643A\u5E26JWT\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5E76\u8BF4\u660E\u4E86\u6210\u529F\u8BA4\u8BC1\u540E\uFF0C\u54CD\u5E94\u5934\u4E2D\u4F1A\u6DFB\u52A0\`X-Mse-Consumer\`\u6765\u6807\u8BC6\u6D88\u8D39\u8005\u8EAB\u4EFD\u3002
  
- **\u62D2\u7EDD\u8BBF\u95EE\u7684\u60C5\u51B5**\uFF1A\u660E\u786E\u4E86\u672A\u643A\u5E26JWT\u6216JWT\u5BF9\u5E94\u7684\u6D88\u8D39\u8005\u65E0\u6743\u8BBF\u95EE\u6307\u5B9A\u8DEF\u7531\u65F6\uFF0CHigress\u5C06\u8FD4\u56DE\u7684\u9519\u8BEF\u7801\u53CA\u539F\u56E0\u3002

### \u7ED3\u8BBA\u4E0E\u64CD\u4F5C\u5EFA\u8BAE

\u5982\u679C\u60A8\u6B63\u5C1D\u8BD5\u5728Higress\u4E2D\u5B9E\u65BDJWT\u8BA4\u8BC1\uFF0C\u5E94\u786E\u4FDD\uFF1A
- \u6B63\u786E\u914D\u7F6EJWT\u9A8C\u8BC1\u7684\u5168\u5C40\u6216\u8DEF\u7531\u7EA7\u8BBE\u7F6E\uFF0C\u5305\u62EC\u6307\u5B9AJWT\u7684\u6765\u6E90\uFF08\u5982\u4ECE\u5934\u3001\u53C2\u6570\u6216Cookie\u4E2D\u63D0\u53D6\uFF09\u548C\u9A8C\u8BC1\u89C4\u5219\u3002
- \u751F\u6210JWT\u65F6\uFF0C\u9700\u786E\u4FDD\u7B7E\u53D1\u8005\uFF08iss\uFF09\u4E0E\u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u4E00\u81F4\uFF0C\u5E76\u5728JWT\u6709\u6548\u671F\u5185\u4F7F\u7528\u3002
- \u5229\u7528\u9519\u8BEF\u7801\u8FDB\u884C\u8C03\u8BD5\uFF0C\u4F8B\u5982\u9047\u5230401\u6216403\u9519\u8BEF\u65F6\uFF0C\u6839\u636E\u9519\u8BEF\u4FE1\u606F\u68C0\u67E5JWT\u7684\u6709\u6548\u6027\u6216\u6743\u9650\u914D\u7F6E\u3002

\u8BF7\u53C2\u7167\u5177\u4F53\u5E94\u7528\u573A\u666F\uFF0C\u7ED3\u5408\u4E0A\u8FF0\u77E5\u8BC6\u8C03\u6574Higress\u7684\u914D\u7F6E\uFF0C\u4EE5\u5B9E\u73B0\u671F\u671B\u7684JWT\u8BA4\u8BC1\u903B\u8F91\u3002\u5982\u679C\u9700\u8981\u66F4\u8BE6\u7EC6\u7684\u914D\u7F6E\u6307\u5357\u6216\u6709\u5176\u4ED6\u5177\u4F53\u95EE\u9898\uFF0C\u8BF7\u544A\u77E5\u4EE5\u4FBF\u63D0\u4F9B\u8FDB\u4E00\u6B65\u5E2E\u52A9\u3002


<font color="#949494">---------------</font> 


## \u53C2\u8003\u94FE\u63A5 \uFF1A

* \u4E13\u5BB6\u7ECF\u9A8C\uFF1AHigress JWT \u8BA4\u8BC1 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">\u7B54\u7591\u670D\u52A1\u8BF4\u660E\uFF1A</font> 

\u672C\u5185\u5BB9\u7ECF\u7531\u6280\u672F\u4E13\u5BB6\u5BA1\u9605\u7684\u7528\u6237\u95EE\u7B54\u7684\u955C\u50CF\u751F\u6210\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86<font color="#FF0000">\u4E13\u5BB6\u667A\u80FD\u7B54\u7591\u670D\u52A1</font>,\u4F7F\u7528\u65B9\u6CD5\uFF1A
\u7528\u6CD51\uFF1A \u5728<font color="#FF0000">\u9875\u9762\u7684\u53F3\u4E0B\u7684\u6D6E\u7A97\u201D\u4E13\u5BB6\u7B54\u7591\u201C</font>\u3002
\u7528\u6CD52\uFF1A \u70B9\u51FB[\u4E13\u5BB6\u7B54\u7591\u9875](https://answer.opensource.alibaba.com/docs/intro)\uFF08\u9488\u5BF9\u90E8\u5206\u7F51\u7AD9\u4E0D\u652F\u6301\u63D2\u4EF6\u5D4C\u5165\u7684\u60C5\u51B5\uFF09
### \u53E6\uFF1A


\u6709\u5176\u4ED6\u5F00\u6E90\u4EA7\u54C1\u7684\u4F7F\u7528\u95EE\u9898\uFF1F[\u70B9\u51FB\u8BBF\u95EE\u963F\u91CCAI\u4E13\u5BB6\u7B54\u7591\u670D\u52A1](https://answer.opensource.alibaba.com/docs/intro)\u3002
### \u53CD\u9988
\u5982\u95EE\u7B54\u6709\u9519\u6F0F\uFF0C\u6B22\u8FCE\u70B9\uFF1A[\u5DEE\u8BC4](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17018)\u7ED9\u6211\u4EEC\u53CD\u9988\u3002
`,t={title:"higress jwt token",description:"\u6839\u636E\u60A8\u7684\u95EE\u9898\u300Chigress higress jwt token\u300D\uFF0C\u6211\u7406\u89E3\u60A8\u60F3\u4E86\u89E3\u5173\u4E8EHigress\u5982\u4F55\u4F7F\u7528JWT\uFF08JSON Web Token\uFF09\u8FDB\u884C\u8BA4\u8BC1\u7684\u4FE1\u606F\u3002\u4E0B\u9762\u6211\u5C06\u57FA\u4E8E\u63D0\u4F9B\u7684\u77E5\u8BC6\u8FDB\u884C\u89E3\u7B54\u3002### Higress JWT \u8BA4\u8BC1\u6982\u89C8JWT\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u548C\u6388\u6743\u6807\u51C6\uFF0C\u5B83\u5141\u8BB8\u5B89\u5168\u5730\u5C06\u4FE1\u606F\u4F5C\u4E3AJSO",keywords:["higress","jwt","token"],date:"2024-09-26",category:"expertConsultation"},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/faq/HIGRESS-user-question-history17012.md",rawData:void 0};export{i as _internal,r as body,e as collection,t as data,s as id,o as slug};