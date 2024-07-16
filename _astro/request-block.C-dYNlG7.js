const e="latest/en/plugins/traffic/request-block.md",o="docs",t="latest/en/plugins/traffic/request-block",l=`
## Description
\`request-block\` plugin implements a request blocking function based on request characteristics such as URL and request header. It can be used to protect internal resources from unauthorized access.

## Configuration Fields

| Name | Type | Requirement |  Default Value | Description |
| -------- | -------- | -------- | -------- | -------- |
|  block_urls     |  array of string     | Optional. Choose one from following: \`block_urls\`, \`block_headers\`, \`block_bodies\` |  -  |  HTTP URLs to be blocked. |
|  block_headers     |  array of string     | Optional. Choose one from following: \`block_urls\`, \`block_headers\`, \`block_bodies\` |  -  |  HTTP request headers to be blocked.  |
|  block_bodies     |  array of string     | Optional. Choose one from following: \`block_urls\` ,\`block_headers\`, \`block_bodies\` |  -  |  HTTP request bodies to be blocked.  |
|  blocked_code     |  number     |  Optional     |   403  |  HTTP response status code to be sent when corresponding request is blocked.  |
|  blocked_message     |  string     |  Optional   |   -  |  HTTP response body to be sent when corresponding request is blocked.   |
|  case_sensitive     |  bool     |  Optional     |   true  |  Whether to use case-senstive comparison when matching. Enabled by default.   |

## Configuration Samples

### Block Specific Request URLs
\`\`\`yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
\`\`\`

According to the configuration above, following requests will be blocked:

\`\`\`bash
curl http://example.com?foo=Bar
curl http://exmaple.com/Swagger.html
\`\`\`

### Block Specific Request Headers
\`\`\`yaml
block_headers:
- example-key
- example-value
\`\`\`

According to the configuration above, following requests will be blocked:

\`\`\`bash
curl http://example.com -H 'example-key: 123'
curl http://exmaple.com -H 'my-header: example-value'
\`\`\`

### Block Specific Request Bodies
\`\`\`yaml
block_bodies:
- "hello world"
case_sensitive: false
\`\`\`

According to the configuration above, following requests will be blocked:

\`\`\`bash
curl http://example.com -d 'Hello World'
curl http://exmaple.com -d 'hello world'
\`\`\`

### Only Enable for Specific Routes or Domains
\`\`\`yaml
# Use _rules_ field for fine-grained rule configurations 
_rules_:
# Rule 1: Match by route name
- _match_route_:
  - route-a
  - route-b
  block_bodies: 
  - "hello world"
# Rule 2: Match by domain
- _match_domain_:
  - "*.example.com"
  - test.com
  block_urls: 
  - "swagger.html"
  block_bodies:
  - "hello world"
\`\`\`
In the rule sample of \`_match_route_\`, \`route-a\` and \`route-b\` are the route names provided when creating a new gateway route. When the current route names matches the configuration, the rule following shall be applied.
In the rule sample of \`_match_domain_\`, \`*.example.com\` and \`test.com\` are the domain names used for request matching. When the current domain name matches the configuration, the rule following shall be applied.
All rules shall be checked following the order of items in the \`_rules_\` field, The first matched rule will be applied. All remained will be ignored.

## Maximum Request Body Size Limitation

When \`block_bodies\` is configured, body matching shall only be performed when its size is smaller than 32MB. If not, and no \`block_urls\` or \`block_headers\` configuration is matched, the request won't be blocked.
When \`block_bodies\` is configured, if the size of request body exceeds the global configuration of DownstreamConnectionBufferLimits, a \`\`413 Payload Too Large\`\` response will be returned.
`,s={title:"request blocking",description:"Request blocking plug-in  implements a request blocking function based on request characteristics such as URL and request header. It can be used to protect internal resources from unauthorized access.",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","request block"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/request-block.md",rawData:void 0};export{r as _internal,l as body,o as collection,s as data,e as id,t as slug};
