import{c as o,__tla as c}from"./astro-component.B3fYMMDi.js";import{r,m as E,u as y,__tla as v}from"./constant.B9AWHwfy.js";import{__tla as u}from"./astro/assets-service.DmDXK_Mj.js";let e,i,a,n,l,d,t,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<blockquote>
<p><strong>Note</strong>:
Go 1.24 now natively supports compiling WASM files, and Higress has already migrated from TinyGo compilation to Go 1.24 native compilation.
If you have been using TinyGo to compile plugins, and want to migrate to compiling with Go 1.24, apart from adjusting the go mod dependencies, you only need to move the original initialization logic from the main function to the init function. Please refer to the example below for details.</p>
</blockquote>
<h2 id="1-tool-preparation">1. Tool Preparation</h2>
<p>Install Golang</p>
<h3 id="golang">Golang</h3>
<p>(Requires version 1.24 or higher)<br>
Official installation guide: <a href="https://go.dev/doc/install" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/doc/install</a></p>
<h4 id="windows">Windows</h4>
<ol>
<li>Download the installer: <a href="https://go.dev/dl/go1.24.4.windows-amd64.msi" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.24.4.windows-amd64.msi</a></li>
<li>Run the downloaded installer. By default, it will be installed in the <code dir="auto">Program Files</code> or <code dir="auto">Program Files (x86)</code> directory</li>
<li>After installation, press \u201CWin+R\u201D to open the Run dialog, type \u201Ccmd\u201D and press Enter to open the command prompt. Then type: <code dir="auto">go version</code> to verify the installation</li>
</ol>
<h4 id="macos">macOS</h4>
<ol>
<li>Download the installer: <a href="https://go.dev/dl/go1.24.4.darwin-amd64.pkg" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.24.4.darwin-amd64.pkg</a></li>
<li>Run the downloaded installer. By default, it will be installed in the <code dir="auto">/usr/local/go</code> directory</li>
<li>Open Terminal and type: <code dir="auto">go version</code> to verify the installation</li>
</ol>
<h4 id="linux">Linux</h4>
<ol>
<li>Download the archive: <a href="https://go.dev/dl/go1.24.4.linux-amd64.tar.gz" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://go.dev/dl/go1.24.4.linux-amd64.tar.gz</a></li>
<li>Run the following commands to install:</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">rm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-rf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local/go</span><span style="--0:#E1E4E8"> &#x26;&#x26; </span><span style="--0:#B392F0">tar</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-C</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">/usr/local</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-xzf</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">go1.24.4.linux-amd64.tar.gz</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> PATH</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">$PATH:/usr/local/go/bin</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rm -rf /usr/local/go &#x26;&#x26; tar -C /usr/local -xzf go1.24.4.linux-amd64.tar.gz\x7Fexport PATH=$PATH:/usr/local/go/bin"><div></div></button></div></figure></div>
<ol start="3">
<li>Type <code dir="auto">go version</code> to verify the installation</li>
</ol>
<h2 id="2-writing-the-plugin">2. Writing the Plugin</h2>
<h3 id="1-initialize-the-project">1. Initialize the Project</h3>
<ol>
<li>Create a new project directory, for example <code dir="auto">wasm-demo-go</code></li>
<li>In the created directory, run the following command to initialize a Go module:</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">init</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wasm-demo-go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go mod init wasm-demo-go"><div></div></button></div></figure></div>
<ol start="3">
<li>For users in China, you may need to set up a proxy for downloading dependencies:</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">env</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-w</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GOPROXY=https://proxy.golang.com.cn,direct</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go env -w GOPROXY=https://proxy.golang.com.cn,direct"><div></div></button></div></figure></div>
<ol start="4">
<li>Download the required dependencies for building the plugin:</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/higress-group/proxy-wasm-go-sdk@go-1.24</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/higress-group/wasm-go@main</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">github.com/tidwall/gjson</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go get github.com/higress-group/proxy-wasm-go-sdk@go-1.24\x7Fgo get github.com/higress-group/wasm-go@main\x7Fgo get github.com/tidwall/gjson"><div></div></button></div></figure></div>
<h3 id="2-writing-maingo">2. Writing main.go</h3>
<p>Below is a simple example that implements the following functionality:</p>
<ul>
<li>When the plugin is configured with <code dir="auto">mockEnable: true</code>, it directly returns a \u201Chello world\u201D response</li>
<li>When no plugin configuration is provided or <code dir="auto">mockEnable: false</code>, it adds a <code dir="auto">hello: world</code> request header to the original request</li>
</ul>
<p>The more concise details and examples can be found in section 4 below.</p>
<blockquote>
<p>Note: The plugin configuration in the gateway console is in YAML format, but it will be automatically converted to JSON format when delivered to the plugin. Therefore, the example directly parses the configuration from JSON.</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/wrapper</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">logs </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/log</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/gjson</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">SetCtx</span><span style="--0:#E1E4E8">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// Plugin name</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"my-plugin"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// Custom function for parsing plugin configuration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ParseConfigBy</span><span style="--0:#E1E4E8">(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// Custom function for processing request headers</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestHeadersBy</span><span style="--0:#E1E4E8">(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// Custom plugin configuration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">mockEnable </span><span style="--0:#F97583">bool</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// The YAML configuration from the console is automatically converted to JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// We can directly parse the configuration from the json parameter</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">parseConfig</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">json</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">gjson</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Result</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Parse the configuration and update the config object</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.mockEnable </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"mockEnable"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Bool</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpRequestHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"hello"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"world"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> config.mockEnable {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">SendHttpResponse</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">200</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"hello world"</span><span style="--0:#E1E4E8">), </span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.HeaderContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;github.com/higress-group/wasm-go/pkg/wrapper&#x22;\x7F  logs &#x22;github.com/higress-group/wasm-go/pkg/log&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {}\x7F\x7Ffunc init() {\x7F  wrapper.SetCtx(\x7F    // Plugin name\x7F    &#x22;my-plugin&#x22;,\x7F    // Custom function for parsing plugin configuration\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    // Custom function for processing request headers\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7F// Custom plugin configuration\x7Ftype MyConfig struct {\x7F  mockEnable bool\x7F}\x7F\x7F// The YAML configuration from the console is automatically converted to JSON\x7F// We can directly parse the configuration from the json parameter\x7Ffunc parseConfig(json gjson.Result, config *MyConfig, log logs.Log) error {\x7F  // Parse the configuration and update the config object\x7F  config.mockEnable = json.Get(&#x22;mockEnable&#x22;).Bool()\x7F  return nil\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {\x7F  proxywasm.AddHttpRequestHeader(&#x22;hello&#x22;, &#x22;world&#x22;)\x7F  if config.mockEnable {\x7F    proxywasm.SendHttpResponse(200, nil, []byte(&#x22;hello world&#x22;), -1)\x7F  }\x7F  return types.HeaderContinue\x7F}"><div></div></button></div></figure></div>
<h4 id="http-processing-hooks">HTTP Processing Hooks</h4>
<p>In the example above, we used <code dir="auto">wrapper.ProcessRequestHeadersBy</code> to register our custom function <code dir="auto">onHttpRequestHeaders</code> to handle requests during the \u201CHTTP Request Headers\u201D phase. You can also register handlers for other phases using the following methods:</p>






























<table><thead><tr><th>HTTP Processing Phase</th><th>Trigger</th><th>Hook Method</th></tr></thead><tbody><tr><td>HTTP Request Headers</td><td>When the gateway receives request headers from the client</td><td>wrapper.ProcessRequestHeadersBy</td></tr><tr><td>HTTP Request Body</td><td>When the gateway receives request body from the client</td><td>wrapper.ProcessRequestBodyBy</td></tr><tr><td>HTTP Response Headers</td><td>When the gateway receives response headers from the backend</td><td>wrapper.ProcessResponseHeadersBy</td></tr><tr><td>HTTP Response Body</td><td>When the gateway receives response body from the backend</td><td>wrapper.ProcessResponseBodyBy</td></tr></tbody></table>
<h4 id="utility-methods">Utility Methods</h4>
<p>The example uses <code dir="auto">proxywasm.AddHttpRequestHeader</code> and <code dir="auto">proxywasm.SendHttpResponse</code>, which are utility methods provided by the SDK. Here are the main utility methods available:</p>













































































































































































