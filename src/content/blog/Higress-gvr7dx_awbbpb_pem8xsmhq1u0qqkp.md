---
title: "Higress 开源 Plugin Server，简化 Wasm 插件私有化部署难题"
description: "Higress 开源 Plugin Server，简化 Wasm 插件私有化部署难题"
date: "2025-06-18"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

作者：岛风

这篇文章将向大家介绍 Higress 近期在 Wasm 插件生态方面的一个进展——Higress Wasm 插件服务器（Higress Plugin Server）。这个新的组件解决了用户在私有化部署 Higress 网关时拉取插件的痛点，优化了插件的下载与管理效率。

仓库地址：https://github.com/higress-group/plugin-server



## **Wasm 插件：Higress 的扩展能力与挑战**
Higress 自开源以来就一直将 Wasm 技术视为核心的网关扩展手段。Wasm 带来的工程可靠性、沙箱安全性、热更新能力以及 Higress 团队在此基础上构建的域名/路由级生效、Redis 访问能力、AI 特性支持等，都丰富了网关的扩展性，并为企业用户带来了性能提升和成本降低。通过自定义 Wasm 插件，用户可以根据自身的业务需求，在网关层完成鉴权、加解密、会话管理等逻辑，减少了额外资源的消耗，降低了后端服务的处理负担。

尽管 Wasm 插件技术本身具备优势，但在实际的企业级部署和大规模应用场景中，我们依然面临一些实际的挑战，主要体现在以下几个方面：

**1. OCI 机制带来的私有化部署挑战**

当前，Higress Wasm 插件的下载和管理主要依赖 OCI（Open Container Initiative）仓库。

**关于 OCI、oras 和 Docker**

+ **OCI (Open Container Initiative)：** OCI 旨在为容器镜像和运行时定义开放标准，以确保不同容器技术之间的互操作性。在云原生生态中，OCI 镜像仓库（如 Docker Hub、Harbor、registry.k8s.io 等）是分发容器镜像的标准方式。Higress 最初将 Wasm 插件作为 OCI Artifacts 发布，即将其打包成符合 OCI 规范的制品并存储在 OCI 仓库中。
+ **Docker：** Docker 是目前最流行的容器平台，它使用 OCI 镜像作为其核心分发格式。通常，我们使用 docker pull 和 docker push 命令来拉取和推送容器镜像。
+ **oras (OCI Registry As Storage)：** oras 是一个命令行工具，它允许用户在 OCI 仓库中存储和管理任意内容，而不仅仅是容器镜像。对于 Higress Wasm 插件这类非标准的容器镜像（Wasm 模块），oras 提供了一种方便的方式来与 OCI 仓库进行交互（例如拉取、推送 Wasm 插件）。

**OCI 机制的挑战**

虽然 OCI 机制在云原生环境中是标准且高效的方式，但对于一些企业，尤其是对网络安全性有严格要求的私有化部署场景来说，OCI 仓库的引入成了一个不小的门槛，并带来了以下问题：

+ **技术门槛与工具使用不便：** 许多用户可能习惯于应用程序的直接安装或通过简单的包管理器进行部署，而对容器镜像、OCI 标准、以及 oras 这类专门用于非镜像内容的 OCI 工具的使用并不熟悉。这增加了 Wasm 插件的上手难度和运维复杂度。
+ **网络限制与私有化部署：** 许多企业内部网络严格，对外部公共网络（如 Docker Hub、GitHub Container Registry等）的访问有严格限制。私有化部署环境下，更是会因为无法访问外部公开仓库而导致无法配置插件和更新插件。
+ **额外的基础设施搭建：** 为了在私有环境中拉取插件，用户可能需要单独部署和维护一个内部 OCI 仓库。这无疑增加了部署的复杂度和运维成本，对于仅需简单使用 Wasm 插件的用户而言，为了几个插件去搭建和管理一套完整的 OCI 生态，显得过于笨重。
+ **插件迁移困难：** 在不同私有化环境（如开发、测试、生产）之间迁移 Wasm 插件时，由于 OCI 仓库的独立性，往往需要用户手动进行插件的拉取、推送和版本管理，且需要适配不同仓库的认证和网络配置，这增加了操作的复杂性和出错的可能性。

**2. 重复下载与性能开销：Always 策略的隐忧**

Higress 网关拉取 Wasm 插件时，支持插件拉取策略的配置，默认为 IfNotPresent，即本地存在则不重新拉取。这在大多数情况下是合理的。但当用户希望 Wasm 插件能够及时更新（例如在开发测试环境中频繁迭代）或者希望确保始终使用最新版本的插件时，会倾向于将策略设置为 Always，导致以下问题：

