import{c as l,__tla as c}from"./astro-component.YcfuVWta.js";import{r as p,m,u as E,__tla as u}from"./constant.Cx6UCuye.js";import{__tla as y}from"./astro/assets-service.r1ocst81.js";let e,d,s,a,r,o,i,v=Promise.all([(()=>{try{return c}catch{}})(),(()=>{try{return u}catch{}})(),(()=>{try{return y}catch{}})()]).then(async()=>{let t;t=`<h2 id="1-local-setup">1. Local Setup</h2>
<p><strong>Environment Dependencies:</strong> JDK 17, Node.js 18+, Maven 3.6+, MySQL 8.0+</p>
<p><strong>Start Backend:</strong></p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.1vui4.css"><script type="module" src="/_astro/ec.dy9ns.js"><\/script><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Build project</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">mvn</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clean</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">package</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">-DskipTests</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Start backend service</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">java</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">--add-opens</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">java.base/java.util=ALL-UNNAMED</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">--add-opens</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">java.base/java.lang=ALL-UNNAMED</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">--add-opens</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">java.base/java.lang.reflect=ALL-UNNAMED</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-Ddb.host=\${</span><span style="--0:#E1E4E8">DB_HOST</span><span style="--0:#79B8FF">}</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-Ddb.port=\${</span><span style="--0:#E1E4E8">DB_PORT</span><span style="--0:#79B8FF">}</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-Ddb.name=\${</span><span style="--0:#E1E4E8">DB_NAME</span><span style="--0:#79B8FF">}</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-Ddb.username=\${</span><span style="--0:#E1E4E8">DB_USERNAME</span><span style="--0:#79B8FF">}</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-Ddb.password=\${</span><span style="--0:#E1E4E8">DB_PASSWORD</span><span style="--0:#79B8FF">}</span><span style="--0:#E1E4E8"> </span><span style="--0:#79B8FF">\\</span></div></div><div class="ec-line"><div class="code"><span class="indent">     </span><span style="--0:#79B8FF">-jar</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-bootstrap/target/himarket-bootstrap-1.0-SNAPSHOT.jar</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Backend API address: http://localhost:8080</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="mvn clean package -DskipTests\x7Fjava --add-opens java.base/java.util=ALL-UNNAMED \\\x7F     --add-opens java.base/java.lang=ALL-UNNAMED \\\x7F     --add-opens java.base/java.lang.reflect=ALL-UNNAMED \\\x7F     -Ddb.host=\${DB_HOST} \\\x7F     -Ddb.port=\${DB_PORT} \\\x7F     -Ddb.name=\${DB_NAME} \\\x7F     -Ddb.username=\${DB_USERNAME} \\\x7F     -Ddb.password=\${DB_PASSWORD} \\\x7F     -jar himarket-bootstrap/target/himarket-bootstrap-1.0-SNAPSHOT.jar"><div></div></button></div></figure></div>
<p><strong>Start Frontend:</strong></p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Start management console</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-web/himarket-admin</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">npm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">npm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dev</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Management console address: http://localhost:5174</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Start developer portal</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-web/himarket-frontend</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">npm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">npm</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">run</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">dev</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Developer portal address: http://localhost:5173</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd himarket-web/himarket-admin\x7Fnpm install\x7Fnpm run dev\x7Fcd himarket-web/himarket-frontend\x7Fnpm install\x7Fnpm run dev"><div></div></button></div></figure></div>
<h2 id="2-docker-compose-deployment">2. Docker Compose Deployment</h2>
<p>Includes seven service components:</p>
<ul>
<li><strong>mysql:</strong> Database service, providing data storage for backend services;</li>
<li><strong>himarket-server:</strong> Backend service, running on port 8081;</li>
<li><strong>himarket-admin:</strong> Management console interface, running on port 5174, for administrators to configure Portal;</li>
<li><strong>himarket-frontend:</strong> Frontend user interface, running on port 5173, for users to browse and use API Products;</li>
<li><strong>Higress:</strong> Higress all-in-one gateway service, running on ports 8443, 8082, 8001, with console running on port 8001 for user access;</li>
<li><strong>Redis:</strong> Higress cache service;</li>
<li><strong>Nacos:</strong> Nacos service, running on ports 8080, 8848, 9848, with console running on port 8080 for user access.</li>
</ul>
<h3 id="installation-commands">Installation Commands</h3>
<p><strong>Environment Dependencies:</strong> docker, docker compose, curl, jq</p>
<p><strong>One-Click Startup:</strong> Use the <code dir="auto">deploy.sh</code> script to complete full-stack deployment and data initialization of HiMarket, Higress, and Nacos.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Clone project</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clone</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/higress-group/himarket.git</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket/deploy/docker/scripts</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Deploy full-stack services and initialize</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./deploy.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Or deploy only Himarket services (without Nacos/Higress)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./deploy.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-only</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Uninstall all services</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./deploy.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstall</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Service addresses</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Management console address: http://localhost:5174</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Developer portal address: http://localhost:5173</span></div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Backend API address: http://localhost:8081</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git clone https://github.com/higress-group/himarket.git\x7Fcd himarket/deploy/docker/scripts\x7F./deploy.sh install\x7F./deploy.sh himarket-only\x7F./deploy.sh uninstall"><div></div></button></div></figure></div>
<p>The script will <strong>execute data initialization hooks</strong> after deployment: performs login data initialization, example MCP data initialization, and API product data initialization. Note that the script includes <strong>deployment</strong> and <strong>data initialization</strong> parts. Data initialization execution does not block deployment. If data initialization hooks fail, they can be retried in <code dir="auto">/scripts/hooks/post_ready.d</code>. For example:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">docker/scripts/hooks/post_ready.d</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Retry failed script</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./10-init-nacos-admin.sh</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd docker/scripts/hooks/post_ready.d\x7F./10-init-nacos-admin.sh"><div></div></button></div></figure></div>
<h3 id="installation-configuration">Installation Configuration</h3>
<p>All configurations are centralized in the <code dir="auto">scripts/data/.env</code> file:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">docker/scripts/data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">vi</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">.env</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd docker/scripts/data\x7Fvi .env"><div></div></button></div></figure></div>


















































































































































































































<table><thead><tr><th>Configuration Name</th><th>Configuration Description</th><th><strong>Default Value</strong></th></tr></thead><tbody><tr><td>MYSQL_ROOT_PASSWORD</td><td>MySQL Root password</td><td>123456</td></tr><tr><td>MYSQL_DATABASE</td><td>MySQL database name</td><td>portal_db</td></tr><tr><td>MYSQL_USER</td><td>MySQL username</td><td>portal_user</td></tr><tr><td>MYSQL_PASSWORD</td><td>MySQL password</td><td>portal_pass</td></tr><tr><td>USE_BUILTIN_MYSQL</td><td>Whether to use built-in MySQL (true/false)</td><td>true</td></tr><tr><td>DB_HOST</td><td>Database address (required when using external database)</td><td>mysql</td></tr><tr><td>DB_PORT</td><td>Database port (required when using external database)</td><td>3306</td></tr><tr><td>DB_NAME</td><td>Database name (required when using external database)</td><td>portal_db</td></tr><tr><td>DB_USERNAME</td><td>Database username (required when using external database)</td><td>portal_user</td></tr><tr><td>DB_PASSWORD</td><td>Database password (required when using external database)</td><td>portal_pass</td></tr><tr><td>USE_COMMERCIAL_NACOS</td><td>Whether to use commercial Nacos (true/false), skips Nacos deployment if used</td><td>false</td></tr><tr><td>COMMERCIAL_NACOS_NAME</td><td>Commercial Nacos instance name</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_SERVER_URL</td><td>Commercial Nacos service address</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_USERNAME</td><td>Commercial Nacos username (required for commercial Nacos MCP data import)</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_PASSWORD</td><td>Commercial Nacos password (required for commercial Nacos MCP data import)</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_ACCESS_KEY</td><td>Commercial Nacos AccessKey</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_SECRET_KEY</td><td>Commercial Nacos SecretKey</td><td>Empty</td></tr><tr><td>USE_AI_GATEWAY</td><td>Whether to use AI Gateway (true/false), skips Higress deployment and related initialization scripts if used</td><td>false</td></tr><tr><td>AI_GATEWAY_ID</td><td>AI Gateway instance ID</td><td>Empty</td></tr><tr><td>AI_GATEWAY_NAME</td><td>AI Gateway instance name</td><td>Empty</td></tr><tr><td>AI_GATEWAY_REGION</td><td>AI Gateway region</td><td>Empty</td></tr><tr><td>AI_GATEWAY_ACCESS_KEY</td><td>AI Gateway AccessKey</td><td>Empty</td></tr><tr><td>AI_GATEWAY_SECRET_KEY</td><td>AI Gateway SecretKey</td><td>Empty</td></tr><tr><td>NACOS_ADMIN_PASSWORD</td><td>Nacos administrator password</td><td>nacos</td></tr><tr><td>HIGRESS_USERNAME</td><td>Higress login username</td><td>admin</td></tr><tr><td>HIGRESS_PASSWORD</td><td>Higress login password</td><td>admin</td></tr><tr><td>ADMIN_USERNAME</td><td>Backend administrator username</td><td>admin</td></tr><tr><td>ADMIN_PASSWORD</td><td>Backend administrator password</td><td>admin</td></tr><tr><td>FRONT_USERNAME</td><td>Frontend default username</td><td>demo</td></tr><tr><td>FRONT_PASSWORD</td><td>Frontend default password</td><td>demo123</td></tr><tr><td>NACOS_IMAGE</td><td>Nacos image address</td><td>nacos-registry.cn-hangzhou.cr.aliyuncs.com/nacos/nacos-server:v3
.1.1</td></tr><tr><td>NACOS_AUTH_IDENTITY_KEY</td><td>Nacos authentication identity key</td><td>serverIdentity</td></tr><tr><td>NACOS_AUTH_IDENTITY_VALUE</td><td>Nacos authentication identity value</td><td>security</td></tr><tr><td>NACOS_AUTH_TOKEN</td><td>Nacos authentication token</td><td>VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg=</td></tr><tr><td>HIGRESS_IMAGE</td><td>Higress image address</td><td>higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
</td></tr><tr><td>HIMARKET_SERVER_IMAGE</td><td>Himarket backend service image</td><td>opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-server:latest
</td></tr><tr><td>HIMARKET_ADMIN_IMAGE</td><td>Himarket management console image</td><td>opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-admin:latest
</td></tr><tr><td>HIMARKET_FRONTEND_IMAGE</td><td>Himarket frontend service image</td><td>opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-frontend:latest
</td></tr><tr><td>REDIS_IMAGE</td><td>Redis image address</td><td>higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3</td></tr><tr><td>MYSQL_IMAGE</td><td>MySQL image address</td><td>opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/mysql:latest
</td></tr></tbody></table>
<h2 id="3-cloud-native-deployment-with-helm">3. Cloud-Native Deployment with Helm</h2>
<p>Helm is a package management system for automating Kubernetes software management and release. Through the Helm one-click deployment script, you can quickly deploy and install HiMarket+Higress+Nacos on a Kubernetes cluster, including ten service components:</p>
<ul>
<li><strong>HiMarket:</strong>
<ul>
<li>himarket-server: HiMarket AI open platform backend service;</li>
<li>himarket-admin: HiMarket AI open platform management console, administrators configure Portal through this interface;</li>
<li>himarket-frontend: HiMarket AI open platform frontend service, users browse and use APIs through this interface;</li>
<li>mysql: Optional built-in database.</li>
</ul>
</li>
<li><strong>Higress:</strong>
<ul>
<li>higress-console: Console, users browse and use Higress service through this interface;</li>
<li>higress-controller: Control plane component, responsible for managing configuration distribution;</li>
<li>higress-gateway: Data plane component, responsible for carrying data traffic;</li>
<li>redis-stack-server: Cache component.</li>
</ul>
</li>
<li><strong>Nacos:</strong>
<ul>
<li>nacos: Nacos application;</li>
<li>nacos-mysql: Nacos database.</li>
</ul>
</li>
</ul>
<p><strong>Service Type Description:</strong></p>
<p>Default is LoadBalancer type service, suitable for cloud environments (Alibaba Cloud ACK, AWS EKS, etc.). If your environment does not support LoadBalancer (such as local minikube, self-built clusters), you can use NodePort or port forwarding to access. After configuring Himarket in the backend, resolve the domain name to the himarket-frontend service access address, and users can access the frontend site through the domain name.</p>
<h3 id="installation-commands-1">Installation Commands</h3>
<p><strong>Environment Dependencies:</strong> kubectl, python3/python, curl, jq</p>
<p><strong>One-Click Startup:</strong> Use the <code dir="auto">deploy.sh</code> script to deploy HiMarket to a Kubernetes cluster.</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Clone project</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">git</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">clone</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">https://github.com/higress-group/himarket.git</span></div></div><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket/deploy/helm/scripts</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Deploy full-stack services and initialize</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./deploy.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">install</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Or deploy only Himarket services (without Nacos/Higress)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./deploy.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">himarket-only</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Uninstall</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./deploy.sh</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">uninstall</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="git clone https://github.com/higress-group/himarket.git\x7Fcd himarket/deploy/helm/scripts\x7F./deploy.sh install\x7F./deploy.sh himarket-only\x7F./deploy.sh uninstall"><div></div></button></div></figure></div>
<p>The script will <strong>execute data initialization hooks</strong> after deployment: performs login data initialization, example MCP data initialization, and API product data initialization. Note that the script includes <strong>deployment</strong> and <strong>data initialization</strong> parts. Data initialization execution does not block deployment. If data initialization hooks fail, they can be retried in <code dir="auto">/scripts/hooks/post_ready.d</code>. For example:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">helm/scripts/hooks/post_ready.d</span></div></div><div class="ec-line"><div class="code">
</div></div><div class="ec-line"><div class="code"><span style="--0:#99A0A6"># Retry failed script</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">./10-init-nacos-admin.sh</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd helm/scripts/hooks/post_ready.d\x7F./10-init-nacos-admin.sh"><div></div></button></div></figure></div>
<h3 id="installation-configuration-1">Installation Configuration</h3>
<p>Related configurations are centralized in the <code dir="auto">scripts/data/.env</code> file:</p>
<div class="expressive-code"><figure class="frame is-terminal not-content"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre tabindex="0"><code><div class="ec-line"><div class="code"><span style="--0:#79B8FF">cd</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">helm/scripts/data</span></div></div><div class="ec-line"><div class="code"><span style="--0:#B392F0">vi</span><span style="--0:#E1E4E8"> </span><span style="--0:#9ECBFF">.env</span></div></div></code></pre><div class="copy"><button title="Copy to clipboard" data-copied="Copied!" data-code="cd helm/scripts/data\x7Fvi .env"><div></div></button></div></figure></div>




























































































































































































































<table><thead><tr><th>Configuration Name</th><th>Configuration Description</th><th><strong>Default Value</strong></th></tr></thead><tbody><tr><td>NAMESPACE</td><td>Kubernetes namespace</td><td>himarket-system</td></tr><tr><td>HIMARKET_ONLY</td><td>Deploy only Himarket (skip Nacos/Higress)</td><td>false</td></tr><tr><td>HIMARKET_IMAGE_TAG</td><td>Himarket image tag</td><td>latest</td></tr><tr><td>HIMARKET_MYSQL_IMAGE_TAG</td><td>MySQL image tag</td><td>latest</td></tr><tr><td>HIMARKET_MYSQL_ENABLED</td><td>Whether to use built-in MySQL (true/false)</td><td>true</td></tr><tr><td>EXTERNAL_DB_HOST</td><td>External database address (used when HIMARKET_MYSQL_ENABLED=false)</td><td>Your_External_DB_Host</td></tr><tr><td>EXTERNAL_DB_PORT</td><td>External database port</td><td>3306</td></tr><tr><td>EXTERNAL_DB_NAME</td><td>External database name</td><td>Your_DB_Name</td></tr><tr><td>EXTERNAL_DB_USERNAME</td><td>External database username</td><td>Your_DB_Username</td></tr><tr><td>EXTERNAL_DB_PASSWORD</td><td>External database password</td><td>Your_DB_Password</td></tr><tr><td>USE_COMMERCIAL_NACOS</td><td>Whether to use commercial Nacos (true/false), skips Nacos deployment if used</td><td>false</td></tr><tr><td>COMMERCIAL_NACOS_NAME</td><td>Commercial Nacos instance name</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_SERVER_URL</td><td>Commercial Nacos service address</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_USERNAME</td><td>Commercial Nacos username (required for commercial Nacos MCP data import)</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_PASSWORD</td><td>Commercial Nacos password (required for commercial Nacos MCP data import)</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_ACCESS_KEY</td><td>Commercial Nacos AccessKey</td><td>Empty</td></tr><tr><td>COMMERCIAL_NACOS_SECRET_KEY</td><td>Commercial Nacos SecretKey</td><td>Empty</td></tr><tr><td>USE_AI_GATEWAY</td><td>Whether to use AI Gateway (true/false), skips Higress deployment and related initialization scripts if used</td><td>false</td></tr><tr><td>AI_GATEWAY_ID</td><td>AI Gateway instance ID</td><td>Empty</td></tr><tr><td>AI_GATEWAY_NAME</td><td>AI Gateway instance name</td><td>Empty</td></tr><tr><td>AI_GATEWAY_REGION</td><td>AI Gateway region</td><td>Empty</td></tr><tr><td>AI_GATEWAY_ACCESS_KEY</td><td>AI Gateway AccessKey</td><td>Empty</td></tr><tr><td>AI_GATEWAY_SECRET_KEY</td><td>AI Gateway SecretKey</td><td>Empty</td></tr><tr><td>NACOS_ADMIN_PASSWORD</td><td>Nacos administrator password</td><td>nacos</td></tr><tr><td>HIGRESS_USERNAME</td><td>Higress login username</td><td>admin</td></tr><tr><td>HIGRESS_PASSWORD</td><td>Higress login password</td><td>admin</td></tr><tr><td>ADMIN_USERNAME</td><td>Backend administrator username</td><td>admin</td></tr><tr><td>ADMIN_PASSWORD</td><td>Backend administrator password</td><td>admin</td></tr><tr><td>FRONT_USERNAME</td><td>Frontend default username</td><td>demo</td></tr><tr><td>FRONT_PASSWORD</td><td>Frontend default password</td><td>demo123</td></tr><tr><td>NACOS_VERSION</td><td>Nacos image version</td><td>v3.1.1</td></tr><tr><td>NACOS_IMAGE_REGISTRY</td><td>Nacos image registry</td><td>nacos-registry.cn-hangzhou.cr.aliyuncs.com</td></tr><tr><td>NACOS_IMAGE_REPOSITORY</td><td>Nacos image address</td><td>nacos/nacos-server</td></tr><tr><td>HIGRESS_REPO_NAME</td><td>Higress Helm repository name</td><td>higress.io</td></tr><tr><td>HIGRESS_REPO_URL</td><td>Higress Helm repository URL</td><td><a href="https://higress.cn/helm-charts" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://higress.cn/helm-charts</a></td></tr><tr><td>HIGRESS_CHART_REF</td><td>Higress Chart reference</td><td>higress.io/higress</td></tr><tr><td>NACOS_REPO_NAME</td><td>Nacos Helm repository name</td><td>ygqygq2</td></tr><tr><td>NACOS_REPO_URL</td><td>Nacos Helm repository URL</td><td><a href="https://ygqygq2.github.io/charts/" referrerpolicy="unsafe-url" rel="nofollow" target="_blank">https://ygqygq2.github.io/charts/</a></td></tr><tr><td>NACOS_CHART_REF</td><td>Nacos Chart reference</td><td>ygqygq2/nacos</td></tr><tr><td>HIMARKET_HUB</td><td>Himarket image registry address</td><td>opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group</td></tr><tr><td>HIMARKET_IMAGE_TAG</td><td>Himarket image tag</td><td>latest</td></tr><tr><td>HIMARKET_MYSQL_IMAGE_TAG</td><td>MySQL image tag</td><td>latest</td></tr></tbody></table>
<p>Note: HiMarket\u2019s Helm package is adapted for Alibaba Cloud ACK cluster use. The storage class persistence.storageClass: \u201Calicloud-disk-essd\u201D value in the /helm/values.yaml file needs to be adjusted according to the actual environment.</p>
<h2 id="4-cloud-platform-deployment-alibaba-cloud">4. Cloud Platform Deployment (Alibaba Cloud)</h2>
<p>Alibaba Cloud Computing Nest supports the out-of-the-box version of this project, with one-click deployment of the community edition: <a href="https://computenest.console.aliyun.com/service/instance/create/cn-hangzhou?type=user&#x26;ServiceId=service-b96fefcb748f47b7b958" referrerpolicy="unsafe-url" rel="nofollow" target="_blank"><img src="https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg" alt="Deploy on AlibabaCloud ComputeNest" referrerpolicy="no-referrer"></a></p>`,a={title:"HiMarket Deployment Guide",description:"HiMarket quick deployment and installation configuration guide",date:"2025-12-12",category:"article",keywords:["HiMarket","Deployment","Installation"],authors:"Higress Team"},s="/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/ai/en/himarket/himarket-deployment.md",i=void 0,o=function(){return`
# HiMarket Deployment Guide

## 1. Local Setup

**Environment Dependencies:** JDK 17, Node.js 18+, Maven 3.6+, MySQL 8.0+

**Start Backend:**

\`\`\`bash
# Build project
mvn clean package -DskipTests

# Start backend service
java --add-opens java.base/java.util=ALL-UNNAMED \\
     --add-opens java.base/java.lang=ALL-UNNAMED \\
     --add-opens java.base/java.lang.reflect=ALL-UNNAMED \\
     -Ddb.host=\${DB_HOST} \\
     -Ddb.port=\${DB_PORT} \\
     -Ddb.name=\${DB_NAME} \\
     -Ddb.username=\${DB_USERNAME} \\
     -Ddb.password=\${DB_PASSWORD} \\
     -jar himarket-bootstrap/target/himarket-bootstrap-1.0-SNAPSHOT.jar

# Backend API address: http://localhost:8080
\`\`\`

**Start Frontend:**

\`\`\`bash
# Start management console
cd himarket-web/himarket-admin
npm install
npm run dev
# Management console address: http://localhost:5174

# Start developer portal
cd himarket-web/himarket-frontend
npm install
npm run dev
# Developer portal address: http://localhost:5173
\`\`\`

## 2. Docker Compose Deployment

Includes seven service components:

+ **mysql:** Database service, providing data storage for backend services;
+ **himarket-server:** Backend service, running on port 8081;
+ **himarket-admin:** Management console interface, running on port 5174, for administrators to configure Portal;
+ **himarket-frontend:** Frontend user interface, running on port 5173, for users to browse and use API Products;
+ **Higress:** Higress all-in-one gateway service, running on ports 8443, 8082, 8001, with console running on port 8001 for user access;
+ **Redis:** Higress cache service;
+ **Nacos:** Nacos service, running on ports 8080, 8848, 9848, with console running on port 8080 for user access.

### Installation Commands

**Environment Dependencies:** docker, docker compose, curl, jq

**One-Click Startup:** Use the \`deploy.sh\` script to complete full-stack deployment and data initialization of HiMarket, Higress, and Nacos.

\`\`\`bash
# Clone project
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/docker/scripts

# Deploy full-stack services and initialize
./deploy.sh install

# Or deploy only Himarket services (without Nacos/Higress)
./deploy.sh himarket-only

# Uninstall all services
./deploy.sh uninstall

# Service addresses
# Management console address: http://localhost:5174
# Developer portal address: http://localhost:5173
# Backend API address: http://localhost:8081
\`\`\`

The script will **execute data initialization hooks** after deployment: performs login data initialization, example MCP data initialization, and API product data initialization. Note that the script includes **deployment** and **data initialization** parts. Data initialization execution does not block deployment. If data initialization hooks fail, they can be retried in \`/scripts/hooks/post_ready.d\`. For example:

\`\`\`bash
cd docker/scripts/hooks/post_ready.d

# Retry failed script
./10-init-nacos-admin.sh
\`\`\`

### Installation Configuration

All configurations are centralized in the \`scripts/data/.env\` file:

\`\`\`bash
cd docker/scripts/data
vi .env
\`\`\`

| Configuration Name | Configuration Description | **Default Value** |
| --- | --- | --- |
| MYSQL_ROOT_PASSWORD | MySQL Root password | 123456 |
| MYSQL_DATABASE | MySQL database name | portal_db |
| MYSQL_USER | MySQL username | portal_user |
| MYSQL_PASSWORD | MySQL password | portal_pass |
| USE_BUILTIN_MYSQL | Whether to use built-in MySQL (true/false) | true |
| DB_HOST | Database address (required when using external database) | mysql |
| DB_PORT | Database port (required when using external database) | 3306 |
| DB_NAME | Database name (required when using external database) | portal_db |
| DB_USERNAME | Database username (required when using external database) | portal_user |
| DB_PASSWORD | Database password (required when using external database) | portal_pass |
| USE_COMMERCIAL_NACOS | Whether to use commercial Nacos (true/false), skips Nacos deployment if used | false |
| COMMERCIAL_NACOS_NAME | Commercial Nacos instance name | Empty |
| COMMERCIAL_NACOS_SERVER_URL | Commercial Nacos service address | Empty |
| COMMERCIAL_NACOS_USERNAME | Commercial Nacos username (required for commercial Nacos MCP data import) | Empty |
| COMMERCIAL_NACOS_PASSWORD | Commercial Nacos password (required for commercial Nacos MCP data import) | Empty |
| COMMERCIAL_NACOS_ACCESS_KEY | Commercial Nacos AccessKey | Empty |
| COMMERCIAL_NACOS_SECRET_KEY | Commercial Nacos SecretKey | Empty |
| USE_AI_GATEWAY | Whether to use AI Gateway (true/false), skips Higress deployment and related initialization scripts if used | false |
| AI_GATEWAY_ID | AI Gateway instance ID | Empty |
| AI_GATEWAY_NAME | AI Gateway instance name | Empty |
| AI_GATEWAY_REGION | AI Gateway region | Empty |
| AI_GATEWAY_ACCESS_KEY | AI Gateway AccessKey | Empty |
| AI_GATEWAY_SECRET_KEY | AI Gateway SecretKey | Empty |
| NACOS_ADMIN_PASSWORD | Nacos administrator password | nacos |
| HIGRESS_USERNAME | Higress login username | admin |
| HIGRESS_PASSWORD | Higress login password | admin |
| ADMIN_USERNAME | Backend administrator username | admin |
| ADMIN_PASSWORD | Backend administrator password | admin |
| FRONT_USERNAME | Frontend default username | demo |
| FRONT_PASSWORD | Frontend default password | demo123 |
| NACOS_IMAGE | Nacos image address | nacos-registry.cn-hangzhou.cr.aliyuncs.com/nacos/nacos-server:v3.1.1 |
| NACOS_AUTH_IDENTITY_KEY | Nacos authentication identity key | serverIdentity |
| NACOS_AUTH_IDENTITY_VALUE | Nacos authentication identity value | security |
| NACOS_AUTH_TOKEN | Nacos authentication token | VGhpc0lzTXlDdXN0b21TZWNyZXRLZXkwMTIzNDU2Nzg= |
| HIGRESS_IMAGE | Higress image address | higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest |
| HIMARKET_SERVER_IMAGE | Himarket backend service image | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-server:latest |
| HIMARKET_ADMIN_IMAGE | Himarket management console image | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-admin:latest |
| HIMARKET_FRONTEND_IMAGE | Himarket frontend service image | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/himarket-frontend:latest |
| REDIS_IMAGE | Redis image address | higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/redis-stack-server:7.4.0-v3 |
| MYSQL_IMAGE | MySQL image address | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group/mysql:latest |


## 3. Cloud-Native Deployment with Helm

Helm is a package management system for automating Kubernetes software management and release. Through the Helm one-click deployment script, you can quickly deploy and install HiMarket+Higress+Nacos on a Kubernetes cluster, including ten service components:

+ **HiMarket:**
    - himarket-server: HiMarket AI open platform backend service;
    - himarket-admin: HiMarket AI open platform management console, administrators configure Portal through this interface;
    - himarket-frontend: HiMarket AI open platform frontend service, users browse and use APIs through this interface;
    - mysql: Optional built-in database.
+ **Higress:**
    - higress-console: Console, users browse and use Higress service through this interface;
    - higress-controller: Control plane component, responsible for managing configuration distribution;
    - higress-gateway: Data plane component, responsible for carrying data traffic;
    - redis-stack-server: Cache component.
+ **Nacos:**
    - nacos: Nacos application;
    - nacos-mysql: Nacos database.

**Service Type Description:**

Default is LoadBalancer type service, suitable for cloud environments (Alibaba Cloud ACK, AWS EKS, etc.). If your environment does not support LoadBalancer (such as local minikube, self-built clusters), you can use NodePort or port forwarding to access. After configuring Himarket in the backend, resolve the domain name to the himarket-frontend service access address, and users can access the frontend site through the domain name.

### Installation Commands

**Environment Dependencies:** kubectl, python3/python, curl, jq

**One-Click Startup:** Use the \`deploy.sh\` script to deploy HiMarket to a Kubernetes cluster.

\`\`\`bash
# Clone project
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/helm/scripts

# Deploy full-stack services and initialize
./deploy.sh install

# Or deploy only Himarket services (without Nacos/Higress)
./deploy.sh himarket-only

# Uninstall
./deploy.sh uninstall
\`\`\`

The script will **execute data initialization hooks** after deployment: performs login data initialization, example MCP data initialization, and API product data initialization. Note that the script includes **deployment** and **data initialization** parts. Data initialization execution does not block deployment. If data initialization hooks fail, they can be retried in \`/scripts/hooks/post_ready.d\`. For example:

\`\`\`bash
cd helm/scripts/hooks/post_ready.d

# Retry failed script
./10-init-nacos-admin.sh
\`\`\`

### Installation Configuration

Related configurations are centralized in the \`scripts/data/.env\` file:

\`\`\`bash
cd helm/scripts/data
vi .env
\`\`\`

| Configuration Name | Configuration Description | **Default Value** |
| --- | --- | --- |
| NAMESPACE | Kubernetes namespace | himarket-system |
| HIMARKET_ONLY | Deploy only Himarket (skip Nacos/Higress) | false |
| HIMARKET_IMAGE_TAG | Himarket image tag | latest |
| HIMARKET_MYSQL_IMAGE_TAG | MySQL image tag | latest |
| HIMARKET_MYSQL_ENABLED | Whether to use built-in MySQL (true/false) | true |
| EXTERNAL_DB_HOST | External database address (used when HIMARKET_MYSQL_ENABLED=false) | Your_External_DB_Host |
| EXTERNAL_DB_PORT | External database port | 3306 |
| EXTERNAL_DB_NAME | External database name | Your_DB_Name |
| EXTERNAL_DB_USERNAME | External database username | Your_DB_Username |
| EXTERNAL_DB_PASSWORD | External database password | Your_DB_Password |
| USE_COMMERCIAL_NACOS | Whether to use commercial Nacos (true/false), skips Nacos deployment if used | false |
| COMMERCIAL_NACOS_NAME | Commercial Nacos instance name | Empty |
| COMMERCIAL_NACOS_SERVER_URL | Commercial Nacos service address | Empty |
| COMMERCIAL_NACOS_USERNAME | Commercial Nacos username (required for commercial Nacos MCP data import) | Empty |
| COMMERCIAL_NACOS_PASSWORD | Commercial Nacos password (required for commercial Nacos MCP data import) | Empty |
| COMMERCIAL_NACOS_ACCESS_KEY | Commercial Nacos AccessKey | Empty |
| COMMERCIAL_NACOS_SECRET_KEY | Commercial Nacos SecretKey | Empty |
| USE_AI_GATEWAY | Whether to use AI Gateway (true/false), skips Higress deployment and related initialization scripts if used | false |
| AI_GATEWAY_ID | AI Gateway instance ID | Empty |
| AI_GATEWAY_NAME | AI Gateway instance name | Empty |
| AI_GATEWAY_REGION | AI Gateway region | Empty |
| AI_GATEWAY_ACCESS_KEY | AI Gateway AccessKey | Empty |
| AI_GATEWAY_SECRET_KEY | AI Gateway SecretKey | Empty |
| NACOS_ADMIN_PASSWORD | Nacos administrator password | nacos |
| HIGRESS_USERNAME | Higress login username | admin |
| HIGRESS_PASSWORD | Higress login password | admin |
| ADMIN_USERNAME | Backend administrator username | admin |
| ADMIN_PASSWORD | Backend administrator password | admin |
| FRONT_USERNAME | Frontend default username | demo |
| FRONT_PASSWORD | Frontend default password | demo123 |
| NACOS_VERSION | Nacos image version | v3.1.1 |
| NACOS_IMAGE_REGISTRY | Nacos image registry | nacos-registry.cn-hangzhou.cr.aliyuncs.com |
| NACOS_IMAGE_REPOSITORY | Nacos image address | nacos/nacos-server |
| HIGRESS_REPO_NAME | Higress Helm repository name | higress.io |
| HIGRESS_REPO_URL | Higress Helm repository URL | https://higress.cn/helm-charts |
| HIGRESS_CHART_REF | Higress Chart reference | higress.io/higress |
| NACOS_REPO_NAME | Nacos Helm repository name | ygqygq2 |
| NACOS_REPO_URL | Nacos Helm repository URL | https://ygqygq2.github.io/charts/ |
| NACOS_CHART_REF | Nacos Chart reference | ygqygq2/nacos |
| HIMARKET_HUB | Himarket image registry address | opensource-registry.cn-hangzhou.cr.aliyuncs.com/higress-group |
| HIMARKET_IMAGE_TAG | Himarket image tag | latest |
| HIMARKET_MYSQL_IMAGE_TAG | MySQL image tag | latest |


Note: HiMarket's Helm package is adapted for Alibaba Cloud ACK cluster use. The storage class persistence.storageClass: "alicloud-disk-essd" value in the /helm/values.yaml file needs to be adjusted according to the actual environment.

## 4. Cloud Platform Deployment (Alibaba Cloud)

Alibaba Cloud Computing Nest supports the out-of-the-box version of this project, with one-click deployment of the community edition: [![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/cn-hangzhou?type=user&ServiceId=service-b96fefcb748f47b7b958)



`},d=function(){return t},r=function(){return[{depth:2,slug:"1-local-setup",text:"1. Local Setup"},{depth:2,slug:"2-docker-compose-deployment",text:"2. Docker Compose Deployment"},{depth:3,slug:"installation-commands",text:"Installation Commands"},{depth:3,slug:"installation-configuration",text:"Installation Configuration"},{depth:2,slug:"3-cloud-native-deployment-with-helm",text:"3. Cloud-Native Deployment with Helm"},{depth:3,slug:"installation-commands-1",text:"Installation Commands"},{depth:3,slug:"installation-configuration-1",text:"Installation Configuration"},{depth:2,slug:"4-cloud-platform-deployment-alibaba-cloud",text:"4. Cloud Platform Deployment (Alibaba Cloud)"}]},e=l((h,A,g)=>{const{layout:_,...n}=a;return n.file=s,n.url=i,p`${m()}${E(t)}`})});export{e as Content,v as __tla,d as compiledContent,e as default,s as file,a as frontmatter,r as getHeadings,o as rawContent,i as url};
