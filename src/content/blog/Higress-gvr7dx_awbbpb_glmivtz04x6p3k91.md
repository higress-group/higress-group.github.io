---
title: "为何最近谈论 SSE 和 WebSocket 的人越来越多了？"
description: "为何最近谈论 SSE 和 WebSocket 的人越来越多了？"
date: "2025-01-26"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸

****

**因为实时通信已经成了大模型应用的标配。**



我们先简单明了的给出了回答，然后再一起重新认识下这两位新时代里的老朋友。



目录

+ SSE 和 WebSocket 是什么？
+ 大模型应用出现前的主流网络通信协议是什么？
+ 为什么大模型应用没有沿用 <font style="color:rgb(0, 0, 0);">Web 类应用的主流通信协议</font>？
+ <font style="color:rgb(0, 0, 0);">为什么 SSE 和 WebSocket 更适合支持大模型应用？</font>
+ <font style="color:rgb(0, 0, 0);">实时通信协议的技术挑战和应对方案</font>
+ <font style="color:rgb(0, 0, 0);">What's Next？</font>



## SSE 和 WebSocket 是什么？
<font style="color:rgb(0, 0, 0);">SSE（Server-Sent Events，服务器推送事件）是一种基于 HTTP 的网络通信协议，允许服务器向客户端单向推送实时数据。户端和服务端之间需要频繁地传输生成的内容。支持服务器可以一边生成结果，一边分块发送给客户端，这样用户就能逐步看到生成的内容，而不是等待服务端处理完所有内容才能看到。主要特点</font>

+ **<font style="color:rgb(0, 0, 0);">高效的单向通信：</font>**<font style="color:rgb(0, 0, 0);">转为服务端到客户端的单向通信所设计，完美匹配大模型场景（客户端发送一次请求，服务端持续返回流式结果）。</font>
+ **<font style="color:rgb(0, 0, 0);">低延迟：</font>**<font style="color:rgb(0, 0, 0);">每次生成一个逻辑段落或标记（token）即可立即推送，避免传统 HTTP 请求-响应模式的长等待。</font>
+ **<font style="color:rgb(0, 0, 0);">轻量协议：</font>**<font style="color:rgb(0, 0, 0);">基于HTTP/HTTPS，无需额外协议握手（如 WebSocket 的双向协商），减少连接开销。</font>



WebSocket 是一种网络通信协议，允许在客户端和服务器之间建立全双工、持久的连接，实现实时、双向的数据传输。不同于 SSE，WebSocket 连接一旦建立，双方可以随时发送数据，实效性更强，即无须等待服务端返回内容，客户端就能发起请求，适用于多人在线游戏操作实时同步、社交软件的聊天室、在线文档多人同时编辑等。主要特点是：

+ **全双工通信**：客户端和服务器可以同时发送和接收数据。
+ **持久连接**：连接建立后保持打开状态，直到主动关闭。
+ **低延迟**：数据可以即时传输，适合实时应用。



## 大模型应用出现前的主流网络通信协议是什么？
大模型应用出现前，互联网在线应用以 Web 类应用为主，<font style="color:rgb(0, 0, 0);">基于浏览器运行，通常通过 HTTP/HTTPS 协议与服务器通信，例如电商应用、新零售/新金融/出行等交易类应用，教育、传媒、医疗等行业应用，以及公共网站、CRM 等企业内部应用，适用范围非常广泛。其中，HTTPS 是 HTTP 的安全版本，通过 SSL/TLS 协议，对传输数据进行加密保护，加解密过程中会带来一些性能损耗。</font>

<font style="color:rgb(0, 0, 0);"></font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1737275096746-5a50f3b2-4c70-44dc-a39b-96c3f0270579.png)

从 API 管理的视角，看不同类型的网络通信协议



<font style="color:rgb(0, 0, 0);">HTTPS 是一种无状态的、应用层的协议，用于在客户端（如浏览器）和服务器之间传输超文本（如 HTML 文件、图片、视频等），具有以下特点：</font>

