# 获取模板列表

获取所有可用的虚拟机模板。

## 请求

```http
GET /api/v1/pve/template
Authorization: Bearer <token>
```

### 查询参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID（可选） |
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
        "name": "ubuntu-22.04-template",
        "clusterId": 1,
        "storage": "local",
        "size": 2048000000,
        "format": "vma",
        "status": "synced",
        "nodes": ["pve-node-01", "pve-node-02"]
      }
    ],
    "total": 1,
    "page": 1,
    "pageSize": 10
  }
}
```

