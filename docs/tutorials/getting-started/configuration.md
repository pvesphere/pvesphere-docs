# Configuration

This document describes how to configure the PveSphere system.

## Backend Configuration

Backend configuration files live in the backend project under the `config/` directory:

- `local.yml` – local development
- `docker.yml` – Docker / Docker Compose

The structure **must** match the backend config files; otherwise you can hit errors like  
`panic: unknown db driver` as described in [pvesphere/pvesphere#3](https://github.com/pvesphere/pvesphere/issues/3).

### Docker / Docker Compose (`docker.yml`)

Typical Docker configuration (simplified from `config/docker.yml`):

```yaml
env: docker

http:
  host: 0.0.0.0
  port: 8000

security:
  api_sign:
    app_key: your-api-key
    app_security: your-api-security
  jwt:
    key: your-jwt-secret-key-minimum-32-characters

data:
  db:
    user:
      # sqlite, mysql, or postgres
      driver: sqlite
      dsn: storage/pvesphere-test.db?_busy_timeout=5000&_journal_mode=WAL

log:
  log_level: info
  mode: both
  encoding: console
  log_file_name: "./storage/logs/server.log"
```

Key points:

- Database is configured under `data.db.user.driver` and `data.db.user.dsn`  
  (there is **no** `database` root key and `DB_HOST`‑style env vars are **not** used).
- JWT and API signing live under `security.jwt.key` and `security.api_sign.*`.

### Local Development (`local.yml`)

Local config uses the same structure, with a few defaults changed:

```yaml
env: local

http:
  host: 127.0.0.1
  port: 8000

security:
  api_sign:
    app_key: 123456
    app_security: 123456
  jwt:
    key: local-dev-jwt-key-change-me

data:
  db:
    user:
      driver: sqlite
      dsn: storage/pvesphere-test.db?_busy_timeout=5000

log:
  log_level: debug
  mode: both
  encoding: console
  log_file_name: "./storage/logs/server.log"
```

If you are unsure, you can always start from the sample files in the backend repository:

- `config/docker.yml`
- `config/local.yml`

## Next Steps

After configuration, please continue reading [First Cluster](./first-cluster.md) to learn how to add and manage PVE clusters.

