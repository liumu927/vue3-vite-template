# HTTP 请求工具封装说明

一个功能完整、易于扩展的 HTTP 请求工具，支持单服务和多服务架构。

## 特性

- 完整的 TypeScript 类型支持：所有请求/响应均具备严格类型检查
- 模块化的文件结构：按功能划分为配置、实例、拦截器、类型定义等模块
- 支持多后端服务配置：通过 serviceId 指定不同后端服务地址
- 统一的请求/响应拦截器：内置身份认证、错误码处理等通用逻辑
- 智能错误处理：自动识别网络错误、超时错误、业务逻辑错误
- 请求重试机制：可配置重试次数和重试延迟
- 自定义配置：支持全局配置和单次请求级别的配置覆盖
- 即插即用：独立模块设计，可通过简单配置迁移到其他项目

## 安装与配置

```bash
# 安装依赖
npm install axios
```

## 使用场景

### 场景一：单服务架构

适用于只有一个后端服务的项目。

#### 1. 配置文件

```typescript
// src/http/config/index.ts
export const config: GlobalConfig = {
  default: {
    baseURL: '/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  },
}
```

#### 2. Vite 代理配置

```typescript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: env.VITE_API_BASE_URL,
      changeOrigin: true,
    },
  },
}
```

#### 3. API 定义

```typescript
// src/http/api/index.ts
import { http } from '../instance'

export const api = {
  // 用户相关
  login(credentials: { email: string; password: string }) {
    return http.post('/auth/login', credentials)
  },
  
  getUserInfo() {
    return http.get('/user/profile')
  },
  
  // 数据相关
  getDataList(params?: any) {
    return http.get('/data', { params })
  },
  
  createData(data: any) {
    return http.post('/data', data)
  },
  
  updateData(id: string, data: any) {
    return http.put(`/data/${id}`, data)
  },
  
  deleteData(id: string) {
    return http.delete(`/data/${id}`)
  }
}
```

#### 4.导出配置
```typescript
// src/http/index.ts
export * from './api/index'
```

#### 5. 组件中使用

```typescript
// src/components/DataManager.vue
<script setup lang="ts">
import { api } from '@/http'

const dataList = ref([])
const loading = ref(false)

// 获取数据列表
const fetchDataList = async () => {
  try {
    loading.value = true
    const result = await api.getDataList({ page: 1, size: 10 })
    dataList.value = result.data
  } catch (error) {
    console.error('获取数据失败:', error)
  } finally {
    loading.value = false
  }
}

// 创建数据
const createNewData = async (formData: any) => {
  try {
    await api.createData(formData)
    message.success('创建成功')
    await fetchDataList() // 刷新列表
  } catch (error) {
    console.error('创建失败:', error)
  }
}
</script>
```

---

### 场景二：多服务架构

适用于微服务架构，有多个独立的后端服务。

#### 1. 配置文件

```typescript
// src/http/config/index.ts
export const config: GlobalConfig = {
  // 默认服务（用户服务）
  default: {
    baseURL: '/api',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  
  // 用户服务
  user: {
    baseURL: '/userApi',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'X-Service': 'user-service',
    },
  },
  
  // 订单服务
  order: {
    baseURL: 'OrderApi',
    timeout: 15000, // 订单查询可能需要更长时间
    headers: {
      'Content-Type': 'application/json',
      'X-Service': 'order-service',
    },
  },
}
```

#### 2. 环境变量配置

```bash
# .env.development
VITE_USER_API_BASE_URL=http://localhost:3001
VITE_ORDER_API_BASE_URL=http://localhost:3002
```

#### 3. Vite 代理配置

```typescript
// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: env.VITE_API_BASE_URL,
      changeOrigin: true,
    },
    // 用户服务代理
    'userApi/': {
      target: env.VITE_USER_API_BASE_URL,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/userApi/, '/user-api')
    },
    // 订单服务代理
    'orderApi': {
      target: env.VITE_ORDER_API_BASE_URL,
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/orderApi/, '/order-api')
    },
  },
}
```

#### 4. API 定义（按服务分组）

```typescript
// src/http/api/user.ts
import { http } from '../instance'

export const userApi = {
  // 用户认证
  login(credentials: { email: string; password: string }) {
    return http.post('/userApi', credentials, { serviceId: 'user' })
  },
  
  // 获取用户信息
  getUserInfo(userId: string) {
    return http.get(`/userApi/${userId}`, { serviceId: 'user' })
  },
  
  // 更新用户信息
  updateUser(userId: string, data: any) {
    return http.put(`/userApi/${userId}`, data, { serviceId: 'user' })
  },
}
```

```typescript
// src/http/api/order.ts
import { http } from '../instance'

export const orderApi = {
  // 创建订单
  createOrder(orderData: any) {
    return http.post('/orderApi', orderData, { serviceId: 'order' })
  },
  
  // 获取订单详情
  getOrder(orderId: string) {
    return http.get(`/orderApi/${orderId}`, { serviceId: 'order' })
  },
  
  // 获取用户订单列表
  getUserOrders(userId: string, params?: any) {
    return http.get(`/orderApi/${userId}`, { 
      serviceId: 'order',
      params 
    })
  },
}