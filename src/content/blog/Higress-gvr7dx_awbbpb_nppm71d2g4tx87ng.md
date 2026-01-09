---
title: "基于API网关践行API First开发实践"
description: "基于API网关践行API First开发实践"
date: "2025-02-06"
category: "case"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：泮圣伟（十眠）

<font style="color:rgba(0, 0, 0, 0.3);"></font>

API 是连接数字生态系统中各应用的桥梁，是提升企业效率和数字化体验的关键。而 API First 开发模式的核心在于：以 API 为先，将其视为“头等公民”，在构建应用、服务及集成之前，应优先定义并设计 API 及其配套。API First 作为一种相对较新的开发模式，它已逐渐流行并获得业内的广泛认可。尤其是在微服务架构中，随着微服务的持续拆分，API 的数量呈指数级增长，API First 方法的优势与其重要性愈发突出。

# 什么是API First？
API First 是一种开发模式，它优先于构建应用程序的其他组件，专注于 API 的创建和使用。这意味着首先设计和开发 API，然后围绕它构建应用。这与传统的 Code First 开发模式不同，API 常常是在后期添加的，可能导致集成难题和低效。简单来说，API 优先的开发有助于确保系统无缝集成，并促进高效的 DevOps 实践。



以下是业界对于实践 API First 提到的一些原则

1. 以 API 设计作为基础：在 API 优先的方法中，API 是整个应用构建的基础。这需要精心规划和设计，以确保 API 满足所有利益相关者的需求，包括但不限于开发者、测试、合作伙伴和最终用户。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736432319099-b3a6dcc3-da1a-44a6-bbd5-1d7bad69ad78.png)

API 上下游关联方

2. 一致性与可重用性：API 设计为在不同项目和应用中具有一致性和可重用性。这使得标准化变得简单，减少了开发时间，提升了解决方案的可扩展性。
3. 协作与文档：API 优先的方法强调开发团队、业务利益相关者和外部合作伙伴之间的协作。全面的文档对于确保每个人了解如何有效使用 API 至关重要。
4. 测试驱动开发：从一开始就对 API 进行严格的测试，以便在开发过程中尽早识别和解决问题。这有助于保持高质量标准，并降低后期出现昂贵错误的风险。

从上述准则中我们可以看到，基本上贯穿了 API 生命周期的大部分，也对我们设计、开发 API 提出了一定的要求，那么遵循 API First 可以给我们带来哪些好处？

+ 提供更好的开发体验：设计完善的 API 和详尽的文档，使开发者更容易理解和实现，降低沟通成本。
+ 提升开发协作的效率：可以先通过API接口描述以及API Mock能力进行快速开发协同，测试可以提前准备测试用例，同时前端也可以基于API接口以及Mock数据完成页面的开发，此时后端的业务接口可以同步进行开发。另外，不同的微服务开发团队之间可以基于API展开工作，多个开发团队可以并行工作在应用的不同组件上，显著加速整个开发流程。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736434980928-c79b9af4-b007-4e60-bb7b-6c37a6fea194.png)

通过提供API接口使得多个团队协同开发进度不会互相Block

+ 灵活性和易集成性：具备一致性与可重用性的 API 可以使业务可以更加快速适应不断变化的市场需求，具备一定的可扩展性；凭借核心的 API，使得与第三方服务、平台和应用的集成变得更加流畅，促进了更加连贯和整合的生态系统。电商、车企基于 API 构建能力开放平台，通过 API 降低生态间集成的成本。
+ 自动化与创新：在一定的管控下通过 API 透出完整的操作以及数据，在此之上可以构建出更多自动化的工具提升企业的效率，可以基于API构建完善的 Devops 能力。可以说API是自动化的基石，也是创新的基础。
+ 安全：在 API 设计阶段考虑安全需求，通过 API 安全能力更早地进行安全设计与防护；接口的标准化与一致性有助于统一安全策略的实施与难度。由于API限定了服务提供能力的范围与边界，这帮助团队严格控制每个接口可以访问的功能和数据，支持安全的最小权限原则，减少数据泄露的风险。

# 阿里云上 API First 实践
基于 API 网关策略场景，谈 API First 实践

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736488087403-1a18fde1-972c-444c-99ea-85a927280af6.png)

API网关存在非常多策略规则

<font style="color:rgb(51, 51, 51);">在云原生 API 网关的使用和管理中，存在大量不同类型的策略规则，这些规则主要集中在安全能力、流量治理能力管理和API/接口策略方面。为了有效管理这些策略，我们设计了一种通用的方式来抽象这些规则，并能够灵活地应用到不同的实体（如网关、路由、服务、域名）上。</font>

