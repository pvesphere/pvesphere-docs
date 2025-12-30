# 授权接口

PveSphere API 支持基于角色的访问控制（RBAC）。

## 权限说明

### 角色类型

- **Admin**: 管理员，拥有所有权限
- **User**: 普通用户，拥有部分权限
- **Viewer**: 只读用户，只能查看资源

### 权限范围

- **集群管理**: 创建、编辑、删除集群
- **节点管理**: 查看、操作节点
- **虚拟机管理**: 创建、操作虚拟机
- **存储管理**: 查看、管理存储
- **模板管理**: 导入、同步模板

## 检查权限

### 请求

```http
GET /api/v1/user/permissions
Authorization: Bearer <token>
```

### 响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "role": "admin",
    "permissions": [
      "cluster:create",
      "cluster:update",
      "cluster:delete",
      "vm:create",
      "vm:operate"
    ]
  }
}
```

