const e="latest/zh-cn/plugins/security/request-block.md",o="docs",l="latest/zh-cn/plugins/security/request-block",s=`
## \u529F\u80FD\u8BF4\u660E
\`request-block\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E URL\u3001\u8BF7\u6C42\u5934\u7B49\u7279\u5F81\u5C4F\u853D HTTP \u8BF7\u6C42\uFF0C\u53EF\u4EE5\u7528\u4E8E\u9632\u62A4\u90E8\u5206\u7AD9\u70B9\u8D44\u6E90\u4E0D\u5BF9\u5916\u90E8\u66B4\u9732

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9274\u6743\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`320\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
|  block_urls     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D URL \u7684\u5B57\u7B26\u4E32   |
|  block_headers     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Header \u7684\u5B57\u7B26\u4E32   |
|  block_bodies     |  array of string     | \u9009\u586B\uFF0C\`block_urls\`,\`block_headers\`,\`block_bodies\` \u4E2D\u81F3\u5C11\u5FC5\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u7528\u4E8E\u5339\u914D\u9700\u8981\u5C4F\u853D\u8BF7\u6C42 Body \u7684\u5B57\u7B26\u4E32   |
|  blocked_code     |  number     | \u9009\u586B     |   403  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801   |
|  blocked_message     |  string     | \u9009\u586B     |   -  |  \u914D\u7F6E\u8BF7\u6C42\u88AB\u5C4F\u853D\u65F6\u8FD4\u56DE\u7684 HTTP \u5E94\u7B54 Body   |
|  case_sensitive     |  bool     | \u9009\u586B     |   true  |  \u914D\u7F6E\u5339\u914D\u65F6\u662F\u5426\u533A\u5206\u5927\u5C0F\u5199\uFF0C\u9ED8\u8BA4\u533A\u5206   |

## \u914D\u7F6E\u793A\u4F8B

### \u5C4F\u853D\u8BF7\u6C42 url \u8DEF\u5F84
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

### \u5C4F\u853D\u8BF7\u6C42 header
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

### \u5C4F\u853D\u8BF7\u6C42 body
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


## \u8BF7\u6C42 Body \u5927\u5C0F\u9650\u5236

\u5F53\u914D\u7F6E\u4E86 \`block_bodies\` \u65F6\uFF0C\u4EC5\u652F\u6301\u5C0F\u4E8E 32 MB \u7684\u8BF7\u6C42 Body \u8FDB\u884C\u5339\u914D\u3002\u82E5\u8BF7\u6C42 Body \u5927\u4E8E\u6B64\u9650\u5236\uFF0C\u5E76\u4E14\u4E0D\u5B58\u5728\u5339\u914D\u5230\u7684 \`block_urls\` \u548C \`block_headers\` \u9879\u65F6\uFF0C\u4E0D\u4F1A\u5BF9\u8BE5\u8BF7\u6C42\u6267\u884C\u5C4F\u853D\u64CD\u4F5C
\u5F53\u914D\u7F6E\u4E86 \`block_bodies\` \u65F6\uFF0C\u82E5\u8BF7\u6C42 Body \u8D85\u8FC7\u5168\u5C40\u914D\u7F6E DownstreamConnectionBufferLimits\uFF0C\u5C06\u8FD4\u56DE \`413 Payload Too Large\`
`,r={title:"\u8BF7\u6C42\u5C4F\u853D",description:"\u8BF7\u6C42\u5C4F\u853D\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","request block"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/request-block.md",rawData:void 0};export{a as _internal,s as body,o as collection,r as data,e as id,l as slug};
