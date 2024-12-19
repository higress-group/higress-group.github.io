import{c,__tla as l}from"./astro-component.DtWAgCJT.js";import{r as p,m as u,u as h,__tla as g}from"./constant.uSv_Pmaf.js";import{__tla as f}from"./astro/assets-service.BMxLt3pn.js";let t,s,a,i,o,r,n,y=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">traffic-tag</code> plugin allows for tagging request traffic by adding specific request headers based on weight or specific request content. It supports complex logic to determine how to tag traffic according to user-defined standards.</p>
<h2 id="running-attributes">Running Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Default Phase</code><br>
Plugin execution priority: <code dir="auto">400</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>
<p>This section provides a detailed description of the configuration fields.</p>








































<table><thead><tr><th>Field Name</th><th>Type</th><th>Default Value</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">conditionGroups</code></td><td>array of object</td><td>-</td><td>No</td><td>Defines content-based tagging condition groups, detailed structure in <strong>Condition Group Configuration</strong>.</td></tr><tr><td><code dir="auto">weightGroups</code></td><td>array of object</td><td>-</td><td>No</td><td>Defines weight-based tagging condition groups, detailed structure in <strong>Weight Group Configuration</strong>.</td></tr><tr><td><code dir="auto">defaultTagKey</code></td><td>string</td><td>-</td><td>No</td><td>Default tagging key name used when no conditions are matched. Only effective when <strong>defaultTagVal</strong> is also configured.</td></tr><tr><td><code dir="auto">defaultTagVal</code></td><td>string</td><td>-</td><td>No</td><td>Default tagging value used when no conditions are matched. Only effective when <strong>defaultTagKey</strong> is also configured.</td></tr></tbody></table>
<h3 id="condition-group-configuration">Condition Group Configuration</h3>
<p>The configuration fields for each item in <code dir="auto">conditionGroups</code> are described as follows:</p>








































<table><thead><tr><th>Field Name</th><th>Type</th><th>Default Value</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">headerName</code></td><td>string</td><td>-</td><td>Yes</td><td>The HTTP header name to be added or modified.</td></tr><tr><td><code dir="auto">headerValue</code></td><td>string</td><td>-</td><td>Yes</td><td>The value of the HTTP header.</td></tr><tr><td><code dir="auto">logic</code></td><td>string</td><td>-</td><td>Yes</td><td>Logical relationship in the condition group, supports <code dir="auto">and</code>, <code dir="auto">or</code>, must be in lowercase.</td></tr><tr><td><code dir="auto">conditions</code></td><td>array of object</td><td>-</td><td>Yes</td><td>Describes specific tagging conditions, detailed structure below.</td></tr></tbody></table>
<hr>
<p>The configuration fields for each item in <code dir="auto">conditions</code> are described as follows:</p>








































<table><thead><tr><th>Field Name</th><th>Type</th><th>Default Value</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">conditionType</code></td><td>string</td><td>-</td><td>Yes</td><td>Condition type, supports <code dir="auto">header</code>, <code dir="auto">parameter</code>, <code dir="auto">cookie</code>.</td></tr><tr><td><code dir="auto">key</code></td><td>string</td><td>-</td><td>Yes</td><td>The key of the condition.</td></tr><tr><td><code dir="auto">operator</code></td><td>string</td><td>-</td><td>Yes</td><td>Operator, supports <code dir="auto">equal</code>, <code dir="auto">not_equal</code>, <code dir="auto">prefix</code>, <code dir="auto">in</code>, <code dir="auto">not_in</code>, <code dir="auto">regex</code>, <code dir="auto">percentage</code>.</td></tr><tr><td><code dir="auto">value</code></td><td>array of string</td><td>-</td><td>Yes</td><td>The value of the condition. <strong>Only when</strong> the operator is <code dir="auto">in</code> and <code dir="auto">not_in</code> multiple values are supported.</td></tr></tbody></table>
<blockquote>
<p><strong>Note: When the <code dir="auto">operator</code> is <code dir="auto">regex</code>, the regular expression engine used is <a href="https://github.com/google/re2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RE2</a>. For details, please refer to the <a href="https://github.com/google/re2/wiki/Syntax" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RE2 Official Documentation</a>.</strong></p>
</blockquote>
<h3 id="weight-group-configuration">Weight Group Configuration</h3>
<p>The configuration fields for each item in <code dir="auto">weightGroups</code> are described as follows:</p>

































