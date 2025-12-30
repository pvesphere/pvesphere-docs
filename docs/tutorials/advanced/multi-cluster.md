# Multi-Cluster Management

PveSphere supports managing multiple Proxmox VE clusters for unified resource management.

## Cluster Organization

### Environment Classification

It is recommended to classify clusters by environment:

- **test**: Test environment clusters
- **dev**: Development environment clusters
- **prod**: Production environment clusters

### Regional Division

Clusters can be divided by geographic location:

- **SH**: Shanghai region
- **BJ**: Beijing region
- **GZ**: Guangzhou region

## Unified Management

### Global View

In the dashboard, you can view the global status of all clusters:

- Resource summary
- Health status
- Alert information

### Cross-Cluster Operations

Supports cross-cluster operations:

- Virtual machine migration
- Template synchronization
- Backup management

## Best Practices

1. **Naming Convention**: Use unified naming conventions
2. **Access Control**: Set different access permissions for different environments
3. **Monitoring Alerts**: Configure monitoring and alerts for all clusters
4. **Backup Strategy**: Develop unified backup strategies

