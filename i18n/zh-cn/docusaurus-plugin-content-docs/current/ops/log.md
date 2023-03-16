---
title: 日志说明
keywords: [higress,log]
description: Higress 日志说明.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/log.md
---

# 日志说明

Higress 默认使用的日志格式为 JSON 格式，如下所示:

```json
{
	"authority": "%REQ(:AUTHORITY)%",
	"bytes_received": "%BYTES_RECEIVED%",
	"bytes_sent": "%BYTES_SENT%",
	"downstream_local_address": "%DOWNSTREAM_LOCAL_ADDRESS%",
	"downstream_remote_address": "%DOWNSTREAM_REMOTE_ADDRESS%",
	"duration": "%DURATION%",
	"method": "%REQ(:METHOD)%",
	"path": "%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%",
	"protocol": "%PROTOCOL%",
	"request_id": "%REQ(X-REQUEST-ID)%",
	"requested_server_name": "%REQUESTED_SERVER_NAME%",
	"response_code": "%RESPONSE_CODE%",
	"response_flags": "%RESPONSE_FLAGS%",
	"route_name": "%ROUTE_NAME%",
	"start_time": "%START_TIME%",
	"trace_id": "%REQ(X-B3-TRACEID)%",
	"upstream_cluster": "%UPSTREAM_CLUSTER%",
	"upstream_host": "%UPSTREAM_HOST%",
	"upstream_local_address": "%UPSTREAM_LOCAL_ADDRESS%",
	"upstream_service_time": "%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%",
	"upstream_transport_failure_reason": "%UPSTREAM_TRANSPORT_FAILURE_REASON%",
	"user_agent": "%REQ(USER-AGENT)%",
	"x_forwarded_for": "%REQ(X-FORWARDED-FOR)%"
}
```

Value 的配置含义可以参考[ envoy 日志说明](https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log)

| 字段名 | 类型 | 含义 |
| :------ | :---- | :---- |
| authority | string |	请求报文中的Host Header。|
| bytes_received |	long |	请求的Body大小（不包含Header）。|
| bytes_sent |	long |	响应的Body大小（不包含Header）。|
| downstream_local_address |	string |	网关Pod地址。|
| downstream_remote_address	| string |	连接到网关的Client端地址。|
| duration |	long |	请求整体耗时。|
| method |	string |	HTTP方法。|
| path |	string |	HTTP请求中的Path。|
| protocol |	string |	HTTP的协议版本。|
| request_id |	string |	网关会为每次请求产生一个ID，并放在Header的x-request-id中，后端可以根据这个字段记录并进行排查。|
| requested_server_name |	string |	SSL连接时使用的Server Name。|
| response_code |	long |	HTTP响应的状态码。|
| response_flags |	string |	响应失败的原因。|
| route_name |	string |	路由名。|
| start_time |	string |	请求开始时间。|
| trace_id |	string |	Trace ID。|
| upstream_cluster |	string |	上游集群。|
| upstream_host |	string |	上游IP。|
| upstream_local_address |	string |	本地连接上游的地址。|
| upstream_service_time |	long |	最后一次调用上游服务的时间。|
| upstream_transport_failure_reason |	string |	上游链接失败的原因。|
| user_agent |	string |	HTTP Header中的UserAgent。|
| x_forwarded_for |	string |	HTTP Header中的x-forwarded-for，通常用来表示HTTP请求端真实IP。|
