import{c as o,__tla as c}from"./astro-component.CXlaF79K.js";import{r,m as E,u as v,__tla as y}from"./constant.0Olzv8jn.js";import{__tla as u}from"./astro/assets-service.DQopRnBr.js";let e,d,a,n,i,l,t,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">transformer</code> plugin can transform request/response headers, request query parameters, and request/response body parameters. Supported transformation operation types include deletion, renaming, updating, adding, appending, mapping, and deduplication.</p>
<h2 id="execution-attributes">Execution Attributes</h2>
<p>Plugin execution phase: <code dir="auto">authentication phase</code><br>
Plugin execution priority: <code dir="auto">410</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Fill Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>reqRules</td><td>string</td><td>Optional, at least one of reqRules or respRules must be filled</td><td>-</td><td>Request transformer configuration, specifying the transformation operation type and rules for transforming request headers, request query parameters, and request body</td></tr><tr><td>respRules</td><td>string</td><td>Optional, at least one of reqRules or respRules must be filled</td><td>-</td><td>Response transformer configuration, specifying the transformation operation type and rules for transforming response headers and response body</td></tr></tbody></table>
<p>The configuration fields for each item in <code dir="auto">reqRules</code> and <code dir="auto">respRules</code> are as follows:</p>















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Fill Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>operate</td><td>string</td><td>Required, optional values are <code dir="auto">remove</code>, <code dir="auto">rename</code>, <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code>, <code dir="auto">map</code>, <code dir="auto">dedupe</code></td><td>-</td><td>Specifies the transformation operation type. Supported operation types include remove (remove), rename (rename), replace (replace), add (add), append (append), map (map), dedupe (dedupe). When there are multiple transformation rules of different types, they are executed in the order of the above operation types.</td></tr><tr><td>mapSource</td><td>string</td><td>Optional, optional values are <code dir="auto">headers</code>, <code dir="auto">querys</code>, <code dir="auto">body</code></td><td>-</td><td>Valid only when operate is <code dir="auto">map</code>. Specifies the mapping source. If this field is not filled, the default mapping source is itself.</td></tr><tr><td>headers</td><td>array of object</td><td>Optional</td><td>-</td><td>Specifies transformation rules for request/response headers.</td></tr><tr><td>querys</td><td>array of object</td><td>Optional</td><td>-</td><td>Specifies transformation rules for request query parameters.</td></tr><tr><td>body</td><td>array of object</td><td>Optional</td><td>-</td><td>Specifies transformation rules for request/response body parameters. Request body transformations allow content-types of <code dir="auto">application/json</code>, <code dir="auto">application/x-www-form-urlencoded</code>, and <code dir="auto">multipart/form-data</code> while response body transformations only allow content-type of <code dir="auto">application/json</code>.</td></tr></tbody></table>
<p>The configuration fields for each item in <code dir="auto">headers</code>, <code dir="auto">querys</code>, <code dir="auto">body</code> are as follows:</p>




























































































































<table><thead><tr><th>Name</th><th>Data Type</th><th>Fill Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">remove</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>oldKey</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">rename</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>newKey</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">rename</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>key</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">replace</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>newValue</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">replace</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>key</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">add</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>value</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">add</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>key</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">append</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>appendValue</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">append</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>fromKey</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">map</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>toKey</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">map</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>key</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">dedupe</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>strategy</td><td>string</td><td>Optional</td><td>-</td><td>Used when operate is <code dir="auto">dedupe</code>, see <a href="#%E8%BD%AC%E6%8D%A2%E6%93%8D%E4%BD%9C%E7%B1%BB%E5%9E%8B" referrerpolicy="unsafe-url">Transformation Operation Types</a> for details.</td></tr><tr><td>value_type</td><td>string</td><td>Optional, optional values are <code dir="auto">object</code>, <code dir="auto">boolean</code>, <code dir="auto">number</code>, <code dir="auto">string</code></td><td>string</td><td>When <code dir="auto">content-type: application/json</code>, this field specifies the value type of request/response body parameters.</td></tr><tr><td>host_pattern</td><td>string</td><td>Optional</td><td>-</td><td>Specifies the request hostname matching rule. Valid when transformation operation type is <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code>.</td></tr><tr><td>path_pattern</td><td>string</td><td>Optional</td><td>-</td><td>Specifies the request path matching rule. Valid when transformation operation type is <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code>.</td></tr></tbody></table>
<p>Note:</p>
<ul>
<li><code dir="auto">request transformer</code> supports the following transformation objects: request headers, request query parameters, request body (application/json, application/x-www-form-urlencoded, multipart/form-data).</li>
<li><code dir="auto">response transformer</code> supports the following transformation objects: response headers, response body (application/json).</li>
<li>The plugin supports bidirectional conversion capability, meaning that a single plugin can perform transformations on both requests and responses.</li>
<li>The execution order of transformation operation types is the order written in the configuration file, e.g., remove \u2192 rename \u2192 replace \u2192 add \u2192 append \u2192 map \u2192 dedupe or dedupe \u2192 map \u2192 append \u2192 add \u2192 replace \u2192 rename \u2192 remove.</li>
<li>When the transformation object is headers, <code dir="auto">key</code> is case-insensitive. When headers are operated and are <code dir="auto">rename</code> or <code dir="auto">map</code>, <code dir="auto">value</code> is also case-insensitive (as this field has a key meaning). However, <code dir="auto">key</code> and <code dir="auto">value</code> fields in querys and body are case-sensitive.</li>
<li><code dir="auto">value_type</code> is only effective for content type application/json for request/response bodies.</li>
<li><code dir="auto">host_pattern</code> and <code dir="auto">path_pattern</code> support <a href="https://pkg.go.dev/regexp/syntax" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RE2 syntax</a>, valid only for <code dir="auto">replace</code>, <code dir="auto">add</code>, <code dir="auto">append</code> operations. In a transformation rule, only one of the two can be optionally filled. If both are filled, then <code dir="auto">host_pattern</code> takes effect while <code dir="auto">path_pattern</code> becomes ineffective.</li>
</ul>
<h2 id="transformation-operation-types">Transformation Operation Types</h2>





















































