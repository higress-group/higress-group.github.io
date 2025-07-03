import{c,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as p,m as g,u as h,__tla as u}from"./constant.B6p3iceL.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let s,a,o,t,l,r,i,y=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="viewing-component-logs">Viewing Component Logs</h2>
<h3 id="kubernetes-deployment">Kubernetes Deployment</h3>
<p>Use the <code dir="auto">kubectl logs</code> command to view logs. For example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway-5cb7f44768-snfbd</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs -n higress-system higress-gateway-5cb7f44768-snfbd"><div></div></button></div></figure></div>
<p>Note that the <code dir="auto">higress-controller</code> pod contains two containers: <code dir="auto">higress-core</code> and <code dir="auto">discovery</code>, which correspond to the <code dir="auto">controller</code> and <code dir="auto">pilot</code> components respectively. Use the <code dir="auto">-c</code> parameter to specify the container name when viewing logs. For example:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-controller-5c768d64d9-m5gtp</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-c</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">discovery</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs -n higress-system higress-controller-5c768d64d9-m5gtp -c discovery"><div></div></button></div></figure></div>
<h3 id="docker-compose-deployment">Docker Compose Deployment</h3>
<p>In the installation directory, execute <code dir="auto">./bin/logs.sh component-name</code> to view logs for the specified component.</p>
<p>Common component names include:</p>
<ul>
<li>apiserver</li>
<li>controller</li>
<li>pilot</li>
<li>gateway</li>
<li>console</li>
</ul>
<h3 id="all-in-one-container-deployment">All-in-One Container Deployment</h3>
<p>In all-in-one mode, all Higress log files are stored in the <code dir="auto">/var/log/higress</code> directory inside the container. Use <code dir="auto">docker exec</code> to access the container and view the files directly:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-ai-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/var/log/higress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">ls</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-l</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">cat</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">gateway.log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-ai-gateway bash\x7F\x7Fcd /var/log/higress\x7Fls -l\x7Fcat gateway.log"><div></div></button></div></figure></div>
<h2 id="viewing-access-logs">Viewing Access Logs</h2>
<h3 id="with-built-in-monitoring-suite-enabled">With Built-in Monitoring Suite Enabled</h3>
<p>If you have enabled Higress\u2019s built-in monitoring suite, you can view request logs directly in the Higress Console:</p>
<ol>
<li>Navigate to the Monitoring Dashboard in Higress Console</li>
<li>Click the \u201Cfour small squares\u201D icon in the top-left corner of the monitoring area</li>
<li>Click \u201CHigress Access Logs\u201D to access the access logs dashboard</li>
</ol>
<h3 id="without-built-in-monitoring-suite">Without Built-in Monitoring Suite</h3>
<p>When the built-in monitoring suite is not enabled, access logs are recorded together with runtime logs. Refer to the runtime logs viewing methods above.</p>
<h2 id="adjusting-log-levels">Adjusting Log Levels</h2>
<p>Currently, the main component that may require log level adjustments is the gateway. To temporarily adjust log levels:</p>
<ol>
<li>
<p>Open a bash terminal in the gateway container:</p>
<ul>
<li>K8s deployment: <code dir="auto">kubectl exec -it higress-gateway-xxxx-yyyyy -n higress-system -- bash</code></li>
<li>Docker Compose: <code dir="auto">docker exec -it higress-gateway-1 bash</code></li>
<li>All-in-one container: <code dir="auto">docker exec -it higress-ai-gateway bash</code></li>
</ul>
</li>
<li>
<p>Execute the command: <code dir="auto">curl localhost:15000/logging?module=log_level -X POST</code></p>
</li>
</ol>
<p>Common module names include:</p>
<ul>
<li><code dir="auto">golang</code>: MCP Server module</li>
<li><code dir="auto">wasm</code>: Wasm plugin module</li>
</ul>
<p>Available log levels:</p>
<ul>
<li><code dir="auto">trace</code></li>
<li><code dir="auto">debug</code></li>
<li><code dir="auto">info</code></li>
<li><code dir="auto">warning</code> or <code dir="auto">warn</code> (default)</li>
<li><code dir="auto">error</code></li>
<li><code dir="auto">critical</code></li>
<li><code dir="auto">off</code></li>
</ul>
<p>Note: Log level changes will be reset when the gateway restarts.</p>`,t={title:"Viewing Logs",keywords:["ops","logging","log","monitoring","debug"],description:"Learn how to view and manage logs for Higress components",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/view-logs.md"},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/view-logs.md",i=void 0,r=function(){return`# Viewing Logs

