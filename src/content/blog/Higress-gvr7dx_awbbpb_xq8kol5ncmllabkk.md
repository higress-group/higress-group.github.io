---
title: "Higress 开源 Remote MCP Server 托管方案，并将上线 MCP 市场"
description: "Higress 开源 Remote MCP Server 托管方案，并将上线 MCP 市场"
date: "2025-04-01"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

**导读：**MCP Server 的实施存在着诸多挑战，特别是在认证授权、服务可靠性和可观测性方面，Higress 作为 AI 原生的 API 网关，提供了完整的开源 MCP Server 托管解决方案。即将上线的 MCP 市场，将大幅降低开发者构建 MCP Server 的时间和人力成本。

# 01 从事实标准迈向行业标准
MCP（Model Context Protocol）协议的生态发展正以前所未有的速度推进。近期，两大关键事件标志着 MCP 已从事实标准迈向行业标准：一方面，OpenAI 正式宣布跟进 Anthropic 的 MCP 协议，另一方面，Anthropic 发布了新版本 MCP 协议，在 Remote MCP Server 场景下实现了显著改进。

OpenAI CEO Sam Altman 在社交媒体上确认，OpenAI 将在旗下产品（包括ChatGPT桌面应用）中集成 Anthropic 的MCP协议。Altman 表示："MCP 的市场反响很好，我们也很高兴能在自家产品中支持这项协议。目前此协议已经在 Agents SDK 中开放，对于 ChatGPT 桌面版应用以及 Responses API 的支持也即将推出！"这一举措意味着开发者可以更轻松地构建能调用实时数据的智能助手，如企业级聊天机器人或自动化工作流。

与此同时，Anthropic 于2025年3月26日发布了 MCP 协议的全新修订版本。此次更新的核心亮点是 Streamable HTTP 传输机制，它不仅继承了 HTTP+SSE 的实时消息传输能力，还通过一系列优化使得连接更加稳定、数据传输更具弹性。新版协议采用单一 MCP 端点同时支持 HTTP POST 和 GET 请求，通过强制使用 Mcp-Session-Id 头实现会话管理，并支持批量请求、响应和通知，以及 SSE 流的可恢复性。

这两大事件的叠加效应正在加速 MCP 生态的繁荣发展。据统计，截至2025年2月，已有超过1000个社区构建的 MCP Server 可用。随着 OpenAI 的加入，MCP 协议有望成为连接 AI 模型与外部世界的通用标准，就像 USB、HTTP 或ODBC 在各自领域中的地位一样。

# 02 MCP Server 的应用场景
MCP Server 正在改变 AI 应用的能力边界，让 AI 从单纯的对话机器变成能够理解用户需求并帮助完成实际任务的智能助手。以下是 MCP Server 在不同领域的典型应用场景：

### 智能办公场景
在企业办公环境中，MCP Server 可以连接各种内部系统，如邮件服务器、日历、文档管理系统等，使AI助手能够：

+ 会议管理：自动记录会议内容，生成会议纪要，并根据讨论创建待办事项
+ 邮件处理：分类重要邮件，起草回复，设置提醒
+ 文档协作：在团队文档中查找信息，提供编辑建议，跟踪变更

例如，一位经理可以要求AI助手："整理上周所有销售会议的要点，并创建一个行动项目清单。"AI 助手通过 MCP Server 访问会议记录系统和项目管理工具，自动完成这一任务。

### 物联网(IoT)集成
在智能家居和工业物联网环境中，MCP Server 可以连接各种智能设备和传感器，实现：

+ 设备状态监控：实时跟踪设备运行状况，预测维护需求
+ 跨设备协同：协调多个设备共同完成复杂任务
+ 环境优化：根据用户偏好和使用模式自动调整环境参数

用户可以要求："当我明天早上7点起床时，提前20分钟开启咖啡机，并将客厅温度调整到22度。"AI 助手通过 MCP Server 与智能家居系统通信，安排这些任务。

