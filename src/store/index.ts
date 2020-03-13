import Vue from "vue";
import Vuex from "vuex";
import auth from './auth'
Vue.use(Vuex);



// const addDate = {}
export default new Vuex.Store({
  modules:{
    auth:auth
  }
  // state: {
  //   addDate:{addToggle: false,currentKind: undefined,type: "-",notes: "",number: '',createdAt:undefined} as addDate,
  //   DateList:[] as RecordItem[]
  // },
  // getters:{
  //   DateList(state){
  //     return state.DateList
  //   }
  // },
  // mutations: {
  //   fetchDate(state){
  //     state.DateList = JSON.parse(window.localStorage.getItem('dataSource')||'[]')
  //   },
  //   saveData(state){
  //     const id = createId()
  //     const data = JSON.parse(JSON.stringify({id,data:state.addDate}))
  //     state.DateList.push(data)
  //     window.localStorage.setItem('dataSource',JSON.stringify(state.DateList))
  //   },
  //   changeAddToggle(state) {
  //     state.addDate.addToggle = !state.addDate.addToggle;
  //   },
  //   changeCurrentKind(state, currentKind) {
  //     state.addDate.currentKind = currentKind;
  //   },
  //   changeType(state, type) {
  //     state.addDate.type = type;
  //   },
  //   changeNotes(state, notes) {
  //     state.addDate.notes = notes
  //   },
  //   changeNumber(state, number) {
  //     state.addDate.number = number
  //     state.addDate.createdAt = JSON.stringify(new Date())
  //   }
  // }
});