## 设计 API
<font style="color:rgb(51, 51, 51);">我们的解决方案基于两个主要模型：Policy（策略）模型和 PolicyAttachment（策略附加）模型。Policy 模型负责定义所有策略的细节和规则，通过这个模型可以对策略进行增、删、改、查等操作，确保灵活性和可管理性。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1737083318665-8883ab93-45f4-4977-a4af-ba98b4d66e9c.png)

API 网关策略管理能力模型设计

<font style="color:rgb(51, 51, 51);">策略类型包括 IP 黑白名单、消费者鉴权和全局鉴权等安全能力管理，以及超时限制、重试机制、跨域资源共享 (CORS) 和重定向等 API/接口策略。下面是其中一个策略的示例：</font>

```plain
{
  "policyId": "policy1",
  "name": "IP 黑名单策略",
  "description": "禁止来自特定 IP 地址的访问",
  "type": "security",
  "rules": {
    "blacklist": ["192.168.1.1", "10.0.0.1"]
  }
}
```

<font style="color:rgb(51, 51, 51);">为了将这些策略有效地应用到特定的实体中，我们引入了 PolicyAttachment 模型。PolicyAttachment 模型用于将已经定义的策略绑定到特定的实体（如网关、路由、服务、域名）上，使得同一策略可以在不同的上下文和场景中应用，从而提供了更高的复用性和管理效率。下方展示了将策略绑定到一个服务的示例：</font>

```plain
{
  "attachmentId": "attachment1",
  "policyId": "policy1",
  "entityType": "service",
  "entityId": "serviceA"
}
```

<font style="color:rgb(51, 51, 51);">为了管理策略和绑定关系这两个模型，我们设计了一套 RESTful 风格的 API 接口。这些接口涵盖创建、获取、更新和删除策略的所有操作，以及附加和移除策略的功能。例如，一个 IP 黑名单策略的 Policy 结构如下：</font>

```plain
{
  "name": "IPBlacklist",
  "type": "security",
  "rules": {
    "blacklist": ["192.168.1.1", "10.0.0.2"]
  }
}
```

<font style="color:rgb(51, 51, 51);">并且将该策略附加到一个 API 网关的请求如下：</font>

```plain
POST /api/policy
Content-Type: application/json

{
  "name": "IPBlacklist",
  "description": "gateway",
  "config": {
    "name": "IPBlacklist",
    "type": "security",
    "rules": {
      "blacklist": ["192.168.1.1", "10.0.0.2"]
    }
  },
  "attachResourceIds":[
    "gatewayId1",
  ],
  "attachResourceType": "Gateway",
  "environmentId": "environmentId1",
  "gatewayId": "gatewayId1"
}
```

<font style="color:rgb(51, 51, 51);">通过这种统一的策略管理系统，我们不仅能够提高系统的灵活性和可扩展性，还使得安全性和管理变得更加高效。</font>

基于上述思路我们提供了API 网关最基本的策略相关的API接口设计思路。



## 在 API 网关中构建 API
**OpenAPI Specification (OAS) **是一种用于定义和描述 RESTful API 的标准化格式。以下是基于 OAS 定义的策略管理 API 模型：

```yaml
openapi: 3.0.0
info:
  title: Policy Management API
  version: v1
servers:
  - url: /api
paths:
  /policies/{policyId}:
    get:
      summary: Get details of a specific policy.
      operationId: getPolicy
      parameters:
        - name: policyId
          in: path
          required: true
          description: The ID of the policy to retrieve.
          schema:
            type: string
      responses:
        '200':
          description: Successful response with the policy details.
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Policy'
components:
  schemas:
    Policy:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        description:
          type: string
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
```

设计好Policy相关的 API 后，我们需要一个完整的 API 生命周期管理能力来帮助我们实践 API First。我们以阿里云的云原生 API 网关为例，实践整个API First的开发模式。



我们可以看到云原生API网关中，API是整个产品的第一公民，与 API First 的开发原则显得异曲同工。首先先创建PolicyManagementAPI。在创建的过程中我们看到，支持OAS/Sawgger等标准导入API，也支持手动创建整个流程。我们先看看手动录入的效果。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736473032093-e8944b1a-5fff-4db5-bbd6-1c9ae15faadd.png)

云原生 API 网关控制台创建 API 

