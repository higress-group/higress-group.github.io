---
title: Higress 快速开始
keywords: Higress
description: Higress 快速开始.
---

# 快速开始

## 在标准 K8s 集群中使用

### 第一步：安装 Higress

#### Helm 安装命令

```bash
kubectl create ns higress-system
helm install higress -n higress-system higress.io/higress --create-namespace
```

### 第二步：创建并测试 Ingress 路由

假设在 default 命名空间下已经部署了一个 test service，服务端口为 80 ，则创建下面这个 K8s Ingress

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

测试能访问到该服务：

```bash
curl "$(kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"/foo -H 'host: foo.bar.com'
```

## 在本地环境中使用

### 第一步、 安装 kubectl & kind

**MacOS：**
```bash
curl -Lo ./kubectl https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl
# for Intel Macs
[ $(uname -m) = x86_64 ]&& curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-darwin-amd64
# for M1 / ARM Macs
[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.17.0/kind-darwin-arm64
chmod +x ./kind ./kubectl
mv ./kind ./kubectl /some-dir-in-your-PATH/
```

**Windows 中使用 PowerShell:**
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

### 第二步、 创建并启用 kind

首先创建一个集群配置文件: `cluster.conf`

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
Mac & Linux 系统执行:
```bash
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
```
Windows 系统执行:
```bash
kind.exe create cluster --name higress --config=cluster.conf
kubectl.exe config use-context kind-higress
```

### 第三步、 安装 Higress

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress-local --create-namespace
```

### 第四步、 创建 Ingress 资源并测试

```bash
kubectl apply -f https://github.com/alibaba/higress/releases/download/v0.6.1/quickstart.yaml
```

测试 Ingress 生效：

```bash
# should output "foo"
curl localhost/foo
# should output "bar"
curl localhost/bar
```
