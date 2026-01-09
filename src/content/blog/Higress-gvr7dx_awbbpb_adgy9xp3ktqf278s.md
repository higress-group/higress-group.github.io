---
title: "IngressNightmare：Ingress Nginx 再曝5个安全漏洞，可接管你的 K8s 集群"
description: "IngressNightmare：Ingress Nginx 再曝5个安全漏洞，可接管你的 K8s 集群"
date: "2025-03-28"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸&魁予

是否还记得2022年 K8s Ingress Nginx 披露了的3个高危安全漏洞（CVE-2021-25745, CVE-2021-25746, CVE-2021-25748），并在那一年宣布停止接收新功能 PR，专注修复并提升稳定性。但近期再次被披露5个安全漏洞，攻击者可利用安全漏洞，接管你的 K8s 集群，被业内称为[#IngressNightmare](https://x.com/hashtag/ingressnightmare)_**<font style="color:#DF2A3F;">[1]</font>**_

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/133108/1742994378900-5a237d23-c99f-4e3b-b3c1-5fd98db3c16d.webp)

****

**目录：**

_**01**_** 背景**

_**02**_** ****<font style="color:rgb(51, 51, 51);">Nginx Ingress 安全漏洞频出的根因：架构设计缺陷</font>**

_**03**_**<font style="color:rgb(51, 51, 51);"> 架构设计缺陷带来安全问题，还带来稳定性问题</font>**

_**04**_**<font style="color:rgb(51, 51, 51);"> 自建网关容易忽略的细节</font>**

_**05**_**<font style="color:rgb(51, 51, 51);"> </font>****<font style="color:rgb(51, 51, 51);">Higress&MSE Ingress：Ingress 的另一种选择</font>**

<font style="color:rgb(51, 51, 51);"></font>

## 01 背景
近日，云安全平台 Wiz Research 披露了 Ingress Nginx 的5个安全漏洞，分别是 CVE-2025-1097、CVE-2025-1098、CVE-2025-24514 和 CVE-2025-1974，这是 Kubernetes Ingress Nginx Controller 中未经身份验证的远程代码执行漏洞，这5个安全漏洞的 CVSS v3.1 基本评分高达 9.8，被 Wiz 称为[#IngressNightmare](https://x.com/hashtag/ingressnightmare)。攻击者可利用这些漏洞，在未经授权访问 K8s 集群的情况下，便可获取所有命名空间中的存储信息，从而接管 K8s 集群。 

> CVSS v3.1（Common Vulnerability Scoring System version 3.1，通用漏洞评分系统3.1版）是用于评估计算机系统安全漏洞严重性的行业标准框架，由国际组织 FIRST（事件响应和安全团队论坛）维护。最高分10分，分数越高表示漏洞越严重。
>



### <font style="color:rgba(0, 0, 0, 0.85);">漏洞影响范围与原理</font>
**<font style="color:rgb(51, 51, 51);">IngressNightmare </font>**<font style="color:rgb(51, 51, 51);">的核心问题在于影响了 Kubernetes Ingress Nginx Controller 的准入控制器组件，据评估，约有 43% 的云环境可能受到这些漏洞的影响。</font>

<font style="color:rgb(51, 51, 51);">该漏洞利用了 Kubernetes Pod 中部署的准入控制器无需认证即可通过网络访问的特性。具体来说，攻击者可以通过直接向准入控制器发送恶意 Ingress 对象（即 AdmissionReview 请求），远程注入任意的 Nginx 配置，从而在 Ingress Nginx Controller 的 Pod 上执行代码。</font>

<font style="color:rgb(51, 51, 51);">Wiz 解释道：“准入控制器的高权限和无限制的网络访问性创造了一个关键的提权路径。利用此漏洞，攻击者可以执行任意代码并访问跨命名空间的所有集群机密信息，最终可能导致整个集群被接管。”</font>



### <font style="color:rgba(0, 0, 0, 0.85);">漏洞详情</font>
<font style="color:rgb(51, 51, 51);">以下是这些漏洞的具体信息：</font>

+ **<font style="color:rgb(51, 51, 51);">CVE-2025-24514</font>**<font style="color:rgb(51, 51, 51);">– auth-url 注解注入</font>
+ **<font style="color:rgb(51, 51, 51);">CVE-2025-1097</font>**<font style="color:rgb(51, 51, 51);">– auth-tls-match-cn 注解注入</font>
+ **<font style="color:rgb(51, 51, 51);">CVE-2025-1098</font>**<font style="color:rgb(51, 51, 51);">– mirror UID 注入</font>
+ **<font style="color:rgb(51, 51, 51);">CVE-2025-1974</font>**<font style="color:rgb(51, 51, 51);">– Nginx 配置代码执行</font>

<font style="color:rgb(51, 51, 51);">在实验性攻击场景中，威胁行为者可以通过利用 Nginx 的 client-body buffer 功能，将恶意负载以共享库的形式上传到 Pod，然后向准入控制器发送 AdmissionReview 请求。该请求包含上述配置指令注入之一，导致共享库被加载，从而实现远程代码执行。</font>



### <font style="color:rgba(0, 0, 0, 0.85);">修复建议与缓解措施</font>
<font style="color:rgb(51, 51, 51);">目前这些漏洞已在 Ingress NGINX Controller 的 1.12.1、1.11.5 和 1.10.7 版本中得到修复。建议用户尽快更新到最新版本，并确保准入 Webhook 端点不会对外暴露。</font>



## <font style="color:rgb(51, 51, 51);">02 Nginx Ingress 频繁爆出安全漏洞的根因：架构设计缺陷</font>_<font style="color:rgb(127, 127, 127);background-color:rgb(235, 241, 221);">  
</font>_
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1742980564578-1d0ae7cb-86b7-4472-bc20-8aacb7c0eb11.png)

