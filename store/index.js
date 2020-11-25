import Vuex from 'vuex';
import Vue from 'vue';

Vue.use (Vuex);

import cart from './cart';
import containers from './containers';



export const store = new Vuex.Store({
  modules: {
    containers,
    cart
  }});
