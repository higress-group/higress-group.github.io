import{c,__tla as l}from"./astro-component.CXlaF79K.js";import{r as p,m as u,u as g,__tla as E}from"./constant.wvel8VgE.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let e,o,d,a,i,r,s,y=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">traffic-tag</code> \u63D2\u4EF6\u5141\u8BB8\u6839\u636E\u6743\u91CD\u6216\u7279\u5B9A\u8BF7\u6C42\u5185\u5BB9\u901A\u8FC7\u6DFB\u52A0\u7279\u5B9A\u8BF7\u6C42\u5934\u7684\u65B9\u5F0F\u5BF9\u8BF7\u6C42\u6D41\u91CF\u8FDB\u884C\u67D3\u8272\u3002\u5B83\u652F\u6301\u590D\u6742\u7684\u903B\u8F91\u6765\u786E\u5B9A\u5982\u4F55\u6839\u636E\u7528\u6237\u5B9A\u4E49\u7684\u6807\u51C6\u67D3\u8272\u6D41\u91CF\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u9ED8\u8BA4\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">400</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>
<p>\u6B64\u90E8\u5206\u63D0\u4F9B\u4E86\u914D\u7F6E\u5B57\u6BB5\u7684\u8BE6\u7EC6\u63CF\u8FF0\u3002</p>








































<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">conditionGroups</code></td><td>array of object</td><td>-</td><td>\u5426</td><td>\u5B9A\u4E49\u57FA\u4E8E\u5185\u5BB9\u7684\u6807\u8BB0\u6761\u4EF6\u7EC4\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u89C1<strong>\u6761\u4EF6\u7EC4\u914D\u7F6E</strong>\u3002</td></tr><tr><td><code dir="auto">weightGroups</code></td><td>array of object</td><td>-</td><td>\u5426</td><td>\u5B9A\u4E49\u57FA\u4E8E\u6743\u91CD\u7684\u6807\u8BB0\u6761\u4EF6\u7EC4\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u89C1<strong>\u6743\u91CD\u7EC4\u914D\u7F6E</strong>\u3002</td></tr><tr><td><code dir="auto">defaultTagKey</code></td><td>string</td><td>-</td><td>\u5426</td><td>\u9ED8\u8BA4\u7684\u6807\u8BB0\u952E\u540D\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\u4F7F\u7528\u3002\u5F53\u4E14\u4EC5\u5F53\u540C\u65F6\u914D\u7F6E\u4E86<strong>defaultTagVal</strong>\u65F6\u751F\u6548</td></tr><tr><td><code dir="auto">defaultTagVal</code></td><td>string</td><td>-</td><td>\u5426</td><td>\u9ED8\u8BA4\u7684\u6807\u8BB0\u503C\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\u4F7F\u7528\u3002\u5F53\u4E14\u4EC5\u5F53\u540C\u65F6\u914D\u7F6E\u4E86<strong>defaultTagKey</strong>\u65F6\u751F\u6548</td></tr></tbody></table>
<h3 id="\u6761\u4EF6\u7EC4\u914D\u7F6E">\u6761\u4EF6\u7EC4\u914D\u7F6E</h3>
<p><code dir="auto">conditionGroups</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>








































<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">headerName</code></td><td>string</td><td>-</td><td>\u662F</td><td>\u8981\u6DFB\u52A0\u6216\u4FEE\u6539\u7684 HTTP \u5934\u540D\u79F0\u3002</td></tr><tr><td><code dir="auto">headerValue</code></td><td>string</td><td>-</td><td>\u662F</td><td>HTTP \u5934\u7684\u503C\u3002</td></tr><tr><td><code dir="auto">logic</code></td><td>string</td><td>-</td><td>\u662F</td><td>\u6761\u4EF6\u7EC4\u4E2D\u7684\u903B\u8F91\u5173\u7CFB\uFF0C\u652F\u6301 <code dir="auto">and</code>\u3001<code dir="auto">or</code>\uFF0C\u5FC5\u987B\u4E3A\u5C0F\u5199\u5B57\u6BCD\u3002</td></tr><tr><td><code dir="auto">conditions</code></td><td>array of object</td><td>-</td><td>\u662F</td><td>\u63CF\u8FF0\u5177\u4F53\u7684\u6807\u8BB0\u6761\u4EF6\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u5982\u4E0B\u3002</td></tr></tbody></table>
<hr>
<p><code dir="auto">conditions</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>








































