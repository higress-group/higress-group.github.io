import{c as p,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as v,u as E,__tla as y}from"./constant.C3qSKoyT.js";import{__tla as g}from"./astro/assets-service.BhtN0nM5.js";let e,d,a,t,l,c,n,h=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return g}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">ai-search</code>\u63D2\u4EF6\u901A\u8FC7\u96C6\u6210\u641C\u7D22\u5F15\u64CE\uFF08Google/Bing/Arxiv/Elasticsearch\u7B49\uFF09\u7684\u5B9E\u65F6\u7ED3\u679C\uFF0C\u589E\u5F3AAI\u6A21\u578B\u7684\u56DE\u7B54\u51C6\u786E\u6027\u548C\u65F6\u6548\u6027\u3002\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5C06\u641C\u7D22\u7ED3\u679C\u6CE8\u5165\u5230\u63D0\u793A\u6A21\u677F\u4E2D\uFF0C\u5E76\u6839\u636E\u914D\u7F6E\u51B3\u5B9A\u662F\u5426\u5728\u6700\u7EC8\u56DE\u7B54\u4E2D\u6DFB\u52A0\u5F15\u7528\u6765\u6E90\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">460</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>




































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>defaultEnable</td><td>bool</td><td>\u9009\u586B</td><td>true</td><td>\u63D2\u4EF6\u529F\u80FD\u9ED8\u8BA4\u662F\u5426\u5F00\u542F\u3002\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u4EC5\u5F53\u8BF7\u6C42\u4E2D\u5305\u542Bweb_search_options\u5B57\u6BB5\u65F6\u624D\u542F\u7528\u63D2\u4EF6\u529F\u80FD</td></tr><tr><td>needReference</td><td>bool</td><td>\u9009\u586B</td><td>false</td><td>\u662F\u5426\u5728\u56DE\u7B54\u4E2D\u6DFB\u52A0\u5F15\u7528\u6765\u6E90</td></tr><tr><td>referenceFormat</td><td>string</td><td>\u9009\u586B</td><td><code dir="auto">"**References:**\\n%s"</code></td><td>\u5F15\u7528\u5185\u5BB9\u683C\u5F0F\uFF0C\u5FC5\u987B\u5305\u542B%s\u5360\u4F4D\u7B26</td></tr><tr><td>referenceLocation</td><td>string</td><td>\u9009\u586B</td><td>\u201Dhead\u201D</td><td>\u5F15\u7528\u4F4D\u7F6E\uFF1A\u201Chead\u201D\u5728\u56DE\u7B54\u5F00\u5934\uFF0C\u201Ctail\u201D\u5728\u56DE\u7B54\u7ED3\u5C3E</td></tr><tr><td>defaultLang</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u9ED8\u8BA4\u641C\u7D22\u8BED\u8A00\u4EE3\u7801\uFF08\u5982zh-CN/en-US\uFF09</td></tr><tr><td>promptTemplate</td><td>string</td><td>\u9009\u586B</td><td>\u5185\u7F6E\u6A21\u677F</td><td>\u63D0\u793A\u6A21\u677F\uFF0C\u5FC5\u987B\u5305\u542B<code dir="auto">{search_results}</code>\u548C<code dir="auto">{question}</code>\u5360\u4F4D\u7B26</td></tr><tr><td>searchFrom</td><td>array of object</td><td>\u5FC5\u586B</td><td>-</td><td>\u53C2\u8003\u4E0B\u9762\u641C\u7D22\u5F15\u64CE\u914D\u7F6E\uFF0C\u81F3\u5C11\u914D\u7F6E\u4E00\u4E2A\u5F15\u64CE</td></tr><tr><td>searchRewrite</td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u641C\u7D22\u91CD\u5199\u914D\u7F6E\uFF0C\u7528\u4E8E\u4F7F\u7528LLM\u670D\u52A1\u4F18\u5316\u641C\u7D22\u67E5\u8BE2</td></tr></tbody></table>
<h2 id="\u641C\u7D22\u91CD\u5199\u8BF4\u660E">\u641C\u7D22\u91CD\u5199\u8BF4\u660E</h2>
<p>\u641C\u7D22\u91CD\u5199\u529F\u80FD\u4F7F\u7528LLM\u670D\u52A1\u5BF9\u7528\u6237\u7684\u539F\u59CB\u67E5\u8BE2\u8FDB\u884C\u5206\u6790\u548C\u4F18\u5316\uFF0C\u53EF\u4EE5\uFF1A</p>
<ol>
<li>\u8BC6\u522B\u7528\u6237\u95EE\u9898\u662F\u5426\u9700\u8981\u67E5\u8BE2\u641C\u7D22\u5F15\u64CE\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u4E0D\u4F1A\u6267\u884C\u641C\u7D22\u589E\u5F3A\u76F8\u5173\u903B\u8F91</li>
<li>\u5C06\u7528\u6237\u7684\u81EA\u7136\u8BED\u8A00\u67E5\u8BE2\u8F6C\u6362\u4E3A\u66F4\u9002\u5408\u641C\u7D22\u5F15\u64CE\u7684\u5173\u952E\u8BCD\u7EC4\u5408</li>
<li>\u5BF9\u4E8EArxiv\u8BBA\u6587\u641C\u7D22\uFF0C\u81EA\u52A8\u8BC6\u522B\u76F8\u5173\u7684\u8BBA\u6587\u7C7B\u522B\u5E76\u6DFB\u52A0\u7C7B\u522B\u9650\u5B9A</li>
<li>\u5BF9\u4E8E\u79C1\u6709\u77E5\u8BC6\u5E93\u641C\u7D22\uFF0C\u5C06\u957F\u67E5\u8BE2\u62C6\u5206\u6210\u591A\u4E2A\u7CBE\u51C6\u7684\u5173\u952E\u8BCD\u7EC4\u5408</li>
</ol>
<p>\u5F3A\u70C8\u5EFA\u8BAE\u5728\u4F7F\u7528Arxiv\u6216Elasticsearch\u5F15\u64CE\u65F6\u542F\u7528\u6B64\u529F\u80FD\u3002\u5BF9\u4E8EArxiv\u641C\u7D22\uFF0C\u5B83\u80FD\u51C6\u786E\u8BC6\u522B\u8BBA\u6587\u6240\u5C5E\u9886\u57DF\u5E76\u4F18\u5316\u82F1\u6587\u5173\u952E\u8BCD\uFF1B\u5BF9\u4E8E\u79C1\u6709\u77E5\u8BC6\u5E93\u641C\u7D22\uFF0C\u5B83\u80FD\u63D0\u4F9B\u66F4\u7CBE\u51C6\u7684\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u663E\u8457\u63D0\u5347\u641C\u7D22\u6548\u679C\u3002</p>
<h2 id="\u641C\u7D22\u91CD\u5199\u914D\u7F6E">\u641C\u7D22\u91CD\u5199\u914D\u7F6E</h2>





























































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>llmServiceName</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>LLM\u670D\u52A1\u540D\u79F0</td></tr><tr><td>llmServicePort</td><td>number</td><td>\u5FC5\u586B</td><td>-</td><td>LLM\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>llmApiKey</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>LLM\u670D\u52A1API\u5BC6\u94A5</td></tr><tr><td>llmUrl</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>LLM\u670D\u52A1API\u5730\u5740</td></tr><tr><td>llmModelName</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>LLM\u6A21\u578B\u540D\u79F0</td></tr><tr><td>timeoutMillisecond</td><td>number</td><td>\u9009\u586B</td><td>30000</td><td>API\u8C03\u7528\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</td></tr><tr><td>maxCount</td><td>number</td><td>\u9009\u586B</td><td>3</td><td>\u641C\u7D22\u91CD\u5199\u751F\u6210\u7684\u6700\u5927\u67E5\u8BE2\u6B21\u6570</td></tr></tbody></table>
<h2 id="\u641C\u7D22\u5F15\u64CE\u901A\u7528\u914D\u7F6E">\u641C\u7D22\u5F15\u64CE\u901A\u7528\u914D\u7F6E</h2>




































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>type</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u5F15\u64CE\u7C7B\u578B\uFF08google/bing/arxiv/elasticsearch/quark\uFF09</td></tr><tr><td>serviceName</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u540E\u7AEF\u670D\u52A1\u540D\u79F0</td></tr><tr><td>servicePort</td><td>number</td><td>\u5FC5\u586B</td><td>-</td><td>\u540E\u7AEF\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>apiKey</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u641C\u7D22\u5F15\u64CEAPI\u5BC6\u94A5/Aliyun AccessKey</td></tr><tr><td>count</td><td>number</td><td>\u9009\u586B</td><td>10</td><td>\u5355\u6B21\u641C\u7D22\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF</td></tr><tr><td>start</td><td>number</td><td>\u9009\u586B</td><td>0</td><td>\u641C\u7D22\u7ED3\u679C\u504F\u79FB\u91CF\uFF08\u4ECE\u7B2Cstart+1\u6761\u7ED3\u679C\u5F00\u59CB\u8FD4\u56DE\uFF09</td></tr><tr><td>timeoutMillisecond</td><td>number</td><td>\u9009\u586B</td><td>5000</td><td>API\u8C03\u7528\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</td></tr><tr><td>optionArgs</td><td>map</td><td>\u9009\u586B</td><td>-</td><td>\u641C\u7D22\u5F15\u64CE\u7279\u5B9A\u53C2\u6570\uFF08key-value\u683C\u5F0F\uFF09</td></tr></tbody></table>
<h2 id="google-\u7279\u5B9A\u914D\u7F6E">Google \u7279\u5B9A\u914D\u7F6E</h2>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>cx</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>Google\u81EA\u5B9A\u4E49\u641C\u7D22\u5F15\u64CEID\uFF0C\u7528\u4E8E\u6307\u5B9A\u641C\u7D22\u8303\u56F4</td></tr></tbody></table>
<h2 id="arxiv-\u7279\u5B9A\u914D\u7F6E">Arxiv \u7279\u5B9A\u914D\u7F6E</h2>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>arxivCategory</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u641C\u7D22\u7684\u8BBA\u6587<a href="https://arxiv.org/category_taxonomy" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u7C7B\u522B</a>\uFF08\u5982cs.AI, cs.CL\u7B49\uFF09</td></tr></tbody></table>
<h2 id="elasticsearch-\u7279\u5B9A\u914D\u7F6E">Elasticsearch \u7279\u5B9A\u914D\u7F6E</h2>





























































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>index</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8981\u641C\u7D22\u7684 Elasticsearch \u7D22\u5F15\u540D\u79F0</td></tr><tr><td>contentField</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8981\u67E5\u8BE2\u7684\u5185\u5BB9\u5B57\u6BB5\u540D\u79F0</td></tr><tr><td>semanticTextField</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>\u8981\u67E5\u8BE2\u7684 embedding \u5B57\u6BB5\u540D\u79F0</td></tr><tr><td>linkField</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u7ED3\u679C\u94FE\u63A5\u5B57\u6BB5\u540D\u79F0\uFF0C\u5F53\u914D\u7F6E <code dir="auto">needReference</code> \u65F6\u9700\u8981\u586B\u5199</td></tr><tr><td>titleField</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u7ED3\u679C\u6807\u9898\u5B57\u6BB5\u540D\u79F0\uFF0C\u5F53\u914D\u7F6E <code dir="auto">needReference</code> \u65F6\u9700\u8981\u586B\u5199</td></tr><tr><td>username</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>Elasticsearch \u7528\u6237\u540D</td></tr><tr><td>password</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>Elasticsearch \u5BC6\u7801</td></tr></tbody></table>
<p>\u6DF7\u5408\u641C\u7D22\u4E2D\u4F7F\u7528\u7684 <a href="https://www.elastic.co/guide/en/elasticsearch/reference/8.17/rrf.html" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Reciprocal Rank Fusion (RRF)</a> \u67E5\u8BE2\u8981\u6C42 Elasticsearch \u7684\u7248\u672C\u5728 8.8 \u53CA\u4EE5\u4E0A\u3002</p>
<p>\u76EE\u524D\u6587\u6863\u5411\u91CF\u5316\u4F9D\u8D56\u4E8E Elasticsearch \u7684 Embedding \u6A21\u578B\uFF0C\u8BE5\u529F\u80FD\u9700\u8981 Elasticsearch \u4F01\u4E1A\u7248 License\uFF0C\u6216\u53EF\u4F7F\u7528 30 \u5929\u7684 Trial License\u3002\u5B89\u88C5 Elasticsearch \u5185\u7F6E Embedding \u6A21\u578B\u7684\u6B65\u9AA4\u53EF\u53C2\u8003<a href="https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser#alternative-download-deploy" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8BE5\u6587\u6863</a>\uFF1B\u82E5\u9700\u5B89\u88C5\u7B2C\u4E09\u65B9 Embedding \u6A21\u578B\uFF0C\u53EF\u53C2\u8003<a href="https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-text-emb-vector-search-example" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u8BE5\u6587\u6863</a>\u3002</p>
<p>\u6709\u5173 ai-search \u63D2\u4EF6\u96C6\u6210 Elasticsearch \u7684\u5B8C\u6574\u6559\u7A0B\uFF0C\u8BF7\u53C2\u8003\uFF1A<a href="https://cr7258.github.io/blogs/original/2025/15-rag-higress-es-langchain" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u4F7F\u7528 LangChain + Higress + Elasticsearch \u6784\u5EFA RAG \u5E94\u7528</a>\u3002</p>
<h2 id="quark-\u7279\u5B9A\u914D\u7F6E">Quark \u7279\u5B9A\u914D\u7F6E</h2>



















