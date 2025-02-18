import{c as n,__tla as p}from"./astro-component.CXlaF79K.js";import{r as g,m as c,u as m,__tla as h}from"./constant.Dh5VMQWp.js";import{__tla as d}from"./astro/assets-service.DQopRnBr.js";let i,o,e,l,u,a,s,y=Promise.all([(()=>{try{return p}catch{}})(),(()=>{try{return h}catch{}})(),(()=>{try{return d}catch{}})()]).then(async()=>{let t;t=`<p>\u5982\u679C\u60A8\u6B63\u5728\u5904\u7406\u4E00\u4E2A\u95EE\u9898\uFF0C\u8BF7\u8BB0\u5F97<strong>\u7ED9\u8FD9\u4E2A\u95EE\u9898\u6807\u8BB0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u60A8\u8BA4\u4E3A\u6709\u610F\u4E49\u7684\u6807\u7B7E</strong>\u3002\u6709\u4E86\u6807\u7B7E\uFF0C\u5176\u4ED6\u5F00\u53D1\u4EBA\u5458\u5C31\u4F1A\u5F88\u8F7B\u677E\u5730\u8BC6\u522B\u51FA\u95EE\u9898\uFF0C\u4EE5\u4FBF\u5BF9\u5176\u8FDB\u884C\u5206\u7C7B\u5E76\u8DDF\u8E2A\u8FDB\u5EA6\u3002</p>
<p>\u5BF9\u4E8E\u9700\u8981\u7F16\u7801\u548C\u53D1\u7248\u4FEE\u590D\u7684issues\u548Cpull requests\uFF0C\u9700\u8981\u60A8<strong>\u5C06\u5176\u6807\u8BB0\u4E3A<a href="https://github.com/alibaba/higress/milestones" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">milestone</a></strong>\u3002</p>
<p>\u4E00\u4E9B\u5E38\u7528\u7684\u6807\u7B7E\uFF1A</p>
<ul>
<li>\u8BF7\u6C42\u5E2E\u52A9
<ul>
<li>help wanted</li>
<li>good first issue</li>
</ul>
</li>
<li>\u4F18\u5148\u7EA7
<ul>
<li>priority/blocker</li>
<li>priority/high</li>
<li>priority/low</li>
<li>priority/normal</li>
</ul>
</li>
<li>\u72B6\u6001
<ul>
<li>status/need-triage</li>
<li>status/DO-NOT-MERGE</li>
<li>status/READY-TO-MERGE</li>
<li>status/invalid</li>
<li>status/wontfix</li>
</ul>
</li>
<li>\u7C7B\u578B
<ul>
<li>type/bug</li>
<li>type/documentation</li>
<li>type/enhancement</li>
<li>type/feature</li>
</ul>
</li>
</ul>`,l={title:"\u7ED9\u95EE\u9898\u6253\u6807\u7B7E",keywords:["Higress"],description:"\u5982\u679C\u60A8\u6B63\u5728\u5904\u7406\u4E00\u4E2A\u95EE\u9898\uFF0C\u8BF7\u8BB0\u5F97\u7ED9\u8FD9\u4E2A\u95EE\u9898\u6807\u8BB0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u60A8\u8BA4\u4E3A\u6709\u610F\u4E49\u7684\u6807\u7B7E\u3002\u6709\u4E86\u6807\u7B7E\uFF0C\u5176\u4ED6\u5F00\u53D1\u4EBA\u5458\u5C31\u4F1A\u5F88\u8F7B\u677E\u5730\u8BC6\u522B\u51FA\u95EE\u9898\uFF0C\u4EE5\u4FBF\u5BF9\u5176\u8FDB\u884C\u5206\u7C7B\u5E76\u8DDF\u8E2A\u8FDB\u5EA6\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/committer-guide/label-an-issue-guide_dev.md"},e="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/developers/zh-cn/committer-guide/label-an-issue-guide_dev.md",s=void 0,a=function(){return`
# \u7ED9\u95EE\u9898\u6253\u6807\u7B7E

\u5982\u679C\u60A8\u6B63\u5728\u5904\u7406\u4E00\u4E2A\u95EE\u9898\uFF0C\u8BF7\u8BB0\u5F97**\u7ED9\u8FD9\u4E2A\u95EE\u9898\u6807\u8BB0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u60A8\u8BA4\u4E3A\u6709\u610F\u4E49\u7684\u6807\u7B7E**\u3002\u6709\u4E86\u6807\u7B7E\uFF0C\u5176\u4ED6\u5F00\u53D1\u4EBA\u5458\u5C31\u4F1A\u5F88\u8F7B\u677E\u5730\u8BC6\u522B\u51FA\u95EE\u9898\uFF0C\u4EE5\u4FBF\u5BF9\u5176\u8FDB\u884C\u5206\u7C7B\u5E76\u8DDF\u8E2A\u8FDB\u5EA6\u3002

\u5BF9\u4E8E\u9700\u8981\u7F16\u7801\u548C\u53D1\u7248\u4FEE\u590D\u7684issues\u548Cpull requests\uFF0C\u9700\u8981\u60A8**\u5C06\u5176\u6807\u8BB0\u4E3A[milestone](https://github.com/alibaba/higress/milestones)**\u3002

\u4E00\u4E9B\u5E38\u7528\u7684\u6807\u7B7E\uFF1A

* \u8BF7\u6C42\u5E2E\u52A9
  * help wanted
  * good first issue
* \u4F18\u5148\u7EA7
  * priority/blocker
  * priority/high
  * priority/low
  * priority/normal
* \u72B6\u6001
  * status/need-triage
  * status/DO-NOT-MERGE
  * status/READY-TO-MERGE
  * status/invalid
  * status/wontfix
* \u7C7B\u578B
  * type/bug
  * type/documentation
  * type/enhancement
  * type/feature
`},o=function(){return t},u=function(){return[]},i=n((_,f,b)=>{const{layout:w,...r}=l;return r.file=e,r.url=s,g`${c()}${m(t)}`})});export{i as Content,y as __tla,o as compiledContent,i as default,e as file,l as frontmatter,u as getHeadings,a as rawContent,s as url};
