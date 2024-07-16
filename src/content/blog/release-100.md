---
title: 上线控制台，降低使用门槛 ｜ Higress 1.0.0 RC 版本发布
keywords: [higress, GA]
description: 历时 5 个多月，Higress 云原生网关开源的第一个重要里程碑达成了
author: 澄潭
date: "2023-04-10"
category: "article"
---

## 前言

历时 5 个多月，Higress 推出了首个 RC （Release Candidate，即正式发布的候选）版本 1.0.0-rc，用户可以通过控制台，开箱即用地使用云原生网关。

选用 Higress 作为云原生网关的核心优势如下：

- **易用性**

  “云原生”已经不再是一个新鲜词，但企业对云原生技术的学习使用成本仍有许多顾虑，对云原生新标准的追赶又有很多焦虑；

  Higress 同时提供了本地安装/生产部署的 [quickstart](https://higress.io/zh-cn/docs/user/quickstart)，可以一键部署，并通过控制台操作快速上手；基于简单易用的控制台，Higress 可以封装 Ingress/Gateway API 的标准细节，根治技术追赶焦虑。

- **标准化**

  K8s 带来了云原生的路由标准 Ingress/Gateway API，如同 POSIX 定义 Unix 可移植操作系统标准，历时 35 年经久不衰，云原生的路由标准的生命周期一定会远超过 K8s 本身；

  Higress 结合阿里内部实践以及阿里云产品沉淀，积累了基于 Ingress API 的丰富的路由策略扩展能力，同时还兼容大部分 Nginx Ingress 能力，这些能力后续也将在 Gateway API 上支持。

- **高集成**

  企业内有大量传统架构部署的服务，会成为向云原生架构演进的技术负担，要求云原生网关具备对接异构服务架构的能力；

  基于 Higress 提供的多种服务发现机制，网关路由不仅可以转发到 K8s 服务，也可以直接配置 IP 转发到到物理机上的服务；基于 Nacos/ZooKeeper 等注册中心对接，还可以轻松实现 [Spring Cloud](https://higress.io/zh-cn/docs/user/spring-cloud) 和 [Dubbo](https://higress.io/zh-cn/docs/user/dubbo) 微服务的路由，无论其是否部署在 K8s 内。
  
- **易扩展**

  基于扩展机制进行二次开发的能力，是云原生网关在不同业务场景下都能适配落地的关键；
  
  Higress提供了灵活的插件扩展机制，目前插件市场已经推出多个官方插件，并支持用户通过控制台直接上传自己开发的插件，同时开源社区的插件市场生态也在不断建设中。
  
  
- **热更新**

  传统 Nginx 更新规则需要 reload 会导致链接抖动，导致流量损失，对实时通信、视频、IOT无法容忍；

  对于路由规则，Wasm 插件逻辑更新，以及证书改动等等，Higress 全部支持热更新，不会造成任何连接抖动。


### 企业落地支持

在 RC 版本阶段使用 Higress 的企业用户，社区会在落地阶段提供更多帮助，我们建立了 Higress 企业落地群，可以联系我(微信:nomadao 钉钉:chengtanzty)，会将你加进群，群里有社区核心研发同学，可以提供更及时的响应和帮助。


### 安装升级方式

安装 RC 版本，需要 helm [安装](https://higress.io/zh-cn/docs/user/quickstart)或[升级](https://higress.io/zh-cn/docs/ops/upgrade)时需要指定`--devel`参数，例如：`helm upgrade higress -n higress-system --devel`

1.0.0 RC 版本已经在社区小伙伴的协作下完成了多轮测试和修复工作，欢迎大家使用。最终的正式版本，也将在近期很快推出。


## 控制台功能速览

- **丰富的可观测**

  提供开箱即用的可观测，Grafana&Prometheus 可以使用内置的也可对接自建的，具体可以参考[文档](https://higress.io/zh-cn/docs/user/prometheus)

  ![](https://img.alicdn.com/imgextra/i1/O1CN016n7gBU1UCnrfOBOZC_!!6000000002482-1-tps-1778-1012.gif)
    

- **插件扩展机制**

  官方提供了多种插件，用户也可以[开发](https://higress.io/zh-cn/docs/user/wasm-go)自己的插件，构建成 docker/oci [镜像](https://higress.io/zh-cn/docs/plugins/custom)后在控制台配置，可以实时变更插件逻辑，对流量完全无损。

  ![](https://img.alicdn.com/imgextra/i2/O1CN01t7XqQB1s6R8cM5ZRS_!!6000000005717-1-tps-1778-1012.gif)


- **多种服务发现**

  默认提供 K8s Service 服务发现，通过配置可以对接 Nacos/ZooKeeper 等注册中心实现服务发现，也可以基于静态 IP 或者 DNS 来发现

  ![](https://img.alicdn.com/imgextra/i2/O1CN0142CxRS1of0ZKg5soq_!!6000000005251-1-tps-1778-1012.gif)
    

- **域名和证书**

  可以创建管理 TLS 证书，并配置域名的 HTTP/HTTPS 行为，域名策略里支持对特定域名生效插件

  ![](https://img.alicdn.com/imgextra/i4/O1CN01eQhgZD1ggMonjdj9u_!!6000000004171-1-tps-1778-1012.gif)


- **丰富的路由能力**

  基于上面配置的服务发现机制，发现的服务会出现在服务列表中；创建路由时，选择域名，定义路由匹配机制，再选择目标服务进行路由；路由策略里支持对特定路由生效插件

  ![](https://img.alicdn.com/imgextra/i3/O1CN01lExhus1IvR4Q8kGmY_!!6000000000955-1-tps-1778-1012.gif)


### 进阶使用

Higress 控制台的功能还在不断丰富和演进中，当前还有很多 Higress Ingress 注解的能力没有支持，如果有这部分深度使用的需求，可以参考[这篇文档](https://higress.io/zh-cn/docs/user/annotation-use-case)进行进阶配置

如果希望使用 Istio 的能力进行流量治理，可以参考[这篇文档](https://higress.io/zh-cn/docs/ops/deploy-by-helm)的支持 Istio CRD 一节。基于 Istio 的 [EnvoyFilter API](https://istio.io/latest/docs/reference/config/networking/envoy-filter/) 可以实现更多细粒度的管控能力。



## 社区

欢迎认领 Higress Issue 任务：https://github.com/alibaba/higress/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22

完成一定数量的 Issues 就可以成为 Higress Committer，也有机会获得开源社区的礼物和荣誉🏆

欢迎加入 Higress 社区群，及时了解更多 Higress 动向：

![](https://img.alicdn.com/imgextra/i2/O1CN0171Hg8d1XMMz4eFo3b_!!6000000002909-0-tps-720-405.jpg)
