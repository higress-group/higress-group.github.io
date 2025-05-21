const e="mcp-server.md",r="ai",t="mcp-server",o=`# MCP Server \u63D2\u4EF6\u914D\u7F6E

## \u529F\u80FD\u8BF4\u660E

\`mcp-server\`\u63D2\u4EF6\u63D0\u4F9B\u4E86\u57FA\u4E8E Model Context Protocol (MCP) \u7684 AI \u5DE5\u5177\u96C6\u6210\u80FD\u529B\u3002MCP \u662F\u4E00\u79CD\u4E13\u4E3A AI \u52A9\u624B\u8BBE\u8BA1\u7684\u534F\u8BAE\uFF0C\u5B83\u5B9A\u4E49\u4E86 AI \u6A21\u578B\u4E0E\u5916\u90E8\u5DE5\u5177\u548C\u8D44\u6E90\u4EA4\u4E92\u7684\u6807\u51C6\u65B9\u5F0F\u3002\u901A\u8FC7\u6B64\u63D2\u4EF6\uFF0C\u60A8\u53EF\u4EE5\uFF1A

1. \u65E0\u9700\u7F16\u5199\u4EE3\u7801\uFF0C\u5C06\u73B0\u6709\u7684 REST API \u8F6C\u6362\u4E3A AI \u52A9\u624B\u53EF\u8C03\u7528\u7684\u5DE5\u5177
2. \u5229\u7528 Higress \u7F51\u5173\u63D0\u4F9B\u7684\u7EDF\u4E00\u8BA4\u8BC1\u3001\u9274\u6743\u3001\u9650\u6D41\u548C\u53EF\u89C2\u6D4B\u6027\u80FD\u529B
3. \u5FEB\u901F\u6784\u5EFA\u548C\u90E8\u7F72 AI \u5DE5\u5177\u548C\u670D\u52A1

![](https://img.alicdn.com/imgextra/i1/O1CN01wv8H4g1mS4MUzC1QC_!!6000000004952-2-tps-1764-597.png)

\u901A\u8FC7 Higress \u6258\u7BA1 MCP Server\uFF0C\u53EF\u4EE5\u5B9E\u73B0\uFF1A
- \u7EDF\u4E00\u7684\u8BA4\u8BC1\u548C\u9274\u6743\u673A\u5236\uFF0C\u786E\u4FDD AI \u5DE5\u5177\u8C03\u7528\u7684\u5B89\u5168\u6027
- \u7CBE\u7EC6\u5316\u7684\u901F\u7387\u9650\u5236\uFF0C\u9632\u6B62\u6EE5\u7528\u548C\u8D44\u6E90\u8017\u5C3D
- \u5B8C\u6574\u7684\u5BA1\u8BA1\u65E5\u5FD7\uFF0C\u8BB0\u5F55\u6240\u6709\u5DE5\u5177\u8C03\u7528\u884C\u4E3A
- \u4E30\u5BCC\u7684\u53EF\u89C2\u6D4B\u6027\uFF0C\u76D1\u63A7\u5DE5\u5177\u8C03\u7528\u7684\u6027\u80FD\u548C\u5065\u5EB7\u72B6\u51B5
- \u7B80\u5316\u7684\u90E8\u7F72\u548C\u7BA1\u7406\uFF0C\u901A\u8FC7 Higress \u63D2\u4EF6\u673A\u5236\u5FEB\u901F\u6DFB\u52A0\u65B0\u7684 MCP Server

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`30\`

## \u914D\u7F6E\u5B57\u6BB5

### \u670D\u52A1\u5668\u914D\u7F6E

| \u540D\u79F0         | \u6570\u636E\u7C7B\u578B   | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                           |
| ------------ | ---------- | -------- | ------ | ------------------------------ |
| \`server.name\` | string     | \u5FC5\u586B     | -      | MCP \u670D\u52A1\u5668\u7684\u540D\u79F0\u3002\u5982\u679C\u4F7F\u7528\u63D2\u4EF6\u5185\u7F6E\u7684 MCP \u670D\u52A1\u5668\uFF08\u5982 quark-search\uFF09\uFF0C\u53EA\u9700\u914D\u7F6E\u6B64\u5B57\u6BB5\u4E3A\u5BF9\u5E94\u7684\u540D\u79F0\uFF0C\u65E0\u9700\u914D\u7F6E tools \u5B57\u6BB5\u3002\u5982\u679C\u662F REST-to-MCP \u573A\u666F\uFF0C\u6B64\u5B57\u6BB5\u53EF\u4EE5\u586B\u5199\u4EFB\u610F\u503C\u3002 |
| \`server.config\` | object     | \u9009\u586B     | {}     | \u670D\u52A1\u5668\u914D\u7F6E\uFF0C\u5982 API \u5BC6\u94A5\u7B49      |
| \`server.allowTools\` | array of string | \u9009\u586B | - | \u5141\u8BB8\u8C03\u7528\u7684\u5DE5\u5177\u5217\u8868\u3002\u5982\u4E0D\u6307\u5B9A\uFF0C\u5219\u5141\u8BB8\u6240\u6709\u5DE5\u5177 |
| \`server.securitySchemes\` | array of object | \u9009\u586B | - | \u5B9A\u4E49\u53EF\u91CD\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\uFF0C\u4F9B\u5DE5\u5177\u5F15\u7528\u3002\u8BE6\u89C1\u201C\u8BA4\u8BC1\u4E0E\u5B89\u5168\u201D\u7AE0\u8282\u3002 |

### REST-to-MCP \u5DE5\u5177\u914D\u7F6E

| \u540D\u79F0                          | \u6570\u636E\u7C7B\u578B        | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                           |
| ----------------------------- | --------------- | -------- | ------ | ------------------------------ |
| \`tools\`                       | array of object | \u9009\u586B     | []     | REST-to-MCP \u5DE5\u5177\u914D\u7F6E\u5217\u8868       |
| \`tools[].name\`                | string          | \u5FC5\u586B     | -      | \u5DE5\u5177\u540D\u79F0                       |
| \`tools[].description\`         | string          | \u5FC5\u586B     | -      | \u5DE5\u5177\u529F\u80FD\u63CF\u8FF0                   |
| \`tools[].args\`                | array of object | \u5FC5\u586B     | []     | \u5DE5\u5177\u53C2\u6570\u5B9A\u4E49                   |
| \`tools[].args[].name\`         | string          | \u5FC5\u586B     | -      | \u53C2\u6570\u540D\u79F0                       |
| \`tools[].args[].description\`  | string          | \u5FC5\u586B     | -      | \u53C2\u6570\u63CF\u8FF0                       |
| \`tools[].args[].type\`         | string          | \u9009\u586B     | string | \u53C2\u6570\u7C7B\u578B\uFF08string, number, integer, boolean, array, object\uFF09 |
| \`tools[].args[].required\`     | boolean         | \u9009\u586B     | false  | \u53C2\u6570\u662F\u5426\u5FC5\u9700                   |
| \`tools[].args[].default\`      | any             | \u9009\u586B     | -      | \u53C2\u6570\u9ED8\u8BA4\u503C                     |
| \`tools[].args[].enum\`         | array           | \u9009\u586B     | -      | \u53C2\u6570\u5141\u8BB8\u7684\u503C\u5217\u8868               |
| \`tools[].args[].items\`        | object          | \u9009\u586B     | -      | \u6570\u7EC4\u9879\u7684\u6A21\u5F0F\uFF08\u5F53type\u4E3Aarray\u65F6\uFF09  |
| \`tools[].args[].properties\`   | object          | \u9009\u586B     | -      | \u5BF9\u8C61\u5C5E\u6027\u7684\u6A21\u5F0F\uFF08\u5F53type\u4E3Aobject\u65F6\uFF09|
| \`tools[].args[].position\`     | string          | \u9009\u586B     | -      | \u53C2\u6570\u5728\u8BF7\u6C42\u4E2D\u7684\u4F4D\u7F6E\uFF08query, path, header, cookie, body\uFF09 |
| \`tools[].requestTemplate\`     | object          | \u5FC5\u586B     | -      | HTTP \u8BF7\u6C42\u6A21\u677F                  |
| \`tools[].requestTemplate.url\` | string          | \u5FC5\u586B     | -      | \u8BF7\u6C42 URL \u6A21\u677F                  |
| \`tools[].requestTemplate.method\` | string       | \u5FC5\u586B     | -      | HTTP \u65B9\u6CD5(GET/POST\u7B49)          |
| \`tools[].requestTemplate.headers\` | array of object | \u9009\u586B | [] | \u8BF7\u6C42\u5934\u6A21\u677F                     |
| \`tools[].requestTemplate.headers[].key\` | string | \u5FC5\u586B   | -      | \u8BF7\u6C42\u5934\u540D\u79F0                     |
| \`tools[].requestTemplate.headers[].value\` | string | \u5FC5\u586B | -      | \u8BF7\u6C42\u5934\u503C\u6A21\u677F                   |
| \`tools[].requestTemplate.body\` | string         | \u9009\u586B     | -      | \u8BF7\u6C42\u4F53\u6A21\u677F\uFF08\u4E0EargsToJsonBody\u3001argsToUrlParam\u3001argsToFormBody\u4E92\u65A5\uFF09 |
| \`tools[].requestTemplate.argsToJsonBody\` | boolean | \u9009\u586B  | false  | \u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u76F4\u63A5\u7528\u4F5CJSON\u8BF7\u6C42\u4F53\uFF08\u4E0Ebody\u3001argsToUrlParam\u3001argsToFormBody\u4E92\u65A5\uFF09 |
| \`tools[].requestTemplate.argsToUrlParam\` | boolean | \u9009\u586B  | false  | \u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230URL\u4E2D\uFF08\u4E0Ebody\u3001argsToJsonBody\u3001argsToFormBody\u4E92\u65A5\uFF09 |
| \`tools[].requestTemplate.argsToFormBody\` | boolean | \u9009\u586B  | false  | \u5F53\u4E3Atrue\u65F6\uFF0C\u53C2\u6570\u5C06\u4EE5application/x-www-form-urlencoded\u683C\u5F0F\u7F16\u7801\u5728\u8BF7\u6C42\u4F53\u4E2D\uFF08\u4E0Ebody\u3001argsToJsonBody\u3001argsToUrlParam\u4E92\u65A5\uFF09 |
| \`tools[].responseTemplate\`    | object          | \u5FC5\u586B     | -      | HTTP \u54CD\u5E94\u8F6C\u6362\u6A21\u677F              |
| \`tools[].responseTemplate.body\` | string        | \u9009\u586B     | -      | \u54CD\u5E94\u4F53\u8F6C\u6362\u6A21\u677F\uFF08\u4E0EprependBody\u548CappendBody\u4E92\u65A5\uFF09 |
| \`tools[].responseTemplate.prependBody\` | string | \u9009\u586B     | -      | \u5728\u54CD\u5E94\u4F53\u524D\u63D2\u5165\u7684\u6587\u672C\uFF08\u4E0Ebody\u4E92\u65A5\uFF09 |
| \`tools[].responseTemplate.appendBody\` | string  | \u9009\u586B     | -      | \u5728\u54CD\u5E94\u4F53\u540E\u63D2\u5165\u7684\u6587\u672C\uFF08\u4E0Ebody\u4E92\u65A5\uFF09 |
| \`tools[].security\`                    | object  | \u9009\u586B     | -      | \u5DE5\u5177\u7EA7\u522B\u5B89\u5168\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9A\u4E49 MCP Client \u548C MCP Server \u4E4B\u95F4\u7684\u8BA4\u8BC1\u65B9\u5F0F\uFF0C\u5E76\u652F\u6301\u51ED\u8BC1\u900F\u4F20\u3002 |
| \`tools[].security.id\`                 | string  | \u5F53 \`tools[].security\` \u914D\u7F6E\u65F6\u5FC5\u586B | -      | \u5F15\u7528\u5728 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID\u3002 |
| \`tools[].security.passthrough\`        | boolean | \u9009\u586B     | false  | \u662F\u5426\u542F\u7528\u900F\u660E\u8BA4\u8BC1\u3002\u5982\u679C\u4E3A \`true\`\uFF0C\u5219\u4ECE MCP Client \u8BF7\u6C42\u4E2D\u63D0\u53D6\u7684\u51ED\u8BC1\u5C06\u7528\u4E8E \`requestTemplate.security\` \u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u3002 |
| \`tools[].requestTemplate.security\`    | object  | \u9009\u586B     | -      | HTTP \u8BF7\u6C42\u6A21\u677F\u7684\u5B89\u5168\u914D\u7F6E\uFF0C\u7528\u4E8E\u5B9A\u4E49 MCP Server \u548C REST API \u4E4B\u95F4\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002 |
| \`tools[].requestTemplate.security.id\` | string  | \u5F53 \`tools[].requestTemplate.security\` \u914D\u7F6E\u65F6\u5FC5\u586B | - | \u5F15\u7528\u5728 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848 ID\u3002 |
| \`tools[].requestTemplate.security.credential\` | string | \u9009\u586B | - | \u8986\u76D6 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u9ED8\u8BA4\u51ED\u8BC1\u3002\u5982\u679C\u540C\u65F6\u542F\u7528\u4E86 \`tools[].security.passthrough\`\uFF0C\u5219\u6B64\u5B57\u6BB5\u5C06\u88AB\u5FFD\u7565\uFF0C\u4F18\u5148\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u3002 |

## \u8BA4\u8BC1\u4E0E\u5B89\u5168

MCP Server \u63D2\u4EF6\u652F\u6301\u7075\u6D3B\u7684\u8BA4\u8BC1\u914D\u7F6E\uFF0C\u4EE5\u786E\u4FDD\u4E0E\u540E\u7AEF REST API \u901A\u4FE1\u7684\u5B89\u5168\u6027\u3002

### \u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848 (\`server.securitySchemes\`)

\u60A8\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u7EA7\u522B\u5B9A\u4E49\u4E00\u7EC4\u53EF\u91CD\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u8FD9\u4E9B\u65B9\u6848\u4E4B\u540E\u53EF\u4EE5\u88AB\u5404\u4E2A\u5DE5\u5177\u5F15\u7528\uFF0C\u7528\u4E8E\u914D\u7F6E MCP Server \u5411\u540E\u7AEF REST API \u53D1\u8D77\u8BF7\u6C42\u65F6\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002

**\u914D\u7F6E\u5B57\u6BB5 (\`server.securitySchemes[]\`)**:

| \u540D\u79F0                | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u63CF\u8FF0                                                                 |
| ------------------- | -------- | -------- | -------------------------------------------------------------------- |
| \`id\`                | string   | \u5FC5\u586B     | \u8BA4\u8BC1\u65B9\u6848\u7684\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4F9B\u5DE5\u5177\u914D\u7F6E\u5F15\u7528\u3002                                 |
| \`type\`              | string   | \u5FC5\u586B     | \u8BA4\u8BC1\u7C7B\u578B\uFF0C\u652F\u6301 \`http\` (\u7528\u4E8E Basic \u548C Bearer\u8BA4\u8BC1) \u548C \`apiKey\`\u3002         |
| \`scheme\`            | string   | \u9009\u586B     | \u5F53 \`type\` \u4E3A \`http\` \u65F6\u6307\u5B9A\u5177\u4F53\u7684\u65B9\u6848\uFF0C\u5982 \`basic\` \u6216 \`bearer\`\u3002           |
| \`in\`                | string   | \u9009\u586B     | \u5F53 \`type\` \u4E3A \`apiKey\` \u65F6\u6307\u5B9A API \u5BC6\u94A5\u7684\u4F4D\u7F6E\uFF0C\u5982 \`header\` \u6216 \`query\`\u3002    |
| \`name\`              | string   | \u9009\u586B     | \u5F53 \`type\` \u4E3A \`apiKey\` \u65F6\u6307\u5B9A Header \u540D\u79F0\u6216\u67E5\u8BE2\u53C2\u6570\u540D\u79F0\u3002                 |
| \`defaultCredential\` | string   | \u9009\u586B     | \u6B64\u65B9\u6848\u7684\u9ED8\u8BA4\u51ED\u8BC1\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E Basic Auth\uFF0C\u53EF\u4EE5\u662F "user:password"\uFF1B\u5BF9\u4E8E Bearer Token\uFF0C\u662F Token \u672C\u8EAB\uFF1B\u5BF9\u4E8E API Key\uFF0C\u662F Key \u672C\u8EAB\u3002 |

**\u793A\u4F8B (\`server.securitySchemes\`)**:

\`\`\`yaml
server:
  name: my-api-server
  securitySchemes:
  - id: MyBasicAuth
    type: http
    scheme: basic
    defaultCredential: "admin:secretpassword" # \u9ED8\u8BA4\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801
  - id: MyBearerToken
    type: http
    scheme: bearer
    defaultCredential: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." # \u9ED8\u8BA4\u7684Bearer Token
  - id: MyApiKeyInHeader
    type: apiKey
    in: header
    name: X-Custom-API-Key # API Key \u5728\u540D\u4E3A X-Custom-API-Key \u7684 Header \u4E2D
    defaultCredential: "abcdef123456" # \u9ED8\u8BA4\u7684 API Key
  - id: MyApiKeyInQuery
    type: apiKey
    in: query
    name: "api_token" # API Key \u5728\u540D\u4E3A api_token \u7684\u67E5\u8BE2\u53C2\u6570\u4E2D
    defaultCredential: "uvwxyz789012"
\`\`\`

### \u5728\u5DE5\u5177\u4E2D\u5E94\u7528\u8BA4\u8BC1\u65B9\u6848

\u5B9A\u4E49\u4E86 \`server.securitySchemes\` \u540E\uFF0C\u60A8\u53EF\u4EE5\u5728\u6BCF\u4E2A\u5DE5\u5177\u7684 \`requestTemplate.security\` \u4E2D\u901A\u8FC7 \`id\` \u5F15\u7528\u8FD9\u4E9B\u65B9\u6848\uFF0C\u4EE5\u6307\u5B9A MCP Server \u8C03\u7528\u540E\u7AEF REST API \u65F6\u4F7F\u7528\u7684\u8BA4\u8BC1\u65B9\u5F0F\u3002

- **\`tools[].requestTemplate.security.id\`**: \u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u7684 \`id\`\u3002
- **\`tools[].requestTemplate.security.credential\`**: \u53EF\u9009\u3002\u5982\u679C\u63D0\u4F9B\uFF0C\u5B83\u5C06\u8986\u76D6\u6240\u5F15\u7528\u65B9\u6848\u4E2D\u7684 \`defaultCredential\`\u3002\u8FD9\u5141\u8BB8\u60A8\u4E3A\u7279\u5B9A\u5DE5\u5177\u4F7F\u7528\u4E0D\u540C\u7684\u51ED\u8BC1\uFF0C\u5373\u4F7F\u5B83\u4EEC\u5171\u4EAB\u76F8\u540C\u7684\u8BA4\u8BC1\u673A\u5236\u3002

**\u793A\u4F8B**:

\`\`\`yaml
tools:
- name: get-user-details
  # ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...
  requestTemplate:
    url: "https://api.example.com/users/{{.args.userId}}"
    method: GET
    security:
      id: MyBearerToken # \u4F7F\u7528\u4E0A\u9762\u5B9A\u4E49\u7684 MyBearerToken \u65B9\u6848
      # credential: "override_token_for_this_tool" # \u53EF\u9009\uFF1A\u4E3A\u6B64\u5DE5\u5177\u8986\u76D6\u9ED8\u8BA4Token
# ...
- name: update-inventory
  # ... \u5176\u4ED6\u5DE5\u5177\u914D\u7F6E ...
  requestTemplate:
    url: "https://api.example.com/inventory/{{.args.itemId}}"
    method: POST
    security:
      id: MyApiKeyInHeader # \u4F7F\u7528 MyApiKeyInHeader \u65B9\u6848
      # \u6B64\u5DE5\u5177\u5C06\u4F7F\u7528 MyApiKeyInHeader \u4E2D\u5B9A\u4E49\u7684 defaultCredential
\`\`\`

### \u900F\u660E\u8BA4\u8BC1 (Passthrough Authentication)

\u900F\u660E\u8BA4\u8BC1\u529F\u80FD\u5141\u8BB8\u5C06 MCP Client (\u4F8B\u5982 AI \u52A9\u624B) \u8C03\u7528 MCP Server \u65F6\u63D0\u4F9B\u7684\u51ED\u8BC1\uFF0C\u900F\u4F20\u7ED9 MCP Server \u8C03\u7528\u540E\u7AEF REST API \u65F6\u7684\u8BA4\u8BC1\u8FC7\u7A0B\u3002

**\u914D\u7F6E\u65B9\u5F0F**:

1.  **\u786E\u4FDD\u76F8\u5173\u8BA4\u8BC1\u65B9\u6848\u5DF2\u5728 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49**\u3002\u8FD9\u5305\u62EC\u5BA2\u6237\u7AEF\u7528\u4E8E\u8FDE\u63A5\u5230 MCP Server \u7684\u65B9\u6848\uFF0C\u4EE5\u53CA MCP Server \u7528\u4E8E\u8FDE\u63A5\u5230\u540E\u7AEF REST API \u7684\u65B9\u6848\u3002
2.  **\u914D\u7F6E\u5DE5\u5177\u7EA7\u522B\u8BA4\u8BC1 (\`tools[].security\`)**:
    \u5728\u9700\u8981\u900F\u4F20\u51ED\u8BC1\u7684\u5DE5\u5177\u4E2D\uFF0C\u914D\u7F6E \`security\` \u5B57\u6BB5\uFF1A
    - \`id\`: \u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u3001\u7528\u4E8E **MCP Client \u4E0E MCP Server \u4E4B\u95F4**\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u63D2\u4EF6\u5C06\u6839\u636E\u6B64\u65B9\u6848\u4ECE\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E2D\u63D0\u53D6\u51ED\u8BC1\uFF0C\u5E76\u6E05\u7406\u539F\u59CB\u8BF7\u6C42\u4E2D\u7684\u8BE5\u51ED\u8BC1\u3002
    - \`passthrough: true\`: \u542F\u7528\u900F\u660E\u8BA4\u8BC1\u3002

3.  **\u914D\u7F6E\u8BF7\u6C42\u6A21\u677F\u8BA4\u8BC1 (\`tools[].requestTemplate.security\`)**:
    \u5728\u5DE5\u5177\u7684 \`requestTemplate\` \u4E2D\uFF0C\u914D\u7F6E \`security\` \u5B57\u6BB5\uFF1A
    - \`id\`: \u5F15\u7528 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u3001\u7528\u4E8E **MCP Server \u4E0E\u540E\u7AEF REST API \u4E4B\u95F4**\u7684\u8BA4\u8BC1\u65B9\u6848\u3002
    - \u5F53 \`tools[].security.passthrough\` \u4E3A \`true\` \u65F6\uFF0C\u4ECE\u5BA2\u6237\u7AEF\u63D0\u53D6\u7684\u51ED\u8BC1\u5C06\u6839\u636E\u6B64 \`requestTemplate.security\` \u65B9\u6848\u5E94\u7528\u4E8E\u5BF9\u540E\u7AEF REST API \u7684\u8C03\u7528\u3002

**\u793A\u4F8B**:

\u5047\u8BBE MCP Client \u4F7F\u7528 Bearer Token \u8C03\u7528 MCP Server\uFF0C\u800C MCP Server \u9700\u8981\u4F7F\u7528 API Key \u8C03\u7528\u540E\u7AEF\u7684 REST API\u3002

\`\`\`yaml
server:
  name: product-api-server
  securitySchemes:
  - id: ClientSideBearer # \u5BA2\u6237\u7AEF\u4F7F\u7528Bearer Token
    type: http
    scheme: bearer
  - id: BackendApiKey    # \u540E\u7AEFAPI\u4F7F\u7528X-API-Key
    type: apiKey
    in: header
    name: X-API-Key
    # defaultCredential: "optional_default_backend_key"

tools:
- name: get-product-securely
  description: "\u83B7\u53D6\u4EA7\u54C1\u4FE1\u606F\uFF08\u5B89\u5168\u900F\u4F20\uFF09"
  security: # \u5BA2\u6237\u7AEF -> MCP Server \u8BA4\u8BC1\u914D\u7F6E
    id: ClientSideBearer # MCP Server\u671F\u671B\u5BA2\u6237\u7AEF\u4F7F\u7528\u6B64\u65B9\u6848\uFF0C\u5E76\u4F1A\u5C1D\u8BD5\u63D0\u53D6\u6B64\u7C7B\u578B\u7684\u51ED\u8BC1
    passthrough: true   # \u542F\u7528\u900F\u4F20
  args:
  - name: product_id
    description: "\u4EA7\u54C1ID"
    type: string
    required: true
  requestTemplate:
    security: # MCP Server -> \u540E\u7AEF REST API \u8BA4\u8BC1\u914D\u7F6E
      id: BackendApiKey # \u540E\u7AEFAPI\u9700\u8981\u6B64\u65B9\u6848\u3002\u900F\u4F20\u7684\u51ED\u8BC1\u5C06\u6309\u6B64\u65B9\u6848\u5E94\u7528\u3002
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
\`\`\`

**\u5DE5\u4F5C\u6D41\u7A0B**:

1.  MCP Client \u53D1\u8D77\u8BF7\u6C42\u5230 MCP Server \u7684 \`get-product-securely\` \u5DE5\u5177\uFF0C\u5E76\u5728 \`Authorization\` \u5934\u4E2D\u643A\u5E26 \`Bearer <client_token>\`\u3002
2.  MCP Server \u6839\u636E \`tools[].security\` (id: \`ClientSideBearer\`) \u8BC6\u522B\u51FA\u5BA2\u6237\u7AEF\u4F7F\u7528\u7684\u662F Bearer Token\u3002\u5B83\u4F1A\u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6 \`<client_token>\` \u5E76\u79FB\u9664\u539F\u59CB\u7684 \`Authorization\` \u5934\u3002
3.  \u56E0\u4E3A \`passthrough: true\`\uFF0C\u63D0\u53D6\u51FA\u7684 \`<client_token>\` \u88AB\u6807\u8BB0\u4E3A\u900F\u4F20\u51ED\u8BC1\u3002
4.  MCP Server \u51C6\u5907\u8C03\u7528\u540E\u7AEF REST API\u3002\u5B83\u67E5\u770B \`requestTemplate.security\` (id: \`BackendApiKey\`)\u3002
5.  \u7531\u4E8E\u542F\u7528\u4E86\u900F\u4F20\uFF0CMCP Server \u5C06\u4E4B\u524D\u63D0\u53D6\u7684 \`<client_token>\` \u4F5C\u4E3A\u51ED\u8BC1\u503C\uFF0C\u6309\u7167 \`BackendApiKey\` \u65B9\u6848\uFF08\u5373\u4F5C\u4E3A\u540D\u4E3A \`X-API-Key\` \u7684 HTTP Header\uFF09\u6DFB\u52A0\u5230\u5BF9 \`https://api.example.com/products/...\` \u7684\u8BF7\u6C42\u4E2D\u3002
6.  \u540E\u7AEF REST API \u6536\u5230\u8BF7\u6C42\uFF0C\u5176\u4E2D \`X-API-Key\` Header \u7684\u503C\u4E3A \`<client_token>\`\u3002

**\u6CE8\u610F\u4E8B\u9879**:
- \u5F53 \`tools[].security.passthrough\` \u4E3A \`true\` \u65F6\uFF0C\`requestTemplate.security.credential\` \u5B57\u6BB5\u4F1A\u88AB\u5FFD\u7565\uFF0C\u4F18\u5148\u4F7F\u7528\u900F\u4F20\u7684\u51ED\u8BC1\u3002
- \u900F\u4F20\u7684\u51ED\u8BC1\u503C\u4F1A\u76F4\u63A5\u7528\u4E8E \`requestTemplate.security\` \u6307\u5B9A\u7684\u8BA4\u8BC1\u65B9\u6848\u3002\u8BF7\u786E\u4FDD\u51ED\u8BC1\u7684\u683C\u5F0F\u4E0E\u76EE\u6807\u8BA4\u8BC1\u65B9\u6848\u517C\u5BB9\u3002\`extractAndRemoveIncomingCredential\` \u51FD\u6570\u4F1A\u5C1D\u8BD5\u63D0\u53D6\u6838\u5FC3\u51ED\u8BC1\u90E8\u5206\uFF08\u4F8B\u5982\uFF0CBearer token \u503C\uFF0CBasic auth \u7684 base64 \u7F16\u7801\u90E8\u5206\uFF09\u3002

## \u53C2\u6570\u7C7B\u578B\u652F\u6301

REST-to-MCP \u5DE5\u5177\u652F\u6301\u591A\u79CD\u53C2\u6570\u7C7B\u578B\uFF0C\u4F7F\u60A8\u53EF\u4EE5\u66F4\u7CBE\u786E\u5730\u5B9A\u4E49\u5DE5\u5177\u53C2\u6570\uFF1A

- **string**: \u5B57\u7B26\u4E32\u7C7B\u578B\uFF08\u9ED8\u8BA4\uFF09
- **number**: \u6570\u5B57\u7C7B\u578B\uFF08\u6D6E\u70B9\u6570\uFF09
- **integer**: \u6574\u6570\u7C7B\u578B
- **boolean**: \u5E03\u5C14\u7C7B\u578B\uFF08true/false\uFF09
- **array**: \u6570\u7EC4\u7C7B\u578B\uFF0C\u4F7F\u7528 \`items\` \u5B57\u6BB5\u5B9A\u4E49\u6570\u7EC4\u5143\u7D20\u7684\u6A21\u5F0F
- **object**: \u5BF9\u8C61\u7C7B\u578B\uFF0C\u4F7F\u7528 \`properties\` \u5B57\u6BB5\u5B9A\u4E49\u5BF9\u8C61\u5C5E\u6027\u7684\u6A21\u5F0F

\u793A\u4F8B\uFF1A

\`\`\`yaml
args:
- name: query
  description: "\u641C\u7D22\u5173\u952E\u8BCD"
  type: string
  required: true
- name: limit
  description: "\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF"
  type: integer
  default: 10
- name: filters
  description: "\u8FC7\u6EE4\u6761\u4EF6"
  type: object
  properties:
    category:
      type: string
      enum: ["food", "hotel", "attraction"]
    price:
      type: integer
      minimum: 0
- name: coordinates
  description: "\u5750\u6807\u70B9\u5217\u8868"
  type: array
  items:
    type: object
    properties:
      lat:
        type: number
      lng:
        type: number
\`\`\`

## \u53C2\u6570\u4F4D\u7F6E\u63A7\u5236

REST-to-MCP \u5DE5\u5177\u652F\u6301\u901A\u8FC7 \`position\` \u5B57\u6BB5\u7CBE\u786E\u63A7\u5236\u6BCF\u4E2A\u53C2\u6570\u5728\u8BF7\u6C42\u4E2D\u7684\u4F4D\u7F6E\u3002\u8FD9\u4F7F\u60A8\u53EF\u4EE5\u66F4\u7075\u6D3B\u5730\u6784\u5EFA API \u8BF7\u6C42\uFF0C\u4F8B\u5982\u540C\u65F6\u4F7F\u7528\u8DEF\u5F84\u53C2\u6570\u3001\u67E5\u8BE2\u53C2\u6570\u548C\u8BF7\u6C42\u4F53\u53C2\u6570\u3002

### \u652F\u6301\u7684\u4F4D\u7F6E\u7C7B\u578B

- **query**: \u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D
- **path**: \u53C2\u6570\u5C06\u66FF\u6362 URL \u4E2D\u7684\u8DEF\u5F84\u5360\u4F4D\u7B26\uFF0C\u4F8B\u5982 \`/pet/{petId}\` \u4E2D\u7684 \`{petId}\`
- **header**: \u53C2\u6570\u5C06\u4F5C\u4E3A HTTP \u5934\u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- **cookie**: \u53C2\u6570\u5C06\u4F5C\u4E3A Cookie \u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- **body**: \u53C2\u6570\u5C06\u6DFB\u52A0\u5230\u8BF7\u6C42\u4F53\u4E2D\uFF08\u6839\u636E\u5185\u5BB9\u7C7B\u578B\u81EA\u52A8\u683C\u5F0F\u5316\u4E3A JSON \u6216\u8868\u5355\uFF09

### \u4F7F\u7528\u793A\u4F8B

\`\`\`yaml
args:
- name: petId
  description: "\u5BA0\u7269ID"
  type: string
  required: true
  position: path
- name: token
  description: "\u8BA4\u8BC1\u4EE4\u724C"
  type: string
  required: true
  position: header
- name: sessionId
  description: "\u4F1A\u8BDDID"
  type: string
  position: cookie
- name: limit
  description: "\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF"
  type: integer
  default: 10
  position: query
- name: tags
  description: "\u6807\u7B7E\u5217\u8868"
  type: array
  position: body
\`\`\`

\u5728\u4E0A\u9762\u7684\u793A\u4F8B\u4E2D\uFF1A
- \`petId\` \u5C06\u66FF\u6362 URL \u4E2D\u7684 \`{petId}\` \u5360\u4F4D\u7B26
- \`token\` \u5C06\u4F5C\u4E3A HTTP \u5934\u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- \`sessionId\` \u5C06\u4F5C\u4E3A Cookie \u6DFB\u52A0\u5230\u8BF7\u6C42\u4E2D
- \`limit\` \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D
- \`tags\` \u5C06\u6DFB\u52A0\u5230\u8BF7\u6C42\u4F53\u4E2D

### \u4E0E\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\u7684\u5173\u7CFB

\u5F53\u4F7F\u7528 \`position\` \u6307\u5B9A\u53C2\u6570\u4F4D\u7F6E\u65F6\uFF0C\u8FD9\u4E9B\u53C2\u6570\u5C06\u6309\u7167\u6307\u5B9A\u7684\u4F4D\u7F6E\u5904\u7406\uFF0C\u800C\u4E0D\u4F1A\u53D7\u5230\u6279\u91CF\u53C2\u6570\u5904\u7406\u9009\u9879\uFF08\`argsToJsonBody\`\u3001\`argsToUrlParam\`\u3001\`argsToFormBody\`\uFF09\u7684\u5F71\u54CD\u3002\u53EA\u6709\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u624D\u4F1A\u53D7\u5230\u8FD9\u4E9B\u6279\u91CF\u9009\u9879\u7684\u5F71\u54CD\u3002

\u4F8B\u5982\uFF0C\u5982\u679C\u60A8\u540C\u65F6\u4F7F\u7528\u4E86 \`position\` \u548C \`argsToJsonBody\`\uFF1A
- \u6307\u5B9A\u4E86 \`position: query\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 URL \u67E5\u8BE2\u5B57\u7B26\u4E32\u4E2D
- \u6307\u5B9A\u4E86 \`position: header\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 HTTP \u5934\u4E2D
- \u6307\u5B9A\u4E86 \`position: path\` \u7684\u53C2\u6570\u4F1A\u66FF\u6362 URL \u4E2D\u7684\u5360\u4F4D\u7B26
- \u6307\u5B9A\u4E86 \`position: cookie\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 Cookie \u4E2D
- \u6307\u5B9A\u4E86 \`position: body\` \u7684\u53C2\u6570\u4F1A\u6DFB\u52A0\u5230 JSON \u8BF7\u6C42\u4F53\u4E2D
- \u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u4F1A\u901A\u8FC7 \`argsToJsonBody\` \u6DFB\u52A0\u5230 JSON \u8BF7\u6C42\u4F53\u4E2D

\u6B64\u5916\uFF0C\u5982\u679C\u5728 \`requestTemplate\` \u4E2D\u660E\u786E\u6307\u5B9A\u4E86 \`body\`\uFF0C\u5219\u6240\u6709 \`position: body\` \u7684\u53C2\u6570\u90FD\u5C06\u88AB\u5FFD\u7565\uFF0C\u4EE5\u907F\u514D\u51B2\u7A81\u3002

## \u8BF7\u6C42\u53C2\u6570\u4F20\u9012\u65B9\u5F0F

\u9664\u4E86\u4F7F\u7528 \`position\` \u7CBE\u786E\u63A7\u5236\u6BCF\u4E2A\u53C2\u6570\u7684\u4F4D\u7F6E\u5916\uFF0CREST-to-MCP \u5DE5\u5177\u8FD8\u652F\u6301\u56DB\u79CD\u6279\u91CF\u53C2\u6570\u5904\u7406\u65B9\u5F0F\uFF0C\u8FD9\u4E9B\u9009\u9879\u662F**\u4E92\u65A5\u7684**\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD\uFF1A

1. **body**: \u4F7F\u7528\u6A21\u677F\u624B\u52A8\u6784\u5EFA\u8BF7\u6C42\u4F53\u3002\u8FD9\u662F\u6700\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u5141\u8BB8\u60A8\u5B8C\u5168\u63A7\u5236\u8BF7\u6C42\u4F53\u7684\u683C\u5F0F\u3002
   \`\`\`yaml
   requestTemplate:
     body: |
       {
         "query": "{{.args.query}}",
         "filters": {{toJson .args.filters}},
         "options": {
           "limit": {{.args.limit}}
         }
       }
   \`\`\`

2. **argsToJsonBody**: \u5F53\u8BBE\u7F6E\u4E3A \`true\` \u65F6\uFF0C\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u5C06\u76F4\u63A5\u4F5C\u4E3A JSON \u5BF9\u8C61\u53D1\u9001\u5230\u8BF7\u6C42\u4F53\u4E2D\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0 \`Content-Type: application/json; charset=utf-8\` \u5934\u3002
   \`\`\`yaml
   requestTemplate:
     argsToJsonBody: true
   \`\`\`

3. **argsToUrlParam**: \u5F53\u8BBE\u7F6E\u4E3A \`true\` \u65F6\uFF0C\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u5C06\u4F5C\u4E3A\u67E5\u8BE2\u53C2\u6570\u6DFB\u52A0\u5230 URL \u4E2D\u3002
   \`\`\`yaml
   requestTemplate:
     argsToUrlParam: true
   \`\`\`

4. **argsToFormBody**: \u5F53\u8BBE\u7F6E\u4E3A \`true\` \u65F6\uFF0C\u672A\u6307\u5B9A \`position\` \u7684\u53C2\u6570\u5C06\u4EE5 \`application/x-www-form-urlencoded\` \u683C\u5F0F\u7F16\u7801\u5728\u8BF7\u6C42\u4F53\u4E2D\uFF0C\u5E76\u81EA\u52A8\u6DFB\u52A0\u76F8\u5E94\u7684 Content-Type \u5934\u3002
   \`\`\`yaml
   requestTemplate:
     argsToFormBody: true
   \`\`\`

\u8FD9\u4E9B\u9009\u9879\u7B80\u5316\u4E86\u5E38\u89C1 API \u8C03\u7528\u6A21\u5F0F\u7684\u914D\u7F6E\uFF0C\u65E0\u9700\u624B\u52A8\u6784\u5EFA\u8BF7\u6C42\u4F53\u6216 URL \u53C2\u6570\u3002\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u56DB\u4E2A\u9009\u9879\u662F\u4E92\u65A5\u7684\uFF0C\u5728\u4E00\u4E2A\u5DE5\u5177\u914D\u7F6E\u4E2D\u53EA\u80FD\u4F7F\u7528\u5176\u4E2D\u4E00\u79CD\u3002\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86\u591A\u4E2A\u9009\u9879\uFF0C\u7CFB\u7EDF\u4F1A\u62A5\u9519\u5E76\u62D2\u7EDD\u52A0\u8F7D\u8BE5\u5DE5\u5177\u914D\u7F6E\u3002

## \u6A21\u677F\u8BED\u6CD5

REST-to-MCP \u529F\u80FD\u4F7F\u7528 [GJSON Template](https://github.com/higress-group/gjson_template) \u5E93\u8FDB\u884C\u6A21\u677F\u6E32\u67D3\uFF0C\u5B83\u7ED3\u5408\u4E86 Go \u7684\u6A21\u677F\u8BED\u6CD5\u548C GJSON \u7684\u5F3A\u5927\u8DEF\u5F84\u8BED\u6CD5\uFF1A

### \u8BF7\u6C42\u6A21\u677F

\u7528\u4E8E\u6784\u9020 HTTP \u8BF7\u6C42 URL\u3001\u5934\u90E8\u548C\u6B63\u6587\uFF1A
- \u8BBF\u95EE\u914D\u7F6E\u503C\uFF1A\`.config.\u5B57\u6BB5\u540D\`
- \u8BBF\u95EE\u5DE5\u5177\u53C2\u6570\uFF1A\`.args.\u53C2\u6570\u540D\`

### \u54CD\u5E94\u6A21\u677F

\u7528\u4E8E\u5C06 HTTP \u54CD\u5E94\u8F6C\u6362\u4E3A\u9002\u5408 AI \u6D88\u8D39\u7684\u683C\u5F0F\uFF1A
- \u4F7F\u7528 GJSON \u8DEF\u5F84\u8BED\u6CD5\u8BBF\u95EE JSON \u54CD\u5E94\u5B57\u6BB5
- \u4F7F\u7528\u6A21\u677F\u51FD\u6570\u5982 \`add\`\u3001\`upper\`\u3001\`lower\` \u7B49
- \u4F7F\u7528\u63A7\u5236\u7ED3\u6784\u5982 \`if\`\u3001\`range\` \u7B49

GJSON Template \u5305\u542B\u4E86\u6240\u6709 [Sprig](https://github.com/Masterminds/sprig) \u7684\u51FD\u6570\uFF0C\u63D0\u4F9B\u4E86 70+ \u79CD\u7528\u4E8E\u5B57\u7B26\u4E32\u64CD\u4F5C\u3001\u6570\u5B66\u8FD0\u7B97\u3001\u65E5\u671F\u683C\u5F0F\u5316\u7B49\u7684\u6A21\u677F\u51FD\u6570\uFF0C\u529F\u80FD\u7B49\u540C\u4E8E Helm \u7684\u6A21\u677F\u80FD\u529B\u3002

\u5E38\u7528\u7684 Sprig \u51FD\u6570\u5305\u62EC\uFF1A

- **\u5B57\u7B26\u4E32\u64CD\u4F5C**\uFF1A\`trim\`\u3001\`upper\`\u3001\`lower\`\u3001\`replace\`\u3001\`plural\`\u3001\`nospace\`
- **\u6570\u5B66\u8FD0\u7B97**\uFF1A\`add\`\u3001\`sub\`\u3001\`mul\`\u3001\`div\`\u3001\`max\`\u3001\`min\`
- **\u65E5\u671F\u683C\u5F0F\u5316**\uFF1A\`now\`\u3001\`date\`\u3001\`dateInZone\`\u3001\`dateModify\`
- **\u5217\u8868\u64CD\u4F5C**\uFF1A\`list\`\u3001\`first\`\u3001\`last\`\u3001\`uniq\`\u3001\`sortAlpha\`
- **\u5B57\u5178\u64CD\u4F5C**\uFF1A\`dict\`\u3001\`get\`\u3001\`set\`\u3001\`hasKey\`\u3001\`pluck\`
- **\u6D41\u7A0B\u63A7\u5236**\uFF1A\`ternary\`\u3001\`default\`\u3001\`empty\`\u3001\`coalesce\`
- **\u7C7B\u578B\u8F6C\u6362**\uFF1A\`toString\`\u3001\`toJson\`\u3001\`toPrettyJson\`\u3001\`toRawJson\`
- **\u7F16\u7801/\u89E3\u7801**\uFF1A\`b64enc\`\u3001\`b64dec\`\u3001\`urlquery\`\u3001\`urlqueryescape\`
- **UUID \u751F\u6210**\uFF1A\`uuidv4\`

\u6709\u5173\u6240\u6709\u53EF\u7528\u51FD\u6570\u7684\u5B8C\u6574\u53C2\u8003\uFF0C\u8BF7\u53C2\u9605 [Helm \u51FD\u6570\u6587\u6863](https://helm.sh/docs/chart_template_guide/function_list/)\uFF0C\u56E0\u4E3A GJSON Template \u5305\u542B\u4E86\u76F8\u540C\u7684\u51FD\u6570\u96C6\u3002

### GJSON \u8DEF\u5F84\u8BED\u6CD5

GJSON \u63D0\u4F9B\u4E86\u5F3A\u5927\u7684 JSON \u67E5\u8BE2\u80FD\u529B\uFF1A

- **\u70B9\u8868\u793A\u6CD5**\uFF1A\`address.city\`
- **\u6570\u7EC4\u7D22\u5F15**\uFF1A\`users.0.name\`
- **\u6570\u7EC4\u8FED\u4EE3**\uFF1A\`users.#.name\`
- **\u6570\u7EC4\u8FC7\u6EE4**\uFF1A\`users.#(age>=30)#.name\`
- **\u4FEE\u9970\u7B26**\uFF1A\`users.@reverse.#.name\`
- **\u591A\u8DEF\u5F84**\uFF1A\`{name:users.0.name,count:users.#}\`
- **\u8F6C\u4E49\u5B57\u7B26**\uFF1A\`path.with\\.dot\`

\u5BF9\u4E8E\u66F4\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`gjson\` \u51FD\u6570\uFF1A

\`\`\`
<!-- \u4F7F\u7528 gjson \u51FD\u6570\u8FDB\u884C\u590D\u6742\u67E5\u8BE2 -->
\u6D3B\u8DC3\u7528\u6237: {{gjson "users.#(active==true)#.name"}}

<!-- \u5E26\u6709\u591A\u4E2A\u6761\u4EF6\u7684\u6570\u7EC4\u8FC7\u6EE4 -->
30\u5C81\u4EE5\u4E0A\u7684\u6D3B\u8DC3\u5F00\u53D1\u8005: {{gjson "users.#(active==true && age>30)#.name"}}

<!-- \u4F7F\u7528\u4FEE\u9970\u7B26 -->
\u7528\u6237\u540D\uFF08\u5012\u5E8F\uFF09: {{gjson "users.@reverse.#.name"}}

<!-- \u8FED\u4EE3\u8FC7\u6EE4\u7ED3\u679C -->
\u7BA1\u7406\u5458:
{{range $user := gjson "users.#(roles.#(==admin)>0)#"}}
  - {{$user.name}} ({{$user.age}})
{{end}}
\`\`\`

\u5B8C\u6574\u7684 GJSON \u8DEF\u5F84\u8BED\u6CD5\u53C2\u8003\u53EF\u67E5\u770B [GJSON \u6587\u6863](https://github.com/tidwall/gjson#path-syntax)\u3002

## \u914D\u7F6E\u793A\u4F8B

### \u4F7F\u7528\u5185\u7F6E MCP \u670D\u52A1\u5668\u793A\u4F8B\uFF1A\u914D\u7F6E quark-search

\`\`\`yaml
server:
  name: "quark-search"
  config:
    apiKey: "xxxx"
\`\`\`

\u6B64\u914D\u7F6E\u4F7F\u7528\u4E86 Higress \u5185\u7F6E\u7684 quark-search MCP \u670D\u52A1\u5668\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EA\u9700\u8981\u6307\u5B9A\u670D\u52A1\u5668\u540D\u79F0\u548C\u5FC5\u8981\u7684\u914D\u7F6E\uFF08\u5982 API \u5BC6\u94A5\uFF09\uFF0C\u65E0\u9700\u914D\u7F6E tools \u5B57\u6BB5\uFF0C\u56E0\u4E3A\u5DE5\u5177\u5DF2\u7ECF\u5728\u670D\u52A1\u5668\u4E2D\u9884\u5B9A\u4E49\u597D\u4E86\u3002

### \u57FA\u7840\u914D\u7F6E\u793A\u4F8B\uFF1A\u8F6C\u6362\u9AD8\u5FB7\u5730\u56FE API

\`\`\`yaml
server:
  name: rest-amap-server
  config:
    apiKey: your-api-key-here
tools:
- name: maps-geo
  description: "\u5C06\u8BE6\u7EC6\u7684\u7ED3\u6784\u5316\u5730\u5740\u8F6C\u6362\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807\u3002\u652F\u6301\u5BF9\u5730\u6807\u6027\u540D\u80DC\u666F\u533A\u3001\u5EFA\u7B51\u7269\u540D\u79F0\u89E3\u6790\u4E3A\u7ECF\u7EAC\u5EA6\u5750\u6807"
  args:
  - name: address
    description: "\u5F85\u89E3\u6790\u7684\u7ED3\u6784\u5316\u5730\u5740\u4FE1\u606F"
    type: string
    required: true
  - name: city
    description: "\u6307\u5B9A\u67E5\u8BE2\u7684\u57CE\u5E02"
    type: string
    required: false
  - name: output
    description: "\u8F93\u51FA\u683C\u5F0F"
    type: string
    enum: ["json", "xml"]
    default: "json"
  requestTemplate:
    url: "https://restapi.amap.com/v3/geocode/geo"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # \u5730\u7406\u7F16\u7801\u4FE1\u606F
      {{- range $index, $geo := .geocodes }}
      ## \u5730\u70B9 {{add $index 1}}

      - **\u56FD\u5BB6**: {{ $geo.country }}
      - **\u7701\u4EFD**: {{ $geo.province }}
      - **\u57CE\u5E02**: {{ $geo.city }}
      - **\u57CE\u5E02\u4EE3\u7801**: {{ $geo.citycode }}
      - **\u533A/\u53BF**: {{ $geo.district }}
      - **\u8857\u9053**: {{ $geo.street }}
      - **\u95E8\u724C\u53F7**: {{ $geo.number }}
      - **\u884C\u653F\u7F16\u7801**: {{ $geo.adcode }}
      - **\u5750\u6807**: {{ $geo.location }}
      - **\u7EA7\u522B**: {{ $geo.level }}
      {{- end }}
\`\`\`

\u6B64\u914D\u7F6E\u5C06\u9AD8\u5FB7\u5730\u56FE\u7684\u5730\u7406\u7F16\u7801 API \u8F6C\u6362\u4E3A AI \u53EF\u8C03\u7528\u7684\u5DE5\u5177\u3002\u5F53 AI \u8C03\u7528\u6B64\u5DE5\u5177\u65F6\uFF1A

1. \u4F7F\u7528\u63D0\u4F9B\u7684\u5730\u5740\u548C\u57CE\u5E02\u53C2\u6570\u6784\u5EFA API \u8BF7\u6C42
2. \u8C03\u7528\u9AD8\u5FB7\u5730\u56FE API
3. \u5C06 JSON \u54CD\u5E94\u8F6C\u6362\u4E3A\u6613\u4E8E\u9605\u8BFB\u7684 Markdown \u683C\u5F0F
4. \u5C06\u683C\u5F0F\u5316\u540E\u7684\u7ED3\u679C\u8FD4\u56DE\u7ED9 AI \u52A9\u624B

### \u9AD8\u7EA7\u914D\u7F6E\u793A\u4F8B\uFF1A\u5E26\u6709\u6761\u4EF6\u903B\u8F91\u7684\u590D\u6742\u54CD\u5E94\u5904\u7406

\`\`\`yaml
server:
  name: weather-api-server
  config:
    apiKey: your-weather-api-key
tools:
- name: get-weather
  description: "\u83B7\u53D6\u6307\u5B9A\u57CE\u5E02\u7684\u5929\u6C14\u9884\u62A5\u4FE1\u606F"
  args:
  - name: city
    description: "\u57CE\u5E02\u540D\u79F0"
    type: string
    required: true
  - name: days
    description: "\u5929\u6570(1-7)"
    type: integer
    required: false
    default: 3
  - name: include_hourly
    description: "\u662F\u5426\u5305\u542B\u6BCF\u5C0F\u65F6\u9884\u62A5"
    type: boolean
    default: true
  requestTemplate:
    url: "https://api.weatherapi.com/v1/forecast.json"
    method: GET
    argsToUrlParam: true
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    body: |
      # {{.location.name}}, {{.location.country}} \u5929\u6C14\u9884\u62A5

      **\u5F53\u524D\u6E29\u5EA6**: {{.current.temp_c}}\xB0C
      **\u4F53\u611F\u6E29\u5EA6**: {{.current.feelslike_c}}\xB0C
      **\u5929\u6C14\u72B6\u51B5**: {{.current.condition.text}}
      **\u6E7F\u5EA6**: {{.current.humidity}}%
      **\u98CE\u901F**: {{.current.wind_kph}} km/h

      ## \u672A\u6765\u9884\u62A5
      {{range $index, $day := .forecast.forecastday}}
      ### {{$day.date}} ({{dateFormat "Monday" $day.date_epoch | title}})
      
      {{if gt $day.day.maxtemp_c 30}}**\u9AD8\u6E29\u9884\u8B66!**{{end}}
      {{if lt $day.day.mintemp_c 0}}**\u4F4E\u6E29\u9884\u8B66!**{{end}}
      
      - **\u6700\u9AD8\u6E29\u5EA6**: {{$day.day.maxtemp_c}}\xB0C
      - **\u6700\u4F4E\u6E29\u5EA6**: {{$day.day.mintemp_c}}\xB0C
      - **\u964D\u6C34\u6982\u7387**: {{$day.day.daily_chance_of_rain}}%
      - **\u5929\u6C14\u72B6\u51B5**: {{$day.day.condition.text}}
      
      #### \u5206\u65F6\u9884\u62A5
      {{range $hour := slice $day.hour 6 24 3}}
      - **{{dateFormat "15:04" $hour.time_epoch}}**: {{$hour.temp_c}}\xB0C, {{$hour.condition.text}}
      {{end}}
      {{end}}
\`\`\`

\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A
- \u4F7F\u7528\u6761\u4EF6\u8BED\u53E5 (\`if\`) \u8FDB\u884C\u6E29\u5EA6\u8B66\u544A
- \u4F7F\u7528\u65E5\u671F\u683C\u5F0F\u5316\u51FD\u6570 (\`dateFormat\`)
- \u4F7F\u7528\u6570\u7EC4\u5207\u7247 (\`slice\`) \u9009\u62E9\u7279\u5B9A\u65F6\u95F4\u7684\u5929\u6C14
- \u5D4C\u5957\u5FAA\u73AF\u904D\u5386\u591A\u5929\u548C\u591A\u65F6\u6BB5\u7684\u5929\u6C14\u6570\u636E

### \u4F7F\u7528 PrependBody \u548C AppendBody \u7684\u793A\u4F8B\uFF1AOpenAPI \u8F6C\u6362

\u5F53\u60A8\u60F3\u4FDD\u7559\u539F\u59CB API \u54CD\u5E94\u4F46\u6DFB\u52A0\u989D\u5916\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\u65F6\uFF0C\`prependBody\` \u548C \`appendBody\` \u5B57\u6BB5\u975E\u5E38\u6709\u7528\u3002\u8FD9\u5728\u5C06 OpenAPI/Swagger \u89C4\u8303\u8F6C\u6362\u4E3A MCP \u5DE5\u5177\u65F6\u7279\u522B\u6709\u4EF7\u503C\uFF0C\u56E0\u4E3A\u60A8\u53EF\u4EE5\u4FDD\u7559\u539F\u59CB JSON \u54CD\u5E94\uFF0C\u540C\u65F6\u4E3A AI \u52A9\u624B\u63D0\u4F9B\u5B57\u6BB5\u542B\u4E49\u7684\u8BF4\u660E\u3002

\`\`\`yaml
server:
  name: product-api-server
  config:
    apiKey: your-api-key-here
tools:
- name: get-product
  description: "\u83B7\u53D6\u4EA7\u54C1\u8BE6\u7EC6\u4FE1\u606F"
  args:
  - name: product_id
    description: "\u4EA7\u54C1ID"
    type: string
    required: true
  requestTemplate:
    url: "https://api.example.com/products/{{.args.product_id}}"
    method: GET
    headers:
    - key: Authorization
      value: "Bearer {{.config.apiKey}}"
  responseTemplate:
    prependBody: |
      # \u4EA7\u54C1\u4FE1\u606F
      
      \u4EE5\u4E0B\u662F\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5JSON\u683C\u5F0F\u8FD4\u56DE\u3002\u5B57\u6BB5\u8BF4\u660E\uFF1A
      
      - **id**: \u4EA7\u54C1\u552F\u4E00\u6807\u8BC6\u7B26
      - **name**: \u4EA7\u54C1\u540D\u79F0
      - **description**: \u4EA7\u54C1\u63CF\u8FF0
      - **price**: \u4EA7\u54C1\u4EF7\u683C\uFF08\u7F8E\u5143\uFF09
      - **category**: \u4EA7\u54C1\u7C7B\u522B
      - **inventory**: \u5E93\u5B58\u4FE1\u606F
        - **quantity**: \u5F53\u524D\u5E93\u5B58\u6570\u91CF
        - **warehouse**: \u4ED3\u5E93\u4F4D\u7F6E
      - **ratings**: \u7528\u6237\u8BC4\u5206\u5217\u8868
        - **score**: \u8BC4\u5206\uFF081-5\uFF09
        - **comment**: \u8BC4\u8BBA\u5185\u5BB9
      
      \u539F\u59CBJSON\u54CD\u5E94\uFF1A
      
    appendBody: |
      
      \u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u4FE1\u606F\u6765\u4E86\u89E3\u4EA7\u54C1\u7684\u8BE6\u7EC6\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u72B6\u6001\u548C\u7528\u6237\u8BC4\u4EF7\u3002
\`\`\`

\u6B64\u793A\u4F8B\u5C55\u793A\u4E86\uFF1A
- \u4F7F\u7528 \`prependBody\` \u5728\u539F\u59CB JSON \u54CD\u5E94\u524D\u6DFB\u52A0\u5B57\u6BB5\u8BF4\u660E
- \u4F7F\u7528 \`appendBody\` \u5728\u54CD\u5E94\u672B\u5C3E\u6DFB\u52A0\u4F7F\u7528\u5EFA\u8BAE
- \u4FDD\u7559\u539F\u59CB JSON \u54CD\u5E94\uFF0C\u4F7F AI \u52A9\u624B\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u6240\u6709\u6570\u636E


## AI \u63D0\u793A\u8BCD\u751F\u6210\u6A21\u677F

\u5728\u4E0E AI \u52A9\u624B\u4E00\u8D77\u751F\u6210 REST-to-MCP \u914D\u7F6E\u7684\u6A21\u677F\u65F6\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u63D0\u793A\u8BCD\uFF1A

\`\`\`
\u8BF7\u5E2E\u6211\u521B\u5EFA\u4E00\u4E2A Higress \u7684 REST-to-MCP \u914D\u7F6E\uFF0C\u5C06 REST API \u8F6C\u6362\u4E3A MCP \u5DE5\u5177\u3002

## \u914D\u7F6E\u683C\u5F0F

\u914D\u7F6E\u5E94\u9075\u5FAA\u4EE5\u4E0B\u683C\u5F0F\uFF1A

\`\`\`yaml
server:
  name: rest-api-server
  config:
    apiKey: \u60A8\u7684API\u5BC6\u94A5
tools:
- name: tool-name
  description: "\u8BE6\u7EC6\u63CF\u8FF0\u8FD9\u4E2A\u5DE5\u5177\u7684\u529F\u80FD"
  args:
  - name: arg1
    description: "\u53C2\u65701\u7684\u63CF\u8FF0"
    type: string  # \u53EF\u9009\u7C7B\u578B: string, number, integer, boolean, array, object
    required: true
    position: path  # \u53EF\u9009\u4F4D\u7F6E: query, path, header, cookie, body
  - name: arg2
    description: "\u53C2\u65702\u7684\u63CF\u8FF0"
    type: integer
    required: false
    default: 10
    position: query
  - name: arg3
    description: "\u53C2\u65703\u7684\u63CF\u8FF0"
    type: array
    items:
      type: string
    position: body
  - name: arg4
    description: "\u53C2\u65704\u7684\u63CF\u8FF0"
    type: object
    properties:
      subfield1:
        type: string
      subfield2:
        type: number
    # \u672A\u6307\u5B9Aposition\uFF0C\u5C06\u6839\u636EargsToJsonBody/argsToUrlParam/argsToFormBody\u5904\u7406
  requestTemplate:
    url: "https://api.example.com/endpoint"
    method: POST
    # \u4EE5\u4E0B\u56DB\u4E2A\u9009\u9879\u4E92\u65A5\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD
    argsToUrlParam: true  # \u5C06\u53C2\u6570\u6DFB\u52A0\u5230URL\u67E5\u8BE2\u53C2\u6570
    # \u6216\u8005
    # argsToJsonBody: true  # \u5C06\u53C2\u6570\u4F5C\u4E3AJSON\u5BF9\u8C61\u53D1\u9001\u5230\u8BF7\u6C42\u4F53
    # \u6216\u8005
    # argsToFormBody: true  # \u5C06\u53C2\u6570\u4EE5\u8868\u5355\u7F16\u7801\u53D1\u9001\u5230\u8BF7\u6C42\u4F53
    # \u6216\u8005
    # body: |  # \u624B\u52A8\u6784\u5EFA\u8BF7\u6C42\u4F53
    #   {
    #     "param1": "{{.args.arg1}}",
    #     "param2": {{.args.arg2}},
    #     "complex": {{toJson .args.arg4}}
    #   }
    headers:
    - key: x-api-key
      value: "{{.config.apiKey}}"
  responseTemplate:
    # \u4EE5\u4E0B\u4E09\u4E2A\u9009\u9879\u4E92\u65A5\uFF0C\u53EA\u80FD\u9009\u62E9\u5176\u4E2D\u4E00\u79CD
    body: |
      # \u7ED3\u679C
      {{- range $index, $item := .items }}
      ## \u9879\u76EE {{add $index 1}}
      - **\u540D\u79F0**: {{ $item.name }}
      - **\u503C**: {{ $item.value }}
      {{- end }}
    # \u6216\u8005
    # prependBody: |
    #   # API\u54CD\u5E94\u8BF4\u660E
    #   
    #   \u4EE5\u4E0B\u662F\u539F\u59CBJSON\u54CD\u5E94\uFF0C\u5B57\u6BB5\u542B\u4E49\u5982\u4E0B\uFF1A
    #   - field1: \u5B57\u6BB51\u7684\u542B\u4E49
    #   - field2: \u5B57\u6BB52\u7684\u542B\u4E49
    #   
    # appendBody: |
    #   
    #   \u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E9B\u6570\u636E\u6765...
\`\`\`

## \u6A21\u677F\u8BED\u6CD5

\u6A21\u677F\u4F7F\u7528 GJSON Template \u8BED\u6CD5 (https://github.com/higress-group/gjson_template)\uFF0C\u8BE5\u8BED\u6CD5\u7ED3\u5408\u4E86 Go \u6A21\u677F\u548C GJSON \u8DEF\u5F84\u8BED\u6CD5\u8FDB\u884C JSON \u5904\u7406\u3002\u6A21\u677F\u5F15\u64CE\u652F\u6301\uFF1A

1. \u57FA\u672C\u70B9\u8868\u793A\u6CD5\u8BBF\u95EE\u5B57\u6BB5\uFF1A{{.fieldName}}
2. \u7528\u4E8E\u590D\u6742\u67E5\u8BE2\u7684 gjson \u51FD\u6570\uFF1A{{gjson "users.#(active==true)#.name"}}
3. \u6240\u6709 Sprig \u6A21\u677F\u51FD\u6570\uFF08\u7C7B\u4F3C Helm\uFF09\uFF1A{{add}}\u3001{{upper}}\u3001{{lower}}\u3001{{date}} \u7B49
4. \u63A7\u5236\u7ED3\u6784\uFF1A{{if}}\u3001{{range}}\u3001{{with}} \u7B49
5. \u53D8\u91CF\u8D4B\u503C\uFF1A{{$var := .value}}

\u5BF9\u4E8E\u590D\u6742\u7684 JSON \u54CD\u5E94\uFF0C\u8BF7\u8003\u8651\u4F7F\u7528 GJSON \u5F3A\u5927\u7684\u8FC7\u6EE4\u548C\u67E5\u8BE2\u80FD\u529B\u6765\u63D0\u53D6\u548C\u683C\u5F0F\u5316\u6700\u76F8\u5173\u7684\u4FE1\u606F\u3002

## \u6211\u7684 API \u4FE1\u606F

\u6211\u60F3\u8F6C\u6362\u7684 REST API \u662F\uFF1A

[\u5728\u6B64\u63CF\u8FF0\u60A8\u7684 API\uFF0C\u5305\u62EC\u7AEF\u70B9\u3001\u53C2\u6570\u548C\u54CD\u5E94\u683C\u5F0F\uFF0C\u6216\u8005\u7C98\u8D34 Swagger/OpenAPI \u89C4\u8303]
\`\`\`

\u8BF7\u6839\u636E\u4EE5\u4E0A\u4FE1\u606F\u751F\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u914D\u7F6E\uFF0C\u5305\u62EC\uFF1A
1. \u5177\u6709\u63CF\u8FF0\u6027\u540D\u79F0\u548C\u9002\u5F53\u7684\u670D\u52A1\u5668\u914D\u7F6E
2. \u5B9A\u4E49\u6240\u6709\u5FC5\u8981\u7684\u53C2\u6570\uFF0C\u5E76\u63D0\u4F9B\u6E05\u6670\u7684\u63CF\u8FF0\u548C\u9002\u5F53\u7684\u7C7B\u578B\u3001\u5FC5\u586B/\u9ED8\u8BA4\u503C
3. \u9009\u62E9\u5408\u9002\u7684\u53C2\u6570\u4F20\u9012\u65B9\u5F0F\uFF08argsToUrlParam\u3001argsToJsonBody\u3001argsToFormBody \u6216\u81EA\u5B9A\u4E49 body\uFF09
4. \u521B\u5EFA\u5C06 API \u54CD\u5E94\u8F6C\u6362\u4E3A\u9002\u5408 AI \u6D88\u8D39\u7684\u53EF\u8BFB\u683C\u5F0F\u7684 responseTemplate
`,s={title:"MCP Server \u63D2\u4EF6\u914D\u7F6E",description:"MCP Server \u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",keywords:["higress","mcp","ai"],date:"2025-04-03",category:"article"},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/mcp-server.md",rawData:void 0};export{a as _internal,o as body,r as collection,s as data,e as id,t as slug};
