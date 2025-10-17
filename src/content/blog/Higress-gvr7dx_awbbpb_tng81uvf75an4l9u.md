---
title: "SOFA AI网关落地实践"
description: "SOFA AI网关落地实践"
date: "2025-10-17"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

**<font style="color:rgb(38, 38, 38);">一. 背景</font>**

<font style="color:rgb(38, 38, 38);">网关作为重要的中间件，在传统业务中扮演着流量治理、路由转发、协议转换、安全防护等功能。根据不同业务场景的定位，也会衍生出不同类型的网关，例如流量网关、ESB（企业服务总线）、API网关、云原生网关。从网关职责看，其本质所承担的职责没有太多变化，主要是针对不同业务场景下作更多的适配，更好地满足业务使用。比如，API网关则是针对微服务场景，将原有的管理粒度从粗粒度的流量或服务，转换成了细粒度的REST或接口维度的管理，从而实现了更精细化的治理，这是从流量网关演变为API网关的核心驱动力。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">在AI场景下，业务模式发生了根本性的变革，网关所面对的挑战也从“服务”转向了“模型”和“智能体”等。这种转变并非简单的技术迭代，同时带来业务逻辑、交互模式、资源消耗和风险模型的全面重塑。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">为了有效支撑日益复杂多样的AI业务场景（如服务模型、智能体、AI应用及MCP等），API网关的角色亟需从通用型升级为专业化的AI网关。原有通用网关的核心能力已无法满足这些场景的特定需求，因此AI网关针对性地拓展和强化了能力集，衍生出智能路由、模型统一接入、语义缓存、内容安全、MCP代理、模型限流等核心特性。 </font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">SOFA商业化团队，为了满足客户AI业务的发展需求，推出了SOFA AI网关，也称为SOFA Higress。</font>

**<font style="color:rgb(38, 38, 38);"></font>**

**<font style="color:rgb(38, 38, 38);">二. SOFA AI网关定位</font>**

<font style="color:rgb(38, 38, 38);">SOFA AI网关（又名SOFA Higress）基于开源Higress内核构建，专为SOFA场景深度优化、能力增强，是面向AI需求的智能网关解决方案。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">SOFA AI网关在构建之初即明确了其定位：为三类核心AI业务场景提供专业化服务：</font>

+ **<font style="color:rgb(38, 38, 38);">智能体代理</font>**<font style="color:rgb(38, 38, 38);">： 作为智能体流量的统一出入口网关，提供安全防护与流量管控。同时作为智能体的工具集（Tools Hub），统一管理工具列表，通过AI网关打通智能体与外部系统的连接。将业务存量API快速转化为智能体可识别和调用的Tools。此外，通过MCP协议提供REST-to-MCP转换功能，加速存量业务MCP化进程，极大简化智能体的对接与调用。</font>
+ **<font style="color:rgb(38, 38, 38);">模型代理</font>**<font style="color:rgb(38, 38, 38);">： 提供模型推理网关能力，集成语义缓存、内容安全、统一接入等核心功能，显著降低模型接入复杂度与成本。同时，基于精细化业务属性与特征，提供精准的模型限流保障。</font>
+ **<font style="color:rgb(38, 38, 38);">MCP市场服务</font>**<font style="color:rgb(38, 38, 38);">： 构建金融领域专属MCP市场，提供专业化的金融数据和丰富的金融业务服务，赋能金融场景业务，有效提升智能体研发的效率与质量。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">下面将从以上三趴内容详细展开。</font>

**<font style="color:rgb(38, 38, 38);"></font>**

**<font style="color:rgb(38, 38, 38);">三. 落地实践</font>**

**<font style="color:rgb(38, 38, 38);">3.1 技术选型</font>**

<font style="color:rgb(38, 38, 38);">SOFA AI网关使用Higress 作为内核，主要考虑其强大的开源社区，丰富的扩展机制等，同时和网关未来多网关融合目标一致，因此我们基于Higress 网关构建，并将原有API网关、数据网关、互通网关等能力迁移。</font>

