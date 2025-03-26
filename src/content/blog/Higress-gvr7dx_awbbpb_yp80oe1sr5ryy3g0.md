---
title: "大模型带火 API 后，分享我对 API 安全之认证鉴权的实践"
description: "大模型带火 API 后，分享我对 API 安全之认证鉴权的实践"
date: "2025-03-26"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

## 前言
<font style="color:rgb(24, 24, 24);">云原生API网关（以下简称-网关）是云原生网关的升级版，除继承了原云原生网关的全部能力，为用户叠加了API管理的能力。API作为企业的重要数字资源，在给企业带来巨大便利的同时也带来了新的安全问题，一旦被攻击可能导致数据泄漏重大安全问题，从而给企业的业务发展带来极大的安全风险。</font>

<font style="color:rgb(24, 24, 24);">正是在这样的背景下，OpenAPI规范中针对API安全做了明确的定义和引导，以便用户可以安全的管理自己的API。</font>

<font style="color:rgb(24, 24, 24);">以下为openapi的定义：</font>[What is openAPI](https://swagger.io/docs/specification/v3_0/about/)

<font style="color:rgb(33, 37, 41);">An OpenAPI file allows you to describe your entire API, including:</font>

+ <font style="color:rgb(33, 37, 41);">Available endpoints (</font>`<font style="color:rgb(33, 37, 41);">/users</font>`<font style="color:rgb(33, 37, 41);">) and operations on each endpoint (</font>`<font style="color:rgb(33, 37, 41);">GET /users</font>`<font style="color:rgb(33, 37, 41);">,</font><font style="color:rgb(33, 37, 41);"> </font>`<font style="color:rgb(33, 37, 41);">POST /users</font>`<font style="color:rgb(33, 37, 41);">)</font>
+ <font style="color:rgb(33, 37, 41);">Operation parameters Input and output for each operation</font>
+ <font style="color:rgb(33, 37, 41);">Authentication methods</font>
+ <font style="color:rgb(33, 37, 41);">Contact information, license, terms of use, and other information.</font>

<font style="color:rgb(33, 37, 41);">可以看到认证鉴权是保护API必要而又最常用的手段。云原生API网关是完全遵循OpenAPI规范的阿里云新一代API网关，支持丰富的认证鉴权是其核心竞争力之一</font>

## <font style="color:rgb(33, 37, 41);">什么是认证鉴权</font>
认证：是指验证用户身份的过程。简单来说，认证的目的是确认用户是谁。在这个过程中，用户通常需要提供某种凭证，例如用户名和密码、指纹、面部识别，或是其他生物特征，甚至是安全令牌（如两步验证中的验证码）。通过这些凭证，系统将用户的身份与已有的身份信息进行比对，从而确认其真实性。

鉴权：是指验证用户是否有权限访问某项资源或执行某项操作。虽然认证确认了用户身份，但它并不能确定该用户可以做什么。这方面的决策依赖于系统的权限管理策略。例如，在一个企业内部系统中，某位员工可能拥有访问某些文件的权限，但另一些敏感文件则可能只对高级管理层开放。鉴权的目的就是在用户经过认证后，根据其角色和权限设置，决定是否允许其访问特定资源或执行特定操作。

## 认证（Authentication）
### Key 认证
云原生API网关中的Key认证叫Api Key认证在消费者鉴权中统一透出。Key认证是对用户密码认证方式的方式的优化版本，通过静态秘钥的方式，为用户提供了一种简便快捷且安全的认证方式，具有较为鲜明的优缺点：

#### 优点：
1、简单易用，只需要在请求中传输秘钥即可，验证非常简单、性能高

2、认证过程无需用户参与，对自动化应用非常友好

3、服务器（网关）可以随时生成、汰换（删除）、重置（切换）秘钥，管理方便

#### 缺点：
1、安全隐患，秘钥传输过程中很容易泄漏，泄漏后任何人都可以使用秘钥来伪装合法身份，进行未授权的操作；秘钥的分配和管理复杂

2、无法提供用户身份，审计较为困难

#### Api Key认证的基本流程
[云原生 API 网关- API 安全之认证鉴权](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=GW85R)

云原生API网关的通过消费者授权来支持 Api Key认证，用户在消费者创建流程中，选择API Key身份认证，并且为其设置凭证来源和添加凭证

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/5773/1736315995568-aca4932b-9883-42fc-95e8-cf296ea38433.png)

云原生网关支持三种凭证来源设置方式：来源于固定Header头"Authorization"、来源于自定义Header头、以及来源自定义QueryString

```plain
curl  http://xxx.hello.com/test?apikey=2bda943c-ba2b-11ec-ba07-00163e1250b5
```

```plain
curl  http://xxx.hello.com/test -H 'x-api-key: 2bda943c-ba2b-11ec-ba07-00163e1250b5'
```

### JWT 认证
#### 什么是JWT
<font style="color:rgb(51, 51, 51);">JWT（JSON Web Token）是一种用于安全信息传递的开放标准，它允许在通信双方之间以JSON对象的形式传输安全信息，它设计为其中的信息可以被验证和信任。</font>

<font style="color:rgb(51, 51, 51);">JWT通常由三部分组成：头部（Header）、载荷（Payload）和签名（Signature），其内容构造过程如下：</font>

1. **<font style="color:rgb(51, 51, 51);">头部（Header）</font>**<font style="color:rgb(51, 51, 51);">:</font>

通常由两部分组成：令牌的类型（通常是JWT）和所使用的签名算法（如HMAC SHA256，<font style="color:rgb(51, 51, 51);">在下文JWKS中指定</font>）；

