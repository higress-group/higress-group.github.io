import{c,__tla as E}from"./astro-component.DIa0fJKh.js";import{r as o,m as v,u as y,__tla as r}from"./constant.C0pwuyGH.js";import{__tla as x}from"./astro/assets-service.tyfV9CK3.js";let a,t,e,n,l,i,p,F=Promise.all([(()=>{try{return E}catch{}})(),(()=>{try{return r}catch{}})(),(()=>{try{return x}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">transformer</code> \u63D2\u4EF6\u53EF\u4EE5\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u5934\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u8FDB\u884C\u8F6C\u6362\uFF0C\u652F\u6301\u7684\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u5305\u62EC\u5220\u9664\u3001\u91CD\u547D\u540D\u3001\u66F4\u65B0\u3001\u6DFB\u52A0\u3001\u8FFD\u52A0\u3001\u6620\u5C04\u3001\u53BB\u91CD\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">410</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>


























<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>reqRules</td><td>string</td><td>\u9009\u586B\uFF0CreqRules\u548CrespRules\u81F3\u5C11\u586B\u4E00\u4E2A</td><td>-</td><td>\u8BF7\u6C42\u8F6C\u6362\u5668\u914D\u7F6E\uFF0C\u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4EE5\u53CA\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42\u4F53\u7684\u8F6C\u6362\u89C4\u5219</td></tr><tr><td>respRules</td><td>string</td><td>\u9009\u586B\uFF0CreqRules\u548CrespRules\u81F3\u5C11\u586B\u4E00\u4E2A</td><td>-</td><td>\u54CD\u5E94\u8F6C\u6362\u5668\u914D\u7F6E\uFF0C\u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4EE5\u53CA\u54CD\u5E94\u5934\u3001\u54CD\u5E94\u4F53\u7684\u8F6C\u6362\u89C4\u5219</td></tr></tbody></table>
<p><code dir="auto">reqRules</code>\u548C<code dir="auto">respRules</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>operate</td><td>string</td><td>\u5FC5\u586B\uFF0C\u53EF\u9009\u503C\u4E3A <code dir="auto">remove</code>, <code dir="auto">rename</code>, <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code>, <code dir="auto">map</code>, <code dir="auto">dedupe</code></td><td>-</td><td>\u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\uFF0C\u652F\u6301\u7684\u64CD\u4F5C\u7C7B\u578B\u6709\u5220\u9664 (remove)\u3001\u91CD\u547D\u540D (rename)\u3001\u66F4\u65B0 (replace)\u3001\u6DFB\u52A0 (add)\u3001\u8FFD\u52A0 (append)\u3001\u6620\u5C04 (map)\u3001\u53BB\u91CD (dedupe)\uFF0C\u5F53\u5B58\u5728\u591A\u9879\u4E0D\u540C\u7C7B\u578B\u7684\u8F6C\u6362\u89C4\u5219\u65F6\uFF0C\u6309\u7167\u4E0A\u8FF0\u64CD\u4F5C\u7C7B\u578B\u987A\u5E8F\u4F9D\u6B21\u6267\u884C</td></tr><tr><td>mapSource</td><td>string</td><td>\u9009\u586B\uFF0C\u53EF\u9009\u503C\u4E3A<code dir="auto">headers</code>, <code dir="auto">querys</code>,<code dir="auto">body</code></td><td>-</td><td>\u4EC5\u5728operate\u4E3A<code dir="auto">map</code>\u65F6\u6709\u6548\u3002\u6307\u5B9A\u6620\u5C04\u6765\u6E90\uFF0C\u82E5\u4E0D\u586B\u8BE5\u5B57\u6BB5\uFF0C\u5219\u9ED8\u8BA4\u6620\u5C04\u6765\u6E90\u4E3A\u81EA\u8EAB</td></tr><tr><td>headers</td><td>array of object</td><td>\u9009\u586B</td><td>-</td><td>\u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u5934\u8F6C\u6362\u89C4\u5219</td></tr><tr><td>querys</td><td>array of object</td><td>\u9009\u586B</td><td>-</td><td>\u6307\u5B9A\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u8F6C\u6362\u89C4\u5219</td></tr><tr><td>body</td><td>array of object</td><td>\u9009\u586B</td><td>-</td><td>\u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u8F6C\u6362\u89C4\u5219\uFF0C\u8BF7\u6C42\u4F53\u8F6C\u6362\u5141\u8BB8 content-type \u4E3A <code dir="auto">application/json</code>, <code dir="auto">application/x-www-form-urlencoded</code>, <code dir="auto">multipart/form-data</code>\uFF1B\u54CD\u5E94\u4F53\u8F6C\u6362\u4EC5\u5141\u8BB8 content-type \u4E3A <code dir="auto">application/json</code></td></tr></tbody></table>
<p><code dir="auto">headers</code>, <code dir="auto">querys</code>, <code dir="auto">body</code>\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>




























































































































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">remove</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>oldKey</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">rename</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>newKey</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">rename</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>key</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">replace</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>newValue</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">replace</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>key</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">add</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>value</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">add</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>key</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">append</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>appendValue</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">append</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>fromKey</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">map</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>toKey</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">map</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>key</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">dedupe</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>strategy</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u5728operate\u4E3A<code dir="auto">dedupe</code>\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1<a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</a></td></tr><tr><td>value_type</td><td>string</td><td>\u9009\u586B\uFF0C\u53EF\u9009\u503C\u4E3A <code dir="auto">object</code>, <code dir="auto">boolean</code>, <code dir="auto">number</code>, <code dir="auto">string</code></td><td>string</td><td>\u5F53<code dir="auto">content-type: application/json</code>\u65F6\uFF0C\u8BE5\u5B57\u6BB5\u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u7684\u503C\u7C7B\u578B</td></tr><tr><td>host_pattern</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u6307\u5B9A\u8BF7\u6C42\u4E3B\u673A\u540D\u5339\u914D\u89C4\u5219\uFF0C\u5F53\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4E3A <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code> \u65F6\u6709\u6548</td></tr><tr><td>path_pattern</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u6307\u5B9A\u8BF7\u6C42\u8DEF\u5F84\u5339\u914D\u89C4\u5219\uFF0C\u5F53\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4E3A <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code> \u65F6\u6709\u6548</td></tr></tbody></table>
<p>\u6CE8\u610F\uFF1A</p>
<ul>
<li><code dir="auto">request transformer</code> \u652F\u6301\u4EE5\u4E0B\u8F6C\u6362\u5BF9\u8C61\uFF1A\u8BF7\u6C42\u5934\u90E8\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42\u4F53\uFF08application/json, application/x-www-form-urlencoded, multipart/form-data\uFF09</li>
<li><code dir="auto">response transformer</code> \u652F\u6301\u4EE5\u4E0B\u8F6C\u6362\u5BF9\u8C61\uFF1A\u54CD\u5E94\u5934\u90E8\u3001\u54CD\u5E94\u4F53\uFF08application/json\uFF09</li>
<li>\u63D2\u4EF6\u652F\u6301\u53CC\u5411\u8F6C\u6362\u80FD\u529B\uFF0C\u5373\u5355\u4E2A\u63D2\u4EF6\u80FD\u591F\u5B8C\u6210\u5BF9\u8BF7\u6C42\u548C\u54CD\u5E94\u90FD\u505A\u8F6C\u6362</li>
<li>\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u4E3A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7F16\u5199\u7684\u987A\u5E8F\uFF0C\u5982\uFF1Aremove \u2192 rename \u2192 replace \u2192 add \u2192 append \u2192 map \u2192 dedupe\u6216\u8005dedupe \u2192 map \u2192 append \u2192 add \u2192 replace \u2192 rename \u2192 remove\u7B49</li>
<li>\u5F53\u8F6C\u6362\u5BF9\u8C61\u4E3A headers \u65F6\uFF0C<code dir="auto"> key</code> \u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B\u5F53\u4E3A headers \u4E14\u4E3A <code dir="auto">rename</code>, <code dir="auto">map</code> \u64CD\u4F5C\u65F6\uFF0C<code dir="auto">value</code> \u4E5F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF08\u56E0\u4E3A\u6B64\u65F6\u8BE5\u5B57\u6BB5\u5177\u6709 key \u542B\u4E49\uFF09\uFF1B\u800C querys \u548C body \u7684 <code dir="auto">key</code>, <code dir="auto">value</code> \u5B57\u6BB5\u5747\u533A\u5206\u5927\u5C0F\u5199</li>
<li><code dir="auto">value_type</code> \u4EC5\u5BF9 content-type \u4E3A application/json \u7684\u8BF7\u6C42/\u54CD\u5E94\u4F53\u6709\u6548</li>
<li><code dir="auto">host_pattern</code> \u548C <code dir="auto">path_pathern</code> \u652F\u6301 <a href="https://pkg.go.dev/regexp/syntax" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RE2 \u8BED\u6CD5</a>\uFF0C\u4EC5\u5BF9 <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code> \u64CD\u4F5C\u6709\u6548\uFF0C\u4E14\u5728\u4E00\u9879\u8F6C\u6362\u89C4\u5219\u4E2D\u4E24\u8005\u53EA\u80FD\u9009\u586B\u5176\u4E00\uFF0C\u82E5\u5747\u586B\u5199\uFF0C\u5219 <code dir="auto">host_pattern</code> \u751F\u6548\uFF0C\u800C <code dir="auto">path_pattern</code> \u5931\u6548</li>
</ul>
<h2 id="\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B">\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B</h2>





















































<table><thead><tr><th>\u64CD\u4F5C\u7C7B\u578B</th><th>key \u5B57\u6BB5\u542B\u4E49</th><th>value \u5B57\u6BB5\u542B\u4E49</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>\u5220\u9664 remove</td><td>\u76EE\u6807 key</td><td>\u65E0\u9700\u8BBE\u7F6E</td><td>\u82E5\u5B58\u5728\u6307\u5B9A\u7684 <code dir="auto">key</code>\uFF0C\u5219\u5220\u9664\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C</td></tr><tr><td>\u91CD\u547D\u540D rename</td><td>\u76EE\u6807 oldKey</td><td>\u65B0\u7684 key \u540D\u79F0 newKey</td><td>\u82E5\u5B58\u5728\u6307\u5B9A\u7684 <code dir="auto">oldKey:value</code>\uFF0C\u5219\u5C06\u5176\u952E\u540D\u91CD\u547D\u540D\u4E3A <code dir="auto">newKey</code>\uFF0C\u5F97\u5230 <code dir="auto">newKey:value</code>\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C</td></tr><tr><td>\u66F4\u65B0 replace</td><td>\u76EE\u6807 key</td><td>\u65B0\u7684 value \u503C newValue</td><td>\u82E5\u5B58\u5728\u6307\u5B9A\u7684 <code dir="auto">key:value</code>\uFF0C\u5219\u5C06\u5176 value \u66F4\u65B0\u4E3A <code dir="auto">newValue</code>\uFF0C\u5F97\u5230 <code dir="auto">key:newValue</code>\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C</td></tr><tr><td>\u6DFB\u52A0 add</td><td>\u6DFB\u52A0\u7684 key</td><td>\u6DFB\u52A0\u7684 value</td><td>\u82E5\u4E0D\u5B58\u5728\u6307\u5B9A\u7684 <code dir="auto">key:value</code>\uFF0C\u5219\u6DFB\u52A0\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C</td></tr><tr><td>\u8FFD\u52A0 append</td><td>\u76EE\u6807 key</td><td>\u8FFD\u52A0\u7684 value\u503C appendValue</td><td>\u82E5\u5B58\u5728\u6307\u5B9A\u7684 <code dir="auto">key:value</code>\uFF0C\u5219\u8FFD\u52A0 appendValue \u5F97\u5230 <code dir="auto">key:[value..., appendValue]</code>\uFF1B\u5426\u5219\u76F8\u5F53\u4E8E\u6267\u884C add \u64CD\u4F5C\uFF0C\u5F97\u5230 <code dir="auto">key:appendValue</code></td></tr><tr><td>\u6620\u5C04 map</td><td>\u6620\u5C04\u6765\u6E90 fromKey</td><td>\u6620\u5C04\u76EE\u6807 toKey</td><td>\u82E5\u5B58\u5728\u6307\u5B9A\u7684 <code dir="auto">fromKey:fromValue</code>\uFF0C\u5219\u5C06\u5176\u503C fromValue \u6620\u5C04\u7ED9 toKey \u7684\u503C\uFF0C\u5F97\u5230 <code dir="auto">toKey:fromValue</code>\uFF0C\u540C\u65F6\u4FDD\u7559 <code dir="auto">fromKey:fromValue</code>\uFF08\u6CE8\uFF1A\u82E5 toKey \u5DF2\u5B58\u5728\u5219\u5176\u503C\u4F1A\u88AB\u8986\u76D6\uFF09\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C</td></tr><tr><td>\u53BB\u91CD dedupe</td><td>\u76EE\u6807 key</td><td>\u6307\u5B9A\u53BB\u91CD\u7B56\u7565 strategy</td><td><code dir="auto">strategy</code> \u53EF\u9009\u503C\u4E3A\uFF1A<br><code dir="auto">RETAIN_UNIQUE</code>: \u6309\u987A\u5E8F\u4FDD\u7559\u6240\u6709\u552F\u4E00\u503C\uFF0C\u5982 <code dir="auto">k1:[v1,v2,v3,v3,v2,v1]</code>\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 <code dir="auto">k1:[v1,v2,v3]</code> <br><code dir="auto">RETAIN_LAST</code>: \u4FDD\u7559\u6700\u540E\u4E00\u4E2A\u503C\uFF0C\u5982 <code dir="auto">k1:[v1,v2,v3]</code>\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 <code dir="auto">k1:v3</code> <br><code dir="auto">RETAIN_FIRST</code> (default): \u4FDD\u7559\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5982 <code dir="auto">k1:[v1,v2,v3]</code>\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 <code dir="auto">k1:v1</code><br>\uFF08\u6CE8\uFF1A\u82E5\u53BB\u91CD\u540E\u53EA\u5269\u4E0B\u4E00\u4E2A\u5143\u7D20 v1 \u65F6\uFF0C\u952E\u503C\u5BF9\u53D8\u4E3A <code dir="auto">k1:v1</code>, \u800C\u4E0D\u662F <code dir="auto">k1:[v1]</code>\uFF09</td></tr></tbody></table>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u5B9E\u73B0\u57FA\u4E8Ebody\u53C2\u6570\u8DEF\u7531">\u5B9E\u73B0\u57FA\u4E8EBody\u53C2\u6570\u8DEF\u7531</h3>
<p>\u914D\u7F6E\u793A\u4F8B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userId</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mapSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">body</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: map\x7F  headers:\x7F  - fromKey: userId\x7F    toKey: x-user-id\x7F  mapSource: body"><div></div></button></div></figure></div>
<p>\u6B64\u89C4\u5219\u5C06\u8BF7\u6C42body\u4E2D\u7684<code dir="auto">userId</code>\u89E3\u6790\u51FA\u540E\uFF0C\u8BBE\u7F6E\u5230\u8BF7\u6C42Header<code dir="auto">x-user-id</code>\u4E2D\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u57FA\u4E8EHigress\u8BF7\u6C42Header\u5339\u914D\u8DEF\u7531\u7684\u80FD\u529B\u6765\u5B9E\u73B0\u57FA\u4E8EBody\u53C2\u6570\u7684\u8DEF\u7531\u4E86\u3002</p>
<p>\u6B64\u914D\u7F6E\u540C\u65F6\u652F\u6301<code dir="auto">application/json</code>\u548C<code dir="auto">application/x-www-form-urlencoded</code>\u4E24\u79CD\u7C7B\u578B\u7684\u8BF7\u6C42Body\u3002</p>
<p>\u4E3E\u4F8B\u6765\u8BF4\uFF1A</p>
<p><strong>\u5BF9\u4E8Eapplication/json\u7C7B\u578B\u7684body</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">localhost</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"userId":12, "userName":"johnlanni"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'content-type:application/json'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl localhost -d &#x27;{&#x22;userId&#x22;:12, &#x22;userName&#x22;:&#x22;johnlanni&#x22;}&#x27; -H &#x27;content-type:application/json&#x27;"><div></div></button></div></figure></div>
<p>\u5C06\u4ECEjson\u4E2D\u63D0\u53D6\u51FA<code dir="auto">userId</code>\u5B57\u6BB5\u7684\u503C\uFF0C\u8BBE\u7F6E\u5230<code dir="auto">x-user-id</code>\u4E2D\uFF0C\u540E\u7AEF\u670D\u52A1\u6536\u5230\u7684\u8BF7\u6C42\u5934\u5C06\u589E\u52A0:<code dir="auto">x-usr-id: 12</code>\u3002</p>
<p>\u56E0\u4E3A\u5728\u63D2\u4EF6\u65B0\u589E\u8FD9\u4E2AHeader\u540E\uFF0C\u7F51\u5173\u5C06\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8FD9\u4E2A\u8BF7\u6C42\u5934\u6765\u5339\u914D\u8DEF\u7531\u5230\u7279\u5B9A\u7684\u76EE\u6807\u670D\u52A1\u3002</p>
<p><strong>\u5BF9\u4E8Eapplication/x-www-form-urlencoded\u7C7B\u578B\u7684body</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">localhost</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'userId=12&#x26;userName=johnlanni'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl localhost -d &#x27;userId=12&#x26;userName=johnlanni&#x27;"><div></div></button></div></figure></div>
<p>\u5C06\u4ECE<code dir="auto">k1=v1&#x26;k2=v2</code>\u8FD9\u6837\u7684\u8868\u5355\u683C\u5F0F\u4E2D\u63D0\u53D6\u51FA<code dir="auto">userId</code>\u5B57\u6BB5\u7684\u503C\uFF0C\u8BBE\u7F6E\u5230<code dir="auto">x-user-id</code>\u4E2D\uFF0C\u540E\u7AEF\u670D\u52A1\u6536\u5230\u7684\u8BF7\u6C42\u5934\u5C06\u589E\u52A0:<code dir="auto">x-usr-id: 12</code>\u3002</p>
<p>\u56E0\u4E3A\u5728\u63D2\u4EF6\u65B0\u589E\u8FD9\u4E2AHeader\u540E\uFF0C\u7F51\u5173\u5C06\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8FD9\u4E2A\u8BF7\u6C42\u5934\u6765\u5339\u914D\u8DEF\u7531\u5230\u7279\u5B9A\u7684\u76EE\u6807\u670D\u52A1\u3002</p>
<h4 id="json-path-\u652F\u6301">json path \u652F\u6301</h4>
<p>\u53EF\u4EE5\u6839\u636E <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Path \u8BED\u6CD5</a>\uFF0C\u4ECE\u590D\u6742\u7684 json \u4E2D\u63D0\u53D6\u51FA\u5B57\u6BB5\u3002</p>
<p>\u6BD4\u8F83\u5E38\u7528\u7684\u64CD\u4F5C\u4E3E\u4F8B\uFF0C\u5BF9\u4E8E\u4EE5\u4E0B json:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: {</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Tom"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Anderson"</span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">:</span><span style="--0:#79B8FF">37</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"children"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"Sara"</span><span style="--0:#E1E4E8">,</span><span style="--0:#9ECBFF">"Alex"</span><span style="--0:#E1E4E8">,</span><span style="--0:#9ECBFF">"Jack"</span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"fav.movie"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Deer Hunter"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"friends"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Dale"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Murphy"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">44</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"nets"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"ig"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"fb"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tw"</span><span style="--0:#E1E4E8">]},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Roger"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Craig"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">68</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"nets"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"fb"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tw"</span><span style="--0:#E1E4E8">]},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Jane"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Murphy"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">47</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"nets"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"ig"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tw"</span><span style="--0:#E1E4E8">]}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;name&#x22;: {&#x22;first&#x22;: &#x22;Tom&#x22;, &#x22;last&#x22;: &#x22;Anderson&#x22;},\x7F  &#x22;age&#x22;:37,\x7F  &#x22;children&#x22;: [&#x22;Sara&#x22;,&#x22;Alex&#x22;,&#x22;Jack&#x22;],\x7F  &#x22;fav.movie&#x22;: &#x22;Deer Hunter&#x22;,\x7F  &#x22;friends&#x22;: [\x7F    {&#x22;first&#x22;: &#x22;Dale&#x22;, &#x22;last&#x22;: &#x22;Murphy&#x22;, &#x22;age&#x22;: 44, &#x22;nets&#x22;: [&#x22;ig&#x22;, &#x22;fb&#x22;, &#x22;tw&#x22;]},\x7F    {&#x22;first&#x22;: &#x22;Roger&#x22;, &#x22;last&#x22;: &#x22;Craig&#x22;, &#x22;age&#x22;: 68, &#x22;nets&#x22;: [&#x22;fb&#x22;, &#x22;tw&#x22;]},\x7F    {&#x22;first&#x22;: &#x22;Jane&#x22;, &#x22;last&#x22;: &#x22;Murphy&#x22;, &#x22;age&#x22;: 47, &#x22;nets&#x22;: [&#x22;ig&#x22;, &#x22;tw&#x22;]}\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u6837\u7684\u63D0\u53D6:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">name.last              "Anderson"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">name.first             "Tom"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">age                    37</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">children               ["Sara","Alex","Jack"]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">children.0             "Sara"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">children.1             "Alex"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">friends.1              {"first": "Roger", "last": "Craig", "age": 68}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">friends.1.first        "Roger"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="name.last              &#x22;Anderson&#x22;\x7Fname.first             &#x22;Tom&#x22;\x7Fage                    37\x7Fchildren               [&#x22;Sara&#x22;,&#x22;Alex&#x22;,&#x22;Jack&#x22;]\x7Fchildren.0             &#x22;Sara&#x22;\x7Fchildren.1             &#x22;Alex&#x22;\x7Ffriends.1              {&#x22;first&#x22;: &#x22;Roger&#x22;, &#x22;last&#x22;: &#x22;Craig&#x22;, &#x22;age&#x22;: 68}\x7Ffriends.1.first        &#x22;Roger&#x22;"><div></div></button></div></figure></div>
<p>\u73B0\u5728\u5982\u679C\u60F3\u4ECE\u4E0A\u9762\u8FD9\u4E2A json \u683C\u5F0F\u7684 body \u4E2D\u63D0\u53D6\u51FA friends \u4E2D\u7B2C\u4E8C\u9879\u7684 first \u5B57\u6BB5\uFF0C\u6765\u8BBE\u7F6E\u5230 Header <code dir="auto">x-first-name</code> \u4E2D\uFF0C\u540C\u65F6\u62BD\u53D6 last \u5B57\u6BB5\uFF0C\u6765\u8BBE\u7F6E\u5230 Header <code dir="auto">x-last-name</code> \u4E2D\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4EFD\u63D2\u4EF6\u914D\u7F6E:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">friends.1.first</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-first-name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">friends.1.last</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-last-name</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mapSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">body</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: map\x7F  headers:\x7F  - fromKey: friends.1.first\x7F    toKey: x-first-name\x7F  - fromKey: friends.1.last\x7F    toKey: x-last-name\x7F  mapSource: body"><div></div></button></div></figure></div>
<h3 id="request-transformer">Request Transformer</h3>
<h4 id="\u8F6C\u6362\u8BF7\u6C42\u5934\u90E8">\u8F6C\u6362\u8BF7\u6C42\u5934\u90E8</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-remove</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-not-renamed</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-renamed</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replaced</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-add-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">host-$1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">host_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^(.*)\\.com$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-add-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">path-$1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^.*?\\/(\\w+)[\\?]{0,1}.*$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-add-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-map</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dedupe</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-dedupe-first</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_FIRST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-dedupe-last</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_LAST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-dedupe-unique</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_UNIQUE</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  headers:\x7F  - key: X-remove\x7F- operate: rename\x7F  headers:\x7F  - oldKey: X-not-renamed\x7F    newKey: X-renamed\x7F- operate: replace\x7F  headers:\x7F  - key: X-replace\x7F    newValue: replaced\x7F- operate: add\x7F  headers:\x7F  - key: X-add-append\x7F    value: host-$1\x7F    host_pattern: ^(.*)\\.com$\x7F- operate: append\x7F  headers:\x7F  - key: X-add-append\x7F    appendValue: path-$1\x7F    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$\x7F- operate: map\x7F  headers:\x7F  - fromKey: X-add-append\x7F    toKey: X-map\x7F- operate: dedupe\x7F  headers:\x7F  - key: X-dedupe-first\x7F    strategy: RETAIN_FIRST\x7F  - key: X-dedupe-last\x7F    strategy: RETAIN_LAST\x7F  - key: X-dedupe-unique\x7F    strategy: RETAIN_UNIQUE"><div></div></button></div></figure></div>
<p>\u53D1\u9001\u8BF7\u6C42</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/get</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-remove: exist'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-not-renamed:test'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-replace:not-replaced'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-first:1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-first:2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-first:3'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-last:a'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-last:b'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-last:c'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-unique:1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:3'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-unique:3'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:1'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"args"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Add-Append"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"host-foo.bar,path-get",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Dedupe-First"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"1",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Dedupe-Last"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"c",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Dedupe-Unique"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"1,2,3",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Map"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"host-foo.bar,path-get",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Renamed"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"test",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Replace"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"replaced"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v console.higress.io/get -H &#x27;host: foo.bar.com&#x27; \\\x7F-H &#x27;X-remove: exist&#x27; -H &#x27;X-not-renamed:test&#x27; -H &#x27;X-replace:not-replaced&#x27; \\\x7F-H &#x27;X-dedupe-first:1&#x27; -H &#x27;X-dedupe-first:2&#x27; -H &#x27;X-dedupe-first:3&#x27; \\\x7F-H &#x27;X-dedupe-last:a&#x27; -H &#x27;X-dedupe-last:b&#x27; -H &#x27;X-dedupe-last:c&#x27; \\\x7F-H &#x27;X-dedupe-unique:1&#x27; -H &#x27;X-dedupe-unique:2&#x27; -H &#x27;X-dedupe-unique:3&#x27; \\\x7F-H &#x27;X-dedupe-unique:3&#x27; -H &#x27;X-dedupe-unique:2&#x27; -H &#x27;X-dedupe-unique:1&#x27;\x7F{\x7F  &#x22;args&#x22;: {},\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;X-Add-Append&#x22;: &#x22;host-foo.bar,path-get&#x22;,\x7F    ...\x7F    &#x22;X-Dedupe-First&#x22;: &#x22;1&#x22;,\x7F    &#x22;X-Dedupe-Last&#x22;: &#x22;c&#x22;,\x7F    &#x22;X-Dedupe-Unique&#x22;: &#x22;1,2,3&#x22;,\x7F    ...\x7F    &#x22;X-Map&#x22;: &#x22;host-foo.bar,path-get&#x22;,\x7F    &#x22;X-Renamed&#x22;: &#x22;test&#x22;,\x7F    &#x22;X-Replace&#x22;: &#x22;replaced&#x22;\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<h4 id="\u8F6C\u6362\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570">\u8F6C\u6362\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k2-new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k2-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v2-new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v31-$1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^.*?\\/(\\w+)[\\?]{0,1}.*$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v32</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dedupe</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_FIRST</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  querys:\x7F  - key: k1\x7F- operate: rename\x7F  querys:\x7F  - oldKey: k2\x7F    newKey: k2-new\x7F- operate: replace\x7F  querys:\x7F  - key: k2-new\x7F    newValue: v2-new\x7F- operate: add\x7F  querys:\x7F  - key: k3\x7F    value: v31-$1\x7F    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$\x7F- operate: append\x7F  querys:\x7F  - key: k3\x7F    appendValue: v32\x7F- operate: map\x7F  querys:\x7F  - fromKey: k3\x7F    toKey: k4\x7F- operate: dedupe\x7F  querys:\x7F  - key: k4\x7F    strategy: RETAIN_FIRST"><div></div></button></div></figure></div>
<p>\u53D1\u9001\u8BF7\u6C42</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"console.higress.io/get?k1=v11&#x26;k1=v12&#x26;k2=v2"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"args"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"k2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"v2-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"k3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"v31-get"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"v32"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"k4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"v31-get"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"url"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://foo.bar.com/get?k2-new=v2-new&#x26;k3=v31-get&#x26;k3=v32&#x26;k4=v31-get"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v &#x22;console.higress.io/get?k1=v11&#x26;k1=v12&#x26;k2=v2&#x22;\x7F{\x7F  &#x22;args&#x22;: {\x7F    &#x22;k2-new&#x22;: &#x22;v2-new&#x22;,\x7F    &#x22;k3&#x22;: [\x7F      &#x22;v31-get&#x22;,\x7F      &#x22;v32&#x22;\x7F    ],\x7F    &#x22;k4&#x22;: &#x22;v31-get&#x22;\x7F  },\x7F  ...\x7F  &#x22;url&#x22;: &#x22;http://foo.bar.com/get?k2-new=v2-new&#x26;k3=v31-get&#x26;k3=v32&#x26;k4=v31-get&#x22;\x7F}"><div></div></button></div></figure></div>
<h4 id="\u8F6C\u6362\u8BF7\u6C42\u4F53">\u8F6C\u6362\u8BF7\u6C42\u4F53</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a2-new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">t3-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">t1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">t1-$1-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">host_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^(.*)\\.com$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dedupe</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_FIRST</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  body:\x7F  - key: a1\x7F- operate: rename\x7F  body:\x7F  - oldKey: a2\x7F    newKey: a2-new\x7F- operate: replace\x7F  body:\x7F  - key: a3\x7F    newValue: t3-new\x7F    value_type: string\x7F- operate: add\x7F  body:\x7F  - key: a1-new\x7F    value: t1-new\x7F    value_type: string\x7F- operate: append\x7F  body:\x7F  - key: a1-new\x7F    appendValue: t1-$1-append\x7F    value_type: string\x7F    host_pattern: ^(.*)\\.com$\x7F- operate: map\x7F  body:\x7F  - fromKey: a1-new\x7F    toKey: a4\x7F- operate: dedupe\x7F  body:\x7F  - key: a4\x7F    strategy: RETAIN_FIRST"><div></div></button></div></figure></div>
<p>\u53D1\u9001\u8BF7\u6C42\uFF1A</p>
<p><strong>1. Content-Type: application/json</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-x</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"a1":"t1","a2":"t2","a3":"t3"}'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"application/json",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a1-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-new"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-foo.bar-append"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t2",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t3-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t1-new"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -x POST console.higress.io/post -H &#x27;host: foo.bar.com&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; -d &#x27;{&#x22;a1&#x22;:&#x22;t1&#x22;,&#x22;a2&#x22;:&#x22;t2&#x22;,&#x22;a3&#x22;:&#x22;t3&#x22;}&#x27;\x7F{\x7F  ...\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;Content-Type&#x22;: &#x22;application/json&#x22;,\x7F    ...\x7F  },\x7F  &#x22;json&#x22;: {\x7F    &#x22;a1-new&#x22;: [\x7F      &#x22;t1-new&#x22;,\x7F      &#x22;t1-foo.bar-append&#x22;\x7F    ],\x7F    &#x22;a2-new&#x22;: &#x22;t2&#x22;,\x7F    &#x22;a3&#x22;: &#x22;t3-new&#x22;,\x7F    &#x22;a4&#x22;: &#x22;t1-new&#x22;\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<p><strong>2. Content-Type: application/x-www-form-urlencoded</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'a1=t1&#x26;a2=t2&#x26;a3=t3'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"form"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a1-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-new"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-foo.bar-append"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t2",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t3-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t1-new"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"application/x-www-form-urlencoded",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post -H &#x27;host: foo.bar.com&#x27; \\\x7F-d &#x27;a1=t1&#x26;a2=t2&#x26;a3=t3&#x27;\x7F{\x7F  ...\x7F  &#x22;form&#x22;: {\x7F    &#x22;a1-new&#x22;: [\x7F      &#x22;t1-new&#x22;,\x7F      &#x22;t1-foo.bar-append&#x22;\x7F    ],\x7F    &#x22;a2-new&#x22;: &#x22;t2&#x22;,\x7F    &#x22;a3&#x22;: &#x22;t3-new&#x22;,\x7F    &#x22;a4&#x22;: &#x22;t1-new&#x22;\x7F  },\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;Content-Type&#x22;: &#x22;application/x-www-form-urlencoded&#x22;,\x7F    ...\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<p><strong>3. Content-Type:  multipart/form-data</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-F </span><span style="--0:#9ECBFF">a1=t1</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-F</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a2=t2</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-F</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a3=t3</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"form"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a1-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-new"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-foo.bar-append"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t2",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t3-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t1-new"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"multipart/form-data; boundary=------------------------1118b3fab5afbc4e",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post -H &#x27;host: foo.bar.com&#x27; \\\x7F-F a1=t1 -F a2=t2 -F a3=t3\x7F{\x7F  ...\x7F  &#x22;form&#x22;: {\x7F    &#x22;a1-new&#x22;: [\x7F      &#x22;t1-new&#x22;,\x7F      &#x22;t1-foo.bar-append&#x22;\x7F    ],\x7F    &#x22;a2-new&#x22;: &#x22;t2&#x22;,\x7F    &#x22;a3&#x22;: &#x22;t3-new&#x22;,\x7F    &#x22;a4&#x22;: &#x22;t1-new&#x22;\x7F  },\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;Content-Type&#x22;: &#x22;multipart/form-data; boundary=------------------------1118b3fab5afbc4e&#x22;,\x7F    ...\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<h3 id="response-transformer">Response Transformer</h3>
<p>\u4E0E Request Transformer \u7C7B\u4F3C\uFF0C\u5728\u6B64\u4EC5\u8BF4\u660E\u8F6C\u6362 JSON \u5F62\u5F0F\u7684\u8BF7\u6C42/\u54CD\u5E94\u4F53\u65F6\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A</p>
<h4 id="key-\u5D4C\u5957">key \u5D4C\u5957 <code dir="auto">.</code></h4>
<p>1.\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6307\u5B9A\u7684 key \u4E2D\u542B\u6709 <code dir="auto">.</code> \u8868\u793A\u5D4C\u5957\u542B\u4E49\uFF0C\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">respRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="respRules:\x7F- operate: add\x7F  body:\x7F  - key: foo.bar\x7F    value: value"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"foo"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"bar"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"value"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8"> </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v console.higress.io/get\x7F{\x7F ...\x7F &#x22;foo&#x22;: {\x7F  &#x22;bar&#x22;: &#x22;value&#x22;\x7F },\x7F ...\x7F}"><div></div></button></div></figure></div>
<p>2.\u5F53\u4F7F\u7528 <code dir="auto">\\.</code> \u5BF9 key \u4E2D\u7684 <code dir="auto">.</code> \u8FDB\u884C\u8F6C\u4E49\u540E\uFF0C\u8868\u793A\u975E\u5D4C\u5957\u542B\u4E49\uFF0C\u5982\u4E0B\uFF1A</p>
<blockquote>
<p>\u5F53\u4F7F\u7528\u53CC\u5F15\u53F7\u62EC\u4F4F\u5B57\u7B26\u4E32\u65F6\u4F7F\u7528 <code dir="auto">\\\\.</code> \u8FDB\u884C\u8F6C\u4E49</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">respRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo\\.bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="respRules:\x7F- operate: add\x7F  body:\x7F  - key: foo\\.bar\x7F    value: value"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/get</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"foo.bar"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"value",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v console.higress.io/get\x7F{\x7F ...\x7F &#x22;foo.bar&#x22;: &#x22;value&#x22;,\x7F ...\x7F}"><div></div></button></div></figure></div>
<h4 id="\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20-index">\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20 <code dir="auto">.index</code></h4>
<p>\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u4E0B\u6807 \`array.index \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20\uFF0C\u4E0B\u6807\u4ECE 0 \u5F00\u59CB\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"users"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"123"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"zhangsan"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">18</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"456"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"lisi"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">19</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;users&#x22;: [\x7F    {\x7F      &#x22;123&#x22;: { &#x22;name&#x22;: &#x22;zhangsan&#x22;, &#x22;age&#x22;: 18 }\x7F    },\x7F    {\x7F      &#x22;456&#x22;: { &#x22;name&#x22;: &#x22;lisi&#x22;, &#x22;age&#x22;: 19 }\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>1.\u79FB\u9664 <code dir="auto">user</code> \u7B2C\u4E00\u4E2A\u5143\u7D20\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  body:\x7F  - key: users.0"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"users"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"456"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"lisi"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;users&#x22;:[{&#x22;123&#x22;:{&#x22;name&#x22;:&#x22;zhangsan&#x22;}},{&#x22;456&#x22;:{&#x22;name&#x22;:&#x22;lisi&#x22;}}]}&#x27;\x7F{\x7F  ...\x7F  &#x22;json&#x22;: {\x7F    &#x22;users&#x22;: [\x7F      {\x7F        &#x22;456&#x22;: {\x7F          &#x22;name&#x22;: &#x22;lisi&#x22;\x7F        }\x7F      }\x7F    ]\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<p>2.\u5C06 <code dir="auto">users</code> \u7B2C\u4E00\u4E2A\u5143\u7D20\u7684 key \u4E3A <code dir="auto">123</code> \u91CD\u547D\u540D\u4E3A <code dir="auto">msg</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.0.123</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.0.first</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: rename\x7F  body:\x7F  - oldKey: users.0.123\x7F    newKey: users.0.first"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"users"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"msg"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"zhangsan"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"456"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"lisi"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;users&#x22;:[{&#x22;123&#x22;:{&#x22;name&#x22;:&#x22;zhangsan&#x22;}},{&#x22;456&#x22;:{&#x22;name&#x22;:&#x22;lisi&#x22;}}]}&#x27;\x7F{\x7F  ...\x7F  &#x22;json&#x22;: {\x7F    &#x22;users&#x22;: [\x7F      {\x7F        &#x22;msg&#x22;: {\x7F          &#x22;name&#x22;: &#x22;zhangsan&#x22;\x7F        }\x7F      },\x7F      {\x7F        &#x22;456&#x22;: {\x7F          &#x22;name&#x22;: &#x22;lisi&#x22;\x7F        }\x7F      }\x7F    ]\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<h4 id="\u904D\u5386\u6570\u7EC4\u5143\u7D20">\u904D\u5386\u6570\u7EC4\u5143\u7D20 <code dir="auto">.#</code></h4>
<p>\u53EF\u4EE5\u4F7F\u7528 <code dir="auto">array.#</code> \u5BF9\u6570\u7EC4\u8FDB\u884C\u904D\u5386\u64CD\u4F5C\uFF1A</p>
<blockquote>
<p>\u2757\uFE0F\u8BE5\u64CD\u4F5C\u76EE\u524D\u53EA\u80FD\u7528\u5728 replace \u4E0A\uFF0C\u8BF7\u52FF\u5728\u5176\u4ED6\u8F6C\u6362\u4E2D\u5C1D\u8BD5\u8BE5\u64CD\u4F5C\uFF0C\u4EE5\u514D\u9020\u6210\u65E0\u6CD5\u9884\u77E5\u7684\u7ED3\u679C</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"users"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"zhangsan"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">18</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"lisi"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">19</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;users&#x22;: [\x7F    {\x7F      &#x22;name&#x22;: &#x22;zhangsan&#x22;,\x7F      &#x22;age&#x22;: 18\x7F    },\x7F    {\x7F      &#x22;name&#x22;: &#x22;lisi&#x22;,\x7F      &#x22;age&#x22;: 19\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.#.age</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">20</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: replace\x7F  body:\x7F  - key: users.#.age\x7F    newValue: 20"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"users":[{"name":"zhangsan","age":18},{"name":"lisi","age":19}]}'</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin \u54CD\u5E94\u7ED3\u679C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"users"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"age"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"20",</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"zhangsan"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"age"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"20",</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"lisi"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;users&#x22;:[{&#x22;name&#x22;:&#x22;zhangsan&#x22;,&#x22;age&#x22;:18},{&#x22;name&#x22;:&#x22;lisi&#x22;,&#x22;age&#x22;:19}]}&#x27;\x7F{\x7F  ...\x7F  &#x22;json&#x22;: {\x7F    &#x22;users&#x22;: [\x7F      {\x7F        &#x22;age&#x22;: &#x22;20&#x22;,\x7F        &#x22;name&#x22;: &#x22;zhangsan&#x22;\x7F      },\x7F      {\x7F        &#x22;age&#x22;: &#x22;20&#x22;,\x7F        &#x22;name&#x22;: &#x22;lisi&#x22;\x7F      }\x7F    ]\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>`,n={title:"\u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362",keywords:["higress","transformer"],description:"\u8BF7\u6C42\u54CD\u5E94\u8F6C\u6362\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/transformation/transformer.md",p=void 0,i=function(){return`

## \u529F\u80FD\u8BF4\u660E
\`transformer\` \u63D2\u4EF6\u53EF\u4EE5\u5BF9\u8BF7\u6C42/\u54CD\u5E94\u5934\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u8FDB\u884C\u8F6C\u6362\uFF0C\u652F\u6301\u7684\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u5305\u62EC\u5220\u9664\u3001\u91CD\u547D\u540D\u3001\u66F4\u65B0\u3001\u6DFB\u52A0\u3001\u8FFD\u52A0\u3001\u6620\u5C04\u3001\u53BB\u91CD\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`410\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| ------ | ------ | ------ | ------ | -------- |
|  reqRules |  string  | \u9009\u586B\uFF0CreqRules\u548CrespRules\u81F3\u5C11\u586B\u4E00\u4E2A |   -  |  \u8BF7\u6C42\u8F6C\u6362\u5668\u914D\u7F6E\uFF0C\u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4EE5\u53CA\u8BF7\u6C42\u5934\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42\u4F53\u7684\u8F6C\u6362\u89C4\u5219  |
|  respRules |  string  | \u9009\u586B\uFF0CreqRules\u548CrespRules\u81F3\u5C11\u586B\u4E00\u4E2A |   -  |  \u54CD\u5E94\u8F6C\u6362\u5668\u914D\u7F6E\uFF0C\u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4EE5\u53CA\u54CD\u5E94\u5934\u3001\u54CD\u5E94\u4F53\u7684\u8F6C\u6362\u89C4\u5219  |

\`reqRules\`\u548C\`respRules\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| ------ | ------ | ------ | ------ | -------- |
| operate |  string  | \u5FC5\u586B\uFF0C\u53EF\u9009\u503C\u4E3A \`remove\`, \`rename\`, \`replace\`, \`add\`, \`append\`, \`map\`, \`dedupe\` |   -  |  \u6307\u5B9A\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\uFF0C\u652F\u6301\u7684\u64CD\u4F5C\u7C7B\u578B\u6709\u5220\u9664 (remove)\u3001\u91CD\u547D\u540D (rename)\u3001\u66F4\u65B0 (replace)\u3001\u6DFB\u52A0 (add)\u3001\u8FFD\u52A0 (append)\u3001\u6620\u5C04 (map)\u3001\u53BB\u91CD (dedupe)\uFF0C\u5F53\u5B58\u5728\u591A\u9879\u4E0D\u540C\u7C7B\u578B\u7684\u8F6C\u6362\u89C4\u5219\u65F6\uFF0C\u6309\u7167\u4E0A\u8FF0\u64CD\u4F5C\u7C7B\u578B\u987A\u5E8F\u4F9D\u6B21\u6267\u884C  |
|  mapSource  | string  | \u9009\u586B\uFF0C\u53EF\u9009\u503C\u4E3A\`headers\`, \`querys\`,\`body\` |  -  | \u4EC5\u5728operate\u4E3A\`map\`\u65F6\u6709\u6548\u3002\u6307\u5B9A\u6620\u5C04\u6765\u6E90\uFF0C\u82E5\u4E0D\u586B\u8BE5\u5B57\u6BB5\uFF0C\u5219\u9ED8\u8BA4\u6620\u5C04\u6765\u6E90\u4E3A\u81EA\u8EAB |
|  headers  |  array of object  | \u9009\u586B     |  -  | \u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u5934\u8F6C\u6362\u89C4\u5219 |
| querys |  array of object  | \u9009\u586B     |   -  | \u6307\u5B9A\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u8F6C\u6362\u89C4\u5219 |
| body | array of object | \u9009\u586B | - | \u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u8F6C\u6362\u89C4\u5219\uFF0C\u8BF7\u6C42\u4F53\u8F6C\u6362\u5141\u8BB8 content-type \u4E3A \`application/json\`, \`application/x-www-form-urlencoded\`, \`multipart/form-data\`\uFF1B\u54CD\u5E94\u4F53\u8F6C\u6362\u4EC5\u5141\u8BB8 content-type \u4E3A \`application/json\` |

\`headers\`, \`querys\`, \`body\`\u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 |  \u9ED8\u8BA4\u503C | \u63CF\u8FF0                                                |
| ------ | ------ | ------ | -------- |---------------------------------------------------|
| key |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`remove\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| oldKey | string | \u9009\u586B | - |\u5728operate\u4E3A\`rename\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| newKey |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`rename\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key | string | \u9009\u586B | - | \u5728operate\u4E3A\`replace\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| newValue |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`replace\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key | string | \u9009\u586B | - | \u5728operate\u4E3A\`add\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| value | string | \u9009\u586B | - | \u5728operate\u4E3A\`add\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`append\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| appendValue | string | \u9009\u586B | - | \u5728operate\u4E3A\`append\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| fromKey |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`map\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| toKey |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`map\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| key |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`dedupe\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
| strategy |  string  | \u9009\u586B |   -  | \u5728operate\u4E3A\`dedupe\`\u65F6\u4F7F\u7528\uFF0C\u7528\u6CD5\u8BE6\u89C1[\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) |
|  value_type  |  string  | \u9009\u586B\uFF0C\u53EF\u9009\u503C\u4E3A \`object\`, \`boolean\`, \`number\`, \`string\` |  string  | \u5F53\`content-type: application/json\`\u65F6\uFF0C\u8BE5\u5B57\u6BB5\u6307\u5B9A\u8BF7\u6C42/\u54CD\u5E94\u4F53\u53C2\u6570\u7684\u503C\u7C7B\u578B |
| host_pattern |  string  | \u9009\u586B     |   -  | \u6307\u5B9A\u8BF7\u6C42\u4E3B\u673A\u540D\u5339\u914D\u89C4\u5219\uFF0C\u5F53\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4E3A \`replace\`, \`add\`, \`append\` \u65F6\u6709\u6548 |
| path_pattern | string | \u9009\u586B | - | \u6307\u5B9A\u8BF7\u6C42\u8DEF\u5F84\u5339\u914D\u89C4\u5219\uFF0C\u5F53\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u4E3A \`replace\`, \`add\`, \`append\` \u65F6\u6709\u6548 |

\u6CE8\u610F\uFF1A

* \`request transformer\` \u652F\u6301\u4EE5\u4E0B\u8F6C\u6362\u5BF9\u8C61\uFF1A\u8BF7\u6C42\u5934\u90E8\u3001\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570\u3001\u8BF7\u6C42\u4F53\uFF08application/json, application/x-www-form-urlencoded, multipart/form-data\uFF09
* \`response transformer\` \u652F\u6301\u4EE5\u4E0B\u8F6C\u6362\u5BF9\u8C61\uFF1A\u54CD\u5E94\u5934\u90E8\u3001\u54CD\u5E94\u4F53\uFF08application/json\uFF09
* \u63D2\u4EF6\u652F\u6301\u53CC\u5411\u8F6C\u6362\u80FD\u529B\uFF0C\u5373\u5355\u4E2A\u63D2\u4EF6\u80FD\u591F\u5B8C\u6210\u5BF9\u8BF7\u6C42\u548C\u54CD\u5E94\u90FD\u505A\u8F6C\u6362
* \u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B\u7684\u6267\u884C\u987A\u5E8F\uFF0C\u4E3A\u914D\u7F6E\u6587\u4EF6\u4E2D\u7F16\u5199\u7684\u987A\u5E8F\uFF0C\u5982\uFF1Aremove \u2192 rename \u2192 replace \u2192 add \u2192 append \u2192 map \u2192 dedupe\u6216\u8005dedupe \u2192 map \u2192 append \u2192 add \u2192 replace \u2192 rename \u2192 remove\u7B49
* \u5F53\u8F6C\u6362\u5BF9\u8C61\u4E3A headers \u65F6\uFF0C\` key\` \u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B\u5F53\u4E3A headers \u4E14\u4E3A \`rename\`, \`map\` \u64CD\u4F5C\u65F6\uFF0C\`value\` \u4E5F\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF08\u56E0\u4E3A\u6B64\u65F6\u8BE5\u5B57\u6BB5\u5177\u6709 key \u542B\u4E49\uFF09\uFF1B\u800C querys \u548C body \u7684 \`key\`, \`value\` \u5B57\u6BB5\u5747\u533A\u5206\u5927\u5C0F\u5199
* \`value_type\` \u4EC5\u5BF9 content-type \u4E3A application/json \u7684\u8BF7\u6C42/\u54CD\u5E94\u4F53\u6709\u6548
* \`host_pattern\` \u548C \`path_pathern\` \u652F\u6301 [RE2 \u8BED\u6CD5](https://pkg.go.dev/regexp/syntax)\uFF0C\u4EC5\u5BF9 \`replace\`, \`add\`, \`append\` \u64CD\u4F5C\u6709\u6548\uFF0C\u4E14\u5728\u4E00\u9879\u8F6C\u6362\u89C4\u5219\u4E2D\u4E24\u8005\u53EA\u80FD\u9009\u586B\u5176\u4E00\uFF0C\u82E5\u5747\u586B\u5199\uFF0C\u5219 \`host_pattern\` \u751F\u6548\uFF0C\u800C \`path_pattern\` \u5931\u6548



## \u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B

| \u64CD\u4F5C\u7C7B\u578B      | key \u5B57\u6BB5\u542B\u4E49 | value \u5B57\u6BB5\u542B\u4E49     | \u63CF\u8FF0                                                         |
| ------ | ------ | ------ | ------------------------------------------------------------ |
| \u5220\u9664 remove   | \u76EE\u6807 key     |\u65E0\u9700\u8BBE\u7F6E| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`key\`\uFF0C\u5219\u5220\u9664\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C                 |
| \u91CD\u547D\u540D rename | \u76EE\u6807 oldKey |\u65B0\u7684 key \u540D\u79F0 newKey| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`oldKey:value\`\uFF0C\u5219\u5C06\u5176\u952E\u540D\u91CD\u547D\u540D\u4E3A \`newKey\`\uFF0C\u5F97\u5230 \`newKey:value\`\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C |
| \u66F4\u65B0 replace  | \u76EE\u6807 key |\u65B0\u7684 value \u503C newValue| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`key:value\`\uFF0C\u5219\u5C06\u5176 value \u66F4\u65B0\u4E3A \`newValue\`\uFF0C\u5F97\u5230 \`key:newValue\`\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C |
| \u6DFB\u52A0 add      | \u6DFB\u52A0\u7684 key | \u6DFB\u52A0\u7684 value |\u82E5\u4E0D\u5B58\u5728\u6307\u5B9A\u7684 \`key:value\`\uFF0C\u5219\u6DFB\u52A0\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C               |
| \u8FFD\u52A0 append   | \u76EE\u6807 key |\u8FFD\u52A0\u7684 value\u503C appendValue| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`key:value\`\uFF0C\u5219\u8FFD\u52A0 appendValue \u5F97\u5230 \`key:[value..., appendValue]\`\uFF1B\u5426\u5219\u76F8\u5F53\u4E8E\u6267\u884C add \u64CD\u4F5C\uFF0C\u5F97\u5230 \`key:appendValue\` |
| \u6620\u5C04 map      | \u6620\u5C04\u6765\u6E90 fromKey |\u6620\u5C04\u76EE\u6807 toKey| \u82E5\u5B58\u5728\u6307\u5B9A\u7684 \`fromKey:fromValue\`\uFF0C\u5219\u5C06\u5176\u503C fromValue \u6620\u5C04\u7ED9 toKey \u7684\u503C\uFF0C\u5F97\u5230 \`toKey:fromValue\`\uFF0C\u540C\u65F6\u4FDD\u7559 \`fromKey:fromValue\`\uFF08\u6CE8\uFF1A\u82E5 toKey \u5DF2\u5B58\u5728\u5219\u5176\u503C\u4F1A\u88AB\u8986\u76D6\uFF09\uFF1B\u5426\u5219\u65E0\u64CD\u4F5C |
| \u53BB\u91CD dedupe   | \u76EE\u6807 key |\u6307\u5B9A\u53BB\u91CD\u7B56\u7565 strategy| \`strategy\` \u53EF\u9009\u503C\u4E3A\uFF1A<br>\`RETAIN_UNIQUE\`: \u6309\u987A\u5E8F\u4FDD\u7559\u6240\u6709\u552F\u4E00\u503C\uFF0C\u5982 \`k1:[v1,v2,v3,v3,v2,v1]\`\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 \`k1:[v1,v2,v3]\` <br>\`RETAIN_LAST\`: \u4FDD\u7559\u6700\u540E\u4E00\u4E2A\u503C\uFF0C\u5982 \`k1:[v1,v2,v3]\`\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 \`k1:v3\` <br>\`RETAIN_FIRST\` (default): \u4FDD\u7559\u7B2C\u4E00\u4E2A\u503C\uFF0C\u5982 \`k1:[v1,v2,v3]\`\uFF0C\u53BB\u91CD\u540E\u5F97\u5230 \`k1:v1\`<br>\uFF08\u6CE8\uFF1A\u82E5\u53BB\u91CD\u540E\u53EA\u5269\u4E0B\u4E00\u4E2A\u5143\u7D20 v1 \u65F6\uFF0C\u952E\u503C\u5BF9\u53D8\u4E3A \`k1:v1\`, \u800C\u4E0D\u662F \`k1:[v1]\`\uFF09 |




## \u914D\u7F6E\u793A\u4F8B

### \u5B9E\u73B0\u57FA\u4E8EBody\u53C2\u6570\u8DEF\u7531

\u914D\u7F6E\u793A\u4F8B\uFF1A

\`\`\`yaml
reqRules:
- operate: map
  headers:
  - fromKey: userId
    toKey: x-user-id
  mapSource: body
\`\`\`

\u6B64\u89C4\u5219\u5C06\u8BF7\u6C42body\u4E2D\u7684\`userId\`\u89E3\u6790\u51FA\u540E\uFF0C\u8BBE\u7F6E\u5230\u8BF7\u6C42Header\`x-user-id\`\u4E2D\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u57FA\u4E8EHigress\u8BF7\u6C42Header\u5339\u914D\u8DEF\u7531\u7684\u80FD\u529B\u6765\u5B9E\u73B0\u57FA\u4E8EBody\u53C2\u6570\u7684\u8DEF\u7531\u4E86\u3002

\u6B64\u914D\u7F6E\u540C\u65F6\u652F\u6301\`application/json\`\u548C\`application/x-www-form-urlencoded\`\u4E24\u79CD\u7C7B\u578B\u7684\u8BF7\u6C42Body\u3002

\u4E3E\u4F8B\u6765\u8BF4\uFF1A

**\u5BF9\u4E8Eapplication/json\u7C7B\u578B\u7684body**

\`\`\`bash
curl localhost -d '{"userId":12, "userName":"johnlanni"}' -H 'content-type:application/json'
\`\`\`

\u5C06\u4ECEjson\u4E2D\u63D0\u53D6\u51FA\`userId\`\u5B57\u6BB5\u7684\u503C\uFF0C\u8BBE\u7F6E\u5230\`x-user-id\`\u4E2D\uFF0C\u540E\u7AEF\u670D\u52A1\u6536\u5230\u7684\u8BF7\u6C42\u5934\u5C06\u589E\u52A0:\`x-usr-id: 12\`\u3002

\u56E0\u4E3A\u5728\u63D2\u4EF6\u65B0\u589E\u8FD9\u4E2AHeader\u540E\uFF0C\u7F51\u5173\u5C06\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8FD9\u4E2A\u8BF7\u6C42\u5934\u6765\u5339\u914D\u8DEF\u7531\u5230\u7279\u5B9A\u7684\u76EE\u6807\u670D\u52A1\u3002


**\u5BF9\u4E8Eapplication/x-www-form-urlencoded\u7C7B\u578B\u7684body**

\`\`\`bash
curl localhost -d 'userId=12&userName=johnlanni'
\`\`\`

\u5C06\u4ECE\`k1=v1&k2=v2\`\u8FD9\u6837\u7684\u8868\u5355\u683C\u5F0F\u4E2D\u63D0\u53D6\u51FA\`userId\`\u5B57\u6BB5\u7684\u503C\uFF0C\u8BBE\u7F6E\u5230\`x-user-id\`\u4E2D\uFF0C\u540E\u7AEF\u670D\u52A1\u6536\u5230\u7684\u8BF7\u6C42\u5934\u5C06\u589E\u52A0:\`x-usr-id: 12\`\u3002

\u56E0\u4E3A\u5728\u63D2\u4EF6\u65B0\u589E\u8FD9\u4E2AHeader\u540E\uFF0C\u7F51\u5173\u5C06\u91CD\u65B0\u8BA1\u7B97\u8DEF\u7531\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5B9E\u73B0\u7F51\u5173\u8DEF\u7531\u914D\u7F6E\u6839\u636E\u8FD9\u4E2A\u8BF7\u6C42\u5934\u6765\u5339\u914D\u8DEF\u7531\u5230\u7279\u5B9A\u7684\u76EE\u6807\u670D\u52A1\u3002

#### json path \u652F\u6301

\u53EF\u4EE5\u6839\u636E [GJSON Path \u8BED\u6CD5](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\uFF0C\u4ECE\u590D\u6742\u7684 json \u4E2D\u63D0\u53D6\u51FA\u5B57\u6BB5\u3002

\u6BD4\u8F83\u5E38\u7528\u7684\u64CD\u4F5C\u4E3E\u4F8B\uFF0C\u5BF9\u4E8E\u4EE5\u4E0B json:

\`\`\`json
{
  "name": {"first": "Tom", "last": "Anderson"},
  "age":37,
  "children": ["Sara","Alex","Jack"],
  "fav.movie": "Deer Hunter",
  "friends": [
    {"first": "Dale", "last": "Murphy", "age": 44, "nets": ["ig", "fb", "tw"]},
    {"first": "Roger", "last": "Craig", "age": 68, "nets": ["fb", "tw"]},
    {"first": "Jane", "last": "Murphy", "age": 47, "nets": ["ig", "tw"]}
  ]
}
\`\`\`

\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u6837\u7684\u63D0\u53D6:

\`\`\`text
name.last              "Anderson"
name.first             "Tom"
age                    37
children               ["Sara","Alex","Jack"]
children.0             "Sara"
children.1             "Alex"
friends.1              {"first": "Roger", "last": "Craig", "age": 68}
friends.1.first        "Roger"
\`\`\`

\u73B0\u5728\u5982\u679C\u60F3\u4ECE\u4E0A\u9762\u8FD9\u4E2A json \u683C\u5F0F\u7684 body \u4E2D\u63D0\u53D6\u51FA friends \u4E2D\u7B2C\u4E8C\u9879\u7684 first \u5B57\u6BB5\uFF0C\u6765\u8BBE\u7F6E\u5230 Header \`x-first-name\` \u4E2D\uFF0C\u540C\u65F6\u62BD\u53D6 last \u5B57\u6BB5\uFF0C\u6765\u8BBE\u7F6E\u5230 Header \`x-last-name\` \u4E2D\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4EFD\u63D2\u4EF6\u914D\u7F6E:

\`\`\`yaml
reqRules:
- operate: map
  headers:
  - fromKey: friends.1.first
    toKey: x-first-name
  - fromKey: friends.1.last
    toKey: x-last-name
  mapSource: body
\`\`\`

### Request Transformer

#### \u8F6C\u6362\u8BF7\u6C42\u5934\u90E8

\`\`\`yaml
reqRules:
- operate: remove
  headers:
  - key: X-remove
- operate: rename
  headers:
  - oldKey: X-not-renamed
    newKey: X-renamed
- operate: replace
  headers:
  - key: X-replace
    newValue: replaced
- operate: add
  headers:
  - key: X-add-append
    value: host-$1
    host_pattern: ^(.*)\\.com$
- operate: append
  headers:
  - key: X-add-append
    appendValue: path-$1
    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$
- operate: map
  headers:
  - fromKey: X-add-append
    toKey: X-map
- operate: dedupe
  headers:
  - key: X-dedupe-first
    strategy: RETAIN_FIRST
  - key: X-dedupe-last
    strategy: RETAIN_LAST
  - key: X-dedupe-unique
    strategy: RETAIN_UNIQUE
\`\`\`

\u53D1\u9001\u8BF7\u6C42

\`\`\`bash
$ curl -v console.higress.io/get -H 'host: foo.bar.com' \\
-H 'X-remove: exist' -H 'X-not-renamed:test' -H 'X-replace:not-replaced' \\
-H 'X-dedupe-first:1' -H 'X-dedupe-first:2' -H 'X-dedupe-first:3' \\
-H 'X-dedupe-last:a' -H 'X-dedupe-last:b' -H 'X-dedupe-last:c' \\
-H 'X-dedupe-unique:1' -H 'X-dedupe-unique:2' -H 'X-dedupe-unique:3' \\
-H 'X-dedupe-unique:3' -H 'X-dedupe-unique:2' -H 'X-dedupe-unique:1'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  "args": {},
  "headers": {
    ...
    "X-Add-Append": "host-foo.bar,path-get",
    ...
    "X-Dedupe-First": "1",
    "X-Dedupe-Last": "c",
    "X-Dedupe-Unique": "1,2,3",
    ...
    "X-Map": "host-foo.bar,path-get",
    "X-Renamed": "test",
    "X-Replace": "replaced"
  },
  ...
}
\`\`\`

#### \u8F6C\u6362\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570

\`\`\`yaml
reqRules:
- operate: remove
  querys:
  - key: k1
- operate: rename
  querys:
  - oldKey: k2
    newKey: k2-new
- operate: replace
  querys:
  - key: k2-new
    newValue: v2-new
- operate: add
  querys:
  - key: k3
    value: v31-$1
    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$
- operate: append
  querys:
  - key: k3
    appendValue: v32
- operate: map
  querys:
  - fromKey: k3
    toKey: k4
- operate: dedupe
  querys:
  - key: k4
    strategy: RETAIN_FIRST
\`\`\`

\u53D1\u9001\u8BF7\u6C42

\`\`\`bash
$ curl -v "console.higress.io/get?k1=v11&k1=v12&k2=v2"

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  "args": {
    "k2-new": "v2-new",
    "k3": [
      "v31-get",
      "v32"
    ],
    "k4": "v31-get"
  },
  ...
  "url": "http://foo.bar.com/get?k2-new=v2-new&k3=v31-get&k3=v32&k4=v31-get"
}
\`\`\`

#### \u8F6C\u6362\u8BF7\u6C42\u4F53

\`\`\`yaml
reqRules:
- operate: remove
  body:
  - key: a1
- operate: rename
  body: 
  - oldKey: a2
    newKey: a2-new
- operate: replace
  body:
  - key: a3
    newValue: t3-new
    value_type: string
- operate: add
  body:
  - key: a1-new
    value: t1-new
    value_type: string
- operate: append
  body:
  - key: a1-new
    appendValue: t1-$1-append
    value_type: string
    host_pattern: ^(.*)\\.com$
- operate: map
  body:
  - fromKey: a1-new
    toKey: a4
- operate: dedupe
  body:
  - key: a4
    strategy: RETAIN_FIRST
\`\`\`

\u53D1\u9001\u8BF7\u6C42\uFF1A

**1. Content-Type: application/json**

\`\`\`bash
$ curl -v -x POST console.higress.io/post -H 'host: foo.bar.com' \\
-H 'Content-Type: application/json' -d '{"a1":"t1","a2":"t2","a3":"t3"}'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "headers": {
    ...
    "Content-Type": "application/json",
    ...
  },
  "json": {
    "a1-new": [
      "t1-new",
      "t1-foo.bar-append"
    ],
    "a2-new": "t2",
    "a3": "t3-new",
    "a4": "t1-new"
  },
  ...
}
\`\`\`

**2. Content-Type: application/x-www-form-urlencoded**

\`\`\`bash
$ curl -v -X POST console.higress.io/post -H 'host: foo.bar.com' \\
-d 'a1=t1&a2=t2&a3=t3'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "form": {
    "a1-new": [
      "t1-new",
      "t1-foo.bar-append"
    ],
    "a2-new": "t2",
    "a3": "t3-new",
    "a4": "t1-new"
  },
  "headers": {
    ...
    "Content-Type": "application/x-www-form-urlencoded",
    ...
  },
  ...
}
\`\`\`

**3. Content-Type:  multipart/form-data**

\`\`\`bash
$ curl -v -X POST console.higress.io/post -H 'host: foo.bar.com' \\
-F a1=t1 -F a2=t2 -F a3=t3

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "form": {
    "a1-new": [
      "t1-new",
      "t1-foo.bar-append"
    ],
    "a2-new": "t2",
    "a3": "t3-new",
    "a4": "t1-new"
  },
  "headers": {
    ...
    "Content-Type": "multipart/form-data; boundary=------------------------1118b3fab5afbc4e",
    ...
  },
  ...
}
\`\`\`

### Response Transformer

\u4E0E Request Transformer \u7C7B\u4F3C\uFF0C\u5728\u6B64\u4EC5\u8BF4\u660E\u8F6C\u6362 JSON \u5F62\u5F0F\u7684\u8BF7\u6C42/\u54CD\u5E94\u4F53\u65F6\u7684\u6CE8\u610F\u4E8B\u9879\uFF1A

#### key \u5D4C\u5957 \`.\`

1.\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u6307\u5B9A\u7684 key \u4E2D\u542B\u6709 \`.\` \u8868\u793A\u5D4C\u5957\u542B\u4E49\uFF0C\u5982\u4E0B\uFF1A

\`\`\`yaml
respRules:
- operate: add
  body:
  - key: foo.bar
    value: value
\`\`\`

\`\`\`bash
$ curl -v console.higress.io/get

# httpbin \u54CD\u5E94\u7ED3\u679C
{
 ...
 "foo": {
  "bar": "value"
 },
 ...
}
\`\`\`

2.\u5F53\u4F7F\u7528 \`\\.\` \u5BF9 key \u4E2D\u7684 \`.\` \u8FDB\u884C\u8F6C\u4E49\u540E\uFF0C\u8868\u793A\u975E\u5D4C\u5957\u542B\u4E49\uFF0C\u5982\u4E0B\uFF1A

> \u5F53\u4F7F\u7528\u53CC\u5F15\u53F7\u62EC\u4F4F\u5B57\u7B26\u4E32\u65F6\u4F7F\u7528 \`\\\\.\` \u8FDB\u884C\u8F6C\u4E49

\`\`\`yaml
respRules:
- operate: add
  body:
  - key: foo\\.bar
    value: value
\`\`\`

\`\`\`bash
$ curl -v console.higress.io/get

# httpbin \u54CD\u5E94\u7ED3\u679C
{
 ...
 "foo.bar": "value",
 ...
}
\`\`\`

#### \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20 \`.index\`

\u53EF\u4EE5\u901A\u8FC7\u6570\u7EC4\u4E0B\u6807 \`array.index \u8BBF\u95EE\u6570\u7EC4\u5143\u7D20\uFF0C\u4E0B\u6807\u4ECE 0 \u5F00\u59CB\uFF1A

\`\`\`json
{
  "users": [
    {
      "123": { "name": "zhangsan", "age": 18 }
    },
    {
      "456": { "name": "lisi", "age": 19 }
    }
  ]
}
\`\`\`

1.\u79FB\u9664 \`user\` \u7B2C\u4E00\u4E2A\u5143\u7D20\uFF1A

\`\`\`yaml
reqRules:
- operate: remove
  body:
  - key: users.0
\`\`\`

\`\`\`bash
$ curl -v -X POST console.higress.io/post \\
-H 'Content-Type: application/json' \\
-d '{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'

# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "json": {
    "users": [
      {
        "456": {
          "name": "lisi"
        }
      }
    ]
  },
  ...
}
\`\`\`

2.\u5C06 \`users\` \u7B2C\u4E00\u4E2A\u5143\u7D20\u7684 key \u4E3A \`123\` \u91CD\u547D\u540D\u4E3A \`msg\`:

\`\`\`yaml
reqRules:
- operate: rename
  body:
  - oldKey: users.0.123
    newKey: users.0.first
\`\`\`

\`\`\`bash
$ curl -v -X POST console.higress.io/post \\
-H 'Content-Type: application/json' \\
-d '{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'


# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "json": {
    "users": [
      {
        "msg": {
          "name": "zhangsan"
        }
      },
      {
        "456": {
          "name": "lisi"
        }
      }
    ]
  },
  ...
}
\`\`\`

#### \u904D\u5386\u6570\u7EC4\u5143\u7D20 \`.#\`

\u53EF\u4EE5\u4F7F\u7528 \`array.#\` \u5BF9\u6570\u7EC4\u8FDB\u884C\u904D\u5386\u64CD\u4F5C\uFF1A

> \u2757\uFE0F\u8BE5\u64CD\u4F5C\u76EE\u524D\u53EA\u80FD\u7528\u5728 replace \u4E0A\uFF0C\u8BF7\u52FF\u5728\u5176\u4ED6\u8F6C\u6362\u4E2D\u5C1D\u8BD5\u8BE5\u64CD\u4F5C\uFF0C\u4EE5\u514D\u9020\u6210\u65E0\u6CD5\u9884\u77E5\u7684\u7ED3\u679C

\`\`\`json
{
  "users": [
    {
      "name": "zhangsan", 
      "age": 18
    },
    {
      "name": "lisi",
      "age": 19
    }
  ]
}
\`\`\`

\`\`\`yaml
reqRules:
- operate: replace
  body:
  - key: users.#.age
    newValue: 20
\`\`\`

\`\`\`bash
$ curl -v -X POST console.higress.io/post \\
-H 'Content-Type: application/json' \\
-d '{"users":[{"name":"zhangsan","age":18},{"name":"lisi","age":19}]}'


# httpbin \u54CD\u5E94\u7ED3\u679C
{
  ...
  "json": {
    "users": [
      {
        "age": "20",
        "name": "zhangsan"
      },
      {
        "age": "20",
        "name": "lisi"
      }
    ]
  },
  ...
}
\`\`\`
`},t=function(){return s},l=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B",text:"\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u5B9E\u73B0\u57FA\u4E8Ebody\u53C2\u6570\u8DEF\u7531",text:"\u5B9E\u73B0\u57FA\u4E8EBody\u53C2\u6570\u8DEF\u7531"},{depth:4,slug:"json-path-\u652F\u6301",text:"json path \u652F\u6301"},{depth:3,slug:"request-transformer",text:"Request Transformer"},{depth:4,slug:"\u8F6C\u6362\u8BF7\u6C42\u5934\u90E8",text:"\u8F6C\u6362\u8BF7\u6C42\u5934\u90E8"},{depth:4,slug:"\u8F6C\u6362\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570",text:"\u8F6C\u6362\u8BF7\u6C42\u67E5\u8BE2\u53C2\u6570"},{depth:4,slug:"\u8F6C\u6362\u8BF7\u6C42\u4F53",text:"\u8F6C\u6362\u8BF7\u6C42\u4F53"},{depth:3,slug:"response-transformer",text:"Response Transformer"},{depth:4,slug:"key-\u5D4C\u5957",text:"key \u5D4C\u5957 ."},{depth:4,slug:"\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20-index",text:"\u8BBF\u95EE\u6570\u7EC4\u5143\u7D20 .index"},{depth:4,slug:"\u904D\u5386\u6570\u7EC4\u5143\u7D20",text:"\u904D\u5386\u6570\u7EC4\u5143\u7D20 .#"}]},a=c((u,f,B)=>{const{layout:m,...d}=n;return d.file=e,d.url=p,o`${v()}${y(s)}`})});export{a as Content,F as __tla,t as compiledContent,a as default,e as file,n as frontmatter,l as getHeadings,i as rawContent,p as url};
