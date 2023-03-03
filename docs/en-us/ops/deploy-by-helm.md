---
title: Deploy Higress By Helm
keywords: kubernetes,helm,ops
description: Deploy Higress By Helm.
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


## Install Istio, and enable the Service Mesh mode (Optional)

Higress Gateway can use [Istio](https://istio.io/) to manage API configurations of the data plane. You can choose to deploy the custom version published by Higress, or the standard version provided by Istio authors.
For the feature differences of these two modes, you can check out the [Higress Anntotaion Configuration Manual](../user/annotation.md).

In this mode, you should update the deployment options like this:

```bash
helm upgrade higress -n higress-system --set global.enableMesh=true higress.io/higress
```

### Option 1. Install Higress Istio (Recommended)

After installation, `istiod` will be ready once Higress is fully deployed.

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install istio -n istio-system higress.io/istio --create-namespace
```

**Note:**
-----
If Higress Gateway is not installed to the default namespace of `higress-system`, you need to use `--set global.higressNamespace=` to specify the actual namespace when installing Higress Istio. For example:

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install istio -n istio-system --set global.higressNamespace=foo higress.io/istio --create-namespace
```

-----

### Option 2. Install Standard Istio

Please refer to the [Installation Manual](https://istio.io/latest/docs/setup/install/) on the official website of Istio.

Unlike Higress Istio, the standard version of Istio won't try to retrieve configurations from Higress Controller by default. You need to configure [MeshConfig.ConfigSource](https://istio.io/latest/docs/reference/config/istio.mesh.v1alpha1/#ConfigSource) for this.

Here we use deploying with istioctl as an example:

```yaml
# my-config.yaml
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
spec:
  meshConfig:
    configSources:
    # If there are multiple config sources, we need to add the k8s source explicitly.
    - address: "k8s://"
    # Assume Higress is installed in the namespace of higress-system
    - address: "xds://higress-controller.higress-system:15051"
    # If there are multiple Higress instances installed in different namespaces, you can add them below.
```

Execute the installation command:
```bash
istioctl install -f my-config.yaml
```

### Disable Service Mesh mode

First update the deployment parameters of Higress and wait for Higress to be ready:

```bash
helm upgrade higress -n higress-system --set global.enableMesh=false higress.io/higress
kubectl wait -n higress-system deployment/higress-controller deployment/higress-gateway --for=condition=Available
```

Delete istio and the corresponding CRDs.

```bash
helm delete istio -n istio-system
kubectl delete ns istio-system
kubectl get crd -oname | grep --color=never 'istio.io' | xargs kubectl delete
```
