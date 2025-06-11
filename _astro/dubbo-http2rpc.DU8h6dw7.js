const t="latest/zh-cn/user/dubbo-http2rpc.md",e="docs",o="latest/zh-cn/user/dubbo-http2rpc",r=`
# HTTP \u8F6C Dubbo \u914D\u7F6E\u8BF4\u660E
\u672C\u6587\u4ECB\u7ECD\u4E86 Http2Rpc \u8FD9\u4E2A\u81EA\u5B9A\u4E49 CRD \u7684\u76F8\u5173\u914D\u7F6E\u9879\u3002
### spec.dubbo
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| service     | the dubbo interface name    | dubbo\u670D\u52A1\u63A5\u53E3\u540D | \u4F8B\u5982\uFF1A"com.alibaba.nacos.example.dubbo.service.DemoService" |
| version     | the dubbo service version   | dubbo\u670D\u52A1\u7248\u672C\u53F7 | \u4F8B\u5982\uFF1A"1.0.0" |
| group       | the dubbo service group   | dubbo\u670D\u52A1\u5206\u7EC4   | \u4F8B\uFF1A"dev" |                      | dubbo\u670D\u52A1\u5206\u7EC4   | \u4F8B\uFF1A"dev" |
| methods     | list of spec.dubbo.methods | \u6BCF\u4E00\u9879\u5BF9\u5E94\u4E86\u4E00\u6761\u65B9\u6CD5\u6620\u5C04\u89C4\u5219 |  |

### spec.dubbo.methods
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| serviceMethod        | string             | dubbo\u670D\u52A1\u63A5\u53E3\u7684\u65B9\u6CD5\u540D               | \u4F8B\uFF1A"sayName" |
| headersAttach   | string | \u9700\u8981\u900F\u4F20\u7684http headers | 1\u3001\u7A7A: \u4E0D\u8BBE\u7F6E\u8868\u793A\u4E0D\u900F\u4F20\u4EFB\u4F55\u503C;<br />2\u3001*: \u8868\u793A\u900F\u4F20\u6240\u6709headers;<br /> 3\u3001\u7528\u82F1\u6587\u9017\u53F7\u9694\u5F00\u9700\u8981\u900F\u51FA\u7684headers key: header-A,header-B,header-C,<br />|
| httpPath | string      | \u6307\u5B9A\u7ED1\u5B9AserviceMethod\u7684http-path       | \u4F8B\uFF1A"/dubbo/hello" |
| httpMethods        | list of HTTP_METHOD_TYPE             | http-path\u7684\u8BF7\u6C42\u65B9\u5F0F               | \u4F8B\uFF1A"POST" |
| params | list of spec.dubbo.methods.params   | \u6307\u5B9A\u53C2\u6570\u63D0\u53D6\u65B9\u5F0F   |    |
| paramFromEntireBody | ParamFromEntireBody   | \u6307\u5B9A\u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86paramFromEntireBody\u548Cparams\uFF0Cparams\u5B57\u6BB5\u7684\u5185\u5BB9\u5C06\u88AB\u5FFD\u7565   |    |

### spec.dubbo.methods.params
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramKey    | string            | \u53C2\u6570\u540D\u79F0         | \u4F8B\uFF1A"p" |
| paramSource | PARAM_SOURCE_TYPE       | \u53C2\u6570\u6765\u6E90   |     "QUERY"       |
| paramType   | string |  Dubbo\u65B9\u6CD5\u5165\u53C2\u7684\u53C2\u6570\u7C7B\u578B  |  "java.lang.String"   |

### spec.dubbo.methods.paramFromEntireBody
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramType   | string |  Dubbo\u65B9\u6CD5\u5165\u53C2\u7684\u53C2\u6570\u7C7B\u578B  |  "java.lang.String"   |

### HTTP_METHOD_TYPE
| \u503C          | \u8BF4\u660E                  |
| ----------- | -------------------- |
| GET         |  http GET method     |
| POST        |  http POST method    |
| PUT         |  http PUT method     |
| DELETE      |  http DELETE method  |
| PATCH       |  http PATCH method   |

### PARAM_SOURCE_TYPE
| \u503C          | \u8BF4\u660E                 |
| ----------- | ------------------- |
| QUERY       |   http url param    |
| HEADER      |   http header       |
| PATH        |   http url path     |
| BODY        |   http request body |
`,a={title:"HTTP \u8F6C Dubbo \u914D\u7F6E\u8BF4\u660E",description:"HTTP \u8F6C Dubbo Http2Rpc \u76F8\u5173\u914D\u7F6E",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Dubbo","discovery"]},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/dubbo-http2rpc.md",rawData:void 0};export{s as _internal,r as body,e as collection,a as data,t as id,o as slug};
