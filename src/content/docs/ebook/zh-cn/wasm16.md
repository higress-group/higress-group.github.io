---
title: Higress 插件 Go SDK 与处理流程
keywords: [Higress]
---

# Higress 插件 Go SDK 与处理流程

本章开始介绍详细 Higress 插件开发 SDK 、插件开发流程和插件开发注意事项。

## 1 Higress 插件 Go SDK

Higress 插件 Go SDK 在 proxy-wasm-go-sdk 上封装了一层，简化插件开发和增强功能。其代码位置：https://github.com/alibaba/higress/tree/main/plugins/wasm-go/pkg ，代码文件结构如下：

```shell
tree
.
├── matcher
│   ├── rule_matcher.go
│   ├── rule_matcher_test.go
│   └── utils.go
└── wrapper
    ├── cluster_wrapper.go
    ├── cluster_wrapper_test.go
    ├── http_wrapper.go
    ├── log_wrapper.go
    ├── plugin_wrapper.go
    ├── redis_wrapper.go
    └── request_wrapper.go
    └── response_wrapper.go
```
Higress 插件 Go SDK 主要增强功能如下：
- matcher 包提供全局、路由、域名级别配置的解析功能。
- wrapper 包下 log_wrapper.go 封装和简化插件日志的输出功能。
- wrapper 包下 cluster_wrapper.go、redis_wrapper.go、http_wrapper.go 封装 Http 和 Redis Host Function Call。
- wrapper 包下 plugin_wrapper.go 封装 proxy-wasm-go-sdk 的 VMContext、PluginContext、HttpContext、插件配置解析功能。
- wrapper 包下 request_wrapper.go、response_wrapper.go 提供关于请求和响应公共方法。

本章主要集中介绍 plugin_wrapper.go 提供 VMContext、PluginContext、HttpContext、插件配置解析功能。

## 2 Higress 插件 Go SDK 开发

相对应于 proxy-wasm-go-sdk 中的 VMContext、PluginContext、HttpContext 3 个上下文， 在 Higress 插件 Go SDK 中是 CommonVmCtx、CommonPluginCtx、CommonHttpCtx 3 个支持泛型的 struct。 3 个 struct 的核心内容如下：

```golang
type CommonVmCtx[PluginConfig any] struct {
    // proxy-wasm-go-sdk DefaultVMContext 默认实现
    types.DefaultVMContext
    // 插件名称
    pluginName                  string
    // 插件日志工具
    log                         Log
    hasCustomConfig             bool
    // 插件配置解析函数
    parseConfig                 ParseConfigFunc[PluginConfig]
    // 插件路由、域名、服务级别配置解析函数
    parseRuleConfig             ParseRuleConfigFunc[PluginConfig]
    // 以下是自定义插件回调钩子函数
    onHttpRequestHeaders        onHttpHeadersFunc[PluginConfig]
    onHttpRequestBody           onHttpBodyFunc[PluginConfig]
    onHttpStreamingRequestBody  onHttpStreamingBodyFunc[PluginConfig]
    onHttpResponseHeaders       onHttpHeadersFunc[PluginConfig]
    onHttpResponseBody          onHttpBodyFunc[PluginConfig]
    onHttpStreamingResponseBody onHttpStreamingBodyFunc[PluginConfig]
    onHttpStreamDone            onHttpStreamDoneFunc[PluginConfig]
}

type CommonPluginCtx[PluginConfig any] struct {
    // proxy-wasm-go-sdk DefaultPluginContext 默认实现
    types.DefaultPluginContext
    // 解析后保存路由、域名、服务级别配置和全局插件配置
    matcher.RuleMatcher[PluginConfig]
    // 引用 CommonVmCtx
    vm          *CommonVmCtx[PluginConfig]
    // tickFunc 数组
    onTickFuncs []TickFuncEntry
}

type CommonHttpCtx[PluginConfig any] struct {
	// proxy-wasm-go-sdk DefaultHttpContext 默认实现
	types.DefaultHttpContext
	// 引用 CommonPluginCtx
	plugin                *CommonPluginCtx[PluginConfig]
	// 当前 Http 上下文下匹配插件配置，可能是路由、域名、服务级别配置或者全局配置
	config                *PluginConfig
	// 是否处理请求体
	needRequestBody       bool
	// 是否处理响应体
	needResponseBody      bool
	// 是否处理流式请求体
	streamingRequestBody  bool
	// 是否处理流式响应体
	streamingResponseBody bool
	// 非流式处理缓存请求体大小
	requestBodySize       int
	// 非流式处理缓存响应体大小
	responseBodySize      int
	// Http 上下文 ID
	contextID             uint32
	// 自定义插件设置自定义插件上下文
	userContext           map[string]interface{}
}
```

