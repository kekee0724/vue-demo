import axios from 'axios'
import { Toast } from 'antd-mobile-vue-next'
import { stringify } from 'qs'
import config from '../../config'

const MODE = import.meta.env.MODE // 环境变量
console.log(import.meta)
const getRequest = (method: any) => {
  return (url: any, data?: any, options = {} as any) => {
    const base = config[MODE] // 获取环境变量相对应的属性值
    return axios({
      baseURL: base.apiBaseUrl, // 请求域名地址
      method,
      url,
      ...(method === 'POST'
        ? {
          data: options.string ? stringify(data) : data
        }
        : {}),
      params: method === 'GET' ? data : options.params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': options.string
          ? 'application/x-www-form-urlencoded'
          : 'application/json',
        ...options.headers
      },
      withCredentials: true
    })
      .then((res) => {
        if (typeof res.data !== 'object') {
          console.error('数据格式响应错误:', res.data)
          Toast.fail('前方拥挤，请刷新再试')
          return Promise.reject(res)
        }

        if (res.data.errcode) {
          if (res.data.errcode === 401) {
            window.location.href = 'login' // 登录失效跳转登录页
            return
          }
          // silent 选项，错误不提示
          if (res.data.Toast && !options.silent) {
            Toast.fail(res.data.Toast)
          }
          return Promise.reject(res.data)
        }

        return res.data
      })
      .catch((err) => {
        Toast.fail('系统错误', 2)
        return Promise.reject(err)
      })
  }
}

export const get = getRequest('GET')

export const post = getRequest('POST')
