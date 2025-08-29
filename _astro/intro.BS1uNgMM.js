import{c as r,__tla as d}from"./astro-component.B3fYMMDi.js";import{r as p,m as u,u as g,__tla as f}from"./constant.B9AWHwfy.js";import{__tla as h}from"./astro/assets-service.DmDXK_Mj.js";let s,o,a,i,l,c,n,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="configuration-through-the-higress-console">Configuration through the Higress Console</h2>
<p>The Higress console provides 3 entry points for plugin configuration:</p>
<ol>
<li>Global configuration: Plugin Market -> Select plugin to configure</li>
<li>Domain-level configuration: Domain Management -> Select domain -> Click Policies -> Select plugin to configure</li>
<li>Route-level configuration: Route Configuration -> Select route -> Click Policies -> Select plugin to configure</li>
</ol>
<p>The priority order of these three configurations is: Route-level > Domain-level > Global</p>
<p>This means that global configurations only take effect for requests that don\u2019t match any specific route or domain.</p>
<p>For general plugins, including custom plugins, the route/domain-level configuration fields are identical to the global configuration fields.</p>
<p>For authentication plugins (Key Auth, HMAC Auth, Basic Auth, JWT Auth, etc.), the approach is different. Global configuration only handles Consumer credential configuration and whether to enable global authentication, while at the route/domain level, the <code dir="auto">allow</code> field configures the list of Consumers permitted to access. For details, please refer to the <a href="../authentication/key-auth/" referrerpolicy="unsafe-url">Key Authentication configuration guide</a>.</p>
<h2 id="configuration-via-higress-wasmplugin-crd">Configuration via Higress WasmPlugin CRD</h2>
<p>The Higress WasmPlugin CRD extends the Istio <a href="https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WasmPlugin</a> CRD, adding the following configuration fields:</p>























<table><thead><tr><th>Field Name</th><th>Data Type</th><th>Filling Requirements</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">defaultConfig</code></td><td>object</td><td>Optional</td><td>The default configuration of the plugin, which takes effect globally for requests that do not match specific domain names and routing configurations</td></tr><tr><td><code dir="auto">matchRules</code></td><td>array of object</td><td>Optional</td><td>Configurations that match domain names or routes to take effect</td></tr></tbody></table>
<p>Description of configuration fields for each item in <code dir="auto">matchRules</code>:</p>

































