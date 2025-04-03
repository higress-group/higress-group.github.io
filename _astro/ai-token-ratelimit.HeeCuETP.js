import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r as E,m as v,u as r,__tla as y}from"./constant.G_0v9EW-.js";import{__tla as _}from"./astro/assets-service.BhtN0nM5.js";let e,d,a,n,t,l,i,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">ai-token-ratelimit</code>\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0token\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3001\u5BA2\u6237\u7AEF IP \u5730\u5740\u3001consumer \u540D\u79F0\u3001cookie\u4E2D key \u540D\u79F0</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">600</code></p>
<h2 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h2>















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>rule_name</td><td>string</td><td>\u662F</td><td>-</td><td>\u9650\u6D41\u89C4\u5219\u540D\u79F0\uFF0C\u6839\u636E\u9650\u6D41\u89C4\u5219\u540D\u79F0+\u9650\u6D41\u7C7B\u578B+\u9650\u6D41key\u540D\u79F0+\u9650\u6D41key\u5BF9\u5E94\u7684\u5B9E\u9645\u503C\u6765\u62FC\u88C5redis key</td></tr><tr><td>rule_items</td><td>array of object</td><td>\u662F</td><td>-</td><td>\u9650\u6D41\u89C4\u5219\u9879\uFF0C\u6309\u7167rule_items\u4E0B\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2Arule_item\u540E\u547D\u4E2D\u9650\u6D41\u89C4\u5219\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565</td></tr><tr><td>rejected_code</td><td>int</td><td>\u5426</td><td>429</td><td>\u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684HTTP\u72B6\u6001\u7801</td></tr><tr><td>rejected_msg</td><td>string</td><td>\u5426</td><td>Too many requests</td><td>\u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684\u54CD\u5E94\u4F53</td></tr><tr><td>redis</td><td>object</td><td>\u662F</td><td>-</td><td>redis\u76F8\u5173\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">rule_items</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>


















































































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0</td></tr><tr><td>limit_by_param</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0</td></tr><tr><td>limit_by_consumer</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C</td></tr><tr><td>limit_by_cookie</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0</td></tr><tr><td>limit_by_per_header</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A HTTP \u8BF7\u6C42\u5934\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u8BF7\u6C42\u5934\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u914D\u7F6E<code dir="auto">limit_keys</code>\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216<code dir="auto">*</code></td></tr><tr><td>limit_by_per_param</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A URL \u53C2\u6570\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u53C2\u6570\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0\uFF0C\u914D\u7F6E<code dir="auto">limit_keys</code>\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216<code dir="auto">*</code></td></tr><tr><td>limit_by_per_consumer</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A consumer\uFF0C\u5E76\u5BF9\u6BCF\u4E2A consumer \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C\uFF0C\u914D\u7F6E<code dir="auto">limit_keys</code>\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216<code dir="auto">*</code></td></tr><tr><td>limit_by_per_cookie</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A Cookie\uFF0C\u5E76\u5BF9\u6BCF\u4E2A Cookie \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0\uFF0C\u914D\u7F6E<code dir="auto">limit_keys</code>\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216<code dir="auto">*</code></td></tr><tr><td>limit_by_per_ip</td><td>string</td><td>\u5426\uFF0C<code dir="auto">limit_by_*</code>\u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A IP\uFF0C\u5E76\u5BF9\u6BCF\u4E2A IP \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 IP \u53C2\u6570\u540D\u79F0\uFF0C\u4ECE\u8BF7\u6C42\u5934\u83B7\u53D6\uFF0C\u4EE5<code dir="auto">from-header-\u5BF9\u5E94\u7684header\u540D</code>\uFF0C\u793A\u4F8B\uFF1A<code dir="auto">from-header-x-forwarded-for</code>\uFF0C\u76F4\u63A5\u83B7\u53D6\u5BF9\u7AEFsocket ip\uFF0C\u914D\u7F6E\u4E3A<code dir="auto">from-remote-addr</code></td></tr><tr><td>limit_keys</td><td>array of object</td><td>\u662F</td><td>-</td><td>\u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570</td></tr></tbody></table>
<p><code dir="auto">limit_keys</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u662F</td><td>-</td><td>\u5339\u914D\u7684\u952E\u503C\uFF0C<code dir="auto">limit_by_per_header</code>,<code dir="auto">limit_by_per_param</code>,<code dir="auto">limit_by_per_consumer</code>,<code dir="auto">limit_by_per_cookie</code> \u7C7B\u578B\u652F\u6301\u914D\u7F6E\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u4EE5regexp:\u5F00\u5934\u540E\u9762\u8DDF\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u6216\u8005*\uFF08\u4EE3\u8868\u6240\u6709\uFF09\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u793A\u4F8B\uFF1A<code dir="auto">regexp:^d.*</code>\uFF08\u4EE5d\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF09\uFF1B<code dir="auto">limit_by_per_ip</code>\u652F\u6301\u914D\u7F6E IP \u5730\u5740\u6216 IP \u6BB5</td></tr><tr><td>token_per_second</td><td>int</td><td>\u5426\uFF0C<code dir="auto">token_per_second</code>,<code dir="auto">token_per_minute</code>,<code dir="auto">token_per_hour</code>,<code dir="auto">token_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42token\u6570</td></tr><tr><td>token_per_minute</td><td>int</td><td>\u5426\uFF0C<code dir="auto">token_per_second</code>,<code dir="auto">token_per_minute</code>,<code dir="auto">token_per_hour</code>,<code dir="auto">token_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42token\u6570</td></tr><tr><td>token_per_hour</td><td>int</td><td>\u5426\uFF0C<code dir="auto">token_per_second</code>,<code dir="auto">token_per_minute</code>,<code dir="auto">token_per_hour</code>,<code dir="auto">token_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42token\u6570</td></tr><tr><td>token_per_day</td><td>int</td><td>\u5426\uFF0C<code dir="auto">token_per_second</code>,<code dir="auto">token_per_minute</code>,<code dir="auto">token_per_hour</code>,<code dir="auto">token_per_day</code> \u4E2D\u9009\u586B\u4E00\u9879</td><td>-</td><td>\u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42token\u6570</td></tr></tbody></table>
<p><code dir="auto">redis</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E</p>















