### 开发者工具集成
软件开发团队可以利用 MCP Server 连接代码仓库、CI/CD 管道和项目管理工具，提升开发效率：

+ 代码辅助：根据项目上下文生成代码，提供重构建议
+ 自动化测试：生成测试用例，执行测试并分析结果
+ 项目管理：跟踪任务进度，分配资源，预测交付时间

开发者可以要求："分析我们的代码库，找出所有未处理的异常情况，并提供修复建议。"AI 助手通过 MCP Server 访问代码仓库，执行静态分析，并生成详细报告。

# 03 Local MCP Server 与 Remote MCP Server
随着 MCP 生态的发展，从 Local MCP Server 向 Remote MCP Server 的演进已成为一种趋势。为了更好地理解这一转变，我们需要先明确这两种 MCP Server 的概念和区别。

### Local MCP Server 与 Remote MCP Server 的概念
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1743478039334-9e449041-e461-4e52-8080-9eeeee78e773.webp)

Local MCP Server 是指在用户本地设备上运行的 MCP 服务器。在这种模式下，MCP 客户端（如Claude Desktop或Cursor）通过本地进程通信（stdin/stdout）与 MCP 服务器交互，服务器再连接到互联网上的各种 API 和服务。这种架构简单直接，适合个人开发者使用，但存在一些局限性。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1743478039222-488b91c3-83ea-4b4d-9a1a-64e6e5aff7cc.webp)

Remote MCP Server 则是部署在云端的 MCP 服务器，用户可以通过互联网访问。在这种模式下，MCP 客户端可以是更广泛的网页应用或移动应用，它们通过 HTTP 协议与远程 MCP 服务器通信。Remote MCP Server 通常集成了认证授权、状态管理、数据库访问等企业级功能，能够为多用户提供服务。

这种转变，解决了 Local MCP Server 在企业环境中的诸多局限性。

### Local MCP Server 的局限
Local MCP Server 虽然简单易用，但在企业级应用中面临诸多挑战：

+ 本地环境依赖：对用户本地环境有依赖，比如需要安装 python 或 docker 等执行环境来运行 MCP Server，对非技术用户不友好
+ 安全风险：企业不可能将敏感数据库凭证、API 密钥或其他关键访问令牌配置给每个员工的本地环境。这不仅违反最小权限原则，还大大增加了凭证泄露的风险。
+ 一致性问题：当多个用户需要访问相同的企业资源时，难以保证配置和权限的一致性，容易导致数据不一致或权限混乱。
+ 维护成本：为每个用户设备部署和维护 MCP Server 需要大量 IT 资源，版本更新、安全补丁和配置变更都需要在每台设备上单独执行。

### Remote MCP Server 的优势
Remote MCP Server 通过集中化部署和管理，解决了上述问题：

+ 拓宽使用场景：非技术用户可以通过网页或移动应用等，随时随地通过互联网使用 MCP 能力。
+ 集中化安全管控：企业可以在远程服务器上实施严格的访问控制、加密和审计机制，确保敏感凭证的安全。
+ 统一权限管理：通过集中化的身份验证和授权系统，企业可以精确控制每个用户对不同资源的访问权限。
+ 简化部署与维护：只需维护中央服务器，大大降低了运维成本和复杂性。

# 04 Higress 开源 Remote MCP Server 托管方案
虽然远程 MCP Server 具有诸多优势，但其实施也带来了新的挑战，特别是在认证授权、服务可靠性和可观测性方面。这正是 API 网关所擅长的领域，而 Higress 作为 AI 原生的 API 网关，提供了完整的开源 MCP Server 托管解决方案。

该方案已经更新到 Anthropic 官方的 MCP Server 项目文档中，详情可以点击了解：

https://github.com/modelcontextprotocol/servers?tab=readme-ov-file#for-servers

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1743478039294-9c8985f8-9a7f-4b1b-b557-9e4fb15d31b8.webp)

