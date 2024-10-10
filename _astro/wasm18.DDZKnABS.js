const e="ebook/en/wasm18.md",t="docs",s="ebook/en/wasm18",i=`
# Redis \u8C03\u7528

\u672C\u7AE0\u4ECB\u7ECD\u5982\u4F55\u5728\u63D2\u4EF6\u4E2D\u8C03\u7528 Redis\u3001\u672C\u5730\u5F00\u53D1\u73AF\u5883\u642D\u5EFA\u3001\u4EE5\u53CA\u5F00\u53D1\u57FA\u4E8E\u4EE4\u724C\u6876\u9650\u6D41\u63D2\u4EF6\u3002

## 1 Redis \u8C03\u7528

Higress \u63D2\u4EF6\u7684 Go SDK \u4E2D redis_wrapper.go \u5C01\u88C5 Redis \u8C03\u7528\uFF0C \u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A

\`\`\`shell
// Redis \u56DE\u8C03\u51FD\u6570
type RedisResponseCallback func(response resp.Value)

// Redis \u8C03\u7528\u63A5\u53E3
type RedisClient interface {
	// \u521D\u59CB\u5316\u63A5\u53E3
	Init(username, password string, timeout int64) error
	// with this function, you can call redis as if you are using redis-cli
	}
	// \u547D\u4EE4\u63A5\u53E3
	Command(cmds []interface{}, callback RedisResponseCallback) error
	// Lua\u811A\u672C\u63A5\u53E3
	Eval(script string, numkeys int, keys, args []interface{}, callback RedisResponseCallback) error

	// \u4EE5\u4E0B\u662F Redis \u5404\u79CD\u547D\u4EE4\u63A5\u53E3
	// Key
	Del(key string, callback RedisResponseCallback) error
	Exists(key string, callback RedisResponseCallback) error
	Expire(key string, ttl int, callback RedisResponseCallback) error
	Persist(key string, callback RedisResponseCallback) error
    ...
}

// RedisClusterClient, Redis \u8C03\u7528\u63A5\u53E3\u5177\u4F53\u5B9E\u73B0
type RedisClusterClient[C Cluster] struct {
	cluster C
}

func RedisInit(cluster Cluster, username, password string, timeout uint32) error {
	return proxywasm.RedisInit(cluster.ClusterName(), username, password, timeout)
}
// \u771F\u6B63\u8C03\u7528 Redis \u7684\u51FD\u6570
func RedisCall(cluster Cluster, respQuery []byte, callback RedisResponseCallback) error {
	requestID := uuid.New().String()
	_, err := proxywasm.DispatchRedisCall(
		cluster.ClusterName(),
		respQuery,
		func(status int, responseSize int) {
			response, err := proxywasm.GetRedisCallResponse(0, responseSize)
			var responseValue resp.Value
			// \u83B7\u53D6 Redis \u56DE\u8C03\u7ED3\u679C responseValue 
			...
			if callback != nil {
			   // \u8C03\u7528\u56DE\u8C03\u51FD\u6570
               callback(responseValue)
			}
		})
	...
	return err
}
\`\`\`

\u6240\u6709\u8C03\u7528 Redis \u7684\u63A5\u53E3\uFF0C\u6700\u7EC8\u901A\u8FC7 RedisCall \u8C03\u7528 Redis\uFF0C \u540C\u65F6\u56DE\u8C03 RedisResponseCallback \u56DE\u8C03\u51FD\u6570\u3002

## 2 \u4EE4\u724C\u6876\u9650\u6D41

\u5E38\u89C1\u7684\u9650\u6D41\u7B97\u6CD5\u6709\u56FA\u5B9A\u7A97\u53E3\u9650\u6D41\u7B97\u6CD5\u3001\u6ED1\u52A8\u7A97\u53E3\u9650\u6D41\u7B97\u6CD5\u3001\u6F0F\u6876\u9650\u6D41\u7B97\u6CD5\u3001\u4EE4\u724C\u6876\u9650\u6D41\u7B97\u6CD5\u7B49\u3002\u8FD9\u91CC\u4E3B\u8981\u4ECB\u7ECD\u4EE4\u724C\u6876\u9650\u6D41\u7B97\u6CD5\u3002
\u4EE4\u724C\u6876\u7B97\u6CD5\u539F\u7406\uFF1A
- \u4EE4\u724C\u4EE5\u56FA\u5B9A\u7684\u9891\u7387\u88AB\u6DFB\u52A0\u5230\u4EE4\u724C\u6876\u4E2D\u3002
- \u5982\u679C\u4EE4\u724C\u6570\u91CF\u6EE1\u4E86\uFF0C\u8D85\u8FC7\u4EE4\u724C\u6876\u5BB9\u91CF\u7684\u9650\u5236\uFF0C\u90A3\u5C31\u4E22\u5F03\u3002
- \u7CFB\u7EDF\u5728\u63A5\u53D7\u5230\u4E00\u4E2A\u7528\u6237\u8BF7\u6C42\u65F6\uFF0C\u90FD\u4F1A\u5148\u53BB\u4EE4\u724C\u6876\u8981\u4E00\u4E2A\u4EE4\u724C\u3002\u5982\u679C\u62FF\u5230\u4EE4\u724C\uFF0C\u90A3\u4E48\u5C31\u5904\u7406\u8FD9\u4E2A\u8BF7\u6C42\u7684\u4E1A\u52A1\u903B\u8F91\u3002
- \u5982\u679C\u62FF\u4E0D\u5230\u4EE4\u724C\uFF0C\u5C31\u76F4\u63A5\u62D2\u7EDD\u8FD9\u4E2A\u8BF7\u6C42\u3002

\u4EE4\u724C\u6876\u7B97\u6CD5\u5141\u8BB8\u4E00\u5B9A\u91CF\u7684\u7A81\u53D1\u8BF7\u6C42\uFF0C\u56E0\u4E3A\u6876\u53EF\u4EE5\u5B58\u50A8\u4E00\u5B9A\u6570\u91CF\u7684\u4EE4\u724C\uFF0C\u4ECE\u800C\u5728\u77ED\u671F\u5185\u5904\u7406\u66F4\u591A\u7684\u8BF7\u6C42\u3002\u5177\u4F53\u539F\u7406\u89C1\u4E0B\u56FE\uFF1A
![img](https://img.alicdn.com/imgextra/i2/O1CN018T2vsi1bbGU9PeVx6_!!6000000003483-0-tps-902-922.jpg)

\u5173\u4E8E QPS \u9650\u6D41\u7B97\u6CD5\u548C\u4EE4\u724C\u6876\u7B97\u6CD5\u4E24\u79CD\u9650\u6D41\u7B97\u6CD5\u4F18\u7F3A\u70B9\uFF0C\u53EF\u4EE5\u53C2\u8003\uFF1A[\u9650\u6D41\u7B97\u6CD5\u9009\u62E9](https://help.aliyun.com/document_detail/149952.html)\u3002

## 3 \u672C\u5730\u5F00\u53D1\u73AF\u5883\u642D\u5EFA

### 3.1  \u521D\u59CB\u5316\u5DE5\u7A0B\u76EE\u5F55

1. \u65B0\u5EFA\u4E00\u4E2A\u5DE5\u7A0B\u76EE\u5F55\u6587\u4EF6 cluster-bucket-limit\u3002

\`\`\`shell
mkdir cluster-bucket-limit
\`\`\`
2. \u5728\u6240\u5EFA\u76EE\u5F55\u4E0B\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u521D\u59CB\u5316 Go \u5DE5\u7A0B\u3002

\`\`\`shell
go mod init cluster-bucket-limit
\`\`\`
\u66F4\u8BE6\u7EC6\u4FE1\u606F\u53C2\u8003\u7B2C\u5341\u56DB\u7AE0 Wasm \u63D2\u4EF6\u4ECB\u7ECD\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002

### 3.2  Makefile\u3001Dockerfile\u3001docker-compose.yaml\u3001envoy.yaml \u6587\u4EF6

1. Makefile\u3001Dockerfile

Makefile\u3001Dockerfile \u6587\u4EF6\u53C2\u8003\u7B2C\u5341\u56DB\u7AE0 Wasm \u63D2\u4EF6\u4ECB\u7ECD\u548C\u5F00\u53D1\u81EA\u5B9A\u4E49\u63D2\u4EF6\u3002

2. docker-compose.yaml

\`\`\`yaml
version: '3.9'
services:
  envoy:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/gateway:v1.4.1
    entrypoint: /usr/local/bin/envoy
    # \u6CE8\u610F\u8FD9\u91CC\u5BF9wasm\u5F00\u542F\u4E86debug\u7EA7\u522B\u65E5\u5FD7\uFF0C\u6B63\u5F0F\u90E8\u7F72\u65F6\u5219\u9ED8\u8BA4info\u7EA7\u522B
    command: -c /etc/envoy/envoy.yaml --log-level info --log-path /etc/envoy/envoy.log --component-log-level wasm:debug
    depends_on:
      - echo-server
    networks:
      - wasmtest
    ports:
      - "10000:10000"
      - "9901:9901"
    volumes:
      - ./envoy.yaml:/etc/envoy/envoy.yaml
      - ./build/plugin.wasm:/etc/envoy/plugin.wasm
      - ./envoy.log:/etc/envoy/envoy.log
  echo-server:
    image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echo-server:1.3.0
    networks:
      - wasmtest
    ports:
      - "3000:3000"
  redis:
    image: registry.cn-hangzhou.aliyuncs.com/2456868764/redis:latest
    environment:
      - ALLOW_EMPTY_PASSWORD=yes
    networks:
      wasmtest:
        ipv4_address: 172.20.0.100
    ports:
      - "6379:6379"
networks:
  wasmtest:
    ipam:
      config:
        - subnet: 172.20.0.0/24

\`\`\`

3. envoy.yaml \u6587\u4EF6

envoy.yaml \u914D\u7F6E\u6587\u4EF6\u5982\u4E0B\uFF1A
\`\`\`yaml
admin:
  address:
    socket_address:
      protocol: TCP
      address: 0.0.0.0
      port_value: 9901
static_resources:
  listeners:
    - name: listener_0
      address:
        socket_address:
          protocol: TCP
          address: 0.0.0.0
          port_value: 10000
      filter_chains:
        - filters:
            - name: envoy.filters.network.http_connection_manager
              typed_config:
                "@type": type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager
                scheme_header_transformation:
                  scheme_to_overwrite: https
                stat_prefix: ingress_http
                route_config:
                  name: local_route
                  virtual_hosts:
                    - name: local_service
                      domains: ["*"]
                      routes:
                        - match:
                            prefix: "/"
                          route:
                            cluster: echo-server
                http_filters:
                  - name: wasmdemo
                    typed_config:
                      "@type": type.googleapis.com/udpa.type.v1.TypedStruct
                      type_url: type.googleapis.com/envoy.extensions.filters.http.wasm.v3.Wasm
                      value:
                        config:
                          name: wasmdemo
                          vm_config:
                            runtime: envoy.wasm.runtime.v8
                            code:
                              local:
                                filename: /etc/envoy/plugin.wasm
                          configuration:
                            "@type": "type.googleapis.com/google.protobuf.StringValue"
                            value: |-
                              {
                                "keys": [
                                  "authorization"
                                ],
                                "in_header": true,
                                "limits": [
                                  {
                                    "name": "credential1",
                                    "consumer": "Bearer credential1",
                                    "rate": 2,
                                    "capacity": 4
                                  },
                                  {
                                    "name": "all",
                                    "consumer": "*",
                                    "rate": 1,
                                    "capacity": 2
                                  }
                                ],
                                "rejected_code": 429,
                                "rejected_msg": "Too Many Requests",
                                "show_limit_quota_header": true,
                                "redis":{
                                  "service_name": "redis.static",
                                  "service_port": 6379,
                                  "timeout": 2000
                                }
                              }
                  - name: envoy.filters.http.router
                    typed_config:
                      "@type": type.googleapis.com/envoy.extensions.filters.http.router.v3.Router
  clusters:
    - name: echo-server
      connect_timeout: 30s
      type: LOGICAL_DNS
      # Comment out the following line to test on v6 networks
      dns_lookup_family: V4_ONLY
      lb_policy: ROUND_ROBIN
      load_assignment:
        cluster_name: echo-server
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: echo-server
                      port_value: 3000
    - name: outbound|6379||redis.static
      connect_timeout: 30s
      type: STATIC
      load_assignment:
        cluster_name: outbound|6379||redis.static
        endpoints:
          - lb_endpoints:
              - endpoint:
                  address:
                    socket_address:
                      address: 172.20.0.100
                      port_value: 6379
\`\`\`
envoy.yaml \u914D\u7F6E\u6587\u4EF6\u589E\u52A0\u4E86 \`outbound|6379||redis.static\` \u96C6\u7FA4\uFF0C\u7528\u4E8E\u8FDE\u63A5 Redis \u670D\u52A1\u3002Redis \u8FDE\u63A5\u76EE\u524D\u4E0D\u652F\u6301 DNS \u57DF\u540D\u914D\u7F6E\uFF0C\u53EA\u652F\u6301 IP \u5730\u5740\u914D\u7F6E\u3002
\u56E0\u6B64\u8FD9\u91CC Redis \u7684 IP \u5730\u5740\u662F \`172.20.0.100\`\u3002

## 3 \u4EE4\u724C\u6876\u9650\u6D41\u63D2\u4EF6\u5F00\u53D1

### 3.1 \u63D2\u4EF6\u914D\u7F6E\u548C\u914D\u7F6E\u89E3\u6790

\u63D2\u4EF6\u914D\u7F6E\u548C\u914D\u7F6E\u89E3\u6790\u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A
\`\`\`golang
// LimitConfig \u5B9A\u4E49\u4E86\u9650\u6D41\u63D2\u4EF6\u7684\u914D\u7F6E\u7ED3\u6784\u3002
type LimitConfig struct {
	Keys                 []string            \`yaml:"keys"\`                    // \u5B9A\u4E49\u4E86\u7528\u4E8E\u63D0\u53D6\u9650\u6D41\u4FE1\u606F\u7684HTTP\u8BF7\u6C42\u5934\u5B57\u6BB5\u540D\u79F0\u3002
	InQuery              bool                \`yaml:"in_query,omitempty"\`      // \u6807\u8BC6\u662F\u5426\u4ECE\u67E5\u8BE2\u53C2\u6570\u4E2D\u83B7\u53D6\u9650\u6D41\u4FE1\u606F\u3002
	InHeader             bool                \`yaml:"in_header,omitempty"\`     // \u6807\u8BC6\u662F\u5426\u4ECE\u8BF7\u6C42\u5934\u4E2D\u83B7\u53D6\u9650\u6D41\u4FE1\u606F\u3002
	Limits               []LimitItem         \`yaml:"limits"\`                  // \u5305\u542B\u5177\u4F53\u7684\u9650\u6D41\u89C4\u5219\u9879\u3002
	RejectedCode         uint32              \`yaml:"rejected_code"\`           // \u8BF7\u6C42\u8D85\u8FC7\u9608\u503C\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684 HTTP \u72B6\u6001\u7801\u3002
	RejectedMsg          string              \`yaml:"rejected_msg"\`            // \u8BF7\u6C42\u8D85\u8FC7\u9608\u503C\u88AB\u62D2\u7EDD\u65F6\u8FD4\u56DE\u7684\u54CD\u5E94\u4F53\u3002
	ShowLimitQuotaHeader bool                \`yaml:"show_limit_quota_header"\` // \u6807\u8BC6\u662F\u5426\u5728\u54CD\u5E94\u5934\u4E2D\u663E\u793A\u9650\u6D41\u914D\u989D\u4FE1\u606F\u3002
	RedisInfo            RedisInfo           \`yaml:"redis"\`                   // \u5B9A\u4E49\u4E86\u4E0E Redis \u4EA4\u4E92\u6240\u9700\u7684\u4FE1\u606F\u3002
	RedisClient          wrapper.RedisClient // Redis\u5BA2\u6237\u7AEF\uFF0C\u7528\u4E8E\u6267\u884CRedis\u547D\u4EE4\u3002
}

// LimitItem \u5B9A\u4E49\u4E86\u5177\u4F53\u7684\u9650\u6D41\u9879\uFF0C\u5305\u62EC\u9650\u6D41\u540D\u79F0\u3001\u6D88\u8D39\u8005\u6807\u8BC6\u3001\u8BF7\u6C42\u901F\u7387\u548C\u5BB9\u91CF\u3002
type LimitItem struct {
	Name     string \`yaml:"name"\`     // \u9650\u6D41\u9879\u7684\u540D\u79F0\u3002
	Consumer string \`yaml:"consumer"\` // \u9650\u6D41\u9879\u5173\u8054\u7684\u6D88\u8D39\u8005\u6807\u8BC6\uFF0C\u7528\u4E8E\u5339\u914D\u7279\u5B9A\u7684\u8BF7\u6C42\u3002
	Rate     int    \`yaml:"rate"\`     // \u6BCF\u79D2\u653E\u5165\u6876\u5185\u7684\u4EE4\u724C\u6570\u91CF\u3002
	Capacity int    \`yaml:"capacity"\` // \u9650\u6D41\u6876\u7684\u6700\u5927\u5BB9\u91CF\u3002
}

// RedisInfo \u5B9A\u4E49\u4E86\u8FDE\u63A5Redis\u6240\u9700\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002
type RedisInfo struct {
	ServiceName string \`required:"true" yaml:"service_name" json:"service_name"\` // Redis \u670D\u52A1\u540D\u6216\u5730\u5740\u3002
	ServicePort int    \`yaml:"service_port" json:"service_port"\`                 // Redis \u670D\u52A1\u7AEF\u53E3\u3002
	Username    string \`yaml:"username" json:"username"\`                         // \u8FDE\u63A5 Redis \u7684\u7528\u6237\u540D\uFF0C\u5982\u679C\u9700\u8981\u3002
	Password    string \`yaml:"password" json:"password"\`                         // \u8FDE\u63A5 Redis \u7684\u5BC6\u7801\uFF0C\u5982\u679C\u9700\u8981\u3002
	Timeout     int    \`yaml:"timeout" json:"timeout"\`                           // \u8FDE\u63A5 Redis \u7684\u8D85\u65F6\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09\u3002
}

// LimitContext \u5B9A\u4E49\u4E86\u9650\u6D41\u4E0A\u4E0B\u6587\uFF0C\u5B58\u50A8\u4E86\u9650\u6D41\u76F8\u5173\u7684\u4FE1\u606F\u3002
type LimitContext struct {
	Allowed   int // \u8868\u793A\u5F53\u524D\u8BF7\u6C42\u662F\u5426\u88AB\u5141\u8BB8\u3002
	Count     int // \u9650\u6D41\u6876\u5F53\u524D\u7684\u8BA1\u6570\u3002
	Remaining int // \u9650\u6D41\u6876\u5269\u4F59\u7684\u5BB9\u91CF\u3002
	Reset     int // \u9650\u6D41\u6876\u91CD\u7F6E\u65F6\u95F4\uFF08\u79D2\uFF09\u3002
}

// \u89E3\u6790\u914D\u7F6E\uFF0C\u8FD9\u91CC\u5FFD\u7565\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u7684\u7EC6\u8282\u3002\u4E3B\u8981\u663E\u793A Redis \u90E8\u5206\u89E3\u6790\u914D\u7F6E\u3002
func parseConfig(json gjson.Result, config *LimitConfig, log wrapper.Log) error {
	// keys
	names := json.Get("keys")
	...
	// in_query and in_header
	in_query := json.Get("in_query")
	in_header := json.Get("in_header")
	...
	// parse limit
	limits := json.Get("limits")
	...
	config.ShowLimitQuotaHeader = json.Get("show_limit_quota_header").Bool()
	
	// parse redis
	redisConfig := json.Get("redis")
	if !redisConfig.Exists() {
		return errors.New("missing redis in config")
	}
	serviceName := redisConfig.Get("service_name").String()
	if serviceName == "" {
		return errors.New("redis service name must not be empty")
	}
	servicePort := int(redisConfig.Get("service_port").Int())
	if servicePort == 0 {
		if strings.HasSuffix(serviceName, ".static") {
			// use default logic port which is 80 for static service
			servicePort = 80
		} else {
			servicePort = 6379
		}
	}
	username := redisConfig.Get("username").String()
	password := redisConfig.Get("password").String()
	timeout := int(redisConfig.Get("timeout").Int())
	if timeout == 0 {
		timeout = 1000
	}
	config.RedisInfo.ServiceName = serviceName
	config.RedisInfo.ServicePort = servicePort
	config.RedisInfo.Username = username
	config.RedisInfo.Password = password
	config.RedisInfo.Timeout = timeout
	config.RedisClient = wrapper.NewRedisClusterClient(wrapper.FQDNCluster{
		FQDN: serviceName,
		Port: int64(servicePort),
	})
	log.Debugf("parseConfig()+%+v", config)
	return config.RedisClient.Init(username, password, int64(timeout))
}
\`\`\`

\u8FD9\u91CC\u5FFD\u7565\u63D2\u4EF6\u914D\u7F6E\u89E3\u6790\u7684\u7EC6\u8282\uFF0C\u4E3B\u8981\u663E\u793A Redis \u89E3\u6790\u914D\u7F6E\u3002\u53EF\u4EE5\u770B\u51FA\u8FD9\u91CC\u9700\u8981\u8C03\u7528 \`wrapper.NewRedisClusterClient\` \u65B9\u6CD5\u521D\u59CB\u5316 RedisClient \u548C RedisClient \`Init\` \u65B9\u6CD5\u521D\u59CB\u5316 Redis \u8FDE\u63A5\u3002

### 3.2 \u63D2\u4EF6\u9650\u6D41 Lua \u811A\u672C
\u4EE4\u724C\u6876\u9650\u6D41\u7684 Lua \u811A\u672C\u5982\u4E0B\uFF1A
\`\`\`lua
local tokens_key = KEYS[1]
local timestamp_key = KEYS[2]
--redis.log(redis.LOG_WARNING, "tokens_key " .. tokens_key)

local rate = tonumber(ARGV[1])
local capacity = tonumber(ARGV[2])
local now = tonumber(ARGV[3])
local requested = tonumber(ARGV[4])
local unit = tonumber(ARGV[5])

local fill_time = capacity/rate
local ttl = math.floor(fill_time*2*unit)

--redis.log(redis.LOG_WARNING, "rate " .. ARGV[1])
--redis.log(redis.LOG_WARNING, "capacity " .. ARGV[2])
--redis.log(redis.LOG_WARNING, "now " .. ARGV[3])
--redis.log(redis.LOG_WARNING, "requested " .. ARGV[4])
--redis.log(redis.LOG_WARNING, "filltime " .. fill_time)
--redis.log(redis.LOG_WARNING, "ttl " .. ttl)

local last_tokens = tonumber(redis.call("get", tokens_key))
if last_tokens == nil then
  last_tokens = capacity
end
--redis.log(redis.LOG_WARNING, "last_tokens " .. last_tokens)

local last_refreshed = tonumber(redis.call("get", timestamp_key))
if last_refreshed == nil then
  last_refreshed = 0
end
--redis.log(redis.LOG_WARNING, "last_refreshed " .. last_refreshed)

local delta = math.max(0, (now-last_refreshed)/unit)
local filled_tokens = math.min(capacity, last_tokens + math.floor(delta*rate))
local allowed = filled_tokens >= requested
local new_tokens = filled_tokens
local allowed_num = 0
if allowed then
  new_tokens = filled_tokens - requested
  allowed_num = 1
end

--redis.log(redis.LOG_WARNING, "delta " .. delta)
--redis.log(redis.LOG_WARNING, "filled_tokens " .. filled_tokens)
--redis.log(redis.LOG_WARNING, "allowed_num " .. allowed_num)
--redis.log(redis.LOG_WARNING, "new_tokens " .. new_tokens)

if ttl > 0 then
  redis.call("setex", tokens_key, ttl, new_tokens)
  redis.call("setex", timestamp_key, ttl, now)
end

return { allowed_num, new_tokens, capacity, ttl}
\`\`\`
Lua \u811A\u672C\u662F\u5728 Redis \u4E2D\u6267\u884C\u7684\uFF0C\u7528\u4E8E\u5B9E\u73B0\u4EE4\u724C\u6876\u9650\u6D41\u7B97\u6CD5\u3002\u4E0B\u9762\u662F\u5BF9\u811A\u672C\u53C2\u6570\u548C\u539F\u7406\u7684\u5206\u6790\uFF1A

1. \u53C2\u6570\u89E3\u91CA\uFF1A
- KEYS[1] \u548C KEYS[2]\uFF1A\u8FD9\u4E24\u4E2A\u53C2\u6570\u662F\u901A\u8FC7 Redis \u8C03\u7528\u4F20\u9012\u7684\u952E\uFF08keys\uFF09\uFF0C\u901A\u5E38\u7528\u4E8E\u5B58\u50A8\u4EE4\u724C\u6876\u7684\u5F53\u524D\u4EE4\u724C\u6570\uFF08tokens_key\uFF09\u548C\u6700\u540E\u5237\u65B0\u65F6\u95F4\uFF08timestamp_key\uFF09\u3002
- ARGV[1] \u5230 ARGV[5]\uFF1A\u8FD9\u4E9B\u53C2\u6570\u662F\u901A\u8FC7 Redis \u8C03\u7528\u4F20\u9012\u7684\u53C2\u6570\uFF0C\u7528\u4E8E\u914D\u7F6E\u9650\u6D41\u7B56\u7565\u3002
  - rate\uFF1A\u5355\u4F4D\u65F6\u95F4\u5185\u751F\u6210\u7684\u4EE4\u724C\u6570\u91CF\u3002
  - capacity\uFF1A\u4EE4\u724C\u6876\u7684\u5BB9\u91CF\uFF0C\u5373\u6700\u591A\u53EF\u4EE5\u5BB9\u7EB3\u7684\u4EE4\u724C\u6570\u3002
  - now\uFF1A\u5F53\u524D\u65F6\u95F4\uFF0C\u901A\u5E38\u4EE5\u65F6\u95F4\u6233\u8868\u793A\uFF0C\u4EE5\u79D2\u5355\u4F4D\u3002
  - requested\uFF1A\u5F53\u524D\u8BF7\u6C42\u9700\u8981\u7684\u4EE4\u724C\u6570\u3002
  - unit\uFF1A\u4EE4\u724C\u751F\u6210\u7684\u65F6\u95F4\u5355\u4F4D\uFF0C1 \u8868\u793A\u79D2\uFF0C60 \u8868\u793A\u5206\u949F\uFF0C3600 \u8868\u793A\u5C0F\u65F6\u3002
2. \u811A\u672C\u539F\u7406\uFF1A
- \u521D\u59CB\u5316\u53D8\u91CF\uFF1A\u6839\u636E\u4F20\u5165\u7684\u53C2\u6570\u521D\u59CB\u5316\u4EE4\u724C\u6876\u7684\u586B\u5145\u65F6\u95F4\u548C TTL\uFF08\u751F\u5B58\u65F6\u95F4\uFF09\u3002
- \u83B7\u53D6\u5F53\u524D\u72B6\u6001\uFF1A\u4ECE Redis \u4E2D\u83B7\u53D6\u5F53\u524D\u7684\u4EE4\u724C\u6570\uFF08last_tokens\uFF09\u548C\u6700\u540E\u5237\u65B0\u65F6\u95F4\uFF08last_refreshed\uFF09\u3002\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u521D\u59CB\u5316\u4E3A\u4EE4\u724C\u6876\u7684\u5BB9\u91CF\u3002
- \u8BA1\u7B97\u4EE4\u724C\u586B\u5145\uFF1A
  - delta\uFF1A\u81EA\u4E0A\u6B21\u5237\u65B0\u4EE5\u6765\u7ECF\u8FC7\u7684\u5355\u4F4D\u65F6\u95F4\u3002
  - filled_tokens\uFF1A\u6839\u636E delta \u548C rate \u8BA1\u7B97\u5E94\u8BE5\u586B\u5145\u7684\u4EE4\u724C\u6570\uFF0C\u4F46\u4E0D\u80FD\u8D85\u8FC7\u6876\u7684\u5BB9\u91CF\u3002
- \u5224\u65AD\u662F\u5426\u5141\u8BB8\u8BF7\u6C42\uFF1A
  - allowed\uFF1A\u5982\u679C\u5F53\u524D\u4EE4\u724C\u6570\u52A0\u4E0A\u586B\u5145\u7684\u4EE4\u724C\u6570\u5927\u4E8E\u7B49\u4E8E\u8BF7\u6C42\u7684\u4EE4\u724C\u6570\uFF0C\u5219\u5141\u8BB8\u8BF7\u6C42\u3002
- \u66F4\u65B0\u4EE4\u724C\u6570\uFF1A
  - \u5982\u679C\u8BF7\u6C42\u88AB\u5141\u8BB8\uFF0C\u4ECE\u5F53\u524D\u4EE4\u724C\u6570\u4E2D\u51CF\u53BB\u8BF7\u6C42\u7684\u4EE4\u724C\u6570\uFF0C\u66F4\u65B0 new_tokens\u3002
- \u8BBE\u7F6E\u65B0\u7684\u72B6\u6001\uFF1A
  - \u5982\u679C TTL \u5927\u4E8E 0\uFF0C\u5219\u66F4\u65B0 Redis \u4E2D\u7684\u4EE4\u724C\u6570\u548C\u65F6\u95F4\u6233\uFF0C\u8BBE\u7F6E\u65B0\u7684 TTL\u3002
- \u8FD4\u56DE\u7ED3\u679C\uFF1A
  - \u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u9650\u6D41\u7ED3\u679C\u7684\u6570\u7EC4\uFF0C\u5305\u62EC\u662F\u5426\u5141\u8BB8\u8BF7\u6C42\u3001\u65B0\u7684\u4EE4\u724C\u6570\u3001\u6876\u5BB9\u91CF\u548C TTL\u3002

### 3.3 \u63D2\u4EF6\u9650\u6D41\u5177\u4F53\u5B9E\u73B0

\u9650\u6D41\u4E3B\u8981\u5B9E\u73B0\u5728\u63D2\u4EF6 \`onHttpRequestHeaders\` \u65B9\u6CD5\u4E2D\uFF0C\u90E8\u5206\u6838\u5FC3\u4EE3\u7801\u5982\u4E0B\uFF1A

\`\`\`golang
// onHttpRequestHeaders \u51FD\u6570\u5728\u5904\u7406 HTTP \u8BF7\u6C42\u5934\u65F6\u88AB\u8C03\u7528\uFF0C\u7528\u4E8E\u6267\u884C\u9650\u6D41\u903B\u8F91\u3002
func onHttpRequestHeaders(ctx wrapper.HttpContext, config LimitConfig, log wrapper.Log) types.Action {
	log.Debugf("onHttpRequestHeaders()")
	// \u521D\u59CB\u5316 tokens \u5207\u7247\uFF0C\u7528\u4E8E\u5B58\u50A8\u4ECE\u8BF7\u6C42\u5934\u6216\u67E5\u8BE2\u53C2\u6570\u4E2D\u63D0\u53D6\u7684 tokens \u4FE1\u606F
	var tokens []string

	// \u5982\u679C\u914D\u7F6E\u6307\u5B9A\u4ECE\u8BF7\u6C42\u5934\u4E2D\u83B7\u53D6 tokens \u4FE1\u606F
	if config.InHeader {
		// \u904D\u5386\u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u6240\u6709\u952E\uFF08key\uFF09\uFF0C\u5C1D\u8BD5\u4ECE\u8BF7\u6C42\u5934\u4E2D\u83B7\u53D6\u6BCF\u4E2A\u952E\u7684\u503C
		for _, key := range config.Keys {
			// \u4F7F\u7528 proxywasm \u5E93\u7684 GetHttpRequestHeader \u51FD\u6570\u83B7\u53D6\u8BF7\u6C42\u5934\u4E2D\u7684\u503C
			value, err := proxywasm.GetHttpRequestHeader(key)
			// \u5982\u679C\u6CA1\u6709\u9519\u8BEF\u4E14\u503C\u4E0D\u4E3A\u7A7A\uFF0C\u5219\u5C06\u503C\u6DFB\u52A0\u5230 tokens \u5207\u7247\u4E2D
			if err == nil && value != "" {
				tokens = append(tokens, value)
			}
		}
	} else if config.InQuery {
		// \u5982\u679C\u914D\u7F6E\u6307\u5B9A\u4ECE\u67E5\u8BE2\u53C2\u6570\u4E2D\u83B7\u53D6 tokens \u4FE1\u606F
		// \u83B7\u53D6 ":path" \u8BF7\u6C42\u5934\u4EE5\u83B7\u53D6\u8BF7\u6C42 URL
		requestUrl, _ := proxywasm.GetHttpRequestHeader(":path")
		// \u89E3\u6790 URL \u5E76\u83B7\u53D6\u67E5\u8BE2\u53C2\u6570
		url, _ := url.Parse(requestUrl)
		queryValues := url.Query()

		// \u904D\u5386\u914D\u7F6E\u4E2D\u5B9A\u4E49\u7684\u6240\u6709\u952E
		for _, key := range config.Keys {
			// \u4ECE\u67E5\u8BE2\u53C2\u6570\u4E2D\u83B7\u53D6\u6BCF\u4E2A\u952E\u7684\u503C
			values, ok := queryValues[key]
			// \u5982\u679C\u67E5\u8BE2\u53C2\u6570\u5B58\u5728\u4E14\u6709\u503C\uFF0C\u5219\u5C06\u503C\u6DFB\u52A0\u5230 tokens \u5207\u7247\u4E2D
			if ok && len(values) > 0 {
				tokens = append(tokens, values...)
			}
		}
	}

	// \u5982\u679C\u4ECE\u8BF7\u6C42\u4E2D\u63D0\u53D6\u4E86\u591A\u4E8E\u4E00\u4E2A\u7684 tokens\uFF0C\u8FD4\u56DE\u9519\u8BEF\u5904\u7406
	if len(tokens) > 1 {
		return deniedMultiKeyAuthData()
	} else if len(tokens) <= 0 {
		// \u5982\u679C\u6CA1\u6709\u63D0\u53D6\u5230 tokens\uFF0C\u8FD4\u56DE\u9519\u8BEF\u5904\u7406
		return deniedNoKeyAuthData()
	}

	// \u63D0\u53D6\u7B2C\u4E00\u4E2A token \u4F5C\u4E3A\u4E3B\u8981\u7684\u4EE4\u724C\u4FE1\u606F
	limitKey := strings.Split(tokens[0], ",")[0]
	log.Debugf("limitKey:%s", limitKey)

	// \u6839\u636E\u63D0\u53D6\u7684 limitKey \u67E5\u627E\u5BF9\u5E94\u7684\u9650\u6D41\u9879
	limitItem := findLimitItem(config, limitKey)
	log.Debugf("limitItem:%+v", limitItem)

	// \u5982\u679C\u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684\u9650\u6D41\u9879\uFF0C\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
	if limitItem.Consumer == "" {
		return types.ActionContinue
	}

	// \u6784\u5EFA Redis \u811A\u672C\u9700\u8981\u7684\u952E\uFF0C\u7528\u4E8E\u64CD\u4F5C\u4EE4\u724C\u6876
	tokenKey := fmt.Sprintf(ClusterRateLimitFormat, limitKey, "token")
	expireKey := fmt.Sprintf(ClusterRateLimitFormat, limitKey, "expire")

	// \u83B7\u53D6\u5F53\u524D\u65F6\u95F4\uFF0C\u7528\u4E8E\u8BA1\u7B97\u4EE4\u724C\u6876\u7684\u586B\u5145\u72B6\u6001
	now := time.Now()
	// \u5C06\u5F53\u524D\u65F6\u95F4\u8F6C\u6362\u4E3A Unix \u65F6\u95F4\u6233\uFF08\u79D2\uFF09
	unixTimestamp := now.UnixNano()
	milliseconds := unixTimestamp / 1e6
	seconds := milliseconds / 1000

	// \u6784\u5EFA\u8C03\u7528 Redis \u811A\u672C\u6240\u9700\u7684\u53C2\u6570
	keys := []interface{}{tokenKey, expireKey}
	args := []interface{}{limitItem.Rate, limitItem.Capacity, seconds, 1, 1}

	// \u8C03\u7528 Redis \u811A\u672C\u6267\u884C\u9650\u6D41\u903B\u8F91
	err := config.RedisClient.Eval(BucketTokenScript, 2, keys, args, func(response resp.Value) {
		log.Debugf("RedisClient.Eval()\uFF0Ckeys:%+v,args:%+v", keys, args)
		// \u68C0\u67E5\u811A\u672C\u8FD4\u56DE\u7684\u7ED3\u679C\u662F\u5426\u5305\u542B 4 \u4E2A\u5143\u7D20
		resultArray := response.Array()
		if len(resultArray) != 4 {
			log.Errorf("redis response parse error, response: %v", response)
            proxywasm.ResumeHttpRequest()
			return
		}
		// \u6839\u636E\u811A\u672C\u8FD4\u56DE\u7684\u7ED3\u679C\u521B\u5EFA LimitContext \u5BF9\u8C61
		context := LimitContext{
			Allowed:   resultArray[0].Integer(),
			Remaining: resultArray[1].Integer(),
			Count:     resultArray[2].Integer(),
			Reset:     resultArray[3].Integer(),
		}
		log.Debugf("context:%+v", context)
		// \u5982\u679C\u8BF7\u6C42\u672A\u88AB\u5141\u8BB8\uFF08Allowed <= 0\uFF09\uFF0C\u89E6\u53D1\u9650\u6D41\u903B\u8F91
		if context.Allowed <= 0 {
			log.Debugf("request rejected")
			rejected(config, context)
			return
		} else {
			// \u5C06\u9650\u6D41\u4E0A\u4E0B\u6587\u5B58\u50A8\u5728 HttpContext \u4E2D\uFF0C\u4F9B\u540E\u7EED\u5904\u7406\u4F7F\u7528
			ctx.SetContext(LimitContextKey, context)
		}
		// \u6062\u590D HTTP \u8BF7\u6C42\u5904\u7406
		proxywasm.ResumeHttpRequest()
	})
	// \u5982\u679C\u8C03\u7528 Redis \u811A\u672C\u65F6\u51FA\u73B0\u9519\u8BEF\uFF0C\u8BB0\u5F55\u9519\u8BEF\u5E76\u7EE7\u7EED\u5904\u7406\u8BF7\u6C42
	if err != nil {
		log.Errorf("redis call failed: %v", err)
		return types.ActionContinue
	}
	// \u6682\u505C\u5904\u7406\u5F53\u524D\u8BF7\u6C42\u5934\uFF0C\u7B49\u5F85 Redis \u811A\u672C\u8C03\u7528\u5B8C\u6210
	return types.HeaderStopAllIterationAndWatermark
}

// findLimitItem \u51FD\u6570\u7528\u4E8E\u5728\u7ED9\u5B9A\u7684\u914D\u7F6E\u4E2D\u67E5\u627E\u4E0E\u7279\u5B9A\u6D88\u8D39\u8005\u5339\u914D\u7684\u9650\u6D41\u9879\u3002\u5982\u679C\u6CA1\u6709\u627E\u5230\u5177\u4F53\u7684\u5339\u914D\u9879\uFF0C\u5B83\u5C06\u8FD4\u56DE\u4E00\u4E2A\u9ED8\u8BA4\u7684 LimitItem \u7ED3\u6784\u3002
func findLimitItem(config LimitConfig, key string) LimitItem {
	// \u904D\u5386\u914D\u7F6E\u4E2D\u7684\u6240\u6709\u9650\u6D41\u9879
	for _, limitItem := range config.Limits {
		// \u68C0\u67E5\u5F53\u524D\u9650\u6D41\u9879\u7684\u6D88\u8D39\u8005\u5B57\u6BB5\u662F\u5426\u4E0E\u63D0\u4F9B\u7684 key \u5339\u914D\uFF0C\u4E14\u6D88\u8D39\u8005\u4E0D\u662F\u901A\u914D\u7B26"*"
		if limitItem.Consumer == key && limitItem.Consumer != "*" {
			// \u5982\u679C\u627E\u5230\u5339\u914D\u7684\u9650\u6D41\u9879\uFF0C\u8FD4\u56DE\u8FD9\u4E2A\u9650\u6D41\u9879
			return limitItem
		}
	}
	// \u518D\u6B21\u904D\u5386\u914D\u7F6E\u4E2D\u7684\u6240\u6709\u9650\u6D41\u9879\uFF0C\u8FD9\u6B21\u662F\u4E3A\u4E86\u67E5\u627E\u901A\u914D\u7B26"*"\u7684\u6D88\u8D39\u8005
	// \u901A\u914D\u7B26"*"\u8868\u793A\u8FD9\u4E2A\u9650\u6D41\u9879\u9002\u7528\u4E8E\u6240\u6709\u6D88\u8D39\u8005
	for _, limitItem := range config.Limits {
		if limitItem.Consumer == "*" {
			// \u5982\u679C\u627E\u5230\u901A\u914D\u7B26\u9650\u6D41\u9879\uFF0C\u8FD4\u56DE\u8FD9\u4E2A\u9650\u6D41\u9879
			return limitItem
		}
	}
	// \u5219\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u7684 LimitItem \u7ED3\u6784\uFF0C\u8868\u793A\u6CA1\u6709\u627E\u5230\u4EFB\u4F55\u9002\u7528\u7684\u9650\u6D41\u89C4\u5219
	return LimitItem{}
}
\`\`\`
onHttpRequestHeaders \u51FD\u6570\u7684\u6838\u5FC3\u903B\u8F91\u53EF\u4EE5\u6982\u62EC\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A
- \u83B7\u53D6 Tokens\uFF1A\u6839\u636E\u914D\u7F6E\uFF08config.InHeader \u6216 config.InQuery\uFF09\uFF0C\u4ECE\u8BF7\u6C42\u5934\u6216\u67E5\u8BE2\u53C2\u6570\u4E2D\u63D0\u53D6\u7528\u4E8E\u9650\u6D41\u7684 tokens \u4FE1\u606F\u3002
- \u9A8C\u8BC1 Tokens\uFF1A\u68C0\u67E5\u63D0\u53D6\u7684 tokens \u662F\u5426\u5B58\u5728\u4E14\u6570\u91CF\u5408\u7406\uFF08\u4E0D\u80FD\u591A\u4E8E\u4E00\u4E2A\uFF09\uFF0C\u5982\u679C\u4E0D\u7B26\u5408\u8981\u6C42\uFF0C\u8FD4\u56DE\u76F8\u5E94\u7684\u9519\u8BEF\u5904\u7406\u3002
- \u67E5\u627E\u9650\u6D41\u9879\uFF1A\u4F7F\u7528\u63D0\u53D6\u7684 tokens \u67E5\u627E\u914D\u7F6E\u4E2D\u7684\u9650\u6D41\u89C4\u5219\uFF08LimitItem\uFF09\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\u9002\u7528\u7684\u9650\u6D41\u89C4\u5219\uFF0C\u5219\u5141\u8BB8\u8BF7\u6C42\u7EE7\u7EED\u3002
- \u6267\u884C\u9650\u6D41\u903B\u8F91\uFF1A\u5982\u679C\u627E\u5230\u9650\u6D41\u89C4\u5219\uFF0C\u6784\u5EFA Redis \u811A\u672C\u9700\u8981\u7684\u952E\u548C\u53C2\u6570\uFF0C\u7136\u540E\u8C03\u7528 Redis \u811A\u672C\u6267\u884C\u9650\u6D41\u7B97\u6CD5\u3002
- \u5904\u7406 Redis \u811A\u672C\u7ED3\u679C\uFF1A\u6839\u636E Redis \u811A\u672C\u8FD4\u56DE\u7684\u7ED3\u679C\uFF0C\u521B\u5EFA LimitContext \u5BF9\u8C61\u5E76\u6839\u636E\u7B97\u6CD5\u7ED3\u679C\u51B3\u5B9A\u662F\u5426\u5141\u8BB8\u8BF7\u6C42\u7EE7\u7EED\uFF1A
  - \u5982\u679C\u8BF7\u6C42\u88AB\u62D2\u7EDD\uFF08context.Allowed \\<= 0\uFF09\uFF0C\u6267\u884C\u9650\u6D41\u903B\u8F91\u5E76\u901A\u77E5\u5BA2\u6237\u7AEF\u3002
  - \u5982\u679C\u8BF7\u6C42\u88AB\u5141\u8BB8\uFF0C\u5C06 LimitContext \u5BF9\u8C61\u5B58\u50A8\u5728 HttpContext \u4E2D\uFF0C\u4F9B\u540E\u7EED\u5904\u7406\u4F7F\u7528\u3002


## 4 \u6D4B\u8BD5\u548C\u9A8C\u8BC1

1. \u6B63\u5E38\u6D41\u91CF
\`\`\`shell
curl -X POST -v http://127.0.0.1:10000/hello \\
    -H 'Authorization: Bearer credential1' \\
    -H 'Content-type: application/json' \\
    -H 'host:foo.com' \\
    -d '{"username":["unamexxxx"],"password":["pswdxxxx"]}'

*   Trying 127.0.0.1:10000...
* Connected to 127.0.0.1 (127.0.0.1) port 10000 (#0)
> POST /hello HTTP/1.1
> Host:foo.com
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer credential1
> Content-type: application/json
> Content-Length: 50
>
< HTTP/1.1 200 OK
< content-type: application/json
< x-content-type-options: nosniff
< date: Tue, 20 Aug 2024 08:55:13 GMT
< content-length: 692
< req-cost-time: 42
< req-arrive-time: 1724144113842
< resp-start-time: 1724144113885
< x-envoy-upstream-service-time: 8
< x-ratelimit-limit: 4
< x-ratelimit-remaining: 3
< server: envoy
<
{
 "path": "/hello",
 "host": "foo.com",
 "method": "POST",
 "proto": "HTTP/1.1",
 "headers": {
  "Accept": [
   "*/*"
  ],
  "Authorization": [
   "Bearer credential1"
  ],
  "Content-Length": [
   "50"
  ],
  "Content-Type": [
   "application/json"
  ],
  "Original-Host": [
   "foo.com"
  ],
  "Req-Start-Time": [
   "1724144113842"
  ],
  "User-Agent": [
   "curl/8.1.2"
  ],
  "X-Envoy-Expected-Rq-Timeout-Ms": [
   "15000"
  ],
  "X-Forwarded-Proto": [
   "https"
  ],
  "X-Request-Id": [
   "b40e9ebb-f36c-4e22-b8fc-2559c9495f43"
  ]
 },
 "namespace": "",
 "ingress": "",
 "service": "",
 "pod": "",
 "body": {
  "password": [
   "pswdxxxx"
  ],
  "username": [
   "unamexxxx"
  ]
 }
\`\`\`
\u53EF\u4EE5\u770B\u5230\u8BF7\u6C42\u88AB\u5141\u8BB8\uFF0C\u5E76\u4E14\u8FD4\u56DE\u4E86\u76F8\u5E94\u7684\u54CD\u5E94\u3002 
\`\`\`shell
< x-ratelimit-limit: 4
< x-ratelimit-remaining: 3
\`\`\`

2. \u89E6\u53D1\u6D41\u63A7

\`\`\`shell
for i in $(seq 1 10); do
  curl -X POST -v http://127.0.0.1:10000/hello \\
    -H 'Authorization: Bearer credential1' \\
    -H 'Content-type: application/json' \\
    -H 'host:foo.com' \\
    -d '{"username":["unamexxxx"],"password":["pswdxxxx"]}'
done

> POST /hello HTTP/1.1
> Host:foo.com
> User-Agent: curl/8.1.2
> Accept: */*
> Authorization: Bearer credential1
> Content-type: application/json
> Content-Length: 50
>
< HTTP/1.1 429 Too Many Requests
< x-ratelimit-limit: 4
< x-ratelimit-remaining: 0
< x-ratelimit-reset: 4
< content-length: 17
< content-type: text/plain
< date: Tue, 20 Aug 2024 08:56:57 GMT
< server: envoy
<
* Connection #0 to host 127.0.0.1 left intact
Too Many Requests%
\`\`\`

## \u53C2\u8003
- [1] [\u9650\u6D41\u7B97\u6CD5\u9009\u62E9](https://help.aliyun.com/document_detail/149952.html)








`,o={title:"Redis \u8C03\u7528",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["Higress"]},r={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/ebook/en/wasm18.md",rawData:void 0};export{r as _internal,i as body,t as collection,o as data,e as id,s as slug};