<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">conditionType</code></td><td>string</td><td>-</td><td>\u662F</td><td>\u6761\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301 <code dir="auto">header</code>\u3001<code dir="auto">parameter</code>\u3001<code dir="auto">cookie</code>\u3002</td></tr><tr><td><code dir="auto">key</code></td><td>string</td><td>-</td><td>\u662F</td><td>\u6761\u4EF6\u7684\u5173\u952E\u5B57\u3002</td></tr><tr><td><code dir="auto">operator</code></td><td>string</td><td>-</td><td>\u662F</td><td>\u64CD\u4F5C\u7B26\uFF0C\u652F\u6301 <code dir="auto">equal</code>\u3001<code dir="auto">not_equal</code>\u3001<code dir="auto">prefix</code>\u3001<code dir="auto">in</code>\u3001<code dir="auto">not_in</code>\u3001<code dir="auto">regex</code>\u3001<code dir="auto">percentage</code>\u3002</td></tr><tr><td><code dir="auto">value</code></td><td>array of string</td><td>-</td><td>\u662F</td><td>\u6761\u4EF6\u7684\u503C\uFF0C<strong>\u4EC5\u5F53</strong>\u64CD\u4F5C\u7B26\u4E3A <code dir="auto">in</code> \u548C <code dir="auto">not_in</code> \u65F6\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u503C\u3002</td></tr></tbody></table>
<blockquote>
<p>**\u8BF4\u660E\uFF1A\u5F53 <code dir="auto">operator</code> \u4E3A <code dir="auto">regex</code> \u65F6\uFF0C\u4F7F\u7528\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5F15\u64CE\u662F <a href="https://github.com/google/re2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RE2</a>\u3002\u8BE6\u60C5\u8BF7\u53C2\u9605 <a href="https://github.com/google/re2/wiki/Syntax" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RE2 \u5B98\u65B9\u6587\u6863</a>\u3002</p>
</blockquote>
<h3 id="\u6743\u91CD\u7EC4\u914D\u7F6E">\u6743\u91CD\u7EC4\u914D\u7F6E</h3>
<p><code dir="auto">weightGroups</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A</p>

































<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u662F\u5426\u5FC5\u586B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">headerName</code></td><td>string</td><td>-</td><td>\u662F</td><td>\u8981\u6DFB\u52A0\u6216\u4FEE\u6539\u7684 HTTP \u5934\u540D\u79F0\u3002</td></tr><tr><td><code dir="auto">headerValue</code></td><td>string</td><td>-</td><td>\u662F</td><td>HTTP \u5934\u7684\u503C\u3002</td></tr><tr><td><code dir="auto">weight</code></td><td>integer</td><td>-</td><td>\u662F</td><td>\u6D41\u91CF\u6743\u91CD\u767E\u5206\u6BD4\u3002</td></tr></tbody></table>
<h3 id="\u64CD\u4F5C\u7B26\u8BF4\u660E">\u64CD\u4F5C\u7B26\u8BF4\u660E</h3>





































