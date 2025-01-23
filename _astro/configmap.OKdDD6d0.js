import{c as r,__tla as c}from"./astro-component.CXlaF79K.js";import{r as o,m as v,u as y,__tla as m}from"./constant.BZZ-3vz-.js";import{__tla as h}from"./astro/assets-service.DQopRnBr.js";let s,i,e,a,l,p,n,g=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return h}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u901A\u7528\u5168\u5C40\u914D\u7F6E">\u901A\u7528\u5168\u5C40\u914D\u7F6E</h2>
<p>Higress \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-config \u589E\u52A0 higress \u9879\uFF0C \u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">higress</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|-</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">tracing:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">sampling: 100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">timeout: 500</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">skywalking:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">service: skywalking-oap-server.op-system.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">port: 11800</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">gzip:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">enable: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">minContentLength: 1024</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">contentType:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- text/html</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- application/json</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- text/css</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- application/javascript</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- application/xhtml+xml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">- image/svg+xml</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">disableOnEtagHeader: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">memoryLevel: 5</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">windowBits: 12</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">chunkSize: 4096</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">compressionLevel: BEST_COMPRESSION</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">compressionStrategy: DEFAULT_STRATEGY</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">addXRealIpHeader: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">disableXEnvoyHeaders: false</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">downstream:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">connectionBufferLimits: 32768</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">http2:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">initialConnectionWindowSize: 1048576</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">initialStreamWindowSize: 65535</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">        </span></span><span style="--0:#9ECBFF">maxConcurrentStreams: 100</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">idleTimeout: 180</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">maxRequestHeadersKb: 60</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">upstream:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">connectionBufferLimits: 1048576</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">idleTimeout: 10</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">...</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-config</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fdata:\x7F  higress: |-\x7F    tracing:\x7F      enable: true\x7F      sampling: 100\x7F      timeout: 500\x7F      skywalking:\x7F        service: skywalking-oap-server.op-system.svc.cluster.local\x7F        port: 11800\x7F    gzip:\x7F      enable: false\x7F      minContentLength: 1024\x7F      contentType:\x7F        - text/html\x7F        - application/json\x7F        - text/css\x7F        - application/javascript\x7F        - application/xhtml+xml\x7F        - image/svg+xml\x7F      disableOnEtagHeader: true\x7F      memoryLevel: 5\x7F      windowBits: 12\x7F      chunkSize: 4096\x7F      compressionLevel: BEST_COMPRESSION\x7F      compressionStrategy: DEFAULT_STRATEGY\x7F    addXRealIpHeader: false\x7F    disableXEnvoyHeaders: false\x7F    downstream:\x7F      connectionBufferLimits: 32768\x7F      http2:\x7F        initialConnectionWindowSize: 1048576\x7F        initialStreamWindowSize: 65535\x7F        maxConcurrentStreams: 100\x7F      idleTimeout: 180\x7F      maxRequestHeadersKb: 60\x7F    upstream:\x7F      connectionBufferLimits: 1048576\x7F      idleTimeout: 10\x7F...\x7F\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-config\x7F  namespace: higress-system"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6E\u8BF4\u660E">\u914D\u7F6E\u8BF4\u660E</h3>















































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>addXRealIpHeader</td><td>boolean</td><td>\u662F\u5426\u6DFB\u52A0 x-real-ip \u8BF7\u6C42\u5934\uFF0C\u5982\u679C\u662Ftrue\uFF0C\u5219\u4F1A\u4E3A\u8BF7\u6C42\u5934\u6DFB\u52A0 x-real-ip \u53C2\u6570</td><td>false</td></tr><tr><td>disableXEnvoyHeaders</td><td>boolean</td><td>\u662F\u5426\u5173\u95ED\u9644\u52A0\u5728\u8F6C\u53D1\u8BF7\u6C42\u4E2D\u7684 x-envoy \u524D\u7F00\u8BF7\u6C42\u5934\uFF08\u4F8B\u5982 x-envoy-original-path\uFF09\uFF0C\u5982\u679C\u662Ftrue\uFF0C\u5219\u4F1A\u5173\u95ED</td><td>false</td></tr><tr><td>downstream</td><td>\u53C2\u8003\u4E0B\u9762 downstream \u8BBE\u7F6E</td><td>downstream \u8BBE\u7F6E</td><td>\u53C2\u8003\u4E0B\u9762 downstream \u9ED8\u8BA4\u503C</td></tr><tr><td>upstream</td><td>\u53C2\u8003\u4E0B\u9762 upstream \u8BBE\u7F6E</td><td>upstream \u8BBE\u7F6E</td><td>\u53C2\u8003\u4E0B\u9762 upstream \u9ED8\u8BA4\u503C</td></tr><tr><td>tracing</td><td>\u53C2\u8003\u4E0B\u9762 tracing \u8BBE\u7F6E</td><td>tracing \u8BBE\u7F6E</td><td>\u53C2\u8003\u4E0B\u9762 tracing \u9ED8\u8BA4\u503C</td></tr><tr><td>gzip</td><td>\u53C2\u8003\u4E0B\u9762 gzip \u8BBE\u7F6E</td><td>gzip \u8BBE\u7F6E</td><td>\u53C2\u8003\u4E0B\u9762 gzip \u9ED8\u8BA4\u503C</td></tr></tbody></table>
<h4 id="tracing-\u914D\u7F6E\u8BF4\u660E">Tracing \u914D\u7F6E\u8BF4\u660E</h4>















































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>enable</td><td>boolean</td><td>\u662F\u5426\u5F00\u542F tracing \u529F\u80FD</td><td>false</td></tr><tr><td>sampling</td><td>float</td><td>\u91C7\u6837\u7387\uFF0C0.0 - 100.0 \u4E4B\u95F4</td><td>100.0</td></tr><tr><td>timeout</td><td>int</td><td>\u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6 grpc \u8FDE\u63A5\u8D85\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2</td><td>500</td></tr><tr><td>skywalking</td><td>\u53C2\u8003\u4E0B\u9762 skywalking \u8BBE\u7F6E</td><td>skywalking \u914D\u7F6E</td><td>\u672A\u8BBE\u7F6E</td></tr><tr><td>zipkin</td><td>\u53C2\u8003\u4E0B\u9762 zipkin \u8BBE\u7F6E</td><td>zipkin \u914D\u7F6E</td><td>\u672A\u8BBE\u7F6E</td></tr><tr><td>opentelemetry</td><td>\u53C2\u8003\u4E0B\u9762 opentelemetry \u8BBE\u7F6E</td><td>opentelemetry \u914D\u7F6E</td><td>\u672A\u8BBE\u7F6E</td></tr></tbody></table>
<h5 id="skywalking-\u914D\u7F6E">skywalking \u914D\u7F6E</h5>





























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>service</td><td>string</td><td>Skywalking grpc \u670D\u52A1\u540D\u79F0\uFF0C\u5373\u63A7\u5236\u53F0\u670D\u52A1\u5217\u8868\u770B\u5230\u7684\u670D\u52A1\u540D\u79F0\uFF0C\u4F8B\u5982 my-server.dns\u3001my-server.my-ns.svc.cluster.local</td><td>\u7A7A</td></tr><tr><td>port</td><td>string</td><td>Skywalking grpc \u670D\u52A1\u7AEF\u53E3</td><td>\u7A7A</td></tr><tr><td>access_token</td><td>string</td><td>Skywalking grpc \u670D\u52A1\u8BBF\u95EE\u51ED\u8BC1</td><td>\u7A7A</td></tr></tbody></table>
<h5 id="zipkin-\u914D\u7F6E">zipkin \u914D\u7F6E</h5>























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>service</td><td>string</td><td>zipkin \u670D\u52A1\u540D\u79F0\uFF0C\u5373\u63A7\u5236\u53F0\u670D\u52A1\u5217\u8868\u770B\u5230\u7684\u670D\u52A1\u540D\u79F0\uFF0C\u4F8B\u5982 my-server.dns\u3001my-server.my-ns.svc.cluster.local</td><td>\u7A7A</td></tr><tr><td>port</td><td>string</td><td>zipkin \u670D\u52A1\u7AEF\u53E3</td><td>\u7A7A</td></tr></tbody></table>
<h5 id="opentelemetry-\u914D\u7F6E">opentelemetry \u914D\u7F6E</h5>























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>service</td><td>string</td><td>opentelemetry grpc \u670D\u52A1\u540D\u79F0\uFF0C\u5373\u63A7\u5236\u53F0\u670D\u52A1\u5217\u8868\u770B\u5230\u7684\u670D\u52A1\u540D\u79F0\uFF0C\u4F8B\u5982 my-server.dns\u3001my-server.my-ns.svc.cluster.local</td><td>\u7A7A</td></tr><tr><td>port</td><td>string</td><td>opentelemetry grpc \u670D\u52A1\u7AEF\u53E3</td><td>\u7A7A</td></tr></tbody></table>
<blockquote>
<p>\u6CE8\u610F\uFF1A
skywalking\uFF0Czipkin\uFF0Copentelemetry \u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6E\uFF0C\u53EA\u6709\u4E00\u4E2A\u914D\u7F6E\u80FD\u751F\u6548</p>
</blockquote>
<h4 id="gzip-\u914D\u7F6E\u8BF4\u660E">Gzip \u914D\u7F6E\u8BF4\u660E</h4>

































































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>enable</td><td>boolean</td><td>\u662F\u5426\u5F00\u542F gzip \u529F\u80FD</td><td>false</td></tr><tr><td>minContentLength</td><td>int</td><td>\u542F\u7528\u538B\u7F29\u8F93\u51FA\u6700\u5C11\u5B57\u8282\u957F\u5EA6</td><td>1024</td></tr><tr><td>contentType</td><td>array</td><td>\u542F\u7528\u538B\u7F29\u8F93\u51FAcontent-type\u7C7B\u578B</td><td>text/html,application/json,text/css,<br>application/javascript,application/xhtml+xml,<br>image/svg+xml</td></tr><tr><td>disableOnEtagHeader</td><td>boolean</td><td>\u5982\u679C\u662Ftrue\u65F6, \u5F53 response \u5305\u542B etag header\u65F6\u4F1A\u5173\u95ED gzip\u529F\u80FD</td><td>true</td></tr><tr><td>memoryLevel</td><td>int</td><td>\u4ECE 1 \u5230 9 \u63A7\u5236 zlib\u7528\u5230\u5185\u5B58.</td><td>5</td></tr><tr><td>windowBits</td><td>int</td><td>\u4ECE 9 \u5230 15 \u8868\u793A\u538B\u7F29\u7B97\u6CD5\u7A97\u53E3\u5927\u5C0F.</td><td>12</td></tr><tr><td>chunkSize</td><td>int</td><td>zlib buffer\u5927\u5C0F</td><td>4096</td></tr><tr><td>compressionLevel</td><td>string</td><td>zlib \u538B\u7F29\u6BD4\u7387</td><td>BEST_COMPRESSION</td></tr><tr><td>compressionStrategy</td><td>string</td><td>zlib \u538B\u7F29\u7B56\u7565</td><td>DEFAULT_STRATEGY</td></tr></tbody></table>
<p>\u5173\u4E8E gzip \u53C2\u6570\u914D\u7F6E\u8BE6\u7EC6\u8BF4\u660E\u53EF\u4EE5\u53C2\u8003 envoy gzip\u538B\u7F29\u6587\u6863\uFF1A <a href="https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip</a></p>
<h4 id="downstream-\u914D\u7F6E\u8BF4\u660E">Downstream \u914D\u7F6E\u8BF4\u660E</h4>



































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>connectionBufferLimits</td><td>int</td><td>\u8FDE\u63A5\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282</td><td>32768</td></tr><tr><td>http2</td><td>\u53C2\u8003\u4E0B\u9762 http2 \u8BBE\u7F6E</td><td>http2 \u8BBE\u7F6E</td><td>\u53C2\u8003\u4E0B\u9762 http2 \u9ED8\u8BA4\u503C</td></tr><tr><td>idleTimeout</td><td>int</td><td>\u8FDE\u63A5\u7A7A\u95F2\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\uFF0C0\u8868\u793A\u5173\u95ED\u8BE5\u914D\u7F6E</td><td>180</td></tr><tr><td>maxRequestHeadersKb</td><td>int</td><td>\u6700\u5927\u8BF7\u6C42\u5934\u5927\u5C0F\uFF0C\u5355\u4F4DKb\uFF0C\u6700\u5927\u4E3A8192Kb</td><td>60</td></tr></tbody></table>
<h5 id="http2-\u914D\u7F6E\u8BF4\u660E">http2 \u914D\u7F6E\u8BF4\u660E</h5>





























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>initialConnectionWindowSize</td><td>int</td><td>http2 \u8FDE\u63A5\u7A97\u53E3\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282\uFF0C\u8303\u56F4\u4E3A65535\uFF5E2147483647</td><td>1048576</td></tr><tr><td>initialStreamWindowSize</td><td>int</td><td>http2 \u6D41\u7A97\u53E3\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282\uFF0C\u8303\u56F4\u4E3A65535\uFF5E2147483647</td><td>65535</td></tr><tr><td>maxConcurrentStreams</td><td>int</td><td>http2 \u6700\u5927\u5E76\u53D1\u6D41\u6570\u91CF\uFF0C\u8303\u56F4\u4E3A1\uFF5E2147483647</td><td>100</td></tr></tbody></table>
<h4 id="upstream-\u914D\u7F6E\u8BF4\u660E">Upstream \u914D\u7F6E\u8BF4\u660E</h4>























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>connectionBufferLimits</td><td>int</td><td>\u8FDE\u63A5\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282</td><td>1048576</td></tr><tr><td>idleTimeout</td><td>int</td><td>\u8FDE\u63A5\u7A7A\u95F2\u8D85\u65F6\u65F6\u95F4(\u7A7A\u95F2\u5B9A\u4E49\u662F\u6CA1\u6709\u672A\u5904\u7406\u5B8C\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u6709\u8BF7\u6C42\u5728\u5904\u7406\u4E2D\uFF0C\u4E0D\u4F1A\u5224\u5B9A\u4E3Aidle)\uFF0C\u5355\u4F4D\u79D2\uFF0C0\u8868\u793A\u5173\u95ED\u8BE5\u914D\u7F6E</td><td>10</td></tr></tbody></table>
<h2 id="tls-\u8BC1\u4E66\u5168\u5C40\u914D\u7F6E">TLS \u8BC1\u4E66\u5168\u5C40\u914D\u7F6E</h2>
<blockquote>
<p>\u6CE8\u610F\uFF1A\u5F53\u524D\u4EC5\u5BF9Ingress\u6A21\u5F0F\u751F\u6548\uFF0CGateway API\u6682\u4E0D\u652F\u6301</p>
</blockquote>
<p>Higress TLS \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-https \uFF0C \u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ConfigMap</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-https</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">data</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">cert</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">automaticHttps: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">renewBeforeDays: 30</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">fallbackForInvalidSecret: true</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">acmeIssuer:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">- name: letsencrypt</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">email: test@example.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">credentialConfig:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">    </span></span><span style="--0:#9ECBFF">- tlsIssuer: letsencrypt</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">domains:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">- foo.com</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">      </span></span><span style="--0:#9ECBFF">tlsSecret: foo-com-secret</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: ConfigMap\x7Fmetadata:\x7F  name: higress-https\x7F  namespace: higress-system\x7Fdata:\x7F  cert: |\x7F    automaticHttps: true\x7F    renewBeforeDays: 30\x7F    fallbackForInvalidSecret: true\x7F    acmeIssuer:\x7F    - name: letsencrypt\x7F      email: test@example.com\x7F    credentialConfig:\x7F    - tlsIssuer: letsencrypt\x7F      domains:\x7F      - foo.com\x7F      tlsSecret: foo-com-secret"><div></div></button></div></figure></div>
<h3 id="\u914D\u7F6E\u8BF4\u660E-1">\u914D\u7F6E\u8BF4\u660E</h3>









































