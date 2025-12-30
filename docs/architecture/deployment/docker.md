# Docker Deployment

Use Docker Compose to quickly deploy PveSphere.

## Docker Compose Configuration

```yaml
version: '3.8'

services:
  api-server:
    image: pvesphere-api:latest
    ports:
      - "8000:8000"
    volumes:
      - ./config:/data/app/config
      - pvesphere-storage:/data/app/storage
    environment:
      - APP_ENV=docker

  controller:
    image: pvesphere-controller:latest
    volumes:
      - ./config:/data/app/config
    environment:
      - APP_ENV=docker

  migration:
    image: pvesphere-api:latest
    command: ./migration -conf /data/app/config/docker.yml
    volumes:
      - ./config:/data/app/config
```

## Build Images

```bash
# Build API service image
docker build -f deploy/build/Dockerfile \
  --build-arg APP_RELATIVE_PATH=./cmd/server \
  --build-arg APP_NAME=server \
  -t pvesphere-api:latest .

# Build Controller service image
docker build -f deploy/build/Dockerfile \
  --build-arg APP_RELATIVE_PATH=./cmd/controller \
  --build-arg APP_NAME=controller \
  -t pvesphere-controller:latest .
```

## Start Services

```bash
# Start all services
docker-compose up -d

# Check service status
docker-compose ps

# View logs
docker-compose logs -f
```

## Data Persistence

Use Docker Volume to persist data:

- Database files
- Log files
- Configuration files

