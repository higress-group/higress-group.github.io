import{c,__tla as l}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as E,__tla as y}from"./constant.BXZN3hx5.js";import{__tla as x}from"./astro/assets-service.BhtN0nM5.js";let e,d,a,t,p,o,n,h=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p>LLM\u54CD\u5E94\u7ED3\u6784\u5316\u63D2\u4EF6\uFF0C\u7528\u4E8E\u6839\u636E\u9ED8\u8BA4\u6216\u7528\u6237\u914D\u7F6E\u7684Json Schema\u5BF9AI\u7684\u54CD\u5E94\u8FDB\u884C\u7ED3\u6784\u5316\uFF0C\u4EE5\u4FBF\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002\u6CE8\u610F\u76EE\u524D\u53EA\u652F\u6301 <code dir="auto">\u975E\u6D41\u5F0F\u54CD\u5E94</code>\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">150</code></p>
<h3 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h3>
































































































<table><thead><tr><th>Name</th><th>Type</th><th>Requirement</th><th>Default</th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>serviceName</td><td>str</td><td>required</td><td>-</td><td>AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u540D\u79F0</td></tr><tr><td>serviceDomain</td><td>str</td><td>optional</td><td>-</td><td>AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u57DF\u540D/IP\u5730\u5740</td></tr><tr><td>servicePath</td><td>str</td><td>optional</td><td>\u2019/v1/chat/completions\u2019</td><td>AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u57FA\u7840\u8DEF\u5F84</td></tr><tr><td>serviceUrl</td><td>str</td><td>optional</td><td>-</td><td>AI\u670D\u52A1\u6216\u652F\u6301 AI-Proxy \u7684\u7F51\u5173\u670D\u52A1URL, \u63D2\u4EF6\u5C06\u81EA\u52A8\u63D0\u53D6Domain \u548C Path, \u7528\u4E8E\u586B\u5145\u672A\u914D\u7F6E\u7684 serviceDomain \u6216 servicePath</td></tr><tr><td>servicePort</td><td>int</td><td>optional</td><td>443</td><td>\u7F51\u5173\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>serviceTimeout</td><td>int</td><td>optional</td><td>50000</td><td>\u9ED8\u8BA4\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4</td></tr><tr><td>maxRetry</td><td>int</td><td>optional</td><td>3</td><td>\u82E5\u56DE\u7B54\u65E0\u6CD5\u6B63\u786E\u63D0\u53D6\u683C\u5F0F\u5316\u65F6\u91CD\u8BD5\u6B21\u6570</td></tr><tr><td>contentPath</td><td>str</td><td>optional</td><td>\u201Dchoices.0.message.content\u201D</td><td>\u4ECELLM\u56DE\u7B54\u4E2D\u63D0\u53D6\u54CD\u5E94\u7ED3\u679C\u7684gpath\u8DEF\u5F84</td></tr><tr><td>jsonSchema</td><td>str (json)</td><td>optional</td><td>-</td><td>\u9A8C\u8BC1\u8BF7\u6C42\u6240\u53C2\u7167\u7684 jsonSchema, \u4E3A\u7A7A\u53EA\u9A8C\u8BC1\u5E76\u8FD4\u56DE\u5408\u6CD5Json\u683C\u5F0F\u54CD\u5E94</td></tr><tr><td>enableSwagger</td><td>bool</td><td>optional</td><td>false</td><td>\u662F\u5426\u542F\u7528 Swagger \u534F\u8BAE\u8FDB\u884C\u9A8C\u8BC1</td></tr><tr><td>enableOas3</td><td>bool</td><td>optional</td><td>true</td><td>\u662F\u5426\u542F\u7528 Oas3 \u534F\u8BAE\u8FDB\u884C\u9A8C\u8BC1</td></tr><tr><td>enableContentDisposition</td><td>bool</td><td>optional</td><td>true</td><td>\u662F\u5426\u542F\u7528 Content-Disposition \u5934\u90E8, \u82E5\u542F\u7528\u5219\u4F1A\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 <code dir="auto">Content-Disposition: attachment; filename="response.json"</code></td></tr></tbody></table>
<blockquote>
<p>\u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u9ED8\u8BA4\u652F\u6301\u7684\u6700\u5927 Json Schema \u6DF1\u5EA6\u4E3A 6\u3002\u8D85\u8FC7\u6B64\u6DF1\u5EA6\u7684 Json Schema \u5C06\u4E0D\u7528\u4E8E\u9A8C\u8BC1\u54CD\u5E94\uFF0C\u63D2\u4EF6\u53EA\u4F1A\u68C0\u67E5\u8FD4\u56DE\u7684\u54CD\u5E94\u662F\u5426\u4E3A\u5408\u6CD5\u7684 Json \u683C\u5F0F\u3002</p>
</blockquote>
<h3 id="\u8BF7\u6C42\u548C\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E">\u8BF7\u6C42\u548C\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E</h3>
<ul>
<li><strong>\u8BF7\u6C42\u53C2\u6570</strong>: \u672C\u63D2\u4EF6\u8BF7\u6C42\u683C\u5F0F\u4E3Aopenai\u8BF7\u6C42\u683C\u5F0F\uFF0C\u5305\u542B<code dir="auto">model</code>\u548C<code dir="auto">messages</code>\u5B57\u6BB5\uFF0C\u5176\u4E2D<code dir="auto">model</code>\u4E3AAI\u6A21\u578B\u540D\u79F0\uFF0C<code dir="auto">messages</code>\u4E3A\u5BF9\u8BDD\u6D88\u606F\u5217\u8868\uFF0C\u6BCF\u4E2A\u6D88\u606F\u5305\u542B<code dir="auto">role</code>\u548C<code dir="auto">content</code>\u5B57\u6BB5\uFF0C<code dir="auto">role</code>\u4E3A\u6D88\u606F\u89D2\u8272\uFF0C<code dir="auto">content</code>\u4E3A\u6D88\u606F\u5185\u5BB9\u3002
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"model"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-4"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"messages"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"role"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"user"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"content"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"give me a api doc for add the variable x to x+5"</span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;model&#x22;: &#x22;gpt-4&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {&#x22;role&#x22;: &#x22;user&#x22;, &#x22;content&#x22;: &#x22;give me a api doc for add the variable x to x+5&#x22;}\x7F  ]\x7F}"><div></div></button></div></figure></div>
\u5176\u4ED6\u8BF7\u6C42\u53C2\u6570\u9700\u53C2\u8003\u914D\u7F6E\u7684ai\u670D\u52A1\u6216\u7F51\u5173\u670D\u52A1\u7684\u76F8\u5E94\u6587\u6863\u3002</li>
<li><strong>\u8FD4\u56DE\u53C2\u6570</strong>:
<ul>
<li>\u8FD4\u56DE\u6EE1\u8DB3\u5B9A\u4E49\u7684Json Schema\u7EA6\u675F\u7684 <code dir="auto">Json\u683C\u5F0F\u54CD\u5E94</code></li>
<li>\u82E5\u672A\u5B9A\u4E49Json Schema\uFF0C\u5219\u8FD4\u56DE\u5408\u6CD5\u7684<code dir="auto">Json\u683C\u5F0F\u54CD\u5E94</code></li>
<li>\u82E5\u51FA\u73B0\u5185\u90E8\u9519\u8BEF\uFF0C\u5219\u8FD4\u56DE <code dir="auto">{ "Code": 10XX, "Msg": "\u9519\u8BEF\u4FE1\u606F\u63D0\u793A" }</code>\u3002</li>
</ul>
</li>
</ul>
<h2 id="\u8BF7\u6C42\u793A\u4F8B">\u8BF7\u6C42\u793A\u4F8B</h2>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://localhost:8001/v1/chat/completions"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-4",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{"role": "user", "content": "give me a api doc for add the variable x to x+5"}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl -X POST &#x22;http://localhost:8001/v1/chat/completions&#x22; \\\x7F-H &#x22;Content-Type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-4&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {&#x22;role&#x22;: &#x22;user&#x22;, &#x22;content&#x22;: &#x22;give me a api doc for add the variable x to x+5&#x22;}\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<h2 id="\u8FD4\u56DE\u793A\u4F8B">\u8FD4\u56DE\u793A\u4F8B</h2>
<h3 id="\u6B63\u5E38\u8FD4\u56DE">\u6B63\u5E38\u8FD4\u56DE</h3>
<p>\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7CFB\u7EDF\u5E94\u8FD4\u56DE\u7ECF\u8FC7 JSON Schema \u9A8C\u8BC1\u7684 JSON \u6570\u636E\u3002\u5982\u679C\u672A\u914D\u7F6E JSON Schema\uFF0C\u7CFB\u7EDF\u5C06\u8FD4\u56DE\u7B26\u5408 JSON \u6807\u51C6\u7684\u5408\u6CD5 JSON \u6570\u636E\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"apiVersion"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"1.0"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"request"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"endpoint"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/add_to_five"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"method"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"POST"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"port"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"headers"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"Content-Type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"application/json"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"body"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"x"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">7</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;apiVersion&#x22;: &#x22;1.0&#x22;,\x7F  &#x22;request&#x22;: {\x7F    &#x22;endpoint&#x22;: &#x22;/add_to_five&#x22;,\x7F    &#x22;method&#x22;: &#x22;POST&#x22;,\x7F    &#x22;port&#x22;: 8080,\x7F    &#x22;headers&#x22;: {\x7F      &#x22;Content-Type&#x22;: &#x22;application/json&#x22;\x7F    },\x7F    &#x22;body&#x22;: {\x7F      &#x22;x&#x22;: 7\x7F    }\x7F  }\x7F}"><div></div></button></div></figure></div>
<h3 id="\u5F02\u5E38\u8FD4\u56DE">\u5F02\u5E38\u8FD4\u56DE</h3>
<p>\u5728\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u8FD4\u56DE\u72B6\u6001\u7801\u4E3A <code dir="auto">500</code>\uFF0C\u8FD4\u56DE\u5185\u5BB9\u4E3A JSON \u683C\u5F0F\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u5305\u542B\u9519\u8BEF\u7801 <code dir="auto">Code</code> \u548C\u9519\u8BEF\u4FE1\u606F <code dir="auto">Msg</code> \u4E24\u4E2A\u5B57\u6BB5\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"Code"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1006</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"Msg"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"retry count exceed max retry count"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;Code&#x22;: 1006,\x7F  &#x22;Msg&#x22;: &#x22;retry count exceed max retry count&#x22;\x7F}"><div></div></button></div></figure></div>
<h3 id="\u9519\u8BEF\u7801\u8BF4\u660E">\u9519\u8BEF\u7801\u8BF4\u660E</h3>









































