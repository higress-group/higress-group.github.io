const e="latest/zh-cn/plugins/ai/api-provider/ai-cache.md",t="docs",s="latest/zh-cn/plugins/ai/api-provider/ai-cache",o=`

## \u529F\u80FD\u8BF4\u660E

LLM \u7ED3\u679C\u7F13\u5B58\u63D2\u4EF6\uFF0C\u9ED8\u8BA4\u914D\u7F6E\u65B9\u5F0F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E openai \u534F\u8BAE\u7684\u7ED3\u679C\u7F13\u5B58\uFF0C\u540C\u65F6\u652F\u6301\u6D41\u5F0F\u548C\u975E\u6D41\u5F0F\u54CD\u5E94\u7684\u7F13\u5B58\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`10\`

## \u914D\u7F6E\u8BF4\u660E

| Name                              | Type     | Requirement | Default                                                                                                                                                                                                                                                 | Description                                                                                                |
| --------                          | -------- | --------    | --------                                                                                                                                                                                                                                                | --------                                                                                                   |
| cacheKeyFrom.requestBody          | string   | optional    | "messages.@reverse.0.content"                                                                                                                                                                                                                           | \u4ECE\u8BF7\u6C42 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32     |
| cacheValueFrom.responseBody       | string   | optional    | "choices.0.message.content"                                                                                                                                                                                                                             | \u4ECE\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32     |
| cacheStreamValueFrom.responseBody | string   | optional    | "choices.0.delta.content"                                                                                                                                                                                                                               | \u4ECE\u6D41\u5F0F\u54CD\u5E94 Body \u4E2D\u57FA\u4E8E [GJSON PATH](https://github.com/tidwall/gjson/blob/master/SYNTAX.md) \u8BED\u6CD5\u63D0\u53D6\u5B57\u7B26\u4E32 |
| cacheKeyPrefix                    | string   | optional    | "higress-ai-cache:"                                                                                                                                                                                                                                     | Redis\u7F13\u5B58Key\u7684\u524D\u7F00                                                                                         |
| cacheTTL                          | integer  | optional    | 0                                                                                                                                                                                                                                                       | \u7F13\u5B58\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u5355\u4F4D\u662F\u79D2\uFF0C\u9ED8\u8BA4\u503C\u4E3A0\uFF0C\u5373\u6C38\u4E0D\u8FC7\u671F                                                            |
| redis.serviceName                 | string   | requried    | -                                                                                                                                                                                                                                                       | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local               |
| redis.servicePort                 | integer  | optional    | 6379                                                                                                                                                                                                                                                    | redis \u670D\u52A1\u7AEF\u53E3                                                                                             |
| redis.timeout                     | integer  | optional    | 1000                                                                                                                                                                                                                                                    | \u8BF7\u6C42 redis \u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2                                                                          |
| redis.username                    | string   | optional    | -                                                                                                                                                                                                                                                       | \u767B\u9646 redis \u7684\u7528\u6237\u540D                                                                                        |
| redis.password                    | string   | optional    | -                                                                                                                                                                                                                                                       | \u767B\u9646 redis \u7684\u5BC6\u7801                                                                                          |
| returnResponseTemplate            | string   | optional    | \`{"id":"from-cache","choices":[%s],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\`                                                                                                     | \u8FD4\u56DE HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206                                              |
| returnStreamResponseTemplate      | string   | optional    | \`data:{"id":"from-cache","choices":[{"index":0,"delta":{"role":"assistant","content":"%s"},"finish_reason":"stop"}],"model":"gpt-4o","object":"chat.completion","usage":{"prompt_tokens":0,"completion_tokens":0,"total_tokens":0}}\\n\\ndata:[DONE]\\n\\n\` | \u8FD4\u56DE\u6D41\u5F0F HTTP \u54CD\u5E94\u7684\u6A21\u7248\uFF0C\u7528 %s \u6807\u8BB0\u9700\u8981\u88AB cache value \u66FF\u6362\u7684\u90E8\u5206                                          |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
redis:
  serviceName: my-redis.dns
  timeout: 2000
\`\`\`

## \u8FDB\u9636\u7528\u6CD5

\u5F53\u524D\u9ED8\u8BA4\u7684\u7F13\u5B58 key \u662F\u57FA\u4E8E GJSON PATH \u7684\u8868\u8FBE\u5F0F\uFF1A\`messages.@reverse.0.content\` \u63D0\u53D6\uFF0C\u542B\u4E49\u662F\u628A messages \u6570\u7EC4\u53CD\u8F6C\u540E\u53D6\u7B2C\u4E00\u9879\u7684 content\uFF1B

GJSON PATH \u652F\u6301\u6761\u4EF6\u5224\u65AD\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u6700\u540E\u4E00\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A \`messages.@reverse.#(role=="user").content\`\uFF1B

\u5982\u679C\u5E0C\u671B\u5C06\u6240\u6709 role \u4E3A user \u7684 content \u62FC\u6210\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A\`messages.@reverse.#(role=="user")#.content\`\uFF1B

\u8FD8\u53EF\u4EE5\u652F\u6301\u7BA1\u9053\u8BED\u6CD5\uFF0C\u4F8B\u5982\u5E0C\u671B\u53D6\u5230\u6570\u7B2C\u4E8C\u4E2A role \u4E3A user \u7684 content \u4F5C\u4E3A key\uFF0C\u53EF\u4EE5\u5199\u6210\uFF1A\`messages.@reverse.#(role=="user")#.content|1\`\u3002

\u66F4\u591A\u7528\u6CD5\u53EF\u4EE5\u53C2\u8003[\u5B98\u65B9\u6587\u6863](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\uFF0C\u53EF\u4EE5\u4F7F\u7528 [GJSON Playground](https://gjson.dev/) \u8FDB\u884C\u8BED\u6CD5\u6D4B\u8BD5\u3002
`,i={title:"AI \u7F13\u5B58",description:"AI \u7F13\u5B58\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai cache"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-cache.md",rawData:void 0};export{r as _internal,o as body,t as collection,i as data,e as id,s as slug};