<table><thead><tr><th>\u914D\u7F6E\u9879</th><th>\u7C7B\u578B</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>service_name</td><td>string</td><td>\u5FC5\u586B</td><td>-</td><td>redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local</td></tr><tr><td>service_port</td><td>int</td><td>\u5426</td><td>\u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379</td><td>\u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3</td></tr><tr><td>username</td><td>string</td><td>\u5426</td><td>-</td><td>redis\u7528\u6237\u540D</td></tr><tr><td>password</td><td>string</td><td>\u5426</td><td>-</td><td>redis\u5BC6\u7801</td></tr><tr><td>timeout</td><td>int</td><td>\u5426</td><td>1000</td><td>redis\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">         </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_param: apikey\x7F    limit_keys:\x7F      - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F        token_per_minute: 10\x7F      - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F        token_per_hour: 100\x7F  - limit_by_per_param: apikey\x7F    limit_keys:\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F         token_per_second: 10\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_header: x-ca-key\x7F    limit_keys:\x7F      - key: 102234\x7F        token_per_minute: 10\x7F      - key: 308239\x7F        token_per_hour: 10\x7F  - limit_by_per_header: x-ca-key\x7F    limit_keys:\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="\u6839\u636E\u8BF7\u6C42\u5934-x-forwarded-for-\u83B7\u53D6\u5BF9\u7AEFip\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u6839\u636E\u8BF7\u6C42\u5934 x-forwarded-for \u83B7\u53D6\u5BF9\u7AEFIP\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_ip</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">from-header-x-forwarded-for</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u7CBE\u786Eip</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.1.1.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># ip\u6BB5\uFF0C\u7B26\u5408\u8FD9\u4E2Aip\u6BB5\u7684ip\uFF0C\u6BCF\u4E2Aip 100qpd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">1.1.1.0/24</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5373\u9ED8\u8BA4\u6BCF\u4E2Aip 1000qpd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">0.0.0.0/0</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_per_ip: from-header-x-forwarded-for\x7F    limit_keys:\x7F      # \u7CBE\u786Eip\x7F      - key: 1.1.1.1\x7F        token_per_day: 10\x7F      # ip\u6BB5\uFF0C\u7B26\u5408\u8FD9\u4E2Aip\u6BB5\u7684ip\uFF0C\u6BCF\u4E2Aip 100qpd\x7F      - key: 1.1.1.0/24\x7F        token_per_day: 100\x7F      # \u515C\u5E95\u7528\uFF0C\u5373\u9ED8\u8BA4\u6BCF\u4E2Aip 1000qpd\x7F      - key: 0.0.0.0/0\x7F        token_per_day: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522Bconsumer\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522Bconsumer\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C4210qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C42100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_consumer: &#x27;&#x27;\x7F    limit_keys:\x7F      - key: consumer1\x7F        token_per_second: 10\x7F      - key: consumer2\x7F        token_per_hour: 100\x7F  - limit_by_per_consumer: &#x27;&#x27;\x7F    limit_keys:\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C4210qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C42100qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="\u8BC6\u522Bcookie\u4E2D\u7684\u952E\u503C\u5BF9\u8FDB\u884C\u533A\u522B\u9650\u6D41">\u8BC6\u522Bcookie\u4E2D\u7684\u952E\u503C\u5BF9\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C4210qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C42100qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"code":-1,"msg":"Too many requests"}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_cookie: key1\x7F    limit_keys:\x7F      - key: value1\x7F        token_per_minute: 10\x7F      - key: value2\x7F        token_per_hour: 100\x7F  - limit_by_per_cookie: key1\x7F    limit_keys:\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C4210qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C42100qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Frejected_code: 200\x7Frejected_msg: &#x27;{&#x22;code&#x22;:-1,&#x22;msg&#x22;:&#x22;Too many requests&#x22;}&#x27;\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h2 id="\u5B8C\u6574\u793A\u4F8B">\u5B8C\u6574\u793A\u4F8B</h2>
<p>AI Token \u9650\u6D41\u63D2\u4EF6\u4F9D\u8D56 Redis \u8BB0\u5F55\u5269\u4F59\u53EF\u7528\u7684 token \u6570\uFF0C\u56E0\u6B64\u9996\u5148\u9700\u8981\u90E8\u7F72 Redis \u670D\u52A1\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: redis\x7F  labels:\x7F    app: redis\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: redis\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: redis\x7F    spec:\x7F      containers:\x7F      - name: redis\x7F        image: redis\x7F        ports:\x7F        - containerPort: 6379\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: redis\x7F  labels:\x7F    app: redis\x7Fspec:\x7F  ports:\x7F  - port: 6379\x7F    targetPort: 6379\x7F  selector:\x7F    app: redis\x7F---"><div></div></button></div></figure></div>
<p>\u5728\u672C\u4F8B\u4E2D\uFF0C\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u4F5C\u4E3A AI \u670D\u52A1\u63D0\u4F9B\u5546\u3002\u53E6\u5916\u8FD8\u9700\u8981\u8BBE\u7F6E AI \u7EDF\u8BA1\u63D2\u4EF6\uFF0C\u56E0\u4E3A AI Token \u9650\u6D41\u63D2\u4EF6\u4F9D\u8D56 AI \u7EDF\u8BA1\u63D2\u4EF6\u8BA1\u7B97\u6BCF\u6B21\u8BF7\u6C42\u6D88\u8017\u7684 token \u6570\uFF0C\u4EE5\u4E0B\u914D\u7F6E\u9650\u5236\u6BCF\u5206\u949F\u7684 input \u548C output token \u603B\u6570\u4E3A 200 \u4E2A\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"&#x3C;YOUR_API_TOKEN>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'gpt-35-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'gpt-4-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai-token-ratelimit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_limit_by_param_apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">123456</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u51CF\u8F7B\u6570\u636E\u9762\u7684\u538B\u529B\uFF0CHigress \u7684 global.onlyPushRouteCluster \u914D\u7F6E\u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A true\uFF0C\u610F\u5473\u7740\u4E0D\u4F1A\u81EA\u52A8\u53D1\u73B0 Kubernetes Service</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u5982\u679C\u9700\u8981\u4F7F\u7528 Kubernetes Service \u4F5C\u4E3A\u670D\u52A1\u53D1\u73B0\uFF0C\u53EF\u4EE5\u5C06 global.onlyPushRouteCluster \u53C2\u6570\u8BBE\u7F6E\u4E3A false\uFF0C</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># \u8FD9\u6837\u5C31\u53EF\u4EE5\u76F4\u63A5\u5C06 service_name \u8BBE\u7F6E\u4E3A Kubernetes Service, \u800C\u65E0\u987B\u4E3A Redis \u521B\u5EFA McpBridge \u4EE5\u53CA Ingress \u8DEF\u7531</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># service_name: redis.default.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-ratelimit:1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">600</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: ai-proxy\x7F  namespace: higress-system\x7Fspec:\x7F  matchRules:\x7F  - config:\x7F      provider:\x7F        type: qwen\x7F        apiTokens:\x7F        - &#x22;<YOUR_API_TOKEN>&#x22;\x7F        modelMapping:\x7F          &#x27;gpt-3&#x27;: &#x22;qwen-turbo&#x22;\x7F          &#x27;gpt-35-turbo&#x27;: &#x22;qwen-plus&#x22;\x7F          &#x27;gpt-4-turbo&#x27;: &#x22;qwen-max&#x22;\x7F          &#x27;*&#x27;: &#x22;qwen-turbo&#x22;\x7F    ingress:\x7F    - qwen\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 100\x7F---\x7FapiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: ai-token-ratelimit\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    rule_name: default_limit_by_param_apikey\x7F    rule_items:\x7F    - limit_by_param: apikey\x7F      limit_keys:\x7F      - key: 123456\x7F        token_per_minute: 200\x7F    redis:\x7F      # \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u51CF\u8F7B\u6570\u636E\u9762\u7684\u538B\u529B\uFF0CHigress \u7684 global.onlyPushRouteCluster \u914D\u7F6E\u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A true\uFF0C\u610F\u5473\u7740\u4E0D\u4F1A\u81EA\u52A8\u53D1\u73B0 Kubernetes Service\x7F      # \u5982\u679C\u9700\u8981\u4F7F\u7528 Kubernetes Service \u4F5C\u4E3A\u670D\u52A1\u53D1\u73B0\uFF0C\u53EF\u4EE5\u5C06 global.onlyPushRouteCluster \u53C2\u6570\u8BBE\u7F6E\u4E3A false\uFF0C\x7F      # \u8FD9\u6837\u5C31\u53EF\u4EE5\u76F4\u63A5\u5C06 service_name \u8BBE\u7F6E\u4E3A Kubernetes Service, \u800C\u65E0\u987B\u4E3A Redis \u521B\u5EFA McpBridge \u4EE5\u53CA Ingress \u8DEF\u7531\x7F      # service_name: redis.default.svc.cluster.local\x7F      service_name: redis.dns\x7F      service_port: 6379\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-ratelimit:1.0.0\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 600"><div></div></button></div></figure></div>
<p>\u6CE8\u610F\uFF0CAI Token \u9650\u6D41\u63D2\u4EF6\u4E2D\u7684 Redis \u914D\u7F6E\u9879 <code dir="auto">service_name</code> \u6765\u81EA McpBridge \u4E2D\u914D\u7F6E\u7684\u670D\u52A1\u6765\u6E90\uFF0C\u53E6\u5916\u6211\u4EEC\u8FD8\u9700\u8981\u5728 McpBridge \u4E2D\u914D\u7F6E\u901A\u4E49\u5343\u95EE\u670D\u52A1\u7684\u8BBF\u95EE\u5730\u5740\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.default.svc.cluster.local</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Kubernetes Service</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: dashscope.aliyuncs.com\x7F    name: qwen\x7F    port: 443\x7F    type: dns\x7F  - domain: redis.default.svc.cluster.local # Kubernetes Service\x7F    name: redis\x7F    type: dns\x7F    port: 6379"><div></div></button></div></figure></div>
<p>\u5206\u522B\u521B\u5EFA\u4E24\u6761\u8DEF\u7531\u89C4\u5219\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPS</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-server-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"on"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/resource-definer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/ignore-path-case</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"false"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/resource-definer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: HTTPS\x7F    higress.io/destination: qwen.dns\x7F    higress.io/proxy-ssl-name: dashscope.aliyuncs.com\x7F    higress.io/proxy-ssl-server-name: &#x22;on&#x22;\x7F  labels:\x7F    higress.io/resource-definer: higress\x7F  name: qwen\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: qwen-test.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: redis.dns\x7F    higress.io/ignore-path-case: &#x22;false&#x22;\x7F  labels:\x7F    higress.io/resource-definer: higress\x7F  name: redis\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>\u8F6C\u53D1 higress-gateway \u7684\u6D41\u91CF\u5230\u672C\u5730\uFF0C\u65B9\u4FBF\u8FDB\u884C\u6D4B\u8BD5\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">18000:80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward svc/higress-gateway -n higress-system 18000:80"><div></div></button></div></figure></div>
<p>\u89E6\u53D1\u9650\u6D41\u6548\u679C\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://localhost:18000/v1/chat/completions?apikey=123456"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Host: qwen-test.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"stream": false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"id"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"88cfa80f-545d-93b4-8ff3-3f5245ca33ba"</span><span style="--0:#B392F0">,</span><span style="--0:#B392F0">"choices"</span><span style="--0:#79B8FF">:</span><span style="--0:#9ECBFF">[{</span><span style="--0:#E1E4E8">"</span><span style="--0:#B392F0">index</span><span style="--0:#B392F0">":0,"</span><span style="--0:#B392F0">message</span><span style="--0:#B392F0">":{"</span><span style="--0:#B392F0">role</span><span style="--0:#B392F0">":"</span><span style="--0:#B392F0">assistant</span><span style="--0:#B392F0">","</span><span style="--0:#B392F0">content</span><span style="--0:#B392F0">":"</span><span style="--0:#B392F0">\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F</span><span style="--0:#B392F0">"},"</span><span style="--0:#B392F0">finish_reason</span><span style="--0:#B392F0">":"</span><span style="--0:#B392F0">stop</span><span style="--0:#B392F0">"}],"</span><span style="--0:#B392F0">created</span><span style="--0:#B392F0">":1719909825,"</span><span style="--0:#B392F0">model</span><span style="--0:#B392F0">":"</span><span style="--0:#B392F0">qwen-turbo</span><span style="--0:#B392F0">","</span><span style="--0:#B392F0">object</span><span style="--0:#B392F0">":"</span><span style="--0:#B392F0">chat.completion</span><span style="--0:#B392F0">","</span><span style="--0:#B392F0">usage</span><span style="--0:#B392F0">":{"</span><span style="--0:#B392F0">prompt_tokens</span><span style="--0:#B392F0">":13,"</span><span style="--0:#B392F0">completion_tokens</span><span style="--0:#B392F0">":33,"</span><span style="--0:#B392F0">total_tokens</span><span style="--0:#B392F0">":46}}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl "</span><span style="--0:#B392F0">http://qwen-test.com:18000/v1/chat/completions?apikey</span><span style="--0:#9ECBFF">=123456</span><span style="--0:#B392F0">" -H "</span><span style="--0:#B392F0">Content-Type:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">application/json"  -d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"stream": false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">Too many requests  # \u9650\u6D41\u6210\u529F</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x22;http://localhost:18000/v1/chat/completions?apikey=123456&#x22; \\\x7F-H &#x22;Host: qwen-test.com&#x22; \\\x7F-H &#x22;Content-Type: application/json&#x22;  \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ],\x7F  &#x22;stream&#x22;: false\x7F}&#x27;\x7F{&#x22;id&#x22;:&#x22;88cfa80f-545d-93b4-8ff3-3f5245ca33ba&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22;\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1719909825,&#x22;model&#x22;:&#x22;qwen-turbo&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:13,&#x22;completion_tokens&#x22;:33,&#x22;total_tokens&#x22;:46}}\x7Fcurl &#x22;http://qwen-test.com:18000/v1/chat/completions?apikey=123456&#x22; -H &#x22;Content-Type: application/json&#x22;  -d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F&#x22;\x7F    }\x7F  ],\x7F  &#x22;stream&#x22;: false\x7F}&#x27;\x7FToo many requests  # \u9650\u6D41\u6210\u529F"><div></div></button></div></figure></div>`,n={title:"AI Token\u9650\u6D41",keywords:["AI\u7F51\u5173","AI token\u9650\u6D41"],description:"AI Token\u9650\u6D41\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/ai/api-consumer/ai-token-ratelimit.md",i=void 0,l=function(){return`

