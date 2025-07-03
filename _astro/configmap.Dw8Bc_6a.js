import{c as l,__tla as c}from"./astro-component.m4CCZO6J.js";import{r as p,m,u as g,__tla as u}from"./constant.B6p3iceL.js";import{__tla as f}from"./astro/assets-service.BhtN0nM5.js";let t,d,s,n,o,r,i,y=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="common-global-configuration">Common Global Configuration</h2>
<p>Higress global configuration ConfigMap object higress-config adds a higress item, reference configuration as follows:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">tracing:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sampling: 100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">timeout: 500</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">skywalking:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">service: skywalking-oap-server.op-system.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">port: 11800</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">gzip:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">minContentLength: 1024</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">contentType:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- text/html</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- application/json</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- text/css</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- application/javascript</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- application/xhtml+xml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- image/svg+xml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">disableOnEtagHeader: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">memoryLevel: 5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">windowBits: 12</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">chunkSize: 4096</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">compressionLevel: BEST_COMPRESSION</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">compressionStrategy: DEFAULT_STRATEGY</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">addXRealIpHeader: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">disableXEnvoyHeaders: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">downstream:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">connectionBufferLimits: 32768</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">http2:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">initialConnectionWindowSize: 1048576</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">initialStreamWindowSize: 65535</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">maxConcurrentStreams: 100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">idleTimeout: 180</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">maxRequestHeadersKb: 60</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">upstream:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">connectionBufferLimits: 1048576</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">idleTimeout: 10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  higress: |-\x7F    tracing:\x7F      enable: true\x7F      sampling: 100\x7F      timeout: 500\x7F      skywalking:\x7F        service: skywalking-oap-server.op-system.svc.cluster.local\x7F        port: 11800\x7F    gzip:\x7F      enable: false\x7F      minContentLength: 1024\x7F      contentType:\x7F        - text/html\x7F        - application/json\x7F        - text/css\x7F        - application/javascript\x7F        - application/xhtml+xml\x7F        - image/svg+xml\x7F      disableOnEtagHeader: true\x7F      memoryLevel: 5\x7F      windowBits: 12\x7F      chunkSize: 4096\x7F      compressionLevel: BEST_COMPRESSION\x7F      compressionStrategy: DEFAULT_STRATEGY\x7F    addXRealIpHeader: false\x7F    disableXEnvoyHeaders: false\x7F    downstream:\x7F      connectionBufferLimits: 32768\x7F      http2:\x7F        initialConnectionWindowSize: 1048576\x7F        initialStreamWindowSize: 65535\x7F        maxConcurrentStreams: 100\x7F      idleTimeout: 180\x7F      maxRequestHeadersKb: 60\x7F    upstream:\x7F      connectionBufferLimits: 1048576\x7F      idleTimeout: 10\x7F...\x7F\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system"><div></div></button></div></figure></div>
<h3 id="configuration-description">Configuration Description</h3>















































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>addXRealIpHeader</td><td>boolean</td><td>Whether to add x-real-ip request header. If true, x-real-ip parameter will be added to the request header</td><td>false</td></tr><tr><td>disableXEnvoyHeaders</td><td>boolean</td><td>Whether to disable x-envoy prefix request headers (e.g., x-envoy-original-path) attached to forwarded requests. If true, they will be disabled</td><td>false</td></tr><tr><td>downstream</td><td>See downstream settings below</td><td>Downstream settings</td><td>See downstream default values below</td></tr><tr><td>upstream</td><td>See upstream settings below</td><td>Upstream settings</td><td>See upstream default values below</td></tr><tr><td>tracing</td><td>See tracing settings below</td><td>Tracing settings</td><td>See tracing default values below</td></tr><tr><td>gzip</td><td>See gzip settings below</td><td>Gzip settings</td><td>See gzip default values below</td></tr></tbody></table>
<h4 id="tracing-configuration">Tracing Configuration</h4>















































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>enable</td><td>boolean</td><td>Whether to enable tracing functionality</td><td>false</td></tr><tr><td>sampling</td><td>float</td><td>Sampling rate, between 0.0 - 100.0</td><td>100.0</td></tr><tr><td>timeout</td><td>int</td><td>Tracing middleware grpc connection timeout, in milliseconds</td><td>500</td></tr><tr><td>skywalking</td><td>See skywalking settings below</td><td>Skywalking configuration</td><td>Not set</td></tr><tr><td>zipkin</td><td>See zipkin settings below</td><td>Zipkin configuration</td><td>Not set</td></tr><tr><td>opentelemetry</td><td>See opentelemetry settings below</td><td>OpenTelemetry configuration</td><td>Not set</td></tr></tbody></table>
<h5 id="skywalking-configuration">Skywalking Configuration</h5>





























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>service</td><td>string</td><td>Skywalking grpc service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local</td><td>Empty</td></tr><tr><td>port</td><td>string</td><td>Skywalking grpc service port</td><td>Empty</td></tr><tr><td>access_token</td><td>string</td><td>Skywalking grpc service access token</td><td>Empty</td></tr></tbody></table>
<h5 id="zipkin-configuration">Zipkin Configuration</h5>























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>service</td><td>string</td><td>Zipkin service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local</td><td>Empty</td></tr><tr><td>port</td><td>string</td><td>Zipkin service port</td><td>Empty</td></tr></tbody></table>
<h5 id="opentelemetry-configuration">OpenTelemetry Configuration</h5>























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>service</td><td>string</td><td>OpenTelemetry grpc service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local</td><td>Empty</td></tr><tr><td>port</td><td>string</td><td>OpenTelemetry grpc service port</td><td>Empty</td></tr></tbody></table>
<blockquote>
<p>Note:
Skywalking, Zipkin, and OpenTelemetry cannot be set simultaneously; only one configuration can take effect</p>
</blockquote>
<h4 id="gzip-configuration">Gzip Configuration</h4>

































































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>enable</td><td>boolean</td><td>Whether to enable gzip functionality</td><td>false</td></tr><tr><td>minContentLength</td><td>int</td><td>Minimum byte length to enable compression output</td><td>1024</td></tr><tr><td>contentType</td><td>array</td><td>Content-type types for enabling compression output</td><td>text/html,application/json,text/css,<br>application/javascript,application/xhtml+xml,<br>image/svg+xml</td></tr><tr><td>disableOnEtagHeader</td><td>boolean</td><td>If true, gzip functionality will be disabled when the response contains an etag header</td><td>true</td></tr><tr><td>memoryLevel</td><td>int</td><td>Controls zlib memory usage from 1 to 9</td><td>5</td></tr><tr><td>windowBits</td><td>int</td><td>Represents compression algorithm window size from 9 to 15</td><td>12</td></tr><tr><td>chunkSize</td><td>int</td><td>Zlib buffer size</td><td>4096</td></tr><tr><td>compressionLevel</td><td>string</td><td>Zlib compression ratio</td><td>BEST_COMPRESSION</td></tr><tr><td>compressionStrategy</td><td>string</td><td>Zlib compression strategy</td><td>DEFAULT_STRATEGY</td></tr></tbody></table>
<p>For detailed explanation of gzip parameter configuration, refer to the envoy gzip compression documentation: <a href="https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip</a></p>
<h4 id="downstream-configuration">Downstream Configuration</h4>



































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>connectionBufferLimits</td><td>int</td><td>Connection buffer size, in bytes</td><td>32768</td></tr><tr><td>http2</td><td>See http2 settings below</td><td>HTTP/2 settings</td><td>See http2 default values below</td></tr><tr><td>idleTimeout</td><td>int</td><td>Connection idle timeout, in seconds, 0 means this configuration is disabled</td><td>180</td></tr><tr><td>maxRequestHeadersKb</td><td>int</td><td>Maximum request header size, in Kb, maximum is 8192Kb</td><td>60</td></tr></tbody></table>
<h5 id="http2-configuration">HTTP/2 Configuration</h5>





























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>initialConnectionWindowSize</td><td>int</td><td>HTTP/2 connection window size, in bytes, range from 65535 to 2147483647</td><td>1048576</td></tr><tr><td>initialStreamWindowSize</td><td>int</td><td>HTTP/2 stream window size, in bytes, range from 65535 to 2147483647</td><td>65535</td></tr><tr><td>maxConcurrentStreams</td><td>int</td><td>HTTP/2 maximum concurrent streams, range from 1 to 2147483647</td><td>100</td></tr></tbody></table>
<h4 id="upstream-configuration">Upstream Configuration</h4>























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>connectionBufferLimits</td><td>int</td><td>Connection buffer size, in bytes</td><td>1048576</td></tr><tr><td>idleTimeout</td><td>int</td><td>Connection idle timeout (idle is defined as no pending requests; if there are requests being processed, it won\u2019t be considered idle), in seconds, 0 means this configuration is disabled</td><td>10</td></tr></tbody></table>
<h2 id="tls-certificate-global-configuration">TLS Certificate Global Configuration</h2>
<blockquote>
<p>Note: Currently only effective for Ingress mode, Gateway API is not yet supported</p>
</blockquote>
<p>Higress TLS global configuration ConfigMap object higress-https, reference configuration as follows:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-https</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cert</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">automaticHttps: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">renewBeforeDays: 30</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">fallbackForInvalidSecret: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">acmeIssuer:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">- name: letsencrypt</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">email: test@example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">credentialConfig:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">- tlsIssuer: letsencrypt</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">domains:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">tlsSecret: foo-com-secret</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-https\x7F  namespace: higress-system\x7Fdata:\x7F  cert: |\x7F    automaticHttps: true\x7F    renewBeforeDays: 30\x7F    fallbackForInvalidSecret: true\x7F    acmeIssuer:\x7F    - name: letsencrypt\x7F      email: test@example.com\x7F    credentialConfig:\x7F    - tlsIssuer: letsencrypt\x7F      domains:\x7F      - foo.com\x7F      tlsSecret: foo-com-secret"><div></div></button></div></figure></div>
<h3 id="configuration-description-1">Configuration Description</h3>









































