# 前端架构

PveSphere 前端采用 Vue 3 + TypeScript 构建。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **构建工具**: Vite 7
- **UI 库**: Element Plus 2
- **语言**: TypeScript 5
- **状态管理**: Pinia 3
- **路由**: Vue Router 4
- **国际化**: Vue I18n

## 项目结构

```
pvesphere-ui/
├── src/
│   ├── api/              # API 接口
│   ├── assets/          # 静态资源
│   ├── components/      # 可复用组件
│   ├── config/          # 配置文件
│   ├── layout/          # 布局组件
│   ├── router/          # 路由配置
│   ├── store/           # Pinia stores
│   ├── utils/           # 工具函数
│   └── views/           # 页面组件
│       └── pve/         # PVE 管理页面
└── locales/             # i18n 翻译文件
```

## 核心功能模块

### 路由管理

使用 Vue Router 4 进行路由管理，支持：

- 动态路由
- 路由守卫
- 权限控制

### 状态管理

使用 Pinia 3 进行状态管理：

- 用户状态
- 应用配置
- 权限信息
- 多标签页管理

### API 调用

统一的 API 调用封装：

- HTTP 请求拦截
- 错误处理
- Token 管理
- 请求重试

## 组件设计

### 布局组件

- **Frame**: 主框架
- **Navbar**: 导航栏
- **Sidebar**: 侧边栏
- **Content**: 内容区域

### 业务组件

- **Dashboard**: 仪表板
- **Cluster Management**: 集群管理
- **VM Management**: 虚拟机管理
- **Storage Management**: 存储管理

