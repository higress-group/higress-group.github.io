---
title: New contributor guide
keywords: Higress, contributor
description: This is a guide for new comers who wants to contribute to Higress.
---

# New contributor guide

This is a guide for new contributor who wants to contribute to Higress.

### Subscribe to the mailing list

TBD

### Reporting issue

You can always reporting an issue to Higress via Github [Issues](https://github.com/alibaba/higress/issues).

If you are reporting bugs, please refer to the issue report [template](https://github.com/alibaba/higress/issues/new?template=BUG_REPORT.md).

If you are reporting feature, please refer to the issue report [template](https://github.com/alibaba/higress/issues/new?template=FEATURE_REQUEST.md).

If you are reporting regular issues, like raise an question, you can open an [regular issue](https://github.com/alibaba/higress/issues/new).

### Sending pull request

* Follow the checklist in the [pull request template](https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
* Before you sending out the pull request, please sync your forked repository with remote repository, this will make your pull request simple and clear. See guide below:

```sh
git remote add upstream git@github.com:alibaba/higress.git
git fetch upstream
git rebase upstream/main
git checkout -b your_awesome_patch
... add some work
git push origin your_awesome_patch
```

### Code convention

Please check the [CONTRIBUTING.md](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_EN.md) for code convention.