<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>automaticHttps</td><td>boolean</td><td>Whether to enable certificate issuance through ACME Issuer</td><td>true</td></tr><tr><td>renewBeforeDays</td><td>int</td><td>How many days before certificate expiration to automatically renew, maximum value is 90 days</td><td>30</td></tr><tr><td>fallbackForInvalidSecret</td><td>boolean</td><td>If enabled, when the secretName configured in ingress TLS doesn\u2019t exist, it will match a secret based on the domain name in the credentialConfig configuration</td><td>false</td></tr><tr><td>acmeIssuer</td><td>array</td><td>ACME Issuer settings</td><td>See acmeIssuer below</td></tr><tr><td>credentialConfig</td><td>array</td><td>Credential configuration settings</td><td>See credentialConfig below</td></tr></tbody></table>
<h3 id="credentialconfig-configuration">credentialConfig Configuration</h3>





























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>tlsSecret</td><td>string</td><td>Certificate secret name</td><td>-</td></tr><tr><td>tlsIssuer</td><td>string</td><td>Corresponding ACME Issuer name, currently only supports letsencrypt. When tlsIssuer is not filled, domains can be a list or wildcard domain, used for global management of secret configurations for these domains; if set to letsencrypt, only one domain can be configured under domains, and it cannot be a wildcard domain, and tlsSecret cannot be an existing non-Higress created automatic certificate</td><td>-</td></tr><tr><td>domains</td><td>array</td><td>Domain configuration, can be wildcard domains</td><td>-</td></tr></tbody></table>
<h3 id="acmeissuer-configuration">acmeIssuer Configuration</h3>























