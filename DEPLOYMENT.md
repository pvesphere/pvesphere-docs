# 部署指南

本文档说明如何将 PveSphere 文档部署到 GitHub Pages。

## 前置条件

1. GitHub 仓库已创建
2. GitHub Actions 已启用
3. GitHub Pages 已配置

## 自动部署

项目已配置 GitHub Actions 工作流，推送到 `main` 分支时会自动构建并部署。

### 工作流配置

工作流文件位于 `.github/workflows/deploy.yml`，包含以下步骤：

1. 检出代码
2. 安装 Node.js 和 pnpm
3. 安装依赖
4. 构建网站
5. 部署到 GitHub Pages

### 首次部署

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 推送到 `main` 分支触发部署

## 手动部署

如果需要手动部署：

```bash
# 安装依赖
pnpm install

# 构建网站
pnpm build

# 部署到 GitHub Pages
GIT_USER=<your-github-username> \
  USE_SSH=true \
  pnpm deploy
```

## 配置说明

### baseUrl

在 `docusaurus.config.ts` 中配置 `baseUrl`：

```typescript
baseUrl: '/pvesphere-docs/',
```

如果部署到根路径，设置为：

```typescript
baseUrl: '/',
```

### 组织名称和项目名称

更新 `docusaurus.config.ts` 中的配置：

```typescript
organizationName: 'pvesphere',
projectName: 'pvesphere-docs',
```

## 自定义域名

如果需要使用自定义域名：

1. 在 `static/` 目录创建 `CNAME` 文件
2. 在文件中写入域名，例如：`docs.pvesphere.com`
3. 在 DNS 配置中添加 CNAME 记录

## 故障排查

### 部署失败

- 检查 GitHub Actions 日志
- 确认 Node.js 版本兼容
- 检查构建错误

### 页面 404

- 确认 `baseUrl` 配置正确
- 检查 GitHub Pages 设置
- 清除浏览器缓存

### 资源加载失败

- 确认静态资源路径正确
- 检查 `baseUrl` 配置
- 验证文件是否存在

