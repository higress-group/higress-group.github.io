import{c as p,__tla as r}from"./astro-component.m4CCZO6J.js";import{r as c,m as g,u,__tla as v}from"./constant.C-OOL79E.js";import{__tla as y}from"./astro/assets-service.BhtN0nM5.js";let s,o,a,t,d,l,n,h=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<h1 id="implement-a-wasm-plugin-with-golang">Implement a WASM plugin with Golang</h1>
<h2 id="1-prepare-development-tools">1. Prepare Development Tools</h2>
<p>First, install Golang and Tinygo.</p>
<h3 id="1-golang">1. Golang</h3>
<p>Min Version: 1.18<br>Official download link: <a href="https://go.dev/doc/install" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/doc/install</a></p>
<h4 id="windows">Windows</h4>
<ol>
<li>Download the installer: <a href="https://go.dev/dl/go1.19.windows-amd64.msi" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.19.windows-amd64.msi</a></li>
<li>Run the downloaded installer to start the installation. It will be installed to <code dir="auto">Program Files</code> or <code dir="auto">Program Files (x86)</code> folder by default.</li>
<li>After completed the installation, open \u201CRun\u201D dialog with hotkey \u201CWin+R\u201D. Type \u201Ccmd\u201D in the dialog and click \u201COK\u201D to open Command Line Prompt. Type: <code dir="auto">go version</code>. If version info is displayed, the package has been successfully installed.</li>
</ol>
<h4 id="macos">MacOS</h4>
<ol>
<li>Download the installer: <a href="https://go.dev/dl/go1.19.darwin-amd64.pkg" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.19.darwin-amd64.pkg</a></li>
<li>Run the downloaded installer to start the installation. It will be installed to <code dir="auto">/usr/local/go</code> folder by default.</li>
<li>Open Terminal and type: <code dir="auto">go version</code>. If version info is displayed, the package has been successfully installed.</li>
</ol>
<h4 id="linux">Linux</h4>
<ol>
<li>Download the installer: <a href="https://go.dev/dl/go1.19.linux-amd64.tar.gz" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.19.linux-amd64.tar.gz</a></li>
<li>Execute following commands to start the installation:</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-rf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/go</span><span style="--0:#E1E4E8"> &#x26;&#x26; </span><span style="--0:#B392F0">tar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-C</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-xzf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">go1.19.linux-amd64.tar.gz</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> PATH</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">$PATH:/usr/local/go/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rm -rf /usr/local/go &#x26;&#x26; tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz\x7Fexport PATH=$PATH:/usr/local/go/bin"><div></div></button></div></figure></div>
<ol start="3">
<li>Execute <code dir="auto">go version</code>. If version info is displayed, the package has been successfully installed.</li>
</ol>
<h3 id="2-tinygo">2. TinyGo</h3>
<p>Min Version: 0.28.1<br>Official download link: <a href="https://tinygo.org/getting-started/install/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://tinygo.org/getting-started/install/</a></p>
<h4 id="windows-1">Windows</h4>
<ol>
<li>Download the package: <a href="https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip</a></li>
<li>Unpack the package to the target folder</li>
<li>If the package is unpacked to folder <code dir="auto">C:\\tinygo</code>, you need to add <code dir="auto">C:\\tinygo\\bin</code> into the environment variable <code dir="auto">PATH</code>, using set command in Command Line Prompt for example.</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">set</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">PATH=%PATH%</span><span style="--0:#E1E4E8">;</span><span style="--0:#B392F0">"C:\\tinygo\\bin"</span><span style="--0:#E1E4E8">;</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="set PATH=%PATH%;&#x22;C:\\tinygo\\bin&#x22;;"><div></div></button></div></figure></div>
<ol start="4">
<li>Execute <code dir="auto">tinygo version</code> command in Command Line Prompt. If version info is displayed, the package has been successfully installed.</li>
</ol>
<h4 id="macos-1">MacOS</h4>
<ol>
<li>Download and unpack the package</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">wget</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">tar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-zxf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tinygo0.28.1.darwin-amd64.tar.gz</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz\x7Ftar -zxf tinygo0.28.1.darwin-amd64.tar.gz"><div></div></button></div></figure></div>
<ol start="2">
<li>If the package is unpacked to folder <code dir="auto">/tmp</code>, you need to add <code dir="auto">/tmp/tinygo/bin</code> to the environment variable <code dir="auto">PATH</code>:</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> PATH</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">/tmp/tinygo/bin:$PATH</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export PATH=/tmp/tinygo/bin:$PATH"><div></div></button></div></figure></div>
<ol start="3">
<li>Execute command <code dir="auto">tinygo version</code> in Terminal.  If version info is displayed, the package has been successfully installed.</li>
</ol>
<h4 id="linux-1">Linux</h4>
<p>Following steps are based on Ubuntu AMD64. For other OSes, please refer to the official document.</p>
<ol>
<li>Download and install the DEB package.</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">wget</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sudo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dpkg</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tinygo_0.28.1_amd64.deb</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> PATH</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">$PATH:/usr/local/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb\x7Fsudo dpkg -i tinygo_0.28.1_amd64.deb\x7Fexport PATH=$PATH:/usr/local/bin"><div></div></button></div></figure></div>
<ol start="2">
<li>Execute command <code dir="auto">tinygo version</code> in Terminal. If version info is displayed, the package has been successfully installed.</li>
</ol>
<h2 id="2-write-a-plugin">2. Write a plugin</h2>
<h3 id="1-initialize-the-project">1. Initialize the project</h3>
<p>You can create your wasm-go plugin directory in the repo <a href="https://github.com/alibaba/higress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">higress</a>\u2019s <a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">plugins/wasm-go</a>
that you can use the scaffolding tools provided in this directory\uFF08see 1.1\uFF09\uFF1B
or create a new directory for your Go project yourself(see 1.2).
If you are developing wasm-go plugins for the first time, it is recommended to take the former.</p>
<h4 id="11-create-wasm-go-plugin-in-pluginswasm-go">1.1 create wasm-go plugin in <a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">plugins/wasm-go</a></h4>
<ol>
<li><code dir="auto">git clone https://github.com/alibaba/higress.git</code>, to clone project to local\uFF1B</li>
<li><code dir="auto">cd plugins/wasm-go; mkdir wasm-demo-go</code>, to go to the project\u2019s plugins/wasm-go directory and create the wasm-demo-go directory.</li>
</ol>
<h4 id="12-create-a-new-project-yourself">1.2 create a new project yourself</h4>
<ol>
<li>Create a new folder for the project. For example: <code dir="auto">wasm-demo-go</code>.</li>
<li>Execute following commands in the new folder to initialize the Go project:</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">init</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wasm-demo-go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go mod init wasm-demo-go"><div></div></button></div></figure></div>
<ol start="3">
<li>If you are in the Chinese mainland, you may need to set a proxy for downloading dependencies.</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">env</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-w</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GOPROXY=https://proxy.golang.com.cn,direct</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go env -w GOPROXY=https://proxy.golang.com.cn,direct"><div></div></button></div></figure></div>
<ol start="4">
<li>Download dependencies for plugin building.</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/tetratelabs/proxy-wasm-go-sdk</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/alibaba/higress/plugins/wasm-go@main</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/tidwall/gjson</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go get github.com/tetratelabs/proxy-wasm-go-sdk\x7Fgo get github.com/alibaba/higress/plugins/wasm-go@main\x7Fgo get github.com/tidwall/gjson"><div></div></button></div></figure></div>
<h3 id="2-write-maingo">2. Write main.go</h3>
<p>You can find a simple sample below, which provides following functions:</p>
<ol>
<li>If <code dir="auto">mockEnable</code> is set to <code dir="auto">true</code>, send <code dir="auto">hello world</code> directly as the response.</li>
<li>If <code dir="auto">mockEnable</code> is not set or set to <code dir="auto">false</code>, add an extra HTTP header <code dir="auto">hello: world</code> to the original request.
More samples can be found in section 4 below.</li>
</ol>
<blockquote>
<p>Note: Plugin configurations use YAML format in the gateway console. But plugins receive them in JSON format. So in the sample below, actual config data are extracted from JSON by the <code dir="auto">parseConfig</code> function.</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tidwall/gjson"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">wrapper.SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// Plugin name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"my-plugin",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// A custom function for parsing plugin configurations</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ParseConfigBy(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// A custom function for processing request headers</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// Custom plugin configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type MyConfig struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">mockEnable bool</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// Plugin configurations set in the console with YAML format will be converted to JSON. So we just need to parse config data from JSON.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Get the configuration property and set to the config object.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.mockEnable = json.Get("mockEnable").Bool()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.AddHttpRequestHeader("hello", "world")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if config.mockEnable {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    // Plugin name\x7F    &#x22;my-plugin&#x22;,\x7F    // A custom function for parsing plugin configurations\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    // A custom function for processing request headers\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7F// Custom plugin configuration\x7Ftype MyConfig struct {\x7F  mockEnable bool\x7F}\x7F\x7F// Plugin configurations set in the console with YAML format will be converted to JSON. So we just need to parse config data from JSON.\x7Ffunc parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {\x7F  // Get the configuration property and set to the config object.\x7F  config.mockEnable = json.Get(&#x22;mockEnable&#x22;).Bool()\x7F  return nil\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\x7F  proxywasm.AddHttpRequestHeader(&#x22;hello&#x22;, &#x22;world&#x22;)\x7F  if config.mockEnable {\x7F    proxywasm.SendHttpResponse(200, nil, []byte(&#x22;hello world&#x22;), -1)\x7F  }\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<h4 id="http-processing-pointcuts">HTTP Processing Pointcuts</h4>
<p>In the sample above, <code dir="auto">wrapper.ProcessRequestHeadersBy</code> applies custom function <code dir="auto">onHttpRequestHeaders</code> when processing requests in<code dir="auto">HTTP request header processing stage</code>. Besides that, you can use following methods to set custom processing functions for various stages.</p>






























