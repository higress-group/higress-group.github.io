---
title: "万字长文告诉你企业如何基于MCP实现AI应用架构新范式转型"
description: "万字长文告诉你企业如何基于MCP实现AI应用架构新范式转型"
date: "2025-04-09"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：计缘

# <font style="color:black;">AI Agent 现状及架构</font>
<font style="color:black;">人工智能（AI）在商业领域的应用正日益成为推动创新和效率提升的核心力量。其核心在于多个AI Agent的协作，这些AI Agent通过分工与合作，共同承载AI应用所支持的业务需求。这种协作模式不仅优化了企业运营，还展现了AI在解决高影响力挑战中的潜力。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743774162404-f6f3ad9d-9270-4e0d-87a7-4e4e57fa892b.png)

当前的AI Agent，无论是和各种Tools（各类业务服务接口）交互，还是和各类Memory（各类存储服务接口）交互，亦或是和各类LLMs（各类大语言模型）交互，都是通过HTTP协议的，除了LLM因为基本都遵循OpenAI范式以外，和其他的Tools和Memory交互都需要逐一了解它们的返回格式进行解析和适配。当一个AI应用包含多个AI Agent时，或者一个AI应用需要和多个业务服务接口和存储服务接口交互时，整体的开发工作量是很大的，主要体现在3个方面：

+ 找适合该AI应用的业务接口和存储服务接口：
    - 找三方服务接口。
    - 在公司内部找合适的服务的接口。
    - 找不到就自己先开发接口。
+ 解析接口的返回格式：无论是三方服务接口还是公司内部的服务接口，返回格式可能都千奇百怪，需要逐一进行了解和解析。
+ 编排多个AI Agent：
    - 有Dify这类流程可视化的工具辅助编排，减轻了很多编排工作，但复杂度依然不低，且运行效率和性能方面还是有瓶颈的。
    - 通过编码方式做编排（比如使用Spring AI Alibaba或LangChain等），虽然性能上更优，但是复杂度更高，编排效率和灵活性都有不足。

所以目前很多AI应用就只有少数几个AI Agent，甚至很多AI应用背后就只有一个AI Agent。这也是目前AI应用背后的AI Agent依然还处在第一个阶段（Siloed, Single-Purpose Agents）的原因。



![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743780089564-bf595217-1348-44d1-b93d-72f5c6fd3830.png)

为了能使AI Agent进入到第二阶段（Platform-Level Agents），我们使用云原生API网关做了统一的接入层，通过一个网关三种不同角色的方式，解决了一部分复杂度：

+ 作为南北向流量网关，统一管理 AI Agent 的入口流量，核心做转发、负载、鉴权认证、安全、流控等。
+ 作为AI网关，代理各类LLMs，向AI Agent 屏蔽了繁杂的接入，并且解决了很多生产级的问题，比如多模型切换、模型Fallback、多API Key管理、安全、联网搜索等。
    - AI网关代理LLMs的详细文章参见：[https://mp.weixin.qq.com/s/tZ0wsTlZK67r9IxNZ57TDQ](https://mp.weixin.qq.com/s/tZ0wsTlZK67r9IxNZ57TDQ)
+ 作为东西向网关，统一管理来自不同源（ACK、ECS、函数计算 FC、SAE、三方服务）的各类服务，供AI Agent使用。

但如我所说，这只解决了一部分复杂度问题，更核心的**找接口**和**解析接口**这两个问题依然没有解决。直到MCP（Model Context Protocol）的出现，让我们看到了真正通往第二阶段（Platform-Level Agents）的路，甚至可以尝试触摸第三阶段（Universal Agents, Multi-Agents）。

# MCP 是什么
MCP是模型上下文协议（Model Context Protocol）的简称，是一个开源协议，由Anthropic（Claude开发公司）开发，旨在让大型语言模型（LLM）能够以标准化的方式连接到外部数据源和工具。它就像AI应用的通用接口，帮助开发者构建更灵活、更具上下文感知能力的AI应用，而无需为每个AI模型和外部系统组合进行定制集成。MCP被设计为一个通用接口，类似于USB-C端口，允许LLM应用以一致的方式连接到各种数据源和工具，如文件、数据库、API等。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743780999858-b9138dfc-a2d8-443f-8094-5f9008f5087f.png)

MCP目前一共有3个核心概念：

+ MCP Server：
    - 基于各语言的MCP SDK开发的程序或服务。
    - 基于某种**<font style="color:#ed740c;">神秘的机制</font>**将现存的程序或服务进行了转换，使其成为了MCP Server。
+ MCP Tool：
    - MCP Tool所属于MCP Server，一个MCP Server可以有多个MCP Tool。可以理解为一个类里有多个方法，或者类似一个服务里有多个接口。
+ MCP Client：当一段代码，一个Agent，一个客户端，基于MCP的规范去使用、去调用MCP Server里的MCP Tool时，它就是MCP Client。

## MCP 的运作机制
要真正理解MCP是什么，我们需要了解它的运作机制，然后你就能知道MCP的调用方式和传统的HTTP调用方式有什么不同，可能也能隐约体会到为什么我说MCP可以让AI Agent进入第二阶段。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743781092088-382daf7a-e785-4bad-be11-6cd1d1e07159.png)

如上图所示，一次基于MCP的调用，一共有6个核心的步骤。我们先拟定一个前提：

+ 我要开发一个获取时间的AI Agent，用户在使用这个AI Agent时，只需要问类似“现在几点了？”这种问题即可。
+ 我已经有了一个关于处理时间的MCP Server，这个MCP Server里有2个MCP Tool，一个负责获取当前时区，一个负责获取当前时间。

调用步骤解析：

