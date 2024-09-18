---
id: "question-history-16707"
title: "如何在higress里获取用户的真实访问IP"
date: "2024-09-03"
category: "expertConsultation"
description: "在 Higress 中获取用户的真实访问 IP，通常涉及到 HTTP 请求头的处理，因为负载均衡器或代理服务器（如 Nginx、HAProxy 或云服务商的负载均衡）会在转发请求时添加特定的 HTTP 头部，用于指示原始客户端的 IP 地址。Higress 作为 Ingress 控制器，需要配置以识"
tags: ["higress","获取","用户","访问","IP","方法"]
keywords: ["higress","获取","用户","访问","IP","方法"]
---

## 用户问题 ： 
 如何在higress里获取用户的真实访问IP  

---------------
## 专家官方解答 ：

在 Higress 中获取用户的真实访问 IP，通常涉及到 HTTP 请求头的处理，因为负载均衡器或代理服务器（如 Nginx、HAProxy 或云服务商的负载均衡）会在转发请求时添加特定的 HTTP 头部，用于指示原始客户端的 IP 地址。Higress 作为 Ingress 控制器，需要配置以识别并使用这些头部来确定真实客户端 IP。

### 分析原因
- **X-Forwarded-For (XFF) Header**: 通常是用来传递原始客户端的 IP 地址，当请求经过多个代理或负载均衡器时，这个头部会包含所有中间节点的 IP，最后一个 IP 通常是原始客户端的 IP。
- **Higress 配置**: 需要正确配置以解析这些头部信息，并将正确的 IP 地址用于日志记录、访问控制或其他目的。

### 解决步骤
虽然直接的配置示例未在提供的知识中给出，但基于通用做法，你可以按照以下步骤配置 Higress 以识别真实访问 IP：

1. **检查现有配置**: 首先，查看现有的 Higress Ingress 规则配置，确认是否已有相关设置处理 `X-Forwarded-For` 或其他类似头部（如 `X-Real-IP`）。

2. **更新或创建 Ingress 规则**: 如果没有相关设置，你需要在对应的 Higress Ingress 规则中添加注解来启用和配置真实 IP 的识别。示例如下，这只是一个示意性的配置，实际配置可能需要根据实际情况调整：

   ```yaml
   apiVersion: networking.k8s.io/v1
   kind: Ingress
   metadata:
     name: example-ingress
     annotations:
       # 注意：此处的注解名称是示意性的，Higress 可能有其特定的注解来处理此类需求
       higress.io/real-ip-header: "X-Forwarded-For"
       higress.io/trusted-proxy-list: "10.0.0.1,10.0.0.2" # 列出你的信任代理 IP，确保它们不会被错误地当作客户端 IP
   spec:
     rules:
     - host: example.com
       http:
         paths:
         - pathType: Prefix
           path: "/"
           backend:
             service:
               name: example-service
               port:
                 name: http
   ```

3. **验证配置**: 应用配置更改后，发送一些测试请求至你的服务，并检查 Higress 生成的日志或访问记录，确认真实客户端 IP 是否被正确识别。

### 解释
- **为什么需要信任代理列表**: 指定信任的代理 IP 是为了安全考虑，确保只有来自这些 IP 的 `X-Forwarded-For` 头部才会被 Higress 使用，避免恶意用户伪造此头部信息。
- **配置灵活性**: Higress 支持多种配置方式，具体实现可能依赖于其内置的功能或通过插件扩展，因此上述配置仅为示例，实际操作时应参照 Higress 最新文档进行。

### 注意
请查阅 Higress 的官方文档，特别是关于配置和服务发现的部分[[Higress 配置](https://higress.io/docs/user/configurations)]，以获取最准确和最新的配置指导。如果有关于特定版本或功能的疑问，直接查询文档或社区论坛将是最佳选择。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：在 K8s 中使用higress 
 
 * 专家经验：higress 能否支持按域名记录访问日志 
 
 * 专家经验：Higress 如何自动发现service 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16721)给我们反馈。
