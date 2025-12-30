# PveSphere 文档

这是 PveSphere 项目的官方文档站点，使用 [Docusaurus](https://docusaurus.io/) 构建。

## 本地开发

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

#### 开发英文文档（默认）

```bash
pnpm start
```

这将启动本地开发服务器，默认地址为 `http://localhost:3000/pvesphere-docs/`。

#### 开发中文文档

```bash
pnpm start -- --locale zh-CN
```

#### 测试多语言切换

如需测试多语言切换功能，请先构建完整站点：

```bash
pnpm build
pnpm serve
```

然后访问 `http://localhost:3000/pvesphere-docs/`，可以正常切换中文/英文。

> **注意**：在开发模式（`pnpm start`）下，Docusaurus 只加载默认语言以提高性能。切换语言会显示 404，这是正常行为。详见 [I18N_DEVELOPMENT.md](./I18N_DEVELOPMENT.md)。

### 构建

```bash
npm run build
# 或
yarn build
# 或
pnpm build
```

构建输出将保存在 `build/` 目录中。

### 部署到 GitHub Pages

项目已配置 GitHub Actions 自动部署到 GitHub Pages。每次推送到 `main` 分支时，会自动构建并部署文档。

手动部署：

```bash
npm run deploy
# 或
yarn deploy
# 或
pnpm deploy
```

## 文档结构

```
docs/
├── tutorials/          # 教程文档
│   ├── intro.md
│   ├── getting-started/
│   ├── features/
│   └── advanced/
├── api/               # API 文档
│   ├── intro.md
│   ├── auth/
│   ├── cluster/
│   ├── node/
│   ├── vm/
│   ├── storage/
│   └── template/
└── architecture/      # 架构文档
    ├── intro.md
    ├── system/
    ├── design/
    └── deployment/
```

## 贡献

欢迎贡献文档！请遵循以下步骤：

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 许可证

本项目采用 [Apache License 2.0](LICENSE) 许可证。

