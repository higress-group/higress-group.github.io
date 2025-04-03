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

MCP Server 是 Higress AI 网关提供的一种统一代理能力，可以帮助 AI Agent 快速对接各类数据源。通过 MCP Server，AI Agent 可以方便地访问数据库、搜索引擎等外部服务，无需关心具体的连接细节。其中，数据库对接能力是网关内置的能力，不能跟随插件动态更新。本文将以 postgres 数据库和夸克搜索为例，介绍配置流程。

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
mcpServer:
  sse_path_suffix: /sse  # SSE 连接的路径后缀
  enable: true          # 启用 MCP Server
  redis:
    address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis 服务地址
  match_list:          # MCP Server 路由规则
    - match_rule_domain: "*"
      match_rule_path: /postgres
      match_rule_type: "prefix"
    - match_rule_domain: "*"
      match_rule_path: /quark
      match_rule_type: "prefix"
  serves: 
```

> **注意：** 数据库类型的 MCP Server 在 Config Map 中配置，插件类型在 Higress 控制台配置。

### 配置 postgres MCP Server

在 Config Map 中配置 postgres MCP Server：

```yaml
servers:
  - name: postgres      # MCP Server 名称
    path: /postgres     # 访问路径，需要与 match_list 中的配置匹配
    type: database      # 类型为数据库
    config:
      dsn: "your postgres database connect dsn" # 数据库连接串
      dbType: "postgres"                        # 数据库类型
```

数据库连接串格式请参考 [gorm 文档](https://gorm.io/docs/connecting_to_the_database.html)。

### 配置夸克搜索 MCP Server

#### 1. 申请 API Key

[申请夸克搜索调用的 API Key](https://help.aliyun.com/document_detail/2872258.html?spm=a2c4g.11186623.0.0.632e3350xkb4hu)

#### 2. 添加服务来源

在 Higress 控制台添加夸克搜索的服务来源：

![添加服务来源](https://gw.alicdn.com/imgextra/i3/O1CN018CbgsB1o7Zs7LNCO7_!!6000000005178-0-tps-2434-146.jpg)

#### 3. 配置路由

在 Higress 控制台添加夸克搜索的路由指向对应的服务来源：

![配置路由](https://gw.alicdn.com/imgextra/i1/O1CN01Yx0SDr1YLHsTz23OD_!!6000000003042-0-tps-2522-738.jpg)

#### 4. 配置插件

对创建的路由点击策略按键添加插件：

<div align="center">
<img src="https://gw.alicdn.com/imgextra/i4/O1CN01vrUE1z1fClp4Lr0dv_!!6000000003971-0-tps-1286-1072.jpg" width="500" alt="插件配置" />
</div>

对添加的插件进行配置：

<div align="center">
<img src="https://gw.alicdn.com/imgextra/i1/O1CN01RkKZa01gZxUVFVm1l_!!6000000004157-0-tps-1302-692.jpg" width="500" alt="插件参数"/>
</div>

## MCP Server 使用

在 AI Agent 中配置 MCP Server 的 SSE 连接，以 cursor 为例：

* 数据库类型的 MCP Server：使用 ConfigMap 中配置的 path + sse_path_suffix
* 插件类型的 MCP Server：使用控制台配置的路由 path + sse_path_suffix

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

![cursor配置完成](https://gw.alicdn.com/imgextra/i3/O1CN01WS1eN01xovuMAlRQh_!!6000000006491-0-tps-1918-622.jpg)

## 使用场景

MCP Server 主要用于以下场景：

1. **数据库访问**：AI Agent 需要查询数据库时，可以通过 MCP Server 直接访问，无需处理数据库连接和查询逻辑
2. **搜索引擎集成**：AI Agent 需要搜索信息时，可以通过 MCP Server 调用搜索引擎服务
3. **外部服务对接**：AI Agent 需要调用其他外部服务时，可以通过 MCP Server 统一管理

通过 MCP Server，您可以快速为 AI Agent 添加各种数据源支持，提高开发效率。