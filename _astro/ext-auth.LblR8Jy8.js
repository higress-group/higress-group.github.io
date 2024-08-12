import{c as p,__tla as l}from"./astro-component.CD2fzakh.js";import{r,m as u,u as v,__tla as h}from"./constant.DHuwOiyc.js";import{__tla as x}from"./astro/assets-service.Bk7KqR8o.js";let t,i,a,s,o,c,d,E=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">ext-auth</code> \u63D2\u4EF6\u5B9E\u73B0\u4E86\u5411\u5916\u90E8\u6388\u6743\u670D\u52A1\u53D1\u9001\u9274\u6743\u8BF7\u6C42\uFF0C\u4EE5\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BF7\u6C42\u662F\u5426\u5F97\u5230\u6388\u6743\u3002\u8BE5\u63D2\u4EF6\u5B9E\u73B0\u65F6\u53C2\u8003\u4E86Envoy\u539F\u751F\u7684<a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ext_authz filter</a>\uFF0C\u5B9E\u73B0\u4E86\u539F\u751Ffilter\u4E2D\u5BF9\u63A5HTTP\u670D\u52A1\u7684\u90E8\u5206\u80FD\u529B</p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">http_service</code></td><td>object</td><td>\u662F</td><td>-</td><td>\u5916\u90E8\u6388\u6743\u670D\u52A1\u914D\u7F6E</td></tr><tr><td><code dir="auto">failure_mode_allow</code></td><td>bool</td><td>\u5426</td><td>false</td><td>\u5F53\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u5373\u4F7F\u4E0E\u6388\u6743\u670D\u52A1\u7684\u901A\u4FE1\u5931\u8D25\uFF0C\u6216\u8005\u6388\u6743\u670D\u52A1\u8FD4\u56DE\u4E86 HTTP 5xx \u9519\u8BEF\uFF0C\u4ECD\u4F1A\u63A5\u53D7\u5BA2\u6237\u7AEF\u8BF7\u6C42</td></tr><tr><td><code dir="auto">failure_mode_allow_header_add</code></td><td>bool</td><td>\u5426</td><td>false</td><td>\u5F53 <code dir="auto">failure_mode_allow</code> \u548C <code dir="auto">failure_mode_allow_header_add</code> \u90FD\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u82E5\u4E0E\u6388\u6743\u670D\u52A1\u7684\u901A\u4FE1\u5931\u8D25\uFF0C\u6216\u6388\u6743\u670D\u52A1\u8FD4\u56DE\u4E86 HTTP 5xx \u9519\u8BEF\uFF0C\u90A3\u4E48\u8BF7\u6C42\u5934\u4E2D\u5C06\u4F1A\u6DFB\u52A0 <code dir="auto">x-envoy-auth-failure-mode-allowed: true</code></td></tr><tr><td><code dir="auto">status_on_error</code></td><td>int</td><td>\u5426</td><td>403</td><td>\u5F53\u6388\u6743\u670D\u52A1\u65E0\u6CD5\u8BBF\u95EE\u6216\u72B6\u6001\u7801\u4E3A 5xx \u65F6\uFF0C\u8BBE\u7F6E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684 HTTP \u72B6\u6001\u7801\u3002\u9ED8\u8BA4\u72B6\u6001\u7801\u662F <code dir="auto">403</code></td></tr></tbody></table>
<p><code dir="auto">http_service</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">endpoint_mode</code></td><td>string</td><td>\u5426</td><td>envoy</td><td><code dir="auto">envoy</code> , <code dir="auto">forward_auth</code> \u4E2D\u9009\u586B\u4E00\u9879</td></tr><tr><td><code dir="auto">endpoint</code></td><td>object</td><td>\u662F</td><td>-</td><td>\u53D1\u9001\u9274\u6743\u8BF7\u6C42\u7684 HTTP \u670D\u52A1\u4FE1\u606F</td></tr><tr><td><code dir="auto">timeout</code></td><td>int</td><td>\u5426</td><td>1000</td><td><code dir="auto">ext-auth</code> \u670D\u52A1\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr><tr><td><code dir="auto">authorization_request</code></td><td>object</td><td>\u5426</td><td>-</td><td>\u53D1\u9001\u9274\u6743\u8BF7\u6C42\u914D\u7F6E</td></tr><tr><td><code dir="auto">authorization_response</code></td><td>object</td><td>\u5426</td><td>-</td><td>\u5904\u7406\u9274\u6743\u54CD\u5E94\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">endpoint</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">service_name</code></td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8F93\u5165\u6388\u6743\u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 <code dir="auto">ext-auth.dns</code> \u3001<code dir="auto">ext-auth.my-ns.svc.cluster.local</code></td></tr><tr><td><code dir="auto">service_port</code></td><td>int</td><td>\u5426</td><td>80</td><td>\u8F93\u5165\u6388\u6743\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td><code dir="auto">path_prefix</code></td><td>string</td><td><code dir="auto">endpoint_mode</code> \u4E3A<code dir="auto">envoy</code>\u65F6\u5FC5\u586B</td><td></td><td><code dir="auto">endpoint_mode</code> \u4E3A<code dir="auto">envoy</code> \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5411\u6388\u6743\u670D\u52A1\u53D1\u9001\u8BF7\u6C42\u7684\u8BF7\u6C42\u8DEF\u5F84\u524D\u7F00</td></tr><tr><td><code dir="auto">request_method</code></td><td>string</td><td>\u5426</td><td>GET</td><td><code dir="auto">endpoint_mode</code> \u4E3A<code dir="auto">forward_auth</code> \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5411\u6388\u6743\u670D\u52A1\u53D1\u9001\u8BF7\u6C42\u7684HTTP Method</td></tr><tr><td><code dir="auto">path</code></td><td>string</td><td><code dir="auto">endpoint_mode</code> \u4E3A<code dir="auto">forward_auth</code>\u65F6\u5FC5\u586B</td><td>-</td><td><code dir="auto">endpoint_mode</code> \u4E3A<code dir="auto">forward_auth</code> \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5411\u6388\u6743\u670D\u52A1\u53D1\u9001\u8BF7\u6C42\u7684\u8BF7\u6C42\u8DEF\u5F84</td></tr></tbody></table>
<p><code dir="auto">authorization_request</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>








































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">allowed_headers</code></td><td>array of StringMatcher</td><td>\u5426</td><td>-</td><td>\u5F53\u8BBE\u7F6E\u540E\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u5C06\u6DFB\u52A0\u5230\u6388\u6743\u670D\u52A1\u8BF7\u6C42\u4E2D\u7684\u8BF7\u6C42\u5934\u4E2D\u3002\u9664\u4E86\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5934\u90E8\u5339\u914D\u89C4\u5219\u5916\uFF0C\u6388\u6743\u670D\u52A1\u8BF7\u6C42\u4E2D\u4F1A\u81EA\u52A8\u5305\u542B <code dir="auto">Authorization</code> \u8FD9\u4E2AHTTP\u5934\uFF08 <code dir="auto">endpoint_mode</code> \u4E3A <code dir="auto">forward_auth</code> \u65F6\uFF0C\u4F1A\u628A\u539F\u59CB\u8BF7\u6C42\u7684\u8BF7\u6C42\u8DEF\u5F84\u8BBE\u7F6E\u5230 <code dir="auto">X-Original-Uri</code> \uFF0C\u539F\u59CB\u8BF7\u6C42\u7684HTTP Method\u8BBE\u7F6E\u5230 <code dir="auto">X-Original-Method</code> \uFF09</td></tr><tr><td><code dir="auto">headers_to_add</code></td><td><code dir="auto">map[string]string</code></td><td>\u5426</td><td>-</td><td>\u8BBE\u7F6E\u5C06\u5305\u542B\u5728\u6388\u6743\u670D\u52A1\u8BF7\u6C42\u4E2D\u7684\u8BF7\u6C42\u5934\u5217\u8868\u3002\u8BF7\u6CE8\u610F\uFF0C\u540C\u540D\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u5C06\u88AB\u8986\u76D6</td></tr><tr><td><code dir="auto">with_request_body</code></td><td>bool</td><td>\u5426</td><td>false</td><td>\u7F13\u51B2\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4F53\uFF0C\u5E76\u5C06\u5176\u53D1\u9001\u81F3\u9274\u6743\u8BF7\u6C42\u4E2D\uFF08HTTP Method\u4E3AGET\u3001OPTIONS\u3001HEAD\u8BF7\u6C42\u65F6\u4E0D\u751F\u6548\uFF09</td></tr><tr><td><code dir="auto">max_request_body_bytes</code></td><td>int</td><td>\u5426</td><td>10MB</td><td>\u8BBE\u7F6E\u5728\u5185\u5B58\u4E2D\u4FDD\u5B58\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4F53\u7684\u6700\u5927\u5C3A\u5BF8\u3002\u5F53\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4F53\u8FBE\u5230\u5728\u6B64\u5B57\u6BB5\u4E2D\u8BBE\u7F6E\u7684\u6570\u503C\u65F6\uFF0C\u5C06\u4F1A\u8FD4\u56DEHTTP 413\u72B6\u6001\u7801\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u542F\u52A8\u6388\u6743\u8FC7\u7A0B\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u8BBE\u7F6E\u4F1A\u4F18\u5148\u4E8E <code dir="auto">failure_mode_allow</code> \u7684\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">authorization_response</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">allowed_upstream_headers</code></td><td>array of StringMatcher</td><td>\u5426</td><td>-</td><td>\u5F53\u8BBE\u7F6E\u540E\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u9274\u6743\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u539F\u59CB\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u4E2D\u3002\u8BF7\u6CE8\u610F\uFF0C\u540C\u540D\u7684\u8BF7\u6C42\u5934\u5C06\u88AB\u8986\u76D6</td></tr><tr><td><code dir="auto">allowed_client_headers</code></td><td>array of StringMatcher</td><td>\u5426</td><td>-</td><td>\u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5728\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\uFF0C\u6240\u6709\u7684\u9274\u6743\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u5934\u4E2D\u3002\u5F53\u8BBE\u7F6E\u540E\uFF0C\u5728\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u9274\u6743\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u5934\u4E2D</td></tr></tbody></table>
<p><code dir="auto">StringMatcher</code>\u7C7B\u578B\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF0C\u5728\u4F7F\u7528<code dir="auto">array of StringMatcher</code>\u65F6\u4F1A\u6309\u7167\u6570\u7EC4\u4E2D\u5B9A\u4E49\u7684StringMatcher\u987A\u5E8F\u4F9D\u6B21\u8FDB\u884C\u914D\u7F6E</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">exact</code></td><td>string</td><td>\u5426\uFF0C<code dir="auto">exact</code> , <code dir="auto">prefix</code> , <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u7CBE\u786E\u5339\u914D</td></tr><tr><td><code dir="auto">prefix</code></td><td>string</td><td>\u5426\uFF0C<code dir="auto">exact</code> , <code dir="auto">prefix</code> , <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u524D\u7F00\u5339\u914D</td></tr><tr><td><code dir="auto">suffix</code></td><td>string</td><td>\u5426\uFF0C<code dir="auto">exact</code> , <code dir="auto">prefix</code> , <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u540E\u7F00\u5339\u914D</td></tr><tr><td><code dir="auto">contains</code></td><td>string</td><td>\u5426\uFF0C<code dir="auto">exact</code> , <code dir="auto">prefix</code> , <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u662F\u5426\u5305\u542B</td></tr><tr><td><code dir="auto">regex</code></td><td>string</td><td>\u5426\uFF0C<code dir="auto">exact</code> , <code dir="auto">prefix</code> , <code dir="auto">suffix</code>, <code dir="auto">contains</code>, <code dir="auto">regex</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6B63\u5219\u5339\u914D</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<p>\u4E0B\u9762\u5047\u8BBE <code dir="auto">ext-auth</code> \u670D\u52A1\u5728Kubernetes\u4E2DserviceName\u4E3A <code dir="auto">ext-auth</code>\uFF0C\u7AEF\u53E3 <code dir="auto">8090</code>\uFF0C\u8DEF\u5F84\u4E3A <code dir="auto">/auth</code>\uFF0C\u547D\u540D\u7A7A\u95F4\u4E3A <code dir="auto">backend</code></p>
<p>\u652F\u6301\u4E24\u79CD <code dir="auto">endpoint_mode</code>\uFF1A</p>
<ul>
<li><code dir="auto">endpoint_mode</code> \u4E3A <code dir="auto">envoy</code> \u65F6\uFF0C\u9274\u6743\u8BF7\u6C42\u4F1A\u4F7F\u7528\u539F\u59CB\u8BF7\u6C42\u7684HTTP Method\uFF0C\u548C\u914D\u7F6E\u7684 <code dir="auto">path_prefix</code> \u4F5C\u4E3A\u8BF7\u6C42\u8DEF\u5F84\u524D\u7F00\u62FC\u63A5\u4E0A\u539F\u59CB\u7684\u8BF7\u6C42\u8DEF\u5F84</li>
<li><code dir="auto">endpoint_mode</code> \u4E3A <code dir="auto">forward_auth</code> \u65F6\uFF0C\u9274\u6743\u8BF7\u6C42\u4F1A\u4F7F\u7528\u914D\u7F6E\u7684 <code dir="auto">request_method</code> \u4F5C\u4E3AHTTP Method\uFF0C\u548C\u914D\u7F6E\u7684 <code dir="auto">path</code> \u4F5C\u4E3A\u8BF7\u6C42\u8DEF\u5F84</li>
</ul>
<h3 id="endpoint_mode\u4E3Aenvoy\u65F6">endpoint_mode\u4E3Aenvoy\u65F6</h3>
<h4 id="\u793A\u4F8B1">\u793A\u4F8B1</h4>
<p><code dir="auto">ext-auth</code> \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  endpoint_mode: envoy\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path_prefix: /auth\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F <code dir="auto">ext-auth</code> \u63D2\u4EF6\u540E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42 <code dir="auto">ext-auth</code> \u670D\u52A1\u6210\u529F\uFF1A</strong></p>
<p><code dir="auto">ext-auth</code> \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\x7FHost: ext-auth\x7FAuthorization: xxx\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42 <code dir="auto">ext-auth</code> \u670D\u52A1\u5931\u8D25\uFF1A</strong></p>
<p>\u5F53\u8C03\u7528 <code dir="auto">ext-auth</code> \u670D\u52A1\u54CD\u5E94\u4E3A 5xx \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5C06\u63A5\u6536\u5230HTTP\u54CD\u5E94\u7801403\u548C <code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u7684\u5168\u91CF\u54CD\u5E94\u5934</p>
<p>\u5047\u5982 <code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u4E86 <code dir="auto">x-auth-version: 1.0</code> \u548C <code dir="auto">x-auth-failed: true</code> \u7684\u54CD\u5E94\u5934\uFF0C\u4F1A\u4F20\u9012\u7ED9\u5BA2\u6237\u7AEF</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-failed: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Tue, 16 Jul 2024 00:19:41 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fx-auth-version: 1.0\x7Fx-auth-failed: true\x7Fdate: Tue, 16 Jul 2024 00:19:41 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>
<p>\u5F53 <code dir="auto">ext-auth</code> \u65E0\u6CD5\u8BBF\u95EE\u6216\u72B6\u6001\u7801\u4E3A 5xx \u65F6\uFF0C\u5C06\u4EE5 <code dir="auto">status_on_error</code> \u914D\u7F6E\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42</p>
<p>\u5F53 <code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u5176\u4ED6 HTTP \u72B6\u6001\u7801\u65F6\uFF0C\u5C06\u4EE5\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42\u3002\u5982\u679C\u914D\u7F6E\u4E86 <code dir="auto">allowed_client_headers</code>\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u4E2D</p>
<h4 id="\u793A\u4F8B2">\u793A\u4F8B2</h4>
<p><code dir="auto">ext-auth</code> \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers_to_add</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">x-envoy-header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_upstream_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">envoy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  authorization_request:\x7F    allowed_headers:\x7F    - exact: x-auth-version\x7F    headers_to_add:\x7F      x-envoy-header: true\x7F  authorization_response:\x7F    allowed_upstream_headers:\x7F    - exact: x-user-id\x7F    - exact: x-auth-version\x7F  endpoint_mode: envoy\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path_prefix: /auth\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F <code dir="auto">ext-auth</code> \u63D2\u4EF6\u540E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p><code dir="auto">ext-auth</code> \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Auth-Version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-header: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\x7FHost: ext-auth\x7FAuthorization: xxx\x7FX-Auth-Version: 1.0\x7Fx-envoy-header: true\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u54CD\u5E94\u5934\u4E2D\u5982\u679C\u5305\u542B <code dir="auto">x-user-id</code> \u548C <code dir="auto">x-auth-version</code>\uFF0C\u7F51\u5173\u8C03\u7528upstream\u65F6\u7684\u8BF7\u6C42\u4E2D\u4F1A\u5E26\u4E0A\u8FD9\u4E24\u4E2A\u8BF7\u6C42\u5934</p>
<h3 id="endpoint_mode\u4E3Aforward_auth\u65F6">endpoint_mode\u4E3Aforward_auth\u65F6</h3>
<h4 id="\u793A\u4F8B1-1">\u793A\u4F8B1</h4>
<p><code dir="auto">ext-auth</code> \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">forward_auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">request_method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  endpoint_mode: forward_auth\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path: /auth\x7F    request_method: POST\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F <code dir="auto">ext-auth</code> \u63D2\u4EF6\u540E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22;"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42 <code dir="auto">ext-auth</code> \u670D\u52A1\u6210\u529F\uFF1A</strong></p>
<p><code dir="auto">ext-auth</code> \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Method: GET</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth HTTP/1.1\x7FHost: ext-auth\x7FAuthorization: xxx\x7FX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\x7FX-Original-Method: GET\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><strong>\u8BF7\u6C42 <code dir="auto">ext-auth</code> \u670D\u52A1\u5931\u8D25\uFF1A</strong></p>
<p>\u5F53\u8C03\u7528 <code dir="auto">ext-auth</code> \u670D\u52A1\u54CD\u5E94\u4E3A 5xx \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5C06\u63A5\u6536\u5230HTTP\u54CD\u5E94\u7801403\u548C <code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u7684\u5168\u91CF\u54CD\u5E94\u5934</p>
<p>\u5047\u5982 <code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u4E86 <code dir="auto">x-auth-version: 1.0</code> \u548C <code dir="auto">x-auth-failed: true</code> \u7684\u54CD\u5E94\u5934\uFF0C\u4F1A\u4F20\u9012\u7ED9\u5BA2\u6237\u7AEF</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HTTP/1.1 403 Forbidden</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-auth-failed: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">date: Tue, 16 Jul 2024 00:19:41 GMT</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">server: istio-envoy</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">content-length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="HTTP/1.1 403 Forbidden\x7Fx-auth-version: 1.0\x7Fx-auth-failed: true\x7Fdate: Tue, 16 Jul 2024 00:19:41 GMT\x7Fserver: istio-envoy\x7Fcontent-length: 0"><div></div></button></div></figure></div>
<p>\u5F53 <code dir="auto">ext-auth</code> \u65E0\u6CD5\u8BBF\u95EE\u6216\u72B6\u6001\u7801\u4E3A 5xx \u65F6\uFF0C\u5C06\u4EE5 <code dir="auto">status_on_error</code> \u914D\u7F6E\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42</p>
<p>\u5F53 <code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u5176\u4ED6 HTTP \u72B6\u6001\u7801\u65F6\uFF0C\u5C06\u4EE5\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42\u3002\u5982\u679C\u914D\u7F6E\u4E86 <code dir="auto">allowed_client_headers</code>\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u4E2D</p>
<h4 id="\u793A\u4F8B2-1">\u793A\u4F8B2</h4>
<p><code dir="auto">ext-auth</code> \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">http_service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_request</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headers_to_add</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">x-envoy-header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authorization_response</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">allowed_upstream_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">exact</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-auth-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint_mode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">forward_auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ext-auth.backend.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8090</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/auth</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">request_method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POST</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="http_service:\x7F  authorization_request:\x7F    allowed_headers:\x7F    - exact: x-auth-version\x7F    headers_to_add:\x7F      x-envoy-header: true\x7F  authorization_response:\x7F    allowed_upstream_headers:\x7F    - exact: x-user-id\x7F    - exact: x-auth-version\x7F  endpoint_mode: forward_auth\x7F  endpoint:\x7F    service_name: ext-auth.backend.svc.cluster.local\x7F    service_port: 8090\x7F    path: /auth\x7F    request_method: POST\x7F  timeout: 1000"><div></div></button></div></figure></div>
<p>\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F <code dir="auto">ext-auth</code> \u63D2\u4EF6\u540E\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-i</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">GET</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo: bar"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: xxx"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"X-Auth-Version: 1.0"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H &#x22;foo: bar&#x22; -H &#x22;Authorization: xxx&#x22; -H &#x22;X-Auth-Version: 1.0&#x22;"><div></div></button></div></figure></div>
<p><code dir="auto">ext-auth</code> \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">POST /auth HTTP/1.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Host: ext-auth</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Authorization: xxx</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Original-Method: GET</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">X-Auth-Version: 1.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">x-envoy-header: true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Content-Length: 0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="POST /auth HTTP/1.1\x7FHost: ext-auth\x7FAuthorization: xxx\x7FX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\x7FX-Original-Method: GET\x7FX-Auth-Version: 1.0\x7Fx-envoy-header: true\x7FContent-Length: 0"><div></div></button></div></figure></div>
<p><code dir="auto">ext-auth</code> \u670D\u52A1\u8FD4\u56DE\u54CD\u5E94\u5934\u4E2D\u5982\u679C\u5305\u542B <code dir="auto">x-user-id</code> \u548C <code dir="auto">x-auth-version</code>\uFF0C\u7F51\u5173\u8C03\u7528upstream\u65F6\u7684\u8BF7\u6C42\u4E2D\u4F1A\u5E26\u4E0A\u8FD9\u4E24\u4E2A\u8BF7\u6C42\u5934</p>`,s={title:"\u5916\u90E8\u8BA4\u8BC1",keywords:["higress","auth"],description:"Ext \u8BA4\u8BC1\u63D2\u4EF6\u5B9E\u73B0\u4E86\u8C03\u7528\u5916\u90E8\u6388\u6743\u670D\u52A1\u8FDB\u884C\u8BA4\u8BC1\u9274\u6743\u7684\u529F\u80FD\u3002"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/authentication/ext-auth.md",d=void 0,c=function(){return'\n## \u529F\u80FD\u8BF4\u660E\n\n`ext-auth` \u63D2\u4EF6\u5B9E\u73B0\u4E86\u5411\u5916\u90E8\u6388\u6743\u670D\u52A1\u53D1\u9001\u9274\u6743\u8BF7\u6C42\uFF0C\u4EE5\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BF7\u6C42\u662F\u5426\u5F97\u5230\u6388\u6743\u3002\u8BE5\u63D2\u4EF6\u5B9E\u73B0\u65F6\u53C2\u8003\u4E86Envoy\u539F\u751F\u7684[ext_authz filter](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter)\uFF0C\u5B9E\u73B0\u4E86\u539F\u751Ffilter\u4E2D\u5BF9\u63A5HTTP\u670D\u52A1\u7684\u90E8\u5206\u80FD\u529B\n\n\n\n## \u914D\u7F6E\u5B57\u6BB5\n\n| \u540D\u79F0                            | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                         |\n| ------------------------------- | -------- | ---- | ------ |------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| `http_service`                  | object   | \u662F   | -      | \u5916\u90E8\u6388\u6743\u670D\u52A1\u914D\u7F6E                                                                                                                                                   |\n| `failure_mode_allow`            | bool     | \u5426   | false  | \u5F53\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u5373\u4F7F\u4E0E\u6388\u6743\u670D\u52A1\u7684\u901A\u4FE1\u5931\u8D25\uFF0C\u6216\u8005\u6388\u6743\u670D\u52A1\u8FD4\u56DE\u4E86 HTTP 5xx \u9519\u8BEF\uFF0C\u4ECD\u4F1A\u63A5\u53D7\u5BA2\u6237\u7AEF\u8BF7\u6C42                                                                                                   |\n| `failure_mode_allow_header_add` | bool     | \u5426   | false  | \u5F53 `failure_mode_allow` \u548C `failure_mode_allow_header_add` \u90FD\u8BBE\u7F6E\u4E3A true \u65F6\uFF0C\u82E5\u4E0E\u6388\u6743\u670D\u52A1\u7684\u901A\u4FE1\u5931\u8D25\uFF0C\u6216\u6388\u6743\u670D\u52A1\u8FD4\u56DE\u4E86 HTTP 5xx \u9519\u8BEF\uFF0C\u90A3\u4E48\u8BF7\u6C42\u5934\u4E2D\u5C06\u4F1A\u6DFB\u52A0 `x-envoy-auth-failure-mode-allowed: true` |\n| `status_on_error`               | int      | \u5426   | 403    | \u5F53\u6388\u6743\u670D\u52A1\u65E0\u6CD5\u8BBF\u95EE\u6216\u72B6\u6001\u7801\u4E3A 5xx \u65F6\uFF0C\u8BBE\u7F6E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684 HTTP \u72B6\u6001\u7801\u3002\u9ED8\u8BA4\u72B6\u6001\u7801\u662F `403`                                        |\n\n`http_service`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\n\n| \u540D\u79F0                     | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                  |\n| ------------------------ | -------- | ---- | ------ | ------------------------------------- |\n| `endpoint_mode`          | string   | \u5426   | envoy  | `envoy` , `forward_auth` \u4E2D\u9009\u586B\u4E00\u9879   |\n| `endpoint`               | object   | \u662F   | -      | \u53D1\u9001\u9274\u6743\u8BF7\u6C42\u7684 HTTP \u670D\u52A1\u4FE1\u606F          |\n| `timeout`                | int      | \u5426   | 1000   | `ext-auth` \u670D\u52A1\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |\n| `authorization_request`  | object   | \u5426   | -      | \u53D1\u9001\u9274\u6743\u8BF7\u6C42\u914D\u7F6E                      |\n| `authorization_response` | object   | \u5426   | -      | \u5904\u7406\u9274\u6743\u54CD\u5E94\u914D\u7F6E |\n\n`endpoint`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\n\n| \u540D\u79F0       | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                      |\n| -------- | -------- | -- | ------ |-----------------------------------------------------------------------------------------|\n| `service_name` | string | \u5FC5\u586B | -                                                          | \u8F93\u5165\u6388\u6743\u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 `ext-auth.dns` \u3001`ext-auth.my-ns.svc.cluster.local`         |\n| `service_port` | int    | \u5426 | 80 | \u8F93\u5165\u6388\u6743\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3                                                                             |\n| `path_prefix`    | string   | `endpoint_mode` \u4E3A`envoy`\u65F6\u5FC5\u586B        |        | `endpoint_mode` \u4E3A`envoy` \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5411\u6388\u6743\u670D\u52A1\u53D1\u9001\u8BF7\u6C42\u7684\u8BF7\u6C42\u8DEF\u5F84\u524D\u7F00 |\n| `request_method` | string   | \u5426                                     | GET    | `endpoint_mode` \u4E3A`forward_auth` \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5411\u6388\u6743\u670D\u52A1\u53D1\u9001\u8BF7\u6C42\u7684HTTP Method |\n| `path`           | string   | `endpoint_mode` \u4E3A`forward_auth`\u65F6\u5FC5\u586B | -      | `endpoint_mode` \u4E3A`forward_auth` \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5411\u6388\u6743\u670D\u52A1\u53D1\u9001\u8BF7\u6C42\u7684\u8BF7\u6C42\u8DEF\u5F84 |\n\n`authorization_request`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\n\n| \u540D\u79F0                     | \u6570\u636E\u7C7B\u578B               | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                                                                                                                                                      |\n| ------------------------ | ---------------------- | ---- | ------ |---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|\n| `allowed_headers`        | array of StringMatcher | \u5426   | -      | \u5F53\u8BBE\u7F6E\u540E\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u5C06\u6DFB\u52A0\u5230\u6388\u6743\u670D\u52A1\u8BF7\u6C42\u4E2D\u7684\u8BF7\u6C42\u5934\u4E2D\u3002\u9664\u4E86\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u5934\u90E8\u5339\u914D\u89C4\u5219\u5916\uFF0C\u6388\u6743\u670D\u52A1\u8BF7\u6C42\u4E2D\u4F1A\u81EA\u52A8\u5305\u542B `Authorization` \u8FD9\u4E2AHTTP\u5934\uFF08 `endpoint_mode` \u4E3A `forward_auth` \u65F6\uFF0C\u4F1A\u628A\u539F\u59CB\u8BF7\u6C42\u7684\u8BF7\u6C42\u8DEF\u5F84\u8BBE\u7F6E\u5230 `X-Original-Uri` \uFF0C\u539F\u59CB\u8BF7\u6C42\u7684HTTP Method\u8BBE\u7F6E\u5230 `X-Original-Method` \uFF09 |\n| `headers_to_add`         | `map[string]string`    | \u5426   | -      | \u8BBE\u7F6E\u5C06\u5305\u542B\u5728\u6388\u6743\u670D\u52A1\u8BF7\u6C42\u4E2D\u7684\u8BF7\u6C42\u5934\u5217\u8868\u3002\u8BF7\u6CE8\u610F\uFF0C\u540C\u540D\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u5C06\u88AB\u8986\u76D6                                                                                                                                                                   |\n| `with_request_body`      | bool                   | \u5426   | false  | \u7F13\u51B2\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4F53\uFF0C\u5E76\u5C06\u5176\u53D1\u9001\u81F3\u9274\u6743\u8BF7\u6C42\u4E2D\uFF08HTTP Method\u4E3AGET\u3001OPTIONS\u3001HEAD\u8BF7\u6C42\u65F6\u4E0D\u751F\u6548\uFF09                                                                                                                                                |\n| `max_request_body_bytes` | int                    | \u5426   | 10MB   | \u8BBE\u7F6E\u5728\u5185\u5B58\u4E2D\u4FDD\u5B58\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4F53\u7684\u6700\u5927\u5C3A\u5BF8\u3002\u5F53\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4F53\u8FBE\u5230\u5728\u6B64\u5B57\u6BB5\u4E2D\u8BBE\u7F6E\u7684\u6570\u503C\u65F6\uFF0C\u5C06\u4F1A\u8FD4\u56DEHTTP 413\u72B6\u6001\u7801\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u542F\u52A8\u6388\u6743\u8FC7\u7A0B\u3002\u6CE8\u610F\uFF0C\u8FD9\u4E2A\u8BBE\u7F6E\u4F1A\u4F18\u5148\u4E8E `failure_mode_allow` \u7684\u914D\u7F6E                                                                                                |\n\n`authorization_response`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\n\n| \u540D\u79F0                       | \u6570\u636E\u7C7B\u578B               | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                                              |\n| -------------------------- | ---------------------- | ---- | ------ |---------------------------------------------------------------------------------|\n| `allowed_upstream_headers` | array of StringMatcher | \u5426   | -      | \u5F53\u8BBE\u7F6E\u540E\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u9274\u6743\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u539F\u59CB\u7684\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934\u4E2D\u3002\u8BF7\u6CE8\u610F\uFF0C\u540C\u540D\u7684\u8BF7\u6C42\u5934\u5C06\u88AB\u8986\u76D6                              |\n| `allowed_client_headers`   | array of StringMatcher | \u5426   | -      | \u5982\u679C\u4E0D\u8BBE\u7F6E\uFF0C\u5728\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\uFF0C\u6240\u6709\u7684\u9274\u6743\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u5934\u4E2D\u3002\u5F53\u8BBE\u7F6E\u540E\uFF0C\u5728\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u9274\u6743\u8BF7\u6C42\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u5934\u4E2D |\n\n`StringMatcher`\u7C7B\u578B\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF0C\u5728\u4F7F\u7528`array of StringMatcher`\u65F6\u4F1A\u6309\u7167\u6570\u7EC4\u4E2D\u5B9A\u4E49\u7684StringMatcher\u987A\u5E8F\u4F9D\u6B21\u8FDB\u884C\u914D\u7F6E\n\n| \u540D\u79F0       | \u6570\u636E\u7C7B\u578B | \u5FC5\u586B                                                         | \u9ED8\u8BA4\u503C | \u63CF\u8FF0     |\n| ---------- | -------- | ------------------------------------------------------------ | ------ | -------- |\n| `exact`    | string   | \u5426\uFF0C`exact` , `prefix` , `suffix`, `contains`, `regex` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u7CBE\u786E\u5339\u914D |\n| `prefix`   | string   | \u5426\uFF0C`exact` , `prefix` , `suffix`, `contains`, `regex` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u524D\u7F00\u5339\u914D |\n| `suffix`   | string   | \u5426\uFF0C`exact` , `prefix` , `suffix`, `contains`, `regex` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u540E\u7F00\u5339\u914D |\n| `contains` | string   | \u5426\uFF0C`exact` , `prefix` , `suffix`, `contains`, `regex` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u662F\u5426\u5305\u542B |\n| `regex`    | string   | \u5426\uFF0C`exact` , `prefix` , `suffix`, `contains`, `regex` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6B63\u5219\u5339\u914D |\n\n\n\n## \u914D\u7F6E\u793A\u4F8B\n\n\u4E0B\u9762\u5047\u8BBE `ext-auth` \u670D\u52A1\u5728Kubernetes\u4E2DserviceName\u4E3A `ext-auth`\uFF0C\u7AEF\u53E3 `8090`\uFF0C\u8DEF\u5F84\u4E3A `/auth`\uFF0C\u547D\u540D\u7A7A\u95F4\u4E3A `backend`\n\n\u652F\u6301\u4E24\u79CD `endpoint_mode`\uFF1A\n\n- `endpoint_mode` \u4E3A `envoy` \u65F6\uFF0C\u9274\u6743\u8BF7\u6C42\u4F1A\u4F7F\u7528\u539F\u59CB\u8BF7\u6C42\u7684HTTP Method\uFF0C\u548C\u914D\u7F6E\u7684 `path_prefix` \u4F5C\u4E3A\u8BF7\u6C42\u8DEF\u5F84\u524D\u7F00\u62FC\u63A5\u4E0A\u539F\u59CB\u7684\u8BF7\u6C42\u8DEF\u5F84\n- `endpoint_mode` \u4E3A `forward_auth` \u65F6\uFF0C\u9274\u6743\u8BF7\u6C42\u4F1A\u4F7F\u7528\u914D\u7F6E\u7684 `request_method` \u4F5C\u4E3AHTTP Method\uFF0C\u548C\u914D\u7F6E\u7684 `path` \u4F5C\u4E3A\u8BF7\u6C42\u8DEF\u5F84\n\n### endpoint_mode\u4E3Aenvoy\u65F6\n\n#### \u793A\u4F8B1\n\n`ext-auth` \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A\n\n```yaml\nhttp_service:\n  endpoint_mode: envoy\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path_prefix: /auth\n  timeout: 1000\n```\n\n\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F `ext-auth` \u63D2\u4EF6\u540E\uFF1A\n\n```shell\ncurl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx"\n```\n\n**\u8BF7\u6C42 `ext-auth` \u670D\u52A1\u6210\u529F\uFF1A**\n\n`ext-auth` \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A\n\n```\nPOST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\nHost: ext-auth\nAuthorization: xxx\nContent-Length: 0\n```\n\n**\u8BF7\u6C42 `ext-auth` \u670D\u52A1\u5931\u8D25\uFF1A**\n\n\u5F53\u8C03\u7528 `ext-auth` \u670D\u52A1\u54CD\u5E94\u4E3A 5xx \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5C06\u63A5\u6536\u5230HTTP\u54CD\u5E94\u7801403\u548C `ext-auth` \u670D\u52A1\u8FD4\u56DE\u7684\u5168\u91CF\u54CD\u5E94\u5934\n\n\u5047\u5982 `ext-auth` \u670D\u52A1\u8FD4\u56DE\u4E86 `x-auth-version: 1.0` \u548C `x-auth-failed: true` \u7684\u54CD\u5E94\u5934\uFF0C\u4F1A\u4F20\u9012\u7ED9\u5BA2\u6237\u7AEF\n\n```\nHTTP/1.1 403 Forbidden\nx-auth-version: 1.0\nx-auth-failed: true\ndate: Tue, 16 Jul 2024 00:19:41 GMT\nserver: istio-envoy\ncontent-length: 0\n```\n\n\u5F53 `ext-auth` \u65E0\u6CD5\u8BBF\u95EE\u6216\u72B6\u6001\u7801\u4E3A 5xx \u65F6\uFF0C\u5C06\u4EE5 `status_on_error` \u914D\u7F6E\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42\n\n\u5F53 `ext-auth` \u670D\u52A1\u8FD4\u56DE\u5176\u4ED6 HTTP \u72B6\u6001\u7801\u65F6\uFF0C\u5C06\u4EE5\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42\u3002\u5982\u679C\u914D\u7F6E\u4E86 `allowed_client_headers`\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u4E2D\n\n#### \u793A\u4F8B2\n\n`ext-auth` \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A\n\n```yaml\nhttp_service:\n  authorization_request:\n    allowed_headers:\n    - exact: x-auth-version\n    headers_to_add:\n      x-envoy-header: true\n  authorization_response:\n    allowed_upstream_headers:\n    - exact: x-user-id\n    - exact: x-auth-version\n  endpoint_mode: envoy  \n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path_prefix: /auth\n  timeout: 1000\n```\n\n\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F `ext-auth` \u63D2\u4EF6\u540E\uFF1A\n\n```shell\ncurl -X POST http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx"\n```\n\n`ext-auth` \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A\n\n```\nPOST /auth/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 HTTP/1.1\nHost: ext-auth\nAuthorization: xxx\nX-Auth-Version: 1.0\nx-envoy-header: true\nContent-Length: 0\n```\n\n`ext-auth` \u670D\u52A1\u8FD4\u56DE\u54CD\u5E94\u5934\u4E2D\u5982\u679C\u5305\u542B `x-user-id` \u548C `x-auth-version`\uFF0C\u7F51\u5173\u8C03\u7528upstream\u65F6\u7684\u8BF7\u6C42\u4E2D\u4F1A\u5E26\u4E0A\u8FD9\u4E24\u4E2A\u8BF7\u6C42\u5934\n\n\n\n### endpoint_mode\u4E3Aforward_auth\u65F6\n\n#### \u793A\u4F8B1\n\n`ext-auth` \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A\n\n```yaml\nhttp_service:\n  endpoint_mode: forward_auth\n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path: /auth\n    request_method: POST\n  timeout: 1000\n```\n\n\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F `ext-auth` \u63D2\u4EF6\u540E\uFF1A\n\n```shell\ncurl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx"\n```\n\n**\u8BF7\u6C42 `ext-auth` \u670D\u52A1\u6210\u529F\uFF1A**\n\n`ext-auth` \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A\n\n```\nPOST /auth HTTP/1.1\nHost: ext-auth\nAuthorization: xxx\nX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\nX-Original-Method: GET\nContent-Length: 0\n```\n\n**\u8BF7\u6C42 `ext-auth` \u670D\u52A1\u5931\u8D25\uFF1A**\n\n\u5F53\u8C03\u7528 `ext-auth` \u670D\u52A1\u54CD\u5E94\u4E3A 5xx \u65F6\uFF0C\u5BA2\u6237\u7AEF\u5C06\u63A5\u6536\u5230HTTP\u54CD\u5E94\u7801403\u548C `ext-auth` \u670D\u52A1\u8FD4\u56DE\u7684\u5168\u91CF\u54CD\u5E94\u5934\n\n\u5047\u5982 `ext-auth` \u670D\u52A1\u8FD4\u56DE\u4E86 `x-auth-version: 1.0` \u548C `x-auth-failed: true` \u7684\u54CD\u5E94\u5934\uFF0C\u4F1A\u4F20\u9012\u7ED9\u5BA2\u6237\u7AEF\n\n```\nHTTP/1.1 403 Forbidden\nx-auth-version: 1.0\nx-auth-failed: true\ndate: Tue, 16 Jul 2024 00:19:41 GMT\nserver: istio-envoy\ncontent-length: 0\n```\n\n\u5F53 `ext-auth` \u65E0\u6CD5\u8BBF\u95EE\u6216\u72B6\u6001\u7801\u4E3A 5xx \u65F6\uFF0C\u5C06\u4EE5 `status_on_error` \u914D\u7F6E\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42\n\n\u5F53 `ext-auth` \u670D\u52A1\u8FD4\u56DE\u5176\u4ED6 HTTP \u72B6\u6001\u7801\u65F6\uFF0C\u5C06\u4EE5\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u62D2\u7EDD\u5BA2\u6237\u7AEF\u8BF7\u6C42\u3002\u5982\u679C\u914D\u7F6E\u4E86 `allowed_client_headers`\uFF0C\u5177\u6709\u76F8\u5E94\u5339\u914D\u9879\u7684\u54CD\u5E94\u5934\u5C06\u6DFB\u52A0\u5230\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u4E2D\n\n#### \u793A\u4F8B2\n\n`ext-auth` \u63D2\u4EF6\u7684\u914D\u7F6E\uFF1A\n\n```yaml\nhttp_service:\n  authorization_request:\n    allowed_headers:\n    - exact: x-auth-version\n    headers_to_add:\n      x-envoy-header: true\n  authorization_response:\n    allowed_upstream_headers:\n    - exact: x-user-id\n    - exact: x-auth-version\n  endpoint_mode: forward_auth  \n  endpoint:\n    service_name: ext-auth.backend.svc.cluster.local\n    service_port: 8090\n    path: /auth\n    request_method: POST\n  timeout: 1000\n```\n\n\u4F7F\u7528\u5982\u4E0B\u8BF7\u6C42\u7F51\u5173\uFF0C\u5F53\u5F00\u542F `ext-auth` \u63D2\u4EF6\u540E\uFF1A\n\n```shell\ncurl -i http://localhost:8082/users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5 -X GET -H "foo: bar" -H "Authorization: xxx" -H "X-Auth-Version: 1.0"\n```\n\n`ext-auth` \u670D\u52A1\u5C06\u63A5\u6536\u5230\u5982\u4E0B\u7684\u9274\u6743\u8BF7\u6C42\uFF1A\n\n```\nPOST /auth HTTP/1.1\nHost: ext-auth\nAuthorization: xxx\nX-Original-Uri: /users?apikey=9a342114-ba8a-11ec-b1bf-00163e1250b5\nX-Original-Method: GET\nX-Auth-Version: 1.0\nx-envoy-header: true\nContent-Length: 0\n```\n\n`ext-auth` \u670D\u52A1\u8FD4\u56DE\u54CD\u5E94\u5934\u4E2D\u5982\u679C\u5305\u542B `x-user-id` \u548C `x-auth-version`\uFF0C\u7F51\u5173\u8C03\u7528upstream\u65F6\u7684\u8BF7\u6C42\u4E2D\u4F1A\u5E26\u4E0A\u8FD9\u4E24\u4E2A\u8BF7\u6C42\u5934\n'},i=function(){return e},o=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"endpoint_mode\u4E3Aenvoy\u65F6",text:"endpoint_mode\u4E3Aenvoy\u65F6"},{depth:4,slug:"\u793A\u4F8B1",text:"\u793A\u4F8B1"},{depth:4,slug:"\u793A\u4F8B2",text:"\u793A\u4F8B2"},{depth:3,slug:"endpoint_mode\u4E3Aforward_auth\u65F6",text:"endpoint_mode\u4E3Aforward_auth\u65F6"},{depth:4,slug:"\u793A\u4F8B1-1",text:"\u793A\u4F8B1"},{depth:4,slug:"\u793A\u4F8B2-1",text:"\u793A\u4F8B2"}]},t=p((y,f,_)=>{const{layout:b,...n}=s;return n.file=a,n.url=d,r`${u()}${v(e)}`})});export{t as Content,E as __tla,i as compiledContent,t as default,a as file,s as frontmatter,o as getHeadings,c as rawContent,d as url};
