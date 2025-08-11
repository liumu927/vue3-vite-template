/**
 * 请求拦截器
 */

import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'
import { ERROR_CODE_MAP } from '../config/codeMap'

export function setupRequestInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // 如果有 token，添加到请求头
      // if (token) {
      //   config.headers = config.headers
      //   config.headers.Authorization = `Bearer ${authStore.token}`
      // }

      // 可以在这里添加加载指示器
      // message.loading('加载中...', 0)

      return config
    },
    error => {
      message.error(ERROR_CODE_MAP['request_error'])
      message.destroy()
      return Promise.reject(error)
    },
  )
}
