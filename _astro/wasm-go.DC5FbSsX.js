import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r,m as v,u as y,__tla as E}from"./constant.BOX3-Wrm.js";import{__tla as g}from"./astro/assets-service.DQopRnBr.js";let e,i,a,n,l,d,t,f=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u4E00\u5DE5\u5177\u51C6\u5907">\u4E00\u3001\u5DE5\u5177\u51C6\u5907</h2>
<p>\u9700\u8981\u5148\u5B89\u88C5 Golang \u548C TinyGo \u4E24\u4E2A\u7A0B\u5E8F</p>
<h3 id="1-golang">1. Golang</h3>
<p>\uFF08\u8981\u6C42 1.18 \u7248\u672C\u4EE5\u4E0A\uFF09<br>\u5B98\u65B9\u6307\u5F15\u94FE\u63A5\uFF1A<a href="https://go.dev/doc/install" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/doc/install</a></p>
<h4 id="windows">Windows</h4>
<ol>
<li>\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A<a href="https://go.dev/dl/go1.19.windows-amd64.msi" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.19.windows-amd64.msi</a></li>
<li>\u6253\u5F00\u4E0B\u8F7D\u597D\u7684\u5B89\u88C5\u6587\u4EF6\u76F4\u63A5\u5B89\u88C5\uFF0C\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230 <code dir="auto">Program Files</code> \u6216 <code dir="auto">Program Files (x86)</code> \u76EE\u5F55</li>
<li>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528\u952E\u76D8\u4E0A\u7684\u5FEB\u6377\u952E\u201CWin+R\u201D\u6253\u5F00\u8FD0\u884C\u7A97\u53E3\uFF0C\u5728\u8FD0\u884C\u7A97\u53E3\u4E2D\u8F93\u5165\u201Ccmd\u201D\u70B9\u51FB\u786E\u5B9A\u5373\u53EF\u6253\u5F00\u547D\u4EE4\u7A97\u53E3\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A<code dir="auto">go version</code>\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F</li>
</ol>
<h4 id="macos">MacOS</h4>
<ol>
<li>\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A<a href="https://go.dev/dl/go1.19.darwin-amd64.pkg" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.19.darwin-amd64.pkg</a></li>
<li>\u6253\u5F00\u4E0B\u8F7D\u597D\u7684\u5B89\u88C5\u6587\u4EF6\u76F4\u63A5\u5B89\u88C5\uFF0C\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230<code dir="auto">/usr/local/go</code>\u76EE\u5F55</li>
<li>\u6253\u5F00\u7EC8\u7AEF\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A<code dir="auto">go version</code>\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F</li>
</ol>
<h4 id="linux">Linux</h4>
<ol>
<li>\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A<a href="https://go.dev/dl/go1.19.linux-amd64.tar.gz" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.19.linux-amd64.tar.gz</a></li>
<li>\u6267\u884C\u4E0B\u5217\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-rf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/go</span><span style="--0:#E1E4E8"> &#x26;&#x26; </span><span style="--0:#B392F0">tar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-C</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-xzf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">go1.19.linux-amd64.tar.gz</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> PATH</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">$PATH:/usr/local/go/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rm -rf /usr/local/go &#x26;&#x26; tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz\x7Fexport PATH=$PATH:/usr/local/go/bin"><div></div></button></div></figure></div>
<ol start="3">
<li>\u6267\u884C <code dir="auto">go version</code>\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F</li>
</ol>
<h3 id="2-tinygo">2. TinyGo</h3>
<p>\uFF08\u8981\u6C42 0.28.1 \u7248\u672C\u4EE5\u4E0A\uFF09<br>\u5B98\u65B9\u6307\u5F15\u94FE\u63A5\uFF1A<a href="https://tinygo.org/getting-started/install/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://tinygo.org/getting-started/install/</a></p>
<h4 id="windows-1">Windows</h4>
<ol>
<li>\u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A<a href="https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip</a></li>
<li>\u89E3\u538B\u5B89\u88C5\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55</li>
<li>\u5982\u679C\u5B89\u88C5\u89E3\u538B\u540E\u7684\u76EE\u5F55\u4E3A<code dir="auto">C:\\tinygo</code>\uFF0C\u5219\u9700\u8981\u5C06<code dir="auto">C:\\tinygo\\bin</code>\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF<code dir="auto">PATH</code>\u4E2D\uFF0C\u4F8B\u5982\u901A\u8FC7\u5728\u547D\u4EE4\u7A97\u53E3\u4E2D\u8F93\u5165 set \u547D\u4EE4\u8BBE\u7F6E</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">PATH=%PATH%</span><span style="--0:#E1E4E8">;</span><span style="--0:#B392F0">"C:\\tinygo\\bin"</span><span style="--0:#E1E4E8">;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="set PATH=%PATH%;&#x22;C:\\tinygo\\bin&#x22;;"><div></div></button></div></figure></div>
<ol start="4">
<li>\u5728\u547D\u4EE4\u7A97\u53E3\u6267\u884C\u547D\u4EE4 <code dir="auto">tinygo version</code>\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F</li>
</ol>
<h4 id="macos-1">MacOS</h4>
<ol>
<li>\u4E0B\u8F7D\u538B\u7F29\u5305\u5E76\u89E3\u538B</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">wget</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">tar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-zxf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tinygo0.28.1.darwin-amd64.tar.gz</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz\x7Ftar -zxf tinygo0.28.1.darwin-amd64.tar.gz"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5982\u679C\u5B89\u88C5\u89E3\u538B\u540E\u7684\u76EE\u5F55\u4E3A<code dir="auto">/tmp</code>\uFF0C\u5219\u9700\u8981\u5C06<code dir="auto">/tmp/tinygo/bin</code>\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF<code dir="auto">PATH</code>\u4E2D\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> PATH</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">/tmp/tinygo/bin:$PATH</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export PATH=/tmp/tinygo/bin:$PATH"><div></div></button></div></figure></div>
<ol start="3">
<li>\u5728\u7EC8\u7AEF\u6267\u884C <code dir="auto">tinygo version</code>\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F</li>
</ol>
<h4 id="linux-1">Linux</h4>
<p>\u4EE5 Ubuntu \u4E0B amd64 \u67B6\u6784\u4E3A\u4F8B\uFF0C\u5176\u4ED6\u7CFB\u7EDF\u8BF7\u53C2\u8003\u5B98\u65B9\u6307\u5F15\u94FE\u63A5</p>
<ol>
<li>\u4E0B\u8F7D DEB \u6587\u4EF6\uFF0C\u5E76\u5B89\u88C5</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">wget</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dpkg</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tinygo_0.28.1_amd64.deb</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> PATH</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">$PATH:/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb\x7Fsudo dpkg -i tinygo_0.28.1_amd64.deb\x7Fexport PATH=$PATH:/usr/local/bin"><div></div></button></div></figure></div>
<ol start="2">
<li>\u5728\u7EC8\u7AEF\u6267\u884C <code dir="auto">tinygo version</code>\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F</li>
</ol>
<h2 id="\u4E8C\u7F16\u5199\u63D2\u4EF6">\u4E8C\u3001\u7F16\u5199\u63D2\u4EF6</h2>
<h3 id="1-\u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55">1. \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55</h3>
<ol>
<li>\u65B0\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u76EE\u5F55\u6587\u4EF6\uFF0C\u4F8B\u5982<code dir="auto">wasm-demo-go</code></li>
<li>\u5728\u6240\u5EFA\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u8FDB\u884C Go \u5DE5\u7A0B\u521D\u59CB\u5316</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">init</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wasm-demo-go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go mod init wasm-demo-go"><div></div></button></div></figure></div>
<ol start="3">
<li>\u56FD\u5185\u73AF\u5883\u53EF\u80FD\u9700\u8981\u8BBE\u7F6E\u4E0B\u8F7D\u4F9D\u8D56\u5305\u7684\u4EE3\u7406</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">env</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-w</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GOPROXY=https://proxy.golang.com.cn,direct</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go env -w GOPROXY=https://proxy.golang.com.cn,direct"><div></div></button></div></figure></div>
<ol start="4">
<li>\u4E0B\u8F7D\u6784\u5EFA\u63D2\u4EF6\u7684\u4F9D\u8D56</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/higress-group/proxy-wasm-go-sdk</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/alibaba/higress/plugins/wasm-go@main</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/tidwall/gjson</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go get github.com/higress-group/proxy-wasm-go-sdk\x7Fgo get github.com/alibaba/higress/plugins/wasm-go@main\x7Fgo get github.com/tidwall/gjson"><div></div></button></div></figure></div>
<h3 id="2-\u7F16\u5199-maingo-\u6587\u4EF6">2. \u7F16\u5199 main.go \u6587\u4EF6</h3>
<p>\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF0C\u5B9E\u73B0\u4E86\u5728\u63D2\u4EF6\u914D\u7F6E<code dir="auto">mockEnable: true</code>\u65F6\u76F4\u63A5\u8FD4\u56DE<code dir="auto">hello world</code>\u5E94\u7B54\uFF1B\u672A\u505A\u63D2\u4EF6\u914D\u7F6E\uFF0C\u6216\u8005\u8BBE\u7F6E<code dir="auto">mockEnable: false</code>\u65F6\u7ED9\u539F\u59CB\u8BF7\u6C42\u6DFB\u52A0 <code dir="auto">hello: world</code>\u8BF7\u6C42\u5934\u3002\u66F4\u591A\u4F8B\u5B50\u8BF7\u53C2\u8003\u672C\u6587\u7B2C\u56DB\u8282\u3002</p>
<blockquote>
<p>\u6CE8\u610F\uFF1A\u5728\u7F51\u5173\u63A7\u5236\u53F0\u4E2D\u7684\u63D2\u4EF6\u914D\u7F6E\u4E3A yaml \u683C\u5F0F\uFF0C\u4E0B\u53D1\u7ED9\u63D2\u4EF6\u65F6\u5C06\u81EA\u52A8\u8F6C\u6362\u4E3A json \u683C\u5F0F\uFF0C\u6240\u4EE5\u4F8B\u5B50\u4E2D\u7684 parseConfig \u53EF\u4EE5\u76F4\u63A5\u4ECE json \u4E2D\u89E3\u6790\u914D\u7F6E</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tidwall/gjson"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">wrapper.SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u63D2\u4EF6\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"my-plugin",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u4E3A\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">     </span></span><span style="--0:#e1e4e8">wrapper.ParseConfigBy(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u4E3A\u5904\u7406\u8BF7\u6C42\u5934\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type MyConfig struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">mockEnable bool</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u5728\u63A7\u5236\u53F0\u63D2\u4EF6\u914D\u7F6E\u4E2D\u586B\u5199\u7684yaml\u914D\u7F6E\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3Ajson\uFF0C\u6B64\u5904\u76F4\u63A5\u4ECEjson\u8FD9\u4E2A\u53C2\u6570\u91CC\u89E3\u6790\u914D\u7F6E\u5373\u53EF</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u89E3\u6790\u51FA\u914D\u7F6E\uFF0C\u66F4\u65B0\u5230config\u4E2D</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.mockEnable = json.Get("mockEnable").Bool()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.AddHttpRequestHeader("hello", "world")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if config.mockEnable {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    // \u63D2\u4EF6\u540D\u79F0\x7F    &#x22;my-plugin&#x22;,\x7F    // \u4E3A\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\x7F     wrapper.ParseConfigBy(parseConfig),\x7F    // \u4E3A\u5904\u7406\u8BF7\u6C42\u5934\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7F// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\x7Ftype MyConfig struct {\x7F  mockEnable bool\x7F}\x7F\x7F// \u5728\u63A7\u5236\u53F0\u63D2\u4EF6\u914D\u7F6E\u4E2D\u586B\u5199\u7684yaml\u914D\u7F6E\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3Ajson\uFF0C\u6B64\u5904\u76F4\u63A5\u4ECEjson\u8FD9\u4E2A\u53C2\u6570\u91CC\u89E3\u6790\u914D\u7F6E\u5373\u53EF\x7Ffunc parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {\x7F  // \u89E3\u6790\u51FA\u914D\u7F6E\uFF0C\u66F4\u65B0\u5230config\u4E2D\x7F  config.mockEnable = json.Get(&#x22;mockEnable&#x22;).Bool()\x7F  return nil\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\x7F  proxywasm.AddHttpRequestHeader(&#x22;hello&#x22;, &#x22;world&#x22;)\x7F  if config.mockEnable {\x7F    proxywasm.SendHttpResponse(200, nil, []byte(&#x22;hello world&#x22;), -1)\x7F  }\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<h4 id="http-\u5904\u7406\u6302\u8F7D\u70B9">HTTP \u5904\u7406\u6302\u8F7D\u70B9</h4>
<p>\u4E0A\u9762\u793A\u4F8B\u4EE3\u7801\u4E2D\u901A\u8FC7 <code dir="auto">wrapper.ProcessRequestHeadersBy</code>\u5C06\u81EA\u5B9A\u4E49\u51FD\u6570 <code dir="auto">onHttpRequestHeaders</code>\u7528\u4E8E<code dir="auto">HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5</code>\u5904\u7406\u8BF7\u6C42\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\uFF0C\u8BBE\u7F6E\u5176\u4ED6\u9636\u6BB5\u7684\u81EA\u5B9A\u4E49\u5904\u7406\u51FD\u6570</p>






























