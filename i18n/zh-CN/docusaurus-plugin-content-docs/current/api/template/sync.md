# 模板同步

将模板同步到指定节点。

## 请求

```http
POST /api/v1/pve/template/:id/sync
Authorization: Bearer <token>
Content-Type: application/json
```

### 路径参数

| 参数 | 类型 | 说明 |
|------|------|------|
| id | int | 模板 ID |

### 请求体

```json
{
  "targetNodes": ["pve-node-02", "pve-node-03"],
  "mode": "full"
}
```

### 请求参数说明

| 参数 | 类型 | 说明 |
|------|------|------|
| targetNodes | array | 目标节点列表 |
| mode | string | 同步模式（full/incremental） |

## 响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "taskId": "template-sync-12345"
  }
}
```

## 同步状态

可以通过任务 API 查询同步状态：

```http
GET /api/v1/pve/task/:taskId
Authorization: Bearer <token>
```

