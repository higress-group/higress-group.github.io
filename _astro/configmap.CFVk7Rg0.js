const e="configmap.md",r="blog",n="configmap",i=`
Higress \u6709\u4E2A\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-config\uFF0C\u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
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
\`\`\`

\u5177\u4F53\u914D\u7F6E\u8BF4\u660E\u8BF7\u53C2\u8003 [Higress \u5168\u5C40\u914D\u7F6E\u8BF4\u660E\u6587\u6863](https://higress.cn/docs/latest/user/configmap/)\uFF0C
\u672C\u6587\u4ECB\u7ECD\u4EE5 Tracing \u4E3A\u4F8B\uFF0C\u8BE6\u7EC6\u8BF4\u660E Tracing \u5168\u5C40\u914D\u7F6E\u662F\u5982\u4F55\u8F6C\u6210 EnvoyFilter \u548C\u5982\u4F55\u540C\u65F6\u5B9E\u73B0\u5B9E\u65F6\u4E0B\u53D1\u5230 Higress Gateway\u8FC7\u7A0B\u3002

\u672C\u6587\u6D89\u53CA\u6574\u4F53\u67B6\u6784\u6D41\u7A0B\u3001\u521D\u59CB\u5316\u8FC7\u7A0B\u548C\u542F\u52A8\u3001higress-config \u53D8\u66F4\u548C\u5904\u7406\u6D41\u7A0B\u3001\u901A\u77E5 XDSUpdater\u3001\u6784\u5EFA EnvoyFilter \u548C\u4E0B\u53D1\u4EE5\u53CA\u5982\u4F55\u6269\u5C55\u5168\u5C40\u914D\u7F6E\u7B49\u5185\u5BB9\u3002

## \u6574\u4F53\u67B6\u6784\u6D41\u7A0B

### 1. \u6574\u4F53\u67B6\u6784

![img.png](/img/blog/configmap1.png)


### 2. \u6838\u5FC3\u7EC4\u4EF6

- IngressConfig

IngressConfig \u662F Higress \u4E00\u4E2A\u6838\u5FC3\u7ED3\u6784\u4F53, \u8D1F\u8D23\u76D1\u63A7 Ingress\uFF0C McpBridge, Http2Rpc, WasmPlugin \u7B49 k8s \u8D44\u6E90\uFF0C \u540C\u65F6\u96C6\u6210 ConfigStore Interface\uFF0C\u901A\u8FC7 List \u63A5\u53E3\u4E0B\u53D1 VirtualService, DestinationRule, EnvoyFilter, ServiceEntry, WasmPlugin \u7B49 CR \u8D44\u6E90\u3002

- ConfigmapMgr

ConfigmapMgr \u7ED3\u6784\u4F53\u8D1F\u8D23\u6574\u4E2A\u6838\u5FC3\u6D41\u7A0B\uFF0C\u5305\u62EC\u901A\u8FC7 Informer List/Watch \u673A\u5236\u76D1\u63A7 higress-config \u7684\u53D8\u66F4\uFF0C\u540C\u65F6\u904D\u5386 ItemControllers \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5\uFF0C\u63D0\u4F9B\u6784\u5EFA EnvoyFilter \u5217\u8868\u7B49\u529F\u80FD\u3002

- TracingController

TracingController \u7ED3\u6784\u4F53\u8D1F\u8D23\u5177\u4F53\u7684 Tracing \u6570\u636E\u6821\u9A8C\uFF0C\u6784\u5EFA Tracing EnvoyFilter, \u4EE5\u53CA\u901A\u8FC7 ItemEventHandler \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5\u7B49\u3002

- HigressConfig
 
HigressConfig \u662F higress-config Configmap \u6240\u5BF9\u5E94\u6570\u636E\u7684\u7ED3\u6784\u4F53\u3002


### 3. \u6838\u5FC3\u6D41\u7A0B

- \u7528 Informer List/Watch \u673A\u5236\u76D1\u63A7 higress-config \u53D8\u66F4\uFF0C\u6821\u9A8C\u53D8\u66F4\uFF0C\u540C\u65F6\u4FDD\u5B58\u53D8\u66F4\u540E\u6570\u636E\u3002
- \u7528\u53D8\u66F4\u6570\u636E\u6784\u5EFA EnvoyFilter\u3002
- \u901A\u77E5 XDSUpdater\uFF0CEnvoyFilter \u6709\u53D8\u66F4\uFF0C\u91CD\u65B0\u62C9\u53D6\u65B0\u7684 EnvoyFilter \u5217\u8868\u3002

## \u521D\u59CB\u5316\u8FC7\u7A0B

### 1. \u521D\u59CB\u5316\u5165\u53E3

\u521D\u59CB\u5316\u8FC7\u7A0B\u5165\u53E3\u5728 NewIngressConfig\uFF0C \u521D\u59CB\u5316 IngressConfig \u65F6\u540C\u65F6\u6784\u5EFA HigressConfigController \u548C ConfigmapMgr\u3002

\`\`\`go
// pkg/ingress/config/ingress_config.go
func NewIngressConfig(localKubeClient kube.Client, XDSUpdater model.XDSUpdater, namespace, clusterId string) *IngressConfig {
	// ...
	
	// \u6784\u5EFA controller \u548C configmapMgr
	higressConfigController := configmap.NewController(localKubeClient, clusterId, namespace)
	config.configmapMgr = configmap.NewConfigmapMgr(XDSUpdater, namespace, higressConfigController, higressConfigController.Lister())

	return config
}
\`\`\`

### 2. HigressConfigController \u521D\u59CB\u5316

\u901A\u8FC7 Higress \u63D0\u4F9B NewCommonController \u521D\u59CB\u5316 HigressConfigController \u7528\u4E8E\u76D1\u542C higress-system \u547D\u540D\u7A7A\u95F4\u4E0B Configmap \u7684\u53D8\u5316\u3002

\`\`\`go
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
\`\`\`
### 3. ConfigmapMgr \u521D\u59CB\u5316

ConfigmapMgr \u521D\u59CB\u5316\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A
- \u6784\u5EFA ConfigmapMgr
- \u8BBE\u7F6E HigressConfigController configmap \u65B0\u589E\u6216\u8005\u66F4\u65B0\u56DE\u8C03\u51FD\u6570\u4E3A configmapMgr.AddOrUpdateHigressConfig
- \u8BBE\u7F6E HigressConfig \u7ED3\u6784\u4F53\u9ED8\u8BA4\u503C
- \u521D\u59CB\u5316 TracingController
- \u628A tracingController \u6DFB\u52A0\u5230 configmapMgr itemControllers \u6570\u7EC4\u91CC
- \u521D\u59CB\u5316 ItemEventHandler\uFF0C \u540C\u65F6\u904D\u5386 itemControllers\uFF0C\u8BBE\u7F6E ItemEventHandler

\`\`\`go
// pkg/ingress/kube/configmap/controller.go
func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {
    //  \u6784\u5EFA ConfigmapMgr
	configmapMgr := &ConfigmapMgr{
		XDSUpdater:              XDSUpdater,
		Namespace:               namespace,
		HigressConfigController: higressConfigController,
		HigressConfigLister:     higressConfigLister,
		higressConfig:           atomic.Value{},
	}
	// \u8BBE\u7F6E HigressConfigController configmap \u65B0\u589E\u6216\u8005\u66F4\u65B0\u56DE\u8C03\u51FD\u6570 configmapMgr.AddOrUpdateHigressConfig
	configmapMgr.HigressConfigController.AddEventHandler(configmapMgr.AddOrUpdateHigressConfig)
	// \u8BBE\u7F6E HigressConfig \u7ED3\u6784\u4F53\u9ED8\u8BA4\u503C
	configmapMgr.SetHigressConfig(NewDefaultHigressConfig())

	// \u521D\u59CB\u5316 TracingController
	tracingController := NewTracingController(namespace)
	// \u628A tracingController \u6DFB\u52A0\u5230 configmapMgr itemControllers \u91CC
	configmapMgr.AddItemControllers(tracingController)
	// \u521D\u59CB\u5316 itemEventHandler\uFF0C \u540C\u65F6\u904D\u5386 itemControllers\uFF0C\u8BBE\u7F6E itemEventHandler
	configmapMgr.initEventHandlers()

	// \u8FD4\u56DE configmapMgr
	return configmapMgr
}
\`\`\`

## \u542F\u52A8

\u5728 IngressConfig \u6DFB\u52A0 HigressConfigController Run() \u548C HasSynced() \u63A7\u5236\u6D41\u7A0B\u3002

\`\`\`go
// pkg/ingress/config/ingress_config.go
func (m *IngressConfig) Run(stop <-chan struct{}) {
	// ...
	// \u542F\u52A8 HigressConfigController
	go m.configmapMgr.HigressConfigController.Run(stop)
}

func (m *IngressConfig) HasSynced() bool {
	// ....
	if !m.configmapMgr.HigressConfigController.HasSynced() {
		return false
	}
}
\`\`\`

## higress-config \u53D8\u66F4\u548C\u5904\u7406\u6D41\u7A0B

### 1. configmapMgr \u53D8\u66F4\u5904\u7406

ConfigmapMgr \u901A\u8FC7\u6536\u5230 HigressConfigController \u901A\u77E5\u6765\u5904\u7406\u53D8\u66F4\u8BF7\u6C42\u3002

\u5177\u4F53\u53D8\u66F4\u6D41\u7A0B\u5982\u4E0B\uFF1A
- \u5224\u65AD\u662F\u5426 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B name \u4E3A higress-config Configmap \u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5982\u679C\u4E0D\u662F\u5C31\u8FD4\u56DE\u3002
- \u83B7\u53D6 higress-config \u5185\u5BB9\u3002
- \u904D\u5386 ItemControllers, \u6821\u9A8C higress-config \u914D\u7F6E\u662F\u5426\u5408\u6CD5\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u8FD4\u56DE\u4E0D\u5408\u6CD5\uFF0C\u5C31\u8FD4\u56DE\u3002
- \u548C\u4E0A\u6B21\u4FDD\u5B58\u5728\u672C\u5730 higressConfig \u6BD4\u5BF9, \u68C0\u67E5\u8FD9\u6B21\u6570\u636E\u662F\u5426\u6709\u53D8\u5316\uFF0C\u5982\u679C\u6CA1\u6709\u53D8\u5316\u5C31\u8FD4\u56DE\u3002
- \u5982\u679C\u6570\u636E\u6709\u53D8\u5316\uFF0C\u5C31\u904D\u5386 ItemControllers \u901A\u77E5\u6BCF\u4E2A itemController \u6570\u636E\u6709\u53D8\u5316\uFF0C\u540C\u65F6\u4FDD\u5B58\u8FD9\u6B21\u53D8\u5316\u5230\u672C\u5730 higressConfig\u3002

\`\`\`go
// pkg/ingress/kube/configmap/controller.go
func (c *ConfigmapMgr) AddOrUpdateHigressConfig(name util.ClusterNamespacedName) {
	// \u53EA\u76D1\u542C higress-system \u547D\u540D\u7A7A\u95F4\u4E0B name \u4E3A higress-config Configmap \u7684\u53D8\u5316
	if name.Namespace != c.Namespace || name.Name != HigressConfigMapName {
		return
	}
    // ...
	// \u83B7\u53D6 higress-config \u5185\u5BB9
	higressConfigmap, err := c.HigressConfigLister.Get(HigressConfigMapName)
	
	// \u901A\u8FC7 yaml.Unmarshal \u8F6C\u6210 HigressConfig
	newHigressConfig := NewDefaultHigressConfig()
	if err = yaml.Unmarshal([]byte(higressConfigmap.Data[HigressConfigMapKey]), newHigressConfig); err != nil {
		IngressLog.Errorf("data:%s,  convert to higress config error, error: %+v", higressConfigmap.Data[HigressConfigMapKey], err)
		return
	}

	// ...
	// \u904D\u5386 ItemControllers, \u6821\u9A8C\u914D\u7F6E\u662F\u5426\u5408\u6CD5
	for _, itemController := range c.ItemControllers {
		if itemErr := itemController.ValidHigressConfig(newHigressConfig); itemErr != nil {
			IngressLog.Errorf("configmap %s controller valid higress config error, error: %+v", itemController.GetName(), itemErr)
			return
		}
	}

	// \u548C\u4E0A\u6B21\u6BD4\u5BF9\u8FD9\u6B21\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4
	oldHigressConfig := c.GetHigressConfig()
	result, _ := c.CompareHigressConfig(oldHigressConfig, newHigressConfig)
    // ...
	// \u5982\u679C\u6570\u636E\u6709\u53D8\u66F4\uFF0C\u5C31\u904D\u5386 ItemControllers \u901A\u77E5\u6BCF\u4E2A itemController \u6570\u636E\u6709\u53D8\u66F4\uFF0C\u540C\u65F6\u4FDD\u5B58\u8FD9\u6B21\u53D8\u66F4\u5230\u672C\u5730\u3002
	if result == ResultReplace || result == ResultDelete {
		for _, itemController := range c.ItemControllers {
			IngressLog.Infof("configmap %s controller AddOrUpdateHigressConfig", itemController.GetName())
			if itemErr := itemController.AddOrUpdateHigressConfig(name, oldHigressConfig, newHigressConfig); itemErr != nil {
				IngressLog.Errorf("configmap %s controller AddOrUpdateHigressConfig error, error: %+v", itemController.GetName(), itemErr)
			}
		}
		// \u4FDD\u5B58\u8FD9\u6B21\u53D8\u66F4
		c.SetHigressConfig(newHigressConfig)
	}
}
\`\`\`

### 2. TracingController \u53D8\u66F4\u5904\u7406

TracingController \u53D8\u66F4\u5904\u7406\u5C31\u6BD4\u8F83\u7B80\u5355\uFF1A
- \u68C0\u67E5 Tracing \u8FD9\u90E8\u5206\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4\u3002
- \u5982\u679C\u6709\u53D8\u66F4\uFF0CDeepCopy \u4E00\u4EFD Tracing \u6570\u636E\u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u540C\u65F6\u901A\u8FC7 eventHandler \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5\u3002

\`\`\`go
// pkg/ingress/kube/configmap/tracing.go
func (t *TracingController) AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error {
	// ...
	// \u68C0\u67E5 Tracing \u90E8\u5206\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4
	result, _ := compareTracing(old.Tracing, new.Tracing)

	// \u5982\u679C\u6709\u53D8\u66F4\uFF0CDeepCopy \u4E00\u4EFD Tracing \u6570\u636E\u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u540C\u65F6\u901A\u8FC7 eventHandler \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5
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
\`\`\`

## \u901A\u77E5 XDSUpdater

\u5728 ConfigmapMgr \u521D\u59CB\u5316\u65F6\u5019\u8C03\u7528 configmapMgr.initEventHandlers()\uFF0C \u8FD9\u4E2A func \u4F1A\u521B\u5EFA ItemEventHandler, \u540C\u65F6\u904D\u5386 ItemControllers \u8BBE\u7F6E ItemEventHandler\u3002

\`\`\`go
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
\`\`\`

\u8FD9\u91CC XDSUpdater \u662F\u4ECE IngressConfig \u521D\u59CB\u5316\u4F20\u5165\uFF0C XDSUpdater.ConfigUpdate() \u7528\u4E8E\u66F4\u65B0\u901A\u77E5\u4E0B\u53D1\u3002

\u8FDB\u4E00\u6B65\u8DDF\u8E2A\u53EF\u4EE5\u53D1\u73B0\u5728 Higress controller server \u542F\u52A8\u65F6\u6267\u884C s.initXdsServer \u51FD\u6570\u521B\u5EFA s.xdsServer\uFF0C\u5177\u4F53\u903B\u8F91\u4E0D\u5728\u672C\u6587\u8BA8\u8BBA\u8303\u56F4, \u6709\u5174\u8DA3\u53EF\u4EE5\u8FDB\u4E00\u6B65\u9605\u8BFB\u6E90\u7801\u3002


\`\`\`go
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
\`\`\`

## \u6784\u5EFA\u548C\u4E0B\u53D1 EnvoyFilters

### 1. IngressConfig List \u4E0B\u53D1 EnvoyFilters \u5217\u8868

IngressConfig List \u7528\u4E8E VirtualService, DestinationRule, EnvoyFilter, ServiceEntry, WasmPlugin \u7B49 CR \u8D44\u6E90\u4E0B\u53D1\uFF0C \u8FD9\u91CC\u4E3B\u8981\u5173\u6CE8 EnvoyFilter CR \u8D44\u6E90\u4E0B\u53D1\u3002

\`\`\`go
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
		
		// \u8C03\u7528 ConfigmapMgr ConstructEnvoyFilters \u83B7\u53D6\u9700\u8981\u4E0B\u53D1 EnvoyFilter \u5217\u8868
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
		// \u9700\u8981\u4E0B\u53D1 configmap EnvoyFilter \u5217\u8868 \u548C m.cachedEnvoyFilters \u5217\u8868\u805A\u5408\u4E00\u4E0B\u4E0B\u53D1
		envoyFilters = append(envoyFilters, m.cachedEnvoyFilters...)
		IngressLog.Infof("resource type %s, configs number %d", typ, len(envoyFilters))
		return envoyFilters, nil
	}
	
}	
\`\`\`

\u8C03\u7528 ConfigmapMgr ConstructEnvoyFilters \u83B7\u53D6\u9700\u8981\u4E0B\u53D1 EnvoyFilter \u5217\u8868\uFF0C \u540C\u65F6\u548C m.cachedEnvoyFilters \u5217\u8868\u805A\u5408\u4E00\u4E0B\u518D\u4E0B\u53D1\u3002

\u8FD9\u91CC m.cachedEnvoyFilters \u662F\u5728\u6784\u5EFA VirtualService \u65F6\u751F\u6210\uFF0C\u6709\u5174\u8DA3\u53EF\u4EE5\u8FDB\u4E00\u6B65\u9605\u8BFB IngressConfig \u6E90\u7801\u3002


### 2. ConfigmapMgr \u6784\u5EFA EnvoyFilter \u5217\u8868

\u8FD9\u91CC\u6BD4\u8F83\u7B80\u5355\uFF0C\u904D\u5386\u4E00\u4E0B ItemControllers\uFF0C\u805A\u5408\u6BCF\u4E2A itemController \u8FD4\u56DE\u7684 EnvoyFilters.

\`\`\`go
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
\`\`\`

### 3. TracingController \u6784\u5EFA EnvoyFilters

\u8FD9\u91CC\u5C31\u6BD4\u8F83\u7B80\u5355\uFF0C\u6839\u636E\u4FDD\u5B58\u7684 Tracing \u6570\u636E\u6784\u5EFA\u5BF9\u5E94\u7684 EnvoyFilter

\`\`\`go
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
						Value: util.BuildPatchStruct(\`{
							"name":"envoy.filters.http.router",
							"typed_config":{
								"@type": "type.googleapis.com/envoy.extensions.filters.http.router.v3.Router",
								"start_child_span": true
							}
						}\`),
					},
				},
			},
		},
	}

	configs = append(configs, config)
	return configs, nil
}
\`\`\`


## \u5982\u4F55\u6269\u5C55\u5168\u5C40\u914D\u7F6E

### 1. HigressConfig \u7ED3\u6784\u4F53\u6DFB\u52A0\u5BF9\u5E94\u7684\u6269\u5C55\u914D\u7F6E

\`\`\`go
type HigressConfig struct {
	Tracing *Tracing \`json:"tracing,omitempty"\`
	// \u5728\u8FD9\u91CC\u6DFB\u52A0\u5BF9\u5E94\u7684\u6570\u636E\u7ED3\u6784\u6765\u6269\u5C55\u914D\u7F6E
}
\`\`\`

### 2. \u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C

\`\`\`go
// pkg/ingress/kube/configmap/config.go
func NewDefaultHigressConfig() *HigressConfig {
	higressConfig := &HigressConfig{
		Tracing: NewDefaultTracing(),
		// \u5728\u8FD9\u91CC\u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C
	}
	return higressConfig
}
\`\`\`

### 3. \u5B9E\u73B0 ItemController interface

\`\`\`go
type ItemController interface {
	GetName() string
	AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error
	ValidHigressConfig(higressConfig *HigressConfig) error
	ConstructEnvoyFilters() ([]*config.Config, error)
	RegisterItemEventHandler(eventHandler ItemEventHandler)
}
\`\`\`

### 4. \u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\uFF0C\u540C\u65F6\u6DFB\u52A0\u5230 ItemControllers

\`\`\`go
func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {
	// ...
	tracingController := NewTracingController(namespace)
	configmapMgr.AddItemControllers(tracingController)
	// ...
	// \u5728\u8FD9\u91CC\u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\uFF0C\u540C\u65F6\u6DFB\u52A0\u5230 ItemControllers
	configmapMgr.initEventHandlers()

	return configmapMgr
}
\`\`\`

## \u53C2\u4E0E\u793E\u533A\u8D21\u732E

Higress \u5F00\u6E90\u8D21\u732E\u5C0F\u7EC4\u6B63\u5728\u706B\u70ED\u62DB\u52DF\u8D21\u732E\u8005\u3002\u65E9\u671F\u53C2\u4E0E\u5F00\u6E90\u66F4\u5BB9\u6613\u6210\u4E3A\u9879\u76EE Committer\uFF0C\u5E76\u6709\u66F4\u591A\u673A\u4F1A\u6210\u4E3A Higress PMC(Project Management Committee) \u7684\u4E00\u5458\uFF0C\u53C2\u4E0E\u4E3B\u5BFC Higress \u793E\u533A\u7684\u524D\u8FDB\u65B9\u5411\u3002
\u6B22\u8FCE\u52A0\u5165 Higress \u793E\u533A\u7FA4\uFF1A


![](https://img.alicdn.com/imgextra/i1/O1CN0166Gkdt1cRTVjJ2skL_!!6000000003597-2-tps-720-405.png)
`,o={title:"Higress \u5168\u5C40\u914D\u7F6E\u63A7\u5236\u9762\u539F\u7406\u5206\u6790",description:"Higress \u5168\u5C40\u914D\u7F6E\u63A7\u5236\u9762\u539F\u7406\u5206\u6790",keywords:["higress"],date:"2023-07-23",author:"Jun",category:"article"},t={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/configmap.md",rawData:void 0};export{t as _internal,i as body,r as collection,o as data,e as id,n as slug};
