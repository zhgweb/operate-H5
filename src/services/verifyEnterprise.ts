import { request } from '@/utils/rquest'

// 密码登录
export const testReq = (mobile: string, password: string) =>
  request<any>('login/password', 'POST', { mobile, password })
