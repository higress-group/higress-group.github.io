const e="latest/zh-cn/ops/log.md",s="docs",r="latest/zh-cn/ops/log",t=`
# \u65E5\u5FD7\u8BF4\u660E

\u67E5\u770B\u65E5\u5FD7\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4:

\`\`\`bash
kubectl logs -n higress-system -l app=higress-gateway  --since=5m
\`\`\`


Higress \u9ED8\u8BA4\u4F7F\u7528\u7684\u65E5\u5FD7\u683C\u5F0F\u4E3A JSON \u683C\u5F0F\uFF0C\u5982\u4E0B\u6240\u793A:

\`\`\`json
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
\`\`\`

Value \u7684\u914D\u7F6E\u542B\u4E49\u53EF\u4EE5\u53C2\u8003[ envoy \u65E5\u5FD7\u8BF4\u660E](https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log)

| \u5B57\u6BB5\u540D | \u7C7B\u578B | \u542B\u4E49 |
| :------ | :---- | :---- |
| authority | string |	\u8BF7\u6C42\u62A5\u6587\u4E2D\u7684Host Header\u3002|
| bytes_received |	long |	\u8BF7\u6C42\u7684Body\u5927\u5C0F\uFF08\u4E0D\u5305\u542BHeader\uFF09\u3002|
| bytes_sent |	long |	\u54CD\u5E94\u7684Body\u5927\u5C0F\uFF08\u4E0D\u5305\u542BHeader\uFF09\u3002|
| downstream_local_address |	string |	\u7F51\u5173Pod\u5730\u5740\u3002|
| downstream_remote_address	| string |	\u8FDE\u63A5\u5230\u7F51\u5173\u7684Client\u7AEF\u5730\u5740\u3002|
| duration |	long |	\u8BF7\u6C42\u6574\u4F53\u8017\u65F6\u3002|
| method |	string |	HTTP\u65B9\u6CD5\u3002|
| path |	string |	HTTP\u8BF7\u6C42\u4E2D\u7684Path\u3002|
| protocol |	string |	HTTP\u7684\u534F\u8BAE\u7248\u672C\u3002|
| request_id |	string |	\u7F51\u5173\u4F1A\u4E3A\u6BCF\u6B21\u8BF7\u6C42\u4EA7\u751F\u4E00\u4E2AID\uFF0C\u5E76\u653E\u5728Header\u7684x-request-id\u4E2D\uFF0C\u540E\u7AEF\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u5B57\u6BB5\u8BB0\u5F55\u5E76\u8FDB\u884C\u6392\u67E5\u3002|
| requested_server_name |	string |	SSL\u8FDE\u63A5\u65F6\u4F7F\u7528\u7684Server Name\u3002|
| response_code |	long |	HTTP\u54CD\u5E94\u7684\u72B6\u6001\u7801\u3002|
| response_flags |	string |	\u54CD\u5E94\u5931\u8D25\u7684\u539F\u56E0\u3002|
| route_name |	string |	\u8DEF\u7531\u540D\u3002|
| start_time |	string |	\u8BF7\u6C42\u5F00\u59CB\u65F6\u95F4\u3002|
| trace_id |	string |	Trace ID\u3002|
| upstream_cluster |	string |	\u4E0A\u6E38\u96C6\u7FA4\u3002|
| upstream_host |	string |	\u4E0A\u6E38IP\u3002|
| upstream_local_address |	string |	\u672C\u5730\u8FDE\u63A5\u4E0A\u6E38\u7684\u5730\u5740\u3002|
| upstream_service_time |	long |	\u6700\u540E\u4E00\u6B21\u8C03\u7528\u4E0A\u6E38\u670D\u52A1\u7684\u65F6\u95F4\u3002|
| upstream_transport_failure_reason |	string |	\u4E0A\u6E38\u94FE\u63A5\u5931\u8D25\u7684\u539F\u56E0\u3002|
| user_agent |	string |	HTTP Header\u4E2D\u7684UserAgent\u3002|
| x_forwarded_for |	string |	HTTP Header\u4E2D\u7684x-forwarded-for\uFF0C\u901A\u5E38\u7528\u6765\u8868\u793AHTTP\u8BF7\u6C42\u7AEF\u771F\u5B9EIP\u3002|

`,a={title:"\u65E5\u5FD7\u8BF4\u660E",description:"Higress \u65E5\u5FD7\u8BF4\u660E.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","log"]},o={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/log.md",rawData:void 0};export{o as _internal,t as body,s as collection,a as data,e as id,r as slug};