创建完成API之后，产品会引导我们去创建接口。关于Policy相关的接口我们计划创建关于 Policy 资源操作的生命周期增(创建策略并关联资源)、删(删除策略并取消关联资源)、改(修改策略并重新关联资源)、查(查询策略)。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736474097766-310b06e1-1851-41ac-abd6-1c19a7c53233.png)

云原生 API 网关控制台创建 API 接口

我们提前设计好了 API ，因此创建接口的过程中，只需要按照我们的设计填入 API 接口的 Metadata 即可。

在 API First 原则中，文档也是不可或缺的一部分，每次修改接口对应的接口文档也需要同步更新，既然我们在 API 管理平台上完整录入了接口的元数据信息，那么相关的文档、SDK、spec都应该实时更新。下面我们看到，比如请求参数的 Body 信息，其中JSON Scheme是用于 API 接口文档的详细内容生成。如果我们不填写，后续文档的可读性会大大降低，但我们也发现这个内容其实非常重复性且标准化，所以API网关提供了 API 辅助生成Schema的能力。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736474073079-bcde7285-0b52-495a-89aa-715d878f63dd.png)

云原生 API 网关控制台创建 API 接口

填写完成所有的内容后，点击添加。我们逐一录入所有的接口，当前 API 完整的情况如下图所示。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736474112238-dd536af1-df8d-4c24-bac1-3aa20ea1ed34.png)

云原生 API 网关控制台 API 详情

我们下载SDK&文档看一下，提前设计好API (API First) 是如何帮助我们加速开发流程以及提升开发体验。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736474997723-25c64c42-e9f6-49fe-9175-de24f1cf398c.png)

云原生 API 网关控制台生成 API SDK 与文档

选择 Java SDK 看看生成的效果。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736475404041-bc9bb86b-6545-4a19-bd9f-d90480aa3c8f.png)

API 文档

由于后端还没有编写，目前不能直接调试。但是协作方可以基于此进行开发。

我们可以构建API Mocking，这样可以更加方便协作方进行开发调试。

## API Mocking
在开发 API 逻辑之前，通过 API Mocking 提供初步的接口模拟，这有助于进行早期的验证和测试。提升开发联调效率。在API网关中进行该操作只需要2步，先定义API接口Mock返回的内容，再发布Mock服务即可。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736476347126-6788f7f1-6215-4eab-85cd-433fb82463ae.png)

API 网关控制台配置 API Mock

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736476364672-a3a521ce-ed5e-4aa6-8b03-89d885bf8596.png)

API 网关控制台发布 API Mock

发布完成后，我们直接在API网关页面进行在线调试。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736476465141-be706085-f708-4705-9621-8f423b282d77.png)

API 网关控制台调试 API

我们在 API 文档中找到需要的接口并且直接进行调试，也返回预期的Mock值。这样可以大幅度提升协作开发的效率。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736476629183-006d2e8c-cee2-49ed-b241-a3c43ea8cfeb.png)

通过 API 文档调试Mock的API

有了 API Mocking，前端、后端、 QA 以及其他依赖的业务方团队都可以同时进行工作，构建测试、客户端应用和服务器实现。



## 实现 API 逻辑
我们可以将 spec 以OAS3.0格式导出，并通过[Swagger Codegen](https://github.com/swagger-api/swagger-codegen)可以快速生成服务端的代码框架，帮助我们加速开发的效率。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736477047637-221f10de-833c-4b09-be06-cabcb65ee5a8.png)

Swagger Codegen 介绍

另一方面我们需要实现 API 逻辑，并将其与后端系统集成。遵循编码、安全和性能优化的最佳实践。在这边我们不过多赘述。



## API 测试和验证
当我们 API 开发完成后，我们可以先将后端发布至测试环境，并将Mock服务切换至真实测试环境后端服务。协同QA、前端、依赖方进行完整的测试验证。包括但不限于进行功能、性能和安全测试，以确保 API 达到质量标准。



为了方便测试集成，我们需要对我们的 API 配置自动化的测试工具，集成到我们的测试体系中，可以做到常态化验证保证 API 接口的正确性、性能和安全性。



我们还需要针对 API 配置安全防护策略，根据我们 API 的性能表现配置流量防护等限流策略，配置安全鉴权认证规则，并完成完整策略能力验证。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736477938068-2e1c4679-4c04-4501-b259-2305f8456a21.png)

配置合适的流量防护策略

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736477901673-8209df26-60e1-499f-8834-05724b4a2a79.png)