<table><thead><tr><th>HTTP \u5904\u7406\u9636\u6BB5</th><th>\u89E6\u53D1\u65F6\u673A</th><th>\u6302\u8F7D\u65B9\u6CD5</th></tr></thead><tbody><tr><td>HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5</td><td>\u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42\u5934\u6570\u636E\u65F6</td><td>wrapper.ProcessRequestHeadersBy</td></tr><tr><td>HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5</td><td>\u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42 Body \u6570\u636E\u65F6</td><td>wrapper.ProcessRequestBodyBy</td></tr><tr><td>HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5</td><td>\u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54\u5934\u6570\u636E\u65F6</td><td>wrapper.ProcessResponseHeadersBy</td></tr><tr><td>HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5</td><td>\u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54 Body \u6570\u636E\u65F6</td><td>wrapper.ProcessResponseBodyBy</td></tr></tbody></table>
<h4 id="\u5DE5\u5177\u65B9\u6CD5">\u5DE5\u5177\u65B9\u6CD5</h4>
<p>\u4E0A\u9762\u793A\u4F8B\u4EE3\u7801\u4E2D\u7684 <code dir="auto">proxywasm.AddHttpRequestHeader</code> \u548C <code dir="auto">proxywasm.SendHttpResponse</code>\u662F\u63D2\u4EF6 SDK \u63D0\u4F9B\u7684\u4E24\u4E2A\u5DE5\u5177\u65B9\u6CD5\uFF0C\u4E3B\u8981\u7684\u5DE5\u5177\u65B9\u6CD5\u89C1\u4E0B\u8868\uFF1A</p>













































































































































































