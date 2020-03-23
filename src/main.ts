import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Icon from '@/components/public/Icon.vue';
import Layout from '@/components/public/layout.vue'





Vue.config.productionTip = false
Vue.component('Icon', Icon)
Vue.component('Layout', Layout)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.onload = () => {
  setTimeout(() => {
    window.scrollTo(0, 100)
  }, 3000)
}


