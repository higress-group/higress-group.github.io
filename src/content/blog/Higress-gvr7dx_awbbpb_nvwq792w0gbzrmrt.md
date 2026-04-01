---
title: "HiClaw 加入 AgentScope，携手 CoPaw 共建多 Agent 的基础设施"
description: "HiClaw 加入 AgentScope，携手 CoPaw 共建多 Agent 的基础设施"
date: "2026-04-01"
category: "ecosystem"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

近日，HiClaw GitHub 仓库迁移至 AgentScope 下，将携手 CoPaw 共建多 <font style="color:rgba(23, 26, 29, 0.94);">Agent </font>的基础设施。

## <font style="color:rgba(23, 26, 29, 0.94);">一、背景</font>
<font style="color:rgba(23, 26, 29, 0.94);">过去一个多月，阿里巴巴开源了 CoPaw 和 HiClaw 两个 Claw 形态的项目，两者都获得了社区的积极反应， Star 数量增长迅速。其中：</font>

<font style="color:rgba(23, 26, 29, 0.94);"></font>

+ **<font style="color:rgba(23, 26, 29, 0.94);">CoPaw：</font>**<font style="color:rgba(23, 26, 29, 0.94);">是面向个人的智能助理，其在小模型、安全机制、多智能体协同、记忆管理进行了深度优化，致力于成为真正可控、稳定的个智能助理。</font>
+ **<font style="color:rgba(23, 26, 29, 0.94);">HiClaw：</font>**<font style="color:rgba(23, 26, 29, 0.94);">是直接面向企业，作为企业的 Agent 团队，采用 Manager-Workers 协作架构，Manager 统一调度多个 Workers，专注企业内的人和 Agent、Agent 之间的协作场景。</font>

<font style="color:rgba(23, 26, 29, 0.94);"></font>

<font style="color:rgba(23, 26, 29, 0.94);">迁移后，HiClaw 将和 CoPaw 一起，成为 AgentScope 的一部分，共同推进多 Agent 的进化。</font>

## <font style="color:rgba(23, 26, 29, 0.94);">二、HiClaw + CoPaw</font>
双方的合作将围绕多个方向展开，目标是共建更智能、更安全、更规范、更易用的多智能体基础设施，包括但不限于：

+ **<font style="color:rgba(23, 26, 29, 0.94);">提升 Agent 不同构建方式的一致性体验：</font>**<font style="color:rgba(23, 26, 29, 0.94);">在 Manager-Workers 协作架构中，HiClaw 允许用户创建 Manager 和 Workers 时，采用多样化的智能内核和模型服务，例如可以是 </font>CoPaw、也可以是 OpenClaw、甚至是 ZeroClaw 等，<font style="color:rgba(23, 26, 29, 0.94);">双方将在人格定义（SOUL.md）、记忆系统（MEMORY.md）、技能声明（Skills.md）到运行时配置等方面，打造更加一致且流畅的体验。</font>
+ **<font style="color:rgba(23, 26, 29, 0.94);">优化人和 Agent、多 Agent 间的协作体验：</font>**<font style="color:rgba(23, 26, 29, 0.94);">单 Agent 目前尚存在诸多协作体验的问题，多 Agent 协作将面临更复杂的工程挑战。双方将在长程和复杂任务，以及企业内的协作场景，提升任务分派、状态同步、上下文共享、心跳监控、故障隔离等方面的体验。</font>
+ **<font style="color:rgba(23, 26, 29, 0.94);">加强 Agent 运行过程中的系统支持：</font>**<font style="color:rgba(23, 26, 29, 0.94);">企业环境天然对 Agent 的身份认证、权限管控、资源调度、可观测性、生命周期管理提出了更高的要求，双方将在 AI 网关凭证隔离、Nacos AI 注册中心、全链路 Trace、Sandbox 等方面的实践转化为框架侧的可扩展能力。</font>



<font style="color:rgba(23, 26, 29, 0.94);">此外，Claw 形态的 Agent，加速了 </font><font style="color:rgba(23, 26, 29, 0.94);">Harness 驾驭工程的市场共识。</font>

<font style="color:rgba(23, 26, 29, 0.94);"></font>

<font style="color:rgba(23, 26, 29, 0.94);">我们也会将 </font><font style="color:rgba(23, 26, 29, 0.94);">Harness 驾驭工程的实践，积极转化为开源侧的能力，把方法论抽象成</font><font style="color:rgba(23, 26, 29, 0.94);">生产力的最后一公里</font><font style="color:rgba(23, 26, 29, 0.94);">。</font><font style="color:rgba(23, 26, 29, 0.94);">例如：</font>

