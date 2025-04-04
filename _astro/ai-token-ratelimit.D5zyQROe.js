import{c,__tla as o}from"./astro-component.m4CCZO6J.js";import{r,m as E,u as y,__tla as v}from"./constant.T4nJFeRa.js";import{__tla as u}from"./astro/assets-service.BhtN0nM5.js";let e,p,a,n,l,d,i,m=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">ai-token-ratelimit</code> plugin implements token rate limiting based on specific key values. The key values can come from URL parameters, HTTP request headers, client IP addresses, consumer names, or key names in cookies.</p>
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
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_rule</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value1</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">value2</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_per_cookie</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">key1</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with a, each value in cookie corresponds to 10 qds</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^a.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_second</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">10</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Regular expression, matches all strings starting with b, each value in cookie corresponds to 100 qd</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"regexp:^b.*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># Fallback, matches all requests, each value in cookie corresponds to 1000 qdh</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"*"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_hour</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_code</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rejected_msg</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'{"code":-1,"msg":"Too many requests"}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.static</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="rule_name: default_rule\x7Frule_items:\x7F  - limit_by_cookie: key1\x7F    limit_keys:\x7F      - key: value1\x7F        token_per_minute: 10\x7F      - key: value2\x7F        token_per_hour: 100\x7F  - limit_by_per_cookie: key1\x7F    limit_keys:\x7F      # Regular expression, matches all strings starting with a, each value in cookie corresponds to 10 qds\x7F      - key: &#x22;regexp:^a.*&#x22;\x7F        token_per_second: 10\x7F      # Regular expression, matches all strings starting with b, each value in cookie corresponds to 100 qd\x7F      - key: &#x22;regexp:^b.*&#x22;\x7F        token_per_minute: 100\x7F      # Fallback, matches all requests, each value in cookie corresponds to 1000 qdh\x7F      - key: &#x22;*&#x22;\x7F        token_per_hour: 1000\x7Frejected_code: 200\x7Frejected_msg: &#x27;{&#x22;code&#x22;:-1,&#x22;msg&#x22;:&#x22;Too many requests&#x22;}&#x27;\x7Fredis:\x7F  service_name: redis.static"><div></div></button></div></figure></div>
<h2 id="example">Example</h2>
<p>The AI Token Rate Limiting Plugin relies on Redis to track the remaining available tokens, so the Redis service must be deployed first.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">containerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: redis\x7F  labels:\x7F    app: redis\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: redis\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: redis\x7F    spec:\x7F      containers:\x7F      - name: redis\x7F        image: redis\x7F        ports:\x7F        - containerPort: 6379\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: redis\x7F  labels:\x7F    app: redis\x7Fspec:\x7F  ports:\x7F  - port: 6379\x7F    targetPort: 6379\x7F  selector:\x7F    app: redis\x7F---"><div></div></button></div></figure></div>
<p>In this example, qwen is used as the AI service provider. Additionally, the AI Statistics Plugin must be configured, as the AI Token Rate Limiting Plugin depends on it to calculate the number of tokens consumed per request. The following configuration limits the total number of input and output tokens to 200 per minute.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai-proxy</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apiTokens</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">"&#x3C;YOUR_API_TOKEN>"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">modelMapping</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'gpt-3'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'gpt-35-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-plus"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'gpt-4-turbo'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-max"</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#9ECBFF">'*'</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"qwen-turbo"</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ai-token-ratelimit</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultConfig</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rule_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default_limit_by_param_apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">rule_items</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">limit_by_param</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apikey</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">limit_keys</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">123456</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">token_per_minute</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">redis</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># By default, to reduce data plane pressure, the \`global.onlyPushRouteCluster\` parameter in Higress is set to true, meaning that Kubernetes Services are not automatically discovered.</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># If you need to use Kubernetes Service for service discovery, set \`global.onlyPushRouteCluster\` to false,</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># allowing you to directly set \`service_name\` to the Kubernetes Service without needing to create an McpBridge and an Ingress route for Redis.</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#99A0A6"># service_name: redis.default.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">service_name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">service_port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-ratelimit:1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">600</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: ai-proxy\x7F  namespace: higress-system\x7Fspec:\x7F  matchRules:\x7F  - config:\x7F      provider:\x7F        type: qwen\x7F        apiTokens:\x7F        - &#x22;<YOUR_API_TOKEN>&#x22;\x7F        modelMapping:\x7F          &#x27;gpt-3&#x27;: &#x22;qwen-turbo&#x22;\x7F          &#x27;gpt-35-turbo&#x27;: &#x22;qwen-plus&#x22;\x7F          &#x27;gpt-4-turbo&#x27;: &#x22;qwen-max&#x22;\x7F          &#x27;*&#x27;: &#x22;qwen-turbo&#x22;\x7F    ingress:\x7F    - qwen\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 100\x7F---\x7FapiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: ai-token-ratelimit\x7F  namespace: higress-system\x7Fspec:\x7F  defaultConfig:\x7F    rule_name: default_limit_by_param_apikey\x7F    rule_items:\x7F    - limit_by_param: apikey\x7F      limit_keys:\x7F      - key: 123456\x7F        token_per_minute: 200\x7F    redis:\x7F      # By default, to reduce data plane pressure, the &#x60;global.onlyPushRouteCluster&#x60; parameter in Higress is set to true, meaning that Kubernetes Services are not automatically discovered.\x7F      # If you need to use Kubernetes Service for service discovery, set &#x60;global.onlyPushRouteCluster&#x60; to false,\x7F      # allowing you to directly set &#x60;service_name&#x60; to the Kubernetes Service without needing to create an McpBridge and an Ingress route for Redis.\x7F      # service_name: redis.default.svc.cluster.local\x7F      service_name: redis.dns\x7F      service_port: 6379\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-ratelimit:1.0.0\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 600"><div></div></button></div></figure></div>
<p>Note that the <code dir="auto">service_name</code> in the Redis configuration of the AI Token Rate Limiting Plugin is derived from the service source configured in McpBridge. Additionally, we need to configure the access address of the qnwen service in McpBridge.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">443</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.default.svc.cluster.local</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># Kubernetes Service</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">6379</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F  - domain: dashscope.aliyuncs.com\x7F    name: qwen\x7F    port: 443\x7F    type: dns\x7F  - domain: redis.default.svc.cluster.local # Kubernetes Service\x7F    name: redis\x7F    type: dns\x7F    port: 6379"><div></div></button></div></figure></div>
<p>Create two routing rules separately.</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/backend-protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">HTTPS</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dashscope.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/proxy-ssl-server-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"on"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/resource-definer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">qwen-test.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/destination</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis.dns</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/ignore-path-case</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"false"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">higress.io/resource-definer</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">redis</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resource</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">apiGroup</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/backend-protocol: HTTPS\x7F    higress.io/destination: qwen.dns\x7F    higress.io/proxy-ssl-name: dashscope.aliyuncs.com\x7F    higress.io/proxy-ssl-server-name: &#x22;on&#x22;\x7F  labels:\x7F    higress.io/resource-definer: higress\x7F  name: qwen\x7F  namespace: higress-system\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - host: qwen-test.com\x7F    http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  annotations:\x7F    higress.io/destination: redis.dns\x7F    higress.io/ignore-path-case: &#x22;false&#x22;\x7F  labels:\x7F    higress.io/resource-definer: higress\x7F  name: redis\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F  - http:\x7F      paths:\x7F      - backend:\x7F          resource:\x7F            apiGroup: networking.higress.io\x7F            kind: McpBridge\x7F            name: default\x7F        path: /\x7F        pathType: Prefix"><div></div></button></div></figure></div>
<p>Forward the traffic of higress-gateway to the local, making it convenient for testing.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">port-forward</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">svc/higress-gateway</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">18000:80</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl port-forward svc/higress-gateway -n higress-system 18000:80"><div></div></button></div></figure></div>
<p>The rate limiting effect is triggered as follows:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"http://localhost:18000/v1/chat/completions?apikey=123456"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Host: qwen-test.com"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"Content-Type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "Hello, who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"stream": false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"id"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"88cfa80f-545d-93b4-8ff3-3f5245ca33ba"</span><span style="--0:#B392F0">,</span><span style="--0:#B392F0">"choices"</span><span style="--0:#79B8FF">:</span><span style="--0:#9ECBFF">[{</span><span style="--0:#E1E4E8">"</span><span style="--0:#B392F0">index</span><span style="--0:#B392F0">":0,"</span><span style="--0:#B392F0">message</span><span style="--0:#B392F0">":{"</span><span style="--0:#B392F0">role</span><span style="--0:#B392F0">":"</span><span style="--0:#B392F0">assistant</span><span style="--0:#B392F0">","</span><span style="--0:#B392F0">content</span><span style="--0:#B392F0">":"</span><span style="--0:#B392F0">I</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">am</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Tongyi</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Qianwen,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">an</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">AI</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">assistant</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">developed</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">by</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Alibaba</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Cloud.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">I</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">can</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">answer</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">various</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">questions,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">provide</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">information,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">and</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">have</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">conversations</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">with</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">users.</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">How</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">can</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">I</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">assist</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">you?"},"finish_reason":"stop"}],"created":1719909825,"model":"qwen-turbo","object":"chat.completion","usage":{"prompt_tokens":13,"completion_tokens":33,"total_tokens":46}}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">curl "http://qwen-test.com:18000/v1/chat/completions?apikey=</span><span style="--0:#79B8FF">123456</span><span style="--0:#9ECBFF">" -H "Content-Type:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">application/json"  -d '{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "Hello,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">who</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">are</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">],</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"stream": false</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">Too many requests  # Rate limiting successful</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl &#x22;http://localhost:18000/v1/chat/completions?apikey=123456&#x22; \\\x7F-H &#x22;Host: qwen-test.com&#x22; \\\x7F-H &#x22;Content-Type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F    }\x7F  ],\x7F  &#x22;stream&#x22;: false\x7F}&#x27;\x7F{&#x22;id&#x22;:&#x22;88cfa80f-545d-93b4-8ff3-3f5245ca33ba&#x22;,&#x22;choices&#x22;:[{&#x22;index&#x22;:0,&#x22;message&#x22;:{&#x22;role&#x22;:&#x22;assistant&#x22;,&#x22;content&#x22;:&#x22;I am Tongyi Qianwen, an AI assistant developed by Alibaba Cloud. I can answer various questions, provide information, and have conversations with users. How can I assist you?&#x22;},&#x22;finish_reason&#x22;:&#x22;stop&#x22;}],&#x22;created&#x22;:1719909825,&#x22;model&#x22;:&#x22;qwen-turbo&#x22;,&#x22;object&#x22;:&#x22;chat.completion&#x22;,&#x22;usage&#x22;:{&#x22;prompt_tokens&#x22;:13,&#x22;completion_tokens&#x22;:33,&#x22;total_tokens&#x22;:46}}\x7Fcurl &#x22;http://qwen-test.com:18000/v1/chat/completions?apikey=123456&#x22; -H &#x22;Content-Type: application/json&#x22;  -d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Hello, who are you?&#x22;\x7F    }\x7F  ],\x7F  &#x22;stream&#x22;: false\x7F}&#x27;\x7FToo many requests  # Rate limiting successful"><div></div></button></div></figure></div>`,n={title:"AI Token Rate Limiting",keywords:["AI Gateway","AI Token Rate Limiting"],description:"AI Token Rate Limiting Plugin Configuration Reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-consumer/ai-token-ratelimit.md",i=void 0,d=function(){return`## Function Description
The \`ai-token-ratelimit\` plugin implements token rate limiting based on specific key values. The key values can come from URL parameters, HTTP request headers, client IP addresses, consumer names, or key names in cookies.

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

## Example

The AI Token Rate Limiting Plugin relies on Redis to track the remaining available tokens, so the Redis service must be deployed first.

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
  labels:
    app: redis
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis
        ports:
        - containerPort: 6379
---
apiVersion: v1
kind: Service
metadata:
  name: redis
  labels:
    app: redis
spec:
  ports:
  - port: 6379
    targetPort: 6379
  selector:
    app: redis
---
\`\`\`

In this example, qwen is used as the AI service provider. Additionally, the AI Statistics Plugin must be configured, as the AI Token Rate Limiting Plugin depends on it to calculate the number of tokens consumed per request. The following configuration limits the total number of input and output tokens to 200 per minute.

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-proxy
  namespace: higress-system
spec:
  matchRules:
  - config:
      provider:
        type: qwen
        apiTokens:
        - "<YOUR_API_TOKEN>"
        modelMapping:
          'gpt-3': "qwen-turbo"
          'gpt-35-turbo': "qwen-plus"
          'gpt-4-turbo': "qwen-max"
          '*': "qwen-turbo"
    ingress:
    - qwen
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-proxy:1.0.0
  phase: UNSPECIFIED_PHASE
  priority: 100
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: ai-token-ratelimit
  namespace: higress-system
spec:
  defaultConfig:
    rule_name: default_limit_by_param_apikey
    rule_items:
    - limit_by_param: apikey
      limit_keys:
      - key: 123456
        token_per_minute: 200
    redis:
      # By default, to reduce data plane pressure, the \`global.onlyPushRouteCluster\` parameter in Higress is set to true, meaning that Kubernetes Services are not automatically discovered.
      # If you need to use Kubernetes Service for service discovery, set \`global.onlyPushRouteCluster\` to false,
      # allowing you to directly set \`service_name\` to the Kubernetes Service without needing to create an McpBridge and an Ingress route for Redis.
      # service_name: redis.default.svc.cluster.local
      service_name: redis.dns
      service_port: 6379
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/ai-token-ratelimit:1.0.0
  phase: UNSPECIFIED_PHASE
  priority: 600
\`\`\`

Note that the \`service_name\` in the Redis configuration of the AI Token Rate Limiting Plugin is derived from the service source configured in McpBridge. Additionally, we need to configure the access address of the qnwen service in McpBridge.

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
  - domain: dashscope.aliyuncs.com
    name: qwen
    port: 443
    type: dns
  - domain: redis.default.svc.cluster.local # Kubernetes Service
    name: redis
    type: dns
    port: 6379
\`\`\`

Create two routing rules separately.

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/backend-protocol: HTTPS
    higress.io/destination: qwen.dns
    higress.io/proxy-ssl-name: dashscope.aliyuncs.com
    higress.io/proxy-ssl-server-name: "on"
  labels:
    higress.io/resource-definer: higress
  name: qwen
  namespace: higress-system
spec:
  ingressClassName: higress
  rules:
  - host: qwen-test.com
    http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    higress.io/destination: redis.dns
    higress.io/ignore-path-case: "false"
  labels:
    higress.io/resource-definer: higress
  name: redis
spec:
  ingressClassName: higress
  rules:
  - http:
      paths:
      - backend:
          resource:
            apiGroup: networking.higress.io
            kind: McpBridge
            name: default
        path: /
        pathType: Prefix
\`\`\`

Forward the traffic of higress-gateway to the local, making it convenient for testing.

\`\`\`bash
kubectl port-forward svc/higress-gateway -n higress-system 18000:80
\`\`\`

The rate limiting effect is triggered as follows:

\`\`\`bash
curl "http://localhost:18000/v1/chat/completions?apikey=123456" \\
-H "Host: qwen-test.com" \\
-H "Content-Type: application/json" \\
-d '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ],
  "stream": false
}'
{"id":"88cfa80f-545d-93b4-8ff3-3f5245ca33ba","choices":[{"index":0,"message":{"role":"assistant","content":"I am Tongyi Qianwen, an AI assistant developed by Alibaba Cloud. I can answer various questions, provide information, and have conversations with users. How can I assist you?"},"finish_reason":"stop"}],"created":1719909825,"model":"qwen-turbo","object":"chat.completion","usage":{"prompt_tokens":13,"completion_tokens":33,"total_tokens":46}}
curl "http://qwen-test.com:18000/v1/chat/completions?apikey=123456" -H "Content-Type: application/json"  -d '{
  "model": "gpt-3",
  "messages": [
    {
      "role": "user",
      "content": "Hello, who are you?"
    }
  ],
  "stream": false
}'
Too many requests  # Rate limiting successful
\`\`\`
`},p=function(){return s},l=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-attributes",text:"Runtime Attributes"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"identify-request-parameter-apikey-for-differentiated-rate-limiting",text:"Identify request parameter apikey for differentiated rate limiting"},{depth:3,slug:"identify-request-header-x-ca-key-for-differentiated-rate-limiting",text:"Identify request header x-ca-key for differentiated rate limiting"},{depth:3,slug:"get-the-peer-ip-using-the-request-header-x-forwarded-for-for-differentiated-rate-limiting",text:"Get the peer IP using the request header x-forwarded-for for differentiated rate limiting"},{depth:3,slug:"identify-consumer-for-differentiated-rate-limiting",text:"Identify consumer for differentiated rate limiting"},{depth:3,slug:"identify-key-value-pairs-in-cookies-for-differentiated-rate-limiting",text:"Identify key-value pairs in cookies for differentiated rate limiting"},{depth:2,slug:"example",text:"Example"}]},e=c((f,g,h)=>{const{layout:_,...t}=n;return t.file=a,t.url=i,r`${E()}${y(s)}`})});export{e as Content,m as __tla,p as compiledContent,e as default,a as file,n as frontmatter,l as getHeadings,d as rawContent,i as url};
