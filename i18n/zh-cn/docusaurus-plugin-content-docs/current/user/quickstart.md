---
title: 快速开始
keywords: [Higress]
description: Higress 快速开始.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md
toc_max_heading_level: 4
---

# 快速开始

## 阶段一：安装

### 场景一：在标准 K8s 集群中使用

**Helm 安装命令**

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set higress-console.domain=console.higress.io
```

注意：安装完成后会输出一段文本，其中包含获取控制台登录信息的命令。请执行该命令并记录用户名和密码。

![image](/img/user/quickstart/zh-cn/console-credentials.png)

获取 Higress Gateway 的 LoadBalancer IP，并记录下来。后续可以通过该 IP 的 80 和 443 端口访问 Higress Gateway。
```bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

### 场景二：在本地环境中使用

以下步骤适用于所有在本地启动 K8s 集群进行验证的场景。如果您本地已经配置好了一个测试集群，可以直接跳转到第三步安装 Higress。

#### 第一步：安装 kubectl & kind

**MacOS：**
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

**Windows 中使用 PowerShell：**

下载 [kubectl v1.27.1](https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe) 和 [kind v0.18.0](https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64)。

如果你本地安装了 `curl` 工具，可直接执行以下命令：
```powershell
curl.exe -LO "https://dl.k8s.io/release/v1.27.1/bin/windows/amd64/kubectl.exe"
curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.18.0/kind-windows-amd64
```
> 注：若要获知 `kubectl` 的最新稳定版本（例如用于脚本编写等场景），可查看 https://dl.k8s.io/release/stable.txt 的内容.

然后将下载下来的 `kind-windows-amd64` 或者 `kind-windows-amd64.exe` 重命名为 `kind.exe`，并将 `kubectl.exe` 和 `kind.exe` 移动到 `PATH` 环境变量所包含的路径下。

**Linux:**

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.18.0/kind-linux-amd64
chmod +x ./kubectl ./kind
sudo mv ./kubectl ./kind /usr/local/bin
```

#### 第二步：创建并启用 kind

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
Mac & Linux 系统执行：
```bash
kind create cluster --name higress --config=cluster.conf
kubectl config use-context kind-higress
```
Windows 系统执行:
```bash
kind.exe create cluster --name higress --config=cluster.conf
kubectl.exe config use-context kind-higress
```

**备注**

上述配置是为了将本地（127.0.0.1）的80和443端口用于Higress访问，如果希望在本地使用 LoadBalancer IP 进行访问，可以参考Kind文档`https://kind.sigs.k8s.io/docs/user/loadbalancer/` 提供的能力予以支持。

#### 第三步：安装 Higress

本地安装开关: `--set global.kind=true`；
为避免歧义，后面会调整属性名称为：`--set global.local=true`

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false  --set higress-console.domain=console.higress.io --set higress-console.admin.password.value=admin
```

> 若要启用 Higress 内置的套件，可参阅[安装部署](../ops/deploy-by-helm.md)文档。

安装完成后，通过本地的 80 和 443 端口即可访问本地集群内的 Higress Gateway。

注：如果您使用的是本地现存的 K8s 集群，那么可能需要先执行下方命令将 K8s 集群内的端口映射出来，然后再尝试访问本地端口。

```bash
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
```

## 阶段二：配置

假设在 default 命名空间下已经部署了一个名为 foo 的服务，而我们希望创建一个对应 http://foo.bar.com/foo 的路由指向该服务。

如果需要的话，各位可以使用下方 YAML 来创建对应的测试服务。
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

### 方法一：使用 Higress Console 进行配置

编辑本机的 hosts 文件，将`console.higress.io`域名指向该 Higress Gateway 的 IP（在标准 K8s 集群中即前面获取的 LoadBalancer IP。在本地集群中可直接使用 127.0.0.1）。
```
GatewayIP console.higress.io
```

在浏览器中输入`http://console.higress.io`，使用前面获取的用户名密码登录 Higress 控制台（本地集群的用户名密码均为 admin）。

![image](/img/user/quickstart/zh-cn/login.png)

点击左侧“域名管理”导航栏，然后点击页面右侧的“创建域名”按钮。按照下图所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/domain_management.png)

点击左侧“路由管理”导航栏，然后点击页面右侧的“创建路由”按钮。按照下图片所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/route_management.png)

### 方法二：使用 Ingress CRD 进行配置

使用下方 YAML 来创建我们需要的路由配置。
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

## 阶段三：请求验证

执行以下命令，验证测试路由可以正常工作：

```bash
# should output "foo"
curl http://GatewayIP/foo -H 'host: foo.bar.com'
```
