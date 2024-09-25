const x="latest/zh-cn/plugins/authentication/oauth.md",e="docs",t="latest/zh-cn/plugins/authentication/oauth",c=`
## \u529F\u80FD\u8BF4\u660E
\`OAuth2\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8EJWT(JSON Web Tokens)\u8FDB\u884COAuth2 Access Token\u7B7E\u53D1\u7684\u80FD\u529B, \u9075\u5FAA[RFC9068](https://datatracker.ietf.org/doc/html/rfc9068)\u89C4\u8303

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`350\`

## \u914D\u7F6E\u5B57\u6BB5

### \u8BA4\u8BC1\u914D\u7F6E

| \u540D\u79F0                 | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C          | \u63CF\u8FF0                                                                                                                                                                          |
| -----------          | --------------- | ------------------------------------------- | ------          | -----------------------------------------------------------                                                                                                                   |
| \`consumers\`          | array of object | \u5FC5\u586B                                        | -               | \u914D\u7F6E\u670D\u52A1\u7684\u8C03\u7528\u8005\uFF0C\u7528\u4E8E\u5BF9\u8BF7\u6C42\u8FDB\u884C\u8BA4\u8BC1                                                                                                                                          |
| \`issuer\`             | string          | \u9009\u586B                                        | Higress-Gateway | \u7528\u4E8E\u586B\u5145JWT\u4E2D\u7684issuer                                                                                                                                                         |
| \`auth_path\`          | string          | \u9009\u586B                                        | /oauth2/token   | \u6307\u5B9A\u8DEF\u5F84\u540E\u7F00\u7528\u4E8E\u7B7E\u53D1Token\uFF0C\u8DEF\u7531\u7EA7\u914D\u7F6E\u65F6\uFF0C\u8981\u786E\u4FDD\u9996\u5148\u80FD\u5339\u914D\u5BF9\u5E94\u7684\u8DEF\u7531, \u4F7F\u7528 API \u7BA1\u7406\u65F6\uFF0C\u9700\u8981\u521B\u5EFA\u76F8\u540C\u8DEF\u5F84\u7684\u63A5\u53E3                                                                  |
| \`global_credentials\` | bool            | \u9009\u586B                                        | ture            | \u5728\u901A\u8FC7 consumer \u8BA4\u8BC1\u7684\u524D\u63D0\u4E0B\uFF0C\u5141\u8BB8\u4EFB\u610F\u8DEF\u7531\u7B7E\u53D1\u7684\u51ED\u8BC1\u8BBF\u95EE                                                                                                                      |
| \`auth_header_name\`   | string          | \u9009\u586B                                        | Authorization   | \u7528\u4E8E\u6307\u5B9A\u4ECE\u54EA\u4E2A\u8BF7\u6C42\u5934\u83B7\u53D6JWT                                                                                                                                                   |
| \`token_ttl\`          | number          | \u9009\u586B                                        | 7200            | token\u4ECE\u7B7E\u53D1\u540E\u591A\u4E45\u5185\u6709\u6548\uFF0C\u5355\u4F4D\u4E3A\u79D2                                                                                                                                             |
| \`clock_skew_seconds\` | number          | \u9009\u586B                                        | 60              | \u6821\u9A8CJWT\u7684exp\u548Ciat\u5B57\u6BB5\u65F6\u5141\u8BB8\u7684\u65F6\u949F\u504F\u79FB\u91CF\uFF0C\u5355\u4F4D\u4E3A\u79D2                                                                                                                             |
| \`keep_token\`         | bool            | \u9009\u586B                                        | ture            | \u8F6C\u53D1\u7ED9\u540E\u7AEF\u65F6\u662F\u5426\u4FDD\u7559JWT                                                                                                                                                       |
| \`global_auth\`        | array of string | \u9009\u586B(**\u4EC5\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**)                    | -               | \u53EA\u80FD\u5728\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E\uFF0C\u82E5\u914D\u7F6E\u4E3Atrue\uFF0C\u5219\u5168\u5C40\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u914D\u7F6E\u4E3Afalse\uFF0C\u5219\u53EA\u5BF9\u505A\u4E86\u914D\u7F6E\u7684\u57DF\u540D\u548C\u8DEF\u7531\u751F\u6548\u8BA4\u8BC1\u673A\u5236; \u82E5\u4E0D\u914D\u7F6E\u5219\u4EC5\u5F53\u6CA1\u6709\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u65F6\u5168\u5C40 \u751F\u6548\uFF08\u517C\u5BB9\u8001\u7528\u6237\u4F7F\u7528\u4E60\u60EF\uFF09 |

\`consumers\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0                    | \u6570\u636E\u7C7B\u578B          | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C                                            | \u63CF\u8FF0                     |
| ----------------------- | ----------------- | -------- | ------------------------------------------------- | ------------------------ |
| \`name\`                  | string            | \u5FC5\u586B     | -                                                 | \u914D\u7F6E\u8BE5consumer\u7684\u540D\u79F0     |
| \`client_id\`             | string            | \u5FC5\u586B     | -                                                 | OAuth2 client id         |
| \`client_secret\`         | string            | \u5FC5\u586B     | -                                                 | OAuth2 client secret     |

**\u6CE8\u610F\uFF1A**
- \u5BF9\u4E8E\u5F00\u542F\u8BE5\u914D\u7F6E\u7684\u8DEF\u7531\uFF0C\u5982\u679C\u8DEF\u5F84\u540E\u7F00\u548C\`auth_path\`\u5339\u914D\uFF0C\u5219\u8BE5\u8DEF\u7531\u4E0D\u4F1A\u5230\u539F\u76EE\u6807\u670D\u52A1\uFF0C\u800C\u662F\u7528\u4E8E\u751F\u6210Token
- \u5982\u679C\u5173\u95ED\`global_credentials\`,\u8BF7\u786E\u4FDD\u542F\u7528\u6B64\u63D2\u4EF6\u7684\u8DEF\u7531\u4E0D\u662F\u7CBE\u786E\u5339\u914D\u8DEF\u7531\uFF0C\u6B64\u65F6\u82E5\u5B58\u5728\u53E6\u4E00\u6761\u524D\u7F00\u5339\u914D\u8DEF\u7531\uFF0C\u5219\u53EF\u80FD\u5BFC\u81F4\u9884\u671F\u5916\u884C\u4E3A
- \u5BF9\u4E8E\u901A\u8FC7\u8BA4\u8BC1\u9274\u6743\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u7684header\u4F1A\u88AB\u6DFB\u52A0\u4E00\u4E2A\`X-Mse-Consumer\`\u5B57\u6BB5\uFF0C\u7528\u4EE5\u6807\u8BC6\u8C03\u7528\u8005\u7684\u540D\u79F0\u3002

### \u9274\u6743\u914D\u7F6E\uFF08\u975E\u5FC5\u9700\uFF09

| \u540D\u79F0        | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42                                    | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                           |
| ----------- | --------------- | ------------------------------------------- | ------ | -----------------------------------------------------------                                                                                                    |
| \`allow\`     | array of string | \u9009\u586B(**\u975E\u5B9E\u4F8B\u7EA7\u522B\u914D\u7F6E**)                    | -      | \u53EA\u80FD\u5728\u8DEF\u7531\u6216\u57DF\u540D\u7B49\u7EC6\u7C92\u5EA6\u89C4\u5219\u4E0A\u914D\u7F6E\uFF0C\u5BF9\u4E8E\u7B26\u5408\u5339\u914D\u6761\u4EF6\u7684\u8BF7\u6C42\uFF0C\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 consumer\uFF0C\u4ECE\u800C\u5B9E\u73B0\u7EC6\u7C92\u5EA6\u7684\u6743\u9650\u63A7\u5236 |

**\u6CE8\u610F\uFF1A**
- \u5728\u4E00\u4E2A\u89C4\u5219\u91CC\uFF0C\u9274\u6743\u914D\u7F6E\u548C\u8BA4\u8BC1\u914D\u7F6E\u4E0D\u53EF\u540C\u65F6\u5B58\u5728

## \u914D\u7F6E\u793A\u4F8B

### \u8DEF\u7531\u7C92\u5EA6\u914D\u7F6E\u8BA4\u8BC1

\u5728\`route-a\`\u548C\`route-b\`\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A

\`\`\`yaml
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`

