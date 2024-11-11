import{c,__tla as r}from"./astro-component.DIa0fJKh.js";import{r as y,m as o,u as _,__tla as E}from"./constant.Cs5LLcwe.js";import{__tla as v}from"./astro/assets-service.tyfV9CK3.js";let e,n,a,d,p,l,t,u=Promise.all([(()=>{try{return r}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return v}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">cluster-key-rate-limit</code> \u63D2\u4EF6\u57FA\u4E8E Redis \u5B9E\u73B0\u96C6\u7FA4\u9650\u6D41\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u8DE8\u591A\u4E2A Higress Gateway \u5B9E\u4F8B\u5B9E\u73B0\u5168\u5C40\u4E00\u81F4\u901F\u7387\u9650\u5236\u7684\u573A\u666F\u3002
\u9650\u6D41\u6240\u4F7F\u7528\u7684 Key \u53EF\u4EE5\u6765\u6E90\u4E8E URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3001\u5BA2\u6237\u7AEF IP \u5730\u5740\u3001\u6D88\u8D39\u8005\u540D\u79F0\u6216 Cookie \u4E2D\u7684 Key\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">20</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>






















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>rule_name</td><td>string</td><td>\u662F</td><td>-</td><td>\u9650\u6D41\u89C4\u5219\u540D\u79F0\uFF0C\u6839\u636E\u9650\u6D41\u89C4\u5219\u540D\u79F0 + \u9650\u6D41\u7C7B\u578B + \u9650\u6D41 key \u540D\u79F0 + \u9650\u6D41 key \u5BF9\u5E94\u7684\u5B9E\u9645\u503C\u6765\u62FC\u88C5 redis key</td></tr><tr><td>rule_items</td><td>array of object</td><td>\u662F</td><td>-</td><td>\u9650\u6D41\u89C4\u5219\u9879\uFF0C\u6309\u7167 rule_items \u4E0B\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2A rule_item \u540E\u547D\u4E2D\u9650\u6D41\u89C4\u5219\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565</td></tr><tr><td>show_limit_quota_header</td><td>bool</td><td>\u5426</td><td>false</td><td>\u54CD\u5E94\u5934\u4E2D\u662F\u5426\u663E\u793A <code dir="auto">X-RateLimit-Limit</code>\uFF08\u9650\u5236\u7684\u603B\u8BF7\u6C42\u6570\uFF09\u548C <code dir="auto">X-RateLimit-Remaining</code>\uFF08\u5269\u4F59\u8FD8\u53EF\u4EE5\u53D1\u9001\u7684\u8BF7\u6C42\u6570\uFF09</td></tr><tr><td>rejected_code</td><td>int</td><td>\u5426</td><td>429</td><td>\u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</td></tr><tr><td>rejected_msg</td><td>string</td><td>\u5426</td><td>Too many requests</td><td>\u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684\u54CD\u5E94\u4F53</td></tr><tr><td>redis</td><td>object</td><td>\u662F</td><td>-</td><td>redis \u76F8\u5173\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">rule_items</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002</p>


















































































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0</td></tr><tr><td>limit_by_param</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0</td></tr><tr><td>limit_by_consumer</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C</td></tr><tr><td>limit_by_cookie</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0</td></tr><tr><td>limit_by_per_header</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A HTTP \u8BF7\u6C42\u5934\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u8BF7\u6C42\u5934\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u914D\u7F6E <code dir="auto">limit_keys</code> \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 <code dir="auto">*</code></td></tr><tr><td>limit_by_per_param</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A URL \u53C2\u6570\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u53C2\u6570\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0\uFF0C\u914D\u7F6E <code dir="auto">limit_keys</code> \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 <code dir="auto">*</code></td></tr><tr><td>limit_by_per_consumer</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A consumer\uFF0C\u5E76\u5BF9\u6BCF\u4E2A consumer \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C\uFF0C\u914D\u7F6E <code dir="auto">limit_keys</code> \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 <code dir="auto">*</code></td></tr><tr><td>limit_by_per_cookie</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A Cookie\uFF0C\u5E76\u5BF9\u6BCF\u4E2A Cookie \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0\uFF0C\u914D\u7F6E <code dir="auto">limit_keys</code> \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 <code dir="auto">*</code></td></tr><tr><td>limit_by_per_ip</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A IP\uFF0C\u5E76\u5BF9\u6BCF\u4E2A IP \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 IP \u53C2\u6570\u540D\u79F0\uFF0C\u4ECE\u8BF7\u6C42\u5934\u83B7\u53D6\uFF0C\u4EE5 <code dir="auto">from-header-\u5BF9\u5E94\u7684header\u540D</code>\uFF0C\u793A\u4F8B\uFF1A<code dir="auto">from-header-x-forwarded-for</code>\uFF0C\u76F4\u63A5\u83B7\u53D6\u5BF9\u7AEF socket ip\uFF0C\u914D\u7F6E\u4E3A <code dir="auto">from-remote-addr</code></td></tr><tr><td>limit_keys</td><td>array of object</td><td>\u662F</td><td>-</td><td>\u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570</td></tr></tbody></table>
<p><code dir="auto">limit_keys</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002</p>















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u662F</td><td>-</td><td>\u5339\u914D\u7684\u952E\u503C\uFF0C<code dir="auto">limit_by_per_header</code>,<code dir="auto">limit_by_per_param</code>,<code dir="auto">limit_by_per_consumer</code>,<code dir="auto">limit_by_per_cookie</code> \u7C7B\u578B\u652F\u6301\u914D\u7F6E\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u4EE5regexp:\u5F00\u5934\u540E\u9762\u8DDF\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u6216\u8005*\uFF08\u4EE3\u8868\u6240\u6709\uFF09\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u793A\u4F8B\uFF1A<code dir="auto">regexp:^d.*</code>\uFF08\u4EE5d\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF09\uFF1B<code dir="auto">limit_by_per_ip</code>\u652F\u6301\u914D\u7F6E IP \u5730\u5740\u6216 IP \u6BB5</td></tr><tr><td>query_per_second</td><td>int</td><td>\u5426\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_minute</td><td>int</td><td>\u5426\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_hour</td><td>int</td><td>\u5426\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570</td></tr><tr><td>query_per_day</td><td>int</td><td>\u5426\uFF0C<code dir="auto">query_per_second</code>,<code dir="auto">query_per_minute</code>,<code dir="auto">query_per_hour</code>,<code dir="auto">query_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42\u6B21\u6570</td></tr></tbody></table>
<p><code dir="auto">redis</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002</p>















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>service_name</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local</td></tr><tr><td>service_port</td><td>int</td><td>\u5426</td><td>\u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379</td><td>\u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>username</td><td>string</td><td>\u5426</td><td>-</td><td>redis \u7528\u6237\u540D</td></tr><tr><td>password</td><td>string</td><td>\u5426</td><td>-</td><td>redis \u5BC6\u7801</td></tr><tr><td>timeout</td><td>int</td><td>\u5426</td><td>1000</td><td>redis \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_param: apikey\x7F  limit_keys:\x7F  - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F    query_per_minute: 10\x7F  - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F    query_per_hour: 100\x7F- limit_by_per_param: apikey\x7F  limit_keys:\x7F  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds\x7F  - key: &#x22;regexp:^a.*&#x22;\x7F    query_per_second: 10\x7F  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd\x7F  - key: &#x22;regexp:^b.*&#x22;\x7F    query_per_minute: 100\x7F  # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh\x7F  - key: &#x22;*&#x22;\x7F    query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_header: x-ca-key\x7F  limit_keys:\x7F  - key: 102234\x7F    query_per_minute: 10\x7F  - key: 308239\x7F    query_per_hour: 10\x7F- limit_by_per_header: x-ca-key\x7F  limit_keys:\x7F  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds\x7F  - key: &#x22;regexp:^a.*&#x22;\x7F    query_per_second: 10\x7F  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd\x7F  - key: &#x22;regexp:^b.*&#x22;\x7F    query_per_minute: 100\x7F  # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh\x7F  - key: &#x22;*&#x22;\x7F    query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="\u6839\u636E\u8BF7\u6C42\u5934-x-forwarded-for-\u83B7\u53D6\u5BF9\u7AEF-ip\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u6839\u636E\u8BF7\u6C42\u5934 x-forwarded-for \u83B7\u53D6\u5BF9\u7AEF IP\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_ip</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">from-header-x-forwarded-for</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u7CBE\u786E IP</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.1.1.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># IP \u6BB5\uFF0C\u7B26\u5408\u8FD9\u4E2A IP \u6BB5\u7684 IP\uFF0C\u6BCF\u4E2A IP 100qpd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">1.1.1.0/24</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5373\u9ED8\u8BA4\u6BCF\u4E2A IP 1000 qpd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">0.0.0.0/0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_per_ip: from-header-x-forwarded-for\x7F  limit_keys:\x7F  # \u7CBE\u786E IP\x7F  - key: 1.1.1.1\x7F    query_per_day: 10\x7F  # IP \u6BB5\uFF0C\u7B26\u5408\u8FD9\u4E2A IP \u6BB5\u7684 IP\uFF0C\u6BCF\u4E2A IP 100qpd\x7F  - key: 1.1.1.0/24\x7F    query_per_day: 100\x7F  # \u515C\u5E95\u7528\uFF0C\u5373\u9ED8\u8BA4\u6BCF\u4E2A IP 1000 qpd\x7F  - key: 0.0.0.0/0\x7F    query_per_day: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522B-consumer\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B consumer\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_consumer: &#x27;&#x27;\x7F  limit_keys:\x7F  - key: consumer1\x7F    query_per_second: 10\x7F  - key: consumer2\x7F    query_per_hour: 100\x7F- limit_by_per_consumer: &#x27;&#x27;\x7F  limit_keys:\x7F  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds\x7F  - key: &#x22;regexp:^a.*&#x22;\x7F    query_per_second: 10\x7F  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd\x7F  - key: &#x22;regexp:^b.*&#x22;\x7F    query_per_minute: 100\x7F  # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh\x7F  - key: &#x22;*&#x22;\x7F    query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522B-cookie-\u4E2D\u7684\u952E\u503C\u5BF9\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B Cookie \u4E2D\u7684\u952E\u503C\u5BF9\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"code":-1,"msg":"Too many requests"}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_cookie: key1\x7F    limit_keys:\x7F      - key: value1\x7F        query_per_minute: 10\x7F      - key: value2\x7F        query_per_hour: 100\x7F  - limit_by_per_cookie: key1\x7F    limit_keys:\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        query_per_second: 10\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        query_per_minute: 100\x7F      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh\x7F      - key: &#x22;*&#x22;\x7F        query_per_hour: 1000\x7Frejected_code: 200\x7Frejected_msg: &#x27;{&#x22;code&#x22;:-1,&#x22;msg&#x22;:&#x22;Too many requests&#x22;}&#x27;\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>`,d={title:"\u57FA\u4E8E Key \u96C6\u7FA4\u9650\u6D41",keywords:["higress","rate-limit"],description:"\u57FA\u4E8E Key \u96C6\u7FA4\u9650\u6D41\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/cluster-key-rate-limit.md",t=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E

\`cluster-key-rate-limit\` \u63D2\u4EF6\u57FA\u4E8E Redis \u5B9E\u73B0\u96C6\u7FA4\u9650\u6D41\uFF0C\u9002\u7528\u4E8E\u9700\u8981\u8DE8\u591A\u4E2A Higress Gateway \u5B9E\u4F8B\u5B9E\u73B0\u5168\u5C40\u4E00\u81F4\u901F\u7387\u9650\u5236\u7684\u573A\u666F\u3002
\u9650\u6D41\u6240\u4F7F\u7528\u7684 Key \u53EF\u4EE5\u6765\u6E90\u4E8E URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3001\u5BA2\u6237\u7AEF IP \u5730\u5740\u3001\u6D88\u8D39\u8005\u540D\u79F0\u6216 Cookie \u4E2D\u7684 Key\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`20\`

## \u914D\u7F6E\u8BF4\u660E

| \u914D\u7F6E\u9879                  | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                                          |
| ----------------------- | ------ | ---- | ------ |-----------------------------------------------------------------------------|
| rule_name               | string | \u662F | - | \u9650\u6D41\u89C4\u5219\u540D\u79F0\uFF0C\u6839\u636E\u9650\u6D41\u89C4\u5219\u540D\u79F0 + \u9650\u6D41\u7C7B\u578B + \u9650\u6D41 key \u540D\u79F0 + \u9650\u6D41 key \u5BF9\u5E94\u7684\u5B9E\u9645\u503C\u6765\u62FC\u88C5 redis key             |
| rule_items | array of object | \u662F   | -                 | \u9650\u6D41\u89C4\u5219\u9879\uFF0C\u6309\u7167 rule_items \u4E0B\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2A rule_item \u540E\u547D\u4E2D\u9650\u6D41\u89C4\u5219\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565                 |
| show_limit_quota_header | bool | \u5426 | false | \u54CD\u5E94\u5934\u4E2D\u662F\u5426\u663E\u793A \`X-RateLimit-Limit\`\uFF08\u9650\u5236\u7684\u603B\u8BF7\u6C42\u6570\uFF09\u548C \`X-RateLimit-Remaining\`\uFF08\u5269\u4F59\u8FD8\u53EF\u4EE5\u53D1\u9001\u7684\u8BF7\u6C42\u6570\uFF09 |
| rejected_code           | int | \u5426 | 429 | \u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801                                                         |
| rejected_msg            | string | \u5426 | Too many requests | \u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684\u54CD\u5E94\u4F53                                                               |
| redis                   | object          | \u662F                                                           | -                 | redis \u76F8\u5173\u914D\u7F6E                                                                  |

\`rule_items\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002

| \u914D\u7F6E\u9879                | \u7C7B\u578B            | \u5FC5\u586B                   | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                                                                                                                       |
| --------------------- | --------------- |----------------------| ------ |----------------------------------------------------------------------------------------------------------------------------------------------------------|
| limit_by_header       | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0                                                                                                                                   |
| limit_by_param        | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0                                                                                                                                     |
| limit_by_consumer     | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C                                                                                                                               |
| limit_by_cookie       | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0                                                                                                                               |
| limit_by_per_header   | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A HTTP \u8BF7\u6C42\u5934\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u8BF7\u6C42\u5934\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u914D\u7F6E \`limit_keys\` \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 \`*\`                                                                      |
| limit_by_per_param    | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A URL \u53C2\u6570\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u53C2\u6570\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0\uFF0C\u914D\u7F6E \`limit_keys\` \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 \`*\`                                                                           |
| limit_by_per_consumer | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A consumer\uFF0C\u5E76\u5BF9\u6BCF\u4E2A consumer \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C\uFF0C\u914D\u7F6E \`limit_keys\` \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 \`*\`                                                           |
| limit_by_per_cookie   | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A Cookie\uFF0C\u5E76\u5BF9\u6BCF\u4E2A Cookie \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0\uFF0C\u914D\u7F6E \`limit_keys\` \u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216 \`*\`                                                               |
| limit_by_per_ip       | string          | \u5426\uFF0C\`limit_by_*\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A IP\uFF0C\u5E76\u5BF9\u6BCF\u4E2A IP \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 IP \u53C2\u6570\u540D\u79F0\uFF0C\u4ECE\u8BF7\u6C42\u5934\u83B7\u53D6\uFF0C\u4EE5 \`from-header-\u5BF9\u5E94\u7684header\u540D\`\uFF0C\u793A\u4F8B\uFF1A\`from-header-x-forwarded-for\`\uFF0C\u76F4\u63A5\u83B7\u53D6\u5BF9\u7AEF socket ip\uFF0C\u914D\u7F6E\u4E3A \`from-remote-addr\` |
| limit_keys            | array of object | \u662F                    | -      | \u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570                                                                                                                                             |

\`limit_keys\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002

| \u914D\u7F6E\u9879           | \u7C7B\u578B   | \u5FC5\u586B                                                         | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                         |
| ---------------- | ------ | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| key              | string | \u662F                                                           | -      | \u5339\u914D\u7684\u952E\u503C\uFF0C\`limit_by_per_header\`,\`limit_by_per_param\`,\`limit_by_per_consumer\`,\`limit_by_per_cookie\` \u7C7B\u578B\u652F\u6301\u914D\u7F6E\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u4EE5regexp:\u5F00\u5934\u540E\u9762\u8DDF\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u6216\u8005*\uFF08\u4EE3\u8868\u6240\u6709\uFF09\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u793A\u4F8B\uFF1A\`regexp:^d.*\`\uFF08\u4EE5d\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF09\uFF1B\`limit_by_per_ip\`\u652F\u6301\u914D\u7F6E IP \u5730\u5740\u6216 IP \u6BB5 |
| query_per_second | int    | \u5426\uFF0C\`query_per_second\`,\`query_per_minute\`,\`query_per_hour\`,\`query_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42\u6B21\u6570                                             |
| query_per_minute | int    | \u5426\uFF0C\`query_per_second\`,\`query_per_minute\`,\`query_per_hour\`,\`query_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42\u6B21\u6570                                           |
| query_per_hour   | int    | \u5426\uFF0C\`query_per_second\`,\`query_per_minute\`,\`query_per_hour\`,\`query_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42\u6B21\u6570                                           |
| query_per_day    | int    | \u5426\uFF0C\`query_per_second\`,\`query_per_minute\`,\`query_per_hour\`,\`query_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42\u6B21\u6570                                             |

\`redis\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u3002

| \u914D\u7F6E\u9879       | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C                                                     | \u8BF4\u660E                                                                        |
| ------------ | ------ | ---- | ---------------------------------------------------------- |---------------------------------------------------------------------------|
| service_name | string | \u5FC5\u586B | -                                                          | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local |
| service_port | int    | \u5426   | \u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379 | \u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3                                                            |
| username     | string | \u5426   | -                                                          | redis \u7528\u6237\u540D                                                                 |
| password     | string | \u5426   | -                                                          | redis \u5BC6\u7801                                                                  |
| timeout      | int    | \u5426   | 1000                                                       | redis \u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2                                                         |

## \u914D\u7F6E\u793A\u4F8B

### \u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
- limit_by_param: apikey
  limit_keys:
  - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5
    query_per_minute: 10
  - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5
    query_per_hour: 100
- limit_by_per_param: apikey
  limit_keys:
  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds
  - key: "regexp:^a.*"
    query_per_second: 10
  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd
  - key: "regexp:^b.*"
    query_per_minute: 100
  # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh
  - key: "*"
    query_per_hour: 1000
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`

### \u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
- limit_by_header: x-ca-key
  limit_keys:
  - key: 102234
    query_per_minute: 10
  - key: 308239
    query_per_hour: 10
- limit_by_per_header: x-ca-key
  limit_keys:
  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds
  - key: "regexp:^a.*"
    query_per_second: 10
  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd
  - key: "regexp:^b.*"
    query_per_minute: 100
  # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A apikey \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh
  - key: "*"
    query_per_hour: 1000            
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`

### \u6839\u636E\u8BF7\u6C42\u5934 x-forwarded-for \u83B7\u53D6\u5BF9\u7AEF IP\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
- limit_by_per_ip: from-header-x-forwarded-for
  limit_keys:
  # \u7CBE\u786E IP
  - key: 1.1.1.1
    query_per_day: 10
  # IP \u6BB5\uFF0C\u7B26\u5408\u8FD9\u4E2A IP \u6BB5\u7684 IP\uFF0C\u6BCF\u4E2A IP 100qpd
  - key: 1.1.1.0/24
    query_per_day: 100
  # \u515C\u5E95\u7528\uFF0C\u5373\u9ED8\u8BA4\u6BCF\u4E2A IP 1000 qpd
  - key: 0.0.0.0/0
    query_per_day: 1000
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`

### \u8BC6\u522B consumer\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
- limit_by_consumer: ''
  limit_keys:
  - key: consumer1
    query_per_second: 10
  - key: consumer2
    query_per_hour: 100
- limit_by_per_consumer: ''
  limit_keys:
  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds
  - key: "regexp:^a.*"
    query_per_second: 10
  # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd
  - key: "regexp:^b.*"
    query_per_minute: 100
  # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A consumer \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh
  - key: "*"
    query_per_hour: 1000     
redis:
  service_name: redis.static
show_limit_quota_header: true 
\`\`\`

### \u8BC6\u522B Cookie \u4E2D\u7684\u952E\u503C\u5BF9\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_cookie: key1
    limit_keys:
      - key: value1
        query_per_minute: 10
      - key: value2
        query_per_hour: 100
  - limit_by_per_cookie: key1
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 a \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 10qds
      - key: "regexp:^a.*"
        query_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5 b \u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 100qd
      - key: "regexp:^b.*"
        query_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2A cookie \u4E2D\u7684 value \u5BF9\u5E94\u7684\u8BF7\u6C42 1000qdh
      - key: "*"
        query_per_hour: 1000
rejected_code: 200
rejected_msg: '{"code":-1,"msg":"Too many requests"}'
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`
`},n=function(){return s},p=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u6839\u636E\u8BF7\u6C42\u5934-x-forwarded-for-\u83B7\u53D6\u5BF9\u7AEF-ip\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u6839\u636E\u8BF7\u6C42\u5934 x-forwarded-for \u83B7\u53D6\u5BF9\u7AEF IP\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522B-consumer\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B consumer\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522B-cookie-\u4E2D\u7684\u952E\u503C\u5BF9\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B Cookie \u4E2D\u7684\u952E\u503C\u5BF9\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"}]},e=c((m,k,x)=>{const{layout:f,...i}=d;return i.file=a,i.url=t,y`${o()}${_(s)}`})});export{e as Content,u as __tla,n as compiledContent,e as default,a as file,d as frontmatter,p as getHeadings,l as rawContent,t as url};
