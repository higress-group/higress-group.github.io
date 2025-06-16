---
title: "企业生产环境中，实现 MCP 服务的统一管理和智能路由的实践"
description: "企业生产环境中，实现 MCP 服务的统一管理和智能路由的实践"
date: "2025-06-16"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">文：孤弋、正己</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">在AI大模型应用爆发的今天，Model Context Protocol (MCP) 作为连接AI大模型与应用的关键协议，正在快速普及。然而，如何在企业级环境中高效部署和管理MCP服务，成为技术团队面临的重要挑战。本文将深入剖析MCP Server的五种主流架构模式，并结合Nacos服务治理框架，为企业级MCP部署提供实用指南。</font>

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP架构的演进与挑战</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP协议为AI应用提供了标准化的交互方式，但在企业级落地过程中，我们面临着认证鉴权受限、部署模式多样、技术债务风险等多重挑战。目前，MCP Server主要有五种架构模式，每种架构各有优劣，适用于不同的业务场景。</font>

## <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">五种MCP架构模式详解</font>
### <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">架构一：MCP Client直连Remote Server (SSE)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265009-f464ebe0-65d5-4a27-a128-dd5efbf7ee63.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">这种架构就像你直接打电话给专家咨询问题 —— MCP Client通过SSE方式直接连接到远程MCP Server，全程保持HTTP长连接。</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">优点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">超简单！没有中间层，部署维护成本低</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">实时性好，模型的流式输出体验一流</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">集中化管理，监控和运维不费劲</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">缺点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">网络一卡，体验就崩了</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">所有数据都得传到云端，敏感信息有顾虑</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">安全风险较高，服务端点直接暴露</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">适合谁？</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> 如果你是做SaaS应用、轻量级客户端或公共云服务，对安全要求不那么高，这种架构就挺合适的。</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">架构二：MCP Client通过Proxy连接Remote Server (SSE)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499264847-342e626d-714b-48d2-9a4a-4f3e9892fb93.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">这种架构就像有个翻译在中间帮你沟通 —— MCP Client先连接到Proxy Server，再由Proxy转接到Remote Server。</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">优点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">安全性更高，代理层可以做各种防护</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">支持智能路由和负载均衡，流量调度更灵活</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">可以聚合多个后端服务，一个接口通吃</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">缺点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">架构复杂了，维护成本自然上升</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">多一层代理可能增加延迟，体验稍差</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">代理层可能成为新的故障点</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">适合谁？</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> 多租户环境、企业网关集成、需要调用多种模型的场景，这种架构就很给力。</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">架构三：MCP Client直连Local Server (STDIO)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265000-4cb4b61b-3235-473e-bcbd-d49f3d7dead3.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">这种架构就像你家里有个私人助理 —— MCP Client通过STDIO方式直接连接本地MCP Server，进程间直接通信。</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">优点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">数据安全性拉满！敏感数据可通过 Local Server 加密授权再出本地</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">几乎零网络延迟，响应速度飞快</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">完全离线环境也能用，不依赖外网</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">缺点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">本地计算资源得够强，不然 Server 太多可能造成负载太大</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">每个环境都要单独部署维护，运维成本高</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Server 服务更新很麻烦，得一个个环境去更新</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">适合谁？</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> 金融核心系统、医疗数据分析、工业现场系统等对数据安全和隐私有高要求的场景。</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">架构四：MCP Client通过Local Proxy连接Local Server (STDIO)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499265318-f19e2744-cdea-4822-84ed-954d49458d95.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">这种架构就像你有个私人秘书帮你协调多个本地专家 —— MCP Client先连接到Local Proxy，再由Proxy连接到Local Server。</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">优点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">服务抽象做得好，客户端不用关心实现细节</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">支持本地多实例部署，自动故障转移</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">可以实现不同业务线或部门的资源隔离</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">缺点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">本地环境更复杂了，维护难度加大</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">本地代理需要额外的计算资源</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">多层架构让问题定位和调试变得更困难</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">适合谁？</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> 大型企业内部平台、高可用要求场景、需要统一管理本地AI资源的场景。</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">架构五：MCP Client通过Local Proxy连接Remote Server (STDIO+SSE)</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499266520-c4a01fec-3509-4361-8819-857b49d244d1.png)

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">这种架构就像你有个超级助手，既能处理本地事务又能帮你对接外部专家 —— MCP Client通过STDIO连接Local Proxy，Local Proxy再通过SSE连接Remote Server。</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">优点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">混合云战略的最佳选择，本地云端资源随意切换</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">企业从本地向云端迁移的平滑过渡方案</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">客户端体验一致，不用关心服务在哪里</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">缺点？</font>**

+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">架构最复杂，维护和排障难度最大</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">需要确保本地和云端服务的一致性</font>
+ <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">性能受网络状况影响，可能有波动</font>

**<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">适合谁？</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);"> 实施混合云战略的大型企业、需要弹性扩展的业务、多区域部署的全球企业。</font>

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos如何赋能MCP架构</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">在企业级MCP部署中，MCP Server 的自动发现与选择及其 Server 的动态安装能力比较高效的解决了各个架构中遇到的场景。</font>在 <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos 3.0 之前的版本，主要围绕着分布式应用的服务注册发现以及配置管理，提供了三大核心能力：</font>

1. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">服务发现与注册</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：支持服务的自动注册和发现，实现服务的动态扩缩容</font>
2. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">配置管理</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：支持配置的动态更新和推送，无需重启应用</font>
3. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">服务治理</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：提供服务路由、负载均衡、流量控制等治理能力</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">这些能力与MCP架构的需求高度契合，特别是在多MCP服务器的场景下。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499270250-68d01376-953b-478d-bdf4-3f41cd28ff29.png)

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos MCP Router：连接 MCP 与 Nacos 的桥梁</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos MCP Router (</font>[https://github.com/nacos-group/nacos-mcp-router](https://github.com/nacos-group/nacos-mcp-router)<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">) 是一个基于MCP协议的服务器，它与Nacos深度集成，提供了三个核心功能：</font>

1. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP服务器搜索</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：根据任务描述和关键词搜索合适的 MCP 服务器，重点解决 MCP 工具过多时解决大模型选择工具的效率的问题。</font>
2. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">MCP服务器添加</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：支持添加stdio和SSE两种协议的 MCP 服务器，配合 Nacos Server 的管理能力，重点解决软件供应链安全的问题。</font>
3. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">工具代理调用</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：代理 LLM 对目标 MCP 服务器工具的调用，通过一个本地代理的方式解决 Local Server 与 Remote Server 调用的灵活切换问题。</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">通过以上的几个能力，我们搭建了一种混合 MCP Server 架构的模式，可以实现MCP服务的统一管理和智能路由，大大简化提升工具选择时的性能与企业级 MCP 部署的复杂度。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499272587-5cdc3629-7a26-47f0-ad1c-cfc8c8a51a41.png)

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">Nacos与MCP的实战集成</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">下面通过一个实际案例，展示如何使用Nacos和Nacos MCP Router构建企业级MCP服务。</font>

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">部署 </font><font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">Nacos MCP Router</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">在有 NodeJS 的开发环境中，我们可以通过以下命令手动部署Nacos MCP Router（不过这一步不是必须的）</font>

```plain
$ pnpm i nacos-mcp-router@latest
```

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">配置MCP客户端</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">然后，在MCP客户端配置中添加nacos-mcp-router：</font>

```plain
{
  "mcpServers": {
    "nacos-mcp-router": {
      "command": "npx",
      "args": [
        "nacos-mcp-router@latest"
      ],
      "env": {
        "NACOS_ADDR": "127.0.0.1:8848",
        "NACOS_USERNAME": "nacos",
        "NACOS_PASSWORD": "your_password"
      }
    }
  }
}
```

### <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">使用MCP服务</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">现在，我们可以通过nacos-mcp-router使用各种MCP服务（注：以下步骤为 MCP Client 与 Nacos Router 自动交互时的核心方法，并不是程序员在开发过程中需要硬编码的实现）：</font>

1. <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">搜索MCP服务器：</font>

```plain
search_mcp_server(task_description="生成一张猫的图片", 
                  key_words="图像生成")
```

1. <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">添加MCP服务器：</font>

```plain
add_mcp_server(mcp_server_name="image-generator")
```

1. <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">使用MCP服务器工具：</font>

```plain
use_tool(mcp_server_name="image-generator",     
         mcp_tool_name="generate_image", 
         params={"prompt": "一只橙色的猫"})
```

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">企业中落地 MCP 架构选型指南</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP 社区还在飞速的发展之中，在企业级场景的能力上的诸多核心功能还暂时未形成统一的标准，基于目前的能力，我们在选择适合企业的MCP架构进行落地时，我们需要考虑以下关键因素：</font>

1. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">数据安全与隐私</font>**
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">高敏感数据：优先考虑本地部署架构（架构三、架构四）</font>
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">一般业务数据：可考虑云端或混合架构（架构一、架构二、架构五）</font>
2. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">性能与延迟要求</font>**
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">低延迟关键应用：优先考虑本地部署架构</font>
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">一般性能要求：云端架构通常足够</font>
3. **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">可扩展性需求</font>**
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">需要快速弹性扩展：优先考虑云端架构</font>
    - <font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">可预测的稳定负载：本地部署可能更经济</font>

<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">基于这些因素，不同行业可能的选择可能的参考如下：</font>

+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">金融行业</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：架构四（本地代理+本地服务器）最为适合，满足严格的数据安全要求</font>
+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">互联网行业</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：架构二（代理+远程服务器）支持快速弹性扩展，适合高并发场景</font>
+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">制造业</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：架构五（混合模式）平衡了本地实时控制和云端智能分析的需求</font>
+ **<font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">政府部门</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">：架构三（直连本地服务器）提供最高级别的数据安全和隐私保护</font>

## <font style="color:rgb(17, 24, 39);background-color:rgb(248, 248, 247);">结论与展望</font>
<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">MCP 目前默认成为了 AI 大模型与存量业务数据互通的管道，但由于目前的 MCP 协议本身从设计上未太多考虑企业级落地的情况，导致很多的企业还处在观望的状态。MCP要想完整落地，</font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">中心化的注册中心、可控的软件供应链、安全的访问控制 </font>**<font style="color:rgb(52, 50, 45);background-color:rgb(248, 248, 247);">这三方面的建设必不可少。在我们的方案中，主要通过 Nacos 作为 MCP 的未来企业 MCP 的注册中心，通过 Nacos Server 对 MCP 服务器的管理能力，结合 Nacos Router 做到软件供应链的精准控制；同时配合 Higress 做到 MCP 的安全访问，以此给我们的企业级客户带来 MCP 完整的解决方案。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/169256735/1748499273040-822d449a-6e2c-4881-853e-b6bdf4bfce07.png)

特别致谢 Lingma-Agents ([https://github.com/apps/lingma-agents](https://github.com/apps/lingma-agents)) 在 Nacos Router 实现的过程中提供自动化的 Code Review 能力。