+ <font style="color:rgb(0, 0, 0);">基于请求-响应模型。</font>
+ <font style="color:rgb(0, 0, 0);">无状态：每次请求都是独立的，服务器不会保存客户端的状态。</font>
+ <font style="color:rgb(0, 0, 0);">数据加密，防止数据被窃听或篡改；身份验证，确保客户端与正确的服务器通信；数据完整性，防止数据在传输过程中被修改。（HTTP 是明文传输）</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">优势是：</font>

+ **简单易用**<font style="color:rgb(0, 0, 0);">：HTTP 协议设计简单，易于实现和使用。</font>
+ **广泛支持**<font style="color:rgb(0, 0, 0);">：几乎所有浏览器、服务器和开发框架都支持 HTTP。</font>
+ **灵活性**<font style="color:rgb(0, 0, 0);">：支持多种数据格式（如 JSON、XML、HTML）和内容类型。</font>
+ **无状态**<font style="color:rgb(0, 0, 0);">：简化了服务器的设计，适合分布式系统。</font>
+ **安全和合规性**<font style="color:rgb(0, 0, 0);">：通过加密技术保护数据传输，防止窃听和篡改；符合现代网络安全标准（如 GDPR、PCI DSS）。</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">这里我们以 TLS 1.3 为例，通过一张图了解下 HTTPS 在客户端和服务端之间的握手过程。（TLS 1.3 简化了以往的握手过程，性能损耗更小、响应更快）</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1737268268636-449cacbe-f5c3-46f9-b24c-0b98edb569ea.png)





## 为什么大模型应用没有沿用 <font style="color:rgb(0, 0, 0);">Web 类应用的主流通信协议</font>？
不同类型的大模型应用，对网络通信的需求不尽相同，但几乎都离不开以下需求：

+ **实时对话**：用户与模型进行连续交互，模型需要即时响应。例如通义千问，HIgress 官网的答疑机器人，都是需要依据客户问题，即时做出响应。
+ **流式输出**：大模型生成内容时，逐字或逐句返回结果，而不是一次性返回。但是钉钉、微信等应用，两个人相互对话时，采用的就不是流式输出了，文字等内容都是一次性返回的。
+ **长时任务处理**：大模型可能需要较长时间处理复杂任务，同时需要向客户端反馈进度，尤其是处理长文本、以及图片、视频等多模态内容；这是因为依赖大模型计算的响应，要比依赖人为写入的业务逻辑的响应，消耗的资源多的多，这也是为什么大模型的计算要依靠 GPU，而非 CPU，CPU 在并行计算和大规模矩阵计算上远不如 GPU。
+ **多轮交互**：用户与模型之间需要多次往返交互，保持上下文。这是大模型应用保障用户体验的必备能力。



这些场景对实时性和双向通信有较高要求，沿用 <font style="color:rgb(0, 0, 0);">Web 类应用的主流通信协议</font> - HTTPS，将出现以下问题：

+ 仅支持单向通信，即<font style="color:rgb(0, 0, 0);">请求-响应模型，必须是客户端发起时，服务端才能做出响应，无法进行双向通信，导致无法支持流式输出，无法处理长时任务。</font>
+ <font style="color:rgb(0, 0, 0);">客户端每次发出请求都需要重新建立连接，延迟增加，导致无法支持实时对话。</font>
+ <font style="color:rgb(0, 0, 0);">HTTPS 是一种无状态的通信协议，每次请求都是独立的，服务端不会保存客户端的状态，即便客户端可以在每次请求时重复发送上下文信息，但会带来额外的网络开销，导致无法高效的支持多轮交互场景。</font>



虽然 HTTPS 已经发展到 HTTPS/2 和 HTTPS/3，在性能上了有了提升，但是面对大模型应用这类对实时性要求较高的场景，依旧不够原生，并未成为这类场景下的主流通信协议。



