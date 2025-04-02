---
title: MCP Server 快速开始
description: MCP Server 快速开始指南
date: "2025-03-31"
category: "article"
keywords: ["MCP Server"]
authors: "静择"
---

# MCP Server 快速开始

> **注意：** 本文档中的 MCP Server 功能需要 Higress 2.1.0 或更高版本。

Higress AI 网关支持统一代理多个 MCP Server，可通过 [Wasm](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers) 或 [Golang Filter](https://github.com/alibaba/higress/blob/main/plugins/golang-filter/mcp-server/README.md) 实现，均提供封装的 MCP Server 框架。本文将以 [Golang Filter 实现的 postgres MCP Server](https://github.com/alibaba/higress/tree/main/plugins/golang-filter/mcp-server/servers/gorm) 和 [Wasm 实现的夸克搜索](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers/quark-search) 为例，介绍配置流程。

## 前提条件

在开始使用 MCP Server 之前，需要先部署 Higress。您可以参考 [Higress 快速入门指南](https://higress.cn/docs/latest/user/quickstart) 完成部署。在安装 Higress 时，请确保在 Helm 命令中添加以下参数：

```bash
helm install higress -n higress-system [...其他参数...] --set global.enableRedis=true
```

MCP Server 需要依赖 Redis 服务，启用后您可以在后续的 ConfigMap 配置中使用 Redis 的连接信息。您可以通过以下命令查看 Redis 服务的地址：

```bash
kubectl get svc redis-stack-server -n higress-system -o wide
```

## 配置 MCP Server

### ConfigMap 全局参数配置

在 ConfigMap 中配置 MCP Server 的相关全局参数：

```bash
kubectl edit configmap higress-config -n higress-system
```

包含 Redis 的地址以及匹配列表，所有 MCP Server 必须配置在匹配列表规则中：

```yaml
mcpServer:
  sse_path_suffix: /sse
  enable: true
  redis:
    address: your-redis-cluster-ip:6379 # 填写 Redis 服务的地址
    username: your-redis-username # 填写 Redis 服务的用户(如果安装时设置了用户名)
    password: your-redis-password # 填写 Redis 服务的密码(如果安装时设置了密码)
  match_list:
    - match_rule_domain: "*"
      match_rule_path: /postgres
      match_rule_type: "prefix"
    - match_rule_domain: "*"
      match_rule_path: /quark
      match_rule_type: "prefix"
  serves: 
```

> **注意：** 目前 golang filter 类型的 MCP Server 在 Config Map 中配置，wasm 插件类型在 Higress 控制台配置。

### 配置 postgres MCP Server

在 Config Map 中配置 postgres MCP Server 类型的 MCP Server，数据库连接 dsn 参考 [gorm](https://gorm.io/docs/connecting_to_the_database.html)：

```yaml
servers:
  - name: postgres
    path: /postgres
    type: database
    config:
      dsn: "your postgres database connect dsn" # 填写连接 postgres 数据库的 dsn
      dbType: "postgres"
```

### 配置夸克搜索 MCP Server Wasm 插件

#### 1. 申请 API Key

[申请夸克搜索调用的 API Key](https://help.aliyun.com/document_detail/2872258.html?spm=a2c4g.11186623.0.0.632e3350xkb4hu)

#### 2. 添加服务来源

在 Higress 控制台添加夸克搜索的服务来源

<div style="text-align: center;">
<img src="https://gw.alicdn.com/imgextra/i3/O1CN018CbgsB1o7Zs7LNCO7_!!6000000005178-0-tps-2434-146.jpg" width="800" alt="添加服务来源" />
</div>

#### 3. 配置路由

在 Higress 控制台添加夸克搜索的路由指向对应的服务来源

<div style="text-align: center;">
<img src="https://gw.alicdn.com/imgextra/i1/O1CN01Yx0SDr1YLHsTz23OD_!!6000000003042-0-tps-2522-738.jpg" width="800" alt="配置路由" />
</div>

#### 4. 配置 Wasm 插件

对创建的路由点击策略按键添加插件

<div style="text-align: center;">
<img src="https://gw.alicdn.com/imgextra/i4/O1CN01vrUE1z1fClp4Lr0dv_!!6000000003971-0-tps-1286-1072.jpg" width="600" alt="Wasm" />
</div>

对添加的 Wasm 插件配置

<div style="text-align: center;">
<img src="https://gw.alicdn.com/imgextra/i1/O1CN01RkKZa01gZxUVFVm1l_!!6000000004157-0-tps-1302-692.jpg" width="600" alt="yaml" />
</div>

## MCP Server 使用

在 AI Agent 中配置 MCP Server 的 SSE 连接，以 cursor 为例，替换部署的 Higress 地址：

* golang filter 类型的 MCP Server SSE 连接地址为 ConfigMap 配置的 Path 加上配置的 sse_path_suffix
* Wasm 插件类型的 MCP Server SSE 连接地址为配置路由的 Path 加上配置的 sse_path_suffix

```yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "quark": {
    "url": "http://your-higress-address/quark-search/sse"
  }
}
```

cursor 中配置完成：

<div style="text-align: center;">
<img src="https://gw.alicdn.com/imgextra/i3/O1CN01WS1eN01xovuMAlRQh_!!6000000006491-0-tps-1918-622.jpg" width="800" alt="cursor配置完成" />
</div>