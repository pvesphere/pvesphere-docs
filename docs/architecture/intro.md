# Architecture Introduction

This document introduces the system architecture and design philosophy of PveSphere.

## System Overview

PveSphere adopts a frontend-backend separation architecture design, with frontend using Vue 3 + TypeScript and backend using Go + Gin.

## Architecture Diagram

```
┌─────────────────┐
│   Web Browser   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  PveSphere UI   │  (Vue 3 + TypeScript)
│   (Frontend)    │
└────────┬────────┘
         │ HTTP/WebSocket
         ▼
┌─────────────────┐
│  PveSphere API  │  (Go + Gin)
│   (Backend)     │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌────────┐  ┌─────────┐
│  MySQL │  │  Redis  │
│   DB   │  │  Cache  │
└────────┘  └─────────┘
    │
    ▼
┌─────────────────┐
│  Proxmox VE API │
│   (PVE Cluster) │
└─────────────────┘
```

## Technology Stack

### Frontend Architecture

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite 7
- **UI Library**: Element Plus 2
- **Language**: TypeScript 5
- **State Management**: Pinia 3
- **Routing**: Vue Router 4
- **Internationalization**: Vue I18n
- **Charts**: ECharts 6
- **Terminal**: xterm.js 5, noVNC

### Backend Architecture

- **Language**: Go 1.23
- **Web Framework**: Gin 1.10
- **ORM**: GORM 1.30
- **Database**: MySQL / PostgreSQL / SQLite
- **Authentication**: JWT (golang-jwt/jwt)
- **Cache**: Redis 9
- **WebSocket**: Gorilla WebSocket
- **Task Scheduling**: gocron
- **Logging**: Zap

## Design Patterns

PveSphere backend adopts a layered architecture design:

```
Handler Layer (API Layer)
    ↓
Service Layer (Business Logic Layer)
    ↓
Repository Layer (Data Access Layer)
    ↓
Model Layer (Data Model Layer)
```

### Controller Pattern

Uses Kubernetes Controller pattern to manage PVE resources, implementing automatic resource synchronization and state management.

### Repository Pattern

Uses Repository pattern to encapsulate data access logic, providing a unified data operation interface.

## Deployment Architecture

### Docker Deployment

Uses Docker Compose to manage multiple services:

- `api-server`: API service
- `controller`: Controller service
- `migration`: Database migration service

### Kubernetes Deployment

Supports Kubernetes deployment, achieving high availability and automatic scaling.

## Next Steps

- View [System Architecture](./system/overview.md) to learn detailed system design
- View [Design Patterns](./design/controller.md) to learn architecture design patterns
- View [Deployment Architecture](./deployment/docker.md) to learn deployment solutions