## <font style="color:rgb(0, 0, 0);">为什么 SSE 和 WebSocket 更适合支持大模型应用？</font>
### SSE 的工作流程如下：
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1737790051065-38e6400c-702b-48a8-a892-8ddd08a3723f.png)

#### **1. 客户端发起 SSE 连接**
+ 客户端通过 JavaScript 的 `EventSource` API 向服务器发起 HTTP 请求。
+ 请求头中包含 `Accept: text/event-stream`，表明客户端支持 SSE 协议。
+ 示例代码：

```javascript
const eventSource = new EventSource('https://example.com/sse-endpoint');
```

#### **2. 服务器返回 HTTP 响应**
+ 服务器响应头中必须包含以下字段：
    - `Content-Type: text/event-stream`：表明响应内容为 SSE 数据流。
    - `Cache-Control: no-cache`：禁用缓存，确保数据实时更新。
    - `Connection: keep-alive`：保持长连接。
+ 示例响应头：

```plain
HTTP/1.1 200 OK
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```



**3. 服务器推送数据流**

+ 服务器通过 HTTP 长连接持续推送数据，每条消息以 `data:` 开头，以两个换行符 `\n\n` 结束。
+ 示例数据流：

```plain
data: {"message": "Hello"}

data: {"message": "World"}
```

#### **4. 客户端处理数据**
+ 客户端通过 `EventSource` 的 `onmessage` 事件监听服务器推送的数据。
+ 示例代码：

```javascript
eventSource.onmessage = (event) => {
    console.log('Received data:', event.data);
};
```

#### **5. 连接关闭或错误处理**
+ 如果连接中断（如网络问题），客户端会自动尝试重新连接。
+ 服务器可以通过发送 `retry:` 字段指定重连时间（毫秒）。
+ 示例重连设置：

```plain
retry: 5000
```



我们可以通过下方方式验证大模型 APP 使用的网络通信协议：  

+ **调用 API 并检查响应头**：  
使用 `stream=True` 参数请求流式响应，通过开发者工具或 `curl` 查看返回的 `Content-Type`，若为 `text/event-stream`，则明确为 SSE。  
示例命令：  

```bash
curl -X POST "https://api.deepseek.com/v1/chat/completions" \
  -H "Authorization: Bearer YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"deepseek-chat", "messages":[{"role":"user","content":"Hello"}], "stream":true}' \
  -v  # 查看详细响应头
```

预期输出：  

```plain
< HTTP/1.1 200 OK
< Content-Type: text/event-stream
< Transfer-Encoding: chunked
```

+ **数据格式验证**：  
流式响应的数据体格式为 `data: {...}\n\n`，符合 SSE 规范[1]。  
示例响应片段：  

```plain
data: {"id":"123","choices":[{"delta":{"content":"Hi"}}]}
data: [DONE]
```



### WebSocket 的工作流程如下：
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1737273198664-a384161e-0026-49f8-bb09-892ee154aa5e.png)

#### **1. 客户端发起 WebSocket 握手请求**
+ 客户端通过 HTTP 请求发起 WebSocket 握手，请求头中包含以下字段：
    - `Upgrade: websocket`：表明客户端希望升级到 WebSocket 协议。
    - `Connection: Upgrade`：表明客户端希望升级连接。
    - `Sec-WebSocket-Key`：随机生成的 Base64 编码字符串，用于握手验证。
+ 示例请求头：

```plain
GET /ws-endpoint HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

#### **2. 服务器返回 WebSocket 握手响应**
+ 服务器验证客户端的握手请求，并返回 HTTP 101 状态码（Switching Protocols），表示协议升级成功。
+ 响应头中包含以下字段：
    - `Upgrade: websocket`：确认协议升级。
    - `Connection: Upgrade`：确认连接升级。
    - `Sec-WebSocket-Accept`：基于客户端的 `Sec-WebSocket-Key` 计算的值，用于验证握手。
+ 示例响应头：

```plain
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

