const e="latest/zh-cn/plugins/ai/api-provider/ai-security-guard.md",s="docs",t="latest/zh-cn/plugins/ai/api-provider/ai-security-guard",i=`
## \u529F\u80FD\u8BF4\u660E
\u901A\u8FC7\u5BF9\u63A5\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u5927\u6A21\u578B\u7684\u8F93\u5165\u8F93\u51FA\uFF0C\u4FDD\u969C AI \u5E94\u7528\u5185\u5BB9\u5408\u6CD5\u5408\u89C4\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`300\`

## \u914D\u7F6E\u8BF4\u660E
| Name | Type | Requirement | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| \`serviceName\` | string | requried | - | \u670D\u52A1\u540D |
| \`servicePort\` | string | requried | - | \u670D\u52A1\u7AEF\u53E3 |
| \`serviceHost\` | string | requried | - | \u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168 endpoint \u7684\u57DF\u540D |
| \`accessKey\` | string | requried | - | \u963F\u91CC\u4E91 AK |
| \`secretKey\` | string | requried | - | \u963F\u91CC\u4E91 SK |
| \`checkRequest\` | bool | optional | false | \u68C0\u67E5\u63D0\u95EE\u5185\u5BB9\u662F\u5426\u5408\u89C4 |
| \`checkResponse\` | bool | optional | false | \u68C0\u67E5\u5927\u6A21\u578B\u7684\u56DE\u7B54\u5185\u5BB9\u662F\u5426\u5408\u89C4\uFF0C\u751F\u6548\u65F6\u4F1A\u4F7F\u6D41\u5F0F\u54CD\u5E94\u53D8\u4E3A\u975E\u6D41\u5F0F |
| \`requestCheckService\` | string | optional | llm_query_moderation | \u6307\u5B9A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7528\u4E8E\u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u7684\u670D\u52A1 |
| \`responseCheckService\` | string | optional | llm_response_moderation | \u6307\u5B9A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7528\u4E8E\u68C0\u6D4B\u8F93\u51FA\u5185\u5BB9\u7684\u670D\u52A1 |
| \`requestContentJsonPath\` | string | optional | \`messages.@reverse.0.content\` | \u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u8BF7\u6C42 body \u4E2D\u7684j sonpath |
| \`responseContentJsonPath\` | string | optional | \`choices.0.message.content\` | \u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u54CD\u5E94 body \u4E2D\u7684 jsonpath |
| \`responseStreamContentJsonPath\` | string | optional | \`choices.0.delta.content\` | \u6307\u5B9A\u8981\u68C0\u6D4B\u5185\u5BB9\u5728\u6D41\u5F0F\u54CD\u5E94 body \u4E2D\u7684 jsonpath |
| \`denyCode\` | int | optional | 200 | \u6307\u5B9A\u5185\u5BB9\u975E\u6CD5\u65F6\u7684\u54CD\u5E94\u72B6\u6001\u7801 |
| \`denyMessage\` | string | optional | openai \u683C\u5F0F\u7684\u6D41\u5931/\u975E\u6D41\u5F0F\u54CD\u5E94\uFF0C\u56DE\u7B54\u5185\u5BB9\u4E3A\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u7684\u5EFA\u8BAE\u56DE\u7B54 | \u6307\u5B9A\u5185\u5BB9\u975E\u6CD5\u65F6\u7684\u54CD\u5E94\u5185\u5BB9 |


## \u914D\u7F6E\u793A\u4F8B
### \u524D\u63D0\u6761\u4EF6
\u7531\u4E8E\u63D2\u4EF6\u4E2D\u9700\u8981\u8C03\u7528\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u670D\u52A1\uFF0C\u6240\u4EE5\u9700\u8981\u5148\u521B\u5EFA\u4E00\u4E2A DNS \u7C7B\u578B\u7684\u670D\u52A1\uFF0C\u4F8B\u5982\uFF1A

![](https://img.alicdn.com/imgextra/i4/O1CN013AbDcn1slCY19inU2_!!6000000005806-0-tps-1754-1320.jpg)

### \u68C0\u6D4B\u8F93\u5165\u5185\u5BB9\u662F\u5426\u5408\u89C4

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: "green-cip.cn-shanghai.aliyuncs.com"
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
\`\`\`

### \u68C0\u6D4B\u8F93\u5165\u4E0E\u8F93\u51FA\u662F\u5426\u5408\u89C4

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: green-cip.cn-shanghai.aliyuncs.com
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
checkResponse: true
\`\`\`

### \u6307\u5B9A\u81EA\u5B9A\u4E49\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1
\u7528\u6237\u53EF\u80FD\u9700\u8981\u6839\u636E\u4E0D\u540C\u7684\u573A\u666F\u914D\u7F6E\u4E0D\u540C\u7684\u68C0\u6D4B\u89C4\u5219\uFF0C\u8BE5\u95EE\u9898\u53EF\u901A\u8FC7\u4E3A\u4E0D\u540C\u57DF\u540D/\u8DEF\u7531/\u670D\u52A1\u914D\u7F6E\u4E0D\u540C\u7684\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u670D\u52A1\u5B9E\u73B0\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u6211\u4EEC\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A llm_query_moderation_01 \u7684\u68C0\u6D4B\u670D\u52A1\uFF0C\u5176\u4E2D\u7684\u68C0\u6D4B\u89C4\u5219\u5728 llm_query_moderation \u4E4B\u4E0A\u505A\u4E86\u4E00\u4E9B\u6539\u52A8\uFF1A

![](https://img.alicdn.com/imgextra/i4/O1CN01bAtcvn1N9sB16iiZR_!!6000000001528-0-tps-2728-822.jpg)

\u63A5\u4E0B\u6765\u5728\u76EE\u6807\u57DF\u540D/\u8DEF\u7531/\u670D\u52A1\u7EA7\u522B\u8FDB\u884C\u4EE5\u4E0B\u914D\u7F6E\uFF0C\u6307\u5B9A\u4F7F\u7528\u6211\u4EEC\u81EA\u5B9A\u4E49\u7684 llm_query_moderation_01 \u4E2D\u7684\u89C4\u5219\u8FDB\u884C\u68C0\u6D4B\uFF1A

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: "green-cip.cn-shanghai.aliyuncs.com"
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
requestCheckService: llm_query_moderation_01
\`\`\`

### \u914D\u7F6E\u975Eopenai\u534F\u8BAE\uFF08\u4F8B\u5982\u767E\u70BCApp\uFF09

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: "green-cip.cn-shanghai.aliyuncs.com"
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
checkResponse: true
requestContentJsonPath: "input.prompt"
responseContentJsonPath: "output.text"
denyCode: 200
denyMessage: "\u5F88\u62B1\u6B49\uFF0C\u6211\u65E0\u6CD5\u56DE\u7B54\u60A8\u7684\u95EE\u9898"
\`\`\`

## \u53EF\u89C2\u6D4B
### Metric
ai-security-guard \u63D2\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u76D1\u63A7\u6307\u6807\uFF1A
- \`ai_sec_request_deny\`: \u8BF7\u6C42\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B\u5931\u8D25\u8BF7\u6C42\u6570
- \`ai_sec_response_deny\`: \u6A21\u578B\u56DE\u7B54\u5B89\u5168\u68C0\u6D4B\u5931\u8D25\u8BF7\u6C42\u6570

### Trace
\u5982\u679C\u5F00\u542F\u4E86\u94FE\u8DEF\u8FFD\u8E2A\uFF0Cai-security-guard \u63D2\u4EF6\u4F1A\u5728\u8BF7\u6C42 span \u4E2D\u6DFB\u52A0\u4EE5\u4E0B attributes:
- \`ai_sec_risklabel\`: \u8868\u793A\u8BF7\u6C42\u547D\u4E2D\u7684\u98CE\u9669\u7C7B\u578B
- \`ai_sec_deny_phase\`: \u8868\u793A\u8BF7\u6C42\u88AB\u68C0\u6D4B\u5230\u98CE\u9669\u7684\u9636\u6BB5\uFF08\u53D6\u503C\u4E3Arequest\u6216\u8005response\uFF09

## \u8BF7\u6C42\u793A\u4F8B
\`\`\`bash
curl http://localhost/v1/chat/completions \\
-H "Content-Type: application/json" \\
-d '{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "user",
      "content": "\u8FD9\u662F\u4E00\u6BB5\u975E\u6CD5\u5185\u5BB9"
    }
  ]
}'
\`\`\`

\u8BF7\u6C42\u5185\u5BB9\u4F1A\u88AB\u53D1\u9001\u5230\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u670D\u52A1\u8FDB\u884C\u68C0\u6D4B\uFF0C\u5982\u679C\u8BF7\u6C42\u5185\u5BB9\u68C0\u6D4B\u7ED3\u679C\u4E3A\u975E\u6CD5\uFF0C\u7F51\u5173\u5C06\u8FD4\u56DE\u5F62\u5982\u4EE5\u4E0B\u7684\u56DE\u7B54\uFF1A

\`\`\`json
{
    "id": "chatcmpl-123",
    "object": "chat.completion",
    "created": 1677652288,
    "model": "gpt-4o-mini",
    "system_fingerprint": "fp_44709d6fcb",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "\u4F5C\u4E3A\u4E00\u540D\u4EBA\u5DE5\u667A\u80FD\u52A9\u624B\uFF0C\u6211\u4E0D\u80FD\u63D0\u4F9B\u6D89\u53CA\u8272\u60C5\u3001\u66B4\u529B\u3001\u653F\u6CBB\u7B49\u654F\u611F\u8BDD\u9898\u7684\u5185\u5BB9\u3002\u5982\u679C\u60A8\u6709\u5176\u4ED6\u76F8\u5173\u95EE\u9898\uFF0C\u6B22\u8FCE\u60A8\u63D0\u95EE\u3002",
            },
            "logprobs": null,
            "finish_reason": "stop"
        }
    ]
}
\`\`\`
`,n={title:"AI \u5185\u5BB9\u5B89\u5168",description:"\u963F\u91CC\u4E91\u5185\u5BB9\u5B89\u5168\u68C0\u6D4B",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","AI","security"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-security-guard.md",rawData:void 0};export{r as _internal,i as body,s as collection,n as data,e as id,t as slug};
