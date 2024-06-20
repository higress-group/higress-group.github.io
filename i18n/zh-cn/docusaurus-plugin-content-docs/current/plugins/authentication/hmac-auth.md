---
title: HMAC 认证
keywords: [higress, auth]
description: HMAC 认证插件配置参考
---

## 功能说明

`hmac-auth` 插件实现了基于 HMAC 算法为 HTTP 请求生成不可伪造的签名，并基于签名实现身份认证和鉴权。

## 配置字段

### 全局配置

| 名称          | 数据类型        | 填写要求 | 默认值 | 描述                                                                              |
| ------------- | --------------- | -------- | ------ |---------------------------------------------------------------------------------|
| `consumers`   | array of object | 必填     | -      | 配置服务的调用者，用于对请求进行认证                                                              |
| `date_offset` | number          | 选填     | -      | 配置允许的客户端最大时间偏移，单位为秒，根据请求头 `Date` 解析客户端 UTC 时间，可用于避免请求重放；未配置时，不做校验               |
| `global_auth` | bool | 选填     | -      | 若配置为true，则全局生效认证机制; 若配置为 false，则只对做了配置的域名和路由生效认证机制; 若不配置则仅当没有域名和路由配置时全局生效（兼容机制） |

`consumers` 中每一项的配置字段说明如下：

| 名称     | 数据类型 | 填写要求 | 默认值 | 描述                          |
| -------- | -------- | -------- | ------ |-----------------------------|
| `key`    | string   | 必填     | -      | 配置从请求的 `x-ca-key` 头中提取的 key |
| `secret` | string   | 必填     | -      | 配置用于生成签名的 secret            |
| `name`   | string   | 必填     | -      | 配置该 consumer 的名称            |


### 域名和路由级配置

| 名称             | 数据类型        | 填写要求                                          | 默认值 | 描述                              |
| ---------------- | --------------- | ------------------------------------------------- | ------ |---------------------------------|
| `allow`          | array of string | 必填                                              | -      | 对于符合匹配条件的请求，配置允许访问的 consumer 名称 |

**注意：**
- 对于通过认证鉴权的请求，请求的 header 会被添加一个 `X-Mse-Consumer` 字段，用以标识调用者的名称。

## 配置示例

以下配置将对网关特定路由或域名开启 Hmac Auth 认证和鉴权，注意 `key` 字段不能重复。

### 对特定路由或域名开启

**全局配置**

```yaml
consumers: 
- key: appKey-example-1
  secret: appSecret-example-1
  name: consumer-1
- key: appKey-example-2
  secret: appSecret-example-2
  name: consumer-2
global_auth: false
```

**路由级配置**

对 route-a 和 route-b 这两个路由做如下配置：

```yaml
allow: 
- consumer1
```

对 *.exmaple.com 和 test.com 在这两个域名做如下配置：

```yaml
allow:
- consumer2
```

每条匹配规则下的 `allow` 字段用于指定该匹配条件下允许访问的调用者列表；

若是在控制台进行配置，此例指定的 `route-a` 和 `route-b` 即在控制台创建路由时填写的路由名称，当匹配到这两个路由时，将允许 `name` 为 `consumer1` 的调用者访问，其他调用者不允许访问；

此例指定的 `*.example.com` 和 `test.com` 用于匹配请求的域名，当发现域名匹配时，将允许 `name` 为 `consumer2` 的调用者访问，其他调用者不允许访问。

认证成功后，请求的header中会被添加一个 `X-Mse-Consumer` 字段，其值为调用方的名称，例如 `consumer-1`。

## 签名机制说明

### 配置准备

如上指引，在插件配置中配置生成和验证签名需要用的凭证配置

- key: 用于请求头 `x-ca-key` 中设置
- secret: 用于生成请求签名

### 客户端签名生成方式

#### 流程简介

客户端生成签名一共分三步处理：

1. 从原始请求中提取关键数据，得到一个用来签名的字符串

2. 使用加密算法和配置的 `secret` 对关键数据签名串进行加密处理，得到签名

