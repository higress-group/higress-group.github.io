const e="latest/zh-cn/plugins/authentication/basic-auth.md",t="docs",a="latest/zh-cn/plugins/authentication/basic-auth",s=`
## \u529F\u80FD\u8BF4\u660E
\`basic-auth\` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HTTP Basic Auth \u6807\u51C6\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002

## \u914D\u7F6E\u5B57\u6BB5

### \u5168\u5C40\u914D\u7F6E

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                               |
| ----------- | --------------- | -------- | ------ |----------------------------------------------------------------------------------|
| \`consumers\` | array of object | \u5FC5\u586B     | -      | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                                                               |
| \`global_auth\` | bool | \u9009\u586B     | -      | \u82E5\u914D\u7F6E\u4E3A true\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3A false\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40\u751F\u6548\uFF08\u517C\u5BB9\u673A\u5236\uFF09 |

\`consumers\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                 |
| ------------ | -------- | -------- | ------ |--------------------|
| \`credential\` | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u8BBF\u95EE\u51ED\u8BC1 |
| \`name\`       | string   | \u5FC5\u586B     | -      | \u914D\u7F6E\u8BE5 consumer \u7684\u540D\u79F0   |

### \u57DF\u540D\u548C\u8DEF\u7531\u7EA7\u914D\u7F6E

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                          | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                              |
| ---------------- | --------------- | ------------------------------------------------- | ------ |---------------------------------|
| \`allow\`          | array of string | \u5FC5\u586B                                              | -      | \u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer \u540D\u79F0 |

**\u6CE8\u610F\uFF1A**
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684 header \u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u5BF9\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F\u8BA4\u8BC1\u548C\u9274\u6743

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Basic Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F\u51ED\u8BC1\u4FE1\u606F\u4E2D\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u4E4B\u95F4\u4F7F\u7528 ":" \u5206\u9694\uFF0C\`credential\` \u5B57\u6BB5\u4E0D\u80FD\u91CD\u590D

**\u5168\u5C40\u914D\u7F6E**

\`\`\`yaml
consumers:
- credential: 'admin:123456'
  name: consumer1
- credential: 'guest:abc'
  name: consumer2
global_auth: false
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

\u82E5\u662F\u5728\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E\uFF0C\u6B64\u4F8B\u6307\u5B9A\u7684 \`route-a\` \u548C \`route-b\` \u5373\u5728\u63A7\u5236\u53F0\u521B\u5EFA\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8 \`name\` \u4E3A \`consumer1\` \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\uFF1B

\u6B64\u4F8B\u6307\u5B9A\u7684 \`*.example.com\` \u548C \`test.com\` \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8 \`name\` \u4E3A \`consumer2\` \u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002

**\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4E0B\u5217\u8BF7\u6C42\u53EF\u4EE5\u5141\u8BB8\u8BBF\u95EE\u3002**

\u8BF7\u6C42\u6307\u5B9A\u7528\u6237\u540D\u5BC6\u7801\u3002

\`\`\`bash
# \u5047\u8BBE\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u4F1A\u5339\u914D\u5230 route-a \u8DEF\u7531
# \u4F7F\u7528 curl \u7684 -u \u53C2\u6570\u6307\u5B9A
curl -u admin:123456  http://xxx.hello.com/test
# \u6216\u8005\u76F4\u63A5\u6307\u5B9A Authorization \u8BF7\u6C42\u5934\uFF0C\u7528\u6237\u540D\u5BC6\u7801\u4F7F\u7528 base64 \u7F16\u7801
curl -H 'Authorization: Basic YWRtaW46MTIzNDU2'  http://xxx.hello.com/test
\`\`\`

\u8BA4\u8BC1\u9274\u6743\u901A\u8FC7\u540E\uFF0C\u8BF7\u6C42\u7684 header \u4E2D\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A \`X-Mse-Consumer\` \u5B57\u6BB5\uFF0C\u5728\u6B64\u4F8B\u4E2D\u5176\u503C\u4E3A \`consumer1\`\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u65B9\u7684\u540D\u79F0

**\u4E0B\u5217\u8BF7\u6C42\u5C06\u62D2\u7EDD\u8BBF\u95EE\u3002**

\u8BF7\u6C42\u672A\u63D0\u4F9B\u7528\u6237\u540D\u5BC6\u7801\uFF0C\u8FD4\u56DE 401\u3002

\`\`\`bash
curl  http://xxx.hello.com/test
\`\`\`
\u8BF7\u6C42\u63D0\u4F9B\u7684\u7528\u6237\u540D\u5BC6\u7801\u9519\u8BEF\uFF0C\u8FD4\u56DE401\u3002

\`\`\`bash
curl -u admin:abc  http://xxx.hello.com/test
\`\`\`

\u6839\u636E\u8BF7\u6C42\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u5339\u914D\u5230\u7684\u8C03\u7528\u8005\u65E0\u8BBF\u95EE\u6743\u9650\uFF0C\u8FD4\u56DE 403\u3002

\`\`\`bash
# consumer2 \u4E0D\u5728 route-a \u7684 allow \u5217\u8868\u91CC
curl -u guest:abc  http://xxx.hello.com/test
\`\`\`

## \u76F8\u5173\u9519\u8BEF\u7801

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F                                                                       | \u539F\u56E0\u8BF4\u660E               |
| ----------- | ------------------------------------------------------------------------------ | ---------------------- |
| 401         | Request denied by Basic Auth check. No Basic Authentication information found. | \u8BF7\u6C42\u672A\u63D0\u4F9B\u51ED\u8BC1         |
| 401         | Request denied by Basic Auth check. Invalid username and/or password           | \u8BF7\u6C42\u51ED\u8BC1\u65E0\u6548           |
| 403         | Request denied by Basic Auth check. Unauthorized consumer                      | \u8BF7\u6C42\u7684\u8C03\u7528\u65B9\u65E0\u8BBF\u95EE\u6743\u9650 |
`,o={title:"Basic \u8BA4\u8BC1",description:"Basic \u8BA4\u8BC1\u63D2\u4EF6\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E HTTP Basic Auth \u6807\u51C6\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","auth"]},c={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/basic-auth.md",rawData:void 0};export{c as _internal,s as body,t as collection,o as data,e as id,a as slug};