+ **网络延迟与带宽消耗：** Always 策略意味着每次 Wasm 插件被引用或网关 Pod 重启时，都会尝试从 OCI 仓库重新下载插件。会引入不必要的网络延迟，并消耗带宽资源。
+ **冗余操作：** 即使插件内容没有变化，Always 策略也会触发下载。尽管 OCI 协议本身支持内容哈希校验，但客户端依然需要与仓库进行通信以确认。

**3. 用户体验与操作复杂度：**

上述问题共同导致了用户在配置和使用 Wasm 插件时，可能会面临不必要的复杂性。我们希望能够提供一种更简单、更符合直觉的插件分发方式，让用户能够更专注于业务逻辑的实现。

正是基于这些痛点，我们开发了 Higress Wasm 插件服务器。



## **Higress Plugin Server：基于 HTTP 的简单、高效分发**
我们的核心思路是：提供一个简单、高可用、基于 HTTP 协议的文件服务器来分发 Wasm 插件。选择 HTTP 的原因是它无处不在，易于部署，易于集成，并且在许多企业内部环境中，HTTP 文件服务是标配且配置简单。

这个新的组件，higress-plugin-server，它承担了以下核心功能和目标：

+ **功能目标：** 提供一个 HTTP 文件服务器，支持网关通过类似 `http://higress-plugin-server.higress-system.svc/plugins/<plugin-name>/<version>/plugin.wasm` 的路径下载 Wasm 插件。
+ **高可用性：** 作为核心组件，它必须能够稳定运行，保障插件分发服务的 SLA。
+ **版本管理：** 镜像内部集成了所有 Wasm 插件，并与插件版本严格绑定。目前插件版本的设计思路是将插件版本和 Higress 网关版本解耦，采用的是覆盖的思路。后续如果有插件版本管理的话，Plugin Server 可以直接支持；如果仍维持现状的话也可通过 Plugin Server 提供的 metadata 中的 md5 字段来区分插件版本。
+ **兼容性：** 与现有的 OCI 插件加载方式无缝共存，用户可以根据自身需求灵活配置插件拉取策略。

  


它的推出，为用户带来了以下优势：

+ **私有化部署利器：** 摆脱对复杂 OCI 仓库的依赖。用户只需直接使用我们预构建的 higress-plugin-server 镜像，即可在任何网络环境下快速、安全地分发 Wasm 插件。
+ **简化与开箱即用：** 对于大多数用户而言，无需过多额外配置，甚至无需感知 OCI 仓库的存在。只需在 Higress 默认的 Helm Chart 安装命令上添加一个参数即可自动部署和配置插件服务器，实现开箱即用的体验。
+ **性能与高可用保障：** HTTP 文件服务本身高效且易于缓存，部署在内网后，能够降低插件下载的延迟和失败率，通过 K8s 部署多副本可以实现高可用。
+ **与现有机制无缝共存：** 用户仍可通过 Higress Console 或环境变量配置 OCI 仓库地址，两者互不干扰。



## **架构设计与实现：从 OCI 到 HTTP 的实现机制**
为了实现上述目标，我们从零开始设计和构建了 higress-plugin-server 组件。

### **3.1 独立组件：higress-plugin-server 仓库**
我们创建了一个 GitHub 仓库 https://github.com/higress-group/plugin-server，仓库结构如下：

```plain
plugin-server/
├──Dockerfile                  # 构建 Nginx 镜像的核心
├──nginx.conf                  # Nginx 配置文件，用于服务静态文件
├──pull_plugins.py             # 插件下载脚本，从 OCI 拉取插件
├──plugins.properties          # 插件列表及版本配置
├──deploy/                     # Kubernetes 部署文件（Service & Deployment）
│   └──service.yaml
│   └──deployment.yaml
└──.github/workflows/          # GitHub Action 流水线定义，实现自动化构建与推送
    └──build-plugin-server-image-and-push.yml
```



### **3.2 构建流程：内部拉取 OCI 插件并转为 HTTP 服务**
plugin-server 的核心在于其 Dockerfile：

