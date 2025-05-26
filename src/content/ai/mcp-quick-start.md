---
title: MCP Server 快速开始
description: Higress AI 网关提供 MCP Server 统一托管能力，可以帮助 AI Agent 快速对接各类数据源。通过 MCP Server，AI Agent 可以方便地访问数据库、REST API 等外部服务，无需关心具体的连接细节。其中，数据库对接能力是网关内置的能力；而对于 REST API，任何外部 REST API 都可以通过简单的配置转换成 MCP Server
date: "2025-04-03"
category: "article"
keywords: ["MCP Server"]
authors: "静择"
---

# MCP Server 快速开始

> **注意：** 本文档中的 MCP Server 功能需要 Higress 2.1.0 或更高版本。

Higress AI 网关提供 MCP Server 统一托管能力，可以帮助 AI Agent 快速对接各类数据源。通过 MCP Server，AI Agent 可以方便地访问数据库、REST API 等外部服务，无需关心具体的连接细节。其中，数据库对接能力是网关内置的能力；而对于 REST API，任何外部 REST API 都可以通过简单的配置转换成 MCP Server。本文将以 PostgreSQL 数据库和一个简单的 REST API 为例，介绍配置流程。

## 前提条件

在开始使用 MCP Server 之前，需要先部署 Higress。您可以参考 [Higress 快速入门指南](https://higress.cn/docs/latest/user/quickstart) 完成部署。在安装 Higress 时，请确保在 Helm 命令中添加以下参数：

```bash
helm install higress -n higress-system [...其他参数...] --set global.enableRedis=true
```

MCP Server 需要依赖 Redis 服务用于数据缓存，启用后您可以通过以下命令查看 Redis 服务的地址：

```bash
kubectl get svc redis-stack-server -n higress-system -o wide
```

## 配置 MCP Server

### ConfigMap 全局参数配置

在 ConfigMap 中配置 MCP Server 的相关全局参数：

```bash
kubectl edit configmap higress-config -n higress-system
```

配置 Redis 连接信息和 MCP Server 的路由规则：

```yaml
apiVersion: v1
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # SSE 连接的路径后缀
      enable: true          # 启用 MCP Server
      redis:
        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis服务地址
        username: "" # Redis用户名（可选）
        password: "" # Redis密码（可选）
        db: 0 # Redis数据库（可选）
      match_list:          # MCP Server 会话保持路由规则（当匹配下面路径时，将被识别为一个 MCP 会话，通过 SSE 等机制进行会话保持）
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

> **注意：**
>
> 数据库类型的 MCP Server 在 ConfigMap 中配置，REST API 类型在 Higress 控制台配置。

### 配置 Database MCP Server

在 Config Map 中配置 Database MCP Server：

```yaml
servers:
  - name: postgres      # MCP Server 名称
    path: /postgres     # 访问路径，需要与 match_list 中的配置匹配
    type: database      # 类型为数据库
    config:
      dsn: "your postgres database connect dsn" # 数据库连接串
      dbType: "postgres"                        # 数据库类型，目前已支持 postgres/mysql/clickhouse/sqlite
```

### 配置 Nacos MCP Registry

在 Config Map 中配置 Nacos MCP Registry：

```yaml
servers:
  - name: nacos-mcp-registry
    type: nacos-mcp-registry
    path: /registry
    config: 
      serverAddr: "nacos server address"
      namespace: "nacos namespace"
      serviceMatcher:
        your-service-group: "service-match-pattern"
```
Nacos MCP Registry 只会将 serviceMatcher 匹配的并且配置了 mcp-tools 配置文件的服务暴露为MCP 服务。请注意服务的分组和配置文件的分组必须在同一个命名空间和分组下。serviceMatcher 的key是服务的分组， value是服务的正则匹配表达式，如果需要匹配所有服务可以使用 `.*`，serverAddr 为 Nacos 的地址无需填写端口，目前默认为8848


### 配置 REST API MCP Server

任何 REST API 都可以通过以下步骤快速转换为 MCP Server：

#### 1. 添加服务来源

在 Higress 控制台添加目标 REST API 的服务来源，本示例使用 `randomuser.me` 作为服务来源：

![添加服务来源](https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg)

#### 2. 配置路由

在 Higress 控制台添加路由并指向对应的服务来源：

![配置路由](https://gw.alicdn.com/imgextra/i2/O1CN01AvGOMg1ysswRGHvuM_!!6000000006635-0-tps-2528-624.jpg)

#### 3. 配置 MCP Server 插件

**推荐：可以使用 [OpenAPI to MCP](https://github.com/higress-group/openapi-to-mcpserver) 工具，实现 API 文档到 MCP Server 插件配置的自动转换**

对创建的路由添加 MCP Server 插件并进行配置：

![配置MCP Server插件](https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg)

插件配置示例：

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
更多关于如何配置 REST API 到 MCP Server 的详细信息，请参考 [MCP Server 插件配置参考](../ai/mcp-server.md)和[Higress Wasm插件使用简介](https://higress.cn/docs/latest/plugins/intro/?spm=36971b57.2ef5001f.0.0.2a932c1fWNtqNf)

> **注意：** 对于 2025-03-26 [MCP streamable HTTP](https://spec.modelcontextprotocol.io/specification/2025-03-26/) 协议，可以直接使用此插件，无需全局 ConfigMap 配置

## MCP Server 使用

在 AI Agent 中配置 MCP Server 的 SSE 连接，以 cursor 为例：

* 数据库类型的 MCP Server：使用 ConfigMap 中配置的 path + sse_path_suffix
* REST API 类型的 MCP Server：使用控制台配置的路由 path + sse_path_suffix

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

cursor 中配置完成：

![cursor配置完成](https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg)


通过 MCP Server，您可以快速为 AI Agent 添加各种数据源支持，提高开发效率。任何 REST API 都可以通过简单的配置转换为 MCP Server，无需编写额外的代码。

> 如您在使用 MCP Server 过程中遇到问题，可在 [Higress Github Issue](https://github.com/alibaba/higress/issues) 中留下您的信息。
> 
> 如您对 Higress 后续更新感兴趣，或希望给 Higress 提供反馈，欢迎 Star [Higress Github Repo](https://github.com/alibaba/higress/)。
