import{c as p,__tla as E}from"./astro-component.cI6d52vQ.js";import{r as o,m as c,u as _,__tla as g}from"./constant.D5wTx7Ue.js";import{__tla as y}from"./astro/assets-service.Da9pL5MS.js";let t,d,e,a,i,r,n,f=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let s;s=`<p>\u67E5\u770B\u65E5\u5FD7\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-l</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">app=higress-gateway</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--since=5m</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs -n higress-system -l app=higress-gateway  --since=5m"><div></div></button></div></figure></div>
<p>Higress \u9ED8\u8BA4\u4F7F\u7528\u7684\u65E5\u5FD7\u683C\u5F0F\u4E3A JSON \u683C\u5F0F\uFF0C\u5982\u4E0B\u6240\u793A:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"authority"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(:AUTHORITY)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"bytes_received"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%BYTES_RECEIVED%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"bytes_sent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%BYTES_SENT%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"downstream_local_address"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%DOWNSTREAM_LOCAL_ADDRESS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"downstream_remote_address"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%DOWNSTREAM_REMOTE_ADDRESS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"duration"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%DURATION%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"method"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(:METHOD)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"path"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"protocol"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%PROTOCOL%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"request_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-REQUEST-ID)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"requested_server_name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQUESTED_SERVER_NAME%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"response_code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%RESPONSE_CODE%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"response_flags"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%RESPONSE_FLAGS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"route_name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%ROUTE_NAME%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"start_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%START_TIME%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"trace_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-B3-TRACEID)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_cluster"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_CLUSTER%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_host"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_HOST%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_local_address"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_LOCAL_ADDRESS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_service_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_transport_failure_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_TRANSPORT_FAILURE_REASON%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"user_agent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(USER-AGENT)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"x_forwarded_for"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-FORWARDED-FOR)%"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;authority&#x22;: &#x22;%REQ(:AUTHORITY)%&#x22;,\x7F  &#x22;bytes_received&#x22;: &#x22;%BYTES_RECEIVED%&#x22;,\x7F  &#x22;bytes_sent&#x22;: &#x22;%BYTES_SENT%&#x22;,\x7F  &#x22;downstream_local_address&#x22;: &#x22;%DOWNSTREAM_LOCAL_ADDRESS%&#x22;,\x7F  &#x22;downstream_remote_address&#x22;: &#x22;%DOWNSTREAM_REMOTE_ADDRESS%&#x22;,\x7F  &#x22;duration&#x22;: &#x22;%DURATION%&#x22;,\x7F  &#x22;method&#x22;: &#x22;%REQ(:METHOD)%&#x22;,\x7F  &#x22;path&#x22;: &#x22;%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%&#x22;,\x7F  &#x22;protocol&#x22;: &#x22;%PROTOCOL%&#x22;,\x7F  &#x22;request_id&#x22;: &#x22;%REQ(X-REQUEST-ID)%&#x22;,\x7F  &#x22;requested_server_name&#x22;: &#x22;%REQUESTED_SERVER_NAME%&#x22;,\x7F  &#x22;response_code&#x22;: &#x22;%RESPONSE_CODE%&#x22;,\x7F  &#x22;response_flags&#x22;: &#x22;%RESPONSE_FLAGS%&#x22;,\x7F  &#x22;route_name&#x22;: &#x22;%ROUTE_NAME%&#x22;,\x7F  &#x22;start_time&#x22;: &#x22;%START_TIME%&#x22;,\x7F  &#x22;trace_id&#x22;: &#x22;%REQ(X-B3-TRACEID)%&#x22;,\x7F  &#x22;upstream_cluster&#x22;: &#x22;%UPSTREAM_CLUSTER%&#x22;,\x7F  &#x22;upstream_host&#x22;: &#x22;%UPSTREAM_HOST%&#x22;,\x7F  &#x22;upstream_local_address&#x22;: &#x22;%UPSTREAM_LOCAL_ADDRESS%&#x22;,\x7F  &#x22;upstream_service_time&#x22;: &#x22;%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%&#x22;,\x7F  &#x22;upstream_transport_failure_reason&#x22;: &#x22;%UPSTREAM_TRANSPORT_FAILURE_REASON%&#x22;,\x7F  &#x22;user_agent&#x22;: &#x22;%REQ(USER-AGENT)%&#x22;,\x7F  &#x22;x_forwarded_for&#x22;: &#x22;%REQ(X-FORWARDED-FOR)%&#x22;\x7F}"><div></div></button></div></figure></div>
<p>Value \u7684\u914D\u7F6E\u542B\u4E49\u53EF\u4EE5\u53C2\u8003<a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"> envoy \u65E5\u5FD7\u8BF4\u660E</a></p>





























































































































<table><thead><tr><th align="left">\u5B57\u6BB5\u540D</th><th align="left">\u7C7B\u578B</th><th align="left">\u542B\u4E49</th></tr></thead><tbody><tr><td align="left">authority</td><td align="left">string</td><td align="left">\u8BF7\u6C42\u62A5\u6587\u4E2D\u7684Host Header\u3002</td></tr><tr><td align="left">bytes_received</td><td align="left">long</td><td align="left">\u8BF7\u6C42\u7684Body\u5927\u5C0F\uFF08\u4E0D\u5305\u542BHeader\uFF09\u3002</td></tr><tr><td align="left">bytes_sent</td><td align="left">long</td><td align="left">\u54CD\u5E94\u7684Body\u5927\u5C0F\uFF08\u4E0D\u5305\u542BHeader\uFF09\u3002</td></tr><tr><td align="left">downstream_local_address</td><td align="left">string</td><td align="left">\u7F51\u5173Pod\u5730\u5740\u3002</td></tr><tr><td align="left">downstream_remote_address</td><td align="left">string</td><td align="left">\u8FDE\u63A5\u5230\u7F51\u5173\u7684Client\u7AEF\u5730\u5740\u3002</td></tr><tr><td align="left">duration</td><td align="left">long</td><td align="left">\u8BF7\u6C42\u6574\u4F53\u8017\u65F6\u3002</td></tr><tr><td align="left">method</td><td align="left">string</td><td align="left">HTTP\u65B9\u6CD5\u3002</td></tr><tr><td align="left">path</td><td align="left">string</td><td align="left">HTTP\u8BF7\u6C42\u4E2D\u7684Path\u3002</td></tr><tr><td align="left">protocol</td><td align="left">string</td><td align="left">HTTP\u7684\u534F\u8BAE\u7248\u672C\u3002</td></tr><tr><td align="left">request_id</td><td align="left">string</td><td align="left">\u7F51\u5173\u4F1A\u4E3A\u6BCF\u6B21\u8BF7\u6C42\u4EA7\u751F\u4E00\u4E2AID\uFF0C\u5E76\u653E\u5728Header\u7684x-request-id\u4E2D\uFF0C\u540E\u7AEF\u53EF\u4EE5\u6839\u636E\u8FD9\u4E2A\u5B57\u6BB5\u8BB0\u5F55\u5E76\u8FDB\u884C\u6392\u67E5\u3002</td></tr><tr><td align="left">requested_server_name</td><td align="left">string</td><td align="left">SSL\u8FDE\u63A5\u65F6\u4F7F\u7528\u7684Server Name\u3002</td></tr><tr><td align="left">response_code</td><td align="left">long</td><td align="left">HTTP\u54CD\u5E94\u7684\u72B6\u6001\u7801\u3002</td></tr><tr><td align="left">response_flags</td><td align="left">string</td><td align="left">\u54CD\u5E94\u5931\u8D25\u7684\u539F\u56E0\u3002</td></tr><tr><td align="left">route_name</td><td align="left">string</td><td align="left">\u8DEF\u7531\u540D\u3002</td></tr><tr><td align="left">start_time</td><td align="left">string</td><td align="left">\u8BF7\u6C42\u5F00\u59CB\u65F6\u95F4\u3002</td></tr><tr><td align="left">trace_id</td><td align="left">string</td><td align="left">Trace ID\u3002</td></tr><tr><td align="left">upstream_cluster</td><td align="left">string</td><td align="left">\u4E0A\u6E38\u96C6\u7FA4\u3002</td></tr><tr><td align="left">upstream_host</td><td align="left">string</td><td align="left">\u4E0A\u6E38IP\u3002</td></tr><tr><td align="left">upstream_local_address</td><td align="left">string</td><td align="left">\u672C\u5730\u8FDE\u63A5\u4E0A\u6E38\u7684\u5730\u5740\u3002</td></tr><tr><td align="left">upstream_service_time</td><td align="left">long</td><td align="left">\u6700\u540E\u4E00\u6B21\u8C03\u7528\u4E0A\u6E38\u670D\u52A1\u7684\u65F6\u95F4\u3002</td></tr><tr><td align="left">upstream_transport_failure_reason</td><td align="left">string</td><td align="left">\u4E0A\u6E38\u94FE\u63A5\u5931\u8D25\u7684\u539F\u56E0\u3002</td></tr><tr><td align="left">user_agent</td><td align="left">string</td><td align="left">HTTP Header\u4E2D\u7684UserAgent\u3002</td></tr><tr><td align="left">x_forwarded_for</td><td align="left">string</td><td align="left">HTTP Header\u4E2D\u7684x-forwarded-for\uFF0C\u901A\u5E38\u7528\u6765\u8868\u793AHTTP\u8BF7\u6C42\u7AEF\u771F\u5B9EIP\u3002</td></tr></tbody></table>`,a={title:"\u65E5\u5FD7\u8BF4\u660E",keywords:["higress","log"],description:"Higress \u65E5\u5FD7\u8BF4\u660E.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/log.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/log.md",n=void 0,r=function(){return`
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

`},d=function(){return s},i=function(){return[]},t=p((v,x,R)=>{const{layout:T,...l}=a;return l.file=e,l.url=n,o`${c()}${_(s)}`})});export{t as Content,f as __tla,d as compiledContent,t as default,e as file,a as frontmatter,i as getHeadings,r as rawContent,n as url};
