---
title: Deploy Higress By Helm
keywords: [kubernetes,helm,ops]
description: Deploy Higress By Helm.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/ops/deploy-by-helm.md
---

# Deploy Higress By Helm

[Helm](https://helm.sh/) is a package manager for Kubernetes used in software management and deployment. You can use Helm to perform a quick install of Higress Gateway in your Kubernetes cluster.

## Install Higress

Higress Gateway consists of a control plane component `higress-controller` and a data plane component `higress-gateway`. It uses Istio to management **API configurations of the data plane**, and `higress-controller` to manage **API configurations of the control plane**.

### Helm Installation Command

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress higress.io/higress -n higress-system --create-namespace
```

### Installation Parameters

1. enableStatus

When migrating from Nginx Ingress, in order to avoid status field of Ingress objects being overwritten, Higress won't write the entry IP to the status field of the corresponding Ingress object.

You can use `--set enableStatus=true` enable to feature.

1. ingressClass

If there are multiple gateway instances deployed in the cluster, you can use [IngressClass](https://kubernetes.io/zh-cn/docs/concepts/services-networking/ingress/#ingress-class) to distinguish the scope of each gateway instance.

You can use `--set ingressClass=<name>` to let Higress know which Ingress instances it shall listen to.

3. watchNamespace

When isolating different business systems using K8s namespace, if each namespace requires a standalone gateway instance, you can use `watchNamespace` to confine the Ingress watching of Higress within the given namespace.

You can use `--set watchNamespace=<namespace>` to set this value.



## Support Istio CRD

The CRD of Istio needs to be installed in advance in the cluster. If you do not want to install Istio, you can also install only the CRD of Istio:

```bash
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm install istio-base istio/base -n istio-system
```

In this mode, you need to update the deployment parameters of Higress:

```bash
helm upgrade higress -n higress-system --set global.enableIstioAPI=true higress.io/higress
```
