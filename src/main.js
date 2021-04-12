import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixin'
import './router/permission' // permission control
import './utils/eventBus'
import { loadScript } from 'esri-loader'
Vue.config.productionTip = false

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
const options = {
  url: 'https://js.arcgis.com/4.18/'
}
loadScript(options)
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.mixin(mixin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