\u6B64\u65F6\u867D\u7136\u4F7F\u7528\u540C\u4E00\u4EFD\u914D\u7F6E\uFF0C\u4F46\`route-a\` \u4E0B\u7B7E\u53D1\u7684\u51ED\u8BC1\u65E0\u6CD5\u7528\u4E8E\u8BBF\u95EE \`route-b\`\uFF0C\u53CD\u4E4B\u4EA6\u7136\u3002

\u5982\u679C\u5E0C\u671B\u540C\u4E00\u4EFD\u914D\u7F6E\u5171\u4EAB\u51ED\u8BC1\u8BBF\u95EE\u6743\u9650\uFF0C\u53EF\u4EE5\u505A\u5982\u4E0B\u914D\u7F6E:

\`\`\`yaml
global_credentials: true
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`

### \u5168\u5C40\u914D\u7F6E\u8BA4\u8BC1\uFF0C\u8DEF\u7531\u7C92\u5EA6\u8FDB\u884C\u9274\u6743

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u7279\u5B9A\u8DEF\u7531\u6216\u57DF\u540D\u5F00\u542F Jwt Auth \u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u6CE8\u610F\u5982\u679C\u4E00\u4E2AJWT\u80FD\u5339\u914D\u591A\u4E2A\`jwks\`\uFF0C\u5219\u6309\u7167\u914D\u7F6E\u987A\u5E8F\u547D\u4E2D\u7B2C\u4E00\u4E2A\u5339\u914D\u7684\`consumer\`

\u5728\u5B9E\u4F8B\u7EA7\u522B\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A

\`\`\`yaml
global_auth: false
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- name: consumer2
  client_id: 87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`

