---
title: "主流 API 协议的功能和应用场景解析"
description: "主流 API 协议的功能和应用场景解析"
date: "2025-09-08"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸

笔者近期参与了一个开源项目的建设：HiMarket[[1]](https://mp.weixin.qq.com/s/8ZKQlODD18Ta8s0N_hdzRg)。这个开源项目旨在帮助开发者，尤其是企业快速实现私有的 AI 开放平台，专注在对外提供 API 和 MCP 服务的管理上。因此，借此机会对主流 API 协议的功能和应用场景进行了梳理，以厘清容易混淆的概念。



API（Application Programming Interface，应用程序编程接口），顾名思义，是用来连接不同软件系统，以实现数据交互和服务共享的作用。构成上，它是<font style="color:rgb(51, 51, 51);">一组规定或协议，定义了不同应用或组件之间，相互交互的方法。用三个关键词来定义 API 的核心能</font>力，就是：定义规则、解耦系统、提升复用性<font style="color:rgb(51, 51, 51);">。</font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);">广义上，我们也可以把 API 视为一种中间件，允许开发者访问和使用某些功能或数据，而无需了解背后的详细实现，从而降低软件系统的复杂度。例如，阿里云提供的 OpenAPI，就是提供给开发者的一系列应用程序编程接口，帮助开发者可以通过 API 的方式，来管理云上的资源、数据和服务等。</font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);">随着软件形态和应用场景的丰富，API 的种类也在不断被丰富。从最早的重量级 SOAP，到 Web 世界流行的 </font><font style="color:rgb(51, 51, 51);">RESTful API，再到</font><font style="color:rgb(51, 51, 51);">大模型语境下的流式 API，每一种新类型的出现都对应了新型软件形态下的不同工程解法。本文旨在对主流的 API 定位、功能、应用场景进行梳理，帮助开发者对 API 协议有一个全貌了解。</font>



不同的视角，会有不同的分类方式。本文从应用场景，对 API 作了6种分类。

## <font style="color:rgb(51, 51, 51);">一、应用广泛的 RESTful API</font>
<font style="color:rgb(51, 51, 51);">REST（Representational State Transfer）是当下最广泛使用的架构风格，它基于 HTTP 协议，定义了一组设计约束和理念，他的核心思想是：</font>一切都是资源（Resource），通过统一的接口来操作这些资源<font style="color:rgb(51, 51, 51);">。并用 URL 来表示资源，用 HTTP 方法（GET/POST/PUT/DELETE）来定义操作。基于 REST 来构建的 API，我们称之为 </font>RESTful API。



在 Web 世界里，资源通常对应一个 URL。例如：

+ `https://api.example.com/users/123` → 代表一个用户资源
+ `https://api.example.com/orders/456/items` → 代表订单里的商品资源



这就像物理世界里，每一个门牌号都能唯一指向一间房子。最常见的开放平台，例如微信、支付宝、高德等开放平台，对外提供的 API 服务就是 <font style="color:rgb(51, 51, 51);">RESTful 的。</font>



### 优势
+ **直观易懂**：URL 就是资源，HTTP 方法就是操作，GET/POST/PUT/DELETE 的语义清晰。
+ **无状态性**：每个请求都独立携带上下文，服务端不用记住客户端的状态，这使得扩展性更好。
+ **标准化**：基于 HTTP 协议，充分复用现有的基础设施（缓存、代理、负载均衡等）。
+ **跨语言**：JSON/XML 等文本格式，使得不同语言都能轻松解析。



### 如何工作
一次典型的 REST 调用，分成客户端请求和服务端响应两个部分：

#### 客户端请求包含什么
1. **URL**：标识资源，例如 `/users/123`
2. **HTTP 方法**：定义操作，例如 `GET` 查询、`PUT` 更新
3. **Headers**：附加信息，比如内容格式（`Content-Type: application/json`）、认证令牌（`Authorization: Bearer ...`）
4. **请求体（Body）**：对于 `POST/PUT` 请求，通常包含 JSON 数据

请求示例：

```plain
POST /users HTTP/1.1
Host: api.example.com
Content-Type: application/json
Authorization: Bearer <token>

{
  "name": "望宸",
  "role": "engineer"
}
```

#### 服务端响应包含什么
1. **状态码**：告知结果，例如 `200 OK`、`201 Created`、`404 Not Found`
2. **Headers**：响应的元数据，例如缓存策略、返回数据格式
3. **响应体（Body）**：通常是 JSON，携带资源内容

