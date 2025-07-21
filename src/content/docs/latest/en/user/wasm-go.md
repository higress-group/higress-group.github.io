---
title: Developing WASM Plugins with Go
keywords: [wasm, go, golang, plugin, development]
description: A comprehensive guide to developing WASM plugins for Higress using the Go programming language
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/wasm-go.md
---

# Developing WASM Plugins with Go

> **Note**:
> Go 1.24 now natively supports compiling WASM files, and Higress has already migrated from TinyGo compilation to Go 1.24 native compilation.
>

## 1. Tool Preparation
Install Golang
### Golang
(Requires version 1.24 or higher)  
Official installation guide: [https://go.dev/doc/install](https://go.dev/doc/install)

#### Windows

1. Download the installer: [https://go.dev/dl/go1.24.4.windows-amd64.msi](https://go.dev/dl/go1.24.4.windows-amd64.msi)
2. Run the downloaded installer. By default, it will be installed in the `Program Files` or `Program Files (x86)` directory
3. After installation, press "Win+R" to open the Run dialog, type "cmd" and press Enter to open the command prompt. Then type: `go version` to verify the installation

#### macOS

1. Download the installer: [https://go.dev/dl/go1.24.4.darwin-amd64.pkg](https://go.dev/dl/go1.24.4.darwin-amd64.pkg)
2. Run the downloaded installer. By default, it will be installed in the `/usr/local/go` directory
3. Open Terminal and type: `go version` to verify the installation

#### Linux

1. Download the archive: [https://go.dev/dl/go1.24.4.linux-amd64.tar.gz](https://go.dev/dl/go1.24.4.linux-amd64.tar.gz)
2. Run the following commands to install:
```bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.24.4.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
```
3. Type `go version` to verify the installation

## 2. Writing the Plugin

### 1. Initialize the Project

1. Create a new project directory, for example `wasm-demo-go`
2. In the created directory, run the following command to initialize a Go module:
```bash
go mod init wasm-demo-go
```
3. For users in China, you may need to set up a proxy for downloading dependencies:
```bash
go env -w GOPROXY=https://proxy.golang.com.cn,direct
```
4. Download the required dependencies for building the plugin:
```bash
go get github.com/higress-group/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
```

### 2. Writing main.go

Below is a simple example that implements the following functionality:
- When the plugin is configured with `mockEnable: true`, it directly returns a "hello world" response
- When no plugin configuration is provided or `mockEnable: false`, it adds a `hello: world` request header to the original request

> Note: The plugin configuration in the gateway console is in YAML format, but it will be automatically converted to JSON format when delivered to the plugin. Therefore, the example directly parses the configuration from JSON.

```go
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// Plugin name
		"my-plugin",
		// Custom function for parsing plugin configuration
		wrapper.ParseConfigBy(parseConfig),
		// Custom function for processing request headers
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// Custom plugin configuration
type MyConfig struct {
	mockEnable bool
}

// The YAML configuration from the console is automatically converted to JSON
// We can directly parse the configuration from the json parameter
func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	// Parse the configuration and update the config object
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

#### HTTP Processing Hooks

In the example above, we used `wrapper.ProcessRequestHeadersBy` to register our custom function `onHttpRequestHeaders` to handle requests during the "HTTP Request Headers" phase. You can also register handlers for other phases using the following methods:

| HTTP Processing Phase | Trigger | Hook Method |
|----------------------|---------|-------------|
| HTTP Request Headers | When the gateway receives request headers from the client | wrapper.ProcessRequestHeadersBy |
| HTTP Request Body | When the gateway receives request body from the client | wrapper.ProcessRequestBodyBy |
| HTTP Response Headers | When the gateway receives response headers from the backend | wrapper.ProcessResponseHeadersBy |
| HTTP Response Body | When the gateway receives response body from the backend | wrapper.ProcessResponseBodyBy |

#### Utility Methods

The example uses `proxywasm.AddHttpRequestHeader` and `proxywasm.SendHttpResponse`, which are utility methods provided by the SDK. Here are the main utility methods available:

| Category | Method | Description | Applicable HTTP Processing Phases |
|----------|--------|-------------|----------------------------------|
| Request Headers | GetHttpRequestHeaders | Get all request headers | HTTP Request Headers |
|  | ReplaceHttpRequestHeaders | Replace all request headers | HTTP Request Headers |
|  | GetHttpRequestHeader | Get a specific request header | HTTP Request Headers |
|  | RemoveHttpRequestHeader | Remove a specific request header | HTTP Request Headers |
|  | ReplaceHttpRequestHeader | Replace a specific request header | HTTP Request Headers |
|  | AddHttpRequestHeader | Add a new request header | HTTP Request Headers |
| Request Body | GetHttpRequestBody | Get the request body | HTTP Request Body |
|  | AppendHttpRequestBody | Append data to the end of the request body | HTTP Request Body |
|  | PrependHttpRequestBody | Add data to the beginning of the request body | HTTP Request Body |
|  | ReplaceHttpRequestBody | Replace the entire request body | HTTP Request Body |
| Response Headers | GetHttpResponseHeaders | Get all response headers | HTTP Response Headers |
|  | ReplaceHttpResponseHeaders | Replace all response headers | HTTP Response Headers |
|  | GetHttpResponseHeader | Get a specific response header | HTTP Response Headers |
|  | RemoveHttpResponseHeader | Remove a specific response header | HTTP Response Headers |
|  | ReplaceHttpResponseHeader | Replace a specific response header | HTTP Response Headers |
|  | AddHttpResponseHeader | Add a new response header | HTTP Response Headers |
| Response Body | GetHttpResponseBody | Get the response body | HTTP Response Body |
|  | AppendHttpResponseBody | Append data to the end of the response body | HTTP Response Body |
|  | PrependHttpResponseBody | Add data to the beginning of the response body | HTTP Response Body |
|  | ReplaceHttpResponseBody | Replace the entire response body | HTTP Response Body |
| HTTP Calls | DispatchHttpCall | Send an HTTP request | - |
|  | GetHttpCallResponseHeaders | Get response headers from DispatchHttpCall | - |
|  | GetHttpCallResponseBody | Get response body from DispatchHttpCall | - |
|  | GetHttpCallResponseTrailers | Get response trailers from DispatchHttpCall | - |
| Direct Response | SendHttpResponse | Return a specific HTTP response | - |
| Flow Control | ResumeHttpRequest | Resume a previously paused request | - |
|  | ResumeHttpResponse | Resume a previously paused response | - |

1. If `mockEnable` is set to `true`, send `hello world` directly as the response.
2. If `mockEnable` is not set or set to `false`, add an extra HTTP header `hello: world` to the original request.
More samples can be found in section 4 below.

> Note: Plugin configurations use YAML format in the gateway console. But plugins receive them in JSON format. So in the sample below, actual config data are extracted from JSON by the `parseConfig` function.

```
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

#### HTTP Processing Pointcuts

In the sample above, `wrapper.ProcessRequestHeadersBy` applies custom function `onHttpRequestHeaders` when processing requests in`HTTP request header processing stage`. Besides that, you can use following methods to set custom processing functions for various stages.

| HTTP Processing Stage | Trigger Time | Pointcut Mounting Method |
| --- | --- | --- |
| HTTP request header processing stage | When gateway receives request headers from client | wrapper.ProcessRequestHeadersBy |
| HTTP request body processing stage | When gateway receives request body from client | wrapper.ProcessRequestBodyBy |
| HTTP response header processing stage | When gateway receives response headers from upstream | wrapper.ProcessResponseHeadersBy |
| HTTP response body processing stage | When gateway receives response body from upstream | wrapper.ProcessResponseBodyBy |

#### Utility Functions

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
|  | AddHttpResponseHeader | Add a new header to the response | HTTP response headers processing stage |
| Response Body | GetHttpResponseBody | Get the response body received from the backend | HTTP response body processing stage |
|  | AppendHttpResponseBody | Append binary data to the end of the response body | HTTP response body processing stage |
|  | PrependHttpResponseBody | Add binary data to the beginning of the response body | HTTP response body processing stage |
|  | ReplaceHttpResponseBody | Replace the entire response body with new data | HTTP response body processing stage |
| HTTP Call | DispatchHttpCall | Send an HTTP request. | - |
|  | GetHttpCallResponseHeaders | Get the response headers associated with a DispatchHttpCall call. | - |
|  | GetHttpCallResponseBody | Get the response body associated with a DispatchHttpCall call. | - |
|  | GetHttpCallResponseTrailers | Get the response trailer associated with a DispatchHttpCall call. | - |
| Respond Directly | SendHttpResponse | Return a specific HTTP response immediately. | - |
| Process Resuming | ResumeHttpRequest | Resume the request processing workflow paused before. | - |
|  | ResumeHttpResponse | Resume the response processing workflow paused before. | - |

### 3. Compile and Generate WASM File

Using proxy-wasm community version 0.2.1 ABI, in the HTTP request/response processing phases, you can only use `types.ActionContinue` and `types.ActionPause` as return values to control the flow.

- If your project directory is in the [plugins/wasm-go](https://github.com/alibaba/higress/tree/main/plugins/wasm-go) directory, see 3.1.
- If you are using a self-initialized directory, see 3.2.

#### 3.1 Building wasm-go plugin image with scaffolding

The wasm-go plugin can be built quickly with the following command:

```bash
$ PLUGIN_NAME=wasm-demo-go make build
... ...
image:            wasm-demo-go:20230223-173305-3b1a471
output wasm file: extensions/wasm-demo-go/plugin.wasm
```

This command eventually builds a wasm file and a Docker image.
This local wasm file is exported to the specified plugin's directory and can be used directly for local debugging.
You can also use `make build-push` to build and push the image together.
See [plugins/wasm-go](https://github.com/alibaba/higress/tree/main/plugins/wasm-go) for more.

#### 3.2 Compile wasm files locally

Execute the following command:
```bash
go mod tidy
GOOS=wasip1 GOARCH=wasm go build -buildmode=c-shared -o main.wasm ./
```
A new file named main.wasm will be created after a successful compilation, which will be used in the local debugging sample below as well.<br />When using custom plugin function in the cloud native gateway market, you just need to upload this file.

## 3. Local Debugging 

TBD

## More Samples

### Plugin with No Configuration

If the plugin needs no configuration, just define an empty config struct.

```
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

### Send Requests to External Services in the Plugin

Only HTTP requests are supported for now. You can send requests to Nacos and K8s services with service sources configured in the gateway console, and services with a static IP or DNS source. Please be noted, HTTP client in the `net/http` package cannot be used here. You only use the wrapped HTTP client as shown in the sample below.<br />In the following sample works as below:

1. Parse service type in the config parsing stage, and generate the corresponding HTTP client.
2. In the HTTP request header processing stage, send a service request to the configured URL.
3. Parse response headers and get token value using the specified key.
4. Set the token value to the headers of the original request.

```
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
	// Get the service name with full FQDN, e.g., my-redis.dns, redis.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
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