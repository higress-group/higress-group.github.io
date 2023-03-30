---
title: 30行代码写一个Wasm Go插件
keywords: [higress,wasm]
description: 对《Higress 开源背后的发展历程和上手 Demo 演示》直播演示 demo 的详细说明
author: 澄潭
date: 2022-11-22
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/30-line-wasm.md
---

## 前言
在11月15号的直播 《Higress 开源背后的发展历程和上手 Demo 演示》中，为大家演示了 Higress 的 Wasm 插件如何面向 Ingress 资源进行配置生效，本文对当天的 Demo 进行一个回顾，并说明背后的原理机制。
<!--truncate-->
本文中 Demo 运行的前提，需要在 K8s 集群中安装了 Higress，并生效了下面这份 quickstart 配置：
[https://higress.io/samples/quickstart.yaml](https://higress.io/samples/quickstart.yaml)
这个 Demo 要实现的功能是一个 Mock 应答的功能，需要实现根据配置的内容，返回 HTTP 应答。
本文会按以下方式进行介绍：

- 编写代码：代码逻辑解析
- 生效插件：说明代码如何进行编译打包并部署生效
- 测试插件功能：说明全局粒度，路由/域名级粒度如何生效
- 插件生效原理：对整体流程进行回顾，说明插件生效的原理
- 三个革命性的特性：介绍 Wasm 插件机制为网关插件开发带来的变革
## 编写代码

```
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
```
上面代码中可以看到三个函数：

- main：插件通过 main 函数定义插件上下文，包括插件名称，用于解析配置的函数，以及用于处理请求/应答的函数
- parseConfig：这个函数通过在 SetCtx 中指定的 ParseConfigBy 被挂载到插件配置解析阶段，传入的三个参数分别是：
   - json：传入插件的配置，将统一序列化为一个 json 字典对象，提供 parseConfig 进行解析
   - config：parseConfig 将解析后的插件配置输出到这个 MyConfig 对象
   - log：提供日志输出接口
- onHttpRequestHeaders：函数中调用的 proxywasm.SendHttpResponse，用于实现直接返回 HTTP 应答，这个函数通过在 SetCtx 中指定的 ProcessRequestHeadersBy 被挂载到解析请求 Header 的执行阶段，其他的挂载方式还有：
   - ProcessRequestBodyBy：挂载到解析请求 Body 的执行阶段
   - ProcessResponseHeadersBy：挂载到构造应答 Header 的执行阶段
   - ProcessResponseBodyBy：挂载到构造应答 Body 的执行阶段

      传入的三个参数分别是：

   - ctx：用于获取请求上下文，如 scheme/method/path 等，通过 ctx 可以设置自定义上下文，能跨执行阶段访问
   - config：提供 parseConfig 解析好的自定义配置
   - log：提供日志输出接口

这个 30 行代码实现的插件功能比较简单，这里有一些功能相对复杂的例子：[https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions)
这里有插件 sdk 的详细使用文档：
[https://higress.io/zh-cn/docs/user/wasm-go.html](https://higress.io/zh-cn/docs/user/wasm-go.html)
这个插件 sdk 是基于 Tetrate 社区的 proxy-wasm-go-sdk 实现的，如果关注更底层的细节，可以查看：
[https://github.com/tetratelabs/proxy-wasm-go-sdk](https://github.com/tetratelabs/proxy-wasm-go-sdk)
[https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/plugin_wrapper.go)
可以看到，Higress 的 wasm-go sdk 是通过 Go 1.18 引入的泛型特性封装了插件上下文处理细节，从而降低插件开发所需代码量，开发者只用关心配置解析和请求应答处理的逻辑。
## 生效插件
编写完成代码后，一共有三个步骤，实现插件逻辑的生效：

1. 编译：将 go 代码编译成 Wasm 格式文件
2. 镜像推送：将 Wasm 文件打包成 docker 镜像，并推送至镜像仓库
3. 下发配置：在 K8s 上创建 WasmPlugin 资源
### 编译
将上面的 Go 文件 main.go 编译成 plugin.wasm
```bash
tinygo build -o plugin.wasm -scheduler=none -target=wasi main.go
```
### 镜像推送
编写 Dockerfile
```dockerfile
FROM scratch
COPY plugin.wasm ./
```
构建并推送 Docker 镜像 （这里示例用的是 Higress 的官方镜像仓库）
```bash
docker build -t higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0 .
docker push higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0
```
### 下发配置
编写 wasmplugin.yaml，配置说明：

- selector： 选中了默认安装在 higress-system 命名空间下的 higress-gateway 生效这份插件
- pluginConfig：插件配置，最终会被转换成上面代码中的 MyConfig 对象
- url：填写镜像地址，需要以"oci://"开头

除了这些配置外，还可以定义插件的执行阶段和优先级等进阶配置，可以参考 Istio API 官方文档：[https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/)
```yaml
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
```
通过 kubectl 创建这个资源
```bash
kubectl apply -f wasmplugin.yaml
```
## 测试插件功能
基于之前生效的 quickstart.yaml，目前集群中的 Ingress 访问拓扑如下所示：
### ![ing-topo.png](https://img.alicdn.com/imgextra/i3/O1CN0178hYAV1sBTSczmfAf_!!6000000005728-2-tps-646-605.png)
未生效插件的情况下：

- 请求`/foo` 将返回 HTTP 应答 `"foo"`
- 请求`/bar` 将返回 HTTP 应答 `"bar"`
### 全局生效
基于上文生效插件阶段，下发的 wasmplugin.yaml，生效插件后效果如下：

- 请求`/foo` 将返回 HTTP 应答 `"hello higress"`
- 请求`/bar` 将返回 HTTP 应答 `"hello higress"`
### 域名&路由级生效
将 wasmplugin.yaml 配置修改如下：
```yaml
# wasmplugin.yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: request-block
  namespace: higress-system
spec:
  defaultConfig:
   # 跟上面例子一样，这个配置会全局生效，但如果被下面规则匹配到，则会改为执行命中规则的配置
   block_urls:
   - "swagger.html"
   matchRules:
   # 路由级生效配置
  - ingress:
    - default/foo
     # default 命名空间下名为 foo 的 ingress 会执行下面这个配置
    config:
      block_bodies:
      - "foo"
  - ingress:
    - default/bar
    # default 命名空间下名为 bar 的 ingress 会执行下面这个配置
    config:
      block_bodies:
      - "bar"
   # 域名级生效配置
  - domain:
    - "*.example.com"
    # 若请求匹配了上面的域名, 会执行下面这个配置
    config:
      block_bodies:
      - "foo"
      - "bar"
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/demo:1.0.0
```
在 pluginConfig 中增加了 `_rules_`  规则列表，规则中可以指定匹配方式，并填写对应生效的配置:

- _match_route_：匹配 Ingress 生效，匹配格式为：Ingress 所在命名空间 + "/" + Ingress 名称
- _match_domain_：匹配域名生效，填写域名即可，支持通配符

生效这份修改后的配置：
```yaml
kubectl apply -f wasmplugin.yaml
```
可以看到效果如下：

- 请求`/foo` 将返回 HTTP 应答 `"hello foo"` (匹配到第一条 rule)
- 请求`/bar` 将返回 HTTP 应答 `"hello bar"` (匹配到第二条 rule)
- 请求`www.example.com` 将返回 HTTP 应答 `"hello world"` （匹配到第三条 rule）
- 请求`www.abc.com` 将返回 HTTP 应答 `"hello higress"` （没有匹配的 rule，使用全局配置）
## 插件生效原理
![wasm.png](https://img.alicdn.com/imgextra/i4/O1CN01PO4HYC1h7qYHonHHZ_!!6000000004231-2-tps-1100-537.png)

这里对插件的生效机制简单做个说明：

1. 用户将代码编译成 wasm 文件
2. 用户将 wasm 文件构建成 docker 镜像
3. 用户将 docker 镜像推送至镜像仓库
4. 用户创建 WasmPlugin 资源
5. Istio watch 到 WasmPlugin 资源的变化
6. Higress Gateway 中的 xDS proxy 进程从 Istio 获取到配置，发现插件的镜像地址
7. xDS proxy 从镜像仓库拉取镜像
8. xDS proxy 从镜像中提取出 wasm 文件
9. Higress Gateway 中的 envoy 进程从 xDS proxy 获取到配置，发现 wasm 文件的本地路径
10. envoy 从本地文件中加载 wasm 文件

这里 envoy 获取配置并加载 wasm 文件使用到了 ECDS (Extension Config Discovery Service)的机制，实现了 wasm 文件更新，直接热加载，不会导致任何连接中断，业务流量完全无损。
## 三个革命性的特性
上面的 Wasm 插件机制为网关自定义插件开发带来了三个革命性的特性。
### 特性一：插件生命周期和网关解耦
这个特性主要得益于 Istio 的 WasmPlugin 机制设计。可以和 K8s Nginx Ingress 的插件机制做个对比：
> reference: [https://github.com/kubernetes/ingress-nginx/blob/main/rootfs/etc/nginx/lua/plugins/README.md](https://github.com/kubernetes/ingress-nginx/blob/main/rootfs/etc/nginx/lua/plugins/README.md)
> ### Installing a plugin
> There are two options:
> - mount your plugin into /etc/nginx/lua/plugins/<your plugin name /> in the ingress-nginx pod
> - build your own ingress-nginx image like it is done in the [example](https://github.com/ElvinEfendi/ingress-nginx-openidc/tree/master/rootfs/etc/nginx/lua/plugins/openidc) and install your plugin during image build

可以看到 Nginx Ingress 加载自定义插件，需要将 lua 文件挂载进 pod，或者在构建镜像时装入。这样就将插件的生命周期跟网关绑定在一起，插件逻辑更新，需要发布新版本，网关也需要发布新版本或者重新部署。
使用 WasmPlugin 的机制，插件需要发布新版本，只需构建插件自身的镜像并进行下发生效，而且可以基于镜像的 tag 进行插件的版本管理。这样插件变更，不仅无需重新部署网关，结合 Envoy 的 ECDS 机制对流量也是完全无损。
### 特性二：高性能的多语言支持
基于 Wasm 的能力，可以用多种语言编写插件，对开发人员更加友好。实现多语言开发插件的另一种方式是基于 RPC 和网关进程通信的外置进程/服务插件，这种模式会有额外的 IO 开销，并且附加的进程/服务也带来额外的运维复杂度。目前大家对 Wasm 插件的性能比较关心，从我们的测试数据来看，指令执行性能相比原生的 C++ 语言确实有差距，但性能和 Lua 持平，且远好于外置插件。
对于一段逻辑：`循环执行20次请求头设置，循环执行20次请求头获取，循环执行20次请求头移除。`我们对比了分别用 Lua 和不同语言实现的 Wasm 的处理性能，下面是对单个请求延时的影响对比：

| **实现语言** | **请求延时增加** |
| --- | --- |
| Lua | 0.20毫秒 |
| Wasm (C++) | 0.19毫秒 |
| Wasm (Go) | 0.20毫秒 |
| Wasm (Rust) | 0.21毫秒 |
| Wasm (AssemblyScript) | 0.21毫秒 |

### 特性三：安全沙箱
Envoy 目前支持多种 Wasm 的运行时，例如 V8，WAMR，wasmtime 等等，这些运行时均提供了安全沙箱能力，即 Wasm 插件中出现了访问空指针、异常未捕获等逻辑，也不会令 Envoy 宿主进程 Crash。并且可以通过配置，在插件逻辑出现异常后进行 Fail Open 处理，跳过插件的执行逻辑，将对业务的影响降至最低。
## 开源社区
特别感谢 Istio/Envoy 社区的前置工作，让 Higress 可以实现对 Ingress 资源启用 WasmPlugin ，增强了 Ingress Controller 的自定义扩展能力。
特别感谢 Tetrate 社区实现的 proxy-wasm-go-sdk，Higress 在这个基础上封装了 wasm-go sdk，降低了开发插件的上手门槛。
Higress 对 Istio/Envoy 的 Wasm 能力做了一些 Bugfix 的工作，目前已经都合并进了上游社区。后续的一些 Feature 能力，也会持续反哺上游社区。
同时欢迎大家一起为 Higress 的插件以及其他社区生态添砖加瓦，为 Higress 贡献请参考文档：
[https://higress.io/zh-cn/docs/developers/guide_dev.html](https://higress.io/zh-cn/docs/developers/guide_dev.html)

