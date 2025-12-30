# Update Cluster

Update configuration of an existing cluster.

## Request

```http
PUT /api/v1/pve/cluster/:id
Authorization: Bearer <token>
Content-Type: application/json
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id | int | Cluster ID |

### Request Body

```json
{
  "name": "Production Cluster (Updated)",
  "apiUrl": "https://pve-new.example.com:8006",
  "env": "prod"
}
```

## Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "clusterName": "pve-cluster-01",
    "name": "Production Cluster (Updated)",
    "status": "enabled"
  }
}
```

