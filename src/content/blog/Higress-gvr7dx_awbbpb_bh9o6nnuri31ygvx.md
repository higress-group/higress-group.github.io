---
title: "大模型上下文协议 MCP 带来了哪些货币化机会"
description: "大模型上下文协议 MCP 带来了哪些货币化机会"
date: "2025-03-25"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

<font style="color:rgb(0, 0, 0);">先带个货：</font>

+ <font style="color:rgb(0, 0, 0);">Higress 及其云产品 API 网关：正在和通义灵码合作，采用 SSE + Tool + Redis 的技术方案，已经上线 </font>Higress MCP Server Hosting_**<font style="color:#DF2A3F;">[1]</font>**_<font style="color:rgb(0, 0, 0);">，提供两方面能力，一是 Higress 作为平台提供 IO 简单的 Tool 能力，实现若干主流的外部应用的对接，用户也可以自行实现 IO 复杂的 Tool 能力；二是作为网关对 MCP Server 的访问进行身份验证、授权等方面的管控。</font>
+ <font style="color:rgb(0, 0, 0);">Nacos 即将发布 MCP Register 的相关能力，包括动态发现和管理 MCP Server，并且通过动态 Prompt 下发管理 MCP 协议，可以帮助非 MCP 的服务，转变成 MCP 的服务。</font>
+ <font style="color:rgb(0, 0, 0);">Nacos + Higress 的组合，将极大降低经典互联网应用构建 MCP Server 的工程化成本。</font>



打开这篇文章的读者，都有一致的观察，2月中旬开始，MCP 火了。我们来看看反应开源项目热度的两个关键指标，GitHub Star 和搜索指数。



Star 从2月开始，加速增长：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1741518201824-50682fc3-1bb0-4160-b4de-d6d6acdad0b7.png)



微信指数，从2月开始，出现流量突增：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1742797845473-5e57d61a-9924-4705-a0ad-2639735465c5.png)



从社群的交流看，预计4月，国内会集中出现一批 MCP 中间件提供商，包括 Server、Client、Server hosting、Registy、Marketplace 等，在各自原有的优势领域进行延展。本文旨在进一步厘清一些易混淆的概念，并分享看到的一些货币化机会，以及我们在 MCP 上的计划和进展。 



