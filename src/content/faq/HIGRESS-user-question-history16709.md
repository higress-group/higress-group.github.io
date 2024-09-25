---
id: "question-history-16709"
title: "是要必须配置一个ingress后才会启动端口监听吗"
date: "2024-09-26"
category: "expertConsultation"
description: "根据提供的知识内容，Higress作为一款Ingress控制器，其主要职责是管理进入集群的流量并将其路由到正确的服务上。具体到您的问题：“Higress 是要必须配置一个Ingress后才会启动端口监听吗？”我们可以这样分析：1. **依托知识分析问题原因**：   - Higress通过配置Ing"
tags: ["higress","ingress","端口","监听","配置","启动","必须"]
keywords: ["higress","ingress","端口","监听","配置","启动","必须"]
---

## 用户问题 ： 
 是要必须配置一个ingress后才会启动端口监听吗  

---------------
## 专家官方解答 ：

根据提供的知识内容，Higress作为一款Ingress控制器，其主要职责是管理进入集群的流量并将其路由到正确的服务上。具体到您的问题：“Higress 是要必须配置一个Ingress后才会启动端口监听吗？”我们可以这样分析：

1. **依托知识分析问题原因**：
   - Higress通过配置Ingress资源来定义外部访问集群服务的规则，包括但不限于主机名、路径以及后端服务等。Ingress资源中定义的规则直接关联到Higress如何处理和转发进入的网络请求。
   - 在参考内容中，我们看到配置示例包含了对TLS证书的引用、后端服务的定义以及规则设置，这些均是在Ingress资源中完成的。
   - 另外，在第2篇参考内容中提及了修改Gateway监听端口的信息，虽然具体内容待定(TBD)，但通常修改监听端口的配置也是在更高层次的Gateway资源或Higress本身的配置层面进行的，而非直接由是否存在Ingress资源决定。

2. **回答问题**：
   - Higress启动时，默认会监听标准的HTTP(80)和HTTPS(443)端口以接收外部流量，这是基于Ingress Controller的基本行为，不一定需要存在具体的Ingress资源配置。然而，为了实际处理和路由流量，确实需要至少一个有效的Ingress资源配置来告知Higress如何将流入的请求映射到后端服务。
   - 因此，严格来说，Higress启动并不依赖于存在特定的Ingress资源，但它需要相应的配置来正确地监听和路由流量。配置Ingress资源是实现具体服务路由的必要步骤，而不是启动监听的前提条件。

3. **解释说明**：
   - 即便没有配置任何Ingress规则，Higress可能会初始化并监听预设的端口，等待配置来指导流量的进一步处理。一旦配置了Ingress资源，这些规则就会激活特定的服务路由逻辑，实现从外部访问到内部服务的桥梁。
   - 如果需要修改监听端口或实现更复杂的路由策略（如MTLS双向认证），则需按照相关文档指引正确配置Ingress资源及可能的附加注解或其它Kubernetes资源。

综上所述，Higress启动并不强制要求存在Ingress配置，但为了实现有效的流量管理和路由，配置Ingress资源是不可或缺的。[[参考链接1](#61bddb33)][[参考链接2](#修改-Gateway-监听端口)]


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：负载均衡、会话保持、双向认证-通过Ingress Annotation实现高阶流量治理 
 
 * 专家经验：higress 修改 Gateway 监听端口 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16723)给我们反馈。
