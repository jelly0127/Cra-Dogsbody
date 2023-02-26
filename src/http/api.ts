import http from './http'

/**
 * 获取首页列表
 */
export const getData = (id: object) => {
  return new Promise((resolve, reject) => {
    http('get', '/article/info', id).then(
      res => {
        resolve(res)
      },
      error => {
        reject(error)
      }
    )
  })
}