## 一、为什么 MCP 火了？
> MCP 在大模型和第三方数据、API、系统的交互过程中，<font style="color:rgb(0, 0, 0);">用单一的标准协议取代碎片化的集成方式</font>**<font style="color:#DF2A3F;">[2]</font>**<font style="color:rgb(0, 0, 0);">，是 N x N 向 One for All 的演进，能以更简单、更可靠的方式让人工智能系统获取所需数据。</font>MCP 的<font style="color:rgb(0, 0, 0);">详细介绍，</font>可以参考我们在1月发布的科普文[《MCP 十问｜快速理解模型上下文协议》](https://mp.weixin.qq.com/s?__biz=MzU0MzkyMTgzNg==&mid=2247485181&idx=1&sn=4adf73b086eda972e9f6050f9c8d9022&scene=21#wechat_redirect)。
>



MCP 是去年11月发布，迅速获得市场的第一波关注；今年2月，Cursur、Winsurf、Cline 均开始引入 MCP，不同于前期已经接入的上千家被调用方，AI <font style="color:rgb(0, 0, 0);">编程引入 </font>MCP，可以认为是吹响了大模型生态效应的号角，将 AI 编程工具端的大量开发者引向被调用方，以唤醒规模巨大的存量应用和系统。



从产业链的视角看，这不仅能解决 AI 应用和海量经典在线应用孤岛化、碎片化的现状，也能大幅提升 AI 编程工具的使用深度、扩大使用群体，还给 AI 应用带来了足够大的货币化空间，以及给经典在线应用引入更多的流量，甚至还能催生自然语言使用专业软件的市场，举个例子，Blender MCP 将 AI 连接到 Blender，就可以通过简单的文本提示来创建、修改和增强 3D 模型。



在这个生态内，MCP、AI 类应用、AI 编程工具、经典在线应用都是受益方 ，谁先接入谁先获益。MCP 将有可能成为 AI 原生应用的核心基础设施。P.S. 由于国内大模型还未在大模型上下文协议有所动作，MCP 最终能否成为事实标准，在国内依然存在不确定性。



从关键生产力程序员的视角看，程序员现在无须切换到 Supabase 来检查数据库状态，而是可以使用 Postgres MCP 服务器执行只读 SQL 命令，使用 Redis MCP 服务器直接从 IDE 直接和 Redis 键值存储进行交互。在迭代代码时，还可以利用 Browsertools MCP 让编码代理访问实时环境以进行反馈和调试。<font style="color:rgb(75, 80, 88);">这个并不新鲜，程序员使用云产品的时候，也会更倾向于使用 API 方式来调用云产品的能力，而非在多个云产品的控制台上之间跳转。</font>

<font style="color:rgb(75, 80, 88);"></font>

<font style="color:rgb(75, 80, 88);">程序员往往是新技术的早期采用者，随着 MCP 的成熟，普通消费者也可以通过自然语言，助推 MCP 产业链的繁荣。</font>



## 二、MCP 越成熟，Function Calling 越无用武之地？
首先，MCP 和 Function Calling 都是大模型调用外部数据、应用和系统的技术实现方式。MCP 由 Anthropic 在2024年11月底推出，Function Calling 由 OpenAI 在2023年6月首次提出（即<font style="color:rgb(31, 35, 41);">创建一个外部函数作为中介，一边传递大模型的请求，另一边调用外部工具，其他大模型大多也采用这类技术方案</font>）。但是他俩在定位、开发成本等方面有着较明显的差异。



**定位不同：**

+ MCP 是通用协议层的标准，类似于 “AI 领域的 USB-C 接口”，定义了 LLM 与外部工具 / 数据源的通信格式，但不绑定任何特定模型或厂商，将复杂的函数调用抽象为客户端-服务器架构。
+ Function Calling 是大模型厂商提供的专有能力，由大模型厂商定义，不同大模型厂商之间在接口定义和开发文档上存在差异；允许模型直接生成调用函数，触发外部 API，依赖模型自身的上下文理解和结构化输出能力。



**开发成本不同**

+ Function Calling 的技术实现过程，以 OpenAI 为例，需要<font style="color:rgb(31, 35, 41);">为每个外部函数编写一个 JSON Schema 格式的功能说明，精心设计一个提示词模版，才能提高 Function </font>C<font style="color:rgb(31, 35, 41);">alling 响应的准确率</font>，如果一个需求涉及到几十个外部系统，那设计成本是巨大，产品化成本极高。
+ <font style="color:rgb(31, 35, 41);">MCP 把大模型运行环境称作 MCP Client，同时，把外部函数运行环境称作 MCP Server，统一 MCP 客户端和服务器的运行规范，并且要求 MCP 客户端和服务器之间，也统一按照某个既定的提示词模板进行通信，这样就能通过 MCP Server 加强全球开发者的协作，复用全球的开发成果。</font>



**交互方式不同**

+ MCP 通过标准化的客户端 - 服务器架构实现双向通信，需开发者预先配置服务器并定义接口。
+ Function Calling 由模型主动触发，模型在生成文本时直接插入调用请求（如 JSON <font style="color:rgb(31, 35, 41);">Schema </font>格式），宿主应用解析后执行并返回结果。



**与模型能力的深度耦合**

+ Function Calling 通常与模型的上下文理解深度绑定。例如，GPT-4 的 Function Calling 可利用模型的推理能力优化调用参数，或根据返回结果调整后续生成内容。
+ MCP 作为通用协议，需通过标准化接口传递信息，可能牺牲部分与特定模型的协同优化空间。



**实时性与低延迟需求**

+ Function Calling 的调用逻辑直接嵌入模型响应流程，适用于对实时性要求高的场景（如在线支付、实时数据分析）。
+ MCP 需通过 MCP 服务器中转，可能增加延迟，尤其在跨网络调用时。  


总的来看，MCP 的全面适配会减少对 Function Calling 的依赖，尤其是在跨平台、标准化工具集成场景中。但是 Function Calling 仍将在特定场景中不可替代，例如模型主导的动态决策、实时任务执行、专有生态集成等，并且在一些轻量化的调用场景中，Function Calling 在实效性方面更具优势。未来，两者可以形成互补，MCP 成为基础协议层，Function Calling 作为模型增强层，共同推动 AI 与外部世界的无缝交互。



## 三、MCP 改变的是供应端，变革的却是消费端
不同人对供应端和消费端的理解有所不同，我们对供应端和消费端在本文中做一个定义：

+ 供应端：提供 AI Agent 服务的产业链，包括云厂商、大模型、AI 应用（包含 AI Agent）、经典在线应用、各类 AI 中间件服务商等。
+ 消费端：使用 AI Agent 的终端用户。



首先不得不提 Devin 和 Manus。



Devin 的出现，是 AI 编程从编程辅助工具向程序员代理的质变，不再仅仅是代码补全和辅助生成，而是能覆盖从需求分析→代码编写→测试→部署→Bug修复全程，独立处理完整任务的，Devin 变革的是程序员群体（国内用户使用程序员代理，推荐灵码）；Manus 变革的则是广大普通的互联网用户，用户和 AI 的交互，不再仅仅是一问一答的对话机器人服务模式，而是能调动 AI 应用以外的互联网在线服务，自主、完整地实施用户想法的通用 AI 代理，实现了从“被动应答”到“主动共创”的质变。



结果越是智能，过程越是复杂。“认知负荷是工程效能的核心阻碍”这一观点，在 AI Agent 上表现更甚。因此 AI Agent 对高效的开发和工程范式需求更加强烈。



不同于经典互联网，AI Agent 的产品化和工程化更加复杂。电商应用满足了用户不出门就能购物的需求，聊天应用满足了用户不出门就能社交的需求，是一种体力替代，AI Agent 则是一种脑力和心力替代，帮助用户完成从基础生存到高阶创造的全链条活动。若仅依赖于 Function Calling 来调用外部应用，显然不是一种高效的开发范式。MCP 才能让开发者可以更加便捷的手搓下一个 Manus。他好比是互联网世界的 HTTP 协议，让所有客户端和网站，均基于同一个规范进行通信，并由此推动全球开发者共同协作，加速 AGI 的到来。



## 四、MCP 加速了大模型的货币化？
从我们的观察来看，确实如此。



以 Firecrawl 为例，这个开源项目提供：

+ 全面抓取数据网站数据：自动爬取整个网站的所有可访问子页面，无需依赖站点地图。
+ 数据清洗与格式化：将爬取的网页内容自动转换为干净的 Markdown 或结构化数据 ，去除广告、导航栏等无关信息，丢弃页面噪音。
+ 处理调取数据、无须再加工：既可无缝对接模型，直接输出 LLM-ready 的格式，还能被各类 AI 编程框架集成，加速数据预处理流程。



在支持 MCP 之前，Firecrawl 已具备全自动网页爬取能力，但依赖传统技术实现，用户需通过 REST API 或 SDK 手动调用 Firecrawl 服务，无法直接与大模型无缝集成。Firecrawl 今年1月通过与 Cline 平台的集成，正式引入了 MCP 协议，开发者可通过 MCP 服务器调用 Firecrawl 的爬取能力，实现“AI模型直接控制网页抓取”的自动化流程。更重要的是，用户不担心协议绑定影响可扩展性，毕竟要实现更丰富的大模型能力，需要依赖多个类似 Firecrawl 的大模型中间件供应商。因此，MCP 是打开了大模型中间件供应商们的网络效应，加速了这类玩家的变现能力。



a16z Infra 团队绘制了一张 MCP Market Map_**<font style="color:#DF2A3F;">[3] </font>**_。这个图涵盖了 MCP 生态当今最活跃的领域，尽管仍有许多空白，但对国内的创新会带来诸多启发。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1742785409390-fd07bf15-817d-4fd4-8704-f883a4634c66.png)