响应示例：

```plain
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 123,
  "name": "望宸",
  "role": "engineer"
}
```



REST 的设计哲学迎合了互联网应用的爆发需求：轻量、直观、跨语言、易扩展，搭配 Swagger （现称 OpenAPI Specification, OAS）的规范，成为互联网世界应用最广泛的的 API 形态，是 Web API 协议的事实标准。



但随着应用场景的多样化，它也逐渐暴露出一些局限，因此出现了其他的 API 形态。



## 二、前端查询友好的 GraphQL 
在移动互联网和前端复杂化的背景下，客户端需要的数据结构和后端返回的 RESTful 响应会出现对不上号的情况。

+ 数据获取过多：例如客户端只需要用户的头像和昵称，但 RESTful API `/users/123` 返回了整个用户对象（包含地址、订单、权限等一大堆信息）。这不仅浪费带宽，还增加了解析开销。
+ 数据获取不足：例如移动端要展示用户信息 + 最近三条订单，但 RESTful 只能先调 `/users/123`，再调 `/users/123/orders`，最后还得筛选。一个页面可能要发出三四次请求，性能和延迟都受到影响。



这种不足在移动端、复杂单页应用、跨端应用尤为严重，因为客户端和网络环境资源有限。GraphQL 正是为了解决这个问题而出现的。它允许客户端“按需取数”，一次请求返回所需字段。



GraphQL 是 Facebook 在 2015 年开源的一种 API 查询语言与执行引擎。它的核心理念是：客户端自己决定要什么数据，服务端只返回所需字段。



和 RESTful 按资源划分不同，GraphQL 只有一个统一的入口（通常是 `/graphql`），客户端通过查询语句（Query）来精确指定数据结构。打个比方来解释 GraphQL 和 RESTful 的不同：

+ RESTful 是优惠套餐，点了“用户信息”，结果上了一桌子菜，包含了你不需要的；
+ GraphQL 是自助区，用户拿个盘子，自己挑头像、昵称、最近三单，拿多少算多少。



### 优势
+ 按需取数：避免 RESTful 的过度获取和获取不足。
+ 单一入口：所有请求都通过 `/graphql`，简化路由和维护。
+ 强类型 Schema：客户端和服务端共享同一份类型系统，减少数据格式不一致的问题。
+ 自文档化：Schema 定义就是文档，开发者可以通过 introspection 自动获取接口描述。
+ 前端友好：前端团队可以独立定义所需数据，减少和后端的沟通成本。



### 工作机制
GraphQL 的运作分三步：

1. 客户端构造查询：用类 JSON 的语法描述需要的数据字段；
2. 服务端解析查询：根据 Schema 验证语法和字段合法性；
3. 服务端执行解析器：从数据库或服务获取数据，并组装成响应。

#### 客户端请求示例
```plain
POST /graphql HTTP/1.1
Host: api.example.com
Content-Type: application/json

{
  "query": "{
    user(id: 123) {
      name
      max
      orders(limit: 3) {
        id
        total
      }
    }
  }"
}
```

#### 服务端响应示例
```plain
{
  "data": {
    "user": {
      "name": "望宸",
      "max": "https://cdn.example.com/max/123.png",
      "orders": [
        { "id": "A001", "total": 99.9 },
        { "id": "A002", "total": 58.0 },
        { "id": "A003", "total": 199.5 }
      ]
    }
  }
}
```

可以看到：客户端只要“头像、昵称、三条订单”，服务端就不会多给一个字节。



## 三、面向微服务体系的 API
在性能要求不高的情况下，RESTful 足够好用。但进入微服务架构之后，问题变得复杂：

+ 一个前端请求可能要串联 5~10 个微服务，RESTful 的 JSON 编码 + HTTP/1.1 协议在序列化和传输上效率并不高。
+ 服务之间往往是高频调用，这时候带宽和 CPU 序列化开销就成了大问题，需求高性能的调用框架。

****

这里我们介绍3种大家熟悉的，用于微服务架构的高性能远程调用框架或实现范式。



### Apache Dubbo
Apache Dubbo，由阿里开源，是一种 RPC（Remote Procedure Call）框架。核心特性包括：

