import axios from 'axios'
import store from '../store'
import router from '../router'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 60000 // request timeout
})

service.interceptors.request.use(request => {
  if (localStorage.getItem('x-token')) { request.headers['X-JWT-Token'] = localStorage.getItem('x-token') }
  return request
})

// response interceptor
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log('err' + error) // for debug
    const status = error.response.status
    if (status === 401) {
      if (store.state.isLoggedIn) {
        store.state.isLoggedIn = false
        localStorage.removeItem('x-token')
        router.push('/login').then(() => {
          window.location.reload(true)
        })
      }
    }
    return Promise.reject(error.response)
  }
)

export default service
