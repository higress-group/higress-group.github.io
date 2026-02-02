import{c as d,__tla as c}from"./astro-component.YcfuVWta.js";import{r,m as y,u,__tla as v}from"./constant.Cx6UCuye.js";import{__tla as E}from"./astro/assets-service.r1ocst81.js";let e,o,a,t,l,p,n,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="introduction">Introduction</h2>
<p>HiMarket integrates with Alibaba Cloud\u2019s Log Service (SLS) to provide observability capabilities, supporting metric aggregation, chart display, and log retrieval based on access logs. This guide will walk you through configuring the SLS observability feature.</p>
<p>The HiMarket observability module relies on SLS and does not yet have an open-source implementation. It currently works under the following conditions:</p>
<ul>
<li>Using a commercial Alibaba Cloud AI Gateway (Alibaba Cloud AI Gateway or Apsara Enterprise Edition), simply enable SLS log delivery (out-of-the-box).</li>
<li>Using open-source Higress, by configuring the <code dir="auto">ai-statistics</code> plugin and log collection to deliver logs to Alibaba Cloud SLS.</li>
</ul>
<h2 id="feature-overview">Feature Overview</h2>
<ul>
<li><strong>Observability Dashboard</strong>: Statistics for model calls, MCP tool calls, request success rates, response times, etc.</li>
<li><strong>Log Query</strong>: Supports custom SQL queries for access logs.</li>
<li><strong>Authentication</strong>: Supports AK/SK authentication. STS support is planned.</li>
<li><strong>Automatic Fallback</strong>: Automatically returns empty data when SLS is not configured, ensuring the system continues to run normally.</li>
</ul>
<h2 id="configuration-steps">Configuration Steps</h2>
<ul>
<li>If you are using open-source Higress, you need to perform the following configuration.</li>
<li>If you are using a commercial Alibaba Cloud AI Gateway (Alibaba Cloud/Apsara Enterprise Edition), you do not need to perform the following steps; just enable log delivery.</li>
</ul>
<h3 id="step-1-prepare-sls-resources">Step 1: Prepare SLS Resources</h3>
<p>Before you begin, you need to prepare the following resources in the Alibaba Cloud SLS console:</p>
<h4 id="11-create-a-project-and-logstore">1.1 Create a Project and Logstore</h4>
<ol>
<li>Log in to the <a href="https://sls.console.aliyun.com/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba Cloud SLS Console</a>.</li>
<li>Create a Project (e.g., <code dir="auto">apigateway-csb-cop</code>).</li>
<li>Create a Logstore within the Project (e.g., <code dir="auto">apig-access-log</code>).</li>
</ol>
<h4 id="12-configure-log-collection-taking-docker-as-an-example">1.2 Configure Log Collection (Taking Docker as an example)</h4>
<p>Collect the gateway\u2019s access logs into the Logstore created above. It is recommended to use Higress version 2.1.9 or later, as its <code dir="auto">accesslogformat</code> has been optimized for the HiMarket observability dashboard.</p>
<p>Confirm that Higress is deployed successfully using all-in-one deployment.</p>
<p><img src="https://image.cnkirito.cn/image-20260119103948203.png" alt="docker ps" referrerpolicy="no-referrer"></p>
<p>Confirm that logs are outputting correctly. Higress deployed via Docker outputs logs to <code dir="auto">/var/log/higress/gateway.log</code>. You can view the log output directly on the host using <code dir="auto">docker exec higress tail -n 10 /var/log/higress/gateway.log</code>.</p>
<p><img src="https://image.cnkirito.cn/image-20260119105302742.png" alt="" referrerpolicy="no-referrer"></p>
<p>In a normal AI request, the <code dir="auto">ai_log</code> field should contain a JSON object.</p>
<p>AI-related fields (JSON formatted <code dir="auto">ai_log</code> field):</p>
<ul>
<li><code dir="auto">model</code>: Model name</li>
<li><code dir="auto">api</code>: API name</li>
<li><code dir="auto">input_token</code>: Number of input tokens</li>
<li><code dir="auto">output_token</code>: Number of output tokens</li>
<li><code dir="auto">response_type</code>: Response type (stream/normal)</li>
<li><code dir="auto">llm_service_duration</code>: LLM service duration</li>
<li><code dir="auto">cache_status</code>: Cache status (hit/miss/skip)</li>
<li><code dir="auto">token_ratelimit_status</code>: Rate limit status</li>
<li><code dir="auto">mcp_tool_name</code>: MCP tool name</li>
</ul>
<p>After confirming that the log output is normal, you can refer to the SLS official documentation to configure Docker or K8s collection. For Higress deployed via Docker, refer to this document: <a href="https://help.aliyun.com/zh/sls/collect-docker-container-text-logs" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://help.aliyun.com/zh/sls/collect-docker-container-text-logs</a>. The most critical steps are installing LoongCollector and Logtail, and configuring the collection for the <code dir="auto">/var/log/higress/gateway.log</code> file. Since there are many logs and they need to support subsequent observability queries, you also need to configure the relevant SLS processing plugins.</p>
<p><img src="https://image.cnkirito.cn/image-20260119110357227.png" alt="Plugin configuration" referrerpolicy="no-referrer"></p>
<p><img src="https://image.cnkirito.cn/image-20260119110436918.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="https://image.cnkirito.cn/image-20260119110501783.png" alt="" referrerpolicy="no-referrer"></p>
<p>If the collection is successful, you should see detailed logs in the logstore, as shown below:</p>
<p><img src="https://image.cnkirito.cn/image-20260119110122535.png" alt="sls log" referrerpolicy="no-referrer"></p>
<h4 id="13-configure-indexes">1.3 Configure Indexes</h4>
<p>The current version of HiMarket does not provide an automatic index update interface. You need to create indexes in the SLS console manually.</p>
<ul>
<li><strong>Text Fields</strong>: <code dir="auto">method</code>, <code dir="auto">consumer</code>, <code dir="auto">route_name</code>, <code dir="auto">upstream_cluster</code>, etc.</li>
<li><strong>Numeric Fields</strong>: <code dir="auto">duration</code>, <code dir="auto">bytes_received</code>, <code dir="auto">bytes_sent</code>, <code dir="auto">response_code</code>, etc.</li>
<li><strong>JSON Field</strong>: <code dir="auto">ai_log</code> (Enable JSON indexing, including the AI-related fields listed above).</li>
</ul>
<p>It is recommended to automatically build indexes based on the logs obtained in the SLS Query and Analysis properties after you have some raw data:</p>
<p><img src="https://image.cnkirito.cn/image-20260119110750641.png" alt="" referrerpolicy="no-referrer"></p>
<p>Key steps:</p>
<ul>
<li>Configure the <code dir="auto">ai_log</code> type as <code dir="auto">json</code>.</li>
<li>Enable statistics for all fields, including the attribute fields of <code dir="auto">ai_log</code>, otherwise it will affect subsequent observability.</li>
</ul>
<h4 id="14-obtain-authentication-credentials">1.4 Obtain Authentication Credentials</h4>
<p>Prepare AK/SK authentication credentials:</p>
<p><strong>AK/SK (Recommended for development/testing environments)</strong></p>
<ol>
<li>Log in to the Alibaba Cloud console.</li>
<li>Go to the AccessKey Management page.</li>
<li>Create or obtain an AccessKey ID and AccessKey Secret.</li>
<li>Ensure this AccessKey has read permissions for SLS.</li>
</ol>
<h3 id="step-2-configure-himarket">Step 2: Configure HiMarket</h3>
<h4 id="21-modify-the-configuration-file">2.1 Modify the Configuration File</h4>
<p>Edit <code dir="auto">himarket-bootstrap/src/main/resources/application.yml</code>:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># SLS service endpoint (Required)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Format: &#x3C;region-id>.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># e.g., cn-hangzhou.log.aliyuncs.com, cn-beijing.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ENDPOINT:}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Authentication type: AK_SK</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">auth-type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_AUTH_TYPE:AK_SK}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Keys for AK/SK authentication</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_ID:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_SECRET:}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Default Project name</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-project</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_PROJECT:apigateway-csb-cop}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># Default Logstore name</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-logstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_LOGSTORE:apig-access-log}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6"># AliyunLogConfig CR configuration (for K8s environments)</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">aliyun-log-config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Namespace where the CR is located</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ALIYUN_LOG_CONFIG_NAMESPACE:apigateway-system}</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6"># Name of the CR</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">cr-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ALIYUN_LOG_CONFIG_CR_NAME:apigateway-access-log}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  # SLS service endpoint (Required)\x7F  # Format: <region-id>.log.aliyuncs.com\x7F  # e.g., cn-hangzhou.log.aliyuncs.com, cn-beijing.log.aliyuncs.com\x7F  endpoint: \${SLS_ENDPOINT:}\x7F\x7F  # Authentication type: AK_SK\x7F  auth-type: \${SLS_AUTH_TYPE:AK_SK}\x7F\x7F  # Keys for AK/SK authentication\x7F  access-key-id: \${SLS_ACCESS_KEY_ID:}\x7F  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}\x7F\x7F  # Default Project name\x7F  default-project: \${SLS_DEFAULT_PROJECT:apigateway-csb-cop}\x7F\x7F  # Default Logstore name\x7F  default-logstore: \${SLS_DEFAULT_LOGSTORE:apig-access-log}\x7F\x7F  # AliyunLogConfig CR configuration (for K8s environments)\x7F  aliyun-log-config:\x7F    # Namespace where the CR is located\x7F    namespace: \${SLS_ALIYUN_LOG_CONFIG_NAMESPACE:apigateway-system}\x7F    # Name of the CR\x7F    cr-name: \${SLS_ALIYUN_LOG_CONFIG_CR_NAME:apigateway-access-log}"><div></div></button></div></figure></div>
<h4 id="22-configure-using-environment-variables-recommended">2.2 Configure Using Environment Variables (Recommended)</h4>
<p>For security reasons, it is recommended to pass sensitive information via environment variables instead of writing them directly into the configuration file:</p>
<p><strong>Linux/macOS:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ENDPOINT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"cn-hangzhou.log.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_AUTH_TYPE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"AK_SK"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_ID</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"your-access-key-id"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_SECRET</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"your-access-key-secret"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_DEFAULT_PROJECT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"apigateway-csb-cop"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_DEFAULT_LOGSTORE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"apig-access-log"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export SLS_ENDPOINT=&#x22;cn-hangzhou.log.aliyuncs.com&#x22;\x7Fexport SLS_AUTH_TYPE=&#x22;AK_SK&#x22;\x7Fexport SLS_ACCESS_KEY_ID=&#x22;your-access-key-id&#x22;\x7Fexport SLS_ACCESS_KEY_SECRET=&#x22;your-access-key-secret&#x22;\x7Fexport SLS_DEFAULT_PROJECT=&#x22;apigateway-csb-cop&#x22;\x7Fexport SLS_DEFAULT_LOGSTORE=&#x22;apig-access-log&#x22;"><div></div></button></div></figure></div>
<p><strong>Windows:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_ENDPOINT</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">cn</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">hangzhou.</span><span style="--0:#79B8FF">log</span><span style="--0:#E1E4E8">.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_AUTH_TYPE</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">AK_SK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_ACCESS_KEY_ID</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">your</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">access</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">key</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">id</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_ACCESS_KEY_SECRET</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">your</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">access</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">key</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">secret</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_DEFAULT_PROJECT</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">apigateway</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">csb</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">cop</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">set </span><span style="--0:#E1E4E8">SLS_DEFAULT_LOGSTORE</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">apig</span><span style="--0:#F97583">-</span><span style="--0:#E1E4E8">access</span><span style="--0:#F97583">-</span><span style="--0:#79B8FF">log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="set SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com\x7Fset SLS_AUTH_TYPE=AK_SK\x7Fset SLS_ACCESS_KEY_ID=your-access-key-id\x7Fset SLS_ACCESS_KEY_SECRET=your-access-key-secret\x7Fset SLS_DEFAULT_PROJECT=apigateway-csb-cop\x7Fset SLS_DEFAULT_LOGSTORE=apig-access-log"><div></div></button></div></figure></div>
<p><strong>Docker Deployment:</strong></p>
<p>Edit <code dir="auto">deploy/docker/docker-compose.yml</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">services</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">himarket-server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">environment</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_AUTH_TYPE=AK_SK</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_ACCESS_KEY_ID=your-access-key-id</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_ACCESS_KEY_SECRET=your-access-key-secret</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_DEFAULT_PROJECT=apigateway-csb-cop</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">SLS_DEFAULT_LOGSTORE=apig-access-log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="services:\x7F  himarket-server:\x7F    environment:\x7F      - SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com\x7F      - SLS_AUTH_TYPE=AK_SK\x7F      - SLS_ACCESS_KEY_ID=your-access-key-id\x7F      - SLS_ACCESS_KEY_SECRET=your-access-key-secret\x7F      - SLS_DEFAULT_PROJECT=apigateway-csb-cop\x7F      - SLS_DEFAULT_LOGSTORE=apig-access-log"><div></div></button></div></figure></div>
<p><strong>Kubernetes Deployment:</strong></p>
<p>Edit <code dir="auto">deploy/helm/values.yaml</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"cn-hangzhou.log.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">authType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"AK_SK"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">accessKeyId</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-access-key-id"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">accessKeySecret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"your-access-key-secret"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultProject</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"apigateway-csb-cop"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">defaultLogstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"apig-access-log"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  endpoint: &#x22;cn-hangzhou.log.aliyuncs.com&#x22;\x7F  authType: &#x22;AK_SK&#x22;\x7F  accessKeyId: &#x22;your-access-key-id&#x22;\x7F  accessKeySecret: &#x22;your-access-key-secret&#x22;\x7F  defaultProject: &#x22;apigateway-csb-cop&#x22;\x7F  defaultLogstore: &#x22;apig-access-log&#x22;"><div></div></button></div></figure></div>
<h3 id="step-3-start-and-verify">Step 3: Start and Verify</h3>
<h4 id="31-start-himarket">3.1 Start HiMarket</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Development environment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">mvn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clean</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-bootstrap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">mvn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">spring-boot:run</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Production environment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">java</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-jar</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-bootstrap/target/himarket-bootstrap.jar</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mvn clean install\x7Fcd himarket-bootstrap\x7Fmvn spring-boot:run\x7Fjava -jar himarket-bootstrap/target/himarket-bootstrap.jar"><div></div></button></div></figure></div>
<h4 id="32-check-configuration-status">3.2 Check Configuration Status</h4>
<p>After startup, check the logs to confirm that the SLS configuration has been loaded successfully:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS endpoint configured: cn-hangzhou.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS auth type: AK_SK</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS default project: apigateway-csb-cop</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">INFO  c.a.h.config.SlsConfig - SLS default logstore: apig-access-log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="INFO  c.a.h.config.SlsConfig - SLS endpoint configured: cn-hangzhou.log.aliyuncs.com\x7FINFO  c.a.h.config.SlsConfig - SLS auth type: AK_SK\x7FINFO  c.a.h.config.SlsConfig - SLS default project: apigateway-csb-cop\x7FINFO  c.a.h.config.SlsConfig - SLS default logstore: apig-access-log"><div></div></button></div></figure></div>
<h2 id="higress-plugin-configuration">Higress Plugin Configuration</h2>
<h3 id="model-dashboard">Model Dashboard</h3>
<p>Example <code dir="auto">ai-statistics</code> plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">default_value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">unknown</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-mse-consumer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">fallback_from</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-higress-fallback-from</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">as_separate_log_field</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">question</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gen_ai.input.messages</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">messages.@reverse.0.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">as_separate_log_field</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">rule</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">append</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gen_ai.input.messages</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.delta.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_streaming_body</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">as_separate_log_field</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">answer</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">gen_ai.input.messages</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">choices.0.message.content</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_body</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">ai-route-higress-qwen-max.internal</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  - config:\x7F      attributes:\x7F      - apply_to_log: true\x7F        default_value: unknown\x7F        key: consumer\x7F        value: x-mse-consumer\x7F        value_source: request_header\x7F      - apply_to_log: true\x7F        key: fallback_from\x7F        value: x-higress-fallback-from\x7F        value_source: request_header\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        as_separate_log_field: true\x7F        key: question\x7F        trace_span_key: gen_ai.input.messages\x7F        value: messages.@reverse.0.content\x7F        value_source: request_body\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        as_separate_log_field: true\x7F        key: answer\x7F        rule: append\x7F        trace_span_key: gen_ai.input.messages\x7F        value: choices.0.delta.content\x7F        value_source: response_streaming_body\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        as_separate_log_field: true\x7F        key: answer\x7F        trace_span_key: gen_ai.input.messages\x7F        value: choices.0.message.content\x7F        value_source: response_body\x7F    configDisable: false\x7F    ingress:\x7F    - ai-route-higress-qwen-max.internal"><div></div></button></div></figure></div>
<h3 id="mcp-dashboard">MCP Dashboard</h3>
<p>Example <code dir="auto">ai-statistics</code> plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">attributes</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_version</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-version</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">network.protocol.version</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-id</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">rpc.jsonrpc.request_id</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_method</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-method</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp.method.name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_params</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-params</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp.arguments</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">jsonrpc_result</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-jsonrpc-result</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">attribute_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tool.name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">trace_span_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp.tool.name</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">apply_to_span</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">attribute_key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">tool.parameters</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_arguments</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-arguments</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_response</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-response</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_header</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">apply_to_log</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">mcp_tool_error</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">x-envoy-mcp-tool-error</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">value_source</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response_header</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">mcp-server-travel.internal</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="  - config:\x7F      attributes:\x7F      - apply_to_log: true\x7F        key: jsonrpc_version\x7F        value: x-envoy-jsonrpc-version\x7F        value_source: request_header\x7F        trace_span_key: network.protocol.version\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_id\x7F        value: x-envoy-jsonrpc-id\x7F        value_source: request_header\x7F        trace_span_key: rpc.jsonrpc.request_id\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_method\x7F        value: x-envoy-jsonrpc-method\x7F        value_source: request_header\x7F        trace_span_key: mcp.method.name\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_params\x7F        value: x-envoy-jsonrpc-params\x7F        value_source: request_header\x7F        trace_span_key: mcp.arguments\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        key: jsonrpc_result\x7F        value: x-envoy-jsonrpc-result\x7F        value_source: response_header\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        attribute_key: tool.name\x7F        key: mcp_tool_name\x7F        value: x-envoy-mcp-tool-name\x7F        value_source: request_header\x7F        trace_span_key: mcp.tool.name\x7F        apply_to_span: true\x7F      - apply_to_log: true\x7F        apply_to_span: true\x7F        attribute_key: tool.parameters\x7F        key: mcp_tool_arguments\x7F        value: x-envoy-mcp-tool-arguments\x7F        value_source: request_header\x7F      - apply_to_log: true\x7F        key: mcp_tool_response\x7F        value: x-envoy-mcp-tool-response\x7F        value_source: response_header\x7F      - apply_to_log: true\x7F        key: mcp_tool_error\x7F        value: x-envoy-mcp-tool-error\x7F        value_source: response_header\x7F    configDisable: false\x7F    ingress:\x7F    - mcp-server-travel.internal"><div></div></button></div></figure></div>
<p>Example <code dir="auto">pre-request</code> plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">pre-request.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">himarket-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Always</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">stage</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">request</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">mcp-server-travel.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  annotations:\x7F  name: pre-request.internal\x7F  namespace: himarket-system\x7Fspec:\x7F  imagePullPolicy: Always\x7F  matchRules:\x7F  - config:\x7F      stage: request\x7F    configDisable: false\x7F    ingress:\x7F    - mcp-server-travel.internal\x7F  phase: AUTHN\x7F  priority: 1000\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0"><div></div></button></div></figure></div>
<p>Example <code dir="auto">pre-response</code> plugin configuration:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">annotations</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">pre-response.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">himarket-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">imagePullPolicy</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Always</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">stage</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">response</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">configDisable</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">false</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">mcp-server-travel.internal</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  annotations:\x7F  name: pre-response.internal\x7F  namespace: himarket-system\x7Fspec:\x7F  imagePullPolicy: Always\x7F  matchRules:\x7F  - config:\x7F      stage: response\x7F    configDisable: false\x7F    ingress:\x7F    - mcp-server-travel.internal\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 1000\x7F  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0"><div></div></button></div></figure></div>
<p>Plugin Priority Adjustment:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">pre-request(json-converter)</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">key-auth</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">310</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ai-statistics</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AUTHN</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">100</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">pre-response(json-converter)</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1000</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">mcp-server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">999</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">ai-security-guard</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">phase</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">UNSPECIFIED_PHASE</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">850</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="pre-request(json-converter):\x7F  phase: AUTHN\x7F  priority: 1000\x7F\x7Fkey-auth:\x7F  phase: AUTHN\x7F  priority: 310\x7F\x7Fai-statistics:\x7F  phase: AUTHN\x7F  priority: 100\x7F\x7Fpre-response(json-converter):\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 1000\x7F\x7Fmcp-server:\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 999\x7F\x7Fai-security-guard:\x7F  phase: UNSPECIFIED_PHASE\x7F  priority: 850"><div></div></button></div></figure></div>
<h2 id="preset-scenario-descriptions">Preset Scenario Descriptions</h2>
<p>HiMarket has a rich set of built-in preset query scenarios, covering the Model Dashboard, MCP Dashboard, and more:</p>
<h3 id="card-type-card">Card Type (CARD)</h3>


















































