# 创建集群

创建新的 PVE 集群配置。

## 请求

```http
POST /api/v1/pve/cluster
Authorization: Bearer <token>
Content-Type: application/json
```

### 请求体

```json
{
  "clusterName": "pve-cluster-01",
  "name": "生产环境集群",
  "apiUrl": "https://pve.example.com:8006",
  "username": "api-user",
  "password": "api-password",
  "env": "prod",
  "datacenter": "上海机房",
  "region": "SH"
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
    "name": "生产环境集群",
    "status": "enabled"
  }
}
```

