# 个人项目展示网站

## 项目概述
这是一个使用 Nuxt3 和 shadcn/ui 构建的个人项目展示网站，主要用于展示游戏开发项目和技术博客。

## 主要功能

### 1. 代码展示组件
- 支持多种编程语言的代码高亮显示
- 自定义滚动条样式
- 响应式设计
- 支持标题和语言类型显示

### 2. 博客展示功能
- 项目概述展示
- 核心功能展示
- 技术实现细节
- 开发过程记录
- 学习成果展示

### 3. 交互功能
- 代码块滚动查看
- 图片查看器
- 外部链接跳转
- 响应式布局

## 技术栈
- Nuxt3
- Vue 3
- TypeScript
- shadcn/ui
- highlight.js (代码高亮)
- TailwindCSS (样式)

## 项目结构
```
nuxt3-shadcn/
├── components/
│   └── ui/
│       └── code-block/
│           ├── index.vue
│           └── styles.css
├── pages/
│   └── blogs/
│       ├── 2.vue
│       ├── 3.vue
│       └── 4.vue
```

## 主要组件

### CodeBlock 组件
用于展示代码片段的可复用组件，支持：
- 语法高亮
- 自定义滚动条
- 标题显示
- 语言类型标识

### 博客页面组件
每个博客页面包含：
- 项目标题和基本信息
- 核心功能展示
- 技术实现详解
- 开发过程记录
- 学习成果总结

## 样式特点
- 使用 TailwindCSS 实现响应式设计
- 自定义代码块样式
- 统一的色彩主题
- 现代化的 UI 设计

## 安装和使用

### 安装依赖
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 开发服务器
启动开发服务器 (http://localhost:3000):
```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### 生产构建
构建生产版本:
```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

### 本地预览
本地预览生产构建:
```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## 注意事项
- 确保正确安装了所有依赖包
- 代码高亮需要引入相应的 highlight.js 主题
- 图片资源需要放在正确的目录下

## 未来计划
- 添加更多交互功能
- 优化移动端体验
- 增加更多自定义主题选项
- 添加评论功能

## 部署
查看 [部署文档](https://nuxt.com/docs/getting-started/deployment) 了解更多信息。
