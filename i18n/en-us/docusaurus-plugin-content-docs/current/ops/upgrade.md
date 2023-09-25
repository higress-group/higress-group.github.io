---
title: Upgrade
keywords: [Higress]
description: Higress Upgrade.
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en-us/docusaurus-plugin-content-docs/current/ops/upgrade.md
---

# Upgrade

## Cloud-Native Deployment

### Upgrade via Helm

```bash
# Sample value of ${higress_version} : v1.1.0
kubectl apply -f https://github.com/alibaba/higress/releases/download/${higress_version}/customresourcedefinitions.gen.yaml
helm repo update
helm upgrade higress -n higress-system higress.io/higress
```

## Standalone Deployment

```bash
# ${higress_dir} is the path of Higress' installation directory
curl -fsSL https://higress.io/standalone/get-higress.sh | bash -s -- "${higress_dir}" -u
```
