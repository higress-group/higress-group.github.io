const e="mcp-quick-start.md",s="ai",r="mcp-quick-start",t=`
# MCP Server \u5FEB\u901F\u5F00\u59CB

> **\u6CE8\u610F\uFF1A** \u672C\u6587\u6863\u4E2D\u7684 MCP Server \u529F\u80FD\u9700\u8981 Higress 2.1.0 \u6216\u66F4\u9AD8\u7248\u672C\u3002

MCP Server \u662F Higress AI \u7F51\u5173\u63D0\u4F9B\u7684\u4E00\u79CD\u7EDF\u4E00\u4EE3\u7406\u80FD\u529B\uFF0C\u53EF\u4EE5\u5E2E\u52A9 AI Agent \u5FEB\u901F\u5BF9\u63A5\u5404\u7C7B\u6570\u636E\u6E90\u3002\u901A\u8FC7 MCP Server\uFF0CAI Agent \u53EF\u4EE5\u65B9\u4FBF\u5730\u8BBF\u95EE\u6570\u636E\u5E93\u3001\u641C\u7D22\u5F15\u64CE\u7B49\u5916\u90E8\u670D\u52A1\uFF0C\u65E0\u9700\u5173\u5FC3\u5177\u4F53\u7684\u8FDE\u63A5\u7EC6\u8282\u3002\u5176\u4E2D\uFF0C\u6570\u636E\u5E93\u5BF9\u63A5\u80FD\u529B\u662F\u7F51\u5173\u5185\u7F6E\u7684\u80FD\u529B\uFF0C\u4E0D\u80FD\u8DDF\u968F\u63D2\u4EF6\u52A8\u6001\u66F4\u65B0\u3002\u672C\u6587\u5C06\u4EE5 postgres \u6570\u636E\u5E93\u548C\u5938\u514B\u641C\u7D22\u4E3A\u4F8B\uFF0C\u4ECB\u7ECD\u914D\u7F6E\u6D41\u7A0B\u3002

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
mcpServer:
  sse_path_suffix: /sse  # SSE \u8FDE\u63A5\u7684\u8DEF\u5F84\u540E\u7F00
  enable: true          # \u542F\u7528 MCP Server
  redis:
    address: redis-stack-server.higress-system.svc.cluster.local:6379 # Redis \u670D\u52A1\u5730\u5740
  match_list:          # MCP Server \u8DEF\u7531\u89C4\u5219
    - match_rule_domain: "*"
      match_rule_path: /postgres
      match_rule_type: "prefix"
    - match_rule_domain: "*"
      match_rule_path: /quark
      match_rule_type: "prefix"
  serves: 
\`\`\`

> **\u6CE8\u610F\uFF1A** \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server \u5728 Config Map \u4E2D\u914D\u7F6E\uFF0C\u63D2\u4EF6\u7C7B\u578B\u5728 Higress \u63A7\u5236\u53F0\u914D\u7F6E\u3002

### \u914D\u7F6E postgres MCP Server

\u5728 Config Map \u4E2D\u914D\u7F6E postgres MCP Server\uFF1A

\`\`\`yaml
servers:
  - name: postgres      # MCP Server \u540D\u79F0
    path: /postgres     # \u8BBF\u95EE\u8DEF\u5F84\uFF0C\u9700\u8981\u4E0E match_list \u4E2D\u7684\u914D\u7F6E\u5339\u914D
    type: database      # \u7C7B\u578B\u4E3A\u6570\u636E\u5E93
    config:
      dsn: "your postgres database connect dsn" # \u6570\u636E\u5E93\u8FDE\u63A5\u4E32
      dbType: "postgres"                        # \u6570\u636E\u5E93\u7C7B\u578B
\`\`\`

\u6570\u636E\u5E93\u8FDE\u63A5\u4E32\u683C\u5F0F\u8BF7\u53C2\u8003 [gorm \u6587\u6863](https://gorm.io/docs/connecting_to_the_database.html)\u3002

### \u914D\u7F6E\u5938\u514B\u641C\u7D22 MCP Server

#### 1. \u7533\u8BF7 API Key

[\u7533\u8BF7\u5938\u514B\u641C\u7D22\u8C03\u7528\u7684 API Key](https://help.aliyun.com/document_detail/2872258.html?spm=a2c4g.11186623.0.0.632e3350xkb4hu)

#### 2. \u6DFB\u52A0\u670D\u52A1\u6765\u6E90

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u5938\u514B\u641C\u7D22\u7684\u670D\u52A1\u6765\u6E90\uFF1A

![\u6DFB\u52A0\u670D\u52A1\u6765\u6E90](https://gw.alicdn.com/imgextra/i3/O1CN018CbgsB1o7Zs7LNCO7_!!6000000005178-0-tps-2434-146.jpg)

#### 3. \u914D\u7F6E\u8DEF\u7531

\u5728 Higress \u63A7\u5236\u53F0\u6DFB\u52A0\u5938\u514B\u641C\u7D22\u7684\u8DEF\u7531\u6307\u5411\u5BF9\u5E94\u7684\u670D\u52A1\u6765\u6E90\uFF1A

![\u914D\u7F6E\u8DEF\u7531](https://gw.alicdn.com/imgextra/i1/O1CN01Yx0SDr1YLHsTz23OD_!!6000000003042-0-tps-2522-738.jpg)

#### 4. \u914D\u7F6E\u63D2\u4EF6

\u5BF9\u521B\u5EFA\u7684\u8DEF\u7531\u70B9\u51FB\u7B56\u7565\u6309\u952E\u6DFB\u52A0\u63D2\u4EF6\uFF1A

<div align="center">
<img src="https://gw.alicdn.com/imgextra/i4/O1CN01vrUE1z1fClp4Lr0dv_!!6000000003971-0-tps-1286-1072.jpg" width="500" alt="\u63D2\u4EF6\u914D\u7F6E" />
</div>

\u5BF9\u6DFB\u52A0\u7684\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E\uFF1A

<div align="center">
<img src="https://gw.alicdn.com/imgextra/i1/O1CN01RkKZa01gZxUVFVm1l_!!6000000004157-0-tps-1302-692.jpg" width="500" alt="\u63D2\u4EF6\u53C2\u6570"/>
</div>

## MCP Server \u4F7F\u7528

\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 cursor \u4E3A\u4F8B\uFF1A

* \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix
* \u63D2\u4EF6\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix

\`\`\`yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "quark": {
    "url": "http://your-higress-address/quark-search/sse"
  }
}
\`\`\`

cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A

![cursor\u914D\u7F6E\u5B8C\u6210](https://gw.alicdn.com/imgextra/i3/O1CN01WS1eN01xovuMAlRQh_!!6000000006491-0-tps-1918-622.jpg)

## \u4F7F\u7528\u573A\u666F

MCP Server \u4E3B\u8981\u7528\u4E8E\u4EE5\u4E0B\u573A\u666F\uFF1A

1. **\u6570\u636E\u5E93\u8BBF\u95EE**\uFF1AAI Agent \u9700\u8981\u67E5\u8BE2\u6570\u636E\u5E93\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u76F4\u63A5\u8BBF\u95EE\uFF0C\u65E0\u9700\u5904\u7406\u6570\u636E\u5E93\u8FDE\u63A5\u548C\u67E5\u8BE2\u903B\u8F91
2. **\u641C\u7D22\u5F15\u64CE\u96C6\u6210**\uFF1AAI Agent \u9700\u8981\u641C\u7D22\u4FE1\u606F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u8C03\u7528\u641C\u7D22\u5F15\u64CE\u670D\u52A1
3. **\u5916\u90E8\u670D\u52A1\u5BF9\u63A5**\uFF1AAI Agent \u9700\u8981\u8C03\u7528\u5176\u4ED6\u5916\u90E8\u670D\u52A1\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 MCP Server \u7EDF\u4E00\u7BA1\u7406

\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002`,i={title:"MCP Server \u5FEB\u901F\u5F00\u59CB",description:"MCP Server \u5FEB\u901F\u5F00\u59CB\u6307\u5357",keywords:["MCP Server"],date:"2025-03-31",category:"article"},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-quick-start.md",rawData:void 0};export{a as _internal,t as body,s as collection,i as data,e as id,r as slug};
