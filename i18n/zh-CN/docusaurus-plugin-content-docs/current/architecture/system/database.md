# 数据库设计

PveSphere 支持多种数据库：MySQL、PostgreSQL 和 SQLite。

## 数据库选择

### MySQL

- 适合生产环境
- 高性能
- 支持复杂查询

### PostgreSQL

- 功能丰富
- 支持 JSON 类型
- 适合复杂业务

### SQLite

- 轻量级
- 适合开发和小规模部署
- 无需单独服务

## 核心表结构

### 用户表 (users)

存储用户信息：

- id
- email
- password (加密)
- nickname
- role

### 集群表 (pve_clusters)

存储 PVE 集群配置：

- id
- cluster_name
- name
- api_url
- username
- password (加密)
- env
- datacenter
- region

### 节点表 (pve_nodes)

存储节点信息：

- id
- cluster_id
- node
- status
- cpu_info
- memory_info

### 虚拟机表 (pve_vms)

存储虚拟机信息：

- id
- cluster_id
- node
- vmid
- name
- status
- config

## 数据迁移

使用 GORM 的 AutoMigrate 功能进行数据库迁移：

```go
db.AutoMigrate(
    &model.User{},
    &model.PveCluster{},
    &model.PveNode{},
    &model.PveVM{},
)
```