<font style="color:rgb(75, 80, 88);">随着 MCP 的采用率不断提高，基础设施和工具将在 MCP 生态系统的可扩展性、可靠性和可访问性方面发挥关键作用。</font>**<font style="color:rgb(75, 80, 88);">由此带来一个可能会完全不同于经典互联网产业链的结果：to B 领域的机会将比 to C，更加丰富。</font>**

**<font style="color:rgb(75, 80, 88);"></font>**

+ **<font style="color:rgb(75, 80, 88);">MCP Client：</font>**<font style="color:rgb(75, 80, 88);">作为调用方，</font>是用户与 MCP 生态的交互入口，聚焦终端功能的实现。例如，聊天应用类（如 Claude），提供自然语言交互服务，让用户通过对话调用 AI 能力；编码工具类（如 Cline、Cursor），AI 编程场景，在 IDE 里调用外部应用和系统的能力；任务自动化类：帮用户自动化执行重复性任务，如数据处理、流程调度，以提升效率。Manus 就是典型的 <font style="color:rgb(75, 80, 88);">MCP Client。</font>
+ **<font style="color:rgb(75, 80, 88);">MCP Server：</font>**<font style="color:rgb(75, 80, 88);">作为被调用方，提供后端服务支撑，包括各类核心功能模块。例如，数据库类（如 ClickHouse、Supabase）负责数据存储、查询与管理；设计类（如 Figma、Blender），支撑设计创作、文件协作等功能；生产力工具类（如 Notion、Obsidian），提供笔记管理、知识整理等办公协作服务；支付类（如 Stripe），处理在线支付交易，支持商业场景的资金流转。</font>
+ **<font style="color:rgb(75, 80, 88);">MCP Marketplace：</font>**<font style="color:rgba(0, 0, 0, 0.85);">扮演生态枢纽角色，聚合与分发 MCP 相关工具，类似 “应用商店”。一方面，开发者可在此发布 MCP 客户端、服务器工具；另一方面，用户能便捷发现和使用各类 MCP 工具（如 MCP.so、Glama），促进生态内资源的流通与共享。</font>
+ **<font style="color:rgb(75, 80, 88);">Server Generation&Curation：</font>**聚焦 MCP 服务器的开发与维护。提供工具或框架（如 Mintlify、Stainless）辅助服务器开发，简化搭建流程；优化服务器配置、功能迭代，确保服务器性能稳定，适配不同业务场景需求。
+ **<font style="color:rgb(75, 80, 88);">Connection Management：</font>**协调 MCP 生态中各组件的交互。管理客户端与服务器、服务器与服务器之间的连接，确保数据传输高效；优化连接稳定性，处理网络协议适配、请求路由等，保障生态内交互流畅。
+ **<font style="color:rgb(75, 80, 88);">Server Hosting：</font>**为 MCP 服务器提供运行环境支持。借助云计算等基础设施（如 Cloudflare、Smithery），托管服务器代码与数据；负责服务器的运维、扩容、安全防护，保障服务器持续稳定运行。



