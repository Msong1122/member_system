import Vue from 'vue'
import Vuex from 'vuex'
import components from './modules/components'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    components,
    user
  }
})
