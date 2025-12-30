import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialsSidebar: [
    'tutorials/intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'tutorials/getting-started/installation',
        'tutorials/getting-started/configuration',
        'tutorials/getting-started/first-cluster',
      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'tutorials/features/dashboard',
        'tutorials/features/cluster-management',
        'tutorials/features/node-management',
        'tutorials/features/vm-management',
        'tutorials/features/storage-management',
        'tutorials/features/template-management',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      items: [
        'tutorials/advanced/multi-cluster',
        'tutorials/advanced/backup-restore',
        'tutorials/advanced/monitoring',
        'tutorials/advanced/security',
      ],
    },
  ],
  apiSidebar: [
    'api/intro',
    {
      type: 'category',
      label: 'Authentication & Authorization',
      items: [
        'api/auth/authentication',
        'api/auth/authorization',
      ],
    },
    {
      type: 'category',
      label: 'Cluster Management',
      items: [
        'api/cluster/list',
        'api/cluster/create',
        'api/cluster/update',
        'api/cluster/delete',
      ],
    },
    {
      type: 'category',
      label: 'Node Management',
      items: [
        'api/node/list',
        'api/node/detail',
        'api/node/console',
      ],
    },
    {
      type: 'category',
      label: 'Virtual Machine Management',
      items: [
        'api/vm/list',
        'api/vm/create',
        'api/vm/operations',
        'api/vm/migrate',
      ],
    },
    {
      type: 'category',
      label: 'Storage Management',
      items: [
        'api/storage/list',
        'api/storage/content',
      ],
    },
    {
      type: 'category',
      label: 'Template Management',
      items: [
        'api/template/list',
        'api/template/sync',
      ],
    },
  ],
  architectureSidebar: [
    'architecture/intro',
    {
      type: 'category',
      label: 'System Architecture',
      items: [
        'architecture/system/overview',
        'architecture/system/frontend',
        'architecture/system/backend',
        'architecture/system/database',
      ],
    },
    {
      type: 'category',
      label: 'Design Patterns',
      items: [
        'architecture/design/controller',
        'architecture/design/service',
        'architecture/design/repository',
      ],
    },
    {
      type: 'category',
      label: 'Deployment Architecture',
      items: [
        'architecture/deployment/docker',
        'architecture/deployment/kubernetes',
        'architecture/deployment/high-availability',
      ],
    },
  ],
};

export default sidebars;

