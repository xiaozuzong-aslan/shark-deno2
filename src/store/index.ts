import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    addDate: {
      addToggle: true,
      currentKind: undefined,//当前选择的类型，取消按钮时需要变成空字符，
      type: '-'
    }
  },
  mutations: {
    changeAddToggle(state) {
      state.addDate.addToggle = !state.addDate.addToggle
    },
    changeCurrentKind(state, currentKind) {
      console.log(state.addDate.currentKind)
      state.addDate.currentKind = currentKind
      console.log(state.addDate.currentKind)
    },
    changeType(state, type) {
      state.addDate.type = type
    }
  },
  actions: {
  },
  modules: {
  }
})
