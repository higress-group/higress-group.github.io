const e="latest/zh-cn/plugins/ai/ai-prompt-template.md",t="docs",a="latest/zh-cn/plugins/ai/ai-prompt-template",r=`
## \u529F\u80FD\u8BF4\u660E

AI \u63D0\u793A\u8BCD\u6A21\u7248\u63D2\u4EF6\u7528\u4E8E\u5FEB\u901F\u6784\u5EFA\u56FA\u5B9A\u683C\u5F0F\u7684 Prompt\uFF0C\u5BF9\u4E8E\u7279\u5B9A\u5E94\u7528\u9700\u8981\u9650\u5236\u95EE\u9898\u683C\u5F0F\u7684\u573A\u666F\u4F1A\u6BD4\u8F83\u6709\u5E2E\u52A9\uFF0C\u53EF\u4EE5\u5728\u7F51\u5173\u4E0A\u914D\u7F6E Prompt \u6A21\u7248\uFF0C\u5E76\u57FA\u4E8E\u5927\u6A21\u578B\u7684\u80FD\u529B\u6765\u63D0\u4F9B\u5BF9\u5E94\u7684 API\u3002

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
\`\`\``,o={title:"AI \u63D0\u793A\u8BCD\u6A21\u677F",description:"AI \u63D0\u793A\u8BCD\u6A21\u7248\u63D2\u4EF6\u7528\u4E8E\u5FEB\u901F\u6784\u5EFA\u56FA\u5B9A\u683C\u5F0F\u7684 Prompt\uFF0C\u5BF9\u4E8E\u7279\u5B9A\u5E94\u7528\u9700\u8981\u9650\u5236\u95EE\u9898\u683C\u5F0F\u7684\u573A\u666F\u4F1A\u6BD4\u8F83\u6709\u5E2E\u52A9\uFF0C\u53EF\u4EE5\u5728\u7F51\u5173\u4E0A\u914D\u7F6E Prompt \u6A21\u7248\uFF0C\u5E76\u57FA\u4E8E\u5927\u6A21\u578B\u7684\u80FD\u529B\u6765\u63D0\u4F9B\u5BF9\u5E94\u7684 API\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai"]},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-prompt-template.md",rawData:void 0};export{s as _internal,r as body,t as collection,o as data,e as id,a as slug};
