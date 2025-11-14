---
title: "遗憾，Ingress NGINX 要退役了"
description: "遗憾，Ingress NGINX 要退役了"
date: "2025-11-14"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

<font style="color:rgb(33, 37, 41);">作者：望宸</font>

<font style="color:rgb(33, 37, 41);">昨天，Kubernetes 贡献者社区发布了一篇 blog（</font><font style="color:rgb(33, 37, 41);">Ingress NGINX Retirement: What You Need to Know</font><font style="color:rgb(33, 37, 41);">）[1]，Kubernetes SIG Network 和安全响应委员会宣布 Ingress NGINX 退役，公告核心内容包括：</font>

+ <font style="color:rgb(33, 37, 41);">Ingress NGINX 尽力维护服务至 2026 年 3 月</font>
+ <font style="color:rgb(33, 37, 41);">不再发布任何新版本</font>
+ <font style="color:rgb(33, 37, 41);">不再修复任何漏洞</font>
+ <font style="color:rgb(33, 37, 41);">也不会更新任何可能发现的安全漏洞</font>
+ <font style="color:rgb(33, 37, 41);">GitHub 代码库将设置为只读，仅供参考</font>
+ <font style="color:rgb(33, 37, 41);">现有的 Ingress NGINX 部署将继续运行，安装文件也将继续可用</font>

<font style="color:rgb(33, 37, 41);"></font>

## <font style="color:rgb(33, 37, 41);">01 对 Ingress NGINX 采用者会有哪些影响？</font>
从风险、运维、架构三个角度来看：

+ **安全风险加大**
    - 虽然现有版本及安装包“继续可用”，但自 2026 年3 月起将不再有安全补丁或漏洞修复。换言之，后续若发现新漏洞，比如逻辑漏洞、配置注入、供应链攻击等，社区将不会对 Ingress NGINX 做主动响应。
    - 事实上，近期就已发现严重漏洞（如 CVE‑2025‑1974，允许未经授权的 RCE／集群接管）且影响广泛。
    - 对于生产环境、外部暴露服务、甚至内部但有高权限访问的 Ingress 控制器，风险尤为显著。

****

+ **运营维护负担上升**
    - 虽然“继续可用”但实际使用中若遇到 bug、兼容性问题、或新需求（例如新的 Kubernetes 版本、新特性）都不会再有官方支持。运维团队需要自行承担问题定位与修复。
    - 随着时间推移，社区贡献可能也会下降，文档、样例、问题讨论也可能减少，这意味着“使用成本”会逐步上升。
    - 在 SLA、合规、安全审计等环境下，使用已退役组件本身就可能成为审计问题或风险项。

****

+ **架构策略需要调整**
    - 如果团队当前在新项目或未来扩展中继续选用 Ingress NGINX ，意味着技术债务在积累：你在未来将不得不面对迁移成本、替换成本，或者接受“无法主动响应安全问题”这一现实。
    - 对于已有使用 Ingress NGINX 的系统，虽然短期可能继续运行，但长期来说缺乏维护意味着技术路径在生态发展、功能演进方面将落后。



## <font style="color:rgb(33, 37, 41);">02 Ingress NGINX 采用者的应对措施有哪些？</font>
<font style="color:rgb(33, 37, 41);">Ingress NGINX 官方建议：</font>

+ <font style="color:rgb(33, 37, 41);">迁移到 Gateway API[1]</font>
+ <font style="color:rgb(33, 37, 41);">如果必须继续使用 Ingress，Kubernetes 文档I[2]中列出了很多替代的 Ingress 控制器，例如 Azure 的 AKS AKS Application Gateway Ingress Controller、阿里云的 MSE Ingress、Higress 等。</font>

