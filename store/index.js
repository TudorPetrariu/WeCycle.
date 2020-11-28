import Vuex from 'vuex'
import Vue from 'vue'
import cart from './cart'
import containers from './containers'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.use(Vuex)

Vue.filter('replaceNull', (value) => {
  return !value ? '-' : `$${value}`
})

export const store = new Vuex.Store({
  modules: {
    containers,
    cart
  }
})
