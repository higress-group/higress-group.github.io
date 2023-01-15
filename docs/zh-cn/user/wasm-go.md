---
title: 使用 GO 语言开发 WASM 插件
keywords: wasm
description: 使用 GO 语言开发 WASM 插件
---

# 使用 GO 语言开发 WASM 插件

# 一、工具准备
需要先安装 Golang 和 TinyGo 两个程序
<a name="a81fa"></a>
## 1. Golang
（要求 1.18 版本以上）<br />官方指引链接：[https://go.dev/doc/install](https://go.dev/doc/install)
<a name="JFoN6"></a>
### Windows

1. 下载安装文件：[https://go.dev/dl/go1.19.windows-amd64.msi](https://go.dev/dl/go1.19.windows-amd64.msi)
2. 打开下载好的安装文件直接安装，默认会安装到 `Program Files` 或 `Program Files (x86)` 目录
3. 安装完成后，使用键盘上的快捷键“Win+R”打开运行窗口，在运行窗口中输入“cmd”点击确定即可打开命令窗口，输入命令：`go version`，输出当前安装的版本，表明安装成功
<a name="tavPX"></a>
### MacOS

1. 下载安装文件：[https://go.dev/dl/go1.19.darwin-amd64.pkg](https://go.dev/dl/go1.19.darwin-amd64.pkg)
2. 打开下载好的安装文件直接安装，默认会安装到`/usr/local/go`目录
3. 打开终端命令行工具，输入命令：`go version`，输出当前安装的版本，表明安装成功
<a name="olPlT"></a>
### Linux

1. 下载安装文件：[https://go.dev/dl/go1.19.linux-amd64.tar.gz](https://go.dev/dl/go1.19.linux-amd64.tar.gz)
2. 执行下列命令进行安装：
```bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
```

3. 执行 `go version`，输出当前安装的版本，表明安装成功

<a name="qugm0"></a>
## 2. TinyGo
（要求 0.25.0 版本以上）<br />官方指引链接：[https://tinygo.org/getting-started/install/](https://tinygo.org/getting-started/install/)
<a name="ELNis"></a>
### Windows

1. 下载安装文件：[https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.windows-amd64.zip](https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.windows-amd64.zip)
2. 解压安装文件到指定目录
3. 如果安装解压后的目录为`C:\tinygo`，则需要将`C:\tinygo\bin`添加到环境变量`PATH`中，例如通过在命令窗口中输入 set 命令设置
```bash
set PATH=%PATH%;"C:\tinygo\bin";
```

4. 在命令窗口执行命令 `tinygo version`，输出当前安装的版本，表明安装成功
<a name="iCo9z"></a>
### MacOS

1. 下载压缩包并解压
```bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.darwin-amd64.tar.gz
tar -zxf tinygo0.25.0.darwin-amd64.tar.gz
```

2. 如果安装解压后的目录为`/tmp`，则需要将`/tmp/tinygo/bin`添加到环境变量`PATH`中：
```bash
export PATH=/tmp/tinygo/bin:$PATH
```

3. 在终端执行 `tinygo version`，输出当前安装的版本，表明安装成功
<a name="hNZeF"></a>
### Linux
以 Ubuntu 下 amd64 架构为例，其他系统请参考官方指引链接

1. 下载 DEB 文件，并安装
```bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo_0.25.0_amd64.deb
sudo dpkg -i tinygo_0.25.0_amd64.deb
export PATH=$PATH:/usr/local/bin
```

2. 在终端执行 `tinygo version`，输出当前安装的版本，表明安装成功

<a name="QZbcA"></a>
# 二、编写插件
<a name="u83FM"></a>
## 1. 初始化工程目录

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
go get github.com/tetratelabs/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
```
<a name="Z2lFM"></a>
## 2. 编写 main.go 文件
下面是一个简单示例，实现了在插件配置`mockEnable: true`时直接返回`hello world`应答；未做插件配置，或者设置`mockEnable: false`时给原始请求添加 `hello: world`请求头。更多例子请参考本文第四节。
> 注意：在网关控制台中的插件配置为 yaml 格式，下发给插件时将自动转换为 json 格式，所以例子中的 parseConfig 可以直接从 json 中解析配置

```go
package main

import (
        "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
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
<a name="SYNZJ"></a>
### HTTP 处理挂载点
上面示例代码中通过 `wrapper.ProcessRequestHeadersBy`将自定义函数 `onHttpRequestHeaders`用于`HTTP 请求头处理阶段`处理请求。除此之外，还可以通过下面方式，设置其他阶段的自定义处理函数

| HTTP 处理阶段 | 触发时机 | 挂载方法 |
| --- | --- | --- |
| HTTP 请求头处理阶段 | 网关接收到客户端发送来的请求头数据时 | wrapper.ProcessRequestHeadersBy |
| HTTP 请求 Body 处理阶段 | 网关接收到客户端发送来的请求 Body 数据时 | wrapper.ProcessRequestBodyBy |
| HTTP 应答头处理阶段 | 网关接收到后端服务响应的应答头数据时 | wrapper.ProcessResponseHeadersBy |
| HTTP 应答 Body 处理阶段 | 网关接收到后端服务响应的应答 Body 数据时 | wrapper.ProcessResponseBodyBy |

<a name="r6rK5"></a>
### 工具方法
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

<a name="GAa0T"></a>
## 3. 编译生成 WASM 文件
执行以下命令
```bash
tinygo build -o main.wasm -scheduler=none -target=wasi ./main.go
```
编译成功会在当前目录下创建文件 main.wasm。这个文件在下面本地调试的例子中也会被用到。<br />在使用云原生网关插件市场的自定义插件功能时，直接上传该文件即可。
<a name="yJdN5"></a>
# 三、本地调试

TBD

# 更多示例
<a name="vdifW"></a>
## 无配置插件
插件无需配置时，直接定义空结构体即可
```go
package main

import (
        "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
        "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
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
<a name="dSdLn"></a>
## 在插件中请求外部服务
目前仅支持 http 调用，支持访问在网关控制台中设置了服务来源的 Nacos、K8s 服务，以及固定地址或 DNS 来源的服务。请注意，无法直接使用`net/http`库中的 HTTP client，必须使用如下例中封装的 HTTP client。<br />下面例子中，在配置解析阶段解析服务类型，生成对应的 HTTP client ；在请求头处理阶段根据配置的请求路径访问对应服务，解析应答头，然后再设置在原始的请求头中。
```go
package main

import (
	"errors"
	"net/http"
	"strings"

    "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
	"github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
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
	serviceSource := json.Get("serviceSource").String()
	// 固定地址和dns类型的serviceName，为控制台中创建服务时指定
	// nacos和k8s来源的serviceName，即服务注册时指定的原始名称
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if serviceName == "" || servicePort == 0 {
		return errors.New("invalid service config")
	}
	switch serviceSource {
	case "k8s":
		namespace := json.Get("namespace").String()
		config.client = wrapper.NewClusterClient(wrapper.K8sCluster{
			ServiceName: serviceName,
			Namespace:   namespace,
			Port:        servicePort,
		})
		return nil
	case "nacos":
		namespace := json.Get("namespace").String()
		config.client = wrapper.NewClusterClient(wrapper.NacosCluster{
			ServiceName: serviceName,
			NamespaceID: namespace,
			Port:        servicePort,
		})
		return nil
	case "ip":
		config.client = wrapper.NewClusterClient(wrapper.StaticIpCluster{
			ServiceName: serviceName,
			Port:        servicePort,
		})
		return nil
	case "dns":
		domain := json.Get("domain").String()
		config.client = wrapper.NewClusterClient(wrapper.DnsCluster{
			ServiceName: serviceName,
			Port:        servicePort,
			Domain:      domain,
		})
		return nil
	default:
		return errors.New("unknown service source: " + serviceSource)
	}
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	// 使用client的Get方法发起HTTP Get调用，此处省略了timeout参数，默认超时时间500毫秒
	config.client.Get(config.requestPath, nil,
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
	// 需要等待异步回调完成，返回Pause状态，可以被ResumeHttpRequest恢复
	return types.ActionPause
}
```
