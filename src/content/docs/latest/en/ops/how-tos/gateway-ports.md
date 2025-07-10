---
title: Modify Gateway Listening Ports
keywords: [ops,config,route,tcp]
description: Introduce how to make Gateway listen to ports other than 80 and 443
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/how-tos/gateway-ports.md
---

# Modify Gateway Listening Ports

To make Gateway listen to ports other than 80 and 443, you need to specify the non-standard ports during installation or upgrade. For example, adjusting port 80 to 8080 and port 443 to 8443.

## Kubernetes Installation

Adjust the helm parameter values.yaml configuration as follows:

```yaml
higress-core:
  # Gateway settings
  gateway:
    httpPort: 8080
    httpsPort: 8443
  service:
    ports:
    - name: http2
      port: 80
      protocol: TCP
      targetPort: 8080
    - name: https
      port: 443
      protocol: TCP
      targetPort: 8443
```

You can quickly install Higress with modified listening ports using the following commands:

```shell
  # Install Higress in a Kubernetes cluster using Helm
  helm install higress higress.io/higress  -n higress-system  -f ./values.yaml --create-namespace
  # Install Higress in a Kubernetes cluster using hgctl
  hgctl install --set profile=k8s -f ./values.yaml
```

## Docker Environment Installation

You can quickly install Higress with modified listening ports using the following commands:

```shell
  # Install Higress in a Docker environment using get-higress.sh
  curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- ./higress --gateway-http-port=8080  --gateway-https-port=8443
  # Install Higress in a Docker environment using hgctl
  hgctl install --set profile=local-docker --set gateway.httpPort=8080 --set gateway.httpsPort=8443