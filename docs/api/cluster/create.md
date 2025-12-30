# Create Cluster

Create a new PVE cluster configuration.

## Request

```http
POST /api/v1/pve/cluster
Authorization: Bearer <token>
Content-Type: application/json
```

### Request Body

```json
{
  "clusterName": "pve-cluster-01",
  "name": "Production Cluster",
  "apiUrl": "https://pve.example.com:8006",
  "username": "api-user",
  "password": "api-password",
  "env": "prod",
  "datacenter": "Shanghai Datacenter",
  "region": "SH"
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
    "name": "Production Cluster",
    "status": "enabled"
  }
}
```

