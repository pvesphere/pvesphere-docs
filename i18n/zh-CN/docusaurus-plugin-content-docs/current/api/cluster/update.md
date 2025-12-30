# 更新集群

更新现有集群的配置。

## 请求

```http
PUT /api/v1/pve/cluster/:id
Authorization: Bearer <token>
Content-Type: application/json
```

### 路径参数

| 参数 | 类型 | 说明 |
|------|------|------|
| id | int | 集群 ID |

### 请求体

```json
{
  "name": "生产环境集群（更新）",
  "apiUrl": "https://pve-new.example.com:8006",
  "env": "prod"
}
```

## 响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "clusterName": "pve-cluster-01",
    "name": "生产环境集群（更新）",
    "status": "enabled"
  }
}
```

