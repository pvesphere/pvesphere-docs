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

### Method 1: All-in-One Testing and Verification (Recommended for Quick Start)

If you just want to quickly try PveSphere or run it as a single container, you can use the prebuilt **All-in-One** image (backend + frontend in one container):

```bash
docker run -d \
  --name=pvesphere \
  --restart=always \
  -p 8080:8080 \
  pvesphere/pvesphere-aio:latest
```

Then open:

- **Frontend Interface**: http://localhost:8080

**Default Login**:
- **Username**: `admin`
- **Password**: `Ab123456`

> ⚠️ Remember to change the default password after first login.

### Method 2: Development Environment Deployment

If you need to deploy in a development environment, please refer to the [README.md](https://github.com/pvesphere/pvesphere) file in the backend project root directory.

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

**Default User Information**:

After running the database migration for the first time, the system will automatically create a default administrator account:

**Default Login**:
- **Username**: `admin`
- **Password**: `Ab123456`

> Note: If the default user already exists, the migration process will not create it again. It is recommended to change the password after the first login.

### Method 3: Production Environment Deployment (Recommended: Docker Compose)

For production environments, it is recommended to use Docker Compose for deployment, which provides better management of service dependencies and configurations.

#### Quick Start (Development/Testing Environment)

If you are in a development or testing environment, you can directly use the Docker Compose configuration in the project:

```bash
# 1. Prepare frontend code (frontend build only supports local code)
cd deploy
./build.sh -f /path/to/pvesphere-ui
# Or use the default path
./build.sh

# 2. Start all services
cd docker-compose
docker-compose up -d
```

**Access Addresses**:
- **Frontend**: http://localhost:8080
- **API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/swagger/index.html

**Service Description**:

| Service | Port | Description |
|---------|------|-------------|
| api | 8000 | API service, automatically executes database migration on startup |
| controller | - | Controller service, responsible for PVE resource synchronization |
| frontend | 8080 | Frontend service, built from local code |

#### Production Environment Deployment Steps

**Prerequisites**:

1. **Build Images** (in development environment or CI/CD):
   ```bash
   cd deploy/docker-compose
   docker-compose build
   ```
   Then push the images to a registry, or transfer them to the production server using `docker save` / `docker load`.

2. **Create Directory Structure** (on production server, using `/opt/pvesphere` as an example):
   ```bash
   mkdir -p /opt/pvesphere/{config/{api,controller},storage/logs}
   ```

3. **Copy Configuration Files**:
   ```bash
   # Copy production docker-compose configuration
   cp deploy/docker-compose/docker-compose.prod.yml /opt/pvesphere/docker-compose.yml
   
   # Copy service configuration files (separate for API and Controller)
   cp config/docker.yml /opt/pvesphere/config/api/docker.yml
   cp config/docker.yml /opt/pvesphere/config/controller/docker.yml
   ```

4. **Modify Production Configuration** (according to actual needs):
   - Edit `/opt/pvesphere/config/api/docker.yml`: Configure API service (port, database, log level, etc.)
   - Edit `/opt/pvesphere/config/controller/docker.yml`: Configure Controller service

5. **Start Services**:
   ```bash
   cd /opt/pvesphere
   docker-compose up -d
   ```

6. **View Status and Logs**:
   ```bash
   # View service status
   docker-compose ps
   
   # View logs
   docker-compose logs -f api
   docker-compose logs -f controller
   docker-compose logs -f frontend
   ```

**Directory Structure**:

```
/opt/pvesphere/
├── docker-compose.yml          # Production configuration (copy from deploy/docker-compose/docker-compose.prod.yml)
├── config/                     # Configuration directory
│   ├── api/
│   │   └── docker.yml          # API service configuration
│   └── controller/
│       └── docker.yml          # Controller service configuration
└── storage/                    # Data directory (auto-created)
    ├── pvesphere-test.db       # SQLite database (auto-generated after running)
    └── logs/                   # Log directory
        ├── server.log          # API service logs
        ├── controller.log      # Controller service logs
        ├── access.log          # Nginx access logs
        └── error.log           # Nginx error logs
```

**Data Backup**:

All data (SQLite database, logs) are located in the `storage` directory:

```bash
cd /opt/pvesphere
tar czf pvesphere-backup-$(date +%F).tar.gz storage
```

**Common Commands**:

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# Restart services
docker-compose restart

# View logs
docker-compose logs -f [service_name]
```

For detailed deployment instructions, please refer to the [deploy/README.md](https://github.com/pvesphere/pvesphere/tree/main/deploy/README.md) file in the backend project.

## Next Steps

After installation, please continue reading [Configuration](./configuration.md) to learn how to configure the system.

