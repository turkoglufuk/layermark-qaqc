import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Assets from '../components/Assets'
import Home from '../views/Home.vue'
import ErrorView from '../views/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/500',
    name: 'Error',
    component: ErrorView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/assets',
    name: 'Assets',
    component: Assets
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
