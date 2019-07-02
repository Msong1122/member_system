import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

let router = new Router({
  routes: routes

})
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (sessionStorage.getItem('user') != null) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router
