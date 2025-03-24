import{c,__tla as o}from"./astro-component.CXlaF79K.js";import{r as y,m as E,u as v,__tla as r}from"./constant.BTMRFRkb.js";import{__tla as m}from"./astro/assets-service.DQopRnBr.js";let a,i,e,n,t,l,d,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return r}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u529F\u80FD\u8BF4\u660E">\u529F\u80FD\u8BF4\u660E</h2>
<p><code dir="auto">request-validation</code>\u63D2\u4EF6\u7528\u4E8E\u63D0\u524D\u9A8C\u8BC1\u5411\u4E0A\u6E38\u670D\u52A1\u8F6C\u53D1\u7684\u8BF7\u6C42\u3002\u8BE5\u63D2\u4EF6\u4F7F\u7528<code dir="auto">JSON Schema</code>\u673A\u5236\u8FDB\u884C\u6570\u636E\u9A8C\u8BC1\uFF0C\u53EF\u4EE5\u9A8C\u8BC1\u8BF7\u6C42\u7684body\u53CAheader\u6570\u636E\u3002</p>
<h2 id="\u8FD0\u884C\u5C5E\u6027">\u8FD0\u884C\u5C5E\u6027</h2>
<p>\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A<code dir="auto">\u8BA4\u8BC1\u9636\u6BB5</code>
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A<code dir="auto">220</code></p>
<h2 id="\u914D\u7F6E\u5B57\u6BB5">\u914D\u7F6E\u5B57\u6BB5</h2>






















































