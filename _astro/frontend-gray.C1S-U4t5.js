import{c as l,__tla as p}from"./astro-component.DtWAgCJT.js";import{r as c,m as u,u as y,__tla as v}from"./constant.B58Rf8dY.js";import{__tla as E}from"./astro/assets-service.BMxLt3pn.js";let s,d,a,n,o,r,t,f=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<h2 id="function-description">Function Description</h2>
<p>The <code dir="auto">frontend-gray</code> plugin implements the functionality of user gray release on the frontend. Through this plugin, it can be used for business <code dir="auto">A/B testing</code>, while the <code dir="auto">gradual release</code> combined with <code dir="auto">monitorable</code> and <code dir="auto">rollback</code> strategies ensures the stability of system release operations.</p>
<h2 id="runtime-attributes">Runtime Attributes</h2>
<p>Plugin execution phase: <code dir="auto">Authentication Phase</code><br>
Plugin execution priority: <code dir="auto">450</code></p>
<h2 id="configuration-fields">Configuration Fields</h2>






















































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">grayKey</code></td><td>string</td><td>Optional</td><td>-</td><td>The unique identifier of the user ID, which can be from Cookie or Header, such as userid. If not provided, uses <code dir="auto">rules[].grayTagKey</code> and <code dir="auto">rules[].grayTagValue</code> to filter gray release rules.</td></tr><tr><td><code dir="auto">graySubKey</code></td><td>string</td><td>Optional</td><td>-</td><td>User identity information may be output in JSON format, for example: <code dir="auto">userInfo:{ userCode:"001" }</code>, in the current example, <code dir="auto">graySubKey</code> is <code dir="auto">userCode</code>.</td></tr><tr><td><code dir="auto">rules</code></td><td>array of object</td><td>Required</td><td>-</td><td>User-defined different gray release rules, adapted to different gray release scenarios.</td></tr><tr><td><code dir="auto">rewrite</code></td><td>object</td><td>Required</td><td>-</td><td>Rewrite configuration, generally used for OSS/CDN frontend deployment rewrite configurations.</td></tr><tr><td><code dir="auto">baseDeployment</code></td><td>object</td><td>Optional</td><td>-</td><td>Configuration of the Base baseline rules.</td></tr><tr><td><code dir="auto">grayDeployments</code></td><td>array of object</td><td>Optional</td><td>-</td><td>Configuration of the effective rules for gray release, as well as the effective versions.</td></tr></tbody></table>
<p><code dir="auto">rules</code> field configuration description:</p>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Unique identifier for the rule name, associated with <code dir="auto">deploy.gray[].name</code> for effectiveness.</td></tr><tr><td><code dir="auto">grayKeyValue</code></td><td>array of string</td><td>Optional</td><td>-</td><td>Whitelist of user IDs.</td></tr><tr><td><code dir="auto">grayTagKey</code></td><td>string</td><td>Optional</td><td>-</td><td>Label key for user classification tagging, derived from Cookie.</td></tr><tr><td><code dir="auto">grayTagValue</code></td><td>array of string</td><td>Optional</td><td>-</td><td>Label value for user classification tagging, derived from Cookie.</td></tr></tbody></table>
<p><code dir="auto">rewrite</code> field configuration description:</p>
<blockquote>
<p><code dir="auto">indexRouting</code> homepage rewrite and <code dir="auto">fileRouting</code> file rewrite essentially use prefix matching, for example, <code dir="auto">/app1</code>: <code dir="auto">/mfe/app1/{version}/index.html</code> represents requests with the prefix /app1 routed to <code dir="auto">/mfe/app1/{version}/index.html</code> page, where <code dir="auto">{version}</code> represents the version number, which will be dynamically replaced by <code dir="auto">baseDeployment.version</code> or <code dir="auto">grayDeployments[].version</code> during execution.<br>
<code dir="auto">{version}</code> will be replaced dynamically during execution by the frontend version from <code dir="auto">baseDeployment.version</code> or <code dir="auto">grayDeployments[].version</code>.</p>
</blockquote>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">host</code></td><td>string</td><td>Optional</td><td>-</td><td>Host address, if OSS set to the VPC internal access address.</td></tr><tr><td><code dir="auto">notFoundUri</code></td><td>string</td><td>Optional</td><td>-</td><td>404 page configuration.</td></tr><tr><td><code dir="auto">indexRouting</code></td><td>map of string to string</td><td>Optional</td><td>-</td><td>Defines the homepage rewrite routing rules. Each key represents the homepage routing path, and the value points to the redirect target file. For example, the key <code dir="auto">/app1</code> corresponds to the value <code dir="auto">/mfe/app1/{version}/index.html</code>. If the effective version is <code dir="auto">0.0.1</code>, the access path is <code dir="auto">/app1</code>, it redirects to <code dir="auto">/mfe/app1/0.0.1/index.html</code>.</td></tr><tr><td><code dir="auto">fileRouting</code></td><td>map of string to string</td><td>Optional</td><td>-</td><td>Defines resource file rewrite routing rules. Each key represents the resource access path, and the value points to the redirect target file. For example, the key <code dir="auto">/app1/</code> corresponds to the value <code dir="auto">/mfe/app1/{version}</code>. If the effective version is <code dir="auto">0.0.1</code>, the access path is <code dir="auto">/app1/js/a.js</code>, it redirects to <code dir="auto">/mfe/app1/0.0.1/js/a.js</code>.</td></tr></tbody></table>
<p><code dir="auto">baseDeployment</code> field configuration description:</p>



