<table><thead><tr><th>Field Name</th><th>Type</th><th>Default Value</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">headerName</code></td><td>string</td><td>-</td><td>Yes</td><td>The HTTP header name to be added or modified.</td></tr><tr><td><code dir="auto">headerValue</code></td><td>string</td><td>-</td><td>Yes</td><td>The value of the HTTP header.</td></tr><tr><td><code dir="auto">weight</code></td><td>integer</td><td>-</td><td>Yes</td><td>Traffic weight percentage.</td></tr></tbody></table>
<h3 id="operator-description">Operator Description</h3>





































<table><thead><tr><th>Operator</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">equal</code></td><td>Exact match, values must be identical.</td></tr><tr><td><code dir="auto">not_equal</code></td><td>Not equal match, condition met when values are different.</td></tr><tr><td><code dir="auto">prefix</code></td><td>Prefix match, condition met when the specified value is a prefix of the actual value.</td></tr><tr><td><code dir="auto">in</code></td><td>Inclusion match, actual value must be in the specified list.</td></tr><tr><td><code dir="auto">not_in</code></td><td>Exclusion match, condition met when actual value is not in the specified list.</td></tr><tr><td><code dir="auto">regex</code></td><td>Regular expression match, matched according to regex rules.</td></tr><tr><td><code dir="auto">percentage</code></td><td>Percentage match, principle: <code dir="auto">hash(get(key)) % 100 &#x3C; value</code>, condition met when true.</td></tr></tbody></table>
<blockquote>
<p><strong>Tip: About the difference between <code dir="auto">percentage</code> and <code dir="auto">weight</code></strong></p>
<ul>
<li><strong><code dir="auto">percentage</code> operator</strong>: Used in conditional expressions, it determines whether to perform a certain operation based on specified percentages and key-value pairs. For the same key-value pair, the result of multiple matches is idempotent, meaning if a condition is hit this time, it will hit it next time as well.</li>
<li><strong><code dir="auto">weight</code> field</strong>: Used to define traffic weights for different processing paths. In weight-based traffic tagging, <code dir="auto">weight</code> determines the proportion of traffic a particular path should receive. Unlike <code dir="auto">percentage</code>, since there is no fixed comparison basis and it is based on random weight distribution, multiple matches for the same request may yield multiple results.</li>
</ul>
<p>When using <code dir="auto">percentage</code> for conditional matching, it assesses whether each request meets specific percentage conditions; while <code dir="auto">weight</code> is a static random allocation of overall traffic distribution.</p>
</blockquote>
<h2 id="configuration-example">Configuration Example</h2>
<p><strong>Example 1: Content-based Matching</strong><br>
According to the configuration below, requests where the request header <code dir="auto">role</code> has a value of <code dir="auto">user</code>, <code dir="auto">viewer</code>, or <code dir="auto">editor</code> and contain query parameter <code dir="auto">foo=bar</code> will have the request header <code dir="auto">x-mse-tag: gray</code> added. Since <code dir="auto">defaultTagKey</code> and <code dir="auto">defaultTagVal</code> are configured, when no conditions are matched, the request will have the request header <code dir="auto">x-mse-tag: base</code> added.</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">defaultTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">defaultTagVal</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">conditionGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">headerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headerValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">logic</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">and</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">conditions</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">conditionType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">role</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">operator</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">in</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">viewer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">editor</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">conditionType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">parameter</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">operator</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">equal</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">bar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="defaultTagKey: x-mse-tag\x7FdefaultTagVal: base\x7FconditionGroups:\x7F  - headerName: x-mse-tag\x7F    headerValue: gray\x7F    logic: and\x7F    conditions:\x7F      - conditionType: header\x7F        key: role\x7F        operator: in\x7F        value:\x7F          - user\x7F          - viewer\x7F          - editor\x7F      - conditionType: parameter\x7F        key: foo\x7F        operator: equal\x7F        value:\x7F          - bar"><div></div></button></div></figure></div>
<p><strong>Example 2: Weight-based Matching</strong><br>
According to the configuration below, there is a 30% chance that the request will have the request header <code dir="auto">x-mse-tag: gray</code> added, a 30% chance it will have <code dir="auto">x-mse-tag: blue</code> added, and a 40% chance that no header will be added.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># The total weight is 100; the 40 weight not configured in the example will not add a header.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">weightGroups</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">headerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headerValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">30</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">headerName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-tag</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">headerValue</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">blue</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">weight</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">30</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="# The total weight is 100; the 40 weight not configured in the example will not add a header.\x7FweightGroups:\x7F  - headerName: x-mse-tag\x7F    headerValue: gray\x7F    weight: 30\x7F  - headerName: x-mse-tag\x7F    headerValue: blue\x7F    weight: 30"><div></div></button></div></figure></div>`,i={title:"Traffic Tagging",keywords:["higress","traffic tag"],description:"Traffic tagging plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/traffic-tag.md",n=void 0,r=function(){return"## Function Description\nThe `traffic-tag` plugin allows for tagging request traffic by adding specific request headers based on weight or specific request content. It supports complex logic to determine how to tag traffic according to user-defined standards.\n\n## Running Attributes\nPlugin execution phase: `Default Phase`  \nPlugin execution priority: `400`\n\n## Configuration Fields\nThis section provides a detailed description of the configuration fields.\n\n| Field Name        | Type               | Default Value | Required | Description                                                       |\n|------------------|-------------------|---------------|----------|-------------------------------------------------------------------|\n| `conditionGroups` | array of object    | -             | No       | Defines content-based tagging condition groups, detailed structure in **Condition Group Configuration**. |\n| `weightGroups`    | array of object    | -             | No       | Defines weight-based tagging condition groups, detailed structure in **Weight Group Configuration**. |\n| `defaultTagKey`   | string             | -             | No       | Default tagging key name used when no conditions are matched. Only effective when **defaultTagVal** is also configured. |\n| `defaultTagVal`   | string             | -             | No       | Default tagging value used when no conditions are matched. Only effective when **defaultTagKey** is also configured. |\n\n### Condition Group Configuration\nThe configuration fields for each item in `conditionGroups` are described as follows:\n\n| Field Name      | Type    | Default Value | Required | Description                                                       |\n|------------------|--------|---------------|----------|-------------------------------------------------------------------|\n| `headerName`     | string | -             | Yes      | The HTTP header name to be added or modified.                   |\n| `headerValue`    | string | -             | Yes      | The value of the HTTP header.                                   |\n| `logic`          | string | -             | Yes      | Logical relationship in the condition group, supports `and`, `or`, must be in lowercase. |\n| `conditions`     | array of object | -      | Yes      | Describes specific tagging conditions, detailed structure below. |\n---\nThe configuration fields for each item in `conditions` are described as follows:\n\n| Field Name        | Type               | Default Value | Required | Description                                                       |\n|-------------------|-------------------|---------------|----------|-------------------------------------------------------------------|\n| `conditionType`   | string            | -             | Yes      | Condition type, supports `header`, `parameter`, `cookie`.              |\n| `key`             | string            | -             | Yes      | The key of the condition.                                        |\n| `operator`        | string            | -             | Yes      | Operator, supports `equal`, `not_equal`, `prefix`, `in`, `not_in`, `regex`, `percentage`.  |\n| `value`           | array of string    | -             | Yes      | The value of the condition. **Only when** the operator is `in` and `not_in` multiple values are supported. |\n\n> **Note: When the `operator` is `regex`, the regular expression engine used is [RE2](https://github.com/google/re2). For details, please refer to the [RE2 Official Documentation](https://github.com/google/re2/wiki/Syntax).**\n\n### Weight Group Configuration\nThe configuration fields for each item in `weightGroups` are described as follows:\n\n| Field Name      | Type               | Default Value | Required | Description                                                       |\n|------------------|-------------------|---------------|----------|-------------------------------------------------------------------|\n| `headerName`     | string            | -             | Yes      | The HTTP header name to be added or modified.                   |\n| `headerValue`    | string            | -             | Yes      | The value of the HTTP header.                                   |\n| `weight`         | integer           | -             | Yes      | Traffic weight percentage.                                       |\n\n### Operator Description\n| Operator      | Description                                        |\n|---------------|----------------------------------------------------|\n| `equal`       | Exact match, values must be identical.             |\n| `not_equal`   | Not equal match, condition met when values are different. |\n| `prefix`      | Prefix match, condition met when the specified value is a prefix of the actual value. |\n| `in`          | Inclusion match, actual value must be in the specified list. |\n| `not_in`      | Exclusion match, condition met when actual value is not in the specified list. |\n| `regex`       | Regular expression match, matched according to regex rules. |\n| `percentage`   | Percentage match, principle: `hash(get(key)) % 100 < value`, condition met when true. |\n\n> **Tip: About the difference between `percentage` and `weight`**\n>\n> - **`percentage` operator**: Used in conditional expressions, it determines whether to perform a certain operation based on specified percentages and key-value pairs. For the same key-value pair, the result of multiple matches is idempotent, meaning if a condition is hit this time, it will hit it next time as well.\n> - **`weight` field**: Used to define traffic weights for different processing paths. In weight-based traffic tagging, `weight` determines the proportion of traffic a particular path should receive. Unlike `percentage`, since there is no fixed comparison basis and it is based on random weight distribution, multiple matches for the same request may yield multiple results.\n>\n> When using `percentage` for conditional matching, it assesses whether each request meets specific percentage conditions; while `weight` is a static random allocation of overall traffic distribution.\n\n## Configuration Example\n**Example 1: Content-based Matching**  \nAccording to the configuration below, requests where the request header `role` has a value of `user`, `viewer`, or `editor` and contain query parameter `foo=bar` will have the request header `x-mse-tag: gray` added. Since `defaultTagKey` and `defaultTagVal` are configured, when no conditions are matched, the request will have the request header `x-mse-tag: base` added.\n\n```yaml\ndefaultTagKey: x-mse-tag\ndefaultTagVal: base\nconditionGroups:\n  - headerName: x-mse-tag\n    headerValue: gray\n    logic: and\n    conditions:\n      - conditionType: header\n        key: role\n        operator: in\n        value:\n          - user\n          - viewer\n          - editor\n      - conditionType: parameter\n        key: foo\n        operator: equal\n        value:\n          - bar\n```\n\n**Example 2: Weight-based Matching**  \nAccording to the configuration below, there is a 30% chance that the request will have the request header `x-mse-tag: gray` added, a 30% chance it will have `x-mse-tag: blue` added, and a 40% chance that no header will be added.\n\n```yaml\n# The total weight is 100; the 40 weight not configured in the example will not add a header.\nweightGroups:\n  - headerName: x-mse-tag\n    headerValue: gray\n    weight: 30\n  - headerName: x-mse-tag\n    headerValue: blue\n    weight: 30\n```\n"},s=function(){return e},o=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"running-attributes",text:"Running Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:3,slug:"condition-group-configuration",text:"Condition Group Configuration"},{depth:3,slug:"weight-group-configuration",text:"Weight Group Configuration"},{depth:3,slug:"operator-description",text:"Operator Description"},{depth:2,slug:"configuration-example",text:"Configuration Example"}]},t=c((v,m,E)=>{const{layout:b,...d}=i;return d.file=a,d.url=n,p`${u()}${h(e)}`})});export{t as Content,y as __tla,s as compiledContent,t as default,a as file,i as frontmatter,o as getHeadings,r as rawContent,n as url};
