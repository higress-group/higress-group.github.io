---
title: "这家公司对网关性能的优化历程，在 Reddit 上爆了"
description: "这家公司对网关性能的优化历程，在 Reddit 上爆了"
date: "2025-06-18"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：望宸

Sealos 在 Reddit r/kubernetes 社区分享了他们对网关性能的优化历程，包括业务特点带来的生产问题、<font style="color:rgb(51, 61, 66);">应对方案选型、性能比对、代码片段、火焰图、改进成果等，阅读量超4w，并</font>获得了一众国外网友们的点赞。



![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391568157-015fc196-28ea-47b9-a995-bcc1c5fd6536.png)

<font style="color:rgb(51, 61, 66);">我有时几乎感觉自己在工作中从事有影响力的技术工程。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">然后我看到这样的帖子，立刻感觉自己就像一个三岁的小孩，刚刚因为成功地将三角形放入方孔中而受到父亲的表扬，而父亲刚刚将他的 PR 合并到 Linux 内核中……</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">我喜欢有一份薪水优厚、舒适的工作，但是该死的，我可能不得不搬到一个能让我从事目前最先进的工作的地方。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">不过，我的问题是——为了解决这个问题，我们投入了多少人力和加班？团队里一共有多少位 YoE 参与了这项工作？我认识几个工作超过 15 年的人，但我不确定他们是否能为如此规模的工作做出任何贡献。</font>

<font style="color:rgb(51, 61, 66);"></font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391538755-dff2e955-f7aa-4559-91e3-504914ef0853.png)

<font style="color:rgb(51, 61, 66);">我喜欢这些改进，它们不仅能帮助大公司，也能帮助小公司。虽然这些改进可能并不显著，但哪怕只是一点点，也意义非凡。这些细微的改进（对小公司来说）结合起来，可以让他们在同样的硬件上运行更多服务。这与桌面和网络领域的情况正好相反，在桌面和网络领域，我们总是认为计算机性能越来越好，所以没人关心优化。</font>

<font style="color:rgb(51, 61, 66);"></font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391488316-03797683-2a48-4850-a6ca-0a8e0b99c536.png)

<font style="color:rgb(51, 61, 66);">这里终于有一些好的内容，真实的代码片段、火焰图、生产成果……很棒的东西。</font>

<font style="color:rgb(51, 61, 66);"></font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391502215-c0a1aa81-97c5-4778-bc02-2a62ecaf54ec.png)

<font style="color:rgb(51, 61, 66);">这让我感觉自己完全无知，所以这很好。</font>

<font style="color:rgb(51, 61, 66);"></font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391516027-ca14211e-f0e9-4ee9-884f-b5254959d12b.png)

<font style="color:rgb(51, 61, 66);">这就是我们进步的方式！（学会在与更聪明的人交谈时点头）</font>



<font style="color:rgba(0, 0, 0, 0.85) !important;">Sealos 对网关性能的优化经历了两个阶段。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

## <font style="color:rgba(0, 0, 0, 0.85) !important;">阶段一：从 Nginx Ingress 迁移到 Higress</font>
<font style="color:rgba(0, 0, 0, 0.85) !important;">Sealos Cloud 以 K8s 为内核，开发者在 Sealos Cloud 可以快速的创建云应用。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">Sealos 发展过程中，因其极简的产品体验、高性价比的收费模式，用户呈爆发式增长，2024年年初就开始支持 2000 多个租户和 87,000 多名用户。每个用户都去创建应用，每个应用都需要有自己的访问入口，就导致整个集群路由条目非常巨大，需</font>要有支撑数十万条 Ingress 的能力。



另外，在公网提供共享集群的服务，对多租户要求极为苛刻，用户之间的路由必须不能相互影响，需要非常好的隔离性，以及流量控制能力。而 <font style="color:rgba(0, 0, 0, 0.85) !important;">Sealos Cloud 提供的</font>公有云服务员，受攻击面很大，黑客会攻击云上跑的用户应用，也会直接攻击平台的出口网络，安全性上也有非常大的挑战。



这就对控制器的性能和稳定性都提出了比较高的要求，很多控制器路由条目一多时消耗资源会非常大，甚至 OOM 导致网关奔溃。

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">在特定的高规模、多租户 Kubernetes 环境中，Nginx Ingress 的局限性开始凸显出来：</font>

