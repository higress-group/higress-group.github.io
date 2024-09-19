---
id: "question-history-17001"
title: "higress 本地k8s环境配置与运行"
date: "2024-09-19"
category: "expertConsultation"
description: "为了在本地Kubernetes（k8s）环境中配置与运行Higress网关，我们可以遵循以下详细步骤，这些步骤基于提供的知识内容：### 环境准备确保你已具备以下基础环境：- 安装了[kubectl](https://kubernetes.io/docs/tasks/tools/install-ku"
tags: ["本地","k8s","环境","配置","运行","higress"]
keywords: ["本地","k8s","环境","配置","运行","higress"]
---

## 用户问题 ： 
 higress 本地k8s环境配置与运行  

---------------
## 专家官方解答 ：

为了在本地Kubernetes（k8s）环境中配置与运行Higress网关，我们可以遵循以下详细步骤，这些步骤基于提供的知识内容：

### 环境准备

确保你已具备以下基础环境：
- 安装了[kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)。
- 对于Mac/Linux用户，具备执行Bash脚本的能力。
- 对于Windows用户，安装了[kind.exe](https://kind.sigs.k8s.io/docs/user/quick-start/#installation)和[kubectl.exe](https://kubernetes.io/docs/tasks/tools/install-kubectl-windows/)。

### 阶段一：创建本地K8s集群

1. **配置集群**: 创建一个名为`cluster.conf`的文件，内容应包含节点角色和额外端口映射配置，以确保Higress可以通过80和443端口访问：
   ```yaml
   kind: Cluster
   apiVersion: kind.x-k8s.io/v1alpha4
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
   
2. **创建集群**: 根据你的操作系统执行相应的命令：
   - **Mac/Linux**:
     ```bash
     kind create cluster --name higress --config=cluster.conf
     kubectl config use-context kind-higress
     ```
   - **Windows**:
     ```bash
     kind.exe create cluster --name higress --config=cluster.conf
     kubectl.exe config use-context kind-higress
     ```

### 阶段二：安装Higress

3. **添加Higress Helm仓库**:
   ```bash
   helm repo add higress.io https://higress.io/helm-charts
   ```

4. **安装Higress到本地集群**:
   本地安装时，使用`global.local=true`标志来指示Higress适应本地环境，并关闭可观测性特性（如果不需要）以简化配置：
   ```bash
   helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set global.o11y.enabled=false
   ```

### 阶段三：配置示例服务与路由

5. **创建示例服务**（可选，用于验证配置）:
   使用提供的YAML模板创建一个简单的服务`foo-app`及其服务`foo-service`，用于测试路由配置：
   ```bash
   kubectl apply -f - <<EOF
   apiVersion: v1
   kind: Pod
   metadata:
     name: foo-app
     labels:
       app: foo
   spec:
     containers:
     - name: foo-app
       image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
       args:
       - "-text=foo"
   ---
   apiVersion: v1
   kind: Service
   metadata:
     name: foo-service
   spec:
     selector:
       app: foo
     ports:
     - port: 5678
   EOF
   ```

6. **配置路由**:
   - **方法一**（推荐）: 使用[Higress Console](https://higress.io/zh-cn/docs/ops/hgctl)图形界面配置，通过`hgctl dashboard console`命令访问控制台后，根据UI指引创建域名和路由规则。
   - **方法二**: 直接通过Ingress CRD配置，使用如下YAML创建Ingress资源指向服务`foo-service`：
     ```bash
     kubectl apply -f - <<EOF
     apiVersion: networking.k8s.io/v1
     kind: Ingress
     metadata:
       name: foo
       annotations:
         ingressclass.kubernetes.io/is-default-class: "true"
     spec:
       ingressClassName: higress
       rules:
       - host: foo.bar.com
         http:
           paths:
           - pathType: Prefix
             path: "/foo"
             path: /
             backend:
               service:
                 name: foo-service
                 port:
                   number: 5678
     EOF
     ```

### 阶段四：请求验证

7. **验证配置**:
   确认Higress已成功配置并路由到服务，执行如下命令（确保你的本地DNS解析或/etc/hosts文件正确设置了`foo.bar.com`指向Higress的IP地址）：
   ```bash
   curl http://foo.bar.com/foo -H 'host: foo.bar.com'
   ```

### 总结

以上步骤详细说明了如何在本地Kubernetes环境中配置与运行Higress网关，包括集群的创建、Higress的安装、服务及路由的配置，以及最终的验证过程。请根据实际需求选择合适的服务配置方式，并确保每一步操作均执行成功。


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
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=17150)给我们反馈。
