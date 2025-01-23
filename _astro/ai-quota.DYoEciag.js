import{c,__tla as u}from"./astro-component.CXlaF79K.js";import{r as l,m as p,u as h,__tla as m}from"./constant.D0llTwwf.js";import{__tla as f}from"./astro/assets-service.DQopRnBr.js";let t,r,a,i,n,d,o,g=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">ai-quota</code> plugin implements quota rate limiting based on fixed quotas allocated to specific consumers. It also supports quota management capabilities, including querying quotas, refreshing quotas, and increasing or decreasing quotas. The <code dir="auto">ai-quota</code> plugin needs to work with authentication plugins such as <code dir="auto">key-auth</code>, <code dir="auto">jwt-auth</code>, etc., to obtain the consumer name associated with the authenticated identity, and it needs to work with the <code dir="auto">ai-statistics</code> plugin to obtain AI Token statistical information.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin execution phase: <code dir="auto">default phase</code>
Plugin execution priority: <code dir="auto">750</code></p>
<h2 id="configuration-description">Configuration Description</h2>
































































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Required Conditions</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">redis_key_prefix</code></td><td>string</td><td>Optional</td><td>chat_quota:</td><td>Quota redis key prefix</td></tr><tr><td><code dir="auto">admin_consumer</code></td><td>string</td><td>Required</td><td></td><td>Consumer name for managing quota management identity</td></tr><tr><td><code dir="auto">admin_path</code></td><td>string</td><td>Optional</td><td>/quota</td><td>Prefix for the path to manage quota requests</td></tr><tr><td><code dir="auto">redis</code></td><td>object</td><td>Yes</td><td></td><td>Redis related configuration</td></tr><tr><td>Explanation of each configuration field in <code dir="auto">redis</code></td><td></td><td></td><td></td><td></td></tr><tr><td>Configuration Item</td><td>Type</td><td>Required</td><td>Default Value</td><td>Explanation</td></tr><tr><td>---------------------</td><td>------------------</td><td>----------</td><td>---------------------------------------------------------</td><td>-----------------------------------------------</td></tr><tr><td>service_name</td><td>string</td><td>Required</td><td>-</td><td>Redis service name, full FQDN name with service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local</td></tr><tr><td>service_port</td><td>int</td><td>No</td><td>Default value for static service is 80; others are 6379</td><td>Service port for the redis service</td></tr><tr><td>username</td><td>string</td><td>No</td><td>-</td><td>Redis username</td></tr><tr><td>password</td><td>string</td><td>No</td><td>-</td><td>Redis password</td></tr><tr><td>timeout</td><td>int</td><td>No</td><td>1000</td><td>Redis connection timeout in milliseconds</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="identify-request-parameter-apikey-and-apply-rate-limiting-accordingly">Identify request parameter apikey and apply rate limiting accordingly</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis_key_prefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"chat_quota:"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">admin_path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/quota</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis-service.default.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeout</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">2000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="redis_key_prefix: &#x22;chat_quota:&#x22;\x7Fadmin_consumer: consumer3\x7Fadmin_path: /quota\x7Fredis:\x7F  service_name: redis-service.default.svc.cluster.local\x7F  service_port: 6379\x7F  timeout: 2000"><div></div></button></div></figure></div>
<h3 id="refresh-quota">Refresh Quota</h3>
<p>If the suffix of the current request URL matches the admin_path, for example, if the plugin is effective on the route example.com/v1/chat/completions, then the quota can be updated via:
curl <a href="https://example.com/v1/chat/completions/quota/refresh" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://example.com/v1/chat/completions/quota/refresh</a> -H \u201CAuthorization: Bearer credential3\u201D -d \u201Cconsumer=consumer1&#x26;quota=10000\u201D
The value of the key <code dir="auto">chat_quota:consumer1</code> in Redis will be refreshed to 10000.</p>
<h3 id="query-quota">Query Quota</h3>
<p>To query the quota of a specific user, you can use:
curl <a href="https://example.com/v1/chat/completions/quota?consumer=consumer1" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://example.com/v1/chat/completions/quota?consumer=consumer1</a> -H \u201CAuthorization: Bearer credential3\u201D
The response will return: {\u201Cquota\u201D: 10000, \u201Cconsumer\u201D: \u201Cconsumer1\u201D}</p>
<h3 id="increase-or-decrease-quota">Increase or Decrease Quota</h3>
<p>To increase or decrease the quota of a specific user, you can use:
curl <a href="https://example.com/v1/chat/completions/quota/delta" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://example.com/v1/chat/completions/quota/delta</a> -d \u201Cconsumer=consumer1&#x26;value=100\u201D -H \u201CAuthorization: Bearer credential3\u201D
This will increase the value of the key <code dir="auto">chat_quota:consumer1</code> in Redis by 100, and negative values can also be supported, thus subtracting the corresponding value.</p>`,i={title:"AI Quota Management",keywords:["AI Gateway","AI Quota"],description:"AI quota management plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-consumer/ai-quota.md",o=void 0,d=function(){return`## Function Description
The \`ai-quota\` plugin implements quota rate limiting based on fixed quotas allocated to specific consumers. It also supports quota management capabilities, including querying quotas, refreshing quotas, and increasing or decreasing quotas. The \`ai-quota\` plugin needs to work with authentication plugins such as \`key-auth\`, \`jwt-auth\`, etc., to obtain the consumer name associated with the authenticated identity, and it needs to work with the \`ai-statistics\` plugin to obtain AI Token statistical information.

## Runtime Properties
Plugin execution phase: \`default phase\`
Plugin execution priority: \`750\`

## Configuration Description
| Name                 | Data Type        | Required Conditions                         | Default Value | Description                                       |
|---------------------|------------------|--------------------------------------------|---------------|---------------------------------------------------|
| \`redis_key_prefix\`  | string           | Optional                                   |   chat_quota: | Quota redis key prefix                            |
| \`admin_consumer\`    | string           | Required                                   |               | Consumer name for managing quota management identity |
| \`admin_path\`        | string           | Optional                                   |   /quota      | Prefix for the path to manage quota requests      |
| \`redis\`             | object           | Yes                                        |               | Redis related configuration                        |
Explanation of each configuration field in \`redis\`
| Configuration Item  | Type             | Required | Default Value                                            | Explanation                                   |
|---------------------|------------------|----------|---------------------------------------------------------|-----------------------------------------------|
| service_name        | string           | Required | -                                                       | Redis service name, full FQDN name with service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local |
| service_port        | int              | No       | Default value for static service is 80; others are 6379 | Service port for the redis service            |
| username            | string           | No       | -                                                       | Redis username                                |
| password            | string           | No       | -                                                       | Redis password                                |
| timeout             | int              | No       | 1000                                                    | Redis connection timeout in milliseconds      |

## Configuration Example
### Identify request parameter apikey and apply rate limiting accordingly
\`\`\`yaml
redis_key_prefix: "chat_quota:"
admin_consumer: consumer3
admin_path: /quota
redis:
  service_name: redis-service.default.svc.cluster.local
  service_port: 6379
  timeout: 2000
\`\`\`

### Refresh Quota
If the suffix of the current request URL matches the admin_path, for example, if the plugin is effective on the route example.com/v1/chat/completions, then the quota can be updated via:
curl https://example.com/v1/chat/completions/quota/refresh -H "Authorization: Bearer credential3" -d "consumer=consumer1&quota=10000"
The value of the key \`chat_quota:consumer1\` in Redis will be refreshed to 10000.

### Query Quota
To query the quota of a specific user, you can use: 
curl https://example.com/v1/chat/completions/quota?consumer=consumer1 -H "Authorization: Bearer credential3"
The response will return: {"quota": 10000, "consumer": "consumer1"}

### Increase or Decrease Quota
To increase or decrease the quota of a specific user, you can use:
curl https://example.com/v1/chat/completions/quota/delta -d "consumer=consumer1&value=100" -H "Authorization: Bearer credential3"
This will increase the value of the key \`chat_quota:consumer1\` in Redis by 100, and negative values can also be supported, thus subtracting the corresponding value.
`},r=function(){return e},n=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"identify-request-parameter-apikey-and-apply-rate-limiting-accordingly",text:"Identify request parameter apikey and apply rate limiting accordingly"},{depth:3,slug:"refresh-quota",text:"Refresh Quota"},{depth:3,slug:"query-quota",text:"Query Quota"},{depth:3,slug:"increase-or-decrease-quota",text:"Increase or Decrease Quota"}]},t=c((y,v,q)=>{const{layout:_,...s}=i;return s.file=a,s.url=o,l`${p()}${h(e)}`})});export{t as Content,g as __tla,r as compiledContent,t as default,a as file,i as frontmatter,n as getHeadings,d as rawContent,o as url};