<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>name</td><td>boolean</td><td>\u662F\u5426\u542F\u52A8\u901A\u8FC7 ACME Issuer \u6765\u7B7E\u53D1\u8BC1\u4E66</td><td>true</td></tr><tr><td>renewBeforeDays</td><td>int</td><td>\u8BC1\u4E66\u8FC7\u671F\u524D\u591A\u5C11\u5929\u81EA\u52A8Renew\uFF0C \u6700\u5927\u503C\u4E3A90\u5929</td><td>30</td></tr><tr><td>fallbackForInvalidSecret</td><td>boolean</td><td>\u5982\u679C\u5F00\u542F\uFF0C\u5F53 ingress TLS \u91CC\u914D\u7F6E secretName \u4E0D\u5B58\u5728\u65F6\uFF0C\u4F1A\u5728 credentialConfig \u914D\u7F6E\u91CC\u6839\u636E\u57DF\u540D\u5339\u914D secret</td><td>false</td></tr><tr><td>acmeIssuer</td><td>array</td><td>acmeIssuer \u8BBE\u7F6E</td><td>\u53C2\u8003\u4E0B\u9762 acmeIssuer</td></tr><tr><td>credentialConfig</td><td>array</td><td>credentialConfig \u8BBE\u7F6E</td><td>\u53C2\u8003\u4E0B\u9762 credentialConfig</td></tr></tbody></table>
<h3 id="credentialconfig-\u914D\u7F6E">credentialConfig \u914D\u7F6E</h3>





























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>tlsSecret</td><td>string</td><td>\u8BC1\u4E66 secret \u540D\u79F0</td><td>-</td></tr><tr><td>tlsIssuer</td><td>string</td><td>\u5BF9\u5E94 ACME Issuer \u540D\u79F0\uFF0C\u73B0\u5728\u53EA\u652F\u6301 letsencrypt\u3002\u4E0D\u586B tlsIssuer \u65F6\uFF0Cdomains\u53EF\u4EE5\u586B\u5217\u8868\u6216\u6CDB\u57DF\u540D\uFF0C\u7528\u4E8E\u5168\u5C40\u7BA1\u7406\u8FD9\u4E9B\u57DF\u540D\u7684secret\u914D\u7F6E\uFF1B \u5982\u679C\u8BBE\u7F6E\u4E3A letsencrypt\uFF0C domains \u4E0B\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A\u57DF\u540D\uFF0C\u800C\u4E14\u4E0D\u80FD\u662F\u6CDB\u57DF\u540D\uFF0C\u5E76\u4E14 tlsSecret \u4E0D\u80FD\u662F\u5DF2\u7ECF\u5B58\u5728\u7684\u975E Higress \u521B\u5EFA\u7684\u81EA\u52A8\u8BC1\u4E66</td><td>-</td></tr><tr><td>domains</td><td>array</td><td>\u57DF\u540D\u914D\u7F6E\uFF0C\u53EF\u4EE5\u662F\u6CDB\u57DF\u540D</td><td>-</td></tr></tbody></table>
<h3 id="acmeissuer-\u914D\u7F6E">acmeIssuer \u914D\u7F6E</h3>























