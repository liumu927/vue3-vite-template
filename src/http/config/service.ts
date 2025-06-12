/**
 * 服务配置（多后端服务）
 */

import { config } from './index'
import type { RequestConfig } from '../types/http'
import type { ServiceConfig } from '../types/config'

export function getServiceConfig(serviceId?: string): ServiceConfig {
  if (!serviceId) return config.default
  return config[serviceId] || config.default
}

export function mergeConfig(config: RequestConfig): RequestConfig {
  const serviceConfig = getServiceConfig(config.serviceId)
  return {
    ...config,
    ...serviceConfig,
    headers: {
      ...serviceConfig.headers,
      ...config.headers,
    },
  }
}
