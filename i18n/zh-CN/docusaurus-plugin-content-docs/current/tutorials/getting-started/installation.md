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

生产环境推荐使用官方提供的 Docker Compose 文件，一次性启动 **api**、**controller** 和 **frontend** 三个服务。

#### 步骤 1：准备 Docker 和 Docker Compose

在目标服务器上安装 Docker（>= 20.10）和 Docker Compose（>= 2.0）。

#### 步骤 2：下载最新的 `docker-compose.yml`

在服务器上创建部署目录（例如 `/opt/pvesphere`），然后下载最新的生产环境 Compose 文件。  
通常需要使用 `sudo` 创建 `/opt/pvesphere`，并将目录所有者切换为当前登录用户：

```bash
sudo mkdir -p /opt/pvesphere
sudo chown -R "$USER":"$USER" /opt/pvesphere
cd /opt/pvesphere

# 下载最新的生产 docker-compose 文件
curl -o docker-compose.yml \
  https://raw.githubusercontent.com/pvesphere/pvesphere/main/deploy/docker-compose/docker-compose.prod.yml
```

该文件定义了 `api`、`controller`、`frontend` 三个服务，使用的镜像为：

- `pvesphere/pvesphere-api:latest`
- `pvesphere/pvesphere-controller:latest`
- `pvesphere/pvesphere-frontend:latest`

如果这些镜像已发布到镜像仓库，Docker 会自动拉取；否则需要提前在 CI/开发环境中构建并推送。

#### 步骤 3：准备配置文件和本地目录

根据 Compose 文件中的挂载路径，创建配置和数据目录，并下载后端配置文件（具体字段说明见 [配置说明](./configuration.md)）：

```bash
# 创建目录
mkdir -p ./config/api ./config/controller ./storage/logs

# 下载后端配置作为模板
curl -o ./docker.yml \
  https://raw.githubusercontent.com/pvesphere/pvesphere/main/config/prod.yml

# 复制一份分别给 api 和 controller 使用
cp ./docker.yml ./config/api/docker.yml
cp ./docker.yml ./config/controller/docker.yml
```

然后分别编辑 `./config/api/docker.yml` 和 `./config/controller/docker.yml`：

- 在 **`./config/api/docker.yml`** 中，将 `log.log_file_name` 设置为 `./storage/logs/api.log`
- 在 **`./config/controller/docker.yml`** 中，将 `log.log_file_name` 设置为 `./storage/logs/controller.log`

并根据实际环境修改数据库、Redis 等配置。

#### 步骤 4：启动服务

在 `/opt/pvesphere` 目录下执行：

```bash
cd /opt/pvesphere
docker-compose up -d
docker-compose ps
```

服务启动后，可以通过以下地址访问：

- **前端**：`http://localhost:8080`
- **API**：`http://localhost:8000`
- **API 文档**：`http://localhost:8000/swagger/index.html`

如需备份，只需打包 `storage` 目录即可：

```bash
cd /opt/pvesphere
tar czf pvesphere-backup-$(date +%F).tar.gz storage
```

## 下一步

安装完成后，请继续阅读 [配置说明](./configuration.md) 了解如何配置系统。

