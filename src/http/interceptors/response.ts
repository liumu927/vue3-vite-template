/**
 * 响应拦截器
 */

import { AxiosInstance, AxiosError } from 'axios'
// import { useAuthStore } from '@/store/auth'
import type { ResponseConfig } from '../types/http'
import { message } from 'ant-design-vue'

export function setupResponseInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    // 成功响应处理
    (response: ResponseConfig) => {
      const { data } = response

      // 如果响应中有成功消息，可以显示
      if (data && data.message && response.config && response.config.method !== 'get') {
        message.success(data.message)
      }

      return data
    },

    // 错误响应处理
    async (error: AxiosError) => {
      // 获取错误状态码
      const status = error.response?.status

      // 根据状态码处理不同类型的错误
      if (status === 400) {
        // 请求参数错误
        const errorData = error.response?.data as any
        if (errorData) {
          if (errorData.error) {
            message.error(errorData.error)
          } else if (errorData.errors) {
            // 如果是字段验证错误，显示第一个错误信息
            const firstError = Object.values(errorData.errors)[0]
            message.error((firstError as string) || '请求参数错误')
          } else {
            message.error('请求参数错误')
          }
        } else {
          message.error('请求参数错误')
        }
      } else if (status === 401) {
        // const authStore = useAuthStore()
        // 如果有 refresh token，尝试刷新
        // if (authStore.refreshToken) {
        //   try {
        //     // 刷新 token
        //     await authStore.refreshAccessToken()
        //     // 重新发送之前失败的请求
        //     const config = error.config
        //     if (config) {
        //       // 更新请求头中的 token
        //       config.headers = config.headers
        //       config.headers.Authorization = `Bearer ${authStore.token}`
        //       // 重新发送请求
        //       return instance(config)
        //     }
        //   } catch (refreshError) {
        //     // 刷新失败，清除登录状态并重定向到登录页
        //     authStore.resetToken()
        //     message.error('登录已过期，请重新登录')
        //     window.location.href = '/login'
        //     return Promise.reject(refreshError)
        //   }
        // } else {
        //   // 没有 refresh token，直接跳转登录页
        //   authStore.resetToken()
        //   message.error('请先登录')
        //   window.location.href = '/login'
        // }
      } else if (status === 403) {
        message.error('没有权限执行此操作')
      } else if (status === 404) {
        message.error('请求的资源不存在')
      } else if (status === 500) {
        message.error('服务器错误，请稍后再试')
      } else {
        // 其他错误
        const errorData = error.response?.data as any
        if (errorData && errorData.error) {
          message.error(errorData.error)
        } else {
          message.error('请求失败')
        }
      }

      return Promise.reject(error)
    },
  )
}
