# 获取节点列表

获取指定集群中的节点列表。

## 请求

```http
GET /api/v1/pve/node
Authorization: Bearer <token>
```

### 查询参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID（必填） |
| page | int | 页码（默认：1） |
| pageSize | int | 每页数量（默认：10） |

## 响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "node": "pve-node-01",
        "clusterId": 1,
        "clusterName": "pve-cluster-01",
        "status": "online",
        "cpu": {
          "usage": 45.5,
          "cores": 16
        },
        "memory": {
          "total": 128,
          "used": 64,
          "free": 64
        },
        "storage": {
          "total": 2000,
          "used": 1000,
          "free": 1000
        }
      }
    ],
    "total": 1,
    "page": 1,
    "pageSize": 10
  }
}
```

