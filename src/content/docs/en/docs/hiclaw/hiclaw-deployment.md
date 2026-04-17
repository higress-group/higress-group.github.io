---
title: "HiClaw Deployment Guide"
description: "HiClaw Quick Deployment and Installation Configuration Guide"
date: "2025-12-12"
category: "article"
keywords: ["HiClaw", "Deployment", "Installation", "Docker"]
authors: "Higress Team"
---

# HiClaw Deployment Guide

## Environment Requirements

**Prerequisites**: Docker Desktop (Windows/macOS) or Docker Engine (Linux). If deploying on a virtual machine (e.g., ECS or cloud desktop), please use a Linux operating system. If you need a graphical interface, Ubuntu is recommended.

**Note**: The official image packages currently do not support Windows on virtual machines, because Windows in a VM environment does not use Linux Containers.

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Windows / macOS)
- [Docker Engine](https://docs.docker.com/engine/install/) (Linux) or [Podman Desktop](https://podman-desktop.io/) (Alternative)

**Resource Requirements**: Minimum 2 CPU cores and 4 GB memory. If you want to deploy multiple Workers for a more powerful Agent Teams experience, **4 CPU cores and 8 GB memory are recommended** — OpenClaw has relatively high memory usage. In Docker Desktop, go to Settings → Resources to adjust.

---

## Installation Process

### Step 1: Open Terminal

**macOS Installation Command**:
```bash
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

**Windows (PowerShell 5+ supported) Installation Command**:
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; $wc=New-Object Net.WebClient; $wc.Encoding=[Text.Encoding]::UTF8; iex $wc.DownloadString('https://higress.ai/hiclaw/install.ps1')
```

### Step 2: Select Language

Choose Chinese or English.

### Step 3: Select Installation Mode

It is recommended to select **Alibaba Cloud Bailian Quick Install**.

### Step 4: Select LLM Provider

Select **Bailian**. You can also connect to other model services that support the OpenAPI protocol. Note: The Anthropic protocol is not currently supported.

### Step 5: Select Model Interface

The Bailian Coding Plan interface differs from the general Bailian interface. It is recommended to select the **Coding Plan Interface**. [Bailian Coding Plan](https://modelstudio.console.alibabacloud.com/ap-southeast-1/?source_channel=Bk5s5ordYR&tab=coding-plan#/efm/index).

### Step 6: Select Model Series

If you selected Bailian Coding Plan in Step 5, the default model is **qwen3.5-plus**. After the Matrix room is established, you can send a command to the Manager to switch to other models.

### Step 7: Test API Connectivity

If the test fails, check the model API configuration (e.g., ensure the key is pasted completely without extra spaces). If needed, consult your model provider.

### Step 8: Select Network Access Mode

- **Local Use Only**: For local use only
- **Allow External Access**: Allow external access (e.g., creating Matrix rooms with colleagues)

Press Enter after selecting. The system will configure with default values for:
- Port number
- Gateway host port
- Higress Console host port
- Matrix domain
- Element Web direct access port
- File system domain

### Step 9: GitHub Integration and Skills Registry Configuration

For the following configurations, press **Enter** directly to accept the default settings:
- GitHub Integration
- Skills Registry
- Data Persistence
- Docker Volumes
- Manager Workspace

### Step 10: Select Manager Worker Runtime

Currently **OpenClaw** and **CoPaw** are supported, with NanoClaw, ZeroClaw, and others coming in the future.

### Step 11: Wait for Installation to Complete

A login password will be automatically generated upon completion.

### Step 12: Log In and Start Using

1. Visit http://127.0.0.1:18088/#/login in your browser
2. Log in to Element using your username and password
3. Start using "Claw"! Tell the Manager to create Workers and assign tasks

**Mobile Access**:
- A US Apple ID (or equivalent regional settings) is required to download FluffyChat or Element Mobile (these specific IM clients support the Matrix protocol)
- After downloading, connect to your Matrix server address to manage your Agent team anytime, anywhere

**Note**: HiClaw has a built-in Higress AI Gateway responsible for managing model API Keys and protecting ingress traffic. Switching and adding model API Keys, as well as managing routes, domains, and certificates, can all be done in the Higress Console.

---

## Upgrade Process

To update to a new version, simply run the following command in the terminal to **perform an in-place upgrade to the latest version by default**:

```bash
bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

During the upgrade, you will be prompted to choose:
- **In-place Upgrade**: Retains all existing data and configurations
- **Fresh Re-installation**: Will delete all data

### Upgrade to a Specific Version

```bash
HICLAW_VERSION=v1.0.5 bash <(curl -sSL https://higress.ai/hiclaw/install.sh)
```

---

## Method 2: Clone Source Code Installation

```bash
git clone https://github.com/higress-group/hiclaw.git && cd hiclaw
HICLAW_LLM_API_KEY="sk-xxx" make install
```

### Non-Interactive Mode

```bash
# Use all default values
HICLAW_NON_INTERACTIVE=1 HICLAW_LLM_API_KEY="sk-xxx" make install

# Custom ports
HICLAW_PORT_GATEWAY=8080 HICLAW_PORT_CONSOLE=8001 HICLAW_LLM_API_KEY="sk-xxx" make install

# Specify external data directory
HICLAW_DATA_DIR=~/hiclaw-data HICLAW_LLM_API_KEY="sk-xxx" make install

# Preset all configurations
HICLAW_LLM_PROVIDER=qwen \
HICLAW_DEFAULT_MODEL=qwen3.5-plus \
HICLAW_LLM_API_KEY="sk-xxx" \
HICLAW_ADMIN_USER=admin \
HICLAW_ADMIN_PASSWORD=yourpassword \
HICLAW_TIMEZONE=Asia/Shanghai \
make install
```

### Configurable Options

| Environment Variable | Description | Default Value |
|---------|------|--------|
| `HICLAW_LLM_PROVIDER` | LLM Provider | qwen |
| `HICLAW_DEFAULT_MODEL` | Default Model | qwen3.5-plus |
| `HICLAW_LLM_API_KEY` | LLM API Key | (Required) |
| `HICLAW_ADMIN_USER` | Admin Username | admin |
| `HICLAW_ADMIN_PASSWORD` | Admin Password | (Auto-generated) |
| `HICLAW_PORT_GATEWAY` | Gateway Port | 8080 |
| `HICLAW_PORT_CONSOLE` | Console Port | 8001 |
| `HICLAW_DATA_DIR` | Data Directory | ~/hiclaw-manager |

---

## DNS Configuration

After installation, add the following to `/etc/hosts`:

```
127.0.0.1 matrix-local.hiclaw.io matrix-client-local.hiclaw.io aigw-local.hiclaw.io fs-local.hiclaw.io
```

---

## Accessing Services

| Service | Address | Description |
|------|------|------|
| Element Web | http://matrix-client-local.hiclaw.io:8080 | IM Client |
| Higress Console | http://localhost:8001 | Gateway Console |
| MinIO Console | http://localhost:9001 | File Storage Console |

---

## Verifying Installation

### Check Container Status

```bash
docker ps | grep hiclaw-manager
```

### Log In to Element Web

1. Open http://matrix-client-local.hiclaw.io:8080
2. Log in with the admin account
3. The Manager will proactively greet you and introduce its capabilities

### Create Your First Worker

Via Element Web or CLI:

```bash
make replay TASK="创建一个名为 alice 的 Worker，负责前端开发，直接创建。"
```

---

## Common Commands

```bash
# Send a task to the Manager
make replay TASK="Your task description"

# View the latest conversation log
make replay-log

# Uninstall everything
make uninstall

# Clean up containers and images
make clean
```

---

## Troubleshooting

### Container Fails to Start

Check Docker logs:
```bash
docker logs hiclaw-manager-agent
```

### Manager Container Fails to Start

View agent log details:
```bash
docker exec -it hiclaw-manager cat /var/log/hiclaw/manager-agent.log
```

For common issues (startup timeout, LAN access, etc.), refer to: [docs/zh-cn/faq.md](https://github.com/higress-group/HiClaw/blob/main/docs/zh-cn/faq.md)

### Cannot Access Element Web

1. Verify DNS configuration is correct
2. Check if the port is occupied
3. Confirm containers are running properly

### Manager Not Responding

1. Check if the LLM API Key is valid
2. Review container logs for errors
3. Try restarting the container

---

## More Resources

- **Official Website**: [https://hiclaw.io/](https://hiclaw.io/)
- **GitHub Repository**: [https://github.com/higress-group/HiClaw](https://github.com/higress-group/HiClaw)
- **Quick Start**: [docs/quickstart.md](https://github.com/higress-group/HiClaw/blob/main/docs/quickstart.md)
- **Architecture Documentation**: [docs/architecture.md](https://github.com/higress-group/HiClaw/blob/main/docs/architecture.md)
- **Development Guide**: [docs/development.md](https://github.com/higress-group/HiClaw/blob/main/docs/development.md)
- **Community Support**: [Discord](https://discord.gg/NVjNA4BAVw) / DingTalk Group
