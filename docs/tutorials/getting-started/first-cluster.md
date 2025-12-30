# First Cluster

This guide will help you add and manage your first Proxmox VE cluster.

## Prerequisites

Before adding a cluster, you need:

1. A running Proxmox VE cluster or node
2. A user account with API access permissions
3. PveSphere system properly installed and configured

## Adding a Cluster

### Step 1: Log in to the System

1. Access the PveSphere frontend application
2. Log in with the default account or your created administrator account

### Step 2: Enter Cluster Management

1. In the left navigation bar, click "PVE Management" > "Datacenter"
2. Click the "+Add Cluster" button in the top right corner

### Step 3: Fill in Cluster Information

In the add cluster dialog, fill in the following information:

- **Cluster Name**: Cluster name (e.g., `pve-cluster-01`)
- **Name**: Display name (e.g., `Production Cluster`)
- **API URL**: Proxmox VE API address (e.g., `https://pve.example.com:8006`)
- **Username**: Proxmox VE API username
- **Password**: Proxmox VE API password or Token
- **Env**: Environment type (test/dev/prod)
- **Datacenter**: Datacenter name
- **Region**: Region identifier

### Step 4: Verify Connection

Click the "Test Connection" button to verify that the API connection is working properly.

### Step 5: Save Cluster

After verification passes, click "Save" to save the cluster configuration.

## Managing Clusters

### View Cluster Status

In the cluster list, you can view:

- Cluster status (Enabled/Disabled)
- Scheduling status (Schedulable)
- Number of nodes
- Number of virtual machines
- Storage usage

### Enable/Disable Cluster

- Click "Enable" or "Disable" in the cluster action menu to enable or disable the cluster
- Disabled clusters will not participate in scheduling and monitoring

### Edit Cluster

Click "Edit" in the cluster action menu to modify cluster configuration.

### Delete Cluster

Click "Delete" in the cluster action menu to delete the cluster (please use with caution).

## Next Steps

After successfully adding a cluster, you can:

- View [Dashboard Features](../features/dashboard.md) to learn how to monitor resources
- View [Node Management](../features/node-management.md) to learn how to manage nodes
- View [VM Management](../features/vm-management.md) to learn how to manage virtual machines

