import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import antdRegister from './utils/antd'
import 'normalize.css'

antdRegister()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