Ingress Nginx 容器架构（图片来自 kubernetes.io）

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);">Ingress Nginx 安全漏洞频发的背后，是由其不安全的架构设计导致的：将控制面 Ingress Controller 组件（Go 程序），和数据面 Nginx 组件放在一个容器内。虽然社区已经将 Nginx 服务隔离为控制器容器内的容器，一定程度较少了一些安全风险，但是无法完全消除！（控制面和数据面依旧在一个大容器内）</font>

<font style="color:rgb(51, 51, 51);">控制面扮演了 Admin 的角色，管理很多敏感信息，包括 K8s API Server 通信的认证凭证、Nginx 配置文件中的敏感数据、集群内部服务的访问权限等。数据面和控制面共用容器，就会给攻击者通过数据面获取这些敏感信息提供了可乘之机。</font>

<font style="color:rgb(51, 51, 51);">以 CVE-2025-1974 的漏洞为例，其根源在于 Ingress Nginx Controller 的准入控制器（Admission Controller）在处理 </font>`<font style="color:rgb(51, 51, 51);">AdmissionReview</font>`<font style="color:rgb(51, 51, 51);"> 请求时存在输入验证缺陷 ，具体表现为以下两个关键点：</font>

+ <font style="color:rgb(51, 51, 51);">恶意指令注入：攻击者可通过构造特殊的 </font>`<font style="color:rgb(51, 51, 51);">AdmissionReview</font>`<font style="color:rgb(51, 51, 51);"> 请求，向 Nginx 配置中注入 </font>`<font style="color:rgb(51, 51, 51);">ssl_engine</font>`<font style="color:rgb(51, 51, 51);"> 指令。这一漏洞利用了 Nginx 配置生成过程中的逻辑缺陷，允许攻击者绕过安全限制，将恶意指令嵌入配置文件。</font>
+ <font style="color:rgb(51, 51, 51);">动态库加载机制被滥用：结合 Nginx 的 </font>`<font style="color:rgb(51, 51, 51);">client-body buffer</font>`<font style="color:rgb(51, 51, 51);"> 功能，攻击者可将恶意负载（如共享库）注入控制器的运行时环境。当控制器执行 </font>`<font style="color:rgb(51, 51, 51);">nginx -t</font>`<font style="color:rgb(51, 51, 51);"> 命令测试配置时，会加载攻击者指定的恶意库，从而实现远程代码执行（RCE）。</font>

