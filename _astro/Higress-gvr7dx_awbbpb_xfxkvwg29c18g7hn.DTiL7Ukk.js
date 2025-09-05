import{c,__tla as l}from"./astro-component.B3fYMMDi.js";import{r as o,m as v,u as y,__tla as u}from"./constant.Cgp6cJPa.js";import{__tla as E}from"./astro/assets-service.DmDXK_Mj.js";let s,i,a,t,d,p,r,h=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<p>Higress \u4F5C\u4E3A\u4E00\u6B3E\u5F3A\u5927\u7684 AI \u539F\u751F API \u7F51\u5173\uFF0C\u81F4\u529B\u4E8E\u94FA\u8BBE AI \u4E0E\u73B0\u5B9E\u4E16\u754C\u4E4B\u95F4\u6700\u77ED\u3001\u6700\u5B89\u5168\u3001\u6700\u5177\u6210\u672C\u6548\u76CA\u7684\u8FDE\u63A5\u8DEF\u5F84\u3002\u5176\u6838\u5FC3\u80FD\u529B\u4E4B\u4E00\u4FBF\u662F\u652F\u6301\u5C06\u73B0\u6709\u7684 OpenAPI \u89C4\u8303\u65E0\u7F1D\u8F6C\u6362\u4E3A MCP Server\uFF0C\u8BA9 AI \u80FD\u591F\u5FEB\u901F\u3001\u4FBF\u6377\u5730\u8C03\u7528\u5404\u7C7B\u5B58\u91CF API \u670D\u52A1\u3002\u501F\u52A9 Higress\uFF0C\u4F01\u4E1A\u548C\u5F00\u53D1\u8005\u53EF\u4EE5\u77AC\u95F4\u5C06\u5176\u5B9D\u8D35\u7684 API \u8D44\u4EA7\u8F6C\u5316\u4E3A AI \u53EF\u7528\u7684\u8FDC\u7A0B MCP Server\uFF0C\u4ECE\u800C\u6781\u5927\u5730\u52A0\u901F AI \u5E94\u7528\u7684\u843D\u5730\u548C\u521B\u65B0\u3002</p>
<p>\u5F53\u901A\u8FC7 Higress \u6258\u7BA1\u7684 MCP Server \u96C6\u6210 AI \u4E0E\u5916\u90E8\u670D\u52A1\u65F6\uFF0C\u901A\u5E38\u9700\u8981\u8003\u8651\u4E24\u4E2A\u4E3B\u8981\u7684\u8BA4\u8BC1\u9636\u6BB5\uFF1A</p>
<ol>
<li>
<p><strong>\u5BA2\u6237\u7AEF\u5230 MCP Server \u7684\u8BA4\u8BC1</strong>\uFF1A\u8FD9\u662F\u6307 MCP \u5BA2\u6237\u7AEF\uFF08\u4F8B\u5982 AI Agent\uFF09\u5BF9 Higress \u7F51\u5173\u4E0A\u6258\u7BA1 MCP Server \u7684\u7AEF\u70B9\u8FDB\u884C\u7684\u8BA4\u8BC1\u3002Higress \u4E3A\u6B64\u9636\u6BB5\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u7F51\u5173\u7EA7\u8BA4\u8BC1\u673A\u5236\uFF0C\u4F8B\u5982 Key Auth\u3001JWT Auth \u4EE5\u53CA OAuth2 \u652F\u6301\u3002\u8FD9\u4E9B\u73B0\u6709\u7684 Higress \u529F\u80FD\u786E\u4FDD\u53EA\u6709\u6388\u6743\u7684\u5BA2\u6237\u7AEF\u624D\u80FD\u8BBF\u95EE\u60A8\u7684 MCP Server\u3002</p>
</li>
<li>
<p><strong>MCP Server \u5230\u540E\u7AEF API \u7684\u8BA4\u8BC1</strong>\uFF1A\u4E00\u65E6\u6388\u6743\u5BA2\u6237\u7AEF\u8C03\u7528\u67D0\u4E2A MCP \u5DE5\u5177\uFF0CMCP Server \u63D2\u4EF6\u672C\u8EAB\u53EF\u80FD\u9700\u8981\u5411\u8BE5\u5DE5\u5177\u6240\u4EE3\u7406\u7684\u6700\u7EC8\u540E\u7AEF REST API \u8FDB\u884C\u8BA4\u8BC1\u3002</p>
</li>
</ol>
<p>\u672C\u6B21\u53D1\u5E03\u805A\u7126\u4E8E\u5BF9<strong>\u7B2C\u4E8C\u9636\u6BB5</strong>\u7684\u91CD\u5927\u589E\u5F3A\uFF1A\u5728 Higress MCP Server \u63D2\u4EF6\u5185\u90E8\u4E3A\u5176\u4E0E\u540E\u7AEF REST API \u7684\u901A\u4FE1\u63D0\u4F9B\u5168\u9762\u7684 API \u8BA4\u8BC1\u80FD\u529B\u3002\u6B64\u66F4\u65B0\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u901A\u8FC7\u5728 MCP Server \u63D2\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u5E76\u9075\u5FAA OpenAPI \u6807\u51C6\uFF0C\u4EE5\u7075\u6D3B\u4E14\u5065\u58EE\u7684\u673A\u5236\u7BA1\u7406\u51ED\u8BC1\u548C\u8BA4\u8BC1\u6D41\u7A0B\uFF0C\u4ECE\u800C\u5B89\u5168\u5730\u96C6\u6210\u66F4\u5E7F\u6CDB\u7684\u540E\u7AEF\u670D\u52A1\u3002</p>
<p>\u4E0B\u56FE\u9610\u91CA\u4E86\u8FD9\u4E24\u4E2A\u8BA4\u8BC1\u9636\u6BB5\uFF1A</p>
<p><img src="https://img.alicdn.com/imgextra/i4/O1CN01wxaByb1wVPQ7HmLsS_!!6000000006313-2-tps-1043-544.png" alt="Description" referrerpolicy="no-referrer"></p>
<h2 id="\u672C\u6B21\u65B0\u589E\u6838\u5FC3\u8BA4\u8BC1\u529F\u80FD\u6982\u89C8-\u9488\u5BF9-mcp-server-\u5230\u540E\u7AEF-api">\u672C\u6B21\u65B0\u589E\u6838\u5FC3\u8BA4\u8BC1\u529F\u80FD\u6982\u89C8 (\u9488\u5BF9 MCP Server \u5230\u540E\u7AEF API)</h2>
<p>\u6B64\u7248\u672C\u5F15\u5165\u4E86\u591A\u9879\u6838\u5FC3\u529F\u80FD\u6765\u7BA1\u7406 API \u8BA4\u8BC1\uFF1A</p>
<ol>
<li><strong>\u53EF\u91CD\u7528\u8BA4\u8BC1\u65B9\u6848</strong>\uFF1A\u5728\u670D\u52A1\u5668\u5C42\u9762\u5B9A\u4E49\u901A\u7528\u7684\u8BA4\u8BC1\u65B9\u6CD5\uFF08HTTP Basic\u3001HTTP Bearer\u3001API Key\uFF09\u3002</li>
<li><strong>\u5DE5\u5177\u7279\u5B9A\u7684\u540E\u7AEF\u8BA4\u8BC1</strong>\uFF1A\u5C06\u5DF2\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u5E94\u7528\u4E8E\u5355\u4E2A\u5DE5\u5177\uFF0C\u6307\u5B9A MCP Server \u5728\u8C03\u7528\u540E\u7AEF REST API \u65F6\u5E94\u5982\u4F55\u8FDB\u884C\u81EA\u6211\u8BA4\u8BC1\u3002</li>
<li><strong>\u900F\u660E\u51ED\u8BC1\u900F\u4F20</strong>\uFF1A\u5141\u8BB8 MCP \u5BA2\u6237\u7AEF\uFF08\u4F8B\u5982 AI \u52A9\u624B\uFF09\u63D0\u4F9B\u7684\u51ED\u8BC1\u5B89\u5168\u5730\u900F\u4F20\u81F3\u540E\u7AEF API\u3002</li>
<li><strong>\u7075\u6D3B\u7684\u51ED\u8BC1\u7BA1\u7406</strong>\uFF1A\u652F\u6301\u5728\u65B9\u6848\u7EA7\u522B\u8BBE\u7F6E\u9ED8\u8BA4\u51ED\u8BC1\uFF0C\u5E76\u5141\u8BB8\u4E3A\u7279\u5B9A\u5DE5\u5177\u8986\u76D6\u8FD9\u4E9B\u9ED8\u8BA4\u51ED\u8BC1\u3002</li>
</ol>
<p>\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u6DF1\u5165\u4E86\u89E3\u5982\u4F55\u5229\u7528\u8FD9\u4E9B\u529F\u80FD\u3002</p>
<h2 id="\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848-serversecurityschemes">\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848 (<code dir="auto">server.securitySchemes</code>)</h2>
<p>\u60A8\u73B0\u5728\u53EF\u4EE5\u5728 MCP Server \u914D\u7F6E\u7684 <code dir="auto">server</code> \u5C42\u7EA7\u5B9A\u4E49\u4E00\u7EC4 <code dir="auto">securitySchemes</code>\u3002\u8FD9\u79CD\u65B9\u5F0F\u4E0E OpenAPI \u89C4\u8303 (OAS3) \u4E2D\u5B9A\u4E49\u5B89\u5168\u8981\u6C42\u7684\u65B9\u6CD5\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F7F\u5176\u6613\u4E8E\u7406\u89E3\u548C\u6807\u51C6\u5316\u3002\u6BCF\u4E2A\u65B9\u6848\u4EE3\u8868\u60A8\u7684\u540E\u7AEF API \u53EF\u80FD\u4F7F\u7528\u7684\u4E00\u79CD\u7279\u5B9A\u8BA4\u8BC1\u65B9\u6CD5\u3002</p>
<p>\u76EE\u524D\uFF0CHigress MCP Server \u63D2\u4EF6\u652F\u6301\u4EE5\u4E0B\u65B9\u6848\u7C7B\u578B\uFF1A</p>
<ul>
<li><code dir="auto">http</code> \u914D\u5408 <code dir="auto">scheme: basic</code> (HTTP Basic \u8BA4\u8BC1)</li>
<li><code dir="auto">http</code> \u914D\u5408 <code dir="auto">scheme: bearer</code> (HTTP Bearer \u4EE4\u724C\u8BA4\u8BC1)</li>
<li><code dir="auto">apiKey</code> \u914D\u5408 <code dir="auto">in: header</code> \u6216 <code dir="auto">in: query</code> (\u4F4D\u4E8E Header \u6216\u67E5\u8BE2\u53C2\u6570\u4E2D\u7684 API Key)</li>
</ul>
<p>\u6211\u4EEC\u8BA1\u5212\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u589E\u52A0\u5BF9 <code dir="auto">oauth2</code> \u548C <code dir="auto">openIdConnect</code> (OIDC) \u65B9\u6848\u7684\u652F\u6301\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u6269\u5C55\u60A8\u53EF\u4EE5\u5B89\u5168\u96C6\u6210\u7684 API \u8303\u56F4\u3002</p>
<p><strong><code dir="auto">securitySchemes</code> \u914D\u7F6E\u5B57\u6BB5</strong>:</p>








































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">id</code></td><td>string</td><td>\u6B64\u8BA4\u8BC1\u65B9\u6848\u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002</td></tr><tr><td><code dir="auto">type</code></td><td>string</td><td>\u8BA4\u8BC1\u65B9\u6848\u7684\u7C7B\u578B (\u4F8B\u5982, <code dir="auto">http</code>, <code dir="auto">apiKey</code>)\u3002</td></tr><tr><td><code dir="auto">scheme</code></td><td>string</td><td>\u5BF9\u4E8E <code dir="auto">type: http</code>\uFF0C\u6307\u5B9A\u5177\u4F53\u65B9\u6848 (\u4F8B\u5982, <code dir="auto">basic</code>, <code dir="auto">bearer</code>)\u3002</td></tr><tr><td><code dir="auto">in</code></td><td>string</td><td>\u5BF9\u4E8E <code dir="auto">type: apiKey</code>\uFF0C\u6307\u5B9A API Key \u7684\u4F4D\u7F6E (\u4F8B\u5982, <code dir="auto">header</code>, <code dir="auto">query</code>)\u3002</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>\u5BF9\u4E8E <code dir="auto">type: apiKey</code>\uFF0C\u6307\u5B9A Header \u6216\u67E5\u8BE2\u53C2\u6570\u7684\u540D\u79F0\u3002</td></tr><tr><td><code dir="auto">defaultCredential</code></td><td>string</td><td>\u6B64\u65B9\u6848\u4F7F\u7528\u7684\u9ED8\u8BA4\u51ED\u8BC1 (\u4F8B\u5982, Basic \u8BA4\u8BC1\u7684 \u201Cuser:pass
\u201D\uFF0CBearer \u4EE4\u724C\u7684 token \u503C\uFF0CAPI Key \u7684\u5BC6\u94A5\u672C\u8EAB)\u3002</td></tr></tbody></table>
<p><strong>\u793A\u4F8B</strong>:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">my-secure-api-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">backendBasicAuth</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">basic</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"service_user:p@$$wOrd"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">backendBearerToken</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your_static_bearer_token_for_backend"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">backendApiKeyHeader</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">in</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-Internal-ApiKey</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">defaultCredential</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"secret_backend_api_key"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: my-secure-api-server\x7F  securitySchemes:\x7F    - id: backendBasicAuth\x7F      type: http\x7F      scheme: basic\x7F      defaultCredential: &#x22;service_user:p@$$wOrd&#x22;\x7F    - id: backendBearerToken\x7F      type: http\x7F      scheme: bearer\x7F      defaultCredential: &#x22;your_static_bearer_token_for_backend&#x22;\x7F    - id: backendApiKeyHeader\x7F      type: apiKey\x7F      in: header\x7F      name: X-Internal-ApiKey\x7F      defaultCredential: &#x22;secret_backend_api_key&#x22;"><div></div></button></div></figure></div>
<h2 id="\u4E3A\u540E\u7AEF-api-\u8C03\u7528\u5E94\u7528\u8BA4\u8BC1-requesttemplatesecurity">\u4E3A\u540E\u7AEF API \u8C03\u7528\u5E94\u7528\u8BA4\u8BC1 (<code dir="auto">requestTemplate.security</code>)</h2>
<p>\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848\u540E\uFF0C\u60A8\u53EF\u4EE5\u5C06\u5176\u5E94\u7528\u4E8E MCP Server \u5411\u540E\u7AEF REST API \u53D1\u51FA\u7684\u8BF7\u6C42\u3002\u8FD9\u5728\u6BCF\u4E2A\u5DE5\u5177\u7684 <code dir="auto">requestTemplate</code> \u4E2D\u8FDB\u884C\u914D\u7F6E\uFF1A</p>
<ul>
<li><code dir="auto">requestTemplate.security.id</code>: \u5F15\u7528\u5728 <code dir="auto">server.securitySchemes</code> \u4E2D\u5B9A\u4E49\u7684\u65B9\u6848\u7684 <code dir="auto">id</code>\u3002</li>
<li><code dir="auto">requestTemplate.security.credential</code>: (\u53EF\u9009) \u5141\u8BB8\u60A8\u4E3A\u6B64\u7279\u5B9A\u5DE5\u5177\u7684\u540E\u7AEF\u8C03\u7528\u8986\u76D6\u65B9\u6848\u4E2D\u7684 <code dir="auto">defaultCredential</code>\u3002</li>
</ul>
<p><strong>\u793A\u4F8B</strong>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">fetch-sensitive-data</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4ECE\u9700\u8981 Bearer \u4EE4\u724C\u7684\u540E\u7AEF\u670D\u52A1\u83B7\u53D6\u654F\u611F\u6570\u636E\u3002"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># ...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.internal.com/data"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">backendBearerToken</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u4F7F\u7528 'backendBearerToken' \u65B9\u6848</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6"># credential: "override_token_for_this_tool_if_needed" # \u5982\u679C\u9700\u8981\uFF0C\u53EF\u4E3A\u6B64\u5DE5\u5177\u8986\u76D6\u4EE4\u724C</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="tools:\x7F  - name: fetch-sensitive-data\x7F    description: &#x22;\u4ECE\u9700\u8981 Bearer \u4EE4\u724C\u7684\u540E\u7AEF\u670D\u52A1\u83B7\u53D6\u654F\u611F\u6570\u636E\u3002&#x22;\x7F    args: # ...\x7F    requestTemplate:\x7F      url: &#x22;https://api.internal.com/data&#x22;\x7F      method: GET\x7F      security:\x7F        id: backendBearerToken # \u4F7F\u7528 &#x27;backendBearerToken&#x27; \u65B9\u6848\x7F        # credential: &#x22;override_token_for_this_tool_if_needed&#x22; # \u5982\u679C\u9700\u8981\uFF0C\u53EF\u4E3A\u6B64\u5DE5\u5177\u8986\u76D6\u4EE4\u724C"><div></div></button></div></figure></div>
<h2 id="\u900F\u660E\u51ED\u8BC1\u900F\u4F20">\u900F\u660E\u51ED\u8BC1\u900F\u4F20</h2>
<p>\u6700\u5F3A\u5927\u7684\u65B0\u589E\u529F\u80FD\u4E4B\u4E00\u662F\u80FD\u591F\u5C06\u6765\u81EA\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF08\u4F8B\u5982\uFF0C\u4ECE AI Agent \u5230 MCP Server\uFF09\u7684\u51ED\u8BC1\u900F\u660E\u5730\u4F20\u9012\u5230\u540E\u7AEF API \u8C03\u7528\uFF08MCP Server \u5230\u5B9E\u9645\u7684 REST API\uFF09\u3002\u5F53\u540E\u7AEF API \u9700\u8981 AI \u5BA2\u6237\u7AEF\u62E5\u6709\u7684\u7528\u6237\u7279\u5B9A\u8BA4\u8BC1\u65F6\uFF0C\u6B64\u529F\u80FD\u975E\u5E38\u5B9D\u8D35\u3002</p>
<p><strong>\u5DE5\u4F5C\u539F\u7406</strong>:</p>
<ol>
<li><strong>\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u65B9\u6848\u5B9A\u4E49</strong>\uFF1AMCP Server \u9700\u8981\u77E5\u9053\u5BA2\u6237\u7AEF\u5982\u4F55\u8FDB\u884C\u81EA\u6211\u8BA4\u8BC1\u3002\u8FD9\u4E5F\u901A\u8FC7 <code dir="auto">server.securitySchemes</code> \u4E2D\u7684\u4E00\u4E2A\u65B9\u6848\u6765\u5B9A\u4E49\u3002</li>
<li><strong>\u5DE5\u5177\u7EA7\u5B89\u5168\u914D\u7F6E (<code dir="auto">tools[].security</code>)</strong>:
<ul>
<li><code dir="auto">id</code>: \u5F15\u7528<em>\u5BA2\u6237\u7AEF</em>\u5728\u8C03\u7528\u6B64 MCP \u5DE5\u5177\u65F6\u5E94\u4F7F\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\u3002MCP Server \u5C06\u4F7F\u7528\u6B64\u65B9\u6848\u6765\u63D0\u53D6\u5BA2\u6237\u7AEF\u7684\u51ED\u8BC1\u3002</li>
<li><code dir="auto">passthrough: true</code>: \u6B64\u6807\u5FD7\u542F\u7528\u900F\u4F20\u673A\u5236\u3002</li>
</ul>
</li>
<li><strong>\u540E\u7AEF\u8BA4\u8BC1</strong>: \u5982\u4E0A\u6240\u8FF0\u7684 <code dir="auto">requestTemplate.security</code> \u5B9A\u4E49\u4E86<em>\u900F\u4F20\u51ED\u8BC1</em>\u5C06\u5982\u4F55\u5E94\u7528\u4E8E\u540E\u7AEF API \u8C03\u7528\u3002</li>
</ol>
<p><strong>\u793A\u4F8B</strong>:</p>
<p>\u5047\u8BBE\u4E00\u4E2A AI \u5BA2\u6237\u7AEF\u4F7F\u7528\u7528\u6237\u7279\u5B9A\u7684 JWT Bearer \u4EE4\u724C\u8C03\u7528\u60A8\u7684 MCP \u5DE5\u5177\u3002\u60A8\u5E0C\u671B\u4F7F\u7528\u76F8\u540C\u7684\u4EE4\u724C\u8C03\u7528\u540E\u7AEF\u670D\u52A1\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user-data-passthrough-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">securitySchemes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">clientUserBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u5BA2\u6237\u7AEF\u4F20\u5165 Bearer \u4EE4\u724C\u7684\u65B9\u6848</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">backendServiceBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u540E\u7AEF API \u7684\u65B9\u6848 (\u4E5F\u662F Bearer, \u4F46\u53EF\u4EE5\u4E0D\u540C)</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">http</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">scheme</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u5982\u679C\u603B\u662F\u4F9D\u8D56\u900F\u4F20\uFF0C\u5219\u6B64\u5904\u65E0\u9700 defaultCredential</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">tools</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">get-user-profile</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u4F7F\u7528\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u4EE4\u724C\u83B7\u53D6\u7528\u6237\u4E2A\u4EBA\u8D44\u6599\u3002"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># \u5BA2\u6237\u7AEF\u5982\u4F55\u5411\u6B64 MCP \u5DE5\u5177\u8FDB\u884C\u8BA4\u8BC1\u7684\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">clientUserBearer</span><span style="--0:#E1E4E8">   </span><span style="--0:#99A0A6"># MCP Server \u671F\u671B\u5BA2\u6237\u7AEF\u4F7F\u7528 Bearer \u4EE4\u724C</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">passthrough</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">     </span><span style="--0:#99A0A6"># \u542F\u7528\u900F\u4F20</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">args</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># ...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">requestTemplate</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.user-profiles.com/me"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">method</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">GET</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">security</span><span style="--0:#E1E4E8">: </span><span style="--0:#99A0A6"># MCP Server \u5982\u4F55\u5411\u540E\u7AEF API \u8FDB\u884C\u8BA4\u8BC1\u7684\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">backendServiceBearer</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u900F\u4F20\u7684\u4EE4\u724C\u5C06\u4F5C\u4E3A Bearer \u4EE4\u724C\u53D1\u9001\u5230\u540E\u7AEF\u3002</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  name: user-data-passthrough-server\x7F  securitySchemes:\x7F    - id: clientUserBearer # \u5BA2\u6237\u7AEF\u4F20\u5165 Bearer \u4EE4\u724C\u7684\u65B9\u6848\x7F      type: http\x7F      scheme: bearer\x7F    - id: backendServiceBearer # \u540E\u7AEF API \u7684\u65B9\u6848 (\u4E5F\u662F Bearer, \u4F46\u53EF\u4EE5\u4E0D\u540C)\x7F      type: http\x7F      scheme: bearer\x7F      # \u5982\u679C\u603B\u662F\u4F9D\u8D56\u900F\u4F20\uFF0C\u5219\u6B64\u5904\u65E0\u9700 defaultCredential\x7F\x7Ftools:\x7F  - name: get-user-profile\x7F    description: &#x22;\u4F7F\u7528\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u4EE4\u724C\u83B7\u53D6\u7528\u6237\u4E2A\u4EBA\u8D44\u6599\u3002&#x22;\x7F    security: # \u5BA2\u6237\u7AEF\u5982\u4F55\u5411\u6B64 MCP \u5DE5\u5177\u8FDB\u884C\u8BA4\u8BC1\u7684\u914D\u7F6E\x7F      id: clientUserBearer   # MCP Server \u671F\u671B\u5BA2\u6237\u7AEF\u4F7F\u7528 Bearer \u4EE4\u724C\x7F      passthrough: true     # \u542F\u7528\u900F\u4F20\x7F    args: # ...\x7F    requestTemplate:\x7F      url: &#x22;https://api.user-profiles.com/me&#x22;\x7F      method: GET\x7F      security: # MCP Server \u5982\u4F55\u5411\u540E\u7AEF API \u8FDB\u884C\u8BA4\u8BC1\u7684\u914D\u7F6E\x7F        id: backendServiceBearer # \u900F\u4F20\u7684\u4EE4\u724C\u5C06\u4F5C\u4E3A Bearer \u4EE4\u724C\u53D1\u9001\u5230\u540E\u7AEF\u3002"><div></div></button></div></figure></div>
<p><strong>\u5DE5\u4F5C\u6D41\u7A0B</strong>:</p>
<ol>
<li>AI \u5BA2\u6237\u7AEF\u8C03\u7528 <code dir="auto">get-user-profile</code> \u5DE5\u5177\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A <code dir="auto">Authorization: Bearer &#x3C;user_jwt_token></code> \u8BF7\u6C42\u5934\u3002</li>
<li>Higress MCP Server \u6839\u636E <code dir="auto">tools[].security.id: clientUserBearer</code> \u63D0\u53D6 <code dir="auto">&#x3C;user_jwt_token></code>\u3002\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u539F\u59CB <code dir="auto">Authorization</code> \u8BF7\u6C42\u5934\u88AB\u79FB\u9664\u3002</li>
<li>\u7531\u4E8E\u8BBE\u7F6E\u4E86 <code dir="auto">passthrough: true</code>\uFF0C<code dir="auto">&#x3C;user_jwt_token></code> \u88AB\u6307\u5B9A\u4E3A\u7528\u4E8E\u540E\u7AEF\u8C03\u7528\u7684\u51ED\u8BC1\u3002</li>
<li>\u7136\u540E\uFF0CMCP Server \u4F7F\u7528 <code dir="auto">requestTemplate.security.id: backendServiceBearer</code> \u4E2D\u5B9A\u4E49\u7684\u65B9\u6848\u6765\u683C\u5F0F\u5316\u6B64 <code dir="auto">&#x3C;user_jwt_token></code> \u5E76\u5C06\u5176\u53D1\u9001\u5230 <code dir="auto">https://api.user-profiles.com/me</code> \u7AEF\u70B9 (\u5373\uFF0C\u5B83\u53D1\u9001 <code dir="auto">Authorization: Bearer &#x3C;user_jwt_token></code>)\u3002</li>
</ol>
<p><strong>\u5173\u4E8E\u900F\u4F20\u7684\u91CD\u8981\u8BF4\u660E</strong>:</p>
<ul>
<li>\u5F53 <code dir="auto">passthrough: true</code> \u65F6\uFF0C<code dir="auto">requestTemplate.security.credential</code> \u4E2D\u6307\u5B9A\u7684\u4EFB\u4F55 <code dir="auto">credential</code> \u90FD\u5C06\u88AB\u5FFD\u7565\u3002</li>
<li>MCP Server \u4F1A\u667A\u80FD\u5730\u4ECE\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E2D\u63D0\u53D6\u6838\u5FC3\u51ED\u8BC1\u90E8\u5206\uFF08\u4F8B\u5982\uFF0C\u4ECE \u201CBearer token\u201D \u4E2D\u63D0\u53D6 token\uFF0C\u4ECE \u201CBasic base64value\u201D \u4E2D\u63D0\u53D6 base64 \u90E8\u5206\uFF09\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u900F\u4F20\u3002</li>
</ul>
<h2 id="\u5E26\u6765\u7684\u76CA\u5904">\u5E26\u6765\u7684\u76CA\u5904</h2>
<p>\u8FD9\u4E9B\u65B0\u7684\u8BA4\u8BC1\u529F\u80FD\u63D0\u4F9B\u4E86\uFF1A</p>
<ul>
<li><strong>\u589E\u5F3A\u7684\u5B89\u5168\u6027</strong>\uFF1A\u59A5\u5584\u4FDD\u62A4\u4E0E\u540E\u7AEF\u670D\u52A1\u7684\u4EA4\u4E92\u3002</li>
<li><strong>\u66F4\u9AD8\u7684\u7075\u6D3B\u6027</strong>\uFF1A\u652F\u6301\u5404\u79CD\u5E38\u89C1\u7684\u8BA4\u8BC1\u6A21\u5F0F\u3002</li>
<li><strong>\u7B80\u5316\u7684\u96C6\u6210</strong>\uFF1A\u66F4\u5BB9\u6613\u4E0E\u5177\u6709\u4E0D\u540C\u5B89\u5168\u8981\u6C42\u7684 API \u96C6\u6210\u3002</li>
<li><strong>\u65E0\u7F1D\u7684\u7528\u6237\u4E0A\u4E0B\u6587\u4F20\u64AD</strong>\uFF1A\u900F\u660E\u5730\u4F7F\u7528\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u51ED\u8BC1\u8FDB\u884C\u540E\u7AEF\u8C03\u7528\uFF0C\u5B9E\u73B0\u4E2A\u6027\u5316\u7684 API \u4EA4\u4E92\u3002</li>
</ul>
<p>\u6211\u4EEC\u76F8\u4FE1\u8FD9\u4E9B\u589E\u5F3A\u529F\u80FD\u5C06\u663E\u8457\u6539\u5584\u4F7F\u7528 Higress \u548C MCP Server \u6784\u5EFA\u7684 AI \u9A71\u52A8\u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u5168\u72B6\u51B5\u548C\u96C6\u6210\u80FD\u529B\u3002</p>
<h2 id="\u901A\u8FC7-openapi-to-mcp-\u7B80\u5316\u914D\u7F6E">\u901A\u8FC7 <code dir="auto">openapi-to-mcp</code> \u7B80\u5316\u914D\u7F6E</h2>
<p>\u4E3A\u4E86\u8FDB\u4E00\u6B65\u7B80\u5316\u914D\u7F6E\u8FC7\u7A0B\uFF0C\u6700\u65B0\u7248\u672C\u7684 <code dir="auto">openapi-to-mcp</code> \u5DE5\u5177\uFF08\u9879\u76EE\u5730\u5740\uFF1A<a href="https://github.com/higress-group/openapi-to-mcpserver" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GitHub</a>\uFF09\u73B0\u5DF2\u652F\u6301\u5C06\u5305\u542B <code dir="auto">securitySchemes</code> \u5B9A\u4E49\u7684 OpenAPI \u6587\u6863\u76F4\u63A5\u8F6C\u6362\u4E3A\u6B64 MCP Server \u63D2\u4EF6\u914D\u7F6E\u3002\u5982\u679C\u60A8\u7684 OpenAPI \u89C4\u8303\u5DF2\u7ECF\u63CF\u8FF0\u4E86\u5176\u5B89\u5168\u8981\u6C42\uFF0C\u8BE5\u5DE5\u5177\u53EF\u4EE5\u751F\u6210\u76F8\u5E94\u7684 <code dir="auto">server.securitySchemes</code> \u5E76\u5C06\u5176\u94FE\u63A5\u5230\u5408\u9002\u7684\u5DE5\u5177\uFF0C\u4ECE\u800C\u663E\u8457\u51CF\u5C11\u624B\u52A8\u914D\u7F6E\u7684\u5DE5\u4F5C\u91CF\u3002</p>
<h2 id="\u5F00\u59CB\u4F7F\u7528">\u5F00\u59CB\u4F7F\u7528</h2>
<p>\u5982\u679C\u60A8\u4F7F\u7528\u5F00\u6E90\u7248 Higress \u8BF7\u66F4\u65B0\u60A8\u7684 Higress MCP Server \u63D2\u4EF6\uFF0C\u5E76\u53C2\u9605 <a href="https://higress.cn/ai/mcp-server" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">MCP Server README \u6587\u6863</a> \u83B7\u53D6\u8BE6\u7EC6\u7684\u914D\u7F6E\u8BF4\u660E\u548C\u66F4\u591A\u793A\u4F8B\u3002</p>
<p>\u5982\u679C\u60A8\u4F7F\u7528\u4F01\u4E1A\u7248 Higress\uFF08\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF09\uFF0C\u8BF7\u53C2\u8003\u6211\u4EEC\u7684<a href="https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/mcp-services-management" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4F01\u4E1A\u7248\u4EA7\u54C1\u6587\u6863</a>\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u66F4\u6613\u7528\u7684\u4EA7\u54C1\u5316\u5C01\u88C5\uFF0C\u5E76\u63D0\u4F9B\u5168\u6258\u7BA1\u514D\u8FD0\u7EF4\u7684\u670D\u52A1\uFF0C\u4EE5\u53CA99.99%\u7684SLA\u53EF\u7528\u6027\u4FDD\u969C:
<img src="https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1747386241050-bb0333e2-7ecb-4f7f-b56a-a728547dd875.png" alt="undefined" referrerpolicy="no-referrer"></p>
<p>\u6211\u4EEC\u81F4\u529B\u4E8E\u5C06 Higress \u6253\u9020\u6210\u4E00\u4E2A\u5F3A\u5927\u4E14\u5F00\u53D1\u8005\u53CB\u597D\u7684 AI \u539F\u751F API \u7F51\u5173\uFF0C\u80FD\u591F\u5BF9\u63A5 LLM API\u3001MCP API \u548C Agent API\u3002\u656C\u8BF7\u671F\u5F85\u66F4\u591A\u66F4\u65B0\uFF01</p>`,t={title:"Higress MCP Server \u5B89\u5168\u518D\u5347\u7EA7\uFF1AAPI \u8BA4\u8BC1\u4E3A AI \u8FDE\u63A5\u4FDD\u9A7E\u62A4\u822A",description:"Higress MCP Server \u5B89\u5168\u518D\u5347\u7EA7\uFF1AAPI \u8BA4\u8BC1\u4E3A AI \u8FDE\u63A5\u4FDD\u9A7E\u62A4\u822A",date:"2025-05-15",category:"article",keywords:["Higress"],authors:"CH3CHO"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_xfxkvwg29c18g7hn.md",r=void 0,p=function(){return`
# Higress MCP Server \u5B89\u5168\u518D\u5347\u7EA7\uFF1AAPI \u8BA4\u8BC1\u4E3A AI \u8FDE\u63A5\u4FDD\u9A7E\u62A4\u822A

