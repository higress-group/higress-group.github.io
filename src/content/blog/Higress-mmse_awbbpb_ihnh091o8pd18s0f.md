---
title: "告别 Ingress Nginx：云原生 API 网关 Gateway API 使用指引"
description: "告别 Ingress Nginx：云原生 API 网关 Gateway API 使用指引"
date: "2026-05-21"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：如漫

## 导语
2025 年 11 月，Kubernetes 社区宣布：作为最主流的 Ingress 控制器，**Ingress Nginx 将于 2026 年 3 月正式停止维护**。对于正在使用 Ingress Nginx 的用户来说，是时候考虑下一步了。

Kubernetes 官方给出了两条建议：

+ **拥抱 Gateway API**——Ingress 的下一代继任者，提供更强大、更灵活的路由能力
+ **选择其他 Ingress 控制器**——继续沿用 Ingress 模型，但切换到仍在维护的实现

云原生 API 网关（APIG）同时覆盖了这两条路径：既提供了完善的 Ingress 迁移方案和长期支持，也全面支持 Gateway API 标准。本文重点介绍 Gateway API——它是什么、为什么值得关注、以及如何在云原生 API 网关上快速上手。

## 一、Ingress 怎么了？为什么要换？
先回顾一下背景。Ingress 作为 Kubernetes 最早的流量入口规范，陪伴社区走过了近十年。它的优点显而易见：概念简单、生态成熟、几乎所有网关产品都支持。

但随着企业容器化程度加深，Ingress 的局限性也越来越明显：

+ **表达能力不足**：Ingress 只能做最基础的域名和路径路由，想实现请求头匹配、流量切分等高级策略，就不得不依赖各家自定义的 annotation，既不标准，也不易移植
+ **缺乏角色分层**：在一个大型组织中，集群管理员、网关运维和应用开发者本应各司其职、各管各的配置，但 Ingress 把所有配置塞在一个资源里，权责不清
+ **扩展性差**：每新增一种流量管理需求，就需要造一个新的 annotation，导致不同 Ingress 控制器之间的 annotation 五花八门、互不兼容

简单说，Ingress 在"够用"这件事上做得不错，但面对日益复杂的流量治理需求，它已经力不从心了。

## 二、Gateway API：下一代容器路由标准
Gateway API 正是为了解决这些痛点而诞生的。它由 Kubernetes SIG-Network 主导设计，2023 年底正式 GA，已经成为社区公认的 Ingress 继任者。

### 2.1 更清晰的资源模型
Gateway API 将原本 Ingress 一个资源承担的职责，拆分成了三层：

| 资源 | 职责 | 负责角色 |
| --- | --- | --- |
| **GatewayClass** | 定义网关实现类型 | 平台管理员 |
| **Gateway** | 声明网关实例、监听端口和域名 | 集群运维 |
| **HTTPRoute** | 定义具体路由规则、流量策略 | 应用开发者 |


这种分层设计天然支持多角色协作——运维团队管网关，开发团队管路由，互不干扰。

### 2.2 更丰富的流量管理能力
对比 Ingress，Gateway API **原生支持**以下能力，无需任何自定义注解：

+ **精确的路由匹配**：支持基于路径、域名、请求头、查询参数、HTTP 方法的多维匹配
+ **请求/响应修改**：内置 Filter 机制，可在请求和响应阶段添加、修改、删除 Header
+ **流量切分**：通过权重将流量按比例分发到不同后端服务，轻松实现灰度发布
+ **请求重定向与 URL 重写**：原生支持 301/302 重定向和路径改写
+ **跨命名空间路由**：路由可以引用其他命名空间的服务，同时通过 ReferenceGrant 保证安全
+ ……

### 2.3 面向未来的可扩展性
Gateway API 通过 Policy Attachment 和 CRD 扩展机制，让协议本身具备了灵活的可扩展性——在核心路由标准保持不变的前提下，可以按场景自由扩展新的资源和能力。

一个典型的例子是 **Gateway API Inference Extension（GIE）**。随着大模型推理服务大量部署到 Kubernetes 集群中，社区在 Gateway API 的基础上扩展出了这套协议，专门解决推理场景下的智能路由问题。它引入了 InferencePool 等新资源，让网关能够感知推理节点的运行状态——包括请求队列深度、KV Cache 命中率等指标——从而在多个推理节点之间实现智能调度和负载均衡。可以预见，未来还会有更多垂直场景基于 Gateway API 生长出自己的扩展标准。

## 三、为什么选择云原生 API 网关？
云原生 API 网关从 2.1.16 版本开始已支持 Gateway API，目前支持到 v1.3.0 版本，后续会持续跟进更新版本的适配。对于部署在阿里云 ACK 上的服务，你可以直接通过 Gateway API 的方式，让云原生 API 网关作为集群的流量入口，替代 Ingress Nginx 来承担南北向路由的职责。

除了支持 Gateway API 本身，云原生 API 网关的优势还在于：

**1. 双模并行，平滑过渡**

云原生 API 网关支持 **Ingress 和 Gateway API 双栈共存**，存量业务继续走 Ingress，新业务直接用 Gateway API，两者互不影响，按需渐进。

**2. 完善的 Ingress 迁移工具**

对于从 Ingress Nginx 迁出的用户，云原生 API 网关提供了完整的迁移方案，兼容主流 Nginx Ingress 注解，支持灰度切流和一键回滚，确保迁移安全可控。

