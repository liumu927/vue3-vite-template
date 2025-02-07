import Request from './request'
import type { AxiosResponse } from 'axios'

import type { RequestConfig } from './request'

// 根据项目去修改
export interface ConfigResponse<T> {
  code: number
  msg: string
  data: T
}

// 重写返回类型
interface BaseRequestConfig<T, R> extends RequestConfig<ConfigResponse<R>> {
  data?: T
}

const request = new Request({
  baseURL: '/api',
  timeout: 1000 * 60 * 100,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

// 示例：创建第二个请求实例，对应 /nodeApi
const nodeApiRequest = new Request({
  baseURL: '/nodeApi',
  timeout: 1000 * 60 * 100,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result
    },
  },
})

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {BaseRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const baseRequest = <D = any, T = any>(
  config: BaseRequestConfig<D, T>,
): Promise<any> => {
  const { method = 'GET' } = config
  if (method === 'get' || method === 'GET') {
    config.params = config.data
  }
  // 根据请求的 baseURL 选择不同的请求实例
  if (config.baseURL === '/api') {
    return request.request<T>(config as RequestConfig<T>)
  } else if (config.baseURL === '/nodeApi') {
    return nodeApiRequest.request<T>(config as RequestConfig<T>)
  } else {
    throw new Error('Invalid baseURL')
  }
}

export default baseRequest
