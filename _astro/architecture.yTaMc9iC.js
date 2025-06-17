import{c as r,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as p,m as u,u as h,__tla as g}from"./constant.CqGXQvIp.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let t,n,i,o,l,d,s,m=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h2 id="higress-controller">Higress Controller</h2>
<p>The Higress controller is a control plane that connects to Istio to generate Istio API objects and sends them to Istio using the xDS protocol.</p>
<p>To compile the binary that can run in the local environment, execute <code dir="auto">make build</code> in the higress repository directory.</p>
<p>If you need to compile the Docker image, please execute <code dir="auto">make docker-build</code>. The Istio pilot image used by Higress Controller is compiled using <code dir="auto">make build-istio-local</code>.</p>
<h3 id="tips-for-beginners">Tips for beginners:</h3>
<p>If you encounter failures when cloning subprojects using HTTPS on a Linux server, such as connection timeouts causing dependency download errors, you can try modifying the submodule configuration to use SSH and configure GOPROXY:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Prerequisite: you have already configured your local public key in GitHub</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Change HTTPS method to SSH method</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sed</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'s|https://github.com/|git@github.com:|g'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">.gitmodules</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Synchronize the configuration in .git/config</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">submodule</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">sync</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Modify the GOPROXY configuration in Makefile.core.mk</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">#export GOPROXY ?= https://proxy.golang.org,direct</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> GOPROXY </span><span style="--0:#F97583">?</span><span style="--0:#E1E4E8">= https://goproxy.cn,direct</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sed -i &#x27;s|https://github.com/|git@github.com:|g&#x27; .gitmodules\x7Fgit submodule sync\x7Fexport GOPROXY ?= https://goproxy.cn,direct"><div></div></button></div></figure></div>
<p>Additionally, when developing on Windows, to facilitate code development, you can execute the following steps to complete the dependency configuration:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># If you cannot clone submodules using HTTPS, modify the .gitmodules configuration as above and execute git submodule sync</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Initialize submodules (if you find that some submodules are not cloned when executing this command, you can add --force):</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">submodule</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">update</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--init</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Using the Git Bash tool, go to the tools/hack directory and execute the following command to complete dependency loading:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">prebuild.sh</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git submodule update --init\x7Fbash -x prebuild.sh"><div></div></button></div></figure></div>
<h2 id="higress-gateway">Higress Gateway</h2>
<p>The Higress gateway is a data plane program that implements gateway routing and forwarding capabilities.</p>
<h3 id="quick-build">Quick Build</h3>
<p>Applicable scenario: When you haven\u2019t modified the Envoy core, meaning there\u2019s no need to recompile the Envoy binary.</p>
<p>Build steps:</p>
<ol>
<li>Navigate to the higress repository directory in the command line;</li>
<li>Execute the <code dir="auto">make build-gateway-local</code> command to build the Higress Gateway image;</li>
<li>After the build is complete, the image tag will be displayed.</li>
</ol>
<h3 id="full-build">Full Build</h3>
<p>Applicable scenario: When you need to recompile the Envoy core.</p>
<p>Build steps:</p>
<ol>
<li>Navigate to the higress repository directory in the command line;</li>
<li>Execute the <code dir="auto">make build-envoy</code> command to build the Envoy core;</li>
<li>After the build is complete, the generated Envoy artifact file (a tar.gz compressed package) will be placed in the <code dir="auto">external/package</code> subdirectory of the higress repository;</li>
<li>Upload the tar.gz file to OSS or another file download server, making sure the filename ends with the architecture name, for example, <code dir="auto">envoy-amd64.tar.gz</code> or <code dir="auto">envoy-arm64.tar.gz</code>;</li>
<li>Set the environment variable <code dir="auto">ENVOY_PACKAGE_URL_PATTERN</code> to the download URL of the Envoy artifact file, and follow the steps in the Quick Build section above to build the Higress Gateway image.</li>
</ol>`,o={title:"Component Compilation Instructions",keywords:["higress","architecture"],description:"Higress Component Compilation Instructions.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/dev/architecture.md"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/architecture.md",s=void 0,d=function(){return`
# Component Compilation Instructions

## Higress Controller

The Higress controller is a control plane that connects to Istio to generate Istio API objects and sends them to Istio using the xDS protocol.

To compile the binary that can run in the local environment, execute \`make build\` in the higress repository directory.

If you need to compile the Docker image, please execute \`make docker-build\`. The Istio pilot image used by Higress Controller is compiled using \`make build-istio-local\`.

### Tips for beginners:

If you encounter failures when cloning subprojects using HTTPS on a Linux server, such as connection timeouts causing dependency download errors, you can try modifying the submodule configuration to use SSH and configure GOPROXY:

\`\`\`bash
# Prerequisite: you have already configured your local public key in GitHub
# Change HTTPS method to SSH method
sed -i 's|https://github.com/|git@github.com:|g' .gitmodules
# Synchronize the configuration in .git/config
git submodule sync
# Modify the GOPROXY configuration in Makefile.core.mk
#export GOPROXY ?= https://proxy.golang.org,direct
export GOPROXY ?= https://goproxy.cn,direct
\`\`\`

Additionally, when developing on Windows, to facilitate code development, you can execute the following steps to complete the dependency configuration:

\`\`\`bash
# If you cannot clone submodules using HTTPS, modify the .gitmodules configuration as above and execute git submodule sync
# Initialize submodules (if you find that some submodules are not cloned when executing this command, you can add --force):
git submodule update --init
# Using the Git Bash tool, go to the tools/hack directory and execute the following command to complete dependency loading:
bash -x prebuild.sh
\`\`\`

## Higress Gateway

The Higress gateway is a data plane program that implements gateway routing and forwarding capabilities.

### Quick Build

Applicable scenario: When you haven't modified the Envoy core, meaning there's no need to recompile the Envoy binary.

Build steps:
1. Navigate to the higress repository directory in the command line;
2. Execute the \`make build-gateway-local\` command to build the Higress Gateway image;
3. After the build is complete, the image tag will be displayed.

### Full Build

Applicable scenario: When you need to recompile the Envoy core.

Build steps:
1. Navigate to the higress repository directory in the command line;
2. Execute the \`make build-envoy\` command to build the Envoy core;
3. After the build is complete, the generated Envoy artifact file (a tar.gz compressed package) will be placed in the \`external/package\` subdirectory of the higress repository;
4. Upload the tar.gz file to OSS or another file download server, making sure the filename ends with the architecture name, for example, \`envoy-amd64.tar.gz\` or \`envoy-arm64.tar.gz\`;
5. Set the environment variable \`ENVOY_PACKAGE_URL_PATTERN\` to the download URL of the Envoy artifact file, and follow the steps in the Quick Build section above to build the Higress Gateway image.`},n=function(){return e},l=function(){return[{depth:2,slug:"higress-controller",text:"Higress Controller"},{depth:3,slug:"tips-for-beginners",text:"Tips for beginners:"},{depth:2,slug:"higress-gateway",text:"Higress Gateway"},{depth:3,slug:"quick-build",text:"Quick Build"},{depth:3,slug:"full-build",text:"Full Build"}]},t=r((v,b,f)=>{const{layout:E,...a}=o;return a.file=i,a.url=s,p`${u()}${h(e)}`})});export{t as Content,m as __tla,n as compiledContent,t as default,i as file,o as frontmatter,l as getHeadings,d as rawContent,s as url};
