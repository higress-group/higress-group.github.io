---
title: hgctl 工具使用说明
keywords: [Ingress]
description: hgctl 工具使用说明。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/hgctl.md
---

## 如何下载 hgctl

通过 curl 命令下载最新版本的 hgctl 到本地

```shell
  curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | bash
```

## 安装 Profile 说明

higress 目前支持三个内置预定义 profile 包括: local-k8s , k8s, local-docker。

* local-k8s profile 安装 higress 到本地 k8s 集群比如 kind 集群，主要用于开发和测试 higress 功能。 默认安装 higress 核心组件外，还安装包括可观测组件（Grafana + Promethues）, IstioAPI, GatewayAPI组件。
* k8s profile 安装 higress 到 k8s 集群, 默认只安装 higress 核心组件。
* local-docker profile 安装 higress 到本地 docker 环境。


### 1. 查看默认 profile 列表和导出 profile 

* 查看 profile 列表

```
hgctl profile list

higress configuration profiles:
    k8s
    local-docker
    local-k8s
```

* 导出 profile local-k8s profile 到本地 local-k8s.yaml 文件

```shell
hgctl profile dump local-k8s -o ./local-k8s.yaml
```

### 2. 内置三个 profile 配置项说明

profile 内容包含 global, console, gateway, controller, storage, values , charts 七大配置项。


1. local-k8s profile

local-k8s profile 具体内容和说明如下：

```yaml
profile: local-k8s # profile 名称
global:
  install: local-k8s # 安装模式 k8s/local-k8s/local-docker
  ingressClass: higress # 用于过滤被 Higress Controller 监听的 Ingress 资源的 IngressClass。
  enableIstioAPI: true  # 若为true，Higress Controller 将同时监听 istio 资源
  enableGatewayAPI: true # 若为true 激活 gateway api
  namespace: higress-system # higress 安装到的命名空间

console:
  replicas: 1 # Higress Console 的 pod 数量
  o11yEnabled: true # 若为 true，将同时安装可观测性套件（Grafana + Promethues）

gateway:
  replicas: 1 # Higress Gateway 的 pod 数量

controller:
  replicas: 1 # Higress Controller 的 pod 数量

# 其他自定义的 helm values 
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo 地址
    name: higress  # higress helm chart 名称
    version: latest # higress helm chart 版本
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone 安装器地址
    name: standalone  # higress standalone 安装器名称
    version: latest   # higress standalone 安装器版本
```

2. k8s profile

k8s profile  和 local-k8s profile 差异主要在可观测组件（Grafana + Promethues）, IstioAPI, GatewayAPI 默认是没有激活，如果需要这些功能，需要在安装时设置这些属性

k8s profile 具体内容和说明如下：

```yaml
profile: k8s # profile 名称
global:
  install: k8s # 安装模式 k8s/local-k8s/local-docker
  ingressClass: higress # 用于过滤被 Higress Controller 监听的 Ingress 资源的 IngressClass。
  enableIstioAPI: false  # 若为true，Higress Controller 将同时监听 istio 资源
  enableGatewayAPI: false # 若为true 激活 gateway api
  namespace: higress-system # higress 安装到的命名空间

console:
  replicas: 1 # Higress Console 的 pod 数量
  o11yEnabled: false # 若为 true，将同时安装可观测性套件（Grafana + Promethues）

gateway:
  replicas: 2 # Higress Gateway 的 pod 数量

controller:
  replicas: 1 # Higress Controller 的 pod 数量

# 其他自定义的 helm values 
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo 地址
    name: higress     # higress helm chart 名称
    version: latest   # higress helm chart 版本
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone 安装器地址
    name: standalone  # higress standalone 安装器名称
    version: latest   # higress standalone 安装器版本
```


3. local-docker profile

local-docker profile 具体内容和说明如下：