\u5728\`route-a\`\u548C\`route-b\`\u4E24\u4E2A\u8DEF\u7531\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A

\`\`\`yaml
allow:
- consumer1
\`\`\`

\u5728\`*.exmaple.com\`\u548C\`test.com\`\u4E24\u4E2A\u57DF\u540D\u505A\u5982\u4E0B\u63D2\u4EF6\u914D\u7F6E\uFF1A

\`\`\`yaml
allow:
- consumer2
\`\`\`

\u6B64\u4F8B\u6307\u5B9A\u7684 \`route-a\` \u548C \`route-b\` \u5373\u5728\u521B\u5EFA\u7F51\u5173\u8DEF\u7531\u65F6\u586B\u5199\u7684\u8DEF\u7531\u540D\u79F0\uFF0C\u5F53\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\u8DEF\u7531\u65F6\uFF0C\u5C06\u5141\u8BB8\`name\`\u4E3A\`consumer1\`\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\uFF1B

\u6B64\u4F8B\u6307\u5B9A\u7684 \`*.example.com\` \u548C \`test.com\` \u7528\u4E8E\u5339\u914D\u8BF7\u6C42\u7684\u57DF\u540D\uFF0C\u5F53\u53D1\u73B0\u57DF\u540D\u5339\u914D\u65F6\uFF0C\u5C06\u5141\u8BB8\`name\`\u4E3A\`consumer2\`\u7684\u8C03\u7528\u8005\u8BBF\u95EE\uFF0C\u5176\u4ED6\u8C03\u7528\u8005\u4E0D\u5141\u8BB8\u8BBF\u95EE\u3002

### \u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F

\u4EE5\u4E0B\u914D\u7F6E\u5C06\u5BF9\u7F51\u5173\u5B9E\u4F8B\u7EA7\u522B\u5F00\u542F OAuth2 \u8BA4\u8BC1\uFF0C\u6240\u6709\u8BF7\u6C42\u5747\u9700\u8981\u7ECF\u8FC7\u8BA4\u8BC1\u540E\u624D\u80FD\u8BBF\u95EE

\`\`\`yaml
global_auth: true
consumers:
- name: consumer1
  client_id: 12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx
- name: consumer2
  client_id: 87654321-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  client_secret: hgfedcba-xxxx-xxxx-xxxx-xxxxxxxxxxxx
\`\`\`

# \u8BF7\u6C42\u793A\u4F8B

## \u4F7F\u7528 Client Credential \u6388\u6743\u6A21\u5F0F

### \u83B7\u53D6 AccessToken

\`\`\`bash

# \u901A\u8FC7 GET \u65B9\u6CD5\u83B7\u53D6\uFF08\u63A8\u8350\uFF09

curl 'http://test.com/oauth2/token?grant_type=client_credentials&client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

# \u901A\u8FC7 POST \u65B9\u6CD5\u83B7\u53D6\uFF08\u9700\u8981\u5148\u5339\u914D\u5230\u6709\u771F\u5B9E\u76EE\u6807\u670D\u52A1\u7684\u8DEF\u7531\uFF0C\u5426\u5219\u7F51\u5173\u4E0D\u4F1A\u8BFB\u53D6\u8BF7\u6C42 Body\uFF09

curl 'http://test.com/oauth2/token' -H 'content-type: application/x-www-form-urlencoded' -d 'grant_type=client_credentials&client_id=12345678-xxxx-xxxx-xxxx-xxxxxxxxxxxx&client_secret=abcdefgh-xxxx-xxxx-xxxx-xxxxxxxxxxxx'

# \u83B7\u53D6\u54CD\u5E94\u4E2D\u7684 access_token \u5B57\u6BB5\u5373\u53EF:
{
  "token_type": "bearer",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0",
  "expires_in": 7200
}

\`\`\`

### \u4F7F\u7528 AccessToken \u8BF7\u6C42

\`\`\`bash

curl 'http://test.com' -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFwcGxpY2F0aW9uXC9hdCtqd3QifQ.eyJhdWQiOiJkZWZhdWx0IiwiY2xpZW50X2lkIjoiMTIzNDU2NzgteHh4eC14eHh4LXh4eHgteHh4eHh4eHh4eHh4IiwiZXhwIjoxNjg3OTUxNDYzLCJpYXQiOjE2ODc5NDQyNjMsImlzcyI6IkhpZ3Jlc3MtR2F0ZXdheSIsImp0aSI6IjEwOTU5ZDFiLThkNjEtNGRlYy1iZWE3LTk0ODEwMzc1YjYzYyIsInN1YiI6ImNvbnN1bWVyMSJ9.NkT_rG3DcV9543vBQgneVqoGfIhVeOuUBwLJJ4Wycb0'

\`\`\`

# \u5E38\u89C1\u9519\u8BEF\u7801\u8BF4\u660E

| HTTP \u72B6\u6001\u7801 | \u51FA\u9519\u4FE1\u606F               | \u539F\u56E0\u8BF4\u660E                                                                         |
| ----------- | ---------------------- | -------------------------------------------------------------------------------- |
| 401         | Invalid Jwt token      | \u8BF7\u6C42\u5934\u672A\u63D0\u4F9BJWT, \u6216\u8005JWT\u683C\u5F0F\u9519\u8BEF\uFF0C\u6216\u8FC7\u671F\u7B49\u539F\u56E0                                   |
| 403         | Access Denied          | \u65E0\u6743\u9650\u8BBF\u95EE\u5F53\u524D\u8DEF\u7531                                                               |
`,n={title:"OAuth2 \u8BA4\u8BC1",description:"OAuth2 \u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","oauth2"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/oauth.md",rawData:void 0};export{a as _internal,c as body,e as collection,n as data,x as id,t as slug};
