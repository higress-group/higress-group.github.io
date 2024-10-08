import{c as n,__tla as u}from"./astro-component.CkonuESJ.js";import{r as h,m as g,u as d,__tla as m}from"./constant.CLSD4Wx5.js";import{__tla as p}from"./astro/assets-service.BSoMdJpH.js";let e,a,o,r,s,c,i,f=Promise.all([(()=>{try{return u}catch{}})(),(()=>{try{return m}catch{}})(),(()=>{try{return p}catch{}})()]).then(async()=>{let t;t=`<h2 id="\u6D4B\u8BD5\u7C92\u5EA6\u5982\u4F55\u5212\u5206">\u6D4B\u8BD5\u7C92\u5EA6\u5982\u4F55\u5212\u5206</h2>
  <img src="https://microservices.io/i/test-pyramid.jpeg">
        \u6D4B\u8BD5\u7C92\u5EA6\u5982\u4F55\u5212\u5206\u662F\u4E2A\u5927\u95EE\u9898\u3002Chris Richardson \u5728" [\u964D\u4F4E\u6D4B\u8BD5\u91D1\u5B57\u5854\uFF1A\u5FAE\u670D\u52A1\u7684\u6709\u6548\u6D4B\u8BD5\u7B56\u7565](https://microservices.io/microservices/testing/2019/09/20/oracle-code-one-testing.html)" \u4E00\u6587\u4E2D\u5C06\u670D\u52A1\u6D4B\u8BD5\u5212\u5206\u4E3A\uFF1A\u5355\u5143\u6D4B\u8BD5\u3001\u96C6\u6210\u6D4B\u8BD5\u3001\u7EC4\u4EF6\u6D4B\u8BD5\u3001\u7AEF\u5230\u7AEF\u7684\u6D4B\u8BD5\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u8BBE\u8BA1\u6D4B\u8BD5\u7528\u4F8B\u7684\u8FC7\u7A0B\u4E2D,\u62FF\u6765\u501F\u9274\u3002
<h2 id="\u5355\u5143\u6D4B\u8BD5">\u5355\u5143\u6D4B\u8BD5</h2>
<h3 id="1\u5199\u5355\u5143\u6D4B\u8BD5\u7684\u6536\u76CA">1.\u5199\u5355\u5143\u6D4B\u8BD5\u7684\u6536\u76CA</h3>
<ul>
<li>\u5355\u5143\u6D4B\u8BD5\u80FD\u5E2E\u52A9\u6BCF\u4E2A\u4EBA\u6DF1\u5165\u4EE3\u7801\u7EC6\u8282\uFF0C\u4E86\u89E3\u4EE3\u7801\u7684\u529F\u80FD\u3002</li>
<li>\u901A\u8FC7\u6D4B\u8BD5\u7528\u4F8B\u6211\u4EEC\u80FD\u53D1\u73B0bug\uFF0C\u5E76\u63D0\u4EA4\u4EE3\u7801\u7684\u5065\u58EE\u6027\u3002</li>
<li>\u6D4B\u8BD5\u7528\u4F8B\u540C\u65F6\u4E5F\u662F\u4EE3\u7801\u7684demo\u7528\u6CD5\u3002</li>
</ul>
<h3 id="2\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u7684\u4E00\u4E9B\u8BBE\u8BA1\u539F\u5219">2.\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u7684\u4E00\u4E9B\u8BBE\u8BA1\u539F\u5219</h3>
<ul>
<li>\u5E94\u8BE5\u7CBE\u5FC3\u8BBE\u8BA1\u597D\u6B65\u9AA4\uFF0C\u9897\u7C92\u5EA6\u548C\u7EC4\u5408\u6761\u4EF6\u3002</li>
<li>\u6CE8\u610F\u8FB9\u754C\u6761\u4EF6\u3002</li>
<li>\u5355\u5143\u6D4B\u8BD5\u4E5F\u5E94\u8BE5\u597D\u597D\u8BBE\u8BA1\uFF0C\u4E0D\u8981\u5199\u65E0\u7528\u7684\u4EE3\u7801\u3002</li>
<li>\u5F53\u4F60\u53D1\u73B0\u4E00\u4E2A<code dir="auto">\u65B9\u6CD5</code>\u5F88\u96BE\u5199\u5355\u5143\u6D4B\u8BD5\u65F6\uFF0C\u5982\u679C\u53EF\u4EE5\u786E\u8BA4\u8FD9\u4E2A<code dir="auto">\u65B9\u6CD5</code>\u662F<code dir="auto">\u81ED\u4EE3\u7801</code>\uFF0C\u90A3\u4E48\u5C31\u548C\u5F00\u53D1\u8005\u4E00\u8D77\u91CD\u6784\u5B83\u3002</li>
<li>Higress\u4E2D\u7528\u7684mock\u6846\u67B6\u662F: <a href="http://site.mockito.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">mockito</a>. \u4E0B\u9762\u662F\u4E00\u4E9B\u5F00\u53D1\u5411\u5BFC:<a href="http://www.baeldung.com/bdd-mockito" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">mockito tutorial</a>,<a href="https://dzone.com/refcardz/mockito" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">mockito refcard</a></li>
<li>TDD\uFF08\u53EF\u9009\uFF09\uFF1A\u5F53\u4F60\u5F00\u59CB\u5199\u4E00\u4E2A\u65B0\u7684\u529F\u80FD\u65F6\uFF0C\u4F60\u53EF\u4EE5\u8BD5\u7740\u5148\u5199\u6D4B\u8BD5\u7528\u4F8B\u3002</li>
</ul>
<h3 id="3\u6D4B\u8BD5\u8986\u76D6\u7387\u8BBE\u5B9A\u503C">3.\u6D4B\u8BD5\u8986\u76D6\u7387\u8BBE\u5B9A\u503C</h3>
<ul>
<li>\u5728\u73B0\u9636\u6BB5\uFF0CDelta\u66F4\u6539\u4EE3\u7801\u7684\u6D4B\u8BD5\u8986\u76D6\u8BBE\u5B9A\u503C\u4E3A\uFF1A>\uFF1D80%\uFF0C\u8D8A\u9AD8\u8D8A\u597D\u3002</li>
<li>\u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A\u9875\u9762\u4E2D\u770B\u5230\u6D4B\u8BD5\u62A5\u544A: <a href="https://codecov.io/gh/alibaba/higress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://codecov.io/gh/alibaba/higress</a></li>
</ul>
<h3 id="4\u9879\u76EE\u7EA6\u5B9A">4.\u9879\u76EE\u7EA6\u5B9A</h3>
<ul>
<li>Higress \u9879\u76EE\u7684\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u5206\u5E03\u5728\u9879\u76EE\u6BCF\u4E2A\u5B50\u6A21\u5757\u4E2D\uFF0C\u6D4B\u8BD5\u65AD\u8A00\u7C7B\u4EE5Test\u7ED3\u5C3E\u3002</li>
</ul>
<h2 id="\u96C6\u6210\u6D4B\u8BD5">\u96C6\u6210\u6D4B\u8BD5</h2>
<h3 id="\u9879\u76EE\u7EA6\u5B9A">\u9879\u76EE\u7EA6\u5B9A</h3>
<ul>
<li>\u96C6\u6210\u6D4B\u8BD5\u5728\u672C\u9879\u76EE\u6CDB\u6307\u5355\u5143\u6D4B\u8BD5\u4EE5\u4E0A\u7EA7\u522B\u7684\u6D4B\u8BD5\u3002</li>
<li>\u9879\u76EE\u4F7F\u7528<a href="https://help.github.com/cn/actions/automating-your-workflow-with-github-actions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">github actions</a>\u3001<a href="https://github.com/GoogleContainerTools/jib" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">jiblib maven \u63D2\u4EF6</a>\u3001<a href="https://github.com/fabric8io/fabric8-maven-plugin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">fabric maven \u63D2\u4EF6</a>\u3001<a href="https://github.com/testcontainers/testcontainers-java" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">testContainers</a>\u7B49\u7528\u6765\u6784\u5EFA<a href="https://www.docker.com/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Docker</a>\u955C\u50CF\uFF0C\u642D\u5EFA\u96C6\u6210\u6D4B\u8BD5\u73AF\u5883</li>
<li>\u533A\u522B\u4E8E\u5355\u5143\u6D4B\u8BD5\uFF0C\u67D0\u4E2A\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u9700\u8981\u4F9D\u8D56\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6\u7684\uFF0C\u53EF\u4EE5\u4E0D\u7528Mock, \u4F7F\u7528\u4E0A\u9762\u4ECB\u7ECD\u7684\u5DE5\u5177\u642D\u5EFAdocker\u73AF\u5883,\u8FDB\u884C\u6D4B\u8BD5\u3002\u4F46\u662F\u4E5F\u8981\u6CE8\u610F\u642D\u5EFA\u7EC4\u4EF6\u7684\u7C92\u5EA6\u3002\u8FC7\u4E8E\u590D\u6742\u7684\u73AF\u5883\uFF0C\u53EF\u4EE5\uFF1A\u6838\u5FC3\u6D4B\u8BD5\u4F9D\u8D56\u7684\u4E2D\u95F4\u4EF6\u53EF\u4EE5docker\u642D\u5EFA\uFF0C\u975E\u5F3A\u4F9D\u8D56\u7684\u53EF\u4EE5Mock</li>
<li>Higress \u9879\u76EE\u7684\u96C6\u6210\u6D4B\u8BD5\u7528\u4F8B\u5206\u5E03\u7EDF\u4E00\u653E\u5728integration-test\u5B50\u6A21\u5757\u4E2D\uFF0C\u6D4B\u8BD5\u65AD\u8A00\u7C7B\u4EE5IT\u7ED3\u5C3E\u3002</li>
<li>\u8FD9\u91CC\u8FD8\u7528 <a href="https://junit.org/junit5/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Junit5</a>\u3002</li>
<li>\u6D4B\u8BD5\u7528\u4F8B\u5E76\u884C\u8DD1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6CE8\u610F\u516C\u5171\u4E2D\u95F4\u4EF6\u7684\u9694\u79BB\u72B6\u6001\uFF0C\u89C4\u5212\u597D\u6240\u9020\u6570\u636E\uFF0C\u9632\u6B62\u51B2\u7A81\u3002</li>
</ul>`,r={title:"\u6D4B\u8BD5\u8986\u76D6\u7387\u5411\u5BFC",keywords:["Higress"],description:"\u6D4B\u8BD5\u8986\u76D6\u7387\u5411\u5BFC\u3002",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/test-coverage-guide_dev.md"},o="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/developers/zh-cn/contributor-guide/test-coverage-guide_dev.md",i=void 0,c=function(){return`
# \u6D4B\u8BD5\u8986\u76D6\u7387\u5411\u5BFC

## \u6D4B\u8BD5\u7C92\u5EA6\u5982\u4F55\u5212\u5206
  <img src="https://microservices.io/i/test-pyramid.jpeg" />
        \u6D4B\u8BD5\u7C92\u5EA6\u5982\u4F55\u5212\u5206\u662F\u4E2A\u5927\u95EE\u9898\u3002Chris Richardson \u5728" [\u964D\u4F4E\u6D4B\u8BD5\u91D1\u5B57\u5854\uFF1A\u5FAE\u670D\u52A1\u7684\u6709\u6548\u6D4B\u8BD5\u7B56\u7565](https://microservices.io/microservices/testing/2019/09/20/oracle-code-one-testing.html)" \u4E00\u6587\u4E2D\u5C06\u670D\u52A1\u6D4B\u8BD5\u5212\u5206\u4E3A\uFF1A\u5355\u5143\u6D4B\u8BD5\u3001\u96C6\u6210\u6D4B\u8BD5\u3001\u7EC4\u4EF6\u6D4B\u8BD5\u3001\u7AEF\u5230\u7AEF\u7684\u6D4B\u8BD5\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u8BBE\u8BA1\u6D4B\u8BD5\u7528\u4F8B\u7684\u8FC7\u7A0B\u4E2D,\u62FF\u6765\u501F\u9274\u3002

## \u5355\u5143\u6D4B\u8BD5

### 1.\u5199\u5355\u5143\u6D4B\u8BD5\u7684\u6536\u76CA 
  * \u5355\u5143\u6D4B\u8BD5\u80FD\u5E2E\u52A9\u6BCF\u4E2A\u4EBA\u6DF1\u5165\u4EE3\u7801\u7EC6\u8282\uFF0C\u4E86\u89E3\u4EE3\u7801\u7684\u529F\u80FD\u3002
  * \u901A\u8FC7\u6D4B\u8BD5\u7528\u4F8B\u6211\u4EEC\u80FD\u53D1\u73B0bug\uFF0C\u5E76\u63D0\u4EA4\u4EE3\u7801\u7684\u5065\u58EE\u6027\u3002
  * \u6D4B\u8BD5\u7528\u4F8B\u540C\u65F6\u4E5F\u662F\u4EE3\u7801\u7684demo\u7528\u6CD5\u3002
### 2.\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u7684\u4E00\u4E9B\u8BBE\u8BA1\u539F\u5219 
  * \u5E94\u8BE5\u7CBE\u5FC3\u8BBE\u8BA1\u597D\u6B65\u9AA4\uFF0C\u9897\u7C92\u5EA6\u548C\u7EC4\u5408\u6761\u4EF6\u3002
  * \u6CE8\u610F\u8FB9\u754C\u6761\u4EF6\u3002
  * \u5355\u5143\u6D4B\u8BD5\u4E5F\u5E94\u8BE5\u597D\u597D\u8BBE\u8BA1\uFF0C\u4E0D\u8981\u5199\u65E0\u7528\u7684\u4EE3\u7801\u3002
  * \u5F53\u4F60\u53D1\u73B0\u4E00\u4E2A\`\u65B9\u6CD5\`\u5F88\u96BE\u5199\u5355\u5143\u6D4B\u8BD5\u65F6\uFF0C\u5982\u679C\u53EF\u4EE5\u786E\u8BA4\u8FD9\u4E2A\`\u65B9\u6CD5\`\u662F\`\u81ED\u4EE3\u7801\`\uFF0C\u90A3\u4E48\u5C31\u548C\u5F00\u53D1\u8005\u4E00\u8D77\u91CD\u6784\u5B83\u3002
  * Higress\u4E2D\u7528\u7684mock\u6846\u67B6\u662F: [mockito](http://site.mockito.org/). \u4E0B\u9762\u662F\u4E00\u4E9B\u5F00\u53D1\u5411\u5BFC:[mockito tutorial](http://www.baeldung.com/bdd-mockito),[mockito refcard](https://dzone.com/refcardz/mockito)
  * TDD\uFF08\u53EF\u9009\uFF09\uFF1A\u5F53\u4F60\u5F00\u59CB\u5199\u4E00\u4E2A\u65B0\u7684\u529F\u80FD\u65F6\uFF0C\u4F60\u53EF\u4EE5\u8BD5\u7740\u5148\u5199\u6D4B\u8BD5\u7528\u4F8B\u3002 
### 3.\u6D4B\u8BD5\u8986\u76D6\u7387\u8BBE\u5B9A\u503C
  * \u5728\u73B0\u9636\u6BB5\uFF0CDelta\u66F4\u6539\u4EE3\u7801\u7684\u6D4B\u8BD5\u8986\u76D6\u8BBE\u5B9A\u503C\u4E3A\uFF1A>\uFF1D80%\uFF0C\u8D8A\u9AD8\u8D8A\u597D\u3002
  * \u6211\u4EEC\u53EF\u4EE5\u5728\u8FD9\u4E2A\u9875\u9762\u4E2D\u770B\u5230\u6D4B\u8BD5\u62A5\u544A: https://codecov.io/gh/alibaba/higress
### 4.\u9879\u76EE\u7EA6\u5B9A
  * Higress \u9879\u76EE\u7684\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u5206\u5E03\u5728\u9879\u76EE\u6BCF\u4E2A\u5B50\u6A21\u5757\u4E2D\uFF0C\u6D4B\u8BD5\u65AD\u8A00\u7C7B\u4EE5Test\u7ED3\u5C3E\u3002

## \u96C6\u6210\u6D4B\u8BD5

### \u9879\u76EE\u7EA6\u5B9A  
  * \u96C6\u6210\u6D4B\u8BD5\u5728\u672C\u9879\u76EE\u6CDB\u6307\u5355\u5143\u6D4B\u8BD5\u4EE5\u4E0A\u7EA7\u522B\u7684\u6D4B\u8BD5\u3002
  * \u9879\u76EE\u4F7F\u7528[github actions](https://help.github.com/cn/actions/automating-your-workflow-with-github-actions)\u3001[jiblib maven \u63D2\u4EF6](https://github.com/GoogleContainerTools/jib)\u3001[fabric maven \u63D2\u4EF6](https://github.com/fabric8io/fabric8-maven-plugin)\u3001[testContainers](https://github.com/testcontainers/testcontainers-java)\u7B49\u7528\u6765\u6784\u5EFA[Docker](https://www.docker.com/)\u955C\u50CF\uFF0C\u642D\u5EFA\u96C6\u6210\u6D4B\u8BD5\u73AF\u5883 
  * \u533A\u522B\u4E8E\u5355\u5143\u6D4B\u8BD5\uFF0C\u67D0\u4E2A\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u9700\u8981\u4F9D\u8D56\u7B2C\u4E09\u65B9\u4E2D\u95F4\u4EF6\u7684\uFF0C\u53EF\u4EE5\u4E0D\u7528Mock, \u4F7F\u7528\u4E0A\u9762\u4ECB\u7ECD\u7684\u5DE5\u5177\u642D\u5EFAdocker\u73AF\u5883,\u8FDB\u884C\u6D4B\u8BD5\u3002\u4F46\u662F\u4E5F\u8981\u6CE8\u610F\u642D\u5EFA\u7EC4\u4EF6\u7684\u7C92\u5EA6\u3002\u8FC7\u4E8E\u590D\u6742\u7684\u73AF\u5883\uFF0C\u53EF\u4EE5\uFF1A\u6838\u5FC3\u6D4B\u8BD5\u4F9D\u8D56\u7684\u4E2D\u95F4\u4EF6\u53EF\u4EE5docker\u642D\u5EFA\uFF0C\u975E\u5F3A\u4F9D\u8D56\u7684\u53EF\u4EE5Mock
  * Higress \u9879\u76EE\u7684\u96C6\u6210\u6D4B\u8BD5\u7528\u4F8B\u5206\u5E03\u7EDF\u4E00\u653E\u5728integration-test\u5B50\u6A21\u5757\u4E2D\uFF0C\u6D4B\u8BD5\u65AD\u8A00\u7C7B\u4EE5IT\u7ED3\u5C3E\u3002
  * \u8FD9\u91CC\u8FD8\u7528 [Junit5](https://junit.org/junit5/)\u3002 
  * \u6D4B\u8BD5\u7528\u4F8B\u5E76\u884C\u8DD1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6CE8\u610F\u516C\u5171\u4E2D\u95F4\u4EF6\u7684\u9694\u79BB\u72B6\u6001\uFF0C\u89C4\u5212\u597D\u6240\u9020\u6570\u636E\uFF0C\u9632\u6B62\u51B2\u7A81\u3002
`},a=function(){return t},s=function(){return[{depth:2,slug:"\u6D4B\u8BD5\u7C92\u5EA6\u5982\u4F55\u5212\u5206",text:"\u6D4B\u8BD5\u7C92\u5EA6\u5982\u4F55\u5212\u5206"},{depth:2,slug:"\u5355\u5143\u6D4B\u8BD5",text:"\u5355\u5143\u6D4B\u8BD5"},{depth:3,slug:"1\u5199\u5355\u5143\u6D4B\u8BD5\u7684\u6536\u76CA",text:"1.\u5199\u5355\u5143\u6D4B\u8BD5\u7684\u6536\u76CA"},{depth:3,slug:"2\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u7684\u4E00\u4E9B\u8BBE\u8BA1\u539F\u5219",text:"2.\u5355\u5143\u6D4B\u8BD5\u7528\u4F8B\u7684\u4E00\u4E9B\u8BBE\u8BA1\u539F\u5219"},{depth:3,slug:"3\u6D4B\u8BD5\u8986\u76D6\u7387\u8BBE\u5B9A\u503C",text:"3.\u6D4B\u8BD5\u8986\u76D6\u7387\u8BBE\u5B9A\u503C"},{depth:3,slug:"4\u9879\u76EE\u7EA6\u5B9A",text:"4.\u9879\u76EE\u7EA6\u5B9A"},{depth:2,slug:"\u96C6\u6210\u6D4B\u8BD5",text:"\u96C6\u6210\u6D4B\u8BD5"},{depth:3,slug:"\u9879\u76EE\u7EA6\u5B9A",text:"\u9879\u76EE\u7EA6\u5B9A"}]},e=n((b,k,w)=>{const{layout:_,...l}=r;return l.file=o,l.url=i,h`${g()}${d(t)}`})});export{e as Content,f as __tla,a as compiledContent,e as default,o as file,r as frontmatter,s as getHeadings,c as rawContent,i as url};