---
title: Higress自定义CRD开发指引
keywords: [higress,CRD]
description: 介绍Higress中自定义CRD的整个研发流程
author: Hinsteny
date: 2023-08-10
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/CustomResourceDefinition.md
---

2023年8月10日 · 阅读需 20 分钟

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
![kubernetes-customresuource-definition.png](..%2F..%2F..%2Fstatic%2Fimg%2Fblog%2FCustomResourceDefinition%2Fpic%2Fkubernetes-customresuource-definition.png)
### CRD对应资源对象Go语言的定义及操作方法
Hingress(IngressConfig)初始化及运行阶段会使用这里的api模型。
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691638830293-356507c1-cc35-4fb3-963f-38d0fbdc0f1d.png#clientId=uae555697-b057-4&from=paste&height=781&id=u7345b6c2&originHeight=1562&originWidth=1992&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1018095&status=done&style=none&taskId=u4e384bd3-b2ba-4518-97d8-f8192892033&title=&width=996)
### kubernetes client apis
Hingress集成kubernetes client与kube-apiserver交互时会使用这里的模型对象。
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691640138578-ad64a0e8-1f85-436d-9699-727655588c37.png#clientId=u0aadc452-8f52-4&from=paste&height=783&id=ub473660e&originHeight=1566&originWidth=1992&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1033583&status=done&style=none&taskId=u8a504699-d004-4056-be82-b4ee88deb09&title=&width=996)
### kubernetes client apis operate
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691640273619-a1406a73-93a9-4e65-9db3-19f4b60539b1.png#clientId=u0aadc452-8f52-4&from=paste&height=782&id=uf487e4b6&originHeight=1564&originWidth=2230&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1182810&status=done&style=none&taskId=u03d1c411-4cdc-431c-a675-9a2e8de88a8&title=&width=1115)
### kubernetes client informer
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691640387721-69bfd584-0d00-468e-95c5-ddee2e7988e8.png#clientId=u0aadc452-8f52-4&from=paste&height=779&id=u1043ad78&originHeight=1558&originWidth=2146&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1060070&status=done&style=none&taskId=uc5e3f261-c2f4-4005-a140-eba172375cb&title=&width=1073)
### kubernetes client informer lister
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691640439389-bcaff4f6-6f19-49a6-b79d-aacd5448a2aa.png#clientId=u0aadc452-8f52-4&from=paste&height=789&id=ud04a71b6&originHeight=1578&originWidth=2120&originalType=binary&ratio=2&rotation=0&showTitle=false&size=977972&status=done&style=none&taskId=uff519fa7-3c98-408f-9af7-ad03c84f329&title=&width=1060)
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
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691646972343-b9eba16b-f6da-4375-8d11-1badaf535271.png#clientId=ufaa30722-a878-4&from=paste&height=745&id=u8f3a4fa2&originHeight=1490&originWidth=1840&originalType=binary&ratio=2&rotation=0&showTitle=false&size=802407&status=done&style=none&taskId=u890f1810-801c-4efe-a236-7ef8d9e86de&title=&width=920)
### 在higress启动阶段初始化上述变量
这里就会引用自动化生成的一些代码，进行Controller的创建及事件绑定。
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691647251877-c9438acf-9b07-4f02-a134-8aba1740c4e6.png#clientId=ufaa30722-a878-4&from=paste&height=725&id=u2bad97cc&originHeight=1450&originWidth=2526&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1139013&status=done&style=none&taskId=ueeb2eb3a-c40f-423f-afcf-e590ae7df40&title=&width=1263)
### 实现CRD变更事件处理逻辑
![image.png](https://intranetproxy.alipay.com/skylark/lark/0/2023/png/332152/1691650054515-150a998c-05fa-4dfc-8ec0-ceb397b6a7f9.png#clientId=ufaa30722-a878-4&from=paste&height=777&id=u7f276124&originHeight=1554&originWidth=2498&originalType=binary&ratio=2&rotation=0&showTitle=false&size=1058153&status=done&style=none&taskId=ub1b8d00a-307a-44ce-bb0a-cc30a150c9b&title=&width=1249)
# 扩展阅读
[Kubernetes Controller 机制详解（一）](https://www.zhaohuabing.com/post/2023-03-09-how-to-create-a-k8s-controller/)

[Kubernetes Informer机制](https://github.com/k8s-club/k8s-club/blob/main/articles/Informer%E6%9C%BA%E5%88%B6%20-%20%E6%A6%82%E8%BF%B0.md)
