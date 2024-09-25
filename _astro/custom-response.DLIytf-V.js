const o="latest/zh-cn/plugins/transformation/custom-response.md",t="docs",e="latest/zh-cn/plugins/transformation/custom-response",s=`

## \u529F\u80FD\u8BF4\u660E
\`custom-response\`\u63D2\u4EF6\u652F\u6301\u914D\u7F6E\u81EA\u5B9A\u4E49\u7684\u54CD\u5E94\uFF0C\u5305\u62EC\u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u72B6\u6001\u7801\u3001HTTP \u5E94\u7B54\u5934\uFF0C\u4EE5\u53CA HTTP \u5E94\u7B54 Body\u3002\u53EF\u4EE5\u7528\u4E8E Mock \u54CD\u5E94\uFF0C\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5224\u65AD\u7279\u5B9A\u72B6\u6001\u7801\u540E\u7ED9\u51FA\u81EA\u5B9A\u4E49\u5E94\u7B54\uFF0C\u4F8B\u5982\u5728\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u7B56\u7565\u65F6\u5B9E\u73B0\u81EA\u5B9A\u4E49\u54CD\u5E94\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`910\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
|  status_code    |  number     |  \u9009\u586B      |   200  |  \u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u72B6\u6001\u7801   |
|  headers     |  array of string      |  \u9009\u586B     |   -  |  \u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54\u5934\uFF0Ckey \u548C value \u7528\`=\`\u5206\u9694   |
|  body      |  string    |  \u9009\u586B     |   -   |  \u81EA\u5B9A\u4E49 HTTP \u5E94\u7B54 Body  |
|  enable_on_status   |  array of number    |   \u9009\u586B     |  -  | \u5339\u914D\u539F\u59CB\u72B6\u6001\u7801\uFF0C\u751F\u6210\u81EA\u5B9A\u4E49\u54CD\u5E94\uFF0C\u4E0D\u586B\u5199\u65F6\uFF0C\u4E0D\u5224\u65AD\u539F\u59CB\u72B6\u6001\u7801   |

## \u914D\u7F6E\u793A\u4F8B

### Mock \u5E94\u7B54\u573A\u666F

\`\`\`yaml
status_code: 200
headers:
- Content-Type=application/json
- Hello=World
body: "{\\"hello\\":\\"world\\"}"

\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u8BF7\u6C42\u5C06\u8FD4\u56DE\u81EA\u5B9A\u4E49\u5E94\u7B54\u5982\u4E0B\uFF1A

\`\`\`text
HTTP/1.1 200 OK
Content-Type: application/json
Hello: World
Content-Length: 17

{"hello":"world"}
\`\`\`

### \u89E6\u53D1\u9650\u6D41\u65F6\u81EA\u5B9A\u4E49\u54CD\u5E94

\`\`\`yaml
enable_on_status: 
- 429
status_code: 302
headers:
- Location=https://example.com
\`\`\`

\u89E6\u53D1\u7F51\u5173\u9650\u6D41\u65F6\u4E00\u822C\u4F1A\u8FD4\u56DE \`429\` \u72B6\u6001\u7801\uFF0C\u8FD9\u65F6\u8BF7\u6C42\u5C06\u8FD4\u56DE\u81EA\u5B9A\u4E49\u5E94\u7B54\u5982\u4E0B\uFF1A

\`\`\`text
HTTP/1.1 302 Found
Location: https://example.com
\`\`\`

\u4ECE\u800C\u5B9E\u73B0\u57FA\u4E8E\u6D4F\u89C8\u5668 302 \u91CD\u5B9A\u5411\u673A\u5236\uFF0C\u5C06\u9650\u6D41\u540E\u7684\u7528\u6237\u5F15\u5BFC\u5230\u5176\u4ED6\u9875\u9762\uFF0C\u6BD4\u5982\u53EF\u4EE5\u662F\u4E00\u4E2A CDN \u4E0A\u7684\u9759\u6001\u9875\u9762\u3002

\u5982\u679C\u5E0C\u671B\u89E6\u53D1\u9650\u6D41\u65F6\uFF0C\u6B63\u5E38\u8FD4\u56DE\u5176\u4ED6\u5E94\u7B54\uFF0C\u53C2\u8003 Mock \u5E94\u7B54\u573A\u666F\u914D\u7F6E\u76F8\u5E94\u7684\u5B57\u6BB5\u5373\u53EF\u3002
`,n={title:"\u81EA\u5B9A\u4E49\u5E94\u7B54",description:"\u81EA\u5B9A\u4E49\u5E94\u7B54\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","customn response"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/transformation/custom-response.md",rawData:void 0};export{a as _internal,s as body,t as collection,n as data,o as id,e as slug};