<table><thead><tr><th>\u5B57\u6BB5</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4</th></tr></thead><tbody><tr><td>name</td><td>string</td><td>ACME Issuer \u540D\u79F0\uFF0C\u53EA\u652F\u6301 letsencrypt</td><td>-</td></tr><tr><td>email</td><td>string</td><td>ACME Issuer \u90AE\u7BB1\uFF0C\u7528\u4E8E\u901A\u77E5\u8BC1\u4E66\u53D8\u66F4\u7B49\u4E8B\u4EF6</td><td>-</td></tr></tbody></table>
<h3 id="\u5982\u4F55\u5F00\u542F\u548C\u5173\u95ED-acme-issuer-\u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66">\u5982\u4F55\u5F00\u542F\u548C\u5173\u95ED ACME Issuer \u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66</h3>
<p>\u5B89\u88C5\u65F6\u9ED8\u8BA4\u542F\u52A8 ACME Issuer \u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66\u548C\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u90AE\u7BB1\u5730\u5740\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u6570\u5982\u4E0B\uFF1A</p>




















<table><thead><tr><th><strong>\u53C2\u6570\u540D</strong></th><th><strong>\u53C2\u6570\u8BF4\u660E</strong></th><th><strong>\u9ED8\u8BA4\u503C</strong></th></tr></thead><tbody><tr><td>higress-core.controller.automaticHttps.enabled</td><td>\u662F\u5426\u5F00\u542FACME Issuer\u7B7E\u53D1\u8BC1\u4E66\uFF0C\u53EA\u652F\u6301 letsencrypt</td><td>true</td></tr><tr><td>higress-core.controller.automaticHttps.email</td><td>ACME Issuer \u90AE\u7BB1\uFF0C\u5982\u679C\u4E3A\u7A7A\uFF0C\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u90AE\u7BB1\u5730\u5740</td><td>-</td></tr></tbody></table>`,a={title:"\u5168\u5C40\u914D\u7F6E\u8BF4\u660E",keywords:["Ingress"],description:"\u5168\u5C40\u914D\u7F6E\u8BF4\u660E\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/user/configmap.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/user/configmap.md",n=void 0,p=function(){return`
## \u901A\u7528\u5168\u5C40\u914D\u7F6E

