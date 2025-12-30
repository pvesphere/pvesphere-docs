# Virtual Machine Operations

Perform various operations on virtual machines (start, stop, restart, etc.).

## Start Virtual Machine

### Request

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/start
Authorization: Bearer <token>
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID |
| node | string | Node name |
| vmid | int | Virtual machine ID |

### Response

```json
{
  "code": 200,
  "message": "success"
}
```

## Stop Virtual Machine

### Request

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/stop
Authorization: Bearer <token>
```

### Response

```json
{
  "code": 200,
  "message": "success"
}
```

## Restart Virtual Machine

### Request

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/reboot
Authorization: Bearer <token>
```

### Response

```json
{
  "code": 200,
  "message": "success"
}
```

## Force Stop

### Request

```http
POST /api/v1/pve/vm/:clusterId/:node/:vmid/stop?force=true
Authorization: Bearer <token>
```