<font style="color:rgb(51, 51, 51);">此外，漏洞的严重性还源于准入控制器的高权限与网络暴露 ：</font>

+ <font style="color:rgb(51, 51, 51);">准入控制器通常拥有集群内的高权限，且若其网络暴露，攻击者可直接利用该漏洞在集群内横向移动，访问所有命名空间的密钥或执行任意代码。</font>
+ <font style="color:rgb(51, 51, 51);">该漏洞无需身份验证即可被利用，进一步降低了攻击门槛。</font>

<font style="color:rgb(51, 51, 51);">综上，此漏洞是配置验证缺陷与动态库加载机制缺陷的组合 ，最终允许攻击者通过注入恶意指令和库完全接管集群。</font>



## <font style="color:rgb(51, 51, 51);">03 架构设计缺陷带来安全问题，还带来稳定性问题</font>
### 运维复杂度高
由于 Nginx Ingress 承担了集群的大量入口流量，稳定性要求很高，通常情况下，我们会通过一系列复杂的配置和运维动作进行保障，例如：_**<font style="color:#DF2A3F;">[2]</font>**_

+ 将其 Pod 独立调度来保证稳定性，比如在节点上设置污点，并在 Ingress Controller 的 Pod 中设置污点容忍让其独占节点资源；
+ 为增强 Ingress 网关可靠性，需要结合业务实际压力设置 Ingress 的副本数和资源分配；
+ 出于网关高峰期弹性考虑，还需要结合 HPA 以支持网关 Pod 水平扩容；
+ Nginx Ingress 实际是由负载均衡器提供的对外访问能力，还需要结合业务考虑负载均衡带宽是否满足高峰期需求。



### 控制面和数据面进行资源抢占导致的稳定性问题
由于 Nginx 反向代理网关是部署在 K8s 集群中的，网关的性能直接受 Pod 资源分配和宿主机性能影响。且如果 Nginx Ingress Controller Pod 所在的节点存在其他业务 Pod，当容器 CPU 负载较高时，会出现资源抢占问题，从而引发稳定性风险。

K8s 为 Pod 提供了 livenessProbe 和 readinessProbe 的存活检查和健康检查机制，官方 Nginx Ingress Controller 的 Deployment 部署模版中也使用了该机制进行网关健康检查。

其健康检查和存活检查使用的是由控制面 Manager 监听的 10254 端口提供的 /healthz 健康检查入口，而 Nginx Ingress 数据面和控制面在同一个容器中，在业务高峰期网关负载较高时，很有可能导致控制面的健康检查接口响应超时。根据 livenessProbe 机制，会引发 Nginx Ingress 网关不断重启导致网关不稳定，流量有损。

此外，控制面 Manager 还负责采集 Prometheus 监控指标，在业务高峰期控制面还可能抢占不到足够的 CPU，出现 OOM，导致容器被 Kill 的情况。  
以上两个 issue 虽然已经在社区被 close，但是控制面和数据面未分开导致的资源抢占问题，防不胜防。



### Nginx 配置更新导致长链接掉线
通过 Nginx Ingress 更新 Nginx 网关路由规则直接将域名和路径订正到 nginx.conf 配置文件，需要更新 Nginx 配置并重新加载才能生效。当应用存在长连接，如 websocket 的情况下，reload 操作会导致业务连接在一段时间后出现明显掉线。  


![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/133108/1742980911642-fcfda9d5-57c6-4b2f-8ff0-4e36ebdf8643.webp)



## 04 自建网关容易忽略的细节
综上可见，Nginx Ingress 网关在 K8s 集群中存在运维难度高、数据面和控制面未分离导致的资源争抢、进程 reload 长连接有损等短板。当我们需要自建 Nginx Controller 时，设想一下，在 K8s 中还需要考虑哪些细节：

