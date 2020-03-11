import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addToggle:true,
   
  },
  mutations: {
    changeAddToggle(state){
      state.addToggle = !state.addToggle
    }
  },
  actions: {
  },
  modules: {
  }
})
