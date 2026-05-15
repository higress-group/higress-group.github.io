---
title: "从一个隐藏 18 年的 Nginx 漏洞，看网关安全架构的演进"
description: "从一个隐藏 18 年的 Nginx 漏洞，看网关安全架构的演进"
date: "2026-05-15"
category: "article"
keywords: ["Higress"]
authors: "张添翼"
---



> CVE-2026-42945，CVSS 9.2，影响 Nginx 0.6.27 到 1.30.0，一个存在了 18 年的堆溢出漏洞。它不是什么精巧的攻击链，而是一个最朴素的状态管理疏忽。但正是这种"低级错误"，让我们有机会重新审视网关的安全设计哲学。

## 漏洞原理：两阶段执行之间的状态幽灵

### Nginx 的脚本引擎

Nginx 的 `rewrite` 和 `set` 指令不是简单的字符串替换。它们被编译成一系列操作码（opcodes），由 Nginx 内部的脚本引擎执行。这个引擎采用了一个经典的性能优化设计——**两阶段执行（two-pass）**：

- **第一次执行（长度计算）**：遍历所有操作码，计算出最终字符串的总长度，一次性从内存池分配刚好够大的 buffer。
- **第二次执行（数据拷贝）**：再遍历一遍，把实际数据写入刚分配的 buffer。

这个设计避免了反复 realloc，在 C 语言级别是很合理的优化。但它有一个隐含的前提条件：**两次遍历看到的引擎状态必须完全一致**。

### 致命的状态泄漏

考虑这个再普通不过的 Nginx 配置：

```nginx
location ~ ^/api/(.*)$ {
    rewrite ^/api/(.*)$ /internal?migrated=true;
    set $original_endpoint $1;
}
```

`rewrite` 的替换串里有一个 `?`。Nginx 看到 `?`，会认为后面的部分是 query string，于是调用 `ngx_http_script_start_args_code()`，把引擎的 `e->is_args` 标志永久设为 `1`。

接下来执行 `set $original_endpoint $1`。这里引用了正则捕获组 `$1`，触发 `ngx_http_script_complex_value_code()`。关键来了——这个函数为了计算变量值的长度，创建了一个**全新的、零初始化的子引擎** `le`：

```c
ngx_memzero(&le, sizeof(ngx_http_script_engine_t)); // 完全清零
le.ip = code->lengths->elts;
```

因为 `le.is_args` 是 0，长度计算时走了"不转义"的分支，返回原始长度。

但拷贝阶段用的是**主引擎** `e`，它的 `is_args` 还是 1。于是拷贝代码走了"需要转义"的分支，把 URI 中的 `+`、`&`、`=` 等字符从 1 字节展开成 3 字节（如 `+` → `%2B`）。

**分配了 raw_size 的 buffer，写入了 raw_size + 2*N 字节的数据。** 堆溢出。

### 为什么 18 年没被发现？

这个问题比漏洞本身更有意思：

1. **触发需要三重条件同时满足**：rewrite 带 `?`、set 引用捕获组、请求 URI 包含大量需要转义的字符（`+&=`）。缺一个都不会溢出。
2. **大部分溢出是无声的**：Nginx 的内存池是块状分配的，小溢出大概率落在 padding 或相邻 chunk 的 metadata 上，不会立即 crash。
3. **Worker 崩溃不等于漏洞暴露**：多进程架构下，worker crash 后 master 自动拉起新 worker，运维很难注意到偶尔的 segfault 是攻击还是偶发 bug。
4. **two-pass 状态一致性不在审计视野内**：静态分析工具检查内存安全，人工审计检查逻辑正确性，但"两个执行阶段之间的隐式状态契约被打破"这种问题，两者都很难捕获。

**状态机的隐式契约被新功能打破了，而这份契约从来没被写下来过。** 2008 年写 rewrite 引擎时，`is_args` 的语义是"当前在处理 query string 部分"，设了就不需要重置——因为同一个处理流程里不会再次进入 complex value 逻辑。后来 `set` 指令支持了捕获组引用，才打破了这个假设。

