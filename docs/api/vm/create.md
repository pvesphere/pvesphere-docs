# Create Virtual Machine

Create a new virtual machine.

## Request

```http
POST /api/v1/pve/vm
Authorization: Bearer <token>
Content-Type: application/json
```

### Request Body

```json
{
  "clusterId": 1,
  "node": "pve-node-01",
  "vmid": 100,
  "name": "vm-ubuntu-01",
  "cpu": {
    "cores": 2,
    "sockets": 1
  },
  "memory": 4096,
  "disk": {
    "size": 20,
    "storage": "local"
  },
  "network": {
    "bridge": "vmbr0",
    "model": "virtio"
  },
  "iso": "local:iso/ubuntu-22.04.iso"
}
```

## Response

```json
{
  "code": 200,
  "message": "success",
  "data": {
    "id": 1,
    "vmid": 100,
    "name": "vm-ubuntu-01",
    "status": "stopped"
  }
}
```