<table><thead><tr><th>Category</th><th>Method</th><th>Description</th><th>Applicable HTTP Processing Phases</th></tr></thead><tbody><tr><td>Request Headers</td><td>GetHttpRequestHeaders</td><td>Get all request headers</td><td>HTTP Request Headers</td></tr><tr><td></td><td>ReplaceHttpRequestHeaders</td><td>Replace all request headers</td><td>HTTP Request Headers</td></tr><tr><td></td><td>GetHttpRequestHeader</td><td>Get a specific request header</td><td>HTTP Request Headers</td></tr><tr><td></td><td>RemoveHttpRequestHeader</td><td>Remove a specific request header</td><td>HTTP Request Headers</td></tr><tr><td></td><td>ReplaceHttpRequestHeader</td><td>Replace a specific request header</td><td>HTTP Request Headers</td></tr><tr><td></td><td>AddHttpRequestHeader</td><td>Add a new request header</td><td>HTTP Request Headers</td></tr><tr><td>Request Body</td><td>GetHttpRequestBody</td><td>Get the request body</td><td>HTTP Request Body</td></tr><tr><td></td><td>AppendHttpRequestBody</td><td>Append data to the end of the request body</td><td>HTTP Request Body</td></tr><tr><td></td><td>PrependHttpRequestBody</td><td>Add data to the beginning of the request body</td><td>HTTP Request Body</td></tr><tr><td></td><td>ReplaceHttpRequestBody</td><td>Replace the entire request body</td><td>HTTP Request Body</td></tr><tr><td>Response Headers</td><td>GetHttpResponseHeaders</td><td>Get all response headers</td><td>HTTP Response Headers</td></tr><tr><td></td><td>ReplaceHttpResponseHeaders</td><td>Replace all response headers</td><td>HTTP Response Headers</td></tr><tr><td></td><td>GetHttpResponseHeader</td><td>Get a specific response header</td><td>HTTP Response Headers</td></tr><tr><td></td><td>RemoveHttpResponseHeader</td><td>Remove a specific response header</td><td>HTTP Response Headers</td></tr><tr><td></td><td>ReplaceHttpResponseHeader</td><td>Replace a specific response header</td><td>HTTP Response Headers</td></tr><tr><td></td><td>AddHttpResponseHeader</td><td>Add a new response header</td><td>HTTP Response Headers</td></tr><tr><td>Response Body</td><td>GetHttpResponseBody</td><td>Get the response body</td><td>HTTP Response Body</td></tr><tr><td></td><td>AppendHttpResponseBody</td><td>Append data to the end of the response body</td><td>HTTP Response Body</td></tr><tr><td></td><td>PrependHttpResponseBody</td><td>Add data to the beginning of the response body</td><td>HTTP Response Body</td></tr><tr><td></td><td>ReplaceHttpResponseBody</td><td>Replace the entire response body</td><td>HTTP Response Body</td></tr><tr><td>HTTP Calls</td><td>DispatchHttpCall</td><td>Send an HTTP request</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseHeaders</td><td>Get response headers from DispatchHttpCall</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseBody</td><td>Get response body from DispatchHttpCall</td><td>-</td></tr><tr><td></td><td>GetHttpCallResponseTrailers</td><td>Get response trailers from DispatchHttpCall</td><td>-</td></tr><tr><td>Direct Response</td><td>SendHttpResponse</td><td>Return a specific HTTP response</td><td>-</td></tr><tr><td>Flow Control</td><td>ResumeHttpRequest</td><td>Resume a previously paused request</td><td>-</td></tr><tr><td></td><td>ResumeHttpResponse</td><td>Resume a previously paused response</td><td>-</td></tr></tbody></table>
<h3 id="3-compile-and-generate-wasm-file">3. Compile and Generate WASM File</h3>
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
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">mod</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">tidy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">GOOS</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">wasip1</span><span style="--0:#E1E4E8"> GOARCH</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">go</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-buildmode=c-shared</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">./</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go mod tidy\x7FGOOS=wasip1 GOARCH=wasm go build -buildmode=c-shared -o main.wasm ./"><div></div></button></div></figure></div>
<p>A new file named main.wasm will be created after a successful compilation, which will be used in the local debugging sample below as well.<br>When using custom plugin function in the cloud native gateway market, you just need to upload this file.</p>
<h4 id="header-status-management-instructions">Header Status Management Instructions</h4>
<ol>
<li>
<p><strong>HeaderContinue</strong>:</p>
<p>Indicates that the current filter has finished processing and can be passed to the next filter for further processing. <code dir="auto">types.ActionContinue</code> corresponds to this status.</p>
</li>
<li>
<p><strong>HeaderStopIteration</strong>:</p>
<p>Indicates that the header cannot yet be passed to the next filter for processing. However, it does not stop reading data from the connection and continues to trigger the processing of body data. This allows for updating the HTTP request header content during the body data processing stage. If the body data is to be passed to the next filter, the header will also be passed along with it.</p>
<p>Note that when returning this status, a body is required. If there is no body, the request/response will be blocked indefinitely.</p>
<p>To determine if a request has a body, you can use <a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/request_wrapper.go#L86" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><code dir="auto">HasRequestBody()</code></a>.</p>
</li>
<li>
<p><strong>HeaderContinueAndEndStream</strong>:</p>
<p>Indicates that the header can be passed to the next filter, but the next filter will receive <code dir="auto">end_stream = false</code>, meaning the request is not yet finished. This allows the current filter to add more body data.</p>
</li>
<li>
<p><strong>HeaderStopAllIterationAndBuffer</strong>:</p>
<p>Stops all iterations, indicating that the header cannot be passed to the next filter, and the current filter will also not receive body data. It buffers headers, data, and trailers for the current and subsequent filters. If the buffer size exceeds the limit, a 413 will be returned directly during the request phase, and a 500 will be returned directly during the response phase.
At the same time, <code dir="auto">proxywasm.ResumeHttpRequest()</code>, <code dir="auto">proxywasm.ResumeHttpResponse()</code>, or <code dir="auto">proxywasm.SendHttpResponseWithDetail()</code> functions need to be called to resume subsequent processing.</p>
</li>
<li>
<p><strong>HeaderStopAllIterationAndWatermark</strong>:</p>
<p>Same as above, the difference being that when the cache exceeds the buffer limit, flow control will be triggered, i.e., pausing data reading from the connection. <code dir="auto">types.ActionPause</code> in the 0.2.1 ABI actually corresponds to this status.</p>
</li>
</ol>
<blockquote>
<p>For usage scenarios of <code dir="auto">types.HeaderStopIteration</code> and <code dir="auto">HeaderStopAllIterationAndWatermark</code>, you can refer to the official Higress <a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ai-transformer plugin</a> and <a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ai-quota plugin</a>.</p>
</blockquote>
<p>To configure this plugin in Higress with Wasmplugin CRD or Console UI interaction, you need to package the Wasm file into an OCI or Docker image. You can refer to this document: <a href="https://higress.cn/docs/latest/plugins/custom" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Custom Plugins</a>.</p>
<h2 id="3-local-debugging">3. Local Debugging</h2>
<h3 id="tools-preparation">Tools Preparation</h3>
<p>Install <a href="https://docs.docker.com/engine/install/?spm=a2c4g.426926.0.0.29071f47tjgquo" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Docker</a></p>
<h3 id="use-docker-compose-to-start-validate">Use docker compose to start validate</h3>
<ol>
<li>Make sure that the <code dir="auto">main.wasm</code> file, generated by the compilation process, exists in the plugin development directory(eg. <code dir="auto">wasm-demo</code>).</li>
<li>Create the <code dir="auto">docker-compose.yaml</code> file in the directory, file content is shown below:</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'3.7'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">envoy</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.1.5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">entrypoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/usr/local/bin/envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># we use the debug level log here, the default level is info in production mod</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">command</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">-c /etc/envoy/envoy.yaml --component-log-level wasm:debug</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">depends_on</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">wasmtest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"10000:10000"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">volumes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./envoy.yaml:/etc/envoy/envoy.yaml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">./main.wasm:/etc/envoy/main.wasm</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">httpbin</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">kennethreitz/httpbin:latest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">wasmtest</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"12345:80"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">networks</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">wasmtest</span><span style="--0:#E1E4E8">: {}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="version: &#x27;3.7&#x27;\x7Fservices:\x7F  envoy:\x7F    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.1.5\x7F    entrypoint: /usr/local/bin/envoy\x7F    # \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B\x7F  # we use the debug level log here, the default level is info in production mod\x7F    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug\x7F    depends_on:\x7F    - httpbin\x7F    networks:\x7F    - wasmtest\x7F    ports:\x7F    - &#x22;10000:10000&#x22;\x7F    volumes:\x7F    - ./envoy.yaml:/etc/envoy/envoy.yaml\x7F    - ./main.wasm:/etc/envoy/main.wasm\x7F\x7F  httpbin:\x7F    image: kennethreitz/httpbin:latest\x7F    networks:\x7F    - wasmtest\x7F    ports:\x7F    - &#x22;12345:80&#x22;\x7F\x7Fnetworks:\x7F  wasmtest: {}"><div></div></button></div></figure></div>
<ol start="4">
<li>Create the file envoy.yaml in the same directory, content is shown below\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9901</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">static_resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">listeners</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">listener_0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0.0.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10000</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">filter_chains</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.network.http_connection_manager</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">scheme_header_transformation</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">scheme_to_overwrite</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">stat_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress_http</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">route_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_route</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">virtual_hosts</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">local_service</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">domains</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">routes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">match</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">route</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">cluster</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">http_filters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasmdemo</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/udpa.type.v1.TypedStruct</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">type_url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">wasmdemo</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">vm_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">runtime</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.wasm.runtime.v8</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">code</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#85E89D">local</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#85E89D">filename</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/etc/envoy/main.wasm</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                        </span></span><span style="--0:#9ECBFF">"mockEnable": false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy.filters.http.router</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">typed_config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">type.googleapis.com/envoy.extensions.filters.http.router.v3.Router</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">clusters</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">connect_timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">30s</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LOGICAL_DNS</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Comment out the following line to test on v6 networks</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">dns_lookup_family</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">V4_ONLY</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">lb_policy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ROUND_ROBIN</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">load_assignment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">cluster_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">lb_endpoints</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">socket_address</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">address</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">httpbin</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="admin:\x7F  address:\x7F    socket_address:\x7F      protocol: TCP\x7F      address: 0.0.0.0\x7F      port_value: 9901\x7Fstatic_resources:\x7F  listeners:\x7F  - name: listener_0\x7F    address:\x7F      socket_address:\x7F        protocol: TCP\x7F        address: 0.0.0.0\x7F        port_value: 10000\x7F    filter_chains:\x7F    - filters:\x7F      - name: envoy.filters.network.http_connection_manager\x7F        typed_config:\x7F          &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\x7F          scheme_header_transformation:\x7F            scheme_to_overwrite: https\x7F          stat_prefix: ingress_http\x7F          route_config:\x7F            name: local_route\x7F            virtual_hosts:\x7F            - name: local_service\x7F              domains: [&#x22;*&#x22;]\x7F              routes:\x7F              - match:\x7F                  prefix: &#x22;/&#x22;\x7F                route:\x7F                  cluster: httpbin\x7F          http_filters:\x7F          - name: wasmdemo\x7F            typed_config:\x7F              &#x22;@type&#x22;: type.googleapis.com/udpa.type.v1.TypedStruct\x7F              type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm\x7F              value:\x7F                config:\x7F                  name: wasmdemo\x7F                  vm_config:\x7F                    runtime: envoy.wasm.runtime.v8\x7F                    code:\x7F                      local:\x7F                        filename: /etc/envoy/main.wasm\x7F                  configuration:\x7F                    &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F                    value: |\x7F                      {\x7F                        &#x22;mockEnable&#x22;: false\x7F                      }\x7F          - name: envoy.filters.http.router\x7F            typed_config:\x7F              &#x22;@type&#x22;: type.googleapis.com/envoy.extensions.filters.http.router.v3.Router\x7F  clusters:\x7F  - name: httpbin\x7F    connect_timeout: 30s\x7F    type: LOGICAL_DNS\x7F    # Comment out the following line to test on v6 networks\x7F    dns_lookup_family: V4_ONLY\x7F    lb_policy: ROUND_ROBIN\x7F    load_assignment:\x7F      cluster_name: httpbin\x7F      endpoints:\x7F      - lb_endpoints:\x7F        - endpoint:\x7F            address:\x7F              socket_address:\x7F                address: httpbin\x7F                port_value: 80"><div></div></button></div></figure></div>
<ol start="4">
<li>Start the compose application by using the command below:</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">compose</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">up</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker compose up"><div></div></button></div></figure></div>
<h3 id="functionality-validation">Functionality Validation</h3>
<ol>
<li>WASM plugins functionality</li>
</ol>
<p>By using <code dir="auto">curl</code> to access httpbin directly, we can see the request headers without gateway processing.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:12345/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"args"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Accept"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"*/*",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"127.0.0.1:12345",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"User-Agent"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"curl/7.79.1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"origin"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"172.18.0.1",</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"url"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://127.0.0.1:12345/get"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://127.0.0.1:12345/get\x7F\x7F{\x7F  &#x22;args&#x22;: {},\x7F  &#x22;headers&#x22;: {\x7F    &#x22;Accept&#x22;: &#x22;*/*&#x22;,\x7F    &#x22;Host&#x22;: &#x22;127.0.0.1:12345&#x22;,\x7F    &#x22;User-Agent&#x22;: &#x22;curl/7.79.1&#x22;\x7F  },\x7F  &#x22;origin&#x22;: &#x22;172.18.0.1&#x22;,\x7F  &#x22;url&#x22;: &#x22;http://127.0.0.1:12345/get&#x22;\x7F}"><div></div></button></div></figure></div>
<p>Use the <code dir="auto">curl</code> access the gateway, and we wil see the request headers after being processed by the gateway.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:10000/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"args"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Accept"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"*/*",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Hello"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"world",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"127.0.0.1:10000",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Original-Host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"127.0.0.1:10000",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Req-Start-Time"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"1681269273896",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"User-Agent"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"curl/7.79.1",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Envoy-Expected-Rq-Timeout-Ms"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"15000"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"origin"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"172.18.0.3",</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"url"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"https://127.0.0.1:10000/get"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://127.0.0.1:10000/get\x7F\x7F{\x7F  &#x22;args&#x22;: {},\x7F  &#x22;headers&#x22;: {\x7F    &#x22;Accept&#x22;: &#x22;*/*&#x22;,\x7F    &#x22;Hello&#x22;: &#x22;world&#x22;,\x7F    &#x22;Host&#x22;: &#x22;127.0.0.1:10000&#x22;,\x7F    &#x22;Original-Host&#x22;: &#x22;127.0.0.1:10000&#x22;,\x7F    &#x22;Req-Start-Time&#x22;: &#x22;1681269273896&#x22;,\x7F    &#x22;User-Agent&#x22;: &#x22;curl/7.79.1&#x22;,\x7F    &#x22;X-Envoy-Expected-Rq-Timeout-Ms&#x22;: &#x22;15000&#x22;\x7F  },\x7F  &#x22;origin&#x22;: &#x22;172.18.0.3&#x22;,\x7F  &#x22;url&#x22;: &#x22;https://127.0.0.1:10000/get&#x22;\x7F}"><div></div></button></div></figure></div>
<p>As we can see, the gateway has added the extra <code dir="auto">hello:world</code> header to the request indicating that the <code dir="auto">hello-world</code> plugin is working as expected.</p>
<ol start="2">
<li>Plugin Configuration Modification Confirm</li>
</ol>
<p>Change the <code dir="auto">mockEnable</code> value from <code dir="auto">false</code> to <code dir="auto">true</code> in the <code dir="auto">envoy.yaml</code>.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">configuration</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/google.protobuf.StringValue"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">"mockEnable": true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  configuration:\x7F    &#x22;@type&#x22;: &#x22;type.googleapis.com/google.protobuf.StringValue&#x22;\x7F    value: |\x7F      {\x7F        &#x22;mockEnable&#x22;: true\x7F      }"><div></div></button></div></figure></div>
<p>Use <code dir="auto">curl</code> to access the httpbin through the gateway, we can see the response as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:10000/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">hello</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">world</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://127.0.0.1:10000/get\x7F\x7Fhello world"><div></div></button></div></figure></div>
<p>When <code dir="auto">mockEnable</code> is set to <code dir="auto">true</code>, the gateway return the <code dir="auto">hello world</code> directly, which also means the plugins configuration has taken effect.</p>
<h2 id="more-samples">More Samples</h2>
<h3 id="plugin-with-no-configuration">Plugin with No Configuration</h3>
<p>If the plugin needs no configuration, just define an empty config struct.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/wrapper</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">logs </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/log</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">SetCtx</span><span style="--0:#E1E4E8">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"hello-world"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestHeadersBy</span><span style="--0:#E1E4E8">(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">SendHttpResponse</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">200</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"hello world"</span><span style="--0:#E1E4E8">), </span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.HeaderContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F    &#x22;github.com/higress-group/wasm-go/pkg/wrapper&#x22;\x7F  logs &#x22;github.com/higress-group/wasm-go/pkg/log&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F)\x7F\x7Ffunc main() {}\x7F\x7Ffunc init() {\x7F  wrapper.SetCtx(\x7F    &#x22;hello-world&#x22;,\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7Ftype MyConfig struct {}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {\x7F  proxywasm.SendHttpResponse(200, nil, []byte(&#x22;hello world&#x22;), -1)\x7F  return types.HeaderContinue\x7F}"><div></div></button></div></figure></div>
<h3 id="send-requests-to-external-services-in-the-plugin">Send Requests to External Services in the Plugin</h3>
<p>Only HTTP requests are supported for now. You can send requests to Nacos and K8s services with service sources configured in the gateway console, and services with a static IP or DNS source. Please be noted, HTTP client in the <code dir="auto">net/http</code> package cannot be used here. You only use the wrapped HTTP client as shown in the sample below.<br>In the following sample works as below:</p>
<ol>
<li>Parse service type in the config parsing stage, and generate the corresponding HTTP client.</li>
<li>In the HTTP request header processing stage, send a service request to the configured URL.</li>
<li>Parse response headers and get token value using the specified key.</li>
<li>Set the token value to the headers of the original request.</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">errors</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">net/http</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">strings</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/wrapper</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">logs </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/log</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/gjson</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">SetCtx</span><span style="--0:#E1E4E8">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"http-call"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ParseConfigBy</span><span style="--0:#E1E4E8">(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestHeadersBy</span><span style="--0:#E1E4E8">(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// The client used to initiate an HTTP request</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">client      </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpClient</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Request URL</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">requestPath </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Use this key when extracting token header from the service response and setting a header to the request. The value is configurable.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">tokenHeader </span><span style="--0:#F97583">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">parseConfig</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">json</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">gjson</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Result</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Get the service name with full FQDN, e.g., my-redis.dns, redis.my-ns.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">serviceName </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"serviceName"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"servicePort"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> servicePort </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.requestPath </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"requestPath"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> config.requestPath </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> errors.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"missing requestPath in config"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">serviceSource </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"serviceSource"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// If serviceSource is set to "ip" or "dns", serviceName shall be specified when creating the service.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// If serviceSource is set to "nacos" or "k8s", serviceName shall be set to the original name specified when registering the service.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">serviceName </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"serviceName"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"servicePort"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> serviceName </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">||</span><span style="--0:#E1E4E8"> servicePort </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> errors.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"invalid service config"</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">switch</span><span style="--0:#E1E4E8"> serviceSource {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"k8s"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">namespace </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"namespace"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">config.client </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> wrapper.</span><span style="--0:#B392F0">NewClusterClient</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">K8sCluster</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">Namespace:   namespace,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"nacos"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">namespace </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"namespace"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">config.client </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> wrapper.</span><span style="--0:#B392F0">NewClusterClient</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">NacosCluster</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">NamespaceID: namespace,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"ip"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">config.client </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> wrapper.</span><span style="--0:#B392F0">NewClusterClient</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">StaticIpCluster</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">case</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"dns"</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">domain </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"domain"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">config.client </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> wrapper.</span><span style="--0:#B392F0">NewClusterClient</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">DnsCluster</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ServiceName: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">Port:        servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">Domain:      domain,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">default</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> errors.</span><span style="--0:#B392F0">New</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"unknown service source: "</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">+</span><span style="--0:#E1E4E8"> serviceSource)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">MyConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Use the Get function of the client to initiate an HTTP Get request.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// The timeout parameter is omitted here, whose default value is 500ms.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8">  config.client.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(config.requestPath, </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// A callback function which will be called asynchronously when receiving the response.</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">statusCode</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">int</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">responseHeaders</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">http</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Header</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">responseBody</span><span style="--0:#E1E4E8"> []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6">// Process the response with a status code other than 200.</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> statusCode </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> http.StatusOK {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"http call failed, status: </span><span style="--0:#79B8FF">%d</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, statusCode)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">SendHttpResponse</span><span style="--0:#E1E4E8">(http.StatusInternalServerError, </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">[]</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"http call failed"</span><span style="--0:#E1E4E8">), </span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#F97583">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6">// Print out the status code and response body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Infof</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"get status: </span><span style="--0:#79B8FF">%d</span><span style="--0:#9ECBFF">, response body: </span><span style="--0:#79B8FF">%s</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, statusCode, responseBody)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6">// Extract token value from the response header and set the header of the original request</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">token </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> responseHeaders.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(config.tokenHeader)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> token </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">""</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpRequestHeader</span><span style="--0:#E1E4E8">(config.tokenHeader, token)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6">// Resume the original request processing workflow. Continue the process, so the request can be forwarded to the upstream.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// failed to get the external service, then let the request continue and record the log</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Error occured while calling http, it seems cannot find the service cluster."</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.ActionContinue</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// We need to wait for the callback to finish its process.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.HeaderStopIteration</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;errors&#x22;\x7F  &#x22;net/http&#x22;\x7F  &#x22;strings&#x22;\x7F  &#x22;github.com/higress-group/wasm-go/pkg/wrapper&#x22;\x7F  logs &#x22;github.com/higress-group/wasm-go/pkg/log&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {}\x7F\x7Ffunc init() {\x7F  wrapper.SetCtx(\x7F    &#x22;http-call&#x22;,\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7Ftype MyConfig struct {\x7F  // The client used to initiate an HTTP request\x7F  client      wrapper.HttpClient\x7F  // Request URL\x7F  requestPath string\x7F  // Use this key when extracting token header from the service response and setting a header to the request. The value is configurable.\x7F  tokenHeader string\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *MyConfig, log logs.Log) error {\x7F  // Get the service name with full FQDN, e.g., my-redis.dns, redis.my-ns.svc.cluster.local\x7F  serviceName := json.Get(&#x22;serviceName&#x22;).String()\x7F  servicePort := json.Get(&#x22;servicePort&#x22;).Int()\x7F  if servicePort == 0 {\x7F  config.requestPath = json.Get(&#x22;requestPath&#x22;).String()\x7F  if config.requestPath == &#x22;&#x22; {\x7F    return errors.New(&#x22;missing requestPath in config&#x22;)\x7F  }\x7F  serviceSource := json.Get(&#x22;serviceSource&#x22;).String()\x7F  // If serviceSource is set to &#x22;ip&#x22; or &#x22;dns&#x22;, serviceName shall be specified when creating the service.\x7F  // If serviceSource is set to &#x22;nacos&#x22; or &#x22;k8s&#x22;, serviceName shall be set to the original name specified when registering the service.\x7F  serviceName := json.Get(&#x22;serviceName&#x22;).String()\x7F  servicePort := json.Get(&#x22;servicePort&#x22;).Int()\x7F  if serviceName == &#x22;&#x22; || servicePort == 0 {\x7F    return errors.New(&#x22;invalid service config&#x22;)\x7F  }\x7F  switch serviceSource {\x7F  case &#x22;k8s&#x22;:\x7F    namespace := json.Get(&#x22;namespace&#x22;).String()\x7F    config.client = wrapper.NewClusterClient(wrapper.K8sCluster{\x7F      ServiceName: serviceName,\x7F      Namespace:   namespace,\x7F      Port:        servicePort,\x7F    })\x7F    return nil\x7F  case &#x22;nacos&#x22;:\x7F    namespace := json.Get(&#x22;namespace&#x22;).String()\x7F    config.client = wrapper.NewClusterClient(wrapper.NacosCluster{\x7F      ServiceName: serviceName,\x7F      NamespaceID: namespace,\x7F      Port:        servicePort,\x7F    })\x7F    return nil\x7F  case &#x22;ip&#x22;:\x7F    config.client = wrapper.NewClusterClient(wrapper.StaticIpCluster{\x7F      ServiceName: serviceName,\x7F      Port:        servicePort,\x7F    })\x7F    return nil\x7F  case &#x22;dns&#x22;:\x7F    domain := json.Get(&#x22;domain&#x22;).String()\x7F    config.client = wrapper.NewClusterClient(wrapper.DnsCluster{\x7F      ServiceName: serviceName,\x7F      Port:        servicePort,\x7F      Domain:      domain,\x7F    })\x7F    return nil\x7F  default:\x7F    return errors.New(&#x22;unknown service source: &#x22; + serviceSource)\x7F  }\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {\x7F  // Use the Get function of the client to initiate an HTTP Get request.\x7F  // The timeout parameter is omitted here, whose default value is 500ms.\x7F  err :=  config.client.Get(config.requestPath, nil,\x7F    // A callback function which will be called asynchronously when receiving the response.\x7F    func(statusCode int, responseHeaders http.Header, responseBody []byte) {\x7F      // Process the response with a status code other than 200.\x7F      if statusCode != http.StatusOK {\x7F        log.Errorf(&#x22;http call failed, status: %d&#x22;, statusCode)\x7F        proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,\x7F          []byte(&#x22;http call failed&#x22;), -1)\x7F        return\x7F      }\x7F      // Print out the status code and response body\x7F      log.Infof(&#x22;get status: %d, response body: %s&#x22;, statusCode, responseBody)\x7F      // Extract token value from the response header and set the header of the original request\x7F      token := responseHeaders.Get(config.tokenHeader)\x7F      if token != &#x22;&#x22; {\x7F        proxywasm.AddHttpRequestHeader(config.tokenHeader, token)\x7F      }\x7F      // Resume the original request processing workflow. Continue the process, so the request can be forwarded to the upstream.\x7F      proxywasm.ResumeHttpRequest()\x7F    })\x7F  if err != nil {\x7F    // failed to get the external service, then let the request continue and record the log\x7F    log.Errorf(&#x22;Error occured while calling http, it seems cannot find the service cluster.&#x22;)\x7F    return types.ActionContinue\x7F\x7F  }\x7F  // We need to wait for the callback to finish its process.\x7F  // Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.\x7F  return types.HeaderStopIteration\x7F}"><div></div></button></div></figure></div>
<h3 id="use-redis-in-the-plugin">Use Redis in the plugin</h3>
<p>Use the following sample code to implement the Redis current limiting plugin</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> (</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">strconv</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">time</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/gjson</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/tidwall/resp</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/wrapper</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">logs </span><span style="--0:#9ECBFF">"</span><span style="--0:#B392F0">github.com/higress-group/wasm-go/pkg/log</span><span style="--0:#9ECBFF">"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">() {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">init</span><span style="--0:#E1E4E8">() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">SetCtx</span><span style="--0:#E1E4E8">(</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"redis-demo"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ParseConfigBy</span><span style="--0:#E1E4E8">(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessRequestHeadersBy</span><span style="--0:#E1E4E8">(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">wrapper.</span><span style="--0:#B392F0">ProcessResponseHeadersBy</span><span style="--0:#E1E4E8">(onHttpResponseHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">type</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">struct</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">client </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">RedisClient</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">qpm    </span><span style="--0:#F97583">int</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">parseConfig</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">json</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">gjson</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Result</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">*</span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">error</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">serviceName </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"serviceName"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"servicePort"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> servicePort </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> strings.</span><span style="--0:#B392F0">HasSuffix</span><span style="--0:#E1E4E8">(serviceName, </span><span style="--0:#9ECBFF">".static"</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6">// \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">80</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">servicePort </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">username </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"username"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">password </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"password"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">String</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5355\u4F4D\u662F\u6BEB\u79D2</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">timeout </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeout"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> timeout </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">0</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">timeout </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">qpm </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> json.</span><span style="--0:#B392F0">Get</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"qpm"</span><span style="--0:#E1E4E8">).</span><span style="--0:#B392F0">Int</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.qpm </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">int</span><span style="--0:#E1E4E8">(qpm)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">config.client </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> wrapper.</span><span style="--0:#B392F0">NewRedisClusterClient</span><span style="--0:#E1E4E8">(</span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">FQDNCluster</span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">FQDN: serviceName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">Port: servicePort,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> config.client.</span><span style="--0:#B392F0">Init</span><span style="--0:#E1E4E8">(username, password, timeout)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpRequestHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">now </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> time.</span><span style="--0:#B392F0">Now</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">minuteAligned </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> now.</span><span style="--0:#B392F0">Truncate</span><span style="--0:#E1E4E8">(time.Minute)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">timeStamp </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> strconv.</span><span style="--0:#B392F0">FormatInt</span><span style="--0:#E1E4E8">(minuteAligned.</span><span style="--0:#B392F0">Unix</span><span style="--0:#E1E4E8">(), </span><span style="--0:#79B8FF">10</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \u5982\u679C redis api \u8FD4\u56DE\u7684 err != nil\uFF0C\u4E00\u822C\u662F\u7531\u4E8E\u7F51\u5173\u627E\u4E0D\u5230 redis \u540E\u7AEF\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u8BEF\u5220\u9664\u4E86 redis \u540E\u7AEF\u670D\u52A1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> config.client.</span><span style="--0:#B392F0">Incr</span><span style="--0:#E1E4E8">(timeStamp, </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">response</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">resp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Value</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"call redis error: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ctx.</span><span style="--0:#B392F0">SetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">, timeStamp)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">ctx.</span><span style="--0:#B392F0">SetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">, strconv.</span><span style="--0:#B392F0">Itoa</span><span style="--0:#E1E4E8">(config.qpm</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">response.</span><span style="--0:#B392F0">Integer</span><span style="--0:#E1E4E8">()))</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Integer</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">==</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">err </span><span style="--0:#F97583">:=</span><span style="--0:#E1E4E8"> config.client.</span><span style="--0:#B392F0">Expire</span><span style="--0:#E1E4E8">(timeStamp, </span><span style="--0:#79B8FF">60</span><span style="--0:#E1E4E8">, </span><span style="--0:#F97583">func</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">response</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">resp</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Value</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"call redis error: </span><span style="--0:#79B8FF">%v</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">, response.</span><span style="--0:#B392F0">Error</span><span style="--0:#E1E4E8">())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Error occured while calling redis, it seems cannot find the redis cluster."</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> response.</span><span style="--0:#B392F0">Integer</span><span style="--0:#E1E4E8">() </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> config.qpm {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">SendHttpResponse</span><span style="--0:#E1E4E8">(</span><span style="--0:#79B8FF">429</span><span style="--0:#E1E4E8">, [][</span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">{{</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">, timeStamp}, {</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"0"</span><span style="--0:#E1E4E8">}}, []</span><span style="--0:#F97583">byte</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Too many requests</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">"</span><span style="--0:#E1E4E8">), </span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">ResumeHttpRequest</span><span style="--0:#E1E4E8">()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> err </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u7531\u4E8E\u8C03\u7528redis\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">log.</span><span style="--0:#B392F0">Errorf</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"Error occured while calling redis, it seems cannot find the redis cluster."</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.HeaderContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">} </span><span style="--0:#F97583">else</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// \u8BF7\u6C42hold\u4F4F\uFF0C\u7B49\u5F85redis\u8C03\u7528\u5B8C\u6210</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.HeaderStopIteration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">func</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">onHttpResponseHeaders</span><span style="--0:#E1E4E8">(</span><span style="--0:#FFAB70">ctx</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">wrapper</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">HttpContext</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">config</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">RedisCallConfig</span><span style="--0:#E1E4E8">, </span><span style="--0:#FFAB70">log</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">logs</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Log</span><span style="--0:#E1E4E8">) </span><span style="--0:#B392F0">types</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Action</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpResponseHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">, ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"timeStamp"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">if</span><span style="--0:#E1E4E8"> ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">) </span><span style="--0:#F97583">!=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">nil</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">proxywasm.</span><span style="--0:#B392F0">AddHttpResponseHeader</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">, ctx.</span><span style="--0:#B392F0">GetContext</span><span style="--0:#E1E4E8">(</span><span style="--0:#9ECBFF">"callTimeLeft"</span><span style="--0:#E1E4E8">).(</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#F97583">return</span><span style="--0:#E1E4E8"> types.HeaderContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F  &#x22;strconv&#x22;\x7F  &#x22;time&#x22;\x7F\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm&#x22;\x7F  &#x22;github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F  &#x22;github.com/tidwall/gjson&#x22;\x7F  &#x22;github.com/tidwall/resp&#x22;\x7F\x7F  &#x22;github.com/higress-group/wasm-go/pkg/wrapper&#x22;\x7F  logs &#x22;github.com/higress-group/wasm-go/pkg/log&#x22;\x7F)\x7F\x7Ffunc main() {}\x7F\x7Ffunc init() {\x7F  wrapper.SetCtx(\x7F    &#x22;redis-demo&#x22;,\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F    wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),\x7F  )\x7F}\x7F\x7Ftype RedisCallConfig struct {\x7F  client wrapper.RedisClient\x7F  qpm    int\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *RedisCallConfig, log logs.Log) error {\x7F  // \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local\x7F  serviceName := json.Get(&#x22;serviceName&#x22;).String()\x7F  servicePort := json.Get(&#x22;servicePort&#x22;).Int()\x7F  if servicePort == 0 {\x7F    if strings.HasSuffix(serviceName, &#x22;.static&#x22;) {\x7F      // \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80\x7F      servicePort = 80\x7F    } else {\x7F      servicePort = 6379\x7F    }\x7F  }\x7F  username := json.Get(&#x22;username&#x22;).String()\x7F  password := json.Get(&#x22;password&#x22;).String()\x7F  // \u5355\u4F4D\u662F\u6BEB\u79D2\x7F  timeout := json.Get(&#x22;timeout&#x22;).Int()\x7F  if timeout == 0 {\x7F    timeout = 1000\x7F  }\x7F  qpm := json.Get(&#x22;qpm&#x22;).Int()\x7F  config.qpm = int(qpm)\x7F  config.client = wrapper.NewRedisClusterClient(wrapper.FQDNCluster{\x7F    FQDN: serviceName,\x7F    Port: servicePort,\x7F  })\x7F  return config.client.Init(username, password, timeout)\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log logs.Log) types.Action {\x7F  now := time.Now()\x7F  minuteAligned := now.Truncate(time.Minute)\x7F  timeStamp := strconv.FormatInt(minuteAligned.Unix(), 10)\x7F  // \u5982\u679C redis api \u8FD4\u56DE\u7684 err != nil\uFF0C\u4E00\u822C\u662F\u7531\u4E8E\u7F51\u5173\u627E\u4E0D\u5230 redis \u540E\u7AEF\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u8BEF\u5220\u9664\u4E86 redis \u540E\u7AEF\u670D\u52A1\x7F  err := config.client.Incr(timeStamp, func(response resp.Value) {\x7F    if response.Error() != nil {\x7F      log.Errorf(&#x22;call redis error: %v&#x22;, response.Error())\x7F      proxywasm.ResumeHttpRequest()\x7F    } else {\x7F      ctx.SetContext(&#x22;timeStamp&#x22;, timeStamp)\x7F      ctx.SetContext(&#x22;callTimeLeft&#x22;, strconv.Itoa(config.qpm-response.Integer()))\x7F      if response.Integer() == 1 {\x7F        err := config.client.Expire(timeStamp, 60, func(response resp.Value) {\x7F          if response.Error() != nil {\x7F            log.Errorf(&#x22;call redis error: %v&#x22;, response.Error())\x7F          }\x7F          proxywasm.ResumeHttpRequest()\x7F        })\x7F        if err != nil {\x7F          log.Errorf(&#x22;Error occured while calling redis, it seems cannot find the redis cluster.&#x22;)\x7F          proxywasm.ResumeHttpRequest()\x7F        }\x7F      } else {\x7F        if response.Integer() > config.qpm {\x7F          proxywasm.SendHttpResponse(429, [][2]string{{&#x22;timeStamp&#x22;, timeStamp}, {&#x22;callTimeLeft&#x22;, &#x22;0&#x22;}}, []byte(&#x22;Too many requests\\n&#x22;), -1)\x7F        } else {\x7F          proxywasm.ResumeHttpRequest()\x7F        }\x7F      }\x7F    }\x7F  })\x7F  if err != nil {\x7F    // \u7531\u4E8E\u8C03\u7528redis\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7\x7F    log.Errorf(&#x22;Error occured while calling redis, it seems cannot find the redis cluster.&#x22;)\x7F    return types.HeaderContinue\x7F  } else {\x7F    // \u8BF7\u6C42hold\u4F4F\uFF0C\u7B49\u5F85redis\u8C03\u7528\u5B8C\u6210\x7F    return types.HeaderStopIteration\x7F  }\x7F}\x7F\x7Ffunc onHttpResponseHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log logs.Log) types.Action {\x7F  if ctx.GetContext(&#x22;timeStamp&#x22;) != nil {\x7F    proxywasm.AddHttpResponseHeader(&#x22;timeStamp&#x22;, ctx.GetContext(&#x22;timeStamp&#x22;).(string))\x7F  }\x7F  if ctx.GetContext(&#x22;callTimeLeft&#x22;) != nil {\x7F    proxywasm.AddHttpResponseHeader(&#x22;callTimeLeft&#x22;, ctx.GetContext(&#x22;callTimeLeft&#x22;).(string))\x7F  }\x7F  return types.HeaderContinue\x7F}"><div></div></button></div></figure></div>`,n={title:"Developing WASM Plugins with Go",keywords:["wasm","go","golang","plugin","development"],description:"A comprehensive guide to developing WASM plugins for Higress using the Go programming language",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/wasm-go.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/wasm-go.md",t=void 0,d=function(){return`
# Developing WASM Plugins with Go

> **Note**:
> Go 1.24 now natively supports compiling WASM files, and Higress has already migrated from TinyGo compilation to Go 1.24 native compilation.
> If you have been using TinyGo to compile plugins, and want to migrate to compiling with Go 1.24, apart from adjusting the go mod dependencies, you only need to move the original initialization logic from the main function to the init function. Please refer to the example below for details.
>

## 1. Tool Preparation
Install Golang
### Golang
(Requires version 1.24 or higher)  
Official installation guide: [https://go.dev/doc/install](https://go.dev/doc/install)

#### Windows

1. Download the installer: [https://go.dev/dl/go1.24.4.windows-amd64.msi](https://go.dev/dl/go1.24.4.windows-amd64.msi)
2. Run the downloaded installer. By default, it will be installed in the \`Program Files\` or \`Program Files (x86)\` directory
3. After installation, press "Win+R" to open the Run dialog, type "cmd" and press Enter to open the command prompt. Then type: \`go version\` to verify the installation

#### macOS

1. Download the installer: [https://go.dev/dl/go1.24.4.darwin-amd64.pkg](https://go.dev/dl/go1.24.4.darwin-amd64.pkg)
2. Run the downloaded installer. By default, it will be installed in the \`/usr/local/go\` directory
3. Open Terminal and type: \`go version\` to verify the installation

#### Linux

1. Download the archive: [https://go.dev/dl/go1.24.4.linux-amd64.tar.gz](https://go.dev/dl/go1.24.4.linux-amd64.tar.gz)
2. Run the following commands to install:
\`\`\`bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.24.4.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
\`\`\`
3. Type \`go version\` to verify the installation

## 2. Writing the Plugin

### 1. Initialize the Project

1. Create a new project directory, for example \`wasm-demo-go\`
2. In the created directory, run the following command to initialize a Go module:
\`\`\`bash
go mod init wasm-demo-go
\`\`\`
3. For users in China, you may need to set up a proxy for downloading dependencies:
\`\`\`bash
go env -w GOPROXY=https://proxy.golang.com.cn,direct
\`\`\`
4. Download the required dependencies for building the plugin:
\`\`\`bash
go get github.com/higress-group/proxy-wasm-go-sdk@go-1.24
go get github.com/higress-group/wasm-go@main
go get github.com/tidwall/gjson
\`\`\`

### 2. Writing main.go

Below is a simple example that implements the following functionality:

- When the plugin is configured with \`mockEnable: true\`, it directly returns a "hello world" response
- When no plugin configuration is provided or \`mockEnable: false\`, it adds a \`hello: world\` request header to the original request

The more concise details and examples can be found in section 4 below.

> Note: The plugin configuration in the gateway console is in YAML format, but it will be automatically converted to JSON format when delivered to the plugin. Therefore, the example directly parses the configuration from JSON.

\`\`\`go
package main

import (
	"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {}

func init() {
	wrapper.SetCtx(
		// Plugin name
		"my-plugin",
		// Custom function for parsing plugin configuration
		wrapper.ParseConfigBy(parseConfig),
		// Custom function for processing request headers
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// Custom plugin configuration
type MyConfig struct {
	mockEnable bool
}

// The YAML configuration from the console is automatically converted to JSON
// We can directly parse the configuration from the json parameter
func parseConfig(json gjson.Result, config *MyConfig, log logs.Log) error {
	// Parse the configuration and update the config object
	config.mockEnable = json.Get("mockEnable").Bool()
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {
	proxywasm.AddHttpRequestHeader("hello", "world")
	if config.mockEnable {
		proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	}
	return types.HeaderContinue
}
\`\`\`

#### HTTP Processing Hooks

In the example above, we used \`wrapper.ProcessRequestHeadersBy\` to register our custom function \`onHttpRequestHeaders\` to handle requests during the "HTTP Request Headers" phase. You can also register handlers for other phases using the following methods:

| HTTP Processing Phase | Trigger | Hook Method |
|----------------------|---------|-------------|
| HTTP Request Headers | When the gateway receives request headers from the client | wrapper.ProcessRequestHeadersBy |
| HTTP Request Body | When the gateway receives request body from the client | wrapper.ProcessRequestBodyBy |
| HTTP Response Headers | When the gateway receives response headers from the backend | wrapper.ProcessResponseHeadersBy |
| HTTP Response Body | When the gateway receives response body from the backend | wrapper.ProcessResponseBodyBy |

#### Utility Methods

The example uses \`proxywasm.AddHttpRequestHeader\` and \`proxywasm.SendHttpResponse\`, which are utility methods provided by the SDK. Here are the main utility methods available:

| Category | Method | Description | Applicable HTTP Processing Phases |
|----------|--------|-------------|----------------------------------|
| Request Headers | GetHttpRequestHeaders | Get all request headers | HTTP Request Headers |
|  | ReplaceHttpRequestHeaders | Replace all request headers | HTTP Request Headers |
|  | GetHttpRequestHeader | Get a specific request header | HTTP Request Headers |
|  | RemoveHttpRequestHeader | Remove a specific request header | HTTP Request Headers |
|  | ReplaceHttpRequestHeader | Replace a specific request header | HTTP Request Headers |
|  | AddHttpRequestHeader | Add a new request header | HTTP Request Headers |
| Request Body | GetHttpRequestBody | Get the request body | HTTP Request Body |
|  | AppendHttpRequestBody | Append data to the end of the request body | HTTP Request Body |
|  | PrependHttpRequestBody | Add data to the beginning of the request body | HTTP Request Body |
|  | ReplaceHttpRequestBody | Replace the entire request body | HTTP Request Body |
| Response Headers | GetHttpResponseHeaders | Get all response headers | HTTP Response Headers |
|  | ReplaceHttpResponseHeaders | Replace all response headers | HTTP Response Headers |
|  | GetHttpResponseHeader | Get a specific response header | HTTP Response Headers |
|  | RemoveHttpResponseHeader | Remove a specific response header | HTTP Response Headers |
|  | ReplaceHttpResponseHeader | Replace a specific response header | HTTP Response Headers |
|  | AddHttpResponseHeader | Add a new response header | HTTP Response Headers |
| Response Body | GetHttpResponseBody | Get the response body | HTTP Response Body |
|  | AppendHttpResponseBody | Append data to the end of the response body | HTTP Response Body |
|  | PrependHttpResponseBody | Add data to the beginning of the response body | HTTP Response Body |
|  | ReplaceHttpResponseBody | Replace the entire response body | HTTP Response Body |
| HTTP Calls | DispatchHttpCall | Send an HTTP request | - |
|  | GetHttpCallResponseHeaders | Get response headers from DispatchHttpCall | - |
|  | GetHttpCallResponseBody | Get response body from DispatchHttpCall | - |
|  | GetHttpCallResponseTrailers | Get response trailers from DispatchHttpCall | - |
| Direct Response | SendHttpResponse | Return a specific HTTP response | - |
| Flow Control | ResumeHttpRequest | Resume a previously paused request | - |
|  | ResumeHttpResponse | Resume a previously paused response | - |


### 3. Compile and Generate WASM File

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
go mod tidy
GOOS=wasip1 GOARCH=wasm go build -buildmode=c-shared -o main.wasm ./
\`\`\`
A new file named main.wasm will be created after a successful compilation, which will be used in the local debugging sample below as well.<br />When using custom plugin function in the cloud native gateway market, you just need to upload this file.

#### Header Status Management Instructions

1.  **HeaderContinue**:

    Indicates that the current filter has finished processing and can be passed to the next filter for further processing. \`types.ActionContinue\` corresponds to this status.

2.  **HeaderStopIteration**:

    Indicates that the header cannot yet be passed to the next filter for processing. However, it does not stop reading data from the connection and continues to trigger the processing of body data. This allows for updating the HTTP request header content during the body data processing stage. If the body data is to be passed to the next filter, the header will also be passed along with it.

    Note that when returning this status, a body is required. If there is no body, the request/response will be blocked indefinitely.

    To determine if a request has a body, you can use [\`HasRequestBody()\`](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/request_wrapper.go#L86).

3.  **HeaderContinueAndEndStream**:

    Indicates that the header can be passed to the next filter, but the next filter will receive \`end_stream = false\`, meaning the request is not yet finished. This allows the current filter to add more body data.

4.  **HeaderStopAllIterationAndBuffer**:

    Stops all iterations, indicating that the header cannot be passed to the next filter, and the current filter will also not receive body data. It buffers headers, data, and trailers for the current and subsequent filters. If the buffer size exceeds the limit, a 413 will be returned directly during the request phase, and a 500 will be returned directly during the response phase.
    At the same time, \`proxywasm.ResumeHttpRequest()\`, \`proxywasm.ResumeHttpResponse()\`, or \`proxywasm.SendHttpResponseWithDetail()\` functions need to be called to resume subsequent processing.

5.  **HeaderStopAllIterationAndWatermark**:

    Same as above, the difference being that when the cache exceeds the buffer limit, flow control will be triggered, i.e., pausing data reading from the connection. \`types.ActionPause\` in the 0.2.1 ABI actually corresponds to this status.

> For usage scenarios of \`types.HeaderStopIteration\` and \`HeaderStopAllIterationAndWatermark\`, you can refer to the official Higress [ai-transformer plugin](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99) and [ai-quota plugin](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179).

To configure this plugin in Higress with Wasmplugin CRD or Console UI interaction, you need to package the Wasm file into an OCI or Docker image. You can refer to this document: [Custom Plugins](https://higress.cn/docs/latest/plugins/custom).

## 3. Local Debugging 

### Tools Preparation

Install [Docker](https://docs.docker.com/engine/install/?spm=a2c4g.426926.0.0.29071f47tjgquo)

### Use docker compose to start validate

1. Make sure that the \`main.wasm\` file, generated by the compilation process, exists in the plugin development directory(eg. \`wasm-demo\`).
2. Create the \`docker-compose.yaml\` file in the directory, file content is shown below:

\`\`\`yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.1.5
    entrypoint: /usr/local/bin/envoy
    # \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B
	# we use the debug level log here, the default level is info in production mod
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

4. Create the file envoy.yaml in the same directory, content is shown below\uFF1A

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

4. Start the compose application by using the command below:

\`\`\`bash
docker compose up
\`\`\`

### Functionality Validation

1. WASM plugins functionality 

By using \`curl\` to access httpbin directly, we can see the request headers without gateway processing.
\`\`\`bash
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

Use the \`curl\` access the gateway, and we wil see the request headers after being processed by the gateway.

\`\`\`bash
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

As we can see, the gateway has added the extra \`hello:world\` header to the request indicating that the \`hello-world\` plugin is working as expected. 

2. Plugin Configuration Modification Confirm 

Change the \`mockEnable\` value from \`false\` to \`true\` in the \`envoy.yaml\`.

\`\`\`yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |
      {
        "mockEnable": true
      }
\`\`\`

Use \`curl\` to access the httpbin through the gateway, we can see the response as follows: 

\`\`\`bash
curl http://127.0.0.1:10000/get

hello world
\`\`\`

When \`mockEnable\` is set to \`true\`, the gateway return the \`hello world\` directly, which also means the plugins configuration has taken effect.

## More Samples

### Plugin with No Configuration

If the plugin needs no configuration, just define an empty config struct.

\`\`\`go
package main

import (
		"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
)

func main() {}

func init() {
	wrapper.SetCtx(
		"hello-world",
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

type MyConfig struct {}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {
	proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	return types.HeaderContinue
}
\`\`\`

### Send Requests to External Services in the Plugin

Only HTTP requests are supported for now. You can send requests to Nacos and K8s services with service sources configured in the gateway console, and services with a static IP or DNS source. Please be noted, HTTP client in the \`net/http\` package cannot be used here. You only use the wrapped HTTP client as shown in the sample below.<br />In the following sample works as below:

1. Parse service type in the config parsing stage, and generate the corresponding HTTP client.
2. In the HTTP request header processing stage, send a service request to the configured URL.
3. Parse response headers and get token value using the specified key.
4. Set the token value to the headers of the original request.

\`\`\`go
package main

import (
	"errors"
	"net/http"
	"strings"
	"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {}

func init() {
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

func parseConfig(json gjson.Result, config *MyConfig, log logs.Log) error {
	// Get the service name with full FQDN, e.g., my-redis.dns, redis.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
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

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {
	// Use the Get function of the client to initiate an HTTP Get request.
	// The timeout parameter is omitted here, whose default value is 500ms.
	err :=  config.client.Get(config.requestPath, nil,
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
	if err != nil {
		// failed to get the external service, then let the request continue and record the log
		log.Errorf("Error occured while calling http, it seems cannot find the service cluster.")
		return types.ActionContinue

	}
	// We need to wait for the callback to finish its process.
	// Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.
	return types.HeaderStopIteration
}
\`\`\`
### Use Redis in the plugin
Use the following sample code to implement the Redis current limiting plugin

\`\`\`go
package main

import (
	"strconv"
	"time"

	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
	"github.com/tidwall/resp"

	"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
)

func main() {}

func init() {
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

func parseConfig(json gjson.Result, config *RedisCallConfig, log logs.Log) error {
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

func onHttpRequestHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log logs.Log) types.Action {
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
		return types.HeaderContinue
	} else {
		// \u8BF7\u6C42hold\u4F4F\uFF0C\u7B49\u5F85redis\u8C03\u7528\u5B8C\u6210
		return types.HeaderStopIteration
	}
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log logs.Log) types.Action {
	if ctx.GetContext("timeStamp") != nil {
		proxywasm.AddHttpResponseHeader("timeStamp", ctx.GetContext("timeStamp").(string))
	}
	if ctx.GetContext("callTimeLeft") != nil {
		proxywasm.AddHttpResponseHeader("callTimeLeft", ctx.GetContext("callTimeLeft").(string))
	}
	return types.HeaderContinue
}
\`\`\`
`},i=function(){return s},l=function(){return[{depth:2,slug:"1-tool-preparation",text:"1. Tool Preparation"},{depth:3,slug:"golang",text:"Golang"},{depth:4,slug:"windows",text:"Windows"},{depth:4,slug:"macos",text:"macOS"},{depth:4,slug:"linux",text:"Linux"},{depth:2,slug:"2-writing-the-plugin",text:"2. Writing the Plugin"},{depth:3,slug:"1-initialize-the-project",text:"1. Initialize the Project"},{depth:3,slug:"2-writing-maingo",text:"2. Writing main.go"},{depth:4,slug:"http-processing-hooks",text:"HTTP Processing Hooks"},{depth:4,slug:"utility-methods",text:"Utility Methods"},{depth:3,slug:"3-compile-and-generate-wasm-file",text:"3. Compile and Generate WASM File"},{depth:4,slug:"31-building-wasm-go-plugin-image-with-scaffolding",text:"3.1 Building wasm-go plugin image with scaffolding"},{depth:4,slug:"32-compile-wasm-files-locally",text:"3.2 Compile wasm files locally"},{depth:4,slug:"header-status-management-instructions",text:"Header Status Management Instructions"},{depth:2,slug:"3-local-debugging",text:"3. Local Debugging"},{depth:3,slug:"tools-preparation",text:"Tools Preparation"},{depth:3,slug:"use-docker-compose-to-start-validate",text:"Use docker compose to start validate"},{depth:3,slug:"functionality-validation",text:"Functionality Validation"},{depth:2,slug:"more-samples",text:"More Samples"},{depth:3,slug:"plugin-with-no-configuration",text:"Plugin with No Configuration"},{depth:3,slug:"send-requests-to-external-services-in-the-plugin",text:"Send Requests to External Services in the Plugin"},{depth:3,slug:"use-redis-in-the-plugin",text:"Use Redis in the plugin"}]},e=o((f,m,h)=>{const{layout:F,...p}=n;return p.file=a,p.url=t,r`${E()}${y(s)}`})});export{e as Content,g as __tla,i as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,d as rawContent,t as url};
