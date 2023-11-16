import http from '@/common/http'
import type {
  AddDictCategoryParams,
  DictCategory,
  DictCategoryPageParams,
  DictItem,
  EditDictCategoryParams
} from './types'
import type { Page, PageParams } from '@/api/common-types'

// 获取字典分页列表
export function getDictPageApi(params: DictCategoryPageParams & PageParams) {
  return http<Page<DictCategory>>({
    url: '/dict/page',
    params
  })
}

// 添加字典
export function addDictApi(data: AddDictCategoryParams) {
  return http({
    url: '/dict/add',
    method: 'post',
    data
  })
}

// 编辑字典
export function editDictApi(data: EditDictCategoryParams) {
  return http({
    url: '/dict/edit',
    method: 'put',
    data
  })
}

// 通过id删除字典
export function deleteDictByIdApi(id: number) {
  return http({
    url: '/dict/delete/' + id,
    method: 'delete'
  })
}

// 获取字典编码对应的字典值
export function getDictByCodeApi(code: string) {
  return http<DictItem[]>({
    url: '/dict/get',
    params: {
      code
    }
  })
}

// 批量获取字典编码对应的字典值
export function getDictByCodesApi(codes: string) {
  return http<Record<string, DictItem[]>>({
    url: '/dict/batch',
    params: {
      codes
    }
  })
}