<table><thead><tr><th>Scenario ID</th><th>Description</th><th>Applicable Dashboard</th></tr></thead><tbody><tr><td><code dir="auto">pv</code></td><td>Total request count</td><td>Model, MCP</td></tr><tr><td><code dir="auto">uv</code></td><td>Unique caller count</td><td>Model, MCP</td></tr><tr><td><code dir="auto">fallback_count</code></td><td>Fallback request count</td><td>Model</td></tr><tr><td><code dir="auto">bytes_received</code></td><td>Gateway inbound traffic (MB)</td><td>MCP</td></tr><tr><td><code dir="auto">bytes_sent</code></td><td>Gateway outbound traffic (MB)</td><td>MCP</td></tr><tr><td><code dir="auto">input_token_total</code></td><td>Total input tokens</td><td>Model</td></tr><tr><td><code dir="auto">output_token_total</code></td><td>Total output tokens</td><td>Model</td></tr><tr><td><code dir="auto">token_total</code></td><td>Total tokens</td><td>Model</td></tr></tbody></table>
<h3 id="line-chart-type-line">Line Chart Type (LINE)</h3>































































































<table><thead><tr><th>Scenario ID</th><th>Description</th><th>Applicable Dashboard</th></tr></thead><tbody><tr><td><code dir="auto">qps_stream</code></td><td>Streaming QPS</td><td>Model</td></tr><tr><td><code dir="auto">qps_normal</code></td><td>Non-streaming QPS</td><td>Model</td></tr><tr><td><code dir="auto">qps_total</code></td><td>Overall QPS</td><td>Model</td></tr><tr><td><code dir="auto">success_rate</code></td><td>Request success rate</td><td>Model, MCP</td></tr><tr><td><code dir="auto">token_per_sec_input</code></td><td>Input Tokens/s</td><td>Model</td></tr><tr><td><code dir="auto">token_per_sec_output</code></td><td>Output Tokens/s</td><td>Model</td></tr><tr><td><code dir="auto">token_per_sec_total</code></td><td>Total Tokens/s</td><td>Model</td></tr><tr><td><code dir="auto">rt_avg_total</code></td><td>Average response time (overall)</td><td>Model</td></tr><tr><td><code dir="auto">rt_avg_stream</code></td><td>Average response time (streaming)</td><td>Model</td></tr><tr><td><code dir="auto">rt_avg_normal</code></td><td>Average response time (non-streaming)</td><td>Model</td></tr><tr><td><code dir="auto">rt_first_token</code></td><td>Time to first token</td><td>Model</td></tr><tr><td><code dir="auto">cache_hit/miss/skip</code></td><td>Cache hit/miss/skip</td><td>Model</td></tr><tr><td><code dir="auto">ratelimited_per_sec</code></td><td>Rate-limited requests/s</td><td>Model</td></tr><tr><td><code dir="auto">qps_by_status</code></td><td>QPS grouped by status code</td><td>MCP</td></tr><tr><td><code dir="auto">qps_total_simple</code></td><td>Total QPS</td><td>MCP</td></tr><tr><td><code dir="auto">rt_avg</code></td><td>Average response time</td><td>MCP</td></tr><tr><td><code dir="auto">rt_p99/p95/p90/p50</code></td><td>P99/P95/P90/P50 response time</td><td>MCP</td></tr></tbody></table>
<h3 id="table-type-table">Table Type (TABLE)</h3>

































































