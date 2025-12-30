# API Documentation

Welcome to the PveSphere API documentation. This document provides complete API interface descriptions.

## Basic Information

### Base URL

```
http://localhost:8000/api/v1
```

### Authentication

PveSphere API uses JWT (JSON Web Token) for authentication.

#### Get Token

```bash
POST /api/v1/user/login
Content-Type: application/json

{
  "email": "pvesphere@gmail.com",
  "password": "Ab123456"
}
```

Response example:

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

#### Using Token

In subsequent requests, you need to include the Token in the request header:

```
Authorization: Bearer <your-token>
```

## API Overview

### Authentication and Authorization

- [Authentication API](./auth/authentication.md)
- [Authorization API](./auth/authorization.md)

### Cluster Management

- [Get Cluster List](./cluster/list.md)
- [Create Cluster](./cluster/create.md)
- [Update Cluster](./cluster/update.md)
- [Delete Cluster](./cluster/delete.md)

### Node Management

- [Get Node List](./node/list.md)
- [Get Node Details](./node/detail.md)
- [Node Console](./node/console.md)

### Virtual Machine Management

- [Get VM List](./vm/list.md)
- [Create VM](./vm/create.md)
- [VM Operations](./vm/operations.md)
- [VM Migration](./vm/migrate.md)

### Storage Management

- [Get Storage List](./storage/list.md)
- [Storage Content](./storage/content.md)

### Template Management

- [Get Template List](./template/list.md)
- [Template Sync](./template/sync.md)

## Response Format

All API responses follow a unified format:

```json
{
  "code": 200,
  "message": "success",
  "data": {}
}
```

### Status Codes

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Swagger Documentation

You can also view the complete API documentation via Swagger UI:

```
http://localhost:8000/swagger/index.html
```

## Next Steps

- View [Authentication API](./auth/authentication.md) to learn how to authenticate
- View [Cluster Management API](./cluster/list.md) to learn how to manage clusters

