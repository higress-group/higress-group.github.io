import{c as d,__tla as c}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as v,__tla as _}from"./constant.D4Mjy2rC.js";import{__tla as m}from"./astro/assets-service.BhtN0nM5.js";let e,t,a,n,o,l,i,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return _}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u73AF\u5883\u8981\u6C42">\u73AF\u5883\u8981\u6C42</h2>
<p>Higress \u7248\u672C\u9700\u4E0D\u4F4E\u4E8E 2.1.0\u3002</p>
<h2 id="\u4E00\u822C\u7528\u6237\u63D2\u4EF6\u7684\u914D\u7F6E\u65B9\u6CD5">\u4E00\u822C\u7528\u6237\u63D2\u4EF6\u7684\u914D\u7F6E\u65B9\u6CD5</h2>
<p>\u8981\u6EE1\u8DB3\u8FD9\u4E00\u9700\u6C42\uFF0C\u53EA\u9700\u8981\u4E3A Higress Console \u5BB9\u5668\u6DFB\u52A0 <code dir="auto">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN</code> \u73AF\u5883\u53D8\u91CF\uFF0C\u503C\u4E3A\u81EA\u5B9A\u4E49\u955C\u50CF\u5730\u5740\u7684\u683C\u5F0F\u6A21\u7248\u3002\u6A21\u7248\u53EF\u4EE5\u6309\u9700\u4F7F\u7528 <code dir="auto">\${name}</code> \u548C <code dir="auto">\${version}</code> \u4F5C\u4E3A\u63D2\u4EF6\u540D\u79F0\u548C\u955C\u50CF\u7248\u672C\u7684\u5360\u4F4D\u7B26\u3002</p>
<p><strong>\u4F8B 1\uFF1A</strong></p>
<p>\u5728\u8FDB\u884C\u4E86\u4EE5\u4E0B\u914D\u7F6E\u540E\uFF0C</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">oci://hub.example.com/wasm-plugins/</span><span style="--0:#E1E4E8">\${name}</span><span style="--0:#9ECBFF">:</span><span style="--0:#E1E4E8">\${version}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/\${name}:\${version}"><div></div></button></div></figure></div>
<p>Higress Console \u9488\u5BF9 key-rate-limit \u63D2\u4EF6\u751F\u6210\u7684\u955C\u50CF\u5730\u5740\u5C06\u4E3A\uFF1A<code dir="auto">oci://hub.example.com/wasm-plugins/key-rate-limit:1.0.0</code></p>
<p><strong>\u4F8B 2\uFF1A</strong></p>
<p>\u5728\u8FDB\u884C\u4E86\u4EE5\u4E0B\u914D\u7F6E\u540E\uFF0C</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">http://192.168.1.100:8080/wasm-plugins/</span><span style="--0:#E1E4E8">\${name}</span><span style="--0:#9ECBFF">.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.100:8080/wasm-plugins/\${name}.wasm"><div></div></button></div></figure></div>
<p>Higress Console \u9488\u5BF9 key-rate-limit \u63D2\u4EF6\u751F\u6210\u7684\u955C\u50CF\u5730\u5740\u5C06\u4E3A\uFF1A<code dir="auto">http://192.168.1.100:8080/wasm-plugins/key-rate-limit.wasm</code></p>
<h3 id="helm-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5">Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5</h3>
<h4 id="1-\u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E">1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm get values higress -n higress-system > values.yaml"><div></div></button></div></figure></div>
<h4 id="2-\u4FEE\u6539\u914D\u7F6E">2. \u4FEE\u6539\u914D\u7F6E</h4>
<p>\u6DFB\u52A0\u4EE5\u4E0B\u8282\u70B9\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">higress-console</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">podEnvs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-custom-image-url-pattern</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="higress-console:\x7F  podEnvs:\x7F    HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN: your-custom-image-url-pattern"><div></div></button></div></figure></div>
<h4 id="3-\u66F4\u65B0\u5F53\u524D\u90E8\u7F72">3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \${higress_version} \u4E3A\u5F53\u524D\u90E8\u7F72\u7684 Higress \u7248\u672C\uFF0C\u4F8B\u5982 v2.1.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--version</span><span style="--0:#E1E4E8"> \${higress_version} </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm upgrade higress --version \${higress_version} -n higress-system higress.io/higress -f values.yaml"><div></div></button></div></figure></div>
<h3 id="docker-compose-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5">Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5</h3>
<p>\u76F4\u63A5\u4FEE\u6539 <code dir="auto">compose/env/console.env</code> \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 <code dir="auto">$</code> \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 <code dir="auto">$$</code>\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A</p>
<p><strong>\u4F8B 1\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">http://192.168.1.1:8080/plugins/</span><span style="--0:#79B8FF">$$</span><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">name}.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/$\${name}.wasm"><div></div></button></div></figure></div>
<p><strong>\u4F8B 2\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">oci://hub.example.com/wasm-plugins/</span><span style="--0:#79B8FF">$$</span><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">name}:$$</span><span style="--0:#9ECBFF">{version}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/$\${name}:$\${version}"><div></div></button></div></figure></div>
<h3 id="docker-all-in-one-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5">Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5</h3>
<p>\u5728\u542F\u52A8\u5BB9\u5668\u7684 docker \u547D\u4EE4\u4E2D\u6DFB\u52A0 <code dir="auto">-e</code> \u53C2\u6570\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 <code dir="auto">$</code> \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 <code dir="auto">\\$</code>\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A</p>
<p><strong>\u4F8B 1\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/</span><span style="--0:#79B8FF">\\$</span><span style="--0:#9ECBFF">{name}.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="-e HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/\\\${name}.wasm"><div></div></button></div></figure></div>
<p><strong>\u4F8B 2\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/</span><span style="--0:#79B8FF">\\$</span><span style="--0:#9ECBFF">{name}:</span><span style="--0:#79B8FF">\\$</span><span style="--0:#9ECBFF">{version}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="-e HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/\\\${name}:\\\${version}"><div></div></button></div></figure></div>
<h3 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879</h3>
<p>\u4EE5\u4E0A\u914D\u7F6E\u4E0D\u4F1A\u5F71\u54CD\u5DF2\u7ECF\u4FDD\u5B58\u7684\u63D2\u4EF6\u914D\u7F6E\u3002\u5982\u679C\u9700\u8981\u4FEE\u6539\u8FD9\u4E9B\u63D2\u4EF6\u914D\u7F6E\u4E2D\u7684\u955C\u50CF\u5730\u5740\uFF0C\u53EF\u4EE5\u5728 Higress Console \u7684\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\u8FDB\u884C\u9488\u5BF9\u6027\u4FEE\u6539\u3002</p>
<p><img src="/img/docs/ops/how-tos/builtin-plugin-url/edit-builtin-plugin-zh.png" alt="Edit a built-in plugin" referrerpolicy="no-referrer"></p>
<h2 id="\u5BF9\u63A5-nacos-3x-\u6240\u751F\u6210\u7684-mcp-server-\u63D2\u4EF6\u5730\u5740\u914D\u7F6E">\u5BF9\u63A5 Nacos 3.x \u6240\u751F\u6210\u7684 MCP Server \u63D2\u4EF6\u5730\u5740\u914D\u7F6E</h2>
<p>\u5728\u5BF9\u63A5\u4E86 Nacos 3.x \u7684 MCP \u6CE8\u518C\u4E2D\u5FC3\u529F\u80FD\u540E\uFF0CHigress Controller \u4F1A\u81EA\u52A8\u4E3A\u542F\u52A8\u7684 MCP Server \u751F\u6210 mcp-server \u63D2\u4EF6\u7684\u914D\u7F6E\u3002\u800C\u914D\u7F6E\u4E2D\u7684\u955C\u50CF\u5730\u5740\u9ED8\u8BA4\u6307\u5411 Higress \u516C\u5171\u63D2\u4EF6\u4ED3\u5E93\u3002\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\uFF0C\u5219\u9700\u8981\u4FEE\u6539 Higress Controller \u7684 <code dir="auto">MCP_SERVER_WASM_IMAGE_URL</code> \u73AF\u5883\u53D8\u91CF\u3002</p>
<h3 id="helm-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5-1">Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5</h3>
<h4 id="1-\u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E-1">1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">></span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm get values higress -n higress-system > values.yaml"><div></div></button></div></figure></div>
<h4 id="2-\u4FEE\u6539\u914D\u7F6E-1">2. \u4FEE\u6539\u914D\u7F6E</h4>
<p>\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">higress-core</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">controller</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">env</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">MCP_SERVER_WASM_IMAGE_URL</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">your-mcp-server-image-url</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="higress-core:\x7F  controller:\x7F    env:\x7F      MCP_SERVER_WASM_IMAGE_URL: your-mcp-server-image-url"><div></div></button></div></figure></div>
<h4 id="3-\u66F4\u65B0\u5F53\u524D\u90E8\u7F72-1">3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \${higress_version} \u4E3A\u5F53\u524D\u90E8\u7F72\u7684 Higress \u7248\u672C\uFF0C\u4F8B\u5982 v2.1.3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">helm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upgrade</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--version</span><span style="--0:#E1E4E8"> \${higress_version} </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress.io/higress</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">values.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="helm upgrade higress --version \${higress_version} -n higress-system higress.io/higress -f values.yaml"><div></div></button></div></figure></div>
<h3 id="docker-compose-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5-1">Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5</h3>
<p>\u76F4\u63A5\u4FEE\u6539 <code dir="auto">compose/env/controller.env</code> \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 <code dir="auto">$</code> \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 <code dir="auto">$$</code>\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A</p>
<p><strong>\u4F8B 1\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">MCP_SERVER_WASM_IMAGE_URL</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">http://192.168.1.1:8080/plugins/mcp-server.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm"><div></div></button></div></figure></div>
<p><strong>\u4F8B 2\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">MCP_SERVER_WASM_IMAGE_URL</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">oci://hub.example.com/wasm-plugins/mcp-server:0.0.1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="MCP_SERVER_WASM_IMAGE_URL=oci://hub.example.com/wasm-plugins/mcp-server:0.0.1"><div></div></button></div></figure></div>
<h3 id="docker-all-in-one-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5-1">Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5</h3>
<p>\u5728\u542F\u52A8\u5BB9\u5668\u7684 docker \u547D\u4EE4\u4E2D\u6DFB\u52A0 <code dir="auto">-e</code> \u53C2\u6570\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 <code dir="auto">$</code> \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 <code dir="auto">\\$</code>\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A</p>
<p><strong>\u4F8B 1\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="-e MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm"><div></div></button></div></figure></div>
<p><strong>\u4F8B 2\uFF1A</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">-e</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">MCP_SERVER_WASM_IMAGE_URL=oci://hub.example.com/wasm-plugins/mcp-server:0.0.1</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="-e MCP_SERVER_WASM_IMAGE_URL=oci://hub.example.com/wasm-plugins/mcp-server:0.0.1"><div></div></button></div></figure></div>`,n={title:"\u4FEE\u6539\u5185\u7F6E\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740",keywords:["ops","config","plugin","repository","url"],description:"\u4ECB\u7ECD\u5982\u4F55\u4FEE\u6539 Higress Console \u4E2D\u5185\u7F6E\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/builtin-plugin-url.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/builtin-plugin-url.md",i=void 0,l=function(){return`
# \u4FEE\u6539\u5185\u7F6E\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740

