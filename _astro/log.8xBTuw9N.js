import{c as p,__tla as o}from"./astro-component.m4CCZO6J.js";import{r as E,m as c,u as g,__tla as _}from"./constant.B6p3iceL.js";import{__tla as f}from"./astro/assets-service.BhtN0nM5.js";let e,d,t,a,i,r,n,y=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return _}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<p>Custom log fields can be configured using the following command to edit the accessLogFormat field under the mesh field:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">edit</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">cm</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-config</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl edit cm -n higress-system higress-config"><div></div></button></div></figure></div>
<p>To view logs, you can use the following command:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">logs</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-l</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">app=higress-gateway</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">--since=5m</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl logs -n higress-system -l app=higress-gateway  --since=5m"><div></div></button></div></figure></div>
<p>Higress uses JSON format for logs by default, as shown below:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"authority"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(:AUTHORITY)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"bytes_received"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%BYTES_RECEIVED%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"bytes_sent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%BYTES_SENT%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"downstream_local_address"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%DOWNSTREAM_LOCAL_ADDRESS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"downstream_remote_address"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%DOWNSTREAM_REMOTE_ADDRESS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"duration"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%DURATION%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"method"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(:METHOD)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"path"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"protocol"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%PROTOCOL%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"request_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-REQUEST-ID)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"requested_server_name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQUESTED_SERVER_NAME%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"response_code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%RESPONSE_CODE%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"response_flags"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%RESPONSE_FLAGS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"route_name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%ROUTE_NAME%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"start_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%START_TIME%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"trace_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-B3-TRACEID)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_cluster"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_CLUSTER%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_host"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_HOST%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_local_address"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_LOCAL_ADDRESS%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_service_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"upstream_transport_failure_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%UPSTREAM_TRANSPORT_FAILURE_REASON%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"user_agent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(USER-AGENT)%"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"x_forwarded_for"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"%REQ(X-FORWARDED-FOR)%"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;authority&#x22;: &#x22;%REQ(:AUTHORITY)%&#x22;,\x7F  &#x22;bytes_received&#x22;: &#x22;%BYTES_RECEIVED%&#x22;,\x7F  &#x22;bytes_sent&#x22;: &#x22;%BYTES_SENT%&#x22;,\x7F  &#x22;downstream_local_address&#x22;: &#x22;%DOWNSTREAM_LOCAL_ADDRESS%&#x22;,\x7F  &#x22;downstream_remote_address&#x22;: &#x22;%DOWNSTREAM_REMOTE_ADDRESS%&#x22;,\x7F  &#x22;duration&#x22;: &#x22;%DURATION%&#x22;,\x7F  &#x22;method&#x22;: &#x22;%REQ(:METHOD)%&#x22;,\x7F  &#x22;path&#x22;: &#x22;%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%&#x22;,\x7F  &#x22;protocol&#x22;: &#x22;%PROTOCOL%&#x22;,\x7F  &#x22;request_id&#x22;: &#x22;%REQ(X-REQUEST-ID)%&#x22;,\x7F  &#x22;requested_server_name&#x22;: &#x22;%REQUESTED_SERVER_NAME%&#x22;,\x7F  &#x22;response_code&#x22;: &#x22;%RESPONSE_CODE%&#x22;,\x7F  &#x22;response_flags&#x22;: &#x22;%RESPONSE_FLAGS%&#x22;,\x7F  &#x22;route_name&#x22;: &#x22;%ROUTE_NAME%&#x22;,\x7F  &#x22;start_time&#x22;: &#x22;%START_TIME%&#x22;,\x7F  &#x22;trace_id&#x22;: &#x22;%REQ(X-B3-TRACEID)%&#x22;,\x7F  &#x22;upstream_cluster&#x22;: &#x22;%UPSTREAM_CLUSTER%&#x22;,\x7F  &#x22;upstream_host&#x22;: &#x22;%UPSTREAM_HOST%&#x22;,\x7F  &#x22;upstream_local_address&#x22;: &#x22;%UPSTREAM_LOCAL_ADDRESS%&#x22;,\x7F  &#x22;upstream_service_time&#x22;: &#x22;%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%&#x22;,\x7F  &#x22;upstream_transport_failure_reason&#x22;: &#x22;%UPSTREAM_TRANSPORT_FAILURE_REASON%&#x22;,\x7F  &#x22;user_agent&#x22;: &#x22;%REQ(USER-AGENT)%&#x22;,\x7F  &#x22;x_forwarded_for&#x22;: &#x22;%REQ(X-FORWARDED-FOR)%&#x22;\x7F}"><div></div></button></div></figure></div>
<p>For the meaning of the Value configuration, please refer to <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/observability/access_log/usage#config-access-log" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Envoy Log Documentation</a></p>





























































































