Higress 的 MCP Server 托管方案采用了分层架构设计，为 AI Agent 提供了完整的服务访问能力。

在最上层，各种 AI Agent（如 Claude、Cursor、Cline 等）通过标准的 MCP 协议与 Higress 进行交互。Higress 内部实现了完整的安全与管控层，包括 MCP 会话保持、OAuth2 认证、审计日志、速率限制和 MCP 路由等核心功能。

在服务层面，Higress 支持3种 MCP Server 接入方式：

+ 通过 Wasm 插件在 Higress 内部实现的内置 MCP Server，适用于对接现有 SaaS API 生态提供 MCP 能力。
+ 直接转发给外部已经支持 MCP 协议的服务，适用于对接已有的外部 MCP 能力。
+ 通过服务注册中心（如 Nacos）动态发现外部 MCP Server，并且可以通过 Nacos 配置中心的能力动态更新 MCP Server 的工具定义，适用于企业将传统业务 API 升级为 MCP 能力。Nacos 下周将发布 MCP Registry，实现存量应用接口“0改动”升级到 MCP 协议。

这种灵活的架构设计使得企业可以根据自身需求选择最适合的部署方式，既可以享受 Higress 提供的一站式托管服务，也可以保持现有 MCP Server 的独立性。

### API 网关能力与 MCP 服务的天然契合
Higress 基于 Envoy 构建，继承了传统 API 网关在认证、授权、限流和可观测性方面的成熟能力，同时针对 AI 场景进行了优化。这些能力与 MCP 服务的需求高度契合：

+ 统一认证授权：Higress 提供 OAuth2 插件，可以满足新版 MCP 协议对认证鉴权的要求。开发者无需编写复杂的认证代码，只需简单配置即可实现安全的用户认证和权限控制。
+ 精细化流量控制：通过 Higress 的限流插件，可以为不同用户、不同工具设置不同的调用配额，防止资源滥用和服务过载。
+ 全链路可观测性：Higress 集成了 Prometheus 和 OTel 等开源观测方案，提供完整的指标监控和分布式追踪能力，使运维团队能够实时监控 MCP 服务的健康状况和性能表现。
+ 审计日志：记录所有工具调用行为，满足合规要求，同时为安全分析提供数据支持。

### 基于 Wasm 的 MCP Server 扩展能力
Higress 的一大技术亮点是支持 WebAssembly (Wasm) 插件，这为 MCP Server 提供了强大的扩展能力：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/169256735/1743478039280-5f08ff49-13d5-49cc-bf83-3c825b522233.webp)

通过 Wasm 插件机制，开发者可以：

+ 快速添加新 Server：使用多种语言（当前先提供了 Go 语言的 MCP Server SDK）开发 MCP Server，编译为 Wasm 后动态加载到 Higress 中，无需重启服务。
+ 安全隔离：每个 Wasm 插件在独立的沙箱中运行，即使插件崩溃也不会影响网关的稳定性。
+ 动态更新：得益于 Envoy 对长连接的友好处理和 Wasm 插件的动态更新机制，MCP Server 逻辑可以在不中断流量的情况下实时更新。

### 协议卸载的优势
目前 MCP 一共有两个版本的协议，分别是20241105版本和20250326版本。从协议发展来看，标准的沉淀和优化速度，难以跟上迅猛发展的 MCP Server 生态。这也为 MCP 的早期采用者埋下隐患，当构建了大量 MCP Server，面对未来协议版本升级，需要进行繁重的升级改造工作。

而在 Higress 这层网关上，刚好可以帮助屏蔽多个版本的协议细节，甚至实现MCP to REST/Dubbo 等等协议转换的能力。在 Higress 这层网关完成所有版本的 MCP 协议卸载。就像我们用 Higress 作为传统的 API 网关时一样，统一卸载 HTTP1/HTTP2/HTTP3 的客户端协议。