## \u73AF\u5883\u8981\u6C42

Higress \u7248\u672C\u9700\u4E0D\u4F4E\u4E8E 2.1.0\u3002

## \u4E00\u822C\u7528\u6237\u63D2\u4EF6\u7684\u914D\u7F6E\u65B9\u6CD5

\u8981\u6EE1\u8DB3\u8FD9\u4E00\u9700\u6C42\uFF0C\u53EA\u9700\u8981\u4E3A Higress Console \u5BB9\u5668\u6DFB\u52A0 \`HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN\` \u73AF\u5883\u53D8\u91CF\uFF0C\u503C\u4E3A\u81EA\u5B9A\u4E49\u955C\u50CF\u5730\u5740\u7684\u683C\u5F0F\u6A21\u7248\u3002\u6A21\u7248\u53EF\u4EE5\u6309\u9700\u4F7F\u7528 \`\${name}\` \u548C \`\${version}\` \u4F5C\u4E3A\u63D2\u4EF6\u540D\u79F0\u548C\u955C\u50CF\u7248\u672C\u7684\u5360\u4F4D\u7B26\u3002

**\u4F8B 1\uFF1A**

\u5728\u8FDB\u884C\u4E86\u4EE5\u4E0B\u914D\u7F6E\u540E\uFF0C

\`\`\`bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/\${name}:\${version}
\`\`\`

Higress Console \u9488\u5BF9 key-rate-limit \u63D2\u4EF6\u751F\u6210\u7684\u955C\u50CF\u5730\u5740\u5C06\u4E3A\uFF1A\`oci://hub.example.com/wasm-plugins/key-rate-limit:1.0.0\`

**\u4F8B 2\uFF1A**

\u5728\u8FDB\u884C\u4E86\u4EE5\u4E0B\u914D\u7F6E\u540E\uFF0C

\`\`\`bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.100:8080/wasm-plugins/\${name}.wasm
\`\`\`

Higress Console \u9488\u5BF9 key-rate-limit \u63D2\u4EF6\u751F\u6210\u7684\u955C\u50CF\u5730\u5740\u5C06\u4E3A\uFF1A\`http://192.168.1.100:8080/wasm-plugins/key-rate-limit.wasm\`

### Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

#### 1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E

\`\`\`bash
helm get values higress -n higress-system > values.yaml
\`\`\`

#### 2. \u4FEE\u6539\u914D\u7F6E

\u6DFB\u52A0\u4EE5\u4E0B\u8282\u70B9\uFF1A

\`\`\`yaml
higress-console:
  podEnvs:
    HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN: your-custom-image-url-pattern
\`\`\`

#### 3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72

\`\`\`bash
# \${higress_version} \u4E3A\u5F53\u524D\u90E8\u7F72\u7684 Higress \u7248\u672C\uFF0C\u4F8B\u5982 v2.1.3
helm upgrade higress --version \${higress_version} -n higress-system higress.io/higress -f values.yaml
\`\`\`

### Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u76F4\u63A5\u4FEE\u6539 \`compose/env/console.env\` \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`$$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

