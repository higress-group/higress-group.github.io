---
title: Component Compilation Instructions
keywords: [higress,architecture]
description: Higress Component Compilation Instructions.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/architecture.md
---

# Component Compilation Instructions

## Higress Controller

The Higress controller is a control plane that connects to Istio to generate Istio API objects and sends them to Istio using the xDS protocol.

To compile the binary that can run in the local environment, execute `make build` in the higress repository directory.

If need to compile the Docker image, please execute `make docker-build` .


## Higress Gateway

The Higress gateway is a data plane that implements gateway routing and forwarding capabilities.

Executing `make build-gateway` in the higress repository directory will compile the Higress Gateway image.