<table><thead><tr><th>Field Name</th><th>Data Type</th><th>Filling Requirements</th><th>Configuration Example</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">ingress</code></td><td>array of string</td><td>One of <code dir="auto">ingress</code> and <code dir="auto">domain</code> is required</td><td>[\u201Cdefault/foo\u201D,\u201Cdefault/bar\u201D]</td><td>Matching ingress resource object, the matching format is: <code dir="auto">namespace/ingress name</code></td></tr><tr><td><code dir="auto">domain</code></td><td>array of string</td><td>One of <code dir="auto">ingress</code> and <code dir="auto">domain</code> is required</td><td>[\u201Cexample.com\u201D,\u201C*.test.com\u201D]</td><td>Match domain name, supports wildcard domains</td></tr><tr><td><code dir="auto">config</code></td><td>object</td><td>Optional</td><td>-</td><td>Plugin configuration that takes effect after matching</td></tr></tbody></table>
<p>Take the <a href="../traffic/request-block/" referrerpolicy="unsafe-url">Request Blocking</a> plugin as an example, if you want the following configuration of the plugin to take effect globally (please refer to the <a href="../traffic/request-block/" referrerpolicy="unsafe-url">Request Blocking</a> document for configuration field descriptions):</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_urls:\x7F- swagger.html\x7F- foo=bar\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>Then the corresponding WasmPlugin needs to be configured as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F   name: request-block\x7F   namespace: higress-system\x7Fspec:\x7F   defaultConfig:\x7F     block_urls:\x7F     - swagger.html\x7F     - foo=bar\x7F     case_sensitive: false\x7F   url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0"><div></div></button></div></figure></div>
<p>The following requests will be blocked immediately after configuration:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com?foo=Bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/foo/Swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com?foo=Bar\x7Fcurl http://exmaple.com/foo/Swagger.html"><div></div></button></div></figure></div>
<p>If you want to apply the following configuration to the Ingress named foo under the default namespace (matching requests whose path prefix is <code dir="auto">/foo</code>):</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_headers:\x7F- example-key\x7F- example-value"><div></div></button></div></figure></div>
<p>Then the corresponding WasmPlugin needs to be configured as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Route-level effective configuration</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">   </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">     </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># The ingress named foo under the default namespace will execute the following configuration</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">       </span><span style="--0:#85E89D">block_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">       </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-value</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F   name: request-block\x7F   namespace: higress-system\x7Fspec:\x7F   defaultConfig:\x7F     block_urls:\x7F     - swagger.html\x7F     - foo=bar\x7F     case_sensitive: false\x7F   matchRules:\x7F    # Route-level effective configuration\x7F   - ingress:\x7F     - default/foo\x7F      # The ingress named foo under the default namespace will execute the following configuration\x7F     config:\x7F       block_headers:\x7F       - example-key\x7F       - example-value\x7F   url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0"><div></div></button></div></figure></div>
<p>After configuration, the following request will not match a specific ingress, so it still hits the global default configuration and is denied access:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com?foo=Bar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com?foo=Bar"><div></div></button></div></figure></div>
<p>Since the following request matches the Ingress of foo, the routing-level configuration is not affected by the default configuration and will not be denied access:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/foo/Swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://exmaple.com/foo/Swagger.html"><div></div></button></div></figure></div>
<p>Because the route-level configuration blocks requests with <code dir="auto">example-key</code> characters in the request header, the following request will be denied access:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'exmaple-key: 123'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://exmaple.com/foo -H &#x27;exmaple-key: 123&#x27;"><div></div></button></div></figure></div>
<p>When there are multiple rules in <code dir="auto">matchRules</code>, they will be matched according to the order of the rules. It is recommended to place the ingress matching configuration before the domain matching, which is also the practice of the Higress console</p>
<p>Enable plugins via UI interaction using the Higress console, without needing to concern yourself with the OCI image address here. If configuring via YAML in a non-interactive environment, the OCI image addresses for all official plugins can be found at:</p>
<p><a href="https://github.com/higress-group/higress-console/blob/main/backend/sdk/src/main/resources/plugins/plugins.properties" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/higress-console/blob/main/backend/sdk/src/main/resources/plugins/plugins.properties</a></p>
<p>Currently, the stable version for all plugins is 1.0.0, while the latest development version is tagged as <code dir="auto">latest</code>. To consistently use the stable version, you may pin the image tag to a specific version. To leverage the newest capabilities of the plugins, set the image tag to <code dir="auto">latest</code>, which will automatically pull the newest version of the plugin whenever there are configuration updates available.</p>
<h2 id="wasm-plugin-principles-introduction">Wasm Plugin Principles Introduction</h2>
<p>Please check the e-book: <a href="https://higress.cn/docs/ebook/wasm19/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u201CWasm Plugin Development\u201D</a></p>`,i={title:"Plugin Usage Guide",keywords:["higress","wasm"],description:"Higress Wasm Plugin Usage Guide"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/intro.md",n=void 0,c=function(){return`
## Configuration through the Higress Console

The Higress console provides 3 entry points for plugin configuration:

1. Global configuration: Plugin Market -> Select plugin to configure
2. Domain-level configuration: Domain Management -> Select domain -> Click Policies -> Select plugin to configure
3. Route-level configuration: Route Configuration -> Select route -> Click Policies -> Select plugin to configure

The priority order of these three configurations is: Route-level > Domain-level > Global

This means that global configurations only take effect for requests that don't match any specific route or domain.

For general plugins, including custom plugins, the route/domain-level configuration fields are identical to the global configuration fields.

For authentication plugins (Key Auth, HMAC Auth, Basic Auth, JWT Auth, etc.), the approach is different. Global configuration only handles Consumer credential configuration and whether to enable global authentication, while at the route/domain level, the \`allow\` field configures the list of Consumers permitted to access. For details, please refer to the [Key Authentication configuration guide](./authentication/key-auth.md).

## Configuration via Higress WasmPlugin CRD

The Higress WasmPlugin CRD extends the Istio [WasmPlugin](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin) CRD, adding the following configuration fields:

| Field Name | Data Type | Filling Requirements | Description |
| ------- | ------- | -------- | --- |
| \`defaultConfig\` | object | Optional | The default configuration of the plugin, which takes effect globally for requests that do not match specific domain names and routing configurations |
| \`matchRules\` | array of object | Optional | Configurations that match domain names or routes to take effect |

Description of configuration fields for each item in \`matchRules\`:

| Field Name | Data Type | Filling Requirements | Configuration Example | Description |
| ------- | ------- | -------- | --- | --- |
| \`ingress\` | array of string | One of \`ingress\` and \`domain\` is required | ["default/foo","default/bar"] | Matching ingress resource object, the matching format is: \`namespace/ingress name\` |
| \`domain\` | array of string | One of \`ingress\` and \`domain\` is required | ["example.com","*.test.com"] | Match domain name, supports wildcard domains |
| \`config\` | object | Optional | - | Plugin configuration that takes effect after matching |

Take the [Request Blocking](./traffic/request-block.md) plugin as an example, if you want the following configuration of the plugin to take effect globally (please refer to the [Request Blocking](./traffic/request-block.md) document for configuration field descriptions):

\`\`\`yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
\`\`\`

Then the corresponding WasmPlugin needs to be configured as follows:

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
   name: request-block
   namespace: higress-system
spec:
   defaultConfig:
     block_urls:
     - swagger.html
     - foo=bar
     case_sensitive: false
   url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0
\`\`\`

The following requests will be blocked immediately after configuration:

\`\`\`bash
curl http://example.com?foo=Bar
curl http://exmaple.com/foo/Swagger.html
\`\`\`

If you want to apply the following configuration to the Ingress named foo under the default namespace (matching requests whose path prefix is \`/foo\`):

\`\`\`yaml
block_headers:
- example-key
- example-value
\`\`\`

Then the corresponding WasmPlugin needs to be configured as follows:

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
   name: request-block
   namespace: higress-system
spec:
   defaultConfig:
     block_urls:
     - swagger.html
     - foo=bar
     case_sensitive: false
   matchRules:
    # Route-level effective configuration
   - ingress:
     - default/foo
      # The ingress named foo under the default namespace will execute the following configuration
     config:
       block_headers:
       - example-key
       - example-value
   url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0
\`\`\`

After configuration, the following request will not match a specific ingress, so it still hits the global default configuration and is denied access:

\`\`\`bash
curl http://example.com?foo=Bar
\`\`\`

Since the following request matches the Ingress of foo, the routing-level configuration is not affected by the default configuration and will not be denied access:

\`\`\`bash
curl http://exmaple.com/foo/Swagger.html
\`\`\`

Because the route-level configuration blocks requests with \`example-key\` characters in the request header, the following request will be denied access:

\`\`\`bash
curl http://exmaple.com/foo -H 'exmaple-key: 123'
\`\`\`

When there are multiple rules in \`matchRules\`, they will be matched according to the order of the rules. It is recommended to place the ingress matching configuration before the domain matching, which is also the practice of the Higress console

Enable plugins via UI interaction using the Higress console, without needing to concern yourself with the OCI image address here. If configuring via YAML in a non-interactive environment, the OCI image addresses for all official plugins can be found at:

https://github.com/higress-group/higress-console/blob/main/backend/sdk/src/main/resources/plugins/plugins.properties

Currently, the stable version for all plugins is 1.0.0, while the latest development version is tagged as \`latest\`. To consistently use the stable version, you may pin the image tag to a specific version. To leverage the newest capabilities of the plugins, set the image tag to \`latest\`, which will automatically pull the newest version of the plugin whenever there are configuration updates available.

## Wasm Plugin Principles Introduction

Please check the e-book: ["Wasm Plugin Development"](https://higress.cn/docs/ebook/wasm19/)
`},o=function(){return e},l=function(){return[{depth:2,slug:"configuration-through-the-higress-console",text:"Configuration through the Higress Console"},{depth:2,slug:"configuration-via-higress-wasmplugin-crd",text:"Configuration via Higress WasmPlugin CRD"},{depth:2,slug:"wasm-plugin-principles-introduction",text:"Wasm Plugin Principles Introduction"}]},s=r((v,y,E)=>{const{layout:b,...t}=i;return t.file=a,t.url=n,p`${u()}${g(e)}`})});export{s as Content,m as __tla,o as compiledContent,s as default,a as file,i as frontmatter,l as getHeadings,c as rawContent,n as url};