**<font style="color:rgb(38, 38, 38);"></font>**

**<font style="color:rgb(38, 38, 38);">3.2 智能体出入口网关</font>**

<font style="color:rgb(38, 38, 38);">当前智能体无疑是最热的话题，很多企业开始构建自己的垂直业务智能体。为了帮助企业更好、更快地构建自己的智能体，我们将网关明确定位为智能体流量的统一出入口网关。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">SOFA AI 网关为智能体提供关键能力：</font>

+ **<font style="color:rgb(38, 38, 38);">保障入口安全与稳定</font>**<font style="color:rgb(38, 38, 38);">： 对进入智能体的下游流量实施安全防护与业务限流，确保智能体应用的稳定运行与安全防护。</font>
+ **<font style="color:rgb(38, 38, 38);">赋能智能体核心能力</font>**<font style="color:rgb(38, 38, 38);">： 智能体自身需依赖模型、工具、知识库等进行推理、规划并缓解幻觉问题，以持续提升问题解答质量，最终成为专业的智能体。为此，网关在智能体的出口流量侧对出口流量统一收敛，简化智能体与外部对接成本。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01VlNss51CsnMIYW8aw_!!6000000000137-54-tps-1952-1082.apng)

<font style="color:rgb(38, 38, 38);">SOFA AI网关在智能体出口流量侧，主要提供了以下几个关键功能： </font>

+ **<font style="color:rgb(38, 38, 38);">模型代理</font>**<font style="color:rgb(38, 38, 38);">。 提供统一的模型接入与管理层，支持便捷的模型替换（如A/B测试效果验证）、流量控制及Token统一管理，大幅简化智能体研发过程中的模型迭代。 鉴于模型资源成本高昂，网关还实现了业务级精细化的模型调用限流，有效防止部分业务过度消耗资源，保障整体模型服务的性能与稳定性，避免资源争用。</font>
+ **<font style="color:rgb(38, 38, 38);">工具和MCP管理</font>**<font style="color:rgb(38, 38, 38);">。 SOFA AI 网关充当智能体与企业存量系统的桥梁，将现有的 REST API 标准化封装为智能体可识别的 Function 调用，实现服务的便捷集成与统一管理。随着 MCP (Model Context Protocol) 协议的出现，网关进一步将存量 API 转换为 MCP 格式供智能体使用，极大简化了智能体对接后端服务的流程。对于企业采购的外部 AI 服务（通常具有独立的认证体系），网关作为统一的出口代理，处理复杂的对接协议和认证，使智能体能够无缝调用外部能力，专注于核心业务逻辑。</font>
+ **<font style="color:rgb(38, 38, 38);">数据服务与快速取数：</font>**<font style="color:rgb(38, 38, 38);">SOFA 网关内置数据开放 API，能够将大数据平台处理后的结果，通过 SQL 查询动态生成 REST API，进而封装为智能体可直接使用的工具。鉴于 NL2SQL (自然语言转 SQL) 和 NL2Data (自然语言取数) 技术的兴起，网关规划集成此类功能，未来将支持用户/智能体通过更自然的语言指令高效获取所需数据。</font>

**<font style="color:rgb(38, 38, 38);"></font>**

**<font style="color:rgb(38, 38, 38);">3.3 推理网关-模型智能路由代理</font>**

<font style="color:rgb(38, 38, 38);">网关在代理模型服务时与传统服务代理存在显著差异。这种差异的根源在于模型服务自身独特的流量特性，主要包括：</font>

