import Vuex from 'vuex'
import Vue from 'vue'
import cart from './cart'
import containers from './containers'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    containers,
    cart
  }
})
