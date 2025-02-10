import{c as d,__tla as c}from"./astro-component.CXlaF79K.js";import{r,m as u,u as y,__tla as g}from"./constant.BASalAQV.js";import{__tla as v}from"./astro/assets-service.DQopRnBr.js";let e,l,a,t,p,o,i,m=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u7F16\u8F91-wasm-\u6587\u4EF6">\u7F16\u8F91 Wasm \u6587\u4EF6</h2>
<ol>
<li>\u7528\u4E8E\u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 Higress \u7684 Wasm \u63D2\u4EF6\u7684<a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SDK</a></li>
<li><a href="../../user/wasm-go/" referrerpolicy="unsafe-url">\u63D2\u4EF6\u5F00\u53D1\u793A\u4F8B</a></li>
</ol>
<h2 id="\u6784\u5EFA-wasm-\u955C\u50CF">\u6784\u5EFA Wasm \u955C\u50CF</h2>
<p>\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u5148\u5728\u672C\u5730\u5C06 wasm \u6784\u5EFA\u51FA\u6765\uFF0C\u518D\u62F7\u8D1D\u5230 Docker \u955C\u50CF\u4E2D\u3002\u8FD9\u8981\u6C42\u4F60\u8981\u5148\u5728\u672C\u5730\u642D\u5EFA\u6784\u5EFA\u73AF\u5883\u3002</p>
<p>\u7F16\u8BD1\u73AF\u5883\u8981\u6C42\u5982\u4E0B\uFF1A</p>
<ul>
<li>
<p>Go \u7248\u672C: >= 1.18\uFF08\u9700\u8981\u652F\u6301\u6CDB\u578B\u7279\u6027\uFF09</p>
</li>
<li>
<p>TinyGo \u7248\u672C: >= 0.28.1\uFF08\u5EFA\u8BAE\u4F7F\u7528 0.28.1 \uFF09</p>
</li>
</ul>
<p>\u4E0B\u9762\u662F\u672C\u5730\u6B65\u9AA4\u6784\u5EFA <a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">request-block</a> \u63D2\u4EF6\u7684\u4F8B\u5B50\u3002</p>
<h3 id="step1-\u7F16\u8BD1-wasm">step1. \u7F16\u8BD1 wasm</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">'custommalloc nottinygc_finalizer'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./main.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags=&#x27;custommalloc nottinygc_finalizer&#x27; ./main.go"><div></div></button></div></figure></div>
<p>\u8BE6\u7EC6\u7684\u7F16\u8BD1\u8BF4\u660E\uFF0C\u5305\u62EC\u8981\u4F7F\u7528\u66F4\u590D\u6742\u7684 Header \u72B6\u6001\u7BA1\u7406\u673A\u5236\uFF0C\u8BF7\u53C2\u8003<a href="https://higress.cn/docs/latest/user/wasm-go/#3-%E7%BC%96%E8%AF%91%E7%94%9F%E6%88%90-wasm-%E6%96%87%E4%BB%B6" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"> Go \u5F00\u53D1\u63D2\u4EF6\u7684\u6700\u4F73\u5B9E\u8DF5</a>\u3002</p>
<h3 id="step2-\u6784\u5EFA\u5E76\u63A8\u9001\u63D2\u4EF6\u7684-docker-\u955C\u50CF">step2. \u6784\u5EFA\u5E76\u63A8\u9001\u63D2\u4EF6\u7684 docker \u955C\u50CF</h3>
<p>\u4F7F\u7528\u8FD9\u4EFD\u7B80\u5355\u7684 Dockerfile</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">FROM</span><span style="--0:#E1E4E8"> scratch</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">COPY</span><span style="--0:#E1E4E8"> main.wasm plugin.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="FROM scratch\x7FCOPY main.wasm plugin.wasm"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-t</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_registry_hub>/request-block:1.0.0</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_dockerfile></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">push</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_registry_hub>/request-block:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .\x7Fdocker push <your_registry_hub>/request-block:1.0.0"><div></div></button></div></figure></div>
<h2 id="\u751F\u6548-wasm-\u63D2\u4EF6">\u751F\u6548 Wasm \u63D2\u4EF6</h2>
<h3 id="\u4F7F\u7528-higress-\u63A7\u5236\u53F0">\u4F7F\u7528 Higress \u63A7\u5236\u53F0</h3>
<p>\u5728\u63D2\u4EF6\u5E02\u573A\u4E2D\u521B\u5EFA\u70B9\u51FB<code dir="auto">\u521B\u5EFA</code>\u6309\u94AE\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u5728\u955C\u50CF\u5730\u5740\u4E00\u680F\u4E2D\u586B\u5165\u4E0A\u9762\u6784\u5EFA\u51FA\u7684 Wasm \u955C\u50CF\u5730\u5740\u5373\u53EF\uFF1B</p>
<p>\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u70B9\u51FB\u63D2\u4EF6\u5361\u7247\u7684\u914D\u7F6E\u6309\u94AE\uFF0C\u586B\u5165\u63D2\u4EF6\u7684\u914D\u7F6E\uFF08\u5982\u679C\u6709\uFF09\uFF0C\u6253\u5F00\u5F00\u542F\u5F00\u5173\u5C31\u751F\u6548\u4E86\u3002</p>
<p>\u5982\u679C\u63D2\u4EF6\u903B\u8F91\u53D1\u751F\u4E86\u53D8\u66F4\uFF0C\u53EF\u4EE5\u6784\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF\uFF0C\u5E76\u4F7F\u7528\u4E0D\u540C\u7684\u955C\u50CF tag\uFF0C\u70B9\u63D2\u4EF6\u5361\u7247\u53F3\u4E0A\u65B9\u83DC\u5355\u4E2D\u7684<code dir="auto">\u7F16\u8F91</code>\u6309\u94AE\uFF0C\u5C06 Wasm \u955C\u50CF\u5730\u5740\u4FEE\u6539\u4E3A\u65B0\u7248\u672C\u7684\u5730\u5740\u5373\u53EF\u3002</p>
<h3 id="\u4F7F\u7528-crd">\u4F7F\u7528 CRD</h3>
<p>\u7F16\u5199 WasmPlugin \u8D44\u6E90\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"swagger.html"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://&#x3C;your_registry_hub>/request-block:1.0.0</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u4E4B\u524D\u6784\u5EFA\u548C\u63A8\u9001\u7684 image \u5730\u5740</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: request-block\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    block_urls:\x7F    - &#x22;swagger.html&#x22;\x7F  url: oci://<your_registry_hub>/request-block:1.0.0  # \u4E4B\u524D\u6784\u5EFA\u548C\u63A8\u9001\u7684 image \u5730\u5740"><div></div></button></div></figure></div>
<p>\u4F7F\u7528 <code dir="auto">kubectl apply -f &#x3C;your-wasm-plugin-yaml></code> \u4F7F\u8D44\u6E90\u751F\u6548\u3002
\u8D44\u6E90\u751F\u6548\u540E\uFF0C\u5982\u679C\u8BF7\u6C42url\u643A\u5E26 <code dir="auto">swagger.html</code>, \u5219\u8FD9\u4E2A\u8BF7\u6C42\u5C31\u4F1A\u88AB\u62D2\u7EDD\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;your_gateway_address>/api/user/swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl <your_gateway_address>/api/user/swagger.html"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Wed, 09 Nov 2022 12:12:32 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fdate: Wed, 09 Nov 2022 12:12:32 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>`,t={title:"\u81EA\u5B9A\u4E49\u63D2\u4EF6",keywords:["higress","custom","plugin"],description:"\u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/custom.md",i=void 0,o=function(){return`
## \u7F16\u8F91 Wasm \u6587\u4EF6

