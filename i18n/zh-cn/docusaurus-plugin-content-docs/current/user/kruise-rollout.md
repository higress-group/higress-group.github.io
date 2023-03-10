---
title: 通过 OpenKruise Rollout 实现灰度发布
keywords: [rollout,gray]
description: 通过 OpenKruise Rollout 实现灰度发布
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/kruise-rollout.md
---

# 通过 OpenKruise Rollout 实现灰度发布

在业务高速发展过程中，如何最大化保障功能迭代过程中业务流量无损一直是开发者比较关心的问题。通常在应用发布新功能阶段，我们会采用灰度发布的思想对新版本进行小流量验证，在符合预期之后再进行全量发布，这就是"渐进性交付"。该词最早起源于大型、复杂的工业化项目，它试图将复杂的项目进行分阶段拆解，通过持续进行小型闭环迭代降低交付成本和时间。随着云原生架构不断发展，渐进性交付被广泛应用在互联网业务应用中，开发者通过GitOps、CI/CD方式集成渐进式交付框架，让新功能交付以流水线的方式分批执行，利用A/B 测试、金丝雀发布等技术精细化控制每一批次的流量策略，充分保障应用发布的稳定性。

## 什么是Kruise Rollout
Kruise Rollout 是阿里云开源的云原生应用自动化管理套件 OpenKruise 在渐进式交付领域的新尝试，支持配合流量和实例灰度的金丝雀发布、蓝绿发布、A/B Testing 发布，以及发布过程能够基于 Prometheus Metrics 指标自动化分批与暂停，并提供旁路的无感对接、兼容已有的多种工作负载（Deployment、CloneSet、DaemonSet）。

这里，熟悉 Kubernetes 的小伙伴可以会疑惑，官方的 Deployment 工作负载不是有控制发布的策略吗？我们为什么还需要 Kruise Rollout 呢？

首先，Kubernetes 官方的 Deployment 中定义发布策略严格上不符合渐进性交付的思想，它实际是滚动发布。虽然 Deployment 对于升级而言提供了 maxUnavailable 和 maxSurge 两个参数，但是本质上来讲 Deployment 它只支持流式的一次性发布，用户并不能控制分批以及精细化的流量策略。比如用户无法严格控制新老版本之间的流量比例，只能根据实际 Pod 数量占比以及调用端的负载均衡策略；用户无法做 A/B testing 策略，例如限制公司内部员工可以访问新版本。当新版本出现问题，只能重新执行一遍滚动发布切回老版本，这样不仅回滚速度慢，而且频繁线上变更本身就具有极高的不稳定因素。

再者，Kubernetes 只提供了应用交付的 Deployment 控制器，以及针对流量的 Ingress、Service 抽象，但是如何将上述实现组合成开箱即用的渐进式交付方案，Kubernetes 并没有出标准的定义。

出于以上问题和考量，阿里云开始发起对渐进式领域的探索，结合多年来容器化、云原生的技术沉淀，推出了无侵入、可扩展、高易用的渐进式交付框架 Kruise Rollout。

## Higress & Kruise Rollout工作机制
简单介绍一下 Higress 和 Kruise Rollout 在一次应用发布过程中的工作机制。