Higress \u4F5C\u4E3A\u4E00\u6B3E\u5F3A\u5927\u7684 AI \u539F\u751F API \u7F51\u5173\uFF0C\u81F4\u529B\u4E8E\u94FA\u8BBE AI \u4E0E\u73B0\u5B9E\u4E16\u754C\u4E4B\u95F4\u6700\u77ED\u3001\u6700\u5B89\u5168\u3001\u6700\u5177\u6210\u672C\u6548\u76CA\u7684\u8FDE\u63A5\u8DEF\u5F84\u3002\u5176\u6838\u5FC3\u80FD\u529B\u4E4B\u4E00\u4FBF\u662F\u652F\u6301\u5C06\u73B0\u6709\u7684 OpenAPI \u89C4\u8303\u65E0\u7F1D\u8F6C\u6362\u4E3A MCP Server\uFF0C\u8BA9 AI \u80FD\u591F\u5FEB\u901F\u3001\u4FBF\u6377\u5730\u8C03\u7528\u5404\u7C7B\u5B58\u91CF API \u670D\u52A1\u3002\u501F\u52A9 Higress\uFF0C\u4F01\u4E1A\u548C\u5F00\u53D1\u8005\u53EF\u4EE5\u77AC\u95F4\u5C06\u5176\u5B9D\u8D35\u7684 API \u8D44\u4EA7\u8F6C\u5316\u4E3A AI \u53EF\u7528\u7684\u8FDC\u7A0B MCP Server\uFF0C\u4ECE\u800C\u6781\u5927\u5730\u52A0\u901F AI \u5E94\u7528\u7684\u843D\u5730\u548C\u521B\u65B0\u3002

