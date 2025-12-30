# Node Console

Access node console via WebSocket connection.

## Request

```http
GET /api/v1/pve/node/:clusterId/:node/console
Authorization: Bearer <token>
```

### Path Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| clusterId | int | Cluster ID |
| node | string | Node name |

## WebSocket Connection

After successful connection, a WebSocket connection will be established:

```
ws://localhost:8000/api/v1/pve/node/:clusterId/:node/console?token=<token>
```

### Message Format

#### Send Command

```json
{
  "type": "input",
  "data": "ls -la\n"
}
```

#### Receive Output

```json
{
  "type": "output",
  "data": "total 100\n..."
}
```

## Usage Example

```javascript
const ws = new WebSocket('ws://localhost:8000/api/v1/pve/node/1/pve-node-01/console?token=xxx');

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  if (message.type === 'output') {
    console.log(message.data);
  }
};

ws.send(JSON.stringify({
  type: 'input',
  data: 'ls -la\n'
}));
```

