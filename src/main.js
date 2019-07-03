// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from './store'
import './assets/style/reset.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
// 生产环境和部署环境判断
process.env.NODE_ENV === 'development' ? axios.defaults.baseURL = '' : axios.defaults.baseURL = 'http://sa.aixinjituan.com'
// axios.defaults.baseURL = 'http://sa.aixinjituan.com'
console.log(axios.defaults.baseURL)
Vue.prototype.axios = axios

// 引入mock.js
// require('./mock/index')

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
