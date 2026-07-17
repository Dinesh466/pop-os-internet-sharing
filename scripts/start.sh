#!/usr/bin/env bash

set -euo pipefail

echo "================================="
echo "Starting Pop!_OS Internet Sharing"
echo "================================="

docker compose up -d

echo
docker ps

echo
echo "Portainer : http://localhost:9000"
echo "Glances   : http://localhost:61208"
