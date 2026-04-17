---
title: "HiMarket MCP Server 管理指南"
description: "HiMarket MCP Server 的创建、注册、导入、部署与使用全流程指南"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "MCP Server", "MCP", "管理指南", "教程"]
authors: "Higress Team"
---

# HiMarket MCP Server 管理指南

本文档面向 HiMarket AI 开放平台的管理员和开发者，提供 MCP Server 管理的完整操作指南。

如果你是**管理员**，本文将指导你完成 MCP Server 的创建、注册、导入、工具配置、沙箱部署和发布全流程；如果你是**开发者**，本文将帮助你了解如何浏览 MCP 市场、订阅 MCP Server、在 HiChat 中使用以及注册自己的 MCP Server。

## 目录

+ [MCP Server 概述](#mcp-server-概述)
+ [管理员操作流程](#管理员操作流程)
    - [创建 MCP Server 产品](#创建-mcp-server-产品)
    - [手动注册 MCP Server](#手动注册-mcp-server)
    - [从 Nacos 导入 MCP Server](#从-nacos-导入-mcp-server)
    - [从供应商批量导入](#从供应商批量导入)
    - [刷新工具列表](#刷新工具列表)
    - [编辑服务介绍和工具配置](#编辑服务介绍和工具配置)
    - [沙箱部署](#沙箱部署)
    - [发布到门户](#发布到门户)
+ [开发者操作流程](#开发者操作流程)
    - [浏览 MCP 市场](#浏览-mcp-市场)
    - [订阅 MCP Server](#订阅-mcp-server)
    - [在 HiChat 中使用 MCP Server](#在-hichat-中使用-mcp-server)
    - [注册自己的 MCP Server](#注册自己的-mcp-server)
+ [API 转 MCP](#api-转-mcp)

---

## MCP Server 概述

MCP（Model Context Protocol）是一种标准化协议，用于连接 AI 模型与外部工具和数据源。MCP Server 是实现该协议的服务端，向 AI 模型暴露可调用的工具（Tools），使模型能够执行搜索、查询数据库、调用外部 API 等操作。

在 HiMarket 中，MCP Server 作为一种 API Product 类型进行管理，具备以下核心能力：

+ **统一托管**：支持手动注册、从 Nacos 导入、从供应商批量导入等多种接入方式
+ **工具管理**：自动发现和刷新 MCP Server 提供的工具列表，支持手动编辑工具配置
+ **沙箱部署**：为 MCP Server 提供沙箱环境，支持一键部署和管理
+ **市场发布**：将 MCP Server 发布到开发者门户，供开发者浏览和订阅
+ **HiChat 集成**：开发者可在 HiChat 中选择 MCP Server，结合模型进行对话
+ **API 转 MCP**：支持将现有的 REST API（OpenAPI 规范）自动转换为 MCP Server

MCP Server 支持两种传输协议：
+ **SSE（Server-Sent Events）**：基于 HTTP 的单向流式传输
+ **Streamable HTTP**：基于 HTTP 的双向流式传输

---

## 管理员操作流程

### 创建 MCP Server 产品

MCP Server 在 HiMarket 中以 API Product 的形式管理。创建 MCP Server 的第一步是创建一个类型为 MCP Server 的 API Product。

**操作步骤：**

1. 登录管理后台
2. 进入【API Products】菜单
3. 点击【创建 API Product】按钮
4. 填写产品信息：
    - 产品名称：例如 `my-mcp-server`
    - 产品类型：选择 **MCP Server**
    - 产品描述：简要描述 MCP Server 的功能和用途
    - 产品类别：选择或自定义类别，用于分类和筛选
    - 产品图标：选择图标 URL 或上传本地文件
5. 点击【确定】



创建成功后，进入产品详情页，初始状态为 **"待配置"**。接下来需要为该产品配置 MCP Server 信息。

---

### 手动注册 MCP Server

如果你已有一个运行中的 MCP Server，可以通过手动注册的方式将其接入 HiMarket。

**操作步骤：**

1. 进入 MCP Server 类型的 API Product 详情页
2. 点击【MCP 配置】标签页
3. 点击【注册 MCP Server】按钮
4. 填写 MCP Server 基本信息：

| 配置项 | 说明 | 示例 |
|--------|------|------|
| MCP 英文名称 | 小写字母开头，仅含小写字母、数字、连字符，不超过 63 个字符 | `my-weather-mcp` |
| MCP 展示名称 | 用于前台展示的名称 | `天气查询 MCP` |
| 描述 | MCP Server 的功能描述 | `提供全球天气查询工具` |
| 协议类型 | 选择 **SSE** 或 **Streamable HTTP** | SSE |
| 连接地址 | MCP Server 的 endpoint 地址 | `https://my-mcp-server.example.com/sse` |

5. 可选填写：
    - 仓库地址：MCP Server 的源码仓库地址
    - 标签：用于分类和搜索的标签
    - 图标：MCP Server 的图标
    - 额外参数：MCP Server 需要的额外参数定义
    - 服务介绍：Markdown 格式的服务介绍
6. 点击【保存】



**说明：**

+ 注册成功后，系统会自动创建 MCP 元信息和产品关联
+ 产品状态会变为 **"待发布"**
+ 可以继续配置工具列表、服务介绍等信息

---

### 从 Nacos 导入 MCP Server

HiMarket 支持从 Nacos 注册中心导入 MCP Server，适用于已在 Nacos 中注册的 MCP 服务。

**前提条件：**

+ 已在管理后台导入 Nacos 实例（【实例管理】→【Nacos 实例】）
+ Nacos 中已注册 MCP Server

**操作步骤：**

1. 进入 MCP Server 类型的 API Product 详情页
2. 点击【Link API】标签页
3. 选择 API 资源类型为 **MCP Server**
4. 选择来源为 **Nacos**
5. 从列表中选择要导入的 MCP Server
6. 点击【关联】



**说明：**

+ 导入时会自动获取 Nacos 中的 MCP Server 配置信息，包括工具列表、连接地址等
+ 导入后可在【MCP 配置】页面查看和编辑

---

### 从供应商批量导入

HiMarket 支持从外部 MCP 供应商批量导入 MCP Server，目前支持以下供应商：

+ **ModelScope（魔搭社区）**：从魔搭社区的 MCP Server 列表中导入
+ **MCP Registry（官方注册表）**：从 MCP 官方注册表中导入

**操作步骤：**

1. 进入管理后台
2. 进入【MCP 供应商导入】功能页面
3. 选择供应商类型（ModelScope / MCP Registry）
4. 浏览或搜索可用的 MCP Server 列表：
    - 支持关键词搜索
    - 支持分页浏览
5. 勾选要导入的 MCP Server
6. 点击【批量导入】



**说明：**

+ 批量导入会自动为每个 MCP Server 创建对应的 API Product 和 MCP 元信息
+ 导入结果会显示成功和失败的数量及详情
+ 导入后的 MCP Server 默认为草稿状态，需要手动发布

---

### 刷新工具列表

MCP Server 注册后，管理员可以刷新工具列表，系统会自动连接 MCP Server 并获取最新的工具定义。

**操作步骤：**

1. 进入 MCP Server 的 API Product 详情页
2. 点击【MCP 配置】标签页
3. 找到目标 MCP Server
4. 点击【刷新工具列表】按钮
5. 系统会连接 MCP Server 并获取最新的工具列表



**说明：**

+ 刷新操作会实际连接 MCP Server 的服务地址
+ 如果连接失败，会返回错误信息
+ 刷新后可以在工具配置中查看和编辑工具定义

---

### 编辑服务介绍和工具配置

管理员可以编辑 MCP Server 的服务介绍和工具配置，用于在开发者门户中展示。

#### 编辑服务介绍

**操作步骤：**

1. 进入 MCP Server 的 API Product 详情页
2. 点击【MCP 配置】标签页
3. 找到目标 MCP Server
4. 点击【编辑服务介绍】
5. 使用 Markdown 编辑器编写服务介绍：
    - MCP Server 功能概述
    - 提供的工具列表及说明
    - 使用场景和示例
    - 注意事项
6. 点击【保存】



#### 编辑工具配置

**操作步骤：**

1. 在【MCP 配置】页面，找到工具配置区域
2. 点击【编辑工具配置】
3. 编辑工具定义，包括：
    - 工具名称和描述
    - 参数定义：参数名、类型、是否必填、默认值等
    - 请求模板：URL、HTTP 方法、请求头
    - 响应模板
4. 点击【保存】



---

### 沙箱部署

HiMarket 提供沙箱部署功能，可以为 MCP Server 创建托管的运行环境。沙箱部署适用于需要 HiMarket 托管运行的 MCP Server。

**操作步骤：**

1. 进入 MCP Server 的 API Product 详情页
2. 点击【MCP 配置】标签页
3. 找到目标 MCP Server
4. 点击【部署沙箱】按钮
5. 填写沙箱部署参数：

| 配置项 | 说明 |
|--------|------|
| 沙箱实例 | 选择目标沙箱实例 |
| 传输协议 | 选择 SSE 或 HTTP |
| 鉴权方式 | 无鉴权 或 Bearer Token |
| 参数值 | MCP Server 运行所需的参数（如 API Key 等） |
| 命名空间 | 部署目标命名空间 |
| 资源规格 | CPU / 内存等资源配置 |

6. 点击【部署】



**说明：**

+ 部署成功后，MCP Server 会通过沙箱提供的服务地址对外提供服务
+ 可以通过【取消沙箱托管】按钮删除沙箱部署

---

### 发布到门户

MCP Server 配置完成后，需要将其发布到开发者门户，供开发者浏览和订阅。

**操作步骤：**

1. 进入 MCP Server 的 API Product 详情页
2. 确认产品状态为 **"待发布"**（已完成 MCP Server 配置）
3. 点击【发布到门户】按钮
4. 选择目标门户：
    - 从门户列表中选择一个或多个门户
    - 可以同时发布到多个门户
5. 点击【发布】



**发布后：**

+ MCP Server 会在门户的 MCP 市场中展示
+ 开发者可以浏览 MCP Server 详情、工具列表和服务介绍
+ 开发者可以申请订阅该 MCP Server
+ 订阅后可在 HiChat 中使用

---

## 开发者操作流程

### 浏览 MCP 市场

开发者可以在门户中浏览已发布的 MCP Server 列表。

**操作步骤：**

1. 登录开发者门户
2. 进入【MCP】产品页面
3. 浏览 MCP Server 列表：
    - 查看 MCP Server 名称、描述和图标
    - 筛选和搜索感兴趣的 MCP Server
4. 点击 MCP Server 卡片查看详情：
    - 服务介绍
    - 工具列表及参数说明
    - 使用指南



---

### 订阅 MCP Server

开发者需要订阅 MCP Server 后才能使用。

**操作步骤：**

1. 在 MCP Server 详情页，点击【订阅】按钮
2. 选择要使用的 Consumer（消费者）
3. 点击【确定订阅】



**说明：**

+ 订阅审批取决于门户配置（自动审批或手动审批）
+ 订阅成功后，可在 HiChat 中使用该 MCP Server
+ 可以在 Consumer 详情的订阅列表中查看订阅状态

---

### 在 HiChat 中使用 MCP Server

HiChat 是 HiMarket 的 AI 创新中心，支持在对话中结合 MCP Server 使用。

**操作步骤：**

1. 登录开发者门户
2. 进入【HiChat】页面
3. 选择一个模型产品进行对话
4. 在对话界面中，点击 MCP Server 选择区域
5. 从已订阅的 MCP Server 列表中选择要使用的 MCP Server
6. 如果尚未订阅，可以点击【快速订阅】，系统会使用默认 Consumer 执行订阅
7. 开始对话，模型会根据需要自动调用 MCP Server 提供的工具



**注意事项：**

+ 模型和 MCP Server 都需要订阅后才能正常使用
+ HiChat 默认使用 Developer 的默认 Consumer
+ 可在【消费者管理】页面配置默认 Consumer

---

### 注册自己的 MCP Server

开发者可以通过门户将自己的 MCP Server 注册到 HiMarket。

**操作步骤：**

1. 登录开发者门户
2. 进入【我的 MCP】页面
3. 点击【注册 MCP Server】
4. 填写 MCP Server 信息：

| 配置项 | 说明 |
|--------|------|
| MCP 英文名称 | 小写字母开头，仅含小写字母、数字、连字符 |
| MCP 展示名称 | 用于前台展示的名称 |
| 描述 | MCP Server 的功能描述 |
| 协议类型 | 选择 SSE 或 Streamable HTTP |
| 连接地址 | MCP Server 的 endpoint 地址 |

5. 点击【注册】



**说明：**

+ 注册时系统会自动创建同名的 API Product
+ 注册后的 MCP Server 默认为已发布状态
+ 可以在【我的 MCP】页面查看自己注册的所有 MCP Server

---

## API 转 MCP

HiMarket 支持将现有的 REST API 自动转换为 MCP Server，使 AI 模型能够通过 MCP 协议调用传统的 HTTP API。这意味着你无需重新开发 MCP Server，只需将已有的 API 接入即可。

### 工作原理

API 转 MCP 功能会读取你的 REST API 的 OpenAPI（Swagger）规范，自动完成以下转换：

1. **解析 API 定义**：提取接口路径、HTTP 方法、请求参数和响应格式
2. **生成工具定义**：将每个 API 接口映射为一个 MCP 工具（Tool），包括工具名称、描述、参数定义和请求模板
3. **创建 MCP Server 配置**：生成包含服务信息和工具列表的完整 MCP 配置

转换完成后，AI 模型就可以像调用原生 MCP 工具一样调用你的 REST API。

### 支持的转换场景

| 来源 | 转换方式 | 说明 |
|------|---------|------|
| Higress 网关 | OpenAPI 转换 | 将 Higress 上的 OpenAPI 路由转换为 MCP Server |
| Higress 网关 | 直接路由 | MCP Server 直接代理模式 |
| AI 网关（企业版） | HTTP 转换 | 将 HTTP API 转换为 MCP Server |
| AI 网关（企业版） | MCP 代理 | 直接代理 MCP 协议 |

### 使用方式

**操作步骤：**

1. 在管理后台创建 MCP Server 类型的 API Product
2. 在【Link API】标签页选择 **MCP Server** 资源类型
3. 选择来源为 **Higress**
4. 从 Higress 路由列表中选择要转换的 API 路由
5. 系统会自动将 API 路由转换为 MCP Server 配置
6. 转换完成后，可在【MCP 配置】页面查看和编辑生成的工具定义



**说明：**

+ 转换后的工具配置可以在管理后台手动编辑和调整
+ 每个 API 接口会被映射为一个独立的 MCP 工具，包含完整的参数定义和请求模板
+ 支持路径参数、查询参数和请求体参数的自动转换
