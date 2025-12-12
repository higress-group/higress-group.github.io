---
title: "HiMarket 重磅升级：Agent 的下一站，AI 开放平台"
description: "HiMarket 重磅升级：Agent 的下一站，AI 开放平台"
date: "2025-12-12"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：赵恒、岛风、文想、彦林、于怀



2025 是 Agent 元年，企业开始大规模落地 Agent，都会遇到多 Agent 管理，多 MCP 工具管理，多模型管理问题，如何查找和选择合适的 Agent/MCP/Model？哪些高频场景可以快速让所有人参与？多个团队如何协同，权限如何管理，成本如何分摊？



为了解决这些挑战，阿里巴巴升级 AI 开放平台 HiMarket，基于阿里巴巴内部 IdeaLAB，扩展 AI 开放平台的能力，推出 v0.5.0 版本，提供 Agent/MCP/Model 市场能力，提供基于 Chat 的高频使用场景，提供账号权限管理和成本分摊能力。

![](https://img.alicdn.com/imgextra/i2/O1CN01o22ae61fFyf0gC6oL_!!6000000003978-2-tps-1892-944.png)

# 一、HiMarket 是什么

<video src="https://cloud.video.taobao.com/vod/tnOfI9421wtWvq1BX2-3Ev3-PvYjaoVKovKCKamLMIA.mp4" controls width="429" />

HiMarket 是开源的 AI 开放平台，帮助企业快速构建 Agent 市场，释放 AI 创新潜能。对企业全员提供高频 AI 场景，释放 AI 创新潜能；为开发者提供 Agent市场/MCP市场/Model市场，提升研发效能；为维护者提供 AI 治理能力，提升 AI 把控力。

![](https://img.alicdn.com/imgextra/i4/O1CN01pKmddo1pEHLj3o3uZ_!!6000000005328-2-tps-3114-1360.png)

# 二、使用场景
### AI 场景（面对企业员工）
HiMarket 提供了 HiChat 能力，通过 Chat 模式替代搜索，做 市场调研和产品调研，生成运营图片等工作。

![](https://img.alicdn.com/imgextra/i3/O1CN01m6Mqti1Tqp8Pp162p_!!6000000002434-2-tps-3378-1490.png)



+ **企业全员 AI 使用入口**：通过 HiMarket AI 开放平台，同时解决了员工不知道用哪些模型，企业如何管控员工用模型的两个问题；全员可以通过这个入口进行使用 AI 模型能力，企业可以进行整体安全合规审核，保证企业和员工使用 AI 范围安全可控。
+ **多模型对比**：可以选择多个模型市场的模型，输入一次对比多个模型，快速直接对比模型返回内容差异，选取最优内容。
+ **会话历史记录**：方便员工管理历史会话记录，可以快速基于历史信息进行对话回溯，并且计划后续基于对话可以形成知识点，知识点可以进行横向传递，提升数据共享效率。
+ **联网搜索**：通过体验中心可以支持配置联网搜索能力，配置 Higress AI 网关联网搜索能力之后，所有模型都可以支持联网搜索，AI 网关会把对应搜索内容传递给模型使用摘取，扩大实时数据能力。
+ **支持关联 MCP 工具**：体验中心聊天框支持关联 MCP 市场，可以实时快速的使用 MCP 能力，可以快速体验验证 MCP 本身能力情况，并且支持企业原本 API 快速配置化转换成 MCP 协议，结合模型做快速验证。

### AI 市场（面对开发者）
HiMarket 支持构建涵盖 Agent、MCP Server、Model 的完整 AI 市场，让企业的各类 AI 资源不再分散，而是以标准化方式汇聚在一个平台上。

![](https://img.alicdn.com/imgextra/i2/O1CN01LurPdc1g8wBit4mWC_!!6000000004098-2-tps-3588-1890.png)



+ **Agent 市场**：支持将复杂的 AI Agent 应用打包上架，可对接 AgentScope 等 Agent 开发平台，例如通过 AgentScope 构建的 Agent 可一键注册到 HiMarket，其他开发者订阅后即可直接使用，无需从零搭建；支持跨框架、跨语言的 agent 一键发布到 Agent 市场。

![](https://img.alicdn.com/imgextra/i2/O1CN01Fy169s1qrxH9gBZHd_!!6000000005550-2-tps-3590-1838.png)



+ **MCP 市场**：支持接入不同平台的 MCP Server，并支持将外部 API 转换为标准化的 MCP Server，开发者订阅后，即可让 AI 应用轻松调用外部能力。

![](https://img.alicdn.com/imgextra/i1/O1CN01Y52wPH1WOpmGiauWC_!!6000000002779-2-tps-3368-1438.png)



+ **模型市场**：支持公有云模型及企业自研私有模型的快速接入，平台以 Higress 作为模型服务的网关代理，提供内容安全、Token 限流等防护能力，保障模型服务对外开放的安全合规。

![](https://img.alicdn.com/imgextra/i4/O1CN01GE7Oog1d4roxHkuKD_!!6000000003683-2-tps-3362-1302.png)



+ **AI 资产生命周期管理**：管理员将资源接入平台，配置访问策略和使用文档，发布上架；开发者在门户浏览、订阅、获取调用凭证即可订阅使用。

### AI 治理（面对AI维护者）
HiMarket 实现了对 AI 资源的集中式治理，提供全方位的安全管控和协作能力：

+ **安全合规保障**：通过 Higress 网关统一管控所有 AI 资源的访问，支持内容安全检测、敏感信息过滤、访问权限控制，确保企业 AI 能力对外开放时符合安全合规要求。
+ **高效协作共享**：打破团队间的"能力孤岛"，一个模型或工具接入后，可被多个部门订阅复用，避免重复采购和重复开发。
+ **降低使用门槛**：开发者无需逐一对接不同厂商的 API，HiMarket 提供统一的协议标准和开箱即用的调用凭证，大幅降低接入成本，让团队更专注于业务创新而非基础设施搭建。



# 三、产品优势
## 企业级能力
HiMarket 内置完善的企业级管理能力，确保 AI 资源的安全开放与高效运营。

+ **产品管理：** 管理员可为不同 API 产品配置独立的认证鉴权和可见性策略，同时提供流量控制、IP 白名单等防护能力，保障服务安全稳定。
+ **观测分析：** 提供管理员视角的全局观测大盘，展示 AI API 的调用趋势、热门产品排行、异常流量预警等，支持按时间、产品类型、开发者等维度进行多维分析，为企业运营优化提供数据依据。
+ **计量计费：** 支持基于 Token、调用次数等多种计量模式，自动统计资源消耗并生成账单明细，既能服务企业内部的成本核算，也能支撑对外商业化运营。
+ **版本管理：** 支持 API 产品的多版本并行，管理员可以发布新版本、维护旧版本并平滑迁移用户，通过版本对比、灰度发布、快速回滚等功能，确保产品迭代的安全稳定。

![](https://img.alicdn.com/imgextra/i2/O1CN01JPaMDq1qdIbMdhQrc_!!6000000005518-2-tps-3300-1812.png)



## 丰富观测能力
观测分析（目前 v0.5.0 版本依赖阿里云商业化 SLS，开源版本的观测分析实现计划在后续版本中提供）：

![](https://img.alicdn.com/imgextra/i3/O1CN01l2iDcT1HK3PJu7qN3_!!6000000000738-54-tps-2560-3312.apng)

## 灵活扩展能力


为了能够快速对接企业现有的系统，HiMarket 提供了灵活的定制能力，包括：

+ **门户品牌：** 管理员可为门户配置自定义域名、Logo、主题色、布局样式等元素，并灵活配置首页模块、产品分类、推荐栏等功能区域。
+ **身份认证：** 支持内置账号密码和企业 OIDC 认证方式，可与企业 SSO、IDaaS 等身份系统无缝集成，实现统一的用户管理和身份认证。
+ **审批流程：** 开发者注册、凭证申请、API 订阅等关键流程可灵活配置自动或人工审批。

![](https://img.alicdn.com/imgextra/i4/O1CN01qMwaLN1ypgEcXT1Xf_!!6000000006628-2-tps-3338-1610.png)



# 四、快速体验
HiMarket 提供多种部署方式，满足不同场景需求：

+ 本地快速体验： [HiMarket 本地部署指南](https://github.com/higress-group/himarket/blob/main/README.md)。
+ Docker Compose 部署： [HiMarket Docker 部署指南](https://github.com/higress-group/himarket/blob/main/deploy/docker/Docker%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E.md)。
+ Kubernetes 部署：[HiMarket Helm 部署指南](https://github.com/higress-group/himarket/blob/main/deploy/helm/Helm%E9%83%A8%E7%BD%B2%E8%AF%B4%E6%98%8E.md)。

## 一键部署，开箱即用的完整方案
HiMarket、Higress、Nacos 三大组件自动编排部署，无需人工干预。部署过程自动完成示例 MCP Server 的注册、配置和发布，让你在部署完成后即可体验 HiMarket 能力市场。无论是 Docker Compose 还是 Kubernetes 部署，均只需一条命令:

```bash
./deploy.sh install
```

部署脚本会自动完成以下所有工作:

+ **核心组件部署**：自动拉起 MySQL、Nacos 配置中心、Higress 网关服务
+ **应用本体部署**：部署 HiMarket 全套服务(管理后台、开发者门户、后端服务)
+ **智能初始化**：自动创建管理员账号、配置示例 MCP Server、发布演示 API 产品
+ **即开即用**：部署完成后即可访问管理后台和开发者门户，无需任何手动配置

方案支持灵活的场景适配：

+ 支持使用内置 MySQL 或对接已有数据库
+ 支持使用阿里云商业化 MSE 服务和 AI 网关服务
+ 支持`./deploy.sh himarket-only`仅部署 HiMarket 本体

详细步骤请参考：[HiMarket Docker 一键部署指南](https://github.com/higress-group/himarket/blob/main/deploy/docker/Docker%E9%83%A8%E7%BD%B2%E8%84%9A%E6%9C%AC%E8%AF%B4%E6%98%8E.md)，[HiMarket Helm 一键部署指南](https://github.com/higress-group/himarket/blob/main/deploy/helm/Helm%E9%83%A8%E7%BD%B2%E8%84%9A%E6%9C%AC%E8%AF%B4%E6%98%8E.md)



# 五、HiMarket Roadmap 规划


![](https://img.alicdn.com/imgextra/i2/O1CN01zKqIDV1RNqqgwEire_!!6000000002100-2-tps-3112-1584.png)



# 六、欢迎共建
HiMarket 是多个开源社区共同发起的开源项目，核心参与者包括阿里云、蚂蚁数科、高德、淘天等团队，面向开源可以助力企业快速构建 AI 开放平台，提供开箱即用的能力。 

特别感谢淘天 IdeaLAB 团队为 HiMarket 提供的基础，期待更多企业一起参与共建～

HiMarket 仓库：

[https://github.com/higress-group/HiMarket](https://github.com/higress-group/himarket)  
基于 HiMarket 实现的 MCP 金融级市场 

[https://antdigital.com/products/MCP](https://antdigital.com/products/MCP)



HiMarket 钉钉社区群（2群）：163370001036

![](https://img.alicdn.com/imgextra/i3/O1CN01EfkP351JleVNobbTG_!!6000000001069-54-tps-568-542.apng)

[https://qr.dingtalk.com/action/joingroup?code=v1,k1,d+MJWsDVtfHq6XanvQEUxsVX3vVL1m+7DWfkoUkYxVM=&_dt_no_comment=1&origin=11](https://qr.dingtalk.com/action/joingroup?code=v1,k1,d+MJWsDVtfHq6XanvQEUxsVX3vVL1m+7DWfkoUkYxVM=&_dt_no_comment=1&origin=11)



推荐文章：

《AgentScope Java v1.0 发布，让 Java 开发者轻松构建企业级 Agentic 应用》[https://mp.weixin.qq.com/s/vtb3t0JnSTau3XM6wJMEkw](https://mp.weixin.qq.com/s/vtb3t0JnSTau3XM6wJMEkw)


