# 后端架构

PveSphere 后端采用 Go + Gin 构建，基于分层架构设计。

## 技术栈

- **语言**: Go 1.23
- **Web 框架**: Gin 1.10
- **ORM**: GORM 1.30
- **数据库**: MySQL / PostgreSQL / SQLite
- **认证**: JWT (golang-jwt/jwt)
- **缓存**: Redis 9
- **日志**: Zap

## 项目结构

```
pvesphere/
├── api/v1/              # API 路由处理器
├── cmd/                 # 应用入口点
│   ├── server/          # HTTP 服务器
│   ├── controller/      # Kubernetes controller
│   ├── migration/       # 数据库迁移
│   └── task/            # 后台任务
├── internal/
│   ├── handler/         # 请求处理器
│   ├── service/         # 业务逻辑
│   ├── repository/      # 数据访问层
│   ├── model/           # 数据模型
│   ├── middleware/      # HTTP 中间件
│   └── router/          # 路由定义
└── pkg/                 # 共享包
    ├── proxmox/         # Proxmox API 客户端
    ├── jwt/             # JWT 工具
    └── log/             # 日志工具
```

## 分层架构

### Handler 层

处理 HTTP 请求和响应：

- 参数验证
- 调用 Service 层
- 返回响应

### Service 层

业务逻辑处理：

- 业务规则
- 数据转换
- 调用 Repository 层

### Repository 层

数据访问：

- 数据库操作
- 数据查询
- 数据持久化

### Model 层

数据模型定义：

- 数据库表结构
- 数据验证规则

## 中间件

- **CORS**: 跨域支持
- **JWT**: 身份验证
- **Log**: 请求日志
- **Sign**: 签名验证

