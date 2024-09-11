import{c as o,__tla as d}from"./astro-component.cI6d52vQ.js";import{r as p,m as v,u as g,__tla as f}from"./constant.dO5n4riI.js";import{__tla as y}from"./astro/assets-service.Da9pL5MS.js";let s,t,n,i,r,c,a,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let e;e=`<p>Higress \u6709\u4E2A\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-config\uFF0C\u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">tracing:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sampling: 100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">timeout: 500</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">skywalking:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">       </span></span><span style="--0:#9ECBFF">service: skywalking-oap-server.op-system.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">       </span></span><span style="--0:#9ECBFF">port: 11800</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  higress: |-\x7F    tracing:\x7F      enable: true\x7F      sampling: 100\x7F      timeout: 500\x7F      skywalking:\x7F       service: skywalking-oap-server.op-system.svc.cluster.local\x7F       port: 11800\x7F...\x7F...\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system"><div></div></button></div></figure></div>
<p>\u5177\u4F53\u914D\u7F6E\u8BF4\u660E\u8BF7\u53C2\u8003 <a href="https://higress.cn/docs/latest/user/configmap/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Higress \u5168\u5C40\u914D\u7F6E\u8BF4\u660E\u6587\u6863</a>\uFF0C
\u672C\u6587\u4ECB\u7ECD\u4EE5 Tracing \u4E3A\u4F8B\uFF0C\u8BE6\u7EC6\u8BF4\u660E Tracing \u5168\u5C40\u914D\u7F6E\u662F\u5982\u4F55\u8F6C\u6210 EnvoyFilter \u548C\u5982\u4F55\u540C\u65F6\u5B9E\u73B0\u5B9E\u65F6\u4E0B\u53D1\u5230 Higress Gateway\u8FC7\u7A0B\u3002</p>
<p>\u672C\u6587\u6D89\u53CA\u6574\u4F53\u67B6\u6784\u6D41\u7A0B\u3001\u521D\u59CB\u5316\u8FC7\u7A0B\u548C\u542F\u52A8\u3001higress-config \u53D8\u66F4\u548C\u5904\u7406\u6D41\u7A0B\u3001\u901A\u77E5 XDSUpdater\u3001\u6784\u5EFA EnvoyFilter \u548C\u4E0B\u53D1\u4EE5\u53CA\u5982\u4F55\u6269\u5C55\u5168\u5C40\u914D\u7F6E\u7B49\u5185\u5BB9\u3002</p>
<h2 id="\u6574\u4F53\u67B6\u6784\u6D41\u7A0B">\u6574\u4F53\u67B6\u6784\u6D41\u7A0B</h2>
<h3 id="1-\u6574\u4F53\u67B6\u6784">1. \u6574\u4F53\u67B6\u6784</h3>
<p><img src="/img/blog/configmap1.png" alt="img.png" referrerpolicy="no-referrer"></p>
<h3 id="2-\u6838\u5FC3\u7EC4\u4EF6">2. \u6838\u5FC3\u7EC4\u4EF6</h3>
<ul>
<li>IngressConfig</li>
</ul>
<p>IngressConfig \u662F Higress \u4E00\u4E2A\u6838\u5FC3\u7ED3\u6784\u4F53, \u8D1F\u8D23\u76D1\u63A7 Ingress\uFF0C McpBridge, Http2Rpc, WasmPlugin \u7B49 k8s \u8D44\u6E90\uFF0C \u540C\u65F6\u96C6\u6210 ConfigStore Interface\uFF0C\u901A\u8FC7 List \u63A5\u53E3\u4E0B\u53D1 VirtualService, DestinationRule, EnvoyFilter, ServiceEntry, WasmPlugin \u7B49 CR \u8D44\u6E90\u3002</p>
<ul>
<li>ConfigmapMgr</li>
</ul>
<p>ConfigmapMgr \u7ED3\u6784\u4F53\u8D1F\u8D23\u6574\u4E2A\u6838\u5FC3\u6D41\u7A0B\uFF0C\u5305\u62EC\u901A\u8FC7 Informer List/Watch \u673A\u5236\u76D1\u63A7 higress-config \u7684\u53D8\u66F4\uFF0C\u540C\u65F6\u904D\u5386 ItemControllers \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5\uFF0C\u63D0\u4F9B\u6784\u5EFA EnvoyFilter \u5217\u8868\u7B49\u529F\u80FD\u3002</p>
<ul>
<li>TracingController</li>
</ul>
<p>TracingController \u7ED3\u6784\u4F53\u8D1F\u8D23\u5177\u4F53\u7684 Tracing \u6570\u636E\u6821\u9A8C\uFF0C\u6784\u5EFA Tracing EnvoyFilter, \u4EE5\u53CA\u901A\u8FC7 ItemEventHandler \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5\u7B49\u3002</p>
<ul>
<li>HigressConfig</li>
</ul>
<p>HigressConfig \u662F higress-config Configmap \u6240\u5BF9\u5E94\u6570\u636E\u7684\u7ED3\u6784\u4F53\u3002</p>
<h3 id="3-\u6838\u5FC3\u6D41\u7A0B">3. \u6838\u5FC3\u6D41\u7A0B</h3>
<ul>
<li>\u7528 Informer List/Watch \u673A\u5236\u76D1\u63A7 higress-config \u53D8\u66F4\uFF0C\u6821\u9A8C\u53D8\u66F4\uFF0C\u540C\u65F6\u4FDD\u5B58\u53D8\u66F4\u540E\u6570\u636E\u3002</li>
<li>\u7528\u53D8\u66F4\u6570\u636E\u6784\u5EFA EnvoyFilter\u3002</li>
<li>\u901A\u77E5 XDSUpdater\uFF0CEnvoyFilter \u6709\u53D8\u66F4\uFF0C\u91CD\u65B0\u62C9\u53D6\u65B0\u7684 EnvoyFilter \u5217\u8868\u3002</li>
</ul>
<h2 id="\u521D\u59CB\u5316\u8FC7\u7A0B">\u521D\u59CB\u5316\u8FC7\u7A0B</h2>
<h3 id="1-\u521D\u59CB\u5316\u5165\u53E3">1. \u521D\u59CB\u5316\u5165\u53E3</h3>
<p>\u521D\u59CB\u5316\u8FC7\u7A0B\u5165\u53E3\u5728 NewIngressConfig\uFF0C \u521D\u59CB\u5316 IngressConfig \u65F6\u540C\u65F6\u6784\u5EFA HigressConfigController \u548C ConfigmapMgr\u3002</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/config/ingress_config.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func NewIngressConfig(localKubeClient kube.Client, XDSUpdater model.XDSUpdater, namespace, clusterId string) *IngressConfig {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u6784\u5EFA controller \u548C configmapMgr</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">higressConfigController := configmap.NewController(localKubeClient, clusterId, namespace)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.configmapMgr = configmap.NewConfigmapMgr(XDSUpdater, namespace, higressConfigController, higressConfigController.Lister())</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return config</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func NewIngressConfig(localKubeClient kube.Client, XDSUpdater model.XDSUpdater, namespace, clusterId string) *IngressConfig {\x7F  // ...\x7F\x7F  // \u6784\u5EFA controller \u548C configmapMgr\x7F  higressConfigController := configmap.NewController(localKubeClient, clusterId, namespace)\x7F  config.configmapMgr = configmap.NewConfigmapMgr(XDSUpdater, namespace, higressConfigController, higressConfigController.Lister())\x7F\x7F  return config\x7F}"><div></div></button></div></figure></div>
<h3 id="2-higressconfigcontroller-\u521D\u59CB\u5316">2. HigressConfigController \u521D\u59CB\u5316</h3>
<p>\u901A\u8FC7 Higress \u63D0\u4F9B NewCommonController \u521D\u59CB\u5316 HigressConfigController \u7528\u4E8E\u76D1\u542C higress-system \u547D\u540D\u7A7A\u95F4\u4E0B Configmap \u7684\u53D8\u5316\u3002</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/kube/configmap/controller.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type HigressConfigController controller.Controller[listersv1.ConfigMapNamespaceLister]</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func NewController(client kubeclient.Client, clusterId string, namespace string) HigressConfigController {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">informer := client.KubeInformer().Core().V1().ConfigMaps().Informer()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return controller.NewCommonController("higressConfig", client.KubeInformer().Core().V1().ConfigMaps().Lister().ConfigMaps(namespace),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">informer, GetConfigmap, clusterId)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func GetConfigmap(lister listersv1.ConfigMapNamespaceLister, namespacedName types.NamespacedName) (controllers.Object, error) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return lister.Get(namespacedName.Name)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type HigressConfigController controller.Controller[listersv1.ConfigMapNamespaceLister]\x7F\x7Ffunc NewController(client kubeclient.Client, clusterId string, namespace string) HigressConfigController {\x7F  informer := client.KubeInformer().Core().V1().ConfigMaps().Informer()\x7F  return controller.NewCommonController(&#x22;higressConfig&#x22;, client.KubeInformer().Core().V1().ConfigMaps().Lister().ConfigMaps(namespace),\x7F    informer, GetConfigmap, clusterId)\x7F}\x7F\x7Ffunc GetConfigmap(lister listersv1.ConfigMapNamespaceLister, namespacedName types.NamespacedName) (controllers.Object, error) {\x7F  return lister.Get(namespacedName.Name)\x7F}"><div></div></button></div></figure></div>
<h3 id="3-configmapmgr-\u521D\u59CB\u5316">3. ConfigmapMgr \u521D\u59CB\u5316</h3>
<p>ConfigmapMgr \u521D\u59CB\u5316\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u6784\u5EFA ConfigmapMgr</li>
<li>\u8BBE\u7F6E HigressConfigController configmap \u65B0\u589E\u6216\u8005\u66F4\u65B0\u56DE\u8C03\u51FD\u6570\u4E3A configmapMgr.AddOrUpdateHigressConfig</li>
<li>\u8BBE\u7F6E HigressConfig \u7ED3\u6784\u4F53\u9ED8\u8BA4\u503C</li>
<li>\u521D\u59CB\u5316 TracingController</li>
<li>\u628A tracingController \u6DFB\u52A0\u5230 configmapMgr itemControllers \u6570\u7EC4\u91CC</li>
<li>\u521D\u59CB\u5316 ItemEventHandler\uFF0C \u540C\u65F6\u904D\u5386 itemControllers\uFF0C\u8BBE\u7F6E ItemEventHandler</li>
</ul>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/kube/configmap/controller.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">//  \u6784\u5EFA ConfigmapMgr</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configmapMgr := &#x26;ConfigmapMgr{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">XDSUpdater:              XDSUpdater,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">Namespace:               namespace,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">HigressConfigController: higressConfigController,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">HigressConfigLister:     higressConfigLister,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">higressConfig:           atomic.Value{},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8BBE\u7F6E HigressConfigController configmap \u65B0\u589E\u6216\u8005\u66F4\u65B0\u56DE\u8C03\u51FD\u6570 configmapMgr.AddOrUpdateHigressConfig</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configmapMgr.HigressConfigController.AddEventHandler(configmapMgr.AddOrUpdateHigressConfig)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8BBE\u7F6E HigressConfig \u7ED3\u6784\u4F53\u9ED8\u8BA4\u503C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configmapMgr.SetHigressConfig(NewDefaultHigressConfig())</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u521D\u59CB\u5316 TracingController</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tracingController := NewTracingController(namespace)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u628A tracingController \u6DFB\u52A0\u5230 configmapMgr itemControllers \u91CC</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configmapMgr.AddItemControllers(tracingController)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u521D\u59CB\u5316 itemEventHandler\uFF0C \u540C\u65F6\u904D\u5386 itemControllers\uFF0C\u8BBE\u7F6E itemEventHandler</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configmapMgr.initEventHandlers()</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD4\u56DE configmapMgr</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return configmapMgr</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {\x7F    //  \u6784\u5EFA ConfigmapMgr\x7F  configmapMgr := &#x26;ConfigmapMgr{\x7F    XDSUpdater:              XDSUpdater,\x7F    Namespace:               namespace,\x7F    HigressConfigController: higressConfigController,\x7F    HigressConfigLister:     higressConfigLister,\x7F    higressConfig:           atomic.Value{},\x7F  }\x7F  // \u8BBE\u7F6E HigressConfigController configmap \u65B0\u589E\u6216\u8005\u66F4\u65B0\u56DE\u8C03\u51FD\u6570 configmapMgr.AddOrUpdateHigressConfig\x7F  configmapMgr.HigressConfigController.AddEventHandler(configmapMgr.AddOrUpdateHigressConfig)\x7F  // \u8BBE\u7F6E HigressConfig \u7ED3\u6784\u4F53\u9ED8\u8BA4\u503C\x7F  configmapMgr.SetHigressConfig(NewDefaultHigressConfig())\x7F\x7F  // \u521D\u59CB\u5316 TracingController\x7F  tracingController := NewTracingController(namespace)\x7F  // \u628A tracingController \u6DFB\u52A0\u5230 configmapMgr itemControllers \u91CC\x7F  configmapMgr.AddItemControllers(tracingController)\x7F  // \u521D\u59CB\u5316 itemEventHandler\uFF0C \u540C\u65F6\u904D\u5386 itemControllers\uFF0C\u8BBE\u7F6E itemEventHandler\x7F  configmapMgr.initEventHandlers()\x7F\x7F  // \u8FD4\u56DE configmapMgr\x7F  return configmapMgr\x7F}"><div></div></button></div></figure></div>
<h2 id="\u542F\u52A8">\u542F\u52A8</h2>
<p>\u5728 IngressConfig \u6DFB\u52A0 HigressConfigController Run() \u548C HasSynced() \u63A7\u5236\u6D41\u7A0B\u3002</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/config/ingress_config.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (m *IngressConfig) Run(stop &#x3C;-chan struct{}) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u542F\u52A8 HigressConfigController</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">go m.configmapMgr.HigressConfigController.Run(stop)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (m *IngressConfig) HasSynced() bool {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ....</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if !m.configmapMgr.HigressConfigController.HasSynced() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (m *IngressConfig) Run(stop <-chan struct{}) {\x7F  // ...\x7F  // \u542F\u52A8 HigressConfigController\x7F  go m.configmapMgr.HigressConfigController.Run(stop)\x7F}\x7F\x7Ffunc (m *IngressConfig) HasSynced() bool {\x7F  // ....\x7F  if !m.configmapMgr.HigressConfigController.HasSynced() {\x7F    return false\x7F  }\x7F}"><div></div></button></div></figure></div>
<h2 id="higress-config-\u53D8\u66F4\u548C\u5904\u7406\u6D41\u7A0B">higress-config \u53D8\u66F4\u548C\u5904\u7406\u6D41\u7A0B</h2>
<h3 id="1-configmapmgr-\u53D8\u66F4\u5904\u7406">1. configmapMgr \u53D8\u66F4\u5904\u7406</h3>
<p>ConfigmapMgr \u901A\u8FC7\u6536\u5230 HigressConfigController \u901A\u77E5\u6765\u5904\u7406\u53D8\u66F4\u8BF7\u6C42\u3002</p>
<p>\u5177\u4F53\u53D8\u66F4\u6D41\u7A0B\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u5224\u65AD\u662F\u5426 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B name \u4E3A higress-config Configmap \u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5982\u679C\u4E0D\u662F\u5C31\u8FD4\u56DE\u3002</li>
<li>\u83B7\u53D6 higress-config \u5185\u5BB9\u3002</li>
<li>\u904D\u5386 ItemControllers, \u6821\u9A8C higress-config \u914D\u7F6E\u662F\u5426\u5408\u6CD5\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u8FD4\u56DE\u4E0D\u5408\u6CD5\uFF0C\u5C31\u8FD4\u56DE\u3002</li>
<li>\u548C\u4E0A\u6B21\u4FDD\u5B58\u5728\u672C\u5730 higressConfig \u6BD4\u5BF9, \u68C0\u67E5\u8FD9\u6B21\u6570\u636E\u662F\u5426\u6709\u53D8\u5316\uFF0C\u5982\u679C\u6CA1\u6709\u53D8\u5316\u5C31\u8FD4\u56DE\u3002</li>
<li>\u5982\u679C\u6570\u636E\u6709\u53D8\u5316\uFF0C\u5C31\u904D\u5386 ItemControllers \u901A\u77E5\u6BCF\u4E2A itemController \u6570\u636E\u6709\u53D8\u5316\uFF0C\u540C\u65F6\u4FDD\u5B58\u8FD9\u6B21\u53D8\u5316\u5230\u672C\u5730 higressConfig\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/kube/configmap/controller.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (c *ConfigmapMgr) AddOrUpdateHigressConfig(name util.ClusterNamespacedName) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u53EA\u76D1\u542C higress-system \u547D\u540D\u7A7A\u95F4\u4E0B name \u4E3A higress-config Configmap \u7684\u53D8\u5316</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if name.Namespace != c.Namespace || name.Name != HigressConfigMapName {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u83B7\u53D6 higress-config \u5185\u5BB9</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">higressConfigmap, err := c.HigressConfigLister.Get(HigressConfigMapName)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u901A\u8FC7 yaml.Unmarshal \u8F6C\u6210 HigressConfig</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">newHigressConfig := NewDefaultHigressConfig()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err = yaml.Unmarshal([]byte(higressConfigmap.Data[HigressConfigMapKey]), newHigressConfig); err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">IngressLog.Errorf("data:%s,  convert to higress config error, error: %+v", higressConfigmap.Data[HigressConfigMapKey], err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u904D\u5386 ItemControllers, \u6821\u9A8C\u914D\u7F6E\u662F\u5426\u5408\u6CD5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">for _, itemController := range c.ItemControllers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if itemErr := itemController.ValidHigressConfig(newHigressConfig); itemErr != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Errorf("configmap %s controller valid higress config error, error: %+v", itemController.GetName(), itemErr)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">return</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u548C\u4E0A\u6B21\u6BD4\u5BF9\u8FD9\u6B21\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">oldHigressConfig := c.GetHigressConfig()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">result, _ := c.CompareHigressConfig(oldHigressConfig, newHigressConfig)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5982\u679C\u6570\u636E\u6709\u53D8\u66F4\uFF0C\u5C31\u904D\u5386 ItemControllers \u901A\u77E5\u6BCF\u4E2A itemController \u6570\u636E\u6709\u53D8\u66F4\uFF0C\u540C\u65F6\u4FDD\u5B58\u8FD9\u6B21\u53D8\u66F4\u5230\u672C\u5730\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if result == ResultReplace || result == ResultDelete {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">for _, itemController := range c.ItemControllers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Infof("configmap %s controller AddOrUpdateHigressConfig", itemController.GetName())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">if itemErr := itemController.AddOrUpdateHigressConfig(name, oldHigressConfig, newHigressConfig); itemErr != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">IngressLog.Errorf("configmap %s controller AddOrUpdateHigressConfig error, error: %+v", itemController.GetName(), itemErr)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u4FDD\u5B58\u8FD9\u6B21\u53D8\u66F4</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">c.SetHigressConfig(newHigressConfig)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (c *ConfigmapMgr) AddOrUpdateHigressConfig(name util.ClusterNamespacedName) {\x7F  // \u53EA\u76D1\u542C higress-system \u547D\u540D\u7A7A\u95F4\u4E0B name \u4E3A higress-config Configmap \u7684\u53D8\u5316\x7F  if name.Namespace != c.Namespace || name.Name != HigressConfigMapName {\x7F    return\x7F  }\x7F    // ...\x7F  // \u83B7\u53D6 higress-config \u5185\u5BB9\x7F  higressConfigmap, err := c.HigressConfigLister.Get(HigressConfigMapName)\x7F\x7F  // \u901A\u8FC7 yaml.Unmarshal \u8F6C\u6210 HigressConfig\x7F  newHigressConfig := NewDefaultHigressConfig()\x7F  if err = yaml.Unmarshal([]byte(higressConfigmap.Data[HigressConfigMapKey]), newHigressConfig); err != nil {\x7F    IngressLog.Errorf(&#x22;data:%s,  convert to higress config error, error: %+v&#x22;, higressConfigmap.Data[HigressConfigMapKey], err)\x7F    return\x7F  }\x7F\x7F  // ...\x7F  // \u904D\u5386 ItemControllers, \u6821\u9A8C\u914D\u7F6E\u662F\u5426\u5408\u6CD5\x7F  for _, itemController := range c.ItemControllers {\x7F    if itemErr := itemController.ValidHigressConfig(newHigressConfig); itemErr != nil {\x7F      IngressLog.Errorf(&#x22;configmap %s controller valid higress config error, error: %+v&#x22;, itemController.GetName(), itemErr)\x7F      return\x7F    }\x7F  }\x7F\x7F  // \u548C\u4E0A\u6B21\u6BD4\u5BF9\u8FD9\u6B21\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4\x7F  oldHigressConfig := c.GetHigressConfig()\x7F  result, _ := c.CompareHigressConfig(oldHigressConfig, newHigressConfig)\x7F    // ...\x7F  // \u5982\u679C\u6570\u636E\u6709\u53D8\u66F4\uFF0C\u5C31\u904D\u5386 ItemControllers \u901A\u77E5\u6BCF\u4E2A itemController \u6570\u636E\u6709\u53D8\u66F4\uFF0C\u540C\u65F6\u4FDD\u5B58\u8FD9\u6B21\u53D8\u66F4\u5230\u672C\u5730\u3002\x7F  if result == ResultReplace || result == ResultDelete {\x7F    for _, itemController := range c.ItemControllers {\x7F      IngressLog.Infof(&#x22;configmap %s controller AddOrUpdateHigressConfig&#x22;, itemController.GetName())\x7F      if itemErr := itemController.AddOrUpdateHigressConfig(name, oldHigressConfig, newHigressConfig); itemErr != nil {\x7F        IngressLog.Errorf(&#x22;configmap %s controller AddOrUpdateHigressConfig error, error: %+v&#x22;, itemController.GetName(), itemErr)\x7F      }\x7F    }\x7F    // \u4FDD\u5B58\u8FD9\u6B21\u53D8\u66F4\x7F    c.SetHigressConfig(newHigressConfig)\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="2-tracingcontroller-\u53D8\u66F4\u5904\u7406">2. TracingController \u53D8\u66F4\u5904\u7406</h3>
<p>TracingController \u53D8\u66F4\u5904\u7406\u5C31\u6BD4\u8F83\u7B80\u5355\uFF1A</p>
<ul>
<li>\u68C0\u67E5 Tracing \u8FD9\u90E8\u5206\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4\u3002</li>
<li>\u5982\u679C\u6709\u53D8\u66F4\uFF0CDeepCopy \u4E00\u4EFD Tracing \u6570\u636E\u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u540C\u65F6\u901A\u8FC7 eventHandler \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5\u3002</li>
</ul>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/kube/configmap/tracing.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (t *TracingController) AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u68C0\u67E5 Tracing \u90E8\u5206\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">result, _ := compareTracing(old.Tracing, new.Tracing)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5982\u679C\u6709\u53D8\u66F4\uFF0CDeepCopy \u4E00\u4EFD Tracing \u6570\u636E\u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u540C\u65F6\u901A\u8FC7 eventHandler \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">switch result {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">case ResultReplace:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if newTracing, err := deepCopyTracing(new.Tracing); err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Infof("tracing deepcopy error:%v", err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">} else {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">t.SetTracing(newTracing)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Infof("AddOrUpdate Higress config tracing")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">t.eventHandler(higressTracingEnvoyFilterName)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Infof("send event with filter name:%s", higressTracingEnvoyFilterName)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">case ResultDelete:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">t.SetTracing(NewDefaultTracing())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">IngressLog.Infof("Delete Higress config tracing")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">t.eventHandler(higressTracingEnvoyFilterName)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">IngressLog.Infof("send event with filter name:%s", higressTracingEnvoyFilterName)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (t *TracingController) AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error {\x7F  // ...\x7F  // \u68C0\u67E5 Tracing \u90E8\u5206\u6570\u636E\u662F\u5426\u6709\u53D8\u66F4\x7F  result, _ := compareTracing(old.Tracing, new.Tracing)\x7F\x7F  // \u5982\u679C\u6709\u53D8\u66F4\uFF0CDeepCopy \u4E00\u4EFD Tracing \u6570\u636E\u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u540C\u65F6\u901A\u8FC7 eventHandler \u4E0B\u53D1\u53D8\u66F4\u901A\u77E5\x7F  switch result {\x7F  case ResultReplace:\x7F    if newTracing, err := deepCopyTracing(new.Tracing); err != nil {\x7F      IngressLog.Infof(&#x22;tracing deepcopy error:%v&#x22;, err)\x7F    } else {\x7F      t.SetTracing(newTracing)\x7F      IngressLog.Infof(&#x22;AddOrUpdate Higress config tracing&#x22;)\x7F      t.eventHandler(higressTracingEnvoyFilterName)\x7F      IngressLog.Infof(&#x22;send event with filter name:%s&#x22;, higressTracingEnvoyFilterName)\x7F    }\x7F  case ResultDelete:\x7F    t.SetTracing(NewDefaultTracing())\x7F    IngressLog.Infof(&#x22;Delete Higress config tracing&#x22;)\x7F    t.eventHandler(higressTracingEnvoyFilterName)\x7F    IngressLog.Infof(&#x22;send event with filter name:%s&#x22;, higressTracingEnvoyFilterName)\x7F  }\x7F\x7F  return nil\x7F}"><div></div></button></div></figure></div>
<h2 id="\u901A\u77E5-xdsupdater">\u901A\u77E5 XDSUpdater</h2>
<p>\u5728 ConfigmapMgr \u521D\u59CB\u5316\u65F6\u5019\u8C03\u7528 configmapMgr.initEventHandlers()\uFF0C \u8FD9\u4E2A func \u4F1A\u521B\u5EFA ItemEventHandler, \u540C\u65F6\u904D\u5386 ItemControllers \u8BBE\u7F6E ItemEventHandler\u3002</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/kube/configmap/config.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type ItemEventHandler = func(name string)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// pkg/ingress/kube/configmap/controller.go</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (c *ConfigmapMgr) initEventHandlers() error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">itemEventHandler := func(name string) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">c.XDSUpdater.ConfigUpdate(&#x26;model.PushRequest{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">Full: true,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">ConfigsUpdated: map[model.ConfigKey]struct{}{{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Kind:      gvk.EnvoyFilter,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Name:      name,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Namespace: c.Namespace,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">}: {}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">Reason: []model.TriggerReason{ModelUpdatedReason},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">for _, itemController := range c.ItemControllers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">itemController.RegisterItemEventHandler(itemEventHandler)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type ItemEventHandler = func(name string)\x7F\x7F// pkg/ingress/kube/configmap/controller.go\x7Ffunc (c *ConfigmapMgr) initEventHandlers() error {\x7F    itemEventHandler := func(name string) {\x7F    c.XDSUpdater.ConfigUpdate(&#x26;model.PushRequest{\x7F        Full: true,\x7F        ConfigsUpdated: map[model.ConfigKey]struct{}{{\x7F            Kind:      gvk.EnvoyFilter,\x7F            Name:      name,\x7F            Namespace: c.Namespace,\x7F        }: {}},\x7F        Reason: []model.TriggerReason{ModelUpdatedReason},\x7F        })\x7F    }\x7F\x7F    for _, itemController := range c.ItemControllers {\x7F    itemController.RegisterItemEventHandler(itemEventHandler)\x7F    }\x7F\x7F    return nil\x7F}"><div></div></button></div></figure></div>
<p>\u8FD9\u91CC XDSUpdater \u662F\u4ECE IngressConfig \u521D\u59CB\u5316\u4F20\u5165\uFF0C XDSUpdater.ConfigUpdate() \u7528\u4E8E\u66F4\u65B0\u901A\u77E5\u4E0B\u53D1\u3002</p>
<p>\u8FDB\u4E00\u6B65\u8DDF\u8E2A\u53EF\u4EE5\u53D1\u73B0\u5728 Higress controller server \u542F\u52A8\u65F6\u6267\u884C s.initXdsServer \u51FD\u6570\u521B\u5EFA s.xdsServer\uFF0C\u5177\u4F53\u903B\u8F91\u4E0D\u5728\u672C\u6587\u8BA8\u8BBA\u8303\u56F4, \u6709\u5174\u8DA3\u53EF\u4EE5\u8FDB\u4E00\u6B65\u9605\u8BFB\u6E90\u7801\u3002</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/bootstrap/server.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func NewServer(args *ServerArgs) (*Server, error) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">s := &#x26;Server{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">ServerArgs:      args,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">httpMux:         http.NewServeMux(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">environment:     e,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">readinessProbes: make(map[string]readinessProbe),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">server:          server.New(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">s.environment.Watcher = mesh.NewFixedWatcher(&#x26;v1alpha1.MeshConfig{})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">s.environment.Init()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">initFuncList := []func() error{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">s.initKubeClient,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">s.initXdsServer,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">s.initHttpServer,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">s.initConfigController,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">s.initRegistryEventHandlers,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">s.initAuthenticators,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">for _, f := range initFuncList {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if err := f(); err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">return nil, err</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return s, nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// pkg/bootstrap/server.go</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (s *Server) initXdsServer() error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">log.Info("init xds server")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">s.xdsServer = xds.NewDiscoveryServer(s.environment, nil, PodName, PodNamespace, s.RegistryOptions.KubeOptions.ClusterAliases)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return s.initGrpcServer()</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func NewServer(args *ServerArgs) (*Server, error) {\x7F  // ...\x7F  s := &#x26;Server{\x7F    ServerArgs:      args,\x7F    httpMux:         http.NewServeMux(),\x7F    environment:     e,\x7F    readinessProbes: make(map[string]readinessProbe),\x7F    server:          server.New(),\x7F  }\x7F  s.environment.Watcher = mesh.NewFixedWatcher(&#x26;v1alpha1.MeshConfig{})\x7F  s.environment.Init()\x7F  initFuncList := []func() error{\x7F    s.initKubeClient,\x7F    s.initXdsServer,\x7F    s.initHttpServer,\x7F    s.initConfigController,\x7F    s.initRegistryEventHandlers,\x7F    s.initAuthenticators,\x7F  }\x7F\x7F  for _, f := range initFuncList {\x7F    if err := f(); err != nil {\x7F      return nil, err\x7F    }\x7F  }\x7F\x7F  // ...\x7F  return s, nil\x7F}\x7F\x7F// pkg/bootstrap/server.go\x7Ffunc (s *Server) initXdsServer() error {\x7F    log.Info(&#x22;init xds server&#x22;)\x7F    s.xdsServer = xds.NewDiscoveryServer(s.environment, nil, PodName, PodNamespace, s.RegistryOptions.KubeOptions.ClusterAliases)\x7F    // ...\x7F    return s.initGrpcServer()\x7F}"><div></div></button></div></figure></div>
<h2 id="\u6784\u5EFA\u548C\u4E0B\u53D1-envoyfilters">\u6784\u5EFA\u548C\u4E0B\u53D1 EnvoyFilters</h2>
<h3 id="1-ingressconfig-list-\u4E0B\u53D1-envoyfilters-\u5217\u8868">1. IngressConfig List \u4E0B\u53D1 EnvoyFilters \u5217\u8868</h3>
<p>IngressConfig List \u7528\u4E8E VirtualService, DestinationRule, EnvoyFilter, ServiceEntry, WasmPlugin \u7B49 CR \u8D44\u6E90\u4E0B\u53D1\uFF0C \u8FD9\u91CC\u4E3B\u8981\u5173\u6CE8 EnvoyFilter CR \u8D44\u6E90\u4E0B\u53D1\u3002</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/config/ingress_config.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (m *IngressConfig) List(typ config.GroupVersionKind, namespace string) ([]config.Config, error) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if typ != gvk.Gateway &#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">typ != gvk.VirtualService &#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">typ != gvk.DestinationRule &#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">typ != gvk.EnvoyFilter &#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">typ != gvk.ServiceEntry &#x26;&#x26;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">typ != gvk.WasmPlugin {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return nil, common.ErrUnsupportedOp</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if typ == gvk.EnvoyFilter {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">m.mutex.RLock()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">defer m.mutex.RUnlock()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">var envoyFilters []config.Config</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u8C03\u7528 ConfigmapMgr ConstructEnvoyFilters \u83B7\u53D6\u9700\u8981\u4E0B\u53D1 EnvoyFilter \u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">configmapEnvoyFilters, err := m.configmapMgr.ConstructEnvoyFilters()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Errorf("Construct configmap EnvoyFilters error %v", err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">} else {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">for _, envoyFilter := range configmapEnvoyFilters {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">envoyFilters = append(envoyFilters, *envoyFilter)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Infof("Append %d configmap EnvoyFilters", len(configmapEnvoyFilters))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if len(envoyFilters) == 0 {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Infof("resource type %s, configs number %d", typ, len(m.cachedEnvoyFilters))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">return m.cachedEnvoyFilters, nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u9700\u8981\u4E0B\u53D1 configmap EnvoyFilter \u5217\u8868 \u548C m.cachedEnvoyFilters \u5217\u8868\u805A\u5408\u4E00\u4E0B\u4E0B\u53D1</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">envoyFilters = append(envoyFilters, m.cachedEnvoyFilters...)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">IngressLog.Infof("resource type %s, configs number %d", typ, len(envoyFilters))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return envoyFilters, nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (m *IngressConfig) List(typ config.GroupVersionKind, namespace string) ([]config.Config, error) {\x7F  if typ != gvk.Gateway &#x26;&#x26;\x7F    typ != gvk.VirtualService &#x26;&#x26;\x7F    typ != gvk.DestinationRule &#x26;&#x26;\x7F    typ != gvk.EnvoyFilter &#x26;&#x26;\x7F    typ != gvk.ServiceEntry &#x26;&#x26;\x7F    typ != gvk.WasmPlugin {\x7F    return nil, common.ErrUnsupportedOp\x7F  }\x7F  // ...\x7F  if typ == gvk.EnvoyFilter {\x7F    m.mutex.RLock()\x7F    defer m.mutex.RUnlock()\x7F    var envoyFilters []config.Config\x7F\x7F    // \u8C03\u7528 ConfigmapMgr ConstructEnvoyFilters \u83B7\u53D6\u9700\u8981\u4E0B\u53D1 EnvoyFilter \u5217\u8868\x7F    configmapEnvoyFilters, err := m.configmapMgr.ConstructEnvoyFilters()\x7F    if err != nil {\x7F      IngressLog.Errorf(&#x22;Construct configmap EnvoyFilters error %v&#x22;, err)\x7F    } else {\x7F      for _, envoyFilter := range configmapEnvoyFilters {\x7F        envoyFilters = append(envoyFilters, *envoyFilter)\x7F      }\x7F      IngressLog.Infof(&#x22;Append %d configmap EnvoyFilters&#x22;, len(configmapEnvoyFilters))\x7F    }\x7F    if len(envoyFilters) == 0 {\x7F      IngressLog.Infof(&#x22;resource type %s, configs number %d&#x22;, typ, len(m.cachedEnvoyFilters))\x7F      return m.cachedEnvoyFilters, nil\x7F    }\x7F    // \u9700\u8981\u4E0B\u53D1 configmap EnvoyFilter \u5217\u8868 \u548C m.cachedEnvoyFilters \u5217\u8868\u805A\u5408\u4E00\u4E0B\u4E0B\u53D1\x7F    envoyFilters = append(envoyFilters, m.cachedEnvoyFilters...)\x7F    IngressLog.Infof(&#x22;resource type %s, configs number %d&#x22;, typ, len(envoyFilters))\x7F    return envoyFilters, nil\x7F  }\x7F\x7F}"><div></div></button></div></figure></div>
<p>\u8C03\u7528 ConfigmapMgr ConstructEnvoyFilters \u83B7\u53D6\u9700\u8981\u4E0B\u53D1 EnvoyFilter \u5217\u8868\uFF0C \u540C\u65F6\u548C m.cachedEnvoyFilters \u5217\u8868\u805A\u5408\u4E00\u4E0B\u518D\u4E0B\u53D1\u3002</p>
<p>\u8FD9\u91CC m.cachedEnvoyFilters \u662F\u5728\u6784\u5EFA VirtualService \u65F6\u751F\u6210\uFF0C\u6709\u5174\u8DA3\u53EF\u4EE5\u8FDB\u4E00\u6B65\u9605\u8BFB IngressConfig \u6E90\u7801\u3002</p>
<h3 id="2-configmapmgr-\u6784\u5EFA-envoyfilter-\u5217\u8868">2. ConfigmapMgr \u6784\u5EFA EnvoyFilter \u5217\u8868</h3>
<p>\u8FD9\u91CC\u6BD4\u8F83\u7B80\u5355\uFF0C\u904D\u5386\u4E00\u4E0B ItemControllers\uFF0C\u805A\u5408\u6BCF\u4E2A itemController \u8FD4\u56DE\u7684 EnvoyFilters.</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">/pkg/ingress/kube/configmap/controller.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (c *ConfigmapMgr) ConstructEnvoyFilters() ([]*config.Config, error) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configs := make([]*config.Config, 0)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">for _, itemController := range c.ItemControllers {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">IngressLog.Infof("controller %s ConstructEnvoyFilters", itemController.GetName())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if itemConfigs, err := itemController.ConstructEnvoyFilters(); err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">IngressLog.Errorf("controller %s ConstructEnvoyFilters error, error: %+v", itemController.GetName(), err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">} else {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">configs = append(configs, itemConfigs...)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return configs, nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (c *ConfigmapMgr) ConstructEnvoyFilters() ([]*config.Config, error) {\x7F  configs := make([]*config.Config, 0)\x7F  for _, itemController := range c.ItemControllers {\x7F    IngressLog.Infof(&#x22;controller %s ConstructEnvoyFilters&#x22;, itemController.GetName())\x7F    if itemConfigs, err := itemController.ConstructEnvoyFilters(); err != nil {\x7F      IngressLog.Errorf(&#x22;controller %s ConstructEnvoyFilters error, error: %+v&#x22;, itemController.GetName(), err)\x7F    } else {\x7F      configs = append(configs, itemConfigs...)\x7F    }\x7F  }\x7F  return configs, nil\x7F}"><div></div></button></div></figure></div>
<h3 id="3-tracingcontroller-\u6784\u5EFA-envoyfilters">3. TracingController \u6784\u5EFA EnvoyFilters</h3>
<p>\u8FD9\u91CC\u5C31\u6BD4\u8F83\u7B80\u5355\uFF0C\u6839\u636E\u4FDD\u5B58\u7684 Tracing \u6570\u636E\u6784\u5EFA\u5BF9\u5E94\u7684 EnvoyFilter</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/kube/configmap/tracing.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func (t *TracingController) ConstructEnvoyFilters() ([]*config.Config, error) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tracingConfig := t.constructTracingTracer(tracing, namespace)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if len(tracingConfig) == 0 {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return configs, nil</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config := &#x26;config.Config{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">Meta: config.Meta{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">GroupVersionKind: gvk.EnvoyFilter,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Name:             higressTracingEnvoyFilterName,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">Namespace:        namespace,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">Spec: &#x26;networking.EnvoyFilter{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">ConfigPatches: []*networking.EnvoyFilter_EnvoyConfigObjectPatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">ApplyTo: networking.EnvoyFilter_NETWORK_FILTER,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">Match: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Context: networking.EnvoyFilter_GATEWAY,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">ObjectTypes: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch_Listener{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">Listener: &#x26;networking.EnvoyFilter_ListenerMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">FilterChain: &#x26;networking.EnvoyFilter_ListenerMatch_FilterChainMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">Filter: &#x26;networking.EnvoyFilter_ListenerMatch_FilterMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                    </span></span><span style="--0:#e1e4e8">Name: "envoy.filters.network.http_connection_manager",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">Patch: &#x26;networking.EnvoyFilter_Patch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Operation: networking.EnvoyFilter_Patch_MERGE,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Value:     util.BuildPatchStruct(tracingConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">ApplyTo: networking.EnvoyFilter_HTTP_FILTER,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">Match: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Context: networking.EnvoyFilter_GATEWAY,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">ObjectTypes: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch_Listener{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">Listener: &#x26;networking.EnvoyFilter_ListenerMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">FilterChain: &#x26;networking.EnvoyFilter_ListenerMatch_FilterChainMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">Filter: &#x26;networking.EnvoyFilter_ListenerMatch_FilterMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                    </span></span><span style="--0:#e1e4e8">Name: "envoy.filters.network.http_connection_manager",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                    </span></span><span style="--0:#e1e4e8">SubFilter: &#x26;networking.EnvoyFilter_ListenerMatch_SubFilterMatch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                      </span></span><span style="--0:#e1e4e8">Name: "envoy.filters.http.router",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                    </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                  </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">Patch: &#x26;networking.EnvoyFilter_Patch{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Operation: networking.EnvoyFilter_Patch_MERGE,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">Value: util.BuildPatchStruct(\`{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">"name":"envoy.filters.http.router",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">"typed_config":{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">"@type": "type.googleapis.com/envoy.extensions.filters.http.router.v3.Router",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">                </span></span><span style="--0:#e1e4e8">"start_child_span": true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">              </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">            </span></span><span style="--0:#e1e4e8">}\`),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">          </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configs = append(configs, config)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return configs, nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func (t *TracingController) ConstructEnvoyFilters() ([]*config.Config, error) {\x7F  // ...\x7F  tracingConfig := t.constructTracingTracer(tracing, namespace)\x7F  if len(tracingConfig) == 0 {\x7F    return configs, nil\x7F  }\x7F\x7F  config := &#x26;config.Config{\x7F    Meta: config.Meta{\x7F      GroupVersionKind: gvk.EnvoyFilter,\x7F      Name:             higressTracingEnvoyFilterName,\x7F      Namespace:        namespace,\x7F    },\x7F    Spec: &#x26;networking.EnvoyFilter{\x7F      ConfigPatches: []*networking.EnvoyFilter_EnvoyConfigObjectPatch{\x7F        {\x7F          ApplyTo: networking.EnvoyFilter_NETWORK_FILTER,\x7F          Match: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch{\x7F            Context: networking.EnvoyFilter_GATEWAY,\x7F            ObjectTypes: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch_Listener{\x7F              Listener: &#x26;networking.EnvoyFilter_ListenerMatch{\x7F                FilterChain: &#x26;networking.EnvoyFilter_ListenerMatch_FilterChainMatch{\x7F                  Filter: &#x26;networking.EnvoyFilter_ListenerMatch_FilterMatch{\x7F                    Name: &#x22;envoy.filters.network.http_connection_manager&#x22;,\x7F                  },\x7F                },\x7F              },\x7F            },\x7F          },\x7F          Patch: &#x26;networking.EnvoyFilter_Patch{\x7F            Operation: networking.EnvoyFilter_Patch_MERGE,\x7F            Value:     util.BuildPatchStruct(tracingConfig),\x7F          },\x7F        },\x7F        {\x7F          ApplyTo: networking.EnvoyFilter_HTTP_FILTER,\x7F          Match: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch{\x7F            Context: networking.EnvoyFilter_GATEWAY,\x7F            ObjectTypes: &#x26;networking.EnvoyFilter_EnvoyConfigObjectMatch_Listener{\x7F              Listener: &#x26;networking.EnvoyFilter_ListenerMatch{\x7F                FilterChain: &#x26;networking.EnvoyFilter_ListenerMatch_FilterChainMatch{\x7F                  Filter: &#x26;networking.EnvoyFilter_ListenerMatch_FilterMatch{\x7F                    Name: &#x22;envoy.filters.network.http_connection_manager&#x22;,\x7F                    SubFilter: &#x26;networking.EnvoyFilter_ListenerMatch_SubFilterMatch{\x7F                      Name: &#x22;envoy.filters.http.router&#x22;,\x7F                    },\x7F                  },\x7F                },\x7F              },\x7F            },\x7F          },\x7F          Patch: &#x26;networking.EnvoyFilter_Patch{\x7F            Operation: networking.EnvoyFilter_Patch_MERGE,\x7F            Value: util.BuildPatchStruct(&#x60;{\x7F              &#x22;name&#x22;:&#x22;envoy.filters.http.router&#x22;,\x7F              &#x22;typed_config&#x22;:{\x7F                &#x22;@type&#x22;: &#x22;type.googleapis.com/envoy.extensions.filters.http.router.v3.Router&#x22;,\x7F                &#x22;start_child_span&#x22;: true\x7F              }\x7F            }&#x60;),\x7F          },\x7F        },\x7F      },\x7F    },\x7F  }\x7F\x7F  configs = append(configs, config)\x7F  return configs, nil\x7F}"><div></div></button></div></figure></div>
<h2 id="\u5982\u4F55\u6269\u5C55\u5168\u5C40\u914D\u7F6E">\u5982\u4F55\u6269\u5C55\u5168\u5C40\u914D\u7F6E</h2>
<h3 id="1-higressconfig-\u7ED3\u6784\u4F53\u6DFB\u52A0\u5BF9\u5E94\u7684\u6269\u5C55\u914D\u7F6E">1. HigressConfig \u7ED3\u6784\u4F53\u6DFB\u52A0\u5BF9\u5E94\u7684\u6269\u5C55\u914D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type HigressConfig struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Tracing *Tracing \`json:"tracing,omitempty"\`</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5728\u8FD9\u91CC\u6DFB\u52A0\u5BF9\u5E94\u7684\u6570\u636E\u7ED3\u6784\u6765\u6269\u5C55\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type HigressConfig struct {\x7F  Tracing *Tracing &#x60;json:&#x22;tracing,omitempty&#x22;&#x60;\x7F  // \u5728\u8FD9\u91CC\u6DFB\u52A0\u5BF9\u5E94\u7684\u6570\u636E\u7ED3\u6784\u6765\u6269\u5C55\u914D\u7F6E\x7F}"><div></div></button></div></figure></div>
<h3 id="2-\u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C">2. \u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C</h3>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">pkg/ingress/kube/configmap/config.go</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func NewDefaultHigressConfig() *HigressConfig {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">higressConfig := &#x26;HigressConfig{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">Tracing: NewDefaultTracing(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u5728\u8FD9\u91CC\u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return higressConfig</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func NewDefaultHigressConfig() *HigressConfig {\x7F  higressConfig := &#x26;HigressConfig{\x7F    Tracing: NewDefaultTracing(),\x7F    // \u5728\u8FD9\u91CC\u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C\x7F  }\x7F  return higressConfig\x7F}"><div></div></button></div></figure></div>
<h3 id="3-\u5B9E\u73B0-itemcontroller-interface">3. \u5B9E\u73B0 ItemController interface</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type ItemController interface {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">GetName() string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ValidHigressConfig(higressConfig *HigressConfig) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ConstructEnvoyFilters() ([]*config.Config, error)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">RegisterItemEventHandler(eventHandler ItemEventHandler)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type ItemController interface {\x7F  GetName() string\x7F  AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error\x7F  ValidHigressConfig(higressConfig *HigressConfig) error\x7F  ConstructEnvoyFilters() ([]*config.Config, error)\x7F  RegisterItemEventHandler(eventHandler ItemEventHandler)\x7F}"><div></div></button></div></figure></div>
<h3 id="4-\u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\u540C\u65F6\u6DFB\u52A0\u5230-itemcontrollers">4. \u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\uFF0C\u540C\u65F6\u6DFB\u52A0\u5230 ItemControllers</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tracingController := NewTracingController(namespace)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configmapMgr.AddItemControllers(tracingController)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// ...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5728\u8FD9\u91CC\u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\uFF0C\u540C\u65F6\u6DFB\u52A0\u5230 ItemControllers</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">configmapMgr.initEventHandlers()</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return configmapMgr</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func NewConfigmapMgr(XDSUpdater model.XDSUpdater, namespace string, higressConfigController HigressConfigController, higressConfigLister listersv1.ConfigMapNamespaceLister) *ConfigmapMgr {\x7F  // ...\x7F  tracingController := NewTracingController(namespace)\x7F  configmapMgr.AddItemControllers(tracingController)\x7F  // ...\x7F  // \u5728\u8FD9\u91CC\u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\uFF0C\u540C\u65F6\u6DFB\u52A0\u5230 ItemControllers\x7F  configmapMgr.initEventHandlers()\x7F\x7F  return configmapMgr\x7F}"><div></div></button></div></figure></div>
<h2 id="\u53C2\u4E0E\u793E\u533A\u8D21\u732E">\u53C2\u4E0E\u793E\u533A\u8D21\u732E</h2>
<p>Higress \u5F00\u6E90\u8D21\u732E\u5C0F\u7EC4\u6B63\u5728\u706B\u70ED\u62DB\u52DF\u8D21\u732E\u8005\u3002\u65E9\u671F\u53C2\u4E0E\u5F00\u6E90\u66F4\u5BB9\u6613\u6210\u4E3A\u9879\u76EE Committer\uFF0C\u5E76\u6709\u66F4\u591A\u673A\u4F1A\u6210\u4E3A Higress PMC(Project Management Committee) \u7684\u4E00\u5458\uFF0C\u53C2\u4E0E\u4E3B\u5BFC Higress \u793E\u533A\u7684\u524D\u8FDB\u65B9\u5411\u3002
\u6B22\u8FCE\u52A0\u5165 Higress \u793E\u533A\u7FA4\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i1/O1CN0166Gkdt1cRTVjJ2skL_!!6000000003597-2-tps-720-405.png" alt="" referrerpolicy="no-referrer"></p>`,i={title:"Higress \u5168\u5C40\u914D\u7F6E\u63A7\u5236\u9762\u539F\u7406\u5206\u6790",keywords:["higress"],description:"Higress \u5168\u5C40\u914D\u7F6E\u63A7\u5236\u9762\u539F\u7406\u5206\u6790",author:"Jun",date:"2023-07-23",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/configmap.md",category:"article"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/configmap.md",a=void 0,c=function(){return`
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

\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
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


\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
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

\`\`\`golang
type HigressConfig struct {
	Tracing *Tracing \`json:"tracing,omitempty"\`
	// \u5728\u8FD9\u91CC\u6DFB\u52A0\u5BF9\u5E94\u7684\u6570\u636E\u7ED3\u6784\u6765\u6269\u5C55\u914D\u7F6E
}
\`\`\`

### 2. \u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C

\`\`\`golang
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

\`\`\`golang
type ItemController interface {
	GetName() string
	AddOrUpdateHigressConfig(name util.ClusterNamespacedName, old *HigressConfig, new *HigressConfig) error
	ValidHigressConfig(higressConfig *HigressConfig) error
	ConstructEnvoyFilters() ([]*config.Config, error)
	RegisterItemEventHandler(eventHandler ItemEventHandler)
}
\`\`\`

### 4. \u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\uFF0C\u540C\u65F6\u6DFB\u52A0\u5230 ItemControllers

\`\`\`golang
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





`},t=function(){return e},r=function(){return[{depth:2,slug:"\u6574\u4F53\u67B6\u6784\u6D41\u7A0B",text:"\u6574\u4F53\u67B6\u6784\u6D41\u7A0B"},{depth:3,slug:"1-\u6574\u4F53\u67B6\u6784",text:"1. \u6574\u4F53\u67B6\u6784"},{depth:3,slug:"2-\u6838\u5FC3\u7EC4\u4EF6",text:"2. \u6838\u5FC3\u7EC4\u4EF6"},{depth:3,slug:"3-\u6838\u5FC3\u6D41\u7A0B",text:"3. \u6838\u5FC3\u6D41\u7A0B"},{depth:2,slug:"\u521D\u59CB\u5316\u8FC7\u7A0B",text:"\u521D\u59CB\u5316\u8FC7\u7A0B"},{depth:3,slug:"1-\u521D\u59CB\u5316\u5165\u53E3",text:"1. \u521D\u59CB\u5316\u5165\u53E3"},{depth:3,slug:"2-higressconfigcontroller-\u521D\u59CB\u5316",text:"2. HigressConfigController \u521D\u59CB\u5316"},{depth:3,slug:"3-configmapmgr-\u521D\u59CB\u5316",text:"3. ConfigmapMgr \u521D\u59CB\u5316"},{depth:2,slug:"\u542F\u52A8",text:"\u542F\u52A8"},{depth:2,slug:"higress-config-\u53D8\u66F4\u548C\u5904\u7406\u6D41\u7A0B",text:"higress-config \u53D8\u66F4\u548C\u5904\u7406\u6D41\u7A0B"},{depth:3,slug:"1-configmapmgr-\u53D8\u66F4\u5904\u7406",text:"1. configmapMgr \u53D8\u66F4\u5904\u7406"},{depth:3,slug:"2-tracingcontroller-\u53D8\u66F4\u5904\u7406",text:"2. TracingController \u53D8\u66F4\u5904\u7406"},{depth:2,slug:"\u901A\u77E5-xdsupdater",text:"\u901A\u77E5 XDSUpdater"},{depth:2,slug:"\u6784\u5EFA\u548C\u4E0B\u53D1-envoyfilters",text:"\u6784\u5EFA\u548C\u4E0B\u53D1 EnvoyFilters"},{depth:3,slug:"1-ingressconfig-list-\u4E0B\u53D1-envoyfilters-\u5217\u8868",text:"1. IngressConfig List \u4E0B\u53D1 EnvoyFilters \u5217\u8868"},{depth:3,slug:"2-configmapmgr-\u6784\u5EFA-envoyfilter-\u5217\u8868",text:"2. ConfigmapMgr \u6784\u5EFA EnvoyFilter \u5217\u8868"},{depth:3,slug:"3-tracingcontroller-\u6784\u5EFA-envoyfilters",text:"3. TracingController \u6784\u5EFA EnvoyFilters"},{depth:2,slug:"\u5982\u4F55\u6269\u5C55\u5168\u5C40\u914D\u7F6E",text:"\u5982\u4F55\u6269\u5C55\u5168\u5C40\u914D\u7F6E"},{depth:3,slug:"1-higressconfig-\u7ED3\u6784\u4F53\u6DFB\u52A0\u5BF9\u5E94\u7684\u6269\u5C55\u914D\u7F6E",text:"1. HigressConfig \u7ED3\u6784\u4F53\u6DFB\u52A0\u5BF9\u5E94\u7684\u6269\u5C55\u914D\u7F6E"},{depth:3,slug:"2-\u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C",text:"2. \u589E\u52A0\u6269\u5C55\u914D\u7F6E\u9ED8\u8BA4\u503C"},{depth:3,slug:"3-\u5B9E\u73B0-itemcontroller-interface",text:"3. \u5B9E\u73B0 ItemController interface"},{depth:3,slug:"4-\u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\u540C\u65F6\u6DFB\u52A0\u5230-itemcontrollers",text:"4. \u521D\u59CB\u5316\u6269\u5C55\u914D\u7F6E\uFF0C\u540C\u65F6\u6DFB\u52A0\u5230 ItemControllers"},{depth:2,slug:"\u53C2\u4E0E\u793E\u533A\u8D21\u732E",text:"\u53C2\u4E0E\u793E\u533A\u8D21\u732E"}]},s=o((C,u,x)=>{const{layout:h,...l}=i;return l.file=n,l.url=a,p`${v()}${g(e)}`})});export{s as Content,m as __tla,t as compiledContent,s as default,n as file,i as frontmatter,r as getHeadings,c as rawContent,a as url};