<table><thead><tr><th>\u5206\u7C7B</th><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u7528\u9014</th><th>\u53EF\u4EE5\u751F\u6548\u7684<br>HTTP \u5904\u7406\u9636\u6BB5</th></tr></thead><tbody><tr><td>\u8BF7\u6C42\u5934\u5904\u7406</td><td>GetHttpRequestHeaders</td><td>\u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934</td><td>HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5<br></td></tr><tr><td></td><td>ReplaceHttpRequestHeaders</td><td>\u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934</td><td>HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>GetHttpRequestHeader</td><td>\u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934</td><td>HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>RemoveHttpRequestHeader</td><td>\u79FB\u9664\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934</td><td>HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>ReplaceHttpRequestHeader</td><td>\u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934</td><td>HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>AddHttpRequestHeader</td><td>\u65B0\u589E\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934</td><td>HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td>\u8BF7\u6C42 Body \u5904\u7406</td><td>GetHttpRequestBody</td><td>\u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body</td><td>HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>AppendHttpRequestBody</td><td>\u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u672B\u5C3E</td><td>HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>PrependHttpRequestBody</td><td>\u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u7684\u5F00\u5934</td><td>HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>ReplaceHttpRequestBody</td><td>\u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body</td><td>HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td>\u5E94\u7B54\u5934\u5904\u7406</td><td>GetHttpResponseHeaders</td><td>\u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934</td><td>HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5<br></td></tr><tr><td></td><td>ReplaceHttpResponseHeaders</td><td>\u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934</td><td>HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>GetHttpResponseHeader</td><td>\u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934</td><td>HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>RemoveHttpResponseHeader</td><td>\u79FB\u9664\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934</td><td>HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>ReplaceHttpResponseHeader</td><td>\u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934</td><td>HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>AddHttpResponseHeader</td><td>\u65B0\u589E\u4E00\u4E2A\u540E\u7AEF\u54CD\u5E94\u5934</td><td>HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5</td></tr><tr><td>\u5E94\u7B54 Body \u5904\u7406</td><td>GetHttpResponseBody</td><td>\u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body</td><td>HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>AppendHttpResponseBody</td><td>\u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u672B\u5C3E</td><td>HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>PrependHttpResponseBody</td><td>\u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u7684\u5F00\u5934</td><td>HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td></td><td>ReplaceHttpResponseBody</td><td>\u66FF\u6362\u540E\u7AEF\u54CD\u5E94 Body</td><td>HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5</td></tr><tr><td>HTTP \u8C03\u7528</td><td>DispatchHttpCall</td><td>\u53D1\u9001\u4E00\u4E2A HTTP \u8BF7\u6C42</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseHeaders</td><td>\u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54\u5934</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseBody</td><td>\u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Body</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseTrailers</td><td>\u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Trailer</td><td>-</td></tr><tr><td>\u76F4\u63A5\u54CD\u5E94</td><td>SendHttpResponse</td><td>\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u7279\u5B9A\u7684 HTTP \u5E94\u7B54</td><td>-</td></tr><tr><td>\u6D41\u7A0B\u6062\u590D</td><td>ResumeHttpRequest</td><td>\u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u8BF7\u6C42\u5904\u7406\u6D41\u7A0B</td><td>-</td></tr><tr><td></td><td>ResumeHttpResponse</td><td>\u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u5E94\u7B54\u5904\u7406\u6D41\u7A0B</td><td>-</td></tr></tbody></table>
<h3 id="3-\u7F16\u8BD1\u751F\u6210-wasm-\u6587\u4EF6">3. \u7F16\u8BD1\u751F\u6210 WASM \u6587\u4EF6</h3>
<p>\u4F7F\u7528 proxy-wasm \u793E\u533A 0.2.1 \u7248\u672C\u7684 ABI\uFF0C\u5728 HTTP \u8BF7\u6C42/\u54CD\u5E94\u5904\u7406\u9636\u6BB5\u53EA\u80FD\u4F7F\u7528 <code dir="auto">types.ActionContinue</code> \u548C <code dir="auto">types.ActionPause</code> \u4E24\u79CD\u8FD4\u56DE\u503C\u6765\u63A7\u5236\u72B6\u6001\uFF1A</p>
<ol>
<li>
<p>types.ActionContinue\uFF1A\u7EE7\u7EED\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u7EE7\u7EED\u8BFB\u53D6\u8BF7\u6C42 body\uFF0C\u6216\u8005\u7EE7\u7EED\u8BFB\u53D6\u54CD\u5E94 body\u3002</p>
</li>
<li>
<p>types.ActionPause\uFF1A \u6682\u505C\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u5728 onHttpRequestHeaders \u901A\u8FC7 Http \u6216\u8005 Redis \u8C03\u7528\u5916\u90E8\u670D\u52A1\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u5728\u8C03\u7528\u5916\u90E8\u670D\u52A1\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u8C03\u7528 proxywasm.ResumeHttpRequest() \u6765\u6062\u590D\u8BF7\u6C42\u5904\u7406 \u6216\u8005\u8C03\u7528 proxywasm.SendHttpResponseWithDetail() \u6765\u8FD4\u56DE\u54CD\u5E94\u3002</p>
</li>
</ol>
<p>\u53EA\u9700\u8FD9\u6837\u7B80\u5355\u7684\u72B6\u6001\u7BA1\u7406\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u7F16\u8BD1\u65B9\u5F0F\u5373\u53EF\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tidy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">"custommalloc nottinygc_finalizer"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go mod tidy\x7Ftinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags=&#x22;custommalloc nottinygc_finalizer&#x22; ./"><div></div></button></div></figure></div>
<p>Higress \u6269\u5C55\u4E86 0.2.100 \u7248\u672C\u7684 ABI \u6765\u5B9E\u73B0\u66F4\u4E30\u5BCC\u7684 Header \u72B6\u6001\u7BA1\u7406\uFF0C\u5982\u679C\u8981\u4F7F\u7528\uFF0C\u8BF7\u7528\u4E0B\u9762\u7684\u7F16\u8BD1\u65B9\u5F0F\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tidy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">"custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100"</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go mod tidy\x7Ftinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags=&#x22;custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100&#x22; ./"><div></div></button></div></figure></div>
<p>Header \u7684\u72B6\u6001\u7BA1\u7406\u8BF4\u660E\u5982\u4E0B\uFF1A</p>
<ol>
<li>HeaderContinue:</li>
</ol>
<p>\u8868\u793A\u5F53\u524D filter \u5DF2\u7ECF\u5904\u7406\u5B8C\u6BD5\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002 types.ActionContinue \u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002</p>
<ol start="2">
<li>HeaderStopIteration:</li>
</ol>
<p>\u8868\u793A header \u8FD8\u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u6765\u5904\u7406\u3002 \u4F46\u662F\u5E76\u4E0D\u505C\u6B62\u4ECE\u8FDE\u63A5\u8BFB\u6570\u636E\uFF0C\u7EE7\u7EED\u89E6\u53D1 body data \u7684\u5904\u7406\u3002 \u8FD9\u6837\u53EF\u4EE5\u5728 body data \u5904\u7406\u9636\u6BB5\u53EF\u4EE5\u66F4\u65B0 Http \u8BF7\u6C42\u5934\u5185\u5BB9\u3002 \u5982\u679C body data \u8981\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C \u8FD9\u65F6 header \u662F\u4E5F\u4F1A\u88AB\u4E00\u8D77\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002</p>
<p>\u4F46\u6CE8\u610F\u8FD4\u56DE\u8FD9\u4E2A\u72B6\u6001\u65F6\uFF0C\u8981\u6C42\u5FC5\u987B\u6709 body\uFF0C\u5982\u679C\u6CA1\u6709 body\uFF0C\u8BF7\u6C42/\u54CD\u5E94\u5C06\u88AB\u4E00\u76F4\u963B\u585E\u3002</p>
<p>\u5224\u65AD\u662F\u5426\u5B58\u5728\u8BF7\u6C42 body \u53EF\u4EE5\u4F7F\u7528 <a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/request_wrapper.go#L86" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">HasRequestBody()</a></p>
<ol start="3">
<li>HeaderContinueAndEndStream:</li>
</ol>
<p>\u8868\u793A header \u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C\u4F46\u662F\u4E0B\u4E00\u4E2A filter \u6536\u5230\u7684 end_stream = false\uFF0C\u4E5F\u5C31\u662F\u6807\u8BB0\u8BF7\u6C42\u8FD8\u672A\u7ED3\u675F\u3002\u4EE5\u4FBF\u5F53\u524D filter \u518D\u589E\u52A0 body\u3002</p>
<ol start="4">
<li>HeaderStopAllIterationAndBuffer:</li>
</ol>
<p>\u505C\u6B62\u6240\u6709\u8FED\u4EE3\uFF0C\u8868\u793A header \u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter\uFF0C\u5E76\u4E14\u5F53\u524D filter \u4E5F\u4E0D\u80FD\u6536\u5230 body data\u3002 \u5E76\u5BF9\u5F53\u524D\u8FC7\u6EE4\u5668\u53CA\u540E\u7EED\u8FC7\u6EE4\u5668\u7684\u5934\u90E8\u3001\u6570\u636E\u548C\u5C3E\u90E8\u8FDB\u884C\u7F13\u51B2\u3002\u5982\u679C\u7F13\u5B58\u5927\u5C0F\u8D85\u8FC7\u4E86 buffer limit\uFF0C\u5728\u8BF7\u6C42\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 413\uFF0C\u54CD\u5E94\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 500\u3002
\u540C\u65F6\u9700\u8981\u8C03\u7528 proxywasm.ResumeHttpRequest()\u3001 proxywasm.ResumeHttpResponse() \u6216\u8005 proxywasm.SendHttpResponseWithDetail()  \u51FD\u6570\u6765\u6062\u590D\u540E\u7EED\u5904\u7406\u3002</p>
<ol start="5">
<li>HeaderStopAllIterationAndWatermark:</li>
</ol>
<p>\u540C\u4E0A\uFF0C\u533A\u522B\u662F\uFF0C\u5F53\u7F13\u5B58\u8D85\u8FC7\u4E86 buffer limit \u4F1A\u89E6\u53D1\u6D41\u63A7\uFF0C\u4E5F\u5C31\u662F\u6682\u505C\u4ECE\u8FDE\u63A5\u4E0A\u8BFB\u6570\u636E\u3002 0.2.1 ABI \u4E2D\u7684 types.ActionPause \u5B9E\u9645\u4E0A\u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002</p>
<blockquote>
<p>\u5173\u4E8E types.HeaderStopIteration \u548C HeaderStopAllIterationAndWatermark \u7684\u4F7F\u7528\u573A\u666F\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B <a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ai-transformer \u63D2\u4EF6</a> \u548C  <a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ai-quota \u63D2\u4EF6</a> \u3002</p>
</blockquote>
<p>\u5982\u679Cwindows\u4E0B\u7F16\u8BD1\u51FA\u73B0error: could not find wasm-opt, set the WASMOPT environment variable to override \u5219\u9700\u8981\u4E0B\u8F7D<a href="https://github.com/WebAssembly/binaryen/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/WebAssembly/binaryen/</a> \u91CC\u9762\u5305\u542B\u4E86bin\\wasm-opt.exe\u5C06\u8FD9\u4E2A\u6587\u4EF6\u62F7\u8D1D\u5230tinygo\u7684bin\u76EE\u5F55\u4E0B\u91CD\u65B0\u7F16\u8BD1\u5373\u53EF\u3002 <br>
\u7F16\u8BD1\u6210\u529F\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 main.wasm\u3002\u8FD9\u4E2A\u6587\u4EF6\u5728\u4E0B\u9762\u672C\u5730\u8C03\u8BD5\u7684\u4F8B\u5B50\u4E2D\u4E5F\u4F1A\u88AB\u7528\u5230\u3002<br></p>
<p>\u5982\u679Clinux/mac\u4E0B\u7F16\u8BD1\u51FA\u73B0\u8BE5\u9519\u8BEF\uFF0C\u4F7F\u7528apt/brew\u7B49\u7CFB\u7EDF\u81EA\u5E26\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5\u4E0Bbinaryen\u5373\u53EF\uFF0C\u4F8B\u5982<code dir="auto">brew install binaryen</code></p>
<p>\u8981\u5728Higress\u4E2D\u914D\u5408Wasmplugin CRD\u6216\u8005Console\u7684UI\u4EA4\u4E92\u914D\u7F6E\u8BE5\u63D2\u4EF6\uFF0C\u9700\u8981\u5C06\u8BE5wasm\u6587\u4EF6\u6253\u5305\u6210oci\u6216\u8005docker\u955C\u50CF\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u6863\uFF1A<a href="https://higress.cn/docs/latest/plugins/custom" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u300A\u81EA\u5B9A\u4E49\u63D2\u4EF6\u300B</a></p>
<h2 id="\u4E09\u672C\u5730\u8C03\u8BD5">\u4E09\u3001\u672C\u5730\u8C03\u8BD5</h2>
<h3 id="\u5DE5\u5177\u51C6\u5907">\u5DE5\u5177\u51C6\u5907</h3>
<p>\u5B89\u88C5<a href="https://docs.docker.com/engine/install/?spm=a2c4g.426926.0.0.29071f47tjgquo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Docker</a></p>
<h3 id="\u4F7F\u7528-docker-compose-\u542F\u52A8\u9A8C\u8BC1">\u4F7F\u7528 docker compose \u542F\u52A8\u9A8C\u8BC1</h3>
<ol>
<li>\u8FDB\u5165\u5728\u7F16\u5199\u63D2\u4EF6\u65F6\u521B\u5EFA\u7684\u76EE\u5F55\uFF0C\u4F8B\u5982wasm-demo\u76EE\u5F55\uFF0C\u786E\u8BA4\u8BE5\u76EE\u5F55\u4E0B\u5DF2\u7ECF\u7F16\u8BD1\u751F\u6210\u4E86main.wasm\u6587\u4EF6\u3002</li>
<li>\u5728\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6docker-compose.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'3.7'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">envoy</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.0.7</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">entrypoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/usr/local/bin/envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">command</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">-c /etc/envoy/envoy.yaml --component-log-level wasm:debug</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">depends_on</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">wasmtest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"10000:10000"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">volumes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./envoy.yaml:/etc/envoy/envoy.yaml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./main.wasm:/etc/envoy/main.wasm</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">httpbin</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kennethreitz/httpbin:latest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">wasmtest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"12345:80"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">wasmtest</span><span style="--0:#E1E4E8">: {}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="version: &#x27;3.7&#x27;\x7Fservices:\x7F  envoy:\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.0.7\x7F    entrypoint: /usr/local/bin/envoy\x7F    # \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B\x7F    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug\x7F    depends_on:\x7F    - httpbin\x7F    networks:\x7F    - wasmtest\x7F    ports:\x7F    - &#x22;10000:10000&#x22;\x7F    volumes:\x7F    - ./envoy.yaml:/etc/envoy/envoy.yaml\x7F    - ./main.wasm:/etc/envoy/main.wasm\x7F\x7F  httpbin:\x7F    image: kennethreitz/httpbin:latest\x7F    networks:\x7F    - wasmtest\x7F    ports:\x7F    - &#x22;12345:80&#x22;\x7F\x7Fnetworks:\x7F  wasmtest: {}"><div></div></button></div></figure></div>
<ol start="3">
<li>\u7EE7\u7EED\u5728\u8BE5\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6envoy.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9901</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">static_resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">listener_0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.network.http_connection_manager</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">scheme_header_transformation</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">scheme_to_overwrite</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">stat_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress_http</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">route_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_route</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">virtual_hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_service</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">domains</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">routes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">route</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">cluster</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasmdemo</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/udpa.type.v1.TypedStruct</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">type_url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasmdemo</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.wasm.runtime.v8</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/etc/envoy/main.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">"mockEnable": false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.router.v3.Router</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">clusters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">connect_timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">30s</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LOGICAL_DNS</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Comment out the following line to test on v6 networks</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">dns_lookup_family</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">V4_ONLY</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">lb_policy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ROUND_ROBIN</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">load_assignment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">cluster_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">lb_endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="admin:\x7F  address:\x7F    socket_address:\x7F      protocol: TCP\x7F      address: 0.0.0.0\x7F      port_value: 9901\x7Fstatic_resources:\x7F  listeners:\x7F  - name: listener_0\x7F    address:\x7F      socket_address:\x7F        protocol: TCP\x7F        address: 0.0.0.0\x7F        port_value: 10000\x7F    filter_chains:\x7F    - filters:\x7F      - name: envoy.filters.network.http_connection_manager\x7F        typed_config:\x7F          &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\x7F          scheme_header_transformation:\x7F            scheme_to_overwrite: https\x7F          stat_prefix: ingress_http\x7F          route_config:\x7F            name: local_route\x7F            virtual_hosts:\x7F            - name: local_service\x7F              domains: [&#x22;*&#x22;]\x7F              routes:\x7F              - match:\x7F                  prefix: &#x22;/&#x22;\x7F                route:\x7F                  cluster: httpbin\x7F          http_filters:\x7F          - name: wasmdemo\x7F            typed_config:\x7F              &#x22;@type&#x22;: type.googleapis.com/udpa.type.v1.TypedStruct\x7F              type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F              value:\x7F                config:\x7F                  name: wasmdemo\x7F                  vm_config:\x7F                    runtime: envoy.wasm.runtime.v8\x7F                    code:\x7F                      local:\x7F                        filename: /etc/envoy/main.wasm\x7F                  configuration:\x7F                    &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F                    value: |\x7F                      {\x7F                        &#x22;mockEnable&#x22;: false\x7F                      }\x7F          - name: envoy.filters.http.router\x7F            typed_config:\x7F              &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.http.router.v3.Router\x7F  clusters:\x7F  - name: httpbin\x7F    connect_timeout: 30s\x7F    type: LOGICAL_DNS\x7F    # Comment out the following line to test on v6 networks\x7F    dns_lookup_family: V4_ONLY\x7F    lb_policy: ROUND_ROBIN\x7F    load_assignment:\x7F      cluster_name: httpbin\x7F      endpoints:\x7F      - lb_endpoints:\x7F        - endpoint:\x7F            address:\x7F              socket_address:\x7F                address: httpbin\x7F                port_value: 80"><div></div></button></div></figure></div>
<ol start="4">
<li>\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8docker compose\u3002</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">up</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker compose up"><div></div></button></div></figure></div>
<h3 id="\u529F\u80FD\u9A8C\u8BC1">\u529F\u80FD\u9A8C\u8BC1</h3>
<ol>
<li>WASM\u529F\u80FD\u9A8C\u8BC1</li>
</ol>
<p>\u4F7F\u7528curl\u76F4\u63A5\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u4E0D\u7ECF\u8FC7\u7F51\u5173\u65F6\u7684\u8BF7\u6C42\u5934\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl http://127.0.0.1:12345/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"args": {},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"headers": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"Accept": "*/*",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"Host": "127.0.0.1:12345",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"User-Agent": "curl/7.79.1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"origin": "172.18.0.1",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"url": "http://127.0.0.1:12345/get"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://127.0.0.1:12345/get\x7F\x7F{\x7F  &#x22;args&#x22;: {},\x7F  &#x22;headers&#x22;: {\x7F    &#x22;Accept&#x22;: &#x22;*/*&#x22;,\x7F    &#x22;Host&#x22;: &#x22;127.0.0.1:12345&#x22;,\x7F    &#x22;User-Agent&#x22;: &#x22;curl/7.79.1&#x22;\x7F  },\x7F  &#x22;origin&#x22;: &#x22;172.18.0.1&#x22;,\x7F  &#x22;url&#x22;: &#x22;http://127.0.0.1:12345/get&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u4F7F\u7528curl\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u7ECF\u8FC7\u7F51\u5173\u5904\u7406\u540E\u7684\u8BF7\u6C42\u5934\u7684\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl http://127.0.0.1:10000/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"args": {},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"headers": {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"Accept": "*/*",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"Hello": "world",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"Host": "127.0.0.1:10000",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"Original-Host": "127.0.0.1:10000",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"Req-Start-Time": "1681269273896",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"User-Agent": "curl/7.79.1",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"X-Envoy-Expected-Rq-Timeout-Ms": "15000"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"origin": "172.18.0.3",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"url": "https://127.0.0.1:10000/get"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://127.0.0.1:10000/get\x7F\x7F{\x7F  &#x22;args&#x22;: {},\x7F  &#x22;headers&#x22;: {\x7F    &#x22;Accept&#x22;: &#x22;*/*&#x22;,\x7F    &#x22;Hello&#x22;: &#x22;world&#x22;,\x7F    &#x22;Host&#x22;: &#x22;127.0.0.1:10000&#x22;,\x7F    &#x22;Original-Host&#x22;: &#x22;127.0.0.1:10000&#x22;,\x7F    &#x22;Req-Start-Time&#x22;: &#x22;1681269273896&#x22;,\x7F    &#x22;User-Agent&#x22;: &#x22;curl/7.79.1&#x22;,\x7F    &#x22;X-Envoy-Expected-Rq-Timeout-Ms&#x22;: &#x22;15000&#x22;\x7F  },\x7F  &#x22;origin&#x22;: &#x22;172.18.0.3&#x22;,\x7F  &#x22;url&#x22;: &#x22;https://127.0.0.1:10000/get&#x22;\x7F}"><div></div></button></div></figure></div>
<p>\u6B64\u65F6\u4E0A\u6587\u7F16\u5199\u63D2\u4EF6\u7684\u529F\u80FD\u5DF2\u7ECF\u751F\u6548\u4E86\uFF0C\u52A0\u5165\u4E86<code dir="auto">hello: world</code>\u8BF7\u6C42\u5934\u3002</p>
<ol start="2">
<li>\u63D2\u4EF6\u914D\u7F6E\u4FEE\u6539\u9A8C\u8BC1</li>
</ol>
<p>\u4FEE\u6539envoy.yaml\uFF0C\u5C06<code dir="auto">mockEnable</code>\u914D\u7F6E\u4FEE\u6539\u4E3Atrue\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"mockEnable": true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  configuration:\x7F    &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F    value: |\x7F      {\x7F        &#x22;mockEnable&#x22;: true\x7F      }"><div></div></button></div></figure></div>
<p>\u4F7F\u7528curl\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u7ECF\u8FC7\u7F51\u5173\u5904\u7406\u540E\u7684\u8BF7\u6C42\u5934\u7684\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">curl http://127.0.0.1:10000/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">hello world</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://127.0.0.1:10000/get\x7F\x7Fhello world"><div></div></button></div></figure></div>
<p>\u8BF4\u660E\u63D2\u4EF6\u914D\u7F6E\u4FEE\u6539\u751F\u6548\uFF0C\u5F00\u542F\u4E86mock\u5E94\u7B54\u76F4\u63A5\u8FD4\u56DE\u4E86hello world\u3002</p>
<h2 id="\u66F4\u591A\u793A\u4F8B">\u66F4\u591A\u793A\u4F8B</h2>
<h3 id="\u65E0\u914D\u7F6E\u63D2\u4EF6">\u65E0\u914D\u7F6E\u63D2\u4EF6</h3>
<p>\u63D2\u4EF6\u65E0\u9700\u914D\u7F6E\u65F6\uFF0C\u76F4\u63A5\u5B9A\u4E49\u7A7A\u7ED3\u6784\u4F53\u5373\u53EF</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">wrapper.SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"hello-world",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type MyConfig struct {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    &#x22;hello-world&#x22;,\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7Ftype MyConfig struct {}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\x7F  proxywasm.SendHttpResponse(200, nil, []byte(&#x22;hello world&#x22;), -1)\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<h3 id="\u5728\u63D2\u4EF6\u4E2D\u8BF7\u6C42\u5916\u90E8\u670D\u52A1">\u5728\u63D2\u4EF6\u4E2D\u8BF7\u6C42\u5916\u90E8\u670D\u52A1</h3>
<p>\u76EE\u524D\u4EC5\u652F\u6301 http \u8C03\u7528\uFF0C\u652F\u6301\u8BBF\u95EE\u5728\u7F51\u5173\u63A7\u5236\u53F0\u4E2D\u8BBE\u7F6E\u4E86\u670D\u52A1\u6765\u6E90\u7684 Nacos\u3001K8s \u670D\u52A1\uFF0C\u4EE5\u53CA\u56FA\u5B9A\u5730\u5740\u6216 DNS \u6765\u6E90\u7684\u670D\u52A1\u3002\u8BF7\u6CE8\u610F\uFF0C\u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528<code dir="auto">net/http</code>\u5E93\u4E2D\u7684 HTTP client\uFF0C\u5FC5\u987B\u4F7F\u7528\u5982\u4E0B\u4F8B\u4E2D\u5C01\u88C5\u7684 HTTP client\u3002<br>\u4E0B\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5728\u914D\u7F6E\u89E3\u6790\u9636\u6BB5\u89E3\u6790\u670D\u52A1\u7C7B\u578B\uFF0C\u751F\u6210\u5BF9\u5E94\u7684 HTTP client \uFF1B\u5728\u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5\u6839\u636E\u914D\u7F6E\u7684\u8BF7\u6C42\u8DEF\u5F84\u8BBF\u95EE\u5BF9\u5E94\u670D\u52A1\uFF0C\u89E3\u6790\u5E94\u7B54\u5934\uFF0C\u7136\u540E\u518D\u8BBE\u7F6E\u5728\u539F\u59CB\u7684\u8BF7\u6C42\u5934\u4E2D\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"errors"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"net/http"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"strings"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tidwall/gjson"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">wrapper.SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"http-call",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ParseConfigBy(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type MyConfig struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u7528\u4E8E\u53D1\u8D77HTTP\u8C03\u7528client</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">client      wrapper.HttpClient</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8BF7\u6C42url</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestPath string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u6839\u636E\u8FD9\u4E2Akey\u53D6\u51FA\u8C03\u7528\u670D\u52A1\u7684\u5E94\u7B54\u5934\u5BF9\u5E94\u5B57\u6BB5\uFF0C\u518D\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u7684\u8BF7\u6C42\u5934\uFF0Ckey\u4E3A\u6B64\u914D\u7F6E\u9879</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tokenHeader string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.tokenHeader = json.Get("tokenHeader").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if config.tokenHeader == "" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return errors.New("missing tokenHeader in config")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.requestPath = json.Get("requestPath").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if config.requestPath == "" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return errors.New("missing requestPath in config")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-svc.dns, my-svc.static, service-provider.DEFAULT-GROUP.public.nacos, httpbin.my-ns.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">serviceName := json.Get("serviceName").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">servicePort := json.Get("servicePort").Int()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if servicePort == 0 {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if strings.HasSuffix(serviceName, ".static") {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">// \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">servicePort = 80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">FQDN: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">Port: servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u4F7F\u7528client\u7684Get\u65B9\u6CD5\u53D1\u8D77HTTP Get\u8C03\u7528\uFF0C\u6B64\u5904\u7701\u7565\u4E86timeout\u53C2\u6570\uFF0C\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4500\u6BEB\u79D2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">err := config.client.Get(config.requestPath, nil,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">           </span></span><span style="--0:#e1e4e8">// \u56DE\u8C03\u51FD\u6570\uFF0C\u5C06\u5728\u54CD\u5E94\u5F02\u6B65\u8FD4\u56DE\u65F6\u88AB\u6267\u884C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">           </span></span><span style="--0:#e1e4e8">func(statusCode int, responseHeaders http.Header, responseBody []byte) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">// \u8BF7\u6C42\u6CA1\u6709\u8FD4\u56DE200\u72B6\u6001\u7801\uFF0C\u8FDB\u884C\u5904\u7406</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">if statusCode != http.StatusOK {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">               </span></span><span style="--0:#e1e4e8">log.Errorf("http call failed, status: %d", statusCode)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">               </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                 </span></span><span style="--0:#e1e4e8">[]byte("http call failed"), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">               </span></span><span style="--0:#e1e4e8">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">// \u6253\u5370\u54CD\u5E94\u7684HTTP\u72B6\u6001\u7801\u548C\u5E94\u7B54body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">log.Infof("get status: %d, response body: %s", statusCode, responseBody)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">// \u4ECE\u5E94\u7B54\u5934\u4E2D\u89E3\u6790token\u5B57\u6BB5\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u5934\u4E2D</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">token := responseHeaders.Get(config.tokenHeader)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">if token != "" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">               </span></span><span style="--0:#e1e4e8">proxywasm.AddHttpRequestHeader(config.tokenHeader, token)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">// \u6062\u590D\u539F\u59CB\u8BF7\u6C42\u6D41\u7A0B\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u5904\u7406\uFF0C\u624D\u80FD\u6B63\u5E38\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">             </span></span><span style="--0:#e1e4e8">proxywasm.ResumeHttpRequest()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u7531\u4E8E\u8C03\u7528\u5916\u90E8\u670D\u52A1\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">log.Errorf("Error occured while calling http, it seems cannot find the service cluster.")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">} else {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u9700\u8981\u7B49\u5F85\u5F02\u6B65\u56DE\u8C03\u5B8C\u6210\uFF0C\u8FD4\u56DEPause\u72B6\u6001\uFF0C\u53EF\u4EE5\u88ABResumeHttpRequest\u6062\u590D</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionPause</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;errors&#x22;\x7F  &#x22;net/http&#x22;\x7F  &#x22;strings&#x22;\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    &#x22;http-call&#x22;,\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7Ftype MyConfig struct {\x7F  // \u7528\u4E8E\u53D1\u8D77HTTP\u8C03\u7528client\x7F  client      wrapper.HttpClient\x7F  // \u8BF7\u6C42url\x7F  requestPath string\x7F  // \u6839\u636E\u8FD9\u4E2Akey\u53D6\u51FA\u8C03\u7528\u670D\u52A1\u7684\u5E94\u7B54\u5934\u5BF9\u5E94\u5B57\u6BB5\uFF0C\u518D\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u7684\u8BF7\u6C42\u5934\uFF0Ckey\u4E3A\u6B64\u914D\u7F6E\u9879\x7F  tokenHeader string\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {\x7F  config.tokenHeader = json.Get(&#x22;tokenHeader&#x22;).String()\x7F  if config.tokenHeader == &#x22;&#x22; {\x7F    return errors.New(&#x22;missing tokenHeader in config&#x22;)\x7F  }\x7F  config.requestPath = json.Get(&#x22;requestPath&#x22;).String()\x7F  if config.requestPath == &#x22;&#x22; {\x7F    return errors.New(&#x22;missing requestPath in config&#x22;)\x7F  }\x7F  // \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-svc.dns, my-svc.static, service-provider.DEFAULT-GROUP.public.nacos, httpbin.my-ns.svc.cluster.local\x7F  serviceName := json.Get(&#x22;serviceName&#x22;).String()\x7F  servicePort := json.Get(&#x22;servicePort&#x22;).Int()\x7F  if servicePort == 0 {\x7F    if strings.HasSuffix(serviceName, &#x22;.static&#x22;) {\x7F      // \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80\x7F      servicePort = 80\x7F    }\x7F  }\x7F  config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{\x7F    FQDN: serviceName,\x7F    Port: servicePort,\x7F        })\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\x7F  // \u4F7F\u7528client\u7684Get\u65B9\u6CD5\u53D1\u8D77HTTP Get\u8C03\u7528\uFF0C\u6B64\u5904\u7701\u7565\u4E86timeout\u53C2\u6570\uFF0C\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4500\u6BEB\u79D2\x7F  err := config.client.Get(config.requestPath, nil,\x7F           // \u56DE\u8C03\u51FD\u6570\uFF0C\u5C06\u5728\u54CD\u5E94\u5F02\u6B65\u8FD4\u56DE\u65F6\u88AB\u6267\u884C\x7F           func(statusCode int, responseHeaders http.Header, responseBody []byte) {\x7F             // \u8BF7\u6C42\u6CA1\u6709\u8FD4\u56DE200\u72B6\u6001\u7801\uFF0C\u8FDB\u884C\u5904\u7406\x7F             if statusCode != http.StatusOK {\x7F               log.Errorf(&#x22;http call failed, status: %d&#x22;, statusCode)\x7F               proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,\x7F                 []byte(&#x22;http call failed&#x22;), -1)\x7F               return\x7F             }\x7F             // \u6253\u5370\u54CD\u5E94\u7684HTTP\u72B6\u6001\u7801\u548C\u5E94\u7B54body\x7F             log.Infof(&#x22;get status: %d, response body: %s&#x22;, statusCode, responseBody)\x7F             // \u4ECE\u5E94\u7B54\u5934\u4E2D\u89E3\u6790token\u5B57\u6BB5\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u5934\u4E2D\x7F             token := responseHeaders.Get(config.tokenHeader)\x7F             if token != &#x22;&#x22; {\x7F               proxywasm.AddHttpRequestHeader(config.tokenHeader, token)\x7F             }\x7F             // \u6062\u590D\u539F\u59CB\u8BF7\u6C42\u6D41\u7A0B\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u5904\u7406\uFF0C\u624D\u80FD\u6B63\u5E38\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1\x7F             proxywasm.ResumeHttpRequest()\x7F    })\x7F\x7F  if err != nil {\x7F    // \u7531\u4E8E\u8C03\u7528\u5916\u90E8\u670D\u52A1\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7\x7F    log.Errorf(&#x22;Error occured while calling http, it seems cannot find the service cluster.&#x22;)\x7F    return types.ActionContinue\x7F  } else {\x7F    // \u9700\u8981\u7B49\u5F85\u5F02\u6B65\u56DE\u8C03\u5B8C\u6210\uFF0C\u8FD4\u56DEPause\u72B6\u6001\uFF0C\u53EF\u4EE5\u88ABResumeHttpRequest\u6062\u590D\x7F    return types.ActionPause\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528redis">\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528Redis</h3>
<p>\u4F7F\u7528\u5982\u4E0B\u793A\u4F8B\u4EE3\u7801\u5B9E\u73B0Redis\u9650\u6D41\u63D2\u4EF6</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">strconv</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">time</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/gjson</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/resp</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">SetCtx</span><span style="--0:#E1E4E8">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"redis-demo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ParseConfigBy</span><span style="--0:#E1E4E8">(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestHeadersBy</span><span style="--0:#E1E4E8">(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessResponseHeadersBy</span><span style="--0:#E1E4E8">(onHttpResponseHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">client </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">RedisClient</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">qpm    </span><span style="--0:#F97583">int</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">parseConfig</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">json</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">gjson</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Result</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">serviceName </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"serviceName"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"servicePort"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> servicePort </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">HasSuffix</span><span style="--0:#E1E4E8">(serviceName, </span><span style="--0:#9ECBFF">".static"</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6">// \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">username </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"username"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">password </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"password"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5355\u4F4D\u662F\u6BEB\u79D2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">timeout </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeout"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> timeout </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">timeout </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">qpm </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"qpm"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.qpm </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">int</span><span style="--0:#E1E4E8">(qpm)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.client </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> wrapper.</span><span style="--0:#B392F0">NewRedisClusterClient</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">FQDNCluster</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">FQDN: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">Port: servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> config.client.</span><span style="--0:#B392F0">Init</span><span style="--0:#E1E4E8">(username, password, timeout)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">now </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> time.</span><span style="--0:#B392F0">Now</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">minuteAligned </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> now.</span><span style="--0:#B392F0">Truncate</span><span style="--0:#E1E4E8">(time.Minute)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">timeStamp </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> strconv.</span><span style="--0:#B392F0">FormatInt</span><span style="--0:#E1E4E8">(minuteAligned.</span><span style="--0:#B392F0">Unix</span><span style="--0:#E1E4E8">(), </span><span style="--0:#79B8FF">10</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5982\u679C redis api \u8FD4\u56DE\u7684 err != nil\uFF0C\u4E00\u822C\u662F\u7531\u4E8E\u7F51\u5173\u627E\u4E0D\u5230 redis \u540E\u7AEF\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u8BEF\u5220\u9664\u4E86 redis \u540E\u7AEF\u670D\u52A1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> config.client.</span><span style="--0:#B392F0">Incr</span><span style="--0:#E1E4E8">(timeStamp, </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">response</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">resp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Value</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"call redis error: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ctx.</span><span style="--0:#B392F0">SetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">, timeStamp)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ctx.</span><span style="--0:#B392F0">SetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">, strconv.</span><span style="--0:#B392F0">Itoa</span><span style="--0:#E1E4E8">(config.qpm</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">response.</span><span style="--0:#B392F0">Integer</span><span style="--0:#E1E4E8">()))</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Integer</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> config.client.</span><span style="--0:#B392F0">Expire</span><span style="--0:#E1E4E8">(timeStamp, </span><span style="--0:#79B8FF">60</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">response</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">resp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Value</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"call redis error: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Error occured while calling redis, it seems cannot find the redis cluster."</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Integer</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> config.qpm {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">SendHttpResponse</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">429</span><span style="--0:#E1E4E8">, [][</span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">{{</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">, timeStamp}, {</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"0"</span><span style="--0:#E1E4E8">}}, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Too many requests</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">), </span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7531\u4E8E\u8C03\u7528redis\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Error occured while calling redis, it seems cannot find the redis cluster."</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BF7\u6C42hold\u4F4F\uFF0C\u7B49\u5F85redis\u8C03\u7528\u5B8C\u6210</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionPause</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpResponseHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpResponseHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">, ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpResponseHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">, ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;strconv&#x22;\x7F  &#x22;time&#x22;\x7F\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F  &#x22;github.com/tidwall/resp&#x22;\x7F\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    &#x22;redis-demo&#x22;,\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F    wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),\x7F  )\x7F}\x7F\x7Ftype RedisCallConfig struct {\x7F  client wrapper.RedisClient\x7F  qpm    int\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *RedisCallConfig, log wrapper.Log) error {\x7F  // \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local\x7F  serviceName := json.Get(&#x22;serviceName&#x22;).String()\x7F  servicePort := json.Get(&#x22;servicePort&#x22;).Int()\x7F  if servicePort == 0 {\x7F    if strings.HasSuffix(serviceName, &#x22;.static&#x22;) {\x7F      // \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80\x7F      servicePort = 80\x7F    } else {\x7F      servicePort = 6379\x7F    }\x7F  }\x7F  username := json.Get(&#x22;username&#x22;).String()\x7F  password := json.Get(&#x22;password&#x22;).String()\x7F  // \u5355\u4F4D\u662F\u6BEB\u79D2\x7F  timeout := json.Get(&#x22;timeout&#x22;).Int()\x7F  if timeout == 0 {\x7F    timeout = 1000\x7F  }\x7F  qpm := json.Get(&#x22;qpm&#x22;).Int()\x7F  config.qpm = int(qpm)\x7F  config.client = wrapper.NewRedisClusterClient(wrapper.FQDNCluster{\x7F    FQDN: serviceName,\x7F    Port: servicePort,\x7F  })\x7F  return config.client.Init(username, password, timeout)\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log wrapper.Log) types.Action {\x7F  now := time.Now()\x7F  minuteAligned := now.Truncate(time.Minute)\x7F  timeStamp := strconv.FormatInt(minuteAligned.Unix(), 10)\x7F  // \u5982\u679C redis api \u8FD4\u56DE\u7684 err != nil\uFF0C\u4E00\u822C\u662F\u7531\u4E8E\u7F51\u5173\u627E\u4E0D\u5230 redis \u540E\u7AEF\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u8BEF\u5220\u9664\u4E86 redis \u540E\u7AEF\u670D\u52A1\x7F  err := config.client.Incr(timeStamp, func(response resp.Value) {\x7F    if response.Error() != nil {\x7F      log.Errorf(&#x22;call redis error: %v&#x22;, response.Error())\x7F      proxywasm.ResumeHttpRequest()\x7F    } else {\x7F      ctx.SetContext(&#x22;timeStamp&#x22;, timeStamp)\x7F      ctx.SetContext(&#x22;callTimeLeft&#x22;, strconv.Itoa(config.qpm-response.Integer()))\x7F      if response.Integer() == 1 {\x7F        err := config.client.Expire(timeStamp, 60, func(response resp.Value) {\x7F          if response.Error() != nil {\x7F            log.Errorf(&#x22;call redis error: %v&#x22;, response.Error())\x7F          }\x7F          proxywasm.ResumeHttpRequest()\x7F        })\x7F        if err != nil {\x7F          log.Errorf(&#x22;Error occured while calling redis, it seems cannot find the redis cluster.&#x22;)\x7F          proxywasm.ResumeHttpRequest()\x7F        }\x7F      } else {\x7F        if response.Integer() > config.qpm {\x7F          proxywasm.SendHttpResponse(429, [][2]string{{&#x22;timeStamp&#x22;, timeStamp}, {&#x22;callTimeLeft&#x22;, &#x22;0&#x22;}}, []byte(&#x22;Too many requests\\n&#x22;), -1)\x7F        } else {\x7F          proxywasm.ResumeHttpRequest()\x7F        }\x7F      }\x7F    }\x7F  })\x7F  if err != nil {\x7F    // \u7531\u4E8E\u8C03\u7528redis\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7\x7F    log.Errorf(&#x22;Error occured while calling redis, it seems cannot find the redis cluster.&#x22;)\x7F    return types.ActionContinue\x7F  } else {\x7F    // \u8BF7\u6C42hold\u4F4F\uFF0C\u7B49\u5F85redis\u8C03\u7528\u5B8C\u6210\x7F    return types.ActionPause\x7F  }\x7F}\x7F\x7Ffunc onHttpResponseHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log wrapper.Log) types.Action {\x7F  if ctx.GetContext(&#x22;timeStamp&#x22;) != nil {\x7F    proxywasm.AddHttpResponseHeader(&#x22;timeStamp&#x22;, ctx.GetContext(&#x22;timeStamp&#x22;).(string))\x7F  }\x7F  if ctx.GetContext(&#x22;callTimeLeft&#x22;) != nil {\x7F    proxywasm.AddHttpResponseHeader(&#x22;callTimeLeft&#x22;, ctx.GetContext(&#x22;callTimeLeft&#x22;).(string))\x7F  }\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>`,n={title:"\u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6",keywords:["wasm"],description:"\u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/wasm-go.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/wasm-go.md",t=void 0,d=function(){return`
# \u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6

## \u4E00\u3001\u5DE5\u5177\u51C6\u5907
\u9700\u8981\u5148\u5B89\u88C5 Golang \u548C TinyGo \u4E24\u4E2A\u7A0B\u5E8F

### 1. Golang
\uFF08\u8981\u6C42 1.18 \u7248\u672C\u4EE5\u4E0A\uFF09<br />\u5B98\u65B9\u6307\u5F15\u94FE\u63A5\uFF1A[https://go.dev/doc/install](https://go.dev/doc/install)

#### Windows

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://go.dev/dl/go1.19.windows-amd64.msi](https://go.dev/dl/go1.19.windows-amd64.msi)
2. \u6253\u5F00\u4E0B\u8F7D\u597D\u7684\u5B89\u88C5\u6587\u4EF6\u76F4\u63A5\u5B89\u88C5\uFF0C\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230 \`Program Files\` \u6216 \`Program Files (x86)\` \u76EE\u5F55
3. \u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528\u952E\u76D8\u4E0A\u7684\u5FEB\u6377\u952E\u201CWin+R\u201D\u6253\u5F00\u8FD0\u884C\u7A97\u53E3\uFF0C\u5728\u8FD0\u884C\u7A97\u53E3\u4E2D\u8F93\u5165\u201Ccmd\u201D\u70B9\u51FB\u786E\u5B9A\u5373\u53EF\u6253\u5F00\u547D\u4EE4\u7A97\u53E3\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A\`go version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### MacOS

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://go.dev/dl/go1.19.darwin-amd64.pkg](https://go.dev/dl/go1.19.darwin-amd64.pkg)
2. \u6253\u5F00\u4E0B\u8F7D\u597D\u7684\u5B89\u88C5\u6587\u4EF6\u76F4\u63A5\u5B89\u88C5\uFF0C\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230\`/usr/local/go\`\u76EE\u5F55
3. \u6253\u5F00\u7EC8\u7AEF\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A\`go version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### Linux

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://go.dev/dl/go1.19.linux-amd64.tar.gz](https://go.dev/dl/go1.19.linux-amd64.tar.gz)
2. \u6267\u884C\u4E0B\u5217\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A
\`\`\`bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
\`\`\`

3. \u6267\u884C \`go version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

### 2. TinyGo

\uFF08\u8981\u6C42 0.28.1 \u7248\u672C\u4EE5\u4E0A\uFF09<br />\u5B98\u65B9\u6307\u5F15\u94FE\u63A5\uFF1A[https://tinygo.org/getting-started/install/](https://tinygo.org/getting-started/install/)

#### Windows

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip](https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip)
2. \u89E3\u538B\u5B89\u88C5\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55
3. \u5982\u679C\u5B89\u88C5\u89E3\u538B\u540E\u7684\u76EE\u5F55\u4E3A\`C:\\tinygo\`\uFF0C\u5219\u9700\u8981\u5C06\`C:\\tinygo\\bin\`\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\`PATH\`\u4E2D\uFF0C\u4F8B\u5982\u901A\u8FC7\u5728\u547D\u4EE4\u7A97\u53E3\u4E2D\u8F93\u5165 set \u547D\u4EE4\u8BBE\u7F6E
\`\`\`bash
set PATH=%PATH%;"C:\\tinygo\\bin";
\`\`\`

4. \u5728\u547D\u4EE4\u7A97\u53E3\u6267\u884C\u547D\u4EE4 \`tinygo version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### MacOS

1. \u4E0B\u8F7D\u538B\u7F29\u5305\u5E76\u89E3\u538B
\`\`\`bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz
tar -zxf tinygo0.28.1.darwin-amd64.tar.gz
\`\`\`

2. \u5982\u679C\u5B89\u88C5\u89E3\u538B\u540E\u7684\u76EE\u5F55\u4E3A\`/tmp\`\uFF0C\u5219\u9700\u8981\u5C06\`/tmp/tinygo/bin\`\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\`PATH\`\u4E2D\uFF1A
\`\`\`bash
export PATH=/tmp/tinygo/bin:$PATH
\`\`\`

3. \u5728\u7EC8\u7AEF\u6267\u884C \`tinygo version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### Linux
\u4EE5 Ubuntu \u4E0B amd64 \u67B6\u6784\u4E3A\u4F8B\uFF0C\u5176\u4ED6\u7CFB\u7EDF\u8BF7\u53C2\u8003\u5B98\u65B9\u6307\u5F15\u94FE\u63A5

1. \u4E0B\u8F7D DEB \u6587\u4EF6\uFF0C\u5E76\u5B89\u88C5
\`\`\`bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb
sudo dpkg -i tinygo_0.28.1_amd64.deb
export PATH=$PATH:/usr/local/bin
\`\`\`

2. \u5728\u7EC8\u7AEF\u6267\u884C \`tinygo version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F


## \u4E8C\u3001\u7F16\u5199\u63D2\u4EF6

### 1. \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55

1. \u65B0\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u76EE\u5F55\u6587\u4EF6\uFF0C\u4F8B\u5982\`wasm-demo-go\`
2. \u5728\u6240\u5EFA\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u8FDB\u884C Go \u5DE5\u7A0B\u521D\u59CB\u5316
\`\`\`bash
go mod init wasm-demo-go
\`\`\`

3. \u56FD\u5185\u73AF\u5883\u53EF\u80FD\u9700\u8981\u8BBE\u7F6E\u4E0B\u8F7D\u4F9D\u8D56\u5305\u7684\u4EE3\u7406
\`\`\`bash
go env -w GOPROXY=https://proxy.golang.com.cn,direct
\`\`\`

4. \u4E0B\u8F7D\u6784\u5EFA\u63D2\u4EF6\u7684\u4F9D\u8D56
\`\`\`bash
go get github.com/higress-group/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
\`\`\`
### 2. \u7F16\u5199 main.go \u6587\u4EF6
\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF0C\u5B9E\u73B0\u4E86\u5728\u63D2\u4EF6\u914D\u7F6E\`mockEnable: true\`\u65F6\u76F4\u63A5\u8FD4\u56DE\`hello world\`\u5E94\u7B54\uFF1B\u672A\u505A\u63D2\u4EF6\u914D\u7F6E\uFF0C\u6216\u8005\u8BBE\u7F6E\`mockEnable: false\`\u65F6\u7ED9\u539F\u59CB\u8BF7\u6C42\u6DFB\u52A0 \`hello: world\`\u8BF7\u6C42\u5934\u3002\u66F4\u591A\u4F8B\u5B50\u8BF7\u53C2\u8003\u672C\u6587\u7B2C\u56DB\u8282\u3002
> \u6CE8\u610F\uFF1A\u5728\u7F51\u5173\u63A7\u5236\u53F0\u4E2D\u7684\u63D2\u4EF6\u914D\u7F6E\u4E3A yaml \u683C\u5F0F\uFF0C\u4E0B\u53D1\u7ED9\u63D2\u4EF6\u65F6\u5C06\u81EA\u52A8\u8F6C\u6362\u4E3A json \u683C\u5F0F\uFF0C\u6240\u4EE5\u4F8B\u5B50\u4E2D\u7684 parseConfig \u53EF\u4EE5\u76F4\u63A5\u4ECE json \u4E2D\u89E3\u6790\u914D\u7F6E

\`\`\`
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// \u63D2\u4EF6\u540D\u79F0
		"my-plugin",
		// \u4E3A\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570
		 wrapper.ParseConfigBy(parseConfig),
		// \u4E3A\u5904\u7406\u8BF7\u6C42\u5934\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E
type MyConfig struct {
	mockEnable bool
}

// \u5728\u63A7\u5236\u53F0\u63D2\u4EF6\u914D\u7F6E\u4E2D\u586B\u5199\u7684yaml\u914D\u7F6E\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3Ajson\uFF0C\u6B64\u5904\u76F4\u63A5\u4ECEjson\u8FD9\u4E2A\u53C2\u6570\u91CC\u89E3\u6790\u914D\u7F6E\u5373\u53EF
func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	// \u89E3\u6790\u51FA\u914D\u7F6E\uFF0C\u66F4\u65B0\u5230config\u4E2D
	config.mockEnable = json.Get("mockEnable").Bool()
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	proxywasm.AddHttpRequestHeader("hello", "world")
	if config.mockEnable {
		proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	}
	return types.ActionContinue
}
\`\`\`

#### HTTP \u5904\u7406\u6302\u8F7D\u70B9
\u4E0A\u9762\u793A\u4F8B\u4EE3\u7801\u4E2D\u901A\u8FC7 \`wrapper.ProcessRequestHeadersBy\`\u5C06\u81EA\u5B9A\u4E49\u51FD\u6570 \`onHttpRequestHeaders\`\u7528\u4E8E\`HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5\`\u5904\u7406\u8BF7\u6C42\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\uFF0C\u8BBE\u7F6E\u5176\u4ED6\u9636\u6BB5\u7684\u81EA\u5B9A\u4E49\u5904\u7406\u51FD\u6570

| HTTP \u5904\u7406\u9636\u6BB5 | \u89E6\u53D1\u65F6\u673A | \u6302\u8F7D\u65B9\u6CD5 |
| --- | --- | --- |
| HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42\u5934\u6570\u636E\u65F6 | wrapper.ProcessRequestHeadersBy |
| HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42 Body \u6570\u636E\u65F6 | wrapper.ProcessRequestBodyBy |
| HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54\u5934\u6570\u636E\u65F6 | wrapper.ProcessResponseHeadersBy |
| HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54 Body \u6570\u636E\u65F6 | wrapper.ProcessResponseBodyBy |

#### \u5DE5\u5177\u65B9\u6CD5
\u4E0A\u9762\u793A\u4F8B\u4EE3\u7801\u4E2D\u7684 \`proxywasm.AddHttpRequestHeader\` \u548C \`proxywasm.SendHttpResponse\`\u662F\u63D2\u4EF6 SDK \u63D0\u4F9B\u7684\u4E24\u4E2A\u5DE5\u5177\u65B9\u6CD5\uFF0C\u4E3B\u8981\u7684\u5DE5\u5177\u65B9\u6CD5\u89C1\u4E0B\u8868\uFF1A

| \u5206\u7C7B | \u65B9\u6CD5\u540D\u79F0 | \u7528\u9014 | \u53EF\u4EE5\u751F\u6548\u7684<br />HTTP \u5904\u7406\u9636\u6BB5 |
| --- | --- | --- | --- |
| \u8BF7\u6C42\u5934\u5904\u7406 | GetHttpRequestHeaders | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5<br /> |
|  | ReplaceHttpRequestHeaders | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | GetHttpRequestHeader | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | RemoveHttpRequestHeader | \u79FB\u9664\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpRequestHeader | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | AddHttpRequestHeader | \u65B0\u589E\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| \u8BF7\u6C42 Body \u5904\u7406 | GetHttpRequestBody | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
|  | AppendHttpRequestBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u672B\u5C3E | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
|  | PrependHttpRequestBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u7684\u5F00\u5934 | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpRequestBody | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
| \u5E94\u7B54\u5934\u5904\u7406 | GetHttpResponseHeaders | \u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5<br /> |
|  | ReplaceHttpResponseHeaders | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | GetHttpResponseHeader | \u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | RemoveHttpResponseHeader | \u79FB\u9664\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpResponseHeader | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | AddHttpResponseHeader | \u65B0\u589E\u4E00\u4E2A\u540E\u7AEF\u54CD\u5E94\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| \u5E94\u7B54 Body \u5904\u7406 | GetHttpResponseBody | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
|  | AppendHttpResponseBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u672B\u5C3E | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
|  | PrependHttpResponseBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u7684\u5F00\u5934 | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpResponseBody | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94 Body | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
| HTTP \u8C03\u7528 | DispatchHttpCall | \u53D1\u9001\u4E00\u4E2A HTTP \u8BF7\u6C42 | - |
|  | GetHttpCallResponseHeaders | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54\u5934 | - |
|  | GetHttpCallResponseBody | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Body | - |
|  | GetHttpCallResponseTrailers | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Trailer | - |
| \u76F4\u63A5\u54CD\u5E94 | SendHttpResponse | \u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u7279\u5B9A\u7684 HTTP \u5E94\u7B54 | - |
| \u6D41\u7A0B\u6062\u590D | ResumeHttpRequest | \u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u8BF7\u6C42\u5904\u7406\u6D41\u7A0B | - |
|  | ResumeHttpResponse | \u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u5E94\u7B54\u5904\u7406\u6D41\u7A0B | - |

### 3. \u7F16\u8BD1\u751F\u6210 WASM \u6587\u4EF6


\u4F7F\u7528 proxy-wasm \u793E\u533A 0.2.1 \u7248\u672C\u7684 ABI\uFF0C\u5728 HTTP \u8BF7\u6C42/\u54CD\u5E94\u5904\u7406\u9636\u6BB5\u53EA\u80FD\u4F7F\u7528 \`types.ActionContinue\` \u548C \`types.ActionPause\` \u4E24\u79CD\u8FD4\u56DE\u503C\u6765\u63A7\u5236\u72B6\u6001\uFF1A

1. types.ActionContinue\uFF1A\u7EE7\u7EED\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u7EE7\u7EED\u8BFB\u53D6\u8BF7\u6C42 body\uFF0C\u6216\u8005\u7EE7\u7EED\u8BFB\u53D6\u54CD\u5E94 body\u3002

2. types.ActionPause\uFF1A \u6682\u505C\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u5728 onHttpRequestHeaders \u901A\u8FC7 Http \u6216\u8005 Redis \u8C03\u7528\u5916\u90E8\u670D\u52A1\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u5728\u8C03\u7528\u5916\u90E8\u670D\u52A1\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u8C03\u7528 proxywasm.ResumeHttpRequest() \u6765\u6062\u590D\u8BF7\u6C42\u5904\u7406 \u6216\u8005\u8C03\u7528 proxywasm.SendHttpResponseWithDetail() \u6765\u8FD4\u56DE\u54CD\u5E94\u3002

\u53EA\u9700\u8FD9\u6837\u7B80\u5355\u7684\u72B6\u6001\u7BA1\u7406\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u7F16\u8BD1\u65B9\u5F0F\u5373\u53EF\uFF1A

\`\`\`bash
go mod tidy
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer" ./
\`\`\`

Higress \u6269\u5C55\u4E86 0.2.100 \u7248\u672C\u7684 ABI \u6765\u5B9E\u73B0\u66F4\u4E30\u5BCC\u7684 Header \u72B6\u6001\u7BA1\u7406\uFF0C\u5982\u679C\u8981\u4F7F\u7528\uFF0C\u8BF7\u7528\u4E0B\u9762\u7684\u7F16\u8BD1\u65B9\u5F0F\uFF1A

\`\`\`bash
go mod tidy
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100" ./
\`\`\`

Header \u7684\u72B6\u6001\u7BA1\u7406\u8BF4\u660E\u5982\u4E0B\uFF1A

1. HeaderContinue:

\u8868\u793A\u5F53\u524D filter \u5DF2\u7ECF\u5904\u7406\u5B8C\u6BD5\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002 types.ActionContinue \u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

2. HeaderStopIteration:

\u8868\u793A header \u8FD8\u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u6765\u5904\u7406\u3002 \u4F46\u662F\u5E76\u4E0D\u505C\u6B62\u4ECE\u8FDE\u63A5\u8BFB\u6570\u636E\uFF0C\u7EE7\u7EED\u89E6\u53D1 body data \u7684\u5904\u7406\u3002 \u8FD9\u6837\u53EF\u4EE5\u5728 body data \u5904\u7406\u9636\u6BB5\u53EF\u4EE5\u66F4\u65B0 Http \u8BF7\u6C42\u5934\u5185\u5BB9\u3002 \u5982\u679C body data \u8981\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C \u8FD9\u65F6 header \u662F\u4E5F\u4F1A\u88AB\u4E00\u8D77\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002

\u4F46\u6CE8\u610F\u8FD4\u56DE\u8FD9\u4E2A\u72B6\u6001\u65F6\uFF0C\u8981\u6C42\u5FC5\u987B\u6709 body\uFF0C\u5982\u679C\u6CA1\u6709 body\uFF0C\u8BF7\u6C42/\u54CD\u5E94\u5C06\u88AB\u4E00\u76F4\u963B\u585E\u3002

\u5224\u65AD\u662F\u5426\u5B58\u5728\u8BF7\u6C42 body \u53EF\u4EE5\u4F7F\u7528 [HasRequestBody()](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/request_wrapper.go#L86) 

3. HeaderContinueAndEndStream:

\u8868\u793A header \u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C\u4F46\u662F\u4E0B\u4E00\u4E2A filter \u6536\u5230\u7684 end_stream = false\uFF0C\u4E5F\u5C31\u662F\u6807\u8BB0\u8BF7\u6C42\u8FD8\u672A\u7ED3\u675F\u3002\u4EE5\u4FBF\u5F53\u524D filter \u518D\u589E\u52A0 body\u3002

4. HeaderStopAllIterationAndBuffer:

\u505C\u6B62\u6240\u6709\u8FED\u4EE3\uFF0C\u8868\u793A header \u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter\uFF0C\u5E76\u4E14\u5F53\u524D filter \u4E5F\u4E0D\u80FD\u6536\u5230 body data\u3002 \u5E76\u5BF9\u5F53\u524D\u8FC7\u6EE4\u5668\u53CA\u540E\u7EED\u8FC7\u6EE4\u5668\u7684\u5934\u90E8\u3001\u6570\u636E\u548C\u5C3E\u90E8\u8FDB\u884C\u7F13\u51B2\u3002\u5982\u679C\u7F13\u5B58\u5927\u5C0F\u8D85\u8FC7\u4E86 buffer limit\uFF0C\u5728\u8BF7\u6C42\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 413\uFF0C\u54CD\u5E94\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 500\u3002
\u540C\u65F6\u9700\u8981\u8C03\u7528 proxywasm.ResumeHttpRequest()\u3001 proxywasm.ResumeHttpResponse() \u6216\u8005 proxywasm.SendHttpResponseWithDetail()  \u51FD\u6570\u6765\u6062\u590D\u540E\u7EED\u5904\u7406\u3002

5. HeaderStopAllIterationAndWatermark:

\u540C\u4E0A\uFF0C\u533A\u522B\u662F\uFF0C\u5F53\u7F13\u5B58\u8D85\u8FC7\u4E86 buffer limit \u4F1A\u89E6\u53D1\u6D41\u63A7\uFF0C\u4E5F\u5C31\u662F\u6682\u505C\u4ECE\u8FDE\u63A5\u4E0A\u8BFB\u6570\u636E\u3002 0.2.1 ABI \u4E2D\u7684 types.ActionPause \u5B9E\u9645\u4E0A\u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

> \u5173\u4E8E types.HeaderStopIteration \u548C HeaderStopAllIterationAndWatermark \u7684\u4F7F\u7528\u573A\u666F\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B [ai-transformer \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99) \u548C  [ai-quota \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179) \u3002



\u5982\u679Cwindows\u4E0B\u7F16\u8BD1\u51FA\u73B0error: could not find wasm-opt, set the WASMOPT environment variable to override \u5219\u9700\u8981\u4E0B\u8F7Dhttps://github.com/WebAssembly/binaryen/ \u91CC\u9762\u5305\u542B\u4E86bin\\wasm-opt.exe\u5C06\u8FD9\u4E2A\u6587\u4EF6\u62F7\u8D1D\u5230tinygo\u7684bin\u76EE\u5F55\u4E0B\u91CD\u65B0\u7F16\u8BD1\u5373\u53EF\u3002 <br />
\u7F16\u8BD1\u6210\u529F\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 main.wasm\u3002\u8FD9\u4E2A\u6587\u4EF6\u5728\u4E0B\u9762\u672C\u5730\u8C03\u8BD5\u7684\u4F8B\u5B50\u4E2D\u4E5F\u4F1A\u88AB\u7528\u5230\u3002<br />

\u5982\u679Clinux/mac\u4E0B\u7F16\u8BD1\u51FA\u73B0\u8BE5\u9519\u8BEF\uFF0C\u4F7F\u7528apt/brew\u7B49\u7CFB\u7EDF\u81EA\u5E26\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5\u4E0Bbinaryen\u5373\u53EF\uFF0C\u4F8B\u5982\`brew install binaryen\`

\u8981\u5728Higress\u4E2D\u914D\u5408Wasmplugin CRD\u6216\u8005Console\u7684UI\u4EA4\u4E92\u914D\u7F6E\u8BE5\u63D2\u4EF6\uFF0C\u9700\u8981\u5C06\u8BE5wasm\u6587\u4EF6\u6253\u5305\u6210oci\u6216\u8005docker\u955C\u50CF\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u6863\uFF1A[\u300A\u81EA\u5B9A\u4E49\u63D2\u4EF6\u300B](https://higress.cn/docs/latest/plugins/custom)

## \u4E09\u3001\u672C\u5730\u8C03\u8BD5

### \u5DE5\u5177\u51C6\u5907
\u5B89\u88C5[Docker](https://docs.docker.com/engine/install/?spm=a2c4g.426926.0.0.29071f47tjgquo)

### \u4F7F\u7528 docker compose \u542F\u52A8\u9A8C\u8BC1
1. \u8FDB\u5165\u5728\u7F16\u5199\u63D2\u4EF6\u65F6\u521B\u5EFA\u7684\u76EE\u5F55\uFF0C\u4F8B\u5982wasm-demo\u76EE\u5F55\uFF0C\u786E\u8BA4\u8BE5\u76EE\u5F55\u4E0B\u5DF2\u7ECF\u7F16\u8BD1\u751F\u6210\u4E86main.wasm\u6587\u4EF6\u3002
2. \u5728\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6docker-compose.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A
\`\`\`yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.0.7
    entrypoint: /usr/local/bin/envoy
    # \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B
    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug
    depends_on:
    - httpbin
    networks:
    - wasmtest
    ports:
    - "10000:10000"
    volumes:
    - ./envoy.yaml:/etc/envoy/envoy.yaml
    - ./main.wasm:/etc/envoy/main.wasm

  httpbin:
    image: kennethreitz/httpbin:latest
    networks:
    - wasmtest
    ports:
    - "12345:80"

networks:
  wasmtest: {}
\`\`\`
3. \u7EE7\u7EED\u5728\u8BE5\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6envoy.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A
\`\`\`yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
  - name: listener_0
    address:
      socket_address:
        protocol: TCP
        address: 0.0.0.0
        port_value: 10000
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          scheme_header_transformation:
            scheme_to_overwrite: https
          stat_prefix: ingress_http
          route_config:
            name: local_route
            virtual_hosts:
            - name: local_service
              domains: ["*"]
              routes:
              - match:
                  prefix: "/"
                route:
                  cluster: httpbin
          http_filters:
          - name: wasmdemo
            typed_config:
              "@type": type.googleapis.com/udpa.type.v1.TypedStruct
              type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
              value:
                config:
                  name: wasmdemo
                  vm_config:
                    runtime: envoy.wasm.runtime.v8
                    code:
                      local:
                        filename: /etc/envoy/main.wasm
                  configuration:
                    "@type": "type.googleapis.com/google.protobuf.StringValue"
                    value: |
                      {
                        "mockEnable": false
                      }
          - name: envoy.filters.http.router
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
  clusters:
  - name: httpbin
    connect_timeout: 30s
    type: LOGICAL_DNS
    # Comment out the following line to test on v6 networks
    dns_lookup_family: V4_ONLY
    lb_policy: ROUND_ROBIN
    load_assignment:
      cluster_name: httpbin
      endpoints:
      - lb_endpoints:
        - endpoint:
            address:
              socket_address:
                address: httpbin
                port_value: 80
\`\`\`
4. \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8docker compose\u3002
\`\`\`bash
docker compose up
\`\`\`

### \u529F\u80FD\u9A8C\u8BC1
1. WASM\u529F\u80FD\u9A8C\u8BC1

\u4F7F\u7528curl\u76F4\u63A5\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u4E0D\u7ECF\u8FC7\u7F51\u5173\u65F6\u7684\u8BF7\u6C42\u5934\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A
\`\`\`
curl http://127.0.0.1:12345/get

{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "127.0.0.1:12345",
    "User-Agent": "curl/7.79.1"
  },
  "origin": "172.18.0.1",
  "url": "http://127.0.0.1:12345/get"
}
\`\`\`

\u4F7F\u7528curl\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u7ECF\u8FC7\u7F51\u5173\u5904\u7406\u540E\u7684\u8BF7\u6C42\u5934\u7684\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A
\`\`\`
curl http://127.0.0.1:10000/get

{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Hello": "world",
    "Host": "127.0.0.1:10000",
    "Original-Host": "127.0.0.1:10000",
    "Req-Start-Time": "1681269273896",
    "User-Agent": "curl/7.79.1",
    "X-Envoy-Expected-Rq-Timeout-Ms": "15000"
  },
  "origin": "172.18.0.3",
  "url": "https://127.0.0.1:10000/get"
}
\`\`\`

\u6B64\u65F6\u4E0A\u6587\u7F16\u5199\u63D2\u4EF6\u7684\u529F\u80FD\u5DF2\u7ECF\u751F\u6548\u4E86\uFF0C\u52A0\u5165\u4E86\`hello: world\`\u8BF7\u6C42\u5934\u3002

2. \u63D2\u4EF6\u914D\u7F6E\u4FEE\u6539\u9A8C\u8BC1

\u4FEE\u6539envoy.yaml\uFF0C\u5C06\`mockEnable\`\u914D\u7F6E\u4FEE\u6539\u4E3Atrue\u3002
\`\`\`yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |
      {
        "mockEnable": true
      }
\`\`\`

\u4F7F\u7528curl\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u7ECF\u8FC7\u7F51\u5173\u5904\u7406\u540E\u7684\u8BF7\u6C42\u5934\u7684\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A

\`\`\`
curl http://127.0.0.1:10000/get

hello world
\`\`\`
\u8BF4\u660E\u63D2\u4EF6\u914D\u7F6E\u4FEE\u6539\u751F\u6548\uFF0C\u5F00\u542F\u4E86mock\u5E94\u7B54\u76F4\u63A5\u8FD4\u56DE\u4E86hello world\u3002


## \u66F4\u591A\u793A\u4F8B

### \u65E0\u914D\u7F6E\u63D2\u4EF6
\u63D2\u4EF6\u65E0\u9700\u914D\u7F6E\u65F6\uFF0C\u76F4\u63A5\u5B9A\u4E49\u7A7A\u7ED3\u6784\u4F53\u5373\u53EF

\`\`\`
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
)

func main() {
	wrapper.SetCtx(
		"hello-world",
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

type MyConfig struct {}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	return types.ActionContinue
}
\`\`\`

### \u5728\u63D2\u4EF6\u4E2D\u8BF7\u6C42\u5916\u90E8\u670D\u52A1
\u76EE\u524D\u4EC5\u652F\u6301 http \u8C03\u7528\uFF0C\u652F\u6301\u8BBF\u95EE\u5728\u7F51\u5173\u63A7\u5236\u53F0\u4E2D\u8BBE\u7F6E\u4E86\u670D\u52A1\u6765\u6E90\u7684 Nacos\u3001K8s \u670D\u52A1\uFF0C\u4EE5\u53CA\u56FA\u5B9A\u5730\u5740\u6216 DNS \u6765\u6E90\u7684\u670D\u52A1\u3002\u8BF7\u6CE8\u610F\uFF0C\u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528\`net/http\`\u5E93\u4E2D\u7684 HTTP client\uFF0C\u5FC5\u987B\u4F7F\u7528\u5982\u4E0B\u4F8B\u4E2D\u5C01\u88C5\u7684 HTTP client\u3002<br />\u4E0B\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5728\u914D\u7F6E\u89E3\u6790\u9636\u6BB5\u89E3\u6790\u670D\u52A1\u7C7B\u578B\uFF0C\u751F\u6210\u5BF9\u5E94\u7684 HTTP client \uFF1B\u5728\u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5\u6839\u636E\u914D\u7F6E\u7684\u8BF7\u6C42\u8DEF\u5F84\u8BBF\u95EE\u5BF9\u5E94\u670D\u52A1\uFF0C\u89E3\u6790\u5E94\u7B54\u5934\uFF0C\u7136\u540E\u518D\u8BBE\u7F6E\u5728\u539F\u59CB\u7684\u8BF7\u6C42\u5934\u4E2D\u3002

\`\`\`
package main

import (
	"errors"
	"net/http"
	"strings"
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		"http-call",
		wrapper.ParseConfigBy(parseConfig),
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

type MyConfig struct {
	// \u7528\u4E8E\u53D1\u8D77HTTP\u8C03\u7528client
	client      wrapper.HttpClient
	// \u8BF7\u6C42url
	requestPath string
	// \u6839\u636E\u8FD9\u4E2Akey\u53D6\u51FA\u8C03\u7528\u670D\u52A1\u7684\u5E94\u7B54\u5934\u5BF9\u5E94\u5B57\u6BB5\uFF0C\u518D\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u7684\u8BF7\u6C42\u5934\uFF0Ckey\u4E3A\u6B64\u914D\u7F6E\u9879
	tokenHeader string
}

func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	config.tokenHeader = json.Get("tokenHeader").String()
	if config.tokenHeader == "" {
		return errors.New("missing tokenHeader in config")
	}
	config.requestPath = json.Get("requestPath").String()
	if config.requestPath == "" {
		return errors.New("missing requestPath in config")
	}
	// \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-svc.dns, my-svc.static, service-provider.DEFAULT-GROUP.public.nacos, httpbin.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
		if strings.HasSuffix(serviceName, ".static") {
			// \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80
			servicePort = 80
		}
	}
	config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{
		FQDN: serviceName,
		Port: servicePort,
        })
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	// \u4F7F\u7528client\u7684Get\u65B9\u6CD5\u53D1\u8D77HTTP Get\u8C03\u7528\uFF0C\u6B64\u5904\u7701\u7565\u4E86timeout\u53C2\u6570\uFF0C\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4500\u6BEB\u79D2
	err := config.client.Get(config.requestPath, nil,
		       // \u56DE\u8C03\u51FD\u6570\uFF0C\u5C06\u5728\u54CD\u5E94\u5F02\u6B65\u8FD4\u56DE\u65F6\u88AB\u6267\u884C
		       func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			       // \u8BF7\u6C42\u6CA1\u6709\u8FD4\u56DE200\u72B6\u6001\u7801\uFF0C\u8FDB\u884C\u5904\u7406
			       if statusCode != http.StatusOK {
				       log.Errorf("http call failed, status: %d", statusCode)
				       proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,
					       []byte("http call failed"), -1)
				       return
			       }
			       // \u6253\u5370\u54CD\u5E94\u7684HTTP\u72B6\u6001\u7801\u548C\u5E94\u7B54body
			       log.Infof("get status: %d, response body: %s", statusCode, responseBody)
			       // \u4ECE\u5E94\u7B54\u5934\u4E2D\u89E3\u6790token\u5B57\u6BB5\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u5934\u4E2D
			       token := responseHeaders.Get(config.tokenHeader)
			       if token != "" {
				       proxywasm.AddHttpRequestHeader(config.tokenHeader, token)
			       }
			       // \u6062\u590D\u539F\u59CB\u8BF7\u6C42\u6D41\u7A0B\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u5904\u7406\uFF0C\u624D\u80FD\u6B63\u5E38\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1
			       proxywasm.ResumeHttpRequest()
		})
 	
	if err != nil {
		// \u7531\u4E8E\u8C03\u7528\u5916\u90E8\u670D\u52A1\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7
		log.Errorf("Error occured while calling http, it seems cannot find the service cluster.")
		return types.ActionContinue
	} else {
		// \u9700\u8981\u7B49\u5F85\u5F02\u6B65\u56DE\u8C03\u5B8C\u6210\uFF0C\u8FD4\u56DEPause\u72B6\u6001\uFF0C\u53EF\u4EE5\u88ABResumeHttpRequest\u6062\u590D
		return types.ActionPause
	}
}
\`\`\`

### \u5728\u63D2\u4EF6\u4E2D\u8C03\u7528Redis

\u4F7F\u7528\u5982\u4E0B\u793A\u4F8B\u4EE3\u7801\u5B9E\u73B0Redis\u9650\u6D41\u63D2\u4EF6

\`\`\`go
package main

import (
	"strconv"
	"time"

	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
	"github.com/tidwall/resp"

	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
)

func main() {
	wrapper.SetCtx(
		"redis-demo",
		wrapper.ParseConfigBy(parseConfig),
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
	)
}

type RedisCallConfig struct {
	client wrapper.RedisClient
	qpm    int
}

func parseConfig(json gjson.Result, config *RedisCallConfig, log wrapper.Log) error {
	// \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
		if strings.HasSuffix(serviceName, ".static") {
			// \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80
			servicePort = 80
		} else {
			servicePort = 6379
		}
	}
	username := json.Get("username").String()
	password := json.Get("password").String()
	// \u5355\u4F4D\u662F\u6BEB\u79D2
	timeout := json.Get("timeout").Int()
	if timeout == 0 {
		timeout = 1000
	}
	qpm := json.Get("qpm").Int()
	config.qpm = int(qpm)
	config.client = wrapper.NewRedisClusterClient(wrapper.FQDNCluster{
		FQDN: serviceName,
		Port: servicePort,
	})
	return config.client.Init(username, password, timeout)
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log wrapper.Log) types.Action {
	now := time.Now()
	minuteAligned := now.Truncate(time.Minute)
	timeStamp := strconv.FormatInt(minuteAligned.Unix(), 10)
	// \u5982\u679C redis api \u8FD4\u56DE\u7684 err != nil\uFF0C\u4E00\u822C\u662F\u7531\u4E8E\u7F51\u5173\u627E\u4E0D\u5230 redis \u540E\u7AEF\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u8BEF\u5220\u9664\u4E86 redis \u540E\u7AEF\u670D\u52A1
	err := config.client.Incr(timeStamp, func(response resp.Value) {
		if response.Error() != nil {
			log.Errorf("call redis error: %v", response.Error())
			proxywasm.ResumeHttpRequest()
		} else {
			ctx.SetContext("timeStamp", timeStamp)
			ctx.SetContext("callTimeLeft", strconv.Itoa(config.qpm-response.Integer()))
			if response.Integer() == 1 {
				err := config.client.Expire(timeStamp, 60, func(response resp.Value) {
					if response.Error() != nil {
						log.Errorf("call redis error: %v", response.Error())
					}
					proxywasm.ResumeHttpRequest()
				})
				if err != nil {
					log.Errorf("Error occured while calling redis, it seems cannot find the redis cluster.")
					proxywasm.ResumeHttpRequest()
				}
			} else {
				if response.Integer() > config.qpm {
					proxywasm.SendHttpResponse(429, [][2]string{{"timeStamp", timeStamp}, {"callTimeLeft", "0"}}, []byte("Too many requests\\n"), -1)
				} else {
					proxywasm.ResumeHttpRequest()
				}
			}
		}
	})
	if err != nil {
		// \u7531\u4E8E\u8C03\u7528redis\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7
		log.Errorf("Error occured while calling redis, it seems cannot find the redis cluster.")
		return types.ActionContinue
	} else {
		// \u8BF7\u6C42hold\u4F4F\uFF0C\u7B49\u5F85redis\u8C03\u7528\u5B8C\u6210
		return types.ActionPause
	}
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log wrapper.Log) types.Action {
	if ctx.GetContext("timeStamp") != nil {
		proxywasm.AddHttpResponseHeader("timeStamp", ctx.GetContext("timeStamp").(string))
	}
	if ctx.GetContext("callTimeLeft") != nil {
		proxywasm.AddHttpResponseHeader("callTimeLeft", ctx.GetContext("callTimeLeft").(string))
	}
	return types.ActionContinue
}
\`\`\`
`},i=function(){return s},l=function(){return[{depth:2,slug:"\u4E00\u5DE5\u5177\u51C6\u5907",text:"\u4E00\u3001\u5DE5\u5177\u51C6\u5907"},{depth:3,slug:"1-golang",text:"1. Golang"},{depth:4,slug:"windows",text:"Windows"},{depth:4,slug:"macos",text:"MacOS"},{depth:4,slug:"linux",text:"Linux"},{depth:3,slug:"2-tinygo",text:"2. TinyGo"},{depth:4,slug:"windows-1",text:"Windows"},{depth:4,slug:"macos-1",text:"MacOS"},{depth:4,slug:"linux-1",text:"Linux"},{depth:2,slug:"\u4E8C\u7F16\u5199\u63D2\u4EF6",text:"\u4E8C\u3001\u7F16\u5199\u63D2\u4EF6"},{depth:3,slug:"1-\u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55",text:"1. \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55"},{depth:3,slug:"2-\u7F16\u5199-maingo-\u6587\u4EF6",text:"2. \u7F16\u5199 main.go \u6587\u4EF6"},{depth:4,slug:"http-\u5904\u7406\u6302\u8F7D\u70B9",text:"HTTP \u5904\u7406\u6302\u8F7D\u70B9"},{depth:4,slug:"\u5DE5\u5177\u65B9\u6CD5",text:"\u5DE5\u5177\u65B9\u6CD5"},{depth:3,slug:"3-\u7F16\u8BD1\u751F\u6210-wasm-\u6587\u4EF6",text:"3. \u7F16\u8BD1\u751F\u6210 WASM \u6587\u4EF6"},{depth:2,slug:"\u4E09\u672C\u5730\u8C03\u8BD5",text:"\u4E09\u3001\u672C\u5730\u8C03\u8BD5"},{depth:3,slug:"\u5DE5\u5177\u51C6\u5907",text:"\u5DE5\u5177\u51C6\u5907"},{depth:3,slug:"\u4F7F\u7528-docker-compose-\u542F\u52A8\u9A8C\u8BC1",text:"\u4F7F\u7528 docker compose \u542F\u52A8\u9A8C\u8BC1"},{depth:3,slug:"\u529F\u80FD\u9A8C\u8BC1",text:"\u529F\u80FD\u9A8C\u8BC1"},{depth:2,slug:"\u66F4\u591A\u793A\u4F8B",text:"\u66F4\u591A\u793A\u4F8B"},{depth:3,slug:"\u65E0\u914D\u7F6E\u63D2\u4EF6",text:"\u65E0\u914D\u7F6E\u63D2\u4EF6"},{depth:3,slug:"\u5728\u63D2\u4EF6\u4E2D\u8BF7\u6C42\u5916\u90E8\u670D\u52A1",text:"\u5728\u63D2\u4EF6\u4E2D\u8BF7\u6C42\u5916\u90E8\u670D\u52A1"},{depth:3,slug:"\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528redis",text:"\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528Redis"}]},e=c((u,m,x)=>{const{layout:F,...p}=n;return p.file=a,p.url=t,r`${v()}${y(s)}`})});export{e as Content,f as __tla,i as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,d as rawContent,t as url};
