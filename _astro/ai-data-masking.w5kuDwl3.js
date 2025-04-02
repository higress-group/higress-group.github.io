const e="latest/zh-cn/plugins/ai/api-consumer/ai-data-masking.md",a="docs",t="latest/zh-cn/plugins/ai/api-consumer/ai-data-masking",s=`
## \u529F\u80FD\u8BF4\u660E

  \u5BF9\u8BF7\u6C42/\u8FD4\u56DE\u4E2D\u7684\u654F\u611F\u8BCD\u62E6\u622A\u3001\u66FF\u6362

![image](https://img.alicdn.com/imgextra/i4/O1CN0156Wtko1T9JO0RiWow_!!6000000002339-0-tps-1314-638.jpg)

### \u5904\u7406\u6570\u636E\u8303\u56F4
  - openai\u534F\u8BAE\uFF1A\u8BF7\u6C42/\u8FD4\u56DE\u5BF9\u8BDD\u5185\u5BB9
  - jsonpath\uFF1A\u53EA\u5904\u7406\u6307\u5B9A\u5B57\u6BB5
  - raw\uFF1A\u6574\u4E2A\u8BF7\u6C42/\u8FD4\u56DEbody

### \u654F\u611F\u8BCD\u62E6\u622A
  - \u5904\u7406\u6570\u636E\u8303\u56F4\u4E2D\u51FA\u73B0\u654F\u611F\u8BCD\u76F4\u63A5\u62E6\u622A\uFF0C\u8FD4\u56DE\u9884\u8BBE\u9519\u8BEF\u4FE1\u606F
  - \u652F\u6301\u7CFB\u7EDF\u5185\u7F6E\u654F\u611F\u8BCD\u5E93\u548C\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD

### \u654F\u611F\u8BCD\u66FF\u6362
  - \u5C06\u8BF7\u6C42\u6570\u636E\u4E2D\u51FA\u73B0\u7684\u654F\u611F\u8BCD\u66FF\u6362\u4E3A\u8131\u654F\u5B57\u7B26\u4E32\uFF0C\u4F20\u9012\u7ED9\u540E\u7AEF\u670D\u52A1\u3002\u53EF\u4FDD\u8BC1\u654F\u611F\u6570\u636E\u4E0D\u51FA\u57DF
  - \u90E8\u5206\u8131\u654F\u6570\u636E\u5728\u540E\u7AEF\u670D\u52A1\u8FD4\u56DE\u540E\u53EF\u8FDB\u884C\u8FD8\u539F
  - \u81EA\u5B9A\u4E49\u89C4\u5219\u652F\u6301\u6807\u51C6\u6B63\u5219\u548Cgrok\u89C4\u5219\uFF0C\u66FF\u6362\u5B57\u7B26\u4E32\u652F\u6301\u53D8\u91CF\u66FF\u6362

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`991\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | --------  | -------- | -------- |
|  deny_openai            | bool            | true  |  \u5BF9openai\u534F\u8BAE\u8FDB\u884C\u62E6\u622A |
|  deny_jsonpath          | string          |   []  |  \u5BF9\u6307\u5B9Ajsonpath\u62E6\u622A |
|  deny_raw               | bool            | false |  \u5BF9\u539F\u59CBbody\u62E6\u622A |
|  system_deny            | bool            | false  |  \u5F00\u542F\u5185\u7F6E\u62E6\u622A\u89C4\u5219  |
|  deny_code              | int             | 200   |  \u62E6\u622A\u65F6http\u72B6\u6001\u7801   |
|  deny_message           | string          | \u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D |  \u62E6\u622A\u65F6ai\u8FD4\u56DE\u6D88\u606F   |
|  deny_raw_message       | string          | {"errmsg":"\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D"} |  \u975Eopenai\u62E6\u622A\u65F6\u8FD4\u56DE\u5185\u5BB9   |
|  deny_content_type      | string          | application/json  |  \u975Eopenai\u62E6\u622A\u65F6\u8FD4\u56DEcontent_type\u5934 |
|  deny_words             | array of string | []    |  \u81EA\u5B9A\u4E49\u654F\u611F\u8BCD\u5217\u8868  |
|  replace_roles          | array           |   -   |  \u81EA\u5B9A\u4E49\u654F\u611F\u8BCD\u6B63\u5219\u66FF\u6362  |
|  replace_roles.regex    | string          |   -   |  \u89C4\u5219\u6B63\u5219(\u5185\u7F6EGROK\u89C4\u5219) |
|  replace_roles.type     | [replace, hash] |   -   |  \u66FF\u6362\u7C7B\u578B  |
|  replace_roles.restore  | bool            | false |  \u662F\u5426\u6062\u590D  |
|  replace_roles.value    | string          |   -   |  \u66FF\u6362\u503C\uFF08\u652F\u6301\u6B63\u5219\u53D8\u91CF\uFF09  |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
system_deny: true
deny_openai: true
deny_jsonpath:
  - "$.messages[*].content"
