---
id: "question-history-17136"
title: "我怎么用prometheus监控higress的metrics"
date: "2024-09-19"
category: "expertConsultation"
description: "要使用Prometheus监控Higress的metrics，您可以选择以下两种方式之一进行配置：### 方法1：使用Higress Console的内置监控套件**步骤说明：**1. **添加Higress Helm仓库：**   首先，您需要在您的集群中添加Higress的Helm仓库。这可以通"
tags: ["higress","prometheus","监控","metrics","使用","方法"]
keywords: ["higress","prometheus","监控","metrics","使用","方法"]
---

## 用户问题 ： 
 我怎么用prometheus监控higress的metrics  

---------------
## 专家官方解答 ：

要使用Prometheus监控Higress的metrics，您可以选择以下两种方式之一进行配置：

### 方法1：使用Higress Console的内置监控套件

**步骤说明：**

1. **添加Higress Helm仓库：**
   首先，您需要在您的集群中添加Higress的Helm仓库。这可以通过运行以下命令实现：
   ```bash
   helm repo add higress.io https://higress.io/helm-charts
   ```

2. **安装Higress并启用监控功能：**
   接下来，使用Helm安装Higress，并通过设置`global.o11y.enabled=true`来启用内置的监控套件。如果您的Kubernetes集群不支持`ReadWriteMany`访问模式，请同时设置`global.pvc.rwxSupported=false`。安装命令如下：
   ```bash
   helm install higress -n higress-system higress.io/higress \
       --create-namespace \
       --render-subchart-notes \
       --set global.o11y.enabled=true \
       [--set global.pvc.rwxSupported=false]  # 根据实际情况决定是否添加此行
   ```

3. **访问监控面板：**
   安装完成后，通过浏览器访问Higress Console，从左侧导航栏选择“监控面板”，即可查看到预配置好的监控信息。

### 方法2：使用独立部署的监控套件

如果您更倾向于使用已有的Prometheus和Grafana实例，可以按照以下步骤配置：

1. **配置Prometheus指标采集：**
   在您的Prometheus配置中添加Higress数据面和控制面组件的Metrics端点。这些端点通常会在Higress组件的Service或Pod中以metrics路径的形式存在，具体地址需根据Higress的实际部署情况确定。

2. **创建Grafana监控面板：**
   在Grafana中创建新的Dashboard，利用Prometheus作为数据源，配置查询以展示Higress的相关Metrics。您可能需要查阅Higress的文档以了解有哪些具体的Metrics可用。

3. **集成至Higress Console（可选）：**
   如果希望在Higress Console中展示这个外部的Grafana面板，可以在“监控面板”页面配置外部监控面板的URL。按照页面提示操作，保存配置后即可在Console内直接访问该监控面板。

### 解释：
以上步骤确保了无论您是希望通过Higress自带的简便方案还是利用现有的监控基础设施，都能有效地监控Higress的入口流量和其他关键性能指标。内置监控套件简化了部署和配置过程，而独立部署方案则提供了更高的灵活性和定制化空间。请根据您的实际需求和资源情况选择合适的监控方案。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress 基于 Prometheus 实现入口流量观测 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17148)给我们反馈。
