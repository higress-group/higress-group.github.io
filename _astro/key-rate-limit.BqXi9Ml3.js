const e="latest/en/plugins/traffic/key-rate-limit.md",r="docs",n="latest/en/plugins/traffic/key-rate-limit",i="\n## Functional Description\nThe `key-rate-limit` plugin implements rate limiting based on specific key values, which can originate from URL parameters or HTTP request headers.\n\n## Running Properties\nPlugin execution phase: `default phase`\nPlugin execution priority: `10`\n\n## Configuration Fields\n\n| Name            | Data Type       | Required                                                      | Default Value | Description                                                                            |\n|-----------------|-----------------|---------------------------------------------------------------|---------------|----------------------------------------------------------------------------------------|\n| limit_by_header | string          | Optional, choose one from `limit_by_header`, `limit_by_param` | -             | Configuration for the source of the rate limiting key value (HTTP request header name) |\n| limit_by_param  | string          | Optional, choose one from `limit_by_header`, `limit_by_param` | -             | Configuration for the source of the rate limiting key value (URL parameter name)       |\n| limit_keys      | array of object | Required                                                      | -             | Configuration for the rate limiting frequency based on matched key values              |\n\nExplanation of each configuration field in `limit_keys`\n\n| Name             | Data Type | Required                                                                                            | Default Value | Description                           |\n|------------------|-----------|-----------------------------------------------------------------------------------------------------|---------------|---------------------------------------|\n| key              | string    | Required                                                                                            | -             | Matched key value                     |\n| query_per_second | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per second |\n| query_per_minute | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per minute |\n| query_per_hour   | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per hour   |\n| query_per_day    | number    | Optional, choose one from `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day` | -             | Allowed number of requests per day    |\n\n## Configuration Examples\n### Identify request parameter apikey for differentiated rate limiting\n```yaml\nlimit_by_param: apikey\nlimit_keys:\n- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\n  query_per_second: 10\n- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\n  query_per_minute: 100\n```\n\n### Identify request header x-ca-key for differentiated rate limiting\n```yaml\nlimit_by_header: x-ca-key\nlimit_keys:\n- key: 102234\n  query_per_second: 10\n- key: 308239\n  query_per_hour: 10\n```\n",t={title:"Key-based Local Rate Limiting",description:"Configuration reference for Key local rate limiting plugin",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["higress","key rate limit"]},a={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/key-rate-limit.md",rawData:void 0};export{a as _internal,i as body,r as collection,t as data,e as id,n as slug};