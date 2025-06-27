---
title: Cloud-Native Deployment with Helm
keywords: [deploy,helm,kubernetes,k8s,ops]
description: Higress Helm Deployment.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/deploy-by-helm.md
---

# Cloud-Native Deployment with Helm

[Helm](https://helm.sh/) is a package management system for automating the management and release of Kubernetes software. With Helm, you can quickly deploy and install Higress gateway on your Kubernetes cluster.

## Installing Higress

The Higress gateway consists of the control plane component `higress-controller` and the data plane component `higress-gateway`. `higress-gateway` is responsible for handling **data traffic**, while `higress-controller` is responsible for managing **configuration distribution**.

### Helm Installation Command

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
```

### Common Installation Parameters

For a complete parameter description, please check the [Operations Parameters Documentation](../user/configurations.md)

| **Parameter Name** | **Description** | **Default Value** |
|---|---|-------------------|
| **Global Parameters** |  |                   |
| global.local | If installing to a local K8s cluster (such as Kind, Rancher Desktop, etc.), set this to `true` | false             |
| global.ingressClass | [IngressClass](https://kubernetes.io/docs/concepts/services-networking/ingress/#ingress-class) used to filter Ingress resources monitored by Higress Controller.<br />When multiple gateways are deployed in a cluster, this parameter can be used to distinguish the responsibilities of each gateway.<br />IngressClass has some special values:<br />1. If set to "nginx", Higress Controller will monitor Ingress resources with either `nginx` or empty IngressClass.<br />2. If set to empty, Higress Controller will monitor all Ingress resources in the K8s cluster. | higress           |
| global.watchNamespace | If not empty, Higress Controller will only monitor resources in the specified namespace.<br />When business systems are isolated by K8s namespaces and each namespace needs an independent gateway, this parameter can be used to limit Higress to monitor Ingress in the specified namespace. | ""                |
| global.disableAlpnH2 | Whether to disable HTTP/2 protocol in ALPN | false             |
| global.enableStatus | If `true`, Higress Controller will update the `status` field of Ingress resources.<br />To avoid overwriting the `status` field of Ingress objects during migration from Nginx Ingress, this parameter can be set to `false`, so Higress will not write the ingress IP to the `status` field of Ingress by default. | true              |
| global.enableIstioAPI | If `true`, Higress Controller will also monitor istio resources | false             |
| global.enableGatewayAPI | If `true`, Higress Controller will also monitor Gateway API resources | false             |
| global.onlyPushRouteCluster | If `true`, Higress Controller will only push services associated with routes | true              |
| global.o11y.enabled | If `true`, will also install observability suite (Grafana, Prometheus, Loki, PromTail) | false             |
| global.pvc.rwxSupported | Indicates whether the target K8s cluster supports ReadWriteMany operation mode for PersistentVolumeClaim. | false             |
| **Core Component Parameters** |  |                   |
| higress-core.gateway.replicas | Number of Higress Gateway pods | 2                 |
| higress-core.gateway.httpPort | HTTP port that Higress Gateway will listen on | 80                |
| higress-core.gateway.httpsPort | HTTPS port that Higress Gateway will listen on | 443               |
| higress-core.gateway.kind | Resource type used to deploy Higress Gateway, Deployment or DaemonSet | Deployment        |
| higress-core.controller.replicas | Number of Higress Controller pods | 1                 |
| **Console Parameters** |  |                   |
| higress-console.replicaCount | Number of Higress Console pods | 1                 |
| higress-console.service.type | K8s Service type used by Higress Console | ClusterIP         |
| higress-console.web.login.prompt | Prompt message displayed on the login page | ""                |

## Supporting Istio CRD (Optional)

The cluster needs to have Istio CRDs installed in advance. If you don't want to install Istio, you can also just install Istio CRDs:

```bash
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system --create-namespace
```

In this mode, you need to update Higress deployment parameters:

```bash
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress --reuse-values
```

## Supporting Gateway API CRD (Optional)

The cluster needs to have Gateway API CRDs installed in advance: https://github.com/kubernetes-sigs/gateway-api/releases

For example, for version 1.0.0:

```bash
kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v1.0.0/experimental-install.yaml
```

In this mode, you need to update Higress deployment parameters:

```bash
helm upgrade higress -n higress-system --set global.enableGatewayAPI=true higress.io/higress --reuse-values
```

You can use this configuration to verify Gateway API functionality:

https://github.com/alibaba/higress/blob/main/samples/gateway-api/demo.yaml