<table><thead><tr><th>\u9519\u8BEF\u7801</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>1001</td><td>\u914D\u7F6E\u7684Json Schema\u4E0D\u662F\u5408\u6CD5Json\u683C\u5F0F</td></tr><tr><td>1002</td><td>\u914D\u7F6E\u7684Json Schema\u7F16\u8BD1\u5931\u8D25\uFF0C\u4E0D\u662F\u5408\u6CD5\u7684Json Schema \u683C\u5F0F\u6216\u6DF1\u5EA6\u8D85\u51FA jsonSchemaMaxDepth \u4E14 rejectOnDepthExceeded \u4E3Atrue</td></tr><tr><td>1003</td><td>\u65E0\u6CD5\u5728\u54CD\u5E94\u4E2D\u63D0\u53D6\u5408\u6CD5\u7684Json</td></tr><tr><td>1004</td><td>\u54CD\u5E94\u4E3A\u7A7A\u5B57\u7B26\u4E32</td></tr><tr><td>1005</td><td>\u54CD\u5E94\u4E0D\u7B26\u5408Json Schema\u5B9A\u4E49</td></tr><tr><td>1006</td><td>\u91CD\u8BD5\u6B21\u6570\u8D85\u8FC7\u6700\u5927\u9650\u5236</td></tr><tr><td>1007</td><td>\u65E0\u6CD5\u83B7\u53D6\u54CD\u5E94\u5185\u5BB9\uFF0C\u53EF\u80FD\u662F\u4E0A\u6E38\u670D\u52A1\u914D\u7F6E\u9519\u8BEF\u6216\u83B7\u53D6\u5185\u5BB9\u7684ContentPath\u8DEF\u5F84\u9519\u8BEF</td></tr><tr><td>1008</td><td>serciveDomain\u4E3A\u7A7A, \u8BF7\u6CE8\u610FserviceDomian\u6216serviceUrl\u4E0D\u80FD\u540C\u65F6\u4E3A\u7A7A</td></tr></tbody></table>
<h2 id="\u670D\u52A1\u914D\u7F6E\u8BF4\u660E">\u670D\u52A1\u914D\u7F6E\u8BF4\u660E</h2>
<p>\u672C\u63D2\u4EF6\u9700\u8981\u914D\u7F6E\u4E0A\u6E38\u670D\u52A1\u6765\u652F\u6301\u51FA\u73B0\u5F02\u5E38\u65F6\u7684\u81EA\u52A8\u91CD\u8BD5\u673A\u5236, \u652F\u6301\u7684\u914D\u7F6E\u4E3B\u8981\u5305\u62EC<code dir="auto">\u652F\u6301openai\u63A5\u53E3\u7684AI\u670D\u52A1</code>\u6216<code dir="auto">\u672C\u5730\u7F51\u5173\u670D\u52A1</code></p>
<h3 id="\u652F\u6301openai\u63A5\u53E3\u7684ai\u670D\u52A1">\u652F\u6301openai\u63A5\u53E3\u7684AI\u670D\u52A1</h3>
<p>\u4EE5qwen\u4E3A\u4F8B\uFF0C\u57FA\u672C\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceDomain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">Your API Key</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/compatible-mode/v1/chat/completions</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">jsonSchema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">title</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ReasoningSchema</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">reasoning_steps</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">The reasoning steps leading to the final conclusion.</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">answer</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">The final answer, taking into account the reasoning steps.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">reasoning_steps</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">additionalProperties</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: qwen\x7FserviceDomain: dashscope.aliyuncs.com\x7FapiKey: [Your API Key]\x7FservicePath: /compatible-mode/v1/chat/completions\x7FjsonSchema:\x7F  title: ReasoningSchema\x7F  type: object\x7F  properties:\x7F    reasoning_steps:\x7F      type: array\x7F      items:\x7F        type: string\x7F      description: The reasoning steps leading to the final conclusion.\x7F    answer:\x7F      type: string\x7F      description: The final answer, taking into account the reasoning steps.\x7F  required:\x7F    - reasoning_steps\x7F    - answer\x7F  additionalProperties: false"><div></div></button></div></figure></div>
<h3 id="\u672C\u5730\u7F51\u5173\u670D\u52A1">\u672C\u5730\u7F51\u5173\u670D\u52A1</h3>
<p>\u4E3A\u4E86\u80FD\u590D\u7528\u5DF2\u7ECF\u914D\u7F6E\u597D\u7684\u670D\u52A1\uFF0C\u672C\u63D2\u4EF6\u4E5F\u652F\u6301\u914D\u7F6E\u672C\u5730\u7F51\u5173\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u82E5\u7F51\u5173\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86AI-proxy\u670D\u52A1\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<ol>
<li>
<p>\u521B\u5EFA\u4E00\u4E2A\u56FA\u5B9AIP\u5730\u5740\u4E3A127.0.0.1:80\u7684\u670D\u52A1\uFF0C\u4F8B\u5982localservice.static</p>
</li>
<li>
<p>\u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0localservice.static\u7684\u670D\u52A1\u914D\u7F6E</p>
</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">localservice</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">serviceDomain</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">127.0.0.1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="serviceName: localservice\x7FserviceDomain: 127.0.0.1\x7FservicePort: 80"><div></div></button></div></figure></div>
<ol start="3">
<li>\u81EA\u52A8\u63D0\u53D6\u8BF7\u6C42\u7684Path\uFF0CHeader\u7B49\u4FE1\u606F
\u63D2\u4EF6\u4F1A\u81EA\u52A8\u63D0\u53D6\u8BF7\u6C42\u7684Path\uFF0CHeader\u7B49\u4FE1\u606F\uFF0C\u4ECE\u800C\u907F\u514D\u5BF9AI\u670D\u52A1\u7684\u91CD\u590D\u914D\u7F6E\u3002</li>
</ol>`,t={title:"AI JSON \u683C\u5F0F\u5316",keywords:["AI\u7F51\u5173","AI JSON \u683C\u5F0F\u5316"],description:"AI JSON \u683C\u5F0F\u5316\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-json-resp.md",n=void 0,o=function(){return`
## \u529F\u80FD\u8BF4\u660E