```plain
# 构建阶段：处理插件和元数据
FROMpython:3.11-alpineASbuilder

# 安装系统依赖，包括 ORAS 客户端
RUNapkadd--no-cache\
    wget\
    ca-certificates\
    &&update-ca-certificates
RUNset-eux;\
    ORAS_VERSION="1.2.3";\
    ARCH=$(uname-m|sed's/x86_64/amd64/;s/aarch64/arm64/');\
    wget-O/tmp/oras.tar.gz"https://github.com/oras-project/oras/releases/download/v${ORAS_VERSION}/oras_$(echo ${ORAS_VERSION})_linux_${ARCH}.tar.gz"\
    &&tar-zxvf/tmp/oras.tar.gz-C/usr/local/bin\
    &&rm-rf/tmp/oras.tar.gzoras\
    &&orasversion

# 复制并执行 Python 脚本，拉取插件
WORKDIR/workspace
COPYpull_plugins.pyplugins.properties./
RUNpython3pull_plugins.py

# 运行阶段：最终镜像
FROMdocker.io/nginx:alpine

# 从构建阶段复制生成的文件
COPY--from=builder/workspace/plugins/usr/share/nginx/html/plugins

# 复制 Nginx 配置
COPYnginx.conf/etc/nginx/nginx.conf

# 暴露端口并启动 Nginx
EXPOSE8080
CMD["nginx","-g","daemon off;"]
```

  


**关键点解****析****：**

+ **插件拉取：** 在 builder 阶段，我们利用 Python 脚本 pull_plugins.py 和 ORAS 客户端工具，从 Higress 官方的 Wasm 插件仓库拉取所有必要的 Wasm 插件。
+ **文件组织：**{name}/{version}//plugin.wasm 的结构组织，例如 plugins/ai-proxy/1.0.0/plugin.wasm。这种结构清晰明了，便于 HTTP 路径访问。
+ **元数据：** 除了 plugin.wasm 文件本身，我们还生成了 metadata.txt 文件，包含插件名称、大小、MD5 值、创建/修改时间等信息。这为未来实现更智能的插件更新（例如，网关在 Always 策略下，通过比对 MD5 值来判断是否需要重新下载）提供了基础。
+ **Nginx：** 最终镜像基于轻量级的 nginx:alpine。nginx.conf 配置了 Nginx 作为静态文件服务器，开启了 autoindex on（方便调试查看目录内容）和 default_type application/octet-stream（确保 Wasm 文件能正确下载）。
+ **精简高效：** 多阶段构建确保了最终的 Nginx 镜像只包含运行所需的最小文件集，避免了不必要的依赖，保持镜像体积小巧。

### **3.3 插件与镜像版本管理**
我们为 higress-plugin-server 镜像设定了一个明确的版本标签 1.0.0，而不是跟随 higress-gateway 和 higress-console 的版本演进，主要考量是判断其不会有太多版本发布的需求。

通过 GitHub Actions，我们实现了自动化构建和推送流程。当 higress-plugin-server 仓库的 main 分支有更新时，GitHub Action 会自动触发构建，并推送到 Higress 官方的镜像仓库。未来计划监听 higress 主仓库中插件相关 PR 触发镜像构建，以实现插件的动态更新。

### **3.4 Kubernetes 集成**
为了让用户能够便捷地部署 higress-plugin-server，我们将其 Kubernetes 部署配置（Deployment 和 Service）直接集成到了 Higress 主仓库的 Helm Chart 中（higress/helm/core）。

+ **新的 Chart 模板：** 在 higress/helm/core/templates 目录下新增了 plugin-server-deployment.yaml 和 plugin-server-service.yaml。
+ **可配置性：** 通过 values.yaml，用户可以灵活配置 higress-plugin-server 的副本数、镜像版本、资源限制等参数。
+ **一键启用：** 核心改动是引入了一个全局的 Helm 参数 global.enablePluginServer。当用户将此参数设置为 true 时，Helm Chart 会自动渲染并部署 higress-plugin-server 组件。

```plain
# higress/helm/core/values.yaml
...
global:
enablePluginServer:false# 默认关闭，用户可设置为 true 启用
...
pluginServer:
name:"higress-plugin-server"
replicas:2# 默认2副本，推荐高可用
image:plugin-server
hub:higress-registry.cn-hangzhou.cr.aliyuncs.com/higress
tag:"1.0.0"# 明确的镜像版本
# ... 其他资源限制、端口配置等
```



### **3.5 Console 联动：用户体验的最后一步**
为了实现无缝的用户体验，我们还修改了 higress-console 仓库。当用户选择启用 plugin-server 时，Higress Console 会自动将 Wasm 插件的默认下载 URL 配置为 http://higress-plugin-server.higress-system.svc/plugins/{version}/plugin.wasm。

```plain
# higress-console/helm/templates/deployment.yaml
...
spec:
template:
    containers:
      env:
        {{-ifand.Values.global.enablePluginServer(not(hasKey.Values.podEnvs"HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN"))}}
        -name:HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN
          value:"{{ .Values.pluginServer.urlPattern }}"
        {{-end}}
# higress-console/helm/values.yaml
...
pluginServer:
urlPattern:"http://higress-plugin-server.higress-system.svc/plugins/${name}/${version}/plugin.wasm"
```