**3. 控制台可视化 + 容器侧声明式管理**

Gateway API 资源在容器侧通过 kubectl 声明式管理，同时在网关控制台上实时可见。运维团队可以在控制台上一览全局路由状态，开发团队可以在 YAML 中自主管理路由规则，各取所需。

**4. 基于 Higress 开源生态**

云原生 API 网关基于 CNCF 开源项目 Higress 构建，核心能力经过大规模生产验证，背后有活跃的开源社区持续演进。

## 四、实战：用 Gateway API 暴露你的第一个服务
接下来，我们通过一个完整的实战示例，手把手演示如何在云原生 API 网关上使用 Gateway API 暴露服务。

### 前提条件
+ 已创建云原生 API 网关实例，且**引擎版本 ≥ 2.1.16**
+ 已有 ACK 集群（Kubernetes ≥ 1.24），并已安装 Gateway API CRD（推荐 v1.3.0）

> 如果使用阿里云 ACK，建议直接通过**组件管理**一键安装 Gateway API CRD，省去手动操作。
>

### 第一步：开启 Gateway API 监听
1. 登录云原生 API 网关控制台，进入目标网关实例
2. 在 **API** 页面点击 **创建 API**，选择 **导入 Gateway API**

![](https://img.alicdn.com/imgextra/i2/O1CN01EIvQwy1cJEf4Ri9Ru_!!6000000003579-2-tps-1906-1040.png)

3. 填写 API 名称，选择 ACK 来源集群，按需配置监听的命名空间和 GatewayClass

![](https://img.alicdn.com/imgextra/i3/O1CN015oTzCP1ncR2RTqq1U_!!6000000005110-2-tps-2142-1828.png)

4. 点击 **确定**，Gateway API类型的 API 将会被创建，同时开启Gateway API 监听，可以点击并进入对应 API 查看具体路由信息。

### 第二步：部署示例应用
在 ACK 集群中部署一个简单的 httpbin 应用作为后端服务：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: httpbin
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: httpbin
  template:
    metadata:
      labels:
        app: httpbin
    spec:
      containers:
        - image: registry.cn-hangzhou.aliyuncs.com/mse-ingress/go-httpbin
          args: ["--port=8080", "--version=v1"]
          name: httpbin
          ports:
            - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: httpbin
  namespace: default
spec:
  type: ClusterIP
  ports:
    - port: 80
      targetPort: 8080
  selector:
    app: httpbin
```

```bash
kubectl apply -f httpbin.yaml
```

### 第三步：创建 Gateway 和 HTTPRoute
```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: GatewayClass
metadata:
  name: apig
spec:
  controllerName: higress.io/gateway-controller
---
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: apig-gateway
  namespace: default
spec:
  gatewayClassName: apig
  listeners:
    - name: http
      protocol: HTTP
      port: 80
      hostname: "*.example.com"
      allowedRoutes:
        namespaces:
          from: Same
---
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: httpbin-route
  namespace: default
spec:
  parentRefs:
    - name: apig-gateway
  hostnames:
    - "demo.example.com"
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - kind: Service
          name: httpbin
          port: 80
```

```bash
kubectl apply -f gateway.yaml
```

等待约 2 分钟，确认 Gateway 就绪：

```bash
kubectl get gateway apig-gateway
# NAME           CLASS   ADDRESS       PROGRAMMED   AGE
# apig-gateway   apig    nlb-xxxx      True         2m
```

`PROGRAMMED` 状态为 `True`，说明 Gateway 已成功配置。

### 第四步：验证访问
获取网关接入点地址后，执行：

```bash
curl -H "Host: demo.example.com" http://<网关接入点>/version
```

看到如下输出，说明 Gateway API 路由已生效：

```plain
version: v1
hostname: httpbin-5d4f8b6c7f-xxxxx
```

至此，你已经通过 Gateway API 实现了云原生 API 网关到容器内服务的路由，外部流量可以正常访问集群中的应用了。

除了基础路由之外，Gateway API 还支持请求头修改、基于权重的流量切分、基于 Header 的灰度路由等丰富的进阶场景。更多实践案例，请参考[通过云原生 API 网关使用 Gateway API 暴露服务](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/use-cases/expose-services-by-using-the-gateway-api-through-the-cloud-native-api)。

## 五、总结
Ingress Nginx 的退役不是终点，而是容器网络走向标准化的新起点。Gateway API 作为 Kubernetes 社区的下一代路由标准，已经具备了替代 Ingress 的完整能力。

云原生 API 网关在全面支持 Gateway API 的同时，提供了 Ingress 长期兼容和迁移工具，让你可以从容应对这次变化——**无论你是想拥抱新标准，还是先稳住现有业务再逐步演进，都有合适的路径**。

如果你正在寻找 Ingress Nginx 的替代方案，或者想为团队引入更现代化的容器路由能力，不妨从 Gateway API 开始：一个 Gateway + 一个 HTTPRoute，10 分钟内就能完成你的第一次实践。

> 更多详情，请参考云原生 API 网关官方文档中的实践教程：[通过云原生API网关使用Gateway API暴露服务](https://help.aliyun.com/zh/api-gateway/cloud-native-api-gateway/use-cases/expose-services-by-using-the-gateway-api-through-the-cloud-native-api?spm=a2c4g.11186623.help-menu-29462.d_4_0.155254b3C4JIau)。
>