<table><thead><tr><th>HTTP Processing Stage</th><th>Trigger Time</th><th>Pointcut Mounting Method</th></tr></thead><tbody><tr><td>HTTP request header processing stage</td><td>When gateway receives request headers from client</td><td>wrapper.ProcessRequestHeadersBy</td></tr><tr><td>HTTP request body processing stage</td><td>When gateway receives request body from client</td><td>wrapper.ProcessRequestBodyBy</td></tr><tr><td>HTTP response header processing stage</td><td>When gateway receives response headers from upstream</td><td>wrapper.ProcessResponseHeadersBy</td></tr><tr><td>HTTP response body processing stage</td><td>When gateway receives response body from upstream</td><td>wrapper.ProcessResponseBodyBy</td></tr></tbody></table>
<h4 id="utility-functions">Utility Functions</h4>
<p>In the sample above, <code dir="auto">proxywasm.AddHttpRequestHeader</code> and <code dir="auto">proxywasm.SendHttpResponse</code> are two utility methods provided by the plugin SDK. You can find major utility functions in the table below:</p>













































































































































































<table><thead><tr><th>Category</th><th>Name</th><th>Usage</th><th>Available<br>HTTP Processing Stage(s)</th></tr></thead><tbody><tr><td>Request Header Processing</td><td>GetHttpRequestHeaders</td><td>Get all the request headers sent by the client</td><td>HTTP request header processing stage</td></tr><tr><td></td><td>ReplaceHttpRequestHeaders</td><td>Replace all headers in the request.</td><td>HTTP request header processing stage</td></tr><tr><td></td><td>GetHttpRequestHeader</td><td>Get the specified header in the request.</td><td>HTTP request header processing stage</td></tr><tr><td></td><td>RemoveHttpRequestHeader</td><td>Remove the specified header from the request.</td><td>HTTP request header processing stage</td></tr><tr><td></td><td>ReplaceHttpRequestHeader</td><td>Replace the specified header in the response.</td><td>HTTP request header processing stage</td></tr><tr><td></td><td>AddHttpRequestHeader</td><td>Add a new header to the request.</td><td>HTTP request header processing stage</td></tr><tr><td>Request Body Processing</td><td>GetHttpRequestBody</td><td>Get the request body received from client.</td><td>HTTP request body processing stage</td></tr><tr><td></td><td>AppendHttpRequestBody</td><td>Append the specified binary data to the request body.</td><td>HTTP request body processing stage</td></tr><tr><td></td><td>PrependHttpRequestBody</td><td>Prepend the specified binary data to the request body.</td><td>HTTP request body processing stage</td></tr><tr><td></td><td>ReplaceHttpRequestBody</td><td>Replace the entire request body received from client.</td><td>HTTP request body processing stage</td></tr><tr><td>Response Header Processing</td><td>GetHttpResponseHeaders</td><td>Get all the response headers received from upstream.</td><td>HTTP response header processing stage</td></tr><tr><td></td><td>ReplaceHttpResponseHeaders</td><td>Replace all headers in the response.</td><td>HTTP response header processing stage</td></tr><tr><td></td><td>GetHttpResponseHeader</td><td>Get the specified header in the response.</td><td>HTTP response header processing stage</td></tr><tr><td></td><td>RemoveHttpResponseHeader</td><td>Remove the specified header from the response.</td><td>HTTP response header processing stage</td></tr><tr><td></td><td>ReplaceHttpResponseHeader</td><td>Replace the specified header in the response.</td><td>HTTP response header processing stage</td></tr><tr><td></td><td>AddHttpResponseHeader</td><td>Add a new header to the response.</td><td>HTTP response header processing stage</td></tr><tr><td>Response Body Processing</td><td>GetHttpResponseBody</td><td>Get the response body received from upstream.</td><td>HTTP response body processing stage</td></tr><tr><td></td><td>AppendHttpResponseBody</td><td>Append the specified binary data to the response body.</td><td>HTTP response body processing stage</td></tr><tr><td></td><td>PrependHttpResponseBody</td><td>Prepend the specified binary data to the response body.</td><td>HTTP response body processing stage</td></tr><tr><td></td><td>ReplaceHttpResponseBody</td><td>Replace the entire response body with specific data.</td><td>HTTP response body processing stage</td></tr><tr><td>HTTP Call</td><td>DispatchHttpCall</td><td>Send an HTTP request.</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseHeaders</td><td>Get the response headers associated with a DispatchHttpCall call.</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseBody</td><td>Get the response body associated with a DispatchHttpCall call.</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseTrailers</td><td>Get the response trailer associated with a DispatchHttpCall call.</td><td>-</td></tr><tr><td>Respond Directly</td><td>SendHttpResponse</td><td>Return a specific HTTP response immediately.</td><td>-</td></tr><tr><td>Process Resuming</td><td>ResumeHttpRequest</td><td>Resume the request processing workflow paused before.</td><td>-</td></tr><tr><td></td><td>ResumeHttpResponse</td><td>Resume the response processing workflow paused before.</td><td>-</td></tr></tbody></table>
<h3 id="3-build-wasm-file">3. Build WASM file</h3>
<ul>
<li>If your project directory is in the <a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">plugins/wasm-go</a> directory, see 3.1.</li>
<li>If you are using a self-initialized directory, see 3.2.</li>
</ul>
<h4 id="31-building-wasm-go-plugin-image-with-scaffolding">3.1 Building wasm-go plugin image with scaffolding</h4>
<p>The wasm-go plugin can be built quickly with the following command:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">PLUGIN_NAME=wasm-demo-go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">make</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">...</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">image:</span><span style="--0:#E1E4E8">            </span><span style="--0:#9ECBFF">wasm-demo-go:20230223-173305-3b1a471</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">output</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">file:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">extensions/wasm-demo-go/plugin.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ PLUGIN_NAME=wasm-demo-go make build\x7F... ...\x7Fimage:            wasm-demo-go:20230223-173305-3b1a471\x7Foutput wasm file: extensions/wasm-demo-go/plugin.wasm"><div></div></button></div></figure></div>
<p>This command eventually builds a wasm file and a Docker image.
This local wasm file is exported to the specified plugin\u2019s directory and can be used directly for local debugging.
You can also use <code dir="auto">make build-push</code> to build and push the image together.
See <a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">plugins/wasm-go</a> for more.</p>
<h4 id="32-compile-wasm-files-locally">3.2 Compile wasm files locally</h4>
<p>Execute the following command:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">'custommalloc nottinygc_finalizer'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./main.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags=&#x27;custommalloc nottinygc_finalizer&#x27; ./main.go"><div></div></button></div></figure></div>
<p>A new file named main.wasm will be created after a successful compilation, which will be used in the local debugging sample below as well.<br>When using custom plugin function in the cloud native gateway market, you just need to upload this file.</p>
<h2 id="3-local-debugging">3. Local Debugging</h2>
<p>TBD</p>
<h2 id="more-samples">More Samples</h2>
<h3 id="plugin-with-no-configuration">Plugin with No Configuration</h3>
<p>If the plugin needs no configuration, just define an empty config struct.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">wrapper.SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"hello-world",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type MyConfig struct {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    &#x22;hello-world&#x22;,\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7Ftype MyConfig struct {}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\x7F  proxywasm.SendHttpResponse(200, nil, []byte(&#x22;hello world&#x22;), -1)\x7F  return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<h3 id="send-requests-to-external-services-in-the-plugin">Send Requests to External Services in the Plugin</h3>
<p>Only HTTP requests are supported for now. You can send requests to Nacos and K8s services with service sources configured in the gateway console, and services with a static IP or DNS source. Please be noted, HTTP client in the <code dir="auto">net/http</code> package cannot be used here. You only use the wrapped HTTP client as shown in the sample below.<br>In the following sample works as below:</p>
<ol>
<li>Parse service type in the config parsing stage, and generate the corresponding HTTP client.</li>
<li>In the HTTP request header processing stage, send a service request to the configured URL.</li>
<li>Parse response headers and get token value using the specified key.</li>
<li>Set the token value to the headers of the original request.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"errors"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"net/http"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"strings"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">"github.com/tidwall/gjson"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">wrapper.SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"http-call",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ParseConfigBy(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type MyConfig struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// The client used to initiate an HTTP request</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">client      wrapper.HttpClient</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Request URL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestPath string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Use this key when extracting token header from the service response and setting a header to the request. The value is configurable.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tokenHeader string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.tokenHeader = json.Get("tokenHeader").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if config.tokenHeader == "" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return errors.New("missing tokenHeader in config")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.requestPath = json.Get("requestPath").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if config.requestPath == "" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return errors.New("missing requestPath in config")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">serviceSource := json.Get("serviceSource").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// If serviceSource is set to "ip" or "dns", serviceName shall be specified when creating the service.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// If serviceSource is set to "nacos" or "k8s", serviceName shall be set to the original name specified when registering the service.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">serviceName := json.Get("serviceName").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">servicePort := json.Get("servicePort").Int()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if serviceName == "" || servicePort == 0 {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return errors.New("invalid service config")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">switch serviceSource {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">case "k8s":</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">namespace := json.Get("namespace").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">config.client = wrapper.NewClusterClient(wrapper.K8sCluster{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Namespace:   namespace,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">case "nacos":</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">namespace := json.Get("namespace").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">config.client = wrapper.NewClusterClient(wrapper.NacosCluster{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">NamespaceID: namespace,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">case "ip":</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">config.client = wrapper.NewClusterClient(wrapper.StaticIpCluster{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">case "dns":</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">domain := json.Get("domain").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">config.client = wrapper.NewClusterClient(wrapper.DnsCluster{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Domain:      domain,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">default:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return errors.New("unknown service source: " + serviceSource)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Use the Get function of the client to initiate an HTTP Get request.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// The timeout parameter is omitted here, whose default value is 500ms.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.client.Get(config.requestPath, nil,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// A callback function which will be called asynchronously when receiving the response.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">func(statusCode int, responseHeaders http.Header, responseBody []byte) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">// Process the response with a status code other than 200.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">if statusCode != http.StatusOK {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">log.Errorf("http call failed, status: %d", statusCode)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">[]byte("http call failed"), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">// Print out the status code and response body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">log.Infof("get status: %d, response body: %s", statusCode, responseBody)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">// Extract token value from the response header and set the header of the original request</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">token := responseHeaders.Get(config.tokenHeader)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">if token != "" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">proxywasm.AddHttpRequestHeader(config.tokenHeader, token)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">// Resume the original request processing workflow. Continue the process, so the request can be forwarded to the upstream.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">proxywasm.ResumeHttpRequest()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// We need to wait for the callback to finish its process.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionPause</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;errors&#x22;\x7F  &#x22;net/http&#x22;\x7F  &#x22;strings&#x22;\x7F  &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F  &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    &#x22;http-call&#x22;,\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7Ftype MyConfig struct {\x7F  // The client used to initiate an HTTP request\x7F  client      wrapper.HttpClient\x7F  // Request URL\x7F  requestPath string\x7F  // Use this key when extracting token header from the service response and setting a header to the request. The value is configurable.\x7F  tokenHeader string\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {\x7F  config.tokenHeader = json.Get(&#x22;tokenHeader&#x22;).String()\x7F  if config.tokenHeader == &#x22;&#x22; {\x7F    return errors.New(&#x22;missing tokenHeader in config&#x22;)\x7F  }\x7F  config.requestPath = json.Get(&#x22;requestPath&#x22;).String()\x7F  if config.requestPath == &#x22;&#x22; {\x7F    return errors.New(&#x22;missing requestPath in config&#x22;)\x7F  }\x7F  serviceSource := json.Get(&#x22;serviceSource&#x22;).String()\x7F  // If serviceSource is set to &#x22;ip&#x22; or &#x22;dns&#x22;, serviceName shall be specified when creating the service.\x7F  // If serviceSource is set to &#x22;nacos&#x22; or &#x22;k8s&#x22;, serviceName shall be set to the original name specified when registering the service.\x7F  serviceName := json.Get(&#x22;serviceName&#x22;).String()\x7F  servicePort := json.Get(&#x22;servicePort&#x22;).Int()\x7F  if serviceName == &#x22;&#x22; || servicePort == 0 {\x7F    return errors.New(&#x22;invalid service config&#x22;)\x7F  }\x7F  switch serviceSource {\x7F  case &#x22;k8s&#x22;:\x7F    namespace := json.Get(&#x22;namespace&#x22;).String()\x7F    config.client = wrapper.NewClusterClient(wrapper.K8sCluster{\x7F      ServiceName: serviceName,\x7F      Namespace:   namespace,\x7F      Port:        servicePort,\x7F    })\x7F    return nil\x7F  case &#x22;nacos&#x22;:\x7F    namespace := json.Get(&#x22;namespace&#x22;).String()\x7F    config.client = wrapper.NewClusterClient(wrapper.NacosCluster{\x7F      ServiceName: serviceName,\x7F      NamespaceID: namespace,\x7F      Port:        servicePort,\x7F    })\x7F    return nil\x7F  case &#x22;ip&#x22;:\x7F    config.client = wrapper.NewClusterClient(wrapper.StaticIpCluster{\x7F      ServiceName: serviceName,\x7F      Port:        servicePort,\x7F    })\x7F    return nil\x7F  case &#x22;dns&#x22;:\x7F    domain := json.Get(&#x22;domain&#x22;).String()\x7F    config.client = wrapper.NewClusterClient(wrapper.DnsCluster{\x7F      ServiceName: serviceName,\x7F      Port:        servicePort,\x7F      Domain:      domain,\x7F    })\x7F    return nil\x7F  default:\x7F    return errors.New(&#x22;unknown service source: &#x22; + serviceSource)\x7F  }\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {\x7F  // Use the Get function of the client to initiate an HTTP Get request.\x7F  // The timeout parameter is omitted here, whose default value is 500ms.\x7F  config.client.Get(config.requestPath, nil,\x7F    // A callback function which will be called asynchronously when receiving the response.\x7F    func(statusCode int, responseHeaders http.Header, responseBody []byte) {\x7F      // Process the response with a status code other than 200.\x7F      if statusCode != http.StatusOK {\x7F        log.Errorf(&#x22;http call failed, status: %d&#x22;, statusCode)\x7F        proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,\x7F          []byte(&#x22;http call failed&#x22;), -1)\x7F        return\x7F      }\x7F      // Print out the status code and response body\x7F      log.Infof(&#x22;get status: %d, response body: %s&#x22;, statusCode, responseBody)\x7F      // Extract token value from the response header and set the header of the original request\x7F      token := responseHeaders.Get(config.tokenHeader)\x7F      if token != &#x22;&#x22; {\x7F        proxywasm.AddHttpRequestHeader(config.tokenHeader, token)\x7F      }\x7F      // Resume the original request processing workflow. Continue the process, so the request can be forwarded to the upstream.\x7F      proxywasm.ResumeHttpRequest()\x7F    })\x7F  // We need to wait for the callback to finish its process.\x7F  // Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.\x7F  return types.ActionPause\x7F}"><div></div></button></div></figure></div>`,t={title:"Developing a WASM plugin with Golang",keywords:["wasm"],description:"Developing a WASM plugin with Golang",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/wasm-go.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/wasm-go.md",n=void 0,l=function(){return`
# Implement a WASM plugin with Golang

## 1. Prepare Development Tools

First, install Golang and Tinygo.

### 1. Golang

Min Version: 1.18<br />Official download link: [https://go.dev/doc/install](https://go.dev/doc/install)

#### Windows

1. Download the installer: [https://go.dev/dl/go1.19.windows-amd64.msi](https://go.dev/dl/go1.19.windows-amd64.msi)
2. Run the downloaded installer to start the installation. It will be installed to \`Program Files\` or \`Program Files (x86)\` folder by default.
3. After completed the installation, open "Run" dialog with hotkey "Win+R". Type "cmd" in the dialog and click "OK" to open Command Line Prompt. Type: \`go version\`. If version info is displayed, the package has been successfully installed.

#### MacOS

1. Download the installer: [https://go.dev/dl/go1.19.darwin-amd64.pkg](https://go.dev/dl/go1.19.darwin-amd64.pkg)
2. Run the downloaded installer to start the installation. It will be installed to \`/usr/local/go\` folder by default.
3. Open Terminal and type: \`go version\`. If version info is displayed, the package has been successfully installed.

#### Linux

1. Download the installer: [https://go.dev/dl/go1.19.linux-amd64.tar.gz](https://go.dev/dl/go1.19.linux-amd64.tar.gz)
2. Execute following commands to start the installation:
\`\`\`bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
\`\`\`
3. Execute \`go version\`. If version info is displayed, the package has been successfully installed.

### 2. TinyGo

Min Version: 0.28.1<br />Official download link: [https://tinygo.org/getting-started/install/](https://tinygo.org/getting-started/install/)

#### Windows

1. Download the package: [https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip](https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip)
2. Unpack the package to the target folder
3. If the package is unpacked to folder \`C:\\tinygo\`, you need to add \`C:\\tinygo\\bin\` into the environment variable \`PATH\`, using set command in Command Line Prompt for example.
\`\`\`bash
set PATH=%PATH%;"C:\\tinygo\\bin";
\`\`\`
4. Execute \`tinygo version\` command in Command Line Prompt. If version info is displayed, the package has been successfully installed.

#### MacOS

1. Download and unpack the package
\`\`\`bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz
tar -zxf tinygo0.28.1.darwin-amd64.tar.gz
\`\`\`
2. If the package is unpacked to folder \`/tmp\`, you need to add \`/tmp/tinygo/bin\` to the environment variable \`PATH\`:
\`\`\`bash
export PATH=/tmp/tinygo/bin:$PATH
\`\`\`
3. Execute command \`tinygo version\` in Terminal.  If version info is displayed, the package has been successfully installed.

#### Linux

Following steps are based on Ubuntu AMD64. For other OSes, please refer to the official document.

1. Download and install the DEB package.
\`\`\`bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb
sudo dpkg -i tinygo_0.28.1_amd64.deb
export PATH=$PATH:/usr/local/bin
\`\`\`
2. Execute command \`tinygo version\` in Terminal. If version info is displayed, the package has been successfully installed.

## 2. Write a plugin

### 1. Initialize the project

You can create your wasm-go plugin directory in the repo [higress](https://github.com/alibaba/higress)'s [plugins/wasm-go](https://github.com/alibaba/higress/tree/main/plugins/wasm-go)
that you can use the scaffolding tools provided in this directory\uFF08see 1.1\uFF09\uFF1B
or create a new directory for your Go project yourself(see 1.2).
If you are developing wasm-go plugins for the first time, it is recommended to take the former.

#### 1.1 create wasm-go plugin in [plugins/wasm-go](https://github.com/alibaba/higress/tree/main/plugins/wasm-go)

1. \`git clone https://github.com/alibaba/higress.git\`, to clone project to local\uFF1B
2. \`cd plugins/wasm-go; mkdir wasm-demo-go\`, to go to the project's plugins/wasm-go directory and create the wasm-demo-go directory.

#### 1.2 create a new project yourself

1. Create a new folder for the project. For example: \`wasm-demo-go\`.
2. Execute following commands in the new folder to initialize the Go project:
\`\`\`bash
go mod init wasm-demo-go
\`\`\`
3. If you are in the Chinese mainland, you may need to set a proxy for downloading dependencies.
\`\`\`bash
go env -w GOPROXY=https://proxy.golang.com.cn,direct
\`\`\`
4. Download dependencies for plugin building. 
\`\`\`bash
go get github.com/tetratelabs/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
\`\`\`

### 2. Write main.go

You can find a simple sample below, which provides following functions:

1. If \`mockEnable\` is set to \`true\`, send \`hello world\` directly as the response.
2. If \`mockEnable\` is not set or set to \`false\`, add an extra HTTP header \`hello: world\` to the original request.
More samples can be found in section 4 below.

> Note: Plugin configurations use YAML format in the gateway console. But plugins receive them in JSON format. So in the sample below, actual config data are extracted from JSON by the \`parseConfig\` function.

\`\`\`
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// Plugin name
		"my-plugin",
		// A custom function for parsing plugin configurations
		wrapper.ParseConfigBy(parseConfig),
		// A custom function for processing request headers
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// Custom plugin configuration
type MyConfig struct {
	mockEnable bool
}

// Plugin configurations set in the console with YAML format will be converted to JSON. So we just need to parse config data from JSON.
func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	// Get the configuration property and set to the config object.
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

#### HTTP Processing Pointcuts

In the sample above, \`wrapper.ProcessRequestHeadersBy\` applies custom function \`onHttpRequestHeaders\` when processing requests in\`HTTP request header processing stage\`. Besides that, you can use following methods to set custom processing functions for various stages.

| HTTP Processing Stage | Trigger Time | Pointcut Mounting Method |
| --- | --- | --- |
| HTTP request header processing stage | When gateway receives request headers from client | wrapper.ProcessRequestHeadersBy |
| HTTP request body processing stage | When gateway receives request body from client | wrapper.ProcessRequestBodyBy |
| HTTP response header processing stage | When gateway receives response headers from upstream | wrapper.ProcessResponseHeadersBy |
| HTTP response body processing stage | When gateway receives response body from upstream | wrapper.ProcessResponseBodyBy |

#### Utility Functions

In the sample above, \`proxywasm.AddHttpRequestHeader\` and \`proxywasm.SendHttpResponse\` are two utility methods provided by the plugin SDK. You can find major utility functions in the table below:

| Category | Name | Usage | Available<br />HTTP Processing Stage(s) |
| --- | --- | --- | --- |
| Request Header Processing | GetHttpRequestHeaders | Get all the request headers sent by the client | HTTP request header processing stage |
|  | ReplaceHttpRequestHeaders | Replace all headers in the request. | HTTP request header processing stage |
|  | GetHttpRequestHeader | Get the specified header in the request. | HTTP request header processing stage |
|  | RemoveHttpRequestHeader | Remove the specified header from the request. | HTTP request header processing stage |
|  | ReplaceHttpRequestHeader | Replace the specified header in the response. | HTTP request header processing stage |
|  | AddHttpRequestHeader | Add a new header to the request. | HTTP request header processing stage |
| Request Body Processing | GetHttpRequestBody | Get the request body received from client. | HTTP request body processing stage |
|  | AppendHttpRequestBody | Append the specified binary data to the request body. | HTTP request body processing stage |
|  | PrependHttpRequestBody | Prepend the specified binary data to the request body. | HTTP request body processing stage |
|  | ReplaceHttpRequestBody | Replace the entire request body received from client. | HTTP request body processing stage |
| Response Header Processing | GetHttpResponseHeaders | Get all the response headers received from upstream. | HTTP response header processing stage |
|  | ReplaceHttpResponseHeaders | Replace all headers in the response. | HTTP response header processing stage |
|  | GetHttpResponseHeader | Get the specified header in the response. | HTTP response header processing stage |
|  | RemoveHttpResponseHeader | Remove the specified header from the response. | HTTP response header processing stage |
|  | ReplaceHttpResponseHeader | Replace the specified header in the response. | HTTP response header processing stage |
|  | AddHttpResponseHeader | Add a new header to the response. | HTTP response header processing stage |
| Response Body Processing | GetHttpResponseBody | Get the response body received from upstream. | HTTP response body processing stage |
|  | AppendHttpResponseBody | Append the specified binary data to the response body. | HTTP response body processing stage |
|  | PrependHttpResponseBody | Prepend the specified binary data to the response body. | HTTP response body processing stage |
|  | ReplaceHttpResponseBody | Replace the entire response body with specific data. | HTTP response body processing stage |
| HTTP Call | DispatchHttpCall | Send an HTTP request. | - |
|  | GetHttpCallResponseHeaders | Get the response headers associated with a DispatchHttpCall call. | - |
|  | GetHttpCallResponseBody | Get the response body associated with a DispatchHttpCall call. | - |
|  | GetHttpCallResponseTrailers | Get the response trailer associated with a DispatchHttpCall call. | - |
| Respond Directly | SendHttpResponse | Return a specific HTTP response immediately. | - |
| Process Resuming | ResumeHttpRequest | Resume the request processing workflow paused before. | - |
|  | ResumeHttpResponse | Resume the response processing workflow paused before. | - |

### 3. Build WASM file

- If your project directory is in the [plugins/wasm-go](https://github.com/alibaba/higress/tree/main/plugins/wasm-go) directory, see 3.1.
- If you are using a self-initialized directory, see 3.2.

#### 3.1 Building wasm-go plugin image with scaffolding

The wasm-go plugin can be built quickly with the following command:

\`\`\`bash
$ PLUGIN_NAME=wasm-demo-go make build
... ...
image:            wasm-demo-go:20230223-173305-3b1a471
output wasm file: extensions/wasm-demo-go/plugin.wasm
\`\`\`

This command eventually builds a wasm file and a Docker image.
This local wasm file is exported to the specified plugin's directory and can be used directly for local debugging.
You can also use \`make build-push\` to build and push the image together.
See [plugins/wasm-go](https://github.com/alibaba/higress/tree/main/plugins/wasm-go) for more.

#### 3.2 Compile wasm files locally

Execute the following command:
\`\`\`bash
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' ./main.go
\`\`\`
A new file named main.wasm will be created after a successful compilation, which will be used in the local debugging sample below as well.<br />When using custom plugin function in the cloud native gateway market, you just need to upload this file.

## 3. Local Debugging 

TBD

## More Samples

### Plugin with No Configuration

If the plugin needs no configuration, just define an empty config struct.

\`\`\`
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
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

### Send Requests to External Services in the Plugin

Only HTTP requests are supported for now. You can send requests to Nacos and K8s services with service sources configured in the gateway console, and services with a static IP or DNS source. Please be noted, HTTP client in the \`net/http\` package cannot be used here. You only use the wrapped HTTP client as shown in the sample below.<br />In the following sample works as below:

1. Parse service type in the config parsing stage, and generate the corresponding HTTP client.
2. In the HTTP request header processing stage, send a service request to the configured URL.
3. Parse response headers and get token value using the specified key.
4. Set the token value to the headers of the original request.

\`\`\`
package main

import (
	"errors"
	"net/http"
	"strings"
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
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
	// The client used to initiate an HTTP request
	client      wrapper.HttpClient
	// Request URL
	requestPath string
	// Use this key when extracting token header from the service response and setting a header to the request. The value is configurable.
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
	serviceSource := json.Get("serviceSource").String()
	// If serviceSource is set to "ip" or "dns", serviceName shall be specified when creating the service.
	// If serviceSource is set to "nacos" or "k8s", serviceName shall be set to the original name specified when registering the service.
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if serviceName == "" || servicePort == 0 {
		return errors.New("invalid service config")
	}
	switch serviceSource {
	case "k8s":
		namespace := json.Get("namespace").String()
		config.client = wrapper.NewClusterClient(wrapper.K8sCluster{
			ServiceName: serviceName,
			Namespace:   namespace,
			Port:        servicePort,
		})
		return nil
	case "nacos":
		namespace := json.Get("namespace").String()
		config.client = wrapper.NewClusterClient(wrapper.NacosCluster{
			ServiceName: serviceName,
			NamespaceID: namespace,
			Port:        servicePort,
		})
		return nil
	case "ip":
		config.client = wrapper.NewClusterClient(wrapper.StaticIpCluster{
			ServiceName: serviceName,
			Port:        servicePort,
		})
		return nil
	case "dns":
		domain := json.Get("domain").String()
		config.client = wrapper.NewClusterClient(wrapper.DnsCluster{
			ServiceName: serviceName,
			Port:        servicePort,
			Domain:      domain,
		})
		return nil
	default:
		return errors.New("unknown service source: " + serviceSource)
	}
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	// Use the Get function of the client to initiate an HTTP Get request.
	// The timeout parameter is omitted here, whose default value is 500ms.
	config.client.Get(config.requestPath, nil,
		// A callback function which will be called asynchronously when receiving the response.
		func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			// Process the response with a status code other than 200.
			if statusCode != http.StatusOK {
				log.Errorf("http call failed, status: %d", statusCode)
				proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,
					[]byte("http call failed"), -1)
				return
			}
			// Print out the status code and response body
			log.Infof("get status: %d, response body: %s", statusCode, responseBody)
			// Extract token value from the response header and set the header of the original request
			token := responseHeaders.Get(config.tokenHeader)
			if token != "" {
				proxywasm.AddHttpRequestHeader(config.tokenHeader, token)
			}
			// Resume the original request processing workflow. Continue the process, so the request can be forwarded to the upstream.
			proxywasm.ResumeHttpRequest()
		})
	// We need to wait for the callback to finish its process.
	// Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.
	return types.ActionPause
}
\`\`\``},o=function(){return e},d=function(){return[{depth:1,slug:"implement-a-wasm-plugin-with-golang",text:"Implement a WASM plugin with Golang"},{depth:2,slug:"1-prepare-development-tools",text:"1. Prepare Development Tools"},{depth:3,slug:"1-golang",text:"1. Golang"},{depth:4,slug:"windows",text:"Windows"},{depth:4,slug:"macos",text:"MacOS"},{depth:4,slug:"linux",text:"Linux"},{depth:3,slug:"2-tinygo",text:"2. TinyGo"},{depth:4,slug:"windows-1",text:"Windows"},{depth:4,slug:"macos-1",text:"MacOS"},{depth:4,slug:"linux-1",text:"Linux"},{depth:2,slug:"2-write-a-plugin",text:"2. Write a plugin"},{depth:3,slug:"1-initialize-the-project",text:"1. Initialize the project"},{depth:4,slug:"11-create-wasm-go-plugin-in-pluginswasm-go",text:"1.1 create wasm-go plugin in plugins/wasm-go"},{depth:4,slug:"12-create-a-new-project-yourself",text:"1.2 create a new project yourself"},{depth:3,slug:"2-write-maingo",text:"2. Write main.go"},{depth:4,slug:"http-processing-pointcuts",text:"HTTP Processing Pointcuts"},{depth:4,slug:"utility-functions",text:"Utility Functions"},{depth:3,slug:"3-build-wasm-file",text:"3. Build WASM file"},{depth:4,slug:"31-building-wasm-go-plugin-image-with-scaffolding",text:"3.1 Building wasm-go plugin image with scaffolding"},{depth:4,slug:"32-compile-wasm-files-locally",text:"3.2 Compile wasm files locally"},{depth:2,slug:"3-local-debugging",text:"3. Local Debugging"},{depth:2,slug:"more-samples",text:"More Samples"},{depth:3,slug:"plugin-with-no-configuration",text:"Plugin with No Configuration"},{depth:3,slug:"send-requests-to-external-services-in-the-plugin",text:"Send Requests to External Services in the Plugin"}]},s=p((f,m,w)=>{const{layout:x,...i}=t;return i.file=a,i.url=n,c`${g()}${u(e)}`})});export{s as Content,h as __tla,o as compiledContent,s as default,a as file,t as frontmatter,d as getHeadings,l as rawContent,n as url};
