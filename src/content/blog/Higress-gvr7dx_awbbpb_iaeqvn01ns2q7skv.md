---
title: "热联集团：从 APISIX 迁移到云原生网关"
description: "热联集团：从 APISIX 迁移到云原生网关"
date: "2024-11-12"
category: "case"
keywords: ["Higress"]
authors: "CH3CHO"
---

_<font style="color:rgb(136, 136, 136);">作者：金峰（项良）、朱永林、赵世振（寰奕）</font>_<font style="color:rgba(0, 0, 0, 0.9);">  
</font>![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395328-b74c8b52-f083-4758-bef2-083ff742a6f7.png)

# <font style="color:rgb(46, 75, 227);">一、公司简介</font>
<font style="color:rgba(0, 0, 0, 0.9);">杭州热联集团股份有限公司成立于 1997 年 10 月，是隶属杭州市实业投资集团的国有控股公司。公司专业从事国际、国内钢铁贸易黑色大宗商品及产业服务，业务品种涵盖钢铁原料、钢铁产品及以铜为主的有色金属等。</font><font style="color:rgba(0, 0, 0, 0.9);"></font>

<font style="color:rgba(0, 0, 0, 0.9);">2023 年，热联集团实现销售总量 9634 万吨，销售收入 2555 亿元，业绩增长 50%。</font>

<font style="color:rgba(0, 0, 0, 0.9);">2016-2023 年，公司连续八年蝉联中国钢贸企业百强榜综合榜前三。入选国务院国资委“双百行动”企业名单，以及浙江省政府“凤凰计划”名单，被列入浙江省首批内外贸一体化“领跑者”培育企业。</font>

<font style="color:rgba(0, 0, 0, 0.9);">目前热联集团的网点建设遍布国内 31 个城市及境外 17 个国家和地区，业务范围覆盖全球 52 个国家和地区。在全球钢铁、橡胶等大宗商品贸易行业，“热联”品牌享有优异的商业信誉和企业形象。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395158-b4f619a7-1ef6-4a9d-b0f6-831031c324fb.png)

# <font style="color:rgb(46, 75, 227);">二、业务高速发展下面临的挑战</font>
<font style="color:rgba(0, 0, 0, 0.9);">早期，热联自主研发了一系列垂直业务功能系统，包括大宗贸易相关的资金管理和交易系统（如保融资金管理系统、投资系统、量化交易系统等）、企业内部管理相关系统（如 HR 系统、报销系统、企业招投票系统等）、企业经营管理相关系统（如自研 ERP、租赁 SAAS 系统），以及物流交付相关系统（如配送系统、TM、WMS）。这些系统部署在 IDC 的自建 K8S 中，采用微服务架构，通过 Spring Cloud + Nacos 实现微服务应用间的远程调用和服务发现，并使用 APISIX 作为南北向网关，实现统一的认证、鉴权和入口流量管控。</font><font style="color:rgba(0, 0, 0, 0.9);"></font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395135-a727ef0c-6498-44d0-b23b-699b7c9f14d4.png)

<font style="color:rgba(0, 0, 0, 0.9);">然而，随着业务的迅速发展和品牌的日益壮大，原有的技术架构逐渐显露出多方面的瓶颈和挑战：</font>

1. **<font style="color:rgba(0, 0, 0, 0.9);">软件迭代效率低下：</font>**<font style="color:rgba(0, 0, 0, 0.9);">由于所有业务都部署在 IDC 中，每次新业务上线或系统扩容时都需要经过复杂的招采流程，导致交付周期漫长，业务人员对效率问题怨声载道，运维人员也倍感压力。</font>
2. **<font style="color:rgba(0, 0, 0, 0.9);">IT 运维难度大：</font>**<font style="color:rgba(0, 0, 0, 0.9);">开源技术产品的复杂性要求运维人员具备较高的专业技能。例如，Nacos 和 APISIX 的安全漏洞修复和版本升级给运维人员带来了不小的挑战，尤其是出现问题后排查过程非常复杂。</font>
3. **<font style="color:rgba(0, 0, 0, 0.9);">稳定性难以保障：</font>**<font style="color:rgba(0, 0, 0, 0.9);">IDC 中的服务器和网络设备需要专门的供应商和 ISV 来维护，且面临设备过保等问题。部分开源中间件存在稳定性风险，特别是 APISIX，其部署架构包括控制台、服务端和 ETCD 三个组件。ETCD 作为核心中枢，负责存储和推送所有路由规则，一旦崩溃会导致整个网关不可用。由于 ETCD 的运维复杂且问题排查困难，每次崩溃后只能基于备份恢复并重启网关。</font>
4. **<font style="color:rgba(0, 0, 0, 0.9);">资源成本高：</font>**<font style="color:rgba(0, 0, 0, 0.9);">热联的业务具有明显的峰谷特性，非工作时间段请求量极低。但由于招采流程复杂且对稳定性要求高，机房中长期需要冗余一定的机器资源，增加了运营成本。</font>

