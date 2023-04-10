---
title: Higress 1.0.0 版本功能速览
keywords: [higress, GA]
description: 历时 5 个多月，Higress 开源的第一个重要里程碑达成了
author: 澄潭
date: 2023-04-10
---

## 前言

Higress 1.0.0 版本目前已经推出，历时 5 个多月，Higress 开源的第一个重要里程碑达成了：用户可以通过控制台，开箱即用地使用云原生网关。

"云原生"已经不再是一个新鲜词，但企业在选择云原生技术时仍有不少顾虑，例如新技术的学习成本，以及业务架构的迁移成本。

解决这些顾虑，也是 Higress 开源的初衷，我们希望通过简单易用的控制台，封装 Ingress/Gateway API 标准细节，降低用户对云原生技术的学习和使用成本，治好你的技术追赶焦虑；

Higress 网关也为业务渐进地往云原生架构迁移提供了方案，基于 Higress 提供的多种服务发现机制，网关路由不仅可以转发到 K8s 服务，也可以直接配置 IP 转发到到物理机上的服务；基于 Nacos/ZooKeeper 等注册中心对接，还可以轻松实现 [Spring Cloud](https://higress.io/zh-cn/docs/user/spring-cloud) 和 [Dubbo](https://higress.io/zh-cn/docs/user/dubbo) 微服务的路由，无论其是否部署在 K8s 内。

而对于已经使用 K8s 的用户，也推荐你使用 Higress，基于以下能力，Higress 可以比其他同类 K8s 网关实现更好的入口流量管理：

1. Ingress 注解：基于 Nginx Ingress 吸纳大量 K8s 网关用户经验设计的 Ingress 策略注解，Higress 对其中精华部分进行了完整的兼容；同时也基于阿里内部和云产品落地经验，扩展了很多实用的注解
2. 灵活的扩展能力：Higress 提供了多种开箱即用的插件，支持全局/域名/路由级生效，同时用户也能开发自己的插件，插件逻辑变更可以一键上线，变更过程对流量完全无损
3. Istio 流量治理能力：如果你安装了 Istio，那么你还能使用 Istio API 来管理 Higress，Istio 沉淀了很多流量治理的标准化能力，都可以为 Higress 所用


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


## 安装升级方式

当前 Higress 1.0.0 已经发布了 RC 版本，helm [安装](https://higress.io/zh-cn/docs/user/quickstart)或[升级](https://higress.io/zh-cn/docs/ops/upgrade)时需要指定`--devel`参数，例如：`helm upgrade higress -n higress-system --devel`

1.0.0 RC 版本已经在社区小伙伴的协作下完成了多轮测试和修复工作，欢迎大家使用。最终的正式版本，也将在近期很快推出。

## 企业落地支持

现阶段使用 Higress 的企业用户，可以在此 [Github Issue](https://github.com/alibaba/higress/issues/1) 下登记企业信息，并联系我(微信:nomadao 钉钉:chengtanzty)，我会将你加到 Higress 企业落地群，群里有社区核心研发同学，可以提供更及时的响应和帮助。


## 社区

欢迎认领 Higress Issue 任务：https://github.com/alibaba/higress/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22

完成一定数量的 Issues 就可以成为 Higress Committer，也有机会获得开源社区的礼物和荣誉🏆

欢迎加入 Higress 社区群，及时了解更多 Higress 动向：

![](https://img.alicdn.com/imgextra/i2/O1CN0171Hg8d1XMMz4eFo3b_!!6000000002909-0-tps-720-405.jpg)
