# Docker 部署

使用 Docker Compose 可以快速部署 PveSphere。

## Docker Compose 配置

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

## 构建镜像

```bash
# 构建 API 服务镜像
docker build -f deploy/build/Dockerfile \
  --build-arg APP_RELATIVE_PATH=./cmd/server \
  --build-arg APP_NAME=server \
  -t pvesphere-api:latest .

# 构建 Controller 服务镜像
docker build -f deploy/build/Dockerfile \
  --build-arg APP_RELATIVE_PATH=./cmd/controller \
  --build-arg APP_NAME=controller \
  -t pvesphere-controller:latest .
```

## 启动服务

```bash
# 启动所有服务
docker-compose up -d

# 查看服务状态
docker-compose ps

# 查看日志
docker-compose logs -f
```

## 数据持久化

使用 Docker Volume 持久化数据：

- 数据库文件
- 日志文件
- 配置文件