```plain
{
  "alg": "HS256",
  "typ": "JWT"
}
```

<font style="color:rgb(51, 51, 51);">然后将头部进行Base64编码（该编码是可以对称解码的），得到第一部分：</font>

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9

2. **<font style="color:rgb(51, 51, 51);">载荷（Payload）</font>**<font style="color:rgb(51, 51, 51);">:</font>

<font style="color:rgb(51, 51, 51);">包含对JWT的声明（Claims），这些声明是关于实体（通常是用户）和其他数据的。定义细节如下：</font>

```plain
iss：令牌颁发者。表示该令牌由谁创建，该声明是一个字符串
sub: Subject Identifier，iss提供的终端用户的标识，在iss范围内唯一，最长为255个ASCII个字符，区分大小写
aud：Audience(s)，令牌的受众，分大小写的字符串数组
exp：Expiration time，令牌的过期时间戳。超过此时间的token会作废， 该声明是一个整数，是1970年1月1日以来的秒数
iat: 令牌的颁发时间，该声明是一个整数，是1970年1月1日以来的秒数
jti: 令牌的唯一标识，该声明的值在令牌颁发者创建的每一个令牌中都是唯一的，为了防止冲突，它通常是一个密码学随机值。这个值相当于向结构化令牌中加入了一个攻击者无法获得的随机熵组件，有利于防止令牌猜测攻击和重放攻击。
```

<font style="color:rgb(51, 51, 51);">也可以新增用户系统需要使用的自定义字段，比如下面的例子添加了name 用户昵称：</font>

```plain
{
  "sub": "1234567890",
  "name": "John Doe"
}
```

<font style="color:rgb(51, 51, 51);">然后将其进行Base64编码，得到JWT的第二部分：</font>

`JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE`

3. **签名（Signature）**:

<font style="color:rgb(51, 51, 51);">为了生成签名部分，需要将编码后的头部、载荷和一个密钥（有些情况下是私钥）按照指定的算法（在下文JWKS中指定）组合在一起进行签名。  
</font><font style="color:rgb(51, 51, 51);">这个部分需要Base64编码后的Header和Base64编码后的Payload使用 . 连接组成的字符串，然后通过Header中声明的加密方式进行加密（$secret 表示用户的私钥），然后就构成了jwt的第三部分。</font>

```plain
var encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
var signature = HMACSHA256(encodedString, '$secret');
```

<font style="color:rgb(51, 51, 51);">将这三部分用 . 连接成一个完整的字符串，</font>`<font style="color:rgb(51, 51, 51);">eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.</font>JTdCJTBBJTIwJTIwJTIyc3ViJTIyJTNBJTIwJTIyMTIzNDU2Nzg5MCUyMiUyQyUwQSUyMCUyMCUyMm5hbWUlMjIlM0ElMjAlMjJKb2huJTIwRG9lJTIyJTBBJTdE<font style="color:rgb(51, 51, 51);">.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ</font>`

#### 什么是JWKS
在云原生API网关中，通过一组<font style="color:rgb(51, 51, 51);">JWKS</font>来描述Header信息，<font style="color:rgb(51, 51, 51);">JWKS（JSON Web Key Set）是一种用于表示公钥和私钥集合的格式，通常用于支持 JWT 的身份验证和授权场景。</font>

```plain
{
    "keys": [
        {
            "kty": "oct",
            "k": "GFmQpiJq42SxAWyIN5vnlUzrVDhcdBjKZ8uw0ag3XO1",
            "alg": "HS256"
        }
    ]
}
```

```plain
{
    "keys": [
        {
            "e": "公钥的指数，例如AQAB",
            "kid": "Key ID",
            "kty": "使用的加密算法的家族，例如RSA，必填，大小写敏感",
            "alg": "使用的具体的加密算法，例如RS256，必填，大小写敏感",
            "use": "密钥的用途，例如sig，用于签名",
            "n": "公钥的模值"
        }
    ]
}
```

#### <font style="color:rgb(51, 51, 51);">JWT 认证是云原生API网关消费者认证能力中的一种，其认证流程如下：</font>
[云原生 API 网关- API 安全之认证鉴权](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=anS1c)

1. <font style="color:rgb(51, 51, 51);">客户端向API网关发起认证请求，请求中一般会携带终端用户的用户名和密码。</font>
2. <font style="color:rgb(51, 51, 51);">网关将请求直接转发给后端服务。</font>
3. <font style="color:rgb(51, 51, 51);">后端服务读取请求中的验证信息（比如用户名、密码）进行验证，验证通过后使用私钥生成标准的token，返回给网关。</font>
4. <font style="color:rgb(51, 51, 51);">网关将携带token的应答返回给客户端，客户端需要将这个token缓存到本地。</font>
5. <font style="color:rgb(51, 51, 51);">客户端向API网关发送业务请求，请求中携带token。</font>
6. <font style="color:rgb(51, 51, 51);">网关使用用户通过JWT认证配置中JWKS设定的公钥对请求中的token进行验证，验证通过后，将请求透传给后端服务。</font>
7. <font style="color:rgb(51, 51, 51);">后端服务进行业务处理后应答。</font>
8. <font style="color:rgb(51, 51, 51);">网关将业务应答返回给客户端。</font>

