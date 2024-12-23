import{c,__tla as d}from"./astro-component.DtWAgCJT.js";import{r,m as v,u as E,__tla as y}from"./constant.sCXx7q6N.js";import{__tla as u}from"./astro/assets-service.BMxLt3pn.js";let e,p,n,a,l,o,t,F=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return y}catch{}})(),(()=>{try{return u}catch{}})()]).then(async()=>{let s;s=`<h2 id="function-description">Function Description</h2>
<p>The AI Prompts plugin allows inserting prompts before and after requests in LLM.</p>
<h2 id="execution-properties">Execution Properties</h2>
<p>Plugin execution phase: <code dir="auto">Default Phase</code><br>
Plugin execution priority: <code dir="auto">450</code></p>
<h2 id="configuration-description">Configuration Description</h2>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">prepend</code></td><td>array of message object</td><td>optional</td><td>-</td><td>Statements inserted before the initial input</td></tr><tr><td><code dir="auto">append</code></td><td>array of message object</td><td>optional</td><td>-</td><td>Statements inserted after the initial input</td></tr></tbody></table>
<p>Message object configuration description:</p>


























<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirement</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">role</code></td><td>string</td><td>required</td><td>-</td><td>Role</td></tr><tr><td><code dir="auto">content</code></td><td>string</td><td>required</td><td>-</td><td>Message</td></tr></tbody></table>
<h2 id="example">Example</h2>
<p>An example configuration is as follows:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">prepend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Please answer the questions in English."</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">append</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"After answering each question, try to ask a follow-up question."</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="prepend:\x7F- role: system\x7F  content: &#x22;Please answer the questions in English.&#x22;\x7Fappend:\x7F- role: user\x7F  content: &#x22;After answering each question, try to ask a follow-up question.&#x22;"><div></div></button></div></figure></div>
<p>Using the above configuration to initiate a request:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<p>After processing through the plugin, the actual request will be:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "Please answer the questions in English."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "Who are you?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "After answering each question, try to ask a follow-up question."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;Please answer the questions in English.&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;Who are you?&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;After answering each question, try to ask a follow-up question.&#x22;\x7F    }\x7F  ]\x7F}"><div></div></button></div></figure></div>
<h2 id="based-on-the-geo-ip-plugins-capabilities-extend-ai-prompt-decorator-plugin-to-carry-user-geographic-location-information">Based on the geo-ip plugin\u2019s capabilities, extend AI Prompt Decorator plugin to carry user geographic location information.</h2>
<p>If you need to include user geographic location information before and after the LLM\u2019s requests, please ensure both the geo-ip plugin and the AI Prompt Decorator plugin are enabled. Moreover, in the same request processing phase, the geo-ip plugin\u2019s priority must be higher than that of the AI Prompt Decorator plugin. First, the geo-ip plugin will calculate the user\u2019s geographic location information based on the user\u2019s IP, and then pass it to subsequent plugins via request attributes. For instance, in the default phase, the geo-ip plugin\u2019s priority configuration is 1000, while the ai-prompt-decorator plugin\u2019s priority configuration is 500.</p>
<p>Example configuration for the geo-ip plugin:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">ipProtocal</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"ipv4"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ipProtocal: &#x22;ipv4&#x22;"><div></div></button></div></figure></div>
<p>An example configuration for the AI Prompt Decorator plugin is as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">prepend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">system</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"The user's current geographic location is, country: \${geo-country}, province: \${geo-province}, city: \${geo-city}."</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">append</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">role</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">content</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"After answering each question, try to ask a follow-up question."</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="prepend:\x7F- role: system\x7F  content: &#x22;The user&#x27;s current geographic location is, country: \${geo-country}, province: \${geo-province}, city: \${geo-city}.&#x22;\x7Fappend:\x7F- role: user\x7F  content: &#x22;After answering each question, try to ask a follow-up question.&#x22;"><div></div></button></div></figure></div>
<p>Using the above configuration to initiate a request:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"x-forwarded-for: 87.254.207.100,4.5.6.7"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "How is the weather today?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-H &#x22;x-forwarded-for: 87.254.207.100,4.5.6.7&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;How is the weather today?&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>
<p>After processing through the plugin, the actual request will be:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost/test</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"content-type: application/json"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-H </span><span style="--0:#9ECBFF">"x-forwarded-for: 87.254.207.100,4.5.6.7"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">-d </span><span style="--0:#9ECBFF">'{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"model": "gpt-3.5-turbo",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">"messages": [</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "system",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "The user's</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">current</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">geographic</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">location</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">country:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">China,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">province:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Beijing,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">city:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">Beijing."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "How</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">is</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">the</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">weather</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">today?"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"role": "user",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">"content": "After</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">answering</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">each</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">question,</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">try</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">to</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ask</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">a</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">follow-up</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">question."</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">  </span></span><span style="--0:#9ECBFF">]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#9ECBFF">}'</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl http://localhost/test \\\x7F-H &#x22;content-type: application/json&#x22; \\\x7F-H &#x22;x-forwarded-for: 87.254.207.100,4.5.6.7&#x22; \\\x7F-d &#x27;{\x7F  &#x22;model&#x22;: &#x22;gpt-3.5-turbo&#x22;,\x7F  &#x22;messages&#x22;: [\x7F    {\x7F      &#x22;role&#x22;: &#x22;system&#x22;,\x7F      &#x22;content&#x22;: &#x22;The user&#x27;s current geographic location is, country: China, province: Beijing, city: Beijing.&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;How is the weather today?&#x22;\x7F    },\x7F    {\x7F      &#x22;role&#x22;: &#x22;user&#x22;,\x7F      &#x22;content&#x22;: &#x22;After answering each question, try to ask a follow-up question.&#x22;\x7F    }\x7F  ]\x7F}&#x27;"><div></div></button></div></figure></div>`,a={title:"AI Prompts",keywords:["AI Gateway","AI Prompts"],description:"AI Prompts plugin configuration reference"},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/ai/api-provider/ai-prompt-decorator.md",t=void 0,o=function(){return`## Function Description
The AI Prompts plugin allows inserting prompts before and after requests in LLM.

## Execution Properties
Plugin execution phase: \`Default Phase\`  
Plugin execution priority: \`450\`

## Configuration Description
| Name          | Data Type            | Requirement | Default Value | Description                          |
|---------------|----------------------|-------------|---------------|--------------------------------------|
| \`prepend\`     | array of message object | optional   | -             | Statements inserted before the initial input |
| \`append\`      | array of message object | optional   | -             | Statements inserted after the initial input |

Message object configuration description:
| Name      | Data Type   | Requirement | Default Value | Description |
|-----------|-------------|-------------|---------------|-------------|
| \`role\`    | string      | required    | -             | Role        |
| \`content\` | string      | required    | -             | Message     |

## Example
An example configuration is as follows:
\`\`\`yaml
prepend:
- role: system
  content: "Please answer the questions in English."
append:
- role: user
  content: "After answering each question, try to ask a follow-up question."
\`\`\`

Using the above configuration to initiate a request:
\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "Who are you?"
    }
  ]
}
\`\`\`

After processing through the plugin, the actual request will be:
\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "Please answer the questions in English."
    },
    {
      "role": "user",
      "content": "Who are you?"
    },
    {
      "role": "user",
      "content": "After answering each question, try to ask a follow-up question."
    }
  ]
}
\`\`\`

## Based on the geo-ip plugin's capabilities, extend AI Prompt Decorator plugin to carry user geographic location information.
If you need to include user geographic location information before and after the LLM's requests, please ensure both the geo-ip plugin and the AI Prompt Decorator plugin are enabled. Moreover, in the same request processing phase, the geo-ip plugin's priority must be higher than that of the AI Prompt Decorator plugin. First, the geo-ip plugin will calculate the user's geographic location information based on the user's IP, and then pass it to subsequent plugins via request attributes. For instance, in the default phase, the geo-ip plugin's priority configuration is 1000, while the ai-prompt-decorator plugin's priority configuration is 500.

Example configuration for the geo-ip plugin:
\`\`\`yaml
ipProtocal: "ipv4"
\`\`\`

An example configuration for the AI Prompt Decorator plugin is as follows:
\`\`\`yaml
prepend:
- role: system
  content: "The user's current geographic location is, country: \${geo-country}, province: \${geo-province}, city: \${geo-city}."
append:
- role: user
  content: "After answering each question, try to ask a follow-up question."
\`\`\`

Using the above configuration to initiate a request:
\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "user",
      "content": "How is the weather today?"
    }
  ]
}'
\`\`\`

After processing through the plugin, the actual request will be:
\`\`\`bash
curl http://localhost/test \\
-H "content-type: application/json" \\
-H "x-forwarded-for: 87.254.207.100,4.5.6.7" \\
-d '{
  "model": "gpt-3.5-turbo",
  "messages": [
    {
      "role": "system",
      "content": "The user's current geographic location is, country: China, province: Beijing, city: Beijing."
    },
    {
      "role": "user",
      "content": "How is the weather today?"
    },
    {
      "role": "user",
      "content": "After answering each question, try to ask a follow-up question."
    }
  ]
}'
\`\`\`
`},p=function(){return s},l=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"execution-properties",text:"Execution Properties"},{depth:2,slug:"configuration-description",text:"Configuration Description"},{depth:2,slug:"example",text:"Example"},{depth:2,slug:"based-on-the-geo-ip-plugins-capabilities-extend-ai-prompt-decorator-plugin-to-carry-user-geographic-location-information",text:"Based on the geo-ip plugin\u2019s capabilities, extend AI Prompt Decorator plugin to carry user geographic location information."}]},e=c((g,x,h)=>{const{layout:f,...i}=a;return i.file=n,i.url=t,r`${v()}${E(s)}`})});export{e as Content,F as __tla,p as compiledContent,e as default,n as file,a as frontmatter,l as getHeadings,o as rawContent,t as url};