可以给当前API授权给不同的消费者去访问

完成这些准备工作后，我们就可以对 API 进行发布部署上线的流程。



## API 策略配置
在 API 管理生命周期中，API 的安全性以及流量防护策略配置也是非常重要的一环。API 不仅是系统与系统之间的通信入口，还是安全和流量防护的第一道防线。阿里云 API 网关（API Gateway）提供了非常丰富的插件、策略能力，可以低成本帮助我们 API 做到完善安全防护以及系统防护能力，保证 API 的稳定性。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1737083806643-645091c6-fedb-4469-98b4-8367d55e0f90.png)

<font style="color:rgb(0, 0, 0);">云原生 API 网关在安全防护领域的插件</font>

设置黑白名单：设置黑白名单可以通过在 API 上配置特定的黑名单和白名单，有效地控制访问请求的权限。插件支持在网关全局、域名以及路由级别进行 IP 黑名单和白名单的配置，比如我们能够拒绝或允许特定 IP 的访问请求，灵活的配置策略满足对不同场景下 API 的访问控制的精细化需求。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1737083860307-a9d10a36-e654-476a-b735-45c82eda7b0c.png)

<font style="color:rgb(0, 0, 0);">云原生 API 网关在认证鉴权领域的插件</font>

细粒度权限控制：在 API 上实施细粒度的权限控制，确保用户只能访问其权限范围内的资源。云原生 API 网关支持全局认证、路由配置认证和消费者鉴权，实现对 API 访问的控制、安全性保障和策略管理。下方展示了云原生 API 网关在认证鉴权领域的插件。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1737083918266-27103e6d-0dd0-4972-9744-c9214bfe44d3.png)

<font style="color:rgb(0, 0, 0);">云原生 API 网关丰富的策略能力</font>

精细化流量防护能力：云原生 API 网关支持API/接口级别进行流量控制、并发控制策略，通过对 API 和接口级别进行精细化流控，可以有效管理和监控请求流量，从而防止因突发流量或恶意访问导致的系统过载。这种精细化管理不仅可以限制单个用户的请求频率，保护后端服务的性能，还能根据实际负载动态调整策略，优化资源分配，确保 API 服务在高并发场景下依然能够平稳运行。

## API 发布、部署与监控
API 网关在发布部署的过程中提供了灰度发布、全链路灰度的能力，可以帮助我们在发布的过程中控制风险与影响面。API 的发布过程，我们可以通过CI/CD集成的方式实现进一步的自动化。云原生 API 网关默认内置了云监控、Prometheus等监控、可观测能力，可以帮助我们观测 API 在生产环节中的性能和使用情况。我们可以通过监控、告警来保障我们 API 的稳定性，持续满足业务的SLA需求。



API First 的实践理念强调在软件开发过程中，优先设计和考虑 API 的需求，以确保系统的灵活性、可维护性和可扩展性。这一理念贯穿了需求设计、协同开发、上线和运维等全生命周期。



云原生 API 网关可以帮助我们更好地实践 API First。

1. 在需求设计阶段，API First 方法鼓励团队在早期就明确 API 的功能和接口契约，通过文档化的形式确保各方对于 API 的理解一致。这种自上而下的设计思路能够有效减少后续开发中的沟通成本和误解，从而提高开发效率。
2. 在协同开发过程中，云原生 API 网关发挥着关键作用。它不仅提供了统一的接口管理，还可以根据 API 的定义，自动生成 SDK 和文档，方便开发人员快速上手。通过 API 网关，团队可以实现快速构建、发布和迭代，支持微服务架构的灵活性，使开发人员可以专注于业务逻辑的实现而非底层细节。
3. 上线阶段，API 网关能够帮助我们进行流量管理和安全控制，确保 API 在生产环境中的稳定性。例如，通过流量监控和限流策略，及时发现和处理异常流量，保障用户体验。同时，API 网关可以集成身份验证和授权机制，进一步增强 API 的安全性。
4. 在运维环节，云原生 API 网关提供了丰富的监控和分析功能，帮助运维团队实时评估 API 的性能和健康状况。通过分析 API 的访问日志和使用数据，运维人员能够快速定位问题，优化系统性能，保证服务的高可用性。

# API 设计建议
下面我们基于 API 网关开发过程中的一些生产实践经验谈一谈关于 API 设计的建议。

## 可演进性
API 设计中提供了版本的概念，对于同一个版本的API来说，每一次API变更都需要考虑到API的向前兼容性，即老的客户端能否正常访问服务端的新版本也不应该有错误的行为。

