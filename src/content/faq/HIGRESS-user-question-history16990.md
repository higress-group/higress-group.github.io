---
id: "question-history-16990"
title: "higress kind集群"
date: "2024-09-11"
category: "expertConsultation"
description: "根据您的问题「higress higress kind集群」，我理解您想了解如何在使用 Kind 部署的 Kubernetes 集群中安装和配置 Higress。Kind 是一个使用 Docker 容器作为节点来运行多节点 Kubernetes 集群的工具，非常适合本地开发和测试。以下是基于提供的知"
---

## 用户问题 ： 
 higress kind集群  

---------------
## 专家官方解答 ：

根据您的问题「higress higress kind集群」，我理解您想了解如何在使用 Kind 部署的 Kubernetes 集群中安装和配置 Higress。Kind 是一个使用 Docker 容器作为节点来运行多节点 Kubernetes 集群的工具，非常适合本地开发和测试。以下是基于提供的知识内容，针对 Kind 集群部署 Higress 的详细步骤：

### 环境准备：Kind 集群的创建与配置

#### 步骤 1：安装 kubectl 和 Kind

对于 MacOS 用户，确保您已经安装了 Homebrew，然后执行以下命令安装 kubectl 和 Kind。这里直接使用了知识中提供的命令，针对 Intel 架构的 Mac：

```bash
# 安装 kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/

# 安装 Kind
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/
```

#### 步骤 2：创建 Kind 集群

接下来，使用 Kind 创建一个新的 Kubernetes 集群。这一步假设您已经有了 Docker 并且它是正在运行的状态。

```bash
kind create cluster
```

### Higress 在 Kind 集群上的安装

#### 步骤 3：添加 Helm 仓库并安装 Higress

由于 Kind 集群通常用于本地开发或测试，我们推荐使用标准的 Helm 仓库安装 Higress，但请确保您的网络环境能够访问外部仓库。

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
```

#### 步骤 4：验证 Higress 安装

安装完成后，检查 Higress Gateway 服务的状态，尽管在 Kind 环境中，您可能不会获得一个外部 LoadBalancer IP，因为 Kind 不支持 LoadBalancer 类型的服务暴露到外部网络。但是，您可以直接通过集群内部的 IP 访问服务。

```bash
kubectl get svc -n higress-system higress-gateway
```

### 注意事项

- **访问 Higress**: 在 Kind 环境下，您可能需要通过 NodePort 方式或者 Port Forwarding 来访问 Higress Gateway 服务。
- **配置调整**: 如果有特定需求，比如想要让 Higress 监听特定的主机端口，可以参考 Higress 的官方文档进行配置调整。
- **资源清理**: 当测试完毕后，记得使用 `kind delete cluster` 命令清理您的 Kind 集群。

以上步骤详细指导了如何在 Kind 集群中部署 Higress，确保遵循每一步的指示以顺利完成部署。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：在 K8s 中使用higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16993)给我们反馈。