<table><thead><tr><th>Operation Type</th><th>Key Field Meaning</th><th>Value Field Meaning</th><th>Description</th></tr></thead><tbody><tr><td>Remove remove</td><td>Target key</td><td>Not required</td><td>If the specified <code dir="auto">key</code> exists, delete it; otherwise, no operation</td></tr><tr><td>Rename rename</td><td>Target oldKey</td><td>New key name newKey</td><td>If the specified <code dir="auto">oldKey:value</code> exists, rename its key to <code dir="auto">newKey</code>, resulting in <code dir="auto">newKey:value</code>; otherwise, no operation</td></tr><tr><td>Replace replace</td><td>Target key</td><td>New value newValue</td><td>If the specified <code dir="auto">key:value</code> exists, update its value to <code dir="auto">newValue</code>, resulting in <code dir="auto">key:newValue</code>; otherwise, no operation</td></tr><tr><td>Add add</td><td>Added key</td><td>Added value</td><td>If the specified <code dir="auto">key:value</code> does not exist, add it; otherwise, no operation</td></tr><tr><td>Append append</td><td>Target key</td><td>Appending value appendValue</td><td>If the specified <code dir="auto">key:value</code> exists, append appendValue to get <code dir="auto">key:[value..., appendValue]</code>; otherwise, it is equivalent to performing add operation, resulting in <code dir="auto">key:appendValue</code>.</td></tr><tr><td>Map map</td><td>Mapping source fromKey</td><td>Mapping target toKey</td><td>If the specified <code dir="auto">fromKey:fromValue</code> exists, map its value fromValue to the value of toKey, resulting in <code dir="auto">toKey:fromValue</code>, while retaining <code dir="auto">fromKey:fromValue</code> (note: if toKey already exists, its value will be overwritten); otherwise, no operation.</td></tr><tr><td>Deduplicate dedupe</td><td>Target key</td><td>Specified deduplication strategy strategy</td><td><code dir="auto">strategy</code> optional values include: <br><code dir="auto">RETAIN_UNIQUE</code>: Retain all unique values in order, e.g., <code dir="auto">k1:[v1,v2,v3,v3,v2,v1]</code>, deduplication results in <code dir="auto">k1:[v1,v2,v3]</code>. <br><code dir="auto">RETAIN_LAST</code>: Retain the last value, e.g., <code dir="auto">k1:[v1,v2,v3]</code>, deduplication results in <code dir="auto">k1:v3</code>. <br><code dir="auto">RETAIN_FIRST</code> (default): Retain the first value, e.g., <code dir="auto">k1:[v1,v2,v3]</code>, deduplication results in <code dir="auto">k1:v1</code>. <br>(Note: When deduplication results in only one element v1, the key-value pair becomes <code dir="auto">k1:v1</code>, not <code dir="auto">k1:[v1]</code>.)</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="implement-routing-based-on-body-parameters">Implement Routing Based on Body Parameters</h3>
<p>Configuration example:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userId</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-user-id</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mapSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">body</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: map\x7F  headers:\x7F  - fromKey: userId\x7F    toKey: x-user-id\x7F  mapSource: body"><div></div></button></div></figure></div>
<p>This rule extracts the <code dir="auto">userId</code> from the request body and sets it in the request header <code dir="auto">x-user-id</code>. This allows routing based on body parameters using Higress\u2019s ability to match on request headers.</p>
<p>This configuration supports both <code dir="auto">application/json</code> and <code dir="auto">application/x-www-form-urlencoded</code> types of request bodies.</p>
<p>For example:
<strong>For application/json type body</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">localhost</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"userId":12, "userName":"johnlanni"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'content-type:application/json'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl localhost -d &#x27;{&#x22;userId&#x22;:12, &#x22;userName&#x22;:&#x22;johnlanni&#x22;}&#x27; -H &#x27;content-type:application/json&#x27;"><div></div></button></div></figure></div>
<p>The value of the <code dir="auto">userId</code> field will be extracted from the JSON and set to <code dir="auto">x-user-id</code>. The backend service will receive a request header with: <code dir="auto">x-user-id: 12</code>.</p>
<p>After the plugin adds this header, the gateway will recalculate the routes, allowing the routing configuration to match the specific target service based on this request header.</p>
<p><strong>For application/x-www-form-urlencoded type body</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">localhost</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'userId=12&#x26;userName=johnlanni'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl localhost -d &#x27;userId=12&#x26;userName=johnlanni&#x27;"><div></div></button></div></figure></div>
<p>The value of the <code dir="auto">userId</code> field will be extracted from the form format <code dir="auto">k1=v1&#x26;k2=v2</code> and set to <code dir="auto">x-user-id</code>. The backend service will receive a request header with: <code dir="auto">x-user-id: 12</code>.</p>
<p>After the plugin adds this header, the gateway will recalculate the routes, allowing the routing configuration to match the specific target service based on this request header.</p>
<h4 id="json-path-support">JSON Path Support</h4>
<p>You can extract fields from complex JSON according to <a href="https://github.com/tidwall/gjson/blob/master/SYNTAX.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">GJSON Path syntax</a>.</p>
<p>Common operations include, for the following JSON:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: {</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Tom"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Anderson"</span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">37</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"children"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"Sara"</span><span style="--0:#E1E4E8">,</span><span style="--0:#9ECBFF">"Alex"</span><span style="--0:#E1E4E8">,</span><span style="--0:#9ECBFF">"Jack"</span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"fav.movie"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Deer Hunter"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"friends"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Dale"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Murphy"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">44</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"nets"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"ig"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"fb"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tw"</span><span style="--0:#E1E4E8">]},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Roger"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Craig"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">68</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"nets"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"fb"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tw"</span><span style="--0:#E1E4E8">]},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span><span style="--0:#79B8FF">"first"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Jane"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"last"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Murphy"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">47</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"nets"</span><span style="--0:#E1E4E8">: [</span><span style="--0:#9ECBFF">"ig"</span><span style="--0:#E1E4E8">, </span><span style="--0:#9ECBFF">"tw"</span><span style="--0:#E1E4E8">]}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;name&#x22;: {&#x22;first&#x22;: &#x22;Tom&#x22;, &#x22;last&#x22;: &#x22;Anderson&#x22;},\x7F  &#x22;age&#x22;: 37,\x7F  &#x22;children&#x22;: [&#x22;Sara&#x22;,&#x22;Alex&#x22;,&#x22;Jack&#x22;],\x7F  &#x22;fav.movie&#x22;: &#x22;Deer Hunter&#x22;,\x7F  &#x22;friends&#x22;: [\x7F    {&#x22;first&#x22;: &#x22;Dale&#x22;, &#x22;last&#x22;: &#x22;Murphy&#x22;, &#x22;age&#x22;: 44, &#x22;nets&#x22;: [&#x22;ig&#x22;, &#x22;fb&#x22;, &#x22;tw&#x22;]},\x7F    {&#x22;first&#x22;: &#x22;Roger&#x22;, &#x22;last&#x22;: &#x22;Craig&#x22;, &#x22;age&#x22;: 68, &#x22;nets&#x22;: [&#x22;fb&#x22;, &#x22;tw&#x22;]},\x7F    {&#x22;first&#x22;: &#x22;Jane&#x22;, &#x22;last&#x22;: &#x22;Murphy&#x22;, &#x22;age&#x22;: 47, &#x22;nets&#x22;: [&#x22;ig&#x22;, &#x22;tw&#x22;]}\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>You can achieve such extractions:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">name.last              "Anderson"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">name.first             "Tom"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">age                    37</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">children               ["Sara","Alex","Jack"]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">children.0             "Sara"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">children.1             "Alex"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">friends.1              {"first": "Roger", "last": "Craig", "age": 68}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">friends.1.first        "Roger"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="name.last              &#x22;Anderson&#x22;\x7Fname.first             &#x22;Tom&#x22;\x7Fage                    37\x7Fchildren               [&#x22;Sara&#x22;,&#x22;Alex&#x22;,&#x22;Jack&#x22;]\x7Fchildren.0             &#x22;Sara&#x22;\x7Fchildren.1             &#x22;Alex&#x22;\x7Ffriends.1              {&#x22;first&#x22;: &#x22;Roger&#x22;, &#x22;last&#x22;: &#x22;Craig&#x22;, &#x22;age&#x22;: 68}\x7Ffriends.1.first        &#x22;Roger&#x22;"><div></div></button></div></figure></div>
<p>Now, if you want to extract the <code dir="auto">first</code> field from the second item in <code dir="auto">friends</code> from the above JSON formatted body and set it to the header <code dir="auto">x-first-name</code>, while also extracting the <code dir="auto">last</code> field to set it to the header <code dir="auto">x-last-name</code>, you can use this plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">friends.1.first</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-first-name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">friends.1.last</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-last-name</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">mapSource</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">body</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: map\x7F  headers:\x7F  - fromKey: friends.1.first\x7F    toKey: x-first-name\x7F  - fromKey: friends.1.last\x7F    toKey: x-last-name\x7F  mapSource: body"><div></div></button></div></figure></div>
<h3 id="request-transformer">Request Transformer</h3>
<h4 id="transforming-request-headers">Transforming Request Headers</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-remove</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-not-renamed</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-renamed</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replaced</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-add-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">host-\\$1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">host_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^(.*)\\.com$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-add-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">path-\\$1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^.*?\\/(\\w+)[\\?]{0,1}.*$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-add-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-map</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dedupe</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">headers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-dedupe-first</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_FIRST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-dedupe-last</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_LAST</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">X-dedupe-unique</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_UNIQUE</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  headers:\x7F  - key: X-remove\x7F- operate: rename\x7F  headers:\x7F  - oldKey: X-not-renamed\x7F    newKey: X-renamed\x7F- operate: replace\x7F  headers:\x7F  - key: X-replace\x7F    newValue: replaced\x7F- operate: add\x7F  headers:\x7F  - key: X-add-append\x7F    value: host-\\$1\x7F    host_pattern: ^(.*)\\.com$\x7F- operate: append\x7F  headers:\x7F  - key: X-add-append\x7F    appendValue: path-\\$1\x7F    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$\x7F- operate: map\x7F  headers:\x7F  - fromKey: X-add-append\x7F    toKey: X-map\x7F- operate: dedupe\x7F  headers:\x7F  - key: X-dedupe-first\x7F    strategy: RETAIN_FIRST\x7F  - key: X-dedupe-last\x7F    strategy: RETAIN_LAST\x7F  - key: X-dedupe-unique\x7F    strategy: RETAIN_UNIQUE"><div></div></button></div></figure></div>
<p>Send Request</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/get</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-remove: exist'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-not-renamed:test'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-replace:not-replaced'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-first:1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-first:2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-first:3'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-last:a'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-last:b'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-last:c'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-unique:1'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:3'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'X-dedupe-unique:3'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:2'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'X-dedupe-unique:1'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"args"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Add-Append"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"host-foo.bar,path-get",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Dedupe-First"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"1",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Dedupe-Last"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"c",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Dedupe-Unique"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"1,2,3",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Map"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"host-foo.bar,path-get",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Renamed"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"test",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"X-Replace"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"replaced"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v console.higress.io/get -H &#x27;host: foo.bar.com&#x27; \\\x7F-H &#x27;X-remove: exist&#x27; -H &#x27;X-not-renamed:test&#x27; -H &#x27;X-replace:not-replaced&#x27; \\\x7F-H &#x27;X-dedupe-first:1&#x27; -H &#x27;X-dedupe-first:2&#x27; -H &#x27;X-dedupe-first:3&#x27; \\\x7F-H &#x27;X-dedupe-last:a&#x27; -H &#x27;X-dedupe-last:b&#x27; -H &#x27;X-dedupe-last:c&#x27; \\\x7F-H &#x27;X-dedupe-unique:1&#x27; -H &#x27;X-dedupe-unique:2&#x27; -H &#x27;X-dedupe-unique:3&#x27; \\\x7F-H &#x27;X-dedupe-unique:3&#x27; -H &#x27;X-dedupe-unique:2&#x27; -H &#x27;X-dedupe-unique:1&#x27;\x7F{\x7F  &#x22;args&#x22;: {},\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;X-Add-Append&#x22;: &#x22;host-foo.bar,path-get&#x22;,\x7F    ...\x7F    &#x22;X-Dedupe-First&#x22;: &#x22;1&#x22;,\x7F    &#x22;X-Dedupe-Last&#x22;: &#x22;c&#x22;,\x7F    &#x22;X-Dedupe-Unique&#x22;: &#x22;1,2,3&#x22;,\x7F    ...\x7F    &#x22;X-Map&#x22;: &#x22;host-foo.bar,path-get&#x22;,\x7F    &#x22;X-Renamed&#x22;: &#x22;test&#x22;,\x7F    &#x22;X-Replace&#x22;: &#x22;replaced&#x22;\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<h4 id="transforming-request-query-parameters">Transforming Request Query Parameters</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k2-new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k2-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v2-new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v31-\\$1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">path_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^.*?\\/(\\w+)[\\?]{0,1}.*$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v32</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dedupe</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">querys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">k4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_FIRST</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  querys:\x7F  - key: k1\x7F- operate: rename\x7F  querys:\x7F  - oldKey: k2\x7F    newKey: k2-new\x7F- operate: replace\x7F  querys:\x7F  - key: k2-new\x7F    newValue: v2-new\x7F- operate: add\x7F  querys:\x7F  - key: k3\x7F    value: v31-\\$1\x7F    path_pattern: ^.*?\\/(\\w+)[\\?]{0,1}.*$\x7F- operate: append\x7F  querys:\x7F  - key: k3\x7F    appendValue: v32\x7F- operate: map\x7F  querys:\x7F  - fromKey: k3\x7F    toKey: k4\x7F- operate: dedupe\x7F  querys:\x7F  - key: k4\x7F    strategy: RETAIN_FIRST"><div></div></button></div></figure></div>
<p>Send Request</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"console.higress.io/get?k1=v11&#x26;k1=v12&#x26;k2=v2"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"args"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"k2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"v2-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"k3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"v31-get"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"v32"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"k4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"v31-get"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"url"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://foo.bar.com/get?k2-new=v2-new&#x26;k3=v31-get&#x26;k3=v32&#x26;k4=v31-get"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v &#x22;console.higress.io/get?k1=v11&#x26;k1=v12&#x26;k2=v2&#x22;\x7F{\x7F  &#x22;args&#x22;: {\x7F    &#x22;k2-new&#x22;: &#x22;v2-new&#x22;,\x7F    &#x22;k3&#x22;: [\x7F      &#x22;v31-get&#x22;,\x7F      &#x22;v32&#x22;\x7F    ],\x7F    &#x22;k4&#x22;: &#x22;v31-get&#x22;\x7F  },\x7F  ...\x7F  &#x22;url&#x22;: &#x22;http://foo.bar.com/get?k2-new=v2-new&#x26;k3=v31-get&#x26;k3=v32&#x26;k4=v31-get&#x22;\x7F}"><div></div></button></div></figure></div>
<h4 id="transforming-request-body">Transforming Request Body</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a2-new</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a3</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">t3-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">t1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">appendValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">t1-\\$1-append</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value_type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">host_pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">^(.*)\\.com$</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">map</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">fromKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a1-new</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">toKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a4</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dedupe</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a4</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">strategy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">RETAIN_FIRST</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  body:\x7F  - key: a1\x7F- operate: rename\x7F  body:\x7F  - oldKey: a2\x7F    newKey: a2-new\x7F- operate: replace\x7F  body:\x7F  - key: a3\x7F    newValue: t3-new\x7F    value_type: string\x7F- operate: add\x7F  body:\x7F  - key: a1-new\x7F    value: t1-new\x7F    value_type: string\x7F- operate: append\x7F  body:\x7F  - key: a1-new\x7F    appendValue: t1-\\$1-append\x7F    value_type: string\x7F    host_pattern: ^(.*)\\.com$\x7F- operate: map\x7F  body:\x7F  - fromKey: a1-new\x7F    toKey: a4\x7F- operate: dedupe\x7F  body:\x7F  - key: a4\x7F    strategy: RETAIN_FIRST"><div></div></button></div></figure></div>
<p>Send Requests:
<strong>1. Content-Type: application/json</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"a1":"t1","a2":"t2","a3":"t3"}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"application/json",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a1-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-new"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-foo.bar-append"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t2",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t3-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t1-new"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post -H &#x27;host: foo.bar.com&#x27; \\\x7F-H &#x27;Content-Type: application/json&#x27; -d &#x27;{&#x22;a1&#x22;:&#x22;t1&#x22;,&#x22;a2&#x22;:&#x22;t2&#x22;,&#x22;a3&#x22;:&#x22;t3&#x22;}&#x27;\x7F{\x7F  ...\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;Content-Type&#x22;: &#x22;application/json&#x22;,\x7F    ...\x7F  },\x7F  &#x22;json&#x22;: {\x7F    &#x22;a1-new&#x22;: [\x7F      &#x22;t1-new&#x22;,\x7F      &#x22;t1-foo.bar-append&#x22;\x7F    ],\x7F    &#x22;a2-new&#x22;: &#x22;t2&#x22;,\x7F    &#x22;a3&#x22;: &#x22;t3-new&#x22;,\x7F    &#x22;a4&#x22;: &#x22;t1-new&#x22;\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<p><strong>2. Content-Type: application/x-www-form-urlencoded</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'a1=t1&#x26;a2=t2&#x26;a3=t3'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"form"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a1-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-new"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-foo.bar-append"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t2",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t3-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t1-new"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"application/x-www-form-urlencoded",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post -H &#x27;host: foo.bar.com&#x27; \\\x7F-d &#x27;a1=t1&#x26;a2=t2&#x26;a3=t3&#x27;\x7F{\x7F  ...\x7F  &#x22;form&#x22;: {\x7F    &#x22;a1-new&#x22;: [\x7F      &#x22;t1-new&#x22;,\x7F      &#x22;t1-foo.bar-append&#x22;\x7F    ],\x7F    &#x22;a2-new&#x22;: &#x22;t2&#x22;,\x7F    &#x22;a3&#x22;: &#x22;t3-new&#x22;,\x7F    &#x22;a4&#x22;: &#x22;t1-new&#x22;\x7F  },\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;Content-Type&#x22;: &#x22;application/x-www-form-urlencoded&#x22;,\x7F    ...\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<p><strong>3. Content-Type: multipart/form-data</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'host: foo.bar.com'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-F </span><span style="--0:#9ECBFF">a1=t1</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-F</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a2=t2</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-F</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a3=t3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"form"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a1-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-new"</span><span style="--0:#B392F0">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#B392F0">"t1-foo.bar-append"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a2-new"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t2",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a3"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t3-new",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"a4"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"t1-new"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"multipart/form-data; boundary=------------------------1118b3fab5afbc4e",</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post -H &#x27;host: foo.bar.com&#x27; \\\x7F-F a1=t1 -F a2=t2 -F a3=t3\x7F{\x7F  ...\x7F  &#x22;form&#x22;: {\x7F    &#x22;a1-new&#x22;: [\x7F      &#x22;t1-new&#x22;,\x7F      &#x22;t1-foo.bar-append&#x22;\x7F    ],\x7F    &#x22;a2-new&#x22;: &#x22;t2&#x22;,\x7F    &#x22;a3&#x22;: &#x22;t3-new&#x22;,\x7F    &#x22;a4&#x22;: &#x22;t1-new&#x22;\x7F  },\x7F  &#x22;headers&#x22;: {\x7F    ...\x7F    &#x22;Content-Type&#x22;: &#x22;multipart/form-data; boundary=------------------------1118b3fab5afbc4e&#x22;,\x7F    ...\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<h3 id="response-transformer">Response Transformer</h3>
<p>Similar to Request Transformer, this only describes the precautions for transforming JSON-formatted request/response bodies:</p>
<h4 id="key-nesting">Key Nesting <code dir="auto">.</code></h4>
<ol>
<li>In general, a key containing <code dir="auto">.</code> indicates a nested meaning, as follows:</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">respRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo.bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="respRules:\x7F- operate: add\x7F  body:\x7F  - key: foo.bar\x7F    value: value"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/get</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"foo"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"bar"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"value"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8"> </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v console.higress.io/get\x7F{\x7F ...\x7F &#x22;foo&#x22;: {\x7F  &#x22;bar&#x22;: &#x22;value&#x22;\x7F },\x7F ...\x7F}"><div></div></button></div></figure></div>
<ol start="2">
<li>When using <code dir="auto">\\.</code> to escape <code dir="auto">.</code> in the key, it indicates a non-nested meaning, as follows:</li>
</ol>
<blockquote>
<p>When enclosing a string with double quotes, use <code dir="auto">\\\\.</code> for escaping</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">respRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">add</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo\\.bar</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="respRules:\x7F- operate: add\x7F  body:\x7F  - key: foo\\.bar\x7F    value: value"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/get</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"foo.bar"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"value",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v console.higress.io/get\x7F{\x7F ...\x7F &#x22;foo.bar&#x22;: &#x22;value&#x22;,\x7F ...\x7F}"><div></div></button></div></figure></div>
<h4 id="accessing-array-elements-index">Accessing Array Elements <code dir="auto">.index</code></h4>
<p>You can access array elements by their index <code dir="auto">array.index</code>, where the index starts from 0:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"users"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"123"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"zhangsan"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">18</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"456"</span><span style="--0:#E1E4E8">: { </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"lisi"</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">19</span><span style="--0:#E1E4E8"> }</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;users&#x22;: [\x7F    {\x7F      &#x22;123&#x22;: { &#x22;name&#x22;: &#x22;zhangsan&#x22;, &#x22;age&#x22;: 18 }\x7F    },\x7F    {\x7F      &#x22;456&#x22;: { &#x22;name&#x22;: &#x22;lisi&#x22;, &#x22;age&#x22;: 19 }\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<ol>
<li>Remove the first element of <code dir="auto">user</code>:</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">remove</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: remove\x7F  body:\x7F  - key: users.0"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"users"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"456"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"lisi"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;users&#x22;:[{&#x22;123&#x22;:{&#x22;name&#x22;:&#x22;zhangsan&#x22;}},{&#x22;456&#x22;:{&#x22;name&#x22;:&#x22;lisi&#x22;}}]}&#x27;\x7F{\x7F  ...\x7F  &#x22;json&#x22;: {\x7F    &#x22;users&#x22;: [\x7F      {\x7F        &#x22;456&#x22;: {\x7F          &#x22;name&#x22;: &#x22;lisi&#x22;\x7F        }\x7F      }\x7F    ]\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<ol start="2">
<li>Rename the key <code dir="auto">123</code> of the first element of <code dir="auto">users</code> to <code dir="auto">msg</code>:</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rename</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">oldKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.0.123</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.0.first</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: rename\x7F  body:\x7F  - oldKey: users.0.123\x7F    newKey: users.0.first"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"users":[{"123":{"name":"zhangsan"}},{"456":{"name":"lisi"}}]}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"users"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"msg"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"zhangsan"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"456"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"lisi"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;users&#x22;:[{&#x22;123&#x22;:{&#x22;name&#x22;:&#x22;zhangsan&#x22;}},{&#x22;456&#x22;:{&#x22;name&#x22;:&#x22;lisi&#x22;}}]}&#x27;\x7F{\x7F  ...\x7F  &#x22;json&#x22;: {\x7F    &#x22;users&#x22;: [\x7F      {\x7F        &#x22;msg&#x22;: {\x7F          &#x22;name&#x22;: &#x22;zhangsan&#x22;\x7F        }\x7F      },\x7F      {\x7F        &#x22;456&#x22;: {\x7F          &#x22;name&#x22;: &#x22;lisi&#x22;\x7F        }\x7F      }\x7F    ]\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>
<h4 id="iterating-array-elements">Iterating Array Elements <code dir="auto">.#</code></h4>
<p>You can use <code dir="auto">array.#</code> to iterate over an array:</p>
<blockquote>
<p>\u2757\uFE0FThis operation can only be used in replace, do not attempt this operation in other transformations to avoid unpredictable results</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">"users"</span><span style="--0:#E1E4E8">: [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"zhangsan"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">18</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"name"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"lisi"</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#79B8FF">"age"</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">19</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="{\x7F  &#x22;users&#x22;: [\x7F    {\x7F      &#x22;name&#x22;: &#x22;zhangsan&#x22;,\x7F      &#x22;age&#x22;: 18\x7F    },\x7F    {\x7F      &#x22;name&#x22;: &#x22;lisi&#x22;,\x7F      &#x22;age&#x22;: 19\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">reqRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">operate</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">replace</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">body</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">users.#.age</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">newValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">20</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="reqRules:\x7F- operate: replace\x7F  body:\x7F  - key: users.#.age\x7F    newValue: 20"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">$</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-v</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">console.higress.io/post</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">'Content-Type: application/json'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{"users":[{"name":"zhangsan","age":18},{"name":"lisi","age":19}]}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># httpbin response result</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"json"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#B392F0">"users"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"age"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"20",</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"zhangsan"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"age"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"20",</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">"name"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"lisi"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#79B8FF">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ curl -v -X POST console.higress.io/post \\\x7F-H &#x27;Content-Type: application/json&#x27; \\\x7F-d &#x27;{&#x22;users&#x22;:[{&#x22;name&#x22;:&#x22;zhangsan&#x22;,&#x22;age&#x22;:18},{&#x22;name&#x22;:&#x22;lisi&#x22;,&#x22;age&#x22;:19}]}&#x27;\x7F{\x7F  ...\x7F  &#x22;json&#x22;: {\x7F    &#x22;users&#x22;: [\x7F      {\x7F        &#x22;age&#x22;: &#x22;20&#x22;,\x7F        &#x22;name&#x22;: &#x22;zhangsan&#x22;\x7F      },\x7F      {\x7F        &#x22;age&#x22;: &#x22;20&#x22;,\x7F        &#x22;name&#x22;: &#x22;lisi&#x22;\x7F      }\x7F    ]\x7F  },\x7F  ...\x7F}"><div></div></button></div></figure></div>`,n={title:"Request Response Transformation",keywords:["higress","transformer"],description:"Request response transformation plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/transformation/transformer.md",t=void 0,l=function(){return`## Function Description
The \`transformer\` plugin can transform request/response headers, request query parameters, and request/response body parameters. Supported transformation operation types include deletion, renaming, updating, adding, appending, mapping, and deduplication.

## Execution Attributes
Plugin execution phase: \`authentication phase\`  
Plugin execution priority: \`410\`

## Configuration Fields
| Name | Data Type | Fill Requirement | Default Value | Description |
| ---- | ------ | ------ | ------ | -------- |
| reqRules | string | Optional, at least one of reqRules or respRules must be filled | - | Request transformer configuration, specifying the transformation operation type and rules for transforming request headers, request query parameters, and request body |
| respRules | string | Optional, at least one of reqRules or respRules must be filled | - | Response transformer configuration, specifying the transformation operation type and rules for transforming response headers and response body |

The configuration fields for each item in \`reqRules\` and \`respRules\` are as follows:

| Name | Data Type | Fill Requirement | Default Value | Description |
| ------ | ------ | ------ | ------ | -------- |
| operate | string | Required, optional values are \`remove\`, \`rename\`, \`replace\`, \`add\`, \`append\`, \`map\`, \`dedupe\` | - | Specifies the transformation operation type. Supported operation types include remove (remove), rename (rename), replace (replace), add (add), append (append), map (map), dedupe (dedupe). When there are multiple transformation rules of different types, they are executed in the order of the above operation types. |
| mapSource | string | Optional, optional values are \`headers\`, \`querys\`, \`body\` | - | Valid only when operate is \`map\`. Specifies the mapping source. If this field is not filled, the default mapping source is itself. |
| headers | array of object | Optional | - | Specifies transformation rules for request/response headers. |
| querys | array of object | Optional | - | Specifies transformation rules for request query parameters. |
| body | array of object | Optional | - | Specifies transformation rules for request/response body parameters. Request body transformations allow content-types of \`application/json\`, \`application/x-www-form-urlencoded\`, and \`multipart/form-data\` while response body transformations only allow content-type of \`application/json\`. |

The configuration fields for each item in \`headers\`, \`querys\`, \`body\` are as follows:

| Name | Data Type | Fill Requirement | Default Value | Description |
| ------ | ------ | ------ | -------- | --------------------------------------------------- |
| key | string | Optional | - | Used when operate is \`remove\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| oldKey | string | Optional | - | Used when operate is \`rename\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| newKey | string | Optional | - | Used when operate is \`rename\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| key | string | Optional | - | Used when operate is \`replace\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| newValue | string | Optional | - | Used when operate is \`replace\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| key | string | Optional | - | Used when operate is \`add\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| value | string | Optional | - | Used when operate is \`add\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| key | string | Optional | - | Used when operate is \`append\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| appendValue | string | Optional | - | Used when operate is \`append\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| fromKey | string | Optional | - | Used when operate is \`map\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| toKey | string | Optional | - | Used when operate is \`map\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| key | string | Optional | - | Used when operate is \`dedupe\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| strategy | string | Optional | - | Used when operate is \`dedupe\`, see [Transformation Operation Types](#\u8F6C\u6362\u64CD\u4F5C\u7C7B\u578B) for details. |
| value_type | string | Optional, optional values are \`object\`, \`boolean\`, \`number\`, \`string\` | string | When \`content-type: application/json\`, this field specifies the value type of request/response body parameters. |
| host_pattern | string | Optional | - | Specifies the request hostname matching rule. Valid when transformation operation type is \`replace\`, \`add\`, \`append\`. |
| path_pattern | string | Optional | - | Specifies the request path matching rule. Valid when transformation operation type is \`replace\`, \`add\`, \`append\`. |

Note:
* \`request transformer\` supports the following transformation objects: request headers, request query parameters, request body (application/json, application/x-www-form-urlencoded, multipart/form-data).
* \`response transformer\` supports the following transformation objects: response headers, response body (application/json).
* The plugin supports bidirectional conversion capability, meaning that a single plugin can perform transformations on both requests and responses.
* The execution order of transformation operation types is the order written in the configuration file, e.g., remove \u2192 rename \u2192 replace \u2192 add \u2192 append \u2192 map \u2192 dedupe or dedupe \u2192 map \u2192 append \u2192 add \u2192 replace \u2192 rename \u2192 remove.
* When the transformation object is headers, \`key\` is case-insensitive. When headers are operated and are \`rename\` or \`map\`, \`value\` is also case-insensitive (as this field has a key meaning). However, \`key\` and \`value\` fields in querys and body are case-sensitive.
* \`value_type\` is only effective for content type application/json for request/response bodies.
* \`host_pattern\` and \`path_pattern\` support [RE2 syntax](https://pkg.go.dev/regexp/syntax), valid only for \`replace\`, \`add\`, \`append\` operations. In a transformation rule, only one of the two can be optionally filled. If both are filled, then \`host_pattern\` takes effect while \`path_pattern\` becomes ineffective.

## Transformation Operation Types
| Operation Type | Key Field Meaning | Value Field Meaning | Description |
| ------ | ------ | ------ | ------------------------------------------------------------ |
| Remove remove | Target key | Not required | If the specified \`key\` exists, delete it; otherwise, no operation |
| Rename rename | Target oldKey | New key name newKey | If the specified \`oldKey:value\` exists, rename its key to \`newKey\`, resulting in \`newKey:value\`; otherwise, no operation |
| Replace replace | Target key | New value newValue | If the specified \`key:value\` exists, update its value to \`newValue\`, resulting in \`key:newValue\`; otherwise, no operation |
| Add add | Added key | Added value | If the specified \`key:value\` does not exist, add it; otherwise, no operation |
| Append append | Target key | Appending value appendValue | If the specified \`key:value\` exists, append appendValue to get \`key:[value..., appendValue]\`; otherwise, it is equivalent to performing add operation, resulting in \`key:appendValue\`. |
| Map map | Mapping source fromKey | Mapping target toKey | If the specified \`fromKey:fromValue\` exists, map its value fromValue to the value of toKey, resulting in \`toKey:fromValue\`, while retaining \`fromKey:fromValue\` (note: if toKey already exists, its value will be overwritten); otherwise, no operation. |
| Deduplicate dedupe | Target key | Specified deduplication strategy strategy | \`strategy\` optional values include: <br>\`RETAIN_UNIQUE\`: Retain all unique values in order, e.g., \`k1:[v1,v2,v3,v3,v2,v1]\`, deduplication results in \`k1:[v1,v2,v3]\`. <br>\`RETAIN_LAST\`: Retain the last value, e.g., \`k1:[v1,v2,v3]\`, deduplication results in \`k1:v3\`. <br>\`RETAIN_FIRST\` (default): Retain the first value, e.g., \`k1:[v1,v2,v3]\`, deduplication results in \`k1:v1\`. <br>(Note: When deduplication results in only one element v1, the key-value pair becomes \`k1:v1\`, not \`k1:[v1]\`.) |

## Configuration Example

### Implement Routing Based on Body Parameters
Configuration example:
\`\`\`yaml
reqRules:
- operate: map
  headers:
  - fromKey: userId
    toKey: x-user-id
  mapSource: body
\`\`\`
This rule extracts the \`userId\` from the request body and sets it in the request header \`x-user-id\`. This allows routing based on body parameters using Higress's ability to match on request headers.

This configuration supports both \`application/json\` and \`application/x-www-form-urlencoded\` types of request bodies. 

For example:
**For application/json type body**
\`\`\`bash
curl localhost -d '{"userId":12, "userName":"johnlanni"}' -H 'content-type:application/json'
\`\`\`
The value of the \`userId\` field will be extracted from the JSON and set to \`x-user-id\`. The backend service will receive a request header with: \`x-user-id: 12\`.

After the plugin adds this header, the gateway will recalculate the routes, allowing the routing configuration to match the specific target service based on this request header.

**For application/x-www-form-urlencoded type body**
\`\`\`bash
curl localhost -d 'userId=12&userName=johnlanni'
\`\`\`
The value of the \`userId\` field will be extracted from the form format \`k1=v1&k2=v2\` and set to \`x-user-id\`. The backend service will receive a request header with: \`x-user-id: 12\`.

After the plugin adds this header, the gateway will recalculate the routes, allowing the routing configuration to match the specific target service based on this request header.

#### JSON Path Support
You can extract fields from complex JSON according to [GJSON Path syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md). 

Common operations include, for the following JSON:
\`\`\`json
{
  "name": {"first": "Tom", "last": "Anderson"},
  "age": 37,
  "children": ["Sara","Alex","Jack"],
  "fav.movie": "Deer Hunter",
  "friends": [
    {"first": "Dale", "last": "Murphy", "age": 44, "nets": ["ig", "fb", "tw"]},
    {"first": "Roger", "last": "Craig", "age": 68, "nets": ["fb", "tw"]},
    {"first": "Jane", "last": "Murphy", "age": 47, "nets": ["ig", "tw"]}
  ]
}
\`\`\`
You can achieve such extractions:
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
Now, if you want to extract the \`first\` field from the second item in \`friends\` from the above JSON formatted body and set it to the header \`x-first-name\`, while also extracting the \`last\` field to set it to the header \`x-last-name\`, you can use this plugin configuration:
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
#### Transforming Request Headers
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
    value: host-\\$1
    host_pattern: ^(.*)\\.com$
- operate: append
  headers:
  - key: X-add-append
    appendValue: path-\\$1
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
Send Request
\`\`\`bash
$ curl -v console.higress.io/get -H 'host: foo.bar.com' \\
-H 'X-remove: exist' -H 'X-not-renamed:test' -H 'X-replace:not-replaced' \\
-H 'X-dedupe-first:1' -H 'X-dedupe-first:2' -H 'X-dedupe-first:3' \\
-H 'X-dedupe-last:a' -H 'X-dedupe-last:b' -H 'X-dedupe-last:c' \\
-H 'X-dedupe-unique:1' -H 'X-dedupe-unique:2' -H 'X-dedupe-unique:3' \\
-H 'X-dedupe-unique:3' -H 'X-dedupe-unique:2' -H 'X-dedupe-unique:1'
# httpbin response result
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
#### Transforming Request Query Parameters
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
    value: v31-\\$1
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
Send Request
\`\`\`bash
$ curl -v "console.higress.io/get?k1=v11&k1=v12&k2=v2"
# httpbin response result
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
#### Transforming Request Body
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
    appendValue: t1-\\$1-append
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
Send Requests:
**1. Content-Type: application/json**
\`\`\`bash
$ curl -v -X POST console.higress.io/post -H 'host: foo.bar.com' \\
-H 'Content-Type: application/json' -d '{"a1":"t1","a2":"t2","a3":"t3"}'
# httpbin response result
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
# httpbin response result
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
**3. Content-Type: multipart/form-data**
\`\`\`bash
$ curl -v -X POST console.higress.io/post -H 'host: foo.bar.com' \\
-F a1=t1 -F a2=t2 -F a3=t3
# httpbin response result
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
Similar to Request Transformer, this only describes the precautions for transforming JSON-formatted request/response bodies:

#### Key Nesting \`.\`
1. In general, a key containing \`.\` indicates a nested meaning, as follows:
\`\`\`yaml
respRules:
- operate: add
  body:
  - key: foo.bar
    value: value
\`\`\`
\`\`\`bash
$ curl -v console.higress.io/get
# httpbin response result
{
 ...
 "foo": {
  "bar": "value"
 },
 ...
}
\`\`\`
2. When using \`\\.\` to escape \`.\` in the key, it indicates a non-nested meaning, as follows:
> When enclosing a string with double quotes, use \`\\\\.\` for escaping
\`\`\`yaml
respRules:
- operate: add
  body:
  - key: foo\\.bar
    value: value
\`\`\`
\`\`\`bash
$ curl -v console.higress.io/get
# httpbin response result
{
 ...
 "foo.bar": "value",
 ...
}
\`\`\`
#### Accessing Array Elements \`.index\`
You can access array elements by their index \`array.index\`, where the index starts from 0:
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
1. Remove the first element of \`user\`:
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
# httpbin response result
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
2. Rename the key \`123\` of the first element of \`users\` to \`msg\`:
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
# httpbin response result
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
#### Iterating Array Elements \`.#\`
You can use \`array.#\` to iterate over an array:
> \u2757\uFE0FThis operation can only be used in replace, do not attempt this operation in other transformations to avoid unpredictable results
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
# httpbin response result
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
`},d=function(){return s},i=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-attributes",text:"Execution Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"transformation-operation-types",text:"Transformation Operation Types"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"implement-routing-based-on-body-parameters",text:"Implement Routing Based on Body Parameters"},{depth:4,slug:"json-path-support",text:"JSON Path Support"},{depth:3,slug:"request-transformer",text:"Request Transformer"},{depth:4,slug:"transforming-request-headers",text:"Transforming Request Headers"},{depth:4,slug:"transforming-request-query-parameters",text:"Transforming Request Query Parameters"},{depth:4,slug:"transforming-request-body",text:"Transforming Request Body"},{depth:3,slug:"response-transformer",text:"Response Transformer"},{depth:4,slug:"key-nesting",text:"Key Nesting ."},{depth:4,slug:"accessing-array-elements-index",text:"Accessing Array Elements .index"},{depth:4,slug:"iterating-array-elements",text:"Iterating Array Elements .#"}]},e=o((x,F,h)=>{const{layout:m,...p}=n;return p.file=a,p.url=t,r`${E()}${v(s)}`})});export{e as Content,f as __tla,d as compiledContent,e as default,a as file,n as frontmatter,i as getHeadings,l as rawContent,t as url};
