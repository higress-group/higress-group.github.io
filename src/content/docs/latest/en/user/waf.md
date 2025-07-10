---
title: Best Practices for Enabling WAF Protection
keywords: [waf, security, web application firewall]
description: Learn how to enable and configure WAF protection in Higress
type: docs
---

# Best Practices for Enabling WAF Protection

Gateways play a crucial role in system architecture as they serve as the entry point connecting different networks, applications, and services. Web Application Firewall (WAF) is an essential security capability in the gateway domain, designed to identify and protect against malicious traffic patterns for websites or applications. By filtering and cleaning traffic, it ensures only normal, secure traffic reaches the server, preventing performance issues and security breaches caused by malicious intrusions, thereby safeguarding business and data security.

## Introduction to Relevant Knowledge

### ModSecurity
[ModSecurity](https://github.com/SpiderLabs/ModSecurity) is an open-source, cross-platform Web Application Firewall (WAF) engine and one of the most widely used open-source WAF products. Its primary function is to analyze and filter incoming HTTP requests to detect and block potential attacks, including:
- SQL Injection (SQLi): Prevents SQL injection attacks
- Cross-Site Scripting (XSS): Blocks cross-site scripting attacks
- Local File Inclusion (LFI): Prevents attacks exploiting local file inclusion vulnerabilities
- Remote File Inclusion (RFI): Prevents attacks exploiting remote file inclusion vulnerabilities
- Remote Code Execution (RCE): Prevents attacks exploiting remote command execution vulnerabilities
- PHP Code Injection: Blocks PHP code injection
- HTTP Protocol Violations: Prevents malicious access that violates HTTP protocols
- HTTPoxy: Prevents attacks exploiting remote proxy infection vulnerabilities
- Shellshock: Prevents attacks exploiting Shellshock vulnerabilities

ModSecurity implements these features through a rule-based engine that defines patterns and behaviors to match and process.

### Security Rule Language
ModSecurity Rule Language (also known as SecLang) is a domain-specific language based on regular expressions and pattern matching, used to describe and detect security events and attacks in web applications.

SecLang supports the following basic concepts and syntax structures:
- Transactions and Rules: Rules in SecLang are organized in transactions, which contain one or more rules. Rules define patterns to match and actions to take upon a match.
- Actions: Rules can include various actions such as logging, blocking requests, setting variables, and modifying requests.
- Conditions: Rules can use conditional statements to specify actions that should only be executed when certain conditions are met. Conditions can be based on various aspects of the request, such as request method, URI, headers, body, and IP address.
- Variables: SecLang supports built-in and user-defined variables for storing and manipulating request and response data. Variables can be used in rule matching, condition evaluation, and action execution.
- Operators: SecLang provides various operators for pattern matching, comparison, and logical operations, which are used to build rule conditions and actions.

SecLang allows users to write custom rules to specify how potential security issues in HTTP requests and responses should be detected and handled. Rules can define behaviors such as blocking malicious requests, filtering specific data, and intercepting attack types like SQL injection and cross-site scripting (XSS). By using SecLang, users can leverage ModSecurity's powerful features to protect web applications from various security threats. For more information on SecLang syntax, refer to the [SecLang Syntax Reference](https://coraza.io/docs/seclang/directives/).

### OWASP Core Rule Set
[OWASP CRS](https://coreruleset.org/docs/deployment/engine_integration_options/) (OWASP ModSecurity Core Rule Set) is a set of ModSecurity rules developed and maintained by the OWASP (Open Web Application Security Project) community. It provides predefined rules to protect web applications from a wide range of security threats and attacks. These rules can be modified to meet the specific security requirements of different web applications.

## WAF Plugin Protection Principle
The WAF plugin is implemented based on the Higress Wasm Go SDK and [Coraza](https://coraza.io/docs/tutorials/introduction/), following the [Phase specification](https://malware.expert/modsecurity/processing-phases-modsecurity/) defined by ModSecurity:
- Phase 1: Request headers
- Phase 2: Request body
- Phase 3: Response headers
- Phase 4: Response body
- Phase 5: Logging

![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/55b4c826-1861-459b-88f4-5803a522566b)

The plugin includes OWASP CRS to provide basic protection features, supports custom protection rules, and offers route/domain-level granular protection.

## Usage Example
First, prepare a K8s cluster and install Higress. Refer to the [Higress Deployment Guide](https://higress.cn/docs/latest/ops/deploy-by-helm/).

### Deploy Services and Create Ingress
Apply the following resources in your K8s cluster to deploy the backend service and ingress:

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

Access the two routes (`/user-agent` routes to `httpbin-service`, and `/foo` routes to `foo-service`):

![image](https://github.com/higress-group/higress-group.github.io/assets/25995563/ccdbad12-230a-4229-8948-4d7b1d4f4a24)

### Install WAF Plugin
Apply the following resources in your K8s cluster to deploy the WAF plugin:

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

The above configuration has the following meanings:
- `defaultConfig` contains global protection rules:
  - `useCRS=true` indicates that the OWASP CRS security rule set is loaded
  - `secRules` contains three user-defined protection rules.
- `matchRules` contains route-level protection rules (domain-level is similar), refer to the [Higress Plugin Documentation](https://higress.io/zh-cn/docs/plugins/intro):
  - `ingress` specifies the routes to which the protection rules apply. Here, the route is set to `echo-ingress` in the `default` namespace.
  - `config` contains route-level protection rules with the same structure as `defaultConfig`. In this example, the OWASP CRS rule set is not loaded, and all requests are blocked.

### Request Blocking Example
#### Custom Rule Protection Test
Test the following custom rule we defined in the global protection rules:

```yaml
SecRule REQUEST_URI "@streq /admin" "id:101,phase:1,t:lowercase,deny"
```

This rule blocks all requests to the `/admin` path. When you try to access this path, the request will be blocked by the WAF.

## Overall Protection Capability Evaluation
[GoTestWAF](https://github.com/wallarm/gotestwaf) is an API and OWASP attack simulation tool that supports various API protocols including REST, GraphQL, gRPC, WebSockets, SOAP, and XMLRPC. It is designed to evaluate web application security solutions such as API security proxies, Web Application Firewalls (WAF), IPS, API gateways, and more.

The tool helps in assessing the effectiveness of your WAF configuration by simulating various attack vectors and measuring the protection level provided by your security setup.