---
title: 开启 WAF 防护的最佳实践
---
# 开启 WAF 防护的最佳实践
网关在系统架构中扮演着重要的角色，它是连接不同网络、应用程序和服务的入口点，Web应用防火墙（Web Application Firewall，WAF）是网关安全领域必不可少的能力，对网站或者App的业务流量进行恶意特征识别及防护，在对流量清洗和过滤后，将正常、安全的流量返回给服务器，避免网站服务器被恶意入侵导致性能异常等问题，从而保障网站的业务安全和数据安全。

## 相关知识介绍
### ModSecurity
[ModSecurity](https://github.com/SpiderLabs/ModSecurity)是一个开源的跨平台Web应用程序防火墙（WAF）引擎，是目前世界上使用最多的开源WAF产品，其主要功能是对传入的 HTTP 请求进行分析和过滤，以便检测和阻止潜在的攻击，主要包括：
- SQL Injection (SQLi)：阻止SQL注入
- Cross Site Scripting (XSS)：阻止跨站脚本攻击
- Local File Inclusion (LFI)：阻止利用本地文件包含漏洞进行攻击
- Remote File Inclusione(RFI)：阻止利用远程文件包含漏洞进行攻击
- Remote Code Execution (RCE)：阻止利用远程命令执行漏洞进行攻击
- PHP Code Injectiod：阻止PHP代码注入
- HTTP Protocol Violations：阻止违反HTTP协议的恶意访问
- HTTPoxy：阻止利用远程代理感染漏洞进行攻击
- Shellshock：阻止利用Shellshock漏洞进行攻击

ModSecurity通过一个基于规则的引擎实现这些功能，这些规则定义了要匹配和处理的模式和行为。

### 安全规则语言
ModSecurity规则语言（也称为SecLang）是一种基于正则表达式和模式匹配的领域特定语言，用于描述和检测Web应用程序中的安全事件和攻击。

SecLang 支持以下基本概念和语法结构：
- 事务和规则：SecLang中的规则以事务为单位，事务包含一个或多个规则。规则定义了要匹配和检测的模式，以及在匹配时要执行的操作。
- 动作：规则可以包含多种动作，用于执行特定的操作，如日志记录、拦截请求、设置变量、修改请求等。
- 条件：规则可以使用条件语句来指定仅在满足特定条件时才执行的动作。条件可以基于请求的各个方面，如请求方法、URI、请求头、请求正文、IP地址等。
- 变量：SecLang 支持内置变量和用户定义的变量，用于存储和操作请求和响应中的数据。变量可以用于规则匹配、条件判断和动作执行。
- 运算符：SecLang 提供了各种运算符，用于执行模式匹配、比较和逻辑操作。这些运算符用于构建规则的条件和操作。

SecLang 允许用户编写自定义规则，以指定在HTTP请求和响应中应该如何检测和处理潜在的安全问题。规则可以定义诸如阻止恶意请求、过滤特定的数据、拦截SQL注入和跨站点脚本（XSS）等攻击类型的行为。通过使用SecLang，用户可以利用ModSecurity的强大功能来保护Web应用程序免受各种安全威胁。更多关于SecLang的语法规则可参考[SecLang语法参考](https://coraza.io/docs/seclang/directives/)。

### OWASP核心规则集
[OWASP CRS](https://coreruleset.org/docs/deployment/engine_integration_options/)（OWASP ModSecurity Core Rule Set）是一个由OWASP（开放式Web应用安全项目）社区开发和维护的ModSecurity规则集合。它是一套预先定义的规则，旨在提供保护Web应用程序免受广泛的Web安全威胁和攻击。这些规则可以根据具体的需求进行修改，以适应不同的 Web 应用程序的安全需求。

## WAF插件防护原理
WAF 插件基于 Higress Wasm Go SDK 以及 [Coraza](https://coraza.io/docs/tutorials/introduction/) 实现，遵循 Modsecurity 定义的 [Phase 规范](https://malware.expert/modsecurity/processing-phases-modsecurity/)。
- Phase 1: Request headers
- Phase 2: Request body
- Phase 3: Response headers
- Phase 4: Response body
- Phase 5: Logging

![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/55b4c826-1861-459b-88f4-5803a522566b)

插件内置了OWASP CRS以提供基础的防护功能，支持用户自定义防护规则，并且支持路由级/域名级细粒度防护。

## 使用示例
首先准备一个k8s集群，并安装Higress，参考[Higress部署教程](https://higress.cn/docs/latest/ops/deploy-by-helm/)。

### 部署服务并创建ingress
在K8s集群中apply如下资源，以部署后端服务以及ingress：
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: httpbin-deployment
  labels:
    app: httpbin-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: httpbin-deployment
  template:
    metadata:
      labels:
        app: httpbin-deployment
    spec:
      containers:
      - image: kennethreitz/httpbin
        imagePullPolicy: IfNotPresent
        name: httpbin-backend
        ports:
        - name: http
          containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: httpbin-service
  namespace: default
  labels:
    app: httpbin-service
spec:
  ports:
    - port: 8080
      name: http
      protocol: TCP
      targetPort: 80
  selector:
    app: httpbin-deployment
  type: ClusterIP

---
kind: Pod
apiVersion: v1
metadata:
  name: foo-app
  labels:
    app: foo
spec:
  containers:
  - name: foo-app
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/http-echo:0.2.4-alpine
    args:
    - "-text=foo"

---
kind: Service
apiVersion: v1
metadata:
  name: foo-service
spec:
  selector:
    app: foo
  ports:
  # Default port used by the image
  - port: 5678

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: httpbin-ingress
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/"
            backend:
              service:
                name: httpbin-service
                port:
                  number: 8080

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: echo-ingress
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - http:
        paths:
          - pathType: Prefix
            path: "/foo"
            backend:
              service:
                name: foo-service
                port:
                  number: 5678
```

访问两条路由（`/user-agent`被路由到`httpbin-service`服务，`/foo`被路由到`foo-service`）：
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/ccdbad12-230a-4229-8948-4d7b1d4f4a24)

### 安装WAF插件
在K8s集群中apply如下资源，以部署WAF插件：
```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: waf-go
  namespace: higress-system
spec:
  defaultConfig:
    useCRS: true
    secRules:
    - "SecRuleEngine On"
    - "SecDebugLogLevel 3"
    - "SecRule REQUEST_URI \"@streq /admin\" \"id:101,phase:1,t:lowercase,deny\""
  matchRules:
  - ingress:
    - default/echo-ingress
    config:
      secRules:
      - "SecRuleEngine On"
      - "SecDebugLogLevel 3"
      - "SecAction \"id:102,phase:1,deny\""
  url: oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/plugins/go-waf:1.0.1
```

上述配置含义如下：
- `defaultConfig`下配置了全局的防护规则
  - `useCRS=true`表明加载OWASP CRS安全规则集
  - `secRules`下有三条规则为用户自定义的防护规则。
- `matchRules`下配置了路由级防护规则（域名级同理），参考[Higress插件使用文档](https://higress.io/zh-cn/docs/plugins/intro)
  - `ingress`用于指定防护规则生效的路由，这里设置的路由为`default`命名空间下的`echo-ingress`路由
  - `config`下配置路由级防护规则，结构与`defaultConfig`一致，在这里没有加载OWASP CRS规则集，并且设置拦截一切请求。
 
### 请求拦截示例
#### 自定义规则防护测试
测试我们在全局防护规则中定义的如下自定义规则：
```yaml
"SecRule REQUEST_URI \"@streq /admin\" \"id:101,phase:1,t:lowercase,deny\""
```
该条规则会阻止path为/admin的请求：
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/8582df5c-9db4-4526-ba9e-35e6bc3526d5)

#### 细粒度（路由级/域名级）防护测试
以路由级为例，访问`/foo`，该请求命中以下路由级防护规则：
```yaml
matchRules:
- ingress:
  - default/echo-ingress
  config:
    secRules:
    - "SecRuleEngine On"
    - "SecDebugLogLevel 3"
    - "SecAction \"id:102,phase:1,deny\""
```
根据该防护规则，该请求将会被拦截：
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/4898a648-1f0a-426a-8fe2-b8f0cb3ee843)

#### 常见攻击防护测试
1. shell注入攻防示例
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/a0dac168-a513-4266-9059-6c71597667e0)

2. sql注入攻防示例
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/89f76e7c-c43d-470e-8568-e1cadb475918)

3. 远程文件包含（RFI）攻防示例
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/3b58c2d7-2e49-4bf6-a6aa-a5a8ace8a7f0)

4. xss攻防示例
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/89ac58f4-d175-406e-b2c4-6bfecd6b22d9)

5. php注入攻防示例
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/9bb538a8-30a1-4558-bdf3-d6e7c847e42e)

## 整体防护能力评估
[GoTestWAF](https://github.com/wallarm/gotestwaf)是一款API和OWASP攻击模拟工具，支持包括REST、GraphQL、gRPC、WebSockets、SOAP、XMLRPC等多种API协议，旨在评估Web应用安全解决方案，如API安全代理、Web应用防火墙（WAF）、IPS、API网关等。

该工具使用放置在HTTP请求正文、标头、URL参数等不同部分的不同编码的有效负载生成恶意请求，涵盖了常见的各种攻击类型。

多种攻击测试结果如下图所示，图中结果表明WAF插件能够有效检测各种攻击类型的非法请求。
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/72dd87ca-1c79-4a84-974f-0d2005d0e49b)

WAF防护功能整体得分如下，高于gotestwaf提供的benchmark（benchmark中paranoia表示防护等级，数值越大，防护等级越高，正确拦截与误拦截的请求数均会增加），测试结果表明WAF插件具有较好的防护能力。
![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/52a31de8-27af-456e-bb3d-d48db9adc973)

