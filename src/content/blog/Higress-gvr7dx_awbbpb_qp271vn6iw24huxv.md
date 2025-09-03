---
title: "HiMarket 正式开源，为企业落地开箱即用的 AI 开放平台"
description: "HiMarket 正式开源，为企业落地开箱即用的 AI 开放平台"
date: "2025-09-02"
category: "announcement"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：岛风、十眠、严研

## <font style="color:rgb(13, 18, 57);">HiMarket 正式开源</font>
<font style="color:rgb(13, 18, 57);">8月29日，由 Higress 社区和 Nacos 社区共同发起的全新开源项目 </font>**<font style="color:rgb(13, 18, 57);">HiMarket AI 开放平台</font>**<font style="color:rgb(13, 18, 57);">，正式发布。</font>

**<font style="color:rgb(13, 18, 57);">GitHub 地址：</font>**[**<font style="color:rgb(94, 92, 230);">https://github.com/higress-group/himarket</font>**](https://github.com/higress-group/himarket)

<font style="color:rgb(13, 18, 57);">在 AI 浪潮席卷千行百业的今天，我们看到无数企业和开发者满怀激情地投身其中。无论是将内部的大模型能力赋能给各个业务线，还是希望将昂贵的 AI 资产对外开放、构建生态，一个强大的“AI 开放平台”都已成为刚需。</font>



作为 Higress 的贡献者，我们在与许多开发者和企业用户的交流中发现：当企业借助 Higress AI 网关完成模型与工具的统一接入后，难点便从“连通”转向“协作与产品化”。工具提供方、Agent 开发者、安全合规、财务运营等角色各自为政，产生了能力目录分散、上架流程不一致，权限与配额难统一，成本难计量与分摊，内容安全也难以落实到每一次调用等一系列问题。企业自然需要一个面向多角色、体验友好、功能完备的上层开放平台，那么，企业应如何构建这样的平台？

<font style="color:rgb(13, 18, 57);"></font>

<font style="color:rgb(13, 18, 57);">从 0 开始构建，你可能需要：</font>

+ **<font style="color:rgb(13, 18, 57);">开发一套完整的门户系统（> 3个月）</font>**<font style="color:rgb(13, 18, 57);">：从 UI/UX 设计到前后端开发。</font>
+ **<font style="color:rgb(13, 18, 57);">实现复杂的开发者与应用管理</font>**<font style="color:rgb(13, 18, 57);">：注册、审批、RBAC 权限、凭证管理与轮转。</font>
+ **<font style="color:rgb(13, 18, 57);">设计繁琐的订阅与授权流程</font>**<font style="color:rgb(13, 18, 57);">：如何让开发者自助订阅？如何将授权关系安全地同步到网关？</font>
+ **<font style="color:rgb(13, 18, 57);">构建面向运营和开发者的可观测性</font>**<font style="color:rgb(13, 18, 57);">：从网关和 MCP Registry 拉取原始数据，进行二次开发，实现按模型、按消费者的多维度成本与计量分析。</font>

<font style="color:rgb(13, 18, 57);">我们估算，这部分工作占据了构建一个完整 AI 开放平台 </font>**<font style="color:rgb(13, 18, 57);">80%</font>**<font style="color:rgb(13, 18, 57);"> 的工作量。这不仅耗时耗力，更可能让企业的 AI 落地进程受阻。</font>

<font style="color:rgb(13, 18, 57);">这正是我们发起 HiMarket 的初心：帮助用户从 80% 开始构建 AI 开放平台。</font>

### <font style="color:rgb(13, 18, 57);">HiMarket 是什么？</font>
<font style="color:rgb(13, 18, 57);">HiMarket 是一个开箱即用的 AI 开放平台解决方案。它不是一个简单的 API 列表页，而是一个企业级的</font><font style="color:rgb(13, 18, 57);"> </font>**<font style="color:rgb(13, 18, 57);">“AI 能力市场与开发者生态中心”</font>**<font style="color:rgb(13, 18, 57);">。</font>

<font style="color:rgb(13, 18, 57);">它由几大核心组件构成，完美匹配企业内不同角色的需求：</font>

1. **<font style="color:rgb(13, 18, 57);">AI 开放平台管理后台 (for 管理员/运营)</font>**<font style="color:rgb(13, 18, 57);">：在这里将底层的模型服务、MCP Server、Agent 等多样化的 AI 能力，以 API 的形式轻松打包成标准化的“AI 产品”，并配上完善的文档、示例，最终一键发布到门户。</font>
2. **<font style="color:rgb(13, 18, 57);">AI 开放平台门户 (for 开发者)</font>**<font style="color:rgb(13, 18, 57);">：门户是面向内外开发者的“店面”。开发者可以在此完成开发者注册、创建消费者、获取凭证、浏览和订阅 AI 产品、在线测试，并清晰地监控自己的调用状态和成本。</font>
3. **<font style="color:rgb(13, 18, 57);">AI 网关</font>**<font style="color:rgb(13, 18, 57);">：作为 Higress 社区的子项目，Higress AI 网关承载所有 AI 调用的认证、安全、流控、协议转换以及可观测性等能力。</font>
4. **<font style="color:rgb(13, 18, 57);">Nacos</font>**<font style="color:rgb(13, 18, 57);">：Nacos 作为 MCP Registry 为门户提供全面的 MCP Server 元信息托管，版本管理，服务发现，密钥托管等能力。通过动态服务发现和动态配置变更实现系统灵活扩展和变更，通过 Nacos MCP Router 智能路由简化多 MCP 服务管理和调用。在日常开发测试的场景中，通过动态 Prompt 变更实现高效的 MCP 服务调试，在生产环境中通过多版本管理实现灰度发布，通过加密存储和动态配置变更提升安全能力。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01ib1T4X1GNt5FX2lbk_!!6000000000611-2-tps-2537-1185.png)

