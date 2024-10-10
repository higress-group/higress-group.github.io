const e="Higress-gvr7dx_awbbpb_uddq0l7v5a5vadc6.mdx",a="blog",i="higress-gvr7dx_awbbpb_uddq0l7v5a5vadc6",t=`
\u968F\u7740AI\u65F6\u4EE3\u5230\u6765\uFF0C\u57FA\u4E8E\u5927\u6A21\u578B\u7684\u5E94\u7528\u5BF9\u7F51\u5173\u63D0\u51FA\u4E86\u65B0\u7684\u8981\u6C42\uFF0C\u4F8B\u5982\u5728\u4E0D\u540CLLM\u63D0\u4F9B\u5546\u4E4B\u95F4\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861\u3001\u6784\u5EFAAI\u5E94\u7528\u7684\u53EF\u89C2\u6D4B\u80FD\u529B\u3001\u57FA\u4E8Etoken\u7684\u9650\u6D41\u4FDD\u62A4\u4E0E\u914D\u989D\u7BA1\u7406\u3001AI\u5E94\u7528\u5185\u5BB9\u5B89\u5168\u7B49\u7B49\u3002Higress\u57FA\u4E8E\u4F01\u4E1A\u5185\u5916\u7684\u4E30\u5BCC\u573A\u666F\u6C89\u6DC0\u4E86\u4F17\u591A\u9762\u5411AI\u7684\u529F\u80FD\uFF0C\u63A8\u51FA\u4E86AI\u539F\u751F\u7684API\u7F51\u5173\u5F62\u6001\u5E76\u4E14\u5168\u90E8\u5F00\u6E90\u3002<br />![image.png](/img/1728551760428.png)<br />[ChatGPT-Next-Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web) \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u524D\u7AEF\u9879\u76EE\uFF0C\u7528\u4E8E\u63D0\u4F9B\u5927\u6A21\u578B\u804A\u5929\u7A97\u53E3\uFF0C\u652F\u6301\u63A5\u5165\u591A\u79CD\u5927\u6A21\u578B\uFF0C\u672C\u6587\u57FA\u4E8EHigress\u3001\u901A\u4E49\u5343\u95EE\u4EE5\u53CA ChatGPT-Next-Web\uFF0C\u6F14\u793A Higress \u5982\u4F55\u517C\u5BB9 openai \u534F\u8BAE\uFF0C\u5E76\u9010\u6B65\u642D\u5EFA\u4E00\u4E2A\u4F53\u7CFB\u5B8C\u6574\u7684LLM\u5E94\u7528\uFF0C\u5E94\u7528\u6700\u7EC8\u67B6\u6784\u5982\u56FE\u6240\u793A\uFF1A<br />![image.png](/img/1728551760630.png)
<a name="rH4kG"></a>
# AI \u4EE3\u7406
\u5B98\u65B9\u6587\u6863\uFF1A[https://help.aliyun.com/zh/mse/user-guide/ai-agent?spm=a2c4g.11186623.0.0.2927178eciPER4](https://help.aliyun.com/zh/mse/user-guide/ai-agent?spm=a2c4g.11186623.0.0.2927178eciPER4)
<a name="oHwbX"></a>
## \u5E94\u7528\u67B6\u6784
\u9996\u5148\uFF0C\u6211\u4EEC\u5148\u901A\u8FC7\u7F51\u5173\u5FEB\u901F\u90E8\u7F72\u4E00\u4E2A\u53EF\u4EE5\u8FDB\u884C\u5BF9\u8BDD\u7684\u804A\u5929\u5E94\u7528\uFF0C\u5176\u67B6\u6784\u5982\u4E0B\u56FE\u6240\u793A\uFF1A<br />![image.png](/img/1728551760839.png)<br />LLM\u670D\u52A1\u4F7F\u7528\u901A\u4E49\u5343\u95EE\uFF0C\u670D\u52A1\u7C7B\u578B\u4E3ADNS\u3002\u8DEF\u7531\u53CA\u670D\u52A1\u521B\u5EFA\u5B8C\u6210\u540E\u5982\u4E0B\u56FE\u6240\u793A\uFF1A<br />![image.png](/img/1728551761107.png)<br />![image.png](/img/1728551761326.png)
<a name="OHezy"></a>
## \u63D2\u4EF6\u914D\u7F6E
\u8BBE\u7F6E\u8DEF\u7531\u7EA7\u63D2\u4EF6\u89C4\u5219\uFF0C\u9009\u62E9\u5728llm\u8DEF\u7531\u4E0B\u751F\u6548\uFF0C\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`yaml
provider:
  type: qwen
  apiTokens:
    - sk-xxxxxxxxxxxxxxxxxxxxxx
  timeout: 1200000
  modelMapping:
    'gpt-3.5-turbo': qwen-turbo
    'gpt-4': qwen-max
    '*': qwen-max
