const e="latest/en/plugins/intro.md",i="docs",t="latest/en/plugins/intro",o=`
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
`,a={title:"Plugin Usage Guide",description:"Higress Wasm Plugin Usage Guide",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","wasm"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/intro.md",rawData:void 0};export{n as _internal,o as body,i as collection,a as data,e as id,t as slug};
