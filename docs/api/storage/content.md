# Storage Content

Get a list of content in storage (ISO, backup, templates, etc.).

## Request

```http
GET /api/v1/pve/storage/:clusterId/:node/:storage/content
Authorization: Bearer <token>
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID |
| node | string | Node name |
| storage | string | Storage name |

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| content | string | Content type (iso/backup/template) |

## Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "list": [
      {
        "volid": "local:iso/ubuntu-22.04.iso",
        "size": 2048000000,
        "format": "iso",
        "content": "iso"
      },
      {
        "volid": "local:backup/vzdump-qemu-100-2024_01_01-00_00_00.vma.zst",
        "size": 10240000000,
        "format": "vma",
        "content": "backup"
      }
    ]
  }
}
```