#### 注意事项：
1. <font style="color:rgb(51, 51, 51);">JWT 通常设置有过期时间，过期时间的设置是一次性的，即客户端需要合理的管理 Token 的失效以免 Token 失效后影响访问，同时 Token 一旦颁发无法撤销，即使用户已经无权限，只要 Token 还在有效期，便依然可以访问，引发安全风险。</font>
2. <font style="color:rgb(51, 51, 51);">JWT 默认是不加密，不要将秘密数据写入 JWT。</font>
3. JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。
4. 为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用HTTPS 协议传输。

### AK/SK 认证
**<font style="color:rgb(51, 51, 51);">AK(Access Key ID)/SK（Access Secret Key）</font>**<font style="color:rgb(51, 51, 51);">：是阿里云对一个明确的用户身份的一个抽象，云原生API网关沿用这个设计（注意：这里的云原生 API 网关生成的 AK/SK 与 RAM 的 AK /SK 相互独立，并不能互通使用），用来标识一个网关用户的身份，因为每个用户可能有多种身份类型，每种身份类型可以有多个凭证，类似多个账号，一组AK/SK可以简单对应到一组用户账密。</font>

<font style="color:rgb(51, 51, 51);">API提供者给有权限的用户分配AK/SK，API消费者请求时带上AK，服务端就可以识别调用者的信息，并进行更细粒度的权限管理。</font>

**<font style="color:rgb(51, 51, 51);">HMAC：</font>**<font style="color:rgb(51, 51, 51);">HMAC（Hash-based Message Authentication Code）是一种基于哈希函数的消息认证码，用于验证信息的完整性和身份验证。HMAC结合了哈希函数和密钥的优点，提供了数据的完整性和安全认证的保证。</font>

<font style="color:rgb(51, 51, 51);">在基于HMAC 的AK/SK 认证过程中，HMAC的主要作用是确保消息的完整性和身份验证。其具体作用如下：</font>

1. **身份验证**：通过使用共享密钥，只有持有该密钥的用户才能生成正确的HMAC，从而可以确认消息的发送者的身份。
2. **数据完整性**：任何对消息内容的修改都会导致HMAC值的变化，因此接收方可以通过计算接收到的消息的HMAC值来验证消息在传输过程中是否被篡改。
3. **防止重放攻击**：在某些情况下，HMAC还可以帮助防止重放攻击。通过在消息中加入时间戳或随机数，接收方可以确保消息的唯一性和新鲜性。

#### <font style="color:rgb(51, 51, 51);">AK/SK（HMAC）认证是云原生API网关消费者认证能力中的一种，其认证流程包括客户端生成签名和服务端验证前面两个步骤</font>
##### <font style="color:rgb(51, 51, 51);">客户端生成签名流程：</font>
[云原生 API 网关- API 安全之认证鉴权](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=x7N1B)

1. <font style="color:rgb(51, 51, 51);">提取签名串：客户端从HTTP请求中提取出关键数据，组成一个签名串，如云原生API网关的签名串内容主要由以下7部分组成：</font>

```plain
HTTPMethod
Accept
Content-MD5
Content-Type
Date
Headers
PathAndParameters
```

```plain
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

提取原签名串并追加AK/SK认证的 AK和签名算法，形成最终签名串，header之间用\n 换行符分隔

```plain
POST
application/json; charset=utf-8
application/x-www-form-urlencoded; charset=utf-8
Wed, 09 May 2018 13:30:29 GMT+00:00
/http2test/test?param1=test&password=123456789&username=xiaoming
x-ca-nonce:c9f15cbf-f4ac-4a6c-b54d-f51abf4b5b44
x-ca-timestamp:1525872629832

##添加AK/SK认证Headers
x-ca-key:203753385，AK/SK身份配置中的AK
x-ca-signature-method:HmacSHA256

```

2. <font style="color:rgb(51, 51, 51);">加密签名：对第1步提取的签名串使用HmacSha256算法进行加密和Base64编码处理得到签名内容，如</font>

```java
Mac hmacSha256 = Mac.getInstance("HmacSHA256");
byte[] secretBytes = secret.getBytes("UTF-8");
hmacSha256.init(new SecretKeySpec(secretBytes, 0, secretBytes.length, "HmacSHA256"));
byte[] result = hmacSha256.doFinal(stringToSign.getBytes("UTF-8"));
String sign = Base64.encodeBase64String(result);
```

3. <font style="color:rgb(51, 51, 51);">添加签名：将第2步生成的签名和参与前面参与加签的header作为header一并添加到http请求中</font>

```plain
x-ca-signature-headers：参与签名的header的key的集合，英文逗号分隔
x-ca-signature：签名，必选。
```

得到待发送给网关的携带签名的HTTP请求

```plain
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

##添加AK/SK认证Headers
x-ca-key:203753385
x-ca-signature-method:HmacSHA256

##添加AK/SK认证Headers签名相关的headers
x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method
x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=
```

##### <font style="color:rgb(51, 51, 51);">网关验证签名流程图：</font>
[云原生 API 网关- API 安全之认证鉴权](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=VUh5K)

1. <font style="color:rgb(24, 24, 24);">提取签名串：从接收到的请求中提取关键数据，得到一个用来签名的字符串。</font>

收到的HTTP请求

```plain
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

##AK/SK（HMAC）认证新增的header
x-ca-key:203753385
x-ca-signature-method:HmacSHA256

##签名新增的header
x-ca-signature-headers:x-ca-timestamp,x-ca-key,x-ca-nonce,x-ca-signature-method
x-ca-signature:xfX+bZxY2yl7EB/qdoDy9v/uscw3Nnj1pgoU+Bm6xdM=
```

2. <font style="color:rgb(24, 24, 24);">提取AK：从接收到的请求中读取AK ，通过AK 查询到对应的SK</font>
3. <font style="color:rgb(24, 24, 24);">提取签名串并计算签名：使用加密算法和SK对关键数据签名串进行加密处理，得到签名。</font>

```plain
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

