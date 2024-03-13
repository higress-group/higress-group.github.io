---
title: 快速开始
keywords: [Higress]
description: Higress 快速开始.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/quickstart.md
toc_max_heading_level: 4
---

# 快速开始

## 环境一：在 K8s 中使用

### 阶段一：安装

#### 场景一：在标准 K8s 集群中使用

**Helm 安装命令**

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes
```

获取 Higress Gateway 的 LoadBalancer IP，并记录下来。后续可以通过该 IP 的 80 和 443 端口访问 Higress Gateway。
```bash
kubectl get svc -n higress-system higress-gateway -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```
**备注**

如果 LoadBalancer IP 获取不到，说明您当前的 K8s 集群不支持 LoadBalancer 类型的 Service，可以考虑以下方案：

1. 使用云厂商提供的 K8s 服务，例如[阿里云 ACK](https://www.aliyun.com/product/kubernetes)
2. 参考[运维参数配置](https://higress.io/zh-cn/docs/user/configurations)，开启`higress-core.gateway.hostNetwork`，让 Higress 监听本机端口，再通过其他软/硬负载均衡器转发给固定机器 IP
3. （生产不建议）使用开源的负载均衡方案 [MetalLB](https://metallb.universe.tf/)

#### 场景二：在本地 K8s 环境中使用

以下步骤适用于所有在本地启动 K8s 集群进行验证的场景。如果您本地已经配置好了一个测试集群，可以直接跳转到第三步安装 Higress。

##### 第一步：安装 kubectl & kind

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

##### 第二步：创建并启用 kind

首先创建一个集群配置文件: `cluster.conf`

```yaml
# cluster.conf
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
# networking:
  # WARNING: It is _strongly_ recommended that you keep this the default
  # (127.0.0.1) for security reasons. However it is possible to change this.
  # apiServerAddress: "0.0.0.0"
  # By default the API server listens on a random open port.
  # You may choose a specific port but probably don't need to in most cases.
  # Using a random port makes it easier to spin up multiple clusters.
  # apiServerPort: 6443
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

上述配置是为了将本地（127.0.0.1）的80和443端口用于Higress访问

##### 第三步：安装 Higress

本地安装开关: `--set global.kind=true`；
为避免歧义，后面会调整属性名称为：`--set global.local=true`

```bash
helm repo add higress.io https://higress.io/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false
```

> 若要启用 Higress 内置的套件，可参阅[安装部署](../ops/deploy-by-helm.md)文档。

安装完成后，通过本地的 80 和 443 端口即可访问本地集群内的 Higress Gateway。

注：如果您使用的是本地现存的 K8s 集群，那么可能需要先执行下方命令将 K8s 集群内的端口映射出来，然后再尝试访问本地端口。

```bash
kubectl port-forward service/higress-gateway -n higress-system 80:80 443:443
```

### 阶段二：配置

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

#### 方法一：使用 Higress Console 进行配置

使用 [hgctl](https://higress.io/zh-cn/docs/ops/hgctl) 打开控制台：

```bash
hgctl dashboard console
```

首次访问时需要先初始化管理员账号。

![image](/img/user/quickstart/zh-cn/init.png)

初始化完成后，界面会自动跳转至登录页面。请使用前面设置的用户名密码登录 Higress 控制台。

![image](/img/user/quickstart/zh-cn/login.png)

点击左侧“域名管理”导航栏，然后点击页面右侧的“创建域名”按钮。按照下图所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/domain_management.png)

点击左侧“路由管理”导航栏，然后点击页面右侧的“创建路由”按钮。按照下图片所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/route_management.png)

#### 方法二：使用 Ingress CRD 进行配置

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

### 阶段三：请求验证

执行以下命令，验证测试路由可以正常工作：

```bash
# should output "foo"
curl http://GatewayIP/foo -H 'host: foo.bar.com'
```

## 环境二：脱离 K8s 在 Docker Compose 中使用

> **注意**
> 
> Standalone 模式没有大规模生产使用过，目前主要用于本地部署测试的场景，如果生产部署更建议[云原生模式](https://higress.io/zh-cn/docs/ops/deploy-by-helm)部署

### 阶段一：安装

**安装命令一：使用独立部署的 Nacos**

```bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a -c nacos://192.168.0.1:8848 --nacos-username=nacos --nacos-password=nacos
```

请将 `192.168.0.1` 替换为 Nacos 服务器的 IP（如果 Nacos 部署在本机，请不要使用如 `localhost` 或 `127.0.0.1` 的 Loopback 地址），并按需调整 `--nacos-username` 和 `--nacos-password` 的取值。如果 Nacos 服务未开启认证功能，则可以移除这两个参数。

**安装命令二：使用 Higress 内置 Nacos**

```bash
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- -a --use-builtin-nacos
```

注：Windows 系统下可以使用 Cygwin、Git Bash 等类 Unix Shell 中执行上述命令。

### 阶段二：配置

在浏览器中输入`http://127.0.0.1:8080` 进入 Higress 控制台。首次访问时需要先初始化管理员账号。

![image](/img/user/quickstart/zh-cn/init.png)

初始化完成后，界面会自动跳转至登录页面。请使用前面设置的用户名密码登录 Higress 控制台。

![image](/img/user/quickstart/zh-cn/login.png)

点击左侧“服务来源”导航栏，然后点击页面右侧的“创建服务来源”按钮。按照下图所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/service_source_management_standalone.png)

点击左侧“域名管理”导航栏，然后点击页面右侧的“创建域名”按钮。按照下图所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/domain_management.png)

点击左侧“路由管理”导航栏，然后点击页面右侧的“创建路由”按钮。按照下图片所示内容填写表单并点击“确定”按钮。

![image](/img/user/quickstart/zh-cn/route_management_standalone.png)

### 阶段三：请求验证

执行以下命令，验证测试路由可以正常工作：

```bash
# should output a JSON object containing request data 
curl http://localhost/get?foo=bar -H 'host: foo.bar.com'
```
