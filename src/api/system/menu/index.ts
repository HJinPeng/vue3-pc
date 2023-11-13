import http from '@/common/http'
import type { Permission } from '../auth/types'
import type { AddMenuParams, EditMenuParams } from './types'

export function getAllMenuApi() {
  return http<Permission[]>({
    url: '/menu/all-menu'
  })
}

export function addMenuApi(data: AddMenuParams) {
  return http({
    url: '/menu/add',
    method: 'post',
    data
  })
}

export function editMenuApi(data: EditMenuParams) {
  return http({
    url: '/menu/edit',
    method: 'put',
    data
  })
}

export function deleteMenuApi(id: number) {
  return http({
    url: '/menu/delete/' + id,
    method: 'delete'
  })
}
