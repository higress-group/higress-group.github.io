---
title: "携程旅游的 AI 网关落地实践"
description: "携程旅游的 AI 网关落地实践"
date: "2025-08-25"
category: "case"
keywords: ["Higress"]
authors: "CH3CHO"
---

<font style="color:rgb(0,0,0);">本文整理自携程旅游研发总监董艺荃在2025中国可信云大会上的分享，董艺荃 GitHub ID CH3CHO，同时也是 Higress 的 Maintainer。分享内容分为以下4部分。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">大规模应用</font><font style="color:rgb(0,0,0);"> AI 技术的过程中遇到了哪些问题</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">网关选型上有哪些考虑</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">落地</font><font style="color:rgb(0,0,0);"> AI 网关时，有哪些难点和如何应对的</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">应用成效和未来规划</font>

## **<font style="color:rgb(0,0,0);">01 大规模应用 AI 技术的过程中遇到了哪些问题</font>**
<font style="color:rgb(0,0,0);">为了进一步提升服务水平和服务质量，携程很早就开始在人工智能大模型领域进行探索。而随着工作的深入，大模型服务的应用领域不断扩大，公司内部需要访问大模型服务的应用也越来越多，不可避免的就遇到了下面这几个问题。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">第一，我们不仅接入了外部的商业大模型，还有很多我们内部的自研模型，不同的模型对网络访问能力要求不同，在认证机制也存在差异。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">第二，各个业务应用点对点接入大模型，费用管理各自为政，没有集中的用量统计。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">第三，在流量高峰，乃至大模型服务出现故障的时候，没有统一的限流、熔断、流量切换等机制，全靠业务线自己。</font>

<font style="color:rgb(0,0,0);">在这种场景下，我们自然就会想到使用网关来对这些服务接入进行统一管理，并增加各种切面上的流量治理功能。</font>

## **<font style="color:rgb(0,0,0);">02 网关选型上有哪些考虑</font>**
<font style="color:rgb(0,0,0);">在对比多个开源项目之后，我们选择了</font><font style="color:rgb(0,0,0);"> Higress 作为搭建 AI 网关的基础。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">第一，</font><font style="color:rgb(0,0,0);">Higress 在阿里内部有着长时间的实践和技术沉淀，在传统 API 网关的基础上迭代了 AI 网关的功能，对各种大模型接入场景提供了丰富的功能支持，而且稳定性良好。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">第二，</font><font style="color:rgb(0,0,0);">Higress 使用了在云原生服务网格领域广泛应用的 Istio和 Envoy 作为内核，并且支持使用 C++、Go 和 Rust 等语言编写 Wasm插件，具有极强的扩展性，便于我们后续根据自身需求添加功能。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">第三，</font><font style="color:rgb(0,0,0);">Higress 社区非常活跃，对于需求的跟进速度很快，一般两到三周就会发布一个新版本。</font>

<font style="color:rgb(0,0,0);">在内部落地</font><font style="color:rgb(0,0,0);"> Higress 作为 AI 网关基础设施之后，我们整个 AI 服务接入架构就如下图所示。网关的所有组件都部署在内部的 Kubernetes 集群内，由它来负责服务器资源和配置信息的管理。</font>

