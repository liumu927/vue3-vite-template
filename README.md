# Vue 3 + TypeScript + Vite 项目模板

## 项目启动：
### npm install

### npm run dev

### npm run build 

## 技术栈：
- Vue 3.5.13
- TypeScript 5.7.2
- Vite 6.1.0
- Vue Router 4.5.0
- Pinia 2.3.1 (带持久化状态插件)
- Ant Design Vue 4.2.6
- Axios 1.7.9
- VueUse 12.5.0
- Vue I18n 11.0.0-rc.1
- Sass 1.84.0
- Dayjs 1.11.13

## 项目基础结构树：
```
vue3-ts-vite/
├── .eslintrc.js # ESLint 配置文件
├── .gitignore # Git 忽略文件列表
├── .husky/ # Git钩子配置文件夹
├── .prettierrc # Prettier 配置文件
├── .vscode/ # VSCode 配置文件夹
├── .cz-config.cjs # Commitizen自定义配置
├── README.md # 项目说明文档
├── auto-imports.d.ts # 自动导入声明文件
├── commitlint.config.cjs # Commit规范配置
├── components.d.ts # 组件类型声明文件
├── index.html # 项目入口 HTML 文件
├── package.json # 项目依赖和脚本配置文件
├── public/ # 公共资源文件夹
├── src/ # 源代码文件夹
│   ├── App.vue # 根组件
│   ├── assets/ # 静态资源文件夹
│   ├── http/ # HTTP请求模块
│   ├── layouts/ # 布局组件文件夹
│   ├── main.ts # 项目入口文件
│   ├── router/ # 路由配置文件夹
│   ├── store/ # 状态管理文件夹（Pinia）
│   ├── style.css # 全局样式文件
│   ├── views/ # 视图组件文件夹
│   ├── vite-env.d.ts # Vite 环境声明文件
├── tsconfig.app.json # TypeScript 应用配置文件
├── tsconfig.json # TypeScript 配置文件
├── tsconfig.node.json # TypeScript Node 配置文件
└── vite.config.ts # Vite 配置文件
```

## 项目特性：
- **组件自动导入**：使用 unplugin-auto-import 和 unplugin-vue-components 实现组件和API的自动导入
- **UI组件库**：集成 Ant Design Vue 4.x 组件库
- **状态管理**：使用 Pinia 进行状态管理，并配置了持久化插件
- **HTTP请求**：封装了Axios，支持请求和响应拦截
- **TypeScript支持**：完整的TypeScript类型支持
- **路由管理**：使用Vue Router进行路由管理
- **代码规范**：集成ESLint和Prettier保证代码质量和一致性
- **国际化**：集成Vue I18n支持多语言
- **Git规范**：使用Husky、Commitlint和Commitizen规范Git提交
- **构建优化**：使用Vite提供快速的开发和构建体验
- **CSS预处理**：支持Sass预处理器
- **工具函数**：集成VueUse提供常用的组合式函数
- **日期处理**：集成Dayjs处理日期时间

## 开发脚本：
- `npm run dev` - 启动开发服务器（开发环境）
- `npm run build` - 构建生产版本
- `npm run preview` - 本地预览生产构建
- `npm run lint` - 运行ESLint检查代码
- `npm run format` - 使用Prettier格式化代码
- `npm run commit` - 使用Commitizen提交代码（规范提交信息）

## Vite配置特性：
- 配置了`@`别名指向src目录
- 配置了自动导入Vue、Vue Router和Pinia的API
- 配置了自动导入Ant Design Vue组件
- 配置了开发服务器代理，支持API请求转发
- 支持JSX/TSX语法

## Git提交规范：
项目使用Commitizen、Commitlint和Husky来规范Git提交：
- 使用`npm run commit`代替`git commit`
- 提交信息需符合约定式提交规范
- 提交前会自动运行Lint检查

## 环境变量：
可以在不同环境配置文件中设置环境变量：
- 开发环境使用`--mode dev`
- 生产环境使用`--mode prod`