Higress \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-config \u589E\u52A0 higress \u9879\uFF0C \u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A 

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

### \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                                                                    | \u9ED8\u8BA4                  |
|------------|--------------------|-----------------------------------------------------------------------|---------------------|
| addXRealIpHeader     | boolean            | \u662F\u5426\u6DFB\u52A0 x-real-ip \u8BF7\u6C42\u5934\uFF0C\u5982\u679C\u662Ftrue\uFF0C\u5219\u4F1A\u4E3A\u8BF7\u6C42\u5934\u6DFB\u52A0 x-real-ip \u53C2\u6570                      | false               |
| disableXEnvoyHeaders | boolean            | \u662F\u5426\u5173\u95ED\u9644\u52A0\u5728\u8F6C\u53D1\u8BF7\u6C42\u4E2D\u7684 x-envoy \u524D\u7F00\u8BF7\u6C42\u5934\uFF08\u4F8B\u5982 x-envoy-original-path\uFF09\uFF0C\u5982\u679C\u662Ftrue\uFF0C\u5219\u4F1A\u5173\u95ED | false               |
| downstream    | \u53C2\u8003\u4E0B\u9762 downstream \u8BBE\u7F6E | downstream \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 downstream \u9ED8\u8BA4\u503C |
| upstream    | \u53C2\u8003\u4E0B\u9762 upstream \u8BBE\u7F6E | upstream \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 upstream \u9ED8\u8BA4\u503C |
| tracing    | \u53C2\u8003\u4E0B\u9762 tracing \u8BBE\u7F6E | tracing \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 tracing \u9ED8\u8BA4\u503C |
| gzip    | \u53C2\u8003\u4E0B\u9762 gzip \u8BBE\u7F6E | gzip \u8BBE\u7F6E                         | \u53C2\u8003\u4E0B\u9762 gzip \u9ED8\u8BA4\u503C |



