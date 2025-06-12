/**
 * 用户相关API
 */

import {
  AuthResponse,
  LoginParams,
  RefreshTokenParams,
  RefreshTokenResponse,
  RegisterParams,
  UserInfo,
} from '../types/auth'
import { http } from '../instance'
import type { UnwrappedResponse } from '../types/response'

export const userApi = {
  // 登录接口
  login(data: LoginParams) {
    return http.post<UnwrappedResponse<AuthResponse>>('/auth/login', data)
  },

  // 注册接口
  register(data: RegisterParams) {
    return http.post<UnwrappedResponse<AuthResponse>>('/auth/register', data)
  },
}