##AK/SK（HMAC）认证新增的header
x-ca-key:203753385
x-ca-signature-method:HmacSHA256
```

4. <font style="color:rgb(24, 24, 24);">签名验证：从接收到的请求中读取客户端签名，服务端使用第3不获取的私钥进行签名验证，对比服务器端签名和客户端签名的一致性，从而判断客户是否认证通过</font>

### OAuth2认证
#### <font style="color:rgb(51, 51, 51);">什么是OAuth 2.0</font>
<font style="color:rgb(51, 51, 51);">OAuth 2.0 是一种用于授权的协议，广泛用于互联网应用以实现安全的授权机制。OAuth 2.0定义以下几种角色：</font>

+ **<font style="color:rgb(51, 51, 51);">资源拥有者（Resource Owner）</font>**<font style="color:rgb(51, 51, 51);">：通常是用户，拥有数据访问权限，以下简称为用户</font>
+ **<font style="color:rgb(51, 51, 51);">客户端（Client）</font>**<font style="color:rgb(51, 51, 51);">：请求访问资源的应用程序。</font>
+ **<font style="color:rgb(51, 51, 51);">授权服务器（Authorization Server）</font>**<font style="color:rgb(51, 51, 51);">：负责验证用户并发放访问令牌的服务器。</font>
+ **<font style="color:rgb(51, 51, 51);">资源服务器（Resource Server）</font>**<font style="color:rgb(51, 51, 51);">：存储用户数据的服务器。</font>

#### <font style="color:rgb(51, 51, 51);">OAuth 2.0协议的流程主要包含以下几个步骤：</font>
```plain
1、客户端请求用户授权，此时通常会跳转第三方登录页
2、资源拥有者用户同意授权
3、客户端使用已获得授权，请求授权服务器发放Access Token
4、授权服务器返回Access Token
5、客户端使用Access Token，请求资源服务器
6、资源服务器验证Access Token，并返回受保护的资源
```

#### 抽象流程图
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/5773/1736131411372-e14b7764-f8ce-4b50-a5cb-a716d5e7903a.png)

#### OAuth 2.0协议定义了4种授权模式：
+ 授权码模式（authorization code）
+ 简化模式（implicit）
+ 密码模式（resource owner password credentials）
+ 客户端模式（client credentials）

##### 授权码模式：
其中授权码模式是最为广泛使用的授权模式，它适用于用户授予第三方客户端访问自身资源的场景，其核心流程如下：

```plain
用户通过User-Agent（用户代理，通常是浏览器）与Client第三方客户端进行交互，其交互流程主要包含以下三步：
A、浏览器访问客户端应用程序
B、用户通过浏览器与客户端交互
C、客户端通过浏览器透传AuthorizationCode及RedirectUri等参数

User-Agent代理用户与授权服务器交互，其交互流程如下：
A、User-Agent使用第三方授权，User-Agent携带client定位符与重定向uri地址将用户指向
认证服务器的认证页
B、用户通过User-Agent授权访问
C、授权服务器进行认证鉴权，认证鉴权通过后将授权码附在A步骤重定向Uri地址之后，然后导向重定向Uri
D、客户端收到授权码将其附在重定向uri中，请求授权服务器，获取Access Token
E、授权服务器和核对重定向uri地址和授权码无误后，发放Access Token和Refresh Token（可选的）
```

##### 授权码授权流程图：
![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/5773/1736132579187-0fb7d80b-fff7-464e-894e-3d49a502f159.png)

##### 客户端模式：
客户端模式是一种简化的授权模式，它是客户端以"Client"的名义请求资源服务器，而不是以"用户"名义，它适用于受信的客户端访问

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/png/5773/1736134348321-ea89de7c-717a-46ae-a694-8f7f3f6211f8.png)

### OIDC 认证
<font style="color:rgb(51, 51, 51);">OIDC是OpenID Connect的简称。OIDC（OpenID Connect）是在OAuth 2.0之上构建的身份认证层，为应用程序提供用户身份验证的能力。</font>

#### <font style="color:rgb(51, 51, 51);">为什么要有OIDC</font>
1. **身份验证和授权的分离**：OAuth 2.0主要关注授权Authorization，而OIDC扩展了认证的抽象，任意完成身份认证的 Provider实现，都能成为 Identity Provider，并作为OpenID Provider在 OIDC协议中承担认证的职责
2. **用户信息获取**：OIDC在扩展认证的基础提供了标准化的API来获取用户的基本信息，使得开发者能够轻松集成用户的个人信息。

总结一下：OAuth 2.0设计之初是为了解决授权的问题，而OIDC 在OAuth 2.0的基础上扩展了关于认证的定义并且添加一组获取用户信息的API，且OIDC 完全兼容OAuth 2.0协议。

#### OIDC 基于OAuth 2.0协议实现的角色及关键资源定义
| OIDC  | OAuth 2.0 | 身份描述 |
| --- | --- | --- |
| EU End User | Resource Owner | 用户、资源拥有者 |
| RP Relying Party | Client | 客户端（前端、移动端） |
| OpenID Provider  | Authorization Server | 认证服务 |
| Resource Server  | Resource Server | 资源服务器，提供资源请求的服务器 |
| ID Token | - | 身份令牌（JWT），用于标识用户通过认证的身份，可以用获取用户信息 |
| Access Token | Access Token | 访问令牌（JWT），用于标识用户通过授权，Client 携带Access Token访问 |
| Refresh Token | Refresh Token | 刷新令牌，用于Access Token过期之后 的轮换 |
| User-Agent | User-Agent | 用户代理，通常是用户与互联交互的界面，比如浏览器 |


#### OIDC 认证
<font style="color:rgb(24, 24, 24);">通过云原生API网关的OIDC认证功能，可以实现在网关统一认证鉴权，并支持域名级别的黑白名单方便用户灵活的管理认证授权的粒度，其核心流程如下：</font>

##### OIDC 认证详细流程
[云原生 API 网关- API 安全之认证鉴权](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=rtmQr)

1. <font style="color:rgb(31, 35, 40);">访问用户受保护的资源（需要认证授权访问的API）</font>

```plain
curl --url "foo.bar.com/headers"
```

2. <font style="color:rgb(31, 35, 40);">云原生API网关将请求重定向到身份提供商（IDP）登录页同时携带 client_id、response_type、scope 等OIDC 认证的参数，response_type设置为code，即使用OAuth 2.0授权码模式获取token，同时设置csrf cookie， 防御csrf攻击（</font><font style="color:rgb(51, 51, 51);">Cross-Site Request Forgery -跨站请求伪造</font><font style="color:rgb(31, 35, 40);">) </font>

```plain
curl --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/authorize"\
  --url-query "approval_prompt=force" \
  --url-query "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \
  --url-query "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \
  --url-query "response_type=code" \
  --url-query "scope=openid+email+offline_access" \
  --url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \
  --header "Set-Cookie: _oauth2_proxy_csrf=LPruATEDgcdmelr8zScD_ObhsbP4zSzvcgmPlcNDcJpFJ0OvhxP2hFotsU-kZnYxd5KsIjzeIXGTOjf8TKcbTHbDIt-aQoZORXI_0id3qeY0Jt78223DPeJ1xBqa8VO0UiEOUFOR53FGxirJOdKFxaAvxDFb1Ok=|1718962455|V1QGWyjQ4hMNOQ4Jtf17HeQJdVqHdt5d65uraFduMIU=; Path=/; Expires=Fri, 21 Jun 2024 08:06:20 GMT; HttpOnly"
