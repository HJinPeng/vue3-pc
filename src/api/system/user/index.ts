import http from '@/common/http'
import type { AddUserParams, EditUserParams, User, UserPageParams } from './types'
import type { Page, PageParams } from '@/api/common-types'

// 获取用户分页列表
export function getUserPageApi(params: UserPageParams & PageParams) {
  return http<Page<User>>({
    url: '/user/page',
    params
  })
}

// 添加用户
export function addUserApi(data: AddUserParams) {
  return http({
    url: '/user/add',
    method: 'post',
    data
  })
}

// 编辑用户
export function editUserApi(data: EditUserParams) {
  return http({
    url: '/user/edit',
    method: 'put',
    data
  })
}

// 通过id删除用户
export function deleteUserByIdApi(id: number) {
  return http({
    url: '/user/delete/' + id,
    method: 'delete'
  })
}

// 根据用户id 获取用户详情
export function getUserDetailApi(userId: number) {
  return http<User & { roles: number[] }>({
    url: '/user/detail/' + userId
  })
}