**\u4F8B 1\uFF1A**

\`\`\`bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/$\${name}.wasm
\`\`\`

**\u4F8B 2\uFF1A**

\`\`\`bash
HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/$\${name}:$\${version}
\`\`\`

### Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u5728\u542F\u52A8\u5BB9\u5668\u7684 docker \u547D\u4EE4\u4E2D\u6DFB\u52A0 \`-e\` \u53C2\u6570\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`\\$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

**\u4F8B 1\uFF1A**

\`\`\`bash
-e HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://192.168.1.1:8080/plugins/\\\${name}.wasm
\`\`\`

**\u4F8B 2\uFF1A**

\`\`\`bash
-e HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=oci://hub.example.com/wasm-plugins/\\\${name}:\\\${version}
\`\`\`

### \u6CE8\u610F\u4E8B\u9879

\u4EE5\u4E0A\u914D\u7F6E\u4E0D\u4F1A\u5F71\u54CD\u5DF2\u7ECF\u4FDD\u5B58\u7684\u63D2\u4EF6\u914D\u7F6E\u3002\u5982\u679C\u9700\u8981\u4FEE\u6539\u8FD9\u4E9B\u63D2\u4EF6\u914D\u7F6E\u4E2D\u7684\u955C\u50CF\u5730\u5740\uFF0C\u53EF\u4EE5\u5728 Higress Console \u7684\u63D2\u4EF6\u914D\u7F6E\u9875\u9762\u8FDB\u884C\u9488\u5BF9\u6027\u4FEE\u6539\u3002

![Edit a built-in plugin](/img/docs/ops/how-tos/builtin-plugin-url/edit-builtin-plugin-zh.png)

## \u5BF9\u63A5 Nacos 3.x \u6240\u751F\u6210\u7684 MCP Server \u63D2\u4EF6\u5730\u5740\u914D\u7F6E

\u5728\u5BF9\u63A5\u4E86 Nacos 3.x \u7684 MCP \u6CE8\u518C\u4E2D\u5FC3\u529F\u80FD\u540E\uFF0CHigress Controller \u4F1A\u81EA\u52A8\u4E3A\u542F\u52A8\u7684 MCP Server \u751F\u6210 mcp-server \u63D2\u4EF6\u7684\u914D\u7F6E\u3002\u800C\u914D\u7F6E\u4E2D\u7684\u955C\u50CF\u5730\u5740\u9ED8\u8BA4\u6307\u5411 Higress \u516C\u5171\u63D2\u4EF6\u4ED3\u5E93\u3002\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\uFF0C\u5219\u9700\u8981\u4FEE\u6539 Higress Controller \u7684 \`MCP_SERVER_WASM_IMAGE_URL\` \u73AF\u5883\u53D8\u91CF\u3002

### Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

#### 1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E

\`\`\`bash
helm get values higress -n higress-system > values.yaml
\`\`\`

#### 2. \u4FEE\u6539\u914D\u7F6E

\u6DFB\u52A0\u4EE5\u4E0B\u914D\u7F6E\uFF1A

\`\`\`yaml
higress-core:
  controller:
    env:
      MCP_SERVER_WASM_IMAGE_URL: your-mcp-server-image-url 
\`\`\`

#### 3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72

\`\`\`bash
# \${higress_version} \u4E3A\u5F53\u524D\u90E8\u7F72\u7684 Higress \u7248\u672C\uFF0C\u4F8B\u5982 v2.1.3
helm upgrade higress --version \${higress_version} -n higress-system higress.io/higress -f values.yaml
\`\`\`

### Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u76F4\u63A5\u4FEE\u6539 \`compose/env/controller.env\` \u6587\u4EF6\uFF0C\u6DFB\u52A0\u5BF9\u5E94\u7684\u73AF\u5883\u53D8\u91CF\u5373\u53EF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`$$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