+ 不稳定的后端 IP：Pod 的 IP 地址会随应用的重启、迁移、新版本发布频繁的变更。不稳定的后端 IP 让配置难以下手。
+ 频繁更新的配置文件：每次后端应用的变更都需要人工维护 Nginx 配置，当构建多节点的高可用 Nginx 服务时，需要人工保证多节点配置的准确性一致性。
+ 配置持久化：由于 Pod 的不稳定性，当以 Pod 形式部署 Nginx 服务时，每次 Pod 的销毁和新建，在 Pod 中的变更都会丢失，需要持久化保存配置并挂载到多个 Nginx Pod 中。
+ 监控面板对接：需要运维人员自行安装 Nginx 监控模块，并对接到外部监控系统。
+ 访问日志持久化：需要为 Nginx 服务额外挂载持久化数据盘以保存访问日志。

## <font style="color:rgba(255, 255, 255, 0.6);background-color:rgb(25, 25, 25);">  
</font><font style="color:rgb(51, 51, 51);">05 Higress&MSE Ingress：Ingress 的另一种选择</font>
+ <font style="color:rgb(51, 51, 51);">Higress：内核基于 Istio 和 Envoy，采用控制面和数据面分离的架构，采用 xDS 配置下发</font>_**<font style="color:#DF2A3F;">[3]</font>**_<font style="color:rgb(51, 51, 51);">，路由策略生效基于 RDS/ECDS，reload 时对长连接完全无影响，并通过 WASM 支持插件的热更新。从而有效避免本文提到中提到的 Ingress Nginx 安全和稳定性问题。</font>
+ <font style="color:rgb(51, 51, 51);">MSE Ingress：Higress 的商业版，提供公共云服务，在稳定性、性能、云产品间的易用性、可观测性上更有优势。</font>

接下来，我们以 <font style="color:rgb(51, 51, 51);">MSE Ingress 为例，将 Nginx Ingress 和 MSE Ingress 做一个全面的比对。</font>

<font style="color:rgb(51, 51, 51);">MSE Ingress 由 MSE Ingress Controller 和 MSE 云原生网关构成，其中 MSE 云原生网关采用分离架构。</font>

+ **<font style="color:rgb(24, 24, 24);">MSE Ingress Controller</font>**<font style="color:rgb(24, 24, 24);">：不是网络数据平面，它是管理 MSE 云原生网关实例以及配置的控制平面。即 MSE Ingress Controller 不处理任何业务请求流量，它位于流量旁路，管理着处理业务流量的 MSE 云原生网关实例。</font>
+ **<font style="color:rgb(24, 24, 24);">MSE 云原生网关</font>**<font style="color:rgb(24, 24, 24);">：MSE 云原生网关由 MSE Ingress Controller 根据用户配置的 MseIngressConfig 资源创建，包含控制面和数据面。</font>
    - <font style="color:rgb(24, 24, 24);">控制面：监听您已关联的容器服务集群中的 Ingress、IngressClass、Service 等资源，经内部解析之后实时下发给网关数据面。</font>
    - <font style="color:rgb(24, 24, 24);">数据面：数据面是流量治理配置的实施者，按照控制面下发的治理规则处理外部请求，并转发到后端目标服务。</font>



![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1742991331348-811e97d7-77e2-4e5b-bdfa-cbeb1fe69182.png)

<font style="color:rgb(51, 51, 51);">MSE Ingress Controller 负责监听集群中的 MseIngressConfig 资源，协调 MSE 云原生网关实例用于实施Ingress 资源描述的流量管理规则。与 Nginx Ingress Controller 不同，MSE Ingress Controller 是管理 MSE 云原生网关实例以及配置的控制面，MSE Ingress Controller Pod 不直接处理用户请求流量，用户流量的路由和转发由 MSE 云原生网关实例来实现。</font>