+ 第一步：用户向AI Agent问“现在几点了？”，此时AI Agent就是MCP Client，它会把用户的问题和处理时间的MCP Server以及MCP Tool的信息一起发送给LLM。
+ 第二步：LLM拿到信息后开始推理，基于用户的问题和MCP Server的信息，选出解决用户问题最合适的那个MCP Server和MCP Tool，然后返回给AI Agent（MCP Client）。
    - 这里LLM返回给AI Agent的信息是：“你用time这个MCP Server里的get_current_time这个MCP Tool吧，它可以解决用户的问题”
+ 第三步：AI Agent（MCP Client）现在知道该使用哪个MCP Server里的哪个MCP Tool了，直接调用那个MCP Tool，获取结果。
    - 调用time这个MCP Server里的get_current_time这个MCP Tool。
+ 第四步：Time MCP Server返回结果（当前的时间）给AI Agent（MCP Client）。
+ 第五步：AI Agent（MCP Client）也很懒啊，把用户的问题和从Time MCP Server处拿到的结果再一次给了LLM，目的是让LLM结合问题和答案再规整一下内容。
+ 第六步：LLM把规规整整的内容返回给AI Agent（MCP Client），最后AI Agent（MCP Client）再原封不动的返回给了用户。

在MCP的整个调用过程中有一个非常核心的点就是**MCP Server 以及 MCP Tool 的信息。**从第一步，第二步可以看出，这个信息非常关键，是它让LLM知道了该如何解决用户的问题，这个信息就是MCP中最重要的System Prompt，本质上就是PE工程。

## MCP System Prompt
MCP不像传统的协议定义，它没有一个确定的数据结构。它的核心是通过自然语言描述清楚有哪些MCP Server，承担什么作用，有哪些MCP Tool，承担什么作用，然后让大语言模型通过推理去选择最合适的MCP Server以及MCP Tool。所以它的核心本质上还是提示词工程。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743783211903-8ddaecdf-0cbf-458c-bf79-675bd81de98c.png)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743783247369-0b334549-4332-4243-8113-8dd680f29c84.png)

上面两张图是Cline（一个MCP Client）中的System Prompt，可以清晰的看到它对MCP Server和MCP Tool都有明确的描述。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743783320102-ee94f1b8-3947-40e5-aa94-12906898e912.png)

上图是流程中的第一步，将用户的问题和System Prompt一起发送给LLM的内容。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743783407484-664a91a7-5aa6-4be8-97fb-452bbab14c6b.png)

上图是流程中的第二步，LLM返回了解决用户问题明确的MCP Server和MCP Tool信息。

## MCP 和 Function Calling 之间的区别
看到这，我想大家应该对MCP是什么有一定感觉了。MCP是不是解决了**找接口**和**解析接口**的问题？因为这两个工作都交给了LLM。

+ LLM负责帮AI Agent找到最合适的接口。
+ AI Agent调用接口，压根不用做返回结果的解析，原封不动再交给LLM。
+ LLM结合用户问题和接口返回的结果，做内容规整处理。

那么可能有小伙伴会问，MCP和LLM的Function Calling又有什么区别呢？核心区别是是否绑定模型或模型厂商：

+ MCP 是通用协议层的标准，类似于 “AI 领域的 USB-C 接口”，定义了 LLM 与外部工具 / 数据源的通信格式，但**不绑定任何特定模型或厂商**，将复杂的函数调用抽象为客户端-服务器架构。
+ Function Calling **是大模型厂商提供的专有能力**，由大模型厂商定义，不同大模型厂商之间在接口定义和开发文档上存在差异；允许模型直接生成调用函数，触发外部 API，依赖模型自身的上下文理解和结构化输出能力。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743783739010-160f14ec-bb99-4d10-bb1b-f90a7ad68d48.png)

如上图所示，LLM Function Calling 需要LLM为每个外部函数编写一个 JSON Schema 格式的功能说明，精心设计一个提示词模版，才能提高 Function Calling 响应的准确率，如果一个需求涉及到几十个外部系统，那设计成本是巨大，产品化成本极高。而 MCP 统一了客户端和服务器的运行规范，并且要求 MCP 客户端和服务器之间，也统一按照某个既定的提示词模板进行通信，这样就能通过 MCP 加强全球开发者的协作，复用全球的开发成果。

## MCP 的本质和挑战
根据上文的一些列解释，我们可以总结一下MCP的本质：**模型上下文协议（Model Context Protocol）并不是一个确定的数据格式或数据结构，它是****<font style="color:#ed740c;">描述MCP Server/MCP Tool信息的系统提示词</font>**和**<font style="color:#ed740c;">MCP Server与LLM之间的协同关系</font>**的结合****，****解决的是**<font style="color:#ed740c;">找接口</font>**和**<font style="color:#ed740c;">解析接口</font>****的问题**。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743821620382-343b81b1-8258-44ae-9528-4dfdf5808460.png)

明确了MCP本质之后，将其带入到企业级生产应用中，你就会发现，这两个核心点上会有很多挑战，或者说不足。

### 描述MCP信息的系统提示词的挑战
+ 系统提示词的安全性如何保证？
    - 这个最核心的系统提示词如果被污染了，LLM就不能准确知道你有哪些MCP Server，有哪些MCP Tool，甚至可能告诉LLM错误的，有安全漏洞的MCP Server和MCP Tool，那么对你的AI应用来说将是巨大的风险，会导致整个MCP流程的瘫痪。
+ 系统提示词如何管理？
    - MCP Server或者MCP Tool有了新版本，系统提示词应该也许要有对应的版本管理策略。
+ 系统提示词写的不好，如何方便的快速调试？能不能实时生效？
    - 系统提示词是没有标准定义的，理论上每个企业可以定义自己的系统提示词模板，类似PE工程。提示词不可能一次性就能写好，需要反复调试，需要有机制做快速的调整，并且可以做到使其实时生效。
