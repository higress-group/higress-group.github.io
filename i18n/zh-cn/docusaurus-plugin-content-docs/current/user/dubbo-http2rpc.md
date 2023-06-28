---
title: HTTP转Dubbo 配置说明
keywords: [Dubbo,discovery]
description: HTTP转Dubbo Http2Rpc相关配置
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo-http2rpc.md
---

# HTTP转Dubbo 配置说明
本文介绍了Http2Rpc这个自定义CRD的相关配置项。
### spec.dubbo
| 字段         | 类型        |            说明              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| service     | the dubbo interface name    | dubbo服务接口名 | 例如："com.alibaba.nacos.example.dubbo.service.DemoService" |
| version     | the dubbo service version   | dubbo服务版本号 | 例如："1.0.0" |
| methods     | list of spec.dubbo.methods | 每一项对应了一条方法映射规则 |  |

### spec.dubbo.methods
| 字段         | 类型        |            说明              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| group                | string                  | 方法名                     | 例："dev" |
| serviceMethod        | HTTP_METHOD_TYPE             | 方法匹配规则               | 例："sayName" |
| headersAttach   | string | 需要透传的http headers | 1、空: 不设置表示不透传任何值;<br />2、*: 表示透传所有headers;<br /> 3、用英文逗号隔开需要透出的headers key: header-A,header-B,header-C,<br />|
| httpPath | string      | 指定绑定serviceMethod的http-path       | 例："/dubbo/hello" |
| params | list of spec.dubbo.methods.params   | 指定参数提取方式   |    |

### spec.dubbo.methods.params
| 字段         | 类型        |            说明              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramKey    | string            | 参数名称         | 例："p" |
| paramSource | PARAM_SOURCE_TYPE       | 参数来源   |     "QUERY"       |
| paramType   | string |  Dubbo方法入参的参数类型  |  "java.lang.String"   |

### HTTP_METHOD_TYPE
| 值          | 说明                  |
| ----------- | -------------------- |
| GET         |  http GET method     |
| POST        |  http POST method    |
| PUT         |  http PUT method     |
| DELETE      |  http DELETE method  |
| PATCH       |  http PATCH method   |

### PARAM_SOURCE_TYPE
| 值          | 说明                 |
| ----------- | ------------------- |
| QUERY       |   http url param    |
| HEADER      |   http header       |
| PATH        |   http url path     |
| BODY        |   http request body |