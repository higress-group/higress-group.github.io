---
title: MCP Server Quick Start
description: Higress AI Gateway provides unified MCP Server hosting capabilities, helping AI Agents quickly integrate with various data sources. Through MCP Server, AI Agents can easily access databases, REST APIs, and other external services without concerning themselves with specific connection details. 
date: "2025-04-03"
category: "article"
keywords: ["MCP Server"]
authors: "Jingze"
---

# MCP Server Quick Start

> **Note:** The MCP Server functionality described in this document requires Higress 2.1.0 or higher.

Higress AI Gateway provides unified MCP Server hosting capabilities, helping AI Agents quickly integrate with various data sources. Through MCP Server, AI Agents can easily access databases, REST APIs, and other external services without concerning themselves with specific connection details. Database integration is a built-in capability of the gateway, while any external REST API can be transformed into an MCP Server through simple configuration. This guide will demonstrate the configuration process using PostgreSQL database and a simple REST API as examples.

## Prerequisites

Before using MCP Server, you need to deploy Higress first. You can refer to the [Higress Quick Start Guide](https://higress.cn/en/docs/latest/user/quickstart) for deployment instructions. When installing Higress, make sure to add the following parameter to your Helm command:

```bash
helm install higress -n higress-system [...other parameters...] --set global.enableRedis=true
```

MCP Server requires Redis service for data caching. After enabling it, you can check the Redis service address using the following command:

```bash
kubectl get svc redis-stack-server -n higress-system -o wide
```

## Configuring MCP Server

### ConfigMap Global Parameter Configuration

Configure MCP Server-related global parameters in the ConfigMap:

```bash
kubectl edit configmap higress-config -n higress-system
```

Configure Redis connection information and MCP Server routing rules:

```yaml
apiVersion: v1
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # Path suffix for SSE connections
      enable: true          # Enable MCP Server
      redis:
        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis service address
        username: "" # Redis username (optional)
        password: "" # Redis password (optional)
        db: 0 # Redis database (optional)
      match_list:          # MCP Server Session Persistence Routing Rules (When the following paths are matched, they will be recognized as an MCP session, and session persistence will be maintained through mechanisms such as SSE)
        - match_rule_domain: "*"
          match_rule_path: /postgres
          match_rule_type: "prefix"
        - match_rule_domain: "*"
          match_rule_path: /user
          match_rule_type: "prefix"
      servers: []
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
```

> **Note:** Database-type MCP Servers are configured in the Config Map, while REST API type configurations are done in the Higress console.

### Configuring Database MCP Server

Configure Database MCP Server in the Config Map:

```yaml
servers:
  - name: postgres      # MCP Server name
    path: /postgres     # Access path, must match the configuration in match_list
    type: database      # Type is database
    config:
      dsn: "your postgres database connect dsn" # Database connection string
      dbType: "postgres"                        # Database types, currently supported: postgres/mysql/clickhouse/sqlite
```

For database connection string format, please refer to the [gorm documentation](https://gorm.io/docs/connecting_to_the_database.html).

### Configure Nacos MCP Registry
> **Note：**
> Nacos version >= 3.0，Higress version >= 2.1.2

Configure the Nacos MCP registry service source in mcpbridge. For detailed configuration information, see the documentation [Mcp Bridge Configuration](https://higress.cn/en/docs/latest/user/mcp-bridge/?spm=36971b57.35684624.0.0.4b3d7cdcfQgsaa)
```yaml
registries:
- domain: localhost                            # Address of Nacos, either IP address or domain name
  mcpServerBaseUrl: you_custom_url_prefix
  name: you_custom_name
  port: 8848
  type: nacos3
```
Once configured, you can access MCP services registered in Nacos through Higress. The endpoint for access is http://{higresshost}/you_custom_url_prefix/{service name in Nacos MCP Service configuration}/{access path in Nacos MCP service configuration}.

### Configuring REST API MCP Server

Any REST API can be quickly transformed into an MCP Server through the following steps:

#### 1. Add Service Source

Add the target REST API's service source in the Higress console. This example uses `randomuser.me` as the service source:

![Add Service Source](https://github.com/user-attachments/assets/fcd06141-8970-4e9b-8061-f472ba6fa07a)

#### 2. Configure Route

Add a route in the Higress console and point it to the corresponding service source:

![Configure Route](https://github.com/user-attachments/assets/639426c3-3c74-4268-b12f-c0173c1620ab)

#### 3. Configure MCP Server Plugin

**Recommendation: You can use the [OpenAPI to MCP](https://github.com/higress-group/openapi-to-mcpserver) tool to automatically convert API documentation into MCP Server plugin configurations.**

Click the *Strategy* button in the action of the route.

Add and configure the MCP Server plugin for the created route:

![Configure MCP Server Plugin](https://github.com/user-attachments/assets/935dab27-c2f2-46c3-9f5c-702b642ae512)

Plugin configuration example:

```yaml
server:
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
```

For more detailed information about configuring REST API to MCP Server, please refer to the [MCP Server Plugin Configuration Reference](../ai/mcp-server.md).

> **Note:** For the 2025-03-26 [MCP streamable HTTP](https://spec.modelcontextprotocol.io/specification/2025-03-26/) protocol, ConfigMap configuration is not required.

## Using MCP Server

Configure the MCP Server SSE connection in your AI Agent. Taking cursor as an example:

* For database-type MCP Server: use the path + sse_path_suffix configured in ConfigMap
* For REST API type MCP Server: use the route path + sse_path_suffix configured in the console

```yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "rest-api": {
    "url": "http://your-higress-address/user/sse"
  }
}
```

Cursor configuration complete:

![Cursor Configuration Complete](https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg)

Through MCP Server, you can quickly add various data source support for AI Agents, improving development efficiency. Any REST API can be transformed into an MCP Server through simple configuration, without writing additional code.

> If you encounter any issues while using MCP Server, please leave your information in [Higress Github Issue](https://github.com/alibaba/higress/issues).
> 
> If you are interested in future updates of Higress or would like to provide feedback, welcome to Star [Higress Github Repo](https://github.com/alibaba/higress/).
