import{c as o,__tla as u}from"./astro-component.CXlaF79K.js";import{r as c,m as d,u as h,__tla as g}from"./constant.HsejO3e_.js";import{__tla as b}from"./astro/assets-service.DQopRnBr.js";let e,r,t,a,p,n,i,E=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return b}catch{}})()]).then(async()=>{let s;s=`<p>\u8FD9\u7BC7\u5411\u5BFC\u65E8\u5728\u7ED9\u6B63\u5728\u51C6\u5907\u5411 Higress \u63D0\u4EA4\u8D21\u732E\u7684\u65B0\u624B\u63D0\u4F9B\u6307\u5BFC\u3002</p>
<h3 id="\u90AE\u4EF6\u5217\u8868\u63CF\u8FF0">\u90AE\u4EF6\u5217\u8868\u63CF\u8FF0</h3>
<p>TBD</p>
<h3 id="\u62A5\u544A\u95EE\u9898">\u62A5\u544A\u95EE\u9898</h3>
<p>\u60A8\u59CB\u7EC8\u53EF\u4EE5\u901A\u8FC7Github <a href="https://github.com/alibaba/higress/issues" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Issues</a> \u5411Higress\u62A5\u544A\u95EE\u9898\u3002</p>
<p>\u5982\u679C\u60A8\u6B63\u5728\u62A5\u544Abug\uFF0C\u8BF7\u53C2\u9605\u95EE\u9898\u62A5\u544A<a href="https://github.com/alibaba/higress/issues/new?template=BUG_REPORT.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u6A21\u7248</a>\u3002</p>
<p>\u5982\u679C\u60A8\u6B63\u5728\u62A5\u544A\u529F\u80FD\u8981\u6C42\uFF0C\u8BF7\u53C2\u9605\u95EE\u9898\u62A5\u544A<a href="https://github.com/alibaba/higress/issues/new?template=FEATURE_REQUEST.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u6A21\u7248</a>\u3002</p>
<p>\u5982\u679C\u60A8\u6B63\u5728\u62A5\u544A\u5E38\u89C4\u95EE\u9898\uFF0C\u6BD4\u5982\u63D0\u51FA\u4E00\u4E2A\u95EE\u9898\uFF0C\u5219\u53EF\u4EE5\u6253\u5F00<a href="https://github.com/alibaba/higress/issues/new" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">\u5E38\u89C4\u95EE\u9898</a></p>
<h3 id="\u53D1\u9001-pull-request">\u53D1\u9001 pull request</h3>
<ul>
<li>\u53C2\u8003<a href="https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">pull request template</a></li>
<li>\u5728\u60A8\u53D1\u9001pull request\u4E4B\u524D\uFF0C\u8BF7\u540C\u6B65\u60A8\u7684github\u4ED3\u5E93\u548C\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u8FD9\u4F1A\u4F7F\u60A8\u7684pull request\u7B80\u5355\u660E\u4E86\uFF0C\u5177\u4F53\u64CD\u4F5C\u8BF7\u770B\u5982\u4E0B\u6240\u793A\u6B65\u9AA4\uFF1A</li>
</ul>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">remote</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upstream</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">git@github.com:alibaba/higress.git</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">fetch</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upstream</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">rebase</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">upstream/main</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">checkout</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-b</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">your_awesome_patch</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">...</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">add</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">some</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">work</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">push</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">origin</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">your_awesome_patch</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git remote add upstream git@github.com:alibaba/higress.git\x7Fgit fetch upstream\x7Fgit rebase upstream/main\x7Fgit checkout -b your_awesome_patch\x7F... add some work\x7Fgit push origin your_awesome_patch"><div></div></button></div></figure></div>
<h3 id="\u7F16\u7801\u89C4\u8303">\u7F16\u7801\u89C4\u8303</h3>
<p>\u8BF7\u6309\u7167<a href="https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">CONTRIBUTING.md</a>\u4E2D\u7684\u7F16\u7801\u89C4\u8303\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u8FDB\u884C\u68C0\u67E5\u3002</p>`,a={title:"\u65B0\u8D21\u732E\u8005\u5411\u5BFC",keywords:["Higress"],description:"\u8FD9\u7BC7\u5411\u5BFC\u65E8\u5728\u7ED9\u6B63\u5728\u51C6\u5907\u5411 Higress \u63D0\u4EA4\u8D21\u732E\u7684\u65B0\u624B\u63D0\u4F9B\u6307\u5BFC\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/new-contributor-guide_dev.md"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/zh-cn/developers/contributor-guide/new-contributor-guide_dev.md",i=void 0,n=function(){return`
# \u65B0\u8D21\u732E\u8005\u5411\u5BFC

\u8FD9\u7BC7\u5411\u5BFC\u65E8\u5728\u7ED9\u6B63\u5728\u51C6\u5907\u5411 Higress \u63D0\u4EA4\u8D21\u732E\u7684\u65B0\u624B\u63D0\u4F9B\u6307\u5BFC\u3002

### \u90AE\u4EF6\u5217\u8868\u63CF\u8FF0

TBD

### \u62A5\u544A\u95EE\u9898

\u60A8\u59CB\u7EC8\u53EF\u4EE5\u901A\u8FC7Github [Issues](https://github.com/alibaba/higress/issues) \u5411Higress\u62A5\u544A\u95EE\u9898\u3002

\u5982\u679C\u60A8\u6B63\u5728\u62A5\u544Abug\uFF0C\u8BF7\u53C2\u9605\u95EE\u9898\u62A5\u544A[\u6A21\u7248](https://github.com/alibaba/higress/issues/new?template=BUG_REPORT.md)\u3002

\u5982\u679C\u60A8\u6B63\u5728\u62A5\u544A\u529F\u80FD\u8981\u6C42\uFF0C\u8BF7\u53C2\u9605\u95EE\u9898\u62A5\u544A[\u6A21\u7248](https://github.com/alibaba/higress/issues/new?template=FEATURE_REQUEST.md)\u3002

\u5982\u679C\u60A8\u6B63\u5728\u62A5\u544A\u5E38\u89C4\u95EE\u9898\uFF0C\u6BD4\u5982\u63D0\u51FA\u4E00\u4E2A\u95EE\u9898\uFF0C\u5219\u53EF\u4EE5\u6253\u5F00[\u5E38\u89C4\u95EE\u9898](https://github.com/alibaba/higress/issues/new)

### \u53D1\u9001 pull request

* \u53C2\u8003[pull request template](https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
* \u5728\u60A8\u53D1\u9001pull request\u4E4B\u524D\uFF0C\u8BF7\u540C\u6B65\u60A8\u7684github\u4ED3\u5E93\u548C\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u8FD9\u4F1A\u4F7F\u60A8\u7684pull request\u7B80\u5355\u660E\u4E86\uFF0C\u5177\u4F53\u64CD\u4F5C\u8BF7\u770B\u5982\u4E0B\u6240\u793A\u6B65\u9AA4\uFF1A

\`\`\`sh
git remote add upstream git@github.com:alibaba/higress.git
git fetch upstream
git rebase upstream/main
git checkout -b your_awesome_patch
... add some work
git push origin your_awesome_patch
\`\`\`

### \u7F16\u7801\u89C4\u8303

\u8BF7\u6309\u7167[CONTRIBUTING.md](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md)\u4E2D\u7684\u7F16\u7801\u89C4\u8303\u5BF9\u81EA\u5DF1\u7684\u4EE3\u7801\u8FDB\u884C\u68C0\u67E5\u3002
`},r=function(){return s},p=function(){return[{depth:3,slug:"\u90AE\u4EF6\u5217\u8868\u63CF\u8FF0",text:"\u90AE\u4EF6\u5217\u8868\u63CF\u8FF0"},{depth:3,slug:"\u62A5\u544A\u95EE\u9898",text:"\u62A5\u544A\u95EE\u9898"},{depth:3,slug:"\u53D1\u9001-pull-request",text:"\u53D1\u9001 pull request"},{depth:3,slug:"\u7F16\u7801\u89C4\u8303",text:"\u7F16\u7801\u89C4\u8303"}]},e=o((m,y,_)=>{const{layout:f,...l}=a;return l.file=t,l.url=i,c`${d()}${h(s)}`})});export{e as Content,E as __tla,r as compiledContent,e as default,t as file,a as frontmatter,p as getHeadings,n as rawContent,i as url};
