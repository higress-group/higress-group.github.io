---
title: Higress 开源一周年：新版本，新标准，新工具，新征程
keywords: [higress,ingress,Gateway API]
description: 支持了 Gateway API 标准，还有全新的运维/开发工具，以及我们新的开源征程
author: 澄潭
date: "2023-11-04"
category: "article"
---

## 历程回顾
![image](https://github.com/johnlanni/higress-group.github.io/assets/6763318/b5f3ee1b-d53a-4fbb-8d4a-82427ebdfe40)

Higress 开源一年时间，一共发布了 18 个 release 版本，收获了 40 多位社区贡献者和 1800+ star，上图是这一年过来达成的一些关键的里程碑。

前面半年通过集成开源生态，打磨开源版本稳定性，并在发布 1.0 GA 版本后，社区又马不停蹄发布了 1.1 和 1.2 两个重要版本，实现了非 K8s 部署，Knative 适配等核心能力。

Higress 1.3 版本已经正式发布，除了增加的新功能，已有能力也在大量社区用户反馈的过程中不断完善改进，这个版本同时标志着 1.x 进入可以大规模生产使用的状态。

## 新版本：功能速览
  
自发布 1.2 版本过去了一个多月时间，1.3 版本正式发布，带来两个全新能力：

- 新标准：支持最新版本 Gateway API 标准，并且具备从 Ingress 平滑渐进演进，以及对接多种服务发现机制的能力
- 新工具：正式 release 了 hgctl (Higress Crontroller) 这个 "All in one" 的新工具，不仅可以替代 Helm 实现更简易的安装，还提供了 WASM 插件开发工具包，以及网关配置检查等丰富功能
  
除了这两个核心功能外，还有一些实用功能：

1. 提供了 Higress Admin Java SDK，可以统一对接 K8s 和非 K8s 环境，管理域名/路由等配置
2. 提供了 OIDC 插件，支持对接 Keycloak/Okta 等第三方身份认证系统
3. Higress Console 的易用性和安全性提升，不再通过路由暴露，支持界面初始化/修改密码
   
与此同时，Higress 开源社区已经开始准备踏上一段全新的开源征程...

## 新标准：支持最新版 Gateway API

Gateway API 在 11 月 1 日正式发布了 1.0.0 版本，其中 GatewayClass, Gateway, HTTPRoute 这三个 API正式宣布 GA，发布了 v1 版本：gateway.networking.k8s.io/v1。

目前 Higress 已经可以支持这些最新版本的 API 配置，只需在安装/升级 Higress 时配置开启 Gateway API：

- 使用 Helm ：通过参数 `--set global.enableGatewayAPI=true`
- 使用 Hgctl ：通过命令行参数或者 install.yaml 中配置 `global.enableGatewayAPI=true`

首先创建 GatewayClass 资源：

``` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: GatewayClass
  metadata:
    name: higress-gateway
  spec:
    controllerName: "higress.io/gateway-controller"
```

接着在安装 Higress 的命名空间下，创建 Gateway 资源，通过 gatewayClassName 关联上面创建的 GatewayClass 资源，指定由 Higress 来管理此 Gateway 配置，下面为域名同时配置了 HTTP 和 HTTPS 入口，并为 HTTPS 入口配置了证书：

``` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: Gateway
  metadata:
    name: higress-gateway
    namespace: higress-system
  spec:
    gatewayClassName: higress-gateway
    listeners:
    - name: foobar
      hostname: "*.foobar.com"
      port: 80
      protocol: HTTP
      allowedRoutes:
        namespaces:
          from: All
    - name: foobar-https
      hostname: "*.foobar.com"
      port: 443
      protocol: HTTPS
    	allowedRoutes:
        namespaces:
          from: All
      tls:
        certificateRefs:
        - kind: Secret
          name: wildcard-foobar-com
        mode: Terminate        
```

因为上面 Gateway 通过 allowedRoutes 配置了允许所有命名空间的路由来关联，所以这里在 default 命名空间下创建 HTTPRoute，关联上面创建的 Gateway，即可定义域名下的具体路由：

``` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: HTTPRoute
  metadata:
    name: foobar
    namespace: default
  spec:
    parentRefs:
    - name: higress-gateway
      namespace: higress-system
    hostnames: ["www.foobar.com"]
    rules:
    - matches:
      - path:
          type: PathPrefix
          value: /foo
      backendRefs:
      - name: foo-service
        port: 5678
```

以上就是 Gateway API 的一个简单用法示例，Gateway API 还有很多功能和玩法，后面 Higress 公众号/博客会出一个系列进行系统分享和介绍。

欢迎结合[官方 API 文档](https://gateway-api.sigs.k8s.io/reference/spec/)，并使用 hgctl （获取方式见下文）在自己电脑上安装一个 local-k8s 模式的 Higress，来开启对这一新标准的探索：
``` bash
  # 一键安装, 交互式命令选择第一种安装模式 local-k8s，将默认安装 Gateway API CRD
  hgctl install
```

### 多种服务发现能力

在 Ingress API 标准下，Higress 对接多种服务发现能力是独树一帜的，在 Gateway API 标准下， Higress 仍就保持了这一能力优势：

首先通过 McpBridge 资源，可以定义多种服务发现机制：

``` yaml
  apiVersion: networking.higress.io/v1
  kind: McpBridge
  metadata:
    name: default
    namespace: higress-system
  spec:
    registries:
    - domain: 127.0.0.1
      nacosGroups:
      - DEFAULT_GROUP
      name: my-local-nacos
      port: 8848
      type: nacos2
    - domain: 127.0.0.1
      name: my-local-zk
      port: 2181
      type: zookeeper      
    - domain: 127.0.0.1
      name: my-local-eureka
      port: 8761
      type: eureka
    - domain: 127.0.0.1
      consulDatacenter: dc1      
      name: my-local-consul
      port: 8500
      type: consul
```

创建一个 HTTPRoute 资源，可以同时对接 K8s 服务，和注册中心的服务，并实现灰度路由能力：

``` yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: HTTPRoute
  metadata:
    name: http
    namespace: default
  spec:
    parentRefs:
    - name: higress-gateway
      namespace: higress-system
    rules:
    - matches:
      - path:
          type: PathPrefix
          value: /
      backendRefs:
      - name: service-provider.DEFAULT-GROUP.public.nacos
        group: networking.higress.io
        port: 8080
        weight: 90
      - name: foo-service
        port: 5678
        weight: 10
```

和 K8s 服务不同的是，这里 group 为 `networking.higress.io` 的服务并不需要提前创建 CRD 资源，这更符合传统微服务用户的习惯，即服务模型不需要提前创建，是通过服务节点注册自动生成。

### Ingress API 和 Gateway API 之间如何选择

有了 Gateway API，是否应该立即抛弃 Ingress API？

只有最合适的，没有最好的。Gateway API 虽然为更多网关能力做了标准化，但 CRD 的种类和复杂度也增加了，相比之下对于大部分简单用例场景，Ingress API 更加简单易用。

对于以下场景，采用 Gateway API 替代 Ingress API 会带来很大帮助：

- 大型团队划分了 SRE 角色和业务研发角色，由 SRE 通过 Gateway 资源统一管理站点域名和证书，由业务研发通过 HTTPRoute 资源管理业务路由，实现职责划分，权限收敛
- 创建的路由和 Service 有不在一个命名空间的需求，可以借助 ReferenceGrant 资源实现
- 有大量证书需要集中式管理，不希望将证书 Secret 同步到 Ingress 所在命名空间，带来安全风险

Gateway API 的另一个好处是对于更多功能的标准化定义，我们建议遇到实际需要再转换到这个新的标准，而不必盲目跟随。

Higress 支持 Gateway API 和 Ingress API 混合使用，Gateway API 下的域名路由将比 Ingress API 优先匹配，和 Ingress 相同资源名称的 HTTPRoute 还会继承 WASM 插件配置，这样用户可以按需采用 Gateway API，平滑地完成从 Ingress API 向 Gateway API 的演进，无需焦虑 API 标准升级过程中产生业务损失。

## 新工具：All in one 的 hgctl

### 替代 Helm 用于安装/升级

在 K8s 下用 Helm 安装/升级组件很方便，但在 Higress 的场景下仍然存在一些问题：

1. 无法支持非 K8s 场景下的安装/升级
2. Higress 有很多安装参数，进行升级等操作时不好维护，使用`reuse-values` 有一些副作用，且容易误操作
3. 无法管理 CRD 跟随版本更新，需要手动更新

Higress 借鉴了 istio 的 istioctl，提供了 hgctl 这个命令行工具解决了上述问题，通过以下命令即可安装 hgctl

``` bash
  # 下载最新版 Hgctl：
  curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | VERSION=latest bash
```

hgctl 集成了三种 Higress 安装模式，并统一了升级/运维操作：

1. 本地 K8s 环境（例如kind/k3s）模式
2. 正式 K8s 环境模式
3. 不依赖 K8s 的纯 Docker 环境模式

直接执行 `hgctl install` 命令即可选择任意模式进行安装

安装配置文件将存至 `~/.hgctl/profiles/install.yaml` 目录下，查看该文件内容如下：

``` yaml
  charts:
    higress:
      name: higress
      # 安装文件的 helm repo 地址
      url: https://higress.io/helm-charts
      # 执行 hgctl upgrade 时将自动更新至最新版本
      version: latest
  console:
    # 开启可观测组件
    o11YEnabled: true
    # 控制台实例数
    replicas: 1
  controller:
    # 控制面组件实例数
    replicas: 1
  gateway:
    # 数据面组件实例数
    replicas: 1
  global:
    # 开启 Gateway API
    enableGatewayAPI: true
    # 开启 Istio API
    enableIstioAPI: true
    # 设置监听的 ingress class
    ingressClass: higress
    # 安装模式
    install: local-k8s
    # 安装命名空间
    namespace: higress-system
  # 配置传递给 helm 的 values 参数 
  values: {}
  profile: local-k8s
```

修改上面文件的内容后，执行`hgctl upgarde`即可实现参数变更生效，如果只想修改参数，不想触发版本升级，可以将 version 参数固定为当前版本。

### WASM 插件开发工具包

为了标准化并简化 WASM 插件的开发/编译/测试/发布，Higress 提供了 `hgctl plugin` 这一子命令，使用方式为：

1. `hgctl plugin init`: 初始化 Golang WASM 插件项目，包括三个文件；
2. 用户编写 WASM 插件逻辑；
3. `hgctl plugin build --output-type files`: 构建 WASM 插件，在本地输出构建产物；
4. `hgctl plugin test: 使用 docker compose` 在本地测试 WASM 插件，如需修改插件逻辑，则返回第 2 步；
5. `hgctl plugin build --output-type image`: 构建 WASM 插件作为 OCI 镜像上传至镜像仓库；
6. `hgctl plugin install`: 安装 WASM 插件，可以通过本地的 yaml 文件或插件项目进行安装。

另外，若需要查看已安装的插件，则使用 `hgctl plugin ls`；若需要操作插件配置，则使用 `hgctl plugin config`

通过这个工具，可以在构建 WASM 插件的同时，根据配置代码自动生成插件的配置说明文档，以及包含插件配置约束的元信息文件，这些内容都将和 WASM 文件一起放入 OCI 镜像制品中，通过镜像方式进行版本管理和分发。这一机制是后续 Higress 建设 WASM 插件市场的基石。

### 其他功能

另外介绍两个实用的子命令：

1. `hgctl dashboard`: 用于呼出 UI 界面，例如 Higress 控制台，直接通过 `hgctl dashboard console` 即可打开

``` bash
  $ hgctl dashboard
  Access to Higress web UIs
  
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
```

2. `hgctl gateway-config`: 用于查看数据面的 envoy 配置，可以快速验证配置是否正确下发

``` bash
  $ hgctl gateway-config
  Retrieve information about Higress Gateway Configuration.
  
  Usage:
    hgctl gateway-config [command]
  
  Aliases:
    gateway-config, gc
  
  Available Commands:
    all         Retrieves all Envoy xDS resources from the specified Higress Gateway
    bootstrap   Retrieves bootstrap Envoy xDS resources from the specified Higress Gateway
    cluster     Retrieves cluster Envoy xDS resources from the specified Higress Gateway
    endpoint    Retrieves endpoint Envoy xDS resources from the specified Higress Gateway
    listener    Retrieves listener Envoy xDS resources from the specified Higress Gateway
    route       Retrieves route Envoy xDS resources from the specified Higress Gateway
```

## 新征程：API Gateway

上面说了 Gateway API，接着我们聊聊 API Gateway 😄，API Gateway 有两层定义：

1. 狭义上：满足统一接入，将路由转发到不同服务的运维需求，即可称为 API Gateway；这里 API 的定义是服务的路由
2. 广义上：在实现服务转发的基础上，需要识别带业务语义的接口，将业务能力 API 化管理，统一对外提供服务；这里 API 的定义是业务功能接口

Higress 已经实现了狭义上的 API Gateway 能力，并且是基于 Gateway/Ingress API 这些通用路由标准来实现的。而与服务路由标准不同，业务功能接口的标准是 Swagger/OAS3/RPC IDL 等，做为 API Gateway 需要提供以下关键能力：

1. 支持通过上传 Swagger 等接口定义文件的方式导入 API
2. 对 API 实现精细化策略管理，例如根据出入参定义实现参数映射/转换
3. 实现以 API 方式开放能力时的认证/鉴权，调用量控制/审计能力

Higress 新的开源征程将向具备业务 API 管理能力的 API Gateway 形态进发。在实现方式上，我们将基于 WASM 插件去扩展这一部分能力，这可以降低我们对上游 Envoy 社区的侵入性改造，同时让对 API 的精细化策略管理具备自定义扩展能力。
目前社区已经有一些 Proposal ，欢迎了解：

https://github.com/alibaba/higress/issues/535

https://github.com/alibaba/higress/issues/601

欢迎有更多小伙伴加入，和我们一起踏上新的征程，有兴趣的小伙伴可以联系我(微信：nomadao)，加入 API Gateway 的 SIG（兴趣小组）。

## 社区致谢

首先要感谢 Envoy 和 Istio 社区，Higress 站在这两个软件的肩膀上演进能力，得以：

1. 通过 WASM 机制扩展 Envoy 数据面能力，持续不断地扩大网关插件生态
2. 通过专注在网关领域，在 Istio 优秀的控制面基础上，进一步做抽象和简化，降低上手和运维门槛

还要感谢参与 Higress 开源贡献的开发者们，这里重点感谢下为 1.3 版本做出核心贡献的开发者：

### Maintainer：董艺荃(CH3CHO)

人如其名“艺全”，十八般武艺样样精通，不管是控制台 TS 前端，Java 后台，还是 Higress 的 GO 控制面，以及 Standalone 安装 Shell 脚本和各种 CICD 流程，通通手到擒来。

在 1.3 版本中主要负责了 Higress 支持 Gateway API 的能力，以及实现了 Higress Admin Java SDK 可以提供外部集成用于管理 Higress 配置，并改进了 Higress Console 的安全性和易用性。

除了开发贡献之外，他还对社区用户充满善意和热情，无论是在 GitHub 的 Issues/Discussions，或是社区交流微信/钉钉群，随处可见他帮助用户解决问题的身影。

### Approver：吴新军(Jun)，刘训灼(Xunzhuo)

两位都在多个 Higress 版本为社区做出了贡献，Jun 的主要贡献有：在多注册中心的服务发现支持，全局配置管理架构抽象；Xunzhuo 的主要贡献有：Higress E2E 测试流程的搭建，GitHub CI 流程的建设，hgctl 的整体架构设计。

在 1.3 版本中二位协作完成了 hgctl 的多样化能力建设，帮助 Higress 的易用性又上到了一个新的台阶。

两位同学作为 Approver 积极参与社区贡献 PR 的 Review，目前分别是 Higress Tools SIG 和 Higress GatewayAPI SIG 的领导者。

### Member：韦鑫(WeixinX)，封宇腾(Fkbqf)

两位都是通过中科院开源之夏（OSPP 2023）项目开始参与 Higress 贡献，WeixinX 是一名研二的学生，Fkbqf 是一名大三的学生。

在 1.3 版本中，WeixinX 实现了 hgctl plugin 子命令的能力，同时贡献了 Go 实现的 Basic Auth 插件，以及对标 Spring Cloud Gateway 请求响应转换能力的 Transformer 插件；Fkbqf 则实现了更为复杂的 OIDC 插件，具备比 Envoy 自带 OAuth2 Filter 更强大的功能，并且具备良好的扩展性。

两位同学除了开发贡献以外，用课余时间积极参与 Higress 社区周会，一起探讨和学习技术，不亦乐乎。能够成为你们人生学业进阶路上的阶梯，Higress 荣幸之至。

Higress 社区后续整体的 Roadmap 规划如下：

![image](https://github.com/johnlanni/higress-group.github.io/assets/6763318/f646d9ad-d2d0-4496-b164-2884851e9e0c)

欢迎更多小伙伴一起加入我们：

![higress-comm](https://github.com/johnlanni/higress-group.github.io/assets/6763318/d8e09712-0b3b-4c5a-b478-c84da139cf2f)