LLM\u54CD\u5E94\u7ED3\u6784\u5316\u63D2\u4EF6\uFF0C\u7528\u4E8E\u6839\u636E\u9ED8\u8BA4\u6216\u7528\u6237\u914D\u7F6E\u7684Json Schema\u5BF9AI\u7684\u54CD\u5E94\u8FDB\u884C\u7ED3\u6784\u5316\uFF0C\u4EE5\u4FBF\u540E\u7EED\u63D2\u4EF6\u5904\u7406\u3002\u6CE8\u610F\u76EE\u524D\u53EA\u652F\u6301 \`\u975E\u6D41\u5F0F\u54CD\u5E94\`\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`150\`

### \u914D\u7F6E\u8BF4\u660E

| Name | Type | Requirement | Default | **Description** |
| --- | --- | --- | --- | --- |
| serviceName | str |  required | - | AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u540D\u79F0 |
| serviceDomain | str |  optional | - | AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u57DF\u540D/IP\u5730\u5740 |
| servicePath | str |  optional | '/v1/chat/completions' | AI\u670D\u52A1\u6216\u652F\u6301AI-Proxy\u7684\u7F51\u5173\u670D\u52A1\u57FA\u7840\u8DEF\u5F84 |
| serviceUrl | str |  optional | - | AI\u670D\u52A1\u6216\u652F\u6301 AI-Proxy \u7684\u7F51\u5173\u670D\u52A1URL, \u63D2\u4EF6\u5C06\u81EA\u52A8\u63D0\u53D6Domain \u548C Path, \u7528\u4E8E\u586B\u5145\u672A\u914D\u7F6E\u7684 serviceDomain \u6216 servicePath |
| servicePort | int |  optional | 443 | \u7F51\u5173\u670D\u52A1\u7AEF\u53E3 |
| serviceTimeout | int |  optional | 50000 | \u9ED8\u8BA4\u8BF7\u6C42\u8D85\u65F6\u65F6\u95F4 |
| maxRetry | int |  optional | 3 | \u82E5\u56DE\u7B54\u65E0\u6CD5\u6B63\u786E\u63D0\u53D6\u683C\u5F0F\u5316\u65F6\u91CD\u8BD5\u6B21\u6570 |
| contentPath | str |  optional | "choices.0.message.content\u201D | \u4ECELLM\u56DE\u7B54\u4E2D\u63D0\u53D6\u54CD\u5E94\u7ED3\u679C\u7684gpath\u8DEF\u5F84 |
| jsonSchema | str (json) |  optional | - | \u9A8C\u8BC1\u8BF7\u6C42\u6240\u53C2\u7167\u7684 jsonSchema, \u4E3A\u7A7A\u53EA\u9A8C\u8BC1\u5E76\u8FD4\u56DE\u5408\u6CD5Json\u683C\u5F0F\u54CD\u5E94 |
| enableSwagger | bool |  optional | false | \u662F\u5426\u542F\u7528 Swagger \u534F\u8BAE\u8FDB\u884C\u9A8C\u8BC1 |
| enableOas3 | bool |  optional | true | \u662F\u5426\u542F\u7528 Oas3 \u534F\u8BAE\u8FDB\u884C\u9A8C\u8BC1 |
| enableContentDisposition | bool | optional | true | \u662F\u5426\u542F\u7528 Content-Disposition \u5934\u90E8, \u82E5\u542F\u7528\u5219\u4F1A\u5728\u54CD\u5E94\u5934\u4E2D\u6DFB\u52A0 \`Content-Disposition: attachment; filename="response.json"\` |

> \u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u9ED8\u8BA4\u652F\u6301\u7684\u6700\u5927 Json Schema \u6DF1\u5EA6\u4E3A 6\u3002\u8D85\u8FC7\u6B64\u6DF1\u5EA6\u7684 Json Schema \u5C06\u4E0D\u7528\u4E8E\u9A8C\u8BC1\u54CD\u5E94\uFF0C\u63D2\u4EF6\u53EA\u4F1A\u68C0\u67E5\u8FD4\u56DE\u7684\u54CD\u5E94\u662F\u5426\u4E3A\u5408\u6CD5\u7684 Json \u683C\u5F0F\u3002


### \u8BF7\u6C42\u548C\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E

- **\u8BF7\u6C42\u53C2\u6570**: \u672C\u63D2\u4EF6\u8BF7\u6C42\u683C\u5F0F\u4E3Aopenai\u8BF7\u6C42\u683C\u5F0F\uFF0C\u5305\u542B\`model\`\u548C\`messages\`\u5B57\u6BB5\uFF0C\u5176\u4E2D\`model\`\u4E3AAI\u6A21\u578B\u540D\u79F0\uFF0C\`messages\`\u4E3A\u5BF9\u8BDD\u6D88\u606F\u5217\u8868\uFF0C\u6BCF\u4E2A\u6D88\u606F\u5305\u542B\`role\`\u548C\`content\`\u5B57\u6BB5\uFF0C\`role\`\u4E3A\u6D88\u606F\u89D2\u8272\uFF0C\`content\`\u4E3A\u6D88\u606F\u5185\u5BB9\u3002
  \`\`\`json
  {
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "give me a api doc for add the variable x to x+5"}
    ]
  }
  \`\`\`
  \u5176\u4ED6\u8BF7\u6C42\u53C2\u6570\u9700\u53C2\u8003\u914D\u7F6E\u7684ai\u670D\u52A1\u6216\u7F51\u5173\u670D\u52A1\u7684\u76F8\u5E94\u6587\u6863\u3002
- **\u8FD4\u56DE\u53C2\u6570**: 
  - \u8FD4\u56DE\u6EE1\u8DB3\u5B9A\u4E49\u7684Json Schema\u7EA6\u675F\u7684 \`Json\u683C\u5F0F\u54CD\u5E94\`
  - \u82E5\u672A\u5B9A\u4E49Json Schema\uFF0C\u5219\u8FD4\u56DE\u5408\u6CD5\u7684\`Json\u683C\u5F0F\u54CD\u5E94\`
  - \u82E5\u51FA\u73B0\u5185\u90E8\u9519\u8BEF\uFF0C\u5219\u8FD4\u56DE \`{ "Code": 10XX, "Msg": "\u9519\u8BEF\u4FE1\u606F\u63D0\u793A" }\`\u3002

## \u8BF7\u6C42\u793A\u4F8B

\`\`\`bash
curl -X POST "http://localhost:8001/v1/chat/completions" \\
-H "Content-Type: application/json" \\
-d '{
  "model": "gpt-4",
  "messages": [
    {"role": "user", "content": "give me a api doc for add the variable x to x+5"}
  ]
}'

\`\`\`

## \u8FD4\u56DE\u793A\u4F8B
### \u6B63\u5E38\u8FD4\u56DE
\u5728\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7CFB\u7EDF\u5E94\u8FD4\u56DE\u7ECF\u8FC7 JSON Schema \u9A8C\u8BC1\u7684 JSON \u6570\u636E\u3002\u5982\u679C\u672A\u914D\u7F6E JSON Schema\uFF0C\u7CFB\u7EDF\u5C06\u8FD4\u56DE\u7B26\u5408 JSON \u6807\u51C6\u7684\u5408\u6CD5 JSON \u6570\u636E\u3002
\`\`\`json
{
  "apiVersion": "1.0",
  "request": {
    "endpoint": "/add_to_five",
    "method": "POST",
    "port": 8080,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "x": 7
    }
  }
}
\`\`\`

### \u5F02\u5E38\u8FD4\u56DE
\u5728\u53D1\u751F\u9519\u8BEF\u65F6\uFF0C\u8FD4\u56DE\u72B6\u6001\u7801\u4E3A \`500\`\uFF0C\u8FD4\u56DE\u5185\u5BB9\u4E3A JSON \u683C\u5F0F\u7684\u9519\u8BEF\u4FE1\u606F\u3002\u5305\u542B\u9519\u8BEF\u7801 \`Code\` \u548C\u9519\u8BEF\u4FE1\u606F \`Msg\` \u4E24\u4E2A\u5B57\u6BB5\u3002
\`\`\`json
{
  "Code": 1006,
  "Msg": "retry count exceed max retry count"
}
\`\`\`

### \u9519\u8BEF\u7801\u8BF4\u660E
| \u9519\u8BEF\u7801 | \u8BF4\u660E |
| --- | --- |
| 1001 | \u914D\u7F6E\u7684Json Schema\u4E0D\u662F\u5408\u6CD5Json\u683C\u5F0F|
| 1002 | \u914D\u7F6E\u7684Json Schema\u7F16\u8BD1\u5931\u8D25\uFF0C\u4E0D\u662F\u5408\u6CD5\u7684Json Schema \u683C\u5F0F\u6216\u6DF1\u5EA6\u8D85\u51FA jsonSchemaMaxDepth \u4E14 rejectOnDepthExceeded \u4E3Atrue|
| 1003 | \u65E0\u6CD5\u5728\u54CD\u5E94\u4E2D\u63D0\u53D6\u5408\u6CD5\u7684Json|
| 1004 | \u54CD\u5E94\u4E3A\u7A7A\u5B57\u7B26\u4E32|
| 1005 | \u54CD\u5E94\u4E0D\u7B26\u5408Json Schema\u5B9A\u4E49|
| 1006 | \u91CD\u8BD5\u6B21\u6570\u8D85\u8FC7\u6700\u5927\u9650\u5236|
| 1007 | \u65E0\u6CD5\u83B7\u53D6\u54CD\u5E94\u5185\u5BB9\uFF0C\u53EF\u80FD\u662F\u4E0A\u6E38\u670D\u52A1\u914D\u7F6E\u9519\u8BEF\u6216\u83B7\u53D6\u5185\u5BB9\u7684ContentPath\u8DEF\u5F84\u9519\u8BEF|
| 1008 | serciveDomain\u4E3A\u7A7A, \u8BF7\u6CE8\u610FserviceDomian\u6216serviceUrl\u4E0D\u80FD\u540C\u65F6\u4E3A\u7A7A|

## \u670D\u52A1\u914D\u7F6E\u8BF4\u660E
\u672C\u63D2\u4EF6\u9700\u8981\u914D\u7F6E\u4E0A\u6E38\u670D\u52A1\u6765\u652F\u6301\u51FA\u73B0\u5F02\u5E38\u65F6\u7684\u81EA\u52A8\u91CD\u8BD5\u673A\u5236, \u652F\u6301\u7684\u914D\u7F6E\u4E3B\u8981\u5305\u62EC\`\u652F\u6301openai\u63A5\u53E3\u7684AI\u670D\u52A1\`\u6216\`\u672C\u5730\u7F51\u5173\u670D\u52A1\`

### \u652F\u6301openai\u63A5\u53E3\u7684AI\u670D\u52A1
\u4EE5qwen\u4E3A\u4F8B\uFF0C\u57FA\u672C\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
serviceName: qwen
serviceDomain: dashscope.aliyuncs.com
apiKey: [Your API Key]
servicePath: /compatible-mode/v1/chat/completions
jsonSchema:
  title: ReasoningSchema
  type: object
  properties:
    reasoning_steps:
      type: array
      items:
        type: string
      description: The reasoning steps leading to the final conclusion.
    answer:
      type: string
      description: The final answer, taking into account the reasoning steps.
  required:
    - reasoning_steps
    - answer
  additionalProperties: false
\`\`\`

### \u672C\u5730\u7F51\u5173\u670D\u52A1
\u4E3A\u4E86\u80FD\u590D\u7528\u5DF2\u7ECF\u914D\u7F6E\u597D\u7684\u670D\u52A1\uFF0C\u672C\u63D2\u4EF6\u4E5F\u652F\u6301\u914D\u7F6E\u672C\u5730\u7F51\u5173\u670D\u52A1\u3002\u4F8B\u5982\uFF0C\u82E5\u7F51\u5173\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86AI-proxy\u670D\u52A1\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u914D\u7F6E\u5982\u4E0B\uFF1A
1. \u521B\u5EFA\u4E00\u4E2A\u56FA\u5B9AIP\u5730\u5740\u4E3A127.0.0.1:80\u7684\u670D\u52A1\uFF0C\u4F8B\u5982localservice.static

2. \u914D\u7F6E\u6587\u4EF6\u4E2D\u6DFB\u52A0localservice.static\u7684\u670D\u52A1\u914D\u7F6E
\`\`\`yaml
serviceName: localservice
serviceDomain: 127.0.0.1
servicePort: 80
\`\`\`
3. \u81EA\u52A8\u63D0\u53D6\u8BF7\u6C42\u7684Path\uFF0CHeader\u7B49\u4FE1\u606F
\u63D2\u4EF6\u4F1A\u81EA\u52A8\u63D0\u53D6\u8BF7\u6C42\u7684Path\uFF0CHeader\u7B49\u4FE1\u606F\uFF0C\u4ECE\u800C\u907F\u514D\u5BF9AI\u670D\u52A1\u7684\u91CD\u590D\u914D\u7F6E\u3002
`},d=function(){return s},p=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:3,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:3,slug:"\u8BF7\u6C42\u548C\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E",text:"\u8BF7\u6C42\u548C\u8FD4\u56DE\u53C2\u6570\u8BF4\u660E"},{depth:2,slug:"\u8BF7\u6C42\u793A\u4F8B",text:"\u8BF7\u6C42\u793A\u4F8B"},{depth:2,slug:"\u8FD4\u56DE\u793A\u4F8B",text:"\u8FD4\u56DE\u793A\u4F8B"},{depth:3,slug:"\u6B63\u5E38\u8FD4\u56DE",text:"\u6B63\u5E38\u8FD4\u56DE"},{depth:3,slug:"\u5F02\u5E38\u8FD4\u56DE",text:"\u5F02\u5E38\u8FD4\u56DE"},{depth:3,slug:"\u9519\u8BEF\u7801\u8BF4\u660E",text:"\u9519\u8BEF\u7801\u8BF4\u660E"},{depth:2,slug:"\u670D\u52A1\u914D\u7F6E\u8BF4\u660E",text:"\u670D\u52A1\u914D\u7F6E\u8BF4\u660E"},{depth:3,slug:"\u652F\u6301openai\u63A5\u53E3\u7684ai\u670D\u52A1",text:"\u652F\u6301openai\u63A5\u53E3\u7684AI\u670D\u52A1"},{depth:3,slug:"\u672C\u5730\u7F51\u5173\u670D\u52A1",text:"\u672C\u5730\u7F51\u5173\u670D\u52A1"}]},e=c((m,u,g)=>{const{layout:F,...i}=t;return i.file=a,i.url=n,r`${v()}${E(s)}`})});export{e as Content,h as __tla,d as compiledContent,e as default,a as file,t as frontmatter,p as getHeadings,o as rawContent,n as url};
