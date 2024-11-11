import{c as r,__tla as l}from"./astro-component.DIa0fJKh.js";import{r as p,m as u,u as h,__tla as y}from"./constant.Cs5LLcwe.js";import{__tla as X}from"./astro/assets-service.tyfV9CK3.js";let t,o,s,i,a,c,n,g=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return X}catch{}})()]).then(async()=>{let e;e=`<h2 id="introduction">Introduction</h2>
<p>Integrate with Aliyun content security service for detections of input and output of LLMs, ensuring that application content is legal and compliant.</p>
<h2 id="runtime-properties">Runtime Properties</h2>
<p>Plugin Phase: <code dir="auto">CUSTOM</code>
Plugin Priority: <code dir="auto">300</code></p>
<h2 id="configuration">Configuration</h2>





















































































































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">serviceName</code></td><td>string</td><td>requried</td><td>-</td><td>service name</td></tr><tr><td><code dir="auto">servicePort</code></td><td>string</td><td>requried</td><td>-</td><td>service port</td></tr><tr><td><code dir="auto">serviceHost</code></td><td>string</td><td>requried</td><td>-</td><td>Host of Aliyun content security service endpoint</td></tr><tr><td><code dir="auto">accessKey</code></td><td>string</td><td>requried</td><td>-</td><td>Aliyun accesskey</td></tr><tr><td><code dir="auto">secretKey</code></td><td>string</td><td>requried</td><td>-</td><td>Aliyun secretkey</td></tr><tr><td><code dir="auto">checkRequest</code></td><td>bool</td><td>optional</td><td>false</td><td>check if the input is legal</td></tr><tr><td><code dir="auto">checkResponse</code></td><td>bool</td><td>optional</td><td>false</td><td>check if the output is legal</td></tr><tr><td><code dir="auto">requestCheckService</code></td><td>string</td><td>optional</td><td>llm_query_moderation</td><td>Aliyun yundun service name for input check</td></tr><tr><td><code dir="auto">responseCheckService</code></td><td>string</td><td>optional</td><td>llm_response_moderation</td><td>Aliyun yundun service name for output check</td></tr><tr><td><code dir="auto">requestContentJsonPath</code></td><td>string</td><td>optional</td><td><code dir="auto">messages.@reverse.0.content</code></td><td>Specify the jsonpath of the content to be detected in the request body</td></tr><tr><td><code dir="auto">responseContentJsonPath</code></td><td>string</td><td>optional</td><td><code dir="auto">choices.0.message.content</code></td><td>Specify the jsonpath of the content to be detected in the response body</td></tr><tr><td><code dir="auto">responseStreamContentJsonPath</code></td><td>string</td><td>optional</td><td><code dir="auto">choices.0.delta.content</code></td><td>Specify the jsonpath of the content to be detected in the streaming response body</td></tr><tr><td><code dir="auto">denyCode</code></td><td>int</td><td>optional</td><td>200</td><td>Response status code when the specified content is illegal</td></tr><tr><td><code dir="auto">denyMessage</code></td><td>string</td><td>optional</td><td>Drainage/non-streaming response in openai format, the answer content is the suggested answer from Alibaba Cloud content security</td><td></td></tr><tr><td>Response content when the specified content is illegal</td><td></td><td></td><td></td><td></td></tr></tbody></table>
<h2 id="examples-of-configuration">Examples of configuration</h2>
<h3 id="check-if-the-input-is-legal">Check if the input is legal</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">safecheck.dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"green-cip.cn-shanghai.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">accessKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secretKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkRequest</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: safecheck.dns\x7FservicePort: 443\x7FserviceHost: &#x22;green-cip.cn-shanghai.aliyuncs.com&#x22;\x7FaccessKey: &#x22;XXXXXXXXX&#x22;\x7FsecretKey: &#x22;XXXXXXXXXXXXXXX&#x22;\x7FcheckRequest: true"><div></div></button></div></figure></div>
<h3 id="check-if-both-the-input-and-output-are-legal">Check if both the input and output are legal</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">safecheck.dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceHost</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">green-cip.cn-shanghai.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">accessKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">secretKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"XXXXXXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkRequest</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">checkResponse</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: safecheck.dns\x7FservicePort: 443\x7FserviceHost: green-cip.cn-shanghai.aliyuncs.com\x7FaccessKey: &#x22;XXXXXXXXX&#x22;\x7FsecretKey: &#x22;XXXXXXXXXXXXXXX&#x22;\x7FcheckRequest: true\x7FcheckResponse: true"><div></div></button></div></figure></div>
<h2 id="observability">Observability</h2>
<h3 id="metric">Metric</h3>
<p>ai-security-guard plugin provides following metrics:</p>
<ul>
<li><code dir="auto">ai_sec_request_deny</code>: count of requests denied at request phase</li>
<li><code dir="auto">ai_sec_response_deny</code>: count of requests denied at response phase</li>
</ul>
<h3 id="trace">Trace</h3>
<p>ai-security-guard plugin provides following span attributes:</p>
<ul>
<li><code dir="auto">ai_sec_risklabel</code>: risk type of this request</li>
<li><code dir="auto">ai_sec_deny_phase</code>: denied phase of this request, value can be request/response</li>
</ul>`,i={title:"AI Content Security",keywords:["higress","AI","security"],description:"Alibaba Cloud content security"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-provider/ai-security-guard.md",n=void 0,c=function(){return`

## Introduction
Integrate with Aliyun content security service for detections of input and output of LLMs, ensuring that application content is legal and compliant.

## Runtime Properties

Plugin Phase: \`CUSTOM\`
Plugin Priority: \`300\`

## Configuration
| Name | Type | Requirement | Default | Description |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| \`serviceName\` | string | requried | - | service name |
| \`servicePort\` | string | requried | - | service port |
| \`serviceHost\` | string | requried | - | Host of Aliyun content security service endpoint |
| \`accessKey\` | string | requried | - | Aliyun accesskey |
| \`secretKey\` | string | requried | - | Aliyun secretkey |
| \`checkRequest\` | bool | optional | false | check if the input is legal |
| \`checkResponse\` | bool | optional | false | check if the output is legal |
| \`requestCheckService\` | string | optional | llm_query_moderation | Aliyun yundun service name for input check |
| \`responseCheckService\` | string | optional | llm_response_moderation | Aliyun yundun service name for output check |
| \`requestContentJsonPath\` | string | optional | \`messages.@reverse.0.content\` | Specify the jsonpath of the content to be detected in the request body |
| \`responseContentJsonPath\` | string | optional | \`choices.0.message.content\` | Specify the jsonpath of the content to be detected in the response body |
| \`responseStreamContentJsonPath\` | string | optional | \`choices.0.delta.content\` | Specify the jsonpath of the content to be detected in the streaming response body |
| \`denyCode\` | int | optional | 200 | Response status code when the specified content is illegal |
| \`denyMessage\` | string | optional | Drainage/non-streaming response in openai format, the answer content is the suggested answer from Alibaba Cloud content security
 | Response content when the specified content is illegal |


## Examples of configuration
### Check if the input is legal

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: "green-cip.cn-shanghai.aliyuncs.com"
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
\`\`\`

### Check if both the input and output are legal

\`\`\`yaml
serviceName: safecheck.dns
servicePort: 443
serviceHost: green-cip.cn-shanghai.aliyuncs.com
accessKey: "XXXXXXXXX"
secretKey: "XXXXXXXXXXXXXXX"
checkRequest: true
checkResponse: true
\`\`\`

## Observability
### Metric
ai-security-guard plugin provides following metrics:
- \`ai_sec_request_deny\`: count of requests denied at request phase
- \`ai_sec_response_deny\`: count of requests denied at response phase

### Trace
ai-security-guard plugin provides following span attributes:
- \`ai_sec_risklabel\`: risk type of this request
- \`ai_sec_deny_phase\`: denied phase of this request, value can be request/response`},o=function(){return e},a=function(){return[{depth:2,slug:"introduction",text:"Introduction"},{depth:2,slug:"runtime-properties",text:"Runtime Properties"},{depth:2,slug:"configuration",text:"Configuration"},{depth:2,slug:"examples-of-configuration",text:"Examples of configuration"},{depth:3,slug:"check-if-the-input-is-legal",text:"Check if the input is legal"},{depth:3,slug:"check-if-both-the-input-and-output-are-legal",text:"Check if both the input and output are legal"},{depth:2,slug:"observability",text:"Observability"},{depth:3,slug:"metric",text:"Metric"},{depth:3,slug:"trace",text:"Trace"}]},t=r((v,f,m)=>{const{layout:E,...d}=i;return d.file=s,d.url=n,p`${u()}${h(e)}`})});export{t as Content,g as __tla,o as compiledContent,t as default,s as file,i as frontmatter,a as getHeadings,c as rawContent,n as url};
