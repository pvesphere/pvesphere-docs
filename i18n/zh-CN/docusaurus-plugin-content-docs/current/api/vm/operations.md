# 虚拟机操作

对虚拟机执行各种操作（启动、停止、重启等）。

## 启动虚拟机

### 请求

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/start
Authorization: Bearer <token>
```

### 路径参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID |
| node | string | 节点名称 |
| vmid | int | 虚拟机 ID |

### 响应

```json
{
  "code": 200,
  "message": "success"
}
```

## 停止虚拟机

### 请求

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/stop
Authorization: Bearer <token>
```

### 响应

```json
{
  "code": 200,
  "message": "success"
}
```

## 重启虚拟机

### 请求

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/reboot
Authorization: Bearer <token>
```

### 响应

```json
{
  "code": 200,
  "message": "success"
}
```

## 强制停止

### 请求

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/stop?force=true
Authorization: Bearer <token>
```

