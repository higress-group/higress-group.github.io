const e="latest/zh-cn/plugins/traffic/request-block.md",o="docs",l="latest/zh-cn/plugins/traffic/request-block",s=`
## \u529F\u80FD\u8BF4\u660E

\`request-block\` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
|  block_urls     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D URL \u7684\u5B57\u7B26\u4E32   |
|  block_exact_urls     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u7CBE\u786E\u5C4F\u853D URL \u7684\u5B57\u7B26\u4E32   |
|  block_regexp_urls     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D URL \u7684\u6B63\u5219\u8868\u8FBE\u5F0F  |
|  block_headers     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Header \u7684\u5B57\u7B26\u4E32   |
|  block_bodies     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Body \u7684\u5B57\u7B26\u4E32   |
|  blocked_code     |  number     | \u9009\u586B     |   403  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801   |
|  blocked_message     |  string     | \u9009\u586B     |   -  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u5E94\u7B54 Body   |
|  case_sensitive     |  bool     | \u9009\u586B     |   true  |  \u914D\u7F6E\u5339\u914D\u65F6\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u9ED8\u8BA4\u533A\u5206   |

## \u914D\u7F6E\u793A\u4F8B

### \u5C4F\u853D\u8BF7\u6C42 URL \u8DEF\u5F84

\`\`\`yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com?foo=Bar
curl http://exmaple.com/Swagger.html
\`\`\`

### \u5C4F\u853D\u8BF7\u6C42 Header

\`\`\`yaml
block_headers:
- example-key
- example-value
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com -H 'example-key: 123'
curl http://exmaple.com -H 'my-header: example-value'
\`\`\`

### \u5C4F\u853D\u8BF7\u6C42 Body

\`\`\`yaml
block_bodies:
- "hello world"
case_sensitive: false
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com -d 'Hello World'
curl http://exmaple.com -d 'hello world'
\`\`\`

### \u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F

\`\`\`yaml
# \u4F7F\u7528 matchRules \u5B57\u6BB5\u8FDB\u884C\u7EC6\u7C92\u5EA6\u89C4\u5219\u914D\u7F6E
matchRules:
# \u89C4\u5219\u4E00\uFF1A\u6309 Ingress \u540D\u79F0\u5339\u914D\u751F\u6548
- ingress:
  - default/foo
  - default/bar
  block_bodies: 
  - "hello world"
# \u89C4\u5219\u4E8C\uFF1A\u6309\u57DF\u540D\u5339\u914D\u751F\u6548
- domain:
  - "*.example.com"
  - test.com
  block_urls: 
  - "swagger.html"
  block_bodies:
  - "hello world"
\`\`\`

\u6B64\u4F8B \`ingress\` \u4E2D\u6307\u5B9A\u7684 \`default/foo\` \u548C \`default/bar\` \u5BF9\u5E94 default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u548C bar \u7684 Ingress\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A Ingress \u65F6\uFF0C\u5C06\u4F7F\u7528\u6B64\u6BB5\u914D\u7F6E\uFF1B
\u6B64\u4F8B \`domain\` \u4E2D\u6307\u5B9A\u7684 \`*.example.com\` \u548C \`test.com\` \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u4F7F\u7528\u6B64\u6BB5\u914D\u7F6E\uFF1B
\u914D\u7F6E\u7684\u5339\u914D\u751F\u6548\u987A\u5E8F\uFF0C\u5C06\u6309\u7167 \`matchRules\` \u4E0B\u89C4\u5219\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2A\u89C4\u5219\u540E\u751F\u6548\u5BF9\u5E94\u914D\u7F6E\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565\u3002

## \u8BF7\u6C42 Body \u5927\u5C0F\u9650\u5236

\u5F53\u914D\u7F6E\u4E86 \`block_bodies\` \u65F6\uFF0C\u4EC5\u652F\u6301\u5C0F\u4E8E 32 MB \u7684\u8BF7\u6C42 Body \u8FDB\u884C\u5339\u914D\u3002\u82E5\u8BF7\u6C42 Body \u5927\u4E8E\u6B64\u9650\u5236\uFF0C\u5E76\u4E14\u4E0D\u5B58\u5728\u5339\u914D\u5230\u7684 \`block_urls\` \u548C \`block_headers\` \u9879\u65F6\uFF0C\u4E0D\u4F1A\u5BF9\u8BE5\u8BF7\u6C42\u6267\u884C\u5C4F\u853D\u64CD\u4F5C\u3002
\u5F53\u914D\u7F6E\u4E86 \`block_bodies\` \u65F6\uFF0C\u82E5\u8BF7\u6C42 Body \u8D85\u8FC7\u5168\u5C40\u914D\u7F6E DownstreamConnectionBufferLimits\uFF0C\u5C06\u8FD4\u56DE \`413 Payload Too Large\`\u3002`,a={title:"\u8BF7\u6C42\u5C4F\u853D",description:"\u8BF7\u6C42\u5C4F\u853D\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/request-block.md",rawData:void 0};export{r as _internal,s as body,o as collection,a as data,e as id,l as slug};
