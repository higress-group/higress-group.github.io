import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as y,u as E,__tla as v}from"./constant.CgKTHRkp.js";import{__tla as u}from"./astro/assets-service.BhtN0nM5.js";let a,d,e,n,p,l,i,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">request-validation</code> plugin is used to validate requests forwarded to upstream services in advance. This plugin utilizes the <code dir="auto">JSON Schema</code> mechanism for data validation, capable of validating both the body and header data of requests.</p>
<h2 id="execution-attributes">Execution Attributes</h2>
<p>Plugin Execution Phase: <code dir="auto">Authentication Phase</code><br>
Plugin Execution Priority: <code dir="auto">220</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>






















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>header_schema</td><td>object</td><td>Optional</td><td>-</td><td>Configuration for JSON Schema to validate request headers</td></tr><tr><td>body_schema</td><td>object</td><td>Optional</td><td>-</td><td>Configuration for JSON Schema to validate request body</td></tr><tr><td>rejected_code</td><td>number</td><td>Optional</td><td>403</td><td>HTTP status code returned when the request is rejected</td></tr><tr><td>rejected_msg</td><td>string</td><td>Optional</td><td>-</td><td>HTTP response body returned when the request is rejected</td></tr><tr><td>enable_swagger</td><td>bool</td><td>Optional</td><td>false</td><td>Configuration to enable Swagger documentation validation</td></tr><tr><td>enable_oas3</td><td>bool</td><td>Optional</td><td>false</td><td>Configuration to enable OAS3 documentation validation</td></tr></tbody></table>
<p><strong>Validation rules for header and body are the same, below is an example using body.</strong></p>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="enumeration-enum-validation">Enumeration (Enum) Validation</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">enum_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enum_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">enum</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"enum_string_1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"enum_string_2"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"enum_string_1"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - enum_payload\x7F  properties:\x7F    enum_payload:\x7F      type: string\x7F      enum:\x7F        - &#x22;enum_string_1&#x22;\x7F        - &#x22;enum_string_2&#x22;\x7F      default: &#x22;enum_string_1&#x22;"><div></div></button></div></figure></div>
<h3 id="boolean-validation">Boolean Validation</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">boolean_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">boolean_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - boolean_payload\x7F  properties:\x7F    boolean_payload:\x7F      type: boolean\x7F      default: true"><div></div></button></div></figure></div>
<h3 id="number-range-number-or-integer-validation">Number Range (Number or Integer) Validation</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">integer_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">integer_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maximum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - integer_payload\x7F  properties:\x7F    integer_payload:\x7F      type: integer\x7F      minimum: 1\x7F      maximum: 10"><div></div></button></div></figure></div>
<h3 id="string-length-validation">String Length Validation</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">string_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">string_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maxLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - string_payload\x7F  properties:\x7F    string_payload:\x7F      type: string\x7F      minLength: 1\x7F      maxLength: 10"><div></div></button></div></figure></div>
<h3 id="regular-expression-regex-validation">Regular Expression (Regex) Validation</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">regex_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">regex_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maxLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"^[a-zA-Z0-9_]+$"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - regex_payload\x7F  properties:\x7F    regex_payload:\x7F      type: string\x7F      minLength: 1\x7F      maxLength: 10\x7F      pattern: &#x22;^[a-zA-Z0-9_]+$&#x22;"><div></div></button></div></figure></div>
<h3 id="array-validation">Array Validation</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">array_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">array_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">maximum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">uniqueItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: [</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">3</span><span style="--0:#E1E4E8">]</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - array_payload\x7F  properties:\x7F    array_payload:\x7F      type: array\x7F      minItems: 1\x7F      items:\x7F        type: integer\x7F        minimum: 1\x7F        maximum: 10\x7F      uniqueItems: true\x7F      default: [1, 2, 3]"><div></div></button></div></figure></div>
<h3 id="combined-validation">Combined Validation</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">boolean_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">array_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">regex_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">boolean_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">array_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">array</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">integer</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">minimum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">maximum</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">uniqueItems</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">default</span><span style="--0:#E1E4E8">: [</span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">2</span><span style="--0:#E1E4E8">, </span><span style="--0:#79B8FF">3</span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">regex_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">string</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">minLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">maxLength</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">pattern</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"^[a-zA-Z0-9_]+$"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - boolean_payload\x7F    - array_payload\x7F    - regex_payload\x7F  properties:\x7F    boolean_payload:\x7F      type: boolean\x7F    array_payload:\x7F      type: array\x7F      minItems: 1\x7F      items:\x7F          type: integer\x7F          minimum: 1\x7F          maximum: 10\x7F      uniqueItems: true\x7F      default: [1, 2, 3]\x7F    regex_payload:\x7F      type: string\x7F      minLength: 1\x7F      maxLength: 10\x7F      pattern: &#x22;^[a-zA-Z0-9_]+$&#x22;"><div></div></button></div></figure></div>
<h3 id="custom-rejection-message">Custom Rejection Message</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">body_schema</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">object</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">required</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">boolean_payload</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">boolean_payload</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">boolean</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">403</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Request rejected"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="body_schema:\x7F  type: object\x7F  required:\x7F    - boolean_payload\x7F  properties:\x7F    boolean_payload:\x7F      type: boolean\x7Frejected_code: 403\x7Frejected_msg: &#x22;Request rejected&#x22;"><div></div></button></div></figure></div>`,n={title:"Request Protocol Validation",keywords:["higress","request validation"],description:"Configuration reference for request protocol validation plugin"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/request-validation.md",i=void 0,l=function(){return`## Function Description
The \`request-validation\` plugin is used to validate requests forwarded to upstream services in advance. This plugin utilizes the \`JSON Schema\` mechanism for data validation, capable of validating both the body and header data of requests.

## Execution Attributes
Plugin Execution Phase: \`Authentication Phase\`  
Plugin Execution Priority: \`220\`

## Configuration Fields
| Name            | Data Type | Requirements | Default Value | Description                                       |
|-----------------|-----------|--------------|---------------|---------------------------------------------------|
| header_schema    | object    | Optional     | -             | Configuration for JSON Schema to validate request headers |
| body_schema      | object    | Optional     | -             | Configuration for JSON Schema to validate request body   |
| rejected_code    | number    | Optional     | 403           | HTTP status code returned when the request is rejected   |
| rejected_msg     | string    | Optional     | -             | HTTP response body returned when the request is rejected  |
| enable_swagger   | bool      | Optional     | false         | Configuration to enable Swagger documentation validation   |
| enable_oas3      | bool      | Optional     | false         | Configuration to enable OAS3 documentation validation      |

**Validation rules for header and body are the same, below is an example using body.**

## Configuration Examples
### Enumeration (Enum) Validation
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

### Boolean Validation
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

### Number Range (Number or Integer) Validation
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

### String Length Validation
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

### Regular Expression (Regex) Validation
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

### Array Validation
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

### Combined Validation
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

### Custom Rejection Message
\`\`\`yaml
body_schema:
  type: object
  required:
    - boolean_payload
  properties:
    boolean_payload:
      type: boolean
rejected_code: 403
rejected_msg: "Request rejected"
\`\`\`
`},d=function(){return s},p=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-attributes",text:"Execution Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"enumeration-enum-validation",text:"Enumeration (Enum) Validation"},{depth:3,slug:"boolean-validation",text:"Boolean Validation"},{depth:3,slug:"number-range-number-or-integer-validation",text:"Number Range (Number or Integer) Validation"},{depth:3,slug:"string-length-validation",text:"String Length Validation"},{depth:3,slug:"regular-expression-regex-validation",text:"Regular Expression (Regex) Validation"},{depth:3,slug:"array-validation",text:"Array Validation"},{depth:3,slug:"combined-validation",text:"Combined Validation"},{depth:3,slug:"custom-rejection-message",text:"Custom Rejection Message"}]},a=c((g,f,x)=>{const{layout:b,...t}=n;return t.file=e,t.url=i,r`${y()}${E(s)}`})});export{a as Content,m as __tla,d as compiledContent,a as default,e as file,n as frontmatter,p as getHeadings,l as rawContent,i as url};