#### **3. WebSocket 连接建立**
+ 握手成功后，HTTP 连接升级为 WebSocket 连接，客户端和服务器可以通过 WebSocket 协议进行双向通信。
+ 连接基于 TCP，支持全双工通信。

#### **4. 数据传输**
+ 客户端和服务器通过 WebSocket 协议发送和接收数据帧（Frame）。数据帧可以是文本或二进制格式。
+ **文本帧**：用于传输 JSON、字符串等文本数据。

```plain
{"message": "Hello"}
```

+ **二进制帧**：用于传输图片、音频、视频等二进制数据。

```plain
[0x01, 0x02, 0x03]
```

#### **5. 连接关闭**
+ 客户端或服务器可以主动发送关闭帧（Close Frame）来终止连接。
+ 关闭帧包含关闭状态码和原因（可选）。
+ 示例关闭帧：

```plain
Close Frame:
  - Code: 1000 (Normal Closure)
  - Reason: "Connection closed by client"
```



<font style="color:rgb(0, 0, 0);">例如 OpenAI 的 Realtime API （适用于对实时性要求更高的场景，客户端在不需要等待服务端发送完内容后就能发起请求），推荐基于 WebSocket 协议，以支持低延迟的多模态交互，包括文本和音频输入输出。具有以下特征：[2] </font>

