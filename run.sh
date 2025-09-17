#!/bin/bash

# File: run-ts.sh
# Cách dùng: ./run-ts.sh file.ts

# Kiểm tra xem có tham số nào được truyền vào không
if [ $# -eq 0 ]; then
    echo "❌ Vui lòng chỉ định file TypeScript: ./run-ts.sh file.ts"
    exit 1
fi

# Lấy tên file (bỏ phần đuôi .ts)
filename=$(basename "$1" .ts)

# Kiểm tra file có tồn tại không
if [ ! -f "$1" ]; then
    echo "❌ File $1 không tồn tại!"
    exit 1
fi

# Biên dịch TypeScript sang JavaScript
echo "🔄 Đang biên dịch $1..."
npx tsc "$1"

# Kiểm tra biên dịch có thành công không
if [ $? -eq 0 ]; then
    echo "✅ Biên dịch thành công! Đang chạy $filename.js..."
    node "$filename.js"
else
    echo "❌ Lỗi biên dịch!"
    exit 1
fi