# 删除集群

删除指定的集群配置。

## 请求

```http
DELETE /api/v1/pve/cluster/:id
Authorization: Bearer <token>
```

### 路径参数

| 参数 | 类型 | 说明 |
|------|------|------|
| id | int | 集群 ID |

## 响应

```json
{
  "code": 200,
  "message": "success"
}
```

> 注意：删除集群将移除所有相关配置和数据，请谨慎操作。

