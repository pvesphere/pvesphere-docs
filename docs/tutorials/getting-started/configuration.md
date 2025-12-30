# Configuration

This document describes how to configure the PveSphere system.

## Backend Configuration

Backend configuration files are located in the `config/` directory, supporting the following environments:

- `local.yml` - Local development environment
- `docker.yml` - Docker environment
- `prod.yml` - Production environment

### Database Configuration

```yaml
database:
  driver: mysql  # mysql, postgres, sqlite
  host: localhost
  port: 3306
  database: pvesphere
  username: root
  password: your_password
  charset: utf8mb4
```

### Redis Configuration (Optional)

```yaml
redis:
  host: localhost
  port: 6379
  password: ""
  db: 0
```

### JWT Configuration

```yaml
jwt:
  secret: your-secret-key
  expire: 720h  # token expiration time
```

### Server Configuration

```yaml
server:
  http:
    port: 8000
    mode: debug  # debug, release
```

## Frontend Configuration

Frontend configuration file is located at `src/config/index.ts`.

### API Address Configuration

```typescript
export default {
  baseURL: import.meta.env.VITE_APP_BASE_API || 'http://localhost:8000',
  // ...
};
```

## Environment Variables

### Backend

You can override configuration with environment variables:

```bash
export DB_HOST=localhost
export DB_PORT=3306
export DB_USER=root
export DB_PASSWORD=your_password
```

### Frontend

Create a `.env` file:

```env
VITE_APP_BASE_API=http://localhost:8000
VITE_APP_TITLE=PveSphere
```

## Next Steps

After configuration, please continue reading [First Cluster](./first-cluster.md) to learn how to add and manage PVE clusters.

