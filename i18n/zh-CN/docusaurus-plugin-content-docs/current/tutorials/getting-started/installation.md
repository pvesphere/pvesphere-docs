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

### 方式一：Docker Compose（推荐）

使用 Docker Compose 可以快速启动所有服务：

```bash
# 克隆仓库
git clone https://github.com/pvesphere/pvesphere.git
cd pvesphere

# 构建并启动所有服务
make docker-compose-build

# 检查服务状态
make docker-compose-ps
```

服务启动后，您可以访问：

- **API 服务**: http://localhost:8000
- **API 文档**: http://localhost:8000/swagger/index.html

### 方式二：本地开发

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

## 默认用户信息

首次运行数据库迁移后，系统会自动创建默认管理员账户：

- **邮箱**: `pvesphere@gmail.com`
- **密码**: `Ab123456`
- **昵称**: `PveSphere Admin`

> 注意：如果默认用户已存在，迁移过程不会再次创建。建议首次登录后修改密码。

## 验证安装

1. 访问前端应用（通常是 `http://localhost:5173`）
2. 使用默认账户登录
3. 检查 API 服务是否正常运行（`http://localhost:8000/swagger/index.html`）

## 下一步

安装完成后，请继续阅读 [配置说明](./configuration.md) 了解如何配置系统。

