const e="latest/en/dev/code.md",o="docs",t="latest/en/dev/code",i=`
# Code Reading Guide

If you want to contribute code to Higress, please refer to the [Contribution Guide](../developers/guide_dev.md)

Code directory structure explanation:

- cmd: Command-line parameter parsing and processing code

- pkg/ingress: Code related to converting Ingress resources to Istio resources

- pkg/bootstrap: Code for starting gRPC/xDS/HTTP servers, etc.

- registry: Code implementing service discovery with various service registries

- envoy: Envoy repository commit dependency

- istio: Istio repository commit dependency

- plugins: Higress plugin SDK and official built-in plugin code

- script: Compilation-related scripts

- docker: Docker image building scripts

During compilation, \`make prebuild\` will be executed automatically, generating an \`external\` directory containing the envoy and istio dependencies that will be used.

If you want to modify envoy and istio code, you can modify it directly in the external directory, rename it, then execute prebuild, and afterward compare to generate patch files, for example:

\`\`\`bash
mv external/envoy external/envoy_new
make prebuild
cd external
diff -Naur envoy envoy_new > envoy.patch
\`\`\`

After testing is complete, you can patch the corresponding patch files to the envoy or istio repository for submission.

First fork Higress's [envoy](https://github.com/higress-group/envoy) or [istio](https://github.com/higress-group/istio) repository, then push your changes and submit a PR, for example:

\`\`\`bash
git clone https://github.com/<your-fork>/envoy.git
cd envoy
git checkout -b <Your branch name>
patch -p1 < envoy.patch
git add -u
git commit -m <Your change info>
git push origin <Your branch name>
\`\`\`
`,r={title:"Code Reading Guide",description:"Higress Code Reading Guide.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","coding"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/code.md",rawData:void 0};export{n as _internal,i as body,o as collection,r as data,e as id,t as slug};
