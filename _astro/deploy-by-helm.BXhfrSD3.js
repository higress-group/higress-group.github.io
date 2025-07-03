const e="latest/zh-cn/ops/deploy-by-helm.md",s="docs",r="latest/zh-cn/ops/deploy-by-helm",t=`
# \u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72

[Helm](https://helm.sh/) \u662F\u4E00\u4E2A\u7528\u4E8E\u81EA\u52A8\u5316\u7BA1\u7406\u548C\u53D1\u5E03 Kubernetes \u8F6F\u4EF6\u7684\u5305\u7BA1\u7406\u7CFB\u7EDF\u3002\u901A\u8FC7 Helm \u53EF\u4EE5\u5728\u60A8\u7684 Kubernetes \u96C6\u7FA4\u4E0A\u5FEB\u901F\u90E8\u7F72\u5B89\u88C5 Higress \u7F51\u5173\u3002

## \u5B89\u88C5 Higress

Higress \u7F51\u5173\u7531\u63A7\u5236\u9762\u7EC4\u4EF6 \`higress-controller\` \u548C\u6570\u636E\u9762\u7EC4\u4EF6 \`higress-gateway\` \u7EC4\u6210\u3002\`higress-gateway\`\u8D1F\u8D23\u627F\u8F7D**\u6570\u636E\u6D41\u91CF**\uFF0C\`higress-controller\` \u8D1F\u8D23\u7BA1\u7406**\u914D\u7F6E\u4E0B\u53D1**\u3002

### Helm \u5B89\u88C5\u547D\u4EE4

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
\`\`\`

### \u5E38\u7528\u5B89\u88C5\u53C2\u6570

\u5B8C\u6574\u53C2\u6570\u4ECB\u7ECD\u8BF7\u67E5\u770B[\u8FD0\u7EF4\u53C2\u6570\u8BF4\u660E](../user/configurations.md)

| **\u53C2\u6570\u540D** | **\u53C2\u6570\u8BF4\u660E** | **\u9ED8\u8BA4\u503C**    |
|---|---|------------|
| **\u5168\u5C40\u53C2\u6570** |  |            |
| global.local | \u5982\u679C\u8981\u5B89\u88C5\u81F3\u672C\u5730 K8s \u96C6\u7FA4\uFF08\u5982 Kind\u3001Rancher Desktop \u7B49\uFF09\uFF0C\u8BF7\u8BBE\u7F6E\u4E3A \`true\` | false      |
| global.ingressClass | \u7528\u4E8E\u8FC7\u6EE4\u88AB Higress Controller \u76D1\u542C\u7684 Ingress \u8D44\u6E90\u7684 [IngressClass](https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class)\u3002<br />\u5728\u96C6\u7FA4\u5185\u90E8\u7F72\u4E86\u591A\u4E2A\u7F51\u5173\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E00\u53C2\u6570\u6765\u533A\u5206\u6BCF\u4E2A\u7F51\u5173\u7684\u804C\u8D23\u8303\u56F4\u3002<br />IngressClass \u6709\u4E00\u4E9B\u7279\u6B8A\u7684\u53D6\u503C\uFF1A<br />1. \u5982\u679C\u8BBE\u7F6E\u4E3A\u201Cnginx\u201D\uFF0CHigress Controller \u5C06\u76D1\u542C Ingress \u4E3A \`nginx\` \u6216\u4E3A\u7A7A\u7684 Ingress \u8D44\u6E90\u3002<br />2. \u5982\u679C\u8BBE\u4E3A\u7A7A\uFF0CHigress Controller \u5C06\u76D1\u542C K8s \u96C6\u7FA4\u5185\u7684\u5168\u90E8 Ingress \u8D44\u6E90\u3002 | higress    |
| global.watchNamespace | \u5982\u679C\u503C\u4E0D\u4E3A\u7A7A\uFF0CHigress Controller \u5C06\u53EA\u4F1A\u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u4E0B\u7684\u8D44\u6E90\u3002<br />\u5F53\u57FA\u4E8E K8s \u547D\u540D\u7A7A\u95F4\u8FDB\u884C\u4E1A\u52A1\u7CFB\u7EDF\u9694\u79BB\u65F6\uFF0C\u82E5\u9700\u8981\u5BF9\u6BCF\u4E2A\u547D\u540D\u7A7A\u95F4\u90E8\u7F72\u4E00\u5957\u72EC\u7ACB\u7684\u7F51\u5173\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E00\u53C2\u6570\u6765\u9650\u5236 Higress \u76D1\u542C\u6307\u5B9A\u547D\u540D\u7A7A\u95F4\u5185\u7684 Ingress\u3002 | ""         |
| global.disableAlpnH2 | \u662F\u5426\u5728 ALPN \u4E2D\u7981\u7528 HTTP/2 \u534F\u8BAE | false      |
| global.enableStatus | \u82E5\u4E3A\`true\`\uFF0C Higress Controller \u5C06\u4F1A\u66F4\u65B0 Ingress \u8D44\u6E90\u7684 \`status\` \u5B57\u6BB5\u3002<br />\u4E3A\u907F\u514D\u4ECE Nginx Ingress \u8FC1\u79FB\u8FC7\u7A0B\u4E2D\uFF0C\u8986\u76D6 Ingress \u5BF9\u8C61\u7684 \`status\` \u5B57\u6BB5\uFF0C\u53EF\u4EE5\u5C06\u8FD9\u4E00\u53C2\u6570\u8BBE\u7F6E\u4E3A\`false\`\uFF0C\u8FD9\u6837 Higress \u9ED8\u8BA4\u5C31\u4E0D\u4F1A\u5C06\u5165\u53E3 IP \u5199\u5165 Ingress \u7684 \`status\` \u5B57\u6BB5\u3002 | true       |
| global.enableIstioAPI | \u82E5\u4E3A\`true\`\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C istio \u8D44\u6E90 | false      |
| global.enableGatewayAPI | \u82E5\u4E3A\`true\`\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C Gateway API \u8D44\u6E90 | false      |
| global.onlyPushRouteCluster | \u82E5\u4E3A\`true\`\uFF0CHigress Controller \u5C06\u4F1A\u53EA\u63A8\u9001\u88AB\u8DEF\u7531\u5173\u8054\u7684\u670D\u52A1 | true       |
| global.o11y.enabled | \u82E5\u4E3A \`true\`\uFF0C\u5C06\u540C\u65F6\u5B89\u88C5\u53EF\u89C2\u6D4B\u6027\u5957\u4EF6\uFF08Grafana\u3001Promethues\u3001Loki\u3001PromTail\uFF09 | false      |
| global.pvc.rwxSupported | \u6807\u8BC6\u76EE\u6807 K8s \u96C6\u7FA4\u662F\u5426\u652F\u6301 PersistentVolumeClaim \u7684 ReadWriteMany \u64CD\u4F5C\u65B9\u5F0F\u3002 | false      |
| **\u6838\u5FC3\u7EC4\u4EF6\u53C2\u6570** |  |            |
| higress-core.gateway.replicas | Higress Gateway \u7684 pod \u6570\u91CF | 2          |
| higress-core.gateway.httpPort | Higress Gateway \u5C06\u76D1\u542C\u7684 HTTP \u7AEF\u53E3\u3002| 80         |
| higress-core.gateway.httpsPort | Higress Gateway \u5C06\u76D1\u542C\u7684 HTTPS \u7AEF\u53E3\u3002| 443        |
| higress-core.gateway.kind | \u7528\u4E8E\u90E8\u7F72 Higress Gateway \u7684\u8D44\u6E90\u7C7B\u578B\uFF0CDeployment \u6216 DaemonSet | Deployment |
| higress-core.controller.replicas | Higress Controller \u7684 pod \u6570\u91CF | 1          |
| **\u63A7\u5236\u53F0\u53C2\u6570** |  |            |
| higress-console.replicaCount | Higress Console \u7684 pod \u6570\u91CF | 1          |
| higress-console.service.type | Higress Console \u6240\u4F7F\u7528\u7684 K8s Service \u7C7B\u578B | ClusterIP  |
| higress-console.web.login.prompt | \u767B\u5F55\u9875\u9762\u4E0A\u663E\u793A\u7684\u63D0\u793A\u4FE1\u606F | ""         |

## \u652F\u6301 Istio CRD\uFF08\u53EF\u9009\uFF09

\u96C6\u7FA4\u91CC\u9700\u8981\u63D0\u524D\u5B89\u88C5\u597D Istio \u7684 CRD\uFF0C\u5982\u679C\u4E0D\u5E0C\u671B\u5B89\u88C5 Istio\uFF0C\u4E5F\u53EF\u4EE5\u53EA\u5B89\u88C5 Istio \u7684 CRD\uFF1A

\`\`\`bash
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system --create-namespace
\`\`\`

\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u9700\u8981\u66F4\u65B0 Higress \u7684\u90E8\u7F72\u53C2\u6570\uFF1A

\`\`\`bash
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values
\`\`\`

## \u652F\u6301 Gateway API CRD\uFF08\u53EF\u9009\uFF09

\u96C6\u7FA4\u91CC\u9700\u8981\u63D0\u524D\u5B89\u88C5\u597D Gateway API \u7684 CRD\uFF1Ahttps://github.com/kubernetes-sigs/gateway-api/releases

\u4EE51.0.0\u4E3A\u4F8B\uFF1A

\`\`\`bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml
\`\`\`

\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u9700\u8981\u66F4\u65B0 Higress \u7684\u90E8\u7F72\u53C2\u6570\uFF1A

\`\`\`bash
helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values
\`\`\`

\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4EFD\u914D\u7F6E\u9A8C\u8BC1 Gateway API \u529F\u80FD\uFF1A

https://github.com/alibaba/higress/blob/main/samples/gateway-api/demo.yaml
`,a={title:"\u4F7F\u7528 Helm \u8FDB\u884C\u4E91\u539F\u751F\u90E8\u7F72",description:"Higress Helm\u90E8\u7F72.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["deploy","helm","kubernetes","k8s","ops"]},l={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/deploy-by-helm.md",rawData:void 0};export{l as _internal,t as body,s as collection,a as data,e as id,r as slug};