1. \u7528\u4E8E\u4F7F\u7528 Go \u8BED\u8A00\u5F00\u53D1 Higress \u7684 Wasm \u63D2\u4EF6\u7684[SDK](https://github.com/alibaba/higress/tree/main/plugins/wasm-go)
2. [\u63D2\u4EF6\u5F00\u53D1\u793A\u4F8B](../user/wasm-go.md)

## \u6784\u5EFA Wasm \u955C\u50CF

\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u5148\u5728\u672C\u5730\u5C06 wasm \u6784\u5EFA\u51FA\u6765\uFF0C\u518D\u62F7\u8D1D\u5230 Docker \u955C\u50CF\u4E2D\u3002\u8FD9\u8981\u6C42\u4F60\u8981\u5148\u5728\u672C\u5730\u642D\u5EFA\u6784\u5EFA\u73AF\u5883\u3002

\u7F16\u8BD1\u73AF\u5883\u8981\u6C42\u5982\u4E0B\uFF1A

- Go \u7248\u672C: >= 1.18\uFF08\u9700\u8981\u652F\u6301\u6CDB\u578B\u7279\u6027\uFF09

- TinyGo \u7248\u672C: >= 0.28.1\uFF08\u5EFA\u8BAE\u4F7F\u7528 0.28.1 \uFF09

\u4E0B\u9762\u662F\u672C\u5730\u6B65\u9AA4\u6784\u5EFA [request-block](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/request-block) \u63D2\u4EF6\u7684\u4F8B\u5B50\u3002

### step1. \u7F16\u8BD1 wasm

\`\`\`bash
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
\`\`\`

\u8BE6\u7EC6\u7684\u7F16\u8BD1\u8BF4\u660E\uFF0C\u5305\u62EC\u8981\u4F7F\u7528\u66F4\u590D\u6742\u7684 Header \u72B6\u6001\u7BA1\u7406\u673A\u5236\uFF0C\u8BF7\u53C2\u8003[ Go \u5F00\u53D1\u63D2\u4EF6\u7684\u6700\u4F73\u5B9E\u8DF5](https://higress.cn/docs/latest/user/wasm-go/#3-%E7%BC%96%E8%AF%91%E7%94%9F%E6%88%90-wasm-%E6%96%87%E4%BB%B6)\u3002

### step2. \u6784\u5EFA\u5E76\u63A8\u9001\u63D2\u4EF6\u7684 docker \u955C\u50CF

\u4F7F\u7528\u8FD9\u4EFD\u7B80\u5355\u7684 Dockerfile

\`\`\`Dockerfile
FROM scratch
COPY main.wasm plugin.wasm
\`\`\`

\`\`\`bash
docker build -t <your_registry_hub>/request-block:1.0.0 -f <your_dockerfile> .
docker push <your_registry_hub>/request-block:1.0.0
\`\`\`

## \u751F\u6548 Wasm \u63D2\u4EF6

### \u4F7F\u7528 Higress \u63A7\u5236\u53F0

\u5728\u63D2\u4EF6\u5E02\u573A\u4E2D\u521B\u5EFA\u70B9\u51FB\`\u521B\u5EFA\`\u6309\u94AE\uFF0C\u5C31\u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u5728\u955C\u50CF\u5730\u5740\u4E00\u680F\u4E2D\u586B\u5165\u4E0A\u9762\u6784\u5EFA\u51FA\u7684 Wasm \u955C\u50CF\u5730\u5740\u5373\u53EF\uFF1B

\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u70B9\u51FB\u63D2\u4EF6\u5361\u7247\u7684\u914D\u7F6E\u6309\u94AE\uFF0C\u586B\u5165\u63D2\u4EF6\u7684\u914D\u7F6E\uFF08\u5982\u679C\u6709\uFF09\uFF0C\u6253\u5F00\u5F00\u542F\u5F00\u5173\u5C31\u751F\u6548\u4E86\u3002

\u5982\u679C\u63D2\u4EF6\u903B\u8F91\u53D1\u751F\u4E86\u53D8\u66F4\uFF0C\u53EF\u4EE5\u6784\u5EFA\u4E00\u4E2A\u65B0\u7684\u955C\u50CF\uFF0C\u5E76\u4F7F\u7528\u4E0D\u540C\u7684\u955C\u50CF tag\uFF0C\u70B9\u63D2\u4EF6\u5361\u7247\u53F3\u4E0A\u65B9\u83DC\u5355\u4E2D\u7684\`\u7F16\u8F91\`\u6309\u94AE\uFF0C\u5C06 Wasm \u955C\u50CF\u5730\u5740\u4FEE\u6539\u4E3A\u65B0\u7248\u672C\u7684\u5730\u5740\u5373\u53EF\u3002

### \u4F7F\u7528 CRD

\u7F16\u5199 WasmPlugin \u8D44\u6E90\u5982\u4E0B\uFF1A

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
  url: oci://<your_registry_hub>/request-block:1.0.0  # \u4E4B\u524D\u6784\u5EFA\u548C\u63A8\u9001\u7684 image \u5730\u5740
\`\`\`

\u4F7F\u7528 \`kubectl apply -f <your-wasm-plugin-yaml>\` \u4F7F\u8D44\u6E90\u751F\u6548\u3002
\u8D44\u6E90\u751F\u6548\u540E\uFF0C\u5982\u679C\u8BF7\u6C42url\u643A\u5E26 \`swagger.html\`, \u5219\u8FD9\u4E2A\u8BF7\u6C42\u5C31\u4F1A\u88AB\u62D2\u7EDD\uFF0C\u4F8B\u5982\uFF1A

\`\`\`bash
curl <your_gateway_address>/api/user/swagger.html
\`\`\`

\`\`\`text
HTTP/1.1 403 Forbidden
date: Wed, 09 Nov 2022 12:12:32 GMT
server: istio-envoy
content-length: 0
\`\`\`
`},l=function(){return s},p=function(){return[{depth:2,slug:"\u7F16\u8F91-wasm-\u6587\u4EF6",text:"\u7F16\u8F91 Wasm \u6587\u4EF6"},{depth:2,slug:"\u6784\u5EFA-wasm-\u955C\u50CF",text:"\u6784\u5EFA Wasm \u955C\u50CF"},{depth:3,slug:"step1-\u7F16\u8BD1-wasm",text:"step1. \u7F16\u8BD1 wasm"},{depth:3,slug:"step2-\u6784\u5EFA\u5E76\u63A8\u9001\u63D2\u4EF6\u7684-docker-\u955C\u50CF",text:"step2. \u6784\u5EFA\u5E76\u63A8\u9001\u63D2\u4EF6\u7684 docker \u955C\u50CF"},{depth:2,slug:"\u751F\u6548-wasm-\u63D2\u4EF6",text:"\u751F\u6548 Wasm \u63D2\u4EF6"},{depth:3,slug:"\u4F7F\u7528-higress-\u63A7\u5236\u53F0",text:"\u4F7F\u7528 Higress \u63A7\u5236\u53F0"},{depth:3,slug:"\u4F7F\u7528-crd",text:"\u4F7F\u7528 CRD"}]},e=d((E,h,f)=>{const{layout:b,...n}=t;return n.file=a,n.url=i,r`${u()}${y(s)}`})});export{e as Content,m as __tla,l as compiledContent,e as default,a as file,t as frontmatter,p as getHeadings,o as rawContent,i as url};
