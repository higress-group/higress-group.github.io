const e="latest/zh-cn/plugins/ai/api-provider/ai-prompt-decorator.md",t="docs",o="latest/zh-cn/plugins/ai/api-provider/ai-prompt-decorator",r=`
## \u529F\u80FD\u8BF4\u660E

AI\u63D0\u793A\u8BCD\u63D2\u4EF6\uFF0C\u652F\u6301\u5728LLM\u7684\u8BF7\u6C42\u524D\u540E\u63D2\u5165prompt\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`450\`

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`prepend\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5 |
| \`append\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

## \u793A\u4F8B

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
prepend:
- role: system
  content: "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"
append:
- role: user
  content: "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u662F\u8C01\uFF1F"
    }
  ]
}
\`\`\`

\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "\u8BF7\u4F7F\u7528\u82F1\u8BED\u56DE\u7B54\u95EE\u9898"
    },
    {
      "role": "user",
      "content": "\u4F60\u662F\u8C01\uFF1F"
    },
    {
      "role": "user",
      "content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
    }
  ]
}
\`\`\`


## \u57FA\u4E8Egeo-ip\u63D2\u4EF6\u7684\u80FD\u529B\uFF0C\u6269\u5C55AI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u643A\u5E26\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F
\u5982\u679C\u9700\u8981\u5728LLM\u7684\u8BF7\u6C42\u524D\u540E\u52A0\u5165\u7528\u6237\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u8BF7\u786E\u4FDD\u540C\u65F6\u5F00\u542Fgeo-ip\u63D2\u4EF6\u548CAI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u3002\u5E76\u4E14\u5728\u76F8\u540C\u7684\u8BF7\u6C42\u5904\u7406\u9636\u6BB5\u91CC\uFF0Cgeo-ip\u63D2\u4EF6\u7684\u4F18\u5148\u7EA7\u5FC5\u987B\u9AD8\u4E8EAI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u3002\u9996\u5148geo-ip\u63D2\u4EF6\u4F1A\u6839\u636E\u7528\u6237ip\u8BA1\u7B97\u51FA\u7528\u6237\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u7136\u540E\u901A\u8FC7\u8BF7\u6C42\u5C5E\u6027\u4F20\u9012\u7ED9\u540E\u7EED\u63D2\u4EF6\u3002\u6BD4\u5982\u5728\u9ED8\u8BA4\u9636\u6BB5\u91CC\uFF0Cgeo-ip\u63D2\u4EF6\u7684priority\u914D\u7F6E1000\uFF0Cai-prompt-decorator\u63D2\u4EF6\u7684priority\u914D\u7F6E500\u3002

geo-ip\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A
\`\`\`yaml
ipProtocal: "ipv4"
\`\`\`




AI\u63D0\u793A\u8BCD\u88C5\u9970\u5668\u63D2\u4EF6\u7684\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A
\`\`\`yaml
prepend:
- role: system
  content: "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\${geo-country}\uFF0C\u7701\u4EFD\uFF1A\${geo-province}, \u57CE\u5E02\uFF1A\${geo-city}"
append:
- role: user
  content: "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F"
    }
  ]
}'
\`\`\`

\u7ECF\u8FC7\u63D2\u4EF6\u5904\u7406\u540E\uFF0C\u5B9E\u9645\u8BF7\u6C42\u4E3A\uFF1A

\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "\u63D0\u95EE\u7528\u6237\u5F53\u524D\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u662F\uFF0C\u56FD\u5BB6\uFF1A\u4E2D\u56FD\uFF0C\u7701\u4EFD\uFF1A\u5317\u4EAC, \u57CE\u5E02\uFF1A\u5317\u4EAC"
    },
    {
      "role": "user",
      "content": "\u4ECA\u5929\u5929\u6C14\u600E\u4E48\u6837\uFF1F"
    },
    {
      "role": "user",
      "content": "\u6BCF\u6B21\u56DE\u7B54\u5B8C\u95EE\u9898\uFF0C\u5C1D\u8BD5\u8FDB\u884C\u53CD\u95EE"
    }
  ]
}'
\`\`\`


`,s={title:"AI \u63D0\u793A\u8BCD",description:"AI \u63D0\u793A\u8BCD\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI\u63D0\u793A\u8BCD"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-provider/ai-prompt-decorator.md",rawData:void 0};export{n as _internal,r as body,t as collection,s as data,e as id,o as slug};
