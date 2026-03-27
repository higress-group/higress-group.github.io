---
title: "Kubernetes 官方再出公告，强调立即迁移 Ingress NGINX"
description: "Kubernetes 官方再出公告，强调立即迁移 Ingress NGINX"
date: "2026-02-02"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：望宸

### **01 背景**
2025年11月，Kubernetes 贡献者社区发布了一篇公告，Kubernetes SIG Network 和安全响应委员会宣布 Ingress NGINX 退役，核心内容包括：

+ Ingress NGINX 尽力维护服务至 2026 年 3 月
+ 不再发布任何新版本
+ 不再修复任何漏洞
+ 也不会更新任何可能发现的安全漏洞
+ GitHub 代码库将设置为只读，仅供参考
+ 现有的 Ingress NGINX 部署将继续运行，安装文件也将继续可用

### **02 最新**
北京时间1月30日，Kubernetes 指导委员会和安全响应委员会在 _kubernetes.io_ 再次发出公告《Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees》，强调立即迁移 Ingress NGINX，并通过 [CNCF 官方微信公众号](https://mp.weixin.qq.com/s?__biz=MzI5ODk5ODI4Nw==&mid=2247558454&idx=1&sn=e02909f502c875a78682959fd2e5b2db&scene=21#wechat_redirect)发布中文版公告。

![](https://intranetproxy.alipay.com/skylark/lark/0/2026/webp/169256735/1770002959953-7be87514-d0f7-4bb6-bd1a-3eb322d74b9f.webp)

**英文版公告**：https://kubernetes.io/blog/2026/01/29/ingress-nginx-statement/

**中文版公告原文：**

2026 年 3 月，Kubernetes 将停止支持 Ingress NGINX，这个关键组件目前约有一半的云原生环境在使用。项目停止支持的消息已提前多年公开提醒，因项目急需贡献者和维护者。项目停止后，将不再发布任何漏洞修复、安全补丁或其他更新。_**这个问题不能被忽视、推脱或拖到最后一分钟才处理。我们不得不强调事态的严重性，以及立即开始迁移到 Gateway API 或其他第三方 Ingress 控制器等替代方案的重要性。**_

明确说明：在 Ingress NGINX 停止支持后继续使用，将使你和你的用户面临安全攻击风险。_**现有替代方案都不是直接替换品，迁移需要时间和工程资源。大约一半的用户会受到影响。你只有两个月的准备时间。**_

现有部署会继续运行，除非主动检查，否则可能在被攻击后才发现受影响。大部分情况下，可以通过集群管理员权限执行以下命令检查是否依赖 Ingress NGINX：

```plain
kubectl get pods --all-namespaces --selector app.kubernetes.io/name=ingress-nginx
```

尽管 Ingress NGINX 广受欢迎，被各种规模的公司广泛使用，且维护者多次呼吁帮助，但项目一直缺乏足够的贡献者。根据 Datadog 内部研究，约 50% 的云原生环境依赖此工具，但近几年仅由一两名维护者业余时间维护。缺乏足够人员保障工具安全，最负责任的选择是逐步停止维护，转向 Gateway API 等现代方案。

_**我们做出这个决定并非轻率。**_ 虽然现在看来不便，但为了所有用户和整个生态系统的安全，这是必要的。不幸的是，Ingress NGINX 设计时的灵活性曾是一大优势，但现在成了难以解决的负担。技术债务积累和设计缺陷导致安全隐患不断，哪怕有资源也难以继续维护。

_**我们联合发布此声明，强调这一变化的规模及忽视问题带来的严重风险。请务必立即检查你的集群。如果依赖 Ingress NGINX，必须尽快开始迁移计划。**_

感谢大家，

Kubernetes 指导委员会  
Kubernetes 安全响应委员会

### **03 积极扩散**
考虑到 Kubernetes 官方这则公告可能无法通知到所有正在使用 Ingress NGINX 的用户，Higress 团队正努力发挥作用，通过 Higress 开源社区和阿里云客户服务和体验团队的资源，进行积极扩散。

**（推荐）** Ingress NGINX 到 Higress 企业版的迁移方案和服务支持

_文档：https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/migrating-from-nginx-ingress-to-cloud-native-api-gateway_

_**服务钉群：88010006189**_

Ingress NGINX 到 Higress 的开源迁移说明：

_文档：https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/user-guide/annotations-supported-by-apig-ingress-gateways_

_**服务钉群：158095003582**_