+ <font style="color:rgb(0, 0, 0);">基于事件的通信：Realtime API 通过 WebSocket 进行有状态的事件驱动交互，客户端和服务器之间通过发送和接收 JSON 格式的事件进行通信</font>[1](https://platform.openai.com/docs/guides/realtime-websocket)[3](https://ai-bot.cn/realtime-api/)[5](https://www.53ai.com/news/MultimodalLargeModel/2024100820654.html)<font style="color:rgb(0, 0, 0);">。</font>
+ <font style="color:rgb(0, 0, 0);">持久连接：WebSocket 协议使得 API 能够保持一个持续的双向连接，允许即时的数据流动，这对于实时对话和交互至关重要。</font>
+ <font style="color:rgb(0, 0, 0);">多模态支持：该 API 不仅支持文本输入，还可以处理音频数据，提供更加丰富和自然的用户体验。</font>



可见，SSE 和 WebSocket 均能较好的支持大模型应用的实时性需求，前者更加轻量化，后者因为是双向通信在实时性要求更高的场景更有优势。这里我们通过一张表来比对下各个协议的特点。

| **特性** | **HTTP/1.1** | **HTTP/2** | **SSE** | **WebSocket** |
| :---: | --- | --- | --- | --- |
| **协议基础** | 基于 TCP，文本协议 | 基于 TCP，二进制协议 | 基于 HTTP/1.1 或 HTTP/2 | 基于 TCP，独立的全双工协议 |
| **通信模式** | 请求-响应 | 请求-响应 | 单向（服务器 → 客户端） | 双向（服务器 ↔ 客户端） |
| **连接复用** | 不支持（默认短连接） | 支持（多路复用） | 支持（基于 HTTP/1.1 或 HTTP/2） | 支持（长连接） |
| **头部压缩** | 不支持 | 支持（HPACK 压缩） | 依赖底层 HTTP 协议 | 不支持 |
| **数据格式** | 文本 | 二进制 | 文本 | 文本或二进制 |
| **延迟** | 较高（队头阻塞问题） | 较低（多路复用解决队头阻塞） | 低（服务器主动推送） | 极低（全双工实时通信） |
| **断线重连** | 需手动实现 | 需手动实现 | 支持自动重连 | 需手动实现 |
| **适用场景** | 传统网页、API 请求 | 高性能网页、API 请求 | 实时通知、日志流、进度更新 | 实时聊天、在线游戏、协同编辑 |
| **安全性** | 需 HTTPS 加密 | 需 HTTPS 加密 | 需 HTTPS 加密 | 需 WSS（WebSocket Secure）加密 |
| **协议升级** | 无需升级 | 无需升级 | 无需升级 | 需要协议升级（HTTP → WebSocket） |
| **典型应用** | 静态资源加载、表单提交 | 流媒体、多资源并行加载 | 一问一答的大模型应用 | 在线游戏、多人协作、实时性要求更高的大模型应用场景 |




总结来看，HTTP/1.1 适合传统网页和简单 API 请求，但性能较低。 ，HTTP/2 适合现代高性能网页，解决了 HTTP/1.1 的队头阻塞问题，SSE 适合服务器主动推送实时数据的场景，如一问一答的大模型应用，WebSocket 适合需要双向实时通信的场景如在线游戏、多人协作、实时性要求更高的大模型应用场景（随时可以打断生成过程进行追问的场景，例如大模型实时辩论平台）。



此外，WebRTC 也广泛应用于大模型应用场景，例如，当调用 Realtime API 时，OpenAI 官方推荐使用 WebSocket 或 WebRTC[3]。



## 实时通信协议的技术挑战和应对方案
虽然 SSE 和 WebSocket 的特点，天然适合处理游戏、社交、大模型应用等有处理实时通信的场景。但是用户体量扩大后，依旧会遇到一些工程化上的技术挑战。



如果把数据比作货物，HTTPS 是小型渡轮，适合短距离、少量的货物运输，SSE 和 WebSocket 则是大型货轮，适合长距离、大批量的货物运输。此时，网关是负责连接陆地和水域的中转大厅，控制船只的秩序和方向（路由、负载均衡），对货船进行安全检查（身份验证），还设置了应急和备用通道（流量管控、高可用保障）等。**由于大型货轮不间断（长连接）的进入中转大厅，且单次访问数据量大、访问用户多，对扮演****<font style="color:rgb(0, 0, 0);">管理 SSE 和WebSocket 的连接建立和维护的网关，提出了更高的要求。</font>**

****

以下罗列了具体的挑战和网关层的应对方案，方案部分仅供参考，工程上的问题没有唯一的答案，应结合业务和技术团队的实际情况，选择适合自己的方案。



### 软件变更和服务扩缩容导致的稳定性风险
<font style="color:rgb(0, 0, 0);">技术挑战：</font>

+ <font style="color:rgb(0, 0, 0);">越是高速发展的应用，越是新兴应用，软件变更频率越高，网关升级是软件变更的重要组成部分。但是，网关的升级通常涉及服务重启、配置变更或网络切换等作用，这会直接影响 SSE 和 WebSocket 连接的稳定性。</font>
+ <font style="color:rgb(0, 0, 0);">服务扩容过程中（增加实例），现有的 SSE 和 WebSocket 可能无法连接到新实例，服务缩容过程中（减少实例），现有的 SSE 和 WebSocket 可能会因服务的下线而被强制关闭，这些对实时性要求比较高的应用，例如游戏、大模型实时聊天，都会带来用户体验的下降。</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">应对方案：</font>

+ 无损上下线能力：该能力在微服务变更时，应用比较广泛，可以有效降低版本发布和扩缩容的稳定性风险。常见于云产品的商业能力。**<font style="color:#DF2A3F;">例如，阿里云的云原生 API 网关提供了面向 HTTPS/WebSocket 的微服务治理能力。</font>**
+ 客<font style="color:rgb(0, 0, 0);">户端重连机制：在客户端设计自动重连机制，减少中断影响，和无损上下线一样，使用心跳包检测连接状态，一旦中断自动重连，此外，还可以在服务器端记录已发送的数据，实现断点续传。</font>
+ 协议切换机制：在 SSE 和 WebSocket 不可用时，回退到长轮询（Long Polling），不过这个依赖于网关本身是否支持这些长连接。**  
**

### 大带宽导致内存快速上涨的稳定性风险和带宽成本
技术挑战：大模型经常需要处理长文本、以及图片、视频等多模态内容，对带宽的消耗远超 Web 类应用，导致内存快速上涨，同时带来更高的带宽成本。



应对方案：选择支持流式处理的网关（如 Higress），将生成的内容分块传输，减少单次传输的数据量。同时，采用压缩算法（如 Gzip），减少数据传输量，控制带宽成本。**<font style="color:#DF2A3F;">阿里云云原生 API 网关即将上线软硬一体化的内容压缩方案，带宽传输成本可下降20%+。</font>**



### 高延时导致防范恶意攻击的资源成本增高
技术挑战：相比 Web 类应用，大模型应用推理时消耗的计算资源更多。例如发生 DDoS 攻击时， Web 类应用应对攻击会消耗1:1的计算资源，大模型应用则会消耗1:x(x 远大于1) 的后端资源，导致大模型应在面对恶意攻击时，更加脆弱。



应对方案：在网关层部署立体的防护措施，包括认证鉴权、安全防护、流量管控等。

+ 认证鉴权：对来自客户端的请求，进行合规性的校验。基于具体的业务需求，选择第三方的认证协议，从我们服务的客户经验上看，选择 <font style="color:rgb(51, 51, 51);">OAuth2、JWT 的居多。</font>
+ <font style="color:rgb(51, 51, 51);">安全防护：通过 IP 限制，或者基于</font>URL、请求头等特征，设计安全防护措施。
+ 流量管控：基于 URL 参数、HTTP 请求头、客户端 IP 地址、消费者名称或 Cookie 中的 Key，进行 token 级别的限流。



**<font style="color:#DF2A3F;">Higress 和商业版云原生 API 网关提供了丰富的开箱即用的插件，降低了用户的开发、适配和维护成本。如下是产品的插件市场。</font>**

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1737524583542-9f81ca53-5ad2-4665-a891-c8f758fab853.png)



