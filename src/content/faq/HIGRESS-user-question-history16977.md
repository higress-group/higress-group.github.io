---
id: "question-history-16977"
title: "详细部署步骤"
date: "2024-09-11"
category: "expertConsultation"
description: "Higress 的详细部署步骤如下：### 1. 添加 Helm 仓库首先，确保你的环境中已经安装了 Helm。接着，添加 Higress 的 Helm 仓库，这个仓库包含了部署 Higress 所需的 chart。```bashhelm repo add higress.io https://hi"
---

## 用户问题 ： 
 详细部署步骤  

---------------
## 专家官方解答 ：

Higress 的详细部署步骤如下：

### 1. 添加 Helm 仓库

首先，确保你的环境中已经安装了 Helm。接着，添加 Higress 的 Helm 仓库，这个仓库包含了部署 Higress 所需的 chart。

```bash
helm repo add higress.io https://higress.io/helm-charts
```

### 2. 更新 Helm 仓库

为了获取最新的 chart 信息，执行以下命令更新你的 Helm 仓库。

```bash
helm repo update
```

### 3. 部署 Higress

使用 Helm 部署 Higress 到 Kubernetes 集群，这里我们部署到名为 `higress-system` 的命名空间，并创建该命名空间（如果尚不存在）。

```bash
helm install higress higress.io/higress -n higress-system --create-namespace
```

此命令默认部署了 Higress 控制面组件 (`higress-controller`) 和数据面组件 (`higress-gateway`)，并使用了一些默认配置，例如监听 `higress` IngressClass 的资源。

### 4. (可选) 自定义部署参数

根据实际需求，你可以自定义一些部署参数，例如调整副本数量、启用特定功能等。例如，要禁用 ALPN 中的 HTTP/2 协议并仅监听指定命名空间，可以使用以下命令：

```bash
helm install higress higress.io/higress \
  -n higress-system \
  --set global.disableAlpnH2=true \
  --set global.watchNamespace=<your-namespace>
```

### 5. (可选) 支持额外功能

- **支持 Istio CRD**: 如果你的集群中已安装 Istio 或需要 Higress 控制器监听 Istio 资源，首先安装 Istio CRD，然后更新 Higress 配置。

```bash
helm install istio-base istio/base -n istio-system --create-namespace
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values
```

- **支持 Gateway API CRD**: 同样地，安装 Gateway API CRD 并更新 Higress 配置以启用对 Gateway API 的支持。

```bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml
helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values
```

### 解释

上述步骤详细介绍了如何使用 Helm 在 Kubernetes 集群中部署 Higress 网关，包括基本部署、自定义配置以及如何扩展支持 Istio CRD 和 Gateway API CRD。每一步骤均基于提供的知识文档中的指导，确保了部署过程的全面性和灵活性。通过调整不同的参数，用户可以根据自己的应用场景定制 Higress 的部署配置。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：higress 使用 Helm 进行云原生部署 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16984)给我们反馈。
