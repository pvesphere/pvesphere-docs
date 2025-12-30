# Get Storage List

Get a list of storage in the specified cluster.

## Request

```http
GET /api/v1/pve/storage
Authorization: Bearer <token>
```

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID (required) |
| node | string | Node name (optional) |

## Response

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

