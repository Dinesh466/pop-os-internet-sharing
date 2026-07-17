#!/usr/bin/env bash

set -euo pipefail

echo "Pulling latest images..."

docker compose pull

docker compose up -d

docker image prune -f

echo
echo "Update complete."
