const e="latest/zh-cn/plugins/security/cors.md",t="docs",o="latest/zh-cn/plugins/security/cors",s=`
## \u529F\u80FD\u8BF4\u660E

\`cors\` \u63D2\u4EF6\u53EF\u4EE5\u4E3A\u670D\u52A1\u7AEF\u542F\u7528 CORS\uFF08Cross-Origin Resource Sharing\uFF0C\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u7684\u8FD4\u56DE http \u54CD\u5E94\u5934\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u6388\u6743\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`340\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0                  | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C                                                                                                                     | \u63CF\u8FF0                                                                                                                                                                                                                                         |
|-----------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allow_origins         | array of string | \u9009\u586B     | *                                                                                                                          | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Origin\uFF0C\u683C\u5F0F\u4E3A scheme://host:port\uFF0C\u793A\u4F8B\u5982 http://example.com:8081\u3002\u5F53 allow_credentials \u4E3A false \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u6240\u6709 Origin \u901A\u8FC7                                                                                    |
| allow_origin_patterns | array of string | \u9009\u586B     | -                                                                                                                          | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Origin \u6A21\u5F0F\u5339\u914D\uFF0C \u7528 * \u5339\u914D\u57DF\u540D\u6216\u8005\u7AEF\u53E3\uFF0C <br/>\u6BD4\u5982 http://*.example.com -- \u5339\u914D\u57DF\u540D\uFF0C http://*.example.com:[8080,9090] -- \u5339\u914D\u57DF\u540D\u548C\u6307\u5B9A\u7AEF\u53E3\uFF0C http://*.example.com:[*] -- \u5339\u914D\u57DF\u540D\u548C\u6240\u6709\u7AEF\u53E3\u3002\u5355\u72EC * \u8868\u793A\u5339\u914D\u6240\u6709\u57DF\u540D\u548C\u7AEF\u53E3 |
| allow_methods         | array of string | \u9009\u586B     | GET, PUT, POST, DELETE, PATCH, OPTIONS                                                                                     | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684 Method\uFF0C\u6BD4\u5982\uFF1AGET\uFF0CPOST \u7B49\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u6240\u6709 Method\u3002                                                                                                                                                                |
| allow_headers         | array of string | \u9009\u586B     | DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With\uFF0C<br/>If-Modified-Since,Cache-Control,Content-Type,Authorization | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u65F6\u8BF7\u6C42\u65B9\u643A\u5E26\u54EA\u4E9B\u975E CORS \u89C4\u8303\u4EE5\u5916\u7684 Header\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u4EFB\u610F Header\u3002                                                                                                                                                    |
| expose_headers        | array of string | \u9009\u586B     | -                                                                                                                          | \u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u65F6\u54CD\u5E94\u65B9\u643A\u5E26\u54EA\u4E9B\u975E CORS \u89C4\u8303\u4EE5\u5916\u7684 Header\u3002\u53EF\u4EE5\u4F7F\u7528 * \u6765\u8868\u793A\u5141\u8BB8\u4EFB\u610F Header\u3002                                                                                                                                                    |
| allow_credentials     | bool            | \u9009\u586B     | false                                                                                                                      | \u662F\u5426\u5141\u8BB8\u8DE8\u57DF\u8BBF\u95EE\u7684\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E\uFF08\u5982 Cookie \u7B49\uFF09\u3002\u6839\u636E CORS \u89C4\u8303\uFF0C\u5982\u679C\u8BBE\u7F6E\u8BE5\u9009\u9879\u4E3A true\uFF0C\u5728 allow_origins \u4E0D\u80FD\u4F7F\u7528 *\uFF0C \u66FF\u6362\u6210\u4F7F\u7528 allow_origin_patterns *                                                                                    |
| max_age               | number          | \u9009\u586B     | 86400\u79D2                                                                                                                    | \u6D4F\u89C8\u5668\u7F13\u5B58 CORS \u7ED3\u679C\u7684\u6700\u5927\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u79D2\u3002<br/>\u5728\u8FD9\u4E2A\u65F6\u95F4\u8303\u56F4\u5185\uFF0C\u6D4F\u89C8\u5668\u4F1A\u590D\u7528\u4E0A\u4E00\u6B21\u7684\u68C0\u67E5\u7ED3\u679C                                                                                                                                                |

> \u6CE8\u610F
> * allow_credentials \u662F\u4E00\u4E2A\u5F88\u654F\u611F\u7684\u9009\u9879\uFF0C\u8BF7\u8C28\u614E\u5F00\u542F\u3002\u5F00\u542F\u4E4B\u540E\uFF0Callow_credentials \u548C allow_origins \u4E3A * \u4E0D\u80FD\u540C\u65F6\u4F7F\u7528\uFF0C\u540C\u65F6\u8BBE\u7F6E\u65F6\uFF0C allow_origins \u503C\u4E3A "*" \u751F\u6548\u3002
> * allow_origins \u548C allow_origin_patterns \u53EF\u4EE5\u540C\u65F6\u8BBE\u7F6E\uFF0C \u5148\u68C0\u67E5 allow_origins \u662F\u5426\u5339\u914D\uFF0C\u7136\u540E\u518D\u68C0\u67E5 allow_origin_patterns \u662F\u5426\u5339\u914D
> * \u975E\u6CD5 CORS \u8BF7\u6C42\uFF0C HTTP \u72B6\u6001\u7801\u8FD4\u56DE\u662F 403\uFF0C \u8FD4\u56DE\u4F53\u5185\u5BB9\u4E3A "Invalid CORS request"