+ **<font style="color:rgb(0, 0, 0) !important;">重新加载不稳定与连接中断</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：频繁的配置变更导致网络不稳定。</font>
+ **<font style="color:rgb(0, 0, 0) !important;">长连接问题</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：更新期间长连接经常被终止。</font>
+ **<font style="color:rgb(0, 0, 0) !important;">规模化性能瓶颈</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：大量 Ingress 条目下，配置传播速度和资源占用面临挑战。</font>

  
Seloas 开始评估<font style="color:rgba(0, 0, 0, 0.85) !important;">其他开源网关，包括 APISIX、Cilium Gateway、Envoy Gateway、Higress，最终 Higress 满足了</font>Seloas <font style="color:rgba(0, 0, 0, 0.85) !important;">对快速配置、控制器稳定性和资源效率的需求，同时还提供了 Nginx Ingress 语法兼容性。完整的评估过程，包括几家开源网关的性能测试，以及未选择其他开源的网关的原因，可查看</font>[《云原生网关哪家强：Sealos 网关血泪史》](https://mp.weixin.qq.com/s?__biz=Mzg5ODkwNTc2Ng==&mid=2247487172&idx=1&sn=1357df27a76272e53a6d0eb071a0d22f&scene=21&poc_token=HL2eRWijwHn-ZZ46ZaJK4Ngm_j3o0UQ9LadoRYJd)<font style="color:rgba(0, 0, 0, 0.85) !important;">。</font>



Seloas 同时强<font style="color:rgba(0, 0, 0, 0.85) !important;">调了，从 Nginx Ingress 迁移走，并非否定 Nginx—— 它在众多场景中表现卓越。但 </font>Seloas <font style="color:rgba(0, 0, 0, 0.85) !important;">认为，在这种规模下遇到的特定挑战和总结的经验，可能为社区提供有价值的参考。</font>



## <font style="color:rgba(0, 0, 0, 0.85) !important;">阶段二：对 Higress、Istio 和 Envoy 底层进行优化，网关性能提升近 100 倍</font>
<font style="color:rgba(0, 0, 0, 0.85) !important;">经过一年多的发展，Sealos Cloud 用户接近 20 万，实例数量达到 4 万，网关在更新 Ingress 配置时变得异常缓慢。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">  
</font><font style="color:rgba(0, 0, 0, 0.85) !important;">虽然 Higress 的性能优于 Nginx。然而，当单个 Kubernetes 集群中的 Ingress 配置超过 2 万时，依然遇到了严重的问题。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">作为公有云服务提供商，Sealos 会分配基于主站域名的二级域名方便用户开发与测试，同时为保证安全，从用户端 (公网) 到集群网关的链路流量采取了 TLS 加密。此外，也支持用户自定义域名 CNAME 解析到其业务的需求，且支持自动签名与续签。这些产品优势与策略导致在同一可用区出现海量二级域名与用户自定义域名共存的情况。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">Sealos 是业界率先做到用同一个 K8s 集群支撑如此海量用户的公有云厂商，但也需要着手解决一个从未有人遇到过难题，即海量域名 Ingress 场景下的网关性能瓶颈。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">目前所有开源生态的产品都没有很好适配单集群海量租户海量应用网关条目的场景，在 Sealos 的观察下，随着域名数量的上升，Ingress 配置同步的时间会非线性劣化，创建 Ingress 后，用户业务需要等待很长一段时间才能从公网访问。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

+ <font style="color:rgba(0, 0, 0, 0.85) !important;"></font>**<font style="color:rgb(0, 0, 0) !important;">问题表现</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：新域名上线需要 10 分钟以上，有时甚至长达 30 分钟。</font>
+ **<font style="color:rgb(0, 0, 0) !important;">影响</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：用户怨声载道，开发工作进度受阻，新增域名会进一步加剧系统延迟。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">因此，Sealos 深入研究了 Higress、Istio、Envoy 和 Protobuf，试图找出问题的根源。也许这些经验能够为其他面临类似大型 Kubernetes Ingress 问题的团队提供帮助。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

### <font style="color:rgba(0, 0, 0, 0.85) !important;">优化过程</font>
**<font style="color:rgb(0, 0, 0) !important;">Istio（控制平面）</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：</font>

+ **<font style="color:rgb(0, 0, 0) !important;">GetGatewayByName 方法效率低下</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：该方法在 LDS 缓存中执行 O (n²) 级别的检查操作。Sealos 通过使用哈希表将其优化为 O (1) 复杂度。</font>
+ **<font style="color:rgb(0, 0, 0) !important;">Protobuf 序列化性能瓶颈</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：频繁的数据格式转换导致性能下降。Sealos 引入缓存机制，确保对象仅需转换一次。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

**<font style="color:rgb(0, 0, 0) !important;">优化结果</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：Istio 控制器的响应速度提升超过 50%。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">  
</font>

**<font style="color:rgb(0, 0, 0) !important;">Envoy（数据平面）</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：</font>

+ **<font style="color:rgb(0, 0, 0) !important;">FilterChain 序列化耗时过长</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：Envoy 将整个 FilterChain 配置转换为文本作为哈希表键值。在处理超过 2 万条 FilterChain 时，即使使用 xxHash 这样的快速哈希算法，性能仍然受到显著影响。</font>
+ **<font style="color:rgb(0, 0, 0) !important;">哈希函数调用频繁</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：absl::flat_hash_map 对哈希函数的调用过于频繁。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

**<font style="color:rgb(0, 0, 0) !important;">解决方案</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：</font>

+ <font style="color:rgba(0, 0, 0, 0.85) !important;">采用递归哈希算法，通过组件哈希值计算整体哈希，避免全量文本转换。</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">实现全面的哈希缓存机制，并开发了 CachedMessageUtil 工具类，对 Protobuf::Message 进行了适当扩展。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

**<font style="color:rgb(0, 0, 0) !important;">优化结果</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：Envoy 中的性能瓶颈问题得到显著改善。  
</font>

### <font style="color:rgb(0, 0, 0) !important;">性能对比</font><font style="color:rgba(0, 0, 0, 0.85) !important;">：</font>
+ **<font style="color:rgb(0, 0, 0) !important;">实验室测试（7000 条 Ingress）</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：Ingress 更新时间从 47 秒缩短至 2.3 秒，提升了 20 倍。</font>
+ **<font style="color:rgb(0, 0, 0) !important;">生产环境（2 万 + 条 Ingress）</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：</font>
    - <font style="color:rgba(0, 0, 0, 0.85) !important;">域名激活时间从 10 分钟以上缩短至 5 秒以内。</font>
    - <font style="color:rgba(0, 0, 0, 0.85) !important;">高峰流量期间不再需要等待 30 分钟。</font>
    - <font style="color:rgba(0, 0, 0, 0.85) !important;">扩展性显著提升，支持更多域名配置。  
</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">关于优化过程的完整技术细节、代码实现和火焰图分析，请参考</font>[《为支撑单集群 10 万级域名，我们把 Sealos 网关性能提升了近 100 倍》](https://mp.weixin.qq.com/s/mabflBxxSUdCgk4bkBGDdA)<font style="color:rgba(0, 0, 0, 0.85) !important;">。</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">这些优化经验不仅适用于 Higress，也揭示了大型 Kubernetes 环境中 Istio 和 Envoy 的常见性能问题。Sealos 在排查过程中积累了许多关于系统性能瓶颈的宝贵经验。</font>



<font style="color:rgb(51, 61, 66);">Reddit 有人进行了总结，任何技术的选择，并不改仅基于</font>口碑和感觉，而要在正式构建前，进行充分的选型和 PoC 验证。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391581230-be978053-391c-43ea-8ad1-47881719fd9d.png)