+ 如果MCP Server很多，那么系统提示词会非常长，岂不是很消耗Token？如何缩小或精确MCP Server和MCP Tool的范围？
    - 如果你有几十个或更多MCP Server，那么就有可能有上百个或更多MCP Tool，所有的信息描述下来放在系统提示词后，这个提示词模板会非常大，显而易见的对Token消耗非常大，变相的就是成本高。应该需要一套机制，基于用户的问题，预圈选MCP Server和MCP Tool的范围，减少Token，提高效率，很类似联网搜索里的意图识别。

### MCP Client与MCP Server之间协同关系的挑战
+ 负责做协同的是MCP Client，但目前MCP Client很少，比如Cline， Claude，Cursor等，而且都是C/S工具，支持的都是SSE协议，企业级的AI应用该如何结合？能不能结合？
    - 基本上目前市面中的MCP Client都无法和企业级的AI应用做结合，SSE这种有状态的协议有很多弊端，比如不支持可恢复性，服务器需要维持长期连接，仅支持服务器 → 客户端消息，无法灵活进行双向通信等。
+ 现存的传统业务能快速转成MCP Server吗？能0代码改动的转换吗？
    - 开发一个MCP Server是强依赖各语言的MCP SDK的，目前只支持Python、Java、TS、Kotlin、C#。那如果是Go或者PHP技术栈的企业怎么办？并且那么多现存的业务全部用MCP SDK重构一遍，工作量巨大，也很不现实。
+ MCP Server 会很多，如何统一管理？
    - 有自己开发的MCP Server，有三方的MCP Server，还有大量通过某种神秘机制将传统业务转换而来的MCP Server。这些都应该有一个类似MCP Hub或MCP 市场的东西统一管理起来，方便MCP Client去使用。
+ 企业级AI应用中，身份认证、数据权限、安全这些如何做？
    - 在企业级的应用中，无论哪种协议，哪种架构，哪种业务。身份认证、数据权限、安全防护这些问题都是永远绕不开的。那么在MCP这种协同方式下如何实现。

# AI 应用架构新范式
我们结合MCP范式，以解决上述挑战点为目的，将AI Agent的架构进行了重构。在**<font style="color:#ed740c;">云原生API网关</font>**，**<font style="color:#ed740c;">微服务引擎Nacos</font>**两个产品中做了MCP增强能力，解决了上述大部分的挑战点。在**<font style="color:#ed740c;">函数计算 FC</font>**，**<font style="color:#ed740c;">Serverless应用引擎 SAE </font>**两个产品中做了MCP增强能力，前者解决快速开发MCP Server的问题，后者解决开源Dify性能的问题。共同构建了基于MCP的**<font style="color:#ed740c;">AI应用开发新范式</font>**。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743948489019-56c6f116-378c-4ede-96b6-3987b401b5c7.png)

## AI 应用架构新范式刨析
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743824609020-63c5c61a-e218-4b2e-bbd4-7856eba519ea.png)

首先我对图中的8步核心调用链路做以解析：

+ 第一步：用户向AI应用发起请求，请求流量进入流量网关（云原生API网关）。
+ 第二步：云原生API网关侧维护管理了不同类型的AI Agent的API或路由规则，将用户请求转发至对应的AI Agent。
+ 第三步：AI Agent无论以哪种方式实现，只要其中的节点需要获取数据，便向MCP网关（云原生API网关）请求获取可用的MCP Server及MCP Tool的信息。
+ 第四步：因为MCP网关处可能维护了很多MCP信息，可以借助LLM缩小MCP范围，减少Token消耗，所以向AI网关（云原生API网关）发请求和LLM交互。（这一步可选）
+ 第五步：MCP网关将确定好范围的MCP Server及MCP Tool的信息List返回给AI Agent。
+ 第六步：AI Agent将用户的请求信息及从MCP网关拿到的所有MCP信息通过AI网关发送给LLM。
+ 第七步：经过LLM推理后，返回解决问题的一个或多个MCP Server和MCP Tool信息。
+ 第八步：AI Agent拿到确定的MCP Server和MCP Tool信息后通过MCP网关对该MCP Tool做请求。

实际生产中 ③ - ⑧ 步会多次循环交互![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743825003785-2e5fa81b-2aac-49d6-bc38-9415748016f5.png)。

我们依然基于MCP的两个本质来刨析这个新的架构。

### 如何解决MCP提示词的各个挑战
我们团队是中间件开源最多的团队，比如Nacos，Higress，Sentinel，RocketMQ，Seata等，并且还维护着Spring Cloud Alibaba，Spring AI Alibaba，Dubbo这些开源开发框架，在微服务架构领域有着丰富的经验。所以在MCP Server和MCP提示词统一管理这个点上，天然的就想到了微服务领域里基于Nacos做服务注册发现和配置统一管理的模式，我们将其转嫁到了MCP范式，大家可以想一下以下这些对应关系：

+ SpringCloud服务/Dubbo服务/Go服务 -> 各类MCP Server
+ SpringCloud服务/Dubbo服务/Go服务暴露的接口 -> 各类MCP Server提供的MCP Tool
+ SpringCloud服务/Dubbo服务/Go服务暴露的接口描述 -> 各类MCP Server提供的MCP Tool的描述
+ SpringCloud服务/Dubbo服务/Go服务的配置文件 -> 各类MCP Server的系统提示词

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743905501486-6b2c6e5a-d84b-4c0a-a1c9-b5bd9d158256.png)

所以在MSE Nacos这个产品中，我们做了一系列增强MCP的能力，使MSE Nacos成为统一管理MCP Server的MCP Register（MCP Server注册/配置中心）。是AI应用开发新范式的核心组件。

