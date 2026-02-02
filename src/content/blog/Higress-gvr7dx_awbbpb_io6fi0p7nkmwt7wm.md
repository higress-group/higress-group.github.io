---
title: "30分钟搞定 Ingress Nginx 到 Higress 迁移？AI 帮我干完了脏活累活"
description: "30分钟搞定 Ingress Nginx 到 Higress 迁移？AI 帮我干完了脏活累活"
date: "2026-02-02"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

 

> 作者：一个不想加班的网关运维

## 起因

周五下午四点半，老板把一条 Kubernetes 官方声明甩到群里：

> **Ingress NGINX 将于 2026 年 3 月正式退役。**
> 
> 选择在退役后继续使用 Ingress NGINX，将使你和你的用户面临安全攻击风险。现有替代方案都不是直接替换品，迁移需要时间和工程资源。**大约一半的云原生环境会受到影响。你只有两个月的准备时间。**
> 
> —— Kubernetes Steering Committee & Security Response Committee  
> 官方声明：https://kubernetes.io/blog/2026/01/29/ingress-nginx-statement/

"下周一之前，给我个迁移方案。"

我看了眼集群里 60 多个 Ingress 资源，还有零零散散的 snippet 配置，脑子里已经开始盘算要加班几个晚上了。这不是"性能优化"的小需求，这是**安全合规的硬性要求**——再不迁移，等 ingress-nginx 停止维护，出了安全漏洞都没人修。

直到我想起了前阵子配置的 Clawdbot，以及 Higress 社区刚发布的迁移 skill。

## 为什么选择 Higress？

面对 Ingress Nginx 退役，市面上的替代方案不少：Traefik、Kong、Envoy Gateway、Higress 等。

