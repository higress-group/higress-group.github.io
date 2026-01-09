---
title: MCP Server 快速开始（对接现存 SSE Server）
description: Higress AI 网关提供 MCP Server 统一托管能力，支持对接现存使用 SSE Transport 的 MCP Server。本文将介绍如何进行相关配置。
date: "2025-06-28"
category: "article"
keywords: ["MCP Server", "SSE"]
authors: "CH3CHO"
---

## 概述

本文将介绍如何将一个现存使用 SSE Transport 的 MCP Server 通过 Higress 暴露给 MCP Client 访问的完整过程。整个流程将基于一个测试用的简单后端服务实现进行。所有的配置内容也均以此服务所提供的功能为模版编写。建议大家先严格按照本文的步骤配置完成后再尝试自行调整配置对接其他服务。

## 环境准备

### 1. 部署 Higress

在本地使用 all-in-one 镜像方式启动 Higress：

```bash
# 创建一个工作目录
mkdir higress; cd higress
# 强制拉取最新的 all-in-one 镜像
docker pull higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
# 启动 higress，配置文件会写到工作目录下
docker run -d --rm --name higress-ai -v ${PWD}:/data -e O11Y=on \
        -p 8001:8001 -p 8080:8080 -p 8443:8443  \
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
```

安装完成后，在浏览器中访问 Higress Console，确认底部显示的版本号不低于 2.1.4。

### 2. 启动后端服务

1. 测试服务使用 NodeJS 编写。所以请大家先访问 NodeJS 官网（[https://nodejs.org](https://nodejs.org/en)）下载并安装 NodeJS 运行环境
2. 下载[测试服务压缩包](/files/McpSampleServer.zip)
3. 解压至任意目录
4. 执行以下命令启动测试服务
    ```bash
    npm install
    npm start
    ```
5. 启动完成后，在浏览器访问 [http://localhost:3000/](http://localhost:3000)。若能够显示“Hello world!”，则代表服务启动成功。

## 配置流程

以下所有配置都将在 Higress Console 中进行。在浏览器中打开 Higress Console（[http://localhost:8001/](http://localhost:8001/)）

### 服务来源配置

1. 点击左侧的“服务来源”
2. 点击“创建服务来源”按钮
3. 参考下图填写服务来源信息<br/>
    ![new-service-source](/img/ai/mcp-with-sse/zh/new-service-source.png)
4. 点击“确定”按钮
5. 点击左侧的“服务列表”，确认列表中出现了我们刚刚创建的 MCP Server<br/>
    ![service-list](/img/ai/mcp-with-sse/zh/service-list.png)

### 路由配置

1. 点击左侧的“路由配置”
2. 点击“创建路由”按钮
3. 参考下图填写路由信息<br/>
    ![new-route](/img/ai/mcp-with-sse/zh/new-route.png)
4. 点击“确定”按钮
5. 点击新创建的路由右侧的“策略”链接
6. 点击“重写”策略下方的配置按钮
7. 按下图填入配置<br/>
    ![route-rewrite](/img/ai/mcp-with-sse/zh/route-rewrite.png)
8. 点击“保存”按钮

### MCP Server Filter 配置

1. 点击左侧的“系统设置”
2. 修改 `higress` 配置项中的 `mcpServer` 配置
    1.  将 `enable` 改为 `true`
    2.  移除 `redis` 配置项
    3.  在 `match_list` 中添加一个新元素：
        ```yaml
        - match_rule_domain: "*"
          match_rule_path: /mcp/sample
          match_rule_type: prefix
          upstream_type: sse
          enable_path_rewrite: true
          path_rewrite_prefix: /mcp
        ```
    4.  修改后的配置如下图所示<br/>
        ![higress-config](/img/ai/mcp-with-sse/zh/higress-config.png)
    5.  点击“提交”按钮
    6.  提交之后如果页面没有任何提示的话，可以刷新页面，确认配置为更新后的内容即可

## 测试验证

1. 在浏览器中打开 `http://localhost:8080/mcp/sample/sse`
2. 正常情况下页面显示如下图所示<br/>
    ![request-sse](/img/ai/mcp-with-sse/zh/request-sse.png)
3. 用 curl 命令验证获取工具列表
    ```bash
    # sessionId 需要使用浏览器中返回的值
    curl http://localhost:8080/mcp/sample/new/messages?sessionId=62d5e258-f1d6-43e8-81a1-f7a2ae36abfb \
    -H 'Content-Type: application/json' \
    -d '{
        "jsonrpc": "2.0",
        "id": 1,
        "method": "tools/list"
    }'
    ```
4. 正常情况下，终端中会输出“Accepted”字样，而之前的浏览器页面上则会推送工具列表信息<br/>
    ![request-tools-list-1](/img/ai/mcp-with-sse/zh/request-tools-list-1.png)
    ![request-tools-list-2](/img/ai/mcp-with-sse/zh/request-tools-list-2.png)
5. 用 curl 命令验证工具调用
    ```bash
    curl http://localhost:8080/mcp/sample/new/messages?sessionId=62d5e258-f1d6-43e8-81a1-f7a2ae36abfb \
    -H 'Content-Type: application/json' \
    -d '{
        "jsonrpc": "2.0",
        "id": 2,
        "method": "tools/call",
        "params": {
            "name": "add",
            "arguments": {
                "a": 1,
                "b": 2
            }
        }
    }'
    ```
6. 正常情况下，终端中会输出“Accepted”字样，而之前的浏览器页面上则会推送调用结果<br/>
    ![request-tools-call-1](/img/ai/mcp-with-sse/zh/request-tools-call-1.png)
    ![request-tools-call-2](/img/ai/mcp-with-sse/zh/request-tools-call-2.png)

### 工具验证

在完成简单验证之后，大家就可以把这个 MCP Server 配置到支持 MCP Client 的工具（如 DeepChat、Cherry Studio 等）中进行验证了。工具的 URL 为 `http://localhost:8080/mcp/sample/sse`。
