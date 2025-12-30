# 获取集群列表

获取所有已配置的 PVE 集群列表。

## 请求

```http
GET /api/v1/pve/cluster
Authorization: Bearer <token>
```

### 查询参数

| 参数 | 类型 | 说明 |
|------|------|------|
| env | string | 环境筛选（test/dev/prod） |
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
        "clusterName": "pve-cluster-01",
        "name": "生产环境集群",
        "env": "prod",
        "datacenter": "上海机房",
        "region": "SH",
        "schedulable": true,
        "status": "enabled",
        "nodeCount": 3,
        "vmCount": 50
      }
    ],
    "total": 1,
    "page": 1,
    "pageSize": 10
  }
}
```

