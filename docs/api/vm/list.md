# Get Virtual Machine List

Get a list of virtual machines in the specified cluster.

## Request

```http
GET /api/v1/pve/vm
Authorization: Bearer <token>
```

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID (required) |
| node | string | Node name (optional) |
| status | string | Status filter (running/stopped) |
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

