import{c as p,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as v,u,__tla as g}from"./constant.C1QLXgsI.js";import{__tla as E}from"./astro/assets-service.BhtN0nM5.js";let e,l,a,n,d,c,i,f=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u901A\u8FC7-higress-\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E">\u901A\u8FC7 Higress \u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E</h2>
<p>Higress \u63A7\u5236\u53F0\u63D0\u4F9B\u4E86 3 \u4E2A\u5165\u53E3\u8FDB\u884C\u63D2\u4EF6\u914D\u7F6E:</p>
<ol>
<li>\u5168\u5C40\u914D\u7F6E\uFF1A\u63D2\u4EF6\u5E02\u573A->\u9009\u62E9\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E</li>
<li>\u57DF\u540D\u7EA7\u914D\u7F6E\uFF1A\u57DF\u540D\u7BA1\u7406->\u9009\u62E9\u57DF\u540D->\u70B9\u51FB\u7B56\u7565->\u9009\u62E9\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E</li>
<li>\u8DEF\u7531\u7EA7\u914D\u7F6E: \u8DEF\u7531\u914D\u7F6E->\u9009\u62E9\u8DEF\u7531->\u70B9\u51FB\u7B56\u7565->\u9009\u62E9\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E</li>
</ol>
<p>\u8FD9\u4E09\u4E2A\u914D\u7F6E\u7684\u751F\u6548\u4F18\u5148\u7EA7\u662F: \u8DEF\u7531\u7EA7 > \u57DF\u540D\u7EA7 > \u5168\u5C40</p>
<p>\u5373\u5BF9\u4E8E\u6CA1\u6709\u5339\u914D\u5230\u5177\u4F53\u8DEF\u7531\u6216\u57DF\u540D\u7684\u8BF7\u6C42\u624D\u4F1A\u751F\u6548\u5168\u5C40\u914D\u7F6E</p>
<p>\u5BF9\u4E8E\u4E00\u822C\u7684\u63D2\u4EF6\uFF0C\u5305\u62EC\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5728\u5185\uFF0C\u8DEF\u7531/\u57DF\u540D\u7EA7\u7684\u914D\u7F6E\u5B57\u6BB5\u548C\u5168\u5C40\u914D\u7F6E\u5B57\u6BB5\u662F\u5B8C\u5168\u4E00\u6837\u7684\uFF1B</p>
<p>\u5BF9\u4E8E\u8BA4\u8BC1\u7C7B\u63D2\u4EF6(Key \u8BA4\u8BC1\uFF0CHMAC \u8BA4\u8BC1\uFF0CBasic \u8BA4\u8BC1\uFF0CJWT \u8BA4\u8BC1\u7B49)\u5219\u4E0D\u540C\uFF0C\u5168\u5C40\u914D\u7F6E\u4EC5\u505A Consumer \u51ED\u8BC1\u914D\u7F6E\uFF0C\u4EE5\u53CA\u662F\u5426\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1\uFF0C\u800C\u5728\u8DEF\u7531/\u57DF\u540D\u7EA7\u901A\u8FC7 <code dir="auto">allow</code> \u5B57\u6BB5\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 Consumer \u5217\u8868\uFF0C\u8BE6\u60C5\u53EF\u4EE5\u67E5\u770B <a href="../authentication/key-auth/" referrerpolicy="unsafe-url">Key \u8BA4\u8BC1\u7684\u914D\u7F6E\u8BF4\u660E</a>\u3002</p>
<h2 id="\u901A\u8FC7-higress-wasmplugin-crd-\u8FDB\u884C\u914D\u7F6E">\u901A\u8FC7 Higress WasmPlugin CRD \u8FDB\u884C\u914D\u7F6E</h2>
<p>Higress WasmPlugin CRD \u5728 Istio <a href="https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">WasmPlugin</a> CRD \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u65B0\u589E\u4EE5\u4E0B\u914D\u7F6E\u5B57\u6BB5\uFF1A</p>























