const e="latest/en/plugins/security/waf.md",t="docs",i="latest/en/plugins/security/waf",s=`## Function Description

The waf plugin implements a ModSecurity-based rule protection engine, which can block suspicious requests based on user-defined rules, and supports OWASP CRS, providing basic protection features for the site.

## Running Attributes

Plugin execution phase: \`authorization phase\`  
Plugin execution priority: \`330\`

## Configuration Fields

| Name     | Data Type         | Filling Requirements | Default Value | Description                                                                 |
|----------|--------------------|----------------------|---------------|-----------------------------------------------------------------------------|
| useCRS   | bool               | Optional             | false         | Whether to enable OWASP CRS, for details refer to [coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2) |
| secRules | array of string    | Optional             | -             | User-defined WAF protection rules, syntax rules can refer to [ModSecurity Chinese Manual](http://www.modsecurity.cn/chm/) |

## Configuration Example

\`\`\`yaml  
useCRS: true  
secRules:  
  - "SecDebugLogLevel 3"  
  - "SecRuleEngine On"  
  - "SecAction \\"id:100,phase:1,pass\\""  
  - "SecRule REQUEST_URI \\"@streq /admin\\" \\"id:101,phase:1,t:lowercase,deny\\""  
  - "SecRule REQUEST_BODY \\"@rx maliciouspayload\\" \\"id:102,phase:2,t:lowercase,deny\\""  
\`\`\`

Based on this configuration, the following requests will be prohibited from access:

\`\`\`bash  
curl http://example.com/admin  
curl http://example.com -d "maliciouspayload"  
\`\`\`
`,o={title:"WAF",description:"WAF plugin configuration reference",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","waf"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/security/waf.md",rawData:void 0};export{a as _internal,s as body,t as collection,o as data,e as id,i as slug};
