const t="latest/en/ops/how-tos/load-wasm-with-http.md",e="docs",o="latest/en/ops/how-tos/load-wasm-with-http",s=`
# Load Wasm plugins with HTTP/HTTPS protocol

## File Requirement

Considering convenience, it is recommended that the target URL point directly to the Wasm file.

## HTTP Protocol

Just set the URL directly. But the URL must be accessible inside the gateway container. You can test it using the \`curl\` command.

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS Protocol

The configuration is similar with HTTP protocol. But if the server uses an untrusted certificate, for example, a self-signed certificate, you need to add the following environment variable to the gateway container, to make it trust all the server-returned HTTPS certificates.

\`\`\`bash
WASM_INSECURE_REGISTRIES=*
\`\`\`
`,i={title:"Load Wasm plugins with HTTP/HTTPS protocol",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","wasm","plugin","http","https"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/load-wasm-with-http.md",rawData:void 0};export{a as _internal,s as body,e as collection,i as data,t as id,o as slug};
