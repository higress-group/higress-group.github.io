const e="latest/en/ops/how-tos/grpc-upstream.md",t="docs",r="latest/en/ops/how-tos/grpc-upstream",a=`
# Route to gRPC Service

## Prerequisites

1. Higress is installed in the higress-system namespace in K8s, with HTTP port listening on 80. For testing convenience, the gateway port is mapped to local 127.0.0.1:80;
2. The goal is to deploy the grpc-httpbin service in the default namespace, with the service listening on port 9091;
3. For details about the grpc-httpbin service, please refer to [github httpbin](https://github.com/2456868764/httpbin);
4. For the grpcurl tool, please refer to [github grpcurl](https://github.com/fullstorydev/grpcurl);

## Prepare the Backend grpc-httpbin Service

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: grpc-httpbin-v1
  namespace: default
spec:
  selector:
    app: grpc-httpbin-v1
  ports:
    - protocol: TCP
      port: 9091
      targetPort: 9091
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: grpc-httpbin-v1
  namespace: default
  labels:
    app: grpc-httpbin-v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: grpc-httpbin-v1
  template:
    metadata:
      labels:
        app: grpc-httpbin-v1
    spec:
      containers:
      - name: grpc-httpbin-v1
        image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.1
        env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
        resources:
          requests:
            cpu: 10m
\`\`\`

## Configure the Route

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/backend-protocol: "GRPC"
  name: ingress-grpc-httpbin
  namespace: default
spec:
  ingressClassName: higress
  rules:
    - host: foo.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: grpc-httpbin-v1
                port:
                  number: 9091
\`\`\`

The \`nginx.ingress.kubernetes.io/backend-protocol\` Ingress Annotation specifies the protocol used by the backend service. The default is HTTP, and it supports HTTP, HTTP2, HTTPS, GRPC, and GRPCS.

## Testing with grpcurl

1. List the backend services

\`\`\`shell
grpcurl -plaintext -authority foo.com  127.0.0.1:80  list

grpc.reflection.v1.ServerReflection
grpc.reflection.v1alpha.ServerReflection
order.OrderManagement
\`\`\`

2. Call the sayHello method

\`\`\`shell
grpcurl -plaintext -authority foo.com -d '{"name": "jun"}' 127.0.0.1:80  order.OrderManagement/sayHello

"Hello jun"
\`\`\``,o={title:"Configure a Route to gRPC Service",description:"Introduce how to configure a route for backend services using the gRPC protocol",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","route","upstream","grpc"]},s={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/grpc-upstream.md",rawData:void 0};export{s as _internal,a as body,t as collection,o as data,e as id,r as slug};
