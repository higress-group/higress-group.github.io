import{c,__tla as o}from"./astro-component.cI6d52vQ.js";import{r,m as E,u as x,__tla as v}from"./constant.Cp8Tfy_u.js";import{__tla as _}from"./astro/assets-service.Da9pL5MS.js";let e,i,a,n,l,d,t,y=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>\u76F8\u6BD4\u4E8E\u4F20\u7EDF\u5FAE\u670D\u52A1\uFF0CLLM \u5E94\u7528\u4E2D\u4E3B\u8981\u901A\u8FC7 token \u6765\u8861\u91CF\u6D41\u91CF\u5927\u5C0F\uFF0C\u9488\u5BF9\u6B64\u7279\u70B9\uFF0CAI \u7EDF\u8BA1\u63D2\u4EF6\u63D0\u4F9B\u4E86\u8DEF\u7531\u7EA7\u3001\u670D\u52A1\u7EA7\u3001\u6A21\u578B\u7EA7\u7684 token \u7528\u91CF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5305\u62EC\u65E5\u5FD7\u3001\u76D1\u63A7\u4EE5\u53CA\u544A\u8B66\u3002 AI \u7EDF\u8BA1\u63D2\u4EF6\u9700\u8981\u5BF9\u63A5 ai-proxy \u63D2\u4EF6\uFF0C\u5982\u679C\u4E0D\u63A5 ai-proxy \u63D2\u4EF6\u7684\u8BDD\uFF0C\u5219\u53EA\u652F\u6301 openai \u534F\u8BAE\u3002</p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">enable</code></td><td>bool</td><td>\u5FC5\u586B</td><td>-</td><td>\u662F\u5426\u5F00\u542Fai\u7EDF\u8BA1\u529F\u80FD</td></tr></tbody></table>
<p>\u5F00\u542F\u540E metrics \u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_input_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 21</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">route_upstream_model_output_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 17</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="route_upstream_model_input_token{ai_route=&#x22;openai&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 21\x7Froute_upstream_model_output_token{ai_route=&#x22;openai&#x22;,ai_cluster=&#x22;qwen&#x22;,ai_model=&#x22;qwen-max&#x22;} 17"><div></div></button></div></figure></div>
<p>\u65E5\u5FD7\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"input_token"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"21"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"output_token"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"17"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"authority"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"dashscope.aliyuncs.com"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"bytes_received"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"336"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"bytes_sent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1675"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"duration"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1590"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"istio_policy_status"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"method"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"POST"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"path"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/v1/chat/completions"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"protocol"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"HTTP/1.1"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"request_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"5895f5a9-e4e3-425b-98db-6c6a926195b7"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"requested_server_name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"response_code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"200"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"response_flags"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"route_name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"openai"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"start_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"2024-06-18T09:37:14.078Z"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"trace_id"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"upstream_cluster"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"upstream_service_time"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"496"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"upstream_transport_failure_reason"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"-"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"user_agent"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"PostmanRuntime/7.37.3"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"x_forwarded_for"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"-"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F    &#x22;model&#x22;: &#x22;qwen-max&#x22;,\x7F    &#x22;input_token&#x22;: &#x22;21&#x22;,\x7F    &#x22;output_token&#x22;: &#x22;17&#x22;,\x7F    &#x22;authority&#x22;: &#x22;dashscope.aliyuncs.com&#x22;,\x7F    &#x22;bytes_received&#x22;: &#x22;336&#x22;,\x7F    &#x22;bytes_sent&#x22;: &#x22;1675&#x22;,\x7F    &#x22;duration&#x22;: &#x22;1590&#x22;,\x7F    &#x22;istio_policy_status&#x22;: &#x22;-&#x22;,\x7F    &#x22;method&#x22;: &#x22;POST&#x22;,\x7F    &#x22;path&#x22;: &#x22;/v1/chat/completions&#x22;,\x7F    &#x22;protocol&#x22;: &#x22;HTTP/1.1&#x22;,\x7F    &#x22;request_id&#x22;: &#x22;5895f5a9-e4e3-425b-98db-6c6a926195b7&#x22;,\x7F    &#x22;requested_server_name&#x22;: &#x22;-&#x22;,\x7F    &#x22;response_code&#x22;: &#x22;200&#x22;,\x7F    &#x22;response_flags&#x22;: &#x22;-&#x22;,\x7F    &#x22;route_name&#x22;: &#x22;openai&#x22;,\x7F    &#x22;start_time&#x22;: &#x22;2024-06-18T09:37:14.078Z&#x22;,\x7F    &#x22;trace_id&#x22;: &#x22;-&#x22;,\x7F    &#x22;upstream_cluster&#x22;: &#x22;qwen&#x22;,\x7F    &#x22;upstream_service_time&#x22;: &#x22;496&#x22;,\x7F    &#x22;upstream_transport_failure_reason&#x22;: &#x22;-&#x22;,\x7F    &#x22;user_agent&#x22;: &#x22;PostmanRuntime/7.37.3&#x22;,\x7F    &#x22;x_forwarded_for&#x22;: &#x22;-&#x22;\x7F}"><div></div></button></div></figure></div>`,n={title:"AI \u7EDF\u8BA1",keywords:["higress","ai"],description:"AI \u7EDF\u8BA1\u63D2\u4EF6\u63D0\u4F9B\u4E86\u8DEF\u7531\u7EA7\u3001\u670D\u52A1\u7EA7\u3001\u6A21\u578B\u7EA7\u7684 token \u7528\u91CF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5305\u62EC\u65E5\u5FD7\u3001\u76D1\u63A7\u4EE5\u53CA\u544A\u8B66\u3002"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-statistics.md",t=void 0,d=function(){return`
## \u529F\u80FD\u8BF4\u660E

\u76F8\u6BD4\u4E8E\u4F20\u7EDF\u5FAE\u670D\u52A1\uFF0CLLM \u5E94\u7528\u4E2D\u4E3B\u8981\u901A\u8FC7 token \u6765\u8861\u91CF\u6D41\u91CF\u5927\u5C0F\uFF0C\u9488\u5BF9\u6B64\u7279\u70B9\uFF0CAI \u7EDF\u8BA1\u63D2\u4EF6\u63D0\u4F9B\u4E86\u8DEF\u7531\u7EA7\u3001\u670D\u52A1\u7EA7\u3001\u6A21\u578B\u7EA7\u7684 token \u7528\u91CF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5305\u62EC\u65E5\u5FD7\u3001\u76D1\u63A7\u4EE5\u53CA\u544A\u8B66\u3002 AI \u7EDF\u8BA1\u63D2\u4EF6\u9700\u8981\u5BF9\u63A5 ai-proxy \u63D2\u4EF6\uFF0C\u5982\u679C\u4E0D\u63A5 ai-proxy \u63D2\u4EF6\u7684\u8BDD\uFF0C\u5219\u53EA\u652F\u6301 openai \u534F\u8BAE\u3002

## \u914D\u7F6E\u8BF4\u660E

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0               |
|------------|--------|------|-----|------------------|
| \`enable\` | bool | \u5FC5\u586B   | -   | \u662F\u5426\u5F00\u542Fai\u7EDF\u8BA1\u529F\u80FD |

\u5F00\u542F\u540E metrics \u793A\u4F8B\uFF1A
\`\`\`
route_upstream_model_input_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 21
route_upstream_model_output_token{ai_route="openai",ai_cluster="qwen",ai_model="qwen-max"} 17
\`\`\`

\u65E5\u5FD7\u793A\u4F8B\uFF1A

\`\`\`json
{
    "model": "qwen-max",
    "input_token": "21",
    "output_token": "17",
    "authority": "dashscope.aliyuncs.com",
    "bytes_received": "336",
    "bytes_sent": "1675",
    "duration": "1590",
    "istio_policy_status": "-",
    "method": "POST",
    "path": "/v1/chat/completions",
    "protocol": "HTTP/1.1",
    "request_id": "5895f5a9-e4e3-425b-98db-6c6a926195b7",
    "requested_server_name": "-",
    "response_code": "200",
    "response_flags": "-",
    "route_name": "openai",
    "start_time": "2024-06-18T09:37:14.078Z",
    "trace_id": "-",
    "upstream_cluster": "qwen",
    "upstream_service_time": "496",
    "upstream_transport_failure_reason": "-",
    "user_agent": "PostmanRuntime/7.37.3",
    "x_forwarded_for": "-"
}
\`\`\`
`},i=function(){return s},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"}]},e=c((u,F,m)=>{const{layout:f,...p}=n;return p.file=a,p.url=t,r`${E()}${x(s)}`})});export{e as Content,y as __tla,i as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,d as rawContent,t as url};
