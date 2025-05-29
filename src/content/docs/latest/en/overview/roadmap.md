---
title: Roadmap
keywords: [Higress,roadmap]
description: Higress Roadmap.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/overview/roadmap.md
---

# Roadmap

| Version | Core Goals | Estimated Release Date | Enterprise Version Mapping |
| ------- | ---------- | ---------------------- | --------------------------- |
| v0.6.0 | Black screen operations (kubectl) under K8s reach **GA status**; release of console preview version to improve ease of installation and deployment | 2023-01 | 1.1.x |
| v0.7.0 | Official version of the console is released, integrating out-of-the-box observability | 2023-02 | 1.1.x |
| v1.0.0 | Overall reaches **GA status** | 2023-05 | 1.2.x |
| v1.1.0 | Enhance microservice gateway capabilities in the console; support installation and deployment in non-K8s environments | 2023-07 | 1.2.x |
| v1.2.0 | Support use as Knative's network layer; support ARM architecture deployment; support integration with Consul | 2023-08 | 1.2.x |
| v1.3.0 | Full support for GatewayAPI; support for Operator mode deployment | 2023-11 | 1.2.x |
| v1.4.0 | WASM support for Redis calls; simplified HTTPS certificate management | 2024-05 | 1.2.x |
| v2.0.0 | Istio/Envoy kernel version upgrade, providing richer API gateway capabilities based on numerous new plugins | 2024-08 | 2.0.x |
| v2.1.0 | Console support for AI traffic entry management, reducing usage costs related to AI functionality | 2025-02 | 2.1.x |
| v2.2.0 | Launch of Higress Agent capabilities | 2025-10 | 2.2.x |

> **Note**
> 
> Higress Enterprise Edition and Open Source Edition use the same core logic but have different iteration rhythms, so there are differences in version numbers.
> 
> Starting from Higress v2.0.0, the Enterprise and Open Source versions have a better alignment mechanism:
> 
> Based on the [Semantic Versioning Specification](https://semver.org/), it ensures that the major version and minor version of open source and enterprise versions are completely aligned, but patch versions will have differences. For example:
>
> When Higress Enterprise Edition releases v2.1.x, the Open Source Edition will also include corresponding core functional features when releasing v2.1.x;
>
> Patch versions indicate small fixes, and the versions between open source and enterprise editions are not completely aligned. For example:
>
> If the Open Source Edition subsequently releases versions from v2.1.1 to v2.1.10, while the Enterprise Edition releases from v2.1.1 to v2.1.3, complete alignment between the two is not guaranteed for each specific minor version.
