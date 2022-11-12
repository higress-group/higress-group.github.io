---
title: 版本升级
keywords: Upgrade
description: Higress 版本升级.
---

# 版本升级

## 基于 helm 实现版本升级

1. 先升级 Istio

可以用 `--version` 参数指定升级到特定版本，不指定则更新最新版本

```bash
helm upgrade istio -n istio-system oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/istio
```

2. 再升级 Higress

```bash
helm upgrade higress -n higress-system  oci://higress-registry.cn-hangzhou.cr.aliyuncs.com/charts/higress
```


## 基于 hictl 实现版本升级

TBD
