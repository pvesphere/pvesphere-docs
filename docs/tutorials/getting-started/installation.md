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

For production environments, PveSphere provides an official Docker Compose file that runs **api**, **controller** and **frontend** together.

#### Step 1: Install Docker and Docker Compose

Make sure Docker (>= 20.10) and Docker Compose (>= 2.0) are installed on the target server.

#### Step 2: Download the Latest `docker-compose.yml`

Create a deployment directory (for example `/opt/pvesphere`) and download the latest production Compose file.  
You typically need `sudo` to create `/opt/pvesphere`, and then change ownership to your current user:

```bash
sudo mkdir -p /opt/pvesphere
sudo chown -R "$USER":"$USER" /opt/pvesphere
cd /opt/pvesphere

# Download the latest production docker-compose file
curl -o docker-compose.yml \
  https://raw.githubusercontent.com/pvesphere/pvesphere/main/deploy/docker-compose/docker-compose.prod.yml
```

This file defines the `api`, `controller`, and `frontend` services and uses the images:

- `pvesphere/pvesphere-api:latest`
- `pvesphere/pvesphere-controller:latest`
- `pvesphere/pvesphere-frontend:latest`

If these images are published to a registry, Docker will pull them automatically; otherwise, you need to build and push them in advance.

#### Step 3: Prepare Configuration and Data Directories

Create the configuration and storage directories required by the Compose file, then download and edit the backend config files (see [Configuration](./configuration.md) for details):

```bash
# Create directories
mkdir -p ./config/api ./config/controller ./storage/logs

# Download backend config as a starting point
curl -o ./docker.yml \
  https://raw.githubusercontent.com/pvesphere/pvesphere/main/config/prod.yml

# Copy and then edit separately for api / controller
cp ./docker.yml ./config/api/docker.yml
cp ./docker.yml ./config/controller/docker.yml
```

Then edit `./config/api/docker.yml` and `./config/controller/docker.yml`:

- In **`./config/api/docker.yml`**, set `log.log_file_name` to `./storage/logs/api.log`
- In **`./config/controller/docker.yml`**, set `log.log_file_name` to `./storage/logs/controller.log`

Adjust database, Redis and other settings as needed.

#### Step 4: Start Services

From `/opt/pvesphere`, start the stack:

```bash
cd /opt/pvesphere
docker-compose up -d
docker-compose ps
```

After startup:

- **Frontend**: `http://localhost:8080`
- **API**: `http://localhost:8000`
- **API Documentation**: `http://localhost:8000/swagger/index.html`

For backup, you can archive the `storage` directory:

```bash
cd /opt/pvesphere
tar czf pvesphere-backup-$(date +%F).tar.gz storage
```

## Next Steps

After installation, please continue reading [Configuration](./configuration.md) to learn how to configure the system.

