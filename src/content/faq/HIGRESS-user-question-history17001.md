---
id: "question-history-17001"
title: "higress 本地k8s环境配置与运行"
date: "2024-09-11"
category: "expertConsultation"
description: "在配置与运行Higress于本地Kubernetes（K8s）环境中，您可以遵循以下详细步骤操作：### **阶段一：环境准备与Higress安装**#### **步骤1: 准备Kubernetes集群**- **对于已有本地K8s集群**: 确保您的集群已正确安装并运行。- **新建K8s集群（如"
tags: ["本地","k8s","环境","配置","运行","higress"]
keywords: ["本地","k8s","环境","配置","运行","higress"]
---

## 用户问题 ： 
 higress 本地k8s环境配置与运行  

---------------
## 专家官方解答 ：

在配置与运行Higress于本地Kubernetes（K8s）环境中，您可以遵循以下详细步骤操作：

### **阶段一：环境准备与Higress安装**

#### **步骤1: 准备Kubernetes集群**
- **对于已有本地K8s集群**: 确保您的集群已正确安装并运行。
- **新建K8s集群（如无现成集群）**: 可以使用[kind](https://kind.sigs.k8s.io/)工具快速搭建本地集群。执行命令如下：
  ```bash
  kind create cluster --name higress --config=cluster.conf
  ```

  其中`cluster.conf`应包含针对Higress的必要配置，比如指定节点标签和额外端口映射。

#### **步骤2: 配置节点以支持Ingress流量**
- 确保至少一个节点被标记为`ingress-ready=true`，并开放80和443端口映射至主机，如参考内容所示进行`kubeadmConfigPatches`配置。

#### **步骤3: 添加Higress Helm仓库并安装**
- 添加Higress Helm仓库到你的系统中：
  ```bash
  helm repo add higress.io https://higress.io/helm-charts
  ```
- 安装Higress，特别指定为本地部署模式：
  ```bash
  helm install higress -n higress-system higress.io/higress \
    --create-namespace \
    --render-subchart-notes \
    --set global.local=true \
    --set higress-console.o11y.enabled=false
  ```

### **阶段二：配置Ingress规则**

#### **步骤4: 创建示例服务与Ingress资源**
- 假设您已有一个服务（或按照提供的YAML创建一个测试服务`foo-app`）：
  ```yaml
  # 示例服务YAML
  apiVersion: v1
  kind: Service
  metadata:
    name: foo-service
  spec:
    selector:
      app: foo
    ports:
      - protocol: TCP
        port: 80
        targetPort: 80
  ```

- 创建一个Higress Ingress资源，指向您的服务。例如，创建路由`http://foo.bar.com/foo`至服务`foo-service`：
  ```yaml
  apiVersion: networking.k8s.io/v1
  kind: Ingress
  metadata:
    name: foo-ingress
    annotations:
      ingress.higress.io/rewrite-target: /
  spec:
    rules:
    - host: foo.bar.com
      http:
        paths:
        - path: /foo
          pathType: Prefix
          backend:
            service:
              name: foo-service
              port:
                number: 80
  ```

### **阶段三：验证与调试**

#### **步骤5: 访问与验证**
- 在完成上述步骤后，尝试通过本地浏览器访问`http://foo.bar.com/foo`，您应该能看到由服务返回的"foo"文本。
- 如果使用的是现有的集群且直接访问不成功，可能需要执行端口转发：
  ```bash
  kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
  ```

### **解释说明**
以上步骤首先确保了本地Kubernetes集群的正确配置以支撑Higress的部署需求，特别是对Ingress流量的支持。接着，通过Helm图表安装Higress，并调整必要的设置以适应本地环境。最后，通过创建Ingress资源，实现对外服务的路由配置，确保外部请求能够被正确地转发至目标服务。整个过程覆盖了从环境搭建到服务配置的完整流程，旨在帮助用户快速在本地K8s环境中配置与运行Higress。


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
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17010)给我们反馈。
