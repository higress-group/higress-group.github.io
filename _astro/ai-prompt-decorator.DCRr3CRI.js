const t="latest/zh-cn/plugins/ai/ai-prompt-decorator.md",e="docs",o="latest/zh-cn/plugins/ai/ai-prompt-decorator",s=`
## \u529F\u80FD\u8BF4\u660E

AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Higress AI \u7F51\u5173\u6765\u7EDF\u4E00\u5904\u7406\u5E94\u7528\u903B\u8F91\u4E2D\u9700\u8981\u64CD\u63A7 Prompt \u7684\u5730\u65B9\uFF0C\u8BA9\u6240\u6709 LLM API \u6D41\u91CF\u90FD\u7ECF\u8FC7 Higress \u8FDB\u884C\u5904\u7406\uFF0C\u81EA\u52A8\u5B8C\u6210 Prompt \u7684\u7EDF\u4E00\u64CD\u63A7\u3002

# \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`prepend\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5 |
| \`append\` | array of message object | optional | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

# \u793A\u4F8B

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
`,r={title:"AI \u63D0\u793A\u8BCD\u4FEE\u9970",description:"AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-prompt-decorator.md",rawData:void 0};export{a as _internal,s as body,e as collection,r as data,t as id,o as slug};
