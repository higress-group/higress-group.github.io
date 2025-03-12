const e="latest/zh-cn/plugins/security/replay-protection.md",n="docs",t="latest/zh-cn/plugins/security/replay-protection",c=`
## \u529F\u80FD\u8BF4\u660E

\u9632\u91CD\u653E\u63D2\u4EF6\u901A\u8FC7\u9A8C\u8BC1\u8BF7\u6C42\u4E2D\u7684\u4E00\u6B21\u6027\u968F\u673A\u6570\u6765\u9632\u6B62\u8BF7\u6C42\u91CD\u653E\u653B\u51FB\u3002\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u9700\u8981\u643A\u5E26\u4E00\u4E2A\u552F\u4E00\u7684 nonce \u503C\uFF0C\u670D\u52A1\u5668\u4F1A\u8BB0\u5F55\u5E76\u6821\u9A8C\u8FD9\u4E2A\u503C\u7684\u552F\u4E00\u6027\uFF0C\u4ECE\u800C\u9632\u6B62\u8BF7\u6C42\u88AB\u6076\u610F\u91CD\u653E

\u5177\u4F53\u5305\u542B\u4E00\u4E0B\u529F\u80FD\uFF1A

- **\u5F3A\u5236\u6216\u53EF\u9009\u7684 nonce \u6821\u9A8C**\uFF1A\u53EF\u6839\u636E\u914D\u7F6E\u51B3\u5B9A\u662F\u5426\u5F3A\u5236\u8981\u6C42\u8BF7\u6C42\u643A\u5E26 nonce \u503C\u3002
- **\u57FA\u4E8E Redis \u7684 nonce \u552F\u4E00\u6027\u9A8C\u8BC1**\uFF1A\u901A\u8FC7 Redis \u5B58\u50A8\u548C\u6821\u9A8C nonce \u503C\uFF0C\u786E\u4FDD\u5176\u552F\u4E00\u6027\u3002
- **\u53EF\u914D\u7F6E\u7684 nonce \u6709\u6548\u671F**\uFF1A\u652F\u6301\u8BBE\u7F6E nonce \u7684\u6709\u6548\u671F\uFF0C\u8FC7\u671F\u540E\u81EA\u52A8\u5931\u6548\u3002
- **nonce \u683C\u5F0F\u548C\u957F\u5EA6\u6821\u9A8C**\uFF1A\u652F\u6301\u5BF9 nonce \u503C\u7684\u683C\u5F0F\uFF08Base64\uFF09\u548C\u957F\u5EA6\u8FDB\u884C\u9A8C\u8BC1\u3002
- **\u81EA\u5B9A\u4E49\u9519\u8BEF\u54CD\u5E94**\uFF1A\u652F\u6301\u914D\u7F6E\u62D2\u7EDD\u8BF7\u6C42\u65F6\u7684\u72B6\u6001\u7801\u548C\u9519\u8BEF\u4FE1\u606F\u3002
- **\u53EF\u81EA\u5B9A\u4E49 nonce \u8BF7\u6C42\u5934**\uFF1A\u53EF\u4EE5\u81EA\u5B9A\u4E49\u643A\u5E26 nonce \u7684\u8BF7\u6C42\u5934\u540D\u79F0\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`800\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C          | \u63CF\u8FF0                              |
|----------------------|--------|------|-----------------|---------------------------------|
| \`force_nonce\`        | bool   | \u5426   | true      | \u662F\u5426\u5F3A\u5236\u8981\u6C42\u8BF7\u6C42\u643A\u5E26 nonce \u503C       |
| \`nonce_header\`       | string | \u5426   | \`X-Higress-Nonce\`   | \u6307\u5B9A\u643A\u5E26 nonce \u503C\u7684\u8BF7\u6C42\u5934\u540D\u79F0       |
| \`nonce_ttl\`          | int    | \u5426   | 900        | nonce \u7684\u6709\u6548\u671F\uFF0C\u5355\u4F4D\u79D2    |
| \`nonce_min_length\`   | int    | \u5426   | 8            | nonce \u503C\u7684\u6700\u5C0F\u957F\u5EA6               |
| \`nonce_max_length\`   | int    | \u5426   | 128        | nonce \u503C\u7684\u6700\u5927\u957F\u5EA6               |
| \`reject_code\`        | int    | \u5426   | 429        | \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u72B6\u6001\u7801             |
| \`reject_msg\`         | string | \u5426   | \`Replay Attack Detected\` | \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F           |
| \`validate_base64\`    | bool    | \u5426   | false | \u662F\u5426\u6821\u9A8C nonce \u7684 base64 \u7F16\u7801\u683C\u5F0F |
| \`redis\` | Object | \u662F   | -              | redis \u76F8\u5173\u914D\u7F6E |

\`redis\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u540D\u79F0           | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C                 | \u63CF\u8FF0|
| -------------- | -------- | ---- |---------------------| --------------------------------------- |
| \`service_name\` | string   | \u662F   | -                   | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local |
| \`service_port\` | int      | \u5426   | 6379                | redis \u670D\u52A1\u7AEF\u53E3|
| \`username\`     | string | \u5426   | -                   | redis \u7528\u6237\u540D|
| \`password\`     | string | \u5426   | -                   | redis \u5BC6\u7801|
| \`timeout\`      | int      | \u5426   | 1000                | redis \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |
| database     | int    | \u5426   | 0                   | \u4F7F\u7528\u7684\u6570\u636E\u5E93id\uFF0C\u4F8B\u5982\u914D\u7F6E\u4E3A1\uFF0C\u5BF9\u5E94\`SELECT 1\`|
| \`key_prefix\`   | string   | \u5426   | \`replay-protection\` | redis \u952E\u524D\u7F00\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 nonce \u952E |

## \u914D\u7F6E\u793A\u4F8B

\u4EE5\u4E0B\u662F\u4E00\u4E2A\u9632\u91CD\u653E\u653B\u51FB\u63D2\u4EF6\u7684\u5B8C\u6574\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
force_nonce: true
nonce_header: "X-Higress-Nonce"    # \u6307\u5B9A nonce \u8BF7\u6C42\u5934\u540D\u79F0
nonce_ttl: 900                    # nonce \u6709\u6548\u671F\uFF0C\u8BBE\u7F6E\u4E3A 900 \u79D2
nonce_min_length: 8               # nonce \u7684\u6700\u5C0F\u957F\u5EA6
nonce_max_length: 128             # nonce \u7684\u6700\u5927\u957F\u5EA6
validate_base64: true             # \u662F\u5426\u5F00\u542F base64 \u683C\u5F0F\u6821\u9A8C
reject_code: 429                  # \u5F53\u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801
reject_msg: "Replay Attack Detected"  # \u62D2\u7EDD\u8BF7\u6C42\u65F6\u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u5185\u5BB9
redis:
  service_name: redis.static       # Redis \u670D\u52A1\u7684\u540D\u79F0
  service_port: 80                # Redis \u670D\u52A1\u6240\u4F7F\u7528\u7684\u7AEF\u53E3
  timeout: 1000                   # Redis \u64CD\u4F5C\u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u5355\u4F4D\uFF1A\u6BEB\u79D2\uFF09
  key_prefix: "replay-protection" # Redis \u4E2D\u952E\u7684\u524D\u7F00
\`\`\`

## \u4F7F\u7528\u8BF4\u660E

### \u8BF7\u6C42\u5934\u8981\u6C42

| \u8BF7\u6C42\u5934\u540D\u79F0       | \u662F\u5426\u5FC5\u987B         | \u8BF4\u660E                                       |
|-----------------|----------------|------------------------------------------|
| \`X-Higress-Nonce\`  | \u6839\u636E \`force_nonce\` \u914D\u7F6E\u51B3\u5B9A | \u8BF7\u6C42\u4E2D\u643A\u5E26\u7684\u968F\u673A\u751F\u6210\u7684 nonce \u503C\uFF0C\u9700\u7B26\u5408 Base64 \u683C\u5F0F\u3002 |

> **\u6CE8\u610F**\uFF1A\u53EF\u4EE5\u901A\u8FC7 \`nonce_header\` \u914D\u7F6E\u81EA\u5B9A\u4E49\u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u4E3A \`X-Higress-Nonce\`\u3002

### \u4F7F\u7528\u793A\u4F8B

\`\`\`bash
# Generate nonce
nonce=$(openssl rand -base64 32)

# Send request
curl -X POST 'https://api.example.com/path' \\
  -H "X-Higress-Nonce: $nonce" \\
  -d '{"key": "value"}'
\`\`\`

## \u8FD4\u56DE\u7ED3\u679C

\`\`\`json
{
  "code": 429,
  "message": "Replay Attack Detected"
}
\`\`\`

## \u9519\u8BEF\u54CD\u5E94\u793A\u4F8B

| \u9519\u8BEF\u573A\u666F                 | \u72B6\u6001\u7801 | \u9519\u8BEF\u4FE1\u606F               |
|------------------------|-------|--------------------|
| \u7F3A\u5C11 nonce \u8BF7\u6C42\u5934         | 400 | \`Missing Required Header\` |
| nonce \u957F\u5EA6\u4E0D\u7B26\u5408\u8981\u6C42      | 400 | \`Invalid Nonce\` |
| nonce \u683C\u5F0F\u4E0D\u7B26\u5408 Base64 | 400 | \`Invalid Nonce\` |
| nonce \u5DF2\u88AB\u4F7F\u7528\uFF08\u91CD\u653E\u653B\u51FB\uFF09 | 429 | \`Replay Attack Detected\` |

`,o={title:"\u9632\u91CD\u653E\u653B\u51FB",description:"\u9632\u91CD\u653E\u653B\u51FB\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","replay-protection"]},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/replay-protection.md",rawData:void 0};export{s as _internal,c as body,n as collection,o as data,e as id,t as slug};
