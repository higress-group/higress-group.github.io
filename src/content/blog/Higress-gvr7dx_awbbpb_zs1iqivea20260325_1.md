---
title: "OpenClaw 依赖的 LiteLLM 被投毒"
description: "OpenClaw 依赖的 LiteLLM 被投毒"
date: "2026-03-25"
category: "ecosystem"
keywords: ["Higress"]
authors: "CH3CHO"
---



北京时间3月24日19点，PyPI 仓库出现了 LiteLLM 1.82.7 版本。13 分钟后，1.82.8 紧随其后。这两个版本没有经过 GitHub 的 PR 流程，官方仓库中找不到对应的 commit。[被第三方安全情报中心监测到这两个版本中混淆了恶意代码](https://mp.weixin.qq.com/s/FXIeUacOcd_xL57fWFefnA)。



恶意代码会窃取受害系统的敏感数据（包括系统环境变量、SSH 密钥、AWS/Azure 云服务凭据、K8s/Git/Docker/数据库配置、SSL 证书私钥、加密钱包配置及密钥等），数据最终被 RSA 加密打包后外传到攻击者服务器；此外，攻击者还会在目标系统中生成脚本后门，并利用系统服务进行后门持久化驻留。



LiteLLM SDK 在 PyPI 仓库历史总下载量超过4.8亿次，包括知名的开源项目 OpenClaw 也依赖了该开源项目。

<!-- 这是一张图片，ocr 内容为：@MATHDROID.11小时 MEVDROID.ETH OPENCLAW USES LITELLM BTW, ENJOY THE REST OF THE DAY 顺便说一下,OPENCLAW使用的是LITELLM,祝你余下的一天过得愉快 DANIEL HNYK@ @HNYKDA.16小时 LITELLM HAS BEEN COMPROMISED,DO NOT UPDATE.WE JUST DISCOVERED THAT LITELLM PYPI RELEASE 1.82.8.IT HAS BEEN COMPROMISED, IT CONTAINS LITELLM INIT.PTH WITH BASE64 ENCODED INSTRUCTIONS TO SEND ALL THE CREDENTIALS IT CAN FIND TO REMOTE SERVER + SELF-REPLICATE. LINK BELOW LITELLM已遭入侵,请勿更新.我们刚刚发现LITELLM的PYPI发布版本 1.82.8已被篡改,其中包含一个名为LITELLMIT,PTH的文件,该文件包含经 过BASE64编码的指令,用于将所有能找到的凭据发送至远程服务器并实 现自我复制.链接如下 山 ,24 7,878 103 -->
![](https://i-blog.csdnimg.cn/img_convert/eea1c57de249fccd2aea8b5d9c15ec2d.png)



Karpathy 在 X 平台警告："像这样的供应链攻击基本上是现代软件中最令人恐惧的事情。"马斯克转发并评论"Caveat emptor"（买者自负）。



## 一些背景信息
PyPI 是 Python 官方的包管理仓库，所有 Python 项目的维护者都会把新版本发布到这里。

  
当企业项目依赖某个 Python 开源项目，开发者们通常会通过运行 pip install -r requirements.txt，pip 会自动从 PyPI 下载所有依赖，这有利于版本的自动化管理。



PyPI 官方对所有发布包，会进行包格式验证、元数据完整性等基础的技术检查，PyPI Token 或密码等身份验证，恶意软件扫描等自动化的审查，但不会提供代码审计、源码一致性验证、沙箱测试等依赖人力或付费资源的测试。



因此这种信任是建立在：相信 PyPI 上的包是安全的，相信包维护者不会上传恶意代码，相信 PyPI Token 不会泄露。



正因为 PyPI 如此便利、如此普及，它才成为攻击者的理想目标。攻击者只需要：

+ 窃取一个 PyPI Token。
+ 推送一个恶意版本。
+ 等待全世界的开发者自动下载。



而开发者几乎不可能发现，因为：

+ `pip install` 是自动化的，没人会检查每个包。
+ 依赖树太深，无法全面审计。
+ 大家习惯性地信任 PyPI。



此次 LiteLLM 被投毒事件，猜测是因为目开发者的 PyPI Token 被盗而引发的。



无独有偶。



此前，DockerHub 也发生了 [OneAPI 镜像被投毒事件](https://mp.weixin.qq.com/s/cGMVehT-8QSKLwbNLnFdHQ)。DockerHub 是世界上最大的容器镜像托管服务，有来自软件供应商、开源项目的超过十万个容器镜像。很多开源软件项目选择在这里发布他们的容器镜像。这使得用户可以很方便地获取、安装和使用这些软件。



## 如何防范 - 镜像投毒
本文作者是另一款开源 AI 网关项目 Higress 的维护成员之一。在关注 Litellm 时，看到了这个问题，所以向大家分享下 Higress 防范此类风险的相关经验。  


Higress 是由阿里云开源的网关软件，基于 API 网关的能力之上构建了 AI 网关能力，并且由阿里云 API 网关这款商业产品背后的研发团队共同维护，而非个人项目。Higress 一直使用阿里云容器镜像服务用于镜像存储，并有自己官方的 Helm 仓库（K8s 环境的安装包管理）。



使用阿里云容器镜像服务至少有两个好处：

+ 不受 DockerHub 网络封禁影响，对国内用户更友好，镜像拉取速度也更快。
+ 可以进行镜像安全扫描，自动拦截有风险的镜像提交。



第二点，也是防范开源镜像投毒的核心，如下截图所示：

<!-- 这是一张图片，ocr 内容为： -->
![](https://i-blog.csdnimg.cn/img_convert/d38f99d2afb4005286f35878a8071ed2.webp?x-oss-process=image/format,png)<font style="color:rgba(255, 255, 255, 0.55);background-color:rgb(25, 25, 25);">  
</font>

基于阿里云容器镜像服务的云原生交付链功能，可以在镜像推送之后，立即进行恶意脚本扫描，如若发现风险可以立即删除镜像。  


此外，每次新版本发布，不依赖人，而是由程序自动完成也很重要。Higress 社区在每次版本 release 发布后，会通过 GitHub Action 自动制作容器镜像以及安装包，镜像仓库密钥基于 GitHub Secret 存储。发布版本的权限可以给到社区里其他合作者，但无需提供给合作者镜像仓库的密码。

<!-- 这是一张图片，ocr 内容为： -->
![](https://i-blog.csdnimg.cn/img_convert/1318013fe4f9fab20b8c0dd019a5fa45.webp?x-oss-process=image/format,png)



## 如何防范 - PyPI 包投毒
不同于镜像投毒，我们可以通过阿里云容器镜像服务来避免。但是 PyPI 包投毒，我们必须要从安全防范体系来应对。



阿里云 API 网关（以开源项目Higress为内核）从架构设计上就将安全性作为第一优先级。针对凭证泄露、恶意攻击、插件投毒等典型威胁，阿里云 API 网关构建了三重纵深防线。



### 第一重防线：KMS密钥托管，凭证从不明文落地
API 网关作为流量入口，需要管理各类敏感凭证。LiteLLM 事件中，攻击者重点收割的正是存储在环境变量和配置文件中的明文密钥。



阿里云 API 网关深度对接阿里云密钥管理服务（KMS），凭证通过KMS进行加密托管，而非以明文形式存储在网关配置中。以消费者认证为例，阿里云API网关支持为API的调用方创建独立的消费者身份，通过API Key对调用者进行身份认证。消费者的API Key由KMS加密存储，网关配置中只保留加密后的引用，凭证明文由KMS统一保管。



这套机制带来了多层安全保障：首先，凭证不会以明文出现在配置文件、环境变量或日志中，从源头上降低了泄露风险；其次，KMS 背后是阿里云 RAM（资源访问管理）的完整权限体系，对凭证的访问有严格的身份认证和权限校验；此外，不同消费者拥有独立的 API Key 和访问权限，即使某个消费者凭据泄露，影响范围也被严格限制在该消费者的权限范围内，不会波及其他凭证。

<!-- 这是一张图片，ocr 内容为：创建消费者 第一步-创建消费者-API-KEY的生成方式选择引用密钥 第二部-创建密钥 创建消费者 创建密钥 0/64 消费者名称 *消费者名称 支持英文斗母,败子,"".",大小耳不酸感,以英文子母或战干开头及结阐,长度至少为2个字府,不相过64个字萨 名称唯一,支持小写字母,数字,下划线".不超过64个字符 支持英文字母,数字, 北京 合用 状态 请输入描述内容 播迷 认证方式 API KEY CI API KEY CC O 系统生成  O 自定义 引用密钥 生成方式 共证来源 *明定密钥 创新心 JWT R JWT R 无速项 HMAC  HMAC R -->
![](https://i-blog.csdnimg.cn/img_convert/e5dea2f9737d324283b47517c9125f0f.png)



### 第二重防线：WAF 防火墙联动，在流量入口筑起安全屏障
阿里云 API 网关可一键对接阿里云Web应用防火墙（WAF），在API网关的流量入口处增加一层强大的安全防护。

API 网关作为所有请求的入口，天然面对各类恶意流量的威胁。对接WAF后，每一笔进入网关的请求都会经过 WAF 的深度检测：

+ **恶意请求拦截**：WAF 维护实时更新的威胁情报库，可自动识别并拦截SQL注入、XSS、命令注入等常见 Web 攻击
+ **异常流量检测**：对请求内容进行深度分析，识别异常的参数构造和攻击特征
+ **CC攻击防护**：防止攻击者对API发起大规模恶意调用，保障后端服务的稳定性
+ **Bot防护**：识别并阻止自动化攻击工具的探测和扫描行为



这相当于在 API 网关的入口处加装了一道智能"安检门"，恶意流量在到达后端服务之前就被识别和拦截。

<!-- 这是一张图片，ocr 内容为：编辑策略:WAF 编辑策略后,策略将立即生效 基本信息 策略名称 策略类型 流量管控 WAT 执行阶段 认证阶段 配置信息 路由级WAF防护已开启 由监: 路由已处于WAF 防护中.如需配置防护规则,请前往WAF 控制台. 关闭路由级WAF防护(不推荐) 前往WAF 控制台配置防护规则 -->
![](https://i-blog.csdnimg.cn/img_convert/b51b2ffbd6c0860e436abc0de50dcf86.png)



### 第三重防线：Wasm 沙箱插件，扩展能力，但隔离风险
API 网关的可扩展性是刚需，但扩展能力往往伴随着安全风险——如果插件代码与网关核心共享同一进程空间，一个有问题的插件就可能影响整个网关。



阿里云API网关基于Higress内核，采用**Wasm（WebAssembly）沙箱插件**机制来解决这一问题。每个Wasm插件运行在独立的沙箱环境中，支持使用Go、Rust、JavaScript等语言编写：

+ **内存隔离**：插件无法访问网关核心进程的内存空间，无法读取其他插件或网关配置中的敏感信息
+ **系统调用受限**：Wasm沙箱严格限制了插件可以发起的系统调用，插件无法扫描文件系统、读取环境变量或随意进行I/O操作
+ **热更新无损**：插件的安装、更新和卸载不需要重启网关进程，支持版本独立升级，对流量完全无损
+ **多语言支持**：支持Go、Rust、JavaScript等多种语言开发，社区贡献的插件代码完全开源可审计



即使某个 Wasm 插件存在安全漏洞，其影响也被严格限制在沙箱内部，不会波及网关管理的凭证和其他敏感资源。**在保持灵活扩展能力的同时，从架构层面实现了安全隔离。**

<!-- 这是一张图片，ocr 内容为：插件 请提宋霜件 认证案权(7) 7 KIGGAS言方 AGENTIDENTITYOAUTH 签权 IGRAS 言方 9 基于 HMAC  算法为 HIIP 通农生成不可伤产,并基干姿名实现身份认证相标权, 基于阿菲云AGENTHERTHTY).稀纳勃队订向通(ASSUMEIRDCFORNDBERIDBERTTY).前路轴朝权 实现基于HITP#85IC AUT 行涂进行认证基权的功能. 业易 配香 安验配面 1 MIGEAN HIGREST 官方 基于BADIS突眼NT的眼状态管理,双天了,NOT无达世出的问题,还可用于胜一些延控控控击及所身收备位法在所 买睡了基于,SON.WHB TOKIE 饭庄至收R9处矩,灭范M.HTIP 请求是,COOKIE 于达加行 口食品化品件 安装配置 安全性载 安装配置 基于CAM2实现身你认证气登权, 安装配置 MLGREAS官方 HIGREAS  实现丁使用范地区为请求独胜为思护 HIGRESS官方 按据特定键值宾没用池,键泊来满可以是UR步起,HTIF请未头. 安装配香 安装|配置 -->
![](https://i-blog.csdnimg.cn/img_convert/7fc490cdf27909f580ce6ab5504c76e5.png)

<font style="color:rgb(20, 20, 20);">值得一提的是，阿里云API网关还提供了专用的WebIDE插件开发环境，支持在线编写、AI辅助生成和一键构建Wasm插件。WebIDE默认集成了云效企业构建流水线，插件的构建过程在云效托管的VPC构建集群中完成——构建任务在企业专有网络内部执行，代码拉取、依赖下载、制品产出全程在VPC内完成，敏感信息不会经过公网暴露。回顾LiteLLM事件，正是CI/CD流水线中引入了被投毒的第三方工具（Trivy），才导致发布凭证被窃取。而阿里云API网关的插件构建流水线由云效托管，构建环境与公网隔离，从构建环节就降低了被外部投毒渗透的风险。</font>

<font style="color:rgb(20, 20, 20);"></font>

### 更多安全能力：全方位守护API安全
除了上述三重核心防线，阿里云 API 网关还提供了一系列安全能力：

+ **mTLS双向认证**：网关与后端服务之间的通信通过双向TLS证书进行身份验证，防止中间人攻击。
+ **JWT/OIDC认证**：内置多种标准认证协议，支持对接企业现有的身份认证体系。
+ **精细化访问控制**：基于消费者维度的调用权限和额度管理，不同团队、不同项目使用独立的凭证和配额。
+ **可观测性**：完善的监控面板，可以实时查看每个路由、每个消费者的调用量和延时，任何异常调用模式都能被快速发现。



目前，LiteLLM 1.82.7 和 LiteLLM 1.82.8 已被 PyPI 下架。

<!-- 这是一张图片，ocr 内容为：LITELLM 1.82.6 LATEST VERSION C RELEASED:MAR 22,2026 L LITELLM INSTALL PIP LIBRARY TO EASILY INTERFACE WITH LLM APL PROVIDERS NAVIGATION RELEASE HISTORY RELEASE NOTIFICATIONSS FEED 三 PROJECT DESCRIPTION 1.82.6 RELEASE HISTORY THIS VERSION MAR 22,2026 DOWNLOAD FILES 1.82.5 VERIFIED DETAILS MAR 21,2026 THESE DETAILS HAVE BEEN VERIFIED BY PYPI -->
![](https://i-blog.csdnimg.cn/img_convert/96a2919bb391ac49a5bec80948b0b47b.png)



> 阿里云API网关：[https://www.aliyun.com/product/api-gateway](https://www.aliyun.com/product/api-gateway)
>
> Higress 开源社区：[https://higress.io](https://higress.io)
>