<font style="color:rgb(13, 18, 57);">通过 HiMarket，你可以专注于最核心的价值创造：</font>

+ **<font style="color:rgb(13, 18, 57);">接入你的核心 AI 能力</font>**<font style="color:rgb(13, 18, 57);">：无论是自研模型还是第三方服务。</font>
+ **<font style="color:rgb(13, 18, 57);">定义你的 AI 产品</font>**<font style="color:rgb(13, 18, 57);">：将 AI 能力封装成有商业价值的 AI 产品。</font>
+ **<font style="color:rgb(13, 18, 57);">运营你的开发者生态</font>**<font style="color:rgb(13, 18, 57);">：邀请开发者入驻，支持企业级内部用户体系接入，构建合作伙伴关系。</font>

<font style="color:rgb(13, 18, 57);">HiMarket 可以为以下几种场景提供助力</font>

1. **<font style="color:rgb(27, 28, 29);">企业内部的中央 AI 中台</font>**

<font style="color:rgb(27, 28, 29);">在大型企业内部，当各个业务线都开始引入 AI 能力时，若各自为政，很快就会陷入接入混乱、成本失控和安全风险的困境，影响企业整体AI创新的速度。此时，HiMarket 作为 AI 时代统一的AI 资产管理平台，成为所有内部系统访问内外部 AI 服务的统一、标准化的入口。这种集中化的模式带来了巨大的管理效益：</font>

+ **<font style="color:rgb(27, 28, 29);">成本审计与分摊</font>**<font style="color:rgb(27, 28, 29);">：精确记录并分析各业务部门、各应用的 Token 消耗量，为成本控制、预算分配和内部结算提供清晰、可信的数据支持。</font>
+ **<font style="color:rgb(27, 28, 29);">数据安全与合规</font>**<font style="color:rgb(27, 28, 29);">：建立全企业统一的内容安全策略，能够有效防止企业内部的敏感数据（如客户信息、财务报表）通过 prompt 被无意或恶意地发送给外部模型，构筑起一道关键的数据防泄露屏障。</font>
+ **<font style="color:rgb(27, 28, 29);">资源复用</font>**<font style="color:rgb(27, 28, 29);">：通过部署统一的语义化缓存，对全公司范围内的高频、相似问题直接返回缓存结果，不仅能有效降低模型调用成本，更能显著提升响应速度，改善员工和客户的体验。</font>
+ **<font style="color:rgb(27, 28, 29);">效率提升：</font>**<font style="color:rgb(27, 28, 29);">以统一 AI 中台打通部门数据，复用私域数据的检索/问答/诊断能力，标准化接入与交付流程，显著加快 AI 能力在各业务线的落地。</font>


