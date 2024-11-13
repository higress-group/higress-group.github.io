const r="latest/zh-cn/ops/how-tos/gateway-ports.md",t="docs",e="latest/zh-cn/ops/how-tos/gateway-ports",s=`\r
# \u4FEE\u6539 Gateway \u76D1\u542C\u7AEF\u53E3\r
\r
\u8BA9 Gateway \u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3\uFF0C\u9700\u8981\u5728\u5B89\u88C5\u6216\u8005\u5347\u7EA7\u65F6\u5019\u6307\u5B9A\u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3\u3002\u6BD4\u5982\u8C03\u6574 80 \u7AEF\u53E3\u5230 8080\uFF0C443 \u7AEF\u53E3\u5230 8443\u3002\r
\r
## Kubernetes \u5B89\u88C5\r
\r
helm \u53C2\u6570 values.yaml \u914D\u7F6E\u8C03\u6574\u5982\u4E0B:\r
\r
\`\`\`yaml\r
higress-core:\r
  # Gateway \u8BBE\u7F6E\r
  gateway:\r
    httpPort: 8080\r
    httpsPort: 8443\r
  service:\r
    ports:\r
    - name: http2\r
      port: 80\r
      protocol: TCP\r
      targetPort: 8080\r
    - name: https\r
      port: 443\r
      protocol: TCP\r
      targetPort: 8443\r
\`\`\`\r
\r
\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5FEB\u901F\u5B89\u88C5 Higress \u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\uFF1A\r
\r
\`\`\`shell\r
  # \u4F7F\u7528 Helm \u5728 Kubernetes \u96C6\u7FA4\u5B89\u88C5 Higress\r
  helm install higress higress.io/higress  -n higress-system  -f ./values.yaml --create-namespace\r
  # \u4F7F\u7528 hgctl \u5728 Kubernetes \u96C6\u7FA4\u5B89\u88C5 Higress\r
  hgctl install --set profile=k8s -f ./values.yaml\r
\`\`\`\r
\r
## Docker \u73AF\u5883\u5B89\u88C5\r
\r
\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5FEB\u901F\u5B89\u88C5 Higress \u4FEE\u6539\u76D1\u542C\u7AEF\u53E3\uFF1A\r
\r
\`\`\`shell\r
  # \u4F7F\u7528 get-higress.sh \u5728 Docker \u73AF\u5883\u5B89\u88C5 Higress\r
  curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress --gateway-http-port=8080  --gateway-https-port=8443\r
  # \u4F7F\u7528 hgctl \u5728 Docker \u73AF\u5883\u5B89\u88C5 Higress\r
  hgctl install --set profile=local-docker --set gateway.httpPort=8080 --set gateway.httpsPort=8443\r
\`\`\`\r
\r
\r
\r
\r
`,a={title:"\u4FEE\u6539 Gateway \u76D1\u542C\u7AEF\u53E3",description:"\u4ECB\u7ECD\u5982\u4F55\u8BA9 Gateway \u76D1\u542C\u975E 80\u3001443 \u7AEF\u53E3",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","route","tcp"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/gateway-ports.md",rawData:void 0};export{o as _internal,s as body,t as collection,a as data,r as id,e as slug};
