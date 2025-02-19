import{c as d,__tla as c}from"./astro-component.CXlaF79K.js";import{r as p,m as v,u,__tla as h}from"./constant.V2td3cJV.js";import{__tla as f}from"./astro/assets-service.DQopRnBr.js";let s,o,t,n,r,l,a,m=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})()]).then(async()=>{let e;e=`<h2 id="\u95EE\u9898\u80CC\u666F">\u95EE\u9898\u80CC\u666F</h2>
<p>\u5728\u5927\u90E8\u5206\u57FA\u4E8E Envoy \u5B9E\u73B0\u7684\u7F51\u5173\u91CC\uFF0C\u90FD\u5B58\u5728\u8FD9\u6837\u4E00\u4E2A\u95EE\u9898\uFF0C\u5F53\u5F00\u542F http2 \u65F6\uFF0C\u5BA2\u6237\u7AEF\u8BBF\u95EE\u4F1A\u51FA\u73B0\u5076\u53D1\u7684 404\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4ECE\u65E5\u5FD7\u6CE8\u610F\u5230\u8FD9\u4E9B 404 \u7684\u8BF7\u6C42\uFF0C:authority
 \u5934\u91CC\u7684\u57DF\u540D\u548C SNI \u91CC\u7684\u57DF\u540D\u4E0D\u4E00\u81F4\u3002</p>
<p>\u4E14\u5728\u4F7F\u7528\u6CDB\u57DF\u540D\u8BC1\u4E66\uFF0C\u4E14\u914D\u7F6E\u4E86\u591A\u4E2A\u57DF\u540D\u7684\u8DEF\u7531\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u95EE\u9898\u7279\u522B\u5BB9\u6613\u51FA\u73B0\u3002</p>
<p>\u95EE\u9898\u76F8\u5173\u7684\u793E\u533A issue\uFF1A</p>
<p><a href="https://github.com/envoyproxy/envoy/issues/6767#issuecomment-2489921683" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/envoyproxy/envoy/issues/6767</a></p>
<p><a href="https://github.com/istio/istio/issues/13589" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/istio/istio/issues/13589</a></p>
<p><a href="https://github.com/projectcontour/contour/issues/1493" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github.com/projectcontour/contour/issues/1493</a></p>
<h2 id="\u95EE\u9898\u6210\u56E0">\u95EE\u9898\u6210\u56E0</h2>
<h3 id="\u4E3A\u4EC0\u4E48-authority-\u5934\u548C-sni-\u4E0D\u4E00\u81F4">\u4E3A\u4EC0\u4E48 :authority
 \u5934\u548C SNI \u4E0D\u4E00\u81F4</h3>
<p>\u8FD9\u4E2A\u95EE\u9898\u6D89\u53CA\u5230\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u590D\u7528\u673A\u5236\uFF0C\u5BF9\u4E8E http2 \u6765\u8BF4\uFF0C\u8FDE\u63A5\u591A\u8DEF\u590D\u7528\u7684\u80FD\u529B\u662F\u5BF9\u6BD4 http1 \u7684\u4E00\u4E2A\u6838\u5FC3\u5DEE\u5F02\u3002\u7279\u522B\u662F\u5BF9\u4E8E\u6D4F\u89C8\u5668\u573A\u666F\uFF0C\u5C3D\u53EF\u80FD\u7684\u8FDE\u63A5\u590D\u7528\uFF0C\u53EF\u4EE5\u5728\u5F00\u542F TLS \u7684\u573A\u666F\u4E0B\uFF0C\u663E\u8457\u4F18\u5316\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\uFF08\u4E0D\u8003\u8651\u961F\u5934\u963B\u585E\u7684\u60C5\u51B5\u4E0B\uFF09\u3002\u5728 http2 \u7684 <a href="https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.1" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RFC \u89C4\u7EA6</a>\u91CC\u5BF9\u4E8E\u8FDE\u63A5\u590D\u7528\u4E5F\u6709\u4EE5\u4E0B\u63CF\u8FF0\uFF1A</p>
<blockquote>
<p>Connections that are made to an origin server, either directly or</p>
<p>through a tunnel created using the CONNECT method (Section 8.3), <strong>MAY</strong></p>
<p>**   be reused for requests with multiple different URI authority**</p>
<p>**   components.  A connection can be reused as long as the origin server**</p>
<p>**   is authoritative** (Section 10.1).  For TCP connections without TLS,</p>
<p>this depends on the host having resolved to the same IP address.</p>
</blockquote>
<p>\u6240\u4EE5\u5982 Chrome \u6D4F\u89C8\u5668\u5C31\u4F1A\u5728\u8FBE\u6210\u4EE5\u4E0B\u6761\u4EF6\u65F6\uFF0C\u5BF9\u4E00\u4E2A\u57DF\u540D B \u7684\u8BF7\u6C42\uFF0C\u590D\u7528\u548C\u57DF\u540D A \u5EFA\u7ACB\u7684 http2 \u8FDE\u63A5\uFF1A</p>
<ol>
<li>\u57DF\u540D B \u548C\u57DF\u540D A \u662F\u89E3\u6790\u5230\u540C\u4E00\u4E2A IP</li>
<li>\u8DDF\u57DF\u540D A \u5EFA\u7ACB\u901A\u4FE1\u65F6\u83B7\u53D6\u7684\u8BC1\u4E66\u7684 Common Name \u662F wildcard\uFF0C\u4E14\u53EF\u4EE5\u5339\u914D\u5230\u57DF\u540D B\uFF1B\u6216\u8005 SAN \u4E2D\u5B58\u5728\u57DF\u540D B</li>
</ol>
<p>\u4E00\u65E6\u548C\u57DF\u540D A \u5EFA\u7ACB\u7684\u8FDE\u63A5\u4E0A\u53D1\u9001\u4E86\u57DF\u540D B \u7684\u8BF7\u6C42\uFF0C\u5C31\u51FA\u73B0\u4E86\u4E0A\u9762\u8BF4\u7684\uFF0C\u5728\u7F51\u5173\u4FA7\u7684\u65E5\u5FD7\u4E2D\u770B\u5230 SNI \u548C :authority
 \u5934\u4E0D\u5339\u914D\u7684\u95EE\u9898\u4E86\u3002</p>
<h3 id="\u4E3A\u4EC0\u4E48\u4EA7\u751F-404">\u4E3A\u4EC0\u4E48\u4EA7\u751F 404</h3>
<p>\u5728 Envoy \u7684\u7F51\u5173\u91CC\uFF0C\u5E38\u89C1\u7684 SNI \u548C\u57DF\u540D\u8DEF\u7531\u7684\u6620\u5C04\u65B9\u5F0F\u662F\u4E00\u5BF9\u4E00\u7684\uFF0C\u8FD9\u6837\u5339\u914D\u5230 SNI A \u65F6\uFF0C\u53EA\u4F1A\u51FA\u73B0 A \u57DF\u540D\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u6CA1\u6709 B \u57DF\u540D\u7684\u8DEF\u7531\uFF0C\u6240\u4EE5\u4EA7\u751F\u4E86 404\u3002</p>
<p>\u5177\u4F53\u6765\u8BF4\uFF0C\u5E38\u89C1\u7684 Envoy \u914D\u7F6E\u7EC4\u7EC7\u65B9\u5F0F\u662F\u6BCF\u4E2A SNI \u6709\u81EA\u5DF1\u72EC\u7ACB\u7684 filter chain\uFF0C\u800C\u4E14\u8FD9\u4E2A filter chain \u4E2D\u7684 HCM \u914D\u7F6E\u91CC\u7684 RDS \u914D\u7F6E\u4E5F\u662F\u72EC\u7ACB\u7684\u3002</p>
<h2 id="\u89E3\u51B3\u65B9\u6848">\u89E3\u51B3\u65B9\u6848</h2>
<h3 id="\u65B9\u6848\u4E00\u4F7F\u7528\u76F8\u540C\u8BC1\u4E66\u7684\u57DF\u540D\u590D\u7528\u540C\u4E00\u4E2A-filter-chain">\u65B9\u6848\u4E00\uFF1A\u4F7F\u7528\u76F8\u540C\u8BC1\u4E66\u7684\u57DF\u540D\u590D\u7528\u540C\u4E00\u4E2A filter chain</h3>
<p>\u8FD9\u4E2A\u95EE\u9898\u4E25\u683C\u6765\u8BF4\u4E0D\u662F envoy \u7684 bug\uFF0C\u800C\u662F\u914D\u7F6E\u7EC4\u7EC7\u4E0D\u5F53\u7684\u95EE\u9898\uFF0C\u901A\u8FC7\u76F8\u540C\u8BC1\u4E66\u7684\u57DF\u540D\u590D\u7528 filter chain \u5C31\u53EF\u4EE5\u89E3\u51B3\u3002</p>
<p>\u8FD9\u4E2A\u65B9\u6848\u6709\u4E24\u5904\u4E0D\u8DB3\uFF1A</p>
<ol>
<li>\u5982\u679C\u5F53\u57DF\u540D\u7684\u8BC1\u4E66\u53D1\u751F\u4E86\u4FEE\u6539\uFF0C\u9700\u8981\u91CD\u5EFA filter chain\uFF0C\u5C31\u4F1A\u5F71\u54CD downstream \u8FDE\u63A5\u65AD\u5F00</li>
<li>\u589E\u52A0\u4E86\u63A7\u5236\u9762\u7684\u590D\u6742\u5EA6\uFF0C\u4F8B\u5982\u4F7F\u7528 Gateway API \u65F6\uFF0C\u4E0D\u80FD\u57FA\u4E8E filter chain \u548C Gateway \u4E2D Listener \u4E00\u5BF9\u4E00\u6620\u5C04</li>
</ol>
<h3 id="\u65B9\u6848\u4E8C\u57FA\u4E8E-http-421-\u72B6\u6001\u7801">\u65B9\u6848\u4E8C\uFF1A\u57FA\u4E8E HTTP 421 \u72B6\u6001\u7801</h3>
<p>\u5E38\u89C1\u7684\u662F\u901A\u8FC7 lua filter \u6765\u8FD4\u56DE 421\uFF0C\u4F8B\u5982\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#9ECBFF">"@type"</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua"</span></div></div><div class="ec-line"><div class="code"><span class="indent">              </span><span style="--0:#85E89D">inlineCode</span><span style="--0:#E1E4E8">: </span><span style="--0:#F97583">|</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">function envoy_on_request(request_handle)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">local streamInfo = request_handle:streamInfo()</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">if streamInfo:requestedServerName() ~= "" then</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">if (string.sub(streamInfo:requestedServerName(), 1, 2) == "*." and not string.find(request_handle:headers():get(":authority"), string.sub(streamInfo:requestedServerName(), 2))) then</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">request_handle:respond({[":status"] = "421"}, "Misdirected Request")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">end</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">if (string.sub(streamInfo:requestedServerName(), 1, 2) ~= "*." and streamInfo:requestedServerName() ~= request_handle:headers():get(":authority")) then</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                      </span></span><span style="--0:#9ECBFF">request_handle:respond({[":status"] = "421"}, "Misdirected Request")</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                    </span></span><span style="--0:#9ECBFF">end</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                  </span></span><span style="--0:#9ECBFF">end</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#9ECBFF">                </span></span><span style="--0:#9ECBFF">end</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="              &#x22;@type&#x22;: &#x22;type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua&#x22;\x7F              inlineCode: |\x7F                function envoy_on_request(request_handle)\x7F                  local streamInfo = request_handle:streamInfo()\x7F                  if streamInfo:requestedServerName() ~= &#x22;&#x22; then\x7F                    if (string.sub(streamInfo:requestedServerName(), 1, 2) == &#x22;*.&#x22; and not string.find(request_handle:headers():get(&#x22;:authority&#x22;), string.sub(streamInfo:requestedServerName(), 2))) then\x7F                      request_handle:respond({[&#x22;:status&#x22;] = &#x22;421&#x22;}, &#x22;Misdirected Request&#x22;)\x7F                    end\x7F                    if (string.sub(streamInfo:requestedServerName(), 1, 2) ~= &#x22;*.&#x22; and streamInfo:requestedServerName() ~= request_handle:headers():get(&#x22;:authority&#x22;)) then\x7F                      request_handle:respond({[&#x22;:status&#x22;] = &#x22;421&#x22;}, &#x22;Misdirected Request&#x22;)\x7F                    end\x7F                  end\x7F                end"><div></div></button></div></figure></div>
<p>\u8FD9\u4E5F\u662F\u57FA\u4E8E HTTP2 <a href="https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">RFC </a>\u7684\u5EFA\u8BAE:</p>
<blockquote>
<p>In some deployments, reusing a connection for multiple origins can</p>
<p>result in requests being directed to the wrong origin server.  For</p>
<p>example, TLS termination might be performed by a middlebox that uses</p>
<p>the TLS Server Name Indication (SNI) [TLS-EXT] extension to select an</p>
<p>origin server.  This means that it is possible for clients to send</p>
<p>confidential information to servers that might not be the intended</p>
<p>target for the request, even though the server is otherwise</p>
<p>authoritative.</p>
<p>A server that does not wish clients to reuse connections can indicate</p>
<p>that it is not authoritative for a request by sending a 421</p>
<p>(Misdirected Request) status code in response to the request (see</p>
<p>Section 9.1.2).</p>
</blockquote>
<p>\u8FD9\u4E2A\u65B9\u6848\u4E5F\u6709\u4E24\u5904\u4E0D\u8DB3\uFF1A</p>
<ol>
<li>\u5931\u53BB\u4E86\u8FDE\u63A5\u590D\u7528\u7684\u7279\u6027\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u4F9D\u8D56 HTTP2 \u8FDE\u63A5\u590D\u7528\u5B9E\u73B0\u9875\u9762\u52A0\u8F7D\u4F18\u5316\u7684\u573A\u666F\uFF0C\u53EF\u80FD\u662F\u4E0D\u63A5\u53D7\u7684</li>
<li>HTTP 421 \u5B58\u5728\u7248\u672C\u517C\u5BB9\u95EE\u9898\uFF0C\u7279\u522B\u662F\u5728\u4E2D\u56FD\u6709\u5F88\u591A\u57FA\u4E8E\u4F4E\u7248\u672C chromium \u6784\u5EFA\u7684 Hybrid Android APP\uFF0C\u5B58\u5728\u5BF9\u4E0D\u540C\u57DF\u540D\u590D\u7528\u8FDE\u63A5\uFF0C\u4F46\u662F\u53C8\u4E0D\u652F\u6301\u57FA\u4E8E 421 \u91CD\u65B0\u5EFA\u8FDE\u7684\u95EE\u9898\uFF0C\u8FD4\u56DE 421 \u4F1A\u76F4\u63A5\u9020\u6210\u4E1A\u52A1\u62A5\u9519</li>
</ol>
<h3 id="\u65B9\u6848\u4E09filter-chains-\u5171\u7528\u8DEF\u7531\u914D\u7F6E">\u65B9\u6848\u4E09\uFF1Afilter chains \u5171\u7528\u8DEF\u7531\u914D\u7F6E</h3>
<h4 id="\u57FA\u4E8E-rds">\u57FA\u4E8E RDS</h4>
<p>\u6240\u6709 https \u7684 filter chain \u5982\u679C\u90FD\u5171\u7528\u540C\u4E00\u4EFD RDS\uFF0C\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u9020\u6210 RDS \u8D44\u6E90\u8FC7\u5927\u7684\u95EE\u9898\uFF0C\u8D44\u6E90\u8FC7\u5927\uFF0C\u5C31\u65E0\u6CD5\u901A\u8FC7 delta xDS \u7B49\u65B9\u6848\u53BB\u505A\u589E\u91CF\u63A8\u9001\u4F18\u5316\u3002\u800C\u4E14 RDS \u91CC\u4EFB\u4F55\u8D44\u6E90\u53D8\u5316\uFF0C\u5BFC\u81F4\u8D44\u6E90 checksum \u4FEE\u6539\uFF0C\u5C31\u4F1A\u4F7F\u5F97 Envoy \u52A0\u8F7D\u914D\u7F6E\u65F6\u9700\u8981\u5BF9\u6574\u4E2A RDS \u91CD\u65B0\u505A\u4E00\u904D\u914D\u7F6E\u89E3\u6790\u548C\u6570\u636E\u7ED3\u6784\u751F\u6210\uFF0C\u9020\u6210\u4E3B\u7EBF\u7A0B CPU \u8FC7\u9AD8\u3002</p>
<h4 id="\u57FA\u4E8E-vhds">\u57FA\u4E8E VHDS</h4>
<p>\u76EE\u524D\u7684 VHDS \u65B9\u6848\u662F\u57FA\u4E8E onDemand \u7684\uFF0C\u53EA\u6709\u5F53\u524D\u8BF7\u6C42\u7684\u8DEF\u7531\u627E\u4E0D\u5230\u57DF\u540D\u914D\u7F6E\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5411 xDS \u670D\u52A1\u5668\u62C9\u53D6\u914D\u7F6E\u3002\u8FD9\u6837\u4F1A\u5C06\u6570\u636E\u9762\u7684\u6D41\u91CF\u7A7F\u900F\u7ED9\u63A7\u5236\u9762\uFF0C\u5982\u679C\u6709\u5927\u91CF404\u7684\u8BF7\u6C42\u4F1A\u5BF9\u63A7\u5236\u9762\u9020\u6210\u538B\u529B\uFF0C\u800C\u4E14\u63A7\u5236\u9762\u7684\u53EF\u7528\u6027\u76F4\u63A5\u5F71\u54CD\u5230\u6570\u636E\u9762\u7684\u53EF\u7528\u6027\u3002</p>
<h4 id="\u57FA\u4E8E-srds">\u57FA\u4E8E SRDS</h4>
<p>\u76EE\u524D Envoy \u652F\u6301\u57FA\u4E8E\u6307\u5B9A Header \u6765\u505A\u8DEF\u7531\u914D\u7F6E\u5207\u7247\uFF08<a href="https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-scopedroutes" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Scoped RDS</a>\uFF09\u3002\u770B\u4E4B\u524D\u7684\u8BBE\u8BA1\uFF0C\u662F\u4E3A\u4E86\u80FD\u5BF9\u4E0D\u540C cookie \u8D70\u4E0D\u540C\u7684\u8DEF\u7531\u914D\u7F6E\u3002</p>
<p>\u53EF\u4EE5\u5BF9 SRDS \u505A\u6269\u5C55\u6765\u652F\u6301\u6309\u57DF\u540D\u5207\u7247\u8FDB\u884C\u5339\u914D\u8DEF\u7531\u3002\u6269\u5C55\u7684\u5173\u952E\u70B9\u662F\uFF1A</p>
<ol>
<li>\u8981\u652F\u6301 wildcard domain\uFF0C\u652F\u6301\u524D\u7F00\u5339\u914D</li>
<li>\u4E0D\u540C\u7684 port \u4E0B\u76F8\u540C\u57DF\u540D\u903B\u8F91\u53EF\u80FD\u4E0D\u540C\uFF0C\u4F8B\u5982 80 \u4E0B\u53EF\u80FD\u662F\u5F3A\u5236\u8DF3\u8F6C</li>
</ol>
<p>\u4E0B\u9762\u662F Higress \u5BF9 ScopedRoutes \u505A\u7684\u6269\u5C55\u5728\u914D\u7F6E\u4E0A\u7684\u4F53\u73B0\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// [#next-free-field: 6]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">message ScopedRoutes {</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#B392F0">option</span><span style="--0:#E1E4E8"> (udpa.annotations.versioning).previous_message_type </span><span style="--0:#F97583">=</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#9ECBFF">"envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">...</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">message HostValueExtractor {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">option</span><span style="--0:#E1E4E8"> (udpa.annotations.versioning).previous_message_type </span><span style="--0:#F97583">=</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder."</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"FragmentBuilder.HostValueExtractor"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// The maximum number of host superset recomputes. If not specified, defaults to 100.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">google.protobuf.UInt32Value max_recompute_num </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">message LocalPortValueExtractor {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">option</span><span style="--0:#E1E4E8"> (udpa.annotations.versioning).previous_message_type </span><span style="--0:#F97583">=</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder."</span></div></div><div class="ec-line"><div class="code"><span class="indent">            </span><span style="--0:#9ECBFF">"FragmentBuilder.LocalPortValueExtractor"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">oneof type {</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#B392F0">option</span><span style="--0:#E1E4E8"> (validate.required) </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">true</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// Specifies how a header field's value should be extracted.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">HeaderValueExtractor header_value_extractor </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// Extract the fragemnt value from the :authority header, and support recompute with the wildcard domains,</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// i.e. \`\`www.example.com\`\` can be recomputed with \`\`*.example.com\`\`, then \`\`*.com\`\`, then \`\`*\`\`.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">HostValueExtractor host_value_extractor </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">101</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#99A0A6">// Extract the fragment value from local port of the connection.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">LocalPortValueExtractor local_port_value_extractor </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">102</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">      </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// The final(built) scope key consists of the ordered union of these fragments, which are compared in order with the</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// fragments of a :ref:\`ScopedRouteConfiguration&#x3C;envoy_v3_api_msg_config.route.v3.ScopedRouteConfiguration>\`.</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">// A missing fragment during comparison will make the key invalid, i.e., the computed key doesn't match any key.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">repeated FragmentBuilder fragments </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8"> [(validate.rules).repeated </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> {min_items</span><span style="--0:#F97583">:</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">1</span><span style="--0:#E1E4E8">}];</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// [#next-free-field: 6]\x7Fmessage ScopedRoutes {\x7F     option (udpa.annotations.versioning).previous_message_type =\x7F        &#x22;envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes&#x22;;\x7F...\x7F...\x7F      message HostValueExtractor {\x7F        option (udpa.annotations.versioning).previous_message_type =\x7F            &#x22;envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.&#x22;\x7F            &#x22;FragmentBuilder.HostValueExtractor&#x22;;\x7F\x7F        // The maximum number of host superset recomputes. If not specified, defaults to 100.\x7F        google.protobuf.UInt32Value max_recompute_num = 1;\x7F      }\x7F\x7F      message LocalPortValueExtractor {\x7F        option (udpa.annotations.versioning).previous_message_type =\x7F            &#x22;envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder.&#x22;\x7F            &#x22;FragmentBuilder.LocalPortValueExtractor&#x22;;\x7F      }\x7F\x7F\x7F      oneof type {\x7F        option (validate.required) = true;\x7F\x7F        // Specifies how a header field&#x27;s value should be extracted.\x7F        HeaderValueExtractor header_value_extractor = 1;\x7F\x7F        // Extract the fragemnt value from the :authority header, and support recompute with the wildcard domains,\x7F        // i.e. &#x60;&#x60;www.example.com&#x60;&#x60; can be recomputed with &#x60;&#x60;*.example.com&#x60;&#x60;, then &#x60;&#x60;*.com&#x60;&#x60;, then &#x60;&#x60;*&#x60;&#x60;.\x7F        HostValueExtractor host_value_extractor = 101;\x7F\x7F        // Extract the fragment value from local port of the connection.\x7F        LocalPortValueExtractor local_port_value_extractor = 102;\x7F      }\x7F    }\x7F\x7F    // The final(built) scope key consists of the ordered union of these fragments, which are compared in order with the\x7F    // fragments of a :ref:&#x60;ScopedRouteConfiguration<envoy_v3_api_msg_config.route.v3.ScopedRouteConfiguration>&#x60;.\x7F    // A missing fragment during comparison will make the key invalid, i.e., the computed key doesn&#x27;t match any key.\x7F    repeated FragmentBuilder fragments = 1 [(validate.rules).repeated = {min_items: 1}];\x7F  }"><div></div></button></div></figure></div>
<h2 id="\u5171\u7528\u8DEF\u7531\u914D\u7F6E\u7684\u5B89\u5168\u6027\u8003\u8651">\u5171\u7528\u8DEF\u7531\u914D\u7F6E\u7684\u5B89\u5168\u6027\u8003\u8651</h2>
<p>\u5728\u6240\u6709 filter chains \u5171\u7528\u8DEF\u7531\u914D\u7F6E\u7684\u60C5\u51B5\u4E0B\uFF0C\u56E0\u4E3A\u4E0D\u540C\u7684 filter chain \u53EF\u80FD\u6709\u4E0D\u540C\u7684\u8BA4\u8BC1\u7B56\u7565\uFF0C \u6BD4\u5982\u5E38\u89C1\u7684\u9700\u8981\u8BA4\u8BC1\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF08mTLS\uFF09\u7684\u60C5\u51B5\uFF0C\u6216\u8005\u57FA\u4E8E IP \u7684 RBAC \u7B49\u3002</p>
<p>\u8D38\u7136\u5C06\u6240\u6709\u8DEF\u7531\u90FD\u66B4\u9732\u5230\u4EFB\u610F\u7684 filter chain \u4E0A\u662F\u4E0D\u5B89\u5168\u7684\u3002</p>
<p>\u53EF\u4EE5\u8003\u8651\u7684\u65B9\u6848\uFF0C\u662F\u7531\u63A7\u5236\u9762\u6765\u8BC6\u522B\u8FD9\u4E00\u5B89\u5168\u9690\u60A3\uFF0C\u5728\u53D1\u73B0\u67D0\u4E2A\u57DF\u540D\u5FC5\u987B\u901A\u8FC7\u7279\u5B9A filter chain \u7684\u8BA4\u8BC1\u540E\u624D\u80FD\u8BBF\u95EE\u65F6\uFF0C\u8FDB\u884C\u5BF9\u5E94\u7684\u4FDD\u62A4\u3002</p>
<p>Higress \u662F\u7ED9 VirtualHost \u589E\u52A0\u914D\u7F6E\u9879 allow_server_names\uFF0C\u4F8B\u5982\u5728\u5F00\u542F mTLS \u65F6\uFF0C\u4F1A\u914D\u7F6E\u53EA\u5141\u8BB8\u8BF7\u6C42\u5E26\u7279\u5B9A SNI \u7684\u60C5\u51B5\u4E0B\u624D\u80FD\u8BBF\u95EE\uFF1A</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// [#protodoc-title: HTTP route components]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// * Routing :ref:\`architecture overview &#x3C;arch_overview_http_routing>\`</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// * HTTP :ref:\`router filter &#x3C;config_http_filters_router>\`</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// The top level element in the routing configuration is a virtual host. Each virtual host has</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// a logical name as well as a set of domains that get routed to it based on the incoming request's</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// host header. This allows a single listener to service multiple top level domain path trees. Once</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// a virtual host is selected based on the domain, the routes are processed in order to see which</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// upstream cluster to route to or whether to perform a redirect.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6">// [#next-free-field: 24]</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">message VirtualHost {</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#B392F0">option</span><span style="--0:#E1E4E8"> (udpa.annotations.versioning).previous_message_type </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">"envoy.api.v2.route.VirtualHost"</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">...</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">...</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// If non-empty, a list of server names (such as SNI for the TLS protocol) is used to determine</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// whether this request is allowed to access this VirutalHost. If not allowed, 421 Misdirected Request will be returned.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// The server name can be matched whith wildcard domains, i.e. \`\`www.example.com\`\` can be matched with</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// \`\`www.example.com\`\`, \`\`*.example.com\`\` and \`\`*.com\`\`.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// Note that partial wildcards are not supported, and values like \`\`*w.example.com\`\` are invalid.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// This is useful when expose all virtual hosts to arbitrary HCM filters (such as using SRDS), and you want to make</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// mTLS-protected routes invisible to requests with different SNIs.</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">// .. attention::</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//   See the :ref:\`FAQ entry &#x3C;faq_how_to_setup_sni>\` on how to configure SNI for more</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#99A0A6">//   information.</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">  </span></span><span style="--0:#E1E4E8">repeated string allow_server_names </span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">101</span><span style="--0:#E1E4E8">;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="// [#protodoc-title: HTTP route components]\x7F// * Routing :ref:&#x60;architecture overview <arch_overview_http_routing>&#x60;\x7F// * HTTP :ref:&#x60;router filter <config_http_filters_router>&#x60;\x7F\x7F// The top level element in the routing configuration is a virtual host. Each virtual host has\x7F// a logical name as well as a set of domains that get routed to it based on the incoming request&#x27;s\x7F// host header. This allows a single listener to service multiple top level domain path trees. Once\x7F// a virtual host is selected based on the domain, the routes are processed in order to see which\x7F// upstream cluster to route to or whether to perform a redirect.\x7F// [#next-free-field: 24]\x7Fmessage VirtualHost {\x7F  option (udpa.annotations.versioning).previous_message_type = &#x22;envoy.api.v2.route.VirtualHost&#x22;;\x7F...\x7F...\x7F  // If non-empty, a list of server names (such as SNI for the TLS protocol) is used to determine\x7F  // whether this request is allowed to access this VirutalHost. If not allowed, 421 Misdirected Request will be returned.\x7F  //\x7F  // The server name can be matched whith wildcard domains, i.e. &#x60;&#x60;www.example.com&#x60;&#x60; can be matched with\x7F  // &#x60;&#x60;www.example.com&#x60;&#x60;, &#x60;&#x60;*.example.com&#x60;&#x60; and &#x60;&#x60;*.com&#x60;&#x60;.\x7F  //\x7F  // Note that partial wildcards are not supported, and values like &#x60;&#x60;*w.example.com&#x60;&#x60; are invalid.\x7F  //\x7F  // This is useful when expose all virtual hosts to arbitrary HCM filters (such as using SRDS), and you want to make\x7F  // mTLS-protected routes invisible to requests with different SNIs.\x7F  //\x7F  // .. attention::\x7F  //\x7F  //   See the :ref:&#x60;FAQ entry <faq_how_to_setup_sni>&#x60; on how to configure SNI for more\x7F  //   information.\x7F  repeated string allow_server_names = 101;\x7F}"><div></div></button></div></figure></div>
<h3 id="\u662F\u5426\u6709\u5B89\u5168\u9690\u60A3">\u662F\u5426\u6709\u5B89\u5168\u9690\u60A3\uFF1F</h3>
<p>\u4EE5 httpd \u4E3A\u4F8B\u7684\u4E00\u4E9B\u4F20\u7EDF HTTP \u4EE3\u7406\u8F6F\u4EF6\u5E76\u4E0D\u652F\u6301\u5F53 :authority
 \u548C SNI \u4E0D\u4E00\u81F4\u65F6\u8FDB\u884C\u8DEF\u7531\u3002\u800C Nginx \u5E94\u8BE5\u662F\u6BD4\u8F83\u65E9\u5B9E\u73B0\u8FD9\u4E00\u7279\u6027\u7684\u7F51\u5173\uFF0C\u4E5F\u6709\u4EBA\u7ED9 Nginx \u793E\u533A\u63D0\u4E86 issue\uFF0C\u8BA4\u4E3A\u6709\u5B89\u5168\u9690\u60A3\uFF1A</p>
<p><a href="https://trac.nginx.org/nginx/ticket/1694" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://trac.nginx.org/nginx/ticket/1694</a></p>
<p>\u8FD9\u662F Nginx \u5F53\u65F6\u7EF4\u62A4\u8005\u7684\u7B54\u590D\uFF0C\u8BF4\u7684\u5F88\u660E\u767D\uFF0C\u5E76\u6CA1\u6709\u5B89\u5168\u9690\u60A3:</p>
<blockquote>
<p><font style="color:rgb(0, 0, 0);">In theory, you are right. SNI was designed to be used with the only one name, and requesting different names over a connection which uses SNI is not correct. Quoting</font><font style="color:rgb(0, 0, 0);"> </font><a href="https://tools.ietf.org/html/rfc6066#section-3" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><font style="color:rgb(0, 0, 0);">RFC 6066</font></a><font style="color:rgb(0, 0, 0);">:</font></p><font style="color:rgb(0, 0, 0);">
</font>
<p><font style="color:rgb(0, 0, 0);">If the server_name is established in the TLS session handshake, the client SHOULD NOT<br>
</font><font style="color:rgb(0, 0, 0);">attempt to request a different server name at the application layer.</font></p><font style="color:rgb(0, 0, 0);">
</font>
<p><font style="color:rgb(0, 0, 0);">But in practice, SPDY introduced so-called \u201Cconnection reuse\u201D, which effectively uses a connection with an established SNI for request to different application-level names. And it is followed by</font><font style="color:rgb(0, 0, 0);"> </font><a href="https://tools.ietf.org/html/rfc7540#section-9.1.1" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><font style="color:rgb(0, 0, 0);">HTTP/2 connection reuse</font></a><font style="color:rgb(0, 0, 0);">, which does the same: a HTTP/2 client can request a different host over an already established connection.</font></p><font style="color:rgb(0, 0, 0);">
</font>
<p><font style="color:rgb(0, 0, 0);">The 421 (Misdirected Request) status code, also introduced by HTTP/2 RFC, is expected to be used only when such a connection reuse is not possible due to server limitations. In nginx, 421 is returned when a client tries to request a server protected with client SSL certificates over a connection established to a different server.</font></p>
</blockquote>
<p>\u6280\u672F\u662F\u5728\u4E0D\u65AD\u53D1\u5C55\u7684\uFF0CRFC 6066 \u5236\u8BA2\u65F6\uFF0C\u8FD8\u6CA1\u6709\u51FA\u73B0 HTTP/2 \u591A\u8DEF\u590D\u7528\u8FD9\u6837\u7684\u6280\u672F\uFF0C\u6240\u4EE5\u8BA4\u4E3A\u5BA2\u6237\u7AEF\u5728\u4E00\u6761\u4F7F\u7528 SNI \u7684\u8FDE\u63A5\u4E0A\u53D1\u9001\u4E0D\u540C\u57DF\u540D\u7684\u8BF7\u6C42\u662F\u4E0D\u6B63\u786E\u7684\u3002</p>
<p>\u4F46\u968F\u7740 Web \u6280\u672F\u7684\u53D1\u5C55\uFF0C\u524D\u7AEF\u9875\u9762\u627F\u8F7D\u7684\u5185\u5BB9\u6108\u52A0\u4E30\u5BCC\uFF0C\u9875\u9762\u5E76\u53D1\u8BF7\u6C42\u6108\u52A0\u589E\u591A\uFF0C\u4E0D\u8BBA\u662F\u5BF9\u5BA2\u6237\u7AEF\u8FD8\u662F\u670D\u52A1\u7AEF\u90FD\u63D0\u51FA\u4E86\u66F4\u9AD8\u6027\u80FD\uFF0C\u66F4\u5FEB\u54CD\u5E94\u7684\u8981\u6C42\uFF0CSPDY \u4EE5\u53CA HTTP/2 \u987A\u5E94\u800C\u751F\uFF0C\u9762\u5BF9 TLS \u4E0B\u6602\u8D35\u7684\u8FDE\u63A5\u5F00\u9500\uFF0C\u8FDE\u63A5\u590D\u7528\u5E94\u5F53\u201C\u5E94\u7528\u5C3D\u7528\u201D\u3002\u65E2\u7136\u5BF9\u4E8E\u6388\u4FE1\u7684\u670D\u52A1\u7AEF\u8FDE\u63A5\uFF0C\u901A\u8FC7 HTTPS \u8BC1\u4E66\u8BA4\u8BC1\u51FA\u4E86\u670D\u52A1\u7AEF\u80FD\u5408\u6CD5\u5730\u5904\u7406\u5176\u4ED6\u57DF\u540D\u7684\u8BF7\u6C42\uFF0C\u90A3\u4E48\uFF0C\u5728\u8FDE\u63A5\u4E0A\u53D1\u9001\u548C SNI \u4E0D\u540C\u57DF\u540D\u7684\u8BF7\u6C42\u4E5F\u5B8C\u5168\u662F\u5B89\u5168\u7684\u3002</p>
<p>\u5BF9\u4E8E\u8FD9\u6837\u5408\u7406\u7684\u5BA2\u6237\u7AEF\u9700\u6C42\uFF0C\u7F51\u5173\u81EA\u7136\u5E94\u8BE5\u627F\u63A5\u3002\u4ECE\u7528\u6237\u4F53\u9A8C\u7684\u89D2\u5EA6\u770B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FDE\u63A5\u590D\u7528\u63D0\u5347\u9875\u9762\u6E32\u67D3\u6216\u63A5\u53E3\u8BBF\u95EE\u901F\u5EA6\uFF1B\u4ECE\u66F4\u5927\u7684\u89C6\u89D2\u770B\uFF0C\u4E5F\u662F\u8BA9\u4FE1\u606F\u7684\u4F20\u9012\uFF0C\u5728\u4FDD\u969C\u5B89\u5168\u7684\u524D\u63D0\u4E0B\uFF0C\u5220\u7E41\u5C31\u7B80\uFF0C\u66F4\u52A0\u8282\u80FD\u4F4E\u78B3\u3002</p>`,n={title:"Envoy HTTP2 404 \u5982\u4F55\u89E3\u51B3",description:"Envoy HTTP2 404 \u5982\u4F55\u89E3\u51B3",date:"2024-12-09",category:"article",keywords:["Higress"],authors:"CH3CHO"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/blog/Higress-gvr7dx_awbbpb_fca2piud7gdu32ho.md",a=void 0,l=function(){return`
## \u95EE\u9898\u80CC\u666F
\u5728\u5927\u90E8\u5206\u57FA\u4E8E Envoy \u5B9E\u73B0\u7684\u7F51\u5173\u91CC\uFF0C\u90FD\u5B58\u5728\u8FD9\u6837\u4E00\u4E2A\u95EE\u9898\uFF0C\u5F53\u5F00\u542F http2 \u65F6\uFF0C\u5BA2\u6237\u7AEF\u8BBF\u95EE\u4F1A\u51FA\u73B0\u5076\u53D1\u7684 404\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4ECE\u65E5\u5FD7\u6CE8\u610F\u5230\u8FD9\u4E9B 404 \u7684\u8BF7\u6C42\uFF0C:authority \u5934\u91CC\u7684\u57DF\u540D\u548C SNI \u91CC\u7684\u57DF\u540D\u4E0D\u4E00\u81F4\u3002

\u4E14\u5728\u4F7F\u7528\u6CDB\u57DF\u540D\u8BC1\u4E66\uFF0C\u4E14\u914D\u7F6E\u4E86\u591A\u4E2A\u57DF\u540D\u7684\u8DEF\u7531\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u4E2A\u95EE\u9898\u7279\u522B\u5BB9\u6613\u51FA\u73B0\u3002

\u95EE\u9898\u76F8\u5173\u7684\u793E\u533A issue\uFF1A

[https://github.com/envoyproxy/envoy/issues/6767](https://github.com/envoyproxy/envoy/issues/6767#issuecomment-2489921683)

[https://github.com/istio/istio/issues/13589](https://github.com/istio/istio/issues/13589)

[https://github.com/projectcontour/contour/issues/1493](https://github.com/projectcontour/contour/issues/1493)

## \u95EE\u9898\u6210\u56E0
### \u4E3A\u4EC0\u4E48 :authority \u5934\u548C SNI \u4E0D\u4E00\u81F4
\u8FD9\u4E2A\u95EE\u9898\u6D89\u53CA\u5230\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\u590D\u7528\u673A\u5236\uFF0C\u5BF9\u4E8E http2 \u6765\u8BF4\uFF0C\u8FDE\u63A5\u591A\u8DEF\u590D\u7528\u7684\u80FD\u529B\u662F\u5BF9\u6BD4 http1 \u7684\u4E00\u4E2A\u6838\u5FC3\u5DEE\u5F02\u3002\u7279\u522B\u662F\u5BF9\u4E8E\u6D4F\u89C8\u5668\u573A\u666F\uFF0C\u5C3D\u53EF\u80FD\u7684\u8FDE\u63A5\u590D\u7528\uFF0C\u53EF\u4EE5\u5728\u5F00\u542F TLS \u7684\u573A\u666F\u4E0B\uFF0C\u663E\u8457\u4F18\u5316\u9875\u9762\u52A0\u8F7D\u65F6\u95F4\uFF08\u4E0D\u8003\u8651\u961F\u5934\u963B\u585E\u7684\u60C5\u51B5\u4E0B\uFF09\u3002\u5728 http2 \u7684 [RFC \u89C4\u7EA6](https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.1)\u91CC\u5BF9\u4E8E\u8FDE\u63A5\u590D\u7528\u4E5F\u6709\u4EE5\u4E0B\u63CF\u8FF0\uFF1A

>    Connections that are made to an origin server, either directly or
>
>    through a tunnel created using the CONNECT method (Section 8.3), **MAY**
>
> **   be reused for requests with multiple different URI authority**
>
> **   components.  A connection can be reused as long as the origin server**
>
> **   is authoritative** (Section 10.1).  For TCP connections without TLS,
>
>    this depends on the host having resolved to the same IP address.
>

\u6240\u4EE5\u5982 Chrome \u6D4F\u89C8\u5668\u5C31\u4F1A\u5728\u8FBE\u6210\u4EE5\u4E0B\u6761\u4EF6\u65F6\uFF0C\u5BF9\u4E00\u4E2A\u57DF\u540D B \u7684\u8BF7\u6C42\uFF0C\u590D\u7528\u548C\u57DF\u540D A \u5EFA\u7ACB\u7684 http2 \u8FDE\u63A5\uFF1A

1. \u57DF\u540D B \u548C\u57DF\u540D A \u662F\u89E3\u6790\u5230\u540C\u4E00\u4E2A IP
2. \u8DDF\u57DF\u540D A \u5EFA\u7ACB\u901A\u4FE1\u65F6\u83B7\u53D6\u7684\u8BC1\u4E66\u7684 Common Name \u662F wildcard\uFF0C\u4E14\u53EF\u4EE5\u5339\u914D\u5230\u57DF\u540D B\uFF1B\u6216\u8005 SAN \u4E2D\u5B58\u5728\u57DF\u540D B

\u4E00\u65E6\u548C\u57DF\u540D A \u5EFA\u7ACB\u7684\u8FDE\u63A5\u4E0A\u53D1\u9001\u4E86\u57DF\u540D B \u7684\u8BF7\u6C42\uFF0C\u5C31\u51FA\u73B0\u4E86\u4E0A\u9762\u8BF4\u7684\uFF0C\u5728\u7F51\u5173\u4FA7\u7684\u65E5\u5FD7\u4E2D\u770B\u5230 SNI \u548C :authority \u5934\u4E0D\u5339\u914D\u7684\u95EE\u9898\u4E86\u3002

### \u4E3A\u4EC0\u4E48\u4EA7\u751F 404 
\u5728 Envoy \u7684\u7F51\u5173\u91CC\uFF0C\u5E38\u89C1\u7684 SNI \u548C\u57DF\u540D\u8DEF\u7531\u7684\u6620\u5C04\u65B9\u5F0F\u662F\u4E00\u5BF9\u4E00\u7684\uFF0C\u8FD9\u6837\u5339\u914D\u5230 SNI A \u65F6\uFF0C\u53EA\u4F1A\u51FA\u73B0 A \u57DF\u540D\u7684\u8DEF\u7531\u914D\u7F6E\uFF0C\u6CA1\u6709 B \u57DF\u540D\u7684\u8DEF\u7531\uFF0C\u6240\u4EE5\u4EA7\u751F\u4E86 404\u3002

\u5177\u4F53\u6765\u8BF4\uFF0C\u5E38\u89C1\u7684 Envoy \u914D\u7F6E\u7EC4\u7EC7\u65B9\u5F0F\u662F\u6BCF\u4E2A SNI \u6709\u81EA\u5DF1\u72EC\u7ACB\u7684 filter chain\uFF0C\u800C\u4E14\u8FD9\u4E2A filter chain \u4E2D\u7684 HCM \u914D\u7F6E\u91CC\u7684 RDS \u914D\u7F6E\u4E5F\u662F\u72EC\u7ACB\u7684\u3002

## \u89E3\u51B3\u65B9\u6848
### \u65B9\u6848\u4E00\uFF1A\u4F7F\u7528\u76F8\u540C\u8BC1\u4E66\u7684\u57DF\u540D\u590D\u7528\u540C\u4E00\u4E2A filter chain
\u8FD9\u4E2A\u95EE\u9898\u4E25\u683C\u6765\u8BF4\u4E0D\u662F envoy \u7684 bug\uFF0C\u800C\u662F\u914D\u7F6E\u7EC4\u7EC7\u4E0D\u5F53\u7684\u95EE\u9898\uFF0C\u901A\u8FC7\u76F8\u540C\u8BC1\u4E66\u7684\u57DF\u540D\u590D\u7528 filter chain \u5C31\u53EF\u4EE5\u89E3\u51B3\u3002

\u8FD9\u4E2A\u65B9\u6848\u6709\u4E24\u5904\u4E0D\u8DB3\uFF1A

1. \u5982\u679C\u5F53\u57DF\u540D\u7684\u8BC1\u4E66\u53D1\u751F\u4E86\u4FEE\u6539\uFF0C\u9700\u8981\u91CD\u5EFA filter chain\uFF0C\u5C31\u4F1A\u5F71\u54CD downstream \u8FDE\u63A5\u65AD\u5F00
2. \u589E\u52A0\u4E86\u63A7\u5236\u9762\u7684\u590D\u6742\u5EA6\uFF0C\u4F8B\u5982\u4F7F\u7528 Gateway API \u65F6\uFF0C\u4E0D\u80FD\u57FA\u4E8E filter chain \u548C Gateway \u4E2D Listener \u4E00\u5BF9\u4E00\u6620\u5C04

### \u65B9\u6848\u4E8C\uFF1A\u57FA\u4E8E HTTP 421 \u72B6\u6001\u7801
\u5E38\u89C1\u7684\u662F\u901A\u8FC7 lua filter \u6765\u8FD4\u56DE 421\uFF0C\u4F8B\u5982\uFF1A

\`\`\`yaml
              "@type": "type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua"
              inlineCode: |
                function envoy_on_request(request_handle)
                  local streamInfo = request_handle:streamInfo()
                  if streamInfo:requestedServerName() ~= "" then
                    if (string.sub(streamInfo:requestedServerName(), 1, 2) == "*." and not string.find(request_handle:headers():get(":authority"), string.sub(streamInfo:requestedServerName(), 2))) then
                      request_handle:respond({[":status"] = "421"}, "Misdirected Request")
                    end
                    if (string.sub(streamInfo:requestedServerName(), 1, 2) ~= "*." and streamInfo:requestedServerName() ~= request_handle:headers():get(":authority")) then
                      request_handle:respond({[":status"] = "421"}, "Misdirected Request")
                    end
                  end
                end
\`\`\`

\u8FD9\u4E5F\u662F\u57FA\u4E8E HTTP2 [RFC ](https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2)\u7684\u5EFA\u8BAE:

>    In some deployments, reusing a connection for multiple origins can
>
>    result in requests being directed to the wrong origin server.  For
>
>    example, TLS termination might be performed by a middlebox that uses
>
>    the TLS Server Name Indication (SNI) [TLS-EXT] extension to select an
>
>    origin server.  This means that it is possible for clients to send
>
>    confidential information to servers that might not be the intended
>
>    target for the request, even though the server is otherwise
>
>    authoritative.
>
>    A server that does not wish clients to reuse connections can indicate
>
>    that it is not authoritative for a request by sending a 421
>
>    (Misdirected Request) status code in response to the request (see
>
>    Section 9.1.2).
>

\u8FD9\u4E2A\u65B9\u6848\u4E5F\u6709\u4E24\u5904\u4E0D\u8DB3\uFF1A

1. \u5931\u53BB\u4E86\u8FDE\u63A5\u590D\u7528\u7684\u7279\u6027\uFF0C\u5BF9\u4E8E\u4E00\u4E9B\u4F9D\u8D56 HTTP2 \u8FDE\u63A5\u590D\u7528\u5B9E\u73B0\u9875\u9762\u52A0\u8F7D\u4F18\u5316\u7684\u573A\u666F\uFF0C\u53EF\u80FD\u662F\u4E0D\u63A5\u53D7\u7684
2. HTTP 421 \u5B58\u5728\u7248\u672C\u517C\u5BB9\u95EE\u9898\uFF0C\u7279\u522B\u662F\u5728\u4E2D\u56FD\u6709\u5F88\u591A\u57FA\u4E8E\u4F4E\u7248\u672C chromium \u6784\u5EFA\u7684 Hybrid Android APP\uFF0C\u5B58\u5728\u5BF9\u4E0D\u540C\u57DF\u540D\u590D\u7528\u8FDE\u63A5\uFF0C\u4F46\u662F\u53C8\u4E0D\u652F\u6301\u57FA\u4E8E 421 \u91CD\u65B0\u5EFA\u8FDE\u7684\u95EE\u9898\uFF0C\u8FD4\u56DE 421 \u4F1A\u76F4\u63A5\u9020\u6210\u4E1A\u52A1\u62A5\u9519

### \u65B9\u6848\u4E09\uFF1Afilter chains \u5171\u7528\u8DEF\u7531\u914D\u7F6E
#### \u57FA\u4E8E RDS
\u6240\u6709 https \u7684 filter chain \u5982\u679C\u90FD\u5171\u7528\u540C\u4E00\u4EFD RDS\uFF0C\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u9020\u6210 RDS \u8D44\u6E90\u8FC7\u5927\u7684\u95EE\u9898\uFF0C\u8D44\u6E90\u8FC7\u5927\uFF0C\u5C31\u65E0\u6CD5\u901A\u8FC7 delta xDS \u7B49\u65B9\u6848\u53BB\u505A\u589E\u91CF\u63A8\u9001\u4F18\u5316\u3002\u800C\u4E14 RDS \u91CC\u4EFB\u4F55\u8D44\u6E90\u53D8\u5316\uFF0C\u5BFC\u81F4\u8D44\u6E90 checksum \u4FEE\u6539\uFF0C\u5C31\u4F1A\u4F7F\u5F97 Envoy \u52A0\u8F7D\u914D\u7F6E\u65F6\u9700\u8981\u5BF9\u6574\u4E2A RDS \u91CD\u65B0\u505A\u4E00\u904D\u914D\u7F6E\u89E3\u6790\u548C\u6570\u636E\u7ED3\u6784\u751F\u6210\uFF0C\u9020\u6210\u4E3B\u7EBF\u7A0B CPU \u8FC7\u9AD8\u3002

#### \u57FA\u4E8E VHDS
\u76EE\u524D\u7684 VHDS \u65B9\u6848\u662F\u57FA\u4E8E onDemand \u7684\uFF0C\u53EA\u6709\u5F53\u524D\u8BF7\u6C42\u7684\u8DEF\u7531\u627E\u4E0D\u5230\u57DF\u540D\u914D\u7F6E\u65F6\uFF0C\u4F1A\u89E6\u53D1\u5411 xDS \u670D\u52A1\u5668\u62C9\u53D6\u914D\u7F6E\u3002\u8FD9\u6837\u4F1A\u5C06\u6570\u636E\u9762\u7684\u6D41\u91CF\u7A7F\u900F\u7ED9\u63A7\u5236\u9762\uFF0C\u5982\u679C\u6709\u5927\u91CF404\u7684\u8BF7\u6C42\u4F1A\u5BF9\u63A7\u5236\u9762\u9020\u6210\u538B\u529B\uFF0C\u800C\u4E14\u63A7\u5236\u9762\u7684\u53EF\u7528\u6027\u76F4\u63A5\u5F71\u54CD\u5230\u6570\u636E\u9762\u7684\u53EF\u7528\u6027\u3002

#### \u57FA\u4E8E SRDS
\u76EE\u524D Envoy \u652F\u6301\u57FA\u4E8E\u6307\u5B9A Header \u6765\u505A\u8DEF\u7531\u914D\u7F6E\u5207\u7247\uFF08[Scoped RDS](https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-scopedroutes)\uFF09\u3002\u770B\u4E4B\u524D\u7684\u8BBE\u8BA1\uFF0C\u662F\u4E3A\u4E86\u80FD\u5BF9\u4E0D\u540C cookie \u8D70\u4E0D\u540C\u7684\u8DEF\u7531\u914D\u7F6E\u3002

\u53EF\u4EE5\u5BF9 SRDS \u505A\u6269\u5C55\u6765\u652F\u6301\u6309\u57DF\u540D\u5207\u7247\u8FDB\u884C\u5339\u914D\u8DEF\u7531\u3002\u6269\u5C55\u7684\u5173\u952E\u70B9\u662F\uFF1A

1. \u8981\u652F\u6301 wildcard domain\uFF0C\u652F\u6301\u524D\u7F00\u5339\u914D
2. \u4E0D\u540C\u7684 port \u4E0B\u76F8\u540C\u57DF\u540D\u903B\u8F91\u53EF\u80FD\u4E0D\u540C\uFF0C\u4F8B\u5982 80 \u4E0B\u53EF\u80FD\u662F\u5F3A\u5236\u8DF3\u8F6C

\u4E0B\u9762\u662F Higress \u5BF9 ScopedRoutes \u505A\u7684\u6269\u5C55\u5728\u914D\u7F6E\u4E0A\u7684\u4F53\u73B0\uFF1A

\`\`\`protobuf
// [#next-free-field: 6]
message ScopedRoutes {
     option (udpa.annotations.versioning).previous_message_type =
        "envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes";
...
...
      message HostValueExtractor {
        option (udpa.annotations.versioning).previous_message_type =
            "envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder."
            "FragmentBuilder.HostValueExtractor";

        // The maximum number of host superset recomputes. If not specified, defaults to 100.
        google.protobuf.UInt32Value max_recompute_num = 1;
      }

      message LocalPortValueExtractor {
        option (udpa.annotations.versioning).previous_message_type =
            "envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder."
            "FragmentBuilder.LocalPortValueExtractor";
      }


      oneof type {
        option (validate.required) = true;

        // Specifies how a header field's value should be extracted.
        HeaderValueExtractor header_value_extractor = 1;

        // Extract the fragemnt value from the :authority header, and support recompute with the wildcard domains,
        // i.e. \`\`www.example.com\`\` can be recomputed with \`\`*.example.com\`\`, then \`\`*.com\`\`, then \`\`*\`\`.
        HostValueExtractor host_value_extractor = 101;

        // Extract the fragment value from local port of the connection.
        LocalPortValueExtractor local_port_value_extractor = 102;
      }
    }

    // The final(built) scope key consists of the ordered union of these fragments, which are compared in order with the
    // fragments of a :ref:\`ScopedRouteConfiguration<envoy_v3_api_msg_config.route.v3.ScopedRouteConfiguration>\`.
    // A missing fragment during comparison will make the key invalid, i.e., the computed key doesn't match any key.
    repeated FragmentBuilder fragments = 1 [(validate.rules).repeated = {min_items: 1}];
  }
\`\`\`

## \u5171\u7528\u8DEF\u7531\u914D\u7F6E\u7684\u5B89\u5168\u6027\u8003\u8651
\u5728\u6240\u6709 filter chains \u5171\u7528\u8DEF\u7531\u914D\u7F6E\u7684\u60C5\u51B5\u4E0B\uFF0C\u56E0\u4E3A\u4E0D\u540C\u7684 filter chain \u53EF\u80FD\u6709\u4E0D\u540C\u7684\u8BA4\u8BC1\u7B56\u7565\uFF0C \u6BD4\u5982\u5E38\u89C1\u7684\u9700\u8981\u8BA4\u8BC1\u5BA2\u6237\u7AEF\u8BC1\u4E66\uFF08mTLS\uFF09\u7684\u60C5\u51B5\uFF0C\u6216\u8005\u57FA\u4E8E IP \u7684 RBAC \u7B49\u3002

\u8D38\u7136\u5C06\u6240\u6709\u8DEF\u7531\u90FD\u66B4\u9732\u5230\u4EFB\u610F\u7684 filter chain \u4E0A\u662F\u4E0D\u5B89\u5168\u7684\u3002

\u53EF\u4EE5\u8003\u8651\u7684\u65B9\u6848\uFF0C\u662F\u7531\u63A7\u5236\u9762\u6765\u8BC6\u522B\u8FD9\u4E00\u5B89\u5168\u9690\u60A3\uFF0C\u5728\u53D1\u73B0\u67D0\u4E2A\u57DF\u540D\u5FC5\u987B\u901A\u8FC7\u7279\u5B9A filter chain \u7684\u8BA4\u8BC1\u540E\u624D\u80FD\u8BBF\u95EE\u65F6\uFF0C\u8FDB\u884C\u5BF9\u5E94\u7684\u4FDD\u62A4\u3002

Higress \u662F\u7ED9 VirtualHost \u589E\u52A0\u914D\u7F6E\u9879 allow_server_names\uFF0C\u4F8B\u5982\u5728\u5F00\u542F mTLS \u65F6\uFF0C\u4F1A\u914D\u7F6E\u53EA\u5141\u8BB8\u8BF7\u6C42\u5E26\u7279\u5B9A SNI \u7684\u60C5\u51B5\u4E0B\u624D\u80FD\u8BBF\u95EE\uFF1A

\`\`\`protobuf
// [#protodoc-title: HTTP route components]
// * Routing :ref:\`architecture overview <arch_overview_http_routing>\`
// * HTTP :ref:\`router filter <config_http_filters_router>\`

// The top level element in the routing configuration is a virtual host. Each virtual host has
// a logical name as well as a set of domains that get routed to it based on the incoming request's
// host header. This allows a single listener to service multiple top level domain path trees. Once
// a virtual host is selected based on the domain, the routes are processed in order to see which
// upstream cluster to route to or whether to perform a redirect.
// [#next-free-field: 24]
message VirtualHost {
  option (udpa.annotations.versioning).previous_message_type = "envoy.api.v2.route.VirtualHost";
...
...
  // If non-empty, a list of server names (such as SNI for the TLS protocol) is used to determine
  // whether this request is allowed to access this VirutalHost. If not allowed, 421 Misdirected Request will be returned.
  //
  // The server name can be matched whith wildcard domains, i.e. \`\`www.example.com\`\` can be matched with
  // \`\`www.example.com\`\`, \`\`*.example.com\`\` and \`\`*.com\`\`.
  //
  // Note that partial wildcards are not supported, and values like \`\`*w.example.com\`\` are invalid.
  //
  // This is useful when expose all virtual hosts to arbitrary HCM filters (such as using SRDS), and you want to make
  // mTLS-protected routes invisible to requests with different SNIs.
  //
  // .. attention::
  //
  //   See the :ref:\`FAQ entry <faq_how_to_setup_sni>\` on how to configure SNI for more
  //   information.
  repeated string allow_server_names = 101;
}
\`\`\`

### \u662F\u5426\u6709\u5B89\u5168\u9690\u60A3\uFF1F
\u4EE5 httpd \u4E3A\u4F8B\u7684\u4E00\u4E9B\u4F20\u7EDF HTTP \u4EE3\u7406\u8F6F\u4EF6\u5E76\u4E0D\u652F\u6301\u5F53 :authority \u548C SNI \u4E0D\u4E00\u81F4\u65F6\u8FDB\u884C\u8DEF\u7531\u3002\u800C Nginx \u5E94\u8BE5\u662F\u6BD4\u8F83\u65E9\u5B9E\u73B0\u8FD9\u4E00\u7279\u6027\u7684\u7F51\u5173\uFF0C\u4E5F\u6709\u4EBA\u7ED9 Nginx \u793E\u533A\u63D0\u4E86 issue\uFF0C\u8BA4\u4E3A\u6709\u5B89\u5168\u9690\u60A3\uFF1A

[https://trac.nginx.org/nginx/ticket/1694](https://trac.nginx.org/nginx/ticket/1694)

\u8FD9\u662F Nginx \u5F53\u65F6\u7EF4\u62A4\u8005\u7684\u7B54\u590D\uFF0C\u8BF4\u7684\u5F88\u660E\u767D\uFF0C\u5E76\u6CA1\u6709\u5B89\u5168\u9690\u60A3:

> <font style="color:rgb(0, 0, 0);">In theory, you are right. SNI was designed to be used with the only one name, and requesting different names over a connection which uses SNI is not correct. Quoting</font><font style="color:rgb(0, 0, 0);"> </font>[<font style="color:rgb(0, 0, 0);">RFC 6066</font>](https://tools.ietf.org/html/rfc6066#section-3)<font style="color:rgb(0, 0, 0);">:  
</font>
>
> <font style="color:rgb(0, 0, 0);">If the server_name is established in the TLS session handshake, the client SHOULD NOT  
</font><font style="color:rgb(0, 0, 0);">attempt to request a different server name at the application layer.  
</font>
>
> <font style="color:rgb(0, 0, 0);">But in practice, SPDY introduced so-called "connection reuse", which effectively uses a connection with an established SNI for request to different application-level names. And it is followed by</font><font style="color:rgb(0, 0, 0);"> </font>[<font style="color:rgb(0, 0, 0);">HTTP/2 connection reuse</font>](https://tools.ietf.org/html/rfc7540#section-9.1.1)<font style="color:rgb(0, 0, 0);">, which does the same: a HTTP/2 client can request a different host over an already established connection.  
</font>
>
> <font style="color:rgb(0, 0, 0);">The 421 (Misdirected Request) status code, also introduced by HTTP/2 RFC, is expected to be used only when such a connection reuse is not possible due to server limitations. In nginx, 421 is returned when a client tries to request a server protected with client SSL certificates over a connection established to a different server.</font>
>

\u6280\u672F\u662F\u5728\u4E0D\u65AD\u53D1\u5C55\u7684\uFF0CRFC 6066 \u5236\u8BA2\u65F6\uFF0C\u8FD8\u6CA1\u6709\u51FA\u73B0 HTTP/2 \u591A\u8DEF\u590D\u7528\u8FD9\u6837\u7684\u6280\u672F\uFF0C\u6240\u4EE5\u8BA4\u4E3A\u5BA2\u6237\u7AEF\u5728\u4E00\u6761\u4F7F\u7528 SNI \u7684\u8FDE\u63A5\u4E0A\u53D1\u9001\u4E0D\u540C\u57DF\u540D\u7684\u8BF7\u6C42\u662F\u4E0D\u6B63\u786E\u7684\u3002

\u4F46\u968F\u7740 Web \u6280\u672F\u7684\u53D1\u5C55\uFF0C\u524D\u7AEF\u9875\u9762\u627F\u8F7D\u7684\u5185\u5BB9\u6108\u52A0\u4E30\u5BCC\uFF0C\u9875\u9762\u5E76\u53D1\u8BF7\u6C42\u6108\u52A0\u589E\u591A\uFF0C\u4E0D\u8BBA\u662F\u5BF9\u5BA2\u6237\u7AEF\u8FD8\u662F\u670D\u52A1\u7AEF\u90FD\u63D0\u51FA\u4E86\u66F4\u9AD8\u6027\u80FD\uFF0C\u66F4\u5FEB\u54CD\u5E94\u7684\u8981\u6C42\uFF0CSPDY \u4EE5\u53CA HTTP/2 \u987A\u5E94\u800C\u751F\uFF0C\u9762\u5BF9 TLS \u4E0B\u6602\u8D35\u7684\u8FDE\u63A5\u5F00\u9500\uFF0C\u8FDE\u63A5\u590D\u7528\u5E94\u5F53\u201C\u5E94\u7528\u5C3D\u7528\u201D\u3002\u65E2\u7136\u5BF9\u4E8E\u6388\u4FE1\u7684\u670D\u52A1\u7AEF\u8FDE\u63A5\uFF0C\u901A\u8FC7 HTTPS \u8BC1\u4E66\u8BA4\u8BC1\u51FA\u4E86\u670D\u52A1\u7AEF\u80FD\u5408\u6CD5\u5730\u5904\u7406\u5176\u4ED6\u57DF\u540D\u7684\u8BF7\u6C42\uFF0C\u90A3\u4E48\uFF0C\u5728\u8FDE\u63A5\u4E0A\u53D1\u9001\u548C SNI \u4E0D\u540C\u57DF\u540D\u7684\u8BF7\u6C42\u4E5F\u5B8C\u5168\u662F\u5B89\u5168\u7684\u3002

\u5BF9\u4E8E\u8FD9\u6837\u5408\u7406\u7684\u5BA2\u6237\u7AEF\u9700\u6C42\uFF0C\u7F51\u5173\u81EA\u7136\u5E94\u8BE5\u627F\u63A5\u3002\u4ECE\u7528\u6237\u4F53\u9A8C\u7684\u89D2\u5EA6\u770B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FDE\u63A5\u590D\u7528\u63D0\u5347\u9875\u9762\u6E32\u67D3\u6216\u63A5\u53E3\u8BBF\u95EE\u901F\u5EA6\uFF1B\u4ECE\u66F4\u5927\u7684\u89C6\u89D2\u770B\uFF0C\u4E5F\u662F\u8BA9\u4FE1\u606F\u7684\u4F20\u9012\uFF0C\u5728\u4FDD\u969C\u5B89\u5168\u7684\u524D\u63D0\u4E0B\uFF0C\u5220\u7E41\u5C31\u7B80\uFF0C\u66F4\u52A0\u8282\u80FD\u4F4E\u78B3\u3002


`},o=function(){return e},r=function(){return[{depth:2,slug:"\u95EE\u9898\u80CC\u666F",text:"\u95EE\u9898\u80CC\u666F"},{depth:2,slug:"\u95EE\u9898\u6210\u56E0",text:"\u95EE\u9898\u6210\u56E0"},{depth:3,slug:"\u4E3A\u4EC0\u4E48-authority-\u5934\u548C-sni-\u4E0D\u4E00\u81F4",text:`\u4E3A\u4EC0\u4E48 :authority
 \u5934\u548C SNI \u4E0D\u4E00\u81F4`},{depth:3,slug:"\u4E3A\u4EC0\u4E48\u4EA7\u751F-404",text:"\u4E3A\u4EC0\u4E48\u4EA7\u751F 404"},{depth:2,slug:"\u89E3\u51B3\u65B9\u6848",text:"\u89E3\u51B3\u65B9\u6848"},{depth:3,slug:"\u65B9\u6848\u4E00\u4F7F\u7528\u76F8\u540C\u8BC1\u4E66\u7684\u57DF\u540D\u590D\u7528\u540C\u4E00\u4E2A-filter-chain",text:"\u65B9\u6848\u4E00\uFF1A\u4F7F\u7528\u76F8\u540C\u8BC1\u4E66\u7684\u57DF\u540D\u590D\u7528\u540C\u4E00\u4E2A filter chain"},{depth:3,slug:"\u65B9\u6848\u4E8C\u57FA\u4E8E-http-421-\u72B6\u6001\u7801",text:"\u65B9\u6848\u4E8C\uFF1A\u57FA\u4E8E HTTP 421 \u72B6\u6001\u7801"},{depth:3,slug:"\u65B9\u6848\u4E09filter-chains-\u5171\u7528\u8DEF\u7531\u914D\u7F6E",text:"\u65B9\u6848\u4E09\uFF1Afilter chains \u5171\u7528\u8DEF\u7531\u914D\u7F6E"},{depth:4,slug:"\u57FA\u4E8E-rds",text:"\u57FA\u4E8E RDS"},{depth:4,slug:"\u57FA\u4E8E-vhds",text:"\u57FA\u4E8E VHDS"},{depth:4,slug:"\u57FA\u4E8E-srds",text:"\u57FA\u4E8E SRDS"},{depth:2,slug:"\u5171\u7528\u8DEF\u7531\u914D\u7F6E\u7684\u5B89\u5168\u6027\u8003\u8651",text:"\u5171\u7528\u8DEF\u7531\u914D\u7F6E\u7684\u5B89\u5168\u6027\u8003\u8651"},{depth:3,slug:"\u662F\u5426\u6709\u5B89\u5168\u9690\u60A3",text:"\u662F\u5426\u6709\u5B89\u5168\u9690\u60A3\uFF1F"}]},s=d((y,g,x)=>{const{layout:E,...i}=n;return i.file=t,i.url=a,p`${v()}${u(e)}`})});export{s as Content,m as __tla,o as compiledContent,s as default,t as file,n as frontmatter,r as getHeadings,l as rawContent,a as url};