deny_raw: true
deny_code: 200
deny_message: "\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D"
deny_raw_message: "{\\"errmsg\\":\\"\u63D0\u95EE\u6216\u56DE\u7B54\u4E2D\u5305\u542B\u654F\u611F\u8BCD\uFF0C\u5DF2\u88AB\u5C4F\u853D\\"}"
deny_content_type: "application/json"
deny_words: 
  - "\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD1"
  - "\u81EA\u5B9A\u4E49\u654F\u611F\u8BCD2"
replace_roles:
  - regex: "%{MOBILE}"
    type: "replace"
    value: "****"
    # \u624B\u673A\u53F7  13800138000 -> ****
  - regex: "%{EMAILLOCALPART}@%{HOSTNAME:domain}"
    type: "replace"
    restore: true
    value: "****@$domain"
    # \u7535\u5B50\u90AE\u7BB1  admin@gmail.com -> ****@gmail.com
  - regex: "%{IP}"
    type: "replace"
    restore: true
    value: "***.***.***.***"
    # ip 192.168.0.1 -> ***.***.***.***
  - regex: "%{IDCARD}"
    type: "replace"
    value: "****"
    # \u8EAB\u4EFD\u8BC1\u53F7 110000000000000000 -> ****
  - regex: "sk-[0-9a-zA-Z]*"
    restore: true
    type: "hash"
    # hash sk-12345 -> 9cb495455da32f41567dab1d07f1973d
    # hash\u540E\u7684\u503C\u63D0\u4F9B\u7ED9\u5927\u6A21\u578B\uFF0C\u4ECE\u5927\u6A21\u578B\u8FD4\u56DE\u7684\u6570\u636E\u4E2D\u4F1A\u5C06hash\u503C\u8FD8\u539F\u4E3A\u539F\u59CB\u503C
