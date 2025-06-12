/**
 * @file ESLint 配置文件
 * @description 用于 Vue 3 + TypeScript + Vite 项目的代码质量检查
 */

module.exports = {
  // 🏠 根配置标识：ESLint 在查找配置时会停止向上级目录搜索
  root: true,

  // 🌍 代码运行环境设置：定义了代码将在哪些环境中运行，影响全局变量的可用性
  env: {
    browser: true,     // 浏览器环境：支持 window、document 等浏览器全局变量
    node: true,        // Node.js 环境：支持 process、Buffer、global 等 Node.js 全局变量
    es2021: true,      // ES2021 环境：启用 ES2021 全局变量和语法特性
    'vue/setup-compiler-macros': true,  // Vue 3 setup 语法糖：支持 defineProps、defineEmits 等编译器宏
  },

  ignorePatterns: ['node_modules', 'dist', 'build', 'public', 'src/assets', 'src/vite-env.d.ts'], // 忽略的文件或目录

  // 📦 继承的规则配置集：按优先级顺序排列，后面的配置会覆盖前面的配置
  extends: [
    'eslint:recommended',                 // ESLint 推荐规则
    'plugin:vue/vue3-recommended',        // Vue 3 推荐规则
    'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    'prettier',                           // 禁用与 Prettier 冲突的规则
    './.eslintrc-auto-import.json', // 自动导入配置
  ],

  // 🔍 主解析器：使用 vue-eslint-parser 解析 .vue 文件
  parser: 'vue-eslint-parser',

  // ⚙️ 解析器选项配置：指定解析器的具体行为和支持的语法特性
  parserOptions: {
    parser: '@typescript-eslint/parser',  // TypeScript 解析器：处理 <script> 标签内的 TypeScript 代码
    ecmaVersion: 2021,                   // ECMAScript 版本：支持 ES2021 语法特性
    sourceType: 'module',                // 模块类型：使用 ES 模块系统 (import/export)
    ecmaFeatures: {
      jsx: true,                         // JSX 支持：允许解析 JSX 语法（用于 TSX 文件）
    },
  },

  // 🔌 使用的 ESLint 插件：提供额外的规则和功能支持
  plugins: [
    'vue',              // Vue 插件：提供 Vue 特定的 linting 规则
    '@typescript-eslint', // TypeScript 插件：提供 TypeScript 特定的规则
    // 'prettier',         // Prettier 插件：与 Prettier 冲突的规则将被禁用
  ],

  //#region 规则配置
  /**
   * 📏 自定义规则设置
   * 
   * 规则值说明：
   * - 'off' 或 0：关闭规则
   * - 'warn' 或 1：警告级别，不会导致退出
   * - 'error' 或 2：错误级别，会导致退出
   */
  rules: {
    // 生产环境警告 console，开发环境允许
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 生产环境警告 debugger，开发环境允许
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // 关闭组件名必须多个单词的限制
    'vue/multi-word-component-names': 'off',

    // 对使用 any 类型发出警告
    '@typescript-eslint/no-explicit-any': 'warn',

    // 未使用的变量检查，允许 _name 形式的变量未使用
    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',  // 以 _ 开头的参数不检查
        varsIgnorePattern: '^_', // 以 _ 开头的变量不检查
      },
    ],
  },
  //#endregion

  // 针对特定文件的规则覆盖: 为不同类型的文件提供个性化的 linting 规则
  overrides: [
    {
      files: ['vite.config.*', 'vitest.config.*'],
      rules: {
        /**
         * 配置文件允许使用 require()
         * 某些配置文件可能需要 CommonJS 语法
         */
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*', '**/*.{test,spec}.*'],
      rules: {
        /**
         * 测试文件放宽规则限制
         * 测试代码可能需要更多的灵活性
         */
        '@typescript-eslint/no-unused-vars': 'off',  // 允许未使用的变量
        '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 类型
      },
    },
  ],
} 