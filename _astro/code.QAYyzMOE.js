const e="latest/en/dev/code.md",i="docs",t="latest/en/dev/code",n=`
# Code Reading Instructions

If you would like to constribute source code for Higress, please check out the [Contribute Guide](../developers/guide_dev.md)

Code base structure descriptions:

- cmd: Containing functions of parsing command-line arguments, etc.

- pkg/ingress: Containing functions of converting Ingress resources to Istio resources.

- pkg/bootstrap: Containing functions of starting gRPC/xDS/HTTP servers.

- registry: Implementations of various service registries.

- envoy: Containing the referred official envoy codebase and corresponding patches.

- istio: Containing the referred official istio codebase and corresponding patches.

- plugins: Higress plugin SDK and official built-in plugins.

- tools: Building related scripts.

- docker: Docker image building related scripts.

During compilation, \`make prebuild\` will be executed automatically, generating an \`external\` folder, which contains all the external dependencies, including envoy and istios, with all the patches applied.

If you would like to modify the source code of envoy or istio, you can do it directly in the \`external\` folder, then execute the prebuild command and generate the patch file with diff later. For example:

\`\`\`bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > ../envoy/1.20/patches/envoy/$(date +%Y%m%d)-what-changed.patch
\`\`\`

Please be aware that patches will be applied in the order of file names. So please use timestamp as a prefix when naming a new patch file.
`,o={title:"Code Reading Instructions",description:"Higress Code Reading Instructions",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","coding"]},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/code.md",rawData:void 0};export{s as _internal,n as body,i as collection,o as data,e as id,t as slug};