另外，MCP官方的Roadmap中，也在规划MCP Register的能力，我们会基于Nacos作为MCP Register的方案和MCP在开源侧进行共建。

#### MCP Register（MCP Server注册/配置中心）
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743868329853-ae5ceebc-a2c6-4844-81fa-901310238786.png)

##### MCP Server 统一管理
MCP Server注册到MSE Nacos有两种方式：

+ 在MSE Nacos控制台手动创建。也就是将MCP Server的Endpoint配置到MSE Nacos中。
+ 通过Nacos SDK，自动将MCP Server注册进Nacos。和当前Java SpringCloud，Java Dubbo服务逻辑一样。

在MSE Nacos中对MCP Server进行统一管理，可以实现对**MCP Server的健康检查，负载均衡，描述信息Json向XML转换，MCP Server上下线管控等功能**。

##### MCP Prompt 统一管理
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743905188090-3acbfea1-367c-4bdb-a471-f500708e6411.png)

在MSE Nacos中维护MCP Server的Prompt有两种方式：

+ 手动创建MCP Server的配置信息，配置文件的Data ID的命名格式为`[MCP Server name]-mcp-tools.json`。
    - 在配置文件中管理MCP Tool的提示词信息，比如整体作用描述，入参描述等。
+ 结合MSE治理的能力，如果是Java或者Go，可以自动感知服务的Schema，自动生成MCP Server和MCP Tool的提示词信息。

在MSE Nacos中对MCP Server提示词进行统一管理，可以实现**MCP提示词版本管理（回滚），MCP提示词灰度管理，MCP提示词安全管理，MCP提示词动态调优实时生效等功能**。

##### MCP 效果验证体系（进行中）
上文中提到当MCP Server很多时，MCP Server的各描述信息会很多，也就是Prompt会很长，Token消耗很大，所以需要有机制基于用户的输入缩小MCP Server范围，减少Token消耗，增加LLM推理效率。除此以外，大家知道，只要是和LLM交互的场景，提示词的好坏是需要多次调试的，MCP的整个流程强依赖提示词工程，如果提示词调整不好，LLM无法返回准确的MCP Server和MCP Tool，那么整个流程就是不可用的状态了。所以在Nacos中我们正在做一个MCP效果验证的体系。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743907094242-680f0cf7-86c8-4bef-bd92-6e3a6074d1c1.png)

<font style="color:rgb(0, 0, 0);">核心的原理是我们会提供一个基于Spring AI Alibaba开发的AI Agent，通过用户配置的业务输入、LLM、圈定的MCP Server和MCP Tool的集合不断的做验证，将结果以视图的方式展现出来（比如成功率等）。用户可以在Nacos中动态的对成功率低的MCP Server的提示词做调整优化。</font>

##### <font style="color:rgb(0, 0, 0);">MCP 安全性保障（持续完善中）</font>
<font style="color:rgb(0, 0, 0);">无论哪种架构，哪种模式，安全性在企业生产中必然都是第一位的，MCP 领域也不例外，并且需要考虑的环节更多。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743909398339-15a3f51c-16e0-4623-a0d5-bba3100f892c.png)

+ <font style="color:rgb(0, 0, 0);">MCP Server敏感信息安全管理：注册进MSE Nacos的各类MCP Server都会有类似API Key、AK/SK、密钥、登录密码等敏感信息。MSE Nacos和阿里云KMS深度集成，可以对这些敏感信息做加密处理。</font>
+ <font style="color:rgb(0, 0, 0);">MCP Prompt安全管理：同样依托于MSE Nacos和KMS的深度集成，可以将MCP Server，MCP Tool完整的Prompt（描述信息）做加密处理，避免Prompt污染。</font>
+ <font style="color:rgb(0, 0, 0);">MCP Prompt安全校验：结合上述的验证体系以及与内容安全做集成，实现MSE Nacos对MCP Server的Prompt的合法性校验。</font>

### <font style="color:rgb(0, 0, 0);">如何解决MCP Client与MCP Server之间协同关系的挑战</font>
在MCP范式中，其实是三个角色在互相协同：

+ MCP Client -> LLM
+ MCP Client -> MCP Server

这两类协同关系本质上还是服务提供方和服务消费方之间的关系，涉及到**代理协作**和**流量管控**两个核心点。在传统开发范式下，通常是由网关来负责的。所以我们在云原生API网关中增强了LLM代理和MCP Server代理的能力，使其同时具备流量网关，AI网关（LLM代理）和MCP网关的能力。是AI应用开发新范式的核心组件。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743921276355-31fbb573-df02-4c84-aa61-bedcd6fba765.png)

所以在企业的整体系统架构中，只需要一个云原生API网关，即可作为流量网关、API网关、微服务网关、AI网关、MCP网关，在代理和流量管控层面实现传统业务和AI业务的大统一，并且再结合AI应用开发的新范式，平滑的将AI业务和传统业务相结合。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743921206412-58c2c556-3511-4808-97aa-82dfbffb8bb3.png)

#### 云原生API网关 Dog Food
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743960050106-d97d48b1-1df6-4ed5-8ad6-5ccf0fb2d4b5.png)

秉承着自己吃自己狗粮的原则，云原生API网关在阿里集团内部已经有很多业务在深度使用，在企业级产品能力，稳定性，性能方面已经有多个大体量业务的背书。

#### AI 网关
MCP Client与LLM之间的交互和传统业务与LLM之间的交互本质是一样的，只要应用上生产，都会有一些列的问题需要去解决：

