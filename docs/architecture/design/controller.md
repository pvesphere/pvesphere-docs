# Controller Pattern

PveSphere uses Kubernetes Controller pattern to manage PVE resources.

## Controller Principle

Controller pattern is implemented through Informer mechanism:

1. **List**: Get resource list
2. **Watch**: Monitor resource changes
3. **Informer**: Maintain local cache
4. **Controller**: Handle resource events

## Implementation Architecture

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

## Core Components

### Informer

Maintains resource cache:

- Local cache
- Incremental updates
- Event notifications

### Controller

Handles resource events:

- Add events
- Update events
- Delete events

## Advantages

- **Real-time Sync**: Automatically sync resource status
- **Local Cache**: Reduce API calls
- **Event-driven**: Reactive processing
- **Fault Tolerance**: Automatic retry and recovery

