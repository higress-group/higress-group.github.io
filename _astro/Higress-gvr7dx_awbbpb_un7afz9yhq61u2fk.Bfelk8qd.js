const e="Higress-gvr7dx_awbbpb_un7afz9yhq61u2fk.mdx",s="blog",t="higress-gvr7dx_awbbpb_un7afz9yhq61u2fk",a=`
**\u7F16\u8005\u8350\u8BED\uFF1A**<br />Higress \u539F\u751F\u63D0\u4F9B\u4E86 C++ \u7248\u672C\u7684 JWT \u63D2\u4EF6\uFF0C\u4E8C\u6B21\u5F00\u53D1\u9002\u914D\u81EA\u5DF1\u4E1A\u52A1\u9700\u6C42\u6210\u672C\u6BD4\u8F83\u9AD8\uFF0C\u57FA\u4E8E\u8BE5\u535A\u4E3B\u7684 Go \u7248\u672C\u63D2\u4EF6\u4E8C\u6B21\u5F00\u53D1\u4F1A\u5BB9\u6613\u5F88\u591A\u3002
<a name="70a3a26b"></a>
## \u4E00\u3001\u4EC0\u4E48\u662FHigress
Higress\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684Envoy Gateway\u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90Istio + Envoy\u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210Dubbo\u3001Nacos\u3001Sentinel\u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u7684\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301Ingress\u4E0EGateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6API\u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller\u4E5F\u652F\u6301Nginx Ingress\u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230Higress\u3002![](/img/1728551156037.png)
<a name="6b1ce141"></a>
## \u4E8C\u3001\u4EC0\u4E48\u662FWASM
WASM\u4EE3\u8868"WebAssembly"\uFF0C\u5B83\u662F\u4E00\u79CD\u53EF\u79FB\u690D\u3001\u4F4E\u7EA7\u522B\u7684\u4E8C\u8FDB\u5236\u6307\u4EE4\u683C\u5F0F\uFF0C\u65E8\u5728\u4F5C\u4E3AWeb\u6D4F\u89C8\u5668\u4E2D\u7684\u4E00\u79CD\u65B0\u578B\u6267\u884C\u73AF\u5883\u800C\u63A8\u51FA\u3002\u5B83\u7684\u8BBE\u8BA1\u76EE\u6807\u662F\u4E3AWeb\u4E0A\u7684\u9AD8\u6027\u80FD\u5E94\u7528\u63D0\u4F9B\u4E00\u79CD\u901A\u7528\u7684\u7F16\u8BD1\u76EE\u6807\uFF0C\u4F7F\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u5728\u4E0D\u540C\u5E73\u53F0\u548C\u67B6\u6784\u4E0A\u8FD0\u884C\u9AD8\u6548\u7684\u4EE3\u7801\u3002 WASM\u7684\u4E3B\u8981\u7279\u70B9\u5305\u62EC\uFF1A

1. \u6027\u80FD\uFF1A WASM\u662F\u4E00\u79CD\u4E8C\u8FDB\u5236\u683C\u5F0F\uFF0C\u53EF\u4EE5\u9AD8\u6548\u5730\u7F16\u7801\u548C\u89E3\u7801\uFF0C\u4ECE\u800C\u5728\u6D4F\u89C8\u5668\u4E2D\u5B9E\u73B0\u6BD4\u4F20\u7EDFJavaScript\u66F4\u5FEB\u7684\u6267\u884C\u901F\u5EA6\u3002\u8FD9\u4F7F\u5F97WASM\u7279\u522B\u9002\u7528\u4E8E\u9700\u8981\u9AD8\u6027\u80FD\u7684Web\u5E94\u7528\uFF0C\u5982\u6E38\u620F\u3001\u56FE\u50CF\u5904\u7406\u548C\u6A21\u62DF\u5668\u3002
2. \u5B89\u5168\u6027\uFF1A \u7531\u4E8EWASM\u662F\u4F4E\u7EA7\u522B\u7684\u865A\u62DF\u673A\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u79CD\u9694\u79BB\u548C\u53D7\u63A7\u7684\u6267\u884C\u73AF\u5883\u3002\u8FD9\u610F\u5473\u7740\u5B83\u53EF\u4EE5\u5728\u6D4F\u89C8\u5668\u4E2D\u5B89\u5168\u5730\u8FD0\u884C\uFF0C\u9632\u6B62\u6076\u610F\u4EE3\u7801\u5BF9\u7528\u6237\u8BA1\u7B97\u673A\u7684\u635F\u5BB3\u3002
3. \u8DE8\u5E73\u53F0\uFF1A WASM\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u4F53\u7CFB\u7ED3\u6784\u548C\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u8FD0\u884C\uFF0C\u4F7F\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u7F16\u5199\u4E00\u6B21\u4EE3\u7801\uFF0C\u7136\u540E\u5728\u591A\u4E2A\u5E73\u53F0\u4E0A\u8FD0\u884C\uFF0C\u800C\u65E0\u9700\u8FDB\u884C\u5927\u91CF\u7684\u4FEE\u6539\u548C\u8C03\u6574\u3002
4. \u8BED\u8A00\u65E0\u5173\u6027\uFF1A \u5C3D\u7BA1WASM\u53EF\u4EE5\u4ECE\u591A\u79CD\u7F16\u7A0B\u8BED\u8A00\u4E2D\u751F\u6210\uFF0C\u4F46\u5B83\u4E0E\u7279\u5B9A\u7684\u7F16\u7A0B\u8BED\u8A00\u65E0\u5173\u3002\u8FD9\u4F7F\u5F97\u5F00\u53D1\u4EBA\u5458\u80FD\u591F\u9009\u62E9\u4ED6\u4EEC\u719F\u6089\u7684\u8BED\u8A00\uFF0C\u5E76\u5C06\u5176\u7F16\u8BD1\u6210WASM\u4EE5\u5728Web\u4E0A\u8FD0\u884C\u3002
5. \u9002\u7528\u8303\u56F4\uFF1A \u867D\u7136WASM\u4E3B\u8981\u9488\u5BF9Web\u6D4F\u89C8\u5668\u4E2D\u7684Web\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4F46\u5B83\u4E0D\u4EC5\u9650\u4E8E\u6B64\u3002\u5B83\u8FD8\u53EF\u4EE5\u5728\u5176\u4ED6\u9886\u57DF\uFF0C\u5982\u670D\u52A1\u5668\u7AEF\u3001\u5D4C\u5165\u5F0F\u7CFB\u7EDF\u7B49\u4E2D\u53D1\u6325\u4F5C\u7528\u3002
<a name="34062b25"></a>
## \u4E09\u3001\u6700\u4F73\u5B9E\u8DF5
\u8A00\u5F52\u6B63\u4F20\uFF0C\u73B0\u5728\u6211\u4EEC\u57FA\u4E8EWasm\u4E3AHigress\u5F00\u53D1\u4E00\u4E2AJWT\u8BA4\u8BC1\u63D2\u4EF6\uFF0C\u5B9E\u73B0\u5728Higress\u4E2D\u8FDB\u884Ctoken\u89E3\u6790\u8BA4\u8BC1\uFF0C\u5982\u679CToken\u65E0\u6548\u6216\u4E0D\u5B58\u5728\u76F4\u63A5\u62D2\u7EDD\u8FD4\u56DE401\uFF0CToken\u6709\u6548\u7EE7\u7EED\u8BBF\u95EE\u540E\u7AEF\u5FAE\u670D\u52A1\u3002\u5229\u7528\u6700\u4F73\u5B9E\u8DF5\u7684\u65B9\u5F0F\u5E26\u5927\u5BB6\u719F\u6089\u4E00\u4E0B\u57FA\u4E8EWsam\u5F00\u53D1Higress\u63D2\u4EF6\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u6D41\u7A0B\u56FE\u5982\u4E0B\uFF1A![](/img/1728551156205.png)\u8FD9\u6837\u505A\u7684\u597D\u5904\uFF1A

- \u4E0B\u6E38\u5FAE\u670D\u52A1\u65E0\u9700\u91CD\u590D\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u51CF\u5C11\u4E86\u91CD\u590D\u7684\u5DE5\u4F5C\uFF0C\u4E5F\u63D0\u9AD8\u4E86\u7CFB\u7EDF\u7684\u5B89\u5168\u6027
- \u907F\u514D\u4E86\u4E0B\u6E38\u670D\u52A1\u91CD\u590D\u89E3\u6790token\u6765\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684\u9700\u6C42\u3002\u51CF\u5C11\u4E86\u4E0D\u5FC5\u8981\u7684\u5F00\u9500
<a name="074bfd55"></a>
## \u56DB\u3001Higress \u90E8\u7F72
\`\`\`
# \u73AF\u5883\u4E3AKubernetes v1.27.3
$ kubectl get nodes
NAME                 STATUS   ROLES           AGE   VERSION
kind-control-plane   Ready    control-plane   9h    v1.27.3

# \u901A\u8FC7Helm\u5B89\u88C5
$ helm repo add higress.io https://higress.io/helm-charts

"higress.io" already exists with the same configuration, skipping
$ helm install higress -n higress-system higress.io/higress --create-namespace --render-subchart-notes --set global.local=true --set higress-console.o11y.enabled=false  --set higress-console.domain=console.higress.io --set higress-console.admin.password.value=admin

NAME: higress
LAST DEPLOYED: Thu Aug 10 20:37:40 2023
NAMESPACE: higress-system
STATUS: deployed
REVISION: 1
TEST SUITE: None
NOTES:
Higress successfully installed!

To learn more about the release, try:
  $ helm status higress -n higress-system
  $ helm get all higress -n higress-system

1. Use the following URL to access the console:
  http://console.higress.io/
  Since Higress Console is running in local mode, you may need to add the following line into your hosts file before accessing the console:
  127.0.0.1 console.higress.io
2. Use following commands to get the credential and login:
  export ADMIN_USERNAME=$(kubectl get secret --namespace higress-system higress-console -o jsonpath="{.data.adminUsername}" | base64 -d)
  export ADMIN_PASSWORD=$(kubectl get secret --namespace higress-system higress-console -o jsonpath="{.data.adminPassword}" | base64 -d)
  echo -e "Username: \${ADMIN_USERNAME}\\nPassword: \${ADMIN_PASSWORD}"
  NOTE: If this is an upgrade release, your current password won't be changed.
3. If you'd like to change the credential, you can edit this secret with new values: higress-system/higress-console

# \u67E5\u770B\u5BC6\u7801
$ export ADMIN_USERNAME=$(kubectl get secret --namespace higress-system higress-console -o jsonpath="{.data.adminUsername}" | base64 -d)
$ export ADMIN_PASSWORD=$(kubectl get secret --namespace higress-system higress-console -o jsonpath="{.data.adminPassword}" | base64 -d)
$ echo -e "Username: \${ADMIN_USERNAME}\\nPassword: \${ADMIN_PASSWORD}"
Username: admin
Password: admin

# \u914D\u7F6EHosts
 $ cat /etc/hosts
 127.0.0.1 demo.kubesre.com console.higress.io

# \u8F6C\u53D1\u4E00\u4E0B\u7AEF\u53E3\u672C\u5730\u53EF\u4EE5\u8BBF\u95EE
$ kubectl  port-forward service/higress-gateway -n higress-system 80:80
\`\`\`
\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://console.higress.io/pluginUsername: admin Password: admin<br />![](/img/1728551156374.png)\u51FA\u73B0\u5982\u4E0A\u754C\u9762\u8BF4\u660E\u5B89\u88C5\u6210\u529F\uFF01
<a name="75ec19c7"></a>
## \u4E94\u3001\u5F00\u53D1\u73AF\u5883\u642D\u5EFA
\u4EE5MacOS\u4E3A\u4F8B,Windows\u53EF\u4EE5\u53BB\u67E5\u9605\u5B98\u65B9\u6587\u6863\u8FDB\u884C\u5B89\u88C5\u73AF\u5883\uFF1A Golang\uFF1Ahttps://go.dev/doc/installTinyGo\uFF1Ahttps://tinygo.org/getting-started/install/Wasm-opt:https://github.com/WebAssembly/binaryen.git
\`\`\`
# \u5B89\u88C5golang
$ brew install go
$ go version
go version go1.19.9 darwin/arm64

# TinyGo
$ wget https://github.com/tinygo-org/tinygo/releases/download/v0.25.0/tinygo0.25.0.darwin-amd64.tar.gz
$ tar -zxf tinygo0.25.0.darwin-amd64.tar.gz
$ export PATH=/tmp/tinygo/bin:$PATH
$ tinygo version
tinygo version 0.28.0-dev-5c2753e darwin/amd64 (using go version go1.19.9 and LLVM version 15.0.0)

# Wasm-opt
$ wget https://github.com/WebAssembly/binaryen/releases/download/version_114/binaryen-version_114-arm64-macos.tar.gz
$ tar binaryen-version_114-arm64-macos.tar.gz
$ export PATH=/tmp/binaryen/bin:$PATH
$ wasm-opt --version
wasm-opt version 114 (version_114)
\`\`\`
\u5230\u6B64\u4E3A\u6B62\uFF0C\u5F00\u53D1\u73AF\u5883\u642D\u5EFA\u5B8C\u6BD5\uFF1A
<a name="995d076a"></a>
## \u516D\u3001JWT\u8BA4\u8BC1\u63D2\u4EF6\u5F00\u53D1
\u521D\u59CB\u5316\u5DE5\u7A0B\uFF1A
\`\`\`
# \u521D\u59CB\u5316\u5DE5\u7A0B
$  mkdir jwt-plugin
$  cd jwt-plugin 
$  go mod init jwt-plugin 
go: creating new go.mod: module jwt-plugin
# \u8BBE\u7F6E\u4EE3\u7406
$ go env -w GOPROXY=https://proxy.golang.com.cn,direct
# \u4E0B\u8F7D\u4F9D\u8D56\u6027
$ go get github.com/tetratelabs/proxy-wasm-go-sdk
$ go get github.com/alibaba/higress/plugins/wasm-go@main
$ go get github.com/tidwall/gjson
\`\`\`
\u63D2\u4EF6\u4EE3\u7801\uFF1A
\`\`\`
package main

import (
 "encoding/json"
 "github.com/alibaba/higress/plugins/wasm-go/pkg/wrapper"
 jwt "github.com/dgrijalva/jwt-go"
 "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm"
 "github.com/tetratelabs/proxy-wasm-go-sdk/proxywasm/types"
 "github.com/tidwall/gjson"
)

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E

func main() {
 wrapper.SetCtx(
  "jwt-plugin",  // \u914D\u7F6E\u63D2\u4EF6\u540D\u79F0
  wrapper.ParseConfigBy(parseConfig),
  wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
 )
}

type Config struct {
 TokenSecretKey string // \u89E3\u6790Token SecretKey
 TokenHeaders   string // \u5B9A\u4E49\u83B7\u53D6Token\u8BF7\u6C42\u5934\u540D\u79F0
}

type Res struct {
 Code int    \`json:"code"\`  // \u8FD4\u56DE\u72B6\u6001\u7801
 Msg  string \`json:"msg"\`  // \u8FD4\u56DE\u4FE1\u606F
}

func parseConfig(json gjson.Result, config *Config, log wrapper.Log) error {
 // \u89E3\u6790\u51FA\u914D\u7F6E\uFF0C\u66F4\u65B0\u5230config\u4E2D
 config.TokenSecretKey = json.Get("token_secret_key").String()
 config.TokenHeaders = json.Get("token_headers").String()
 return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config Config, log wrapper.Log) types.Action {
 var res Res
 if config.TokenHeaders == "" || config.TokenSecretKey == "" {
  res.Code = 401
  res.Msg = "\u53C2\u6570\u4E0D\u8DB3"
  data, _ := json.Marshal(res)
  _ = proxywasm.SendHttpResponse(401, nil, data, -1)
  return types.ActionContinue
 }

 token, err := proxywasm.GetHttpRequestHeader(config.TokenHeaders)  // \u83B7\u53D6Token
 if err != nil {
  res.Code = 401
  res.Msg = "\u8BA4\u8BC1\u5931\u8D25"
  data, _ := json.Marshal(res)
  _ = proxywasm.SendHttpResponse(401, nil, data, -1)
  return types.ActionContinue
 }
 valid := ParseTokenValid(token, config.TokenSecretKey)
 if valid {
  _ = proxywasm.ResumeHttpRequest()
  return types.ActionPause
 } else {
  res.Code = 401
  res.Msg = "\u8BA4\u8BC1\u5931\u8D25"
  data, _ := json.Marshal(res)
  _ = proxywasm.SendHttpResponse(401, nil, data, -1)
  return types.ActionContinue
 }
}
// \u8BA4\u8BC1\u89E3\u6790Token
func ParseTokenValid(tokenString, TokenSecretKey string) bool {
 token, _ := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
  // \u5728\u8FD9\u91CC\u63D0\u4F9B\u7528\u4E8E\u9A8C\u8BC1\u7B7E\u540D\u7684\u5BC6\u94A5
  return []byte(TokenSecretKey), nil
 })
 return token.Valid
}
\`\`\`
HTTP \u5904\u7406\u6302\u8F7D\u70B9\uFF1A<br />\u4EE3\u7801\u4E2D\u901A\u8FC7 wrapper.ProcessRequestHeadersBy\u5C06\u81EA\u5B9A\u4E49\u51FD\u6570 onHttpRequestHeaders\u7528\u4E8EHTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5\u5904\u7406\u8BF7\u6C42\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\uFF0C\u8BBE\u7F6E\u5176\u4ED6\u9636\u6BB5\u7684\u81EA\u5B9A\u4E49\u5904\u7406\u51FD\u6570

| HTTP \u5904\u7406\u9636\u6BB5 | \u89E6\u53D1\u65F6\u673A | \u6302\u8F7D\u65B9\u6CD5 |
| --- | --- | --- |
| HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42\u5934\u6570\u636E\u65F6 | wrapper.ProcessRequestHeadersBy |
| HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u6765\u7684\u8BF7\u6C42 Body \u6570\u636E\u65F6 | wrapper.ProcessRequestBodyBy |
| HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54\u5934\u6570\u636E\u65F6 | wrapper.ProcessResponseHeadersBy |
| HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 | \u7F51\u5173\u63A5\u6536\u5230\u540E\u7AEF\u670D\u52A1\u54CD\u5E94\u7684\u5E94\u7B54 Body \u6570\u636E\u65F6 | wrapper.ProcessResponseBodyBy |

\u5DE5\u5177\u65B9\u6CD5\uFF1A<br />\u4EE3\u7801\u4E2D\u7684 proxywasm.SendHttpResponse\u662F\u63D2\u4EF6 SDK \u63D0\u4F9B\u7684\u4E24\u4E2A\u5DE5\u5177\u65B9\u6CD5

| \u5206\u7C7B | \u65B9\u6CD5\u540D\u79F0 | \u7528\u9014 | \u53EF\u4EE5\u751F\u6548\u7684HTTP \u5904\u7406\u9636\u6BB5 |
| --- | --- | --- | --- |
| \u8BF7\u6C42\u5934\u5904\u7406 | GetHttpRequestHeaders | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | ReplaceHttpRequestHeaders | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u5168\u90E8\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | GetHttpRequestHeader | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | RemoveHttpRequestHeader | \u79FB\u9664\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | ReplaceHttpRequestHeader | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42\u7684\u6307\u5B9A\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | AddHttpRequestHeader | \u65B0\u589E\u4E00\u4E2A\u5BA2\u6237\u7AEF\u8BF7\u6C42\u5934 | HTTP \u8BF7\u6C42\u5934\u5904\u7406\u9636\u6BB5 |
| \u8BF7\u6C42 Body \u5904\u7406 | GetHttpRequestBody | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
| 

 | AppendHttpRequestBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u672B\u5C3E | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
| 

 | PrependHttpRequestBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body \u7684\u5F00\u5934 | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
| 

 | ReplaceHttpRequestBody | \u66FF\u6362\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u8BF7\u6C42 Body \u5904\u7406\u9636\u6BB5 |
| \u5E94\u7B54\u5934\u5904\u7406 | GetHttpResponseHeaders | \u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | ReplaceHttpResponseHeaders | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u5168\u90E8\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | GetHttpResponseHeader | \u83B7\u53D6\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | RemoveHttpResponseHeader | \u79FB\u9664\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | ReplaceHttpResponseHeader | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94\u7684\u6307\u5B9A\u5E94\u7B54\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| 

 | AddHttpResponseHeader | \u65B0\u589E\u4E00\u4E2A\u540E\u7AEF\u54CD\u5E94\u5934 | HTTP \u5E94\u7B54\u5934\u5904\u7406\u9636\u6BB5 |
| \u5E94\u7B54 Body \u5904\u7406 | GetHttpResponseBody | \u83B7\u53D6\u5BA2\u6237\u7AEF\u8BF7\u6C42 Body | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
| 

 | AppendHttpResponseBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u672B\u5C3E | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
| 

 | PrependHttpResponseBody | \u5C06\u6307\u5B9A\u7684\u5B57\u8282\u4E32\u9644\u52A0\u5230\u540E\u7AEF\u54CD\u5E94 Body \u7684\u5F00\u5934 | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
| 

 | ReplaceHttpResponseBody | \u66FF\u6362\u540E\u7AEF\u54CD\u5E94 Body | HTTP \u5E94\u7B54 Body \u5904\u7406\u9636\u6BB5 |
| HTTP \u8C03\u7528 | DispatchHttpCall | \u53D1\u9001\u4E00\u4E2A HTTP \u8BF7\u6C42 | - |
| 

 | GetHttpCallResponseHeaders | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54\u5934 | - |
| 

 | GetHttpCallResponseBody | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Body | - |
| 

 | GetHttpCallResponseTrailers | \u83B7\u53D6 DispatchHttpCall \u8BF7\u6C42\u54CD\u5E94\u7684\u5E94\u7B54 Trailer | - |
| \u76F4\u63A5\u54CD\u5E94 | SendHttpResponse | \u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u7279\u5B9A\u7684 HTTP \u5E94\u7B54 | - |
| \u6D41\u7A0B\u6062\u590D | ResumeHttpRequest | \u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u8BF7\u6C42\u5904\u7406\u6D41\u7A0B | - |
| 

 | ResumeHttpResponse | \u6062\u590D\u5148\u524D\u88AB\u6682\u505C\u7684\u5E94\u7B54\u5904\u7406\u6D41\u7A0B | - |

<a name="e1933bd1"></a>
## \u4E03\u3001\u7F16\u8BD1\u6253\u5305\u63D2\u4EF6
\`\`\`
# \u7F16\u8BD1WASM
$  tinygo build -o main.wasm -scheduler=none -target=wasi -gc=custom -tags='custommalloc nottinygc_finalizer' main.go

# \u67E5\u770BDockerfile
cat Dockerfile 
FROM scratch
COPY main.wasm plugin.wasm

# \u7F16\u8BD1Docker Image
$ docker build -t  registry.cn-shanghai.aliyuncs.com/kubesre01/jwt-plugin:v1 .

[+] Building 0.1s (5/5) FINISHED                                                                                                                                                                               docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                                           0.0s
 => => transferring dockerfile: 113B                                                                                                                                                                                           0.0s
 => [internal] load .dockerignore                                                                                                                                                                                              0.0s
 => => transferring context: 2B                                                                                                                                                                                                0.0s
 => [internal] load build context                                                                                                                                                                                              0.0s
 => => transferring context: 1.99MB                                                                                                                                                                                            0.0s
 => [1/1] COPY main.wasm plugin.wasm                                                                                                                                                                                           0.0s
 => exporting to image                                                                                                                                                                                                         0.0s
 => => exporting layers                                                                                                                                                                                                        0.0s
 => => writing image sha256:6097b8347fc71e52eadd05753b2bd6877f4f9283a9cd4d844e62259ef714e373                                                                                                                                   0.0s
 => => naming to registry.cn-shanghai.aliyuncs.com/kubesre01/jwt-plugin:v1 

 # \u4E0A\u4F20\u955C\u50CF\u5230\u4ED3\u5E93
 $ docker push  registry.cn-shanghai.aliyuncs.com/kubesre01/jwt-plugin:v1                            
The push refers to repository [registry.cn-shanghai.aliyuncs.com/kubesre01/jwt-plugin]
31f0fa5f1adf: Pushed 
v1: digest: sha256:c3c629576c71d3dbd4d2bd8118c5523346c63cff7853ce995eb5879affd2c752 size: 526
\`\`\`
<a name="f3bc7945"></a>
## \u516B\u3001\u90E8\u7F72\u793A\u4F8B\u670D\u52A1

- Auth\u670D\u52A1\uFF1A\u8D1F\u8D23\u7528\u6237\u767B\u9646\u6388\u6743\u8FD4\u56DEToken
- Demo\u670D\u52A1\uFF1A\u8D1F\u8D23\u8BA4\u8BC1\u901A\u8FC7\u540E\u8BBF\u95EE\u7684\u5FAE\u670D\u52A1
\`\`\`
# \u90E8\u7F72Auth\u670D\u52A1
$ cat auth.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth
  labels:
    app: auth
spec:
  replicas: 1
  selector:
    matchLabels:
      app: auth
  template:
    metadata:
      labels:
        app: auth
    spec:
      containers:
      - name: auth
        imagePullPolicy: Always
        image: registry.cn-shanghai.aliyuncs.com/kubesre01/auth:v1
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: auth-svc
spec:
  type: ClusterIP
  selector:
    app: auth
  ports:
    - port: 8080
      targetPort: 8080
$ kubectl apply -f auth.yml
deployment.apps/auth unchanged
service/auth-svc unchanged


# \u90E8\u7F72demo\u670D\u52A1
$  cat demo.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: demo
  labels:
    app: demo
spec:
  replicas: 1
  selector:
    matchLabels:
      app: demo
  template:
    metadata:
      labels:
        app: demo
    spec:
      containers:
      - name: demo
        imagePullPolicy: Always
        image: registry.cn-shanghai.aliyuncs.com/kubesre01/demo:v1
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: demo-svc
spec:
  type: ClusterIP
  selector:
    app: demo
  ports:
    - port: 8080
      targetPort: 8080

$ kubectl apply -f demo.yml
deployment.apps/demo unchanged
service/demo-svc unchanged
\`\`\`
<a name="f2899460"></a>
## \u4E5D\u3001\u9A8C\u8BC1JWT\u8BA4\u8BC1\u63D2\u4EF6
\u5B89\u88C5\u63D2\u4EF6\uFF1A![](/img/1728551156532.png)<br />\u914D\u7F6E\u57DF\u540D\uFF1A![](/img/1728551156720.png)\u914D\u7F6E\u8DEF\u7531\uFF1A![](/img/1728551156879.png)![](/img/1728551157029.png)\u4E3Ademo\u670D\u52A1\u914D\u7F6E\u7B56\u7565\uFF1A![](/img/1728551157187.png)\u9A8C\u8BC1\uFF1A \u5148\u901A\u8FC7auth\u670D\u52A1\u63A5\u53E3\u83B7\u53D6\u5230Token![](/img/1728551157368.png)\u643A\u5E26Token\u8FDB\u884C\u8BF7\u6C42demo\u670D\u52A1\uFF0C\u6B63\u5E38\u8FD4\u56DE![](/img/1728551157545.png)\u4E0D\u643A\u5E26Token\u8FDB\u884C\u8BF7\u6C42demo\u670D\u52A1\uFF0C\u8FD4\u56DE401\uFF0C\u8BE6\u60C5\u5982\u4E0B![](/img/1728551157693.png)
<a name="25f9c7fa"></a>
## \u5341\u3001\u603B\u7ED3
\u672C\u6587\u5E26\u5927\u5BB6\u4E86\u89E3Higress\u4E91\u539F\u751F\u7F51\u5173\u4E0EWasm\uFF0C\u5E76\u901A\u8FC7\u6700\u4F73\u5B9E\u8DF5\u5F00\u53D1\u4E86\u57FA\u4E8EWasm\u7684Higress JWT\u8BA4\u8BC1\u63D2\u4EF6\u7684\u6574\u4E2A\u8FC7\u7A0B\uFF0C\u76F8\u4FE1\u5927\u5BB6\u4E00\u5B9A\u6709\u6240\u6536\u83B7\uFF0C\u63A5\u4E0B\u6765\u6587\u7AE0\u5185\u5BB9\u4E2D\u4F1A\u5206\u4EAB\u66F4\u591A\u4F01\u4E1A\u7EA7\u5B9E\u6218\u6848\u4F8B\uFF0C\u8BF7\u656C\u8BF7\u671F\u5F85\uFF01<br />**\u6DFB\u52A0\u4E0B\u9762\u5FAE\u4FE1\uFF0C\u62C9\u4F60\u8FDB\u7FA4\u4E0E\u5927\u4F6C\u4E00\u8D77\u63A2\u8BA8\u4E91\u539F\u751F\uFF01**<br />![](/img/1728551157856.png)

`,o={title:"\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173Higress\uFF1A\u57FA\u4E8EWasm\u5F00\u53D1JWT\u8BA4\u8BC1\u63D2\u4EF6",description:"\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173Higress\uFF1A\u57FA\u4E8EWasm\u5F00\u53D1JWT\u8BA4\u8BC1\u63D2\u4EF6",keywords:["Higress"],date:"2023-08-11",category:"article"},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_un7afz9yhq61u2fk.mdx",rawData:void 0};export{n as _internal,a as body,s as collection,o as data,e as id,t as slug};
