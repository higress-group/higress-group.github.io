const r="latest/zh-cn/ops/how-tos/tcp-route.md",e="docs",a="latest/zh-cn/ops/how-tos/tcp-route",t=`\r
# \u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531\r
\r
## \u524D\u7F6E\u51C6\u5907\r
\r
1. Higress \u5B89\u88C5\u5728 K8s \u5185\u7684 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\uFF0C\u7F51\u5173\u7684 Service \u540D\u79F0\u4E3A higress-gateway\uFF1B\r
2. \u76EE\u6807\u662F\u4E3A default \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 tcp-echo \u670D\u52A1\u914D\u7F6E\u4E00\u4E2A\u56DB\u5C42\u8DEF\u7531\uFF0C\u670D\u52A1\u76D1\u542C\u7684\u7AEF\u53E3\u4E3A 9000\uFF0C\u7F51\u5173\u76D1\u542C\u7684\u7AEF\u53E3\u4E5F\u4E3A 9000\uFF1B\r
3. \u8DEF\u7531\u4F7F\u7528 Gateway API CRD \u8FDB\u884C\u914D\u7F6E\uFF0C\u9700\u8981\u63D0\u524D\u914D\u7F6E Higress \u4F7F\u5176\u652F\u6301\u76D1\u542C Gateway API\u3002\u53C2\u8003\u6587\u6863\uFF1A[\u6587\u6863](../../ops/deploy-by-helm.md#\u652F\u6301-gateway-api-crd\u53EF\u9009)\r
\r
## \u914D\u7F6E\u6B65\u9AA4\r
\r
### 1. \u521B\u5EFA GatewayClass\r
\r
1. \u521B\u5EFA \`gatewayclass.yaml\` \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
    \`\`\`yaml\r
    apiVersion: gateway.networking.k8s.io/v1\r
    kind: GatewayClass\r
    metadata:\r
      name: higress-gateway\r
    spec:\r
      controllerName: "higress.io/gateway-controller"\r
    \`\`\`\r
2. \u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A\r
    \`\`\`bash\r
    kubectl apply -f gatewayclass.yaml\r
    \`\`\`\r
\r
### 2. \u521B\u5EFA Gateway\r
\r
1. \u521B\u5EFA \`gateway.yaml\` \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
    \`\`\`yaml\r
    apiVersion: gateway.networking.k8s.io/v1\r
    kind: Gateway\r
    metadata:\r
      name: higress-gateway\r
      namespace: higress-system\r
    spec:\r
      gatewayClassName: higress-gateway\r
      listeners:\r
      - name: default-tcp\r
        protocol: TCP\r
        port: 9000\r
        allowedRoutes:\r
          namespaces:\r
            from: All\r
          kinds:\r
          - kind: TCPRoute\r
    \`\`\`\r
2. \u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A\r
    \`\`\`bash\r
    kubectl apply -f gateway.yaml\r
    \`\`\`\r
\r
### 3. \u4FEE\u6539 \`higress-gateway\` Service\r
\r
1. \u6267\u884C\u547D\u4EE4\uFF0C\u8FDB\u5EA6 \`higress-gateway\` Service \u7684\u7F16\u8F91\u72B6\u6001\uFF1A\r
    \`\`\`bash\r
    kubectl edit service higress-gateway -n higress-system\r
    \`\`\`\r
2. \u5728 \`spec.ports\` \u5217\u8868\u4E2D\u589E\u52A0\u5BF9 \`9000\` \u7684\u7AEF\u53E3\u7684\u63CF\u8FF0\u4FE1\u606F\u3002\u589E\u52A0\u540E\u7684\u914D\u7F6E\u5982\u4E0B\u6240\u793A\uFF1A\r
    \`\`\`yaml\r
    ...\r
      ports:\r
      - name: http2\r
        port: 80\r
        protocol: TCP\r
        targetPort: 80\r
      - name: https\r
        port: 443\r
        protocol: TCP\r
        targetPort: 443\r
      # --- \u6B64\u5904\u4E3A\u589E\u52A0\u7684\u914D\u7F6E ---\r
      - name: tcp\r
        port: 9000\r
        protocol: TCP\r
        targetPort: 9000\r
      # ----------------------\r
    ...\r
    \`\`\`\r
3. \u4FDD\u5B58\u7F16\u8F91\u5185\u5BB9\u5E76\u9000\u51FA\u7F16\u8F91\u5668\u3002\r
\r
### 4. \u521B\u5EFA TCPRoute\r
\r
1. \u521B\u5EFA \`tcproute.yaml\` \u6587\u4EF6\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF1A\r
    \`\`\`yaml\r
    apiVersion: gateway.networking.k8s.io/v1alpha2\r
    kind: TCPRoute\r
    metadata:\r
      name: tcp-echo\r
      namespace: default\r
    spec:\r
      parentRefs:\r
      - name: higress-gateway\r
        namespace: higress-system\r
        port: 9000\r
      rules:\r
      - backendRefs:\r
        - name: tcp-echo\r
          port: 9000\r
    \`\`\`\r
2. \u6267\u884C\u547D\u4EE4\uFF0C\u5C06\u4EE5\u4E0A\u914D\u7F6E\u5199\u5165 K8s \u96C6\u7FA4\uFF1A\r
    \`\`\`bash\r
    kubectl apply -f tcproute.yaml\r
    \`\`\`\r
\r
### 5. \u914D\u7F6E\u9A8C\u8BC1\r
\r
\u914D\u7F6E\u5B8C\u6210\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 telnet higress-gateway service \u7684 9000 \u7AEF\u53E3\u7B49\u65B9\u5F0F\u9A8C\u8BC1\u8DEF\u7531\u662F\u5426\u80FD\u591F\u6B63\u5E38\u5DE5\u4F5C\u3002`,s={title:"\u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531",description:"\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E TCP \u56DB\u5C42\u8DEF\u7531",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","route","tcp"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/tcp-route.md",rawData:void 0};export{o as _internal,t as body,e as collection,s as data,r as id,a as slug};