<table><thead><tr><th align="left">Field Name</th><th align="left">Type</th><th align="left">Meaning</th></tr></thead><tbody><tr><td align="left">authority</td><td align="left">string</td><td align="left">Host Header in the request message.</td></tr><tr><td align="left">bytes_received</td><td align="left">long</td><td align="left">Size of the request body (excluding Header).</td></tr><tr><td align="left">bytes_sent</td><td align="left">long</td><td align="left">Size of the response body (excluding Header).</td></tr><tr><td align="left">downstream_local_address</td><td align="left">string</td><td align="left">Gateway Pod address.</td></tr><tr><td align="left">downstream_remote_address</td><td align="left">string</td><td align="left">Client address connected to the gateway.</td></tr><tr><td align="left">duration</td><td align="left">long</td><td align="left">Overall request duration.</td></tr><tr><td align="left">method</td><td align="left">string</td><td align="left">HTTP method.</td></tr><tr><td align="left">path</td><td align="left">string</td><td align="left">Path in the HTTP request.</td></tr><tr><td align="left">protocol</td><td align="left">string</td><td align="left">HTTP protocol version.</td></tr><tr><td align="left">request_id</td><td align="left">string</td><td align="left">The gateway generates an ID for each request and places it in the x-request-id header, which can be used by the backend for logging and troubleshooting.</td></tr><tr><td align="left">requested_server_name</td><td align="left">string</td><td align="left">Server Name used during SSL connection.</td></tr><tr><td align="left">response_code</td><td align="left">long</td><td align="left">HTTP response status code.</td></tr><tr><td align="left">response_flags</td><td align="left">string</td><td align="left">Reason for response failure.</td></tr><tr><td align="left">route_name</td><td align="left">string</td><td align="left">Route name.</td></tr><tr><td align="left">start_time</td><td align="left">string</td><td align="left">Request start time.</td></tr><tr><td align="left">trace_id</td><td align="left">string</td><td align="left">Trace ID.</td></tr><tr><td align="left">upstream_cluster</td><td align="left">string</td><td align="left">Upstream cluster.</td></tr><tr><td align="left">upstream_host</td><td align="left">string</td><td align="left">Upstream IP.</td></tr><tr><td align="left">upstream_local_address</td><td align="left">string</td><td align="left">Local address connecting to the upstream.</td></tr><tr><td align="left">upstream_service_time</td><td align="left">long</td><td align="left">Time of the last call to the upstream service.</td></tr><tr><td align="left">upstream_transport_failure_reason</td><td align="left">string</td><td align="left">Reason for upstream connection failure.</td></tr><tr><td align="left">user_agent</td><td align="left">string</td><td align="left">UserAgent in the HTTP Header.</td></tr><tr><td align="left">x_forwarded_for</td><td align="left">string</td><td align="left">x-forwarded-for in the HTTP Header, typically used to represent the real IP of the HTTP request client.</td></tr></tbody></table>`,a={title:"Log Description",keywords:["higress","log"],description:"Higress Log Description.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/log.md"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/log.md",n=void 0,r=function(){return`
# Log Description

Custom log fields can be configured using the following command to edit the accessLogFormat field under the mesh field:

\`\`\`bash
kubectl edit cm -n higress-system higress-config
\`\`\`

To view logs, you can use the following command:

\`\`\`bash
kubectl logs -n higress-system -l app=higress-gateway  --since=5m
\`\`\`

Higress uses JSON format for logs by default, as shown below:

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
| x_forwarded_for | string | x-forwarded-for in the HTTP Header, typically used to represent the real IP of the HTTP request client. |`},d=function(){return s},i=function(){return[]},e=p((u,v,m)=>{const{layout:x,...l}=a;return l.file=t,l.url=n,E`${c()}${g(s)}`})});export{e as Content,y as __tla,d as compiledContent,e as default,t as file,a as frontmatter,i as getHeadings,r as rawContent,n as url};
