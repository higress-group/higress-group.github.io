const r="latest/zh-cn/ops/how-tos/grpc-upstream.md",e="docs",t="latest/zh-cn/ops/how-tos/grpc-upstream",a=`\r
# \u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1\r
\r
## \u524D\u7F6E\u51C6\u5907\r
\r
1. Higress \u5B89\u88C5\u5728 K8s \u5185\u7684 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u76D1\u542C\u7684 HTTP \u7AEF\u53E3\u4E3A 80\u3002 \u4E3A\u4E86\u6D4B\u8BD5\u65B9\u4FBF\uFF0Cgateway \u7AEF\u53E3\u6620\u5C04\u90FD\u672C\u5730 127.0.0.1:80;\r
2. \u76EE\u6807\u662F\u4E3A default \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 \u90E8\u7F72 grpc-httpbin \u670D\u52A1\uFF0C\u670D\u52A1\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A 9091\uFF1B\r
3. grpc-httpbin \u670D\u52A1\u5177\u4F53\u5185\u5BB9\u8BF7\u53C2\u8003 [github httpbin](https://github.com/2456868764/httpbin);\r
4. grpcurl \u5DE5\u5177\u8BF7\u53C2\u8003 [github grpcurl](https://github.com/fullstorydev/grpcurl);\r
\r
## \u51C6\u5907\u540E\u7AEF grpc-httpbin \u670D\u52A1\r
\r
\`\`\`yaml\r
apiVersion: v1\r
kind: Service\r
metadata:\r
  name: grpc-httpbin-v1\r
  namespace: default\r
spec:\r
  selector:\r
    app: grpc-httpbin-v1\r
  ports:\r
    - protocol: TCP\r
      port: 9091\r
      targetPort: 9091\r
---\r
apiVersion: apps/v1\r
kind: Deployment\r
metadata:\r
  name: grpc-httpbin-v1\r
  namespace: default\r
  labels:\r
    app: grpc-httpbin-v1\r
spec:\r
  replicas: 1\r
  selector:\r
    matchLabels:\r
      app: grpc-httpbin-v1\r
  template:\r
    metadata:\r
      labels:\r
        app: grpc-httpbin-v1\r
    spec:\r
      containers:\r
      - name: grpc-httpbin-v1\r
        image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1\r
        env:\r
        - name: POD_NAME\r
          valueFrom:\r
            fieldRef:\r
              fieldPath: metadata.name\r
        - name: NAMESPACE\r
          valueFrom:\r
            fieldRef:\r
              fieldPath: metadata.namespace\r
        resources:\r
          requests:\r
            cpu: 10m\r
\`\`\`\r
\r
## \u914D\u7F6E\u8DEF\u7531\r
\r
\`\`\`yaml\r
apiVersion: networking.k8s.io/v1\r
kind: Ingress\r
metadata:\r
  annotations:\r
    nginx.ingress.kubernetes.io/backend-protocol: "GRPC"\r
  name: ingress-grpc-httpbin\r
  namespace: default\r
spec:\r
  ingressClassName: higress\r
  rules:\r
    - host: foo.com\r
      http:\r
        paths:\r
          - path: /\r
            pathType: Prefix\r
            backend:\r
              service:\r
                name: grpc-httpbin-v1\r
                port:\r
                  number: 9091\r
\`\`\`\r
\r
\`nginx.ingress.kubernetes.io/backend-protocol\` Ingress Annotaion \u914D\u7F6E\u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4E3AHTTP\uFF0C\u652F\u6301HTTP\u3001HTTP2\u3001HTTPS\u3001GRPC\u548CGRPCS\u3002\r
\r
## grpcurl \u8C03\u7528\u6D4B\u8BD5\r
\r
1. \u5217\u51FA\u540E\u7AEF\u670D\u52A1\u5217\u8868\r
\r
\`\`\`shell\r
grpcurl -plaintext -authority foo.com  127.0.0.1:80  list\r
\r
grpc.reflection.v1.ServerReflection\r
grpc.reflection.v1alpha.ServerReflection\r
order.OrderManagement\r
\`\`\`\r
2. \u8C03\u7528 sayHello \u65B9\u6CD5\r
\r
\`\`\`shell\r
grpcurl -plaintext -authority foo.com -d '{"name": "jun"}' 127.0.0.1:80  order.OrderManagement/sayHello\r
\r
"Hello jun"\r
\`\`\`\r
\r
\r
\r
\r
\r
`,s={title:"\u914D\u7F6E\u8DEF\u7531\u6307\u5411 gRPC \u670D\u52A1",description:"\u4ECB\u7ECD\u5982\u4F55\u4E3A\u4F7F\u7528 gRPC \u534F\u8BAE\u7684\u540E\u7AEF\u670D\u52A1\u914D\u7F6E\u8DEF\u7531",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","route","upstream","grpc"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/grpc-upstream.md",rawData:void 0};export{n as _internal,a as body,e as collection,s as data,r as id,t as slug};