## 根因：指令式配置的内在风险

Nginx 的 `rewrite`、`set`、`if` 等指令，本质上是在用**配置语言模拟一门命令式编程语言**。它有变量赋值、正则捕获、条件分支、循环（`last`/`break`），甚至有隐式的状态机。

这种设计在灵活性上是成功的——你几乎可以用 nginx.conf 实现任意的请求处理逻辑。但它也带来了根本性的问题：

**指令之间的交互效应（interaction effect）是不可预测的。** `rewrite` 改了引擎状态，`set` 读到了被改过的状态，没有任何文档或机制来约束这种跨指令的状态传播。这不是 Nginx 独有的问题，所有试图把编程能力塞进配置语言的系统都会遇到——只是在 Nginx 这里，后果是 RCE。

## Envoy 的安全哲学：声明式配置

Envoy 选择了完全不同的路线。它的配置是**声明式的**：

```yaml
route:
  match:
    regex: "^/api/(.*)$"
  rewrite:
    regex_rewrite:
      pattern:
        regex: "^/api/(.*)$"
      substitution: "/internal/\\1"
```

没有变量、没有赋值、没有状态机。每个路由规则是独立的、自包含的。rewrite 的匹配和替换在一条规则里完成，不存在"先 rewrite 改了全局状态，后面 set 读到脏状态"的可能。

**这种设计从根本上消除了状态泄漏类漏洞的攻击面。** Envoy 的 route 配置不需要维护跨规则的引擎状态，自然也就不存在两阶段不一致的问题。

但声明式配置也有代价——灵活性不足：

- 捕获组只能在当前规则的 substitution 里用，**不能保存成变量传给后续逻辑**
- 无法表达"先 rewrite URI，再把捕获组注入到请求 header 传给上游"
- query string 的操作能力有限——`query_parameters` 只是匹配条件，不是改写工具
- 没有条件分支和循环，复杂的请求处理逻辑无法表达

对于简单的路由重写，Envoy 绰绰有余。但对于从 Nginx 迁移过来的复杂配置，尤其是那些依赖 rewrite + set + 捕获组传递的场景，Envoy 原生的 route 配置力不从心。

## Higress WASM 插件：用代码替代指令

Higress 的 WASM 插件机制提供了一个优雅的解法——**既然指令式配置有状态管理的隐患，声明式配置又不够灵活，那就用真正的代码来解决问题。**

以 nginx rewrite + set 的等价能力为例，一个 Higress WASM 插件的实现大概是这样的：

```go
func onHttpRequestHeaders(ctx wrapper.HttpContext, config PluginConfig) types.Action {
    // 1. 获取请求 path
    path, _ := proxywasm.GetHttpRequestHeader(":path")
    pathPart, query := splitPathQuery(path)
    
    // 2. 正则匹配
    for _, rule := range config.Rules {
        matches := rule.Regex.FindStringSubmatch(pathPart)
        if matches == nil {
            continue
        }
        
        // 3. 构建新 path（替换捕获组）
        newPath := expandCaptures(rule.Replacement, matches)
        
        // 4. 处理 query string
        newQuery := mergeQuery(query, rule.QueryAppend, rule.QueryTemplate, matches)
        
        // 5. 保存变量（等价于 nginx set）
        for _, v := range rule.SetVars {
            value := matches[v.CaptureGroup]
            // 给后续插件用
            proxywasm.SetProperty([]string{v.Name}, []byte(value))
            // 给上游服务用
            proxywasm.AddHttpRequestHeader("X-Rewrite-"+v.Name, url.QueryEscape(value))
        }
        
        // 6. 写回修改后的 path
        fullPath := joinPathQuery(newPath, newQuery)
        proxywasm.ReplaceHttpRequestHeader(":path", fullPath)
        
        if rule.Break {
            break
        }
    }
    return types.ActionContinue
}
```

这段代码做的事情和 Nginx 的 rewrite + set 完全等价，但有几个本质区别：

### 1. 没有两阶段状态不一致的陷阱