+ 多协议支持：默认用 Dubbo 协议（基于 TCP/长连接），后来也支持 gRPC、REST 等。
+ 注册中心：典型搭配 Zookeeper、Nacos 来做服务发现。
+ 负载均衡 & 容错：内建多种负载策略、调用重试、限流降级。
+ 面向 Java 生态：和 Spring/Spring Boot 结合紧密。



### gRPC
gRPC 作为 RPC 架构的一种变体， 由 Google 于 2015 年创建，相比 RESTful API，具备更高性能、更低延迟的特点。

+ 协议：gRPC 依赖于 HTTP/2，提供更好的性能和更低的延迟，而 REST 使用 HTTP/1.1。
+ 数据格式：gRPC 采用协议缓冲区 Protobuf（一种二进制序列化格式），从而实现更小的有效负载和更快的通信；REST 通常利用 JSON 或 XML（基于文本的格式）。
+ API 设计：gRPC 遵循 RPC 范式，使其感觉像是调用本地函数；REST 遵守表述性状态转移模型的架构约束，专注于资源和状态转换。
+ 流式传输：gRPC 支持双向流式传输，从而实现客户端和服务器之间的持续数据交换；REST 仅限于请求-响应通信模式。



### Spring Cloud
在 Spring Cloud 体系里，最初的远程调用主要依赖 REST（基于 HTTP），通过 `RestTemplate` 或后来推荐的 `WebClient`，后来出现了 Feign（声明式 HTTP 客户端），开发者用接口 + 注解就能调用远程服务，更贴近 RPC 的开发体验。



打个比喻，RESTful 是公路运输（HTTP + JSON），虽然灵活，但车流量大了容易堵车；RPC 是修好的高铁轨道，列车运行高效、可预测，适合点对点的大规模通信。



## 四、面向实时通信的 API：WebSocket
实时性是互联网应用中诸多场景的刚需。比如：

+ 即时通讯应用的消息同步
+ 协同办公软件里的文档编辑
+ 游戏场景下的状态更新
+ 交易平台的行情推送



如果仅靠 RESTful API 的请求-响应模型，客户端要么需要不断轮询服务器，要么只能被动等待。前者带来资源浪费，后者无法满足实时性。因此，WebSocket 就应运而生，它们提供了从服务端主动推送消息到客户端的能力，但方式和适用场景有所不同。



WebSocket 是 HTML5 标准中的全双工通信协议，它允许客户端与服务端在单个 TCP 连接上进行双向、实时数据交换。与 REST 不同，WebSocket 不是一次请求&一次响应的短时通信，而是一旦建立连接，就能随时互发消息。



### 优势
+ 双向通信：客户端和服务端都能主动发消息，打破了 HTTP 单向模式。
+ 低延迟：复用连接，避免了频繁 HTTP 握手的开销。
+ 实时性高：适合消息交互频繁的场景。



### 工作机制
1. 客户端通过 HTTP 请求发起握手（`Upgrade: websocket`）；
2. 服务端同意升级，建立 WebSocket 连接；
3. 后续通信基于帧协议在 TCP 长连接上传输，支持二进制和文本。



### 示例
```plain
const socket = new WebSocket("ws://example.com/chat");
socket.onopen = () => socket.send("Hello!");
socket.onmessage = (event) => console.log(event.data);
```



## <font style="color:rgb(51, 51, 51);">五、面向大模型场景的流式 API：SSE</font>
大模型场景下流量具备如下特点：

1. 生成结果是渐进式的：大模型在推理时，不是一次性生成完整答案，而是逐 token 输出。
2. 响应延迟更长：推理耗时可能是秒级甚至分钟级。
3. 数据量大且不可预估：大模型的输出结果往往难以事先预估字数，一次性传输容易导致内存压力、带宽突增，甚至连接超时。
4. 交互模式以单向为主：大多数大模型应用场景是先用户提问，再模型回答，很少需要实时的双向消息交互。
5. 连接数量庞大，运维要求高：一个大模型应用可能同时服务数百万用户，需求更轻量、更易于代理和负载均衡的方案。



因此，RESTful 不适合，因为其是客户端发出请求，等待服务端计算完毕，再一次性返回结果WebSocket 是双向通信，需要独立的协议升级、长连接管理、心跳检测，复杂网络（防火墙、代理、负载均衡）下，WebSocket 更容易被中断，WebSocket 的双向能力略显冗余，不是最优选择。



SSE（Server-Sent Events）是一种基于 HTTP 的单向流式传输机制，服务端可以不断通过同一连接向客户端推送事件流，天然适合在对话 Agent 的场景。



