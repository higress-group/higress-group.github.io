---
title: Developing WASM Plugins with Go
keywords: [wasm, go, golang, plugin, development]
description: A comprehensive guide to developing WASM plugins for Higress using the Go programming language
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/wasm-go.md
---

# Developing WASM Plugins with Go

> **Note**:
> Go 1.24 now natively supports compiling WASM files, and Higress has already migrated from TinyGo compilation to Go 1.24 native compilation.
> If you have been using TinyGo to compile plugins, and want to migrate to compiling with Go 1.24, apart from adjusting the go mod dependencies, you only need to move the original initialization logic from the main function to the init function. Please refer to the example below for details.
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
go get github.com/higress-group/proxy-wasm-go-sdk@go-1.24
go get github.com/higress-group/wasm-go@main
go get github.com/tidwall/gjson
```

### 2. Writing main.go

Below is a simple example that implements the following functionality:

- When the plugin is configured with `mockEnable: true`, it directly returns a "hello world" response
- When no plugin configuration is provided or `mockEnable: false`, it adds a `hello: world` request header to the original request

The more concise details and examples can be found in section 4 below.

> Note: The plugin configuration in the gateway console is in YAML format, but it will be automatically converted to JSON format when delivered to the plugin. Therefore, the example directly parses the configuration from JSON.

```go
package main