<table><thead><tr><th>\u540D\u79F0</th><th>\u6570\u636E\u7C7B\u578B</th><th>\u586B\u5199\u8981\u6C42</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>header_schema</td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u9A8C\u8BC1\u8BF7\u6C42header\u7684JSON Schema</td></tr><tr><td>body_schema</td><td>object</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u7528\u4E8E\u9A8C\u8BC1\u8BF7\u6C42body\u7684JSON Schema</td></tr><tr><td>rejected_code</td><td>number</td><td>\u9009\u586B</td><td>403</td><td>\u914D\u7F6E\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684HTTP\u72B6\u6001\u7801</td></tr><tr><td>rejected_msg</td><td>string</td><td>\u9009\u586B</td><td>-</td><td>\u914D\u7F6E\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684HTTP\u5E94\u7B54Body</td></tr><tr><td>enable_swagger</td><td>bool</td><td>\u9009\u586B</td><td>false</td><td>\u914D\u7F6E\u662F\u5426\u5F00\u542Fswagger\u6587\u6863\u9A8C\u8BC1</td></tr><tr><td>enable_oas3</td><td>bool</td><td>\u9009\u586B</td><td>false</td><td>\u914D\u7F6E\u662F\u5426\u5F00\u542FOAS3\u6587\u6863\u9A8C\u8BC1</td></tr></tbody></table>
<p><strong>\u6821\u9A8C\u89C4\u5219\u5BF9header\u548Cbody\u662F\u4E00\u6837\u7684\uFF0C\u4E0B\u9762\u4EE5body\u4E3A\u4F8B\u8BF4\u660E</strong></p>
<h2 id="\u914D\u7F6E\u793A\u4F8B">\u914D\u7F6E\u793A\u4F8B</h2>
<h3 id="\u679A\u4E3Eenum\u9A8C\u8BC1">\u679A\u4E3E\uFF08Enum\uFF09\u9A8C\u8BC1</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">enum_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enum_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"enum_string_1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"enum_string_2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"enum_string_1"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - enum_payload\x7F  properties:\x7F    enum_payload:\x7F      type: string\x7F      enum:\x7F        - &#x22;enum_string_1&#x22;\x7F        - &#x22;enum_string_2&#x22;\x7F      default: &#x22;enum_string_1&#x22;"><div></div></button></div></figure></div>
<h3 id="\u5E03\u5C14boolean\u9A8C\u8BC1">\u5E03\u5C14\uFF08Boolean\uFF09\u9A8C\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">boolean_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">boolean_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - boolean_payload\x7F  properties:\x7F    boolean_payload:\x7F      type: boolean\x7F      default: true"><div></div></button></div></figure></div>
<h3 id="\u6570\u5B57\u8303\u56F4number-or-integer\u9A8C\u8BC1">\u6570\u5B57\u8303\u56F4\uFF08Number or Integer\uFF09\u9A8C\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">integer_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">integer_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maximum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - integer_payload\x7F  properties:\x7F    integer_payload:\x7F      type: integer\x7F      minimum: 1\x7F      maximum: 10"><div></div></button></div></figure></div>
<h3 id="\u5B57\u7B26\u4E32\u957F\u5EA6string\u9A8C\u8BC1">\u5B57\u7B26\u4E32\u957F\u5EA6\uFF08String\uFF09\u9A8C\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">string_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">string_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maxLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - string_payload\x7F  properties:\x7F    string_payload:\x7F      type: string\x7F      minLength: 1\x7F      maxLength: 10"><div></div></button></div></figure></div>
<h3 id="\u6B63\u5219\u8868\u8FBE\u5F0Fregex\u9A8C\u8BC1">\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08Regex\uFF09\u9A8C\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">regex_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">regex_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maxLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"^[a-zA-Z0-9_]+$"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - regex_payload\x7F  properties:\x7F    regex_payload:\x7F      type: string\x7F      minLength: 1\x7F      maxLength: 10\x7F      pattern: &#x22;^[a-zA-Z0-9_]+$&#x22;"><div></div></button></div></figure></div>
<h3 id="\u6570\u7EC4array\u9A8C\u8BC1">\u6570\u7EC4\uFF08Array\uFF09\u9A8C\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">array_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">array_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">maximum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">uniqueItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: [</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">3</span><span style="--0:#E1E4E8">]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - array_payload\x7F  properties:\x7F    array_payload:\x7F      type: array\x7F      minItems: 1\x7F      items:\x7F        type: integer\x7F        minimum: 1\x7F        maximum: 10\x7F      uniqueItems: true\x7F      default: [1, 2, 3]"><div></div></button></div></figure></div>
<h3 id="\u591A\u5B57\u6BB5\u7EC4\u5408combined\u9A8C\u8BC1">\u591A\u5B57\u6BB5\u7EC4\u5408\uFF08Combined\uFF09\u9A8C\u8BC1</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">boolean_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">array_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">regex_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">boolean_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">array_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">maximum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">uniqueItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: [</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">3</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">regex_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maxLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"^[a-zA-Z0-9_]+$"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - boolean_payload\x7F    - array_payload\x7F    - regex_payload\x7F  properties:\x7F    boolean_payload:\x7F      type: boolean\x7F    array_payload:\x7F      type: array\x7F      minItems: 1\x7F      items:\x7F          type: integer\x7F          minimum: 1\x7F          maximum: 10\x7F      uniqueItems: true\x7F      default: [1, 2, 3]\x7F    regex_payload:\x7F      type: string\x7F      minLength: 1\x7F      maxLength: 10\x7F      pattern: &#x22;^[a-zA-Z0-9_]+$&#x22;"><div></div></button></div></figure></div>
<h3 id="\u81EA\u5B9A\u4E49\u62D2\u7EDD\u4FE1\u606F">\u81EA\u5B9A\u4E49\u62D2\u7EDD\u4FE1\u606F</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">boolean_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">boolean_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">403</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"\u8BF7\u6C42\u88AB\u62D2\u7EDD"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - boolean_payload\x7F  properties:\x7F    boolean_payload:\x7F      type: boolean\x7Frejected_code: 403\x7Frejected_msg: &#x22;\u8BF7\u6C42\u88AB\u62D2\u7EDD&#x22;"><div></div></button></div></figure></div>`,n={title:"\u8BF7\u6C42\u534F\u8BAE\u6821\u9A8C",keywords:["higress","request validation"],description:"\u8BF7\u6C42\u534F\u8BAE\u6821\u9A8C\u63D2\u4EF6\u914D\u7F6E\u53C2\u8003"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/plugins/traffic/request-validation.md",d=void 0,l=function(){return`
## \u529F\u80FD\u8BF4\u660E
\`request-validation\`\u63D2\u4EF6\u7528\u4E8E\u63D0\u524D\u9A8C\u8BC1\u5411\u4E0A\u6E38\u670D\u52A1\u8F6C\u53D1\u7684\u8BF7\u6C42\u3002\u8BE5\u63D2\u4EF6\u4F7F\u7528\`JSON Schema\`\u673A\u5236\u8FDB\u884C\u6570\u636E\u9A8C\u8BC1\uFF0C\u53EF\u4EE5\u9A8C\u8BC1\u8BF7\u6C42\u7684body\u53CAheader\u6570\u636E\u3002

## \u8FD0\u884C\u5C5E\u6027

\u63D2\u4EF6\u6267\u884C\u9636\u6BB5\uFF1A\`\u8BA4\u8BC1\u9636\u6BB5\`
\u63D2\u4EF6\u6267\u884C\u4F18\u5148\u7EA7\uFF1A\`220\`

## \u914D\u7F6E\u5B57\u6BB5

| \u540D\u79F0 | \u6570\u636E\u7C7B\u578B | \u586B\u5199\u8981\u6C42 | \u9ED8\u8BA4\u503C | \u63CF\u8FF0 |
| -------- | -------- | -------- |-----| -------- |
|header_schema|object|\u9009\u586B| -   |\u914D\u7F6E\u7528\u4E8E\u9A8C\u8BC1\u8BF7\u6C42header\u7684JSON Schema|
|body_schema|object|\u9009\u586B| -   |\u914D\u7F6E\u7528\u4E8E\u9A8C\u8BC1\u8BF7\u6C42body\u7684JSON Schema|
|rejected_code|number|\u9009\u586B| 403 |\u914D\u7F6E\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684HTTP\u72B6\u6001\u7801|
|rejected_msg|string|\u9009\u586B| - |\u914D\u7F6E\u8BF7\u6C42\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684HTTP\u5E94\u7B54Body|
|enable_swagger|bool|\u9009\u586B| false |\u914D\u7F6E\u662F\u5426\u5F00\u542Fswagger\u6587\u6863\u9A8C\u8BC1|
|enable_oas3|bool|\u9009\u586B| false |\u914D\u7F6E\u662F\u5426\u5F00\u542FOAS3\u6587\u6863\u9A8C\u8BC1|

**\u6821\u9A8C\u89C4\u5219\u5BF9header\u548Cbody\u662F\u4E00\u6837\u7684\uFF0C\u4E0B\u9762\u4EE5body\u4E3A\u4F8B\u8BF4\u660E**

## \u914D\u7F6E\u793A\u4F8B

### \u679A\u4E3E\uFF08Enum\uFF09\u9A8C\u8BC1
\`\`\`yaml
body_schema:
  type: object
  required:
    - enum_payload
  properties:
    enum_payload:
      type: string
      enum:
        - "enum_string_1"
        - "enum_string_2"
      default: "enum_string_1"
\`\`\`

### \u5E03\u5C14\uFF08Boolean\uFF09\u9A8C\u8BC1
\`\`\`yaml
body_schema:
  type: object
  required:
    - boolean_payload
  properties:
    boolean_payload:
      type: boolean
      default: true
\`\`\`

### \u6570\u5B57\u8303\u56F4\uFF08Number or Integer\uFF09\u9A8C\u8BC1
\`\`\`yaml
body_schema:
  type: object
  required:
    - integer_payload
  properties:
    integer_payload:
      type: integer
      minimum: 1
      maximum: 10
\`\`\`

### \u5B57\u7B26\u4E32\u957F\u5EA6\uFF08String\uFF09\u9A8C\u8BC1
\`\`\`yaml
body_schema:
  type: object
  required:
    - string_payload
  properties:
    string_payload:
      type: string
      minLength: 1
      maxLength: 10
\`\`\`

### \u6B63\u5219\u8868\u8FBE\u5F0F\uFF08Regex\uFF09\u9A8C\u8BC1
\`\`\`yaml
body_schema:
  type: object
  required:
    - regex_payload
  properties:
    regex_payload:
      type: string
      minLength: 1
      maxLength: 10
      pattern: "^[a-zA-Z0-9_]+$"
\`\`\`

### \u6570\u7EC4\uFF08Array\uFF09\u9A8C\u8BC1
\`\`\`yaml
body_schema:
  type: object
  required:
    - array_payload
  properties:
    array_payload:
      type: array
      minItems: 1
      items:
        type: integer
        minimum: 1
        maximum: 10
      uniqueItems: true
      default: [1, 2, 3]
\`\`\`

### \u591A\u5B57\u6BB5\u7EC4\u5408\uFF08Combined\uFF09\u9A8C\u8BC1
\`\`\`yaml
body_schema:
  type: object
  required:
    - boolean_payload
    - array_payload
    - regex_payload
  properties:
    boolean_payload:
      type: boolean
    array_payload:
      type: array
      minItems: 1
      items:
          type: integer
          minimum: 1
          maximum: 10
      uniqueItems: true
      default: [1, 2, 3]
    regex_payload:
      type: string
      minLength: 1
      maxLength: 10
      pattern: "^[a-zA-Z0-9_]+$"
\`\`\`

### \u81EA\u5B9A\u4E49\u62D2\u7EDD\u4FE1\u606F
\`\`\`yaml
body_schema:
  type: object
  required:
    - boolean_payload
  properties:
    boolean_payload:
      type: boolean
rejected_code: 403
rejected_msg: "\u8BF7\u6C42\u88AB\u62D2\u7EDD"
\`\`\`

`},i=function(){return s},t=function(){return[{depth:2,slug:"\u529F\u80FD\u8BF4\u660E",text:"\u529F\u80FD\u8BF4\u660E"},{depth:2,slug:"\u8FD0\u884C\u5C5E\u6027",text:"\u8FD0\u884C\u5C5E\u6027"},{depth:2,slug:"\u914D\u7F6E\u5B57\u6BB5",text:"\u914D\u7F6E\u5B57\u6BB5"},{depth:2,slug:"\u914D\u7F6E\u793A\u4F8B",text:"\u914D\u7F6E\u793A\u4F8B"},{depth:3,slug:"\u679A\u4E3Eenum\u9A8C\u8BC1",text:"\u679A\u4E3E\uFF08Enum\uFF09\u9A8C\u8BC1"},{depth:3,slug:"\u5E03\u5C14boolean\u9A8C\u8BC1",text:"\u5E03\u5C14\uFF08Boolean\uFF09\u9A8C\u8BC1"},{depth:3,slug:"\u6570\u5B57\u8303\u56F4number-or-integer\u9A8C\u8BC1",text:"\u6570\u5B57\u8303\u56F4\uFF08Number or Integer\uFF09\u9A8C\u8BC1"},{depth:3,slug:"\u5B57\u7B26\u4E32\u957F\u5EA6string\u9A8C\u8BC1",text:"\u5B57\u7B26\u4E32\u957F\u5EA6\uFF08String\uFF09\u9A8C\u8BC1"},{depth:3,slug:"\u6B63\u5219\u8868\u8FBE\u5F0Fregex\u9A8C\u8BC1",text:"\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08Regex\uFF09\u9A8C\u8BC1"},{depth:3,slug:"\u6570\u7EC4array\u9A8C\u8BC1",text:"\u6570\u7EC4\uFF08Array\uFF09\u9A8C\u8BC1"},{depth:3,slug:"\u591A\u5B57\u6BB5\u7EC4\u5408combined\u9A8C\u8BC1",text:"\u591A\u5B57\u6BB5\u7EC4\u5408\uFF08Combined\uFF09\u9A8C\u8BC1"},{depth:3,slug:"\u81EA\u5B9A\u4E49\u62D2\u7EDD\u4FE1\u606F",text:"\u81EA\u5B9A\u4E49\u62D2\u7EDD\u4FE1\u606F"}]},a=c((x,g,f)=>{const{layout:b,...p}=n;return p.file=e,p.url=d,y`${E()}${v(s)}`})});export{a as Content,u as __tla,i as compiledContent,a as default,e as file,n as frontmatter,t as getHeadings,l as rawContent,d as url};
