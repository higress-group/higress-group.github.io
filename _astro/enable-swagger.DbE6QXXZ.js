import{c as d,__tla as c}from"./astro-component.B3fYMMDi.js";import{r as g,m as p,u,__tla as m}from"./constant.B9AWHwfy.js";import{__tla as h}from"./astro/assets-service.DmDXK_Mj.js";let t,r,o,s,l,i,n,_=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h1 id="enable-swagger-ui-of-higress-console">Enable Swagger UI of Higress Console</h1>
<h2 id="k8s-deployment">K8s Deployment</h2>
<p>Add <code dir="auto">--set higress-console.swagger.enabled=true</code> arguments to the helm install or upgrade command.</p>
<h2 id="docker-compose-deployment">Docker Compose Deployment</h2>
<p>Add the following lines into <code dir="auto">compose/console.env</code> file in the installation directory and restart Higress.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">SPRINGDOC_API_DOCS_ENABLED</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">SPRINGDOC_SWAGGER_UI_ENABLED</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="SPRINGDOC_API_DOCS_ENABLED=true\x7FSPRINGDOC_SWAGGER_UI_ENABLED=true"><div></div></button></div></figure></div>
<h2 id="all-in-one-image-deployment">all-in-one Image deployment</h2>
<p>Add <code dir="auto">-e SPRINGDOC_API_DOCS_ENABLED=true -e SPRINGDOC_SWAGGER_UI_ENABLED=true</code> arguments to the <code dir="auto">docker run</code> command.</p>
<h2 id="swagger-ui-url">Swagger UI URL</h2>
<p><code dir="auto">http://&#x3C;higress-console-endpoint>/swagger-ui/index.html</code></p>`,s={title:"Enable Swagger UI of Console",keywords:["ops","console","swagger"],description:"Introduce how to enable Swagger UI of Higress Console",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/enable-swagger.md"},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/enable-swagger.md",n=void 0,i=function(){return`# Enable Swagger UI of Higress Console

## K8s Deployment

Add \`--set higress-console.swagger.enabled=true\` arguments to the helm install or upgrade command.

## Docker Compose Deployment

Add the following lines into \`compose/console.env\` file in the installation directory and restart Higress.

\`\`\`bash
SPRINGDOC_API_DOCS_ENABLED=true
SPRINGDOC_SWAGGER_UI_ENABLED=true
\`\`\`

## all-in-one Image deployment

Add \`-e SPRINGDOC_API_DOCS_ENABLED=true -e SPRINGDOC_SWAGGER_UI_ENABLED=true\` arguments to the \`docker run\` command.

## Swagger UI URL

\`http://<higress-console-endpoint>/swagger-ui/index.html\``},r=function(){return e},l=function(){return[{depth:1,slug:"enable-swagger-ui-of-higress-console",text:"Enable Swagger UI of Higress Console"},{depth:2,slug:"k8s-deployment",text:"K8s Deployment"},{depth:2,slug:"docker-compose-deployment",text:"Docker Compose Deployment"},{depth:2,slug:"all-in-one-image-deployment",text:"all-in-one Image deployment"},{depth:2,slug:"swagger-ui-url",text:"Swagger UI URL"}]},t=d((E,y,D)=>{const{layout:I,...a}=s;return a.file=o,a.url=n,g`${p()}${u(e)}`})});export{t as Content,_ as __tla,r as compiledContent,t as default,o as file,s as frontmatter,l as getHeadings,i as rawContent,n as url};
