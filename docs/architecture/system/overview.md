# System Architecture Overview

PveSphere adopts a microservices architecture design with frontend-backend separation.

## Architecture Layers

```
┌─────────────────────────────────────────┐
│           Frontend Layer                 │
│  Vue 3 + TypeScript + Element Plus      │
└─────────────────┬───────────────────────┘
                  │ HTTP/WebSocket
┌─────────────────▼───────────────────────┐
│           Backend Layer                   │
│  Go + Gin + GORM                         │
└─────────────────┬───────────────────────┘
                  │
      ┌───────────┴───────────┐
      │                       │
┌─────▼─────┐         ┌──────▼──────┐
│  Database │         │    Redis    │
│  MySQL/   │         │   (Cache)   │
│ PostgreSQL│         └─────────────┘
│  SQLite   │
└─────┬─────┘
      │
┌─────▼──────────────────────────────────┐
│      Proxmox VE API                     │
│      (PVE Clusters)                     │
└─────────────────────────────────────────┘
```

## Core Components

### Frontend Components

- **Routing Management**: Vue Router 4
- **State Management**: Pinia 3
- **UI Components**: Element Plus 2
- **Chart Visualization**: ECharts 6
- **Terminal Components**: xterm.js 5, noVNC

### Backend Components

- **HTTP Service**: Gin 1.10
- **Data Access**: GORM 1.30
- **Authentication**: JWT
- **Task Scheduling**: gocron
- **Logging System**: Zap

## Data Flow

1. User operates on frontend interface
2. Frontend calls backend API via HTTP/WebSocket
3. Backend processes business logic and accesses database
4. Backend calls Proxmox VE API to execute operations
5. Returns results to frontend for display