<table><thead><tr><th>Scenario ID</th><th>Description</th><th>Applicable Dashboard</th></tr></thead><tbody><tr><td><code dir="auto">model_token_table</code></td><td>Model token usage statistics</td><td>Model</td></tr><tr><td><code dir="auto">consumer_token_table</code></td><td>Consumer token usage statistics</td><td>Model</td></tr><tr><td><code dir="auto">service_token_table</code></td><td>Service token usage statistics</td><td>Model</td></tr><tr><td><code dir="auto">error_requests_table</code></td><td>Error request statistics</td><td>Model</td></tr><tr><td><code dir="auto">ratelimited_consumer_table</code></td><td>Rate-limited consumer statistics</td><td>Model</td></tr><tr><td><code dir="auto">risk_label_table</code></td><td>Risk type statistics</td><td>Model</td></tr><tr><td><code dir="auto">risk_consumer_table</code></td><td>Risk consumer statistics</td><td>Model</td></tr><tr><td><code dir="auto">method_distribution</code></td><td>Method distribution</td><td>MCP</td></tr><tr><td><code dir="auto">gateway_status_distribution</code></td><td>Gateway status code distribution</td><td>MCP</td></tr><tr><td><code dir="auto">backend_status_distribution</code></td><td>Backend status code distribution</td><td>MCP</td></tr><tr><td><code dir="auto">request_distribution</code></td><td>Request distribution</td><td>MCP</td></tr></tbody></table>
<h3 id="filter-option-scenarios-table">Filter Option Scenarios (TABLE)</h3>





































