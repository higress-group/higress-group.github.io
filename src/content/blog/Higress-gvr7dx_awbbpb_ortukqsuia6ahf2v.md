---
title: "应对 Nginx Ingress 退役，是时候理清这些易混淆的概念了"
description: "应对 Nginx Ingress 退役，是时候理清这些易混淆的概念了"
date: "2025-12-24"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸

<font style="color:rgb(38, 38, 38);">本文希望提供一种更简单的方式，来理解这些容易混淆的技术概念：Nginx、Ingress、Ingress Controller、Ingress API、Nginx Ingress、Higress、Gateway API。</font>

<font style="color:#000000;"></font>

### <font style="color:#000000;">01 </font><font style="color:#000000;">Nginx 和 Kubernetes</font>
<font style="color:#000000;">我们先按和 Kubernetes 是否有关，分为两类：</font>



<font style="color:#000000;">Nginx 是在没有 Kubernetes 的年代，流量入口上的事实标准，是独立运行在任何 Linux/Windows 服务器上的 Web 服务器。提供以下主要功能：</font>

+ <font style="color:#000000;">接收请求</font>
+ <font style="color:#000000;">转发请求</font>
+ <font style="color:#000000;">负载均衡</font>
+ <font style="color:#000000;">简单的流量治理，例如限流、缓存、重写</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1766385027942-d71b2775-cda3-4c1a-91cd-b951bfce2f74.png)

<font style="color:#000000;"></font>

<font style="color:#000000;">而 Ingress API、Ingress Controller、Nginx Ingress、Higress、Gateway API 都依赖 Kubernetes，Kubernetes 出现后，才有了这些概念。其中，Ingress API 是 Kubernetes 管理流量的规范，Ingress Controller 是规范的实现组件，Nginx Ingress 和 Higress 都是规范的完整实现和功能扩展，Gateway API 则是 Ingress API 的升级和下一代。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1766385489390-cc7b8fd0-c6fd-46e3-a5d7-3a133ade09b9.png)

<font style="color:#000000;"></font>

<font style="color:#000000;">需要注意的是，Ingress 经常单独出现，需要基于语境来判断，有可能是指 Ingress API，也有可能是指 Ingress 资源，即用户编写的具体配置对象（YAML），遵循 Ingress API。</font>



### <font style="color:#000000;">02 </font><font style="color:#000000;">Ingress API 和 Ingress Controller</font>
<font style="color:#000000;">Ingress API 和 Ingress Controller 分别是 Kubernetes 流量管理的规范和执行器。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1766385048809-3ee162cf-b754-449f-9055-520a38bb0265.png)



<font style="color:#000000;">Ingress API：用声明式的方式，描述外部流量如何进入集群里的 Service，包括：</font>

+ <font style="color:#000000;">如何通过域名访问服务</font>
+ <font style="color:#000000;">如何根据 URL 路径路由到不同后端服务</font>
+ <font style="color:#000000;">后端服务是谁</font>
+ <font style="color:#000000;">是否启用 HTTPS 加密</font>

<font style="color:#000000;"></font>

<font style="color:#000000;">形象地说，Ingress API 可以理解位 Kubernetes 中管理流量的说明书。</font>



<font style="color:#000000;">Ingress Controller：是 Ingress API 的实现组件，即执行者，包括</font>

+ <font style="color:#000000;">监听 Ingress 资源变化</font>
+ <font style="color:#000000;">将 Ingress 规则转换为实际的反向代理配置</font>
+ <font style="color:#000000;">接收外部流量并按规则路由</font>
+ <font style="color:#000000;">处理 TLS 终止（HTTPS 解密）</font>
+ <font style="color:#000000;">提供健康检查、负载均衡、重试等流量治理能力</font>



通过以上能力，<font style="color:#000000;">Ingress Controller 就</font>实现了 <font style="color:#000000;">Kubernetes 入口流量的管理。</font>



### <font style="color:#000000;">03 </font><font style="color:#000000;">Nginx Ingress 和 Higress</font>
<font style="color:#000000;">Nginx Ingress 和 Higress 都是 Ingress API 的完整实现和功能扩展。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1766385360752-0ce31175-c28f-4991-b959-381f22a6ff6a.png)



<font style="color:#000000;">Nginx Ingress：用 Nginx 作为底层实现的 Ingress API，控制面和数据面耦合在同一个进程/容器中。优点是简单、易用、社区广泛。</font>

<font style="color:#000000;">缺点是：</font>

+ <font style="color:#000000;">不是原生的 Ingress API，Ingress API语义偏弱</font>
+ <font style="color:#000000;">扩展靠 Annotation（工程噩梦）</font>
+ <font style="color:#000000;">生成 nginx.conf + reload，动态配置能力弱（频繁 reload 影响性能）</font>



<font style="color:#000000;">适用于简单、稳定、小规模的场景。</font>



<font style="color:#000000;">Higress：数据面是基于 Enovy，控制面给基于 istio，是原生的 Ingress API。</font>

<font style="color:#000000;">优点是：</font>

