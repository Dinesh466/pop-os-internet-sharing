# Pop!_OS Internet Sharing Stack

A production-ready Docker stack for managing multiple bandwidth-sharing services on Pop!_OS.

## Features

- Docker-based deployment
- One-command installation
- Automatic updates
- Automatic restart after reboot
- Health monitoring
- Logging
- Easy configuration

## Planned Services

- Honeygain
- TraffMonetizer
- EarnApp
- PacketStream
- Pawns.app

## Requirements

- Pop!_OS 24.04 LTS
- Docker
- Docker Compose

## Installation

```bash
git clone git@github.com:Dinesh466/pop-os-internet-sharing.git
cd pop-os-internet-sharing
chmod +x scripts/install.sh
./scripts/install.sh
```

## License

MIT
