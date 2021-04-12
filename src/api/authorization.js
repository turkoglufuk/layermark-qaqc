import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'POST',
    data
  })
}

export function authorize() {
  return request({
    url: '/user/whoami',
    method: 'GET'
  })
}

export default {
  login,
  authorize
}