```yaml
profile: local-docker # profile 名称
global:
  install: local-docker # 安装模式 k8s/local-k8s/local-docker
  
console:
  port: 8080 # console 监听端口

gateway:
  httpPort: 80 # gateway 监听 http 端口
  httpsPort: 443 # gateway 监听 https 端口
  metricsPort: 15020 # gateway 指标输出监听端口

controller:

# 后端存储系统设置，现在支持文件系统和 nacos
storage: 
  url: file://${INSTALLPACKAGEPATH}/conf  # 配置服务的 URL。若使用独立部署的 Nacos 服务（版本不低于 2.0.0），URL 格式为：nacos://192.168.0.1:8848 - 若在本地磁盘上保存配置，URL 格式为：file://opt/higress/conf
  ns: higress-system # 用于保存 Higress 配置的 Nacos 命名空间 ID
  username:  # 用于访问 Nacos 的用户名。仅用于 Nacos 启动了认证的情况下
  password:  # 用于访问 Nacos 的用户密码。仅用于 Nacos 启动了认证的情况下
  dataEncKey: # 用于加密敏感配置数据的密钥。长度必须为 32 个字符。若未设置，Higress 将自动生成一个随机的密钥。若需集群部署，此项必须设置

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo 地址
    name: higress     # higress helm chart 名称
    version: latest   # higress helm chart 版本
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone 安装器地址
    name: standalone  # higress standalone 安装器名称
    version: latest   # higress standalone 安装器版本
```

配置服务的 URL 默认 file://${INSTALLPACKAGEPATH}/conf 是保存在本地文件系统下， 其中 ${INSTALLPACKAGEPATH} 是当前安装下 higress-standalone目录下创建 conf 目录

## 安装命令： hgctl install

hgctl install 安装命令具体参数如下：

```shell
hgctl install --help
The install command generates an higress install manifest and applies it to a cluster.

Usage:
  hgctl install [flags]

Examples:
  # Apply a default higress installation
  hgctl install

  # Install higress on local kubernetes cluster 
  hgctl install --set profile=local-k8s 

  # Install higress on local docker environment with specific gateway port
  hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443

  # To override profile setting
  hgctl install --set profile=local-k8s  --set global.enableIstioAPI=true --set gateway.replicas=2"
  
  # To override helm setting
  hgctl install --set profile=local-k8s  --set values.global.proxy.resources.requsts.cpu=500m"
  
Flags:
      --context string      The name of the kubeconfig context to use.
  -f, --filename strings    Path to file containing helm custom values
  -h, --help                help for install
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
  -d, --manifests string    Specify a path to a directory of profiles
                            (e.g. ~/Downloads/higress/manifests).
  -s, --set stringArray     Override an higress profile value, e.g. override profile values (--set gateway.replicas=2), or override helm values (--set values.global.proxy.resources.requsts.cpu=500m).

```

安装参数说明：

- hgctl install 核心参数就是两个 -s (--set) 和 -f (--filename) 。

- --set 参数是设置 profile 配置项的值， -f 传入 helm 自定义 values 值的 yaml 文件地址。

- 通过 -s profile=profile 内置 profile 名称或者 profile yaml 文件地址来指定安装 profile 来源。

- 安装成功后，会在当前用户 $HOME 目录下写入当前安装的profile配置  ~/.hgctl/profiles/install.yaml ， 升级时根据这个 profile 来升级。（后续版本会有变化）


### 安装样例说明

1. 默认安装

```shell
hgctl install

Please select higress install configration profile:

1.Install higress to local kubernetes cluster like kind etc.

2.Install higress to kubernetes cluster

3.Install higress to local docker environment

Please input 1, 2 or 3 to select, input your selection:
```
默认安装没有指定 profile, 会提示选择安装 profile。


2.  指定 k8s profile 安装 ， 同时激活 IstioAPI， GatewayAPI 和 helm values 自定义 console 和 gateway resources 配置。

自定义 helm values.yaml 如下：

```yaml
global:
  istioNamespace: istio-system
  
higress-console:
  resources:
    requests:
      cpu: 500m
      memory: 512Mi
      
higress-core:
  gateway:
    resources:
    requests:
      cpu: 2000m
      memory: 2048Mi
    limits:
      cpu: 2000m
      memory: 2048Mi
```

helm 自定义配置项参考文件如下：
- global 和 higress-core 配置项: https://github.com/alibaba/higress/blob/main/helm/core/values.yaml
- global 和 higress-console 配置项: https://github.com/higress-group/higress-console/blob/main/helm/values.yaml

安装命令如下：

```shell
hgctl install --set profile=k8s  --set global.enableIstioAPI=true --set global.enableGatewayAPI=true --set gateway.replicas=1 -f ./values.yaml

```

3. 本地 docker 环境下安装，同时指定 gateway http 和 https 端口 

```shell
hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443
```

默认安装后端存储采用文件系统保存配置， 如果后端存储采用 nacos 保存， 安装时传入 --set storage.url=nacos://192.168.0.1:8848， 这里设置具体 nacos 服务地址。

