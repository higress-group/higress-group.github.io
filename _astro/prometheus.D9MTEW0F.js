import{c as d,__tla as p}from"./astro-component.m4CCZO6J.js";import{r as h,m as c,u as g,__tla as u}from"./constant.CqGXQvIp.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,o,a,t,r,l,n,f=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="using-higress-consoles-built-in-monitoring-suite">Using Higress Console\u2019s Built-in Monitoring Suite</h2>
<p>Higress Console includes a built-in monitoring suite based on Prometheus + Grafana, though it\u2019s not installed by default. To enable this monitoring suite during Helm installation, add the <code dir="auto">--set global.o11y.enabled=true</code> parameter to your Helm install command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true"><div></div></button></div></figure></div>
<blockquote>
<p><strong>Note</strong>: When installing on a standard Kubernetes cluster (without the <code dir="auto">global.local=true</code> parameter), the monitoring system\u2019s PersistentVolumeClaim defaults to using the <code dir="auto">ReadWriteMany</code> access mode. If your Kubernetes cluster doesn\u2019t support this access mode, you can add the <code dir="auto">--set global.pvc.rwxSupported=false</code> parameter to switch to <code dir="auto">ReadWriteOnce</code> access mode:</p>
</blockquote>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.pvc.rwxSupported=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true --set global.pvc.rwxSupported=false"><div></div></button></div></figure></div>
<p>After installation is complete, access the Higress Console in your browser and click on the \u201CMonitoring Dashboard\u201D in the left navigation menu. The built-in monitoring dashboard will be displayed on the right side of the page.</p>
<p><img src="/img/user/prometheus/zh-cn/builtin.png" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="using-an-independently-deployed-monitoring-suite">Using an Independently Deployed Monitoring Suite</h2>
<p>Both the data plane and control plane components of Higress expose a series of metrics through their APIs. You can monitor Higress\u2019s internal operations by configuring Prometheus to collect these metrics and setting up dashboards in Grafana.</p>
<p>To get started, open Higress Console in your browser and navigate to the \u201CMonitoring Dashboard\u201D page in the left navigation menu. If the built-in monitoring suite isn\u2019t installed, the page will display an external dashboard URL configuration page along with setup instructions for external systems.</p>
<p><img src="/img/user/prometheus/zh-cn/external-before.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Follow the instructions at the bottom of the page to update your Prometheus and Grafana configurations. Then, enter the URL of your Grafana dashboard in the input field at the top and save. The page will refresh automatically, and the configured external monitoring dashboard will appear on the right side.</p>
<p><img src="/img/user/prometheus/zh-cn/external-after.png" alt="image" referrerpolicy="no-referrer"></p>
<p>To update the monitoring dashboard URL later, simply click the \u201CReconfigure\u201D button in the top-left corner of the page.
helm repo add higress.io <a href="https://higress.io/helm-charts" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.io/helm-charts</a>
helm install higress -n higress-system higress.io/higress \u2014create-namespace \u2014render-subchart-notes \u2014set global.o11y.enabled=true \u2014set global.pvc.rwxSupported=false</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">After installation, open Higress Console in your browser, and click "Dashboard" on the left navigation area. The built-in dashboard will be displayed on the right.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">![image](/img/user/prometheus/en-us/builtin.png)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## Use a Standalone Monitor Suite</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Both the data and control planes of Higress expose a set of metrics via API. To monitor them, you just need to add probe configurations into Prometheus and configure a dashboard in Grafana.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Before starting the configuration, please open Higress Console in your browser and switch to "Dashboard" from the left navigation area. The external dashboard configuration page and related notes will be displayed on the right.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">![image](/img/user/prometheus/en-us/external-before.png)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Update the configurations of Prometheus and Grafana following the notes. Then put the Grafana dashboard into the textbox above and save. The page will reload automatically and your dashboard will be shown on the right.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">![image](/img/user/prometheus/en-us/external-after.png)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">If you'd like to update the dashboard URL, you can click the "Reconfigure" button on the top left corner.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="After installation, open Higress Console in your browser, and click &#x22;Dashboard&#x22; on the left navigation area. The built-in dashboard will be displayed on the right.\x7F\x7F![image](/img/user/prometheus/en-us/builtin.png)\x7F\x7F## Use a Standalone Monitor Suite\x7F\x7FBoth the data and control planes of Higress expose a set of metrics via API. To monitor them, you just need to add probe configurations into Prometheus and configure a dashboard in Grafana.\x7F\x7FBefore starting the configuration, please open Higress Console in your browser and switch to &#x22;Dashboard&#x22; from the left navigation area. The external dashboard configuration page and related notes will be displayed on the right.\x7F\x7F![image](/img/user/prometheus/en-us/external-before.png)\x7F\x7FUpdate the configurations of Prometheus and Grafana following the notes. Then put the Grafana dashboard into the textbox above and save. The page will reload automatically and your dashboard will be shown on the right.\x7F\x7F![image](/img/user/prometheus/en-us/external-after.png)\x7F\x7FIf you&#x27;d like to update the dashboard URL, you can click the &#x22;Reconfigure&#x22; button on the top left corner."><div></div></button></div></figure></div>`,t={title:"Ingress Traffic Monitoring with Prometheus",keywords:["Higress","Prometheus","Monitoring","Metrics","Grafana"],description:"Implement ingress traffic monitoring using Prometheus and Grafana with Higress",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/prometheus.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/prometheus.md",n=void 0,l=function(){return`
# Ingress Traffic Monitoring with Prometheus

