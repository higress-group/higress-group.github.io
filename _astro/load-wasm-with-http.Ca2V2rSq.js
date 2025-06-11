const t="latest/en/ops/how-tos/load-wasm-with-http.md",e="docs",o="latest/en/ops/how-tos/load-wasm-with-http",i=`
# Loading Wasm Plugins with HTTP/HTTPS Protocol

## File Requirements

For convenience, it is recommended that the target URL points directly to the Wasm file.

## HTTP Protocol

Simply configure the URL directly. However, ensure that the target URL is accessible from within the Gateway container. You can verify this by using the \`curl\` command inside the container.

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS Protocol

The configuration approach is similar to the HTTP protocol. However, if the server uses an untrusted certificate (such as a self-signed certificate), you need to add an environment variable named "WASM_INSECURE_REGISTRIES" to the Gateway container. Set the value to "*" to trust all HTTPS certificates returned by servers.
`,s={title:"Loading Wasm Plugins with HTTP/HTTPS Protocol",description:"How to load Wasm plugins using HTTP/HTTPS protocol",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","wasm","plugin","http","https"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/load-wasm-with-http.md",rawData:void 0};export{a as _internal,i as body,e as collection,s as data,t as id,o as slug};
