# 配置说明

本文档介绍如何配置 PveSphere 系统。

## 后端配置

后端配置文件位于后端项目的 `config/` 目录：

- `local.yml`：本地开发环境
- `docker.yml`：Docker / Docker Compose 环境

配置结构**必须**与后端实际配置文件保持一致，否则会出现  
`panic: unknown db driver` 等错误（参考 [pvesphere/pvesphere#3](https://github.com/pvesphere/pvesphere/issues/3)）。

### Docker / Docker Compose（`docker.yml`）

下面是基于后端 `config/docker.yml` 的简化示例：

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
      # 支持 sqlite、mysql、postgres
      driver: sqlite
      dsn: storage/pvesphere-test.db?_busy_timeout=5000&_journal_mode=WAL
log:
  log_level: info
  mode: both
  encoding: console
  log_file_name: "./storage/logs/server.log"
```

关键点：

- 数据库在 `data.db.user.driver` 和 `data.db.user.dsn` 下配置，**没有 `database` 根节点**；  
  后端也**不会读取** `DB_HOST` 这类环境变量。
- JWT 与接口签名配置都在 `security.jwt.key`、`security.api_sign.*` 下。

### 本地开发（`local.yml`）

本地配置与 Docker 结构一致，只是默认值有所不同：

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
  redis:
    addr: 127.0.0.1:6379
    password: ""
    db: 0

log:
  log_level: debug
  mode: both
  encoding: console
  log_file_name: "./storage/logs/server.log"
```

如有不确定，可以直接从后端仓库中复制并按需修改：

- `config/docker.yml`
- `config/local.yml`

## 下一步

配置完成后，请继续阅读 [第一个集群](./first-cluster.md) 了解如何添加和管理 PVE 集群。

