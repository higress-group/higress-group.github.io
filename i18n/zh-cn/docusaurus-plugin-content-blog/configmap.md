---
title: Higress 全局配置控制面原理分析
keywords: [higress]
description: Higress 全局配置控制面原理分析
author: Jun
date: 2023-07-23
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/configmap.md
---

Higress 有个全局配置 ConfigMap 对象 higress-config，参考配置如下：

```yaml
apiVersion: v1
data:
  higress: |-
    tracing:
      enable: true
      sampling: 100
      timeout: 500
      skywalking:
       service: skywalking-oap-server.op-system.svc.cluster.local
       port: 11800
...
...
kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
```

具体配置说明请参考 [Higress 全局配置说明文档](https://higress.io/zh-cn/docs/user/configmap)，
本文介绍以 Tracing 为例，详细说明 Tracing 全局配置是如何转成 EnvoyFilter 和如何同时实现实时下发到 Higress Gateway过程。

本文涉及整体架构流程、初始化过程和启动、higress-config 变更和处理流程、通知 XDSUpdater、构建 EnvoyFilter 和下发以及如何扩展全局配置等内容。

# 一、整体架构流程

## 1. 整体架构

![img.png](../../../static/img/blog/configmap1.png)


## 2. 核心组件

- IngressConfig

IngressConfig 是 Higress 一个核心结构体, 负责监控 Ingress， McpBridge, Http2Rpc, WasmPlugin 等 k8s 资源， 同时集成 ConfigStore Interface，通过 List 接口下发 VirtualService, DestinationRule, EnvoyFilter, ServiceEntry, WasmPlugin 等 CR 资源。

- ConfigmapMgr

ConfigmapMgr 结构体负责整个核心流程，包括通过 Informer List/Watch 机制监控 higress-config 的变更，同时遍历 ItemControllers 下发变更通知，提供构建 EnvoyFilter 列表等功能。

- TracingController

TracingController 结构体负责具体的 Tracing 数据校验，构建 Tracing EnvoyFilter, 以及通过 ItemEventHandler 下发变更通知等。

- HigressConfig
 
HigressConfig 是 higress-config Configmap 所对应数据的结构体。


## 3. 核心流程

- 用 Informer List/Watch 机制监控 higres-config 变更， 校验变更，同时保存变更后数据。
- 用变更数据构建 EnvoyFilter。
- 通知 XDSUpdater，EnvoyFilter 有变更，重新拉取新的 EnvoyFilter 列表。

# 二、初始化过程

## 1. 初始化入口

初始化过程入口在 NewIngressConfig 初始化IngressConfig时同时构建 HigressConfigController 和 ConfigmapMgr。

```golang
// pkg/ingress/config/ingress_config.go
func NewIngressConfig(localKubeClient kube.Client, XDSUpdater model.XDSUpdater, namespace, clusterId string) *IngressConfig {
	// ...
	
	// 构建 controller 和 configmapMgr
	higressConfigController := configmap.NewController(localKubeClient, clusterId, namespace)
	config.configmapMgr = configmap.NewConfigmapMgr(XDSUpdater, namespace, higressConfigController, higressConfigController.Lister())

	return config
}
```

## 2. HigressConfigController 初始化

通过 Higress 提供 NewCommonController 初始化 HigressConfigController 用于监听 higress-system 命名空间下 Configmap 的变化。

```golang
// pkg/ingress/kube/configmap/controller.go
type HigressConfigController controller.Controller[listersv1.ConfigMapNamespaceLister]

func NewController(client kubeclient.Client, clusterId string, namespace string) HigressConfigController {
	informer := client.KubeInformer().Core().V1().ConfigMaps().Informer()
	return controller.NewCommonController("higressConfig", client.KubeInformer().Core().V1().ConfigMaps().Lister().ConfigMaps(namespace),
		informer, GetConfigmap, clusterId)
}

func GetConfigmap(lister listersv1.ConfigMapNamespaceLister, namespacedName types.NamespacedName) (controllers.Object, error) {
	return lister.Get(namespacedName.Name)
}
```
## 3. ConfigmapMgr 初始化

ConfigmapMgr 初始化具体步骤如下：
- 构建 ConfigmapMgr
- 设置 HigressConfigController configmap 新增或者更新回调函数为 configmapMgr.AddOrUpdateHigressConfig
- 设置 HigressConfig 结构体默认值
- 初始化 TracingController
- 把 tracingController 添加到 configmapMgr itemControllers 数组里
- 初始化 ItemEventHandler， 同时遍历 itemControllers，设置 ItemEventHandler

```golang
// pkg/ingress/kube/configmap/controller.go
func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {
    //  构建 ConfigmapMgr
	configmapMgr := &ConfigmapMgr{
		XDSUpdater:              XDSUpdater,
		Namespace:               namespace,
		HigressConfigController: higressConfigController,
		HigressConfigLister:     higressConfigLister,
		higressConfig:           atomic.Value{},
	}
	// 设置 HigressConfigController configmap 新增或者更新回调函数 configmapMgr.AddOrUpdateHigressConfig
	configmapMgr.HigressConfigController.AddEventHandler(configmapMgr.AddOrUpdateHigressConfig)
	// 设置 HigressConfig 结构体默认值
	configmapMgr.SetHigressConfig(NewDefaultHigressConfig())

	// 初始化 TracingController
	tracingController := NewTracingController(namespace)
	// 把 tracingController 添加到 configmapMgr itemControllers 里
	configmapMgr.AddItemControllers(tracingController)
	// 初始化 itemEventHandler， 同时遍历 itemControllers，设置 itemEventHandler
	configmapMgr.initEventHandlers()

	// 返回 configmapMgr
	return configmapMgr
}
```

# 三、启动

在 IngressConfig 添加 HigressConfigController Run() 和 HasSynced() 控制流程。

```golang
// pkg/ingress/config/ingress_config.go
func (m *IngressConfig) Run(stop <-chan struct{}) {
	// ...
	// 启动 HigressConfigController
	go m.configmapMgr.HigressConfigController.Run(stop)
}

func (m *IngressConfig) HasSynced() bool {
	// ....
	if !m.configmapMgr.HigressConfigController.HasSynced() {
		return false
	}
}
```

# 四、higress-config 变更和处理流程

## 1. configmapMgr 变更处理

ConfigmapMgr 通过收到 HigressConfigController 通知来处理变更请求。

具体变更流程如下：
- 判断是否 higress-system 命名空间下 name 为 higress-config Configmap 发生了变化，如果不是就返回。
- 获取 higress-config 内容。
- 遍历 ItemControllers, 校验 higress-config 配置是否合法，如果有一个返回不合法，就返回。
- 和上次保存在本地 higressConfig 比对, 检查这次数据是否有变化，如果没有变化就返回。
- 如果数据有变化，就遍历 ItemControllers 通知每个 itemController 数据有变化，同时保存这次变化到本地 higressConfig。

```golang
// pkg/ingress/kube/configmap/controller.go
func (c *ConfigmapMgr) AddOrUpdateHigressConfig(name util.ClusterNamespacedName) {
	// 只监听 higress-system 命名空间下 name 为 higress-config Configmap 的变化
	if name.Namespace != c.Namespace || name.Name != HigressConfigMapName {
		return
	}
    // ...
	// 获取 higress-config 内容
	higressConfigmap, err := c.HigressConfigLister.Get(HigressConfigMapName)
	
	// 通过 yaml.Unmarshal 转成 HigressConfig
	newHigressConfig := NewDefaultHigressConfig()
	if err = yaml.Unmarshal([]byte(higressConfigmap.Data[HigressConfigMapKey]), newHigressConfig); err != nil {
		IngressLog.Errorf("data:%s,  convert to higress config error, error: %+v", higressConfigmap.Data[HigressConfigMapKey], err)
		return
	}

	// ...
	// 遍历 ItemControllers, 校验配置是否合法
	for _, itemController := range c.ItemControllers {
		if itemErr := itemController.ValidHigressConfig(newHigressConfig); itemErr != nil {
			IngressLog.Errorf("configmap %s controller valid higress config error, error: %+v", itemController.GetName(), itemErr)
			return
		}
	}

	// 和上次比对这次数据是否有变更
	oldHigressConfig := c.GetHigressConfig()
	result, _ := c.CompareHigressConfig(oldHigressConfig, newHigressConfig)
    // ...
	// 如果数据有变更，就遍历 ItemControllers 通知每个 itemController 数据有变更，同时保存这次变更到本地。
	if result == ResultReplace || result == ResultDelete {
		for _, itemController := range c.ItemControllers {
			IngressLog.Infof("configmap %s controller AddOrUpdateHigressConfig", itemController.GetName())
			if itemErr := itemController.AddOrUpdateHigressConfig(name, oldHigressConfig, newHigressConfig); itemErr != nil {
				IngressLog.Errorf("configmap %s controller AddOrUpdateHigressConfig error, error: %+v", itemController.GetName(), itemErr)
			}
		}
		// 保存这次变更
		c.SetHigressConfig(newHigressConfig)
	}
}
```

## 2. TracingController 变更处理

TracingController 变更处理就比较简单：
- 检查 Tracing 这部分数据是否有变更。
- 如果有变更，DeepCopy 一份 Tracing 数据保存到本地，同时通过 eventHandler 下发变更通知。

```golang
// pkg/ingress/kube/configmap/tracing.go
func (t *TracingController) AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error {
	// ...
	// 检查 Tracing 部分数据是否有变更
	result, _ := compareTracing(old.Tracing, new.Tracing)

	// 如果有变更，DeepCopy 一份 Tracing 数据保存到本地，同时通过 eventHandler 下发变更通知
	switch result {
	case ResultReplace:
		if newTracing, err := deepCopyTracing(new.Tracing); err != nil {
			IngressLog.Infof("tracing deepcopy error:%v", err)
		} else {
			t.SetTracing(newTracing)
			IngressLog.Infof("AddOrUpdate Higress config tracing")
			t.eventHandler(higressTracingEnvoyFilterName)
			IngressLog.Infof("send event with filter name:%s", higressTracingEnvoyFilterName)
		}
	case ResultDelete:
		t.SetTracing(NewDefaultTracing())
		IngressLog.Infof("Delete Higress config tracing")
		t.eventHandler(higressTracingEnvoyFilterName)
		IngressLog.Infof("send event with filter name:%s", higressTracingEnvoyFilterName)
	}

	return nil
}
```

# 五、通知 XDSUpdater

在 ConfigmapMgr 初始化时候调用 configmapMgr.initEventHandlers()， 这个 func 会创建 ItemEventHandler, 同时遍历 ItemControllers 设置 ItemEventHandler。

```golang
// pkg/ingress/kube/configmap/config.go
type ItemEventHandler = func(name string)

// pkg/ingress/kube/configmap/controller.go
func (c *ConfigmapMgr) initEventHandlers() error {
    itemEventHandler := func(name string) {
    c.XDSUpdater.ConfigUpdate(&model.PushRequest{
        Full: true,
        ConfigsUpdated: map[model.ConfigKey]struct{}{{
            Kind:      gvk.EnvoyFilter,
            Name:      name,
            Namespace: c.Namespace,
        }: {}},
        Reason: []model.TriggerReason{ModelUpdatedReason},
        })
    }
    
    for _, itemController := range c.ItemControllers {
		itemController.RegisterItemEventHandler(itemEventHandler)
    }
    
    return nil
}
```

这里 XDSUpdater 是从 IngressConfig 初始化传入， XDSUpdater.ConfigUpdate() 用于更新通知下发。

进一步跟踪可以发现在 Higress controller server 启动时执行 s.initXdsServer 函数创建 s.xdsServer，具体逻辑不在本文讨论范围, 有兴趣可以进一步阅读源码。


```golang
// pkg/bootstrap/server.go
func NewServer(args *ServerArgs) (*Server, error) {
	// ...
	s := &Server{
		ServerArgs:      args,
		httpMux:         http.NewServeMux(),
		environment:     e,
		readinessProbes: make(map[string]readinessProbe),
		server:          server.New(),
	}
	s.environment.Watcher = mesh.NewFixedWatcher(&v1alpha1.MeshConfig{})
	s.environment.Init()
	initFuncList := []func() error{
		s.initKubeClient,
		s.initXdsServer,
		s.initHttpServer,
		s.initConfigController,
		s.initRegistryEventHandlers,
		s.initAuthenticators,
	}

	for _, f := range initFuncList {
		if err := f(); err != nil {
			return nil, err
		}
	}

	// ...
	return s, nil
}

// pkg/bootstrap/server.go
func (s *Server) initXdsServer() error {
    log.Info("init xds server")
    s.xdsServer = xds.NewDiscoveryServer(s.environment, nil, PodName, PodNamespace, s.RegistryOptions.KubeOptions.ClusterAliases)
    // ...
    return s.initGrpcServer()
}
```

# 六、构建和下发 EnvoyFilters

## 1. IngressConfig List 下发 EnvoyFilters 列表

IngressConfig List 用于 VirtualService, DestinationRule, EnvoyFilter, ServiceEntry, WasmPlugin 等 CR 资源下发， 这里主要关注 EnvoyFilter CR 资源下发。

```golang
// pkg/ingress/config/ingress_config.go
func (m *IngressConfig) List(typ config.GroupVersionKind, namespace string) ([]config.Config, error) {
	if typ != gvk.Gateway &&
		typ != gvk.VirtualService &&
		typ != gvk.DestinationRule &&
		typ != gvk.EnvoyFilter &&
		typ != gvk.ServiceEntry &&
		typ != gvk.WasmPlugin {
		return nil, common.ErrUnsupportedOp
	}
	// ...
	if typ == gvk.EnvoyFilter {
		m.mutex.RLock()
		defer m.mutex.RUnlock()
		var envoyFilters []config.Config
		
		// 调用 ConfigmapMgr ConstructEnvoyFilters 获取需要下发 EnvoyFilter 列表
		configmapEnvoyFilters, err := m.configmapMgr.ConstructEnvoyFilters()
		if err != nil {
			IngressLog.Errorf("Construct configmap EnvoyFilters error %v", err)
		} else {
			for _, envoyFilter := range configmapEnvoyFilters {
				envoyFilters = append(envoyFilters, *envoyFilter)
			}
			IngressLog.Infof("Append %d configmap EnvoyFilters", len(configmapEnvoyFilters))
		}
		if len(envoyFilters) == 0 {
			IngressLog.Infof("resource type %s, configs number %d", typ, len(m.cachedEnvoyFilters))
			return m.cachedEnvoyFilters, nil
		}
		// 需要下发 configmap EnvoyFilter 列表 和 m.cachedEnvoyFilters 列表聚合一下下发
		envoyFilters = append(envoyFilters, m.cachedEnvoyFilters...)
		IngressLog.Infof("resource type %s, configs number %d", typ, len(envoyFilters))
		return envoyFilters, nil
	}
	
}	
```

调用 ConfigmapMgr ConstructEnvoyFilters 获取需要下发 EnvoyFilter 列表， 同时和 m.cachedEnvoyFilters 列表聚合一下再下发。

这里 m.cachedEnvoyFilters 是在构建 VirtualService 时生成，有兴趣可以进一步阅读 IngressConfig 源码。


## 2. ConfigmapMgr 构建 EnvoyFilter 列表

这里比较简单，遍历一下 ItemControllers，聚合每个 itemController 返回的 EnvoyFilters.

```golang
// /pkg/ingress/kube/configmap/controller.go
func (c *ConfigmapMgr) ConstructEnvoyFilters() ([]*config.Config, error) {
	configs := make([]*config.Config, 0)
	for _, itemController := range c.ItemControllers {
		IngressLog.Infof("controller %s ConstructEnvoyFilters", itemController.GetName())
		if itemConfigs, err := itemController.ConstructEnvoyFilters(); err != nil {
			IngressLog.Errorf("controller %s ConstructEnvoyFilters error, error: %+v", itemController.GetName(), err)
		} else {
			configs = append(configs, itemConfigs...)
		}
	}
	return configs, nil
}
```

## 3. TracingController 构建 EnvoyFilters

这里就比较简单，根据保存的 Tracing 数据构建对应的 EnvoyFilter

```golang
// pkg/ingress/kube/configmap/tracing.go
func (t *TracingController) ConstructEnvoyFilters() ([]*config.Config, error) {
	// ...
	tracingConfig := t.constructTracingTracer(tracing, namespace)
	if len(tracingConfig) == 0 {
		return configs, nil
	}

	config := &config.Config{
		Meta: config.Meta{
			GroupVersionKind: gvk.EnvoyFilter,
			Name:             higressTracingEnvoyFilterName,
			Namespace:        namespace,
		},
		Spec: &networking.EnvoyFilter{
			ConfigPatches: []*networking.EnvoyFilter_EnvoyConfigObjectPatch{
				{
					ApplyTo: networking.EnvoyFilter_NETWORK_FILTER,
					Match: &networking.EnvoyFilter_EnvoyConfigObjectMatch{
						Context: networking.EnvoyFilter_GATEWAY,
						ObjectTypes: &networking.EnvoyFilter_EnvoyConfigObjectMatch_Listener{
							Listener: &networking.EnvoyFilter_ListenerMatch{
								FilterChain: &networking.EnvoyFilter_ListenerMatch_FilterChainMatch{
									Filter: &networking.EnvoyFilter_ListenerMatch_FilterMatch{
										Name: "envoy.filters.network.http_connection_manager",
									},
								},
							},
						},
					},
					Patch: &networking.EnvoyFilter_Patch{
						Operation: networking.EnvoyFilter_Patch_MERGE,
						Value:     util.BuildPatchStruct(tracingConfig),
					},
				},
				{
					ApplyTo: networking.EnvoyFilter_HTTP_FILTER,
					Match: &networking.EnvoyFilter_EnvoyConfigObjectMatch{
						Context: networking.EnvoyFilter_GATEWAY,
						ObjectTypes: &networking.EnvoyFilter_EnvoyConfigObjectMatch_Listener{
							Listener: &networking.EnvoyFilter_ListenerMatch{
								FilterChain: &networking.EnvoyFilter_ListenerMatch_FilterChainMatch{
									Filter: &networking.EnvoyFilter_ListenerMatch_FilterMatch{
										Name: "envoy.filters.network.http_connection_manager",
										SubFilter: &networking.EnvoyFilter_ListenerMatch_SubFilterMatch{
											Name: "envoy.filters.http.router",
										},
									},
								},
							},
						},
					},
					Patch: &networking.EnvoyFilter_Patch{
						Operation: networking.EnvoyFilter_Patch_MERGE,
						Value: util.BuildPatchStruct(`{
							"name":"envoy.filters.http.router",
							"typed_config":{
								"@type": "type.googleapis.com/envoy.extensions.filters.http.router.v3.Router",
								"start_child_span": true
							}
						}`),
					},
				},
			},
		},
	}

	configs = append(configs, config)
	return configs, nil
}
```


# 七、如何扩展全局配置

## 1. HigressConfig 结构体添加对应的扩展配置

```golang
type HigressConfig struct {
	Tracing *Tracing `json:"tracing,omitempty"`
	// 在这里添加对应的数据结构来扩展配置
}
```

## 2. 增加扩展配置默认值

```golang
// pkg/ingress/kube/configmap/config.go
func NewDefaultHigressConfig() *HigressConfig {
	higressConfig := &HigressConfig{
		Tracing: NewDefaultTracing(),
		// 在这里增加扩展配置默认值
	}
	return higressConfig
}
```

## 3. 实现 ItemController interface

```golang
type ItemController interface {
	GetName() string
	AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error
	ValidHigressConfig(higressConfig *HigressConfig) error
	ConstructEnvoyFilters() ([]*config.Config, error)
	RegisterItemEventHandler(eventHandler ItemEventHandler)
}
```

## 4. 初始化扩展配置，同时添加到 ItemControllers

```golang
func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {
	// ...
	tracingController := NewTracingController(namespace)
	configmapMgr.AddItemControllers(tracingController)
	// ...
	// 在这里初始化扩展配置，同时添加到 ItemControllers
	configmapMgr.initEventHandlers()

	return configmapMgr
}
```







