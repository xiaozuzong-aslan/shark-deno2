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
if (document.documentElement.clientWidth > 500) {
  window.alert('请使用手机打开，以确保浏览效果')
  const img = document.createElement('img')
  img.src = require('./assets/qrcod.png') 
  img.style.position = 'fixed'
  img.style.left = '50%'
  img.style.top = '50%'
  img.style.width = '300px'
  img.style.transform = 'translate(-50%,-50%)'
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)'
  document.body.appendChild(img)
}
