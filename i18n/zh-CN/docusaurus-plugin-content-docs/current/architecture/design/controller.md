# Controller 模式

PveSphere 使用 Kubernetes Controller 模式管理 PVE 资源。

## Controller 原理

Controller 模式通过 Informer 机制实现：

1. **List**: 获取资源列表
2. **Watch**: 监听资源变化
3. **Informer**: 维护本地缓存
4. **Controller**: 处理资源事件

## 实现架构

```
┌─────────────┐
│   PVE API   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  ListWatcher│
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Informer  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Controller │
└─────────────┘
```

## 核心组件

### Informer

维护资源缓存：

- 本地缓存
- 增量更新
- 事件通知

### Controller

处理资源事件：

- Add 事件
- Update 事件
- Delete 事件

## 优势

- **实时同步**: 自动同步资源状态
- **本地缓存**: 减少 API 调用
- **事件驱动**: 响应式处理
- **容错机制**: 自动重试和恢复

