---
title: Quick Start
keywords: Higress
description: Quick Start.
---

# Quick Start

## Use in a standard K8s cluster

### Step 1: Install Higress

#### Helm Installation Command

```bash
kubectl create ns higress-system
helm install higress -n higress-system  oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress
```

### Step 2: Create and test Ingress routes

Assuming that there is already a test service deployed in the default namespace, listening to port 80, create the following K8s Ingress now:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: simple-example
spec:
  rules:
  - host: foo.bar.com
    http:
      paths:
      - path: /foo
        pathType: Prefix
        backend:
          service:
            name: test
            port:
              number: 80
```

Try to access the service with the command below:

```bash
curl "$(kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"/foo -H 'host: foo.bar.com'
```

## Use in Local Environment

### Step 1: Install kubectl & kind

**MacOS:**
```bash
curl -Lo ./kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl
# for Intel Macs
[ $(uname -m) = x86_64 ]&& curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-darwin-amd64
# for M1 / ARM Macs
[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-darwin-arm64
chmod +x ./kind ./kubectl
mv ./kind ./kubectl /some-dir-in-your-PATH/
```

**Use PowerShell in Windows:**
```bash
curl.exe -Lo kubectl.exe https://storage.googleapis.com/kubernetes-release/release/$(curl.exe -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/windows/amd64/kubectl.exe
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.17.0/kind-windows-amd64
Move-Item .\kind-windows-amd64.exe c:\some-dir-in-your-PATH\kind.exe
Move-Item .\kubectl.exe c:\some-dir-in-your-PATH\kubectl.exe
```

**Linux:**
```bash
curl -Lo ./kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-linux-amd64
chmod +x ./kind ./kubectl
sudo mv ./kind ./kubectl /usr/local/bin/kind
```

### Step 2: Create and Activate kind

First, create a cluster config file: `cluster.conf`

```yaml
# cluster.conf
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
  kubeadmConfigPatches:
  - |
    kind: InitConfiguration
    nodeRegistration:
      kubeletExtraArgs:
        node-labels: "ingress-ready=true"
  extraPortMappings:
  - containerPort: 80
    hostPort: 80
    protocol: TCP
  - containerPort: 443
    hostPort: 443
    protocol: TCP
```
Commands for Mac & Linux:
```bash
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
```
Commands for Windows:
```bash
kind.exe create cluster --name higress --config=cluster.conf
kubectl.exe config use-context kind-higress
```

### Step 3: Install Higress

```bash
kubectl create ns higress-system
helm install higress -n higress-system oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress-local
```

### Step 4: Create Ingress Resource and Test

```bash
kubectl apply -f https://github.com/alibaba/higress/releases/download/v0.6.0/quickstart.yaml
```

Test Ingress routes:

```bash
# should output "foo"
curl localhost/foo
# should output "bar"
curl localhost/bar
```
