# 获取虚拟机列表

获取指定集群中的虚拟机列表。

## 请求

```http
GET /api/v1/pve/vm
Authorization: Bearer <token>
```

### 查询参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID（必填） |
| node | string | 节点名称（可选） |
| status | string | 状态筛选（running/stopped） |
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
        "vmid": 100,
        "name": "vm-ubuntu-01",
        "clusterId": 1,
        "node": "pve-node-01",
        "status": "running",
        "cpu": {
          "usage": 25.5,
          "cores": 2
        },
        "memory": {
          "total": 4,
          "used": 2
        },
        "ip": "192.168.1.100"
      }
    ],
    "total": 1,
    "page": 1,
    "pageSize": 10
  }
}
```

