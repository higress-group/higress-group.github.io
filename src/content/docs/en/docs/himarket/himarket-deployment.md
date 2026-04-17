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

Includes the following service components:

+ **MySQL:** Database service, providing data storage for backend services and Nacos;
+ **Nacos:** Configuration center, running on port 8848;
+ **Higress:** AI gateway service, console running on port 8001, gateway HTTP endpoint on port 8082;
+ **Redis:** Higress cache service;
+ **HiMarket Server:** Backend API service, running on port 8081;
+ **HiMarket Admin:** Management console interface, running on port 5175;
+ **HiMarket Frontend:** Developer portal interface, running on port 5173;
+ **Sandbox:** Remote sandbox service for cloud IDE functionality.

### Installation Commands

**Environment Dependencies:** docker, docker compose, curl, jq

**Interactive Deployment (Recommended):**

```bash
# Clone project
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/docker

# Interactive deployment, the script guides you through all configurations
./install.sh
```

The script guides you through image selection, password setup, AI model configuration, and more. On first install, database passwords and service credentials are automatically generated with random values.

**Non-Interactive Mode (CI/CD):**

```bash
cp .env.example ~/himarket-install-docker.env
# Edit ~/himarket-install-docker.env to modify configurations as needed
./install.sh -n
```

**Uninstall:**

```bash
./install.sh --uninstall
```

**Upgrade:**

Re-run `./install.sh`, and the script will automatically detect existing deployments and provide upgrade options. Configurations are saved to `~/himarket-install-docker.env` and reused for subsequent upgrades.

**Retry Data Initialization:**

```bash
# Retry initialization hooks only, without redeploying services
./install.sh --init-data

# Or manually execute individual hooks
cd hooks/post_ready.d
./10-init-nacos-admin.sh
```

### Service Ports

| Service | Host Port | Description |
|---------|-----------|-------------|
| HiMarket Frontend | 5173 | Developer portal UI |
| HiMarket Admin | 5175 | Management console UI |
| HiMarket Server | 8081 | Backend API service |
| Nacos | 8848 | Nacos console |
| Higress Console | 8001 | Higress console |
| Higress Gateway | 8082 | Gateway HTTP endpoint |
| MySQL | 3306 | Database service |
| Redis | 6379 | Redis service |

### Installation Configuration

The configuration file is `~/himarket-install-docker.env` (auto-generated in interactive mode), or can be copied from the `.env.example` template. Key configuration items:

| Configuration Name | Description | Default Value |
| --- | --- | --- |
| HIMARKET_SERVER_IMAGE | HiMarket backend service image | opensource-registry...himarket-server:latest |
| HIMARKET_ADMIN_IMAGE | HiMarket management console image | opensource-registry...himarket-admin:latest |
| HIMARKET_FRONTEND_IMAGE | HiMarket frontend service image | opensource-registry...himarket-frontend:latest |
| MYSQL_IMAGE | MySQL image address | opensource-registry...mysql:latest |
| NACOS_IMAGE | Nacos image address | nacos-registry...nacos-server:v3.2.1-2026.03.30 |
| HIGRESS_IMAGE | Higress image address | higress-registry...all-in-one:latest |
| REDIS_IMAGE | Redis image address | higress-registry...redis-stack-server:7.4.0-v3 |
| SANDBOX_IMAGE | Sandbox image address | opensource-registry...sandbox:latest |
| MYSQL_ROOT_PASSWORD | MySQL root password | Auto-generated |
| MYSQL_PASSWORD | MySQL application password | Auto-generated |
| NACOS_ADMIN_PASSWORD | Nacos admin password | Auto-generated |
| HIGRESS_USERNAME | Higress login username | admin |
| HIGRESS_PASSWORD | Higress login password | Auto-generated |
| ADMIN_USERNAME | Backend admin username | admin |
| ADMIN_PASSWORD | Backend admin password | Auto-generated |
| FRONT_USERNAME | Frontend default username | user |
| FRONT_PASSWORD | Frontend default password | Auto-generated |
| SKIP_AI_MODEL_INIT | Skip AI model initialization | true |
| AI_MODEL_COUNT | Number of AI models | 0 |

> For the complete list of configuration items, refer to the `.env.example` file. Log file is located at `~/himarket-install-docker.log`.

## 3. Cloud-Native Deployment with Helm

