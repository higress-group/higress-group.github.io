---
id: "question-history-16700"
title: "higress如何使用apikey认证插件，提供案例"
date: "2024-09-03"
category: "expertConsultation"
description: "要使用Higress的API Key认证插件，您可以遵循以下步骤进行配置和使用。这将基于提供的案例和说明来进行详细解答：### 1. 理解API Key认证原理API Key认证是一种简单的鉴权方式，它依赖于一个预先共享的密钥（API Key）来验证请求的发起者是否被授权访问特定资源。Higress"
tags: ["higress","apikey","认证","插件","使用","案例"]
keywords: ["higress","apikey","认证","插件","使用","案例"]
---

## 用户问题 ： 
 higress如何使用apikey认证插件，提供案例  

---------------
## 专家官方解答 ：

要使用Higress的API Key认证插件，您可以遵循以下步骤进行配置和使用。这将基于提供的案例和说明来进行详细解答：

### 1. 理解API Key认证原理
API Key认证是一种简单的鉴权方式，它依赖于一个预先共享的密钥（API Key）来验证请求的发起者是否被授权访问特定资源。Higress的`key-auth`插件允许您从HTTP请求的URL参数或请求头中提取API Key，并验证该Key的有效性及其对应的访问权限。

### 2. 配置全局或特定路由/域名的认证机制
#### 全局配置示例
如果您希望在网关实例级别全局启用API Key认证，配置如下：

```yaml
global_auth: true
consumers:
- credential: 2bda943c-ba2b-11ec-ba07-00163e1250b5
  name: consumer1
- credential: c8c8e9ca-558e-4a2d-bb62-e700dcc40e35
  name: consumer2
keys:
- apikey
- x-api-key
in_query: true
```
在这个例子中，我们定义了两个消费者（consumer1和consumer2），并指定了API Key可以从URL参数`apikey`或请求头`x-api-key`中获取。

#### 路由/域名级配置
对于特定路由或域名，可以在相应的路由规则中指定允许的消费者列表，例如：

```yaml
# 路由级配置
allow:
- consumer1

# 或域名级配置
allow:
- consumer2
```

### 3. 使用API Key发起请求
一旦配置完成，客户端需要在请求中携带正确的API Key。有两种方式可以传递API Key：

- **URL参数**：如`http://xxx.hello.com/test?apikey=YOUR_API_KEY_HERE`
- **请求头**：在HTTP请求头中加入`X-API-Key: YOUR_API_KEY_HERE`

### 4. 验证与响应
- 成功认证后，响应的HTTP头部会包含`X-Mse-Consumer`，显示调用者的名称（如`consumer1`）。
- 如果认证失败，可能会收到以下错误代码：
  - **401 Unauthorized**：未提供API Key，或提供了无效/无权限的API Key。
  - **403 Forbidden**：API Key有效但对应的消费者无权访问请求的资源。

### 总结
通过上述步骤，您可以有效地在Higress中配置并使用API Key认证插件，确保API访问的安全性和可控性。请根据实际需求选择全局或局部启用认证，并确保客户端正确地传递API Key。务必管理好消费者的凭据，以维护系统的安全性。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress Key 认证 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16701)给我们反馈。
