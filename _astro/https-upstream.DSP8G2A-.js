const e="latest/en/ops/how-tos/https-upstream.md",t="docs",s="latest/en/ops/how-tos/https-upstream",a=`
# Configure a Route to HTTPS Service


## Prerequisites

1. Higress is installed in the higress-system namespace in K8s, with HTTP port listening on 80. For testing convenience, the gateway port is mapped to local 127.0.0.1:80;
2. The goal is to deploy the https-httpbin service in the default namespace, with the service listening on port 443;
3. For details about the https-httpbin service, please refer to [github httpbin](https://github.com/2456868764/httpbin);

## Prepare Certificates

1. Generate CA (root certificate):
\`\`\`shell
# Generate CA private key
openssl genrsa -out ca.key 2048
# Generate CA root certificate
openssl req -x509 -new -nodes -key ca.key -subj "/CN=MyCA" -days 3650 -out ca.crt
\`\`\`

2. Generate server certificate

\`\`\`shell
# Generate server private key
openssl genrsa -out server.key 2048

# Generate server certificate signing request (CSR)
openssl req -new -key server.key -subj "/CN=https-httpbin-v1.default.svc.cluster.local" -out server.csr

# Sign server certificate using CA
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 3650 -sha256
\`\`\`

3. Generate Gateway certificate

\`\`\`shell
# Generate Gateway private key
openssl genrsa -out gateway.key 2048

# Generate Gateway certificate signing request (CSR)
openssl req -new -key gateway.key -subj "/CN=gateway.higress-system.svc.cluster.local" -out gateway.csr

# Sign Gateway certificate using CA
openssl x509 -req -in gateway.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out gateway.crt -days 3650 -sha256
\`\`\`

4. Import CA certificate, Gateway, and server certificates into secrets

\`\`\`shell
kubectl create secret generic gateway-cert-cacert --from-file=cacert=ca.crt --namespace=default
kubectl create secret tls gateway-cert --key gateway.key --cert gateway.crt --namespace=default
kubectl create secret tls server-cert --key server.key --cert server.crt --namespace=default
\`\`\`

## Prepare the Backend https-httpbin Service

\`\`\`yaml
apiVersion: v1
kind: Service
metadata:
  name: https-httpbin-v1
  namespace: default
spec:
  selector:
    app: https-httpbin-v1
  ports:
    - protocol: TCP
      port: 443
      targetPort: 443
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: https-httpbin-v1
  namespace: default
  labels:
    app: https-httpbin-v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: https-httpbin-v1
  template:
    metadata:
      labels:
        app: https-httpbin-v1
    spec:
      containers:
        - name: https-httpbin-v1
          image: registry.cn-hangzhou.aliyuncs.com/2456868764/httpbin:v1.0.2
          imagePullPolicy: Always
          ports:
            - containerPort: 443
          command:
            - /app/httpbin
            - --https-enable=true
            - --https-port=443
            - --mtls=true
            - --cert=/etc/cert/tls.crt
            - --key=/etc/cert/tls.key
            - --cacert=/etc/cacert/cacert
          env:
            - name: POD_NAME
              valueFrom:
                fieldRef:
                  fieldPath: metadata.name
            - name: NAMESPACE
              valueFrom:
                fieldRef:
                  fieldPath: metadata.namespace
          volumeMounts:
            - mountPath: "/etc/cert"
              name: server-cert
              readOnly: true
            - mountPath: "/etc/cacert"
              name: ca-cert
              readOnly: true
          resources:
            requests:
              cpu: 10m
      volumes:
        - name: server-cert
          secret:
            secretName: server-cert
        - name: ca-cert
          secret:
            secretName: gateway-cert-cacert
\`\`\`

## Configure the Route

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    # backend protocol
    nginx.ingress.kubernetes.io/backend-protocol: "HTTPS"
    # gateway to backend mtls
    nginx.ingress.kubernetes.io/proxy-ssl-secret: "default/gateway-cert"
    # SNI for backend check
    nginx.ingress.kubernetes.io/proxy-ssl-name: "https-httpbin-v1.default.svc.cluster.local"
    nginx.ingress.kubernetes.io/proxy-ssl-server-name: "on"
  name: ingress-https-httpbin
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
                name: https-httpbin-v1
                port:
                  number: 443
\`\`\`

Ingress Annotation configuration:
- \`nginx.ingress.kubernetes.io/backend-protocol\` specifies the protocol used by the backend service. The default is HTTP, and it supports HTTP, HTTP2, HTTPS, GRPC, and GRPCS.
- \`nginx.ingress.kubernetes.io/proxy-ssl-secret\` enables mtls by specifying the gateway certificate, in the format \`namespace/secret-name\`. Note that you also need to create a CA certificate secret with the name of the proxy-ssl-secret plus the \`-cacert\` suffix, such as \`gateway-cert-cacert\`, otherwise it will report an error.
- \`nginx.ingress.kubernetes.io/proxy-ssl-name\` specifies the domain name used by the backend service for SNI verification.
- \`nginx.ingress.kubernetes.io/proxy-ssl-server-name\` enables SNI.


# Testing

\`\`\`shell
curl -H "host: foo.com" http://127.0.0.1/ping

"pong"`,r={title:"Configure a Route to HTTPS Service",description:"Introduce how to configure a route for backend services using the HTTPS protocol",editUrl:!0,head:[],template:"doc",sidebar:{hidden:!1,attrs:{}},pagefind:!0,keywords:["ops","config","route","upstream","https"]},n={type:"content",filePath:"/home/runner/work/higress-group.github.io/higress-group.github.io/src/content/docs/latest/en/ops/how-tos/https-upstream.md",rawData:void 0};export{n as _internal,a as body,t as collection,r as data,e as id,s as slug};