## \u529F\u80FD\u8BF4\u660E

\`ai-token-ratelimit\`\u63D2\u4EF6\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7279\u5B9A\u952E\u503C\u5B9E\u73B0token\u9650\u6D41\uFF0C\u952E\u503C\u6765\u6E90\u53EF\u4EE5\u662F URL \u53C2\u6570\u3001HTTP \u8BF7\u6C42\u5934\u3001\u5BA2\u6237\u7AEF IP \u5730\u5740\u3001consumer \u540D\u79F0\u3001cookie\u4E2D key \u540D\u79F0

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u9ED8\u8BA4\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`600\`

## \u914D\u7F6E\u8BF4\u660E

| \u914D\u7F6E\u9879                  | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                                        |
| ----------------------- | ------ | ---- | ------ |---------------------------------------------------------------------------|
| rule_name               | string | \u662F | - | \u9650\u6D41\u89C4\u5219\u540D\u79F0\uFF0C\u6839\u636E\u9650\u6D41\u89C4\u5219\u540D\u79F0+\u9650\u6D41\u7C7B\u578B+\u9650\u6D41key\u540D\u79F0+\u9650\u6D41key\u5BF9\u5E94\u7684\u5B9E\u9645\u503C\u6765\u62FC\u88C5redis key                      |
| rule_items | array of object | \u662F   | -                 | \u9650\u6D41\u89C4\u5219\u9879\uFF0C\u6309\u7167rule_items\u4E0B\u7684\u6392\u5217\u987A\u5E8F\uFF0C\u5339\u914D\u7B2C\u4E00\u4E2Arule_item\u540E\u547D\u4E2D\u9650\u6D41\u89C4\u5219\uFF0C\u540E\u7EED\u89C4\u5219\u5C06\u88AB\u5FFD\u7565                   |
| rejected_code           | int | \u5426 | 429 | \u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684HTTP\u72B6\u6001\u7801                                                         |
| rejected_msg            | string | \u5426 | Too many requests | \u8BF7\u6C42\u88AB\u9650\u6D41\u65F6\uFF0C\u8FD4\u56DE\u7684\u54CD\u5E94\u4F53                                                             |
| redis                   | object          | \u662F                                                           | -                 | redis\u76F8\u5173\u914D\u7F6E                                                                 |

\`rule_items\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879                | \u7C7B\u578B            | \u5FC5\u586B                       | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                         |
| --------------------- | --------------- | -------------------------- | ------ | ------------------------------------------------------------ |
| limit_by_header       | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0                       |
| limit_by_param        | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0                          |
| limit_by_consumer     | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C                   |
| limit_by_cookie       | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0                     |
| limit_by_per_header   | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A HTTP \u8BF7\u6C42\u5934\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u8BF7\u6C42\u5934\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 HTTP \u8BF7\u6C42\u5934\u540D\u79F0\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_param    | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A URL \u53C2\u6570\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u53C2\u6570\u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 URL \u53C2\u6570\u540D\u79F0\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_consumer | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A consumer\uFF0C\u5E76\u5BF9\u6BCF\u4E2A consumer \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u6839\u636E consumer \u540D\u79F0\u8FDB\u884C\u9650\u6D41\uFF0C\u65E0\u9700\u6DFB\u52A0\u5B9E\u9645\u503C\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_cookie   | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A Cookie\uFF0C\u5E76\u5BF9\u6BCF\u4E2A Cookie \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 Cookie\u4E2D key \u540D\u79F0\uFF0C\u914D\u7F6E\`limit_keys\`\u65F6\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\u6216\`*\` |
| limit_by_per_ip       | string          | \u5426\uFF0C\`limit_by_*\`\u4E2D\u9009\u586B\u4E00\u9879 | -      | \u6309\u89C4\u5219\u5339\u914D\u7279\u5B9A IP\uFF0C\u5E76\u5BF9\u6BCF\u4E2A IP \u5206\u522B\u8BA1\u7B97\u9650\u6D41\uFF0C\u914D\u7F6E\u83B7\u53D6\u9650\u6D41\u952E\u503C\u7684\u6765\u6E90 IP \u53C2\u6570\u540D\u79F0\uFF0C\u4ECE\u8BF7\u6C42\u5934\u83B7\u53D6\uFF0C\u4EE5\`from-header-\u5BF9\u5E94\u7684header\u540D\`\uFF0C\u793A\u4F8B\uFF1A\`from-header-x-forwarded-for\`\uFF0C\u76F4\u63A5\u83B7\u53D6\u5BF9\u7AEFsocket ip\uFF0C\u914D\u7F6E\u4E3A\`from-remote-addr\` |
| limit_keys            | array of object | \u662F                         | -      | \u914D\u7F6E\u5339\u914D\u952E\u503C\u540E\u7684\u9650\u6D41\u6B21\u6570                                     |

\`limit_keys\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879           | \u7C7B\u578B   | \u5FC5\u586B                                                         | \u9ED8\u8BA4\u503C | \u8BF4\u660E                                                         |
| ---------------- | ------ | ------------------------------------------------------------ | ------ | ------------------------------------------------------------ |
| key              | string | \u662F                                                           | -      | \u5339\u914D\u7684\u952E\u503C\uFF0C\`limit_by_per_header\`,\`limit_by_per_param\`,\`limit_by_per_consumer\`,\`limit_by_per_cookie\` \u7C7B\u578B\u652F\u6301\u914D\u7F6E\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u4EE5regexp:\u5F00\u5934\u540E\u9762\u8DDF\u6B63\u5219\u8868\u8FBE\u5F0F\uFF09\u6216\u8005*\uFF08\u4EE3\u8868\u6240\u6709\uFF09\uFF0C\u6B63\u5219\u8868\u8FBE\u5F0F\u793A\u4F8B\uFF1A\`regexp:^d.*\`\uFF08\u4EE5d\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF09\uFF1B\`limit_by_per_ip\`\u652F\u6301\u914D\u7F6E IP \u5730\u5740\u6216 IP \u6BB5 |
| token_per_second | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u79D2\u8BF7\u6C42token\u6570                                             |
| token_per_minute | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5206\u949F\u8BF7\u6C42token\u6570                                           |
| token_per_hour   | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5C0F\u65F6\u8BF7\u6C42token\u6570                                           |
| token_per_day    | int    | \u5426\uFF0C\`token_per_second\`,\`token_per_minute\`,\`token_per_hour\`,\`token_per_day\` \u4E2D\u9009\u586B\u4E00\u9879 | -      | \u5141\u8BB8\u6BCF\u5929\u8BF7\u6C42token\u6570                                             |

\`redis\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E

| \u914D\u7F6E\u9879       | \u7C7B\u578B   | \u5FC5\u586B | \u9ED8\u8BA4\u503C                                                     | \u8BF4\u660E                        |
| ------------ | ------ | ---- | ---------------------------------------------------------- | --------------------------- |
| service_name | string | \u5FC5\u586B | -                                                          | redis \u670D\u52A1\u540D\u79F0\uFF0C\u5E26\u670D\u52A1\u7C7B\u578B\u7684\u5B8C\u6574 FQDN \u540D\u79F0\uFF0C\u4F8B\u5982 my-redis.dns\u3001redis.my-ns.svc.cluster.local     |
| service_port | int    | \u5426   | \u670D\u52A1\u7C7B\u578B\u4E3A\u56FA\u5B9A\u5730\u5740\uFF08static service\uFF09\u9ED8\u8BA4\u503C\u4E3A80\uFF0C\u5176\u4ED6\u4E3A6379 | \u8F93\u5165redis\u670D\u52A1\u7684\u670D\u52A1\u7AEF\u53E3     |
| username     | string | \u5426   | -                                                          | redis\u7528\u6237\u540D                 |
| password     | string | \u5426   | -                                                          | redis\u5BC6\u7801                   |
| timeout      | int    | \u5426   | 1000                                                       | redis\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2 |

## \u914D\u7F6E\u793A\u4F8B

### \u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_param: apikey
    limit_keys:
      - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5
        token_per_minute: 10
      - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5
        token_per_hour: 100
  - limit_by_per_param: apikey
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
       	token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000
redis:
  service_name: redis.static
\`\`\`

### \u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_header: x-ca-key
    limit_keys:
    	- key: 102234
        token_per_minute: 10
      - key: 308239
        token_per_hour: 10
  - limit_by_per_header: x-ca-key
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aapikey\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000            
redis:
  service_name: redis.static
\`\`\`

### \u6839\u636E\u8BF7\u6C42\u5934 x-forwarded-for \u83B7\u53D6\u5BF9\u7AEFIP\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_per_ip: from-header-x-forwarded-for
    limit_keys:
      # \u7CBE\u786Eip
      - key: 1.1.1.1
        token_per_day: 10
      # ip\u6BB5\uFF0C\u7B26\u5408\u8FD9\u4E2Aip\u6BB5\u7684ip\uFF0C\u6BCF\u4E2Aip 100qpd
      - key: 1.1.1.0/24
        token_per_day: 100
      # \u515C\u5E95\u7528\uFF0C\u5373\u9ED8\u8BA4\u6BCF\u4E2Aip 1000qpd
      - key: 0.0.0.0/0
        token_per_day: 1000
redis:
  service_name: redis.static
\`\`\`

### \u8BC6\u522Bconsumer\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_consumer: ''
    limit_keys:
      - key: consumer1
        token_per_second: 10
      - key: consumer2
        token_per_hour: 100
  - limit_by_per_consumer: ''
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Aconsumer\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000     
redis:
  service_name: redis.static
\`\`\`

### \u8BC6\u522Bcookie\u4E2D\u7684\u952E\u503C\u5BF9\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41

\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_cookie: key1
    limit_keys:
      - key: value1
        token_per_minute: 10
      - key: value2
        token_per_hour: 100
  - limit_by_per_cookie: key1
    limit_keys:
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5a\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C4210qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # \u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u5339\u914D\u4EE5b\u5F00\u5934\u7684\u6240\u6709\u5B57\u7B26\u4E32\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C42100qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # \u515C\u5E95\u7528\uFF0C\u5339\u914D\u6240\u6709\u8BF7\u6C42\uFF0C\u6BCF\u4E2Acookie\u4E2D\u7684value\u5BF9\u5E94\u7684\u8BF7\u6C421000qdh
      - key: "*"
        token_per_hour: 1000 
rejected_code: 200
rejected_msg: '{"code":-1,"msg":"Too many requests"}'
redis:
  service_name: redis.static
\`\`\`

## \u5B8C\u6574\u793A\u4F8B

AI Token \u9650\u6D41\u63D2\u4EF6\u4F9D\u8D56 Redis \u8BB0\u5F55\u5269\u4F59\u53EF\u7528\u7684 token \u6570\uFF0C\u56E0\u6B64\u9996\u5148\u9700\u8981\u90E8\u7F72 Redis \u670D\u52A1\u3002
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
  labels:
    app: redis
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis
        ports:
        - containerPort: 6379
---
apiVersion: v1
kind: Service
metadata:
  name: redis
  labels:
    app: redis
spec:
  ports:
  - port: 6379
    targetPort: 6379
  selector:
    app: redis
---
\`\`\`

\u5728\u672C\u4F8B\u4E2D\uFF0C\u4F7F\u7528\u901A\u4E49\u5343\u95EE\u4F5C\u4E3A AI \u670D\u52A1\u63D0\u4F9B\u5546\u3002\u53E6\u5916\u8FD8\u9700\u8981\u8BBE\u7F6E AI \u7EDF\u8BA1\u63D2\u4EF6\uFF0C\u56E0\u4E3A AI Token \u9650\u6D41\u63D2\u4EF6\u4F9D\u8D56 AI \u7EDF\u8BA1\u63D2\u4EF6\u8BA1\u7B97\u6BCF\u6B21\u8BF7\u6C42\u6D88\u8017\u7684 token \u6570\uFF0C\u4EE5\u4E0B\u914D\u7F6E\u9650\u5236\u6BCF\u5206\u949F\u7684 input \u548C output token \u603B\u6570\u4E3A 200 \u4E2A\u3002

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-proxy
  namespace: higress-system
spec:
  matchRules:
  - config:
      provider:
        type: qwen
        apiTokens:
        - "<YOUR_API_TOKEN>"
        modelMapping:
          'gpt-3': "qwen-turbo"
          'gpt-35-turbo': "qwen-plus"
          'gpt-4-turbo': "qwen-max"
          '*': "qwen-turbo"
    ingress:
    - qwen
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0
  phase: UNSPECIFIED_PHASE
  priority: 100
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-token-ratelimit
  namespace: higress-system
spec:
  defaultConfig:
    rule_name: default_limit_by_param_apikey
    rule_items:
    - limit_by_param: apikey
      limit_keys:
      - key: 123456
        token_per_minute: 200
    redis:
      # \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E3A\u4E86\u51CF\u8F7B\u6570\u636E\u9762\u7684\u538B\u529B\uFF0CHigress \u7684 global.onlyPushRouteCluster \u914D\u7F6E\u53C2\u6570\u88AB\u8BBE\u7F6E\u4E3A true\uFF0C\u610F\u5473\u7740\u4E0D\u4F1A\u81EA\u52A8\u53D1\u73B0 Kubernetes Service
      # \u5982\u679C\u9700\u8981\u4F7F\u7528 Kubernetes Service \u4F5C\u4E3A\u670D\u52A1\u53D1\u73B0\uFF0C\u53EF\u4EE5\u5C06 global.onlyPushRouteCluster \u53C2\u6570\u8BBE\u7F6E\u4E3A false\uFF0C
      # \u8FD9\u6837\u5C31\u53EF\u4EE5\u76F4\u63A5\u5C06 service_name \u8BBE\u7F6E\u4E3A Kubernetes Service, \u800C\u65E0\u987B\u4E3A Redis \u521B\u5EFA McpBridge \u4EE5\u53CA Ingress \u8DEF\u7531
      # service_name: redis.default.svc.cluster.local
      service_name: redis.dns
      service_port: 6379
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-ratelimit:1.0.0
  phase: UNSPECIFIED_PHASE
  priority: 600
\`\`\`
\u6CE8\u610F\uFF0CAI Token \u9650\u6D41\u63D2\u4EF6\u4E2D\u7684 Redis \u914D\u7F6E\u9879 \`service_name\` \u6765\u81EA McpBridge \u4E2D\u914D\u7F6E\u7684\u670D\u52A1\u6765\u6E90\uFF0C\u53E6\u5916\u6211\u4EEC\u8FD8\u9700\u8981\u5728 McpBridge \u4E2D\u914D\u7F6E\u901A\u4E49\u5343\u95EE\u670D\u52A1\u7684\u8BBF\u95EE\u5730\u5740\u3002

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: dashscope.aliyuncs.com
    name: qwen
    port: 443
    type: dns
  - domain: redis.default.svc.cluster.local # Kubernetes Service
    name: redis
    type: dns
    port: 6379
\`\`\`

\u5206\u522B\u521B\u5EFA\u4E24\u6761\u8DEF\u7531\u89C4\u5219\u3002

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: HTTPS
    higress.io/destination: qwen.dns
    higress.io/proxy-ssl-name: dashscope.aliyuncs.com
    higress.io/proxy-ssl-server-name: "on"
  labels:
    higress.io/resource-definer: higress
  name: qwen
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: qwen-test.com
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: redis.dns
    higress.io/ignore-path-case: "false"
  labels:
    higress.io/resource-definer: higress
  name: redis
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
\`\`\`

\u8F6C\u53D1 higress-gateway \u7684\u6D41\u91CF\u5230\u672C\u5730\uFF0C\u65B9\u4FBF\u8FDB\u884C\u6D4B\u8BD5\u3002

\`\`\`bash
kubectl port-forward svc/higress-gateway -n higress-system 18000:80
\`\`\`

\u89E6\u53D1\u9650\u6D41\u6548\u679C\u5982\u4E0B\uFF1A

\`\`\`bash
curl "http://localhost:18000/v1/chat/completions?apikey=123456" \\
-H "Host: qwen-test.com" \\
-H "Content-Type: application/json"  \\
-d '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "stream": false
}'
{"id":"88cfa80f-545d-93b4-8ff3-3f5245ca33ba","choices":[{"index":0,"message":{"role":"assistant","content":"\u6211\u662F\u901A\u4E49\u5343\u95EE\uFF0C\u7531\u963F\u91CC\u4E91\u5F00\u53D1\u7684AI\u52A9\u624B\u3002\u6211\u53EF\u4EE5\u56DE\u7B54\u5404\u79CD\u95EE\u9898\u3001\u63D0\u4F9B\u4FE1\u606F\u548C\u4E0E\u7528\u6237\u8FDB\u884C\u5BF9\u8BDD\u3002\u6709\u4EC0\u4E48\u6211\u53EF\u4EE5\u5E2E\u52A9\u4F60\u7684\u5417\uFF1F"},"finish_reason":"stop"}],"created":1719909825,"model":"qwen-turbo","object":"chat.completion","usage":{"prompt_tokens":13,"completion_tokens":33,"total_tokens":46}}
curl "http://qwen-test.com:18000/v1/chat/completions?apikey=123456" -H "Content-Type: application/json"  -d '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "\u4F60\u597D\uFF0C\u4F60\u662F\u8C01\uFF1F"
    }
  ],
  "stream": false
}'
Too many requests  # \u9650\u6D41\u6210\u529F
\`\`\`
`},d=function(){return s},t=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570-apikey\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u53C2\u6570 apikey\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522B\u8BF7\u6C42\u5934-x-ca-key\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522B\u8BF7\u6C42\u5934 x-ca-key\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u6839\u636E\u8BF7\u6C42\u5934-x-forwarded-for-\u83B7\u53D6\u5BF9\u7AEFip\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u6839\u636E\u8BF7\u6C42\u5934 x-forwarded-for \u83B7\u53D6\u5BF9\u7AEFIP\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522Bconsumer\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522Bconsumer\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:3,slug:"\u8BC6\u522Bcookie\u4E2D\u7684\u952E\u503C\u5BF9\u8FDB\u884C\u533A\u522B\u9650\u6D41",text:"\u8BC6\u522Bcookie\u4E2D\u7684\u952E\u503C\u5BF9\uFF0C\u8FDB\u884C\u533A\u522B\u9650\u6D41"},{depth:2,slug:"\u5B8C\u6574\u793A\u4F8B",text:"\u5B8C\u6574\u793A\u4F8B"}]},e=c((x,u,F)=>{const{layout:f,...p}=n;return p.file=a,p.url=i,E`${v()}${r(s)}`})});export{e as Content,m as __tla,d as compiledContent,e as default,a as file,n as frontmatter,t as getHeadings,l as rawContent,i as url};
