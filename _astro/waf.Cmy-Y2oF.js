const e="latest/zh-cn/plugins/security/waf.md",s="docs",t="latest/zh-cn/plugins/security/waf",a=`
## \u529F\u80FD\u8BF4\u660E
waf\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8EModSecurity\u7684\u89C4\u5219\u9632\u62A4\u5F15\u64CE\uFF0C\u53EF\u4EE5\u6839\u636E\u7528\u6237\u914D\u7F6E\u7684\u89C4\u5219\u5C4F\u853D\u53EF\u7591\u8BF7\u6C42\uFF0C\u5E76\u652F\u6301OWASP CRS\uFF0C\u4E3A\u7AD9\u70B9\u63D0\u4F9B\u57FA\u7840\u7684\u9632\u62A4\u529F\u80FD\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u6388\u6743\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`330\`


## \u914D\u7F6E\u5B57\u6BB5
| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- | -------- | -------- |
| useCRS | bool | \u9009\u586B | false | \u662F\u5426\u5F00\u542FOWASP CRS\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003[coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2) |
| secRules | array of string | \u9009\u586B | - | \u7528\u6237\u81EA\u5B9A\u4E49\u7684waf\u9632\u62A4\u89C4\u5219\uFF0C\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003[ModSecurity\u4E2D\u6587\u624B\u518C](http://www.modsecurity.cn/chm/) |

## \u914D\u7F6E\u793A\u4F8B

### \u89C2\u5BDF\u6A21\u5F0F

\`\`\`yaml
useCRS: true
secRules:
  - "SecRuleEngine DetectionOnly"
\`\`\`

### \u79FB\u9664\u7279\u5B9A\u89C4\u5219

\u4F8B\u5982\u5F00\u542F\u89C2\u5BDF\u6A21\u5F0F\u540E\uFF0C\u53D1\u73B0\u6709\u4E00\u4E2Aid\u4E3A10\u7684\u89C4\u5219\u5BFC\u81F4\u8BEF\u62E6\u622A\uFF0C\u53EF\u4EE5\u5355\u72EC\u79FB\u9664\u8FD9\u6761\u89C4\u5219\uFF1A

\`\`\`yaml
useCRS: true
secRules:
  - "SecRuleRemoveById 10"
  - "SecRuleEngine On"
\`\`\`

### \u81EA\u5B9A\u4E49\u9632\u62A4\u89C4\u5219

\`\`\`yaml
useCRS: true
secRules: 
  - "SecDebugLogLevel 3"
  - "SecRuleEngine On"
  - "SecAction \\"id:100,phase:1,pass\\""
  - "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
  - "SecRule REQUEST_BODY \\"@rx maliciouspayload\\" \\"id:102,phase:2,t:lowercase,deny\\""
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A
\`\`\`bash
curl http://example.com/admin
curl http://example.com -d "maliciouspayload"
\`\`\`
`,c={title:"WAF",description:"WAF \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","waf"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/waf.md",rawData:void 0};export{i as _internal,a as body,s as collection,c as data,e as id,t as slug};
