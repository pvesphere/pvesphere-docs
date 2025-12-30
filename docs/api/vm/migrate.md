# Virtual Machine Migration

Migrate a virtual machine to another node.

## Request

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/migrate
Authorization: Bearer <token>
Content-Type: application/json
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID |
| node | string | Source node name |
| vmid | int | Virtual machine ID |

### Request Body

```json
{
  "target": "pve-node-02",
  "online": true,
  "withLocalDisks": false
}
```

### Request Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| target | string | Target node name |
| online | bool | Whether to migrate online (default: true) |
| withLocalDisks | bool | Whether to migrate local disks (default: false) |

## Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "taskId": "UPID:pve-node-01:00001234:5678ABCD:90EF1234:migrate:100:root@pam:"
  }
}
```

## Migration Status

You can query migration status via task API:

```http
GET /api/v1/pve/task/:taskId
Authorization: Bearer <token>
```

