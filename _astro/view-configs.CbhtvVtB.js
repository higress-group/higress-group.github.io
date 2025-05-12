import{c as o,__tla as d}from"./astro-component.m4CCZO6J.js";import{r,m as y,u as g,__tla as h}from"./constant.CYSm-e82.js";import{__tla as E}from"./astro/assets-service.BhtN0nM5.js";let e,i,a,t,p,c,n,v=Promise.all([(()=>{try{return d}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let s;s=`<h2 id="\u6982\u8FF0">\u6982\u8FF0</h2>
<p>\u58F0\u660E\uFF1A\u5982\u679C\u53EA\u662F\u60F3\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F\uFF0C\u53EF\u4EE5\u4E0D\u7528\u770B\u8FD9\u4E00\u8282\u3002</p>
<p>Higress \u6709\u4E09\u4E2A\u7EC4\u4EF6\u4E0E\u8FD0\u884C\u65F6\u914D\u7F6E\u6709\u5173\uFF1A</p>
<ul>
<li>controller\uFF1A\u751F\u6210\u5168\u91CF\u914D\u7F6E</li>
<li>pilot\uFF1A\u4ECE controller \u83B7\u53D6\u914D\u7F6E\uFF0C\u8FC7\u6EE4\u540E\u4E0B\u53D1\u7ED9 gateway</li>
<li>gateway\uFF1A\u4ECE pilot \u83B7\u53D6\u914D\u7F6E\u5E76\u5728\u8DEF\u7531\u65F6\u751F\u6548</li>
</ul>
<h2 id="\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F">\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F</h2>
<h3 id="k8s-\u90E8\u7F72">K8s \u90E8\u7F72</h3>
<h4 id="\u51C6\u5907\u5DE5\u4F5C">\u51C6\u5907\u5DE5\u4F5C</h4>
<p>\u83B7\u53D6 Higress \u5404\u4E2A Pod \u7684\u540D\u79F0\uFF1A</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">get</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">pods</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl get pods -n higress-system"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-controller-\u751F\u6210\u7684\u914D\u7F6E">\u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-controller-xxxx-yyyy</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8888/debug/configz</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u7D27\u51D1 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8888/debug/configz?pretty</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash\x7Fcurl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON\x7Fcurl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-pilot-\u83B7\u53D6\u5230\u7684\u914D\u7F6E">\u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-controller-xxxx-yyyy</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/configz</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u7D27\u51D1 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/configz?pretty</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash\x7Fcurl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON\x7Fcurl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-pilot-\u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E">\u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-controller-xxxx-yyyy</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/connections</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway-7f9f949d64-hmmg8.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/config_dump?proxyID=higress-gateway-7f9f949d64-hmmg8.higress-system-1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash\x7Fcurl http://localhost:15014/debug/connections\x7Fcurl http://localhost:15014/debug/config_dump?proxyID=higress-gateway-7f9f949d64-hmmg8.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-gateway-\u83B7\u53D6\u5230\u7684\u914D\u7F6E">\u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-gateway-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Gateway Pod \u540D\u79F0\u3002</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">kubectl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway-xxxx-yyyy</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-n</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-system</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15000/config_dump</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="kubectl exec higress-gateway-xxxx-yyyy -n higress-system -it -- bash\x7Fcurl http://localhost:15000/config_dump"><div></div></button></div></figure></div>
<h3 id="docker-compose-\u90E8\u7F72">Docker Compose \u90E8\u7F72</h3>
<h4 id="\u83B7\u53D6-controller-\u751F\u6210\u7684\u914D\u7F6E-1">\u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-controller-1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8888/debug/configz</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u7D27\u51D1 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8888/debug/configz?pretty</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-controller-1 bash\x7Fcurl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON\x7Fcurl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-pilot-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-1">\u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-pilot-1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/configz</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u7D27\u51D1 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/configz?pretty</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-pilot-1 bash\x7Fcurl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON\x7Fcurl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-pilot-\u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E-1">\u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-pilot-1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/connections</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-pilot-1 bash\x7Fcurl http://localhost:15014/debug/connections\x7Fcurl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-gateway-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-1">\u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-gateway-1</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15000/config_dump</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-gateway-1 bash\x7Fcurl http://localhost:15000/config_dump"><div></div></button></div></figure></div>
<h3 id="all-in-one-\u955C\u50CF\u90E8\u7F72">all-in-one \u955C\u50CF\u90E8\u7F72</h3>
<h4 id="\u51C6\u5907\u5DE5\u4F5C-1">\u51C6\u5907\u5DE5\u4F5C</h4>
<p>\u786E\u8BA4 Higress all-in-one \u7684\u5BB9\u5668\u540D\u79F0\uFF1A</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">ps</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker ps"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-controller-\u751F\u6210\u7684\u914D\u7F6E-2">\u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-container-name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8888/debug/configz</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u7D27\u51D1 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:8888/debug/configz?pretty</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-container-name bash\x7Fcurl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON\x7Fcurl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-pilot-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-2">\u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-container-name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/configz</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u7D27\u51D1 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/configz?pretty</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-container-name bash\x7Fcurl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON\x7Fcurl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-pilot-\u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E-2">\u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-container-name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/connections</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1</span><span style="--0:#E1E4E8"> </span><span style="--0:#99A0A6"># \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-container-name bash\x7Fcurl http://localhost:15014/debug/connections\x7Fcurl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId"><div></div></button></div></figure></div>
<h4 id="\u83B7\u53D6-gateway-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-2">\u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E</h4>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">docker</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">exec</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-it</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">higress-container-name</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bash</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">curl</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">http://localhost:15000/config_dump</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="docker exec -it higress-container-name bash\x7Fcurl http://localhost:15000/config_dump"><div></div></button></div></figure></div>`,t={title:"\u67E5\u770B\u8FD0\u884C\u65F6\u914D\u7F6E",keywords:["ops","runtime","config"],description:"\u4ECB\u7ECD\u5982\u4F55\u67E5\u770B Higress \u7684\u8FD0\u884C\u65F6\u914D\u7F6E",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/ops/how-tos/view-configs.md"},a="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/ops/how-tos/view-configs.md",n=void 0,c=function(){return`# \u67E5\u770B\u8FD0\u884C\u65F6\u914D\u7F6E

## \u6982\u8FF0

\u58F0\u660E\uFF1A\u5982\u679C\u53EA\u662F\u60F3\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F\uFF0C\u53EF\u4EE5\u4E0D\u7528\u770B\u8FD9\u4E00\u8282\u3002

Higress \u6709\u4E09\u4E2A\u7EC4\u4EF6\u4E0E\u8FD0\u884C\u65F6\u914D\u7F6E\u6709\u5173\uFF1A

- controller\uFF1A\u751F\u6210\u5168\u91CF\u914D\u7F6E
- pilot\uFF1A\u4ECE controller \u83B7\u53D6\u914D\u7F6E\uFF0C\u8FC7\u6EE4\u540E\u4E0B\u53D1\u7ED9 gateway
- gateway\uFF1A\u4ECE pilot \u83B7\u53D6\u914D\u7F6E\u5E76\u5728\u8DEF\u7531\u65F6\u751F\u6548

## \u83B7\u53D6\u914D\u7F6E\u4FE1\u606F

### K8s \u90E8\u7F72

#### \u51C6\u5907\u5DE5\u4F5C

\u83B7\u53D6 Higress \u5404\u4E2A Pod \u7684\u540D\u79F0\uFF1A

\`\`\`bash
kubectl get pods -n higress-system
\`\`\`

#### \u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E

\`\`\`bash
# higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E

\`\`\`bash
# higress-controller-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Controller Pod \u540D\u79F0\u3002
kubectl exec higress-controller-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15014/debug/connections
# \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON
# \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway-7f9f949d64-hmmg8.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway-7f9f949d64-hmmg8.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId
\`\`\`

#### \u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-gateway-xxxx-yyyy \u5373\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress Gateway Pod \u540D\u79F0\u3002
kubectl exec higress-gateway-xxxx-yyyy -n higress-system -it -- bash
curl http://localhost:15000/config_dump
\`\`\`

### Docker Compose \u90E8\u7F72

#### \u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-controller-1 bash
curl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-pilot-1 bash
curl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-pilot-1 bash
curl http://localhost:15014/debug/connections
# \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON
# \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId
\`\`\`

#### \u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
docker exec -it higress-gateway-1 bash
curl http://localhost:15000/config_dump
\`\`\`

### all-in-one \u955C\u50CF\u90E8\u7F72

#### \u51C6\u5907\u5DE5\u4F5C

\u786E\u8BA4 Higress all-in-one \u7684\u5BB9\u5668\u540D\u79F0\uFF1A

\`\`\`bash
docker ps
\`\`\`

#### \u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:8888/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:8888/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:15014/debug/configz # \u8F93\u51FA\u7D27\u51D1 JSON
curl http://localhost:15014/debug/configz?pretty # \u8F93\u51FA\u683C\u5F0F\u5316\u4E86\u7684 JSON
\`\`\`

#### \u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:15014/debug/connections
# \u4E0A\u9762\u8FD9\u4E00\u6B65\u4F1A\u8F93\u51FA\u4E00\u6BB5 JSON
# \u7C7B\u4F3C {"totalClients":1,"clients":[{"connectionId":"higress-gateway.higress-system-1","connectedAt":"2025-05-12T04:52:23.63339838Z","address":"10.42.0.47:56862","labels":null}]}
# \u8BF7\u8BB0\u5F55\u4E0B\u9762\u5176\u4E2D\u67D0\u4E2A connectionId
curl http://localhost:15014/debug/config_dump?proxyID=higress-gateway.higress-system-1 # \u8BF7\u66FF\u6362 proxyID \u53D6\u503C\u4E3A\u524D\u9762\u8BB0\u5F55\u7684 connectionId
\`\`\`

#### \u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E

\`\`\`bash
# higress-container-name \u66FF\u6362\u6210\u524D\u9762\u83B7\u53D6\u5230\u7684 Higress \u5BB9\u5668\u540D\u79F0\u6216\u8005 ID
docker exec -it higress-container-name bash
curl http://localhost:15000/config_dump
\`\`\``},i=function(){return s},p=function(){return[{depth:2,slug:"\u6982\u8FF0",text:"\u6982\u8FF0"},{depth:2,slug:"\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F",text:"\u83B7\u53D6\u914D\u7F6E\u4FE1\u606F"},{depth:3,slug:"k8s-\u90E8\u7F72",text:"K8s \u90E8\u7F72"},{depth:4,slug:"\u51C6\u5907\u5DE5\u4F5C",text:"\u51C6\u5907\u5DE5\u4F5C"},{depth:4,slug:"\u83B7\u53D6-controller-\u751F\u6210\u7684\u914D\u7F6E",text:"\u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-pilot-\u83B7\u53D6\u5230\u7684\u914D\u7F6E",text:"\u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-pilot-\u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E",text:"\u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-gateway-\u83B7\u53D6\u5230\u7684\u914D\u7F6E",text:"\u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E"},{depth:3,slug:"docker-compose-\u90E8\u7F72",text:"Docker Compose \u90E8\u7F72"},{depth:4,slug:"\u83B7\u53D6-controller-\u751F\u6210\u7684\u914D\u7F6E-1",text:"\u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-pilot-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-1",text:"\u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-pilot-\u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E-1",text:"\u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-gateway-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-1",text:"\u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E"},{depth:3,slug:"all-in-one-\u955C\u50CF\u90E8\u7F72",text:"all-in-one \u955C\u50CF\u90E8\u7F72"},{depth:4,slug:"\u51C6\u5907\u5DE5\u4F5C-1",text:"\u51C6\u5907\u5DE5\u4F5C"},{depth:4,slug:"\u83B7\u53D6-controller-\u751F\u6210\u7684\u914D\u7F6E-2",text:"\u83B7\u53D6 controller \u751F\u6210\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-pilot-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-2",text:"\u83B7\u53D6 pilot \u83B7\u53D6\u5230\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-pilot-\u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E-2",text:"\u83B7\u53D6 pilot \u63A8\u9001\u51FA\u53BB\u7684\u914D\u7F6E"},{depth:4,slug:"\u83B7\u53D6-gateway-\u83B7\u53D6\u5230\u7684\u914D\u7F6E-2",text:"\u83B7\u53D6 gateway \u83B7\u53D6\u5230\u7684\u914D\u7F6E"}]},e=o((u,F,x)=>{const{layout:b,...l}=t;return l.file=a,l.url=n,r`${y()}${g(s)}`})});export{e as Content,v as __tla,i as compiledContent,e as default,a as file,t as frontmatter,p as getHeadings,c as rawContent,n as url};