| **<font style="color:rgb(24, 24, 24);">比较项</font>** | **<font style="color:rgb(24, 24, 24);">Nginx Ingress</font>** | **<font style="color:rgb(24, 24, 24);">MSE Ingress</font>** |
| :--- | :--- | :--- |
| <font style="color:rgb(24, 24, 24);">产品定位</font> | + <font style="color:rgb(24, 24, 24);">提供七层流量处理能力与丰富的高级路由功能。</font><br/>+ <font style="color:rgb(24, 24, 24);">自有组件，可根据需求进行高度定制。</font> | + <font style="color:rgb(24, 24, 24);">将传统流量网关、微服务网关和安全网关三合一，通过硬件加速、WAF本地防护和插件市场等功能，构建一个高集成、高性能、易扩展、热更新的云原生网关。</font><br/>+ <font style="color:rgb(24, 24, 24);">提供七层流量处理能力与丰富的高级路由功能。支持多种服务发现模式和多种服务灰度策略，包括金丝雀发布、A/B Test、蓝绿部署和自定义流量比例分发。</font><br/>+ <font style="color:rgb(24, 24, 24);">专门面向应用层负载场景，与容器深度集成，网关转发请求时直连后端Pod IP。</font> |
| <font style="color:rgb(24, 24, 24);">产品架构</font> | <font style="color:rgb(24, 24, 24);">基于Nginx+Lua插件扩展。</font> | + <font style="color:rgb(24, 24, 24);">基于开源Higress项目，控制面使用Istiod，数据面使用Envoy。</font><br/>+ <font style="color:rgb(24, 24, 24);">用户独享实例。</font> |
| <font style="color:rgb(24, 24, 24);">基础路由</font> | + <font style="color:rgb(24, 24, 24);">基于内容、源IP的路由。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持HTTP标头改写、重定向、重写、限速、跨域、会话保持等。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持请求方向转发规则和响应方向转发规则，其中响应方向转发规则可以通过扩展Snippet配置实现。</font><br/>+ <font style="color:rgb(24, 24, 24);">转发规则按照最长路径匹配，匹配到多条路径时，转发路径最长的优先匹配。</font> | + <font style="color:rgb(24, 24, 24);">基于内容的路由。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持HTTP标头改写、重定向、重写、限速、跨域、超时和重试等。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持标准的轮询、随机、最小请求数、一致性Hash和预热等负载均衡模式。预热是指在指定时间窗口转发到后端某台机器的流量逐步平滑递增。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持千级别的路由规则。</font> |
| <font style="color:rgb(24, 24, 24);">支持协议</font> | + <font style="color:rgb(24, 24, 24);">支持HTTP和HTTPS协议。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持WebSocket、WSS和gRPC协议。</font> | + <font style="color:rgb(24, 24, 24);">支持HTTP和HTTPS协议。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持HTTP 3.0、WebSocket和gRPC协议。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持HTTP/HTTPS转Dubbo协议。</font> |
| <font style="color:rgb(24, 24, 24);">配置变更</font> | + <font style="color:rgb(24, 24, 24);">非后端端点变更需要Reload进程，对长连接有损。</font><br/>+ <font style="color:rgb(24, 24, 24);">端点变更使用Lua实现热更新。</font><br/>+ <font style="color:rgb(24, 24, 24);">Lua插件变更需要Reload进程。</font> | + <font style="color:rgb(24, 24, 24);">支持配置、证书、插件热更新。</font><br/>+ <font style="color:rgb(24, 24, 24);">采用List-Watch机制，配置变更实时生效。</font> |
| <font style="color:rgb(24, 24, 24);">认证鉴权</font> | + <font style="color:rgb(24, 24, 24);">支持Basic Auth认证方式。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持OAuth协议。</font> | + <font style="color:rgb(24, 24, 24);">支持Basic Auth、OAuth、JWT、OIDC认证。</font><br/>+ <font style="color:rgb(24, 24, 24);">集成阿里云IDaaS。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持自定义认证。</font> |
| <font style="color:rgb(24, 24, 24);">性能</font> | + <font style="color:rgb(24, 24, 24);">性能依赖手动调优，需要进行系统参数调优和Nginx参数调优。</font><br/>+ <font style="color:rgb(24, 24, 24);">需要配置合理的副本数和资源限制。</font> | + <font style="color:rgb(24, 24, 24);">相比开源Nginx Ingress，在CPU水位30%~40%时，TPS高出约90%。</font><br/>+ <font style="color:rgb(24, 24, 24);">启用硬件加速后，提升HTTPS性能约80%。</font> |
| <font style="color:rgb(24, 24, 24);">可观测能力</font> | + <font style="color:rgb(24, 24, 24);">支持通过Access Log采集日志。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持通过Prometheus进行监控和告警配置。</font> | + <font style="color:rgb(24, 24, 24);">支持通过Access Log采集日志（集成SLS和</font><font style="color:rgb(24, 24, 24);">阿里云Prometheus</font><font style="color:rgb(24, 24, 24);">）。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持通过</font><font style="color:rgb(24, 24, 24);">阿里云Prometheus</font><font style="color:rgb(24, 24, 24);">配置监控和告警。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持Tracing（集成TracingAnalysis和SkyWalking）。</font> |
| <font style="color:rgb(24, 24, 24);">运维能力</font> | + <font style="color:rgb(24, 24, 24);">自行维护组件。</font><br/>+ <font style="color:rgb(24, 24, 24);">通过配置HPA进行扩缩容。</font><br/>+ <font style="color:rgb(24, 24, 24);">需要主动配置规格进行调优。</font> | <font style="color:rgb(24, 24, 24);">网关全托管，免运维。</font> |
| <font style="color:rgb(24, 24, 24);">安全</font> | + <font style="color:rgb(24, 24, 24);">支持HTTPS协议。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持黑白名单功能。</font> | + <font style="color:rgb(24, 24, 24);">支持全链路HTTPS、SNI多证书（集成SSL），可配置TLS版本。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持路由级WAF防护（对接阿里云Web防火墙）。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持路由级黑白名单功能。</font> |
| <font style="color:rgb(24, 24, 24);">服务治理</font> | + <font style="color:rgb(24, 24, 24);">服务发现支持K8s。</font><br/>+ <font style="color:rgb(24, 24, 24);">服务灰度支持金丝雀发布、蓝绿发布。</font><br/>+ <font style="color:rgb(24, 24, 24);">服务高可用支持限流。</font> | + <font style="color:rgb(24, 24, 24);">服务发现支持K8s、Nacos、ZooKeeper、EDAS、SAE、DNS、固定IP。</font><br/>+ <font style="color:rgb(24, 24, 24);">支持2个以上版本的金丝雀发布、标签路由，与MSE服务治理结合可实现全链路灰度发布。</font><br/>+ <font style="color:rgb(24, 24, 24);">内置集成MSE服务治理中的Sentinel，支持限流、熔断、降级。</font><br/>+ <font style="color:rgb(24, 24, 24);">服务测试支持服务Mock。</font> |
| <font style="color:rgb(24, 24, 24);">扩展性</font> | <font style="color:rgb(24, 24, 24);">使用Lua脚本。</font> | + <font style="color:rgb(24, 24, 24);">使用Wasm插件，实现多语言编写。</font><br/>+ <font style="color:rgb(24, 24, 24);">使用Lua脚本。</font> |
| <font style="color:rgb(24, 24, 24);">云原生集成</font> | <font style="color:rgb(24, 24, 24);">自行运维组件，与阿里云ACK或ACK Serverless等容器服务结合使用。</font> | <font style="color:rgb(24, 24, 24);">用户侧组件，与阿里云ACK或ACK Serverless等容器服务结合使用，且支持Nginx Ingress核心 Annotation无缝转换。</font> |


<font style="color:rgb(51, 51, 51);"></font>

_**<font style="color:#DF2A3F;">[1] </font>**_[_https://thehackernews.com/2025/03/critical-ingress-nginx-controller.html_](https://thehackernews.com/2025/03/critical-ingress-nginx-controller.html)

_**<font style="color:#DF2A3F;">[2] </font>**_[https://mp.weixin.qq.com/s/rXND432WjsQCErESNjcu5g](https://thehackernews.com/2025/03/critical-ingress-nginx-controller.html)

_**<font style="color:#DF2A3F;">[3] </font>**_[https://mp.weixin.qq.com/s/WCWVHUo3UxcckBriKOlKeQ](https://mp.weixin.qq.com/s/WCWVHUo3UxcckBriKOlKeQ)

<font style="color:rgb(51, 51, 51);"></font>

<font style="color:rgb(51, 51, 51);"></font>