### 优势
+ 天然流式：支持服务端边生成边推送，用户能立即看到部分输出。
+ 基于 HTTP：复用已有 HTTP 基础设施，兼容性好，代理/负载均衡/防火墙都友好。
+ 轻量级：只需要服务端不断写入 `data:` 数据块，客户端就能实时接收。
+ 专注单向流：正好匹配大模型“只需要输出”的场景，不必浪费资源维护双向通道。
+ 断线重连：支持 `Last-Event-ID`，能从中断点恢复。



### 工作机制
1. 客户端通过 `EventSource` 向服务端发起 HTTP GET 请求；
2. 服务端返回 `Content-Type: text/event-stream` 并保持连接；
3. 服务端以流的形式持续推送事件：

```plain
data: hello
data:  world
```

4. 客户端逐条处理，形成实时效果。



### 示例
```plain
const source = new EventSource("/events");
source.onmessage = (event) => console.log("New data:", event.data);
```

  
打个比喻理解三者的不同，WebSocket 是打电话，双方可以随时打断对方说话。SSE 是电台广播，服务端不断播放节目，客户端调频收听。而 RESTful 是写信，必须一来一回。相比 WebSocket 的电话模式，SSE 更轻量，适合单向推送。关于 WebSocket 和 SSE 的选型详情，请阅读[[2]](https://mp.weixin.qq.com/s/mnQQmM4xitrlwNmfcE0LVw)。



## <font style="color:rgb(51, 51, 51);">六、面向 MCP 场景的 API</font>
虽然都是和大模型进行交互，但是 MCP 场景的流量特点和大模型客户端并不完全相同。早期，MCP 官方采用了 SSE 协议，但是之后变更成 Streamable HTTP 协议。



HTTP + SSE 存在的问题

HTTP+SSE 的传输过程实现中，客户端和服务器通过两个主要渠道进行通信。

+ HTTP 请求/响应：客户端通过标准的 HTTP 请求向服务器发送消息。 
+ 服务器发送事件（SSE）：服务器通过专门的 /sse 端点向客户端推送消息。



这就导致存在下面三个问题：

+ 服务器必须维护长连接，在高并发情况下会导致显著的资源消耗。
+ 服务器消息只能通过 SSE 传递，造成了不必要的复杂性和开销。
+ 基础架构兼容性，许多现有的网络基础架构可能无法正确处理长期的 SSE 连接。企业防火墙可能会强制终止超时连接，导致服务不可靠。



Streamable HTTP 的改进

Streamable HTTP 是 MCP 协议的一次重要升级，通过下面的改进解决了原有 HTTP + SSE 传输方式的多个关键问题：

+ 统一端点：移除了专门建立连接的 /sse 端点，将所有通信整合到统一的端点。
+ 按需流式传输：服务器可以灵活选择返回标准 HTTP 响应或通过 SSE 流式返回。
+ 状态管理：引入 session 机制以支持状态管理和恢复。

<font style="color:rgb(51, 51, 51);"></font>

因此，相比 SSE，Streamable HTTP 在稳定性、性能和客户端复杂度上都有了大幅提升。数据比对可阅读此文[[3]](https://mp.weixin.qq.com/s/5L6KUTUmTXwwovMaRagE4g)。



## <font style="color:rgb(51, 51, 51);">七、总结和展望</font>
<font style="color:rgb(51, 51, 51);">API 的演进史就是软件工程不断应对新问题的过程。从 SOAP 的繁琐，到 RESTful 的简洁，再到 GraphQL 的灵活，从单向的 HTTP 请求，到实时双向通信的 WebSocket，再到大模型语境下的流式 API，</font>每一次形态的出现，都是在性能、灵活性、实时性之间找到新的平衡点<font style="color:rgb(51, 51, 51);">。</font>

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);">未来，随着 AI 原生应用的丰富，API 还会继续演进，并会衍生出 API 管理方面更多的诉求。近期，Higress 开源了开箱即用的 AI 开放平台 Himarket，旨在高效、统一管理 </font><font style="color:rgb(51, 51, 51);">RESTful API、MCP 这些对外提供服务、数据、应用的接口，欢迎试用。功能和 Demo 详情，请阅读</font>此文[[3]](https://mp.weixin.qq.com/s/8ZKQlODD18Ta8s0N_hdzRg)。


