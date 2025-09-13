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

如果 Redis 服务启动正常，你会得到类似如下形式的输出：

```bash
NAME                 TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE   SELECTOR
redis-stack-server   ClusterIP   192.168.51.87   <none>        6379/TCP   10s   app.kubernetes.io/instance=higress,app.kubernetes.io/name=redis-stack-server
```

## 配置 MCP Server

### 全局参数配置

在系统设置中配置 MCP Server 的相关全局参数：
![配置全局参数](https://img.alicdn.com/imgextra/i2/O1CN01CabBas1f1JxTqfEre_!!6000000003946-2-tps-3014-1594.png)

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
      match_list: []
      servers: []
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
```

### 配置 MCP 管理

进入 MCP 管理界面：

![MCP管理界面](https://img.alicdn.com/imgextra/i1/O1CN01xzeROD1GX30611tEy_!!6000000000631-2-tps-3008-1586.png)

创建 MCP 服务：

![创建MCP服务](https://img.alicdn.com/imgextra/i1/O1CN01PYboEy1QbIq1xt1F3_!!6000000001994-2-tps-3012-1590.png)

#### OpenAPI 类型的 MCP Server 

在 Higress 控制台添加目标 REST API 的服务来源，本示例使用公网服务 `randomuser.me` ：

![添加服务来源](https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg)

配置 OpenAPI 类型的 MCP 服务，需要在创建后编辑工具规范，可以使用 OpenAPI/Swagger 规范或直接使用 MCP 工具，这里以 MCP 为例：

![编辑工具](https://img.alicdn.com/imgextra/i1/O1CN016AMQp71rUsuibww0U_!!6000000005635-2-tps-3008-900.png)

![Yaml编辑](https://img.alicdn.com/imgextra/i1/O1CN01ln5gRK20KebmUicsi_!!6000000006831-2-tps-3018-1588.png)


```bash
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

#### DB 类型的 MCP Server

![DB类型MCP服务](https://img.alicdn.com/imgextra/i2/O1CN01AUuAh61fATsVvAjm8_!!6000000003966-2-tps-1156-1016.png)


## 使用 MCP Server

在 AI Agent 中配置 MCP Server 的 Streamable HTTP/SSE 连接，参考 MCP 服务中的连接信息：

![连接信息](https://img.alicdn.com/imgextra/i2/O1CN01wmYl3u1FkV17tAUAW_!!6000000000525-2-tps-3018-1590.png)

以 Cursor 为例，进入 Cursor Settings - Tools & Integrations - Add Custom MCP，填入如下内容：

```yaml
{
  "mcpServers": {
    "user": {
      "url": "http://<higress-gateway-ip>/mcp-servers/user/sse"
    }
  }
}
```

Cursor 中配置完成：

![Cursor配置完成](https://img.alicdn.com/imgextra/i2/O1CN01k5hHbI1IQIORhlyQQ_!!6000000000887-2-tps-1868-1038.png)


## 配置 Nacos 作为服务来源 (Optional)

通过对接Nacos自动发现，您可以复用Nacos成熟的配置管理能力来统一管理MCP服务。

> **注意：**
> 需要Nacos版本为3.0及以上，Higress版本在2.1.2及以上


创建Nacos3.x服务来源并完善相关信息

![添加Nacos3.x服务来源](https://img.alicdn.com/imgextra/i3/O1CN01FGvSE71HVVGHTp1Cu_!!6000000000763-2-tps-588-1039.png)

## 结语
通过 MCP Server，您可以快速为 AI Agent 添加各种数据源支持，提高开发效率。任何 REST API 都可以通过简单的配置转换为 MCP Server，无需编写额外的代码。

> 如您在使用 MCP Server 过程中遇到问题，可在 [Higress Github Issue](https://github.com/alibaba/higress/issues) 中留下您的信息。
> 
> 如您对 Higress 后续更新感兴趣，或希望给 Higress 提供反馈，欢迎 Star [Higress Github Repo](https://github.com/alibaba/higress/)。
>
> 您可以使用 [OpenAPI to MCP](https://github.com/higress-group/openapi-to-mcpserver) 工具，实现 OpenAPI 规范文档到 MCP Server 配置的自动转换