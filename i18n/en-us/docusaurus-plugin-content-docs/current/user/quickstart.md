---
title: Quick Start
keywords: [Higress]
description: Quick Start.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md
---

# Quick Start

## Use in a standard K8s cluster

### Step 1: Install Higress

#### Helm Installation Command

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --show --render-subchart-notes
```

Note: A short note will be printed on the screen after installation, which contains the commands used to obtain the console login credential. Please execute them and record the output username and password.

![image](/img/user/quickstart/zh-cn/console-credentials.png)

### Step 2: Create Test Route

Assuming that there is already a service named "foo" deployed in the default namespace, we'd like to create a route, forwarding http://foo.bar.com/foo requests to this service.

Obtain the LoadBalancer IP of Higress Gateway:
```bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

Edit hosts to point domain `console.higress.io` to the IP obtained above.
```
IP console.higress.io
```

Open `http://console.higress.io` in browser and log into Higress Console using the credential obtained above.

![image](/img/user/quickstart/zh-cn/login.png)

Click "Domain Management" on the navigation bar left. Click "Create Domain" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/domain_management.png)

Click "Route Management" on the navigation bar left. Click "Create Route" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/route_management.png)

### Step 6: Validate Route

Send following test request to see whether the test route works properly:

```bash
# should output "foo"
curl http://"$(kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"/foo -H 'host: foo.bar.com'
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
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress-local --create-namespace
```

### Step 4: Create Test Services

```bash
kubectl apply -f https://github.com/alibaba/higress/releases/download/v0.6.1/quickstart.yaml
```

### Step 5: Create Test Route

Edit the hosts file, points domain `console.higress.io` to `127.0.0.1`.
```
127.0.0.1 console.higress.io
```
 
Open `http://console.higress.io` in browser and log into Higress Console using the credential of admin/admin.

![image](/img/user/quickstart/zh-cn/login_local.png)

Click "Domain Management" on the navigation bar left. Click "Create Domain" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/domain_management.png)

Click "Route Management" on the navigation bar left. Click "Create Route" button. Then fill the form according to the image below and click "Confirm" button.

![image](/img/user/quickstart/en-us/route_management.png)

### Step 6: Validate Route

Send following test request to see whether the test route works properly:

```bash
# should output "foo"
curl http://localhost/foo -H "Host: foo.bar.com"
```