#### Tracing \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                                 | \u9ED8\u8BA4    |
|------------|--------------------|------------------------------------|-------|
| enable     | boolean            | \u662F\u5426\u5F00\u542F tracing \u529F\u80FD                    | false |
| sampling   | float              | \u91C7\u6837\u7387\uFF0C0.0 - 100.0 \u4E4B\u95F4                 | 100.0 |
| timeout    | int                | \u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6 grpc \u8FDE\u63A5\u8D85\u65F6\uFF0C\u5355\u4F4D\u6BEB\u79D2       | 500   |
| skywalking | \u53C2\u8003\u4E0B\u9762 skywalking \u8BBE\u7F6E | skywalking \u914D\u7F6E                      | \u672A\u8BBE\u7F6E   |
| zipkin     | \u53C2\u8003\u4E0B\u9762 zipkin \u8BBE\u7F6E     | zipkin \u914D\u7F6E                          | \u672A\u8BBE\u7F6E   |
| opentelemetry     | \u53C2\u8003\u4E0B\u9762 opentelemetry \u8BBE\u7F6E     | opentelemetry \u914D\u7F6E                          | \u672A\u8BBE\u7F6E   |


##### skywalking \u914D\u7F6E
| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E                     | \u9ED8\u8BA4  |
|--------------|--------|------------------------|-----|
| service      | string | Skywalking grpc \u670D\u52A1\u540D\u79F0\uFF0C\u5373\u63A7\u5236\u53F0\u670D\u52A1\u5217\u8868\u770B\u5230\u7684\u670D\u52A1\u540D\u79F0\uFF0C\u4F8B\u5982 my-server.dns\u3001my-server.my-ns.svc.cluster.local   | \u7A7A   |
| port         | string | Skywalking grpc \u670D\u52A1\u7AEF\u53E3   | \u7A7A   |
| access_token | string | Skywalking grpc \u670D\u52A1\u8BBF\u95EE\u51ED\u8BC1 | \u7A7A   |


