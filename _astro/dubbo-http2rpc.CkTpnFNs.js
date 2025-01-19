import{c as p,__tla as m}from"./astro-component.CXlaF79K.js";import{r as u,m as i,u as c,__tla as n}from"./constant.BJJ7tkf7.js";import{__tla as l}from"./astro/assets-service.DQopRnBr.js";let d,a,e,r,s,b,o,T=Promise.all([(()=>{try{return m}catch{}})(),(()=>{try{return n}catch{}})(),(()=>{try{return l}catch{}})()]).then(async()=>{let t;t=`<p>\u672C\u6587\u4ECB\u7ECD\u4E86Http2Rpc\u8FD9\u4E2A\u81EA\u5B9A\u4E49CRD\u7684\u76F8\u5173\u914D\u7F6E\u9879\u3002</p>
<h3 id="specdubbo">spec.dubbo</h3>



































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th></th></tr></thead><tbody><tr><td>service</td><td>the dubbo interface name</td><td>dubbo\u670D\u52A1\u63A5\u53E3\u540D</td><td>\u4F8B\u5982\uFF1A\u201Ccom.alibaba.nacos.example.dubbo.service.DemoService\u201D</td></tr><tr><td>version</td><td>the dubbo service version</td><td>dubbo\u670D\u52A1\u7248\u672C\u53F7</td><td>\u4F8B\u5982\uFF1A\u201C1.0.0\u201D</td></tr><tr><td>group</td><td>the dubbo service group</td><td>dubbo\u670D\u52A1\u5206\u7EC4</td><td>\u4F8B\uFF1A\u201Cdev\u201D</td></tr><tr><td>methods</td><td>list of spec.dubbo.methods</td><td>\u6BCF\u4E00\u9879\u5BF9\u5E94\u4E86\u4E00\u6761\u65B9\u6CD5\u6620\u5C04\u89C4\u5219</td><td></td></tr></tbody></table>
<h3 id="specdubbomethods">spec.dubbo.methods</h3>















































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th></th></tr></thead><tbody><tr><td>serviceMethod</td><td>string</td><td>dubbo\u670D\u52A1\u63A5\u53E3\u7684\u65B9\u6CD5\u540D</td><td>\u4F8B\uFF1A\u201CsayName\u201D</td></tr><tr><td>headersAttach</td><td>string</td><td>\u9700\u8981\u900F\u4F20\u7684http headers</td><td>1\u3001\u7A7A: \u4E0D\u8BBE\u7F6E\u8868\u793A\u4E0D\u900F\u4F20\u4EFB\u4F55\u503C;<br>2\u3001*: \u8868\u793A\u900F\u4F20\u6240\u6709headers;<br> 3\u3001\u7528\u82F1\u6587\u9017\u53F7\u9694\u5F00\u9700\u8981\u900F\u51FA\u7684headers key: header-A,header-B,header-C,<br></td></tr><tr><td>httpPath</td><td>string</td><td>\u6307\u5B9A\u7ED1\u5B9AserviceMethod\u7684http-path</td><td>\u4F8B\uFF1A\u201C/dubbo/hello\u201D</td></tr><tr><td>httpMethods</td><td>list of HTTP_METHOD_TYPE</td><td>http-path\u7684\u8BF7\u6C42\u65B9\u5F0F</td><td>\u4F8B\uFF1A\u201CPOST\u201D</td></tr><tr><td>params</td><td>list of spec.dubbo.methods.params</td><td>\u6307\u5B9A\u53C2\u6570\u63D0\u53D6\u65B9\u5F0F</td><td></td></tr><tr><td>paramFromEntireBody</td><td>ParamFromEntireBody</td><td>\u6307\u5B9A\u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86paramFromEntireBody\u548Cparams\uFF0Cparams\u5B57\u6BB5\u7684\u5185\u5BB9\u5C06\u88AB\u5FFD\u7565</td><td></td></tr></tbody></table>
<h3 id="specdubbomethodsparams">spec.dubbo.methods.params</h3>





























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th></th></tr></thead><tbody><tr><td>paramKey</td><td>string</td><td>\u53C2\u6570\u540D\u79F0</td><td>\u4F8B\uFF1A\u201Cp\u201D</td></tr><tr><td>paramSource</td><td>PARAM_SOURCE_TYPE</td><td>\u53C2\u6570\u6765\u6E90</td><td>\u201DQUERY\u201D</td></tr><tr><td>paramType</td><td>string</td><td>Dubbo\u65B9\u6CD5\u5165\u53C2\u7684\u53C2\u6570\u7C7B\u578B</td><td>\u201Djava.lang.String\u201D</td></tr></tbody></table>
<h3 id="specdubbomethodsparamfromentirebody">spec.dubbo.methods.paramFromEntireBody</h3>

















<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th></th></tr></thead><tbody><tr><td>paramType</td><td>string</td><td>Dubbo\u65B9\u6CD5\u5165\u53C2\u7684\u53C2\u6570\u7C7B\u578B</td><td>\u201Djava.lang.String\u201D</td></tr></tbody></table>
<h3 id="http_method_type">HTTP_METHOD_TYPE</h3>





























<table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>GET</td><td>http GET method</td></tr><tr><td>POST</td><td>http POST method</td></tr><tr><td>PUT</td><td>http PUT method</td></tr><tr><td>DELETE</td><td>http DELETE method</td></tr><tr><td>PATCH</td><td>http PATCH method</td></tr></tbody></table>
<h3 id="param_source_type">PARAM_SOURCE_TYPE</h3>

























<table><thead><tr><th>\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>QUERY</td><td>http url param</td></tr><tr><td>HEADER</td><td>http header</td></tr><tr><td>PATH</td><td>http url path</td></tr><tr><td>BODY</td><td>http request body</td></tr></tbody></table>`,r={title:"HTTP\u8F6CDubbo \u914D\u7F6E\u8BF4\u660E",keywords:["Dubbo","discovery"],description:"HTTP\u8F6CDubbo Http2Rpc\u76F8\u5173\u914D\u7F6E",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/dubbo-http2rpc.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/dubbo-http2rpc.md",o=void 0,b=function(){return`
# HTTP\u8F6CDubbo \u914D\u7F6E\u8BF4\u660E
\u672C\u6587\u4ECB\u7ECD\u4E86Http2Rpc\u8FD9\u4E2A\u81EA\u5B9A\u4E49CRD\u7684\u76F8\u5173\u914D\u7F6E\u9879\u3002
### spec.dubbo
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| service     | the dubbo interface name    | dubbo\u670D\u52A1\u63A5\u53E3\u540D | \u4F8B\u5982\uFF1A"com.alibaba.nacos.example.dubbo.service.DemoService" |
| version     | the dubbo service version   | dubbo\u670D\u52A1\u7248\u672C\u53F7 | \u4F8B\u5982\uFF1A"1.0.0" |
| group       | the dubbo service group   | dubbo\u670D\u52A1\u5206\u7EC4   | \u4F8B\uFF1A"dev" |                      | dubbo\u670D\u52A1\u5206\u7EC4   | \u4F8B\uFF1A"dev" |
| methods     | list of spec.dubbo.methods | \u6BCF\u4E00\u9879\u5BF9\u5E94\u4E86\u4E00\u6761\u65B9\u6CD5\u6620\u5C04\u89C4\u5219 |  |

### spec.dubbo.methods
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| serviceMethod        | string             | dubbo\u670D\u52A1\u63A5\u53E3\u7684\u65B9\u6CD5\u540D               | \u4F8B\uFF1A"sayName" |
| headersAttach   | string | \u9700\u8981\u900F\u4F20\u7684http headers | 1\u3001\u7A7A: \u4E0D\u8BBE\u7F6E\u8868\u793A\u4E0D\u900F\u4F20\u4EFB\u4F55\u503C;<br />2\u3001*: \u8868\u793A\u900F\u4F20\u6240\u6709headers;<br /> 3\u3001\u7528\u82F1\u6587\u9017\u53F7\u9694\u5F00\u9700\u8981\u900F\u51FA\u7684headers key: header-A,header-B,header-C,<br />|
| httpPath | string      | \u6307\u5B9A\u7ED1\u5B9AserviceMethod\u7684http-path       | \u4F8B\uFF1A"/dubbo/hello" |
| httpMethods        | list of HTTP_METHOD_TYPE             | http-path\u7684\u8BF7\u6C42\u65B9\u5F0F               | \u4F8B\uFF1A"POST" |
| params | list of spec.dubbo.methods.params   | \u6307\u5B9A\u53C2\u6570\u63D0\u53D6\u65B9\u5F0F   |    |
| paramFromEntireBody | ParamFromEntireBody   | \u6307\u5B9A\u5C06\u6574\u4E2A\u8BF7\u6C42body\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5982\u679C\u540C\u65F6\u914D\u7F6E\u4E86paramFromEntireBody\u548Cparams\uFF0Cparams\u5B57\u6BB5\u7684\u5185\u5BB9\u5C06\u88AB\u5FFD\u7565   |    |

### spec.dubbo.methods.params
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramKey    | string            | \u53C2\u6570\u540D\u79F0         | \u4F8B\uFF1A"p" |
| paramSource | PARAM_SOURCE_TYPE       | \u53C2\u6570\u6765\u6E90   |     "QUERY"       |
| paramType   | string |  Dubbo\u65B9\u6CD5\u5165\u53C2\u7684\u53C2\u6570\u7C7B\u578B  |  "java.lang.String"   |

### spec.dubbo.methods.paramFromEntireBody
| \u5B57\u6BB5         | \u7C7B\u578B        |            \u8BF4\u660E              |             |
| ----------- | --------------------------- | ----------- | ----------- |
| paramType   | string |  Dubbo\u65B9\u6CD5\u5165\u53C2\u7684\u53C2\u6570\u7C7B\u578B  |  "java.lang.String"   |

### HTTP_METHOD_TYPE
| \u503C          | \u8BF4\u660E                  |
| ----------- | -------------------- |
| GET         |  http GET method     |
| POST        |  http POST method    |
| PUT         |  http PUT method     |
| DELETE      |  http DELETE method  |
| PATCH       |  http PATCH method   |

### PARAM_SOURCE_TYPE
| \u503C          | \u8BF4\u660E                 |
| ----------- | ------------------- |
| QUERY       |   http url param    |
| HEADER      |   http header       |
| PATH        |   http url path     |
| BODY        |   http request body |
`},a=function(){return t},s=function(){return[{depth:3,slug:"specdubbo",text:"spec.dubbo"},{depth:3,slug:"specdubbomethods",text:"spec.dubbo.methods"},{depth:3,slug:"specdubbomethodsparams",text:"spec.dubbo.methods.params"},{depth:3,slug:"specdubbomethodsparamfromentirebody",text:"spec.dubbo.methods.paramFromEntireBody"},{depth:3,slug:"http_method_type",text:"HTTP_METHOD_TYPE"},{depth:3,slug:"param_source_type",text:"PARAM_SOURCE_TYPE"}]},d=p((E,y,_)=>{const{layout:g,...h}=r;return h.file=e,h.url=o,u`${i()}${c(t)}`})});export{d as Content,T as __tla,a as compiledContent,d as default,e as file,r as frontmatter,s as getHeadings,b as rawContent,o as url};
