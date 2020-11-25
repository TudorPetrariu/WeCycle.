
import MockedData from '../assets/MockedData/response.json'

// import axios from 'axios';
export const state = () => ({
  containersList: []
})

const mutations = {
  setContainersList:(state,payload)=>{
  state.containersList = payload
  console.log(payload);
  }
}
const getters = {
  getContainersList :(state) =>{
    return state.containersList
  }
}
const actions = {
  async fetchRecycleContainers({commit}) {
    try {
      await new Promise(() => {
        setTimeout(() => {
          commit('setContainersList', MockedData);
        }, 500);
      });
    } catch (error) {
      console.log(error);
    }
  },

}
export default { namespaced: true, state, actions, mutations,getters };