**\u4F8B 1\uFF1A**

\`\`\`bash
MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
\`\`\`

**\u4F8B 2\uFF1A**

\`\`\`bash
MCP_SERVER_WASM_IMAGE_URL=oci://hub.example.com/wasm-plugins/mcp-server:0.0.1
\`\`\`

### Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5

\u5728\u542F\u52A8\u5BB9\u5668\u7684 docker \u547D\u4EE4\u4E2D\u6DFB\u52A0 \`-e\` \u53C2\u6570\u6765\u6307\u5B9A\u73AF\u5883\u53D8\u91CF\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u73AF\u5883\u53D8\u91CF\u53D6\u503C\u4E2D\u7684 \`$\` \u5B57\u7B26\u9700\u8981\u8F6C\u4E49\u6210 \`\\$\`\uFF0C\u5426\u5219\u5C06\u65E0\u6CD5\u6B63\u5E38\u751F\u6548\uFF0C\u4F8B\u5982\uFF1A

**\u4F8B 1\uFF1A**

\`\`\`bash
-e MCP_SERVER_WASM_IMAGE_URL=http://192.168.1.1:8080/plugins/mcp-server.wasm
\`\`\`

**\u4F8B 2\uFF1A**

\`\`\`bash
-e MCP_SERVER_WASM_IMAGE_URL=oci://hub.example.com/wasm-plugins/mcp-server:0.0.1
\`\`\``},t=function(){return s},o=function(){return[{depth:2,slug:"\u73AF\u5883\u8981\u6C42",text:"\u73AF\u5883\u8981\u6C42"},{depth:2,slug:"\u4E00\u822C\u7528\u6237\u63D2\u4EF6\u7684\u914D\u7F6E\u65B9\u6CD5",text:"\u4E00\u822C\u7528\u6237\u63D2\u4EF6\u7684\u914D\u7F6E\u65B9\u6CD5"},{depth:3,slug:"helm-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5",text:"Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5"},{depth:4,slug:"1-\u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E",text:"1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E"},{depth:4,slug:"2-\u4FEE\u6539\u914D\u7F6E",text:"2. \u4FEE\u6539\u914D\u7F6E"},{depth:4,slug:"3-\u66F4\u65B0\u5F53\u524D\u90E8\u7F72",text:"3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72"},{depth:3,slug:"docker-compose-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5",text:"Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5"},{depth:3,slug:"docker-all-in-one-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5",text:"Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5"},{depth:3,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879"},{depth:2,slug:"\u5BF9\u63A5-nacos-3x-\u6240\u751F\u6210\u7684-mcp-server-\u63D2\u4EF6\u5730\u5740\u914D\u7F6E",text:"\u5BF9\u63A5 Nacos 3.x \u6240\u751F\u6210\u7684 MCP Server \u63D2\u4EF6\u5730\u5740\u914D\u7F6E"},{depth:3,slug:"helm-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5-1",text:"Helm \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5"},{depth:4,slug:"1-\u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E-1",text:"1. \u5BFC\u51FA\u5F53\u524D\u90E8\u7F72\u914D\u7F6E"},{depth:4,slug:"2-\u4FEE\u6539\u914D\u7F6E-1",text:"2. \u4FEE\u6539\u914D\u7F6E"},{depth:4,slug:"3-\u66F4\u65B0\u5F53\u524D\u90E8\u7F72-1",text:"3. \u66F4\u65B0\u5F53\u524D\u90E8\u7F72"},{depth:3,slug:"docker-compose-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5-1",text:"Docker Compose \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5"},{depth:3,slug:"docker-all-in-one-\u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5-1",text:"Docker All-in-One \u90E8\u7F72\u65B9\u5F0F\u914D\u7F6E\u65B9\u6CD5"}]},e=d((u,y,h)=>{const{layout:M,...p}=n;return p.file=a,p.url=i,r`${E()}${v(s)}`})});export{e as Content,g as __tla,t as compiledContent,e as default,a as file,n as frontmatter,o as getHeadings,l as rawContent,i as url};
