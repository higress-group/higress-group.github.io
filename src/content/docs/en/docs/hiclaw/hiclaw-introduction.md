---
title: "HiClaw Introduction"
description: "HiClaw product introduction and core feature overview"
date: "2025-12-11"
category: "article"
keywords: ["HiClaw", "Introduction", "Product", "Agent", "AI"]
authors: "Higress Team"
---

# HiClaw Introduction

**HiClaw is an open-source Collaborative Multi-Agent OS** that enables transparent, human-in-the-loop task coordination through Matrix rooms. Built on a **Manager-Workers architecture**, it allows humans to coordinate multiple Worker Agents to accomplish complex tasks, accelerating the realization of OPOC (One Person One Company) and enterprise digital workforce deployment.

## Core Features

### 🦞 Customizable "Claws"

Each Claw supports user customization and can be an OpenClaw, CoPaw, NanoClaw, ZeroClaw, or a custom enterprise Agent. The system comes pre-installed with OpenClaw.

### 🧬 Dedicated Manager Claw Role

Introduces a dedicated Manager Claw role, eliminating the need for humans to manually manage each Worker and significantly reducing management overhead.

### ☎️ Native Matrix Communication

Uses the Element IM client and Tuwunel IM server (based on the Matrix real-time communication protocol). Compared to enterprise IM solutions (such as DingTalk or Feishu/Lark), there's no need for complex integration or approval processes — experience seamless model service interaction right away.

### 📦 Shared File System (MinIO)

Integrates MinIO as a shared file system for inter-Agent information exchange, supporting human collaboration with shared memory stored directly on the file system.

### 🔐 Secure Entry via Higress AI Gateway

Integrates Higress AI Gateway to centrally manage entry points and credentials, significantly reducing security risks and eliminating user concerns about the security of native "Lobster" (OpenClaw) deployments.

## Why Choose HiClaw

### Enterprise-Grade Security

Worker Agents never hold real API Keys or GitHub PATs — they only use consumer tokens (similar to "employee badges"). Even if a Worker Agent is compromised, attackers cannot obtain any real credentials.

### Multi-Agent Group Chat Network

The Manager Agent intelligently decomposes tasks and coordinates multiple Worker Agents for parallel execution, significantly enhancing the ability to handle complex workflows.

### Matrix Protocol Driven

Built on the open Matrix IM protocol, all Agent communication is transparent and auditable. The system natively supports distributed deployment and federated communication.

### Full Human Oversight

Humans can enter any Matrix room at any time to observe Agent conversations, intervene in real-time, or correct Agent behavior, ensuring safety and control.

### Truly Out-of-the-Box IM Experience

Comes with a built-in Matrix server — no need to apply for DingTalk or Feishu/Lark bots, no waiting for internal approvals. Open your browser to use Element Web, or command your Agents anytime, anywhere via mobile Matrix clients (such as Element or FluffyChat) on iOS, Android, and Web.

### Manager-Worker Architecture

A clear two-tier Manager-Worker architecture with well-defined responsibilities. Easy to extend and customize Worker Agents for different scenarios, with support for managing CoPaw, NanoClaw, ZeroClaw, or custom enterprise Agents.

### One-Click Launch

A single `curl | bash` command completes all setup — Higress AI Gateway, Matrix server, file storage, Web client, and the Manager Agent itself.

### Skills Ecosystem

Workers can pull skills on demand from [skills.sh](https://skills.sh) (80,000+ community skills). Safe to use because Workers cannot access real credentials.

## Architecture Overview

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

### Component Description

| Component | Role |
|-----------|------|
| Higress AI Gateway | LLM proxy, MCP Server hosting, credential management |
| Tuwunel (Matrix) | IM server for all Agent + Human communication |
| Element Web | Browser client, zero configuration |
| MinIO | Centralized file storage, Workers are stateless |
| OpenClaw | Agent runtime with Matrix plugin and skills |

## HiClaw vs Native OpenClaw

| Feature | Native OpenClaw | HiClaw |
|---------|----------------|--------|
| **Deployment** | Single process | Distributed containers |
| **Agent Creation** | Manual configuration + restart | Conversational creation |
| **Credential Management** | Each Agent holds credentials | Workers only hold consumer tokens |
| **Human Visibility** | Optional | **Built-in** — humans in every room |
| **Mobile Access** | Depends on channel setup | Any Matrix client, zero configuration |
| **Monitoring** | None | Manager heartbeat, visible in rooms |

## Security Model

```
Worker (only holds consumer token)
    → Higress AI Gateway (holds real API keys, GitHub PAT)
        → LLM API / GitHub API / MCP Servers
```

Workers only see their consumer tokens. The Gateway handles all real credentials. The Manager knows what Workers are doing but also never touches actual keys.

## Human in the Loop

Every Matrix Room includes you, the Manager, and the relevant Workers. You can intervene at any time:

```
You: @bob hold on, change the password rule to minimum 8 characters
Bob: Got it, updated.
Alice: Frontend validation has been updated too.
```

No black boxes. No hidden inter-Agent calls.

## Related Links

- **Official Website**: [https://hiclaw.io/](https://hiclaw.io/)
- **GitHub Repository**: [https://github.com/higress-group/HiClaw](https://github.com/higress-group/HiClaw)
- **Quick Start**: [docs/quickstart.md](https://github.com/higress-group/HiClaw/blob/main/docs/quickstart.md)
- **Architecture Documentation**: [docs/architecture.md](https://github.com/higress-group/HiClaw/blob/main/docs/architecture.md)
