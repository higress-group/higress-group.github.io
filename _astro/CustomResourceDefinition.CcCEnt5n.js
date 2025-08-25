import{c as d,__tla as l}from"./astro-component.m4CCZO6J.js";import{r as p,m as g,u as v,__tla as u}from"./constant.D4Mjy2rC.js";import{__tla as h}from"./astro/assets-service.BhtN0nM5.js";let s,o,i,t,a,c,n,f=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<p>August 10, 2023 \xB7 Reading time: 20 minutes</p>
<hr>
<h1 id="functional-division">Functional Division</h1>
<p>Let\u2019s first outline the responsibilities of each directory in the Higress project</p>





































































<table><thead><tr><th><strong>Directory</strong></th><th><strong>Function Description</strong></th></tr></thead><tbody><tr><td><strong>api</strong></td><td>Kubernetes APIs used by Higress</td></tr><tr><td><strong>client</strong></td><td>Higress integration with Kubernetes client for resource monitoring and distribution</td></tr><tr><td><strong>cmd</strong></td><td>Command-line parameter parsing and processing code</td></tr><tr><td><strong>docker</strong></td><td>Description files for building Higress docker images</td></tr><tr><td><strong>docs</strong></td><td>Documentation content</td></tr><tr><td><strong>envoy</strong></td><td>Envoy source code</td></tr><tr><td><strong>helm</strong></td><td>Configuration for installing Higress using Helm</td></tr><tr><td><strong>istio</strong></td><td>Istio source code</td></tr><tr><td><strong>pkg/ingress</strong></td><td>Code related to converting Ingress resources to Istio resources</td></tr><tr><td><strong>pkg/bootstrap</strong></td><td>Code for starting gRPC/xDS/HTTP servers, etc.</td></tr><tr><td><strong>plugins</strong></td><td>Higress plugin SDK and official built-in plugin code</td></tr><tr><td><strong>registry</strong></td><td>Code implementing service discovery with various service registries</td></tr><tr><td><strong>samples</strong></td><td>Examples of common Pod and Service YAML configurations</td></tr><tr><td><strong>test</strong></td><td>Unit tests and e2e test cases</td></tr><tr><td><strong>tools</strong></td><td>Scripts for compilation, building, image distribution, and local test environment setup</td></tr></tbody></table>
<h1 id="development-guide">Development Guide</h1>
<h2 id="crd-model-definition">CRD Model Definition</h2>
<h3 id="enter-the-api-directory">Enter the api directory</h3>
<blockquote>
<p>higress/api</p>
</blockquote>
<p>Select the appropriate subdirectory based on the type of API for the new CRD, such as</p>
<blockquote>
<p>networking/v1</p>
</blockquote>
<h3 id="write-the-crd-model">Write the CRD Model</h3>
<p>For example, if I want to define an http_2_rpc CRD resource</p>
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
<h2 id="2-code-generation">2. Code Generation</h2>
<p>This depends on <code dir="auto">kubernetes code generators</code> to generate related kubetype, client, informer, lister, etc. code.
Execute the following command in the higress root directory,</p>
<blockquote>
<p>GENERATE_API=1 make gen-client</p>
</blockquote>
<p>After executing the above command, the following code will be generated</p>
<h3 id="kubernetes-customresource-definition">Kubernetes CustomResource Definition</h3>
<p>By registering this definition with the Kubernetes cluster, you can then create corresponding CRD resource instances.
<img src="/img/blog/CustomResourceDefinition/kubernetes-customresuource-definition.png" alt="kubernetes-customresuource-definition.png" referrerpolicy="no-referrer"></p>
<h3 id="go-language-definition-and-operation-methods-for-crd-resource-objects">Go Language Definition and Operation Methods for CRD Resource Objects</h3>
<p>Higress (IngressConfig) will use this API model during initialization and operation.
<img src="/img/blog/CustomResourceDefinition/higress-api.png" alt="higress-api.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-apis">Kubernetes Client APIs</h3>
<p>Higress will use these model objects when integrating with the Kubernetes client to interact with kube-apiserver.
<img src="/img/blog/CustomResourceDefinition/kubernetes-client-api.png" alt="kubernetes-client-api.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-apis-operation">Kubernetes Client APIs Operation</h3>
<p><img src="/img/blog/CustomResourceDefinition/kubernetes-client-api-operate.png" alt="kubernetes-client-api-operate.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-informer">Kubernetes Client Informer</h3>
<p><img src="/img/blog/CustomResourceDefinition/kubernetes-client-informer.png" alt="kubernetes-client-informer.png" referrerpolicy="no-referrer"></p>
<h3 id="kubernetes-client-informer-lister">Kubernetes Client Informer Lister</h3>
<p><img src="/img/blog/CustomResourceDefinition/kubernetes-client-informer-lister.png" alt="kubernetes-client-informer-lister.png" referrerpolicy="no-referrer"></p>
<h2 id="3-integrating-the-controller">3. Integrating the Controller</h2>
<p>This mainly involves adding references to custom CRD Resources in ingress_config, and monitoring changes to CRD instances through the informer mechanism, then implementing related business logic, such as generating Istio EnvoyFilter, etc.</p>
<blockquote>
<p>higress/pkg/ingress/config/ingress_config.go</p>
</blockquote>
<h3 id="define-related-properties">Define Related Properties</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//After the asynchronous thread starts, it can monitor CRD-http2rpc resource change events</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">http2rpcController http2rpc.Http2RpcController</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//Get the CRD instance object that has changed through Lister when handling resource change events</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">http2rpcLister netlisterv1.Http2RpcLister</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">//Store all http2rpcs resource objects for consumption in other event processes</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">http2rpcs </span><span style="--0:#F97583">map</span><span style="--0:#E1E4E8">[</span><span style="--0:#F97583">string</span><span style="--0:#E1E4E8">]</span><span style="--0:#F97583">*</span><span style="--0:#B392F0">higressv1</span><span style="--0:#E1E4E8">.</span><span style="--0:#B392F0">Http2Rpc</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="//After the asynchronous thread starts, it can monitor CRD-http2rpc resource change events\x7Fhttp2rpcController http2rpc.Http2RpcController\x7F//Get the CRD instance object that has changed through Lister when handling resource change events\x7Fhttp2rpcLister netlisterv1.Http2RpcLister\x7F//Store all http2rpcs resource objects for consumption in other event processes\x7Fhttp2rpcs map[string]*higressv1.Http2Rpc"><div></div></button></div></figure></div>
<p><img src="/img/blog/CustomResourceDefinition/ingress-config.png" alt="ingress-config.png" referrerpolicy="no-referrer"></p>
<h3 id="initialize-the-above-variables-during-higress-startup">Initialize the Above Variables During Higress Startup</h3>
<p>This will reference some automatically generated code to create the Controller and bind events.
<img src="/img/blog/CustomResourceDefinition/ingress-config-initial.png" alt="ingress-config-initial.png" referrerpolicy="no-referrer"></p>
<h3 id="implement-crd-change-event-handling-logic">Implement CRD Change Event Handling Logic</h3>
<p><img src="/img/blog/CustomResourceDefinition/ingress-config-event.png" alt="ingress-config-event.png" referrerpolicy="no-referrer"></p>
<h1 id="further-reading">Further Reading</h1>
<p><a href="https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Kubernetes Controller Mechanism Explained (Part 1)</a></p>
<p><a href="https://github.com/k8s-club/k8s-club/blob/main/articles/Informer%E6%9C%BA%E5%88%B6%20-%20%E6%A6%82%E8%BF%B0.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Kubernetes Informer Mechanism</a></p>`,t={title:"Higress Custom CRD Development Guidelines",keywords:["higress","CRD"],description:"Introduction to the development process of custom CRDs in Higress",author:"Hinsteny",date:"2023-08-10",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/dev/customresourcedefinition.md"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/dev/CustomResourceDefinition.md",n=void 0,c=function(){return`
August 10, 2023 \xB7 Reading time: 20 minutes

