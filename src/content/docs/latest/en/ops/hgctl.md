---
title: hgctl Tool Usage Guide
keywords: [Ingress]
description: hgctl Tool Usage Guide.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/hgctl.md
---

## How to Download hgctl

Download the latest version of hgctl to your local machine using the curl command

```shell
  curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | bash
```

## Installation Profile Description

Higress currently supports three built-in predefined profiles: local-k8s, k8s, and local-docker.

* The local-k8s profile installs Higress to a local k8s cluster such as a kind cluster, mainly used for developing and testing Higress functionality. In addition to installing the Higress core components, it also installs observability components (Grafana + Prometheus), IstioAPI, and GatewayAPI components.
* The k8s profile installs Higress to a k8s cluster, by default only installing the Higress core components.
* The local-docker profile installs Higress to a local docker environment.


### 1. View Default Profile List and Export Profiles

* View profile list

```
hgctl profile list

higress configuration profiles:
    k8s
    local-docker
    local-k8s
```

* Export local-k8s profile to a local file local-k8s.yaml

```shell
hgctl profile dump local-k8s -o ./local-k8s.yaml
```

### 2. Description of the Three Built-in Profile Configurations

Profile content includes seven major configuration items: global, console, gateway, controller, storage, values, and charts.


1. local-k8s profile

The specific content and description of the local-k8s profile are as follows:

```yaml
profile: local-k8s # profile name
global:
  install: local-k8s # installation mode k8s/local-k8s/local-docker
  ingressClass: higress # IngressClass used to filter Ingress resources monitored by Higress Controller.
  enableIstioAPI: true  # If true, Higress Controller will also monitor istio resources
  enableGatewayAPI: true # If true, activate gateway api
  namespace: higress-system # namespace where higress is installed

console:
  replicas: 1 # Number of Higress Console pods
  o11yEnabled: true # If true, will also install observability suite (Grafana + Prometheus)

gateway:
  replicas: 1 # Number of Higress Gateway pods

controller:
  replicas: 1 # Number of Higress Controller pods

# Other custom helm values
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo address
    name: higress  # higress helm chart name
    version: latest # higress helm chart version
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address
    name: standalone  # higress standalone installer name
    version: latest   # higress standalone installer version
```

2. k8s profile

The main difference between the k8s profile and the local-k8s profile is that observability components (Grafana + Prometheus), IstioAPI, and GatewayAPI are not activated by default. If these features are needed, these properties need to be set during installation.

The specific content and description of the k8s profile are as follows:

```yaml
profile: k8s # profile name
global:
  install: k8s # installation mode k8s/local-k8s/local-docker
  ingressClass: higress # IngressClass used to filter Ingress resources monitored by Higress Controller.
  enableIstioAPI: false  # If true, Higress Controller will also monitor istio resources
  enableGatewayAPI: false # If true, activate gateway api
  namespace: higress-system # namespace where higress is installed

console:
  replicas: 1 # Number of Higress Console pods
  o11yEnabled: false # If true, will also install observability suite (Grafana + Prometheus)

gateway:
  replicas: 2 # Number of Higress Gateway pods

controller:
  replicas: 1 # Number of Higress Controller pods

# Other custom helm values
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo address
    name: higress     # higress helm chart name
    version: latest   # higress helm chart version
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address
    name: standalone  # higress standalone installer name
    version: latest   # higress standalone installer version
```


3. local-docker profile

The specific content and description of the local-docker profile are as follows:

```yaml
profile: local-docker # profile name
global:
  install: local-docker # installation mode k8s/local-k8s/local-docker
  
console:
  port: 8080 # console listening port

gateway:
  httpPort: 80 # gateway http listening port
  httpsPort: 443 # gateway https listening port
  metricsPort: 15020 # gateway metrics output listening port

controller:

# Backend storage system settings, currently supporting file system and nacos
storage: 
  url: file://${INSTALLPACKAGEPATH}/conf  # Configuration service URL. If using a standalone deployed Nacos service (version not lower than 2.0.0), the URL format is: nacos://192.168.0.1:8848 - If saving configuration on the local disk, the URL format is: file://opt/higress/conf
  ns: higress-system # Nacos namespace ID used to save Higress configuration
  username:  # Username for accessing Nacos. Only used when Nacos has authentication enabled
  password:  # User password for accessing Nacos. Only used when Nacos has authentication enabled
  dataEncKey: # Key used to encrypt sensitive configuration data. Length must be 32 characters. If not set, Higress will automatically generate a random key. If cluster deployment is needed, this item must be set

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo address
    name: higress     # higress helm chart name
    version: latest   # higress helm chart version
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone installer address
    name: standalone  # higress standalone installer name
    version: latest   # higress standalone installer version
```

