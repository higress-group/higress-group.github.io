---
title: MCP Server 快速开始（Docker 版）
description: Higress AI 网关提供 MCP Server 统一托管能力，可以帮助 AI Agent 快速对接各类数据源。通过 MCP Server，AI Agent 可以方便地访问数据库、REST API 等外部服务，无需关心具体的连接细节。其中，数据库对接能力是网关内置的能力；而对于 REST API，任何外部 REST API 都可以通过简单的配置转换成 MCP Server
date: "2025-04-20"
category: "article"
keywords: ["MCP Server"]
authors: "CH3CHO"
---

## 概述 

Higress AI 网关提供 MCP Server 统一托管能力，可以帮助 AI Agent 快速对接各类数据源。通过 MCP Server，AI Agent 可以方便地访问数据库、REST API 等外部服务，无需关心具体的连接细节。其中，数据库对接能力是网关内置的能力；而对于 REST API，任何外部 REST API 都可以通过简单的配置转换成 MCP Server。本文将以 一个简单的 REST API 为例，介绍通过 Higress 将一个 REST API 转化为 MCP Server 的配置流程。

## 前提条件

1. 确认本机安装有 Docker 且 `docker` 命令可用。
  ```bash
  docker
  ```
2. 确认本机可以访问外网。

## 部署 Higress

在开始使用 MCP Server 之前，需要先部署 Higress。我们这里使用的是 all-in-one 镜像的部署方式。

```bash
# 创建一个工作目录
mkdir higress; cd higress
# 拉取最新的 Higress all-in-one 镜像
docker pull higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
# 启动 Higress，配置文件会写到工作目录下
docker run -d --rm --name higress-ai -v ${PWD}:/data \
        -p 8001:8001 -p 8080:8080 -p 8443:8443 \
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
```

**重要：**后续操作过程中，请勿切换终端的工作目录。应使其保持在新创建的 `higress` 目录下。

