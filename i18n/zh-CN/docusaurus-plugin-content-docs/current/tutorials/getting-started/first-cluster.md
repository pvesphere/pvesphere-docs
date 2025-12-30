# 第一个集群

本指南将帮助您添加并管理第一个 Proxmox VE 集群。

## 准备工作

在添加集群之前，您需要：

1. 一个运行中的 Proxmox VE 集群或节点
2. 具有 API 访问权限的用户账户
3. PveSphere 系统已正确安装和配置

## 添加集群

### 步骤 1：登录系统

1. 访问 PveSphere 前端应用
2. 使用默认账户或您创建的管理员账户登录

### 步骤 2：进入集群管理

1. 在左侧导航栏中，点击 "PVE Management" > "Datacenter"
2. 点击右上角的 "+Add Cluster" 按钮

### 步骤 3：填写集群信息

在添加集群对话框中，填写以下信息：

- **Cluster Name**: 集群名称（例如：`pve-cluster-01`）
- **Name**: 显示名称（例如：`生产环境集群`）
- **API URL**: Proxmox VE API 地址（例如：`https://pve.example.com:8006`）
- **Username**: Proxmox VE API 用户名
- **Password**: Proxmox VE API 密码或 Token
- **Env**: 环境类型（test/dev/prod）
- **Datacenter**: 数据中心名称
- **Region**: 区域标识

### 步骤 4：验证连接

点击 "Test Connection" 按钮验证 API 连接是否正常。

### 步骤 5：保存集群

验证通过后，点击 "Save" 保存集群配置。

## 管理集群

### 查看集群状态

在集群列表中，您可以查看：

- 集群状态（Enabled/Disabled）
- 调度状态（Schedulable）
- 节点数量
- 虚拟机数量
- 存储使用情况

### 启用/禁用集群

- 点击集群操作菜单中的 "Enable" 或 "Disable" 来启用或禁用集群
- 禁用的集群将不会参与调度和监控

### 编辑集群

点击集群操作菜单中的 "Edit" 可以修改集群配置。

### 删除集群

点击集群操作菜单中的 "Delete" 可以删除集群（请谨慎操作）。

## 下一步

集群添加成功后，您可以：

- 查看 [仪表板功能](../features/dashboard.md) 了解如何监控资源
- 查看 [节点管理](../features/node-management.md) 了解如何管理节点
- 查看 [虚拟机管理](../features/vm-management.md) 了解如何管理虚拟机

