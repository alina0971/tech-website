# 企业官网部署完整操作指引

## 📋 项目概述

这是一个基于 React + Vite 构建的科技风企业官网，包含首页、产品页、联系页三个主要页面，支持响应式布局和表单提交功能。

**在线访问地址**：https://alina0971.github.io/tech-website

## 🔧 技术栈

- **前端框架**：React 18
- **路由管理**：React Router DOM v6
- **构建工具**：Vite 5
- **部署平台**：GitHub Pages
- **CI/CD**：GitHub Actions

## 🚀 部署全过程指南

### 第一步：项目初始化

#### 1.1 创建项目目录
```bash
mkdir tech-website
cd tech-website
```

#### 1.2 初始化 package.json
```json
{
  "name": "tech-website",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://your-username.github.io/tech-website",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0",
    "gh-pages": "^6.1.1"
  }
}
```

#### 1.3 配置 Vite
```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tech-website/',
  server: {
    port: 5173,
    host: true
  }
})
```

### 第二步：创建项目结构

```
tech-website/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   └── Navbar/
    │       ├── Navbar.jsx
    │       └── Navbar.css
    └── pages/
        ├── Home/
        │   ├── Home.jsx
        │   └── Home.css
        ├── Products/
        │   ├── Products.jsx
        │   └── Products.css
        └── Contact/
            ├── Contact.jsx
            └── Contact.css
```

### 第三步：核心代码实现

#### 3.1 入口文件
```html
<!-- index.html -->
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>丽凡科技 - 科技创新引领未来</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### 3.2 主应用组件
```jsx
// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/tech-website/" element={<Home />} />
          <Route path="/tech-website/products" element={<Products />} />
          <Route path="/tech-website/contact" element={<Contact />} />
          <Route path="/" element={<Navigate to="/tech-website/" replace />} />
          <Route path="*" element={<Navigate to="/tech-website/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
```

### 第四步：配置 GitHub Actions

#### 4.1 创建工作流文件
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: write
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 4.2 配置 .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### 第五步：Git 初始化与推送

#### 5.1 初始化本地仓库
```bash
git init
git add .
git commit -m "Initial commit: Tech website with React + Vite"
```

#### 5.2 推送到 GitHub
```bash
git remote add origin https://github.com/你的用户名/tech-website.git
git branch -M main
git push -u origin main
```

### 第六步：启用 GitHub Pages

1. 进入 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. **Source** 选择 **GitHub Actions**
4. 等待自动部署完成

### 第七步：验证部署

部署成功后，访问地址：
```
https://你的用户名.github.io/tech-website
```

## 🎨 设计要点

### 响应式设计
- 使用 CSS Grid 和 Flexbox 布局
- 媒体查询适配移动端
- 移动端导航栏汉堡菜单

### 科技感样式
- 蓝色主色调 (#2563eb)
- 渐变背景效果
- 卡片式设计
- 悬停动画效果

### 用户体验
- 固定顶部导航栏
- 平滑滚动
- 表单验证
- 加载状态提示

## 🛠️ 开发调试

### 本地开发
```bash
npm install    # 安装依赖
npm run dev    # 启动开发服务器
```

### 构建生产版本
```bash
npm run build  # 构建
npm run preview # 预览生产版本
```

## 📞 技术支持

如遇部署问题，请检查：
1. GitHub Actions 工作流日志
2. package.json 依赖版本
3. vite.config.js 配置
4. 路由路径是否正确

---

**最后更新时间**：2024年
**作者**：alina0971