目前，Higress 可以在一个接入点上同时支持 MCP 的20241105版本和20250326版本两种协议。在协议的传输层上，支持目前 AI 工具采用最广泛的POST+SSE 模式，以及最新的 Streamable HTTP 模式。

我们预计未来随着应用生态对实时性的要求，WebSocket 这种全双工的双向实时通信协议会更受青睐，而得到广泛采用。Higress 原生支持 WebSocket，它能够实现全双工的双向实时通信，而且 Higress 支持 WebSocket 配置修改后连接保持以及优雅断开，到时，Higress 在 MCP 会话保持上的优势将愈加凸显。

### 部署与运维优势
Higress 的 MCP Server Hosting 方案在部署和运维方面具有显著优势：

+ 弹性伸缩：基于 Kubernetes 的自动伸缩能力，根据流量自动调整实例数量，确保服务的高可用性和资源利用效率。
+ 灰度发布：支持 MCP Server 的灰度发布和 A/B 测试，降低更新风险。
+ 一键部署：提供 Helm Chart，简化部署流程，降低运维门槛。

使用 Higress 托管的 MCP Server 可以轻松处理每秒数十万次的工具调用请求，同时保持毫秒级的响应时间，满足企业级应用的性能需求。

# 05 欢迎参与 Higress MCP 生态共建
Higress 社区正在积极推动 MCP 生态的发展，计划在2025年4月中旬在 higress.ai 上提供公开的 MCP 市场，方便用户体验 Remote MCP Server 的优势。例如这个视频是直接在 Cursor 上输入一个在 Higress 部署的 MCP Server 接入点，实现对接数据库 schema 编写 CRUD 代码：  


![](https://intranetproxy.alipay.com/skylark/lark/0/2025/gif/169256735/1743478039268-cfc28569-75eb-4ea1-86df-c2b7ec1d3132.gif)

通过开放的 MCP 市场，我们可以让用户无需自己部署 Higress 和 MCP Server，也体验到这样的能力。

### 开放的 MCP 市场
Higress 的 MCP 市场将提供：

+ 丰富的 MCP Server 生态：覆盖常见的应用场景，如文档处理、数据分析、代码辅助等。
+ 一键使用：通过 Web 界面，用户可以一键获取 MCP Server 接入点，并在自己的 AI 工具中使用。
+ 社区共享机制：开发者可以将自己开发的 MCP 工具通过开源社区 Review 后，上架到市场，提供用户使用。

### 企业级 MCP 市场
除了开源社区版本，阿里云 API 网关也将很快上架 MCP 市场，面向企业用户提供更加完善的服务：

+ 企业级 SLA 保障：提供99.99%的服务可用性承诺，满足企业关键业务的需求。
+ 合规认证：通过多项安全合规认证，满足金融、医疗等行业的严格要求。
+ 专家支持：提供7x24小时技术支持和咨询服务，帮助企业快速解决问题。

这使得企业可以在享受 SaaS MCP 生态的同时，也构建自己内部的 MCP Server 生态。

### 生态共建
如果你是一家提供 SaaS 服务的企业，正在希望构建 MCP Server 从而让用户在 AI 场景下付费使用自己的 API，Higress 社区欢迎与你合作（添加wx：zjjxg2018 对接）

+ 技术支持：提供 MCP Server 开发的技术指导，或者由我们开源社区帮助你构建。
+ 联合推广：在 Higress 官方渠道宣传合作伙伴的 MCP 服务。
+ 市场入驻：帮助你的 MCP Server 在 Higress 官方的 MCP 市场中上架托管。

通过开源的方式，Higress 社区致力于推动 MCP 生态的繁荣发展，让更多开发者和企业能够轻松构建和部署 MCP Server，释放 AI 助手的全部潜力。

随着 OpenAI 和 Anthropic 等行业巨头的推动，以及 Higress 等开源项目的支持，MCP 协议正在从事实标准走向行业标准。未来，我们有理由相信，MCP 将成为连接 AI 与现实世界的关键桥梁，为各行各业带来前所未有的智能化体验。