<table><thead><tr><th>Scenario ID</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">filter_service_options</code></td><td>Instance list</td></tr><tr><td><code dir="auto">filter_api_options</code></td><td>API list</td></tr><tr><td><code dir="auto">filter_model_options</code></td><td>Model list</td></tr><tr><td><code dir="auto">filter_route_options</code></td><td>Route list</td></tr><tr><td><code dir="auto">filter_consumer_options</code></td><td>Consumer list</td></tr><tr><td><code dir="auto">filter_upstream_options</code></td><td>Upstream service list</td></tr><tr><td><code dir="auto">filter_mcp_tool_options</code></td><td>MCP tool name list</td></tr></tbody></table>
<h2 id="troubleshooting">Troubleshooting</h2>
<h3 id="problem-1-api-returns-empty-data">Problem 1: API returns empty data</h3>
<p><strong>Cause Analysis:</strong></p>
<ul>
<li>SLS is not configured (<code dir="auto">endpoint</code> is empty).</li>
<li>The Project or Logstore does not exist.</li>
<li>There is no log data within the specified time range.</li>
<li>Incorrect authentication information.</li>
</ul>
<p><strong>Solution:</strong></p>
<ol>
<li>Check if the configuration file or environment variables are set correctly.</li>
<li>Review the application logs to confirm the SLS configuration loading status.</li>
<li>Log in to the SLS console to confirm that the Project and Logstore exist.</li>
<li>Use the SLS console to run a query and verify that data exists.</li>
<li>Verify that the AccessKey has read permissions for SLS.</li>
</ol>
<h3 id="problem-2-query-timeout">Problem 2: Query timeout</h3>
<p><strong>Cause Analysis:</strong></p>
<ul>
<li>The time range is too large.</li>
<li>The volume of logs is too large.</li>
<li>Indexes are not configured or are improperly configured.</li>
</ul>
<p><strong>Solution:</strong></p>
<ol>
<li>Narrow the query time range.</li>
<li>Configure indexes for the Logstore in the SLS console.</li>
<li>Use preset scenarios instead of complex custom queries.</li>
<li>Increase the <code dir="auto">interval</code> parameter to reduce the number of data points.</li>
</ol>
<h3 id="problem-3-query-results-do-not-match-expectations">Problem 3: Query results do not match expectations</h3>
<p><strong>Cause Analysis:</strong></p>
<ul>
<li>Log field mappings do not match.</li>
<li>Incorrect index configuration.</li>
<li>SQL syntax error.</li>
</ul>
<p><strong>Solution:</strong></p>
<ol>
<li>Confirm that the log field names match those in the preset SQL.</li>
<li>Check if JSON fields (like <code dir="auto">ai_log</code>) have JSON indexing enabled.</li>
<li>Check the application logs to see the actual SQL being executed.</li>
<li>Manually execute the SQL in the SLS console to verify.</li>
</ol>
<h3 id="problem-4-authentication-failed">Problem 4: Authentication failed</h3>
<p><strong>Error Log:</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">LogException: AccessKeyId is required</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client\x7FLogException: AccessKeyId is required"><div></div></button></div></figure></div>
<p><strong>Solution:</strong></p>
<ol>
<li>Confirm that the environment variables are set correctly.</li>
<li>Confirm that <code dir="auto">auth-type</code> is set to <code dir="auto">AK_SK</code>.</li>
<li>Confirm that the AccessKey ID and Secret are correct.</li>
<li>Confirm that the AccessKey has not been disabled or expired.</li>
</ol>
<h2 id="best-practices">Best Practices</h2>
<h3 id="1-security">1. Security</h3>
<ul>
<li><strong>Do not</strong> write AccessKeys directly into configuration files.</li>
<li><strong>Use</strong> environment variables or Kubernetes Secrets to manage sensitive information.</li>
<li><strong>Rotate</strong> your AccessKeys periodically.</li>
<li><strong>Follow</strong> the principle of least privilege; grant only SLS read permissions.</li>
</ul>
<h3 id="2-performance-optimization">2. Performance Optimization</h3>
<ul>
<li><strong>Set</strong> a reasonable query time range; avoid querying more than 7 days at once.</li>
<li><strong>Configure indexes</strong> to improve query performance.</li>
<li><strong>Use preset scenarios</strong> instead of complex custom queries.</li>
<li><strong>Increase the interval</strong> to reduce data points in time-series charts.</li>
</ul>
<h3 id="3-cost-control">3. Cost Control</h3>
<ul>
<li>Configure the Logstore storage period according to your needs.</li>
<li>Set up log collection rules reasonably to avoid collecting unnecessary logs.</li>
<li>Use SLS\u2019s data life-cycle management features.</li>
</ul>
<h3 id="4-monitoring-and-alerting">4. Monitoring and Alerting</h3>
<ul>
<li>Configure alerts for query exceptions in the SLS console.</li>
<li>Monitor HiMarket application logs for SLS-related errors.</li>
<li>Periodically check SLS usage and costs.</li>
</ul>
<h2 id="configuration-examples">Configuration Examples</h2>
<h3 id="complete-configuration-for-development-environment">Complete Configuration for Development Environment</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">cn-hangzhou.log.aliyuncs.com</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">auth-type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">AK_SK</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">LTAI5tXXXXXXXXXXXXXX</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">YourAccessKeySecretHere</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-project</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev-apigateway</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-logstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dev-access-log</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">aliyun-log-config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apigateway-system</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">cr-name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apigateway-access-log</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  endpoint: cn-hangzhou.log.aliyuncs.com\x7F  auth-type: AK_SK\x7F  access-key-id: LTAI5tXXXXXXXXXXXXXX\x7F  access-key-secret: YourAccessKeySecretHere\x7F  default-project: dev-apigateway\x7F  default-logstore: dev-access-log\x7F  aliyun-log-config:\x7F    namespace: apigateway-system\x7F    cr-name: apigateway-access-log"><div></div></button></div></figure></div>
<h3 id="production-environment-configuration-using-environment-variables">Production Environment Configuration (Using Environment Variables)</h3>
<p><strong>application.yml:</strong></p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">sls</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ENDPOINT:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">auth-type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_AUTH_TYPE:AK_SK}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-id</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_ID:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">access-key-secret</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_ACCESS_KEY_SECRET:}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-project</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_PROJECT:prod-apigateway}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">default-logstore</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${SLS_DEFAULT_LOGSTORE:prod-access-log}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sls:\x7F  endpoint: \${SLS_ENDPOINT:}\x7F  auth-type: \${SLS_AUTH_TYPE:AK_SK}\x7F  access-key-id: \${SLS_ACCESS_KEY_ID:}\x7F  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}\x7F  default-project: \${SLS_DEFAULT_PROJECT:prod-apigateway}\x7F  default-logstore: \${SLS_DEFAULT_LOGSTORE:prod-access-log}"><div></div></button></div></figure></div>
<p><strong>Environment Variables:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ENDPOINT</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"cn-beijing.log.aliyuncs.com"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_AUTH_TYPE</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"AK_SK"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_ID</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"LTAI5tProdXXXXXXXXXX"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> SLS_ACCESS_KEY_SECRET</span><span style="--0:#F97583">=</span><span style="--0:#9ECBFF">"ProdAccessKeySecretHere"</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export SLS_ENDPOINT=&#x22;cn-beijing.log.aliyuncs.com&#x22;\x7Fexport SLS_AUTH_TYPE=&#x22;AK_SK&#x22;\x7Fexport SLS_ACCESS_KEY_ID=&#x22;LTAI5tProdXXXXXXXXXX&#x22;\x7Fexport SLS_ACCESS_KEY_SECRET=&#x22;ProdAccessKeySecretHere&#x22;"><div></div></button></div></figure></div>
<h2 id="appendix">Appendix</h2>
<h3 id="a-sls-region-endpoint-list">A. SLS Region Endpoint List</h3>





































