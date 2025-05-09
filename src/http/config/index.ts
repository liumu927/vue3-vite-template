/**
 * 基础配置
 */

import type { GlobalConfig } from '../types/config'

export const config: GlobalConfig = {
  default: {
    baseURL: "/api",
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  }
} 