```

3. <font style="color:rgb(31, 35, 40);">重定向到身份提供商（IDP）登录页（在云原生网关为用户配置的认证服务提供的登录页）</font>

![](https://intranetproxy.alipay.com/skylark/lark/0/2025/webp/5773/1736135177868-6473b165-e7b2-465d-b7e4-d123210e470c.webp)

4. <font style="color:rgb(31, 35, 40);">用户输入用户名密码登录完成，完成认证授权</font>
5. <font style="color:rgb(31, 35, 40);">携带授权码重定向到云原生API网关并携带了state参数用于验证csrf cookie ，授权码用于交换token</font>

```plain
curl --url "http://foo.bar.com/oauth2/callback" \
  --url-query "state=nT06xdCqn4IqemzBRV5hmO73U_hCjskrH_VupPqdcdw%3A%2Ffoo" \
  --url-query "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm"
```

6. <font style="color:rgb(31, 35, 40);">校验 csrf cookie 中加密存储的 state 值与 url 参数中的 state 值必须相同</font>
7. <font style="color:rgb(31, 35, 40);">利用授权码，请求身份提供商（IDP）交换id_token 和 access_token、refresh_token</font>

```plain
curl -X POST \
  --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \
  --data "grant_type=authorization_code" \
  --data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \
  --data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \
  --data "redirect_uri=http%3A%2F%2Ffoo.bar.com%2Foauth2%2Fcallback" \
  --data "code=0bdopoS2c2lx95u7iO0OH9kY1TvaEdJHo4lB6CT2_qVFm" \
