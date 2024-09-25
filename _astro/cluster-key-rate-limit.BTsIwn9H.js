import{c as p,__tla as o}from"./astro-component.CwRucF1h.js";import{r as c,m as y,u,__tla as _}from"./constant.BHwto7qJ.js";import{__tla as E}from"./astro/assets-service.Dd3mQuiC.js";let s,d,a,t,r,l,i,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return _}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">cluster-key-rate-limit</code> plugin implements cluster rate limiting based on Redis, suitable for scenarios that require global consistent rate limiting across multiple Higress Gateway instances.</p>
<p>The Key used for rate limiting can originate from URL parameters, HTTP request headers, client IP addresses, consumer names, or keys in cookies.</p>
<h2 id="execution-attributes">Execution Attributes</h2>
<p>Plugin Execution Phase: <code dir="auto">default phase</code><br>
Plugin Execution Priority: <code dir="auto">20</code></p>
<h2 id="configuration-description">Configuration Description</h2>






















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>rule_name</td><td>string</td><td>Yes</td><td>-</td><td>The name of the rate limiting rule. The Redis key is constructed using rule name + rate limit type + limit key name + actual value of the limit key.</td></tr><tr><td>rule_items</td><td>array of object</td><td>Yes</td><td>-</td><td>Rate limiting rule items. The first matching <code dir="auto">rule_item</code> based on the order under <code dir="auto">rule_items</code> will trigger the rate limiting, and subsequent rules will be ignored.</td></tr><tr><td>show_limit_quota_header</td><td>bool</td><td>No</td><td>false</td><td>Whether to display <code dir="auto">X-RateLimit-Limit</code> (total requests allowed) and <code dir="auto">X-RateLimit-Remaining</code> (remaining requests that can be sent) in the response headers.</td></tr><tr><td>rejected_code</td><td>int</td><td>No</td><td>429</td><td>HTTP status code returned when a request is rate limited.</td></tr><tr><td>rejected_msg</td><td>string</td><td>No</td><td>Too many requests</td><td>Response body returned when a request is rate limited.</td></tr><tr><td>redis</td><td>object</td><td>Yes</td><td>-</td><td>Redis related configuration.</td></tr></tbody></table>
<p>Description of configuration fields for each item in <code dir="auto">rule_items</code>.</p>


















































































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>The name of the HTTP request header from which to retrieve the rate limiting key value.</td></tr><tr><td>limit_by_param</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>The name of the URL parameter from which to retrieve the rate limiting key value.</td></tr><tr><td>limit_by_consumer</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>Applies rate limiting based on consumer name without needing to add an actual value.</td></tr><tr><td>limit_by_cookie</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>The name of the key in the Cookie from which to retrieve the rate limiting key value.</td></tr><tr><td>limit_by_per_header</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>Matches specific HTTP request headers according to the rules and calculates rate limits for each header. The <code dir="auto">limit_keys</code> configuration supports regular expressions or <code dir="auto">*</code>.</td></tr><tr><td>limit_by_per_param</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>Matches specific URL parameters according to the rules and calculates rate limits for each parameter. The <code dir="auto">limit_keys</code> configuration supports regular expressions or <code dir="auto">*</code>.</td></tr><tr><td>limit_by_per_consumer</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>Matches specific consumers according to the rules and calculates rate limits for each consumer. The <code dir="auto">limit_keys</code> configuration supports regular expressions or <code dir="auto">*</code>.</td></tr><tr><td>limit_by_per_cookie</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>Matches specific cookies according to the rules and calculates rate limits for each cookie. The <code dir="auto">limit_keys</code> configuration supports regular expressions or <code dir="auto">*</code>.</td></tr><tr><td>limit_by_per_ip</td><td>string</td><td>No, one of <code dir="auto">limit_by_*</code></td><td>-</td><td>Matches specific IPs according to the rules and calculates rate limits for each IP. Retrieve via IP parameter name from request headers, defined as <code dir="auto">from-header-{header name}</code>, e.g., <code dir="auto">from-header-x-forwarded-for</code>. To get the remote socket IP directly, use <code dir="auto">from-remote-addr</code>.</td></tr><tr><td>limit_keys</td><td>array of object</td><td>Yes</td><td>-</td><td>Configures the limit counts after matching key values.</td></tr></tbody></table>
<p>Description of configuration fields for each item in <code dir="auto">limit_keys</code>.</p>















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>Yes</td><td>-</td><td>Matched key value; types <code dir="auto">limit_by_per_header</code>, <code dir="auto">limit_by_per_param</code>, <code dir="auto">limit_by_per_consumer</code>, <code dir="auto">limit_by_per_cookie</code> support regular expression configurations (starting with regexp: followed by a regular expression) or <code dir="auto">*</code> (representing all), e.g., <code dir="auto">regexp:^d.*</code> (all strings starting with d); <code dir="auto">limit_by_per_ip</code> supports configuring IP addresses or IP segments.</td></tr><tr><td>query_per_second</td><td>int</td><td>No, one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code> is optional.</td><td>-</td><td>Allowed number of requests per second.</td></tr><tr><td>query_per_minute</td><td>int</td><td>No, one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code> is optional.</td><td>-</td><td>Allowed number of requests per minute.</td></tr><tr><td>query_per_hour</td><td>int</td><td>No, one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code> is optional.</td><td>-</td><td>Allowed number of requests per hour.</td></tr><tr><td>query_per_day</td><td>int</td><td>No, one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code> is optional.</td><td>-</td><td>Allowed number of requests per day.</td></tr></tbody></table>
<p>Description of configuration fields for each item in <code dir="auto">redis</code>.</p>















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>service_name</td><td>string</td><td>Required</td><td>-</td><td>Full FQDN name of the Redis service, including service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local.</td></tr><tr><td>service_port</td><td>int</td><td>No</td><td>80 for static services; otherwise 6379</td><td>Service port for the Redis service.</td></tr><tr><td>username</td><td>string</td><td>No</td><td>-</td><td>Redis username.</td></tr><tr><td>password</td><td>string</td><td>No</td><td>-</td><td>Redis password.</td></tr><tr><td>timeout</td><td>int</td><td>No</td><td>1000</td><td>Redis connection timeout in milliseconds.</td></tr></tbody></table>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="distinguish-rate-limiting-based-on-the-request-parameter-apikey">Distinguish rate limiting based on the request parameter apikey</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each apikey corresponds to 10qds.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each apikey corresponds to 100qd.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># As a fallback, matches all requests, each apikey corresponds to 1000qdh.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_param: apikey\x7F  limit_keys:\x7F  - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F    query_per_minute: 10\x7F  - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F    query_per_hour: 100\x7F- limit_by_per_param: apikey\x7F  limit_keys:\x7F  # Regular expression, matches all strings starting with a, each apikey corresponds to 10qds.\x7F  - key: &#x22;regexp:^a.*&#x22;\x7F    query_per_second: 10\x7F  # Regular expression, matches all strings starting with b, each apikey corresponds to 100qd.\x7F  - key: &#x22;regexp:^b.*&#x22;\x7F    query_per_minute: 100\x7F  # As a fallback, matches all requests, each apikey corresponds to 1000qdh.\x7F  - key: &#x22;*&#x22;\x7F    query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="distinguish-rate-limiting-based-on-the-header-x-ca-key">Distinguish rate limiting based on the header x-ca-key</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each apikey corresponds to 10qds.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each apikey corresponds to 100qd.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># As a fallback, matches all requests, each apikey corresponds to 1000qdh.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_header: x-ca-key\x7F  limit_keys:\x7F  - key: 102234\x7F    query_per_minute: 10\x7F  - key: 308239\x7F    query_per_hour: 10\x7F- limit_by_per_header: x-ca-key\x7F  limit_keys:\x7F  # Regular expression, matches all strings starting with a, each apikey corresponds to 10qds.\x7F  - key: &#x22;regexp:^a.*&#x22;\x7F    query_per_second: 10\x7F  # Regular expression, matches all strings starting with b, each apikey corresponds to 100qd.\x7F  - key: &#x22;regexp:^b.*&#x22;\x7F    query_per_minute: 100\x7F  # As a fallback, matches all requests, each apikey corresponds to 1000qdh.\x7F  - key: &#x22;*&#x22;\x7F    query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="distinguish-rate-limiting-based-on-the-client-ip-from-the-request-header-x-forwarded-for">Distinguish rate limiting based on the client IP from the request header x-forwarded-for</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_ip</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">from-header-x-forwarded-for</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Exact IP</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.1.1.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># IP segment, for IPs matching this segment, each IP corresponds to 100qpd.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">1.1.1.0/24</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># As a fallback, defaults to 1000 qpd for each IP.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">0.0.0.0/0</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_per_ip: from-header-x-forwarded-for\x7F  limit_keys:\x7F  # Exact IP\x7F  - key: 1.1.1.1\x7F    query_per_day: 10\x7F  # IP segment, for IPs matching this segment, each IP corresponds to 100qpd.\x7F  - key: 1.1.1.0/24\x7F    query_per_day: 100\x7F  # As a fallback, defaults to 1000 qpd for each IP.\x7F  - key: 0.0.0.0/0\x7F    query_per_day: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="distinguish-rate-limiting-based-on-consumers">Distinguish rate limiting based on consumers</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each consumer corresponds to 10qds.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each consumer corresponds to 100qd.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># As a fallback, matches all requests, each consumer corresponds to 1000qdh.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F- limit_by_consumer: &#x27;&#x27;\x7F  limit_keys:\x7F  - key: consumer1\x7F    query_per_second: 10\x7F  - key: consumer2\x7F    query_per_hour: 100\x7F- limit_by_per_consumer: &#x27;&#x27;\x7F  limit_keys:\x7F  # Regular expression, matches all strings starting with a, each consumer corresponds to 10qds.\x7F  - key: &#x22;regexp:^a.*&#x22;\x7F    query_per_second: 10\x7F  # Regular expression, matches all strings starting with b, each consumer corresponds to 100qd.\x7F  - key: &#x22;regexp:^b.*&#x22;\x7F    query_per_minute: 100\x7F  # As a fallback, matches all requests, each consumer corresponds to 1000qdh.\x7F  - key: &#x22;*&#x22;\x7F    query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="distinguish-rate-limiting-based-on-key-value-pairs-in-cookies">Distinguish rate limiting based on key-value pairs in cookies</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each cookie's value corresponds to 10qds.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each cookie's value corresponds to 100qd.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># As a fallback, matches all requests, each cookie's value corresponds to 1000qdh.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"code":-1,"msg":"Too many requests"}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_cookie: key1\x7F    limit_keys:\x7F      - key: value1\x7F        query_per_minute: 10\x7F      - key: value2\x7F        query_per_hour: 100\x7F  - limit_by_per_cookie: key1\x7F    limit_keys:\x7F      # Regular expression, matches all strings starting with a, each cookie&#x27;s value corresponds to 10qds.\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        query_per_second: 10\x7F      # Regular expression, matches all strings starting with b, each cookie&#x27;s value corresponds to 100qd.\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        query_per_minute: 100\x7F      # As a fallback, matches all requests, each cookie&#x27;s value corresponds to 1000qdh.\x7F      - key: &#x22;*&#x22;\x7F        query_per_hour: 1000\x7Frejected_code: 200\x7Frejected_msg: &#x27;{&#x22;code&#x22;:-1,&#x22;msg&#x22;:&#x22;Too many requests&#x22;}&#x27;\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>`,t={title:"Key-Based Cluster Rate Limiting",keywords:["higress","rate-limit"],description:"Configuration reference for the Key-Based Cluster Rate Limiting plugin"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/cluster-key-rate-limit.md",i=void 0,l=function(){return`## Function Description
The \`cluster-key-rate-limit\` plugin implements cluster rate limiting based on Redis, suitable for scenarios that require global consistent rate limiting across multiple Higress Gateway instances. 

The Key used for rate limiting can originate from URL parameters, HTTP request headers, client IP addresses, consumer names, or keys in cookies. 

## Execution Attributes
Plugin Execution Phase: \`default phase\`  
Plugin Execution Priority: \`20\` 

## Configuration Description
| Configuration Item        | Type          | Required | Default Value | Description                                                                               |
|---------------------------|---------------|----------|---------------|-------------------------------------------------------------------------------------------|
| rule_name                 | string        | Yes      | -             | The name of the rate limiting rule. The Redis key is constructed using rule name + rate limit type + limit key name + actual value of the limit key.         |
| rule_items                | array of object| Yes     | -             | Rate limiting rule items. The first matching \`rule_item\` based on the order under \`rule_items\` will trigger the rate limiting, and subsequent rules will be ignored.                 |
| show_limit_quota_header   | bool          | No       | false         | Whether to display \`X-RateLimit-Limit\` (total requests allowed) and \`X-RateLimit-Remaining\` (remaining requests that can be sent) in the response headers. |
| rejected_code             | int           | No       | 429           | HTTP status code returned when a request is rate limited.                                                          |
| rejected_msg              | string        | No       | Too many requests | Response body returned when a request is rate limited.                                                               |
| redis                     | object        | Yes      | -             | Redis related configuration.                                                                  |

Description of configuration fields for each item in \`rule_items\`.
| Configuration Item        | Type          | Required               | Default Value | Description                                                                                           |
|---------------------------|---------------|------------------------|---------------|-------------------------------------------------------------------------------------------------------|
| limit_by_header           | string        | No, one of \`limit_by_*\` | -             | The name of the HTTP request header from which to retrieve the rate limiting key value.               |
| limit_by_param            | string        | No, one of \`limit_by_*\` | -             | The name of the URL parameter from which to retrieve the rate limiting key value.                     |
| limit_by_consumer         | string        | No, one of \`limit_by_*\` | -             | Applies rate limiting based on consumer name without needing to add an actual value.                  |
| limit_by_cookie           | string        | No, one of \`limit_by_*\` | -             | The name of the key in the Cookie from which to retrieve the rate limiting key value.                |
| limit_by_per_header       | string        | No, one of \`limit_by_*\` | -             | Matches specific HTTP request headers according to the rules and calculates rate limits for each header. The \`limit_keys\` configuration supports regular expressions or \`*\`. |
| limit_by_per_param        | string        | No, one of \`limit_by_*\` | -             | Matches specific URL parameters according to the rules and calculates rate limits for each parameter. The \`limit_keys\` configuration supports regular expressions or \`*\`. |
| limit_by_per_consumer     | string        | No, one of \`limit_by_*\` | -             | Matches specific consumers according to the rules and calculates rate limits for each consumer. The \`limit_keys\` configuration supports regular expressions or \`*\`. |
| limit_by_per_cookie       | string        | No, one of \`limit_by_*\` | -             | Matches specific cookies according to the rules and calculates rate limits for each cookie. The \`limit_keys\` configuration supports regular expressions or \`*\`. |
| limit_by_per_ip           | string        | No, one of \`limit_by_*\` | -             | Matches specific IPs according to the rules and calculates rate limits for each IP. Retrieve via IP parameter name from request headers, defined as \`from-header-{header name}\`, e.g., \`from-header-x-forwarded-for\`. To get the remote socket IP directly, use \`from-remote-addr\`. |
| limit_keys                | array of object | Yes                    | -             | Configures the limit counts after matching key values.                                               |

Description of configuration fields for each item in \`limit_keys\`.
| Configuration Item        | Type          | Required                                                         | Default Value | Description                                                        |
|---------------------------|---------------|------------------------------------------------------------------|---------------|--------------------------------------------------------------------|
| key                       | string        | Yes                                                              | -             | Matched key value; types \`limit_by_per_header\`, \`limit_by_per_param\`, \`limit_by_per_consumer\`, \`limit_by_per_cookie\` support regular expression configurations (starting with regexp: followed by a regular expression) or \`*\` (representing all), e.g., \`regexp:^d.*\` (all strings starting with d); \`limit_by_per_ip\` supports configuring IP addresses or IP segments. |
| query_per_second          | int           | No, one of \`query_per_second\`, \`query_per_minute\`, \`query_per_hour\`, \`query_per_day\` is optional. | -             | Allowed number of requests per second.                           |
| query_per_minute          | int           | No, one of \`query_per_second\`, \`query_per_minute\`, \`query_per_hour\`, \`query_per_day\` is optional. | -             | Allowed number of requests per minute.                           |
| query_per_hour            | int           | No, one of \`query_per_second\`, \`query_per_minute\`, \`query_per_hour\`, \`query_per_day\` is optional. | -             | Allowed number of requests per hour.                             |
| query_per_day             | int           | No, one of \`query_per_second\`, \`query_per_minute\`, \`query_per_hour\`, \`query_per_day\` is optional. | -             | Allowed number of requests per day.                              |

Description of configuration fields for each item in \`redis\`.
| Configuration Item        | Type          | Required | Default Value                                               | Description                                                               |
|---------------------------|---------------|----------|------------------------------------------------------------|---------------------------------------------------------------------------|
| service_name              | string        | Required | -                                                          | Full FQDN name of the Redis service, including service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local. |
| service_port              | int           | No       | 80 for static services; otherwise 6379                     | Service port for the Redis service.                                      |
| username                  | string        | No       | -                                                          | Redis username.                                                          |
| password                  | string        | No       | -                                                          | Redis password.                                                          |
| timeout                   | int           | No       | 1000                                                       | Redis connection timeout in milliseconds.                               |

## Configuration Examples

### Distinguish rate limiting based on the request parameter apikey
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
  # Regular expression, matches all strings starting with a, each apikey corresponds to 10qds.
  - key: "regexp:^a.*"
    query_per_second: 10
  # Regular expression, matches all strings starting with b, each apikey corresponds to 100qd.
  - key: "regexp:^b.*"
    query_per_minute: 100
  # As a fallback, matches all requests, each apikey corresponds to 1000qdh.
  - key: "*"
    query_per_hour: 1000
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`

