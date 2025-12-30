# Get Node List

Get a list of nodes in the specified cluster.

## Request

```http
GET /api/v1/pve/node
Authorization: Bearer <token>
```

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID (required) |
| page | int | Page number (default: 1) |
| pageSize | int | Items per page (default: 10) |

## Response

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

