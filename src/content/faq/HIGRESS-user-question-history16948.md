---
id: "question-history-16948"
title: "higress tcp代理配置步骤"
date: "2024-09-11"
category: "expertConsultation"
description: "根据提供的知识内容，Higress的TCP代理配置步骤可以详细解答如下：### 1. **前置准备**确保满足以下条件：- **Higress安装**：确认Higress已被部署在Kubernetes集群的`higress-system`命名空间下，且其Service名称为`higress-gate"
---

## 用户问题 ： 
 higress tcp代理配置步骤  

---------------
## 专家官方解答 ：

根据提供的知识内容，Higress的TCP代理配置步骤可以详细解答如下：

### 1. **前置准备**
确保满足以下条件：
- **Higress安装**：确认Higress已被部署在Kubernetes集群的`higress-system`命名空间下，且其Service名称为`higress-gateway`。
- **服务目标**：需要为`default`命名空间下的`tcp-echo`服务配置四层路由，该服务监听端口为9000，与网关监听端口一致。
- **Gateway API支持**：Higress需预先配置以支持Gateway API CRD。[相关文档](https://higress.io/docs/latest/ops/deploy-by-helm/#%E6%94%AF%E6%8C%81-gateway-api-crd%E5%8F%AF%E9%80%89)

### 2. **配置步骤**

#### **创建 GatewayClass**
1. **定义配置文件**：创建`gatewayclass.yaml`，内容如下：

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: higress-gateway
spec:
  controllerName: "higress.io/gateway-controller"
```
2. **应用配置**：通过命令应用到集群：

```shell
kubectl apply -f gatewayclass.yaml
```

#### **创建 Gateway**
1. **定义配置文件**：创建`gateway.yaml`，内容如下：

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: higress-gateway
  namespace: higress-system
spec:
  gatewayClassName: higress-gateway
  listeners:
  - name: default-tcp
    protocol: TCP
    port: 9000
    allowedRoutes:
      namespaces:
        from: All
      kinds:
      - kind: TCPRoute
```
2. **应用配置**：通过命令应用到集群：

```shell
kubectl apply -f gateway.yaml
```

#### **修改 higress-gateway Service**
1. **进入编辑模式**：使用命令进入Service的编辑状态：

```shell
kubectl edit service higress-gateway -n higress-system
```
2. **添加端口描述**：在`spec.ports`部分新增9000端口的描述，保存退出。

#### **创建 TCPRoute**
1. **定义配置文件**：创建`tcproute.yaml`，内容如下：

```yaml
apiVersion: gateway.networking.k8s.io/v1alpha2
kind: TCPRoute
metadata:
  name: tcp-echo
  namespace: default
spec:
  parentRefs:
  - name: higress-gateway
    namespace: higress-system
    port: 9000
  rules:
  - backendRefs:
    - name: tcp-echo
      port: 9000
```
2. **应用配置**：通过命令应用到集群：

```shell
kubectl apply -f tcproute.yaml
```

#### **配置验证**
- 使用telnet或类似工具尝试连接`higress-gateway`服务的9000端口，以验证TCP路由配置是否生效。

### 解释
以上步骤依次完成了从定义`GatewayClass`以指定控制器，到创建`Gateway`以配置监听器和路由规则，再到调整`Service`以暴露所需端口，以及创建`TCPRoute`来定义后端服务的整个TCP代理配置流程。每一步都是基于Kubernetes的Gateway API进行，确保了服务的高可用性和灵活性。最后的验证环节是为了确认配置是否正确无误，服务是否按预期工作。


<font color="#949494">---------------</font> 


## 参考链接 ：

* 专家经验：配置 TCP 四层路由 


 <font color="#949494">---------------</font> 
 


## <font color="#FF0000">答疑服务说明：</font> 

本内容经由技术专家审阅的用户问答的镜像生成，我们提供了<font color="#FF0000">专家智能答疑服务</font>，在<font color="#FF0000">页面的右下的浮窗”专家答疑“</font>。您也可以访问 : [全局专家答疑](https://answer.opensource.alibaba.com/docs/intro) 。 咨询其他产品的的问题

### 反馈
如问答有错漏，欢迎点：[差评](https://ai.nacos.io/user/feedbackByEnhancerGradePOJOID?enhancerGradePOJOId=16955)给我们反馈。
