# Service 层设计

Service 层负责业务逻辑处理。

## 设计原则

### 单一职责

每个 Service 只负责一个业务领域：

- UserService: 用户管理
- ClusterService: 集群管理
- VMService: 虚拟机管理

### 依赖注入

使用依赖注入管理 Service 依赖：

```go
type ClusterService struct {
    repo repository.ClusterRepository
    proxmox *proxmox.Client
}
```

### 接口抽象

定义接口便于测试和扩展：

```go
type ClusterService interface {
    CreateCluster(ctx context.Context, req *CreateClusterRequest) (*Cluster, error)
    GetCluster(ctx context.Context, id int64) (*Cluster, error)
}
```

## 业务逻辑

### 数据验证

在 Service 层进行业务规则验证：

- 参数校验
- 业务规则检查
- 权限验证

### 数据转换

将 Repository 返回的数据转换为业务对象：

- DTO 转换
- 数据聚合
- 格式化处理

### 事务管理

在 Service 层管理事务：

- 数据库事务
- 分布式事务
- 补偿机制

