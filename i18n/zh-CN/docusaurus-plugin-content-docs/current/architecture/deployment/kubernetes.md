# Kubernetes 部署

PveSphere 支持部署到 Kubernetes 集群。

## 部署架构

```
┌─────────────────────────────────────┐
│         Kubernetes Cluster          │
│                                     │
│  ┌─────────────┐  ┌─────────────┐  │
│  │ API Server  │  │ Controller  │  │
│  │ Deployment  │  │ Deployment │  │
│  └─────────────┘  └─────────────┘  │
│                                     │
│  ┌─────────────────────────────┐    │
│  │      ConfigMap/Secret       │    │
│  └─────────────────────────────┘    │
│                                     │
│  ┌─────────────────────────────┐    │
│  │    PersistentVolumeClaim   │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

## 资源配置

### Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pvesphere-api
spec:
  replicas: 2
  selector:
    matchLabels:
      app: pvesphere-api
  template:
    metadata:
      labels:
        app: pvesphere-api
    spec:
      containers:
      - name: api
        image: pvesphere-api:latest
        ports:
        - containerPort: 8000
```

### Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: pvesphere-api
spec:
  selector:
    app: pvesphere-api
  ports:
  - port: 80
    targetPort: 8000
  type: LoadBalancer
```

## 高可用

- **多副本**: 运行多个 Pod 实例
- **健康检查**: Liveness 和 Readiness 探针
- **自动重启**: 容器异常时自动重启
- **滚动更新**: 零停机更新

