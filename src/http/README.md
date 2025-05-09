# 封装说明
- 完整的 TypeScript 类型支持：所有请求/响应均具备严格类型检查
- 模块化的文件结构：按功能划分为配置、实例、拦截器、类型定义等模块
- 支持多后端服务配置：通过serviceId指定不同后端服务地址
- 统一的请求/响应拦截器：内置身份认证、错误码处理等通用逻辑
- 智能错误处理：自动识别网络错误、超时错误、业务逻辑错误
- 请求重试机制：可配置重试次数（默认3次）和重试延迟
- 自定义配置：支持全局配置和单次请求级别的配置覆盖（loading、错误处理等）
- 即插即用：独立模块设计，可通过简单配置迁移到其他项目

# 安装与配置
```bash
# 安装依赖
npm install axios qs
```

# 使用示例

## 使用时，只需要：
- 复制整个 http 文件夹到项目中
- 根据项目需求修改配置文件
- 在 api/ 下添加对应的 API 定义
- 在组件中导入并使用

## 示例代码：
```javascript
import { http, userApi } from '@/http'

// 直接使用 http 实例
async function fetchData() {
  try {
    const data = await http.get('/some/api', {
      serviceId: 'auth',
      showLoading: true,
      retryCount: 3
    })
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

// 使用封装的 API
async function login() {
  try {
    const token = await userApi.login({
      username: 'test',
      password: '123456'
    })
    localStorage.setItem('token', token)
  } catch (error) {
    console.error(error)
  }
}
```