```

<font style="color:rgb(31, 35, 40);">返回的请求里包含了 id_token, access_token，refresh_token 用于后续刷新 token</font>

```plain
{
    "access_token": "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ",
    "refresh_token": "GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG",
    "id_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imc1Z1ExSF9ZbTY0WUlvVkQwSVpXTCJ9.eyJlbWFpbCI6IjE2MDExNTYyNjhAcXEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL2Rldi1vNDN4YjFtejd5YTdhY2g0LnVzLmF1dGgwLmNvbS8iLCJhdWQiOiJZYWdGcVJEOXRmTklhYWM1QmFtamhzU2F0anJBbnNuWiIsImlhdCI6MTcxOTE5ODYzOCwiZXhwIjoxNzE5MjM0NjM4LCJzdWIiOiJhdXRoMHw2NjVkNzFlNzRjMTMxMTc3YmU2NmU2MDciLCJzaWQiOiJjdDJVOF9ZUS16VDdFOGkwRTNNeUstejc5ZGlWUWhhVSJ9.gfzXKJ0FeqzYqOUDLQHWcUG19IOLqkpLN09xTmIat0umrlGV5VNSumgWH3XJmmwnhdb8AThH3Jf-7kbRJzu4rM-BbGbFTRBTzNHeUajFOFrIgld5VENQ_M_sXHkTp0psWKSr9vF24kmilCfSbvC5lBKjt878ljZ7-xteWuaUYOMUdcJb4DSv0-zjX01sonJxYamTlhji3M4TAW7VwhwqyZt8dBhVSNaRw1wUKj-M1JrBDLyx65sroZtSqVA0udIrqMHEbWYb2de7JjzlqG003HRMzwOm7OXgEd5ZVFqgmBLosgixOU5DJ4A26nlqK92Sp6VqDMRvA-3ym8W_m-wJ_A",
    "scope": "openid email offline_access",
    "expires_in": 86400,
    "token_type": "Bearer"
}
```

8. <font style="color:rgb(31, 35, 40);">网关将获得的 id_token, access_token, refresh_token加密存储在cookie _oauth2_proxy中</font>
9. <font style="color:rgb(31, 35, 40);">重定向到用户访问的后端服务并设置 cookie，用于后续用户登录状态的验证，同时清除csrf防护中设置的cookie _oauth2_proxy_csrf</font>

```plain
"Set-Cookie": [
    "_oauth2_proxy_csrf=; Path=/; Expires=Mon, 24 Jun 2024 02:17:39 GMT; HttpOnly",
    "_oauth2_proxy=8zM_Pcfpp_gesKFe4SMg08o5Iv0A8WAOQOmG1-vZBbQ56UggYVC0Cu-gFMEoxJZU5q1O5vqRlVBizlLetgVjRCksGVbttwl8tQ7h5YiyIubbbtvF1T4JzLh3QfzUUrwbB-VznOkh8qLbjAhddocecjBt4rMiDyceKXqMr4eO5TUEMx4vHtJYnTYalMeTYhGXk5MNSyrdZX9NnQnkdrCjiOQM13ggwob2nYwhGWaAlgzFSWkgkdtBy2Cl_YMWZ8_gKk9rDX289-JrJyGpr5k9O9RzRhZoY2iE3Mcr8-Q37RTji1Ga22QO-XkAcSaGqY1Qo7jLdmgZTYKC5JvtdLc4rj3vcbveYxU7R3Pt2vEribQjKTh4Sqb0aA03p4cxXyZN4SUfBW1NAOm4JLPUhKJy8frqC9_E0nVqPvpvnacaoQs8WkX2zp75xHoMa3SD6KZhQ5JUiPEiNkOaUsyafLvht6lLkNDhgzW3BP2czoe0DCDBLnsot0jH-qQpMZYkaGr-ZnRKI1OPl1vHls3mao5juOAW1VB2A9aughgc8SJ55IFZpMfFMdHdTDdMqPODkItX2PK44GX-pHeLxkOqrzp3GHtMInpL5QIQlTuux3erm3CG-ntlUE7JBtN2T9LEb8XfIFu58X9_vzMun4JQlje2Thi9_taI_z1DSaTtvNNb54wJfSPwYCCl4OsH-BacVmPQhH6TTZ6gP2Qsm5TR2o1U2D9fuVkSM-OPCG9l3tILambIQwC3vofMW6X8SIFSmhJUDvN7NbwxowBiZ6Y7GJRZlAk_GKDkpsdrdIvC67QqczZFphRVnm6qi-gPO41APCbcO6fgTwyOhbP3RrZZKWSIqWJYhNE3_Sfkf0565H7sC7Hc8XUUjJvP3WnjKS9x7KwzWa-dsUjV3-Q-VNl-rXTguVNAIirYK-qrMNMZGCRcJqcLnUF0V_J2lVmFyVsSlE3t0sDw2xmbkOwDptXFOjQL5Rb4esUMYdCBWFajBfvUtcZEFtYhD0kb6VcbjXO3NCVW5qKh_l9C9SRCc7TG1vcRAqUQlRXHacTGWfcWsuQkCJ3Mp_oWaDxs1GRDykQYxAn5sTICovThWEU2C6o75grWaNrkj5NU-0eHh3ryvxLmGLBOXZV9OQhtKShWmUgywSWMxOHOuZAqdAPULc8KheuGFjXYp-RnCbFYWePJmwzfQw89kSkj1KUZgMYwKEjSz62z2qc9KLczomv76ortQzvo4Hv9kaW6xVuQj5R5Oq6_WMBOqsmUMzcXpxCIOGjcdcZRBc0Fm09Uy9oV1PRqvAE4PGtfyrCaoqILBix8UIww63B07YGwzQ-hAXDysBK-Vca2x7GmGdXsNXXcTgu00bdsjtHZPDBBWGfL3g_rMAXr2vWyvK4CwNjcaPAmrlF3geHPwbIePT0hskBboX1v1bsuhzsai7rGM4r53pnb1ZEoTQDa1B-HyokFgo14XiwME0zE1ifpNzefjpkz1YY2krJlqfCydNwoKaTit4tD2yHlnxAeFF9iIrxzSKErNUFpmyLa7ge7V33vhEH-6k5oBTLE2Q2BrC6aAkLCcPwU9xv_SzBDQPRY0MEYv3kGF03Swo1crRbGh-aifYX9NiHDsmG6r1vAnx0MAOw2Jzuz2x6SSdfBrzlcoWBlrwiZzd9kAKq75n1Uy9uzZ8SRnkBrEZySHBwEbu196VklkRE0jqwC-e3wWNNuviSOfwkVeX-7QdOoO10yw9VK2sW52lFvIEf4chv_ta7bGfAZOWBjpktG6ZLD81SE6A88zpqG2SysSyNMp9hl-umG-5sFsjCn_c9E8bDvwkUOUVb9bNqhBDsZgR0BNPawiOZjmyfhzmwmWf-zgFzfFSV6BvOwNRi3sCOHTsWcuk9NBQ_YK8CpNkVl3WeIBSDfidimuC_QV9UWKs1GPk35ZRkM4zKtLY2JsBFWKaDy_P80TcOzcMBoP8gIBClXZ-WUqfE8s1yyc4jrq-qL1_wJ24ef1O9FktsbyZiDKXw2vnqsT8-g_hCeG-unrT1ZFscf8oNdqczARHX-K4vKH2k3uIqEx1M=|1719199056|2rsgdUIClHNEpxBLlHOVRYup6e4oKensQfljtmn4B80=; Path=/; Expires=Mon, 01 Jul 2024 03:17:36 GMT; HttpOnly"
]
```

10. <font style="color:rgb(31, 35, 40);">校验是否存在此cookie，并且cookie中存储了用户的 token信息同时查看是否过期</font>
11. <font style="color:rgb(31, 35, 40);">使用含有 Authorization 头部存储用户的 access_token 访问相应的 API</font>

```plain
curl --url "foo.bar.com/headers"
  --header "Authorization: Bearer eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9kZXYtbzQzeGIxbXo3eWE3YWNoNC51cy5hdXRoMC5jb20vIn0..WP_WRVM-y3fM1sN4.fAQqtKoKZNG9Wj0OhtrMgtsjTJ2J72M2klDRd9SvUKGbiYsZNPmIl_qJUf81D3VIjD59o9xrOOJIzXTgsfFVA2x15g-jBlNh68N7dyhXu9237Tbplweu1jA25IZDSnjitQ3pbf7xJVIfPnWcrzl6uT8G1EP-omFcl6AQprV2FoKFMCGFCgeafuttppKe1a8mpJDj7AFLPs-344tT9mvCWmI4DuoLFh0PiqMMJBByoijRSxcSdXLPxZng84j8JVF7H6mFa-dj-icP-KLy6yvzEaRKz_uwBzQCzgYK434LIpqw_PRuN3ClEsenwRgIsNdVjvKcoAysfoZhmRy9BQaE0I7qTohSBFNX6A.mgGGeeWgugfXcUcsX4T5dQ"
