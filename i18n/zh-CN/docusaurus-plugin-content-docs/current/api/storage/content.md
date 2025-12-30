# 存储内容

获取存储中的内容列表（ISO、备份、模板等）。

## 请求

```http
GET /api/v1/pve/storage/:clusterId/:node/:storage/content
Authorization: Bearer <token>
```

### 路径参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID |
| node | string | 节点名称 |
| storage | string | 存储名称 |

### 查询参数

| 参数 | 类型 | 说明 |
|------|------|------|
| content | string | 内容类型（iso/backup/template） |

## 响应

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