## \u914D\u7F6E\u793A\u4F8B

### \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE, \u4E0D\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E
\`\`\`yaml
allow_origins:
  - '*'
allow_methods:
  - '*'  
allow_headers:
  - '*'
expose_headers:
  - '*'
allow_credentials: false
max_age: 7200
\`\`\`

### \u5141\u8BB8\u6240\u6709\u8DE8\u57DF\u8BBF\u95EE,\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E
\`\`\`yaml
allow_origin_patterns:
  - '*'
allow_methods:
  - '*'  
allow_headers:
  - '*'
expose_headers:
  - '*'
allow_credentials: true
max_age: 7200
\`\`\`

### \u5141\u8BB8\u7279\u5B9A\u5B50\u57DF,\u7279\u5B9A\u65B9\u6CD5\uFF0C\u7279\u5B9A\u8BF7\u6C42\u5934\u8DE8\u57DF\u8BBF\u95EE\uFF0C\u540C\u65F6\u5141\u8BB8\u8BF7\u6C42\u65B9\u643A\u5E26\u51ED\u636E
\`\`\`yaml
allow_origin_patterns:
  - http://*.example.com
  - http://*.example.org:[8080,9090]
allow_methods:
  - GET
  - PUT
  - POST
  - DELETE
allow_headers:
  - Token
  - Content-Type
  - Authorization
expose_headers:
  - '*'
allow_credentials: true
max_age: 7200
\`\`\`

## \u6D4B\u8BD5

### \u6D4B\u8BD5\u914D\u7F6E

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: mcp-cors-httpbin
  namespace: higress-system
spec:
  registries:
    - domain: httpbin.org
      name: httpbin
      port: 80
      type: dns
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: httpbin.dns
    higress.io/upstream-vhost: "httpbin.org"
    higress.io/backend-protocol: HTTP
  name: ingress-cors-httpbin
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
    - host: httpbin.example.com
      http:
        paths:
          - backend:
              resource:
                apiGroup: networking.higress.io
                kind: McpBridge
                name: mcp-cors-httpbin
            path: /
            pathType: Prefix
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: wasm-cors-httpbin
  namespace: higress-system
spec:
  defaultConfigDisable: true
  matchRules:
    - config:
        allow_origins:
          - http://httpbin.example.net
        allow_origin_patterns:
          - http://*.example.com:[*]
          - http://*.example.org:[9090,8080]
        allow_methods:
          - GET
          - POST
          - PATCH
        allow_headers:
          - Content-Type
          - Token
          - Authorization
        expose_headers:
          - X-Custom-Header
          - X-Env-UTM
        allow_credentials: true
        max_age: 3600
      configDisable: false
      ingress:
        - ingress-cors-httpbin
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/cors:1.0.0
  imagePullPolicy: Always
\`\`\`

### \u8BF7\u6C42\u6D4B\u8BD5

#### \u7B80\u5355\u8BF7\u6C42
\`\`\`shell
curl -v -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com"  http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 200 OK
> x-cors-version: 1.0.0
> access-control-allow-origin: http://httpbin2.example.org:9090
> access-control-expose-headers: X-Custom-Header,X-Env-UTM
> access-control-allow-credentials: true
\`\`\`

#### \u9884\u68C0\u8BF7\u6C42

\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: POST"  -H "Access-Control-Request-Headers: Content-Type, Token" http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 200 OK
< x-cors-version: 1.0.0
< access-control-allow-origin: http://httpbin2.example.org:9090
< access-control-allow-methods: GET,POST,PATCH
< access-control-allow-headers: Content-Type,Token,Authorization
< access-control-expose-headers: X-Custom-Header,X-Env-UTM
< access-control-allow-credentials: true
< access-control-max-age: 3600
< date: Tue, 23 May 2023 11:41:28 GMT
< server: istio-envoy
< content-length: 0
<
* Connection #0 to host 127.0.0.1 left intact
* Closing connection 0
\`\`\`

#### \u975E\u6CD5 CORS Origin \u9884\u68C0\u8BF7\u6C42

\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: GET"  http://127.0.0.1/anything/get\\?foo\\=1

 HTTP/1.1 403 Forbidden
< content-length: 70
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:27:01 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

#### \u975E\u6CD5 CORS Method \u9884\u68C0\u8BF7\u6C42

\`\`\`shell
curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: DELETE"  http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 403 Forbidden
< content-length: 49
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:28:51 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

#### \u975E\u6CD5 CORS Header \u9884\u68C0\u8BF7\u6C42

\`\`\`shell
 curl -v -X OPTIONS -H "Origin: http://httpbin2.example.org:9090" -H  "Host: httpbin.example.com" -H "Access-Control-Request-Method: GET" -H "Access-Control-Request-Headers: TokenView"  http://127.0.0.1/anything/get\\?foo\\=1

< HTTP/1.1 403 Forbidden
< content-length: 52
< content-type: text/plain
< x-cors-version: 1.0.0
< date: Tue, 23 May 2023 11:31:03 GMT
< server: istio-envoy
<
* Connection #0 to host 127.0.0.1 left intact
Invalid CORS request
\`\`\`

## \u53C2\u8003\u6587\u6863
- https://www.ruanyifeng.com/blog/2016/04/cors.html
- https://fetch.spec.whatwg.org/#http-cors-protocol
`,n={title:"\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB",description:"\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","cors"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/security/cors.md",rawData:void 0};export{a as _internal,s as body,t as collection,n as data,e as id,o as slug};
