---
title: Wasm 插件原理
keywords: [Higress]
---

# Wasm 插件原理

本章主要介绍 Proxy-Wasm  Go SDK 和 Wasm 插件基本原理。

## 1 Wasm、TinyGo、Proxy-Wasm Go SDK

### 1.1 Wasm

#### 1.1.1 什么是 Wasm ？

 [WebAssembly（简称 Wasm）](https://webassembly.org/) 是操作堆栈虚拟机的二进制指令集，Wasm 可以在 Web 浏览器中运行或者其他环境比如服务器端应用程序运行。Wasm有以下特点：

- 高效性能：提供了接近机器码的性能。
- 跨平台：Wasm 是一种与平台无关的格式，可以在任何支持它的平台上运行，包括浏览器和服务器。
- 安全性：Wasm 在一个内存安全的沙箱环境中运行，这意味着它可以安全地执行不受信任的代码，而不会访问或修改主机系统的其他部分。
- 可移植性：Wasm 模块可以被编译成 WebAssembly 二进制文件，这些文件可以被传输和加载到支持 Wasm 的任何环境中。
- 多语言支持：Wasm 支持多种编程语言，开发者可以使用 C、C++、Rust、Go 等多种语言编写代码，然后编译成 Wasm 格式。

#### 1.1.2 Wasm 模块 

Wasm 模块主要有以下两种格式：
- 二进制格式：Wasm 的主要编码格式，以 .wasm 后缀结尾。
- 文本格式：主要是为了方便开发者理解 Wasm 模块，以 .wat 后缀结尾，相当于汇编语言程序。

Wasm 模块二进制格式是 Wasm 二进制文件，Wasm 模块二进制格式也是以魔数和版本号开头，之后就是模块的主体内容，这些内容根据不同用途被分别放在不同的段（Section） 中。一共定义了 12 种段，每种段分配了 ID（从 0 到 11），依次有如下 12 个段：自定义段、类型段、导入段、函数段、表段、内存段、全局段、导出段、起始段、元素段、代码段、数据段。
Wasm 模块二进制格式的组成如下图（图片来源 [WebAssembly 解释器实现篇](https://github.com/mcuking/blog/issues/96/)）所示： 
![img](https://img.alicdn.com/imgextra/i1/O1CN01rLuxGp1zIX413ZQ0g_!!6000000006691-0-tps-1784-1266.jpg)

每一个不同的段都描述了这个 Wasm 模块的一部分信息。而模块内的所有段放在一起，便描述了这个 Wasm 模块的全部信息：
- 内存段和数据段：内存段是线性内存（linear memory）用于存储程序的运行时动态数据。数据段用于存储初始化内存的静态数据。内存可以从外部宿主导入，同时内存对象也可以导出到外部宿主环境。
- 表段和元素段：表段用于存储对象引用，目前对象只能是函数，因此可以通过表段实现函数指针的功能。元素段用于存储初始化表段的数据。表对象可以从外部宿主导入，同时表对象也可以导出到外部宿主环境。
- 起始段：起始段用于存储起始函数的索引，即指定了一个在加载时自动运行的函数。起始函数主要作用：1. 在模块加载后进行初始化工作； 2. 将模块变成可执行文件。
- 全局段：全局段用于存储全局变量的信息（全局变量的值类型、可变性、初始化表达式等）。
- 函数段、代码段和类型段：这三个段均是用于存储表达函数的数据。其中
  - 类型段：类型段用于存储模块内所有的函数签名（函数签名记录了函数的参数和返回值的类型和数量），注意若存在多个函数的函数签名相同，则存储一份即可。
  - 函数段：函数段用于存储函数对应的函数签名索引，注意是函数签名的索引，而不是函数索引。
  - 代码段：代码段用于存储函数的字节码和局部变量，也就是函数体内的局部变量和代码所对应的字节码。
- 导入段和导出段：导出段用于存储导出项信息（导出项的成员名、类型，以及在对应段中的索引等）。导入段用于存储导入项信息（导入项的成员名、类型，以及从哪个模块导入等）。导出/导入项类型有 4 种：函数、表、内存、全局变量。
- 自定义段：自定义段主要用于保存调试符号等和运行无关的信息。

关于 Wasm 模块二进制格式详细内容可以参考 [Wasm 模块 Binary Format](https://webassembly.github.io/spec/core/binary/modules.html)。

Wasm 模块 wat 文本格式 使用了 `S- 表达式` 的形式来表达 Wasm 模块及其相关定义。关于 wat 格式的更多介绍可以参考 [理解 WebAssembly 文本格式](https://developer.mozilla.org/zh-CN/docs/WebAssembly/Understanding_the_text_format)。
下图（图片来源 [WebAssembly 解释器实现篇](https://github.com/mcuking/blog/issues/96/)）就是使用 C 语言编写的阶乘函数，以及对应的 Wasm 文本格式和二进制格式。
![img](https://img.alicdn.com/imgextra/i4/O1CN01VcoLBQ1ZcWL5XHYIR_!!6000000003215-0-tps-1892-878.jpg)

可以通过 [WebAssembly Code Explorer](https://wasdk.github.io/wasmcodeexplorer/) 更直观地查看 Wasm 二进制格式和文本格式之间的关联。也可以通过 [wabt](https://github.com/WebAssembly/wabt) 提供工具 ，可以方便的进行 Wasm 二进制格式和文本格式的转换。

#### 1.1.3  Wasm 指令集

Wasm 指令集包含如下内容：
- Wasm 指令主要分为控制指令、参数指令、变量指令、内存指令和数值指令，每条指令包含操作码和操作数。感兴趣的可以点击查看下 [Wasm 所有的操作码](https://pengowray.github.io/wasm-ops/), 可视化表格直观地展示了 Wasm 所有的操作码。
- 只有四种数据类型： i32、i64、f32、f64
- 指令基于栈，并且支持递归调用。例如 i32.add 从栈弹出两个 i32 类型的值，并将它们相加，然后将结果压入栈。
- 从内存读取数据
  - i32.load 从内存中读取一个 i32 类型的值。
  - i32.const value 将一个 i32 类型的值压入栈。
  - 从线性内存读取数据

关于更多 Wasm 解释器实现原理的可以参考 [WebAssembly 解释器实现篇](https://github.com/mcuking/blog/issues/96)。

### 1.2 TinyGo 

[TinyGo](https://tinygo.org/) 是一个 Go 语言编译器，它专注于生成小型、高效的 Go 程序，特别是为嵌入式系统和 WebAssembly 环境设计。 TinyGo 与 Go 语言的标准编译器不同，它有以下优势：

- 生成小型二进制文件：TinyGo 优化了生成的二进制文件的大小，使其非常适合资源受限的环境。
- 简化的 Go 标准库：TinyGo 提供了一个简化版本的 Go 标准库，减少了依赖和复杂性。TinyGo 支持标准库详情：https://tinygo.org/docs/reference/lang-support/stdlib/ 。
- 跨平台编译：TinyGo 支持跨平台编译，允许开发者为不同的目标平台生成代码。
- 支持 WebAssembly：通过使用 TinyGo，开发者可以为 WebAssembly 环境编写高效的 Go 应用程序，同时利用 Go 语言的简洁性和易用性。

“为什么不使用官方 Go 编译器？”的问题，如果对细节感兴趣，请参考 Go 仓库中的相关 issue：

- https://github.com/golang/go/issues/25612
- https://github.com/golang/go/issues/31105
- https://github.com/golang/go/issues/38248

这些 issue 讨论了官方 Go 编译器在生成 Wasm 支持方面的限制和进展。 TinyGo 作为一个替代方案，能够生成适合 [Proxy-Wasm ABI](https://github.com/proxy-wasm/spec) 规范的 Wasm 二进制文件，这使得它成为开发 Proxy-Wasm 应用程序的理想选择。

### 1.3 Proxy-Wasm Go SDK

[Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk) 依赖于 TinyGo, 同时 Proxy-Wasm Go SDK 是基于 [Proxy-Wasm ABI](https://github.com/proxy-wasm/spec) 规范使用 Go 编程语言扩展网络代理（例如 Envoyproxy）的 SDK， 而 Proxy-Wasm ABI 定义了网络代理和在网络代理内部运行的 Wasm 虚拟机之间的接口。
通过这个 SDK，可以轻松地生成符合 Proxy-Wasm 规范的 Wasm 二进制文件，而无需了解 Proxy-Wasm ABI 规范，同时开发人员可以依赖这个 SDK 的 Go API 来开发插件扩展 Enovy 功能。


## 2 Wasm VM、插件和 Envoy 配置

Wasm 虚拟机（Wasm VM） 或简称 VM 指的是加载 Wasm 程序的实例。 在 Envoy 中，VM 通常在每个线程中创建并相互隔离。因此 Wasm 程序将复制到 Envoy 所创建的线程里，并在这些虚拟机上加载并执行。
插件提供了一种灵活的方式来扩展和自定义 Envoy 的行为。Proxy-Wasm 规范允许在每个 VM 中配置多个插件。因此一个 VM 可以被多个插件共同使用。Envoy 中有三种类型插件: `Http Filter`、`Network Filter` 和 `Wasm Service`。

- `Http Filter` 是一种处理 Http 协议的插件，例如操作 Http 请求头、正文等。
- `Network Filter` 是一种处理 Tcp 协议的插件，例如操作 Tcp 数据帧、连接建立等。
- `Wasm Service` 是在单例 VM 中运行的插件类型（即在 Envoy 主线程中只有一个实例）。它主要用于执行与 `Network Filter` 或 `Http Filter` 并行的一些额外工作，如聚合指标、日志等。这样的单例 VM 本身也被称为 `Wasm Service`。

其架构如下图（图片来源 [Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)）：
![img](https://img.alicdn.com/imgextra/i4/O1CN018UJzEX1YlqnAmBV4u_!!6000000003100-0-tps-2321-1190.jpg)


### 2.1 Envoy 配置

所有类型插件的配置都包含 `vm_config` 用于配置 Wasm VM， 和 `configuration` 用于配置插件实例。

```yaml
vm_config:
  vm_id: "foo"
  runtime: "envoy.wasm.runtime.v8"
  configuration:
    "@type": type.googleapis.com/google.protobuf.StringValue
    value: '{"my-vm-env": "dev"}'
  code:
    local:
      filename: "example.wasm"
configuration:
  "@type": type.googleapis.com/google.protobuf.StringValue
  value: '{"my-plugin-config": "bar"}'
```

配置说明如下：

| 字段                       | 描述                                            |
|--------------------------|-----------------------------------------------|
| `vm_config`              | 配置 Wasm VM                                    |
| `vm_config.vm_id`        | 用于跨 VM 通信的语义隔离。详情请参考 跨 VM 通信 部分。              |
| `vm_config.runtime`      | 指定 Wasm 运行时类型。默认为 envoy.wasm.runtime.v8。      |
| `vm_config.configuration` | 用于设置 VM 的配置数据                                 |
| `vm_config.code`         | Wasm 二进制文件的位置                                 |
| `configuration`          | 对应于每个插件实例配置（在下面介绍的 PluginContext）。 |

> 完全相同的 vm_config 配置的多个插件它们之间共享一个 Wasm VM，单个 Wasm VM 用于多个 Http Filter 或 Network Filter，可以提升内存/CPU 资源效率、降低启动延迟。
> 完整的 Envoy API 配置可以 [参考 Envoy 文档](https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/wasm/v3/wasm.proto#envoy-v3-api-msg-extensions-wasm-v3-pluginconfig)。

Envoy Wasm 运行时目前有以下几种选择:
- envoy.wasm.runtime.null：这表示一个空的沙盒（null sandbox）环境，Wasm 模块必须被编译并链接到 Envoy 的二进制文件中。这种方式适用于那些需要将 Wasm 模块与 Envoy 二进制文件一起分发的部署场景。
- envoy.wasm.runtime.v8: 基于 V8 JavaScript 引擎的运行时。
- envoy.wasm.runtime.wamr: WAMR (WebAssembly Micro Runtime) 运行时。
- envoy.wasm.runtime.wasmtime:  Wasmtime 运行时。

不同的运行时有各自的优缺点，比如 [V8](https://v8.dev/) 性能较好但容器体积较大,[WAMR](https://github.com/bytecodealliance/wasm-micro-runtime) 和 [wasmtime](https://wasmtime.dev/) 则相对轻量。

> [待补充？] envoy v8 runtime 如何加载 wasm 和 如何和 envoy 交互原理。

### 2.2 Http Filter 配置

Http Filter 插件配置设置为 `envoy.filter.http.wasm`，Http Filter 插件可以处理 HTTP 请求和响应。 其主要配置如下：
```yaml
http_filters:
  - name: envoy.filters.http.wasm
    typed_config:
      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
      value:
        config:
          configuration:
            "@type": type.googleapis.com/google.protobuf.StringValue
            value: |
              {
                "header": "x-wasm-header",
                "value": "demo-wasm"
              }
          vm_config:
            runtime: "envoy.wasm.runtime.v8"
            code:
              local:
                filename: "./examples/http_headers/main.wasm"
  - name: envoy.filters.http.router
    typed_config:
      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
```

这时 Envoy 会在每个工作线程中实例化一个 Wasm 虚拟机，该虚拟机将专门用于处理该线程上的 HTTP 请求和响应。每个虚拟机都会加载和执行 WebAssembly 代码，允许对 HTTP 流量进行自定义处理，如修改头信息、处理请求和响应体等。 
完整的配置可以参考 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/http_headers/envoy.yaml) 。


### 2.3 Network Filter 配置

`Network Filter` 插件配置设置为 `envoy.filters.network.wasm`，`Network Filter` 插件可以处理 TCP 请求和响应。 其主要配置如下：

```yaml
filter_chains:
- filters:
    - name: envoy.filters.network.wasm
      typed_config:
        "@type": type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm
        config:
          vm_config: { ... }
          # ... plugin config follows
    - name: envoy.tcp_proxy
```

这时 Envoy 会在每个工作线程中实例化一个 Wasm 虚拟机，该虚拟机将专门用于处理该线程上的 TCP 请求和响应。每个虚拟机都会加载和执行 WebAssembly 代码，允许对 TCP 流量进行自定义处理等。
完整的配置可以参考 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/network/envoy.yaml) 。


### 2.4 Wasm Service 配置

`Wasm Service` 插件配置设置为 `envoy.bootstrap.wasm`。插件在 Envoy 启动时加载的，其主要配置如下：

```yaml
bootstrap_extensions:
- name: envoy.bootstrap.wasm
  typed_config:
    "@type": type.googleapis.com/envoy.extensions.wasm.v3.WasmService
    singleton: true
    config:
      vm_config: { ... }
      # ... plugin config follows
```

`singleton` 设置为 true 时，生成虚拟机（VM）是单例，并且运行在 Envoy 的主线程上，因此它不会阻塞任何工作线程。

完整的配置可以参考 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/envoy.yaml) 。

### 2.5 每个线程中多个插件共享一个 VM

每个线程中多个插件共享一个 VM，其主要配置如下：

```yaml
static_resources:
  listeners:
    - name: http-header-operation
      address:
        socket_address:
          address: 0.0.0.0
          port_value: 18000
      filter_chains:
        - filters:
            - name: envoy.http_connection_manager
              typed_config:
                # ....
                http_filters:
                  - name: envoy.filters.http.wasm
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      config:
                        configuration:
                          "@type": type.googleapis.com/google.protobuf.StringValue
                          value: "http-header-operation"
                        vm_config:
                          vm_id: "my-vm-id"
                          runtime: "envoy.wasm.runtime.v8"
                          configuration:
                            "@type": type.googleapis.com/google.protobuf.StringValue
                            value: "my-vm-configuration"
                          code:
                            local:
                              filename: "all-in-one.wasm"
                  - name: envoy.filters.http.router
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router

    - name: http-body-operation
      address:
        socket_address:
          address: 0.0.0.0
          port_value: 18001
      filter_chains:
        - filters:
            - name: envoy.http_connection_manager
              typed_config:
                # ....
                http_filters:
                  - name: envoy.filters.http.wasm
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      config:
                        configuration:
                          "@type": type.googleapis.com/google.protobuf.StringValue
                          value: "http-body-operation"
                        vm_config:
                          vm_id: "my-vm-id"
                          runtime: "envoy.wasm.runtime.v8"
                          configuration:
                            "@type": type.googleapis.com/google.protobuf.StringValue
                            value: "my-vm-configuration"
                          code:
                            local:
                              filename: "all-in-one.wasm"
                  - name: envoy.filters.http.router
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router

    - name: tcp-total-data-size-counter
      address:
        socket_address:
          address: 0.0.0.0
          port_value: 18002
      filter_chains:
        - filters:
            - name: envoy.filters.network.wasm
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.wasm.v3.Wasm
                config:
                  configuration:
                    "@type": type.googleapis.com/google.protobuf.StringValue
                    value: "tcp-total-data-size-counter"
                    vm_config:
                      vm_id: "my-vm-id"
                      runtime: "envoy.wasm.runtime.v8"
                      configuration:
                        "@type": type.googleapis.com/google.protobuf.StringValue
                        value: "my-vm-configuration"
                      code:
                        local:
                          filename: "all-in-one.wasm"
            - name: envoy.tcp_proxy
              typed_config: # ...
```



在 `18000` 和 `18001` 监听器上的 Http 过滤器链以及 `18002` 上的网络过滤器链中，vm_config 字段都是相同的。在这种情况下，Envoy 中的多个插件将使用同一个 Wasm 虚拟机。 为了重用相同的 VM，所有的 vm_config.vm_id、vm_config.runtime、vm_config.configuration 和 vm_config.code 必须相同。

通过这种配置方式允许为不同的过滤器重用同一个 Wasm 虚拟机，通过为每个 `PluginContext` 提供了一个隔离的环境，使得插件能够独立运行，同时共享同一个虚拟机的执行环境，虚拟机只需要加载和初始化一次即可为多个插件服务，这不仅可以减少内存占用，还可以降低启动时的延迟。

完整的配置可以参考 [envoy.yaml](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/envoy.yaml) 。

## 3 Proxy-Wasm Go SDK API

上面介绍插件概念和插件配置，下面开始深入探讨 Proxy-Wasm Go SDK 的 API。

### 3.1 Contexts

上下文（Contexts） 是 Proxy-Wasm Go SDK 中的接口集合，它们在  [types](https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/proxywasm/types)  包中定义。
有四种类型的上下文：VMContext、PluginContext、TcpContext 和 HttpContext。它们的关系如下图：
```
                    Wasm Virtual Machine
                      (.vm_config.code)
┌────────────────────────────────────────────────────────────────┐
│  Your program (.vm_config.code)                TcpContext      │
│          │                                  ╱ (Tcp stream)     │
│          │ 1: 1                            ╱                   │
│          │         1: N                   ╱ 1: N               │
│      VMContext  ──────────  PluginContext                      │
│                                (Plugin)   ╲ 1: N               │
│                                            ╲                   │
│                                             ╲  HttpContext     │
│                                               (Http stream)    │
└────────────────────────────────────────────────────────────────┘
```

1) VMContext 对应于每个 .vm_config.code，每个 VM 中只存在一个 VMContext。
2) VMContext 是 PluginContexts 的父上下文，负责创建 PluginContext。
3) PluginContext 对应于一个 Plugin 实例。一个 PluginContext 对应于 Http Filter、Network Filter、Wasm Service 的 configuration 字段配置。
4) PluginContext 是 TcpContext 和 HttpContext 的父上下文，并且负责为 处理 Http 流的Http Filter 或 处理 Tcp 流的 Network Filter 创建上下文。
5) TcpContext 负责处理每个 Tcp 流。
6) HttpContext 负责处理每个 Http 流。

因此，自定义插件要实现 `VMContext` 和 `PluginContext`。 同时 `Http Filter` 或 `Network Filter`，要分别实现 `HttpContext` 或 `TcpContext`。

首先 VMContext 定义如下：

```go
type VMContext interface {
	// OnVMStart 在 VM 创建和调用 main 函数后被调用。
	// 在此调用期间，可以通过 GetVMConfiguration 获取在 vm_config.configuration 设置的配置。
	// 这主要用于执行 Wasm VM 范围内的初始化。
	OnVMStart(vmConfigurationSize int) OnVMStartStatus

	// NewPluginContext 用于为每个插件配置创建 PluginContext。
	NewPluginContext(contextID uint32) PluginContext
}
```

VMContext 负责通过 NewPluginContext 方法创建 PluginContext。同时在 VM 启动阶段调用 OnVMStart，并且可以通过 `GetVMConfiguration` hostcall API 获取 vm_config.configuration 的值。这样就可以进行 VM 范围内的插件初始化并控制 VMContext 的行为。

PluginContext，定义如下（省略了一些方法）：
```go
type PluginContext interface {
	// OnPluginStart 在所有插件上下文上调用（如果在这是 VM 上下文，则在 OnVmStart 之后）。
	// 在此调用期间，可以通过 GetPluginConfiguration 获取 envoy.yaml 中 config.configuration 设置的配置。
	OnPluginStart(pluginConfigurationSize int) OnPluginStartStatus

	// 以下函数用于在流上创建上下文，
	// *必须* 实现它们中的任一个，对应于扩展点。例如，如果您配置此插件上下文在 Http 过滤器上运行，那么必须实现 NewHttpContext。
	// 对 Tcp 过滤器也是如此。
	//
	// NewTcpContext 用于为每个 Tcp 流创建 TcpContext。
	NewTcpContext(contextID uint32) TcpContext
	// NewHttpContext 用于为每个 Http 流创建 HttpContext。
	NewHttpContext(contextID uint32) HttpContext
}
```

`PluginContext` 有 `OnPluginStart` 方法，创建插件时调用，可以通过 GetPluginConfiguration hostcall API 获取 plugin config 中 configuration 字段的值。
另外 `PluginContext` 有 `NewTcpContext` 和 `NewHttpContext` 方法，为每个 Http 或 Tcp 流创建上下文时调用。 关于 HttpContext 和 TcpContext 的详细定义请参考 [context.go](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/types/context.go) 。

### 3.2 Hostcall API

Hostcall API 是指在 Wasm 模块内调用 Envoy 提供的功能。这些功能通常用于获取外部数据或与 Envoy 交互。在开发 Wasm 插件时，需要访问网络请求的元数据、修改请求或响应头、记录日志等，这些都可以通过 Hostcall API 来实现。
Hostcall API 在 proxywasm 包的 [hostcall.go](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/hostcall.go) 中定义。
Hostcall API 包括配置和初始化、定时器设置、上下文管理、插件完成、共享队列管理、Redis 操作、Http 调用、TCP 流操作、HTTP 请求/响应头和体操作、共享数据操作、日志操作、属性和元数据操作、指标操作。具体函数名称和描述如下：

#### 1.配置和初始化
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `GetVMConfiguration`           | 获取在 `vm_config.configuration` 字段中指定的配置。此功能仅在 `types.PluginContext.OnVMStart` 调用期间可用。 |
| `GetPluginConfiguration`       | 获取在 `config.configuration` 字段中指定的配置。此功能仅在 `types.PluginContext.OnPluginStart` 调用期间可用。 |

#### 2.定时器设置
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `SetTickPeriodMilliSeconds`     | 设置 `types.PluginContext.OnTick` 调用的tick间隔。此功能仅对 `types.PluginContext` 有效。 |

#### 3.上下文管理
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `SetEffectiveContext`          | 设置有效上下文为 `context_id`。通常用于在接收到 `types.PluginContext.OnQueueReady` 或 `types.PluginContext.OnTick` 后更改上下文。 |

#### 4.插件完成
| 函数名                         | 描述                                                                                |
|--------------------------------|-----------------------------------------------------------------------------------|
| `PluginDone`                   | 当 `OnPluginDone` 返回 false，表示插件处于待定状态，在删除之前必须调用此函数。此功能仅对 `types.PluginContext` 有效。 |

#### 5.共享队列管理
| 函数名                         | 描述                                                        |
|--------------------------------|-------------------------------------------------------------|
| `RegisterSharedQueue`         | 在此插件上下文中注册共享队列。 |
| `ResolveSharedQueue`           | 获取给定 `vmID` 和 `queueName` 的队列ID。 |
| `EnqueueSharedQueue`           | 将数据排队到给定队列ID的共享队列。 |
| `DequeueSharedQueue`           | 从给定队列ID的共享队列中出队数据。 |

#### 6.Redis 操作
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `RedisInit`                    | 初始化Redis连接。                                           |
| `DispatchRedisCall`            | 发送Redis调用。                                           |
| `GetRedisCallResponse`         | 获取Redis调用响应。                                       |

#### 7.HTTP 调用
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `DispatchHttpCall`             | 向远程集群分派HTTP调用。此功能可被所有上下文使用。 |
| `GetHttpCallResponseHeaders`   | 用于检索由远程集群返回的HTTP响应头，此功能仅在传递给 `DispatchHttpCall` 的 "callback" 函数中可用。 |
| `GetHttpCallResponseBody`     | 用于检索由远程集群返回的HTTP响应体，此功能仅在传递给 `DispatchHttpCall` 的 "callback" 函数中可用。 |
| `GetHttpCallResponseTrailers`  | 用于检索由远程集群返回的HTTP响应尾随头，此功能仅在传递给 `DispatchHttpCall` 的 "callback" 函数中可用。 |

#### 8.TCP 流操作
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `GetDownstreamData`           | 用于检索在宿主中缓冲的TCP下游数据。此功能仅在 `types.TcpContext.OnDownstreamData` 期间可用。 |
| `AppendDownstreamData`         | 将给定字节追加到宿主中缓冲的TCP下游数据。此功能仅在 `types.TcpContext.OnDownstreamData` 期间可用。 |
| `PrependDownstreamData`        | 将给定字节前缀到宿主中缓冲的TCP下游数据。此功能仅在 `types.TcpContext.OnDownstreamData` 期间可用。 |
| `ReplaceDownstreamData`        | 用给定字节替换宿主中缓冲的TCP下游数据。此功能仅在 `types.TcpContext.OnDownstreamData` 期间可用。 |
| `GetUpstreamData`              | 用于检索在宿主中缓冲的TCP上游数据。此功能仅在 `types.TcpContext.OnUpstreamData` 期间可用。 |
| `AppendUpstreamData`           | 将给定字节追加到宿主中缓冲的TCP上游数据。此功能仅在 `types.TcpContext.OnUpstreamData` 期间可用。 |
| `PrependUpstreamData`          | 将给定字节前缀到宿主中缓冲的TCP上游数据。此功能仅在 `types.TcpContext.OnUpstreamData` 期间可用。 |
| `ReplaceUpstreamData`          | 用给定字节替换宿主中缓冲的TCP上游数据。此功能仅在 `types.TcpContext.OnUpstreamData` 期间可用。 |
| `ContinueTcpStream`            | 在返回 `types.Action.Pause` 后，继续TCP连接的处理。此功能仅对 `types.TcpContext` 有效。 |
| `CloseDownstream`              | 关闭Tcp上下文中的下游TCP连接。此功能仅对 `types.TcpContext` 有效。 |
| `CloseUpstream`                | 关闭Tcp上下文中的上游TCP连接。此功能仅对 `types.TcpContext` 有效。 |

#### 9.HTTP 请求/响应头和体操作
| 函数名                         | 描述                                                         |
|-------------------------------|--------------------------------------------------------------|
| `GetHttpRequestHeaders`       | 获取HTTP请求头。此功能仅在 `types.HttpContext.OnHttpRequestHeaders` 和 `types.HttpContext.OnHttpStreamDone` 期间可用。 |
| `ReplaceHttpRequestHeaders`   | 用给定的头替换HTTP请求头。此功能仅在 `types.HttpContext.OnHttpRequestHeaders` 期间可用。 |
| `GetHttpRequestHeader`        | 获取给定 "key" 的HTTP请求头的值。此功能仅在 `types.HttpContext.OnHttpRequestHeaders` 和 `types.HttpContext.OnHttpStreamDone` 期间可用。 |
| `RemoveHttpRequestHeader`     | 移除请求头中给定 "key" 的所有值。此功能仅在 `types.HttpContext.OnHttpRequestHeaders` 期间可用。 |
| `ReplaceHttpRequestHeader`    | 替换请求头中给定 "key" 的值。此功能仅在 `types.HttpContext.OnHttpRequestHeaders` 期间可用。 |
| `AddHttpRequestHeader`        | 向请求头添加给定 "key" 的值。此功能仅在 `types.HttpContext.OnHttpRequestHeaders` 期间可用。 |
| `GetHttpRequestBody`          | 获取整个HTTP请求体。此功能仅在 `types.HttpContext.OnHttpRequestBody` 期间可用。 |
| `AppendHttpRequestBody`       | 向HTTP请求体缓冲区追加给定字节。此功能仅在 `types.HttpContext.OnHttpRequestBody` 期间可用。 |
| `PrependHttpRequestBody`      | 向HTTP请求体缓冲区前缀给定字节。此功能仅在 `types.HttpContext.OnHttpRequestBody` 期间可用。 |
| `ReplaceHttpRequestBody`      | 用给定字节替换HTTP请求体缓冲区。此功能仅在 `types.HttpContext.OnHttpRequestBody` 期间可用。 |
| `GetHttpRequestTrailers`      | 获取HTTP请求尾随头。此功能仅在 types.HttpContext.OnHttpRequestTrailers 和 types.HttpContext.OnHttpStreamDone 期间可用。 |
| `ReplaceHttpRequestTrailers`  | 用给定的尾随头替换HTTP请求尾随头。此功能仅在 types.HttpContext.OnHttpRequestTrailers 期间可用。 |
| `GetHttpRequestTrailer`       | 获取给定 "key" 的HTTP请求尾随头的值。此功能仅在 types.HttpContext.OnHttpRequestTrailers 和 types.HttpContext.OnHttpStreamDone 期间可用。 |
| `RemoveHttpRequestTrailer`    | 移除请求尾随头中给定 "key" 的所有值。此功能仅在 types.HttpContext.OnHttpRequestTrailers 期间可用。 |
| `ReplaceHttpRequestTrailer`   | 替换请求尾随头中给定 "key" 的值。此功能仅在 types.HttpContext.OnHttpRequestTrailers 期间可用。 |
| `AddHttpRequestTrailer`       | 向请求尾随头添加给定 "key" 的值。此功能仅在 types.HttpContext.OnHttpRequestTrailers 期间可用。 |
| `ResumeHttpRequest`           | 继续停止的HTTP请求处理。此功能仅在 types.HttpContext 期间可用。 |
| `GetHttpResponseHeaders`      | 获取HTTP响应头。此功能仅在 types.HttpContext.OnHttpResponseHeaders 和 types.HttpContext.OnHttpStreamDone 期间可用。 |
| `ReplaceHttpResponseHeaders`  | 用给定的头替换HTTP响应头。此功能仅在 types.HttpContext.OnHttpResponseHeaders 期间可用。 |
| `GetHttpResponseHeader `      | 获取给定 "key" 的HTTP响应头的值。此功能仅在 types.HttpContext.OnHttpResponseHeaders 和 types.HttpContext.OnHttpStreamDone 期间可用。 |
| `RemoveHttpResponseHeader`    | 移除响应头中给定 "key" 的所有值。此功能仅在 types.HttpContext.OnHttpResponseHeaders 期间可用。 |
| `ReplaceHttpResponseHeader`   | 替换响应头中给定 "key" 的值。此功能仅在 types.HttpContext.OnHttpResponseHeaders 期间可用。 |
| `AddHttpResponseHeader`       | 向响应头添加给定 "key" 的值。此功能仅在 types.HttpContext.OnHttpResponseHeaders 期间可用。 |
| `GetHttpResponseBody`         | 获取整个HTTP响应体。此功能仅在 types.HttpContext.OnHttpResponseBody 期间可用。 |
| `AppendHttpResponseBody`     | 向HTTP响应体缓冲区追加给定字节。此功能仅在 types.HttpContext.OnHttpResponseBody 期间可用。 |
| `PrependHttpResponseBody`      | 向HTTP响应体缓冲区前缀给定字节。此功能仅在 types.HttpContext.OnHttpResponseBody 期间可用。 |
| `ReplaceHttpResponseBody`      | 用给定字节替换HTTP响应体缓冲区。此功能仅在 types.HttpContext.OnHttpResponseBody 期间可用。 |
| `GetHttpResponseTrailers`      | 获取HTTP响应尾随头。此功能仅在 types.HttpContext.OnHttpResponseTrailers 和 types.HttpContext.OnHttpStreamDone 期间可用。 |
| `ReplaceHttpResponseTrailers`  | 用给定的尾随头替换HTTP响应尾随头。此功能仅在 types.HttpContext.OnHttpResponseTrailers 期间可用。 |
| `GetHttpResponseTrailer`       | 获取给定 "key" 的HTTP响应尾随头的值。此功能仅在 types.HttpContext.OnHttpResponseTrailers 和 types.HttpContext.OnHttpStreamDone 期间可用。 |
| `RemoveHttpResponseTrailer`    | 移除响应尾随头中给定 "key" 的所有值。此功能仅在 types.HttpContext.OnHttpResponseTrailers 期间可用。 |
| `ReplaceHttpResponseTrailer`   | 替换响应尾随头中给定 "key" 的值。此功能仅在 types.HttpContext.OnHttpResponseHeaders 期间可用。 |
| `AddHttpResponseTrailer`      | 向响应尾随头添加给定 "key" 的值。此功能仅在 types.HttpContext.OnHttpResponseHeaders 期间可用。 |
| `ResumeHttpResponse`           | 继续停止的HTTP响应处理。此功能仅在 types.HttpContext 期间可用。 |
| `SendHttpResponse`             | 向下游发送HTTP响应。调用此函数后，您必须返回 types.Action.Pause 以停止初始HTTP请求/响应的进一步处理。 |


#### 10.共享数据操作
| 函数名                         | 描述      |
|--------------------------------|---------|
| `GetSharedData`                | 获取共享数据。 |
| `SetSharedData`                | 设置共享数据。 |

#### 11.日志操作
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `LogTrace`                     | 以 Trace 日志级别发出消息。                                   |
| `LogTracef`                    | 根据格式说明符格式化并发出 Trace 日志级别的日志。           |
| `LogDebug`                     | 以 Debug 日志级别发出消息。                                   |
| `LogDebugf`                    | 根据格式说明符格式化并发出 Debug 日志级别的日志。           |
| `LogInfo`                      | 以 Info 日志级别发出消息。                                   |
| `LogInfof`                     | 根据格式说明符格式化并发出 Info 日志级别的日志。           |
| `LogWarn`                      | 以 Warn 日志级别发出消息。                                   |
| `LogWarnf`                     | 根据格式说明符格式化并发出 Warn 日志级别的日志。           |
| `LogError`                     | 以 Error 日志级别发出消息。                                   |
| `LogErrorf`                    | 根据格式说明符格式化并发出 Error 日志级别的日志。           |
| `LogCritical`                  | 以 Critical 日志级别发出消息。                               |
| `LogCriticalf`                 | 根据格式说明符格式化并发出 Critical 日志级别的日志。       |

#### 12.指标操作
| 函数名                         | 描述                                                         |
|--------------------------------|--------------------------------------------------------------|
| `DefineCounterMetric`          | 为名称定义一个计数器指标。返回一个 `MetricCounter` 用于后续操作。 |
| `DefineGaugeMetric`            | 为名称定义一个计量器指标。返回一个 `MetricGauge` 用于后续操作。 |
| `DefineHistogramMetric`        | 为名称定义一个直方图指标。返回一个 `MetricHistogram` 用于后续操作。 |
| `MetricCounter.Value`          | 获取 `MetricCounter` 的当前值。                             |
| `MetricCounter.Increment`      | 将 `MetricCounter` 的当前值增加指定的偏移量。             |
| `MetricGauge.Value`            | 获取 `MetricGauge` 的当前值。                             |
| `MetricGauge.Add`              | 将 `MetricGauge` 的当前值增加指定的偏移量。             |
| `MetricHistogram.Value`        | 获取 `MetricHistogram` 的当前值。                         |
| `MetricHistogram.Record`       | 为 `MetricHistogram` 记录一个值。                         |



### 3.3 插件调用入口 Entrypoint

当 Envoy 创建 VM 时，在虚拟机内部创建 `VMContext` 之前，它会在启动阶段调用插件程序的 `main` 函数。所以必须在 `main` 函数中传递插件自定义的 `VMContext` 实现。
[proxywasm](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/proxywasm/) 包的 `SetVMContext` 函数是入口点。`main` 函数如下：

```go
func main() {
	proxywasm.SetVMContext(&myVMContext{})
}

type myVMContext struct { .... }

var _ types.VMContext = &myVMContext{}

// Implementations follow...
```

## 4 跨虚拟机通信

Envoy 中的跨虚拟机通信（Cross-VM communications）允许在不同线程中运行 的Wasm 虚拟机（VMs）之间进行数据交换和通信。这在需要在多个VMs之间聚合数据、统计信息或缓存数据等场景中非常有用。
跨虚拟机通信主要有两种方式：

- 共享数据（Shared Data）:
    - 共享数据是一种在所有 VMs 之间共享的键值存储，可以用于存储和检索简单的数据项。
    - 它适用于存储小的、不经常变化的数据，例如配置参数或统计信息。
- 共享队列（Shared Queue）:
    - 共享队列允许VMs之间进行更复杂的数据交换，支持发送和接收更丰富的数据结构。
    - 队列可以用于实现任务调度、异步消息传递等模式。

### 4.1 共享数据（Shared Data）

如果想要在所有 Wasm 虚拟机（VMs）运行的多个工作线程间拥有全局请求计数器，或者想要缓存一些应被所有 Wasm VMs 使用的数据，那么共享数据（Shared Data）或等效的共享键值存储（Shared KVS）就会发挥作用。
共享数据本质上是一个跨所有VMs共享的键值存储（即跨 VM 或跨线程）。

共享数据 KVS 是根据 vm_config 中指定的创建的。可以在所有 Wasm VMs 之间共享一个键值存储，而它们不必具有相同的二进制文件 `vm_config.code`,唯一的要求是具有相同的 vm_id。

![img](https://img.alicdn.com/imgextra/i2/O1CN01fLn4Lr1GXxhKORL9t_!!6000000000633-0-tps-1784-1266.jpg)

在上图（图片来源 [Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)）中，可以看到即使它们具有不同的二进制文件（ hello.wasm 和 bye.wasm ），"vm_id=foo"的 VMs 也共享相同的共享数据存储。
hostcall.go 中定义共享数据相关的 API如下：
```go
// GetSharedData 用于检索给定 "key" 的值。
// 返回的 "cas" 应用于 SetSharedData 以实现该键的线程安全更新。
func GetSharedData(key string) (value []byte, cas uint32, err error)

// SetSharedData 用于在共享数据存储中设置键值对。
// 共享数据存储按主机中的 "vm_config.vm_id" 定义。
//
// 当给定的 CAS 值与当前值不匹配时，将返回 ErrorStatusCasMismatch。
// 这表明其他 Wasm VM 已经成功设置相同键的值，并且该键的当前 CAS 已递增。
// 建议在遇到此错误时实现重试逻辑。
//
// 将 cas 设置为 0 将永远不会返回 ErrorStatusCasMismatch 并且总是成功的，
// 但这并不是线程安全的，即可能在您调用此函数时另一个 VM 已经设置了该值，
// 看到的值与存储时的值已经不同。
func SetSharedData(key string, value []byte, cas uint32) error
```

共享数据 API 是其线程安全性和跨 VM 安全性，这通过 "cas" （[Compare-And-Swap](https://en.wikipedia.org/wiki/Compare-and-swap))值来实现。如何使用 GetSharedData 和 SetSharedData 函数可以参考 [示例](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_data/main.go)。 


### 4.2 共享队列 Shared Queue

如果要在请求/响应处理的同时跨所有 Wasm VMs 聚合指标，或者将一些跨 VM 聚合的信息推送到远程服务器，可以通过 *Shared Queue* 来实现。

*Shared Queue* 是为 `vm_id` 和队列名称的组合创建的 FIFO（先进先出）队列。并为该组合（`vm_id`，名称）分配了一个唯一的 *queue id*，该 ID 用于入队/出队操作。

“入队”和“出队”等操作具有线程安全性和跨 VM 安全性。在  hostcall.go 中与 *Shared Queue* 相关 API 如下：

```go
// DequeueSharedQueue 从给定 queueID 的共享队列中出队数据。
// 要获取目标队列的 queue id，请先使用 "ResolveSharedQueue"。
func DequeueSharedQueue(queueID uint32) ([]byte, error)

// RegisterSharedQueue 在此插件上下文中注册共享队列。
// "注册" 意味着每当该 queueID 上有新数据入队时，将对此插件上下文调用 OnQueueReady。
// 仅适用于 types.PluginContext。返回的 queueID 可用于 Enqueue/DequeueSharedQueue。
// 请注意 "name" 必须在所有共享相同 "vm_id" 的 Wasm VMs 中是唯一的。使用 "vm_id" 来分隔共享队列的命名空间。
//
// 只有在调用 RegisterSharedQueue 之后，ResolveSharedQueue("此 vm_id", "名称") 才能成功
// 通过其他 VMs 检索 queueID。
func RegisterSharedQueue(name string) (queueID uint32, err error)

// EnqueueSharedQueue 将数据入队到给定 queueID 的共享队列。
// 要获取目标队列的 queue id，请先使用 "ResolveSharedQueue"。
func EnqueueSharedQueue(queueID uint32, data []byte) error

// ResolveSharedQueue 获取给定 vmID 和队列名称的 queueID。
// 返回的 queueID 可用于 Enqueue/DequeueSharedQueue。
func ResolveSharedQueue(vmID, queueName string) (queueID uint32, err error)
```

`RegisterSharedQueue` 和 `DequeueSharedQueue` 由队列的“消费者”使用，而 `ResolveSharedQueue` 和 `EnqueueSharedQueue` 是为队列“生产者”准备的。请注意：

- RegisterSharedQueue 用于为调用者的 name 和 vm_id 创建共享队列。使用一个队列，那么必须先由一个 VM 调用这个函数。这可以由 PluginContext 调用，因此可以认为“消费者” = PluginContexts。
- ResolveSharedQueue 用于获取 name 和 vm_id 的 queue id。这是为“生产者”准备的。

这两个调用都返回一个队列 ID，该 ID 用于 DequeueSharedQueue 和 EnqueueSharedQueue。同时当队列中入队新数据时 消费者 PluginContext 中有 OnQueueReady(queueID uint32) 接口会收到通知。
还强烈建议由 Envoy 的主线程上的单例 Wasm Service 创建共享队列。否则 OnQueueReady 将在工作线程上调用，这会阻塞它们处理 Http 或 Tcp 流。

![img](https://img.alicdn.com/imgextra/i1/O1CN01s1cT1s28xb7OKkEg0_!!6000000007999-0-tps-2378-1316.jpg)
在上图（图片来源 [Proxy-Wasm Go SDK](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)）中展示共享队列工作原理，更详细如何使用共享队列可以参考 [示例](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/examples/shared_queue/main.go)。


## 5 限制和注意事项

以下是在使用 Proxy-Wasm Go SDK 和 Proxy-Wasm 编写插件时需要注意事项。

### 5.1 一些标准库不可用

一些现有的标准库不可用（可导入但运行时 panic / 无法导入）。这有几个原因：
1. TinyGo 的 WASI 目标不支持某些系统调用。
2. TinyGo 没有实现 reflect 包的全部功能。
3. [Proxy-Wasm C++ 主机](https://github.com/proxy-wasm/proxy-wasm-cpp-host) 尚未支持某些 WASI API。
4. TinyGo 或 Proxy-Wasm 中不支持一些语言特性：包括 `recover` 和 `goroutine`。

随着 TinyGo 和 Proxy-Wasm 的发展，这些问题将得到缓解。

### 5.2 由于垃圾回收导致的性能开销

由于 GC，使用 Go/TinyGo 会带来性能开销，尽管可以认为与代理中的其他操作相比，GC 的开销足够小。
TinyGo 允许禁用 GC，但由于内部需要使用映射（隐式引起分配）来保存虚拟机的状态，可以通过 `alloc(uintptr)` [接口](https://github.com/tinygo-org/tinygo/blob/v0.14.1/src/runtime/gc_none.go#L13) 使用 `-gc=custom` 选项设置 proxy-wasm 定制的 GC 算法。

### 5.3 `recover` 未实现

在 TinyGo 中，`recover` 未实现（https://github.com/tinygo-org/tinygo/issues/891)。这也意味着依赖 `recover` 的代码将无法按预期工作。

### 5.4 Goroutine 不支持

在 TinyGo 中，Goroutine 通过 LLVM 的协程实现（见[这篇博客文章](https://aykevl.nl/2019/02/tinygo-goroutines)）。 在 Envoy 中，Wasm 模块以事件驱动的方式运行，因此一旦主函数退出，“调度器”就不再执行。因此不能像普通主机环境中那样使用 Goroutine 。
在以事件驱动方式执行的 Wasm VM 线程中如何处理 Goroutine 的问题尚未有解决方案。建议使用实现 `OnTick` 函数来处理任何异步任务。

## 6 插件开发样例

用 Proxy-Wasm Go SDK 实现一个简单的插件，具体样例如下：

```golang
package main

import (
  "github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
  "github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
)

// 插件入口
func main() {
  proxywasm.SetVMContext(&vmContext{})
}

// VM 上下文
type vmContext struct {
  // Embed the default VM context here,
  types.DefaultVMContext
  // 这里添加 VM 配置
}

// VM 启动回调
func (*vmContext) OnVMStart(vmConfigurationSize int) types.OnVMStartStatus {
  proxywasm.LogInfof("OnVMStart()")
  // 获取 VM 配置
  _, err := proxywasm.GetVMConfiguration()
  if err != nil {
    proxywasm.LogCriticalf("error reading vm configuration: %v", err)
  }
  // 这里解析 VM 配置
  return types.OnVMStartStatusOK
}

// 生成插件上下文
func (*vmContext) NewPluginContext(contextID uint32) types.PluginContext {
  proxywasm.LogInfof("NewPluginContex()")
  return &pluginContext{}
}

// 插件上下文
type pluginContext struct {
  // Embed the default plugin context here,
  types.DefaultPluginContext
  // 这里添加插件配置
}

// Http 上下文
type httpContext struct {
  // Embed the default root http context here,
  // so that we don't need to reimplement all the methods.
  types.DefaultHttpContext
  // 这里添加http 上下文属性
  requestBodySize       int
  responseBodySize      int
}

// 生成 Http 上下文
func (ctx *pluginContext) NewHttpContext(contextID uint32) types.HttpContext {
  proxywasm.LogInfof("NewHttpContext()")
  return &httpContext{}
}

// 插件启动回调，
func (ctx *pluginContext) OnPluginStart(pluginConfigurationSize int) types.OnPluginStartStatus {
  proxywasm.LogInfof("OnPluginStart()")
  // 获取插件配置
  _, err := proxywasm.GetPluginConfiguration()
  if err != nil {
    proxywasm.LogCriticalf("error reading plugin configuration: %v", err)
  }
  // 这里解析插件配置

  return types.OnPluginStartStatusOK
}

// http 请求头回调
func (ctx *httpContext) OnHttpRequestHeaders(numHeaders int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpRequestHeaders()")
  // 这里处理请求头回调
  return types.ActionContinue
}

// http 请求体回调，注意这里流式处理
func (ctx *httpContext) OnHttpRequestBody(bodySize int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpRequestBody()")
  ctx.requestBodySize += bodySize
  if !endOfStream {
    // Wait until we see the entire body to replace.
    return types.ActionPause
  }
  _, err := proxywasm.GetHttpRequestBody(0, ctx.requestBodySize)
  if err != nil {
    proxywasm.LogErrorf("failed to get request body: %v", err)
    return types.ActionContinue
  }

  return types.ActionContinue
}

// http 响应头回调
func (ctx *httpContext) OnHttpResponseHeaders(numHeaders int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpResponseHeaders()")
  // 这里响应头回调
  return types.ActionContinue
}

// http 响应体回调， 注意这里流式处理
func (ctx *httpContext) OnHttpResponseBody(bodySize int, endOfStream bool) types.Action {
  proxywasm.LogInfof("OnHttpResponseBody()")
  ctx.responseBodySize += bodySize
  // 判断是否响应体结束
  if !endOfStream {
    // Wait until we see the entire body to replace.
    return types.ActionPause
  }
  _, err := proxywasm.GetHttpResponseBody(0, ctx.responseBodySize)
  if err != nil {
    proxywasm.LogErrorf("failed to get response body: %v", err)
    return types.ActionContinue
  }
  return types.ActionContinue
}
```
核心步骤如下：
- 入口注册 vmContext
- VM 启动回调时候解析 VM 配置
- 由 vmContext 生成 pluginContext
- 插件启动回调时候解析插件配置
- 对于每个 http 流，pluginContext 生成 httpContext
- 生成的 httpContext 处理请求头、请求体、响应头、响应体，这里要注意的是处理 OnHttpRequestBody 和 OnHttpResponseBody 回调是流式处理 

可以通过 [开发样例](https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/examples) 查看更多 Proxy-Wasm Go SDK 插件开发样例。

## 参考
- [1] [proxy-wasm-go-sdk doc](https://github.com/higress-group/proxy-wasm-go-sdk/blob/main/doc/OVERVIEW.md)
- [2] [proxy-wasm-go-sdk example](https://github.com/higress-group/proxy-wasm-go-sdk/tree/main/examples)
- [3] [WebAssembly 解释器实现篇](https://github.com/mcuking/blog/issues/96/)
- [4] [理解 WebAssembly 文本格式](https://developer.mozilla.org/zh-CN/docs/WebAssembly/Understanding_the_text_format)
- [5] [Wasm Module Binary Format](https://webassembly.github.io/spec/core/binary/modules.html)
- [6] [WebAssembly 究竟是什么？](https://www.bilibili.com/video/BV1WK42117dW)
- [7] [WebAssembly 在 MOSN 中的实践 - 基础框架篇](https://mosn.io/blog/posts/mosn-wasm-framework/)