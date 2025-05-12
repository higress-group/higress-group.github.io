---
title: Load Wasm plugins with HTTP/HTTPS protocol
keywords: [ops,config,wasm,plugin,http,https]
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/load-wasm-with-http.md
---

# Load Wasm plugins with HTTP/HTTPS protocol

## File Requirement

Considering convenience, it is recommended that the target URL point directly to the Wasm file.

## HTTP Protocol

Just set the URL directly. But the URL must be accessible inside the gateway container. You can test it using the `curl` command.

![http](/img/docs/ops/how-tos/load-wasm-with-http/http.png)

## HTTPS Protocol

The configuration is similar with HTTP protocol. But if the server uses an untrusted certificate, for example, a self-signed certificate, you need to add the following environment variable to the gateway container, to make it trust all the server-returned HTTPS certificates.

```bash
WASM_INSECURE_REGISTRIES=*
```
