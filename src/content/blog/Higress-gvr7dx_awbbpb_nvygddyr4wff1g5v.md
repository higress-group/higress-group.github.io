---
title: "Higress MCP 服务管理，助力构建私有 MCP 市场"
description: "Higress MCP 服务管理，助力构建私有 MCP 市场"
date: "2025-07-03"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：岛风、绿水、十眠

## 前言
今年 3 月份 MCP 协议成为了 AI 的新一轮热点，被大多数人所熟知，彼时 Higress 快速进行跟进，新增了 MCP 协议转换功能，详见：[https://higress.cn/ai/mcp-quick-start](https://higress.cn/ai/mcp-quick-start)，该方案解决了以下问题：

1. 引入 Redis，借助其 pub/sub 特性，解决了 SSE 协议会话保持的问题
2. 提供了 OpenAPI 转换成 MCP Server 的能力，仅需提供符合 OAS 3.0 规范的 OpenAPI 文档，即可自动转换成网关托管的 MCP Server
3. 提供了 Go Template 和 GJSON 表达式，来对请求和响应模版进行精细化处理，这使得用户只需要变更配置即可完成对 MCP Server 的调优，且变更过程流量完全无损，SSE 连接也不会断开。

该功能一经推出，迅速在开源社区引起了用户广泛的关注，同时在交流群中，也有大量用户反馈了配置失败的问题，因为该功能过于原子化且配置复杂，用户很容易遇到配置失败的问题，为进一步增加用户体验，我们决定将 Higress MCP 相关的能力以场景化的方式，集成在 Higress Console 中，即 MCP 服务管理模块。

![](https://img.alicdn.com/imgextra/i2/O1CN01LhzNAZ1SyJxcqWlQk_!!6000000002315-2-tps-2820-1338.png)

用户可以在 Higress 2.1.5 版本中正式体验该文中提及的所有特性。

## Higress MCP 服务管理介绍
### Higress MCP 服务管理功能概览
![](https://img.alicdn.com/imgextra/i2/O1CN01n1agEl1vfCHYR0kcJ_!!6000000006199-2-tps-1905-872.png)

Higress MCP 服务管理模块提供了以下能力：

+ OpenAPI 转换 MCP。根据用户提供的 OAS 3.0 文档，连接网关已有的 HTTP 后端服务，即可自动转换成 MCP Server。
+ DB 转换 MCP。用户仅需将数据库实例配置为网关的后端服务，即可自动转换成 MCP Server，目前支持 MySQL、PostgreSQL、Clickhouse、Sqlite。
+ MCP 直接路由。可以直接代理 SSE/Streamable 协议的后端服务。
+ MCP 认证授权能力。

站在一个 Higress 开源贡献者的视角，我还是先澄清下 Higress 本身的定位，其主要还是承担 AI 网关/MCP 网关的职责，作为一个基础设施，帮助企业更好地构建自身的 MCP 市场，其提供的 MCP 特性支持，可以非常友好地跟 MCP 应用商店（如 mcp.so）、MCP 客户端市场（Cline、Cursor、Cherry Studio）、平台型市场（百炼、魔搭、Dify）等场景结合，Higress 跟这些场景并不是竞争关系。

### MCP 服务管理和 mcp.higress.ai
![](https://img.alicdn.com/imgextra/i2/O1CN01N58eJQ1GiUtCYNXdk_!!6000000000656-2-tps-1909-940.png)

此前 Higress 官方发布了一个 SaaS 版本的 MCP 市场：mcp.higress.ai，其完全基于 Higress MCP 服务管理构建。目前前后端代码未开源，以 SaaS 化的形式开放相关能力供用户使用，仅起到一个功能演示的作用，用户也可以参考 mcp.higress.ai 的交互，基于 Higress 自行构建自己的 MCP 市场。

### Higress、Naos 3.0 与 MCP 市场
如果你正在构建企业私有化的 MCP 市场，一定会关心本文介绍的 Higress MCP 服务管理、Nacos 3.0 和 MCP 市场之间的关系，以下是一些释疑。

部分企业有自建 MCP 市场的需求。Higress MCP 服务管理仅是 Higress MCP 相关原子能力的控制台表现形式，旨在提供给用户一个更友好的交互界面，也提供了 OpenAPI 被集成能力，它可以成为企业私有化 MCP 市场的一个重要组成部分，但是单独这一组件并不足以完整支撑全部场景的需求。

Nacos 3.0 提供了 MCP Registry 的能力，在构建企业级 MCP 市场时，Higress 承担了 MCP Proxy 的职责，Nacos 承担了 MCP Registry 的职责，Nacos 可以更好地集合市场信息和管理 MCP Server 运行时，Higress 未来也会在产品层面跟 Nacos MCP Registry 做更加深度的集成，形成 MCP 市场的整体解决方案。

在开源自建场景：推荐集成 Higress Console 的 OpenAPI 或者 admin-sdk，以及 Nacos MCP Registry，企业再自行开发一个符合企业私有化标识的 MCP 市场前/后端应用，才能够打造属于企业自己的私有化 MCP 市场。

在阿里云商业化场景：阿里云公共云 API Gateway、专有云飞天企业版 API Gateway 计划推出开箱即用的 MCP 市场，该方案将会基于 MCP 服务管理和 Nacos 3.0 封装出更上层的应用，计划提供两种模式供商业化用户选择：

+ 模式一：开箱即用提供可扩展、可定制的实例化 MCP 市场。
+ 模式二：提供 MCP 市场源码，方便企业用户二次开发。

下边重点介绍 Higress MCP 服务管理的三种服务类型 OpenAPI 转换 MCP、MCP 直接路由、DB 转换 MCP，以及他们分别支撑的业务场景。

## OpenAPI 转换 MCP
企业在开发 MCP Server 供 AI Agent 使用时，可以大致分为两类场景：存量场景和增量场景。存量场景即企业已有的 IT 资产，以电商场景为例，订单系统、商品系统、地址系统，这些系统需要具备被 AI Agent 调用的能力，都需要 MCP 化；增量场景即单独为 AI Agent 更好地运行而开发的 MCP 工具，典型的例子：高德地图所提供的 amap MCP Server。

高德团队在提供 amap MCP Server 之前，也有成套的 amap openapi，只不过之前都是给传统应用调用的。大多数企业的业务团队如果愿意投入大量的精力和决心，一定也可以编写出像 amap MCP Server 这样高质量的制品，但现实情况很有可能是企业存量的业务会存在诸多顾虑：

1. 存量业务系统的维护人员更新换代了好几批，部分长尾应用不敢增量代码
2. 业务系统数量多，全量改造时间排期长
3. 业务人员学习 AI 技术栈的技术曲线较高
4. MCP Server 的部署增加了新的资源消耗

一旦一项新的技术涉及到存量系统的改造，再加上选择的改造方案门槛高，就很有可能导致改造无法落地，最后成为企业的一笔糊涂账。

Higress 提供的 OpenAPI 转换 MCP 功能，一定不是唯一的 MCP 接入方案，但其优势非常突出：

+ 零代码改造，接入便利。仅需提供存量服务的 OpenAPI 文档（符合 OAS 3.0 规范），无需编写一行接入代码，即可被 Higress 纳管。
+ 白屏化工具修改，维护便利。后期可以在 Higress Console 中，调整 OpenAPI 转换过后的 MCP 元数据（yaml 格式），微调工具和描述，使得 MCP 更好地与 Agent 协作。
+ 无需提供 MCP 运行时，运维便利。与传统 stdio/sse 提供的方案不同，Higress 网关不需要拉起任何诸如 Docker 之类的 MCP 运行时资源，完全通过协议转换完成，占用的是网关自身的资源。

借助 Higress 这一特性，业务可以将重心放在 MCP 工具的描述与 Agent 如何更好地协作上，而不是如何编写 MCP Server 的代码实现上，给业务智能化进程大大提效。

下边结合 Higress Console 的界面，进行更直观地功能介绍。

在 AI 网关管理 - MCP 管理菜单中，选择创建 MCP 服务，可以创建服务类型为 OpenAPI 的 MCP 服务。

![](https://img.alicdn.com/imgextra/i2/O1CN01Zx0wcL1NIZmeHaHnX_!!6000000001547-2-tps-2856-1342.png)

选择 MCP 服务，可以对其执行编辑工具操作，在此页面中，支持 Swagger 模式和 YAML 模式两种模式。

+ Swagger 模式。导入符合 OAS 3.0 规范的 OpenAPI 文档，即可通过 Higress Console 自动转换成 MCP YAML 元数据，推荐新增时使用。
+ YAML 模式。直接编辑 MCP YAML 元数据，推荐编辑时使用。

![](https://img.alicdn.com/imgextra/i3/O1CN018O2g0u1WVFHXPIu1W_!!6000000002793-2-tps-2860-1342.png)

查看工具列表：

![](https://img.alicdn.com/imgextra/i4/O1CN01dFbIuS1lU4VG6oFxh_!!6000000004821-2-tps-2864-1356.png)

在基本信息以及工具列表下方，也可以直接查看到 SSE/Streamable 接入点的信息，供 MCP 客户端直接连接。

![](https://img.alicdn.com/imgextra/i1/O1CN01yemhXL1pvmw1AdkOx_!!6000000005423-2-tps-2832-1340.png)

## MCP 直接路由
在 OpenAPI 转换 MCP 场景中，我提到了存量和增量的场景，虽然个人观点是存量的业务场景占据大多数，但也不能排除有部分场景会选择自行开发 MCP Server，以及开源 MCP 市场上也涌现了大量的 MCP Server，考虑到这种情况，Higress 也提供了 MCP 直接路由的方案，以对接 SSE/Streamable 协议的后端服务。

可能有部分读者会有疑问，都自己开发 MCP Server 了，MCP 客户端可以直接连接，为啥还需要再由 Higress 代理呢？我的观点是，此处的 Higress 充当了 MCP 网关的作用，有以下优势：

+ 可以借由网关实现 MCP Server 的认证授权、限流、可观测
+ 统一管理 MCP Server 的对外开放

其实在 Higress 目前以及未来的特性规划中，一直将 MCP 当成了一个 API 类型，AI 场景下 API 类型有：

+ LLM API
+ MCP API
+ Agent API

再结合传统 API 网关的 API 类型：

+ Rest API
+ HTTP API
+ Websocket API

再往下可以衍生出 API & AI 开放平台的话题，不过这些都还在探索阶段，可以关注 Higress 社区了解后续相关进展。

## DB 转换 MCP
HIgress 提供的 DB 转换 MCP Server 能力，用户仅需提供数据库连接必要的连接信息（用户名、密码、域名/IP、端口），即可生成实例级别的 MCP Server，无需编写代码，无需提供运行时资源。

目前该特性仍处于探索阶段，使用时请注意以下限制：

+ 仅提供了部分数据库类型的支持：MySQL、PostgreSQL、Clickhouse、Sqlite。
+ 仅支持固定的 Tool 列表：ListTables、DescribeTable、Query、Execute，不支持动态增加

DB 转换 MCP 是 Higress 在数据库以及中间件类通用组件 MCP 化的一个尝试，这提供了一个未来演进可能的方向，我们也希望收到用户的更多反馈。

基于该功能，未来 Higress 也可以演进出 SQL MCP BI 的能力，用于编排符合业务场景的 SQL，转换成 MCP 工具，提供给上层业务用于智能化分析，格式如下： 

```yaml
db_tool:
  name: xxxx
  kind: postgres-sql 
  source: my-pg-source # 通过 name 关联到对应 db_source
  
  # tools 所需元数据
  name: search-hotels-by-name # tools 的名
  description: Search for hotels based on name. # tools 的描述
  inputSchema: # 内容为自定义的 RawMessage
    - type: string
      properties: 
        table: 
          type: string
          description: 'hotel name'
      required: 
        - table
                
  # 执行语句
  statement: SELECT * FROM hotels WHERE name ILIKE '%' || $1 || '%';
```

也欢迎其他 Higress 开源贡献者参与此特性的贡献。

## MCP 认证
### MCP 官方认证方案当前状态
MCP 社区目前对认证方案主要关注用户级别的权限管理，在企业中完整应用这套方案，需要深入到企业员工账号体系。即要从面向 Role 的权限管理，走向面向 User 的权限管理。

在这个 PR 主导下，社区目前已经接受了基于 OAuth2 PRM （<font style="color:rgb(62, 62, 62);"> Protected Resource Metadata </font>）草案的认证方案，并且在最新版本中已经发布。

[https://github.com/modelcontextprotocol/modelcontextprotocol/pull/284#issuecomment-2825122408](https://github.com/modelcontextprotocol/modelcontextprotocol/pull/284#issuecomment-2825122408)

简单来说，是将 Auth Server 的职责从 MCP Server 中抽离，当 MCP Client 不带凭证请求 MCP Server 时，MCP Server 返回 401 并提供 PRM 信息，告知 MCP Client 去 Auth Server 签发 Token，MCP Client 拿到 Token 后再请求 MCP Server。

这个方案解决了 MCP Client 和 MCP Server 通信时自动发现认证端点的问题，但整体方案在 MCP 客户端生态大规模落地估计需要较长时间，并且该方案过于复杂和理想化，个人判断在企业级落地过程会有较大的阻力。

并且一个很有意思的点：[https://github.com/modelcontextprotocol/modelcontextprotocol/issues/544](https://github.com/modelcontextprotocol/modelcontextprotocol/issues/544)，阿里云安全团队在该方案设计过程中提出了潜在的安全隐患，该 issue 在上周刚刚被修复。

### Higress 提供的 MCP 认证方案
我们的评估是即使 MCP 社区标准化的认证方案在技术层面取得突破，在企业落地进程中依然会遇到一定阻力，鉴于此，Higress 结合自身网关认证的场景，以及常见用户诉求，提供了一套网关侧的认证方案。

Higress MCP Server 的认证有两个环节，一个是发生在 MCP Client 与 Higress 之间（downstream），一个是发生在 Higress 到 MCP Server 之间（upstream）。

### higress upstream 认证方案
![](https://img.alicdn.com/imgextra/i3/O1CN01oHFncR1O57lb6YMpM_!!6000000001653-2-tps-787-123.png)

MCP 社区中没有明确规定 remote MCP Server 实现下，MCP Server 到后端服务的认证方式，一种可能性是后端服务类型无法枚举，Higress 提供的 MCP 转换能力，设计了一些约定

Higress 按照 OpenAPI 3.0 规范提供了以下开箱即用的认证能力

+ HTTP Basic Auth
+ HTTP Bearer Token
+ API Key(Header)
+ API Key(Query)

所以，如果 OpenAPI 转换 MCP 场景中，OAS 3.0 文档中包含了后端服务的认证和凭证，Higress 也会使用上该凭证进行后端服务的访问。

### higress downstream 认证方案
![](https://img.alicdn.com/imgextra/i1/O1CN01VxouyI1ahqdwijrLE_!!6000000003362-2-tps-804-122.png)

Higress 作为 MCP 网关，主要价值之一就是对 MCP Server 进行统一的认证管理，推荐和模型服务代理时的 AI 网关场景一致，使用 API Key 进行认证。

MCP 服务的 downstream 认证，即网关侧的认证方式，和路由，AI 路由的用户体验一致，如果熟悉网关的认证插件，不会对该方案感到陌生。

### 透明认证方案
![](https://img.alicdn.com/imgextra/i1/O1CN012J8a6j22I1YLSR7EU_!!6000000007096-2-tps-815-119.png)

同时，透明认证凭证传递的支持，以应对一部分 MCP 直接路由的认证需求，会在未来提供支持。

## Higress 商业化 vs 开源 MCP 能力对比
| | Higress 开源 | 公有云阿里云 API Gateway | 专有云飞天企业版 API Gateway |
| --- | --- | --- | --- |
| OpenAPI 转换 MCP | 支持 | 支持 | 支持 |
| MCP 直接路由 | 支持 SSE/Streamable | 支持 SSE/Streamable，计划支持 Stdio | 支持 SSE/Streamable，计划支持 Stdio |
| MCP Server 认证和鉴权 | API Key | API Key/JWT/OAuth2 等多种认证 | API Key/JWT/OAuth2 等多种认证 |
| MCP Server Tool 粒度鉴权 | 暂无计划 | 支持 | 支持 |
| MCP Server Tool 粒度配额限流 | 暂无计划 | 计划支持（7月） | 计划支持（7月） |
| MCP Server Tool 粒度可观测能力 | 暂无计划 | 计划支持（7月） | 计划支持（7月） |
| MCP Server 安全护栏 | 暂无计划 | 计划支持（7月） | 计划支持（7月） |
| MCP Server Tool 组装机制<br/>（从任意Server中选取Tool组装成一个新的Server） | 暂无计划 | 计划支持（7月） | 计划支持（7月） |
| MCP Marketplace | 提供两种模式给用户选择：<br/>+ 模式一：开箱即用提供可扩展、可定制的自建实例化 MCP 市场<br/>+ 模式二：提供 MCP 市场源码，方便企业用户二次开发。<br/> | 提供两种模式给用户选择：<br/>+ 模式一：开箱即用提供可扩展、可定制的自建实例化 MCP 市场<br/>+ 模式二：提供 MCP 市场源码，方便企业用户二次开发。<br/><br/> | 提供两种模式给用户选择：<br/>+ 模式一：开箱即用提供可扩展、可定制的自建实例化 MCP 市场<br/>+ 模式二：提供 MCP 市场源码，方便企业用户二次开发。 |


## 参与 Higress 社区
欢迎更多小伙伴一起参与到 Higress 社区的建设中，了解更多社区动态，可以加入

Higress 社区交流 3 群 钉钉群号： 107690002780 

Higress 社区交流微信群二维码：(群满添加 zjjxg2018 拉入群)

![](https://img.alicdn.com/imgextra/i4/O1CN01Two4ut23khyQj5Eap_!!6000000007294-0-tps-939-1572.jpg)
