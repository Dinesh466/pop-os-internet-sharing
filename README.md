# Pop!_OS Internet Sharing Stack

A production-ready Docker stack for managing multiple bandwidth-sharing services on Pop!_OS.

##achitechture
Below is the **target architecture** for your project—not just where it is today, but the architecture you are building toward. This is the kind of diagram you would include in your GitHub README and project documentation.

# Complete System Architecture

```text
                                          Internet
                                              │
                                              │
                             ┌─────────────────────────────────┐
                             │           End User             │
                             │   Browser / Mobile Dashboard   │
                             └───────────────┬─────────────────┘
                                             │
                                   HTTP / HTTPS REST API
                                             │
                     ┌───────────────────────▼────────────────────────┐
                     │              React Frontend                    │
                     │------------------------------------------------│
                     │ Dashboard                                      │
                     │ Container Management                           │
                     │ Monitoring                                     │
                     │ Analytics                                      │
                     │ Earnings                                       │
                     │ Authentication                                 │
                     │ Settings                                       │
                     └───────────────┬────────────────────────────────┘
                                     │
                                Axios API Calls
                                     │
                     ┌───────────────▼────────────────────────────────┐
                     │               FastAPI Backend                  │
                     │------------------------------------------------│
                     │ app/main.py                                   │
                     │                                                │
                     │ API Routers                                   │
                     │  • status.py                                  │
                     │  • containers.py                              │
                     │  • monitoring.py (future)                     │
                     │  • earnings.py (future)                       │
                     │  • auth.py (future)                           │
                     │                                                │
                     │ Services                                       │
                     │  • docker_service.py                          │
                     │  • monitoring_service.py                      │
                     │  • earnings_service.py                        │
                     │                                                │
                     │ Schemas                                        │
                     │  • container.py                               │
                     │  • auth.py                                    │
                     │                                                │
                     │ Database Layer                                │
                     └───────────────┬────────────────────────────────┘
                                     │
                ┌────────────────────┼──────────────────────────┐
                │                    │                          │
                │                    │                          │
      Docker SDK API          Database Layer             Authentication
                │                    │                          │
                │                    │                          │
                ▼                    ▼                          ▼
      ┌────────────────┐   ┌─────────────────┐      ┌─────────────────┐
      │ Docker Engine  │   │ PostgreSQL      │      │ JWT / OAuth2    │
      └───────┬────────┘   └─────────────────┘      └─────────────────┘
              │
              │ Controls
              ▼
──────────────────────────────────────────────────────────────────────────

                  Docker Containers (Managed by FastAPI)

      ┌────────────────────────────────────────────────────┐
      │ Portainer                                          │
      ├────────────────────────────────────────────────────┤
      │ Grafana                                            │
      ├────────────────────────────────────────────────────┤
      │ Prometheus                                         │
      ├────────────────────────────────────────────────────┤
      │ Node Exporter                                      │
      ├────────────────────────────────────────────────────┤
      │ cAdvisor                                           │
      ├────────────────────────────────────────────────────┤
      │ Glances                                            │
      ├────────────────────────────────────────────────────┤
      │ Honeygain                                          │
      ├────────────────────────────────────────────────────┤
      │ EarnApp                                            │
      ├────────────────────────────────────────────────────┤
      │ TraffMonetizer                                     │
      ├────────────────────────────────────────────────────┤
      │ PacketStream                                       │
      ├────────────────────────────────────────────────────┤
      │ Pawns.app                                          │
      └────────────────────────────────────────────────────┘

```

---

# Monitoring Architecture

```text
                 Docker Containers
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
      cAdvisor      Node Exporter    Glances
          │              │              │
          └──────────────┼──────────────┘
                         │
                    Prometheus
                         │
               Time-Series Database
                         │
                         ▼
                     Grafana
                         │
                  Beautiful Dashboards
                         │
                         ▼
                   React Dashboard
```

---

# Backend Architecture

```text
app/

main.py
│
├── api/
│      status.py
│      containers.py
│      monitoring.py
│      auth.py
│      earnings.py
│
├── services/
│      docker_service.py
│      monitoring_service.py
│      auth_service.py
│      earnings_service.py
│
├── models/
│      user.py
│      container.py
│
├── schemas/
│      user.py
│      container.py
│      auth.py
│
├── database/
│      database.py
│
├── utils/
│      logger.py
│      security.py
│
└── static/
```

---

# Frontend Architecture

```text
frontend/

src/

api/
    api.js

components/
    Navbar.jsx
    Sidebar.jsx
    Footer.jsx
    StatusCard.jsx
    ContainerCard.jsx
    StatsCard.jsx
    ChartCard.jsx

pages/
    Dashboard.jsx
    Containers.jsx
    Monitoring.jsx
    Earnings.jsx
    Settings.jsx
    Login.jsx

hooks/
context/

assets/

App.jsx
main.jsx
```

---

# Data Flow

```text
User
 │
 ▼
React Dashboard
 │
 ▼
Axios
 │
 ▼
FastAPI Router
 │
 ▼
Service Layer
 │
 ▼
Docker SDK
 │
 ▼
Docker Engine
 │
 ▼
Docker Container
 │
 ▼
Response
 │
 ▼
FastAPI
 │
 ▼
React
 │
 ▼
Browser
```

---

# Future Bandwidth-Sharing Architecture

```text
                 User Dashboard
                        │
                        ▼
                Earnings API
                        │
        ┌───────────────┼─────────────────┐
        │               │                 │
        ▼               ▼                 ▼
   Honeygain      EarnApp        TraffMonetizer
        │               │                 │
        └───────────────┼─────────────────┘
                        ▼
                Earnings Collector
                        │
                        ▼
                  PostgreSQL
                        │
                        ▼
                 Analytics Engine
                        │
                        ▼
                 React Dashboard
```

---

# Overall Project Layers

```text
+------------------------------------------------+
|                React Frontend                  |
+------------------------------------------------+
|           FastAPI REST API Layer               |
+------------------------------------------------+
|            Business Service Layer              |
+------------------------------------------------+
| Docker SDK | Database | Authentication | Cache |
+------------------------------------------------+
|          Docker Engine / PostgreSQL            |
+------------------------------------------------+
| Monitoring | Bandwidth Containers | Analytics  |
+------------------------------------------------+
|                 Linux (Pop!_OS)                |
+------------------------------------------------+
```

## Current progress

✅ Repository structure
✅ Docker Compose infrastructure
✅ Monitoring stack (Grafana, Prometheus, cAdvisor, Node Exporter, Glances)
✅ FastAPI backend
✅ Docker SDK integration
✅ Container management API (list/start/stop/restart/logs)
✅ React + Vite initialized

## Next milestones

* 🔄 Connect React dashboard to the FastAPI APIs.
* 📊 Add live container metrics (CPU, memory, network) from Docker/cAdvisor.
* 🔐 Implement JWT authentication and user management.
* 💰 Integrate bandwidth-sharing providers (Honeygain, EarnApp, PacketStream, TraffMonetizer, etc.).
* 📈 Build earnings, analytics, and monitoring dashboards.
* 🚀 Prepare production deployment with HTTPS, reverse proxy, and cloud hosting.

This architecture scales from your current local development setup into a production-ready platform while keeping the backend, frontend, monitoring, and container management cleanly separated.


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
