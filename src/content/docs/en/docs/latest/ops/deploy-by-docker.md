---
title: Standalone Deployment with Docker
keywords: [deploy,docker,all-in-one,ops]
description: How to deploy Higress standalone using Docker All-in-One containers
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/en/docs/latest/ops/deploy-by-docker.md
---

# Standalone Deployment with Docker

Higress provides a quick way to deploy locally using Docker. Instead of downloading individual component images one by one, you can simply pull a single All-in-One image to get started.

> **Note**
>
> The Docker All-in-One mode has not been used at scale in production environments. It is primarily intended for local deployment and testing scenarios. For production deployments, it is recommended to use the [Cloud-Native mode](./deploy-by-helm).

## Install Higress

When deploying with the Docker All-in-One image, all Higress components are packaged within the image. Configuration data is persisted to the local disk via volume mounts.

### Start Command

```shell
# Create a working directory
mkdir higress; cd higress
# Start higress; configuration files will be written to the working directory
docker run -d --rm --name higress-ai -v ${PWD}:/data \
        -p 8001:8001 -p 8080:8080 -p 8443:8443  \
        higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/all-in-one:latest
```

You can then access the Higress Console at http://localhost:8001/ for configuration management.

The Higress gateway service listens on the following local ports:
- 8080: Gateway HTTP service port
- 8443: Gateway HTTPS service port

### Stop the Container

```shell
docker stop higress-ai
```

The `--rm` flag ensures the container is automatically removed after stopping.

### Environment Variables

| **Variable** | **Description** | **Default** |
|-------------|----------------|-------------|
| MODE | The running mode of the All-in-One container. Possible values:<br/>- full: runs both gateway and console<br/>- gateway: runs gateway only<br/>- console: runs console only | full |
| O11Y | Whether to enable Higress built-in monitoring suite (such as AI monitoring dashboard)<br/>Note: To use this feature, append `-o11y` to the image tag, e.g., `latest-o11y`. | off |
| USE_PLUGIN_SERVER | Whether to enable the built-in plugin server. If disabled, Higress will need to download Wasm plugins from a public image registry. | on |
| GATEWAY_HTTP_PORT | The HTTP service port that Higress Gateway listens on inside the container | 8080 |
| GATEWAY_HTTPS_PORT | The HTTPS service port that Higress Gateway listens on inside the container | 8443 |
| CONSOLE_PORT | The HTTP service port that Higress Console listens on inside the container | 8001 |
| ENABLE_CONSOLE_ROUTE | Whether to create a route on the Gateway for Higress Console. Set to 1 to create the route; any other value means no route is created. | 0 |