<table><thead><tr><th>Region</th><th>Endpoint</th></tr></thead><tbody><tr><td>China (Hangzhou)</td><td>cn-hangzhou.log.aliyuncs.com</td></tr><tr><td>China (Shanghai)</td><td>cn-shanghai.log.aliyuncs.com</td></tr><tr><td>China (Qingdao)</td><td>cn-qingdao.log.aliyuncs.com</td></tr><tr><td>China (Beijing)</td><td>cn-beijing.log.aliyuncs.com</td></tr><tr><td>China (Zhangjiakou)</td><td>cn-zhangjiakou.log.aliyuncs.com</td></tr><tr><td>China (Shenzhen)</td><td>cn-shenzhen.log.aliyuncs.com</td></tr><tr><td>China (Chengdu)</td><td>cn-chengdu.log.aliyuncs.com</td></tr></tbody></table>
<p>For more regions, please refer to: <a href="https://www.alibabacloud.com/help/en/log-service/latest/service-endpoints" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.alibabacloud.com/help/en/log-service/latest/service-endpoints</a></p>
<h3 id="b-complete-list-of-configuration-parameters">B. Complete List of Configuration Parameters</h3>




































































<table><thead><tr><th>Parameter</th><th>Type</th><th>Required</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td><code dir="auto">endpoint</code></td><td>String</td><td>Yes</td><td>-</td><td>SLS service endpoint</td></tr><tr><td><code dir="auto">auth-type</code></td><td>Enum</td><td>No</td><td><code dir="auto">AK_SK</code></td><td>Authentication type: <code dir="auto">AK_SK</code></td></tr><tr><td><code dir="auto">access-key-id</code></td><td>String</td><td>Conditional</td><td>-</td><td>AccessKey ID (required when <code dir="auto">auth-type</code> is <code dir="auto">AK_SK</code>)</td></tr><tr><td><code dir="auto">access-key-secret</code></td><td>String</td><td>Conditional</td><td>-</td><td>AccessKey Secret (required when <code dir="auto">auth-type</code> is <code dir="auto">AK_SK</code>)</td></tr><tr><td><code dir="auto">default-project</code></td><td>String</td><td>Yes</td><td>-</td><td>Default Project name</td></tr><tr><td><code dir="auto">default-logstore</code></td><td>String</td><td>Yes</td><td>-</td><td>Default Logstore name</td></tr><tr><td><code dir="auto">aliyun-log-config.namespace</code></td><td>String</td><td>No</td><td><code dir="auto">apigateway-system</code></td><td>Namespace of the AliyunLogConfig CR</td></tr><tr><td><code dir="auto">aliyun-log-config.cr-name</code></td><td>String</td><td>No</td><td><code dir="auto">apigateway-access-log</code></td><td>Name of the AliyunLogConfig CR</td></tr></tbody></table>
<h2 id="related-links">Related Links</h2>
<ul>
<li><a href="https://www.alibabacloud.com/help/en/log-service/latest/product-overview" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba Cloud SLS Official Documentation</a></li>
<li><a href="https://www.alibabacloud.com/help/en/log-service/latest/sql-syntax-and-functions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">SLS SQL Syntax Reference</a></li>
</ul>`,t={title:"HiMarket Observability Dashboard User Guide",description:"A user guide for the HiMarket Observability Dashboard.",date:"2025-12-24",category:"article",keywords:["HiMarket","Observability","Metering"],authors:"Higress Team"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/himarket/himarket-statistics.md",n=void 0,p=function(){return`
# HiMarket Observability Dashboard User Guide

## Introduction

HiMarket integrates with Alibaba Cloud's Log Service (SLS) to provide observability capabilities, supporting metric aggregation, chart display, and log retrieval based on access logs. This guide will walk you through configuring the SLS observability feature.

The HiMarket observability module relies on SLS and does not yet have an open-source implementation. It currently works under the following conditions:

