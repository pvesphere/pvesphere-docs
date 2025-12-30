# Get Cluster List

Get a list of all configured PVE clusters.

## Request

```http
GET /api/v1/pve/cluster
Authorization: Bearer <token>
```

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| env | string | Environment filter (test/dev/prod) |
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
        "clusterName": "pve-cluster-01",
        "name": "Production Cluster",
        "env": "prod",
        "datacenter": "Shanghai Datacenter",
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