## Using Higress Console's Built-in Monitoring Suite

Higress Console includes a built-in monitoring suite based on Prometheus + Grafana, though it's not installed by default. To enable this monitoring suite during Helm installation, add the \`--set global.o11y.enabled=true\` parameter to your Helm install command:

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true
\`\`\`

> **Note**: When installing on a standard Kubernetes cluster (without the \`global.local=true\` parameter), the monitoring system's PersistentVolumeClaim defaults to using the \`ReadWriteMany\` access mode. If your Kubernetes cluster doesn't support this access mode, you can add the \`--set global.pvc.rwxSupported=false\` parameter to switch to \`ReadWriteOnce\` access mode:

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true --set global.pvc.rwxSupported=false
\`\`\`

After installation is complete, access the Higress Console in your browser and click on the "Monitoring Dashboard" in the left navigation menu. The built-in monitoring dashboard will be displayed on the right side of the page.

![image](/img/user/prometheus/zh-cn/builtin.png)

## Using an Independently Deployed Monitoring Suite

Both the data plane and control plane components of Higress expose a series of metrics through their APIs. You can monitor Higress's internal operations by configuring Prometheus to collect these metrics and setting up dashboards in Grafana.

To get started, open Higress Console in your browser and navigate to the "Monitoring Dashboard" page in the left navigation menu. If the built-in monitoring suite isn't installed, the page will display an external dashboard URL configuration page along with setup instructions for external systems.

![image](/img/user/prometheus/zh-cn/external-before.png)

Follow the instructions at the bottom of the page to update your Prometheus and Grafana configurations. Then, enter the URL of your Grafana dashboard in the input field at the top and save. The page will refresh automatically, and the configured external monitoring dashboard will appear on the right side.

![image](/img/user/prometheus/zh-cn/external-after.png)

To update the monitoring dashboard URL later, simply click the "Reconfigure" button in the top-left corner of the page.
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true --set global.pvc.rwxSupported=false
\`\`\`

After installation, open Higress Console in your browser, and click "Dashboard" on the left navigation area. The built-in dashboard will be displayed on the right.

![image](/img/user/prometheus/en-us/builtin.png)

## Use a Standalone Monitor Suite

Both the data and control planes of Higress expose a set of metrics via API. To monitor them, you just need to add probe configurations into Prometheus and configure a dashboard in Grafana.

Before starting the configuration, please open Higress Console in your browser and switch to "Dashboard" from the left navigation area. The external dashboard configuration page and related notes will be displayed on the right.

![image](/img/user/prometheus/en-us/external-before.png)

Update the configurations of Prometheus and Grafana following the notes. Then put the Grafana dashboard into the textbox above and save. The page will reload automatically and your dashboard will be shown on the right.

![image](/img/user/prometheus/en-us/external-after.png)

If you'd like to update the dashboard URL, you can click the "Reconfigure" button on the top left corner.`},o=function(){return e},r=function(){return[{depth:2,slug:"using-higress-consoles-built-in-monitoring-suite",text:"Using Higress Console\u2019s Built-in Monitoring Suite"},{depth:2,slug:"using-an-independently-deployed-monitoring-suite",text:"Using an Independently Deployed Monitoring Suite"}]},s=d((y,b,v)=>{const{layout:E,...i}=t;return i.file=a,i.url=n,h`${c()}${g(e)}`})});export{s as Content,f as __tla,o as compiledContent,s as default,a as file,t as frontmatter,r as getHeadings,l as rawContent,n as url};
