import{c as p,__tla as d}from"./astro-component.DIa0fJKh.js";import{r as l,m as g,u as v,__tla as u}from"./constant.BB-vDknj.js";import{__tla as h}from"./astro/assets-service.tyfV9CK3.js";let s,a,i,t,o,c,n,f=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<p>2023\u5E748\u670810\u65E5 \xB7 \u9605\u8BFB\u9700 20 \u5206\u949F</p>
<hr>
<h1 id="\u529F\u80FD\u5212\u5206">\u529F\u80FD\u5212\u5206</h1>
<p>\u8FD9\u91CC\u6211\u4EEC\u5148\u5927\u6982\u68B3\u7406\u4E00\u4E0BHigress\u5DE5\u7A0B\u5404\u76EE\u5F55\u7684\u804C\u8D23\u5212\u5206</p>





































































<table><thead><tr><th><strong>\u76EE\u5F55</strong></th><th><strong>\u529F\u80FD\u8BF4\u660E</strong></th></tr></thead><tbody><tr><td><strong>api</strong></td><td>Higress\u6240\u6D89\u53CA\u64CD\u4F5C\u7684kubernetes api</td></tr><tr><td><strong>client</strong></td><td>Higress\u96C6\u6210kubernetes\u7684client\u8FDB\u884C\u8D44\u6E90\u76D1\u542C\u4E0E\u4E0B\u53D1</td></tr><tr><td><strong>cmd</strong></td><td>\u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801</td></tr><tr><td><strong>docker</strong></td><td>\u6784\u5EFAHigress docker image\u7684\u63CF\u8FF0\u6587\u4EF6</td></tr><tr><td><strong>docs</strong></td><td>\u6587\u6863\u5185\u5BB9</td></tr><tr><td><strong>envoy</strong></td><td>envoy\u6E90\u7801\u5185\u5BB9</td></tr><tr><td><strong>helm</strong></td><td>\u4F7F\u7528helm\u5B89\u88C5Higress\u7B49\u914D\u7F6E</td></tr><tr><td><strong>istio</strong></td><td>istio\u6E90\u7801\u5185\u5BB9</td></tr><tr><td><strong>pkg/ingress</strong></td><td>Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801</td></tr><tr><td><strong>pkg/bootstrap</strong></td><td>\u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801</td></tr><tr><td><strong>plugins</strong></td><td>Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801</td></tr><tr><td><strong>registry</strong></td><td>\u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801</td></tr><tr><td><strong>samples</strong></td><td>\u4E00\u4E9B\u5E38\u89C1Pod\u3001Service\u7684yaml\u793A\u4F8B</td></tr><tr><td><strong>test</strong></td><td>\u5355\u5143\u6D4B\u8BD5\u53CAe2e\u6D4B\u8BD5\u7528\u4F8B</td></tr><tr><td><strong>tools</strong></td><td>\u7F16\u8BD1\u3001\u6784\u5EFA\u3001image\u5206\u53D1\u4EE5\u53CA\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA\u7B49\u811A\u672C</td></tr></tbody></table>
<h1 id="\u7814\u53D1\u6307\u5F15">\u7814\u53D1\u6307\u5F15</h1>
<h2 id="crd\u6A21\u578B\u5B9A\u4E49">CRD\u6A21\u578B\u5B9A\u4E49</h2>
<h3 id="\u8FDB\u5165api\u76EE\u5F55">\u8FDB\u5165api\u76EE\u5F55</h3>
<blockquote>
<p>higress/api</p>
</blockquote>
<p>\u6839\u636E\u6240\u8981\u65B0\u5EFACRD\u7684api\u7C7B\u578B\uFF0C\u9009\u62E9\u76F8\u5BF9\u4E8E\u7684\u5B50\u76EE\u5F55\uFF0C\u6BD4\u5982</p>
<blockquote>
<p>networking/v1</p>
</blockquote>
<h3 id="\u7F16\u5199crd\u6A21\u578B">\u7F16\u5199CRD\u6A21\u578B</h3>
<p>\u6BD4\u5982\u6211\u8FD9\u91CC\u60F3\u5B9A\u4E49\u4E00\u4E2Ahttp_2_rpc\u7684CRD\u8D44\u6E90</p>
<blockquote>
<p>http_2_rpc.proto</p>
</blockquote>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// Copyright (c) 2022 Alibaba Group Holding Ltd.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">//</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// Licensed under the Apache License, Version 2.0 (the "License");</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// you may not use this file except in compliance with the License.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// You may obtain a copy of the License at</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">//</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">//      http://www.apache.org/licenses/LICENSE-2.0</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">//</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// Unless required by applicable law or agreed to in writing, software</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// distributed under the License is distributed on an "AS IS" BASIS,</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// See the License for the specific language governing permissions and</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// limitations under the License.</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">syntax = "proto3";</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">import "google/api/field_behavior.proto";</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// $schema: higress.networking.v1.Http2Rpc</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// $title: Http2Rpc</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// $description: Configuration affecting service discovery from multi registries</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// $mode: none</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package higress.networking.v1;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">option go_package = "github.com/alibaba/higress/api/networking/v1";</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// &#x3C;!-- crd generation tags</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:groupName:networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:version:v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:storageVersion</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:annotations:helm.sh/resource-policy=keep</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:subresource:status</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:scope:Namespaced</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:resource:categories=higress-io,plural=http2rpcs</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +cue-gen:Http2Rpc:preserveUnknownFields:false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">//</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// &#x3C;!-- go code generation tags</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +kubetype-gen</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +kubetype-gen:groupVersion=networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +genclient</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// +k8s:deepcopy-gen=true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// --></span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">message Http2Rpc {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">oneof destination {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">DubboService dubbo = 1;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">GrpcService  grpc = 2;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8"> </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">message DubboService {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string service = 1 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string version = 2 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string group = 3 [(google.api.field_behavior) = OPTIONAL];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">repeated Method methods = 4 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">message Method {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string service_method = 1 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string headers_attach = 2 [(google.api.field_behavior) = OPTIONAL];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string http_path = 3 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">repeated string http_methods = 4 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">repeated Param params = 5;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">message Param {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string param_source = 1 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string param_key = 2 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">string param_type = 3 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">message GrpcService {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">oneof destination {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">string proto_descriptor_str = 1;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">string proto_descriptor_file_path = 2;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8"> </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">repeated string services = 3 [(google.api.field_behavior) = REQUIRED];</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// Copyright (c) 2022 Alibaba Group Holding Ltd.\x7F//\x7F// Licensed under the Apache License, Version 2.0 (the &#x22;License&#x22;);\x7F// you may not use this file except in compliance with the License.\x7F// You may obtain a copy of the License at\x7F//\x7F//      http://www.apache.org/licenses/LICENSE-2.0\x7F//\x7F// Unless required by applicable law or agreed to in writing, software\x7F// distributed under the License is distributed on an &#x22;AS IS&#x22; BASIS,\x7F// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\x7F// See the License for the specific language governing permissions and\x7F// limitations under the License.\x7F\x7Fsyntax = &#x22;proto3&#x22;;\x7F\x7Fimport &#x22;google/api/field_behavior.proto&#x22;;\x7F\x7F// $schema: higress.networking.v1.Http2Rpc\x7F// $title: Http2Rpc\x7F// $description: Configuration affecting service discovery from multi registries\x7F// $mode: none\x7F\x7Fpackage higress.networking.v1;\x7F\x7Foption go_package = &#x22;github.com/alibaba/higress/api/networking/v1&#x22;;\x7F\x7F// <!-- crd generation tags\x7F// +cue-gen:Http2Rpc:groupName:networking.higress.io\x7F// +cue-gen:Http2Rpc:version:v1\x7F// +cue-gen:Http2Rpc:storageVersion\x7F// +cue-gen:Http2Rpc:annotations:helm.sh/resource-policy=keep\x7F// +cue-gen:Http2Rpc:subresource:status\x7F// +cue-gen:Http2Rpc:scope:Namespaced\x7F// +cue-gen:Http2Rpc:resource:categories=higress-io,plural=http2rpcs\x7F// +cue-gen:Http2Rpc:preserveUnknownFields:false\x7F// -->\x7F//\x7F// <!-- go code generation tags\x7F// +kubetype-gen\x7F// +kubetype-gen:groupVersion=networking.higress.io/v1\x7F// +genclient\x7F// +k8s:deepcopy-gen=true\x7F// -->\x7Fmessage Http2Rpc {\x7F  oneof destination {\x7F    DubboService dubbo = 1;\x7F    GrpcService  grpc = 2;\x7F }\x7F}\x7F\x7Fmessage DubboService {\x7F  string service = 1 [(google.api.field_behavior) = REQUIRED];\x7F  string version = 2 [(google.api.field_behavior) = REQUIRED];\x7F  string group = 3 [(google.api.field_behavior) = OPTIONAL];\x7F  repeated Method methods = 4 [(google.api.field_behavior) = REQUIRED];\x7F}\x7F\x7Fmessage Method {\x7F  string service_method = 1 [(google.api.field_behavior) = REQUIRED];\x7F  string headers_attach = 2 [(google.api.field_behavior) = OPTIONAL];\x7F  string http_path = 3 [(google.api.field_behavior) = REQUIRED];\x7F  repeated string http_methods = 4 [(google.api.field_behavior) = REQUIRED];\x7F  repeated Param params = 5;\x7F}\x7F\x7Fmessage Param {\x7F  string param_source = 1 [(google.api.field_behavior) = REQUIRED];\x7F  string param_key = 2 [(google.api.field_behavior) = REQUIRED];\x7F  string param_type = 3 [(google.api.field_behavior) = REQUIRED];\x7F}\x7F\x7Fmessage GrpcService {\x7F  oneof destination {\x7F    string proto_descriptor_str = 1;\x7F    string proto_descriptor_file_path = 2;\x7F }\x7F  repeated string services = 3 [(google.api.field_behavior) = REQUIRED];\x7F}"><div></div></button></div></figure></div>
<h2 id="2\u4EE3\u7801\u751F\u6210">2\u3001\u4EE3\u7801\u751F\u6210</h2>
<p>\u8FD9\u91CC\u4F9D\u8D56<code dir="auto">kubernetes code generators</code>\u751F\u6210\u76F8\u5173kubetype\u3001client\u3001informer\u3001lister\u7B49\u4EE3\u7801\u3002
\u5728higress\u6839\u76EE\u5F55\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C</p>
<blockquote>
<p>GENERATE_API=1 make gen-client</p>
</blockquote>
<p>\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u540E\u4F1A\u751F\u6210\uFF0C\u5982\u4E0B\u4EE3\u7801</p>
<h3 id="kubernetes-customresuource\u5B9A\u4E49">kubernetes customresuource\u5B9A\u4E49</h3>
<p>\u901A\u8FC7\u5C06\u8FD9\u4E2A\u5B9A\u4E49\u6CE8\u518C\u7ED9kubernetes\u96C6\u7FA4\uFF0C\u7136\u540E\u5C31\u80FD\u521B\u5EFA\u5BF9\u5E94\u7684CRD\u8D44\u6E90\u5B9E\u4F8B\u3002
<img src="/img/blog/CustomResourceDefinition/kubernetes-customresuource-definition.png" alt="kubernetes-customresuource-definition.png" referrerpolicy="no-referrer"></p>
<h3 id="crd\u5BF9\u5E94\u8D44\u6E90\u5BF9\u8C61go\u8BED\u8A00\u7684\u5B9A\u4E49\u53CA\u64CD\u4F5C\u65B9\u6CD5">CRD\u5BF9\u5E94\u8D44\u6E90\u5BF9\u8C61Go\u8BED\u8A00\u7684\u5B9A\u4E49\u53CA\u64CD\u4F5C\u65B9\u6CD5</h3>
<p>Hingress(IngressConfig)\u521D\u59CB\u5316\u53CA\u8FD0\u884C\u9636\u6BB5\u4F1A\u4F7F\u7528\u8FD9\u91CC\u7684api\u6A21\u578B\u3002
<img src="/img/blog/CustomResourceDefinition/higress-api.png" alt="higress-api.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-apis">kubernetes client apis</h3>
<p>Hingress\u96C6\u6210kubernetes client\u4E0Ekube-apiserver\u4EA4\u4E92\u65F6\u4F1A\u4F7F\u7528\u8FD9\u91CC\u7684\u6A21\u578B\u5BF9\u8C61\u3002
<img src="/img/blog/CustomResourceDefinition/kubernetes-client-api.png" alt="kubernetes-client-api.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-apis-operate">kubernetes client apis operate</h3>
<p><img src="/img/blog/CustomResourceDefinition/kubernetes-client-api-operate.png" alt="kubernetes-client-api-operate.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-informer">kubernetes client informer</h3>
<p><img src="/img/blog/CustomResourceDefinition/kubernetes-client-informer.png" alt="kubernetes-client-informer.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-informer-lister">kubernetes client informer lister</h3>
<p><img src="/img/blog/CustomResourceDefinition/kubernetes-client-informer-lister.png" alt="kubernetes-client-informer-lister.png" referrerpolicy="no-referrer"></p>
<h2 id="3\u96C6\u6210-controller">3\u3001\u96C6\u6210 Controller</h2>
<p>\u8FD9\u91CC\u4E3B\u8981\u662F\u5728ingress_config\uFF0C\u6DFB\u52A0\u81EA\u5B9A\u4E49CRD Resource\u7684\u5F15\u7528\u5BF9\u8C61\uFF0C\u5E76\u4E14\u901A\u8FC7informer\u673A\u5236\u76D1\u542CCRD\u5B9E\u4F8B\u7684\u53D8\u5316\uFF0C\u7136\u540E\u5B9E\u73B0\u76F8\u5173\u4E1A\u52A1\u903B\u8F91\uFF0C\u6BD4\u5982\u751F\u6210istio EnvoyFilter\u7B49</p>
<blockquote>
<p>higress/pkg/ingress/config/ingress_config.go</p>
</blockquote>
<h3 id="\u5B9A\u4E49\u76F8\u5173\u5C5E\u6027">\u5B9A\u4E49\u76F8\u5173\u5C5E\u6027</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//\u5F02\u6B65\u7EBF\u7A0B\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u76D1\u542CCRD-http2rpc\u8D44\u6E90\u53D8\u5316\u4E8B\u4EF6</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">http2rpcController http2rpc.Http2RpcController</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//\u8D44\u6E90\u53D8\u5316\u4E8B\u4EF6\u5904\u7406\u65F6\u901A\u8FC7Lister\u83B7\u53D6\u53D1\u9001\u53D8\u5316\u7684CRD\u5B9E\u4F8B\u5BF9\u8C61</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">http2rpcLister netlisterv1.Http2RpcLister</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//\u5B58\u50A8\u5168\u91CF\u7684http2rpcs\u8D44\u6E90\u5BF9\u8C61\uFF0C\u4EE5\u4FBF\u5728\u5176\u4ED6\u4E8B\u4EF6\u6D41\u7A0B\u4E2D\u6D88\u8D39</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">http2rpcs </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">*</span><span style="--0:#B392F0">higressv1</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Http2Rpc</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="//\u5F02\u6B65\u7EBF\u7A0B\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u76D1\u542CCRD-http2rpc\u8D44\u6E90\u53D8\u5316\u4E8B\u4EF6\x7Fhttp2rpcController http2rpc.Http2RpcController\x7F//\u8D44\u6E90\u53D8\u5316\u4E8B\u4EF6\u5904\u7406\u65F6\u901A\u8FC7Lister\u83B7\u53D6\u53D1\u9001\u53D8\u5316\u7684CRD\u5B9E\u4F8B\u5BF9\u8C61\x7Fhttp2rpcLister netlisterv1.Http2RpcLister\x7F//\u5B58\u50A8\u5168\u91CF\u7684http2rpcs\u8D44\u6E90\u5BF9\u8C61\uFF0C\u4EE5\u4FBF\u5728\u5176\u4ED6\u4E8B\u4EF6\u6D41\u7A0B\u4E2D\u6D88\u8D39\x7Fhttp2rpcs map[string]*higressv1.Http2Rpc"><div></div></button></div></figure></div>
<p><img src="/img/blog/CustomResourceDefinition/ingress-config.png" alt="ingress-config.png" referrerpolicy="no-referrer"></p>
<h3 id="\u5728higress\u542F\u52A8\u9636\u6BB5\u521D\u59CB\u5316\u4E0A\u8FF0\u53D8\u91CF">\u5728higress\u542F\u52A8\u9636\u6BB5\u521D\u59CB\u5316\u4E0A\u8FF0\u53D8\u91CF</h3>
<p>\u8FD9\u91CC\u5C31\u4F1A\u5F15\u7528\u81EA\u52A8\u5316\u751F\u6210\u7684\u4E00\u4E9B\u4EE3\u7801\uFF0C\u8FDB\u884CController\u7684\u521B\u5EFA\u53CA\u4E8B\u4EF6\u7ED1\u5B9A\u3002
<img src="/img/blog/CustomResourceDefinition/ingress-config-initial.png" alt="ingress-config-initial.png" referrerpolicy="no-referrer"></p>
<h3 id="\u5B9E\u73B0crd\u53D8\u66F4\u4E8B\u4EF6\u5904\u7406\u903B\u8F91">\u5B9E\u73B0CRD\u53D8\u66F4\u4E8B\u4EF6\u5904\u7406\u903B\u8F91</h3>
<p><img src="/img/blog/CustomResourceDefinition/ingress-config-event.png" alt="ingress-config-event.png" referrerpolicy="no-referrer"></p>
<h1 id="\u6269\u5C55\u9605\u8BFB">\u6269\u5C55\u9605\u8BFB</h1>
<p><a href="https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Kubernetes Controller \u673A\u5236\u8BE6\u89E3\uFF08\u4E00\uFF09</a></p>
<p><a href="https://github.com/k8s-club/k8s-club/blob/main/articles/Informer%E6%9C%BA%E5%88%B6%20-%20%E6%A6%82%E8%BF%B0.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Kubernetes Informer\u673A\u5236</a></p>`,t={title:"Higress\u81EA\u5B9A\u4E49CRD\u5F00\u53D1\u6307\u5F15",keywords:["higress","CRD"],description:"\u4ECB\u7ECDHigress\u4E2D\u81EA\u5B9A\u4E49CRD\u7684\u6574\u4E2A\u7814\u53D1\u6D41\u7A0B",author:"Hinsteny",date:"2023-08-10"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/dev/customresourcedefinition.md",n=void 0,c=function(){return`
2023\u5E748\u670810\u65E5 \xB7 \u9605\u8BFB\u9700 20 \u5206\u949F

---

# \u529F\u80FD\u5212\u5206
\u8FD9\u91CC\u6211\u4EEC\u5148\u5927\u6982\u68B3\u7406\u4E00\u4E0BHigress\u5DE5\u7A0B\u5404\u76EE\u5F55\u7684\u804C\u8D23\u5212\u5206

| **\u76EE\u5F55** | **\u529F\u80FD\u8BF4\u660E** |
| --- | --- |
| **api** | Higress\u6240\u6D89\u53CA\u64CD\u4F5C\u7684kubernetes api |
| **client** | Higress\u96C6\u6210kubernetes\u7684client\u8FDB\u884C\u8D44\u6E90\u76D1\u542C\u4E0E\u4E0B\u53D1 |
| **cmd** | \u547D\u4EE4\u884C\u53C2\u6570\u89E3\u6790\u7B49\u5904\u7406\u4EE3\u7801 |
| **docker** | \u6784\u5EFAHigress docker image\u7684\u63CF\u8FF0\u6587\u4EF6 |
| **docs** | \u6587\u6863\u5185\u5BB9 |
| **envoy** | envoy\u6E90\u7801\u5185\u5BB9 |
| **helm** | \u4F7F\u7528helm\u5B89\u88C5Higress\u7B49\u914D\u7F6E |
| **istio** | istio\u6E90\u7801\u5185\u5BB9 |
| **pkg/ingress** | Ingress \u8D44\u6E90\u8F6C\u6362\u4E3A Istio \u8D44\u6E90\u7B49\u76F8\u5173\u4EE3\u7801 |
| **pkg/bootstrap** | \u5305\u62EC\u542F\u52A8 gRPC/xDS/HTTP server \u7B49\u7684\u4EE3\u7801 |
| **plugins** | Higress \u63D2\u4EF6 sdk\uFF0C\u4EE5\u53CA\u5B98\u65B9\u5185\u7F6E\u63D2\u4EF6\u4EE3\u7801 |
| **registry** | \u5B9E\u73B0\u5BF9\u63A5\u591A\u79CD\u6CE8\u518C\u4E2D\u5FC3\u8FDB\u884C\u670D\u52A1\u53D1\u73B0\u7684\u4EE3\u7801 |
| **samples** | \u4E00\u4E9B\u5E38\u89C1Pod\u3001Service\u7684yaml\u793A\u4F8B |
| **test** | \u5355\u5143\u6D4B\u8BD5\u53CAe2e\u6D4B\u8BD5\u7528\u4F8B |
| **tools** | \u7F16\u8BD1\u3001\u6784\u5EFA\u3001image\u5206\u53D1\u4EE5\u53CA\u672C\u5730\u6D4B\u8BD5\u73AF\u5883\u642D\u5EFA\u7B49\u811A\u672C |

# \u7814\u53D1\u6307\u5F15
## CRD\u6A21\u578B\u5B9A\u4E49
### \u8FDB\u5165api\u76EE\u5F55
> higress/api

\u6839\u636E\u6240\u8981\u65B0\u5EFACRD\u7684api\u7C7B\u578B\uFF0C\u9009\u62E9\u76F8\u5BF9\u4E8E\u7684\u5B50\u76EE\u5F55\uFF0C\u6BD4\u5982
> networking/v1

### \u7F16\u5199CRD\u6A21\u578B
\u6BD4\u5982\u6211\u8FD9\u91CC\u60F3\u5B9A\u4E49\u4E00\u4E2Ahttp_2_rpc\u7684CRD\u8D44\u6E90
> http_2_rpc.proto

\`\`\`
// Copyright (c) 2022 Alibaba Group Holding Ltd.
//  
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//  
//      http://www.apache.org/licenses/LICENSE-2.0
//  
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

syntax = "proto3";

import "google/api/field_behavior.proto";

// $schema: higress.networking.v1.Http2Rpc
// $title: Http2Rpc
// $description: Configuration affecting service discovery from multi registries
// $mode: none

package higress.networking.v1;

option go_package = "github.com/alibaba/higress/api/networking/v1";

// <!-- crd generation tags
// +cue-gen:Http2Rpc:groupName:networking.higress.io
// +cue-gen:Http2Rpc:version:v1
// +cue-gen:Http2Rpc:storageVersion
// +cue-gen:Http2Rpc:annotations:helm.sh/resource-policy=keep
// +cue-gen:Http2Rpc:subresource:status
// +cue-gen:Http2Rpc:scope:Namespaced
// +cue-gen:Http2Rpc:resource:categories=higress-io,plural=http2rpcs
// +cue-gen:Http2Rpc:preserveUnknownFields:false
// -->
//
// <!-- go code generation tags
// +kubetype-gen
// +kubetype-gen:groupVersion=networking.higress.io/v1
// +genclient
// +k8s:deepcopy-gen=true
// -->
message Http2Rpc {
  oneof destination {
    DubboService dubbo = 1;
    GrpcService  grpc = 2;
 }
}

message DubboService {
  string service = 1 [(google.api.field_behavior) = REQUIRED];
  string version = 2 [(google.api.field_behavior) = REQUIRED];
  string group = 3 [(google.api.field_behavior) = OPTIONAL];
  repeated Method methods = 4 [(google.api.field_behavior) = REQUIRED];
}

message Method {
  string service_method = 1 [(google.api.field_behavior) = REQUIRED];
  string headers_attach = 2 [(google.api.field_behavior) = OPTIONAL];
  string http_path = 3 [(google.api.field_behavior) = REQUIRED];
  repeated string http_methods = 4 [(google.api.field_behavior) = REQUIRED];
  repeated Param params = 5;
}

message Param {
  string param_source = 1 [(google.api.field_behavior) = REQUIRED];
  string param_key = 2 [(google.api.field_behavior) = REQUIRED];
  string param_type = 3 [(google.api.field_behavior) = REQUIRED];
}

message GrpcService {
  oneof destination {
    string proto_descriptor_str = 1;
    string proto_descriptor_file_path = 2;
 }
  repeated string services = 3 [(google.api.field_behavior) = REQUIRED];
}

\`\`\`
## 2\u3001\u4EE3\u7801\u751F\u6210
\u8FD9\u91CC\u4F9D\u8D56\`kubernetes code generators\`\u751F\u6210\u76F8\u5173kubetype\u3001client\u3001informer\u3001lister\u7B49\u4EE3\u7801\u3002
\u5728higress\u6839\u76EE\u5F55\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C
> GENERATE_API=1 make gen-client

\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u540E\u4F1A\u751F\u6210\uFF0C\u5982\u4E0B\u4EE3\u7801
### kubernetes customresuource\u5B9A\u4E49
\u901A\u8FC7\u5C06\u8FD9\u4E2A\u5B9A\u4E49\u6CE8\u518C\u7ED9kubernetes\u96C6\u7FA4\uFF0C\u7136\u540E\u5C31\u80FD\u521B\u5EFA\u5BF9\u5E94\u7684CRD\u8D44\u6E90\u5B9E\u4F8B\u3002
![kubernetes-customresuource-definition.png](/img/blog/CustomResourceDefinition/kubernetes-customresuource-definition.png)
### CRD\u5BF9\u5E94\u8D44\u6E90\u5BF9\u8C61Go\u8BED\u8A00\u7684\u5B9A\u4E49\u53CA\u64CD\u4F5C\u65B9\u6CD5
Hingress(IngressConfig)\u521D\u59CB\u5316\u53CA\u8FD0\u884C\u9636\u6BB5\u4F1A\u4F7F\u7528\u8FD9\u91CC\u7684api\u6A21\u578B\u3002
![higress-api.png](/img/blog/CustomResourceDefinition/higress-api.png)
### kubernetes client apis
Hingress\u96C6\u6210kubernetes client\u4E0Ekube-apiserver\u4EA4\u4E92\u65F6\u4F1A\u4F7F\u7528\u8FD9\u91CC\u7684\u6A21\u578B\u5BF9\u8C61\u3002
![kubernetes-client-api.png](/img/blog/CustomResourceDefinition/kubernetes-client-api.png)
### kubernetes client apis operate
![kubernetes-client-api-operate.png](/img/blog/CustomResourceDefinition/kubernetes-client-api-operate.png)
### kubernetes client informer
![kubernetes-client-informer.png](/img/blog/CustomResourceDefinition/kubernetes-client-informer.png)
### kubernetes client informer lister
![kubernetes-client-informer-lister.png](/img/blog/CustomResourceDefinition/kubernetes-client-informer-lister.png)
## 3\u3001\u96C6\u6210 Controller
\u8FD9\u91CC\u4E3B\u8981\u662F\u5728ingress_config\uFF0C\u6DFB\u52A0\u81EA\u5B9A\u4E49CRD Resource\u7684\u5F15\u7528\u5BF9\u8C61\uFF0C\u5E76\u4E14\u901A\u8FC7informer\u673A\u5236\u76D1\u542CCRD\u5B9E\u4F8B\u7684\u53D8\u5316\uFF0C\u7136\u540E\u5B9E\u73B0\u76F8\u5173\u4E1A\u52A1\u903B\u8F91\uFF0C\u6BD4\u5982\u751F\u6210istio EnvoyFilter\u7B49
> higress/pkg/ingress/config/ingress_config.go

### \u5B9A\u4E49\u76F8\u5173\u5C5E\u6027
\`\`\`go
//\u5F02\u6B65\u7EBF\u7A0B\u542F\u52A8\u540E\uFF0C\u53EF\u4EE5\u76D1\u542CCRD-http2rpc\u8D44\u6E90\u53D8\u5316\u4E8B\u4EF6
http2rpcController http2rpc.Http2RpcController
//\u8D44\u6E90\u53D8\u5316\u4E8B\u4EF6\u5904\u7406\u65F6\u901A\u8FC7Lister\u83B7\u53D6\u53D1\u9001\u53D8\u5316\u7684CRD\u5B9E\u4F8B\u5BF9\u8C61
http2rpcLister netlisterv1.Http2RpcLister
//\u5B58\u50A8\u5168\u91CF\u7684http2rpcs\u8D44\u6E90\u5BF9\u8C61\uFF0C\u4EE5\u4FBF\u5728\u5176\u4ED6\u4E8B\u4EF6\u6D41\u7A0B\u4E2D\u6D88\u8D39
http2rpcs map[string]*higressv1.Http2Rpc
\`\`\`
![ingress-config.png](/img/blog/CustomResourceDefinition/ingress-config.png)
### \u5728higress\u542F\u52A8\u9636\u6BB5\u521D\u59CB\u5316\u4E0A\u8FF0\u53D8\u91CF
\u8FD9\u91CC\u5C31\u4F1A\u5F15\u7528\u81EA\u52A8\u5316\u751F\u6210\u7684\u4E00\u4E9B\u4EE3\u7801\uFF0C\u8FDB\u884CController\u7684\u521B\u5EFA\u53CA\u4E8B\u4EF6\u7ED1\u5B9A\u3002
![ingress-config-initial.png](/img/blog/CustomResourceDefinition/ingress-config-initial.png)
### \u5B9E\u73B0CRD\u53D8\u66F4\u4E8B\u4EF6\u5904\u7406\u903B\u8F91
![ingress-config-event.png](/img/blog/CustomResourceDefinition/ingress-config-event.png)
# \u6269\u5C55\u9605\u8BFB
[Kubernetes Controller \u673A\u5236\u8BE6\u89E3\uFF08\u4E00\uFF09](https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/)

[Kubernetes Informer\u673A\u5236](https://github.com/k8s-club/k8s-club/blob/main/articles/Informer%E6%9C%BA%E5%88%B6%20-%20%E6%A6%82%E8%BF%B0.md)
`},a=function(){return e},o=function(){return[{depth:1,slug:"\u529F\u80FD\u5212\u5206",text:"\u529F\u80FD\u5212\u5206"},{depth:1,slug:"\u7814\u53D1\u6307\u5F15",text:"\u7814\u53D1\u6307\u5F15"},{depth:2,slug:"crd\u6A21\u578B\u5B9A\u4E49",text:"CRD\u6A21\u578B\u5B9A\u4E49"},{depth:3,slug:"\u8FDB\u5165api\u76EE\u5F55",text:"\u8FDB\u5165api\u76EE\u5F55"},{depth:3,slug:"\u7F16\u5199crd\u6A21\u578B",text:"\u7F16\u5199CRD\u6A21\u578B"},{depth:2,slug:"2\u4EE3\u7801\u751F\u6210",text:"2\u3001\u4EE3\u7801\u751F\u6210"},{depth:3,slug:"kubernetes-customresuource\u5B9A\u4E49",text:"kubernetes customresuource\u5B9A\u4E49"},{depth:3,slug:"crd\u5BF9\u5E94\u8D44\u6E90\u5BF9\u8C61go\u8BED\u8A00\u7684\u5B9A\u4E49\u53CA\u64CD\u4F5C\u65B9\u6CD5",text:"CRD\u5BF9\u5E94\u8D44\u6E90\u5BF9\u8C61Go\u8BED\u8A00\u7684\u5B9A\u4E49\u53CA\u64CD\u4F5C\u65B9\u6CD5"},{depth:3,slug:"kubernetes-client-apis",text:"kubernetes client apis"},{depth:3,slug:"kubernetes-client-apis-operate",text:"kubernetes client apis operate"},{depth:3,slug:"kubernetes-client-informer",text:"kubernetes client informer"},{depth:3,slug:"kubernetes-client-informer-lister",text:"kubernetes client informer lister"},{depth:2,slug:"3\u96C6\u6210-controller",text:"3\u3001\u96C6\u6210 Controller"},{depth:3,slug:"\u5B9A\u4E49\u76F8\u5173\u5C5E\u6027",text:"\u5B9A\u4E49\u76F8\u5173\u5C5E\u6027"},{depth:3,slug:"\u5728higress\u542F\u52A8\u9636\u6BB5\u521D\u59CB\u5316\u4E0A\u8FF0\u53D8\u91CF",text:"\u5728higress\u542F\u52A8\u9636\u6BB5\u521D\u59CB\u5316\u4E0A\u8FF0\u53D8\u91CF"},{depth:3,slug:"\u5B9E\u73B0crd\u53D8\u66F4\u4E8B\u4EF6\u5904\u7406\u903B\u8F91",text:"\u5B9E\u73B0CRD\u53D8\u66F4\u4E8B\u4EF6\u5904\u7406\u903B\u8F91"},{depth:1,slug:"\u6269\u5C55\u9605\u8BFB",text:"\u6269\u5C55\u9605\u8BFB"}]},s=p((b,m,y)=>{const{layout:R,...r}=t;return r.file=i,r.url=n,l`${g()}${v(e)}`})});export{s as Content,f as __tla,a as compiledContent,s as default,i as file,t as frontmatter,o as getHeadings,c as rawContent,n as url};
