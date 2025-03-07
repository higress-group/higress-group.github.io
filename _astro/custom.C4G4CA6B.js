import{c as r,__tla as d}from"./astro-component.CXlaF79K.js";import{r as c,m as u,u as g,__tla as h}from"./constant.Q-PGu8ae.js";import{__tla as m}from"./astro/assets-service.DQopRnBr.js";let s,l,a,i,o,p,t,f=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="edit-the-wasm-file">Edit the Wasm file</h2>
<ol>
<li><a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SDK</a> for developing Higress\u2019 Wasm plugin in Go language</li>
<li><a href="../../user/wasm-go/" referrerpolicy="unsafe-url">Example of plug-in development</a></li>
</ol>
<h2 id="build-the-wasm-image">Build the Wasm image</h2>
<p>You can also choose to build the wasm locally first, and then copy it to the Docker image. This requires you to build the build environment locally first.</p>
<p>The compilation environment requirements are as follows:</p>
<ul>
<li>
<p>Go version: >= 1.18 (need to support generic features)</p>
</li>
<li>
<p>TinyGo version: 0.28.1 (0.28.1 recommended)</p>
</li>
</ul>
<p>The following is an example of local steps to build the <a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">request-block</a> plugin.</p>
<h3 id="step1-compile-wasm">step1. Compile wasm</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">'custommalloc nottinygc_finalizer'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./main.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags=&#x27;custommalloc nottinygc_finalizer&#x27; ./main.go"><div></div></button></div></figure></div>
<h3 id="step2-build-and-push-the-docker-image-of-the-plugin">step2. Build and push the docker image of the plugin</h3>
<p>Use this simple Dockerfile</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">FROM</span><span style="--0:#E1E4E8"> scratch</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">COPY</span><span style="--0:#E1E4E8"> main.wasm plugin.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="FROM scratch\x7FCOPY main.wasm plugin.wasm"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-t</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_registry_hub>/request-block:1.0.0</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_dockerfile></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">push</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_registry_hub>/request-block:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .\x7Fdocker push <your_registry_hub>/request-block:1.0.0"><div></div></button></div></figure></div>
<h2 id="enable-wasm-plugin">Enable Wasm plugin</h2>
<h3 id="using-the-higress-console">Using the Higress console</h3>
<p>Click the <code dir="auto">Create</code> button to create a custom plug-in in the plug-in market, and fill in the Wasm mirror address built above in the mirror address column;</p>
<p>After the creation is complete, click the configuration button of the plug-in card, fill in the configuration of the plug-in (if any), and turn on the switch to take effect.</p>
<p>If the plug-in logic changes, you can build a new image with a different image tag, click the \u201CEdit\u201D button in the upper right menu of the plug-in card, and change the address of the Wasm image to the address of the new version.</p>
<h3 id="using-crds">Using CRDs</h3>
<p>Write the WasmPlugin resource as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"swagger.html"</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://&#x3C;your_registry_hub>/request-block:1.0.0</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># The address of the image built and pushed before</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F   name: request-block\x7F   namespace: higress-system\x7Fspec:\x7F   defaultConfig:\x7F     block_urls:\x7F     - &#x22;swagger.html&#x22;\x7F   url: oci://<your_registry_hub>/request-block:1.0.0 # The address of the image built and pushed before"><div></div></button></div></figure></div>
<p>Use <code dir="auto">kubectl apply -f &#x3C;your-wasm-plugin-yaml></code> to apply the resources.
After the resource takes effect, if the request url carries <code dir="auto">swagger.html</code>, the request will be rejected, for example:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_gateway_address>/api/user/swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl <your_gateway_address>/api/user/swagger.html"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Wed, 09 Nov 2022 12:12:32 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fdate: Wed, 09 Nov 2022 12:12:32 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>`,i={title:"Custom Plugin",keywords:["higress","custom","plugin"],description:"Custom plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/custom.md",t=void 0,p=function(){return`
## Edit the Wasm file

1. [SDK](https://github.com/alibaba/higress/tree/main/plugins/wasm-go) for developing Higress' Wasm plugin in Go language
2. [Example of plug-in development](../user/wasm-go.md)

## Build the Wasm image

You can also choose to build the wasm locally first, and then copy it to the Docker image. This requires you to build the build environment locally first.

The compilation environment requirements are as follows:

- Go version: >= 1.18 (need to support generic features)

- TinyGo version: 0.28.1 (0.28.1 recommended)

The following is an example of local steps to build the [request-block](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block) plugin.

### step1. Compile wasm

\`\`\`bash
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
\`\`\`

### step2. Build and push the docker image of the plugin

Use this simple Dockerfile

\`\`\`Dockerfile
FROM scratch
COPY main.wasm plugin.wasm
\`\`\`

\`\`\`bash
docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .
docker push <your_registry_hub>/request-block:1.0.0
\`\`\`

## Enable Wasm plugin

### Using the Higress console

Click the \`Create\` button to create a custom plug-in in the plug-in market, and fill in the Wasm mirror address built above in the mirror address column;

After the creation is complete, click the configuration button of the plug-in card, fill in the configuration of the plug-in (if any), and turn on the switch to take effect.

If the plug-in logic changes, you can build a new image with a different image tag, click the "Edit" button in the upper right menu of the plug-in card, and change the address of the Wasm image to the address of the new version.

### Using CRDs

Write the WasmPlugin resource as follows:

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
   name: request-block
   namespace: higress-system
spec:
   defaultConfig:
     block_urls:
     - "swagger.html"
   url: oci://<your_registry_hub>/request-block:1.0.0 # The address of the image built and pushed before
\`\`\`

Use \`kubectl apply -f <your-wasm-plugin-yaml>\` to apply the resources.
After the resource takes effect, if the request url carries \`swagger.html\`, the request will be rejected, for example:

\`\`\`bash
curl <your_gateway_address>/api/user/swagger.html
\`\`\`

\`\`\`text
HTTP/1.1 403 Forbidden
date: Wed, 09 Nov 2022 12:12:32 GMT
server: istio-envoy
content-length: 0
\`\`\`
`},l=function(){return e},o=function(){return[{depth:2,slug:"edit-the-wasm-file",text:"Edit the Wasm file"},{depth:2,slug:"build-the-wasm-image",text:"Build the Wasm image"},{depth:3,slug:"step1-compile-wasm",text:"step1. Compile wasm"},{depth:3,slug:"step2-build-and-push-the-docker-image-of-the-plugin",text:"step2. Build and push the docker image of the plugin"},{depth:2,slug:"enable-wasm-plugin",text:"Enable Wasm plugin"},{depth:3,slug:"using-the-higress-console",text:"Using the Higress console"},{depth:3,slug:"using-crds",text:"Using CRDs"}]},s=r((y,v,E)=>{const{layout:b,...n}=i;return n.file=a,n.url=t,c`${u()}${g(e)}`})});export{s as Content,f as __tla,l as compiledContent,s as default,a as file,i as frontmatter,o as getHeadings,p as rawContent,t as url};
