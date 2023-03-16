---
title: Quick Start
keywords: [Higress]
description: Quick Start.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md
---

# Quick Start

## Stage 1: Installation

### Scenario 1: Use in a Standard K8s Cluster

#### Helm Installation Command

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --show --render-subchart-notes
```

Note: A short note will be printed on the screen after installation, which contains the commands used to obtain the console login credential. Please execute them and record the output username and password.

![image](/img/user/quickstart/zh-cn/console-credentials.png)

Obtain the LoadBalancer IP of Higress Gateway and write it down. You can use it and port 80 and 443 to access Higress Gateway.
```bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

## Scenario 2: Use in Local Environment

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
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress-local --create-namespace
```
## Stage 2: Configuration

Assuming that there is already a service named "foo" deployed in the default namespace, we'd like to create a route, forwarding http://foo.bar.com/foo requests to this service.

You can use the following YAML to create this test service if needed.
```yaml
kind: Pod
apiVersion: v1
metadata:
  name: foo-app
  labels:
    app: foo
spec:
  containers:
  - name: foo-app
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
    args:
    - "-text=foo"
---
kind: Service
apiVersion: v1
metadata:
  name: foo-service
spec:
  selector:
    app: foo
  ports:
  # Default port used by the image
  - port: 5678
```

### Method 1: Use Higress Console

Edit hosts to point domain `console.higress.io` to the IP of Higress Gateway (In a standard K8s cluster, use the previously obtained LoadBalancer IP. And use 127.0.0.1 instead in a local cluster).
```
GatewayIP console.higress.io
```

Open `http://console.higress.io` in browser and log into Higress Console using the credential obtained above.

![image](/img/user/quickstart/en-us/login.png)

Click "Domain Management" on the navigation bar left. Click "Create Domain" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/domain_management.png)

Click "Route Management" on the navigation bar left. Click "Create Route" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/route_management.png)

### Method 2: Use Ingress CRD

Use the YAML below to create the test route we need.
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: foo
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - pathType: Prefix
        path: "/foo"
        backend:
          service:
            name: foo-service
            port:
              number: 5678
```

## Stage 3: Validate

Use the following command to check whether the test route works properly:

```bash
# should output "foo"
curl http://GatewayIP/foo -H "Host: foo.bar.com"
```