+ **<font style="color:rgba(0, 0, 0, 0.88);">高延迟与排队效应</font>**<font style="color:rgba(0, 0, 0, 0.88);">：模型推理需复杂计算，单请求处理时间远超传统服务（可达数秒至分钟）。新请求到达时，若实例正忙，会进入队列等待，导致首个token响应时间大幅延长，用户体验下降。这与传统服务的快速处理模式形成对比。</font>
+ **<font style="color:rgba(0, 0, 0, 0.88);">高资源消耗与持续占用</font>**<font style="color:rgba(0, 0, 0, 0.88);">：模型推理依赖GPU等专用硬件，是计算密集型任务。GPU资源（显存和算力）是关键瓶颈，一个推理请求会全程占用资源，无法像传统无状态服务那样快速释放资源。</font>
+ **<font style="color:rgba(0, 0, 0, 0.88);">处理时间差异大</font>**<font style="color:rgba(0, 0, 0, 0.88);">：模型请求耗时受输入/输出长度、模型复杂度和任务类型影响，波动极大（几秒到数分钟）。这种不确定性使传统基于固定时间窗口或连接数的负载均衡策略难以适用。</font>

<font style="color:rgba(0, 0, 0, 0.88);"></font>

<font style="color:rgba(0, 0, 0, 0.88);">正是基于模型流量的上述核心特点， 传统网关常用的负载均衡策略（如简单的轮询、最少连接数、随机）在模型服务代理场景下往往效果不佳，甚至适得其反。例如，轮询可能将新请求分配给已满载并处于排队状态的实例，从而进一步加剧延迟。因此，模型服务网关需要提供更智能的路由策略，能够根据模型实例的实时负载、KV Cache状态、队列情况等指标进行动态决策。 </font>

<font style="color:rgba(0, 0, 0, 0.88);"></font>

<font style="color:rgba(0, 0, 0, 0.88);">SOFA AI 网关作为模型的统一入口，负责实现模型的多集群路由与代理功能，并提供模型注册、下线的生命周期管理以及智能路由能力。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01aXRIoZ1pFC7zAK36Z_!!6000000005330-54-tps-2824-1430.apng)

<font style="color:rgb(38, 38, 38);">SOFA AI 网关的智能路由逻辑与开源 Higress 以及业内推理网关的实现方式有所不同，但融合了两者的优势。Higress 的智能路由能力完全在插件中实现，即所有路由逻辑均通过插件方式开发和集成，包括基于 metrics 指标的路由。这种设计在性能上表现较佳。而当前业内的推理网关普遍基于 Gateway API Inference Extension 规范实现，通过独立部署的 EPP 服务进行路由选择。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">SOFA AI 网关出于提升交付效率的考虑，既未选择直接修改 Higress 数据面源码集成 Gateway API Inference Extension 能力，也没让业务侧直接在插件里写路由插件。相反，我们通过开发 Higress 插件，通过支持 ext-proc 协议对接业务侧的EPP 服务或使用 http协议对接传统服务，方便自定义路由扩展。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">当然，未来为更好地与行业标准对齐，我们也计划在数据面进行修改，以集成原生的 Gateway API Inference Extension 能力。</font>

**<font style="color:rgb(38, 38, 38);"></font>**

**<font style="color:rgb(38, 38, 38);">3.4 MCP市场</font>**

<font style="color:rgb(38, 38, 38);">在智能体项目的实践中，我们认识到高质量的工具（特别是专业化的MCP）和权威数据是智能体能力的关键。通用大模型在金融等专业领域落地存在显著局限：知识可能过时、缺乏深度行业理解、难以保证回答的准确性与合规性。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">专业工具（MCP） 的作用在于：</font>

