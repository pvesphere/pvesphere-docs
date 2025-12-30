# Storage Management

Storage management allows you to monitor and manage storage resources in Proxmox VE clusters.

## Storage List

The storage list displays information about all storage in all clusters:

- **Storage Name**: Identifier of the storage
- **Type**: Storage type (local/nfs/ceph, etc.)
- **Cluster/Node**: Cluster and node to which the storage belongs
- **Capacity**: Total capacity and available capacity
- **Usage**: Storage usage percentage

## Storage Operations

### View Storage Details

Click the storage name to view detailed information:

- Storage configuration
- Capacity statistics
- Usage information
- Performance metrics

### Browse Storage Content

You can browse content in storage:

- **ISO Images**: Installation image files
- **Backup Files**: Virtual machine backups
- **Templates**: VM template files
- **Container Templates**: LXC container templates

### Storage Operations

- **Upload File**: Upload ISO images or other files
- **Delete File**: Delete unnecessary files
- **Download File**: Download files from storage

## Storage Types

### Local Storage

Local storage directly connected to nodes:

- High performance
- Capacity limited by node
- No cross-node sharing support

### NFS Storage

Network File System storage:

- Supports cross-node sharing
- Suitable for shared templates and backups
- Requires network connection

### Ceph Storage

Distributed storage system:

- High availability
- Automatic data redundancy
- Suitable for large-scale deployments

## Monitoring and Alerts

### Capacity Monitoring

Real-time monitoring of storage capacity:

- Total capacity
- Used capacity
- Available capacity
- Usage trends

### Alert Notifications

When storage capacity is insufficient, the system will send alerts:

- Capacity threshold alerts
- Storage failure alerts
- Performance issue alerts

## Best Practices

1. **Capacity Planning**: Regularly check storage capacity and plan expansion in advance
2. **Backup Strategy**: Backup important data to shared storage
3. **Performance Optimization**: Choose appropriate storage types based on usage scenarios
4. **Monitoring Alerts**: Set reasonable capacity alert thresholds

