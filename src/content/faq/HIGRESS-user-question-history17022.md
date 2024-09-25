---
id: "question-history-17022"
title: "higress 网关搭建超详细步骤"
date: "2024-09-26"
category: "expertConsultation"
description: "根据您的问题，您想了解关于Higress网关的超详细搭建步骤。以下是基于提供的知识内容为您整理的指南：### 环境一：在Kubernetes (K8s)中使用#### 阶段一：安装前准备1. **安装必要的工具**：确保您已安装 `kubectl`, `kind` 或者您已有运行中的K8s集群。  "
tags: ["higress","网关","搭建","超详细",""]
keywords: ["higress","网关","搭建","超详细",""]
---

## 用户问题 ： 
 higress 网关搭建超详细步骤  

---------------
## 专家官方解答 ：

根据您的问题，您想了解关于Higress网关的超详细搭建步骤。以下是基于提供的知识内容为您整理的指南：

### 环境一：在Kubernetes (K8s)中使用

#### 阶段一：安装前准备

1. **安装必要的工具**：确保您已安装 `kubectl`, `kind` 或者您已有运行中的K8s集群。
   
#### 阶段二：创建K8s集群（如需）

2. **配置kind集群**：使用如下配置文件`cluster.conf`（内容未直接给出，但应包括上文提及的节点和端口映射配置），在Mac/Linux系统执行：
   ```bash
   kind create cluster --name higress --config=cluster.conf
   kubectl config use-context kind-higress
   ```
   对于Windows系统，使用：
   ```bash
   kind.exe create cluster --name higress --config=cluster.conf
   kubectl.exe config use-context kind-higress
   ```

#### 阶段三：安装Higress

3. **安装Higress Gateway**：通过Helm charts进行安装，并启用本地模式和关闭可观测性功能（如果不需要）：
   ```bash
   helm repo add higress.io https://higress.io/helm-charts
   helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
   ```

#### 阶段四：配置示例服务

4. **部署示例服务**：通过YAML文件部署名为`foo-app`的Pod和服务：
   ```yaml
   # YAML定义略，参照上文给出的示例服务定义
   ```

5. **创建Ingress规则**：定义路由规则，指向刚刚部署的服务，示例如下：
   ```yaml
   # YAML定义略，参照上文给出的Ingress配置
   ```

#### 阶段五：请求验证

6. **验证路由**：使用`curl`命令或浏览器访问以确认路由配置正确无误：
   ```bash
   curl http://GatewayIP/foo -H 'host: foo.bar.com'
   ```

### 环境二：脱离K8s在Docker Compose中使用（可选）

如果您选择不使用K8s环境，而是采用Standalone模式在Docker Compose中部署Higress，可以参考提供的第二部分指南进行安装和配置。这包括使用预设脚本安装Higress，并通过其内置的Nacos或独立部署的Nacos进行服务发现和配置管理。

请注意，上述步骤假设您已具备基本的Kubernetes或Docker Compose操作经验。每个阶段的具体实施细节，包括如何处理可能出现的问题，都可以在Higress官方文档中找到更详尽的指导。

### 总结

通过遵循上述步骤，您可以完成Higress网关从环境搭建、安装配置到服务验证的全过程。对于更高级的配置需求或遇到的特定问题，建议查阅[Higress官方文档](https://higress.io/zh-cn/docs/)获取进一步的帮助和信息。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress 快速开始 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17023)给我们反馈。
