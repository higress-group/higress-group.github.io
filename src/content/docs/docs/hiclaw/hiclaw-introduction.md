---
title: "HiClaw 介绍"
description: "HiClaw 产品介绍与核心功能概览"
date: "2025-12-11"
category: "article"
keywords: ["HiClaw", "介绍", "产品", "Agent", "AI"]
authors: "Higress Team"
---

# HiClaw 介绍

**HiClaw 是一个开源的 Collaborative Multi-Agent OS**，通过 Matrix 房间实现透明、可人工介入的任务协调。基于 **Manager-Workers 架构**，让人类能够协调多个 Worker Agent 完成复杂任务，加速实现 OPOC（一人一公司）和企业数字员工的部署。

## 核心特性

### 🦞 可定制化的 "Claws"

每个 Claw 支持用户定制，可以是 OpenClaw、CoPaw、NanoClaw、ZeroClaw 或企业自建 Agent。系统目前预装 OpenClaw。

### 🧬 专属 Manager Claw 角色

引入专用的 Manager Claw 角色，消除人类手动管理每个 Worker 的需要，显著降低管理开销。

### ☎️ 原生 Matrix 通信

采用 Element IM 客户端和 Tuwunel IM 服务器（基于 Matrix 实时通信协议）。相比企业 IM（如钉钉、飞书），无需复杂的集成和审批流程，快速体验模型服务的无缝交互。

### 📦 共享文件系统（MinIO）

集成 MinIO 作为 Agent 间信息交换的共享文件系统，支持人际协作，共享内存直接存储在文件系统上。

### 🔐 通过 Higress AI Gateway 的安全入口

整合 Higress AI Gateway 集中管理入口点和凭证，显著降低安全风险，消除用户对原生 "Lobster" (OpenClaw) 部署安全的顾虑。

## 为什么选择 HiClaw

### 企业级安全

Worker Agent 从不持有真实的 API Keys 或 GitHub PATs，只使用消费者令牌（类似"工牌"）。即使 Worker Agent 被攻破，攻击者也无法获取任何真实凭证。

### 多 Agent 群聊网络

Manager Agent 智能分解任务，协调多个 Worker Agent 并行执行，显著提升处理复杂工作流的能力。

### Matrix 协议驱动

基于开放的 Matrix IM 协议，所有 Agent 通信透明可审计。系统原生支持分布式部署和联邦通信。

### 全程人工监督

人类可随时进入任何 Matrix 房间观察 Agent 对话，实时介入或纠正 Agent 行为，确保安全和控制。

### 真正开箱即用的 IM 体验

内置 Matrix 服务器，无需申请钉钉或飞书机器人，无需等待内部审批。打开浏览器即可使用 Element Web，或通过 iOS、Android 和 Web 上的移动 Matrix 客户端（如 Element 或 FluffyChat）随时随地指挥 Agent。

### Manager-Worker 架构

清晰的 Manager-Worker 两层架构，职责分明。易于为不同场景扩展和定制 Worker Agent，支持管理 CoPaw、NanoClaw、ZeroClaw 或企业自建 Agent。

### 一键启动

一条 `curl | bash` 命令即可完成所有设置 —— Higress AI Gateway、Matrix 服务器、文件存储、Web 客户端和 Manager Agent 本身。

### Skills 生态系统

Worker 可按需从 [skills.sh](https://skills.sh)（80,000+ 社区技能）拉取技能。安全可用，因为 Worker 无法访问真实凭证。

## 架构概览

```
┌─────────────────────────────────────────────┐
│         hiclaw-manager-agent                │
│  Higress │ Tuwunel │ MinIO │ Element Web    │
│  Manager Agent (OpenClaw)                   │
└──────────────────┬──────────────────────────┘
                   │ Matrix + HTTP Files
┌──────────────────┴──────┐  ┌────────────────┐
│  hiclaw-worker-agent    │  │  hiclaw-worker │
│  Worker Alice (OpenClaw)│  │  Worker Bob    │
└─────────────────────────┘  └────────────────┘
```

### 组件说明

| 组件 | 角色 |
|------|------|
| Higress AI Gateway | LLM 代理、MCP Server 托管、凭证管理 |
| Tuwunel (Matrix) | 所有 Agent + Human 通信的 IM 服务器 |
| Element Web | 浏览器客户端，零配置 |
| MinIO | 集中式文件存储，Workers 无状态 |
| OpenClaw | 带有 Matrix 插件和 skills 的 Agent 运行时 |

## HiClaw vs OpenClaw 原生

| 特性 | OpenClaw 原生 | HiClaw |
|------|--------------|--------|
| **部署方式** | 单进程 | 分布式容器 |
| **Agent 创建** | 手动配置 + 重启 | 对话式创建 |
| **凭证管理** | 每个 Agent 持有凭证 | Workers 只持有消费者令牌 |
| **人工可见性** | 可选 | **内置** - 人类在每个房间中 |
| **移动访问** | 依赖渠道设置 | 任何 Matrix 客户端，零配置 |
| **监控** | 无 | Manager 心跳，在房间中可见 |

## 安全模型

```
Worker (仅持有消费者令牌)
    → Higress AI Gateway (持有真实 API keys, GitHub PAT)
        → LLM API / GitHub API / MCP Servers
```

Workers 只看到他们的消费者令牌。Gateway 处理所有真实凭证。Manager 知道 Workers 在做什么，但也从不接触实际的密钥。

## Human in the Loop

每个 Matrix Room 都有你、Manager 和相关的 Workers。你可以在任何时候介入：

```
You: @bob 等等，把密码规则改成最少 8 个字符
Bob: 收到，已更新。
Alice: 前端验证也已更新。
```

没有黑盒。没有隐藏的 Agent 间调用。

## 相关链接

- **官网**: [https://hiclaw.io/](https://hiclaw.io/)
- **GitHub 仓库**: [https://github.com/higress-group/HiClaw](https://github.com/higress-group/HiClaw)
- **快速入门**: [docs/quickstart.md](https://github.com/higress-group/HiClaw/blob/main/docs/quickstart.md)
- **架构文档**: [docs/architecture.md](https://github.com/higress-group/HiClaw/blob/main/docs/architecture.md)
