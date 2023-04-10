---
title: 版本升级
keywords: [Upgrade]
description: Higress 版本升级.
---

# 版本升级

## 基于 helm 实现版本升级

```bash
helm repo update
helm upgrade higress -n higress-system higress.io/higress --reuse-values
```
