---
title: MCP Server 快速开始
description: MCP Server 快速开始指南
date: "2025-03-31"
category: "article"
keywords: ["MCP Server"]
authors: "静择"
---

# MCP Server 快速开始

Higress AI 网关支持统一代理多个 MCP Server，可通过 [Wasm](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers) 或 [Golang Filter](https://github.com/alibaba/higress/blob/main/plugins/golang-filter/mcp-server/README.md) 实现，均提供封装的 MCP Server框架。本文将以 [Golang Filter 实现的 postgres MCP Server](https://github.com/alibaba/higress/tree/main/plugins/golang-filter/mcp-server/servers/gorm) 和 [Wasm 实现的夸克搜索](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers/quark-search)为例，介绍配置流程。

## 前提条件

在开始使用 MCP Server 之前，需要先部署 Higress。您可以参考 [Higress 快速入门指南](https://higress.cn/docs/latest/user/quickstart) 完成部署。

## ConfigMap 配置 MCP Server
在 ConfigMap 中配置 MCP Server 的相关全局参数
```bash
kubectl edit configmap -n higress-system
```
包含 Redis 的地址以及匹配列表，所有 MCP Server必须配置在匹配列表规则中
```yaml
mcpServer:
  sse_path_suffix: /sse
  enable: true
  redis:
    address: your-redis-address # 填写Redis服务的地址
    username: your-redis-username # 填写Redis服务的用户
    password: your-redis-password # 填写Redis服务的密码
  match_list:
    - match_rule_domain: "*"
      match_rule_path: /postgres
      match_rule_type: "prefix"
    - match_rule_domain: "*"
      match_rule_path: /quark
      match_rule_type: "prefix"
  serves: 
```
**Note:** 目前golang filter 类型的 MCP Server 在 Config Map中配置，wasm 插件类型在higress控制台配置

## Config Map 配置 postgres MCP Server
在 Config Map 中配置 postgres MCP Server 类型的 MCP Server，数据库连接dsn参考[gorm](https://gorm.io/docs/connecting_to_the_database.html)
```yaml
  servers:
    - name: postgres
      path: /postgres
      type: database
      config:
        dsn: "your postgres database connect dsn" # 填写连接postgre数据库的dsn
        dbType: "postgres"
```

## 夸克搜索 MCP Server Wasm 插件配置

### 申请API Key
[申请夸克搜索调用的API Key](https://help.aliyun.com/document_detail/2872258.html?spm=a2c4g.11186623.0.0.632e3350xkb4hu)

### 配置 Wasm 插件
```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: quark-search
  namespace: higress-system
spec:
  defaultConfig:
  matchRules:
  - ingress:
    - default/quark
    config:
      server:
        name: quark-search
        config:
          apiKey: you-quark-api-key # 填写配置申请的API Key 
  url: registry.cn-hangzhou.aliyuncs.com/jingze/quark-search:1.0.0
```

### 添加服务来源
在Higress控制台添加夸克搜索的服务来源
![添加服务来源](https://gw.alicdn.com/imgextra/i3/O1CN018CbgsB1o7Zs7LNCO7_!!6000000005178-0-tps-2434-146.jpg)

### 配置路由
在Higress控制台添加夸克搜索的路由指向对应的服务来源
![配置路由](https://gw.alicdn.com/imgextra/i2/O1CN01cvbrNB1OS1XobfsLS_!!6000000001703-0-tps-2488-416.jpg)

## MCP Server 使用
在 AI Agent 中配置 MCP Server 的 SSE 连接，以 cursor 为例，替换部署的 Higress 地址
* golang filter 类型的 MCP Server SSE 连接地址为 ConfigMap 配置的 Path 加上配置的 sse_path_suffix
* Wasm 插件类型的 MCP Server SSE 连接地址为配置路由的 Path 加上配置的sse_path_suffix
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
cursor 中配置完成
![cursor](https://gw.alicdn.com/imgextra/i3/O1CN01WS1eN01xovuMAlRQh_!!6000000006491-0-tps-1918-622.jpg)