这些防护措施，不仅能提升面对恶意攻击系统的健壮性，在面对外部不规则流量时，还能提升系统的稳定性。



## What's Next？
大模型应用除了带来了 SSE 和 WebSocket 的使用频率越来越高，也在助推 API First 的理念。**以往，在线应用都是通过 Service 来对外暴露提供能力，但大模型应用将****<font style="color:rgb(0, 0, 0);">通过 API 对外提供服务能力</font>**<font style="color:rgb(0, 0, 0);">，除了基模类厂商已经通过提供 API 来服务广大开发者群体，大模型应用类厂商也开始提供 API 服务。</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">例如，近日 Perplexity 将面向企业客户和开发人员推出其 AI 搜索的 API 服务——基础版 Sonar 和高级版 Sonar Pro，以允许企业和开发人员把 Perplexity 的生成式 AI 搜索工具构建到自己的应用中去。</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">这样做的好处是：第一，Perplexity 可以因此让自己的 AI 搜索无处不在，而不只局限在它的应用与网站里。一个案例是其客户 Zoom：Sonar 允许 Zoom 的 AI 聊天机器人根据带有引文的网络搜索提供实时答案，而不需要 Zoom 的视频用户离开聊天窗口。[4] </font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">随着国内大模型应用的成熟，相信这一趋势会越加明显，本文的姊妹篇将聊一聊《为何最近谈论 API 管理的人越来越多了？》，敬请期待。</font>

<font style="color:rgb(0, 0, 0);"></font>

<font style="color:rgb(0, 0, 0);">[1] </font>[https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events)

<font style="color:rgb(0, 0, 0);">[2] </font>[https://platform.openai.com/docs/guides/realtime-websocket](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events)

[3] [https://platform.openai.com/docs/guides/realtime](https://platform.openai.com/docs/guides/realtime)

<font style="color:rgb(0, 0, 0);">[4] </font>[https://mp.weixin.qq.com/s/ZB](https://mp.weixin.qq.com/s/ZBbwD9JlEyM0oOc4RMrA6g)