\u5F53\u901A\u8FC7 Higress \u6258\u7BA1\u7684 MCP Server \u96C6\u6210 AI \u4E0E\u5916\u90E8\u670D\u52A1\u65F6\uFF0C\u901A\u5E38\u9700\u8981\u8003\u8651\u4E24\u4E2A\u4E3B\u8981\u7684\u8BA4\u8BC1\u9636\u6BB5\uFF1A

1.  **\u5BA2\u6237\u7AEF\u5230 MCP Server \u7684\u8BA4\u8BC1**\uFF1A\u8FD9\u662F\u6307 MCP \u5BA2\u6237\u7AEF\uFF08\u4F8B\u5982 AI Agent\uFF09\u5BF9 Higress \u7F51\u5173\u4E0A\u6258\u7BA1 MCP Server \u7684\u7AEF\u70B9\u8FDB\u884C\u7684\u8BA4\u8BC1\u3002Higress \u4E3A\u6B64\u9636\u6BB5\u63D0\u4F9B\u4E86\u5F3A\u5927\u7684\u7F51\u5173\u7EA7\u8BA4\u8BC1\u673A\u5236\uFF0C\u4F8B\u5982 Key Auth\u3001JWT Auth \u4EE5\u53CA OAuth2 \u652F\u6301\u3002\u8FD9\u4E9B\u73B0\u6709\u7684 Higress \u529F\u80FD\u786E\u4FDD\u53EA\u6709\u6388\u6743\u7684\u5BA2\u6237\u7AEF\u624D\u80FD\u8BBF\u95EE\u60A8\u7684 MCP Server\u3002

