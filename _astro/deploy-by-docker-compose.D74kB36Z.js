const e="latest/en/ops/deploy-by-docker-compose.md",o="docs",s="latest/en/ops/deploy-by-docker-compose",t=`
# Standalone Deployment with Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With it, we can use YAML files to deploy Higress gateway standalone without a K8s cluster.

> **Note**
> 
> The Standalone mode has not been extensively used in large-scale production environments. It is currently mainly used for local deployment and testing scenarios. For production deployments, the [Cloud-Native mode](https://higress.io/en/docs/ops/deploy-by-helm) is more recommended.

## Installing Higress

When deploying with Docker Compose, the Higress gateway consists of the following services:
- apiserver: Infrastructure service. Responsible for simulating the K8s API Server.
- controller: Control plane service one. Responsible for collecting and integrating all configuration data and service lists.
- pilot: Control plane service two. Responsible for distributing gateway routing data.
- gateway: Data plane service. Responsible for handling actual gateway requests.
- console: Higress gateway control console.

### Installation Command

\`\`\`shell
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- [DESTINATION] [OPTIONS...]
\`\`\`

### Installation Parameters

|**Parameter Name**                                        |**Description**                                                                                                        |**Default Value**|  
|--------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|--------------|  
|DESTINATION                                             |Target installation directory                                                                                  |./higress     |  
|-a<br/>--auto-run                                          |Automatically start Higress gateway after configuration                                                        |None          |  
|-c CONFIG_URL<br/>--config-url CONFIG_URL                  |Configuration service URL.<br/>- For standalone Nacos service (version not lower than 2.0.0), URL format: nacos://192.168.0.1:8848<br/>- For saving configuration on local disk, URL format: file:///opt/higress/conf|None          |  
|--use-builtin-nacos                                     |Use built-in Nacos service. Not recommended for production environments. If this parameter is set, there's no need to set the \`-c\` parameter|None          |  
|--nacos-ns=NACOS_NAMESPACE                              |Nacos namespace ID for storing Higress configuration                                                           |higress-system|  
|--nacos-username=NACOS_USERNAME                         |Username for accessing Nacos. Only used when Nacos has authentication enabled                                  |None          |  
|--nacos-password=NACOS_PASSWORD                         |Password for accessing Nacos. Only used when Nacos has authentication enabled                                  |None          |  
|-k KEY<br/>--data-enc-key=KEY                              |Key for encrypting sensitive configuration data. Must be 32 characters long. If not set, Higress will automatically generate a random key. For cluster deployment, this must be set|Random string  |  
|--nacos-port=NACOS_PORT                                 |Port on which the built-in NACOS service listens locally on the server                                         |8848          |  
|--gateway-http-port=GATEWAY_HTTP_PORT                   |HTTP port on which Higress Gateway listens locally on the server                                               |80            |  
|--gateway-https-port=GATEWAY_HTTPS_PORT                 |HTTPS port on which Higress Gateway listens locally on the server                                              |443           |  
|--gateway-metrics-port=GATEWAY_METRIC_PORT              |Port on which Higress Gateway exposes metrics locally on the server                                            |15020         |  
|--console-port=CONSOLE_PORT                             |Port on which Higress Console listens locally on the server                                                    |8080          |  
|-r<br/>--rerun                                             |Re-execute the configuration process after Higress has been configured                                          |None          |  
|-h<br/>--help                                              |Display help information                                                                                       |None          |`,n={title:"Standalone Deployment with Docker Compose",description:"How to deploy Higress standalone using Docker Compose",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["deploy","docker compose","docker","ops"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/deploy-by-docker-compose.md",rawData:void 0};export{a as _internal,t as body,o as collection,n as data,e as id,s as slug};
