const e="latest/en/ops/deploy-by-helm.md",s="docs",t="latest/en/ops/deploy-by-helm",o=`
# Deploy Higress by Helm

[Helm](https://helm.sh/) is a package manager for Kubernetes used in software management and deployment. You can use Helm to perform a quick install of Higress Gateway in your Kubernetes cluster.

## Install Higress

Higress Gateway consists of a control plane component \`higress-controller\` and a data plane component \`higress-gateway\`. It uses Istio to management **API configurations of the data plane**, and \`higress-controller\` to manage **API configurations of the control plane**.

### Helm Installation Command

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
\`\`\`

### Installation Parameters

| **Parameter** | **Description** | **Default** |
|---|---|---|
| **Global Parameters** |  |  |
| global.local | Set to \`true\` if installing to a local K8s cluster (e.g.: Kind, Rancher Desktop, etc.) | false |
| global.ingressClass | [IngressClass](https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class) which is used to filter Ingress resources Higress Controller watches.<br />If there are multiple gateway instances deployed in the cluster, this parameter can be used to distinguish the scope of each gateway instance.<br />There are some special cases for special IngressClass values:<br />1. If set to "nginx", Higress Controller will watch Ingress resources with the \`nginx\` IngressClass or without any Ingress class.<br />2. If set to empty, Higress Controller will watch all Ingress resources in the K8s cluster. | higress |
| global.watchNamespace | If not empty, Higress Controller will only watch resources in the specified namespace. When isolating different business systems using K8s namespace, if each namespace requires a standalone gateway instance, this parameter can be used to confine the Ingress watching of Higress within the given namespace. | "" |
| global.disableAlpnH2 | Whether to disable HTTP/2 in ALPN | true |
| global.enableStatus | If \`true\`, Higress Controller will update the \`status\` field of Ingress resources.<br />When migrating from Nginx Ingress, in order to avoid \`status\` field of Ingress objects being overwritten, this parameter needs to be set to false, so Higress won't write the entry IP to the \`status\` field of the corresponding Ingress object. | true |
| global.enableIstioAPI | If \`true\`, Higress Controller will monitor istio resources as well | false |
| global.istioNamespace | The namespace istio is installed to | istio-system |
| **Core Paramters** |  |  |
| higress-core.gateway.replicas | Number of Higress Gateway pods | 2 |
| higress-core.controller.replicas | Number of Higress Controller pods | 1 |
| **Console Paramters** |  |  |
| higress-console.replicaCount | Number of Higress Console pods | 1 |
| higress-console.service.type | K8s service type used by Higress Console | ClusterIP |
| higress-console.web.login.prompt | Prompt message to be displayed on the login page | "" |
| higress-console.o11y.enabled | If \`true\`, o11y suite (Grafana + Promethues) will be installed. | false |
| higress-console.pvc.rwxSupported | Set to \`false\` when installing to a standard K8s cluster and the target cluster doesn't support the ReadWriteMany access mode of PersistentVolumeClaim. | true |

## Support Istio CRD

The CRD of Istio needs to be installed in advance in the cluster. If you do not want to install Istio, you can also install only the CRD of Istio:

\`\`\`bash
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system
\`\`\`

In this mode, you need to update the deployment parameters of Higress:

\`\`\`bash
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress
\`\`\`
`,a={title:"Deploy Higress by Helm",description:"Deploy Higress by Helm.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["deploy","helm","kubernetes","k8s","ops"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/deploy-by-helm.md",rawData:void 0};export{r as _internal,o as body,s as collection,a as data,e as id,t as slug};
