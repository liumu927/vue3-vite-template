# Vue 3 + TypeScript + Vite

## 项目启动：
### npm install

### npm run dev

### npm run build 

## 项目基础结构树：
```
vue3-vite-template/
├── .env.dev # 开发环境配置文件
├── .env.prod # 生产环境配置文件
├── .eslintrc.js # ESLint 配置文件
├── .gitignore # Git 忽略文件列表
├── .prettierrc # Prettier 配置文件
├── .vscode/ # VSCode 配置文件夹
├── README.md # 项目说明文档
├── auto-imports.d.ts # 自动导入声明文件
├── index.html # 项目入口 HTML 文件
├── package.json # 项目依赖和脚本配置文件
├── public/ # 公共资源文件夹
├── src/ # 源代码文件夹
│   ├── App.vue # 根组件
│   ├── assets/ # 静态资源文件夹
│   ├── components/ # 组件文件夹
│   ├── components.d.ts # 组件类型声明文件
│   ├── composables/ # 组合式函数文件夹
│   ├── layouts/ # 布局组件文件夹
│   │   ├── DefaultLayout.vue # 默认布局组件
│   ├── main.ts # 项目入口文件
│   ├── router/ # 路由配置文件夹
│   │   ├── index.ts # 路由配置文件
│   ├── service/ # 服务模块文件夹
│   │   ├── api/ # API 模块文件夹
│   │   │   ├── service.ts # 基础 API 服务文件
│   │   ├── index.ts # 服务模块入口文件
│   │   ├── request/ # 请求模块文件夹
│   │   │   ├── index.ts # 请求模块入口文件
│   │   │   ├── types.ts # 请求类型定义文件
│   ├── store/ # 状态管理文件夹
│   │   ├── counter.ts # 计数器状态管理文件
│   │   ├── index.ts # 状态管理入口文件
│   ├── style.css # 全局样式文件
│   ├── types/ # 类型定义文件夹
│   ├── utils/ # 工具函数文件夹
│   ├── views/ # 视图组件文件夹
│   │   ├── About.vue # 关于页面组件
│   │   ├── Home.vue # 首页组件
│   │   ├── Test.vue # 测试页面组件
│   ├── vite-env.d.ts # Vite 环境声明文件
├── tsconfig.app.json # TypeScript 应用配置文件
├── tsconfig.json # TypeScript 配置文件
├── tsconfig.node.json # TypeScript Node 配置文件
└── vite.config.ts # Vite 配置文件
```

## 项目创建流程：
### 创建一个基于TypeScript的Vue 3项目
- npm create vite@latest vue3-vite-template -- --template vue-ts
- cd vue3-vite-template
- npm install

### 本项目创建过程中添加所需的依赖（直接使用本项目时不需要执行以下命令）
- npm install vue-router@4 pinia pinia-plugin-persistedstate axios
- npm install -D @vitejs/plugin-vue-jsx unplugin-auto-import unplugin-vue-components
- npm install vue-i18n@next @vueuse/core dayjs
- pm install -D sass
- npm install -D eslint eslint-plugin-vue @vue/eslint-config-typescript prettier eslint-config-prettier eslint-plugin-prettier
- npm install -D @types/node @types/axios @typescript-eslint/parser @typescript-eslint/eslint-plugin
- npm i -D commitizen cz-customizable

## 项目包含功能：
- Vue 3 + TypeScript 支持
- Vue Router 用于页面路由
- Pinia 用于状态管理,并配置了持久化
- 自动导入插件 (组件和 API)
- Axios 封装，包括请求和响应拦截器，API 请求封装
- 反向代理配置
- JSX 支持
- @ 别名配置，方便导入
- ESLint 和 Prettier 配置，保证代码质量和一致性
- Sass 支持
- 环境变量配置
- 优化的 Vite 配置
- 常用 Vue 生态系统库（vue-i18n@next @vueuse/core dayjs）
- 基础布局组件
- 更新的 npm scripts （package.json）