### Distinguish rate limiting based on the header x-ca-key
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
  # Regular expression, matches all strings starting with a, each apikey corresponds to 10qds.
  - key: "regexp:^a.*"
    query_per_second: 10
  # Regular expression, matches all strings starting with b, each apikey corresponds to 100qd.
  - key: "regexp:^b.*"
    query_per_minute: 100
  # As a fallback, matches all requests, each apikey corresponds to 1000qdh.
  - key: "*"
    query_per_hour: 1000
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`

### Distinguish rate limiting based on the client IP from the request header x-forwarded-for
\`\`\`yaml
rule_name: default_rule
rule_items:
- limit_by_per_ip: from-header-x-forwarded-for
  limit_keys:
  # Exact IP
  - key: 1.1.1.1
    query_per_day: 10
  # IP segment, for IPs matching this segment, each IP corresponds to 100qpd.
  - key: 1.1.1.0/24
    query_per_day: 100
  # As a fallback, defaults to 1000 qpd for each IP.
  - key: 0.0.0.0/0
    query_per_day: 1000
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`

### Distinguish rate limiting based on consumers
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
  # Regular expression, matches all strings starting with a, each consumer corresponds to 10qds.
  - key: "regexp:^a.*"
    query_per_second: 10
  # Regular expression, matches all strings starting with b, each consumer corresponds to 100qd.
  - key: "regexp:^b.*"
    query_per_minute: 100
  # As a fallback, matches all requests, each consumer corresponds to 1000qdh.
  - key: "*"
    query_per_hour: 1000
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`

### Distinguish rate limiting based on key-value pairs in cookies
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
      # Regular expression, matches all strings starting with a, each cookie's value corresponds to 10qds.
      - key: "regexp:^a.*"
        query_per_second: 10
      # Regular expression, matches all strings starting with b, each cookie's value corresponds to 100qd.
      - key: "regexp:^b.*"
        query_per_minute: 100
      # As a fallback, matches all requests, each cookie's value corresponds to 1000qdh.
      - key: "*"
        query_per_hour: 1000
rejected_code: 200
rejected_msg: '{"code":-1,"msg":"Too many requests"}'
redis:
  service_name: redis.static
show_limit_quota_header: true
\`\`\`
`},d=function(){return e},r=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-attributes",text:"Execution Attributes"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"distinguish-rate-limiting-based-on-the-request-parameter-apikey",text:"Distinguish rate limiting based on the request parameter apikey"},{depth:3,slug:"distinguish-rate-limiting-based-on-the-header-x-ca-key",text:"Distinguish rate limiting based on the header x-ca-key"},{depth:3,slug:"distinguish-rate-limiting-based-on-the-client-ip-from-the-request-header-x-forwarded-for",text:"Distinguish rate limiting based on the client IP from the request header x-forwarded-for"},{depth:3,slug:"distinguish-rate-limiting-based-on-consumers",text:"Distinguish rate limiting based on consumers"},{depth:3,slug:"distinguish-rate-limiting-based-on-key-value-pairs-in-cookies",text:"Distinguish rate limiting based on key-value pairs in cookies"}]},s=p((v,h,f)=>{const{layout:g,...n}=t;return n.file=a,n.url=i,c`${y()}${u(e)}`})});export{s as Content,m as __tla,d as compiledContent,s as default,a as file,t as frontmatter,r as getHeadings,l as rawContent,i as url};