<font style="color:rgba(0, 0, 0, 0.9);">为了解决这些问题，热联组建了一个由资深技术专家和运维人员组成的研究小组，对市场上的各种解决方案和多家云厂商进行了全面调研和比较，希望找到一套能够实现以下目标的云厂商：</font>

1. <font style="color:rgba(0, 0, 0, 0.9);">核心技术必须是自主可控并且支持信创。</font>
2. <font style="color:rgba(0, 0, 0, 0.9);">无缝的迁移现有的基础架构到完全符合云原生标准的技术栈，同时确保业务过渡时的无损。</font>
3. <font style="color:rgba(0, 0, 0, 0.9);">在微服务架构的 Paas 层中间件和数据库等产品是业界权威且产品自身有很高的可靠性，并且经历了多年的市场验证。</font>
4. <font style="color:rgba(0, 0, 0, 0.9);">灵活性至上，符合业界的主流规范、兼容开源，且提供较强的开放能力，企业可以根据自身的具体情况和标准自主定制，不受平台限制。</font>

<font style="color:rgba(0, 0, 0, 0.9);">最终，热联在阿里云的专家团队的帮助下，找到了一条相对可行的解决路径，阿里云提出的</font>**<font style="color:rgba(0, 0, 0, 0.9);">全栈上云+云原生解决方案</font>**<font style="color:rgba(0, 0, 0, 0.9);">不仅可以满足热联提出的所有研发、运维和稳定的要求，还为企业未来的技术发展提供了强大的支持和灵活的扩展性。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395264-fbd7dca4-5dc1-4db8-8e2b-cf44679a6c00.png)

<font style="color:rgba(0, 0, 0, 0.9);">热联的核心业务系统从 IDC 全栈迁移到阿里云后，稳定性提升了</font><font style="color:rgba(0, 0, 0, 0.9);"> </font>**<font style="color:rgb(255, 104, 39);">100%</font>**<font style="color:rgba(0, 0, 0, 0.9);">、研发效率提升了</font><font style="color:rgba(0, 0, 0, 0.9);"> </font>**<font style="color:rgb(255, 104, 39);">30%</font>**<font style="color:rgba(0, 0, 0, 0.9);">、综合成本下降了</font><font style="color:rgba(0, 0, 0, 0.9);"> </font>**<font style="color:rgb(255, 104, 39);">50%</font>**<font style="color:rgba(0, 0, 0, 0.9);">。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395138-8aeee108-54ef-4656-a937-e9640dbed94e.png)

# <font style="color:rgb(46, 75, 227);">三、微服务架构的性能与稳定性提升</font>
<font style="color:rgba(0, 0, 0, 0.9);">为了提升研发效率和稳定性、热联的核心业务系统都是微服务架构，开发语言以 Java 为主，并且全面拥抱了 Spring Cloud 的生态。一直以来热联对微服务技术都有比较高的追求。因此在云平台的选型上，微服务技术的相关产品需要满足高开放性、高成熟度、高普及度、高可用，四条标准缺一不可。  
</font>

<font style="color:rgba(0, 0, 0, 0.9);">阿里云上的 MSE（微服务引擎）源自阿里巴巴微服务架构的最佳实践，是一个面向业界主流开源微服务生态的一站式微服务平台，提供注册配置中心、云原生网关、微服务治理和分布式任务调度能力。在高可用性方面自 08 年诞生以来历经了多年双十一考验。云上的商业化产品均是多可用区容灾架构，承诺可用性 SLA 99.95%。在高成熟度和高普及度方面，MSE 的注册中心 Nacos 和云原生网关 Higress 在开源社区都有比较强的影响力，并且产品的创始人团队稳定，出现问题后能第一时间找到专业的技术人员兜底。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395801-a31fcf37-c0f4-439d-8081-8fcd083ef1dd.png)