**智能判断：** 值得注意的是，我们增加了判断逻辑：如果用户已经通过环境变量手动配置了 HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN，则优先使用用户的配置，避免自动覆盖用户意图。这保证了灵活性和兼容性。



## **Higress Plugin Server 使用指南**
现在，介绍如何体验和使用 Higress Plugin Server。我们力求将其做到最简化，让用户能够轻松上手。

### **4.1 一键部署**
从 Higress 的下一个版本（预计 v2.1.5）开始，只需在安装 Higress 时，额外添加一个 Helm 参数，即可同时部署 Higress 核心组件和 Wasm 插件服务器：

```plain
helm repo add higress.io https://higress.cn/helm-charts
helm install higress -n higress-system higress.io/higress --create-namespace --set global.enablePluginServer=true --render-subchart-notes
```

执行上述命令后，可以通过 kubectl get pods -n higress-system 查看到名为 higress-plugin-server 的 Pod 正在运行。

### **4.2 Higress console 自动适配：默认从插件服务器下载**
一旦 higress-plugin-server 被部署并运行，Higress Console 会自动检测到并将其设为 Wasm 插件的默认下载源。

无需进行任何额外配置，即可在 Higress Console 的插件管理页面看到插件的默认下载 URL 已经自动更新为：

http://higress-plugin-server.higress-system.svc/plugins/{version}/plugin.wasm

### **4.3 灵活配置：满足个性化需求**
+ **验证插件下载：** 可以进入 Higress Gateway 的任意 Pod 内部，通过命令行验证插件服务器是否正常工作，例如：

```plain
kubectl exec -it <higress-gateway-pod> -n higress-system -- curl http://higress-plugin-server.higress-system.svc/plugins/key-auth/1.0.0/metadata.txt
```

如果返回插件的元数据信息，则表示插件服务器工作正常。

+ **自定义镜像与插件：** 如果有定制化的 Wasm 插件，可以自行构建 higress-plugin-server 镜像。克隆 higress-plugin-server 仓库，修改 plugins.properties 文件以指定自己的插件列表和 OCI 源，然后执行 docker build 构建并推送到自己的镜像仓库。最后，在 Helm 安装时，修改 pluginServer.image 和 pluginServer.tag 参数，指定为自定义镜像。
+ **imagePullPolicy 策略：** 默认情况下，Higress Wasm 插件的拉取策略是 IfNotPresent。在当前的 higress-plugin-server 版本中，即使设置为 Always 策略，网关也会每次请求 plugin.wasm 文件。未来，我们会利用 metadata.txt 中的 MD5 等信息，优化 Always 策略下的拉取逻辑，实现智能缓存和按需更新。

### **4.4 存量版本使用 Plugin Server**
由于 Higress v2.1.5 截止文章发布时还未 release，或者有存量版本升级大版本的顾虑等其他原因，希望单独使用 Higress Plugin Server，也可以参考 https://github.com/alibaba/higress/blob/main/helm/core/templates/plugin-server-deployment.yaml 单独部署 Plugin Server

并配置 higress-console 的环境变量

HIGRESS_ADMIN_WASM_PLUGIN_CUSTOM_IMAGE_URL_PATTERN=http://higress-plugin-server.higress-system.svc/plugins/${name}/${version}/plugin.wasm

即可使用 Higress Plugin Server。



## 展望未来
坦诚来讲，该特性的复杂度并不高，但 Higress Wasm 插件服务器的推出，是 Higress 团队在持续优化用户体验、降低企业级部署门槛上的重要进展。它使得 Wasm 插件在各种复杂的私有化环境中都能够顺畅运行，也为未来更多高级的插件管理功能打下了坚实的基础。

未来，我们还将持续优化 higress-plugin-server：

+ **更智能的 Always 策略：** 利用 metadata.txt 中的哈希值，实现插件内容的客户端校验，避免不必要的重复下载。
+ **细粒度版本管理：** 目前 Wasm 插件虽然提供了版本号机制，但缺少版本号更新的实践，一直在沿用 1.0.0 版本，未来会探索更灵活的插件版本管理机制，并支持回滚、灰度发布等。
+ **更完善的可观测性：** 增强插件服务器的监控和日志能力，帮助用户快速定位问题。

我们相信，Higress Wasm 插件生态将随着这些基础设施的完善而持续发展。欢迎大家积极尝试 higress-plugin-server，并向我们反馈宝贵的意见和建议。


