const r="latest/zh-cn/ops/how-tos/https-upstream.md",e="docs",t="latest/zh-cn/ops/how-tos/https-upstream",s=`\r
# \u914D\u7F6E\u8DEF\u7531\u6307\u5411 HTTPS \u670D\u52A1\r
\r
\r
## \u524D\u7F6E\u51C6\u5907\r
\r
1. Higress \u5B89\u88C5\u5728 K8s \u5185\u7684 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u76D1\u542C\u7684 HTTP \u7AEF\u53E3\u4E3A 80\u3002 \u4E3A\u4E86\u6D4B\u8BD5\u65B9\u4FBF\uFF0Cgateway \u7AEF\u53E3\u6620\u5C04\u90FD\u672C\u5730 127.0.0.1:80;\r
2. \u76EE\u6807\u662F\u4E3A default \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 \u90E8\u7F72 https-httpbin \u670D\u52A1\uFF0C\u670D\u52A1\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A 443\uFF1B\r
3. https-httpbin \u670D\u52A1\u5177\u4F53\u5185\u5BB9\u8BF7\u53C2\u8003 [github httpbin](https://github.com/2456868764/httpbin);\r
\r
## \u51C6\u5907\u8BC1\u4E66\r
\r
1. \u751F\u6210 CA\uFF08\u6839\u8BC1\u4E66\uFF09\uFF1A\r
\`\`\`shell\r
# \u751F\u6210 CA \u79C1\u94A5\r
openssl genrsa -out ca.key 2048\r
# \u751F\u6210 CA \u6839\u8BC1\u4E66\r
openssl req -x509 -new -nodes -key ca.key -subj "/CN=MyCA" -days 3650 -out ca.crt\r
\`\`\`\r
\r
2. \u751F\u6210\u670D\u52A1\u7AEF\u8BC1\u4E66\r
\r
\`\`\`shell\r
# \u751F\u6210\u670D\u52A1\u7AEF\u79C1\u94A5\r
openssl genrsa -out server.key 2048\r
\r
# \u751F\u6210\u670D\u52A1\u7AEF\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF08CSR\uFF09\r
openssl req -new -key server.key -subj "/CN=https-httpbin-v1.default.svc.cluster.local" -out server.csr\r
\r
# \u4F7F\u7528 CA \u7B7E\u7F72\u670D\u52A1\u7AEF\u8BC1\u4E66\r
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 3650 -sha256\r
\`\`\`\r
\r
3. \u751F\u6210 Gateway \u8BC1\u4E66\r
\r
\`\`\`shell\r
# \u751F\u6210 Gateway \u79C1\u94A5\r
openssl genrsa -out gateway.key 2048\r
\r
# \u751F\u6210 Gateway \u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42\uFF08CSR\uFF09\r
openssl req -new -key gateway.key -subj "/CN=gateway.higress-system.svc.cluster.local" -out gateway.csr\r
\r
# \u4F7F\u7528 CA \u7B7E\u7F72 Gateway \u8BC1\u4E66\r
openssl x509 -req -in gateway.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out gateway.crt -days 3650 -sha256\r
\`\`\`\r
\r
4. \u5BFC\u5165 CA \u8BC1\u4E66\u3001Gateway\u3001\u670D\u52A1\u7AEF\u8BC1\u4E66\u5230 secret \u4E2D\r
\r
\`\`\`shell\r
kubectl create secret generic gateway-cert-cacert --from-file=cacert=ca.crt --namespace=default\r
kubectl create secret tls gateway-cert --key gateway.key --cert gateway.crt --namespace=default\r
kubectl create secret tls server-cert --key server.key --cert server.crt --namespace=default\r
\`\`\`\r
\r
## \u51C6\u5907\u540E\u7AEF https-httpbin \u670D\u52A1\r
\r
\`\`\`yaml\r
apiVersion: v1\r
kind: Service\r
metadata:\r
  name: https-httpbin-v1\r
  namespace: default\r
spec:\r
  selector:\r
    app: https-httpbin-v1\r
  ports:\r
    - protocol: TCP\r
      port: 443\r
      targetPort: 443\r
---\r
apiVersion: apps/v1\r
kind: Deployment\r
metadata:\r
  name: https-httpbin-v1\r
  namespace: default\r
  labels:\r
    app: https-httpbin-v1\r
spec:\r
  replicas: 1\r
  selector:\r
    matchLabels:\r
      app: https-httpbin-v1\r
  template:\r
    metadata:\r
      labels:\r
        app: https-httpbin-v1\r
    spec:\r
      containers:\r
        - name: https-httpbin-v1\r
          image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.2\r
          imagePullPolicy: Always\r
          ports:\r
            - containerPort: 443\r
          command:\r
            - /app/httpbin\r
            - --https-enable=true\r
            - --https-port=443\r
            - --mtls=true\r
            - --cert=/etc/cert/tls.crt\r
            - --key=/etc/cert/tls.key\r
            - --cacert=/etc/cacert/cacert\r
          env:\r
            - name: POD_NAME\r
              valueFrom:\r
                fieldRef:\r
                  fieldPath: metadata.name\r
            - name: NAMESPACE\r
              valueFrom:\r
                fieldRef:\r
                  fieldPath: metadata.namespace\r
          volumeMounts:\r
            - mountPath: "/etc/cert"\r
              name: server-cert\r
              readOnly: true\r
            - mountPath: "/etc/cacert"\r
              name: ca-cert\r
              readOnly: true\r
          resources:\r
            requests:\r
              cpu: 10m\r
      volumes:\r
        - name: server-cert\r
          secret:\r
            secretName: server-cert\r
        - name: ca-cert\r
          secret:\r
            secretName: gateway-cert-cacert\r
\`\`\`\r
\r
## \u914D\u7F6E\u8DEF\u7531\r
\r
\`\`\`yaml\r
apiVersion: networking.k8s.io/v1\r
kind: Ingress\r
metadata:\r
  annotations:\r
    # backend protocol\r
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"\r
    # gateway to backend mtls\r
    nginx.ingress.kubernetes.io/proxy-ssl-secret: "default/gateway-cert"\r
    # SNI for backend check\r
    nginx.ingress.kubernetes.io/proxy-ssl-name: "https-httpbin-v1.default.svc.cluster.local"\r
    nginx.ingress.kubernetes.io/proxy-ssl-server-name: "on"\r
  name: ingress-https-httpbin\r
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
                name: https-httpbin-v1\r
                port:\r
                  number: 443\r
\`\`\`\r
\r
Ingress Annotaion \u914D\u7F6E:\r
- \`nginx.ingress.kubernetes.io/backend-protocol\` \u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u534F\u8BAE\uFF0C\u9ED8\u8BA4\u4E3AHTTP\uFF0C\u652F\u6301HTTP\u3001HTTP2\u3001HTTPS\u3001GRPC\u548CGRPCS\u3002\r
- \`nginx.ingress.kubernetes.io/proxy-ssl-secret\` \u542F\u7528 mtls \u9700\u8981\u6307\u5B9A gateway \u8BC1\u4E66\uFF0C\u683C\u5F0F\u4E3A \`namespace/secret-name\`\u3002 \u8FD9\u91CC\u9700\u8981\u6CE8\u610F\u7684\u662F\u9700\u8981\u540C\u65F6\u521B\u5EFA\u4E00\u4E2A CA \u8BC1\u4E66\u7684 secret, \u540D\u79F0\u4E3A proxy-ssl-secret \u7684\u540D\u79F0\u52A0 \`-cacert\` \u540E\u7F00\uFF0C\u6BD4\u5982\u662F \`gateway-cert-cacert\`\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002\r
- \`nginx.ingress.kubernetes.io/proxy-ssl-name\` \u540E\u7AEF\u6821\u9A8C SNI \u9700\u8981\u6307\u5B9A\u540E\u7AEF\u670D\u52A1\u4F7F\u7528\u7684\u57DF\u540D\u3002\r
- \`nginx.ingress.kubernetes.io/proxy-ssl-server-name\` \u542F\u7528 SNI\u3002\r
\r
\r
# \u6D4B\u8BD5\r
\r
\`\`\`shell\r
curl -H "host: foo.com" http://127.0.0.1/ping\r
\r
"pong"\r
\`\`\`\r
\r
`,a={title:"\u914D\u7F6E\u8DEF\u7531\u6307\u5411 HTTPS \u670D\u52A1",description:"\u4ECB\u7ECD\u5982\u4F55\u4E3A\u4F7F\u7528 HTTPS \u534F\u8BAE\u7684\u540E\u7AEF\u670D\u52A1\u914D\u7F6E\u8DEF\u7531",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","route","upstream","https"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/https-upstream.md",rawData:void 0};export{n as _internal,s as body,e as collection,a as data,r as id,t as slug};
