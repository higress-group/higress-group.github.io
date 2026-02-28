---
title: "HiClaw 介绍"
description: "HiClaw 产品介绍与核心功能概览"
date: "2025-12-11"
category: "article"
keywords: ["HiClaw", "介绍", "产品", "Agent", "AI"]
authors: "Higress Team"
---

# HiClaw 介绍

HiClaw 是一个**开源的 Agent 团队系统**，基于 IM 协议（Matrix）实现多 Agent 协作，支持人工全程监督介入。它让你能够部署一支 AI Agent 团队，通过即时通讯进行协作，借助集中式文件系统协调任务，管理员可随时观察和干预所有 Agent 的行为。

## 核心特性

### Agent 团队协作

Manager Agent 自动协调多个 Worker Agent 完成复杂任务。通过自然语言对话即可：
- 创建和销毁 Worker
- 分配任务和监控进度
- 管理 Worker 的技能和权限

### 人工监督介入（Human-in-the-Loop）

所有 Agent 通信均发生在 Matrix 房间中：
- 人类可随时观察所有对话
- 在任意时刻介入指导
- 所有交互可见、可搜索、可中断

每个房间包含：人类 + Manager + Worker，确保 AI 行为可控、可审计。

### 多渠道管理

管理员可通过多种渠道联系 Manager：
- Discord
- 飞书
- Telegram
- 其他 OpenClaw 支持的渠道

Manager 能识别管理员身份，并将日常通知路由到其首选渠道。

### 编程 CLI 委托

当编程 CLI 工具（Claude Code、Gemini CLI）可用时：
- Worker 可将编程任务委托给 CLI
- Manager 在任务工作区运行 CLI 并实时回传结果
- 实现超越标准 LLM 调用的代码生成能力

### AI 网关集成

通过 Higress AI 网关统一管理 LLM 和 MCP Server 访问：
- 按 Worker 独立管理凭证
- Worker 只持有自己的消费者令牌
- 即使 Worker 被攻破，也无法获取上游 API 凭证

### 无状态 Worker

- Worker 从集中存储（MinIO）加载所有配置
- 可随时销毁和重建，不丢失状态
- 支持水平扩展和容器级故障隔离

### MCP 工具集成

通过 MCP Server 访问外部工具（GitHub 等）：
- 凭证集中在网关管理
- Worker 永远看不到真实凭证
- 支持动态权限控制（授予/撤销访问权限）

### 完全开源

基于以下开源项目构建：
- [Higress](https://github.com/alibaba/higress) - AI 网关
- [Tuwunel](https://github.com/nicepkg/tuwunel) - Matrix Homeserver
- [MinIO](https://min.io/) - 对象存储
- [OpenClaw](https://github.com/nicepkg/openclaw) - Agent 框架
- [Element Web](https://github.com/element-hq/element-web) - IM 客户端

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

| 组件 | 端口 | 说明 |
|------|------|------|
| Higress Gateway | 8080 | 统一入口，反向代理 |
| Higress Console | 8001 | 管理控制台 |
| Tuwunel | 6167 | Matrix Homeserver |
| Element Web | 8088 | IM Web 客户端 |
| MinIO | 9000/9001 | 文件存储 |

## 与 OpenClaw 原生的区别

HiClaw 基于 OpenClaw 构建，将其从单进程多 Agent 框架扩展为完整的托管 Agent 团队平台：

| 特性 | OpenClaw 原生 | HiClaw |
|------|--------------|--------|
| **部署方式** | 单进程，共享网关 | 分布式容器，独立 Agent |
| **拓扑结构** | 扁平对等 | 层级制 Manager + Workers |
| **通信渠道** | 内部消息总线 | Matrix 房间（IM 协议） |
| **人工可见性** | 可选 | **内置** - 人类在每个房间中 |
| **凭证管理** | 每个 Agent 持有凭证 | 集中在网关，Agent 只持有令牌 |
| **Agent 创建** | 手动配置 + 重启 | 对话式创建 |

## 快速开始

### 前置条件

- Docker 已安装
- LLM API Key（如通义千问、OpenAI）
- （可选）GitHub Personal Access Token

### 一键安装

```bash
# 交互式安装
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)

# 或克隆后安装
git clone https://github.com/higress-group/hiclaw.git && cd hiclaw
HICLAW_LLM_API_KEY="sk-xxx" make install
```

### 安装后步骤

1. 配置 DNS：添加到 `/etc/hosts`
   ```
   127.0.0.1 matrix-local.hiclaw.io matrix-client-local.hiclaw.io aigw-local.hiclaw.io fs-local.hiclaw.io
   ```

2. 打开 Element Web：`http://matrix-client-local.hiclaw.io:8080`

3. 使用管理员账号登录

4. Manager 会主动问候并介绍自身能力

## 相关链接

- **GitHub 仓库**: [https://github.com/higress-group/HiClaw](https://github.com/higress-group/HiClaw)
- **快速入门**: [docs/quickstart.md](https://github.com/higress-group/HiClaw/blob/main/docs/quickstart.md)
- **架构文档**: [docs/architecture.md](https://github.com/higress-group/HiClaw/blob/main/docs/architecture.md)
