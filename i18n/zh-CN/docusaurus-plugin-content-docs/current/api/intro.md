# API 文档

欢迎使用 PveSphere API 文档。本文档提供了完整的 API 接口说明。

## 基础信息

### Base URL

```
http://localhost:8000/api/v1
```

### 认证方式

PveSphere API 使用 JWT (JSON Web Token) 进行身份验证。

#### 获取 Token

```bash
POST /api/v1/user/login
Content-Type: application/json

{
  "email": "pvesphere@gmail.com",
  "password": "Ab123456"
}
```

响应示例：

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "email": "pvesphere@gmail.com",
      "nickname": "PveSphere Admin"
    }
  }
}
```

#### 使用 Token

在后续请求中，需要在请求头中携带 Token：

```
Authorization: Bearer <your-token>
```

## API 概览

### 认证与授权

- [认证接口](./auth/authentication.md)
- [授权接口](./auth/authorization.md)

### 集群管理

- [获取集群列表](./cluster/list.md)
- [创建集群](./cluster/create.md)
- [更新集群](./cluster/update.md)
- [删除集群](./cluster/delete.md)

### 节点管理

- [获取节点列表](./node/list.md)
- [获取节点详情](./node/detail.md)
- [节点控制台](./node/console.md)

### 虚拟机管理

- [获取虚拟机列表](./vm/list.md)
- [创建虚拟机](./vm/create.md)
- [虚拟机操作](./vm/operations.md)
- [虚拟机迁移](./vm/migrate.md)

### 存储管理

- [获取存储列表](./storage/list.md)
- [存储内容](./storage/content.md)

### 模板管理

- [获取模板列表](./template/list.md)
- [模板同步](./template/sync.md)

## 响应格式

所有 API 响应都遵循统一的格式：

```json
{
  "code": 200,
  "message": "success",
  "data": {}
}
```

### 状态码

- `200` - 成功
- `400` - 请求参数错误
- `401` - 未授权
- `403` - 禁止访问
- `404` - 资源不存在
- `500` - 服务器错误

## Swagger 文档

您也可以通过 Swagger UI 查看完整的 API 文档：

```
http://localhost:8000/swagger/index.html
```

## 下一步

- 查看 [认证接口](./auth/authentication.md) 了解如何认证
- 查看 [集群管理 API](./cluster/list.md) 了解如何管理集群

