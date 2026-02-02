import{c,__tla as l}from"./astro-component.YcfuVWta.js";import{r as d,m as g,u,__tla as v}from"./constant.9_4gXTQt.js";import{__tla as E}from"./astro/assets-service.r1ocst81.js";let t,i,s,a,r,p,n,h=Promise.all([(()=>{try{return l}catch{}})(),(()=>{try{return v}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let e;e=`<h2 id="table-of-contents">Table of Contents</h2>
<ul>
<li><a href="#overview" referrerpolicy="unsafe-url">Overview</a></li>
<li><a href="#part-1-develop-and-register-agentscope-agent-to-nacos" referrerpolicy="unsafe-url">Part 1: Develop and Register AgentScope Agent to Nacos</a>
<ul>
<li><a href="#environment-preparation" referrerpolicy="unsafe-url">Environment Preparation</a></li>
<li><a href="#develop-agent" referrerpolicy="unsafe-url">Develop Agent</a></li>
<li><a href="#configure-nacos-registration" referrerpolicy="unsafe-url">Configure Nacos Registration</a></li>
<li><a href="#verify-registration" referrerpolicy="unsafe-url">Verify Registration</a></li>
</ul>
</li>
<li><a href="#part-2-import-nacos-instance-into-himarket" referrerpolicy="unsafe-url">Part 2: Import Nacos Instance into HiMarket</a></li>
<li><a href="#part-3-create-and-associate-agent-product" referrerpolicy="unsafe-url">Part 3: Create and Associate Agent Product</a></li>
<li><a href="#part-4-publish-to-portal" referrerpolicy="unsafe-url">Part 4: Publish to Portal</a></li>
<li><a href="#faq" referrerpolicy="unsafe-url">FAQ</a></li>
</ul>
<hr>
<h2 id="overview">Overview</h2>
<h3 id="what-is-agentscope">What is AgentScope?</h3>
<p><a href="https://agentscope.io" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">AgentScope</a> is a development framework for building AI Agent applications that supports rapid construction of intelligent dialogue agents, tool invocation, and multi-agent collaboration capabilities.</p>
<h3 id="technical-architecture">Technical Architecture</h3>
<p>The complete chain for listing AgentScope Agents on HiMarket:</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">AgentScope Java Agent (Development)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">\u2193</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">    </span></span><span style="--0:#e1e4e8">Register to Nacos (Agent Registry)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">\u2193</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">HiMarket Imports Nacos Instance (Connect Data Source)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">\u2193</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Create Agent Product and Associate (Pull Configuration)</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">        </span></span><span style="--0:#e1e4e8">\u2193</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#e1e4e8">   </span></span><span style="--0:#e1e4e8">Publish to Portal (Visible to Users)</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="AgentScope Java Agent (Development)\x7F        \u2193\x7F    Register to Nacos (Agent Registry)\x7F        \u2193\x7FHiMarket Imports Nacos Instance (Connect Data Source)\x7F        \u2193\x7FCreate Agent Product and Associate (Pull Configuration)\x7F        \u2193\x7F   Publish to Portal (Visible to Users)"><div></div></button></div></figure></div>
<h3 id="core-concepts">Core Concepts</h3>
<ul>
<li><strong>AgentScope Runtime</strong>: AgentScope runtime environment that supports the A2A protocol</li>
<li><strong>A2A Protocol</strong>: Agent-to-Agent protocol for standardized communication between agents</li>
<li><strong>Nacos</strong>: Agent registry that stores agent configurations and metadata</li>
<li><strong>HiMarket</strong>: API and Agent product management platform that provides a unified display and management portal</li>
</ul>
<h3 id="language-support">Language Support</h3>




















<table><thead><tr><th>Language</th><th>Support Status</th><th>Description</th></tr></thead><tbody><tr><td><strong>Java</strong></td><td>Supported</td><td>Current version, covered in this document</td></tr><tr><td><strong>Python</strong></td><td>Coming Soon</td><td>Under development, stay tuned</td></tr></tbody></table>
<hr>
<h2 id="part-1-develop-and-register-agentscope-agent-to-nacos">Part 1: Develop and Register AgentScope Agent to Nacos</h2>
<h3 id="environment-preparation">Environment Preparation</h3>
<h4 id="11-prerequisites">1.1 Prerequisites</h4>
<ul>
<li><strong>Java 17</strong> or higher</li>
<li><strong>Maven 3.6</strong> or higher</li>
<li><strong>Nacos Server 3.1.0</strong> or higher</li>
<li><strong>DashScope API Key</strong> (or other LLM service)</li>
</ul>
<h4 id="12-start-nacos-server">1.2 Start Nacos Server</h4>
<p><strong>Download and Start</strong>:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Linux/Mac</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bin/startup.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">standalone</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Windows</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">cmd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">bin/startup.cmd</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-m</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">standalone</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="sh bin/startup.sh -m standalone\x7Fcmd bin/startup.cmd -m standalone"><div></div></button></div></figure></div>
<p>Verify by accessing the console: <a href="http://localhost:8848/nacos" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8848/nacos</a></p>
<p>For detailed installation steps, refer to: <a href="https://nacos.io/docs/latest/guide/start/quick-start/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Nacos Quick Start</a></p>
<hr>
<h3 id="develop-agent">Develop Agent</h3>
<h4 id="21-add-maven-dependencies">2.1 Add Maven Dependencies</h4>
<p>Add to <code dir="auto">pom.xml</code>:</p>
<blockquote>
<p><strong>Version Requirement:</strong> AgentScope and AgentScope Extensions require version 1.0.3 or higher.</p>
</blockquote>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">agentscope.version</span><span style="--0:#E1E4E8">>1.0.3&#x3C;/</span><span style="--0:#85E89D">agentscope.version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">agentscope-extensions.version</span><span style="--0:#E1E4E8">>1.0.3&#x3C;/</span><span style="--0:#85E89D">agentscope-extensions.version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">spring-boot.version</span><span style="--0:#E1E4E8">>3.5.7&#x3C;/</span><span style="--0:#85E89D">spring-boot.version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">properties</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependencies</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#99A0A6">&#x3C;!-- Spring Boot --></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">>io.agentscope&#x3C;/</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">>agentscope-core&#x3C;/</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">>\${agentscope.version}&#x3C;/</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">>io.agentscope&#x3C;/</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">>agentscope-a2a-spring-boot-starter&#x3C;/</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">>\${agentscope.version}&#x3C;/</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">>io.agentscope&#x3C;/</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">>agentscope-a2a-nacos-spring-boot-starter&#x3C;/</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">>\${agentscope-extensions.version}&#x3C;/</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">>org.springframework.boot&#x3C;/</span><span style="--0:#85E89D">groupId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">>spring-boot-starter-web&#x3C;/</span><span style="--0:#85E89D">artifactId</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">&#x3C;</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">>\${spring-boot.version}&#x3C;/</span><span style="--0:#85E89D">version</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependency</span><span style="--0:#E1E4E8">></span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">&#x3C;/</span><span style="--0:#85E89D">dependencies</span><span style="--0:#E1E4E8">></span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="<properties>\x7F    <agentscope.version>1.0.3</agentscope.version>\x7F    <agentscope-extensions.version>1.0.3</agentscope-extensions.version>\x7F    <spring-boot.version>3.5.7</spring-boot.version>\x7F</properties>\x7F<dependencies>\x7F    <!-- Spring Boot -->\x7F    <dependency>\x7F        <groupId>io.agentscope</groupId>\x7F        <artifactId>agentscope-core</artifactId>\x7F        <version>\${agentscope.version}</version>\x7F    </dependency>\x7F    <dependency>\x7F        <groupId>io.agentscope</groupId>\x7F        <artifactId>agentscope-a2a-spring-boot-starter</artifactId>\x7F        <version>\${agentscope.version}</version>\x7F    </dependency>\x7F    <dependency>\x7F        <groupId>io.agentscope</groupId>\x7F        <artifactId>agentscope-a2a-nacos-spring-boot-starter</artifactId>\x7F        <version>\${agentscope-extensions.version}</version>\x7F    </dependency>\x7F\x7F    <dependency>\x7F        <groupId>org.springframework.boot</groupId>\x7F        <artifactId>spring-boot-starter-web</artifactId>\x7F        <version>\${spring-boot.version}</version>\x7F    </dependency>\x7F\x7F</dependencies>"><div></div></button></div></figure></div>
<h4 id="22-create-spring-boot-main-class">2.2 Create Spring Boot Main Class</h4>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.springframework.boot.SpringApplication;</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">import</span><span style="--0:#E1E4E8"> org.springframework.boot.autoconfigure.SpringBootApplication;</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">@</span><span style="--0:#F97583">SpringBootApplication</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">class</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">A2aRegistryExampleApplication</span><span style="--0:#E1E4E8"> {</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#F97583">public</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">static</span><span style="--0:#E1E4E8"> </span><span style="--0:#F97583">void</span><span style="--0:#E1E4E8"> </span><span style="--0:#B392F0">main</span><span style="--0:#E1E4E8">(</span><span style="--0:#F97583">String</span><span style="--0:#E1E4E8">[] </span><span style="--0:#FFAB70">args</span><span style="--0:#E1E4E8">) {</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">        </span></span><span style="--0:#E1E4E8">SpringApplication.</span><span style="--0:#B392F0">run</span><span style="--0:#E1E4E8">(A2aRegistryExampleApplication.class, args);</span></div></div><div class="ec-line"><div class="code"><span class="indent"><span style="--0:#E1E4E8">    </span></span><span style="--0:#E1E4E8">}</span></div></div><div class="ec-line"><div class="code"><span style="--0:#E1E4E8">}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="import org.springframework.boot.SpringApplication;\x7Fimport org.springframework.boot.autoconfigure.SpringBootApplication;\x7F\x7F@SpringBootApplication\x7Fpublic class A2aRegistryExampleApplication {\x7F\x7F    public static void main(String[] args) {\x7F        SpringApplication.run(A2aRegistryExampleApplication.class, args);\x7F    }\x7F}"><div></div></button></div></figure></div>
<h4 id="23-create-configuration-file">2.3 Create Configuration File</h4>
<p>Configure in <code dir="auto">src/main/resources/application.yaml</code>:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">port</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">8888</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#85E89D">agentscope</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">dashscope</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">api-key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${AI_DASHSCOPE_API_KEY}</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">agent</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">enabled</span><span style="--0:#E1E4E8">: </span><span style="--0:#79B8FF">true</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">name</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">customer-service-agent</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">sys-prompt</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"You are an intelligent customer service assistant who can answer user questions"</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">a2a</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">card</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">description</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">"Example of A2A(Agent2Agent) Protocol Agent"</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">provider</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">organization</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">Alibaba Nacos</span></div></div><div class="ec-line"><div class="code"><span class="indent">          </span><span style="--0:#85E89D">url</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">https://nacos.io</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">nacos</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">server-addr</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${NACOS_SERVER_ADDRESS:127.0.0.1:8848}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">username</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${NACOS_USERNAME:nacos}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">password</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${NACOS_PASSWORD:nacos}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="server:\x7F  port: 8888\x7F\x7Fagentscope:\x7F  dashscope:\x7F    api-key: \${AI_DASHSCOPE_API_KEY}\x7F  agent:\x7F    enabled: true\x7F    name: customer-service-agent\x7F    sys-prompt: &#x22;You are an intelligent customer service assistant who can answer user questions&#x22;\x7F  a2a:\x7F    server:\x7F      card:\x7F        description: &#x22;Example of A2A(Agent2Agent) Protocol Agent&#x22;\x7F        provider:\x7F          organization: Alibaba Nacos\x7F          url: https://nacos.io\x7F      nacos:\x7F        server-addr: \${NACOS_SERVER_ADDRESS:127.0.0.1:8848}\x7F        username: \${NACOS_USERNAME:nacos}\x7F        password: \${NACOS_PASSWORD:nacos}"><div></div></button></div></figure></div>
<h4 id="24-core-configuration-explanation">2.4 Core Configuration Explanation</h4>
<h4 id="agent-configuration">Agent Configuration</h4>
<p>Configuration related to the Agent itself, used to define the basic properties and behavior of the Agent.</p>



































<table><thead><tr><th>Configuration Item</th><th>Description</th><th>Default Value</th><th>Required</th></tr></thead><tbody><tr><td><code dir="auto">agentscope.dashscope.api-key</code></td><td>DashScope API Key</td><td>-</td><td>Yes</td></tr><tr><td><code dir="auto">agentscope.agent.enabled</code></td><td>Whether to enable Agent</td><td>false</td><td>No</td></tr><tr><td><code dir="auto">agentscope.agent.name</code></td><td>Agent Name</td><td>-</td><td>Yes</td></tr><tr><td><code dir="auto">agentscope.agent.sys-prompt</code></td><td>Agent System Prompt</td><td>-</td><td>Recommended</td></tr></tbody></table>
<h4 id="agentcard-configuration">AgentCard Configuration</h4>
<p>AgentCard-related configuration exposed by the Agent through the A2A protocol, used to describe the metadata information of the Agent. More supported fields can be found in the AgentCard definition in the A2A protocol.</p>





























<table><thead><tr><th>Configuration Item</th><th>Description</th><th>Default Value</th><th>Required</th></tr></thead><tbody><tr><td><code dir="auto">agentscope.a2a.server.card.description</code></td><td>Agent Description</td><td>-</td><td>Recommended</td></tr><tr><td><code dir="auto">agentscope.a2a.server.card.provider.organization</code></td><td>Agent Provider Organization</td><td>-</td><td>No</td></tr><tr><td><code dir="auto">agentscope.a2a.server.card.provider.url</code></td><td>Agent Provider URL</td><td>-</td><td>No</td></tr></tbody></table>
<h4 id="nacos-configuration">Nacos Configuration</h4>
<p>Configuration related to the Nacos agent registry, used to register the Agent to the Nacos agent registry.</p>



































<table><thead><tr><th>Configuration Item</th><th>Description</th><th>Default Value</th><th>Required</th></tr></thead><tbody><tr><td><code dir="auto">agentscope.a2a.server.nacos.server-addr</code></td><td>Nacos Server Address</td><td>127.0.0.1:8848</td><td>Yes</td></tr><tr><td><code dir="auto">agentscope.a2a.server.nacos.username</code></td><td>Nacos Username</td><td>-</td><td>As Configured</td></tr><tr><td><code dir="auto">agentscope.a2a.server.nacos.password</code></td><td>Nacos Password</td><td>-</td><td>As Configured</td></tr><tr><td><code dir="auto">agentscope.a2a.server.nacos.namespace</code></td><td>Nacos Namespace</td><td>public</td><td>No</td></tr></tbody></table>
<h4 id="server-configuration">Server Configuration</h4>
<p>Basic server configuration used to set server-level parameters such as service listening ports.</p>

















<table><thead><tr><th>Configuration Item</th><th>Description</th><th>Default Value</th><th>Required</th></tr></thead><tbody><tr><td><code dir="auto">server.port</code></td><td>Agent Service Listening Port</td><td>8080</td><td>No</td></tr></tbody></table>
<h4 id="25-mse-nacos-configuration-optional">2.5 MSE Nacos Configuration (Optional)</h4>
<p>If using Alibaba Cloud MSE Nacos:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#85E89D">agentscope</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">  </span><span style="--0:#85E89D">a2a</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">    </span><span style="--0:#85E89D">server</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">      </span><span style="--0:#85E89D">nacos</span><span style="--0:#E1E4E8">:</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">endpoint</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${NACOS_ENDPOINT:your-endpoint.mse.aliyuncs.com}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">namespace</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${NACOS_NAMESPACE:your-namespace-id}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">access-key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${NACOS_ACCESS_KEY}</span></div></div><div class="ec-line"><div class="code"><span class="indent">        </span><span style="--0:#85E89D">secret-key</span><span style="--0:#E1E4E8">: </span><span style="--0:#9ECBFF">\${NACOS_SECRET_KEY}</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="agentscope:\x7F  a2a:\x7F    server:\x7F      nacos:\x7F        endpoint: \${NACOS_ENDPOINT:your-endpoint.mse.aliyuncs.com}\x7F        namespace: \${NACOS_NAMESPACE:your-namespace-id}\x7F        access-key: \${NACOS_ACCESS_KEY}\x7F        secret-key: \${NACOS_SECRET_KEY}"><div></div></button></div></figure></div>
<h4 id="26-start-application">2.6 Start Application</h4>
<p>Set environment variables:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> AI_DASHSCOPE_API_KEY</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">your_api_key</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> NACOS_USERNAME</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">nacos</span></div></div><div class="ec-line"><div class="code"><span style="--0:#F97583">export</span><span style="--0:#E1E4E8"> NACOS_PASSWORD</span><span style="--0:#F97583">=</span><span style="--0:#E1E4E8">nacos</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="export AI_DASHSCOPE_API_KEY=your_api_key\x7Fexport NACOS_USERNAME=nacos\x7Fexport NACOS_PASSWORD=nacos"><div></div></button></div></figure></div>
<p>Run the application:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#B392F0">mvn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">spring-boot:run</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mvn spring-boot:run"><div></div></button></div></figure></div>
<hr>
<h3 id="verify-registration">Verify Registration</h3>
<h4 id="31-check-logs">3.1 Check Logs</h4>
<p>Confirm you see the following logs:</p>
<div class="expressive-code"><figure class="frame not-content"><figcaption class="header"></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Auto register agent customer-service-agent into Registry Nacos.</span></div></div><div class="ec-line"><div class="code"><span style="--0:#e1e4e8">Auto register agent customer-service-agent into Registry Nacos successfully.</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="Auto register agent customer-service-agent into Registry Nacos.\x7FAuto register agent customer-service-agent into Registry Nacos successfully."><div></div></button></div></figure></div>
<h4 id="32-access-nacos-console">3.2 Access Nacos Console</h4>
<ol>
<li>Open <a href="http://localhost:8848/nacos" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">http://localhost:8848/nacos</a></li>
<li>Go to \u201CAgent Management\u201D \u2192 \u201CAgent List\u201D</li>
<li>Find the <code dir="auto">customer-service-agent</code> Agent</li>
<li>Click Details to view Agent Card</li>
</ol>
<p><img src="/img/1770003722281.png" alt="" referrerpolicy="no-referrer"></p>
<p><img src="/img/1770003726169.png" alt="" referrerpolicy="no-referrer"></p>
<hr>
<h2 id="part-2-import-nacos-instance-into-himarket">Part 2: Import Nacos Instance into HiMarket</h2>
<h3 id="import-process">Import Process</h3>
<p>After logging into the HiMarket Admin backend, go to the <strong>\u201CNacos Instance Management\u201D</strong> page.</p>
<p><img src="/img/1770003730199.png" alt="" referrerpolicy="no-referrer"></p>
<p>Click <strong>\u201CImport/Create Instance\u201D</strong> and choose the import method.</p>
<h3 id="method-a-import-from-mse-recommended">Method A: Import from MSE (Recommended)</h3>
<h4 id="step-1-enter-alibaba-cloud-credentials">Step 1: Enter Alibaba Cloud Credentials</h4>
<p>Select <strong>\u201CMSE Nacos\u201D</strong> and fill in:</p>
<ul>
<li><strong>Region</strong>: Alibaba Cloud region (e.g. <code dir="auto">cn-hangzhou</code>)</li>
<li><strong>Access Key</strong>: Alibaba Cloud AK</li>
<li><strong>Secret Key</strong>: Alibaba Cloud SK</li>
</ul>
<p>Click <strong>\u201CGet Instance List\u201D</strong></p>
<p><img src="/img/1770003733781.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="step-2-select-instance">Step 2: Select Instance</h4>
<p>Select the target MSE Nacos instance from the list and click <strong>\u201CImport\u201D</strong></p>
<p><img src="/img/1770003737321.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="step-3-supplement-information">Step 3: Supplement Information</h4>
<p>The system will auto-fill information. Supplement:</p>
<ul>
<li><strong>Server Address</strong>: Select public or private network address</li>
<li><strong>Username/Password</strong>: Nacos authentication information</li>
</ul>
<p>Click <strong>\u201CCreate\u201D</strong></p>
<p><img src="/img/1770003740974.png" alt="" referrerpolicy="no-referrer"></p>
<h3 id="method-b-manually-create-open-source-nacos">Method B: Manually Create Open Source Nacos</h3>
<p>Select <strong>\u201COpen Source Nacos\u201D</strong> and manually fill in:</p>
<ul>
<li><strong>Instance Name</strong>: e.g. \u201CDevelopment Environment Nacos\u201D</li>
<li><strong>Server Address</strong>: e.g. <code dir="auto">http://localhost:8848</code></li>
<li><strong>Username/Password</strong>: Nacos authentication information</li>
<li><strong>Description</strong>: Instance description</li>
</ul>
<p>Click <strong>\u201CCreate\u201D</strong></p>
<hr>
<h2 id="part-3-create-and-associate-agent-product">Part 3: Create and Associate Agent Product</h2>
<h3 id="create-product">Create Product</h3>
<h4 id="1-go-to-api-products">1. Go to API Products</h4>
<p>Click <strong>\u201CAPI Products\u201D</strong> in the left navigation</p>
<p><img src="/img/1770003744277.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="2-create-product">2. Create Product</h4>
<p>Click <strong>\u201CCreate API Product\u201D</strong> and fill in:</p>



































<table><thead><tr><th>Field</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>Name</td><td>User-facing product name</td><td>customer-service-agent</td></tr><tr><td>Type</td><td>Agent API</td><td>Agent API</td></tr><tr><td>Description</td><td>Brief functional description</td><td>Intelligent Customer Service Assistant</td></tr><tr><td>Icon Setting</td><td>Product icon URL</td><td>(Optional)</td></tr><tr><td>Category</td><td>Category tag</td><td>\u201DCustomer Service\u201D</td></tr></tbody></table>
<p><img src="/img/1770003748448.png" alt="" referrerpolicy="no-referrer"></p>
<p>Click <strong>\u201CCreate\u201D</strong></p>
<hr>
<h3 id="associate-nacos-agent">Associate Nacos Agent</h3>
<h4 id="1-go-to-association-page">1. Go to Association Page</h4>
<p>Go to the product details page and click the <strong>\u201CLink API\u201D</strong> tab, then click <strong>\u201CAssociate API\u201D</strong></p>
<p><img src="/img/1770003752210.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="2-select-data-source">2. Select Data Source</h4>
<p>In the pop-up dialog:</p>
<p><strong>Step 1</strong>: Select <strong>\u201CNacos\u201D</strong> as the data source type</p>
<p><strong>Step 2</strong>: Select the previously imported <strong>Nacos Instance</strong></p>
<p><strong>Step 3</strong>: Select <strong>Namespace</strong> (e.g. <code dir="auto">public</code>)</p>
<p><strong>Step 4</strong>: Select <strong>Agent</strong> (e.g. <code dir="auto">customer-service-agent</code>)</p>
<p><img src="/img/1770003755220.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="3-confirm-association">3. Confirm Association</h4>
<p>Click <strong>\u201CAssociate\u201D</strong>, and the system will:</p>
<ol>
<li>Connect to the Nacos instance</li>
<li>Pull the complete Agent configuration (Agent Card, protocol, routing, etc.)</li>
<li>Save to HiMarket database</li>
<li>Update product status to <strong>READY</strong></li>
</ol>
<p>After successful association, you can view the Agent configuration details:</p>
<p><img src="/img/1770003759322.png" alt="" referrerpolicy="no-referrer"></p>
<p>The configuration includes:</p>
<ul>
<li><strong>Supported Protocols</strong>: a2a, http</li>
<li><strong>Agent Card</strong>: Name, Version, Description, URL</li>
<li><strong>Skill List</strong>: Agent capability tags</li>
</ul>
<hr>
<h3 id="improve-usage-documentation-optional">Improve Usage Documentation (Optional)</h3>
<p>Click the <strong>\u201CUsage Guide\u201D</strong> tab and write usage instructions (Markdown format):</p>
<p><img src="/img/1770003763422.png" alt="" referrerpolicy="no-referrer"></p>
<hr>
<h2 id="part-4-publish-to-portal">Part 4: Publish to Portal</h2>
<h3 id="publishing-process">Publishing Process</h3>
<h4 id="1-go-to-publishing-page">1. Go to Publishing Page</h4>
<p>Click the <strong>\u201CPortal\u201D</strong> tab</p>
<p><img src="/img/1770003767157.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="2-select-portal">2. Select Portal</h4>
<p>Click <strong>\u201CPublish to Portal\u201D</strong> and select target portals (multiple selections allowed):</p>
<p><img src="/img/1770003770264.png" alt="" referrerpolicy="no-referrer"></p>
<h4 id="3-confirm-publication">3. Confirm Publication</h4>
<p>Click <strong>\u201CPublish\u201D</strong> and the product will be discoverable and usable by users on the portal.</p>
<hr>
<h3 id="user-access">User Access</h3>
<p>After users access the HiMarket portal:</p>
<ol>
<li><strong>Browse Agent Market</strong>: Click \u201CAgents\u201D on the homepage</li>
<li><strong>Search for Agent</strong>: Use keywords to search or filter by category</li>
<li><strong>View Details</strong>: Click the Agent card to go to the details page</li>
<li><strong>View Configuration</strong>:
<ul>
<li><strong>Overview Tab</strong>: View usage guide</li>
<li><strong>Configuration Tab</strong>: View Agent Card, protocols, routing, and other technical information</li>
</ul>
</li>
<li><strong>Invoke Agent</strong>: Call the Agent API according to the configuration information</li>
</ol>
<p><img src="/img/1770003773903.png" alt="" referrerpolicy="no-referrer"></p>
<hr>
<h2 id="faq">FAQ</h2>
<h3 id="q1-agent-registration-to-nacos-failed">Q1: Agent registration to Nacos failed?</h3>
<p><strong>Possible Causes</strong>:</p>
<ul>
<li>Nacos Server not started or inaccessible</li>
<li>Nacos Server version lower than 3.1.0</li>
<li>Incorrect authentication information</li>
</ul>
<p><strong>Solutions</strong>:</p>
<ul>
<li>Confirm Nacos Server is running properly</li>
<li>Check <code dir="auto">server-addr</code>, <code dir="auto">username</code>, <code dir="auto">password</code> configuration</li>
<li>Check detailed error messages in application logs</li>
</ul>
<hr>
<h3 id="q2-cannot-find-registered-agent-in-himarket">Q2: Cannot find registered Agent in HiMarket?</h3>
<p><strong>Possible Causes</strong>:</p>
<ul>
<li>Nacos instance not correctly imported into HiMarket</li>
<li>Incorrect namespace selection</li>
<li>Agent registration failed</li>
</ul>
<p><strong>Solutions</strong>:</p>
<ul>
<li>Verify Nacos instance connection in HiMarket</li>
<li>Confirm Agent is registered in Nacos console</li>
<li>Check if namespace configuration is consistent</li>
</ul>
<hr>
<h3 id="q3-incomplete-configuration-information-after-association">Q3: Incomplete configuration information after association?</h3>
<p><strong>Possible Causes</strong>:</p>
<ul>
<li>Agent configuration in Nacos does not conform to A2A specification</li>
<li>Network issues causing configuration pull failure</li>
</ul>
<p><strong>Solutions</strong>:</p>
<ul>
<li>Check Agent metadata in Nacos console</li>
<li>Ensure Agent Card information is complete</li>
<li>Try unlinking and re-associating</li>
</ul>
<hr>
<h3 id="q4-how-to-update-agent-configuration">Q4: How to update Agent configuration?</h3>
<p><strong>Update Process</strong>:</p>
<ol>
<li>Modify configuration in Agent code</li>
<li>Restart Agent application to re-register to Nacos</li>
<li>Click <strong>\u201CUnlink\u201D</strong> on the HiMarket product details page</li>
<li>Re-associate the same Agent</li>
<li>System will pull the latest configuration</li>
</ol>
<p><strong>Note</strong>: Unlinking will not delete the product, only disconnect from the Agent.</p>
<hr>
<h3 id="q5-users-cannot-see-the-product-after-publication">Q5: Users cannot see the product after publication?</h3>
<p><strong>Checklist</strong>:</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" disabled> Is the product status <strong>READY</strong> or <strong>PUBLISHED</strong></li>
<li class="task-list-item"><input type="checkbox" disabled> Has it been successfully published to the target portal</li>
<li class="task-list-item"><input type="checkbox" disabled> Is the portal address accessed by users correct</li>
<li class="task-list-item"><input type="checkbox" disabled> Do users have access permissions to that portal</li>
</ul>
<hr>
<h2 id="complete-example-code">Complete Example Code</h2>
<p>The code examples in this document show key configurations. For a complete, runnable example project, please refer to:</p>
<p><strong>\u{1F4E6}</strong>** GitHub Sample Project**: <a href="https://github.com/nacos-group/agentscope-extensions-nacos/tree/main/java/example/a2a-example" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">agentscope-extensions-nacos/java/example/a2a-example</a></p>
<p>Includes:</p>
<ul>
<li>Agent registration example</li>
<li>Agent discovery and invocation example</li>
<li>Complete Maven project configuration</li>
<li>Detailed README instructions</li>
</ul>
<hr>
<h2 id="more-resources">More Resources</h2>
<ul>
<li><a href="https://agentscope.io" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">AgentScope Official Documentation</a></li>
<li><a href="https://nacos.io" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">Nacos Official Documentation</a></li>
<li><a href="https://github.com/nacos-group/agentscope-extensions-nacos" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">AgentScope Extensions Nacos GitHub</a></li>
<li><a href="../README/" referrerpolicy="unsafe-url">HiMarket Product Documentation</a></li>
</ul>
<hr>`,a={title:"Listing AgentScope Agents on HiMarket",description:"Guide to listing AgentScope Agents on HiMarket",date:"2025-12-22",category:"article",keywords:["HiMarket","AgentScope","Agent","Deployment","Installation"],authors:"Higress Team"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/himarket/himarket-agentscope-agent.md",n=void 0,p=function(){return`# Listing AgentScope Agents on HiMarket

## Table of Contents
- [Overview](#overview)
- [Part 1: Develop and Register AgentScope Agent to Nacos](#part-1-develop-and-register-agentscope-agent-to-nacos)
    - [Environment Preparation](#environment-preparation)
    - [Develop Agent](#develop-agent)
    - [Configure Nacos Registration](#configure-nacos-registration)
    - [Verify Registration](#verify-registration)
- [Part 2: Import Nacos Instance into HiMarket](#part-2-import-nacos-instance-into-himarket)
- [Part 3: Create and Associate Agent Product](#part-3-create-and-associate-agent-product)
- [Part 4: Publish to Portal](#part-4-publish-to-portal)
- [FAQ](#faq)

---

## Overview
### What is AgentScope?
[AgentScope](https://agentscope.io) is a development framework for building AI Agent applications that supports rapid construction of intelligent dialogue agents, tool invocation, and multi-agent collaboration capabilities.

### Technical Architecture
The complete chain for listing AgentScope Agents on HiMarket:

\`\`\`plain
AgentScope Java Agent (Development)
        \u2193
    Register to Nacos (Agent Registry)
        \u2193
HiMarket Imports Nacos Instance (Connect Data Source)
        \u2193
Create Agent Product and Associate (Pull Configuration)
        \u2193
   Publish to Portal (Visible to Users)
\`\`\`

### Core Concepts
+ **AgentScope Runtime**: AgentScope runtime environment that supports the A2A protocol
+ **A2A Protocol**: Agent-to-Agent protocol for standardized communication between agents
+ **Nacos**: Agent registry that stores agent configurations and metadata
+ **HiMarket**: API and Agent product management platform that provides a unified display and management portal

### Language Support
| Language | Support Status | Description |
| --- | --- | --- |
| **Java** | Supported | Current version, covered in this document |
| **Python** | Coming Soon | Under development, stay tuned |

---

## Part 1: Develop and Register AgentScope Agent to Nacos
### Environment Preparation
#### 1.1 Prerequisites
+ **Java 17** or higher
+ **Maven 3.6** or higher
+ **Nacos Server 3.1.0** or higher
+ **DashScope API Key** (or other LLM service)

#### 1.2 Start Nacos Server
**Download and Start**:

\`\`\`bash
# Linux/Mac
sh bin/startup.sh -m standalone

# Windows
cmd bin/startup.cmd -m standalone
\`\`\`

Verify by accessing the console: [http://localhost:8848/nacos](http://localhost:8848/nacos)

For detailed installation steps, refer to: [Nacos Quick Start](https://nacos.io/docs/latest/guide/start/quick-start/)

---

### Develop Agent
#### 2.1 Add Maven Dependencies
Add to \`pom.xml\`:

> **Version Requirement:** AgentScope and AgentScope Extensions require version 1.0.3 or higher.

\`\`\`xml
<properties>
    <agentscope.version>1.0.3</agentscope.version>
    <agentscope-extensions.version>1.0.3</agentscope-extensions.version>
    <spring-boot.version>3.5.7</spring-boot.version>
</properties>
<dependencies>
    <!-- Spring Boot -->
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-core</artifactId>
        <version>\${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-spring-boot-starter</artifactId>
        <version>\${agentscope.version}</version>
    </dependency>
    <dependency>
        <groupId>io.agentscope</groupId>
        <artifactId>agentscope-a2a-nacos-spring-boot-starter</artifactId>
        <version>\${agentscope-extensions.version}</version>
    </dependency>
    
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>\${spring-boot.version}</version>
    </dependency>

</dependencies>

\`\`\`

#### 2.2 Create Spring Boot Main Class
\`\`\`java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class A2aRegistryExampleApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(A2aRegistryExampleApplication.class, args);
    }
}
\`\`\`

#### 2.3 Create Configuration File
Configure in \`src/main/resources/application.yaml\`:

\`\`\`yaml
server:
  port: 8888

agentscope:
  dashscope:
    api-key: \${AI_DASHSCOPE_API_KEY}
  agent:
    enabled: true
    name: customer-service-agent
    sys-prompt: "You are an intelligent customer service assistant who can answer user questions"
  a2a:
    server:
      card:
        description: "Example of A2A(Agent2Agent) Protocol Agent"
        provider:
          organization: Alibaba Nacos
          url: https://nacos.io
      nacos:
        server-addr: \${NACOS_SERVER_ADDRESS:127.0.0.1:8848}
        username: \${NACOS_USERNAME:nacos}
        password: \${NACOS_PASSWORD:nacos}
\`\`\`

#### 2.4 Core Configuration Explanation
#### Agent Configuration
Configuration related to the Agent itself, used to define the basic properties and behavior of the Agent.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| \`agentscope.dashscope.api-key\` | DashScope API Key | - | Yes |
| \`agentscope.agent.enabled\` | Whether to enable Agent | false | No |
| \`agentscope.agent.name\` | Agent Name | - | Yes |
| \`agentscope.agent.sys-prompt\` | Agent System Prompt | - | Recommended |

#### AgentCard Configuration
AgentCard-related configuration exposed by the Agent through the A2A protocol, used to describe the metadata information of the Agent. More supported fields can be found in the AgentCard definition in the A2A protocol.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| \`agentscope.a2a.server.card.description\` | Agent Description | - | Recommended |
| \`agentscope.a2a.server.card.provider.organization\` | Agent Provider Organization | - | No |
| \`agentscope.a2a.server.card.provider.url\` | Agent Provider URL | - | No |

#### Nacos Configuration
Configuration related to the Nacos agent registry, used to register the Agent to the Nacos agent registry.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| \`agentscope.a2a.server.nacos.server-addr\` | Nacos Server Address | 127.0.0.1:8848 | Yes |
| \`agentscope.a2a.server.nacos.username\` | Nacos Username | - | As Configured |
| \`agentscope.a2a.server.nacos.password\` | Nacos Password | - | As Configured |
| \`agentscope.a2a.server.nacos.namespace\` | Nacos Namespace | public | No |

#### Server Configuration
Basic server configuration used to set server-level parameters such as service listening ports.

| Configuration Item | Description | Default Value | Required |
| --- | --- | --- | --- |
| \`server.port\` | Agent Service Listening Port | 8080 | No |

#### 2.5 MSE Nacos Configuration (Optional)
If using Alibaba Cloud MSE Nacos:

\`\`\`yaml
agentscope:
  a2a:
    server:
      nacos:
        endpoint: \${NACOS_ENDPOINT:your-endpoint.mse.aliyuncs.com}
        namespace: \${NACOS_NAMESPACE:your-namespace-id}
        access-key: \${NACOS_ACCESS_KEY}
        secret-key: \${NACOS_SECRET_KEY}
\`\`\`

#### 2.6 Start Application
Set environment variables:

\`\`\`bash
export AI_DASHSCOPE_API_KEY=your_api_key
export NACOS_USERNAME=nacos
export NACOS_PASSWORD=nacos
\`\`\`

Run the application:

\`\`\`bash
mvn spring-boot:run
\`\`\`

---

### Verify Registration
#### 3.1 Check Logs
Confirm you see the following logs:

\`\`\`plain
Auto register agent customer-service-agent into Registry Nacos.
Auto register agent customer-service-agent into Registry Nacos successfully.
\`\`\`

#### 3.2 Access Nacos Console
1. Open [http://localhost:8848/nacos](http://localhost:8848/nacos)
2. Go to "Agent Management" \u2192 "Agent List"
3. Find the \`customer-service-agent\` Agent
4. Click Details to view Agent Card

![](/img/1770003722281.png)

![](/img/1770003726169.png)

---

## Part 2: Import Nacos Instance into HiMarket
### Import Process
After logging into the HiMarket Admin backend, go to the **"Nacos Instance Management"** page.

![](/img/1770003730199.png)

Click **"Import/Create Instance"** and choose the import method.

### Method A: Import from MSE (Recommended)
#### Step 1: Enter Alibaba Cloud Credentials
Select **"MSE Nacos"** and fill in:

+ **Region**: Alibaba Cloud region (e.g. \`cn-hangzhou\`)
+ **Access Key**: Alibaba Cloud AK
+ **Secret Key**: Alibaba Cloud SK

Click **"Get Instance List"**

![](/img/1770003733781.png)

#### Step 2: Select Instance
Select the target MSE Nacos instance from the list and click **"Import"**

![](/img/1770003737321.png)

#### Step 3: Supplement Information
The system will auto-fill information. Supplement:

+ **Server Address**: Select public or private network address
+ **Username/Password**: Nacos authentication information

Click **"Create"**

![](/img/1770003740974.png)

### Method B: Manually Create Open Source Nacos
Select **"Open Source Nacos"** and manually fill in:

+ **Instance Name**: e.g. "Development Environment Nacos"
+ **Server Address**: e.g. \`http://localhost:8848\`
+ **Username/Password**: Nacos authentication information
+ **Description**: Instance description

Click **"Create"**

---

## Part 3: Create and Associate Agent Product
### Create Product
#### 1. Go to API Products
Click **"API Products"** in the left navigation

![](/img/1770003744277.png)

#### 2. Create Product
Click **"Create API Product"** and fill in:

| Field | Description | Example |
| --- | --- | --- |
| Name | User-facing product name | customer-service-agent |
| Type | Agent API | Agent API |
| Description | Brief functional description | Intelligent Customer Service Assistant |
| Icon Setting | Product icon URL | (Optional) |
| Category | Category tag | "Customer Service" |

![](/img/1770003748448.png)

Click **"Create"**

---

### Associate Nacos Agent
#### 1. Go to Association Page
Go to the product details page and click the **"Link API"** tab, then click **"Associate API"**

![](/img/1770003752210.png)

#### 2. Select Data Source
In the pop-up dialog:

**Step 1**: Select **"Nacos"** as the data source type

**Step 2**: Select the previously imported **Nacos Instance**

**Step 3**: Select **Namespace** (e.g. \`public\`)

**Step 4**: Select **Agent** (e.g. \`customer-service-agent\`)

![](/img/1770003755220.png)

#### 3. Confirm Association
Click **"Associate"**, and the system will:

1. Connect to the Nacos instance
2. Pull the complete Agent configuration (Agent Card, protocol, routing, etc.)
3. Save to HiMarket database
4. Update product status to **READY**

After successful association, you can view the Agent configuration details:

![](/img/1770003759322.png)

The configuration includes:

+ **Supported Protocols**: a2a, http
+ **Agent Card**: Name, Version, Description, URL
+ **Skill List**: Agent capability tags

---

### Improve Usage Documentation (Optional)
Click the **"Usage Guide"** tab and write usage instructions (Markdown format):

![](/img/1770003763422.png)

---

## Part 4: Publish to Portal
### Publishing Process
#### 1. Go to Publishing Page
Click the **"Portal"** tab

![](/img/1770003767157.png)

#### 2. Select Portal
Click **"Publish to Portal"** and select target portals (multiple selections allowed):

![](/img/1770003770264.png)

#### 3. Confirm Publication
Click **"Publish"** and the product will be discoverable and usable by users on the portal.

---

### User Access
After users access the HiMarket portal:

1. **Browse Agent Market**: Click "Agents" on the homepage
2. **Search for Agent**: Use keywords to search or filter by category
3. **View Details**: Click the Agent card to go to the details page
4. **View Configuration**:
    - **Overview Tab**: View usage guide
    - **Configuration Tab**: View Agent Card, protocols, routing, and other technical information
5. **Invoke Agent**: Call the Agent API according to the configuration information

![](/img/1770003773903.png)

---

## FAQ
### Q1: Agent registration to Nacos failed?
**Possible Causes**:

+ Nacos Server not started or inaccessible
+ Nacos Server version lower than 3.1.0
+ Incorrect authentication information

**Solutions**:

+ Confirm Nacos Server is running properly
+ Check \`server-addr\`, \`username\`, \`password\` configuration
+ Check detailed error messages in application logs

---

### Q2: Cannot find registered Agent in HiMarket?
**Possible Causes**:

+ Nacos instance not correctly imported into HiMarket
+ Incorrect namespace selection
+ Agent registration failed

**Solutions**:

+ Verify Nacos instance connection in HiMarket
+ Confirm Agent is registered in Nacos console
+ Check if namespace configuration is consistent

---

### Q3: Incomplete configuration information after association?
**Possible Causes**:

+ Agent configuration in Nacos does not conform to A2A specification
+ Network issues causing configuration pull failure

**Solutions**:

+ Check Agent metadata in Nacos console
+ Ensure Agent Card information is complete
+ Try unlinking and re-associating

---

### Q4: How to update Agent configuration?
**Update Process**:

1. Modify configuration in Agent code
2. Restart Agent application to re-register to Nacos
3. Click **"Unlink"** on the HiMarket product details page
4. Re-associate the same Agent
5. System will pull the latest configuration

**Note**: Unlinking will not delete the product, only disconnect from the Agent.

---

### Q5: Users cannot see the product after publication?
**Checklist**:

- [ ] Is the product status **READY** or **PUBLISHED**
- [ ] Has it been successfully published to the target portal
- [ ] Is the portal address accessed by users correct
- [ ] Do users have access permissions to that portal

---

## Complete Example Code
The code examples in this document show key configurations. For a complete, runnable example project, please refer to:

**\u{1F4E6}**** GitHub Sample Project**: [agentscope-extensions-nacos/java/example/a2a-example](https://github.com/nacos-group/agentscope-extensions-nacos/tree/main/java/example/a2a-example)

Includes:

+ Agent registration example
+ Agent discovery and invocation example
+ Complete Maven project configuration
+ Detailed README instructions

---

## More Resources
+ [AgentScope Official Documentation](https://agentscope.io)
+ [Nacos Official Documentation](https://nacos.io)
+ [AgentScope Extensions Nacos GitHub](https://github.com/nacos-group/agentscope-extensions-nacos)
+ [HiMarket Product Documentation](./README.md)

---`},i=function(){return e},r=function(){return[{depth:2,slug:"table-of-contents",text:"Table of Contents"},{depth:2,slug:"overview",text:"Overview"},{depth:3,slug:"what-is-agentscope",text:"What is AgentScope?"},{depth:3,slug:"technical-architecture",text:"Technical Architecture"},{depth:3,slug:"core-concepts",text:"Core Concepts"},{depth:3,slug:"language-support",text:"Language Support"},{depth:2,slug:"part-1-develop-and-register-agentscope-agent-to-nacos",text:"Part 1: Develop and Register AgentScope Agent to Nacos"},{depth:3,slug:"environment-preparation",text:"Environment Preparation"},{depth:4,slug:"11-prerequisites",text:"1.1 Prerequisites"},{depth:4,slug:"12-start-nacos-server",text:"1.2 Start Nacos Server"},{depth:3,slug:"develop-agent",text:"Develop Agent"},{depth:4,slug:"21-add-maven-dependencies",text:"2.1 Add Maven Dependencies"},{depth:4,slug:"22-create-spring-boot-main-class",text:"2.2 Create Spring Boot Main Class"},{depth:4,slug:"23-create-configuration-file",text:"2.3 Create Configuration File"},{depth:4,slug:"24-core-configuration-explanation",text:"2.4 Core Configuration Explanation"},{depth:4,slug:"agent-configuration",text:"Agent Configuration"},{depth:4,slug:"agentcard-configuration",text:"AgentCard Configuration"},{depth:4,slug:"nacos-configuration",text:"Nacos Configuration"},{depth:4,slug:"server-configuration",text:"Server Configuration"},{depth:4,slug:"25-mse-nacos-configuration-optional",text:"2.5 MSE Nacos Configuration (Optional)"},{depth:4,slug:"26-start-application",text:"2.6 Start Application"},{depth:3,slug:"verify-registration",text:"Verify Registration"},{depth:4,slug:"31-check-logs",text:"3.1 Check Logs"},{depth:4,slug:"32-access-nacos-console",text:"3.2 Access Nacos Console"},{depth:2,slug:"part-2-import-nacos-instance-into-himarket",text:"Part 2: Import Nacos Instance into HiMarket"},{depth:3,slug:"import-process",text:"Import Process"},{depth:3,slug:"method-a-import-from-mse-recommended",text:"Method A: Import from MSE (Recommended)"},{depth:4,slug:"step-1-enter-alibaba-cloud-credentials",text:"Step 1: Enter Alibaba Cloud Credentials"},{depth:4,slug:"step-2-select-instance",text:"Step 2: Select Instance"},{depth:4,slug:"step-3-supplement-information",text:"Step 3: Supplement Information"},{depth:3,slug:"method-b-manually-create-open-source-nacos",text:"Method B: Manually Create Open Source Nacos"},{depth:2,slug:"part-3-create-and-associate-agent-product",text:"Part 3: Create and Associate Agent Product"},{depth:3,slug:"create-product",text:"Create Product"},{depth:4,slug:"1-go-to-api-products",text:"1. Go to API Products"},{depth:4,slug:"2-create-product",text:"2. Create Product"},{depth:3,slug:"associate-nacos-agent",text:"Associate Nacos Agent"},{depth:4,slug:"1-go-to-association-page",text:"1. Go to Association Page"},{depth:4,slug:"2-select-data-source",text:"2. Select Data Source"},{depth:4,slug:"3-confirm-association",text:"3. Confirm Association"},{depth:3,slug:"improve-usage-documentation-optional",text:"Improve Usage Documentation (Optional)"},{depth:2,slug:"part-4-publish-to-portal",text:"Part 4: Publish to Portal"},{depth:3,slug:"publishing-process",text:"Publishing Process"},{depth:4,slug:"1-go-to-publishing-page",text:"1. Go to Publishing Page"},{depth:4,slug:"2-select-portal",text:"2. Select Portal"},{depth:4,slug:"3-confirm-publication",text:"3. Confirm Publication"},{depth:3,slug:"user-access",text:"User Access"},{depth:2,slug:"faq",text:"FAQ"},{depth:3,slug:"q1-agent-registration-to-nacos-failed",text:"Q1: Agent registration to Nacos failed?"},{depth:3,slug:"q2-cannot-find-registered-agent-in-himarket",text:"Q2: Cannot find registered Agent in HiMarket?"},{depth:3,slug:"q3-incomplete-configuration-information-after-association",text:"Q3: Incomplete configuration information after association?"},{depth:3,slug:"q4-how-to-update-agent-configuration",text:"Q4: How to update Agent configuration?"},{depth:3,slug:"q5-users-cannot-see-the-product-after-publication",text:"Q5: Users cannot see the product after publication?"},{depth:2,slug:"complete-example-code",text:"Complete Example Code"},{depth:2,slug:"more-resources",text:"More Resources"}]},t=c((f,y,m)=>{const{layout:A,...o}=a;return o.file=s,o.url=n,d`${g()}${u(e)}`})});export{t as Content,h as __tla,i as compiledContent,t as default,s as file,a as frontmatter,r as getHeadings,p as rawContent,n as url};
