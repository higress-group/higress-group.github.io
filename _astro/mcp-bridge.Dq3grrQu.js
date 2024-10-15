const e="latest/zh-cn/user/mcp-bridge.md",s="docs",a="latest/zh-cn/user/mcp-bridge",t=`
# Mcp Bridge \u914D\u7F6E\u8BF4\u660E

## McpBridge \u5B57\u6BB5\u8BF4\u660E
| \u5B57\u6BB5         | \u7C7B\u578B | \u8BF4\u660E                | \u793A\u4F8B\u503C     | \u662F\u5426\u5FC5\u586B              |
|------------| --- |-------------------|---------|-------------------|
| registries | RegistryConfig \u6570\u7EC4 | \u652F\u6301\u914D\u7F6E\u591A\u4E2A\u4E0D\u540C\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\u6765\u6E90 | []      | \u5426                 |
| name       | \u5B57\u7B26\u4E32 | McpBridge \u540D\u79F0      | default | \u662F\uFF0C\u5F53\u524D\u8BE5\u503C\u53EA\u80FD\u662F default |

## RegistryConfig \u5B57\u6BB5\u8BF4\u660E
| \u5B57\u6BB5                    | \u7C7B\u578B | \u8BF4\u660E                                           | \u793A\u4F8B\u503C                                  | \u662F\u5426\u5FC5\u586B |
|-----------------------| --- |----------------------------------------------|--------------------------------------| --- |
| type                  | \u5B57\u7B26\u4E32 | \u670D\u52A1\u53D1\u73B0\u7C7B\u578B\uFF0C\u53EF\u9009\u9879\uFF1Anacos,nacos2,zookeeper,consul,eureka,static,dns | nacos2                               | \u662F |
| name                  | \u5B57\u7B26\u4E32 | \u81EA\u5B9A\u4E49\u7684\u670D\u52A1\u6765\u6E90\u540D\u79F0                                   | my-nacos                             | \u662F |
| domain                | \u5B57\u7B26\u4E32 | \u670D\u52A1\u53D1\u73B0\u5730\u5740\uFF0C\u4E00\u822C\u662F\u6CE8\u518C\u4E2D\u5FC3\u5730\u5740; \u5F53\u7C7B\u578B\u662Fstatic\u6216dns\u65F6\uFF0C\u8FD9\u4E2A\u5B57\u6BB5\u7528\u4E8E\u76F4\u63A5\u914D\u7F6E\u540E\u7AEF\u5730\u5740                             | 192.168.1.2                          | \u662F |
| port                  | \u6574\u6570 | \u6CE8\u518C\u4E2D\u5FC3\u8BBF\u95EE\u7AEF\u53E3                                     | 8848                                 | \u662F |
| protocol                  | \u5B57\u7B26\u4E32 | \u670D\u52A1\u7684\u534F\u8BAE\uFF0C\u4EC5\u5BF9 static/dns \u7C7B\u578B\u751F\u6548\uFF0C\u652F\u6301\u914D\u7F6E HTTP/HTTPS/GRPC/GRPCS\uFF0C\u9ED8\u8BA4\u503C\u662F HTTP                                     | HTTPS                                 | \u5426 |
| sni                  | \u5B57\u7B26\u4E32 | \u5F53 protocol \u662F HTTPS \u6216 GRPCS \u65F6\uFF0C\u7528\u4E8E\u8BBE\u7F6E TLS \u63E1\u624B\u65F6\u4F7F\u7528\u7684 SNI                                     | www.example.com                                 | \u5426 |
| zkServicesPath        | \u5B57\u7B26\u4E32\u6570\u7EC4 | \u4F7F\u7528zk\u65F6,\u586B\u5199\u670D\u52A1\u6CE8\u518C\u7684\u6839\u8DEF\u5F84,\u9ED8\u8BA4\u76D1\u542C /dubbo \u548C /services\uFF0C\u524D\u8005\u4E3Adubbo \u670D\u52A1\u9ED8\u8BA4\u6839\u8DEF\u5F84\uFF0C\u540E\u8005\u4E3ASpringCloud\u670D\u52A1\u9ED8\u8BA4\u6839\u8DEF\u5F84 | ["/service-provider"]                | \u5426 |
| nacosNamespaceId      | \u5B57\u7B26\u4E32 | nacos\u547D\u540D\u7A7A\u95F4id                                  | d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358 | \u5426 |
| nacosGroups           | \u5B57\u7B26\u4E32\u6570\u7EC4 | nacos\u670D\u52A1\u5206\u7EC4\u5217\u8868                                  | ["DEFAULT_GROUP"]                    | \u5426 |
| nacosAccessKey        | \u5B57\u7B26\u4E32 | nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684ak\u4FE1\u606F                            | xxxx                                 | \u5426 |
| nacosSecretKey        | \u5B57\u7B26\u4E32 | nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684sk\u4FE1\u606F                            | xxxx | \u5426 |
| nacosRefreshInterval  | \u6574\u6570 | nacos\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u5237\u65B0\u95F4\u9694\u7EB3\u79D2\u6570                       | 30000000000\uFF0830\u79D2\uFF09                     | \u5426 |
| consulDatacenter      | \u5B57\u7B26\u4E32 | consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u6570\u636E\u4E2D\u5FC3\u540D\u79F0                         | dc1                                  | \u5426 |
| consulServiceTag      | \u5B57\u7B26\u4E32 | consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u6807\u7B7E\u8FC7\u6EE4                         | higress                              | \u5426 |
| consulRefreshInterval | \u6574\u6570 | consul\u9700\u8981\u8BA4\u8BC1\u65F6\u586B\u5199\u7684\u670D\u52A1\u5237\u65B0\u95F4\u9694\u7EB3\u79D2\u6570                      | 30000000000\uFF0830\u79D2\uFF09                     | \u5426 |
| authSecretName        | \u5B57\u7B26\u4E32 | \u670D\u52A1\u53D1\u73B0\u8BA4\u8BC1\u4FE1\u606F Secret \u540D\u79F0, \u5177\u4F53\u770B\u4E0B\u9762\u8BF4\u660E                  | higress-nacos-auth                      | \u5426 |

## authSecretName \u5B57\u6BB5\u8BF4\u660E

\u670D\u52A1\u53D1\u73B0\u6765\u6E90\u8BA4\u8BC1\u4FE1\u606F\u4FDD\u5B58\u5728 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\u5BF9\u5E94 Secret \u4E0B \uFF0C\u73B0\u5728\u652F\u6301 nacos \u548C consul \u670D\u52A1\u53D1\u73B0\u3002

nacos \u8BA4\u8BC1\u4FE1\u606F\u5305\u542B\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C consul \u8BA4\u8BC1\u4FE1\u606F\u5305\u542B\u8BA4\u8BC1 token\uFF0C \u5177\u4F53 Secret \u914D\u7F6E\u6837\u4F8B\u5982\u4E0B\uFF1A

### nacos \u8BA4\u8BC1

\`\`\`yaml
apiVersion: v1
data:
  nacosPassword: aGlncmVzcw==
  nacosUsername: aGlncmVzcw==
kind: Secret
metadata:
  name: higress-nacos-auth
  namespace: higress-system
type: Opaque
\`\`\`

### consul \u8BA4\u8BC1 

\`\`\`yaml
apiVersion: v1
data:
  consulToken: NGFkZDE2NjUtNTM5NC03YzU1LTIzYTUtNzA4MDZkNTFiYzQy
kind: Secret
metadata:
  name: higress-consul-auth
  namespace: higress-system
type: Opaque
\`\`\`


## \u652F\u6301\u914D\u7F6E\u9759\u6001\u7684\u670D\u52A1\u53D1\u73B0\u65B9\u5F0F

### \u901A\u8FC7\u56FA\u5B9AIP\u53D1\u73B0\u670D\u52A1

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: "1.1.1.1:80,2.2.2.2:80"
    name: test
    port: 80
    type: static
\`\`\`

### \u901A\u8FC7DNS\u57DF\u540D\u53D1\u73B0\u670D\u52A1

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: www.alibaba.com
    name: alibaba
    port: 443
    protocol: HTTPS
    type: dns
\`\`\`
`,c={title:"Mcp Bridge \u914D\u7F6E\u8BF4\u660E",description:"Higress Mcp Bridge \u914D\u7F6E\u8BF4\u660E\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["discovery"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/mcp-bridge.md",rawData:void 0};export{n as _internal,t as body,s as collection,c as data,e as id,a as slug};
