import axios from 'axios' // 引用axios
import { Promise } from 'es6-promise' // 引入Promise

// axios 配置和拦截器都不用了，这里我使用了一个动态配置数据请求地址，在App.vue中，代码在下面，这个也不是必须的。

// ^_^下面都设置一个默认的头部，使用的时候可以传入数据覆盖^_^,例如使用fetch(GET)方法时，没有请求数据，但是请求头有变化，则应写成 fetch("地址", {}, {"这里写头部的内容"})   记住没数据用一个空对象占位置
/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch (url, params = {} , headers = {
    'Content-Type': 'application/json', // 设置跨域头部
    'Authorization': 'JWT ' + sessionStorage.getItem('authToken')
  }) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params,
      headers: headers
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err.response)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, data = {} , config = {
    'headers': {
      'Content-Type': 'application/json', // 设置跨域头部
      'Authorization': 'JWT ' + sessionStorage.getItem('authToken')
    }
  }) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err.response)
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, data = {} , config = {
    'headers': {
      'Content-Type': 'application/json', // 设置跨域头部
      'Authorization': 'JWT ' + sessionStorage.getItem('authToken')
    }
  }) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data, config)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err.response)
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {} , config = {
    'headers': {
      'Content-Type': 'application/json', // 设置跨域头部
      'Authorization': 'JWT ' + sessionStorage.getItem('authToken')
    }
  }) {
  return new Promise((resolve, reject) => {
    axios.put(url, data, config)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err.response)
      })
  })
}