<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>contentMode</td><td>string</td><td>\u9009\u586B</td><td>\u201Dsummary\u201D</td><td>\u5185\u5BB9\u6A21\u5F0F\uFF1A\u201Csummary\u201D\u4F7F\u7528\u6458\u8981(snippet)\uFF0C\u201Cfull\u201D\u4F7F\u7528\u6B63\u6587(\u4F18\u5148markdownText\uFF0C\u4E3A\u7A7A\u5219\u7528mainText)</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u57FA\u7840\u914D\u7F6E\u5355\u641C\u7D22\u5F15\u64CE">\u57FA\u7840\u914D\u7F6E\uFF08\u5355\u641C\u7D22\u5F15\u64CE\uFF09</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">needReference</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-google-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-engine-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">count</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">5</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">optionArgs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">fileType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"pdf"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="needReference: true\x7FsearchFrom:\x7F- type: google\x7F  apiKey: &#x22;your-google-api-key&#x22;\x7F  cx: &#x22;search-engine-id&#x22;\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7F  count: 5\x7F  optionArgs:\x7F    fileType: &#x22;pdf&#x22;"><div></div></button></div></figure></div>
<h3 id="arxiv\u641C\u7D22\u914D\u7F6E">Arxiv\u641C\u7D22\u914D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">arxiv</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"arxiv-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">arxivCategory</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cs.AI"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">count</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="searchFrom:\x7F- type: arxiv\x7F  serviceName: &#x22;arxiv-svc.dns&#x22;\x7F  servicePort: 443\x7F  arxivCategory: &#x22;cs.AI&#x22;\x7F  count: 10"><div></div></button></div></figure></div>
<h3 id="\u5938\u514B\u641C\u7D22\u914D\u7F6E">\u5938\u514B\u641C\u7D22\u914D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">quark</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"quark-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"quark api key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">contentMode</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"full"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u53EF\u9009\u503C\uFF1A"summary"(\u9ED8\u8BA4)\u6216"full"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="searchFrom:\x7F- type: quark\x7F  serviceName: &#x22;quark-svc.dns&#x22;\x7F  servicePort: 443\x7F  apiKey: &#x22;quark api key&#x22;\x7F  contentMode: &#x22;full&#x22;  # \u53EF\u9009\u503C\uFF1A&#x22;summary&#x22;(\u9ED8\u8BA4)\u6216&#x22;full&#x22;"><div></div></button></div></figure></div>
<h3 id="\u591A\u641C\u7D22\u5F15\u64CE\u914D\u7F6E">\u591A\u641C\u7D22\u5F15\u64CE\u914D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">defaultLang</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"en-US"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">promptTemplate</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF"># Search Results:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">{search_results}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF"># Please answer this question:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">{question}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"github-search-id"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u4E13\u95E8\u641C\u7D22GitHub\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"news-search-id"</span><span style="--0:#E1E4E8">    </span><span style="--0:#99A0A6"># \u4E13\u95E8\u641C\u7D22Google News\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bing</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bing-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"bing-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">optionArgs</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">answerCount</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"5"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="defaultLang: &#x22;en-US&#x22;\x7FpromptTemplate: |\x7F  # Search Results:\x7F  {search_results}\x7F\x7F  # Please answer this question:\x7F  {question}\x7FsearchFrom:\x7F- type: google\x7F  apiKey: &#x22;google-key&#x22;\x7F  cx: &#x22;github-search-id&#x22;  # \u4E13\u95E8\u641C\u7D22GitHub\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7F- type: google\x7F  apiKey: &#x22;google-key&#x22;\x7F  cx: &#x22;news-search-id&#x22;    # \u4E13\u95E8\u641C\u7D22Google News\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7F- type: bing\x7F  apiKey: &#x22;bing-key&#x22;\x7F  serviceName: &#x22;bing-svc.dns&#x22;\x7F  servicePort: 443\x7F  optionArgs:\x7F    answerCount: &#x22;5&#x22;"><div></div></button></div></figure></div>
<h3 id="\u5E76\u53D1\u67E5\u8BE2\u914D\u7F6E">\u5E76\u53D1\u67E5\u8BE2\u914D\u7F6E</h3>
<p>\u7531\u4E8E\u641C\u7D22\u5F15\u64CE\u5BF9\u5355\u6B21\u67E5\u8BE2\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF\u6709\u9650\u5236\uFF08\u5982Google\u9650\u5236\u5355\u6B21\u6700\u591A\u8FD4\u56DE100\u6761\u7ED3\u679C\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u83B7\u53D6\u66F4\u591A\u7ED3\u679C\uFF1A</p>
<ol>
<li>\u8BBE\u7F6E\u8F83\u5C0F\u7684count\u503C\uFF08\u598210\uFF09</li>
<li>\u901A\u8FC7start\u53C2\u6570\u6307\u5B9A\u7ED3\u679C\u504F\u79FB\u91CF</li>
<li>\u5E76\u53D1\u53D1\u8D77\u591A\u4E2A\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u7684start\u503C\u6309count\u9012\u589E</li>
</ol>
<p>\u4F8B\u5982\uFF0C\u8981\u83B7\u53D630\u6761\u7ED3\u679C\uFF0C\u53EF\u4EE5\u914D\u7F6Ecount=10\u5E76\u5E76\u53D1\u53D1\u8D7720\u4E2A\u67E5\u8BE2\uFF0C\u6BCF\u4E2A\u67E5\u8BE2\u7684start\u503C\u5206\u522B\u4E3A0,10,20\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-google-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-engine-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">start</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">count</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-google-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-engine-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">start</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">count</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-google-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-engine-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">start</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">20</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">count</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="searchFrom:\x7F- type: google\x7F  apiKey: &#x22;your-google-api-key&#x22;\x7F  cx: &#x22;search-engine-id&#x22;\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7F  start: 0\x7F  count: 10\x7F- type: google\x7F  apiKey: &#x22;your-google-api-key&#x22;\x7F  cx: &#x22;search-engine-id&#x22;\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7F  start: 10\x7F  count: 10\x7F- type: google\x7F  apiKey: &#x22;your-google-api-key&#x22;\x7F  cx: &#x22;search-engine-id&#x22;\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7F  start: 20\x7F  count: 10"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\uFF0C\u8FC7\u9AD8\u7684\u5E76\u53D1\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9650\u6D41\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u3002</p>
<h3 id="elasticsearch-\u914D\u7F6E\u7528\u4E8E\u5BF9\u63A5\u79C1\u6709\u77E5\u8BC6\u5E93">Elasticsearch \u914D\u7F6E\uFF08\u7528\u4E8E\u5BF9\u63A5\u79C1\u6709\u77E5\u8BC6\u5E93\uFF09</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">elasticsearch</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"es-svc.static"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">index</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"knowledge_base"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">contentField</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"content"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">semanticTextField</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"semantic_text"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># username: "elastic"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># password: "password"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="searchFrom:\x7F- type: elasticsearch\x7F  serviceName: &#x22;es-svc.static&#x22;\x7F  index: &#x22;knowledge_base&#x22;\x7F  contentField: &#x22;content&#x22;\x7F  semanticTextField: &#x22;semantic_text&#x22;\x7F  # username: &#x22;elastic&#x22;\x7F  # password: &#x22;password&#x22;"><div></div></button></div></figure></div>
<h3 id="\u81EA\u5B9A\u4E49\u5F15\u7528\u683C\u5F0F">\u81EA\u5B9A\u4E49\u5F15\u7528\u683C\u5F0F</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">needReference</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">referenceFormat</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"### \u6570\u636E\u6765\u6E90</span><span style="--0:#79B8FF">\\n</span><span style="--0:#9ECBFF">%s"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bing</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-bing-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-service.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="needReference: true\x7FreferenceFormat: &#x22;### \u6570\u636E\u6765\u6E90\\n%s&#x22;\x7FsearchFrom:\x7F- type: bing\x7F  apiKey: &#x22;your-bing-key&#x22;\x7F  serviceName: &#x22;search-service.dns&#x22;\x7F  servicePort: 8080"><div></div></button></div></figure></div>
<h3 id="\u81EA\u5B9A\u4E49\u5F15\u7528\u4F4D\u7F6E">\u81EA\u5B9A\u4E49\u5F15\u7528\u4F4D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">needReference</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">referenceLocation</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"tail"</span><span style="--0:#E1E4E8">  </span><span style="--0:#99A0A6"># \u5728\u56DE\u7B54\u7ED3\u5C3E\u6DFB\u52A0\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u5F00\u5934</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">bing</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-bing-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-service.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="needReference: true\x7FreferenceLocation: &#x22;tail&#x22;  # \u5728\u56DE\u7B54\u7ED3\u5C3E\u6DFB\u52A0\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u5F00\u5934\x7FsearchFrom:\x7F- type: bing\x7F  apiKey: &#x22;your-bing-key&#x22;\x7F  serviceName: &#x22;search-service.dns&#x22;\x7F  servicePort: 8080"><div></div></button></div></figure></div>
<h3 id="\u641C\u7D22\u91CD\u5199\u914D\u7F6E-1">\u641C\u7D22\u91CD\u5199\u914D\u7F6E</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-google-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-engine-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchRewrite</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmServiceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"llm-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmServicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmApiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-llm-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmUrl</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"https://api.example.com/v1/chat/completions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">llmModelName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"gpt-3.5-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">timeoutMillisecond</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">15000</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="searchFrom:\x7F- type: google\x7F  apiKey: &#x22;your-google-api-key&#x22;\x7F  cx: &#x22;search-engine-id&#x22;\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443\x7FsearchRewrite:\x7F  llmServiceName: &#x22;llm-svc.dns&#x22;\x7F  llmServicePort: 443\x7F  llmApiKey: &#x22;your-llm-api-key&#x22;\x7F  llmUrl: &#x22;https://api.example.com/v1/chat/completions&#x22;\x7F  llmModelName: &#x22;gpt-3.5-turbo&#x22;\x7F  timeoutMillisecond: 15000"><div></div></button></div></figure></div>
<h3 id="\u6309\u9700\u542F\u7528\u63D2\u4EF6\u914D\u7F6E">\u6309\u9700\u542F\u7528\u63D2\u4EF6\u914D\u7F6E</h3>
<p>\u914D\u7F6E\u63D2\u4EF6\u4EC5\u5728\u8BF7\u6C42\u4E2D\u5305\u542B<code dir="auto">web_search_options</code>\u5B57\u6BB5\u65F6\u624D\u542F\u7528\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">defaultEnable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">searchFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">google</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">apiKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-google-api-key"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cx</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"search-engine-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">serviceName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"google-svc.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">servicePort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="defaultEnable: false\x7FsearchFrom:\x7F- type: google\x7F  apiKey: &#x22;your-google-api-key&#x22;\x7F  cx: &#x22;search-engine-id&#x22;\x7F  serviceName: &#x22;google-svc.dns&#x22;\x7F  servicePort: 443"><div></div></button></div></figure></div>
<p>\u8FD9\u79CD\u914D\u7F6E\u53EF\u4EE5\u517C\u5BB9OpenAI\u7684\u641C\u7D22\u6A21\u578B\u534F\u8BAE\u3002\u5F53\u8BF7\u6C42\u4E2D\u5305\u542B<code dir="auto">web_search_options</code>\u5B57\u6BB5\u65F6\uFF0C\u5373\u4F7F\u662F\u7A7A\u5BF9\u8C61\uFF08<code dir="auto">"web_search_options": {}</code>\uFF09\uFF0C\u63D2\u4EF6\u4E5F\u4F1A\u88AB\u6FC0\u6D3B\u3002</p>
<h3 id="\u641C\u7D22\u4E0A\u4E0B\u6587\u5927\u5C0F\u914D\u7F6E">\u641C\u7D22\u4E0A\u4E0B\u6587\u5927\u5C0F\u914D\u7F6E</h3>
<p>\u901A\u8FC7\u5728\u8BF7\u6C42\u4E2D\u7684<code dir="auto">web_search_options</code>\u5B57\u6BB5\u4E2D\u6DFB\u52A0<code dir="auto">search_context_size</code>\u53C2\u6570\uFF0C\u53EF\u4EE5\u52A8\u6001\u8C03\u6574\u641C\u7D22\u67E5\u8BE2\u6B21\u6570\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"web_search_options"</span><span style="--0:#E1E4E8">: {</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">"search_context_size"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"medium"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;web_search_options&#x22;: {\x7F    &#x22;search_context_size&#x22;: &#x22;medium&#x22;\x7F  }\x7F}"><div></div></button></div></figure></div>
<p><code dir="auto">search_context_size</code>\u652F\u6301\u4E09\u4E2A\u7EA7\u522B\uFF1A</p>
<ul>
<li><code dir="auto">low</code>: \u751F\u62101\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9002\u5408\u7B80\u5355\u95EE\u9898\uFF09</li>
<li><code dir="auto">medium</code>: \u751F\u62103\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9ED8\u8BA4\u503C\uFF09</li>
<li><code dir="auto">high</code>: \u751F\u62105\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9002\u5408\u590D\u6742\u95EE\u9898\uFF09</li>
</ul>
<p>\u8FD9\u4E2A\u8BBE\u7F6E\u4F1A\u8986\u76D6\u914D\u7F6E\u4E2D\u7684<code dir="auto">maxCount</code>\u503C\uFF0C\u5141\u8BB8\u5BA2\u6237\u7AEF\u6839\u636E\u95EE\u9898\u590D\u6742\u5EA6\u52A8\u6001\u8C03\u6574\u641C\u7D22\u6DF1\u5EA6\u3002</p>
<h2 id="\u6CE8\u610F\u4E8B\u9879">\u6CE8\u610F\u4E8B\u9879</h2>
<ol>
<li>\u63D0\u793A\u8BCD\u6A21\u7248\u5FC5\u987B\u5305\u542B<code dir="auto">{search_results}</code>\u548C<code dir="auto">{question}</code>\u5360\u4F4D\u7B26\uFF0C\u53EF\u9009\u4F7F\u7528<code dir="auto">{cur_date}</code>\u63D2\u5165\u5F53\u524D\u65E5\u671F\uFF08\u683C\u5F0F\uFF1A2006\u5E741\u67082\u65E5\uFF09</li>
<li>\u9ED8\u8BA4\u6A21\u677F\u5305\u542B\u641C\u7D22\u7ED3\u679C\u5904\u7406\u6307\u5F15\u548C\u56DE\u7B54\u89C4\u8303\uFF0C\u5982\u65E0\u7279\u6B8A\u9700\u8981\u53EF\u4EE5\u76F4\u63A5\u7528\u9ED8\u8BA4\u6A21\u677F\uFF0C\u5426\u5219\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539</li>
<li>\u591A\u4E2A\u641C\u7D22\u5F15\u64CE\u662F\u5E76\u884C\u67E5\u8BE2\uFF0C\u603B\u8D85\u65F6\u65F6\u95F4 = \u6240\u6709\u641C\u7D22\u5F15\u64CE\u914D\u7F6E\u4E2D\u6700\u5927timeoutMillisecond\u503C + \u5904\u7406\u65F6\u95F4</li>
<li>Arxiv\u641C\u7D22\u4E0D\u9700\u8981API\u5BC6\u94A5\uFF0C\u4F46\u53EF\u4EE5\u6307\u5B9A\u8BBA\u6587\u7C7B\u522B\uFF08arxivCategory\uFF09\u6765\u7F29\u5C0F\u641C\u7D22\u8303\u56F4</li>
</ol>`,t={title:"AI \u641C\u7D22\u589E\u5F3A",keywords:["higress","ai search"],description:"higress \u652F\u6301\u901A\u8FC7\u96C6\u6210\u641C\u7D22\u5F15\u64CE\uFF08Google/Bing/Arxiv/Elasticsearch\u7B49\uFF09\u7684\u5B9E\u65F6\u7ED3\u679C\uFF0C\u589E\u5F3ADeepSeek-R1\u7B49\u6A21\u578B\u7B49\u56DE\u7B54\u51C6\u786E\u6027\u548C\u65F6\u6548\u6027"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-dev/ai-search.md",n=void 0,c=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`ai-search\`\u63D2\u4EF6\u901A\u8FC7\u96C6\u6210\u641C\u7D22\u5F15\u64CE\uFF08Google/Bing/Arxiv/Elasticsearch\u7B49\uFF09\u7684\u5B9E\u65F6\u7ED3\u679C\uFF0C\u589E\u5F3AAI\u6A21\u578B\u7684\u56DE\u7B54\u51C6\u786E\u6027\u548C\u65F6\u6548\u6027\u3002\u63D2\u4EF6\u4F1A\u81EA\u52A8\u5C06\u641C\u7D22\u7ED3\u679C\u6CE8\u5165\u5230\u63D0\u793A\u6A21\u677F\u4E2D\uFF0C\u5E76\u6839\u636E\u914D\u7F6E\u51B3\u5B9A\u662F\u5426\u5728\u6700\u7EC8\u56DE\u7B54\u4E2D\u6DFB\u52A0\u5F15\u7528\u6765\u6E90\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`460\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| defaultEnable | bool | \u9009\u586B | true | \u63D2\u4EF6\u529F\u80FD\u9ED8\u8BA4\u662F\u5426\u5F00\u542F\u3002\u8BBE\u7F6E\u4E3Afalse\u65F6\uFF0C\u4EC5\u5F53\u8BF7\u6C42\u4E2D\u5305\u542Bweb_search_options\u5B57\u6BB5\u65F6\u624D\u542F\u7528\u63D2\u4EF6\u529F\u80FD |
| needReference | bool | \u9009\u586B | false | \u662F\u5426\u5728\u56DE\u7B54\u4E2D\u6DFB\u52A0\u5F15\u7528\u6765\u6E90 |
| referenceFormat | string | \u9009\u586B | \`"**References:**\\n%s"\` | \u5F15\u7528\u5185\u5BB9\u683C\u5F0F\uFF0C\u5FC5\u987B\u5305\u542B%s\u5360\u4F4D\u7B26 |
| referenceLocation | string | \u9009\u586B | "head" | \u5F15\u7528\u4F4D\u7F6E\uFF1A"head"\u5728\u56DE\u7B54\u5F00\u5934\uFF0C"tail"\u5728\u56DE\u7B54\u7ED3\u5C3E |
| defaultLang | string | \u9009\u586B | - | \u9ED8\u8BA4\u641C\u7D22\u8BED\u8A00\u4EE3\u7801\uFF08\u5982zh-CN/en-US\uFF09 |
| promptTemplate | string | \u9009\u586B | \u5185\u7F6E\u6A21\u677F | \u63D0\u793A\u6A21\u677F\uFF0C\u5FC5\u987B\u5305\u542B\`{search_results}\`\u548C\`{question}\`\u5360\u4F4D\u7B26 |
| searchFrom | array of object | \u5FC5\u586B | - | \u53C2\u8003\u4E0B\u9762\u641C\u7D22\u5F15\u64CE\u914D\u7F6E\uFF0C\u81F3\u5C11\u914D\u7F6E\u4E00\u4E2A\u5F15\u64CE |
| searchRewrite | object | \u9009\u586B | - | \u641C\u7D22\u91CD\u5199\u914D\u7F6E\uFF0C\u7528\u4E8E\u4F7F\u7528LLM\u670D\u52A1\u4F18\u5316\u641C\u7D22\u67E5\u8BE2 |

## \u641C\u7D22\u91CD\u5199\u8BF4\u660E

\u641C\u7D22\u91CD\u5199\u529F\u80FD\u4F7F\u7528LLM\u670D\u52A1\u5BF9\u7528\u6237\u7684\u539F\u59CB\u67E5\u8BE2\u8FDB\u884C\u5206\u6790\u548C\u4F18\u5316\uFF0C\u53EF\u4EE5\uFF1A
1. \u8BC6\u522B\u7528\u6237\u95EE\u9898\u662F\u5426\u9700\u8981\u67E5\u8BE2\u641C\u7D22\u5F15\u64CE\uFF0C\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u4E0D\u4F1A\u6267\u884C\u641C\u7D22\u589E\u5F3A\u76F8\u5173\u903B\u8F91
2. \u5C06\u7528\u6237\u7684\u81EA\u7136\u8BED\u8A00\u67E5\u8BE2\u8F6C\u6362\u4E3A\u66F4\u9002\u5408\u641C\u7D22\u5F15\u64CE\u7684\u5173\u952E\u8BCD\u7EC4\u5408
3. \u5BF9\u4E8EArxiv\u8BBA\u6587\u641C\u7D22\uFF0C\u81EA\u52A8\u8BC6\u522B\u76F8\u5173\u7684\u8BBA\u6587\u7C7B\u522B\u5E76\u6DFB\u52A0\u7C7B\u522B\u9650\u5B9A
4. \u5BF9\u4E8E\u79C1\u6709\u77E5\u8BC6\u5E93\u641C\u7D22\uFF0C\u5C06\u957F\u67E5\u8BE2\u62C6\u5206\u6210\u591A\u4E2A\u7CBE\u51C6\u7684\u5173\u952E\u8BCD\u7EC4\u5408

\u5F3A\u70C8\u5EFA\u8BAE\u5728\u4F7F\u7528Arxiv\u6216Elasticsearch\u5F15\u64CE\u65F6\u542F\u7528\u6B64\u529F\u80FD\u3002\u5BF9\u4E8EArxiv\u641C\u7D22\uFF0C\u5B83\u80FD\u51C6\u786E\u8BC6\u522B\u8BBA\u6587\u6240\u5C5E\u9886\u57DF\u5E76\u4F18\u5316\u82F1\u6587\u5173\u952E\u8BCD\uFF1B\u5BF9\u4E8E\u79C1\u6709\u77E5\u8BC6\u5E93\u641C\u7D22\uFF0C\u5B83\u80FD\u63D0\u4F9B\u66F4\u7CBE\u51C6\u7684\u5173\u952E\u8BCD\u5339\u914D\uFF0C\u663E\u8457\u63D0\u5347\u641C\u7D22\u6548\u679C\u3002

## \u641C\u7D22\u91CD\u5199\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| llmServiceName | string | \u5FC5\u586B | - | LLM\u670D\u52A1\u540D\u79F0 |
| llmServicePort | number | \u5FC5\u586B | - | LLM\u670D\u52A1\u7AEF\u53E3 |
| llmApiKey | string | \u9009\u586B | - | LLM\u670D\u52A1API\u5BC6\u94A5 |
| llmUrl | string | \u5FC5\u586B | - | LLM\u670D\u52A1API\u5730\u5740 |
| llmModelName | string | \u5FC5\u586B | - | LLM\u6A21\u578B\u540D\u79F0 |
| timeoutMillisecond | number | \u9009\u586B | 30000 | API\u8C03\u7528\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09 |
| maxCount | number | \u9009\u586B | 3 | \u641C\u7D22\u91CD\u5199\u751F\u6210\u7684\u6700\u5927\u67E5\u8BE2\u6B21\u6570 |

## \u641C\u7D22\u5F15\u64CE\u901A\u7528\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| type | string | \u5FC5\u586B | - | \u5F15\u64CE\u7C7B\u578B\uFF08google/bing/arxiv/elasticsearch/quark\uFF09 |
| serviceName | string | \u5FC5\u586B | - | \u540E\u7AEF\u670D\u52A1\u540D\u79F0 |
| servicePort | number | \u5FC5\u586B | - | \u540E\u7AEF\u670D\u52A1\u7AEF\u53E3 |
| apiKey | string | \u5FC5\u586B | - | \u641C\u7D22\u5F15\u64CEAPI\u5BC6\u94A5/Aliyun AccessKey |
| count | number | \u9009\u586B | 10 | \u5355\u6B21\u641C\u7D22\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF |
| start | number | \u9009\u586B | 0 | \u641C\u7D22\u7ED3\u679C\u504F\u79FB\u91CF\uFF08\u4ECE\u7B2Cstart+1\u6761\u7ED3\u679C\u5F00\u59CB\u8FD4\u56DE\uFF09 |
| timeoutMillisecond | number | \u9009\u586B | 5000 | API\u8C03\u7528\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09 |
| optionArgs | map | \u9009\u586B | - | \u641C\u7D22\u5F15\u64CE\u7279\u5B9A\u53C2\u6570\uFF08key-value\u683C\u5F0F\uFF09 |

## Google \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| cx | string | \u5FC5\u586B | - | Google\u81EA\u5B9A\u4E49\u641C\u7D22\u5F15\u64CEID\uFF0C\u7528\u4E8E\u6307\u5B9A\u641C\u7D22\u8303\u56F4 |

## Arxiv \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| arxivCategory | string | \u9009\u586B | - | \u641C\u7D22\u7684\u8BBA\u6587[\u7C7B\u522B](https://arxiv.org/category_taxonomy)\uFF08\u5982cs.AI, cs.CL\u7B49\uFF09 |

## Elasticsearch \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                 |
|------|----------|------|--------|------------------------------------|
| index | string | \u5FC5\u586B   | - | \u8981\u641C\u7D22\u7684 Elasticsearch \u7D22\u5F15\u540D\u79F0            |
| contentField | string | \u5FC5\u586B   | - | \u8981\u67E5\u8BE2\u7684\u5185\u5BB9\u5B57\u6BB5\u540D\u79F0                         |
| semanticTextField | string | \u5FC5\u586B   | - | \u8981\u67E5\u8BE2\u7684 embedding \u5B57\u6BB5\u540D\u79F0                | 
| linkField | string | \u9009\u586B   | - | \u7ED3\u679C\u94FE\u63A5\u5B57\u6BB5\u540D\u79F0\uFF0C\u5F53\u914D\u7F6E \`needReference\` \u65F6\u9700\u8981\u586B\u5199 |
| titleField | string | \u9009\u586B   | - | \u7ED3\u679C\u6807\u9898\u5B57\u6BB5\u540D\u79F0\uFF0C\u5F53\u914D\u7F6E \`needReference\` \u65F6\u9700\u8981\u586B\u5199 |
| username | string | \u9009\u586B   | - | Elasticsearch \u7528\u6237\u540D                  |
| password | string | \u9009\u586B   | - | Elasticsearch \u5BC6\u7801                   |

\u6DF7\u5408\u641C\u7D22\u4E2D\u4F7F\u7528\u7684 [Reciprocal Rank Fusion (RRF)](https://www.elastic.co/guide/en/elasticsearch/reference/8.17/rrf.html) \u67E5\u8BE2\u8981\u6C42 Elasticsearch \u7684\u7248\u672C\u5728 8.8 \u53CA\u4EE5\u4E0A\u3002

\u76EE\u524D\u6587\u6863\u5411\u91CF\u5316\u4F9D\u8D56\u4E8E Elasticsearch \u7684 Embedding \u6A21\u578B\uFF0C\u8BE5\u529F\u80FD\u9700\u8981 Elasticsearch \u4F01\u4E1A\u7248 License\uFF0C\u6216\u53EF\u4F7F\u7528 30 \u5929\u7684 Trial License\u3002\u5B89\u88C5 Elasticsearch \u5185\u7F6E Embedding \u6A21\u578B\u7684\u6B65\u9AA4\u53EF\u53C2\u8003[\u8BE5\u6587\u6863](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-elser#alternative-download-deploy)\uFF1B\u82E5\u9700\u5B89\u88C5\u7B2C\u4E09\u65B9 Embedding \u6A21\u578B\uFF0C\u53EF\u53C2\u8003[\u8BE5\u6587\u6863](https://www.elastic.co/docs/explore-analyze/machine-learning/nlp/ml-nlp-text-emb-vector-search-example)\u3002

\u6709\u5173 ai-search \u63D2\u4EF6\u96C6\u6210 Elasticsearch \u7684\u5B8C\u6574\u6559\u7A0B\uFF0C\u8BF7\u53C2\u8003\uFF1A[\u4F7F\u7528 LangChain + Higress + Elasticsearch \u6784\u5EFA RAG \u5E94\u7528](https://cr7258.github.io/blogs/original/2025/15-rag-higress-es-langchain)\u3002

## Quark \u7279\u5B9A\u914D\u7F6E

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
|------|----------|----------|--------|------|
| contentMode | string | \u9009\u586B | "summary" | \u5185\u5BB9\u6A21\u5F0F\uFF1A"summary"\u4F7F\u7528\u6458\u8981(snippet)\uFF0C"full"\u4F7F\u7528\u6B63\u6587(\u4F18\u5148markdownText\uFF0C\u4E3A\u7A7A\u5219\u7528mainText) |

## \u914D\u7F6E\u793A\u4F8B

### \u57FA\u7840\u914D\u7F6E\uFF08\u5355\u641C\u7D22\u5F15\u64CE\uFF09

\`\`\`yaml
needReference: true
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  count: 5
  optionArgs:
    fileType: "pdf"
\`\`\`

### Arxiv\u641C\u7D22\u914D\u7F6E

\`\`\`yaml
searchFrom:
- type: arxiv
  serviceName: "arxiv-svc.dns" 
  servicePort: 443
  arxivCategory: "cs.AI"
  count: 10
\`\`\`


### \u5938\u514B\u641C\u7D22\u914D\u7F6E

\`\`\`yaml
searchFrom:
- type: quark
  serviceName: "quark-svc.dns" 
  servicePort: 443
  apiKey: "quark api key"
  contentMode: "full"  # \u53EF\u9009\u503C\uFF1A"summary"(\u9ED8\u8BA4)\u6216"full"
\`\`\`

### \u591A\u641C\u7D22\u5F15\u64CE\u914D\u7F6E

\`\`\`yaml
defaultLang: "en-US"
promptTemplate: |
  # Search Results:
  {search_results}
  
  # Please answer this question: 
  {question}
searchFrom:
- type: google
  apiKey: "google-key"
  cx: "github-search-id"  # \u4E13\u95E8\u641C\u7D22GitHub\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID
  serviceName: "google-svc.dns"
  servicePort: 443
- type: google
  apiKey: "google-key"
  cx: "news-search-id"    # \u4E13\u95E8\u641C\u7D22Google News\u5185\u5BB9\u7684\u641C\u7D22\u5F15\u64CEID 
  serviceName: "google-svc.dns"
  servicePort: 443
- type: bing
  apiKey: "bing-key"
  serviceName: "bing-svc.dns"
  servicePort: 443
  optionArgs:
    answerCount: "5"
\`\`\`

### \u5E76\u53D1\u67E5\u8BE2\u914D\u7F6E

\u7531\u4E8E\u641C\u7D22\u5F15\u64CE\u5BF9\u5355\u6B21\u67E5\u8BE2\u8FD4\u56DE\u7ED3\u679C\u6570\u91CF\u6709\u9650\u5236\uFF08\u5982Google\u9650\u5236\u5355\u6B21\u6700\u591A\u8FD4\u56DE100\u6761\u7ED3\u679C\uFF09\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u83B7\u53D6\u66F4\u591A\u7ED3\u679C\uFF1A
1. \u8BBE\u7F6E\u8F83\u5C0F\u7684count\u503C\uFF08\u598210\uFF09
2. \u901A\u8FC7start\u53C2\u6570\u6307\u5B9A\u7ED3\u679C\u504F\u79FB\u91CF
3. \u5E76\u53D1\u53D1\u8D77\u591A\u4E2A\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u7684start\u503C\u6309count\u9012\u589E

\u4F8B\u5982\uFF0C\u8981\u83B7\u53D630\u6761\u7ED3\u679C\uFF0C\u53EF\u4EE5\u914D\u7F6Ecount=10\u5E76\u5E76\u53D1\u53D1\u8D7720\u4E2A\u67E5\u8BE2\uFF0C\u6BCF\u4E2A\u67E5\u8BE2\u7684start\u503C\u5206\u522B\u4E3A0,10,20\uFF1A

\`\`\`yaml
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  start: 0
  count: 10
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  start: 10
  count: 10
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
  start: 20
  count: 10 
\`\`\`

\u6CE8\u610F\uFF0C\u8FC7\u9AD8\u7684\u5E76\u53D1\u53EF\u80FD\u4F1A\u5BFC\u81F4\u9650\u6D41\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574\u3002

### Elasticsearch \u914D\u7F6E\uFF08\u7528\u4E8E\u5BF9\u63A5\u79C1\u6709\u77E5\u8BC6\u5E93\uFF09

\`\`\`yaml
searchFrom:
- type: elasticsearch
  serviceName: "es-svc.static"
  index: "knowledge_base"
  contentField: "content"
  semanticTextField: "semantic_text"
  # username: "elastic"
  # password: "password"
\`\`\`

### \u81EA\u5B9A\u4E49\u5F15\u7528\u683C\u5F0F

\`\`\`yaml
needReference: true
referenceFormat: "### \u6570\u636E\u6765\u6E90\\n%s"
searchFrom:
- type: bing
  apiKey: "your-bing-key"
  serviceName: "search-service.dns"
  servicePort: 8080
\`\`\`

### \u81EA\u5B9A\u4E49\u5F15\u7528\u4F4D\u7F6E

\`\`\`yaml
needReference: true
referenceLocation: "tail"  # \u5728\u56DE\u7B54\u7ED3\u5C3E\u6DFB\u52A0\u5F15\u7528\uFF0C\u800C\u4E0D\u662F\u5F00\u5934
searchFrom:
- type: bing
  apiKey: "your-bing-key"
  serviceName: "search-service.dns"
  servicePort: 8080
\`\`\`

### \u641C\u7D22\u91CD\u5199\u914D\u7F6E

\`\`\`yaml
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
searchRewrite:
  llmServiceName: "llm-svc.dns"
  llmServicePort: 443
  llmApiKey: "your-llm-api-key"
  llmUrl: "https://api.example.com/v1/chat/completions"
  llmModelName: "gpt-3.5-turbo"
  timeoutMillisecond: 15000
\`\`\`

### \u6309\u9700\u542F\u7528\u63D2\u4EF6\u914D\u7F6E

\u914D\u7F6E\u63D2\u4EF6\u4EC5\u5728\u8BF7\u6C42\u4E2D\u5305\u542B\`web_search_options\`\u5B57\u6BB5\u65F6\u624D\u542F\u7528\uFF1A

\`\`\`yaml
defaultEnable: false
searchFrom:
- type: google
  apiKey: "your-google-api-key"
  cx: "search-engine-id"
  serviceName: "google-svc.dns"
  servicePort: 443
\`\`\`

\u8FD9\u79CD\u914D\u7F6E\u53EF\u4EE5\u517C\u5BB9OpenAI\u7684\u641C\u7D22\u6A21\u578B\u534F\u8BAE\u3002\u5F53\u8BF7\u6C42\u4E2D\u5305\u542B\`web_search_options\`\u5B57\u6BB5\u65F6\uFF0C\u5373\u4F7F\u662F\u7A7A\u5BF9\u8C61\uFF08\`"web_search_options": {}\`\uFF09\uFF0C\u63D2\u4EF6\u4E5F\u4F1A\u88AB\u6FC0\u6D3B\u3002

### \u641C\u7D22\u4E0A\u4E0B\u6587\u5927\u5C0F\u914D\u7F6E

\u901A\u8FC7\u5728\u8BF7\u6C42\u4E2D\u7684\`web_search_options\`\u5B57\u6BB5\u4E2D\u6DFB\u52A0\`search_context_size\`\u53C2\u6570\uFF0C\u53EF\u4EE5\u52A8\u6001\u8C03\u6574\u641C\u7D22\u67E5\u8BE2\u6B21\u6570\uFF1A

\`\`\`json
{
  "web_search_options": {
    "search_context_size": "medium"
  }
}
\`\`\`

\`search_context_size\`\u652F\u6301\u4E09\u4E2A\u7EA7\u522B\uFF1A
- \`low\`: \u751F\u62101\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9002\u5408\u7B80\u5355\u95EE\u9898\uFF09
- \`medium\`: \u751F\u62103\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9ED8\u8BA4\u503C\uFF09
- \`high\`: \u751F\u62105\u4E2A\u641C\u7D22\u67E5\u8BE2\uFF08\u9002\u5408\u590D\u6742\u95EE\u9898\uFF09

\u8FD9\u4E2A\u8BBE\u7F6E\u4F1A\u8986\u76D6\u914D\u7F6E\u4E2D\u7684\`maxCount\`\u503C\uFF0C\u5141\u8BB8\u5BA2\u6237\u7AEF\u6839\u636E\u95EE\u9898\u590D\u6742\u5EA6\u52A8\u6001\u8C03\u6574\u641C\u7D22\u6DF1\u5EA6\u3002

## \u6CE8\u610F\u4E8B\u9879

1. \u63D0\u793A\u8BCD\u6A21\u7248\u5FC5\u987B\u5305\u542B\`{search_results}\`\u548C\`{question}\`\u5360\u4F4D\u7B26\uFF0C\u53EF\u9009\u4F7F\u7528\`{cur_date}\`\u63D2\u5165\u5F53\u524D\u65E5\u671F\uFF08\u683C\u5F0F\uFF1A2006\u5E741\u67082\u65E5\uFF09
2. \u9ED8\u8BA4\u6A21\u677F\u5305\u542B\u641C\u7D22\u7ED3\u679C\u5904\u7406\u6307\u5F15\u548C\u56DE\u7B54\u89C4\u8303\uFF0C\u5982\u65E0\u7279\u6B8A\u9700\u8981\u53EF\u4EE5\u76F4\u63A5\u7528\u9ED8\u8BA4\u6A21\u677F\uFF0C\u5426\u5219\u8BF7\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u4FEE\u6539
3. \u591A\u4E2A\u641C\u7D22\u5F15\u64CE\u662F\u5E76\u884C\u67E5\u8BE2\uFF0C\u603B\u8D85\u65F6\u65F6\u95F4 = \u6240\u6709\u641C\u7D22\u5F15\u64CE\u914D\u7F6E\u4E2D\u6700\u5927timeoutMillisecond\u503C + \u5904\u7406\u65F6\u95F4
4. Arxiv\u641C\u7D22\u4E0D\u9700\u8981API\u5BC6\u94A5\uFF0C\u4F46\u53EF\u4EE5\u6307\u5B9A\u8BBA\u6587\u7C7B\u522B\uFF08arxivCategory\uFF09\u6765\u7F29\u5C0F\u641C\u7D22\u8303\u56F4`},d=function(){return s},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u641C\u7D22\u91CD\u5199\u8BF4\u660E",text:"\u641C\u7D22\u91CD\u5199\u8BF4\u660E"},{depth:2,slug:"\u641C\u7D22\u91CD\u5199\u914D\u7F6E",text:"\u641C\u7D22\u91CD\u5199\u914D\u7F6E"},{depth:2,slug:"\u641C\u7D22\u5F15\u64CE\u901A\u7528\u914D\u7F6E",text:"\u641C\u7D22\u5F15\u64CE\u901A\u7528\u914D\u7F6E"},{depth:2,slug:"google-\u7279\u5B9A\u914D\u7F6E",text:"Google \u7279\u5B9A\u914D\u7F6E"},{depth:2,slug:"arxiv-\u7279\u5B9A\u914D\u7F6E",text:"Arxiv \u7279\u5B9A\u914D\u7F6E"},{depth:2,slug:"elasticsearch-\u7279\u5B9A\u914D\u7F6E",text:"Elasticsearch \u7279\u5B9A\u914D\u7F6E"},{depth:2,slug:"quark-\u7279\u5B9A\u914D\u7F6E",text:"Quark \u7279\u5B9A\u914D\u7F6E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u57FA\u7840\u914D\u7F6E\u5355\u641C\u7D22\u5F15\u64CE",text:"\u57FA\u7840\u914D\u7F6E\uFF08\u5355\u641C\u7D22\u5F15\u64CE\uFF09"},{depth:3,slug:"arxiv\u641C\u7D22\u914D\u7F6E",text:"Arxiv\u641C\u7D22\u914D\u7F6E"},{depth:3,slug:"\u5938\u514B\u641C\u7D22\u914D\u7F6E",text:"\u5938\u514B\u641C\u7D22\u914D\u7F6E"},{depth:3,slug:"\u591A\u641C\u7D22\u5F15\u64CE\u914D\u7F6E",text:"\u591A\u641C\u7D22\u5F15\u64CE\u914D\u7F6E"},{depth:3,slug:"\u5E76\u53D1\u67E5\u8BE2\u914D\u7F6E",text:"\u5E76\u53D1\u67E5\u8BE2\u914D\u7F6E"},{depth:3,slug:"elasticsearch-\u914D\u7F6E\u7528\u4E8E\u5BF9\u63A5\u79C1\u6709\u77E5\u8BC6\u5E93",text:"Elasticsearch \u914D\u7F6E\uFF08\u7528\u4E8E\u5BF9\u63A5\u79C1\u6709\u77E5\u8BC6\u5E93\uFF09"},{depth:3,slug:"\u81EA\u5B9A\u4E49\u5F15\u7528\u683C\u5F0F",text:"\u81EA\u5B9A\u4E49\u5F15\u7528\u683C\u5F0F"},{depth:3,slug:"\u81EA\u5B9A\u4E49\u5F15\u7528\u4F4D\u7F6E",text:"\u81EA\u5B9A\u4E49\u5F15\u7528\u4F4D\u7F6E"},{depth:3,slug:"\u641C\u7D22\u91CD\u5199\u914D\u7F6E-1",text:"\u641C\u7D22\u91CD\u5199\u914D\u7F6E"},{depth:3,slug:"\u6309\u9700\u542F\u7528\u63D2\u4EF6\u914D\u7F6E",text:"\u6309\u9700\u542F\u7528\u63D2\u4EF6\u914D\u7F6E"},{depth:3,slug:"\u641C\u7D22\u4E0A\u4E0B\u6587\u5927\u5C0F\u914D\u7F6E",text:"\u641C\u7D22\u4E0A\u4E0B\u6587\u5927\u5C0F\u914D\u7F6E"},{depth:2,slug:"\u6CE8\u610F\u4E8B\u9879",text:"\u6CE8\u610F\u4E8B\u9879"}]},e=p((x,u,m)=>{const{layout:F,...i}=t;return i.file=a,i.url=n,r`${v()}${E(s)}`})});export{e as Content,h as __tla,d as compiledContent,e as default,a as file,t as frontmatter,l as getHeadings,c as rawContent,n as url};