+ **<font style="color:rgb(38, 38, 38);">提供精准、实时的专业能力</font>**<font style="color:rgb(38, 38, 38);">： 将复杂的金融分析、诊断、解读等任务封装为可调用的服务，确保输出结果的专业性和可靠性。</font>
+ **<font style="color:rgb(38, 38, 38);">接入权威、动态的数据源</font>**<font style="color:rgb(38, 38, 38);">： 直接对接处理好的专业数据及合作方的核心金融数据，解决通用模型数据滞后、来源单一的问题。</font>
+ **<font style="color:rgb(38, 38, 38);">提升效率与可扩展性</font>**<font style="color:rgb(38, 38, 38);">： 将特定能力模块化、服务化，便于智能体按需调用，也利于能力的持续迭代和复用。因此我们基于蚂蚁的金融专业能力，以及在宁波等项目沉淀的智能体研发经验，将一些有质量的金融数据、金融服务包装成MCP，构建一个MCP 市场，为专有云的智能体提供 SaaS 化服务。 我们旨在将沉淀的金融专业能力（知识、数据、流程、风控等） 进行标准化、服务化封装，构建一个金融能力“乐高”市场。SOFA AI 平台已上架并持续丰富一系列面向金融场景的MCP，为智能体提供强大的“专业工具箱”。 目前已经上架多个金融领域MCP, 如产品诊断、配置选品、行情解读、事件解读等。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01e7XyJV27chXVydjbz_!!6000000007818-54-tps-2812-1576.apng)

**<font style="color:rgb(38, 38, 38);"></font>**

**<font style="color:rgb(38, 38, 38);">mcp 市场地址：</font>**[<font style="color:rgb(22, 119, 255);">https://mcp.sofa.antdigital.com/mcp/home</font>](https://mcp.sofa.antdigital.com/mcp/home)

![](https://img.alicdn.com/imgextra/i3/O1CN0158moeb1WvoHTmTZAP_!!6000000002851-54-tps-3832-1920.apng)

<font style="color:rgb(22, 119, 255);"></font>

**<font style="color:rgb(38, 38, 38);">四. 未来展望</font>**

<font style="color:rgb(38, 38, 38);">在建设过程中，我们也遇到了一些新的挑战，主要包括实体识别准确度不足和 MCP 上下文超限等问题。</font>

<font style="color:rgb(38, 38, 38);"></font>

**<font style="color:rgb(38, 38, 38);">实体提取不清晰</font>**<font style="color:rgb(38, 38, 38);">： 用户通过自然语言查询或操作 MCP 服务时，涉及的关键输入（如基金、股票名称或代码）高度依赖精准的实体识别。然而，当用户使用别名、行业非标准称谓（俗称“黑话”）或不完整名称时，模型提取的结果可能无法准确对应到真实的金融实体（如基金名称或证券代码）。这直接影响后续处理的准确性和用户体验。因此，我们亟需引入“</font>**<font style="color:rgb(38, 38, 38);">提槽</font>**<font style="color:rgb(38, 38, 38);">”工程能力，通过对识别结果进行精细化校验和映射，以提升用户交互体验和信息召回率。</font>

<font style="color:rgb(38, 38, 38);"></font>

**<font style="color:rgb(38, 38, 38);">MCP 上下文爆炸</font>**<font style="color:rgb(38, 38, 38);">： 目前平台已上架的专业 MCP 达到 15 个，且未来数量将持续增加。接入过多的 MCP 会显著膨胀单个请求的处理上下文（Context），对模型的性能和资源消耗造成压力。针对此问题，构建一套智能化的 MCP 路由机制变得尤为重要，以便根据用户请求精准筛选所需的服务模块，避免不必要的上下文加载。</font>

<font style="color:rgb(38, 38, 38);"></font>

<font style="color:rgb(38, 38, 38);">构建提槽能力和 MCP 智能路由能力，也将是 SOFA AI 网关在下半年重点发力的方向。</font>

<font style="color:rgb(38, 38, 38);"></font>

**<font style="color:rgb(38, 38, 38);">五. 致谢</font>**

<font style="color:rgb(38, 38, 38);">感谢 Higress 开源团队，因为有higress 这么好的产品，SOFA AI 网关才能得以快速孵化。特别感谢 @澄潭 在SOFA AI网关建设过程中提供的专业解答。</font>


