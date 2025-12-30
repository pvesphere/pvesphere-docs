# 虚拟机迁移

将虚拟机迁移到其他节点。

## 请求

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/migrate
Authorization: Bearer <token>
Content-Type: application/json
```

### 路径参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID |
| node | string | 源节点名称 |
| vmid | int | 虚拟机 ID |

### 请求体

```json
{
  "target": "pve-node-02",
  "online": true,
  "withLocalDisks": false
}
```

### 请求参数说明

| 参数 | 类型 | 说明 |
|------|------|------|
| target | string | 目标节点名称 |
| online | bool | 是否在线迁移（默认：true） |
| withLocalDisks | bool | 是否迁移本地磁盘（默认：false） |

## 响应

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "taskId": "UPID:pve-node-01:00001234:5678ABCD:90EF1234:migrate:100:root@pam:"
  }
}
```

## 迁移状态

可以通过任务 API 查询迁移状态：

```http
GET /api/v1/pve/task/:taskId
Authorization: Bearer <token>
```