##### zipkin \u914D\u7F6E
| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E          | \u9ED8\u8BA4  |
|--------------|--------|-------------|-----|
| service      | string | zipkin \u670D\u52A1\u540D\u79F0\uFF0C\u5373\u63A7\u5236\u53F0\u670D\u52A1\u5217\u8868\u770B\u5230\u7684\u670D\u52A1\u540D\u79F0\uFF0C\u4F8B\u5982 my-server.dns\u3001my-server.my-ns.svc.cluster.local | \u7A7A   |
| port         | string | zipkin \u670D\u52A1\u7AEF\u53E3 | \u7A7A   |

##### opentelemetry \u914D\u7F6E
| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E                     | \u9ED8\u8BA4  |
|--------------|--------|------------------------|-----|
| service      | string | opentelemetry grpc \u670D\u52A1\u540D\u79F0\uFF0C\u5373\u63A7\u5236\u53F0\u670D\u52A1\u5217\u8868\u770B\u5230\u7684\u670D\u52A1\u540D\u79F0\uFF0C\u4F8B\u5982 my-server.dns\u3001my-server.my-ns.svc.cluster.local   | \u7A7A   |
| port         | string | opentelemetry grpc \u670D\u52A1\u7AEF\u53E3   | \u7A7A   |


> \u6CE8\u610F\uFF1A
> skywalking\uFF0Czipkin\uFF0Copentelemetry \u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6E\uFF0C\u53EA\u6709\u4E00\u4E2A\u914D\u7F6E\u80FD\u751F\u6548

#### Gzip \u914D\u7F6E\u8BF4\u660E


| \u5B57\u6BB5         | \u7C7B\u578B             | \u8BF4\u660E                                             | \u9ED8\u8BA4                                                                                                       |
|------------|----------------|------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| enable     | boolean        | \u662F\u5426\u5F00\u542F gzip \u529F\u80FD                                   | false                                                                                                    |
| minContentLength | int            | \u542F\u7528\u538B\u7F29\u8F93\u51FA\u6700\u5C11\u5B57\u8282\u957F\u5EA6                                   | 1024                                                                                                     |
| contentType    | array          | \u542F\u7528\u538B\u7F29\u8F93\u51FAcontent-type\u7C7B\u578B                           | text/html,application/json,text/css,<br/>application/javascript,application/xhtml+xml,<br/>image/svg+xml |
| disableOnEtagHeader | boolean        | \u5982\u679C\u662Ftrue\u65F6, \u5F53 response \u5305\u542B etag header\u65F6\u4F1A\u5173\u95ED gzip\u529F\u80FD | true                                                                                                     |
| memoryLevel     | int            | \u4ECE 1 \u5230 9 \u63A7\u5236 zlib\u7528\u5230\u5185\u5B58.                           | 5                                                                                                        |
| windowBits     | int            | \u4ECE 9 \u5230 15 \u8868\u793A\u538B\u7F29\u7B97\u6CD5\u7A97\u53E3\u5927\u5C0F.                           | 12                                                                                                       |
| chunkSize      | int            | zlib buffer\u5927\u5C0F                                  | 4096                                                                                                     |
|  compressionLevel       | string         | zlib \u538B\u7F29\u6BD4\u7387                                      | BEST_COMPRESSION                                                                                         |
|  compressionStrategy    | string         | zlib \u538B\u7F29\u7B56\u7565                                      | DEFAULT_STRATEGY                                                                                         |


\u5173\u4E8E gzip \u53C2\u6570\u914D\u7F6E\u8BE6\u7EC6\u8BF4\u660E\u53EF\u4EE5\u53C2\u8003 envoy gzip\u538B\u7F29\u6587\u6863\uFF1A https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/compression/gzip/compressor/v3/gzip.proto#envoy-v3-api-msg-extensions-compression-gzip-compressor-v3-gzip


#### Downstream \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                    | \u9ED8\u8BA4                  |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits     | int            | \u8FDE\u63A5\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282          | 32768               |
| http2     | \u53C2\u8003\u4E0B\u9762 http2 \u8BBE\u7F6E | http2 \u8BBE\u7F6E              | \u53C2\u8003\u4E0B\u9762 http2 \u9ED8\u8BA4\u503C |
| idleTimeout    | int            | \u8FDE\u63A5\u7A7A\u95F2\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\uFF0C0\u8868\u793A\u5173\u95ED\u8BE5\u914D\u7F6E | 180               |
| maxRequestHeadersKb    | int            | \u6700\u5927\u8BF7\u6C42\u5934\u5927\u5C0F\uFF0C\u5355\u4F4DKb\uFF0C\u6700\u5927\u4E3A8192Kb  | 60               |

