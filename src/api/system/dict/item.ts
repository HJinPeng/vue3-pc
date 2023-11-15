import http from '@/common/http'
import type { AddDictItem, DictItem, DictItemPageParams, EditDictItem } from './types'
import type { Page, PageParams } from '@/api/common-types'

// 获取字典条目分页列表
export function getDictItemPageApi(params: DictItemPageParams & PageParams) {
  return http<Page<DictItem>>({
    url: '/dict-item/page',
    params
  })
}

// 添加字典条目
export function addDictItemApi(data: AddDictItem) {
  return http({
    url: '/dict-item/add',
    method: 'post',
    data
  })
}

// 编辑字典条目
export function editDictItemApi(data: EditDictItem) {
  return http({
    url: '/dict-item/edit',
    method: 'put',
    data
  })
}

// 通过id删除字典条目
export function deleteDictItemByIdApi(id: number) {
  return http({
    url: '/dict-item/delete/' + id,
    method: 'delete'
  })
}
