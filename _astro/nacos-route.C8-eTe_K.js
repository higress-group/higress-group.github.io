const e="latest/en/user/nacos-route.md",s="docs",o="latest/en/user/nacos-route",r=`
# Configuring Ingress to Forward to Services Registered in Nacos


## Configure Service Source

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    # Define a service source named "production"
  - name: production
    # Registry type is Nacos 2.x, supporting gRPC protocol
    type: nacos2
    # Registry access address, can be domain name or IP
    domain: 192.xxx.xx.32
    # Registry access port, Nacos default is 8848
    port: 8848
    # Nacos namespace ID
    nacosNamespaceId: d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358
    # Nacos service group
    nacosGroups:
    - DEFAULT_GROUP
    # Define a service source named "uat"
  - name: uat
    # Registry type is Nacos 1.x, only supporting HTTP protocol
    type: nacos
    # Registry access address, can be domain name or IP
    domain: 192.xxx.xx.31
    # Registry access port, Nacos default is 8848
    port: 8848
    # Nacos namespace ID
    nacosNamespaceId: 98ac6df3-xxxx-xxxx-xxxx-ab98115dfde4
    # Nacos service group
    nacosGroups:
    - DEFAULT_GROUP
\`\`\`

Through the [McpBridge](./mcp-bridge.md) resource, two service sources are configured, named "production" and "uat". It's important to note that Higress supports both HTTP and gRPC protocols when connecting to Nacos. It is recommended to upgrade Nacos to version 2.x, so that you can specify "nacos2" in the type field of the above configuration to use the gRPC protocol, which allows faster detection of service changes and consumes fewer Nacos server resources.
Based on the registries array configuration in McpBridge, Higress can easily connect to multiple and different types of service sources (Nacos/Zookeeper/Eureka/Consul/...). For Nacos-type service sources, it supports configuring multiple different namespaces, enabling microservices in different namespaces to share a single gateway, reducing the resource cost of self-built microservice gateways.


## Configure Ingress

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: service-provider.DEFAULT-GROUP.d8ac64f3-xxxx-xxxx-xxxx-47a814ecf358.nacos
  name: demo
  namespace: default
spec:
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
\`\`\`

Unlike common Ingress configurations that define a service in the backend, here the resource backend of Ingress is associated with the McpBridge that defines the service source above. And the annotation \`higress.io/destination\` specifies the target service for the route.

For services from Nacos, the target service format is: "service-name.service-group.namespace-id.nacos". Note that this needs to follow DNS domain format, so underscores '_' in service groups are converted to hyphens '-'.`,a={title:"Configuring Ingress to Forward to Services Registered in Nacos",description:"Configuring Ingress to Forward to Services Registered in Nacos",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ingress","higress nacos"]},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/nacos-route.md",rawData:void 0};export{t as _internal,r as body,s as collection,a as data,e as id,o as slug};