安装完成后，在当前目录下创建 higress-standalone 目录，具体结构如下：

```shell
├── hgctl
├── higress-standalone
│  ├── conf
│  │  ├── configmaps
│  │  ├── endpoints
│  │  ├── http2rpcs
│  │  ├── ingressclasses
│  │  ├── ingresses
│  │  ├── mcpbridges
│  │  ├── mutatingwebhookconfigurations
│  │  ├── namespaces
│  │  ├── nodes
│  │  ├── pods
│  │  ├── secrets
│  │  ├── services
│  │  ├── validatingwebhookconfigurations
│  │  └── wasmplugins
│  ├── get-higress.sh
│  └── higress
│      ├── CODEOWNERS
│      ├── LICENSE
│      ├── README.md
│      ├── VERSION
│      ├── bin
│      └── compose

```


目录和文件具体内容如下：

* higress-standalone/conf: 配置后端存储文件目录
* higress-standalone/higress: higress 安装文件目录
* higress-standalone/higress/compose： higress docker compose 配置目录
* higress-standalone/higress/bin： 管理 higress 脚本目录
* higress-standalone/higress/compose/.env: higress 安装后生成配置文件


安装成功后，会在当前用户 $HOME 目录下写入当前安装的 profile 配置: ~/.hgctl/profiles/install.yaml， 升级时根据这个 profile 来升级。（后续版本会有变化）


## 升级命令： hgctl upgrade

升级命令参数如下：

```shell
hgctl upgrade --help

The upgrade command is an alias for the install command that performs additional upgrade-related checks.

Usage:
  hgctl upgrade [flags]

Flags:
      --context string      The name of the kubeconfig context to use.
  -f, --filename strings    Path to file containing helm custom values
  -h, --help                help for upgrade
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
  -d, --manifests string    Specify a path to a directory of profiles
                            (e.g. ~/Downloads/higress/manifests).
  -s, --set stringArray     Override an higress profile value, e.g. to choose a profile
                            (--set profile=local-k8s), or override profile values (--set gateway.replicas=2), or override helm values (--set values.global.proxy.resources.requsts.cpu=500m).
```

升级命令参数和安装参数时一致的，核心参数就是两个 -s (--set) 和 -f (--filename) 。

主要差别是不能设置profile, 升级 profile 是来源于安装时保存： ~/.hgctl/profiles/install.yaml 。

## Dashboard 命令:  hgctl dashbaord 

可以通过 hgctl dashboard 命令打开 Higress Console 管理界面， Higress Controller Debug界面， Envoy 管理界面，Grafana 和 Prometheus 管理界面

hgctl dashboard 命令参数如下：

```shell
hgctl dashboard  --help

Usage:
  hgctl dashboard [flags]
  hgctl dashboard [command]

Aliases:
  dashboard, dash, d

Available Commands:
  console     Open Console web UI
  controller  Open Controller debug web UI
  envoy       Open Envoy admin web UI
  grafana     Open Grafana web UI
  prometheus  Open Prometheus web UI

Flags:
      --browser             When --browser is supplied as false, hgctl dashboard will not open the browser. Default is true which means hgctl dashboard will always open a browser to view the dashboard. (default true)
      --context string      The name of the kubeconfig context to use.
  -h, --help                help for dashboard
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
  -n, --namespace string    Namespace where the addon is running, if not specified, higress-system would be used (default "higress-system")
  -p, --port int            Local port to listen to

Use "hgctl dashboard [command] --help" for more information about a command.

```

## 卸载命令: hgctl uninstall

hgctl uninstall 命令参数如下：

```shell
hgctl uninstall --help

The uninstall command uninstalls higress from a cluster or local environment

Usage:
  hgctl uninstall [flags]

Examples:
# Uninstall higress 
  hgctl uninstal
  
  # Uninstall higress, istioAPI and GatewayAPI from a cluster
  hgctl uninstall --purge-resources


Flags:
      --context string      The name of the kubeconfig context to use.
  -h, --help                help for uninstall
      --kubeconfig string   Path to the kubeconfig file to use for CLI requests.
      --purge-resources     Delete  all of IstioAPI,GatewayAPI resources
```

hgctl uninstall 卸载时不会自动卸载 IstioAPI, GatewayAPI组件， 如果要卸载 IstioAPI, GatewayAPI组件，卸载时加上 --purge-resources。


## 插件命令： hgctl plugin 命令

TBD


