const e="latest/zh-cn/plugins/transformation/de-graphql.md",a="docs",r="latest/zh-cn/plugins/transformation/de-graphql",i=`
## \u529F\u80FD\u8BF4\u660E

\`de-graphql\` \u63D2\u4EF6\u7528\u4E8E\u5C06 Restful API \u8F6C\u6362\u4E3A GraphQL \u8BF7\u6C42\u3002

## GraphQL \u7B80\u4ECB

### GraphQL \u7AEF\u70B9

REST API \u6709\u591A\u4E2A\u7AEF\u70B9\uFF0CGraphQL API \u53EA\u6709\u4E00\u4E2A\u7AEF\u70B9\u3002

\`\`\`shell
https://api.github.com/graphql
\`\`\`

### \u4E0E GraphQL \u901A\u4FE1

\u7531\u4E8E GraphQL \u64CD\u4F5C\u7531\u591A\u884C JSON \u7EC4\u6210\uFF0C\u53EF\u4EE5\u4F7F\u7528 curl \u6216\u4EFB\u4F55\u5176\u4ED6\u91C7\u7528 HTTP \u7684\u5E93\u3002

\u5728 REST \u4E2D\uFF0CHTTP \u8C13\u8BCD\u786E\u5B9A\u6267\u884C\u7684\u64CD\u4F5C\u3002 \u5728 GraphQL \u4E2D\uFF0C\u6267\u884C\u67E5\u8BE2\u8981\u63D0\u4F9B JSON \u8BF7\u6C42\u4F53\uFF0C\u56E0\u6B64 HTTP \u8C13\u8BCD\u4E3A POST\u3002 \u552F\u4E00\u7684\u4F8B\u5916\u662F\u5185\u7701\u67E5\u8BE2\uFF0C\u5B83\u662F\u4E00\u79CD\u7B80\u5355\u7684 GET \u5230\u7EC8\u7ED3\u70B9\u67E5\u8BE2\u3002

### GraphQL POST \u8BF7\u6C42\u53C2\u6570

\u6807\u51C6\u7684 GraphQL POST \u8BF7\u6C42\u60C5\u51B5\u5982\u4E0B\uFF1A

- \u6DFB\u52A0 HTTP \u8BF7\u6C42\u5934\uFF1A Content-Type: application/json
- \u4F7F\u7528 JSON \u683C\u5F0F\u7684\u8BF7\u6C42\u4F53
- JSON \u8BF7\u6C42\u4F53\u5305\u542B\u4E09\u4E2A\u5B57\u6BB5
    - query\uFF1A\u67E5\u8BE2\u6587\u6863\uFF0C\u5FC5\u586B
    - variables\uFF1A\u53D8\u91CF\uFF0C\u9009\u586B
    - operationName\uFF1A\u64CD\u4F5C\u540D\u79F0\uFF0C\u9009\u586B\uFF0C\u67E5\u8BE2\u6587\u6863\u6709\u591A\u4E2A\u64CD\u4F5C\u65F6\u5FC5\u586B

\`\`\`json
{
  "query": "{viewer{name}}",
  "operationName": "",
  "variables": {
    "name": "value"
  }
}
\`\`\`

### GraphQL \u57FA\u672C\u53C2\u6570\u7C7B\u578B

- \u57FA\u672C\u53C2\u6570\u7C7B\u578B\u5305\u542B\uFF1A String, Int, Float, Boolean
- [\u7C7B\u578B]\u4EE3\u8868\u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A[Int]\u4EE3\u8868\u6574\u578B\u6570\u7EC4
- GraphQL \u57FA\u672C\u53C2\u6570\u4F20\u9012
    - \u5C0F\u62EC\u53F7\u5185\u5B9A\u4E49\u5F62\u53C2\uFF0C\u6CE8\u610F\uFF1A\u53C2\u6570\u9700\u8981\u5B9A\u4E49\u7C7B\u578B
    - !\uFF08\u53F9\u53F7\uFF09\u4EE3\u8868\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A

\`\`\`shell
query ($owner : String!, $name : String!) {
  repository(owner: $owner, name: $name) {
    name
    forkCount
    description
  }
}
\`\`\`

### GitHub GraphQL \u6D4B\u8BD5

\u4F7F\u7528 curl \u547D\u4EE4\u67E5\u8BE2 GraphQL\uFF0C \u7528\u6709\u6548 JSON \u8BF7\u6C42\u4F53\u53D1\u51FA POST \u8BF7\u6C42\u3002 \u6709\u6548\u8BF7\u6C42\u4F53\u5FC5\u987B\u5305\u542B\u4E00\u4E2A\u540D\u4E3A query \u7684\u5B57\u7B26\u4E32\u3002

\`\`\`shell

curl https://api.github.com/graphql -X POST \\
-H "Authorization: bearer <PAT>" \\
-d "{\\"query\\": \\"query { viewer { login }}\\"}" 

{
	"data": {
		"viewer": {
			"login": "2456868764"
		}
	}
}
\`\`\`

\`\`\`shell
curl 'https://api.github.com/graphql' -X POST \\
-H 'Authorization: bearer <PAT>' \\
-d '{"query":"query ($owner: String!, $name: String!) {\\n  repository(owner: $owner, name: $name) {\\n    name\\n    forkCount\\n    description\\n  }\\n}\\n","variables":{"owner":"2456868764","name":"higress"}}'

{
	"data": {
		"repository": {
			"name": "higress",
			"forkCount": 149,
			"description": "Next-generation Cloud Native Gateway | \u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173"
		}
	}
}
\`\`\`


## DeGraphQL \u63D2\u4EF6

### \u53C2\u6570\u914D\u7F6E

| \u53C2\u6570              | \u63CF\u8FF0                      | \u9ED8\u8BA4         |
|:----------------|:------------------------|:-----------|
| \`gql\`           | graphql \u67E5\u8BE2              | \u4E0D\u80FD\u4E3A\u7A7A       |
| \`endpoint\`      | graphql \u67E5\u8BE2\u7AEF\u70B9            | \`/graphql\` |
| \`timeout\`       | \u67E5\u8BE2\u8FDE\u63A5\u8D85\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2             | \`5000\`     |
| \`domain\`        | \u670D\u52A1\u57DF\u540D\uFF0C\u5F53\u670D\u52A1\u6765\u6E90\u662Fdns\u914D\u7F6E        |      |

### \u63D2\u4EF6\u4F7F\u7528

\u6D4B\u8BD5\u914D\u7F6E\u3002

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: api.github.com
    name: github
    port: 443
    type: dns
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: github.dns
    higress.io/upstream-vhost: "api.github.com"
    higress.io/backend-protocol: HTTPS
  name: github-api
  namespace: higress-system
spec:
  ingressClassName: higress  
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /api
        pathType: Prefix
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: de-graphql-github-api
  namespace: higress-system
spec:
  matchRules:
  - ingress:
    - github-api
    config:
      timeout: 5000
      endpoint: /graphql
      domain: api.github.com
      gql: |
           query ($owner:String! $name:String!){
              repository(owner:$owner, name:$name) {
                name
                forkCount
                description
             }
           }
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/de-graphql:1.0.0
\`\`\`

\u6D4B\u8BD5\u7ED3\u679C\u3002

\`\`\`shell
curl "http://localhost/api?owner=alibaba&name=higress" -H "Authorization: Bearer some-token"

{
	"data": {
		"repository": {
			"description": "Next-generation Cloud Native Gateway",
			"forkCount": 149,
			"name": "higress"
		}
	}
}
\`\`\`

## \u53C2\u8003\u6587\u6863

- https://github.com/graphql/graphql-spec
- https://docs.github.com/zh/graphql/guides/forming-calls-with-graphql
- https://github.com/altair-graphql/altair
`,t={title:"DeGraphQL",description:"Degraphql \u63D2\u4EF6\u7528\u4E8E\u5C06 Restful API \u8F6C\u6362\u4E3A GraphQL \u8BF7\u6C42\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","transformer"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/transformation/de-graphql.md",rawData:void 0};export{n as _internal,i as body,a as collection,t as data,e as id,r as slug};
