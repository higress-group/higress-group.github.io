import{c,__tla as d}from"./astro-component.CXlaF79K.js";import{r,m as g,u,__tla as y}from"./constant.DB78Y6zg.js";import{__tla as v}from"./astro/assets-service.DQopRnBr.js";let e,t,a,n,p,o,i,m=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u524D\u8A00">\u524D\u8A00</h2>
<p>\u572811\u670815\u53F7\u7684\u76F4\u64AD \u300AHigress \u5F00\u6E90\u80CC\u540E\u7684\u53D1\u5C55\u5386\u7A0B\u548C\u4E0A\u624B Demo \u6F14\u793A\u300B\u4E2D\uFF0C\u4E3A\u5927\u5BB6\u6F14\u793A\u4E86 Higress \u7684 Wasm \u63D2\u4EF6\u5982\u4F55\u9762\u5411 Ingress \u8D44\u6E90\u8FDB\u884C\u914D\u7F6E\u751F\u6548\uFF0C\u672C\u6587\u5BF9\u5F53\u5929\u7684 Demo \u8FDB\u884C\u4E00\u4E2A\u56DE\u987E\uFF0C\u5E76\u8BF4\u660E\u80CC\u540E\u7684\u539F\u7406\u673A\u5236\u3002</p>
<!--truncate-->
<p>\u672C\u6587\u4E2D Demo \u8FD0\u884C\u7684\u524D\u63D0\uFF0C\u9700\u8981\u5728 K8s \u96C6\u7FA4\u4E2D\u5B89\u88C5\u4E86 Higress\uFF0C\u5E76\u751F\u6548\u4E86\u4E0B\u9762\u8FD9\u4EFD quickstart \u914D\u7F6E\uFF1A
<a href="https://higress.cn/samples/quickstart.yaml" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.cn/samples/quickstart.yaml</a>
\u8FD9\u4E2A Demo \u8981\u5B9E\u73B0\u7684\u529F\u80FD\u662F\u4E00\u4E2A Mock \u5E94\u7B54\u7684\u529F\u80FD\uFF0C\u9700\u8981\u5B9E\u73B0\u6839\u636E\u914D\u7F6E\u7684\u5185\u5BB9\uFF0C\u8FD4\u56DE HTTP \u5E94\u7B54\u3002
\u672C\u6587\u4F1A\u6309\u4EE5\u4E0B\u65B9\u5F0F\u8FDB\u884C\u4ECB\u7ECD\uFF1A</p>
<ul>
<li>\u7F16\u5199\u4EE3\u7801\uFF1A\u4EE3\u7801\u903B\u8F91\u89E3\u6790</li>
<li>\u751F\u6548\u63D2\u4EF6\uFF1A\u8BF4\u660E\u4EE3\u7801\u5982\u4F55\u8FDB\u884C\u7F16\u8BD1\u6253\u5305\u5E76\u90E8\u7F72\u751F\u6548</li>
<li>\u6D4B\u8BD5\u63D2\u4EF6\u529F\u80FD\uFF1A\u8BF4\u660E\u5168\u5C40\u7C92\u5EA6\uFF0C\u8DEF\u7531/\u57DF\u540D\u7EA7\u7C92\u5EA6\u5982\u4F55\u751F\u6548</li>
<li>\u63D2\u4EF6\u751F\u6548\u539F\u7406\uFF1A\u5BF9\u6574\u4F53\u6D41\u7A0B\u8FDB\u884C\u56DE\u987E\uFF0C\u8BF4\u660E\u63D2\u4EF6\u751F\u6548\u7684\u539F\u7406</li>
<li>\u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027\uFF1A\u4ECB\u7ECD Wasm \u63D2\u4EF6\u673A\u5236\u4E3A\u7F51\u5173\u63D2\u4EF6\u5F00\u53D1\u5E26\u6765\u7684\u53D8\u9769</li>
</ul>
<h2 id="\u7F16\u5199\u4EE3\u7801">\u7F16\u5199\u4EE3\u7801</h2>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">. "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"github.com/tidwall/gjson"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">"my-plugin",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">ParseConfigBy(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type MyConfig struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">content string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func parseConfig(json gjson.Result, config *MyConfig, log Log) error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">config.content = json.Get("content").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx HttpContext, config MyConfig, log Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(200, nil, []byte(config.content), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F\x7Fimport (\x7F    . &#x22;github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper&#x22;\x7F    &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm&#x22;\x7F    &#x22;github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types&#x22;\x7F    &#x22;github.com/tidwall/gjson&#x22;\x7F)\x7F\x7Ffunc main() {\x7F    SetCtx(\x7F        &#x22;my-plugin&#x22;,\x7F        ParseConfigBy(parseConfig),\x7F        ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F    )\x7F}\x7F\x7Ftype MyConfig struct {\x7F    content string\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *MyConfig, log Log) error {\x7F    config.content = json.Get(&#x22;content&#x22;).String()\x7F    return nil\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx HttpContext, config MyConfig, log Log) types.Action {\x7F    proxywasm.SendHttpResponse(200, nil, []byte(config.content), -1)\x7F    return types.ActionContinue\x7F}"><div></div></button></div></figure></div>
<p>\u4E0A\u9762\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\u4E09\u4E2A\u51FD\u6570\uFF1A</p>
<ul>
<li>main\uFF1A\u63D2\u4EF6\u901A\u8FC7 main \u51FD\u6570\u5B9A\u4E49\u63D2\u4EF6\u4E0A\u4E0B\u6587\uFF0C\u5305\u62EC\u63D2\u4EF6\u540D\u79F0\uFF0C\u7528\u4E8E\u89E3\u6790\u914D\u7F6E\u7684\u51FD\u6570\uFF0C\u4EE5\u53CA\u7528\u4E8E\u5904\u7406\u8BF7\u6C42/\u5E94\u7B54\u7684\u51FD\u6570</li>
<li>parseConfig\uFF1A\u8FD9\u4E2A\u51FD\u6570\u901A\u8FC7\u5728 SetCtx \u4E2D\u6307\u5B9A\u7684 ParseConfigBy \u88AB\u6302\u8F7D\u5230\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u9636\u6BB5\uFF0C\u4F20\u5165\u7684\u4E09\u4E2A\u53C2\u6570\u5206\u522B\u662F\uFF1A
<ul>
<li>json\uFF1A\u4F20\u5165\u63D2\u4EF6\u7684\u914D\u7F6E\uFF0C\u5C06\u7EDF\u4E00\u5E8F\u5217\u5316\u4E3A\u4E00\u4E2A json \u5B57\u5178\u5BF9\u8C61\uFF0C\u63D0\u4F9B parseConfig \u8FDB\u884C\u89E3\u6790</li>
<li>config\uFF1AparseConfig \u5C06\u89E3\u6790\u540E\u7684\u63D2\u4EF6\u914D\u7F6E\u8F93\u51FA\u5230\u8FD9\u4E2A MyConfig \u5BF9\u8C61</li>
<li>log\uFF1A\u63D0\u4F9B\u65E5\u5FD7\u8F93\u51FA\u63A5\u53E3</li>
</ul>
</li>
<li>onHttpRequestHeaders\uFF1A\u51FD\u6570\u4E2D\u8C03\u7528\u7684 proxywasm.SendHttpResponse\uFF0C\u7528\u4E8E\u5B9E\u73B0\u76F4\u63A5\u8FD4\u56DE HTTP \u5E94\u7B54\uFF0C\u8FD9\u4E2A\u51FD\u6570\u901A\u8FC7\u5728 SetCtx \u4E2D\u6307\u5B9A\u7684 ProcessRequestHeadersBy \u88AB\u6302\u8F7D\u5230\u89E3\u6790\u8BF7\u6C42 Header \u7684\u6267\u884C\u9636\u6BB5\uFF0C\u5176\u4ED6\u7684\u6302\u8F7D\u65B9\u5F0F\u8FD8\u6709\uFF1A
<ul>
<li>
<p>ProcessRequestBodyBy\uFF1A\u6302\u8F7D\u5230\u89E3\u6790\u8BF7\u6C42 Body \u7684\u6267\u884C\u9636\u6BB5</p>
</li>
<li>
<p>ProcessResponseHeadersBy\uFF1A\u6302\u8F7D\u5230\u6784\u9020\u5E94\u7B54 Header \u7684\u6267\u884C\u9636\u6BB5</p>
</li>
<li>
<p>ProcessResponseBodyBy\uFF1A\u6302\u8F7D\u5230\u6784\u9020\u5E94\u7B54 Body \u7684\u6267\u884C\u9636\u6BB5</p>
<p>\u4F20\u5165\u7684\u4E09\u4E2A\u53C2\u6570\u5206\u522B\u662F\uFF1A</p>
</li>
<li>
<p>ctx\uFF1A\u7528\u4E8E\u83B7\u53D6\u8BF7\u6C42\u4E0A\u4E0B\u6587\uFF0C\u5982 scheme/method/path \u7B49\uFF0C\u901A\u8FC7 ctx \u53EF\u4EE5\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\uFF0C\u80FD\u8DE8\u6267\u884C\u9636\u6BB5\u8BBF\u95EE</p>
</li>
<li>
<p>config\uFF1A\u63D0\u4F9B parseConfig \u89E3\u6790\u597D\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E</p>
</li>
<li>
<p>log\uFF1A\u63D0\u4F9B\u65E5\u5FD7\u8F93\u51FA\u63A5\u53E3</p>
</li>
</ul>
</li>
</ul>
<p>\u8FD9\u4E2A 30 \u884C\u4EE3\u7801\u5B9E\u73B0\u7684\u63D2\u4EF6\u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u8FD9\u91CC\u6709\u4E00\u4E9B\u529F\u80FD\u76F8\u5BF9\u590D\u6742\u7684\u4F8B\u5B50\uFF1A<a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions</a>
\u8FD9\u91CC\u6709\u63D2\u4EF6 sdk \u7684\u8BE6\u7EC6\u4F7F\u7528\u6587\u6863\uFF1A
<a href="https://higress.cn/docs/latest/user/wasm-go/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.cn/docs/latest/user/wasm-go/</a>
\u8FD9\u4E2A\u63D2\u4EF6 sdk \u662F\u57FA\u4E8E Tetrate \u793E\u533A\u7684 proxy-wasm-go-sdk \u5B9E\u73B0\u7684\uFF0C\u5982\u679C\u5173\u6CE8\u66F4\u5E95\u5C42\u7684\u7EC6\u8282\uFF0C\u53EF\u4EE5\u67E5\u770B\uFF1A
<a href="https://github.com/tetratelabs/proxy-wasm-go-sdk" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/tetratelabs/proxy-wasm-go-sdk</a>
<a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/plugin_wrapper.go" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper</a>
\u53EF\u4EE5\u770B\u5230\uFF0CHigress \u7684 wasm-go sdk \u662F\u901A\u8FC7 Go 1.18 \u5F15\u5165\u7684\u6CDB\u578B\u7279\u6027\u5C01\u88C5\u4E86\u63D2\u4EF6\u4E0A\u4E0B\u6587\u5904\u7406\u7EC6\u8282\uFF0C\u4ECE\u800C\u964D\u4F4E\u63D2\u4EF6\u5F00\u53D1\u6240\u9700\u4EE3\u7801\u91CF\uFF0C\u5F00\u53D1\u8005\u53EA\u7528\u5173\u5FC3\u914D\u7F6E\u89E3\u6790\u548C\u8BF7\u6C42\u5E94\u7B54\u5904\u7406\u7684\u903B\u8F91\u3002</p>
<h2 id="\u751F\u6548\u63D2\u4EF6">\u751F\u6548\u63D2\u4EF6</h2>
<p>\u7F16\u5199\u5B8C\u6210\u4EE3\u7801\u540E\uFF0C\u4E00\u5171\u6709\u4E09\u4E2A\u6B65\u9AA4\uFF0C\u5B9E\u73B0\u63D2\u4EF6\u903B\u8F91\u7684\u751F\u6548\uFF1A</p>
<ol>
<li>\u7F16\u8BD1\uFF1A\u5C06 go \u4EE3\u7801\u7F16\u8BD1\u6210 Wasm \u683C\u5F0F\u6587\u4EF6</li>
<li>\u955C\u50CF\u63A8\u9001\uFF1A\u5C06 Wasm \u6587\u4EF6\u6253\u5305\u6210 docker \u955C\u50CF\uFF0C\u5E76\u63A8\u9001\u81F3\u955C\u50CF\u4ED3\u5E93</li>
<li>\u4E0B\u53D1\u914D\u7F6E\uFF1A\u5728 K8s \u4E0A\u521B\u5EFA WasmPlugin \u8D44\u6E90</li>
</ol>
<h3 id="\u7F16\u8BD1">\u7F16\u8BD1</h3>
<p>\u5C06\u4E0A\u9762\u7684 Go \u6587\u4EF6 main.go \u7F16\u8BD1\u6210 plugin.wasm</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">tinygo</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-o</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">plugin.wasm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-scheduler=none</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-target=wasi</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-gc=custom</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-tags=</span><span style="--0:#9ECBFF">'custommalloc nottinygc_finalizer'</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">main.go</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tinygo build -o plugin.wasm -scheduler=none -target=wasi -gc=custom -tags=&#x27;custommalloc nottinygc_finalizer&#x27; main.go"><div></div></button></div></figure></div>
<h3 id="\u955C\u50CF\u63A8\u9001">\u955C\u50CF\u63A8\u9001</h3>
<p>\u7F16\u5199 Dockerfile</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">FROM</span><span style="--0:#E1E4E8"> scratch</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">COPY</span><span style="--0:#E1E4E8"> plugin.wasm ./</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="FROM scratch\x7FCOPY plugin.wasm ./"><div></div></button></div></figure></div>
<p>\u6784\u5EFA\u5E76\u63A8\u9001 Docker \u955C\u50CF \uFF08\u8FD9\u91CC\u793A\u4F8B\u7528\u7684\u662F Higress \u7684\u5B98\u65B9\u955C\u50CF\u4ED3\u5E93\uFF09</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">build</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-t</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">push</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker build -t higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0 .\x7Fdocker push higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0"><div></div></button></div></figure></div>
<h3 id="\u4E0B\u53D1\u914D\u7F6E">\u4E0B\u53D1\u914D\u7F6E</h3>
<p>\u7F16\u5199 wasmplugin.yaml\uFF0C\u914D\u7F6E\u8BF4\u660E\uFF1A</p>
<ul>
<li>selector\uFF1A \u9009\u4E2D\u4E86\u9ED8\u8BA4\u5B89\u88C5\u5728 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 higress-gateway \u751F\u6548\u8FD9\u4EFD\u63D2\u4EF6</li>
<li>pluginConfig\uFF1A\u63D2\u4EF6\u914D\u7F6E\uFF0C\u6700\u7EC8\u4F1A\u88AB\u8F6C\u6362\u6210\u4E0A\u9762\u4EE3\u7801\u4E2D\u7684 MyConfig \u5BF9\u8C61</li>
<li>url\uFF1A\u586B\u5199\u955C\u50CF\u5730\u5740\uFF0C\u9700\u8981\u4EE5\u201Doci://\u201C\u5F00\u5934</li>
</ul>
<p>\u9664\u4E86\u8FD9\u4E9B\u914D\u7F6E\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u63D2\u4EF6\u7684\u6267\u884C\u9636\u6BB5\u548C\u4F18\u5148\u7EA7\u7B49\u8FDB\u9636\u914D\u7F6E\uFF0C\u53EF\u4EE5\u53C2\u8003 Istio API \u5B98\u65B9\u6587\u6863\uFF1A<a href="https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/</a></p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">wasmplugin.yaml</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"swagger.html"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: request-block\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    block_urls:\x7F    - &#x22;swagger.html&#x22;\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0"><div></div></button></div></figure></div>
<p>\u901A\u8FC7 kubectl \u521B\u5EFA\u8FD9\u4E2A\u8D44\u6E90</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">apply</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-f</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">wasmplugin.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f wasmplugin.yaml"><div></div></button></div></figure></div>
<h2 id="\u6D4B\u8BD5\u63D2\u4EF6\u529F\u80FD">\u6D4B\u8BD5\u63D2\u4EF6\u529F\u80FD</h2>
<p>\u57FA\u4E8E\u4E4B\u524D\u751F\u6548\u7684 quickstart.yaml\uFF0C\u76EE\u524D\u96C6\u7FA4\u4E2D\u7684 Ingress \u8BBF\u95EE\u62D3\u6251\u5982\u4E0B\u6240\u793A\uFF1A</p>
<h3 id=""><img src="https://img.alicdn.com/imgextra/i3/O1CN0178hYAV1sBTSczmfAf_!!6000000005728-2-tps-646-605.png" alt="ing-topo.png" referrerpolicy="no-referrer"></h3>
<p>\u672A\u751F\u6548\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF1A</p>
<ul>
<li>\u8BF7\u6C42<code dir="auto">/foo</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"foo"</code></li>
<li>\u8BF7\u6C42<code dir="auto">/bar</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"bar"</code></li>
</ul>
<h3 id="\u5168\u5C40\u751F\u6548">\u5168\u5C40\u751F\u6548</h3>
<p>\u57FA\u4E8E\u4E0A\u6587\u751F\u6548\u63D2\u4EF6\u9636\u6BB5\uFF0C\u4E0B\u53D1\u7684 wasmplugin.yaml\uFF0C\u751F\u6548\u63D2\u4EF6\u540E\u6548\u679C\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u8BF7\u6C42<code dir="auto">/foo</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"hello higress"</code></li>
<li>\u8BF7\u6C42<code dir="auto">/bar</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"hello higress"</code></li>
</ul>
<h3 id="\u57DF\u540D\u8DEF\u7531\u7EA7\u751F\u6548">\u57DF\u540D&#x26;\u8DEF\u7531\u7EA7\u751F\u6548</h3>
<p>\u5C06 wasmplugin.yaml \u914D\u7F6E\u4FEE\u6539\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame has-title not-content"><figcaption class="header"><span class="title">wasmplugin.yaml</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#99A0A6"># \u8DDF\u4E0A\u9762\u4F8B\u5B50\u4E00\u6837\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">   </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"swagger.html"</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#99A0A6"># \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#99A0A6"># default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A bar \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"bar"</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#99A0A6"># \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"*.example.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># \u82E5\u8BF7\u6C42\u5339\u914D\u4E86\u4E0A\u9762\u7684\u57DF\u540D, \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">block_bodies</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"foo"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"bar"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: request-block\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F   # \u8DDF\u4E0A\u9762\u4F8B\u5B50\u4E00\u6837\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E\x7F   block_urls:\x7F   - &#x22;swagger.html&#x22;\x7F   matchRules:\x7F   # \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E\x7F  - ingress:\x7F    - default/foo\x7F     # default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E\x7F    config:\x7F      block_bodies:\x7F      - &#x22;foo&#x22;\x7F  - ingress:\x7F    - default/bar\x7F    # default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A bar \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E\x7F    config:\x7F      block_bodies:\x7F      - &#x22;bar&#x22;\x7F   # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E\x7F  - domain:\x7F    - &#x22;*.example.com&#x22;\x7F    # \u82E5\u8BF7\u6C42\u5339\u914D\u4E86\u4E0A\u9762\u7684\u57DF\u540D, \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E\x7F    config:\x7F      block_bodies:\x7F      - &#x22;foo&#x22;\x7F      - &#x22;bar&#x22;\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0"><div></div></button></div></figure></div>
<p>\u5728 pluginConfig \u4E2D\u589E\u52A0\u4E86 <code dir="auto">_rules_</code>  \u89C4\u5219\u5217\u8868\uFF0C\u89C4\u5219\u4E2D\u53EF\u4EE5\u6307\u5B9A\u5339\u914D\u65B9\u5F0F\uFF0C\u5E76\u586B\u5199\u5BF9\u5E94\u751F\u6548\u7684\u914D\u7F6E:</p>
<ul>
<li><em>match_route</em>\uFF1A\u5339\u914D Ingress \u751F\u6548\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A\uFF1AIngress \u6240\u5728\u547D\u540D\u7A7A\u95F4 + \u201D/\u201D + Ingress \u540D\u79F0</li>
<li><em>match_domain</em>\uFF1A\u5339\u914D\u57DF\u540D\u751F\u6548\uFF0C\u586B\u5199\u57DF\u540D\u5373\u53EF\uFF0C\u652F\u6301\u901A\u914D\u7B26</li>
</ul>
<p>\u751F\u6548\u8FD9\u4EFD\u4FEE\u6539\u540E\u7684\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">kubectl apply -f wasmplugin.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl apply -f wasmplugin.yaml"><div></div></button></div></figure></div>
<p>\u53EF\u4EE5\u770B\u5230\u6548\u679C\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u8BF7\u6C42<code dir="auto">/foo</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"hello foo"</code> (\u5339\u914D\u5230\u7B2C\u4E00\u6761 rule)</li>
<li>\u8BF7\u6C42<code dir="auto">/bar</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"hello bar"</code> (\u5339\u914D\u5230\u7B2C\u4E8C\u6761 rule)</li>
<li>\u8BF7\u6C42<code dir="auto">www.example.com</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"hello world"</code> \uFF08\u5339\u914D\u5230\u7B2C\u4E09\u6761 rule\uFF09</li>
<li>\u8BF7\u6C42<code dir="auto">www.abc.com</code> \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 <code dir="auto">"hello higress"</code> \uFF08\u6CA1\u6709\u5339\u914D\u7684 rule\uFF0C\u4F7F\u7528\u5168\u5C40\u914D\u7F6E\uFF09</li>
</ul>
<h2 id="\u63D2\u4EF6\u751F\u6548\u539F\u7406">\u63D2\u4EF6\u751F\u6548\u539F\u7406</h2>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01PO4HYC1h7qYHonHHZ_!!6000000004231-2-tps-1100-537.png" alt="wasm.png" referrerpolicy="no-referrer"></p>
<p>\u8FD9\u91CC\u5BF9\u63D2\u4EF6\u7684\u751F\u6548\u673A\u5236\u7B80\u5355\u505A\u4E2A\u8BF4\u660E\uFF1A</p>
<ol>
<li>\u7528\u6237\u5C06\u4EE3\u7801\u7F16\u8BD1\u6210 wasm \u6587\u4EF6</li>
<li>\u7528\u6237\u5C06 wasm \u6587\u4EF6\u6784\u5EFA\u6210 docker \u955C\u50CF</li>
<li>\u7528\u6237\u5C06 docker \u955C\u50CF\u63A8\u9001\u81F3\u955C\u50CF\u4ED3\u5E93</li>
<li>\u7528\u6237\u521B\u5EFA WasmPlugin \u8D44\u6E90</li>
<li>Istio watch \u5230 WasmPlugin \u8D44\u6E90\u7684\u53D8\u5316</li>
<li>Higress Gateway \u4E2D\u7684 xDS proxy \u8FDB\u7A0B\u4ECE Istio \u83B7\u53D6\u5230\u914D\u7F6E\uFF0C\u53D1\u73B0\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740</li>
<li>xDS proxy \u4ECE\u955C\u50CF\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF</li>
<li>xDS proxy \u4ECE\u955C\u50CF\u4E2D\u63D0\u53D6\u51FA wasm \u6587\u4EF6</li>
<li>Higress Gateway \u4E2D\u7684 envoy \u8FDB\u7A0B\u4ECE xDS proxy \u83B7\u53D6\u5230\u914D\u7F6E\uFF0C\u53D1\u73B0 wasm \u6587\u4EF6\u7684\u672C\u5730\u8DEF\u5F84</li>
<li>envoy \u4ECE\u672C\u5730\u6587\u4EF6\u4E2D\u52A0\u8F7D wasm \u6587\u4EF6</li>
</ol>
<p>\u8FD9\u91CC envoy \u83B7\u53D6\u914D\u7F6E\u5E76\u52A0\u8F7D wasm \u6587\u4EF6\u4F7F\u7528\u5230\u4E86 ECDS (Extension Config Discovery Service)\u7684\u673A\u5236\uFF0C\u5B9E\u73B0\u4E86 wasm \u6587\u4EF6\u66F4\u65B0\uFF0C\u76F4\u63A5\u70ED\u52A0\u8F7D\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u4EFB\u4F55\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u4E1A\u52A1\u6D41\u91CF\u5B8C\u5168\u65E0\u635F\u3002</p>
<h2 id="\u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027">\u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027</h2>
<p>\u4E0A\u9762\u7684 Wasm \u63D2\u4EF6\u673A\u5236\u4E3A\u7F51\u5173\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1\u5E26\u6765\u4E86\u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027\u3002</p>
<h3 id="\u7279\u6027\u4E00\u63D2\u4EF6\u751F\u547D\u5468\u671F\u548C\u7F51\u5173\u89E3\u8026">\u7279\u6027\u4E00\uFF1A\u63D2\u4EF6\u751F\u547D\u5468\u671F\u548C\u7F51\u5173\u89E3\u8026</h3>
<p>\u8FD9\u4E2A\u7279\u6027\u4E3B\u8981\u5F97\u76CA\u4E8E Istio \u7684 WasmPlugin \u673A\u5236\u8BBE\u8BA1\u3002\u53EF\u4EE5\u548C K8s Nginx Ingress \u7684\u63D2\u4EF6\u673A\u5236\u505A\u4E2A\u5BF9\u6BD4\uFF1A</p>
<blockquote>
<p>reference: <a href="https://github.com/kubernetes/ingress-nginx/blob/main/rootfs/etc/nginx/lua/plugins/README.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/kubernetes/ingress-nginx/blob/main/rootfs/etc/nginx/lua/plugins/README.md</a></p>
<h3 id="installing-a-plugin">Installing a plugin</h3>
<p>There are two options:</p>
<ul>
<li>mount your plugin into /etc/nginx/lua/plugins/<your plugin="" name=""> in the ingress-nginx pod</your></li>
<li>build your own ingress-nginx image like it is done in the <a href="https://github.com/ElvinEfendi/ingress-nginx-openidc/tree/master/rootfs/etc/nginx/lua/plugins/openidc" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">example</a> and install your plugin during image build</li>
</ul>
</blockquote>
<p>\u53EF\u4EE5\u770B\u5230 Nginx Ingress \u52A0\u8F7D\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u9700\u8981\u5C06 lua \u6587\u4EF6\u6302\u8F7D\u8FDB pod\uFF0C\u6216\u8005\u5728\u6784\u5EFA\u955C\u50CF\u65F6\u88C5\u5165\u3002\u8FD9\u6837\u5C31\u5C06\u63D2\u4EF6\u7684\u751F\u547D\u5468\u671F\u8DDF\u7F51\u5173\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u63D2\u4EF6\u903B\u8F91\u66F4\u65B0\uFF0C\u9700\u8981\u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u7F51\u5173\u4E5F\u9700\u8981\u53D1\u5E03\u65B0\u7248\u672C\u6216\u8005\u91CD\u65B0\u90E8\u7F72\u3002
\u4F7F\u7528 WasmPlugin \u7684\u673A\u5236\uFF0C\u63D2\u4EF6\u9700\u8981\u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u53EA\u9700\u6784\u5EFA\u63D2\u4EF6\u81EA\u8EAB\u7684\u955C\u50CF\u5E76\u8FDB\u884C\u4E0B\u53D1\u751F\u6548\uFF0C\u800C\u4E14\u53EF\u4EE5\u57FA\u4E8E\u955C\u50CF\u7684 tag \u8FDB\u884C\u63D2\u4EF6\u7684\u7248\u672C\u7BA1\u7406\u3002\u8FD9\u6837\u63D2\u4EF6\u53D8\u66F4\uFF0C\u4E0D\u4EC5\u65E0\u9700\u91CD\u65B0\u90E8\u7F72\u7F51\u5173\uFF0C\u7ED3\u5408 Envoy \u7684 ECDS \u673A\u5236\u5BF9\u6D41\u91CF\u4E5F\u662F\u5B8C\u5168\u65E0\u635F\u3002</p>
<h3 id="\u7279\u6027\u4E8C\u9AD8\u6027\u80FD\u7684\u591A\u8BED\u8A00\u652F\u6301">\u7279\u6027\u4E8C\uFF1A\u9AD8\u6027\u80FD\u7684\u591A\u8BED\u8A00\u652F\u6301</h3>
<p>\u57FA\u4E8E Wasm \u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u7528\u591A\u79CD\u8BED\u8A00\u7F16\u5199\u63D2\u4EF6\uFF0C\u5BF9\u5F00\u53D1\u4EBA\u5458\u66F4\u52A0\u53CB\u597D\u3002\u5B9E\u73B0\u591A\u8BED\u8A00\u5F00\u53D1\u63D2\u4EF6\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u57FA\u4E8E RPC \u548C\u7F51\u5173\u8FDB\u7A0B\u901A\u4FE1\u7684\u5916\u7F6E\u8FDB\u7A0B/\u670D\u52A1\u63D2\u4EF6\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u4F1A\u6709\u989D\u5916\u7684 IO \u5F00\u9500\uFF0C\u5E76\u4E14\u9644\u52A0\u7684\u8FDB\u7A0B/\u670D\u52A1\u4E5F\u5E26\u6765\u989D\u5916\u7684\u8FD0\u7EF4\u590D\u6742\u5EA6\u3002\u76EE\u524D\u5927\u5BB6\u5BF9 Wasm \u63D2\u4EF6\u7684\u6027\u80FD\u6BD4\u8F83\u5173\u5FC3\uFF0C\u4ECE\u6211\u4EEC\u7684\u6D4B\u8BD5\u6570\u636E\u6765\u770B\uFF0C\u6307\u4EE4\u6267\u884C\u6027\u80FD\u76F8\u6BD4\u539F\u751F\u7684 C++ \u8BED\u8A00\u786E\u5B9E\u6709\u5DEE\u8DDD\uFF0C\u4F46\u6027\u80FD\u548C Lua \u6301\u5E73\uFF0C\u4E14\u8FDC\u597D\u4E8E\u5916\u7F6E\u63D2\u4EF6\u3002
\u5BF9\u4E8E\u4E00\u6BB5\u903B\u8F91\uFF1A<code dir="auto">\u5FAA\u73AF\u6267\u884C20\u6B21\u8BF7\u6C42\u5934\u8BBE\u7F6E\uFF0C\u5FAA\u73AF\u6267\u884C20\u6B21\u8BF7\u6C42\u5934\u83B7\u53D6\uFF0C\u5FAA\u73AF\u6267\u884C20\u6B21\u8BF7\u6C42\u5934\u79FB\u9664\u3002</code>\u6211\u4EEC\u5BF9\u6BD4\u4E86\u5206\u522B\u7528 Lua \u548C\u4E0D\u540C\u8BED\u8A00\u5B9E\u73B0\u7684 Wasm \u7684\u5904\u7406\u6027\u80FD\uFF0C\u4E0B\u9762\u662F\u5BF9\u5355\u4E2A\u8BF7\u6C42\u5EF6\u65F6\u7684\u5F71\u54CD\u5BF9\u6BD4\uFF1A</p>





























<table><thead><tr><th><strong>\u5B9E\u73B0\u8BED\u8A00</strong></th><th><strong>\u8BF7\u6C42\u5EF6\u65F6\u589E\u52A0</strong></th></tr></thead><tbody><tr><td>Lua</td><td>0.20\u6BEB\u79D2</td></tr><tr><td>Wasm (C++)</td><td>0.19\u6BEB\u79D2</td></tr><tr><td>Wasm (Go)</td><td>0.20\u6BEB\u79D2</td></tr><tr><td>Wasm (Rust)</td><td>0.21\u6BEB\u79D2</td></tr><tr><td>Wasm (AssemblyScript)</td><td>0.21\u6BEB\u79D2</td></tr></tbody></table>
<h3 id="\u7279\u6027\u4E09\u5B89\u5168\u6C99\u7BB1">\u7279\u6027\u4E09\uFF1A\u5B89\u5168\u6C99\u7BB1</h3>
<p>Envoy \u76EE\u524D\u652F\u6301\u591A\u79CD Wasm \u7684\u8FD0\u884C\u65F6\uFF0C\u4F8B\u5982 V8\uFF0CWAMR\uFF0Cwasmtime \u7B49\u7B49\uFF0C\u8FD9\u4E9B\u8FD0\u884C\u65F6\u5747\u63D0\u4F9B\u4E86\u5B89\u5168\u6C99\u7BB1\u80FD\u529B\uFF0C\u5373 Wasm \u63D2\u4EF6\u4E2D\u51FA\u73B0\u4E86\u8BBF\u95EE\u7A7A\u6307\u9488\u3001\u5F02\u5E38\u672A\u6355\u83B7\u7B49\u903B\u8F91\uFF0C\u4E5F\u4E0D\u4F1A\u4EE4 Envoy \u5BBF\u4E3B\u8FDB\u7A0B Crash\u3002\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\uFF0C\u5728\u63D2\u4EF6\u903B\u8F91\u51FA\u73B0\u5F02\u5E38\u540E\u8FDB\u884C Fail Open \u5904\u7406\uFF0C\u8DF3\u8FC7\u63D2\u4EF6\u7684\u6267\u884C\u903B\u8F91\uFF0C\u5C06\u5BF9\u4E1A\u52A1\u7684\u5F71\u54CD\u964D\u81F3\u6700\u4F4E\u3002</p>
<h2 id="\u5F00\u6E90\u793E\u533A">\u5F00\u6E90\u793E\u533A</h2>
<p>\u7279\u522B\u611F\u8C22 Istio/Envoy \u793E\u533A\u7684\u524D\u7F6E\u5DE5\u4F5C\uFF0C\u8BA9 Higress \u53EF\u4EE5\u5B9E\u73B0\u5BF9 Ingress \u8D44\u6E90\u542F\u7528 WasmPlugin \uFF0C\u589E\u5F3A\u4E86 Ingress Controller \u7684\u81EA\u5B9A\u4E49\u6269\u5C55\u80FD\u529B\u3002
\u7279\u522B\u611F\u8C22 Tetrate \u793E\u533A\u5B9E\u73B0\u7684 proxy-wasm-go-sdk\uFF0CHigress \u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u5C01\u88C5\u4E86 wasm-go sdk\uFF0C\u964D\u4F4E\u4E86\u5F00\u53D1\u63D2\u4EF6\u7684\u4E0A\u624B\u95E8\u69DB\u3002
Higress \u5BF9 Istio/Envoy \u7684 Wasm \u80FD\u529B\u505A\u4E86\u4E00\u4E9B Bugfix \u7684\u5DE5\u4F5C\uFF0C\u76EE\u524D\u5DF2\u7ECF\u90FD\u5408\u5E76\u8FDB\u4E86\u4E0A\u6E38\u793E\u533A\u3002\u540E\u7EED\u7684\u4E00\u4E9B Feature \u80FD\u529B\uFF0C\u4E5F\u4F1A\u6301\u7EED\u53CD\u54FA\u4E0A\u6E38\u793E\u533A\u3002
\u540C\u65F6\u6B22\u8FCE\u5927\u5BB6\u4E00\u8D77\u4E3A Higress \u7684\u63D2\u4EF6\u4EE5\u53CA\u5176\u4ED6\u793E\u533A\u751F\u6001\u6DFB\u7816\u52A0\u74E6\uFF0C\u4E3A Higress \u8D21\u732E\u8BF7\u53C2\u8003\u6587\u6863\uFF1A
<a href="https://higress.cn/docs/latest/developers/guide_dev/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.cn/docs/latest/developers/guide_dev/</a></p>`,n={title:"30\u884C\u4EE3\u7801\u5199\u4E00\u4E2AWasm Go\u63D2\u4EF6",keywords:["higress","wasm"],description:"\u5BF9\u300AHigress \u5F00\u6E90\u80CC\u540E\u7684\u53D1\u5C55\u5386\u7A0B\u548C\u4E0A\u624B Demo \u6F14\u793A\u300B\u76F4\u64AD\u6F14\u793A demo \u7684\u8BE6\u7EC6\u8BF4\u660E",author:"\u6F84\u6F6D",date:"2022-11-22",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/30-line-wasm.md",category:"case"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/30-line-wasm.md",i=void 0,o=function(){return`
## \u524D\u8A00
\u572811\u670815\u53F7\u7684\u76F4\u64AD \u300AHigress \u5F00\u6E90\u80CC\u540E\u7684\u53D1\u5C55\u5386\u7A0B\u548C\u4E0A\u624B Demo \u6F14\u793A\u300B\u4E2D\uFF0C\u4E3A\u5927\u5BB6\u6F14\u793A\u4E86 Higress \u7684 Wasm \u63D2\u4EF6\u5982\u4F55\u9762\u5411 Ingress \u8D44\u6E90\u8FDB\u884C\u914D\u7F6E\u751F\u6548\uFF0C\u672C\u6587\u5BF9\u5F53\u5929\u7684 Demo \u8FDB\u884C\u4E00\u4E2A\u56DE\u987E\uFF0C\u5E76\u8BF4\u660E\u80CC\u540E\u7684\u539F\u7406\u673A\u5236\u3002
<!--truncate-->
\u672C\u6587\u4E2D Demo \u8FD0\u884C\u7684\u524D\u63D0\uFF0C\u9700\u8981\u5728 K8s \u96C6\u7FA4\u4E2D\u5B89\u88C5\u4E86 Higress\uFF0C\u5E76\u751F\u6548\u4E86\u4E0B\u9762\u8FD9\u4EFD quickstart \u914D\u7F6E\uFF1A
[https://higress.cn/samples/quickstart.yaml](https://higress.cn/samples/quickstart.yaml)
\u8FD9\u4E2A Demo \u8981\u5B9E\u73B0\u7684\u529F\u80FD\u662F\u4E00\u4E2A Mock \u5E94\u7B54\u7684\u529F\u80FD\uFF0C\u9700\u8981\u5B9E\u73B0\u6839\u636E\u914D\u7F6E\u7684\u5185\u5BB9\uFF0C\u8FD4\u56DE HTTP \u5E94\u7B54\u3002
\u672C\u6587\u4F1A\u6309\u4EE5\u4E0B\u65B9\u5F0F\u8FDB\u884C\u4ECB\u7ECD\uFF1A

- \u7F16\u5199\u4EE3\u7801\uFF1A\u4EE3\u7801\u903B\u8F91\u89E3\u6790
- \u751F\u6548\u63D2\u4EF6\uFF1A\u8BF4\u660E\u4EE3\u7801\u5982\u4F55\u8FDB\u884C\u7F16\u8BD1\u6253\u5305\u5E76\u90E8\u7F72\u751F\u6548
- \u6D4B\u8BD5\u63D2\u4EF6\u529F\u80FD\uFF1A\u8BF4\u660E\u5168\u5C40\u7C92\u5EA6\uFF0C\u8DEF\u7531/\u57DF\u540D\u7EA7\u7C92\u5EA6\u5982\u4F55\u751F\u6548
- \u63D2\u4EF6\u751F\u6548\u539F\u7406\uFF1A\u5BF9\u6574\u4F53\u6D41\u7A0B\u8FDB\u884C\u56DE\u987E\uFF0C\u8BF4\u660E\u63D2\u4EF6\u751F\u6548\u7684\u539F\u7406
- \u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027\uFF1A\u4ECB\u7ECD Wasm \u63D2\u4EF6\u673A\u5236\u4E3A\u7F51\u5173\u63D2\u4EF6\u5F00\u53D1\u5E26\u6765\u7684\u53D8\u9769
## \u7F16\u5199\u4EE3\u7801

\`\`\`
package main

import (
    . "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
    "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
    "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
    "github.com/tidwall/gjson"
)

func main() {
    SetCtx(
        "my-plugin",
        ParseConfigBy(parseConfig),
        ProcessRequestHeadersBy(onHttpRequestHeaders),
    )
}

type MyConfig struct {
    content string
}

func parseConfig(json gjson.Result, config *MyConfig, log Log) error {
    config.content = json.Get("content").String()
    return nil
}

func onHttpRequestHeaders(ctx HttpContext, config MyConfig, log Log) types.Action {
    proxywasm.SendHttpResponse(200, nil, []byte(config.content), -1)
    return types.ActionContinue
}
\`\`\`
\u4E0A\u9762\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\u4E09\u4E2A\u51FD\u6570\uFF1A

- main\uFF1A\u63D2\u4EF6\u901A\u8FC7 main \u51FD\u6570\u5B9A\u4E49\u63D2\u4EF6\u4E0A\u4E0B\u6587\uFF0C\u5305\u62EC\u63D2\u4EF6\u540D\u79F0\uFF0C\u7528\u4E8E\u89E3\u6790\u914D\u7F6E\u7684\u51FD\u6570\uFF0C\u4EE5\u53CA\u7528\u4E8E\u5904\u7406\u8BF7\u6C42/\u5E94\u7B54\u7684\u51FD\u6570
- parseConfig\uFF1A\u8FD9\u4E2A\u51FD\u6570\u901A\u8FC7\u5728 SetCtx \u4E2D\u6307\u5B9A\u7684 ParseConfigBy \u88AB\u6302\u8F7D\u5230\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u9636\u6BB5\uFF0C\u4F20\u5165\u7684\u4E09\u4E2A\u53C2\u6570\u5206\u522B\u662F\uFF1A
   - json\uFF1A\u4F20\u5165\u63D2\u4EF6\u7684\u914D\u7F6E\uFF0C\u5C06\u7EDF\u4E00\u5E8F\u5217\u5316\u4E3A\u4E00\u4E2A json \u5B57\u5178\u5BF9\u8C61\uFF0C\u63D0\u4F9B parseConfig \u8FDB\u884C\u89E3\u6790
   - config\uFF1AparseConfig \u5C06\u89E3\u6790\u540E\u7684\u63D2\u4EF6\u914D\u7F6E\u8F93\u51FA\u5230\u8FD9\u4E2A MyConfig \u5BF9\u8C61
   - log\uFF1A\u63D0\u4F9B\u65E5\u5FD7\u8F93\u51FA\u63A5\u53E3
- onHttpRequestHeaders\uFF1A\u51FD\u6570\u4E2D\u8C03\u7528\u7684 proxywasm.SendHttpResponse\uFF0C\u7528\u4E8E\u5B9E\u73B0\u76F4\u63A5\u8FD4\u56DE HTTP \u5E94\u7B54\uFF0C\u8FD9\u4E2A\u51FD\u6570\u901A\u8FC7\u5728 SetCtx \u4E2D\u6307\u5B9A\u7684 ProcessRequestHeadersBy \u88AB\u6302\u8F7D\u5230\u89E3\u6790\u8BF7\u6C42 Header \u7684\u6267\u884C\u9636\u6BB5\uFF0C\u5176\u4ED6\u7684\u6302\u8F7D\u65B9\u5F0F\u8FD8\u6709\uFF1A
   - ProcessRequestBodyBy\uFF1A\u6302\u8F7D\u5230\u89E3\u6790\u8BF7\u6C42 Body \u7684\u6267\u884C\u9636\u6BB5
   - ProcessResponseHeadersBy\uFF1A\u6302\u8F7D\u5230\u6784\u9020\u5E94\u7B54 Header \u7684\u6267\u884C\u9636\u6BB5
   - ProcessResponseBodyBy\uFF1A\u6302\u8F7D\u5230\u6784\u9020\u5E94\u7B54 Body \u7684\u6267\u884C\u9636\u6BB5

      \u4F20\u5165\u7684\u4E09\u4E2A\u53C2\u6570\u5206\u522B\u662F\uFF1A

   - ctx\uFF1A\u7528\u4E8E\u83B7\u53D6\u8BF7\u6C42\u4E0A\u4E0B\u6587\uFF0C\u5982 scheme/method/path \u7B49\uFF0C\u901A\u8FC7 ctx \u53EF\u4EE5\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4E0A\u4E0B\u6587\uFF0C\u80FD\u8DE8\u6267\u884C\u9636\u6BB5\u8BBF\u95EE
   - config\uFF1A\u63D0\u4F9B parseConfig \u89E3\u6790\u597D\u7684\u81EA\u5B9A\u4E49\u914D\u7F6E
   - log\uFF1A\u63D0\u4F9B\u65E5\u5FD7\u8F93\u51FA\u63A5\u53E3

\u8FD9\u4E2A 30 \u884C\u4EE3\u7801\u5B9E\u73B0\u7684\u63D2\u4EF6\u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u8FD9\u91CC\u6709\u4E00\u4E9B\u529F\u80FD\u76F8\u5BF9\u590D\u6742\u7684\u4F8B\u5B50\uFF1A[https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions)
\u8FD9\u91CC\u6709\u63D2\u4EF6 sdk \u7684\u8BE6\u7EC6\u4F7F\u7528\u6587\u6863\uFF1A
[https://higress.cn/docs/latest/user/wasm-go/](https://higress.cn/docs/latest/user/wasm-go/)
\u8FD9\u4E2A\u63D2\u4EF6 sdk \u662F\u57FA\u4E8E Tetrate \u793E\u533A\u7684 proxy-wasm-go-sdk \u5B9E\u73B0\u7684\uFF0C\u5982\u679C\u5173\u6CE8\u66F4\u5E95\u5C42\u7684\u7EC6\u8282\uFF0C\u53EF\u4EE5\u67E5\u770B\uFF1A
[https://github.com/tetratelabs/proxy-wasm-go-sdk](https://github.com/tetratelabs/proxy-wasm-go-sdk)
[https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/plugin_wrapper.go)
\u53EF\u4EE5\u770B\u5230\uFF0CHigress \u7684 wasm-go sdk \u662F\u901A\u8FC7 Go 1.18 \u5F15\u5165\u7684\u6CDB\u578B\u7279\u6027\u5C01\u88C5\u4E86\u63D2\u4EF6\u4E0A\u4E0B\u6587\u5904\u7406\u7EC6\u8282\uFF0C\u4ECE\u800C\u964D\u4F4E\u63D2\u4EF6\u5F00\u53D1\u6240\u9700\u4EE3\u7801\u91CF\uFF0C\u5F00\u53D1\u8005\u53EA\u7528\u5173\u5FC3\u914D\u7F6E\u89E3\u6790\u548C\u8BF7\u6C42\u5E94\u7B54\u5904\u7406\u7684\u903B\u8F91\u3002
## \u751F\u6548\u63D2\u4EF6
\u7F16\u5199\u5B8C\u6210\u4EE3\u7801\u540E\uFF0C\u4E00\u5171\u6709\u4E09\u4E2A\u6B65\u9AA4\uFF0C\u5B9E\u73B0\u63D2\u4EF6\u903B\u8F91\u7684\u751F\u6548\uFF1A

1. \u7F16\u8BD1\uFF1A\u5C06 go \u4EE3\u7801\u7F16\u8BD1\u6210 Wasm \u683C\u5F0F\u6587\u4EF6
2. \u955C\u50CF\u63A8\u9001\uFF1A\u5C06 Wasm \u6587\u4EF6\u6253\u5305\u6210 docker \u955C\u50CF\uFF0C\u5E76\u63A8\u9001\u81F3\u955C\u50CF\u4ED3\u5E93
3. \u4E0B\u53D1\u914D\u7F6E\uFF1A\u5728 K8s \u4E0A\u521B\u5EFA WasmPlugin \u8D44\u6E90
### \u7F16\u8BD1
\u5C06\u4E0A\u9762\u7684 Go \u6587\u4EF6 main.go \u7F16\u8BD1\u6210 plugin.wasm
\`\`\`bash
tinygo build -o plugin.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' main.go
\`\`\`
### \u955C\u50CF\u63A8\u9001
\u7F16\u5199 Dockerfile
\`\`\`dockerfile
FROM scratch
COPY plugin.wasm ./
\`\`\`
\u6784\u5EFA\u5E76\u63A8\u9001 Docker \u955C\u50CF \uFF08\u8FD9\u91CC\u793A\u4F8B\u7528\u7684\u662F Higress \u7684\u5B98\u65B9\u955C\u50CF\u4ED3\u5E93\uFF09
\`\`\`bash
docker build -t higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0 .
docker push higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0
\`\`\`
### \u4E0B\u53D1\u914D\u7F6E
\u7F16\u5199 wasmplugin.yaml\uFF0C\u914D\u7F6E\u8BF4\u660E\uFF1A

- selector\uFF1A \u9009\u4E2D\u4E86\u9ED8\u8BA4\u5B89\u88C5\u5728 higress-system \u547D\u540D\u7A7A\u95F4\u4E0B\u7684 higress-gateway \u751F\u6548\u8FD9\u4EFD\u63D2\u4EF6
- pluginConfig\uFF1A\u63D2\u4EF6\u914D\u7F6E\uFF0C\u6700\u7EC8\u4F1A\u88AB\u8F6C\u6362\u6210\u4E0A\u9762\u4EE3\u7801\u4E2D\u7684 MyConfig \u5BF9\u8C61
- url\uFF1A\u586B\u5199\u955C\u50CF\u5730\u5740\uFF0C\u9700\u8981\u4EE5"oci://"\u5F00\u5934

\u9664\u4E86\u8FD9\u4E9B\u914D\u7F6E\u5916\uFF0C\u8FD8\u53EF\u4EE5\u5B9A\u4E49\u63D2\u4EF6\u7684\u6267\u884C\u9636\u6BB5\u548C\u4F18\u5148\u7EA7\u7B49\u8FDB\u9636\u914D\u7F6E\uFF0C\u53EF\u4EE5\u53C2\u8003 Istio API \u5B98\u65B9\u6587\u6863\uFF1A[https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/)
\`\`\`yaml
# wasmplugin.yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: request-block
  namespace: higress-system
spec:
  defaultConfig:
    block_urls:
    - "swagger.html"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0
\`\`\`
\u901A\u8FC7 kubectl \u521B\u5EFA\u8FD9\u4E2A\u8D44\u6E90
\`\`\`bash
kubectl apply -f wasmplugin.yaml
\`\`\`
## \u6D4B\u8BD5\u63D2\u4EF6\u529F\u80FD
\u57FA\u4E8E\u4E4B\u524D\u751F\u6548\u7684 quickstart.yaml\uFF0C\u76EE\u524D\u96C6\u7FA4\u4E2D\u7684 Ingress \u8BBF\u95EE\u62D3\u6251\u5982\u4E0B\u6240\u793A\uFF1A
### ![ing-topo.png](https://img.alicdn.com/imgextra/i3/O1CN0178hYAV1sBTSczmfAf_!!6000000005728-2-tps-646-605.png)
\u672A\u751F\u6548\u63D2\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF1A

- \u8BF7\u6C42\`/foo\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"foo"\`
- \u8BF7\u6C42\`/bar\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"bar"\`
### \u5168\u5C40\u751F\u6548
\u57FA\u4E8E\u4E0A\u6587\u751F\u6548\u63D2\u4EF6\u9636\u6BB5\uFF0C\u4E0B\u53D1\u7684 wasmplugin.yaml\uFF0C\u751F\u6548\u63D2\u4EF6\u540E\u6548\u679C\u5982\u4E0B\uFF1A

- \u8BF7\u6C42\`/foo\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"hello higress"\`
- \u8BF7\u6C42\`/bar\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"hello higress"\`
### \u57DF\u540D&\u8DEF\u7531\u7EA7\u751F\u6548
\u5C06 wasmplugin.yaml \u914D\u7F6E\u4FEE\u6539\u5982\u4E0B\uFF1A
\`\`\`yaml
# wasmplugin.yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: request-block
  namespace: higress-system
spec:
  defaultConfig:
   # \u8DDF\u4E0A\u9762\u4F8B\u5B50\u4E00\u6837\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u4F1A\u5168\u5C40\u751F\u6548\uFF0C\u4F46\u5982\u679C\u88AB\u4E0B\u9762\u89C4\u5219\u5339\u914D\u5230\uFF0C\u5219\u4F1A\u6539\u4E3A\u6267\u884C\u547D\u4E2D\u89C4\u5219\u7684\u914D\u7F6E
   block_urls:
   - "swagger.html"
   matchRules:
   # \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E
  - ingress:
    - default/foo
     # default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E
    config:
      block_bodies:
      - "foo"
  - ingress:
    - default/bar
    # default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A bar \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E
    config:
      block_bodies:
      - "bar"
   # \u57DF\u540D\u7EA7\u751F\u6548\u914D\u7F6E
  - domain:
    - "*.example.com"
    # \u82E5\u8BF7\u6C42\u5339\u914D\u4E86\u4E0A\u9762\u7684\u57DF\u540D, \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E
    config:
      block_bodies:
      - "foo"
      - "bar"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0
\`\`\`
\u5728 pluginConfig \u4E2D\u589E\u52A0\u4E86 \`_rules_\`  \u89C4\u5219\u5217\u8868\uFF0C\u89C4\u5219\u4E2D\u53EF\u4EE5\u6307\u5B9A\u5339\u914D\u65B9\u5F0F\uFF0C\u5E76\u586B\u5199\u5BF9\u5E94\u751F\u6548\u7684\u914D\u7F6E:

- _match_route_\uFF1A\u5339\u914D Ingress \u751F\u6548\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A\uFF1AIngress \u6240\u5728\u547D\u540D\u7A7A\u95F4 + "/" + Ingress \u540D\u79F0
- _match_domain_\uFF1A\u5339\u914D\u57DF\u540D\u751F\u6548\uFF0C\u586B\u5199\u57DF\u540D\u5373\u53EF\uFF0C\u652F\u6301\u901A\u914D\u7B26

\u751F\u6548\u8FD9\u4EFD\u4FEE\u6539\u540E\u7684\u914D\u7F6E\uFF1A
\`\`\`yaml
kubectl apply -f wasmplugin.yaml
\`\`\`
\u53EF\u4EE5\u770B\u5230\u6548\u679C\u5982\u4E0B\uFF1A

- \u8BF7\u6C42\`/foo\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"hello foo"\` (\u5339\u914D\u5230\u7B2C\u4E00\u6761 rule)
- \u8BF7\u6C42\`/bar\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"hello bar"\` (\u5339\u914D\u5230\u7B2C\u4E8C\u6761 rule)
- \u8BF7\u6C42\`www.example.com\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"hello world"\` \uFF08\u5339\u914D\u5230\u7B2C\u4E09\u6761 rule\uFF09
- \u8BF7\u6C42\`www.abc.com\` \u5C06\u8FD4\u56DE HTTP \u5E94\u7B54 \`"hello higress"\` \uFF08\u6CA1\u6709\u5339\u914D\u7684 rule\uFF0C\u4F7F\u7528\u5168\u5C40\u914D\u7F6E\uFF09
## \u63D2\u4EF6\u751F\u6548\u539F\u7406
![wasm.png](https://img.alicdn.com/imgextra/i4/O1CN01PO4HYC1h7qYHonHHZ_!!6000000004231-2-tps-1100-537.png)

\u8FD9\u91CC\u5BF9\u63D2\u4EF6\u7684\u751F\u6548\u673A\u5236\u7B80\u5355\u505A\u4E2A\u8BF4\u660E\uFF1A

1. \u7528\u6237\u5C06\u4EE3\u7801\u7F16\u8BD1\u6210 wasm \u6587\u4EF6
2. \u7528\u6237\u5C06 wasm \u6587\u4EF6\u6784\u5EFA\u6210 docker \u955C\u50CF
3. \u7528\u6237\u5C06 docker \u955C\u50CF\u63A8\u9001\u81F3\u955C\u50CF\u4ED3\u5E93
4. \u7528\u6237\u521B\u5EFA WasmPlugin \u8D44\u6E90
5. Istio watch \u5230 WasmPlugin \u8D44\u6E90\u7684\u53D8\u5316
6. Higress Gateway \u4E2D\u7684 xDS proxy \u8FDB\u7A0B\u4ECE Istio \u83B7\u53D6\u5230\u914D\u7F6E\uFF0C\u53D1\u73B0\u63D2\u4EF6\u7684\u955C\u50CF\u5730\u5740
7. xDS proxy \u4ECE\u955C\u50CF\u4ED3\u5E93\u62C9\u53D6\u955C\u50CF
8. xDS proxy \u4ECE\u955C\u50CF\u4E2D\u63D0\u53D6\u51FA wasm \u6587\u4EF6
9. Higress Gateway \u4E2D\u7684 envoy \u8FDB\u7A0B\u4ECE xDS proxy \u83B7\u53D6\u5230\u914D\u7F6E\uFF0C\u53D1\u73B0 wasm \u6587\u4EF6\u7684\u672C\u5730\u8DEF\u5F84
10. envoy \u4ECE\u672C\u5730\u6587\u4EF6\u4E2D\u52A0\u8F7D wasm \u6587\u4EF6

\u8FD9\u91CC envoy \u83B7\u53D6\u914D\u7F6E\u5E76\u52A0\u8F7D wasm \u6587\u4EF6\u4F7F\u7528\u5230\u4E86 ECDS (Extension Config Discovery Service)\u7684\u673A\u5236\uFF0C\u5B9E\u73B0\u4E86 wasm \u6587\u4EF6\u66F4\u65B0\uFF0C\u76F4\u63A5\u70ED\u52A0\u8F7D\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u4EFB\u4F55\u8FDE\u63A5\u4E2D\u65AD\uFF0C\u4E1A\u52A1\u6D41\u91CF\u5B8C\u5168\u65E0\u635F\u3002
## \u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027
\u4E0A\u9762\u7684 Wasm \u63D2\u4EF6\u673A\u5236\u4E3A\u7F51\u5173\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5F00\u53D1\u5E26\u6765\u4E86\u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027\u3002
### \u7279\u6027\u4E00\uFF1A\u63D2\u4EF6\u751F\u547D\u5468\u671F\u548C\u7F51\u5173\u89E3\u8026
\u8FD9\u4E2A\u7279\u6027\u4E3B\u8981\u5F97\u76CA\u4E8E Istio \u7684 WasmPlugin \u673A\u5236\u8BBE\u8BA1\u3002\u53EF\u4EE5\u548C K8s Nginx Ingress \u7684\u63D2\u4EF6\u673A\u5236\u505A\u4E2A\u5BF9\u6BD4\uFF1A
> reference: [https://github.com/kubernetes/ingress-nginx/blob/main/rootfs/etc/nginx/lua/plugins/README.md](https://github.com/kubernetes/ingress-nginx/blob/main/rootfs/etc/nginx/lua/plugins/README.md)
> ### Installing a plugin
> There are two options:
> - mount your plugin into /etc/nginx/lua/plugins/<your plugin name /> in the ingress-nginx pod
> - build your own ingress-nginx image like it is done in the [example](https://github.com/ElvinEfendi/ingress-nginx-openidc/tree/master/rootfs/etc/nginx/lua/plugins/openidc) and install your plugin during image build

\u53EF\u4EE5\u770B\u5230 Nginx Ingress \u52A0\u8F7D\u81EA\u5B9A\u4E49\u63D2\u4EF6\uFF0C\u9700\u8981\u5C06 lua \u6587\u4EF6\u6302\u8F7D\u8FDB pod\uFF0C\u6216\u8005\u5728\u6784\u5EFA\u955C\u50CF\u65F6\u88C5\u5165\u3002\u8FD9\u6837\u5C31\u5C06\u63D2\u4EF6\u7684\u751F\u547D\u5468\u671F\u8DDF\u7F51\u5173\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u63D2\u4EF6\u903B\u8F91\u66F4\u65B0\uFF0C\u9700\u8981\u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u7F51\u5173\u4E5F\u9700\u8981\u53D1\u5E03\u65B0\u7248\u672C\u6216\u8005\u91CD\u65B0\u90E8\u7F72\u3002
\u4F7F\u7528 WasmPlugin \u7684\u673A\u5236\uFF0C\u63D2\u4EF6\u9700\u8981\u53D1\u5E03\u65B0\u7248\u672C\uFF0C\u53EA\u9700\u6784\u5EFA\u63D2\u4EF6\u81EA\u8EAB\u7684\u955C\u50CF\u5E76\u8FDB\u884C\u4E0B\u53D1\u751F\u6548\uFF0C\u800C\u4E14\u53EF\u4EE5\u57FA\u4E8E\u955C\u50CF\u7684 tag \u8FDB\u884C\u63D2\u4EF6\u7684\u7248\u672C\u7BA1\u7406\u3002\u8FD9\u6837\u63D2\u4EF6\u53D8\u66F4\uFF0C\u4E0D\u4EC5\u65E0\u9700\u91CD\u65B0\u90E8\u7F72\u7F51\u5173\uFF0C\u7ED3\u5408 Envoy \u7684 ECDS \u673A\u5236\u5BF9\u6D41\u91CF\u4E5F\u662F\u5B8C\u5168\u65E0\u635F\u3002
### \u7279\u6027\u4E8C\uFF1A\u9AD8\u6027\u80FD\u7684\u591A\u8BED\u8A00\u652F\u6301
\u57FA\u4E8E Wasm \u7684\u80FD\u529B\uFF0C\u53EF\u4EE5\u7528\u591A\u79CD\u8BED\u8A00\u7F16\u5199\u63D2\u4EF6\uFF0C\u5BF9\u5F00\u53D1\u4EBA\u5458\u66F4\u52A0\u53CB\u597D\u3002\u5B9E\u73B0\u591A\u8BED\u8A00\u5F00\u53D1\u63D2\u4EF6\u7684\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u57FA\u4E8E RPC \u548C\u7F51\u5173\u8FDB\u7A0B\u901A\u4FE1\u7684\u5916\u7F6E\u8FDB\u7A0B/\u670D\u52A1\u63D2\u4EF6\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u4F1A\u6709\u989D\u5916\u7684 IO \u5F00\u9500\uFF0C\u5E76\u4E14\u9644\u52A0\u7684\u8FDB\u7A0B/\u670D\u52A1\u4E5F\u5E26\u6765\u989D\u5916\u7684\u8FD0\u7EF4\u590D\u6742\u5EA6\u3002\u76EE\u524D\u5927\u5BB6\u5BF9 Wasm \u63D2\u4EF6\u7684\u6027\u80FD\u6BD4\u8F83\u5173\u5FC3\uFF0C\u4ECE\u6211\u4EEC\u7684\u6D4B\u8BD5\u6570\u636E\u6765\u770B\uFF0C\u6307\u4EE4\u6267\u884C\u6027\u80FD\u76F8\u6BD4\u539F\u751F\u7684 C++ \u8BED\u8A00\u786E\u5B9E\u6709\u5DEE\u8DDD\uFF0C\u4F46\u6027\u80FD\u548C Lua \u6301\u5E73\uFF0C\u4E14\u8FDC\u597D\u4E8E\u5916\u7F6E\u63D2\u4EF6\u3002
\u5BF9\u4E8E\u4E00\u6BB5\u903B\u8F91\uFF1A\`\u5FAA\u73AF\u6267\u884C20\u6B21\u8BF7\u6C42\u5934\u8BBE\u7F6E\uFF0C\u5FAA\u73AF\u6267\u884C20\u6B21\u8BF7\u6C42\u5934\u83B7\u53D6\uFF0C\u5FAA\u73AF\u6267\u884C20\u6B21\u8BF7\u6C42\u5934\u79FB\u9664\u3002\`\u6211\u4EEC\u5BF9\u6BD4\u4E86\u5206\u522B\u7528 Lua \u548C\u4E0D\u540C\u8BED\u8A00\u5B9E\u73B0\u7684 Wasm \u7684\u5904\u7406\u6027\u80FD\uFF0C\u4E0B\u9762\u662F\u5BF9\u5355\u4E2A\u8BF7\u6C42\u5EF6\u65F6\u7684\u5F71\u54CD\u5BF9\u6BD4\uFF1A

| **\u5B9E\u73B0\u8BED\u8A00** | **\u8BF7\u6C42\u5EF6\u65F6\u589E\u52A0** |
| --- | --- |
| Lua | 0.20\u6BEB\u79D2 |
| Wasm (C++) | 0.19\u6BEB\u79D2 |
| Wasm (Go) | 0.20\u6BEB\u79D2 |
| Wasm (Rust) | 0.21\u6BEB\u79D2 |
| Wasm (AssemblyScript) | 0.21\u6BEB\u79D2 |

### \u7279\u6027\u4E09\uFF1A\u5B89\u5168\u6C99\u7BB1
Envoy \u76EE\u524D\u652F\u6301\u591A\u79CD Wasm \u7684\u8FD0\u884C\u65F6\uFF0C\u4F8B\u5982 V8\uFF0CWAMR\uFF0Cwasmtime \u7B49\u7B49\uFF0C\u8FD9\u4E9B\u8FD0\u884C\u65F6\u5747\u63D0\u4F9B\u4E86\u5B89\u5168\u6C99\u7BB1\u80FD\u529B\uFF0C\u5373 Wasm \u63D2\u4EF6\u4E2D\u51FA\u73B0\u4E86\u8BBF\u95EE\u7A7A\u6307\u9488\u3001\u5F02\u5E38\u672A\u6355\u83B7\u7B49\u903B\u8F91\uFF0C\u4E5F\u4E0D\u4F1A\u4EE4 Envoy \u5BBF\u4E3B\u8FDB\u7A0B Crash\u3002\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\uFF0C\u5728\u63D2\u4EF6\u903B\u8F91\u51FA\u73B0\u5F02\u5E38\u540E\u8FDB\u884C Fail Open \u5904\u7406\uFF0C\u8DF3\u8FC7\u63D2\u4EF6\u7684\u6267\u884C\u903B\u8F91\uFF0C\u5C06\u5BF9\u4E1A\u52A1\u7684\u5F71\u54CD\u964D\u81F3\u6700\u4F4E\u3002
## \u5F00\u6E90\u793E\u533A
\u7279\u522B\u611F\u8C22 Istio/Envoy \u793E\u533A\u7684\u524D\u7F6E\u5DE5\u4F5C\uFF0C\u8BA9 Higress \u53EF\u4EE5\u5B9E\u73B0\u5BF9 Ingress \u8D44\u6E90\u542F\u7528 WasmPlugin \uFF0C\u589E\u5F3A\u4E86 Ingress Controller \u7684\u81EA\u5B9A\u4E49\u6269\u5C55\u80FD\u529B\u3002
\u7279\u522B\u611F\u8C22 Tetrate \u793E\u533A\u5B9E\u73B0\u7684 proxy-wasm-go-sdk\uFF0CHigress \u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u5C01\u88C5\u4E86 wasm-go sdk\uFF0C\u964D\u4F4E\u4E86\u5F00\u53D1\u63D2\u4EF6\u7684\u4E0A\u624B\u95E8\u69DB\u3002
Higress \u5BF9 Istio/Envoy \u7684 Wasm \u80FD\u529B\u505A\u4E86\u4E00\u4E9B Bugfix \u7684\u5DE5\u4F5C\uFF0C\u76EE\u524D\u5DF2\u7ECF\u90FD\u5408\u5E76\u8FDB\u4E86\u4E0A\u6E38\u793E\u533A\u3002\u540E\u7EED\u7684\u4E00\u4E9B Feature \u80FD\u529B\uFF0C\u4E5F\u4F1A\u6301\u7EED\u53CD\u54FA\u4E0A\u6E38\u793E\u533A\u3002
\u540C\u65F6\u6B22\u8FCE\u5927\u5BB6\u4E00\u8D77\u4E3A Higress \u7684\u63D2\u4EF6\u4EE5\u53CA\u5176\u4ED6\u793E\u533A\u751F\u6001\u6DFB\u7816\u52A0\u74E6\uFF0C\u4E3A Higress \u8D21\u732E\u8BF7\u53C2\u8003\u6587\u6863\uFF1A
[https://higress.cn/docs/latest/developers/guide_dev/](https://higress.cn/docs/latest/developers/guide_dev/)

`},t=function(){return s},p=function(){return[{depth:2,slug:"\u524D\u8A00",text:"\u524D\u8A00"},{depth:2,slug:"\u7F16\u5199\u4EE3\u7801",text:"\u7F16\u5199\u4EE3\u7801"},{depth:2,slug:"\u751F\u6548\u63D2\u4EF6",text:"\u751F\u6548\u63D2\u4EF6"},{depth:3,slug:"\u7F16\u8BD1",text:"\u7F16\u8BD1"},{depth:3,slug:"\u955C\u50CF\u63A8\u9001",text:"\u955C\u50CF\u63A8\u9001"},{depth:3,slug:"\u4E0B\u53D1\u914D\u7F6E",text:"\u4E0B\u53D1\u914D\u7F6E"},{depth:2,slug:"\u6D4B\u8BD5\u63D2\u4EF6\u529F\u80FD",text:"\u6D4B\u8BD5\u63D2\u4EF6\u529F\u80FD"},{depth:3,slug:"",text:""},{depth:3,slug:"\u5168\u5C40\u751F\u6548",text:"\u5168\u5C40\u751F\u6548"},{depth:3,slug:"\u57DF\u540D\u8DEF\u7531\u7EA7\u751F\u6548",text:"\u57DF\u540D&\u8DEF\u7531\u7EA7\u751F\u6548"},{depth:2,slug:"\u63D2\u4EF6\u751F\u6548\u539F\u7406",text:"\u63D2\u4EF6\u751F\u6548\u539F\u7406"},{depth:2,slug:"\u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027",text:"\u4E09\u4E2A\u9769\u547D\u6027\u7684\u7279\u6027"},{depth:3,slug:"\u7279\u6027\u4E00\u63D2\u4EF6\u751F\u547D\u5468\u671F\u548C\u7F51\u5173\u89E3\u8026",text:"\u7279\u6027\u4E00\uFF1A\u63D2\u4EF6\u751F\u547D\u5468\u671F\u548C\u7F51\u5173\u89E3\u8026"},{depth:3,slug:"installing-a-plugin",text:"Installing a plugin"},{depth:3,slug:"\u7279\u6027\u4E8C\u9AD8\u6027\u80FD\u7684\u591A\u8BED\u8A00\u652F\u6301",text:"\u7279\u6027\u4E8C\uFF1A\u9AD8\u6027\u80FD\u7684\u591A\u8BED\u8A00\u652F\u6301"},{depth:3,slug:"\u7279\u6027\u4E09\u5B89\u5168\u6C99\u7BB1",text:"\u7279\u6027\u4E09\uFF1A\u5B89\u5168\u6C99\u7BB1"},{depth:2,slug:"\u5F00\u6E90\u793E\u533A",text:"\u5F00\u6E90\u793E\u533A"}]},e=c((f,h,E)=>{const{layout:x,...l}=n;return l.file=a,l.url=i,r`${g()}${u(s)}`})});export{e as Content,m as __tla,t as compiledContent,e as default,a as file,n as frontmatter,p as getHeadings,o as rawContent,i as url};