The default configuration service URL file://${INSTALLPACKAGEPATH}/conf saves in the local file system, where ${INSTALLPACKAGEPATH} is the conf directory created under the current installation's higress-standalone directory

## Installation Command: hgctl install

The specific parameters of the hgctl install command are as follows:

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

Installation parameter description:

- The core parameters of hgctl install are -s (--set) and -f (--filename).

- The --set parameter sets the value of profile configuration items, and -f passes the yaml file address of custom helm values.

- Specify the installation profile source through -s profile=profile built-in profile name or profile yaml file address.

- After successful installation, the current installation profile configuration will be written to ~/.hgctl/profiles/install.yaml in the current user's $HOME directory, and upgrades will be based on this profile. (This may change in future versions)


### Installation Examples

1. Default installation

```shell
hgctl install

Please select higress install configration profile:

1.Install higress to local kubernetes cluster like kind etc.

2.Install higress to kubernetes cluster

3.Install higress to local docker environment

Please input 1, 2 or 3 to select, input your selection:
```
The default installation does not specify a profile and will prompt you to select an installation profile.


2. Specify k8s profile installation, while activating IstioAPI, GatewayAPI, and customizing helm values for console and gateway resources configuration.

Custom helm values.yaml as follows:

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

Helm custom configuration reference files as follows:
- global and higress-core configuration items: https://github.com/alibaba/higress/blob/main/helm/core/values.yaml
- global and higress-console configuration items: https://github.com/higress-group/higress-console/blob/main/helm/values.yaml

Installation command as follows:

```shell
hgctl install --set profile=k8s  --set global.enableIstioAPI=true --set global.enableGatewayAPI=true --set gateway.replicas=1 -f ./values.yaml

```

3. Install in local docker environment, while specifying gateway http and https ports

```shell
hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443
```

By default, the backend storage uses the file system to save configurations. If the backend storage uses nacos to save configurations, pass --set storage.url=nacos://192.168.0.1:8848 during installation, setting the specific nacos service address.

After installation is complete, a higress-standalone directory is created in the current directory, with the following structure:

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


The specific contents of directories and files are as follows:

* higress-standalone/conf: Configuration backend storage file directory
* higress-standalone/higress: Higress installation file directory
* higress-standalone/higress/compose: Higress docker compose configuration directory
* higress-standalone/higress/bin: Management higress script directory
* higress-standalone/higress/compose/.env: Higress configuration file generated after installation


After successful installation, the current installation profile configuration will be written to: ~/.hgctl/profiles/install.yaml in the current user's $HOME directory, and upgrades will be based on this profile. (This may change in future versions)


## Upgrade Command: hgctl upgrade

Upgrade command parameters as follows:

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

The upgrade command parameters are consistent with the installation parameters, with the core parameters being -s (--set) and -f (--filename).

The main difference is that you cannot set the profile; the upgrade profile comes from the installation profile saved at: ~/.hgctl/profiles/install.yaml.

## Dashboard Command: hgctl dashboard

You can use the hgctl dashboard command to open the Higress Console management interface, Higress Controller Debug interface, Envoy management interface, Grafana, and Prometheus management interfaces

hgctl dashboard command parameters as follows:

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

## Uninstall Command: hgctl uninstall

hgctl uninstall command parameters as follows:

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

hgctl uninstall will not automatically uninstall IstioAPI and GatewayAPI components during uninstallation. If you want to uninstall IstioAPI and GatewayAPI components, add --purge-resources during uninstallation.


## Plugin Command: hgctl plugin command

TBD


