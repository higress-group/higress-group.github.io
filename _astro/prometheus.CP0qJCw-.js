import{c as p,__tla as h}from"./astro-component.m4CCZO6J.js";import{r as g,m as d,u,__tla as c}from"./constant.B6p3iceL.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let t,o,s,n,r,l,i,y=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return c}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="using-higress-consoles-built-in-monitoring-suite">Using Higress Console\u2019s Built-in Monitoring Suite</h2>
<p>Higress Console includes a built-in monitoring suite based on Prometheus + Grafana, though it\u2019s not installed by default. To enable this monitoring suite during Helm installation, add the <code dir="auto">--set global.o11y.enabled=true</code> parameter to your Helm install command:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.o11y.enabled=</span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true"><div></div></button></div></figure></div>
<p>After installation is complete, access the Higress Console in your browser and click on the \u201CMonitoring Dashboard\u201D in the left navigation menu. The built-in monitoring dashboard will be displayed on the right side of the page.</p>
<p><img src="/img/user/prometheus/zh-cn/builtin.png" alt="image" referrerpolicy="no-referrer"></p>
<h2 id="using-an-independently-deployed-monitoring-suite">Using an Independently Deployed Monitoring Suite</h2>
<p>Both the data plane and control plane components of Higress expose a series of metrics through their APIs. You can monitor Higress\u2019s internal operations by configuring Prometheus to collect these metrics and setting up dashboards in Grafana.</p>
<p>To get started, open Higress Console in your browser and navigate to the \u201CMonitoring Dashboard\u201D page in the left navigation menu. If the built-in monitoring suite isn\u2019t installed, the page will display an external dashboard URL configuration page along with setup instructions for external systems.</p>
<p><img src="/img/user/prometheus/zh-cn/external-before.png" alt="image" referrerpolicy="no-referrer"></p>
<p>Follow the instructions at the bottom of the page to update your Prometheus and Grafana configurations. Then, enter the URL of your Grafana dashboard in the input field at the top and save. The page will refresh automatically, and the configured external monitoring dashboard will appear on the right side.</p>
<p><img src="/img/user/prometheus/zh-cn/external-after.png" alt="image" referrerpolicy="no-referrer"></p>
<p>To update the monitoring dashboard URL later, simply click the \u201CReconfigure\u201D button in the top-left corner of the page.</p>`,n={title:"Ingress Traffic Monitoring with Prometheus",keywords:["Higress","Prometheus","Monitoring","Metrics","Grafana"],description:"Implement ingress traffic monitoring using Prometheus and Grafana with Higress",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/prometheus.md"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/prometheus.md",i=void 0,l=function(){return`
# Ingress Traffic Monitoring with Prometheus

## Using Higress Console's Built-in Monitoring Suite

Higress Console includes a built-in monitoring suite based on Prometheus + Grafana, though it's not installed by default. To enable this monitoring suite during Helm installation, add the \`--set global.o11y.enabled=true\` parameter to your Helm install command:

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.o11y.enabled=true
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
`},o=function(){return e},r=function(){return[{depth:2,slug:"using-higress-consoles-built-in-monitoring-suite",text:"Using Higress Console\u2019s Built-in Monitoring Suite"},{depth:2,slug:"using-an-independently-deployed-monitoring-suite",text:"Using an Independently Deployed Monitoring Suite"}]},t=p((f,b,E)=>{const{layout:F,...a}=n;return a.file=s,a.url=i,g`${d()}${u(e)}`})});export{t as Content,y as __tla,o as compiledContent,t as default,s as file,n as frontmatter,r as getHeadings,l as rawContent,i as url};
