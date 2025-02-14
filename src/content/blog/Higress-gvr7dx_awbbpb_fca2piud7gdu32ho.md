---
title: "Envoy HTTP2 404 如何解决"
description: "Envoy HTTP2 404 如何解决"
date: "2024-12-09"
category: "article"
keywords: ["Higress"]
authors: "CH3CHO"
---

## 问题背景
在大部分基于 Envoy 实现的网关里，都存在这样一个问题，当开启 http2 时，客户端访问会出现偶发的 404，并且可以从日志注意到这些 404 的请求，:authority 头里的域名和 SNI 里的域名不一致。

且在使用泛域名证书，且配置了多个域名的路由的情况下，这个问题特别容易出现。

问题相关的社区 issue：

[https://github.com/envoyproxy/envoy/issues/6767](https://github.com/envoyproxy/envoy/issues/6767#issuecomment-2489921683)

[https://github.com/istio/istio/issues/13589](https://github.com/istio/istio/issues/13589)

[https://github.com/projectcontour/contour/issues/1493](https://github.com/projectcontour/contour/issues/1493)

## 问题成因
### 为什么 :authority 头和 SNI 不一致
这个问题涉及到客户端的连接复用机制，对于 http2 来说，连接多路复用的能力是对比 http1 的一个核心差异。特别是对于浏览器场景，尽可能的连接复用，可以在开启 TLS 的场景下，显著优化页面加载时间（不考虑队头阻塞的情况下）。在 http2 的 [RFC 规约](https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.1)里对于连接复用也有以下描述：

>    Connections that are made to an origin server, either directly or
>
>    through a tunnel created using the CONNECT method (Section 8.3), **MAY**
>
> **   be reused for requests with multiple different URI authority**
>
> **   components.  A connection can be reused as long as the origin server**
>
> **   is authoritative** (Section 10.1).  For TCP connections without TLS,
>
>    this depends on the host having resolved to the same IP address.
>

所以如 Chrome 浏览器就会在达成以下条件时，对一个域名 B 的请求，复用和域名 A 建立的 http2 连接：

1. 域名 B 和域名 A 是解析到同一个 IP
2. 跟域名 A 建立通信时获取的证书的 Common Name 是 wildcard，且可以匹配到域名 B；或者 SAN 中存在域名 B

一旦和域名 A 建立的连接上发送了域名 B 的请求，就出现了上面说的，在网关侧的日志中看到 SNI 和 :authority 头不匹配的问题了。

### 为什么产生 404 
在 Envoy 的网关里，常见的 SNI 和域名路由的映射方式是一对一的，这样匹配到 SNI A 时，只会出现 A 域名的路由配置，没有 B 域名的路由，所以产生了 404。

具体来说，常见的 Envoy 配置组织方式是每个 SNI 有自己独立的 filter chain，而且这个 filter chain 中的 HCM 配置里的 RDS 配置也是独立的。

## 解决方案
### 方案一：使用相同证书的域名复用同一个 filter chain
这个问题严格来说不是 envoy 的 bug，而是配置组织不当的问题，通过相同证书的域名复用 filter chain 就可以解决。

这个方案有两处不足：

1. 如果当域名的证书发生了修改，需要重建 filter chain，就会影响 downstream 连接断开
2. 增加了控制面的复杂度，例如使用 Gateway API 时，不能基于 filter chain 和 Gateway 中 Listener 一对一映射

### 方案二：基于 HTTP 421 状态码
常见的是通过 lua filter 来返回 421，例如：

```yaml
              "@type": "type.googleapis.com/envoy.extensions.filters.http.lua.v3.Lua"
              inlineCode: |
                function envoy_on_request(request_handle)
                  local streamInfo = request_handle:streamInfo()
                  if streamInfo:requestedServerName() ~= "" then
                    if (string.sub(streamInfo:requestedServerName(), 1, 2) == "*." and not string.find(request_handle:headers():get(":authority"), string.sub(streamInfo:requestedServerName(), 2))) then
                      request_handle:respond({[":status"] = "421"}, "Misdirected Request")
                    end
                    if (string.sub(streamInfo:requestedServerName(), 1, 2) ~= "*." and streamInfo:requestedServerName() ~= request_handle:headers():get(":authority")) then
                      request_handle:respond({[":status"] = "421"}, "Misdirected Request")
                    end
                  end
                end
```

这也是基于 HTTP2 [RFC ](https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2)的建议:

>    In some deployments, reusing a connection for multiple origins can
>
>    result in requests being directed to the wrong origin server.  For
>
>    example, TLS termination might be performed by a middlebox that uses
>
>    the TLS Server Name Indication (SNI) [TLS-EXT] extension to select an
>
>    origin server.  This means that it is possible for clients to send
>
>    confidential information to servers that might not be the intended
>
>    target for the request, even though the server is otherwise
>
>    authoritative.
>
>    A server that does not wish clients to reuse connections can indicate
>
>    that it is not authoritative for a request by sending a 421
>
>    (Misdirected Request) status code in response to the request (see
>
>    Section 9.1.2).
>

这个方案也有两处不足：

1. 失去了连接复用的特性，对于一些依赖 HTTP2 连接复用实现页面加载优化的场景，可能是不接受的
2. HTTP 421 存在版本兼容问题，特别是在中国有很多基于低版本 chromium 构建的 Hybrid Android APP，存在对不同域名复用连接，但是又不支持基于 421 重新建连的问题，返回 421 会直接造成业务报错

### 方案三：filter chains 共用路由配置
#### 基于 RDS
所有 https 的 filter chain 如果都共用同一份 RDS，可以解决这个问题，但是会造成 RDS 资源过大的问题，资源过大，就无法通过 delta xDS 等方案去做增量推送优化。而且 RDS 里任何资源变化，导致资源 checksum 修改，就会使得 Envoy 加载配置时需要对整个 RDS 重新做一遍配置解析和数据结构生成，造成主线程 CPU 过高。

#### 基于 VHDS
目前的 VHDS 方案是基于 onDemand 的，只有当前请求的路由找不到域名配置时，会触发向 xDS 服务器拉取配置。这样会将数据面的流量穿透给控制面，如果有大量404的请求会对控制面造成压力，而且控制面的可用性直接影响到数据面的可用性。

#### 基于 SRDS
目前 Envoy 支持基于指定 Header 来做路由配置切片（[Scoped RDS](https://www.envoyproxy.io/docs/envoy/latest/api-v3/extensions/filters/network/http_connection_manager/v3/http_connection_manager.proto#envoy-v3-api-msg-extensions-filters-network-http-connection-manager-v3-scopedroutes)）。看之前的设计，是为了能对不同 cookie 走不同的路由配置。

可以对 SRDS 做扩展来支持按域名切片进行匹配路由。扩展的关键点是：

1. 要支持 wildcard domain，支持前缀匹配
2. 不同的 port 下相同域名逻辑可能不同，例如 80 下可能是强制跳转

下面是 Higress 对 ScopedRoutes 做的扩展在配置上的体现：

```protobuf
// [#next-free-field: 6]
message ScopedRoutes {
     option (udpa.annotations.versioning).previous_message_type =
        "envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes";
...
...
      message HostValueExtractor {
        option (udpa.annotations.versioning).previous_message_type =
            "envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder."
            "FragmentBuilder.HostValueExtractor";

        // The maximum number of host superset recomputes. If not specified, defaults to 100.
        google.protobuf.UInt32Value max_recompute_num = 1;
      }

      message LocalPortValueExtractor {
        option (udpa.annotations.versioning).previous_message_type =
            "envoy.config.filter.network.http_connection_manager.v2.ScopedRoutes.ScopeKeyBuilder."
            "FragmentBuilder.LocalPortValueExtractor";
      }


      oneof type {
        option (validate.required) = true;

        // Specifies how a header field's value should be extracted.
        HeaderValueExtractor header_value_extractor = 1;

        // Extract the fragemnt value from the :authority header, and support recompute with the wildcard domains,
        // i.e. ``www.example.com`` can be recomputed with ``*.example.com``, then ``*.com``, then ``*``.
        HostValueExtractor host_value_extractor = 101;

        // Extract the fragment value from local port of the connection.
        LocalPortValueExtractor local_port_value_extractor = 102;
      }
    }

    // The final(built) scope key consists of the ordered union of these fragments, which are compared in order with the
    // fragments of a :ref:`ScopedRouteConfiguration<envoy_v3_api_msg_config.route.v3.ScopedRouteConfiguration>`.
    // A missing fragment during comparison will make the key invalid, i.e., the computed key doesn't match any key.
    repeated FragmentBuilder fragments = 1 [(validate.rules).repeated = {min_items: 1}];
  }
```

## 共用路由配置的安全性考虑
在所有 filter chains 共用路由配置的情况下，因为不同的 filter chain 可能有不同的认证策略， 比如常见的需要认证客户端证书（mTLS）的情况，或者基于 IP 的 RBAC 等。

贸然将所有路由都暴露到任意的 filter chain 上是不安全的。

可以考虑的方案，是由控制面来识别这一安全隐患，在发现某个域名必须通过特定 filter chain 的认证后才能访问时，进行对应的保护。

Higress 是给 VirtualHost 增加配置项 allow_server_names，例如在开启 mTLS 时，会配置只允许请求带特定 SNI 的情况下才能访问：

```protobuf
// [#protodoc-title: HTTP route components]
// * Routing :ref:`architecture overview <arch_overview_http_routing>`
// * HTTP :ref:`router filter <config_http_filters_router>`

// The top level element in the routing configuration is a virtual host. Each virtual host has
// a logical name as well as a set of domains that get routed to it based on the incoming request's
// host header. This allows a single listener to service multiple top level domain path trees. Once
// a virtual host is selected based on the domain, the routes are processed in order to see which
// upstream cluster to route to or whether to perform a redirect.
// [#next-free-field: 24]
message VirtualHost {
  option (udpa.annotations.versioning).previous_message_type = "envoy.api.v2.route.VirtualHost";
...
...
  // If non-empty, a list of server names (such as SNI for the TLS protocol) is used to determine
  // whether this request is allowed to access this VirutalHost. If not allowed, 421 Misdirected Request will be returned.
  //
  // The server name can be matched whith wildcard domains, i.e. ``www.example.com`` can be matched with
  // ``www.example.com``, ``*.example.com`` and ``*.com``.
  //
  // Note that partial wildcards are not supported, and values like ``*w.example.com`` are invalid.
  //
  // This is useful when expose all virtual hosts to arbitrary HCM filters (such as using SRDS), and you want to make
  // mTLS-protected routes invisible to requests with different SNIs.
  //
  // .. attention::
  //
  //   See the :ref:`FAQ entry <faq_how_to_setup_sni>` on how to configure SNI for more
  //   information.
  repeated string allow_server_names = 101;
}
```

### 是否有安全隐患？
以 httpd 为例的一些传统 HTTP 代理软件并不支持当 :authority 和 SNI 不一致时进行路由。而 Nginx 应该是比较早实现这一特性的网关，也有人给 Nginx 社区提了 issue，认为有安全隐患：

[https://trac.nginx.org/nginx/ticket/1694](https://trac.nginx.org/nginx/ticket/1694)

这是 Nginx 当时维护者的答复，说的很明白，并没有安全隐患:

> <font style="color:rgb(0, 0, 0);">In theory, you are right. SNI was designed to be used with the only one name, and requesting different names over a connection which uses SNI is not correct. Quoting</font><font style="color:rgb(0, 0, 0);"> </font>[<font style="color:rgb(0, 0, 0);">RFC 6066</font>](https://tools.ietf.org/html/rfc6066#section-3)<font style="color:rgb(0, 0, 0);">:  
</font>
>
> <font style="color:rgb(0, 0, 0);">If the server_name is established in the TLS session handshake, the client SHOULD NOT  
</font><font style="color:rgb(0, 0, 0);">attempt to request a different server name at the application layer.  
</font>
>
> <font style="color:rgb(0, 0, 0);">But in practice, SPDY introduced so-called "connection reuse", which effectively uses a connection with an established SNI for request to different application-level names. And it is followed by</font><font style="color:rgb(0, 0, 0);"> </font>[<font style="color:rgb(0, 0, 0);">HTTP/2 connection reuse</font>](https://tools.ietf.org/html/rfc7540#section-9.1.1)<font style="color:rgb(0, 0, 0);">, which does the same: a HTTP/2 client can request a different host over an already established connection.  
</font>
>
> <font style="color:rgb(0, 0, 0);">The 421 (Misdirected Request) status code, also introduced by HTTP/2 RFC, is expected to be used only when such a connection reuse is not possible due to server limitations. In nginx, 421 is returned when a client tries to request a server protected with client SSL certificates over a connection established to a different server.</font>
>

技术是在不断发展的，RFC 6066 制订时，还没有出现 HTTP/2 多路复用这样的技术，所以认为客户端在一条使用 SNI 的连接上发送不同域名的请求是不正确的。

但随着 Web 技术的发展，前端页面承载的内容愈加丰富，页面并发请求愈加增多，不论是对客户端还是服务端都提出了更高性能，更快响应的要求，SPDY 以及 HTTP/2 顺应而生，面对 TLS 下昂贵的连接开销，连接复用应当“应用尽用”。既然对于授信的服务端连接，通过 HTTPS 证书认证出了服务端能合法地处理其他域名的请求，那么，在连接上发送和 SNI 不同域名的请求也完全是安全的。

对于这样合理的客户端需求，网关自然应该承接。从用户体验的角度看，可以通过连接复用提升页面渲染或接口访问速度；从更大的视角看，也是让信息的传递，在保障安全的前提下，删繁就简，更加节能低碳。


