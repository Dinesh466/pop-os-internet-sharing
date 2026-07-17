#!/usr/bin/env bash

echo "========== Docker =========="
docker --version

echo
echo "========== Compose =========="
docker compose version

echo
echo "========== Containers =========="
docker ps

echo
echo "========== Disk =========="
df -h

echo
echo "========== Memory =========="
free -h

echo
echo "========== CPU =========="
uptime