+ 成本平衡问题：比如部署DeepSeek R1 671B满血版模型，至少需要2台8卡H20机器，列表价年度超过100W，但2台的TPS有限，无法满足生产部署中多个用户的并发请求。即使Meta新发布的Llama4，也至少需要一张H100去运行。所以需要有方案找到TPS和成本之间的平衡点。
+ 模型幻觉问题：即使是DeepSeek R1 671B满血版模型，如果没有联网搜索，依然有很严重的幻觉问题。
+ 多模型切换问题：单一模型服务有较大的风险和局限性，比如稳定性风险，比如无法根据业务（消费者）选择最优模型。目前也没有开源组件和框架解决这类问题。
+ 安全合规问题：企业客户需要对问答过程做审计，确保合规，减少使用风险。
+ 模型服务高可用问题：自建平台性能达到瓶颈时需要有一个大模型兜底方案，提升客户大模型使用体验。
+ 闭源模型QPS/Token限制问题：商业大模型都有基于API Key维度的QPS/Token配额限制，需要一个好的方式能够做到快速扩展配额限制。

以上问题都是实实在在的客户在使用过程中遇到的问题，有些是模型自身问题，有些是部署架构问题，如果要客户一个一个去解决，复杂度和时间成本都是比较高的。所以就需要AI网关的介入来快速的，统一的收敛掉这些核心问题。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743921690934-cc91085b-149d-47e0-aa58-716063eac6a2.png)

云原生API网关的AI网关增强能力主要有四部分：

+ 多模型适配：可以代理市面上所有主流的模型托管服务，以及兼容OpenAI协议的AI服务。在这个模块中包括协议转换、多API Key管理、Fallback、多模型切换等多个核心功能。
+ AI安全防护：安全防护分为三个层面，一个是输入输出的内容安全防护，另一个是保护下游LLM服务的稳定，以及管控AI接口消费者。在这个模块中包括内容审核、基于Token的限流降级、消费者认证等多个核心功能。
+ AI插件：AI网关的灵活扩展机制我们使用插件的形式来实现，目前有很多预置的插件，用户也可以开发自定义插件来丰富AI场景流量的管控。比如基于AI插件机制我们实现了结果缓存、提示词装饰器、向量检索等能力。
+ AI可观测：AI场景的可观测和传统场景的可观测是有很大区别的，监控和关注的指标都是不同的，云原生AI网关结合阿里云日志服务和可观测产品实现了贴合AI应用业务语义的可观测模块和AI观测大盘，支持比如Tokens消费观测，流式/非流式的RT，首包RT，缓存命中等可观指标。同时所有的输入输出Tokens也都记录在日志服务SLS中，可供用户做更详细的分析。

AI网关代理LLM更详细的方案可以参见我之前的文章：[https://mp.weixin.qq.com/s/tZ0wsTlZK67r9IxNZ57TDQ](https://mp.weixin.qq.com/s/tZ0wsTlZK67r9IxNZ57TDQ)

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743922252883-e2dc6a58-ed2e-49d0-951e-5649da1b2db5.png)

#### MCP 网关
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743922502947-f151c995-333b-437a-ad33-d116ea7a211e.png)

MCP Client和MCP Server之间的交互和传统的服务提供者和服务消费者之间的交互就有所区别了，所以我们在云原生API网关中增加了MCP相关的能力，但从产品版本划分层面，MCP相关的能力依然包含在AI网关的能力范畴内。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743927016326-dfbd49ff-664f-457f-a29c-c7647b928fab.png)

##### MCP Server 动态发现
上文中介绍了MSE Nacos作为MCP Server注册/配置中心，那么MCP Client如何来发现呢？如果是MCP Client直接和MSE Nacos交互，那么又会在MCP Client中引入Nacos SDK，增加了编码的复杂度。

鉴于云原生API网关和MSE Nacos在传统服务领域早已做了深度集成，打通了云原生API网关自动发现注册在MSE Nacos中的服务，所以在MCP范式下，我们同样实现了云原生API网关自动发现注册在MSE Nacos中的MCP Server的能力。

通过这种方式，MCP Client只需要使用云原生API网关的接入点，即可自动的、动态的获取到所有注册在MSE Nacos中的MCP Server。云原生API网关（MCP网关）就变成了一个MCP Hub，无论如何更新、变更MCP Server，都只需要在MSE Nacos操作即可，MCP Client无需做任何修改。

##### 将传统服务0代码改造转换为MCP Server
在AI的时代下，我认为最有价值的是使用AI增强、提升客户的现存业务，使其变成一个AI应用或AI加持的业务，而不是完全新开发一套AI应用。

所以开发一个AI应用或者做现存业务的AI增强，AI Agent是需要和大量现存业务做交互的，MCP虽然统一的协议，但将现存业务重构为MCP Server的成本是非常高的，并且目前支持的开发语言有限，像Go，PHP都没有对应的MCP SDK，所以会让很多企业想拥抱MCP，但又无从下手。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743956353638-eadfbef9-9a8a-4b8b-b8db-d3fdfc027b25.png)

网关最擅长做的事情就是协议转换，Nacos在传统微服务场景下已经注册了很多现存的传统服务，那么两者一拍即合，通过网关将注册在Nacos中的传统服务0代码改造的转换为MCP Server。

+ 注册在MSE Nacos中的现存业务服务（SpringCloud服务、Dubbo服务、Go服务）不需要做任何改变。
+ 在MSE Nacos中新增`[Server Name]-mcp-tools.json`命名规范的配置文件，在配置文件中使用MCP规范对现存业务的接口进行描述。
+ 通过云原生API网关（MCP网关），MCP Client侧自动发现由传统服务转换来的MCP Server。

##### 将SSE转换为Streamable HTTP
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743956757868-f2ea23d4-88a8-413d-9556-c87c48f9dd1c.png)

MCP范式默认的传输协议是SSE（Server Sent Event），本质上是一种长连接，有状态的传输协议。这种协议在企业级应用中有很多弊端：

