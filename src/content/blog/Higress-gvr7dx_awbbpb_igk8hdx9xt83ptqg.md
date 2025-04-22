---
title: "API 即 MCP｜Higress 发布 MCP Marketplace，加速存量 API 跨入 MCP 时代"
description: "API 即 MCP｜Higress 发布 MCP Marketplace，加速存量 API 跨入 MCP 时代"
date: "2025-04-18"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸&澄潭

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1744882494924-03229eeb-3ae3-4736-a725-0b82ffc8cbc0.png)

MCP 正成为各家企业获取 AI 流量的“桥头堡”，应用厂商、SaaS 服务厂商争相构建自己的 MCP Server。但挑战也随之而来：



+ MCP 是全新的通信协议，虽然提供了 JSON-RPC 这种无关编程语言的数据格式，但是面对“Resource、Tool、Prompts”等新功能，有较高的 Server 构建和调试成本。
+ 已经发布到各个 Market 的 MCP Server，大部分都还未支持 Streamable HTTP，存在改造成本，以及在协议层的长期维护成本。
+ 企业用户构建自己的 MCP 市场，缺少最佳实践和完整方案。**<font style="color:rgb(147, 161, 217);background-color:rgb(25, 25, 25);"></font>**



基于以上挑战，Higress 已开源“[将存量 API 批量转化为 MCP Server](https://mp.weixin.qq.com/s/yY8_G2XQ-0bKG8kl9GTDNQ)”，以及“[基于 Higress 部署的 MCP Server，支持协议卸载，无须承担 MCP 发布新版本带来的维护工作](https://mp.weixin.qq.com/s/WYlqHm2YZSiRv4USUNUBgg)”的能力，并发布 Higress MCP Marketplace。

> MCP 已发布 2025-03-26 和 2024-11-05 两个版本，2025-03-26 支持 Streamable HTTP，MCP 的早期采用者面临繁重的升级工作。**<font style="color:rgb(250, 250, 250);">5-03-26</font>**
>



## 01 Higress 为何要上线 MCP Marketplace？
MCP 虽然火爆，但依旧处于发展初期，单一的 MCP 市场难以满足各方多样化的诉求。不同企业、开发者在技术能力、应用场景、业务需求、选型等方面存在显著差异，这使得多元化的 MCP 市场成为必然。



当前，MCP 市场大致分为四类：

+ “应用商店”玩家：全网 MCP 集散地，Server 和 Client 数量是最大优势，且会第一时间上线最新的资源，并开放上传入口，但暂未提供调试、托管，以及其他增值服务。客户需要自行部署服务器资源，进行调试和调用。例如 mcpmarket.com、mcp.so 等。
+ 客户端玩家：由客户端进行维护，例如大模型机器人、AI 编程，通过自然语言和代码对官方支持的 Server 进行调用，调用过程中做了充分的推理训练，MCP 的调用和输出效果更好。例如 Cline 和通义灵码等。
+ 平台型玩家：云厂商和综合型开源社区进行维护，提供 MCP 全生命周期的管理服务，包括调试、调用、发布、托管等功能，简化 Agent 应用的构建流程，分为官方托管（Host）和本地部署（Local）。其中，官方托管（Host）的，用户可以直接进行调用和测试，由平台提供算力资源；本地部署（Local）的，则是有用户自行部署服务器资源，进行调试和调用。例如百炼、魔搭。Dify、Spring AI Alibaba 也可归类于此，简化了实现和调用方式，但不提供算力资源支持。
+ 垂直型玩家：单个开源项目或云产品或 PaaS 厂商进行维护，为 MCP 服务器提供各类运行环境的支持，借助自身的专业能力，在网络协议适配、请求路由、安全、服务器的运维和扩容等方面，提供增值服务。



Higress MCP Marketplace 属于以上第四类，不同于其他 Marketplace，Higress 主要解决的是以下三个需求：

+ **存量 API 快速转化为 MCP Server：**用户无须从0开始构建，即 Higress Marketplace 面向的是拥有大量存量 API 的企业，希望快速享受 MCP 的红利。
+ **企业级需求：**发挥网关在认证、授权、限流和可观测性方面的成熟能力，满足企业级 MCP 服务的需求。
+ **企业自建 MCP 市场：**Higress MCP Marketplace 作为一个完整的样例，给企业提供了完整的 MCP 市场解决方案，包含 MCP Server 的快速生成，对外提供调用服务时发挥鉴权、流量管控等能力。



第一期上线的近50款 MCP Server，均是 Higress 官方进行实现和维护，并且作为最佳实践公布了实现代码，便于<font style="color:rgba(0, 0, 0, 0.85) !important;background-color:rgb(249, 250, 251);">企业深入理解 </font>Higress 如何将存量 API 转化为 MCP Server。



## 02 Higress MCP Marketplace 有何不同？
Higress MCP Marketplace 的一大特色是无关开发平台、大模型和客户端，只要符合相关协议的均可以使用。详见文末的 Q&A 中的Q4/Q5/Q6。此外，还包括批量转化存量 API、精细化调优、企业级能力等特点。



### 2.1 批量转化存量 API
利旧存量基础设施已成为大部分企业迈入 MCP 时代的关键策略，但带来一个新的问题，即存量 REST API 转化为 MCP Server 是一个“重复的体力活”，且还要进行日常维护，包括接口的更新、服务器稳定性保障等。



要让 AI 助手调用 REST API，开发者需要：

1. 编写 MCP 服务器代码
2. 为每个 API Endpoint 实现适配逻辑
3. 处理参数转换和响应格式化
4. 部署和维护这些代码



这个过程不仅繁琐，而且每当 API 变更时都需要更新代码。Higress API-to-MCP 可彻底解决这一难题。通过简单的声明式配置，就可以将任何 REST API 转换为 MCP Server，无需编写任何代码，整个过程只需几分钟。



让我们通过一个实际例子来看看 API-to-MCP 的强大功能。以下是将高德地图的地理编码 API 转换为 MCP 工具的配置：

```yaml
server:
  name: rest-amap-server
  config:
    apiKey: your-api-key-here
tools:
- name: maps_geo
  description: "将详细的结构化地址转换为经纬度坐标。支持对地标性名胜景区、建筑物名称解析为经纬度坐标"
  args:
  - name: address
    description: "待解析的结构化地址信息"
    required: true
  - name: city
    description: "指定查询的城市"
    required: false
  requestTemplate:
    url: "https://restapi.amap.com/v3/geocode/geo?key={{.config.apiKey}}&address={{.args.address}}&city={{.args.city}}&source=ts_mcp"
    method: GET
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # 地理编码信息
      {{- range $index, $geo := .geocodes }}
      ## 地点 {{add $index 1}}
      - **国家**: {{ $geo.country }}
      - **省份**: {{ $geo.province }}
      - **城市**: {{ $geo.city }}
      - **城市代码**: {{ $geo.citycode }}
      - **区/县**: {{ $geo.district }}
      - **街道**: {{ $geo.street }}
      - **门牌号**: {{ $geo.number }}
      - **行政编码**: {{ $geo.adcode }}
      - **坐标**: {{ $geo.location }}
      - **级别**: {{ $geo.level }}
      {{- end }}
```



这个配置做了什么？

1. 定义了一个名为 `maps-geo` 的工具，用于地址转坐标
2. 声明了两个参数：必填的 `address` 和可选的 `city`
3. 设置了请求模板，将参数和配置值插入到 URL 和请求头中
4. 创建了响应模板，将 JSON 响应转换为结构化的 Markdown 格式



当 AI 助手调用这个工具时，它会：

-  使用提供的地址和城市参数构建 API 请求

-  调用高德地图 API

-  将 JSON 响应转换为易于阅读的 Markdown 格式

-  将格式化后的结果返回给 AI 助手



整个过程无需编写任何代码，只需一个简单的配置文件。



#### 高级用法：复杂 JSON 处理
API-to-MCP 的真正威力在于处理复杂的 JSON 响应。通过 GJSON 路径语法，您可以执行高级查询和转换：

```plain
<!-- 使用 gjson 函数进行复杂查询 -->
活跃用户: {{gjson "users.#(active==true)#.name"}}

<!-- 带有多个条件的数组过滤 -->
30岁以上的活跃开发者: {{gjson "users.#(active==true && age>30)#.name"}}

<!-- 使用修饰符 -->
用户名（倒序）: {{gjson "users.@reverse.#.name"}}

<!-- 迭代过滤结果 -->
管理员:
{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}
  - {{$user.name}} ({{$user.age}})
{{end}}
```

这些强大的查询能力让您可以从复杂的 API 响应中提取最有价值的信息，并以最适合 AI 助手理解和使用的方式呈现。



### 2.2 精细化调优
自动生成的配置虽然功能完整，但往往不够精细。特别是当 API 返回复杂数据结构时，如果不对配置进行人工调优，可能会导致 LLM 对数据的理解不够准确，从而影响用户体验。例如会带来以下问题：

- 信息过载：LLM 的上下文窗口有限，过多无关信息会稀释重要内容。
- 结构不清：复杂的嵌套关系在扁平描述中容易丢失。
- 缺乏语义：技术代码和专业术语未经转换，难以被 LLM 正确理解。
- 幻觉风险：面对不熟悉的数据结构，LLM 可能产生错误推断。



Higress 支持结合 Go Template 和 GJSON 表达式，来对请求和响应模版进行精细化处理（详细能力请查阅文档：[https://higress.cn/en/ai/mcp-server](https://higress.cn/en/ai/mcp-server)），通过精心调优，可以解决以上问题。相比自行手动调优，Higress 调优只需要变更配置，且配置变更过程流量完全无损，SSE 连接也不会断开。



我们来看一个调优前后的案例：



调优前(基于 Higress 开源的 openapi-to-mcp 命令行工具，使用 Swagger 文档自动生成)：

```yaml
server:
  name: ecommerce-api
tools:
  - name: searchProducts
    description: "Search for products in the e-commerce platform"
    args:
      - name: query
        description: "Search query string"
        type: string
        required: true
      - name: category
        description: "Product category"
        type: string
        required: false
      - name: limit
        description: "Maximum number of results to return"
        type: integer
        default: 10
    requestTemplate:
      url: "https://api.example.com/products/search"
      method: GET
      argsToUrlParam: true
    responseTemplate:
      prependBody: |
        # Search Results
        
        Below is the API response with these fields:
        
        - **success**: Boolean indicating if the request was successful
        - **total**: Total number of matching products
        - **page**: Current page number
        - **pageSize**: Number of items per page
        - **products**: Array of product objects with the following fields:
          - **id**: Product unique identifier
          - **name**: Product name
          - **description**: Product description 
          - **price**: Product price
          - **compareAtPrice**: Original price before discount
          - **currency**: Currency code (e.g., USD, EUR)
          - **availability**: Product availability status
          - **metadata**: Technical metadata
          - **attributes**: Product attributes
          - **variants**: Product variations
          - **images**: Product images
          - **categories**: Categories the product belongs to
          - **tags**: Product tags
          - **brand**: Product brand information
          - **shipping**: Shipping information
          - **ratings**: Product ratings and reviews
        
        Original response:
```



调优后：

```yaml
server:
  name: ecommerce-api
tools:
  - name: searchProducts
    description: "搜索电商平台上的产品，返回匹配搜索条件的产品列表，包含产品基本信息、价格、库存状态、评分等"
    args:
      - name: query
        description: "搜索关键词，可以是产品名称、品牌、型号或描述中的关键词"
        type: string
        required: true
      - name: category
        description: "产品类别，例如'electronics'、'clothing'、'home'等"
        type: string
        required: false
      - name: limit
        description: "返回结果数量，范围1-50"
        type: integer
        minimum: 1
        maximum: 50
        default: 10
    requestTemplate:
      url: "https://api.example.com/products/search"
      method: GET
      argsToUrlParam: true
    responseTemplate:
      body: |
        # 产品搜索结果

        找到 {{.total}} 个匹配"{{.query}}"的产品，以下是最相关的 {{len .products}} 个结果：

        {{range $index, $product := .products}}
        ## {{add $index 1}}. {{$product.name}}

        **价格**: {{if $product.onSale}}~~{{$product.compareAtPrice}} {{$product.currency}}~~ **{{$product.price}} {{$product.currency}}** (节省 {{percentage $product.compareAtPrice $product.price}}%){{else}}{{$product.price}} {{$product.currency}}{{end}}

        **品牌**: {{$product.brand.name}}

        **库存状态**: {{if eq $product.availability "in_stock"}}有货{{else if eq $product.availability "low_stock"}}库存不多{{else}}缺货{{end}}

        {{if gt (len $product.ratings.reviews) 0}}**评分**: {{$product.ratings.averageRating}}/5 ({{$product.ratings.reviewCount}}条评价){{end}}

        {{$product.description | truncate 200 "..."}}

        {{if gt (len $product.highlights) 0}}**产品特点**:
        {{range $highlight := $product.highlights}}
        - {{$highlight}}
        {{end}}{{end}}

        {{end}}

        {{if gt .total (len .products)}}
        还有更多结果未显示，可以通过调整搜索条件获取更精准的匹配。
        {{end}}
```



以下是一个智能手表产品的实际响应示例，展示了调优后的模板如何处理原始数据：

```plain
# 产品搜索结果

找到 128 个匹配"智能手表"的产品，以下是最相关的 10 个结果：

## 1. TechFit Pro 智能手表

**价格**: ~~1299 CNY~~ **899 CNY** (节省 30.8%)

**品牌**: TechFit

**库存状态**: 有货

**评分**: 4.7/5 (342条评价)

TechFit Pro智能手表配备高清彩色触摸屏，支持心率监测、血氧检测、多种运动模式追踪和睡眠分析。防水设计，续航可达7天。

**产品特点**:
- 高清AMOLED触摸屏
- 7天超长续航
- 心率和血氧监测
- 30种运动模式
- 5ATM防水

## 2. FitBit Versa 3

**价格**: 1499 CNY

**品牌**: FitBit

**库存状态**: 有货

**评分**: 4.5/5 (287条评价)

FitBit Versa 3智能手表集成GPS定位，支持24/7心率监测，内置语音助手，可接听电话，电池续航可达6天。

**产品特点**:
- 内置GPS
- 语音助手功能
- 来电接听
- 20+运动模式
- 防水50米

## 3. Apple Watch Series 7

**价格**: 2999 CNY

**品牌**: Apple

**库存状态**: 库存不多

**评分**: 4.9/5 (1243条评价)

Apple Watch Series 7拥有更大的显示屏，更快的充电速度，IP6X防尘认证，游泳级防水，全天候血氧监测和心电图功能。

**产品特点**:
- 视网膜级OLED显示屏
- 快速充电
- 心电图和血氧监测
- 跌倒检测和紧急SOS
- 支持Apple Pay

还有更多结果未显示，可以通过调整搜索条件获取更精准的匹配。
```

通过这种结构化的响应格式，LLM 可以清晰地理解每个产品的关键信息，而不会被大量的技术细节和原始 JSON 结构所困扰。



基于上述案例，我们可以提炼出以下 MCP 配置的调优策略：

- **识别并提取核心字段**：分析用户真正需要的信息，去除技术细节和内部数据。
- **转换专业术语**：将技术代码和专业术语转换为让 LLM 易于理解的描述。
- **添加上下文信息**：帮助 LLM 理解数据的完整性和范围。
- **结构化关键信息**：使用层次结构让信息的重要性和关系一目了然。


### 2.3 企业级能力
批量转化存量 API 和精细化调优解决的是生产效率问题，企业级能力则是满足多样化的企业级需求，例如鉴权、流量控制、协议版本升级等。



<font style="color:rgba(0, 0, 0, 0.85);">Higress 基于 Envoy 构建，继承了传统 API 网关在认证、授权、限流和可观测性方面的成熟能力，同时针对 AI 场景进行了优化。这些能力与 MCP 服务的需求高度契合：</font>

+ **统一认证授权**<font style="color:rgba(0, 0, 0, 0.85);">：Higress 提供 OAuth2 插件，可以满足新版 MCP 协议对认证鉴权的要求。开发者无需编写复杂的认证代码，只需简单配置即可实现安全的用户认证和权限控制。</font>
+ **精细化流量控制**<font style="color:rgba(0, 0, 0, 0.85);">：通过 Higress 的限流插件，可以为不同用户、不同工具设置不同的调用配额，防止资源滥用和服务过载。</font>
+ **全链路可观测性**<font style="color:rgba(0, 0, 0, 0.85);">：Higress 集成了 Prometheus 和 OTel 等开源观测方案，提供完整的指标监控和分布式追踪能力，使运维团队能够实时监控 MCP 服务的健康状况和性能表现。</font>
+ **<font style="color:rgba(0, 0, 0, 0.85);">高性能：</font>**<font style="color:rgba(0, 0, 0, 0.85);">相比传统网关，Higress 性能更强，支持横向扩容，更能从容面对 MCP 的高调用量。</font>
+ **审计日志**<font style="color:rgba(0, 0, 0, 0.85);">：记录所有工具调用行为，满足合规要求，同时为安全分析提供数据支持。</font>

<font style="color:rgba(0, 0, 0, 0.85);"></font>

#### <font style="color:rgba(0, 0, 0, 0.85);">协议卸载的优势</font>
<font style="color:rgba(0, 0, 0, 0.85);">目前 MCP 一共有两个版本的协议，分别是 20241105 版本和 20250326 版本，从协议发展来看，标准的沉淀和优化速度，难以跟上迅猛发展的 MCP Server 生态。这也为 MCP 的早期采用者埋下隐患，当构建了大量 MCP Server，面对未来协议版本升级，需要进行繁重的升级改造工作。</font>

<font style="color:rgba(0, 0, 0, 0.85);"></font>

<font style="color:rgba(0, 0, 0, 0.85);">Higress 作为网关，可以对 MCP 协议进行卸载，就像扮演传统的 API 网关时那样，统一卸载HTTP1/HTTP2/HTTP3 的客户端协议，以屏蔽多个版本的协议细节。</font>

<font style="color:rgba(0, 0, 0, 0.85);"></font>

<font style="color:rgba(0, 0, 0, 0.85);">Higress  可以在一个接入点上，同时支持 MCP 的 20241105 版本和 20250326 版本两种协议。在协议的传输层上，支持 POST+SSE 模式，以及最新的 Streamable HTTP 模式，且原生支持 WebSocket，支持 WebSocket 配置修改后连接保持以及优雅断开，为 MCP 的协议演进做好技术储备。</font>



### <font style="color:rgba(0, 0, 0, 0.85);">2.4 托管 MCP Server</font>
<font style="color:rgba(0, 0, 0, 0.85);">您在部署 MCP Server 的时候，除了使用云厂商提供的算力平台类产品，还可以选择托管在 Higress 上，部署和运维方面具有显著优势：</font>

+ **弹性伸缩**<font style="color:rgba(0, 0, 0, 0.85);">：基于 Kubernetes 的自动伸缩能力，根据流量自动调整实例数量，确保服务的高可用性和资源利用效率。</font>
+ **灰度发布**<font style="color:rgba(0, 0, 0, 0.85);">：支持 MCP Server 的灰度发布和 A/B 测试，降低更新风险。</font>
+ **一键部署**<font style="color:rgba(0, 0, 0, 0.85);">：提供 Helm Chart，简化部署流程，降低运维门槛。</font>
+ **<font style="color:rgba(0, 0, 0, 0.85);">高性能：</font>**<font style="color:rgba(0, 0, 0, 0.85);">可以轻松处理每秒数十万次的工具调用请求，同时保持毫秒级的响应时间，满足企业级应用的性能需求。</font>



## 03 如何使用 Higress MCP Marketplace
已经发布到 <font style="color:rgba(0, 0, 0, 0.85);">Higress MCP Marketplace 的服务端，均有 Higress 维护，并提供了实现用例以及免费使用的次数（一个账号每天可以免费访问10次）。</font>

<font style="color:rgba(0, 0, 0, 0.85);"></font>

<font style="color:rgba(0, 0, 0, 0.85);">以</font>股票助手<font style="color:rgba(0, 0, 0, 0.85);">为例，</font>这是一个专为股票、期货及外汇市场设计的多功能API服务。它提供了多种工具，包括K线图、报价、排行等，以帮助用户获取实时和历史数据，进行技术分析和决策支持。通过这些工具，用户可以轻松地访问到A股、港股、美股、全球指数、内盘和外盘期货以及外汇市场的相关信息，具体的 Tool 例如：

### <font style="color:rgb(51, 51, 51);">A股K线</font>
+ **用途**: 提供A股不同时间周期（如1分钟、5分钟、日K线等）的K线数据。
+ **使用场景**: 技术分析、交易策略制定、历史数据回测等。

### <font style="color:rgb(51, 51, 51);">A股K线复权</font>
+ **用途**: 提供A股复权后的K线数据。
+ **使用场景**: 长期投资分析、基本面分析等。

### <font style="color:rgb(51, 51, 51);">A股报价</font>
+ **用途**: 提供A股的实时报价信息。
+ **使用场景**: 实时监控、快速交易决策等。

### <font style="color:rgb(51, 51, 51);">A股排行</font>
+ **用途**: 提供A股按特定条件（如涨跌率、成交量等）排序的排行榜。
+ **使用场景**: 发现热点股票、市场趋势分析等。

<font style="color:rgba(0, 0, 0, 0.85);">  
</font>![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1744880123600-d8bd6018-c523-42b4-92d0-fb2084801f4a.png)

在 mcp.higress.ai 登陆后，可以进入页面直接复制右侧生成的 URL，我们同时提供了 SSE 接入点和 Streamable HTTP 接入点，支持根据使用的客户端情况按需接入。



如果达到了试用次数，还希望继续使用，可以参考概览 Tab 中的说明，自行申请 API Key，在下方进行配置，再重新生成 URL 即可：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1744880153561-00c39c1a-79f3-496e-b612-97dd13bb6b69.png)



## 04 Higress MCP Marketplace 的未来规划
+ 和阿里云云市场等多个 API 供应商合作，持续提供更多不同 Server 的免费试用额度。
+ 上线更多 Coding 场景常用的 Server，并和通义灵码深度集成，方便通义灵码的用户对接。
+ 被 Nacos MCP Registry 集成，方便企业用户自建 MCP Marketplace 时，可以一键拉起同等能力的 MCP Server。

<font style="color:rgba(0, 0, 0, 0.85);"></font>

## 05 Q&A
Q1：我将 MCP Server 上传到 Higress MCP Marketplace 后，有哪些收益？

A1：获得 Higress 和 Higress 企业版阿里云 API 网关的流量，获得来自全球的更多的调用量。同时，我们会推荐给阿里云的 MCP 市场，例如阿里云云市场的 MCP 市场，降低您的沟通成本。



Q2：我们的 MCP Server 已经上架其他 MCP 市场，还需要做哪些开发工作，上传到 Higress MCP Marketplace？

A2：如果您有现成的 API 文档，无须额外开发工作，基于 API to MCP 的工具，自动转换成 MCP Server 的 Yaml 配置，工具链接：

https://github.com/higress-group/openapi-to-mcpserver



Q3：我如何将基于 Higress 开发的 MCP Server，上传到 Higress MCP Marketplace？

A3：可以先参考这个例子提交 PR 到我们的开源仓库：

[https://github.com/alibaba/higress/pull/2080/files](https://github.com/alibaba/higress/pull/2080/files)

然后联系我们的工作人员商谈合作事宜，钉群群号 107690002780，或者 wx（ID：zjjxg2018）



Q4：哪些 MCP Client 能调用基于 Higress 实现的 MCP Server，例如通义灵码、Cline、Cherry Studio 等？

A4：只要客户端支持 POST+ SSE  模式，以及 Streamable HTTP 模式的客户端，就可以调用。



Q5：哪些 AI 应用开发平台支持接入基于 Higress 实现的 MCP Server，例如百炼、Dify、Spring AI Alibaba、LangChain 等？ 

A5：只要开发平台支持对接 MCP 协议，就可以接入。



Q6：哪些大模型能识别基于 Higress 实现的 MCP Server，例如通义、DeepSeek、OpenAI 等？

A6：只要大模型支持 Function Call 或者能生成指定格式（例如XML）的响应，就可以识别。



Q7：我们的 MCP Server 已经完成部署，如何使用 Higress 的企业级能力？

A7：下载 Higress，参照官方文档进行部署；若您业务部署在阿里云，推荐 Higress 企业版，差异比对详情：[https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/product-overview/product-comparison](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/product-overview/product-comparison)



Q8：我们的 MCP Server 还未部署，是否可以直接托管在 Higress 上？

A8：可以的，用户不需要自己部署服务器，基于 Higress 的高性能和横向拓展能力，可以轻松托管上千个 MCP Server，若您有更严苛的性能、稳定性和安全诉求，推荐 Higress 企业版。


