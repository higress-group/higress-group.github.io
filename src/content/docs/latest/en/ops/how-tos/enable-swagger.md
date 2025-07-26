---
title: Enable Swagger UI of Console
keywords: [ops,console,swagger]
description: Introduce how to enable Swagger UI of Higress Console
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/enable-swagger.md
---
# Enable Swagger UI of Higress Console

## K8s Deployment

Add `--set higress-console.swagger.enabled=true` arguments to the helm install or upgrade command.

## Docker Compose Deployment

Add the following lines into `compose/console.env` file in the installation directory and restart Higress.

```bash
SPRINGDOC_API_DOCS_ENABLED=true
SPRINGDOC_SWAGGER_UI_ENABLED=true
```

## all-in-one Image deployment

Add `-e O11Y=on` arguments to the `docker run` command.
