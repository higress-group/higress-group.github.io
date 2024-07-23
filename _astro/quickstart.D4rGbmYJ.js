import{c as o,__tla as c}from"./astro-component.DeDyO-JF.js";import{r,m as E,u as y,__tla as v}from"./constant.BHGk4wmw.js";import{__tla as h}from"./astro/assets-service.B3vdYoe2.js";let a,i,e,n,l,d,p,u=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u73AF\u5883\u4E00\u5728-k8s-\u4E2D\u4F7F\u7528">\u73AF\u5883\u4E00\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528</h2>
<h3 id="\u9636\u6BB5\u4E00\u5B89\u88C5">\u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5</h3>
<h4 id="\u573A\u666F\u4E00\u5728\u6807\u51C6-k8s-\u96C6\u7FA4\u4E2D\u4F7F\u7528">\u573A\u666F\u4E00\uFF1A\u5728\u6807\u51C6 K8s \u96C6\u7FA4\u4E2D\u4F7F\u7528</h4>
<p><strong>Helm \u5B89\u88C5\u547D\u4EE4</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
<blockquote>
<p>\u4E2D\u56FD\u5927\u9646\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\u52A0\u901F\u5B89\u88C5\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.cn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.cn/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.cn/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.cn https://higress.cn/helm-charts\x7Fhelm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes"><div></div></button></div></figure></div>
</blockquote>
<p>\u83B7\u53D6 Higress Gateway \u7684 LoadBalancer IP\uFF0C\u5E76\u8BB0\u5F55\u4E0B\u6765\u3002\u540E\u7EED\u53EF\u4EE5\u901A\u8FC7\u8BE5 IP \u7684 80 \u548C 443 \u7AEF\u53E3\u8BBF\u95EE Higress Gateway\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">jsonpath='{.status.loadBalancer.ingress[0].ip}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get svc -n higress-system higress-gateway -o jsonpath=&#x27;{.status.loadBalancer.ingress[0].ip}&#x27;"><div></div></button></div></figure></div>
<p><strong>\u5907\u6CE8</strong></p>
<p>\u5982\u679C LoadBalancer IP \u83B7\u53D6\u4E0D\u5230\uFF0C\u8BF4\u660E\u60A8\u5F53\u524D\u7684 K8s \u96C6\u7FA4\u4E0D\u652F\u6301 LoadBalancer \u7C7B\u578B\u7684 Service\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u65B9\u6848\uFF1A</p>
<ol>
<li>\u4F7F\u7528\u4E91\u5382\u5546\u63D0\u4F9B\u7684 K8s \u670D\u52A1\uFF0C\u4F8B\u5982<a href="https://www.aliyun.com/product/kubernetes" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u963F\u91CC\u4E91 ACK</a></li>
<li>\u53C2\u8003<a href="https://higress.io/zh-cn/docs/user/configurations" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8FD0\u7EF4\u53C2\u6570\u914D\u7F6E</a>\uFF0C\u5F00\u542F<code dir="auto">higress-core.gateway.hostNetwork</code>\uFF0C\u8BA9 Higress \u76D1\u542C\u672C\u673A\u7AEF\u53E3\uFF0C\u518D\u901A\u8FC7\u5176\u4ED6\u8F6F/\u786C\u8D1F\u8F7D\u5747\u8861\u5668\u8F6C\u53D1\u7ED9\u56FA\u5B9A\u673A\u5668 IP</li>
<li>\uFF08\u751F\u4EA7\u4E0D\u5EFA\u8BAE\uFF09\u4F7F\u7528\u5F00\u6E90\u7684\u8D1F\u8F7D\u5747\u8861\u65B9\u6848 <a href="https://metallb.universe.tf/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">MetalLB</a></li>
</ol>
<h4 id="\u573A\u666F\u4E8C\u5728\u672C\u5730-k8s-\u73AF\u5883\u4E2D\u4F7F\u7528">\u573A\u666F\u4E8C\uFF1A\u5728\u672C\u5730 K8s \u73AF\u5883\u4E2D\u4F7F\u7528</h4>
<p>\u4EE5\u4E0B\u6B65\u9AA4\u9002\u7528\u4E8E\u6240\u6709\u5728\u672C\u5730\u542F\u52A8 K8s \u96C6\u7FA4\u8FDB\u884C\u9A8C\u8BC1\u7684\u573A\u666F\u3002\u5982\u679C\u60A8\u672C\u5730\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86\u4E00\u4E2A\u6D4B\u8BD5\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8F6C\u5230\u7B2C\u4E09\u6B65\u5B89\u88C5 Higress\u3002</p>
<h5 id="\u7B2C\u4E00\u6B65\u5B89\u88C5-kubectl--kind">\u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5 kubectl &#x26; kind</h5>
<p><strong>MacOS\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># for Intel Macs</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> x86_64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> x86_64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># for Apple Silicon Macs (M1/M2)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> arm64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">[ $(</span><span style="--0:#B392F0">uname</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> arm64 ] &#x26;&#x26; </span><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="[ $(uname -m) = x86_64 ] &#x26;&#x26; curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl&#x22;\x7F[ $(uname -m) = x86_64 ] &#x26;&#x26; curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64\x7F[ $(uname -m) = arm64 ] &#x26;&#x26; curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl&#x22;\x7F[ $(uname -m) = arm64 ] &#x26;&#x26; curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64\x7Fchmod +x ./kubectl ./kind\x7Fsudo mv ./kubectl ./kind /usr/local/bin"><div></div></button></div></figure></div>
<p><strong>Windows \u4E2D\u4F7F\u7528 PowerShell\uFF1A</strong></p>
<p>\u4E0B\u8F7D <a href="https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kubectl v1.27.1</a> \u548C <a href="https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">kind v0.18.0</a>\u3002</p>
<p>\u5982\u679C\u4F60\u672C\u5730\u5B89\u88C5\u4E86 <code dir="auto">curl</code> \u5DE5\u5177\uFF0C\u53EF\u76F4\u63A5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">curl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">LO </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">curl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">Lo </span><span style="--0:#79B8FF">kind-windows-amd64.exe</span><span style="--0:#E1E4E8"> https:</span><span style="--0:#F97583">//</span><span style="--0:#E1E4E8">kind.sigs.k8s.io</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">dl</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">v0.</span><span style="--0:#79B8FF">18.0</span><span style="--0:#F97583">/</span><span style="--0:#E1E4E8">kind</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">windows</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">amd64</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl.exe -LO &#x22;https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe&#x22;\x7Fcurl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64"><div></div></button></div></figure></div>
<blockquote>
<p>\u6CE8\uFF1A\u82E5\u8981\u83B7\u77E5 <code dir="auto">kubectl</code> \u7684\u6700\u65B0\u7A33\u5B9A\u7248\u672C\uFF08\u4F8B\u5982\u7528\u4E8E\u811A\u672C\u7F16\u5199\u7B49\u573A\u666F\uFF09\uFF0C\u53EF\u67E5\u770B <a href="https://dl.k8s.io/release/stable.txt" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://dl.k8s.io/release/stable.txt</a> \u7684\u5185\u5BB9.</p>
</blockquote>
<p>\u7136\u540E\u5C06\u4E0B\u8F7D\u4E0B\u6765\u7684 <code dir="auto">kind-windows-amd64</code> \u6216\u8005 <code dir="auto">kind-windows-amd64.exe</code> \u91CD\u547D\u540D\u4E3A <code dir="auto">kind.exe</code>\uFF0C\u5E76\u5C06 <code dir="auto">kubectl.exe</code> \u548C <code dir="auto">kind.exe</code> \u79FB\u52A8\u5230 <code dir="auto">PATH</code> \u73AF\u5883\u53D8\u91CF\u6240\u5305\u542B\u7684\u8DEF\u5F84\u4E0B\u3002</p>
<p><strong>Linux:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-LO</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://dl.k8s.io/release/$(</span><span style="--0:#B392F0">curl</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-L</span><span style="--0:#9ECBFF"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#9ECBFF"> https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-Lo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">chmod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">+x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mv</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -LO &#x22;https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl&#x22;\x7Fcurl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64\x7Fchmod +x ./kubectl ./kind\x7Fsudo mv ./kubectl ./kind /usr/local/bin"><div></div></button></div></figure></div>
<h5 id="\u7B2C\u4E8C\u6B65\u521B\u5EFA\u5E76\u542F\u7528-kind">\u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA\u5E76\u542F\u7528 kind</h5>
<p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6: <code dir="auto">cluster.conf</code></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Cluster</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kind.x-k8s.io/v1alpha4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># networking:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># WARNING: It is _strongly_ recommended that you keep this the default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># (127.0.0.1) for security reasons. However it is possible to change this.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># apiServerAddress: "0.0.0.0"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># By default the API server listens on a random open port.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># You may choose a specific port but probably don't need to in most cases.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Using a random port makes it easier to spin up multiple clusters.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># apiServerPort: 6443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">nodes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">control-plane</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">kubeadmConfigPatches</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">kind: InitConfiguration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">nodeRegistration:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">kubeletExtraArgs:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">node-labels: "ingress-ready=true"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">extraPortMappings</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">hostPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# cluster.conf\x7Fkind: Cluster\x7FapiVersion: kind.x-k8s.io/v1alpha4\x7F# networking:\x7F  # WARNING: It is _strongly_ recommended that you keep this the default\x7F  # (127.0.0.1) for security reasons. However it is possible to change this.\x7F  # apiServerAddress: &#x22;0.0.0.0&#x22;\x7F  # By default the API server listens on a random open port.\x7F  # You may choose a specific port but probably don&#x27;t need to in most cases.\x7F  # Using a random port makes it easier to spin up multiple clusters.\x7F  # apiServerPort: 6443\x7Fnodes:\x7F- role: control-plane\x7F  kubeadmConfigPatches:\x7F  - |\x7F    kind: InitConfiguration\x7F    nodeRegistration:\x7F      kubeletExtraArgs:\x7F        node-labels: &#x22;ingress-ready=true&#x22;\x7F  extraPortMappings:\x7F  - containerPort: 80\x7F    hostPort: 80\x7F    protocol: TCP\x7F  - containerPort: 443\x7F    hostPort: 443\x7F    protocol: TCP"><div></div></button></div></figure></div>
<p>Mac &#x26; Linux \u7CFB\u7EDF\u6267\u884C\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind create cluster --name higress --config=cluster.conf\x7Fkubectl config use-context kind-higress"><div></div></button></div></figure></div>
<p>Windows \u7CFB\u7EDF\u6267\u884C:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kind.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">create</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cluster</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--config=cluster.conf</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl.exe</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">use-context</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">kind-higress</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind.exe create cluster --name higress --config=cluster.conf\x7Fkubectl.exe config use-context kind-higress"><div></div></button></div></figure></div>
<p><strong>\u5907\u6CE8</strong></p>
<p>\u4E0A\u8FF0\u914D\u7F6E\u662F\u4E3A\u4E86\u5C06\u672C\u5730\uFF08127.0.0.1\uFF09\u768480\u548C443\u7AEF\u53E3\u7528\u4E8EHigress\u8BBF\u95EE</p>
<h5 id="\u7B2C\u4E09\u6B65\u5B89\u88C5-higress">\u7B2C\u4E09\u6B65\uFF1A\u5B89\u88C5 Higress</h5>
<p>\u672C\u5730\u5B89\u88C5\u5F00\u5173: <code dir="auto">--set global.kind=true</code>\uFF1B
\u4E3A\u907F\u514D\u6B67\u4E49\uFF0C\u540E\u9762\u4F1A\u8C03\u6574\u5C5E\u6027\u540D\u79F0\u4E3A\uFF1A<code dir="auto">--set global.local=true</code></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">repo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/helm-charts</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--create-namespace</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--render-subchart-notes</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">global.local=</span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-console.o11y.enabled=</span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm repo add higress.io https://higress.io/helm-charts\x7Fhelm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false"><div></div></button></div></figure></div>
<blockquote>
<p>\u82E5\u8981\u542F\u7528 Higress \u5185\u7F6E\u7684\u5957\u4EF6\uFF0C\u53EF\u53C2\u9605<a href="../../ops/deploy-by-helm/" referrerpolicy="unsafe-url">\u5B89\u88C5\u90E8\u7F72</a>\u6587\u6863\u3002</p>
</blockquote>
<p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u672C\u5730\u7684 80 \u548C 443 \u7AEF\u53E3\u5373\u53EF\u8BBF\u95EE\u672C\u5730\u96C6\u7FA4\u5185\u7684 Higress Gateway\u3002</p>
<p>\u6CE8\uFF1A\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F\u672C\u5730\u73B0\u5B58\u7684 K8s \u96C6\u7FA4\uFF0C\u90A3\u4E48\u53EF\u80FD\u9700\u8981\u5148\u6267\u884C\u4E0B\u65B9\u547D\u4EE4\u5C06 K8s \u96C6\u7FA4\u5185\u7684\u7AEF\u53E3\u6620\u5C04\u51FA\u6765\uFF0C\u7136\u540E\u518D\u5C1D\u8BD5\u8BBF\u95EE\u672C\u5730\u7AEF\u53E3\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">service/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">80:80</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">443:443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443"><div></div></button></div></figure></div>
<h3 id="\u9636\u6BB5\u4E8C\u914D\u7F6E">\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E</h3>
<p>\u5047\u8BBE\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B\u5DF2\u7ECF\u90E8\u7F72\u4E86\u4E00\u4E2A\u540D\u4E3A foo \u7684\u670D\u52A1\uFF0C\u800C\u6211\u4EEC\u5E0C\u671B\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94 <a href="http://foo.bar.com/foo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://foo.bar.com/foo</a> \u7684\u8DEF\u7531\u6307\u5411\u8BE5\u670D\u52A1\u3002</p>
<p>\u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u5404\u4F4D\u53EF\u4EE5\u4F7F\u7528\u4E0B\u65B9 YAML \u6765\u521B\u5EFA\u5BF9\u5E94\u7684\u6D4B\u8BD5\u670D\u52A1\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Pod</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-app</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"-text=foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Default port used by the image</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kind: Pod\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-app\x7F  labels:\x7F    app: foo\x7Fspec:\x7F  containers:\x7F  - name: foo-app\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine\x7F    args:\x7F    - &#x22;-text=foo&#x22;\x7F---\x7Fkind: Service\x7FapiVersion: v1\x7Fmetadata:\x7F  name: foo-service\x7Fspec:\x7F  selector:\x7F    app: foo\x7F  ports:\x7F  # Default port used by the image\x7F  - port: 5678"><div></div></button></div></figure></div>
<h4 id="\u65B9\u6CD5\u4E00\u4F7F\u7528-higress-console-\u8FDB\u884C\u914D\u7F6E">\u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 Higress Console \u8FDB\u884C\u914D\u7F6E</h4>
<p>\u4F7F\u7528 <a href="https://higress.io/zh-cn/docs/ops/hgctl" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">hgctl</a> \u6253\u5F00\u63A7\u5236\u53F0\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">hgctl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dashboard</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="hgctl dashboard console"><div></div></button></div></figure></div>
<p>\u9996\u6B21\u8BBF\u95EE\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u8D26\u53F7\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/init.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u754C\u9762\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762\u3002\u8BF7\u4F7F\u7528\u524D\u9762\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55 Higress \u63A7\u5236\u53F0\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/login.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u70B9\u51FB\u5DE6\u4FA7\u201C\u57DF\u540D\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u57DF\u540D\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/domain_management.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u70B9\u51FB\u5DE6\u4FA7\u201C\u8DEF\u7531\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u8DEF\u7531\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u7247\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/route_management.png" alt="image" referrerpolicy="no-referrer"></p>
<h4 id="\u65B9\u6CD5\u4E8C\u4F7F\u7528-ingress-crd-\u8FDB\u884C\u914D\u7F6E">\u65B9\u6CD5\u4E8C\uFF1A\u4F7F\u7528 Ingress CRD \u8FDB\u884C\u914D\u7F6E</h4>
<p>\u4F7F\u7528\u4E0B\u65B9 YAML \u6765\u521B\u5EFA\u6211\u4EEC\u9700\u8981\u7684\u8DEF\u7531\u914D\u7F6E\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo-service</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5678</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: foo\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: foo.bar.com\x7F    http:\x7F      paths:\x7F      - pathType: Prefix\x7F        path: &#x22;/foo&#x22;\x7F        backend:\x7F          service:\x7F            name: foo-service\x7F            port:\x7F              number: 5678"><div></div></button></div></figure></div>
<h3 id="\u9636\u6BB5\u4E09\u8BF7\u6C42\u9A8C\u8BC1">\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1</h3>
<p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u9A8C\u8BC1\u6D4B\u8BD5\u8DEF\u7531\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># should output "foo"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://GatewayIP/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://GatewayIP/foo -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>
<h2 id="\u73AF\u5883\u4E8C\u8131\u79BB-k8s-\u5728-docker-compose-\u4E2D\u4F7F\u7528">\u73AF\u5883\u4E8C\uFF1A\u8131\u79BB K8s \u5728 Docker Compose \u4E2D\u4F7F\u7528</h2>
<blockquote>
<p><strong>\u6CE8\u610F</strong></p>
<p>Standalone \u6A21\u5F0F\u6CA1\u6709\u5927\u89C4\u6A21\u751F\u4EA7\u4F7F\u7528\u8FC7\uFF0C\u76EE\u524D\u4E3B\u8981\u7528\u4E8E\u672C\u5730\u90E8\u7F72\u6D4B\u8BD5\u7684\u573A\u666F\uFF0C\u5982\u679C\u751F\u4EA7\u90E8\u7F72\u66F4\u5EFA\u8BAE<a href="https://higress.io/zh-cn/docs/ops/deploy-by-helm" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4E91\u539F\u751F\u6A21\u5F0F</a>\u90E8\u7F72</p>
</blockquote>
<h3 id="\u9636\u6BB5\u4E00\u5B89\u88C5-1">\u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5</h3>
<p><strong>\u5B89\u88C5\u547D\u4EE4\u4E00\uFF1A\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684 Nacos</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-a</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-c</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">nacos://192.168.0.1:8848</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--nacos-username=nacos</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--nacos-password=nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos"><div></div></button></div></figure></div>
<p>\u8BF7\u5C06 <code dir="auto">192.168.0.1</code> \u66FF\u6362\u4E3A Nacos \u670D\u52A1\u5668\u7684 IP\uFF08\u5982\u679C Nacos \u90E8\u7F72\u5728\u672C\u673A\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u5982 <code dir="auto">localhost</code> \u6216 <code dir="auto">127.0.0.1</code> \u7684 Loopback \u5730\u5740\uFF09\uFF0C\u5E76\u6309\u9700\u8C03\u6574 <code dir="auto">--nacos-username</code> \u548C <code dir="auto">--nacos-password</code> \u7684\u53D6\u503C\u3002\u5982\u679C Nacos \u670D\u52A1\u672A\u5F00\u542F\u8BA4\u8BC1\u529F\u80FD\uFF0C\u5219\u53EF\u4EE5\u79FB\u9664\u8FD9\u4E24\u4E2A\u53C2\u6570\u3002</p>
<p><strong>\u5B89\u88C5\u547D\u4EE4\u4E8C\uFF1A\u4F7F\u7528 Higress \u5185\u7F6E Nacos</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-fsSL</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://higress.io/standalone/get-higress.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">|</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">bash</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-s</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-a</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--use-builtin-nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a --use-builtin-nacos"><div></div></button></div></figure></div>
<p>\u6CE8\uFF1AWindows \u7CFB\u7EDF\u4E0B\u53EF\u4EE5\u4F7F\u7528 Cygwin\u3001Git Bash \u7B49\u7C7B Unix Shell \u4E2D\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u3002</p>
<h3 id="\u9636\u6BB5\u4E8C\u914D\u7F6E-1">\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E</h3>
<p>\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165<code dir="auto">http://127.0.0.1:8080</code> \u8FDB\u5165 Higress \u63A7\u5236\u53F0\u3002\u9996\u6B21\u8BBF\u95EE\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u8D26\u53F7\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/init.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u754C\u9762\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762\u3002\u8BF7\u4F7F\u7528\u524D\u9762\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55 Higress \u63A7\u5236\u53F0\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/login.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u70B9\u51FB\u5DE6\u4FA7\u201C\u670D\u52A1\u6765\u6E90\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/service_source_management_standalone.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u70B9\u51FB\u5DE6\u4FA7\u201C\u57DF\u540D\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u57DF\u540D\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/domain_management.png" alt="image" referrerpolicy="no-referrer"></p>
<p>\u70B9\u51FB\u5DE6\u4FA7\u201C\u8DEF\u7531\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u8DEF\u7531\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u7247\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002</p>
<p><img src="/img/user/quickstart/zh-cn/route_management_standalone.png" alt="image" referrerpolicy="no-referrer"></p>
<h3 id="\u9636\u6BB5\u4E09\u8BF7\u6C42\u9A8C\u8BC1-1">\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1</h3>
<p>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u9A8C\u8BC1\u6D4B\u8BD5\u8DEF\u7531\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># should output a JSON object containing request data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/get?foo=bar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/get?foo=bar -H &#x27;host: foo.bar.com&#x27;"><div></div></button></div></figure></div>`,n={title:"\u5FEB\u901F\u5F00\u59CB",keywords:["Higress"],description:"Higress \u5FEB\u901F\u5F00\u59CB.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md",toc_max_heading_level:4},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/quickstart.md",p=void 0,d=function(){return`
# \u5FEB\u901F\u5F00\u59CB

