# Installation Guide

This guide will help you install and deploy PveSphere.

## Prerequisites

### Frontend (`pvesphere-ui`)

- Node.js >= 20.19.0 or >= 22.13.0
- pnpm >= 9

### Backend (`pvesphere`)

- Go >= 1.23
- MySQL / PostgreSQL / SQLite
- Redis (optional, for caching)

### Docker (Optional)

- Docker >= 20.10
- Docker Compose >= 2.0

## Installation Methods

### Method 1: Docker Compose (Recommended)

Use Docker Compose to quickly start all services:

```bash
# Clone the repository
git clone https://github.com/pvesphere/pvesphere.git
cd pvesphere

# Build and start all services
make docker-compose-build

# Check service status
make docker-compose-ps
```

After services start, you can access:

- **API Service**: `http://localhost:8000`
- **API Documentation**: `http://localhost:8000/swagger/index.html`

### Method 2: Local Development

#### Frontend Setup

```bash
# Navigate to frontend directory
cd pvesphere-ui

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

#### Backend Setup

```bash
# Navigate to backend directory
cd pvesphere

# Install dependencies
go mod download

# Run database migration (will automatically create default user)
go run cmd/migration/main.go

# Start server
go run cmd/server/main.go
```

## Default User Information

After running the database migration for the first time, the system will automatically create a default administrator account:

- **Email**: `pvesphere@gmail.com`
- **Password**: `Ab123456`
- **Nickname**: `PveSphere Admin`

> Note: If the default user already exists, the migration process will not create it again. It is recommended to change the password after the first login.

## Verify Installation

1. Access the frontend application (usually `http://localhost:5173`)
2. Log in with the default account
3. Check if the API service is running normally (`http://localhost:8000/swagger/index.html`)

## Next Steps

After installation, please continue reading [Configuration](./configuration.md) to learn how to configure the system.

