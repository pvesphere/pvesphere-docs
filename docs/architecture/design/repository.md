# Repository Pattern

Repository pattern encapsulates data access logic.

## Design Purpose

- **Decoupling**: Separate business logic and data access
- **Testing**: Easy unit testing
- **Extension**: Support multiple data sources

## Interface Definition

```go
type ClusterRepository interface {
    Create(ctx context.Context, cluster *model.PveCluster) error
    FindByID(ctx context.Context, id int64) (*model.PveCluster, error)
    FindAll(ctx context.Context) ([]*model.PveCluster, error)
    Update(ctx context.Context, cluster *model.PveCluster) error
    Delete(ctx context.Context, id int64) error
}
```

## Implementation

### GORM Implementation

Use GORM to implement Repository:

```go
type clusterRepository struct {
    db *gorm.DB
}

func (r *clusterRepository) Create(ctx context.Context, cluster *model.PveCluster) error {
    return r.db.WithContext(ctx).Create(cluster).Error
}
```

## Advantages

- **Unified Interface**: Unified data access interface
- **Easy Testing**: Can be easily mocked
- **Flexible Extension**: Supports multiple data sources

