import http from '@/common/http'
import type { AddRoleParams, EditRoleParams, Role, RolePageParams } from './types'
import type { Page, PageParams } from '@/api/common-types'

// 获取角色分页列表
export function getRolePageApi(params: RolePageParams & PageParams) {
  return http<Page<Role>>({
    url: '/role/page',
    params
  })
}

// 获取所有角色
export function getAllRoleApi() {
  return http<Role[]>({
    url: '/role/all'
  })
}

// 添加角色
export function addRoleApi(data: AddRoleParams) {
  return http({
    url: '/role/add',
    method: 'post',
    data
  })
}

// 编辑角色
export function editRoleApi(data: EditRoleParams) {
  return http({
    url: '/role/edit',
    method: 'put',
    data
  })
}

// 通过id删除角色
export function deleteRoleByIdApi(id: number) {
  return http({
    url: '/role/delete/' + id,
    method: 'delete'
  })
}

// 更新角色对应的菜单
export function updateRoleMenusApi(data: { roleId: number; menus: number[] }) {
  return http({
    url: '/role/set-menus',
    method: 'put',
    data
  })
}

// 获取角色对应的菜单id
export function getRoleMenusApi(roleId: number) {
  return http<number[]>({
    url: '/role/get-menus/' + roleId
  })
}