<table><thead><tr><th>\u64CD\u4F5C\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">equal</code></td><td>\u7CBE\u786E\u5339\u914D\uFF0C\u503C\u9700\u8981\u5B8C\u5168\u76F8\u7B49</td></tr><tr><td><code dir="auto">not_equal</code></td><td>\u4E0D\u7B49\u5339\u914D\uFF0C\u503C\u4E0D\u76F8\u7B49\u65F6\u6EE1\u8DB3\u6761\u4EF6</td></tr><tr><td><code dir="auto">prefix</code></td><td>\u524D\u7F00\u5339\u914D\uFF0C\u6307\u5B9A\u503C\u662F\u5B9E\u9645\u503C\u7684\u524D\u7F00\u65F6\u6EE1\u8DB3\u6761\u4EF6</td></tr><tr><td><code dir="auto">in</code></td><td>\u5305\u542B\u5339\u914D\uFF0C\u5B9E\u9645\u503C\u9700\u8981\u5728\u6307\u5B9A\u7684\u5217\u8868\u4E2D</td></tr><tr><td><code dir="auto">not_in</code></td><td>\u6392\u9664\u5339\u914D\uFF0C\u5B9E\u9645\u503C\u4E0D\u5728\u6307\u5B9A\u7684\u5217\u8868\u4E2D\u65F6\u6EE1\u8DB3\u6761\u4EF6</td></tr><tr><td><code dir="auto">regex</code></td><td>\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u89C4\u5219\u5339\u914D</td></tr><tr><td><code dir="auto">percentage</code></td><td>\u767E\u5206\u6BD4\u5339\u914D\uFF0C\u539F\u7406\uFF1A<code dir="auto">hash(get(key)) % 100 &#x3C; value</code> \u6210\u7ACB\u65F6\u6EE1\u8DB3\u6761\u4EF6</td></tr></tbody></table>
<blockquote>
<p><strong>\u63D0\u793A\uFF1A\u5173\u4E8E<code dir="auto">percentage</code>\u548C<code dir="auto">weight</code>\u7684\u533A\u522B</strong></p>
<ul>
<li><strong><code dir="auto">percentage</code>\u64CD\u4F5C\u7B26</strong>\uFF1A\u7528\u4E8E\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u57FA\u4E8E\u6307\u5B9A\u7684\u767E\u5206\u6BD4\u548C\u6307\u5B9A\u7684\u952E\u503C\u5BF9\u6765\u5224\u65AD\u662F\u5426\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C\u3002\u5BF9\u4E8E\u4E00\u4E2A\u76F8\u540C\u7684\u952E\u503C\u5BF9\uFF0C\u591A\u6B21\u5339\u914D\u7684\u7ED3\u679C\u662F\u5E42\u7B49\u7684\uFF0C\u5373\u8FD9\u4E00\u6B21\u547D\u4E2D\u6761\u4EF6\uFF0C\u4E0B\u4E00\u6B21\u4E5F\u4F1A\u547D\u4E2D\u3002</li>
<li><strong><code dir="auto">weight</code>\u5B57\u6BB5</strong>\uFF1A\u7528\u4E8E\u5B9A\u4E49\u4E0D\u540C\u5904\u7406\u8DEF\u5F84\u7684\u6D41\u91CF\u6743\u91CD\u3002\u5728\u57FA\u4E8E\u6743\u91CD\u7684\u6D41\u91CF\u6807\u8BB0\u4E2D\uFF0C<code dir="auto">weight</code>\u786E\u5B9A\u4E86\u67D0\u4E2A\u8DEF\u5F84\u5E94\u63A5\u6536\u7684\u6D41\u91CF\u6BD4\u4F8B\u3002\u4E0E<code dir="auto">percentage</code>\u4E0D\u540C\u7684\u662F\uFF0C\u7531\u4E8E\u6CA1\u6709\u6307\u5B9A\u56FA\u5B9A\u7684\u5BF9\u6BD4\u4F9D\u636E\u800C\u662F\u57FA\u4E8E\u968F\u673A\u6743\u91CD\u5206\u5E03\uFF0C\u540C\u4E00\u4E2A\u8BF7\u6C42\u7684\u591A\u6B21\u5339\u914D\u53EF\u80FD\u5339\u914D\u591A\u4E2A\u7ED3\u679C\u3002</li>
</ul>
<p>\u4F7F\u7528<code dir="auto">percentage</code>\u8FDB\u884C\u6761\u4EF6\u5339\u914D\u65F6\uFF0C\u5224\u65AD\u6BCF\u4E2A\u8BF7\u6C42\u662F\u5426\u6EE1\u8DB3\u7279\u5B9A\u767E\u5206\u6BD4\u6761\u4EF6\uFF1B\u800C<code dir="auto">weight</code>\u5219\u662F\u9759\u6001\u968F\u673A\u5206\u914D\u6574\u4F53\u6D41\u91CF\u7684\u6BD4\u4F8B\u3002</p>
</blockquote>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<p><strong>\u4F8B1: \u57FA\u4E8E\u5185\u5BB9\u7684\u5339\u914D</strong></p>
<p>\u6309\u7167\u4E0B\u4F8B\u7684\u914D\u7F6E\uFF0C\u6EE1\u8DB3\u8BF7\u6C42\u5934<code dir="auto">role</code> \u7684\u503C\u662F<code dir="auto">user</code>\u3001<code dir="auto">viwer</code>\u3001<code dir="auto">editor</code>\u5176\u4E2D\u4E4B\u4E00\u4E14\u5B58\u5728\u67E5\u8BE2\u53C2\u6570<code dir="auto">foo=bar</code>\u7684\u8BF7\u6C42\u5C06\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934<code dir="auto">x-mse-tag: gray</code>\u3002\u7531\u4E8E\u914D\u7F6E\u4E86<code dir="auto">defaultTagKey</code>\u548C<code dir="auto">defaultTagVal</code>\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\uFF0C\u8BF7\u6C42\u5C06\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934<code dir="auto">x-mse-tag: base</code>\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">defaultTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">defaultTagVal</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">conditionGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">headerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headerValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">logic</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">and</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">conditions</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">conditionType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">role</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">operator</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">in</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">viewer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">editor</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">conditionType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">parameter</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">operator</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">equal</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">bar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="defaultTagKey: x-mse-tag\x7FdefaultTagVal: base\x7FconditionGroups:\x7F  - headerName: x-mse-tag\x7F    headerValue: gray\x7F    logic: and\x7F    conditions:\x7F      - conditionType: header\x7F        key: role\x7F        operator: in\x7F        value:\x7F          - user\x7F          - viewer\x7F          - editor\x7F      - conditionType: parameter\x7F        key: foo\x7F        operator: equal\x7F        value:\x7F        - bar"><div></div></button></div></figure></div>
<p><strong>\u4F8B\u5B502: \u57FA\u4E8E\u6743\u91CD\u7684\u5339\u914D</strong></p>
<p>\u6309\u7167\u4E0B\u5217\u914D\u7F6E\uFF0C\u8BF7\u6C42\u5C06\u670930%\u51E0\u7387\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934<code dir="auto">x-mse-tag: gray</code>\uFF0C30%\u51E0\u7387\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934<code dir="auto">x-mse-tag: blue</code>\uFF0C40%\u51E0\u7387\u4E0D\u6DFB\u52A0\u8BF7\u6C42\u5934\u3002</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u6743\u91CD\u603B\u548C\u4E3A100\uFF0C\u4E0B\u4F8B\u4E2D\u672A\u914D\u7F6E\u768440\u6743\u91CD\u5C06\u4E0D\u6DFB\u52A0header</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">weightGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">headerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headerValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">30</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">headerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headerValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">blue</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">30</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# \u6743\u91CD\u603B\u548C\u4E3A100\uFF0C\u4E0B\u4F8B\u4E2D\u672A\u914D\u7F6E\u768440\u6743\u91CD\u5C06\u4E0D\u6DFB\u52A0header\x7FweightGroups:\x7F  - headerName: x-mse-tag\x7F    headerValue: gray\x7F    weight: 30\x7F  - headerName: x-mse-tag\x7F    headerValue: blue\x7F    weight: 30"><div></div></button></div></figure></div>`,a={title:"\u6D41\u91CF\u67D3\u8272",keywords:["higress","traffic tag"],description:"\u6D41\u91CF\u67D3\u8272\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},d="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/traffic-tag.md",s=void 0,r=function(){return"\n\n## \u529F\u80FD\u8BF4\u660E\n\n`traffic-tag` \u63D2\u4EF6\u5141\u8BB8\u6839\u636E\u6743\u91CD\u6216\u7279\u5B9A\u8BF7\u6C42\u5185\u5BB9\u901A\u8FC7\u6DFB\u52A0\u7279\u5B9A\u8BF7\u6C42\u5934\u7684\u65B9\u5F0F\u5BF9\u8BF7\u6C42\u6D41\u91CF\u8FDB\u884C\u67D3\u8272\u3002\u5B83\u652F\u6301\u590D\u6742\u7684\u903B\u8F91\u6765\u786E\u5B9A\u5982\u4F55\u6839\u636E\u7528\u6237\u5B9A\u4E49\u7684\u6807\u51C6\u67D3\u8272\u6D41\u91CF\u3002\n\n## \u8FD0\u884C\u5C5E\u6027\n\n\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A`\u9ED8\u8BA4\u9636\u6BB5`\n\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A`400`\n\n\n## \u914D\u7F6E\u5B57\u6BB5\n\n\u6B64\u90E8\u5206\u63D0\u4F9B\u4E86\u914D\u7F6E\u5B57\u6BB5\u7684\u8BE6\u7EC6\u63CF\u8FF0\u3002\n\n| \u5B57\u6BB5\u540D\u79F0        | \u7C7B\u578B     | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|----------------|----------|-------|---------|-------------------------------------------------------------|\n| `conditionGroups` | array of object  | -     | \u5426      | \u5B9A\u4E49\u57FA\u4E8E\u5185\u5BB9\u7684\u6807\u8BB0\u6761\u4EF6\u7EC4\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u89C1**\u6761\u4EF6\u7EC4\u914D\u7F6E**\u3002             |\n| `weightGroups`    | array of object  | -     | \u5426      | \u5B9A\u4E49\u57FA\u4E8E\u6743\u91CD\u7684\u6807\u8BB0\u6761\u4EF6\u7EC4\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u89C1**\u6743\u91CD\u7EC4\u914D\u7F6E**\u3002             |\n| `defaultTagKey`   | string   | -     | \u5426      | \u9ED8\u8BA4\u7684\u6807\u8BB0\u952E\u540D\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\u4F7F\u7528\u3002\u5F53\u4E14\u4EC5\u5F53\u540C\u65F6\u914D\u7F6E\u4E86**defaultTagVal**\u65F6\u751F\u6548      |\n| `defaultTagVal` | string   | -     | \u5426      | \u9ED8\u8BA4\u7684\u6807\u8BB0\u503C\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\u4F7F\u7528\u3002\u5F53\u4E14\u4EC5\u5F53\u540C\u65F6\u914D\u7F6E\u4E86**defaultTagKey**\u65F6\u751F\u6548      |\n\n### \u6761\u4EF6\u7EC4\u914D\u7F6E\n`conditionGroups` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A\n\n| \u5B57\u6BB5\u540D\u79F0      | \u7C7B\u578B   | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|--------------|--------|-------|---------|-------------------------------------------------------------|\n| `headerName` | string | -     | \u662F      | \u8981\u6DFB\u52A0\u6216\u4FEE\u6539\u7684 HTTP \u5934\u540D\u79F0\u3002                                  |\n| `headerValue`| string | -     | \u662F      | HTTP \u5934\u7684\u503C\u3002                                                |\n| `logic`      | string | -     | \u662F      | \u6761\u4EF6\u7EC4\u4E2D\u7684\u903B\u8F91\u5173\u7CFB\uFF0C\u652F\u6301 `and`\u3001`or`\uFF0C\u5FC5\u987B\u4E3A\u5C0F\u5199\u5B57\u6BCD\u3002         |\n| `conditions` | array of object  | -     | \u662F      | \u63CF\u8FF0\u5177\u4F53\u7684\u6807\u8BB0\u6761\u4EF6\uFF0C\u8BE6\u7EC6\u7ED3\u6784\u5982\u4E0B\u3002                    |\n---\n\n`conditions` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A\n\n| \u5B57\u6BB5\u540D\u79F0        | \u7C7B\u578B   | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|----------------|--------|-------|---------|-------------------------------------------------------------|\n| `conditionType`| string | -     | \u662F      | \u6761\u4EF6\u7C7B\u578B\uFF0C\u652F\u6301 `header`\u3001`parameter`\u3001`cookie`\u3002                 |\n| `key`          | string | -     | \u662F      | \u6761\u4EF6\u7684\u5173\u952E\u5B57\u3002                                               |\n| `operator`     | string | -     | \u662F      | \u64CD\u4F5C\u7B26\uFF0C\u652F\u6301 `equal`\u3001`not_equal`\u3001`prefix`\u3001`in`\u3001`not_in`\u3001`regex`\u3001`percentage`\u3002  |\n| `value`        | array of string  | -     | \u662F      | \u6761\u4EF6\u7684\u503C\uFF0C**\u4EC5\u5F53**\u64CD\u4F5C\u7B26\u4E3A `in` \u548C `not_in` \u65F6\u652F\u6301\u914D\u7F6E\u591A\u4E2A\u503C\u3002 |\n\n> **\u8BF4\u660E\uFF1A\u5F53 `operator` \u4E3A `regex` \u65F6\uFF0C\u4F7F\u7528\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u5F15\u64CE\u662F [RE2](https://github.com/google/re2)\u3002\u8BE6\u60C5\u8BF7\u53C2\u9605 [RE2 \u5B98\u65B9\u6587\u6863](https://github.com/google/re2/wiki/Syntax)\u3002\n\n### \u6743\u91CD\u7EC4\u914D\u7F6E\n\n`weightGroups` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\u5982\u4E0B\uFF1A\n\n| \u5B57\u6BB5\u540D\u79F0      | \u7C7B\u578B     | \u9ED8\u8BA4\u503C | \u662F\u5426\u5FC5\u586B | \u63CF\u8FF0                                                         |\n|--------------|----------|-------|---------|-------------------------------------------------------------|\n| `headerName` | string   | -     | \u662F      | \u8981\u6DFB\u52A0\u6216\u4FEE\u6539\u7684 HTTP \u5934\u540D\u79F0\u3002                                  |\n| `headerValue`| string   | -     | \u662F      | HTTP \u5934\u7684\u503C\u3002                                                |\n| `weight`     | integer  | -     | \u662F      | \u6D41\u91CF\u6743\u91CD\u767E\u5206\u6BD4\u3002                                             |                                           \n\n### \u64CD\u4F5C\u7B26\u8BF4\u660E\n| \u64CD\u4F5C\u7B26      | \u63CF\u8FF0                                      |\n|-------------|------------------------------------------|\n| `equal`        | \u7CBE\u786E\u5339\u914D\uFF0C\u503C\u9700\u8981\u5B8C\u5168\u76F8\u7B49                  |\n| `not_equal`        | \u4E0D\u7B49\u5339\u914D\uFF0C\u503C\u4E0D\u76F8\u7B49\u65F6\u6EE1\u8DB3\u6761\u4EF6              |\n| `prefix`    | \u524D\u7F00\u5339\u914D\uFF0C\u6307\u5B9A\u503C\u662F\u5B9E\u9645\u503C\u7684\u524D\u7F00\u65F6\u6EE1\u8DB3\u6761\u4EF6  |\n| `in`        | \u5305\u542B\u5339\u914D\uFF0C\u5B9E\u9645\u503C\u9700\u8981\u5728\u6307\u5B9A\u7684\u5217\u8868\u4E2D        |\n| `not_in`    | \u6392\u9664\u5339\u914D\uFF0C\u5B9E\u9645\u503C\u4E0D\u5728\u6307\u5B9A\u7684\u5217\u8868\u4E2D\u65F6\u6EE1\u8DB3\u6761\u4EF6|\n| `regex`     | \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u6309\u7167\u6B63\u5219\u8868\u8FBE\u5F0F\u89C4\u5219\u5339\u914D    |\n| `percentage`| \u767E\u5206\u6BD4\u5339\u914D\uFF0C\u539F\u7406\uFF1A`hash(get(key)) % 100 < value` \u6210\u7ACB\u65F6\u6EE1\u8DB3\u6761\u4EF6|\n\n> **\u63D0\u793A\uFF1A\u5173\u4E8E`percentage`\u548C`weight`\u7684\u533A\u522B**\n>\n> - **`percentage`\u64CD\u4F5C\u7B26**\uFF1A\u7528\u4E8E\u6761\u4EF6\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u57FA\u4E8E\u6307\u5B9A\u7684\u767E\u5206\u6BD4\u548C\u6307\u5B9A\u7684\u952E\u503C\u5BF9\u6765\u5224\u65AD\u662F\u5426\u6267\u884C\u67D0\u4E2A\u64CD\u4F5C\u3002\u5BF9\u4E8E\u4E00\u4E2A\u76F8\u540C\u7684\u952E\u503C\u5BF9\uFF0C\u591A\u6B21\u5339\u914D\u7684\u7ED3\u679C\u662F\u5E42\u7B49\u7684\uFF0C\u5373\u8FD9\u4E00\u6B21\u547D\u4E2D\u6761\u4EF6\uFF0C\u4E0B\u4E00\u6B21\u4E5F\u4F1A\u547D\u4E2D\u3002\n> - **`weight`\u5B57\u6BB5**\uFF1A\u7528\u4E8E\u5B9A\u4E49\u4E0D\u540C\u5904\u7406\u8DEF\u5F84\u7684\u6D41\u91CF\u6743\u91CD\u3002\u5728\u57FA\u4E8E\u6743\u91CD\u7684\u6D41\u91CF\u6807\u8BB0\u4E2D\uFF0C`weight`\u786E\u5B9A\u4E86\u67D0\u4E2A\u8DEF\u5F84\u5E94\u63A5\u6536\u7684\u6D41\u91CF\u6BD4\u4F8B\u3002\u4E0E`percentage`\u4E0D\u540C\u7684\u662F\uFF0C\u7531\u4E8E\u6CA1\u6709\u6307\u5B9A\u56FA\u5B9A\u7684\u5BF9\u6BD4\u4F9D\u636E\u800C\u662F\u57FA\u4E8E\u968F\u673A\u6743\u91CD\u5206\u5E03\uFF0C\u540C\u4E00\u4E2A\u8BF7\u6C42\u7684\u591A\u6B21\u5339\u914D\u53EF\u80FD\u5339\u914D\u591A\u4E2A\u7ED3\u679C\u3002\n>\n> \u4F7F\u7528`percentage`\u8FDB\u884C\u6761\u4EF6\u5339\u914D\u65F6\uFF0C\u5224\u65AD\u6BCF\u4E2A\u8BF7\u6C42\u662F\u5426\u6EE1\u8DB3\u7279\u5B9A\u767E\u5206\u6BD4\u6761\u4EF6\uFF1B\u800C`weight`\u5219\u662F\u9759\u6001\u968F\u673A\u5206\u914D\u6574\u4F53\u6D41\u91CF\u7684\u6BD4\u4F8B\u3002\n\n## \u914D\u7F6E\u793A\u4F8B\n\n**\u4F8B1: \u57FA\u4E8E\u5185\u5BB9\u7684\u5339\u914D**\n\n\u6309\u7167\u4E0B\u4F8B\u7684\u914D\u7F6E\uFF0C\u6EE1\u8DB3\u8BF7\u6C42\u5934`role` \u7684\u503C\u662F`user`\u3001`viwer`\u3001`editor`\u5176\u4E2D\u4E4B\u4E00\u4E14\u5B58\u5728\u67E5\u8BE2\u53C2\u6570`foo=bar`\u7684\u8BF7\u6C42\u5C06\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: gray`\u3002\u7531\u4E8E\u914D\u7F6E\u4E86`defaultTagKey`\u548C`defaultTagVal`\uFF0C\u5F53\u672A\u5339\u914D\u5230\u4EFB\u4F55\u6761\u4EF6\u65F6\uFF0C\u8BF7\u6C42\u5C06\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: base`\u3002\n\n```yaml\ndefaultTagKey: x-mse-tag\ndefaultTagVal: base\nconditionGroups:\n  - headerName: x-mse-tag\n    headerValue: gray\n    logic: and\n    conditions:\n      - conditionType: header\n        key: role\n        operator: in\n        value:\n          - user\n          - viewer\n          - editor\n      - conditionType: parameter\n        key: foo\n        operator: equal\n        value:\n        - bar\n```\n**\u4F8B\u5B502: \u57FA\u4E8E\u6743\u91CD\u7684\u5339\u914D**\n\n\u6309\u7167\u4E0B\u5217\u914D\u7F6E\uFF0C\u8BF7\u6C42\u5C06\u670930%\u51E0\u7387\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: gray`\uFF0C30%\u51E0\u7387\u88AB\u6DFB\u52A0\u8BF7\u6C42\u5934`x-mse-tag: blue`\uFF0C40%\u51E0\u7387\u4E0D\u6DFB\u52A0\u8BF7\u6C42\u5934\u3002\n\n```yaml\n# \u6743\u91CD\u603B\u548C\u4E3A100\uFF0C\u4E0B\u4F8B\u4E2D\u672A\u914D\u7F6E\u768440\u6743\u91CD\u5C06\u4E0D\u6DFB\u52A0header\nweightGroups:\n  - headerName: x-mse-tag\n    headerValue: gray\n    weight: 30\n  - headerName: x-mse-tag\n    headerValue: blue\n    weight: 30\n```\n"},o=function(){return t},i=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:3,slug:"\u6761\u4EF6\u7EC4\u914D\u7F6E",text:"\u6761\u4EF6\u7EC4\u914D\u7F6E"},{depth:3,slug:"\u6743\u91CD\u7EC4\u914D\u7F6E",text:"\u6743\u91CD\u7EC4\u914D\u7F6E"},{depth:3,slug:"\u64CD\u4F5C\u7B26\u8BF4\u660E",text:"\u64CD\u4F5C\u7B26\u8BF4\u660E"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"}]},e=c((v,f,x)=>{const{layout:b,...n}=a;return n.file=d,n.url=s,p`${u()}${g(t)}`})});export{e as Content,y as __tla,o as compiledContent,e as default,d as file,a as frontmatter,i as getHeadings,r as rawContent,s as url};
