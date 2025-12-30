# Get Template List

Get a list of all available virtual machine templates.

## Request

```http
GET /api/v1/pve/template
Authorization: Bearer <token>
```

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID (optional) |
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

