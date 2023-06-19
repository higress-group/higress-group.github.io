#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

for i in $(seq 1 1000)
do
    curl -v -H "Host:httpbin.example.com" http://127.0.0.1:8080/hostname
    curl -v -H "Host:httpbin.example.com" http://127.0.0.1:8080/
    curl -v -H "Host:httpbin.example.com" http://127.0.0.1:8080/service?services=middle,backend
done