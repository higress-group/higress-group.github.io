import{c,__tla as d}from"./astro-component.m4CCZO6J.js";import{r as p,m as g,u as h,__tla as u}from"./constant.DSwpUafx.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let t,r,s,o,i,l,n,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<p>Docker Compose is a tool for defining and running multi-container Docker applications. With it, we can use YAML files to deploy Higress gateway standalone without a K8s cluster.</p>
<blockquote>
<p><strong>Note</strong></p>
<p>The Standalone mode has not been extensively used in large-scale production environments. It is currently mainly used for local deployment and testing scenarios. For production deployments, the <a href="https://higress.io/en/docs/ops/deploy-by-helm" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Cloud-Native mode</a> is more recommended.</p>
</blockquote>
<h2 id="installing-higress">Installing Higress</h2>
<p>When deploying with Docker Compose, the Higress gateway consists of the following services:</p>
<ul>
<li>apiserver: Infrastructure service. Responsible for simulating the K8s API Server.</li>
<li>controller: Control plane service one. Responsible for collecting and integrating all configuration data and service lists.</li>
<li>pilot: Control plane service two. Responsible for distributing gateway routing data.</li>
<li>gateway: Data plane service. Responsible for handling actual gateway requests.</li>
<li>console: Higress gateway control console.</li>
</ul>
<h3 id="installation-command">Installation Command</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> [DESTINATION] [OPTIONS...]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- [DESTINATION] [OPTIONS...]"><div></div></button></div></figure></div>
<h3 id="installation-parameters">Installation Parameters</h3>





















































































<table><thead><tr><th><strong>Parameter Name</strong></th><th><strong>Description</strong></th><th><strong>Default Value</strong></th></tr></thead><tbody><tr><td>DESTINATION</td><td>Target installation directory</td><td>./higress</td></tr><tr><td>-a<br>\u2014auto-run</td><td>Automatically start Higress gateway after configuration</td><td>None</td></tr><tr><td>-c CONFIG_URL<br>\u2014config-url CONFIG_URL</td><td>Configuration service URL.<br>- For standalone Nacos service (version not lower than 2.0.0), URL format: nacos://192.168.0.1:8848<br>- For saving configuration on local disk, URL format: file:///opt/higress/conf</td><td>None</td></tr><tr><td>\u2014use-builtin-nacos</td><td>Use built-in Nacos service. Not recommended for production environments. If this parameter is set, there\u2019s no need to set the <code dir="auto">-c</code> parameter</td><td>None</td></tr><tr><td>\u2014nacos-ns=NACOS_NAMESPACE</td><td>Nacos namespace ID for storing Higress configuration</td><td>higress-system</td></tr><tr><td>\u2014nacos-username=NACOS_USERNAME</td><td>Username for accessing Nacos. Only used when Nacos has authentication enabled</td><td>None</td></tr><tr><td>\u2014nacos-password=NACOS_PASSWORD</td><td>Password for accessing Nacos. Only used when Nacos has authentication enabled</td><td>None</td></tr><tr><td>-k KEY<br>\u2014data-enc-key=KEY</td><td>Key for encrypting sensitive configuration data. Must be 32 characters long. If not set, Higress will automatically generate a random key. For cluster deployment, this must be set</td><td>Random string</td></tr><tr><td>\u2014nacos-port=NACOS_PORT</td><td>Port on which the built-in NACOS service listens locally on the server</td><td>8848</td></tr><tr><td>\u2014gateway-http-port=GATEWAY_HTTP_PORT</td><td>HTTP port on which Higress Gateway listens locally on the server</td><td>80</td></tr><tr><td>\u2014gateway-https-port=GATEWAY_HTTPS_PORT</td><td>HTTPS port on which Higress Gateway listens locally on the server</td><td>443</td></tr><tr><td>\u2014gateway-metrics-port=GATEWAY_METRIC_PORT</td><td>Port on which Higress Gateway exposes metrics locally on the server</td><td>15020</td></tr><tr><td>\u2014console-port=CONSOLE_PORT</td><td>Port on which Higress Console listens locally on the server</td><td>8080</td></tr><tr><td>-r<br>\u2014rerun</td><td>Re-execute the configuration process after Higress has been configured</td><td>None</td></tr><tr><td>-h<br>\u2014help</td><td>Display help information</td><td>None</td></tr></tbody></table>`,o={title:"Standalone Deployment with Docker Compose",keywords:["deploy","docker compose","docker","ops"],description:"How to deploy Higress standalone using Docker Compose",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/deploy-by-docker-compose.md"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/deploy-by-docker-compose.md",n=void 0,l=function(){return`
# Standalone Deployment with Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With it, we can use YAML files to deploy Higress gateway standalone without a K8s cluster.

