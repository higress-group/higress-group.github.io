const e="latest/zh-cn/plugins/authentication/opa.md",t="docs",s="latest/zh-cn/plugins/authentication/opa",a=`
## \u529F\u80FD\u8BF4\u660E

\u8BE5\u63D2\u4EF6\u5B9E\u73B0\u4E86 \`OPA\` \u7B56\u7565\u63A7\u5236

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`225\`

## \u914D\u7F6E\u5B57\u6BB5

| \u5B57\u6BB5            | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                   |
|---------------|--------|------|-----|--------------------------------------|
| policy        | string | \u5FC5\u586B   | -   | opa \u7B56\u7565                               |
| timeout       | string | \u5FC5\u586B   | -   | \u8BBF\u95EE\u8D85\u65F6\u65F6\u95F4\u8BBE\u7F6E                             |
| serviceSource | string | \u5FC5\u586B   | -   | k8s,nacos,ip,route                   |
| host          | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u4E3B\u673A\uFF08serviceSource\u4E3A\`ip\`\u5FC5\u586B\uFF09           |
| serviceName   | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u540D\u79F0\uFF08serviceSource\u4E3A\`k8s,nacos,ip\`\u5FC5\u586B\uFF09 |
| servicePort   | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u7AEF\u53E3\uFF08serviceSource\u4E3A\`k8s,nacos,ip\`\u5FC5\u586B\uFF09 |
| namespace     | string | \u975E\u5FC5\u586B  | -   | \u670D\u52A1\u7AEF\u53E3\uFF08serviceSource\u4E3A\`k8s,nacos\`\u5FC5\u586B\uFF09    |

## \u914D\u7F6E\u793A\u4F8B

\`\`\`yaml
serviceSource: k8s
serviceName: opa
servicePort: 8181
namespace: higress-backend
policy: example1
timeout: 5s
\`\`\`

## OPA \u670D\u52A1\u5B89\u88C5\u53C2\u8003

### \u542F\u52A8 OPA \u670D\u52A1

\`\`\`shell
docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s
\`\`\`

### \u521B\u5EFA OPA \u7B56\u7565

\`\`\`shell
curl -X PUT '127.0.0.1:8181/v1/policies/example1' \\
  -H 'Content-Type: text/plain' \\
  -d 'package example1

import input.request

default allow = false

allow {
    # HTTP method must GET
    request.method == "GET"
}'
\`\`\`

### \u67E5\u8BE2\u7B56\u7565

\`\`\`shell
curl -X POST '127.0.0.1:8181/v1/data/example1/allow' \\
  -H 'Content-Type: application/json' \\
  -d '{"input":{"request":{"method":"GET"}}}'
\`\`\`
`,i={title:"OPA",description:"OPA \u7B56\u7565\u63A7\u5236\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","opa"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/opa.md",rawData:void 0};export{o as _internal,a as body,t as collection,i as data,e as id,s as slug};