Helm is a package manager for Kubernetes. The `install.sh` script enables one-click deployment of HiMarket + Higress + Nacos full-stack services on a K8s cluster, including the following components:

+ **HiMarket:**
    - himarket-server: Backend API service;
    - himarket-admin: Management console interface;
    - himarket-frontend: Developer portal interface;
    - mysql: Optional built-in database;
    - sandbox-shared: Remote sandbox service.
+ **Higress:**
    - higress-console: Higress console;
    - higress-controller: Control plane component;
    - higress-gateway: Data plane component;
    - redis-stack-server: Cache component.
+ **Nacos:**
    - nacos: Nacos application;
    - nacos-mysql: Nacos database.

**Service Type Description:**

Default is LoadBalancer type service, suitable for cloud environments (Alibaba Cloud ACK, AWS EKS, etc.). If your environment does not support LoadBalancer (such as local minikube, self-built clusters), you can use NodePort or port forwarding to access.

### Installation Commands

**Environment Dependencies:** kubectl (connected to a K8s cluster), helm, curl, jq, python3

**Interactive Deployment (Recommended):**

```bash
# Clone project
git clone https://github.com/higress-group/himarket.git
cd himarket/deploy/helm

# Interactive deployment
./install.sh
```

**Non-Interactive Mode (CI/CD):**

```bash
cp .env.example ~/himarket-install.env
# Edit ~/himarket-install.env to modify configurations
./install.sh -n
```

**Uninstall:**

```bash
./install.sh --uninstall
```

**Upgrade:**

Re-run `./install.sh`, and the script will automatically detect existing deployments and provide upgrade options. Configurations are saved to `~/himarket-install.env` and reused for subsequent upgrades.

**Retry Data Initialization:**

```bash
# Retry initialization hooks only, without redeploying services
./install.sh --init-data

# Or manually execute individual hooks
cd hooks/post_ready.d
./10-init-nacos-admin.sh
```

### Installation Configuration

The configuration file is `~/himarket-install.env` (auto-generated in interactive mode), or can be copied from the `.env.example` template. Key configuration items:

| Configuration Name | Description | Default Value |
| --- | --- | --- |
| NAMESPACE | Kubernetes namespace | himarket |
| HIMARKET_HUB | HiMarket image registry address | opensource-registry...higress-group |
| HIMARKET_IMAGE_TAG | HiMarket image tag | latest |
| NACOS_VERSION | Nacos image version | v3.2.1-2026.03.30 |
| MYSQL_ROOT_PASSWORD | MySQL root password | Auto-generated |
| MYSQL_PASSWORD | MySQL application password | Auto-generated |
| NACOS_ADMIN_PASSWORD | Nacos admin password | Auto-generated |
| HIGRESS_USERNAME | Higress login username | admin |
| HIGRESS_PASSWORD | Higress login password | Auto-generated |
| ADMIN_USERNAME | Backend admin username | admin |
| ADMIN_PASSWORD | Backend admin password | Auto-generated |
| FRONT_USERNAME | Frontend default username | user |
| FRONT_PASSWORD | Frontend default password | Auto-generated |
| MYSQL_STORAGE_CLASS | MySQL storage class | alicloud-disk-essd |
| MYSQL_STORAGE_SIZE | MySQL storage size | 50Gi |
| SANDBOX_STORAGE_CLASS | Sandbox storage class | alicloud-disk-essd |
| SANDBOX_STORAGE_SIZE | Sandbox storage size | 50Gi |
| HIGRESS_INGRESS_CLASS | Higress IngressClass | himarket |
| SKIP_AI_MODEL_INIT | Skip AI model initialization | true |
| AI_MODEL_COUNT | Number of AI models | 0 |

> For the complete list of configuration items, refer to the `.env.example` file. Storage classes `MYSQL_STORAGE_CLASS` and `SANDBOX_STORAGE_CLASS` should be adjusted according to your K8s environment. Log file is located at `~/himarket-install.log`.

## 4. Cloud Platform Deployment (Alibaba Cloud)

Alibaba Cloud Computing Nest supports the out-of-the-box version of this project, with one-click deployment of the community edition: [![Deploy on AlibabaCloud ComputeNest](https://service-info-public.oss-cn-hangzhou.aliyuncs.com/computenest.svg)](https://computenest.console.aliyun.com/service/instance/create/cn-hangzhou?type=user&ServiceId=service-b96fefcb748f47b7b958)
