const e="latest/en/plugins/authentication/opa.md",i="docs",t="latest/en/plugins/authentication/opa",o=`## Function Description
This plugin implements \`OPA\` policy control.

## Running Attributes
Plugin Execution Phase: \`Authentication Phase\`  
Plugin Execution Priority: \`225\`

## Configuration Fields
| Field            | Data Type   | Required | Default Value | Description                                   |
|------------------|-------------|----------|---------------|-----------------------------------------------|
| policy           | string      | Required | -             | OPA Policy                                    |
| timeout          | string      | Required | -             | Timeout setting for access                    |
| serviceSource    | string      | Required | -             | k8s, nacos, ip, route                         |
| host             | string      | Optional | -             | Service host (required if serviceSource is \`ip\`) |
| serviceName      | string      | Optional | -             | Service name (required if serviceSource is \`k8s,nacos,ip\`) |
| servicePort      | string      | Optional | -             | Service port (required if serviceSource is \`k8s,nacos,ip\`) |
| namespace        | string      | Optional | -             | Namespace (required if serviceSource is \`k8s,nacos\`) |

## Configuration Example
\`\`\`yaml
serviceSource: k8s
serviceName: opa
servicePort: 8181
namespace: higress-backend
policy: example1
timeout: 5s
\`\`\`

## OPA Service Installation Reference
### Start OPA Service
\`\`\`shell
docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s
\`\`\`

### Create OPA Policy
\`\`\`shell
curl -X PUT '127.0.0.1:8181/v1/policies/example1' \\
  -H 'Content-Type: text/plain' \\
  -d 'package example1
import input.request
default allow = false
allow {
    # HTTP method must GET
    request.method == "GET"
}'
\`\`\`

### Query Policy
\`\`\`shell
curl -X POST '127.0.0.1:8181/v1/data/example1/allow' \\
  -H 'Content-Type: application/json' \\
  -d '{"input":{"request":{"method":"GET"}}}'
\`\`\`
`,r={title:"OPA",description:"OPA policy control plugin configuration reference",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","opa"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/authentication/opa.md",rawData:void 0};export{n as _internal,o as body,i as collection,r as data,e as id,t as slug};
