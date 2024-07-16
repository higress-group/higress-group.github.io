const s="latest/zh-cn/user/nacos-route.md",e="docs",a="latest/zh-cn/user/nacos-route",o=`
# \u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1


## \u914D\u7F6E\u670D\u52A1\u6765\u6E90

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cproduction\u201D \u7684\u670D\u52A1\u6765\u6E90
  - name: production
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 2.x\uFF0C\u652F\u6301 gRPC \u534F\u8BAE
    type: nacos2
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 192.xxx.xx.32
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u547D\u540D\u7A7A\u95F4 ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - DEFAULT_GROUP
    # \u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A \u201Cuat\u201D \u7684\u670D\u52A1\u6765\u6E90
  - name: uat
    # \u6CE8\u518C\u4E2D\u5FC3\u7C7B\u578B\u662F Nacos 1.x\uFF0C\u53EA\u652F\u6301 HTTP \u534F\u8BAE
    type: nacos
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u4EE5\u662F\u57DF\u540D\u6216\u8005IP
    domain: 192.xxx.xx.31
    # \u6CE8\u518C\u4E2D\u5FC3\u7684\u8BBF\u95EE\u7AEF\u53E3\uFF0CNacos \u9ED8\u8BA4\u90FD\u662F 8848
    port: 8848
    # Nacos \u547D\u540D\u7A7A\u95F4 ID
    nacosNamespaceId: 98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4
    # Nacos \u670D\u52A1\u5206\u7EC4
    nacosGroups:
    - DEFAULT_GROUP
\`\`\`

\u901A\u8FC7[McpBridge](./mcp-bridge.md)\u8D44\u6E90\u914D\u7F6E\u4E86\u4E24\u4E2A\u670D\u52A1\u6765\u6E90\uFF0C\u5206\u522B\u53D6\u540D \u201Cproduction\u201D\u548C\u201Cuat\u201D\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F Higress \u5BF9\u63A5 Nacos \u540C\u65F6\u652F\u6301 HTTP \u548C gRPC \u4E24\u79CD\u534F\u8BAE\uFF0C\u5EFA\u8BAE\u5C06 Nacos \u5347\u7EA7\u5230 2.x \u7248\u672C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u4E0A\u8FF0\u914D\u7F6E\u7684 type \u4E2D\u6307\u5B9A \u201Cnacos2\u201D \u4F7F\u7528 gRPC \u534F\u8BAE\uFF0C\u4ECE\u800C\u66F4\u5FEB\u901F\u5730\u611F\u77E5\u5230\u670D\u52A1\u53D8\u5316\uFF0C\u5E76\u6D88\u8017\u66F4\u5C11\u7684 Nacos \u670D\u52A1\u7AEF\u8D44\u6E90\u3002
\u57FA\u4E8E McpBridge \u4E2D\u7684 registries \u6570\u7EC4\u914D\u7F6E\uFF0CHigress \u53EF\u4EE5\u8F7B\u677E\u5BF9\u63A5\u591A\u4E2A\u4E14\u4E0D\u540C\u7C7B\u578B\u7684\u670D\u52A1\u6765\u6E90\uFF08Nacos/Zookeeper/Eureka/Consul/...\uFF09\uFF0C\u8FD9\u91CC\u5BF9\u4E8E Nacos \u7C7B\u578B\u7684\u670D\u52A1\u6765\u6E90\uFF0C\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E0D\u540C\u547D\u540D\u7A7A\u95F4\u7684\u5FAE\u670D\u52A1\u53EF\u4EE5\u5171\u7528\u4E00\u4E2A\u7F51\u5173\uFF0C\u964D\u4F4E\u81EA\u5EFA\u5FAE\u670D\u52A1\u7F51\u5173\u7684\u8D44\u6E90\u6210\u672C\u5F00\u9500\u3002


## \u914D\u7F6E Ingress

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: service-provider.DEFAULT-GROUP.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
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
        path: /
        pathType: Prefix
\`\`\`

\u548C\u5E38\u89C1\u7684 Ingress \u5728 backend \u4E2D\u5B9A\u4E49 service \u4E0D\u540C\uFF0C\u8FD9\u91CC\u57FA\u4E8E Ingress \u7684 resource backend \u5C06\u4E0A\u9762\u5B9A\u4E49\u670D\u52A1\u6765\u6E90\u7684 McpBridge \u8FDB\u884C\u5173\u8054\u3002\u5E76\u901A\u8FC7\u6CE8\u89E3\`higress.io/destination\`\u6307\u5B9A\u8DEF\u7531\u6700\u7EC8\u8981\u8F6C\u53D1\u5230\u7684\u76EE\u6807\u670D\u52A1\u3002

\u5BF9\u4E8E Nacos \u6765\u6E90\u7684\u670D\u52A1\uFF0C\u8FD9\u91CC\u7684\u76EE\u6807\u670D\u52A1\u683C\u5F0F\u4E3A\uFF1A\u201C\u670D\u52A1\u540D\u79F0.\u670D\u52A1\u5206\u7EC4.\u547D\u540D\u7A7A\u95F4ID.nacos\u201D\uFF0C\u6CE8\u610F\u8FD9\u91CC\u9700\u8981\u9075\u5FAA DNS \u57DF\u540D\u683C\u5F0F\uFF0C\u56E0\u6B64\u670D\u52A1\u5206\u7EC4\u4E2D\u7684\u4E0B\u5212\u7EBF'_'\u88AB\u8F6C\u6362\u6210\u4E86\u6A2A\u6760'-'\u3002
`,r={title:"\u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1",description:"\u914D\u7F6E Ingress \u8F6C\u53D1\u7ED9\u6CE8\u518C\u5728 Nacos \u7684\u670D\u52A1",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ingress","higress nacos"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/nacos-route.md",rawData:void 0};export{n as _internal,o as body,e as collection,r as data,s as id,a as slug};
