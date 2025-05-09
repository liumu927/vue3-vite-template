/**
 * axios实例创建
 */

import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig } from '../types/http'
import { setupRequestInterceptor } from '../interceptors/request'
import { setupResponseInterceptor } from '../interceptors/response'
import { mergeConfig } from '../config/service'

class HttpClient {
  private instance: AxiosInstance

  constructor() {
    this.instance = axios.create()
    this.setupInterceptors()
  }

  private setupInterceptors() {
    setupRequestInterceptor(this.instance)
    setupResponseInterceptor(this.instance)
  }

  public async request<T = any>(config: RequestConfig): Promise<T> {
    const mergedConfig = mergeConfig(config)
    return this.instance.request(mergedConfig)
  }

  public get<T = any>(url: string, config?: RequestConfig) {
    return this.request<T>({ ...config, method: 'GET', url })
  }

  public post<T = any>(url: string, data?: any, config?: RequestConfig) {
    return this.request<T>({ ...config, method: 'POST', url, data })
  }

  public put<T = any>(url: string, data?: any, config?: RequestConfig) {
    return this.request<T>({ ...config, method: 'PUT', url, data })
  }

  public delete<T = any>(url: string, config?: RequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE', url })
  }
}

export const http = new HttpClient()