const e="latest/zh-cn/plugins/authentication/key-auth.md",a="docs",t="latest/zh-cn/plugins/authentication/key-auth",c=`
## \u529F\u80FD\u8BF4\u660E

\`key-auth\` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E API Key \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECE HTTP \u8BF7\u6C42\u7684 URL \u53C2\u6570\u6216\u8005\u8BF7\u6C42\u5934\u89E3\u6790 API Key\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5 API Key \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                        |
| ----------- | --------------- | ------------------------------------------- | ------ | ----------------------------------------------------------- |
| \`global_auth\` | bool | \u9009\u586B     | -      | \u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u673A\u5236\uFF09  |
| \`consumers\` | array of object | \u5FC5\u586B                                        | -      | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                        |
| \`keys\`      | array of string | \u5FC5\u586B                                        | -      | API Key \u7684\u6765\u6E90\u5B57\u6BB5\u540D\u79F0\uFF0C\u53EF\u4EE5\u662F URL \u53C2\u6570\u6216\u8005 HTTP \u8BF7\u6C42\u5934\u540D\u79F0 |
| \`in_query\`  | bool            | \`in_query\` \u548C \`in_header\` \u81F3\u5C11\u6709\u4E00\u4E2A\u4E3A true | true   | \u914D\u7F6E true \u65F6\uFF0C\u7F51\u5173\u4F1A\u5C1D\u8BD5\u4ECE URL \u53C2\u6570\u4E2D\u89E3\u6790 API Key           |
| \`in_header\` | bool            | \`in_query\` \u548C \`in_header\` \u81F3\u5C11\u6709\u4E00\u4E2A\u4E3A true | true   | \u914D\u7F6E true \u65F6\uFF0C\u7F51\u5173\u4F1A\u5C1D\u8BD5\u4ECE HTTP \u8BF7\u6C42\u5934\u4E2D\u89E3\u6790 API Key        |

\`consumers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                 |
| ------------ | -------- | -------- | ------ |--------------------|
| \`credential\` | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u8BBF\u95EE\u51ED\u8BC1 |
| \`name\`       | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0   |


**\u6CE8\u610F\uFF1A**
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Key Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F \`credential\` \u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D\u3002

\`\`\`yaml
global_auth: true
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
- x-api-key
\`\`\`

**\u8DEF\u7531\u7EA7\u914D\u7F6E**

\u5BF9 route-a \u548C route-b \u8FD9\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`yaml
allow: 
- consumer1
\`\`\`

\u5BF9 *.example.com \u548C test.com \u5728\u8FD9\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u914D\u7F6E:

\`\`\`yaml
allow:
- consumer2
\`\`\`

**\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\u3002**

\u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u4F1A\u5339\u914D\u5230 route-a \u8FD9\u6761\u8DEF\u7531\u3002

\u5C06 API Key \u8BBE\u7F6E\u5728 url \u53C2\u6570\u4E2D\u3002

\`\`\`bash
curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5
\`\`\`
\u5C06 API Key \u8BBE\u7F6E\u5728 http \u8BF7\u6C42\u5934\u4E2D\u3002

\`\`\`bash
curl  http://xxx.hello.com/test -H 'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'
\`\`\`

\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684header\u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A \`consumer1\`\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0

**\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\u3002**

\u8BF7\u6C42\u672A\u63D0\u4F9B API Key\uFF0C\u8FD4\u56DE 401\u3002

\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`
\u8BF7\u6C42\u63D0\u4F9B\u7684 API Key \u65E0\u6743\u8BBF\u95EE\uFF0C\u8FD4\u56DE 401\u3002

\`\`\`bash
curl  http://xxx.hello.com/test?apikey=926d90ac-ba2e-11ec-ab68-00163e1250b5
\`\`\`

\u6839\u636E\u8BF7\u6C42\u63D0\u4F9B\u7684 API Key\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE 403\u3002

\`\`\`bash
# consumer2\u4E0D\u5728route-a\u7684allow\u5217\u8868\u91CC
curl  http://xxx.hello.com/test?apikey=c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
\`\`\`

### \u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u672A\u6307\u5B9A \`matchRules\` \u5B57\u6BB5\uFF0C\u56E0\u6B64\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F\u5168\u5C40 Key Auth \u8BA4\u8BC1.

\`\`\`yaml
defaultConfig
  consumers:
  - credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
    name: consumer1
  - credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
    name: consumer2
  keys:
  - apikey
  in_query: true
\`\`\`

\u5F00\u542F \`matchRules\` \u65B9\u5F0F\u5982\u4E0B\uFF1A
\`\`\`yaml
matchRules:
  - config:
      allow:
        - consumer1
\`\`\`

## \u76F8\u5173\u9519\u8BEF\u7801

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F                                                  | \u539F\u56E0\u8BF4\u660E                |
| ----------- | --------------------------------------------------------- | ----------------------- |
| 401         | Request denied by Key Auth check. Muti API key found in request | \u8BF7\u6C42\u63D0\u4F9B\u591A\u4E2A API Key      |
| 401         | Request denied by Key Auth check. No API key found in request | \u8BF7\u6C42\u672A\u63D0\u4F9B API Key      |
| 401         | Request denied by Key Auth check. Invalid API key         | \u4E0D\u5141\u8BB8\u5F53\u524D API Key \u8BBF\u95EE |
| 403         | Request denied by Key Auth check. Unauthorized consumer   | \u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650  |`,u={title:"Key \u8BA4\u8BC1",description:"API Key \u8BA4\u8BC1\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E API Key \u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\uFF0C\u652F\u6301\u4ECE HTTP \u8BF7\u6C42\u7684 URL \u53C2\u6570\u6216\u8005\u8BF7\u6C42\u5934\u89E3\u6790 API Key\uFF0C\u540C\u65F6\u9A8C\u8BC1\u8BE5 API Key \u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","auth"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/key-auth.md",rawData:void 0};export{r as _internal,c as body,a as collection,u as data,e as id,t as slug};