```

12. <font style="color:rgb(31, 35, 40);">后端服务根据 access_token 获取用户授权信息并返回对应的 HTTP 响应</font>

```plain
{
    "email": "******",
    "email_verified": false,
    "iss": "https://dev-o43xb1mz7ya7ach4.us.auth0.com/",
    "aud": "YagFqRD9tfNIaac5BamjhsSatjrAnsnZ",
    "iat": 1719198638,
    "exp": 1719234638,
    "sub": "auth0|665d71e74c131177be66e607",
    "sid": "ct2U8_YQ-zT7E8i0E3MyK-z79diVQhaU"
}
```

##### <font style="color:rgb(31, 35, 40);">用户令牌刷新</font>
[云原生 API 网关- API 安全之认证鉴权](https://aliyuque.antfin.com/senming.gsm/zu4skz/mvwulm5oghbkuq8r?inner=MEqLG)

1. <font style="color:rgb(31, 35, 40);">访问用户受保护的资源（需要认证授权访问的API）</font>

```plain
curl --url "foo.bar.com/headers"
```

2. <font style="color:rgb(31, 35, 40);">检查AccessToken 令牌的过期时间，如果过期或者即将过期，请求刷新令牌</font>
3. <font style="color:rgb(31, 35, 40);">如果在 cookie 中检测到存在 refresh_token，则可以访问相应的接口以交换新的 id_token，access_token</font>

```plain
curl -X POST \
  --url "https://dev-o43xb1mz7ya7ach4.us.auth0.com/oauth/token" \
  --data "grant_type=refresh_token" \
  --data "client_id=YagFqRD9tfNIaac5BamjhsSatjrAnsnZ" \
  --data "client_secret=ekqv5XoZuMFtYms1NszEqRx03qct6BPvGeJUeptNG4y09PrY16BKT9IWezTrrhJJ" \
  --data "refresh_token=GrZ1f2JvzjAZQzSXmyr1ScWbv8aMFBvzAXHBUSiILcDEG"