\`\`\`
<a name="qe1gH"></a>
## \u63D2\u4EF6\u6548\u679C
![1719891176668-c2db8611-1431-4bac-a2f6-d7a829b708fe.png](/img/1728551761695.png)
<a name="aoQWd"></a>
# AI \u53EF\u89C2\u6D4B
\u5B98\u65B9\u6587\u6863\uFF1A[https://help.aliyun.com/zh/mse/user-guide/ai-observable?spm=a2c4g.11186623.0.0.42b4d95f14d39z](https://help.aliyun.com/zh/mse/user-guide/ai-observable?spm=a2c4g.11186623.0.0.42b4d95f14d39z)
<a name="DguUr"></a>
## \u5E94\u7528\u67B6\u6784
\u73B0\u5728\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E86\u57FA\u7840\u7684\u5BF9\u8BDD\u529F\u80FD\uFF0C\u4F5C\u4E3A\u4E00\u6B3E\u7F51\u5173\u4EA7\u54C1\uFF0C\u6211\u4EEC\u5E0C\u671B\u5728\u7F51\u5173\u8FD9\u4E2A\u7EDF\u4E00\u7684\u5165\u53E3\u5904\u5BF9\u5404\u4E2A\u670D\u52A1\u3001\u8DEF\u7531\u7684\u8BF7\u6C42\u60C5\u51B5\u8FDB\u884C\u89C2\u6D4B\u3002\u8003\u8651\u5230LLM\u8BF7\u6C42\u4E3B\u8981\u4EE5token\u4E3A\u89C2\u6D4B\u76EE\u6807\uFF0C\u7F51\u5173\u63D0\u4F9B\u4E86\u5BF9token\u7684\u89C2\u6D4B\u673A\u5236\uFF0C\u5305\u542B\u8DEF\u7531\u7EA7\u3001\u670D\u52A1\u7EA7\u3001\u6A21\u578B\u7EA7\u7684token\u7528\u91CF\u89C2\u6D4B\u3002<br />\u73B0\u5728\uFF0C\u6211\u4EEC\u6539\u53D8\u4E0A\u6587\u7684\u5E94\u7528\u67B6\u6784\uFF0C\u63D2\u5165\u53EF\u89C2\u6D4B\u63D2\u4EF6\uFF0C\u6539\u9020\u540E\u5982\u4E0B\u56FE\u6240\u793A\uFF1A<br />![image.png](/img/1728551761989.png)
<a name="KUhTj"></a>
## \u63D2\u4EF6\u914D\u7F6E
\u4F9D\u7136\u662F\u9009\u62E9\u5728llm\u8FD9\u6761\u8DEF\u7531\u4E0A\u751F\u6548\uFF0C\u63D2\u4EF6\u914D\u7F6E\u5982\u4E0B\uFF1A
\`\`\`yaml
enable: true
\`\`\`
<a name="Lah54"></a>
## \u63D2\u4EF6\u6548\u679C
![image.png](/img/1728551762589.png)
<a name="OnniO"></a>
# AI \u5185\u5BB9\u5B89\u5168
\u5B98\u65B9\u6587\u6863\uFF1A[https://help.aliyun.com/zh/mse/user-guide/ai-content-security?spm=a2c4g.11186623.0.0.4408488dYGAm2X](https://help.aliyun.com/zh/mse/user-guide/ai-content-security?spm=a2c4g.11186623.0.0.4408488dYGAm2X)
<a name="aaqW1"></a>
## \u5E94\u7528\u67B6\u6784
\u5927\u6A21\u578B\u901A\u5E38\u662F\u901A\u8FC7\u5B66\u4E60\u4E92\u8054\u7F51\u4E0A\u5E7F\u6CDB\u53EF\u7528\u7684\u6570\u636E\u6765\u8BAD\u7EC3\u7684\uFF0C\u5B83\u4EEC\u6709\u53EF\u80FD\u5728\u8FC7\u7A0B\u4E2D\u5B66\u4E60\u5230\u5E76\u590D\u73B0\u6709\u5BB3\u5185\u5BB9\u6216\u4E0D\u826F\u8A00\u8BBA\uFF0C\u56E0\u6B64\uFF0C\u5F53\u5927\u6A21\u578B\u672A\u7ECF\u8FC7\u9002\u5F53\u7684\u8FC7\u6EE4\u548C\u76D1\u63A7\u5C31\u751F\u6210\u56DE\u5E94\u65F6\uFF0C\u5B83\u4EEC\u53EF\u80FD\u4EA7\u751F\u5305\u542B\u6709\u5BB3\u8BED\u8A00\u3001\u8BEF\u5BFC\u4FE1\u606F\u3001\u6B67\u89C6\u6027\u8A00\u8BBA\u751A\u81F3\u662F\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u7684\u5185\u5BB9\u3002\u6B63\u662F\u56E0\u4E3A\u8FD9\u79CD\u6F5C\u5728\u7684\u98CE\u9669\uFF0C\u5927\u6A21\u578B\u4E2D\u7684\u5185\u5BB9\u5B89\u5168\u5C31\u663E\u5F97\u5F02\u5E38\u91CD\u8981\u3002<br />\u57FA\u4E8EAI\u5185\u5BB9\u5B89\u5168\u63D2\u4EF6\uFF0C\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u5373\u53EF\u5BF9\u63A5[\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168](https://help.aliyun.com/document_detail/28417.html?spm=a2c4g.28415.0.0.1dab1f55pipQr9)\uFF0C\u4E3A\u5927\u6A21\u578B\u95EE\u7B54\u7684\u5408\u89C4\u6027\u4FDD\u9A7E\u62A4\u822A\u3002<br />![](/img/1728551154645.png)<br />\u914D\u7F6EAI\u5185\u5BB9\u5B89\u5168\u63D2\u4EF6\u540E\uFF0C\u5E94\u7528\u67B6\u6784\u5982\u4E0B\u56FE\u6240\u793A\uFF1A<br />![image.png](/img/1728551762859.png)
<a name="M186m"></a>
## \u63D2\u4EF6\u914D\u7F6E
\u9996\u5148\u9700\u8981\u5728\u7F51\u5173\u914D\u7F6E\u5185\u5BB9\u5B89\u5168\u7684\u670D\u52A1\uFF1A<br />![image.png](/img/1728551763173.png)<br />\u914D\u7F6E\u670D\u52A1\u540E\uFF0C\u5F00\u542F\u5185\u5BB9\u5B89\u5168\u63D2\u4EF6\uFF0C\u9009\u62E9\u5BF9llm\u8DEF\u7531\u751F\u6548\uFF1A
\`\`\`yaml
serviceSource: dns
serviceName: green-cip
servicePort: 443
domain: green-cip.cn-hangzhou.aliyuncs.com
ak: xxxxxxxxxxxxxxxxx
sk: xxxxxxxxxxxxxxxxx
\`\`\`
<a name="X22pR"></a>
## \u63D2\u4EF6\u6548\u679C
![1719903187415-6ef2828c-6a6f-4d5e-acf8-9d4e760dd8ec.png](/img/1728551763552.png)<br />\u767B\u5F55\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u63A7\u5236\u53F0\uFF0C\u53EF\u4EE5\u67E5\u770B\u6BCF\u6761\u8BF7\u6C42\u7684\u5BA1\u8BA1\u8BB0\u5F55\uFF1A<br />![image.png](/img/1728551763874.png)
<a name="nEKyA"></a>
# AI Token \u9650\u6D41
\u5B98\u65B9\u6587\u6863\uFF1A[https://help.aliyun.com/zh/mse/user-guide/ai-token-current-limiting?spm=a2c4g.11186623.0.i4](https://help.aliyun.com/zh/mse/user-guide/ai-token-current-limiting?spm=a2c4g.11186623.0.i4)
<a name="vCKxn"></a>
## \u5E94\u7528\u67B6\u6784
\`ai-token-ratelimit\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0token\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3001\u5BA2\u6237\u7AEF IP \u5730\u5740\u3001consumer \u540D\u79F0\u3001cookie\u4E2D key \u540D\u79F0\u3002\u5176\u501F\u52A9redis\u5B9E\u73B0\u5168\u5C40\u7684token\u9650\u6D41\u3002<br />![](/img/1728551154832.png)<br />\u521B\u5EFA\u4E00\u4E2Aredis\u670D\u52A1\u5E76\u4E14\u5728\u7F51\u5173\u8FDB\u884C\u914D\u7F6E\uFF1A<br />![image.png](/img/1728551764085.png)<br />\u4E4B\u540E\u6DFB\u52A0AI Token\u9650\u6D41\u63D2\u4EF6\uFF0C\u5E94\u7528\u67B6\u6784\u4E3A\uFF1A<br />![image.png](/img/1728551764332.png)
<a name="PeR06"></a>
## \u63D2\u4EF6\u914D\u7F6E
\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_per_ip: from-remote-addr
    limit_keys:
      - key: 0.0.0.0/0
        token_per_minute: 100
redis:
  service_name: redis.static
  service_port: 6379
  username: xxxxxx
  password: xxxxxx
rejected_code: 429
rejected_msg: \u60A8\u7684\u8BF7\u6C42\u9891\u7387\u8FC7\u9AD8\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002
\`\`\`
\u4EE5\u4E0A\u63D2\u4EF6\u914D\u7F6E\u6548\u679C\u4E3A\u6BCF\u4E2Aip\u5730\u5740\u6BCF\u5206\u949F\u5185\u53EA\u80FD\u4F7F\u7528100\u4E2Atoken\uFF0C\u5F53\u8D85\u8FC7token\u9650\u5236\u65F6\uFF0C\u8FD4\u56DE429\uFF0C\u54CD\u5E94body\u4E3A\u201C\u60A8\u7684\u8BF7\u6C42\u9891\u7387\u8FC7\u9AD8\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002\u201D
<a name="awhGj"></a>
## \u63D2\u4EF6\u6548\u679C
![1719910233246-351b4301-12db-4515-b545-efa0f7d719c5.png](/img/1728551764681.png)
<a name="JsZEu"></a>
# AI \u7F13\u5B58
\u5B98\u65B9\u6587\u6863\uFF1A[https://help.aliyun.com/zh/mse/user-guide/ai-cache?spm=a2c4g.11186623.0.0.3cdf306bbJSWdn](https://help.aliyun.com/zh/mse/user-guide/ai-cache?spm=a2c4g.11186623.0.0.3cdf306bbJSWdn)
<a name="TC3o5"></a>
## \u5E94\u7528\u67B6\u6784
AI\u7F13\u5B58\u63D2\u4EF6\u80FD\u591F\u7F13\u5B58\u6BCF\u4E2A\u8BF7\u6C42\u7684\u54CD\u5E94\uFF0C\u5F53\u6709\u76F8\u540C\u8BF7\u6C42\u5230\u6765\u65F6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u5B58\u50A8\u5728redis\u4E2D\u7684\u5927\u6A21\u578B\u7684\u751F\u6210\u5185\u5BB9\uFF0C\u6DFB\u52A0AI\u7F13\u5B58\u63D2\u4EF6\u540E\uFF0C\u5E94\u7528\u67B6\u6784\u4E3A\uFF1A<br />![image.png](/img/1728551764978.png)
<a name="ldB9K"></a>
## \u63D2\u4EF6\u914D\u7F6E
\`\`\`yaml
redis:
  serviceName: redis.static
  servicePort: 6379
  timeout: 2000
  username: xxxxxx
  password: xxxxxx
\`\`\`
<a name="NC8cT"></a>
## \u63D2\u4EF6\u6548\u679C
![1722505213884-217a4538-36eb-4480-99de-b1a88d28466b.png](/img/1728551765369.png)
<a name="s8mOy"></a>
# AI RAG
\u5B98\u65B9\u6587\u6863\uFF1A[https://help.aliyun.com/zh/mse/user-guide/ai-rag?spm=a2c4g.11186623.0.0.24c77267ImcfGS](https://help.aliyun.com/zh/mse/user-guide/ai-rag?spm=a2c4g.11186623.0.0.24c77267ImcfGS)
<a name="kXWcc"></a>
## \u5E94\u7528\u67B6\u6784
\u5927\u6A21\u578B\u5177\u6709\u4E00\u4E2A\u663E\u8457\u7684\u5C40\u9650\u6027\uFF0C\u90A3\u5C31\u662F\u5B83\u4EEC\u7684\u77E5\u8BC6\u622A\u6B62\u5230\u6A21\u578B\u88AB\u8BAD\u7EC3\u7684\u6570\u636E\u3002\u4E00\u65E6\u8BAD\u7EC3\u5B8C\u6210\uFF0C\u6A21\u578B\u5C31\u65E0\u6CD5\u83B7\u53D6\u6216\u5B66\u4E60\u65B0\u7684\u4FE1\u606F\u3002\u6B64\u5916\uFF0C\u5927\u578B\u8BED\u8A00\u6A21\u578B\u7684\u8BAD\u7EC3\u6570\u636E\u867D\u7136\u6D69\u5982\u70DF\u6D77\uFF0C\u4F46\u4ECD\u7136\u6709\u53EF\u80FD\u7F3A\u5C11\u67D0\u4E9B\u9886\u57DF\u7684\u4FE1\u606F\uFF0C\u6216\u8005\u5BF9\u67D0\u4E9B\u4E3B\u9898\u7684\u8986\u76D6\u4E0D\u591F\u6DF1\u5165\uFF0C\u9488\u5BF9\u8FD9\u4E9B\u7EC6\u9886\u57DF\u7684\u67E5\u8BE2\u53EF\u80FD\u4F1A\u4EA7\u751F\u4E0D\u591F\u7CBE\u786E\u6216\u7F3A\u4E4F\u6DF1\u5EA6\u7684\u7ED3\u679C\u3002\u68C0\u7D22\u589E\u5F3A\u751F\u6210\uFF08RAG\uFF09\u6280\u672F\u80FD\u591F\u5229\u7528\u68C0\u7D22\u7CFB\u7EDF\u4ECE\u5927\u89C4\u6A21\u7684\u6570\u636E\u5E93\u4E2D\u627E\u5230\u76F8\u5173\u4FE1\u606F\uFF0C\u7136\u540E\u5C06\u8FD9\u4E9B\u4FE1\u606F\u63D0\u4F9B\u7ED9\u6587\u672C\u751F\u6210\u6A21\u578B\u4EE5\u5E2E\u52A9\u751F\u6210\u66F4\u7CBE\u786E\u3001\u66F4\u4E30\u5BCC\u3001\u66F4\u7B26\u5408\u5B9E\u9645\u60C5\u51B5\u7684\u6587\u672C\u3002<br />Higress \u901A\u8FC7\u5BF9\u63A5\u963F\u91CC\u4E91\u5411\u91CF\u68C0\u7D22\u670D\u52A1\u80FD\u591F\u5FEB\u901F\u5B9E\u73B0RAG\u529F\u80FD\uFF1A<br />![image.png](/img/1728551765602.png)<br />\u6DFB\u52A0RAG\u63D2\u4EF6\u540E\uFF0C\u5E94\u7528\u67B6\u6784\u5982\u4E0B\u56FE\u6240\u793A\uFF1A<br />![image.png](/img/1728551765864.png)
<a name="tHs8a"></a>
## \u63D2\u4EF6\u914D\u7F6E
\u63D2\u4EF6\u9700\u8981\u914D\u7F6Edashscope\u548Cdashvector\u4E24\u4E2A\u4E91\u670D\u52A1\u7684\u76F8\u5173\u4FE1\u606F\uFF1A
\`\`\`yaml
dashscope:
    apiKey: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    serviceName: qwen
    servicePort: 443
    domain: dashscope.aliyuncs.com
dashvector:
    apiKey: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    serviceName: dashvector
    servicePort: 443
    domain: vrs-cn-xxxxxxxxxxxxxx.dashvector.cn-hangzhou.aliyuncs.com
    collection: xxxxxxxxxxxxxx
\`\`\`
<a name="dSbM6"></a>
## \u63D2\u4EF6\u6548\u679C
![1719919418372-f84d6041-4aae-437c-9f53-b302b3733fd8.png](/img/1728551766221.png)
<a name="CTsED"></a>
# \u5176\u4ED6
\u9664\u4E86\u4EE5\u4E0A\u63D2\u4EF6\uFF0C\u6211\u4EEC\u8FD8\u63D0\u4F9B\u4E86\u5BF9prompt\u8FDB\u884C\u4FEE\u6539\u7684\u63D2\u4EF6\u4EE5\u53CA\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u8FDB\u884C\u667A\u80FD\u8F6C\u6362\u7684\u63D2\u4EF6\u3002
<a name="pQch4"></a>
## Prompt\u5DE5\u7A0B\u76F8\u5173\u63D2\u4EF6
Prompt\u63D2\u4EF6\u5305\u62ECprompt\u6A21\u677F\u4EE5\u53CAprompt\u88C5\u9970\u5668\uFF1A

- [prompt\u6A21\u677F](https://help.aliyun.com/zh/mse/user-guide/ai-cue-template?spm=a2c4g.11186623.0.0.768b184f1WdsVb)
- [prompt\u88C5\u9970\u5668](https://help.aliyun.com/zh/mse/user-guide/ai-cue-decorator?spm=a2c4g.11186623.0.0.124548a79q3fyU)

Prompt\u6A21\u677F\u5141\u8BB8\u7528\u6237\u5728\u7F51\u5173\u5B9A\u4E49\u4E00\u7CFB\u5217LLM\u8BF7\u6C42\u7684\u6A21\u677F\uFF0C\u4F7F\u7528\u8005\u901A\u8FC7\u6307\u5B9A\u6A21\u677F\u4E2D\u7684\u53C2\u6570\u5BF9LLM\u8FDB\u884C\u8BBF\u95EE\uFF0C\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A
\`\`\`yaml
templates:
- name: "developer-chat"
  template:
    model: gpt-3.5-turbo
    messages:
    - role: system
      content: "\u4F60\u662F\u4E00\u4E2A {{program}} \u4E13\u5BB6, \u4F60\u5E73\u65F6\u4F7F\u7528\u7684\u7F16\u7A0B\u8BED\u8A00\u4E3A {{language}}"
    - role: user
      content: "\u5E2E\u6211\u5199\u4E00\u4E2A {{program}} \u7A0B\u5E8F, \u4F60\u7684\u8FD4\u56DE\u7ED3\u679C\u91CC\u9762\u5E94\u8BE5\u53EA\u5305\u542Bpython\u4EE3\u7801"
\`\`\`
\u8BF7\u6C42body\u793A\u4F8B\u5982\u4E0B\uFF1A
\`\`\`json
{
  "template": "developer-chat",
  "properties": {
    "program": "\u5192\u6CE1\u6392\u5E8F",
    "language": "python"
  }
}
\`\`\`
Prompt\u88C5\u9970\u5668\u5141\u8BB8\u7528\u6237\u5728\u7F51\u5173\u5B9A\u4E49\u5BF9prompt\u7684\u4FEE\u6539\u64CD\u4F5C\uFF0C\u5305\u62EC\u5728\u539F\u59CB\u8BF7\u6C42\u4E4B\u524D\u548C\u4E4B\u540E\u63D2\u5165message\uFF0C\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF0C\u8BF7\u6C42body\u4E0Eopenai\u7684\u8BF7\u6C42\u4E00\u81F4\u3002
\`\`\`yaml
prepend:
- role: system
  content: "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898."
append:
- role: user
  content: "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
\`\`\`
<a name="V23pX"></a>
## AI \u8BF7\u6C42/\u54CD\u5E94\u667A\u80FD\u8F6C\u6362
\u5B98\u65B9\u6587\u6863\uFF1A[https://help.aliyun.com/zh/mse/user-guide/ai-request-response-intelligent-transformation?spm=a2c4g.11186623.0.0.4f6f63beBCZCAU](https://help.aliyun.com/zh/mse/user-guide/ai-request-response-intelligent-transformation?spm=a2c4g.11186623.0.0.4f6f63beBCZCAU)<br />\u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\u652F\u6301\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u8FDB\u884C\u667A\u80FD\u8F6C\u6362\uFF0C\u5176\u5DE5\u4F5C\u6D41\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\uFF08\u793A\u4F8B\u4E2D\u540E\u7AEF\u670D\u52A1\u4E3Ahttpbin\uFF09\uFF1A<br />![](/img/1728551155021.png)<br />\u6B64\u63D2\u4EF6\u53EF\u7528\u4E8E\u4FEE\u6539\u7ECF\u8FC7\u7F51\u5173\u7684\u8BF7\u6C42/\u54CD\u5E94\u5185\u5BB9\uFF0C\u4F8B\u5982\u5C06xml\u683C\u5F0F\u7684\u54CD\u5E94\u4FEE\u6539\u4E3Ajson\u683C\u5F0F\u3002
<a name="rt3VL"></a>
## \u63D2\u4EF6\u914D\u7F6E
\`\`\`yaml
response: 
    enable: true
    prompt: "\u5E2E\u6211\u4FEE\u6539\u4EE5\u4E0BHTTP\u5E94\u7B54\u4FE1\u606F\uFF0C\u8981\u6C42\uFF1A1. content-type\u4FEE\u6539\u4E3Aapplication/json\uFF1B2. body\u7531xml\u8F6C\u5316\u4E3Ajson\uFF1B3. \u79FB\u9664content-length\u3002"
provider: 
    serviceName: qwen
    domain: dashscope.aliyuncs.com
    apiKey: sk-xxxxxxxxxxxxxxxxxxxxxxxxxxx
\`\`\`
<a name="mvGfx"></a>
## \u63D2\u4EF6\u6548\u679C
\u8BBF\u95EE\u539F\u59CB\u7684httpbin\u7684\`/xml\`\u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A
\`\`\`xml
<?xml version='1.0' encoding='us-ascii'?>

<!--  A SAMPLE set of slides  -->

<slideshow 
  title="Sample Slide Show"
  date="Date of publication"
  author="Yours Truly"
  >

  <!-- TITLE SLIDE -->
  <slide type="all">
    <title>Wake up to WonderWidgets!</title>

  </slide>


  <!-- OVERVIEW -->
  <slide type="all">
    <title>Overview</title>

    <item>Why <em>WonderWidgets</em> are great</item>

    <item/>
    <item>Who <em>buys</em> WonderWidgets</item>

  </slide>


</slideshow>
\`\`\`
\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\uFF0C\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\u7684\`/xml\`\u63A5\u53E3\uFF0C\u7ED3\u679C\u4E3A\uFF1A
\`\`\`json
{
  "slideshow": {
    "title": "Sample Slide Show",
    "date": "Date of publication",
    "author": "Yours Truly",
    "slides": [
      {
        "type": "all",
        "title": "Wake up to WonderWidgets!"
      },
      {
        "type": "all",
        "title": "Overview",
        "items": [
          "Why <em>WonderWidgets</em> are great",
          "",
          "Who <em>buys</em> WonderWidgets"
        ]
      }
    ]
  }
}
\`\`\`

`,m={title:"\u5982\u4F55\u4F7F\u7528 Higress \u5FEB\u901F\u6784\u5EFA AI \u5E94\u7528\uFF1F",description:"\u5982\u4F55\u4F7F\u7528 Higress \u5FEB\u901F\u6784\u5EFA AI \u5E94\u7528\uFF1F",keywords:["Higress"],date:"2024-08-08",category:"article"},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_uddq0l7v5a5vadc6.mdx",rawData:void 0};export{s as _internal,t as body,a as collection,m as data,e as id,i as slug};