<font style="color:rgba(0, 0, 0, 0.9);">因此，MSE 的 Nacos 和云原生网关就成了微服务技术平替的最佳选择。</font>

### <font style="color:rgb(46, 75, 227);">APISIX 迁移到云原生网关</font><font style="color:rgb(33, 33, 34);"></font>
<font style="color:rgba(0, 0, 0, 0.9);">首先是网关的迁移，阿里的专家们在充分了解的热联 APISIX 的用法后，针对与我们目前 APISIX 上的所有功能用法，云原生网关都给出了功能对标文档和使用实践。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395780-4c274ecb-0242-4aea-ba85-8089a561f85f.png)

<font style="color:rgba(0, 0, 0, 0.9);">在迁移测试过程中，阿里的专家们，针对与我们提出的任何问题都能第一时间响应并快速解决问题，最典型的是在自定义认证鉴方面，原有热联使用的是 APISIX 的 forward-auth，forward-auth 插件实现鉴权比较灵活，用户可以任意定义鉴权服务并暴露鉴权服务的 url，然后鉴权完成后，可以通过 request header 把 clientip、目标路由的 url、token 都传递下去，而现有云原生网关默认的自定义鉴权无办法很好的满足需求，如果想用起来需要我们做一些代码改动。在了解到了我们的问题以后，阿里的专家们只用了 2 天时间就为我们提供了成熟且稳定的 ext-auth 插件，用于实现个性化的自定义鉴权。</font>

<font style="color:rgba(0, 0, 0, 0.9);">在完成所有功能验证后，热联准备把全部流量迁移到云原生网关时，阿里的专家们为我们提供了平滑切流方案。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395870-cead7999-3b70-4188-ba26-01a3c3a83751.png)

<font style="color:rgba(0, 0, 0, 0.9);">通过 DNS weight 的方式热联把所有网关流量都切到了云原生网关以后，再也没有出现过莫名其妙崩溃的问题，</font>**<font style="color:rgb(46, 75, 227);">网关的可用性达到了 100%。</font>**<font style="color:rgba(0, 0, 0, 0.9);">为什么能够取得这么好的结果呢？主要得益于以下几点：</font>

<font style="color:rgba(0, 0, 0, 0.9);">1. 云原生网关孵化自阿里内部，经过历年大促的验证，积累了一套高可用保障方案，从研发时、运行时、变更时来控制风险提升稳定性，在每个阶段各自有手段去保证其高可用目标。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382395936-4af99718-8e22-457e-af2a-e198ae52198b.png)

<font style="color:rgba(0, 0, 0, 0.9);">2. 可扩展性对于软件的重要性毋庸置疑，相比 APISIX 使用的 Lua 扩展机制，云原生网关既可以支持 Lua 扩展，同时也支持 Wasm（WebAssembly）扩展，Wasm 插件天然支持 C++、Rust、Golang、JS 等多语言编写，原生提供插件热插拔与插件配置热更新能力，毫秒级生效，配置变更对长连接无损，且 Wasm 插件运行在安全沙箱中，插件自身的漏洞或者异常崩溃不会影响网关宿主进程，对于异常崩溃的插件也提供了自恢复机制，无需人工干预。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382396033-9a8e326b-13a8-4c3b-a2f7-48b5210c453d.png)

<font style="color:rgba(0, 0, 0, 0.9);">在性能上，目前随着网络安全愈加受重视，现在互联网上已经普遍使用 HTTPS 进行传输加密，在网关侧，用于实现 HTTPS 的 TLS 非对称加密算法是占用 CPU 资源的大头。针对此场景，云原生网关使用了 CPU SIMD 技术实现了 TLS 加解密算法的硬件加速，</font>**<font style="color:rgba(0, 0, 0, 0.9);">通过压测数据表明云原生网关采用软硬一体的加速方案相比普通 HTTPS 请求 TLS 握手时延降低一倍，极限 QPS 提升 80% 以上。</font>**

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382396565-d403e107-4c11-4822-8338-998ac3b9ef25.png)