\`\`\`

## \u654F\u611F\u8BCD\u66FF\u6362\u6837\u4F8B

### \u7528\u6237\u8BF7\u6C42\u5185\u5BB9

  \u8BF7\u5C06 \`curl http://172.20.5.14/api/openai/v1/chat/completions -H "Authorization: sk-12345" -H "Auth: test@gmail.com"\` \u6539\u6210post\u65B9\u5F0F

### \u5904\u7406\u540E\u8BF7\u6C42\u5927\u6A21\u578B\u5185\u5BB9

  \`curl http://***.***.***.***/api/openai/v1/chat/completions -H "Authorization: 48a7e98a91d93896d8dac522c5853948" -H "Auth: ****@gmail.com"\` \u6539\u6210post\u65B9\u5F0F

### \u5927\u6A21\u578B\u8FD4\u56DE\u5185\u5BB9

  \u60A8\u60F3\u8981\u5C06\u4E00\u4E2A \`curl\` \u7684 GET \u8BF7\u6C42\u8F6C\u6362\u4E3A POST \u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8BF7\u6C42\u662F\u5411\u4E00\u4E2A\u7279\u5B9A\u7684 API \u53D1\u9001\u6570\u636E\u3002\u4E0B\u9762\u662F\u4FEE\u6539\u540E\u7684 \`curl\` \u547D\u4EE4\uFF0C\u4EE5 POST \u65B9\u5F0F\u53D1\u9001\uFF1A

\`\`\`sh
curl -X POST \\
     -H "Authorization: 48a7e98a91d93896d8dac522c5853948" \\
     -H "Auth: ****@gmail.com" \\
     -H "Content-Type: application/json" \\
     -d '{"key":"value"}' \\
     http://***.***.***.***/api/openai/v1/chat/completions
\`\`\`

\u8FD9\u91CC\u505A\u4E86\u5982\u4E0B\u51E0\u4E2A\u4FEE\u6539:

- \`-X POST\` \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u5F0F\u4E3A POST\u3002
- \`-H "Content-Type: application/json"\` \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4E2D\u7684 \`Content-Type\` \u4E3A \`application/json\`\uFF0C\u8FD9\u901A\u5E38\u7528\u6765\u544A\u8BC9\u670D\u52A1\u5668\u60A8\u53D1\u9001\u7684\u6570\u636E\u683C\u5F0F\u662F JSON\u3002
- \`-d '{"key":"value"}'\` \u8FD9\u91CC\u8BBE\u7F6E\u4E86\u8981\u53D1\u9001\u7684\u6570\u636E\uFF0C\`'{"key":"value"}'\` \u662F\u4E00\u4E2A\u7B80\u5355\u7684 JSON \u5BF9\u8C61\u793A\u4F8B\u3002\u60A8\u9700\u8981\u5C06\u5176\u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u60F3\u8981\u53D1\u9001\u7684\u6570\u636E\u3002

\u8BF7\u6CE8\u610F\uFF0C\u60A8\u9700\u8981\u5C06 \`"key":"value"\` \u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u8981\u53D1\u9001\u7684\u6570\u636E\u5185\u5BB9\u3002\u5982\u679C\u60A8\u7684 API \u63A5\u53D7\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6216\u8005\u9700\u8981\u7279\u5B9A\u7684\u5B57\u6BB5\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FD9\u90E8\u5206\u5185\u5BB9\u3002

### \u5904\u7406\u540E\u8FD4\u56DE\u7528\u6237\u5185\u5BB9

  \u60A8\u60F3\u8981\u5C06\u4E00\u4E2A \`curl\` \u7684 GET \u8BF7\u6C42\u8F6C\u6362\u4E3A POST \u8BF7\u6C42\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u8BF7\u6C42\u662F\u5411\u4E00\u4E2A\u7279\u5B9A\u7684 API \u53D1\u9001\u6570\u636E\u3002\u4E0B\u9762\u662F\u4FEE\u6539\u540E\u7684 \`curl\` \u547D\u4EE4\uFF0C\u4EE5 POST \u65B9\u5F0F\u53D1\u9001\uFF1A

\`\`\`sh
curl -X POST \\
     -H "Authorization: sk-12345" \\
     -H "Auth: test@gmail.com" \\
     -H "Content-Type: application/json" \\
     -d '{"key":"value"}' \\
     http://172.20.5.14/api/openai/v1/chat/completions
\`\`\`

\u8FD9\u91CC\u505A\u4E86\u5982\u4E0B\u51E0\u4E2A\u4FEE\u6539:

- \`-X POST\` \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u5F0F\u4E3A POST\u3002
- \`-H "Content-Type: application/json"\` \u8BBE\u7F6E\u8BF7\u6C42\u5934\u4E2D\u7684 \`Content-Type\` \u4E3A \`application/json\`\uFF0C\u8FD9\u901A\u5E38\u7528\u6765\u544A\u8BC9\u670D\u52A1\u5668\u60A8\u53D1\u9001\u7684\u6570\u636E\u683C\u5F0F\u662F JSON\u3002
- \`-d '{"key":"value"}'\` \u8FD9\u91CC\u8BBE\u7F6E\u4E86\u8981\u53D1\u9001\u7684\u6570\u636E\uFF0C\`'{"key":"value"}'\` \u662F\u4E00\u4E2A\u7B80\u5355\u7684 JSON \u5BF9\u8C61\u793A\u4F8B\u3002\u60A8\u9700\u8981\u5C06\u5176\u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u60F3\u8981\u53D1\u9001\u7684\u6570\u636E\u3002

\u8BF7\u6CE8\u610F\uFF0C\u60A8\u9700\u8981\u5C06 \`"key":"value"\` \u66FF\u6362\u4E3A\u60A8\u5B9E\u9645\u8981\u53D1\u9001\u7684\u6570\u636E\u5185\u5BB9\u3002\u5982\u679C\u60A8\u7684 API \u63A5\u53D7\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u6216\u8005\u9700\u8981\u7279\u5B9A\u7684\u5B57\u6BB5\uFF0C\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u8FD9\u90E8\u5206\u5185\u5BB9\u3002


## \u76F8\u5173\u8BF4\u660E

 - \u6D41\u6A21\u5F0F\u4E2D\u5982\u679C\u8131\u654F\u540E\u7684\u8BCD\u88AB\u591A\u4E2Achunk\u62C6\u5206\uFF0C\u53EF\u80FD\u65E0\u6CD5\u8FDB\u884C\u8FD8\u539F
 - \u6D41\u6A21\u5F0F\u4E2D\uFF0C\u5982\u679C\u654F\u611F\u8BCD\u8BED\u88AB\u591A\u4E2Achunk\u62C6\u5206\uFF0C\u53EF\u80FD\u4F1A\u6709\u654F\u611F\u8BCD\u7684\u4E00\u90E8\u5206\u8FD4\u56DE\u7ED9\u7528\u6237\u7684\u60C5\u51B5
 - grok \u5185\u7F6E\u89C4\u5219\u5217\u8868 https://help.aliyun.com/zh/sls/user-guide/grok-patterns
 - \u5185\u7F6E\u654F\u611F\u8BCD\u5E93\u6570\u636E\u6765\u6E90 https://github.com/houbb/sensitive-word/tree/master/src/main/resources
 
`,o={title:"AI \u6570\u636E\u8131\u654F",description:"AI \u6570\u636E\u8131\u654F\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai data masking"],githubHigressUrl:"https://github.com/alibaba/higress/tree/main/plugins/wasm-rust/extensions/ai-data-masking"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-consumer/ai-data-masking.md",rawData:void 0};export{n as _internal,s as body,a as collection,o as data,e as id,t as slug};