## \u73AF\u5883\u4E00\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528

### \u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5

#### \u573A\u666F\u4E00\uFF1A\u5728\u6807\u51C6 K8s \u96C6\u7FA4\u4E2D\u4F7F\u7528

**Helm \u5B89\u88C5\u547D\u4EE4**

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
\`\`\`

> \u4E2D\u56FD\u5927\u9646\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\u52A0\u901F\u5B89\u88C5\uFF1A
> 
> \`\`\`bash
> helm repo add higress.cn https://higress.cn/helm-charts
> helm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes
> \`\`\`

\u83B7\u53D6 Higress Gateway \u7684 LoadBalancer IP\uFF0C\u5E76\u8BB0\u5F55\u4E0B\u6765\u3002\u540E\u7EED\u53EF\u4EE5\u901A\u8FC7\u8BE5 IP \u7684 80 \u548C 443 \u7AEF\u53E3\u8BBF\u95EE Higress Gateway\u3002
\`\`\`bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
\`\`\`
**\u5907\u6CE8**

\u5982\u679C LoadBalancer IP \u83B7\u53D6\u4E0D\u5230\uFF0C\u8BF4\u660E\u60A8\u5F53\u524D\u7684 K8s \u96C6\u7FA4\u4E0D\u652F\u6301 LoadBalancer \u7C7B\u578B\u7684 Service\uFF0C\u53EF\u4EE5\u8003\u8651\u4EE5\u4E0B\u65B9\u6848\uFF1A

1. \u4F7F\u7528\u4E91\u5382\u5546\u63D0\u4F9B\u7684 K8s \u670D\u52A1\uFF0C\u4F8B\u5982[\u963F\u91CC\u4E91 ACK](https://www.aliyun.com/product/kubernetes)
2. \u53C2\u8003[\u8FD0\u7EF4\u53C2\u6570\u914D\u7F6E](https://higress.io/zh-cn/docs/user/configurations)\uFF0C\u5F00\u542F\`higress-core.gateway.hostNetwork\`\uFF0C\u8BA9 Higress \u76D1\u542C\u672C\u673A\u7AEF\u53E3\uFF0C\u518D\u901A\u8FC7\u5176\u4ED6\u8F6F/\u786C\u8D1F\u8F7D\u5747\u8861\u5668\u8F6C\u53D1\u7ED9\u56FA\u5B9A\u673A\u5668 IP
3. \uFF08\u751F\u4EA7\u4E0D\u5EFA\u8BAE\uFF09\u4F7F\u7528\u5F00\u6E90\u7684\u8D1F\u8F7D\u5747\u8861\u65B9\u6848 [MetalLB](https://metallb.universe.tf/)

#### \u573A\u666F\u4E8C\uFF1A\u5728\u672C\u5730 K8s \u73AF\u5883\u4E2D\u4F7F\u7528

\u4EE5\u4E0B\u6B65\u9AA4\u9002\u7528\u4E8E\u6240\u6709\u5728\u672C\u5730\u542F\u52A8 K8s \u96C6\u7FA4\u8FDB\u884C\u9A8C\u8BC1\u7684\u573A\u666F\u3002\u5982\u679C\u60A8\u672C\u5730\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86\u4E00\u4E2A\u6D4B\u8BD5\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8DF3\u8F6C\u5230\u7B2C\u4E09\u6B65\u5B89\u88C5 Higress\u3002

##### \u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5 kubectl & kind

**MacOS\uFF1A**
\`\`\`bash
# for Intel Macs
[ $(uname -m) = x86_64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
# for Apple Silicon Macs (M1/M2)
[ $(uname -m) = arm64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"
[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
\`\`\`

**Windows \u4E2D\u4F7F\u7528 PowerShell\uFF1A**

\u4E0B\u8F7D [kubectl v1.27.1](https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe) \u548C [kind v0.18.0](https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64)\u3002

\u5982\u679C\u4F60\u672C\u5730\u5B89\u88C5\u4E86 \`curl\` \u5DE5\u5177\uFF0C\u53EF\u76F4\u63A5\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A
\`\`\`powershell
curl.exe -LO "https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64
\`\`\`
> \u6CE8\uFF1A\u82E5\u8981\u83B7\u77E5 \`kubectl\` \u7684\u6700\u65B0\u7A33\u5B9A\u7248\u672C\uFF08\u4F8B\u5982\u7528\u4E8E\u811A\u672C\u7F16\u5199\u7B49\u573A\u666F\uFF09\uFF0C\u53EF\u67E5\u770B https://dl.k8s.io/release/stable.txt \u7684\u5185\u5BB9.

\u7136\u540E\u5C06\u4E0B\u8F7D\u4E0B\u6765\u7684 \`kind-windows-amd64\` \u6216\u8005 \`kind-windows-amd64.exe\` \u91CD\u547D\u540D\u4E3A \`kind.exe\`\uFF0C\u5E76\u5C06 \`kubectl.exe\` \u548C \`kind.exe\` \u79FB\u52A8\u5230 \`PATH\` \u73AF\u5883\u53D8\u91CF\u6240\u5305\u542B\u7684\u8DEF\u5F84\u4E0B\u3002

**Linux:**

\`\`\`bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
\`\`\`

##### \u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA\u5E76\u542F\u7528 kind

\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u96C6\u7FA4\u914D\u7F6E\u6587\u4EF6: \`cluster.conf\`

\`\`\`yaml
# cluster.conf
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
# networking:
  # WARNING: It is _strongly_ recommended that you keep this the default
  # (127.0.0.1) for security reasons. However it is possible to change this.
  # apiServerAddress: "0.0.0.0"
  # By default the API server listens on a random open port.
  # You may choose a specific port but probably don't need to in most cases.
  # Using a random port makes it easier to spin up multiple clusters.
  # apiServerPort: 6443
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
\`\`\`
Mac & Linux \u7CFB\u7EDF\u6267\u884C\uFF1A
\`\`\`bash
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
\`\`\`
Windows \u7CFB\u7EDF\u6267\u884C:
\`\`\`bash
kind.exe create cluster --name higress --config=cluster.conf
kubectl.exe config use-context kind-higress
\`\`\`

**\u5907\u6CE8**

\u4E0A\u8FF0\u914D\u7F6E\u662F\u4E3A\u4E86\u5C06\u672C\u5730\uFF08127.0.0.1\uFF09\u768480\u548C443\u7AEF\u53E3\u7528\u4E8EHigress\u8BBF\u95EE

##### \u7B2C\u4E09\u6B65\uFF1A\u5B89\u88C5 Higress

\u672C\u5730\u5B89\u88C5\u5F00\u5173: \`--set global.kind=true\`\uFF1B
\u4E3A\u907F\u514D\u6B67\u4E49\uFF0C\u540E\u9762\u4F1A\u8C03\u6574\u5C5E\u6027\u540D\u79F0\u4E3A\uFF1A\`--set global.local=true\`

\`\`\`bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
\`\`\`

> \u82E5\u8981\u542F\u7528 Higress \u5185\u7F6E\u7684\u5957\u4EF6\uFF0C\u53EF\u53C2\u9605[\u5B89\u88C5\u90E8\u7F72](../ops/deploy-by-helm.md)\u6587\u6863\u3002

\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u901A\u8FC7\u672C\u5730\u7684 80 \u548C 443 \u7AEF\u53E3\u5373\u53EF\u8BBF\u95EE\u672C\u5730\u96C6\u7FA4\u5185\u7684 Higress Gateway\u3002

\u6CE8\uFF1A\u5982\u679C\u60A8\u4F7F\u7528\u7684\u662F\u672C\u5730\u73B0\u5B58\u7684 K8s \u96C6\u7FA4\uFF0C\u90A3\u4E48\u53EF\u80FD\u9700\u8981\u5148\u6267\u884C\u4E0B\u65B9\u547D\u4EE4\u5C06 K8s \u96C6\u7FA4\u5185\u7684\u7AEF\u53E3\u6620\u5C04\u51FA\u6765\uFF0C\u7136\u540E\u518D\u5C1D\u8BD5\u8BBF\u95EE\u672C\u5730\u7AEF\u53E3\u3002

\`\`\`bash
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
\`\`\`

### \u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E

\u5047\u8BBE\u5728 default \u547D\u540D\u7A7A\u95F4\u4E0B\u5DF2\u7ECF\u90E8\u7F72\u4E86\u4E00\u4E2A\u540D\u4E3A foo \u7684\u670D\u52A1\uFF0C\u800C\u6211\u4EEC\u5E0C\u671B\u521B\u5EFA\u4E00\u4E2A\u5BF9\u5E94 http://foo.bar.com/foo \u7684\u8DEF\u7531\u6307\u5411\u8BE5\u670D\u52A1\u3002

\u5982\u679C\u9700\u8981\u7684\u8BDD\uFF0C\u5404\u4F4D\u53EF\u4EE5\u4F7F\u7528\u4E0B\u65B9 YAML \u6765\u521B\u5EFA\u5BF9\u5E94\u7684\u6D4B\u8BD5\u670D\u52A1\u3002
\`\`\`yaml
kind: Pod
apiVersion: v1
metadata:
  name: foo-app
  labels:
    app: foo
spec:
  containers:
  - name: foo-app
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
    args:
    - "-text=foo"
---
kind: Service
apiVersion: v1
metadata:
  name: foo-service
spec:
  selector:
    app: foo
  ports:
  # Default port used by the image
  - port: 5678
\`\`\`

#### \u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 Higress Console \u8FDB\u884C\u914D\u7F6E

\u4F7F\u7528 [hgctl](https://higress.io/zh-cn/docs/ops/hgctl) \u6253\u5F00\u63A7\u5236\u53F0\uFF1A

\`\`\`bash
hgctl dashboard console
\`\`\`

\u9996\u6B21\u8BBF\u95EE\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u8D26\u53F7\u3002

![image](/img/user/quickstart/zh-cn/init.png)

\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u754C\u9762\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762\u3002\u8BF7\u4F7F\u7528\u524D\u9762\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55 Higress \u63A7\u5236\u53F0\u3002

![image](/img/user/quickstart/zh-cn/login.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u57DF\u540D\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u57DF\u540D\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/domain_management.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u8DEF\u7531\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u8DEF\u7531\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u7247\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/route_management.png)

#### \u65B9\u6CD5\u4E8C\uFF1A\u4F7F\u7528 Ingress CRD \u8FDB\u884C\u914D\u7F6E

\u4F7F\u7528\u4E0B\u65B9 YAML \u6765\u521B\u5EFA\u6211\u4EEC\u9700\u8981\u7684\u8DEF\u7531\u914D\u7F6E\u3002
\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo
spec:
  ingressClassName: higress
  rules:
  - host: foo.bar.com
    http:
      paths:
      - pathType: Prefix
        path: "/foo"
        backend:
          service:
            name: foo-service
            port:
              number: 5678
\`\`\`

### \u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1

\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u9A8C\u8BC1\u6D4B\u8BD5\u8DEF\u7531\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF1A

\`\`\`bash
# should output "foo"
curl http://GatewayIP/foo -H 'host: foo.bar.com'
\`\`\`

## \u73AF\u5883\u4E8C\uFF1A\u8131\u79BB K8s \u5728 Docker Compose \u4E2D\u4F7F\u7528

> **\u6CE8\u610F**
> 
> Standalone \u6A21\u5F0F\u6CA1\u6709\u5927\u89C4\u6A21\u751F\u4EA7\u4F7F\u7528\u8FC7\uFF0C\u76EE\u524D\u4E3B\u8981\u7528\u4E8E\u672C\u5730\u90E8\u7F72\u6D4B\u8BD5\u7684\u573A\u666F\uFF0C\u5982\u679C\u751F\u4EA7\u90E8\u7F72\u66F4\u5EFA\u8BAE[\u4E91\u539F\u751F\u6A21\u5F0F](https://higress.io/zh-cn/docs/ops/deploy-by-helm)\u90E8\u7F72

### \u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5

**\u5B89\u88C5\u547D\u4EE4\u4E00\uFF1A\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684 Nacos**

\`\`\`bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos
\`\`\`

\u8BF7\u5C06 \`192.168.0.1\` \u66FF\u6362\u4E3A Nacos \u670D\u52A1\u5668\u7684 IP\uFF08\u5982\u679C Nacos \u90E8\u7F72\u5728\u672C\u673A\uFF0C\u8BF7\u4E0D\u8981\u4F7F\u7528\u5982 \`localhost\` \u6216 \`127.0.0.1\` \u7684 Loopback \u5730\u5740\uFF09\uFF0C\u5E76\u6309\u9700\u8C03\u6574 \`--nacos-username\` \u548C \`--nacos-password\` \u7684\u53D6\u503C\u3002\u5982\u679C Nacos \u670D\u52A1\u672A\u5F00\u542F\u8BA4\u8BC1\u529F\u80FD\uFF0C\u5219\u53EF\u4EE5\u79FB\u9664\u8FD9\u4E24\u4E2A\u53C2\u6570\u3002

**\u5B89\u88C5\u547D\u4EE4\u4E8C\uFF1A\u4F7F\u7528 Higress \u5185\u7F6E Nacos**

\`\`\`bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a --use-builtin-nacos
\`\`\`

\u6CE8\uFF1AWindows \u7CFB\u7EDF\u4E0B\u53EF\u4EE5\u4F7F\u7528 Cygwin\u3001Git Bash \u7B49\u7C7B Unix Shell \u4E2D\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u3002

### \u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E

\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165\`http://127.0.0.1:8080\` \u8FDB\u5165 Higress \u63A7\u5236\u53F0\u3002\u9996\u6B21\u8BBF\u95EE\u65F6\u9700\u8981\u5148\u521D\u59CB\u5316\u7BA1\u7406\u5458\u8D26\u53F7\u3002

![image](/img/user/quickstart/zh-cn/init.png)

\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u754C\u9762\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u9762\u3002\u8BF7\u4F7F\u7528\u524D\u9762\u8BBE\u7F6E\u7684\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55 Higress \u63A7\u5236\u53F0\u3002

![image](/img/user/quickstart/zh-cn/login.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u670D\u52A1\u6765\u6E90\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u670D\u52A1\u6765\u6E90\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/service_source_management_standalone.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u57DF\u540D\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u57DF\u540D\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/domain_management.png)

\u70B9\u51FB\u5DE6\u4FA7\u201C\u8DEF\u7531\u7BA1\u7406\u201D\u5BFC\u822A\u680F\uFF0C\u7136\u540E\u70B9\u51FB\u9875\u9762\u53F3\u4FA7\u7684\u201C\u521B\u5EFA\u8DEF\u7531\u201D\u6309\u94AE\u3002\u6309\u7167\u4E0B\u56FE\u7247\u6240\u793A\u5185\u5BB9\u586B\u5199\u8868\u5355\u5E76\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u6309\u94AE\u3002

![image](/img/user/quickstart/zh-cn/route_management_standalone.png)

### \u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1

\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u9A8C\u8BC1\u6D4B\u8BD5\u8DEF\u7531\u53EF\u4EE5\u6B63\u5E38\u5DE5\u4F5C\uFF1A

\`\`\`bash
# should output a JSON object containing request data 
curl http://localhost/get?foo=bar -H 'host: foo.bar.com'
\`\`\`
`},i=function(){return s},l=function(){return[{depth:2,slug:"\u73AF\u5883\u4E00\u5728-k8s-\u4E2D\u4F7F\u7528",text:"\u73AF\u5883\u4E00\uFF1A\u5728 K8s \u4E2D\u4F7F\u7528"},{depth:3,slug:"\u9636\u6BB5\u4E00\u5B89\u88C5",text:"\u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5"},{depth:4,slug:"\u573A\u666F\u4E00\u5728\u6807\u51C6-k8s-\u96C6\u7FA4\u4E2D\u4F7F\u7528",text:"\u573A\u666F\u4E00\uFF1A\u5728\u6807\u51C6 K8s \u96C6\u7FA4\u4E2D\u4F7F\u7528"},{depth:4,slug:"\u573A\u666F\u4E8C\u5728\u672C\u5730-k8s-\u73AF\u5883\u4E2D\u4F7F\u7528",text:"\u573A\u666F\u4E8C\uFF1A\u5728\u672C\u5730 K8s \u73AF\u5883\u4E2D\u4F7F\u7528"},{depth:5,slug:"\u7B2C\u4E00\u6B65\u5B89\u88C5-kubectl--kind",text:"\u7B2C\u4E00\u6B65\uFF1A\u5B89\u88C5 kubectl & kind"},{depth:5,slug:"\u7B2C\u4E8C\u6B65\u521B\u5EFA\u5E76\u542F\u7528-kind",text:"\u7B2C\u4E8C\u6B65\uFF1A\u521B\u5EFA\u5E76\u542F\u7528 kind"},{depth:5,slug:"\u7B2C\u4E09\u6B65\u5B89\u88C5-higress",text:"\u7B2C\u4E09\u6B65\uFF1A\u5B89\u88C5 Higress"},{depth:3,slug:"\u9636\u6BB5\u4E8C\u914D\u7F6E",text:"\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E"},{depth:4,slug:"\u65B9\u6CD5\u4E00\u4F7F\u7528-higress-console-\u8FDB\u884C\u914D\u7F6E",text:"\u65B9\u6CD5\u4E00\uFF1A\u4F7F\u7528 Higress Console \u8FDB\u884C\u914D\u7F6E"},{depth:4,slug:"\u65B9\u6CD5\u4E8C\u4F7F\u7528-ingress-crd-\u8FDB\u884C\u914D\u7F6E",text:"\u65B9\u6CD5\u4E8C\uFF1A\u4F7F\u7528 Ingress CRD \u8FDB\u884C\u914D\u7F6E"},{depth:3,slug:"\u9636\u6BB5\u4E09\u8BF7\u6C42\u9A8C\u8BC1",text:"\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1"},{depth:2,slug:"\u73AF\u5883\u4E8C\u8131\u79BB-k8s-\u5728-docker-compose-\u4E2D\u4F7F\u7528",text:"\u73AF\u5883\u4E8C\uFF1A\u8131\u79BB K8s \u5728 Docker Compose \u4E2D\u4F7F\u7528"},{depth:3,slug:"\u9636\u6BB5\u4E00\u5B89\u88C5-1",text:"\u9636\u6BB5\u4E00\uFF1A\u5B89\u88C5"},{depth:3,slug:"\u9636\u6BB5\u4E8C\u914D\u7F6E-1",text:"\u9636\u6BB5\u4E8C\uFF1A\u914D\u7F6E"},{depth:3,slug:"\u9636\u6BB5\u4E09\u8BF7\u6C42\u9A8C\u8BC1-1",text:"\u9636\u6BB5\u4E09\uFF1A\u8BF7\u6C42\u9A8C\u8BC1"}]},a=o((g,F,m)=>{const{layout:f,...t}=n;return t.file=e,t.url=p,r`${E()}${y(s)}`})});export{a as Content,u as __tla,i as compiledContent,a as default,e as file,n as frontmatter,l as getHeadings,d as rawContent,p as url};
