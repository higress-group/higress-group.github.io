---
title: 新贡献者向导
keywords: [Higress]
description: 这篇向导旨在给正在准备向 Higress 提交贡献的新手提供指导。
custom_edit_url: https://github.com/higress-group/higress-group.github.io/blob/main/src/content/docs/latest/zh-cn/developers/contributor-guide/new-contributor-guide_dev.md
---

# 新贡献者向导

这篇向导旨在给正在准备向 Higress 提交贡献的新手提供指导。

### 邮件列表描述

TBD

### 报告问题

您始终可以通过Github [Issues](https://github.com/alibaba/higress/issues) 向Higress报告问题。

如果您正在报告bug，请参阅问题报告[模版](https://github.com/alibaba/higress/issues/new?template=BUG_REPORT.md)。

如果您正在报告功能要求，请参阅问题报告[模版](https://github.com/alibaba/higress/issues/new?template=FEATURE_REQUEST.md)。

如果您正在报告常规问题，比如提出一个问题，则可以打开[常规问题](https://github.com/alibaba/higress/issues/new)

### 发送 pull request

* 参考[pull request template](https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
* 在您发送pull request之前，请同步您的github仓库和远程仓库，这会使您的pull request简单明了，具体操作请看如下所示步骤：

```sh
git remote add upstream git@github.com:alibaba/higress.git
git fetch upstream
git rebase upstream/main
git checkout -b your_awesome_patch
... add some work
git push origin your_awesome_patch
```

### 编码规范

请按照[CONTRIBUTING.md](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md)中的编码规范对自己的代码进行检查。
