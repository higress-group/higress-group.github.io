---
id: "question-history-16698"
title: "ip-restriction 怎么配置"
date: "2024-09-03"
category: "expertConsultation"
description: "要配置 Higress 的 `ip-restriction` 插件以实现 IP 限制，您可以遵循以下步骤进行设置，这些步骤直接依据提供的知识内容：### 1. 确定配置需求- **决定限制类型**：首先，您需要确定是要设置 IP 白名单 (`allow`) 还是黑名单 (`deny`)，或者两者结合"
---

## 用户问题 ： 
 ip-restriction 怎么配置  

---------------
## 专家官方解答 ：

要配置 Higress 的 `ip-restriction` 插件以实现 IP 限制，您可以遵循以下步骤进行设置，这些步骤直接依据提供的知识内容：

### 1. 确定配置需求
- **决定限制类型**：首先，您需要确定是要设置 IP 白名单 (`allow`) 还是黑名单 (`deny`)，或者两者结合使用。
- **选择 IP 来源**：决定 IP 地址的获取方式。默认情况下，IP 地址从连接的对端 socket 获取（`origin-source`），但您也可以选择通过特定的 HTTP 头部获取（如 `x-forwarded-for`）。

### 2. 修改配置文件
根据您的需求，编辑 Higress 的配置文件，添加或修改 `ip-restriction` 相关的配置段。以下是配置的示例结构：

```yaml
plugins:
  ip-restriction:
    ip_source_type: <来源类型>  # 选择 "origin-source" 或 "header"
    ip_header_name: <头部名称>  # 当 ip_source_type 为 "header" 时需要设置
    allow:                      # 白名单列表
      - <IP地址或CIDR>
      - ...
    deny:                       # 黑名单列表
      - <IP地址或CIDR>
      - ...
    status: <HTTP状态码>       # 拒绝访问时的HTTP状态码，默认403
    message: <返回信息>         # 拒绝访问时的返回信息，默认'Your IP address is blocked.'
```

#### 示例配置
假设我们希望基于请求头 `x-real-ip` 设置黑名单限制，拒绝 `10.0.0.1` 和 `192.168.0.0/16` 访问：

```yaml
ip_source_type: header
ip_header_name: x-real-ip
deny:
  - 10.0.0.1
  - 192.168.0.0/16
status: 403
message: Access Denied. Your IP is not authorized.
```

### 3. 应用配置更改
保存配置文件后，根据 Higress 的部署方式（如 Docker 容器、Kubernetes 集群或其他环境），应用配置更改。这通常涉及重启服务或更新配置映射等操作。

### 4. 验证配置效果
配置更新后，通过被限制或允许的 IP 地址尝试访问服务，确认限制策略是否按预期工作。检查日志以获取任何错误或拒绝访问的消息，确保配置正确无误。

### 解释
- **ip_source_type** 决定了用于检查的 IP 地址来源，适应不同的网络架构和代理场景。
- **allow** 和 **deny** 列表定义了具体的 IP 访问规则，支持单个 IP 和 CIDR 范围，提供灵活的访问控制。
- **status** 和 **message** 参数让您可以自定义拒绝访问时的响应，增强用户体验或安全性提示。

通过以上步骤，您可以有效地利用 Higress 的 `ip-restriction` 插件来实施 IP 访问控制。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress IP限制 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16699)给我们反馈。
