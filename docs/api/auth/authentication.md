# Authentication API

PveSphere API uses JWT (JSON Web Token) for authentication.

## User Login

### Request

```http
POST /api/v1/user/login
Content-Type: application/json
```

### Request Body

```json
{
  "email": "pvesphere@gmail.com",
  "password": "Ab123456"
}
```

### Response

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

## Refresh Token

### Request

```http
POST /api/v1/user/refresh
Authorization: Bearer <token>
```

### Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## User Logout

### Request

```http
POST /api/v1/user/logout
Authorization: Bearer <token>
```

### Response

```json
{
  "code": 200,
  "message": "success"
}
```

## Using Token

In subsequent requests, you need to include the Token in the request header:

```http
Authorization: Bearer <your-token>
```

