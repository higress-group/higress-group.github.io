---
title: higress-core源码分析
keywords: [higress]
description: 通过分析higress-core源码，了解higress-core自启动以来做了哪些事情
author: SJC
date: "2024-1-25"
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/blog/higress-code.md
category: "article"
---

## 引言

在开源社区中，源码分析是深入理解项目内部机制的关键步骤。通过仔细研究项目的源代码，我们可以揭示背后的设计原理、算法和工作流程。这不仅有助于提高我们的编程技能，还可以为开发者社区提供宝贵的学习资源。

本文将聚焦于分析[Higress](https://github.com/alibaba/higress)的源码，该项目在开源界备受瞩目。通过浏览阅读其代码，我们将初步展现其核心特性、架构设计和实现细节。希望各位用户以及开发者在本文中能够找到有价值的见解。

## 关于Higress

Higress是基于阿里内部的Envoy Gateway实践沉淀、以开源Istio + Envoy为核心构建的下一代云原生网关，实现了流量网关 + 微服务网关 + 安全网关三合一的高集成能力，深度集成Dubbo、Nacos、Sentinel等微服务技术栈，能够帮助用户极大的降低网关的部署及运维成本且能力不打折；在标准上全面支持Ingress与Gateway API，积极拥抱云原生下的标准API规范；同时，Higress Controller也支持Nginx Ingress平滑迁移，帮助用户零成本快速迁移到Higress。

## 代码目录说明

-   cmd: 命令行参数解析等处理代码
-   pkg/ingress: Ingress 资源转换为 Istio 资源等相关代码
-   pkg/bootstrap: 包括启动 gRPC/xDS/HTTP server 等的代码
-   registry: 实现对接多种注册中心进行服务发现的代码
-   envoy: 依赖的 envoy 官方仓库 commit，以及对应的补丁代码
-   istio: 依赖的 istio 官方仓库 commit，以及对应的补丁代码
-   plugins: Higress 插件 sdk，以及官方内置插件代码
-   script: 编译相关脚本
-   docker: docker 镜像构建相关脚本

本文主要围绕着higress-core组件的源码，研究higress-core自启动以来做了哪些事情。higress-core的代码主要位于`pkg`目录下。

## higress-core源码整体分析

### 启动入口：pkg/cmd/server.go

在该文件下，主要进行了命令参数的解析，并调用`NewServer`来创建一个Server实例，调用该实例的`Start`方法来启动实例Server，调用`waitForMonitorSignal`方法来监听进程的退出。

显然这里有两个很重要的方法函数：`NewServer`和`Start`，接下来针对这两个函数进行具体分析。

### 创建实例：NewServer

#### 初始化Pilot的环境 API`model.Environment`

`model.Environment`为Pilot 中的核心环境对象，集成了许多不同的组件，包括服务发现、配置存储、网络观察等，以提供一个完整的环境 API。

```go
e := &model.Environment{
    PushContext:  model.NewPushContext(),
    DomainSuffix: constants.DefaultKubernetesDomain,
    MCPMode:      true,
}
```

#### 为`model.Environment`设置`Ledger`


```go
e.SetLedger(buildLedger(args.RegistryOptions))
```

`Ledger` 是一个表示经过修改的 map 的接口。这个 map 具有三个独特的特征：

1.  每个 map 的唯一状态都有一个唯一的哈希值。
1.  map 的先前状态在固定的时间内被保留。
1.  给定先前的哈希值，我们可以从 map 中检索先前的状态（如果仍然被保留）。

`Ledger`提供了个接口来获取之前版本的Value，接口详情如下：


```go
// GetPreviousValue executes a get against a previous version of the ledger, using that version's root hash.
GetPreviousValue(previousRootHash, key string) (result string, err error)
```

#### 为`model.Environment`设置服务发现的接口`ServiceDiscovery`，用于列举服务和实例。

```go
ac := aggregate.NewController(aggregate.Options{
    MeshHolder: e,
})
e.ServiceDiscovery = ac
```

#### 初始化`Server`实例

```go
s := &Server{
    ServerArgs:      args,
    httpMux:         http.NewServeMux(),
    environment:     e,
    readinessProbes: make(map[string]readinessProbe),
    server:          server.New(),
}
s.environment.Watcher = mesh.NewFixedWatcher(&v1alpha1.MeshConfig{})
s.environment.Init()
```

这里说明一下`Server`结构体的各个字段的含义：
```go
type Server struct {
    *ServerArgs  // Server参数配置
    environment      *model.Environment  // Pilot环境配置
    kubeClient       higresskube.Client  // 与 Kubernetes 集成的客户端
    configController model.ConfigStoreCache  // 配置存储控制器
    configStores     []model.ConfigStoreCache  // 多个配置存储的缓存
    httpServer       *http.Server  // HTTP 请求处理器
    httpMux          *http.ServeMux  // HTTP 请求多路复用器
    grpcServer       *grpc.Server  // grpc服务
    xdsServer        *xds.DiscoveryServer  // xds服务
    server           server.Instance  // Pilot Server实例配置
    readinessProbes  map[string]readinessProbe  // server内部服务记录表，记录服务是否准备好
}
```

> 在这里，`server.Instance`维护了一个chan变量`components chan Component`，`Component`则定义了一个函数方法模板。当我们调用`Instance`的`RunComponent(t Component)`方法，则会将变量`t`发送给`components`管道，而我们调用`Instance`的`Start(stop <-chan struct{}) error`方法，则会从`components`管道去接收`Component`对象，并执行该对象的函数方法。

```
type Component func(stop <-chan struct{}) error
```

#### 创建初始启动函数列表

```go
initFuncList := []func() error{
    s.initKubeClient,
    s.initXdsServer,
    s.initHttpServer,
    s.initConfigController,
    s.initRegistryEventHandlers,
    s.initAuthenticators,
}
```

- `initKubeClient`函数

    1. 首先判断`kubeClient`是否为空，不为空进行下一步；

    2. 调用`istiokube.DefaultRestConfig`方法，创建一个具有 RESTful 风格的`Kubernetes Config`；

    3. 以`Kubernetes Config`为入参，调用`istiokube.NewClientConfigForRestConfig`方法创建一个具有 RESTful 风格的`Kubernetes Client Config`；

    4. 调用higress定义的`NewClient`方法，集成 Istio 客户端、Higress 客户端和可能的 Kingress 客户端，并为每个客户端设置了相应的 SharedInformerFactory。

- `initXdsServer`函数

    1. 调用`pilot xds`的`NewDiscoveryServer`方法，创建一个`xdsServer`实例，并初始化一些资源。
        ```go
        s.xdsServer = xds.NewDiscoveryServer(s.environment, nil, PodName, PodNamespace, s.RegistryOptions.KubeOptions.ClusterAliases)
        s.xdsServer.McpGenerators[gvk.WasmPlugin.String()] = &mcp.WasmpluginGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.DestinationRule.String()] = &mcp.DestinationRuleGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.EnvoyFilter.String()] = &mcp.EnvoyFilterGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.Gateway.String()] = &mcp.GatewayGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.VirtualService.String()] = &mcp.VirtualServiceGenerator{Server: s.xdsServer}
        s.xdsServer.McpGenerators[gvk.ServiceEntry.String()] = &mcp.ServiceEntryGenerator{Server: s.xdsServer}
        s.xdsServer.ProxyNeedsPush = func(proxy *model.Proxy, req *model.PushRequest) bool {
            return true
        }
        ```
    2. 将`xdsServer`的`Start`方法注册给pilot server instance，并调用higress server的`initGrpcServer`初始化函数，将xds服务注册在grpc服务上，使得可以通过grpc协议端口进行xds协议的通信。

- `initHttpServer`函数，初始化http server，添加8888端口的debug接口的处理器，并添加`/ready`路由的处理器，用于遍历higress server的`readinessProbes`，判断内部服务记录表内的服务是否准备完毕。

    ```go
    s.xdsServer.AddDebugHandlers(s.httpMux, nil, true, nil)
    s.httpMux.HandleFunc("/ready", s.readyHandler)
    ```

- `initConfigController`函数，这部分内容比较核心，将会在后面详细展开，暂时先跳过。
- `initRegistryEventHandlers`函数，这部分内容跟`initConfigController`函数有关，暂时先跳过。
- `initAuthenticators`函数，顾名思义，就是初始化认证器，并将其应用于 xDS 服务器。通过添加不同的认证器，可以支持不同的身份验证方式，这样服务器在处理请求时可以验证客户端的身份信息。

#### 遍历启动函数列表，执行启动函数

```go
for _, f := range initFuncList {
    if err := f(); err != nil {
       return nil, err
    }
}
```

#### 注册Pilot Server

```go
s.server.RunComponent(func(stop <-chan struct{}) error {
    s.kubeClient.RunAndWait(stop)
    return nil
})
```

>注意这里的`kubeClient`所调用的方法是`istio`的Kubernetes客户端提供的。

#### 在ready服务记录表里注册xds服务

```go
s.readinessProbes["xds"] = func() (bool, error) {
    return s.xdsServer.IsServerReady(), nil
}
```

### 启动实例：Start

- 第一部分：遍历pilot server的`components`，执行chan管道里的函数

```go
if err := s.server.Start(stop); err != nil {
    return err
}
```

- 第二部分：等待缓存同步完成

```go
if !s.waitForCacheSync(stop) {
    return fmt.Errorf("failed to sync cache")
}
```

- 第三部分：启动grpc服务

```go
grpcListener, err := net.Listen("tcp", s.GrpcAddress)
if err != nil {
    return err
}
go func() {
    log.Infof("starting gRPC discovery service at %s", grpcListener.Addr())
    if err := s.grpcServer.Serve(grpcListener); err != nil {
       log.Errorf("error serving GRPC server: %v", err)
    }
}()
```

- 第四部分：启动http服务

```go
httpListener, err := net.Listen("tcp", s.HttpAddress)
if err != nil {
    return err
}
go func() {
    log.Infof("starting HTTP service at %s", httpListener.Addr())
    if err := s.httpServer.Serve(httpListener); err != nil {
       log.Errorf("error serving http server: %v", err)
    }
}()
```

## higress-core核心源码分析

在前面有两个函数`initConfigController`和`initRegistryEventHandlers`我们没有介绍，这两个函数可以说是higress-core的核心代码，接下来对这两个函数进行具体剖析。在分析之前，我们先看一下`pkg`其他目录的功能。

```
.
├── common //公共包
├── config //配置包
├── ingress //higress定义的ingress资源控制器
│   ├── config //配置ingress config和kingress config
│   ├── kube //集成Kubernetes配置
│   │   ├── annotations //处理 Ingress 的注解相关的代码
│   │   ├── common //通用的代码和工具函数
│   │   ├── configmap //处理 ConfigMap 相关的代码
│   │   ├── controller //控制器相关的代码
│   │   ├── http2rpc //处理 HTTP 到 RPC 的转换的代码
│   │   ├── ingress //处理 Ingress 配置的代码
│   │   ├── ingressv1 //Ingress 的 API 版本 v1 相关的代码
│   │   ├── kingress //处理 Kingress 相关的代码
│   │   ├── mcpbridge //MCP（Mesh Configuration Protocol）的桥接相关的代码
│   │   ├── secret //处理 Secret 相关的代码
│   │   ├── util //通用的工具函数
│   │   └── wasmplugin //处理 WebAssembly 插件相关的代码
│   ├── log //日志
│   ├── mcp
│   └── translation //翻译模块
└── kube //higress定义的Kubernetes客户端，包含了istio提供的Kubernetes客户端
```

通过目录我们可以清晰地看到higress集成了多个Kubernetes资源以及Ingress配置。

### `initConfigController`函数剖析

我们先大致分析一下这个函数的流程，函数的具体逻辑稍后分析。最后会给出一个函数调用的流程图，可以结合流程图进行源码的理解分析。

1. 设置 `common.Options` 结构体的一些选项，这些选项可能影响配置控制器的行为。这些选项包括是否启用控制器、集群 ID、Ingress 类等
2. 创建一个 `translation.NewIngressTranslation` 对象，该对象用于处理 Ingress 的翻译和配置
3. 向 `ingressConfig` 中添加本地集群的配置，并获取对应的 Ingress 控制器和 Kingress 控制器
4. 使用 `configaggregate.MakeCache` 创建一个带有缓存的配置控制器
5. 创建一个 Istio 配置存储，并将其设置到 `Server` 对象的 `environment.IstioConfigStore` 中
6. 将 `ingressConfig` 设置到 `Server` 对象的 `environment.IngressStore` 中
7. 将包含配置和启动 Ingress 控制器、Kingress 控制器以及相关的配置控制器的函数方法注册到pilot server instance的`components`管道中。

我们从中挑选出几个比较重要的函数出来：`NewIngressTranslation`、`AddLocalCluster`、`InitializeCluster`以及`configController`的`Run`方法，其它的像`MakeCache`、`MakeIstioStore`方法则是有`istio`提供的函数方法，用于对接higress中的discovery容器中`Pilot`组件。确定好接下来要分析的内容之后，我们来到`pkg/ingress/translattion`目录，查看一下`translation.go`。

#### `translation.go`剖析

`IngressTranslation`实现了两个接口：`model.ConfigStoreCache`和`model.IngressStore`，其中`model.ConfigStoreCache`还包含了`model.ConfigStore`接口。我们可以大致浏览一下，可以发现基本上是调用`IngressTranslation`结构体中的`ingressConfig`和`kingressConfig`的方法，位于`pkg/ingress/config`目录下。

除了实现接口方法之外，还提供了`NewIngressTranslation`、`AddLocalCluster`、`InitializeCluster`方法。同样地，我们也可以发现这三个方法本质上也是调用`ingressConfig`和`kingressConfig`的方法。

既然`translation.go`本质上是调用`pkg/ingress/config`目录下的函数，不妨我们进入该目录，查看一下`ingress_config.go`，对于`kingress_config.go`，我们暂不做分析。

#### `ingress_config.go`剖析

在`ingress_config.go`中有一个名为`IngressConfig`结构体，内容如下(附带注释)：
```go
type IngressConfig struct {
    // 远程 Ingress 控制器的映射，键为集群 ID，值为 common.IngressController
    remoteIngressControllers map[string]common.IngressController
    // 用于保护并发访问 remoteIngressControllers 的互斥锁
    mutex sync.RWMutex

    // Ingress 路由和域名的缓存
    ingressRouteCache  model.IngressRouteCollection
    ingressDomainCache model.IngressDomainCollection

    // 本地 Kubernetes 客户端
    localKubeClient kube.Client

    // 处理 VirtualService 事件的事件处理程序切片
    virtualServiceHandlers []model.EventHandler
    // 处理 Gateway 事件的事件处理程序切片
    gatewayHandlers []model.EventHandler
    // 处理 DestinationRule 事件的事件处理程序切片
    destinationRuleHandlers []model.EventHandler
    // 处理 EnvoyFilter 事件的事件处理程序切片
    envoyFilterHandlers []model.EventHandler
    // 处理 ServiceEntry 事件的事件处理程序切片
    serviceEntryHandlers []model.EventHandler
    // 处理 WasmPlugin 事件的事件处理程序切片
    wasmPluginHandlers []model.EventHandler

    // 用于处理监视错误的处理程序
    watchErrorHandler cache.WatchErrorHandler

    // 缓存的 EnvoyFilter 配置
    cachedEnvoyFilters []config.Config

    // 正在监视的 Secret 集合
    watchedSecretSet sets.Set

    // 用于协调注册表的调解器
    RegistryReconciler *reconcile.Reconciler

    // MCP 桥接是否已调解的标志
    mcpbridgeReconciled *atomic.Bool

    // 管理 MCP 桥接相关的控制器和列表
    mcpbridgeController mcpbridge.McpBridgeController
    mcpbridgeLister     netlisterv1.McpBridgeLister

    // 管理 WasmPlugin 相关的控制器和列表
    wasmPluginController wasmplugin.WasmPluginController
    wasmPluginLister     extlisterv1.WasmPluginLister

    // 已注册的 WasmPlugin 集合，键为 WasmPlugin 名称
    wasmPlugins map[string]*extensions.WasmPlugin

    // 管理 HTTP2RPC 相关的控制器和列表
    http2rpcController http2rpc.Http2RpcController
    http2rpcLister     netlisterv1.Http2RpcLister

    // 已注册的 HTTP2RPC 集合，键为 HTTP2RPC 名称
    http2rpcs map[string]*higressv1.Http2Rpc

    // Configmap 的管理器
    configmapMgr *configmap.ConfigmapMgr

    // 用于更新 XDS
    XDSUpdater model.XDSUpdater

    // 处理注解的注解处理程序
    annotationHandler annotations.AnnotationHandler

    // 命名空间
    namespace string

    // 集群 ID
    clusterId string
}
```

该结构体提供了一些方法，其实这个结构体本质上也是实现了`translation.go`提到的两个接口，方法列表和`translation.go`极其相似，我们分析一下一些比较复杂的方法，剩下的可自行定位到源码查看：

- `NewIngressConfig`

    1. 初始化`IngressConfig`，创建多个子控制器(mcpbridge、wasmplugin、http2rpc等)并赋值给对应的字段上。
    2. 为多个子控制器注册事件监听器，用于监听Kubernetes资源的变化，并进行相应的处理。
    ```go
    config := &IngressConfig{
        remoteIngressControllers: make(map[string]common.IngressController),
        localKubeClient:          localKubeClient,
        XDSUpdater:               XDSUpdater,
        annotationHandler:        annotations.NewAnnotationHandlerManager(),
        ...
    }
    mcpbridgeController := mcpbridge.NewController(localKubeClient, clusterId)
    mcpbridgeController.AddEventHandler(config.AddOrUpdateMcpBridge, config.DeleteMcpBridge)
    config.mcpbridgeController = mcpbridgeController
    config.mcpbridgeLister = mcpbridgeController.Lister()
    ...
    ```


在这里，有几个方法需要注意：

    1. `annotations.NewAnnotationHandlerManager()`
    2. `mcpbridge.NewController(localKubeClient, clusterId)`
    3. `wasmplugin.NewController(localKubeClient, clusterId)`
    4. `http2rpc.NewController(localKubeClient, clusterId)`
    5. `configmap.NewController(localKubeClient, clusterId, namespace)`

很明显这些方法分别对应`pkg/ingress/kube`目录下一些自定义的资源配置方法，后面会针对该目录进行单独的介绍。

- `RegisterEventHandler`

    1. 对kind变量进行判断，判断属于哪种资源，并添加到对应的事件处理程序切片
     ```go
    switch kind {
    case gvk.VirtualService:
        m.virtualServiceHandlers = append(m.virtualServiceHandlers, f)

    ...
    }
    ```
    2. 注册事件监听器
    ```go
    for _, remoteIngressController := range m.remoteIngressControllers {
        remoteIngressController.RegisterEventHandler(kind, f)
    }
    ```
  我们可以定位一下`remoteIngressController`的`RegisterEventHandler`方法：
    ```go
    func (c *controller) RegisterEventHandler(kind config.GroupVersionKind, f model.EventHandler) {
        switch kind {
        case gvk.VirtualService:
           c.virtualServiceHandlers = append(c.virtualServiceHandlers, f)
        ...
        }
    }
    ```
- `AddLocalCluster`
    1. 创建ingress总控制器，并注册到`remoteIngressControllers`中
    ```go
    ingressController = ingress.NewController(m.localKubeClient, m.localKubeClient, options, secretController)
    m.remoteIngressControllers[options.ClusterId] = ingressController
    ```
- `InitializeCluster`
    1. 设置错误监听处理器
    ```go
    _ = ingressController.SetWatchErrorHandler(m.watchErrorHandler)
    ```
  其中`SetWatchErrorHandler`方法如下，调用各个informer的`SetWatchErrorHandler`方法：
    ```go
    func (c *controller) SetWatchErrorHandler(handler func(r *cache.Reflector, err error)) error {
        var errs error
        if err := c.serviceInformer.SetWatchErrorHandler(handler); err != nil {
           errs = multierror.Append(errs, err)
        }
        if err := c.ingressInformer.SetWatchErrorHandler(handler); err != nil {
           errs = multierror.Append(errs, err)
        }
        ...
        return errs
    }
    ```
    3. 通过go协程启动`ingressController`
    ```go
    go ingressController.Run(stop)
    ```
- `List`
    1. 前期检查，预防空指针或逻辑错误
    ```go
    if typ != gvk.Gateway &&
        typ != gvk.VirtualService &&
        typ != gvk.DestinationRule &&
        typ != gvk.EnvoyFilter &&
        typ != gvk.ServiceEntry &&
        typ != gvk.WasmPlugin {
        return nil, common.ErrUnsupportedOp
    }

    // Currently, only support list all namespaces gateways or virtualservices.
    if namespace != "" {
        IngressLog.Warnf("ingress store only support type %s of all namespace.", typ)
        return nil, common.ErrUnsupportedOp
    }
    ```
    2. 如果kind类型是envoyfilter，拿出来处理掉
    ```go
    if typ == gvk.EnvoyFilter {
        ...
        // Build configmap envoy filters
	configmapEnvoyFilters, err := m.configmapMgr.ConstructEnvoyFilters()
        ...
    }
    ```
    3. 如果不是，调用ingress控制器(如果有kingress控制器，也给带上)的`List`方法，添加到config列表，以ingress控制器的方法为例，会获取informer对象的存储器，并对其进行遍历，将遍历到的对象进行深拷贝，并返回config列表。由于`List`方法是实现`ConfigStore`接口的，`istio`内部会对这个config列表进行下一步处理。
    ```go
    var configs []config.Config
    m.mutex.RLock()
    for _, ingressController := range m.remoteIngressControllers {
        configs = append(configs, ingressController.List()...)
    }
    m.mutex.RUnlock()
    ```
    4. 对config列表根据创建时间进行排序，并创建一个包装好的config列表，wrapperConfigs里除了`Config``，还会包含`AnnotationsConfig`注解配置
    ```go
    common.SortIngressByCreationTime(configs)
    wrapperConfigs := m.createWrapperConfigs(configs)
    ```
    5. 根据kind类型，将wrapperConfigs转换为对应的资源，代码如下，并为convertGateways附加注释
    ```go
    switch typ {
    case gvk.Gateway:
        //1.初始化ConvertOptions
        //2.调用ingress控制器的ConvertGateway方法，在这里，ingress控制器首先做一些检查，并遍历rule规则列表
        //  为每个rule创建IngressDomainBuilder构造器，中间过程会构造gateway包装器、获取tls密钥名称等等
        //  在这个过程中会对config包装器进行修改
        //3.apply注解
        //4.组合成istio能够识别的config列表
        return m.convertGateways(wrapperConfigs), nil
    case gvk.VirtualService:
        return m.convertVirtualService(wrapperConfigs), nil
    case gvk.DestinationRule:
        return m.convertDestinationRule(wrapperConfigs), nil
    ...
    }
    ```
  这块内容较多，具备一定的难度，需要对各个资源有一定的理解。

以下几个方法的作用是极为相似的
- `AddOrUpdateWasmPlugin`
- `DeleteWasmPlugin`
- `AddOrUpdateMcpBridge`
- `DeleteMcpBridge`
- `AddOrUpdateHttp2Rpc`
- `DeleteHttp2Rpc`

顾名思义，就是在监听对应资源的过程中，发生资源的添加或者变更或者删除进行对应的操作。

以`AddOrUpdateWasmPlugin`和`DeleteWasmPlugin`为例。

- `AddOrUpdateWasmPlugin`

    1. 获取wasmplugin
    ```go
    wasmPlugin, err := m.wasmPluginLister.WasmPlugins(clusterNamespacedName.Namespace).Get(clusterNamespacedName.Name)
    ```
    2. 将wasmplugin转化为istio能够识别的wasmplugin
    ```go
    istioWasmPlugin, err := m.convertIstioWasmPlugin(&wasmPlugin.Spec)
    ```
    3. 更新`IngressConfig`
    ```go
    m.wasmPlugins[clusterNamespacedName.Name] = istioWasmPlugin
    ```

- `DeleteWasmPlugin`

    1. 更新`IngressConfig`
    ```go
    delete(m.wasmPlugins, clusterNamespacedName.Name)
    ```
    2. 如果存在该wasmplugin，触发`wasmPluginHandlers`的事件监听器，执行对应的操作
    ```go
    for _, f := range m.wasmPluginHandlers {
        IngressLog.Debug("WasmPlugin triggered update")
        f(config.Config{Meta: metadata}, config.Config{Meta: metadata}, model.EventDelete)
    }
    ```

到此为此，`ingress_config.go`的内容基本介绍完毕，大部分内容并未做过多深入，感兴趣的朋友可以自行下载源码浏览查看。

我们现在回到最开始的`initConfigController`函数上，可以发现这个函数的核心内容其实就是`ingress_config.go`，当然还有对应的多个控制器，关于控制器的介绍，将在后面进行介绍。

### `initRegistryEventHandlers`函数剖析

该函数相对于`initConfigController`函数来说简单很多，其主要做的内容就是配置xds更新处理器，并将其作为事件监听器的事件处理程序，注册给`configController`，也就是说，当发生资源的变更时，会通过xds协议进行推送更新。

## `pkg/ingress/kube`目录介绍

这部分内容较多，后续可自行针对感兴趣的部分进行精读。

- `annotations`

  这里主要处理ingress注解的配置，在`NewAnnotationHandlerManager`方法里列出了一些已经支持的注解，每个注解的处理程序需要实现`AnnotationHandler`所定义的接口列表。
- `common`

  这里核心的文件为`controller.go`，主要做了一些资源的包装，以及定义了`IngressController`接口方法，其实现类有`pkg/ingress/kube/ingress/controller.go`和`pkg/ingress/kube/ingressv1/controller.go`

- `configmap`

  这里主要为`ConfigMap`添加了`higress`的KV对，在`controller.go`中定义了`ItemController`接口，和前者提到的一样，这里也提供了相似的更新配置的方法`AddOrUpdateHigressConfig`，同样地，也是先获取当前的value值，并获取旧的value值，进行一个比对，比对结果可能为新增、更新、删除，分别执行对应的事件监听器里所定义的事件处理器，也就是`XDSUpdater`。

- `controller`

  在前面的介绍中，提到了很多次事件监听器，可能会有人疑问是怎么做资源监听的，资源监听的代码就位于本目录下了。这里可以着重介绍一下，事件监听的具体实现原理。
    1. 定义了`Controller[lister any]`接口，其实现类为`CommonController`。
       我们可以看一下这个实现结构体有哪些需要注意的字段。

       **lister**: 这个字段为any类型，会在`NewCommonController`方法里传入进来，点击查看该方法调用情况，可以发现传入该字段的都是各个资源的监听器，例如`ConfigMap`的监听器就是`client.KubeInformer().Core().V1().ConfigMaps().Lister().ConfigMaps(namespace)`，其它也是如此。
       **updateHandler**: 这个字段为`func(util.ClusterNamespacedName)`类型，主要用于存储对应监听器lister所提供的更新或者新增事件处理器，存储代码如下：
        ```go
        func (c *CommonController[lister]) AddEventHandler(addOrUpdate func(util.ClusterNamespacedName), delete ...func(util.ClusterNamespacedName)) {
            c.updateHandler = addOrUpdate
            if len(delete) > 0 {
               c.removeHandler = delete[0]
            }
        }
        ```
       **removeHandler**: 同**updateHandler**
    2. 接口方法除了刚刚介绍的`AddEventHandler`方法，还有个`Run`方法需要注意一下
        ```go
        func (c *CommonController[lister]) Run(stop <-chan struct{}) {
            defer utilruntime.HandleCrash()
            defer c.queue.ShutDown()
            if !cache.WaitForCacheSync(stop, c.HasSynced) {
               IngressLog.Errorf("Failed to sync %s controller cache", c.typeName)
               return
            }
            IngressLog.Debugf("%s cache has synced", c.typeName)
            go wait.Until(c.worker, time.Second, stop)
            <-stop
        }
        ```
       可以看有个`wait.Until`方法，用于每秒钟执行`c.worker`方法，直到接收到`stop`信号，方法调用链如下：`c.worker`->`c.processNextWorkItem()`->`c.onEvent(ingressNamespacedName)`->`c.updateHandler(obj)`，可以看出来当我们创建一个控制器，并为其注册了一个事件监听器以及事件处理器(updateHandler)，因此每秒钟会执行事件处理器，也就实现了监听的逻辑。

  也就是说，这个目录下主要定义了一个公共的控制器，可以节省大量代码的编写，我们在创建一个新的子控制器的时候，可以调用`NewCommonController`方法来实现监听逻辑。

- `http2rpc`

  代码较为简单，通过`NewCommonController`来创建`Http2RpcController`，并提供了`GetHttp2Rpc`方法。

- `ingress`

  Ingress控制器的核心代码逻辑，主要为前文提到的`ingress_config.go`所调用。部分内容在前文已经简单介绍过。

- `ingressv1`

  Ingress的API版本v1相关的控制器代码。

- `kingress`

  kingress相关的控制器代码。

- `mcpbridge`

  同`http2rpc`目录。

- `secret`

  同`http2rpc`目录。

- `util`

  工具包。

- `wasmplugin`

  同`http2rpc`目录。

## higress-core流程图

经过前面的源码分析，相信大家对higress核心逻辑已经有了初步的理解，后续可以针对自己感兴趣的部分，进行深入研究，其中会涉及到Kubernetes资源配置的核心逻辑以及Istio的基本掌握，当然，如果给它研究透了，对这些基本原理的理解将会更为深刻。

流程图如下：


![img.png](/img/blog/higress-code0.png)

对于初始化配置控制器部分，可进一步绘画流程图。

![img1.png](/img/blog/higress-code1.png)

关于事件监听部分，其流程图如下：

![img2.png](/img/blog/higress-code2.png)

## 总结

以上是对higress源码的初步分析，希望能够给用户以及开发者对higress有个基本的了解。