它们的关系如下图：
![img](https://img.alicdn.com/imgextra/i3/O1CN01nkPR171qsrwfUK0WW_!!6000000005552-2-tps-1640-600.png)

### 2.1 启动入口和 VM 上下文（CommonVmCtx）

```golang
func main() {
	wrapper.SetCtx(
		// 插件名称
		"hello-world",
		// 设置自定义函数解析插件配置，这个方法适合插件全局配置和路由、域名、服务级别配置内容规则是一样 
		wrapper.ParseConfigBy(parseConfig),
		// 设置自定义函数解析插件全局配置和路由、域名、服务级别配置，这个方法适合插件全局配置和路由、域名、服务级别配置内容规则不一样
		wrapper.ParseOverrideConfigBy(parseConfig, parseRuleConfig)
		// 设置自定义函数处理请求头
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// 设置自定义函数处理请求体
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// 设置自定义函数处理响应头
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// 设置自定义函数处理响应体
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// 设置自定义函数处理流式请求体
		wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// 设置自定义函数处理流式响应体
		wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
		// 设置自定义函数处理流式请求完成
		wrappper.ProcessStreamDoneBy(onHttpStreamDone)
	)
}
```
> 可以根据实际业务需要来选择设置回调钩子函数。

跟踪一下 wrapper.SetCtx 的实现： 
- 创建 CommonVmCtx 对象同时设置自定义插件回调钩子函数。
- 然后再调用 proxywasm.SetVMContext 设置 VMContext。

```golang
func SetCtx[PluginConfig any](pluginName string, setFuncs ...SetPluginFunc[PluginConfig]) {
	// 调用 proxywasm.SetVMContext 设置 VMContext
	proxywasm.SetVMContext(NewCommonVmCtx(pluginName, setFuncs...))
}

func NewCommonVmCtx[PluginConfig any](pluginName string, setFuncs ...SetPluginFunc[PluginConfig]) *CommonVmCtx[PluginConfig] {
	ctx := &CommonVmCtx[PluginConfig]{
		pluginName:      pluginName,
		log:             Log{pluginName},
		hasCustomConfig: true,
	}
	// CommonVmCtx 里设置自定义插件回调钩子函数
	for _, set := range setFuncs {
		set(ctx)
	}
	...
	return ctx
```

### 2.2 插件上下文（CommonPluginCtx）

#### 2.2.1 创建 CommonPluginCtx 对象
通过 CommonVmCtx 的 NewPluginContext 方法创建 CommonPluginCtx 对象， 设置 CommonPluginCtx 的 vm 引用。
```golang
func (ctx *CommonVmCtx[PluginConfig]) NewPluginContext(uint32) types.PluginContext {
	return &CommonPluginCtx[PluginConfig]{
		vm: ctx,
	}
}
```

#### 2.2.2 插件启动和插件配置解析

CommonPluginCtx 的 OnPluginStart 部分核心代码如下：
```golang
func (ctx *CommonPluginCtx[PluginConfig]) OnPluginStart(int) types.OnPluginStartStatus {
	// 调用 proxywasm.GetPluginConfiguration 获取插件配置
	data, err := proxywasm.GetPluginConfiguration()
	globalOnTickFuncs = nil
	...
	var jsonData gjson.Result
	// 插件配置转成 json
	jsonData = gjson.ParseBytes(data)
	
	// 设置 parseOverrideConfig
	var parseOverrideConfig func(gjson.Result, PluginConfig, *PluginConfig) error
	if ctx.vm.parseRuleConfig != nil {
		parseOverrideConfig = func(js gjson.Result, global PluginConfig, cfg *PluginConfig) error {
			// 解析插件路由、域名、服务级别插件配置
			return ctx.vm.parseRuleConfig(js, global, cfg, ctx.vm.log)
		}
	}
	...
	// 解析插件配置
	err = ctx.ParseRuleConfig(jsonData,
		func(js gjson.Result, cfg *PluginConfig) error {
			// 解析插件全局或者当 parseRuleConfig 没有设置时候同时解析路由、域名、服务级别插件配置
			return ctx.vm.parseConfig(js, cfg, ctx.vm.log)
		},
		parseOverrideConfig,
	)
	...
	if globalOnTickFuncs != nil {
		ctx.onTickFuncs = globalOnTickFuncs
		...
	}
	return types.OnPluginStartStatusOK
}
```

可以发现在解析插件配置过程中有两个回调钩子函数，parseConfig 和 parseRuleConfig。 
- parseConfig ：解析插件全局配置，如果 parseRuleConfig 没有设置，那么 parseConfig 会同时解析全局配置和路由、域名、服务级别配置。也就是说插件全局配置和路由、域名、服务级别配置规则是一样。
- parseRuleConfig: 解析路由、域名、服务级别插件配置。如果设置 parseRuleConfig，也就是说插件全局配置和路由、域名、服务级别配置规则是不同的。


> 这里我们不进一步分析插件解析过程，后续在插件生效原理章节从控制面和数据面详细分析插件全局、路由、域名、服务级别生效原理。

大部分情况下插件全局配置和路由、域名、服务级别配置规则是一样的，因此在定义插件时只需要调用 wrapper.ParseConfigBy(parseConfig) 来设置插件配置解析回调钩子函数。
而有些插件（如 [basic-auth](https://higress.cn/docs/latest/plugins/authentication/basic-auth/)）的全局配置和路由、域名、服务级别配置规则是不一样的。baisc-auth 插件配置 YAML 样例如下：
```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: cpp-basic-auth
  namespace: higress-system
spec:
  defaultConfig:
    consumers:
      - credential: admin:123456
        name: consumer1
      - credential: guest:abc
        name: consumer2
    global_auth: false
  defaultConfigDisable: false
  matchRules:
    - config:
        allow:
          - consumer1
      configDisable: false
      ingress:
        - higress-conformance-infra/wasmplugin-cpp-basic-auth
  url: file:///opt/plugins/wasm-cpp/extensions/basic-auth/plugin.wasm
```

可以看出 matchRule 下 config 配置内容和 defaultConfig 配置内容不一样。所以在开发插件的时候，需要同时设置 parseConfig 和 parseRuleConfig 两个回调钩子函数。
baisc-auth 部分核心代码如下：
```golang
func main() {
	wrapper.SetCtx(
		"basic-auth",
		// 要同时设置 parseConfig 和 parseRuleConfig 回调钩子函数
		// ParseOverrideConfigBy 函数的第一个参数接收 parseConfig 回调钩子函数，第二个参数接收 parseRuleConfig 回调钩子函数
		wrapper.ParseOverrideConfigBy(parseGlobalConfig, parseOverrideRuleConfig),
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// 自定义插件配置 
type BasicAuthConfig struct {
	// 插件全局配置内容
	globalAuth *bool `yaml:"global_auth"`
	consumers []Consumer `yaml:"consumers"`
	...
	// 插件路由、域名、服务级别配置内容
	allow []string `yaml:"allow"`
}

type Consumer struct {
	name string `yaml:"name"`
	credential string `yaml:"credential"`
}

// 解析插件全局配置回调钩子函数
func parseGlobalConfig(json gjson.Result, global *BasicAuthConfig, log wrapper.Log) error {
	log.Debug("global config")
	// 解析插件全局配置
	...
	consumers := json.Get("consumers")
	...
	globalAuth := json.Get("global_auth")
	...
	return nil
}

// 解析插件路由、域名、服务级别配置回调钩子函数
func parseOverrideRuleConfig(json gjson.Result, global BasicAuthConfig, config *BasicAuthConfig, log wrapper.Log) error {
	log.Debug("domain/route config")
	// 这里要注意要用全局配置内容复制到路由、域名、服务级别配置中，这样后续在 HttpContext 中可以获取当前 Http 请求下插件配置包括全局配置和路由、域名、服务级别配置
	*config = global
	// 解析插件路由、域名、服务级别配置
	allow := json.Get("allow")
	...
	for _, item := range allow.Array() {
		config.allow = append(config.allow, item.String())
	}
	...
	return nil
}
```
开发这种类型插件需要注意：
- 自定义插件配置 struct 要包含全局配置内容和路由、域名、服务级别配置内容。
- wrapper.ParseOverrideConfigBy 要同时设置 parseConfig 和 parseRuleConfig 回调钩子函数。
- 在 parseRuleConfig 回调钩子函数处理中，全局配置内容要复制到路由、域名、服务级别配置中，这样后续在 HttpContext 中可以获取当前 Http 请求下插件配置包括全局配置和路由、域名、服务级别配置内容。

### 2.3 HTTP 上下文（CommonHttpCtx）

#### 2.3.1 创建 CommonHttpCtx

CommonPluginCtx 的 NewHttpContext 部分核心代码如下：

```golang
func (ctx *CommonPluginCtx[PluginConfig]) NewHttpContext(contextID uint32) types.HttpContext {
	httpCtx := &CommonHttpCtx[PluginConfig]{
		plugin:      ctx,
		contextID:   contextID,
		userContext: map[string]interface{}{},
	}
	// 根据插件配置判断设置是否需要处理请求和响应的 body
	if ctx.vm.onHttpRequestBody != nil || ctx.vm.onHttpStreamingRequestBody != nil {
		httpCtx.needRequestBody = true
	}
	if ctx.vm.onHttpResponseBody != nil || ctx.vm.onHttpStreamingResponseBody != nil {
		httpCtx.needResponseBody = true
	}
	if ctx.vm.onHttpStreamingRequestBody != nil {
		httpCtx.streamingRequestBody = true
	}
	if ctx.vm.onHttpStreamingResponseBody != nil {
		httpCtx.streamingResponseBody = true
	}

	return httpCtx
}
```
#### 2.3.2 OnHttpRequestHeaders

OnHttpRequestHeaders 核心代码如下：
```golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpRequestHeaders(numHeaders int, endOfStream bool) types.Action {
	// 获取当前 HTTP 请求生效插件配置
	config, err := ctx.plugin.GetMatchConfig()
	...
	// 设置插件配置到 HttpContext
	ctx.config = config
	// 如果请求 content-type 是 octet-stream/grpc 或者定义 content-encoding，则不处理请求 body
	if IsBinaryRequestBody() {
		ctx.needRequestBody = false
	}
	...
	// 调用自定义插件 onHttpRequestHeaders 回调钩子函数
	return ctx.plugin.vm.onHttpRequestHeaders(ctx, *config, ctx.plugin.vm.log)
}
```
主要处理逻辑如下：
- 获取匹配当前 HTTP 请求插件配置，可能是路由、域名、服务级别配置或者全局配置。
- 设置插件配置到 HttpContext。
- 如果请求 content-type 是 octet-stream/grpc 或者定义 content-encoding，则不处理请求 body。
- 调用自定义插件 onHttpRequestHeaders 回调钩子函数。

关于插件配置可以看出， Higress 插件 Go SDK 封装如下：
- 在插件启动时候，解析插件路由、域名、服务级别插件配置和全局配置保存到 CommonPluginCtx 中。
- 在 onHttpRequestHeaders 阶段，根据当前 HTTP 上下文中路由、域名、服务等信息匹配插件配置，返回路由、域名、服务级别配置或者全局配置。然后把匹配到插件配置设置到 HttpContext 对象的 config 属性中，这样自定义插件的所有回调钩子函数就可以获取到这个配置。

#### 2.3.3 OnHttpRequestBody

OnHttpRequestBody 核心代码如下：
```golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpRequestBody(bodySize int, endOfStream bool) types.Action {
	...
	// 如果不需要处理请求 body，则直接返回，继续后续处理
	if !ctx.needRequestBody {
		return types.ActionContinue
	}
	// 先判断是否要需要进行流式处理，如果需要则调用自定义插件 onHttpStreamingRequestBody 回调钩子函数
	if ctx.plugin.vm.onHttpStreamingRequestBody != nil && ctx.streamingRequestBody {
		chunk, _ := proxywasm.GetHttpRequestBody(0, bodySize)
		// 调用自定义插件 onHttpStreamingRequestBody 回调钩子函数
		modifiedChunk := ctx.plugin.vm.onHttpStreamingRequestBody(ctx, *ctx.config, chunk, endOfStream, ctx.plugin.vm.log)
		err := proxywasm.ReplaceHttpRequestBody(modifiedChunk)
		...
		return types.ActionContinue
	}
	// 再判断是否要需要进行非流式处理，需要缓存请求 body，等读取整个请求 body 后调用自定义插件 onHttpRequestBody 回调钩子函数
	if ctx.plugin.vm.onHttpRequestBody != nil {
		ctx.requestBodySize += bodySize
		if !endOfStream {
			return types.ActionPause
		}
		body, err := proxywasm.GetHttpRequestBody(0, ctx.requestBodySize)
		...
		// 调用自定义插件 onHttpRequestBody 回调钩子函数
		return ctx.plugin.vm.onHttpRequestBody(ctx, *ctx.config, body, ctx.plugin.vm.log)
	}
	return types.ActionContinue
}
```

核心逻辑如下：
- 如果 ctx.needRequestBody 为 false 时，则直接返回，继续后续处理。
- 当 ctx.streamingRequestBody 为 true 时，同时自定义插件有 onHttpStreamingRequestBody 回调钩子函数，则调用自定义插件 onHttpStreamingRequestBody 回调钩子函数。
- 当自定义插件有 onHttpRequestBody 回调钩子函数，需要缓存请求 body，等读取整个请求 body 后调用自定义插件 onHttpRequestBody 回调钩子函数。

#### 2.3.4 OnHttpResponseHeaders

OnHttpResponseHeaders 核心代码如下：
```golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpResponseHeaders(numHeaders int, endOfStream bool) types.Action {
	...
	// To avoid unexpected operations, plugins do not read the binary content body
	if IsBinaryResponseBody() {
		ctx.needResponseBody = false
	}
	...
	return ctx.plugin.vm.onHttpResponseHeaders(ctx, *ctx.config, ctx.plugin.vm.log)
}

```
主要处理逻辑如下：
- 如果响应 content-type 是 octet-stream/grpc 或者定义 content-encoding，则不处理响应 body。
- 调用自定义插件 onHttpResponseHeaders 回调钩子函数。

#### 2.3.5 OnHttpResponseBody

OnHttpResponseBody 核心代码如下：
```golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpResponseBody(bodySize int, endOfStream bool) types.Action {
    ...
	// 如果不需要处理响应 body，则直接返回，继续后续处理
	if !ctx.needResponseBody {
		return types.ActionContinue
	}
	// 先判断是否要需要进行流式处理，如果需要则调用自定义插件 onHttpStreamingResponseBod 回调钩子函数
	if ctx.plugin.vm.onHttpStreamingResponseBody != nil && ctx.streamingResponseBody {
		chunk, _ := proxywasm.GetHttpResponseBody(0, bodySize)
		// 调用自定义插件 onHttpStreamingResponseBody 回调钩子函数
		modifiedChunk := ctx.plugin.vm.onHttpStreamingResponseBody(ctx, *ctx.config, chunk, endOfStream, ctx.plugin.vm.log)
		...
		return types.ActionContinue
	}
	// 再判断是否要需要进行非流式处理，需要缓存响应 body，等读取整个响应 body 后调用自定义插件 onHttpResponseBody 回调钩子函数
	if ctx.plugin.vm.onHttpResponseBody != nil {
		ctx.responseBodySize += bodySize
		if !endOfStream {
			return types.ActionPause
		}
		body, err := proxywasm.GetHttpResponseBody(0, ctx.responseBodySize)
		...
		// 调用自定义插件 onHttpResponseBody 回调钩子函数
		return ctx.plugin.vm.onHttpResponseBody(ctx, *ctx.config, body, ctx.plugin.vm.log)
	}
	return types.ActionContinue
}
```

核心逻辑如下：
- 当 ctx.needResponseBody 为 false 时，则直接返回，继续后续处理。
- 当 ctx.streamingResponseBody 为 true 时，同时自定义插件有 onHttpStreamingResponseBody 回调钩子函数，则调用自定义插件 onHttpStreamingResponseBody 回调钩子函数。
- 当自定义插件有 onHttpResponseBody 回调钩子函数，需要缓存响应 body，等读取整个响应 body 后调用自定义插件 onHttpResponseBody 回调钩子函数。

#### 2.3.6 OnHttpStreamDone

OnHttpStreamDone 核心代码如下：
```golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpStreamDone() {
	...
	ctx.plugin.vm.onHttpStreamDone(ctx, *ctx.config, ctx.plugin.vm.log)
}
```

OnHttpStreamDone 比较简单，自定义插件有 onHttpStreamDone 回调钩子函数，则调用自定义插件 onHttpStreamDone 回调钩子函数。

#### 2.3.7 CommonHttpCtx 方法

CommonHttpCtx 提供以下方法，自定义插件可以调用，其代码和注释如下：
```golang
// 设置自定义上下文，这个上下文可以在自定义插件所有回调钩子函数中可以获取
func (ctx *CommonHttpCtx[PluginConfig]) SetContext(key string, value interface{}) {
	ctx.userContext[key] = value
}
// 获取自定义上下文，这个上下文可以在自定义插件所有回调钩子函数中可以获取
func (ctx *CommonHttpCtx[PluginConfig]) GetContext(key string) interface{} {
	return ctx.userContext[key]
}
// 获取 bool 类型自定义上下文
func (ctx *CommonHttpCtx[PluginConfig]) GetBoolContext(key string, defaultValue bool) bool {
	if b, ok := ctx.userContext[key].(bool); ok {
		return b
	}
	return defaultValue
}
// 获取 string 类型自定义上下文
func (ctx *CommonHttpCtx[PluginConfig]) GetStringContext(key, defaultValue string) string {
	if s, ok := ctx.userContext[key].(string); ok {
		return s
	}
	return defaultValue
}
// 获取请求 scheme
func (ctx *CommonHttpCtx[PluginConfig]) Scheme() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestScheme()
}
// 获取请求 host
func (ctx *CommonHttpCtx[PluginConfig]) Host() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestHost()
}
// 获取请求 path
func (ctx *CommonHttpCtx[PluginConfig]) Path() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestPath()
}
// 获取请求 method
func (ctx *CommonHttpCtx[PluginConfig]) Method() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestMethod()
}

// 调用这个方法可以禁止读取请求 body 和处理。
// 比如在 onHttpRequestHeaders 回调钩子函数中根据某些条件时调用，可以跳过后续的请求 body 读取和处理
func (ctx *CommonHttpCtx[PluginConfig]) DontReadRequestBody() {
	ctx.needRequestBody = false
}

// 调用这个方法禁止读取响应 body， 
// 比如在 onHttpResponseHeaders 回调钩子函数中根据某些条件时调用，可以跳过后续的响应 body 读取和处理
func (ctx *CommonHttpCtx[PluginConfig]) DontReadResponseBody() {
	ctx.needResponseBody = false
}
// 调用这个方法禁止请求流式处理
// 比如在 onHttpRequestHeaders 回调钩子函数中根据某些条件时调用，跳过后续的 onHttpStreamingRequestBody 流式处理, 转成 onHttpRequestBody 处理
func (ctx *CommonHttpCtx[PluginConfig]) BufferRequestBody() {
	ctx.streamingRequestBody = false
}

// 调用这个方法禁止响应流式处理
// 比如在 onHttpResponseHeaders 回调钩子函数中根据某些条件时调用，跳过后续的 onHttpStreamingResponseBody 流式处理, 转成 onHttpResponseBody 处理
func (ctx *CommonHttpCtx[PluginConfig]) BufferResponseBody() {
	ctx.streamingResponseBody = false
}

// 调用这个方法可以禁止重新计算路由，Envoy 默认在 Http 头发生变更时会重新计算路由，调用这个方法，可以禁止重新计算路由。
// 比如在 onHttpRequestHeaders 回调钩子函数中根据某些条件时调用这个方法，可以禁止重新计算路由。
// 关于 DisableReroute 使用场景可以参考 Higress 官方提供 [ai-proxy 插件](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-proxy/main.go#L76)
func (ctx *CommonHttpCtx[PluginConfig]) DisableReroute() {
	_ = proxywasm.SetProperty([]string{"clear_route_cache"}, []byte("off"))
}
// 设置请求 body buffer limit 
// 关于 DisableReroute 使用场景可以参考 Higress 官方提供 [ai-proxy 插件](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-proxy/main.go#L81)
func (ctx *CommonHttpCtx[PluginConfig]) SetRequestBodyBufferLimit(size uint32) {
  ctx.plugin.vm.log.Infof("SetRequestBodyBufferLimit: %d", size)
  _ = proxywasm.SetProperty([]string{"set_decoder_buffer_limit"}, []byte(strconv.Itoa(int(size))))
}
// 设置响应 body buffer limit
func (ctx *CommonHttpCtx[PluginConfig]) SetResponseBodyBufferLimit(size uint32) {
  ctx.plugin.vm.log.Infof("SetResponseBodyBufferLimit: %d", size)
  _ = proxywasm.SetProperty([]string{"set_encoder_buffer_limit"}, []byte(strconv.Itoa(int(size))))
}
```

核心内容如下：
- 在 onHttpRequestHeaders 阶段：
  - 调用 DontReadRequestBody 方法，可以跳过读取请求 body 和处理。
  - 调用 BufferRequestBody 方法，可以跳过请求 onHttpStreamingRequestBody 流式处理，转成 onHttpRequestBody 处理。
  - 调用 DisableReroute 方法，可以禁止重新计算路由。
- 在 onHttpResponseHeaders 阶段：
  - 调用 DontReadResponseBody 方法，可以跳过读取响应 body 和处理。
  - 调用 BufferResponseBody 方法，可以跳过响应 onHttpStreamingResponseBody 流式处理，转成 onHttpResponseBody 处理。
- SetContext 和 GetContext 方法，可以设置和获取自定义上下文，在自定义插件所有回调钩子函数中可以使用。
- SetRequestBodyBufferLimit 和 SetResponseBodyBufferLimit 方法，可以设置请求 body buffer limit 和响应 body buffer limit。

### 2.4 Types.Action

proxy wasm 社区目前提供的 ABI 比较简单，只封装了两种状态。

在自定义插件中 onHttpRequestHeaders、onHttpRequestBody、onHttpResponseHeaders、onHttpResponseBody 返回值类型为 types.Action。通过 types.Action 枚举值来控制插件的运行流程，常见的返回值如下： 

1. types.ActionContinue：继续后续处理，比如继续读取请求 body，或者继续读取响应 body。

2. types.ActionPause： 暂停后续处理，比如在 onHttpRequestHeaders 通过 Http 或者 Redis 调用外部服务获取认证信息，在调用外部服务回调钩子函数中调用 proxywasm.ResumeHttpRequest() 来恢复后续处理 或者调用 proxywasm.SendHttpResponseWithDetail() 来返回响应。


#### 2.4.1 使用 Higress 实现的能力更丰富的 WASM ABI

1. Higress 需要基于特定的 Proxy Wasm ABI 来实现下面更丰富的 Header 状态管理， TinyGo 本地构建命令如下：
```shell
tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100' -o ./build/plugin.wasm main.go
```
2. 使用 Makefile 编译时需要设置 `EXTRA_TAGS=proxy_wasm_version_0_2_100`

#### 2.4.2 Header 状态码

1. HeaderContinue:

表示当前 filter 已经处理完毕，可以继续交给下一个 filter 处理。 types.ActionContinue 对应就是这个状态。

2. HeaderStopIteration:

表示 header 还不能继续交给下一个 filter 来处理。 但是并不停止从连接读数据，继续触发 body data 的处理。 这样可以在 body data 处理阶段可以更新 Http 请求头内容。 如果 body data 要交给下一个 filter 处理， 这时 header 是也会被一起交给下一个 filter 处理。

但是要注意的是，如果后续不会有 body 触发 data 的处理，那么当前请求或响应就会一直被卡住。所以需要在 header 阶段通过 content-type 或者 content-length 来判断是否存在 body，没有 body 时不应该返回这个状态码。

3. HeaderContinueAndEndStream:

表示 header 可以继续交给下一个 filter 处理，但是下一个 filter 收到的 end_stream = false，也就是标记请求还未结束。以便当前 filter 再增加 body。

4. HeaderStopAllIterationAndBuffer:

停止所有迭代，表示 header 不能继续交给下一个 filter，并且当前 filter 也不能收到 body data。 并对当前过滤器及后续过滤器的头部、数据和尾部进行缓冲。如果缓存大小超过了 buffer limit，在请求阶段就直接返回 413，响应阶段就直接返回 500。
同时需要调用 proxywasm.ResumeHttpRequest()、 proxywasm.ResumeHttpResponse() 或者 proxywasm.SendHttpResponseWithDetail()  函数来恢复后续处理。

5. HeaderStopAllIterationAndWatermark:

同上，区别是，当缓存超过了 buffer limit 会触发流控，也就是暂停从连接上读数据。 types.ActionPause 实际上对应就是这个状态。

> 关于 types.HeaderStopIteration 和 HeaderStopAllIterationAndWatermark 的使用场景可以参考 Higress 官方提供 [ai-transformer 插件](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99) 和  [ai-quota 插件](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179) 。

#### 2.4.3 Data 状态码

1. DataContinue:

和 header 类似，表示当前 filter 已经处理完毕，可以继续交给下一个 filter 处理。 如果 header 之前返回的是 HeaderStopIteration，且尚未交给下一个 filter 处理，那么此时 header 和 data 也会被交给下一个 filter 处理。types.ActionContinue 对应就是这个状态。

2. DataStopIterationAndBuffer:

表示当前 data 不能继续交给下一个 filter 处理，并且将当前 data 缓存起来。 与 header 类似，如果达到 buffer limit，在请求阶段就直接返回 413，响应阶段就直接返回 500。
同时需要调用 proxywasm.ResumeHttpRequest()、 proxywasm.ResumeHttpResponse() 或者 proxywasm.SendHttpResponseWithDetail()  函数来恢复后续处理。
types.ActionPause 实际上对应就是这个状态。

3. DataStopIterationAndWatermark:

同上，只是达到 buffer limit 会触发流控。

4. DataStopIterationNoBuffer:

表示当前 data 不能继续交给下一个 filter，但是不缓存当前 data。


### 2.5 Envoy 请求缓存区限制

当自定义插件使用 `onHttpRequestBody` 非流式传输，当请求超过 `downstream` 缓存区限制(默认是 32k)。Envoy 会给用户返回 413， 同时报 `request_payload_too_large` 错误。
比如在 AI 长上下文中场景中可能会碰到这个问题，这个问题可以通过参考 [全局配置说明](https://higress.cn/docs/latest/user/configmap/) 调整 Downstream 配置项 `connectionBufferLimits` 解决， 或者使用 `SetRequestBodyBufferLimit` 方法设置请求 body buffer limit 解决。 关于如何使用 `SetRequestBodyBufferLimit` 可以参考 Higress 官方提供 [ai-proxy 插件](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-proxy/main.go#L81) 的实现。

相应的，如果使用`onHttpResponseBody` 非流式传输，如果响应 body 超过`downstream` 缓存区限制，也会导致传输失败。例如使用 curl 时可能出现报错 `curl: (18) transfer closed with outstanding read data remaining`。处理方式也是类似的，可以通过调整 Downstream 配置项 `connectionBufferLimits` 解决， 或者使用 `SetResponseBodyBufferLimit` 方法设置响应 body buffer limit 解决。

当然，我们还是更建议使用流式处理，或者在 header 阶段判断出不需要处理 body 时，直接调用 `ctx.DontReadRequestBody` 或者 `ctx.DontReadResponseBody`

## 3 Envoy 属性（Attributes）

属性是 Envoy 的一个特性，允许用户在插件中设置和获取这些属性，可以通过 `proxywasm.GetProperty` 和 `proxywasm.SetProperty` 方法获取和设置。
Envoy 预定义属性包括请求属性、响应属性、连接属性、Upstream 属性、Wasm 属性、和 Metadata 等属性， 具体可以参考 [Envoy 属性](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/advanced/attributes)。
同时用户也可以设置自定义属性，这些属性可以在插件链中不同插件共享。

## 4 自定义属性（UserAttributes）

自定义属性是 SDK 提供的一个特性，用于帮助用户在日志或链路追踪中快速添加自定义的属性，可以通过 `ctx.GetUserAttribute` 和 `ctx.SetUserAttribute` 方法获取和设置。

如果希望写入日志，可以调用 `ctx.WriteUserAttributeToLog` 方法，并且修改 log_format 使 Envoy 打印出自定义的日志字段，例如将 log_format 设置为 `{\"custom_log\":\"%FILTER_STATE(wasm.custom_log:PLAIN)%\"}`，此时 Envoy 会将所有自定义属性合并为一个序列化后的 json 字符串写入 custom_log 日志字段。

如果希望写入链路追踪，可以调用 `ctx.WriteUserAttributeToTrace` 方法，此时会将所有的 UserAttribute 依次设置为 span 中的 attribute.


## 参考
- [1] [Envoy 开发入门：搞懂 http filter 状态码](https://uncledou.site/2022/envoy-filter-status/)