3. 将签名所相关的所有头加入到原始HTTP请求中，得到最终HTTP请求

如下图所示：

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188113.png)

#### 签名串提取流程

客户端需要从Http请求中提取出关键数据，组合成一个签名串，生成的签名串的格式如下：

```text
HTTPMethod
Accept
Content-MD5
Content-Type
Date
Headers
PathAndParameters
```

以上7个字段构成整个签名串，字段之间使用\n间隔，如果Headers为空，则不需要加\n，其他字段如果为空都需要保留\n。签名大小写敏感。下面介绍下每个字段的提取规则：

- HTTPMethod：HTTP 的方法，全部大写，比如 POST

- Accept：请求中的 Accept 头的值，可为空。建议显式设置 Accept Header。当 Accept 为空时，部分 Http 客户端会给 Accept 设置默认值为 `*/*`，导致签名校验失败。

- Content-MD5：请求中的 Content-MD5 头的值，可为空只有在请求存在 Body 且 Body 为非 Form 形式时才计算 Content-MD5 头，下面是 Java 的 Content-MD5 值的参考计算方式：

```java
String content-MD5 = Base64.encodeBase64(MD5(bodyStream.getbytes("UTF-8")));
```

- Content-Type：请求中的 Content-Type 头的值，可为空

- Date：请求中的 Date 头的值，当未开启 `date_offset` 配置时，可为空，否则将用于时间偏移校验

- Headers：用户可以选取指定的 header 参与签名，关于 header 的签名串拼接方式有以下规则：
    - 参与签名计算的 Header 的 Key 按照字典排序后使用如下方式拼接
    ```text
    HeaderKey1 + ":" + HeaderValue1 + "\n"\+
    HeaderKey2 + ":" + HeaderValue2 + "\n"\+
    ...
    HeaderKeyN + ":" + HeaderValueN + "\n"
    ```
    - 某个 Header 的 Value 为空，则使用 HeaderKey+":"+"\n" 参与签名，需要保留 Key 和英文冒号
    - 所有参与签名的 Header 的 Key 的集合使用英文逗号分割放到 Key 为 X-Ca-Signature-Headers 的 Header 中
    - 以下 Header 不参与 Header 签名计算：X-Ca-Signature、X-Ca-Signature-Headers、Accept、Content-MD5、Content-Type、Date
    
- PathAndParameters：这个字段包含 Path，Query 和 Form 中的所有参数，具体组织形式如下：
- 
```text
Path + "?" + Key1 + "=" + Value1 + "&" + Key2 + "=" + Value2 + ... "&" + KeyN + "=" + ValueN
```

注意：
1. Query 和 Form 参数对的 Key 按照字典排序后使用上面的方式拼接
    
2. Query 和 Form 参数为空时，则直接使用 Path，不需要添加?
    
3. 参数的 Value 为空时只保留 Key 参与签名，等号不需要再加入签名
   
4. Query 和 Form 存在数组参数时（key 相同，value 不同的参数） ，取第一个 Value 参与签名计算
    
#### 签名串提取示例

初始的 HTTP 请求：

```text
POST /http2test/test?param1=test HTTP/1.1
host:api.aliyun.com
accept:application/json; charset=utf-8
ca_version:1
content-type:application/x-www-form-urlencoded; charset=utf-8
x-ca-timestamp:1525872629832
date:Wed, 09 May 2018 13:30:29 GMT+00:00
user-agent:ALIYUN-ANDROID-DEMO
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
content-length:33
username=xiaoming&password=123456789
```

生成的正确签名串为：

```text
POST
application/json; charset=utf-8
application/x-www-form-urlencoded; charset=utf-8
Wed, 09 May 2018 13:30:29 GMT+00:00
x-ca-key:203753385
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-signature-method:HmacSHA256
x-ca-timestamp:1525872629832
/http2test/test?param1=test&password=123456789&username=xiaoming
```

#### 签名计算流程

客户端从 HTTP 请求中提取出关键数据组装成签名串后，需要对签名串进行加密及编码处理，形成最终的签名。