![](https://img.alicdn.com/imgextra/i2/O1CN01zKDw4W1NqT6nBzI8Z_!!6000000001621-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">其中，网关本身由</font><font style="color:rgb(0,0,0);"> 3 个组件组成：</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">Gateway，也就是数据面，直接承接用户流量并转发给后端的大模型服务。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">Controller，也就是控制面，负责从 Kubernetes 中读取配置信息并推送给 Gateway。</font>

<font style="color:rgb(0,0,0);">·</font><font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">Management API，负责对接我们内部的大模型运营平台，也就是图中的携程机器学习平台。管理员会在平台上面配置可供访问的各种大模型服务，最近还接入了 MCP 服务，以及接入方的相关信息。</font><font style="color:rgb(0,0,0);">API 会把这些配置信息写入 Kubernetes 进行持久化保存，供 Controller 读取。</font>

<font style="color:rgb(0,0,0);">在配置数据方面，Higress 本身使用的是 K8s 原生的一些资源类型，还有一些自定义的资源。这部分我们没有做什么改动。但在对接机器学习平台时，我们根据实际的业务需求，针对大模型接入和 MCP Server 接入两种场景设计了独立的领域模型，并对 Higress 的 Management API 进行了二次开发，增加了模型转换的功能，并且支持对所有的配置进行增量和全量两种同步操作。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01lx17qh1Kmr8YseL5B_!!6000000001207-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">在大模型服务接入方面，考虑到风险隔离的需求，我们为不同的接入方（这里我们称之为消费者），设置了不同的接入点路径。每个接入点路径可以关联多个模型路由，使用模型名称进行匹配。每一个模型路由也可以关联多个后端的大模型服务，实现服务间的负载均衡。</font>

<font style="color:rgb(0,0,0);">在实际转发请求给大模型服务时，网关还支持对模型名称进行映射，也就是说用户可以使用统一的模型别名发起调用，在转发到不同的大模型服务时，根据服务的实际情况来更换为具体的模型名称。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01HA38MJ1JpJeGGiiSK_!!6000000001077-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">最近，我们又在网关上增加了</font><font style="color:rgb(0,0,0);"> MCP 服务接入的能力。这部分更类似于传统的 API 网关，将一个服务暴露到网关上以便外部进行访问。</font>

<font style="color:rgb(0,0,0);">但除了支持现有的</font><font style="color:rgb(0,0,0);"> MCP 服务之外，网关还支持将存量的 HTTP API 转化为 MCP 服务。用户可以使用 SSE 或者 Streamable HTTP 方式来访问这类 MCP 服务。针对存量转化这一部分，我们后面也会进一步展开介绍。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01Ai3BNm1RL6RoJWnVZ_!!6000000002094-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">对于所有经过</font><font style="color:rgb(0,0,0);"> AI 网关处理的请求，访问方都需要提供访问凭证来进行认证和鉴权操作。目前针对访问方，我们主要使用的是 Bearer Token 的认证机制。每个 Token 会关联一个消费者。一个消费者可以访问哪些服务则是需要经过申请和审批的。</font>

<font style="color:rgb(0,0,0);">针对后端服务这一侧，大部分大模型服务都是需要在访问时进行鉴权操作的。这些访问凭证统一存储在了网关内，消费者一侧无需关注。而在</font><font style="color:rgb(0,0,0);"> MCP 服务这一边，情况就要复杂一些。有的 MCP 服务并不需要认证，有的则是要求提供认证信息。网关层是支持服务提供方根据实际情况进行选择的。如果需要认证，既可以把认证凭证统一放在网关内，也可以要求由调用方提供。网关也会根据配置来调整凭证信息的传递方式，以满足端到端的认证需求。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01vYXcE41MZgz8ou4DC_!!6000000001449-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">当然这些都是正常的情况，下面我们要说的就是一些针对异常流量的处理机制。</font>

<font style="color:rgb(0,0,0);">首先是限流。</font>

<font style="color:rgb(0,0,0);">每一个消费者在申请大模型访问的时候，都需要填入响应的限流阈值，这个阈值一种有三种，分别</font><font style="color:rgb(0,0,0);"> Token per Minute (TPM)、Query per Minute (QPM) 和并发请求数。这不仅可以保护我们的网关和后端服务免收突发流量的干扰，也便于网关和服务的运维团队进行容量规划，同时也可以帮助用户管控成本。</font>

<font style="color:rgb(0,0,0);">这些限流机制利用的都是</font><font style="color:rgb(0,0,0);"> Higress 所提供的 Wasm 插件扩展点，内部使用 Redis 作为中央计数器，实现全局性的限流统计功能，并通过 LUA 脚本来实现计数器更新的原子化。</font>

![](https://img.alicdn.com/imgextra/i2/O1CN01Fo4RM01K1DwjZH0Zy_!!6000000001103-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">其次是降级。</font>

<font style="color:rgb(0,0,0);">但如果意外情况下，后端大模型服务出现故障，我们还可以预先配置相应的模型降级规则。当路由原本指向的大模型服务返回</font><font style="color:rgb(0,0,0);"> 4xx、5xx 等异常响应码时，网关并不会直接把响应返回给调用方，而是会再次把请求转发给降级用的大模型服务，并返回降级服务的响应数据。这个降级操作只会进行一次，而且考虑到降级服务支持的模型列表可能与原服务有所差异，我们可以针对降级服务配置独立的模型名称映射规则。</font>

<font style="color:rgb(0,0,0);">在下方的这张图里的黑色的调用次数的对比图中，我们就可以看到，当绿色线所对应的服务出现故障时，请求被自动切换到了黄色线所对应的服务上。之所以有这张图，是因为网关本身也提供了强大的可观测能力。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN010rTRaj1FLldICTYes_!!6000000000471-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">第三是日志和监控。</font>

<font style="color:rgb(0,0,0);">网关的请求日志是落在本地磁盘的，通过</font><font style="color:rgb(0,0,0);"> logrotate 来进行滚转，避免占用过多存储空间。日志的内容是可以自行修改定制的，通过 Wasm 插件配合自定义的日志模版，我们将大模型请求的很多详细信息都记录到了日志里，比如说模型名称、消耗的 Token 数、输入和输出的消息内容等等。这些都有助于我们后续对用户的使用情况进行分析，并且帮助用户优化自己的使用方式。</font>

<font style="color:rgb(0,0,0);">日志的采集就比较直接了，这部分也是复用的公司现有的监控链路，通过</font><font style="color:rgb(0,0,0);"> FileBeat 将日志内容送到 Kafka，通过类似 LogStash 的组件消费 Kafka 获取日志信息，解析重组之后写入 ClickHouse，然后在 Kibana 上提供给大家查看。</font>

<font style="color:rgb(0,0,0);">监控这边就更加直接了。</font><font style="color:rgb(0,0,0);">网关本身就暴露了一个供</font><font style="color:rgb(0,0,0);"> Prometheus 抓取的接口。抓取到的监控信息可以在内部的 Grafana 上进行查看。</font>

![](https://img.alicdn.com/imgextra/i1/O1CN01eCuB3n1fTiW7Usdb9_!!6000000004008-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">网关整体的情况大概就是这样。接下来是一些关键难点分享。当然在</font><font style="color:rgb(0,0,0);"> Higress 的帮助之下，原本的难点也并没有那么难。</font>

## **<font style="color:rgb(0,0,0);">03 落地 AI 网关的难点和应对方案</font>**
<font style="color:rgb(0,0,0);">首先是适配各种大模型供应商的接口契约。目前请求大模型时最通用的就是</font><font style="color:rgb(0,0,0);"> OpenAI 的接口协议，网关本身对外提供的服务也基于的是这套协议。但有一些大模型服务并不完全兼容这个协议，比如说有的是接口路径不一样，有的是认证方式不一样。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01oxhKou1Zx8GCl7W1s_!!6000000003260-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">这样就需要网关在转发数据时，对请求和响应的数据进行修改，对齐对端所支持的接口协议。好在</font><font style="color:rgb(0,0,0);"> Higress 目前已经适配了市面上很多种大模型服务类型，我们基本上不需要做什么改动，就可以对接各种大模型服务，但在推广 MCP 服务接入方面就没有这么简单了。</font>

<font style="color:rgb(0,0,0);">携程内部现在有大量的</font><font style="color:rgb(0,0,0);"> HTTP 服务，覆盖了业务场景的方方面面。如果能够直接利用起来，把它们变成 MCP 服务提供给 AI 使用，对于业务方接入整个 AI 体系是很有帮助的。</font>

<font style="color:rgb(0,0,0);">但众所周知，如果要把一个接口作为工具放到</font><font style="color:rgb(0,0,0);"> MCP Server 上，它是需要一个工具描述信息的，包括接口的名称、参数列表等等。</font>

<font style="color:rgb(0,0,0);">而我们的</font><font style="color:rgb(0,0,0);"> REST API 最多也就是这种使用 Swagger 生成的 OpenAPI 接口契约，所以这里的核心就是要把左面这种接口契约转化为右侧这种工具描述。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01hQZl6J1lmOMUBxauB_!!6000000004861-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">除了请求参数部分之外，我们还需要对后端接口的响应数据进行格式化，作为</font><font style="color:rgb(0,0,0);"> MCP Server 的响应数据，便于大模型的理解。</font>

<font style="color:rgb(0,0,0);">这显然是个重复性很强的工作。既然是重复性很强的工作，那肯定就可以让</font><font style="color:rgb(0,0,0);"> AI 来帮我们完成。</font>

<font style="color:rgb(0,0,0);">我们利用右侧这个提示词，将接口契约一同提供给大模型，大模型就可以生成出基本可用的描述信息。只需要人工校对并做少量的调整就可以使用了。</font>

![](https://img.alicdn.com/imgextra/i2/O1CN01fUXMbq1S91cQoZc4H_!!6000000002203-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">完成了协议转换，我们就来到了下一个问题点。</font>

<font style="color:rgb(0,0,0);">虽然</font><font style="color:rgb(0,0,0);"> SSE 这个传输方式已经被 MCP 官方废弃，但仍旧有很多调用方希望网关能够支持 SSE，而这种传输方式采用了请求与响应分离的设计，这就要求在网关层面提供一个会话管理的功能。</font>

![](https://img.alicdn.com/imgextra/i3/O1CN01M2QHkh209Ci2pTqws_!!6000000006806-2-tps-960-540.png) 

<font style="color:rgb(0,0,0);">大致流程是这样的：</font><font style="color:rgb(0,0,0);">MCP Client 请求服务的 /SSE 接口，启动一个新的会话。然后网关生成一个新的 SessionID，并且在 Redis 里监听一个与这个 SessionID 所关联的 Channel，然后把这个 MCP Server 对应的 Endpoint 信息返回给客户端。这样客户端就可以向这个 Endpoint 发起后续的请求，比如说初始化监听、获取工具列表、调用工具等等。而这请求的响应数据并不会被直接返回给客户端，而是要发布到前面监听的那个 Redis Channel 中。通过这个 Channel 把信息传递给 /SSE 那个请求的上下文，然后推送给客户端。</font>

## **<font style="color:rgb(0,0,0);">04 应用成效和未来规划</font>**
<font style="color:rgb(0,0,0);">关于网关落地的技术细节就介绍到这儿。</font>

<font style="color:rgb(0,0,0);">目前</font><font style="color:rgb(0,0,0);"> AI 网关在携程内部已经接入了多款大模型，具备稳定支撑大规模模型调用的能力，为公司的人工智能技术探索奠定了扎实的基础。现在</font><font style="color:rgb(0,0,0);">我们</font><font style="color:rgb(0,0,0);">也在不断的接入各种</font><font style="color:rgb(0,0,0);"> MCP Server，丰富整个产品的生态体系。</font>

<font style="color:rgb(0,0,0);">各位可以看到，我们整个</font><font style="color:rgb(0,0,0);"> AI 网关很多功能都是开源的 Higress 原生提供的，我们要做的更多是将它适配到携程的研发体系中去，并对接周边的治理平台。通过我们的验证，也发现了一些社区尚不支持的场景。这些我们也通过 Pull Request 的方式提交给了社区，并已经合并进了代码库中。相信随着有越来越多的人使用开源产品，贡献开源代码，我们的社区也会越来越好。</font>

<font style="color:rgb(0,0,0);">正如这句话所说：每一次代码回馈，都是开源生命力的延续。</font>

<font style="color:rgb(0,0,0);">接下来，我们也会继续对网关的能力进行迭代，在模型路由规则、模型输出后处理、调用方优先级识别和内容安全防护等方面进行优化，并将 AI 能力融入到网关内部，而不仅仅停留在作为由网关所承载的业务这一层面，并进一步强化网关的安全性和合规性，让网关在整个 AI 流量链路上发挥更大的作用。</font>


