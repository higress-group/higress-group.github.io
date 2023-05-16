---
title: Quick Start
keywords: [Higress]
description: Quick Start.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/user/quickstart.md
toc_max_heading_level: 4
---

# Quick Start

## Stage 1: Installation

### Scenario 1: Use in a Standard K8s Cluster

**Helm Installation Command**

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.domain=console.higress.io
```

Note: A short note will be printed on the screen after installation, which contains the commands used to obtain the console login credential. Please execute them and record the output username and password.

![image](/img/user/quickstart/zh-cn/console-credentials.png)

Obtain the LoadBalancer IP of Higress Gateway and write it down. You can use it and port 80 and 443 to access Higress Gateway.
```bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

### Scenario 2: Use in Local Environment

The following groups can be applied to all local K8s clusters. If there is already a test cluster running on your PC, you can go to Step 3 directly and install Higress.

#### Step 1: Install kubectl & kind

**MacOS:**
```bash
# for Intel Macs
[ $(uname -m) = x86_64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/amd64/kubectl"
[ $(uname -m) = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-amd64
# for Apple Silicon Macs (M1/M2)
[ $(uname -m) = arm64 ] && curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"
[ $(uname -m) = arm64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-darwin-arm64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
```

**Use PowerShell in Windows:**

Download [kubectl v1.27.1](https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe) and [kind v0.18.0](https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64).

Or if you have `curl` installed, use the following commands:
```powershell
curl.exe -LO "https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64
```
> Note: To find out the latest stable version of `kubectl` (for example, for scripting), take a look at https://dl.k8s.io/release/stable.txt.

Then rename downloaded `kind-windows-amd64` or `kind-windows-amd64.exe` to `kind.exe`. And move both exe files to a file location on your system PATH.

**Linux:**

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
```

#### Step 2: Create and Activate kind

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

**Note**

currently, the namespace `higress-system` has a svc which type is `LoadBalancer`, it can not get IP in cluster by default.
we can use official support to enable this function,please refer to `https://kind.sigs.k8s.io/docs/user/loadbalancer/`


#### Step 3: Install Higress
when you install `higress` in local environment, you should use `--set global.kind=true`;
in the future, we will use `--set global.local=true` for unambiguous.

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false  --set higress-console.domain=console.higress.io --set higress-console.admin.password.value=admin
```

> If you'd like to enable the built-in o11y suite, please refer to the [Deploy by Helm](../ops/deploy-by-helm) document.

After installation, you can access Higress Gateway in the local cluster via port 80 and 443.

Note: If you are using a pre-existed local K8s cluster, you may need to use the command below to forward ports out of the cluster, and try the local ports later.

```bash
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
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

Edit the hosts file and point domain `console.higress.io` to the IP of Higress Gateway (In a standard K8s cluster, use the previously obtained LoadBalancer IP. And use 127.0.0.1 instead in a local cluster).

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
  - host: foo.bar.com
    http:
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
