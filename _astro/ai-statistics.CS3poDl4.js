const e="latest/zh-cn/plugins/ai/api-o11y/ai-statistics.md",t="docs",o="latest/zh-cn/plugins/ai/api-o11y/ai-statistics",n=`
## \u4ECB\u7ECD
\u63D0\u4F9BAI\u53EF\u89C2\u6D4B\u57FA\u7840\u80FD\u529B\uFF0C\u5305\u62EC metric, log, trace\uFF0C\u5176\u540E\u9700\u63A5ai-proxy\u63D2\u4EF6\uFF0C\u5982\u679C\u4E0D\u63A5ai-proxy\u63D2\u4EF6\u7684\u8BDD\uFF0C\u5219\u9700\u8981\u7528\u6237\u8FDB\u884C\u76F8\u5E94\u914D\u7F6E\u624D\u53EF\u751F\u6548\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`200\`

## \u914D\u7F6E\u8BF4\u660E
\u63D2\u4EF6\u9ED8\u8BA4\u8BF7\u6C42\u7B26\u5408openai\u534F\u8BAE\u683C\u5F0F\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u57FA\u7840\u53EF\u89C2\u6D4B\u503C\uFF0C\u7528\u6237\u65E0\u9700\u7279\u6B8A\u914D\u7F6E\uFF1A

- metric\uFF1A\u63D0\u4F9B\u4E86\u8F93\u5165token\u3001\u8F93\u51FAtoken\u3001\u9996\u4E2Atoken\u7684rt\uFF08\u6D41\u5F0F\u8BF7\u6C42\uFF09\u3001\u8BF7\u6C42\u603Brt\u7B49\u6307\u6807\uFF0C\u652F\u6301\u5728\u7F51\u5173\u3001\u8DEF\u7531\u3001\u670D\u52A1\u3001\u6A21\u578B\u56DB\u4E2A\u7EF4\u5EA6\u4E0A\u8FDB\u884C\u89C2\u6D4B
- log\uFF1A\u63D0\u4F9B\u4E86 input_token, output_token, model, llm_service_duration, llm_first_token_duration \u7B49\u5B57\u6BB5

\u7528\u6237\u8FD8\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u7684\u65B9\u5F0F\u5BF9\u53EF\u89C2\u6D4B\u7684\u503C\u8FDB\u884C\u6269\u5C55\uFF1A

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B  | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                     |
|----------------|-------|------|-----|------------------------|
| \`attributes\` | []Attribute | \u975E\u5FC5\u586B  | -   | \u7528\u6237\u5E0C\u671B\u8BB0\u5F55\u5728log/span\u4E2D\u7684\u4FE1\u606F |

Attribute \u914D\u7F6E\u8BF4\u660E:

| \u540D\u79F0             | \u6570\u636E\u7C7B\u578B  | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                     |
|----------------|-------|-----|-----|------------------------|
| \`key\`         | string | \u5FC5\u586B  | -   | attrribute \u540D\u79F0           |
| \`value_source\` | string | \u5FC5\u586B  | -   | attrribute \u53D6\u503C\u6765\u6E90\uFF0C\u53EF\u9009\u503C\u4E3A \`fixed_value\`, \`request_header\`, \`request_body\`, \`response_header\`, \`response_body\`, \`response_streaming_body\`             |
| \`value\`      | string | \u5FC5\u586B  | -   | attrribute \u53D6\u503C key value/path |
| \`rule\`      | string | \u975E\u5FC5\u586B  | -   | \u4ECE\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6 attrribute \u7684\u89C4\u5219\uFF0C\u53EF\u9009\u503C\u4E3A \`first\`, \`replace\`, \`append\`|
| \`apply_to_log\`      | bool | \u975E\u5FC5\u586B  | false  | \u662F\u5426\u5C06\u63D0\u53D6\u7684\u4FE1\u606F\u8BB0\u5F55\u5728\u65E5\u5FD7\u4E2D |
| \`apply_to_span\`      | bool | \u975E\u5FC5\u586B  | false  | \u662F\u5426\u5C06\u63D0\u53D6\u7684\u4FE1\u606F\u8BB0\u5F55\u5728\u94FE\u8DEF\u8FFD\u8E2Aspan\u4E2D |

\`value_source\` \u7684\u5404\u79CD\u53D6\u503C\u542B\u4E49\u5982\u4E0B\uFF1A

- \`fixed_value\`\uFF1A\u56FA\u5B9A\u503C
- \`request_header\` \uFF1A attrribute \u503C\u901A\u8FC7 http \u8BF7\u6C42\u5934\u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u4E3A header key
- \`request_body\` \uFF1Aattrribute \u503C\u901A\u8FC7\u8BF7\u6C42 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath
- \`response_header\` \uFF1Aattrribute \u503C\u901A\u8FC7 http \u54CD\u5E94\u5934\u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u4E3Aheader key
- \`response_body\` \uFF1Aattrribute \u503C\u901A\u8FC7\u54CD\u5E94 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath
- \`response_streaming_body\` \uFF1Aattrribute \u503C\u901A\u8FC7\u6D41\u5F0F\u54CD\u5E94 body \u83B7\u53D6\uFF0Cvalue \u914D\u7F6E\u683C\u5F0F\u4E3A gjson \u7684 jsonpath


\u5F53 \`value_source\` \u4E3A \`response_streaming_body\` \u65F6\uFF0C\u5E94\u5F53\u914D\u7F6E \`rule\`\uFF0C\u7528\u4E8E\u6307\u5B9A\u5982\u4F55\u4ECE\u6D41\u5F0Fbody\u4E2D\u83B7\u53D6\u6307\u5B9A\u503C\uFF0C\u53D6\u503C\u542B\u4E49\u5982\u4E0B\uFF1A

- \`first\`\uFF1A\u591A\u4E2Achunk\u4E2D\u53D6\u7B2C\u4E00\u4E2A\u6709\u6548chunk\u7684\u503C
- \`replace\`\uFF1A\u591A\u4E2Achunk\u4E2D\u53D6\u6700\u540E\u4E00\u4E2A\u6709\u6548chunk\u7684\u503C
- \`append\`\uFF1A\u62FC\u63A5\u591A\u4E2A\u6709\u6548chunk\u4E2D\u7684\u503C\uFF0C\u53EF\u7528\u4E8E\u83B7\u53D6\u56DE\u7B54\u5185\u5BB9

## \u914D\u7F6E\u793A\u4F8B
\u5982\u679C\u5E0C\u671B\u5728\u7F51\u5173\u8BBF\u95EE\u65E5\u5FD7\u4E2D\u8BB0\u5F55ai-statistic\u76F8\u5173\u7684\u7EDF\u8BA1\u503C\uFF0C\u9700\u8981\u4FEE\u6539log_format\uFF0C\u5728\u539Flog_format\u57FA\u7840\u4E0A\u6DFB\u52A0\u4E00\u4E2A\u65B0\u5B57\u6BB5\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`yaml
'{"ai_log":"%FILTER_STATE(wasm.ai_log:PLAIN)%"}'
\`\`\`

### \u7A7A\u914D\u7F6E
#### \u76D1\u63A7

\`\`\`
# counter \u7C7B\u578B\uFF0C\u8F93\u5165 token \u6570\u91CF\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_input_token{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 24

# counter \u7C7B\u578B\uFF0C\u8F93\u51FA token \u6570\u91CF\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_output_token{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 507

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6D88\u8017\u603B\u65F6\u95F4\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_service_duration{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 6470

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_duration_count{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 2

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u9996\u4E2A token \u5EF6\u65F6\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_first_token_duration{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 340

# counter \u7C7B\u578B\uFF0C\u6D41\u5F0F\u8BF7\u6C42\u6B21\u6570\u7684\u7D2F\u52A0\u503C
route_upstream_model_consumer_metric_llm_stream_duration_count{ai_route="ai-route-aliyun.internal",ai_cluster="outbound|443||llm-aliyun.internal.dns",ai_model="qwen-turbo",ai_consumer="none"} 1
\`\`\`

\u4EE5\u4E0B\u662F\u4F7F\u7528\u6307\u6807\u7684\u51E0\u4E2A\u793A\u4F8B\uFF1A

\u6D41\u5F0F\u8BF7\u6C42\u9996\u4E2A token \u7684\u5E73\u5747\u5EF6\u65F6\uFF1A

\`\`\`
irate(route_upstream_model_consumer_metric_llm_first_token_duration[2m])
/
irate(route_upstream_model_consumer_metric_llm_stream_duration_count[2m])
\`\`\`

\u6D41\u5F0F\u8BF7\u6C42\u548C\u975E\u6D41\u5F0F\u8BF7\u6C42\u5E73\u5747\u6D88\u8017\u7684\u603B\u65F6\u957F\uFF1A

\`\`\`
irate(route_upstream_model_consumer_metric_llm_service_duration[2m])
/
irate(route_upstream_model_consumer_metric_llm_duration_count[2m])
\`\`\`

#### \u65E5\u5FD7
\`\`\`json
{
  "ai_log":"{\\"model\\":\\"qwen-turbo\\",\\"input_token\\":\\"10\\",\\"output_token\\":\\"69\\",\\"llm_first_token_duration\\":\\"309\\",\\"llm_service_duration\\":\\"1955\\"}"
}
\`\`\`

#### \u94FE\u8DEF\u8FFD\u8E2A
\u914D\u7F6E\u4E3A\u7A7A\u65F6\uFF0C\u4E0D\u4F1A\u5728span\u4E2D\u6DFB\u52A0\u989D\u5916\u7684attribute

### \u4ECE\u975Eopenai\u534F\u8BAE\u63D0\u53D6token\u4F7F\u7528\u4FE1\u606F
\u5728ai-proxy\u4E2D\u8BBE\u7F6E\u534F\u8BAE\u4E3Aoriginal\u65F6\uFF0C\u4EE5\u767E\u70BC\u4E3A\u4F8B\uFF0C\u53EF\u4F5C\u5982\u4E0B\u914D\u7F6E\u6307\u5B9A\u5982\u4F55\u63D0\u53D6model, input_token, output_token

\`\`\`yaml
attributes:
  - key: model
    value_source: response_body
    value: usage.models.0.model_id
    apply_to_log: true
    apply_to_span: false
  - key: input_token
    value_source: response_body
    value: usage.models.0.input_tokens
    apply_to_log: true
    apply_to_span: false
  - key: output_token
    value_source: response_body
    value: usage.models.0.output_tokens
    apply_to_log: true
    apply_to_span: false
\`\`\`
#### \u76D1\u63A7

\`\`\`
route_upstream_model_consumer_metric_input_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 343
route_upstream_model_consumer_metric_output_token{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 153
route_upstream_model_consumer_metric_llm_service_duration{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 3725
route_upstream_model_consumer_metric_llm_duration_count{ai_route="bailian",ai_cluster="qwen",ai_model="qwen-max"} 1
\`\`\`

#### \u65E5\u5FD7
\u6B64\u914D\u7F6E\u4E0B\u65E5\u5FD7\u6548\u679C\u5982\u4E0B\uFF1A
\`\`\`json
{
  "ai_log": "{\\"model\\":\\"qwen-max\\",\\"input_token\\":\\"343\\",\\"output_token\\":\\"153\\",\\"llm_service_duration\\":\\"19110\\"}"  
}
\`\`\`

#### \u94FE\u8DEF\u8FFD\u8E2A
\u94FE\u8DEF\u8FFD\u8E2A\u7684 span \u4E2D\u53EF\u4EE5\u770B\u5230 model, input_token, output_token \u4E09\u4E2A\u989D\u5916\u7684 attribute

### \u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer
\u4E3E\u4F8B\u5982\u4E0B\uFF1A 
\`\`\`yaml
attributes:
  - key: consumer # \u914D\u5408\u8BA4\u8BC1\u9274\u6743\u8BB0\u5F55consumer
    value_source: request_header
    value: x-mse-consumer
    apply_to_log: true
\`\`\`

### \u8BB0\u5F55\u95EE\u9898\u4E0E\u56DE\u7B54
\`\`\`yaml
attributes:
  - key: question # \u8BB0\u5F55\u95EE\u9898
    value_source: request_body
    value: messages.@reverse.0.content
    apply_to_log: true
  - key: answer   # \u5728\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54
    value_source: response_streaming_body
    value: choices.0.delta.content
    rule: append
    apply_to_log: true
  - key: answer   # \u5728\u975E\u6D41\u5F0F\u54CD\u5E94\u4E2D\u63D0\u53D6\u5927\u6A21\u578B\u7684\u56DE\u7B54
    value_source: response_body
    value: choices.0.message.content
    apply_to_log: true
\`\`\`

## \u8FDB\u9636
\u914D\u5408\u963F\u91CC\u4E91SLS\u6570\u636E\u52A0\u5DE5\uFF0C\u53EF\u4EE5\u5C06ai\u76F8\u5173\u7684\u5B57\u6BB5\u8FDB\u884C\u63D0\u53D6\u52A0\u5DE5\uFF0C\u4F8B\u5982\u539F\u59CB\u65E5\u5FD7\u4E3A\uFF1A

\`\`\`
ai_log:{"question":"\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9","answer":"\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n\`\`\`python\\nresult = 2 ** 3\\nprint(result)\\n\`\`\`\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002","model":"qwen-max","input_token":"16","output_token":"76","llm_service_duration":"5913"}
\`\`\`

\u4F7F\u7528\u5982\u4E0B\u6570\u636E\u52A0\u5DE5\u811A\u672C\uFF0C\u53EF\u4EE5\u63D0\u53D6\u51FAquestion\u548Canswer\uFF1A

\`\`\`
e_regex("ai_log", grok("%{EXTRACTJSON}"))
e_set("question", json_select(v("json"), "question", default="-"))
e_set("answer", json_select(v("json"), "answer", default="-"))
\`\`\`

\u63D0\u53D6\u540E\uFF0CSLS\u4E2D\u4F1A\u6DFB\u52A0question\u548Canswer\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A

\`\`\`
ai_log:{"question":"\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9","answer":"\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A\\n\\n\`\`\`python\\nresult = 2 ** 3\\nprint(result)\\n\`\`\`\\n\\n\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002","model":"qwen-max","input_token":"16","output_token":"76","llm_service_duration":"5913"}

question:\u7528python\u8BA1\u7B972\u76843\u6B21\u65B9

answer:\u4F60\u53EF\u4EE5\u4F7F\u7528 Python \u7684\u4E58\u65B9\u8FD0\u7B97\u7B26 \`**\` \u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u6B21\u65B9\u3002\u8BA1\u7B972\u76843\u6B21\u65B9\uFF0C\u53732\u4E58\u4EE5\u81EA\u5DF12\u6B21\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u4EE3\u7801\u8868\u793A\uFF1A

result = 2 ** 3
print(result)

\u8FD0\u884C\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u4F60\u4F1A\u5F97\u5230\u8F93\u51FA\u7ED3\u679C\u4E3A8\uFF0C\u56E0\u4E3A2\u4E58\u4EE5\u81EA\u5DF1\u4E24\u6B21\u7B49\u4E8E8\u3002

\`\`\`
`,r={title:"AI\u53EF\u89C2\u6D4B",description:"AI\u53EF\u89C2\u6D4B\u914D\u7F6E\u53C2\u8003",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","AI","observability"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-o11y/ai-statistics.md",rawData:void 0};export{a as _internal,n as body,t as collection,r as data,e as id,o as slug};
