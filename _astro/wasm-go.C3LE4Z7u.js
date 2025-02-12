const e="latest/zh-cn/user/wasm-go.md",t="docs",o="latest/zh-cn/user/wasm-go",s=`
# \u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6

## \u4E00\u3001\u5DE5\u5177\u51C6\u5907
\u9700\u8981\u5148\u5B89\u88C5 Golang \u548C TinyGo \u4E24\u4E2A\u7A0B\u5E8F

### 1. Golang
\uFF08\u8981\u6C42 1.18 \u7248\u672C\u4EE5\u4E0A\uFF09<br />\u5B98\u65B9\u6307\u5F15\u94FE\u63A5\uFF1A[https://go.dev/doc/install](https://go.dev/doc/install)

#### Windows

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://go.dev/dl/go1.19.windows-amd64.msi](https://go.dev/dl/go1.19.windows-amd64.msi)
2. \u6253\u5F00\u4E0B\u8F7D\u597D\u7684\u5B89\u88C5\u6587\u4EF6\u76F4\u63A5\u5B89\u88C5\uFF0C\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230 \`Program Files\` \u6216 \`Program Files (x86)\` \u76EE\u5F55
3. \u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u4F7F\u7528\u952E\u76D8\u4E0A\u7684\u5FEB\u6377\u952E\u201CWin+R\u201D\u6253\u5F00\u8FD0\u884C\u7A97\u53E3\uFF0C\u5728\u8FD0\u884C\u7A97\u53E3\u4E2D\u8F93\u5165\u201Ccmd\u201D\u70B9\u51FB\u786E\u5B9A\u5373\u53EF\u6253\u5F00\u547D\u4EE4\u7A97\u53E3\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A\`go version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### MacOS

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://go.dev/dl/go1.19.darwin-amd64.pkg](https://go.dev/dl/go1.19.darwin-amd64.pkg)
2. \u6253\u5F00\u4E0B\u8F7D\u597D\u7684\u5B89\u88C5\u6587\u4EF6\u76F4\u63A5\u5B89\u88C5\uFF0C\u9ED8\u8BA4\u4F1A\u5B89\u88C5\u5230\`/usr/local/go\`\u76EE\u5F55
3. \u6253\u5F00\u7EC8\u7AEF\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u8F93\u5165\u547D\u4EE4\uFF1A\`go version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### Linux

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://go.dev/dl/go1.19.linux-amd64.tar.gz](https://go.dev/dl/go1.19.linux-amd64.tar.gz)
2. \u6267\u884C\u4E0B\u5217\u547D\u4EE4\u8FDB\u884C\u5B89\u88C5\uFF1A
\`\`\`bash
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin
\`\`\`

3. \u6267\u884C \`go version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

### 2. TinyGo

\uFF08\u8981\u6C42 0.28.1 \u7248\u672C\u4EE5\u4E0A\uFF09<br />\u5B98\u65B9\u6307\u5F15\u94FE\u63A5\uFF1A[https://tinygo.org/getting-started/install/](https://tinygo.org/getting-started/install/)

#### Windows

1. \u4E0B\u8F7D\u5B89\u88C5\u6587\u4EF6\uFF1A[https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip](https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.windows-amd64.zip)
2. \u89E3\u538B\u5B89\u88C5\u6587\u4EF6\u5230\u6307\u5B9A\u76EE\u5F55
3. \u5982\u679C\u5B89\u88C5\u89E3\u538B\u540E\u7684\u76EE\u5F55\u4E3A\`C:\\tinygo\`\uFF0C\u5219\u9700\u8981\u5C06\`C:\\tinygo\\bin\`\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\`PATH\`\u4E2D\uFF0C\u4F8B\u5982\u901A\u8FC7\u5728\u547D\u4EE4\u7A97\u53E3\u4E2D\u8F93\u5165 set \u547D\u4EE4\u8BBE\u7F6E
\`\`\`bash
set PATH=%PATH%;"C:\\tinygo\\bin";
\`\`\`

4. \u5728\u547D\u4EE4\u7A97\u53E3\u6267\u884C\u547D\u4EE4 \`tinygo version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### MacOS

1. \u4E0B\u8F7D\u538B\u7F29\u5305\u5E76\u89E3\u538B
\`\`\`bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo0.28.1.darwin-amd64.tar.gz
tar -zxf tinygo0.28.1.darwin-amd64.tar.gz
\`\`\`

2. \u5982\u679C\u5B89\u88C5\u89E3\u538B\u540E\u7684\u76EE\u5F55\u4E3A\`/tmp\`\uFF0C\u5219\u9700\u8981\u5C06\`/tmp/tinygo/bin\`\u6DFB\u52A0\u5230\u73AF\u5883\u53D8\u91CF\`PATH\`\u4E2D\uFF1A
\`\`\`bash
export PATH=/tmp/tinygo/bin:$PATH
\`\`\`

3. \u5728\u7EC8\u7AEF\u6267\u884C \`tinygo version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F

#### Linux
\u4EE5 Ubuntu \u4E0B amd64 \u67B6\u6784\u4E3A\u4F8B\uFF0C\u5176\u4ED6\u7CFB\u7EDF\u8BF7\u53C2\u8003\u5B98\u65B9\u6307\u5F15\u94FE\u63A5

1. \u4E0B\u8F7D DEB \u6587\u4EF6\uFF0C\u5E76\u5B89\u88C5
\`\`\`bash
wget https://github.com/tinygo-org/tinygo/releases/download/v0.28.1/tinygo_0.28.1_amd64.deb
sudo dpkg -i tinygo_0.28.1_amd64.deb
export PATH=$PATH:/usr/local/bin
\`\`\`

2. \u5728\u7EC8\u7AEF\u6267\u884C \`tinygo version\`\uFF0C\u8F93\u51FA\u5F53\u524D\u5B89\u88C5\u7684\u7248\u672C\uFF0C\u8868\u660E\u5B89\u88C5\u6210\u529F


## \u4E8C\u3001\u7F16\u5199\u63D2\u4EF6

### 1. \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55

1. \u65B0\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u76EE\u5F55\u6587\u4EF6\uFF0C\u4F8B\u5982\`wasm-demo-go\`
2. \u5728\u6240\u5EFA\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u8FDB\u884C Go \u5DE5\u7A0B\u521D\u59CB\u5316
\`\`\`bash
go mod init wasm-demo-go
\`\`\`

3. \u56FD\u5185\u73AF\u5883\u53EF\u80FD\u9700\u8981\u8BBE\u7F6E\u4E0B\u8F7D\u4F9D\u8D56\u5305\u7684\u4EE3\u7406
\`\`\`bash
go env -w GOPROXY=https://proxy.golang.com.cn,direct
\`\`\`

4. \u4E0B\u8F7D\u6784\u5EFA\u63D2\u4EF6\u7684\u4F9D\u8D56
\`\`\`bash
go get github.com/higress-group/proxy-wasm-go-sdk
go get github.com/alibaba/higress/plugins/wasm-go@main
go get github.com/tidwall/gjson
\`\`\`
### 2. \u7F16\u5199 main.go \u6587\u4EF6
\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF0C\u5B9E\u73B0\u4E86\u5728\u63D2\u4EF6\u914D\u7F6E\`mockEnable: true\`\u65F6\u76F4\u63A5\u8FD4\u56DE\`hello world\`\u5E94\u7B54\uFF1B\u672A\u505A\u63D2\u4EF6\u914D\u7F6E\uFF0C\u6216\u8005\u8BBE\u7F6E\`mockEnable: false\`\u65F6\u7ED9\u539F\u59CB\u8BF7\u6C42\u6DFB\u52A0 \`hello: world\`\u8BF7\u6C42\u5934\u3002\u66F4\u591A\u4F8B\u5B50\u8BF7\u53C2\u8003\u672C\u6587\u7B2C\u56DB\u8282\u3002
> \u6CE8\u610F\uFF1A\u5728\u7F51\u5173\u63A7\u5236\u53F0\u4E2D\u7684\u63D2\u4EF6\u914D\u7F6E\u4E3A yaml \u683C\u5F0F\uFF0C\u4E0B\u53D1\u7ED9\u63D2\u4EF6\u65F6\u5C06\u81EA\u52A8\u8F6C\u6362\u4E3A json \u683C\u5F0F\uFF0C\u6240\u4EE5\u4F8B\u5B50\u4E2D\u7684 parseConfig \u53EF\u4EE5\u76F4\u63A5\u4ECE json \u4E2D\u89E3\u6790\u914D\u7F6E

\`\`\`
package main

import (
	"github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm"
	"github.com/higress-group/proxy-wasm-go-sdk/proxywasm/types"
	"github.com/tidwall/gjson"
)

func main() {
	wrapper.SetCtx(
		// \u63D2\u4EF6\u540D\u79F0
		"my-plugin",
		// \u4E3A\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570
		 wrapper.ParseConfigBy(parseConfig),
		// \u4E3A\u5904\u7406\u8BF7\u6C42\u5934\uFF0C\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E
type MyConfig struct {
	mockEnable bool
}

// \u5728\u63A7\u5236\u53F0\u63D2\u4EF6\u914D\u7F6E\u4E2D\u586B\u5199\u7684yaml\u914D\u7F6E\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3Ajson\uFF0C\u6B64\u5904\u76F4\u63A5\u4ECEjson\u8FD9\u4E2A\u53C2\u6570\u91CC\u89E3\u6790\u914D\u7F6E\u5373\u53EF
func parseConfig(json gjson.Result, config *MyConfig, log wrapper.Log) error {
	// \u89E3\u6790\u51FA\u914D\u7F6E\uFF0C\u66F4\u65B0\u5230config\u4E2D
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
\`\`\`

#### HTTP \u5904\u7406\u6302\u8F7D\u70B9
\u4E0A\u9762\u793A\u4F8B\u4EE3\u7801\u4E2D\u901A\u8FC7 \`wrapper.ProcessRequestHeadersBy\`\u5C06\u81EA\u5B9A\u4E49\u51FD\u6570 \`onHttpRequestHeaders\`\u7528\u4E8E\`HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5\`\u5904\u7406\u8BF7\u6C42\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\uFF0C\u8BBE\u7F6E\u5176\u4ED6\u9636\u6BB5\u7684\u81EA\u5B9A\u4E49\u5904\u7406\u51FD\u6570

| HTTP \u5904\u7406\u9636\u6BB5 | \u89E6\u53D1\u65F6\u673A | \u6302\u8F7D\u65B9\u6CD5 |
| --- | --- | --- |
| HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42\u5934\u6570\u636E\u65F6 | wrapper.ProcessRequestHeadersBy |
| HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42 Body \u6570\u636E\u65F6 | wrapper.ProcessRequestBodyBy |
| HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54\u5934\u6570\u636E\u65F6 | wrapper.ProcessResponseHeadersBy |
| HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54 Body \u6570\u636E\u65F6 | wrapper.ProcessResponseBodyBy |

#### \u5DE5\u5177\u65B9\u6CD5
\u4E0A\u9762\u793A\u4F8B\u4EE3\u7801\u4E2D\u7684 \`proxywasm.AddHttpRequestHeader\` \u548C \`proxywasm.SendHttpResponse\`\u662F\u63D2\u4EF6 SDK \u63D0\u4F9B\u7684\u4E24\u4E2A\u5DE5\u5177\u65B9\u6CD5\uFF0C\u4E3B\u8981\u7684\u5DE5\u5177\u65B9\u6CD5\u89C1\u4E0B\u8868\uFF1A

| \u5206\u7C7B | \u65B9\u6CD5\u540D\u79F0 | \u7528\u9014 | \u53EF\u4EE5\u751F\u6548\u7684<br />HTTP \u5904\u7406\u9636\u6BB5 |
| --- | --- | --- | --- |
| \u8BF7\u6C42\u5934\u5904\u7406 | GetHttpRequestHeaders | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5<br /> |
|  | ReplaceHttpRequestHeaders | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | GetHttpRequestHeader | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | RemoveHttpRequestHeader | \u79FB\u9664\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpRequestHeader | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
|  | AddHttpRequestHeader | \u65B0\u589E\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| \u8BF7\u6C42 Body \u5904\u7406 | GetHttpRequestBody | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
|  | AppendHttpRequestBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u672B\u5C3E | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
|  | PrependHttpRequestBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u7684\u5F00\u5934 | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpRequestBody | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
| \u5E94\u7B54\u5934\u5904\u7406 | GetHttpResponseHeaders | \u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5<br /> |
|  | ReplaceHttpResponseHeaders | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | GetHttpResponseHeader | \u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | RemoveHttpResponseHeader | \u79FB\u9664\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpResponseHeader | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
|  | AddHttpResponseHeader | \u65B0\u589E\u4E00\u4E2A\u540E\u7AEF\u54CD\u5E94\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| \u5E94\u7B54 Body \u5904\u7406 | GetHttpResponseBody | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
|  | AppendHttpResponseBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u672B\u5C3E | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
|  | PrependHttpResponseBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u7684\u5F00\u5934 | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
|  | ReplaceHttpResponseBody | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94 Body | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
| HTTP \u8C03\u7528 | DispatchHttpCall | \u53D1\u9001\u4E00\u4E2A HTTP \u8BF7\u6C42 | - |
|  | GetHttpCallResponseHeaders | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54\u5934 | - |
|  | GetHttpCallResponseBody | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Body | - |
|  | GetHttpCallResponseTrailers | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Trailer | - |
| \u76F4\u63A5\u54CD\u5E94 | SendHttpResponse | \u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u7279\u5B9A\u7684 HTTP \u5E94\u7B54 | - |
| \u6D41\u7A0B\u6062\u590D | ResumeHttpRequest | \u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u8BF7\u6C42\u5904\u7406\u6D41\u7A0B | - |
|  | ResumeHttpResponse | \u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u5E94\u7B54\u5904\u7406\u6D41\u7A0B | - |

### 3. \u7F16\u8BD1\u751F\u6210 WASM \u6587\u4EF6


\u4F7F\u7528 proxy-wasm \u793E\u533A 0.2.1 \u7248\u672C\u7684 ABI\uFF0C\u5728 HTTP \u8BF7\u6C42/\u54CD\u5E94\u5904\u7406\u9636\u6BB5\u53EA\u80FD\u4F7F\u7528 \`types.ActionContinue\` \u548C \`types.ActionPause\` \u4E24\u79CD\u8FD4\u56DE\u503C\u6765\u63A7\u5236\u72B6\u6001\uFF1A

1. types.ActionContinue\uFF1A\u7EE7\u7EED\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u7EE7\u7EED\u8BFB\u53D6\u8BF7\u6C42 body\uFF0C\u6216\u8005\u7EE7\u7EED\u8BFB\u53D6\u54CD\u5E94 body\u3002

2. types.ActionPause\uFF1A \u6682\u505C\u540E\u7EED\u5904\u7406\uFF0C\u6BD4\u5982\u5728 onHttpRequestHeaders \u901A\u8FC7 Http \u6216\u8005 Redis \u8C03\u7528\u5916\u90E8\u670D\u52A1\u83B7\u53D6\u8BA4\u8BC1\u4FE1\u606F\uFF0C\u5728\u8C03\u7528\u5916\u90E8\u670D\u52A1\u56DE\u8C03\u94A9\u5B50\u51FD\u6570\u4E2D\u8C03\u7528 proxywasm.ResumeHttpRequest() \u6765\u6062\u590D\u8BF7\u6C42\u5904\u7406 \u6216\u8005\u8C03\u7528 proxywasm.SendHttpResponseWithDetail() \u6765\u8FD4\u56DE\u54CD\u5E94\u3002

\u53EA\u9700\u8FD9\u6837\u7B80\u5355\u7684\u72B6\u6001\u7BA1\u7406\uFF0C\u4F7F\u7528\u4E0B\u9762\u7684\u7F16\u8BD1\u65B9\u5F0F\u5373\u53EF\uFF1A

\`\`\`bash
go mod tidy
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer" ./
\`\`\`

Higress \u6269\u5C55\u4E86 0.2.100 \u7248\u672C\u7684 ABI \u6765\u5B9E\u73B0\u66F4\u4E30\u5BCC\u7684 Header \u72B6\u6001\u7BA1\u7406\uFF0C\u5982\u679C\u8981\u4F7F\u7528\uFF0C\u8BF7\u7528\u4E0B\u9762\u7684\u7F16\u8BD1\u65B9\u5F0F\uFF1A

\`\`\`bash
go mod tidy
tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags="custommalloc nottinygc_finalizer proxy_wasm_version_0_2_100" ./
\`\`\`

Header \u7684\u72B6\u6001\u7BA1\u7406\u8BF4\u660E\u5982\u4E0B\uFF1A

1. HeaderContinue:

\u8868\u793A\u5F53\u524D filter \u5DF2\u7ECF\u5904\u7406\u5B8C\u6BD5\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002 types.ActionContinue \u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

2. HeaderStopIteration:

\u8868\u793A header \u8FD8\u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u6765\u5904\u7406\u3002 \u4F46\u662F\u5E76\u4E0D\u505C\u6B62\u4ECE\u8FDE\u63A5\u8BFB\u6570\u636E\uFF0C\u7EE7\u7EED\u89E6\u53D1 body data \u7684\u5904\u7406\u3002 \u8FD9\u6837\u53EF\u4EE5\u5728 body data \u5904\u7406\u9636\u6BB5\u53EF\u4EE5\u66F4\u65B0 Http \u8BF7\u6C42\u5934\u5185\u5BB9\u3002 \u5982\u679C body data \u8981\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C \u8FD9\u65F6 header \u662F\u4E5F\u4F1A\u88AB\u4E00\u8D77\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\u3002

\u4F46\u6CE8\u610F\u8FD4\u56DE\u8FD9\u4E2A\u72B6\u6001\u65F6\uFF0C\u8981\u6C42\u5FC5\u987B\u6709 body\uFF0C\u5982\u679C\u6CA1\u6709 body\uFF0C\u8BF7\u6C42/\u54CD\u5E94\u5C06\u88AB\u4E00\u76F4\u963B\u585E\u3002

\u5224\u65AD\u662F\u5426\u5B58\u5728\u8BF7\u6C42 body \u53EF\u4EE5\u4F7F\u7528 [HasRequestBody()](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/pkg/wrapper/request_wrapper.go#L86) 

3. HeaderContinueAndEndStream:

\u8868\u793A header \u53EF\u4EE5\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter \u5904\u7406\uFF0C\u4F46\u662F\u4E0B\u4E00\u4E2A filter \u6536\u5230\u7684 end_stream = false\uFF0C\u4E5F\u5C31\u662F\u6807\u8BB0\u8BF7\u6C42\u8FD8\u672A\u7ED3\u675F\u3002\u4EE5\u4FBF\u5F53\u524D filter \u518D\u589E\u52A0 body\u3002

4. HeaderStopAllIterationAndBuffer:

\u505C\u6B62\u6240\u6709\u8FED\u4EE3\uFF0C\u8868\u793A header \u4E0D\u80FD\u7EE7\u7EED\u4EA4\u7ED9\u4E0B\u4E00\u4E2A filter\uFF0C\u5E76\u4E14\u5F53\u524D filter \u4E5F\u4E0D\u80FD\u6536\u5230 body data\u3002 \u5E76\u5BF9\u5F53\u524D\u8FC7\u6EE4\u5668\u53CA\u540E\u7EED\u8FC7\u6EE4\u5668\u7684\u5934\u90E8\u3001\u6570\u636E\u548C\u5C3E\u90E8\u8FDB\u884C\u7F13\u51B2\u3002\u5982\u679C\u7F13\u5B58\u5927\u5C0F\u8D85\u8FC7\u4E86 buffer limit\uFF0C\u5728\u8BF7\u6C42\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 413\uFF0C\u54CD\u5E94\u9636\u6BB5\u5C31\u76F4\u63A5\u8FD4\u56DE 500\u3002
\u540C\u65F6\u9700\u8981\u8C03\u7528 proxywasm.ResumeHttpRequest()\u3001 proxywasm.ResumeHttpResponse() \u6216\u8005 proxywasm.SendHttpResponseWithDetail()  \u51FD\u6570\u6765\u6062\u590D\u540E\u7EED\u5904\u7406\u3002

5. HeaderStopAllIterationAndWatermark:

\u540C\u4E0A\uFF0C\u533A\u522B\u662F\uFF0C\u5F53\u7F13\u5B58\u8D85\u8FC7\u4E86 buffer limit \u4F1A\u89E6\u53D1\u6D41\u63A7\uFF0C\u4E5F\u5C31\u662F\u6682\u505C\u4ECE\u8FDE\u63A5\u4E0A\u8BFB\u6570\u636E\u3002 0.2.1 ABI \u4E2D\u7684 types.ActionPause \u5B9E\u9645\u4E0A\u5BF9\u5E94\u5C31\u662F\u8FD9\u4E2A\u72B6\u6001\u3002

> \u5173\u4E8E types.HeaderStopIteration \u548C HeaderStopAllIterationAndWatermark \u7684\u4F7F\u7528\u573A\u666F\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B [ai-transformer \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-transformer/main.go#L93-L99) \u548C  [ai-quota \u63D2\u4EF6](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-quota/main.go#L179) \u3002



\u5982\u679Cwindows\u4E0B\u7F16\u8BD1\u51FA\u73B0error: could not find wasm-opt, set the WASMOPT environment variable to override \u5219\u9700\u8981\u4E0B\u8F7Dhttps://github.com/WebAssembly/binaryen/ \u91CC\u9762\u5305\u542B\u4E86bin\\wasm-opt.exe\u5C06\u8FD9\u4E2A\u6587\u4EF6\u62F7\u8D1D\u5230tinygo\u7684bin\u76EE\u5F55\u4E0B\u91CD\u65B0\u7F16\u8BD1\u5373\u53EF\u3002 <br />
\u7F16\u8BD1\u6210\u529F\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6 main.wasm\u3002\u8FD9\u4E2A\u6587\u4EF6\u5728\u4E0B\u9762\u672C\u5730\u8C03\u8BD5\u7684\u4F8B\u5B50\u4E2D\u4E5F\u4F1A\u88AB\u7528\u5230\u3002<br />

\u5982\u679Clinux/mac\u4E0B\u7F16\u8BD1\u51FA\u73B0\u8BE5\u9519\u8BEF\uFF0C\u4F7F\u7528apt/brew\u7B49\u7CFB\u7EDF\u81EA\u5E26\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5\u4E0Bbinaryen\u5373\u53EF\uFF0C\u4F8B\u5982\`brew install binaryen\`

\u8981\u5728Higress\u4E2D\u914D\u5408Wasmplugin CRD\u6216\u8005Console\u7684UI\u4EA4\u4E92\u914D\u7F6E\u8BE5\u63D2\u4EF6\uFF0C\u9700\u8981\u5C06\u8BE5wasm\u6587\u4EF6\u6253\u5305\u6210oci\u6216\u8005docker\u955C\u50CF\uFF0C\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7\u6587\u6863\uFF1A[\u300A\u81EA\u5B9A\u4E49\u63D2\u4EF6\u300B](https://higress.cn/docs/latest/plugins/custom)

## \u4E09\u3001\u672C\u5730\u8C03\u8BD5

### \u5DE5\u5177\u51C6\u5907
\u5B89\u88C5[Docker](https://docs.docker.com/engine/install/?spm=a2c4g.426926.0.0.29071f47tjgquo)

### \u4F7F\u7528 docker compose \u542F\u52A8\u9A8C\u8BC1
1. \u8FDB\u5165\u5728\u7F16\u5199\u63D2\u4EF6\u65F6\u521B\u5EFA\u7684\u76EE\u5F55\uFF0C\u4F8B\u5982wasm-demo\u76EE\u5F55\uFF0C\u786E\u8BA4\u8BE5\u76EE\u5F55\u4E0B\u5DF2\u7ECF\u7F16\u8BD1\u751F\u6210\u4E86main.wasm\u6587\u4EF6\u3002
2. \u5728\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6docker-compose.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A
\`\`\`yaml
version: '3.7'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v1.4.0-rc.1
    entrypoint: /usr/local/bin/envoy
    # \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B
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
\`\`\`
3. \u7EE7\u7EED\u5728\u8BE5\u76EE\u5F55\u4E0B\u521B\u5EFA\u6587\u4EF6envoy.yaml\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A
\`\`\`yaml
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
\`\`\`
4. \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8docker compose\u3002
\`\`\`bash
docker compose up
\`\`\`

### \u529F\u80FD\u9A8C\u8BC1
1. WASM\u529F\u80FD\u9A8C\u8BC1

\u4F7F\u7528curl\u76F4\u63A5\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u4E0D\u7ECF\u8FC7\u7F51\u5173\u65F6\u7684\u8BF7\u6C42\u5934\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A
\`\`\`
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
\`\`\`

\u4F7F\u7528curl\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u7ECF\u8FC7\u7F51\u5173\u5904\u7406\u540E\u7684\u8BF7\u6C42\u5934\u7684\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A
\`\`\`
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
\`\`\`

\u6B64\u65F6\u4E0A\u6587\u7F16\u5199\u63D2\u4EF6\u7684\u529F\u80FD\u5DF2\u7ECF\u751F\u6548\u4E86\uFF0C\u52A0\u5165\u4E86\`hello: world\`\u8BF7\u6C42\u5934\u3002

2. \u63D2\u4EF6\u914D\u7F6E\u4FEE\u6539\u9A8C\u8BC1

\u4FEE\u6539envoy.yaml\uFF0C\u5C06\`mockEnable\`\u914D\u7F6E\u4FEE\u6539\u4E3Atrue\u3002
\`\`\`yaml
  configuration:
    "@type": "type.googleapis.com/google.protobuf.StringValue"
    value: |
      {
        "mockEnable": true
      }
\`\`\`

\u4F7F\u7528curl\u901A\u8FC7\u7F51\u5173\u8BBF\u95EEhttpbin\uFF0C\u53EF\u4EE5\u770B\u5230\u7ECF\u8FC7\u7F51\u5173\u5904\u7406\u540E\u7684\u8BF7\u6C42\u5934\u7684\u5185\u5BB9\uFF0C\u5982\u4E0B\uFF1A

\`\`\`
curl http://127.0.0.1:10000/get

hello world
\`\`\`
\u8BF4\u660E\u63D2\u4EF6\u914D\u7F6E\u4FEE\u6539\u751F\u6548\uFF0C\u5F00\u542F\u4E86mock\u5E94\u7B54\u76F4\u63A5\u8FD4\u56DE\u4E86hello world\u3002


## \u66F4\u591A\u793A\u4F8B

### \u65E0\u914D\u7F6E\u63D2\u4EF6
\u63D2\u4EF6\u65E0\u9700\u914D\u7F6E\u65F6\uFF0C\u76F4\u63A5\u5B9A\u4E49\u7A7A\u7ED3\u6784\u4F53\u5373\u53EF

\`\`\`
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
\`\`\`

### \u5728\u63D2\u4EF6\u4E2D\u8BF7\u6C42\u5916\u90E8\u670D\u52A1
\u76EE\u524D\u4EC5\u652F\u6301 http \u8C03\u7528\uFF0C\u652F\u6301\u8BBF\u95EE\u5728\u7F51\u5173\u63A7\u5236\u53F0\u4E2D\u8BBE\u7F6E\u4E86\u670D\u52A1\u6765\u6E90\u7684 Nacos\u3001K8s \u670D\u52A1\uFF0C\u4EE5\u53CA\u56FA\u5B9A\u5730\u5740\u6216 DNS \u6765\u6E90\u7684\u670D\u52A1\u3002\u8BF7\u6CE8\u610F\uFF0C\u65E0\u6CD5\u76F4\u63A5\u4F7F\u7528\`net/http\`\u5E93\u4E2D\u7684 HTTP client\uFF0C\u5FC5\u987B\u4F7F\u7528\u5982\u4E0B\u4F8B\u4E2D\u5C01\u88C5\u7684 HTTP client\u3002<br />\u4E0B\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5728\u914D\u7F6E\u89E3\u6790\u9636\u6BB5\u89E3\u6790\u670D\u52A1\u7C7B\u578B\uFF0C\u751F\u6210\u5BF9\u5E94\u7684 HTTP client \uFF1B\u5728\u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5\u6839\u636E\u914D\u7F6E\u7684\u8BF7\u6C42\u8DEF\u5F84\u8BBF\u95EE\u5BF9\u5E94\u670D\u52A1\uFF0C\u89E3\u6790\u5E94\u7B54\u5934\uFF0C\u7136\u540E\u518D\u8BBE\u7F6E\u5728\u539F\u59CB\u7684\u8BF7\u6C42\u5934\u4E2D\u3002

\`\`\`
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
	// \u7528\u4E8E\u53D1\u8D77HTTP\u8C03\u7528client
	client      wrapper.HttpClient
	// \u8BF7\u6C42url
	requestPath string
	// \u6839\u636E\u8FD9\u4E2Akey\u53D6\u51FA\u8C03\u7528\u670D\u52A1\u7684\u5E94\u7B54\u5934\u5BF9\u5E94\u5B57\u6BB5\uFF0C\u518D\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u7684\u8BF7\u6C42\u5934\uFF0Ckey\u4E3A\u6B64\u914D\u7F6E\u9879
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
	// \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-svc.dns, my-svc.static, service-provider.DEFAULT-GROUP.public.nacos, httpbin.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
		if strings.HasSuffix(serviceName, ".static") {
			// \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80
			servicePort = 80
		}
	}
	config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{
		FQDN: serviceName,
		Port: servicePort,
        })
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config MyConfig, log wrapper.Log) types.Action {
	// \u4F7F\u7528client\u7684Get\u65B9\u6CD5\u53D1\u8D77HTTP Get\u8C03\u7528\uFF0C\u6B64\u5904\u7701\u7565\u4E86timeout\u53C2\u6570\uFF0C\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4500\u6BEB\u79D2
	err = config.client.Get(config.requestPath, nil,
		// \u56DE\u8C03\u51FD\u6570\uFF0C\u5C06\u5728\u54CD\u5E94\u5F02\u6B65\u8FD4\u56DE\u65F6\u88AB\u6267\u884C
		func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			// \u8BF7\u6C42\u6CA1\u6709\u8FD4\u56DE200\u72B6\u6001\u7801\uFF0C\u8FDB\u884C\u5904\u7406
			if statusCode != http.StatusOK {
				log.Errorf("http call failed, status: %d", statusCode)
				proxywasm.SendHttpResponse(http.StatusInternalServerError, nil,
					[]byte("http call failed"), -1)
				return
			}
			// \u6253\u5370\u54CD\u5E94\u7684HTTP\u72B6\u6001\u7801\u548C\u5E94\u7B54body
			log.Infof("get status: %d, response body: %s", statusCode, responseBody)
			// \u4ECE\u5E94\u7B54\u5934\u4E2D\u89E3\u6790token\u5B57\u6BB5\u8BBE\u7F6E\u5230\u539F\u59CB\u8BF7\u6C42\u5934\u4E2D
			token := responseHeaders.Get(config.tokenHeader)
			if token != "" {
				proxywasm.AddHttpRequestHeader(config.tokenHeader, token)
			}
			// \u6062\u590D\u539F\u59CB\u8BF7\u6C42\u6D41\u7A0B\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u5904\u7406\uFF0C\u624D\u80FD\u6B63\u5E38\u8F6C\u53D1\u7ED9\u540E\u7AEF\u670D\u52A1
			proxywasm.ResumeHttpRequest()
		})
 	
	if err != nil {
		// \u7531\u4E8E\u8C03\u7528\u5916\u90E8\u670D\u52A1\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7
		log.Errorf("Error occured while calling http, it seems cannot find the service cluster.")
		return types.ActionContinue
	} else {
		// \u9700\u8981\u7B49\u5F85\u5F02\u6B65\u56DE\u8C03\u5B8C\u6210\uFF0C\u8FD4\u56DEPause\u72B6\u6001\uFF0C\u53EF\u4EE5\u88ABResumeHttpRequest\u6062\u590D
		return types.ActionPause
	}
}
\`\`\`

### \u5728\u63D2\u4EF6\u4E2D\u8C03\u7528Redis

\u4F7F\u7528\u5982\u4E0B\u793A\u4F8B\u4EE3\u7801\u5B9E\u73B0Redis\u9650\u6D41\u63D2\u4EF6

\`\`\`go
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
	// \u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local
	serviceName := json.Get("serviceName").String()
	servicePort := json.Get("servicePort").Int()
	if servicePort == 0 {
		if strings.HasSuffix(serviceName, ".static") {
			// \u9759\u6001IP\u7C7B\u578B\u670D\u52A1\u7684\u903B\u8F91\u7AEF\u53E3\u662F80
			servicePort = 80
		} else {
			servicePort = 6379
		}
	}
	username := json.Get("username").String()
	password := json.Get("password").String()
	// \u5355\u4F4D\u662F\u6BEB\u79D2
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
	// \u5982\u679C redis api \u8FD4\u56DE\u7684 err != nil\uFF0C\u4E00\u822C\u662F\u7531\u4E8E\u7F51\u5173\u627E\u4E0D\u5230 redis \u540E\u7AEF\u670D\u52A1\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u8BEF\u5220\u9664\u4E86 redis \u540E\u7AEF\u670D\u52A1
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
					proxywasm.SendHttpResponse(429, [][2]string{{"timeStamp", timeStamp}, {"callTimeLeft", "0"}}, []byte("Too many requests\\n"), -1)
				} else {
					proxywasm.ResumeHttpRequest()
				}
			}
		}
	})
	if err != nil {
		// \u7531\u4E8E\u8C03\u7528redis\u5931\u8D25\uFF0C\u653E\u884C\u8BF7\u6C42\uFF0C\u8BB0\u5F55\u65E5\u5FD7
		log.Errorf("Error occured while calling redis, it seems cannot find the redis cluster.")
		return types.ActionContinue
	} else {
		// \u8BF7\u6C42hold\u4F4F\uFF0C\u7B49\u5F85redis\u8C03\u7528\u5B8C\u6210
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
\`\`\`
`,r={title:"\u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6",description:"\u4F7F\u7528 GO \u8BED\u8A00\u5F00\u53D1 WASM \u63D2\u4EF6",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["wasm"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/wasm-go.md",rawData:void 0};export{n as _internal,s as body,t as collection,r as data,e as id,o as slug};
