# Template Synchronization

Synchronize template to specified nodes.

## Request

```http
POST /api/v1/pve/template/:id/sync
Authorization: Bearer <token>
Content-Type: application/json
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id | int | Template ID |

### Request Body

```json
{
  "targetNodes": ["pve-node-02", "pve-node-03"],
  "mode": "full"
}
```

### Request Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| targetNodes | array | Target node list |
| mode | string | Sync mode (full/incremental) |

## Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "taskId": "template-sync-12345"
  }
}
```

## Sync Status

You can query sync status via task API:

```http
GET /api/v1/pve/task/:taskId
Authorization: Bearer <token>
```

