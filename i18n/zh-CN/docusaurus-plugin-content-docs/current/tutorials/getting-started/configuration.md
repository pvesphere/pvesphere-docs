# 配置说明

本文档介绍如何配置 PveSphere 系统。

## 后端配置

后端配置文件位于 `config/` 目录，支持以下环境：

- `local.yml` - 本地开发环境
- `docker.yml` - Docker 环境
- `prod.yml` - 生产环境

### 数据库配置

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

### Redis 配置（可选）

```yaml
redis:
  host: localhost
  port: 6379
  password: ""
  db: 0
```

### JWT 配置

```yaml
jwt:
  secret: your-secret-key
  expire: 720h  # token 过期时间
```

### 服务器配置

```yaml
server:
  http:
    port: 8000
    mode: debug  # debug, release
```

## 前端配置

前端配置文件位于 `src/config/index.ts`。

### API 地址配置

```typescript
export default {
  baseURL: import.meta.env.VITE_APP_BASE_API || 'http://localhost:8000',
  // ...
};
```

## 环境变量

### 后端

可以通过环境变量覆盖配置：

```bash
export DB_HOST=localhost
export DB_PORT=3306
export DB_USER=root
export DB_PASSWORD=your_password
```

### 前端

创建 `.env` 文件：

```env
VITE_APP_BASE_API=http://localhost:8000
VITE_APP_TITLE=PveSphere
```

## 下一步

配置完成后，请继续阅读 [第一个集群](./first-cluster.md) 了解如何添加和管理 PVE 集群。

