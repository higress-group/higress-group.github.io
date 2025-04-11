import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as E,__tla as y}from"./constant.DQRFEdpD.js";import{__tla as f}from"./astro/assets-service.BhtN0nM5.js";let e,t,n,a,l,d,i,x=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<p><font style="color:rgb(33, 37, 41);">\u5C06\u5B58\u91CF OpenAPI \u6279\u91CF\u8F6C\u5316\u4E3A MCP Server\uFF0C\u8FD9\u662F Higress \u6700\u65B0\u5F00\u6E90\u7684\u80FD\u529B\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u4EEC\u9AD8\u6548\u6784\u5EFA MCP Server\u3002[1]</font></p>
<p><font style="color:rgb(33, 37, 41);"></font></p>
<h2 id="01-openapi-\u7684\u76F8\u5173\u6982\u5FF5"><font style="color:rgb(33, 37, 41);">01 OpenAPI \u7684\u76F8\u5173\u6982\u5FF5</font></h2>
<p><font style="color:rgb(33, 37, 41);">OpenAPI \u91C7\u7528 YAML \u6216 JSON \u7F16\u5199\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u4E0E\u8BED\u8A00\u65E0\u5173\u7684 HTTP API \u63A5\u53E3\uFF0C\u4E3A API \u751F\u547D\u5468\u671F\u5404\u9636\u6BB5\u63D0\u4F9B\u7EDF\u4E00\u7684\u4FE1\u606F\u4F20\u9012\u65B9\u5F0F\u3002\u800C API \u5141\u8BB8\u5F00\u53D1\u8005\u5728\u65E0\u987B\u8BBF\u95EE\u6E90\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u53EF\u4EE5\u53D1\u73B0\u5E76\u4F7F\u7528\u76F8\u5E94\u7684\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u4E00\u4E2A\u793E\u4EA4 APP\uFF0C\u60F3\u83B7\u53D6\u53CC\u65B9\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u65E0\u987B\u81EA\u5EFA\u4E00\u4E2A\u9AD8\u5FB7\u5730\u56FE\uFF0C\u4E5F\u65E0\u987B\u83B7\u53D6\u9AD8\u5FB7\u5730\u56FE\u6E90\u7801\uFF0C\u800C\u662F\u901A\u8FC7\u9AD8\u5FB7\u5730\u56FE\u7684 API \u63A5\u53E3\uFF0C\u5373\u53EF\u83B7\u5F97\u5176\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u7684\u529F\u80FD\u3002</font></p>
<p><font style="color:rgb(33, 37, 41);"></font></p>
<p><font style="color:rgb(33, 37, 41);">\u7ECF\u5178\u4E92\u8054\u7F51\u5E94\u7528\uFF0C\u4F8B\u5982\u9AD8\u5FB7\u3001\u652F\u4ED8\u5B9D\u7B49\u5747\u4EE5\u5F00\u653E\u5E73\u53F0\u7684\u65B9\u5F0F\u5BF9\u5916\u63D0\u4F9B API \u670D\u52A1\uFF1B\u516C\u5171\u4E91\u670D\u52A1\uFF0C\u4F8B\u5982\u963F\u91CC\u4E91\u901A\u8FC7 OpenAPI Explorer \u5411\u7528\u6237\u63D0\u4F9B API \u670D\u52A1\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u6765\u7BA1\u7406\u4E91\u4E0A\u8D44\u6E90\u3001\u6570\u636E\u548C\u670D\u52A1\u7B49\u5185\u5BB9\u3002\u518D\u4F8B\u5982\u4EBA\u5DE5\u667A\u80FD\u5927\u6A21\u578B\uFF0C\u901A\u4E49\u3001DeepSeek\u3001OpenAI \u5747\u4EE5 API \u7684\u65B9\u5F0F\uFF0C\u5BF9\u5916\u63D0\u4F9B\u5927\u6A21\u578B\u7684\u8C03\u7528\u670D\u52A1\u3002\u8FD9\u4E9B API \u5747\u9075\u5FAA OpenAPI \u89C4\u8303\uFF0C\u6709\u4E86\u89C4\u8303\uFF0C\u534F\u4F5C\u624D\u4F1A\u9AD8\u6548\u3002</font></p>
<p><img src="/img/1744363402669.png" alt="" referrerpolicy="no-referrer"></p>
<p><font style="color:rgb(33, 37, 41);"></font></p>
<h2 id="02-\u5C06\u5B58\u91CF-openapi-\u8F6C\u5316\u4E3A-mcp-server-\u7684\u5E38\u89C4\u505A\u6CD5"><font style="color:rgb(33, 37, 41);">02 \u5C06\u5B58\u91CF OpenAPI \u8F6C\u5316\u4E3A MCP Server \u7684\u5E38\u89C4\u505A\u6CD5</font></h2>
<p>MCP \u662F\u5141\u8BB8 LLM \u80FD\u591F\u901A\u8FC7\u6807\u51C6\u5316\u7684\u65B9\u5F0F\uFF0C\u8BBF\u95EE\u5916\u90E8\u8D44\u6E90\u3001\u6570\u636E\u548C\u670D\u52A1\u3002\u5C06\u5B58\u91CF OpenAPI \u8F6C\u5316\u4E3A MCP Server\uFF0C\u662F\u4E00\u79CD\u5229\u65E7\uFF0C\u662F\u5B9E\u73B0\u7ECF\u6D4E\u6548\u76CA\u7684\u9AD8\u6821\u8DEF\u5F84\uFF0C\u76EE\u7684\u662F\u4F7F\u81EA\u8EAB\u7684\u670D\u52A1\u80FD\u88AB\u5916\u90E8\u7684 AI \u5E94\u7528\u8FDB\u884C\u8C03\u7528\uFF0C\u4ECE\u800C\u63D0\u5347\u5B58\u91CF\u670D\u52A1\u7684\u4EF7\u503C\u3002\u4ECD\u7136\u4EE5\u9AD8\u5FB7\u5730\u56FE\u4E3A\u4F8B\uFF0C\u9AD8\u5FB7\u63D0\u4F9B\u5C06\u5B58\u91CF\u7684 OpenAPI \u670D\u52A1\uFF0C\u4F8B\u5982 IP \u5B9A\u4F4D\u3001\u5730\u7406\u7F16\u7801\u8F6C\u5316\u4E3A MCP Server\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u5916\u90E8\u5E94\u7528\u8C03\u7528\u9AD8\u5FB7\u5730\u56FE\u7684\u80FD\u529B\uFF0C\u4ECE\u800C\u63D0\u5347\u670D\u52A1\u7684\u6D3B\u8DC3\u5EA6\u3002</p>
<p>\u867D\u7136 MCP \u5DF2\u7ECF\u5927\u5E45\u964D\u4F4E\u4E86\u5927\u6A21\u578B\u5E94\u7528\u8BBF\u95EE\u548C\u8C03\u7528\u5916\u90E8\u8D44\u6E90\u3001\u6570\u636E\u548C\u670D\u52A1\u7684\u590D\u6742\u5EA6\uFF0C\u4F46\u82E5\u60A8\u5C06\u590D\u7528\u5B58\u91CF\u57FA\u7840\u8BBE\u65BD\u4F5C\u4E3A MCP \u7684\u5F00\u53D1\u7B56\u7565\uFF0C\u90A3\u4E48\u5C06\u9762\u5BF9\u4E00\u4E2A\u65B0\u7684\u95EE\u9898\uFF0C\u5373\u5B58\u91CF OpenAPI \u8F6C\u5316\u4E3A MCP Server \u662F\u4E00\u4E2A\u201C\u91CD\u590D\u7684\u4F53\u529B\u6D3B\u201D\uFF0C\u4E14\u8FD8\u8981\u8FDB\u884C\u65E5\u5E38\u7EF4\u62A4\uFF0C\u5305\u62EC\u63A5\u53E3\u7684\u66F4\u65B0\u3001\u670D\u52A1\u5668\u7A33\u5B9A\u6027\u4FDD\u969C\u7B49\u3002MCP \u63D0\u4F9B\u4E86 TypeScript\u3001Java \u7B49 SDK \u5DE5\u5177\u5305\uFF0C\u7528\u4E8E\u5F00\u53D1 MCP Server\uFF0C\u5C06\u5B58\u91CF <font style="color:rgba(0, 0, 0, 0.85) !important;">Open</font>API \u5BF9\u5916\u901A\u8FC7 MCP \u534F\u8BAE\u66B4\u9732\u6210\u666E\u901A\u7684 HTTP \u670D\u52A1\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5305\u62EC\uFF1A[1]</p>
<ul>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u8BFB\u53D6\u5E76\u89E3\u6790\u5B58\u91CF OpenAPI \u7684\u6587\u6863\uFF0C\u63D0\u53D6\u51FA\u5176\u4E2D\u7684\u5173\u952E\u4FE1\u606F\uFF0C\u5982 API \u8DEF\u5F84\u3001\u8BF7\u6C42\u65B9\u6CD5\u3001\u8BF7\u6C42\u53C2\u6570\u3001\u54CD\u5E94\u683C\u5F0F\u7B49\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u6309\u7167 </font>MCP \u534F\u8BAE\u7684<font style="color:rgba(0, 0, 0, 0.85) !important;">\u89C4\u8303\uFF0C\u8F6C\u5316\u6210\u65B0\u7684\u63CF\u8FF0\uFF0C\u5305\u62EC Tool \u7684\u4F5C\u7528\u63CF\u8FF0\u548C Tool \u7684\u53C2\u6570\u63CF\u8FF0\uFF0C\u4EE5 tool/list \u7ED3\u679C\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</font></li>
<li>\u5F53 MCP Client \u8981\u8C03\u7528 MCP Server \u7684\u65F6<font style="color:rgba(0, 0, 0, 0.85) !important;">\u5019\uFF0C\u5C06 tool/call \u7684 Json RPC \u8BF7\u6C42\u89E3\u6790\u51FA\u6765\uFF0C\u901A\u8FC7\u914D\u7F6E\u597D\u7684\u53C2\u6570\u6620\u5C04\u4FE1\u606F\u3001Path\u3001\u540E\u7AEF\u5730\u5740\u7B49\u4FE1\u606F\uFF0C\u751F\u6210\u540E\u7AEF\u7684 HTTP \u8C03\u7528\u8BF7\u6C42\uFF0C\u5E76\u8FDB\u884C\u8C03\u7528\u3002\u8C03\u7528\u5B8C\u6210\u540E\uFF0C\u518D\u5C06\u540E\u7AEF\u7684\u8C03\u7528\u7ED3\u679C\u5305\u88C5\uFF0C\u4F9B\u6807\u51C6\u7684 tool/call \u63A5\u53E3\u8C03\u7528\u8FD4\u56DE\u7ED3\u679C\u3002</font></li>
</ul>
<p><font style="color:rgb(33, 37, 41);"></font></p>
<p><font style="color:rgb(33, 37, 41);"></font></p>
<h2 id="03-\u6279\u91CF\u8F6C\u5316-openapi-\u81F3-mcp-server">03 \u6279\u91CF\u8F6C\u5316 OpenAPI \u81F3 MCP Server</h2>
<h4 id="11-\u5B89\u88C5">1.1 \u5B89\u88C5</h4>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">go install github.com/higress-group/openapi-to-mcpserver/cmd/openapi-to-mcp@latest</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="go install github.com/higress-group/openapi-to-mcpserver/cmd/openapi-to-mcp@latest"><div></div></button></div></figure></div>
<h4 id="12-\u4F7F\u7528">1.2 \u4F7F\u7528</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">openapi-to-mcp --input path/to/openapi.json --output path/to/mcp-config.yaml</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="openapi-to-mcp --input path/to/openapi.json --output path/to/mcp-config.yaml"><div></div></button></div></figure></div>
<p>\u8BF4\u660E</p>
<ul>
<li><code dir="auto">--input</code>\uFF1AOpenAPI \u89C4\u8303\u6587\u4EF6\u7684\u8DEF\u5F84\uFF08JSON \u6216 YAML \u683C\u5F0F\uFF09\uFF0C\u5FC5\u586B\u9879\u3002</li>
<li><code dir="auto">--output</code>\uFF1A\u8F93\u51FA\u7684 MCP \u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\uFF08YAML \u683C\u5F0F\uFF09\uFF0C\u5FC5\u586B\u9879\u3002</li>
<li><code dir="auto">--server-name</code>\uFF1AMCP \u670D\u52A1\u5668\u7684\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u4E3A \u201Copenapi-server\u201D\u3002</li>
<li><code dir="auto">--tool-prefix</code>\uFF1A\u5DE5\u5177\u540D\u79F0\u7684\u524D\u7F00\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002</li>
<li><code dir="auto">--format</code>\uFF1A\u8F93\u51FA\u683C\u5F0F\uFF08yaml \u6216 json\uFF09\uFF0C\u9ED8\u8BA4\u503C\u4E3A \u201Cyaml\u201D\u3002</li>
<li><code dir="auto">--validate</code>\uFF1A\u662F\u5426\u9A8C\u8BC1 OpenAPI \u89C4\u8303\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\u3002</li>
<li><code dir="auto">--template</code>\uFF1A\u7528\u4E8E\u4FEE\u8865\u8F93\u51FA\u7684\u6A21\u677F\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002</li>
</ul>
<h4 id="13-\u793A\u4F8B">1.3 \u793A\u4F8B</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">openapi-to-mcp --input petstore.json --output petstore-mcp.yaml --server-name petstore</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="openapi-to-mcp --input petstore.json --output petstore-mcp.yaml --server-name petstore"><div></div></button></div></figure></div>
<p>\u8FD9\u4E2A\u793A\u4F8B\u5C06 <code dir="auto">petstore.json</code> \u6587\u4EF6\u8F6C\u6362\u4E3A <code dir="auto">petstore-mcp.yaml</code> \u6587\u4EF6\uFF0C\u5E76\u5C06 MCP \u670D\u52A1\u5668\u7684\u540D\u79F0\u8BBE\u7F6E\u4E3A <code dir="auto">petstore</code>\u3002</p>
<p>\u4EE5\u4E0B\u662F\u5B8C\u6574\u793A\u4F8B\u3002</p>
<p><font style="color:rgba(0, 0, 0, 0.85);">a. \u4ECE\u4E00\u4E2A OpenAPI \u89C4\u8303\uFF08petstore.json\uFF09\u5F00\u59CB\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"openapi"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"3.0.0"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"info"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"version"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1.0.0"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"title"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Swagger Petstore"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"A sample API that uses a petstore as an example to demonstrate features in the OpenAPI 3.0 specification"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"servers"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://petstore.swagger.io/v1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"paths"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"/pets"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"get"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"summary"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"List all pets"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"operationId"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"listPets"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"parameters"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"limit"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"in"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"query"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"How many items to return at one time (max 100)"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"required"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"schema"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"integer"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#79B8FF">"format"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"int32"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"responses"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"200"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"A paged array of pets"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#79B8FF">"application/json"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"schema"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"object"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#79B8FF">"properties"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"pets"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"array"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"items"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"object"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                        </span><span style="--0:#79B8FF">"properties"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"integer"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Unique identifier for the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                          </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Name of the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                          </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">                          </span><span style="--0:#79B8FF">"tag"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Tag of the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"nextPage"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"URL to get the next page of pets"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"post"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"summary"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Create a pet"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"operationId"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"createPets"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"requestBody"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Pet to add to the store"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"required"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"application/json"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#79B8FF">"schema"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"object"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"required"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"name"</span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"properties"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Name of the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#79B8FF">"tag"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Tag of the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"responses"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"201"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Null response"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"/pets/{petId}"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"get"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"summary"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Info for a specific pet"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"operationId"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"showPetById"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"parameters"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"petId"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"in"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"path"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"required"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The id of the pet to retrieve"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"schema"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">"responses"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#79B8FF">"200"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Expected response to a valid request"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#79B8FF">"application/json"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#79B8FF">"schema"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"object"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#79B8FF">"properties"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"id"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"integer"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Unique identifier for the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Name of the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">                    </span><span style="--0:#79B8FF">"tag"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"string"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">                      </span><span style="--0:#79B8FF">"description"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Tag of the pet"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">                </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">              </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;openapi&#x22;: &#x22;3.0.0&#x22;,\x7F  &#x22;info&#x22;: {\x7F    &#x22;version&#x22;: &#x22;1.0.0&#x22;,\x7F    &#x22;title&#x22;: &#x22;Swagger Petstore&#x22;,\x7F    &#x22;description&#x22;: &#x22;A sample API that uses a petstore as an example to demonstrate features in the OpenAPI 3.0 specification&#x22;\x7F  },\x7F  &#x22;servers&#x22;: [\x7F    {\x7F      &#x22;url&#x22;: &#x22;http://petstore.swagger.io/v1&#x22;\x7F    }\x7F  ],\x7F  &#x22;paths&#x22;: {\x7F    &#x22;/pets&#x22;: {\x7F      &#x22;get&#x22;: {\x7F        &#x22;summary&#x22;: &#x22;List all pets&#x22;,\x7F        &#x22;operationId&#x22;: &#x22;listPets&#x22;,\x7F        &#x22;parameters&#x22;: [\x7F          {\x7F            &#x22;name&#x22;: &#x22;limit&#x22;,\x7F            &#x22;in&#x22;: &#x22;query&#x22;,\x7F            &#x22;description&#x22;: &#x22;How many items to return at one time (max 100)&#x22;,\x7F            &#x22;required&#x22;: false,\x7F            &#x22;schema&#x22;: {\x7F              &#x22;type&#x22;: &#x22;integer&#x22;,\x7F              &#x22;format&#x22;: &#x22;int32&#x22;\x7F            }\x7F          }\x7F        ],\x7F        &#x22;responses&#x22;: {\x7F          &#x22;200&#x22;: {\x7F            &#x22;description&#x22;: &#x22;A paged array of pets&#x22;,\x7F            &#x22;content&#x22;: {\x7F              &#x22;application/json&#x22;: {\x7F                &#x22;schema&#x22;: {\x7F                  &#x22;type&#x22;: &#x22;object&#x22;,\x7F                  &#x22;properties&#x22;: {\x7F                    &#x22;pets&#x22;: {\x7F                      &#x22;type&#x22;: &#x22;array&#x22;,\x7F                      &#x22;items&#x22;: {\x7F                        &#x22;type&#x22;: &#x22;object&#x22;,\x7F                        &#x22;properties&#x22;: {\x7F                          &#x22;id&#x22;: {\x7F                            &#x22;type&#x22;: &#x22;integer&#x22;,\x7F                            &#x22;description&#x22;: &#x22;Unique identifier for the pet&#x22;\x7F                          },\x7F                          &#x22;name&#x22;: {\x7F                            &#x22;type&#x22;: &#x22;string&#x22;,\x7F                            &#x22;description&#x22;: &#x22;Name of the pet&#x22;\x7F                          },\x7F                          &#x22;tag&#x22;: {\x7F                            &#x22;type&#x22;: &#x22;string&#x22;,\x7F                            &#x22;description&#x22;: &#x22;Tag of the pet&#x22;\x7F                          }\x7F                        }\x7F                      }\x7F                    },\x7F                    &#x22;nextPage&#x22;: {\x7F                      &#x22;type&#x22;: &#x22;string&#x22;,\x7F                      &#x22;description&#x22;: &#x22;URL to get the next page of pets&#x22;\x7F                    }\x7F                  }\x7F                }\x7F              }\x7F            }\x7F          }\x7F        }\x7F      },\x7F      &#x22;post&#x22;: {\x7F        &#x22;summary&#x22;: &#x22;Create a pet&#x22;,\x7F        &#x22;operationId&#x22;: &#x22;createPets&#x22;,\x7F        &#x22;requestBody&#x22;: {\x7F          &#x22;description&#x22;: &#x22;Pet to add to the store&#x22;,\x7F          &#x22;required&#x22;: true,\x7F          &#x22;content&#x22;: {\x7F            &#x22;application/json&#x22;: {\x7F              &#x22;schema&#x22;: {\x7F                &#x22;type&#x22;: &#x22;object&#x22;,\x7F                &#x22;required&#x22;: [&#x22;name&#x22;],\x7F                &#x22;properties&#x22;: {\x7F                  &#x22;name&#x22;: {\x7F                    &#x22;type&#x22;: &#x22;string&#x22;,\x7F                    &#x22;description&#x22;: &#x22;Name of the pet&#x22;\x7F                  },\x7F                  &#x22;tag&#x22;: {\x7F                    &#x22;type&#x22;: &#x22;string&#x22;,\x7F                    &#x22;description&#x22;: &#x22;Tag of the pet&#x22;\x7F                  }\x7F                }\x7F              }\x7F            }\x7F          }\x7F        },\x7F        &#x22;responses&#x22;: {\x7F          &#x22;201&#x22;: {\x7F            &#x22;description&#x22;: &#x22;Null response&#x22;\x7F          }\x7F        }\x7F      }\x7F    },\x7F    &#x22;/pets/{petId}&#x22;: {\x7F      &#x22;get&#x22;: {\x7F        &#x22;summary&#x22;: &#x22;Info for a specific pet&#x22;,\x7F        &#x22;operationId&#x22;: &#x22;showPetById&#x22;,\x7F        &#x22;parameters&#x22;: [\x7F          {\x7F            &#x22;name&#x22;: &#x22;petId&#x22;,\x7F            &#x22;in&#x22;: &#x22;path&#x22;,\x7F            &#x22;required&#x22;: true,\x7F            &#x22;description&#x22;: &#x22;The id of the pet to retrieve&#x22;,\x7F            &#x22;schema&#x22;: {\x7F              &#x22;type&#x22;: &#x22;string&#x22;\x7F            }\x7F          }\x7F        ],\x7F        &#x22;responses&#x22;: {\x7F          &#x22;200&#x22;: {\x7F            &#x22;description&#x22;: &#x22;Expected response to a valid request&#x22;,\x7F            &#x22;content&#x22;: {\x7F              &#x22;application/json&#x22;: {\x7F                &#x22;schema&#x22;: {\x7F                  &#x22;type&#x22;: &#x22;object&#x22;,\x7F                  &#x22;properties&#x22;: {\x7F                    &#x22;id&#x22;: {\x7F                      &#x22;type&#x22;: &#x22;integer&#x22;,\x7F                      &#x22;description&#x22;: &#x22;Unique identifier for the pet&#x22;\x7F                    },\x7F                    &#x22;name&#x22;: {\x7F                      &#x22;type&#x22;: &#x22;string&#x22;,\x7F                      &#x22;description&#x22;: &#x22;Name of the pet&#x22;\x7F                    },\x7F                    &#x22;tag&#x22;: {\x7F                      &#x22;type&#x22;: &#x22;string&#x22;,\x7F                      &#x22;description&#x22;: &#x22;Tag of the pet&#x22;\x7F                    }\x7F                  }\x7F                }\x7F              }\x7F            }\x7F          }\x7F        }\x7F      }\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<p><font style="color:rgba(0, 0, 0, 0.85);">b. \u5C06\u5176\u8F6C\u6362\u4E3A Higress REST-to-MCP \u914D\u7F6E\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">openapi-to-mcp --input petstore.json --output petstore-mcp.yaml --server-name petstore</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="openapi-to-mcp --input petstore.json --output petstore-mcp.yaml --server-name petstore"><div></div></button></div></figure></div>
<p>c. <font style="color:rgba(0, 0, 0, 0.85) !important;">\u751F\u6210 petstore-mcp.yaml \u6587\u4EF6\uFF1A</font></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">server:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">name: petstore</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">tools:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- name: showPetById</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">description: Info for a specific pet</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- name: petId</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">description: The id of the pet to retrieve</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">required: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">position: path</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">url: /pets/{</span><span style="--0:#FDAEB7;--0fs:italic">petId</span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">method: GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">responseTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">prependBody: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8"># API Response Information</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">Below is the response from an API call. To help you understand the data, I've provided:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">. A detailed description of all fields in the response structure</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">. The complete API response</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">## Response Structure</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">> Content-Type: application/json</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- **id**: Unique identifier for the pet (Type: integer)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- **name**: Name of the pet (Type: string)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- **tag**: Tag of the pet (Type: string)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">## Original Response</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- name: createPets</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">description: Create a pet</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- name: name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">description: Name of the pet</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">required: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">position: body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- name: tag</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">description: Tag of the pet</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">type: string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">position: body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">url: /pets</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">method: POST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">headers:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- key: Content-Type</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">value: application/json</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">responseTemplate: {}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- name: listPets</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">description: List all pets</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">args:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- name: limit</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">description: How many items to return at one time (max </span><span style="--0:#79B8FF">100</span><span style="--0:#E1E4E8">)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">type: integer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">position: query</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">requestTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">url: /pets</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">method: GET</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">responseTemplate:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">prependBody: |</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8"># API Response Information</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">Below is the response from an API call. To help you understand the data, I've provided:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">. A detailed description of all fields in the response structure</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">. The complete API response</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">## Response Structure</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">> Content-Type: application/json</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- **pets**:  (Type: array)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- **pets[].id**: Unique identifier for the pet (Type: integer)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- **pets[].name**: Name of the pet (Type: string)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- **pets[].tag**: Tag of the pet (Type: string)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- **nextPage**: URL to get the next page of pets (Type: string)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">## Original Response</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: petstore\x7Ftools:\x7F  - name: showPetById\x7F    description: Info for a specific pet\x7F    args:\x7F      - name: petId\x7F        description: The id of the pet to retrieve\x7F        type: string\x7F        required: true\x7F        position: path\x7F    requestTemplate:\x7F      url: /pets/{petId}\x7F      method: GET\x7F    responseTemplate:\x7F      prependBody: |\x7F        # API Response Information\x7F\x7F        Below is the response from an API call. To help you understand the data, I&#x27;ve provided:\x7F\x7F        1. A detailed description of all fields in the response structure\x7F        2. The complete API response\x7F\x7F        ## Response Structure\x7F\x7F        > Content-Type: application/json\x7F\x7F        - **id**: Unique identifier for the pet (Type: integer)\x7F        - **name**: Name of the pet (Type: string)\x7F        - **tag**: Tag of the pet (Type: string)\x7F\x7F        ## Original Response\x7F\x7F  - name: createPets\x7F    description: Create a pet\x7F    args:\x7F      - name: name\x7F        description: Name of the pet\x7F        type: string\x7F        required: true\x7F        position: body\x7F      - name: tag\x7F        description: Tag of the pet\x7F        type: string\x7F        position: body\x7F    requestTemplate:\x7F      url: /pets\x7F      method: POST\x7F      headers:\x7F        - key: Content-Type\x7F          value: application/json\x7F    responseTemplate: {}\x7F\x7F  - name: listPets\x7F    description: List all pets\x7F    args:\x7F      - name: limit\x7F        description: How many items to return at one time (max 100)\x7F        type: integer\x7F        position: query\x7F    requestTemplate:\x7F      url: /pets\x7F      method: GET\x7F    responseTemplate:\x7F      prependBody: |\x7F        # API Response Information\x7F\x7F        Below is the response from an API call. To help you understand the data, I&#x27;ve provided:\x7F\x7F        1. A detailed description of all fields in the response structure\x7F        2. The complete API response\x7F\x7F        ## Response Structure\x7F\x7F        > Content-Type: application/json\x7F\x7F        - **pets**:  (Type: array)\x7F          - **pets[].id**: Unique identifier for the pet (Type: integer)\x7F          - **pets[].name**: Name of the pet (Type: string)\x7F          - **pets[].tag**: Tag of the pet (Type: string)\x7F        - **nextPage**: URL to get the next page of pets (Type: string)\x7F\x7F        ## Original Response"><div></div></button></div></figure></div>
<p><font style="color:rgba(0, 0, 0, 0.85) !important;">\u6CE8\u610F\uFF0C\u8BE5\u5DE5\u5177\u4F1A\u6839\u636E\u6BCF\u4E2A\u53C2\u6570\u5728 OpenAPI \u89C4\u8303\u4E2D\u7684\u4F4D\u7F6E\u81EA\u52A8\u8BBE\u7F6E\u5176\u4F4D\u7F6E\u5B57\u6BB5\uFF1A</font></p>
<ul>
<li><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">petId&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;"> \u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A </font><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">position: path&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u7F6E\uFF1A\u8DEF\u5F84\uFF09\uFF0C\u56E0\u4E3A\u5728 OpenAPI \u89C4\u8303\u4E2D\u5B83\u88AB\u5B9A\u4E49\u4E3A </font><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">in: path&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u4E8E\u8DEF\u5F84\u4E2D\uFF09\u3002</font></li>
<li><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">limit&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;"> \u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A </font><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">position: query&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u7F6E\uFF1A\u67E5\u8BE2\u53C2\u6570\uFF09\uFF0C\u56E0\u4E3A\u5728 OpenAPI \u89C4\u8303\u4E2D\u5B83\u88AB\u5B9A\u4E49\u4E3A </font><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">in: query&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u4E8E\u67E5\u8BE2\u53C2\u6570\u4E2D\uFF09\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u8BF7\u6C42\u4F53\u5C5E\u6027\uFF08</font><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">name&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;"> \u548C </font><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">tag&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF09\u88AB\u8BBE\u7F6E\u4E3A </font><code dir="auto">&#x3C;font style="color:rgba(0, 0, 0, 0.85) !important;">position: body&#x3C;/font></code><font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u7F6E\uFF1A\u8BF7\u6C42\u4F53\uFF09\u3002</font></li>
</ul>
<p><font style="color:rgba(0, 0, 0, 0.85) !important;"></font></p>
<p><font style="color:rgba(0, 0, 0, 0.85) !important;">MCP \u670D\u52A1\u5668\u5728\u53D1\u8D77 API \u8BF7\u6C42\u65F6\uFF0C\u4F1A\u5728\u6B63\u786E\u7684\u4F4D\u7F6E\u81EA\u52A8\u5904\u7406\u8FD9\u4E9B\u53C2\u6570\u3002\u6709\u5173\u5982\u4F55\u5C06\u6B64\u914D\u7F6E\u4E0E Higress REST-to-MCP \u7ED3\u5408\u4F7F\u7528\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 Higress REST-to-MCP \u6587\u6863\u3002[2]</font></p>
<h4 id="14-\u529F\u80FD"><font style="color:rgb(0, 0, 0);">1.4 \u529F\u80FD</font></h4>
<ul>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u5C06 OpenAPI \u8DEF\u5F84\u8F6C\u6362\u4E3A MCP \u5DE5\u5177\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u652F\u6301 JSON \u548C YAML \u683C\u5F0F\u7684 OpenAPI \u89C4\u8303\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u751F\u6210\u5305\u542B\u670D\u52A1\u5668\u548C\u5DE5\u5177\u5B9A\u4E49\u7684 MCP \u914D\u7F6E\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u4FDD\u7559\u53C2\u6570\u63CF\u8FF0\u548C\u7C7B\u578B\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u6839\u636E OpenAPI \u53C2\u6570\u4F4D\u7F6E\u81EA\u52A8\u8BBE\u7F6E\u53C2\u6570\u4F4D\u7F6E\uFF08\u8DEF\u5F84\u3001\u67E5\u8BE2\u3001\u5934\u90E8\u3001Cookie\u3001\u8BF7\u6C42\u4F53\uFF09\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u5904\u7406\u8DEF\u5F84\u3001\u67E5\u8BE2\u3001\u5934\u90E8\u3001Cookie \u548C\u8BF7\u6C42\u4F53\u53C2\u6570\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u751F\u6210\u5E26\u6709\u5B57\u6BB5\u63CF\u8FF0\u548C\u6539\u8FDB\u683C\u5F0F\u7684\u54CD\u5E94\u6A21\u677F\uFF0C\u4EE5\u4FBF\u5927\u8BED\u8A00\u6A21\u578B\uFF08LLM\uFF09\u7406\u89E3\u3002</font></li>
<li><font style="color:rgba(0, 0, 0, 0.85) !important;">\u53EF\u9009\u7684 OpenAPI \u89C4\u8303\u9A8C\u8BC1\uFF08\u9ED8\u8BA4\u7981\u7528\uFF09\u3002</font></li>
</ul>
<h4 id="14-\u914D\u7F6E-mcp-server-\u63D2\u4EF6">1.4 \u914D\u7F6E MCP Server \u63D2\u4EF6</h4>
<p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u751F\u6210\u7684\u6587\u4EF6\u5BFC\u5165<font style="color:rgba(0, 0, 0, 0.85) !important;"> Higress \u63A7\u5236\u53F0\uFF0C\u5E76</font>\u6DFB\u52A0 MCP Server \u63D2\u4EF6\u5E76\u8FDB\u884C\u914D\u7F6E<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF0C\u5C31\u53EF\u4EE5\u5C06\u5176\u4E0E Higress \u4E00\u8D77\u4F7F\u7528\u3002</font><br>
<img src="/img/1744363407259.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"random-user-server"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Get random user information"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"get-user"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"GET"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://randomuser.me/api/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF"># User Information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- with (index .results 0) }}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Name**: {{.name.first}} {{.name.last}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Email**: {{.email}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Location**: {{.location.city}}, {{.location.country}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- **Phone**: {{.phone}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">{{- end }}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: &#x22;random-user-server&#x22;\x7Ftools:\x7F- description: &#x22;Get random user information&#x22;\x7F  name: &#x22;get-user&#x22;\x7F  requestTemplate:\x7F    method: &#x22;GET&#x22;\x7F    url: &#x22;https://randomuser.me/api/&#x22;\x7F  responseTemplate:\x7F    body: |-\x7F      # User Information\x7F      {{- with (index .results 0) }}\x7F      - **Name**: {{.name.first}} {{.name.last}}\x7F      - **Email**: {{.email}}\x7F      - **Location**: {{.location.city}}, {{.location.country}}\x7F      - **Phone**: {{.phone}}\x7F      {{- end }}"><div></div></button></div></figure></div>
<blockquote>
<p><strong>\u6CE8\u610F\uFF1A</strong> \u5BF9\u4E8E2025 - 03 - 26 <a href="https://spec.modelcontextprotocol.io/specification/2025-03-26/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">MCP streamable HTTP</a>\u534F\u8BAE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6B64\u63D2\u4EF6\uFF0C\u65E0\u9700\u5168\u5C40 ConfigMap \u914D\u7F6E\u3002</p>
</blockquote>
<h4 id="15-\u8C03\u7528-mcp-server">1.5 \u8C03\u7528 MCP Server</h4>
<p>\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 Cursor \u4E3A\u4F8B\uFF1A</p>
<ul>
<li>\u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix</li>
<li>REST API \u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix</li>
</ul>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">"mcpServers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"postgres"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/postgres/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#9ECBFF">"rest-api"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#9ECBFF">"url"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"http://your-higress-address/user/sse"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x22;mcpServers&#x22;: {\x7F  &#x22;postgres&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/postgres/sse&#x22;\x7F  },\x7F  &#x22;rest-api&#x22;: {\x7F    &#x22;url&#x22;: &#x22;http://your-higress-address/user/sse&#x22;\x7F  }"><div></div></button></div></figure></div>
<p>Cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A<br>
<img src="/img/1744363410679.png" alt="" referrerpolicy="no-referrer"></p>
<p>\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002</p>
<h2 id="04-\u5BF9-mcp-server-\u8FDB\u884C\u914D\u7F6E\u8C03\u4F18">04 \u5BF9 MCP Server \u8FDB\u884C\u914D\u7F6E\u8C03\u4F18</h2>
<p>\u5728\u524D\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86OpenAPI to MCP\u5DE5\u5177\u5982\u4F55\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u5C06\u73B0\u6709API\u8F6C\u6362\u4E3AAI\u52A9\u624B\u53EF\u8C03\u7528\u7684\u5DE5\u5177\u3002\u8FD9\u79CD\u81EA\u52A8\u5316\u8F6C\u6362\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\uFF0C\u8BA9\u6211\u4EEC\u80FD\u591F\u5728\u51E0\u5206\u949F\u5185\u5B8C\u6210\u539F\u672C\u9700\u8981\u6570\u5C0F\u65F6\u751A\u81F3\u6570\u5929\u7684\u5DE5\u4F5C\u3002</p>
<p>\u7136\u800C\uFF0C\u81EA\u52A8\u751F\u6210\u7684\u914D\u7F6E\u867D\u7136\u529F\u80FD\u5B8C\u6574\uFF0C\u4F46\u5F80\u5F80\u4E0D\u591F\u7CBE\u7EC6\u3002\u7279\u522B\u662F\u5F53API\u8FD4\u56DE\u590D\u6742\u6570\u636E\u7ED3\u6784\u65F6\uFF0C\u5982\u679C\u4E0D\u5BF9\u914D\u7F6E\u8FDB\u884C\u4EBA\u5DE5\u8C03\u4F18\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5927\u578B\u8BED\u8A00\u6A21\u578B(LLM)\u5BF9\u6570\u636E\u7684\u7406\u89E3\u4E0D\u591F\u51C6\u786E\uFF0C\u4ECE\u800C\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002</p>
<h3 id="41-\u4E3A\u4EC0\u4E48\u9700\u8981\u8C03\u4F18mcp\u914D\u7F6E">4.1 \u4E3A\u4EC0\u4E48\u9700\u8981\u8C03\u4F18MCP\u914D\u7F6E\uFF1F</h3>
<p>\u81EA\u52A8\u751F\u6210\u7684MCP\u914D\u7F6E\u901A\u5E38\u4F1A\u5305\u542BAPI\u8FD4\u56DE\u7684\u6240\u6709\u5B57\u6BB5\uFF0C\u5E76\u4EE5\u6241\u5E73\u7684\u65B9\u5F0F\u5448\u73B0\u3002\u8FD9\u5728\u5904\u7406\u7B80\u5355API\u65F6\u53EF\u80FD\u8DB3\u591F\uFF0C\u4F46\u5BF9\u4E8E\u8FD4\u56DE\u5927\u91CF\u5D4C\u5957\u6570\u636E\u7684\u590D\u6742API\uFF0C\u4F1A\u5E26\u6765\u51E0\u4E2A\u95EE\u9898\uFF1A</p>
<ol>
<li><strong>\u4FE1\u606F\u8FC7\u8F7D</strong>\uFF1ALLM\u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\u6709\u9650\uFF0C\u8FC7\u591A\u65E0\u5173\u4FE1\u606F\u4F1A\u7A00\u91CA\u91CD\u8981\u5185\u5BB9</li>
<li><strong>\u7ED3\u6784\u4E0D\u6E05</strong>\uFF1A\u590D\u6742\u7684\u5D4C\u5957\u5173\u7CFB\u5728\u6241\u5E73\u63CF\u8FF0\u4E2D\u5BB9\u6613\u4E22\u5931</li>
<li><strong>\u7F3A\u4E4F\u8BED\u4E49</strong>\uFF1A\u6280\u672F\u4EE3\u7801\u548C\u4E13\u4E1A\u672F\u8BED\u672A\u7ECF\u8F6C\u6362\uFF0C\u96BE\u4EE5\u88ABLLM\u6B63\u786E\u7406\u89E3</li>
<li><strong>\u5E7B\u89C9\u98CE\u9669</strong>\uFF1A\u9762\u5BF9\u4E0D\u719F\u6089\u7684\u6570\u636E\u7ED3\u6784\uFF0CLLM\u53EF\u80FD\u4EA7\u751F\u9519\u8BEF\u63A8\u65AD</li>
</ol>
<p>\u901A\u8FC7\u4EBA\u5DE5\u8C03\u4F18MCP\u914D\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u663E\u8457\u63D0\u5347LLM\u5BF9API\u8FD4\u56DE\u6570\u636E\u7684\u7406\u89E3\u80FD\u529B\uFF0C\u51CF\u5C11\u9519\u8BEF\u89E3\u8BFB\u548C\u5E7B\u89C9\uFF0C\u4ECE\u800C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u51C6\u786E\u3001\u66F4\u6709\u4EF7\u503C\u7684\u56DE\u7B54\u3002</p>
<h3 id="42-\u8C03\u4F18\u6848\u4F8B\u7535\u5546\u4EA7\u54C1\u641C\u7D22api">4.2 \u8C03\u4F18\u6848\u4F8B\uFF1A\u7535\u5546\u4EA7\u54C1\u641C\u7D22API</h3>
<p>\u8BA9\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u5177\u4F53\u6848\u4F8B\u6765\u8BF4\u660EMCP\u914D\u7F6E\u8C03\u4F18\u7684\u91CD\u8981\u6027\u3002\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u7535\u5546\u5E73\u53F0\u7684\u4EA7\u54C1\u641C\u7D22API\uFF0C\u5B83\u8FD4\u56DE\u5305\u542B\u5927\u91CF\u6280\u672F\u7EC6\u8282\u7684\u590D\u6742\u4EA7\u54C1\u4FE1\u606F\u3002</p>
<h4 id="421-\u81EA\u52A8\u751F\u6210\u7684\u57FA\u7840\u914D\u7F6E">4.2.1 \u81EA\u52A8\u751F\u6210\u7684\u57FA\u7840\u914D\u7F6E</h4>
<p>\u4F7F\u7528OpenAPI to MCP\u5DE5\u5177\u81EA\u52A8\u751F\u6210\u7684\u914D\u7F6E\u53EF\u80FD\u5982\u4E0B\u6240\u793A\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ecommerce-api</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">searchProducts</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Search for products in the e-commerce platform"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Search query string"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">category</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Product category"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Maximum number of results to return"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/products/search"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">prependBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF"># Search Results</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">Below is the API response with these fields:</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **success**: Boolean indicating if the request was successful</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **total**: Total number of matching products</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **page**: Current page number</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **pageSize**: Number of items per page</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- **products**: Array of product objects with the following fields:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **id**: Product unique identifier</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **name**: Product name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **description**: Product description</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **price**: Product price</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **compareAtPrice**: Original price before discount</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **currency**: Currency code (e.g., USD, EUR)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **availability**: Product availability status</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **metadata**: Technical metadata</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **attributes**: Product attributes</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **variants**: Product variations</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **images**: Product images</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **categories**: Categories the product belongs to</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **tags**: Product tags</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **brand**: Product brand information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **shipping**: Shipping information</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">          </span></span><span style="--0:#9ECBFF">- **ratings**: Product ratings and reviews</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">Original response:</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: ecommerce-api\x7Ftools:\x7F  - name: searchProducts\x7F    description: &#x22;Search for products in the e-commerce platform&#x22;\x7F    args:\x7F      - name: query\x7F        description: &#x22;Search query string&#x22;\x7F        type: string\x7F        required: true\x7F      - name: category\x7F        description: &#x22;Product category&#x22;\x7F        type: string\x7F        required: false\x7F      - name: limit\x7F        description: &#x22;Maximum number of results to return&#x22;\x7F        type: integer\x7F        default: 10\x7F    requestTemplate:\x7F      url: &#x22;https://api.example.com/products/search&#x22;\x7F      method: GET\x7F      argsToUrlParam: true\x7F    responseTemplate:\x7F      prependBody: |\x7F        # Search Results\x7F\x7F        Below is the API response with these fields:\x7F\x7F        - **success**: Boolean indicating if the request was successful\x7F        - **total**: Total number of matching products\x7F        - **page**: Current page number\x7F        - **pageSize**: Number of items per page\x7F        - **products**: Array of product objects with the following fields:\x7F          - **id**: Product unique identifier\x7F          - **name**: Product name\x7F          - **description**: Product description\x7F          - **price**: Product price\x7F          - **compareAtPrice**: Original price before discount\x7F          - **currency**: Currency code (e.g., USD, EUR)\x7F          - **availability**: Product availability status\x7F          - **metadata**: Technical metadata\x7F          - **attributes**: Product attributes\x7F          - **variants**: Product variations\x7F          - **images**: Product images\x7F          - **categories**: Categories the product belongs to\x7F          - **tags**: Product tags\x7F          - **brand**: Product brand information\x7F          - **shipping**: Shipping information\x7F          - **ratings**: Product ratings and reviews\x7F\x7F        Original response:"><div></div></button></div></figure></div>
<p>\u5F53LLM\u63A5\u6536\u5230\u8FD9\u79CD\u914D\u7F6E\u4E0B\u7684API\u54CD\u5E94\u65F6\uFF0C\u5B83\u4F1A\u9762\u4E34\u4EE5\u4E0B\u6311\u6218\uFF1A</p>
<ol>
<li><strong>\u6570\u636E\u7ED3\u6784\u6DF7\u6DC6</strong>\uFF1A\u65E0\u6CD5\u6E05\u6670\u7406\u89E3\u5D4C\u5957\u5BF9\u8C61\uFF08\u5982metadata\u3001attributes\uFF09\u7684\u5185\u90E8\u7ED3\u6784</li>
<li><strong>\u5B57\u6BB5\u542B\u4E49\u4E0D\u660E</strong>\uFF1A\u4E0D\u77E5\u9053\u201Davailability\u201D\u5B57\u6BB5\u7684\u53EF\u80FD\u503C\u53CA\u5176\u542B\u4E49</li>
<li><strong>\u4FE1\u606F\u4F18\u5148\u7EA7\u4E0D\u6E05</strong>\uFF1A\u96BE\u4EE5\u5224\u65AD\u54EA\u4E9B\u4FE1\u606F\u5BF9\u7528\u6237\u6700\u91CD\u8981</li>
<li><strong>\u4E0A\u4E0B\u6587\u7A97\u53E3\u5360\u7528</strong>\uFF1A\u5927\u91CF\u539F\u59CBJSON\u5360\u7528\u4E86LLM\u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF0C\u6324\u538B\u4E86\u5176\u4ED6\u91CD\u8981\u4FE1\u606F</li>
</ol>
<p>\u8FD9\u4E9B\u95EE\u9898\u53EF\u80FD\u5BFC\u81F4LLM\u4EA7\u751F\u4EE5\u4E0B\u9519\u8BEF\u7406\u89E3\uFF1A</p>
<ul>
<li>\u6DF7\u6DC6\u4EA7\u54C1\u4E3B\u4F53\u4E0E\u53D8\u4F53\u4FE1\u606F\uFF1A\u201C\u8FD9\u6B3E\u624B\u8868\u6709\u9ED1\u8272\u3001\u94F6\u8272\u548C\u73AB\u7470\u91D1\u4E09\u79CD\u989C\u8272\uFF0C\u4EF7\u683C\u5206\u522B\u662F899\u5143\u3001899\u5143\u548C949\u5143\u3002\u201C\uFF08\u8BEF\u5C06\u53D8\u4F53\u4FE1\u606F\u4F5C\u4E3A\u4E3B\u8981\u4FE1\u606F\uFF09</li>
<li>\u9519\u8BEF\u5173\u8054\u6280\u672F\u7EC6\u8282\uFF1A\u201C\u8FD9\u6B3ETechFit Pro\u667A\u80FD\u624B\u8868\u7684\u4FDD\u4FEE\u671F\u662FTF-SW-P10\u3002\u201C\uFF08\u6DF7\u6DC6SKU\u4E0E\u4FDD\u4FEE\u671F\uFF09</li>
<li>\u57FA\u4E8E\u4E0D\u5B8C\u6574\u4FE1\u606F\u751F\u6210\u5E7B\u89C9\uFF1A\u201C\u8BE5\u624B\u8868\u5728\u6240\u6709\u7535\u5B50\u5546\u5E97\u5747\u6709\u9500\u552E\u3002\u201C\uFF08\u57FA\u4E8Eshipping.locations\u9519\u8BEF\u63A8\u65AD\uFF09</li>
</ul>
<h4 id="422-\u4EBA\u5DE5\u8C03\u4F18\u540E\u7684\u914D\u7F6E">4.2.2 \u4EBA\u5DE5\u8C03\u4F18\u540E\u7684\u914D\u7F6E</h4>
<p>Higress \u652F\u6301\u7ED3\u5408 go template \u548C gjson \u8868\u8FBE\u5F0F\u6765\u5BF9\u8BF7\u6C42\u548C\u54CD\u5E94\u6A21\u7248\u8FDB\u884C\u7CBE\u7EC6\u5316\u5904\u7406\uFF08\u8BE6\u7EC6\u80FD\u529B\u8BF7\u67E5\u9605\u6587\u6863\uFF1A<a href="https://higress.cn/en/ai/mcp-server" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.cn/en/ai/mcp-server</a>\uFF09\uFF0C\u901A\u8FC7\u7CBE\u5FC3\u8C03\u4F18\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u914D\u7F6E\u4F18\u5316\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ecommerce-api</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">searchProducts</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u641C\u7D22\u7535\u5546\u5E73\u53F0\u4E0A\u7684\u4EA7\u54C1\uFF0C\u8FD4\u56DE\u5339\u914D\u641C\u7D22\u6761\u4EF6\u7684\u4EA7\u54C1\u5217\u8868\uFF0C\u5305\u542B\u4EA7\u54C1\u57FA\u672C\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u72B6\u6001\u3001\u8BC4\u5206\u7B49"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">query</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u641C\u7D22\u5173\u952E\u8BCD\uFF0C\u53EF\u4EE5\u662F\u4EA7\u54C1\u540D\u79F0\u3001\u54C1\u724C\u3001\u578B\u53F7\u6216\u63CF\u8FF0\u4E2D\u7684\u5173\u952E\u8BCD"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">category</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4EA7\u54C1\u7C7B\u522B\uFF0C\u4F8B\u5982'electronics'\u3001'clothing'\u3001'home'\u7B49"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">limit</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF\uFF0C\u8303\u56F41-50"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">maximum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">50</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/products/search"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">argsToUrlParam</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">responseTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF"># \u4EA7\u54C1\u641C\u7D22\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">\u627E\u5230 {{.total}} \u4E2A\u5339\u914D"{{.query}}"\u7684\u4EA7\u54C1\uFF0C\u4EE5\u4E0B\u662F\u6700\u76F8\u5173\u7684 {{len .products}} \u4E2A\u7ED3\u679C\uFF1A</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{range $index, $product := .products}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">## {{add $index 1}}. {{$product.name}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">**\u4EF7\u683C**: {{if $product.onSale}}~~{{$product.compareAtPrice}} {{$product.currency}}~~ **{{$product.price}} {{$product.currency}}** (\u8282\u7701 {{percentage $product.compareAtPrice $product.price}}%){{else}}{{$product.price}} {{$product.currency}}{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">**\u54C1\u724C**: {{$product.brand.name}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">**\u5E93\u5B58\u72B6\u6001**: {{if eq $product.availability "in_stock"}}\u6709\u8D27{{else if eq $product.availability "low_stock"}}\u5E93\u5B58\u4E0D\u591A{{else}}\u7F3A\u8D27{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{if gt (len $product.ratings.reviews) 0}}**\u8BC4\u5206**: {{$product.ratings.averageRating}}/5 ({{$product.ratings.reviewCount}}\u6761\u8BC4\u4EF7){{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{$product.description | truncate 200 "..."}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{if gt (len $product.highlights) 0}}**\u4EA7\u54C1\u7279\u70B9**:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{range $highlight := $product.highlights}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- {{$highlight}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{end}}{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{if gt .total (len .products)}}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">\u8FD8\u6709\u66F4\u591A\u7ED3\u679C\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u641C\u7D22\u6761\u4EF6\u83B7\u53D6\u66F4\u7CBE\u51C6\u7684\u5339\u914D\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">{{end}}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: ecommerce-api\x7Ftools:\x7F  - name: searchProducts\x7F    description: &#x22;\u641C\u7D22\u7535\u5546\u5E73\u53F0\u4E0A\u7684\u4EA7\u54C1\uFF0C\u8FD4\u56DE\u5339\u914D\u641C\u7D22\u6761\u4EF6\u7684\u4EA7\u54C1\u5217\u8868\uFF0C\u5305\u542B\u4EA7\u54C1\u57FA\u672C\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u72B6\u6001\u3001\u8BC4\u5206\u7B49&#x22;\x7F    args:\x7F      - name: query\x7F        description: &#x22;\u641C\u7D22\u5173\u952E\u8BCD\uFF0C\u53EF\u4EE5\u662F\u4EA7\u54C1\u540D\u79F0\u3001\u54C1\u724C\u3001\u578B\u53F7\u6216\u63CF\u8FF0\u4E2D\u7684\u5173\u952E\u8BCD&#x22;\x7F        type: string\x7F        required: true\x7F      - name: category\x7F        description: &#x22;\u4EA7\u54C1\u7C7B\u522B\uFF0C\u4F8B\u5982&#x27;electronics&#x27;\u3001&#x27;clothing&#x27;\u3001&#x27;home&#x27;\u7B49&#x22;\x7F        type: string\x7F        required: false\x7F      - name: limit\x7F        description: &#x22;\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF\uFF0C\u8303\u56F41-50&#x22;\x7F        type: integer\x7F        minimum: 1\x7F        maximum: 50\x7F        default: 10\x7F    requestTemplate:\x7F      url: &#x22;https://api.example.com/products/search&#x22;\x7F      method: GET\x7F      argsToUrlParam: true\x7F    responseTemplate:\x7F      body: |\x7F        # \u4EA7\u54C1\u641C\u7D22\u7ED3\u679C\x7F\x7F        \u627E\u5230 {{.total}} \u4E2A\u5339\u914D&#x22;{{.query}}&#x22;\u7684\u4EA7\u54C1\uFF0C\u4EE5\u4E0B\u662F\u6700\u76F8\u5173\u7684 {{len .products}} \u4E2A\u7ED3\u679C\uFF1A\x7F\x7F        {{range $index, $product := .products}}\x7F        ## {{add $index 1}}. {{$product.name}}\x7F\x7F        **\u4EF7\u683C**: {{if $product.onSale}}~~{{$product.compareAtPrice}} {{$product.currency}}~~ **{{$product.price}} {{$product.currency}}** (\u8282\u7701 {{percentage $product.compareAtPrice $product.price}}%){{else}}{{$product.price}} {{$product.currency}}{{end}}\x7F\x7F        **\u54C1\u724C**: {{$product.brand.name}}\x7F\x7F        **\u5E93\u5B58\u72B6\u6001**: {{if eq $product.availability &#x22;in_stock&#x22;}}\u6709\u8D27{{else if eq $product.availability &#x22;low_stock&#x22;}}\u5E93\u5B58\u4E0D\u591A{{else}}\u7F3A\u8D27{{end}}\x7F\x7F        {{if gt (len $product.ratings.reviews) 0}}**\u8BC4\u5206**: {{$product.ratings.averageRating}}/5 ({{$product.ratings.reviewCount}}\u6761\u8BC4\u4EF7){{end}}\x7F\x7F        {{$product.description | truncate 200 &#x22;...&#x22;}}\x7F\x7F        {{if gt (len $product.highlights) 0}}**\u4EA7\u54C1\u7279\u70B9**:\x7F        {{range $highlight := $product.highlights}}\x7F        - {{$highlight}}\x7F        {{end}}{{end}}\x7F\x7F        {{end}}\x7F\x7F        {{if gt .total (len .products)}}\x7F        \u8FD8\u6709\u66F4\u591A\u7ED3\u679C\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u641C\u7D22\u6761\u4EF6\u83B7\u53D6\u66F4\u7CBE\u51C6\u7684\u5339\u914D\u3002\x7F        {{end}}"><div></div></button></div></figure></div>
<p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u667A\u80FD\u624B\u8868\u4EA7\u54C1\u7684\u5B9E\u9645\u54CD\u5E94\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u8C03\u4F18\u540E\u7684\u6A21\u677F\u5982\u4F55\u5904\u7406\u539F\u59CB\u6570\u636E\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8"># \u4EA7\u54C1\u641C\u7D22\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u627E\u5230 128 \u4E2A\u5339\u914D"\u667A\u80FD\u624B\u8868"\u7684\u4EA7\u54C1\uFF0C\u4EE5\u4E0B\u662F\u6700\u76F8\u5173\u7684 10 \u4E2A\u7ED3\u679C\uFF1A</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## 1. TechFit Pro \u667A\u80FD\u624B\u8868</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u4EF7\u683C**: ~~1299 CNY~~ **899 CNY** (\u8282\u7701 30.8%)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u54C1\u724C**: TechFit</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u5E93\u5B58\u72B6\u6001**: \u6709\u8D27</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u8BC4\u5206**: 4.7/5 (342\u6761\u8BC4\u4EF7)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">TechFit Pro\u667A\u80FD\u624B\u8868\u914D\u5907\u9AD8\u6E05\u5F69\u8272\u89E6\u6478\u5C4F\uFF0C\u652F\u6301\u5FC3\u7387\u76D1\u6D4B\u3001\u8840\u6C27\u68C0\u6D4B\u3001\u591A\u79CD\u8FD0\u52A8\u6A21\u5F0F\u8FFD\u8E2A\u548C\u7761\u7720\u5206\u6790\u3002\u9632\u6C34\u8BBE\u8BA1\uFF0C\u7EED\u822A\u53EF\u8FBE7\u5929\u3002</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u4EA7\u54C1\u7279\u70B9**:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u9AD8\u6E05AMOLED\u89E6\u6478\u5C4F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- 7\u5929\u8D85\u957F\u7EED\u822A</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u5FC3\u7387\u548C\u8840\u6C27\u76D1\u6D4B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- 30\u79CD\u8FD0\u52A8\u6A21\u5F0F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- 5ATM\u9632\u6C34</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## 2. FitBit Versa 3</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u4EF7\u683C**: 1499 CNY</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u54C1\u724C**: FitBit</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u5E93\u5B58\u72B6\u6001**: \u6709\u8D27</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u8BC4\u5206**: 4.5/5 (287\u6761\u8BC4\u4EF7)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">FitBit Versa 3\u667A\u80FD\u624B\u8868\u96C6\u6210GPS\u5B9A\u4F4D\uFF0C\u652F\u630124/7\u5FC3\u7387\u76D1\u6D4B\uFF0C\u5185\u7F6E\u8BED\u97F3\u52A9\u624B\uFF0C\u53EF\u63A5\u542C\u7535\u8BDD\uFF0C\u7535\u6C60\u7EED\u822A\u53EF\u8FBE6\u5929\u3002</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u4EA7\u54C1\u7279\u70B9**:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u5185\u7F6EGPS</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u8BED\u97F3\u52A9\u624B\u529F\u80FD</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u6765\u7535\u63A5\u542C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- 20+\u8FD0\u52A8\u6A21\u5F0F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u9632\u6C3450\u7C73</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">## 3. Apple Watch Series 7</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u4EF7\u683C**: 2999 CNY</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u54C1\u724C**: Apple</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u5E93\u5B58\u72B6\u6001**: \u5E93\u5B58\u4E0D\u591A</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u8BC4\u5206**: 4.9/5 (1243\u6761\u8BC4\u4EF7)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Apple Watch Series 7\u62E5\u6709\u66F4\u5927\u7684\u663E\u793A\u5C4F\uFF0C\u66F4\u5FEB\u7684\u5145\u7535\u901F\u5EA6\uFF0CIP6X\u9632\u5C18\u8BA4\u8BC1\uFF0C\u6E38\u6CF3\u7EA7\u9632\u6C34\uFF0C\u5168\u5929\u5019\u8840\u6C27\u76D1\u6D4B\u548C\u5FC3\u7535\u56FE\u529F\u80FD\u3002</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">**\u4EA7\u54C1\u7279\u70B9**:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u89C6\u7F51\u819C\u7EA7OLED\u663E\u793A\u5C4F</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u5FEB\u901F\u5145\u7535</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u5FC3\u7535\u56FE\u548C\u8840\u6C27\u76D1\u6D4B</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u8DCC\u5012\u68C0\u6D4B\u548C\u7D27\u6025SOS</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">- \u652F\u6301Apple Pay</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">\u8FD8\u6709\u66F4\u591A\u7ED3\u679C\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u641C\u7D22\u6761\u4EF6\u83B7\u53D6\u66F4\u7CBE\u51C6\u7684\u5339\u914D\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u4EA7\u54C1\u641C\u7D22\u7ED3\u679C\x7F\x7F\u627E\u5230 128 \u4E2A\u5339\u914D&#x22;\u667A\u80FD\u624B\u8868&#x22;\u7684\u4EA7\u54C1\uFF0C\u4EE5\u4E0B\u662F\u6700\u76F8\u5173\u7684 10 \u4E2A\u7ED3\u679C\uFF1A\x7F\x7F## 1. TechFit Pro \u667A\u80FD\u624B\u8868\x7F\x7F**\u4EF7\u683C**: ~~1299 CNY~~ **899 CNY** (\u8282\u7701 30.8%)\x7F\x7F**\u54C1\u724C**: TechFit\x7F\x7F**\u5E93\u5B58\u72B6\u6001**: \u6709\u8D27\x7F\x7F**\u8BC4\u5206**: 4.7/5 (342\u6761\u8BC4\u4EF7)\x7F\x7FTechFit Pro\u667A\u80FD\u624B\u8868\u914D\u5907\u9AD8\u6E05\u5F69\u8272\u89E6\u6478\u5C4F\uFF0C\u652F\u6301\u5FC3\u7387\u76D1\u6D4B\u3001\u8840\u6C27\u68C0\u6D4B\u3001\u591A\u79CD\u8FD0\u52A8\u6A21\u5F0F\u8FFD\u8E2A\u548C\u7761\u7720\u5206\u6790\u3002\u9632\u6C34\u8BBE\u8BA1\uFF0C\u7EED\u822A\u53EF\u8FBE7\u5929\u3002\x7F\x7F**\u4EA7\u54C1\u7279\u70B9**:\x7F- \u9AD8\u6E05AMOLED\u89E6\u6478\u5C4F\x7F- 7\u5929\u8D85\u957F\u7EED\u822A\x7F- \u5FC3\u7387\u548C\u8840\u6C27\u76D1\u6D4B\x7F- 30\u79CD\u8FD0\u52A8\u6A21\u5F0F\x7F- 5ATM\u9632\u6C34\x7F\x7F## 2. FitBit Versa 3\x7F\x7F**\u4EF7\u683C**: 1499 CNY\x7F\x7F**\u54C1\u724C**: FitBit\x7F\x7F**\u5E93\u5B58\u72B6\u6001**: \u6709\u8D27\x7F\x7F**\u8BC4\u5206**: 4.5/5 (287\u6761\u8BC4\u4EF7)\x7F\x7FFitBit Versa 3\u667A\u80FD\u624B\u8868\u96C6\u6210GPS\u5B9A\u4F4D\uFF0C\u652F\u630124/7\u5FC3\u7387\u76D1\u6D4B\uFF0C\u5185\u7F6E\u8BED\u97F3\u52A9\u624B\uFF0C\u53EF\u63A5\u542C\u7535\u8BDD\uFF0C\u7535\u6C60\u7EED\u822A\u53EF\u8FBE6\u5929\u3002\x7F\x7F**\u4EA7\u54C1\u7279\u70B9**:\x7F- \u5185\u7F6EGPS\x7F- \u8BED\u97F3\u52A9\u624B\u529F\u80FD\x7F- \u6765\u7535\u63A5\u542C\x7F- 20+\u8FD0\u52A8\u6A21\u5F0F\x7F- \u9632\u6C3450\u7C73\x7F\x7F## 3. Apple Watch Series 7\x7F\x7F**\u4EF7\u683C**: 2999 CNY\x7F\x7F**\u54C1\u724C**: Apple\x7F\x7F**\u5E93\u5B58\u72B6\u6001**: \u5E93\u5B58\u4E0D\u591A\x7F\x7F**\u8BC4\u5206**: 4.9/5 (1243\u6761\u8BC4\u4EF7)\x7F\x7FApple Watch Series 7\u62E5\u6709\u66F4\u5927\u7684\u663E\u793A\u5C4F\uFF0C\u66F4\u5FEB\u7684\u5145\u7535\u901F\u5EA6\uFF0CIP6X\u9632\u5C18\u8BA4\u8BC1\uFF0C\u6E38\u6CF3\u7EA7\u9632\u6C34\uFF0C\u5168\u5929\u5019\u8840\u6C27\u76D1\u6D4B\u548C\u5FC3\u7535\u56FE\u529F\u80FD\u3002\x7F\x7F**\u4EA7\u54C1\u7279\u70B9**:\x7F- \u89C6\u7F51\u819C\u7EA7OLED\u663E\u793A\u5C4F\x7F- \u5FEB\u901F\u5145\u7535\x7F- \u5FC3\u7535\u56FE\u548C\u8840\u6C27\u76D1\u6D4B\x7F- \u8DCC\u5012\u68C0\u6D4B\u548C\u7D27\u6025SOS\x7F- \u652F\u6301Apple Pay\x7F\x7F\u8FD8\u6709\u66F4\u591A\u7ED3\u679C\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u641C\u7D22\u6761\u4EF6\u83B7\u53D6\u66F4\u7CBE\u51C6\u7684\u5339\u914D\u3002"><div></div></button></div></figure></div>
<p>\u901A\u8FC7\u8FD9\u79CD\u7ED3\u6784\u5316\u7684\u54CD\u5E94\u683C\u5F0F\uFF0CLLM\u53EF\u4EE5\u6E05\u6670\u5730\u7406\u89E3\u6BCF\u4E2A\u4EA7\u54C1\u7684\u5173\u952E\u4FE1\u606F\uFF0C\u800C\u4E0D\u4F1A\u88AB\u5927\u91CF\u7684\u6280\u672F\u7EC6\u8282\u548C\u539F\u59CBJSON\u7ED3\u6784\u6240\u56F0\u6270\u3002</p>
<h3 id="43-\u8C03\u4F18\u5982\u4F55\u6539\u5584llm\u7406\u89E3">4.3 \u8C03\u4F18\u5982\u4F55\u6539\u5584LLM\u7406\u89E3</h3>
<p>\u7ECF\u8FC7\u8C03\u4F18\u7684\u914D\u7F6E\u80FD\u591F\u663E\u8457\u63D0\u5347LLM\u5BF9\u6570\u636E\u7684\u7406\u89E3\uFF1A</p>
<h4 id="431-\u8C03\u4F18\u524Dllm\u7684\u7406\u89E3\u95EE\u9898">4.3.1 \u8C03\u4F18\u524DLLM\u7684\u7406\u89E3\u95EE\u9898</h4>
<ol>
<li><strong>\u7ED3\u6784\u6DF7\u6DC6</strong>\uFF1A\u65E0\u6CD5\u533A\u5206\u4E3B\u4EA7\u54C1\u4E0E\u53D8\u4F53\uFF0C\u53EF\u80FD\u9519\u8BEF\u5730\u5C06\u53D8\u4F53\u5C5E\u6027\u63CF\u8FF0\u4E3A\u4EA7\u54C1\u4E3B\u8981\u7279\u5F81</li>
<li><strong>\u5173\u6CE8\u9519\u8BEF\u91CD\u70B9</strong>\uFF1A\u53EF\u80FD\u8FC7\u5EA6\u5173\u6CE8\u7EC6\u8282\uFF08\u5982SKU\u3001\u6761\u5F62\u7801\uFF09\u800C\u975E\u7528\u6237\u5173\u5FC3\u7684\u4EA7\u54C1\u7279\u6027</li>
<li><strong>\u8BEF\u89E3\u5B57\u6BB5\u542B\u4E49</strong>\uFF1A\u65E0\u6CD5\u6B63\u786E\u7406\u89E3\u4E13\u4E1A\u672F\u8BED\u548C\u7F16\u7801\u503C</li>
<li><strong>\u751F\u6210\u5E7B\u89C9</strong>\uFF1A\u88AB\u4F8B\u5982\u5546\u54C1\u8BE6\u60C5\u4E2D\u7684\u65E0\u5173\u5185\u5BB9\u5F71\u54CD\uFF0C\u5BFC\u81F4\u4EA7\u751F\u5E7B\u89C9</li>
</ol>
<h4 id="432-\u8C03\u4F18\u540Ellm\u7684\u7406\u89E3\u6539\u8FDB">4.3.2 \u8C03\u4F18\u540ELLM\u7684\u7406\u89E3\u6539\u8FDB</h4>
<ol>
<li><strong>\u7ED3\u6784\u6E05\u6670</strong>\uFF1A\u51C6\u786E\u7406\u89E3\u6BCF\u4E2A\u4EA7\u54C1\u7684\u57FA\u672C\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u54C1\u724C\u3001\u5E93\u5B58\u72B6\u6001\u548C\u8BC4\u5206</li>
<li><strong>\u91CD\u70B9\u7A81\u51FA</strong>\uFF1A\u80FD\u8BC6\u522B\u4EF7\u683C\u6298\u6263\u3001\u4EA7\u54C1\u63CF\u8FF0\u548C\u7279\u70B9\u7B49\u5173\u952E\u4FE1\u606F</li>
<li><strong>\u8BED\u4E49\u660E\u786E</strong>\uFF1A\u6B63\u786E\u7406\u89E3\u5E93\u5B58\u72B6\u6001\u7684\u542B\u4E49\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u6B67\u4E49</li>
<li><strong>\u4E0A\u4E0B\u6587\u5B8C\u6574</strong>\uFF1A\u4E86\u89E3\u641C\u7D22\u7ED3\u679C\u7684\u5168\u8C8C\uFF08\u201C\u627E\u5230128\u4E2A\u5339\u914D\u9879\uFF0C\u663E\u793A10\u4E2A\u201D\uFF09</li>
</ol>
<h3 id="44-\u8C03\u4F18\u7B56\u7565\u603B\u7ED3">4.4 \u8C03\u4F18\u7B56\u7565\u603B\u7ED3</h3>
<p>\u57FA\u4E8E\u4E0A\u8FF0\u6848\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63D0\u70BC\u51FA\u4EE5\u4E0BMCP\u914D\u7F6E\u8C03\u4F18\u7B56\u7565\uFF1A</p>
<ol>
<li><strong>\u8BC6\u522B\u5E76\u63D0\u53D6\u6838\u5FC3\u5B57\u6BB5</strong>\uFF1A\u5206\u6790\u7528\u6237\u771F\u6B63\u9700\u8981\u7684\u4FE1\u606F\uFF0C\u53BB\u9664\u6280\u672F\u7EC6\u8282\u548C\u5185\u90E8\u6570\u636E</li>
<li><strong>\u8F6C\u6362\u4E13\u4E1A\u672F\u8BED</strong>\uFF1A\u5C06\u6280\u672F\u4EE3\u7801\u548C\u4E13\u4E1A\u672F\u8BED\u8F6C\u6362\u4E3A\u8BA9LLM\u6613\u4E8E\u7406\u89E3\u7684\u63CF\u8FF0</li>
<li><strong>\u6DFB\u52A0\u4E0A\u4E0B\u6587\u4FE1\u606F</strong>\uFF1A\u5E2E\u52A9LLM\u7406\u89E3\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u8303\u56F4</li>
<li><strong>\u7ED3\u6784\u5316\u5173\u952E\u4FE1\u606F</strong>\uFF1A\u4F7F\u7528\u5C42\u6B21\u7ED3\u6784\u8BA9\u4FE1\u606F\u7684\u91CD\u8981\u6027\u548C\u5173\u7CFB\u4E00\u76EE\u4E86\u7136</li>
</ol>
<h2 id="05-\u7ED3\u8BED">05 \u7ED3\u8BED</h2>
<p>OpenAPI to MCP\u5DE5\u5177\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u5FEB\u901F\u5C06API\u8F6C\u6362\u4E3AAI\u5DE5\u5177\u7684\u80FD\u529B\uFF0C\u800C\u4EBA\u5DE5\u8C03\u4F18\u5219\u662F\u63D0\u5347AI\u7406\u89E3\u548C\u7528\u6237\u4F53\u9A8C\u7684\u5173\u952E\u4E00\u6B65\u3002\u901A\u8FC7\u7CBE\u5FC3\u8BBE\u8BA1\u7684\u54CD\u5E94\u6A21\u677F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F15\u5BFCLLM\u66F4\u51C6\u786E\u5730\u7406\u89E3API\u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u51CF\u5C11\u9519\u8BEF\u89E3\u8BFB\u548C\u5E7B\u89C9\uFF0C\u4ECE\u800C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u6709\u4EF7\u503C\u7684\u670D\u52A1\u3002</p>
<p>\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u5EFA\u8BAE\u5148\u4F7F\u7528OpenAPI to MCP\u5DE5\u5177\u751F\u6210\u57FA\u7840\u914D\u7F6E\uFF0C\u7136\u540E\u6839\u636EAPI\u7684\u590D\u6742\u6027\u548C\u7528\u6237\u9700\u6C42\uFF0C\u6709\u9488\u5BF9\u6027\u5730\u8FDB\u884C\u8C03\u4F18\u3002\u5BF9\u4E8E\u7B80\u5355API\uFF0C\u81EA\u52A8\u751F\u6210\u7684\u914D\u7F6E\u53EF\u80FD\u5DF2\u7ECF\u8DB3\u591F\uFF1B\u800C\u5BF9\u4E8E\u590D\u6742API\uFF0C\u7279\u522B\u662F\u8FD4\u56DE\u5927\u91CF\u5D4C\u5957\u6570\u636E\u7684API\uFF0C\u4EBA\u5DE5\u8C03\u4F18\u5C06\u5E26\u6765\u663E\u8457\u7684\u4F53\u9A8C\u63D0\u5347\u3002</p>
<p>\u9700\u8981\u5F3A\u8C03\u7684\u662F\uFF0C\u9AD8\u8D28\u91CF\u7684MCP\u914D\u7F6E\u8C03\u4F18\u5F80\u5F80\u9700\u8981\u4F9D\u8D56\u6570\u636E\u7684\u53CD\u9988\u548C\u8FED\u4EE3\u4F18\u5316\u3002\u5355\u4E00\u7684\u914D\u7F6E\u5F88\u96BE\u4E00\u6B21\u6027\u6EE1\u8DB3\u6240\u6709\u7528\u6237\u573A\u666F\uFF0C\u56E0\u6B64\u9700\u8981\u57FA\u4E8E\u591A\u914D\u7F6E\u7248\u672C\u7684\u7070\u5EA6\u6D4B\u8BD5\uFF0C\u6784\u5EFA\u8D77\u8BC4\u4F30\u53CD\u9988\u548C\u6301\u7EED\u4F18\u5316\u7684\u95ED\u73AF\u3002<strong>Higress\u5C06\u7ED3\u5408Nacos\u914D\u7F6E\u4E2D\u5FC3\u7684\u5F3A\u5927\u80FD\u529B\uFF0C\u4E3AMCP\u670D\u52A1\u5668\u7684\u7EF4\u62A4\u8005\u63D0\u4F9B\u66F4\u7CBE\u7EC6\u7684\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\uFF0C\u5305\u62EC\u7248\u672C\u63A7\u5236\u3001\u7070\u5EA6\u53D1\u5E03\u3001\u914D\u7F6E\u56DE\u6EDA\u548C\u6548\u679C\u5206\u6790\u7B49\uFF0C\u8BA9\u914D\u7F6E\u8C03\u4F18\u4E0D\u518D\u662F\u4E00\u6B21\u6027\u5DE5\u4F5C\uFF0C\u800C\u662F\u4E00\u4E2A\u6570\u636E\u9A71\u52A8\u7684\u6301\u7EED\u4F18\u5316\u8FC7\u7A0B\u3002</strong></p>
<p>\u901A\u8FC7\u201D\u81EA\u52A8\u8F6C\u6362+\u4EBA\u5DE5\u8C03\u4F18+\u6570\u636E\u53CD\u9988\u201D\u7684\u5B8C\u6574\u94FE\u8DEF\uFF0C\u6211\u4EEC\u65E2\u80FD\u4EAB\u53D7\u81EA\u52A8\u5316\u5E26\u6765\u7684\u6548\u7387\u63D0\u5347\uFF0C\u53C8\u80FD\u786E\u4FDDAI\u52A9\u624B\u63D0\u4F9B\u9AD8\u8D28\u91CF\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u540C\u65F6\u4E0D\u65AD\u6839\u636E\u5B9E\u9645\u4F7F\u7528\u6570\u636E\u4F18\u5316\u914D\u7F6E\uFF0C\u4F7FAI\u52A9\u624B\u7684\u80FD\u529B\u968F\u7740\u4F7F\u7528\u800C\u6301\u7EED\u8FDB\u5316\u3002</p>
<p><strong>\u9884\u544A\uFF1AHigress \u5C06\u4E8E\u4E0B\u5468\u4E0A\u7EBF\u56FD\u5185\u9996\u4E2A\u57FA\u4E8E API \u7F51\u5173\u7684 MCP Marketplace\uFF0C\u5305\u62EC 50 \u6B3E\u7CBE\u5FC3\u8C03\u4F18\u8FC7\u7684 MCP \u670D\u52A1\u3002</strong></p>
<p><font style="color:rgb(33, 37, 41);">[1] </font><a href="https://github.com/higress-group/openapi-to-mcpserver" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/openapi-to-mcpserver</a></p>
<p><font style="color:rgba(0, 0, 0, 0.85) !important;">[2] </font><a href="https://mp.weixin.qq.com/s/bgDd82lj0jBUWifLMNByjw" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://mp.weixin.qq.com/s/bgDd82lj0jBUWifLMNByjw</a></p>
<p><font style="color:rgba(0, 0, 0, 0.85) !important;">[3] </font><a href="https://higress.cn/en/ai/mcp-quick-start/#configuring-rest-api-mcp-server" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.cn/en/ai/mcp-quick-start/#configuring-rest-api-mcp-server</a></p>
<p>[4] <a href="https://mp.weixin.qq.com/s/WYlqHm2YZSiRv4USUNUBgg" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://mp.weixin.qq.com/s/WYlqHm2YZSiRv4USUNUBgg</a><font style="color:rgb(33, 37, 41);"> </font></p>`,a={title:"\u5B9E\u7528\u5DE5\u5177\u6765\u4E86\uFF0C\u5B58\u91CF OpenAPI \u6279\u91CF\u8F6C\u5316\u4E3A MCP Server",description:"\u5B9E\u7528\u5DE5\u5177\u6765\u4E86\uFF0C\u5B58\u91CF OpenAPI \u6279\u91CF\u8F6C\u5316\u4E3A MCP Server",date:"2025-04-11",category:"article",keywords:["Higress"],authors:"CH3CHO"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_mpavtgoff5h3odvq.md",i=void 0,d=function(){return`
<font style="color:rgb(33, 37, 41);">\u5C06\u5B58\u91CF OpenAPI \u6279\u91CF\u8F6C\u5316\u4E3A MCP Server\uFF0C\u8FD9\u662F Higress \u6700\u65B0\u5F00\u6E90\u7684\u80FD\u529B\uFF0C\u52A9\u529B\u5F00\u53D1\u8005\u4EEC\u9AD8\u6548\u6784\u5EFA MCP Server\u3002[1]</font>

<font style="color:rgb(33, 37, 41);"></font>

## <font style="color:rgb(33, 37, 41);">01 OpenAPI \u7684\u76F8\u5173\u6982\u5FF5</font>
<font style="color:rgb(33, 37, 41);">OpenAPI \u91C7\u7528 YAML \u6216 JSON \u7F16\u5199\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2A\u4E0E\u8BED\u8A00\u65E0\u5173\u7684 HTTP API \u63A5\u53E3\uFF0C\u4E3A API \u751F\u547D\u5468\u671F\u5404\u9636\u6BB5\u63D0\u4F9B\u7EDF\u4E00\u7684\u4FE1\u606F\u4F20\u9012\u65B9\u5F0F\u3002\u800C API \u5141\u8BB8\u5F00\u53D1\u8005\u5728\u65E0\u987B\u8BBF\u95EE\u6E90\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C31\u53EF\u4EE5\u53D1\u73B0\u5E76\u4F7F\u7528\u76F8\u5E94\u7684\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u4E00\u4E2A\u793E\u4EA4 APP\uFF0C\u60F3\u83B7\u53D6\u53CC\u65B9\u7684\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u65E0\u987B\u81EA\u5EFA\u4E00\u4E2A\u9AD8\u5FB7\u5730\u56FE\uFF0C\u4E5F\u65E0\u987B\u83B7\u53D6\u9AD8\u5FB7\u5730\u56FE\u6E90\u7801\uFF0C\u800C\u662F\u901A\u8FC7\u9AD8\u5FB7\u5730\u56FE\u7684 API \u63A5\u53E3\uFF0C\u5373\u53EF\u83B7\u5F97\u5176\u5730\u7406\u4F4D\u7F6E\u4FE1\u606F\u7684\u529F\u80FD\u3002</font>

<font style="color:rgb(33, 37, 41);"></font>

<font style="color:rgb(33, 37, 41);">\u7ECF\u5178\u4E92\u8054\u7F51\u5E94\u7528\uFF0C\u4F8B\u5982\u9AD8\u5FB7\u3001\u652F\u4ED8\u5B9D\u7B49\u5747\u4EE5\u5F00\u653E\u5E73\u53F0\u7684\u65B9\u5F0F\u5BF9\u5916\u63D0\u4F9B API \u670D\u52A1\uFF1B\u516C\u5171\u4E91\u670D\u52A1\uFF0C\u4F8B\u5982\u963F\u91CC\u4E91\u901A\u8FC7 OpenAPI Explorer \u5411\u7528\u6237\u63D0\u4F9B API \u670D\u52A1\uFF0C\u4F7F\u5F97\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E9B\u5E94\u7528\u7A0B\u5E8F\u63A5\u53E3\u6765\u7BA1\u7406\u4E91\u4E0A\u8D44\u6E90\u3001\u6570\u636E\u548C\u670D\u52A1\u7B49\u5185\u5BB9\u3002\u518D\u4F8B\u5982\u4EBA\u5DE5\u667A\u80FD\u5927\u6A21\u578B\uFF0C\u901A\u4E49\u3001DeepSeek\u3001OpenAI \u5747\u4EE5 API \u7684\u65B9\u5F0F\uFF0C\u5BF9\u5916\u63D0\u4F9B\u5927\u6A21\u578B\u7684\u8C03\u7528\u670D\u52A1\u3002\u8FD9\u4E9B API \u5747\u9075\u5FAA OpenAPI \u89C4\u8303\uFF0C\u6709\u4E86\u89C4\u8303\uFF0C\u534F\u4F5C\u624D\u4F1A\u9AD8\u6548\u3002</font>

![](/img/1744363402669.png)

<font style="color:rgb(33, 37, 41);"></font>

## <font style="color:rgb(33, 37, 41);">02 \u5C06\u5B58\u91CF OpenAPI \u8F6C\u5316\u4E3A MCP Server \u7684\u5E38\u89C4\u505A\u6CD5</font>
MCP \u662F\u5141\u8BB8 LLM \u80FD\u591F\u901A\u8FC7\u6807\u51C6\u5316\u7684\u65B9\u5F0F\uFF0C\u8BBF\u95EE\u5916\u90E8\u8D44\u6E90\u3001\u6570\u636E\u548C\u670D\u52A1\u3002\u5C06\u5B58\u91CF OpenAPI \u8F6C\u5316\u4E3A MCP Server\uFF0C\u662F\u4E00\u79CD\u5229\u65E7\uFF0C\u662F\u5B9E\u73B0\u7ECF\u6D4E\u6548\u76CA\u7684\u9AD8\u6821\u8DEF\u5F84\uFF0C\u76EE\u7684\u662F\u4F7F\u81EA\u8EAB\u7684\u670D\u52A1\u80FD\u88AB\u5916\u90E8\u7684 AI \u5E94\u7528\u8FDB\u884C\u8C03\u7528\uFF0C\u4ECE\u800C\u63D0\u5347\u5B58\u91CF\u670D\u52A1\u7684\u4EF7\u503C\u3002\u4ECD\u7136\u4EE5\u9AD8\u5FB7\u5730\u56FE\u4E3A\u4F8B\uFF0C\u9AD8\u5FB7\u63D0\u4F9B\u5C06\u5B58\u91CF\u7684 OpenAPI \u670D\u52A1\uFF0C\u4F8B\u5982 IP \u5B9A\u4F4D\u3001\u5730\u7406\u7F16\u7801\u8F6C\u5316\u4E3A MCP Server\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u5916\u90E8\u5E94\u7528\u8C03\u7528\u9AD8\u5FB7\u5730\u56FE\u7684\u80FD\u529B\uFF0C\u4ECE\u800C\u63D0\u5347\u670D\u52A1\u7684\u6D3B\u8DC3\u5EA6\u3002



\u867D\u7136 MCP \u5DF2\u7ECF\u5927\u5E45\u964D\u4F4E\u4E86\u5927\u6A21\u578B\u5E94\u7528\u8BBF\u95EE\u548C\u8C03\u7528\u5916\u90E8\u8D44\u6E90\u3001\u6570\u636E\u548C\u670D\u52A1\u7684\u590D\u6742\u5EA6\uFF0C\u4F46\u82E5\u60A8\u5C06\u590D\u7528\u5B58\u91CF\u57FA\u7840\u8BBE\u65BD\u4F5C\u4E3A MCP \u7684\u5F00\u53D1\u7B56\u7565\uFF0C\u90A3\u4E48\u5C06\u9762\u5BF9\u4E00\u4E2A\u65B0\u7684\u95EE\u9898\uFF0C\u5373\u5B58\u91CF OpenAPI \u8F6C\u5316\u4E3A MCP Server \u662F\u4E00\u4E2A\u201C\u91CD\u590D\u7684\u4F53\u529B\u6D3B\u201D\uFF0C\u4E14\u8FD8\u8981\u8FDB\u884C\u65E5\u5E38\u7EF4\u62A4\uFF0C\u5305\u62EC\u63A5\u53E3\u7684\u66F4\u65B0\u3001\u670D\u52A1\u5668\u7A33\u5B9A\u6027\u4FDD\u969C\u7B49\u3002MCP \u63D0\u4F9B\u4E86 TypeScript\u3001Java \u7B49 SDK \u5DE5\u5177\u5305\uFF0C\u7528\u4E8E\u5F00\u53D1 MCP Server\uFF0C\u5C06\u5B58\u91CF <font style="color:rgba(0, 0, 0, 0.85) !important;">Open</font>API \u5BF9\u5916\u901A\u8FC7 MCP \u534F\u8BAE\u66B4\u9732\u6210\u666E\u901A\u7684 HTTP \u670D\u52A1\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5305\u62EC\uFF1A[1]

+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u8BFB\u53D6\u5E76\u89E3\u6790\u5B58\u91CF OpenAPI \u7684\u6587\u6863\uFF0C\u63D0\u53D6\u51FA\u5176\u4E2D\u7684\u5173\u952E\u4FE1\u606F\uFF0C\u5982 API \u8DEF\u5F84\u3001\u8BF7\u6C42\u65B9\u6CD5\u3001\u8BF7\u6C42\u53C2\u6570\u3001\u54CD\u5E94\u683C\u5F0F\u7B49\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u6309\u7167 </font>MCP \u534F\u8BAE\u7684<font style="color:rgba(0, 0, 0, 0.85) !important;">\u89C4\u8303\uFF0C\u8F6C\u5316\u6210\u65B0\u7684\u63CF\u8FF0\uFF0C\u5305\u62EC Tool \u7684\u4F5C\u7528\u63CF\u8FF0\u548C Tool \u7684\u53C2\u6570\u63CF\u8FF0\uFF0C\u4EE5 tool/list \u7ED3\u679C\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</font>
+ \u5F53 MCP Client \u8981\u8C03\u7528 MCP Server \u7684\u65F6<font style="color:rgba(0, 0, 0, 0.85) !important;">\u5019\uFF0C\u5C06 tool/call \u7684 Json RPC \u8BF7\u6C42\u89E3\u6790\u51FA\u6765\uFF0C\u901A\u8FC7\u914D\u7F6E\u597D\u7684\u53C2\u6570\u6620\u5C04\u4FE1\u606F\u3001Path\u3001\u540E\u7AEF\u5730\u5740\u7B49\u4FE1\u606F\uFF0C\u751F\u6210\u540E\u7AEF\u7684 HTTP \u8C03\u7528\u8BF7\u6C42\uFF0C\u5E76\u8FDB\u884C\u8C03\u7528\u3002\u8C03\u7528\u5B8C\u6210\u540E\uFF0C\u518D\u5C06\u540E\u7AEF\u7684\u8C03\u7528\u7ED3\u679C\u5305\u88C5\uFF0C\u4F9B\u6807\u51C6\u7684 tool/call \u63A5\u53E3\u8C03\u7528\u8FD4\u56DE\u7ED3\u679C\u3002</font>

<font style="color:rgb(33, 37, 41);"></font>

<font style="color:rgb(33, 37, 41);"></font>

## 03 \u6279\u91CF\u8F6C\u5316 OpenAPI \u81F3 MCP Server
#### 1.1 \u5B89\u88C5
\`\`\`json
go install github.com/higress-group/openapi-to-mcpserver/cmd/openapi-to-mcp@latest
\`\`\`



#### 1.2 \u4F7F\u7528
\`\`\`json
openapi-to-mcp --input path/to/openapi.json --output path/to/mcp-config.yaml
\`\`\`

\u8BF4\u660E

+ \`--input\`\uFF1AOpenAPI \u89C4\u8303\u6587\u4EF6\u7684\u8DEF\u5F84\uFF08JSON \u6216 YAML \u683C\u5F0F\uFF09\uFF0C\u5FC5\u586B\u9879\u3002
+ \`--output\`\uFF1A\u8F93\u51FA\u7684 MCP \u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84\uFF08YAML \u683C\u5F0F\uFF09\uFF0C\u5FC5\u586B\u9879\u3002
+ \`--server-name\`\uFF1AMCP \u670D\u52A1\u5668\u7684\u540D\u79F0\uFF0C\u9ED8\u8BA4\u503C\u4E3A "openapi-server"\u3002
+ \`--tool-prefix\`\uFF1A\u5DE5\u5177\u540D\u79F0\u7684\u524D\u7F00\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002
+ \`--format\`\uFF1A\u8F93\u51FA\u683C\u5F0F\uFF08yaml \u6216 json\uFF09\uFF0C\u9ED8\u8BA4\u503C\u4E3A "yaml"\u3002
+ \`--validate\`\uFF1A\u662F\u5426\u9A8C\u8BC1 OpenAPI \u89C4\u8303\uFF0C\u9ED8\u8BA4\u503C\u4E3A false\u3002
+ \`--template\`\uFF1A\u7528\u4E8E\u4FEE\u8865\u8F93\u51FA\u7684\u6A21\u677F\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u503C\u4E3A\u7A7A\u3002



#### 1.3 \u793A\u4F8B
\`\`\`json
openapi-to-mcp --input petstore.json --output petstore-mcp.yaml --server-name petstore
\`\`\`

\u8FD9\u4E2A\u793A\u4F8B\u5C06 \`petstore.json\` \u6587\u4EF6\u8F6C\u6362\u4E3A \`petstore-mcp.yaml\` \u6587\u4EF6\uFF0C\u5E76\u5C06 MCP \u670D\u52A1\u5668\u7684\u540D\u79F0\u8BBE\u7F6E\u4E3A \`petstore\`\u3002



\u4EE5\u4E0B\u662F\u5B8C\u6574\u793A\u4F8B\u3002



<font style="color:rgba(0, 0, 0, 0.85);">a. \u4ECE\u4E00\u4E2A OpenAPI \u89C4\u8303\uFF08petstore.json\uFF09\u5F00\u59CB\uFF1A</font>

\`\`\`json
{
  "openapi": "3.0.0",
  "info": {
    "version": "1.0.0",
    "title": "Swagger Petstore",
    "description": "A sample API that uses a petstore as an example to demonstrate features in the OpenAPI 3.0 specification"
  },
  "servers": [
    {
      "url": "http://petstore.swagger.io/v1"
    }
  ],
  "paths": {
    "/pets": {
      "get": {
        "summary": "List all pets",
        "operationId": "listPets",
        "parameters": [
          {
            "name": "limit",
            "in": "query",
            "description": "How many items to return at one time (max 100)",
            "required": false,
            "schema": {
              "type": "integer",
              "format": "int32"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "A paged array of pets",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "pets": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "integer",
                            "description": "Unique identifier for the pet"
                          },
                          "name": {
                            "type": "string",
                            "description": "Name of the pet"
                          },
                          "tag": {
                            "type": "string",
                            "description": "Tag of the pet"
                          }
                        }
                      }
                    },
                    "nextPage": {
                      "type": "string",
                      "description": "URL to get the next page of pets"
                    }
                  }
                }
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a pet",
        "operationId": "createPets",
        "requestBody": {
          "description": "Pet to add to the store",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "required": ["name"],
                "properties": {
                  "name": {
                    "type": "string",
                    "description": "Name of the pet"
                  },
                  "tag": {
                    "type": "string",
                    "description": "Tag of the pet"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Null response"
          }
        }
      }
    },
    "/pets/{petId}": {
      "get": {
        "summary": "Info for a specific pet",
        "operationId": "showPetById",
        "parameters": [
          {
            "name": "petId",
            "in": "path",
            "required": true,
            "description": "The id of the pet to retrieve",
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Expected response to a valid request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "integer",
                      "description": "Unique identifier for the pet"
                    },
                    "name": {
                      "type": "string",
                      "description": "Name of the pet"
                    },
                    "tag": {
                      "type": "string",
                      "description": "Tag of the pet"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
\`\`\`



<font style="color:rgba(0, 0, 0, 0.85);">b. \u5C06\u5176\u8F6C\u6362\u4E3A Higress REST-to-MCP \u914D\u7F6E\uFF1A</font>

\`\`\`json
openapi-to-mcp --input petstore.json --output petstore-mcp.yaml --server-name petstore
\`\`\`



c. <font style="color:rgba(0, 0, 0, 0.85) !important;">\u751F\u6210 petstore-mcp.yaml \u6587\u4EF6\uFF1A</font>

\`\`\`json
server:
  name: petstore
tools:
  - name: showPetById
    description: Info for a specific pet
    args:
      - name: petId
        description: The id of the pet to retrieve
        type: string
        required: true
        position: path
    requestTemplate:
      url: /pets/{petId}
      method: GET
    responseTemplate:
      prependBody: |
        # API Response Information

        Below is the response from an API call. To help you understand the data, I've provided:

        1. A detailed description of all fields in the response structure
        2. The complete API response

        ## Response Structure

        > Content-Type: application/json

        - **id**: Unique identifier for the pet (Type: integer)
        - **name**: Name of the pet (Type: string)
        - **tag**: Tag of the pet (Type: string)

        ## Original Response

  - name: createPets
    description: Create a pet
    args:
      - name: name
        description: Name of the pet
        type: string
        required: true
        position: body
      - name: tag
        description: Tag of the pet
        type: string
        position: body
    requestTemplate:
      url: /pets
      method: POST
      headers:
        - key: Content-Type
          value: application/json
    responseTemplate: {}

  - name: listPets
    description: List all pets
    args:
      - name: limit
        description: How many items to return at one time (max 100)
        type: integer
        position: query
    requestTemplate:
      url: /pets
      method: GET
    responseTemplate:
      prependBody: |
        # API Response Information

        Below is the response from an API call. To help you understand the data, I've provided:

        1. A detailed description of all fields in the response structure
        2. The complete API response

        ## Response Structure

        > Content-Type: application/json

        - **pets**:  (Type: array)
          - **pets[].id**: Unique identifier for the pet (Type: integer)
          - **pets[].name**: Name of the pet (Type: string)
          - **pets[].tag**: Tag of the pet (Type: string)
        - **nextPage**: URL to get the next page of pets (Type: string)

        ## Original Response
\`\`\`

  
<font style="color:rgba(0, 0, 0, 0.85) !important;">\u6CE8\u610F\uFF0C\u8BE5\u5DE5\u5177\u4F1A\u6839\u636E\u6BCF\u4E2A\u53C2\u6570\u5728 OpenAPI \u89C4\u8303\u4E2D\u7684\u4F4D\u7F6E\u81EA\u52A8\u8BBE\u7F6E\u5176\u4F4D\u7F6E\u5B57\u6BB5\uFF1A</font>

+ \`<font style="color:rgba(0, 0, 0, 0.85) !important;">petId</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;"> \u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A </font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">position: path</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u7F6E\uFF1A\u8DEF\u5F84\uFF09\uFF0C\u56E0\u4E3A\u5728 OpenAPI \u89C4\u8303\u4E2D\u5B83\u88AB\u5B9A\u4E49\u4E3A </font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">in: path</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u4E8E\u8DEF\u5F84\u4E2D\uFF09\u3002</font>
+ \`<font style="color:rgba(0, 0, 0, 0.85) !important;">limit</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;"> \u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A </font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">position: query</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u7F6E\uFF1A\u67E5\u8BE2\u53C2\u6570\uFF09\uFF0C\u56E0\u4E3A\u5728 OpenAPI \u89C4\u8303\u4E2D\u5B83\u88AB\u5B9A\u4E49\u4E3A </font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">in: query</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u4E8E\u67E5\u8BE2\u53C2\u6570\u4E2D\uFF09\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u8BF7\u6C42\u4F53\u5C5E\u6027\uFF08</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">name</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;"> \u548C </font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">tag</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF09\u88AB\u8BBE\u7F6E\u4E3A </font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">position: body</font>\`<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF08\u4F4D\u7F6E\uFF1A\u8BF7\u6C42\u4F53\uFF09\u3002</font>

<font style="color:rgba(0, 0, 0, 0.85) !important;"></font>

<font style="color:rgba(0, 0, 0, 0.85) !important;">MCP \u670D\u52A1\u5668\u5728\u53D1\u8D77 API \u8BF7\u6C42\u65F6\uFF0C\u4F1A\u5728\u6B63\u786E\u7684\u4F4D\u7F6E\u81EA\u52A8\u5904\u7406\u8FD9\u4E9B\u53C2\u6570\u3002\u6709\u5173\u5982\u4F55\u5C06\u6B64\u914D\u7F6E\u4E0E Higress REST-to-MCP \u7ED3\u5408\u4F7F\u7528\u7684\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 Higress REST-to-MCP \u6587\u6863\u3002[2]</font>

#### <font style="color:rgb(0, 0, 0);">1.4 \u529F\u80FD</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u5C06 OpenAPI \u8DEF\u5F84\u8F6C\u6362\u4E3A MCP \u5DE5\u5177\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u652F\u6301 JSON \u548C YAML \u683C\u5F0F\u7684 OpenAPI \u89C4\u8303\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u751F\u6210\u5305\u542B\u670D\u52A1\u5668\u548C\u5DE5\u5177\u5B9A\u4E49\u7684 MCP \u914D\u7F6E\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u4FDD\u7559\u53C2\u6570\u63CF\u8FF0\u548C\u7C7B\u578B\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u6839\u636E OpenAPI \u53C2\u6570\u4F4D\u7F6E\u81EA\u52A8\u8BBE\u7F6E\u53C2\u6570\u4F4D\u7F6E\uFF08\u8DEF\u5F84\u3001\u67E5\u8BE2\u3001\u5934\u90E8\u3001Cookie\u3001\u8BF7\u6C42\u4F53\uFF09\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u5904\u7406\u8DEF\u5F84\u3001\u67E5\u8BE2\u3001\u5934\u90E8\u3001Cookie \u548C\u8BF7\u6C42\u4F53\u53C2\u6570\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u751F\u6210\u5E26\u6709\u5B57\u6BB5\u63CF\u8FF0\u548C\u6539\u8FDB\u683C\u5F0F\u7684\u54CD\u5E94\u6A21\u677F\uFF0C\u4EE5\u4FBF\u5927\u8BED\u8A00\u6A21\u578B\uFF08LLM\uFF09\u7406\u89E3\u3002</font>
+ <font style="color:rgba(0, 0, 0, 0.85) !important;">\u53EF\u9009\u7684 OpenAPI \u89C4\u8303\u9A8C\u8BC1\uFF08\u9ED8\u8BA4\u7981\u7528\uFF09\u3002</font>



#### 1.4 \u914D\u7F6E MCP Server \u63D2\u4EF6
\u63A5\u4E0B\u6765\u6211\u4EEC\u5C06\u751F\u6210\u7684\u6587\u4EF6\u5BFC\u5165<font style="color:rgba(0, 0, 0, 0.85) !important;"> Higress \u63A7\u5236\u53F0\uFF0C\u5E76</font>\u6DFB\u52A0 MCP Server \u63D2\u4EF6\u5E76\u8FDB\u884C\u914D\u7F6E<font style="color:rgba(0, 0, 0, 0.85) !important;">\uFF0C\u5C31\u53EF\u4EE5\u5C06\u5176\u4E0E Higress \u4E00\u8D77\u4F7F\u7528\u3002</font>  
![](/img/1744363407259.png)  


\u63D2\u4EF6\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
server:
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

> **\u6CE8\u610F\uFF1A** \u5BF9\u4E8E2025 - 03 - 26 [MCP streamable HTTP](https://spec.modelcontextprotocol.io/specification/2025-03-26/)\u534F\u8BAE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6B64\u63D2\u4EF6\uFF0C\u65E0\u9700\u5168\u5C40 ConfigMap \u914D\u7F6E\u3002
>



#### 1.5 \u8C03\u7528 MCP Server
\u5728 AI Agent \u4E2D\u914D\u7F6E MCP Server \u7684 SSE \u8FDE\u63A5\uFF0C\u4EE5 Cursor \u4E3A\u4F8B\uFF1A

+ \u6570\u636E\u5E93\u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528 ConfigMap \u4E2D\u914D\u7F6E\u7684 path + sse_path_suffix
+ REST API \u7C7B\u578B\u7684 MCP Server\uFF1A\u4F7F\u7528\u63A7\u5236\u53F0\u914D\u7F6E\u7684\u8DEF\u7531 path + sse_path_suffix

\`\`\`yaml
"mcpServers": {
  "postgres": {
    "url": "http://your-higress-address/postgres/sse"
  },
  "rest-api": {
    "url": "http://your-higress-address/user/sse"
  }
\`\`\`



Cursor \u4E2D\u914D\u7F6E\u5B8C\u6210\uFF1A  
![](/img/1744363410679.png)  


\u901A\u8FC7 MCP Server\uFF0C\u60A8\u53EF\u4EE5\u5FEB\u901F\u4E3A AI Agent \u6DFB\u52A0\u5404\u79CD\u6570\u636E\u6E90\u652F\u6301\uFF0C\u63D0\u9AD8\u5F00\u53D1\u6548\u7387\u3002\u4EFB\u4F55 REST API \u90FD\u53EF\u4EE5\u901A\u8FC7\u7B80\u5355\u7684\u914D\u7F6E\u8F6C\u6362\u4E3A MCP Server\uFF0C\u65E0\u9700\u7F16\u5199\u989D\u5916\u7684\u4EE3\u7801\u3002



## 04 \u5BF9 MCP Server \u8FDB\u884C\u914D\u7F6E\u8C03\u4F18
\u5728\u524D\u9762\u7684\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u4E86\u89E3\u4E86OpenAPI to MCP\u5DE5\u5177\u5982\u4F55\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u5C06\u73B0\u6709API\u8F6C\u6362\u4E3AAI\u52A9\u624B\u53EF\u8C03\u7528\u7684\u5DE5\u5177\u3002\u8FD9\u79CD\u81EA\u52A8\u5316\u8F6C\u6362\u6781\u5927\u5730\u63D0\u9AD8\u4E86\u5F00\u53D1\u6548\u7387\uFF0C\u8BA9\u6211\u4EEC\u80FD\u591F\u5728\u51E0\u5206\u949F\u5185\u5B8C\u6210\u539F\u672C\u9700\u8981\u6570\u5C0F\u65F6\u751A\u81F3\u6570\u5929\u7684\u5DE5\u4F5C\u3002

\u7136\u800C\uFF0C\u81EA\u52A8\u751F\u6210\u7684\u914D\u7F6E\u867D\u7136\u529F\u80FD\u5B8C\u6574\uFF0C\u4F46\u5F80\u5F80\u4E0D\u591F\u7CBE\u7EC6\u3002\u7279\u522B\u662F\u5F53API\u8FD4\u56DE\u590D\u6742\u6570\u636E\u7ED3\u6784\u65F6\uFF0C\u5982\u679C\u4E0D\u5BF9\u914D\u7F6E\u8FDB\u884C\u4EBA\u5DE5\u8C03\u4F18\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5927\u578B\u8BED\u8A00\u6A21\u578B(LLM)\u5BF9\u6570\u636E\u7684\u7406\u89E3\u4E0D\u591F\u51C6\u786E\uFF0C\u4ECE\u800C\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\u3002

### 4.1 \u4E3A\u4EC0\u4E48\u9700\u8981\u8C03\u4F18MCP\u914D\u7F6E\uFF1F
\u81EA\u52A8\u751F\u6210\u7684MCP\u914D\u7F6E\u901A\u5E38\u4F1A\u5305\u542BAPI\u8FD4\u56DE\u7684\u6240\u6709\u5B57\u6BB5\uFF0C\u5E76\u4EE5\u6241\u5E73\u7684\u65B9\u5F0F\u5448\u73B0\u3002\u8FD9\u5728\u5904\u7406\u7B80\u5355API\u65F6\u53EF\u80FD\u8DB3\u591F\uFF0C\u4F46\u5BF9\u4E8E\u8FD4\u56DE\u5927\u91CF\u5D4C\u5957\u6570\u636E\u7684\u590D\u6742API\uFF0C\u4F1A\u5E26\u6765\u51E0\u4E2A\u95EE\u9898\uFF1A

1. **\u4FE1\u606F\u8FC7\u8F7D**\uFF1ALLM\u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\u6709\u9650\uFF0C\u8FC7\u591A\u65E0\u5173\u4FE1\u606F\u4F1A\u7A00\u91CA\u91CD\u8981\u5185\u5BB9
2. **\u7ED3\u6784\u4E0D\u6E05**\uFF1A\u590D\u6742\u7684\u5D4C\u5957\u5173\u7CFB\u5728\u6241\u5E73\u63CF\u8FF0\u4E2D\u5BB9\u6613\u4E22\u5931
3. **\u7F3A\u4E4F\u8BED\u4E49**\uFF1A\u6280\u672F\u4EE3\u7801\u548C\u4E13\u4E1A\u672F\u8BED\u672A\u7ECF\u8F6C\u6362\uFF0C\u96BE\u4EE5\u88ABLLM\u6B63\u786E\u7406\u89E3
4. **\u5E7B\u89C9\u98CE\u9669**\uFF1A\u9762\u5BF9\u4E0D\u719F\u6089\u7684\u6570\u636E\u7ED3\u6784\uFF0CLLM\u53EF\u80FD\u4EA7\u751F\u9519\u8BEF\u63A8\u65AD

\u901A\u8FC7\u4EBA\u5DE5\u8C03\u4F18MCP\u914D\u7F6E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u663E\u8457\u63D0\u5347LLM\u5BF9API\u8FD4\u56DE\u6570\u636E\u7684\u7406\u89E3\u80FD\u529B\uFF0C\u51CF\u5C11\u9519\u8BEF\u89E3\u8BFB\u548C\u5E7B\u89C9\uFF0C\u4ECE\u800C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u51C6\u786E\u3001\u66F4\u6709\u4EF7\u503C\u7684\u56DE\u7B54\u3002

### 4.2 \u8C03\u4F18\u6848\u4F8B\uFF1A\u7535\u5546\u4EA7\u54C1\u641C\u7D22API
\u8BA9\u6211\u4EEC\u901A\u8FC7\u4E00\u4E2A\u5177\u4F53\u6848\u4F8B\u6765\u8BF4\u660EMCP\u914D\u7F6E\u8C03\u4F18\u7684\u91CD\u8981\u6027\u3002\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u7535\u5546\u5E73\u53F0\u7684\u4EA7\u54C1\u641C\u7D22API\uFF0C\u5B83\u8FD4\u56DE\u5305\u542B\u5927\u91CF\u6280\u672F\u7EC6\u8282\u7684\u590D\u6742\u4EA7\u54C1\u4FE1\u606F\u3002

#### 4.2.1 \u81EA\u52A8\u751F\u6210\u7684\u57FA\u7840\u914D\u7F6E
\u4F7F\u7528OpenAPI to MCP\u5DE5\u5177\u81EA\u52A8\u751F\u6210\u7684\u914D\u7F6E\u53EF\u80FD\u5982\u4E0B\u6240\u793A\uFF1A

\`\`\`yaml
server:
  name: ecommerce-api
tools:
  - name: searchProducts
    description: "Search for products in the e-commerce platform"
    args:
      - name: query
        description: "Search query string"
        type: string
        required: true
      - name: category
        description: "Product category"
        type: string
        required: false
      - name: limit
        description: "Maximum number of results to return"
        type: integer
        default: 10
    requestTemplate:
      url: "https://api.example.com/products/search"
      method: GET
      argsToUrlParam: true
    responseTemplate:
      prependBody: |
        # Search Results
        
        Below is the API response with these fields:
        
        - **success**: Boolean indicating if the request was successful
        - **total**: Total number of matching products
        - **page**: Current page number
        - **pageSize**: Number of items per page
        - **products**: Array of product objects with the following fields:
          - **id**: Product unique identifier
          - **name**: Product name
          - **description**: Product description 
          - **price**: Product price
          - **compareAtPrice**: Original price before discount
          - **currency**: Currency code (e.g., USD, EUR)
          - **availability**: Product availability status
          - **metadata**: Technical metadata
          - **attributes**: Product attributes
          - **variants**: Product variations
          - **images**: Product images
          - **categories**: Categories the product belongs to
          - **tags**: Product tags
          - **brand**: Product brand information
          - **shipping**: Shipping information
          - **ratings**: Product ratings and reviews
        
        Original response:
\`\`\`

\u5F53LLM\u63A5\u6536\u5230\u8FD9\u79CD\u914D\u7F6E\u4E0B\u7684API\u54CD\u5E94\u65F6\uFF0C\u5B83\u4F1A\u9762\u4E34\u4EE5\u4E0B\u6311\u6218\uFF1A

1. **\u6570\u636E\u7ED3\u6784\u6DF7\u6DC6**\uFF1A\u65E0\u6CD5\u6E05\u6670\u7406\u89E3\u5D4C\u5957\u5BF9\u8C61\uFF08\u5982metadata\u3001attributes\uFF09\u7684\u5185\u90E8\u7ED3\u6784
2. **\u5B57\u6BB5\u542B\u4E49\u4E0D\u660E**\uFF1A\u4E0D\u77E5\u9053"availability"\u5B57\u6BB5\u7684\u53EF\u80FD\u503C\u53CA\u5176\u542B\u4E49
3. **\u4FE1\u606F\u4F18\u5148\u7EA7\u4E0D\u6E05**\uFF1A\u96BE\u4EE5\u5224\u65AD\u54EA\u4E9B\u4FE1\u606F\u5BF9\u7528\u6237\u6700\u91CD\u8981
4. **\u4E0A\u4E0B\u6587\u7A97\u53E3\u5360\u7528**\uFF1A\u5927\u91CF\u539F\u59CBJSON\u5360\u7528\u4E86LLM\u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\uFF0C\u6324\u538B\u4E86\u5176\u4ED6\u91CD\u8981\u4FE1\u606F

\u8FD9\u4E9B\u95EE\u9898\u53EF\u80FD\u5BFC\u81F4LLM\u4EA7\u751F\u4EE5\u4E0B\u9519\u8BEF\u7406\u89E3\uFF1A

+ \u6DF7\u6DC6\u4EA7\u54C1\u4E3B\u4F53\u4E0E\u53D8\u4F53\u4FE1\u606F\uFF1A"\u8FD9\u6B3E\u624B\u8868\u6709\u9ED1\u8272\u3001\u94F6\u8272\u548C\u73AB\u7470\u91D1\u4E09\u79CD\u989C\u8272\uFF0C\u4EF7\u683C\u5206\u522B\u662F899\u5143\u3001899\u5143\u548C949\u5143\u3002"\uFF08\u8BEF\u5C06\u53D8\u4F53\u4FE1\u606F\u4F5C\u4E3A\u4E3B\u8981\u4FE1\u606F\uFF09
+ \u9519\u8BEF\u5173\u8054\u6280\u672F\u7EC6\u8282\uFF1A"\u8FD9\u6B3ETechFit Pro\u667A\u80FD\u624B\u8868\u7684\u4FDD\u4FEE\u671F\u662FTF-SW-P10\u3002"\uFF08\u6DF7\u6DC6SKU\u4E0E\u4FDD\u4FEE\u671F\uFF09
+ \u57FA\u4E8E\u4E0D\u5B8C\u6574\u4FE1\u606F\u751F\u6210\u5E7B\u89C9\uFF1A"\u8BE5\u624B\u8868\u5728\u6240\u6709\u7535\u5B50\u5546\u5E97\u5747\u6709\u9500\u552E\u3002"\uFF08\u57FA\u4E8Eshipping.locations\u9519\u8BEF\u63A8\u65AD\uFF09

#### 4.2.2 \u4EBA\u5DE5\u8C03\u4F18\u540E\u7684\u914D\u7F6E
Higress \u652F\u6301\u7ED3\u5408 go template \u548C gjson \u8868\u8FBE\u5F0F\u6765\u5BF9\u8BF7\u6C42\u548C\u54CD\u5E94\u6A21\u7248\u8FDB\u884C\u7CBE\u7EC6\u5316\u5904\u7406\uFF08\u8BE6\u7EC6\u80FD\u529B\u8BF7\u67E5\u9605\u6587\u6863\uFF1A[https://higress.cn/en/ai/mcp-server](https://higress.cn/en/ai/mcp-server)\uFF09\uFF0C\u901A\u8FC7\u7CBE\u5FC3\u8C03\u4F18\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u914D\u7F6E\u4F18\u5316\u5982\u4E0B\uFF1A

\`\`\`yaml
server:
  name: ecommerce-api
tools:
  - name: searchProducts
    description: "\u641C\u7D22\u7535\u5546\u5E73\u53F0\u4E0A\u7684\u4EA7\u54C1\uFF0C\u8FD4\u56DE\u5339\u914D\u641C\u7D22\u6761\u4EF6\u7684\u4EA7\u54C1\u5217\u8868\uFF0C\u5305\u542B\u4EA7\u54C1\u57FA\u672C\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u5E93\u5B58\u72B6\u6001\u3001\u8BC4\u5206\u7B49"
    args:
      - name: query
        description: "\u641C\u7D22\u5173\u952E\u8BCD\uFF0C\u53EF\u4EE5\u662F\u4EA7\u54C1\u540D\u79F0\u3001\u54C1\u724C\u3001\u578B\u53F7\u6216\u63CF\u8FF0\u4E2D\u7684\u5173\u952E\u8BCD"
        type: string
        required: true
      - name: category
        description: "\u4EA7\u54C1\u7C7B\u522B\uFF0C\u4F8B\u5982'electronics'\u3001'clothing'\u3001'home'\u7B49"
        type: string
        required: false
      - name: limit
        description: "\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF\uFF0C\u8303\u56F41-50"
        type: integer
        minimum: 1
        maximum: 50
        default: 10
    requestTemplate:
      url: "https://api.example.com/products/search"
      method: GET
      argsToUrlParam: true
    responseTemplate:
      body: |
        # \u4EA7\u54C1\u641C\u7D22\u7ED3\u679C

        \u627E\u5230 {{.total}} \u4E2A\u5339\u914D"{{.query}}"\u7684\u4EA7\u54C1\uFF0C\u4EE5\u4E0B\u662F\u6700\u76F8\u5173\u7684 {{len .products}} \u4E2A\u7ED3\u679C\uFF1A

        {{range $index, $product := .products}}
        ## {{add $index 1}}. {{$product.name}}

        **\u4EF7\u683C**: {{if $product.onSale}}~~{{$product.compareAtPrice}} {{$product.currency}}~~ **{{$product.price}} {{$product.currency}}** (\u8282\u7701 {{percentage $product.compareAtPrice $product.price}}%){{else}}{{$product.price}} {{$product.currency}}{{end}}

        **\u54C1\u724C**: {{$product.brand.name}}

        **\u5E93\u5B58\u72B6\u6001**: {{if eq $product.availability "in_stock"}}\u6709\u8D27{{else if eq $product.availability "low_stock"}}\u5E93\u5B58\u4E0D\u591A{{else}}\u7F3A\u8D27{{end}}

        {{if gt (len $product.ratings.reviews) 0}}**\u8BC4\u5206**: {{$product.ratings.averageRating}}/5 ({{$product.ratings.reviewCount}}\u6761\u8BC4\u4EF7){{end}}

        {{$product.description | truncate 200 "..."}}

        {{if gt (len $product.highlights) 0}}**\u4EA7\u54C1\u7279\u70B9**:
        {{range $highlight := $product.highlights}}
        - {{$highlight}}
        {{end}}{{end}}

        {{end}}

        {{if gt .total (len .products)}}
        \u8FD8\u6709\u66F4\u591A\u7ED3\u679C\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u641C\u7D22\u6761\u4EF6\u83B7\u53D6\u66F4\u7CBE\u51C6\u7684\u5339\u914D\u3002
        {{end}}
\`\`\`

\u4EE5\u4E0B\u662F\u4E00\u4E2A\u667A\u80FD\u624B\u8868\u4EA7\u54C1\u7684\u5B9E\u9645\u54CD\u5E94\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u8C03\u4F18\u540E\u7684\u6A21\u677F\u5982\u4F55\u5904\u7406\u539F\u59CB\u6570\u636E\uFF1A

\`\`\`plain
# \u4EA7\u54C1\u641C\u7D22\u7ED3\u679C

\u627E\u5230 128 \u4E2A\u5339\u914D"\u667A\u80FD\u624B\u8868"\u7684\u4EA7\u54C1\uFF0C\u4EE5\u4E0B\u662F\u6700\u76F8\u5173\u7684 10 \u4E2A\u7ED3\u679C\uFF1A

## 1. TechFit Pro \u667A\u80FD\u624B\u8868

**\u4EF7\u683C**: ~~1299 CNY~~ **899 CNY** (\u8282\u7701 30.8%)

**\u54C1\u724C**: TechFit

**\u5E93\u5B58\u72B6\u6001**: \u6709\u8D27

**\u8BC4\u5206**: 4.7/5 (342\u6761\u8BC4\u4EF7)

TechFit Pro\u667A\u80FD\u624B\u8868\u914D\u5907\u9AD8\u6E05\u5F69\u8272\u89E6\u6478\u5C4F\uFF0C\u652F\u6301\u5FC3\u7387\u76D1\u6D4B\u3001\u8840\u6C27\u68C0\u6D4B\u3001\u591A\u79CD\u8FD0\u52A8\u6A21\u5F0F\u8FFD\u8E2A\u548C\u7761\u7720\u5206\u6790\u3002\u9632\u6C34\u8BBE\u8BA1\uFF0C\u7EED\u822A\u53EF\u8FBE7\u5929\u3002

**\u4EA7\u54C1\u7279\u70B9**:
- \u9AD8\u6E05AMOLED\u89E6\u6478\u5C4F
- 7\u5929\u8D85\u957F\u7EED\u822A
- \u5FC3\u7387\u548C\u8840\u6C27\u76D1\u6D4B
- 30\u79CD\u8FD0\u52A8\u6A21\u5F0F
- 5ATM\u9632\u6C34

## 2. FitBit Versa 3

**\u4EF7\u683C**: 1499 CNY

**\u54C1\u724C**: FitBit

**\u5E93\u5B58\u72B6\u6001**: \u6709\u8D27

**\u8BC4\u5206**: 4.5/5 (287\u6761\u8BC4\u4EF7)

FitBit Versa 3\u667A\u80FD\u624B\u8868\u96C6\u6210GPS\u5B9A\u4F4D\uFF0C\u652F\u630124/7\u5FC3\u7387\u76D1\u6D4B\uFF0C\u5185\u7F6E\u8BED\u97F3\u52A9\u624B\uFF0C\u53EF\u63A5\u542C\u7535\u8BDD\uFF0C\u7535\u6C60\u7EED\u822A\u53EF\u8FBE6\u5929\u3002

**\u4EA7\u54C1\u7279\u70B9**:
- \u5185\u7F6EGPS
- \u8BED\u97F3\u52A9\u624B\u529F\u80FD
- \u6765\u7535\u63A5\u542C
- 20+\u8FD0\u52A8\u6A21\u5F0F
- \u9632\u6C3450\u7C73

## 3. Apple Watch Series 7

**\u4EF7\u683C**: 2999 CNY

**\u54C1\u724C**: Apple

**\u5E93\u5B58\u72B6\u6001**: \u5E93\u5B58\u4E0D\u591A

**\u8BC4\u5206**: 4.9/5 (1243\u6761\u8BC4\u4EF7)

Apple Watch Series 7\u62E5\u6709\u66F4\u5927\u7684\u663E\u793A\u5C4F\uFF0C\u66F4\u5FEB\u7684\u5145\u7535\u901F\u5EA6\uFF0CIP6X\u9632\u5C18\u8BA4\u8BC1\uFF0C\u6E38\u6CF3\u7EA7\u9632\u6C34\uFF0C\u5168\u5929\u5019\u8840\u6C27\u76D1\u6D4B\u548C\u5FC3\u7535\u56FE\u529F\u80FD\u3002

**\u4EA7\u54C1\u7279\u70B9**:
- \u89C6\u7F51\u819C\u7EA7OLED\u663E\u793A\u5C4F
- \u5FEB\u901F\u5145\u7535
- \u5FC3\u7535\u56FE\u548C\u8840\u6C27\u76D1\u6D4B
- \u8DCC\u5012\u68C0\u6D4B\u548C\u7D27\u6025SOS
- \u652F\u6301Apple Pay

\u8FD8\u6709\u66F4\u591A\u7ED3\u679C\u672A\u663E\u793A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u641C\u7D22\u6761\u4EF6\u83B7\u53D6\u66F4\u7CBE\u51C6\u7684\u5339\u914D\u3002
\`\`\`

\u901A\u8FC7\u8FD9\u79CD\u7ED3\u6784\u5316\u7684\u54CD\u5E94\u683C\u5F0F\uFF0CLLM\u53EF\u4EE5\u6E05\u6670\u5730\u7406\u89E3\u6BCF\u4E2A\u4EA7\u54C1\u7684\u5173\u952E\u4FE1\u606F\uFF0C\u800C\u4E0D\u4F1A\u88AB\u5927\u91CF\u7684\u6280\u672F\u7EC6\u8282\u548C\u539F\u59CBJSON\u7ED3\u6784\u6240\u56F0\u6270\u3002

### 4.3 \u8C03\u4F18\u5982\u4F55\u6539\u5584LLM\u7406\u89E3
\u7ECF\u8FC7\u8C03\u4F18\u7684\u914D\u7F6E\u80FD\u591F\u663E\u8457\u63D0\u5347LLM\u5BF9\u6570\u636E\u7684\u7406\u89E3\uFF1A

#### 4.3.1 \u8C03\u4F18\u524DLLM\u7684\u7406\u89E3\u95EE\u9898
1. **\u7ED3\u6784\u6DF7\u6DC6**\uFF1A\u65E0\u6CD5\u533A\u5206\u4E3B\u4EA7\u54C1\u4E0E\u53D8\u4F53\uFF0C\u53EF\u80FD\u9519\u8BEF\u5730\u5C06\u53D8\u4F53\u5C5E\u6027\u63CF\u8FF0\u4E3A\u4EA7\u54C1\u4E3B\u8981\u7279\u5F81
2. **\u5173\u6CE8\u9519\u8BEF\u91CD\u70B9**\uFF1A\u53EF\u80FD\u8FC7\u5EA6\u5173\u6CE8\u7EC6\u8282\uFF08\u5982SKU\u3001\u6761\u5F62\u7801\uFF09\u800C\u975E\u7528\u6237\u5173\u5FC3\u7684\u4EA7\u54C1\u7279\u6027
3. **\u8BEF\u89E3\u5B57\u6BB5\u542B\u4E49**\uFF1A\u65E0\u6CD5\u6B63\u786E\u7406\u89E3\u4E13\u4E1A\u672F\u8BED\u548C\u7F16\u7801\u503C
4. **\u751F\u6210\u5E7B\u89C9**\uFF1A\u88AB\u4F8B\u5982\u5546\u54C1\u8BE6\u60C5\u4E2D\u7684\u65E0\u5173\u5185\u5BB9\u5F71\u54CD\uFF0C\u5BFC\u81F4\u4EA7\u751F\u5E7B\u89C9

#### 4.3.2 \u8C03\u4F18\u540ELLM\u7684\u7406\u89E3\u6539\u8FDB
1. **\u7ED3\u6784\u6E05\u6670**\uFF1A\u51C6\u786E\u7406\u89E3\u6BCF\u4E2A\u4EA7\u54C1\u7684\u57FA\u672C\u4FE1\u606F\u3001\u4EF7\u683C\u3001\u54C1\u724C\u3001\u5E93\u5B58\u72B6\u6001\u548C\u8BC4\u5206
2. **\u91CD\u70B9\u7A81\u51FA**\uFF1A\u80FD\u8BC6\u522B\u4EF7\u683C\u6298\u6263\u3001\u4EA7\u54C1\u63CF\u8FF0\u548C\u7279\u70B9\u7B49\u5173\u952E\u4FE1\u606F
3. **\u8BED\u4E49\u660E\u786E**\uFF1A\u6B63\u786E\u7406\u89E3\u5E93\u5B58\u72B6\u6001\u7684\u542B\u4E49\uFF0C\u4E0D\u4F1A\u4EA7\u751F\u6B67\u4E49
4. **\u4E0A\u4E0B\u6587\u5B8C\u6574**\uFF1A\u4E86\u89E3\u641C\u7D22\u7ED3\u679C\u7684\u5168\u8C8C\uFF08"\u627E\u5230128\u4E2A\u5339\u914D\u9879\uFF0C\u663E\u793A10\u4E2A"\uFF09

### 4.4 \u8C03\u4F18\u7B56\u7565\u603B\u7ED3
\u57FA\u4E8E\u4E0A\u8FF0\u6848\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u63D0\u70BC\u51FA\u4EE5\u4E0BMCP\u914D\u7F6E\u8C03\u4F18\u7B56\u7565\uFF1A

1. **\u8BC6\u522B\u5E76\u63D0\u53D6\u6838\u5FC3\u5B57\u6BB5**\uFF1A\u5206\u6790\u7528\u6237\u771F\u6B63\u9700\u8981\u7684\u4FE1\u606F\uFF0C\u53BB\u9664\u6280\u672F\u7EC6\u8282\u548C\u5185\u90E8\u6570\u636E
2. **\u8F6C\u6362\u4E13\u4E1A\u672F\u8BED**\uFF1A\u5C06\u6280\u672F\u4EE3\u7801\u548C\u4E13\u4E1A\u672F\u8BED\u8F6C\u6362\u4E3A\u8BA9LLM\u6613\u4E8E\u7406\u89E3\u7684\u63CF\u8FF0
3. **\u6DFB\u52A0\u4E0A\u4E0B\u6587\u4FE1\u606F**\uFF1A\u5E2E\u52A9LLM\u7406\u89E3\u6570\u636E\u7684\u5B8C\u6574\u6027\u548C\u8303\u56F4
4. **\u7ED3\u6784\u5316\u5173\u952E\u4FE1\u606F**\uFF1A\u4F7F\u7528\u5C42\u6B21\u7ED3\u6784\u8BA9\u4FE1\u606F\u7684\u91CD\u8981\u6027\u548C\u5173\u7CFB\u4E00\u76EE\u4E86\u7136

## 05 \u7ED3\u8BED
OpenAPI to MCP\u5DE5\u5177\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86\u5FEB\u901F\u5C06API\u8F6C\u6362\u4E3AAI\u5DE5\u5177\u7684\u80FD\u529B\uFF0C\u800C\u4EBA\u5DE5\u8C03\u4F18\u5219\u662F\u63D0\u5347AI\u7406\u89E3\u548C\u7528\u6237\u4F53\u9A8C\u7684\u5173\u952E\u4E00\u6B65\u3002\u901A\u8FC7\u7CBE\u5FC3\u8BBE\u8BA1\u7684\u54CD\u5E94\u6A21\u677F\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F15\u5BFCLLM\u66F4\u51C6\u786E\u5730\u7406\u89E3API\u8FD4\u56DE\u7684\u6570\u636E\uFF0C\u51CF\u5C11\u9519\u8BEF\u89E3\u8BFB\u548C\u5E7B\u89C9\uFF0C\u4ECE\u800C\u4E3A\u7528\u6237\u63D0\u4F9B\u66F4\u6709\u4EF7\u503C\u7684\u670D\u52A1\u3002

\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u5EFA\u8BAE\u5148\u4F7F\u7528OpenAPI to MCP\u5DE5\u5177\u751F\u6210\u57FA\u7840\u914D\u7F6E\uFF0C\u7136\u540E\u6839\u636EAPI\u7684\u590D\u6742\u6027\u548C\u7528\u6237\u9700\u6C42\uFF0C\u6709\u9488\u5BF9\u6027\u5730\u8FDB\u884C\u8C03\u4F18\u3002\u5BF9\u4E8E\u7B80\u5355API\uFF0C\u81EA\u52A8\u751F\u6210\u7684\u914D\u7F6E\u53EF\u80FD\u5DF2\u7ECF\u8DB3\u591F\uFF1B\u800C\u5BF9\u4E8E\u590D\u6742API\uFF0C\u7279\u522B\u662F\u8FD4\u56DE\u5927\u91CF\u5D4C\u5957\u6570\u636E\u7684API\uFF0C\u4EBA\u5DE5\u8C03\u4F18\u5C06\u5E26\u6765\u663E\u8457\u7684\u4F53\u9A8C\u63D0\u5347\u3002

\u9700\u8981\u5F3A\u8C03\u7684\u662F\uFF0C\u9AD8\u8D28\u91CF\u7684MCP\u914D\u7F6E\u8C03\u4F18\u5F80\u5F80\u9700\u8981\u4F9D\u8D56\u6570\u636E\u7684\u53CD\u9988\u548C\u8FED\u4EE3\u4F18\u5316\u3002\u5355\u4E00\u7684\u914D\u7F6E\u5F88\u96BE\u4E00\u6B21\u6027\u6EE1\u8DB3\u6240\u6709\u7528\u6237\u573A\u666F\uFF0C\u56E0\u6B64\u9700\u8981\u57FA\u4E8E\u591A\u914D\u7F6E\u7248\u672C\u7684\u7070\u5EA6\u6D4B\u8BD5\uFF0C\u6784\u5EFA\u8D77\u8BC4\u4F30\u53CD\u9988\u548C\u6301\u7EED\u4F18\u5316\u7684\u95ED\u73AF\u3002**Higress\u5C06\u7ED3\u5408Nacos\u914D\u7F6E\u4E2D\u5FC3\u7684\u5F3A\u5927\u80FD\u529B\uFF0C\u4E3AMCP\u670D\u52A1\u5668\u7684\u7EF4\u62A4\u8005\u63D0\u4F9B\u66F4\u7CBE\u7EC6\u7684\u914D\u7F6E\u7BA1\u7406\u529F\u80FD\uFF0C\u5305\u62EC\u7248\u672C\u63A7\u5236\u3001\u7070\u5EA6\u53D1\u5E03\u3001\u914D\u7F6E\u56DE\u6EDA\u548C\u6548\u679C\u5206\u6790\u7B49\uFF0C\u8BA9\u914D\u7F6E\u8C03\u4F18\u4E0D\u518D\u662F\u4E00\u6B21\u6027\u5DE5\u4F5C\uFF0C\u800C\u662F\u4E00\u4E2A\u6570\u636E\u9A71\u52A8\u7684\u6301\u7EED\u4F18\u5316\u8FC7\u7A0B\u3002**

\u901A\u8FC7"\u81EA\u52A8\u8F6C\u6362+\u4EBA\u5DE5\u8C03\u4F18+\u6570\u636E\u53CD\u9988"\u7684\u5B8C\u6574\u94FE\u8DEF\uFF0C\u6211\u4EEC\u65E2\u80FD\u4EAB\u53D7\u81EA\u52A8\u5316\u5E26\u6765\u7684\u6548\u7387\u63D0\u5347\uFF0C\u53C8\u80FD\u786E\u4FDDAI\u52A9\u624B\u63D0\u4F9B\u9AD8\u8D28\u91CF\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u540C\u65F6\u4E0D\u65AD\u6839\u636E\u5B9E\u9645\u4F7F\u7528\u6570\u636E\u4F18\u5316\u914D\u7F6E\uFF0C\u4F7FAI\u52A9\u624B\u7684\u80FD\u529B\u968F\u7740\u4F7F\u7528\u800C\u6301\u7EED\u8FDB\u5316\u3002





**\u9884\u544A\uFF1AHigress \u5C06\u4E8E\u4E0B\u5468\u4E0A\u7EBF\u56FD\u5185\u9996\u4E2A\u57FA\u4E8E API \u7F51\u5173\u7684 MCP Marketplace\uFF0C\u5305\u62EC 50 \u6B3E\u7CBE\u5FC3\u8C03\u4F18\u8FC7\u7684 MCP \u670D\u52A1\u3002**



<font style="color:rgb(33, 37, 41);">[1] </font>[https://github.com/higress-group/openapi-to-mcpserver](https://github.com/higress-group/openapi-to-mcpserver)

<font style="color:rgba(0, 0, 0, 0.85) !important;">[2] </font>[https://mp.weixin.qq.com/s/bgDd82lj0jBUWifLMNByjw](https://mp.weixin.qq.com/s/bgDd82lj0jBUWifLMNByjw)

<font style="color:rgba(0, 0, 0, 0.85) !important;">[3] </font>[https://higress.cn/en/ai/mcp-quick-start/#configuring-rest-api-mcp-server](https://higress.cn/en/ai/mcp-quick-start/#configuring-rest-api-mcp-server)

[4] [https://mp.weixin.qq.com/s/WYlqHm2YZSiRv4USUNUBgg](https://mp.weixin.qq.com/s/WYlqHm2YZSiRv4USUNUBgg)<font style="color:rgb(33, 37, 41);"> </font>


`},t=function(){return s},l=function(){return[{depth:2,slug:"01-openapi-\u7684\u76F8\u5173\u6982\u5FF5",text:"01 OpenAPI \u7684\u76F8\u5173\u6982\u5FF5"},{depth:2,slug:"02-\u5C06\u5B58\u91CF-openapi-\u8F6C\u5316\u4E3A-mcp-server-\u7684\u5E38\u89C4\u505A\u6CD5",text:"02 \u5C06\u5B58\u91CF OpenAPI \u8F6C\u5316\u4E3A MCP Server \u7684\u5E38\u89C4\u505A\u6CD5"},{depth:2,slug:"03-\u6279\u91CF\u8F6C\u5316-openapi-\u81F3-mcp-server",text:"03 \u6279\u91CF\u8F6C\u5316 OpenAPI \u81F3 MCP Server"},{depth:4,slug:"11-\u5B89\u88C5",text:"1.1 \u5B89\u88C5"},{depth:4,slug:"12-\u4F7F\u7528",text:"1.2 \u4F7F\u7528"},{depth:4,slug:"13-\u793A\u4F8B",text:"1.3 \u793A\u4F8B"},{depth:4,slug:"14-\u529F\u80FD",text:"1.4 \u529F\u80FD"},{depth:4,slug:"14-\u914D\u7F6E-mcp-server-\u63D2\u4EF6",text:"1.4 \u914D\u7F6E MCP Server \u63D2\u4EF6"},{depth:4,slug:"15-\u8C03\u7528-mcp-server",text:"1.5 \u8C03\u7528 MCP Server"},{depth:2,slug:"04-\u5BF9-mcp-server-\u8FDB\u884C\u914D\u7F6E\u8C03\u4F18",text:"04 \u5BF9 MCP Server \u8FDB\u884C\u914D\u7F6E\u8C03\u4F18"},{depth:3,slug:"41-\u4E3A\u4EC0\u4E48\u9700\u8981\u8C03\u4F18mcp\u914D\u7F6E",text:"4.1 \u4E3A\u4EC0\u4E48\u9700\u8981\u8C03\u4F18MCP\u914D\u7F6E\uFF1F"},{depth:3,slug:"42-\u8C03\u4F18\u6848\u4F8B\u7535\u5546\u4EA7\u54C1\u641C\u7D22api",text:"4.2 \u8C03\u4F18\u6848\u4F8B\uFF1A\u7535\u5546\u4EA7\u54C1\u641C\u7D22API"},{depth:4,slug:"421-\u81EA\u52A8\u751F\u6210\u7684\u57FA\u7840\u914D\u7F6E",text:"4.2.1 \u81EA\u52A8\u751F\u6210\u7684\u57FA\u7840\u914D\u7F6E"},{depth:4,slug:"422-\u4EBA\u5DE5\u8C03\u4F18\u540E\u7684\u914D\u7F6E",text:"4.2.2 \u4EBA\u5DE5\u8C03\u4F18\u540E\u7684\u914D\u7F6E"},{depth:3,slug:"43-\u8C03\u4F18\u5982\u4F55\u6539\u5584llm\u7406\u89E3",text:"4.3 \u8C03\u4F18\u5982\u4F55\u6539\u5584LLM\u7406\u89E3"},{depth:4,slug:"431-\u8C03\u4F18\u524Dllm\u7684\u7406\u89E3\u95EE\u9898",text:"4.3.1 \u8C03\u4F18\u524DLLM\u7684\u7406\u89E3\u95EE\u9898"},{depth:4,slug:"432-\u8C03\u4F18\u540Ellm\u7684\u7406\u89E3\u6539\u8FDB",text:"4.3.2 \u8C03\u4F18\u540ELLM\u7684\u7406\u89E3\u6539\u8FDB"},{depth:3,slug:"44-\u8C03\u4F18\u7B56\u7565\u603B\u7ED3",text:"4.4 \u8C03\u4F18\u7B56\u7565\u603B\u7ED3"},{depth:2,slug:"05-\u7ED3\u8BED",text:"05 \u7ED3\u8BED"}]},e=c((g,m,u)=>{const{layout:F,...p}=a;return p.file=n,p.url=i,r`${v()}${E(s)}`})});export{e as Content,x as __tla,t as compiledContent,e as default,n as file,a as frontmatter,l as getHeadings,d as rawContent,i as url};
