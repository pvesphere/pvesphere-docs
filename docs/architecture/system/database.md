# Database Design

PveSphere supports multiple databases: MySQL, PostgreSQL, and SQLite.

## Database Selection

### MySQL

- Suitable for production environments
- High performance
- Supports complex queries

### PostgreSQL

- Feature-rich
- Supports JSON types
- Suitable for complex business

### SQLite

- Lightweight
- Suitable for development and small-scale deployments
- No separate service required

## Core Table Structure

### Users Table (users)

Stores user information:

- id
- email
- password (encrypted)
- nickname
- role

### Cluster Table (pve_clusters)

Stores PVE cluster configuration:

- id
- cluster_name
- name
- api_url
- username
- password (encrypted)
- env
- datacenter
- region

### Node Table (pve_nodes)

Stores node information:

- id
- cluster_id
- node
- status
- cpu_info
- memory_info

### Virtual Machine Table (pve_vms)

Stores virtual machine information:

- id
- cluster_id
- node
- vmid
- name
- status
- config

## Database Migration

Uses GORM's AutoMigrate feature for database migration:

```go
db.AutoMigrate(
    &model.User{},
    &model.PveCluster{},
    &model.PveNode{},
    &model.PveVM{},
)
```

