import{c as p,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as c,m as g,u as h,__tla as u}from"./constant.ByWDeEHI.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,n,t,a,i,l,o,y=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p><a href="https://helm.sh/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Helm</a> is a package management system for automating the management and release of Kubernetes software. With Helm, you can quickly deploy and install Higress gateway on your Kubernetes cluster.</p>
<h2 id="installing-higress">Installing Higress</h2>
<p>The Higress gateway consists of the control plane component <code dir="auto">higress-controller</code> and the data plane component <code dir="auto">higress-gateway</code>. <code dir="auto">higress-gateway</code> is responsible for handling <strong>data traffic</strong>, while <code dir="auto">higress-controller</code> is responsible for managing <strong>configuration distribution</strong>.</p>
<h3 id="helm-installation-command">Helm Installation Command</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress higress.io/higress -n higress-system --create-namespace"><div></div></button></div></figure></div>
<h3 id="common-installation-parameters">Common Installation Parameters</h3>
<p>For a complete parameter description, please check the <a href="../../user/configurations/" referrerpolicy="unsafe-url">Operations Parameters Documentation</a></p>



















































































































<table><thead><tr><th><strong>Parameter Name</strong></th><th><strong>Description</strong></th><th><strong>Default Value</strong></th></tr></thead><tbody><tr><td><strong>Global Parameters</strong></td><td></td><td></td></tr><tr><td>global.local</td><td>If installing to a local K8s cluster (such as Kind, Rancher Desktop, etc.), set this to <code dir="auto">true</code></td><td>false</td></tr><tr><td>global.ingressClass</td><td><a href="https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">IngressClass</a> used to filter Ingress resources monitored by Higress Controller.<br>When multiple gateways are deployed in a cluster, this parameter can be used to distinguish the responsibilities of each gateway.<br>IngressClass has some special values:<br>1. If set to \u201Cnginx\u201D, Higress Controller will monitor Ingress resources with either <code dir="auto">nginx</code> or empty IngressClass.<br>2. If set to empty, Higress Controller will monitor all Ingress resources in the K8s cluster.</td><td>higress</td></tr><tr><td>global.watchNamespace</td><td>If not empty, Higress Controller will only monitor resources in the specified namespace.<br>When business systems are isolated by K8s namespaces and each namespace needs an independent gateway, this parameter can be used to limit Higress to monitor Ingress in the specified namespace.</td><td>""</td></tr><tr><td>global.disableAlpnH2</td><td>Whether to disable HTTP/2 protocol in ALPN</td><td>false</td></tr><tr><td>global.enableStatus</td><td>If <code dir="auto">true</code>, Higress Controller will update the <code dir="auto">status</code> field of Ingress resources.<br>To avoid overwriting the <code dir="auto">status</code> field of Ingress objects during migration from Nginx Ingress, this parameter can be set to <code dir="auto">false</code>, so Higress will not write the ingress IP to the <code dir="auto">status</code> field of Ingress by default.</td><td>true</td></tr><tr><td>global.enableIstioAPI</td><td>If <code dir="auto">true</code>, Higress Controller will also monitor istio resources</td><td>false</td></tr><tr><td>global.enableGatewayAPI</td><td>If <code dir="auto">true</code>, Higress Controller will also monitor Gateway API resources</td><td>false</td></tr><tr><td>global.onlyPushRouteCluster</td><td>If <code dir="auto">true</code>, Higress Controller will only push services associated with routes</td><td>true</td></tr><tr><td>global.o11y.enabled</td><td>If <code dir="auto">true</code>, will also install observability suite (Grafana, Prometheus, Loki, PromTail)</td><td>false</td></tr><tr><td>global.pvc.rwxSupported</td><td>Indicates whether the target K8s cluster supports ReadWriteMany operation mode for PersistentVolumeClaim.</td><td>false</td></tr><tr><td><strong>Core Component Parameters</strong></td><td></td><td></td></tr><tr><td>higress-core.gateway.replicas</td><td>Number of Higress Gateway pods</td><td>2</td></tr><tr><td>higress-core.gateway.httpPort</td><td>HTTP port that Higress Gateway will listen on</td><td>80</td></tr><tr><td>higress-core.gateway.httpsPort</td><td>HTTPS port that Higress Gateway will listen on</td><td>443</td></tr><tr><td>higress-core.gateway.kind</td><td>Resource type used to deploy Higress Gateway, Deployment or DaemonSet</td><td>Deployment</td></tr><tr><td>higress-core.controller.replicas</td><td>Number of Higress Controller pods</td><td>1</td></tr><tr><td><strong>Console Parameters</strong></td><td></td><td></td></tr><tr><td>higress-console.replicaCount</td><td>Number of Higress Console pods</td><td>1</td></tr><tr><td>higress-console.service.type</td><td>K8s Service type used by Higress Console</td><td>ClusterIP</td></tr><tr><td>higress-console.web.login.prompt</td><td>Prompt message displayed on the login page</td><td>""</td></tr></tbody></table>
<h2 id="supporting-istio-crd-optional">Supporting Istio CRD (Optional)</h2>
<p>The cluster needs to have Istio CRDs installed in advance. If you don\u2019t want to install Istio, you can also just install Istio CRDs:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://istio-release.storage.googleapis.com/charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio-base</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio/base</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">istio-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add istio https://istio-release.storage.googleapis.com/charts\x7Fhelm install istio-base istio/base -n istio-system --create-namespace"><div></div></button></div></figure></div>
<p>In this mode, you need to update Higress deployment parameters:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableIstioAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--reuse-values</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values"><div></div></button></div></figure></div>
<h2 id="supporting-gateway-api-crd-optional">Supporting Gateway API CRD (Optional)</h2>
<p>The cluster needs to have Gateway API CRDs installed in advance: <a href="https://github.com/kubernetes-sigs/gateway-api/releases" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/kubernetes-sigs/gateway-api/releases</a></p>
<p>For example, for version 1.0.0:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml"><div></div></button></div></figure></div>
<p>In this mode, you need to update Higress deployment parameters:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.enableGatewayAPI=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--reuse-values</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values"><div></div></button></div></figure></div>
<p>You can use this configuration to verify Gateway API functionality:</p>
<p><a href="https://github.com/alibaba/higress/blob/main/samples/gateway-api/demo.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/blob/main/samples/gateway-api/demo.yaml</a></p>`,a={title:"Cloud-Native Deployment with Helm",keywords:["deploy","helm","kubernetes","k8s","ops"],description:"Higress Helm Deployment.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/deploy-by-helm.md"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/deploy-by-helm.md",o=void 0,l=function(){return`
# Cloud-Native Deployment with Helm

[Helm](https://helm.sh/) is a package management system for automating the management and release of Kubernetes software. With Helm, you can quickly deploy and install Higress gateway on your Kubernetes cluster.

## Installing Higress

The Higress gateway consists of the control plane component \`higress-controller\` and the data plane component \`higress-gateway\`. \`higress-gateway\` is responsible for handling **data traffic**, while \`higress-controller\` is responsible for managing **configuration distribution**.

### Helm Installation Command

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
\`\`\`

### Common Installation Parameters

For a complete parameter description, please check the [Operations Parameters Documentation](../user/configurations.md)

| **Parameter Name** | **Description** | **Default Value** |
|---|---|-------------------|
| **Global Parameters** |  |                   |
| global.local | If installing to a local K8s cluster (such as Kind, Rancher Desktop, etc.), set this to \`true\` | false             |
| global.ingressClass | [IngressClass](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class) used to filter Ingress resources monitored by Higress Controller.<br />When multiple gateways are deployed in a cluster, this parameter can be used to distinguish the responsibilities of each gateway.<br />IngressClass has some special values:<br />1. If set to "nginx", Higress Controller will monitor Ingress resources with either \`nginx\` or empty IngressClass.<br />2. If set to empty, Higress Controller will monitor all Ingress resources in the K8s cluster. | higress           |
| global.watchNamespace | If not empty, Higress Controller will only monitor resources in the specified namespace.<br />When business systems are isolated by K8s namespaces and each namespace needs an independent gateway, this parameter can be used to limit Higress to monitor Ingress in the specified namespace. | ""                |
| global.disableAlpnH2 | Whether to disable HTTP/2 protocol in ALPN | false             |
| global.enableStatus | If \`true\`, Higress Controller will update the \`status\` field of Ingress resources.<br />To avoid overwriting the \`status\` field of Ingress objects during migration from Nginx Ingress, this parameter can be set to \`false\`, so Higress will not write the ingress IP to the \`status\` field of Ingress by default. | true              |
| global.enableIstioAPI | If \`true\`, Higress Controller will also monitor istio resources | false             |
| global.enableGatewayAPI | If \`true\`, Higress Controller will also monitor Gateway API resources | false             |
| global.onlyPushRouteCluster | If \`true\`, Higress Controller will only push services associated with routes | true              |
| global.o11y.enabled | If \`true\`, will also install observability suite (Grafana, Prometheus, Loki, PromTail) | false             |
| global.pvc.rwxSupported | Indicates whether the target K8s cluster supports ReadWriteMany operation mode for PersistentVolumeClaim. | false             |
| **Core Component Parameters** |  |                   |
| higress-core.gateway.replicas | Number of Higress Gateway pods | 2                 |
| higress-core.gateway.httpPort | HTTP port that Higress Gateway will listen on | 80                |
| higress-core.gateway.httpsPort | HTTPS port that Higress Gateway will listen on | 443               |
| higress-core.gateway.kind | Resource type used to deploy Higress Gateway, Deployment or DaemonSet | Deployment        |
| higress-core.controller.replicas | Number of Higress Controller pods | 1                 |
| **Console Parameters** |  |                   |
| higress-console.replicaCount | Number of Higress Console pods | 1                 |
| higress-console.service.type | K8s Service type used by Higress Console | ClusterIP         |
| higress-console.web.login.prompt | Prompt message displayed on the login page | ""                |

## Supporting Istio CRD (Optional)

The cluster needs to have Istio CRDs installed in advance. If you don't want to install Istio, you can also just install Istio CRDs:

\`\`\`bash
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system --create-namespace
\`\`\`

In this mode, you need to update Higress deployment parameters:

\`\`\`bash
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values
\`\`\`

## Supporting Gateway API CRD (Optional)

The cluster needs to have Gateway API CRDs installed in advance: https://github.com/kubernetes-sigs/gateway-api/releases

For example, for version 1.0.0:

\`\`\`bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml
\`\`\`

In this mode, you need to update Higress deployment parameters:

\`\`\`bash
helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values
\`\`\`

You can use this configuration to verify Gateway API functionality:

https://github.com/alibaba/higress/blob/main/samples/gateway-api/demo.yaml
`},n=function(){return e},i=function(){return[{depth:2,slug:"installing-higress",text:"Installing Higress"},{depth:3,slug:"helm-installation-command",text:"Helm Installation Command"},{depth:3,slug:"common-installation-parameters",text:"Common Installation Parameters"},{depth:2,slug:"supporting-istio-crd-optional",text:"Supporting Istio CRD (Optional)"},{depth:2,slug:"supporting-gateway-api-crd-optional",text:"Supporting Gateway API CRD (Optional)"}]},s=p((b,f,E)=>{const{layout:w,...r}=a;return r.file=t,r.url=o,c`${g()}${h(e)}`})});export{s as Content,y as __tla,n as compiledContent,s as default,t as file,a as frontmatter,i as getHeadings,l as rawContent,o as url};
