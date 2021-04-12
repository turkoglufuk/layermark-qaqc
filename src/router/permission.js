import router from './index'
import store from '../store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/500', '/404']

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // set page title
  document.title = to.meta.title

  console.log(to.path, store.getters.isLoggedIn)
  const token = localStorage.getItem('x-token')

  if (!token) {
    console.log('no token found. redirecting login page..')
    return whiteList.includes(to.path) ? next() : next('/login')
  }

  if (store.getters.isLoggedIn) {
    console.log('token found. redirecting authorized paths..from ' + to.path)
    return redirectAuthorizedPath(to, next)
  } else {
    if (to.path === '/500' || to.path === '/404') {
      return next()
    }
    try {
      await store.dispatch('authorize')
      return redirectAuthorizedPath(to, next)
    } catch (e) {
      store.commit('SET_IS_LOGGED_IN', false)
      localStorage.removeItem('x-token')
      return whiteList.includes(to.path) ? next() : next('/login')
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

function redirectAuthorizedPath(to, next) {
  return to.path === '/login' ? next('/Assets') : next()
}
