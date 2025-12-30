# Delete Cluster

Delete the specified cluster configuration.

## Request

```http
DELETE /api/v1/pve/cluster/:id
Authorization: Bearer <token>
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| id | int | Cluster ID |

## Response

```json
{
  "code": 200,
  "message": "success"
}
```

> Note: Deleting a cluster will remove all related configuration and data. Please use with caution.

