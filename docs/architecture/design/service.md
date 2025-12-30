# Service Layer Design

The Service layer is responsible for business logic processing.

## Design Principles

### Single Responsibility

Each Service is responsible for only one business domain:

- UserService: User management
- ClusterService: Cluster management
- VMService: Virtual machine management

### Dependency Injection

Uses dependency injection to manage Service dependencies:

```go
type ClusterService struct {
    repo repository.ClusterRepository
    proxmox *proxmox.Client
}
```

### Interface Abstraction

Define interfaces for easy testing and extension:

```go
type ClusterService interface {
    CreateCluster(ctx context.Context, req *CreateClusterRequest) (*Cluster, error)
    GetCluster(ctx context.Context, id int64) (*Cluster, error)
}
```

## Business Logic

### Data Validation

Perform business rule validation in the Service layer:

- Parameter validation
- Business rule checking
- Permission verification

### Data Transformation

Transform data returned by Repository into business objects:

- DTO conversion
- Data aggregation
- Format processing

### Transaction Management

Manage transactions in the Service layer:

- Database transactions
- Distributed transactions
- Compensation mechanism

