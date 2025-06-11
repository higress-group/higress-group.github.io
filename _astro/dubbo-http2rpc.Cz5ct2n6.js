const e="latest/en/user/dubbo-http2rpc.md",t="docs",r="latest/en/user/dubbo-http2rpc",o=`
# HTTP to Dubbo Configuration Guide

This document describes the configuration options for the Http2Rpc Custom Resource Definition (CRD).

### spec.dubbo
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| service     | string    | Dubbo interface name | e.g., "com.alibaba.nacos.example.dubbo.service.DemoService" |
| version     | string   | Dubbo service version   | e.g., "1.0.0" |
| group       | string   | Dubbo service group   | e.g., "dev" |
| methods     | []Method | List of method mapping rules |  |

### spec.dubbo.methods
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| serviceMethod | string | Method name of the Dubbo service interface | e.g., "sayName" |
| headersAttach | string | HTTP headers to be passed through | 1. Empty: No headers will be passed<br />2. "*": All headers will be passed<br />3. Comma-separated list of header keys: header-A,header-B,header-C |
| httpPath | string | HTTP path bound to the serviceMethod | e.g., "/dubbo/hello" |
| httpMethods | []HTTP_METHOD_TYPE | HTTP methods allowed for the httpPath | e.g., ["POST"] |
| params | []Param | Parameter extraction configuration | |
| paramFromEntireBody | ParamFromEntireBody | Use the entire request body as a parameter. If both paramFromEntireBody and params are configured, the params field will be ignored | |

### spec.dubbo.methods.params
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramKey    | string | Parameter name | e.g., "p" |
| paramSource | PARAM_SOURCE_TYPE | Parameter source | e.g., "QUERY" |
| paramType   | string | Parameter type for the Dubbo method | e.g., "java.lang.String" |

### spec.dubbo.methods.paramFromEntireBody
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramType   | string | Parameter type for the Dubbo method | e.g., "java.lang.String" |

### HTTP_METHOD_TYPE
| Value       | Description                 |
| ----------- | --------------------------- |
| GET         | HTTP GET method             |
| POST        | HTTP POST method            |
| PUT         | HTTP PUT method             |
| DELETE      | HTTP DELETE method          |
| PATCH       | HTTP PATCH method           |

### PARAM_SOURCE_TYPE
| Value       | Description                 |
| ----------- | --------------------------- |
| QUERY       | HTTP URL query parameters   |
| HEADER      | HTTP headers                |
| PATH        | HTTP URL path variables     |
| BODY        | HTTP request body           |
`,a={title:"HTTP to Dubbo Configuration Guide",description:"Configuration reference for HTTP to Dubbo (Http2Rpc) integration",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Dubbo","discovery","HTTP","RPC"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/dubbo-http2rpc.md",rawData:void 0};export{i as _internal,o as body,t as collection,a as data,e as id,r as slug};
