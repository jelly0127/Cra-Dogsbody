/**
 * 网络请求配置
 */
import axios from 'axios'
import { message } from 'antd'
import CONFIG from '../config/index'
axios.defaults.timeout = 1000
axios.defaults.baseURL = CONFIG.BASE_URL
/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config: any) => {
    config.data = JSON.stringify(config.data)
    config!.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  response => {
    if (response.data.errCode === 2) {
      message.error('过期')
    }
    return response
  },
  error => {
    console.log('error', error)

    message.error(`请求出错：${error}`)
  }
)

/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 */
export const get = (url: string, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then(response => {
        landing(url, params, response.data)
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export const post = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      response => {
        //关闭进度条
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export const patch = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        msg(err)
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export const put = (url: string, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      response => {
        resolve(response.data)
      },
      err => {
        msg(err)
        reject(err)
      }
    )
  })
}

//统一接口处理，返回数据

// eslint-disable-next-line @typescript-eslint/ban-types
export default function http(fecth: any, url: string, param: {} | undefined) {
  // const _data = ''
  return new Promise((resolve, reject) => {
    switch (fecth) {
      case 'get':
        console.log('begin a get request,and url:', url)
        get(url, param)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            console.log('get request GET failed.', error)
            reject(error)
          })
        break
      case 'post':
        post(url, param)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            console.log('get request POST failed.', error)
            reject(error)
          })
        break
      default:
        break
    }
  })
}

//失败提示
const msg = (err: { response: { status: any; data: { error: { details: any } } } }) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        message.error(err.response.data.error.details)
        break
      case 401:
        message.error('未授权，请登录')
        break

      case 403:
        message.error('拒绝访问')
        break

      case 404:
        message.error('请求地址出错')
        break

      case 408:
        message.error('请求超时')
        break

      case 500:
        message.error('服务器内部错误')
        break

      case 501:
        message.error('服务未实现')
        break

      case 502:
        message.error('网关错误')
        break

      case 503:
        message.error('服务不可用')
        break

      case 504:
        message.error('网关超时')
        break

      case 505:
        message.error('HTTP版本不受支持')
        break
      default:
    }
  }
}

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const landing = (url: string, params: {}, data: { code: number }) => {
  // eslint-disable-next-line no-empty
  if (data.code === -1) {
  }
}
