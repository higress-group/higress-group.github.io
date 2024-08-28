---
title: FAQ
keywords: [Higress]
description: Higress FAQ.
---

# FAQ

<a href="#1" target="_self">1. Higress 现在适合上生产系统么？</a>
<br/>

<a href="#2" target="_self">2. Higress 和 Envoy Gateway 有什么区别？</a>
<br/>

<a href="#3" target="_self">3. Higress 和阿里巴巴的另一款开源网关 Tengine 有哪些不同？</a>
<br/>

<a href="#4" target="_self">4. Higress 阿里云上的 MSE 云原生网关有什么关系？是基于此孵化的开源项目吗？</a>
<br/>

<a href="#5" target="_self">5. Higress 将流量网关、微服务网关、安全网关三合一，这种做法业内是否通用？是否是一种发展趋势？</a>
<br/>

<a href="#6" target="_self">6. Higress 对上游进行了定制，是否存在着无法享受社区福利、还要背负生态跟进的问题？</a>
<br/>

<a href="#7" target="_self">7. Higress 支持 Nacos 的服务发现，是否有支持 Consul 的计划？</a>
<br/>

<a href="#8" target="_self">8. Higress 是否有离线部署版本？</a>
<br/>

<a href="#9" target="_self">9. Higress 能脱离 K8s 环境，只基于 Docker 运行吗？</a>
<br/>

<a href="#10" target="_self">10. Higress 除了运行在 K8s 上，是否支持在虚拟机和物理机上运行呢？ </a>
<br/>

<a href="#11" target="_self">11. Higress 的 Dashboard 会对外开源么？</a>
<br/>

<a href="#12" target="_self">12. 当前开源的版本支持 Waf 功能么，有相关的最佳实践么？</a>
<br/>

<a href="#13" target="_self">13. Higress 是否支持弹性伸缩，网关是无状态的么？</a>
<br/>

<a href="#14" target="_self">14. Higress 有 roadmap 了么？</a>
<br/>

<a href="#15" target="_self">15. 如何加入 Higress 社区进行贡献，已经迫不及待了。</a>
<br/>

<a href="#16" target="_self">16. 企业版和开源版有功能差异对比吗 </a>
<br/>

********
<h3 id='1'>Q: Higress 现在适合上生产系统么？</h3>

**A:** 
建议升级到 v1.0.0 及以上版本

具体可以参考我们的[Roadmap](./roadmap.md)

********

<h3 id='2'>Q: Higress 和 Envoy Gateway 有什么区别？</h3>

**A:** 
Higress 是基于 Envoy 实现和扩展的，和 Envoy Gateway 一样遵循 Gateway API 标准，不同的是，还提供了：

- Waf 防护、认证鉴权等安全插件能力
 
- 多注册中心、协议转化、限流降级等服务管理插件能力，例如，对于传统使用 Dubbo 的微服务用户希望使用原生 RPC 方式暴露对外服务，但通常提供外部访问的服务以使用 HTTP 为主，为了帮助 Dubbo 用户降低服务暴露的开发成本，Higress 提供了 HTTP 转 Dubbo 协议功能，且通过 Console 为用户提供白屏化的配置方式，某客户使用后反馈“这是业界完成度最高的 HTTP 转 Dubbo 协议”功能。
 
- 支持 WASM、Lua 等自定义插件，例如 Nginx 用户，我们还会支持进程外插件，满足多语言用户诉求，尤其是 Java 用户因现阶段 Java 社区对 WebAssembly 支持尚不完善但又希望对网关进行扩展的诉求。
 
********

<h3 id='3'>Q: Higress 和阿里巴巴的另一款开源网关 Tengine 有哪些不同？</h3>

**A:** 

Tengine 是基于 Nginx 实现，通过 Lua 扩展，Higress 基于 istio + Envoy，通过 WASM 扩展，在技术架构上不太一样，开发者可以根据业务场景来进行选型。Higress 已经支持 Nginx Ingress 注解平滑迁移的能力，满足部分用户期望迁移到 Higress 但又不希望重新配置网关的诉求，既可以将 Higress 作为统一接入网关使用，同时又可以享受 Ingress 的红利。
 
********

<h3 id='4'>Q: Higress 阿里云上的 MSE 云原生网关有什么关系？是基于此孵化的开源项目吗？</h3>

**A:** 

MSE 云原生网关是 Higress 的商业化版本，能力上是有差异的，主要体现在性能、稳定性、易用性和安全性上，因为这些都非常依赖于云上的基础设施能力，详细资源还在整理，后续会在 MSE 的产品页和文档页进行展示，方便大家选型。当然，Higress 处于演进过程中，MSE 云原生网关上的哪些能力对外进行开源，我们会和社区一起定义，开源上我们也会规划一个插件市场。