2.  **MCP Server \u5230\u540E\u7AEF API \u7684\u8BA4\u8BC1**\uFF1A\u4E00\u65E6\u6388\u6743\u5BA2\u6237\u7AEF\u8C03\u7528\u67D0\u4E2A MCP \u5DE5\u5177\uFF0CMCP Server \u63D2\u4EF6\u672C\u8EAB\u53EF\u80FD\u9700\u8981\u5411\u8BE5\u5DE5\u5177\u6240\u4EE3\u7406\u7684\u6700\u7EC8\u540E\u7AEF REST API \u8FDB\u884C\u8BA4\u8BC1\u3002

\u672C\u6B21\u53D1\u5E03\u805A\u7126\u4E8E\u5BF9**\u7B2C\u4E8C\u9636\u6BB5**\u7684\u91CD\u5927\u589E\u5F3A\uFF1A\u5728 Higress MCP Server \u63D2\u4EF6\u5185\u90E8\u4E3A\u5176\u4E0E\u540E\u7AEF REST API \u7684\u901A\u4FE1\u63D0\u4F9B\u5168\u9762\u7684 API \u8BA4\u8BC1\u80FD\u529B\u3002\u6B64\u66F4\u65B0\u4F7F\u5F00\u53D1\u8005\u80FD\u591F\u901A\u8FC7\u5728 MCP Server \u63D2\u4EF6\u4E2D\u8FDB\u884C\u914D\u7F6E\uFF0C\u5E76\u9075\u5FAA OpenAPI \u6807\u51C6\uFF0C\u4EE5\u7075\u6D3B\u4E14\u5065\u58EE\u7684\u673A\u5236\u7BA1\u7406\u51ED\u8BC1\u548C\u8BA4\u8BC1\u6D41\u7A0B\uFF0C\u4ECE\u800C\u5B89\u5168\u5730\u96C6\u6210\u66F4\u5E7F\u6CDB\u7684\u540E\u7AEF\u670D\u52A1\u3002

