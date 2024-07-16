const e="latest/zh-cn/user/spring-cloud.md",s="docs",r="latest/zh-cn/user/spring-cloud",i=`
# \u5B9E\u73B0 SpringCloud \u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531

## \u4F7F\u7528 Nacos \u505A\u6CE8\u518C\u4E2D\u5FC3

\u5E94\u7528\u914D\u7F6E\u5177\u4F53\u53C2\u8003[Nacos Spring Cloud \u5FEB\u901F\u5F00\u59CB](https://nacos.io/zh-cn/docs/quick-start-spring-cloud.html)\u8FDB\u884C\u5E94\u7528\u914D\u7F6E

### \u4E0D\u6307\u5B9A\u547D\u540D\u7A7A\u95F4

\u5982\u679C \`application.properties\` \u4E2D\u6CA1\u6709\u6307\u5B9A Nacos \u547D\u540D\u7A7A\u95F4\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
\`\`\`

\u5219 Higress \u7684 [McpBridge](./mcp-bridge.md) \u4E2D\u4EA6\u65E0\u9700\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-nacos
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE
    type: nacos2
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - DEFAULT_GROUP
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.DEFAULT-GROUP.public.nacos
  name: demo
  namespace: default
spec:
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
\`\`\`

\u6CE8\u610F\u8FD9\u91CC\u901A\u8FC7\u6CE8\u89E3\`higress.io/destination\`\u6307\u5B9A\u8DEF\u7531\u6700\u7EC8\u8981\u8F6C\u53D1\u5230\u7684\u76EE\u6807\u670D\u52A1\u3002

\u5BF9\u4E8E Nacos \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A\u201C\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u5206\u7EC4.\u547D\u540D\u7A7A\u95F4ID.nacos\u201D\uFF0C\u6CE8\u610F\u8FD9\u91CC\u9700\u8981\u9075\u5FAA DNS \u57DF\u540D\u683C\u5F0F\uFF0C\u56E0\u6B64\u670D\u52A1\u5206\u7EC4\u4E2D\u7684\u4E0B\u5212\u7EBF'_'\u88AB\u8F6C\u6362\u6210\u4E86\u6A2A\u6760'-'\u3002\u547D\u540D\u7A7A\u95F4\u672A\u6307\u5B9A\u65F6\uFF0C\u8FD9\u91CC\u9ED8\u8BA4\u503C\u4E3A"public"\u3002

### \u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u3001\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F

\u5982\u679C \`application.properties\` \u4E2D\u6307\u5B9A\u4E86 Nacos \u547D\u540D\u7A7A\u95F4\uFF0C\u670D\u52A1\u5206\u7EC4\u7B49\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
server.port=8080
spring.application.name=my-service

spring.cloud.nacos.discovery.server-addr=127.0.0.1:8848
spring.cloud.nacos.discovery.namespace=d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
spring.cloud.nacos.discovery.group=custom-group
\`\`\`

\u5219 Higress \u7684 McpBridge \u505A\u76F8\u5E94\u914D\u7F6E\u5373\u53EF

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-nacos  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-nacos
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE
    type: nacos2
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u547D\u540D\u7A7A\u95F4 ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - custom-group
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.custom-group.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
  name: demo
  namespace: default
spec:
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
\`\`\`


## \u4F7F\u7528 ZooKeeper \u505A\u6CE8\u518C\u4E2D\u5FC3

\u4F7F\u7528 Zookeeper \u505A\u6CE8\u518C\u4E2D\u5FC3\u65F6\uFF0C\u6CE8\u610F\u5FC5\u987B\u914D\u7F6E\`spring.cloud.zookeeper.discovery.preferIpAddress=true\`\uFF0C\u5426\u5219\u6CE8\u518C\u5230\u6CE8\u518C\u4E2D\u5FC3\u4E2D\u5230\u5730\u5740\u4E3A\u4E3B\u673A\u540D\u79F0\uFF0C\u800C\u4E0D\u662FIP\u3002

### \u4E0D\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84

\u5982\u679C \`application.properties\` \u4E2D\u672A\u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
\`\`\`

\u5219 Higress \u7684 [McpBridge](./mcp-bridge.md) \u4E2D\u4EA6\u65E0\u9700\u6307\u5B9AzkServicePath\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-zk
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper
    type: zookeeper
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3
    port: 2181
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.services.zookeeper
  name: demo
  namespace: default
spec:
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
\`\`\`
\u6CE8\u610F\u5BF9\u4E8E ZooKeeper \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A"\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u6CE8\u518C\u6839\u8DEF\u5F84.zookeeper"\uFF0CSpringCloud \u5728\u672A\u6307\u5B9A\u670D\u52A1\u6CE8\u518C\u6839\u8DEF\u5F84\u7684\u60C5\u51B5\u4E0B\uFF0C\u6839\u8DEF\u5F84\u9ED8\u8BA4\u662F"services"

### \u6307\u5B9A\u6CE8\u518C\u6839\u8DEF\u5F84

\u5982\u679C \`application.properties\` \u4E2D\u6307\u5B9A\u4E86\u6CE8\u518C\u6839\u8DEF\u5F84\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1A

\`\`\`text
spring.application.name=my-service
spring.cloud.zookeeper.connect-string=127.0.0.1:2181
spring.cloud.zookeeper.discovery.preferIpAddress=true
spring.cloud.zookeeper.discovery.enabled=true
spring.cloud.zookeeper.discovery.register=true
spring.cloud.zookeeper.discovery.root=my-services-root
\`\`\`

\u5219 Higress \u7684 [McpBridge](./mcp-bridge.md) \u4E2D\u4EA6\u9700\u6307\u5B9AzkServicePath\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A my-zk  \u7684\u670D\u52A1\u6765\u6E90
  - name: my-zk
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F ZooKeeper
    type: zookeeper
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 127.0.0.1
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3
    port: 2181
    # \u5BF9\u5E94 spring.cloud.zookeeper.discovery.root \u914D\u7F6E\u5B57\u6BB5
    zkServicePath:
    - my-services-root
\`\`\`

\u914D\u7F6E Ingress \u8F6C\u53D1\u5230\u8FD9\u4E2A\u670D\u52A1(\u5047\u8BBE/api\u524D\u7F00\u7684\u8DEF\u7531\u90FD\u8F6C\u53D1\u7ED9\u8FD9\u4E2A\u670D\u52A1)\u9700\u8981\u505A\u5982\u4E0B\u914D\u7F6E\uFF1A

\`\`\`
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: my-service.my-services-root.zookeeper
  name: demo
  namespace: default
spec:
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
\`\`\`

\u6CE8\u610F\u5982\u679C spring.cloud.zookeeper.discovery.root \u4E2D\u5305\u542B\u4E86\u4E0B\u5212\u7EBF\uFF0C\u9700\u8981\u88AB\u66FF\u6362\u4E3A\u6A2A\u6760\uFF0C\u56E0\u4E3A\u76EE\u6807\u670D\u52A1\u6574\u4F53\u683C\u5F0F\u9700\u8981\u6EE1\u8DB3 DNS \u57DF\u540D\u89C4\u8303

`,o={title:"\u5B9E\u73B0 SpringCloud \u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531",description:"\u5B9E\u73B0 SpringCloud \u670D\u52A1\u53D1\u73B0\u548C\u8DEF\u7531.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["SpringCloud","discovery"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/spring-cloud.md",rawData:void 0};export{a as _internal,i as body,s as collection,o as data,e as id,r as slug};
