# 获取存储列表

获取指定集群中的存储列表。

## 请求

```http
GET /api/v1/pve/storage
Authorization: Bearer <token>
```

### 查询参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID（必填） |
| node | string | 节点名称（可选） |

## 响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "id": 1,
        "storage": "local",
        "type": "dir",
        "clusterId": 1,
        "node": "pve-node-01",
        "content": ["images", "iso", "backup"],
        "capacity": {
          "total": 2000,
          "used": 1000,
          "free": 1000,
          "usage": 50.0
        }
      }
    ]
  }
}
```

