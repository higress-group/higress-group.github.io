import{c as l,__tla as h}from"./astro-component.m4CCZO6J.js";import{r as d,m as u,u as g,__tla as f}from"./constant.IVguHoYO.js";import{__tla as p}from"./astro/assets-service.BhtN0nM5.js";let t,r,i,o,a,c,s,m=Promise.all([(()=>{try{return h}catch{}})(),(()=>{try{return f}catch{}})(),(()=>{try{return p}catch{}})()]).then(async()=>{let e;e=`<h2 id="how-to-divide-test-granularity">How to divide test granularity</h2>
  <img src="https://microservices.io/i/test-pyramid.jpeg">
        How to divide test granularity is a big problem. Chris Richardson has divided unit test, integration test, component test and end-to-end test for services test in "[Descending the Testing Pyramid: Effective Testing Strategies for Microservices](https://microservices.io/microservices/testing/2019/09/20/oracle-code-one-testing.html)". We can use it for reference in the process of designing test cases.
<h2 id="unit-test">Unit Test</h2>
<h3 id="1the-benefits-of-unit-testing">1.The benefits of unit testing</h3>
<ul>
<li>Unit test code can help everyone to go into details and understand the function of the code.</li>
<li>We can find bugs by test case, and then enhance the robustness of the code.</li>
<li>Test case code is also the demo usage of the core code.</li>
</ul>
<h3 id="2some-design-principle-of-unit-test-case">2.Some design principle of unit test case</h3>
<ul>
<li>Steps, fine-grained and combination conditions should be well designed.</li>
<li>Attention to boundary condition test</li>
<li>Test code should also be designed without writing useless code.</li>
<li>When you find a <code dir="auto">method</code> that is hard to write unit test, if you can be sure the <code dir="auto">method</code> is \u201Csmelly code\u201D, then  refactor it with the committer.</li>
<li>The mock framework in higress is: <a href="http://site.mockito.org/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">mockito</a>. Some tutorials:[mockito tutorial](<a href="http://www" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://www</a>.
baeldung.com/bdd-mockito),<a href="https://dzone.com/refcardz/mockito" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">mockito refcard</a></li>
<li>TDD\uFF08optional\uFF09\uFF1AWhen you start a new issue, you can try to write test case at first</li>
</ul>
<h3 id="3the-specified-value-of-the-test-coverage">3.The specified value of the test coverage</h3>
<ul>
<li>In the stage, the test coverage specified value of delta changed codes is \uFF1A>=80%. The higher, the better.</li>
<li>We can see the coverage report in this page: <a href="https://codecov.io/gh/alibaba/higress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://codecov.io/gh/alibaba/higress</a></li>
</ul>
<h3 id="4project-agreement">4.Project agreement</h3>
<ul>
<li>The unit test cases of the Higress project are distributed in each sub module of the project, and the test assertion class ends with Test.</li>
</ul>
<h2 id="integration-test">Integration test</h2>
<h3 id="project-agreement">Project agreement</h3>
<ul>
<li>Integration test in this project generally refers to the test above unit test level.</li>
<li>This project use <a href="https://help.github.com/en/actions/automating-your-workflow-with-github-actions" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">github actions</a>\u3001<a href="https://github.com/GoogleContainerTools/jib" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">jiblib maven plugin</a>\u3001<a href="https://github.com/fabric8io/fabric8-maven-plugin" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">fabric maven plugin</a>\u3001<a href="https://github.com/testcontainers/testcontainers-java" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">testContainers</a> to build <a href="https://www.docker.com/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Docker</a> images\uFF0Cand build integration test environment</li>
<li>Different from unit test, if a test case needs to rely on the third-party middleware, you can use the above tools to build the docker environment and test without mock. But also pay attention to the granularity of building components. For an overly complex environment, you can: the middleware on which the core test depends can be built by docker, and the middleware on which the core test depends can be mocked</li>
<li>The integration test cases of the Higress project are uniformly placed in the integration-test sub module, and the test assertion class ends with IT.</li>
<li><a href="https://junit.org/junit5/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Junit5</a> is used here</li>
<li>In the process of parallel running of test cases, pay attention to the isolation state of common middleware, plan the test data and prevent conflicts.</li>
</ul>`,o={title:"Test coverage guide",keywords:["Higress","coverage"],description:"Test coverage guide.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/test-coverage-guide_dev.md"},i="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/developers/en/contributor-guide/test-coverage-guide_dev.md",s=void 0,c=function(){return`
# Test coverage guide

## How to divide test granularity
  <img src="https://microservices.io/i/test-pyramid.jpeg" />
        How to divide test granularity is a big problem. Chris Richardson has divided unit test, integration test, component test and end-to-end test for services test in "[Descending the Testing Pyramid: Effective Testing Strategies for Microservices](https://microservices.io/microservices/testing/2019/09/20/oracle-code-one-testing.html)". We can use it for reference in the process of designing test cases.

## Unit Test

### 1.The benefits of unit testing 
  * Unit test code can help everyone to go into details and understand the function of the code.
  * We can find bugs by test case, and then enhance the robustness of the code.
  * Test case code is also the demo usage of the core code.
### 2.Some design principle of unit test case 
  * Steps, fine-grained and combination conditions should be well designed.
  * Attention to boundary condition test
  * Test code should also be designed without writing useless code.
  * When you find a \`method\` that is hard to write unit test, if you can be sure the \`method\` is "smelly code", then  refactor it with the committer.
  * The mock framework in higress is: [mockito](http://site.mockito.org/). Some tutorials:[mockito tutorial](http://www.
    baeldung.com/bdd-mockito),[mockito refcard](https://dzone.com/refcardz/mockito)
  * TDD\uFF08optional\uFF09\uFF1AWhen you start a new issue, you can try to write test case at first 
### 3.The specified value of the test coverage
  * In the stage, the test coverage specified value of delta changed codes is \uFF1A>=80%. The higher, the better.
  * We can see the coverage report in this page: https://codecov.io/gh/alibaba/higress
### 4.Project agreement
  * The unit test cases of the Higress project are distributed in each sub module of the project, and the test assertion class ends with Test.

## Integration test

### Project agreement  
  * Integration test in this project generally refers to the test above unit test level.
  * This project use [github actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions)\u3001[jiblib maven plugin](https://github.com/GoogleContainerTools/jib)\u3001[fabric maven plugin](https://github.com/fabric8io/fabric8-maven-plugin)\u3001[testContainers](https://github.com/testcontainers/testcontainers-java) to build [Docker](https://www.docker.com/) images\uFF0Cand build integration test environment 
  * Different from unit test, if a test case needs to rely on the third-party middleware, you can use the above tools to build the docker environment and test without mock. But also pay attention to the granularity of building components. For an overly complex environment, you can: the middleware on which the core test depends can be built by docker, and the middleware on which the core test depends can be mocked
  * The integration test cases of the Higress project are uniformly placed in the integration-test sub module, and the test assertion class ends with IT.
  * [Junit5](https://junit.org/junit5/) is used here
  * In the process of parallel running of test cases, pay attention to the isolation state of common middleware, plan the test data and prevent conflicts.
`},r=function(){return e},a=function(){return[{depth:2,slug:"how-to-divide-test-granularity",text:"How to divide test granularity"},{depth:2,slug:"unit-test",text:"Unit Test"},{depth:3,slug:"1the-benefits-of-unit-testing",text:"1.The benefits of unit testing"},{depth:3,slug:"2some-design-principle-of-unit-test-case",text:"2.Some design principle of unit test case"},{depth:3,slug:"3the-specified-value-of-the-test-coverage",text:"3.The specified value of the test coverage"},{depth:3,slug:"4project-agreement",text:"4.Project agreement"},{depth:2,slug:"integration-test",text:"Integration test"},{depth:3,slug:"project-agreement",text:"Project agreement"}]},t=l((b,v,w)=>{const{layout:y,...n}=o;return n.file=i,n.url=s,d`${u()}${g(e)}`})});export{t as Content,m as __tla,r as compiledContent,t as default,i as file,o as frontmatter,a as getHeadings,c as rawContent,s as url};
