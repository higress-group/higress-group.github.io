import{c as o,__tla as p}from"./astro-component.m4CCZO6J.js";import{r as c,m as u,u as y,__tla as E}from"./constant.ByWDeEHI.js";import{__tla as _}from"./astro/assets-service.BhtN0nM5.js";let s,r,t,a,d,l,n,m=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return _}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">cluster-key-rate-limit</code> plugin implements <strong>cluster-level rate limiting</strong> based on Redis, suitable for scenarios
requiring <strong>globally consistent rate limiting across multiple Higress Gateway instances</strong>.</p>
<p>It supports two rate limiting modes:</p>
<ul>
<li><strong>Rule-Level Global Rate Limiting</strong>: Applies a unified rate limit threshold to custom rule groups based on identical <code dir="auto">rule_name</code> and <code dir="auto">global_threshold</code> configurations.</li>
<li><strong>Key-Level Dynamic Rate Limiting</strong>: Groups and limits requests by dynamic keys extracted from requests, such as URL parameters, request headers, client IPs, consumer names, or cookie fields.</li>
</ul>
<h2 id="operational-attributes">Operational Attributes</h2>
<ul>
<li><strong>Plugin execution phase</strong>: <code dir="auto">Default phase</code></li>
<li><strong>Plugin execution priority</strong>: <code dir="auto">20</code></li>
</ul>
<h2 id="configuration-instructions">Configuration Instructions</h2>





























































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>rule_name</td><td>string</td><td>Yes</td><td>-</td><td>Name of the rate limiting rule. Used to construct the Redis key in the format: <code dir="auto">rule_name:rate_limit_type:key_name:key_value</code>.</td></tr><tr><td>global_threshold</td><td>Object</td><td>No (choose either <code dir="auto">global_threshold</code> or <code dir="auto">rule_items</code>)</td><td>-</td><td>Apply rate limiting to the entire custom rule group.</td></tr><tr><td>rule_items</td><td>array of object</td><td>No (choose either <code dir="auto">global_threshold</code> or <code dir="auto">rule_items</code>)</td><td>-</td><td>The rate limiting rule items array is <strong>matched in order</strong>. When the first qualifying rule item is hit, rate limiting triggers and <strong>subsequent rules are not executed</strong>.</td></tr><tr><td>show_limit_quota_header</td><td>bool</td><td>No</td><td>false</td><td>Whether to display <code dir="auto">X-RateLimit-Limit</code> (total allowed requests) and <code dir="auto">X-RateLimit-Remaining</code> (remaining allowed requests) in the response header.</td></tr><tr><td>rejected_code</td><td>int</td><td>No</td><td>429</td><td>HTTP status code returned when a request is rate-limited.</td></tr><tr><td>rejected_msg</td><td>string</td><td>No</td><td>Too many requests</td><td>Response body returned when a request is rate-limited.</td></tr><tr><td>redis</td><td>object</td><td>Yes</td><td>-</td><td>Configuration for Redis.</td></tr></tbody></table>
<h3 id="configuration-fields-for-global_threshold">Configuration Fields for <code dir="auto">global_threshold</code></h3>








































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>query_per_second</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per second.</td></tr><tr><td>query_per_minute</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per minute.</td></tr><tr><td>query_per_hour</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per hour.</td></tr><tr><td>query_per_day</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per day.</td></tr></tbody></table>
<h3 id="configuration-fields-for-rule_items">Configuration Fields for <code dir="auto">rule_items</code></h3>


















































































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Configures the HTTP request header name to extract the rate limiting key.</td></tr><tr><td>limit_by_param</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Configures the URL parameter name to extract the rate limiting key.</td></tr><tr><td>limit_by_consumer</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Rate limits based on the consumer name (no need to add a specific value).</td></tr><tr><td>limit_by_cookie</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Configures the Cookie key name to extract the rate limiting key.</td></tr><tr><td>limit_by_per_header</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Matches specific HTTP headers by rule and calculates rate limits for each header. Supports regular expressions (starting with <code dir="auto">regexp:</code>) or <code dir="auto">*</code> for the <code dir="auto">limit_keys</code> configuration.</td></tr><tr><td>limit_by_per_param</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Matches specific URL parameters by rule and calculates rate limits for each parameter. Supports regular expressions (starting with <code dir="auto">regexp:</code>) or <code dir="auto">*</code> for the <code dir="auto">limit_keys</code> configuration.</td></tr><tr><td>limit_by_per_consumer</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Matches specific consumers by rule and calculates rate limits for each consumer. Supports regular expressions (starting with <code dir="auto">regexp:</code>) or <code dir="auto">*</code> for the <code dir="auto">limit_keys</code> configuration (no need to add a specific value for the consumer name).</td></tr><tr><td>limit_by_per_cookie</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Matches specific Cookies by rule and calculates rate limits for each Cookie value. Supports regular expressions (starting with <code dir="auto">regexp:</code>) or <code dir="auto">*</code> for the <code dir="auto">limit_keys</code> configuration.</td></tr><tr><td>limit_by_per_ip</td><td>string</td><td>No (choose one of <code dir="auto">limit_by_*</code> fields)</td><td>-</td><td>Matches specific IPs by rule and calculates rate limits for each IP. The IP can be extracted from a request header (formatted as <code dir="auto">from-header-&#x3C;header_name></code>, e.g., <code dir="auto">from-header-x-forwarded-for</code>) or directly from the peer socket IP (configured as <code dir="auto">from-remote-addr</code>).</td></tr><tr><td>limit_keys</td><td>array of object</td><td>Yes</td><td>-</td><td>Configures the rate limits for matched key values.</td></tr></tbody></table>
<h3 id="configuration-fields-for-limit_keys">Configuration Fields for <code dir="auto">limit_keys</code></h3>















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>Yes</td><td>-</td><td>The matched key value. For <code dir="auto">limit_by_per_header</code>, <code dir="auto">limit_by_per_param</code>, <code dir="auto">limit_by_per_consumer</code>, and <code dir="auto">limit_by_per_cookie</code> types, supports regular expressions (prefixed with <code dir="auto">regexp:</code>) or <code dir="auto">*</code> (wildcard for all). Example regular expression: <code dir="auto">regexp:^d.*</code> (matches all strings starting with <code dir="auto">d</code>). For <code dir="auto">limit_by_per_ip</code>, supports IP addresses or CIDR blocks.</td></tr><tr><td>query_per_second</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per second.</td></tr><tr><td>query_per_minute</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per minute.</td></tr><tr><td>query_per_hour</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per hour.</td></tr><tr><td>query_per_day</td><td>int</td><td>No (choose one of <code dir="auto">query_per_second</code>, <code dir="auto">query_per_minute</code>, <code dir="auto">query_per_hour</code>, <code dir="auto">query_per_day</code>)</td><td>-</td><td>Allowed requests per day.</td></tr></tbody></table>
<h3 id="configuration-fields-for-redis">Configuration Fields for <code dir="auto">redis</code></h3>






















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>service_name</td><td>string</td><td>Yes</td><td>-</td><td>The fully qualified domain name (FQDN) of the Redis service, including the service type (e.g., <code dir="auto">my-redis.dns</code>, <code dir="auto">redis.my-ns.svc.cluster.local</code>).</td></tr><tr><td>service_port</td><td>int</td><td>No</td><td>80 (for static services), 6379 for other services</td><td>The port of the Redis service.</td></tr><tr><td>username</td><td>string</td><td>No</td><td>-</td><td>Redis username for authentication.</td></tr><tr><td>password</td><td>string</td><td>No</td><td>-</td><td>Redis password for authentication.</td></tr><tr><td>timeout</td><td>int</td><td>No</td><td>1000 (milliseconds)</td><td>Redis connection timeout in milliseconds.</td></tr><tr><td>database</td><td>int</td><td>No</td><td>0</td><td>The ID of the Redis database to use (e.g., configuring <code dir="auto">1</code> corresponds to <code dir="auto">SELECT 1</code>).</td></tr></tbody></table>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="global-rate-limiting-for-custom-rule-group">Global Rate Limiting for Custom Rule Group</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">routeA-global-limit-rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">global_threshold</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Global limit: 1000 requests/minute for the custom rule group</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: routeA-global-limit-rule\x7Fglobal_threshold:\x7F  query_per_minute: 1000 # Global limit: 1000 requests/minute for the custom rule group\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="rate-limiting-by-request-parameter-apikey">Rate Limiting by Request Parameter <code dir="auto">apikey</code></h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">routeA-request-param-limit-rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fixed value1: 10 requests/minute</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fixed value2: 100 requests/hour</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match a-starting apikey: 10 requests/second per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match b-starting apikey: 100 requests/minute per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fallback rule: all apikeys, 1000 requests/hour per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: routeA-request-param-limit-rule\x7Frule_items:\x7F  - limit_by_param: apikey\x7F    limit_keys:\x7F      - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5 # Fixed value1: 10 requests/minute\x7F        query_per_minute: 10\x7F      - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5 # Fixed value2: 100 requests/hour\x7F        query_per_hour: 100\x7F  - limit_by_per_param: apikey\x7F    limit_keys:\x7F      - key: &#x22;regexp:^a.*&#x22; # Regex match a-starting apikey: 10 requests/second per key\x7F        query_per_second: 10\x7F      - key: &#x22;regexp:^b.*&#x22; # Regex match b-starting apikey: 100 requests/minute per key\x7F        query_per_minute: 100\x7F      - key: &#x22;*&#x22; # Fallback rule: all apikeys, 1000 requests/hour per key\x7F        query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="rate-limiting-by-request-header-x-ca-key">Rate Limiting by Request Header <code dir="auto">x-ca-key</code></h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">routeA-request-header-limit-rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fixed value1: 10 requests/minute</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fixed value2: 10 requests/hour</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match a-starting x-ca-key: 10 requests/second per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match b-starting x-ca-key: 100 requests/minute per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fallback rule: all x-ca-keys, 1000 requests/hour per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: routeA-request-header-limit-rule\x7Frule_items:\x7F  - limit_by_header: x-ca-key\x7F    limit_keys:\x7F      - key: 102234 # Fixed value1: 10 requests/minute\x7F        query_per_minute: 10\x7F      - key: 308239 # Fixed value2: 10 requests/hour\x7F        query_per_hour: 10\x7F  - limit_by_per_header: x-ca-key\x7F    limit_keys:\x7F      - key: &#x22;regexp:^a.*&#x22; # Regex match a-starting x-ca-key: 10 requests/second per key\x7F        query_per_second: 10\x7F      - key: &#x22;regexp:^b.*&#x22; # Regex match b-starting x-ca-key: 100 requests/minute per key\x7F        query_per_minute: 100\x7F      - key: &#x22;*&#x22; # Fallback rule: all x-ca-keys, 1000 requests/hour per key\x7F        query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="rate-limiting-by-client-ip-extracted-from-x-forwarded-for-header">Rate Limiting by Client IP Extracted from <code dir="auto">x-forwarded-for</code> Header</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">routeA-client-ip-limit-rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_ip</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">from-header-x-forwarded-for</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># IP rate limiting via x-forwarded-for header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.1.1.1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Exact IP: 1.1.1.1, 10 requests/day</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">1.1.1.0/24</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># IP range 1.1.1.0/24: 100 requests/day per IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">0.0.0.0/0</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fallback rule: all IPs, 1000 requests/day per IP</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: routeA-client-ip-limit-rule\x7Frule_items:\x7F  - limit_by_per_ip: from-header-x-forwarded-for # IP rate limiting via x-forwarded-for header\x7F    limit_keys:\x7F      - key: 1.1.1.1 # Exact IP: 1.1.1.1, 10 requests/day\x7F        query_per_day: 10\x7F      - key: 1.1.1.0/24 # IP range 1.1.1.0/24: 100 requests/day per IP\x7F        query_per_day: 100\x7F      - key: 0.0.0.0/0 # Fallback rule: all IPs, 1000 requests/day per IP\x7F        query_per_day: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="rate-limiting-by-consumer">Rate Limiting by Consumer</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">routeA-consumer-limit-rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Consumer1: 10 requests/second</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Consumer2: 100 requests/hour</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match a-starting consumer: 10 requests/second per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match b-starting consumer: 100 requests/minute per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fallback rule: all consumers, 1000 requests/hour per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: routeA-consumer-limit-rule\x7Frule_items:\x7F  - limit_by_consumer: &#x27;&#x27;\x7F    limit_keys:\x7F      - key: consumer1 # Consumer1: 10 requests/second\x7F        query_per_second: 10\x7F      - key: consumer2 # Consumer2: 100 requests/hour\x7F        query_per_hour: 100\x7F  - limit_by_per_consumer: &#x27;&#x27;\x7F    limit_keys:\x7F      - key: &#x22;regexp:^a.*&#x22; # Regex match a-starting consumer: 10 requests/second per key\x7F        query_per_second: 10\x7F      - key: &#x22;regexp:^b.*&#x22; # Regex match b-starting consumer: 100 requests/minute per key\x7F        query_per_minute: 100\x7F      - key: &#x22;*&#x22; # Fallback rule: all consumers, 1000 requests/hour per key\x7F        query_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>
<h3 id="rate-limiting-by-cookie-value">Rate Limiting by Cookie Value</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">routeA-cookie-limit-rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Rate limit by Cookie key "key1"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fixed value1: 10 requests/minute</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value2</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fixed value2: 100 requests/hour</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Rate limit by each value of Cookie key "key1"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match a-starting value: 10 requests/second per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Regex match b-starting value: 100 requests/minute per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Fallback rule: all values, 1000 requests/hour per key</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">query_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># HTTP status code for rate-limited requests</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"code":-1,"msg":"Too many requests"}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Response body for rate-limited requests</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">show_limit_quota_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: routeA-cookie-limit-rule\x7Frule_items:\x7F  - limit_by_cookie: key1 # Rate limit by Cookie key &#x22;key1&#x22;\x7F    limit_keys:\x7F      - key: value1 # Fixed value1: 10 requests/minute\x7F        query_per_minute: 10\x7F      - key: value2 # Fixed value2: 100 requests/hour\x7F        query_per_hour: 100\x7F  - limit_by_per_cookie: key1 # Rate limit by each value of Cookie key &#x22;key1&#x22;\x7F    limit_keys:\x7F      - key: &#x22;regexp:^a.*&#x22; # Regex match a-starting value: 10 requests/second per key\x7F        query_per_second: 10\x7F      - key: &#x22;regexp:^b.*&#x22; # Regex match b-starting value: 100 requests/minute per key\x7F        query_per_minute: 100\x7F      - key: &#x22;*&#x22; # Fallback rule: all values, 1000 requests/hour per key\x7F        query_per_hour: 1000\x7Frejected_code: 200 # HTTP status code for rate-limited requests\x7Frejected_msg: &#x27;{&#x22;code&#x22;:-1,&#x22;msg&#x22;:&#x22;Too many requests&#x22;}&#x27; # Response body for rate-limited requests\x7Fredis:\x7F  service_name: redis.static\x7Fshow_limit_quota_header: true"><div></div></button></div></figure></div>`,a={title:"Cluster Rate Limiting Based on Key",keywords:["higress","rate-limit"],description:"Configuration reference for the Key-based cluster rate limiting plugin"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/traffic/cluster-key-rate-limit.md",n=void 0,l=function(){return'\n## Function Description\n\nThe `cluster-key-rate-limit` plugin implements **cluster-level rate limiting** based on Redis, suitable for scenarios\nrequiring **globally consistent rate limiting across multiple Higress Gateway instances**.\n\nIt supports two rate limiting modes:\n\n- **Rule-Level Global Rate Limiting**: Applies a unified rate limit threshold to custom rule groups based on identical `rule_name` and `global_threshold` configurations.\n- **Key-Level Dynamic Rate Limiting**: Groups and limits requests by dynamic keys extracted from requests, such as URL parameters, request headers, client IPs, consumer names, or cookie fields.\n\n## Operational Attributes\n\n- **Plugin execution phase**: `Default phase`\n- **Plugin execution priority**: `20`\n\n## Configuration Instructions\n\n| Configuration Item       | Type          | Required                                  | Default Value       | Description                                                                |\n|--------------------------|---------------|-------------------------------------------|---------------------|----------------------------------------------------------------------------|\n| rule_name                | string        | Yes                                       | -                   | Name of the rate limiting rule. Used to construct the Redis key in the format: `rule_name:rate_limit_type:key_name:key_value`. |\n| global_threshold         | Object        | No (choose either `global_threshold` or `rule_items`) | -                 | Apply rate limiting to the entire custom rule group.|\n| rule_items               | array of object | No (choose either `global_threshold` or `rule_items`) | -               | The rate limiting rule items array is **matched in order**. When the first qualifying rule item is hit, rate limiting triggers and **subsequent rules are not executed**. |\n| show_limit_quota_header  | bool          | No                                        | false             | Whether to display `X-RateLimit-Limit` (total allowed requests) and `X-RateLimit-Remaining` (remaining allowed requests) in the response header. |\n| rejected_code            | int           | No                                        | 429               | HTTP status code returned when a request is rate-limited.                  |\n| rejected_msg             | string        | No                                        | Too many requests | Response body returned when a request is rate-limited.                      |\n| redis                    | object        | Yes                                       | -                   | Configuration for Redis.                                                   |\n\n### Configuration Fields for `global_threshold`\n\n| Configuration Item       | Type | Required                                 | Default Value | Description                          |  \n|--------------------------|------|------------------------------------------|---------------|--------------------------------------|  \n| query_per_second         | int  | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per second.         |  \n| query_per_minute         | int  | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per minute.         |  \n| query_per_hour           | int  | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per hour.           |  \n| query_per_day            | int  | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per day.            |  \n\n### Configuration Fields for `rule_items`\n\n| Configuration Item            | Type          | Required                          | Default Value | Description                                                                 |  \n|-------------------------------|---------------|-----------------------------------|---------------|-----------------------------------------------------------------------------|  \n| limit_by_header               | string        | No (choose one of `limit_by_*` fields) | -           | Configures the HTTP request header name to extract the rate limiting key.   |  \n| limit_by_param                | string        | No (choose one of `limit_by_*` fields) | -           | Configures the URL parameter name to extract the rate limiting key.        |  \n| limit_by_consumer             | string        | No (choose one of `limit_by_*` fields) | -           | Rate limits based on the consumer name (no need to add a specific value).   |  \n| limit_by_cookie               | string        | No (choose one of `limit_by_*` fields) | -           | Configures the Cookie key name to extract the rate limiting key.           |  \n| limit_by_per_header           | string        | No (choose one of `limit_by_*` fields) | -           | Matches specific HTTP headers by rule and calculates rate limits for each header. Supports regular expressions (starting with `regexp:`) or `*` for the `limit_keys` configuration. |  \n| limit_by_per_param            | string        | No (choose one of `limit_by_*` fields) | -           | Matches specific URL parameters by rule and calculates rate limits for each parameter. Supports regular expressions (starting with `regexp:`) or `*` for the `limit_keys` configuration. |  \n| limit_by_per_consumer         | string        | No (choose one of `limit_by_*` fields) | -           | Matches specific consumers by rule and calculates rate limits for each consumer. Supports regular expressions (starting with `regexp:`) or `*` for the `limit_keys` configuration (no need to add a specific value for the consumer name). |  \n| limit_by_per_cookie           | string        | No (choose one of `limit_by_*` fields) | -           | Matches specific Cookies by rule and calculates rate limits for each Cookie value. Supports regular expressions (starting with `regexp:`) or `*` for the `limit_keys` configuration. |  \n| limit_by_per_ip               | string        | No (choose one of `limit_by_*` fields) | -           | Matches specific IPs by rule and calculates rate limits for each IP. The IP can be extracted from a request header (formatted as `from-header-<header_name>`, e.g., `from-header-x-forwarded-for`) or directly from the peer socket IP (configured as `from-remote-addr`). |  \n| limit_keys                    | array of object | Yes                               | -           | Configures the rate limits for matched key values.                          |  \n\n### Configuration Fields for `limit_keys`\n\n| Configuration Item       | Type   | Required                                 | Default Value | Description                                                                 |  \n|--------------------------|--------|------------------------------------------|---------------|-----------------------------------------------------------------------------|  \n| key                      | string | Yes                                      | -             | The matched key value. For `limit_by_per_header`, `limit_by_per_param`, `limit_by_per_consumer`, and `limit_by_per_cookie` types, supports regular expressions (prefixed with `regexp:`) or `*` (wildcard for all). Example regular expression: `regexp:^d.*` (matches all strings starting with `d`). For `limit_by_per_ip`, supports IP addresses or CIDR blocks. |  \n| query_per_second         | int    | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per second.                                                |  \n| query_per_minute         | int    | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per minute.                                                |  \n| query_per_hour           | int    | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per hour.                                                  |  \n| query_per_day            | int    | No (choose one of `query_per_second`, `query_per_minute`, `query_per_hour`, `query_per_day`) | -           | Allowed requests per day.                                                   |  \n\n### Configuration Fields for `redis`\n\n| Configuration Item   | Type   | Required | Default Value                                                     | Description                                                                 |  \n|----------------------|--------|----------|-------------------------------------------------------------------|-----------------------------------------------------------------------------|  \n| service_name         | string | Yes      | -                                                                 | The fully qualified domain name (FQDN) of the Redis service, including the service type (e.g., `my-redis.dns`, `redis.my-ns.svc.cluster.local`). |  \n| service_port         | int    | No       | 80 (for static services), 6379 for other services                  | The port of the Redis service.                                              |  \n| username             | string | No       | -                                                                 | Redis username for authentication.                                          |  \n| password             | string | No       | -                                                                 | Redis password for authentication.                                          |  \n| timeout              | int    | No       | 1000 (milliseconds)                                               | Redis connection timeout in milliseconds.                                  |  \n| database             | int    | No       | 0                                                                 | The ID of the Redis database to use (e.g., configuring `1` corresponds to `SELECT 1`). |  \n\n## Configuration Examples\n\n### Global Rate Limiting for Custom Rule Group\n\n```yaml  \nrule_name: routeA-global-limit-rule\nglobal_threshold:\n  query_per_minute: 1000 # Global limit: 1000 requests/minute for the custom rule group\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n```\n\n### Rate Limiting by Request Parameter `apikey`\n\n```yaml  \nrule_name: routeA-request-param-limit-rule\nrule_items:\n  - limit_by_param: apikey\n    limit_keys:\n      - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5 # Fixed value1: 10 requests/minute\n        query_per_minute: 10\n      - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5 # Fixed value2: 100 requests/hour\n        query_per_hour: 100\n  - limit_by_per_param: apikey\n    limit_keys:\n      - key: "regexp:^a.*" # Regex match a-starting apikey: 10 requests/second per key\n        query_per_second: 10\n      - key: "regexp:^b.*" # Regex match b-starting apikey: 100 requests/minute per key\n        query_per_minute: 100\n      - key: "*" # Fallback rule: all apikeys, 1000 requests/hour per key\n        query_per_hour: 1000\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n```\n\n### Rate Limiting by Request Header `x-ca-key`\n\n```yaml  \nrule_name: routeA-request-header-limit-rule\nrule_items:\n  - limit_by_header: x-ca-key\n    limit_keys:\n      - key: 102234 # Fixed value1: 10 requests/minute\n        query_per_minute: 10\n      - key: 308239 # Fixed value2: 10 requests/hour\n        query_per_hour: 10\n  - limit_by_per_header: x-ca-key\n    limit_keys:\n      - key: "regexp:^a.*" # Regex match a-starting x-ca-key: 10 requests/second per key\n        query_per_second: 10\n      - key: "regexp:^b.*" # Regex match b-starting x-ca-key: 100 requests/minute per key\n        query_per_minute: 100\n      - key: "*" # Fallback rule: all x-ca-keys, 1000 requests/hour per key\n        query_per_hour: 1000\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n```\n\n### Rate Limiting by Client IP Extracted from `x-forwarded-for` Header\n\n```yaml  \nrule_name: routeA-client-ip-limit-rule\nrule_items:\n  - limit_by_per_ip: from-header-x-forwarded-for # IP rate limiting via x-forwarded-for header\n    limit_keys:\n      - key: 1.1.1.1 # Exact IP: 1.1.1.1, 10 requests/day\n        query_per_day: 10\n      - key: 1.1.1.0/24 # IP range 1.1.1.0/24: 100 requests/day per IP\n        query_per_day: 100\n      - key: 0.0.0.0/0 # Fallback rule: all IPs, 1000 requests/day per IP\n        query_per_day: 1000\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n```\n\n### Rate Limiting by Consumer\n\n```yaml  \nrule_name: routeA-consumer-limit-rule\nrule_items:\n  - limit_by_consumer: \'\'\n    limit_keys:\n      - key: consumer1 # Consumer1: 10 requests/second\n        query_per_second: 10\n      - key: consumer2 # Consumer2: 100 requests/hour\n        query_per_hour: 100\n  - limit_by_per_consumer: \'\'\n    limit_keys:\n      - key: "regexp:^a.*" # Regex match a-starting consumer: 10 requests/second per key\n        query_per_second: 10\n      - key: "regexp:^b.*" # Regex match b-starting consumer: 100 requests/minute per key\n        query_per_minute: 100\n      - key: "*" # Fallback rule: all consumers, 1000 requests/hour per key\n        query_per_hour: 1000\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n```\n\n### Rate Limiting by Cookie Value\n\n```yaml  \nrule_name: routeA-cookie-limit-rule\nrule_items:\n  - limit_by_cookie: key1 # Rate limit by Cookie key "key1"\n    limit_keys:\n      - key: value1 # Fixed value1: 10 requests/minute\n        query_per_minute: 10\n      - key: value2 # Fixed value2: 100 requests/hour\n        query_per_hour: 100\n  - limit_by_per_cookie: key1 # Rate limit by each value of Cookie key "key1"\n    limit_keys:\n      - key: "regexp:^a.*" # Regex match a-starting value: 10 requests/second per key\n        query_per_second: 10\n      - key: "regexp:^b.*" # Regex match b-starting value: 100 requests/minute per key\n        query_per_minute: 100\n      - key: "*" # Fallback rule: all values, 1000 requests/hour per key\n        query_per_hour: 1000\nrejected_code: 200 # HTTP status code for rate-limited requests\nrejected_msg: \'{"code":-1,"msg":"Too many requests"}\' # Response body for rate-limited requests\nredis:\n  service_name: redis.static\nshow_limit_quota_header: true\n```'},r=function(){return e},d=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"operational-attributes",text:"Operational Attributes"},{depth:2,slug:"configuration-instructions",text:"Configuration Instructions"},{depth:3,slug:"configuration-fields-for-global_threshold",text:"Configuration Fields for global_threshold"},{depth:3,slug:"configuration-fields-for-rule_items",text:"Configuration Fields for rule_items"},{depth:3,slug:"configuration-fields-for-limit_keys",text:"Configuration Fields for limit_keys"},{depth:3,slug:"configuration-fields-for-redis",text:"Configuration Fields for redis"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"global-rate-limiting-for-custom-rule-group",text:"Global Rate Limiting for Custom Rule Group"},{depth:3,slug:"rate-limiting-by-request-parameter-apikey",text:"Rate Limiting by Request Parameter apikey"},{depth:3,slug:"rate-limiting-by-request-header-x-ca-key",text:"Rate Limiting by Request Header x-ca-key"},{depth:3,slug:"rate-limiting-by-client-ip-extracted-from-x-forwarded-for-header",text:"Rate Limiting by Client IP Extracted from x-forwarded-for Header"},{depth:3,slug:"rate-limiting-by-consumer",text:"Rate Limiting by Consumer"},{depth:3,slug:"rate-limiting-by-cookie-value",text:"Rate Limiting by Cookie Value"}]},s=o((v,h,f)=>{const{layout:g,...i}=a;return i.file=t,i.url=n,c`${u()}${y(e)}`})});export{s as Content,m as __tla,r as compiledContent,s as default,t as file,a as frontmatter,d as getHeadings,l as rawContent,n as url};
