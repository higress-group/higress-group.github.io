---
title: Higress Custom CRD Development Guidelines
keywords: [higress,CRD]
description: Introduction to the development process of custom CRDs in Higress
author: Hinsteny
date: "2023-08-10"
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/dev/customresourcedefinition.md
---

August 10, 2023 · Reading time: 20 minutes

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

```
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

```
## 2. Code Generation
This depends on `kubernetes code generators` to generate related kubetype, client, informer, lister, etc. code.
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
```go
//After the asynchronous thread starts, it can monitor CRD-http2rpc resource change events
http2rpcController http2rpc.Http2RpcController
//Get the CRD instance object that has changed through Lister when handling resource change events
http2rpcLister netlisterv1.Http2RpcLister
//Store all http2rpcs resource objects for consumption in other event processes
http2rpcs map[string]*higressv1.Http2Rpc
```
![ingress-config.png](/img/blog/CustomResourceDefinition/ingress-config.png)
### Initialize the Above Variables During Higress Startup
This will reference some automatically generated code to create the Controller and bind events.
![ingress-config-initial.png](/img/blog/CustomResourceDefinition/ingress-config-initial.png)
### Implement CRD Change Event Handling Logic
![ingress-config-event.png](/img/blog/CustomResourceDefinition/ingress-config-event.png)
# Further Reading
[Kubernetes Controller Mechanism Explained (Part 1)](https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/)

[Kubernetes Informer Mechanism](https://github.com/k8s-club/k8s-club/blob/main/articles/Informer%E6%9C%BA%E5%88%B6%20-%20%E6%A6%82%E8%BF%B0.md)
