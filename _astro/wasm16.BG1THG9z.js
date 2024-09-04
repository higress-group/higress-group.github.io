const t="ebook/en/wasm16.md",e="docs",o="ebook/en/wasm16",n=`
# Higress \u63D2\u4EF6 Go SDK \u4E0E\u5904\u7406\u6D41\u7A0B

\u672C\u7AE0\u5F00\u59CB\u4ECB\u7ECD\u8BE6\u7EC6 Higress \u63D2\u4EF6\u5F00\u53D1 SDK \u3001\u63D2\u4EF6\u5F00\u53D1\u6D41\u7A0B\u548C\u63D2\u4EF6\u5F00\u53D1\u6CE8\u610F\u4E8B\u9879\u3002

## 1 Higress \u63D2\u4EF6 Go SDK

Higress \u63D2\u4EF6 Go SDK \u5728 proxy-wasm-go-sdk \u4E0A\u5C01\u88C5\u4E86\u4E00\u5C42\uFF0C\u7B80\u5316\u63D2\u4EF6\u5F00\u53D1\u548C\u589E\u5F3A\u529F\u80FD\u3002\u5176\u4EE3\u7801\u4F4D\u7F6E\uFF1Ahttps://github.com/alibaba/higress/tree/main/plugins/wasm-go/pkg \uFF0C\u4EE3\u7801\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A

\`\`\`shell
tree
.
\u251C\u2500\u2500 matcher
\u2502\xA0\xA0 \u251C\u2500\u2500 rule_matcher.go
\u2502\xA0\xA0 \u251C\u2500\u2500 rule_matcher_test.go
\u2502\xA0\xA0 \u2514\u2500\u2500 utils.go
\u2514\u2500\u2500 wrapper
    \u251C\u2500\u2500 cluster_wrapper.go
    \u251C\u2500\u2500 cluster_wrapper_test.go
    \u251C\u2500\u2500 http_wrapper.go
    \u251C\u2500\u2500 log_wrapper.go
    \u251C\u2500\u2500 plugin_wrapper.go
    \u251C\u2500\u2500 redis_wrapper.go
    \u2514\u2500\u2500 request_wrapper.go
    \u2514\u2500\u2500 response_wrapper.go
\`\`\`
Higress \u63D2\u4EF6 Go SDK \u4E3B\u8981\u589E\u5F3A\u529F\u80FD\u5982\u4E0B\uFF1A
- matcher \u5305\u63D0\u4F9B\u5168\u5C40\u3001\u8DEF\u7531\u3001\u57DF\u540D\u7EA7\u522B\u914D\u7F6E\u7684\u89E3\u6790\u529F\u80FD\u3002
- wrapper \u5305\u4E0B log_wrapper.go \u5C01\u88C5\u548C\u7B80\u5316\u63D2\u4EF6\u65E5\u5FD7\u7684\u8F93\u51FA\u529F\u80FD\u3002
- wrapper \u5305\u4E0B cluster_wrapper.go\u3001redis_wrapper.go\u3001http_wrapper.go \u5C01\u88C5 Http \u548C Redis Host Function Call\u3002
- wrapper \u5305\u4E0B plugin_wrapper.go \u5C01\u88C5 proxy-wasm-go-sdk \u7684 VMContext\u3001PluginContext\u3001HttpContext\u3001\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u529F\u80FD\u3002
- wrapper \u5305\u4E0B request_wrapper.go\u3001response_wrapper.go \u63D0\u4F9B\u5173\u4E8E\u8BF7\u6C42\u548C\u54CD\u5E94\u516C\u5171\u65B9\u6CD5\u3002

\u672C\u7AE0\u4E3B\u8981\u96C6\u4E2D\u4ECB\u7ECD plugin_wrapper.go \u63D0\u4F9B VMContext\u3001PluginContext\u3001HttpContext\u3001\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u529F\u80FD\u3002

## 2 Higress \u63D2\u4EF6 Go SDK \u5F00\u53D1

\u76F8\u5BF9\u5E94\u4E8E proxy-wasm-go-sdk \u4E2D\u7684 VMContext\u3001PluginContext\u3001HttpContext 3 \u4E2A\u4E0A\u4E0B\u6587\uFF0C \u5728 Higress \u63D2\u4EF6 Go SDK \u4E2D\u662F CommonVmCtx\u3001CommonPluginCtx\u3001CommonHttpCtx 3 \u4E2A\u652F\u6301\u6CDB\u578B\u7684 struct\u3002 3 \u4E2A struct \u7684\u6838\u5FC3\u5185\u5BB9\u5982\u4E0B\uFF1A

\`\`\`golang
type CommonVmCtx[PluginConfig any] struct {
    // proxy-wasm-go-sdk DefaultVMContext \u9ED8\u8BA4\u5B9E\u73B0
    types.DefaultVMContext
    // \u63D2\u4EF6\u540D\u79F0
    pluginName                  string
    // \u63D2\u4EF6\u65E5\u5FD7\u5DE5\u5177
    log                         Log
    hasCustomConfig             bool
    // \u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u51FD\u6570
    parseConfig                 ParseConfigFunc[PluginConfig]
    // \u63D2\u4EF6\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u89E3\u6790\u51FD\u6570
    parseRuleConfig             ParseRuleConfigFunc[PluginConfig]
    // \u4EE5\u4E0B\u662F\u81EA\u5B9A\u4E49\u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570
    onHttpRequestHeaders        onHttpHeadersFunc[PluginConfig]
    onHttpRequestBody           onHttpBodyFunc[PluginConfig]
    onHttpStreamingRequestBody  onHttpStreamingBodyFunc[PluginConfig]
    onHttpResponseHeaders       onHttpHeadersFunc[PluginConfig]
    onHttpResponseBody          onHttpBodyFunc[PluginConfig]
    onHttpStreamingResponseBody onHttpStreamingBodyFunc[PluginConfig]
    onHttpStreamDone            onHttpStreamDoneFunc[PluginConfig]
}

type CommonPluginCtx[PluginConfig any] struct {
    // proxy-wasm-go-sdk DefaultPluginContext \u9ED8\u8BA4\u5B9E\u73B0
    types.DefaultPluginContext
    // \u89E3\u6790\u540E\u4FDD\u5B58\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u548C\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E
    matcher.RuleMatcher[PluginConfig]
    // \u5F15\u7528 CommonVmCtx
    vm          *CommonVmCtx[PluginConfig]
    // tickFunc \u6570\u7EC4
    onTickFuncs []TickFuncEntry
}

type CommonHttpCtx[PluginConfig any] struct {
	// proxy-wasm-go-sdk DefaultHttpContext \u9ED8\u8BA4\u5B9E\u73B0
	types.DefaultHttpContext
	// \u5F15\u7528 CommonPluginCtx
	plugin                *CommonPluginCtx[PluginConfig]
	// \u5F53\u524D Http \u4E0A\u4E0B\u6587\u4E0B\u5339\u914D\u63D2\u4EF6\u914D\u7F6E\uFF0C\u53EF\u80FD\u662F\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u6216\u8005\u5168\u5C40\u914D\u7F6E
	config                *PluginConfig
	// \u662F\u5426\u5904\u7406\u8BF7\u6C42\u4F53
	needRequestBody       bool
	// \u662F\u5426\u5904\u7406\u54CD\u5E94\u4F53
	needResponseBody      bool
	// \u662F\u5426\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53
	streamingRequestBody  bool
	// \u662F\u5426\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53
	streamingResponseBody bool
	// \u975E\u6D41\u5F0F\u5904\u7406\u7F13\u5B58\u8BF7\u6C42\u4F53\u5927\u5C0F
	requestBodySize       int
	// \u975E\u6D41\u5F0F\u5904\u7406\u7F13\u5B58\u54CD\u5E94\u4F53\u5927\u5C0F
	responseBodySize      int
	// Http \u4E0A\u4E0B\u6587 ID
	contextID             uint32
	// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u63D2\u4EF6\u4E0A\u4E0B\u6587
	userContext           map[string]interface{}
}
\`\`\`

\u5B83\u4EEC\u7684\u5173\u7CFB\u5982\u4E0B\u56FE\uFF1A
![img](https://img.alicdn.com/imgextra/i3/O1CN01nkPR171qsrwfUK0WW_!!6000000005552-2-tps-1640-600.png)

### 2.1 \u542F\u52A8\u5165\u53E3\u548C VM \u4E0A\u4E0B\u6587\uFF08CommonVmCtx\uFF09

\`\`\`golang
func main() {
	wrapper.SetCtx(
		// \u63D2\u4EF6\u540D\u79F0
		"hello-world",
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u9002\u5408\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u5185\u5BB9\u89C4\u5219\u662F\u4E00\u6837 
		wrapper.ParseConfigBy(parseConfig),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u9002\u5408\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u5185\u5BB9\u89C4\u5219\u4E0D\u4E00\u6837
		wrapper.ParseOverrideConfigBy(parseConfig, parseRuleConfig)
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u4F53
		wrapper.ProcessRequestBodyBy(onHttpRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u5934
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u54CD\u5E94\u4F53
		wrapper.ProcessResponseBodyBy(onHttpResponseBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u4F53
		wrapper.ProcessStreamingRequestBodyBy(onHttpStreamingRequestBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u54CD\u5E94\u4F53
		wrapper.ProcessStreamingResponseBodyBy(onHttpStreamingResponseBody),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u6D41\u5F0F\u8BF7\u6C42\u5B8C\u6210
		wrappper.ProcessStreamDoneBy(onHttpStreamDone)
	)
}
\`\`\`
> \u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u4E1A\u52A1\u9700\u8981\u6765\u9009\u62E9\u8BBE\u7F6E\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002

\u8DDF\u8E2A\u4E00\u4E0B wrapper.SetCtx \u7684\u5B9E\u73B0\uFF1A 
- \u521B\u5EFA CommonVmCtx \u5BF9\u8C61\u540C\u65F6\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
- \u7136\u540E\u518D\u8C03\u7528 proxywasm.SetVMContext \u8BBE\u7F6E VMContext\u3002

\`\`\`golang
func SetCtx[PluginConfig any](pluginName string, setFuncs ...SetPluginFunc[PluginConfig]) {
	// \u8C03\u7528 proxywasm.SetVMContext \u8BBE\u7F6E VMContext
	proxywasm.SetVMContext(NewCommonVmCtx(pluginName, setFuncs...))
}

func NewCommonVmCtx[PluginConfig any](pluginName string, setFuncs ...SetPluginFunc[PluginConfig]) *CommonVmCtx[PluginConfig] {
	ctx := &CommonVmCtx[PluginConfig]{
		pluginName:      pluginName,
		log:             Log{pluginName},
		hasCustomConfig: true,
	}
	// CommonVmCtx \u91CC\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u63D2\u4EF6\u56DE\u8C03\u94A9\u5B50\u51FD\u6570
	for _, set := range setFuncs {
		set(ctx)
	}
	...
	return ctx
\`\`\`

### 2.2 \u63D2\u4EF6\u4E0A\u4E0B\u6587\uFF08CommonPluginCtx\uFF09

#### 2.2.1 \u521B\u5EFA CommonPluginCtx \u5BF9\u8C61
\u901A\u8FC7 CommonVmCtx \u7684 NewPluginContext \u65B9\u6CD5\u521B\u5EFA CommonPluginCtx \u5BF9\u8C61\uFF0C \u8BBE\u7F6E CommonPluginCtx \u7684 vm \u5F15\u7528\u3002
\`\`\`golang
func (ctx *CommonVmCtx[PluginConfig]) NewPluginContext(uint32) types.PluginContext {
	return &CommonPluginCtx[PluginConfig]{
		vm: ctx,
	}
}
\`\`\`

#### 2.2.2 \u63D2\u4EF6\u542F\u52A8\u548C\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790

CommonPluginCtx \u7684 OnPluginStart \u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
func (ctx *CommonPluginCtx[PluginConfig]) OnPluginStart(int) types.OnPluginStartStatus {
	// \u8C03\u7528 proxywasm.GetPluginConfiguration \u83B7\u53D6\u63D2\u4EF6\u914D\u7F6E
	data, err := proxywasm.GetPluginConfiguration()
	globalOnTickFuncs = nil
	...
	var jsonData gjson.Result
	// \u63D2\u4EF6\u914D\u7F6E\u8F6C\u6210 json
	jsonData = gjson.ParseBytes(data)
	
	// \u8BBE\u7F6E parseOverrideConfig
	var parseOverrideConfig func(gjson.Result, PluginConfig, *PluginConfig) error
	if ctx.vm.parseRuleConfig != nil {
		parseOverrideConfig = func(js gjson.Result, global PluginConfig, cfg *PluginConfig) error {
			// \u89E3\u6790\u63D2\u4EF6\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E
			return ctx.vm.parseRuleConfig(js, global, cfg, ctx.vm.log)
		}
	}
	...
	// \u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
	err = ctx.ParseRuleConfig(jsonData,
		func(js gjson.Result, cfg *PluginConfig) error {
			// \u89E3\u6790\u63D2\u4EF6\u5168\u5C40\u6216\u8005\u5F53 parseRuleConfig \u6CA1\u6709\u8BBE\u7F6E\u65F6\u5019\u540C\u65F6\u89E3\u6790\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E
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
\`\`\`

\u53EF\u4EE5\u53D1\u73B0\u5728\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\u8FC7\u7A0B\u4E2D\u6709\u4E24\u4E2A\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\uFF0CparseConfig \u548C parseRuleConfig\u3002 
- parseConfig \uFF1A\u89E3\u6790\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\uFF0C\u5982\u679C parseRuleConfig \u6CA1\u6709\u8BBE\u7F6E\uFF0C\u90A3\u4E48 parseConfig \u4F1A\u540C\u65F6\u89E3\u6790\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u3002\u4E5F\u5C31\u662F\u8BF4\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u89C4\u5219\u662F\u4E00\u6837\u3002
- parseRuleConfig: \u89E3\u6790\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E\u3002\u5982\u679C\u8BBE\u7F6E parseRuleConfig\uFF0C\u4E5F\u5C31\u662F\u8BF4\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u89C4\u5219\u662F\u4E0D\u540C\u7684\u3002


> \u8FD9\u91CC\u6211\u4EEC\u4E0D\u8FDB\u4E00\u6B65\u5206\u6790\u63D2\u4EF6\u89E3\u6790\u8FC7\u7A0B\uFF0C\u540E\u7EED\u5728\u63D2\u4EF6\u751F\u6548\u539F\u7406\u7AE0\u8282\u4ECE\u63A7\u5236\u9762\u548C\u6570\u636E\u9762\u8BE6\u7EC6\u5206\u6790\u63D2\u4EF6\u5168\u5C40\u3001\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u751F\u6548\u539F\u7406\u3002

\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u89C4\u5219\u662F\u4E00\u6837\u7684\uFF0C\u56E0\u6B64\u5728\u5B9A\u4E49\u63D2\u4EF6\u65F6\u53EA\u9700\u8981\u8C03\u7528 wrapper.ParseConfigBy(parseConfig) \u6765\u8BBE\u7F6E\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
\u800C\u6709\u4E9B\u63D2\u4EF6\uFF08\u5982 [basic-auth](https://higress.io/docs/latest/plugins/authentication/basic-auth/)\uFF09\u7684\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u89C4\u5219\u662F\u4E0D\u4E00\u6837\u7684\u3002baisc-auth \u63D2\u4EF6\u914D\u7F6E YAML \u6837\u4F8B\u5982\u4E0B\uFF1A
\`\`\`yaml
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
\`\`\`

\u53EF\u4EE5\u770B\u51FA matchRule \u4E0B config \u914D\u7F6E\u5185\u5BB9\u548C defaultConfig \u914D\u7F6E\u5185\u5BB9\u4E0D\u4E00\u6837\u3002\u6240\u4EE5\u5728\u5F00\u53D1\u63D2\u4EF6\u7684\u65F6\u5019\uFF0C\u9700\u8981\u540C\u65F6\u8BBE\u7F6E parseConfig \u548C parseRuleConfig \u4E24\u4E2A\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
baisc-auth \u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
func main() {
	wrapper.SetCtx(
		"basic-auth",
		// \u8981\u540C\u65F6\u8BBE\u7F6E parseConfig \u548C parseRuleConfig \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
		// ParseOverrideConfigBy \u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u63A5\u6536 parseConfig \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u63A5\u6536 parseRuleConfig \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
		wrapper.ParseOverrideConfigBy(parseGlobalConfig, parseOverrideRuleConfig),
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E 
type BasicAuthConfig struct {
	// \u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u5185\u5BB9
	globalAuth *bool \`yaml:"global_auth"\`
	consumers []Consumer \`yaml:"consumers"\`
	...
	// \u63D2\u4EF6\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u5185\u5BB9
	allow []string \`yaml:"allow"\`
}

type Consumer struct {
	name string \`yaml:"name"\`
	credential string \`yaml:"credential"\`
}

// \u89E3\u6790\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E\u56DE\u8C03\u94A9\u5B50\u51FD\u6570
func parseGlobalConfig(json gjson.Result, global *BasicAuthConfig, log wrapper.Log) error {
	log.Debug("global config")
	// \u89E3\u6790\u63D2\u4EF6\u5168\u5C40\u914D\u7F6E
	...
	consumers := json.Get("consumers")
	...
	globalAuth := json.Get("global_auth")
	...
	return nil
}

// \u89E3\u6790\u63D2\u4EF6\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u56DE\u8C03\u94A9\u5B50\u51FD\u6570
func parseOverrideRuleConfig(json gjson.Result, global BasicAuthConfig, config *BasicAuthConfig, log wrapper.Log) error {
	log.Debug("domain/route config")
	// \u8FD9\u91CC\u8981\u6CE8\u610F\u8981\u7528\u5168\u5C40\u914D\u7F6E\u5185\u5BB9\u590D\u5236\u5230\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u4E2D\uFF0C\u8FD9\u6837\u540E\u7EED\u5728 HttpContext \u4E2D\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D Http \u8BF7\u6C42\u4E0B\u63D2\u4EF6\u914D\u7F6E\u5305\u62EC\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E
	*config = global
	// \u89E3\u6790\u63D2\u4EF6\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E
	allow := json.Get("allow")
	...
	for _, item := range allow.Array() {
		config.allow = append(config.allow, item.String())
	}
	...
	return nil
}
\`\`\`
\u5F00\u53D1\u8FD9\u79CD\u7C7B\u578B\u63D2\u4EF6\u9700\u8981\u6CE8\u610F\uFF1A
- \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E struct \u8981\u5305\u542B\u5168\u5C40\u914D\u7F6E\u5185\u5BB9\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u5185\u5BB9\u3002
- wrapper.ParseOverrideConfigBy \u8981\u540C\u65F6\u8BBE\u7F6E parseConfig \u548C parseRuleConfig \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
- \u5728 parseRuleConfig \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u5904\u7406\u4E2D\uFF0C\u5168\u5C40\u914D\u7F6E\u5185\u5BB9\u8981\u590D\u5236\u5230\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u4E2D\uFF0C\u8FD9\u6837\u540E\u7EED\u5728 HttpContext \u4E2D\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D Http \u8BF7\u6C42\u4E0B\u63D2\u4EF6\u914D\u7F6E\u5305\u62EC\u5168\u5C40\u914D\u7F6E\u548C\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u5185\u5BB9\u3002

### 2.3 HTTP \u4E0A\u4E0B\u6587\uFF08CommonHttpCtx\uFF09

#### 2.3.1 \u521B\u5EFA CommonHttpCtx

CommonPluginCtx \u7684 NewHttpContext \u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A

\`\`\`golang
func (ctx *CommonPluginCtx[PluginConfig]) NewHttpContext(contextID uint32) types.HttpContext {
	httpCtx := &CommonHttpCtx[PluginConfig]{
		plugin:      ctx,
		contextID:   contextID,
		userContext: map[string]interface{}{},
	}
	// \u6839\u636E\u63D2\u4EF6\u914D\u7F6E\u5224\u65AD\u8BBE\u7F6E\u662F\u5426\u9700\u8981\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u7684 body
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
\`\`\`
#### 2.3.2 OnHttpRequestHeaders

OnHttpRequestHeaders \u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpRequestHeaders(numHeaders int, endOfStream bool) types.Action {
	// \u83B7\u53D6\u5F53\u524D HTTP \u8BF7\u6C42\u751F\u6548\u63D2\u4EF6\u914D\u7F6E
	config, err := ctx.plugin.GetMatchConfig()
	...
	// \u8BBE\u7F6E\u63D2\u4EF6\u914D\u7F6E\u5230 HttpContext
	ctx.config = config
	// \u5982\u679C\u8BF7\u6C42 content-type \u662F octet-stream/grpc \u6216\u8005\u5B9A\u4E49 content-encoding\uFF0C\u5219\u4E0D\u5904\u7406\u8BF7\u6C42 body
	if IsBinaryRequestBody() {
		ctx.needRequestBody = false
	}
	...
	// \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpRequestHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
	return ctx.plugin.vm.onHttpRequestHeaders(ctx, *config, ctx.plugin.vm.log)
}
\`\`\`
\u4E3B\u8981\u5904\u7406\u903B\u8F91\u5982\u4E0B\uFF1A
- \u83B7\u53D6\u5339\u914D\u5F53\u524D HTTP \u8BF7\u6C42\u63D2\u4EF6\u914D\u7F6E\uFF0C\u53EF\u80FD\u662F\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u6216\u8005\u5168\u5C40\u914D\u7F6E\u3002
- \u8BBE\u7F6E\u63D2\u4EF6\u914D\u7F6E\u5230 HttpContext\u3002
- \u5982\u679C\u8BF7\u6C42 content-type \u662F octet-stream/grpc \u6216\u8005\u5B9A\u4E49 content-encoding\uFF0C\u5219\u4E0D\u5904\u7406\u8BF7\u6C42 body\u3002
- \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpRequestHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002

\u5173\u4E8E\u63D2\u4EF6\u914D\u7F6E\u53EF\u4EE5\u770B\u51FA\uFF0C Higress \u63D2\u4EF6 Go SDK \u5C01\u88C5\u5982\u4E0B\uFF1A
- \u5728\u63D2\u4EF6\u542F\u52A8\u65F6\u5019\uFF0C\u89E3\u6790\u63D2\u4EF6\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u63D2\u4EF6\u914D\u7F6E\u548C\u5168\u5C40\u914D\u7F6E\u4FDD\u5B58\u5230 CommonPluginCtx \u4E2D\u3002
- \u5728 onHttpRequestHeaders \u9636\u6BB5\uFF0C\u6839\u636E\u5F53\u524D HTTP \u4E0A\u4E0B\u6587\u4E2D\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7B49\u4FE1\u606F\u5339\u914D\u63D2\u4EF6\u914D\u7F6E\uFF0C\u8FD4\u56DE\u8DEF\u7531\u3001\u57DF\u540D\u3001\u670D\u52A1\u7EA7\u522B\u914D\u7F6E\u6216\u8005\u5168\u5C40\u914D\u7F6E\u3002\u7136\u540E\u628A\u5339\u914D\u5230\u63D2\u4EF6\u914D\u7F6E\u8BBE\u7F6E\u5230 HttpContext \u5BF9\u8C61\u7684 config \u5C5E\u6027\u4E2D\uFF0C\u8FD9\u6837\u81EA\u5B9A\u4E49\u63D2\u4EF6\u7684\u6240\u6709\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u8FD9\u4E2A\u914D\u7F6E\u3002

#### 2.3.3 OnHttpRequestBody

OnHttpRequestBody \u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpRequestBody(bodySize int, endOfStream bool) types.Action {
	...
	// \u5982\u679C\u4E0D\u9700\u8981\u5904\u7406\u8BF7\u6C42 body\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u7EE7\u7EED\u540E\u7EED\u5904\u7406
	if !ctx.needRequestBody {
		return types.ActionContinue
	}
	// \u5148\u5224\u65AD\u662F\u5426\u8981\u9700\u8981\u8FDB\u884C\u6D41\u5F0F\u5904\u7406\uFF0C\u5982\u679C\u9700\u8981\u5219\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpStreamingRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
	if ctx.plugin.vm.onHttpStreamingRequestBody != nil && ctx.streamingRequestBody {
		chunk, _ := proxywasm.GetHttpRequestBody(0, bodySize)
		// \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpStreamingRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
		modifiedChunk := ctx.plugin.vm.onHttpStreamingRequestBody(ctx, *ctx.config, chunk, endOfStream, ctx.plugin.vm.log)
		err := proxywasm.ReplaceHttpRequestBody(modifiedChunk)
		...
		return types.ActionContinue
	}
	// \u518D\u5224\u65AD\u662F\u5426\u8981\u9700\u8981\u8FDB\u884C\u975E\u6D41\u5F0F\u5904\u7406\uFF0C\u9700\u8981\u7F13\u5B58\u8BF7\u6C42 body\uFF0C\u7B49\u8BFB\u53D6\u6574\u4E2A\u8BF7\u6C42 body \u540E\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
	if ctx.plugin.vm.onHttpRequestBody != nil {
		ctx.requestBodySize += bodySize
		if !endOfStream {
			return types.ActionPause
		}
		body, err := proxywasm.GetHttpRequestBody(0, ctx.requestBodySize)
		...
		// \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
		return ctx.plugin.vm.onHttpRequestBody(ctx, *ctx.config, body, ctx.plugin.vm.log)
	}
	return types.ActionContinue
}
\`\`\`

\u6838\u5FC3\u903B\u8F91\u5982\u4E0B\uFF1A
- \u5982\u679C ctx.needRequestBody \u4E3A false \u65F6\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u7EE7\u7EED\u540E\u7EED\u5904\u7406\u3002
- \u5F53 ctx.streamingRequestBody \u4E3A true \u65F6\uFF0C\u540C\u65F6\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6709 onHttpStreamingRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\uFF0C\u5219\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpStreamingRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
- \u5F53\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6709 onHttpRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\uFF0C\u9700\u8981\u7F13\u5B58\u8BF7\u6C42 body\uFF0C\u7B49\u8BFB\u53D6\u6574\u4E2A\u8BF7\u6C42 body \u540E\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpRequestBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002

#### 2.3.4 OnHttpResponseHeaders

OnHttpResponseHeaders \u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpResponseHeaders(numHeaders int, endOfStream bool) types.Action {
	...
	// To avoid unexpected operations, plugins do not read the binary content body
	if IsBinaryResponseBody() {
		ctx.needResponseBody = false
	}
	...
	return ctx.plugin.vm.onHttpResponseHeaders(ctx, *ctx.config, ctx.plugin.vm.log)
}

\`\`\`
\u4E3B\u8981\u5904\u7406\u903B\u8F91\u5982\u4E0B\uFF1A
- \u5982\u679C\u54CD\u5E94 content-type \u662F octet-stream/grpc \u6216\u8005\u5B9A\u4E49 content-encoding\uFF0C\u5219\u4E0D\u5904\u7406\u54CD\u5E94 body\u3002
- \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpResponseHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002

#### 2.3.5 OnHttpResponseBody

OnHttpResponseBody \u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpResponseBody(bodySize int, endOfStream bool) types.Action {
    ...
	// \u5982\u679C\u4E0D\u9700\u8981\u5904\u7406\u54CD\u5E94 body\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u7EE7\u7EED\u540E\u7EED\u5904\u7406
	if !ctx.needResponseBody {
		return types.ActionContinue
	}
	// \u5148\u5224\u65AD\u662F\u5426\u8981\u9700\u8981\u8FDB\u884C\u6D41\u5F0F\u5904\u7406\uFF0C\u5982\u679C\u9700\u8981\u5219\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpStreamingResponseBod \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
	if ctx.plugin.vm.onHttpStreamingResponseBody != nil && ctx.streamingResponseBody {
		chunk, _ := proxywasm.GetHttpResponseBody(0, bodySize)
		// \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpStreamingResponseBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
		modifiedChunk := ctx.plugin.vm.onHttpStreamingResponseBody(ctx, *ctx.config, chunk, endOfStream, ctx.plugin.vm.log)
		...
		return types.ActionContinue
	}
	// \u518D\u5224\u65AD\u662F\u5426\u8981\u9700\u8981\u8FDB\u884C\u975E\u6D41\u5F0F\u5904\u7406\uFF0C\u9700\u8981\u7F13\u5B58\u54CD\u5E94 body\uFF0C\u7B49\u8BFB\u53D6\u6574\u4E2A\u54CD\u5E94 body \u540E\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpResponseBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
	if ctx.plugin.vm.onHttpResponseBody != nil {
		ctx.responseBodySize += bodySize
		if !endOfStream {
			return types.ActionPause
		}
		body, err := proxywasm.GetHttpResponseBody(0, ctx.responseBodySize)
		...
		// \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpResponseBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570
		return ctx.plugin.vm.onHttpResponseBody(ctx, *ctx.config, body, ctx.plugin.vm.log)
	}
	return types.ActionContinue
}
\`\`\`

\u6838\u5FC3\u903B\u8F91\u5982\u4E0B\uFF1A
- \u5F53 ctx.needResponseBody \u4E3A false \u65F6\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u7EE7\u7EED\u540E\u7EED\u5904\u7406\u3002
- \u5F53 ctx.streamingResponseBody \u4E3A true \u65F6\uFF0C\u540C\u65F6\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6709 onHttpStreamingResponseBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\uFF0C\u5219\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpStreamingResponseBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002
- \u5F53\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6709 onHttpResponseBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\uFF0C\u9700\u8981\u7F13\u5B58\u54CD\u5E94 body\uFF0C\u7B49\u8BFB\u53D6\u6574\u4E2A\u54CD\u5E94 body \u540E\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpResponseBody \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002

#### 2.3.6 OnHttpStreamDone

OnHttpStreamDone \u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
func (ctx *CommonHttpCtx[PluginConfig]) OnHttpStreamDone() {
	...
	ctx.plugin.vm.onHttpStreamDone(ctx, *ctx.config, ctx.plugin.vm.log)
}
\`\`\`

OnHttpStreamDone \u6BD4\u8F83\u7B80\u5355\uFF0C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6709 onHttpStreamDone \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\uFF0C\u5219\u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6 onHttpStreamDone \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u3002

#### 2.3.7 CommonHttpCtx \u65B9\u6CD5

CommonHttpCtx \u63D0\u4F9B\u4EE5\u4E0B\u65B9\u6CD5\uFF0C\u81EA\u5B9A\u4E49\u63D2\u4EF6\u53EF\u4EE5\u8C03\u7528\uFF0C\u5176\u4EE3\u7801\u548C\u6CE8\u91CA\u5982\u4E0B\uFF1A
\`\`\`golang
// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\uFF0C\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u53EF\u4EE5\u5728\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6240\u6709\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u53EF\u4EE5\u83B7\u53D6
func (ctx *CommonHttpCtx[PluginConfig]) SetContext(key string, value interface{}) {
	ctx.userContext[key] = value
}
// \u83B7\u53D6\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\uFF0C\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u53EF\u4EE5\u5728\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6240\u6709\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u53EF\u4EE5\u83B7\u53D6
func (ctx *CommonHttpCtx[PluginConfig]) GetContext(key string) interface{} {
	return ctx.userContext[key]
}
// \u83B7\u53D6 bool \u7C7B\u578B\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587
func (ctx *CommonHttpCtx[PluginConfig]) GetBoolContext(key string, defaultValue bool) bool {
	if b, ok := ctx.userContext[key].(bool); ok {
		return b
	}
	return defaultValue
}
// \u83B7\u53D6 string \u7C7B\u578B\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587
func (ctx *CommonHttpCtx[PluginConfig]) GetStringContext(key, defaultValue string) string {
	if s, ok := ctx.userContext[key].(string); ok {
		return s
	}
	return defaultValue
}
// \u83B7\u53D6\u8BF7\u6C42 scheme
func (ctx *CommonHttpCtx[PluginConfig]) Scheme() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestScheme()
}
// \u83B7\u53D6\u8BF7\u6C42 host
func (ctx *CommonHttpCtx[PluginConfig]) Host() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestHost()
}
// \u83B7\u53D6\u8BF7\u6C42 path
func (ctx *CommonHttpCtx[PluginConfig]) Path() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestPath()
}
// \u83B7\u53D6\u8BF7\u6C42 method
func (ctx *CommonHttpCtx[PluginConfig]) Method() string {
	proxywasm.SetEffectiveContext(ctx.contextID)
	return GetRequestMethod()
}

// \u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u7981\u6B62\u8BFB\u53D6\u8BF7\u6C42 body \u548C\u5904\u7406\u3002
// \u6BD4\u5982\u5728 onHttpRequestHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u6839\u636E\u67D0\u4E9B\u6761\u4EF6\u65F6\u8C03\u7528\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u540E\u7EED\u7684\u8BF7\u6C42 body \u8BFB\u53D6\u548C\u5904\u7406
func (ctx *CommonHttpCtx[PluginConfig]) DontReadRequestBody() {
	ctx.needRequestBody = false
}

// \u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u7981\u6B62\u8BFB\u53D6\u54CD\u5E94 body\uFF0C 
// \u6BD4\u5982\u5728 onHttpResponseHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u6839\u636E\u67D0\u4E9B\u6761\u4EF6\u65F6\u8C03\u7528\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u540E\u7EED\u7684\u54CD\u5E94 body \u8BFB\u53D6\u548C\u5904\u7406
func (ctx *CommonHttpCtx[PluginConfig]) DontReadResponseBody() {
	ctx.needResponseBody = false
}
// \u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u7981\u6B62\u8BF7\u6C42\u6D41\u5F0F\u5904\u7406
// \u6BD4\u5982\u5728 onHttpRequestHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u6839\u636E\u67D0\u4E9B\u6761\u4EF6\u65F6\u8C03\u7528\uFF0C\u8DF3\u8FC7\u540E\u7EED\u7684 onHttpStreamingRequestBody \u6D41\u5F0F\u5904\u7406, \u8F6C\u6210 onHttpRequestBody \u5904\u7406
func (ctx *CommonHttpCtx[PluginConfig]) BufferRequestBody() {
	ctx.streamingRequestBody = false
}

// \u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u7981\u6B62\u54CD\u5E94\u6D41\u5F0F\u5904\u7406
// \u6BD4\u5982\u5728 onHttpResponseHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u6839\u636E\u67D0\u4E9B\u6761\u4EF6\u65F6\u8C03\u7528\uFF0C\u8DF3\u8FC7\u540E\u7EED\u7684 onHttpStreamingResponseBody \u6D41\u5F0F\u5904\u7406, \u8F6C\u6210 onHttpResponseBody \u5904\u7406
func (ctx *CommonHttpCtx[PluginConfig]) BufferResponseBody() {
	ctx.streamingResponseBody = false
}

// \u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u7981\u6B62\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0CEnvoy \u9ED8\u8BA4\u5728 Http \u5934\u53D1\u751F\u53D8\u66F4\u65F6\u4F1A\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0C\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7981\u6B62\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\u3002
// \u6BD4\u5982\u5728 onHttpRequestHeaders \u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u6839\u636E\u67D0\u4E9B\u6761\u4EF6\u65F6\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7981\u6B62\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\u3002
// \u5173\u4E8E DisableReroute \u4F7F\u7528\u573A\u666F\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B [ai-proxy \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-proxy/main.go#L76)
func (ctx *CommonHttpCtx[PluginConfig]) DisableReroute() {
	_ = proxywasm.SetProperty([]string{"clear_route_cache"}, []byte("off"))
}
// \u8BBE\u7F6E\u8BF7\u6C42 body buffer limit 
// \u5173\u4E8E DisableReroute \u4F7F\u7528\u573A\u666F\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B [ai-proxy \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-proxy/main.go#L81)
func (ctx *CommonHttpCtx[PluginConfig]) SetRequestBodyBufferLimit(size uint32) {
  ctx.plugin.vm.log.Infof("SetRequestBodyBufferLimit: %d", size)
  _ = proxywasm.SetProperty([]string{"set_decoder_buffer_limit"}, []byte(strconv.Itoa(int(size))))
}
// \u8BBE\u7F6E\u54CD\u5E94 body buffer limit
func (ctx *CommonHttpCtx[PluginConfig]) SetResponseBodyBufferLimit(size uint32) {
  ctx.plugin.vm.log.Infof("SetResponseBodyBufferLimit: %d", size)
  _ = proxywasm.SetProperty([]string{"set_encoder_buffer_limit"}, []byte(strconv.Itoa(int(size))))
}
\`\`\`

\u6838\u5FC3\u5185\u5BB9\u5982\u4E0B\uFF1A
- \u5728 onHttpRequestHeaders \u9636\u6BB5\uFF1A
  - \u8C03\u7528 DontReadRequestBody \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u8BFB\u53D6\u8BF7\u6C42 body \u548C\u5904\u7406\u3002
  - \u8C03\u7528 BufferRequestBody \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u8BF7\u6C42 onHttpStreamingRequestBody \u6D41\u5F0F\u5904\u7406\uFF0C\u8F6C\u6210 onHttpRequestBody \u5904\u7406\u3002
  - \u8C03\u7528 DisableReroute \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7981\u6B62\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\u3002
- \u5728 onHttpResponseHeaders \u9636\u6BB5\uFF1A
  - \u8C03\u7528 DontReadResponseBody \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u8BFB\u53D6\u54CD\u5E94 body \u548C\u5904\u7406\u3002
  - \u8C03\u7528 BufferResponseBody \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u54CD\u5E94 onHttpStreamingResponseBody \u6D41\u5F0F\u5904\u7406\uFF0C\u8F6C\u6210 onHttpResponseBody \u5904\u7406\u3002
- SetContext \u548C GetContext \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u548C\u83B7\u53D6\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\uFF0C\u5728\u81EA\u5B9A\u4E49\u63D2\u4EF6\u6240\u6709\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u53EF\u4EE5\u4F7F\u7528\u3002
- SetRequestBodyBufferLimit \u548C SetResponseBodyBufferLimit \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u8BF7\u6C42 body buffer limit \u548C\u54CD\u5E94 body buffer limit\u3002

### 2.4 Types.Action

\u5728\u81EA\u5B9A\u4E49\u63D2\u4EF6\u4E2D onHttpRequestHeaders\u3001onHttpRequestBody\u3001onHttpResponseHeaders\u3001onHttpResponseBody \u8FD4\u56DE\u503C\u7C7B\u578B\u4E3A types.Action\u3002\u901A\u8FC7 types.Action \u679A\u4E3E\u503C\u6765\u63A7\u5236\u63D2\u4EF6\u7684\u8FD0\u884C\u6D41\u7A0B\uFF0C\u5E38\u89C1\u7684\u8FD4\u56DE\u503C\u5982\u4E0B\uFF1A 

1. types.ActionContinue\uFF1A\u7EE7\u7EED\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u7EE7\u7EED\u8BFB\u53D6\u8BF7\u6C42 body\uFF0C\u6216\u8005\u7EE7\u7EED\u8BFB\u53D6\u54CD\u5E94 body\u3002

2. types.ActionPause\uFF1A \u6682\u505C\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u5728 onHttpRequestHeaders \u901A\u8FC7 Http \u6216\u8005 Redis \u8C03\u7528\u5916\u90E8\u670D\u52A1\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u5728\u8C03\u7528\u5916\u90E8\u670D\u52A1\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u8C03\u7528 proxywasm.ResumeHttpRequest() \u6765\u6062\u590D\u540E\u7EED\u5904\u7406 \u6216\u8005\u8C03\u7528 proxywasm.SendHttpResponseWithDetail() \u6765\u8FD4\u56DE\u54CD\u5E94\u3002


#### 2.4.1 \u7F16\u8BD1\u63D2\u4EF6\u6CE8\u610F\u4E8B\u9879

1. Higress \u9700\u8981\u7F16\u8BD1\u65F6\u542F\u7528 \`EXTRA_TAGS=proxy_wasm_version_0_2_100\` \u6807\u7B7E\u6765\u4FEE\u6539 Proxy Wasm ABI\u3002 TinyGo \u672C\u5730\u6784\u5EFA\u547D\u4EE4\u5982\u4E0B\uFF1A
\`\`\`shell
tinygo build -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100' -o ./build/plugin.wasm main.go
\`\`\`
2. Makefile \u6587\u4EF6\u9ED8\u8BA4\u542F\u7528 \`proxy_wasm_version_0_2_100\` \u6807\u7B7E\uFF0C\u6240\u4EE5\u4E0D\u9700\u8981\u4FEE\u6539 Makefile \u6587\u4EF6\u3002

#### 2.4.2 Header \u72B6\u6001\u7801

1. HeaderContinue:

\u8868\u793A\u5F53\u524D filter \u5DF2\u7ECF\u5904\u7406\u5B8C\u6BD5\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002 types.ActionContinue \u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

2. HeaderStopIteration:

\u8868\u793A header \u8FD8\u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u6765\u5904\u7406\u3002 \u4F46\u662F\u5E76\u4E0D\u505C\u6B62\u4ECE\u8FDE\u63A5\u8BFB\u6570\u636E\uFF0C\u7EE7\u7EED\u89E6\u53D1 body data \u7684\u5904\u7406\u3002 \u8FD9\u6837\u53EF\u4EE5\u5728 body data \u5904\u7406\u9636\u6BB5\u53EF\u4EE5\u66F4\u65B0 Http \u8BF7\u6C42\u5934\u5185\u5BB9\u3002 \u5982\u679C body data \u8981\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C \u8FD9\u65F6 header \u662F\u4E5F\u4F1A\u88AB\u4E00\u8D77\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002

3. HeaderContinueAndEndStream:

\u8868\u793A header \u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C\u4F46\u662F\u4E0B\u4E00\u4E2A filter \u6536\u5230\u7684 end_stream = false\uFF0C\u4E5F\u5C31\u662F\u6807\u8BB0\u8BF7\u6C42\u8FD8\u672A\u7ED3\u675F\u3002\u4EE5\u4FBF\u5F53\u524D filter \u518D\u589E\u52A0 body\u3002

4. HeaderStopAllIterationAndBuffer:

\u505C\u6B62\u6240\u6709\u8FED\u4EE3\uFF0C\u8868\u793A header \u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter\uFF0C\u5E76\u4E14\u5F53\u524D filter \u4E5F\u4E0D\u80FD\u6536\u5230 body data\u3002 \u5E76\u5BF9\u5F53\u524D\u8FC7\u6EE4\u5668\u53CA\u540E\u7EED\u8FC7\u6EE4\u5668\u7684\u5934\u90E8\u3001\u6570\u636E\u548C\u5C3E\u90E8\u8FDB\u884C\u7F13\u51B2\u3002\u5982\u679C\u7F13\u5B58\u5927\u5C0F\u8D85\u8FC7\u4E86 buffer limit\uFF0C\u5728\u8BF7\u6C42\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 413\uFF0C\u54CD\u5E94\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 500\u3002
\u540C\u65F6\u9700\u8981\u8C03\u7528 proxywasm.ResumeHttpRequest()\u3001 proxywasm.ResumeHttpResponse() \u6216\u8005 proxywasm.SendHttpResponseWithDetail()  \u51FD\u6570\u6765\u6062\u590D\u540E\u7EED\u5904\u7406\u3002

5. HeaderStopAllIterationAndWatermark:

\u540C\u4E0A\uFF0C\u533A\u522B\u662F\uFF0C\u5F53\u7F13\u5B58\u8D85\u8FC7\u4E86 buffer limit \u4F1A\u89E6\u53D1\u6D41\u63A7\uFF0C\u4E5F\u5C31\u662F\u6682\u505C\u4ECE\u8FDE\u63A5\u4E0A\u8BFB\u6570\u636E\u3002 types.ActionPause \u5B9E\u9645\u4E0A\u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

> \u5173\u4E8E types.HeaderStopIteration \u548C HeaderStopAllIterationAndWatermark \u7684\u4F7F\u7528\u573A\u666F\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B [ai-transformer \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99) \u548C  [ai-quota \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179) \u3002

#### 2.4.3 Data \u72B6\u6001\u7801

1. DataContinue:

\u548C header \u7C7B\u4F3C\uFF0C\u8868\u793A\u5F53\u524D filter \u5DF2\u7ECF\u5904\u7406\u5B8C\u6BD5\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002 \u5982\u679C header \u4E4B\u524D\u8FD4\u56DE\u7684\u662F HeaderStopIteration\uFF0C\u4E14\u5C1A\u672A\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C\u90A3\u4E48\u6B64\u65F6 header \u548C data \u4E5F\u4F1A\u88AB\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002types.ActionContinue \u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

2. DataStopIterationAndBuffer:

\u8868\u793A\u5F53\u524D data \u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C\u5E76\u4E14\u5C06\u5F53\u524D data \u7F13\u5B58\u8D77\u6765\u3002 \u4E0E header \u7C7B\u4F3C\uFF0C\u5982\u679C\u8FBE\u5230 buffer limit\uFF0C\u5728\u8BF7\u6C42\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 413\uFF0C\u54CD\u5E94\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 500\u3002
\u540C\u65F6\u9700\u8981\u8C03\u7528 proxywasm.ResumeHttpRequest()\u3001 proxywasm.ResumeHttpResponse() \u6216\u8005 proxywasm.SendHttpResponseWithDetail()  \u51FD\u6570\u6765\u6062\u590D\u540E\u7EED\u5904\u7406\u3002

3. DataStopIterationAndWatermark:

\u540C\u4E0A\uFF0C\u53EA\u662F\u8FBE\u5230 buffer limit \u4F1A\u89E6\u53D1\u6D41\u63A7\u3002types.ActionPause \u5B9E\u9645\u4E0A\u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

4. DataStopIterationNoBuffer:

\u8868\u793A\u5F53\u524D data \u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter\uFF0C\u4F46\u662F\u4E0D\u7F13\u5B58\u5F53\u524D data \u3002


### 2.5 Envoy \u8BF7\u6C42\u7F13\u5B58\u533A\u9650\u5236

\u5F53\u81EA\u5B9A\u4E49\u63D2\u4EF6\u4F7F\u7528 \`onHttpRequestBody\` \u975E\u6D41\u5F0F\u4F20\u8F93\uFF0C\u5F53\u8BF7\u6C42\u8D85\u8FC7 \`downstream\` \u7F13\u5B58\u533A\u9650\u5236(\u9ED8\u8BA4\u662F 32k)\u3002Envoy \u4F1A\u7ED9\u7528\u6237\u8FD4\u56DE 413\uFF0C \u540C\u65F6\u62A5 \`request_payload_too_large\` \u9519\u8BEF\u3002
\u6BD4\u5982\u5728 AI \u957F\u4E0A\u4E0B\u6587\u4E2D\u573A\u666F\u4E2D\u53EF\u80FD\u4F1A\u78B0\u5230\u8FD9\u4E2A\u95EE\u9898\uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u901A\u8FC7\u53C2\u8003 [\u5168\u5C40\u914D\u7F6E\u8BF4\u660E](https://higress.io/docs/latest/user/configmap/) \u8C03\u6574 Downstream \u914D\u7F6E\u9879 \`connectionBufferLimits\` \u89E3\u51B3\uFF0C \u6216\u8005 \u4F7F\u7528 \`SetRequestBodyBufferLimit\` \u65B9\u6CD5\u8BBE\u7F6E\u8BF7\u6C42 body buffer limit \u89E3\u51B3\u3002 \u5173\u4E8E\u5982\u4F55\u4F7F\u7528 \`SetRequestBodyBufferLimit\` \u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B [ai-proxy \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-proxy/main.go#L81) \u7684\u5B9E\u73B0\u3002


## 3 Envoy \u5C5E\u6027\uFF08Attributes\uFF09

\u5C5E\u6027\u662F Envoy \u7684\u4E00\u4E2A\u7279\u6027\uFF0C\u5141\u8BB8\u7528\u6237\u5728\u63D2\u4EF6\u4E2D\u8BBE\u7F6E\u548C\u83B7\u53D6\u8FD9\u4E9B\u5C5E\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7 \`proxywasm.GetProperty\` \u548C \`proxywasm.SetProperty\` \u65B9\u6CD5\u83B7\u53D6\u548C\u8BBE\u7F6E\u3002
Envoy \u9884\u5B9A\u4E49\u5C5E\u6027\u5305\u62EC\u8BF7\u6C42\u5C5E\u6027\u3001\u54CD\u5E94\u5C5E\u6027\u3001\u8FDE\u63A5\u5C5E\u6027\u3001Upstream \u5C5E\u6027\u3001Wasm \u5C5E\u6027\u3001\u548C Metadata \u7B49\u5C5E\u6027\uFF0C \u5177\u4F53\u53EF\u4EE5\u53C2\u8003 [Envoy \u5C5E\u6027](https://www.envoyproxy.io/docs/envoy/latest/intro/arch_overview/advanced/attributes)\u3002
\u540C\u65F6\u7528\u6237\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u8FD9\u4E9B\u5C5E\u6027\u53EF\u4EE5\u5728\u63D2\u4EF6\u94FE\u4E2D\u4E0D\u540C\u63D2\u4EF6\u5171\u4EAB\u3002


## \u53C2\u8003
- [1] [Envoy \u5F00\u53D1\u5165\u95E8\uFF1A\u641E\u61C2 http filter \u72B6\u6001\u7801](https://uncledou.site/2022/envoy-filter-status/)


`,s={title:"Higress \u63D2\u4EF6 Go SDK \u4E0E\u5904\u7406\u6D41\u7A0B",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/ebook/en/wasm16.md",rawData:void 0};export{i as _internal,n as body,e as collection,s as data,t as id,o as slug};
