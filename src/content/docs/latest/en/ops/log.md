---
title: Log Description
keywords: [higress,log]
description: Higress Log Description.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/log.md
---

# Log Description

Custom log fields can be configured using the following command to edit the accessLogFormat field under the mesh field:

```bash
kubectl edit cm -n higress-system higress-config
```

To view logs, you can use the following command:

```bash
kubectl logs -n higress-system -l app=higress-gateway  --since=5m
```

Higress uses JSON format for logs by default, as shown below:

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

For the meaning of the Value configuration, please refer to [Envoy Log Documentation](https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log)

| Field Name | Type | Meaning |
| :------ | :---- | :---- |
| authority | string | Host Header in the request message. |
| bytes_received | long | Size of the request body (excluding Header). |
| bytes_sent | long | Size of the response body (excluding Header). |
| downstream_local_address | string | Gateway Pod address. |
| downstream_remote_address | string | Client address connected to the gateway. |
| duration | long | Overall request duration. |
| method | string | HTTP method. |
| path | string | Path in the HTTP request. |
| protocol | string | HTTP protocol version. |
| request_id | string | The gateway generates an ID for each request and places it in the x-request-id header, which can be used by the backend for logging and troubleshooting. |
| requested_server_name | string | Server Name used during SSL connection. |
| response_code | long | HTTP response status code. |
| response_flags | string | Reason for response failure. |
| route_name | string | Route name. |
| start_time | string | Request start time. |
| trace_id | string | Trace ID. |
| upstream_cluster | string | Upstream cluster. |
| upstream_host | string | Upstream IP. |
| upstream_local_address | string | Local address connecting to the upstream. |
| upstream_service_time | long | Time of the last call to the upstream service. |
| upstream_transport_failure_reason | string | Reason for upstream connection failure. |
| user_agent | string | UserAgent in the HTTP Header. |
| x_forwarded_for | string | x-forwarded-for in the HTTP Header, typically used to represent the real IP of the HTTP request client. |