![](https://img.alicdn.com/imgextra/i4/O1CN01QTjWow1OzSW7i6OuV_!!6000000001776-2-tps-2322-1534.png)

![](https://img.alicdn.com/imgextra/i2/O1CN01NxJ4BY1KE33TBBYU3_!!6000000001131-2-tps-2310-746.png)

**<font style="color:rgb(33, 37, 41);"></font>**

<font style="color:rgb(33, 37, 41);">下方 MSE Ingress 和 Higress 为例，提供详细的迁移操作步骤：</font>

+ <font style="color:rgb(33, 37, 41);">迁移到商业方案：</font>[https://help.aliyun.com/zh/mse/user-guide/migrate-from-nginx-ingress-to-mse-ingress](https://help.aliyun.com/zh/mse/user-guide/migrate-from-nginx-ingress-to-mse-ingress)
+ <font style="color:rgb(33, 37, 41);">迁移到开源方案的兼容说明：</font>[https://higress.cn/docs/latest/user/annotation/](https://higress.cn/docs/latest/user/annotation/)<font style="color:rgb(33, 37, 41);">：</font>
+ 时速云的迁移案例：[https://mp.weixin.qq.com/s/IexQXTMpQNo4KxjAp05p8w](https://mp.weixin.qq.com/s/IexQXTMpQNo4KxjAp05p8w)
+ Sealos 的迁移案例：[https://sealos.run/blog/sealos-envoy-vs-nginx-2000-tenants](https://sealos.run/blog/sealos-envoy-vs-nginx-2000-tenants)



## <font style="color:rgb(33, 37, 41);">03 Ingress NGINX 的起源和发展</font>
<font style="color:rgb(33, 37, 41);">Ingress 是最初将网络流量定向到 Kubernetes 上运行的工作负载的友好方式。（Gateway API 是实现许多相同目标的较新方法。）要使 Ingress 在集群中正常工作，必须运行 Ingress 控制器。市面上有许多 Ingress 控制器可供选择，以满足不同用户和使用场景的需求。有些控制器是特定于云提供商的，而另一些则具有更广泛的适用性。</font>

<font style="color:rgb(33, 37, 41);"></font>

<font style="color:rgb(33, 37, 41);">Ingress NGINX是一个 Ingress 控制器，它在 Kubernetes 项目早期作为 API 的一个示例实现而开发。由于其极高的灵活性、丰富的功能以及对任何特定云或基础设施提供商的独立性，它迅速流行起来。此后，社区团体和云原生厂商在 Kubernetes 项目中创建了许多其他的 Ingress 控制器。Ingress NGINX 一直是最受欢迎的控制器之一，被部署在许多托管的 Kubernetes 平台以及无数独立用户的集群中。</font>

<font style="color:rgb(33, 37, 41);"></font>

## <font style="color:rgb(33, 37, 41);">04 挑战与努力</font>
<font style="color:rgb(33, 37, 41);">Ingress NGINX 的广度和灵活性带来了维护方面的挑战。人们对云原生软件的期望不断变化，也加剧了问题的复杂性。一些曾经被认为是有益的功能，如今却被视为严重的安全漏洞，例如通过“代码片段”注解添加任意 NGINX 配置指令。昔日的灵活性如今已变成了难以逾越的技术债务。</font>

<font style="color:rgb(33, 37, 41);"></font>

<font style="color:rgb(33, 37, 41);">尽管 Ingress NGINX 项目在用户中广受欢迎，但它一直面临着维护人员不足甚至勉强维持的问题。多年来，该项目只有一两个人利用业余时间，在工作之余和周末进行开发工作。去年，Ingress NGINX 的维护者宣布计划逐步停止 Ingress NGINX 的维护，并与 Gateway API 社区合作开发一个替代控制器。然而，即使是这样的声明也未能激发更多人参与 Ingress NGINX 的维护或开发 InGate 来替代它。（InGate 的开发从未达到足以成为成熟替代方案的程度；它也将被弃用。）</font>

<font style="color:rgb(33, 37, 41);"></font>

## <font style="color:rgb(33, 37, 41);">05 衷心感谢</font>
<font style="color:rgb(33, 37, 41);">作为云原生领域和开源领域的开发者，我们深知开源项目停止甚至退役，往往是社区不得已的决定。在此衷心感谢 Ingress NGINX 社区贡献者为此创建和维护这个项目所付出的努力。它让开发者在集群内部有了稳定、通用、可声明的流量接入方式，从简单的路径转发到复杂的反向代理，从 TLS 终止到多租户隔离，Ingress NGINX 将传统 Web 服务的成熟理念带入了容器世界。</font>

<font style="color:rgb(33, 37, 41);"></font>

<font style="color:rgb(33, 37, 41);">我们要感谢的不只是代码本身，更是背后那群默默维护它的开发者们。</font>

<font style="color:rgb(33, 37, 41);"></font>

[1] [https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/](https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/)

<font style="color:rgb(33, 37, 41);">[2] </font>[https://gateway-api.sigs.k8s.io/guides/](https://gateway-api.sigs.k8s.io/guides/)

[3] [https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/](https://www.kubernetes.dev/blog/2025/11/12/ingress-nginx-retirement/)


