# Kubernetes Deployment

PveSphere supports deployment to Kubernetes clusters.

## Deployment Architecture

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

## Resource Configuration

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

## High Availability

- **Multiple Replicas**: Run multiple Pod instances
- **Health Checks**: Liveness and Readiness probes
- **Auto Restart**: Automatically restart on container failure
- **Rolling Updates**: Zero-downtime updates

