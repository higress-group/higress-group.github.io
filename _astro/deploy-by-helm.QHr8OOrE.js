import{c as d,__tla as p}from"./astro-component.DIa0fJKh.js";import{r as c,m as g,u as h,__tla as u}from"./constant.D7WnYQd1.js";import{__tla as m}from"./astro/assets-service.tyfV9CK3.js";let s,n,t,a,i,l,r,y=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p><a href="https://helm.sh/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Helm</a> is a package manager for Kubernetes used in software management and deployment. You can use Helm to perform a quick install of Higress Gateway in your Kubernetes cluster.</p>
<h2 id="install-higress">Install Higress</h2>
<p>Higress Gateway consists of a control plane component <code dir="auto">higress-controller</code> and a data plane component <code dir="auto">higress-gateway</code>. It uses Istio to management <strong>API configurations of the data plane</strong>, and <code dir="auto">higress-controller</code> to manage <strong>API configurations of the control plane</strong>.</p>
<h3 id="helm-installation-command">Helm Installation Command</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress higress.io/higress -n higress-system --create-namespace"><div></div></button></div></figure></div>
<h3 id="installation-parameters">Installation Parameters</h3>









































































































<table><thead><tr><th><strong>Parameter</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th></tr></thead><tbody><tr><td><strong>Global Parameters</strong></td><td></td><td></td></tr><tr><td>global.local</td><td>Set to <code dir="auto">true</code> if installing to a local K8s cluster (e.g.: Kind, Rancher Desktop, etc.)</td><td>false</td></tr><tr><td>global.ingressClass</td><td><a href="https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">IngressClass</a> which is used to filter Ingress resources Higress Controller watches.<br>If there are multiple gateway instances deployed in the cluster, this parameter can be used to distinguish the scope of each gateway instance.<br>There are some special cases for special IngressClass values:<br>1. If set to \u201Cnginx\u201D, Higress Controller will watch Ingress resources with the <code dir="auto">nginx</code> IngressClass or without any Ingress class.<br>2. If set to empty, Higress Controller will watch all Ingress resources in the K8s cluster.</td><td>higress</td></tr><tr><td>global.watchNamespace</td><td>If not empty, Higress Controller will only watch resources in the specified namespace. When isolating different business systems using K8s namespace, if each namespace requires a standalone gateway instance, this parameter can be used to confine the Ingress watching of Higress within the given namespace.</td><td>""</td></tr><tr><td>global.disableAlpnH2</td><td>Whether to disable HTTP/2 in ALPN</td><td>true</td></tr><tr><td>global.enableStatus</td><td>If <code dir="auto">true</code>, Higress Controller will update the <code dir="auto">status</code> field of Ingress resources.<br>When migrating from Nginx Ingress, in order to avoid <code dir="auto">status</code> field of Ingress objects being overwritten, this parameter needs to be set to false, so Higress won\u2019t write the entry IP to the <code dir="auto">status</code> field of the corresponding Ingress object.</td><td>true</td></tr><tr><td>global.enableIstioAPI</td><td>If <code dir="auto">true</code>, Higress Controller will monitor istio resources as well</td><td>false</td></tr><tr><td>global.istioNamespace</td><td>The namespace istio is installed to</td><td>istio-system</td></tr><tr><td>global.o11y.enabled</td><td>If <code dir="auto">true</code>, o11y suite (Grafana + Promethues) will be installed.</td><td>false</td></tr><tr><td>global.pvc.rwxSupported</td><td>Set to <code dir="auto">false</code> when installing to a standard K8s cluster and the target cluster doesn\u2019t support the ReadWriteMany access mode of PersistentVolumeClaim.</td><td>true</td></tr><tr><td><strong>Core Paramters</strong></td><td></td><td></td></tr><tr><td>higress-core.gateway.replicas</td><td>Number of Higress Gateway pods</td><td>2</td></tr><tr><td>higress-core.controller.replicas</td><td>Number of Higress Controller pods</td><td>1</td></tr><tr><td>higress-core.gateway.httpPort</td><td>HTTP port to be listened by Higress Gateway</td><td>80</td></tr><tr><td>higress-core.gateway.httpsPort</td><td>HTTPS port to be listened by Higress Gateway</td><td>443</td></tr><tr><td><strong>Console Paramters</strong></td><td></td><td></td></tr><tr><td>higress-console.replicaCount</td><td>Number of Higress Console pods</td><td>1</td></tr><tr><td>higress-console.service.type</td><td>K8s service type used by Higress Console</td><td>ClusterIP</td></tr><tr><td>higress-console.web.login.prompt</td><td>Prompt message to be displayed on the login page</td><td>""</td></tr></tbody></table>
<h2 id="support-istio-crd">Support Istio CRD</h2>
<p>The CRD of Istio needs to be installed in advance in the cluster. If you do not want to install Istio, you can also install only the CRD of Istio:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://istio-release.storage.googleapis.com/charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio-base</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio/base</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add istio https://istio-release.storage.googleapis.com/charts\x7Fhelm install istio-base istio/base -n istio-system"><div></div></button></div></figure></div>
<p>In this mode, you need to update the deployment parameters of Higress:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableIstioAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress"><div></div></button></div></figure></div>`,a={title:"Deploy Higress by Helm",keywords:["deploy","helm","kubernetes","k8s","ops"],description:"Deploy Higress by Helm.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/deploy-by-helm.md",r=void 0,l=function(){return`
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
| global.o11y.enabled | If \`true\`, o11y suite (Grafana + Promethues) will be installed. | false |
| global.pvc.rwxSupported | Set to \`false\` when installing to a standard K8s cluster and the target cluster doesn't support the ReadWriteMany access mode of PersistentVolumeClaim. | true |
| **Core Paramters** |  |  |
| higress-core.gateway.replicas | Number of Higress Gateway pods | 2 |
| higress-core.controller.replicas | Number of Higress Controller pods | 1 |
| higress-core.gateway.httpPort | HTTP port to be listened by Higress Gateway | 80 |
| higress-core.gateway.httpsPort | HTTPS port to be listened by Higress Gateway | 443 |
| **Console Paramters** |  |  |
| higress-console.replicaCount | Number of Higress Console pods | 1 |
| higress-console.service.type | K8s service type used by Higress Console | ClusterIP |
| higress-console.web.login.prompt | Prompt message to be displayed on the login page | "" |

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
`},n=function(){return e},i=function(){return[{depth:2,slug:"install-higress",text:"Install Higress"},{depth:3,slug:"helm-installation-command",text:"Helm Installation Command"},{depth:3,slug:"installation-parameters",text:"Installation Parameters"},{depth:2,slug:"support-istio-crd",text:"Support Istio CRD"}]},s=d((f,b,E)=>{const{layout:w,...o}=a;return o.file=t,o.url=r,c`${g()}${h(e)}`})});export{s as Content,y as __tla,n as compiledContent,s as default,t as file,a as frontmatter,i as getHeadings,l as rawContent,r as url};
