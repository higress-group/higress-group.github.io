---
title: Version Upgrade
keywords: [Upgrade]
description: Higress Version Upgrade.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/en/ops/upgrade.md
---

# Version Upgrade

## Cloud-Native Deployment

### Version Upgrade Based on Helm

```bash
# Example value for ${higress_version}: v2.0.3
kubectl apply -f https://github.com/alibaba/higress/releases/download/${higress_version}/crd.yaml
helm repo update
helm get values higress -n higress-system > values.yaml
helm upgrade higress --version ${higress_version} -n higress-system higress.io/higress -f values.yaml
```

Using --reuse-values is not recommended as it will inherit all values from the previous version.

## Standalone Deployment

```bash
wget https://higress.io/standalone/get-higress.sh
chmod +x ./get-higress.sh
# Example value for ${higress_version}: v2.0.3
# ${higress_dir} is the installation directory for Higress standalone deployment
VERSION=${higress_version} ./get-higress.sh "${higress_dir}" -u
```
