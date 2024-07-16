const e="latest/zh-cn/plugins/ai/ai-statistics.md",t="docs",a="latest/zh-cn/plugins/ai/ai-statistics",s=`
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
`,o={title:"AI \u7EDF\u8BA1",description:"AI \u7EDF\u8BA1\u63D2\u4EF6\u63D0\u4F9B\u4E86\u8DEF\u7531\u7EA7\u3001\u670D\u52A1\u7EA7\u3001\u6A21\u578B\u7EA7\u7684 token \u7528\u91CF\u89C2\u6D4B\u80FD\u529B\uFF0C\u5305\u62EC\u65E5\u5FD7\u3001\u76D1\u63A7\u4EE5\u53CA\u544A\u8B66\u3002",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","ai"]},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/ai-statistics.md",rawData:void 0};export{i as _internal,s as body,t as collection,o as data,e as id,a as slug};