真的，很多人选择技术都是基于口碑和感觉。然后他们投入大量精力去构建，却没有进行任何负载测试或概念验证 (POC)。上线后才发现，他们的选择让他们失望了，让他们陷入困境。



HAProxy 的同学也非常认同任何选型前都应该进行基准测试，而非给予流行语先入为主。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749396324729-c4cc87cf-955f-4e24-99d1-2060a1767844.png)

<font style="color:rgb(51, 61, 66);">我在 HAProxy 工作。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">在加入公司之前，我测试了各种 HAProxy IC，而 HAProxy Tech 对我来说很有趣，因为它利用的是 Client Native，而不是模板，这是其他几种解决方案的真正瓶颈。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">在 Namecheap，我们从使用 LUA 的 NGINX 迁移到 HAProxy，而 HAProxy Tech 最终显示 TTR（重新配置时间）从 40 分钟缩短至 7 分钟。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">我刚刚在旧金山的舞台上结束演讲，团队公开分享了一项增强功能，其中配置设置从 3 小时缩短到 26 秒：这是一个拥有大量对象的庞大客户。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">有时我觉得技术是通过流行语和趋势来体现的：</font>**<font style="color:rgb(51, 61, 66);">基准测试应该是第一件事，不应带有偏见和先入之见。</font>**

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">除了称赞，更多的网友还是希望能将这些性能优化的突破开源出来，反哺给上游，以便让更多开发者受益。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391469364-15f2778e-c91e-4d8e-9e23-6fe07cb0a9bb.png)