+ 不支持可恢复性（Resumability）：连接断开后，客户端必须重新开始整个会话。
+ 服务器需要维持长期连接（High Availability Requirement）：服务器必须保持高可用性，以支持持续的 SSE 连接。
+ SSE 仅支持服务器 → 客户端消息，无法灵活进行双向通信。
+ 目前只有少数几个C/S架构的客户端和MCP提供的用于测试验证的Web客户端支持MCP范式和SSE协议。无法用在企业级的生产应用中。

好在MCP官方也意识到了该问题，所以在3月下旬，发布了新的Streamable HTTP协议。Streamable HTTP改变了MCP的数据传输方式，让协议变得更灵活、更易用、更兼容：

+ 更灵活：支持流式传输，但不强制。
+ 更易用：支持无状态服务器。
+ 更兼容：适用于标准 HTTP 基础设施。

简单来说，原来的MCP传输方式就像是你和客服通话时必须一直保持在线（SSE 需要长连接），而新的方式更像是你随时可以发消息，然后等回复（普通 HTTP 请求，但可以流式传输）。

这里大家可以思考一下：

+ Streamable HTTP打破了目前几个C端MCP Client的壁垒。也就意味着任何请求方（甚至就是一段简单的HTTP Request代码），都可以像请求标准HTTP API的方式一样和MCP Server交互。
+ 换句话说，当可以使用标准HTTP API的方式和MCP Server交互后，是不是就不存在所谓的MCP Client了？

虽然Streamable HTTP还在草案阶段，但云原生API网关作为MCP网关已经支持了将SSE传输协议自动转换为Streamable HTTP传输协议。或者说，通过云原生API网关（MCP网关）代理的MCP Server同时支持SSE和Streamable HTTP两种传输协议供Client使用。

##### MCP模式下的身份认证和权限管控
身份认证和权限管控在任何架构，任何业务场景下都是刚需，在MCP范式下也不例外，这里有两个层面的权限管控：

+ Client有权使用哪些MCP Server。有权使用某MCP Server里的哪些MCP Tool。
+ Client通过MCP Tool有权获取到哪些数据。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743957500527-35074e03-ebdc-4a1c-a636-a3d8c909e114.png)

###### MCP Server和MCP Tool的使用权限
大家设想一下，当传统业务可以0代码转换为MCP Server后，注册在Nacos中的MCP Server和MCP Tool肯定会有很多，从业务领域来说，可能有和财务相关的MCP Server，有和销售相关的MCP Server，有和售后服务相关的MCP Server。在返回MCP Server和MCP Tool信息时不可能将所有信息都返回，肯定只能返回Client身份有权使用的MCP Server信息。

云原生API网关作为MCP网关，通过成熟的插件机制提供了HTTP Basic Auth，OAuth2.0，JWT，API Key，外部认证等多种认证方式，以及基于消费者认证功能，可以让用户灵活的管理和控制Client的身份认证和MCP Server/MCP Tool使用权限。

###### MCP Server和MCP Tool的数据权限
当MCP Server是数据类服务时会比较常见，比如Mysql MCP Server，Redis MCP Server等。权限会下探到库级别，表级别。在这种场景下，云原生API网关作为MCP网关，可以通过插件机制，改写或增加Request Header的值，结合MSE治理将Header的值透传下去，然后在服务内部进一步做数据权限管控。

我举例一个通过这种方式实现的数据库读写分离的场景：

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743958467619-34743aa3-67fa-45dd-8a7d-3aa650dba1de.png)

### 如何快速构建MCP Server
众所周知，AI应用里涉及到LLM推理的场景，大都用在调用相对稀疏的场景，MCP范式强依赖LLM推理，所以无论是基于HTTP API模式的AI应用开发架构还是基于MCP的AI应用开发架构，目前也都是应用在相对稀疏调用的场景。所以这里可以延伸出两个问题：

+ 在稀疏调用的场景下，运行MCP Server的计算资源如何优化资源利用率，说的再直白一些就是如何能做到成本最优。
+ 在新的业务中，如何快速构建MCP Server。

在所有的计算产品中，函数计算（FC）这种Serverless FaaS类型的计算产品，在资源粒度、弹性策略、弹性效率方面都是最适合稀疏调用场景的。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743934408456-91cd0f18-9cef-47df-80cc-d420ab92ab2a.png)

函数计算（FC）目前支持了Python和NodeJS两种语言的MCP运行环境（其他语言的MCP运行环境也马上会支持）。用户选择MCP运行环境创建函数后，只需要编写MCP Tool的业务逻辑即可，不需要考虑如何使用MCP SDK。并且云原生API网关和函数计算（FC）有深度集成，可以天然适配AI应用开发的新范式。

#### MCP Server的弹性效率
基于函数计算（FC）构建的MCP Server在弹性效率方面可以从两个维度来看：

+ 资源规格细粒度管控。
+ 完全按请求弹性。

函数计算（FC）的实例规格从 0.05C 128MB 到 16C 32GB 不等，有几十种规格的组合方式，可以灵活的根据不同MCP Server承载的业务选择合适的资源规格。另外，在AI应用中，尤其是流程式构建的模式中，大多数AI Agent的职责都是单一的，计算逻辑不复杂的任务，所以都可以用较小资源规格的函数承载。资源规格小，在资源调度，弹性效率方面自然就会有优势。

再看函数计算（FC）的弹性机制，它是完全按照请求弹性的，有多少QPS，就拉起对应数量的实例，并且实例可以复用，当QPS降下来后，空闲的实例会自动释放，整个过程完全不需要用户介入参与。在默认按请求弹性的的基础上，用户还可以自行设置按照时间定时弹，或按照指标阈值弹的策略，进一步满足复杂多变的业务场景，做到资源成本最优。

