import http from '@/common/http'
import type { LoginParams, UserInfo, UserPermission } from './types'

// 登录：账号密码
export function loginApi(data: LoginParams) {
  return http<UserInfo>({
    url: '/login',
    method: 'post',
    data
  })
}

// 获取用户权限：菜单，权限码
export function getUserPermissionApi() {
  return http<UserPermission>({
    url: '/queryUserMenuPermission'
  })
}

// 根据token获取用户信息
export function getUserInfoApi() {
  return http<UserInfo>({
    url: '/getUserInfo'
  })
}

// 退出登录
export function logoutApi() {
  return Promise.resolve('ok')
}
