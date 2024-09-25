const e="latest/zh-cn/plugins/ai/api-consumer/ai-quota.md",t="docs",a="latest/zh-cn/plugins/ai/api-consumer/ai-quota",o=`
## \u529F\u80FD\u8BF4\u660E

\`ai-qutoa\` \u63D2\u4EF6\u5B9E\u73B0\u7ED9\u7279\u5B9A consumer \u6839\u636E\u5206\u914D\u56FA\u5B9A\u7684 quota \u8FDB\u884C quota \u7B56\u7565\u9650\u6D41\uFF0C\u540C\u65F6\u652F\u6301 quota \u7BA1\u7406\u80FD\u529B\uFF0C\u5305\u62EC\u67E5\u8BE2 quota \u3001\u5237\u65B0 quota\u3001\u589E\u51CF quota\u3002

\`ai-quota\` \u63D2\u4EF6\u9700\u8981\u914D\u5408 \u8BA4\u8BC1\u63D2\u4EF6\u6BD4\u5982 \`key-auth\`\u3001\`jwt-auth\` \u7B49\u63D2\u4EF6\u83B7\u53D6\u8BA4\u8BC1\u8EAB\u4EFD\u7684 consumer \u540D\u79F0\uFF0C\u540C\u65F6\u9700\u8981\u914D\u5408 \`ai-statatistics\` \u63D2\u4EF6\u83B7\u53D6 AI Token \u7EDF\u8BA1\u4FE1\u606F\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`750\`

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0                 | \u6570\u636E\u7C7B\u578B            | \u586B\u5199\u8981\u6C42                                 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                         |
|--------------------|-----------------|--------------------------------------| ---- |--------------------------------------------|
| \`redis_key_prefix\` | string          |  \u9009\u586B                                     |   chat_quota:   | qutoa redis key \u524D\u7F00                         |
| \`admin_consumer\`   | string          | \u5FC5\u586B                                   |      | \u7BA1\u7406 quota \u7BA1\u7406\u8EAB\u4EFD\u7684 consumer \u540D\u79F0                 |
| \`admin_path\`       | string          | \u9009\u586B                                   |   /quota   | \u7BA1\u7406 quota \u8BF7\u6C42 path \u524D\u7F00                        |
| \`redis\`            | object          | \u662F                                    |      | redis\u76F8\u5173\u914D\u7F6E                                  |

\`redis\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879       | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C                                                     | \u8BF4\u660E                        |
| ------------ | ------ | ---- | ---------------------------------------------------------- | --------------------------- |
| service_name | string | \u5FC5\u586B | -                                                          | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local     |
| service_port | int    | \u5426   | \u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379 | \u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3     |
| username     | string | \u5426   | -                                                          | redis\u7528\u6237\u540D                 |
| password     | string | \u5426   | -                                                          | redis\u5BC6\u7801                   |
| timeout      | int    | \u5426   | 1000                                                       | redis\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |



## \u914D\u7F6E\u793A\u4F8B

### \u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41
\`\`\`yaml
redis_key_prefix: "chat_quota:"
admin_consumer: consumer3
admin_path: /quota
redis:
  service_name: redis-service.default.svc.cluster.local
  service_port: 6379
  timeout: 2000
\`\`\`


###  \u5237\u65B0 quota

\u5982\u679C\u5F53\u524D\u8BF7\u6C42 url \u7684\u540E\u7F00\u7B26\u5408 admin_path\uFF0C\u4F8B\u5982\u63D2\u4EF6\u5728 example.com/v1/chat/completions \u8FD9\u4E2A\u8DEF\u7531\u4E0A\u751F\u6548\uFF0C\u90A3\u4E48\u66F4\u65B0 quota \u53EF\u4EE5\u901A\u8FC7
curl https://example.com/v1/chat/completions/quota/refresh -H "Authorization: Bearer credential3" -d "consumer=consumer1&quota=10000" 

Redis \u4E2D key \u4E3A chat_quota:consumer1 \u7684\u503C\u5C31\u4F1A\u88AB\u5237\u65B0\u4E3A 10000

### \u67E5\u8BE2 quota

\u67E5\u8BE2\u7279\u5B9A\u7528\u6237\u7684 quota \u53EF\u4EE5\u901A\u8FC7 curl https://example.com/v1/chat/completions/quota?consumer=consumer1 -H "Authorization: Bearer credential3"
\u5C06\u8FD4\u56DE\uFF1A {"quota": 10000, "consumer": "consumer1"}

### \u589E\u51CF quota 

\u589E\u51CF\u7279\u5B9A\u7528\u6237\u7684 quota \u53EF\u4EE5\u901A\u8FC7 curl https://example.com/v1/chat/completions/quota/delta -d "consumer=consumer1&value=100" -H "Authorization: Bearer credential3"
\u8FD9\u6837 Redis \u4E2D Key \u4E3A chat_quota:consumer1 \u7684\u503C\u5C31\u4F1A\u589E\u52A0100\uFF0C\u53EF\u4EE5\u652F\u6301\u8D1F\u6570\uFF0C\u5219\u51CF\u53BB\u5BF9\u5E94\u503C\u3002

`,s={title:"AI \u914D\u989D\u7BA1\u7406",description:"AI \u914D\u989D\u7BA1\u7406\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI\u914D\u989D"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-consumer/ai-quota.md",rawData:void 0};export{i as _internal,o as body,t as collection,s as data,e as id,a as slug};