![image](https://img.alicdn.com/imgextra/i2/O1CN01LN9dRY1iiJiG17N36_!!6000000004446-2-tps-1080-500.png)

这里，假设集群中有一个 Deployment 应用A，通过 Higress 网关对外暴露提供服务。应用A由于业务发展，需要发布新功能。
1. 用户首先在集群中添加渐进性交付策略（Rollout CRD资源），描述目标工作负载的交付策略，比如批次，每一批次的流量控制，以及关联的 Service 资源和 Ingress 资源。
2. 应用A发布新版本，用户修改集群上中目标Deployment的Pod模板中容器镜像为新版本。
3. Kruise Rollout通过hook方式参与到Deployment滚动发布流程，修改Deployment的Pause来暂停滚动发布过程。
4. 执行第一次批次发布，根据Rollout CRD资源描述的交付策略，控制新版本的Pod数量，同时为正式Ingress资源生成对应的灰度Ingress资源，并配置灰度流量策略，比如流量权重比或者根据请求内容Header进行流量分发。Higress监听到Ingress资源变化，实时动态修改路由规则，满足灰度规则的流量被分发到新版本。
5. 通过Prometheus等监控手段观察应用流量的指标信息，验证新版本是否符合预期。
  a. 如果符合预期，触发下一次批次发布，重复执行步骤4
  b. 如果不符合预期，触发回滚，新发布的Pod下线，灰度已下线的部分老版本的Pod，Ingress资源自动下线灰度规则，Higress实时修改路由规则，确保流量只访问老版本服务。

整个 Rollout 过程，自动整合Deployment、Service、Ingress一起工作，并向用户屏蔽底层资源变化。这是与现有工作负载能力的一种协同，它尽量复用工作负载的能力，又做到了非 Rollout 过程的零入侵。

## 实战
### 前提条件
1. 安装Higress，请参阅[安装部署](../ops/deploy-by-helm.md)
2. 安装Kruise Rollout
```
helm install kruise-rollout openkruise/kruise-rollout --version 0.3.0-rc.0
```
3. 安装kubectl-kruise命令行工具，请参阅[安装kubectl-kruise](https://github.com/openkruise/kruise-tools/blob/main/README.md)


### 金丝雀发布
#### 什么是金丝雀发布
金丝雀发布的思想是将少量的请求引流到新版本上，因此部署新版本服务只需极小数的机器。验证新版本符合预期后，逐步调整流量权重比例，使得流量慢慢从老版本迁移至新版本，期间可以根据设置的流量比例，对新版本服务进行扩容，同时对老版本服务进行缩容，使得底层资源得到最大化利用。

如图，某服务当前版本为v1，现在新版本v2要上线。为确保流量在服务升级过程中平稳无损，采用金丝雀发布方案，逐步将流量从老版本迁移至新版本。

![image](https://img.alicdn.com/imgextra/i2/O1CN01iHCuzf220cEiziyVK_!!6000000007058-2-tps-750-602.png)

#### 基于Higress & Kruise Rollout实践金丝雀发布
假设集群中有一个服务demo，通过Higress网关对外提供服务。
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo
spec:
  replicas: 5
  selector:
    matchLabels:
      app: demo
  template:
    metadata:
      labels:
        app: demo
    spec:
      containers:
      - name: main
        image: registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v1
        imagePullPolicy: Always
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: demo
spec:
  ports:
  - port: 80
    targetPort: 8080
    protocol: TCP
    name: http
  selector:
    app: demo
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: demo
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - http:
      paths:
      - backend:
          service:
            name: demo
            port:
              number: 80
        path: /version
        pathType: Exact
```

现在，服务demo需要发布新版本。在修改应用镜像之前，我们需要为服务demo定义金丝雀发布策略，以达到渐进式发布的效果。
```
apiVersion: rollouts.kruise.io/v1alpha1
kind: Rollout
metadata:
  name: rollouts-demo
spec:
  objectRef:
    workloadRef:
      apiVersion: apps/v1
      kind: Deployment
      name: demo
  strategy:
    canary:
      steps:
      - weight: 10
        pause: {}
        replicas: 1
      - weight: 30
        pause: {}
        replicas: 2
      trafficRoutings:
      - service: demo
        type: nginx
        ingress:
          name: demo
```
- 其中workloadRef 旁路式的选择需要 Rollout 的 Workload，此处为Deployment，支持其他Workload（如CloneSet、DaemonSet）。
- 其中canary.Steps 定义了整个 Rollout 过程一共分为3批，其中第一批只灰度一个新版本 Pod，并且 routing 10% 流量到新版本 Pod，并且需要人工确认是否继续发布；第二批只灰度两个新版本Pod，并且routing 30%流量到新版本Pod，并且需要人工确认是否继续发布；最后一批，无需定义，即全量发布。
- 其中trafficRoutings指向了需要感知流量规则的资源，kruise rollout会自动更新相关资源，实时反射目标流量规则。


修改服务A的Deployment中镜像为`registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2`，观察相关资源变化。


查看rollout资源状态，发现当前执行完第一批发布，并且出于暂停状态，需要人工确认才能继续下一批次发布。
![image](https://img.alicdn.com/imgextra/i3/O1CN0181SARr1GOLC66FHHS_!!6000000000612-2-tps-2878-148.png)

查看pod状态，发现新版本pod只有一个，Deployment资源没有全部滚动发布。
![image](https://img.alicdn.com/imgextra/i3/O1CN01213qEY1wMhdwdrwgF_!!6000000006294-2-tps-1302-374.png)

查看Ingress的解析IP （即Higress网关对外的公网IP地址）。
![image](https://img.alicdn.com/imgextra/i1/O1CN017JZsSv1okVIhWfZiT_!!6000000005263-2-tps-1228-188.png)

测试流量，发现有10%流量访问新版本。
![image](https://img.alicdn.com/imgextra/i4/O1CN017gtzTT244OjzdzGcZ_!!6000000007337-2-tps-1392-502.png)

继续第二批次发布，查看当前Pod状态，发现新版本Pod有两个。
![image](https://img.alicdn.com/imgextra/i4/O1CN01jWKV7e1QT3QaWGyVf_!!6000000001976-2-tps-1500-534.png)

测试流量，观察流量分配比。
![image](https://img.alicdn.com/imgextra/i1/O1CN01c9oJ9L1LKkAJQEtnW_!!6000000001281-2-tps-1394-510.png)

发布最后一批，完成全量发布。
![image](https://img.alicdn.com/imgextra/i3/O1CN01fdKoHN1tYf8bS3eWb_!!6000000005914-2-tps-1500-165.png)

测试流量，发现流量全部转发至新版本。至此，我们通过小流量的方式逐步将流量从老版本迁移至新版本。
![image](https://img.alicdn.com/imgextra/i4/O1CN01ikLPLF1xW9QdcmoVL_!!6000000006450-2-tps-1386-510.png)

### A/B Testing
#### 什么是A/B Testing
相比于基于权重方式的金丝雀发布，A/B测试基于用户请求的元信息将流量路由到新版本，这是一种基于请求内容匹配的灰度发布策略。只有匹配特定规则的请求才会被引流到新版本，常见的做法包括基于Http Header和Cookie。基于Http Header方式的例子，例如User-Agent的值为Android的请求 （来自安卓系统的请求）可以访问新版本，其他系统仍然访问旧版本。基于Cookie方式的例子，Cookie中通常包含具有业务语义的用户信息，例如普通用户可以访问新版本，VIP用户仍然访问旧版本。

如图，某服务当前版本为v1，现在新版本v2要上线。希望安卓用户可以尝鲜新功能，其他系统用户保持不变。
![image](https://img.alicdn.com/imgextra/i1/O1CN01VHlM3Y1Rx72X2wEfy_!!6000000002177-2-tps-1500-328.png)

通过在监控平台观察旧版本与新版本的成功率、RT对比，当新版本整体服务预期后，即可将所有请求切换到新版本v2，最后为了节省资源，可以逐步下线到旧版本v1。
![image](https://img.alicdn.com/imgextra/i3/O1CN01Zq9Jnc1Dj0DQjNf0M_!!6000000000251-2-tps-1500-325.png)

#### 基于Higress & Kruise Rollout实践A/B Testing
我们仍然利用上面的例子，服务A初始镜像为v1。现在，服务demo需要发布新版本。在修改应用镜像之前，我们需要为服务demo定义A/B Testing 策略，以达到渐进式发布的效果。
```
apiVersion: rollouts.kruise.io/v1alpha1
kind: Rollout
metadata:
  name: rollouts-header
spec:
  objectRef:
    workloadRef:
      apiVersion: apps/v1
      kind: Deployment
      name: demo
  strategy:
    canary:
      steps:
      - matches:
        - headers:
          - name: user-agent
            value: android
        pause: {}
        replicas: 1
      trafficRoutings:
      - service: demo
        ingress:
          classType: nginx
          name: demo
```
其中canary.Steps 定义了整个 Rollout 过程一共分为2批，其中第一批只灰度一个新版本 Pod，并且将带有HTTP Header user-agent: android (即安卓用户）的流量routing 到新版本 Pod，并且需要人工确认是否继续发布；最后一批，无需定义，即全量发布。


修改服务A的Deployment中镜像为`registry.cn-hangzhou.aliyuncs.com/mse-ingress/version:v2`，观察相关资源变化。


查看rollout资源状态，发现当前执行完第一批发布，并且出于暂停状态，需要人工确认才能继续下一批次发布。
![image](https://img.alicdn.com/imgextra/i3/O1CN01HzzMtN1dVQUKu9MUa_!!6000000003741-2-tps-2630-138.png)

查看pod状态，发现新版本pod只有一个，Deployment资源没有全部滚动发布。
![image](https://img.alicdn.com/imgextra/i4/O1CN01Oz1CW51zwpjdv29GL_!!6000000006779-2-tps-1290-372.png)

测试来自安卓的流量是否路由到新版本，非安卓的流量是否路由到老版本。
![image](https://img.alicdn.com/imgextra/i3/O1CN01uPe4Hg1gSAW2YhEzb_!!6000000004140-2-tps-1144-240.png)

发布最后一批，完成全量发布。并测试所有流量是否路由到新版本。
![image](https://img.alicdn.com/imgextra/i3/O1CN01EBOKzb1J0TPAj46dd_!!6000000000966-2-tps-1256-252.png)

## 总结
相比于传统人工手动方式，Higress & Kruise Rollouts提供了无侵入、自动化运维方式让应用发布丝滑般顺畅。开发者无需关注发布过程中如何调整Deployment、Ingress、Service等资源，只需声明并管理发布策略Rollouts资源即可，原生Deployment的滚动发布会自动实现为渐进式交付，让应用发布可批次、可灰度、可回滚，助力业务快速迭代发展同时，也提高了应用发布的稳定性和效率问题。