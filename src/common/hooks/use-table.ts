import type { TablePaginationConfig } from 'ant-design-vue'
import { onMounted, onActivated, reactive, ref, type Ref } from 'vue'

interface Option {
  fetch: Function // 列表查询
  initParams: Function // 初始化查询参数
}
export function useTable({ fetch, initParams }: Option): {
  loading: Ref<boolean>
  pagination: TablePaginationConfig
  onSearch: () => void
  onReset: () => void
  onChangeTable: (pagination: TablePaginationConfig) => void
} {
  const loading = ref<boolean>(false)

  const pagination = reactive<TablePaginationConfig>({
    current: 1,
    pageSize: 10,
    total: 0,
    showQuickJumper: true,
    showSizeChanger: true,
    showTotal: (total) => `共 ${total} 条数据`
  })

  const onChangeTable = ({ current, pageSize }: TablePaginationConfig) => {
    pagination.current = current
    pagination.pageSize = pageSize
    fetch()
  }

  const onSearch = () => {
    pagination.current = 1
    fetch()
  }

  const onReset = () => {
    pagination.current = 1
    initParams()
    fetch()
  }

  let firstEnter: boolean
  onMounted(() => {
    firstEnter = true
    fetch()
  })
  onActivated(() => {
    // 第一次进入不请求
    if (firstEnter === true) {
      firstEnter = false
      return
    }
    fetch()
  })

  return {
    loading,
    pagination,
    onSearch,
    onReset,
    onChangeTable
  }
}