#### MCP Server的可观测
函数计算（FC）有完善的可观测体系，也就意味着，基于函数计算（FC）构建的MCP Server同样具备指标、链路、日志三个维度的可观测能力。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743935627288-892faa7e-449c-42a3-a011-7a07b4989f0a.png)

通过这套可观测体系，用户可以清晰的了解每个MCP Server的各类运行状态。

### 如何解决开源自建Dify的痛点问题
目前，Dify基本已是可视化流程编排AI Agent使用最广泛的工具，但是目前还没有任何一家云厂商有Dify托管产品，所以很多基于开源自建Dify平台的客户会遇到很多共性的问题，尤其是从个人开发者、开发Demo转向企业级生产应用构建时，这些问题往往都是致命的。

企业基于开源自建Dify遇到的问题：

+ 流量防护弱：基于开源自建没有任何防护措施，很容易被穿透。
+ 管控与数据链路耦合：AI应用设计与Agent的执行耦合在一起，在高并发场景下无法保证稳定性。
+ 负载均衡问题：在大流量情况下，Dify的核心服务可能会因为流量负载不均导致稳定性下降。
+ 可观测缺失：开源Dify本身不带可观测能力，需要额外搭建可观测体系。

为了解决这些问题，阿里云上的Serverless PaaS类型的计算产品 Serverless应用引擎（SAE）做了企业生产级别的Dify托管部署方案，旨在解决上述问题，让企业在使用Dify的时候不用再关心稳定性、健壮性、性能这些问题。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743948072968-46cc0733-f738-487c-aafd-203e495896db.png)

#### 快速部署Dify
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743943061670-0e0327cf-b85b-4646-b1c9-4926808b06ee.png)

SAE提供了Dify应用模板，可以一键拉起Dify应用，并且提供可视化构建的能力，可以对Dify里的每一个环节进行单独调整。

#### 保障Dify稳定高可用
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743944003252-4481d85d-4d9f-4c45-b138-a26574fd6e99.png)

SAE部署Dify支持配置化，三AZ部署，实例粒度的自动化迁移，结合云原生API网关和SAE内置的服务治理能力，保障负载均衡稳定性，同时还支持Dify 6个核心服务的健康检查，以及无损上下线。

同样依托于底层Serverless架构，部署在SAE中的应用同样具备优秀的横向扩展效率，并且支持多种方式的弹性规则配置，使整套Dify服务可以根据不同的业务场景进行弹缩，在保证高可用的同时，又兼具成本优势。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743944516164-91acd658-7e67-41b6-93ce-13b813115267.png)

除此以外，SAE还支持小流量预热，CPU Burst等能力，进一步保证Dify应用在极端情况下的稳定性。

#### Dify任务调度方案
定时执行工作流做AI数据处理是通用的业务场景，Dify官网已经把通过定时任务做Dify工作流的定时执行和状态监控作了最佳实践，可以参考[https://docs.dify.ai/zh-hans/learn-more/use-cases/dify-schedule](https://docs.dify.ai/zh-hans/learn-more/use-cases/dify-schedule)。但是该实践中的Dify Schedule比较简陋，通过Github Actions做定时调度，只能调度公网的dify工作流，且不是一个企业级解决方案。

开源Dify在调度方面的痛点主要有3点：

+ 执行记录过多会导致慢查询。
    - 执行历史记录存储在数据库中，数量太多会影响Dify性能，导致慢查询。
+ 执行记录查询不支持条件过滤。
    - 比如通过时间区间查询，通过任务状态查询，这些都是通用的需求，但开源Dify都不支持。
+ 没有报警监控。
    - 任务调度系统需要监控工作流的执行状态，工作流运行失败，需要报警给对应的负责人，开源无报警监控能力。

我们的方案是通过MSE任务调度（SchedulerX）来解决上述问题。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743986093850-62f42dcc-9a97-4f42-99ce-e71d00bb301a.png)

+ 用户在MSE任务调度中配置Dify的Endpoint，MSE任务调度通过Dify API拉取工作流应用。
+ 用户通过MSE任务调度配置定时调度和报警监控。
+ Dify工作流定时调度的时候，MSE任务调度通过Dify提供的API调度用户的Dify应用，并且实时拉取执行结果和详情，存储在MSE的AI任务调度中。
+ 通过AI任务调度做报警监控、可观测增强。

MSE任务调度集成Dify方案对比开源方案有以下7点优势：

| 功能 | MSE任务调度 + Dify | 开源Dify |
| --- | --- | --- |
| 定时调度 | 有 | 无 |
| 监控告警 | 有 | 无 |
| 执行记录保留时长 | 保留最近2个月 | 无限制，但数据量太大会导致查询性能太差 |
| 执行记录查询 | 支持时间区间、状态等多种查询条件 | 过滤条件有限 |
| 权限管理 | 操作级别精细化权限管理 | 用户级别 |
| 限流 | 应用限流、Token限流 | 无 |
| 失败自动重试 | 有 | 无 |


### AI 应用可观测体系
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743949981576-6531abbc-9444-4f7a-9871-b8066f3fd3b4.png)

结合阿里云可观测产品ARMS，链路追踪OpenTelemetry，我们构建了AI应用全环节的可观测体系。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743949855276-89c14e05-8afc-437c-98ea-44116bc5567e.png)

AI应用整体的可观测体系构建主要有两部分核心：

+ 数据采集。
+ 数据串联与分析。

#### 观测数据采集
数据采集的核心是要覆盖足够的广，这里又分两个层面：

+ 编程语言，开发框架要支持的足够广，足够全。
+ AI应用架构新范式里涉及到的云产品也需要以相同的标准上报数据。

在这两个层面，我们通过阿里云应用监控产品ARMS和链路追踪OpenTelemetry实现了全覆盖：