+ 新增可选字段
+ 不应该删除、修改已有的方法、字段、枚举值
+ API 接口没改的前提下，不可以擅自改变 API 语义

任何一次API的升级，我们都需要考虑已经使用API的用户，他们的业务是否会因为我们的一次变更而出现不兼容的风险。



如果存在不兼容的变更，我们需要通过升级API的大版本来实现，这时候会涉及到客户端的升级，那么这个过程将会是非常漫长，频繁的不兼容升级对我们的 API 使用者来说是一件不愿意接受的事情。也正是因为如此，反过来说，我们才从一开始就重要API的设计。在 API 设计的过程中，可以多验证自己的 API 设计，在发布前提前挖掘潜在的风险。



关于软件升级与变更，在OpenAPI规范中，可以以描述的形式在基本信息中指定本API的版本。我们可以通过标准的版本控制方法允许引入新功能或者重大变更的过程中保证API的稳定性，从而确保现有用户和客户端应用不会受到突然的变化影响。这种向后兼容性对于维护长期用户信任和应用的连续性至关重要。另外，API的版本控制帮助我们给 API 使用者提供一条平滑的升级路径，使得开发者和用户可以按照API维度逐步迁移至新版本，避免一次性全面升级的风险。

## <font style="color:rgba(25, 26, 31, 0.9);">好的 API 文档</font>
在如今微服务架构日益普及的环境下，一个服务会依赖大量的外部API接口，在开发的过程中 API 文档的重要性不容忽视。准确而及时更新的API文档能够为开发者提供清晰的接口说明和代码示例，这样会大大减少了误用和踩坑的几率。同时，它显著提高了开发效率，通过减少沟通成本和快速解决问题来支持敏捷开发和快速迭代。![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/198743/1736480157007-3d5540af-d287-4c20-b6b2-a2d83b4a5d0e.png)

JDK ArrayList 文档

这也是为什么一个好的 API 可以经久不衰的原因之一。我们可以从上述示例中看大，一个好的API文档会描述API的功能、实现、例子，同时也会提到使用该API需要注意的点，可能会有哪些风险 `**<font style="color:rgb(71, 71, 71);">Note that this implementation is not synchronized.</font>**`<font style="color:rgb(71, 71, 71);">这些都可以帮助使用者提前识别该 API 适用的场景。</font>

## <font style="color:rgba(25, 26, 31, 0.9);">控制 API 的数量</font>
当一个产品涉及数千个API时，其使用者和维护者所面临的成本都会显著增加。最初花费几个小时实现的API，可能最终需要投入数百甚至数千小时进行维护和升级。因此，对于我们内部开发而言，每新增一个API都必须经过严格的评审。我们尽量在初期通过精心的API设计和已有API的组合，来满足新的API使用场景。因为一旦API开放，就有用户和客户端开始集成，这意味着API的收敛、下线以及变更将成为一项巨大的负担。

# 再谈 API First 的得与失
API First 对于效率是降低还是提升？由于 API First 模式在程序设计初期就需要集中精力进行 API 设计，因此需要较为全面的前期规划和设计工作。此外，提前做出API设计决策可能会限制开发过程中的一些尝试与探索，可能在开发后期需要进一步调整 API 的设计，当 API 数量大了之后这整个过程会在一定程度上减慢项目开发的速度，API 的设计、管理与维护都有一定的负担。



一旦设计并确定了明确的 API 后，可以促进并行开发，减少依赖性和瓶颈，从而加快功能交付速度。一个完善的API管理工具也能够有效降低 API 管理成本。在项目的后期，包括上线后的产品体验，使用 API First 开发模式都会有更多的益处：明确的API使得外部系统和第三方应用的集成更加轻松，通过工具建设提升效率；一开始就考虑可扩展性和安全设计，使系统具备更强的安全、高可用能力；通过 API 暴露出来的数据也会激发工程师和用户的创新。因此，尽管前期开发速度可能受到一定影响，API First 模式在长期来看能够显著提升项目整体效率和产品质量。



在AI、小程序、Serverless 等软件技术快速发展的趋势下，API First 开发模式使应用程序能够更灵活地与这些技术进行集成。通过API，无论是与AI服务交互，还是与小程序和函数计算通信都能迅速实现。这不仅加快了探索和上线的速度，也降低了业务试错的成本，为公司在快速变化的市场中保持竞争优势提供了有力支持。


