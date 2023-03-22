---
title: 安装部署
keywords: [Deploy]
description: Higress Helm部署.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md
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

## 支持 Istio CRD

集群里需要提前安装好 Istio 的 CRD，如果不希望安装 Istio，也可以只安装 Istio 的 CRD：

```bash
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system
```

这种模式下，需要更新 Higress 的部署参数：

```bash
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress
```

