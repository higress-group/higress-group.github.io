---
title: Developing a WASM plugin with Golang
keywords: wasm
description: Developing a WASM plugin with Golang
---

# Implement a WASM plugin with Golang

# 1. Prepare Development Tools

First, install Golang and Tinygo.
<a name="a81fa"></a>
## 1. Golang
Min Version: 1.18<br />Official download link: [https://go.dev/doc/install](https://go.dev/doc/install)
<a name="JFoN6"></a>
### Windows

1. Download the installer: [https://go.dev/dl/go1.19.windows-amd64.msi](https://go.dev/dl/go1.19.windows-amd64.msi)
2. Run the downloaded installer to start the installation. It will be installed to `Program Files` or `Program Files (x86)` folder by default.
3. After completed the installation, open "Run" dialog with hotkey "Win+R". Type "cmd" in the dialog and click "OK" to open Command Line Prompt. Type: `go version`. If version info is displayed, the package has been successfully installed.
<a name="tavPX"></a>
### MacOS

1. Download the installer: [https://go.dev/dl/go1.19.darwin-amd64.pkg](https://go.dev/dl/go1.19.darwin-amd64.pkg)
2. Run the downloaded installer to start the installation. It will be installed to `/usr/local/go` folder by default.
3. Open Terminal and type: `go version`. If version info is displayed, the package has been successfully installed.
<a name="olPlT"></a>
### Linux

1. Download the installer: [https://go.dev/dl/go1.19.linux-amd64.tar.gz](https://go.dev/dl/go1.19.linux-amd64.tar.gz)
2. Execute following commands to start the installation:
```bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
```

3. Execute `go version`. If version info is displayed, the package has been successfully installed.

<a name="qugm0"></a>
## 2. TinyGo
Min Version: 0.25.0<br />Official download link: [https://tinygo.org/getting-started/install/](https://tinygo.org/getting-started/install/)
<a name="ELNis"></a>
### Windows

1. Download the package: [https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.windows-amd64.zip](https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.windows-amd64.zip)
2. Unpack the package to the target folder
3. If the package is unpacked to folder `C:\tinygo`, you need to add `C:\tinygo\bin` into the environment variable `PATH`, using set command in Command Line Prompt for example.
```bash
set PATH=%PATH%;"C:\tinygo\bin";
```

4. Execute `tinygo version` command in Command Line Prompt. If version info is displayed, the package has been successfully installed.
<a name="iCo9z"></a>
### MacOS

1. Download and unpack the package
```bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.darwin-amd64.tar.gz
tar -zxf tinygo0.25.0.darwin-amd64.tar.gz
```

2. If the package is unpacked to folder `/tmp`, you need to add `/tmp/tinygo/bin` to the environment variable `PATH`:
```bash
export PATH=/tmp/tinygo/bin:$PATH
```

3. Execute command `tinygo version` in Terminal.  If version info is displayed, the package has been successfully installed.
<a name="hNZeF"></a>
### Linux
Following steps are based on Ubuntu AMD64. For other OSes, please refer to the official document.

1. Download and install the DEB package.
```bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo_0.25.0_amd64.deb
sudo dpkg -i tinygo_0.25.0_amd64.deb
export PATH=$PATH:/usr/local/bin
```

2. Execute command `tinygo version` in Terminal. If version info is displayed, the package has been successfully installed.

<a name="QZbcA"></a>
# 2. Write a plugin
<a name="u83FM"></a>
## 1. Initialize the project

1. Create a new folder for the project. For example: `wasm-demo-go`.
2. Execute following commands in the new folder to initialize the Go project:
```bash
go mod init wasm-demo-go
```

3. If you are in the Chinese mainland, you may need to set a proxy for downloading dependencies.
```bash
go env -w GOPROXY=https://proxy.golang.com.cn,direct
```

4. Download dependencies for plugin building. 
```bash
go get github.com/tetratelabs/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
```
<a name="Z2lFM"></a>
## 2. Write main.go
You can find a simple sample below, which provides following functions:
1. If `mockEnable` is set to `true`, send `hello world` directly as the response.
2. If `mockEnable` is not set or set to `false`, add an extra HTTP header `hello: world` to the original request.
More samples can be found in section 4 below.

> Note: Plugin configurations use YAML format in the gateway console. But plugins receive them in JSON format. So in the sample below, actual config data are extracted from JSON by the `parseConfig` function.

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
                // Plugin name
                "my-plugin",
                // A custom function for parsing plugin configurations
                wrapper.ParseConfigBy(parseConfig),
                // A custom function for processing request headers
                wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
        )
}

// Custom plugin configuration
type MyConfig struct {
        mockEnable bool
}

// Plugin configurations set in the console with YAML format will be converted to JSON. So we just need to parse config data from JSON.
func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
        // Get the configuration property and set to the config object.
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
### HTTP Processing Pointcuts
In the sample above, `wrapper.ProcessRequestHeadersBy` applies custom function `onHttpRequestHeaders` when processing requests in`HTTP request header processing stage`. Besides that, you can use following methods to set custom processing functions for various stages.

| HTTP Processing Stage | Trigger Time | Pointcut Mounting Method |
| --- | --- | --- |
| HTTP request header processing stage | When gateway receives request headers from client | wrapper.ProcessRequestHeadersBy |
| HTTP request body processing stage | When gateway receives request body from client | wrapper.ProcessRequestBodyBy |
| HTTP response header processing stage | When gateway receives response headers from upstream | wrapper.ProcessResponseHeadersBy |
| HTTP response body processing stage | When gateway receives response body from upstream | wrapper.ProcessResponseBodyBy |

<a name="r6rK5"></a>
### Utility Functions
In the sample above, `proxywasm.AddHttpRequestHeader` and `proxywasm.SendHttpResponse` are two utility methods provided by the plugin SDK. You can find major utility functions in the table below:

| Category | Name | Usage | Available<br />HTTP Processing Stage(s) |
| --- | --- | --- | --- |
| Request Header Processing | GetHttpRequestHeaders | Get all the request headers sent by the client | HTTP request header processing stage |
|  | ReplaceHttpRequestHeaders | Replace all headers in the request. | HTTP request header processing stage |
|  | GetHttpRequestHeader | Get the specified header in the request. | HTTP request header processing stage |
|  | RemoveHttpRequestHeader | Remove the specified header from the request. | HTTP request header processing stage |
|  | ReplaceHttpRequestHeader | Replace the specified header in the response. | HTTP request header processing stage |
|  | AddHttpRequestHeader | Add a new header to the request. | HTTP request header processing stage |
| Request Body Processing | GetHttpRequestBody | Get the request body received from client. | HTTP request body processing stage |
|  | AppendHttpRequestBody | Append the specified binary data to the request body. | HTTP request body processing stage |
|  | PrependHttpRequestBody | Prepend the specified binary data to the request body. | HTTP request body processing stage |
|  | ReplaceHttpRequestBody | Replace the entire request body received from client. | HTTP request body processing stage |
| Response Header Processing | GetHttpResponseHeaders | Get all the response headers received from upstream. | HTTP response header processing stage |
|  | ReplaceHttpResponseHeaders | Replace all headers in the response. | HTTP response header processing stage |
|  | GetHttpResponseHeader | Get the specified header in the response. | HTTP response header processing stage |
|  | RemoveHttpResponseHeader | Remove the specified header from the response. | HTTP response header processing stage |
|  | ReplaceHttpResponseHeader | Replace the specified header in the response. | HTTP response header processing stage |
|  | AddHttpResponseHeader | Add a new header to the response. | HTTP response header processing stage |
| Response Body Processing | GetHttpResponseBody | Get the response body received from upstream. | HTTP response body processing stage |
|  | AppendHttpResponseBody | Append the specified binary data to the response body. | HTTP response body processing stage |
|  | PrependHttpResponseBody | Prepend the specified binary data to the response body. | HTTP response body processing stage |
|  | ReplaceHttpResponseBody | Replace the entire response body with specific data. | HTTP response body processing stage |
| HTTP Call | DispatchHttpCall | Send an HTTP request. | - |
|  | GetHttpCallResponseHeaders | Get the response headers associated with a DispatchHttpCall call. | - |
|  | GetHttpCallResponseBody | Get the response body associated with a DispatchHttpCall call. | - |
|  | GetHttpCallResponseTrailers | Get the response trailer associated with a DispatchHttpCall call. | - |
| Respond Directly | SendHttpResponse | Return a specific HTTP response immediately. | - |
| Process Resuming | ResumeHttpRequest | Resume the request processing workflow paused before. | - |
|  | ResumeHttpResponse | Resume the response processing workflow paused before. | - |

<a name="GAa0T"></a>
## 3. Build WASM file
Execute the following command:
```bash
tinygo build -o main.wasm -scheduler=none -target=wasi ./main.go
```
A new file named main.wasm will be created after a successful compilation, which will be used in the local debugging sample below as well.<br />When using custom plugin function in the cloud native gateway market, you just need to upload this file.

<a name="yJdN5"></a>
# 3. Local Debugging 

TBD

# More Samples
<a name="vdifW"></a>
## Plugin with No Configuration
If the plugin needs no configuration, just define an empty config struct.
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
## Send Requests to External Services in the Plugin
Only HTTP requests are supported for now. You can send requests to Nacos and K8s services with service sources configured in the gateway console, and services with a static IP or DNS source. Please be noted, HTTP client in the `net/http` package cannot be used here. You only use the wrapped HTTP client as shown in the sample below.<br />In the following sample works as below:
1. Parse service type in the config parsing stage, and generate the corresponding HTTP client.
2. In the HTTP request header processing stage, send a service request to the configured URL.
3. Parse response headers and get token value using the specified key.
4. Set the token value to the headers of the original request.
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
	// The client used to initiate an HTTP request
	client      wrapper.HttpClient
	// Request URL
	requestPath string
	// Use this key when extracting token header from the service response and setting a header to the request. The value is configurable.
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
	// If serviceSource is set to "ip" or "dns", serviceName shall be specified when creating the service.
	// If serviceSource is set to "nacos" or "k8s", serviceName shall be set to the original name specified when registering the service.
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
	// Use the Get function of the client to initiate an HTTP Get request.
	// The timeout parameter is omitted here, whose default value is 500ms.
	config.client.Get(config.requestPath, nil,
		// A callback function which will be called asynchronously when receiving the response.
		func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			// Process the response with a status code other than 200.
			if statusCode != http.StatusOK {
				log.Errorf("http call failed, status: %d", statusCode)
				proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,
					[]byte("http call failed"), -1)
				return
			}
			// Print out the status code and response body
			log.Infof("get status: %d, response body: %s", statusCode, responseBody)
			// Extract token value from the response header and set the header of the original request
			token := responseHeaders.Get(config.tokenHeader)
			if token != "" {
				proxywasm.AddHttpRequestHeader(config.tokenHeader, token)
			}
			// Resume the original request processing workflow. Continue the process, so the request can be forwarded to the upstream.
			proxywasm.ResumeHttpRequest()
		})
	// We need to wait for the callback to finish its process.
	// Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.
	return types.ActionPause
}
```
