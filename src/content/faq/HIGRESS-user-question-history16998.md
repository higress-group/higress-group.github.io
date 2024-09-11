---
id: "question-history-16998"
title: "higress jwt插件"
date: "2024-09-11"
category: "expertConsultation"
description: "Higress JWT插件是用于实现基于JSON Web Tokens（JWT）的认证与鉴权功能的一个组件。它允许您从HTTP请求的不同部分（如URL参数、请求头、Cookie）解析JWT，并验证该Token是否有权限访问目标资源。下面我将根据提供的知识内容，对Higress JWT插件进行详细说明"
---

## 用户问题 ： 
 higress jwt插件  

---------------
## 专家官方解答 ：

Higress JWT插件是用于实现基于JSON Web Tokens（JWT）的认证与鉴权功能的一个组件。它允许您从HTTP请求的不同部分（如URL参数、请求头、Cookie）解析JWT，并验证该Token是否有权限访问目标资源。下面我将根据提供的知识内容，对Higress JWT插件进行详细说明，并提供如何配置与使用此插件的基本指导。

### Higress JWT插件功能概览

- **认证机制**：支持全局或特定域名及路由的JWT认证，确保请求合法性。
- **Token解析位置**：可配置从`Authorization`头、URL参数（默认为`access_token`）、Cookie中提取JWT。
- **JWT验证**：验证Token的有效性，包括签发者(issuer)、签名(jwks)以及过期时间(exp)等。
- **额外处理**：可将JWT载荷(payload)中的指定字段映射到请求头，传递给后端服务；并控制是否保留JWT转发给后端。

### 配置步骤与说明

#### 1. 全局配置

首先，你需要在Higress的全局配置中启用JWT认证插件并定义消费者(consumers)，每个消费者代表一个信任的调用方，需要提供以下信息：
- **`name`**：消费者名称，必填。
- **`jwks`**：JSON Web Key Set的URL，用于验证JWT签名，必填。
- **`issuer`**：JWT的预期签发者，必填。
- **其他可选配置**：如`claims_to_headers`、`from_headers`、`from_params`、`clock_skew_seconds`等，根据实际需求调整。

#### 2. 域名和路由级配置

对于特定的域名或路由，你可以进一步细化认证规则，指定哪些consumer可以访问：
- **`allow`**：数组，列出允许访问的consumer名称，必填。

### 示例配置片段

```yaml
# 全局配置示例
global_config:
  consumers:
    - name: "service_consumer"
      jwks: "https://yourdomain.com/.well-known/jwks.json"
      issuer: "your_issuer"
      from_headers:
        - name: "Authorization"
          value_prefix: "Bearer "
      claims_to_headers:
        - claim: "sub"
          header: "X-User-Id"

# 域名或路由配置示例
routes:
  - name: "secured_api"
    domains: ["api.example.com"]
    allow: ["service_consumer"]
```

### 解释

- **为什么需要这些配置**：这些配置确保了只有携带有效JWT且符合预设条件的请求才能访问受保护的资源，增强了应用的安全性。
- **从哪里获取jwks**：jwks通常由JWT的签发服务器提供，用于校验Token的签名，确保Token未被篡改。
- **claims_to_headers的作用**：此配置帮助将JWT中的用户信息或其他重要声明安全地传递给后端服务，便于后端做进一步的权限控制或日志记录。

通过上述步骤，你可以有效地在Higress中部署并利用JWT插件来保护你的服务和API，实现安全的认证与授权管理。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress JWT 认证 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17007)给我们反馈。