<font style="color:rgb(51, 61, 66);">我希望这些突破已经作为 PR 推送到原始存储库，以便上游项目和社区能够从中受益。</font>



这位网友迫不及待的想分享自家公司更短<font style="color:rgba(0, 0, 0, 0.85);">域名激活时</font>间，生产环境2 万 + 条 Ingress 情况下，仅需要不到50ms！

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391444511-59b4317d-1877-4d82-8c87-524e0a8d0fad.png)

<font style="color:rgb(51, 61, 66);">很好的改进！ 需要说明的是，O（n²）代码不在 Istio 中，而是在 Istio 的一个分支中。此外，5 秒仍然太长 :-) 请继续关注，我将分享我们如何在 20k 域规模上以 50ms 实现此目的。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">但对于 </font>Sealos 为什么不设计成分散多个小集群，国外网友也提出了疑问。

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749391555715-469ac5ed-cd24-4e55-85eb-90af16bc07d3.png)

<font style="color:rgb(51, 61, 66);">读完整篇文章后还有一些问题：</font>

<font style="color:rgb(51, 61, 66);">1、将所有这些入口都集中到一个集群真的是最好的方法吗？将它们分成几个较小的集群不是更有意义吗？</font>

<font style="color:rgb(51, 61, 66);">2、etcd 在这种规模下的性能如何？你们在其中也运用了一些创新技巧吗？</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">顺便说一句，这篇文章太棒了！我会试着找几个同事来个临时研讨会，好好学习一下这个例子。真是太棒了。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">作者回复到：</font>

<font style="color:rgb(51, 61, 66);">1、在维护高性能基础设施时，我们优先考虑计算资源的利用率。单体集群的设计使其在效率方面自然出众。目前，在多个小型集群之间复制相同的效率仍然具有挑战性。即使是小型集群，随着工作负载（包括但不限于入口资源）的增长，也不可避免地会面临扩展限制。我们的性能团队专注于从根本架构层面解决这些问题，而不是将工作负载拆分作为权宜之计。虽然接近单个集群的极限会带来一些挑战，但我们认为这些挑战是可以解决的工程挑战，而不是阻碍。</font>

<font style="color:rgb(51, 61, 66);"></font>

<font style="color:rgb(51, 61, 66);">2、我们之前遇到过 I/O 瓶颈问题，目前可以通过将生产环境磁盘升级到更高层级来暂时解决。目前，调查代码中的根本原因并非我们的首要任务，但我们正在进行调查。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/133108/1749393339693-3786cede-27dd-42e2-8c56-01239960ed10.png)



**<font style="color:rgb(0, 0, 0) !important;">欢迎留言探讨</font>**<font style="color:rgba(0, 0, 0, 0.85) !important;">：</font>

+ <font style="color:rgba(0, 0, 0, 0.85) !important;">您在大规模扩展 Kubernetes Ingress 或服务网格时是否遇到过类似的性能问题？</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">您使用哪些工具和方法来识别和解决 Istio/Envoy 的性能问题？</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">对于处理大量 Ingress 配置，您有什么独特的经验和建议？</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">原贴链接：</font>[https://www.reddit.com/r/kubernetes/comments/1l44d4y/followup_k8s_ingress_for_20k_domains_now_syncs_in/](https://www.reddit.com/r/kubernetes/comments/1l44d4y/followup_k8s_ingress_for_20k_domains_now_syncs_in/)