- Using a commercial Alibaba Cloud AI Gateway (Alibaba Cloud AI Gateway or Apsara Enterprise Edition), simply enable SLS log delivery (out-of-the-box).
- Using open-source Higress, by configuring the \`ai-statistics\` plugin and log collection to deliver logs to Alibaba Cloud SLS.

## Feature Overview

- **Observability Dashboard**: Statistics for model calls, MCP tool calls, request success rates, response times, etc.
- **Log Query**: Supports custom SQL queries for access logs.
- **Authentication**: Supports AK/SK authentication. STS support is planned.
- **Automatic Fallback**: Automatically returns empty data when SLS is not configured, ensuring the system continues to run normally.

## Configuration Steps

- If you are using open-source Higress, you need to perform the following configuration.
- If you are using a commercial Alibaba Cloud AI Gateway (Alibaba Cloud/Apsara Enterprise Edition), you do not need to perform the following steps; just enable log delivery.

### Step 1: Prepare SLS Resources

Before you begin, you need to prepare the following resources in the Alibaba Cloud SLS console:

#### 1.1 Create a Project and Logstore

1.  Log in to the [Alibaba Cloud SLS Console](https://sls.console.aliyun.com/).
2.  Create a Project (e.g., \`apigateway-csb-cop\`).
3.  Create a Logstore within the Project (e.g., \`apig-access-log\`).

#### 1.2 Configure Log Collection (Taking Docker as an example)

Collect the gateway's access logs into the Logstore created above. It is recommended to use Higress version 2.1.9 or later, as its \`accesslogformat\` has been optimized for the HiMarket observability dashboard.

Confirm that Higress is deployed successfully using all-in-one deployment.

![docker ps](https://image.cnkirito.cn/image-20260119103948203.png)

Confirm that logs are outputting correctly. Higress deployed via Docker outputs logs to \`/var/log/higress/gateway.log\`. You can view the log output directly on the host using \`docker exec higress tail -n 10 /var/log/higress/gateway.log\`.

![](https://image.cnkirito.cn/image-20260119105302742.png)

In a normal AI request, the \`ai_log\` field should contain a JSON object.

AI-related fields (JSON formatted \`ai_log\` field):

- \`model\`: Model name
- \`api\`: API name
- \`input_token\`: Number of input tokens
- \`output_token\`: Number of output tokens
- \`response_type\`: Response type (stream/normal)
- \`llm_service_duration\`: LLM service duration
- \`cache_status\`: Cache status (hit/miss/skip)
- \`token_ratelimit_status\`: Rate limit status
- \`mcp_tool_name\`: MCP tool name

After confirming that the log output is normal, you can refer to the SLS official documentation to configure Docker or K8s collection. For Higress deployed via Docker, refer to this document: https://help.aliyun.com/zh/sls/collect-docker-container-text-logs. The most critical steps are installing LoongCollector and Logtail, and configuring the collection for the \`/var/log/higress/gateway.log\` file. Since there are many logs and they need to support subsequent observability queries, you also need to configure the relevant SLS processing plugins.

![Plugin configuration](https://image.cnkirito.cn/image-20260119110357227.png)

![](https://image.cnkirito.cn/image-20260119110436918.png)

![](https://image.cnkirito.cn/image-20260119110501783.png)

If the collection is successful, you should see detailed logs in the logstore, as shown below:

![sls log](https://image.cnkirito.cn/image-20260119110122535.png)

#### 1.3 Configure Indexes

The current version of HiMarket does not provide an automatic index update interface. You need to create indexes in the SLS console manually.

- **Text Fields**: \`method\`, \`consumer\`, \`route_name\`, \`upstream_cluster\`, etc.
- **Numeric Fields**: \`duration\`, \`bytes_received\`, \`bytes_sent\`, \`response_code\`, etc.
- **JSON Field**: \`ai_log\` (Enable JSON indexing, including the AI-related fields listed above).

It is recommended to automatically build indexes based on the logs obtained in the SLS Query and Analysis properties after you have some raw data:

![](https://image.cnkirito.cn/image-20260119110750641.png)

Key steps:

- Configure the \`ai_log\` type as \`json\`.
- Enable statistics for all fields, including the attribute fields of \`ai_log\`, otherwise it will affect subsequent observability.

#### 1.4 Obtain Authentication Credentials

Prepare AK/SK authentication credentials:

**AK/SK (Recommended for development/testing environments)**

1.  Log in to the Alibaba Cloud console.
2.  Go to the AccessKey Management page.
3.  Create or obtain an AccessKey ID and AccessKey Secret.
4.  Ensure this AccessKey has read permissions for SLS.

### Step 2: Configure HiMarket

#### 2.1 Modify the Configuration File

Edit \`himarket-bootstrap/src/main/resources/application.yml\`:

\`\`\`yaml
sls:
  # SLS service endpoint (Required)
  # Format: <region-id>.log.aliyuncs.com
  # e.g., cn-hangzhou.log.aliyuncs.com, cn-beijing.log.aliyuncs.com
  endpoint: \${SLS_ENDPOINT:}
  
  # Authentication type: AK_SK
  auth-type: \${SLS_AUTH_TYPE:AK_SK}
  
  # Keys for AK/SK authentication
  access-key-id: \${SLS_ACCESS_KEY_ID:}
  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}
  
  # Default Project name
  default-project: \${SLS_DEFAULT_PROJECT:apigateway-csb-cop}
  
  # Default Logstore name
  default-logstore: \${SLS_DEFAULT_LOGSTORE:apig-access-log}
  
  # AliyunLogConfig CR configuration (for K8s environments)
  aliyun-log-config:
    # Namespace where the CR is located
    namespace: \${SLS_ALIYUN_LOG_CONFIG_NAMESPACE:apigateway-system}
    # Name of the CR
    cr-name: \${SLS_ALIYUN_LOG_CONFIG_CR_NAME:apigateway-access-log}
\`\`\`

#### 2.2 Configure Using Environment Variables (Recommended)

For security reasons, it is recommended to pass sensitive information via environment variables instead of writing them directly into the configuration file:

**Linux/macOS:**
\`\`\`bash
export SLS_ENDPOINT="cn-hangzhou.log.aliyuncs.com"
export SLS_AUTH_TYPE="AK_SK"
export SLS_ACCESS_KEY_ID="your-access-key-id"
export SLS_ACCESS_KEY_SECRET="your-access-key-secret"
export SLS_DEFAULT_PROJECT="apigateway-csb-cop"
export SLS_DEFAULT_LOGSTORE="apig-access-log"
\`\`\`

**Windows:**
\`\`\`cmd
set SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com
set SLS_AUTH_TYPE=AK_SK
set SLS_ACCESS_KEY_ID=your-access-key-id
set SLS_ACCESS_KEY_SECRET=your-access-key-secret
set SLS_DEFAULT_PROJECT=apigateway-csb-cop
set SLS_DEFAULT_LOGSTORE=apig-access-log
\`\`\`

**Docker Deployment:**

Edit \`deploy/docker/docker-compose.yml\`:

\`\`\`yaml
services:
  himarket-server:
    environment:
      - SLS_ENDPOINT=cn-hangzhou.log.aliyuncs.com
      - SLS_AUTH_TYPE=AK_SK
      - SLS_ACCESS_KEY_ID=your-access-key-id
      - SLS_ACCESS_KEY_SECRET=your-access-key-secret
      - SLS_DEFAULT_PROJECT=apigateway-csb-cop
      - SLS_DEFAULT_LOGSTORE=apig-access-log
\`\`\`

**Kubernetes Deployment:**

Edit \`deploy/helm/values.yaml\`:

\`\`\`yaml
sls:
  endpoint: "cn-hangzhou.log.aliyuncs.com"
  authType: "AK_SK"
  accessKeyId: "your-access-key-id"
  accessKeySecret: "your-access-key-secret"
  defaultProject: "apigateway-csb-cop"
  defaultLogstore: "apig-access-log"
\`\`\`

### Step 3: Start and Verify

#### 3.1 Start HiMarket

\`\`\`bash
# Development environment
mvn clean install
cd himarket-bootstrap
mvn spring-boot:run

# Production environment
java -jar himarket-bootstrap/target/himarket-bootstrap.jar
\`\`\`

#### 3.2 Check Configuration Status

After startup, check the logs to confirm that the SLS configuration has been loaded successfully:

\`\`\`
INFO  c.a.h.config.SlsConfig - SLS endpoint configured: cn-hangzhou.log.aliyuncs.com
INFO  c.a.h.config.SlsConfig - SLS auth type: AK_SK
INFO  c.a.h.config.SlsConfig - SLS default project: apigateway-csb-cop
INFO  c.a.h.config.SlsConfig - SLS default logstore: apig-access-log
\`\`\`

## Higress Plugin Configuration

### Model Dashboard

Example \`ai-statistics\` plugin configuration:

\`\`\`yaml
  - config:
      attributes:
      - apply_to_log: true
        default_value: unknown
        key: consumer
        value: x-mse-consumer
        value_source: request_header
      - apply_to_log: true
        key: fallback_from
        value: x-higress-fallback-from
        value_source: request_header
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: question
        trace_span_key: gen_ai.input.messages
        value: messages.@reverse.0.content
        value_source: request_body
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: answer
        rule: append
        trace_span_key: gen_ai.input.messages
        value: choices.0.delta.content
        value_source: response_streaming_body
      - apply_to_log: true
        apply_to_span: true
        as_separate_log_field: true
        key: answer
        trace_span_key: gen_ai.input.messages
        value: choices.0.message.content
        value_source: response_body
    configDisable: false
    ingress:
    - ai-route-higress-qwen-max.internal
\`\`\`

### MCP Dashboard

Example \`ai-statistics\` plugin configuration:

\`\`\`yaml
  - config:
      attributes:
      - apply_to_log: true
        key: jsonrpc_version
        value: x-envoy-jsonrpc-version
        value_source: request_header
        trace_span_key: network.protocol.version
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_id
        value: x-envoy-jsonrpc-id
        value_source: request_header
        trace_span_key: rpc.jsonrpc.request_id
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_method
        value: x-envoy-jsonrpc-method
        value_source: request_header
        trace_span_key: mcp.method.name
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_params
        value: x-envoy-jsonrpc-params
        value_source: request_header
        trace_span_key: mcp.arguments
        apply_to_span: true
      - apply_to_log: true
        key: jsonrpc_result
        value: x-envoy-jsonrpc-result
        value_source: response_header
      - apply_to_log: true
        apply_to_span: true
        attribute_key: tool.name
        key: mcp_tool_name
        value: x-envoy-mcp-tool-name
        value_source: request_header
        trace_span_key: mcp.tool.name
        apply_to_span: true
      - apply_to_log: true
        apply_to_span: true
        attribute_key: tool.parameters
        key: mcp_tool_arguments
        value: x-envoy-mcp-tool-arguments
        value_source: request_header
      - apply_to_log: true
        key: mcp_tool_response
        value: x-envoy-mcp-tool-response
        value_source: response_header
      - apply_to_log: true
        key: mcp_tool_error
        value: x-envoy-mcp-tool-error
        value_source: response_header
    configDisable: false
    ingress:
    - mcp-server-travel.internal
\`\`\`

Example \`pre-request\` plugin configuration:

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  annotations:
  name: pre-request.internal
  namespace: himarket-system
spec:
  imagePullPolicy: Always
  matchRules:
  - config:
      stage: request
    configDisable: false
    ingress:
    - mcp-server-travel.internal
  phase: AUTHN
  priority: 1000
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0
\`\`\`

Example \`pre-response\` plugin configuration:

\`\`\`yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  annotations:
  name: pre-response.internal
  namespace: himarket-system
spec:
  imagePullPolicy: Always
  matchRules:
  - config:
      stage: response
    configDisable: false
    ingress:
    - mcp-server-travel.internal
  phase: UNSPECIFIED_PHASE
  priority: 1000
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/jsonrpc-converter:1.0.0
\`\`\`

Plugin Priority Adjustment:

\`\`\`yaml
pre-request(json-converter):
  phase: AUTHN
  priority: 1000
  
key-auth:
  phase: AUTHN
  priority: 310

ai-statistics:
  phase: AUTHN
  priority: 100

pre-response(json-converter):
  phase: UNSPECIFIED_PHASE
  priority: 1000

mcp-server:
  phase: UNSPECIFIED_PHASE
  priority: 999
  
ai-security-guard:
  phase: UNSPECIFIED_PHASE
  priority: 850
\`\`\`

## Preset Scenario Descriptions

HiMarket has a rich set of built-in preset query scenarios, covering the Model Dashboard, MCP Dashboard, and more:

### Card Type (CARD)

| Scenario ID | Description | Applicable Dashboard |
|---|---|---|
| \`pv\` | Total request count | Model, MCP |
| \`uv\` | Unique caller count | Model, MCP |
| \`fallback_count\` | Fallback request count | Model |
| \`bytes_received\` | Gateway inbound traffic (MB) | MCP |
| \`bytes_sent\` | Gateway outbound traffic (MB) | MCP |
| \`input_token_total\` | Total input tokens | Model |
| \`output_token_total\` | Total output tokens | Model |
| \`token_total\` | Total tokens | Model |

### Line Chart Type (LINE)

| Scenario ID | Description | Applicable Dashboard |
|---|---|---|
| \`qps_stream\` | Streaming QPS | Model |
| \`qps_normal\` | Non-streaming QPS | Model |
| \`qps_total\` | Overall QPS | Model |
| \`success_rate\` | Request success rate | Model, MCP |
| \`token_per_sec_input\` | Input Tokens/s | Model |
| \`token_per_sec_output\` | Output Tokens/s | Model |
| \`token_per_sec_total\` | Total Tokens/s | Model |
| \`rt_avg_total\` | Average response time (overall) | Model |
| \`rt_avg_stream\` | Average response time (streaming) | Model |
| \`rt_avg_normal\` | Average response time (non-streaming) | Model |
| \`rt_first_token\` | Time to first token | Model |
| \`cache_hit/miss/skip\` | Cache hit/miss/skip | Model |
| \`ratelimited_per_sec\` | Rate-limited requests/s | Model |
| \`qps_by_status\` | QPS grouped by status code | MCP |
| \`qps_total_simple\` | Total QPS | MCP |
| \`rt_avg\` | Average response time | MCP |
| \`rt_p99/p95/p90/p50\` | P99/P95/P90/P50 response time | MCP |

### Table Type (TABLE)

| Scenario ID | Description | Applicable Dashboard |
|---|---|---|
| \`model_token_table\` | Model token usage statistics | Model |
| \`consumer_token_table\` | Consumer token usage statistics | Model |
| \`service_token_table\` | Service token usage statistics | Model |
| \`error_requests_table\` | Error request statistics | Model |
| \`ratelimited_consumer_table\` | Rate-limited consumer statistics | Model |
| \`risk_label_table\` | Risk type statistics | Model |
| \`risk_consumer_table\` | Risk consumer statistics | Model |
| \`method_distribution\` | Method distribution | MCP |
| \`gateway_status_distribution\` | Gateway status code distribution | MCP |
| \`backend_status_distribution\` | Backend status code distribution | MCP |
| \`request_distribution\` | Request distribution | MCP |

### Filter Option Scenarios (TABLE)

| Scenario ID | Description |
|---|---|
| \`filter_service_options\` | Instance list |
| \`filter_api_options\` | API list |
| \`filter_model_options\` | Model list |
| \`filter_route_options\` | Route list |
| \`filter_consumer_options\` | Consumer list |
| \`filter_upstream_options\` | Upstream service list |
| \`filter_mcp_tool_options\` | MCP tool name list |

## Troubleshooting

### Problem 1: API returns empty data

**Cause Analysis:**
- SLS is not configured (\`endpoint\` is empty).
- The Project or Logstore does not exist.
- There is no log data within the specified time range.
- Incorrect authentication information.

**Solution:**
1.  Check if the configuration file or environment variables are set correctly.
2.  Review the application logs to confirm the SLS configuration loading status.
3.  Log in to the SLS console to confirm that the Project and Logstore exist.
4.  Use the SLS console to run a query and verify that data exists.
5.  Verify that the AccessKey has read permissions for SLS.

### Problem 2: Query timeout

**Cause Analysis:**
- The time range is too large.
- The volume of logs is too large.
- Indexes are not configured or are improperly configured.

**Solution:**
1.  Narrow the query time range.
2.  Configure indexes for the Logstore in the SLS console.
3.  Use preset scenarios instead of complex custom queries.
4.  Increase the \`interval\` parameter to reduce the number of data points.

### Problem 3: Query results do not match expectations

**Cause Analysis:**
- Log field mappings do not match.
- Incorrect index configuration.
- SQL syntax error.

**Solution:**
1.  Confirm that the log field names match those in the preset SQL.
2.  Check if JSON fields (like \`ai_log\`) have JSON indexing enabled.
3.  Check the application logs to see the actual SQL being executed.
4.  Manually execute the SQL in the SLS console to verify.

### Problem 4: Authentication failed

**Error Log:**
\`\`\`
ERROR c.a.h.s.g.f.SlsClientFactory - Failed to create SLS client
LogException: AccessKeyId is required
\`\`\`

**Solution:**
1.  Confirm that the environment variables are set correctly.
2.  Confirm that \`auth-type\` is set to \`AK_SK\`.
3.  Confirm that the AccessKey ID and Secret are correct.
4.  Confirm that the AccessKey has not been disabled or expired.

## Best Practices

### 1. Security

- **Do not** write AccessKeys directly into configuration files.
- **Use** environment variables or Kubernetes Secrets to manage sensitive information.
- **Rotate** your AccessKeys periodically.
- **Follow** the principle of least privilege; grant only SLS read permissions.

### 2. Performance Optimization

- **Set** a reasonable query time range; avoid querying more than 7 days at once.
- **Configure indexes** to improve query performance.
- **Use preset scenarios** instead of complex custom queries.
- **Increase the interval** to reduce data points in time-series charts.

### 3. Cost Control

- Configure the Logstore storage period according to your needs.
- Set up log collection rules reasonably to avoid collecting unnecessary logs.
- Use SLS's data life-cycle management features.

### 4. Monitoring and Alerting

- Configure alerts for query exceptions in the SLS console.
- Monitor HiMarket application logs for SLS-related errors.
- Periodically check SLS usage and costs.

## Configuration Examples

### Complete Configuration for Development Environment

\`\`\`yaml
sls:
  endpoint: cn-hangzhou.log.aliyuncs.com
  auth-type: AK_SK
  access-key-id: LTAI5tXXXXXXXXXXXXXX
  access-key-secret: YourAccessKeySecretHere
  default-project: dev-apigateway
  default-logstore: dev-access-log
  aliyun-log-config:
    namespace: apigateway-system
    cr-name: apigateway-access-log
\`\`\`

### Production Environment Configuration (Using Environment Variables)

**application.yml:**
\`\`\`yaml
sls:
  endpoint: \${SLS_ENDPOINT:}
  auth-type: \${SLS_AUTH_TYPE:AK_SK}
  access-key-id: \${SLS_ACCESS_KEY_ID:}
  access-key-secret: \${SLS_ACCESS_KEY_SECRET:}
  default-project: \${SLS_DEFAULT_PROJECT:prod-apigateway}
  default-logstore: \${SLS_DEFAULT_LOGSTORE:prod-access-log}
\`\`\`

**Environment Variables:**
\`\`\`bash
export SLS_ENDPOINT="cn-beijing.log.aliyuncs.com"
export SLS_AUTH_TYPE="AK_SK"
export SLS_ACCESS_KEY_ID="LTAI5tProdXXXXXXXXXX"
export SLS_ACCESS_KEY_SECRET="ProdAccessKeySecretHere"
\`\`\`

## Appendix

### A. SLS Region Endpoint List

| Region | Endpoint |
|---|---|
| China (Hangzhou) | cn-hangzhou.log.aliyuncs.com |
| China (Shanghai) | cn-shanghai.log.aliyuncs.com |
| China (Qingdao) | cn-qingdao.log.aliyuncs.com |
| China (Beijing) | cn-beijing.log.aliyuncs.com |
| China (Zhangjiakou) | cn-zhangjiakou.log.aliyuncs.com |
| China (Shenzhen) | cn-shenzhen.log.aliyuncs.com |
| China (Chengdu) | cn-chengdu.log.aliyuncs.com |

For more regions, please refer to: https://www.alibabacloud.com/help/en/log-service/latest/service-endpoints

### B. Complete List of Configuration Parameters

| Parameter | Type | Required | Default Value | Description |
|---|---|---|---|---|
| \`endpoint\` | String | Yes | - | SLS service endpoint |
| \`auth-type\` | Enum | No | \`AK_SK\` | Authentication type: \`AK_SK\` |
| \`access-key-id\` | String | Conditional | - | AccessKey ID (required when \`auth-type\` is \`AK_SK\`) |
| \`access-key-secret\` | String | Conditional | - | AccessKey Secret (required when \`auth-type\` is \`AK_SK\`) |
| \`default-project\` | String | Yes | - | Default Project name |
| \`default-logstore\` | String | Yes | - | Default Logstore name |
| \`aliyun-log-config.namespace\` | String | No | \`apigateway-system\` | Namespace of the AliyunLogConfig CR |
| \`aliyun-log-config.cr-name\` | String | No | \`apigateway-access-log\` | Name of the AliyunLogConfig CR |

## Related Links

- [Alibaba Cloud SLS Official Documentation](https://www.alibabacloud.com/help/en/log-service/latest/product-overview)
- [SLS SQL Syntax Reference](https://www.alibabacloud.com/help/en/log-service/latest/sql-syntax-and-functions)`},o=function(){return s},l=function(){return[{depth:2,slug:"introduction",text:"Introduction"},{depth:2,slug:"feature-overview",text:"Feature Overview"},{depth:2,slug:"configuration-steps",text:"Configuration Steps"},{depth:3,slug:"step-1-prepare-sls-resources",text:"Step 1: Prepare SLS Resources"},{depth:4,slug:"11-create-a-project-and-logstore",text:"1.1 Create a Project and Logstore"},{depth:4,slug:"12-configure-log-collection-taking-docker-as-an-example",text:"1.2 Configure Log Collection (Taking Docker as an example)"},{depth:4,slug:"13-configure-indexes",text:"1.3 Configure Indexes"},{depth:4,slug:"14-obtain-authentication-credentials",text:"1.4 Obtain Authentication Credentials"},{depth:3,slug:"step-2-configure-himarket",text:"Step 2: Configure HiMarket"},{depth:4,slug:"21-modify-the-configuration-file",text:"2.1 Modify the Configuration File"},{depth:4,slug:"22-configure-using-environment-variables-recommended",text:"2.2 Configure Using Environment Variables (Recommended)"},{depth:3,slug:"step-3-start-and-verify",text:"Step 3: Start and Verify"},{depth:4,slug:"31-start-himarket",text:"3.1 Start HiMarket"},{depth:4,slug:"32-check-configuration-status",text:"3.2 Check Configuration Status"},{depth:2,slug:"higress-plugin-configuration",text:"Higress Plugin Configuration"},{depth:3,slug:"model-dashboard",text:"Model Dashboard"},{depth:3,slug:"mcp-dashboard",text:"MCP Dashboard"},{depth:2,slug:"preset-scenario-descriptions",text:"Preset Scenario Descriptions"},{depth:3,slug:"card-type-card",text:"Card Type (CARD)"},{depth:3,slug:"line-chart-type-line",text:"Line Chart Type (LINE)"},{depth:3,slug:"table-type-table",text:"Table Type (TABLE)"},{depth:3,slug:"filter-option-scenarios-table",text:"Filter Option Scenarios (TABLE)"},{depth:2,slug:"troubleshooting",text:"Troubleshooting"},{depth:3,slug:"problem-1-api-returns-empty-data",text:"Problem 1: API returns empty data"},{depth:3,slug:"problem-2-query-timeout",text:"Problem 2: Query timeout"},{depth:3,slug:"problem-3-query-results-do-not-match-expectations",text:"Problem 3: Query results do not match expectations"},{depth:3,slug:"problem-4-authentication-failed",text:"Problem 4: Authentication failed"},{depth:2,slug:"best-practices",text:"Best Practices"},{depth:3,slug:"1-security",text:"1. Security"},{depth:3,slug:"2-performance-optimization",text:"2. Performance Optimization"},{depth:3,slug:"3-cost-control",text:"3. Cost Control"},{depth:3,slug:"4-monitoring-and-alerting",text:"4. Monitoring and Alerting"},{depth:2,slug:"configuration-examples",text:"Configuration Examples"},{depth:3,slug:"complete-configuration-for-development-environment",text:"Complete Configuration for Development Environment"},{depth:3,slug:"production-environment-configuration-using-environment-variables",text:"Production Environment Configuration (Using Environment Variables)"},{depth:2,slug:"appendix",text:"Appendix"},{depth:3,slug:"a-sls-region-endpoint-list",text:"A. SLS Region Endpoint List"},{depth:3,slug:"b-complete-list-of-configuration-parameters",text:"B. Complete List of Configuration Parameters"},{depth:2,slug:"related-links",text:"Related Links"}]},e=d((_,h,f)=>{const{layout:m,...i}=t;return i.file=a,i.url=n,r`${y()}${u(s)}`})});export{e as Content,g as __tla,o as compiledContent,e as default,a as file,t as frontmatter,l as getHeadings,p as rawContent,n as url};