> **Note**
> 
> The Standalone mode has not been extensively used in large-scale production environments. It is currently mainly used for local deployment and testing scenarios. For production deployments, the [Cloud-Native mode](https://higress.io/en/docs/ops/deploy-by-helm) is more recommended.

## Installing Higress

When deploying with Docker Compose, the Higress gateway consists of the following services:
- apiserver: Infrastructure service. Responsible for simulating the K8s API Server.
- controller: Control plane service one. Responsible for collecting and integrating all configuration data and service lists.
- pilot: Control plane service two. Responsible for distributing gateway routing data.
- gateway: Data plane service. Responsible for handling actual gateway requests.
- console: Higress gateway control console.

### Installation Command

\`\`\`shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- [DESTINATION] [OPTIONS...]
\`\`\`

### Installation Parameters

|**Parameter Name**                                        |**Description**                                                                                                        |**Default Value**|  
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|--------------|  
|DESTINATION                                             |Target installation directory                                                                                  |./higress     |  
|-a<br/>--auto-run                                          |Automatically start Higress gateway after configuration                                                        |None          |  
|-c CONFIG_URL<br/>--config-url CONFIG_URL                  |Configuration service URL.<br/>- For standalone Nacos service (version not lower than 2.0.0), URL format: nacos://192.168.0.1:8848<br/>- For saving configuration on local disk, URL format: file:///opt/higress/conf|None          |  
|--use-builtin-nacos                                     |Use built-in Nacos service. Not recommended for production environments. If this parameter is set, there's no need to set the \`-c\` parameter|None          |  
|--nacos-ns=NACOS_NAMESPACE                              |Nacos namespace ID for storing Higress configuration                                                           |higress-system|  
|--nacos-username=NACOS_USERNAME                         |Username for accessing Nacos. Only used when Nacos has authentication enabled                                  |None          |  
|--nacos-password=NACOS_PASSWORD                         |Password for accessing Nacos. Only used when Nacos has authentication enabled                                  |None          |  
|-k KEY<br/>--data-enc-key=KEY                              |Key for encrypting sensitive configuration data. Must be 32 characters long. If not set, Higress will automatically generate a random key. For cluster deployment, this must be set|Random string  |  
|--nacos-port=NACOS_PORT                                 |Port on which the built-in NACOS service listens locally on the server                                         |8848          |  
|--gateway-http-port=GATEWAY_HTTP_PORT                   |HTTP port on which Higress Gateway listens locally on the server                                               |80            |  
|--gateway-https-port=GATEWAY_HTTPS_PORT                 |HTTPS port on which Higress Gateway listens locally on the server                                              |443           |  
|--gateway-metrics-port=GATEWAY_METRIC_PORT              |Port on which Higress Gateway exposes metrics locally on the server                                            |15020         |  
|--console-port=CONSOLE_PORT                             |Port on which Higress Console listens locally on the server                                                    |8080          |  
|-r<br/>--rerun                                             |Re-execute the configuration process after Higress has been configured                                          |None          |  
|-h<br/>--help                                              |Display help information                                                                                       |None          |`},r=function(){return e},i=function(){return[{depth:2,slug:"installing-higress",text:"Installing Higress"},{depth:3,slug:"installation-command",text:"Installation Command"},{depth:3,slug:"installation-parameters",text:"Installation Parameters"}]},t=c((f,N,b)=>{const{layout:w,...a}=o;return a.file=s,a.url=n,p`${g()}${h(e)}`})});export{t as Content,m as __tla,r as compiledContent,t as default,s as file,o as frontmatter,i as getHeadings,l as rawContent,n as url};
