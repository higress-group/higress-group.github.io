const e="latest/zh-cn/plugins/authentication/oidc.md",i="docs",o="latest/zh-cn/plugins/authentication/oidc",t=`
## \u529F\u80FD\u8BF4\u660E

\`oidc\` \u63D2\u4EF6\u5B9E\u73B0\u4E86 OIDC \u8BA4\u8BC1\u80FD\u529B, \u63D2\u4EF6\u76EE\u524D\u5B58\u5728\u7684 CSRF \u653B\u51FB\u95EE\u9898\uFF0C\u4E0D\u5EFA\u8BAE\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002

## \u914D\u7F6E\u5B57\u6BB5

| \u5B57\u6BB5                | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C        | \u63CF\u8FF0                                                               |
|-------------------|--------|------|------------|------------------------------------------------------------------|
| issuer            | string | \u5FC5\u586B   | -          | \u8BBE\u7F6E\u8BA4\u8BC1\u670D\u52A1\u7684 issuer \uFF0C\u5373\u7B7E\u53D1\u4EBA\u3002                                            |
| client_id         | string | \u5FC5\u586B   | -          | \u8F93\u5165\u670D\u52A1\u6CE8\u518C\u7684\u5E94\u7528 ID \u3002                                                   |
| client_secret     | string | \u5FC5\u586B   | -          | \u8F93\u5165\u670D\u52A1\u6CE8\u518C\u7684\u5E94\u7528 Secret \u3002                                               |
| redirect_url      | string | \u5FC5\u586B   | -          | \u8F93\u5165\u6388\u6743\u6210\u529F\u540E\u7684\u91CD\u5B9A\u5411\u5730\u5740\uFF0C\u9700\u8981\u4E0E OIDC \u4E2D\u914D\u7F6E\u7684\u91CD\u5B9A\u5411\u5730\u5740\u4FDD\u6301\u4E00\u81F4\u3002\u8BE5\u5730\u5740\u7684\u540E\u7F00\u9700\u4E3A (oauth2/callback)\u3002 |
| client_url        | string | \u5FC5\u586B   | -          | \u767B\u9646\u6210\u529F\u8DF3\u8F6C\u540E\u7684\u5730\u5740\uFF0C\u5982\u679C\u672A\u8DF3\u8F6C\u6210\u529F\uFF0C\u8BF7\u68C0\u67E5\u8BBE\u7F6E\u7684 cookiename \u662F\u5426\u91CD\u590D\u3002                       |
| scopes            | Array  | \u5FC5\u586B   | -          | \u8F93\u5165\u6388\u6743\u4F5C\u7528\u57DF\u7684\u6570\u7EC4\u3002                                                      |
| skip_expiry_check | bool   | \u9009\u586B   | false      | \u63A7\u5236\u662F\u5426\u68C0\u6D4B IDToken \u7684\u8FC7\u671F\u72B6\u6001\u3002                                            |
| skip_nonce_check  | bool   | \u9009\u586B   | true       | \u63A7\u5236\u662F\u5426\u68C0\u6D4B Nonce \u503C\u3002                                                  |
| timeout_millis    | int    | \u9009\u586B   | 500        | \u8BBE\u7F6E\u8BF7\u6C42\u4E0E\u8BA4\u8BC1\u670D\u52A1\u8FDE\u63A5\u7684\u8D85\u65F6\u65F6\u957F\u3002\u5982\u679C\u9891\u7E41\u9047\u5230\u8D85\u65F6\u9519\u8BEF\uFF0C\u5EFA\u8BAE\u589E\u52A0\u8BE5\u65F6\u957F\u3002                             |
| cookie_name       | string | \u9009\u586B   | "_oidc_wasm" | \u8BBE\u7F6E cookie \u7684\u540D\u79F0, \u5982\u679C\u4E00\u4E2A\u57DF\u540D\u4E0B\u591A\u4E2A\u8DEF\u7531\u8BBE\u7F6E\u4E0D\u540C\u7684\u8BA4\u8BC1\u670D\u52A1\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E0D\u540C\u540D\u79F0\u3002                    |
| cookie_domain     | string | \u5FC5\u586B   | -          | \u8BBE\u7F6E cookie \u7684\u57DF\u540D\u3002                                                   |
| cookie_path       | string | \u9009\u586B   | "/"        | \u8BBE\u7F6E cookie \u7684\u5B58\u50A8\u8DEF\u5F84\u3002                                                 |
| cookie_secure     | bool   | \u9009\u586B   | false      | \u63A7\u5236 cookie \u662F\u5426\u53EA\u5728 HTTPS \u4E0B\u4F20\u8F93\u3002                                        |
| cookie_httponly   | bool   | \u9009\u586B   | true       | \u63A7\u5236 cookie \u662F\u5426\u4EC5\u9650\u4E8E HTTP \u4F20\u8F93\uFF0C\u7981\u6B62JavaScript\u8BBF\u95EE\u3002                          |
| cookie_samesite   | string | \u9009\u586B   | "Lax"      | \u8BBE\u7F6E cookie \u7684 SameSite \u5C5E\u6027\uFF0C\u5982\uFF1A"Lax", "none"\u3002\u7B2C\u4E09\u65B9\u8DF3\u8F6C\u4E00\u822C\u5EFA\u8BAE\u9ED8\u8BA4\u8BBE\u7F6E\u4E3ALax        |
| service_source    | string | \u5FC5\u586B   | -          | \u7C7B\u578B\u4E3A\u56FA\u5B9A ip \u6216\u8005 DNS ,\u8F93\u5165\u8BA4\u8BC1 oidc \u670D\u52A1\u7684\u6CE8\u518C\u6765\u6E90\u3002                              |
| service_name      | string | \u5FC5\u586B   | -          | \u8F93\u5165\u8BA4\u8BC1 oidc \u670D\u52A1\u7684\u6CE8\u518C\u540D\u79F0\u3002                                               |
| service_port      | int    | \u5FC5\u586B   | -          | \u8F93\u5165\u8BA4\u8BC1 oidc \u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3\u3002                                               |
| service_host      | string | \u5FC5\u586B   | -          | \u5F53\u7C7B\u578B\u4E3A\u56FA\u5B9Aip\u65F6\u5FC5\u987B\u586B\u5199,\u8F93\u5165\u8BA4\u8BC1 oidc \u670D\u52A1\u7684\u4E3B\u673A\u540D\u3002                                  |
| service_domain    | string | \u5FC5\u586B   | -          | \u5F53\u7C7B\u578B\u4E3ADNS\u65F6\u5FC5\u987B\u586B\u5199\uFF0C\u8F93\u5165\u8BA4\u8BC1 oidc \u670D\u52A1\u7684domain\u3002                                |

\u8FD9\u662F\u4E00\u4E2A\u7528\u4E8E OIDC \u8BA4\u8BC1\u914D\u7F6E\u7684\u8868\u683C\uFF0C\u786E\u4FDD\u5728\u63D0\u4F9B\u6240\u6709\u5FC5\u8981\u7684\u4FE1\u606F\u65F6\u9075\u5FAA\u4E0A\u8FF0\u6307\u5BFC\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u56FA\u5B9A IP

\`\`\`yaml
issuer: "http://127.0.0.1:9090/realms/myrealm"
redirect_url: "http://foo.bar.com/bar/oauth2/callback"
client_url: "http://foo.bar.com/"
scopes:
  - "openid"
  - "email"
cookie_name: "_oauth2_wasm_keyclocak"
cookie_domain: "foo.bar.com"
client_id: "xxxxxxxxxxxx"
client_secret: "xxxxxxxxxxxxxx"
service_host: "127.0.0.1:9090"
service_name: "keyclocak"
service_port: 80
service_source: "ip"
\`\`\`

### DNS\u57DF\u540D

\u5728\u670D\u52A1\u6765\u6E90\u4E2D\u6CE8\u518C\u597D\u670D\u52A1\u540E\uFF0C\u521B\u5EFA\u5BF9\u5E94\u7684 ingress\u3002

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    higress.io/destination: okta.dns
    higress.io/backend-protocol: "HTTPS"
    higress.io/ignore-path-case: "false"
spec:
  ingressClassName: higress
  rules:
    - host: foo.bar.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              resource:
                apiGroup: networking.higress.io
                kind: McpBridge
                name: default

\`\`\`
### \u521B\u5EFA Wasm \u63D2\u4EF6

\`\`\`yaml
issuer: "https://dev-65874123.okta.com"
redirect_url: "http://foo.bar.com/a/oauth2/callback"
scopes:
  - "openid"
  - "email"
client_url: "http://foo.bar.com/a"
cookie_domain: "foo.bar.com"
client_id: "xxxxxxxxxxxxxxx"
client_secret: "xxxxxxx"
service_domain: "dev-65874123.okta.com"
service_name: "okta"
service_port: 443
service_source: "dns"
timeout_millis: 2000
\`\`\`

\u5728\u901A\u8FC7\u63D2\u4EF6\u9A8C\u8BC1\u540E\u4F1A\u643A\u5E26 \`Authorization\`\u7684\u6807\u5934\u643A\u5E26\u4EE4\u724C\u3002
`,s={title:"OIDC \u8BA4\u8BC1",description:"OIDC \u8BA4\u8BC1\u63D2\u4EF6\u5B9E\u73B0\u4E86 OIDC \u8BA4\u8BC1\u80FD\u529B, \u63D2\u4EF6\u76EE\u524D\u5B58\u5728\u7684 CSRF \u653B\u51FB\u95EE\u9898\uFF0C\u4E0D\u5EFA\u8BAE\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","auth"]},c={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/oidc.md",rawData:void 0};export{c as _internal,t as body,i as collection,s as data,e as id,o as slug};
