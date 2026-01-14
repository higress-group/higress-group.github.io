---
title: "HiMarket 上架 AgentScope Agent"
description: "HiMarket 上架 AgentScope Agent 指南"
date: "2025-12-22"
category: "article"
keywords: ["HiMarket", "AgentScope", "Agent","部署", "安装"]
authors: "Higress Team"
---
# HiMarket 上架 AgentScope Agent 指南

## 目录
- [概述](#概述)
- [第一部分：开发并注册 AgentScope Agent 到 Nacos](#第一部分开发并注册-agentscope-agent-到-nacos)
    - [环境准备](#环境准备)
    - [开发 Agent](#开发-agent)
    - [配置 Nacos 注册](#配置-nacos-注册)
    - [验证注册](#验证注册)
- [第二部分：在 HiMarket 中导入 Nacos 实例](#第二部分在-himarket-中导入-nacos-实例)
- [第三部分：创建并关联 Agent 产品](#第三部分创建并关联-agent-产品)
- [第四部分：发布到门户](#第四部分发布到门户)
- [常见问题](#常见问题)

---

## 概述
### 什么是 AgentScope？
[AgentScope](https://agentscope.io) 是一个构建 AI Agent 应用的开发框架，支持快速构建智能对话 Agent、工具调用、多 Agent 协作等能力。

### 技术架构
AgentScope Agent 上架到 HiMarket 的完整链路：

```plain
AgentScope Java Agent (开发)
        ↓
    注册到 Nacos (智能体注册中心)
        ↓
HiMarket 导入 Nacos 实例 (连接数据源)
        ↓
创建 Agent 产品并关联 (拉取配置)
        ↓
   发布到门户 (用户可见)
```

### 核心概念
+ **AgentScope Runtime**：AgentScope 的运行时环境，支持 A2A 协议
+ **A2A 协议**：Agent-to-Agent 协议，用于 Agent 间的标准化通信
+ **Nacos**：智能体注册中心，存储 Agent 的配置和元数据
+ **HiMarket**：API 和 Agent 产品管理平台，提供统一的展示和管理门户

### 语言支持
| 语言 | 支持状态 | 说明 |
| --- | --- | --- |
| **Java** | 已支持 | 当前版本，本文档介绍 |
| **Python** | 即将支持 | 开发中，敬请期待 |


---

## 第一部分：开发并注册 AgentScope Agent 到 Nacos
### 环境准备
#### 1.1 前置要求
+ **Java 17** 或更高版本
+ **Maven 3.6** 或更高版本
+ **Nacos Server 3.1.0** 或更高版本
+ **DashScope API Key**（或其他 LLM 服务）

#### 1.2 启动 Nacos Server
**下载并启动**：

```bash
# Linux/Mac
sh bin/startup.sh -m standalone

# Windows
cmd bin/startup.cmd -m standalone
```

访问控制台验证：[http://localhost:8848/nacos](http://localhost:8848/nacos)

详细安装步骤参考：[Nacos 快速开始](https://nacos.io/docs/latest/guide/start/quick-start/)

---

### 开发 Agent
#### 2.1 添加 Maven 依赖
在 `pom.xml` 中添加：

> **版本要求：** AgentScope 和 AgentScope Extensions 的版本要求为 1.0.3 及以上。

```xml
<properties>
    <agentscope.version>1.0.3</agentscope.version>
    <agentscope-extensions.version>1.0.3</agentscope-extensions.version>
    <spring-boot.version>3.5.7</spring-boot.version>
</properties>
<dependencies>
    <!-- Spring Boot -->
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-core</artifactId>
        <version>${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-spring-boot-starter</artifactId>
        <version>${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-nacos-spring-boot-starter</artifactId>
        <version>${agentscope-extensions.version}</version>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>${spring-boot.version}</version>
    </dependency>

</dependencies>

```

#### 2.2 创建 Spring Boot 主类
```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class A2aRegistryExampleApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(A2aRegistryExampleApplication.class, args);
    }
}
```

#### 2.3 创建配置文件
在 `src/main/resources/application.yaml` 中配置：

```yaml
server:
  port: 8888

agentscope:
  dashscope:
    api-key: ${AI_DASHSCOPE_API_KEY}
  agent:
    enabled: true
    name: customer-service-agent
    sys-prompt: "你是一个智能客服助手，可以回答用户的问题"
  a2a:
    server:
      card:
        description: "Example of A2A(Agent2Agent) Protocol Agent"
        provider:
          organization: Alibaba Nacos
          url: https://nacos.io
      nacos:
        server-addr: ${NACOS_SERVER_ADDRESS:127.0.0.1:8848}
        username: ${NACOS_USERNAME:nacos}
        password: ${NACOS_PASSWORD:nacos}
```


#### 2.4 核心配置说明
#### Agent 配置
Agent 本身相关的配置，用于定义 Agent 的基本属性和行为。

| 配置项 | 说明 | 默认值 | 必填 |
| --- | --- | --- | --- |
| `agentscope.dashscope.api-key` | DashScope API 密钥 | - | 是 |
| `agentscope.agent.enabled` | 是否启用 Agent | false | 否 |
| `agentscope.agent.name` | Agent 名称 | - | 是 |
| `agentscope.agent.sys-prompt` | Agent 系统提示词 | - | 推荐 |

#### AgentCard 配置
Agent 以 A2A 协议对外暴露的 AgentCard 相关配置，用于描述 Agent 的元数据信息。更多支持的字段可以参考 A2A 协议中 AgentCard 的定义。

| 配置项 | 说明 | 默认值 | 必填 |
| --- | --- | --- | --- |
| `agentscope.a2a.server.card.description` | Agent 描述信息 | - | 推荐 |
| `agentscope.a2a.server.card.provider.organization` | Agent 提供者组织 | - | 否 |
| `agentscope.a2a.server.card.provider.url` | Agent 提供者 URL | - | 否 |

#### Nacos 配置
Nacos 智能体注册中心相关配置，用于将 Agent 注册到 Nacos 智能体注册中心。

| 配置项 | 说明 | 默认值 | 必填 |
| --- | --- | --- | --- |
| `agentscope.a2a.server.nacos.server-addr` | Nacos 服务器地址 | 127.0.0.1:8848 | 是 |
| `agentscope.a2a.server.nacos.username` | Nacos 用户名 | - | 视配置 |
| `agentscope.a2a.server.nacos.password` | Nacos 密码 | - | 视配置 |
| `agentscope.a2a.server.nacos.namespace` | Nacos 命名空间 | public | 否 |

#### Server 配置
服务器基础配置，用于设置服务监听端口等服务器级别参数。

| 配置项 | 说明 | 默认值 | 必填 |
| --- | --- | --- | --- |
| `server.port` | Agent 服务监听端口 | 8080 | 否 |


#### 2.5 MSE Nacos 配置（可选）
如果使用阿里云 MSE Nacos：

```yaml
agentscope:
  a2a:
    server:
      nacos:
        endpoint: ${NACOS_ENDPOINT:your-endpoint.mse.aliyuncs.com}
        namespace: ${NACOS_NAMESPACE:your-namespace-id}
        access-key: ${NACOS_ACCESS_KEY}
        secret-key: ${NACOS_SECRET_KEY}
```

#### 2.6 启动应用
设置环境变量：

```bash
export AI_DASHSCOPE_API_KEY=your_api_key
export NACOS_USERNAME=nacos
export NACOS_PASSWORD=nacos
```

运行应用：

```bash
mvn spring-boot:run
```

---

### 验证注册
#### 3.1 查看日志
确认看到以下日志：

```plain
Auto register agent customer-service-agent into Registry Nacos.
Auto register agent customer-service-agent into Registry Nacos successfully.
```

#### 3.2 访问 Nacos 控制台
1. 打开 [http://localhost:8848/nacos](http://localhost:8848/nacos)
2. 进入"Agent管理" → "Agent列表"
3. 查找 `customer-service-agent` Agent
4. 点击详情查看Agent Card

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766048089465-1d0ce739-9cd9-4d2c-9161-a6ea64e9c495.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766048134977-de0eece6-f63f-4540-8ebd-cbbfa92cd96f.png)

---

## 第二部分：在 HiMarket 中导入 Nacos 实例
### 导入流程
登录 HiMarket Admin 后台，进入 **"Nacos实例管理"** 页面。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050379287-fb9d72cf-9532-4d7a-863e-14ec0d10816a.png)

点击 **"导入/创建实例"**，选择导入方式。

### 方式 A：从 MSE 导入（推荐）
#### 步骤 1：输入阿里云凭证
选择 **"MSE Nacos"**，填写：

+ **Region**：阿里云地域（如 `cn-hangzhou`）
+ **Access Key**：阿里云 AK
+ **Secret Key**：阿里云 SK

点击 **"获取实例列表"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050596026-672a1bcd-2c52-4914-bdeb-e9f2575555b4.png)

#### 步骤 2：选择实例
从列表中选择目标 MSE Nacos 实例，点击 **"导入"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050503736-809e28c7-d798-4aa9-9c87-b6c65261db5d.png)

#### 步骤 3：补充信息
系统自动预填信息，补充：

+ **服务器地址**：选择公网或内网地址
+ **用户名/密码**：Nacos 认证信息

点击 **"创建"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050566951-c13c3dc1-e38a-4d13-ba8d-09f464d67be4.png)

### 方式 B：手动创建开源 Nacos
选择 **"开源 Nacos"**，手动填写：

+ **实例名称**：如"开发环境 Nacos"
+ **服务器地址**：如 `http://localhost:8848`
+ **用户名/密码**：Nacos 认证信息
+ **描述**：实例说明

点击 **"创建"**

---

## 第三部分：创建并关联 Agent 产品
### 创建产品
#### 1. 进入API Products
在左侧导航点击 **"API Products"**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766052358887-ba1dcd39-30f1-45c6-a169-b38574f7eb8c.png)

#### 2. 创建产品
点击 **"创建API Product"**，填写：

| 字段 | 说明 | 示例 |
| --- | --- | --- |
| 名称 | 面向用户的产品名 | customer-service-agent |
| 类型 | Agent API | Agent API |
| 描述 | 简明功能说明 | 智能客服助手 |
| Icon 设置 | 产品图标 URL | （可选） |
| 类别 | 分类标签 | "客户服务" |


![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766050921063-ac6c97b1-11ab-4209-b08d-b549cc265a4b.png)

点击 **"创建"**

---

### 关联 Nacos Agent
#### 1. 进入关联页面
进入产品详情页，点击 **"Link API"** 标签，点击 **"关联API"**

****![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051096099-fd75a9b5-f24b-4437-9618-817f3f018d94.png)

#### 2. 选择数据源
在弹出的对话框中：

**步骤 1**：数据源类型选择 **"Nacos"**

**步骤 2**：选择之前导入的 **Nacos 实例**

**步骤 3**：选择 **命名空间**（如 `public`）

**步骤 4**：选择 **Agent**（如 `customer-service-agent`）

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051207301-c07d78e4-40c7-424c-9ed6-76a7171f53b9.png)

#### 3. 确认关联
点击 **"关联"**，系统将：

1. 连接到 Nacos 实例
2. 拉取 Agent 的完整配置（Agent Card、协议、路由等）
3. 保存到 HiMarket 数据库
4. 更新产品状态为 **READY**

关联成功后，可查看 Agent 配置详情：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051238106-2beea97c-e0a5-4fae-8f9c-4a3a6c234482.png)

配置包含：

+ **支持协议**：a2a、http
+ **Agent Card**：名称、版本、描述、URL
+ **技能列表**：Agent 的能力标签

---

### 完善使用文档（可选）
点击 **"Usage Guide"** 标签，编写使用指南（Markdown 格式）：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051261427-1ce9af19-ba31-4137-afb8-72d3929068d3.png)

---

## 第四部分：发布到门户
### 发布流程
#### 1. 进入发布页面
点击 **"Portal"** 标签

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051279846-463740c0-ab69-41fe-9fdc-37bf8108e978.png)

#### 2. 选择门户
点击 **"发布到门户"**，选择目标门户（可多选）：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051316550-6208f8e6-2220-40ae-8ced-6ad25ac90f33.png)

#### 3. 确认发布
点击 **"发布"**，产品即可在门户上被用户发现和使用。

---

### 用户访问
用户访问 HiMarket 门户后：

1. **浏览智能体市场**：在首页点击 "智能体"
2. **搜索 Agent**：使用关键字搜索或类别筛选
3. **查看详情**：点击 Agent 卡片进入详情页
4. **查看配置**：
    - **概览标签**：查看使用指南
    - **配置标签**：查看 Agent Card、协议、路由等技术信息
5. **调用 Agent**：根据配置信息调用 Agent API

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/101856292/1766051493057-65ff52e2-a618-467a-a0c5-96d285308777.png)

---

## 常见问题
### Q1: Agent 注册到 Nacos 失败？
**可能原因**：

+ Nacos Server 未启动或不可访问
+ Nacos Server 版本低于 3.1.0
+ 认证信息错误

**解决方案**：

+ 确认 Nacos Server 正常运行
+ 检查 `server-addr`、`username`、`password` 配置
+ 查看应用日志中的详细错误信息

---

### Q2: HiMarket 中找不到已注册的 Agent？
**可能原因**：

+ Nacos 实例未正确导入到 HiMarket
+ 选择的命名空间不正确
+ Agent 注册失败

**解决方案**：

+ 在 HiMarket 中验证 Nacos 实例连接
+ 在 Nacos 控制台确认 Agent 已注册
+ 检查命名空间配置是否一致

---

### Q3: 关联后配置信息不完整？
**可能原因**：

+ Agent 在 Nacos 中的配置不符合 A2A 规范
+ 网络问题导致配置拉取失败

**解决方案**：

+ 在 Nacos 控制台检查 Agent 元数据
+ 确保 Agent Card 信息完整
+ 尝试解除关联后重新关联

---

### Q4: 如何更新 Agent 配置？
**更新流程**：

1. 在 Agent 代码中修改配置
2. 重启 Agent 应用，重新注册到 Nacos
3. 在 HiMarket 产品详情页点击 **"解除关联"**
4. 重新关联同一个 Agent
5. 系统会拉取最新配置

**注意**：解除关联不会删除产品，只是断开与 Agent 的连接。

---

### Q5: 发布后用户看不到产品？
**检查清单**：

- [ ] 产品状态是否为 **READY** 或 **PUBLISHED**
- [ ] 是否已成功发布到目标门户
- [ ] 用户访问的门户地址是否正确
- [ ] 用户是否有访问该门户的权限

---

## 完整示例代码
本文档中的代码示例展示了关键配置。完整的、可运行的示例项目请参考：

**📦**** GitHub 示例项目**：[agentscope-extensions-nacos/java/example/a2a-example](https://github.com/nacos-group/agentscope-extensions-nacos/tree/main/java/example/a2a-example)

包含：

+ Agent 注册示例
+ Agent 发现和调用示例
+ 完整的 Maven 项目配置
+ 详细的 README 说明

---

## 更多资源
+ [AgentScope 官方文档](https://agentscope.io)
+ [Nacos 官方文档](https://nacos.io)
+ [AgentScope Extensions Nacos GitHub](https://github.com/nacos-group/agentscope-extensions-nacos)
+ [HiMarket 产品文档](./README.md)

---