2. **<font style="color:rgb(27, 28, 29);">私有 MCP 市场：企业 MCP 工具生态的统一入口</font>**

随着 MCP 协议的普及，企业可以以标准化接口将模型与外部工具和服务“即插即用”地连接起来，显著降低对接成本并提升系统的灵活性与可扩展性。在企业侧通过 MCP 市场作为单一入口集中接入与治理 MCP 服务，AI Agent 得以用统一方式高效调用内部系统执行如订单查询、会议室预订等具体任务，同时确保流量治理与弹性扩展的一致性。企业内所有对外部工具的调用请求都必须先通过 HiMarket 进行集中的、标准化的安全管控，包括统一的认证鉴权、精细的速率限制、全面的审计日志等。这种方式避免了在每一个独立的工具服务上重复实现和维护复杂的安全逻辑，极大地简化了 MCP 工具生态的安全治理，为企业构建一个安全、可靠、可控的 AI Agent 体系提供了坚实的基础。HiMarket 可以帮助企业一键拉起私有化的MCP市场，例如 Higress 构建的开源MCP市场：[https://mcp.higress.ai/](https://mcp.higress.ai/)![](https://img.alicdn.com/imgextra/i1/O1CN01ublMgM1zNZWJUqRmS_!!6000000006702-2-tps-5080-1938.png)

3. **构建企业 AI 能力货币化的统一 AI 开放平台**

任何企业的终极目标都是营收与利润。随着 AI 智能体加速走入工作与生活，业内越来越多的声音将这一趋势称为“Agent 经济”。从生态图谱的想象中可以看到，围绕智能体的工具、数据、算力与行业服务都会被标准化为可交易的能力，具备广阔的商业化空间。而承载这类变现路径的核心载体，就是面向开发者与企业的“AI 开放平台”——通过统一的 API 把智能体的感知、推理与外部工具连接起来，实现规模化分发与计费。

![](https://img.alicdn.com/imgextra/i1/O1CN01vHvweR1Vp6rRbB6AN_!!6000000002701-2-tps-1920-1080.png)

HiMarket 定位成为“AI API 经济”的开源基座，帮助企业把分散的智能体、模型、RAG、工具与行业数据统一沉淀为标准化的 API 资产。通过一站式的能力目录与上架、接入校验、权限与审计、调用计量与配额、以及计费与对账接口对接，HiMarket 让能力可被快速发现、组合、分发与结算，形成从内部能力到外部营收的闭环，打造属于企业的统一 AI 开放平台与API货币化通道。

### <font style="color:rgb(27, 28, 29);">HiMarket：AI 加持的开放平台</font>
面向 AI 时代的演进，HiMarket 的愿景是成为“AI 加持的开放平台”：借助对 OpenAPI、MCP Manifest、OAS Swagger 等 API 元数据的理解，探索 AI 辅助一键生成多语言 SDK、示例与契约测试；基于语义检索与任务意图实现工具的智能发现与路由；在运行期形成可用性、时延、成功率等质量画像与评分；提供 Token 成本计量与预算优化；并在提示词级落地内容安全与敏感信息防泄露策略等。

上述能力目前处于路线图阶段，尚未全部实现，我们希望与社区共同验证与打磨——以开放的 RFC 与插件化架构推进原型落地，优先打通“元数据摄取—评测基准与遥测规范—质量评分与路由策略”的最小可用闭环。欢迎开发者参与讨论、提交 Issue/PR，或贡献适配器与评测集，一起把 HiMarket 打造成企业私有 AI API 市场在“发现—接入—治理—监控—优化—变现”上的统一入口与创新加速器。

### <font style="color:rgb(13, 18, 57);">快速入门</font>
<font style="color:rgb(13, 18, 57);">我们为你准备了详尽的快速入门指南，只需简单几步，你就能在本地将 HiMarket 运行起来，亲身体验“从 80% 开始”的快感。</font>

#### **<font style="color:rgb(13, 18, 57);">第一步：准备环境与代码</font>**
<font style="color:rgb(13, 18, 57);">确保你已安装 Git, JDK 8, Maven，Node.js (v20), 并准备好一个 MySQL 数据库。</font>

```shell
git clone https://github.com/higress-group/himarket.git
cd himarket
```  

#### **<font style="color:rgb(13, 18, 57);">第二步：启动后端服务</font>**
<font style="color:rgb(13, 18, 57);">HiMarket 后端服务依赖数据库，请根据</font><font style="color:rgb(13, 18, 57);"> </font>`<font style="color:rgb(13, 18, 57);">portal-bootstrap/src/main/resources/application.yaml</font>`<font style="color:rgb(13, 18, 57);"> </font><font style="color:rgb(13, 18, 57);">修改配置，或在启动时通过参数传入。</font>

```shell
# 打包项目
mvn clean package

# 启动后端 (请替换为你的数据库信息)
java -Ddb.host=YOUR_DB_HOST \
     -Ddb.port=YOUR_DB_PORT \
     -Ddb.name=YOUR_DB_NAME \
     -Ddb.username=YOUR_DB_USER \
     -Ddb.password=YOUR_DB_PASSWORD \
     -jar portal-bootstrap/target/portal-bootstrap-1.0-SNAPSHOT.jar
```

#### **<font style="color:rgb(13, 18, 57);">第三步：启动前端</font>**
<font style="color:rgb(13, 18, 57);">HiMarket 包含管理后台和开发者门户两个前端。</font>

```shell
# 启动管理后台
cd portal-web/api-portal-admin
npm install
npm run dev
# 访问 http://localhost:5174

# 启动开发者门户
cd portal-web/api-portal-frontend
npm install
npm run dev
# 访问 http://localhost:5173
```

#### **<font style="color:rgb(13, 18, 57);">第四步：5 分钟体验核心流程</font>**
1. **<font style="color:rgb(13, 18, 57);">访问管理后台 (</font>**`**<font style="color:rgb(13, 18, 57);">localhost:5174</font>**`**<font style="color:rgb(13, 18, 57);">)</font>**<font style="color:rgb(13, 18, 57);">，注册管理员账号。</font>
2. **<font style="color:rgb(13, 18, 57);">导入服务来源</font>**

根据业务场景选择导入MCP Server所在的服务来源，当前支持网关跟Nacos。

   a. **<font style="color:rgb(13, 18, 57);">导入网关实例</font>**<font style="color:rgb(13, 18, 57);">：在【实例管理】中，导入 Higress 网关。  
</font>![](https://img.alicdn.com/imgextra/i3/O1CN01TrZ7vi264WM8Ob9iT_!!6000000007608-2-tps-2842-1318.png)
    b. **导入Nacos实例：**<font style="color:rgb(13, 18, 57);">在【实例管理】中，导入 Nacos 。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01crsoiK1dzeuU3XUfA_!!6000000003807-54-tps-3012-1664.apng)

3. **<font style="color:rgb(13, 18, 57);">创建门户</font>**<font style="color:rgb(13, 18, 57);">：在【Portal】菜单下，创建一个属于你的 AI 门户，并为其绑定一个用于本地测试的域名（如 </font>`<font style="color:rgb(13, 18, 57);">localhost</font>`<font style="color:rgb(13, 18, 57);">）。  
</font>![](https://img.alicdn.com/imgextra/i2/O1CN01TjON2e1rKoClqZToJ_!!6000000005613-2-tps-2858-1280.png)

4. **<font style="color:rgb(13, 18, 57);">创建并发布 AI 产品</font>**<font style="color:rgb(13, 18, 57);">：在【API Products】中，将一个来自 Higress 的 MCP 服务封装成产品，并将其发布到你刚刚创建的门户。  
</font>![](https://img.alicdn.com/imgextra/i3/O1CN01anknAg1ujUOYLVcYu_!!6000000006073-2-tps-2854-1192.png)

5. **<font style="color:rgb(13, 18, 57);">切换到开发者门户 (</font>**`**<font style="color:rgb(13, 18, 57);">localhost:5173</font>**`**<font style="color:rgb(13, 18, 57);">)</font>**<font style="color:rgb(13, 18, 57);">，注册一个开发者账号，并等待管理员在后台审批通过。</font>

6. **<font style="color:rgb(13, 18, 57);">订阅并调用</font>**<font style="color:rgb(13, 18, 57);">：登录开发者门户，你会看到刚才发布的 AI 产品。创建一个消费者(Consumer)来获取凭证，然后订阅该产品，即可开始调用！  
</font>![](https://img.alicdn.com/imgextra/i2/O1CN01JHalCr1KD8FIoJAli_!!6000000001129-2-tps-1878-844.png)

### <font style="color:rgb(13, 18, 57);">我们的旅程与你的参与</font>
<font style="color:rgb(13, 18, 57);">HiMarket 目前正处于起步阶段，我们已经实现了 AI 开放平台的核心流程，但这仅仅是开始。</font>

<font style="color:rgb(13, 18, 57);">HiMarket 路线图：</font>

+ **<font style="color:rgb(13, 18, 57);">Phase 1 (当前)</font>**<font style="color:rgb(13, 18, 57);">: 发布功能完整的开源 MVP 版本，与社区共同打磨，优化体验</font>
+ **<font style="color:rgb(13, 18, 57);">Phase 2 (Q3 2025)</font>**<font style="color:rgb(13, 18, 57);">: 可观测、计量计费、Rest API 拆分 Model API/Agent API、A2A 支持</font>
+ **<font style="color:rgb(13, 18, 57);">Phase 3 (Q4 2025)</font>**<font style="color:rgb(13, 18, 57);">: MCP 质量工具、RBAC、门户 DIY、调试、SDK 生成</font>

<font style="color:rgb(13, 18, 57);">HiMarket 的未来，离不开每一位开发者的参与和贡献。我们真诚地邀请你：</font>

+ <font style="color:rgb(13, 18, 57);"></font>**<font style="color:rgb(13, 18, 57);">Star 我们的项目</font>**<font style="color:rgb(13, 18, 57);">：这是对我们最直接的鼓励 </font>[<font style="color:rgb(94, 92, 230);">https://github.com/higress-group/himarket</font>](https://github.com/higress-group/himarket)
+ **<font style="color:rgb(13, 18, 57);">部署和试用</font>**<font style="color:rgb(13, 18, 57);">：将 HiMarket 用起来，感受它的价值。</font>
+ **<font style="color:rgb(13, 18, 57);">提交 Issue</font>**<font style="color:rgb(13, 18, 57);">：无论是 Bug 还是功能建议，你的反馈至关重要。</font>
+ **<font style="color:rgb(13, 18, 57);">贡献代码</font>**<font style="color:rgb(13, 18, 57);">：我们已经准备了一系列 </font>`<font style="color:rgb(13, 18, 57);">good first issue</font>`<font style="color:rgb(13, 18, 57);">，期待你的第一个 PR。</font>
+ **<font style="color:rgb(13, 18, 57);">加入社区</font>**<font style="color:rgb(13, 18, 57);">：扫描下方二维码加入我们的社区交流群（钉钉），与核心开发者直接交流。</font>
+ **<font style="color:rgb(13, 18, 57);">共建生态</font>**<font style="color:rgb(13, 18, 57);">：坚持代码结构友好，便于二次开发与扩展，欢迎 fork 定制并回馈贡献，共同完善生态。</font>

![](https://img.alicdn.com/imgextra/i2/O1CN014Frage1uqMKtKyP6v_!!6000000006088-2-tps-864-822.png)