\u4E0B\u56FE\u9610\u91CA\u4E86\u8FD9\u4E24\u4E2A\u8BA4\u8BC1\u9636\u6BB5\uFF1A

![Description](https://img.alicdn.com/imgextra/i4/O1CN01wxaByb1wVPQ7HmLsS_!!6000000006313-2-tps-1043-544.png)

## \u672C\u6B21\u65B0\u589E\u6838\u5FC3\u8BA4\u8BC1\u529F\u80FD\u6982\u89C8 (\u9488\u5BF9 MCP Server \u5230\u540E\u7AEF API)

\u6B64\u7248\u672C\u5F15\u5165\u4E86\u591A\u9879\u6838\u5FC3\u529F\u80FD\u6765\u7BA1\u7406 API \u8BA4\u8BC1\uFF1A

1.  **\u53EF\u91CD\u7528\u8BA4\u8BC1\u65B9\u6848**\uFF1A\u5728\u670D\u52A1\u5668\u5C42\u9762\u5B9A\u4E49\u901A\u7528\u7684\u8BA4\u8BC1\u65B9\u6CD5\uFF08HTTP Basic\u3001HTTP Bearer\u3001API Key\uFF09\u3002
2.  **\u5DE5\u5177\u7279\u5B9A\u7684\u540E\u7AEF\u8BA4\u8BC1**\uFF1A\u5C06\u5DF2\u5B9A\u4E49\u7684\u8BA4\u8BC1\u65B9\u6848\u5E94\u7528\u4E8E\u5355\u4E2A\u5DE5\u5177\uFF0C\u6307\u5B9A MCP Server \u5728\u8C03\u7528\u540E\u7AEF REST API \u65F6\u5E94\u5982\u4F55\u8FDB\u884C\u81EA\u6211\u8BA4\u8BC1\u3002
3.  **\u900F\u660E\u51ED\u8BC1\u900F\u4F20**\uFF1A\u5141\u8BB8 MCP \u5BA2\u6237\u7AEF\uFF08\u4F8B\u5982 AI \u52A9\u624B\uFF09\u63D0\u4F9B\u7684\u51ED\u8BC1\u5B89\u5168\u5730\u900F\u4F20\u81F3\u540E\u7AEF API\u3002
4.  **\u7075\u6D3B\u7684\u51ED\u8BC1\u7BA1\u7406**\uFF1A\u652F\u6301\u5728\u65B9\u6848\u7EA7\u522B\u8BBE\u7F6E\u9ED8\u8BA4\u51ED\u8BC1\uFF0C\u5E76\u5141\u8BB8\u4E3A\u7279\u5B9A\u5DE5\u5177\u8986\u76D6\u8FD9\u4E9B\u9ED8\u8BA4\u51ED\u8BC1\u3002

\u63A5\u4E0B\u6765\uFF0C\u8BA9\u6211\u4EEC\u6DF1\u5165\u4E86\u89E3\u5982\u4F55\u5229\u7528\u8FD9\u4E9B\u529F\u80FD\u3002

## \u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848 (\`server.securitySchemes\`)

\u60A8\u73B0\u5728\u53EF\u4EE5\u5728 MCP Server \u914D\u7F6E\u7684 \`server\` \u5C42\u7EA7\u5B9A\u4E49\u4E00\u7EC4 \`securitySchemes\`\u3002\u8FD9\u79CD\u65B9\u5F0F\u4E0E OpenAPI \u89C4\u8303 (OAS3) \u4E2D\u5B9A\u4E49\u5B89\u5168\u8981\u6C42\u7684\u65B9\u6CD5\u4FDD\u6301\u4E00\u81F4\uFF0C\u4F7F\u5176\u6613\u4E8E\u7406\u89E3\u548C\u6807\u51C6\u5316\u3002\u6BCF\u4E2A\u65B9\u6848\u4EE3\u8868\u60A8\u7684\u540E\u7AEF API \u53EF\u80FD\u4F7F\u7528\u7684\u4E00\u79CD\u7279\u5B9A\u8BA4\u8BC1\u65B9\u6CD5\u3002

\u76EE\u524D\uFF0CHigress MCP Server \u63D2\u4EF6\u652F\u6301\u4EE5\u4E0B\u65B9\u6848\u7C7B\u578B\uFF1A
*   \`http\` \u914D\u5408 \`scheme: basic\` (HTTP Basic \u8BA4\u8BC1)
*   \`http\` \u914D\u5408 \`scheme: bearer\` (HTTP Bearer \u4EE4\u724C\u8BA4\u8BC1)
*   \`apiKey\` \u914D\u5408 \`in: header\` \u6216 \`in: query\` (\u4F4D\u4E8E Header \u6216\u67E5\u8BE2\u53C2\u6570\u4E2D\u7684 API Key)

\u6211\u4EEC\u8BA1\u5212\u5728\u672A\u6765\u7684\u7248\u672C\u4E2D\u589E\u52A0\u5BF9 \`oauth2\` \u548C \`openIdConnect\` (OIDC) \u65B9\u6848\u7684\u652F\u6301\uFF0C\u4ECE\u800C\u8FDB\u4E00\u6B65\u6269\u5C55\u60A8\u53EF\u4EE5\u5B89\u5168\u96C6\u6210\u7684 API \u8303\u56F4\u3002

**\`securitySchemes\` \u914D\u7F6E\u5B57\u6BB5**:

| \u5B57\u6BB5                | \u7C7B\u578B   | \u63CF\u8FF0                                                                                                 |
|---------------------|--------|------------------------------------------------------------------------------------------------------|
| \`id\`                | string | \u6B64\u8BA4\u8BC1\u65B9\u6848\u7684\u552F\u4E00\u6807\u8BC6\u7B26\u3002                                                                               |
| \`type\`              | string | \u8BA4\u8BC1\u65B9\u6848\u7684\u7C7B\u578B (\u4F8B\u5982, \`http\`, \`apiKey\`)\u3002                                                              |
| \`scheme\`            | string | \u5BF9\u4E8E \`type: http\`\uFF0C\u6307\u5B9A\u5177\u4F53\u65B9\u6848 (\u4F8B\u5982, \`basic\`, \`bearer\`)\u3002                                            |
| \`in\`                | string | \u5BF9\u4E8E \`type: apiKey\`\uFF0C\u6307\u5B9A API Key \u7684\u4F4D\u7F6E (\u4F8B\u5982, \`header\`, \`query\`)\u3002                                     |
| \`name\`              | string | \u5BF9\u4E8E \`type: apiKey\`\uFF0C\u6307\u5B9A Header \u6216\u67E5\u8BE2\u53C2\u6570\u7684\u540D\u79F0\u3002                                                      |
| \`defaultCredential\` | string | \u6B64\u65B9\u6848\u4F7F\u7528\u7684\u9ED8\u8BA4\u51ED\u8BC1 (\u4F8B\u5982, Basic \u8BA4\u8BC1\u7684 "user:pass"\uFF0CBearer \u4EE4\u724C\u7684 token \u503C\uFF0CAPI Key \u7684\u5BC6\u94A5\u672C\u8EAB)\u3002 |

**\u793A\u4F8B**:

\`\`\`yaml
server:
  name: my-secure-api-server
  securitySchemes:
    - id: backendBasicAuth
      type: http
      scheme: basic
      defaultCredential: "service_user:p@$$wOrd"
    - id: backendBearerToken
      type: http
      scheme: bearer
      defaultCredential: "your_static_bearer_token_for_backend"
    - id: backendApiKeyHeader
      type: apiKey
      in: header
      name: X-Internal-ApiKey
      defaultCredential: "secret_backend_api_key"
\`\`\`

## \u4E3A\u540E\u7AEF API \u8C03\u7528\u5E94\u7528\u8BA4\u8BC1 (\`requestTemplate.security\`)

\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848\u540E\uFF0C\u60A8\u53EF\u4EE5\u5C06\u5176\u5E94\u7528\u4E8E MCP Server \u5411\u540E\u7AEF REST API \u53D1\u51FA\u7684\u8BF7\u6C42\u3002\u8FD9\u5728\u6BCF\u4E2A\u5DE5\u5177\u7684 \`requestTemplate\` \u4E2D\u8FDB\u884C\u914D\u7F6E\uFF1A

-   \`requestTemplate.security.id\`: \u5F15\u7528\u5728 \`server.securitySchemes\` \u4E2D\u5B9A\u4E49\u7684\u65B9\u6848\u7684 \`id\`\u3002
-   \`requestTemplate.security.credential\`: (\u53EF\u9009) \u5141\u8BB8\u60A8\u4E3A\u6B64\u7279\u5B9A\u5DE5\u5177\u7684\u540E\u7AEF\u8C03\u7528\u8986\u76D6\u65B9\u6848\u4E2D\u7684 \`defaultCredential\`\u3002

**\u793A\u4F8B**:

\`\`\`yaml
tools:
  - name: fetch-sensitive-data
    description: "\u4ECE\u9700\u8981 Bearer \u4EE4\u724C\u7684\u540E\u7AEF\u670D\u52A1\u83B7\u53D6\u654F\u611F\u6570\u636E\u3002"
    args: # ...
    requestTemplate:
      url: "https://api.internal.com/data"
      method: GET
      security:
        id: backendBearerToken # \u4F7F\u7528 'backendBearerToken' \u65B9\u6848
        # credential: "override_token_for_this_tool_if_needed" # \u5982\u679C\u9700\u8981\uFF0C\u53EF\u4E3A\u6B64\u5DE5\u5177\u8986\u76D6\u4EE4\u724C
\`\`\`

## \u900F\u660E\u51ED\u8BC1\u900F\u4F20

\u6700\u5F3A\u5927\u7684\u65B0\u589E\u529F\u80FD\u4E4B\u4E00\u662F\u80FD\u591F\u5C06\u6765\u81EA\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF08\u4F8B\u5982\uFF0C\u4ECE AI Agent \u5230 MCP Server\uFF09\u7684\u51ED\u8BC1\u900F\u660E\u5730\u4F20\u9012\u5230\u540E\u7AEF API \u8C03\u7528\uFF08MCP Server \u5230\u5B9E\u9645\u7684 REST API\uFF09\u3002\u5F53\u540E\u7AEF API \u9700\u8981 AI \u5BA2\u6237\u7AEF\u62E5\u6709\u7684\u7528\u6237\u7279\u5B9A\u8BA4\u8BC1\u65F6\uFF0C\u6B64\u529F\u80FD\u975E\u5E38\u5B9D\u8D35\u3002

**\u5DE5\u4F5C\u539F\u7406**:

1.  **\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u65B9\u6848\u5B9A\u4E49**\uFF1AMCP Server \u9700\u8981\u77E5\u9053\u5BA2\u6237\u7AEF\u5982\u4F55\u8FDB\u884C\u81EA\u6211\u8BA4\u8BC1\u3002\u8FD9\u4E5F\u901A\u8FC7 \`server.securitySchemes\` \u4E2D\u7684\u4E00\u4E2A\u65B9\u6848\u6765\u5B9A\u4E49\u3002
2.  **\u5DE5\u5177\u7EA7\u5B89\u5168\u914D\u7F6E (\`tools[].security\`)**:
    *   \`id\`: \u5F15\u7528*\u5BA2\u6237\u7AEF*\u5728\u8C03\u7528\u6B64 MCP \u5DE5\u5177\u65F6\u5E94\u4F7F\u7528\u7684\u8BA4\u8BC1\u65B9\u6848\u3002MCP Server \u5C06\u4F7F\u7528\u6B64\u65B9\u6848\u6765\u63D0\u53D6\u5BA2\u6237\u7AEF\u7684\u51ED\u8BC1\u3002
    *   \`passthrough: true\`: \u6B64\u6807\u5FD7\u542F\u7528\u900F\u4F20\u673A\u5236\u3002
3.  **\u540E\u7AEF\u8BA4\u8BC1**: \u5982\u4E0A\u6240\u8FF0\u7684 \`requestTemplate.security\` \u5B9A\u4E49\u4E86*\u900F\u4F20\u51ED\u8BC1*\u5C06\u5982\u4F55\u5E94\u7528\u4E8E\u540E\u7AEF API \u8C03\u7528\u3002

**\u793A\u4F8B**:

\u5047\u8BBE\u4E00\u4E2A AI \u5BA2\u6237\u7AEF\u4F7F\u7528\u7528\u6237\u7279\u5B9A\u7684 JWT Bearer \u4EE4\u724C\u8C03\u7528\u60A8\u7684 MCP \u5DE5\u5177\u3002\u60A8\u5E0C\u671B\u4F7F\u7528\u76F8\u540C\u7684\u4EE4\u724C\u8C03\u7528\u540E\u7AEF\u670D\u52A1\u3002

\`\`\`yaml
server:
  name: user-data-passthrough-server
  securitySchemes:
    - id: clientUserBearer # \u5BA2\u6237\u7AEF\u4F20\u5165 Bearer \u4EE4\u724C\u7684\u65B9\u6848
      type: http
      scheme: bearer
    - id: backendServiceBearer # \u540E\u7AEF API \u7684\u65B9\u6848 (\u4E5F\u662F Bearer, \u4F46\u53EF\u4EE5\u4E0D\u540C)
      type: http
      scheme: bearer
      # \u5982\u679C\u603B\u662F\u4F9D\u8D56\u900F\u4F20\uFF0C\u5219\u6B64\u5904\u65E0\u9700 defaultCredential

tools:
  - name: get-user-profile
    description: "\u4F7F\u7528\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u4EE4\u724C\u83B7\u53D6\u7528\u6237\u4E2A\u4EBA\u8D44\u6599\u3002"
    security: # \u5BA2\u6237\u7AEF\u5982\u4F55\u5411\u6B64 MCP \u5DE5\u5177\u8FDB\u884C\u8BA4\u8BC1\u7684\u914D\u7F6E
      id: clientUserBearer   # MCP Server \u671F\u671B\u5BA2\u6237\u7AEF\u4F7F\u7528 Bearer \u4EE4\u724C
      passthrough: true     # \u542F\u7528\u900F\u4F20
    args: # ...
    requestTemplate:
      url: "https://api.user-profiles.com/me"
      method: GET
      security: # MCP Server \u5982\u4F55\u5411\u540E\u7AEF API \u8FDB\u884C\u8BA4\u8BC1\u7684\u914D\u7F6E
        id: backendServiceBearer # \u900F\u4F20\u7684\u4EE4\u724C\u5C06\u4F5C\u4E3A Bearer \u4EE4\u724C\u53D1\u9001\u5230\u540E\u7AEF\u3002
\`\`\`

**\u5DE5\u4F5C\u6D41\u7A0B**:

1.  AI \u5BA2\u6237\u7AEF\u8C03\u7528 \`get-user-profile\` \u5DE5\u5177\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A \`Authorization: Bearer <user_jwt_token>\` \u8BF7\u6C42\u5934\u3002
2.  Higress MCP Server \u6839\u636E \`tools[].security.id: clientUserBearer\` \u63D0\u53D6 \`<user_jwt_token>\`\u3002\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u539F\u59CB \`Authorization\` \u8BF7\u6C42\u5934\u88AB\u79FB\u9664\u3002
3.  \u7531\u4E8E\u8BBE\u7F6E\u4E86 \`passthrough: true\`\uFF0C\`<user_jwt_token>\` \u88AB\u6307\u5B9A\u4E3A\u7528\u4E8E\u540E\u7AEF\u8C03\u7528\u7684\u51ED\u8BC1\u3002
4.  \u7136\u540E\uFF0CMCP Server \u4F7F\u7528 \`requestTemplate.security.id: backendServiceBearer\` \u4E2D\u5B9A\u4E49\u7684\u65B9\u6848\u6765\u683C\u5F0F\u5316\u6B64 \`<user_jwt_token>\` \u5E76\u5C06\u5176\u53D1\u9001\u5230 \`https://api.user-profiles.com/me\` \u7AEF\u70B9 (\u5373\uFF0C\u5B83\u53D1\u9001 \`Authorization: Bearer <user_jwt_token>\`)\u3002

**\u5173\u4E8E\u900F\u4F20\u7684\u91CD\u8981\u8BF4\u660E**:
*   \u5F53 \`passthrough: true\` \u65F6\uFF0C\`requestTemplate.security.credential\` \u4E2D\u6307\u5B9A\u7684\u4EFB\u4F55 \`credential\` \u90FD\u5C06\u88AB\u5FFD\u7565\u3002
*   MCP Server \u4F1A\u667A\u80FD\u5730\u4ECE\u5BA2\u6237\u7AEF\u8BF7\u6C42\u4E2D\u63D0\u53D6\u6838\u5FC3\u51ED\u8BC1\u90E8\u5206\uFF08\u4F8B\u5982\uFF0C\u4ECE "Bearer token" \u4E2D\u63D0\u53D6 token\uFF0C\u4ECE "Basic base64value" \u4E2D\u63D0\u53D6 base64 \u90E8\u5206\uFF09\uFF0C\u7136\u540E\u518D\u8FDB\u884C\u900F\u4F20\u3002

## \u5E26\u6765\u7684\u76CA\u5904

\u8FD9\u4E9B\u65B0\u7684\u8BA4\u8BC1\u529F\u80FD\u63D0\u4F9B\u4E86\uFF1A

-   **\u589E\u5F3A\u7684\u5B89\u5168\u6027**\uFF1A\u59A5\u5584\u4FDD\u62A4\u4E0E\u540E\u7AEF\u670D\u52A1\u7684\u4EA4\u4E92\u3002
-   **\u66F4\u9AD8\u7684\u7075\u6D3B\u6027**\uFF1A\u652F\u6301\u5404\u79CD\u5E38\u89C1\u7684\u8BA4\u8BC1\u6A21\u5F0F\u3002
-   **\u7B80\u5316\u7684\u96C6\u6210**\uFF1A\u66F4\u5BB9\u6613\u4E0E\u5177\u6709\u4E0D\u540C\u5B89\u5168\u8981\u6C42\u7684 API \u96C6\u6210\u3002
-   **\u65E0\u7F1D\u7684\u7528\u6237\u4E0A\u4E0B\u6587\u4F20\u64AD**\uFF1A\u900F\u660E\u5730\u4F7F\u7528\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684\u51ED\u8BC1\u8FDB\u884C\u540E\u7AEF\u8C03\u7528\uFF0C\u5B9E\u73B0\u4E2A\u6027\u5316\u7684 API \u4EA4\u4E92\u3002

\u6211\u4EEC\u76F8\u4FE1\u8FD9\u4E9B\u589E\u5F3A\u529F\u80FD\u5C06\u663E\u8457\u6539\u5584\u4F7F\u7528 Higress \u548C MCP Server \u6784\u5EFA\u7684 AI \u9A71\u52A8\u5E94\u7528\u7A0B\u5E8F\u7684\u5B89\u5168\u72B6\u51B5\u548C\u96C6\u6210\u80FD\u529B\u3002

## \u901A\u8FC7 \`openapi-to-mcp\` \u7B80\u5316\u914D\u7F6E

\u4E3A\u4E86\u8FDB\u4E00\u6B65\u7B80\u5316\u914D\u7F6E\u8FC7\u7A0B\uFF0C\u6700\u65B0\u7248\u672C\u7684 \`openapi-to-mcp\` \u5DE5\u5177\uFF08\u9879\u76EE\u5730\u5740\uFF1A[GitHub](https://github.com/higress-group/openapi-to-mcpserver)\uFF09\u73B0\u5DF2\u652F\u6301\u5C06\u5305\u542B \`securitySchemes\` \u5B9A\u4E49\u7684 OpenAPI \u6587\u6863\u76F4\u63A5\u8F6C\u6362\u4E3A\u6B64 MCP Server \u63D2\u4EF6\u914D\u7F6E\u3002\u5982\u679C\u60A8\u7684 OpenAPI \u89C4\u8303\u5DF2\u7ECF\u63CF\u8FF0\u4E86\u5176\u5B89\u5168\u8981\u6C42\uFF0C\u8BE5\u5DE5\u5177\u53EF\u4EE5\u751F\u6210\u76F8\u5E94\u7684 \`server.securitySchemes\` \u5E76\u5C06\u5176\u94FE\u63A5\u5230\u5408\u9002\u7684\u5DE5\u5177\uFF0C\u4ECE\u800C\u663E\u8457\u51CF\u5C11\u624B\u52A8\u914D\u7F6E\u7684\u5DE5\u4F5C\u91CF\u3002

## \u5F00\u59CB\u4F7F\u7528

\u5982\u679C\u60A8\u4F7F\u7528\u5F00\u6E90\u7248 Higress \u8BF7\u66F4\u65B0\u60A8\u7684 Higress MCP Server \u63D2\u4EF6\uFF0C\u5E76\u53C2\u9605 [MCP Server README \u6587\u6863](https://higress.cn/ai/mcp-server) \u83B7\u53D6\u8BE6\u7EC6\u7684\u914D\u7F6E\u8BF4\u660E\u548C\u66F4\u591A\u793A\u4F8B\u3002

\u5982\u679C\u60A8\u4F7F\u7528\u4F01\u4E1A\u7248 Higress\uFF08\u963F\u91CC\u4E91 AI \u7F51\u5173\uFF09\uFF0C\u8BF7\u53C2\u8003\u6211\u4EEC\u7684[\u4F01\u4E1A\u7248\u4EA7\u54C1\u6587\u6863](https://help.aliyun.com/zh/api-gateway/ai-gateway/user-guide/mcp-services-management)\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86\u66F4\u6613\u7528\u7684\u4EA7\u54C1\u5316\u5C01\u88C5\uFF0C\u5E76\u63D0\u4F9B\u5168\u6258\u7BA1\u514D\u8FD0\u7EF4\u7684\u670D\u52A1\uFF0C\u4EE5\u53CA99.99%\u7684SLA\u53EF\u7528\u6027\u4FDD\u969C:
![undefined](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/22499/1747386241050-bb0333e2-7ecb-4f7f-b56a-a728547dd875.png) 

\u6211\u4EEC\u81F4\u529B\u4E8E\u5C06 Higress \u6253\u9020\u6210\u4E00\u4E2A\u5F3A\u5927\u4E14\u5F00\u53D1\u8005\u53CB\u597D\u7684 AI \u539F\u751F API \u7F51\u5173\uFF0C\u80FD\u591F\u5BF9\u63A5 LLM API\u3001MCP API \u548C Agent API\u3002\u656C\u8BF7\u671F\u5F85\u66F4\u591A\u66F4\u65B0\uFF01

`},i=function(){return e},d=function(){return[{depth:2,slug:"\u672C\u6B21\u65B0\u589E\u6838\u5FC3\u8BA4\u8BC1\u529F\u80FD\u6982\u89C8-\u9488\u5BF9-mcp-server-\u5230\u540E\u7AEF-api",text:"\u672C\u6B21\u65B0\u589E\u6838\u5FC3\u8BA4\u8BC1\u529F\u80FD\u6982\u89C8 (\u9488\u5BF9 MCP Server \u5230\u540E\u7AEF API)"},{depth:2,slug:"\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848-serversecurityschemes",text:"\u5B9A\u4E49\u8BA4\u8BC1\u65B9\u6848 (server.securitySchemes)"},{depth:2,slug:"\u4E3A\u540E\u7AEF-api-\u8C03\u7528\u5E94\u7528\u8BA4\u8BC1-requesttemplatesecurity",text:"\u4E3A\u540E\u7AEF API \u8C03\u7528\u5E94\u7528\u8BA4\u8BC1 (requestTemplate.security)"},{depth:2,slug:"\u900F\u660E\u51ED\u8BC1\u900F\u4F20",text:"\u900F\u660E\u51ED\u8BC1\u900F\u4F20"},{depth:2,slug:"\u5E26\u6765\u7684\u76CA\u5904",text:"\u5E26\u6765\u7684\u76CA\u5904"},{depth:2,slug:"\u901A\u8FC7-openapi-to-mcp-\u7B80\u5316\u914D\u7F6E",text:"\u901A\u8FC7 openapi-to-mcp \u7B80\u5316\u914D\u7F6E"},{depth:2,slug:"\u5F00\u59CB\u4F7F\u7528",text:"\u5F00\u59CB\u4F7F\u7528"}]},s=c((g,A,P)=>{const{layout:m,...n}=t;return n.file=a,n.url=r,o`${v()}${y(e)}`})});export{s as Content,h as __tla,i as compiledContent,s as default,a as file,t as frontmatter,d as getHeadings,p as rawContent,r as url};
