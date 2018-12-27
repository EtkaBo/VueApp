import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import store from './store'
import router from './router'

Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
