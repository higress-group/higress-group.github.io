---
id: "question-history-16999"
title: "higress jwt插件 鉴权配置详解"
date: "2024-09-11"
category: "expertConsultation"
description: "Higress JWT插件的鉴权配置详细解析如下，这将帮助您理解如何在Higress中配置JWT认证以保护您的服务和API。### 1. 功能概述JWT（JSON Web Tokens）是一种常用的轻量级安全认证方式，它允许各方之间以JSON对象的形式安全地传输信息。Higress JWT插件(`j"
---

## 用户问题 ： 
 higress jwt插件 鉴权配置详解  

---------------
## 专家官方解答 ：

Higress JWT插件的鉴权配置详细解析如下，这将帮助您理解如何在Higress中配置JWT认证以保护您的服务和API。

### 1. 功能概述
JWT（JSON Web Tokens）是一种常用的轻量级安全认证方式，它允许各方之间以JSON对象的形式安全地传输信息。Higress JWT插件(`jwt-auth`)利用JWT实现认证鉴权，支持从HTTP请求的不同来源（如URL参数、请求头、Cookie）解析JWT，并验证其访问权限。

### 2. 全局配置
全局配置影响整个Higress服务的认证行为，包括但不限于：

- **consumers**: 定义服务的调用者，每个consumer需配置其名称、公钥集合(jwks)、签发者(issuer)等，以验证JWT的有效性。
- **global_auth**: 控制认证机制的生效范围，设为true时全局生效，设为false则仅对特定配置的域名和路由生效，若不配置，默认仅当无特定域名和路由配置时全局生效。

### 3. Consumer配置详情
每个consumer的配置涵盖以下关键点：
- **jwks**: JSON Web Key Set的URL，用于验证JWT签名。
- **issuer**: 签发JWT的实体名称，应与JWT的payload中的iss字段匹配。
- **claims_to_headers**: 抽取JWT payload中的指定字段并设置为请求头，转发给后端服务。
- **from_headers**, **from_params**, **from_cookies**: 分别定义从哪里提取JWT。
- **clock_skew_seconds**: 允许的时间偏移量，确保时钟不同步时也能正确验证JWT的有效期。
- **keep_token**: 控制是否在转发请求时携带JWT。

### 4. 从请求中提取JWT
- **from_headers**: 如配置`Authorization`头，且前缀为`Bearer `，则去除前缀后使用剩余部分作为JWT。
- **from_params**和**from_cookies**也提供了从URL参数或Cookie中提取JWT的灵活性。

### 5. 域名和路由级配置
- **allow**: 在域名或路由级别上，明确列出允许访问的consumer名称列表，增强细粒度的访问控制。

### 实施步骤概览
1. **确定Consumer**: 确认服务的调用者，并获取其公钥集合(jwks)和签发者信息。
2. **配置Global Settings**: 决定是否启用全局认证或按需配置特定域名及路由。
3. **配置Consumer细节**: 在Higress配置中添加每个consumer，设置jwks、issuer等必要信息。
4. **选择JWT来源**: 根据应用需求，配置JWT是从请求头、URL参数还是Cookie中提取。
5. **映射Claims至Headers**: 如有需要，配置哪些JWT payload中的字段应被映射为请求头转发给后端。
6. **细化访问控制**: 在需要的域名或路由上，配置允许访问的特定consumer列表。

### 解释
通过上述步骤，您可以确保只有经过有效JWT验证且具有相应权限的请求才能访问受保护的服务。这样的配置不仅提高了安全性，还提供了灵活的认证策略配置能力，适应不同的业务场景需求。特别是通过细致的域名校验和路由级配置，能够实现更加精确的访问控制策略。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress JWT 认证 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17008)给我们反馈。
