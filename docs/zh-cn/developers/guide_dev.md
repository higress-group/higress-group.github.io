---
title: 为Higress贡献
keywords: Higress
description: 如果您有兴趣攻克Higress，欢迎您。首先，我们非常鼓励这种意愿。这是为您提供帮助的列表。
---

# 为Higress贡献

如果您有兴趣攻克Higress，欢迎您。首先，我们非常鼓励这种意愿。这是为您提供帮助的列表。

## 话题

- [为Higress贡献](#为higress贡献)
  - [话题](#话题)
  - [贡献插件](#贡献插件)
  - [报告安全问题](#报告安全问题)
  - [报告一般问题](#报告一般问题)
  - [代码和文档贡献](#代码和文档贡献)
    - [工作准备](#工作准备)
    - [分支定义](#分支定义)
    - [提交规则](#提交规则)
      - [提交讯息](#提交讯息)
      - [提交内容](#提交内容)
    - [PR 说明](#pr-说明)
  - [测试用例贡献](#测试用例贡献)
  - [致力于帮助任何事情](#致力于帮助任何事情)


## 贡献插件

Higress 基于 WASM 等方式具备了很好的可扩展性，具体贡献方式请参考此处[说明](https://github.com/alibaba/higress/tree/main/plugins)

对于使用 GO 语言开发 WASM 插件，可以参考这篇[文档](../user/wasm-go.md)


## 报告安全问题

安全问题应该始终得到认真对待。按照我们通常的原则，我们不鼓励任何人散布安全问题。如果您发现Higress的安全问题，请不要公开讨论，甚至不要公开问题。相反，我们建议您向我们发送一封私人电子邮件至[higress@googlegroups.com](mailto:higress@googlegroups.com)进行举报。

## 报告一般问题

坦白地说，我们认为Higress的每位用户都是非常友好的贡献者。体验Higress之后，您可能会对项目有一些反馈。然后随时通过[NEW ISSUE](https://github.com/alibaba/higress/issues/new/choose)打开[问题](https://github.com/alibaba/higress/issues/new/choose)。

因为我们在一个分布式的方式合作项目Higress，我们对此表示赞赏**编写良好**，**详细**，**明确**的问题报告。为了提高沟通效率，我们希望每个人都可以搜索您的问题是否在搜索列表中。如果发现它存在，请在现有问题下的评论中添加您的详细信息，而不要打开一个全新的issue。

为了使问题详细信息尽可能地标准，我们为问题报告者设置了“ [问题模板](https://github.com/alibaba/higress/blob/main/.github/ISSUE_TEMPLATE) ”。请**务必**按照说明填写模板中的字段。

在很多情况下，您可以打开一个问题：

*   错误报告
*   功能要求
*   性能问题
*   功能提案
*   功能设计
*   需要帮助
*   doc不完整
*   测试改进
*   有关项目的任何问题
*   等等

另外，我们必须提醒您，在填写新issue时，请记住从您的帖子中删除敏感数据。敏感数据可以是密码，密钥，网络位置，私人业务数据等。

## 代码和文档贡献

鼓励采取一切措施使Higress项目变得更好。在GitHub上，Higress的每个改进都可以通过PR（拉取请求的缩写）来实现。

*   如果发现错字，请尝试解决！
*   如果发现错误，请尝试修复它！
*   如果发现一些冗余代码，请尝试将其删除！
*   如果发现缺少一些测试用例，请尝试添加它们！
*   如果您可以增强功能，请**不要**犹豫！
*   如果发现隐式代码，请尝试添加注释以使其清晰！
*   如果您发现代码丑陋，请尝试重构它！
*   如果可以帮助改善文档，那就再好不过了！
*   如果发现文档不正确，请直接解决该问题！
*   ...

实际上，不可能完全列出它们。只要记住一个原则：

> 我们期待您的任何回复。

由于您已准备好通过PR改善Higress，因此建议您在此处查看PR规则。

*   [工作准备](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#工作区准备)
*   [分支定义](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#分支定义)
*   [提交规则](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#提交规则)
*   [PR说明](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#pr说明)

### 工作准备

要提出PR，我们假设您已经注册了GitHub ID。然后，您可以按照以下步骤完成准备工作：

1.  **FORK** Higress分支到您的存储库。要使此工作有效，您只需要单击[Higress / Higress](https://github.com/alibaba/higress)主页右边的按钮Fork 。然后，您将在`https://github.com/<your-username>/Higress`中`your-username`找到您的存储库，这是您的GitHub用户名。

2.  **CLONE**您自己的存储库以在本地进行开发。用于`git clone git@github.com:<your-username>/Higress.git`将存储库克隆到本地计算机。然后，您可以创建新分支来完成您希望进行的更改。

3.  **Set Remote**上游设置为`git@github.com:alibaba/higress.git`使用以下两个命令：

```
git remote add upstream git@github.com:alibaba/higress.git
git remote set-url --push upstream no-pushing

```

使用此远程设置，您可以像这样检查git远程配置：

```
$ git remote -v
origin     git@github.com:<your-username>/Higress.git (fetch)
origin     git@github.com:<your-username>/Higress.git (push)
upstream   git@github.com:alibaba/higress.git (fetch)
upstream   no-pushing (push)

```

加上这一点，我们可以很容易地将本地分支与上游分支同步。

### 分支定义

现在，我们假设通过拉取请求所做的所有贡献都是针对Higress中的[主分支](https://github.com/alibaba/higress/tree/main)。在做出贡献之前，了解分支定义会有所帮助。

作为贡献者，请再次记住，通过拉取请求进行的每个贡献都是为了分支发展。在Higress项目中，还有其他几个分支，我们通常称它们为发布分支（例如0.6.0、0.6.1）\功能分支，修补程序分支和主分支。

正式发布版本时，将有一个发布分支，并以版本号命名。

发布之后，我们将发布分支的提交合并到master分支中。

当发现某个版本中存在错误时，我们将决定在更高版本中进行修复或在特定修补程序版本中进行修复。当我们决定修复此修补程序版本时，我们将根据相应的发行分支检出该修补程序分支，执行代码修复和验证，然后将其合并到开发分支和master分支中。

对于更大的功能，我们将拉出功能分支以进行开发和验证。

### 提交规则

实际上，在Higress中，我们在提交时要认真对待两个规则：

*   [提交讯息](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#提交消息)
*   [提交内容](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#提交内容)

#### 提交讯息

提交消息可以帮助审稿人更好地了解提交的PR的目的。它也可以帮助加快代码审查过程。我们鼓励贡献者**清楚明白**提交消息而不是模棱两可的消息。通常，我们提倡以下提交消息类型：

*   docs：xxxx。例如，“ docs：添加有关Higress群集安装的文档”。
*   feature：xxxx。例如，“新功能：在AT模式下支持oracle”。
*   bugfix：xxxx。例如，“错误修正：修正了输入nil参数时的错误”。
*   refactor：xxxx。例如，“重构：简化以使代码更具可读性”。
*   test：xxx。例如，“测试：为func InsertIntoArray添加单元测试用例”。
*   其他可读和显式的表达方式。

另一方面，我们不鼓励捐助者像以下方式提交消息：

*   ~~修正错误~~
*   ~~更新~~
*   ~~添加文档~~

如果您迷路了，请参阅《[如何编写Git提交消息](http://chris.beams.io/posts/git-commit/)》作为开始。

#### 提交内容

提交内容表示一次提交中包含的所有内容更改。我们最好将内容包含在一个提交中，这样可以在没有任何其他提交帮助的情况下支持审阅者的完整审阅。换句话说，一次提交中的内容可以传递CI以避免代码混乱。简而言之，我们要记住三个小规则：

*   避免在提交中进行很大的更改；
*   每次提交均完整且可审查。
*   提交时检查git config（`user.name`，`user.email`）以确保它与您的GitHub ID相关联。

另外，在代码更改部分，我们建议所有贡献者都应阅读[Higress](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#代码风格)的[代码样式](https://github.com/alibaba/higress/blob/main/CONTRIBUTING_CN.md#代码风格)。

无论提交消息还是提交内容，我们都更加注重代码审查。

### PR 说明

PR是更改Higress项目文件的唯一方法。为了帮助审稿人更好地实现目标，PR 说明不能太详细。我们鼓励贡献者遵循[PR模板](https://github.com/alibaba/higress/blob/main/.github/PULL_REQUEST_TEMPLATE.md)完成请求请求。

## 测试用例贡献

任何测试用例都将受到欢迎。当前，Higress功能测试用例是高度优先的。

## 致力于帮助任何事情

我们选择GitHub作为Higress合作的主要场所。因此，Higress的最新更新始终在这里。尽管通过PR捐款是一种明确的帮助方式，但我们仍然呼吁其他方式。

*   如果可以的话，回复他人的问题；
*   帮助解决其他用户的问题；
*   帮助审查他人的PR设计；
*   帮助审查PR中其他人的代码；
*   讨论有关Higress的问题，以使事情更加清晰；
*   在GitHub之外倡导Higress技术;
*   在Higress上写博客，等等。

