---
id: "question-history-17013"
title: "waf 配置详解"
date: "2024-09-11"
category: "expertConsultation"
description: "Higress WAF 配置详解如下：### 1. 功能概述Higress开源版WAF插件旨在为您的应用提供基于OWASP ModSecurity Core Rule Set (CRS)的防护。CRS是一套广泛认可的安全规则集合，用于检测和阻止常见的Web攻击，如SQL注入、跨站脚本(XSS)等。#"
---

## 用户问题 ： 
 waf 配置详解  

---------------
## 专家官方解答 ：

Higress WAF 配置详解如下：

### 1. 功能概述
Higress开源版WAF插件旨在为您的应用提供基于OWASP ModSecurity Core Rule Set (CRS)的防护。CRS是一套广泛认可的安全规则集合，用于检测和阻止常见的Web攻击，如SQL注入、跨站脚本(XSS)等。

### 2. 启用OWASP CRS
要启用OWASP CRS，您需要在配置中设置`useCRS`字段为`true`。这将激活CRS提供的默认安全策略。
```yaml
useCRS: true
```
**链接:** [coreruleset](https://github.com/coreruleset/coreruleset/tree/v3.3.2)

### 3. 配置规则引擎模式
- **观察模式**：此模式下，WAF仅记录潜在的攻击而不实际阻止。适合测试和调试阶段。
  ```yaml
  secRules: 
  - "SecRuleEngine DetectionOnly"
  ```
- **防护模式**：启用后，WAF将按照配置的规则执行防护动作，如拒绝违规请求。
  ```yaml
  secRules: 
  - "SecRuleEngine On"
  ```

### 4. 自定义规则
您可以通过`secRules`字段添加自定义的WAF防护规则，遵循[SecLang语法](https://coraza.io/docs/seclang/directives/)。例如，阻止所有访问/admin路径的请求：
```yaml
secRules: 
- "SecRuleEngine On"
- "SecRule REQUEST_URI \"@streq /admin\" \"id:101,phase:1,t:lowercase,deny\""
```
这条规则会在请求的第一阶段检查`REQUEST_URI`，如果其精确等于`/admin`（忽略大小写），则拒绝该请求。

### 注意事项
- **Body缓存限制**：确保请求和响应Body的大小不超过`downstream.connectionBufferLimits`配置值，以避免请求或响应异常。
- **性能考量**：不要过度增大`downstream.connectionBufferLimits`，以免在网络延迟较高时导致网关内存占用过多。

### 结论
通过上述配置，您可以根据需求灵活调整Higress WAF的行为，从仅记录日志的观察模式到积极阻止威胁的防护模式，并能轻松实现自定义防护规则以应对特定安全场景。请务必在生产环境部署前，充分测试配置以确保业务兼容性和安全性。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress WAF 防护 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17019)给我们反馈。
