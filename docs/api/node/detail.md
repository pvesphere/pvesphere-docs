# Get Node Details

Get detailed information about a specified node.

## Request

```http
GET /api/v1/pve/node/:clusterId/:node
Authorization: Bearer <token>
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID |
| node | string | Node name |

## Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "node": "pve-node-01",
    "clusterId": 1,
    "status": "online",
    "cpu": {
      "usage": 45.5,
      "cores": 16,
      "model": "Intel Xeon"
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
    },
    "network": {
      "interfaces": [
        {
          "name": "eth0",
          "ip": "192.168.1.10",
          "status": "up"
        }
      ]
    }
  }
}
```

