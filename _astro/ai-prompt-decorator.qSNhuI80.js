const e="latest/zh-cn/plugins/ai/ai-prompt-decorator.md",o="docs",t="latest/zh-cn/plugins/ai/ai-prompt-decorator",r=`
## \u529F\u80FD\u8BF4\u660E

AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\uFF0C\u7528\u6237\u53EF\u4EE5\u4F7F\u7528 Higress AI \u7F51\u5173\u6765\u7EDF\u4E00\u5904\u7406\u5E94\u7528\u903B\u8F91\u4E2D\u9700\u8981\u64CD\u63A7 Prompt \u7684\u5730\u65B9\uFF0C\u8BA9\u6240\u6709 LLM API \u6D41\u91CF\u90FD\u7ECF\u8FC7 Higress \u8FDB\u884C\u5904\u7406\uFF0C\u81EA\u52A8\u5B8C\u6210 Prompt \u7684\u7EDF\u4E00\u64CD\u63A7\u3002

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`decorators\` | array of object | \u5FC5\u586B | - | \u4FEE\u9970\u8BBE\u7F6E |

template object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`name\` | string | \u5FC5\u586B | - | \u4FEE\u9970\u540D\u79F0 |
| \`decorator.prepend\` | array of message object | \u5FC5\u586B | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u524D\u63D2\u5165\u7684\u8BED\u53E5 |
| \`decorator.append\` | array of message object | \u5FC5\u586B | - | \u5728\u521D\u59CB\u8F93\u5165\u4E4B\u540E\u63D2\u5165\u7684\u8BED\u53E5 |

message object \u914D\u7F6E\u8BF4\u660E\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|----------------|-----------------|------|-----|----------------------------------|
| \`role\` | string | \u5FC5\u586B | - | \u89D2\u8272 |
| \`content\` | string | \u5FC5\u586B | - | \u6D88\u606F |

# \u793A\u4F8B

\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
decorators:
- name: "hangzhou-guide"
  decorator:
    prepend:
    - role: system
      content: "You will always respond in the Chinese language."
    - role: user
      content: "Assume you are from Hangzhou."
    append:
    - role: user
      content: "Don't introduce Hangzhou's food."
\`\`\`

\u4F7F\u7528\u4EE5\u4E0A\u914D\u7F6E\u53D1\u8D77\u8BF7\u6C42\uFF1A

\`\`\`bash
{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Please introduce your home."
    }
  ]
}
\`\`\`

\u54CD\u5E94\u5982\u4E0B\uFF1A

\`\`\`
{
  "id": "chatcmpl-9UYwQlEg6GwAswEZBDYXl41RU4gab",
  "object": "chat.completion",
  "created": 1717071182,
  "model": "gpt-3.5-turbo-0125",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\u676D\u5DDE\u662F\u4E00\u4E2A\u7F8E\u4E3D\u7684\u57CE\u5E02\uFF0C\u6709\u7740\u60A0\u4E45\u7684\u5386\u53F2\u548C\u5BCC\u6709\u7279\u8272\u7684\u6587\u5316\u3002\u8FD9\u91CC\u98CE\u666F\u4F18\u7F8E\uFF0C\u6709\u897F\u6E56\u3001\u96F7\u5CF0\u5854\u7B49\u8457\u540D\u666F\u70B9\uFF0C\u5438\u5F15\u7740\u8BB8\u591A\u6E38\u5BA2\u524D\u6765\u89C2\u5149\u3002\u676D\u5DDE\u4EBA\u6C11\u70ED\u60C5\u597D\u5BA2\uFF0C\u57CE\u5E02\u5B81\u9759\u5B89\u9038\uFF0C\u662F\u4E00\u4E2A\u9002\u5408\u5C45\u4F4F\u548C\u65C5\u6E38\u7684\u5730\u65B9\u3002"
      },
      "logprobs": null,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 49,
    "completion_tokens": 117,
    "total_tokens": 166
  },
  "system_fingerprint": null
}
\`\`\`
`,s={title:"AI \u63D0\u793A\u8BCD\u4FEE\u9970",description:"AI \u63D0\u793A\u8BCD\u4FEE\u9970\u63D2\u4EF6\u7528\u4E8E\u5BF9 Prompt \u8FDB\u884C\u8C03\u6574\uFF0C\u652F\u6301\u5728\u7528\u6237\u8F93\u5165\u7684 Prompt \u524D\u540E\u6DFB\u52A0\u989D\u5916\u7684 Prompt\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-prompt-decorator.md",rawData:void 0};export{a as _internal,r as body,o as collection,s as data,e as id,t as slug};
