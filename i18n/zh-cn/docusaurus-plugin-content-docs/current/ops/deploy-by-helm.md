---
title: 使用 Helm 进行云原生部署
keywords: [deploy,helm,kubernetes,k8s,ops]
description: Higress Helm部署.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md
---

# 使用 Helm 进行云原生部署

[Helm](https://helm.sh/) 是一个用于自动化管理和发布 Kubernetes 软件的包管理系统。通过 Helm 可以在您的 Kubernetes 集群上快速部署安装 Higress 网关。

## 安装 Higress

Higress 网关由控制面组件 `higress-controller` 和数据面组件 `higress-gateway` 组成。`higress-gateway`负责承载**数据流量**，`higress-controller` 负责管理**配置下发**。

### Helm 安装命令

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
```

### 常用安装参数

完整参数介绍请查看[运维参数说明](../user/configurations.md)

| **参数名** | **参数说明** | **默认值** |
|---|---|---|
| **全局参数** |  |  |
| global.local | 如果要安装至本地 K8s 集群（如 Kind、Rancher Desktop 等），请设置为 `true` | false |
| global.ingressClass | 用于过滤被 Higress Controller 监听的 Ingress 资源的 [IngressClass](https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class)。<br />在集群内部署了多个网关时，可以使用这一参数来区分每个网关的职责范围。<br />IngressClass 有一些特殊的取值：<br />1. 如果设置为“nginx”，Higress Controller 将监听 Ingress 为 `nginx` 或为空的 Ingress 资源。<br />2. 如果设为空，Higress Controller 将监听 K8s 集群内的全部 Ingress 资源。 | higress |
| global.watchNamespace | 如果值不为空，Higress Controller 将只会监听指定命名空间下的资源。<br />当基于 K8s 命名空间进行业务系统隔离时，若需要对每个命名空间部署一套独立的网关，可以通过这一参数来限制 Higress 监听指定命名空间内的 Ingress。 | "" |
| global.disableAlpnH2 | 是否在 ALPN 中禁用 HTTP/2 协议 | true |
| global.enableStatus | 若为`true`， Higress Controller 将会更新 Ingress 资源的 `status` 字段。<br />为避免从 Nginx Ingress 迁移过程中，覆盖 Ingress 对象的 `status` 字段，可以将这一参数设置为`false`，这样 Higress 默认就不会将入口 IP 写入 Ingress 的 `status` 字段。 | true |
| global.enableIstioAPI | 若为`true`，Higress Controller 将同时监听 istio 资源 | false |
| global.enableGlobalAPI | 若为`true`，Higress Controller 将同时监听 Gateway API 资源 | false |
| global.onlyPushRouteCluster | 若为`true`，Higress Controller 将会只推送被路由关联的服务 | true |

| **核心组件参数** |  |  |
| higress-core.gateway.replicas | Higress Gateway 的 pod 数量 | 2 |
| higress-core.controller.replicas | Higress Controller 的 pod 数量 | 1 |
| **控制台参数** |  |  |
| higress-console.replicaCount | Higress Console 的 pod 数量 | 1 |
| higress-console.service.type | Higress Console 所使用的 K8s Service 类型 | ClusterIP |
| higress-console.domain | 对外用于访问 Higress Console 的域名 | console.higress.io |
| higress-console.tlsSecretName | Higress Console 提供 HTTPS 访问所使用的 Secret 证书资源名称 | "" |
| higress-console.web.login.prompt | 登录页面上显示的提示信息 | "" |
| higress-console.admin.password | 若值不为空，则 admin 账号的密码将被配置为指定值 | "" |
| higress-console.o11y.enabled | 若为 `true`，将同时安装可观测性套件（Grafana + Promethues） | false |
| higress-console.pvc.rwxSupported | 标识目标 K8s 集群是否支持 PersistentVolumeClaim 的 ReadWriteMany 操作方式。 | true |

## 支持 Istio CRD（可选）

集群里需要提前安装好 Istio 的 CRD，如果不希望安装 Istio，也可以只安装 Istio 的 CRD：

```bash
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system --create-namespace
```

这种模式下，需要更新 Higress 的部署参数：

```bash
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values
```

## 支持 Gateway API CRD（可选）

集群里需要提前安装好 Gateway API 的 CRD：https://github.com/kubernetes-sigs/gateway-api/releases

以1.0.0为例：

```bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml
```

这种模式下，需要更新 Higress 的部署参数：

```bash
helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values
```
