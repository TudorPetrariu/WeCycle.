import MockedData from '../assets/MockedData/response.json'

export const state = () => ({
  productsList: [],
  currentProduct: []
})

const mutations = {
  setProductsList: (state, payload) => {
    state.productsList = payload
  },
  saveProductDetails: (state, payload) => {
    state.currentProduct = payload
  }
}
const getters = {
  getProductsList: (state) => {
    return state.productsList
  },
  getCurrentProduct: (state) => {
    return state.currentProduct
  }
}
const actions = {
  async fetchRecycleProducts({ commit }) {
    try {
      await new Promise(() => {
        setTimeout(() => {
          commit('setProductsList', MockedData)
        }, 500)
      })
    } catch (error) {
      console.log(error)
    }
  },
  filterListBySize({ commit, state }, payload) {
    // const item = []
    // return state.productsList.forEach((product) => {
    //   return product.sizes.map((size) => {
    //     item.push(size)
    //     const filtered = item.filter((one) => {
    //       return one.size === payload
    //     })
    //     // commit('setProductsList', filtered)
    //     console.log(filtered)
    //   })
    // })
  }
}
export default { namespaced: true, state, actions, mutations, getters }