<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">version</code></td><td>string</td><td>Required</td><td>-</td><td>The version number of the Base version, as a fallback version.</td></tr></tbody></table>
<p><code dir="auto">grayDeployments</code> field configuration description:</p>








































<table><thead><tr><th>Name</th><th>Data Type</th><th>Requirements</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">version</code></td><td>string</td><td>Required</td><td>-</td><td>Version number of the Gray version, if the gray rules are hit, this version will be used. If it is a non-CDN deployment, add <code dir="auto">x-higress-tag</code> to the header.</td></tr><tr><td><code dir="auto">backendVersion</code></td><td>string</td><td>Required</td><td>-</td><td>Gray version for the backend, which will add <code dir="auto">x-mse-tag</code> to the header of <code dir="auto">XHR/Fetch</code> requests.</td></tr><tr><td><code dir="auto">name</code></td><td>string</td><td>Required</td><td>-</td><td>Rule name associated with <code dir="auto">rules[].name</code>.</td></tr><tr><td><code dir="auto">enabled</code></td><td>boolean</td><td>Required</td><td>-</td><td>Whether to activate the current gray release rule.</td></tr></tbody></table>
<h2 id="configuration-example">Configuration Example</h2>
<h3 id="basic-configuration">Basic Configuration</h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userid</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">inner-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000001'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000005'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000002'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000003'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">level</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">baseDeployment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayDeployments</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grayKey: userid\x7Frules:\x7F- name: inner-user\x7F  grayKeyValue:\x7F  - &#x27;00000001&#x27;\x7F  - &#x27;00000005&#x27;\x7F- name: beta-user\x7F  grayKeyValue:\x7F  - &#x27;00000002&#x27;\x7F  - &#x27;00000003&#x27;\x7F  grayTagKey: level\x7F  grayTagValue:\x7F  - level3\x7F  - level5\x7FbaseDeployment:\x7F  version: base\x7FgrayDeployments:\x7F  - name: beta-user\x7F    version: gray\x7F    enabled: true"><div></div></button></div></figure></div>
<p>The unique identifier of the user in the cookie is <code dir="auto">userid</code>, and the current gray release rule has configured the <code dir="auto">beta-user</code> rule.<br>
When the following conditions are met, the version <code dir="auto">version: gray</code> will be used:</p>
<ul>
<li><code dir="auto">userid</code> in the cookie equals <code dir="auto">00000002</code> or <code dir="auto">00000003</code></li>
<li>Users whose <code dir="auto">level</code> in the cookie equals <code dir="auto">level3</code> or <code dir="auto">level5</code><br>
Otherwise, use version <code dir="auto">version: base</code>.</li>
</ul>
<h3 id="user-information-exists-in-json">User Information Exists in JSON</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">appInfo</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">graySubKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userId</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">inner-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000001'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000005'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000002'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000003'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">level</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">baseDeployment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayDeployments</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grayKey: appInfo\x7FgraySubKey: userId\x7Frules:\x7F- name: inner-user\x7F  grayKeyValue:\x7F  - &#x27;00000001&#x27;\x7F  - &#x27;00000005&#x27;\x7F- name: beta-user\x7F  grayKeyValue:\x7F  - &#x27;00000002&#x27;\x7F  - &#x27;00000003&#x27;\x7F  grayTagKey: level\x7F  grayTagValue:\x7F  - level3\x7F  - level5\x7FbaseDeployment:\x7F  version: base\x7FgrayDeployments:\x7F  - name: beta-user\x7F    version: gray\x7F    enabled: true"><div></div></button></div></figure></div>
<p>The cookie contains JSON data for <code dir="auto">appInfo</code>, which includes the field <code dir="auto">userId</code> as the current unique identifier.<br>
The current gray release rule has configured the <code dir="auto">beta-user</code> rule.<br>
When the following conditions are met, the version <code dir="auto">version: gray</code> will be used:</p>
<ul>
<li><code dir="auto">userid</code> in the cookie equals <code dir="auto">00000002</code> or <code dir="auto">00000003</code></li>
<li>Users whose <code dir="auto">level</code> in the cookie equals <code dir="auto">level3</code> or <code dir="auto">level5</code><br>
Otherwise, use version <code dir="auto">version: base</code>.</li>
</ul>
<h3 id="rewrite-configuration">Rewrite Configuration</h3>
<blockquote>
<p>Generally used in CDN deployment scenarios.</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">userid</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">inner-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000001'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000005'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayKeyValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000002'</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">'00000003'</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagKey</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">level</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">grayTagValue</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">level5</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">rewrite</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">frontend-gray.oss-cn-shanghai-internal.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">notFoundUri</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">/mfe/app1/dev/404.html</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">indexRouting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/app1</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}/index.html'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}/index.html'</span><span style="--0:#E1E4E8">,</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">fileRouting</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}'</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">/app1/</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">'/mfe/app1/{version}'</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">baseDeployment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">base</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">grayDeployments</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">beta-user</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gray</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="grayKey: userid\x7Frules:\x7F- name: inner-user\x7F  grayKeyValue:\x7F  - &#x27;00000001&#x27;\x7F  - &#x27;00000005&#x27;\x7F- name: beta-user\x7F  grayKeyValue:\x7F  - &#x27;00000002&#x27;\x7F  - &#x27;00000003&#x27;\x7F  grayTagKey: level\x7F  grayTagValue:\x7F  - level3\x7F  - level5\x7Frewrite:\x7F  host: frontend-gray.oss-cn-shanghai-internal.aliyuncs.com\x7F  notFoundUri: /mfe/app1/dev/404.html\x7F  indexRouting:\x7F    /app1: &#x27;/mfe/app1/{version}/index.html&#x27;\x7F    /: &#x27;/mfe/app1/{version}/index.html&#x27;,\x7F  fileRouting:\x7F    /: &#x27;/mfe/app1/{version}&#x27;\x7F    /app1/: &#x27;/mfe/app1/{version}&#x27;\x7FbaseDeployment:\x7F  version: base\x7FgrayDeployments:\x7F  - name: beta-user\x7F    version: gray\x7F    enabled: true"><div></div></button></div></figure></div>
<p><code dir="auto">{version}</code> will be dynamically replaced with the actual version during execution.</p>
<h4 id="indexrouting-homepage-route-configuration">indexRouting: Homepage Route Configuration</h4>
<p>Accessing <code dir="auto">/app1</code>, <code dir="auto">/app123</code>, <code dir="auto">/app1/index.html</code>, <code dir="auto">/app1/xxx</code>, <code dir="auto">/xxxx</code> will route to \u2018/mfe/app1/{version}/index.html\u2019.</p>
<h4 id="filerouting-file-route-configuration">fileRouting: File Route Configuration</h4>
<p>The following file mappings are effective:</p>
<ul>
<li><code dir="auto">/js/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/a.js</code></li>
<li><code dir="auto">/js/template/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/template/a.js</code></li>
<li><code dir="auto">/app1/js/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/a.js</code></li>
<li><code dir="auto">/app1/js/template/a.js</code> => <code dir="auto">/mfe/app1/v1.0.0/js/template/a.js</code></li>
</ul>`,n={title:"Frontend Gray",keywords:["higress","frontend gray"],description:"Frontend gray plugin configuration reference"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/plugins/transformation/frontend-gray.md",t=void 0,r=function(){return"## Function Description\nThe `frontend-gray` plugin implements the functionality of user gray release on the frontend. Through this plugin, it can be used for business `A/B testing`, while the `gradual release` combined with `monitorable` and `rollback` strategies ensures the stability of system release operations.\n\n## Runtime Attributes\nPlugin execution phase: `Authentication Phase`  \nPlugin execution priority: `450`\n\n## Configuration Fields\n| Name             | Data Type         | Requirements  | Default Value | Description                                                                                                 |\n|-----------------|-------------------|---------------|---------------|-------------------------------------------------------------------------------------------------------------|\n| `grayKey`       | string            | Optional      | -             | The unique identifier of the user ID, which can be from Cookie or Header, such as userid. If not provided, uses `rules[].grayTagKey` and `rules[].grayTagValue` to filter gray release rules. |\n| `graySubKey`    | string            | Optional      | -             | User identity information may be output in JSON format, for example: `userInfo:{ userCode:\"001\" }`, in the current example, `graySubKey` is `userCode`. |\n| `rules`         | array of object    | Required      | -             | User-defined different gray release rules, adapted to different gray release scenarios.                      |\n| `rewrite`       | object            | Required      | -             | Rewrite configuration, generally used for OSS/CDN frontend deployment rewrite configurations.                |\n| `baseDeployment`| object            | Optional      | -             | Configuration of the Base baseline rules.                                                                    |\n| `grayDeployments` | array of object   | Optional      | -             | Configuration of the effective rules for gray release, as well as the effective versions.                     |\n\n`rules` field configuration description:\n| Name             | Data Type         | Requirements  | Default Value | Description                                                                                |\n|------------------|-------------------|---------------|---------------|--------------------------------------------------------------------------------------------|\n| `name`           | string            | Required      | -             | Unique identifier for the rule name, associated with `deploy.gray[].name` for effectiveness. |\n| `grayKeyValue`   | array of string   | Optional      | -             | Whitelist of user IDs.                                                                    |\n| `grayTagKey`     | string            | Optional      | -             | Label key for user classification tagging, derived from Cookie.                               |\n| `grayTagValue`   | array of string   | Optional      | -             | Label value for user classification tagging, derived from Cookie.                             |\n\n`rewrite` field configuration description:\n> `indexRouting` homepage rewrite and `fileRouting` file rewrite essentially use prefix matching, for example, `/app1`: `/mfe/app1/{version}/index.html` represents requests with the prefix /app1 routed to `/mfe/app1/{version}/index.html` page, where `{version}` represents the version number, which will be dynamically replaced by `baseDeployment.version` or `grayDeployments[].version` during execution.  \n> `{version}` will be replaced dynamically during execution by the frontend version from `baseDeployment.version` or `grayDeployments[].version`.\n\n| Name             | Data Type         | Requirements  | Default Value | Description                           |\n|------------------|-------------------|---------------|---------------|---------------------------------------|\n| `host`           | string            | Optional      | -             | Host address, if OSS set to the VPC internal access address. |\n| `notFoundUri`    | string            | Optional      | -             | 404 page configuration.               |\n| `indexRouting`   | map of string to string | Optional  | -             | Defines the homepage rewrite routing rules. Each key represents the homepage routing path, and the value points to the redirect target file. For example, the key `/app1` corresponds to the value `/mfe/app1/{version}/index.html`. If the effective version is `0.0.1`, the access path is `/app1`, it redirects to `/mfe/app1/0.0.1/index.html`. |\n| `fileRouting`    | map of string to string | Optional  | -             | Defines resource file rewrite routing rules. Each key represents the resource access path, and the value points to the redirect target file. For example, the key `/app1/` corresponds to the value `/mfe/app1/{version}`. If the effective version is `0.0.1`, the access path is `/app1/js/a.js`, it redirects to `/mfe/app1/0.0.1/js/a.js`. |\n\n`baseDeployment` field configuration description:\n| Name             | Data Type         | Requirements  | Default Value | Description                                                                                |\n|------------------|-------------------|---------------|---------------|-------------------------------------------------------------------------------------------|\n| `version`        | string            | Required      | -             | The version number of the Base version, as a fallback version.                           |\n\n`grayDeployments` field configuration description:\n| Name             | Data Type         | Requirements  | Default Value | Description                                                                                  |\n|------------------|-------------------|---------------|---------------|----------------------------------------------------------------------------------------------|\n| `version`        | string            | Required      | -             | Version number of the Gray version, if the gray rules are hit, this version will be used. If it is a non-CDN deployment, add `x-higress-tag` to the header. |\n| `backendVersion` | string            | Required      | -             | Gray version for the backend, which will add `x-mse-tag` to the header of `XHR/Fetch` requests. |\n| `name`           | string            | Required      | -             | Rule name associated with `rules[].name`.                                                  |\n| `enabled`        | boolean           | Required      | -             | Whether to activate the current gray release rule.                                          |\n\n## Configuration Example\n### Basic Configuration\n```yml\ngrayKey: userid\nrules:\n- name: inner-user\n  grayKeyValue:\n  - '00000001'\n  - '00000005'\n- name: beta-user\n  grayKeyValue:\n  - '00000002'\n  - '00000003'\n  grayTagKey: level\n  grayTagValue:\n  - level3\n  - level5\nbaseDeployment:\n  version: base\ngrayDeployments:\n  - name: beta-user\n    version: gray\n    enabled: true\n```\n\nThe unique identifier of the user in the cookie is `userid`, and the current gray release rule has configured the `beta-user` rule.  \nWhen the following conditions are met, the version `version: gray` will be used:\n- `userid` in the cookie equals `00000002` or `00000003`\n- Users whose `level` in the cookie equals `level3` or `level5`  \nOtherwise, use version `version: base`.\n\n### User Information Exists in JSON\n```yml\ngrayKey: appInfo\ngraySubKey: userId\nrules:\n- name: inner-user\n  grayKeyValue:\n  - '00000001'\n  - '00000005'\n- name: beta-user\n  grayKeyValue:\n  - '00000002'\n  - '00000003'\n  grayTagKey: level\n  grayTagValue:\n  - level3\n  - level5\nbaseDeployment:\n  version: base\ngrayDeployments:\n  - name: beta-user\n    version: gray\n    enabled: true\n```\n\nThe cookie contains JSON data for `appInfo`, which includes the field `userId` as the current unique identifier.  \nThe current gray release rule has configured the `beta-user` rule.  \nWhen the following conditions are met, the version `version: gray` will be used:\n- `userid` in the cookie equals `00000002` or `00000003`\n- Users whose `level` in the cookie equals `level3` or `level5`  \nOtherwise, use version `version: base`.\n\n### Rewrite Configuration\n> Generally used in CDN deployment scenarios.\n```yml\ngrayKey: userid\nrules:\n- name: inner-user\n  grayKeyValue:\n  - '00000001'\n  - '00000005'\n- name: beta-user\n  grayKeyValue:\n  - '00000002'\n  - '00000003'\n  grayTagKey: level\n  grayTagValue:\n  - level3\n  - level5\nrewrite:\n  host: frontend-gray.oss-cn-shanghai-internal.aliyuncs.com\n  notFoundUri: /mfe/app1/dev/404.html\n  indexRouting:\n    /app1: '/mfe/app1/{version}/index.html'\n    /: '/mfe/app1/{version}/index.html',\n  fileRouting:\n    /: '/mfe/app1/{version}'\n    /app1/: '/mfe/app1/{version}'\nbaseDeployment:\n  version: base\ngrayDeployments:\n  - name: beta-user\n    version: gray\n    enabled: true\n```\n\n`{version}` will be dynamically replaced with the actual version during execution.\n\n#### indexRouting: Homepage Route Configuration\nAccessing `/app1`, `/app123`, `/app1/index.html`, `/app1/xxx`, `/xxxx` will route to '/mfe/app1/{version}/index.html'.\n\n#### fileRouting: File Route Configuration\nThe following file mappings are effective:\n- `/js/a.js` => `/mfe/app1/v1.0.0/js/a.js`\n- `/js/template/a.js` => `/mfe/app1/v1.0.0/js/template/a.js`\n- `/app1/js/a.js` => `/mfe/app1/v1.0.0/js/a.js`\n- `/app1/js/template/a.js` => `/mfe/app1/v1.0.0/js/template/a.js`\n"},d=function(){return e},o=function(){return[{depth:2,slug:"function-description",text:"Function Description"},{depth:2,slug:"runtime-attributes",text:"Runtime Attributes"},{depth:2,slug:"configuration-fields",text:"Configuration Fields"},{depth:2,slug:"configuration-example",text:"Configuration Example"},{depth:3,slug:"basic-configuration",text:"Basic Configuration"},{depth:3,slug:"user-information-exists-in-json",text:"User Information Exists in JSON"},{depth:3,slug:"rewrite-configuration",text:"Rewrite Configuration"},{depth:4,slug:"indexrouting-homepage-route-configuration",text:"indexRouting: Homepage Route Configuration"},{depth:4,slug:"filerouting-file-route-configuration",text:"fileRouting: File Route Configuration"}]},s=l((g,h,m)=>{const{layout:x,...i}=n;return i.file=a,i.url=t,c`${u()}${y(e)}`})});export{s as Content,f as __tla,d as compiledContent,s as default,a as file,n as frontmatter,o as getHeadings,r as rawContent,t as url};
