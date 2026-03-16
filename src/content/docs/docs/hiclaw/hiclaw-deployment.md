---
title: "HiClaw 部署指南"
description: "HiClaw 快速部署与安装配置指南"
date: "2025-12-12"
category: "article"
keywords: ["HiClaw", "部署", "安装", "Docker"]
authors: "Higress Team"
---

# HiClaw 部署指南

## 环境要求

**前置条件**：Docker Desktop (Windows/macOS) 或 Docker Engine (Linux)。如果在虚拟机（如 ECS 或云桌面）上部署，请使用 Linux 操作系统。如有图形界面需求，推荐 Ubuntu。

**注意**：官方镜像包目前不支持虚拟机上的 Windows 系统，因为 VM 环境中的 Windows 不是 Linux Container。

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows / macOS)
- [Docker Engine](https://docs.docker.com/engine/install/) (Linux) 或 [Podman Desktop](https://podman-desktop.io/) (替代方案)

**资源要求**：最低 2 CPU 核心和 4 GB 内存。如果要部署多个 Workers 以获得更强大的 Agent Teams 体验，**推荐 4 CPU 核心和 8 GB 内存** —— OpenClaw 的内存占用相对较高。在 Docker Desktop 中，前往 Settings → Resources 调整。

---

## 安装流程

### Step 1: 打开终端

**macOS 安装命令**：
```bash
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

**Windows (支持 PowerShell 5+) 安装命令**：
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; $wc=New-Object Net.WebClient; $wc.Encoding=[Text.Encoding]::UTF8; iex $wc.DownloadString('https://higress.ai/hiclaw/install.ps1')
```

### Step 2: 选择语言

选择 Chinese（中文）或 English（英文）。

### Step 3: 选择安装模式

推荐选择 **Alibaba Cloud Bailian Quick Install**（阿里云百炼快速安装）。

### Step 4: 选择 LLM 提供商

选择 **Bailian**（百炼）。你也可以连接其他支持 OpenAPI 协议的模型服务。注意：暂不支持 Anthropic 协议。

### Step 5: 选择模型接口

百炼 Coding Plan 接口与通用百炼接口不同。推荐选择 **Coding Plan 接口**。[百炼 Coding Plan](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?source_channel=Bk5s5ordYR&tab=coding-plan#/efm/index)。

### Step 6: 选择模型系列

如果 Step 5 选择了百炼 Coding Plan，默认模型为 **qwen3.5-plus**。Matrix 房间建立后，你可以向 Manager 发送命令切换到其他模型。

### Step 7: 测试 API 连通性

如果测试失败，请检查模型 API 配置（例如确保密钥粘贴完整，没有多余空格）。如有需要，咨询你的模型提供商。

### Step 8: 选择网络访问模式

- **Local Use Only**：仅本地使用
- **Allow External Access**：允许外部访问（如与同事创建 Matrix 房间）

选择后按 Enter。系统将使用默认值配置：
- 端口号
- 网关主机端口
- Higress 控制台主机端口
- Matrix 域名
- Element Web 直接访问端口
- 文件系统域名

### Step 9: GitHub 集成和 Skills Registry 配置

对于以下配置，直接按 **Enter** 接受默认配置：
- GitHub Integration
- Skills Registry
- Data Persistence
- Docker Volumes
- Manager Workspace

### Step 10: 选择 Manager Worker 运行时

目前支持 **OpenClaw** 和 **CoPaw**，未来将支持 NanoClaw、ZeroClaw 等。

### Step 11: 等待安装完成

完成后会自动生成登录密码。

### Step 12: 登录使用

1. 在浏览器中访问 http://127.0.0.1:18088/#/login
2. 使用用户名和密码登录 Element
3. 开始使用 "Claw"！告诉 Manager 创建 Workers 并分配任务

**移动端访问**：
- 需要美区 Apple ID（或等效区域设置）下载 FluffyChat 或 Element Mobile（这些特定 IM 客户端支持 Matrix 协议）
- 下载后，连接到你的 Matrix 服务器地址，随时随地管理你的 Agent 团队

**注意**：HiClaw 内置 Higress AI Gateway，负责管理模型 API Keys 和保护入口流量。模型 API Keys 的切换和添加，以及路由、域名和证书的管理，都可以在 Higress Console 中完成。

---

## 升级流程

要更新到新版本，只需在终端执行以下命令即可**默认原地升级到最新版本**：

```bash
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

升级时会提示选择：
- **In-place Upgrade（原地升级）**：保留所有现有数据和配置
- **Fresh Re-installation（全新重装）**：将删除所有数据

### 升级到特定版本

```bash
HICLAW_VERSION=v1.0.5 bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

---

## 方式二：克隆源码安装

```bash
git clone https://github.com/higress-group/hiclaw.git && cd hiclaw
HICLAW_LLM_API_KEY="sk-xxx" make install
```

### 非交互模式

```bash
# 使用全部默认值
HICLAW_NON_INTERACTIVE=1 HICLAW_LLM_API_KEY="sk-xxx" make install

# 自定义端口
HICLAW_PORT_GATEWAY=8080 HICLAW_PORT_CONSOLE=8001 HICLAW_LLM_API_KEY="sk-xxx" make install

# 指定外部数据目录
HICLAW_DATA_DIR=~/hiclaw-data HICLAW_LLM_API_KEY="sk-xxx" make install

# 预设所有配置
HICLAW_LLM_PROVIDER=qwen \
HICLAW_DEFAULT_MODEL=qwen3.5-plus \
HICLAW_LLM_API_KEY="sk-xxx" \
HICLAW_ADMIN_USER=admin \
HICLAW_ADMIN_PASSWORD=yourpassword \
HICLAW_TIMEZONE=Asia/Shanghai \
make install
```

### 可配置项

| 环境变量 | 说明 | 默认值 |
|---------|------|--------|
| `HICLAW_LLM_PROVIDER` | LLM 提供商 | qwen |
| `HICLAW_DEFAULT_MODEL` | 默认模型 | qwen3.5-plus |
| `HICLAW_LLM_API_KEY` | LLM API Key | （必填） |
| `HICLAW_ADMIN_USER` | 管理员用户名 | admin |
| `HICLAW_ADMIN_PASSWORD` | 管理员密码 | （自动生成） |
| `HICLAW_PORT_GATEWAY` | 网关端口 | 8080 |
| `HICLAW_PORT_CONSOLE` | 控制台端口 | 8001 |
| `HICLAW_DATA_DIR` | 数据目录 | ~/hiclaw-manager |

---

## DNS 配置

安装完成后，添加以下内容到 `/etc/hosts`：

```
127.0.0.1 matrix-local.hiclaw.io matrix-client-local.hiclaw.io aigw-local.hiclaw.io fs-local.hiclaw.io
```

---

## 访问服务

| 服务 | 地址 | 说明 |
|------|------|------|
| Element Web | http://matrix-client-local.hiclaw.io:8080 | IM 客户端 |
| Higress Console | http://localhost:8001 | 网关控制台 |
| MinIO Console | http://localhost:9001 | 文件存储控制台 |

---

## 验证安装

### 检查容器状态

```bash
docker ps | grep hiclaw-manager
```

### 登录 Element Web

1. 打开 http://matrix-client-local.hiclaw.io:8080
2. 使用管理员账号登录
3. Manager 会主动问候并介绍能力

### 创建第一个 Worker

通过 Element Web 或 CLI：

```bash
make replay TASK="创建一个名为 alice 的 Worker，负责前端开发，直接创建。"
```

---

## 常用命令

```bash
# 发送任务给 Manager
make replay TASK="你的任务描述"

# 查看最新对话日志
make replay-log

# 卸载所有内容
make uninstall

# 清理容器和镜像
make clean
```

---

## 故障排查

### 容器无法启动

检查 Docker 日志：
```bash
docker logs hiclaw-manager-agent
```

### Manager 容器启动失败

查看 agent 日志详情：
```bash
docker exec -it hiclaw-manager cat /var/log/hiclaw/manager-agent.log
```

常见问题（启动超时、局域网访问等）请参考：[docs/zh-cn/faq.md](https://github.com/higress-group/HiClaw/blob/main/docs/zh-cn/faq.md)

### 无法访问 Element Web

1. 确认 DNS 配置正确
2. 检查端口是否被占用
3. 确认容器正常运行

### Manager 无响应

1. 检查 LLM API Key 是否有效
2. 查看容器日志排查错误
3. 尝试重启容器

---

## 更多资源

- **官网**: [https://hiclaw.io/](https://hiclaw.io/)
- **GitHub 仓库**: [https://github.com/higress-group/HiClaw](https://github.com/higress-group/HiClaw)
- **快速入门**: [docs/quickstart.md](https://github.com/higress-group/HiClaw/blob/main/docs/quickstart.md)
- **架构文档**: [docs/architecture.md](https://github.com/higress-group/HiClaw/blob/main/docs/architecture.md)
- **开发指南**: [docs/development.md](https://github.com/higress-group/HiClaw/blob/main/docs/development.md)
- **社区支持**: [Discord](https://discord.gg/NVjNA4BAVw) / 钉钉群
