export interface DictCategoryPageParams {
  dictCode: string | undefined
  dictName: string | undefined
  status: '1' | '2' | undefined //1正常 2禁用
}

export interface AddDictCategory {
  dictCode: string
  dictName: string
  status: '1' | '2' //1正常 2禁用
}

export interface EditDictCategory extends AddDictCategory {
  id: number
}

export interface DictCategory {
  id: number
  dictCode: string
  dictName: string
  status: '1' | '2'
  createByName: string
  createDateTime: string
  updateByName: string | null
  updateDateTime: string | null
}

export interface DictItemPageParams {
  dictId: number
  dictItemCode: string | undefined
  dictItemName: string | undefined
  status: '1' | '2' //1正常 2禁用
}

export interface AddDictItem {
  dictId: number
  dictItemCode: string | undefined
  dictItemName: string | undefined
  sort: number | undefined
  status: '1' | '2' //1正常 2禁用
}

export interface EditDictItem extends AddDictItem {
  id: number
}

export interface DictItem {
  id: number
  dictId: number
  dictItemCode: string
  dictItemName: string
  sort: number
  status: '1' | '2'
  createByName: string
  createDateTime: string
  updateByName: string | null
  updateDateTime: string | null
}
