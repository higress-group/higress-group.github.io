---
title: Higress自定义CRD开发指引
keywords: [higress,CRD]
description: 介绍Higress中自定义CRD的整个研发流程
author: Hinsteny
date: "2023-08-10"
---

2023年8月10日 · 阅读需 20 分钟

---

# 功能划分
这里我们先大概梳理一下Higress工程各目录的职责划分

| **目录** | **功能说明** |
| --- | --- |
| **api** | Higress所涉及操作的kubernetes api |
| **client** | Higress集成kubernetes的client进行资源监听与下发 |
| **cmd** | 命令行参数解析等处理代码 |
| **docker** | 构建Higress docker image的描述文件 |
| **docs** | 文档内容 |
| **envoy** | envoy源码内容 |
| **helm** | 使用helm安装Higress等配置 |
| **istio** | istio源码内容 |
| **pkg/ingress** | Ingress 资源转换为 Istio 资源等相关代码 |
| **pkg/bootstrap** | 包括启动 gRPC/xDS/HTTP server 等的代码 |
| **plugins** | Higress 插件 sdk，以及官方内置插件代码 |
| **registry** | 实现对接多种注册中心进行服务发现的代码 |
| **samples** | 一些常见Pod、Service的yaml示例 |
| **test** | 单元测试及e2e测试用例 |
| **tools** | 编译、构建、image分发以及本地测试环境搭建等脚本 |

# 研发指引
## CRD模型定义
### 进入api目录
> higress/api

根据所要新建CRD的api类型，选择相对于的子目录，比如
> networking/v1

### 编写CRD模型
比如我这里想定义一个http_2_rpc的CRD资源
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
## 2、代码生成
这里依赖`kubernetes code generators`生成相关kubetype、client、informer、lister等代码。
在higress根目录执行以下命令，
> GENERATE_API=1 make gen-client

执行上述命令后会生成，如下代码
### kubernetes customresuource定义
通过将这个定义注册给kubernetes集群，然后就能创建对应的CRD资源实例。
![kubernetes-customresuource-definition.png](/img/blog/CustomResourceDefinition/kubernetes-customresuource-definition.png)
### CRD对应资源对象Go语言的定义及操作方法
Hingress(IngressConfig)初始化及运行阶段会使用这里的api模型。
![higress-api.png](/img/blog/CustomResourceDefinition/higress-api.png)
### kubernetes client apis
Hingress集成kubernetes client与kube-apiserver交互时会使用这里的模型对象。
![kubernetes-client-api.png](/img/blog/CustomResourceDefinition/kubernetes-client-api.png)
### kubernetes client apis operate
![kubernetes-client-api-operate.png](/img/blog/CustomResourceDefinition/kubernetes-client-api-operate.png)
### kubernetes client informer
![kubernetes-client-informer.png](/img/blog/CustomResourceDefinition/kubernetes-client-informer.png)
### kubernetes client informer lister
![kubernetes-client-informer-lister.png](/img/blog/CustomResourceDefinition/kubernetes-client-informer-lister.png)
## 3、集成 Controller
这里主要是在ingress_config，添加自定义CRD Resource的引用对象，并且通过informer机制监听CRD实例的变化，然后实现相关业务逻辑，比如生成istio EnvoyFilter等
> higress/pkg/ingress/config/ingress_config.go

### 定义相关属性
```go
//异步线程启动后，可以监听CRD-http2rpc资源变化事件
http2rpcController http2rpc.Http2RpcController
//资源变化事件处理时通过Lister获取发送变化的CRD实例对象
http2rpcLister netlisterv1.Http2RpcLister
//存储全量的http2rpcs资源对象，以便在其他事件流程中消费
http2rpcs map[string]*higressv1.Http2Rpc
```
![ingress-config.png](/img/blog/CustomResourceDefinition/ingress-config.png)
### 在higress启动阶段初始化上述变量
这里就会引用自动化生成的一些代码，进行Controller的创建及事件绑定。
![ingress-config-initial.png](/img/blog/CustomResourceDefinition/ingress-config-initial.png)
### 实现CRD变更事件处理逻辑
![ingress-config-event.png](/img/blog/CustomResourceDefinition/ingress-config-event.png)
# 扩展阅读
[Kubernetes Controller 机制详解（一）](https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/)

[Kubernetes Informer机制](https://github.com/k8s-club/k8s-club/blob/main/articles/Informer%E6%9C%BA%E5%88%B6%20-%20%E6%A6%82%E8%BF%B0.md)
