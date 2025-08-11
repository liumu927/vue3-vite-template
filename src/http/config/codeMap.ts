export const TIP_CODE_MAP = {
  response_success: '响应成功',
} as const

export const ERROR_CODE_MAP = {
  request_error: '请求发送失败',
  response_error: '请求失败',
  400: '请求参数错误',
  401: '登录已过期，请重新登录',
  403: '没有权限访问该资源',
  404: '请求的资源不存在',
  500: '服务器内部错误',
} as const
