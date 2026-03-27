---
title: "Higress 已支持全新 Gateway API / Inference Extension"
description: "Higress 已支持全新 Gateway API / Inference Extension"
date: "2026-02-13"
category: "article"
keywords: ["Higress"]
authors: "阿里云高级工程师"
---

作者：如漫

# 概述
目前，<font style="color:rgb(13, 18, 57);">容器服务网络</font>正处在“标准升级”和“场景拓展”的双重演进中：一方面，Gateway API 逐渐以更完善的资源模型取代传统 Ingress 的职责；另一方面，越来越多的 AI 推理服务被部署到容器中，网关需要原生理解模型调用的特性与治理诉求。

此外，在面对 Ingress Nginx 即将退役的背景下，Ingress Nginx 用户可能会寻求新的 Ingress Controller 替代方案、或尝试进行 Gateway API 的迁移。 

在保持对 Ingress 长期兼容和支持的基础上，Higress 在最新发布的 v2.2.0 版本中，实现了对 Gateway API 与 Gateway API Inference Extension 的全新版本主要特性适配。

本文将针对 Higress 的这一特性升级展开介绍，并提供详细的操作指引。

# Ingress Nginx 退役与应对方案
Ingress作为早期 Kubernetes 的事实标准入口，胜在简单直接与生态成熟，覆盖了大量经典路由使用场景。然而，随着团队规模扩大与治理维度增多，单一资源在多角色协作、策略可组合性等各方面的局限逐渐凸显。随着 Gateway API 逐渐成熟，官网正在致力于推动 Ingress 向 Gateway API 的迁移。