********

<h3 id='5'>Q: Higress 将流量网关、微服务网关、安全网关三合一，这种做法业内是否通用？是否是一种发展趋势？</h3>

**A:** 

流量网关、微服务网关、安全网关在业界中一直都有使用，部署形态大多采用各自使用独立集群部署，在K8s 主导的容器化背景下，K8s 通过 Ingress 标准化了入口网关，传统流量网关、微服务网关、安全网关独立部署模式在 K8s 下就显得部署成本高、运维复杂，站在用户角度只需要一款功能丰富的高集成网关即可，基于此我们判断高集成网关会是未来的一种发展趋势。

********

<h3 id='6'>Q: Higress 对上游进行了定制，是否存在着无法享受社区福利、还要背负生态跟进的问题？</h3>

**A:** 

Higress 核心代码基本采用可插拔的 Filter 扩展，功能新增也尽量遵循可扩展原则，在上游跟进上为保持自身稳定性也不会马上跟进最新版本，比如 APISIX、Kong 内核都是基于 Nginx，但他们依然发展的很好，事实也说明上游跟进不会成为项目发展障碍。

********

<h3 id='7'>Q: Higress 支持 Nacos 的服务发现，是否有支持 Consul 的计划？</h3>

**A:** 

预计将在 1.2.0 版本提供

********

<h3 id='8'>Q: Higress 是否有离线部署版本？</h3>

**A:** 

目前还没有现成的，需要您自行构建。目前 Docker 镜像都是提供的，可以自行拉取使用。

********

<h3 id='9'>Q: Higress 能脱离 K8s 环境，只基于 Docker 运行吗？</h3>

**A:** 

已经支持了，可以看这里：https://higress.cn/docs/latest/user/quickstart/#%E7%8E%AF%E5%A2%83%E4%BA%8C%E8%84%B1%E7%A6%BB-k8s-%E5%9C%A8-docker-compose-%E4%B8%AD%E4%BD%BF%E7%94%A8

********

<h3 id='10'>Q: Higress 除了运行在 K8s 上，是否支持在虚拟机和物理机上运行呢？</h3>

**A:** 

同上；

也可以考虑使用 [Higress 企业版](https://www.aliyun.com/product/aliware/mse?spm=higress-website.topbar.0.0.0)，这个模式 Higress 是全托管的，无需关心 Higress 的部署和运维，可直接对接虚拟机和物理机上部署的后端服务。

********

<h3 id='11'>Q: Higress 的 Dashboard 会对外开源么？</h3>

**A:** 

已经开源了：https://github.com/higress-group/higress-console

********

<h3 id='12'>Q: 当前开源的版本支持 Waf 功能么，有相关的最佳实践么？</h3>

**A:** 

支持的，可以看这篇文档：https://higress.cn/docs/latest/user/waf/

********

<h3 id='13'>Q: Higress 是否支持弹性伸缩，网关是无状态的么？</h3>

**A:** 

Higress 基于 K8s HPA，是支持弹性伸缩的，网关无状态，是个 deployment 。

********

<h3 id='14'>Q: Higress 有 roadmap 了么？</h3>

**A:** 

请参考[Roadmap](./roadmap.md)

********

<h3 id='15'>Q: 如何加入 Higress 社区进行贡献，已经迫不及待了 </h3>

**A:** 

我们非常欢迎大家通过各种形式参与到我们项目的建设中，包括但不限于：

- 架构设计
- 模块设计
- 代码实现
- Bug Fix
- Demo 样例
- 文档、网站和翻译
 
具体的参与方法可以参见我们官网的[开发者指引](../developers/guide_dev.md)或与 higress@googlegroups.com 联系。
实际上，我们并不拘泥于贡献的形式，开发者提出的每一个 issue，无论是 Bug Report、改进建议或者甚至是问题咨询都代表着对项目的关注和帮助。希望 Higress 项目和社区一起健康成长，成为云原生网关领域一个优秀的解决方案。

********


<h3 id='16'>Q: 企业版和开源版有功能差异对比吗 </h3>

**A:** 

企业版和开源版本的功能基本一致，企业版主要是以开源版本为功能内核，提供了更多现成的解决方案，包括高可用、安全、可观测等方面，详细可以参考：

[MSE云原生网关和开源Higress对比](https://help.aliyun.com/zh/mse/product-overview/comparison-between-mse-cloud-native-gateways-and-open-source-higress-gateways?spm=a2c4g.11186623.0.0.5c6ec925uJLUVD)

[典型的企业版解决方案：同城多活](https://help.aliyun.com/zh/mse/use-cases/active-zone-redundancy-based-on-mse-cloud-native-gateways)

********
