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

- Docker 已安装并运行
- LLM API Key（如通义千问、OpenAI）
- （可选）GitHub Personal Access Token，用于 GitHub 协作功能

## 快速安装

### 方式一：一键安装脚本

```bash
# 交互式安装
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

安装脚本会自动：
1. 检测时区，选择最优镜像源
2. 交互式配置（LLM 提供商、API Key、端口等）
3. 等待 Manager 就绪后退出
4. 发送欢迎消息

### 方式二：克隆源码安装

```bash
git clone https://github.com/higress-group/hiclaw.git && cd hiclaw
HICLAW_LLM_API_KEY="sk-xxx" make install
```

## 安装选项

### 环境变量配置

```bash
# 非交互模式（使用全部默认值）
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

## 升级与重装

在已有安装上再次运行安装脚本时，会提示选择：

```
Choose an action:
  1) In-place upgrade (keep data, workspace, env file)
  2) Clean reinstall (remove all data, start fresh)
  3) Cancel
```

- **原地升级**：保留所有数据，仅重建 Manager 容器
- **全量重装**：删除所有内容，需手动确认

## DNS 配置

安装完成后，添加以下内容到 `/etc/hosts`：

```
127.0.0.1 matrix-local.hiclaw.io matrix-client-local.hiclaw.io aigw-local.hiclaw.io fs-local.hiclaw.io
```

## 访问服务

| 服务 | 地址 | 说明 |
|------|------|------|
| Element Web | http://matrix-client-local.hiclaw.io:8080 | IM 客户端 |
| Higress Console | http://localhost:8001 | 网关控制台 |
| MinIO Console | http://localhost:9001 | 文件存储控制台 |

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

## 故障排查

### 容器无法启动

检查 Docker 日志：
```bash
docker logs hiclaw-manager-agent
```

### 无法访问 Element Web

1. 确认 DNS 配置正确
2. 检查端口是否被占用
3. 确认容器正常运行

### Manager 无响应

1. 检查 LLM API Key 是否有效
2. 查看容器日志排查错误
3. 尝试重启容器

## 更多资源

- **GitHub 仓库**: [https://github.com/higress-group/HiClaw](https://github.com/higress-group/HiClaw)
- **快速入门**: [docs/quickstart.md](https://github.com/higress-group/HiClaw/blob/main/docs/quickstart.md)
- **架构文档**: [docs/architecture.md](https://github.com/higress-group/HiClaw/blob/main/docs/architecture.md)
- **开发指南**: [docs/development.md](https://github.com/higress-group/HiClaw/blob/main/docs/development.md)
