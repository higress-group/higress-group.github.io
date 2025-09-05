import{c,__tla as o}from"./astro-component.B3fYMMDi.js";import{r as y,m as _,u as l,__tla as u}from"./constant.Cgp6cJPa.js";import{__tla as h}from"./astro/assets-service.DmDXK_Mj.js";let t,i,d,a,n,p,s,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">key-rate-limit</code>\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">10</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>

































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>\u9009\u586B\uFF0C<code dir="auto">limit_by_header</code>,<code dir="auto">limit_by_param</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 http \u8BF7\u6C42\u5934\u540D\u79F0</td></tr><tr><td>limit_by_param</td><td>string</td><td>\u9009\u586B\uFF0C<code dir="auto">limit_by_header</code>,<code dir="auto">limit_by_param</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0</td></tr><tr><td>limit_keys</td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570</td></tr></tbody></table>
<p><code dir="auto">limit_keys</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5339\u914D\u7684\u952E\u503C</td></tr><tr><td>query_per_second</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_minute</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_hour</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_day</td><td>number</td><td>\u9009\u586B\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42\u6B21\u6570</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_param: apikey\x7Flimit_keys:\x7F- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F  query_per_second: 10\x7F- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F  query_per_minute: 100"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="limit_by_header: x-ca-key\x7Flimit_keys:\x7F- key: 102234\x7F  query_per_second: 10\x7F- key: 308239\x7F  query_per_hour: 10"><div></div></button></div></figure></div>`,a={title:"\u57FA\u4E8E Key \u7684\u672C\u5730\u9650\u6D41",keywords:["higress","key rate limit"],description:"Key \u672C\u5730\u9650\u6D41\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003",githubHigressUrl:"https://github.com/alibaba/higress/tree/main/plugins/wasm-cpp/extensions/key_rate_limit"},d="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/key-rate-limit.md",s=void 0,p=function(){return"\n## \u529F\u80FD\u8BF4\u660E\n`key-rate-limit`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\n\n## \u8FD0\u884C\u5C5E\u6027\n\n\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A`\u9ED8\u8BA4\u9636\u6BB5`\n\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A`10`\n\n## \u914D\u7F6E\u5B57\u6BB5\n\n| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |\n| -------- | -------- | -------- | -------- | -------- |\n|  limit_by_header     |  string     | \u9009\u586B\uFF0C`limit_by_header`,`limit_by_param` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 http \u8BF7\u6C42\u5934\u540D\u79F0   |\n|  limit_by_param     |  string     | \u9009\u586B\uFF0C`limit_by_header`,`limit_by_param` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0   |\n|  limit_keys     |  array of object     | \u5FC5\u586B     |   -  |  \u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570   |\n\n`limit_keys`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\n\n| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |\n| -------- | -------- | -------- | -------- | -------- |\n|  key     |  string     | \u5FC5\u586B     |   -  |  \u5339\u914D\u7684\u952E\u503C |\n|  query_per_second     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42\u6B21\u6570 |\n|  query_per_minute     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42\u6B21\u6570 |\n|  query_per_hour     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570 |\n|  query_per_day     |  number     | \u9009\u586B\uFF0C`query_per_second`,`query_per_minute`,`query_per_hour`,`query_per_day` \u4E2D\u9009\u586B\u4E00\u9879     |   -  |  \u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42\u6B21\u6570 |\n\n## \u914D\u7F6E\u793A\u4F8B\n\n### \u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41\n```yaml\nlimit_by_param: apikey\nlimit_keys:\n- key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\n  query_per_second: 10\n- key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\n  query_per_minute: 100\n```\n\n### \u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41\n```yaml\nlimit_by_header: x-ca-key\nlimit_keys:\n- key: 102234\n  query_per_second: 10\n- key: 308239\n  query_per_hour: 10\n\n```\n"},i=function(){return e},n=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"}]},t=c((b,v,E)=>{const{layout:q,...r}=a;return r.file=d,r.url=s,y`${_()}${l(e)}`})});export{t as Content,m as __tla,i as compiledContent,t as default,d as file,a as frontmatter,n as getHeadings,p as rawContent,s as url};
