---
title: 使用 GO 语言开发 WASM 插件
keywords: [wasm]
description: 使用 GO 语言开发 WASM 插件
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/user/wasm-go.md
---

# 使用 GO 语言开发 WASM 插件

> **注意**：

> 使用 TinyGo 对版本有限定要求，目前经大规模验证稳定的版本组合是：tinygo 0.29 + go 1.20，可以参考这个官方 [Makefile](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/Makefile)
>
> go 1.24 已经原生支持编译 wasm 文件，相关文档补充中

## 一、工具准备
需要先安装 Golang 和 TinyGo 两个程序

### 1. Golang
（要求 1.18 版本以上）<br />官方指引链接：[https://go.dev/doc/install](https://go.dev/doc/install)

#### Windows

1. 下载安装文件：[https://go.dev/dl/go1.19.windows-amd64.msi](https://go.dev/dl/go1.19.windows-amd64.msi)
2. 打开下载好的安装文件直接安装，默认会安装到 `Program Files` 或 `Program Files (x86)` 目录
3. 安装完成后，使用键盘上的快捷键“Win+R”打开运行窗口，在运行窗口中输入“cmd”点击确定即可打开命令窗口，输入命令：`go version`，输出当前安装的版本，表明安装成功

#### MacOS

1. 下载安装文件：[https://go.dev/dl/go1.19.darwin-amd64.pkg](https://go.dev/dl/go1.19.darwin-amd64.pkg)
2. 打开下载好的安装文件直接安装，默认会安装到`/usr/local/go`目录
3. 打开终端命令行工具，输入命令：`go version`，输出当前安装的版本，表明安装成功

#### Linux

1. 下载安装文件：[https://go.dev/dl/go1.19.linux-amd64.tar.gz](https://go.dev/dl/go1.19.linux-amd64.tar.gz)
2. 执行下列命令进行安装：
```bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
```

3. 执行 `go version`，输出当前安装的版本，表明安装成功

### 2. TinyGo

（要求 0.28.1 版本以上）<br />官方指引链接：[https://tinygo.org/getting-started/install/](https://tinygo.org/getting-started/install/)

#### Windows

1. 下载安装文件：[https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip](https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip)
2. 解压安装文件到指定目录
3. 如果安装解压后的目录为`C:\tinygo`，则需要将`C:\tinygo\bin`添加到环境变量`PATH`中，例如通过在命令窗口中输入 set 命令设置
```bash
set PATH=%PATH%;"C:\tinygo\bin";
```

4. 在命令窗口执行命令 `tinygo version`，输出当前安装的版本，表明安装成功

#### MacOS

1. 下载压缩包并解压
```bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz
tar -zxf tinygo0.28.1.darwin-amd64.tar.gz
```

2. 如果安装解压后的目录为`/tmp`，则需要将`/tmp/tinygo/bin`添加到环境变量`PATH`中：
```bash
export PATH=/tmp/tinygo/bin:$PATH
```

3. 在终端执行 `tinygo version`，输出当前安装的版本，表明安装成功

#### Linux
以 Ubuntu 下 amd64 架构为例，其他系统请参考官方指引链接

1. 下载 DEB 文件，并安装
```bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb
sudo dpkg -i tinygo_0.28.1_amd64.deb
export PATH=$PATH:/usr/local/bin
```

2. 在终端执行 `tinygo version`，输出当前安装的版本，表明安装成功


## 二、编写插件

### 1. 初始化工程目录

1. 新建一个工程目录文件，例如`wasm-demo-go`
2. 在所建目录下执行以下命令，进行 Go 工程初始化
```bash
go mod init wasm-demo-go
```

3. 国内环境可能需要设置下载依赖包的代理
```bash
go env -w GOPROXY=https://proxy.golang.com.cn,direct
```

4. 下载构建插件的依赖
```bash
go get github.com/higress-group/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
```
### 2. 编写 main.go 文件
下面是一个简单示例，实现了在插件配置`mockEnable: true`时直接返回`hello world`应答；未做插件配置，或者设置`mockEnable: false`时给原始请求添加 `hello: world`请求头。更多例子请参考本文第四节。
> 注意：在网关控制台中的插件配置为 yaml 格式，下发给插件时将自动转换为 json 格式，所以例子中的 parseConfig 可以直接从 json 中解析配置

```
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// 插件名称
		"my-plugin",
		// 为解析插件配置，设置自定义函数
		 wrapper.ParseConfigBy(parseConfig),
		// 为处理请求头，设置自定义函数
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// 自定义插件配置
type MyConfig struct {
	mockEnable bool
}

// 在控制台插件配置中填写的yaml配置会自动转换为json，此处直接从json这个参数里解析配置即可
func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	// 解析出配置，更新到config中
	config.mockEnable = json.Get("mockEnable").Bool()
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	proxywasm.AddHttpRequestHeader("hello", "world")
	if config.mockEnable {
		proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	}
	return types.ActionContinue
}
```

#### HTTP 处理挂载点
上面示例代码中通过 `wrapper.ProcessRequestHeadersBy`将自定义函数 `onHttpRequestHeaders`用于`HTTP 请求头处理阶段`处理请求。除此之外，还可以通过下面方式，设置其他阶段的自定义处理函数

| HTTP 处理阶段 | 触发时机 | 挂载方法 |
| --- | --- | --- |
| HTTP 请求头处理阶段 | 网关接收到客户端发送来的请求头数据时 | wrapper.ProcessRequestHeadersBy |
| HTTP 请求 Body 处理阶段 | 网关接收到客户端发送来的请求 Body 数据时 | wrapper.ProcessRequestBodyBy |
| HTTP 应答头处理阶段 | 网关接收到后端服务响应的应答头数据时 | wrapper.ProcessResponseHeadersBy |
| HTTP 应答 Body 处理阶段 | 网关接收到后端服务响应的应答 Body 数据时 | wrapper.ProcessResponseBodyBy |

#### 工具方法
上面示例代码中的 `proxywasm.AddHttpRequestHeader` 和 `proxywasm.SendHttpResponse`是插件 SDK 提供的两个工具方法，主要的工具方法见下表：

| 分类 | 方法名称 | 用途 | 可以生效的<br />HTTP 处理阶段 |
| --- | --- | --- | --- |
| 请求头处理 | GetHttpRequestHeaders | 获取客户端请求的全部请求头 | HTTP 请求头处理阶段<br /> |
|  | ReplaceHttpRequestHeaders | 替换客户端请求的全部请求头 | HTTP 请求头处理阶段 |
|  | GetHttpRequestHeader | 获取客户端请求的指定请求头 | HTTP 请求头处理阶段 |
|  | RemoveHttpRequestHeader | 移除客户端请求的指定请求头 | HTTP 请求头处理阶段 |
|  | ReplaceHttpRequestHeader | 替换客户端请求的指定请求头 | HTTP 请求头处理阶段 |
|  | AddHttpRequestHeader | 新增一个客户端请求头 | HTTP 请求头处理阶段 |
| 请求 Body 处理 | GetHttpRequestBody | 获取客户端请求 Body | HTTP 请求 Body 处理阶段 |
|  | AppendHttpRequestBody | 将指定的字节串附加到客户端请求 Body 末尾 | HTTP 请求 Body 处理阶段 |
|  | PrependHttpRequestBody | 将指定的字节串附加到客户端请求 Body 的开头 | HTTP 请求 Body 处理阶段 |
|  | ReplaceHttpRequestBody | 替换客户端请求 Body | HTTP 请求 Body 处理阶段 |
| 应答头处理 | GetHttpResponseHeaders | 获取后端响应的全部应答头 | HTTP 应答头处理阶段<br /> |
|  | ReplaceHttpResponseHeaders | 替换后端响应的全部应答头 | HTTP 应答头处理阶段 |
|  | GetHttpResponseHeader | 获取后端响应的指定应答头 | HTTP 应答头处理阶段 |
|  | RemoveHttpResponseHeader | 移除后端响应的指定应答头 | HTTP 应答头处理阶段 |
|  | ReplaceHttpResponseHeader | 替换后端响应的指定应答头 | HTTP 应答头处理阶段 |
|  | AddHttpResponseHeader | 新增一个后端响应头 | HTTP 应答头处理阶段 |
| 应答 Body 处理 | GetHttpResponseBody | 获取客户端请求 Body | HTTP 应答 Body 处理阶段 |
|  | AppendHttpResponseBody | 将指定的字节串附加到后端响应 Body 末尾 | HTTP 应答 Body 处理阶段 |
|  | PrependHttpResponseBody | 将指定的字节串附加到后端响应 Body 的开头 | HTTP 应答 Body 处理阶段 |
|  | ReplaceHttpResponseBody | 替换后端响应 Body | HTTP 应答 Body 处理阶段 |
| HTTP 调用 | DispatchHttpCall | 发送一个 HTTP 请求 | - |
|  | GetHttpCallResponseHeaders | 获取 DispatchHttpCall 请求响应的应答头 | - |
|  | GetHttpCallResponseBody | 获取 DispatchHttpCall 请求响应的应答 Body | - |
|  | GetHttpCallResponseTrailers | 获取 DispatchHttpCall 请求响应的应答 Trailer | - |
| 直接响应 | SendHttpResponse | 直接返回一个特定的 HTTP 应答 | - |
| 流程恢复 | ResumeHttpRequest | 恢复先前被暂停的请求处理流程 | - |
|  | ResumeHttpResponse | 恢复先前被暂停的应答处理流程 | - |

### 3. 编译生成 WASM 文件


使用 proxy-wasm 社区 0.2.1 版本的 ABI，在 HTTP 请求/响应处理阶段只能使用 `types.ActionContinue` 和 `types.ActionPause` 两种返回值来控制状态：

1. types.ActionContinue：继续后续处理，比如继续读取请求 body，或者继续读取响应 body。

2. types.ActionPause： 暂停后续处理，比如在 onHttpRequestHeaders 通过 Http 或者 Redis 调用外部服务获取认证信息，在调用外部服务回调钩子函数中调用 proxywasm.ResumeHttpRequest() 来恢复请求处理 或者调用 proxywasm.SendHttpResponseWithDetail() 来返回响应。

只需这样简单的状态管理，使用下面的编译方式即可：

```bash
go mod tidy
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer" ./
```

Higress 扩展了 0.2.100 版本的 ABI 来实现更丰富的 Header 状态管理，如果要使用，请用下面的编译方式：

```bash
go mod tidy
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100" ./
```

Header 的状态管理说明如下：

1. HeaderContinue:

表示当前 filter 已经处理完毕，可以继续交给下一个 filter 处理。 types.ActionContinue 对应就是这个状态。

2. HeaderStopIteration:

表示 header 还不能继续交给下一个 filter 来处理。 但是并不停止从连接读数据，继续触发 body data 的处理。 这样可以在 body data 处理阶段可以更新 Http 请求头内容。 如果 body data 要交给下一个 filter 处理， 这时 header 是也会被一起交给下一个 filter 处理。

但注意返回这个状态时，要求必须有 body，如果没有 body，请求/响应将被一直阻塞。

判断是否存在请求 body 可以使用 [HasRequestBody()](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/request_wrapper.go#L86) 

3. HeaderContinueAndEndStream:

表示 header 可以继续交给下一个 filter 处理，但是下一个 filter 收到的 end_stream = false，也就是标记请求还未结束。以便当前 filter 再增加 body。

4. HeaderStopAllIterationAndBuffer:

停止所有迭代，表示 header 不能继续交给下一个 filter，并且当前 filter 也不能收到 body data。 并对当前过滤器及后续过滤器的头部、数据和尾部进行缓冲。如果缓存大小超过了 buffer limit，在请求阶段就直接返回 413，响应阶段就直接返回 500。
同时需要调用 proxywasm.ResumeHttpRequest()、 proxywasm.ResumeHttpResponse() 或者 proxywasm.SendHttpResponseWithDetail()  函数来恢复后续处理。

5. HeaderStopAllIterationAndWatermark:

同上，区别是，当缓存超过了 buffer limit 会触发流控，也就是暂停从连接上读数据。 0.2.1 ABI 中的 types.ActionPause 实际上对应就是这个状态。

> 关于 types.HeaderStopIteration 和 HeaderStopAllIterationAndWatermark 的使用场景可以参考 Higress 官方提供 [ai-transformer 插件](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99) 和  [ai-quota 插件](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179) 。



如果windows下编译出现error: could not find wasm-opt, set the WASMOPT environment variable to override 则需要下载https://github.com/WebAssembly/binaryen/ 里面包含了bin\wasm-opt.exe将这个文件拷贝到tinygo的bin目录下重新编译即可。 <br />
编译成功会在当前目录下创建文件 main.wasm。这个文件在下面本地调试的例子中也会被用到。<br />

如果linux/mac下编译出现该错误，使用apt/brew等系统自带包管理工具安装下binaryen即可，例如`brew install binaryen`

要在Higress中配合Wasmplugin CRD或者Console的UI交互配置该插件，需要将该wasm文件打包成oci或者docker镜像，可以参考这篇文档：[《自定义插件》](https://higress.cn/docs/latest/plugins/custom)

## 三、本地调试

### 工具准备
安装[Docker](https://docs.docker.com/engine/install/?spm=a2c4g.426926.0.0.29071f47tjgquo)

### 使用 docker compose 启动验证
1. 进入在编写插件时创建的目录，例如wasm-demo目录，确认该目录下已经编译生成了main.wasm文件。
2. 在目录下创建文件docker-compose.yaml，内容如下：
```yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.0.7
    entrypoint: /usr/local/bin/envoy
    # 注意这里对wasm开启了debug级别日志，正式部署时则默认info级别
    command: -c /etc/envoy/envoy.yaml --component-log-level wasm:debug
    depends_on:
    - httpbin
    networks:
    - wasmtest
    ports:
    - "10000:10000"
    volumes:
    - ./envoy.yaml:/etc/envoy/envoy.yaml
    - ./main.wasm:/etc/envoy/main.wasm

  httpbin:
    image: kennethreitz/httpbin:latest
    networks:
    - wasmtest
    ports:
    - "12345:80"

networks:
  wasmtest: {}
```
3. 继续在该目录下创建文件envoy.yaml，内容如下：
```yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
  - name: listener_0
    address:
      socket_address:
        protocol: TCP
        address: 0.0.0.0
        port_value: 10000
    filter_chains:
    - filters:
      - name: envoy.filters.network.http_connection_manager
        typed_config:
          "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
          scheme_header_transformation:
            scheme_to_overwrite: https
          stat_prefix: ingress_http
          route_config:
            name: local_route
            virtual_hosts:
            - name: local_service
              domains: ["*"]
              routes:
              - match:
                  prefix: "/"
                route:
                  cluster: httpbin
          http_filters:
          - name: wasmdemo
            typed_config:
              "@type": type.googleapis.com/udpa.type.v1.TypedStruct
              type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
              value:
                config:
                  name: wasmdemo
                  vm_config:
                    runtime: envoy.wasm.runtime.v8
                    code:
                      local:
                        filename: /etc/envoy/main.wasm
                  configuration:
                    "@type": "type.googleapis.com/google.protobuf.StringValue"
                    value: |
                      {
                        "mockEnable": false
                      }
          - name: envoy.filters.http.router
            typed_config:
              "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
  clusters:
  - name: httpbin
    connect_timeout: 30s
    type: LOGICAL_DNS
    # Comment out the following line to test on v6 networks
    dns_lookup_family: V4_ONLY
    lb_policy: ROUND_ROBIN
    load_assignment:
      cluster_name: httpbin
      endpoints:
      - lb_endpoints:
        - endpoint:
            address:
              socket_address:
                address: httpbin
                port_value: 80
```
4. 执行以下命令启动docker compose。
```bash
docker compose up
```

### 功能验证
1. WASM功能验证

使用curl直接访问httpbin，可以看到不经过网关时的请求头内容，如下：
```
curl http://127.0.0.1:12345/get

{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Host": "127.0.0.1:12345",
    "User-Agent": "curl/7.79.1"
  },
  "origin": "172.18.0.1",
  "url": "http://127.0.0.1:12345/get"
}
```

使用curl通过网关访问httpbin，可以看到经过网关处理后的请求头的内容，如下：
```
curl http://127.0.0.1:10000/get

{
  "args": {},
  "headers": {
    "Accept": "*/*",
    "Hello": "world",
    "Host": "127.0.0.1:10000",
    "Original-Host": "127.0.0.1:10000",
    "Req-Start-Time": "1681269273896",
    "User-Agent": "curl/7.79.1",
    "X-Envoy-Expected-Rq-Timeout-Ms": "15000"
  },
  "origin": "172.18.0.3",
  "url": "https://127.0.0.1:10000/get"
}
```

此时上文编写插件的功能已经生效了，加入了`hello: world`请求头。

2. 插件配置修改验证

修改envoy.yaml，将`mockEnable`配置修改为true。
```yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |
      {
        "mockEnable": true
      }
```

使用curl通过网关访问httpbin，可以看到经过网关处理后的请求头的内容，如下：

```
curl http://127.0.0.1:10000/get

hello world
```
说明插件配置修改生效，开启了mock应答直接返回了hello world。


## 更多示例

### 无配置插件
插件无需配置时，直接定义空结构体即可

```
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
)

func main() {
	wrapper.SetCtx(
		"hello-world",
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

type MyConfig struct {}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	return types.ActionContinue
}
```

### 在插件中请求外部服务
目前仅支持 http 调用，支持访问在网关控制台中设置了服务来源的 Nacos、K8s 服务，以及固定地址或 DNS 来源的服务。请注意，无法直接使用`net/http`库中的 HTTP client，必须使用如下例中封装的 HTTP client。<br />下面例子中，在配置解析阶段解析服务类型，生成对应的 HTTP client ；在请求头处理阶段根据配置的请求路径访问对应服务，解析应答头，然后再设置在原始的请求头中。

```
package main

import (
	"errors"
	"net/http"
	"strings"
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		"http-call",
		wrapper.ParseConfigBy(parseConfig),
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

type MyConfig struct {
	// 用于发起HTTP调用client
	client      wrapper.HttpClient
	// 请求url
	requestPath string
	// 根据这个key取出调用服务的应答头对应字段，再设置到原始请求的请求头，key为此配置项
	tokenHeader string
}

func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	config.tokenHeader = json.Get("tokenHeader").String()
	if config.tokenHeader == "" {
		return errors.New("missing tokenHeader in config")
	}
	config.requestPath = json.Get("requestPath").String()
	if config.requestPath == "" {
		return errors.New("missing requestPath in config")
	}
	// 带服务类型的完整 FQDN 名称，例如 my-svc.dns, my-svc.static, service-provider.DEFAULT-GROUP.public.nacos, httpbin.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
		if strings.HasSuffix(serviceName, ".static") {
			// 静态IP类型服务的逻辑端口是80
			servicePort = 80
		}
	}
	config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{
		FQDN: serviceName,
		Port: servicePort,
        })
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	// 使用client的Get方法发起HTTP Get调用，此处省略了timeout参数，默认超时时间500毫秒
	err := config.client.Get(config.requestPath, nil,
		       // 回调函数，将在响应异步返回时被执行
		       func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			       // 请求没有返回200状态码，进行处理
			       if statusCode != http.StatusOK {
				       log.Errorf("http call failed, status: %d", statusCode)
				       proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,
					       []byte("http call failed"), -1)
				       return
			       }
			       // 打印响应的HTTP状态码和应答body
			       log.Infof("get status: %d, response body: %s", statusCode, responseBody)
			       // 从应答头中解析token字段设置到原始请求头中
			       token := responseHeaders.Get(config.tokenHeader)
			       if token != "" {
				       proxywasm.AddHttpRequestHeader(config.tokenHeader, token)
			       }
			       // 恢复原始请求流程，继续往下处理，才能正常转发给后端服务
			       proxywasm.ResumeHttpRequest()
		})
 	
	if err != nil {
		// 由于调用外部服务失败，放行请求，记录日志
		log.Errorf("Error occured while calling http, it seems cannot find the service cluster.")
		return types.ActionContinue
	} else {
		// 需要等待异步回调完成，返回Pause状态，可以被ResumeHttpRequest恢复
		return types.ActionPause
	}
}
```

### 在插件中调用Redis

使用如下示例代码实现Redis限流插件

```go
package main

import (
	"strconv"
	"time"

	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
	"github.com/tidwall/resp"

	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
)

func main() {
	wrapper.SetCtx(
		"redis-demo",
		wrapper.ParseConfigBy(parseConfig),
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
		wrapper.ProcessResponseHeadersBy(onHttpResponseHeaders),
	)
}

type RedisCallConfig struct {
	client wrapper.RedisClient
	qpm    int
}

func parseConfig(json gjson.Result, config *RedisCallConfig, log wrapper.Log) error {
	// 带服务类型的完整 FQDN 名称，例如 my-redis.dns、redis.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
		if strings.HasSuffix(serviceName, ".static") {
			// 静态IP类型服务的逻辑端口是80
			servicePort = 80
		} else {
			servicePort = 6379
		}
	}
	username := json.Get("username").String()
	password := json.Get("password").String()
	// 单位是毫秒
	timeout := json.Get("timeout").Int()
	if timeout == 0 {
		timeout = 1000
	}
	qpm := json.Get("qpm").Int()
	config.qpm = int(qpm)
	config.client = wrapper.NewRedisClusterClient(wrapper.FQDNCluster{
		FQDN: serviceName,
		Port: servicePort,
	})
	return config.client.Init(username, password, timeout)
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log wrapper.Log) types.Action {
	now := time.Now()
	minuteAligned := now.Truncate(time.Minute)
	timeStamp := strconv.FormatInt(minuteAligned.Unix(), 10)
	// 如果 redis api 返回的 err != nil，一般是由于网关找不到 redis 后端服务，请检查是否误删除了 redis 后端服务
	err := config.client.Incr(timeStamp, func(response resp.Value) {
		if response.Error() != nil {
			log.Errorf("call redis error: %v", response.Error())
			proxywasm.ResumeHttpRequest()
		} else {
			ctx.SetContext("timeStamp", timeStamp)
			ctx.SetContext("callTimeLeft", strconv.Itoa(config.qpm-response.Integer()))
			if response.Integer() == 1 {
				err := config.client.Expire(timeStamp, 60, func(response resp.Value) {
					if response.Error() != nil {
						log.Errorf("call redis error: %v", response.Error())
					}
					proxywasm.ResumeHttpRequest()
				})
				if err != nil {
					log.Errorf("Error occured while calling redis, it seems cannot find the redis cluster.")
					proxywasm.ResumeHttpRequest()
				}
			} else {
				if response.Integer() > config.qpm {
					proxywasm.SendHttpResponse(429, [][2]string{{"timeStamp", timeStamp}, {"callTimeLeft", "0"}}, []byte("Too many requests\n"), -1)
				} else {
					proxywasm.ResumeHttpRequest()
				}
			}
		}
	})
	if err != nil {
		// 由于调用redis失败，放行请求，记录日志
		log.Errorf("Error occured while calling redis, it seems cannot find the redis cluster.")
		return types.ActionContinue
	} else {
		// 请求hold住，等待redis调用完成
		return types.ActionPause
	}
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log wrapper.Log) types.Action {
	if ctx.GetContext("timeStamp") != nil {
		proxywasm.AddHttpResponseHeader("timeStamp", ctx.GetContext("timeStamp").(string))
	}
	if ctx.GetContext("callTimeLeft") != nil {
		proxywasm.AddHttpResponseHeader("callTimeLeft", ctx.GetContext("callTimeLeft").(string))
	}
	return types.ActionContinue
}
```
