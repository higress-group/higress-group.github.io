import{c,__tla as u}from"./astro-component.m4CCZO6J.js";import{r as d,m as h,u as g,__tla as p}from"./constant.Dh5mkKue.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let t,n,i,a,l,s,o,b=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return p}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="higress-controller">Higress Controller</h2>
<p>The Higress controller is a control plane that connects to Istio to generate Istio API objects and sends them to Istio using the xDS protocol.</p>
<p>To compile the binary that can run in the local environment, execute <code dir="auto">make build</code> in the higress repository directory.</p>
<p>If need to compile the Docker image, please execute <code dir="auto">make docker-build</code> .</p>
<h2 id="higress-gateway">Higress Gateway</h2>
<p>The Higress gateway is a data plane that implements gateway routing and forwarding capabilities.</p>
<h3 id="quick-build">Quick Build</h3>
<p>Suitable scenario: Envoy itself isn\u2019t modified, meaning there is no need to rebuild the envoy binary.</p>
<p>Steps:</p>
<ol>
<li>Enter the higress repo in the terminal.</li>
<li>Execute <code dir="auto">make build-gateway-local</code> to start building the image of Higress Gateway.</li>
<li>The image tag will be displayed in the terminal after the build finishes.</li>
</ol>
<h3 id="full-build">Full Build</h3>
<p>Suitable scenario: The envoy binary needs to be rebuilt.</p>
<p>Steps:</p>
<ol>
<li>Enter the higress repo in the terminal.</li>
<li>Execute <code dir="auto">cd external/proxy; BUILD_WITH_CONTAINER=1 make test_release</code> to build the envoy binary.</li>
<li>Once the build finishes, the built artifact, envoy.tar.gz, will be placed in the <code dir="auto">external/package</code> folder in the higress repo.</li>
<li>Rename the <code dir="auto">envoy.tar.gz</code> to <code dir="auto">envoy-amd64.tar.gz</code> or <code dir="auto">envoy-arm64.tar.gz</code>, based on your local architecture.</li>
<li>If you want to build a multi-arch image, please re-do step 2 and 3 with another architecture, and copy the renamed built artifact here.</li>
<li>Follow the steps mentioned above in the \u201CQuick Build\u201D section to build an Higress Gateway image.</li>
</ol>`,a={title:"Component Compilation Instructions",keywords:["higress","architecture"],description:"Higress Component Compilation Instructions.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/architecture.md",o=void 0,s=function(){return`
# Component Compilation Instructions

## Higress Controller

The Higress controller is a control plane that connects to Istio to generate Istio API objects and sends them to Istio using the xDS protocol.

To compile the binary that can run in the local environment, execute \`make build\` in the higress repository directory.

If need to compile the Docker image, please execute \`make docker-build\` .

## Higress Gateway

The Higress gateway is a data plane that implements gateway routing and forwarding capabilities.

### Quick Build

Suitable scenario: Envoy itself isn't modified, meaning there is no need to rebuild the envoy binary.

Steps:
1. Enter the higress repo in the terminal.
2. Execute \`make build-gateway-local\` to start building the image of Higress Gateway.
3. The image tag will be displayed in the terminal after the build finishes.

### Full Build

Suitable scenario: The envoy binary needs to be rebuilt.

Steps:
1. Enter the higress repo in the terminal.
2. Execute \`cd external/proxy; BUILD_WITH_CONTAINER=1 make test_release\` to build the envoy binary.
3. Once the build finishes, the built artifact, envoy.tar.gz, will be placed in the \`external/package\` folder in the higress repo.
4. Rename the \`envoy.tar.gz\` to \`envoy-amd64.tar.gz\` or \`envoy-arm64.tar.gz\`, based on your local architecture.
5. If you want to build a multi-arch image, please re-do step 2 and 3 with another architecture, and copy the renamed built artifact here.
6. Follow the steps mentioned above in the "Quick Build" section to build an Higress Gateway image.`},n=function(){return e},l=function(){return[{depth:2,slug:"higress-controller",text:"Higress Controller"},{depth:2,slug:"higress-gateway",text:"Higress Gateway"},{depth:3,slug:"quick-build",text:"Quick Build"},{depth:3,slug:"full-build",text:"Full Build"}]},t=c((y,f,w)=>{const{layout:_,...r}=a;return r.file=i,r.url=o,d`${h()}${g(e)}`})});export{t as Content,b as __tla,n as compiledContent,t as default,i as file,a as frontmatter,l as getHeadings,s as rawContent,o as url};