##### http2 \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                                   | \u9ED8\u8BA4                  |
|------------|--------------------|--------------------------------------|---------------------|
| initialConnectionWindowSize     | int            | http2 \u8FDE\u63A5\u7A97\u53E3\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282\uFF0C\u8303\u56F4\u4E3A65535\uFF5E2147483647          | 1048576               |
| initialStreamWindowSize     | int            | http2 \u6D41\u7A97\u53E3\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282\uFF0C\u8303\u56F4\u4E3A65535\uFF5E2147483647 | 65535               |
| maxConcurrentStreams    | int            | http2 \u6700\u5927\u5E76\u53D1\u6D41\u6570\u91CF\uFF0C\u8303\u56F4\u4E3A1\uFF5E2147483647        | 100               |


#### Upstream \u914D\u7F6E\u8BF4\u660E

| \u5B57\u6BB5         | \u7C7B\u578B                 | \u8BF4\u660E                    | \u9ED8\u8BA4                  |
|------------|--------------------|-----------------------|---------------------|
| connectionBufferLimits     | int            | \u8FDE\u63A5\u7F13\u51B2\u533A\u5927\u5C0F\uFF0C\u5355\u4F4D\u5B57\u8282          | 1048576               |
| idleTimeout    | int            | \u8FDE\u63A5\u7A7A\u95F2\u8D85\u65F6\u65F6\u95F4(\u7A7A\u95F2\u5B9A\u4E49\u662F\u6CA1\u6709\u672A\u5904\u7406\u5B8C\u7684\u8BF7\u6C42\uFF0C\u5982\u679C\u6709\u8BF7\u6C42\u5728\u5904\u7406\u4E2D\uFF0C\u4E0D\u4F1A\u5224\u5B9A\u4E3Aidle)\uFF0C\u5355\u4F4D\u79D2\uFF0C0\u8868\u793A\u5173\u95ED\u8BE5\u914D\u7F6E | 10               |


## TLS \u8BC1\u4E66\u5168\u5C40\u914D\u7F6E

> \u6CE8\u610F\uFF1A\u5F53\u524D\u4EC5\u5BF9Ingress\u6A21\u5F0F\u751F\u6548\uFF0CGateway API\u6682\u4E0D\u652F\u6301


Higress TLS \u7684\u5168\u5C40\u914D\u7F6E ConfigMap \u5BF9\u8C61 higress-https \uFF0C \u53C2\u8003\u914D\u7F6E\u5982\u4E0B\uFF1A 

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

### \u914D\u7F6E\u8BF4\u660E
| \u5B57\u6BB5                       | \u7C7B\u578B      | \u8BF4\u660E                                                                            | \u9ED8\u8BA4                    |
|--------------------------|---------|-------------------------------------------------------------------------------|-----------------------|
| name                     | boolean | \u662F\u5426\u542F\u52A8\u901A\u8FC7 ACME Issuer \u6765\u7B7E\u53D1\u8BC1\u4E66                                                      | true                  |
| renewBeforeDays          | int     | \u8BC1\u4E66\u8FC7\u671F\u524D\u591A\u5C11\u5929\u81EA\u52A8Renew\uFF0C \u6700\u5927\u503C\u4E3A90\u5929                                                      | 30                    |
| fallbackForInvalidSecret | boolean | \u5982\u679C\u5F00\u542F\uFF0C\u5F53 ingress TLS \u91CC\u914D\u7F6E secretName \u4E0D\u5B58\u5728\u65F6\uFF0C\u4F1A\u5728 credentialConfig \u914D\u7F6E\u91CC\u6839\u636E\u57DF\u540D\u5339\u914D secret | false                 |
| acmeIssuer               | array   | acmeIssuer \u8BBE\u7F6E                                                                 | \u53C2\u8003\u4E0B\u9762 acmeIssuer       |
| credentialConfig         | array   | credentialConfig \u8BBE\u7F6E                                                           | \u53C2\u8003\u4E0B\u9762 credentialConfig |


### credentialConfig \u914D\u7F6E

| \u5B57\u6BB5           | \u7C7B\u578B     | \u8BF4\u660E                                                                                | \u9ED8\u8BA4 |
|--------------|--------|-----------------------------------------------------------------------------------|----|
| tlsSecret    | string | \u8BC1\u4E66 secret \u540D\u79F0                                                                      | -  |
| tlsIssuer    | string | \u5BF9\u5E94 ACME Issuer \u540D\u79F0\uFF0C\u73B0\u5728\u53EA\u652F\u6301 letsencrypt\u3002\u4E0D\u586B tlsIssuer \u65F6\uFF0Cdomains\u53EF\u4EE5\u586B\u5217\u8868\u6216\u6CDB\u57DF\u540D\uFF0C\u7528\u4E8E\u5168\u5C40\u7BA1\u7406\u8FD9\u4E9B\u57DF\u540D\u7684secret\u914D\u7F6E\uFF1B \u5982\u679C\u8BBE\u7F6E\u4E3A letsencrypt\uFF0C domains \u4E0B\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A\u57DF\u540D\uFF0C\u800C\u4E14\u4E0D\u80FD\u662F\u6CDB\u57DF\u540D\uFF0C\u5E76\u4E14 tlsSecret \u4E0D\u80FD\u662F\u5DF2\u7ECF\u5B58\u5728\u7684\u975E Higress \u521B\u5EFA\u7684\u81EA\u52A8\u8BC1\u4E66 | -  |
| domains      | array  | \u57DF\u540D\u914D\u7F6E\uFF0C\u53EF\u4EE5\u662F\u6CDB\u57DF\u540D                                                                       | -  |


