---
title: "HiMarket Deployment Guide"
description: "HiMarket quick deployment and installation configuration guide"
date: "2025-12-12"
category: "article"
keywords: ["HiMarket", "Deployment", "Installation"]
authors: "Higress Team"
---

# HiMarket Deployment Guide

## 1. Local Setup

**Environment Dependencies:** JDK 17, Node.js 18+, Maven 3.6+, MySQL 8.0+

**Start Backend:**

```bash
# Build project
mvn clean package -DskipTests

# Start backend service
java --add-opens java.base/java.util=ALL-UNNAMED \
     --add-opens java.base/java.lang=ALL-UNNAMED \
     --add-opens java.base/java.lang.reflect=ALL-UNNAMED \
     -Ddb.host=${DB_HOST} \
     -Ddb.port=${DB_PORT} \
     -Ddb.name=${DB_NAME} \
     -Ddb.username=${DB_USERNAME} \
     -Ddb.password=${DB_PASSWORD} \
     -jar himarket-bootstrap/target/himarket-bootstrap-1.0-SNAPSHOT.jar

# Backend API address: http://localhost:8080
```

**Start Frontend:**

```bash
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
```

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

**One-Click Startup:** Use the `deploy.sh` script to complete full-stack deployment and data initialization of HiMarket, Higress, and Nacos.

```bash
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
```

The script will **execute data initialization hooks** after deployment: performs login data initialization, example MCP data initialization, and API product data initialization. Note that the script includes **deployment** and **data initialization** parts. Data initialization execution does not block deployment. If data initialization hooks fail, they can be retried in `/scripts/hooks/post_ready.d`. For example:

```bash
cd docker/scripts/hooks/post_ready.d

# Retry failed script
./10-init-nacos-admin.sh
```

### Installation Configuration

All configurations are centralized in the `scripts/data/.env` file:

```bash
cd docker/scripts/data
vi .env
```

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

Helm is a package management system for automating Kubernetes software management and release. Through the Helm one-click deployment script, you can quickly deploy and install HiMarket+Higress+Nacos on a Kubernetes cluster, including nine service components:

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

**One-Click Startup:** Use the `deploy.sh` script to deploy HiMarket to a Kubernetes cluster.

```bash
# Clone project
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/helm/scripts

# Deploy full-stack services and initialize
./deploy.sh install

# Or deploy only Himarket services (without Nacos/Higress)
./deploy.sh himarket-only

# Uninstall
./deploy.sh uninstall
```

The script will **execute data initialization hooks** after deployment: performs login data initialization, example MCP data initialization, and API product data initialization. Note that the script includes **deployment** and **data initialization** parts. Data initialization execution does not block deployment. If data initialization hooks fail, they can be retried in `/scripts/hooks/post_ready.d`. For example:

```bash
cd helm/scripts/hooks/post_ready.d

# Retry failed script
./10-init-nacos-admin.sh
```

### Installation Configuration

Related configurations are centralized in the `scripts/data/.env` file:

```bash
cd helm/scripts/data
vi .env
```

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

Alibaba Cloud Computing Nest supports the out-of-the-box version of this project, with one-click deployment of the community edition: ![](https://intranetproxy.alipay.com/skylark/lark/0/2025/svg/142456461/1765433883141-51e33c54-9354-4e27-b0af-f2f7f73f43b0.svg)