具体的加密形式如下，其中 `stringToSign` 是提取出来的签名串，`secret` 就是插件配置中填写的，`sign` 是最终生成的签名：

```java
Mac hmacSha256 = Mac.getInstance("HmacSHA256");
byte[] secretBytes = secret.getBytes("UTF-8");
hmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256"));
byte[] result = hmacSha256.doFinal(stringToSign.getBytes("UTF-8"));
String sign = Base64.encodeBase64String(result);
```

总结一下，就是将 `stringToSign` 使用 UTF-8 解码后得到 Byte 数组，然后使用加密算法对 Byte 数组进行加密，然后使用 Base64 算法进行编码，形成最终的签名。

#### 添加签名流程

客户端需要将以下四个 Header 放在 HTTP 请求中传输给 API 网关，进行签名校验：

- x-ca-key：取值 APP Key，必选

- x-ca-signature-method：签名算法，取值 HmacSHA256 或者 HmacSHA1，可选，默认值为 HmacSHA256

- x-ca-signature-headers：所有签名头的 Key 的集合，使用英文逗号分隔，可选

- x-ca-signature：签名，必选

下面是携带签名的整个 HTTP 请求的示例：

```text
POST /http2test/test?param1=test HTTP/1.1
host:api.aliyun.com
accept:application/json; charset=utf-8
ca_version:1
content-type:application/x-www-form-urlencoded; charset=utf-8
x-ca-timestamp:1525872629832
date:Wed, 09 May 2018 13:30:29 GMT+00:00
user-agent:ALIYUN-ANDROID-DEMO
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-key:203753385
x-ca-signature-method:HmacSHA256
x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method
x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=
content-length:33
username=xiaoming&password=123456789
```

### 服务端签名验证方式

#### 流程简介

服务器验证客户端签名一共分四步处理：

1. 从接收到的请求中提取关键数据，得到一个用来签名的字符串

2. 从接收到的请求中读取 `key` ，通过 `key` 查询到对应的 `secret`

3. 使用加密算法和 `secret` 对关键数据签名串进行加密处理，得到签名

4. 从接收到的请求中读取客户端签名，对比服务器端签名和客户端签名的一致性

如下图所示：
![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1745707061/p188116.png)


### 签名排错方法

网关签名校验失败时，会将服务端的签名串（StringToSign）放到 HTTP Response 的 Header 中返回到客户端，Key 为：X-Ca-Error-Message，用户只需要将本地计算的签名串（StringToSign）与服务端返回的签名串进行对比即可找到问题；

如果服务端与客户端的 StringToSign 一致请检查用于签名计算的 APP Secret 是否正确；

因为 HTTP Header 中无法表示换行，因此 StringToSign 中的换行符都被替换成`#`，如下所示：

```text
X-Ca-Error-Message:  Server StringToSign:`GET#application/json##application/json##X-Ca-Key:200000#X-Ca-Timestamp:1589458000000#/app/v1/config/keys?keys=TEST`

```

## 相关错误码

| HTTP 状态码 | 出错信息               | 原因说明                                                                         |
| ----------- | ---------------------- | -------------------------------------------------------------------------------- |
| 401         | Invalid Key            | 请求头未提供 x-ca-key，或者 x-ca-key 无效                                        |
| 401         | Empty Signature        | 请求头未提供 x-ca-signature 签名串                                               |
| 400         | Invalid Signature      | 请求头 x-ca-signature 签名串，与服务端计算得到签名不一致                         |
| 400         | Invalid Content-MD5    | 请求头 content-md5 不正确                                                        |
| 400         | Invalid Date           | 根据请求头 date 计算时间偏移超过配置的 date_offset                               |
| 413         | Request Body Too Large | 请求 Body 超过限制大小：32 MB                                                    |
| 413         | Payload Too Large      | 请求 Body 超过全局配置 DownstreamConnectionBufferLimits                          |
| 403         | Unauthorized Consumer  | 请求的调用方无访问权限                                                           |
