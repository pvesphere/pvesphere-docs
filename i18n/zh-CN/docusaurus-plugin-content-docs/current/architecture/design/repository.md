# Repository 模式

Repository 模式封装数据访问逻辑。

## 设计目的

- **解耦**: 分离业务逻辑和数据访问
- **测试**: 便于单元测试
- **扩展**: 支持多种数据源

## 接口定义

```go
type ClusterRepository interface {
    Create(ctx context.Context, cluster *model.PveCluster) error
    FindByID(ctx context.Context, id int64) (*model.PveCluster, error)
    FindAll(ctx context.Context) ([]*model.PveCluster, error)
    Update(ctx context.Context, cluster *model.PveCluster) error
    Delete(ctx context.Context, id int64) error
}
```

## 实现方式

### GORM 实现

使用 GORM 实现 Repository：

```go
type clusterRepository struct {
    db *gorm.DB
}

func (r *clusterRepository) Create(ctx context.Context, cluster *model.PveCluster) error {
    return r.db.WithContext(ctx).Create(cluster).Error
}
```

## 优势

- **统一接口**: 统一的数据访问接口
- **易于测试**: 可以轻松 Mock
- **灵活扩展**: 支持多种数据源

