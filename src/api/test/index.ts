import http from '@http'

export function getList() {
  return http<Array<{ name: string }>>({
    url: '/biz/scoring/tool/list',
    validate: (resData, res) => {
      return resData.success === true
    },
    extractData: (resData, res) => {
      return resData.result.map((item) => ({
        name: item.name
      }))
    },
    alert: true,
    md5: true
  })
}

export function getList2() {
  return http<Array<{ name: string }>>({
    url: '/biz/scoring/tool/list',
    validate: (resData, res) => {
      return resData.success === true
    },
    extractData: (resData, res) => {
      return resData.result.map((item) => ({
        name: item.name
      }))
    },
    alert: true,
    module: 'mock',
    md5: true
  })
}
