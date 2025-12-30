# Authorization API

PveSphere API supports role-based access control (RBAC).

## Permission Description

### Role Types

- **Admin**: Administrator with all permissions
- **User**: Regular user with partial permissions
- **Viewer**: Read-only user who can only view resources

### Permission Scope

- **Cluster Management**: Create, edit, delete clusters
- **Node Management**: View and operate nodes
- **VM Management**: Create and operate virtual machines
- **Storage Management**: View and manage storage
- **Template Management**: Import and sync templates

## Check Permissions

### Request

```http
GET /api/v1/user/permissions
Authorization: Bearer <token>
```

### Response

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

