# 认证接口

PveSphere API 使用 JWT (JSON Web Token) 进行身份验证。

## 用户登录

### 请求

```http
POST /api/v1/user/login
Content-Type: application/json
```

### 请求体

```json
{
  "email": "pvesphere@gmail.com",
  "password": "Ab123456"
}
```

### 响应

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

## 刷新 Token

### 请求

```http
POST /api/v1/user/refresh
Authorization: Bearer <token>
```

### 响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## 用户登出

### 请求

```http
POST /api/v1/user/logout
Authorization: Bearer <token>
```

### 响应

```json
{
  "code": 200,
  "message": "success"
}
```

## 使用 Token

在后续请求中，需要在请求头中携带 Token：

```http
Authorization: Bearer <your-token>
```