选型时我参考了 **Sealos 的实践**。他们 2023 年就完成了迁移，量级是 **2000+ 租户的超高并发场景**，有详细的技术对比文章可以参考：[《Sealos：为什么我们从 Nginx 切换到 Envoy/Higress（2000 租户实战）》](https://sealos.run/blog/sealos-envoy-vs-nginx-2000-tenants)

这种量级的生产验证给了我信心，至少说明 Higress 在稳定性和性能上是经过大规模考验的。

## 准备工作：给 Clawdbot 配置 Skill

开始之前，需要让 Clawdbot 学会这套迁移技能。配置方式很简单——把 Higress 仓库的这两个 skills 链接给到 Clawdbot 就行：

```
https://github.com/alibaba/higress/tree/main/.claude/skills/higress-clawdbot-integration
https://github.com/alibaba/higress/tree/main/.claude/skills/higress-wasm-go-plugin
```
- **nginx-to-higress-migration**：迁移主流程，负责分析兼容性、搭建仿真环境、生成测试和操作手册
- **higress-wasm-go-plugin**：WASM 插件开发，当遇到 snippet 等内置插件无法覆盖的场景时会自动调用

配置好之后，Clawdbot 就具备了完整的迁移能力——包括在需要时自动开发 WASM 插件，不用你额外操心。

## 先说结论

**整个迁移过程，我实际敲键盘的时间不超过 10 分钟。** Clawdbot 在本地 Kind 集群里跑完了所有验证，最后给我输出了一份详细的操作手册。我只需要 review 一下，然后在生产环境照着执行就行。

周五晚上六点，我准时下班了。

## 为什么不让 AI 直接操作生产环境？

我知道有些同学可能会问：既然 AI 这么能干，为什么不直接让它操作生产环境？

**这个问题的答案是：因为我还想干到退休。**

生产环境是红线，任何自动化工具都不应该直接碰生产。这不是 AI 能不能的问题，是运维原则问题。

这个 skill 的设计思路非常对我胃口：**AI 在仿真环境里折腾，人在生产环境里执行**。各司其职，出了问题也能追溯。

## 实战流程

### 第一步：让 Clawdbot 了解现状

我直接在 Discord 里跟 Clawdbot 说：

```
帮我分析一下当前 K8s 集群的 ingress-nginx 配置，准备迁移到 Higress
```

Clawdbot 自动执行了这些命令：

```bash
kubectl get ingress -A -o yaml > ingress-backup.yaml
kubectl get configmap -n ingress-nginx ingress-nginx-controller -o yaml
kubectl get ingress -A -o yaml | grep "nginx.ingress.kubernetes.io" | sort | uniq -c
```

几秒钟后，它给我输出了分析报告：

- 共 63 个 Ingress 资源
- 使用了 18 种 nginx annotation
- **发现 3 个 Ingress 使用了 configuration-snippet**（这是个坑！）

关于那 3 个 snippet，Clawdbot 详细列出了它们的功能：
1. 一个是添加自定义响应头
2. 一个是简单的 IP 白名单校验
3. 一个是给某个内部服务加了 basic auth

### 第二步：Kind 仿真环境搭建

这一步是整个流程的精髓。

Clawdbot 自动用 Kind 在本地创建了一个 K8s 集群，然后：

1. 把生产环境的所有 Ingress 资源导入（脱敏后）
2. 部署了 mock 后端服务
3. 安装 Higress，配置成和生产一样的 ingressClass

```bash
# Clawdbot 执行的命令
kind create cluster --name higress-migration-test

# 安装 Higress（和 nginx 并行运行）
helm install higress higress/higress \
  -n higress-system --create-namespace \
  --set global.ingressClass=nginx \
  --set global.enableStatus=false
```

**关键配置**：`global.enableStatus=false`

这个参数很重要——它让 Higress 不去更新 Ingress 的 status 字段，避免和 nginx 打架。两个 controller 和平共处，各自处理同一批 Ingress。

### 第三步：验证迁移兼容性

Clawdbot 生成了测试脚本，覆盖所有 63 个 Ingress 的路由：

```bash
./scripts/generate-migration-test.sh > migration-test.sh
./migration-test.sh 127.0.0.1:8080
```

**60 个直接通过**，因为标准 annotation Higress 原生支持。

剩下 3 个使用 snippet 的，Clawdbot 分析后给出了解决方案：

| 原 nginx 配置 | Higress 方案 |
|--------------|-------------|
| User-Agent 识别移动端特定版本，重定向到移动页面 | 使用内置 `custom-response` 插件 |
| IP 白名单 | 使用内置 `ip-restriction` 插件 |
| Basic Auth | 使用内置 `basic-auth` 插件 |

**这三个都不需要写自定义 WASM 插件！** Higress 内置插件直接覆盖。

**关键是：原有 Ingress 资源完全不动**。Clawdbot 自动生成了对应的插件配置（WasmPlugin CRD），在 Kind 环境里验证通过。

### 番外：当内置插件搞不定时——WASM 插件全自动开发

上面的案例比较顺利，内置插件就能覆盖。但我们还有另一套环境，情况就没这么简单了。

那套环境的 IoT 平台有一段 Lua 脚本，实现了 **设备在线状态上报到 Redis** 的功能：

```nginx
location /api/device/heartbeat {
  access_by_lua_block {
    local redis = require "resty.redis"
    local red = redis:new()
    
    -- 从请求参数中获取加密的设备号
    local encrypted_device = ngx.var.arg_d
    if not encrypted_device then
      ngx.exit(400)
    end
    
    -- AES 解密设备号
    local device_id = aes_decrypt(encrypted_device, secret_key)
    if not device_id then
      ngx.log(ngx.ERR, "Failed to decrypt device ID")
      ngx.exit(403)
    end
    
    -- 连接 Redis 并更新在线状态
    red:connect("redis.internal", 6379)
    red:setex("device:online:" .. device_id, 300, os.time())
    red:close()
  }
}
```

这种自定义业务逻辑（Redis 操作 + 参数解密），没有任何内置插件能直接替代。以前遇到这种情况，要么硬着头皮学 WASM 开发，要么找借口拖延迁移。

**神奇的是，我什么都不用做。**

Clawdbot 在分析兼容性时发现这段 snippet 无法用内置插件替代，就**自动调用了 `higress-wasm-go-plugin` skill**，开始了插件开发流程。整个过程我只是在旁边看着：

#### 1. 需求分析（3 秒）

Clawdbot 分析 Lua 代码，提取出核心逻辑：
- 从请求参数 `d` 读取加密设备号
- AES 解密设备号
- 连接 Redis，写入在线状态（TTL 300 秒）
- 错误处理和日志记录

#### 2. 代码生成（10 秒）

自动生成类型安全的 Go 代码：

```go
// 自动生成的 WASM 插件核心逻辑
func onHttpRequestHeaders(ctx wrapper.HttpContext, cfg config.DeviceOnlineConfig) types.Action {
    // 读取加密设备号参数
    encryptedDevice := getQueryParam(ctx, "d")
    if encryptedDevice == "" {
        proxywasm.SendHttpResponse(400, "device-online.missing_param", 
            nil, []byte("Missing device parameter"), -1)
        return types.ActionPause
    }
    
    // AES 解密设备号
    deviceID, err := aesDecrypt(encryptedDevice, cfg.AESKey)
    if err != nil {
        proxywasm.LogErrorf("Failed to decrypt device ID: %v", err)
        proxywasm.SendHttpResponse(403, "device-online.decrypt_failed",
            nil, []byte("Invalid device ID"), -1)
        return types.ActionPause
    }
    
    // 异步更新 Redis
    key := fmt.Sprintf("device:online:%s", deviceID)
    timestamp := fmt.Sprintf("%d", time.Now().Unix())
    
    err = cfg.RedisClient.SetEx(key, timestamp, cfg.TTL, func(response resp.Value) {
        if response.Error() == nil {
            proxywasm.LogInfof("Device %s online status updated", deviceID)
        }
        proxywasm.ResumeHttpRequest()
    })
    
    if err != nil {
        proxywasm.LogErrorf("Redis call failed: %v", err)
        return types.ActionContinue // 降级：Redis 失败不阻塞请求
    }
    
    return types.HeaderStopAllIterationAndWatermark
}
```

生成的代码包含：
- 完整的参数解析和 AES 解密
- Redis 客户端配置和连接池管理（在 parseConfig 中初始化）
- 异步 SetEx 调用，保证性能
- 错误降级策略（Redis 失败不影响主流程）

#### 3. 构建编译（3 秒）

```bash
# Clawdbot 自动执行
cd payment-auth-plugin
go mod tidy
GOOS=wasip1 GOARCH=wasm go build -o main.wasm ./
```

编译成功，生成 `main.wasm` 文件。

#### 4. 打包推送（10 秒）

```bash
# 构建 OCI 镜像并推送到 Harbor
docker build -t harbor.internal/higress-plugins/device-online:v1 .
docker push harbor.internal/higress-plugins/device-online:v1
```

#### 5. 部署验证（1 分钟）

自动生成 WasmPlugin CRD 并部署到 Kind 环境：

```yaml
apiVersion: extensions.higress.io/v1alpha1
kind: WasmPlugin
metadata:
  name: device-online
  namespace: higress-system
spec:
  url: oci://harbor.internal/higress-plugins/device-online:v1
  phase: UNSPECIFIED_PHASE
  priority: 100
  defaultConfig:
    aesKey: "${DEVICE_AES_KEY}"
    redisCluster: "redis.internal:6379"
    ttl: 300
```

然后自动跑测试：

```bash
# 正常请求（有效的加密设备号）
curl "http://localhost:8080/api/device/heartbeat?d=${ENCRYPTED_DEVICE_ID}"
# ✅ 200 OK
# Redis 验证：redis-cli GET device:online:device123 -> 当前时间戳

# 缺少参数
curl "http://localhost:8080/api/device/heartbeat"
# ✅ 400 Bad Request

# 无效的加密数据
curl "http://localhost:8080/api/device/heartbeat?d=invalid"
# ✅ 403 Invalid device ID
```

**全部通过。**

#### 整体耗时

| 阶段 | 耗时 | 备注 |
|-----|-----|------|
| 需求分析 | 3 秒 | AI 解析 Lua 代码 |
| 代码生成 | 10 秒 | 生成完整 Go 项目 |
| 编译构建 | 3 秒 | WASM 编译 |
| 镜像推送 | 10 秒 | 推送到 Harbor |
| 部署验证 | 1 分钟 | CRD 部署 + 测试 |
| **总计** | **< 2 分钟** | 全程无需手写代码 |

以前这种活，光是学 proxy-wasm SDK 就得一两天，写代码调试再一两天，前后加起来一周起步。现在 **不到 2 分钟**，而且生成的代码质量比我自己写的还规范。

**这才是 AI 辅助开发该有的样子：不是帮你补全几行代码，而是把整个 DevOps 流程自动化。**

### 第四步：输出操作手册

验证全部通过后，Clawdbot 给我生成了一份操作手册：

```markdown
# Nginx to Higress 迁移操作手册

## 前置检查
- [ ] 确认已备份所有 Ingress 资源
- [ ] 确认 DNS TTL 已降低（建议 60s）
- [ ] 确认监控告警已配置

## 迁移步骤

### 1. 安装 Higress（预计 5 分钟）
（具体命令）

### 2. 下发 snippet 替代配置（预计 10 分钟）
针对 3 个使用 snippet 的 Ingress，通过插件配置实现等效功能：
- 部署 custom-response 插件配置（替代 User-Agent 识别 + 移动端路由 snippet）
- 部署 ip-restriction 插件配置（替代 IP 白名单 snippet）
- 部署 basic-auth 插件配置（替代认证 snippet）

**注意：原有 Ingress 资源无需修改，保持 100% 兼容**

### 3. 验证 Higress 路由（预计 10 分钟）
（测试命令和预期结果）

### 4. 流量切换（预计 5 分钟）
（DNS/LB 切换步骤）

### 5. 观察监控（持续）
（关注指标清单）

## 回滚方案
（一键回滚命令）
```

## 生产环境执行

周一早上，我拿着这份手册，花了 30 分钟完成了迁移：

1. **09:00** - 安装 Higress，和 nginx 并行运行
2. **09:10** - 下发插件配置，替代原 snippet 功能（Ingress 资源不动）
3. **09:20** - 验证全部路由
4. **09:25** - 切换 DNS
5. **09:30** - 观察监控，一切正常

**全程零报警，零回滚。**

**关键优势：原有 Ingress 资源完全不需要修改，回滚就是切回 nginx，配置还在，风险极低。**

## 几点体会

### 1. 仿真环境是安全网

Kind 集群成本几乎为零，但能帮你发现 90% 的问题。让 AI 在仿真环境里折腾，比让人在生产环境里试错安全太多了。

### 2. AI 是工具，不是替代品

Clawdbot 帮我干了分析、验证、生成文档这些脏活累活，但最终执行还是我来。这种分工很合理——AI 负责提效，人负责兜底。

### 3. 好的 Skill 设计很重要

这个 nginx-to-higress-migration skill 的设计思路很清晰：
- 先分析兼容性
- 再在仿真环境验证
- 最后输出人可执行的手册

如果设计成"AI 直接帮你迁移生产环境"，我是绝对不敢用的。

### 4. 操作手册有测试依据，不是 AI 幻觉

这点很重要——Clawdbot 输出的操作手册，每一条都能追溯到 Kind 环境里的实际测试结果。哪个 Ingress 需要改、怎么改、改完预期什么效果，都是验证过的，不是 AI 凭空编出来的。

用 AI 最怕的就是幻觉，尤其是生产环境操作。这套流程的设计把幻觉风险降到了最低：**先跑测试，再出文档，文档里的结论都有测试日志背书。**

## 写在最后

Kubernetes 官方声明说得很清楚：**你只有两个月时间。**

迁移这种事，以前要写方案、评审、排期、执行、验收，走完一套至少一周。但现在情况不一样了——ingress-nginx 退役后不再有安全更新，继续用就是在裸奔。

好消息是，有了 AI 辅助，一天就能搞定迁移验证。**核心逻辑没变：生产环境必须由人来操作，AI 只是帮你提前验证和准备。**

如果你还在用 ingress-nginx，别等了。两个月看起来很长，但要评估影响、准备方案、协调资源、灰度上线、观察稳定性……时间真的不多。

这个 skill 能帮你把"迁移验证"这一步压缩到 30 分钟，省下来的时间用来做更重要的事——比如说服老板批预算，或者提前想好回滚方案。

---

## 相关链接

- [Higress nginx-to-higress-migration skill](https://github.com/alibaba/higress/tree/main/.claude/skills/nginx-to-higress-migration)
- [Higress 官方文档](https://higress.io/)
- [Clawdbot](https://github.com/clawdbot/clawdbot)
