const e="latest/zh-cn/plugins/security/waf.md",t="docs",s="latest/zh-cn/plugins/security/waf",r=`
## \u529F\u80FD\u8BF4\u660E

\u5F00\u6E90\u7248 WAF \u63D2\u4EF6\uFF0C\u652F\u6301\u57FA\u4E8E OWASP ModSecurity Core Rule Set (CRS) \u7684 WAF \u89C4\u5219\u914D\u7F6E\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                              |
| -------- | -------- | -------- | -------- |-------------------------------------------------------------------------------------------------------------------------------------------------|
| useCRS | bool | \u9009\u586B | false | \u662F\u5426\u5F00\u542F OWASP CRS\uFF0C\u8BE6\u60C5\u53EF\u53C2\u8003 [coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2)                                                      |
| secRules | array of string | \u9009\u586B | - | \u7528\u6237\u81EA\u5B9A\u4E49\u7684waf\u9632\u62A4\u89C4\u5219\uFF0C\u8BED\u6CD5\u89C4\u5219\u53EF\u53C2\u8003 [SecLang \u8BED\u6CD5\u53C2\u8003](https://coraza.io/docs/seclang/directives/) \u548C [ModSecurity \u4E2D\u6587\u624B\u518C](http://www.modsecurity.cn/chm/index.html) |

## \u914D\u7F6E\u793A\u4F8B

### \u89C2\u5BDF\u6A21\u5F0F\uFF08\u53EA\u4F1A\u8BB0\u5F55\u65E5\u5FD7)

\`\`\`yaml
useCRS: true
secRules: 
- "SecRuleEngine DetectionOnly"
\`\`\`

### \u9632\u62A4\u6A21\u5F0F

\`\`\`yaml
useCRS: true
secRules: 
- "SecRuleEngine On"
\`\`\`

### \u6D4B\u8BD5\u81EA\u5B9A\u4E49\u89C4\u5219

\`\`\`yaml
useCRS: true
secRules: 
- "SecRuleEngine On"
- "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""
\`\`\`

\u6839\u636E\u8BE5\u914D\u7F6E\uFF0C\u4EE5\u4E0B\u8BF7\u6C42\u5C06\u88AB\u7981\u6B62\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com/admin
\`\`\`
`,c={title:"WAF \u9632\u62A4",description:"\u5F00\u6E90\u7248 WAF \u63D2\u4EF6\uFF0C\u652F\u6301\u57FA\u4E8E OWASP ModSecurity Core Rule Set (CRS) \u7684 WAF \u89C4\u5219\u914D\u7F6E\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","waf"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/waf.md",rawData:void 0};export{a as _internal,r as body,t as collection,c as data,e as id,s as slug};
