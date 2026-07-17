#!/usr/bin/env bash

set -euo pipefail

echo "Stopping containers..."

docker compose down

echo
echo "Done."
