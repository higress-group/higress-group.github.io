---
id: "question-history-16958"
title: "higress 管理面板安装和使用"
date: "2024-09-26"
category: "expertConsultation"
description: "要在Kubernetes集群中安装和使用Higress管理面板，您可以遵循以下详细步骤：### **阶段一：准备与安装Higress**1. **配置集群以支持Higress**   - 首先，确保您的Kubernetes集群已准备好。如果需要从头开始构建集群，可以使用KinD（Kubernetes"
tags: ["higress","管理面板","安装","使用"]
keywords: ["higress","管理面板","安装","使用"]
---

## 用户问题 ： 
 higress 管理面板安装和使用  

---------------
## 专家官方解答 ：

要在Kubernetes集群中安装和使用Higress管理面板，您可以遵循以下详细步骤：

### **阶段一：准备与安装Higress**

1. **配置集群以支持Higress**
   - 首先，确保您的Kubernetes集群已准备好。如果需要从头开始构建集群，可以使用KinD（Kubernetes in Docker）工具。在终端中执行以下命令创建一个名为`higress`的集群，并配置它以便Higress可以通过本地的80和443端口访问：
     ```shell
     kind create cluster --name higress --config=cluster.conf
     ```
     其中`cluster.conf`应包含适当的节点配置，如示例中的添加特定标签和端口映射。

2. **安装Higress**
   - 添加Higress的Helm仓库并安装Higress到名为`higress-system`的命名空间中，同时指定本地部署模式：
     ```shell
     helm repo add higress.io https://higress.io/helm-charts
     helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
     ```

### **阶段二：配置与验证**

#### **配置服务路由**

假设您已有服务部署在default命名空间下，名为`foo`。接下来，配置路由让`http://foo.bar.com/foo`指向这个服务。

1. **通过Ingress CRD配置**
   - 创建一个Ingress资源，指定Higress作为Ingress Class，并定义路由规则：
     ```yaml
     apiVersion: networking.k8s.io/v1
     kind: Ingress
     metadata:
       name: foo
     spec:
       ingressClassName: higress
       rules:
       - host: foo.bar.com
         http:
           paths:
           - pathType: Prefix
             path: "/foo"
             backend:
               service:
                 name: foo-service
                 port:
                   number: 5678
     ```
     使用`kubectl apply -f <filename>.yaml`应用此配置。

#### **或使用Higress Console配置**

- 如果您更倾向于图形界面操作，可以使用`hgctl dashboard console`命令启动Higress控制台，完成管理员账户的初始化后，手动创建域名和路由规则，根据控制台提示进行操作。

### **阶段三：请求验证**

- 验证配置是否生效，通过发送一个请求到配置的路由地址：
  ```shell
  curl http://GatewayIP/foo -H 'host: foo.bar.com'
  ```
  如果一切配置正确，您应该看到"foo"作为响应，表明请求已被正确路由到后端服务。

### **总结**

通过上述步骤，您完成了Higress管理面板的安装、服务路由配置以及功能验证。无论是通过命令行使用Ingress资源还是直观的Higress控制台，都能灵活地管理Kubernetes集群中的服务路由。请确保每一步操作成功后再进行下一步，以确保整个过程的顺畅。[[安装部署文档]](https://higress.io/docs/latest/ops/deploy-by-helm/)提供了更多高级配置和使用细节，可供进一步探索。


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
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16963)给我们反馈。