Higress 及其云产品 API 网关正在和通义灵码合作，采用 SSE + Tool + Redis 的技术方案，将于本周上线 Higress MCP Server Hosting，提供两方面能力，一是 Higress 作为平台提供 IO 简单的 Tool 能力，实现若干主流的外部应用的对接，用户也可以自行实现 IO 复杂的 Tool 能力；二是作为网关对 MCP Server 的访问进行身份验证、授权等方面的管控。



此外，Nacos 也会发布 MCP Register 的相关能力，包括动态发现和管理 MCP Server，并且通过动态 Prompt 下发管理 MCP 协议，可以帮助非 MCP 的服务，转变成 MCP 的服务。 Nacos + Higress 的组合，将极大降低经典互联网应用构建 MCP Server 的工程化成本。

**<font style="color:rgb(75, 80, 88);"></font>**

## 五、MCP 生态越繁荣，越依赖网关和可观测？
MCP Server 是功能服务的封装，其本质是通过 MCP 协议提供标准化接口的服务端。但凡涉及跨网访问，就需要身份验证、授权、数据加解密、防攻击机制等。此时，便需要一个面向 MCP Server 管控的 MCP 网关了。

<font style="color:rgb(75, 80, 88);"></font>

<font style="color:rgb(75, 80, 88);">与 API 网关类似，</font>MCP 网关<font style="color:rgb(75, 80, 88);">将强制执行访问控制、将请求路由到正确的 MCP 服务器、处理负载平衡并缓存响应以提高效率。这对于多租户环境尤其重要，因为不同的用户和代理需要不同的权限。标准化的网关将简化客户端与服务器之间的交互、提高安全性并提供更好的可观测性，从而使 MCP 部署更具可扩展性和可管理性。</font>