**<font style="color:rgba(0, 0, 0, 0.9);">在运维效率上，整体提升了 50%，</font>**<font style="color:rgba(0, 0, 0, 0.9);">这主要得益于云原生网关本身是全托管、免运维的。无论实例的开通还是版本的升级亦或是规格的扩缩容都很方便，同时又提供了定时+按指标的弹性能力。令人惊喜的是云原生网关同阿里云上的数字证书管理、注册中心、微服务治理、ARMS、SLS 等产品都做了深度极成。</font>

<font style="color:rgba(0, 0, 0, 0.9);">尤其是可观测方面，云原生网关提供了丰富的可观测数据，包括流量全局看板、日志检索、业务 TOP 榜、延迟/失败率/错误码等多种响应指标等，并辅以报警管理，使运维人员对服务的整体状态及异常情况尽在掌握。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382396559-6a127fad-c043-4d63-8073-952e66bc784e.png)

### <font style="color:rgb(46, 75, 227);">开源 Nacos 迁移 MSE</font><font style="color:rgb(33, 33, 34);"></font>
<font style="color:rgba(0, 0, 0, 0.9);">热联通过 MSE SYNC 工具，把开源的 NACOS 服务都平滑的迁移到了商业版上面。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382396562-83914051-191b-4006-b7a5-44651c5d4c0d.png)

<font style="color:rgba(0, 0, 0, 0.9);">相较开源版的 Nacos，商业版产品在稳定性、性能和运维成本等方面都具备了明显的优势，这也极大的解放了研发和运维人员的生产力，让我们能更加专注业到务开发和运维上。</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1731382396747-f2e1d6a0-1b86-4152-bbe4-3ae37ec3f47f.png)

# <font style="color:rgb(46, 75, 227);">四、未来展望</font>
<font style="color:rgba(0, 0, 0, 0.9);">热联集团在进行了云原生架构的升级与探索后，显著提升了业务系统的稳定性和敏捷性。这一转变不仅为公司冲击更高的销售目标奠定了坚实的技术基础，也标志着热联在数字化转型道路上迈出了关键一步。通过采用微服务、容器化等先进技术手段，热联能够更加灵活地响应市场变化，快速迭代产品和服务，满足客户日益增长的需求。</font><font style="color:rgba(0, 0, 0, 0.9);">  
</font>

<font style="color:rgba(0, 0, 0, 0.9);">这只是热联云原生之旅的一个起点。随着对云原生技术更深层次的理解与应用，预计未来热联将在以下几个方面实现进一步突破：</font>

1. **<font style="color:rgba(0, 0, 0, 0.9);">持续增强系统稳定性：</font>**<font style="color:rgba(0, 0, 0, 0.9);">基于云原生的最佳实践，如自动故障恢复机制、弹性伸缩能力等，可以有效降低因突发流量或硬件故障导致的服务中断风险，确保用户享受到无缝连接的优质体验。</font>
2. **<font style="color:rgba(0, 0, 0, 0.9);">大幅提升运营效率：</font>**<font style="color:rgba(0, 0, 0, 0.9);">利用DevOps理念结合自动化工具链，加快软件开发周期的同时保证高质量交付，使得热联能够在竞争激烈的市场环境中保持领先优势。</font>
3. **<font style="color:rgba(0, 0, 0, 0.9);">优化成本结构：</font>**<font style="color:rgba(0, 0, 0, 0.9);">通过精细化资源管理和按需付费模式，热联将能够更好地控制IT支出，释放更多资金投入到核心竞争力的构建上。</font>
4. **<font style="color:rgba(0, 0, 0, 0.9);">促进创新文化形成：</font>**<font style="color:rgba(0, 0, 0, 0.9);">鼓励团队成员积极探索新技术新方法，营造开放包容的工作氛围，激发员工创造力，推动企业不断向前发展。</font>

<font style="color:rgba(0, 0, 0, 0.9);">展望未来，热联将继续深化其在云原生领域的研究与实践，致力于成为国内领先乃至国际一流的全球化大宗商品产业服务商。我们相信，在强大技术支持下，热联定能在全球范围内树立起中国企业的良好形象。</font>


