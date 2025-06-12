/**
 * 响应数据类型定义
 */

// 原始响应类型
export interface ResponseData<T = any> {
  code: number
  message: string
  data: T
}

// 修改 HTTP 实例，使其直接返回 data 部分
export type UnwrappedResponse<T> = T

// 分页数据格式
export interface PageData<T = any> {
  list: T[]
  total: number
  page: number
  pageSize: number
}