您也可以参考 [Higress 快速入门指南](https://higress.cn/docs/latest/user/quickstart) 完成这部分的部署工作。

## 部署 Redis

MCP Server 的 SSE 功能需要依赖 Redis 服务用于数据缓存。我们可以使用以下命令在后台启动一个 Redis 服务容器，并将其 6379 端口映射到本机。

```bash
docker run -d --rm --name higress-redis -p 6379:6379 higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3
```

## 配置 MCP Server

### ConfigMap 全局参数配置

在 ConfigMap 中配置 MCP Server 的相关全局参数。

```bash
vi ./configmaps/higress-config.yaml
```

配置 Redis 连接信息和 MCP Server 的路由规则：

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
  creationTimestamp: "2000-01-01T00:00:00Z"
  resourceVersion: "1"
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # SSE 连接的路径后缀
      enable: true          # 启用 MCP Server
      redis:
        address: IP:6379 # Redis服务地址。这里需要使用本机的内网 IP，不可以使用 127.0.0.1
        username: "" # Redis用户名（可选）
        password: "" # Redis密码（可选）
        db: 0 # Redis数据库（可选）
      match_list:          # MCP Server 会话保持路由规则（当匹配下面路径时，将被识别为一个 MCP 会话，通过 SSE 等机制进行会话保持）
        - match_rule_domain: "*"
          match_rule_path: /user
          match_rule_type: "prefix"
      servers: []
    downstream:
    # 以下配置无需修改，此处省略
```

**注意：**受 Docker 运行环境的限制，非 Linux 操作系统在修改 yaml 文件之后，需要等待一段时间才能让新的配置生效。如果希望立即生效的话，可以使用以下命令重启 higress-ai 容器：

```bash
docker stop higress-ai
docker run -d --rm --name higress-ai -v ${PWD}:/data \
        -p 8001:8001 -p 8080:8080 -p 8443:8443 \
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
```

### 配置 REST API MCP Server

任何 REST API 都可以通过以下步骤快速转换为 MCP Server：

#### 1. 打开 Higress 控制台

在浏览器中访问 `http://localhost:8080`。

首次访问将会要求配置登录账号信息。配置完成后，请使用配置好的账号登录。

#### 1. 添加服务来源

在 Higress 控制台添加目标 REST API 的服务来源。本示例使用 `randomuser.me` 作为服务来源。

![添加服务来源-信息](/img/ai/mcp-quick-start_docker/zh/add-servicesource-info.png)

添加完成后，服务来源列表显示如下：

![添加服务来源-列表](/img/ai/mcp-quick-start_docker/zh/add-servicesource-list.png)

#### 2. 配置路由

在 Higress 控制台添加路由并指向对应的服务来源：

![配置路由-信息](/img/ai/mcp-quick-start_docker/zh/add-route-info.png)

添加完成后，路由列表显示如下：

![配置路由-列表](/img/ai/mcp-quick-start_docker/zh/add-route-list.png)

#### 3. 配置 MCP Server 插件

1. 点击新创建的路由右侧的“策略”链接进入插件配置页面。
2. 找到“MCP 服务器”插件，并点击其下方的配置按钮
3. 将“开启状态”切换至绿色的开。
4. 将下发配置部分切换到 YAML 视图，并填入以下配置。
5. 点击右上角的保存。

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

<br/>

![配置MCP Server插件](https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg)

## MCP Server 使用

在 AI Agent 中配置 MCP Server 的 SSE Server，本文以 [Cherry Studio](https://cherry-ai.com/) 为例。

### 1. 添加 MCP 服务器

按照以下说明添加一个新的 MCP 服务器指向我们刚刚配置的路由：

1. 名称：可以任意填写
2. 类型：`服务器发送事件（sse）`
3. URL：`http://localhost:8080/user/sse`

![配置MCP Server插件-1](/img/ai/mcp-quick-start_docker/zh/cherry-studio-add-mcp-1.png)

![配置MCP Server插件-2](/img/ai/mcp-quick-start_docker/zh/cherry-studio-add-mcp-2.png)

### 2. 使用 MCP 服务

在 Cherry Studio 中，要在对话中使用 MCP 服务，我们需要先激活它。

1. 切换到“助手”页面
2. 点击右侧输入框下方的“MCP 服务器”按钮
3. 在弹出的 MCP 服务器列表中点击我们刚刚添加的“GetRandomUser”服务，使其变绿且右侧出现“√”标识

![激活MCP Server](/img/ai/mcp-quick-start_docker/zh/activate-mcp-server.png)

现在我们就可以在对话中使用这个 MCP 服务服务了。

在输入框中输入“帮我生成一段用户信息”。就可以看到 Cherry Studio 利用大模型并通过 MCP Server 来为我们生成了一段随机的用户信息。

![使用MCP Server](/img/ai/mcp-quick-start_docker/zh/use-mcp-server.png)

## 常见问题

### 1. higress-config 中的 mcpServer 配置与路由配置以及路由策略中的 MCP 服务器插件之间是什么关系？

`higress-config` 中的 `mcpServer` 配置是用来进行 SSE 数据流推送的。所以它里面的 `matchList` 中的匹配规则必须要覆盖所有使用 SSE 协议的 MCP 服务器路径。

路由配置是用来让请求能够正常被转发到目标 REST API 的。所以路由所指向的目标服务必须是 MCP 服务所对应的 REST API。

路由策略配置中的 MCP 服务器插件配置有两个功能，一个是向 MCP 客户端（也就是例子中的 Cherry Studio）提供 MCP 服务所支持的工具方法的元数据，另一个则是在转发请求的时候将 MCP 请求转换成目标服务可以支持的格式，也就是 `requestTemplate` 部分所配置的内容。

### 2. 是否可以不用部署 Redis？

由于 MCP 协议发起工具调用和推送响应所对应的是不同的请求，甚至在集群部署的时候，这些请求可能会由集群中的不同服务器进行处理，所以 Higress 引入了 Redis 来进行会话管理，确保所有的工具调用都可以关联到最初开启会话的 SSE 请求。

如果不想用 Redis 的话，可以尝试一下 MCP 协议中新推出的 Streamble HTTP 通信方式。

### 3. 如何查看日志？

Higress all-in-one 容器的所有日志都保存在容器中的 `/var/log/higress` 目录中。大家可以使用以下命令进入到容器中进行查看。

```bash
docker exec -it higress-ai bash
cd /var/log/higress
cat gateway.log
```

## 总结

通过 Higress 的 MCP Server 功能，您可以快速为 AI Agent 添加各种数据源支持，提高工作效率。任何 REST API 都可以通过简单的配置转换为 MCP Server，无需编写额外的代码。

> 如您在使用 MCP Server 过程中遇到问题，可在 [Higress Github Issue](https://github.com/alibaba/higress/issues) 中留下您的信息。
>
> 如您对 Higress 后续更新感兴趣，或希望给 Higress 提供反馈，欢迎 Star [Higress Github Repo](https://github.com/alibaba/higress/)。