<table><thead><tr><th>Field</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>ACME Issuer name, only supports letsencrypt</td><td>-</td></tr><tr><td>email</td><td>string</td><td>ACME Issuer email, used for notification of certificate changes and other events</td><td>-</td></tr></tbody></table>
<h3 id="how-to-enable-and-disable-acme-issuer-automatic-certificate-management">How to Enable and Disable ACME Issuer Automatic Certificate Management</h3>
<p>By default, ACME Issuer automatic certificate management is enabled during installation, and the system randomly generates an email address. The specific configuration parameters are as follows:</p>




















<table><thead><tr><th><strong>Parameter Name</strong></th><th><strong>Parameter Description</strong></th><th><strong>Default Value</strong></th></tr></thead><tbody><tr><td>higress-core.controller.automaticHttps.enabled</td><td>Whether to enable ACME Issuer certificate issuance, only supports letsencrypt</td><td>true</td></tr><tr><td>higress-core.controller.automaticHttps.email</td><td>ACME Issuer email, if empty, the system randomly generates an email address</td><td>-</td></tr></tbody></table>`,n={title:"Global Configuration Description",keywords:["Ingress"],description:"Global configuration description.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/user/configmap.md"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/user/configmap.md",i=void 0,r=function(){return`
## Common Global Configuration

Higress global configuration ConfigMap object higress-config adds a higress item, reference configuration as follows:

