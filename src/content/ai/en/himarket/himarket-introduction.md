---
title: "HiMarket Introduction"
description: "HiMarket product introduction and core feature overview"
date: "2025-12-11"
category: "article"
keywords: ["HiMarket", "Introduction", "Product"]
authors: "Higress Team"
---

# HiMarket Introduction

As the AI wave reshapes industries across the board, numerous enterprises need to implement AI scenarios internally, gradually upgrading their architecture to AI-native. In actual implementation, many challenges arise:

+ How to manage uniformly when various teams within the enterprise use different models dispersedly, causing internal duplication and scale expansion?
+ When individuals within the enterprise use public cloud models and MCP obtained from public networks, are they secure? Will they leak company data?
+ How to measure enterprise AI costs and effectiveness? How to quantify SLA and token usage? Can they be unified, quantifiable, and observable?
+ How to allocate accounts and permissions for managing private models and public cloud models when the entire enterprise aims to improve efficiency with AI?

When enterprises begin large-scale AI application deployment, they often encounter such challenges. As these resources exceed a certain scale, problems become increasingly complex, ultimately constraining further AI application development.

## 1. What is HiMarket?

HiMarket was born to solve these problems. It is an AI open platform built on the Higress AI Gateway, designed to help enterprises quickly build private AI capability marketplaces and uniformly manage AI resources such as Models, MCP Servers, and Agents. HiMarket provides a complete solution from resource management to developer ecosystem construction, serving as the shortest path for enterprises to connect internally with AI and unifying the enterprise's internal AI entry point.

<div align="center">

