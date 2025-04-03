const e="en/mcp-quick-start.md",r="ai",t="en/mcp-quick-start",s=`
# MCP Server Quick Start

> **Note:** The MCP Server functionality described in this document requires Higress 2.1.0 or higher.

Higress AI Gateway provides unified MCP Server hosting capabilities, helping AI Agents quickly integrate with various data sources. Through MCP Server, AI Agents can easily access databases, REST APIs, and other external services without concerning themselves with specific connection details. Database integration is a built-in capability of the gateway, while any external REST API can be transformed into an MCP Server through simple configuration. This guide will demonstrate the configuration process using PostgreSQL database and a simple REST API as examples.

## Prerequisites

Before using MCP Server, you need to deploy Higress first. You can refer to the [Higress Quick Start Guide](https://higress.cn/docs/latest/user/quickstart) for deployment instructions. When installing Higress, make sure to add the following parameter to your Helm command:

\`\`\`bash
helm install higress -n higress-system [...other parameters...] --set global.enableRedis=true
\`\`\`

MCP Server requires Redis service for data caching. After enabling it, you can check the Redis service address using the following command:

\`\`\`bash
kubectl get svc redis-stack-server -n higress-system -o wide
\`\`\`

## Configuring MCP Server

### ConfigMap Global Parameter Configuration

Configure MCP Server-related global parameters in the ConfigMap:

\`\`\`bash
kubectl edit configmap higress-config -n higress-system
\`\`\`

Configure Redis connection information and MCP Server routing rules:

\`\`\`yaml
mcpServer:
  sse_path_suffix: /sse  # Path suffix for SSE connections
  enable: true          # Enable MCP Server
  redis:
    address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis service address
    username: # Redis username (optional)
    password: # Redis password (optional)
    db: # Redis database (optional)
  match_list:          # MCP Server routing rules
    - match_rule_domain: "*"
      match_rule_path: /postgres
      match_rule_type: "prefix"
    - match_rule_domain: "*"
      match_rule_path: /user
      match_rule_type: "prefix"
  serves: 
\`\`\`

> **Note:** Database-type MCP Servers are configured in the Config Map, while REST API type configurations are done in the Higress console.

### Configuring PostgreSQL MCP Server

Configure PostgreSQL MCP Server in the Config Map:

\`\`\`yaml
servers:
  - name: postgres      # MCP Server name
    path: /postgres     # Access path, must match the configuration in match_list
    type: database      # Type is database
    config:
      dsn: "your postgres database connect dsn" # Database connection string
      dbType: "postgres"                        # Database type
\`\`\`

For database connection string format, please refer to the [gorm documentation](https://gorm.io/docs/connecting_to_the_database.html).

### Configuring REST API MCP Server

Any REST API can be quickly transformed into an MCP Server through the following steps:

#### 1. Add Service Source

Add the target REST API's service source in the Higress console. This example uses \`randomuser.me\` as the service source:

![Add Service Source](https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg)

#### 2. Configure Route

Add a route in the Higress console and point it to the corresponding service source:

![Configure Route](https://gw.alicdn.com/imgextra/i2/O1CN01AvGOMg1ysswRGHvuM_!!6000000006635-0-tps-2528-624.jpg)

#### 3. Configure MCP Server Plugin

Add and configure the MCP Server plugin for the created route:

![Configure MCP Server Plugin](https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg)

Plugin configuration example:

\`\`\`yaml
server:
  allowTools:
  - "get-user"
  name: "random-user-server"
tools:
- description: "Get random user information"
  name: "get-user"
  requestTemplate:
    method: "GET"
    url: "https://randomuser.me/api/"
  responseTemplate:
    body: |-
      # User Information
      {{- with (index .results 0) }}
      - **Name**: {{.name.first}} {{.name.last}}
      - **Email**: {{.email}}
      - **Location**: {{.location.city}}, {{.location.country}}
      - **Phone**: {{.phone}}
      {{- end }}
\`\`\`

For more detailed information about configuring REST API to MCP Server, please refer to the [MCP Server Plugin Configuration Reference](../en/mcp-server.md).

> **Note:** For the 2025-03-26 [MCP streamable HTTP](https://spec.modelcontextprotocol.io/specification/2025-03-26/) protocol, ConfigMap configuration is not required.

## Using MCP Server

Configure the MCP Server SSE connection in your AI Agent. Taking cursor as an example:

* For database-type MCP Server: use the path + sse_path_suffix configured in ConfigMap
* For REST API type MCP Server: use the route path + sse_path_suffix configured in the console

\`\`\`yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "rest-api": {
    "url": "http://your-higress-address/user/sse"
  }
}
\`\`\`

Cursor configuration complete:

![Cursor Configuration Complete](https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg)

Through MCP Server, you can quickly add various data source support for AI Agents, improving development efficiency. Any REST API can be transformed into an MCP Server through simple configuration, without writing additional code.

> If you encounter any issues while using MCP Server, please leave your information in [Higress Github Issue](https://github.com/alibaba/higress/issues).
> 
> If you are interested in future updates of Higress or would like to provide feedback, welcome to Star [Higress Github Repo](https://github.com/alibaba/higress/).`,i={title:"MCP Server Quick Start",description:"MCP Server Quick Start Guide",keywords:["MCP Server"],date:"2025-04-03",category:"article"},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/mcp-quick-start.md",rawData:void 0};export{o as _internal,s as body,r as collection,i as data,e as id,t as slug};
