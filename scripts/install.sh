#!/usr/bin/env bash

set -euo pipefail

echo "========================================"
echo " Pop!_OS Internet Sharing Installer"
echo "========================================"

# Check OS
if [[ ! -f /etc/os-release ]]; then
    echo "Cannot detect operating system."
    exit 1
fi

source /etc/os-release

echo "Detected: $PRETTY_NAME"

# Require root privileges via sudo
if [[ "$EUID" -eq 0 ]]; then
    echo "Please run this script as a normal user:"
    echo "./scripts/install.sh"
    exit 1
fi

echo
echo "Updating package lists..."
sudo apt update

echo
echo "Installing required packages..."

sudo apt install -y \
docker.io \
docker-compose-v2 \
curl \
wget \
git \
jq \
htop \
tree

echo
echo "Enabling Docker..."

sudo systemctl enable docker
sudo systemctl start docker

echo
echo "Adding current user to docker group..."

sudo usermod -aG docker "$USER"

echo
echo "Creating project directories..."

mkdir -p \
logs \
configs \
monitoring

echo
echo "Checking Docker..."

docker --version || true
docker compose version || true

echo
echo "========================================"
echo "Installation Complete"
echo "========================================"
echo
echo "IMPORTANT:"
echo "Log out and log back in before using Docker"
echo
echo "Then run:"
echo "./scripts/start.sh"
