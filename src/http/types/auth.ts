export interface LoginParams {
  username: string
  password: string
}

export interface RegisterParams {
  username: string
  email: string
  password: string
  role_id?: number
}

export interface AuthResponse {
  access_token: string
  refresh_token: string
  user: UserInfo
}

export interface UserInfo {
  id: number
  username: string
  email: string
  role: string
}

export interface RefreshTokenResponse {
  access_token: string
  refresh_token?: string
}

export interface RefreshTokenParams {
  refresh_token: string
}
