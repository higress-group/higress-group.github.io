---
title: HTTP转Dubbo 配置说明
keywords: [Dubbo,discovery]
description: HTTP转Dubbo EnvoyFilter相关配置
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo-envoyfilter.md
---

# HTTP转Dubbo 配置说明
本文介绍了envoy.extensions.filters.http.http_dubbo_transcoder.v3.HttpDubboTranscoder这个Filter的相关配置项。
### HttpDubboTranscoder
| 字段                       | 类型                        | 说明                     | 值                                                                                                       |
| -------------------------- | --------------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------- |
| url_unescape_spec          | enum                        | URL unescaping policy    | 可选值：<br /> - ALL_CHARACTERS_EXCEPT_RESERVED<br />- ALL_CHARACTERS_EXCEPT_SLASH<br />- ALL_CHARACTERS |
| request_validation_options | RequestValidateOptions      | 请求验证选项             |                                                                                                          |
| services_mapping           | list of DubboServiceMapping | 每一项对应了一条映射规则 |                                                                                                          |
### HttpDubboTranscoder.RequestValidateOptions
| 字段                            | 类型 | 说明                                               |
| ------------------------------- | ---- | -------------------------------------------------- |
| reject_unknown_query_parameters | bool | 对于无法成功映射query parameters的请求是否直接拒绝 |
| reject_unknown_method           | bool | 对于无法映射为dubbo服务的请求是否直接拒绝          |
### HttpDubboTranscoder.DubboServiceMapping
| 字段           | 类型                       | 说明                                            | 值                                                          |
| -------------- | -------------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| name           | string                     | dubbo服务名                                     | 例如："com.alibaba.nacos.example.dubbo.service.DemoService" |
| version        | string                     | dubbo服务的版本                                 | 例如："1.0.0"                                               |
| group          | string                     | dubbo服务的分组                                 | 例如："dev"                                                 |
| method_mapping | list of DubboMethodMapping | 每一项对应了指定dubbo服务中的某个方法的映射规则 |                                                             |
### HttpDubboTranscoder.DubboMethodMapping
| 字段                | 类型                    | 说明                       | 值            |
| ------------------- | ----------------------- | -------------------------- | ------------- |
| name                | string                  | 方法名                     | 例："sayName" |
| path_matcher        | PathMatcher             | 方法匹配规则               |               |
| parameter_mapping   | lis of ParameterMapping | 每一项对应一个参数映射规则 |               |
| passthrough_setting | PassthroughSetting      | 指定Header透传规则         |               |
### HttpDubboTranscoder.DubboMethodMapping.PathMatcher
| 字段                   | 类型   | 说明                                 | 值                                                                                       |
| ---------------------- | ------ | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| match_pattern          | string | 方法的匹配路径｜例如："/dubbo/hello" |
| match_http_method_spec | enum   | 方法匹配的HTTP Method                | 可选值：<br />-ALL_GET<br />- ALL_POST<br />- ALL_PUT<br />- ALL_DELETE<br />- ALL_PATCH |
### HttpDubboTranscoder.DubboMethodMapping.ParameterMapping
| 字段             | 类型   | 说明                    | 值                                                                                    |
| ---------------- | ------ | ----------------------- | ------------------------------------------------------------------------------------- |
| extract_key_spec | enum   | 参数提取位置            | 可选值：<br />- ALL_QUERY_PARAMETER<br />- ALL_HEADER<br />- ALL_PATH<br />- ALL_BODY |
| extract_key      | string | 参数提取的key           | 例：my_param                                                                          |
| mapping_type     | string | 参数在dubbo服务中的类型 | 例："java.lang.String"                                                                |
### HttpDubboTranscoder.DubboMethodMapping.PassthroughSetting
配置HTTP Header透传规则，被透传的Header会被放在Dubbo调用的attachment中传给dubbo服务

注：Header的透传规则，此项配置为one of类型，下面两个字段选其一

| 字段                    | 类型           | 说明                                          |
| ----------------------- | -------------- | --------------------------------------------- |
| passthrough_all_headers | bool           | 透传所有Header                                |
| passthrough_headers     | list of string | 透传指定Header，每一项指定了Header中的一个key |
