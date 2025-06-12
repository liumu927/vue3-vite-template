/**
 * 配置相关类型定义
 */

// 服务配置类型
export interface ServiceConfig {
  baseURL: string
  timeout?: number
  headers?: Record<string, string>
}

// 全局配置类型
export interface GlobalConfig {
  // 默认服务配置
  default: ServiceConfig
  // 其他服务配置
  [key: string]: ServiceConfig
}
