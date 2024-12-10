const e="latest/zh-cn/plugins/authentication/oidc.md",t="docs",o="latest/zh-cn/plugins/authentication/oidc",i=`
## \u529F\u80FD\u8BF4\u660E

\u672C\u63D2\u4EF6\u652F\u6301OpenID Connect\uFF08OIDC\uFF09\u8EAB\u4EFD\u8BA4\u8BC1\u3002\u540C\u65F6\uFF0C\u8BE5\u63D2\u4EF6\u5F3A\u5316\u4E86\u5BF9\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\uFF08CSRF\uFF09\u653B\u51FB\u7684\u9632\u5FA1\u80FD\u529B\uFF0C\u5E76\u652F\u6301OpenID Connect\u534F\u8BAE\u4E2D\u7684\u6CE8\u9500\u7AEF\u70B9\uFF08Logout Endpoint\uFF09\u4EE5\u53CA\u5237\u65B0\u4EE4\u724C\uFF08Refresh Token\uFF09\u673A\u5236\u3002\u5728\u7ECF\u8FC7Wasm\u63D2\u4EF6\u8FDB\u884COIDC\u9A8C\u8BC1\u540E\u7684\u8BF7\u6C42\u5C06\u643A\u5E26 \`Authorization\` \u5934\u90E8\uFF0C\u5305\u542B\u76F8\u5E94\u7684\u8BBF\u95EE\u4EE4\u724C\uFF08Access Token\uFF09\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`350\`

## \u914D\u7F6E\u5B57\u6BB5

| Option                        | Type         | Description                                                  | Default           |
| ----------------------------- | ------------ | ------------------------------------------------------------ | ----------------- |
| cookie_name                   | string       | the name of the cookie that the oauth_proxy creates. Should be changed to use a [cookie prefix](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#cookie_prefixes) (\`__Host-\` or \`__Secure-\`) if \`--cookie-secure\` is set. | \`"_oauth2_proxy"\` |
| cookie_secret                 | string       | the seed string for secure cookies (optionally base64 encoded) |                   |
| cookie_domains                | string\\|list | Optional cookie domains to force cookies to (e.g. \`.yourcompany.com\`). The longest domain matching the request's host will be used (or the shortest cookie domain if there is no match). |                   |
| cookie_path                   | string       | an optional cookie path to force cookies to (e.g. \`/poc/\`)   | \`"/"\`             |
| cookie_expire                 | duration     | expire timeframe for cookie. If set to 0, cookie becomes a session-cookie which will expire when the browser is closed. | 168h0m0s          |
| cookie_refresh                | duration     | refresh the cookie after this duration; \`0\` to disable       |                   |
| cookie_secure                 | bool         | set [secure (HTTPS only) cookie flag](https://owasp.org/www-community/controls/SecureFlag) | true              |
| cookie_httponly               | bool         | set HttpOnly cookie flag                                     | true              |
| cookie_samesite               | string       | set SameSite cookie attribute (\`"lax"\`, \`"strict"\`, \`"none"\`, or \`""\`). | \`""\`              |
| cookie_csrf_per_request       | bool         | Enable having different CSRF cookies per request, making it possible to have parallel requests. | false             |
| cookie_csrf_expire            | duration     | expire timeframe for CSRF cookie                             | 15m               |
| client_id                     | string       | the OAuth Client ID                                          |                   |
| client_secret                 | string       | the OAuth Client Secret                                      |                   |
| provider                      | string       | OAuth provider                                               | oidc              |
| pass_authorization_header     | bool         | pass OIDC IDToken to upstream via Authorization Bearer header | true              |
| oidc_issuer_url               | string       | the OpenID Connect issuer URL, e.g. \`"https://dev-o43xb1mz7ya7ach4.us.auth0.com"\` |                   |
| oidc_verifier_request_timeout | uint32       | OIDC verifier discovery request timeout                      | 2000(ms)          |
| scope                         | string       | OAuth scope specification                                    |                   |
| redirect_url                  | string       | the OAuth Redirect URL, e.g. \`"https://internalapp.yourcompany.com/oauth2/callback"\` |                   |
| service_name                  | string       | registered name of the OIDC service, e.g. \`auth.dns\`, \`keycloak.static\` |                   |
| service_port                  | int64        | service port of the OIDC service                             |                   |
| service_host                  | string       | host of the OIDC service when type is static ip              |                   |
| match_type                    | string       | match type (\`whitelist\` or \`blacklist\`)                      | \`"whitelist"\`     |
| match_list                    | rule\\|list   | a list of (match_rule_domain, match_rule_path, and match_rule_type). |                   |
| match_rule_domain             | string       | match rule domain, support wildcard pattern such as \`*.bar.com\` |                   |
| match_rule_path               | string       | match rule path such as \`/headers\`                           |                   |
| match_rule_type               | string       | match rule type can be \`exact\` or \`prefix\` or \`regex\`        |                   |

## \u4F7F\u7528\u65B9\u5F0F

### \u751F\u6210 Cookie \u5BC6\u94A5

\`\`\` python
python -c 'import os,base64; print(base64.urlsafe_b64encode(os.urandom(32)).decode())'
\`\`\`

\u53C2\u8003\uFF1A[Oauth2-proxy Generating a Cookie Secret](https://oauth2-proxy.github.io/oauth2-proxy/configuration/overview#generating-a-cookie-secret)

### \u9ED1\u767D\u540D\u5355\u6A21\u5F0F

\u652F\u6301\u9ED1\u767D\u540D\u5355\u6A21\u5F0F\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A\u767D\u540D\u5355\u6A21\u5F0F\uFF0C\u767D\u540D\u5355\u4E3A\u7A7A\uFF0C\u5373\u6240\u6709\u8BF7\u6C42\u90FD\u9700\u8981\u7ECF\u8FC7\u9A8C\u8BC1\uFF0C\u5339\u914D\u57DF\u540D\u652F\u6301\u6CDB\u57DF\u540D\u4F8B\u5982\`*.bar.com\`\uFF0C\u5339\u914D\u89C4\u5219\u652F\u6301\u7CBE\u786E\u5339\u914D\`exact\`\uFF0C\u524D\u7F00\u5339\u914D\`prefix\`\uFF0C\u6B63\u5219\u5339\u914D\`regex\`

* **\u767D\u540D\u5355\u6A21\u5F0F**

\`\`\`yaml
match_type: 'whitelist'
match_list:
    - match_rule_domain: '*.bar.com'
      match_rule_path: '/foo'
      match_rule_type: 'prefix'
\`\`\`

\u6CDB\u57DF\u540D\`*.bar.com\`\u4E0B\u524D\u7F00\u5339\u914D\`/foo\`\u7684\u8BF7\u6C42\u65E0\u9700\u9A8C\u8BC1

* **\u9ED1\u540D\u5355\u6A21\u5F0F**

\`\`\`yaml
match_type: 'blacklist'
match_list:
    - match_rule_domain: '*.bar.com'
      match_rule_path: '/headers'
      match_rule_type: 'prefix'
\`\`\`

\u53EA\u6709\u6CDB\u57DF\u540D\`*.bar.com\`\u4E0B\u524D\u7F00\u5339\u914D\`/header\`\u7684\u8BF7\u6C42\u9700\u8981\u9A8C\u8BC1

### \u6CE8\u9500\u7528\u6237

\u6CE8\u9500\u7528\u6237\u9700\u91CD\u5B9A\u5411\u5230\`/oauth2/sign_out\`\u8FD9\u4E2A\u7AEF\u70B9\u3002\u8FD9\u4E2A\u7AEF\u70B9\u4EC5\u79FB\u9664oauth2-proxy\u81EA\u5DF1\u8BBE\u7F6E\u7684cookie\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7528\u6237\u4ECD\u7136\u5728OIDC Provider\u5904\u4FDD\u6301\u767B\u5F55\u72B6\u6001\uFF0C\u5E76\u4E14\u5728\u518D\u6B21\u8BBF\u95EE\u5E94\u7528\u65F6\u53EF\u80FD\u4F1A\u81EA\u52A8\u91CD\u65B0\u767B\u5F55\u3002\u56E0\u6B64\u8FD8\u9700\u8981\u4F7F\u7528\`rd\`\u67E5\u8BE2\u53C2\u6570\u5C06\u7528\u6237\u91CD\u5B9A\u5411\u5230\u8BA4\u8BC1\u63D0\u4F9B\u5546\u7684\u6CE8\u9500\u9875\u9762\uFF0C\u5373\u91CD\u5B9A\u5411\u7528\u6237\u5230\u7C7B\u4F3C\u5982\u4E0B\u5730\u5740\uFF08\u6CE8\u610FURL\u7F16\u7801\uFF01\uFF09\uFF1A

\`\`\`
/oauth2/sign_out?rd=https%3A%2F%2Fmy-oidc-provider.example.com%2Fsign_out_page
\`\`\`

\u6216\u8005\uFF0C\u53EF\u4EE5\u5728\`X-Auth-Request-Redirect\`\u5934\u90E8\u4E2D\u5305\u542B\u91CD\u5B9A\u5411URL\uFF1A

\`\`\`
GET /oauth2/sign_out HTTP/1.1
X-Auth-Request-Redirect: https://my-oidc-provider.example.com/sign_out_page
...
\`\`\`

\u91CD\u5B9A\u5411URL\u4E2D\u53EF\u4EE5\u5305\u542B\`post_logout_redirect_uri\`\u53C2\u6570\u6307\u5B9AOIDC Provider\u767B\u51FA\u540E\u8DF3\u8F6C\u5230\u7684\u9875\u9762\uFF0C\u4F8B\u5982\u540E\u7AEF\u670D\u52A1\u7684\u767B\u51FA\u9875\u9762\uFF0C\u4E0D\u643A\u5E26\u8BE5\u53C2\u6570\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230OIDC Provider\u7684\u767B\u51FA\u9875\u9762\uFF0C\u8BE6\u60C5\u89C1\u4E0B\u65B9auth0\u548Ckeycloak\u7684\u793A\u4F8B\uFF08\u5982\u679COIDC Provider\u652F\u6301\u4F1A\u8BDD\u7BA1\u7406\u548C\u53D1\u73B0\uFF0C\u90A3\u4E48"sign_out_page"\u5E94\u8BE5\u662F\u4ECE[metadata](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig)\u4E2D\u83B7\u53D6\u7684\`end_session_endpoint\`\uFF09

### OIDC \u670D\u52A1 HTTPS \u534F\u8BAE

\u5982\u679C OIDC Provider \u4E3A HTTPS \u534F\u8BAE\uFF0C\u53C2\u8003Higress\u4E2D[\u914D\u7F6E\u540E\u7AEF\u670D\u52A1\u534F\u8BAE\uFF1AHTTPS](https://higress.cn/docs/latest/user/annotation-use-case/#%E9%85%8D%E7%BD%AE%E5%90%8E%E7%AB%AF%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AEhttps%E6%88%96grpc)\u7684\u8BF4\u660E\u9700\u8981\u901A\u8FC7\u4F7F\u7528\u6CE8\u89E3\`higress.io/backend-protocol: "HTTPS"\`\u914D\u7F6E\u8BF7\u6C42\u8F6C\u53D1\u81F3\u540E\u7AEF\u670D\u52A1\u4F7F\u7528HTTPS\u534F\u8BAE\uFF0C\u53C2\u8003Auth0\u793A\u4F8B\u4E2DIngress\u914D\u7F6E

## \u914D\u7F6E\u793A\u4F8B

### Auth0 \u914D\u7F6E\u793A\u4F8B

#### Step 1: \u914D\u7F6E Auth0 \u8D26\u6237

- \u767B\u5F55\u5230\u5F00\u53D1\u4EBA\u5458 Okta \u7F51\u7AD9 [Developer Auth0 site](https://auth0.com/)
- \u6CE8\u518C\u6D4B\u8BD5 web \u5E94\u7528\u7A0B\u5E8F

**\u6CE8**\uFF1A\u9700\u586B\u5199Allowed Callback URLs, Allowed Logout URLs, Allowed Web Origins\u7B49\u914D\u7F6E\u9879\uFF0C\u5426\u5219 OIDC Provider \u4F1A\u8BA4\u4E3A\u7528\u6237\u8DF3\u8F6C\u7684\u91CD\u5B9A\u5411 URL \u6216\u767B\u51FA URL \u65E0\u6548

#### Step 2: Higress \u914D\u7F6E\u670D\u52A1\u6765\u6E90

* \u5728Higress\u670D\u52A1\u6765\u6E90\u4E2D\u521B\u5EFAauth0 DNS\u6765\u6E90

![auth0 create](https://gw.alicdn.com/imgextra/i1/O1CN01p9y0jF1tfzdXTzNYm_!!6000000005930-0-tps-3362-670.jpg)

#### Step 3: OIDC \u670D\u52A1 HTTPS \u914D\u7F6E

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: auth0-ingress
  annotations:
    higress.io/destination: auth.dns
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

#### Step 4: Wasm \u63D2\u4EF6\u914D\u7F6E

\`\`\`yaml
redirect_url: 'http://foo.bar.com/oauth2/callback'
oidc_issuer_url: 'https://dev-o43xb1mz7ya7ach4.us.auth0.com/'
client_id: 'XXXXXXXXXXXXXXXX'
client_secret: 'XXXXXXXXXXXXXXXX'
scope: 'openid email offline_access'
cookie_secret: 'nqavJrGvRmQxWwGNptLdyUVKcBNZ2b18Guc1n_8DCfY='
service_name: 'auth.dns'
service_port: 443
match_type: 'whitelist'
match_list:
    - match_rule_domain: '*.bar.com'
      match_rule_path: '/foo'
      match_rule_type: 'prefix'
\`\`\`

**\u6CE8**\uFF1A\u5FC5\u987B\u5148\u914D\u7F6E\u670D\u52A1\u6765\u6E90\uFF0Cwasm\u63D2\u4EF6\u5728\u521D\u59CB\u5316\u65F6\u9700\u8981\u8BBF\u95EE\u914D\u7F6E\u7684\u670D\u52A1\u83B7\u53D6openid-configuration

#### \u8BBF\u95EE\u670D\u52A1\u9875\u9762\uFF0C\u672A\u767B\u9646\u7684\u8BDD\u8FDB\u884C\u8DF3\u8F6C

![auth0_login](https://gw.alicdn.com/imgextra/i3/O1CN01hVNk0C1gkUWLwuC0N_!!6000000004180-0-tps-3840-2160.jpg)

#### \u767B\u9646\u6210\u529F\u8DF3\u8F6C\u5230\u670D\u52A1\u9875\u9762

headers\u4E2D\u53EF\u4EE5\u770B\u5230\u643A\u5E26\u4E86_oauth2_proxy \u7684cookie\u7528\u4E8E\u4E0B\u6B21\u767B\u9646\u8BBF\u95EE\uFF0CAuthorization\u5BF9\u5E94IDToken\u7528\u4E8E\u540E\u7AEF\u670D\u52A1\u83B7\u5F97\u7528\u6237\u4FE1\u606F

![auth0 service](https://gw.alicdn.com/imgextra/i1/O1CN01vyrB6u1xPHep1RRqb_!!6000000006435-2-tps-3840-2160.png)

#### \u8BBF\u95EE\u767B\u51FA\u8DF3\u8F6C\u5230\u767B\u51FA\u9875\u9762

\`\`\`
http://foo.bar.com/oauth2/sign_out?rd=https%3A%2F%2Fdev-o43xb1mz7ya7ach4.us.auth0.com%2Foidc%2Flogout
\`\`\`

![auth0 logout](https://gw.alicdn.com/imgextra/i3/O1CN01UntF4x1UqC4StMqtT_!!6000000002568-0-tps-3840-2160.jpg)

#### \u8BBF\u95EE\u767B\u51FA\u8DF3\u8F6C\u5230\u767B\u51FA\u9875\u9762(\u643A\u5E26post_logout_redirect_uri\u53C2\u6570\u8DF3\u8F6C\u6307\u5B9Auri)

\`\`\`
http://foo.bar.com/oauth2/sign_out?rd=https%3A%2F%2Fdev-o43xb1mz7ya7ach4.us.auth0.com%2Foidc%2Flogout%3Fpost_logout_redirect_uri%3Dhttp%3A%2F%2Ffoo.bar.com%2Ffoo
\`\`\`

\u6CE8\uFF1Apost_logout_redirect_uri\u8DF3\u8F6C\u7684uri\u9700\u8981\u5728OIDC Provider Allowed URLs\u5904\u914D\u7F6E\u624D\u53EF\u4EE5\u6B63\u5E38\u8DF3\u8F6C

![auth0 logout redirect](https://gw.alicdn.com/imgextra/i1/O1CN01AtZ2cd1JlBxsgyCjG_!!6000000001068-0-tps-3840-2160.jpg)

### keycloak \u914D\u7F6E\u793A\u4F8B

#### Step 1: Get started with keycloak on docker

<https://www.keycloak.org/getting-started/getting-started-docker> 

**\u6CE8**\uFF1A\u9700\u586B\u5199Valid redirect URIs, Valid post logout URIs, Web origins\u914D\u7F6E\u9879\uFF0C\u5426\u5219 OIDC Provider \u4F1A\u8BA4\u4E3A\u7528\u6237\u8DF3\u8F6C\u7684\u91CD\u5B9A\u5411 URL \u6216\u767B\u51FA URL \u65E0\u6548

#### Step 2: Higress \u914D\u7F6E\u670D\u52A1\u6765\u6E90

* \u5728Higress\u670D\u52A1\u6765\u6E90\u4E2D\u521B\u5EFAKeycloak\u56FA\u5B9A\u5730\u5740\u670D\u52A1

![keycloak create](https://gw.alicdn.com/imgextra/i1/O1CN01p9y0jF1tfzdXTzNYm_!!6000000005930-0-tps-3362-670.jpg)

#### Step 3: Wasm \u63D2\u4EF6\u914D\u7F6E

\`\`\`yaml
redirect_url: 'http://foo.bar.com/oauth2/callback'
oidc_issuer_url: 'http://127.0.0.1:9090/realms/myrealm'
client_id: 'XXXXXXXXXXXXXXXX'
client_secret: 'XXXXXXXXXXXXXXXX'
scope: 'openid email'
cookie_secret: 'nqavJrGvRmQxWwGNptLdyUVKcBNZ2b18Guc1n_8DCfY='
service_name: 'keycloak.static'
service_port: 80
service_host: '127.0.0.1:9090'
match_type: 'blacklist'
match_list:
    - match_rule_domain: '*.bar.com'
      match_rule_path: '/headers'
      match_rule_type: 'prefix'
\`\`\`

#### \u8BBF\u95EE\u670D\u52A1\u9875\u9762\uFF0C\u672A\u767B\u9646\u7684\u8BDD\u8FDB\u884C\u8DF3\u8F6C

![keycloak_login](https://gw.alicdn.com/imgextra/i4/O1CN01HLcl7r1boXwwnzGqA_!!6000000003512-0-tps-3840-2160.jpg)

#### \u767B\u9646\u6210\u529F\u8DF3\u8F6C\u5230\u670D\u52A1\u9875\u9762

![keycloak service](https://gw.alicdn.com/imgextra/i1/O1CN01vyrB6u1xPHep1RRqb_!!6000000006435-2-tps-3840-2160.png)

#### \u8BBF\u95EE\u767B\u51FA\u8DF3\u8F6C\u5230\u767B\u51FA\u9875\u9762

\`\`\`
http://foo.bar.com/oauth2/sign_out?rd=http%3A%2F%2F127.0.0.1:9090%2Frealms%2Fmyrealm%2Fprotocol%2Fopenid-connect%2Flogout
\`\`\`

![keycloak logout](https://gw.alicdn.com/imgextra/i4/O1CN01kQwqB523OiroOWMgM_!!6000000007246-0-tps-3840-2160.jpg)

#### \u8BBF\u95EE\u767B\u51FA\u8DF3\u8F6C\u5230\u767B\u51FA\u9875\u9762(\u643A\u5E26post_logout_redirect_uri\u53C2\u6570\u8DF3\u8F6C\u6307\u5B9Auri)

\`\`\`
http://foo.bar.com/oauth2/sign_out?rd=http%3A%2F%2F127.0.0.1:9090%2Frealms%2Fmyrealm%2Fprotocol%2Fopenid-connect%2Flogout%3Fpost_logout_redirect_uri%3Dhttp%3A%2F%2Ffoo.bar.com%2Ffoo
\`\`\`

![keycloak logout redirect](https://gw.alicdn.com/imgextra/i1/O1CN01AtZ2cd1JlBxsgyCjG_!!6000000001068-0-tps-3840-2160.jpg)

### Aliyun \u914D\u7F6E\u793A\u4F8B

#### Step 1: \u914D\u7F6E Aliyun OAuth\u5E94\u7528

\u53C2\u8003[Web\u5E94\u7528\u767B\u5F55\u963F\u91CC\u4E91](https://help.aliyun.com/zh/ram/user-guide/access-alibaba-cloud-apis-from-a-web-application)\u6D41\u7A0B\u914D\u7F6E OAuth \u5E94\u7528

#### Step 2: Higress \u914D\u7F6E\u670D\u52A1\u6765\u6E90

* \u5728Higress\u670D\u52A1\u6765\u6E90\u4E2D\u521B\u5EFAAliyun DNS\u670D\u52A1

![Aliyun service](https://gw.alicdn.com/imgextra/i3/O1CN01PMNGFS1mHXBtsEvEq_!!6000000004929-0-tps-3312-718.jpg)

#### Step 3: Wasm \u63D2\u4EF6\u914D\u7F6E

\`\`\`yaml
redirect_url: 'http://foo.bar.com/oauth2/callback'
provider: aliyun
oidc_issuer_url: 'https://oauth.aliyun.com/'
client_id: 'XXXXXXXXXXXXXXXX'
client_secret: 'XXXXXXXXXXXXXXXX'
scope: 'openid'
cookie_secret: 'nqavJrGvRmQxWwGNptLdyUVKcBNZ2b18Guc1n_8DCfY='
service_name: 'aliyun.dns'
service_port: 443
match_type: whitelist
match_list:
 - match_rule_domain: 'foo.bar.com'
   match_rule_path: /foo
   match_rule_type: prefix
\`\`\`

#### \u8BBF\u95EE\u670D\u52A1\u9875\u9762\uFF0C\u672A\u767B\u9646\u7684\u8BDD\u8FDB\u884C\u8DF3\u8F6C

![aliyun_login_1](https://gw.alicdn.com/imgextra/i1/O1CN01L379Uk1b2umAraylT_!!6000000003408-0-tps-3840-2160.jpg)

\u76F4\u63A5\u4F7F\u7528RAM\u7528\u6237\u767B\u5F55\u6216\u8005\u70B9\u51FB\u4E3B\u8D26\u6237\u767B\u5F55

![aliyun_login_2](https://gw.alicdn.com/imgextra/i1/O1CN01pfdA3l27Dy2TL83NA_!!6000000007764-0-tps-3840-2160.jpg)

#### \u767B\u9646\u6210\u529F\u8DF3\u8F6C\u5230\u670D\u52A1\u9875\u9762

![aliyun_result](https://gw.alicdn.com/imgextra/i3/O1CN015pGvi51eakt3pFS8Y_!!6000000003888-0-tps-3840-2160.jpg)

### OIDC \u6D41\u7A0B\u56FE

<p align="center">
  <img src="https://gw.alicdn.com/imgextra/i3/O1CN01TJSh9c1VwR61Q2nek_!!6000000002717-55-tps-1807-2098.svg" alt="oidc_process" width="600" />
</p>

### OIDC \u6D41\u7A0B\u89E3\u6790

#### \u7528\u6237\u672A\u767B\u5F55

1. \u6A21\u62DF\u7528\u6237\u8BBF\u95EE\u5BF9\u5E94\u670D\u52A1 API

   \`\`\`shell
   curl --url "foo.bar.com/headers"
   \`\`\`

2. Higress \u91CD\u5B9A\u5411\u5230 OIDC Provider \u767B\u5F55\u9875\u540C\u65F6\u643A\u5E26 client_id\u3001response_type\u3001scope \u7B49 OIDC \u8BA4\u8BC1\u7684\u53C2\u6570\u5E76\u8BBE\u7F6E csrf cookie \u9632\u5FA1CSRF \u653B\u51FB

   \`\`\`shell
   curl --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/authorize"\\
     --url-query "approval_prompt=force" \\
     --url-query "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\
     --url-query "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \\
     --url-query "response_type=code" \\
     --url-query "scope=openid+email+offline_access" \\
     --url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \\
     --header "Set-Cookie: _oauth2_proxy_csrf=LPruATEDgcdmelr8zScD_ObhsbP4zSzvcgmPlcNDcJpFJ0OvhxP2hFotsU-kZnYxd5KsIjzeIXGTOjf8TKcbTHbDIt-aQoZORXI_0id3qeY0Jt78223DPeJ1xBqa8VO0UiEOUFOR53FGxirJOdKFxaAvxDFb1Ok=|1718962455|V1QGWyjQ4hMNOQ4Jtf17HeQJdVqHdt5d65uraFduMIU=; Path=/; Expires=Fri, 21 Jun 2024 08:06:20 GMT; HttpOnly"
   \`\`\`

3. \u91CD\u5B9A\u5411\u5230\u767B\u5F55\u9875

![keycloak_login](https://gw.alicdn.com/imgextra/i4/O1CN01HLcl7r1boXwwnzGqA_!!6000000003512-0-tps-3840-2160.jpg)

4. \u7528\u6237\u8F93\u5165\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5B8C\u6210

5. \u643A\u5E26\u6388\u6743\u91CD\u5B9A\u5411\u5230 Higress \u5E76\u643A\u5E26\u4E86 state \u53C2\u6570\u7528\u4E8E\u9A8C\u8BC1 csrf cookie \uFF0C\u6388\u6743\u7801\u7528\u4E8E\u4EA4\u6362 token

   \`\`\`shell
   curl --url "http://foo.bar.com/oauth2/callback" \\
     --url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \\
     --url-query "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm"
   \`\`\`

6. \u6821\u9A8C csrf cookie \u4E2D\u52A0\u5BC6\u5B58\u50A8\u7684 state \u503C\u4E0E url \u53C2\u6570\u4E2D\u7684 state \u503C\u5FC5\u987B\u76F8\u540C

7. \u5229\u7528\u6388\u6743\u4EA4\u6362 id_token \u548C access_token

   \`\`\`shell
   curl -X POST \\
     --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \\
     --data "grant_type=authorization_code" \\
     --data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\
     --data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \\
     --data "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \\
     --data "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm" \\
   \`\`\`

   \u8FD4\u56DE\u7684\u8BF7\u6C42\u91CC\u5305\u542B\u4E86 id_token, access_token\uFF0Crefresh_token \u7528\u4E8E\u540E\u7EED\u5237\u65B0 token

   \`\`\`json
   {
       "access_token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ",
       "refresh_token": "GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG",
       "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imc1Z1ExSF9ZbTY0WUlvVkQwSVpXTCJ9.eyJlbWFpbCI6IjE2MDExNTYyNjhAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL2Rldi1vNDN4YjFtejd5YTdhY2g0LnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJZYWdGcVJEOXRmTklhYWM1QmFtamhzU2F0anJBbnNuWiIsImlhdCI6MTcxOTE5ODYzOCwiZXhwIjoxNzE5MjM0NjM4LCJzdWIiOiJhdXRoMHw2NjVkNzFlNzRjMTMxMTc3YmU2NmU2MDciLCJzaWQiOiJjdDJVOF9ZUS16VDdFOGkwRTNNeUstejc5ZGlWUWhhVSJ9.gfzXKJ0FeqzYqOUDLQHWcUG19IOLqkpLN09xTmIat0umrlGV5VNSumgWH3XJmmwnhdb8AThH3Jf-7kbRJzu4rM-BbGbFTRBTzNHeUajFOFrIgld5VENQ_M_sXHkTp0psWKSr9vF24kmilCfSbvC5lBKjt878ljZ7-xteWuaUYOMUdcJb4DSv0-zjX01sonJxYamTlhji3M4TAW7VwhwqyZt8dBhVSNaRw1wUKj-M1JrBDLyx65sroZtSqVA0udIrqMHEbWYb2de7JjzlqG003HRMzwOm7OXgEd5ZVFqgmBLosgixOU5DJ4A26nlqK92Sp6VqDMRvA-3ym8W_m-wJ_A",
       "scope": "openid email offline_access",
       "expires_in": 86400,
       "token_type": "Bearer"
   }
   \`\`\`

8. \u5C06\u83B7\u5F97\u7684 id_token, access_token, refresh_token \u52A0\u5BC6\u5B58\u50A8\u5728cookie _oauth2_proxy\u4E2D

9. \u91CD\u5B9A\u5411\u5230\u7528\u6237\u8BBF\u95EE\u7684\u540E\u7AEF\u670D\u52A1\u5E76\u8BBE\u7F6E cookie\uFF0C\u7528\u4E8E\u540E\u7EED\u7528\u6237\u767B\u5F55\u72B6\u6001\u7684\u9A8C\u8BC1\uFF0C\u540C\u65F6\u6E05\u9664 cookie _oauth2_proxy_csrf

   \`\`\`json
   "Set-Cookie": [
       "_oauth2_proxy_csrf=; Path=/; Expires=Mon, 24 Jun 2024 02:17:39 GMT; HttpOnly",
       "_oauth2_proxy=8zM_Pcfpp_gesKFe4SMg08o5Iv0A8WAOQOmG1-vZBbQ56UggYVC0Cu-gFMEoxJZU5q1O5vqRlVBizlLetgVjRCksGVbttwl8tQ7h5YiyIubbbtvF1T4JzLh3QfzUUrwbB-VznOkh8qLbjAhddocecjBt4rMiDyceKXqMr4eO5TUEMx4vHtJYnTYalMeTYhGXk5MNSyrdZX9NnQnkdrCjiOQM13ggwob2nYwhGWaAlgzFSWkgkdtBy2Cl_YMWZ8_gKk9rDX289-JrJyGpr5k9O9RzRhZoY2iE3Mcr8-Q37RTji1Ga22QO-XkAcSaGqY1Qo7jLdmgZTYKC5JvtdLc4rj3vcbveYxU7R3Pt2vEribQjKTh4Sqb0aA03p4cxXyZN4SUfBW1NAOm4JLPUhKJy8frqC9_E0nVqPvpvnacaoQs8WkX2zp75xHoMa3SD6KZhQ5JUiPEiNkOaUsyafLvht6lLkNDhgzW3BP2czoe0DCDBLnsot0jH-qQpMZYkaGr-ZnRKI1OPl1vHls3mao5juOAW1VB2A9aughgc8SJ55IFZpMfFMdHdTDdMqPODkItX2PK44GX-pHeLxkOqrzp3GHtMInpL5QIQlTuux3erm3CG-ntlUE7JBtN2T9LEb8XfIFu58X9_vzMun4JQlje2Thi9_taI_z1DSaTtvNNb54wJfSPwYCCl4OsH-BacVmPQhH6TTZ6gP2Qsm5TR2o1U2D9fuVkSM-OPCG9l3tILambIQwC3vofMW6X8SIFSmhJUDvN7NbwxowBiZ6Y7GJRZlAk_GKDkpsdrdIvC67QqczZFphRVnm6qi-gPO41APCbcO6fgTwyOhbP3RrZZKWSIqWJYhNE3_Sfkf0565H7sC7Hc8XUUjJvP3WnjKS9x7KwzWa-dsUjV3-Q-VNl-rXTguVNAIirYK-qrMNMZGCRcJqcLnUF0V_J2lVmFyVsSlE3t0sDw2xmbkOwDptXFOjQL5Rb4esUMYdCBWFajBfvUtcZEFtYhD0kb6VcbjXO3NCVW5qKh_l9C9SRCc7TG1vcRAqUQlRXHacTGWfcWsuQkCJ3Mp_oWaDxs1GRDykQYxAn5sTICovThWEU2C6o75grWaNrkj5NU-0eHh3ryvxLmGLBOXZV9OQhtKShWmUgywSWMxOHOuZAqdAPULc8KheuGFjXYp-RnCbFYWePJmwzfQw89kSkj1KUZgMYwKEjSz62z2qc9KLczomv76ortQzvo4Hv9kaW6xVuQj5R5Oq6_WMBOqsmUMzcXpxCIOGjcdcZRBc0Fm09Uy9oV1PRqvAE4PGtfyrCaoqILBix8UIww63B07YGwzQ-hAXDysBK-Vca2x7GmGdXsNXXcTgu00bdsjtHZPDBBWGfL3g_rMAXr2vWyvK4CwNjcaPAmrlF3geHPwbIePT0hskBboX1v1bsuhzsai7rGM4r53pnb1ZEoTQDa1B-HyokFgo14XiwME0zE1ifpNzefjpkz1YY2krJlqfCydNwoKaTit4tD2yHlnxAeFF9iIrxzSKErNUFpmyLa7ge7V33vhEH-6k5oBTLE2Q2BrC6aAkLCcPwU9xv_SzBDQPRY0MEYv3kGF03Swo1crRbGh-aifYX9NiHDsmG6r1vAnx0MAOw2Jzuz2x6SSdfBrzlcoWBlrwiZzd9kAKq75n1Uy9uzZ8SRnkBrEZySHBwEbu196VklkRE0jqwC-e3wWNNuviSOfwkVeX-7QdOoO10yw9VK2sW52lFvIEf4chv_ta7bGfAZOWBjpktG6ZLD81SE6A88zpqG2SysSyNMp9hl-umG-5sFsjCn_c9E8bDvwkUOUVb9bNqhBDsZgR0BNPawiOZjmyfhzmwmWf-zgFzfFSV6BvOwNRi3sCOHTsWcuk9NBQ_YK8CpNkVl3WeIBSDfidimuC_QV9UWKs1GPk35ZRkM4zKtLY2JsBFWKaDy_P80TcOzcMBoP8gIBClXZ-WUqfE8s1yyc4jrq-qL1_wJ24ef1O9FktsbyZiDKXw2vnqsT8-g_hCeG-unrT1ZFscf8oNdqczARHX-K4vKH2k3uIqEx1M=|1719199056|2rsgdUIClHNEpxBLlHOVRYup6e4oKensQfljtmn4B80=; Path=/; Expires=Mon, 01 Jul 2024 03:17:36 GMT; HttpOnly"
   ]
   \`\`\`

10. \u6821\u9A8C\u662F\u5426\u5B58\u5728 cookie \u5B58\u50A8\u4E86\u7528\u6237\u7684 token \u4FE1\u606F\u540C\u65F6\u67E5\u770B\u662F\u5426\u8FC7\u671F

11. \u4F7F\u7528\u542B\u6709 Authorization \u5934\u90E8\u5B58\u50A8\u7528\u6237\u7684 access_token \u8BBF\u95EE\u76F8\u5E94\u7684 API

    \`\`\`shell
    curl --url "foo.bar.com/headers"
      --header "Authorization: Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ"
    \`\`\`

12. \u540E\u7AEF\u670D\u52A1\u6839\u636E access_token \u83B7\u53D6\u7528\u6237\u6388\u6743\u4FE1\u606F\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684 HTTP \u54CD\u5E94

    \`\`\`json
    {
        "email": "******",
        "email_verified": false,
        "iss": "https://dev-o43xb1mz7ya7ach4.us.auth0.com/",
        "aud": "YagFqRD9tfNIaac5BamjhsSatjrAnsnZ",
        "iat": 1719198638,
        "exp": 1719234638,
        "sub": "auth0|665d71e74c131177be66e607",
        "sid": "ct2U8_YQ-zT7E8i0E3MyK-z79diVQhaU"
    }
    \`\`\`

#### \u7528\u6237\u4EE4\u724C\u5237\u65B0

1. \u6A21\u62DF\u7528\u6237\u8BBF\u95EE\u5BF9\u5E94\u670D\u52A1 API

\`\`\`shell
curl --url "foo.bar.com/headers"
\`\`\`

2. \u9A8C\u8BC1\u4EE4\u724C\u7684\u8FC7\u671F\u65F6\u95F4
3. \u5982\u679C\u5728 cookie \u4E2D\u68C0\u6D4B\u5230\u5B58\u5728 refresh_token\uFF0C\u5219\u53EF\u4EE5\u8BBF\u95EE\u76F8\u5E94\u7684\u63A5\u53E3\u4EE5\u4EA4\u6362\u65B0\u7684 id_token \u548C access_token

\`\`\`shell
curl -X POST \\
  --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \\
  --data "grant_type=refresh_token" \\
  --data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \\
  --data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \\
  --data "refresh_token=GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG"
\`\`\`

4. \u643A\u5E26 Authorization \u7684\u6807\u5934\u5BF9\u5E94 access_token \u8BBF\u95EE\u5BF9\u5E94 API
5. \u540E\u7AEF\u670D\u52A1\u6839\u636E access_token \u83B7\u53D6\u7528\u6237\u6388\u6743\u4FE1\u606F\u5E76\u8FD4\u56DE\u5BF9\u5E94\u7684 HTTP \u54CD\u5E94

`,r={title:"OIDC \u8BA4\u8BC1",description:"OIDC \u8BA4\u8BC1\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","oidc"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/oidc.md",rawData:void 0};export{a as _internal,i as body,t as collection,r as data,e as id,o as slug};