```

4. <font style="color:rgb(31, 35, 40);">更新会话，并存储新的令牌</font>
5. <font style="color:rgb(31, 35, 40);">携带 Authorization标头并使用新的access_token访问对应 API</font>
6. <font style="color:rgb(31, 35, 40);">后端服务根据 access_token 获取用户授权信息并返回对应的 HTTP 响应</font>

## 云原生网关中的认证鉴权能力
云原生API网关支持以下三类认证鉴权的方式，用户可以按照自己的业务场景选择适合的认证类型和方式

| **<font style="color:rgb(24, 24, 24);">对比项</font>** | **<font style="color:rgb(24, 24, 24);">消费者认证鉴权</font>** | **<font style="color:rgb(24, 24, 24);">全局认证鉴权</font>** | **<font style="color:rgb(24, 24, 24);">插件认证鉴权</font>** |
| :--- | --- | --- | --- |
| **<font style="color:rgb(24, 24, 24);">支持的认证方式</font>** | API Key认证、AKSK认证、JWT认证 | JWT认证、OIDC认证、自定义认证 | Baisc认证、Key认证、JWT认证、HMAC认证、自定义外部认证 |
| **<font style="color:rgb(24, 24, 24);">鉴权方式</font>** | 鉴权方式：可以自行配置到以下粒度的授权，网关按配置的授权粒度严格鉴权<br/>1、REST <font style="color:rgb(24, 24, 24);">API</font><br/>2、REST <font style="color:rgb(24, 24, 24);">API</font> 接口<br/>3、HTTP API/WebSocket API 路由 | 鉴权方式：默认网关级别，不可以调整，通过认证即通过鉴权<br/>黑白名单：<br/>1、支持认证配置黑白名单<br/>2、黑白名单支持配置到路由、域名<br/>**<font style="color:rgb(24, 24, 24);">黑名单模式</font>**<font style="color:rgb(24, 24, 24);">：配置的</font>**<font style="color:rgb(24, 24, 24);">域名</font>**<font style="color:rgb(24, 24, 24);">和</font>**<font style="color:rgb(24, 24, 24);">路由</font>**<font style="color:rgb(24, 24, 24);">需要进行认证，其余无需认证可直接访问。</font><br/>**<font style="color:rgb(24, 24, 24);">白名单模式</font>**<font style="color:rgb(24, 24, 24);">：配置的</font>**<font style="color:rgb(24, 24, 24);">域名</font>**<font style="color:rgb(24, 24, 24);">和</font>**<font style="color:rgb(24, 24, 24);">路由</font>**<font style="color:rgb(24, 24, 24);">不需要认证即可访问，其余需要进行认证。</font><br/><font style="color:rgb(24, 24, 24);">自建鉴权服务：</font><br/><font style="color:rgb(24, 24, 24);">客户自定义完成认证鉴权</font> | 鉴权方式：可以自行配置到以下粒度的授权，网关按配置的授权粒度严格鉴权<br/>1、网关实例<br/>2、部署到网关的域名<br/>3、REST <font style="color:rgb(24, 24, 24);">API</font><br/>4、REST <font style="color:rgb(24, 24, 24);">API接口</font><br/>5、HTTP API/WebSocket API 路由 |
| **<font style="color:rgb(24, 24, 24);">操作路径</font>** | **开启认证：**<br/><font style="color:rgb(24, 24, 24);">1、API列表 ->HTTP API或者/WebScoket API ->路由管理->策略配置->添加并开启消费者认证策略。</font><br/><font style="color:rgb(24, 24, 24);">2、API管理 > REST-API </font><br/>**开启鉴权：**<br/><font style="color:rgb(24, 24, 24);">1、消费者-> 消费者详情 -> 消费者鉴权-> 添加授权</font><br/><font style="color:rgb(24, 24, 24);">2、接口详情 -> 消费者认证->授权给消费者</font> | **开启认证鉴权：**<br/><font style="color:rgb(24, 24, 24);">实例 > 安全管理 > 全局认证鉴权</font> | **开启认证鉴权：**<br/>1、插件->安装插件到网关->插件配置<br/>实例->已安装插件->插件配置<br/>2、配置不同粒度的在插件规则，并配置授权关系<br/>3、启用需要的插件规则 |
| **优缺点** | **优点：**<br/>1、支持常见的API Key认证、AK/SK认证、JWT认证并随着产品迭代不断扩展（长期发展的方向）<br/>2、白屏管理能力，包括凭证管理（重置、汰换、删除），权限管理<br/>3、灵活的授权粒度和授权方式<br/>4、网关实现认证鉴权，客户不需要自建认证鉴权服务<br/> | **优点：**<br/>1、配置简单，认证授权全局统一控制，不需要按服务实现多次<br/>2、支持路由和域名级别的黑白名单配置，用户可以按域名和路由放过和拦截请求<br/>**缺点：**<br/>1、需要客户自建认证授权服务<br/>2、不支持细粒度的授权规则 | **优点：**<br/>1、共享Higress社区插件生态，支持多样性的认证插件配置，并有计划性将社区的优先插件纳入到云原生API网关<br/>**缺点：**<br/>1、文本编辑插件规则的方式容易出错而影响线上流量<br/>2、插件的种类多而且交互复杂，管理成本高 |


## <font style="color:rgb(0, 0, 0);">云原生API网关的其他安全能力</font>
<font style="color:rgb(51, 51, 51);">保护API安全，是云原生API网关作为接入层重要的能力，认证鉴权只是云原生API网关诸多安全能力中的一部分；云原生网关还提供下表中的多种安全能力，以便用户进一步维护企业API资产的安全</font>

| 模块 | 能力 |
| --- | --- |
| 环境 | 1、支持基于环境的隔离访问，并匹配相应的环境域名 |
| 域名 | 1、支持HTTPS 域名使用指定加密套件 |
| 策略 | 1、<font style="color:rgb(51, 51, 51);">支持API级别、接口级别、路由级别的按QPS限流、按并发数限流、以及熔断策略</font><br/><font style="color:rgb(51, 51, 51);">2、支持网关级别、域名级别、API级别、接口级别、路由级别的IP黑白名单 访问控制；</font><br/>3、<font style="color:rgb(51, 51, 51);">支持API级别、接口级别、路由级别的跨域访问控制 CORS；</font><br/>4、支持路由级别、网关级别的 且与Aliyun Web 应用防火墙深度集成的<font style="color:rgb(51, 51, 51);"> WAF防控</font> |
| 插件 | 1、支持丰富的认证鉴权插件能力<br/>2、支持请求屏蔽插件，可以<font style="color:rgb(51, 51, 51);">基于 URL、请求头等特征屏蔽 HTTP 请求，可以用于防护部分站点资源不对外部暴露</font><br/>3、支持机器人拦截插件，可以用于识别并阻止互联网爬虫对站点资源的爬取<br/>4、支持WAF 防护插件<br/>5、支持跨域资源共享插件<br/>6、支持IP限制插件 |
| 服务 | 1、支持服务级别的TLS，MTLS |





