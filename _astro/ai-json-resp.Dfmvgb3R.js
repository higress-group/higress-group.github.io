const e="latest/zh-cn/plugins/ai/api-dev/ai-json-resp.md",o="docs",t="latest/zh-cn/plugins/ai/api-dev/ai-json-resp",a=`
## \u529F\u80FD\u8BF4\u660E

LLM\u54CD\u5E94\u7ED3\u6784\u5316\u63D2\u4EF6\uFF0C\u7528\u4E8E\u6839\u636E\u9ED8\u8BA4\u6216\u7528\u6237\u914D\u7F6E\u7684Json Schema\u5BF9AI\u7684\u54CD\u5E94\u8FDB\u884C\u7ED3\u6784\u5316\uFF0C\u4EE5\u4FBF\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002\u6CE8\u610F\u76EE\u524D\u53EA\u652F\u6301 \`\u975E\u6D41\u5F0F\u54CD\u5E94\`\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`150\`

### \u914D\u7F6E\u8BF4\u660E

| Name | Type | Requirement | Default | **Description** |
| --- | --- | --- | --- | --- |
| serviceName | str |  required | - | AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u540D\u79F0 |
| serviceDomain | str |  optional | - | AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u57DF\u540D/IP\u5730\u5740 |
| servicePath | str |  optional | '/v1/chat/completions' | AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u57FA\u7840\u8DEF\u5F84 |
| serviceUrl | str |  optional | - | AI\u670D\u52A1\u6216\u652F\u6301 AI-Proxy \u7684\u7F51\u5173\u670D\u52A1URL, \u63D2\u4EF6\u5C06\u81EA\u52A8\u63D0\u53D6Domain \u548C Path, \u7528\u4E8E\u586B\u5145\u672A\u914D\u7F6E\u7684 serviceDomain \u6216 servicePath |
| servicePort | int |  optional | 443 | \u7F51\u5173\u670D\u52A1\u7AEF\u53E3 |
| serviceTimeout | int |  optional | 50000 | \u9ED8\u8BA4\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4 |
| maxRetry | int |  optional | 3 | \u82E5\u56DE\u7B54\u65E0\u6CD5\u6B63\u786E\u63D0\u53D6\u683C\u5F0F\u5316\u65F6\u91CD\u8BD5\u6B21\u6570 |
| contentPath | str |  optional | "choices.0.message.content\u201D | \u4ECELLM\u56DE\u7B54\u4E2D\u63D0\u53D6\u54CD\u5E94\u7ED3\u679C\u7684gpath\u8DEF\u5F84 |
| jsonSchema | str (json) |  optional | - | \u9A8C\u8BC1\u8BF7\u6C42\u6240\u53C2\u7167\u7684 jsonSchema, \u4E3A\u7A7A\u53EA\u9A8C\u8BC1\u5E76\u8FD4\u56DE\u5408\u6CD5Json\u683C\u5F0F\u54CD\u5E94 |
| enableSwagger | bool |  optional | false | \u662F\u5426\u542F\u7528 Swagger \u534F\u8BAE\u8FDB\u884C\u9A8C\u8BC1 |
| enableOas3 | bool |  optional | true | \u662F\u5426\u542F\u7528 Oas3 \u534F\u8BAE\u8FDB\u884C\u9A8C\u8BC1 |
| enableContentDisposition | bool | optional | true | \u662F\u5426\u542F\u7528 Content-Disposition \u5934\u90E8, \u82E5\u542F\u7528\u5219\u4F1A\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 \`Content-Disposition: attachment; filename="response.json"\` |

> \u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u9ED8\u8BA4\u652F\u6301\u7684\u6700\u5927 Json Schema \u6DF1\u5EA6\u4E3A 6\u3002\u8D85\u8FC7\u6B64\u6DF1\u5EA6\u7684 Json Schema \u5C06\u4E0D\u7528\u4E8E\u9A8C\u8BC1\u54CD\u5E94\uFF0C\u63D2\u4EF6\u53EA\u4F1A\u68C0\u67E5\u8FD4\u56DE\u7684\u54CD\u5E94\u662F\u5426\u4E3A\u5408\u6CD5\u7684 Json \u683C\u5F0F\u3002


### \u8BF7\u6C42\u548C\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E

- **\u8BF7\u6C42\u53C2\u6570**: \u672C\u63D2\u4EF6\u8BF7\u6C42\u683C\u5F0F\u4E3Aopenai\u8BF7\u6C42\u683C\u5F0F\uFF0C\u5305\u542B\`model\`\u548C\`messages\`\u5B57\u6BB5\uFF0C\u5176\u4E2D\`model\`\u4E3AAI\u6A21\u578B\u540D\u79F0\uFF0C\`messages\`\u4E3A\u5BF9\u8BDD\u6D88\u606F\u5217\u8868\uFF0C\u6BCF\u4E2A\u6D88\u606F\u5305\u542B\`role\`\u548C\`content\`\u5B57\u6BB5\uFF0C\`role\`\u4E3A\u6D88\u606F\u89D2\u8272\uFF0C\`content\`\u4E3A\u6D88\u606F\u5185\u5BB9\u3002
  \`\`\`json
  {
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "give me a api doc for add the variable x to x+5"}
    ]
  }
  \`\`\`
  \u5176\u4ED6\u8BF7\u6C42\u53C2\u6570\u9700\u53C2\u8003\u914D\u7F6E\u7684ai\u670D\u52A1\u6216\u7F51\u5173\u670D\u52A1\u7684\u76F8\u5E94\u6587\u6863\u3002
- **\u8FD4\u56DE\u53C2\u6570**: 
  - \u8FD4\u56DE\u6EE1\u8DB3\u5B9A\u4E49\u7684Json Schema\u7EA6\u675F\u7684 \`Json\u683C\u5F0F\u54CD\u5E94\`
  - \u82E5\u672A\u5B9A\u4E49Json Schema\uFF0C\u5219\u8FD4\u56DE\u5408\u6CD5\u7684\`Json\u683C\u5F0F\u54CD\u5E94\`
  - \u82E5\u51FA\u73B0\u5185\u90E8\u9519\u8BEF\uFF0C\u5219\u8FD4\u56DE \`{ "Code": 10XX, "Msg": "\u9519\u8BEF\u4FE1\u606F\u63D0\u793A" }\`\u3002

## \u8BF7\u6C42\u793A\u4F8B

\`\`\`bash
curl -X POST "http://localhost:8001/v1/chat/completions" \\
-H "Content-Type: application/json" \\
-d '{
  "model": "gpt-4",
  "messages": [
    {"role": "user", "content": "give me a api doc for add the variable x to x+5"}
  ]
}'

\`\`\`

## \u8FD4\u56DE\u793A\u4F8B
### \u6B63\u5E38\u8FD4\u56DE
\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7CFB\u7EDF\u5E94\u8FD4\u56DE\u7ECF\u8FC7 JSON Schema \u9A8C\u8BC1\u7684 JSON \u6570\u636E\u3002\u5982\u679C\u672A\u914D\u7F6E JSON Schema\uFF0C\u7CFB\u7EDF\u5C06\u8FD4\u56DE\u7B26\u5408 JSON \u6807\u51C6\u7684\u5408\u6CD5 JSON \u6570\u636E\u3002
\`\`\`json
{
  "apiVersion": "1.0",
  "request": {
    "endpoint": "/add_to_five",
    "method": "POST",
    "port": 8080,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "x": 7
    }
  }
}
\`\`\`

### \u5F02\u5E38\u8FD4\u56DE
\u5728\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u8FD4\u56DE\u72B6\u6001\u7801\u4E3A \`500\`\uFF0C\u8FD4\u56DE\u5185\u5BB9\u4E3A JSON \u683C\u5F0F\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u5305\u542B\u9519\u8BEF\u7801 \`Code\` \u548C\u9519\u8BEF\u4FE1\u606F \`Msg\` \u4E24\u4E2A\u5B57\u6BB5\u3002
\`\`\`json
{
  "Code": 1006,
  "Msg": "retry count exceed max retry count"
}
\`\`\`

### \u9519\u8BEF\u7801\u8BF4\u660E
| \u9519\u8BEF\u7801 | \u8BF4\u660E |
| --- | --- |
| 1001 | \u914D\u7F6E\u7684Json Schema\u4E0D\u662F\u5408\u6CD5Json\u683C\u5F0F|
| 1002 | \u914D\u7F6E\u7684Json Schema\u7F16\u8BD1\u5931\u8D25\uFF0C\u4E0D\u662F\u5408\u6CD5\u7684Json Schema \u683C\u5F0F\u6216\u6DF1\u5EA6\u8D85\u51FA jsonSchemaMaxDepth \u4E14 rejectOnDepthExceeded \u4E3Atrue|
| 1003 | \u65E0\u6CD5\u5728\u54CD\u5E94\u4E2D\u63D0\u53D6\u5408\u6CD5\u7684Json|
| 1004 | \u54CD\u5E94\u4E3A\u7A7A\u5B57\u7B26\u4E32|
| 1005 | \u54CD\u5E94\u4E0D\u7B26\u5408Json Schema\u5B9A\u4E49|
| 1006 | \u91CD\u8BD5\u6B21\u6570\u8D85\u8FC7\u6700\u5927\u9650\u5236|
| 1007 | \u65E0\u6CD5\u83B7\u53D6\u54CD\u5E94\u5185\u5BB9\uFF0C\u53EF\u80FD\u662F\u4E0A\u6E38\u670D\u52A1\u914D\u7F6E\u9519\u8BEF\u6216\u83B7\u53D6\u5185\u5BB9\u7684ContentPath\u8DEF\u5F84\u9519\u8BEF|
| 1008 | serciveDomain\u4E3A\u7A7A, \u8BF7\u6CE8\u610FserviceDomian\u6216serviceUrl\u4E0D\u80FD\u540C\u65F6\u4E3A\u7A7A|

## \u670D\u52A1\u914D\u7F6E\u8BF4\u660E
\u672C\u63D2\u4EF6\u9700\u8981\u914D\u7F6E\u4E0A\u6E38\u670D\u52A1\u6765\u652F\u6301\u51FA\u73B0\u5F02\u5E38\u65F6\u7684\u81EA\u52A8\u91CD\u8BD5\u673A\u5236, \u652F\u6301\u7684\u914D\u7F6E\u4E3B\u8981\u5305\u62EC\`\u652F\u6301openai\u63A5\u53E3\u7684AI\u670D\u52A1\`\u6216\`\u672C\u5730\u7F51\u5173\u670D\u52A1\`

### \u652F\u6301openai\u63A5\u53E3\u7684AI\u670D\u52A1
\u4EE5qwen\u4E3A\u4F8B\uFF0C\u57FA\u672C\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
serviceName: qwen
serviceDomain: dashscope.aliyuncs.com
apiKey: [Your API Key]
servicePath: /compatible-mode/v1/chat/completions
jsonSchema:
  title: ReasoningSchema
  type: object
  properties:
    reasoning_steps:
      type: array
      items:
        type: string
      description: The reasoning steps leading to the final conclusion.
    answer:
      type: string
      description: The final answer, taking into account the reasoning steps.
  required:
    - reasoning_steps
    - answer
  additionalProperties: false
\`\`\`

### \u672C\u5730\u7F51\u5173\u670D\u52A1
\u4E3A\u4E86\u80FD\u590D\u7528\u5DF2\u7ECF\u914D\u7F6E\u597D\u7684\u670D\u52A1\uFF0C\u672C\u63D2\u4EF6\u4E5F\u652F\u6301\u914D\u7F6E\u672C\u5730\u7F51\u5173\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u82E5\u7F51\u5173\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86AI-proxy\u670D\u52A1\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\u5982\u4E0B\uFF1A
1. \u521B\u5EFA\u4E00\u4E2A\u56FA\u5B9AIP\u5730\u5740\u4E3A127.0.0.1:80\u7684\u670D\u52A1\uFF0C\u4F8B\u5982localservice.static

2. \u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0localservice.static\u7684\u670D\u52A1\u914D\u7F6E
\`\`\`yaml
serviceName: localservice
serviceDomain: 127.0.0.1
servicePort: 80
\`\`\`
3. \u81EA\u52A8\u63D0\u53D6\u8BF7\u6C42\u7684Path\uFF0CHeader\u7B49\u4FE1\u606F
\u63D2\u4EF6\u4F1A\u81EA\u52A8\u63D0\u53D6\u8BF7\u6C42\u7684Path\uFF0CHeader\u7B49\u4FE1\u606F\uFF0C\u4ECE\u800C\u907F\u514D\u5BF9AI\u670D\u52A1\u7684\u91CD\u590D\u914D\u7F6E\u3002
`,s={title:"AI JSON \u683C\u5F0F\u5316",description:"AI JSON \u683C\u5F0F\u5316\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["AI\u7F51\u5173","AI JSON \u683C\u5F0F\u5316"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-json-resp.md",rawData:void 0};export{n as _internal,a as body,o as collection,s as data,e as id,t as slug};