---

# Functional Division
Let's first outline the responsibilities of each directory in the Higress project

| **Directory** | **Function Description** |
| --- | --- |
| **api** | Kubernetes APIs used by Higress |
| **client** | Higress integration with Kubernetes client for resource monitoring and distribution |
| **cmd** | Command-line parameter parsing and processing code |
| **docker** | Description files for building Higress docker images |
| **docs** | Documentation content |
| **envoy** | Envoy source code |
| **helm** | Configuration for installing Higress using Helm |
| **istio** | Istio source code |
| **pkg/ingress** | Code related to converting Ingress resources to Istio resources |
| **pkg/bootstrap** | Code for starting gRPC/xDS/HTTP servers, etc. |
| **plugins** | Higress plugin SDK and official built-in plugin code |
| **registry** | Code implementing service discovery with various service registries |
| **samples** | Examples of common Pod and Service YAML configurations |
| **test** | Unit tests and e2e test cases |
| **tools** | Scripts for compilation, building, image distribution, and local test environment setup |

# Development Guide
## CRD Model Definition
### Enter the api directory
> higress/api

Select the appropriate subdirectory based on the type of API for the new CRD, such as
> networking/v1

### Write the CRD Model
For example, if I want to define an http_2_rpc CRD resource
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
## 2. Code Generation
This depends on \`kubernetes code generators\` to generate related kubetype, client, informer, lister, etc. code.
Execute the following command in the higress root directory,
> GENERATE_API=1 make gen-client

After executing the above command, the following code will be generated
### Kubernetes CustomResource Definition
By registering this definition with the Kubernetes cluster, you can then create corresponding CRD resource instances.
![kubernetes-customresuource-definition.png](/img/blog/CustomResourceDefinition/kubernetes-customresuource-definition.png)
### Go Language Definition and Operation Methods for CRD Resource Objects
Higress (IngressConfig) will use this API model during initialization and operation.
![higress-api.png](/img/blog/CustomResourceDefinition/higress-api.png)
### Kubernetes Client APIs
Higress will use these model objects when integrating with the Kubernetes client to interact with kube-apiserver.
![kubernetes-client-api.png](/img/blog/CustomResourceDefinition/kubernetes-client-api.png)
### Kubernetes Client APIs Operation
![kubernetes-client-api-operate.png](/img/blog/CustomResourceDefinition/kubernetes-client-api-operate.png)
### Kubernetes Client Informer
![kubernetes-client-informer.png](/img/blog/CustomResourceDefinition/kubernetes-client-informer.png)
### Kubernetes Client Informer Lister
![kubernetes-client-informer-lister.png](/img/blog/CustomResourceDefinition/kubernetes-client-informer-lister.png)
## 3. Integrating the Controller
This mainly involves adding references to custom CRD Resources in ingress_config, and monitoring changes to CRD instances through the informer mechanism, then implementing related business logic, such as generating Istio EnvoyFilter, etc.
> higress/pkg/ingress/config/ingress_config.go

### Define Related Properties
\`\`\`go
//After the asynchronous thread starts, it can monitor CRD-http2rpc resource change events
http2rpcController http2rpc.Http2RpcController
//Get the CRD instance object that has changed through Lister when handling resource change events
http2rpcLister netlisterv1.Http2RpcLister
//Store all http2rpcs resource objects for consumption in other event processes
http2rpcs map[string]*higressv1.Http2Rpc
\`\`\`
![ingress-config.png](/img/blog/CustomResourceDefinition/ingress-config.png)
### Initialize the Above Variables During Higress Startup
This will reference some automatically generated code to create the Controller and bind events.
![ingress-config-initial.png](/img/blog/CustomResourceDefinition/ingress-config-initial.png)
### Implement CRD Change Event Handling Logic
![ingress-config-event.png](/img/blog/CustomResourceDefinition/ingress-config-event.png)
# Further Reading
[Kubernetes Controller Mechanism Explained (Part 1)](https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/)

[Kubernetes Informer Mechanism](https://github.com/k8s-club/k8s-club/blob/main/articles/Informer%E6%9C%BA%E5%88%B6%20-%20%E6%A6%82%E8%BF%B0.md)
`},o=function(){return e},a=function(){return[{depth:1,slug:"functional-division",text:"Functional Division"},{depth:1,slug:"development-guide",text:"Development Guide"},{depth:2,slug:"crd-model-definition",text:"CRD Model Definition"},{depth:3,slug:"enter-the-api-directory",text:"Enter the api directory"},{depth:3,slug:"write-the-crd-model",text:"Write the CRD Model"},{depth:2,slug:"2-code-generation",text:"2. Code Generation"},{depth:3,slug:"kubernetes-customresource-definition",text:"Kubernetes CustomResource Definition"},{depth:3,slug:"go-language-definition-and-operation-methods-for-crd-resource-objects",text:"Go Language Definition and Operation Methods for CRD Resource Objects"},{depth:3,slug:"kubernetes-client-apis",text:"Kubernetes Client APIs"},{depth:3,slug:"kubernetes-client-apis-operation",text:"Kubernetes Client APIs Operation"},{depth:3,slug:"kubernetes-client-informer",text:"Kubernetes Client Informer"},{depth:3,slug:"kubernetes-client-informer-lister",text:"Kubernetes Client Informer Lister"},{depth:2,slug:"3-integrating-the-controller",text:"3. Integrating the Controller"},{depth:3,slug:"define-related-properties",text:"Define Related Properties"},{depth:3,slug:"initialize-the-above-variables-during-higress-startup",text:"Initialize the Above Variables During Higress Startup"},{depth:3,slug:"implement-crd-change-event-handling-logic",text:"Implement CRD Change Event Handling Logic"},{depth:1,slug:"further-reading",text:"Further Reading"}]},s=d((m,b,y)=>{const{layout:R,...r}=t;return r.file=i,r.url=n,p`${g()}${v(e)}`})});export{s as Content,f as __tla,o as compiledContent,s as default,i as file,t as frontmatter,a as getHeadings,c as rawContent,n as url};