<font style="color:rgba(23, 26, 29, 0.94);"></font>

+ **<font style="color:rgba(23, 26, 29, 0.94);">从单体编排到网络化协同：</font>**<font style="color:rgba(23, 26, 29, 0.94);">通过 Matrix 协议将单实例编排到跨实例层面，形成网络化协同，新增 Agent，可以像”入职新员工”一样，即插即用。</font>
+ **<font style="color:rgba(23, 26, 29, 0.94);">从黑盒执行到全程透明，再到 Agent 自进化：</font>**<font style="color:rgba(23, 26, 29, 0.94);">人和 Agent、Agent 间的交互，可共享、可追溯、可审计，且人类可以随时介入和纠偏。 </font>
+ **<font style="color:rgba(23, 26, 29, 0.94);">从自持凭证到零信任治理：</font>**<font style="color:rgba(23, 26, 29, 0.94);">通过 AI 网关实现了结构性的凭证隔离，Agent 只有”工牌”没有”钥匙”，所有对 LLM、MCP、外部服务的调用，都经过网关统一鉴权和管控。安全性不依赖 Agent 框架自身的可靠性，而是由基础设施层来保证。</font>

## <font style="color:rgba(23, 26, 29, 0.94);">三、</font>HiClaw + AgentScope 生态
<font style="color:rgba(23, 26, 29, 0.94);">AgentScope 是一个生产就绪、易于使用的 Agent 框架，具有必要的抽象，可与不断提升的模型能力配合使用，并内置了微调支持。</font>

<font style="color:rgba(23, 26, 29, 0.94);"></font>

<font style="color:rgba(23, 26, 29, 0.94);">基于 AgentScope 框架，扩展了成一整套生态，包括：</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/png/133108/1774950967937-535296c4-4e38-4b9a-89ef-b8dd8d02bff2.png)

+ <font style="color:rgba(23, 26, 29, 0.94);">Copaw：个人的智能助理，支持本地和云部署。</font>
+ <font style="color:rgba(23, 26, 29, 0.94);">HiClaw：</font><font style="color:rgba(23, 26, 29, 0.94);">企业的 Agent 团队，专注企业内的人和 Agent、Agent 之间的协作场景。。</font>
+ <font style="color:rgba(23, 26, 29, 0.94);">AgentScope：灵活的编程框架，用于构建具有自解释 API 的多代理应用程序。</font>
+ <font style="color:rgba(23, 26, 29, 0.94);">AgentScope-Runtime：用于在生产环境中可靠运行代理的可扩展部署基础架构。</font>
+ <font style="color:rgba(23, 26, 29, 0.94);">AgentScope-Studio：用于快速原型设计、调试和监控代理的可视化开发环境。</font>
+ <font style="color:rgba(23, 26, 29, 0.94);">AgentScope-Samples：精选的即用型代理示例和模板集合，从简单的命令行工具到全栈生产就绪应用程序。</font>
+ <font style="color:rgba(23, 26, 29, 0.94);">Skills：围绕 AgentScope 生态系统、CoPaw &HiClaw 的应用程序，精心挑选的技能集合。</font>
+ <font style="color:rgba(23, 26, 29, 0.94);">Reme：ReMe 是一个专为AI 代理设计的内存管理框架，提供基于文件和基于向量的内存系统。</font>

<font style="color:rgba(23, 26, 29, 0.94);"></font>

<font style="color:rgba(23, 26, 29, 0.94);">HiClaw 也将充分利用 AgentScope 生态的能力，持续提升 Agent 团队的协作体验。</font>

## <font style="color:rgba(23, 26, 29, 0.94);">四、HiClaw + 阿里云</font>
<font style="color:rgba(23, 26, 29, 0.94);">除了开源演进，HiClaw 将积极利用阿里云成熟的基础设施，依托阿里云 AI 网关、MSE Nacos、容器计算服务 ACS、对象存储 OSS、日志服务 SLS 等云产品，将开源能力转化为企业级生产可用的一站式产品能力。</font>

<font style="color:rgba(23, 26, 29, 0.94);">HiClaw 商业版即将上线，敬请期待。</font>

> 任何阿里云上的xxxClaw都不是HiClaw的商业版。
>

<font style="color:rgba(23, 26, 29, 0.94);"></font>

+ HiClaw GitHub：[https://github.com/agentscope-ai/HiClaw](https://github.com/agentscope-ai/HiClaw)
+ HiClaw <font style="color:rgba(23, 26, 29, 0.94);">钉群：167365014834</font>