Ingress Nginx 作为最早期、最成熟的 Ingress 控制器与事实标准实现，其官方维护者 Kubernetes 社区在 2025 年 11 月 12 日宣布 Ingress Nginx 即将在 2026 年 3 月正式下线，届时将不再持续维护和迭代，详见：[遗憾，Ingress NGINX 要退役了](https://mp.weixin.qq.com/s?__biz=MzU0MzkyMTgzNg==&mid=2247488706&idx=1&sn=00685294b8af5a7de63af258deb1f6ba&scene=21&poc_token=HDayJ2mjW0SfwqEUDokCBtE2Pwj9G8l13la9dfRU)。

长期使用不再维护的产品，无疑会增加安全风险与维护成本，对此， Ingress Nginx 官方给到用户的建议包括：

+ 使用 Gateway API 替代 Ingress。
+ 如果必须使用 Ingress，可以使用其他替代 Ingress 控制器

对于官方建议，目前 Higress 均已提供了实现方案：

+ 对于后者，Higress 会长期支持 Ingress，保证较高的兼容性和安全性，同时提供完善的 Ingress Nginx 迁移方案。
+ 对于前者，Higress 全新支持用户使用新版 Gateway API 配置网络路由，积极拥抱新一代协议标准。后文将对此进行详细介绍。

# Higress 长期支持 Ingress
Higress 目前作为主流 Ingress Controller 之一，经过长期的演进迭代和实践打磨，具备成熟可靠、高度兼容 Nginx Ingress 注解的特性，同时提供了完善的平滑迁移路径，详见：[Ingress NGINX 迁移指引｜附企业迁移计划分布](https://mp.weixin.qq.com/s/Hme8QrZH1t3lmUfl6-i-Rw)。

对于正在评估从 Ingress NGINX 迁出的团队，Higress 提供可落地、可长期演进的替代：<font style="color:rgb(13, 18, 57);">兼容主流 Ingress 语义与常用 Nginx 注解，覆盖重写、限流、鉴权、TLS 等能力，并支持灰度切流、流量镜像与一键回滚，确保迁移与日常变更安全可控、不中断。</font>

面向未来，我们会持续兼容 Ingress ，与 Gateway API 双栈共存，支持存量平滑承接、增量按需升级。

# Higress 支持全新版本 Gateway API
## Gateway API
[**Gateway API** ](https://gateway-api.sigs.k8s.io/)是 Kubernetes 社区推出的新一代服务网络标准，旨在取代传统的 Ingress API。Gateway API 提供了更强大的表达能力和可扩展性，并实现了面向角色的设计。随着 2023 年底发布 v1.0.0 版本，Gateway API 已经进入 GA 阶段。

![](https://img.alicdn.com/imgextra/i4/O1CN01bmdY5x1dwuZN1Y1VI_!!6000000003801-2-tps-3364-1348.png)

在最新发布的版本中， Higress 对齐 Gateway API v1.4.0 版本，支持了 HttpRoute、GrpcRoute、TcpRoute、UdpRoute 等主要资源。此外， Gateway API v1.4.0 的主要变化包括 BackendTLSPolicy 正式 GA，Higress 也对此进行了更新。

## Gateway API Inference Extension
随着生成式 AI 和大语言模型服务的快速发展，AI 推理服务具有长时间运行、资源密集、部分有状态等特点，传统负载均衡器难以满足需求。[Gateway API Inference Extension](https://gateway-api-inference-extension.sigs.k8s.io/) (GIE)** **是 Kubernetes 官方社区针对 AI 推理场景提出的标准协议扩展。Inference Extension 通过引入模型感知路由、基于优先级的调度、智能负载均衡等能力，旨在解决大语言模型服务在 Kubernetes 上的流量管理难题，为 AI 推理工作负载提供了标准化解决方案。Kubernetes 社区在 2025 年 9 月正式发布了 GA 版本。

![](https://img.alicdn.com/imgextra/i3/O1CN01SI9Gd01sGW91CsyuE_!!6000000005739-2-tps-1882-952.png)

在最新发布的版本中，Higress 实现了对 Gateway API Inference Extension 的兼容，支持 GA 版本的 InferencePool 资源监听，同时兼容 GIE 社区标准 EndPoint Picker， 为用户提供标准化、高效的 AI 流量管理能力。

Higress 支持标准 GIE 的数据流程如下图所示。Higress 控制面通过监听 Gateway API 以及 InferencePool 等资源，转化成路由、负载均衡等配置推送给数据面，来管理数据面的预期行为；数据面在识别出模型推理流量后，会基于 external processing 机制通过 grpc 协议访问标准 Endpoint Picker 实例，Endpoint Picker 基于 InferencePool 中实例任务队列状况、KV Cache 命中率、LoRA Adaptor 等指标综合选取最合适的推理节点，并将节点地址添加到请求的 dynamic_metadata 中，接下来，数据面会优先选取 dynamic_metadata 中指定的节点地址作为负载均衡的目标，如果目标节点不存在或访问异常，则默认 Fallback 为 RoundRobin 策略执行载均衡。

![](https://img.alicdn.com/imgextra/i1/O1CN01pd4wDb1Zyxsk3eyAD_!!6000000003264-2-tps-3930-2468.png)

# 实操指南
本节将介绍如何使用 Gateway API 与 Gateway API Inference Extension，为 Higress 配置网络路由与 AI 路由策略。

## 基础路由
在开始配置之前，需要确保容器集群中已经安装了 Gateway API CRD，建议使用阿里云 ACK，会默认安装最新版本 Gateway API。

1. 使用 Helm 部署 v2.2.0 及以上版本 Higress 网关

```yaml
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
```

2. 容器集群内创建 Gateway，关联步骤 1 部署的 Higress

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: higress-gateway
  namespace: higress-system
spec:
  gatewayClassName: higress
  listeners:
  - name: default
    hostname: "*.example.com"
    protocol: HTTP
    port: 80
    allowedRoutes:
      namespaces:
        from: All
```

3. 容器集群中创建 httpbin demo 服务，模拟业务服务，用于路由验证

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: go-httpbin
  namespace: default
spec:
  replicas: 1
  selector:
    matchLabels:
      app: go-httpbin
  template:
    metadata:
      labels:
        app: go-httpbin
        version: v1
    spec:
      containers:
        - image: registry.cn-hangzhou.aliyuncs.com/mse/go-httpbin
          args:
            - "--port=8090"
            - "--version=v1"
          imagePullPolicy: Always
          name: go-httpbin
          ports:
            - containerPort: 8090
---
apiVersion: v1
kind: Service
metadata:
  name: go-httpbin
  namespace: default
spec:
  type: ClusterIP 
  ports:
    - port: 80
      targetPort: 8090
      protocol: TCP
  selector:
    app: go-httpbin
```

4. 创建 HttpRoute，将流量路由到 httpbin

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: http
  namespace: default
spec:
  parentRefs:
    - group: gateway.networking.k8s.io
      kind: Gateway
      name: higress-gateway
      namespace: higress-system #注意这里需要和gateway所在ns保持一致
  hostnames: ["httpbin.example.com"]
  rules:
    - matches: 
        - path:
            type: PathPrefix
            value: /
      backendRefs: 
        - kind: Service
          name: go-httpbin
          port: 80
```

5. 通过 Higress 网关访问应用，得到以下结果，说明 Gateway API 路由配置已经生效。

```yaml
curl -H "Host: httpbin.example.com" http://{higress_endpoint}:80/version
```

![](https://img.alicdn.com/imgextra/i4/O1CN01AzdObj1J2JJ0mXuEA_!!6000000000970-2-tps-1824-103.png)

## 推理扩展
在开始配置推理扩展路由之前，需要确保已经安装了 Gateway API CRD。接下来参考以下步骤进行 AI 推理服务路由配置。

1. 容器集群内安装 Gateway API Inference Extension CRD 和 Istio CRD

```yaml
# Gateway API Inference Extension CRD
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api-inference-extension/releases/download/v1.1.0/manifests.yaml

# Istio CRD
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system --create-namespace
```

2. 使用 Helm 部署 v2.2.0 及以上版本 Higress 网关。与前文不同的是，由于 Higress 默认没有开启 InferencePool 的资源监听，需要指定启动参数global.enableInferenceExtension=true 开启。

```yaml
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace --set global.enableInferenceExtension=true
```

3. 容器集群内创建 Gateway。关联步骤 2 部署的 Higress

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: Gateway
metadata:
  name: higress-gateway
  namespace: higress-system
spec:
  gatewayClassName: higress
  listeners:
  - name: default
    hostname: "*.example.com"
    protocol: HTTP
    port: 80
    allowedRoutes:
      namespaces:
        from: All
```

4. 创建模型推理服务实例。为了节约容器资源，我们仅部署 llm-d 社区开源的 vllm 模拟推理服务[llm-d-inference-sim](https://github.com/llm-d/llm-d-inference-sim/tree/main)作为验证。

```yaml
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api-inference-extension/raw/main/config/manifests/vllm/sim-deployment.yaml
```

5. 容器集群内为模型推理服务创建 InferencePool 以及 Endpoint Picker。

在实际运行中，Endpoint Picker 将会与一个 InferencePool 绑定，监听 InferencePool 中的推理服务实例及其 Metrics 信息。Higress envoy 实例在访问实际 InferencePool 之前，将通过 external processing 的机制访问 endpoint picker 节点，endpoint picker 综合根据当前推理服务的运行状态，选择最合适的节点，并且将信息返回给 envoy，接下来 envoy 将访问该节点执行推理任务，从而起到智能负载均衡的作用。

```yaml
export IGW_CHART_VERSION=v1.1.0
export GATEWAY_PROVIDER=istio
helm install vllm-llama3-8b-instruct \
--set inferencePool.modelServers.matchLabels.app=vllm-llama3-8b-instruct \
--set provider.name=$GATEWAY_PROVIDER \
--version $IGW_CHART_VERSION \
oci://registry.k8s.io/gateway-api-inference-extension/charts/inferencepool
```

6. 创建 HttpRoute，将 AI 流量路由到 InferencePool 对应的模型推理服务。

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: http
  namespace: default
spec:
  parentRefs:
    - group: gateway.networking.k8s.io
      kind: Gateway
      name: higress-gateway
      namespace: higress-system
  hostnames: ["httpbin.example.com"]
  rules:
    - matches:
        - path:
            type: PathPrefix
            value: /
      backendRefs:
        - name: vllm-llama3-8b-instruct
          group: inference.networking.k8s.io
          kind: InferencePool
          port: 80
```

7. 通过 Higress 网关访问模型推理服务。在响应头中观察到 <font style="color:#000000;">x-went-into-resp-headers=true，并且通过 x-inference-pod 和 x-inference-port 观察到该推理请求实际路由到的实例和端口，说明 Gateway API Inference Extension 的路由配置已经生效。</font>

```yaml
curl -i -X POST http://{higress-endpoint}:80/v1/completions \
  -H 'Content-Type: application/json' \
  -H 'Host: httpbin.example.com' \
  -d '{
    "model": "meta-llama/Llama-3.1-8B-Instruct",
    "prompt": "Write as if you were a critic: San Francisco",
    "max_tokens": 100,
    "temperature": 0
  }'
```

![](https://img.alicdn.com/imgextra/i1/O1CN01TpQmkx1bGenUbpaZk_!!6000000003438-2-tps-2016-736.png)

# 总结与展望
借助对最新版 Gateway API 与 Inference Extension 的支持，Higress 将传统北南与 AI 推理流量统一于同一底座，<font style="color:rgb(13, 18, 57);">既保障对 Ingress 的长期支持与兼容，又通过标准化 Gateway API 加速企业的服务网络标准升级与 AI 原生化进程。</font>

面对 Ingress Nginx 即将下线的时间节点，无论是选择迁移 Gateway API，还是继续使用 Ingress，Higress 都提供了完整的解决方案。

面对未来，Higress 社区仍会在以下方面持续演进：

1. 持续支持并兼容 Ingress 与 Nginx Ingress 注解，同时提供完善的 Ingress 迁移方案
2. <font style="color:rgb(13, 18, 57);">继续强化对 Gateway API 与 Inference Extension 核心版本与能力的适配与稳定供给，为云原生网络与AI应用提供可持续的开源基础设施选择</font>
3. <font style="color:rgb(13, 18, 57);">将 InferencePool 与 Higress 已经基于插件实现的模型负载均衡能力有机结合，除了兼容现有开源标准方案之外，提供不依赖于外部 Endpoint Picker 的完整解决方案</font>

若您在 Ingress 注解兼容与迁移细节或 Gateway API / Inference Extension 的功能诉求上有任何问题，欢迎在评论区留言或直接联系我们！


