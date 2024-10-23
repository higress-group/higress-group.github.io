import{c,__tla as o}from"./astro-component.BNo6A4i3.js";import{r,m as v,u as y,__tla as E}from"./constant.BV4LuVy-.js";import{__tla as f}from"./astro/assets-service.lesyujvn.js";let e,p,n,a,l,d,i,u=Promise.all([(()=>{try{return o}catch{}})(),(()=>{try{return E}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let s;s=`<p>\u8FD9\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528 Higress \u63D2\u4EF6 Go SDK \u5B9E\u73B0 HTTP \u8C03\u7528\u3002</p>
<h2 id="1-envoy-\u96C6\u7FA4cluster\u540D\u79F0\u548C\u670D\u52A1\u53D1\u73B0\u6765\u6E90">1 Envoy \u96C6\u7FA4\uFF08Cluster\uFF09\u540D\u79F0\u548C\u670D\u52A1\u53D1\u73B0\u6765\u6E90</h2>
<p>Higress \u63D2\u4EF6\u7684 Go SDK \u5728\u8FDB\u884C HTTP \u548C Redis \u8C03\u7528\u65F6\uFF0C\u662F\u901A\u8FC7\u6307\u5B9A\u7684\u96C6\u7FA4\u540D\u79F0\u6765\u8BC6\u522B\u5E76\u8FDE\u63A5\u5230\u76F8\u5E94\u7684 Envoy \u96C6\u7FA4\u3002 \u6B64\u5916\uFF0CHigress \u5229\u7528 <a href="https://higress.io/docs/latest/user/mcp-bridge/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">McpBridge</a> \u652F\u6301\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0C\u5305\u62EC\u9759\u6001\u914D\u7F6E\uFF08static\uFF09\u3001DNS\u3001Kubernetes \u670D\u52A1\u3001Eureka\u3001Consul\u3001Nacos\u3001\u4EE5\u53CA Zookeeper \u7B49\u3002
\u6BCF\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\u5BF9\u5E94\u7684\u96C6\u7FA4\u540D\u79F0\u751F\u6210\u89C4\u5219\u90FD\u6709\u6240\u4E0D\u540C\uFF0C\u8FD9\u4E9B\u89C4\u5219\u5728 cluster_wrapper.go \u4EE3\u7801\u6587\u4EF6\u4E2D\u6709\u6240\u4F53\u73B0\u3002
\u4E3A\u4E86\u5305\u88C5\u4E0D\u540C\u7684\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0CHigress \u63D2\u4EF6 Go SDK \u5B9A\u4E49\u4E86 Cluster \u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u5305\u542B\u4E24\u4E2A\u65B9\u6CD5\uFF1AClusterName \u548C HostName\u3002</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type Cluster interface {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u8FD4\u56DE Envoy \u96C6\u7FA4\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">ClusterName() string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u8FD4\u56DE Hostname, \u5728 HTTP \u8C03\u7528\u670D\u52A1\u65F6\u5019\uFF0C\u7528\u4E8E\u8BBE\u7F6E Http host \u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">HostName() string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type Cluster interface {\x7F    // \u8FD4\u56DE Envoy \u96C6\u7FA4\u540D\u79F0\x7F    ClusterName() string\x7F    // \u8FD4\u56DE Hostname, \u5728 HTTP \u8C03\u7528\u670D\u52A1\u65F6\u5019\uFF0C\u7528\u4E8E\u8BBE\u7F6E Http host \u8BF7\u6C42\u5934\x7F    HostName() string\x7F}"><div></div></button></div></figure></div>
<h3 id="11-\u9759\u6001\u914D\u7F6Estatic">1.1 \u9759\u6001\u914D\u7F6E\uFF08static\uFF09</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type StaticIpCluster struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ServiceName string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Port        int64</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Host        string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type StaticIpCluster struct {\x7F  ServiceName string\x7F  Port        int64\x7F  Host        string\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A<code dir="auto">outbound|&#x3C;port>||&#x3C;service_name>.static</code>\u3002</li>
<li>HostName \u89C4\u5219\u4E3A\uFF1A\u9ED8\u8BA4\u4E3A  &#x3C;service_name>\u3002</li>
</ul>
<h3 id="12-dns-\u914D\u7F6Edns">1.2 DNS \u914D\u7F6E\uFF08dns\uFF09</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type DnsCluster struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ServiceName string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Domain      string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Port        int64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type DnsCluster struct {\x7F  ServiceName string\x7F  Domain      string\x7F  Port        int64\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A<code dir="auto">outbound|&#x3C;Port>||&#x3C;ServiceName>.dns</code>\u3002</li>
<li>HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE<domain>\u3002</domain></li>
</ul>
<h3 id="13-kubernetes-\u670D\u52A1kubernetes">1.3 Kubernetes \u670D\u52A1\uFF08kubernetes\uFF09</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type K8sCluster struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ServiceName string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Namespace   string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Port        int64</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Version     string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Host        string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type K8sCluster struct {\x7F  ServiceName string\x7F  Namespace   string\x7F  Port        int64\x7F  Version     string\x7F  Host        string\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A<code dir="auto">outbound|&#x3C;Port>|&#x3C;Version>|&#x3C;ServiceName>.&#x3C;Namespace>.svc.cluster.local</code>\u3002</li>
<li>HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE <servicename>.<namespace>.svc.cluster.local\u3002</namespace></servicename></li>
</ul>
<h3 id="14-nacos">1.4 Nacos</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type NacosCluster struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ServiceName string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// use DEFAULT-GROUP by default</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Group       string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">NamespaceID string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Port        int64</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// set true if use edas/sae registry</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">IsExtRegistry bool</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Version       string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Host          string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type NacosCluster struct {\x7F  ServiceName string\x7F  // use DEFAULT-GROUP by default\x7F  Group       string\x7F  NamespaceID string\x7F  Port        int64\x7F  // set true if use edas/sae registry\x7F  IsExtRegistry bool\x7F  Version       string\x7F  Host          string\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A<code dir="auto">outbound|&#x3C;Port>|&#x3C;Version>|&#x3C;ServiceName>.&#x3C;Group>.&#x3C;NamespaceID>.nacos</code>\u3002</li>
<li>HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE &#x3C;service_name>\u3002</li>
</ul>
<h3 id="15-consul">1.5 Consul</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type ConsulCluster struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ServiceName string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Datacenter  string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Port        int64</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Host        string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type ConsulCluster struct {\x7F  ServiceName string\x7F  Datacenter  string\x7F  Port        int64\x7F  Host        string\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A<code dir="auto">outbound|&#x3C;Port>||&#x3C;ServiceName>.&#x3C;Datacenter>.consul</code>\u3002</li>
<li>HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE <servicename>\u3002</servicename></li>
</ul>
<h3 id="16-fqdn">1.6 FQDN</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type FQDNCluster struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">FQDN string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Host string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Port int64</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="type FQDNCluster struct {\x7F  FQDN string\x7F  Host string\x7F  Port int64\x7F}"><div></div></button></div></figure></div>
<ul>
<li>\u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A<code dir="auto">outbound|&#x3C;Port>||&#x3C;FQDN></code>\u3002</li>
<li>HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE <code dir="auto">&#x3C;FQDN></code>\u3002</li>
</ul>
<h2 id="2-http-\u8C03\u7528">2 HTTP \u8C03\u7528</h2>
<p>http_wrapper.go \u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u56DE\u8C03\u51FD\u6570</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type ResponseCallback func(statusCode int, responseHeaders http.Header, responseBody []byte)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// HTTP \u8C03\u7528\u63A5\u53E3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type HttpClient interface {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Get(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Head(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Options(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Post(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Put(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Patch(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Delete(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Connect(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Trace(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">Call(method, path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u5B9E\u73B0 httpClient \u63A5\u53E3</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type ClusterClient[C Cluster] struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">cluster C</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// \u56DE\u8C03\u51FD\u6570\x7Ftype ResponseCallback func(statusCode int, responseHeaders http.Header, responseBody []byte)\x7F\x7F// HTTP \u8C03\u7528\u63A5\u53E3\x7Ftype HttpClient interface {\x7F  Get(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Head(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Options(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Post(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Put(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Patch(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Delete(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Connect(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Trace(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F  Call(method, path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error\x7F}\x7F\x7F// \u5B9E\u73B0 httpClient \u63A5\u53E3\x7Ftype ClusterClient[C Cluster] struct {\x7F  cluster C\x7F}"><div></div></button></div></figure></div>
<p>ClusterClient Get\u3001Head\u3001Options\u3001Post\u3001PUT\u3001Patch\u3001Delete\u3001Connect\u3001Trace\u3001Call \u65B9\u6CD5\u6700\u540E\u8C03\u7528 HttpCall \u65B9\u6CD5\uFF0C\u5176\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func HttpCall(cluster Cluster, method, path string, headers [][2]string, body []byte,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">callback ResponseCallback, timeoutMillisecond ...uint32) error {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5220\u9664 :method, :path, :authority</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">for i := len(headers) - 1; i >= 0; i-- {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">key := headers[i][0]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if key == ":method" || key == ":path" || key == ":authority" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">headers = append(headers[:i], headers[i+1:]...)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8BBE\u7F6E timeout</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">var timeout uint32 = 500</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if len(timeoutMillisecond) > 0 {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">timeout = timeoutMillisecond[0]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u91CD\u65B0\u8BBE\u7F6E :method, :path, :authority</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">headers = append(headers, [2]string{":method", method}, [2]string{":path", path}, [2]string{":authority", cluster.HostName()})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">requestID := uuid.New().String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8C03\u7528 HTTP \u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">_, err := proxywasm.DispatchHttpCall(cluster.ClusterName(), headers, body, nil, timeout, func(numHeaders, bodySize, numTrailers int) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u83B7\u53D6 HTTP \u54CD\u5E94 body \u548C headers</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">respBody, err := proxywasm.GetHttpCallResponseBody(0, bodySize)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">respHeaders, err := proxywasm.GetHttpCallResponseHeaders()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">code := http.StatusBadGateway</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">var normalResponse bool</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">headers := make(http.Header)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">for _, h := range respHeaders {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">if h[0] == ":status" {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">code, err = strconv.Atoi(h[1])</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">..</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">headers.Add(h[0], h[1])</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6\u56DE\u8C03\u51FD\u6570</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">callback(code, headers, respBody)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return err</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="func HttpCall(cluster Cluster, method, path string, headers [][2]string, body []byte,\x7F  callback ResponseCallback, timeoutMillisecond ...uint32) error {\x7F\x7F  // \u5220\u9664 :method, :path, :authority\x7F  for i := len(headers) - 1; i >= 0; i-- {\x7F    key := headers[i][0]\x7F    if key == &#x22;:method&#x22; || key == &#x22;:path&#x22; || key == &#x22;:authority&#x22; {\x7F      headers = append(headers[:i], headers[i+1:]...)\x7F    }\x7F  }\x7F  // \u8BBE\u7F6E timeout\x7F  var timeout uint32 = 500\x7F  if len(timeoutMillisecond) > 0 {\x7F    timeout = timeoutMillisecond[0]\x7F  }\x7F  // \u91CD\u65B0\u8BBE\u7F6E :method, :path, :authority\x7F  headers = append(headers, [2]string{&#x22;:method&#x22;, method}, [2]string{&#x22;:path&#x22;, path}, [2]string{&#x22;:authority&#x22;, cluster.HostName()})\x7F  requestID := uuid.New().String()\x7F  // \u8C03\u7528 HTTP \u8BF7\u6C42\x7F  _, err := proxywasm.DispatchHttpCall(cluster.ClusterName(), headers, body, nil, timeout, func(numHeaders, bodySize, numTrailers int) {\x7F    // \u83B7\u53D6 HTTP \u54CD\u5E94 body \u548C headers\x7F    respBody, err := proxywasm.GetHttpCallResponseBody(0, bodySize)\x7F    ...\x7F    respHeaders, err := proxywasm.GetHttpCallResponseHeaders()\x7F    ...\x7F    code := http.StatusBadGateway\x7F    var normalResponse bool\x7F    headers := make(http.Header)\x7F    for _, h := range respHeaders {\x7F      if h[0] == &#x22;:status&#x22; {\x7F        code, err = strconv.Atoi(h[1])\x7F        ..\x7F      }\x7F      headers.Add(h[0], h[1])\x7F    }\x7F    ...\x7F    // \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6\u56DE\u8C03\u51FD\u6570\x7F    callback(code, headers, respBody)\x7F  })\x7F    ...\x7F  return err\x7F}"><div></div></button></div></figure></div>
<h2 id="3-easy-jwt-\u63D2\u4EF6\u5F00\u53D1">3 easy-jwt \u63D2\u4EF6\u5F00\u53D1</h2>
<p>\u5728\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u53EF\u80FD\u9700\u8981\u72EC\u7ACB\u8BA4\u8BC1\u6388\u6743\u670D\u52A1\uFF0C\u6765\u5B8C\u6210\u6BCF\u4E2A\u8BF7\u6C42\u7684\u8BA4\u8BC1\u548C\u6388\u6743\uFF0C\u73B0\u5728\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684 easy-jwt \u63D2\u4EF6\u6765\u6F14\u793A\u5982\u4F55\u5728 Wasm \u63D2\u4EF6\u8FDB\u884C HTTP \u8C03\u7528\u3002
\u5176\u63D2\u4EF6\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\u56FE\uFF1A
<img src="https://img.alicdn.com/imgextra/i1/O1CN01DPi2w6244OvEejP1q_!!6000000007337-0-tps-1488-682.jpg" alt="img" referrerpolicy="no-referrer"></p>
<p>Token Server \u63D0\u4F9B 2 \u4E2A\u63A5\u53E3\uFF1A</p>
<ul>
<li>/api/token/auth: \u8BA4\u8BC1\u4EE4\u724C\u63A5\u53E3</li>
<li>/api/token/create: \u751F\u6210\u4EE4\u724C\u63A5\u53E3</li>
</ul>
<h3 id="31-\u63D2\u4EF6\u90E8\u5206\u6838\u5FC3\u4EE3\u7801">3.1 \u63D2\u4EF6\u90E8\u5206\u6838\u5FC3\u4EE3\u7801</h3>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">package main</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">const (</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">AuthUIDHeader = "x-auth-user"</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func main() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">wrapper.SetCtx(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u63D2\u4EF6\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"easy-jwt",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ParseConfigBy(parseConfig),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">type JwtConfig struct {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// HTTP Client</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">client wrapper.HttpClient</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u4EE4\u724C\u670D\u52A1\u5668\u7684\u5B8C\u5168\u9650\u5B9A\u57DF\u540D</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tokenServerFQDN string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u4EE4\u724C\u670D\u52A1\u5668\u7684\u7AEF\u53E3</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tokenServerPort int</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// HTTP\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4EE4\u724C\u7684\u5B57\u6BB5\u540D\u79F0</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tokenFromHeaderName string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u4EE4\u724C\u524D\u7F00\uFF0C\u5982Bearer</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">tokenFromHeaderPrefix string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u63D2\u4EF6\u5C06\u5FFD\u7565\u4EE4\u724C\u9A8C\u8BC1 UR L\u5217\u8868</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">ignoreUrls []string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u533F\u540D\u4EE4\u724C\uFF0C\u7528\u4E8E\u672A\u8BA4\u8BC1\u7684\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">anonymousToken string</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u533F\u540D\u7528\u6237ID</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">anonymousUID int</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5F53\u4EE4\u724C\u9A8C\u8BC1\u5931\u8D25\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">responseErrorStatusCode uint32</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u683C\u5F0F</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">responseErrorBody string</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func parseConfig(json gjson.Result, config *JwtConfig, log wrapper.Log) error {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">log.Debugf("parseConfig()")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u89E3\u6790\u63D2\u4EF6\u914D\u7F6E</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.tokenServerFQDN = json.Get("tokenServerFQDN").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.tokenServerPort = int(json.Get("tokenServerPort").Int())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.tokenFromHeaderName = json.Get("tokenFromHeaderName").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.tokenFromHeaderPrefix = json.Get("tokenFromHeaderPrefix").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.anonymousUID = int(json.Get("anonymousUID").Int())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.anonymousToken = json.Get("anonymousToken").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.responseErrorBody = json.Get("responseErrorBoy").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.responseErrorStatusCode = uint32(json.Get("responseErrorStatusCode").Int())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.responseErrorBody = json.Get("responseErrorBody").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.ignoreUrls = make([]string, 0)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">for _, item := range json.Get("ignoreUrls").Array() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">config.ignoreUrls = append(config.ignoreUrls, item.String())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u8BBE\u7F6E HTTP Client</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">FQDN: json.Get("tokenServerFQDN").String(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">Port: json.Get("tokenServerPort").Int(),</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">log.Debugf("parseConfig result:%+v", config)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return nil</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func onHttpRequestHeaders(ctx wrapper.HttpContext, config JwtConfig, log wrapper.Log) types.Action {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u9996\u5148\u68C0\u67E5\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\u5426\u5728 ignoreUrls \u5217\u8868\u4E2D\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u6DFB\u52A0\u533F\u540D\u7528\u6237ID\u5230\u8BF7\u6C42\u5934\u5E76\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">rawPath := ctx.Path()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">path, _ := url.Parse(rawPath)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">for _, url := range config.ignoreUrls {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">if isPathMatch(path.Path, url) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", config.anonymousUID))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5982\u679C\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4EE4\u724C\uFF0C\u63D2\u4EF6\u5C06\u5C1D\u8BD5\u4ECE\u8BF7\u6C42\u5934\u4E2D\u63D0\u53D6\u4EE4\u724C</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">token, err := extractTokenFromHeader(ctx, config)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">log.Debugf("extractTokenFromHeader() error: %v", err)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">body := fmt.Sprintf(config.responseErrorBody, err.Error())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u5982\u679C\u662F\u533F\u540D\u4EE4\u724C\uFF0C\u5219\u6DFB\u52A0\u533F\u540D\u7528\u6237ID\u5230\u8BF7\u6C42\u5934\u5E76\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if len(config.anonymousToken) > 0 &#x26;&#x26; config.anonymousToken == token {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", config.anonymousUID))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">authRequest, _ := json.Marshal(map[string]string{"token": token})</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">log.Debugf("call token-server with auth request:%s", string(authRequest))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u63D2\u4EF6\u5C06\u4F7F\u7528\u914D\u7F6E\u7684HTTP\u5BA2\u6237\u7AEF\u5411\u4EE4\u724C\u670D\u52A1\u5668\u53D1\u9001POST\u8BF7\u6C42\uFF0C\u4EE5\u9A8C\u8BC1\u4EE4\u724C\u7684\u6709\u6548\u6027</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">err2 := config.client.Post(</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">"/api/token/auth",</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">[][2]string{{"content-type", "application/json"}},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">authRequest,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">func(statusCode int, responseHeaders http.Header, responseBody []byte) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">defer func() {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">// \u4FDD\u8BC1\u6062\u590D\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">_ = proxywasm.ResumeHttpRequest()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}()</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">log.Debugf("auth response status:%d, response:%s", statusCode, string(responseBody))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">var jsonData gjson.Result</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">jsonData = gjson.ParseBytes(responseBody)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">if statusCode != 200 {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">// \u5982\u679C\u54CD\u5E94\u72B6\u6001\u7801\u4E0D\u662F200\uFF0C\u8868\u793A\u9A8C\u8BC1\u5931\u8D25\uFF0C\u63D2\u4EF6\u5C06\u76F4\u63A5\u53D1\u9001\u9519\u8BEF\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">message := jsonData.Get("message").String()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">body := fmt.Sprintf(config.responseErrorBody, message)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">} else {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">// \u5982\u679C\u9A8C\u8BC1\u6210\u529F\uFF0C\u63D2\u4EF6\u5C06\u4ECE\u54CD\u5E94\u4E2D\u63D0\u53D6\u7528\u6237ID\uFF0C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230\u540E\u7EED\u8BF7\u6C42\u5934\u4E2D</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">uid := jsonData.Get("uid").Int()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", uid))</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">      </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">2000,</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">)</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">if err2 != nil {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">// \u5982\u679C\u8FDE\u63A5\u5931\u8D25\uFF0C\u5219\u76F4\u63A5\u53D1\u9001\u9519\u8BEF\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">log.Debugf("call token server error:%v", err2)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">body := fmt.Sprintf(config.responseErrorBody, err2.Error())</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">return types.ActionContinue</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">// \u6682\u505C\u8BF7\u6C42\u5904\u7406\uFF0C\u76F4\u5230\u8C03\u7528 proxywasm.ResumeHttpRequest() \u6062\u590D\u8BF7\u6C42</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">return types.ActionPause</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func extractTokenFromHeader(ctx wrapper.HttpContext, config JwtConfig) (string, error) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">func isPathMatch(path string, url string) bool {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">  </span></span><span style="--0:#e1e4e8">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="package main\x7F...\x7F\x7Fconst (\x7F  AuthUIDHeader = &#x22;x-auth-user&#x22;\x7F)\x7F\x7Ffunc main() {\x7F  wrapper.SetCtx(\x7F    // \u63D2\u4EF6\u540D\u79F0\x7F    &#x22;easy-jwt&#x22;,\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\x7F    wrapper.ParseConfigBy(parseConfig),\x7F    // \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934\x7F    wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),\x7F  )\x7F}\x7F\x7F// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E\x7Ftype JwtConfig struct {\x7F  // HTTP Client\x7F  client wrapper.HttpClient\x7F  // \u4EE4\u724C\u670D\u52A1\u5668\u7684\u5B8C\u5168\u9650\u5B9A\u57DF\u540D\x7F  tokenServerFQDN string\x7F  // \u4EE4\u724C\u670D\u52A1\u5668\u7684\u7AEF\u53E3\x7F  tokenServerPort int\x7F  // HTTP\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4EE4\u724C\u7684\u5B57\u6BB5\u540D\u79F0\x7F  tokenFromHeaderName string\x7F  // \u4EE4\u724C\u524D\u7F00\uFF0C\u5982Bearer\x7F  tokenFromHeaderPrefix string\x7F  // \u63D2\u4EF6\u5C06\u5FFD\u7565\u4EE4\u724C\u9A8C\u8BC1 UR L\u5217\u8868\x7F  ignoreUrls []string\x7F  // \u533F\u540D\u4EE4\u724C\uFF0C\u7528\u4E8E\u672A\u8BA4\u8BC1\u7684\u8BF7\u6C42\x7F  anonymousToken string\x7F  // \u533F\u540D\u7528\u6237ID\x7F  anonymousUID int\x7F  // \u5F53\u4EE4\u724C\u9A8C\u8BC1\u5931\u8D25\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801\x7F  responseErrorStatusCode uint32\x7F  // \u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u683C\u5F0F\x7F  responseErrorBody string\x7F}\x7F\x7Ffunc parseConfig(json gjson.Result, config *JwtConfig, log wrapper.Log) error {\x7F  log.Debugf(&#x22;parseConfig()&#x22;)\x7F  // \u89E3\u6790\u63D2\u4EF6\u914D\u7F6E\x7F  config.tokenServerFQDN = json.Get(&#x22;tokenServerFQDN&#x22;).String()\x7F  config.tokenServerPort = int(json.Get(&#x22;tokenServerPort&#x22;).Int())\x7F  config.tokenFromHeaderName = json.Get(&#x22;tokenFromHeaderName&#x22;).String()\x7F  config.tokenFromHeaderPrefix = json.Get(&#x22;tokenFromHeaderPrefix&#x22;).String()\x7F  config.anonymousUID = int(json.Get(&#x22;anonymousUID&#x22;).Int())\x7F  config.anonymousToken = json.Get(&#x22;anonymousToken&#x22;).String()\x7F  config.responseErrorBody = json.Get(&#x22;responseErrorBoy&#x22;).String()\x7F  config.responseErrorStatusCode = uint32(json.Get(&#x22;responseErrorStatusCode&#x22;).Int())\x7F  config.responseErrorBody = json.Get(&#x22;responseErrorBody&#x22;).String()\x7F  config.ignoreUrls = make([]string, 0)\x7F  for _, item := range json.Get(&#x22;ignoreUrls&#x22;).Array() {\x7F    config.ignoreUrls = append(config.ignoreUrls, item.String())\x7F  }\x7F  // \u8BBE\u7F6E HTTP Client\x7F  config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{\x7F    FQDN: json.Get(&#x22;tokenServerFQDN&#x22;).String(),\x7F    Port: json.Get(&#x22;tokenServerPort&#x22;).Int(),\x7F  })\x7F  log.Debugf(&#x22;parseConfig result:%+v&#x22;, config)\x7F  return nil\x7F}\x7F\x7Ffunc onHttpRequestHeaders(ctx wrapper.HttpContext, config JwtConfig, log wrapper.Log) types.Action {\x7F  // \u9996\u5148\u68C0\u67E5\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\u5426\u5728 ignoreUrls \u5217\u8868\u4E2D\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u6DFB\u52A0\u533F\u540D\u7528\u6237ID\u5230\u8BF7\u6C42\u5934\u5E76\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42\x7F  rawPath := ctx.Path()\x7F  path, _ := url.Parse(rawPath)\x7F  for _, url := range config.ignoreUrls {\x7F    if isPathMatch(path.Path, url) {\x7F      proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf(&#x22;%d&#x22;, config.anonymousUID))\x7F      return types.ActionContinue\x7F    }\x7F  }\x7F  // \u5982\u679C\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4EE4\u724C\uFF0C\u63D2\u4EF6\u5C06\u5C1D\u8BD5\u4ECE\u8BF7\u6C42\u5934\u4E2D\u63D0\u53D6\u4EE4\u724C\x7F  token, err := extractTokenFromHeader(ctx, config)\x7F  if err != nil {\x7F    log.Debugf(&#x22;extractTokenFromHeader() error: %v&#x22;, err)\x7F    body := fmt.Sprintf(config.responseErrorBody, err.Error())\x7F    proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{&#x22;content-type&#x22;, &#x22;application/json&#x22;}}, []byte(body), -1)\x7F    return types.ActionContinue\x7F  }\x7F  // \u5982\u679C\u662F\u533F\u540D\u4EE4\u724C\uFF0C\u5219\u6DFB\u52A0\u533F\u540D\u7528\u6237ID\u5230\u8BF7\u6C42\u5934\u5E76\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42\x7F  if len(config.anonymousToken) > 0 &#x26;&#x26; config.anonymousToken == token {\x7F    proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf(&#x22;%d&#x22;, config.anonymousUID))\x7F    return types.ActionContinue\x7F  }\x7F\x7F  authRequest, _ := json.Marshal(map[string]string{&#x22;token&#x22;: token})\x7F  log.Debugf(&#x22;call token-server with auth request:%s&#x22;, string(authRequest))\x7F  // \u63D2\u4EF6\u5C06\u4F7F\u7528\u914D\u7F6E\u7684HTTP\u5BA2\u6237\u7AEF\u5411\u4EE4\u724C\u670D\u52A1\u5668\u53D1\u9001POST\u8BF7\u6C42\uFF0C\u4EE5\u9A8C\u8BC1\u4EE4\u724C\u7684\u6709\u6548\u6027\x7F  err2 := config.client.Post(\x7F    &#x22;/api/token/auth&#x22;,\x7F    [][2]string{{&#x22;content-type&#x22;, &#x22;application/json&#x22;}},\x7F    authRequest,\x7F    func(statusCode int, responseHeaders http.Header, responseBody []byte) {\x7F      defer func() {\x7F        // \u4FDD\u8BC1\u6062\u590D\u8BF7\u6C42\x7F        _ = proxywasm.ResumeHttpRequest()\x7F      }()\x7F\x7F      log.Debugf(&#x22;auth response status:%d, response:%s&#x22;, statusCode, string(responseBody))\x7F      var jsonData gjson.Result\x7F      jsonData = gjson.ParseBytes(responseBody)\x7F      if statusCode != 200 {\x7F        // \u5982\u679C\u54CD\u5E94\u72B6\u6001\u7801\u4E0D\u662F200\uFF0C\u8868\u793A\u9A8C\u8BC1\u5931\u8D25\uFF0C\u63D2\u4EF6\u5C06\u76F4\u63A5\u53D1\u9001\u9519\u8BEF\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002\x7F        message := jsonData.Get(&#x22;message&#x22;).String()\x7F        body := fmt.Sprintf(config.responseErrorBody, message)\x7F        proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{&#x22;content-type&#x22;, &#x22;application/json&#x22;}}, []byte(body), -1)\x7F      } else {\x7F        // \u5982\u679C\u9A8C\u8BC1\u6210\u529F\uFF0C\u63D2\u4EF6\u5C06\u4ECE\u54CD\u5E94\u4E2D\u63D0\u53D6\u7528\u6237ID\uFF0C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230\u540E\u7EED\u8BF7\u6C42\u5934\u4E2D\x7F        uid := jsonData.Get(&#x22;uid&#x22;).Int()\x7F        proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf(&#x22;%d&#x22;, uid))\x7F      }\x7F    },\x7F    2000,\x7F  )\x7F\x7F  if err2 != nil {\x7F    // \u5982\u679C\u8FDE\u63A5\u5931\u8D25\uFF0C\u5219\u76F4\u63A5\u53D1\u9001\u9519\u8BEF\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002\x7F    log.Debugf(&#x22;call token server error:%v&#x22;, err2)\x7F    body := fmt.Sprintf(config.responseErrorBody, err2.Error())\x7F    proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{&#x22;content-type&#x22;, &#x22;application/json&#x22;}}, []byte(body), -1)\x7F    return types.ActionContinue\x7F  }\x7F  // \u6682\u505C\u8BF7\u6C42\u5904\u7406\uFF0C\u76F4\u5230\u8C03\u7528 proxywasm.ResumeHttpRequest() \u6062\u590D\u8BF7\u6C42\x7F  return types.ActionPause\x7F}\x7F\x7Ffunc extractTokenFromHeader(ctx wrapper.HttpContext, config JwtConfig) (string, error) {\x7F  ...\x7F}\x7F\x7Ffunc isPathMatch(path string, url string) bool {\x7F  ...\x7F}"><div></div></button></div></figure></div>
<p>\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\uFF1A</p>
<ul>
<li>\u521D\u59CB\u5316\u63D2\u4EF6</li>
<li>\u89E3\u6790\u914D\u7F6E</li>
<li>onHttpRequestHeaders \u5904\u7406
<ul>
<li>\u68C0\u67E5\u8BF7\u6C42\u8DEF\u5F84\u662F\u5426\u5728 ignoreUrls \u5217\u8868\u4E2D
<ul>
<li>\u662F\uFF1A\u6DFB\u52A0\u533F\u540D UID \u5230\u8BF7\u6C42\u5934\uFF0C\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42</li>
<li>\u5426\uFF1A\u7EE7\u7EED</li>
</ul>
</li>
<li>\u4ECE\u8BF7\u6C42\u5934\u4E2D\u63D0\u53D6\u4EE4\u724C\uFF0C\u68C0\u67E5\u4EE4\u724C\u662F\u5426\u5B58\u5728
<ul>
<li>\u5B58\u5728\uFF1A\u7EE7\u7EED</li>
<li>\u4E0D\u5B58\u5728\uFF1A\u8FD4\u56DE\u9519\u8BEF\uFF0C\u53D1\u9001\u54CD\u5E94</li>
</ul>
</li>
<li>\u9A8C\u8BC1\u4EE4\u724C
<ul>
<li>\u5982\u679C\u4EE4\u724C\u662F\u533F\u540D\u4EE4\u724C\uFF0C\u6DFB\u52A0\u533F\u540D UID \u5230\u8BF7\u6C42\u5934\uFF0C\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42</li>
<li>\u5982\u679C\u4EE4\u724C\u4E0D\u662F\u533F\u540D\u4EE4\u724C\uFF0C\u8C03\u7528\u8BA4\u8BC1\u670D\u52A1 /api/token/auth \u63A5\u53E3\u9A8C\u8BC1\u4EE4\u724C
<ul>
<li>\u5982\u679C\u9A8C\u8BC1\u6210\u529F\uFF0C\u4ECE\u54CD\u5E94\u4E2D\u63D0\u53D6 UID\uFF0C\u6DFB\u52A0\u5230\u8BF7\u6C42\u5934\u4E2D\uFF0C\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42</li>
<li>\u5982\u679C\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8FD4\u56DE\u9519\u8BEF\uFF0C\u53D1\u9001\u54CD\u5E94</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="32-\u90E8\u7F72\u548C\u9A8C\u8BC1">3.2 \u90E8\u7F72\u548C\u9A8C\u8BC1</h3>
<ol>
<li>\u90E8\u7F72 YAML \u5982\u4E0B\uFF1A</li>
</ol>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Namespace</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">env</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POD_NAME</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">NAMESPACE</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.namespace</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">requests</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">10m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">3000</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">apps/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Deployment</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">replicas</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">1</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">matchLabels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">template</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">labels</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">containers</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">image</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">registry.cn-hangzhou.aliyuncs.com/2456868764/token-server:1.0.0</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">env</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">POD_NAME</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.name</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">            </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">NAMESPACE</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">valueFrom</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">fieldRef</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">fieldPath</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">metadata.namespace</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">resources</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">requests</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">cpu</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">10m</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">selector</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">app</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ports</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">protocol</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">TCP</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9090</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">targetPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9090</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.k8s.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Ingress</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">ingress-foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-course</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">ingressClassName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">rules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">host</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"foo.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">http</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">paths</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">          </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">pathType</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Prefix</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">path</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"/"</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#85E89D">backend</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">service</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">echo-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">                </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">                  </span><span style="--0:#85E89D">number</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8080</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server.higress-course.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9090</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">---</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">extensions.higress.io/v1alpha1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">WasmPlugin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">easy-jwt</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">priority</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">200</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">matchRules</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">ingress</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#9ECBFF">higress-course/ingress-foo</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">config</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">tokenServerFQDN</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"token-server.dns"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">tokenServerPort</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9090</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">tokenFromHeaderName</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Authorization"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">tokenFromHeaderPrefix</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Bearer "</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">anonymousToken</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"AnonymousToken"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">anonymousUID</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">0</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">responseErrorStatusCode</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">401</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">responseErrorBody</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"{</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">message</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">:</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">%s</span><span style="--0:#79B8FF">\\"</span><span style="--0:#9ECBFF">}"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">oci://registry.cn-hangzhou.aliyuncs.com/2456868764/easy-jwt:1.0.0</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: v1\x7Fkind: Namespace\x7Fmetadata:\x7F  name: higress-course\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: echo-server\x7F  namespace: higress-course\x7Fspec:\x7F  selector:\x7F    app: echo-server\x7F  ports:\x7F    - protocol: TCP\x7F      port: 8080\x7F      targetPort: 3000\x7F---\x7FapiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: echo-server\x7F  namespace: higress-course\x7F  labels:\x7F    app: echo-server\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: echo-server\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: echo-server\x7F    spec:\x7F      containers:\x7F        - name: echo-server\x7F          image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0\x7F          env:\x7F            - name: POD_NAME\x7F              valueFrom:\x7F                fieldRef:\x7F                  fieldPath: metadata.name\x7F            - name: NAMESPACE\x7F              valueFrom:\x7F                fieldRef:\x7F                  fieldPath: metadata.namespace\x7F          resources:\x7F            requests:\x7F              cpu: 10m\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: echo-server\x7F  namespace: higress-course\x7Fspec:\x7F  selector:\x7F    app: echo-server\x7F  ports:\x7F    - protocol: TCP\x7F      port: 8080\x7F      targetPort: 3000\x7F---\x7FapiVersion: apps/v1\x7Fkind: Deployment\x7Fmetadata:\x7F  name: token-server\x7F  namespace: higress-course\x7F  labels:\x7F    app: token-server\x7Fspec:\x7F  replicas: 1\x7F  selector:\x7F    matchLabels:\x7F      app: token-server\x7F  template:\x7F    metadata:\x7F      labels:\x7F        app: token-server\x7F    spec:\x7F      containers:\x7F        - name: token-server\x7F          image: registry.cn-hangzhou.aliyuncs.com/2456868764/token-server:1.0.0\x7F          env:\x7F            - name: POD_NAME\x7F              valueFrom:\x7F                fieldRef:\x7F                  fieldPath: metadata.name\x7F            - name: NAMESPACE\x7F              valueFrom:\x7F                fieldRef:\x7F                  fieldPath: metadata.namespace\x7F          resources:\x7F            requests:\x7F              cpu: 10m\x7F---\x7FapiVersion: v1\x7Fkind: Service\x7Fmetadata:\x7F  name: token-server\x7F  namespace: higress-course\x7Fspec:\x7F  selector:\x7F    app: token-server\x7F  ports:\x7F    - protocol: TCP\x7F      port: 9090\x7F      targetPort: 9090\x7F---\x7FapiVersion: networking.k8s.io/v1\x7Fkind: Ingress\x7Fmetadata:\x7F  name: ingress-foo\x7F  namespace: higress-course\x7Fspec:\x7F  ingressClassName: higress\x7F  rules:\x7F    - host: &#x22;foo.com&#x22;\x7F      http:\x7F        paths:\x7F          - pathType: Prefix\x7F            path: &#x22;/&#x22;\x7F            backend:\x7F              service:\x7F                name: echo-server\x7F                port:\x7F                  number: 8080\x7F---\x7FapiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    - name: token-server\x7F      domain: token-server.higress-course.svc.cluster.local\x7F      port: 9090\x7F      type: dns\x7F---\x7FapiVersion: extensions.higress.io/v1alpha1\x7Fkind: WasmPlugin\x7Fmetadata:\x7F  name: easy-jwt\x7F  namespace: higress-system\x7Fspec:\x7F  priority: 200\x7F  matchRules:\x7F    - ingress:\x7F      - higress-course/ingress-foo\x7F      config:\x7F        tokenServerFQDN: &#x22;token-server.dns&#x22;\x7F        tokenServerPort: 9090\x7F        tokenFromHeaderName: &#x22;Authorization&#x22;\x7F        tokenFromHeaderPrefix: &#x22;Bearer &#x22;\x7F        anonymousToken: &#x22;AnonymousToken&#x22;\x7F        anonymousUID: 0\x7F        responseErrorStatusCode: 401\x7F        responseErrorBody: &#x22;{\\&#x22;message\\&#x22;:\\&#x22;%s\\&#x22;}&#x22;\x7F  url: oci://registry.cn-hangzhou.aliyuncs.com/2456868764/easy-jwt:1.0.0"><div></div></button></div></figure></div>
<ol start="2">
<li>\u83B7\u53D6\u4EE4\u724C</li>
</ol>
<p>\u83B7\u53D6 uid \u4E3A 100 \u7684\u7528\u6237\u7684\u8BBF\u95EE\u4EE4\u724C\uFF0C\u5176\u547D\u4EE4\u5982\u4E0B\uFF0C\u5176\u4E2D <code dir="auto">&#x3C;token-server-pod></code> \u662F token-server pod \u540D\u79F0\u3002</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">&#x3C;token-server-pod></span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-course</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://127.0.0.1:9090/api/token/create</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">'{"uid":100}'</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"content-type:application/json"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span><span style="--0:#B392F0">"token"</span><span style="--0:#79B8FF">:</span><span style="--0:#B392F0">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY"</span><span style="--0:#B392F0">}%</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl exec <token-server-pod> -n higress-course -- curl -X POST http://127.0.0.1:9090/api/token/create -d &#x27;{&#x22;uid&#x22;:100}&#x27; -H &#x22;content-type:application/json&#x22;\x7F\x7F{&#x22;token&#x22;:&#x22;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY&#x22;}%"><div></div></button></div></figure></div>
<ol start="3">
<li>\u8BF7\u6C42\u9A8C\u8BC1</li>
</ol>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8">  </span><span style="--0:#9ECBFF">http://127.0.0.1/hello</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-X</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">POST</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-d</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"{}"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"host:foo.com"</span><span style="--0:#E1E4E8">  </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY"</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-H</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"content-type:application/json"</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">{</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"path"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"/hello",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"foo.com",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"method"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"POST",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"proto"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"HTTP/1.1",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"headers"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Accept"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"*/*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Authorization"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Content-Length"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Content-Type"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"application/json"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Original-Host"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"foo.com"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"Req-Start-Time"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"1722850461721"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"User-Agent"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"curl/8.1.2"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Auth-User"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"100"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-B3-Sampled"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"0"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-B3-Spanid"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"642eab8e332d6500"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-B3-Traceid"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"d9b9e94203603997642eab8e332d6500"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Envoy-Attempt-Count"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Envoy-Decorator-Operation"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"echo-server.higress-course.svc.cluster.local:8080/*"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Envoy-Internal"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"true"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Forwarded-For"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"192.168.65.1"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Forwarded-Proto"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"http"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">],</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">"X-Request-Id"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> [</span></div></div><div class="ec-line"><div class="code"><span class="indent">   </span><span style="--0:#B392F0">"47ff21bc-c3d5-4932-8bfb-361d268d319d"</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">]</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8"> </span></span><span style="--0:#E1E4E8">},</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"namespace"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"higress-course",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"ingress"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"service"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"pod"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"echo-server-6f4df5fcff-nksqz",</span></div></div><div class="ec-line"><div class="code"><span class="indent"> </span><span style="--0:#B392F0">"body"</span><span style="--0:#79B8FF">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">{}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="curl  http://127.0.0.1/hello -X POST -d &#x22;{}&#x22; -H &#x22;host:foo.com&#x22;  -H &#x22;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY&#x22; -H &#x22;content-type:application/json&#x22;\x7F\x7F{\x7F &#x22;path&#x22;: &#x22;/hello&#x22;,\x7F &#x22;host&#x22;: &#x22;foo.com&#x22;,\x7F &#x22;method&#x22;: &#x22;POST&#x22;,\x7F &#x22;proto&#x22;: &#x22;HTTP/1.1&#x22;,\x7F &#x22;headers&#x22;: {\x7F  &#x22;Accept&#x22;: [\x7F   &#x22;*/*&#x22;\x7F  ],\x7F  &#x22;Authorization&#x22;: [\x7F   &#x22;Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY&#x22;\x7F  ],\x7F  &#x22;Content-Length&#x22;: [\x7F   &#x22;2&#x22;\x7F  ],\x7F  &#x22;Content-Type&#x22;: [\x7F   &#x22;application/json&#x22;\x7F  ],\x7F  &#x22;Original-Host&#x22;: [\x7F   &#x22;foo.com&#x22;\x7F  ],\x7F  &#x22;Req-Start-Time&#x22;: [\x7F   &#x22;1722850461721&#x22;\x7F  ],\x7F  &#x22;User-Agent&#x22;: [\x7F   &#x22;curl/8.1.2&#x22;\x7F  ],\x7F  &#x22;X-Auth-User&#x22;: [\x7F   &#x22;100&#x22;\x7F  ],\x7F  &#x22;X-B3-Sampled&#x22;: [\x7F   &#x22;0&#x22;\x7F  ],\x7F  &#x22;X-B3-Spanid&#x22;: [\x7F   &#x22;642eab8e332d6500&#x22;\x7F  ],\x7F  &#x22;X-B3-Traceid&#x22;: [\x7F   &#x22;d9b9e94203603997642eab8e332d6500&#x22;\x7F  ],\x7F  &#x22;X-Envoy-Attempt-Count&#x22;: [\x7F   &#x22;1&#x22;\x7F  ],\x7F  &#x22;X-Envoy-Decorator-Operation&#x22;: [\x7F   &#x22;echo-server.higress-course.svc.cluster.local:8080/*&#x22;\x7F  ],\x7F  &#x22;X-Envoy-Internal&#x22;: [\x7F   &#x22;true&#x22;\x7F  ],\x7F  &#x22;X-Forwarded-For&#x22;: [\x7F   &#x22;192.168.65.1&#x22;\x7F  ],\x7F  &#x22;X-Forwarded-Proto&#x22;: [\x7F   &#x22;http&#x22;\x7F  ],\x7F  &#x22;X-Request-Id&#x22;: [\x7F   &#x22;47ff21bc-c3d5-4932-8bfb-361d268d319d&#x22;\x7F  ]\x7F },\x7F &#x22;namespace&#x22;: &#x22;higress-course&#x22;,\x7F &#x22;ingress&#x22;: &#x22;&#x22;,\x7F &#x22;service&#x22;: &#x22;&#x22;,\x7F &#x22;pod&#x22;: &#x22;echo-server-6f4df5fcff-nksqz&#x22;,\x7F &#x22;body&#x22;: {}\x7F}"><div></div></button></div></figure></div>
<p>\u53EF\u4EE5\u770B\u5230\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4E86 <code dir="auto">X-Auth-User</code> \u540C\u65F6\u503C\u4E3A 100 \u3002</p>
<h2 id="4-ext-auth-\u63D2\u4EF6">4 ext-auth \u63D2\u4EF6</h2>
<p>Higress \u5B98\u65B9\u63D0\u4F9B <a href="https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/ext-auth" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ext-auth</a> \u63D2\u4EF6\uFF0C\u5176\u529F\u80FD\u66F4\u52A0\u4E30\u5BCC\u3002 ext-auth \u63D2\u4EF6\u5B9E\u73B0\u4E86\u5411\u5916\u90E8\u6388\u6743\u670D\u52A1\u53D1\u9001\u9274\u6743\u8BF7\u6C42\uFF0C\u4EE5\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BF7\u6C42\u662F\u5426\u5F97\u5230\u6388\u6743\u3002\u8BE5\u63D2\u4EF6\u5B9E\u73B0\u65F6\u53C2\u8003\u4E86 Envoy \u539F\u751F\u7684 <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ext_authz filter</a>\uFF0C\u5B9E\u73B0\u4E86\u539F\u751F filter \u4E2D\u5BF9\u63A5 HTTP \u670D\u52A1\u7684\u90E8\u5206\u80FD\u529B\u3002</p>
<h2 id="5-envoy-cluster-\u4E0D\u5B58\u5728\u95EE\u9898">5 Envoy Cluster \u4E0D\u5B58\u5728\u95EE\u9898</h2>
<p>\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CHigress \u63A7\u5236\u9762\u53EA\u4E0B\u53D1\u548C\u8DEF\u7531\u5173\u8054\u7684\u670D\u52A1\u5230 Envoy Cluster \u4E2D\uFF0C\u56E0\u6B64\u6709\u53EF\u80FD\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u73B0\u5BF9\u5E94\u8C03\u7528 HTTP \u670D\u52A1\u5728 Envoy Cluster \u4E2D\u4E0D\u5B58\u5728\u3002
\u6709 3 \u79CD\u65B9\u6848\u53BB\u89E3\u51B3\uFF1A</p>
<ul>
<li>helm \u53C2\u6570 global.onlyPushRouteCluster, \u9ED8\u8BA4\u503C\u4E3A true, \u53EA\u63A8\u9001\u8DEF\u7531\u5173\u8054\u7684 Cluster \u5230 Envoy Cluster \u4E2D\u3002\u4FEE\u6539\u4E3A false \u5373\u53EF\u3002</li>
<li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u8DEF\u7531\u5173\u8054\u5230\u5BF9\u5E94\u7684\u8C03\u7528\u7684 HTTP \u670D\u52A1\u3002</li>
<li>\u901A\u8FC7 McpBridge \u914D\u7F6E\uFF0C\u6DFB\u52A0\u8C03\u7528\u7684 HTTP \u670D\u52A1\u3002</li>
</ul>
<p>\u4E0A\u9762 easy-jwt \u63D2\u4EF6\u4E2D\u8C03\u7528 token-server \u670D\u52A1\uFF0C\u662F\u901A\u8FC7 McpBridge \u914D\u7F6E\uFF0C\u6DFB\u52A0 dns \u7C7B\u578B\u670D\u52A1\uFF0C\u5176\u914D\u7F6E\u5982\u4E0B\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">apiVersion</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">networking.higress.io/v1</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">kind</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">McpBridge</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">metadata</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">default</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">higress-system</span></div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">spec</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">registries</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">- </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">domain</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">token-server.higress-course.svc.cluster.local</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">9090</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">type</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">dns</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="apiVersion: networking.higress.io/v1\x7Fkind: McpBridge\x7Fmetadata:\x7F  name: default\x7F  namespace: higress-system\x7Fspec:\x7F  registries:\x7F    - name: token-server\x7F      domain: token-server.higress-course.svc.cluster.local\x7F      port: 9090\x7F      type: dns"><div></div></button></div></figure></div>
<h2 id="6-http-\u56DE\u8C03\u94FE\u95EE\u9898">6 HTTP \u56DE\u8C03\u94FE\u95EE\u9898</h2>
<p>\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230 HTTP \u56DE\u8C03\u94FE\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u5728 onHttpRequestHeader \u5904\u7406\u9636\u6BB5\uFF0C\u9700\u8981\u8C03\u7528\u4E24\u4E2A HTTP \u670D\u52A1\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5728 onHttpRequestHeader \u9636\u6BB5\u4E2D\uFF0C\u8981\u5148\u8C03\u7528\u7B2C\u4E00\u4E2A HTTP \u670D\u52A1\uFF0C\u5728\u7B2C\u4E00\u4E2A HTTP \u670D\u52A1\u7684\u54CD\u5E94\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u518D\u53D1\u8D77\u7B2C\u4E8C\u4E2A HTTP \u670D\u52A1\u7684\u8C03\u7528\u3002
\u4EE5\u6B64\u7C7B\u63A8\u3002\u8FD9\u79CD\u60C5\u51B5 Redis \u8C03\u7528\u4E5F\u662F\u4E00\u6837\u5904\u7406\u3002 \u5173\u4E8E\u56DE\u8C03\u94FE\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B <a href="https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-agent/main.go#L169" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ai-agent</a> \u63D2\u4EF6\u529F\u80FD\u3002</p>
<h2 id="\u53C2\u8003">\u53C2\u8003</h2>
<ul>
<li>[1]<a href="https://higress.io/docs/latest/user/mcp-bridge/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Mcp Bridge \u914D\u7F6E\u8BF4\u660E</a></li>
</ul>`,a={title:"HTTP \u8C03\u7528",keywords:["Higress"]},n="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/ebook/en/wasm17.md",i=void 0,d=function(){return`
# HTTP \u8C03\u7528

\u8FD9\u7AE0\u4E3B\u8981\u4ECB\u7ECD\u5982\u4F55\u4F7F\u7528 Higress \u63D2\u4EF6 Go SDK \u5B9E\u73B0 HTTP \u8C03\u7528\u3002

## 1 Envoy \u96C6\u7FA4\uFF08Cluster\uFF09\u540D\u79F0\u548C\u670D\u52A1\u53D1\u73B0\u6765\u6E90

Higress \u63D2\u4EF6\u7684 Go SDK \u5728\u8FDB\u884C HTTP \u548C Redis \u8C03\u7528\u65F6\uFF0C\u662F\u901A\u8FC7\u6307\u5B9A\u7684\u96C6\u7FA4\u540D\u79F0\u6765\u8BC6\u522B\u5E76\u8FDE\u63A5\u5230\u76F8\u5E94\u7684 Envoy \u96C6\u7FA4\u3002 \u6B64\u5916\uFF0CHigress \u5229\u7528 [McpBridge](https://higress.io/docs/latest/user/mcp-bridge/) \u652F\u6301\u591A\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0C\u5305\u62EC\u9759\u6001\u914D\u7F6E\uFF08static\uFF09\u3001DNS\u3001Kubernetes \u670D\u52A1\u3001Eureka\u3001Consul\u3001Nacos\u3001\u4EE5\u53CA Zookeeper \u7B49\u3002
\u6BCF\u79CD\u670D\u52A1\u53D1\u73B0\u673A\u5236\u5BF9\u5E94\u7684\u96C6\u7FA4\u540D\u79F0\u751F\u6210\u89C4\u5219\u90FD\u6709\u6240\u4E0D\u540C\uFF0C\u8FD9\u4E9B\u89C4\u5219\u5728 cluster_wrapper.go \u4EE3\u7801\u6587\u4EF6\u4E2D\u6709\u6240\u4F53\u73B0\u3002
\u4E3A\u4E86\u5305\u88C5\u4E0D\u540C\u7684\u670D\u52A1\u53D1\u73B0\u673A\u5236\uFF0CHigress \u63D2\u4EF6 Go SDK \u5B9A\u4E49\u4E86 Cluster \u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u5305\u542B\u4E24\u4E2A\u65B9\u6CD5\uFF1AClusterName \u548C HostName\u3002
\`\`\`golang
type Cluster interface {
    // \u8FD4\u56DE Envoy \u96C6\u7FA4\u540D\u79F0
    ClusterName() string
    // \u8FD4\u56DE Hostname, \u5728 HTTP \u8C03\u7528\u670D\u52A1\u65F6\u5019\uFF0C\u7528\u4E8E\u8BBE\u7F6E Http host \u8BF7\u6C42\u5934
    HostName() string
}
\`\`\`

### 1.1 \u9759\u6001\u914D\u7F6E\uFF08static\uFF09
\`\`\`golang
type StaticIpCluster struct {
	ServiceName string
	Port        int64
	Host        string
}
\`\`\`
- \u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A\`outbound|<port>||<service_name>.static\`\u3002
- HostName \u89C4\u5219\u4E3A\uFF1A\u9ED8\u8BA4\u4E3A  <service_name>\u3002

### 1.2 DNS \u914D\u7F6E\uFF08dns\uFF09
\`\`\`golang
type DnsCluster struct {
	ServiceName string
	Domain      string
	Port        int64
}

\`\`\`
- \u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A\`outbound|<Port>||<ServiceName>.dns\`\u3002
- HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE<Domain>\u3002

### 1.3 Kubernetes \u670D\u52A1\uFF08kubernetes\uFF09
\`\`\`golang

type K8sCluster struct {
	ServiceName string
	Namespace   string
	Port        int64
	Version     string
	Host        string
}
\`\`\`
- \u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A\`outbound|<Port>|<Version>|<ServiceName>.<Namespace>.svc.cluster.local\`\u3002
- HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE <ServiceName>.<Namespace>.svc.cluster.local\u3002

### 1.4 Nacos
\`\`\`golang

type NacosCluster struct {
	ServiceName string
	// use DEFAULT-GROUP by default
	Group       string
	NamespaceID string
	Port        int64
	// set true if use edas/sae registry
	IsExtRegistry bool
	Version       string
	Host          string
}
\`\`\`
- \u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A\`outbound|<Port>|<Version>|<ServiceName>.<Group>.<NamespaceID>.nacos\`\u3002
- HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE <service_name>\u3002

### 1.5 Consul
\`\`\`golang
type ConsulCluster struct {
	ServiceName string
	Datacenter  string
	Port        int64
	Host        string
}
\`\`\`
- \u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A\`outbound|<Port>||<ServiceName>.<Datacenter>.consul\`\u3002
- HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE <ServiceName>\u3002

### 1.6 FQDN

\`\`\`golang

type FQDNCluster struct {
	FQDN string
	Host string
	Port int64
}
\`\`\`
- \u96C6\u7FA4\u540D\u79F0\u89C4\u5219\u4E3A\uFF1A\`outbound|<Port>||<FQDN>\`\u3002
- HostName \u89C4\u5219\u4E3A\uFF1A\u5982\u679C\u8BBE\u7F6E Host\uFF0C\u8FD4\u56DE Host\uFF0C\u5426\u5219\u8FD4\u56DE \`<FQDN>\`\u3002

## 2 HTTP \u8C03\u7528
http_wrapper.go \u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
// \u56DE\u8C03\u51FD\u6570
type ResponseCallback func(statusCode int, responseHeaders http.Header, responseBody []byte)

// HTTP \u8C03\u7528\u63A5\u53E3
type HttpClient interface {
	Get(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Head(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Options(path string, headers [][2]string, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Post(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Put(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Patch(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Delete(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Connect(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Trace(path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
	Call(method, path string, headers [][2]string, body []byte, cb ResponseCallback, timeoutMillisecond ...uint32) error
}

// \u5B9E\u73B0 httpClient \u63A5\u53E3
type ClusterClient[C Cluster] struct {
	cluster C
}
\`\`\`
ClusterClient Get\u3001Head\u3001Options\u3001Post\u3001PUT\u3001Patch\u3001Delete\u3001Connect\u3001Trace\u3001Call \u65B9\u6CD5\u6700\u540E\u8C03\u7528 HttpCall \u65B9\u6CD5\uFF0C\u5176\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A

\`\`\`golang
func HttpCall(cluster Cluster, method, path string, headers [][2]string, body []byte,
	callback ResponseCallback, timeoutMillisecond ...uint32) error {
	
	// \u5220\u9664 :method, :path, :authority 
	for i := len(headers) - 1; i >= 0; i-- {
		key := headers[i][0]
		if key == ":method" || key == ":path" || key == ":authority" {
			headers = append(headers[:i], headers[i+1:]...)
		}
	}
	// \u8BBE\u7F6E timeout
	var timeout uint32 = 500
	if len(timeoutMillisecond) > 0 {
		timeout = timeoutMillisecond[0]
	}
	// \u91CD\u65B0\u8BBE\u7F6E :method, :path, :authority 
	headers = append(headers, [2]string{":method", method}, [2]string{":path", path}, [2]string{":authority", cluster.HostName()})
	requestID := uuid.New().String()
	// \u8C03\u7528 HTTP \u8BF7\u6C42
	_, err := proxywasm.DispatchHttpCall(cluster.ClusterName(), headers, body, nil, timeout, func(numHeaders, bodySize, numTrailers int) {
		// \u83B7\u53D6 HTTP \u54CD\u5E94 body \u548C headers
		respBody, err := proxywasm.GetHttpCallResponseBody(0, bodySize)
		...
		respHeaders, err := proxywasm.GetHttpCallResponseHeaders()
		...
		code := http.StatusBadGateway
		var normalResponse bool
		headers := make(http.Header)
		for _, h := range respHeaders {
			if h[0] == ":status" {
				code, err = strconv.Atoi(h[1])
				..
			}
			headers.Add(h[0], h[1])
		}
		...
		// \u8C03\u7528\u81EA\u5B9A\u4E49\u63D2\u4EF6\u56DE\u8C03\u51FD\u6570
		callback(code, headers, respBody)
	})
    ...
	return err
}
\`\`\`

## 3 easy-jwt \u63D2\u4EF6\u5F00\u53D1

\u5728\u5B9E\u9645\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u53EF\u80FD\u9700\u8981\u72EC\u7ACB\u8BA4\u8BC1\u6388\u6743\u670D\u52A1\uFF0C\u6765\u5B8C\u6210\u6BCF\u4E2A\u8BF7\u6C42\u7684\u8BA4\u8BC1\u548C\u6388\u6743\uFF0C\u73B0\u5728\u5F00\u53D1\u4E00\u4E2A\u7B80\u5355\u7684 easy-jwt \u63D2\u4EF6\u6765\u6F14\u793A\u5982\u4F55\u5728 Wasm \u63D2\u4EF6\u8FDB\u884C HTTP \u8C03\u7528\u3002
\u5176\u63D2\u4EF6\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\u56FE\uFF1A
![img](https://img.alicdn.com/imgextra/i1/O1CN01DPi2w6244OvEejP1q_!!6000000007337-0-tps-1488-682.jpg)

Token Server \u63D0\u4F9B 2 \u4E2A\u63A5\u53E3\uFF1A
- /api/token/auth: \u8BA4\u8BC1\u4EE4\u724C\u63A5\u53E3
- /api/token/create: \u751F\u6210\u4EE4\u724C\u63A5\u53E3

### 3.1 \u63D2\u4EF6\u90E8\u5206\u6838\u5FC3\u4EE3\u7801

\`\`\`golang
package main
...

const (
	AuthUIDHeader = "x-auth-user"
)

func main() {
	wrapper.SetCtx(
		// \u63D2\u4EF6\u540D\u79F0
		"easy-jwt",
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
		wrapper.ParseConfigBy(parseConfig),
		// \u8BBE\u7F6E\u81EA\u5B9A\u4E49\u51FD\u6570\u5904\u7406\u8BF7\u6C42\u5934
		wrapper.ProcessRequestHeadersBy(onHttpRequestHeaders),
	)
}

// \u81EA\u5B9A\u4E49\u63D2\u4EF6\u914D\u7F6E
type JwtConfig struct {
	// HTTP Client
	client wrapper.HttpClient
	// \u4EE4\u724C\u670D\u52A1\u5668\u7684\u5B8C\u5168\u9650\u5B9A\u57DF\u540D
	tokenServerFQDN string
	// \u4EE4\u724C\u670D\u52A1\u5668\u7684\u7AEF\u53E3
	tokenServerPort int
	// HTTP\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4EE4\u724C\u7684\u5B57\u6BB5\u540D\u79F0
	tokenFromHeaderName string
	// \u4EE4\u724C\u524D\u7F00\uFF0C\u5982Bearer
	tokenFromHeaderPrefix string
	// \u63D2\u4EF6\u5C06\u5FFD\u7565\u4EE4\u724C\u9A8C\u8BC1 UR L\u5217\u8868
	ignoreUrls []string
	// \u533F\u540D\u4EE4\u724C\uFF0C\u7528\u4E8E\u672A\u8BA4\u8BC1\u7684\u8BF7\u6C42
	anonymousToken string
	// \u533F\u540D\u7528\u6237ID
	anonymousUID int
	// \u5F53\u4EE4\u724C\u9A8C\u8BC1\u5931\u8D25\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801
	responseErrorStatusCode uint32
	// \u8FD4\u56DE\u7684\u9519\u8BEF\u4FE1\u606F\u683C\u5F0F
	responseErrorBody string
}

func parseConfig(json gjson.Result, config *JwtConfig, log wrapper.Log) error {
	log.Debugf("parseConfig()")
	// \u89E3\u6790\u63D2\u4EF6\u914D\u7F6E
	config.tokenServerFQDN = json.Get("tokenServerFQDN").String()
	config.tokenServerPort = int(json.Get("tokenServerPort").Int())
	config.tokenFromHeaderName = json.Get("tokenFromHeaderName").String()
	config.tokenFromHeaderPrefix = json.Get("tokenFromHeaderPrefix").String()
	config.anonymousUID = int(json.Get("anonymousUID").Int())
	config.anonymousToken = json.Get("anonymousToken").String()
	config.responseErrorBody = json.Get("responseErrorBoy").String()
	config.responseErrorStatusCode = uint32(json.Get("responseErrorStatusCode").Int())
	config.responseErrorBody = json.Get("responseErrorBody").String()
	config.ignoreUrls = make([]string, 0)
	for _, item := range json.Get("ignoreUrls").Array() {
		config.ignoreUrls = append(config.ignoreUrls, item.String())
	}
	// \u8BBE\u7F6E HTTP Client
	config.client = wrapper.NewClusterClient(wrapper.FQDNCluster{
		FQDN: json.Get("tokenServerFQDN").String(),
		Port: json.Get("tokenServerPort").Int(),
	})
	log.Debugf("parseConfig result:%+v", config)
	return nil
}

func onHttpRequestHeaders(ctx wrapper.HttpContext, config JwtConfig, log wrapper.Log) types.Action {
	// \u9996\u5148\u68C0\u67E5\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\u5426\u5728 ignoreUrls \u5217\u8868\u4E2D\uFF0C\u5982\u679C\u662F\uFF0C\u5219\u6DFB\u52A0\u533F\u540D\u7528\u6237ID\u5230\u8BF7\u6C42\u5934\u5E76\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
	rawPath := ctx.Path()
	path, _ := url.Parse(rawPath)
	for _, url := range config.ignoreUrls {
		if isPathMatch(path.Path, url) {
			proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", config.anonymousUID))
			return types.ActionContinue
		}
	}
	// \u5982\u679C\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4EE4\u724C\uFF0C\u63D2\u4EF6\u5C06\u5C1D\u8BD5\u4ECE\u8BF7\u6C42\u5934\u4E2D\u63D0\u53D6\u4EE4\u724C
	token, err := extractTokenFromHeader(ctx, config)
	if err != nil {
		log.Debugf("extractTokenFromHeader() error: %v", err)
		body := fmt.Sprintf(config.responseErrorBody, err.Error())
		proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)
		return types.ActionContinue
	}
	// \u5982\u679C\u662F\u533F\u540D\u4EE4\u724C\uFF0C\u5219\u6DFB\u52A0\u533F\u540D\u7528\u6237ID\u5230\u8BF7\u6C42\u5934\u5E76\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
	if len(config.anonymousToken) > 0 && config.anonymousToken == token {
		proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", config.anonymousUID))
		return types.ActionContinue
	}

	authRequest, _ := json.Marshal(map[string]string{"token": token})
	log.Debugf("call token-server with auth request:%s", string(authRequest))
	// \u63D2\u4EF6\u5C06\u4F7F\u7528\u914D\u7F6E\u7684HTTP\u5BA2\u6237\u7AEF\u5411\u4EE4\u724C\u670D\u52A1\u5668\u53D1\u9001POST\u8BF7\u6C42\uFF0C\u4EE5\u9A8C\u8BC1\u4EE4\u724C\u7684\u6709\u6548\u6027
	err2 := config.client.Post(
		"/api/token/auth",
		[][2]string{{"content-type", "application/json"}},
		authRequest,
		func(statusCode int, responseHeaders http.Header, responseBody []byte) {
			defer func() {
				// \u4FDD\u8BC1\u6062\u590D\u8BF7\u6C42
				_ = proxywasm.ResumeHttpRequest()
			}()

			log.Debugf("auth response status:%d, response:%s", statusCode, string(responseBody))
			var jsonData gjson.Result
			jsonData = gjson.ParseBytes(responseBody)
			if statusCode != 200 {
				// \u5982\u679C\u54CD\u5E94\u72B6\u6001\u7801\u4E0D\u662F200\uFF0C\u8868\u793A\u9A8C\u8BC1\u5931\u8D25\uFF0C\u63D2\u4EF6\u5C06\u76F4\u63A5\u53D1\u9001\u9519\u8BEF\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002
				message := jsonData.Get("message").String()
				body := fmt.Sprintf(config.responseErrorBody, message)
				proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)
			} else {
				// \u5982\u679C\u9A8C\u8BC1\u6210\u529F\uFF0C\u63D2\u4EF6\u5C06\u4ECE\u54CD\u5E94\u4E2D\u63D0\u53D6\u7528\u6237ID\uFF0C\u5E76\u5C06\u5176\u6DFB\u52A0\u5230\u540E\u7EED\u8BF7\u6C42\u5934\u4E2D
				uid := jsonData.Get("uid").Int()
				proxywasm.AddHttpRequestHeader(AuthUIDHeader, fmt.Sprintf("%d", uid))
			}
		},
		2000,
	)

	if err2 != nil {
		// \u5982\u679C\u8FDE\u63A5\u5931\u8D25\uFF0C\u5219\u76F4\u63A5\u53D1\u9001\u9519\u8BEF\u54CD\u5E94\u7ED9\u5BA2\u6237\u7AEF\u3002
		log.Debugf("call token server error:%v", err2)
		body := fmt.Sprintf(config.responseErrorBody, err2.Error())
		proxywasm.SendHttpResponse(config.responseErrorStatusCode, [][2]string{{"content-type", "application/json"}}, []byte(body), -1)
		return types.ActionContinue
	}
	// \u6682\u505C\u8BF7\u6C42\u5904\u7406\uFF0C\u76F4\u5230\u8C03\u7528 proxywasm.ResumeHttpRequest() \u6062\u590D\u8BF7\u6C42
	return types.ActionPause
}

func extractTokenFromHeader(ctx wrapper.HttpContext, config JwtConfig) (string, error) {
	...
}

func isPathMatch(path string, url string) bool {
	...
}
\`\`\`

\u6838\u5FC3\u6D41\u7A0B\u5982\u4E0B\uFF1A
- \u521D\u59CB\u5316\u63D2\u4EF6
- \u89E3\u6790\u914D\u7F6E
- onHttpRequestHeaders \u5904\u7406
  - \u68C0\u67E5\u8BF7\u6C42\u8DEF\u5F84\u662F\u5426\u5728 ignoreUrls \u5217\u8868\u4E2D
    - \u662F\uFF1A\u6DFB\u52A0\u533F\u540D UID \u5230\u8BF7\u6C42\u5934\uFF0C\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
    - \u5426\uFF1A\u7EE7\u7EED
  - \u4ECE\u8BF7\u6C42\u5934\u4E2D\u63D0\u53D6\u4EE4\u724C\uFF0C\u68C0\u67E5\u4EE4\u724C\u662F\u5426\u5B58\u5728
    - \u5B58\u5728\uFF1A\u7EE7\u7EED
    - \u4E0D\u5B58\u5728\uFF1A\u8FD4\u56DE\u9519\u8BEF\uFF0C\u53D1\u9001\u54CD\u5E94
  - \u9A8C\u8BC1\u4EE4\u724C
    - \u5982\u679C\u4EE4\u724C\u662F\u533F\u540D\u4EE4\u724C\uFF0C\u6DFB\u52A0\u533F\u540D UID \u5230\u8BF7\u6C42\u5934\uFF0C\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
    - \u5982\u679C\u4EE4\u724C\u4E0D\u662F\u533F\u540D\u4EE4\u724C\uFF0C\u8C03\u7528\u8BA4\u8BC1\u670D\u52A1 /api/token/auth \u63A5\u53E3\u9A8C\u8BC1\u4EE4\u724C
      - \u5982\u679C\u9A8C\u8BC1\u6210\u529F\uFF0C\u4ECE\u54CD\u5E94\u4E2D\u63D0\u53D6 UID\uFF0C\u6DFB\u52A0\u5230\u8BF7\u6C42\u5934\u4E2D\uFF0C\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
      - \u5982\u679C\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8FD4\u56DE\u9519\u8BEF\uFF0C\u53D1\u9001\u54CD\u5E94

### 3.2 \u90E8\u7F72\u548C\u9A8C\u8BC1

1. \u90E8\u7F72 YAML \u5982\u4E0B\uFF1A
\`\`\`yaml
apiVersion: v1
kind: Namespace
metadata:
  name: higress-course
---
apiVersion: v1
kind: Service
metadata:
  name: echo-server
  namespace: higress-course
spec:
  selector:
    app: echo-server
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: echo-server
  namespace: higress-course
  labels:
    app: echo-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app: echo-server
  template:
    metadata:
      labels:
        app: echo-server
    spec:
      containers:
        - name: echo-server
          image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          resources:
            requests:
              cpu: 10m
---
apiVersion: v1
kind: Service
metadata:
  name: echo-server
  namespace: higress-course
spec:
  selector:
    app: echo-server
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 3000
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: token-server
  namespace: higress-course
  labels:
    app: token-server
spec:
  replicas: 1
  selector:
    matchLabels:
      app: token-server
  template:
    metadata:
      labels:
        app: token-server
    spec:
      containers:
        - name: token-server
          image: registry.cn-hangzhou.aliyuncs.com/2456868764/token-server:1.0.0
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          resources:
            requests:
              cpu: 10m
---
apiVersion: v1
kind: Service
metadata:
  name: token-server
  namespace: higress-course
spec:
  selector:
    app: token-server
  ports:
    - protocol: TCP
      port: 9090
      targetPort: 9090
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-foo
  namespace: higress-course
spec:
  ingressClassName: higress
  rules:
    - host: "foo.com"
      http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: echo-server
                port:
                  number: 8080
---
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    - name: token-server
      domain: token-server.higress-course.svc.cluster.local
      port: 9090
      type: dns
---
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: easy-jwt
  namespace: higress-system
spec:
  priority: 200
  matchRules:
    - ingress:
      - higress-course/ingress-foo
      config:
        tokenServerFQDN: "token-server.dns"
        tokenServerPort: 9090
        tokenFromHeaderName: "Authorization"
        tokenFromHeaderPrefix: "Bearer "
        anonymousToken: "AnonymousToken"
        anonymousUID: 0
        responseErrorStatusCode: 401
        responseErrorBody: "{\\"message\\":\\"%s\\"}"
  url: oci://registry.cn-hangzhou.aliyuncs.com/2456868764/easy-jwt:1.0.0
\`\`\`
2. \u83B7\u53D6\u4EE4\u724C

\u83B7\u53D6 uid \u4E3A 100 \u7684\u7528\u6237\u7684\u8BBF\u95EE\u4EE4\u724C\uFF0C\u5176\u547D\u4EE4\u5982\u4E0B\uFF0C\u5176\u4E2D \`<token-server-pod>\` \u662F token-server pod \u540D\u79F0\u3002
\`\`\`shell
kubectl exec <token-server-pod> -n higress-course -- curl -X POST http://127.0.0.1:9090/api/token/create -d '{"uid":100}' -H "content-type:application/json"

{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY"}%   
\`\`\`

3. \u8BF7\u6C42\u9A8C\u8BC1

\`\`\`shell
curl  http://127.0.0.1/hello -X POST -d "{}" -H "host:foo.com"  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY" -H "content-type:application/json"

{
 "path": "/hello",
 "host": "foo.com",
 "method": "POST",
 "proto": "HTTP/1.1",
 "headers": {
  "Accept": [
   "*/*"
  ],
  "Authorization": [
   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVSUQiOjEwMCwiZXhwIjoxNzU0Mzg2MzQ4fQ.jncbLJqBern5DYCFvED3moiCvg6sUn5jdlllhneuHrY"
  ],
  "Content-Length": [
   "2"
  ],
  "Content-Type": [
   "application/json"
  ],
  "Original-Host": [
   "foo.com"
  ],
  "Req-Start-Time": [
   "1722850461721"
  ],
  "User-Agent": [
   "curl/8.1.2"
  ],
  "X-Auth-User": [
   "100"
  ],
  "X-B3-Sampled": [
   "0"
  ],
  "X-B3-Spanid": [
   "642eab8e332d6500"
  ],
  "X-B3-Traceid": [
   "d9b9e94203603997642eab8e332d6500"
  ],
  "X-Envoy-Attempt-Count": [
   "1"
  ],
  "X-Envoy-Decorator-Operation": [
   "echo-server.higress-course.svc.cluster.local:8080/*"
  ],
  "X-Envoy-Internal": [
   "true"
  ],
  "X-Forwarded-For": [
   "192.168.65.1"
  ],
  "X-Forwarded-Proto": [
   "http"
  ],
  "X-Request-Id": [
   "47ff21bc-c3d5-4932-8bfb-361d268d319d"
  ]
 },
 "namespace": "higress-course",
 "ingress": "",
 "service": "",
 "pod": "echo-server-6f4df5fcff-nksqz",
 "body": {}
}                                   
\`\`\`
\u53EF\u4EE5\u770B\u5230\u8BF7\u6C42\u5934\u4E2D\u5305\u542B\u4E86 \`X-Auth-User\` \u540C\u65F6\u503C\u4E3A 100 \u3002

## 4 ext-auth \u63D2\u4EF6

Higress \u5B98\u65B9\u63D0\u4F9B [ext-auth](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/extensions/ext-auth) \u63D2\u4EF6\uFF0C\u5176\u529F\u80FD\u66F4\u52A0\u4E30\u5BCC\u3002 ext-auth \u63D2\u4EF6\u5B9E\u73B0\u4E86\u5411\u5916\u90E8\u6388\u6743\u670D\u52A1\u53D1\u9001\u9274\u6743\u8BF7\u6C42\uFF0C\u4EE5\u68C0\u67E5\u5BA2\u6237\u7AEF\u8BF7\u6C42\u662F\u5426\u5F97\u5230\u6388\u6743\u3002\u8BE5\u63D2\u4EF6\u5B9E\u73B0\u65F6\u53C2\u8003\u4E86 Envoy \u539F\u751F\u7684 [ext_authz filter](https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/ext_authz_filter)\uFF0C\u5B9E\u73B0\u4E86\u539F\u751F filter \u4E2D\u5BF9\u63A5 HTTP \u670D\u52A1\u7684\u90E8\u5206\u80FD\u529B\u3002

## 5 Envoy Cluster \u4E0D\u5B58\u5728\u95EE\u9898

\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CHigress \u63A7\u5236\u9762\u53EA\u4E0B\u53D1\u548C\u8DEF\u7531\u5173\u8054\u7684\u670D\u52A1\u5230 Envoy Cluster \u4E2D\uFF0C\u56E0\u6B64\u6709\u53EF\u80FD\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u73B0\u5BF9\u5E94\u8C03\u7528 HTTP \u670D\u52A1\u5728 Envoy Cluster \u4E2D\u4E0D\u5B58\u5728\u3002
\u6709 3 \u79CD\u65B9\u6848\u53BB\u89E3\u51B3\uFF1A
- helm \u53C2\u6570 global.onlyPushRouteCluster, \u9ED8\u8BA4\u503C\u4E3A true, \u53EA\u63A8\u9001\u8DEF\u7531\u5173\u8054\u7684 Cluster \u5230 Envoy Cluster \u4E2D\u3002\u4FEE\u6539\u4E3A false \u5373\u53EF\u3002
- \u521B\u5EFA\u4E00\u4E2A\u65B0\u8DEF\u7531\u5173\u8054\u5230\u5BF9\u5E94\u7684\u8C03\u7528\u7684 HTTP \u670D\u52A1\u3002
- \u901A\u8FC7 McpBridge \u914D\u7F6E\uFF0C\u6DFB\u52A0\u8C03\u7528\u7684 HTTP \u670D\u52A1\u3002

\u4E0A\u9762 easy-jwt \u63D2\u4EF6\u4E2D\u8C03\u7528 token-server \u670D\u52A1\uFF0C\u662F\u901A\u8FC7 McpBridge \u914D\u7F6E\uFF0C\u6DFB\u52A0 dns \u7C7B\u578B\u670D\u52A1\uFF0C\u5176\u914D\u7F6E\u5982\u4E0B\uFF1A

\`\`\`yaml
apiVersion: networking.higress.io/v1
kind: McpBridge
metadata:
  name: default
  namespace: higress-system
spec:
  registries:
    - name: token-server
      domain: token-server.higress-course.svc.cluster.local
      port: 9090
      type: dns
\`\`\`

## 6 HTTP \u56DE\u8C03\u94FE\u95EE\u9898

\u5728\u5B9E\u9645\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u9047\u5230 HTTP \u56DE\u8C03\u94FE\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u5728 onHttpRequestHeader \u5904\u7406\u9636\u6BB5\uFF0C\u9700\u8981\u8C03\u7528\u4E24\u4E2A HTTP \u670D\u52A1\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5728 onHttpRequestHeader \u9636\u6BB5\u4E2D\uFF0C\u8981\u5148\u8C03\u7528\u7B2C\u4E00\u4E2A HTTP \u670D\u52A1\uFF0C\u5728\u7B2C\u4E00\u4E2A HTTP \u670D\u52A1\u7684\u54CD\u5E94\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u518D\u53D1\u8D77\u7B2C\u4E8C\u4E2A HTTP \u670D\u52A1\u7684\u8C03\u7528\u3002
\u4EE5\u6B64\u7C7B\u63A8\u3002\u8FD9\u79CD\u60C5\u51B5 Redis \u8C03\u7528\u4E5F\u662F\u4E00\u6837\u5904\u7406\u3002 \u5173\u4E8E\u56DE\u8C03\u94FE\u53EF\u4EE5\u53C2\u8003 Higress \u5B98\u65B9\u63D0\u4F9B [ai-agent](https://github.com/alibaba/higress/blob/main/plugins/wasm-go/extensions/ai-agent/main.go#L169) \u63D2\u4EF6\u529F\u80FD\u3002

## \u53C2\u8003
- [1][Mcp Bridge \u914D\u7F6E\u8BF4\u660E](https://higress.io/docs/latest/user/mcp-bridge/)






`},p=function(){return s},l=function(){return[{depth:2,slug:"1-envoy-\u96C6\u7FA4cluster\u540D\u79F0\u548C\u670D\u52A1\u53D1\u73B0\u6765\u6E90",text:"1 Envoy \u96C6\u7FA4\uFF08Cluster\uFF09\u540D\u79F0\u548C\u670D\u52A1\u53D1\u73B0\u6765\u6E90"},{depth:3,slug:"11-\u9759\u6001\u914D\u7F6Estatic",text:"1.1 \u9759\u6001\u914D\u7F6E\uFF08static\uFF09"},{depth:3,slug:"12-dns-\u914D\u7F6Edns",text:"1.2 DNS \u914D\u7F6E\uFF08dns\uFF09"},{depth:3,slug:"13-kubernetes-\u670D\u52A1kubernetes",text:"1.3 Kubernetes \u670D\u52A1\uFF08kubernetes\uFF09"},{depth:3,slug:"14-nacos",text:"1.4 Nacos"},{depth:3,slug:"15-consul",text:"1.5 Consul"},{depth:3,slug:"16-fqdn",text:"1.6 FQDN"},{depth:2,slug:"2-http-\u8C03\u7528",text:"2 HTTP \u8C03\u7528"},{depth:2,slug:"3-easy-jwt-\u63D2\u4EF6\u5F00\u53D1",text:"3 easy-jwt \u63D2\u4EF6\u5F00\u53D1"},{depth:3,slug:"31-\u63D2\u4EF6\u90E8\u5206\u6838\u5FC3\u4EE3\u7801",text:"3.1 \u63D2\u4EF6\u90E8\u5206\u6838\u5FC3\u4EE3\u7801"},{depth:3,slug:"32-\u90E8\u7F72\u548C\u9A8C\u8BC1",text:"3.2 \u90E8\u7F72\u548C\u9A8C\u8BC1"},{depth:2,slug:"4-ext-auth-\u63D2\u4EF6",text:"4 ext-auth \u63D2\u4EF6"},{depth:2,slug:"5-envoy-cluster-\u4E0D\u5B58\u5728\u95EE\u9898",text:"5 Envoy Cluster \u4E0D\u5B58\u5728\u95EE\u9898"},{depth:2,slug:"6-http-\u56DE\u8C03\u94FE\u95EE\u9898",text:"6 HTTP \u56DE\u8C03\u94FE\u95EE\u9898"},{depth:2,slug:"\u53C2\u8003",text:"\u53C2\u8003"}]},e=c((x,g,m)=>{const{layout:h,...t}=a;return t.file=n,t.url=i,r`${v()}${y(s)}`})});export{e as Content,u as __tla,p as compiledContent,e as default,n as file,a as frontmatter,l as getHeadings,d as rawContent,i as url};