![](https://github.com/user-attachments/assets/f410002b-4932-4dc8-baf9-226709be7246)

</div>

## 2. Use Cases

## AI Scenarios (For Enterprise Employees)

HiMarket provides HiChat capabilities, replacing search with Chat mode for market research, product research, and generating operational images.

<div align="center">

![](https://github.com/user-attachments/assets/1d17f995-cf79-4ab9-bc36-8ccde5afcd47)

</div>

+ **Enterprise-wide AI Entry Point**: Through the HiMarket AI open platform, it simultaneously solves two problems: employees not knowing which models to use, and how enterprises can control employee model usage. All employees can use AI model capabilities through this entry point, and enterprises can conduct overall security compliance audits, ensuring safe and controllable enterprise and employee AI usage scope.
+ **Multi-model Comparison**: Select multiple models from the model marketplace, input once to compare multiple models, quickly and directly compare model return content differences, and select optimal content.
+ **Conversation History**: Facilitates employee management of historical conversation records, enables quick conversation backtracking based on historical information, and plans to form knowledge points from conversations that can be shared horizontally, improving data sharing efficiency.
+ **Internet Search**: Through the experience center, you can configure internet search capabilities. After configuring Higress AI Gateway's internet search capability, all models can support internet search. The AI Gateway will pass corresponding search content to the model for extraction, expanding real-time data capabilities.
+ **Support for MCP Tool Association**: The experience center chat box supports association with the MCP marketplace, enabling real-time rapid use of MCP capabilities, quick testing and verification of MCP capabilities themselves, and supports rapid configuration transformation of enterprise APIs into MCP protocol, combined with models for quick verification.

## AI Marketplace (For Developers)

HiMarket supports building a complete AI marketplace covering Agents, MCP Servers, and Models, ensuring enterprise AI resources are no longer scattered but gathered on one platform in a standardized manner.

<div align="center">

![](https://github.com/user-attachments/assets/9caefd86-7bbe-44c9-8c77-b53b74ff05fb)

</div>

+ **Agent Marketplace**: Supports packaging complex AI Agent applications for listing, can integrate with Agent development platforms like AgentScope. For example, Agents built through AgentScope can be registered to HiMarket with one click, and other developers can use them directly after subscription without building from scratch. Supports one-click publishing of cross-framework and cross-language agents to the Agent marketplace.

<div align="center">

![](https://github.com/user-attachments/assets/4c0da704-47da-484c-9d18-1711084d72a5)

</div>

+ **MCP Marketplace**: Supports accessing MCP Servers from different platforms and transforming external APIs into standardized MCP Servers. After developer subscription, AI applications can easily call external capabilities.

<div align="center">

![](https://github.com/user-attachments/assets/69184181-8cfe-498c-a0c5-494efa55d72e)

</div>

+ **Model Marketplace**: Supports rapid access to public cloud models and enterprise-developed private models. The platform uses Higress as a gateway proxy for model services, providing protection capabilities such as content security and token rate limiting, ensuring secure and compliant external opening of model services.

<div align="center">

![](https://github.com/user-attachments/assets/2ed00358-1031-4146-8eb0-2e372b89d82e)

</div>

+ **AI Asset Lifecycle Management**: Administrators connect resources to the platform, configure access policies and usage documentation, and publish them; developers browse the portal, subscribe, and obtain call credentials for subscription use.

## AI Governance (For AI Maintainers)

HiMarket achieves centralized governance of AI resources, providing comprehensive security control and collaboration capabilities:

+ **Security and Compliance Assurance**: Uniformly controls access to all AI resources through the Higress Gateway, supporting content security detection, sensitive information filtering, and access permission control, ensuring enterprise AI capabilities meet security and compliance requirements when opened externally.
+ **Efficient Collaboration and Sharing**: Breaks down "capability silos" between teams. Once a model or tool is accessed, it can be subscribed and reused by multiple departments, avoiding duplicate procurement and duplicate development.
+ **Lower Usage Barriers**: Developers don't need to individually interface with different vendor APIs. HiMarket provides unified protocol standards and ready-to-use call credentials, greatly reducing access costs, allowing teams to focus more on business innovation rather than infrastructure construction.



## 3. Product Advantages

### Enterprise-grade Capabilities

HiMarket has built-in comprehensive enterprise-level management capabilities, ensuring secure opening and efficient operation of AI resources.

+ **Product Management:** Administrators can configure independent authentication and visibility policies for different API products, while providing protection capabilities such as traffic control and IP whitelisting, ensuring service security and stability.
+ **Observation and Analysis:** Provides a global observation dashboard from the administrator's perspective, displaying AI API call trends, popular product rankings, abnormal traffic warnings, etc. Supports multi-dimensional analysis by time, product type, developer, etc., providing data basis for enterprise operation optimization.
+ **Metering and Billing:** Supports multiple metering modes based on tokens, call counts, etc., automatically calculates resource consumption and generates bill details, serving both internal enterprise cost accounting and external commercial operations.
+ **Version Management:** Supports multi-version parallel operation of API products. Administrators can release new versions, maintain old versions, and smoothly migrate users. Through version comparison, grayscale release, and quick rollback functions, it ensures safe and stable product iteration.

<div align="center">

![](https://github.com/user-attachments/assets/07e120fa-20e9-4eff-a30d-6c8b2651b578)

</div>

### Rich Observation Capabilities

Observation and analysis (currently v0.5.0 version depends on Alibaba Cloud commercial SLS, open-source version observation and analysis implementation is planned for future versions):

<div align="center">

![](https://github.com/user-attachments/assets/d5e7b54e-008a-439e-8753-6cd7d4f304fe)

</div>

### Flexible Extension Capabilities


To quickly integrate with existing enterprise systems, HiMarket provides flexible customization capabilities, including:

+ **Portal Branding:** Administrators can configure custom domains, logos, theme colors, layout styles, etc. for the portal, and flexibly configure homepage modules, product categories, recommendation columns, and other functional areas.
+ **Identity Authentication:** Supports built-in username/password and enterprise OIDC authentication methods, can seamlessly integrate with enterprise SSO, IDaaS, and other identity systems, achieving unified user management and identity authentication.
+ **Approval Process:** Key processes such as developer registration, credential application, and API subscription can be flexibly configured for automatic or manual approval.

<div align="center">

![](https://github.com/user-attachments/assets/06112d40-0883-4d32-8689-c0ed4c45b459)

</div>

## 4. Quick Experience

HiMarket provides multiple deployment methods to meet different scenario requirements:

+ Local Quick Experience: [HiMarket Local Deployment Guide](https://github.com/higress-group/himarket/blob/main/README.md).
+ Docker Compose Deployment: [HiMarket Docker Deployment Guide](https://github.com/higress-group/himarket/blob/main/deploy/docker/Docker%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E.md).
+ Kubernetes Deployment: [HiMarket Helm Deployment Guide](https://github.com/higress-group/himarket/blob/main/deploy/helm/Helm%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E.md).

### One-Click Deployment, Complete Out-of-the-Box Solution

HiMarket, Higress, and Nacos three major components are automatically orchestrated and deployed without manual intervention. The deployment process automatically completes example MCP Server registration, configuration, and publishing, allowing you to experience the HiMarket capability marketplace immediately after deployment. Whether Docker Compose or Kubernetes deployment, only one command is needed:

```bash
./deploy.sh install
```

The deployment script will automatically complete all the following work:

+ **Core Component Deployment**: Automatically starts MySQL, Nacos configuration center, and Higress Gateway service
+ **Application Body Deployment**: Deploys the complete HiMarket service suite (management console, developer portal, backend service)
+ **Intelligent Initialization**: Automatically creates administrator accounts, configures example MCP Servers, and publishes demo API products
+ **Ready to Use**: After deployment, you can immediately access the management console and developer portal without any manual configuration

The solution supports flexible scenario adaptation:

+ Supports using built-in MySQL or connecting to existing databases
+ Supports using Alibaba Cloud commercial MSE service and AI Gateway service
+ Supports `./deploy.sh himarket-only` to deploy only HiMarket itself

For detailed steps, please refer to: [HiMarket Docker One-Click Deployment Guide](https://github.com/higress-group/himarket/blob/main/deploy/docker/Docker%E9%83%A8%E7%BD%B2%E8%84%9A%E6%9C%AC%E8%AF%B4%E6%98%8E.md), [HiMarket Helm One-Click Deployment Guide](https://github.com/higress-group/himarket/blob/main/deploy/helm/Helm%E9%83%A8%E7%BD%B2%E8%84%9A%E6%9C%AC%E8%AF%B4%E6%98%8E.md)



## 5. HiMarket Roadmap

<div align="center">

![](https://github.com/user-attachments/assets/ebc9697c-c52c-4bd0-b71a-36bd3b9934f1)

</div>

## 6. Welcome to Contribute

HiMarket is an open-source project jointly initiated by multiple open-source communities. Core participants include teams from Alibaba Cloud, Ant Digital, Amap, Taobao, etc. It aims to help enterprises quickly build AI open platforms through open source, providing ready-to-use capabilities.

HiMarket Repository:

[https://github.com/higress-group/HiMarket](https://github.com/higress-group/himarket)  
MCP Financial-grade Marketplace implemented based on HiMarket

[https://antdigital.com/products/MCP](https://antdigital.com/products/MCP)



HiMarket DingTalk Community Group (Group 2): 163370001036

<div align="center">

![](https://github.com/user-attachments/assets/b0705600-df08-42ef-9e1b-d28c77896415)

</div>

[https://qr.dingtalk.com/action/joingroup?code=v1,k1,d+MJWsDVtfHq6XanvQEUxsVX3vVL1m+7DWfkoUkYxVM=&_dt_no_comment=1&origin=11](https://qr.dingtalk.com/action/joingroup?code=v1,k1,d+MJWsDVtfHq6XanvQEUxsVX3vVL1m+7DWfkoUkYxVM=&_dt_no_comment=1&origin=11)



Recommended Article:

"AgentScope Java v1.0 Released, Making Java Developers Build Enterprise-level Agentic Applications with Ease" [https://mp.weixin.qq.com/s/vtb3t0JnSTau3XM6wJMEkw](https://mp.weixin.qq.com/s/vtb3t0JnSTau3XM6wJMEkw)



