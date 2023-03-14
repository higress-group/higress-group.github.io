---
title: 快速开始
keywords: [Higress]
description: Higress 快速开始.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md
---

# 快速开始

## 在标准 K8s 集群中使用

### 第一步：安装 Higress

#### Helm 安装命令

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --show --render-subchart-notes
```

注意：安装完成后会输出一段文本，其中包含获取控制台登录信息的命令。请执行该命令并记录用户名和密码。

![image](/img/user/quickstart/zh-cn/console-credentials.png)

### 第二步：创建测试路由

假设在 default 命名空间下已经部署了一个名为 foo 的服务，而我们希望创建一个对应 http://foo.bar.com/foo 的路由指向该服务。

获取 Higress Gateway 的 LoadBalancer IP
```bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

编辑本机的 hosts 文件，将`console.higress.io`域名指向该 IP。
```
IP console.higress.io
```

在浏览器中输入`http://console.higress.io`，使用前面获取的用户名密码登录 Higress 控制台。

![image](/img/user/quickstart/zh-cn/login.png)

点击左侧“域名管理”导航栏，然后点击页面右侧的“创建域名”按钮。按照下图所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/domain_management.png)

点击左侧“路由管理”导航栏，然后点击页面右侧的“创建路由”按钮。按照下图片所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/route_management.png)

### 第三步：请求验证

测试路由可以正常工作：

```bash
# should output "foo"
curl http://"$(kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}')"/foo -H 'host: foo.bar.com'
```

## 在本地环境中使用

### 第一步：安装 kubectl & kind

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

### 第二步：创建并启用 kind

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

### 第三步：安装 Higress

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.kind=true --set higress-console.o11y.enabled=true  --set higress-console.admin.password.value=admin 
```

### 第四步：创建测试服务

```bash
kubectl apply -f https://github.com/alibaba/higress/releases/download/v0.6.1/quickstart.yaml
```

### 第五步：创建测试路由

编辑本机的 hosts 文件，将`console.higress.io`域名指向`127.0.0.1`。
```
127.0.0.1 console.higress.io
```
 
在浏览器中输入`http://console.higress.io`，使用 admin/admin 登录 Higress 控制台。

![image](/img/user/quickstart/zh-cn/login_local.png)

点击左侧“域名管理”导航栏，然后点击页面右侧的“创建域名”按钮。按照下图所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/domain_management.png)

点击左侧“路由管理”导航栏，然后点击页面右侧的“创建路由”按钮。按照下图片所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/route_management.png)

### 第六步：请求验证

测试路由可以正常工作：

```bash
# should output "foo"
curl http://localhost/foo -H "Host: foo.bar.com"
```