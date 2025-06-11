const e="latest/en/dev/architecture.md",t="docs",o="latest/en/dev/architecture",i=`
# Component Compilation Instructions

## Higress Controller

The Higress controller is a control plane that connects to Istio to generate Istio API objects and sends them to Istio using the xDS protocol.

To compile the binary that can run in the local environment, execute \`make build\` in the higress repository directory.

If you need to compile the Docker image, please execute \`make docker-build\`. The Istio pilot image used by Higress Controller is compiled using \`make build-istio-local\`.

### Tips for beginners:

If you encounter failures when cloning subprojects using HTTPS on a Linux server, such as connection timeouts causing dependency download errors, you can try modifying the submodule configuration to use SSH and configure GOPROXY:

\`\`\`bash
# Prerequisite: you have already configured your local public key in GitHub
# Change HTTPS method to SSH method
sed -i 's|https://github.com/|git@github.com:|g' .gitmodules
# Synchronize the configuration in .git/config
git submodule sync
# Modify the GOPROXY configuration in Makefile.core.mk
#export GOPROXY ?= https://proxy.golang.org,direct
export GOPROXY ?= https://goproxy.cn,direct
\`\`\`

Additionally, when developing on Windows, to facilitate code development, you can execute the following steps to complete the dependency configuration:

\`\`\`bash
# If you cannot clone submodules using HTTPS, modify the .gitmodules configuration as above and execute git submodule sync
# Initialize submodules (if you find that some submodules are not cloned when executing this command, you can add --force):
git submodule update --init
# Using the Git Bash tool, go to the tools/hack directory and execute the following command to complete dependency loading:
bash -x prebuild.sh
\`\`\`

## Higress Gateway

The Higress gateway is a data plane program that implements gateway routing and forwarding capabilities.

### Quick Build

Applicable scenario: When you haven't modified the Envoy core, meaning there's no need to recompile the Envoy binary.

Build steps:
1. Navigate to the higress repository directory in the command line;
2. Execute the \`make build-gateway-local\` command to build the Higress Gateway image;
3. After the build is complete, the image tag will be displayed.

### Full Build

Applicable scenario: When you need to recompile the Envoy core.

Build steps:
1. Navigate to the higress repository directory in the command line;
2. Execute the \`make build-envoy\` command to build the Envoy core;
3. After the build is complete, the generated Envoy artifact file (a tar.gz compressed package) will be placed in the \`external/package\` subdirectory of the higress repository;
4. Upload the tar.gz file to OSS or another file download server, making sure the filename ends with the architecture name, for example, \`envoy-amd64.tar.gz\` or \`envoy-arm64.tar.gz\`;
5. Set the environment variable \`ENVOY_PACKAGE_URL_PATTERN\` to the download URL of the Envoy artifact file, and follow the steps in the Quick Build section above to build the Higress Gateway image.`,n={title:"Component Compilation Instructions",description:"Higress Component Compilation Instructions.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","architecture"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/architecture.md",rawData:void 0};export{a as _internal,i as body,t as collection,n as data,e as id,o as slug};
