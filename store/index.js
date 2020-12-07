import Vuex from 'vuex'
import Vue from 'vue'
import cart from './cart'
import products from './products'
import {
  BootstrapVue,
  BIcon,
  BIconArrowReturnLeft,
  BIconInfoSquare
} from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowReturnLeft', BIconArrowReturnLeft)
Vue.component('BIconInfoSquare', BIconInfoSquare)
// Vue.component('BIconArrowClockwise', BIconArrowClockwise)

Vue.use(Vuex)

Vue.filter('replaceNull', (value) => {
  return !value ? '-' : `$${value}`
})

export const store = new Vuex.Store({
  modules: {
    products,
    cart
  }
})
