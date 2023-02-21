---
title: 安装部署
keywords: Deploy
description: Higress Helm部署.
---

# 安装部署

[Helm](https://helm.sh/) 是一个用于自动化管理和发布 Kubernetes 软件的包管理系统。通过 Helm 可以在您的 Kubernetes 集群上快速部署安装 Higress 网关。

## 安装 Higress

Higress 网关由控制面组件 `higress-controller` 和数据面组件 `higress-gateway` 组成。Istio 负责管理**数据平面的 API 配置**，`higress-controller` 负责管理**控制平面的 API 配置**。

### Helm 安装命令

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
```

### 安装参数

1. enableStatus

为避免从 Nginx Ingress 迁移过程中，覆盖 Ingress 对象的 status 字段，Higress 默认不会将入口 IP 写入 Ingress 的 status。

可以通过 `--set enableStatus=true` 启用此功能。

2. ingressClass

在集群内部署了多个网关时，可以基于 [IngressClass](https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class) 区分每个网关的职责范围。

可以通过 `--set ingressClass=<name>` 指定 Higress 监听哪些 Ingress。

3. watchNamespace

当基于 K8s 命名空间进行业务系统隔离时，若需要对每个命名空间部署一套独立的网关，可以通过 watchNamespace 限制 Higress 监听此命名空间内的 Ingress。

可以通过 `--set watchNamespace=<namespace>` 指定。

## 安装 Istio，开启 Service Mesh 模式 （可选）

Higress 网关可以通过[Istio](https://istio.io/) 统一管理数据平面的 API 配置。可以选择部署 Higress 发行的 Istio 版本，也可以选择 Istio 官方提供的标准版本。
两种模式下的能力对比可以参考[Higress Anntotaion 支持说明](../user/annotation.md)。

这种模式下，需要更新 Higress 的部署参数：

```bash
helm upgrade higress -n higress-system --set global.enableMesh=true higress.io/higress
```

### 选项1. 安装 Higress Istio（推荐）

安装后，`istiod` 需要等待 Higress 完成部署完成，才会处于就绪状态。

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install istio -n istio-system higress.io/istio --create-namespace
```

**注意**
-----
若 Higress 网关没有安装在默认的 `higress-system` 的命名空间，需要在安装 Higress Istio 时指定通过 `--set global.higressNamespace=` 指定命名空间，如:

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install istio -n istio-system --set global.higressNamespace=foo higress.io/istio --create-namespace
```

-----

### 选项2. 安装标准版 Istio

请参考 Istio 官网的[安装文档](https://istio.io/latest/zh/docs/setup/install/)

与 Higress Istio 不同，标准版 Istio 不会从自动从 Higress Controller 获取配置，需要配置[MeshConfig.ConfigSource](https://istio.io/latest/docs/reference/config/istio.mesh.v1alpha1/#ConfigSource)

以通过 istioctl 部署为例：

```yaml
# my-config.yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
  meshConfig:
    configSources:
    # 当有多个配置来源时，需要显示指定 k8s 来源
    - address: "k8s://"
    # 假设 Higress 安装在 higress-system 命名空间
    - address: "xds://higress-controller.higress-system:15051"
    # 若在不同命名空间安装了多个 Higress ，可以继续添加
```

执行安装操作：
```bash
istioctl install -f my-config.yaml
```

### 关闭 Service Mesh 模式

先更新 Higress 的部署参数，并等待 Higress 就绪：

```bash
helm upgrade higress -n higress-system --set global.enableMesh=false higress.io/higress 
kubectl wait -n higress-system deployment/higress-controller deployment/higress-gateway --for=condition=Available
```

删除 istio 以及对应的 crd

```bash
helm delete istio -n istio-system
kubectl delete ns istio-system
kubectl get crd -oname | grep --color=never 'istio.io' | xargs kubectl delete
```
