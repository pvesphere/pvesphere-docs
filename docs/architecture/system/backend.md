# Backend Architecture

PveSphere backend is built with Go + Gin, based on layered architecture design.

## Technology Stack

- **Language**: Go 1.23
- **Web Framework**: Gin 1.10
- **ORM**: GORM 1.30
- **Database**: MySQL / PostgreSQL / SQLite
- **Authentication**: JWT (golang-jwt/jwt)
- **Cache**: Redis 9
- **Logging**: Zap

## Project Structure

```
pvesphere/
├── api/v1/              # API route handlers
├── cmd/                 # Application entry points
│   ├── server/          # HTTP server
│   ├── controller/      # Kubernetes controller
│   ├── migration/       # Database migration
│   └── task/            # Background tasks
├── internal/
│   ├── handler/         # Request handlers
│   ├── service/         # Business logic
│   ├── repository/      # Data access layer
│   ├── model/           # Data models
│   ├── middleware/      # HTTP middleware
│   └── router/          # Route definitions
└── pkg/                 # Shared packages
    ├── proxmox/         # Proxmox API client
    ├── jwt/             # JWT utilities
    └── log/             # Logging utilities
```

## Layered Architecture

### Handler Layer

Handles HTTP requests and responses:

- Parameter validation
- Call Service layer
- Return responses

### Service Layer

Business logic processing:

- Business rules
- Data transformation
- Call Repository layer

### Repository Layer

Data access:

- Database operations
- Data queries
- Data persistence

### Model Layer

Data model definitions:

- Database table structure
- Data validation rules

## Middleware

- **CORS**: Cross-origin support
- **JWT**: Authentication
- **Log**: Request logging
- **Sign**: Signature verification

