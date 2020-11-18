import request from './Request'

export function API_login(data) {
  return request({
    url: 'jwt-auth/v1/token',
    method: 'post',
    data
  })
}

export function API_validate() {
  return request({
    url: 'jwt-auth/v1/token/validate',
    method: 'post'
  })
}