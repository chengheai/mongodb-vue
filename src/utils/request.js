import axios from 'axios'
// axios 配置
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 可以在这先申明错误代码表示的含义

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/json'
  }
  return config
}, error => {
  // 对请求错误做些什么
  console.log(error) // for debug
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  // const res = response.data
  // 对错误代码做处理
  return response
}, error => {
  // 对响应错误做点什么
  console.log('err' + error) // for debug
  return Promise.reject(error)
})

export default instance

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
  })
}
