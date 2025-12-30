# Backup and Restore

PveSphere provides complete backup and restore functionality.

## Backup Strategy

### Backup Types

- **Full Backup**: Backup the complete state of the virtual machine
- **Incremental Backup**: Only backup changed parts
- **Differential Backup**: Backup differences from the last full backup

### Backup Schedule

You can create automatic backup schedules:

- Backup frequency (daily/weekly)
- Backup time
- Retention policy
- Target storage

## Restore Operations

### Full Restore

Fully restore virtual machine from backup:

1. Select backup file
2. Select target cluster and node
3. Configure restore parameters
4. Execute restore

### Partial Restore

You can restore only part of the data:

- Disk restore
- Configuration file restore
- Data file restore

## Best Practices

1. **Regular Backups**: Develop regular backup schedules
2. **Test Restore**: Regularly test restore procedures
3. **Offsite Backup**: Store backups offsite
4. **Version Management**: Maintain backup version history

