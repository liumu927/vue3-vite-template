/**
 * 响应拦截器
 */

import { AxiosInstance, AxiosError } from 'axios'
import type { ResponseConfig } from '../types/http'
import { message } from 'ant-design-vue'
import { ERROR_CODE_MAP, TIP_CODE_MAP } from '../config/codeMap'

export function setupResponseInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    // 成功响应处理
    (response: ResponseConfig) => {
      // console.log('⌊Log⌋ ~ setupResponseInterceptor ~ response:', response)

      if (response && response.status < 400 && response.config) {
        console.log(`${response.config?.baseURL}${response.config?.url} ${TIP_CODE_MAP['response_success']}`)
      }

      // 成功消息提示，根据实际情况配置
      const { data } = response
      if (data && data.message) {
        message.success(data.message)
      }

      return data
    },

    // 错误响应处理
    async (error: AxiosError) => {
      const status = error.response?.status
      const messageError = ERROR_CODE_MAP[status] || ERROR_CODE_MAP['response_error']

      message.error(messageError)

      // 添加不同的错误响应处理，根据实际情况判断是否需要统一错误处理

      return Promise.reject(error)
    },
  )
}