每个请求进来，插件函数被调用一次。path 读一次、正则匹配一次、新路径算出来、写回。不存在"先算长度再拷贝"的两阶段设计，自然不存在两阶段状态不一致的可能。

### 2. 运行在 WASM 沙箱中

这是最关键的一点。WASM 插件运行在一个沙箱化的虚拟机里：

- **内存隔离**：插件的内存空间与网关进程完全隔离。即使插件代码有 buffer 计算错误，溢出也只发生在 WASM 虚拟机的线性内存中，**不会影响宿主进程（Envoy）的堆**。
- **能力受限**：WASM 插件只能通过 Proxy-WASM SDK 提供的 API 与网关交互——读写 header、读写 property、发 HTTP 请求。它不能直接操作宿主进程的内存，不能调用宿主的函数，不能访问文件系统。
- **故障隔离**：插件 panic 或崩溃，影响范围仅限于当前请求。不会导致整个 worker 进程 crash，更不会导致 RCE。

对比 Nginx 的 C 模块——任何内存错误都是直接发生在 worker 进程的地址空间里，堆溢出可以直接覆盖相邻的函数指针，自然的攻击路径就是 RCE。

### 3. 代码逻辑是显式的

Nginx 的指令之间有隐式的状态传播（`is_args` flag 就是一个例子），这种传播既没有文档，也不容易从配置文本推断出来。

WASM 插件里，所有逻辑都是显式的 Go 代码。变量的赋值和传递一目了然，不存在"一个指令的副作用悄悄影响另一个指令行为"的可能。代码审查和测试都比审查 Nginx 配置容易得多。

## 安全架构的三个层次

从这个漏洞出发，我们可以看到网关安全架构的三个层次：

| | Nginx | Envoy 原生 | Higress WASM |
|---|---|---|---|
| **配置方式** | 指令式 | 声明式 | 代码（Go/Rust） |
| **状态管理** | 隐式全局状态机 | 无状态 | 显式局部变量 |
| **内存安全** | C 语言，无保护 | C++，但核心路径安全 | WASM 沙箱隔离 |
| **灵活性** | 高（但有安全隐患） | 中 | 高（且安全） |
| **漏洞影响** | Worker 进程 RCE | 配置解析 bug | 仅当前请求失败 |

这不是说 Envoy 或 Higress 没有漏洞。任何软件都有 bug。但不同的架构设计决定了**漏洞的爆炸半径**：

- Nginx 指令式的状态泄漏 → 宿主进程堆溢出 → RCE
- Envoy 声明式的配置 → 即使有 bug 也是配置解析层面，不涉及运行时状态泄漏
- Higress WASM → 即使插件有 bug，也困在沙箱里，最坏情况是当前请求 500

## 写在最后

CVE-2026-42945 不是最后一个"隐藏在配置语言中的安全漏洞"。任何试图把图灵完备的能力塞进配置格式的系统，都会面临状态管理的复杂性。Nginx 的 rewrite 模块在 2008 年是合理的工程选择，18 年后的今天，我们有更好的选择。

Envoy 用声明式配置消除了状态泄漏的攻击面，但牺牲了灵活性。Higress 的 WASM 插件在保留灵活性的同时，通过沙箱隔离从根本上限制了漏洞的影响范围。

**用代码替代指令，用沙箱替代信任。** 这可能是网关安全演进的正确方向。

如果你正在从 Nginx 迁移到 Higress，Higress 社区已经有了一个 [nginx-rewrite-compatible](https://github.com/higress-group/higress/tree/main/plugins/wasm-go/extensions/nginx-rewrite-compatible) WASM 插件，完整覆盖了 rewrite + set 的所有能力，可以直接替换存在漏洞的 Nginx 配置。

---

*参考资料：*
- *CVE-2026-42945 详细分析：<https://depthfirst.com/research/nginx-rift-achieving-nginx-rce-via-an-18-year-old-vulnerability>*
- *Higress WASM 插件开发文档：<https://higress.io/docs/latest/plugins/custom/>*
