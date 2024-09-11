---
id: "question-history-16991"
title: "higress kind集群部署详解"
date: "2024-09-11"
category: "expertConsultation"
description: "根据您的问题，您想了解关于在Kubernetes（K8s）中使用Higress以及如何在Kind集群上部署Higress的详细步骤。以下是对这一过程的详细解析和指导，依托于提供的知识内容。### 部署准备与环境配置#### 第一步：配置本地环境与Kubernetes集群确保你的本地环境已准备好Kub"
---

## 用户问题 ： 
 higress kind集群部署详解  

---------------
## 专家官方解答 ：

根据您的问题，您想了解关于在Kubernetes（K8s）中使用Higress以及如何在Kind集群上部署Higress的详细步骤。以下是对这一过程的详细解析和指导，依托于提供的知识内容。

### 部署准备与环境配置

#### 第一步：配置本地环境与Kubernetes集群

确保你的本地环境已准备好Kubernetes相关的工具，如`kubectl`和`kind`。对于Mac和Linux系统，可以通过终端执行以下命令安装或更新这些工具：

```shell
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-$(uname)-amd64
chmod +x ./kind
sudo mv ./kind /usr/local/bin/

curl -LO https://dl.k8s.io/release/v1.27.1/bin/darwin/amd64/kubectl
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/
```

对于Windows系统，请参照相应命令执行。这一步骤确保了你有正确的工具来创建和管理Kubernetes集群。

#### 第二步：创建Kind集群并配置

接下来，创建一个Kind集群，特别配置以支持Higress的部署。使用特定的配置文件`cluster.conf`来创建集群，确保控制平面节点带有特定标签及端口映射，以便Higress能够正确地处理流量：

```yaml
apiServerPort: 6443

nodes:

- role: control-plane

kubeadmConfigPatches:

- |

kind: InitConfiguration

nodeRegistration:

  kubeletExtraArgs:

    node-labels: "ingress-ready=true"

extraPortMappings:

- containerPort: 80

  hostPort: 80

  protocol: TCP

- containerPort: 443

  hostPort: 443

  protocol: TCP
```

使用如下命令创建集群：

```shell
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
```

这将创建一个名为'higress'的Kind集群，并配置好必要的端口映射。

### 部署Higress

#### 第三步：安装Higress至Kind集群

使用Helm图表来安装Higress至集群中，并设置全局变量以适应本地部署场景：

```shell
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
```

此命令不仅添加了Higress的Helm仓库，还安装了Higress至名为'higress-system'的命名空间下，并启用了适合本地环境的配置。

### 访问与验证

安装完成后，理论上你可以直接通过本地的80和443端口访问Higress Gateway。但如果你发现无法直接访问，可能是因为端口映射未正确建立，或者你正在使用的不是Kind集群而是其他本地K8s集群。在这种情况下，你可以手动执行端口转发：

```shell
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
```

### 配置路由

一旦Higress成功部署且可以访问，你可以开始配置路由以指向你的服务。例如，为名为`foo`的服务创建路由，使其可通过`http://foo.bar.com/foo`访问。如果服务尚未部署，参考提供的YAML模板创建一个简单的测试服务。

### 总结

通过以上步骤，你可以在Kind集群上完成Higress的部署，并为集群内的服务配置路由。请注意，实际部署时可能需要根据具体情况调整配置细节，比如根据你的网络环境调整端口映射设置或服务发现机制。Higress的官方文档[安装部署](https://higress.io/docs/latest/ops/deploy-by-helm/)提供了更多高级配置和最佳实践信息，建议进一步阅读以满足更复杂的需求。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：在 K8s 中使用higress 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16994)给我们反馈。
