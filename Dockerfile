FROM registry.cn-hangzhou.aliyuncs.com/mse-ingress/higress-docsite-base:v1

WORKDIR /higress

COPY . .

RUN docsite build

ENTRYPOINT ["python", "-m", "SimpleHTTPServer", "8080"]