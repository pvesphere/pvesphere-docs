# 多语言开发指南

## 问题说明

在使用 `pnpm start` 启动开发服务器时，切换到简体中文会显示 "Page Not Found"。

### 原因

这是 **Docusaurus 的正常行为**，不是配置错误。

Docusaurus 在开发模式（`pnpm start`）下，**默认只加载默认语言（英文）的文档数据**。这是为了：
- 加快开发服务器启动速度
- 减少内存占用
- 提高热重载速度

在生产构建时，会生成所有语言的完整站点。

## 解决方案

### 方案 1：构建并预览完整站点（推荐）

适用于测试多语言切换功能：

```bash
# 1. 构建完整站点（包含所有语言）
pnpm build

# 2. 预览构建后的站点
pnpm serve
```

然后访问 `http://localhost:3000/pvesphere-docs/`，可以正常切换中文/英文。

### 方案 2：启动中文开发服务器

适用于专注开发中文内容：

```bash
pnpm start -- --locale zh-CN
```

这将只加载中文版本，访问 `http://localhost:3000/pvesphere-docs/` 直接显示中文内容。

### 方案 3：启动英文开发服务器（默认）

适用于专注开发英文内容：

```bash
pnpm start
```

这是默认行为，只加载英文版本。

## 开发工作流建议

### 日常开发

- 开发英文文档：使用 `pnpm start`
- 开发中文文档：使用 `pnpm start -- --locale zh-CN`

### 测试多语言

在提交前，运行完整构建测试：

```bash
pnpm build
pnpm serve
```

确保所有语言都能正常显示和切换。

## 注意事项

1. **搜索插件已临时禁用**：由于构建兼容性问题，`@easyops-cn/docusaurus-search-local` 插件已被注释。如需启用，请在 `docusaurus.config.ts` 中取消注释。

2. **Git 最后更新已禁用**：为避免构建错误，`showLastUpdateAuthor` 和 `showLastUpdateTime` 已设置为 `false`。

3. **文件结构**：确保中文翻译文件位于 `i18n/zh-CN/` 目录下，与英文文档结构保持一致。

## 参考资料

- [Docusaurus i18n Tutorial](https://docusaurus.io/docs/i18n/tutorial)
- [Docusaurus i18n Configuration](https://docusaurus.io/docs/i18n/introduction)

