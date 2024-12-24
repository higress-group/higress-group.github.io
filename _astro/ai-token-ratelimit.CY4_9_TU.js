import{c as p,__tla as o}from"./astro-component.DtWAgCJT.js";import{r as c,m as y,u,__tla as E}from"./constant.CCwSAQMs.js";import{__tla as m}from"./astro/assets-service.BMxLt3pn.js";let s,d,t,a,l,r,n,_=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">ai-token-ratelimit</code> plugin implements token rate limiting based on specific key values. The key values can come from URL parameters, HTTP request headers, client IP addresses, consumer names, or key names in cookies.</p>
<p><strong>Notice</strong></p>
<p>For this plugin to function, the <a href="../../api-o11y/ai-statistics/" referrerpolicy="unsafe-url">AI Observability Plugin</a> must also be enabled to achieve token count statistics.</p>
<h2 id="runtime-attributes">Runtime Attributes</h2>
<p>Plugin execution phase: <code dir="auto">default phase</code><br>
Plugin execution priority: <code dir="auto">600</code></p>
<h2 id="configuration-description">Configuration Description</h2>















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>rule_name</td><td>string</td><td>Yes</td><td>-</td><td>Name of the rate limiting rule, used to assemble the redis key based on the rule name + rate limiting type + rate limiting key name + actual value corresponding to the rate limiting key</td></tr><tr><td>rule_items</td><td>array of object</td><td>Yes</td><td>-</td><td>Rate limiting rule items. After matching the first rule_item, subsequent rules will be ignored based on the order in <code dir="auto">rule_items</code></td></tr><tr><td>rejected_code</td><td>int</td><td>No</td><td>429</td><td>The HTTP status code returned when the request is rate limited</td></tr><tr><td>rejected_msg</td><td>string</td><td>No</td><td>Too many requests</td><td>The response body returned when the request is rate limited</td></tr><tr><td>redis</td><td>object</td><td>Yes</td><td>-</td><td>Redis related configuration</td></tr></tbody></table>
<p>Field descriptions for each item in <code dir="auto">rule_items</code></p>


















































































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>limit_by_header</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Configure the source HTTP header name for obtaining the rate limiting key value</td></tr><tr><td>limit_by_param</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Configure the source URL parameter name for obtaining the rate limiting key value</td></tr><tr><td>limit_by_consumer</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Rate limit by consumer name, no actual value needs to be added</td></tr><tr><td>limit_by_cookie</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Configure the source key name in cookies for obtaining the rate limiting key value</td></tr><tr><td>limit_by_per_header</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Match specific HTTP request headers according to rules and calculate rate limiting separately for each header. Configure the source HTTP header name for obtaining the rate limiting key value. Supports regular expressions or <code dir="auto">*</code> when configuring <code dir="auto">limit_keys</code></td></tr><tr><td>limit_by_per_param</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Match specific URL parameters according to rules and calculate rate limiting separately for each parameter. Configure the source URL parameter name for obtaining the rate limiting key value. Supports regular expressions or <code dir="auto">*</code> when configuring <code dir="auto">limit_keys</code></td></tr><tr><td>limit_by_per_consumer</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Match specific consumers according to rules and calculate rate limiting separately for each consumer. Rate limit by consumer name, no actual value needs to be added. Supports regular expressions or <code dir="auto">*</code> when configuring <code dir="auto">limit_keys</code></td></tr><tr><td>limit_by_per_cookie</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Match specific cookies according to rules and calculate rate limiting separately for each cookie. Configure the source key name in cookies for obtaining the rate limiting key value. Supports regular expressions or <code dir="auto">*</code> when configuring <code dir="auto">limit_keys</code></td></tr><tr><td>limit_by_per_ip</td><td>string</td><td>No, optionally select one in <code dir="auto">limit_by_*</code></td><td>-</td><td>Match specific IPs according to rules and calculate rate limiting separately for each IP. Configure the source IP parameter name for obtaining the rate limiting key value from request headers, <code dir="auto">from-header-&#x3C;header name></code>, such as <code dir="auto">from-header-x-forwarded-for</code>. Directly get the remote socket IP by configuring <code dir="auto">from-remote-addr</code></td></tr><tr><td>limit_keys</td><td>array of object</td><td>Yes</td><td>-</td><td>Configure the number of rate limit requests after matching keys</td></tr></tbody></table>
<p>Field descriptions for each item in <code dir="auto">limit_keys</code></p>















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>key</td><td>string</td><td>Yes</td><td>-</td><td>Matched key value. Types <code dir="auto">limit_by_per_header</code>, <code dir="auto">limit_by_per_param</code>, <code dir="auto">limit_by_per_consumer</code>, <code dir="auto">limit_by_per_cookie</code> support configuring regular expressions (beginning with regexp: followed by the regex) or <code dir="auto">*</code> (representing all). Example regex: <code dir="auto">regexp:^d.*</code> (all strings starting with d); <code dir="auto">limit_by_per_ip</code> supports configuring IP addresses or IP segments</td></tr><tr><td>token_per_second</td><td>int</td><td>No, optionally select one in <code dir="auto">token_per_second</code>, <code dir="auto">token_per_minute</code>, <code dir="auto">token_per_hour</code>, <code dir="auto">token_per_day</code></td><td>-</td><td>Allowed number of token requests per second</td></tr><tr><td>token_per_minute</td><td>int</td><td>No, optionally select one in <code dir="auto">token_per_second</code>, <code dir="auto">token_per_minute</code>, <code dir="auto">token_per_hour</code>, <code dir="auto">token_per_day</code></td><td>-</td><td>Allowed number of token requests per minute</td></tr><tr><td>token_per_hour</td><td>int</td><td>No, optionally select one in <code dir="auto">token_per_second</code>, <code dir="auto">token_per_minute</code>, <code dir="auto">token_per_hour</code>, <code dir="auto">token_per_day</code></td><td>-</td><td>Allowed number of token requests per hour</td></tr><tr><td>token_per_day</td><td>int</td><td>No, optionally select one in <code dir="auto">token_per_second</code>, <code dir="auto">token_per_minute</code>, <code dir="auto">token_per_hour</code>, <code dir="auto">token_per_day</code></td><td>-</td><td>Allowed number of token requests per day</td></tr></tbody></table>
<p>Field descriptions for each item in <code dir="auto">redis</code></p>















