+ <font style="color:#000000;">控制面与数据面解耦，可独立扩缩容。</font>
+ <font style="color:#000000;">基于 xDS 协议，实现真正的动态配置（无 reload，零中断）。</font>
+ <font style="color:#000000;">原生支持插件扩展</font><font style="color:#000000;">：Wasm、Lua、Go 插件由控制面统一管理并下发。</font>
+ **<font style="color:#000000;">兼容多协议 & 多标准：同时支持 Ingress API 和 Gateway API。</font>**



缺点是，相比 <font style="color:#000000;">Nginx 广泛的社区基础，Higress 为代表的原生 Ingress API，部署和维护存在学习成本。</font>



<font style="color:#000000;">适用于高性能、高扩展、企业级的场景。</font>

<font style="color:#000000;"></font>

### <font style="color:#000000;">04 </font><font style="color:#000000;">Nginx Ingress 退役</font>
<font style="color:#000000;">11月，Kubernetes SIG Network 和安全响应委员会宣布 Ingress NGINX 退役。（</font><font style="color:#000000;">⚠️</font><font style="color:#000000;"> NGINX 并未退役）</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1766390862400-26b7b83d-dd33-4fa1-929c-dcb9ac7dd4b3.png)

意味着：

+ <font style="color:#000000;">Ingress NGINX 尽力维护服务至 2026 年 3 月</font>
+ <font style="color:#000000;">不再发布任何新版本</font>
+ <font style="color:#000000;">不再修复任何漏洞</font>
+ <font style="color:#000000;">也不会更新任何可能发现的安全漏洞</font>
+ <font style="color:#000000;">GitHub 代码库将设置为只读，仅供参考</font>
+ <font style="color:#000000;">现有的 Ingress NGINX 部署将继续运行，安装文件也将继续可用</font>



<font style="color:rgba(0, 0, 0, 0.9);">引发退役的根本原因：</font>：

+ 多年来，该项目只有一两个人利用业余时间，在工作之余进行开发工作。
+ 尝试和 Gateway API 社区合作开发一个替代控制器，但未能激发更多人参与 Ingress NGINX 的维护。



### <font style="color:#000000;">05 Higress：Nginx Ingress 退役的替代优先方案</font>
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1766390153509-1e6f808e-1991-42c8-b0ee-36fd5c77648c.png)

+ <font style="color:rgba(0, 0, 0, 0.9);">Kubernetes 官方推荐，即官方社区文档中进行了说明。</font>
+ <font style="color:#000000;">对 Nginx Ingress 的 Annotation 兼容度最高，支持51种，覆盖90%的用户场景，这意味着现有的 K8s Ingress YAML 文件无需大量修改即可完成迁移</font>
+ <font style="color:#000000;">长期投入，并提供企业版服务，即阿里云 API 网关</font>
+ <font style="color:#000000;">提供监听 K8s Ingress（Ingress 模式），适用于希望保持 K8s 原生工作流（如GitOps）的团队 ；和控制台配置 API（API 管理模式），适用于需要集中治理和精细化管理的场景 。</font>



### <font style="color:#000000;">06 </font><font style="color:#000000;">Gateway API 和 Ingress API</font>
<font style="color:#000000;">标题是：Gateway API 和 Ingress API</font>

<font style="color:#000000;">Gateway API 是 Ingress API 规范的超集和下一代。他的出现，是为了解决 Ingress API 自身无法搞定的问题。其中，Higress 已经支持 Gateway API 标准，用户可从 Ingress API 平滑迁移至 Gateway API。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1766390345211-68d6b391-c4d7-49ef-8159-dd24b7193155.png)



<font style="color:#000000;">Ingress API 存在的问题，Gateway API 这样去解决：</font>

+ <font style="color:#000000;">职责不清，后果是 Ingress 是“一人写全”，没有权限边界。</font>

<font style="color:#000000;">-> Gateway API 通过角色分离解决，定义基础设施提供者、集群管理员、应用开发者。</font>

<font style="color:#000000;"></font>

+ <font style="color:#000000;">功能表达能力弱，依赖 Controller 特有扩展，后果是不标准、不同实现之间迁移成本高。</font>

<font style="color:#000000;">-> Gateway API 通过 Wasm、插件、服务网格集成解决扩展的标准化。</font>

<font style="color:#000000;"></font>

+ <font style="color:#000000;">仅支持 HTTP/HTTPS，无法处理 TCP/UDP/gRPC 等协议</font>

<font style="color:#000000;">-> 云原生应用早已不只是 Web 服务，Gateway API 通过统一的 API，管理所有南北向流量。</font>

<font style="color:#000000;"></font>

+ <font style="color:#000000;">无法表达复杂路由逻辑，微服务治理需求远超 Ingress 能力。</font>

<font style="color:#000000;">-> Gateway API 支持 Wasm、插件、服务网格集成，通过标准化的高级路由解决。</font>

<font style="color:#000000;"></font>

+ <font style="color:#000000;">一个 Ingress Controller 全局共享，缺乏多租户隔离，多租户场景下存在安全和配置冲突风险。</font>

<font style="color:#000000;">-> Gateway API 提供了独立 Gateway 的实例。</font>


