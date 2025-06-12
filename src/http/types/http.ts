/**
 * HTTP相关类型定义
 */

import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import 'axios'

// declare 关键字用来告诉编译器，某个类型是存在的，可以在当前文件中使用。
declare module 'axios' {
  interface AxiosRequestConfig {
    /**
     * 用于区分不同后端服务
     */
    serviceId?: string
  }
}

// 修改后的RequestConfig可以直接继承
export interface RequestConfig extends AxiosRequestConfig {}

// 自定义响应配置
export interface ResponseConfig extends AxiosResponse {
  customConfig: RequestConfig
}

// 请求错误类型
export interface RequestError extends Error {
  config: RequestConfig
  response?: ResponseConfig
}