## Viewing Component Logs

### Kubernetes Deployment

Use the \`kubectl logs\` command to view logs. For example:

\`\`\`bash
kubectl logs -n higress-system higress-gateway-5cb7f44768-snfbd
\`\`\`

Note that the \`higress-controller\` pod contains two containers: \`higress-core\` and \`discovery\`, which correspond to the \`controller\` and \`pilot\` components respectively. Use the \`-c\` parameter to specify the container name when viewing logs. For example:

\`\`\`bash
kubectl logs -n higress-system higress-controller-5c768d64d9-m5gtp -c discovery
\`\`\`

### Docker Compose Deployment

In the installation directory, execute \`./bin/logs.sh component-name\` to view logs for the specified component.

Common component names include:

- apiserver
- controller
- pilot
- gateway
- console

### All-in-One Container Deployment

In all-in-one mode, all Higress log files are stored in the \`/var/log/higress\` directory inside the container. Use \`docker exec\` to access the container and view the files directly:

\`\`\`bash
docker exec -it higress-ai-gateway bash

cd /var/log/higress
ls -l
cat gateway.log
\`\`\`

## Viewing Access Logs

### With Built-in Monitoring Suite Enabled

If you have enabled Higress's built-in monitoring suite, you can view request logs directly in the Higress Console:

1. Navigate to the Monitoring Dashboard in Higress Console
2. Click the "four small squares" icon in the top-left corner of the monitoring area
3. Click "Higress Access Logs" to access the access logs dashboard

### Without Built-in Monitoring Suite

When the built-in monitoring suite is not enabled, access logs are recorded together with runtime logs. Refer to the runtime logs viewing methods above.

## Adjusting Log Levels

Currently, the main component that may require log level adjustments is the gateway. To temporarily adjust log levels:

1. Open a bash terminal in the gateway container:
   - K8s deployment: \`kubectl exec -it higress-gateway-xxxx-yyyyy -n higress-system -- bash\`
   - Docker Compose: \`docker exec -it higress-gateway-1 bash\`
   - All-in-one container: \`docker exec -it higress-ai-gateway bash\`

2. Execute the command: \`curl localhost:15000/logging?module=log_level -X POST\`

Common module names include:

- \`golang\`: MCP Server module
- \`wasm\`: Wasm plugin module

Available log levels:

- \`trace\`
- \`debug\`
- \`info\`
- \`warning\` or \`warn\` (default)
- \`error\`
- \`critical\`
- \`off\`

Note: Log level changes will be reset when the gateway restarts.`},a=function(){return e},l=function(){return[{depth:2,slug:"viewing-component-logs",text:"Viewing Component Logs"},{depth:3,slug:"kubernetes-deployment",text:"Kubernetes Deployment"},{depth:3,slug:"docker-compose-deployment",text:"Docker Compose Deployment"},{depth:3,slug:"all-in-one-container-deployment",text:"All-in-One Container Deployment"},{depth:2,slug:"viewing-access-logs",text:"Viewing Access Logs"},{depth:3,slug:"with-built-in-monitoring-suite-enabled",text:"With Built-in Monitoring Suite Enabled"},{depth:3,slug:"without-built-in-monitoring-suite",text:"Without Built-in Monitoring Suite"},{depth:2,slug:"adjusting-log-levels",text:"Adjusting Log Levels"}]},s=c((v,b,w)=>{const{layout:E,...n}=t;return n.file=o,n.url=i,p`${g()}${h(e)}`})});export{s as Content,y as __tla,a as compiledContent,s as default,o as file,t as frontmatter,l as getHeadings,r as rawContent,i as url};
