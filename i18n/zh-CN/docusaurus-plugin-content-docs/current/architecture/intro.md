# 架构介绍

本文档介绍 PveSphere 的系统架构和设计理念。

## 系统概述

PveSphere 采用前后端分离的架构设计，前端使用 Vue 3 + TypeScript，后端使用 Go + Gin。

## 架构图

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

## 技术栈

### 前端架构

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 7
- **UI 库**: Element Plus 2
- **语言**: TypeScript 5
- **状态管理**: Pinia 3
- **路由**: Vue Router 4
- **国际化**: Vue I18n
- **图表**: ECharts 6
- **终端**: xterm.js 5, noVNC

### 后端架构

- **语言**: Go 1.23
- **Web 框架**: Gin 1.10
- **ORM**: GORM 1.30
- **数据库**: MySQL / PostgreSQL / SQLite
- **认证**: JWT (golang-jwt/jwt)
- **缓存**: Redis 9
- **WebSocket**: Gorilla WebSocket
- **任务调度**: gocron
- **日志**: Zap

## 设计模式

PveSphere 后端采用分层架构设计：

```
Handler Layer (API 层)
    ↓
Service Layer (业务逻辑层)
    ↓
Repository Layer (数据访问层)
    ↓
Model Layer (数据模型层)
```

### Controller 模式

使用 Kubernetes Controller 模式管理 PVE 资源，实现资源的自动同步和状态管理。

### Repository 模式

使用 Repository 模式封装数据访问逻辑，提供统一的数据操作接口。

## 部署架构

### Docker 部署

使用 Docker Compose 管理多个服务：

- `api-server`: API 服务
- `controller`: Controller 服务
- `migration`: 数据库迁移服务

### Kubernetes 部署

支持 Kubernetes 部署，实现高可用和自动扩缩容。

## 下一步

- 查看 [系统架构](./system/overview.md) 了解详细的系统设计
- 查看 [设计模式](./design/controller.md) 了解架构设计模式
- 查看 [部署架构](./deployment/docker.md) 了解部署方案