import (
	"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {}

func init() {
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
func parseConfig(json gjson.Result, config *MyConfig, log logs.Log) error {
	// Parse the configuration and update the config object
	config.mockEnable = json.Get("mockEnable").Bool()
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {
	proxywasm.AddHttpRequestHeader("hello", "world")
	if config.mockEnable {
		proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	}
	return types.HeaderContinue
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


### 3. Compile and Generate WASM File

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

#### Header Status Management Instructions

1.  **HeaderContinue**:

    Indicates that the current filter has finished processing and can be passed to the next filter for further processing. `types.ActionContinue` corresponds to this status.

2.  **HeaderStopIteration**:

    Indicates that the header cannot yet be passed to the next filter for processing. However, it does not stop reading data from the connection and continues to trigger the processing of body data. This allows for updating the HTTP request header content during the body data processing stage. If the body data is to be passed to the next filter, the header will also be passed along with it.

    Note that when returning this status, a body is required. If there is no body, the request/response will be blocked indefinitely.

    To determine if a request has a body, you can use [`HasRequestBody()`](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/request_wrapper.go#L86).

3.  **HeaderContinueAndEndStream**:

    Indicates that the header can be passed to the next filter, but the next filter will receive `end_stream = false`, meaning the request is not yet finished. This allows the current filter to add more body data.

4.  **HeaderStopAllIterationAndBuffer**:

    Stops all iterations, indicating that the header cannot be passed to the next filter, and the current filter will also not receive body data. It buffers headers, data, and trailers for the current and subsequent filters. If the buffer size exceeds the limit, a 413 will be returned directly during the request phase, and a 500 will be returned directly during the response phase.
    At the same time, `proxywasm.ResumeHttpRequest()`, `proxywasm.ResumeHttpResponse()`, or `proxywasm.SendHttpResponseWithDetail()` functions need to be called to resume subsequent processing.

5.  **HeaderStopAllIterationAndWatermark**:

    Same as above, the difference being that when the cache exceeds the buffer limit, flow control will be triggered, i.e., pausing data reading from the connection. `types.ActionPause` in the 0.2.1 ABI actually corresponds to this status.

> For usage scenarios of `types.HeaderStopIteration` and `HeaderStopAllIterationAndWatermark`, you can refer to the official Higress [ai-transformer plugin](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99) and [ai-quota plugin](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179).

To configure this plugin in Higress with Wasmplugin CRD or Console UI interaction, you need to package the Wasm file into an OCI or Docker image. You can refer to this document: [Custom Plugins](https://higress.cn/docs/latest/plugins/custom).

## 3. Local Debugging 

### Tools Preparation

Install [Docker](https://docs.docker.com/engine/install/?spm=a2c4g.426926.0.0.29071f47tjgquo)

### Use docker compose to start validate

1. Make sure that the `main.wasm` file, generated by the compilation process, exists in the plugin development directory(eg. `wasm-demo`).
2. Create the `docker-compose.yaml` file in the directory, file content is shown below:

```yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v2.0.7
    entrypoint: /usr/local/bin/envoy
    # 注意这里对wasm开启了debug级别日志，正式部署时则默认info级别
	# we use the debug level log here, the default level is info in production mod
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

4. Create the file envoy.yaml in the same directory, content is shown below：

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

4. Start the compose application by using the command below:

```bash
docker compose up
```

### Functionality Validation

1. WASM plugins functionality 

By using `curl` to access httpbin directly, we can see the request headers without gateway processing.
```bash
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

Use the `curl` access the gateway, and we wil see the request headers after being processed by the gateway.

```bash
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

As we can see, the gateway has added the extra `hello:world` header to the request indicating that the `hello-world` plugin is working as expected. 

2. Plugin Configuration Modification Confirm 

Change the `mockEnable` value from `false` to `true` in the `envoy.yaml`.

```yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |
      {
        "mockEnable": true
      }
```

Use `curl` to access the httpbin through the gateway, we can see the response as follows: 

```bash
curl http://127.0.0.1:10000/get

hello world
```

When `mockEnable` is set to `true`, the gateway return the `hello world` directly, which also means the plugins configuration has taken effect.

## More Samples

### Plugin with No Configuration

If the plugin needs no configuration, just define an empty config struct.

```go
package main

import (
		"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
)

func main() {}

func init() {
	wrapper.SetCtx(
		"hello-world",
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

type MyConfig struct {}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {
	proxywasm.SendHttpResponse(200, nil, []byte("hello world"), -1)
	return types.HeaderContinue
}
```

### Send Requests to External Services in the Plugin

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
	"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {}

func init() {
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

func parseConfig(json gjson.Result, config *MyConfig, log logs.Log) error {
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

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log logs.Log) types.Action {
	// Use the Get function of the client to initiate an HTTP Get request.
	// The timeout parameter is omitted here, whose default value is 500ms.
	err :=  config.client.Get(config.requestPath, nil,
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
	if err != nil {
		// failed to get the external service, then let the request continue and record the log
		log.Errorf("Error occured while calling http, it seems cannot find the service cluster.")
		return types.ActionContinue

	}
	// We need to wait for the callback to finish its process.
	// Return Pause action here to pause the request processing workflow, which can be resumed by a ResumeHttpRequest call.
	return types.HeaderStopIteration
}
```
### Use Redis in the plugin
Use the following sample code to implement the Redis current limiting plugin

```go
package main

import (
	"strconv"
	"time"

	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
	"github.com/tidwall/resp"

	"github.com/higress-group/wasm-go/pkg/wrapper"
	logs "github.com/higress-group/wasm-go/pkg/log"
)

func main() {}

func init() {
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

func parseConfig(json gjson.Result, config *RedisCallConfig, log logs.Log) error {
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

func onHttpRequestHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log logs.Log) types.Action {
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
		return types.HeaderContinue
	} else {
		// 请求hold住，等待redis调用完成
		return types.HeaderStopIteration
	}
}

func onHttpResponseHeaders(ctx wrapper.HttpContext, config RedisCallConfig, log logs.Log) types.Action {
	if ctx.GetContext("timeStamp") != nil {
		proxywasm.AddHttpResponseHeader("timeStamp", ctx.GetContext("timeStamp").(string))
	}
	if ctx.GetContext("callTimeLeft") != nil {
		proxywasm.AddHttpResponseHeader("callTimeLeft", ctx.GetContext("callTimeLeft").(string))
	}
	return types.HeaderContinue
}
```
