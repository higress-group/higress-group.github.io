---
title:  记Higress在2023 KubeCon China的分享
keywords: [Higress,KubeCon]
description: 看K8s资深运维如何选型Ingress网关
author: 澄潭
date: 2023-09-28
---

## 分享简介

在9月26日的2023 KubeCon阿里云云原生开放日，Higress的分享内容分为两部分：

Part 1. 由上海费芮网络科技系统运维副总监戴喜军，带来费芮在选型企业版Higress作为K8s Ingress替代Nginx Ingress的介绍

Part 2. 由Higress开源社区负责人澄潭，带来Higress开源项目的介绍

开源版和企业版是Higress的一体两面，通过本次分享，相信大家会对Higress有更全面的了解。

## Part 1. 费芮互动使用Higress作为Kubernetes Ingress实现稳定性和性能提升

费芮通过Higress解决了原本Nginx Ingress网关的诸多痛点，性能提升90%，响应时间下降50%，并大幅提升业务入口的稳定及安全性，高效支撑每日1亿+粉丝交互， 4万+线下门店、每月3000万+笔的移动支付需求。

### 费芮业务场景

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/0d4f761d-1471-49b6-a03c-38b11304262d)
![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/dba8ae2a-93c8-4368-af3d-739f97090d39)

费芮专注于移动营销、O2O、社交媒体、移动电商领域的创新与研发。费芮互动自主研发的自媒体平台运维超过2亿粉丝 ； 有超过4万家线下门店采用费芮O2O解决方案。费芮的主要客户包括优衣库，必胜客，肯德基，星巴克，SPG，欧莱雅，Innisfree，迪卡侬，顶新集团等。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/61791bae-b40c-4b90-bc4d-c23bc052911c)

费芮内部业务系统的日均发布次数达到100次之多，会涉及到400多条Ingress路由规则的日常更新，且网关每天需要承载的PV流量达到了1个亿。Ingress网关的性能和稳定性至关重要。

### Nginx Ingress 痛点

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/1d8a178e-05de-4114-96b3-7d4e11240374)

配置变更频繁，导致Nginx进程频繁重启，大量连接瞬时断开后并发重连会导致后端服务产生压力，严重时造成大量请求失败。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/52e6ff5a-7374-4fe9-b001-ff6d3ac97744)

Nginx Ingress的Controller组件和Nginx组件运行在同一个POD中，控制面资源使用还会影响到数据面的性能。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/b09a3db4-465b-46b8-8e35-bd274388f143)

Nginx Ingress还缺少面向服务限流的能力，只能实现面向单个来源IP限流，对于后端服务保护来说没有意义。

### Higress 收益

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/48388f01-7796-4f7d-b7d1-fb7bd1522925)

Higress企业版采用了全托管架构，与业务集群分离，无需自己运维，稳定性有更好保障。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/5e689364-fb08-4ec1-9d71-49539da561b8)

配置更新都是动态加载，无需重启数据面，保障业务平稳发布，websocket连接的业务收益也特别明显，长连接可以始终保持不会断开。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/29ae8168-e84d-41fb-bb4f-a258c4200a7e)

开启了TLS硬件加速，TLS握手时延直接减半，QPS吞吐提升86%。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/4ace2996-5b5a-4331-90cb-8448c65042d5)

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/8664f436-c058-42bc-82c9-7355d24592ad)

开启WAF对吞吐影响还是比较明显的，下降了30%，但相比Ingress Nginx直接下降了90%，性能提升还是很明显，而且更大的优势是基于阿里云WAF产品，防护规则是实时更新的，而非Modsecurity的静态规则。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/10fca63d-a0bb-45a1-82ee-de115bf577e7)

Higress集成了Sentinel限流的能力，可以直接面向服务的QPS吞吐上限/并发数上线进行限流，并且相比Nginx只能配置单机限制阈值，需要关注网关节点数量，Higress这里的配置是全局阈值，不受网关扩缩容影响。

触发限流后可以自定义响应内容或者重定向到指定地址，都是很实用的能力。

## Part 2. Higress开源之路：扎根开源生态，定义云原生网关

