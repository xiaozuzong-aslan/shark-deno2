import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addDate: {
      addToggle: false,
      currentKind: undefined, //当前选择的类型，取消按钮时需要变成空字符，
      type: "-",
      notes: "",
      number:'',
      createAt:new Date()
    }
  },
  mutations: {
    changeAddToggle(state) {
      state.addDate.addToggle = !state.addDate.addToggle;
    },
    changeCurrentKind(state, currentKind) {
      state.addDate.currentKind = currentKind;
    },
    changeType(state, type) {
      state.addDate.type = type;
    },
    changeNotes(state,notes){
      state.addDate.notes = notes
    },
    changeNumber(state,number){
      state.addDate.number = number
      state.addDate.createAt = new Date()
    }
  },
  actions: {},
  modules: {}
});
