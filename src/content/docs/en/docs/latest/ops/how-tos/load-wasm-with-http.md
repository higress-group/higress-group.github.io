---
title: Loading Wasm Plugins with HTTP/HTTPS Protocol
keywords: [ops, config, wasm, plugin, http, https]
description: How to load Wasm plugins using HTTP/HTTPS protocol
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/load-wasm-with-http.md
---

# Loading Wasm Plugins with HTTP/HTTPS Protocol

## File Requirements

For convenience, it is recommended that the target URL points directly to the Wasm file.

## HTTP Protocol

Simply configure the URL directly. However, ensure that the target URL is accessible from within the Gateway container. You can verify this by using the `curl` command inside the container.

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS Protocol

The configuration approach is similar to the HTTP protocol. However, if the server uses an untrusted certificate (such as a self-signed certificate), you need to add an environment variable named "WASM_INSECURE_REGISTRIES" to the Gateway container. Set the value to "*" to trust all HTTPS certificates returned by servers.
