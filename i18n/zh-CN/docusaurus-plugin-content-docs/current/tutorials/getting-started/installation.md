# 安装指南

本指南将帮助您安装和部署 PveSphere。

## 前置要求

### 前端 (`pvesphere-ui`)

- Node.js >= 20.19.0 或 >= 22.13.0
- pnpm >= 9

### 后端 (`pvesphere`)

- Go >= 1.23
- MySQL / PostgreSQL / SQLite
- Redis（可选，用于缓存）

### Docker（可选）

- Docker >= 20.10
- Docker Compose >= 2.0

## 安装方式

### 方式一：All-in-One 测试验证（推荐用于快速体验）

如果您只是想**快速体验**或以**单容器方式运行** PveSphere，可以直接使用预构建的 All-in-One 镜像（后端 + 前端打包在一个容器中）：

```bash
docker run -d \
  --name=pvesphere \
  --restart=always \
  -p 8080:8080 \
  pvesphere/pvesphere-aio:latest
```

然后在浏览器中访问：

- **前端界面**: http://localhost:8080
- **API 服务**: http://localhost:8000
- **API 文档**: http://localhost:8000/swagger/index.html

**默认登录信息**：
- **用户名**: `admin`
- **密码**: `Ab123456`

> ⚠️ 请记住在首次登录后修改默认密码。

**验证安装**：
1. 访问前端应用 `http://localhost:8080`
2. 使用默认账户登录
3. 检查 API 服务是否正常运行（`http://localhost:8000/swagger/index.html`）

### 方式二：开发环境部署

如果您需要在开发环境中部署，请参考后端项目根目录的 [README.md](https://github.com/pvesphere/pvesphere) 文件。

#### 前端设置

```bash
# 进入前端目录
cd pvesphere-ui

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

#### 后端设置

```bash
# 进入后端目录
cd pvesphere

# 安装依赖
go mod download

# 运行数据库迁移（会自动创建默认用户）
go run cmd/migration/main.go

# 启动服务器
go run cmd/server/main.go
```

**默认用户信息**：

首次运行数据库迁移后，系统会自动创建默认管理员账户：

- **邮箱**: `pvesphere@gmail.com`
- **密码**: `Ab123456`
- **昵称**: `PveSphere Admin`

> 注意：如果默认用户已存在，迁移过程不会再次创建。建议首次登录后修改密码。

### 方式三：生产环境部署（推荐使用 Docker Compose）

生产环境推荐使用 Docker Compose 进行部署，可以更好地管理服务依赖和配置。

#### 快速启动（开发/测试环境）

如果您在开发或测试环境中，可以直接使用项目中的 Docker Compose 配置：

```bash
# 1. 准备前端代码（前端构建仅支持本地代码）
cd deploy
./build.sh -f /path/to/pvesphere-ui
# 或使用默认路径
./build.sh

# 2. 启动所有服务
cd docker-compose
docker-compose up -d
```

**访问地址**：
- **前端**: http://localhost:8080
- **API**: http://localhost:8000
- **API 文档**: http://localhost:8000/swagger/index.html

**服务说明**：

| 服务 | 端口 | 说明 |
|------|------|------|
| api | 8000 | API 服务，启动时自动执行数据库迁移 |
| controller | - | 控制器服务，负责 PVE 资源同步 |
| frontend | 8080 | 前端服务，使用本地代码构建 |

#### 生产环境部署步骤

**前置准备**：

1. **构建镜像**（在开发环境或 CI/CD 中）：
   ```bash
   cd deploy/docker-compose
   docker-compose build
   ```
   然后将镜像推送到镜像仓库，或在生产服务器上使用 `docker save` / `docker load` 传输。

2. **创建目录结构**（在生产服务器上，以 `/opt/pvesphere` 为例）：
   ```bash
   mkdir -p /opt/pvesphere/{config/{api,controller},storage/logs}
   ```

3. **复制配置文件**：
   ```bash
   # 复制生产 docker-compose 配置
   cp deploy/docker-compose/docker-compose.prod.yml /opt/pvesphere/docker-compose.yml
   
   # 复制服务配置文件（分别用于 API 和 Controller）
   cp config/docker.yml /opt/pvesphere/config/api/docker.yml
   cp config/docker.yml /opt/pvesphere/config/controller/docker.yml
   ```

4. **修改生产配置**（根据实际需求）：
   - 编辑 `/opt/pvesphere/config/api/docker.yml`：配置 API 服务（端口、数据库、日志级别等）
   - 编辑 `/opt/pvesphere/config/controller/docker.yml`：配置 Controller 服务

5. **启动服务**：
   ```bash
   cd /opt/pvesphere
   docker-compose up -d
   ```

6. **查看状态和日志**：
   ```bash
   # 查看服务状态
   docker-compose ps
   
   # 查看日志
   docker-compose logs -f api
   docker-compose logs -f controller
   docker-compose logs -f frontend
   ```

**目录结构**：

```
/opt/pvesphere/
├── docker-compose.yml          # 生产环境配置（从 deploy/docker-compose/docker-compose.prod.yml 复制）
├── config/                     # 配置文件目录
│   ├── api/
│   │   └── docker.yml          # API 服务配置
│   └── controller/
│       └── docker.yml          # Controller 服务配置
└── storage/                    # 数据目录（自动创建）
    ├── pvesphere-test.db       # SQLite 数据库（运行后自动生成）
    └── logs/                   # 日志目录
        ├── server.log          # API 服务日志
        ├── controller.log      # Controller 服务日志
        ├── access.log          # Nginx 访问日志
        └── error.log           # Nginx 错误日志
```

**数据备份**：

所有数据（SQLite 数据库、日志）都位于 `storage` 目录下：

```bash
cd /opt/pvesphere
tar czf pvesphere-backup-$(date +%F).tar.gz storage
```

**常用命令**：

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down

# 重启服务
docker-compose restart

# 查看日志
docker-compose logs -f [service_name]
```

详细的部署说明请参考后端项目的 [deploy/README.md](https://github.com/pvesphere/pvesphere/tree/main/deploy/README.md) 文件。

## 下一步

安装完成后，请继续阅读 [配置说明](./configuration.md) 了解如何配置系统。

