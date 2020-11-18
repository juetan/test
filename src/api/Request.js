import axios from 'axios'
import VueRouter from 'vue-router'

// 创建Axios实例并指定基本Url和超时时间
const request = axios.create({
  baseURL: 'http://www.w.com/wp-json',
  timeout: 3000
})

// 设置请求拦截器，在Http请求头中携带wordpress授权的令牌(token)
request.interceptors.request.use(config=> {
  let token = localStorage.getItem('token')
  let authUrls = ['jwt-auth/v1/token/validate']
  if(token && authUrls.includes(config.url)) {
    config.headers['Authorization'] = `Bearer ${token}`
  } 
  return config
})

// 设置响应拦截器，统一处理错误请求信息
request.interceptors.response.use(response=> {
  let data = response.data
  if(data.status === 403) {
    VueRouter.push({path:'/login'})
    return Promise.reject(data)
  } else {
    return data
  }
},error=> {
  return Promise.reject(error)
})
// 默认导出request
export default request

// Wordpress官方的API接口
export const API_WP = {
  posts: 'posts'
}
// JWT Autherization插件的API接口
export const API_AUTH = {
  token: 'token',
  validate: 'token/validate'
}