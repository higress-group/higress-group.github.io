const e="mcp-quick-start.md",s="ai",r="mcp-quick-start",t=`
# MCP Server \u5FEB\u901F\u5F00\u59CB

> **\u6CE8\u610F\uFF1A** \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002

Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server\u3002\u672C\u6587\u5C06\u4EE5 PostgreSQL \u6570\u636E\u5E93\u548C\u4E00\u4E2A\u7B80\u5355\u7684 REST API \u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002

## \u524D\u63D0\u6761\u4EF6

\u5728\u5F00\u59CB\u4F7F\u7528 MCP Server \u4E4B\u524D\uFF0C\u9700\u8981\u5148\u90E8\u7F72 Higress\u3002\u60A8\u53EF\u4EE5\u53C2\u8003 [Higress \u5FEB\u901F\u5165\u95E8\u6307\u5357](https://higress.cn/docs/latest/user/quickstart) \u5B8C\u6210\u90E8\u7F72\u3002\u5728\u5B89\u88C5 Higress \u65F6\uFF0C\u8BF7\u786E\u4FDD\u5728 Helm \u547D\u4EE4\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u53C2\u6570\uFF1A

\`\`\`bash
helm install higress -n higress-system [...\u5176\u4ED6\u53C2\u6570...] --set global.enableRedis=true
\`\`\`

MCP Server \u9700\u8981\u4F9D\u8D56 Redis \u670D\u52A1\u7528\u4E8E\u6570\u636E\u7F13\u5B58\uFF0C\u542F\u7528\u540E\u60A8\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B Redis \u670D\u52A1\u7684\u5730\u5740\uFF1A

\`\`\`bash
kubectl get svc redis-stack-server -n higress-system -o wide
\`\`\`

## \u914D\u7F6E MCP Server

### ConfigMap \u5168\u5C40\u53C2\u6570\u914D\u7F6E

\u5728 ConfigMap \u4E2D\u914D\u7F6E MCP Server \u7684\u76F8\u5173\u5168\u5C40\u53C2\u6570\uFF1A

\`\`\`bash
kubectl edit configmap higress-config -n higress-system
\`\`\`

\u914D\u7F6E Redis \u8FDE\u63A5\u4FE1\u606F\u548C MCP Server \u7684\u8DEF\u7531\u89C4\u5219\uFF1A

\`\`\`yaml
apiVersion: v1
data:
  higress: |-
    mcpServer:
      sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00
      enable: true          # \u542F\u7528 MCP Server
      redis:
        address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis\u670D\u52A1\u5730\u5740
        username: # Redis\u7528\u6237\u540D\uFF08\u53EF\u9009\uFF09
        password: # Redis\u5BC6\u7801\uFF08\u53EF\u9009\uFF09
        db: # Redis\u6570\u636E\u5E93\uFF08\u53EF\u9009\uFF09
      match_list:          # MCP Server \u8DEF\u7531\u89C4\u5219
        - match_rule_domain: "*"
          match_rule_path: /postgres
          match_rule_type: "prefix"
        - match_rule_domain: "*"
          match_rule_path: /user
          match_rule_type: "prefix"
      servers:
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
\`\`\`

> **\u6CE8\u610F\uFF1A** \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server \u5728 Config Map \u4E2D\u914D\u7F6E\uFF0CREST API \u7C7B\u578B\u5728 Higress \u63A7\u5236\u53F0\u914D\u7F6E\u3002

### \u914D\u7F6E Database MCP Server

\u5728 Config Map \u4E2D\u914D\u7F6E Database MCP Server\uFF1A

\`\`\`yaml
servers:
  - name: postgres      # MCP Server \u540D\u79F0
    path: /postgres     # \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D
    type: database      # \u7C7B\u578B\u4E3A\u6570\u636E\u5E93
    config:
      dsn: "your postgres database connect dsn" # \u6570\u636E\u5E93\u8FDE\u63A5\u4E32
      dbType: "postgres"                        # \u6570\u636E\u5E93\u7C7B\u578B\uFF0C\u76EE\u524D\u5DF2\u652F\u6301 postgres/mysql/clickhouse/sqlite
\`\`\`

\u6570\u636E\u5E93\u8FDE\u63A5\u4E32\u683C\u5F0F\u8BF7\u53C2\u8003 [gorm \u6587\u6863](https://gorm.io/docs/connecting_to_the_database.html)\u3002

### \u914D\u7F6E REST API MCP Server

\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u6B65\u9AA4\u5FEB\u901F\u8F6C\u6362\u4E3A MCP Server\uFF1A

#### 1. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u76EE\u6807 REST API \u7684\u670D\u52A1\u6765\u6E90\uFF0C\u672C\u793A\u4F8B\u4F7F\u7528 \`randomuser.me\` \u4F5C\u4E3A\u670D\u52A1\u6765\u6E90\uFF1A

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90](https://gw.alicdn.com/imgextra/i4/O1CN0175PEY11uVI4iiRKhM_!!6000000006042-0-tps-2496-566.jpg)

#### 2. \u914D\u7F6E\u8DEF\u7531

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u8DEF\u7531\u5E76\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A

![\u914D\u7F6E\u8DEF\u7531](https://gw.alicdn.com/imgextra/i2/O1CN01AvGOMg1ysswRGHvuM_!!6000000006635-0-tps-2528-624.jpg)

#### 3. \u914D\u7F6E MCP Server \u63D2\u4EF6

\u5BF9\u521B\u5EFA\u7684\u8DEF\u7531\u6DFB\u52A0 MCP Server \u63D2\u4EF6\u5E76\u8FDB\u884C\u914D\u7F6E\uFF1A

![\u914D\u7F6EMCP Server\u63D2\u4EF6](https://gw.alicdn.com/imgextra/i4/O1CN01HLJt6I26ehbSLSA57_!!6000000007687-0-tps-2940-1184.jpg)

\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
server:
  allowTools:
  - "get-user"
  name: "random-user-server"
tools:
- description: "Get random user information"
  name: "get-user"
  requestTemplate:
    method: "GET"
    url: "https://randomuser.me/api/"
  responseTemplate:
    body: |-
      # User Information
      {{- with (index .results 0) }}
      - **Name**: {{.name.first}} {{.name.last}}
      - **Email**: {{.email}}
      - **Location**: {{.location.city}}, {{.location.country}}
      - **Phone**: {{.phone}}
      {{- end }}
\`\`\`
\u66F4\u591A\u5173\u4E8E\u5982\u4F55\u914D\u7F6E REST API \u5230 MCP Server \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 [MCP Server \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003](../ai/mcp-server.md)\u548C[Higress Wasm\u63D2\u4EF6\u4F7F\u7528\u7B80\u4ECB](https://higress.cn/docs/latest/plugins/intro/?spm=36971b57.2ef5001f.0.0.2a932c1fWNtqNf)

> **\u6CE8\u610F\uFF1A** \u5BF9\u4E8E 2025-03-26 [MCP streamable HTTP](https://spec.modelcontextprotocol.io/specification/2025-03-26/) \u534F\u8BAE\uFF0C\u53EF\u4EE5\u65E0\u9700\u914D\u7F6EConfigmap
## MCP Server \u4F7F\u7528

\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 cursor \u4E3A\u4F8B\uFF1A

* \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix
* REST API \u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix

\`\`\`yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "rest-api": {
    "url": "http://your-higress-address/user/sse"
  }
}
\`\`\`

cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A

![cursor\u914D\u7F6E\u5B8C\u6210](https://gw.alicdn.com/imgextra/i2/O1CN01Z0nnk91NOWuMXb0Tv_!!6000000001560-0-tps-1908-638.jpg)


\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002

> \u5982\u60A8\u5728\u4F7F\u7528 MCP Server \u8FC7\u7A0B\u4E2D\u9047\u5230\u95EE\u9898\uFF0C\u53EF\u5728 [Higress Github Issue](https://github.com/alibaba/higress/issues) \u4E2D\u7559\u4E0B\u60A8\u7684\u4FE1\u606F\u3002
> 
> \u5982\u60A8\u5BF9 Higress \u540E\u7EED\u66F4\u65B0\u611F\u5174\u8DA3\uFF0C\u6216\u5E0C\u671B\u7ED9 Higress \u63D0\u4F9B\u53CD\u9988\uFF0C\u6B22\u8FCE Star [Higress Github Repo](https://github.com/alibaba/higress/)\u3002
`,a={title:"MCP Server \u5FEB\u901F\u5F00\u59CB",description:"Higress AI \u7F51\u5173\u63D0\u4F9B MCP Server \u7EDF\u4E00\u6258\u7BA1\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001REST API \u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF1B\u800C\u5BF9\u4E8E REST API\uFF0C\u4EFB\u4F55\u5916\u90E8 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u6210 MCP Server",keywords:["MCP Server"],date:"2025-04-03",category:"article"},i={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-quick-start.md",rawData:void 0};export{i as _internal,t as body,s as collection,a as data,e as id,r as slug};
