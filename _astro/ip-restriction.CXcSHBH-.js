const e="latest/zh-cn/plugins/security/ip-restriction.md",i="docs",r="latest/zh-cn/plugins/security/ip-restriction",s=`
## \u529F\u80FD\u8BF4\u660E

\`ip-restriction \`\u63D2\u4EF6\u53EF\u4EE5\u901A\u8FC7\u5C06 IP \u5730\u5740\u5217\u5165\u767D\u540D\u5355\u6216\u9ED1\u540D\u5355\u6765\u9650\u5236\u5BF9\u670D\u52A1\u6216\u8DEF\u7531\u7684\u8BBF\u95EE.\u652F\u6301\u5BF9\u5355\u4E2A IP \u5730\u5740\u3001\u591A\u4E2A IP \u5730\u5740\u548C\u7C7B\u4F3C
10.10.10.0/24 \u7684 CIDR\u8303\u56F4\u7684\u9650\u5236.

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`210\`


## \u914D\u7F6E\u8BF4\u660E

| \u914D\u7F6E\u9879            | \u7C7B\u578B     | \u5FC5\u586B | \u9ED8\u8BA4\u503C                         | \u8BF4\u660E                                       |
|----------------|--------|----|-----------------------------|------------------------------------------|
| ip_source_type | string | \u5426  | origin-source               | \u53EF\u9009\u503C\uFF1A1. \u5BF9\u7AEFsocket ip\uFF1A\`origin-source\`; 2. \u901A\u8FC7header\u83B7\u53D6\uFF1A\`header\` |
| ip_header_name | string | \u5426  | x-forwarded-for             | \u5F53\`ip_source_type\`\u4E3A\`header\`\u65F6\uFF0C\u6307\u5B9A\u81EA\u5B9A\u4E49IP\u6765\u6E90\u5934                                 |
| allow          | array  | \u5426  | []                          | \u767D\u540D\u5355\u5217\u8868                                    |
| deny           | array  | \u5426  | []                          | \u9ED1\u540D\u5355\u5217\u8868                                    |
| status         | int    | \u5426  | 403                         | \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684 HTTP \u72B6\u6001\u7801                          |
| message        | string | \u5426  | Your IP address is blocked. | \u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u8FD4\u56DE\u4FE1\u606F                               |


\`\`\`yaml
ip_source_type: origin-source
allow:
  - 10.0.0.1
  - 192.168.0.0/16
\`\`\`

\`\`\`yaml
ip_source_type: header
ip_header_name: x-real-iP
deny:
  - 10.0.0.1
  - 192.169.0.0/16   
\`\`\`
`,t={title:"IP \u8BBF\u95EE\u9650\u5236",description:"IP \u8BBF\u95EE\u9650\u5236\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ip restriction"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/ip-restriction.md",rawData:void 0};export{a as _internal,s as body,i as collection,t as data,e as id,r as slug};