+ **身份验证：**验证用户、设备或服务的身份，防止未授权实体接入生态。例如，用户登录 MCP 客户端（如 Claude）时，通过账号密码、令牌等方式验证身份，避免恶意攻击或非法访问。
+ **授权：**提供权限精细化的控制，在身份验证通过后，决定用户或服务可执行的操作范围。例如，普通用户仅能使用基础 MCP 服务器功能，而高级用户或特定服务可获得数据库读写、敏感工具调用等更高权限。
+ **流量管控：**实现请求过滤、速率限制、协议转换等功能。例如，对高并发请求限流，拦截非法请求，统一处理加密传输，提升生态整体安全性与稳定性。



以上能力，您将很快在 Higress 和其云产品 <font style="color:rgb(75, 80, 88);">API 网关上获得体验。</font>  


在 MCP 生态中，由于调用关系更加复杂和多样，可观测也是不容忽视的基础设施：

+ **故障排查与问题诊断**：通过日志收集记录生态中各个组件（如 MCP 客户端、服务器 ）运行时的离散事件，在出现问题时，开发和运维人员能依据这些记录追溯系统行为，快速定位故障点。链路追踪则可分析请求在不同组件间的调用路径，判断哪一部分出现错误、阻塞，以及输入输出是否符合预期，帮助排查跨组件交互时产生的问题。此外，还可以通过调用链对调用情况进行分析。
+ **性能优化**：聚合度量对系统资源使用情况（如 CPU、内存占用）、响应时间、吞吐量等关键指标进行统计分析，找出性能瓶颈，为优化系统配置、调整架构提供依据。比如发现某 MCP 服务器在高并发下响应缓慢，就可以针对性地优化代码或增加硬件资源。
+ **服务质量监控**：实时监测 MCP 生态内服务的运行状态和可用性，及时发现服务中断、延迟过高等影响用户体验的问题，并触发相应的预警机制，以便运维人员快速响应处理，保障服务稳定可靠。

 

作为标准化的地图服务能力平台，高德已率先推出其 MCP Server，提供12大核心功能，助力企业级智能体应用开发。我们预计，国内将快速诞生一大波 MCP Servers 和 MCP 中间件，加速 AI Agent 的产品化和工程化。



[1] [https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers)

[2] [https://mp.weixin.qq.com/s/zYgQEpdUC5C6WSpMXY8cxw](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers)

[3] [https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/](https://a16z.com/a-deep-dive-into-mcp-and-the-future-of-ai-tooling/)


