# Higress + Skywalking + SpringBoot 链路追踪探索
![](https://gw.alicdn.com/imgextra/i3/O1CN01WHnllZ1yP74eQYWHs_!!6000000006570-2-tps-2483-2024.png)

Higress是基于阿里内部的Envoy Gateway实践沉淀、以开源 Istio + Envoy 为核心构建的下一代云原生网关，实现了流量网关 + 微服务网关 + 安全网关三合一的高集成能力，深度集成Dubbo、Nacos、Sentinel等微服务技术栈，能够帮助用户极大的降低网关的部署及运维成本且能力不打折；在标准上全面支持 Ingress 与 Gateway API，积极拥抱云原生下的标准API规范；同时，Higress Controller也支持Nginx Ingress平滑迁移，帮助用户零成本快速迁移到Higress。
Higress 具有丰富的可观测能力，包含日志、监控、链路追踪等，本文主要介绍 Higress 的链路追踪功能以及如何与主流的链路追踪系统进行集成。

## 分布式链路追踪介绍
分布式链路追踪（Distributed Tracing）是一种用于跟踪和监控分布式系统中请求的路径和性能的技术。它可以帮助开发人员和运维团队在复杂的分布式系统中快速定位和解决问题。
在分布式系统中，多个服务之间的交互涉及到复杂的网络通信和数据传输，其中每个服务可能由不同的团队或组织负责维护和开发。因此，在这样的环境下，当一个请求被发出并经过多个服务的处理后，如果出现了问题或错误，很难快速定位到根因。分布式全链路追踪技术则可以帮助我们解决这个问题，它能够跟踪和记录请求在系统中的传输过程，并提供详细的性能和日志信息，使得开发人员能够快速诊断和定位问题。对于分布式系统的可靠性、性能和可维护性起到了非常重要的作用。
分布式链路追踪中有以下几个核心术语：
1. Trace: 用来描述在分布式系统中一个完整的事务（这里的事务不是指数据库中的事务，而是指一个完整的业务流）
2. Span: 可命名的、记录耗时的一个工作流片段，Span上可设置多个key:value的tags，也可以记录某个时间点的结构化的log
3. SpanContext: 追踪信息会伴随着整个分布式事务，会通过网络或者消息总线来传递到下游服务中，包含了 trace id、span id 和其它需要传播的数据

分布式链路追踪通过在分布式系统中的每个请求上添加唯一的标识符（通常是一个trace ID），以及另外一些关键的上下文信息（例如span ID、父span ID等），来跟踪请求的流转和路径，如下图所示。当请求通过不同的服务和组件时，每个组件都会创建一个span并记录相关的信息，包括该组件的处理时间、调用的其他组件等。这些span将形成一个分布式的链路，描述了请求的完整路径和各个组件的性能。

![](https://gw.alicdn.com/imgextra/i4/O1CN01Ibdbyn1dCBxwoOPZP_!!6000000003699-2-tps-910-240.png)

## Skywalking介绍
SkyWalking是一个开源的分布式系统性能监控和跟踪解决方案。它专为云原生和微服务架构设计，可以帮助开发人员和运维团队实时监控和分析分布式系统的性能和链路追踪数据。
SkyWalking 逻辑上分为四部分：探针，平台后端，存储和用户界面：
- 探针：基于不同的来源可能是不一样的，但作用都是收集数据，将数据格式化为 SkyWalking 适用的格式
- 平台后端：支持数据聚合，数据分析以及驱动数据流从探针到用户界面的流程。分析包括 Skywalking 原生追踪和性能指标以及第三方来源，包括 Istio 及 Envoy telemetry，Zipkin 追踪格式化等
- 存储：通过开放的插件化的接口存放 SkyWalking 数据，支持 ElasticSearch、MySQL等
- UI：一个基于接口高度定制化的Web系统，用户可以可视化查看和管理 SkyWalking 数据

架构图如下所示：

![](https://gw.alicdn.com/imgextra/i2/O1CN01RuF17i29VUMOLlkdi_!!6000000008073-2-tps-2160-721.png)

应用程序接入skywalking时主要有两种方法，分别是通过agent方式接入以及通过SDK方式接入。skywalking 官方提供了适用于多种语言的agent供开发者使用，如下图所示：

![](https://gw.alicdn.com/imgextra/i2/O1CN01MJVq8J1hyWDtqlHI5_!!6000000004346-0-tps-1500-875.jpg)

## Higress链路追踪能力
Higress 支持多种链路追踪服务，详情参见 [envoy 官方文档](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/observability/tracing#overview)。在 Higress 1.1 版本以上，仅需要在 configmap 中增加以下配置即可集成skywalking，其中sampling字段设置采样率。

```yaml
data:
  higress: |-
    tracing:
      enable: true
      sampling: 100
      timeout: 500
      skywalking:
       service: skywalking-oap-server.op-system.svc.cluster.local
       port: 11800
```

## 测试环境架构
本文中使用 6 个 spring boot 应用在本地 k8s 集群中构建如下调用链路：

![](https://gw.alicdn.com/imgextra/i1/O1CN01QciF4Z24NdUSNA4Pg_!!6000000007379-0-tps-2032-743.jpg)

本次测试中涉及的代码可以在 [higress-demo](https://github.com/higress-group/higress-demo/tree/main/observability/skywalking) 中获取，可以通过修改环境变量中`remote_addrs`和`sleep_time`来指定springboot程序要调用的下游服务以及当前服务休眠的时间，从而创造不同的测试场景。

## 链路追踪示例
测试时，设置springboot服务的rt分别为：
| service |	rt(ms) |
| :-: | :-: |
| springboot-svc-1 | 100 |
| springboot-svc-2-1 | 200 |
| springboot-svc-2-2 | 200 |
| springboot-svc-3 | 300 |
| springboot-svc-4-1 | 100 |
| springboot-svc-4-2 | 500 |

通过以下命令创造请求示例：

```bash
while :; do curl springboot.higress.io/spring-svc-1 ; done
```

### 获取微服务调用链路
skywalking基于请求调用链路生成微服务之间的拓扑图，通过拓扑图可以清晰的看到系统架构，如下图所示：

![](https://gw.alicdn.com/imgextra/i4/O1CN01ao3Ul11c3CZy88XvE_!!6000000003544-0-tps-1330-1166.jpg)

### 排查系统性能瓶颈
当系统整体rt较高时，如何排查系统的性能瓶颈往往是开发者关心的问题。通过链路追踪能够帮助开发者排查系统的性能瓶颈。

根据trace id能够查看请求的链路，并且能够看到链路中各节点记录的相关信息，下图较为直观的反映了请求调用链路中各环节响应时间的对比：

![](https://gw.alicdn.com/imgextra/i2/O1CN01l3XQmj22Wg4x9XA8i_!!6000000007128-0-tps-1500-981.jpg)

以下表格反映了每个请求自身占用的时间，通过该表格可以看到 springboot-svc-4-2 耗时最久，为 504 ms，开发者可以根据此结果对服务进行性能优化。

![](https://gw.alicdn.com/imgextra/i2/O1CN01yYJb9Q1nQ47hZvFb1_!!6000000005083-0-tps-1500-720.jpg)

### 排查系统错误节点
当系统中调用链路较为复杂时，如果某个环节出现错误，排查问题对于开发者来说是一件困难的事情，现在删除 springboot svc 4-2来模拟系统某一环节出现错误的情况，通过链路追踪来排查问题。

![](https://gw.alicdn.com/imgextra/i4/O1CN01xkresx1M3AhMbI9KN_!!6000000001378-0-tps-1500-794.jpg)

此时链路追踪显示的调用链路如上图所示，其中红色圆圈表示服务出现错误，可以看到此时链路中 springboot svc 1，springboot svc 2-1，springboot svc 3，springboot svc 4-2 的调用都是错误的，这些服务调用错误都是由 springboot svc 4-2 调用错误引发的连锁反应，只有 springboot svc 4-1 调用是成功的。

调用 springboot svc 4-2 时 skywalking span 中记录的信息如下：

![](https://gw.alicdn.com/imgextra/i4/O1CN01irM65421nnGPRsBwV_!!6000000007030-0-tps-1500-713.jpg)

通过以上信息我们能够知道 springboot svc 4-2 的服务端出现了问题，从而能够精准地去解决问题。

## 加入Higress社区
![](https://gw.alicdn.com/imgextra/i4/O1CN01z65KzP1VZzcl9y0cZ_!!6000000002668-0-tps-1500-909.jpg)
