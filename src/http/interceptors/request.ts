/**
 * 请求拦截器
 */

import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
// import { useAuthStore } from '@/store/auth'
import { message } from 'ant-design-vue'

export function setupRequestInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // const authStore = useAuthStore()
      
      // // 如果有 token，添加到请求头
      // if (authStore.token) {
      //   config.headers = config.headers
      //   config.headers.Authorization = `Bearer ${authStore.token}`
      // }
      
      // 可以在这里添加加载指示器
      // message.loading('加载中...', 0)
      
      return config
    },
    (error) => {
      // 请求发生错误时关闭加载指示器
      // message.destroy()
      message.error('请求发送失败')
      return Promise.reject(error)
    }
  )
} 