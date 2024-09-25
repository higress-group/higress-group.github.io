const e="latest/zh-cn/plugins/ai/api-dev/ai-prompt-template.md",t="docs",a="latest/zh-cn/plugins/ai/api-dev/ai-prompt-template",o=`
## \u529F\u80FD\u8BF4\u660E

AI\u63D0\u793A\u8BCD\u6A21\u677F\uFF0C\u7528\u4E8E\u5FEB\u901F\u6784\u5EFA\u540C\u7C7B\u578B\u7684AI\u8BF7\u6C42\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`500\`

## \u914D\u7F6E\u8BF4\u660E
| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`templates\` | array of object | \u5FC5\u586B | - | \u6A21\u677F\u8BBE\u7F6E |

template object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`name\` | string | \u5FC5\u586B | - | \u6A21\u677F\u540D\u79F0 |
| \`template.model\` | string | \u5FC5\u586B | - | \u6A21\u578B\u540D\u79F0 |
| \`template.messages\` | array of object | \u5FC5\u586B | - | \u5927\u6A21\u578B\u8F93\u5165 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
templates:
- name: "developer-chat"
  template:
    model: gpt-3.5-turbo
    messages:
    - role: system
      content: "You are a {{program}} expert, in {{language}} programming language."
    - role: user
      content: "Write me a {{program}} program."
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u7684\u8BF7\u6C42body\u793A\u4F8B\uFF1A

\`\`\`json
{
  "template": "developer-chat",
  "properties": {
    "program": "quick sort",
    "language": "python"
  }
}
\`\`\`
`,r={title:"AI \u63D0\u793A\u8BCD\u6A21\u7248",description:"AI \u63D0\u793A\u8BCD\u6A21\u7248\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI\u63D0\u793A\u8BCD\u6A21\u7248"]},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-prompt-template.md",rawData:void 0};export{s as _internal,o as body,t as collection,r as data,e as id,a as slug};