<table><thead><tr><th>Configuration Item</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>service_name</td><td>string</td><td>Required</td><td>-</td><td>Full FQDN name of the redis service, including service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local</td></tr><tr><td>service_port</td><td>int</td><td>No</td><td>Default value for static addresses (static service) is 80; otherwise, it is 6379</td><td>Input the service port of the redis service</td></tr><tr><td>username</td><td>string</td><td>No</td><td>-</td><td>Redis username</td></tr><tr><td>password</td><td>string</td><td>No</td><td>-</td><td>Redis password</td></tr><tr><td>timeout</td><td>int</td><td>No</td><td>1000</td><td>Redis connection timeout in milliseconds</td></tr></tbody></table>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="identify-request-parameter-apikey-for-differentiated-rate-limiting">Identify request parameter apikey for differentiated rate limiting</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">9a342114-ba8a-11ec-b1bf-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">a6a6d7f2-ba8a-11ec-bec2-00163e1250b5</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each apikey corresponds to 10 qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each apikey corresponds to 100 qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Fallback, matches all requests, each apikey corresponds to 1000 qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_param: apikey\x7F    limit_keys:\x7F      - key: 9a342114-ba8a-11ec-b1bf-00163e1250b5\x7F        token_per_minute: 10\x7F      - key: a6a6d7f2-ba8a-11ec-bec2-00163e1250b5\x7F        token_per_hour: 100\x7F  - limit_by_per_param: apikey\x7F    limit_keys:\x7F      # Regular expression, matches all strings starting with a, each apikey corresponds to 10 qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # Regular expression, matches all strings starting with b, each apikey corresponds to 100 qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # Fallback, matches all requests, each apikey corresponds to 1000 qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="identify-request-header-x-ca-key-for-differentiated-rate-limiting">Identify request header x-ca-key for differentiated rate limiting</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">102234</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">308239</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_header</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-ca-key</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each apikey corresponds to 10 qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each apikey corresponds to 100 qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Fallback, matches all requests, each apikey corresponds to 1000 qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_header: x-ca-key\x7F    limit_keys:\x7F      - key: 102234\x7F        token_per_minute: 10\x7F      - key: 308239\x7F        token_per_hour: 10\x7F  - limit_by_per_header: x-ca-key\x7F    limit_keys:\x7F      # Regular expression, matches all strings starting with a, each apikey corresponds to 10 qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # Regular expression, matches all strings starting with b, each apikey corresponds to 100 qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # Fallback, matches all requests, each apikey corresponds to 1000 qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="get-the-peer-ip-using-the-request-header-x-forwarded-for-for-differentiated-rate-limiting">Get the peer IP using the request header x-forwarded-for for differentiated rate limiting</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_ip</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">from-header-x-forwarded-for</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Exact IP</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1.1.1.1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># IP segment, matching IPs in this segment, each IP 100 qpd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">1.1.1.0/24</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Fallback, i.e., default each IP 1000 qpd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">0.0.0.0/0</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_day</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_per_ip: from-header-x-forwarded-for\x7F    limit_keys:\x7F      # Exact IP\x7F      - key: 1.1.1.1\x7F        token_per_day: 10\x7F      # IP segment, matching IPs in this segment, each IP 100 qpd\x7F      - key: 1.1.1.0/24\x7F        token_per_day: 100\x7F      # Fallback, i.e., default each IP 1000 qpd\x7F      - key: 0.0.0.0/0\x7F        token_per_day: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="identify-consumer-for-differentiated-rate-limiting">Identify consumer for differentiated rate limiting</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_consumer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">''</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each consumer corresponds to 10 qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each consumer corresponds to 100 qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Fallback, matches all requests, each consumer corresponds to 1000 qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_consumer: &#x27;&#x27;\x7F    limit_keys:\x7F      - key: consumer1\x7F        token_per_second: 10\x7F      - key: consumer2\x7F        token_per_hour: 100\x7F  - limit_by_per_consumer: &#x27;&#x27;\x7F    limit_keys:\x7F      # Regular expression, matches all strings starting with a, each consumer corresponds to 10 qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # Regular expression, matches all strings starting with b, each consumer corresponds to 100 qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # Fallback, matches all requests, each consumer corresponds to 1000 qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h3 id="identify-key-value-pairs-in-cookies-for-differentiated-rate-limiting">Identify key-value pairs in cookies for differentiated rate limiting</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each value in cookie corresponds to 10 qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each value in cookie corresponds to 100 qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Fallback, matches all requests, each value in cookie corresponds to 1000 qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"code":-1,"msg":"Too many requests"}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_cookie: key1\x7F    limit_keys:\x7F      - key: value1\x7F        token_per_minute: 10\x7F      - key: value2\x7F        token_per_hour: 100\x7F  - limit_by_per_cookie: key1\x7F    limit_keys:\x7F      # Regular expression, matches all strings starting with a, each value in cookie corresponds to 10 qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # Regular expression, matches all strings starting with b, each value in cookie corresponds to 100 qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # Fallback, matches all requests, each value in cookie corresponds to 1000 qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Frejected_code: 200\x7Frejected_msg: &#x27;{&#x22;code&#x22;:-1,&#x22;msg&#x22;:&#x22;Too many requests&#x22;}&#x27;\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>`,a={title:"AI Token Rate Limiting",keywords:["AI Gateway","AI Token Rate Limiting"],description:"AI Token Rate Limiting Plugin Configuration Reference"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-consumer/ai-token-ratelimit.md",n=void 0,r=function(){return`## Function Description
The \`ai-token-ratelimit\` plugin implements token rate limiting based on specific key values. The key values can come from URL parameters, HTTP request headers, client IP addresses, consumer names, or key names in cookies.

**Notice**

For this plugin to function, the [AI Observability Plugin](../api-o11y/ai-statistics.md) must also be enabled to achieve token count statistics.

## Runtime Attributes
Plugin execution phase: \`default phase\`  
Plugin execution priority: \`600\`

## Configuration Description
| Configuration Item      | Type              | Required | Default Value | Description                                                                   |
| ----------------------- | ----------------- | -------- | ------------- | ----------------------------------------------------------------------------- |
| rule_name               | string            | Yes      | -             | Name of the rate limiting rule, used to assemble the redis key based on the rule name + rate limiting type + rate limiting key name + actual value corresponding to the rate limiting key |
| rule_items              | array of object   | Yes      | -             | Rate limiting rule items. After matching the first rule_item, subsequent rules will be ignored based on the order in \`rule_items\` |
| rejected_code           | int               | No       | 429           | The HTTP status code returned when the request is rate limited               |
| rejected_msg            | string            | No       | Too many requests | The response body returned when the request is rate limited                 |
| redis                   | object            | Yes      | -             | Redis related configuration                                                   |

Field descriptions for each item in \`rule_items\`
| Configuration Item       | Type              | Required                    | Default Value | Description                                                    |
| ------------------------ | ----------------- | --------------------------- | ------------- | ------------------------------------------------------------ |
| limit_by_header          | string            | No, optionally select one in \`limit_by_*\` | -             | Configure the source HTTP header name for obtaining the rate limiting key value |
| limit_by_param           | string            | No, optionally select one in \`limit_by_*\` | -             | Configure the source URL parameter name for obtaining the rate limiting key value |
| limit_by_consumer        | string            | No, optionally select one in \`limit_by_*\` | -             | Rate limit by consumer name, no actual value needs to be added |
| limit_by_cookie          | string            | No, optionally select one in \`limit_by_*\` | -             | Configure the source key name in cookies for obtaining the rate limiting key value |
| limit_by_per_header      | string            | No, optionally select one in \`limit_by_*\` | -             | Match specific HTTP request headers according to rules and calculate rate limiting separately for each header. Configure the source HTTP header name for obtaining the rate limiting key value. Supports regular expressions or \`*\` when configuring \`limit_keys\` |
| limit_by_per_param       | string            | No, optionally select one in \`limit_by_*\` | -             | Match specific URL parameters according to rules and calculate rate limiting separately for each parameter. Configure the source URL parameter name for obtaining the rate limiting key value. Supports regular expressions or \`*\` when configuring \`limit_keys\` |
| limit_by_per_consumer    | string            | No, optionally select one in \`limit_by_*\` | -             | Match specific consumers according to rules and calculate rate limiting separately for each consumer. Rate limit by consumer name, no actual value needs to be added. Supports regular expressions or \`*\` when configuring \`limit_keys\` |
| limit_by_per_cookie      | string            | No, optionally select one in \`limit_by_*\` | -             | Match specific cookies according to rules and calculate rate limiting separately for each cookie. Configure the source key name in cookies for obtaining the rate limiting key value. Supports regular expressions or \`*\` when configuring \`limit_keys\` |
| limit_by_per_ip          | string            | No, optionally select one in \`limit_by_*\` | -             | Match specific IPs according to rules and calculate rate limiting separately for each IP. Configure the source IP parameter name for obtaining the rate limiting key value from request headers, \`from-header-<header name>\`, such as \`from-header-x-forwarded-for\`. Directly get the remote socket IP by configuring \`from-remote-addr\` |
| limit_keys               | array of object    | Yes                         | -             | Configure the number of rate limit requests after matching keys                                   |

Field descriptions for each item in \`limit_keys\`
| Configuration Item      | Type              | Required                                    | Default Value | Description                                     |
| ----------------------- | ----------------- | ------------------------------------------- | ------------- | ----------------------------------------------- |
| key                     | string            | Yes                                         | -             | Matched key value. Types \`limit_by_per_header\`, \`limit_by_per_param\`, \`limit_by_per_consumer\`, \`limit_by_per_cookie\` support configuring regular expressions (beginning with regexp: followed by the regex) or \`*\` (representing all). Example regex: \`regexp:^d.*\` (all strings starting with d); \`limit_by_per_ip\` supports configuring IP addresses or IP segments |
| token_per_second        | int               | No, optionally select one in \`token_per_second\`, \`token_per_minute\`, \`token_per_hour\`, \`token_per_day\` | -             | Allowed number of token requests per second     |
| token_per_minute       | int               | No, optionally select one in \`token_per_second\`, \`token_per_minute\`, \`token_per_hour\`, \`token_per_day\` | -             | Allowed number of token requests per minute     |
| token_per_hour         | int               | No, optionally select one in \`token_per_second\`, \`token_per_minute\`, \`token_per_hour\`, \`token_per_day\` | -             | Allowed number of token requests per hour       |
| token_per_day          | int               | No, optionally select one in \`token_per_second\`, \`token_per_minute\`, \`token_per_hour\`, \`token_per_day\` | -             | Allowed number of token requests per day        |

Field descriptions for each item in \`redis\`
| Configuration Item      | Type              | Required | Default Value                                                     | Description                                     |
| ----------------------- | ----------------- | -------- | --------------------------------------------------------------- | ----------------------------------------------- |
| service_name            | string            | Required | -                                                               | Full FQDN name of the redis service, including service type, e.g., my-redis.dns, redis.my-ns.svc.cluster.local |
| service_port            | int               | No       | Default value for static addresses (static service) is 80; otherwise, it is 6379 | Input the service port of the redis service     |
| username                | string            | No       | -                                                               | Redis username                                  |
| password                | string            | No       | -                                                               | Redis password                                  |
| timeout                 | int               | No       | 1000                                                            | Redis connection timeout in milliseconds       |

## Configuration Examples
### Identify request parameter apikey for differentiated rate limiting
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
      # Regular expression, matches all strings starting with a, each apikey corresponds to 10 qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # Regular expression, matches all strings starting with b, each apikey corresponds to 100 qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # Fallback, matches all requests, each apikey corresponds to 1000 qdh
      - key: "*"
        token_per_hour: 1000
redis:
  service_name: redis.static
\`\`\`
### Identify request header x-ca-key for differentiated rate limiting
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
      # Regular expression, matches all strings starting with a, each apikey corresponds to 10 qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # Regular expression, matches all strings starting with b, each apikey corresponds to 100 qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # Fallback, matches all requests, each apikey corresponds to 1000 qdh
      - key: "*"
        token_per_hour: 1000
redis:
  service_name: redis.static
\`\`\`
### Get the peer IP using the request header x-forwarded-for for differentiated rate limiting
\`\`\`yaml
rule_name: default_rule
rule_items:
  - limit_by_per_ip: from-header-x-forwarded-for
    limit_keys:
      # Exact IP
      - key: 1.1.1.1
        token_per_day: 10
      # IP segment, matching IPs in this segment, each IP 100 qpd
      - key: 1.1.1.0/24
        token_per_day: 100
      # Fallback, i.e., default each IP 1000 qpd
      - key: 0.0.0.0/0
        token_per_day: 1000
redis:
  service_name: redis.static
\`\`\`
### Identify consumer for differentiated rate limiting
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
      # Regular expression, matches all strings starting with a, each consumer corresponds to 10 qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # Regular expression, matches all strings starting with b, each consumer corresponds to 100 qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # Fallback, matches all requests, each consumer corresponds to 1000 qdh
      - key: "*"
        token_per_hour: 1000
redis:
  service_name: redis.static
\`\`\`
### Identify key-value pairs in cookies for differentiated rate limiting
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
      # Regular expression, matches all strings starting with a, each value in cookie corresponds to 10 qds
      - key: "regexp:^a.*"
        token_per_second: 10
      # Regular expression, matches all strings starting with b, each value in cookie corresponds to 100 qd
      - key: "regexp:^b.*"
        token_per_minute: 100
      # Fallback, matches all requests, each value in cookie corresponds to 1000 qdh
      - key: "*"
        token_per_hour: 1000
rejected_code: 200
rejected_msg: '{"code":-1,"msg":"Too many requests"}'
redis:
  service_name: redis.static
\`\`\`
`},d=function(){return e},l=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-attributes",text:"Runtime Attributes"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"identify-request-parameter-apikey-for-differentiated-rate-limiting",text:"Identify request parameter apikey for differentiated rate limiting"},{depth:3,slug:"identify-request-header-x-ca-key-for-differentiated-rate-limiting",text:"Identify request header x-ca-key for differentiated rate limiting"},{depth:3,slug:"get-the-peer-ip-using-the-request-header-x-forwarded-for-for-differentiated-rate-limiting",text:"Get the peer IP using the request header x-forwarded-for for differentiated rate limiting"},{depth:3,slug:"identify-consumer-for-differentiated-rate-limiting",text:"Identify consumer for differentiated rate limiting"},{depth:3,slug:"identify-key-value-pairs-in-cookies-for-differentiated-rate-limiting",text:"Identify key-value pairs in cookies for differentiated rate limiting"}]},s=p((v,h,f)=>{const{layout:g,...i}=a;return i.file=t,i.url=n,c`${y()}${u(e)}`})});export{s as Content,_ as __tla,d as compiledContent,s as default,t as file,a as frontmatter,l as getHeadings,r as rawContent,n as url};