开源是云原生生态的基石，Higress也是借助了开源生态的力量，站在Istio/Envoy的肩膀上开发出了更多实用的功能，我们选择将MSE Higress（企业版）中的核心能力全部开源，决心扎根在开源生态中，让Higress变得更普惠，有更多人使用，从而让Higress更加强大。

### 简介

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/438dcf9a-96fa-4d0d-89ed-e810746c61ab)

Higress实际上有三次诞生过程：第一次是在阿里集团内部业务需求驱动下诞生；第二次是随着内部使用逐渐成熟沉淀为阿里云上的MSE Higress云原生网关产品；第三次是随着云产品成熟，2022年11月在云栖大会上正式宣布开源。2023年5月Release了第一个GA版本，意味着开源版本也走入成熟阶段。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/783b96cc-b628-4784-a6cf-c2cf10e11f3f)

从配置流转的过程来看Higress的架构：

1. 首先用户可以通过UI控制台/命令行工具多种方式来下发配置
2. 到了控制面，如果是K8s下，配置持久化基于CRD，如果不是K8s，配置持久化基于Nacos
3. 除了用户下发的路由配置，实现服务路由还需要的服务IP地址信息，支持从K8s service/Nacos/Eureka/Consul/ZooKeeper/DNS/固定IP等多种方式获取
4. Higress数据面是基于Envoy，配置通过xDS下发，这里复用了Istio的配置下发机制，因为是内置了这个机制，无需单独部署Istio
5. 最终配置下发到数据面生效，Higress基于Envoy扩展了很多能力，而且基于Wasm扩展机制，可以很方便开发自定义插件，且具备全局/域名/路由维度的生效粒度

### 核心能力

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/be02b599-f82f-42be-a8e5-82f69b9196b8)
![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/4dc3cc2b-d6fe-4717-a53a-3e75c5f826ca)

高集成：同时集成经典微服务生态和K8s开源生态能力，可以帮助业务从传统架构迁移到云原生架构，基于流量灰度等能力，可以保障这一过程的平滑

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/87f8eacd-39b6-4a26-a7a1-b78f6a5abb4f)

标准化：兼容Nginx Ingress常用注解，基于统一的Ingress标准可以轻松实现Nginx到Higress这一技术鸿沟的跨越，Higress也已经支持Gateway API，路由标准本身也能借助Higress实现平滑升级

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/33776d12-baf3-4d09-ae42-a5cadb655bef)

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/b9e4a718-c985-4ac4-9b7b-46a427ccb987)


易扩展：借助Higress的Wasm SDK，很少的业务代码就可以开发一个灵活的插件；并且支持基于OCI镜像标准分发，可以让插件的文档，配置约束等跟随插件本身一起被分发和共享；和传统Nginx类网关最大的差别，在于插件的分发集成阶段，实现了插件版本更新跟网关自身版本更新的解耦。

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/d037bd1d-89c1-4f9c-b489-857b46de31ca)

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/65f71cee-09d9-4e7b-aa6e-bd4c9a60de83)

热更新：Envoy相比Nginx更合理的配置系统抽象，让Higress具备了Nginx Ingress无法实现的配置热更新能力

### 回顾与展望

![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/f46c4d68-8e31-44bb-afc6-c02c9fccb105)

Higress开源的前半年，专注于开源生态的打通和易用性的提升，并基于Github Action构建了开源的集成测试体系，来保障项目质量，在今年5月份发布第一个GA稳定版本后，在多个核心社区开发者的努力下，我们又很快发布了1.1和1.2两个大版本，推出了非K8s部署/Knative支持等重量级功能。


![image](https://github.com/higress-group/higress-group.github.io/assets/6763318/3ba10a71-b3f0-4ede-a150-c64e0b1003c4)

未来的RoadMap，Higress会聚焦在Gateway API/插件生态/API管理三个方向上，随着社区开发团队的不断壮大，Higress已经建立了多个不同方向的[SIG](https://github.com/alibaba/higress/issues/547) 并行推进核心功能演进，未来将不断有重量级功能推出，尽请期待。


## 直播回看

https://www.aliyun.com/activity/middleware/CloudNative_Meetup







