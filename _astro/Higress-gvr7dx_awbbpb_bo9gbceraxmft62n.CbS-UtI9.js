const e="Higress-gvr7dx_awbbpb_bo9gbceraxmft62n.mdx",r="blog",s="higress-gvr7dx_awbbpb_bo9gbceraxmft62n",a=`
\u4F5C\u8005\u4ECB\u7ECD\uFF1A\u97E6\u946B (WeixinX)<br />\u5BFC\u8BFB\uFF1A\u672C\u6587\u5C06\u548C\u5927\u5BB6\u4E00\u540C\u56DE\u987E Spring Cloud Gateway \u662F\u5982\u4F55\u6EE1\u8DB3 HTTP \u8BF7\u6C42/\u54CD\u5E94\u8F6C\u6362\u9700\u6C42\u573A\u666F\u7684\uFF0C\u5E76\u4E3A\u5927\u5BB6\u4ECB\u7ECD\u5728\u8FD9\u79CD\u573A\u666F\u4E0B\u4F7F\u7528 Higress \u4E91\u539F\u751F\u7F51\u5173\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u540C\u65F6\u8FD8\u5BF9\u6BD4\u4E86\u4E24\u8005\u7684\u6027\u80FD\u5DEE\u5F02\u3002
<a name="RIH9c"></a>
## \u4E00\u3001SCG \u4FEE\u6539\u8BF7\u6C42/\u54CD\u5E94
\u5728 Spring Cloud Gateway**[1]**(\u4EE5\u4E0B\u7B80\u79F0\u4E3A SCG) \u4E2D\uFF0C\u5F53\u6211\u4EEC\u9700\u8981\u5BF9 HTTP \u8BF7\u6C42\u6216\u54CD\u5E94\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0CSCG \u63D0\u4F9B\u4E86\u8BB8\u591A\u5185\u7F6E\u7684 GatewayFilter**[2]**\u6765\u6EE1\u8DB3\u6211\u4EEC\u5BF9\u8FD9\u79CD\u5E94\u7528\u573A\u666F\u7684\u9700\u6C42\uFF0C\u4F8B\u5982 AddRequestHeader,<br />AddRequestParameter, DedupeResponseHeader, MapRequestHeader, ModifyRequestBody \u7B49\u3002<br />\u8003\u8651\u4EE5\u4E0B\u7B80\u5355\u7528\u4F8B\uFF1A

- \u6DFB\u52A0\u8BF7\u6C42\u5934\u90E8X-First\uFF0C\u503C\u4ECE\u8BF7\u6C42\u8DEF\u5F84\u4E2D\u83B7\u53D6\uFF0C\u4F8B\u5982\u4ECE\`/response-headers?testKey=testValue\`\u4E2D\u83B7\u53D6 "response-headers"\uFF1B
- \u5C06\u8BF7\u6C42\u5934\u90E8X-First\u7684\u503C\u6620\u5C04\u7ED9X-Second\uFF1B
- \u6DFB\u52A0\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\`k1=v1\`\uFF1B
- \u5254\u9664\u91CD\u590D\u7684\u54CD\u5E94\u5934\u90E8\`X-Dedupe\`\u3002

\u5728 SCG \u4E2D\u4F7F\u7528 GatewayFilter \u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u914D\u7F6E\uFF1A
\`\`\`
# application.yaml:

spring:
  cloud:
    gateway:
      routes:
        - id: test_route
          uri: lb://httpbin-svc
          predicates:
            - Path=/{api}/**
          filters:
            - AddRequestHeader=X-First, {api}
            - MapRequestHeader=X-First, X-Second
            - AddRequestParameter=k1, v1
            - DedupeResponseHeader=X-Dedupe, RETAIN_FIRST
\`\`\`
\u76F8\u4FE1\u62E5\u6709 SCG \u4F7F\u7528\u7ECF\u9A8C\u7684\u540C\u5B66\u5BF9\u4E0A\u8FF0\u914D\u7F6E\u4E00\u5B9A\u4E0D\u964C\u751F\uFF0C\u90A3\u4E48\u672C\u6587\u5C06\u91CD\u70B9\u7ED9\u51FA\u53E6\u4E00\u79CD\u80FD\u591F\u6EE1\u8DB3\u4E0A\u8FF0\u9700\u6C42\u5E76\u4E14\u6027\u80FD\u66F4\u52A0\u4F18\u8D8A\u7684\u89E3\u51B3\u65B9\u6848\u2014\u2014\u4F7F\u7528 _**Higress \u4E91\u539F\u751F\u7F51\u5173\u7684 Transformer \u63D2\u4EF6**_\u3002
<a name="vKlcc"></a>
## Higress \u63D2\u4EF6\u4E0E SCG \u6027\u80FD\u6BD4\u8F83
\u6211\u4EEC\u5728\u540C\u4E00\u541E\u5410\u91CF\u6C34\u5E73\uFF08QPS\uFF09\u4E0A\uFF0C\u5F00\u542F/\u5173\u95ED Higress Transformer \u63D2\u4EF6**[3]**\u548C SCG \u76F8\u5E94 GatewayFilters\uFF0C\u7EDF\u8BA1\u4E24\u8005\u5728**CPU**\u548C**\u5185\u5B58**\u8D44\u6E90\u4E0A\u7684\u5F00\u9500\u3002<br />\u7ECF\u8FC7\u6D4B\u8BD5**[13]**\uFF0C\u6211\u4EEC\u5F97\u5230\u7684\u7ED3\u8BBA\u662F\uFF1A

- \u5728 Higress **\u672A\u542F\u7528 **Transformer \u63D2\u4EF6\uFF0CSCG **\u672A\u542F\u7528 **GatewayFilters \u7684\u6761\u4EF6\u4E0B\uFF0CSCG \u7684 CPU, \u5185\u5B58\u8D44\u6E90\u5F00\u9500\u5206\u522B\u7EA6\u4E3A Higress\u7684 **3.30**, **4.88**\u500D\uFF1B
- \u5728 Higress **\u542F\u7528 **Transformer \u63D2\u4EF6\uFF0CSCG **\u542F\u7528**\u76F8\u5E94 GatewayFilters \u7684\u6761\u4EF6\u4E0B\uFF0CSCG \u7684 CPU, \u5185\u5B58\u8D44\u6E90\u5F00\u9500\u5206\u522B\u7EA6\u4E3A Higress \u7684 **2.98**, **3.19**\u500D\u3002

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723428736116-c5cf741a-0a43-4994-8138-f74d9c209352.png#clientId=uf034894f-3def-4&from=paste&id=u97a13ab2&originHeight=500&originWidth=955&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u7c89b426-3cbc-449e-969e-4b76b880dfb&title=)<br />\u53EF\u89C1 Higress Transformer \u76F8\u6BD4\u4E8E SCG GatewayFilter \u6709\u7740\u76F8\u5F53\u4E0D\u9519\u7684\u6027\u80FD\u8868\u73B0\uFF01<br />\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u8FDB\u4E00\u6B65\u4E3A\u5927\u5BB6\u4ECB\u7ECD Higress \u4E91\u539F\u751F\u7F51\u5173\u4EE5\u53CA\u4E0A\u8FF0\u63D0\u5230\u7684 Higress Transformer \u63D2\u4EF6\u3002
<a name="t3VGy"></a>
## \u4E09\u3001Higress \u7B80\u4ECB
**_Higress_[4]**\u662F\u57FA\u4E8E\u963F\u91CC\u5185\u90E8\u7684 Envoy Gateway \u5B9E\u8DF5\u6C89\u6DC0\u3001\u4EE5\u5F00\u6E90 Istio + Envoy \u4E3A\u6838\u5FC3\u6784\u5EFA\u7684\u4E0B\u4E00\u4EE3\u4E91\u539F\u751F\u7F51\u5173\uFF0C\u5B9E\u73B0\u4E86\u6D41\u91CF\u7F51\u5173 + \u5FAE\u670D\u52A1\u7F51\u5173 + \u5B89\u5168\u7F51\u5173\u4E09\u5408\u4E00\u7684\u9AD8\u96C6\u6210\u80FD\u529B\uFF0C\u6DF1\u5EA6\u96C6\u6210 Dubbo\u3001Nacos\u3001Sentinel \u7B49\u5FAE\u670D\u52A1\u6280\u672F\u6808\uFF0C\u80FD\u591F\u5E2E\u52A9\u7528\u6237\u6781\u5927\u5730\u964D\u4F4E\u7F51\u5173\u7684\u90E8\u7F72\u53CA\u8FD0\u7EF4\u6210\u672C\u4E14\u80FD\u529B\u4E0D\u6253\u6298\uFF1B\u5728\u6807\u51C6\u4E0A\u5168\u9762\u652F\u6301 Ingress \u4E0E Gateway API\uFF0C\u79EF\u6781\u62E5\u62B1\u4E91\u539F\u751F\u4E0B\u7684\u6807\u51C6 API \u89C4\u8303\uFF1B\u540C\u65F6\uFF0CHigress Controller \u4E5F\u652F\u6301 Nginx Ingress \u5E73\u6ED1\u8FC1\u79FB\uFF0C\u5E2E\u52A9\u7528\u6237\u96F6\u6210\u672C\u5FEB\u901F\u8FC1\u79FB\u5230 Higress\u3002<br />Higress \u63D0\u4F9B\u4E86\u4E00\u5957 Wasm (WebAssembly) SDK**[5]**\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u80FD\u591F\u8F7B\u677E\u4F7F\u7528 C++, Golang, Rust \u5F00\u53D1 Wasm \u63D2\u4EF6\u589E\u5F3A\u7F51\u5173\u80FD\u529B\u3002\u4E0B\u9762\u5C06\u4E3A\u5927\u5BB6\u4ECB\u7ECD Higress Transformer \u63D2\u4EF6\u7684\u57FA\u672C\u529F\u80FD\uFF0C\u6700\u540E\u7B80\u5355\u8BF4\u660E Transformer \u63D2\u4EF6\u7684\u6838\u5FC3\u4EE3\u7801\u903B\u8F91\u3002

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723429702457-aeaa6a12-1bda-41ce-abbb-410650ff6970.png#clientId=uf034894f-3def-4&from=paste&id=uc2498aee&originHeight=880&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=uadb904a1-3a30-4961-ab4c-f3e9c003727&title=)
<a name="aPTpx"></a>
## \u56DB\u3001Transformer \u63D2\u4EF6\u4ECB\u7ECD
**_Higress Transformer \u63D2\u4EF6_[3]**\u53EF\u4EE5\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u5934\u90E8\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u8FDB\u884C\u8F6C\u6362\uFF0C\u652F\u6301\u7684\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u5305\u62EC\u5220\u9664\uFF08remove\uFF09\u3001\u91CD\u547D\u540D\uFF08rename\uFF09\u3001\u66F4\u65B0\uFF08replace\uFF09\u3001\u6DFB\u52A0\uFF08add\uFF09\u3001\u8FFD\u52A0\uFF08append\uFF09\u3001\u6620\u5C04\uFF08map\uFF09\u548C\u53BB\u91CD\uFF08dedupe\uFF09\u3002

\u63A5\u4E0B\u6765\u6211\u4EEC\u590D\u73B0\u6700\u5F00\u59CB\u63D0\u5230\u7684 SCG GatewayFilter \u7B80\u5355\u7528\u4F8B\uFF0C\u6765\u6F14\u793A\u5982\u4F55\u4F7F\u7528\u8BE5\u63D2\u4EF6\uFF08\u4EE5\u4E0B\u4F7F\u7528 Higress \u63A7\u5236\u53F0\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5730\u90E8\u7F72\u63D2\u4EF6\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528 K8s YAML Manifests \u7684\u65B9\u5F0F**[12]**\uFF09\uFF1A

**1. **\u9996\u5148\u6839\u636E\u5B98\u65B9\u6587\u6863**[6]**\u5FEB\u901F\u5B89\u88C5 Higress\uFF0C\u7ED3\u679C\u5982\u4E0B\uFF1A
\`\`\`
$ kubectl -n higress-system get deploy
NAME                         READY   UP-TO-DATE   AVAILABLE   AGE
higress-console              1/1     1            1           1d
higress-console-grafana      1/1     1            1           1d
higress-console-prometheus   1/1     1            1           1d
higress-controller           1/1     1            1           1d
higress-gateway              1/1     1            1           1d
\`\`\`
**2. **\u901A\u8FC7 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u57DF\u540D\uFF08foo.bar.com\uFF09\u3001\u8DEF\u7531\u914D\u7F6E\uFF08foo\uFF09\uFF0C\u5C06\u6D41\u91CF\u8F6C\u53D1\u81F3\u540E\u7AEF\u7684 httpbin**[7]**\u670D\u52A1\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723429743952-16e76c0b-da42-4408-af61-e9189690abd7.png#clientId=uf034894f-3def-4&from=paste&id=u15a2ecaa&originHeight=248&originWidth=656&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u38d1f7df-d615-4e89-8f5c-0d280b11c6a&title=)<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723429744013-56267086-0675-4afe-b18f-48ab2b0fdd23.png#clientId=uf034894f-3def-4&from=paste&id=u4324d380&originHeight=951&originWidth=658&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=uce44a999-6108-4e1c-91c8-d2eceeb5f35&title=)<br />**3. **\u4E3A foo \u8DEF\u7531\u6DFB\u52A0 Transformer \u63D2\u4EF6\uFF08\u5F53\u524D\u672A\u63A8\u9001\u63D2\u4EF6\u81F3\u5B98\u65B9\u955C\u50CF\u4ED3\u5E93\uFF0C\u53EF\u4EE5\u5148\u4F7F\u7528 docker.io/weixinx/transformer:v0.1.0\uFF0C\u6216\u5230\u4EE3\u7801\u4ED3\u5E93\u81EA\u884C\u6784\u5EFA\uFF09\uFF1A<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723429744029-3d943272-d27f-476b-8fc7-95711d5f72e9.png#clientId=uf034894f-3def-4&from=paste&id=u454b027e&originHeight=870&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u1d02cc0c-2e94-4cc5-b4ff-1dcea4f871c&title=)<br />**\u6CE8\uFF1A**\u4E3A\u4E86\u80FD\u591F\u540C\u65F6\u5B8C\u6210\u8BF7\u6C42\u548C\u54CD\u5E94\u8F6C\u6362\u7684\u9700\u6C42\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A foo \u8DEF\u7531\u518D\u6DFB\u52A0\u4E00\u4E2A Transformer \u63D2\u4EF6\uFF0C\u547D\u540D\u4E3A transformer-resp\uFF0C\u7528\u4E8E\u5904\u7406\u54CD\u5E94\u65B9\u5411\u3002<br />**4. **\u6DFB\u52A0 Transformer \u914D\u7F6E\u5E76\u5F00\u542F\u8BE5\u63D2\u4EF6\uFF1A

- \u6DFB\u52A0\u8BF7\u6C42\u5934\u90E8X-First\uFF0C\u503C\u4ECE\u8BF7\u6C42\u8DEF\u5F84\u4E2D\u83B7\u53D6\uFF0C\u4F8B\u5982\u4ECE\`/response-headers?testKey=testValue\`\u4E2D\u83B7\u53D6 "response-headers"\uFF1B
- \u5C06\u8BF7\u6C42\u5934\u90E8X-First\u7684\u503C\u6620\u5C04\u7ED9X-Second\uFF1B

- \u6DFB\u52A0\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\`k1=v1\`\uFF1B
- \u5254\u9664\u91CD\u590D\u7684\u54CD\u5E94\u5934\u90E8\`X-Dedupe\`\u3002
\`\`\`
# transformer:
type: request  # \u6307\u5B9A Transformer \u7C7B\u578B
rules:         # \u6307\u5B9A\u8F6C\u6362\u89C4\u5219
- operate: add # \u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B
  headers:     # \u6307\u5B9A\u5934\u90E8\u8F6C\u6362\u89C4\u5219
  - key: X-First
    value: $1  # \u6B63\u5219\u8868\u8FBE\u5F0F\u6355\u83B7\u7EC4 $1\uFF0C\u652F\u6301 RE2 \u8BED\u6CD5
    path_pattern: ^\\/(\\w+)[\\?]{0,1}.*$
  querys:      # \u6307\u5B9A\u67E5\u8BE2\u53C2\u6570\u8F6C\u6362\u89C4\u5219
  - key: k1
    value: v1
- operate: map
  headers:
  - key: X-First
    value: X-Second
---
# transformer-resp:
type: response
rules:
- operate: dedupe
  headers:
  - key: X-Dedupe
    value: RETAIN_FIRST
\`\`\`
**5. **\u53D1\u9001\u8BF7\u6C42\u8FDB\u884C\u6D4B\u8BD5\uFF1A
\`\`\`
# \u9A8C\u8BC1\u8BF7\u6C42\u65B9\u5411\u8F6C\u6362
$ curl -v -H "host: foo.bar.com" "console.higress.io/get"
...
>
< HTTP/1.1 200 OK
...
<
{
  "args": {
    # \u6DFB\u52A0\u4E86\u67E5\u8BE2\u53C2\u6570 k1=v1
    "k1": "v1"
  },
  "headers": {
    ...
    "X-First": "get", # \u6DFB\u52A0\u4E86\u8BF7\u6C42\u5934\u90E8 X-First\uFF0C\u503C "get" \u6765\u81EA\u8BF7\u6C42\u8DEF\u5F84
    "X-Second": "get" # \u6620\u5C04\u4E86\u8BF7\u6C42\u5934\u90E8 X-Second
  },
  ...
  # \u6DFB\u52A0\u4E86\u67E5\u8BE2\u53C2\u6570 k1=v1
  "url": "http://foo.bar.com/get?k1=v1"
}


# \u9A8C\u8BC1\u54CD\u5E94\u65B9\u5411\u8F6C\u6362
$ curl -v -H "host: foo.bar.com" \\
"console.higress.io/response-headers?X-Dedupe=1&X-Dedupe=2&X-Dedupe=3"
...
>
< HTTP/1.1 200 OK
< x-dedupe: 1 # \u4FDD\u7559\u4E86\u54CD\u5E94\u5934\u90E8 X-Dedupe \u7684\u7B2C\u4E00\u4E2A\u503C
...
<
{
  ...
  # \u901A\u8FC7\u67E5\u8BE2\u53C2\u6570\u4F20\u7ED9 httpbin \u7684\u81EA\u5B9A\u4E49\u54CD\u5E94\u5934\u90E8
  "X-Dedupe": [
    "1",
    "2",
    "3"
  ],
  ...
}
\`\`\`
\u2757\uFE0F**\u9700\u8981\u6CE8\u610F\u7684\u662F**\uFF1A

- \u4E0E\u4E0A\u8FF0\u4F8B\u5B50\u76F8\u540C\uFF0C\u82E5\u6709\u540C\u65F6\u5904\u7406\u8BF7\u6C42\u548C\u54CD\u5E94\u8F6C\u6362\u7684\u9700\u6C42\uFF0C\u5219\u9700\u8981\u4E3A\u76F8\u5E94\u8DEF\u7531\u6DFB\u52A0\u4E24\u4E2A Transformer \u63D2\u4EF6\uFF0C\u5206\u522B\u5904\u7406\u8BF7\u6C42\u65B9\u5411\u548C\u54CD\u5E94\u65B9\u5411\uFF08\u6B63\u5728\u4F18\u5316\uFF09\uFF1B
- \u8BF7\u6C42\u4F53\u652F\u6301\u7684 Content-Type \u6709\uFF1Aapplication/json, application/x-www-form-urlencoded, multipart/form-data\uFF1B\u800C\u54CD\u5E94\u4F53\u4EC5\u652F\u6301 application/json\uFF1B
- \u66F4\u591A\u8BF4\u660E\u8BE6\u89C1\u63D2\u4EF6\u6587\u6863**[3]**\u3002
<a name="ZoQPk"></a>
## \u4E94\u3001Transformer \u4EE3\u7801\u903B\u8F91
\u672C\u8282\u5C06\u7B80\u5355\u8BF4\u660E Higress Transformer \u63D2\u4EF6\u7684\u6838\u5FC3\u4EE3\u7801\u903B\u8F91\uFF0C\u5E0C\u671B\u53EF\u4EE5\u4E3A\u6709\u5174\u8DA3\u4F18\u5316\u8BE5\u63D2\u4EF6\u6216\u8FDB\u884C\u4E8C\u6B21\u5F00\u53D1\u7684\u540C\u5B66\u63D0\u4F9B\u4E00\u4E9B\u5E2E\u52A9\u3002<br />\u9996\u5148\u8BE5\u63D2\u4EF6\u4EE3\u7801\u4F4D\u4E8EHigress \u4ED3\u5E93\u7684plugins/wasm-go/extensions/transformer\u76EE\u5F55\u4E0B\uFF0C\u4F7F\u7528 Higress \u63D0\u4F9B\u7684 Wasm SDK**[5]**\u8FDB\u884C\u5F00\u53D1\uFF08\u5173\u4E8E\u5982\u4F55\u5F00\u53D1 Wasm \u63D2\u4EF6\u8BE6\u89C1\u5B98\u65B9\u6587\u6863**[8]**\uFF09\u3002<br />\u63D2\u4EF6\u7684\u914D\u7F6E\u6A21\u578B TransformerConfig\uFF1A
\`\`\`
# \u6A21\u578B\u4EE5\u63D2\u4EF6\u914D\u7F6E\u7684\u5F62\u5F0F\u66B4\u9732\u7ED9\u7528\u6237
type TransformerConfig struct {
  typ   string          # Transformer \u7C7B\u578B\uFF0C[request, response]
  rules []TransformRule # \u8F6C\u6362\u89C4\u5219
  
  trans Transformer # Transformer \u5B9E\u4F8B\uFF0C\u4E0D\u5BF9\u7528\u6237\u66B4\u9732\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9E\u9645\u7684\u8F6C\u6362\u64CD\u4F5C
}

type TransformRule struct {
  operate string   # \u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B
  headers []Param  # header \u53C2\u6570 
  querys  []Param  # query \u53C2\u6570
  body    []Param  # body \u53C2\u6570
}

type Param struct {
  key         string # \u8868\u793A\u5B57\u6BB5\u7684 key
  value       string # \u8868\u793A\u5B57\u6BB5\u7684 value \u6216 key (map) \u6216 strategy (dedupe)
  valueType   string # \u4E3A application/json body \u6307\u5B9A value \u7684\u6570\u636E\u7C7B\u578B
  hostPattern string # host \u6B63\u5219\u5339\u914D\u6A21\u5F0F
  pathPattern string # path \u6B63\u5219\u5339\u914D\u6A21\u5F0F
}
\`\`\`
\u5176\u4E2D Transformer \u4F5C\u4E3A\u63A5\u53E3\u5206\u522B\u6709\u8BF7\u6C42\u548C\u54CD\u5E94\u4E24\u4E2A\u5B9E\u73B0\uFF08requestTransformer, responseTransformer\uFF09\uFF0C\u4E3B\u8981\u5B9E\u73B0\u4E86 3 \u4E2A\u63A5\u53E3\u65B9\u6CD5 TransformHeaders, TransformerQuerys \u548C TransformBody\uFF1A
\`\`\`
type Transformer interface {
 TransformHeaders(host, path string, hs map[string][]string) error
 TransformQuerys(host, path string, qs map[string][]string) error
 TransformBody(host, path string, body interface{}) error
 ...
}

var _ Transformer = (*requestTransformer)(nil)
var _ Transformer = (*responseTransformer)(nil)
\`\`\`
\u7531\u4E8E\u5934\u90E8\uFF08Headers\uFF09\u548C\u67E5\u8BE2\u53C2\u6570\uFF08Querys\uFF09\u90FD\u662F\u4EE5 key-value \u7684\u5F62\u5F0F\u5B58\u5728\uFF0C\u56E0\u6B64\u901A\u8FC7 kvHandler \u5BF9\u4E24\u8005\u91C7\u7528\u7EDF\u4E00\u7684\u5904\u7406\u903B\u8F91\uFF1B\u800C Body \u7531\u4E8E\u8BF7\u6C42\u3001\u54CD\u5E94\u652F\u6301\u4E0D\u540C\u7684 Content-Type\uFF0C\u56E0\u6B64\u5206\u522B\u901A\u8FC7 requestBodyHandler (kvHandler, jsonHandler \u7EC4\u5408)\u548C responseBodyHandler (jsonHandler) \u8FDB\u884C\u5904\u7406\u3002\u7EFC\u4E0A\uFF0C\u5728\u4FEE\u6539\u8BE5\u63D2\u4EF6\u903B\u8F91\u65F6\uFF0C\u4E3B\u8981\u5BF9**kvHandler **\u548C **jsonHandler **\u8FDB\u884C\u4FEE\u6539\u5373\u53EF\uFF0C\u5176\u4E2D jsonHandler \u4F9D\u8D56 GJSON**[9]**\u548C SJSON**[10]**\u5DE5\u5177\u5E93\u3002

![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723429781129-53bb97a0-3046-4462-b5c7-62dec6503200.png#clientId=uf034894f-3def-4&from=paste&id=ud10f26cf&originHeight=663&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=u4219d793-dd86-421f-800d-4419d5f32eb&title=)

\u76EE\u524D handler \u4E2D\u7684\u8F6C\u6362\u987A\u5E8F\u662F\u88AB\u786C\u7F16\u7801\u7684\uFF08remove -> rename -> replace -> add -> append -> map -> dedupe\uFF09\uFF0C\u6211\u4EEC\u5BF9\u6B64\u6709\u4F18\u5316\u7684\u6253\u7B97\uFF0C\u4E5F\u6B22\u8FCE\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53C2\u4E0E\u8FDB\u6765 ~
<a name="BqD0N"></a>
## \u516D\u3001\u603B\u7ED3
\u672C\u6587\u5E26\u5927\u5BB6\u4E86\u89E3\u4E86 Higress Transformer \u63D2\u4EF6\uFF0C\u5E76\u4E0E Spring Cloud Gateway \u8FDB\u884C\u4E86\u6027\u80FD\u6BD4\u8F83\uFF0C\u5728\u6587\u7AE0\u7684\u6700\u540E\u8FD8\u8BF4\u660E\u4E86\u8BE5\u63D2\u4EF6\u7684\u6838\u5FC3\u4EE3\u7801\u903B\u8F91\uFF0C\u5E0C\u671B\u80FD\u591F\u4E3A\u5927\u5BB6\u4ECE Spring Cloud Gateway \u8FC1\u79FB\u81F3 Higress \u63D0\u4F9B\u5E2E\u52A9\uFF01<br />![](https://intranetproxy.alipay.com/skylark/lark/0/2024/png/299576/1723429808530-4e970e54-d65a-47d2-8004-4722a56435d0.png#clientId=uf034894f-3def-4&from=paste&id=u5b3875f2&originHeight=691&originWidth=1080&originalType=url&ratio=1.7999999523162842&rotation=0&showTitle=false&status=done&style=none&taskId=uf5abe500-540c-4166-9401-b7baf324385&title=)<br />\u5982\u679C\u60A8\u89C9\u5F97 Higress \u5BF9\u60A8\u6709\u5E2E\u52A9\uFF0C\u6B22\u8FCE\u524D\u5F80 Github: Higress**[11]**\u4E3A\u6211\u4EEC star\u2B50\uFE0F \u4E00\u4E0B\uFF01\u671F\u5F85\u4E0E\u60A8\u5728 Higress \u793E\u533A\u76F8\u9047 ~<br />**\u76F8\u5173\u94FE\u63A5\uFF1A**<br />**[1] Spring Cloud Gateway: **https://cloud.spring.io/spring-cloud-gateway/reference/html/<br />**[2] SCG GatewayFilter Factories: **https://cloud.spring.io/spring-cloud-gateway/reference/html/#gatewayfilter-factories<br />**[3] Higress Transformer \u63D2\u4EF6\uFF1A**https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/transformer<br />**[4] Higress \u5B98\u65B9\u6587\u6863:** https://higress.cn/<br />**[5] Higress Wasm SDK:** https://github.com/alibaba/higress/tree/main/plugins<br />**[6] Higress \u5FEB\u901F\u5F00\u59CB\uFF1A**https://higress.cn/docs/latest/user/quickstart/<br />**[7] httpbin: **https://httpbin.org/<br />**[8] \u5F00\u53D1 Higress Wasm \u63D2\u4EF6\uFF1A**https://higress.cn/docs/latest/user/wasm-go/<br />**[9] GJSON:** https://github.com/tidwall/gjson<br />**[10] SJSON:** https://github.com/tidwall/sjson<br />**[11] Higress \u4EE3\u7801\u4ED3\u5E93\uFF1A**https://github.com/alibaba/higress<br />**[12] Transformer Demo\uFF1A**https://github.com/higress-group/higress-demo/tree/main/wasm-demo/wasm-demo-go/wasm-plugin-transformer<br />**[13] \u6027\u80FD\u5BF9\u6BD4\u914D\u7F6E\uFF1A**https://gist.github.com/WeixinX/c24f4ded37832dd7e753b2d27470f0fc


`,t={title:"Wasm \u5B9E\u73B0 Higress \u6269\u5C55\uFF0C\u6027\u80FD\u662F Spring Cloud Gateway \u7684 3 \u500D\uFF01",description:"Wasm \u5B9E\u73B0 Higress \u6269\u5C55\uFF0C\u6027\u80FD\u662F Spring Cloud Gateway \u7684 3 \u500D\uFF01",keywords:["Higress"],date:"2024-08-12",category:"article"},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_bo9gbceraxmft62n.mdx",rawData:void 0};export{o as _internal,a as body,r as collection,t as data,e as id,s as slug};