\`\`\`yaml
apiVersion: v1
data:
  higress: |-
    tracing:
      enable: true
      sampling: 100
      timeout: 500
      skywalking:
        service: skywalking-oap-server.op-system.svc.cluster.local
        port: 11800
    gzip:
      enable: false
      minContentLength: 1024
      contentType:
        - text/html
        - application/json
        - text/css
        - application/javascript
        - application/xhtml+xml
        - image/svg+xml
      disableOnEtagHeader: true
      memoryLevel: 5
      windowBits: 12
      chunkSize: 4096
      compressionLevel: BEST_COMPRESSION
      compressionStrategy: DEFAULT_STRATEGY
    addXRealIpHeader: false
    disableXEnvoyHeaders: false
    downstream:
      connectionBufferLimits: 32768
      http2:
        initialConnectionWindowSize: 1048576
        initialStreamWindowSize: 65535
        maxConcurrentStreams: 100
      idleTimeout: 180
      maxRequestHeadersKb: 60
    upstream:
      connectionBufferLimits: 1048576
      idleTimeout: 10
...

kind: ConfigMap
metadata:
  name: higress-config
  namespace: higress-system
\`\`\`

### Configuration Description

| Field | Type | Description | Default |
|------------|--------------------|--------------------------------------------------------------------|---------------------|
| addXRealIpHeader | boolean | Whether to add x-real-ip request header. If true, x-real-ip parameter will be added to the request header | false |
| disableXEnvoyHeaders | boolean | Whether to disable x-envoy prefix request headers (e.g., x-envoy-original-path) attached to forwarded requests. If true, they will be disabled | false |
| downstream | See downstream settings below | Downstream settings | See downstream default values below |
| upstream | See upstream settings below | Upstream settings | See upstream default values below |
| tracing | See tracing settings below | Tracing settings | See tracing default values below |
| gzip | See gzip settings below | Gzip settings | See gzip default values below |



#### Tracing Configuration

| Field | Type | Description | Default |
|------------|--------------------|------------------------------------|-------|
| enable | boolean | Whether to enable tracing functionality | false |
| sampling | float | Sampling rate, between 0.0 - 100.0 | 100.0 |
| timeout | int | Tracing middleware grpc connection timeout, in milliseconds | 500 |
| skywalking | See skywalking settings below | Skywalking configuration | Not set |
| zipkin | See zipkin settings below | Zipkin configuration | Not set |
| opentelemetry | See opentelemetry settings below | OpenTelemetry configuration | Not set |


##### Skywalking Configuration
| Field | Type | Description | Default |
|--------------|--------|------------------------|-----|
| service | string | Skywalking grpc service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local | Empty |
| port | string | Skywalking grpc service port | Empty |
| access_token | string | Skywalking grpc service access token | Empty |


##### Zipkin Configuration
| Field | Type | Description | Default |
|--------------|--------|-------------|-----|
| service | string | Zipkin service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local | Empty |
| port | string | Zipkin service port | Empty |

##### OpenTelemetry Configuration
| Field | Type | Description | Default |
|--------------|--------|------------------------|-----|
| service | string | OpenTelemetry grpc service name, i.e., the service name seen in the console service list, e.g., my-server.dns, my-server.my-ns.svc.cluster.local | Empty |
| port | string | OpenTelemetry grpc service port | Empty |


> Note:
> Skywalking, Zipkin, and OpenTelemetry cannot be set simultaneously; only one configuration can take effect

#### Gzip Configuration


| Field | Type | Description | Default |
|------------|----------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| enable | boolean | Whether to enable gzip functionality | false |
| minContentLength | int | Minimum byte length to enable compression output | 1024 |
| contentType | array | Content-type types for enabling compression output | text/html,application/json,text/css,<br/>application/javascript,application/xhtml+xml,<br/>image/svg+xml |
| disableOnEtagHeader | boolean | If true, gzip functionality will be disabled when the response contains an etag header | true |
| memoryLevel | int | Controls zlib memory usage from 1 to 9 | 5 |
| windowBits | int | Represents compression algorithm window size from 9 to 15 | 12 |
| chunkSize | int | Zlib buffer size | 4096 |
| compressionLevel | string | Zlib compression ratio | BEST_COMPRESSION |
| compressionStrategy | string | Zlib compression strategy | DEFAULT_STRATEGY |


For detailed explanation of gzip parameter configuration, refer to the envoy gzip compression documentation: https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip


#### Downstream Configuration

| Field | Type | Description | Default |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits | int | Connection buffer size, in bytes | 32768 |
| http2 | See http2 settings below | HTTP/2 settings | See http2 default values below |
| idleTimeout | int | Connection idle timeout, in seconds, 0 means this configuration is disabled | 180 |
| maxRequestHeadersKb | int | Maximum request header size, in Kb, maximum is 8192Kb | 60 |

##### HTTP/2 Configuration

| Field | Type | Description | Default |
|------------|--------------------|--------------------------------------|---------------------|
| initialConnectionWindowSize | int | HTTP/2 connection window size, in bytes, range from 65535 to 2147483647 | 1048576 |
| initialStreamWindowSize | int | HTTP/2 stream window size, in bytes, range from 65535 to 2147483647 | 65535 |
| maxConcurrentStreams | int | HTTP/2 maximum concurrent streams, range from 1 to 2147483647 | 100 |


#### Upstream Configuration

| Field | Type | Description | Default |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits | int | Connection buffer size, in bytes | 1048576 |
| idleTimeout | int | Connection idle timeout (idle is defined as no pending requests; if there are requests being processed, it won't be considered idle), in seconds, 0 means this configuration is disabled | 10 |


## TLS Certificate Global Configuration

> Note: Currently only effective for Ingress mode, Gateway API is not yet supported


Higress TLS global configuration ConfigMap object higress-https, reference configuration as follows:

\`\`\`yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: higress-https
  namespace: higress-system
data:
  cert: |
    automaticHttps: true
    renewBeforeDays: 30
    fallbackForInvalidSecret: true
    acmeIssuer:
    - name: letsencrypt
      email: test@example.com
    credentialConfig:
    - tlsIssuer: letsencrypt
      domains:
      - foo.com
      tlsSecret: foo-com-secret
\`\`\`

### Configuration Description
| Field | Type | Description | Default |
|--------------------------|---------|-------------------------------------------------------------------------------|----------------------|
| automaticHttps | boolean | Whether to enable certificate issuance through ACME Issuer | true |
| renewBeforeDays | int | How many days before certificate expiration to automatically renew, maximum value is 90 days | 30 |
| fallbackForInvalidSecret | boolean | If enabled, when the secretName configured in ingress TLS doesn't exist, it will match a secret based on the domain name in the credentialConfig configuration | false |
| acmeIssuer | array | ACME Issuer settings | See acmeIssuer below |
| credentialConfig | array | Credential configuration settings | See credentialConfig below |


### credentialConfig Configuration

| Field | Type | Description | Default |
|--------------|--------|-----------------------------------------------------------------------------------|----|
| tlsSecret | string | Certificate secret name | - |
| tlsIssuer | string | Corresponding ACME Issuer name, currently only supports letsencrypt. When tlsIssuer is not filled, domains can be a list or wildcard domain, used for global management of secret configurations for these domains; if set to letsencrypt, only one domain can be configured under domains, and it cannot be a wildcard domain, and tlsSecret cannot be an existing non-Higress created automatic certificate | - |
| domains | array | Domain configuration, can be wildcard domains | - |


### acmeIssuer Configuration

| Field | Type | Description | Default |
|--------------------------|--------|-------------------------------|---|
| name | string | ACME Issuer name, only supports letsencrypt | - |
| email | string | ACME Issuer email, used for notification of certificate changes and other events | - |

### How to Enable and Disable ACME Issuer Automatic Certificate Management

By default, ACME Issuer automatic certificate management is enabled during installation, and the system randomly generates an email address. The specific configuration parameters are as follows:

| **Parameter Name** | **Parameter Description** | **Default Value** |
|----------------------------------|-------------------------------------|--------|
|higress-core.controller.automaticHttps.enabled | Whether to enable ACME Issuer certificate issuance, only supports letsencrypt | true |
|higress-core.controller.automaticHttps.email | ACME Issuer email, if empty, the system randomly generates an email address | - |
`},d=function(){return e},o=function(){return[{depth:2,slug:"common-global-configuration",text:"Common Global Configuration"},{depth:3,slug:"configuration-description",text:"Configuration Description"},{depth:4,slug:"tracing-configuration",text:"Tracing Configuration"},{depth:5,slug:"skywalking-configuration",text:"Skywalking Configuration"},{depth:5,slug:"zipkin-configuration",text:"Zipkin Configuration"},{depth:5,slug:"opentelemetry-configuration",text:"OpenTelemetry Configuration"},{depth:4,slug:"gzip-configuration",text:"Gzip Configuration"},{depth:4,slug:"downstream-configuration",text:"Downstream Configuration"},{depth:5,slug:"http2-configuration",text:"HTTP/2 Configuration"},{depth:4,slug:"upstream-configuration",text:"Upstream Configuration"},{depth:2,slug:"tls-certificate-global-configuration",text:"TLS Certificate Global Configuration"},{depth:3,slug:"configuration-description-1",text:"Configuration Description"},{depth:3,slug:"credentialconfig-configuration",text:"credentialConfig Configuration"},{depth:3,slug:"acmeissuer-configuration",text:"acmeIssuer Configuration"},{depth:3,slug:"how-to-enable-and-disable-acme-issuer-automatic-certificate-management",text:"How to Enable and Disable ACME Issuer Automatic Certificate Management"}]},t=l((v,h,b)=>{const{layout:F,...a}=n;return a.file=s,a.url=i,p`${m()}${g(e)}`})});export{t as Content,y as __tla,d as compiledContent,t as default,s as file,n as frontmatter,o as getHeadings,r as rawContent,i as url};
