---
title: Higress是什么
keywords: [Higress]
description: Higress是什么
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/overview/what-is-higress.md
---


# Higress是什么?

Higress是基于阿里内部的Envoy Gateway实践沉淀、以开源Istio + Envoy为核心构建的下一代云原生网关，实现了流量网关 + 微服务网关 + 安全网关三合一的高集成能力，深度集成Dubbo、Nacos、Sentinel等微服务技术栈，能够帮助用户极大的降低网关的部署及运维成本且能力不打折；在标准上全面支持Ingress与Gateway API，积极拥抱云原生下的标准API规范；同时，Higress Controller也支持Nginx Ingress平滑迁移，帮助用户零成本快速迁移到Higress。

![image](https://img.alicdn.com/imgextra/i4/O1CN01OgGP1728t0xeRfRYJ_!!6000000007989-0-tps-1726-1366.jpg)

## 传统网关分类

行业中通常把网关分为两个大类：流量网关与业务网关，流量网关主要提供全局性的、与后端业务无关的策略配置，例如阿里内部的的统一接入网关Tengine就是典型的流量网关；业务网关顾名思义主要提供独立业务域级别的、与后端业务紧耦合策略配置，随着应用架构模式从单体演进到现在的分布式微服务，业务网关也有了新的叫法 - 微服务网关（图示说明如下）。在目前容器技术与K8s主导的云原生时代，下一代网关模式依然是这样吗？

![image](https://img.alicdn.com/imgextra/i2/O1CN01b5lrN41VXF7SzQtWU_!!6000000002662-0-tps-2116-974.jpg)

## Higress定位

在虚拟化时期的微服务架构下，业务通常采用流量网关 + 微服务网关的两层架构，流量网关负责南北向流量调度和安全防护，微服务网关负责东西向流量调度和服务治理，而在容器和 K8s 主导的云原生时代，Ingress 成为 K8s 生态的网关标准，赋予了网关新的使命，使得流量网关 + 微服务网关合二为一成为可能。

作为面向南北向的公网网关，使用Waf防护异常流量是很常规的需求，而且随着互联网环境变得越来越复杂，用户对防护的诉求是持续增强的，常规做法是将流量先接入Waf安全网关，过滤后再将流量转发给流量网关，最后到达微服务网关；Higress希望通过内置Waf模块，使得用户的请求链接只经过Higress就可以同时完成Waf防护、流量分发、微服务治理，既可以提升链路RT，也可以降低网关的运维复杂度。因此Higress实现了流量网关 + 微服务网关 + 安全网关三合一的高集成能力。

![image](https://img.alicdn.com/imgextra/i1/O1CN01B8h0j41nGRfxtGWfB_!!6000000005062-0-tps-2114-1004.jpg)



## Higress为什么选择以Envoy + Istio为内核构建?

在容器化的云原生大背景下，Kubernetes已经成为了基础设施与上层应用的标准接口，Kubernetes集群天然的内外网络隔离环境，使得外部流量进入Kubernetes集群内部需要通过入口网关，因此Kubernetes通过Ingress来规范化入口网关的定义与标准，虽然Ingress标准存在一些如路由表达能力弱等不足之处，社区已经在积极推进Gateway API标准定义来解决，但不可否认的是目前Ingress标准仍然占据主流，CNCF年度报告中也单独统计了Ingress Provider（Ingress标准的实现方统称为Ingress Provider）的使用情况。

![image](https://img.alicdn.com/imgextra/i2/O1CN01S99fCF1VBG6dqsXoM_!!6000000002614-0-tps-2194-794.jpg)

从上述统计报告中可以看到虽然目前Nginx Ingress仍然占据K8s Ingress Provider榜首，但Envoy的增长是最快的，已经从2019年的不足20%增长为2020年的37%，且仅在Nginx Ingress之后，增长势头非常迅猛，这说明选择以Envoy为内核是符合云原生发展趋势的；而且随着Service Mesh逐步被大众认可，Istio + Envoy的体系可以同时覆盖Mesh与Ingress领域，实现以一套技术架构调度东西向、南北向全域流量的目标，这对用户来说也是非常有意义的。



## Higress在阿里巴巴内部介绍

Higress孵化自阿里巴巴内部2020年5月的"本地生活战役"，最初是为满足阿里巴巴集团与蚂蚁集团直接使用RPC请求互访的诉求而构建，而且借该项目也成功孵化了Dubbo 3.0的Triple协议，因此Higress也是内部第一个支持Triple协议的应用，同年Higress也成功支持了双11、双12等大促活动，后续随着业务范围的扩展，目前Higress在内部已经支持优酷、钉钉、达摩院、蚂蚁等业务，业务场景也扩展到了东西向、南北向的全域流量调度。

![image](https://img.alicdn.com/imgextra/i4/O1CN01x3Ap5B1SEW4rltAQ7_!!6000000002215-0-tps-2398-1220.jpg)