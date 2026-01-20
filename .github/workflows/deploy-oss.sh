#!/bin/bash

# 当任何命令失败时，立即退出脚本
set -e

# --- 配置 ---
# 源目录
SOURCE_DIR="./dist"
# OSS Bucket 地址
BUCKET_URI="oss://higress-ai/"
# OSS Endpoint
ENDPOINT="oss-cn-hongkong.aliyuncs.com"
# OSS Region
REGION="cn-hongkong"
# 从环境变量或 Secrets 获取 AK/SK (适用于 CI/CD)
# 在 GitHub Actions 中，通过环境变量传递 secrets
ACCESS_KEY_ID="${ACCESS_KEYID}"
ACCESS_KEY_SECRET="${ACCESS_KEYSECRET}"

# 通用的上传参数
# 使用数组可以更清晰地管理参数
COMMON_ARGS=(
  --recursive
  --force
  --endpoint "$ENDPOINT"
  --access-key-id "$ACCESS_KEY_ID"
  --access-key-secret "$ACCESS_KEY_SECRET"
  --region "$REGION"
)

# --- 步骤 1: 上传 .md 文件 ---
# 为 .md 文件设置特殊的 meta 信息，包含 Cache-Control 和 Content-Type
echo "Uploading .md files with special meta..."
aliyun oss cp "$SOURCE_DIR" "$BUCKET_URI" \
  --meta "Cache-Control:max-age=3600" \
  --meta "Content-Type:text/markdown; charset=utf-8" \
  --include "*.md" \
  "${COMMON_ARGS[@]}"

# --- 步骤 2: 上传所有其他文件 ---
# 使用 --exclude "*.md" 来排除已经上传过的 .md 文件
echo "Uploading other files..."
aliyun oss cp "$SOURCE_DIR" "$BUCKET_URI" \
  --meta "Cache-Control:max-age=3600" \
  --exclude "*.md" \
  "${COMMON_ARGS[@]}"

echo "All files uploaded successfully."