+ 遵循最新 OpenTelemetry 社区 GenAI 语义约定。
+ 支持常见的AI框架和AI模型，包括 Spring AI Alibaba / LLamaIndex / Langchain / 通义千问2 / OpenAI / PromptFlow等。
+ 支持AI应用开发的主流编程语言，Python，Java，Go。并且相比社区规范提供更加精细化的埋点和属性。
+ 支持在不同的调用链中传播会话信息。
+ 云原生API网关支持OpenTelemetry协议，网关自身和插件都会基于OpenTelemetry上报观测数据。
+ 函数计算FC 和 Serverless应用引擎SAE 均与 应用监控ARMS 以及 链路追踪OpenTelemetry版 产品均做了深度集成。

#### 数据串联与分析
应用监控ARMS中，专门构建了LLM应用监控模块，针对AI应用场景提供了完善的可观测体系。

纵向的指标有：

+ 在线AI应用数。
+ Trace数。
+ Span数。
+ 大模型数。
+ Token使用情况。
+ 会话数。
+ 用户数。
+ 模型调用次数。
+ Token消耗情况。
+ 模型调用耗时。
+ Token消耗排行。
+ 等等...

横向链路方面提供了专业的调用链分析功能：

+ Span列表。
+ Trace列表。
+ 散点图。
+ 全链路聚合。
+ 全链路拓扑。
+ 错/慢Trace分析。
+ 调用链上的每个环节都会输入、输出、Token消耗的展示。

### 更多在途的功能规划
#### Dify DSL 转 Spring AI Alibaba 编码
虽然Dify在做AI Agent开发时已足够便利，但是受限于Dify的开发语言（Python）和流程引擎的实现逻辑。在运行复杂AI应用时，性能方面是有缺陷的。所以我们在探索将Dify流程的DSL自动转换为基于Spring AI Alibaba开发框架的代码。

相当于只使用Dify低代码可视化构建AI应用的皮，运行的内核基于Spring AI Alibaba开发框架的代码，这样既具备了便捷的AI Agent编排能力，又具备了更好的运行性能。

#### 基于 LLM 编排 MCP Server
目前的MCP模式，LLM针对用户的输入，只返回一个确定的MCP Server和MCP Tool，这是其实是由系统提示词控制的。理论上LLM可以针对用户的输入返回多个MCP Server和多个MCP Tool，并且基于MCP Server和MCP Tool的描述告诉Client它们之间的调用顺序，相当于由LLM做好了MCP Server的编排。这个模式我们还在探索中，很类似现在的Multi-Agent的模式。

#### 提高MCP模式的性能
因为MCP模式中，会频繁和LLM交互，显而易见，相比传统API调用，MCP这种模式的性能是不好的，所以在一些时延敏感的业务场景中，目前大概率还不适合MCP模式。

目前我们也在探讨和探索如何提高MCP模式下的请求性能问题，比如：

+ 固化MCP Server/MCP Tool组合，减少和LLM的交互。尤其当实现LLM编排MCP Server后，和LLM的交互可能就只存在于开发态或调试态，云形态时使用的都是固化好的MCP Server和MCP Tool的调用关系。
+ 函数计算探索边缘场景，将MCP Server运行在离用户更近的地方。

# AI 应用架构新范式对企业的影响
至此，企业级AI应用架构新范式的介绍就结束了，整个架构里有很多环节，每个环节里又有许多细节，在文章中无法一一展开说明。有兴趣的同学可以联系我共同探讨。

我们可以设想一下在这个AI应用架构新范式下，企业的运营、产品、研发、运维团队之间的组织结构和协作关系可能会发生哪些变化？应用或系统的开发模式会发生哪些变化？

这里我来分享一下我的畅想。

## MCP Server First
API First，前后端分离这两个概念已经存在很久了，海外企业遵循和实践的会比较好。因为我深耕在Serverless计算领域也有5年时间，对AWS的Lambda架构方案，Azure Functions架构方案，Azure App Service架构方案，GCP CloudFunction架构方案，GCP CloudRun架构方案有比较多的研究。接触了很多Serverless FaaS和Serverless PaaS架构的客户案例，包括负责落地了不少从双A迁移到阿里云的客户。基本上都是标准的基于APIG+FaaS模式的API First形态。但是在国内，这个模式实践的并不好，除了高德下决定使用函数计算重构了系统，实现了真正的API First，前后端分离模式以外，鲜有客户有这种模式的实践，也许是有太重的历史包袱。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743952389134-ff1239d6-8911-4764-805e-741d0930e8c0.png)

> 上图是高德前后的架构对比。
>

在AI应用的时代，本质上依然是对各种API的调用，但是将HTTP API改成REST API，改造成本是巨大的。但当MCP出现后，当我们的方案可以帮助客户0代码的转型AI应用架构新范式的时候，MCP Server First是有可能。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/293076/1743953856101-4d4b7dad-1370-43ad-9971-c6722de93650.png)

+ 运维团队：负责云产品的维护（比如云原生API网关，MSE Nacos，Serverless应用引擎，PAI这些产品的开通、升配），可观测体系的维护（也是基于云产品），和云厂商保持持续沟通。
+ 研发团队：理解公司业务的原子化能力，负责构建MCP Server池。
+ 运营/市场/产品：通过低代码可视化方式构建业务流程（业务编排），大白话描述业务需求，快速完成业务流程的搭建，或者说AI应用的构建。

所以未来很有可能每个企业都有自己的MCP Server市场，在MCP Server市场里分门别类，每类MCP Server有专门的研发团队负责，不用太需要考虑统一返回格式，不用考虑开发语言统一。运营、市场、产品等业务方有业务需求或者有新的产品功能需求时，可以通过统一界面用大白话快速构建AI应用，MCP+LLM来实现业务编排，实现PRD既产品（PRD as a Product）的新的开发模式。


