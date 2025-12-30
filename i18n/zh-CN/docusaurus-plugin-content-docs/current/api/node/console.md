# 节点控制台

通过 WebSocket 连接访问节点控制台。

## 请求

```http
GET /api/v1/pve/node/:clusterId/:node/console
Authorization: Bearer <token>
```

### 路径参数

| 参数 | 类型 | 说明 |
|------|------|------|
| clusterId | int | 集群 ID |
| node | string | 节点名称 |

## WebSocket 连接

连接成功后，会建立 WebSocket 连接：

```
ws://localhost:8000/api/v1/pve/node/:clusterId/:node/console?token=<token>
```

### 消息格式

#### 发送命令

```json
{
  "type": "input",
  "data": "ls -la\n"
}
```

#### 接收输出

```json
{
  "type": "output",
  "data": "total 100\n..."
}
```

## 使用示例

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

