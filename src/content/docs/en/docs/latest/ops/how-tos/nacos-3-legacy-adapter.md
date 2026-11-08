---
title: Nacos 3 compatibility (legacy adapter)
keywords: [ops,nacos,mcp,legacy,adapter,troubleshooting]
description: Restore v1/v2 HTTP APIs with the official Nacos nacos-api-legacy-adapter to fix 404 responses from /nacos/v1/cs/configs during Higress MCP dynamic discovery
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/ai/src/content/docs/en/docs/latest/ops/how-tos/nacos-3-legacy-adapter.md
---

# Nacos 3 compatibility (legacy adapter)

> **Note**: This page documents a temporary workaround on the Nacos side, not a code fix in Higress. Nacos 3 removed the v1/v2 HTTP APIs, while Higress 2.2.5 still calls them through the bundled `nacos-sdk-go v2.3.5`. The official `nacos-api-legacy-adapter` restores the compatible endpoints and can be used until Higress natively supports the Nacos 3 APIs. See [higress-group/higress#5217](https://github.com/higress-group/higress/issues/5217) for progress.

## Symptoms

A typical combination is Higress 2.2.5 with Nacos 3.2.4:

- Starting with Nacos 3.2.0, the v1/v2 HTTP APIs are no longer part of the main distribution. On Nacos 3.2.4, Higress requests to `GET /nacos/v1/cs/configs` return HTTP 404.
- The Higress Controller `discovery` container logs show `McpServer` errors such as `List mcp server configs ... error` or `Get mcp server ... error`.
- MCP Server dynamic discovery through the Nacos 3 service source stops working: newly registered or updated MCP Servers do not appear, and the related routes are not updated.
- Statically configured MCP Servers are unaffected; only the Nacos-backed dynamic discovery path is broken.

If the logs show 401/403 instead, check Nacos authentication first. This page addresses HTTP 404.

## Root cause

Nacos 3 serves the v3 API, but the `nacos-sdk-go v2.3.5` used by Higress 2.2.5 still reads MCP configuration through the v1 HTTP API. `/nacos/v1/cs/configs` no longer exists in Nacos 3, so both configuration queries and listeners fail.

[`nacos-api-legacy-adapter`](https://github.com/nacos-group/nacos-api-legacy-adapter) is the official pluggable compatibility layer from Nacos. When the JAR is present on the Nacos runtime classpath, it automatically registers the v1/v2 controllers and exposes the legacy HTTP endpoints again. It does not modify Higress and does not change the Nacos v3 API.

## Solution

### 1. Obtain the adapter JAR

For Nacos 3.2.x, use `nacos-api-legacy-adapter-3.2.0.jar` from the official `3.2.0.2` release:

```bash
curl -fL -o /tmp/nacos-api-legacy-adapter-3.2.0.jar \
  https://github.com/nacos-group/nacos-api-legacy-adapter/releases/download/3.2.0.2/nacos-api-legacy-adapter-3.2.0.jar

sha256sum /tmp/nacos-api-legacy-adapter-3.2.0.jar
# 2779587cbb96698c122c03115ab8265ae6bd9221634fad2dde198384e678fa89
```

The release POM declares `nacos.version` as `[3.2.0, 4.0.0)`, so it can be used with Nacos 3.2.x. For other 3.x versions, follow the [adapter README](https://github.com/nacos-group/nacos-api-legacy-adapter/blob/main/README.md) and rebuild against dependencies aligned with the target Nacos version. Validate it in a staging environment; do not mix adapters built for different versions.

### 2. Deploy the adapter

The adapter must be on the runtime classpath of the Nacos Server process. Placement depends on the deployment method:

| Deployment | Action |
| --- | --- |
| Archive / VM | Put the JAR into `${nacos.home}/plugins/`. The Nacos 3.2.4 `startup.sh` adds `${BASE_DIR}/plugins` to `-Dloader.path` by default. |
| Official Docker image | Mount the directory containing the JAR into the container and add it to `loader.path` through `NACOS_EXT_PLUGIN_DIRS`. For example, mount it at `/home/nacos/ext-plugins` and set `NACOS_EXT_PLUGIN_DIRS=/home/nacos/ext-plugins`. |
| Kubernetes | Build a custom image that copies the JAR to `/home/nacos/plugins/`, or mount the JAR into `${nacos.home}/plugins/` with a volume. Use the values supported by your Helm chart. |

For example, append the following to the existing Nacos Docker startup options:

```bash
-e NACOS_EXT_PLUGIN_DIRS=/home/nacos/ext-plugins \
-v /opt/nacos/plugins:/home/nacos/ext-plugins \
```

Deployment notes:

- In a cluster, install the same JAR on **every Nacos node** and perform a rolling restart. Otherwise requests routed to a node without the adapter still return 404.
- Make sure the JAR is readable by the Nacos runtime user.
- The adapter does not open a new listener. It reuses the existing Nacos Server HTTP port (default `8848`) and context path (default `/nacos`).

### 3. Check Nacos configuration and networking

The restored OPEN_API endpoints are controlled by `nacos.core.api.compatibility.client.enabled`, which defaults to `true`. If your deployment explicitly sets it to `false`, change it back:

```properties
nacos.core.api.compatibility.client.enabled=true
```

> `nacos.core.api.compatibility.enabled` does not restore the v1/v2 HTTP APIs. The official Nacos documentation explicitly states that it cannot replace the legacy adapter. Do not use that switch as the fix for this issue.

Networking:

- Point the Higress Nacos service source to the Nacos Server HTTP port `8848`, not the Console port `8080`.
- Verify network policies, firewalls, and DNS between the Higress Controller and Nacos `8848`.
- If Nacos authentication is enabled, keep providing valid credentials in the Higress Nacos service source (username/password or `authSecretName`). The adapter remains protected by Nacos authentication.

### 4. Verify

First, check whether the adapter is loaded. `/v1/ns/operator/metrics` is an OPEN_API endpoint provided by the adapter:

```bash
curl -i 'http://<nacos-host>:8848/nacos/v1/ns/operator/metrics'
```

Expect HTTP 200 with a body containing something like `{"status":"UP"}`. A 404 means the adapter is not loaded. A 410 means `nacos.core.api.compatibility.client.enabled` is set to `false`.

Then verify the configuration endpoint used by Higress. Replace `dataId`, `group`, and `tenant` with your MCP Server configuration:

```bash
curl -i 'http://<nacos-host>:8848/nacos/v1/cs/configs?dataId=<mcp-server-id>-mcp-versions.json&group=mcp-server-versions&tenant=public'
```

Possible results:

- HTTP 200: the adapter works and the configuration exists.
- HTTP 404 with a `config data not exist` body: the route is restored, but `dataId`, `group`, or `tenant` does not match.
- HTTP 404 without a Nacos business error body: the adapter is still not loaded, or the request is not reaching Nacos.

Finally, check the Higress Controller logs:

```bash
kubectl logs -n higress-system <higress-controller-pod> -c discovery --tail=200
```

After the fix, expect a log similar to `Get mcp server(id: ...) version config success`, and the repeated 404s for `/nacos/v1/cs/configs` should stop. After one refresh cycle, the MCP Servers in Nacos should be discoverable in the Higress Console.

## Limitations and upgrade path

- **This is a transitional workaround, not a code fix.** The adapter only restores the legacy HTTP APIs; Higress still uses the old Nacos SDK call path.
- The official adapter README states that the module is intended for temporary compatibility only and is not guaranteed to be supported by future Nacos versions. Revalidate it after every Nacos upgrade, and rebuild it if necessary.
- The adapter does not restore the data migration logic removed in Nacos 3.3, and it is not equivalent to rolling back to Nacos 2.x. Historical data migration must still follow the Nacos upgrade documentation.
- Restoring the v1/v2 endpoints increases the legacy API surface. Keep Nacos authentication enabled in production and restrict network access to the Nacos HTTP port.
- Upgrade path: once Higress natively supports the Nacos 3 APIs, remove the adapter JAR, restart Nacos, and upgrade Higress normally. Track [higress-group/higress#5217](https://github.com/higress-group/higress/issues/5217).
- If the adapter is not acceptable, continue using Nacos 2.x until Higress completes native Nacos 3 support.

## Related links

- [Nacos legacy adapter repository (English README)](https://github.com/nacos-group/nacos-api-legacy-adapter/blob/main/README.md)
- [Nacos legacy adapter 3.2.0.2 release](https://github.com/nacos-group/nacos-api-legacy-adapter/releases/tag/3.2.0.2)
- [Nacos upgrade guide: client compatibility](https://nacos.io/docs/latest/manual/admin/upgrading/)
- [Nacos compatibility and deprecation](https://nacos.io/docs/latest/manual/admin/compatibility-and-deprecation/)
- [Nacos system properties: compatibility and migration](https://nacos.io/docs/latest/manual/admin/system-configurations/)
- [Nacos Docker: NACOS_EXT_PLUGIN_DIRS](https://github.com/nacos-group/nacos-docker/blob/v3.2.4/README.md)
- [Higress McpBridge configuration](/en/docs/latest/user/mcp-bridge/)
- [Higress issue #5217](https://github.com/higress-group/higress/issues/5217)
