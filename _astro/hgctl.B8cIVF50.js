const e="latest/zh-cn/ops/hgctl.md",s="docs",l="latest/zh-cn/ops/hgctl",a=`
## \u5982\u4F55\u4E0B\u8F7D hgctl

\u901A\u8FC7 curl \u547D\u4EE4\u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u7684 hgctl \u5230\u672C\u5730

\`\`\`shell
  curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | VERSION=latest bash
\`\`\`

## \u5B89\u88C5 Profile \u8BF4\u660E

higress \u76EE\u524D\u652F\u6301\u4E09\u4E2A\u5185\u7F6E\u9884\u5B9A\u4E49 profile \u5305\u62EC: local-k8s , k8s, local-docker\u3002

* local-k8s profile \u5B89\u88C5 higress \u5230\u672C\u5730 k8s \u96C6\u7FA4\u6BD4\u5982 kind \u96C6\u7FA4\uFF0C\u4E3B\u8981\u7528\u4E8E\u5F00\u53D1\u548C\u6D4B\u8BD5 higress \u529F\u80FD\u3002 \u9ED8\u8BA4\u5B89\u88C5 higress \u6838\u5FC3\u7EC4\u4EF6\u5916\uFF0C\u8FD8\u5B89\u88C5\u5305\u62EC\u53EF\u89C2\u6D4B\u7EC4\u4EF6\uFF08Grafana + Promethues\uFF09, IstioAPI, GatewayAPI\u7EC4\u4EF6\u3002
* k8s profile \u5B89\u88C5 higress \u5230 k8s \u96C6\u7FA4, \u9ED8\u8BA4\u53EA\u5B89\u88C5 higress \u6838\u5FC3\u7EC4\u4EF6\u3002
* local-docker profile \u5B89\u88C5 higress \u5230\u672C\u5730 docker \u73AF\u5883\u3002


### 1. \u67E5\u770B\u9ED8\u8BA4 profile \u5217\u8868\u548C\u5BFC\u51FA profile 

* \u67E5\u770B profile \u5217\u8868

\`\`\`
hgctl profile list

higress configuration profiles:
    k8s
    local-docker
    local-k8s
\`\`\`

* \u5BFC\u51FA profile local-k8s profile \u5230\u672C\u5730 local-k8s.yaml \u6587\u4EF6

\`\`\`shell
hgctl profile dump local-k8s -o ./local-k8s.yaml
\`\`\`

### 2. \u5185\u7F6E\u4E09\u4E2A profile \u914D\u7F6E\u9879\u8BF4\u660E

profile \u5185\u5BB9\u5305\u542B global, console, gateway, controller, storage, values , charts \u4E03\u5927\u914D\u7F6E\u9879\u3002


1. local-k8s profile

local-k8s profile \u5177\u4F53\u5185\u5BB9\u548C\u8BF4\u660E\u5982\u4E0B\uFF1A

\`\`\`yaml
profile: local-k8s # profile \u540D\u79F0
global:
  install: local-k8s # \u5B89\u88C5\u6A21\u5F0F k8s/local-k8s/local-docker
  ingressClass: higress # \u7528\u4E8E\u8FC7\u6EE4\u88AB Higress Controller \u76D1\u542C\u7684 Ingress \u8D44\u6E90\u7684 IngressClass\u3002
  enableIstioAPI: true  # \u82E5\u4E3Atrue\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C istio \u8D44\u6E90
  enableGatewayAPI: true # \u82E5\u4E3Atrue \u6FC0\u6D3B gateway api
  namespace: higress-system # higress \u5B89\u88C5\u5230\u7684\u547D\u540D\u7A7A\u95F4

console:
  replicas: 1 # Higress Console \u7684 pod \u6570\u91CF
  o11yEnabled: true # \u82E5\u4E3A true\uFF0C\u5C06\u540C\u65F6\u5B89\u88C5\u53EF\u89C2\u6D4B\u6027\u5957\u4EF6\uFF08Grafana + Promethues\uFF09

gateway:
  replicas: 1 # Higress Gateway \u7684 pod \u6570\u91CF

controller:
  replicas: 1 # Higress Controller \u7684 pod \u6570\u91CF

# \u5176\u4ED6\u81EA\u5B9A\u4E49\u7684 helm values 
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo \u5730\u5740
    name: higress  # higress helm chart \u540D\u79F0
    version: latest # higress helm chart \u7248\u672C
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone \u5B89\u88C5\u5668\u5730\u5740
    name: standalone  # higress standalone \u5B89\u88C5\u5668\u540D\u79F0
    version: latest   # higress standalone \u5B89\u88C5\u5668\u7248\u672C
\`\`\`

2. k8s profile

k8s profile  \u548C local-k8s profile \u5DEE\u5F02\u4E3B\u8981\u5728\u53EF\u89C2\u6D4B\u7EC4\u4EF6\uFF08Grafana + Promethues\uFF09, IstioAPI, GatewayAPI \u9ED8\u8BA4\u662F\u6CA1\u6709\u6FC0\u6D3B\uFF0C\u5982\u679C\u9700\u8981\u8FD9\u4E9B\u529F\u80FD\uFF0C\u9700\u8981\u5728\u5B89\u88C5\u65F6\u8BBE\u7F6E\u8FD9\u4E9B\u5C5E\u6027

k8s profile \u5177\u4F53\u5185\u5BB9\u548C\u8BF4\u660E\u5982\u4E0B\uFF1A

\`\`\`yaml
profile: k8s # profile \u540D\u79F0
global:
  install: k8s # \u5B89\u88C5\u6A21\u5F0F k8s/local-k8s/local-docker
  ingressClass: higress # \u7528\u4E8E\u8FC7\u6EE4\u88AB Higress Controller \u76D1\u542C\u7684 Ingress \u8D44\u6E90\u7684 IngressClass\u3002
  enableIstioAPI: false  # \u82E5\u4E3Atrue\uFF0CHigress Controller \u5C06\u540C\u65F6\u76D1\u542C istio \u8D44\u6E90
  enableGatewayAPI: false # \u82E5\u4E3Atrue \u6FC0\u6D3B gateway api
  namespace: higress-system # higress \u5B89\u88C5\u5230\u7684\u547D\u540D\u7A7A\u95F4

console:
  replicas: 1 # Higress Console \u7684 pod \u6570\u91CF
  o11yEnabled: false # \u82E5\u4E3A true\uFF0C\u5C06\u540C\u65F6\u5B89\u88C5\u53EF\u89C2\u6D4B\u6027\u5957\u4EF6\uFF08Grafana + Promethues\uFF09

gateway:
  replicas: 2 # Higress Gateway \u7684 pod \u6570\u91CF

controller:
  replicas: 1 # Higress Controller \u7684 pod \u6570\u91CF

# \u5176\u4ED6\u81EA\u5B9A\u4E49\u7684 helm values 
values:

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo \u5730\u5740
    name: higress     # higress helm chart \u540D\u79F0
    version: latest   # higress helm chart \u7248\u672C
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone \u5B89\u88C5\u5668\u5730\u5740
    name: standalone  # higress standalone \u5B89\u88C5\u5668\u540D\u79F0
    version: latest   # higress standalone \u5B89\u88C5\u5668\u7248\u672C
\`\`\`


3. local-docker profile

local-docker profile \u5177\u4F53\u5185\u5BB9\u548C\u8BF4\u660E\u5982\u4E0B\uFF1A

\`\`\`yaml
profile: local-docker # profile \u540D\u79F0
global:
  install: local-docker # \u5B89\u88C5\u6A21\u5F0F k8s/local-k8s/local-docker
  
console:
  port: 8080 # console \u76D1\u542C\u7AEF\u53E3

gateway:
  httpPort: 80 # gateway \u76D1\u542C http \u7AEF\u53E3
  httpsPort: 443 # gateway \u76D1\u542C https \u7AEF\u53E3
  metricsPort: 15020 # gateway \u6307\u6807\u8F93\u51FA\u76D1\u542C\u7AEF\u53E3

controller:

# \u540E\u7AEF\u5B58\u50A8\u7CFB\u7EDF\u8BBE\u7F6E\uFF0C\u73B0\u5728\u652F\u6301\u6587\u4EF6\u7CFB\u7EDF\u548C nacos
storage: 
  url: file://\${INSTALLPACKAGEPATH}/conf  # \u914D\u7F6E\u670D\u52A1\u7684 URL\u3002\u82E5\u4F7F\u7528\u72EC\u7ACB\u90E8\u7F72\u7684 Nacos \u670D\u52A1\uFF08\u7248\u672C\u4E0D\u4F4E\u4E8E 2.0.0\uFF09\uFF0CURL \u683C\u5F0F\u4E3A\uFF1Anacos://192.168.0.1:8848 - \u82E5\u5728\u672C\u5730\u78C1\u76D8\u4E0A\u4FDD\u5B58\u914D\u7F6E\uFF0CURL \u683C\u5F0F\u4E3A\uFF1Afile://opt/higress/conf
  ns: higress-system # \u7528\u4E8E\u4FDD\u5B58 Higress \u914D\u7F6E\u7684 Nacos \u547D\u540D\u7A7A\u95F4 ID
  username:  # \u7528\u4E8E\u8BBF\u95EE Nacos \u7684\u7528\u6237\u540D\u3002\u4EC5\u7528\u4E8E Nacos \u542F\u52A8\u4E86\u8BA4\u8BC1\u7684\u60C5\u51B5\u4E0B
  password:  # \u7528\u4E8E\u8BBF\u95EE Nacos \u7684\u7528\u6237\u5BC6\u7801\u3002\u4EC5\u7528\u4E8E Nacos \u542F\u52A8\u4E86\u8BA4\u8BC1\u7684\u60C5\u51B5\u4E0B
  dataEncKey: # \u7528\u4E8E\u52A0\u5BC6\u654F\u611F\u914D\u7F6E\u6570\u636E\u7684\u5BC6\u94A5\u3002\u957F\u5EA6\u5FC5\u987B\u4E3A 32 \u4E2A\u5B57\u7B26\u3002\u82E5\u672A\u8BBE\u7F6E\uFF0CHigress \u5C06\u81EA\u52A8\u751F\u6210\u4E00\u4E2A\u968F\u673A\u7684\u5BC6\u94A5\u3002\u82E5\u9700\u96C6\u7FA4\u90E8\u7F72\uFF0C\u6B64\u9879\u5FC5\u987B\u8BBE\u7F6E

charts:
  higress:
    url: https://higress.io/helm-charts # higress helm chart repo \u5730\u5740
    name: higress     # higress helm chart \u540D\u79F0
    version: latest   # higress helm chart \u7248\u672C
  standalone:
    url: https://higress.io/standalone/get-higress.sh # higress standalone \u5B89\u88C5\u5668\u5730\u5740
    name: standalone  # higress standalone \u5B89\u88C5\u5668\u540D\u79F0
    version: latest   # higress standalone \u5B89\u88C5\u5668\u7248\u672C
\`\`\`

\u914D\u7F6E\u670D\u52A1\u7684 URL \u9ED8\u8BA4 file://\${INSTALLPACKAGEPATH}/conf \u662F\u4FDD\u5B58\u5728\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u4E0B\uFF0C \u5176\u4E2D \${INSTALLPACKAGEPATH} \u662F\u5F53\u524D\u5B89\u88C5\u4E0B higress-standalone\u76EE\u5F55\u4E0B\u521B\u5EFA conf \u76EE\u5F55

## \u5B89\u88C5\u547D\u4EE4\uFF1A hgctl install

hgctl install \u5B89\u88C5\u547D\u4EE4\u5177\u4F53\u53C2\u6570\u5982\u4E0B\uFF1A

\`\`\`shell
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

\`\`\`

\u5B89\u88C5\u53C2\u6570\u8BF4\u660E\uFF1A

- hgctl install \u6838\u5FC3\u53C2\u6570\u5C31\u662F\u4E24\u4E2A -s (--set) \u548C -f (--filename) \u3002

- --set \u53C2\u6570\u662F\u8BBE\u7F6E profile \u914D\u7F6E\u9879\u7684\u503C\uFF0C -f \u4F20\u5165 helm \u81EA\u5B9A\u4E49 values \u503C\u7684 yaml \u6587\u4EF6\u5730\u5740\u3002

- \u901A\u8FC7 -s profile=profile \u5185\u7F6E profile \u540D\u79F0\u6216\u8005 profile yaml \u6587\u4EF6\u5730\u5740\u6765\u6307\u5B9A\u5B89\u88C5 profile \u6765\u6E90\u3002

- \u5B89\u88C5\u6210\u529F\u540E\uFF0C\u4F1A\u5728\u5F53\u524D\u7528\u6237 $HOME \u76EE\u5F55\u4E0B\u5199\u5165\u5F53\u524D\u5B89\u88C5\u7684profile\u914D\u7F6E  ~/.hgctl/profiles/install.yaml \uFF0C \u5347\u7EA7\u65F6\u6839\u636E\u8FD9\u4E2A profile \u6765\u5347\u7EA7\u3002\uFF08\u540E\u7EED\u7248\u672C\u4F1A\u6709\u53D8\u5316\uFF09


### \u5B89\u88C5\u6837\u4F8B\u8BF4\u660E

1. \u9ED8\u8BA4\u5B89\u88C5

\`\`\`shell
hgctl install

Please select higress install configration profile:

1.Install higress to local kubernetes cluster like kind etc.

2.Install higress to kubernetes cluster

3.Install higress to local docker environment

Please input 1, 2 or 3 to select, input your selection:
\`\`\`
\u9ED8\u8BA4\u5B89\u88C5\u6CA1\u6709\u6307\u5B9A profile, \u4F1A\u63D0\u793A\u9009\u62E9\u5B89\u88C5 profile\u3002


2.  \u6307\u5B9A k8s profile \u5B89\u88C5 \uFF0C \u540C\u65F6\u6FC0\u6D3B IstioAPI\uFF0C GatewayAPI \u548C helm values \u81EA\u5B9A\u4E49 console \u548C gateway resources \u914D\u7F6E\u3002

\u81EA\u5B9A\u4E49 helm values.yaml \u5982\u4E0B\uFF1A

\`\`\`yaml
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
\`\`\`

helm \u81EA\u5B9A\u4E49\u914D\u7F6E\u9879\u53C2\u8003\u6587\u4EF6\u5982\u4E0B\uFF1A
- global \u548C higress-core \u914D\u7F6E\u9879: https://github.com/alibaba/higress/blob/main/helm/core/values.yaml
- global \u548C higress-console \u914D\u7F6E\u9879: https://github.com/higress-group/higress-console/blob/main/helm/values.yaml

\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A

\`\`\`shell
hgctl install --set profile=k8s  --set global.enableIstioAPI=true --set global.enableGatewayAPI=true --set gateway.replicas=1 -f ./values.yaml

\`\`\`

3. \u672C\u5730 docker \u73AF\u5883\u4E0B\u5B89\u88C5\uFF0C\u540C\u65F6\u6307\u5B9A gateway http \u548C https \u7AEF\u53E3 

\`\`\`shell
hgctl install --set profile=local-docker --set gateway.httpPort=80 --set gateway.httpsPort=443
\`\`\`

\u9ED8\u8BA4\u5B89\u88C5\u540E\u7AEF\u5B58\u50A8\u91C7\u7528\u6587\u4EF6\u7CFB\u7EDF\u4FDD\u5B58\u914D\u7F6E\uFF0C \u5982\u679C\u540E\u7AEF\u5B58\u50A8\u91C7\u7528 nacos \u4FDD\u5B58\uFF0C \u5B89\u88C5\u65F6\u4F20\u5165 --set storage.url=nacos://192.168.0.1:8848\uFF0C \u8FD9\u91CC\u8BBE\u7F6E\u5177\u4F53 nacos \u670D\u52A1\u5730\u5740\u3002

\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA higress-standalone \u76EE\u5F55\uFF0C\u5177\u4F53\u7ED3\u6784\u5982\u4E0B\uFF1A

\`\`\`shell
\u251C\u2500\u2500 hgctl
\u251C\u2500\u2500 higress-standalone
\u2502  \u251C\u2500\u2500 conf
\u2502  \u2502  \u251C\u2500\u2500 configmaps
\u2502  \u2502  \u251C\u2500\u2500 endpoints
\u2502  \u2502  \u251C\u2500\u2500 http2rpcs
\u2502  \u2502  \u251C\u2500\u2500 ingressclasses
\u2502  \u2502  \u251C\u2500\u2500 ingresses
\u2502  \u2502  \u251C\u2500\u2500 mcpbridges
\u2502  \u2502  \u251C\u2500\u2500 mutatingwebhookconfigurations
\u2502  \u2502  \u251C\u2500\u2500 namespaces
\u2502  \u2502  \u251C\u2500\u2500 nodes
\u2502  \u2502  \u251C\u2500\u2500 pods
\u2502  \u2502  \u251C\u2500\u2500 secrets
\u2502  \u2502  \u251C\u2500\u2500 services
\u2502  \u2502  \u251C\u2500\u2500 validatingwebhookconfigurations
\u2502  \u2502  \u2514\u2500\u2500 wasmplugins
\u2502  \u251C\u2500\u2500 get-higress.sh
\u2502  \u2514\u2500\u2500 higress
\u2502      \u251C\u2500\u2500 CODEOWNERS
\u2502      \u251C\u2500\u2500 LICENSE
\u2502      \u251C\u2500\u2500 README.md
\u2502      \u251C\u2500\u2500 VERSION
\u2502      \u251C\u2500\u2500 bin
\u2502      \u2514\u2500\u2500 compose

\`\`\`


\u76EE\u5F55\u548C\u6587\u4EF6\u5177\u4F53\u5185\u5BB9\u5982\u4E0B\uFF1A

* higress-standalone/conf: \u914D\u7F6E\u540E\u7AEF\u5B58\u50A8\u6587\u4EF6\u76EE\u5F55
* higress-standalone/higress: higress \u5B89\u88C5\u6587\u4EF6\u76EE\u5F55
* higress-standalone/higress/compose\uFF1A higress docker compose \u914D\u7F6E\u76EE\u5F55
* higress-standalone/higress/bin\uFF1A \u7BA1\u7406 higress \u811A\u672C\u76EE\u5F55
* higress-standalone/higress/compose/.env: higress \u5B89\u88C5\u540E\u751F\u6210\u914D\u7F6E\u6587\u4EF6


\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u4F1A\u5728\u5F53\u524D\u7528\u6237 $HOME \u76EE\u5F55\u4E0B\u5199\u5165\u5F53\u524D\u5B89\u88C5\u7684 profile \u914D\u7F6E: ~/.hgctl/profiles/install.yaml\uFF0C \u5347\u7EA7\u65F6\u6839\u636E\u8FD9\u4E2A profile \u6765\u5347\u7EA7\u3002\uFF08\u540E\u7EED\u7248\u672C\u4F1A\u6709\u53D8\u5316\uFF09


## \u5347\u7EA7\u547D\u4EE4\uFF1A hgctl upgrade

\u5347\u7EA7\u547D\u4EE4\u53C2\u6570\u5982\u4E0B\uFF1A

\`\`\`shell
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
\`\`\`

\u5347\u7EA7\u547D\u4EE4\u53C2\u6570\u548C\u5B89\u88C5\u53C2\u6570\u65F6\u4E00\u81F4\u7684\uFF0C\u6838\u5FC3\u53C2\u6570\u5C31\u662F\u4E24\u4E2A -s (--set) \u548C -f (--filename) \u3002

\u4E3B\u8981\u5DEE\u522B\u662F\u4E0D\u80FD\u8BBE\u7F6Eprofile, \u5347\u7EA7 profile \u662F\u6765\u6E90\u4E8E\u5B89\u88C5\u65F6\u4FDD\u5B58\uFF1A ~/.hgctl/profiles/install.yaml \u3002

## Dashboard \u547D\u4EE4:  hgctl dashbaord 

\u53EF\u4EE5\u901A\u8FC7 hgctl dashboard \u547D\u4EE4\u6253\u5F00 Higress Console \u7BA1\u7406\u754C\u9762\uFF0C Higress Controller Debug\u754C\u9762\uFF0C Envoy \u7BA1\u7406\u754C\u9762\uFF0CGrafana \u548C Prometheus \u7BA1\u7406\u754C\u9762

hgctl dashboard \u547D\u4EE4\u53C2\u6570\u5982\u4E0B\uFF1A

\`\`\`shell
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

\`\`\`

## \u5378\u8F7D\u547D\u4EE4: hgctl uninstall

hgctl uninstall \u547D\u4EE4\u53C2\u6570\u5982\u4E0B\uFF1A

\`\`\`shell
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
\`\`\`

hgctl uninstall \u5378\u8F7D\u65F6\u4E0D\u4F1A\u81EA\u52A8\u5378\u8F7D IstioAPI, GatewayAPI\u7EC4\u4EF6\uFF0C \u5982\u679C\u8981\u5378\u8F7D IstioAPI, GatewayAPI\u7EC4\u4EF6\uFF0C\u5378\u8F7D\u65F6\u52A0\u4E0A --purge-resources\u3002


## \u63D2\u4EF6\u547D\u4EE4\uFF1A hgctl plugin \u547D\u4EE4

TBD


`,t={title:"hgctl \u5DE5\u5177\u4F7F\u7528\u8BF4\u660E",description:"hgctl \u5DE5\u5177\u4F7F\u7528\u8BF4\u660E\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Ingress"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/hgctl.md",rawData:void 0};export{o as _internal,a as body,s as collection,t as data,e as id,l as slug};
