import{c as u,__tla as c}from"./astro-component.cI6d52vQ.js";import{r as h,m as p,u as d,__tla as g}from"./constant.ByauqwB3.js";import{__tla as m}from"./astro/assets-service.Da9pL5MS.js";let i,a,t,o,n,l,r,f=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return g}catch{}})(),(()=>{try{return m}catch{}})()]).then(async()=>{let e;e=`<p>It is warmly welcomed if you have interest to hack on Higress. First, we encourage this kind of willing very much. And here is a list of contributing guide for you.</p>
<h2 id="topics">Topics</h2>
<ul>
<li><a href="#contributing-to-higress" referrerpolicy="unsafe-url">Contributing to Higress</a>
<ul>
<li><a href="#topics" referrerpolicy="unsafe-url">Topics</a></li>
<li><a href="#reporting-security-issues" referrerpolicy="unsafe-url">Reporting security issues</a></li>
<li><a href="#reporting-general-issues" referrerpolicy="unsafe-url">Reporting general issues</a></li>
<li><a href="#code-and-doc-contribution" referrerpolicy="unsafe-url">Code and doc contribution</a>
<ul>
<li><a href="#workspace-preparation" referrerpolicy="unsafe-url">Workspace Preparation</a></li>
<li><a href="#branch-definition" referrerpolicy="unsafe-url">Branch Definition</a></li>
<li><a href="#commit-rules" referrerpolicy="unsafe-url">Commit Rules</a>
<ul>
<li><a href="#commit-message" referrerpolicy="unsafe-url">Commit Message</a></li>
<li><a href="#commit-content" referrerpolicy="unsafe-url">Commit Content</a></li>
</ul>
</li>
<li><a href="#pr-description" referrerpolicy="unsafe-url">PR Description</a></li>
</ul>
</li>
<li><a href="#test-case-contribution" referrerpolicy="unsafe-url">Test case contribution</a></li>
<li><a href="#engage-to-help-anything" referrerpolicy="unsafe-url">Engage to help anything</a></li>
<li><a href="#code-style" referrerpolicy="unsafe-url">Code Style</a>
<ul>
<li><a href="#guidelines" referrerpolicy="unsafe-url">Guidelines</a></li>
<li><a href="#ide-plugin-installnot-necessary" referrerpolicy="unsafe-url">IDE Plugin Install\uFF08not necessary\uFF09</a>
<ul>
<li><a href="#idea-ide" referrerpolicy="unsafe-url">idea IDE</a></li>
<li><a href="#eclipse-ide" referrerpolicy="unsafe-url">eclipse IDE</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="reporting-security-issues">Reporting security issues</h2>
<p>Security issues are always treated seriously. As our usual principle, we discourage anyone to spread security issues.
If you find a security issue of Higress, please do not discuss it in public and even do not open a public issue.
Instead we encourage you to send us a private email to  [<a href="mailto:higress@googlegroups.com" referrerpolicy="unsafe-url">higress@googlegroups.com</a>](mailto:higress
@googlegroups.
com)
to report this.</p>
<h2 id="reporting-general-issues">Reporting general issues</h2>
<p>To be honest, we regard every user of Higress as a very kind contributor. After experiencing Higress, you may have some feedback for the project. Then feel free to open an issue via <a href="https://github.com/alibaba/higress/issues/new/choose" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">NEW ISSUE</a>.</p>
<p>Since we collaborate project Higress in a distributed way, we appreciate <strong>WELL-WRITTEN</strong>, <strong>DETAILED</strong>, <strong>EXPLICIT</strong> issue reports. To make the communication more efficient, we wish everyone could search if your issue is an existing one in the searching list. If you find it existing, please add your details in comments under the existing issue instead of opening a brand new one.</p>
<p>To make the issue details as standard as possible, we setup an <a href="https://github.com/alibaba/higress/blob/main/.github/ISSUE_TEMPLATE" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">ISSUE TEMPLATE</a> for issue reporters. Please <strong>BE SURE</strong> to follow the instructions to fill fields in template.</p>
<p>There are a lot of cases when you could open an issue:</p>
<ul>
<li>bug report</li>
<li>feature request</li>
<li>performance issues</li>
<li>feature proposal</li>
<li>feature design</li>
<li>help wanted</li>
<li>doc incomplete</li>
<li>test improvement</li>
<li>any questions on project</li>
<li>and so on</li>
</ul>
<p>Also we must remind that when filling a new issue, please remember to remove the sensitive data from your post. Sensitive data could be password, secret key, network locations, private business data and so on.</p>
<h2 id="code-and-doc-contribution">Code and doc contribution</h2>
<p>Every action to make project Higress better is encouraged. On GitHub, every improvement for Higress could be via a PR (short for pull request).</p>
<ul>
<li>If you find a typo, try to fix it!</li>
<li>If you find a bug, try to fix it!</li>
<li>If you find some redundant codes, try to remove them!</li>
<li>If you find some test cases missing, try to add them!</li>
<li>If you could enhance a feature, please <strong>DO NOT</strong> hesitate!</li>
<li>If you find code implicit, try to add comments to make it clear!</li>
<li>If you find code ugly, try to refactor that!</li>
<li>If you can help to improve documents, it could not be better!</li>
<li>If you find document incorrect, just do it and fix that!</li>
<li>\u2026</li>
</ul>
<p>Actually it is impossible to list them completely. Just remember one principle:</p>
<blockquote>
<p>WE ARE LOOKING FORWARD TO ANY PR FROM YOU.</p>
</blockquote>
<p>Since you are ready to improve Higress with a PR, we suggest you could take a look at the PR rules here.</p>
<ul>
<li><a href="#workspace-preparation" referrerpolicy="unsafe-url">Workspace Preparation</a></li>
<li><a href="#branch-definition" referrerpolicy="unsafe-url">Branch Definition</a></li>
<li><a href="#commit-rules" referrerpolicy="unsafe-url">Commit Rules</a></li>
<li><a href="#pr-description" referrerpolicy="unsafe-url">PR Description</a></li>
</ul>
<h3 id="workspace-preparation">Workspace Preparation</h3>
<p>To put forward a PR, we assume you have registered a GitHub ID. Then you could finish the preparation in the following steps:</p>
<ol>
<li>
<p><strong>FORK</strong> Higress to your repository. To make this work, you just need to click the button Fork in right-left of
<a href="https://github.com/alibaba/higress" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">alibaba/higress</a> main page. Then you will end up with your repository in <code dir="auto">https://github.com/&#x3C;your-username>/higress</code>, in which <code dir="auto">your-username</code> is your GitHub username.</p>
</li>
<li>
<p><strong>CLONE</strong> your own repository to develop locally. Use <code dir="auto">git clone git@github.com:&#x3C;your-username>/higress.git</code> to
clone repository to your local machine. Then you can create new branches to finish the change you wish to make.</p>
</li>
<li>
<p><strong>Set Remote</strong> upstream to be <code dir="auto">git@github.com:alibaba/higress.git</code> using the following two commands:</p>
</li>
</ol>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">git remote add upstream git@github.com:alibaba/higress.git</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">git remote set-url --push upstream no-pushing</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git remote add upstream git@github.com:alibaba/higress.git\x7Fgit remote set-url --push upstream no-pushing"><div></div></button></div></figure></div>
<p>With this remote setting, you can check your git remote configuration like this:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">$ git remote -v</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">origin     git@github.com:&#x3C;your-username>/higress.git (fetch)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">origin     git@github.com:&#x3C;your-username>/higress.git (push)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">upstream   git@github.com:alibaba/higress.git (fetch)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">upstream   no-pushing (push)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="$ git remote -v\x7Forigin     git@github.com:<your-username>/higress.git (fetch)\x7Forigin     git@github.com:<your-username>/higress.git (push)\x7Fupstream   git@github.com:alibaba/higress.git (fetch)\x7Fupstream   no-pushing (push)"><div></div></button></div></figure></div>
<p>Adding this, we can easily synchronize local branches with upstream branches.</p>
<h3 id="branch-definition">Branch Definition</h3>
<p>Right now we assume every contribution via pull request is for [branch main](<a href="https://github" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://github</a>.
com/alibaba/higress/tree/main) in Higress. Before contributing, be aware of branch definition would help a lot.</p>
<p>As a contributor, keep in mind again that every contribution via pull request is for branch main. While in project Higress, there are several other branches, we generally call them release branches (such as 0.6.0,0.6.1), feature branches, hotfix branches.</p>
<p>When officially releasing a version, there will be a release branch and named with the version number.</p>
<p>After the release, we will merge the commit of the release branch into the main branch.</p>
<p>When we find that there is a bug in a certain version, we will decide to fix it in a later version or fix it in a specific hotfix version. When we decide to fix the hotfix version, we will checkout the hotfix branch based on the corresponding release branch, perform code repair and verification, and merge it into the main branch.</p>
<p>For larger features, we will pull out the feature branch for development and verification.</p>
<h3 id="commit-rules">Commit Rules</h3>
<p>Actually in Higress, we take two rules serious when committing:</p>
<ul>
<li><a href="#commit-message" referrerpolicy="unsafe-url">Commit Message</a></li>
<li><a href="#commit-content" referrerpolicy="unsafe-url">Commit Content</a></li>
</ul>
<h4 id="commit-message">Commit Message</h4>
<p>Commit message could help reviewers better understand what is the purpose of submitted PR. It could help accelerate the code review procedure as well. We encourage contributors to use <strong>EXPLICIT</strong> commit message rather than ambiguous message. In general, we advocate the following commit message type:</p>
<ul>
<li>docs: xxxx. For example, \u201Cdocs: add docs about Higress cluster installation\u201D.</li>
<li>feature: xxxx.For example, \u201Cfeature: support oracle in AT mode\u201D.</li>
<li>bugfix: xxxx. For example, \u201Cbugfix: fix panic when input nil parameter\u201D.</li>
<li>refactor: xxxx. For example, \u201Crefactor: simplify to make codes more readable\u201D.</li>
<li>test: xxx. For example, \u201Ctest: add unit test case for func InsertIntoArray\u201D.</li>
<li>other readable and explicit expression ways.</li>
</ul>
<p>On the other side, we discourage contributors from committing message like the following ways:</p>
<ul>
<li><del>fix bug</del></li>
<li><del>update</del></li>
<li><del>add doc</del></li>
</ul>
<p>If you get lost, please see <a href="http://chris.beams.io/posts/git-commit/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">How to Write a Git Commit Message</a> for a start.</p>
<h4 id="commit-content">Commit Content</h4>
<p>Commit content represents all content changes included in one commit. We had better include things in one single commit which could support reviewer\u2019s complete review without any other commits\u2019 help. In another word, contents in one single commit can pass the CI to avoid code mess. In brief, there are three minor rules for us to keep in mind:</p>
<ul>
<li>avoid very large change in a commit;</li>
<li>complete and reviewable for each commit.</li>
<li>check git config(<code dir="auto">user.name</code>, <code dir="auto">user.email</code>) when committing to ensure that it is associated with your github ID.</li>
</ul>
<p>In addition, in the code change part, we suggest that all contributors should read the <a href="#code-style" referrerpolicy="unsafe-url">code style of Higress</a>.</p>
<p>No matter commit message, or commit content, we do take more emphasis on code review.</p>
<h3 id="pr-description">PR Description</h3>
<p>PR is the only way to make change to Higress project files. To help reviewers better get your purpose, PR description could not be too detailed. We encourage contributors to follow the <a href="https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">PR template</a> to finish the pull request.</p>
<h2 id="test-case-contribution">Test case contribution</h2>
<p>Any test case would be welcomed. Currently, Higress function test cases are high priority.</p>
<ul>
<li>
<p>For unit test, you need to create a test file named <code dir="auto">xxxTest.java</code> in the test directory of the same module. Recommend you to use the junit5 UT framework</p>
</li>
<li>
<p>For integration test, you can put the integration test in the test directory or the higress-test module. It is
recommended to use the mockito test framework.</p>
</li>
</ul>
<h2 id="engage-to-help-anything">Engage to help anything</h2>
<p>We choose GitHub as the primary place for Higress to collaborate. So the latest updates of Higress are always here. Although contributions via PR is an explicit way to help, we still call for any other ways.</p>
<ul>
<li>reply to other\u2019s issues if you could;</li>
<li>help solve other user\u2019s problems;</li>
<li>help review other\u2019s PR design;</li>
<li>help review other\u2019s codes in PR;</li>
<li>discuss about Higress to make things clearer;</li>
<li>advocate Higress technology beyond GitHub;</li>
<li>write blogs on Higress and so on.</li>
</ul>
<h2 id="code-style">Code Style</h2>
<p>Higress code style Comply with Alibaba Java Coding Guidelines.</p>
<h3 id="guidelines">Guidelines</h3>
<p><a href="https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Alibaba-Java-Coding-Guidelines</a></p>
<h3 id="ide-plugin-installnot-necessary">IDE Plugin Install\uFF08not necessary\uFF09</h3>
<p><em>It is not necessary to install, if you want to find a problem when you are coding.</em></p>
<h4 id="idea-ide">idea IDE</h4>
<p><a href="https://github.com/alibaba/p3c/blob/main/idea-plugin/README.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">p3c-idea-plugin-install</a></p>
<h4 id="eclipse-ide">eclipse IDE</h4>
<p><a href="https://github.com/alibaba/p3c/blob/main/eclipse-plugin/README.md" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">p3c-eclipse-plugin-install</a></p>
<p>In a word, <strong>ANY HELP IS CONTRIBUTION.</strong></p>`,o={title:"Contributing to Higress",keywords:["Higress"],description:"It is warmly welcomed if you have interest to hack on Higress. First, we encourage this kind of willing very much. And here is a list of contributing guide for you.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-docs/current/developers/guide_dev.md"},t="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/developers/en/contributor-guide/guide_dev.md",r=void 0,l=function(){return`
# Contributing to Higress

It is warmly welcomed if you have interest to hack on Higress. First, we encourage this kind of willing very much. And here is a list of contributing guide for you.

## Topics

- [Contributing to Higress](#contributing-to-higress)
  - [Topics](#topics)
  - [Reporting security issues](#reporting-security-issues)
  - [Reporting general issues](#reporting-general-issues)
  - [Code and doc contribution](#code-and-doc-contribution)
    - [Workspace Preparation](#workspace-preparation)
    - [Branch Definition](#branch-definition)
    - [Commit Rules](#commit-rules)
      - [Commit Message](#commit-message)
      - [Commit Content](#commit-content)
    - [PR Description](#pr-description)
  - [Test case contribution](#test-case-contribution)
  - [Engage to help anything](#engage-to-help-anything)
  - [Code Style](#code-style)
    - [Guidelines](#guidelines)
    - [IDE Plugin Install\uFF08not necessary\uFF09](#ide-plugin-installnot-necessary)
      - [idea IDE](#idea-ide)
      - [eclipse IDE](#eclipse-ide)

## Reporting security issues

Security issues are always treated seriously. As our usual principle, we discourage anyone to spread security issues.
If you find a security issue of Higress, please do not discuss it in public and even do not open a public issue. 
Instead we encourage you to send us a private email to  [higress@googlegroups.com](mailto:higress@googlegroups.
com)
to report this.

## Reporting general issues

To be honest, we regard every user of Higress as a very kind contributor. After experiencing Higress, you may have some feedback for the project. Then feel free to open an issue via [NEW ISSUE](https://github.com/alibaba/higress/issues/new/choose).

Since we collaborate project Higress in a distributed way, we appreciate **WELL-WRITTEN**, **DETAILED**, **EXPLICIT** issue reports. To make the communication more efficient, we wish everyone could search if your issue is an existing one in the searching list. If you find it existing, please add your details in comments under the existing issue instead of opening a brand new one.

To make the issue details as standard as possible, we setup an [ISSUE TEMPLATE](https://github.com/alibaba/higress/blob/main/.github/ISSUE_TEMPLATE) for issue reporters. Please **BE SURE** to follow the instructions to fill fields in template.

There are a lot of cases when you could open an issue:

* bug report
* feature request
* performance issues
* feature proposal
* feature design
* help wanted
* doc incomplete
* test improvement
* any questions on project
* and so on

Also we must remind that when filling a new issue, please remember to remove the sensitive data from your post. Sensitive data could be password, secret key, network locations, private business data and so on.

## Code and doc contribution

Every action to make project Higress better is encouraged. On GitHub, every improvement for Higress could be via a PR (short for pull request).

* If you find a typo, try to fix it!
* If you find a bug, try to fix it!
* If you find some redundant codes, try to remove them!
* If you find some test cases missing, try to add them!
* If you could enhance a feature, please **DO NOT** hesitate!
* If you find code implicit, try to add comments to make it clear!
* If you find code ugly, try to refactor that!
* If you can help to improve documents, it could not be better!
* If you find document incorrect, just do it and fix that!
* ...

Actually it is impossible to list them completely. Just remember one principle:

> WE ARE LOOKING FORWARD TO ANY PR FROM YOU.

Since you are ready to improve Higress with a PR, we suggest you could take a look at the PR rules here.

* [Workspace Preparation](#workspace-preparation)
* [Branch Definition](#branch-definition)
* [Commit Rules](#commit-rules)
* [PR Description](#pr-description)

### Workspace Preparation

To put forward a PR, we assume you have registered a GitHub ID. Then you could finish the preparation in the following steps:

1. **FORK** Higress to your repository. To make this work, you just need to click the button Fork in right-left of 
   [alibaba/higress](https://github.com/alibaba/higress) main page. Then you will end up with your repository in \`https://github.com/<your-username>/higress\`, in which \`your-username\` is your GitHub username.

1. **CLONE** your own repository to develop locally. Use \`git clone git@github.com:<your-username>/higress.git\` to 
   clone repository to your local machine. Then you can create new branches to finish the change you wish to make.

1. **Set Remote** upstream to be \`git@github.com:alibaba/higress.git\` using the following two commands:

\`\`\`
git remote add upstream git@github.com:alibaba/higress.git
git remote set-url --push upstream no-pushing
\`\`\`

With this remote setting, you can check your git remote configuration like this:

\`\`\`
$ git remote -v
origin     git@github.com:<your-username>/higress.git (fetch)
origin     git@github.com:<your-username>/higress.git (push)
upstream   git@github.com:alibaba/higress.git (fetch)
upstream   no-pushing (push)
\`\`\`

Adding this, we can easily synchronize local branches with upstream branches.

### Branch Definition

Right now we assume every contribution via pull request is for [branch main](https://github.
com/alibaba/higress/tree/main) in Higress. Before contributing, be aware of branch definition would help a lot.

As a contributor, keep in mind again that every contribution via pull request is for branch main. While in project Higress, there are several other branches, we generally call them release branches (such as 0.6.0,0.6.1), feature branches, hotfix branches.

When officially releasing a version, there will be a release branch and named with the version number. 

After the release, we will merge the commit of the release branch into the main branch.

When we find that there is a bug in a certain version, we will decide to fix it in a later version or fix it in a specific hotfix version. When we decide to fix the hotfix version, we will checkout the hotfix branch based on the corresponding release branch, perform code repair and verification, and merge it into the main branch.

For larger features, we will pull out the feature branch for development and verification.


### Commit Rules

Actually in Higress, we take two rules serious when committing:

* [Commit Message](#commit-message)
* [Commit Content](#commit-content)

#### Commit Message

Commit message could help reviewers better understand what is the purpose of submitted PR. It could help accelerate the code review procedure as well. We encourage contributors to use **EXPLICIT** commit message rather than ambiguous message. In general, we advocate the following commit message type:

* docs: xxxx. For example, "docs: add docs about Higress cluster installation".
* feature: xxxx.For example, "feature: support oracle in AT mode".
* bugfix: xxxx. For example, "bugfix: fix panic when input nil parameter".
* refactor: xxxx. For example, "refactor: simplify to make codes more readable".
* test: xxx. For example, "test: add unit test case for func InsertIntoArray".
* other readable and explicit expression ways.

On the other side, we discourage contributors from committing message like the following ways:

* ~~fix bug~~
* ~~update~~
* ~~add doc~~

If you get lost, please see [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) for a start.

#### Commit Content

Commit content represents all content changes included in one commit. We had better include things in one single commit which could support reviewer's complete review without any other commits' help. In another word, contents in one single commit can pass the CI to avoid code mess. In brief, there are three minor rules for us to keep in mind:

* avoid very large change in a commit;
* complete and reviewable for each commit.
* check git config(\`user.name\`, \`user.email\`) when committing to ensure that it is associated with your github ID.


In addition, in the code change part, we suggest that all contributors should read the [code style of Higress](#code-style).

No matter commit message, or commit content, we do take more emphasis on code review.


### PR Description

PR is the only way to make change to Higress project files. To help reviewers better get your purpose, PR description could not be too detailed. We encourage contributors to follow the [PR template](https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md) to finish the pull request.

## Test case contribution

Any test case would be welcomed. Currently, Higress function test cases are high priority.

* For unit test, you need to create a test file named \`xxxTest.java\` in the test directory of the same module. Recommend you to use the junit5 UT framework

* For integration test, you can put the integration test in the test directory or the higress-test module. It is 
  recommended to use the mockito test framework.

## Engage to help anything

We choose GitHub as the primary place for Higress to collaborate. So the latest updates of Higress are always here. Although contributions via PR is an explicit way to help, we still call for any other ways.

* reply to other's issues if you could;
* help solve other user's problems;
* help review other's PR design;
* help review other's codes in PR;
* discuss about Higress to make things clearer;
* advocate Higress technology beyond GitHub;
* write blogs on Higress and so on.


## Code Style

Higress code style Comply with Alibaba Java Coding Guidelines.


### Guidelines
[Alibaba-Java-Coding-Guidelines](https://alibaba.github.io/Alibaba-Java-Coding-Guidelines/) 


### IDE Plugin Install\uFF08not necessary\uFF09

*It is not necessary to install, if you want to find a problem when you are coding.*


#### idea IDE
[p3c-idea-plugin-install](https://github.com/alibaba/p3c/blob/main/idea-plugin/README.md) 

#### eclipse IDE
[p3c-eclipse-plugin-install](https://github.com/alibaba/p3c/blob/main/eclipse-plugin/README.md)


In a word, **ANY HELP IS CONTRIBUTION.**`},a=function(){return e},n=function(){return[{depth:2,slug:"topics",text:"Topics"},{depth:2,slug:"reporting-security-issues",text:"Reporting security issues"},{depth:2,slug:"reporting-general-issues",text:"Reporting general issues"},{depth:2,slug:"code-and-doc-contribution",text:"Code and doc contribution"},{depth:3,slug:"workspace-preparation",text:"Workspace Preparation"},{depth:3,slug:"branch-definition",text:"Branch Definition"},{depth:3,slug:"commit-rules",text:"Commit Rules"},{depth:4,slug:"commit-message",text:"Commit Message"},{depth:4,slug:"commit-content",text:"Commit Content"},{depth:3,slug:"pr-description",text:"PR Description"},{depth:2,slug:"test-case-contribution",text:"Test case contribution"},{depth:2,slug:"engage-to-help-anything",text:"Engage to help anything"},{depth:2,slug:"code-style",text:"Code Style"},{depth:3,slug:"guidelines",text:"Guidelines"},{depth:3,slug:"ide-plugin-installnot-necessary",text:"IDE Plugin Install\uFF08not necessary\uFF09"},{depth:4,slug:"idea-ide",text:"idea IDE"},{depth:4,slug:"eclipse-ide",text:"eclipse IDE"}]},i=u((b,y,w)=>{const{layout:v,...s}=o;return s.file=t,s.url=r,h`${p()}${d(e)}`})});export{i as Content,f as __tla,a as compiledContent,i as default,t as file,o as frontmatter,n as getHeadings,l as rawContent,r as url};
