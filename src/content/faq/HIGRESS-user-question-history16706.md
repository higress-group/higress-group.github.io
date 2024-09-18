---
id: "question-history-16706"
title: "higress的启动命令"
date: "2024-09-03"
category: "expertConsultation"
description: "在 Higress 的启动过程中，主要涉及到了在其 Kubernetes (K8s) 集群上的部署。根据提供的 我了解的知识, 启动 Higress 的命令依赖于你的环境，具体分为两个主要场景：标准 K8s 集群和本地 K8s 环境（如使用 kind）。下面是启动 Higress 的详细步骤：###"
tags: ["higress","启动","命令"]
keywords: ["higress","启动","命令"]
---

## 用户问题 ： 
 higress的启动命令  

---------------
## 专家官方解答 ：

在 Higress 的启动过程中，主要涉及到了在其 Kubernetes (K8s) 集群上的部署。根据提供的 我了解的知识, 启动 Higress 的命令依赖于你的环境，具体分为两个主要场景：标准 K8s 集群和本地 K8s 环境（如使用 kind）。下面是启动 Higress 的详细步骤：

### 标准 K8s 集群中启动 Higress

1. **添加 Helm 仓库**
   ```plain
   helm repo add higress.io https://higress.io/helm-charts
   ```
   或对于中国大陆用户加速安装：
   ```plain
   helm repo add higress.cn https://higress.cn/helm-charts
   ```

2. **安装 Higress**
   使用 Helm 安装 Higress 到名为 `higress-system` 的命名空间，并渲染子图表注释：
   ```plain
   helm upgrade --install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
   ```
   或使用中国镜像源：
   ```plain
   helm upgrade --install higress -n higress-system higress.cn/higress --create-namespace --render-subchart-notes
   ```

3. **获取 LoadBalancer IP**
   如果你的集群支持 LoadBalancer 类型的服务，可以通过以下命令获取 Higress Gateway 的外部访问 IP：
   ```plain
   kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
   ```

### 本地 K8s 环境（使用 kind）中启动 Higress

1. **安装 kubectl 和 kind**
   在 MacOS 上，针对 Intel 芯片的安装命令如下：
   ```plain
   curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
   curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
   ```
   注意：请根据你的系统架构和 kind 的最新版本调整下载链接。

2. **配置并创建 kind 集群**（这一步未直接提供命令，但假设你已有或能创建一个 kind 集群）
   
3. **继续按照标准 K8s 集群的步骤从添加 Helm 仓库开始安装 Higress**

### 解释
- **Helm** 是一个包管理工具，用于 Kubernetes 应用的安装和管理。通过 Helm 添加仓库并安装 Higress，简化了部署过程。
- **LoadBalancer IP** 的获取是为了外部能够访问部署在集群内的 Higress Gateway。如果实际环境中无法直接获取 LoadBalancer IP，提供了几种备选方案，确保服务的可访问性。
- 对于本地开发或测试，使用 **kind** 创建轻量级的 K8s 集群，便于在本地模拟云端环境进行快速迭代和测试。

以上步骤详细指导了如何在不同环境下启动 Higress，确保你可以根据自己的实际情况选择合适的部署方式。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：在 K8s 中使用higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>,使用方法：
用法1： 在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。
用法2： 点击[专家答疑页](https://answer.opensource.alibaba.com/docs/intro)（针对部分网站不支持插件嵌入的情况）
### 另：


有其他开源产品的使用问题？[点击访问阿里AI专家答疑服务](https://answer.opensource.alibaba.com/docs/intro)。
### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16720)给我们反馈。
