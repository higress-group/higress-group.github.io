import{c as p,__tla as m}from"./astro-component.B3fYMMDi.js";import{r as b,m as n,u,__tla as T}from"./constant.Cgp6cJPa.js";import{__tla as c}from"./astro/assets-service.DmDXK_Mj.js";let e,s,d,r,h,i,a,l=Promise.all([(()=>{try{return m}catch{}})(),(()=>{try{return T}catch{}})(),(()=>{try{return c}catch{}})()]).then(async()=>{let t;t=`<p>This document describes the configuration options for the Http2Rpc Custom Resource Definition (CRD).</p>
<h3 id="specdubbo">spec.dubbo</h3>



































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>service</td><td>string</td><td>Dubbo interface name</td><td>e.g., \u201Ccom.alibaba.nacos.example.dubbo.service.DemoService\u201D</td></tr><tr><td>version</td><td>string</td><td>Dubbo service version</td><td>e.g., \u201C1.0.0\u201D</td></tr><tr><td>group</td><td>string</td><td>Dubbo service group</td><td>e.g., \u201Cdev\u201D</td></tr><tr><td>methods</td><td>[]Method</td><td>List of method mapping rules</td><td></td></tr></tbody></table>
<h3 id="specdubbomethods">spec.dubbo.methods</h3>















































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>serviceMethod</td><td>string</td><td>Method name of the Dubbo service interface</td><td>e.g., \u201CsayName\u201D</td></tr><tr><td>headersAttach</td><td>string</td><td>HTTP headers to be passed through</td><td>1. Empty: No headers will be passed<br>2. \u201D*\u201D: All headers will be passed<br>3. Comma-separated list of header keys: header-A,header-B,header-C</td></tr><tr><td>httpPath</td><td>string</td><td>HTTP path bound to the serviceMethod</td><td>e.g., \u201C/dubbo/hello\u201D</td></tr><tr><td>httpMethods</td><td>[]HTTP_METHOD_TYPE</td><td>HTTP methods allowed for the httpPath</td><td>e.g., [\u201CPOST\u201D]</td></tr><tr><td>params</td><td>[]Param</td><td>Parameter extraction configuration</td><td></td></tr><tr><td>paramFromEntireBody</td><td>ParamFromEntireBody</td><td>Use the entire request body as a parameter. If both paramFromEntireBody and params are configured, the params field will be ignored</td><td></td></tr></tbody></table>
<h3 id="specdubbomethodsparams">spec.dubbo.methods.params</h3>





























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>paramKey</td><td>string</td><td>Parameter name</td><td>e.g., \u201Cp\u201D</td></tr><tr><td>paramSource</td><td>PARAM_SOURCE_TYPE</td><td>Parameter source</td><td>e.g., \u201CQUERY\u201D</td></tr><tr><td>paramType</td><td>string</td><td>Parameter type for the Dubbo method</td><td>e.g., \u201Cjava.lang.String\u201D</td></tr></tbody></table>
<h3 id="specdubbomethodsparamfromentirebody">spec.dubbo.methods.paramFromEntireBody</h3>

















<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>paramType</td><td>string</td><td>Parameter type for the Dubbo method</td><td>e.g., \u201Cjava.lang.String\u201D</td></tr></tbody></table>
<h3 id="http_method_type">HTTP_METHOD_TYPE</h3>





























<table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>GET</td><td>HTTP GET method</td></tr><tr><td>POST</td><td>HTTP POST method</td></tr><tr><td>PUT</td><td>HTTP PUT method</td></tr><tr><td>DELETE</td><td>HTTP DELETE method</td></tr><tr><td>PATCH</td><td>HTTP PATCH method</td></tr></tbody></table>
<h3 id="param_source_type">PARAM_SOURCE_TYPE</h3>

























<table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>QUERY</td><td>HTTP URL query parameters</td></tr><tr><td>HEADER</td><td>HTTP headers</td></tr><tr><td>PATH</td><td>HTTP URL path variables</td></tr><tr><td>BODY</td><td>HTTP request body</td></tr></tbody></table>`,r={title:"HTTP to Dubbo Configuration Guide",keywords:["Dubbo","discovery","HTTP","RPC"],description:"Configuration reference for HTTP to Dubbo (Http2Rpc) integration",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/dubbo-http2rpc.md"},d="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/dubbo-http2rpc.md",a=void 0,i=function(){return`
# HTTP to Dubbo Configuration Guide

This document describes the configuration options for the Http2Rpc Custom Resource Definition (CRD).

### spec.dubbo
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| service     | string    | Dubbo interface name | e.g., "com.alibaba.nacos.example.dubbo.service.DemoService" |
| version     | string   | Dubbo service version   | e.g., "1.0.0" |
| group       | string   | Dubbo service group   | e.g., "dev" |
| methods     | []Method | List of method mapping rules |  |

### spec.dubbo.methods
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| serviceMethod | string | Method name of the Dubbo service interface | e.g., "sayName" |
| headersAttach | string | HTTP headers to be passed through | 1. Empty: No headers will be passed<br />2. "*": All headers will be passed<br />3. Comma-separated list of header keys: header-A,header-B,header-C |
| httpPath | string | HTTP path bound to the serviceMethod | e.g., "/dubbo/hello" |
| httpMethods | []HTTP_METHOD_TYPE | HTTP methods allowed for the httpPath | e.g., ["POST"] |
| params | []Param | Parameter extraction configuration | |
| paramFromEntireBody | ParamFromEntireBody | Use the entire request body as a parameter. If both paramFromEntireBody and params are configured, the params field will be ignored | |

### spec.dubbo.methods.params
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramKey    | string | Parameter name | e.g., "p" |
| paramSource | PARAM_SOURCE_TYPE | Parameter source | e.g., "QUERY" |
| paramType   | string | Parameter type for the Dubbo method | e.g., "java.lang.String" |

### spec.dubbo.methods.paramFromEntireBody
| Field         | Type        | Description              | Example             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramType   | string | Parameter type for the Dubbo method | e.g., "java.lang.String" |

### HTTP_METHOD_TYPE
| Value       | Description                 |
| ----------- | --------------------------- |
| GET         | HTTP GET method             |
| POST        | HTTP POST method            |
| PUT         | HTTP PUT method             |
| DELETE      | HTTP DELETE method          |
| PATCH       | HTTP PATCH method           |

### PARAM_SOURCE_TYPE
| Value       | Description                 |
| ----------- | --------------------------- |
| QUERY       | HTTP URL query parameters   |
| HEADER      | HTTP headers                |
| PATH        | HTTP URL path variables     |
| BODY        | HTTP request body           |
`},s=function(){return t},h=function(){return[{depth:3,slug:"specdubbo",text:"spec.dubbo"},{depth:3,slug:"specdubbomethods",text:"spec.dubbo.methods"},{depth:3,slug:"specdubbomethodsparams",text:"spec.dubbo.methods.params"},{depth:3,slug:"specdubbomethodsparamfromentirebody",text:"spec.dubbo.methods.paramFromEntireBody"},{depth:3,slug:"http_method_type",text:"HTTP_METHOD_TYPE"},{depth:3,slug:"param_source_type",text:"PARAM_SOURCE_TYPE"}]},e=p((g,P,y)=>{const{layout:E,...o}=r;return o.file=d,o.url=a,b`${n()}${u(t)}`})});export{e as Content,l as __tla,s as compiledContent,e as default,d as file,r as frontmatter,h as getHeadings,i as rawContent,a as url};