<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">defaultConfig</code></td><td>object</td><td>\u9009\u586B</td><td>\u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5168\u5C40\u751F\u6548\u4E8E\u6CA1\u6709\u5339\u914D\u5177\u4F53\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u7684\u8BF7\u6C42</td></tr><tr><td><code dir="auto">matchRules</code></td><td>array of object</td><td>\u9009\u586B</td><td>\u5339\u914D\u57DF\u540D\u6216\u8DEF\u7531\u751F\u6548\u7684\u914D\u7F6E</td></tr></tbody></table>
<p><code dir="auto">matchRules</code> \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF1A</p>

































<table><thead><tr><th>\u5B57\u6BB5\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u914D\u7F6E\u793A\u4F8B</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code dir="auto">ingress</code></td><td>array of string</td><td><code dir="auto">ingress</code> \u548C <code dir="auto">domain</code> \u4E2D\u5FC5\u586B\u4E00\u9879</td><td>[\u201Cdefault/foo\u201D,\u201Cdefault/bar\u201D]</td><td>\u5339\u914D ingress \u8D44\u6E90\u5BF9\u8C61\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A: <code dir="auto">\u547D\u540D\u7A7A\u95F4/ingress\u540D\u79F0</code></td></tr><tr><td><code dir="auto">domain</code></td><td>array of string</td><td><code dir="auto">ingress</code> \u548C <code dir="auto">domain</code> \u4E2D\u5FC5\u586B\u4E00\u9879</td><td>[\u201Cexample.com\u201D,\u201C*.test.com\u201D]</td><td>\u5339\u914D\u57DF\u540D\uFF0C\u652F\u6301\u6CDB\u57DF\u540D</td></tr><tr><td><code dir="auto">config</code></td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u5339\u914D\u540E\u751F\u6548\u7684\u63D2\u4EF6\u914D\u7F6E</td></tr></tbody></table>
<p>\u4EE5<a href="../traffic/request-block/" referrerpolicy="unsafe-url">\u8BF7\u6C42\u5C4F\u853D</a>\u63D2\u4EF6\u4E3E\u4F8B\u8BF4\u660E\uFF0C\u5982\u679C\u5E0C\u671B\u5168\u5C40\u751F\u6548\u63D2\u4EF6\u7684\u5982\u4E0B\u914D\u7F6E\uFF08\u8BF7\u67E5\u770B<a href="../traffic/request-block/" referrerpolicy="unsafe-url">\u8BF7\u6C42\u5C4F\u853D</a>\u6587\u6863\u4E86\u89E3\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF09\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_urls:\x7F- swagger.html\x7F- foo=bar\x7Fcase_sensitive: false"><div></div></button></div></figure></div>
<p>\u5219\u5BF9\u5E94\u7684 WasmPlugin \u9700\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: request-block\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    block_urls:\x7F    - swagger.html\x7F    - foo=bar\x7F    case_sensitive: false\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0"><div></div></button></div></figure></div>
<p>\u914D\u7F6E\u540E\u4E0B\u5217\u8BF7\u6C42\u5C06\u7ACB\u5373\u88AB\u7981\u6B62\u8BBF\u95EE:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com?foo=Bar</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com/foo/Swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com?foo=Bar\x7Fcurl http://example.com/foo/Swagger.html"><div></div></button></div></figure></div>
<p>\u5982\u679C\u5E0C\u671B\u5BF9 default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u79F0\u4E3A foo \u7684 Ingress (\u5339\u914D path \u524D\u7F00\u4E3A <code dir="auto">/foo</code> \u7684\u8BF7\u6C42)\u751F\u6548\u5982\u4E0B\u914D\u7F6E:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">block_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="block_headers:\x7F- example-key\x7F- example-value"><div></div></button></div></figure></div>
<p>\u5219\u5BF9\u5E94\u7684 WasmPlugin \u9700\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request-block</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">block_urls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">swagger.html</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">foo=bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">case_sensitive</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#99A0A6"># \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">default/foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#99A0A6"># default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">block_headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-key</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">example-value</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: request-block\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    block_urls:\x7F    - swagger.html\x7F    - foo=bar\x7F    case_sensitive: false\x7F  matchRules:\x7F   # \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E\x7F  - ingress:\x7F    - default/foo\x7F     # default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E\x7F    config:\x7F      block_headers:\x7F      - example-key\x7F      - example-value\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0"><div></div></button></div></figure></div>
<p>\u914D\u7F6E\u540E\uFF0C\u4E0B\u9762\u8BF7\u6C42\u4E0D\u4F1A\u5339\u914D\u5230\u5177\u4F53\u7684 ingress\uFF0C\u56E0\u6B64\u4ECD\u7136\u547D\u4E2D\u5168\u5C40\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u88AB\u62D2\u7EDD\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://example.com?foo=Bar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://example.com?foo=Bar"><div></div></button></div></figure></div>
<p>\u4E0B\u9762\u8BF7\u6C42\u7531\u4E8E\u5339\u914D\u5230 foo \u8FD9\u4E2A Ingress\uFF0C\u56E0\u6B64\u8D70\u8DEF\u7531\u7EA7\u7684\u914D\u7F6E\uFF0C\u4E0D\u53D7\u9ED8\u8BA4\u914D\u7F6E\u5F71\u54CD\uFF0C\u4E0D\u4F1A\u88AB\u62D2\u7EDD\u8BBF\u95EE:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/foo/Swagger.html</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://exmaple.com/foo/Swagger.html"><div></div></button></div></figure></div>
<p>\u56E0\u4E3A\u8DEF\u7531\u7EA7\u914D\u7F6E\u5C4F\u853D\u4E86\u8BF7\u6C42 Header \u4E2D\u51FA\u73B0 <code dir="auto">example-key</code> \u5B57\u7B26\u7684\u8BF7\u6C42\uFF0C\u6240\u4EE5\u4E0B\u9762\u8FD9\u4E2A\u8BF7\u6C42\u4F1A\u88AB\u62D2\u7EDD\u8BBF\u95EE:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://exmaple.com/foo</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'exmaple-key: 123'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://exmaple.com/foo -H &#x27;exmaple-key: 123&#x27;"><div></div></button></div></figure></div>
<p>\u5F53 <code dir="auto">matchRules</code> \u4E2D\u5B58\u5728\u591A\u4E2A\u89C4\u5219\u65F6\uFF0C\u6309\u89C4\u5219\u6392\u5217\u987A\u5E8F\u4F18\u5148\u5339\u914D\uFF0C\u5EFA\u8BAE\u5C06 ingress \u5339\u914D\u914D\u7F6E\u653E\u5728 domain \u5339\u914D\u4E4B\u524D\uFF0C\u8FD9\u4E5F\u662F Higress \u63A7\u5236\u53F0\u7684\u505A\u6CD5\u3002</p>
<p>\u4F7F\u7528 Higress \u63A7\u5236\u53F0\u901A\u8FC7 UI \u4EA4\u4E92\u65B9\u5F0F\u542F\u7528\u63D2\u4EF6\uFF0C\u65E0\u9700\u5173\u5FC3\u8FD9\u91CC\u7684 oci \u955C\u50CF\u5730\u5740\uFF0C\u5982\u679C\u662F\u901A\u8FC7\u9ED1\u5C4F yaml \u65B9\u5F0F\u914D\u7F6E\uFF0C\u6240\u6709\u5B98\u65B9\u63D2\u4EF6\u7684 oci \u955C\u50CF\u5730\u5740\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\uFF1A</p>
<p><a href="https://github.com/higress-group/higress-console/blob/main/backend/sdk/src/main/resources/plugins/plugins.properties" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/higress-group/higress-console/blob/main/backend/sdk/src/main/resources/plugins/plugins.properties</a></p>
<p>\u76EE\u524D\u6240\u6709\u63D2\u4EF6\u7684\u7A33\u5B9A\u7248\u672C\u4E3A 1.0.0\uFF0C\u6700\u65B0\u5F00\u53D1\u7248\u672C\u4E3A latest\uFF0C\u5982\u679C\u5E0C\u671B\u59CB\u7EC8\u4F7F\u7528\u7A33\u5B9A\u7248\u672C\uFF0C\u53EF\u4EE5\u56FA\u5B9A\u955C\u50CF tag \u4E3A\u6307\u5B9A\u7248\u672C\uFF0C\u5982\u679C\u5E0C\u671B\u4F7F\u7528\u6700\u65B0\u7684\u63D2\u4EF6\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u955C\u50CF tag \u6307\u5B9A\u4E3A latest \uFF08\u63D2\u4EF6\u6709\u4EFB\u610F\u914D\u7F6E\u66F4\u65B0\u65F6\u5C31\u4F1A\u81EA\u52A8\u62C9\u53D6\u6700\u65B0\u7248\u672C\u7684\u63D2\u4EF6\uFF09</p>
<h2 id="wasm-\u63D2\u4EF6\u539F\u7406\u4ECB\u7ECD">Wasm \u63D2\u4EF6\u539F\u7406\u4ECB\u7ECD</h2>
<p>\u8BF7\u67E5\u770B\u7535\u5B50\u4E66\uFF1A<a href="https://higress.cn/docs/ebook/wasm19/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u300AWasm\u63D2\u4EF6\u5F00\u53D1\u7BC7\u300B</a></p>`,n={title:"\u63D2\u4EF6\u4F7F\u7528\u5F15\u5BFC",keywords:["higress","wasm"],description:"Higress Wasm \u63D2\u4EF6\u4F7F\u7528\u5F15\u5BFC"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/intro.md",i=void 0,c=function(){return`
## \u901A\u8FC7 Higress \u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E

Higress \u63A7\u5236\u53F0\u63D0\u4F9B\u4E86 3 \u4E2A\u5165\u53E3\u8FDB\u884C\u63D2\u4EF6\u914D\u7F6E:

1. \u5168\u5C40\u914D\u7F6E\uFF1A\u63D2\u4EF6\u5E02\u573A->\u9009\u62E9\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E
2. \u57DF\u540D\u7EA7\u914D\u7F6E\uFF1A\u57DF\u540D\u7BA1\u7406->\u9009\u62E9\u57DF\u540D->\u70B9\u51FB\u7B56\u7565->\u9009\u62E9\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E
3. \u8DEF\u7531\u7EA7\u914D\u7F6E: \u8DEF\u7531\u914D\u7F6E->\u9009\u62E9\u8DEF\u7531->\u70B9\u51FB\u7B56\u7565->\u9009\u62E9\u63D2\u4EF6\u8FDB\u884C\u914D\u7F6E

\u8FD9\u4E09\u4E2A\u914D\u7F6E\u7684\u751F\u6548\u4F18\u5148\u7EA7\u662F: \u8DEF\u7531\u7EA7 > \u57DF\u540D\u7EA7 > \u5168\u5C40

\u5373\u5BF9\u4E8E\u6CA1\u6709\u5339\u914D\u5230\u5177\u4F53\u8DEF\u7531\u6216\u57DF\u540D\u7684\u8BF7\u6C42\u624D\u4F1A\u751F\u6548\u5168\u5C40\u914D\u7F6E

\u5BF9\u4E8E\u4E00\u822C\u7684\u63D2\u4EF6\uFF0C\u5305\u62EC\u81EA\u5B9A\u4E49\u63D2\u4EF6\u5728\u5185\uFF0C\u8DEF\u7531/\u57DF\u540D\u7EA7\u7684\u914D\u7F6E\u5B57\u6BB5\u548C\u5168\u5C40\u914D\u7F6E\u5B57\u6BB5\u662F\u5B8C\u5168\u4E00\u6837\u7684\uFF1B

\u5BF9\u4E8E\u8BA4\u8BC1\u7C7B\u63D2\u4EF6(Key \u8BA4\u8BC1\uFF0CHMAC \u8BA4\u8BC1\uFF0CBasic \u8BA4\u8BC1\uFF0CJWT \u8BA4\u8BC1\u7B49)\u5219\u4E0D\u540C\uFF0C\u5168\u5C40\u914D\u7F6E\u4EC5\u505A Consumer \u51ED\u8BC1\u914D\u7F6E\uFF0C\u4EE5\u53CA\u662F\u5426\u5F00\u542F\u5168\u5C40\u8BA4\u8BC1\uFF0C\u800C\u5728\u8DEF\u7531/\u57DF\u540D\u7EA7\u901A\u8FC7 \`allow\` \u5B57\u6BB5\u914D\u7F6E\u5141\u8BB8\u8BBF\u95EE\u7684 Consumer \u5217\u8868\uFF0C\u8BE6\u60C5\u53EF\u4EE5\u67E5\u770B [Key \u8BA4\u8BC1\u7684\u914D\u7F6E\u8BF4\u660E](./authentication/key-auth.md)\u3002

## \u901A\u8FC7 Higress WasmPlugin CRD \u8FDB\u884C\u914D\u7F6E

Higress WasmPlugin CRD \u5728 Istio [WasmPlugin](https://istio.io/latest/docs/reference/config/proxy_extensions/wasm-plugin/#WasmPlugin) CRD \u7684\u57FA\u7840\u4E0A\u8FDB\u884C\u4E86\u6269\u5C55\uFF0C\u65B0\u589E\u4EE5\u4E0B\u914D\u7F6E\u5B57\u6BB5\uFF1A

| \u5B57\u6BB5\u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u63CF\u8FF0 |
| -------  | -------  | -------- | ---  |
| \`defaultConfig\` | object | \u9009\u586B | \u63D2\u4EF6\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5168\u5C40\u751F\u6548\u4E8E\u6CA1\u6709\u5339\u914D\u5177\u4F53\u57DF\u540D\u548C\u8DEF\u7531\u914D\u7F6E\u7684\u8BF7\u6C42 |
| \`matchRules\` | array of object | \u9009\u586B | \u5339\u914D\u57DF\u540D\u6216\u8DEF\u7531\u751F\u6548\u7684\u914D\u7F6E |

\`matchRules\` \u4E2D\u6BCF\u4E00\u9879\u7684\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF1A

| \u5B57\u6BB5\u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42                       | \u914D\u7F6E\u793A\u4F8B |\u63CF\u8FF0 |
| -------  | -------  |----------------------------| --- |---  |
| \`ingress\` | array of string | \`ingress\` \u548C \`domain\` \u4E2D\u5FC5\u586B\u4E00\u9879 | ["default/foo","default/bar"] | \u5339\u914D ingress \u8D44\u6E90\u5BF9\u8C61\uFF0C\u5339\u914D\u683C\u5F0F\u4E3A: \`\u547D\u540D\u7A7A\u95F4/ingress\u540D\u79F0\` |
| \`domain\` | array of string | \`ingress\` \u548C \`domain\` \u4E2D\u5FC5\u586B\u4E00\u9879 | ["example.com","*.test.com"] | \u5339\u914D\u57DF\u540D\uFF0C\u652F\u6301\u6CDB\u57DF\u540D |
| \`config\` | object | \u9009\u586B                         | - | \u5339\u914D\u540E\u751F\u6548\u7684\u63D2\u4EF6\u914D\u7F6E |

\u4EE5[\u8BF7\u6C42\u5C4F\u853D](./traffic/request-block.md)\u63D2\u4EF6\u4E3E\u4F8B\u8BF4\u660E\uFF0C\u5982\u679C\u5E0C\u671B\u5168\u5C40\u751F\u6548\u63D2\u4EF6\u7684\u5982\u4E0B\u914D\u7F6E\uFF08\u8BF7\u67E5\u770B[\u8BF7\u6C42\u5C4F\u853D](./traffic/request-block.md)\u6587\u6863\u4E86\u89E3\u914D\u7F6E\u5B57\u6BB5\u8BF4\u660E\uFF09\uFF1A

\`\`\`yaml
block_urls:
- swagger.html
- foo=bar
case_sensitive: false
\`\`\`

\u5219\u5BF9\u5E94\u7684 WasmPlugin \u9700\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: request-block
  namespace: higress-system
spec:
  defaultConfig:
    block_urls:
    - swagger.html
    - foo=bar
    case_sensitive: false
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0
\`\`\`

\u914D\u7F6E\u540E\u4E0B\u5217\u8BF7\u6C42\u5C06\u7ACB\u5373\u88AB\u7981\u6B62\u8BBF\u95EE:

\`\`\`bash
curl http://example.com?foo=Bar
curl http://example.com/foo/Swagger.html
\`\`\`

\u5982\u679C\u5E0C\u671B\u5BF9 default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u79F0\u4E3A foo \u7684 Ingress (\u5339\u914D path \u524D\u7F00\u4E3A \`/foo\` \u7684\u8BF7\u6C42)\u751F\u6548\u5982\u4E0B\u914D\u7F6E:

\`\`\`yaml
block_headers:
- example-key
- example-value
\`\`\`

\u5219\u5BF9\u5E94\u7684 WasmPlugin \u9700\u8981\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: request-block
  namespace: higress-system
spec:
  defaultConfig:
    block_urls:
    - swagger.html
    - foo=bar
    case_sensitive: false
  matchRules:
   # \u8DEF\u7531\u7EA7\u751F\u6548\u914D\u7F6E
  - ingress:
    - default/foo
     # default \u547D\u540D\u7A7A\u95F4\u4E0B\u540D\u4E3A foo \u7684 ingress \u4F1A\u6267\u884C\u4E0B\u9762\u8FD9\u4E2A\u914D\u7F6E
    config:
      block_headers:
      - example-key
      - example-value
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/request-block:1.0.0
\`\`\`

\u914D\u7F6E\u540E\uFF0C\u4E0B\u9762\u8BF7\u6C42\u4E0D\u4F1A\u5339\u914D\u5230\u5177\u4F53\u7684 ingress\uFF0C\u56E0\u6B64\u4ECD\u7136\u547D\u4E2D\u5168\u5C40\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u88AB\u62D2\u7EDD\u8BBF\u95EE\uFF1A

\`\`\`bash
curl http://example.com?foo=Bar
\`\`\`

\u4E0B\u9762\u8BF7\u6C42\u7531\u4E8E\u5339\u914D\u5230 foo \u8FD9\u4E2A Ingress\uFF0C\u56E0\u6B64\u8D70\u8DEF\u7531\u7EA7\u7684\u914D\u7F6E\uFF0C\u4E0D\u53D7\u9ED8\u8BA4\u914D\u7F6E\u5F71\u54CD\uFF0C\u4E0D\u4F1A\u88AB\u62D2\u7EDD\u8BBF\u95EE:

\`\`\`bash
curl http://exmaple.com/foo/Swagger.html
\`\`\`

\u56E0\u4E3A\u8DEF\u7531\u7EA7\u914D\u7F6E\u5C4F\u853D\u4E86\u8BF7\u6C42 Header \u4E2D\u51FA\u73B0 \`example-key\` \u5B57\u7B26\u7684\u8BF7\u6C42\uFF0C\u6240\u4EE5\u4E0B\u9762\u8FD9\u4E2A\u8BF7\u6C42\u4F1A\u88AB\u62D2\u7EDD\u8BBF\u95EE:

\`\`\`bash
curl http://exmaple.com/foo -H 'exmaple-key: 123'
\`\`\`

\u5F53 \`matchRules\` \u4E2D\u5B58\u5728\u591A\u4E2A\u89C4\u5219\u65F6\uFF0C\u6309\u89C4\u5219\u6392\u5217\u987A\u5E8F\u4F18\u5148\u5339\u914D\uFF0C\u5EFA\u8BAE\u5C06 ingress \u5339\u914D\u914D\u7F6E\u653E\u5728 domain \u5339\u914D\u4E4B\u524D\uFF0C\u8FD9\u4E5F\u662F Higress \u63A7\u5236\u53F0\u7684\u505A\u6CD5\u3002

\u4F7F\u7528 Higress \u63A7\u5236\u53F0\u901A\u8FC7 UI \u4EA4\u4E92\u65B9\u5F0F\u542F\u7528\u63D2\u4EF6\uFF0C\u65E0\u9700\u5173\u5FC3\u8FD9\u91CC\u7684 oci \u955C\u50CF\u5730\u5740\uFF0C\u5982\u679C\u662F\u901A\u8FC7\u9ED1\u5C4F yaml \u65B9\u5F0F\u914D\u7F6E\uFF0C\u6240\u6709\u5B98\u65B9\u63D2\u4EF6\u7684 oci \u955C\u50CF\u5730\u5740\u53EF\u4EE5\u5728\u8FD9\u91CC\u627E\u5230\uFF1A

https://github.com/higress-group/higress-console/blob/main/backend/sdk/src/main/resources/plugins/plugins.properties

\u76EE\u524D\u6240\u6709\u63D2\u4EF6\u7684\u7A33\u5B9A\u7248\u672C\u4E3A 1.0.0\uFF0C\u6700\u65B0\u5F00\u53D1\u7248\u672C\u4E3A latest\uFF0C\u5982\u679C\u5E0C\u671B\u59CB\u7EC8\u4F7F\u7528\u7A33\u5B9A\u7248\u672C\uFF0C\u53EF\u4EE5\u56FA\u5B9A\u955C\u50CF tag \u4E3A\u6307\u5B9A\u7248\u672C\uFF0C\u5982\u679C\u5E0C\u671B\u4F7F\u7528\u6700\u65B0\u7684\u63D2\u4EF6\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C06\u955C\u50CF tag \u6307\u5B9A\u4E3A latest \uFF08\u63D2\u4EF6\u6709\u4EFB\u610F\u914D\u7F6E\u66F4\u65B0\u65F6\u5C31\u4F1A\u81EA\u52A8\u62C9\u53D6\u6700\u65B0\u7248\u672C\u7684\u63D2\u4EF6\uFF09

## Wasm \u63D2\u4EF6\u539F\u7406\u4ECB\u7ECD

\u8BF7\u67E5\u770B\u7535\u5B50\u4E66\uFF1A[\u300AWasm\u63D2\u4EF6\u5F00\u53D1\u7BC7\u300B](https://higress.cn/docs/ebook/wasm19/)
`},l=function(){return s},d=function(){return[{depth:2,slug:"\u901A\u8FC7-higress-\u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E",text:"\u901A\u8FC7 Higress \u63A7\u5236\u53F0\u8FDB\u884C\u914D\u7F6E"},{depth:2,slug:"\u901A\u8FC7-higress-wasmplugin-crd-\u8FDB\u884C\u914D\u7F6E",text:"\u901A\u8FC7 Higress WasmPlugin CRD \u8FDB\u884C\u914D\u7F6E"},{depth:2,slug:"wasm-\u63D2\u4EF6\u539F\u7406\u4ECB\u7ECD",text:"Wasm \u63D2\u4EF6\u539F\u7406\u4ECB\u7ECD"}]},e=p((y,m,h)=>{const{layout:b,...t}=n;return t.file=a,t.url=i,r`${v()}${u(s)}`})});export{e as Content,f as __tla,l as compiledContent,e as default,a as file,n as frontmatter,d as getHeadings,c as rawContent,i as url};
