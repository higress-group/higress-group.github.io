const e="latest/zh-cn/dev/customresourcedefinition.md",i="docs",t="latest/zh-cn/dev/customresourcedefinition",r=`
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
`,s={title:"Higress\u81EA\u5B9A\u4E49CRD\u5F00\u53D1\u6307\u5F15",description:"\u4ECB\u7ECDHigress\u4E2D\u81EA\u5B9A\u4E49CRD\u7684\u6574\u4E2A\u7814\u53D1\u6D41\u7A0B",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","CRD"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/dev/customresourcedefinition.md",rawData:void 0};export{o as _internal,r as body,i as collection,s as data,e as id,t as slug};