### acmeIssuer \u914D\u7F6E

| \u5B57\u6BB5                       | \u7C7B\u578B     | \u8BF4\u660E                            | \u9ED8\u8BA4 |
|--------------------------|--------|-------------------------------|---|
| name                     | string | ACME Issuer \u540D\u79F0\uFF0C\u53EA\u652F\u6301 letsencrypt | - |
| email                    | string | ACME Issuer \u90AE\u7BB1\uFF0C\u7528\u4E8E\u901A\u77E5\u8BC1\u4E66\u53D8\u66F4\u7B49\u4E8B\u4EF6                | - |

### \u5982\u4F55\u5F00\u542F\u548C\u5173\u95ED ACME Issuer \u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66

\u5B89\u88C5\u65F6\u9ED8\u8BA4\u542F\u52A8 ACME Issuer \u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66\u548C\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u90AE\u7BB1\u5730\u5740\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u6570\u5982\u4E0B\uFF1A

| **\u53C2\u6570\u540D**                          | **\u53C2\u6570\u8BF4\u660E**                            | **\u9ED8\u8BA4\u503C** |
|----------------------------------|-------------------------------------|---------|
|higress-core.controller.automaticHttps.enabled | \u662F\u5426\u5F00\u542FACME Issuer\u7B7E\u53D1\u8BC1\u4E66\uFF0C\u53EA\u652F\u6301 letsencrypt | true   |
|higress-core.controller.automaticHttps.email   | ACME Issuer \u90AE\u7BB1\uFF0C\u5982\u679C\u4E3A\u7A7A\uFF0C\u7CFB\u7EDF\u968F\u673A\u751F\u6210\u90AE\u7BB1\u5730\u5740        | -       |


`},i=function(){return t},l=function(){return[{depth:2,slug:"\u901A\u7528\u5168\u5C40\u914D\u7F6E",text:"\u901A\u7528\u5168\u5C40\u914D\u7F6E"},{depth:3,slug:"\u914D\u7F6E\u8BF4\u660E",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:4,slug:"tracing-\u914D\u7F6E\u8BF4\u660E",text:"Tracing \u914D\u7F6E\u8BF4\u660E"},{depth:5,slug:"skywalking-\u914D\u7F6E",text:"skywalking \u914D\u7F6E"},{depth:5,slug:"zipkin-\u914D\u7F6E",text:"zipkin \u914D\u7F6E"},{depth:5,slug:"opentelemetry-\u914D\u7F6E",text:"opentelemetry \u914D\u7F6E"},{depth:4,slug:"gzip-\u914D\u7F6E\u8BF4\u660E",text:"Gzip \u914D\u7F6E\u8BF4\u660E"},{depth:4,slug:"downstream-\u914D\u7F6E\u8BF4\u660E",text:"Downstream \u914D\u7F6E\u8BF4\u660E"},{depth:5,slug:"http2-\u914D\u7F6E\u8BF4\u660E",text:"http2 \u914D\u7F6E\u8BF4\u660E"},{depth:4,slug:"upstream-\u914D\u7F6E\u8BF4\u660E",text:"Upstream \u914D\u7F6E\u8BF4\u660E"},{depth:2,slug:"tls-\u8BC1\u4E66\u5168\u5C40\u914D\u7F6E",text:"TLS \u8BC1\u4E66\u5168\u5C40\u914D\u7F6E"},{depth:3,slug:"\u914D\u7F6E\u8BF4\u660E-1",text:"\u914D\u7F6E\u8BF4\u660E"},{depth:3,slug:"credentialconfig-\u914D\u7F6E",text:"credentialConfig \u914D\u7F6E"},{depth:3,slug:"acmeissuer-\u914D\u7F6E",text:"acmeIssuer \u914D\u7F6E"},{depth:3,slug:"\u5982\u4F55\u5F00\u542F\u548C\u5173\u95ED-acme-issuer-\u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66",text:"\u5982\u4F55\u5F00\u542F\u548C\u5173\u95ED ACME Issuer \u81EA\u52A8\u7BA1\u7406\u8BC1\u4E66"}]},s=r((F,E,u)=>{const{layout:f,...d}=a;return d.file=e,d.url=n,o`${v()}${y(t)}`})});export{s as Content,g as __tla,i as compiledContent,s as default,e as file,a as frontmatter,l as getHeadings,p as rawContent,n as url};
