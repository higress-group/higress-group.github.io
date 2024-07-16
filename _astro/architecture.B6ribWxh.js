const e="latest/en/dev/architecture.md",t="docs",i="latest/en/dev/architecture",a=`
# Component Compilation Instructions

## Higress Controller

The Higress controller is a control plane that connects to Istio to generate Istio API objects and sends them to Istio using the xDS protocol.

To compile the binary that can run in the local environment, execute \`make build\` in the higress repository directory.

If need to compile the Docker image, please execute \`make docker-build\` .

## Higress Gateway

The Higress gateway is a data plane that implements gateway routing and forwarding capabilities.

### Quick Build

Suitable scenario: Envoy itself isn't modified, meaning there is no need to rebuild the envoy binary.

Steps:
1. Enter the higress repo in the terminal.
2. Execute \`make build-gateway-local\` to start building the image of Higress Gateway.
3. The image tag will be displayed in the terminal after the build finishes.

### Full Build

Suitable scenario: The envoy binary needs to be rebuilt.

Steps:
1. Enter the higress repo in the terminal.
2. Execute \`cd external/proxy; BUILD_WITH_CONTAINER=1 make test_release\` to build the envoy binary.
3. Once the build finishes, the built artifact, envoy.tar.gz, will be placed in the \`external/package\` folder in the higress repo.
4. Rename the \`envoy.tar.gz\` to \`envoy-amd64.tar.gz\` or \`envoy-arm64.tar.gz\`, based on your local architecture.
5. If you want to build a multi-arch image, please re-do step 2 and 3 with another architecture, and copy the renamed built artifact here.
6. Follow the steps mentioned above in the "Quick Build" section to build an Higress Gateway image.`,o={title:"Component Compilation Instructions",description:"Higress Component Compilation Instructions.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","architecture"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/architecture.md",rawData:void 0};export{n as _internal,a as body,t as collection,o as data,e as id,i as slug};
