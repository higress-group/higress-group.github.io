import{c as d,__tla as r}from"./astro-component.CXlaF79K.js";import{r as p,m as u,u as g,__tla as f}from"./constant.CwnOaDOB.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let s,o,a,i,l,c,n,m=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="configure-through-the-higress-console">Configure through the Higress console</h2>
<p>The Higress console provides 3 entries for plug-in configuration:</p>
<ol>
<li>Global configuration: plug-in market -> select plug-in to configure</li>
<li>Domain-level configuration: domain name management->select domain name->click policy->select plug-in to configure</li>
<li>Routing-level configuration: Routing configuration->select routing->click policy->select plug-in to configure</li>
</ol>
<p>The effective priority of these three configurations is: route level > domain name level > global</p>
<p>That is, the global configuration will only take effect for requests that do not match a specific route or domain name</p>
<p>For general plugins, including custom plugins, the routing/domain name level configuration fields are exactly the same as the global configuration fields;</p>
<p>For authentication plug-ins (Key authentication, HMAC authentication, Basic authentication, JWT authentication, etc.), it is different. The global configuration only configures the Consumer credential and whether to enable global authentication, and configures the allowed access through the <code dir="auto">allow</code> field at the routing/domain name level. Consumer list, for details, please refer to <a href="../authentication/key-auth/" referrerpolicy="unsafe-url">Configuration Instructions</a> of Key Authentication</p>
<h2 id="configuration-via-higress-wasmplugin-crd">Configuration via Higress WasmPlugin CRD</h2>
<p>The Higress WasmPlugin CRD extends the Istio <a href="https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WasmPlugin</a> CRD, adding the following configuration fields:</p>























<table><thead><tr><th>Field Name</th><th>Data Type</th><th>Filling Requirements</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">defaultConfig</code></td><td>object</td><td>Optional</td><td>The default configuration of the plugin, which takes effect globally for requests that do not match specific domain names and routing configurations</td></tr><tr><td><code dir="auto">matchRules</code></td><td>array of object</td><td>optional</td><td>configurations that match domain names or routes to take effect</td></tr></tbody></table>
<p>Description of configuration fields for each item in <code dir="auto">matchRules</code>:</p>

































<table><thead><tr><th>Field Name</th><th>Data Type</th><th>Filling Requirements</th><th>Configuration Example</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">ingress</code></td><td>array of string</td><td>one of <code dir="auto">ingress</code> and <code dir="auto">domain</code> is required</td><td>[\u201Cdefault/foo\u201D,\u201Cdefault/bar\u201D]</td><td>Matching ingress resource object, the matching format is: <code dir="auto">namespace/ingress name</code></td></tr><tr><td><code dir="auto">domain</code></td><td>array of string</td><td>one of <code dir="auto">ingress</code> and <code dir="auto">domain</code> is required</td><td>[\u201Cexample.com\u201D,\u201C*.test.com\u201D]</td><td>match domain name, support generic domain name</td></tr><tr><td><code dir="auto">config</code></td><td>object</td><td>optional</td><td>-</td><td>plug-in configuration that takes effect after matching</td></tr></tbody></table>
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
<p>Currently, the stable version for all plugins is 1.0.0, while the latest development version is tagged as <code dir="auto">latest</code>. To consistently use the stable version, you may pin the image tag to a specific version. To leverage the newest capabilities of the plugins, set the image tag to <code dir="auto">latest</code>, which will automatically pull the newest version of the plugin whenever there are configuration updates available.</p>`,i={title:"Introduction to the use of Wasm plugins",keywords:["higress","wasm"],description:"Introduction to the Higress Wasm plugin"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/intro.md",n=void 0,c=function(){return`
## Configure through the Higress console

The Higress console provides 3 entries for plug-in configuration:

1. Global configuration: plug-in market -> select plug-in to configure
2. Domain-level configuration: domain name management->select domain name->click policy->select plug-in to configure
3. Routing-level configuration: Routing configuration->select routing->click policy->select plug-in to configure

The effective priority of these three configurations is: route level > domain name level > global

That is, the global configuration will only take effect for requests that do not match a specific route or domain name

For general plugins, including custom plugins, the routing/domain name level configuration fields are exactly the same as the global configuration fields;

For authentication plug-ins (Key authentication, HMAC authentication, Basic authentication, JWT authentication, etc.), it is different. The global configuration only configures the Consumer credential and whether to enable global authentication, and configures the allowed access through the \`allow\` field at the routing/domain name level. Consumer list, for details, please refer to [Configuration Instructions](./authentication/key-auth.md) of Key Authentication

## Configuration via Higress WasmPlugin CRD

The Higress WasmPlugin CRD extends the Istio [WasmPlugin](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin) CRD, adding the following configuration fields:

| Field Name | Data Type | Filling Requirements | Description |
| ------- | ------- | -------- | --- |
| \`defaultConfig\` | object | Optional | The default configuration of the plugin, which takes effect globally for requests that do not match specific domain names and routing configurations |
| \`matchRules\` | array of object | optional | configurations that match domain names or routes to take effect |

Description of configuration fields for each item in \`matchRules\`:

| Field Name | Data Type | Filling Requirements | Configuration Example |Description |
| ------- | ------- | -------- | --- |--- |
| \`ingress\` | array of string | one of \`ingress\` and \`domain\` is required | ["default/foo","default/bar"] | Matching ingress resource object, the matching format is: \`namespace/ingress name\` |
| \`domain\` | array of string | one of \`ingress\` and \`domain\` is required | ["example.com","*.test.com"] | match domain name, support generic domain name |
| \`config\` | object | optional | - | plug-in configuration that takes effect after matching |

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
`},o=function(){return e},l=function(){return[{depth:2,slug:"configure-through-the-higress-console",text:"Configure through the Higress console"},{depth:2,slug:"configuration-via-higress-wasmplugin-crd",text:"Configuration via Higress WasmPlugin CRD"}]},s=d((v,y,E)=>{const{layout:b,...t}=i;return t.file=a,t.url=n,p`${u()}${g(e)}`})});export{s as Content,m as __tla,o as compiledContent,s as default,a as file,i as frontmatter,l as getHeadings,c as rawContent,n as url};
