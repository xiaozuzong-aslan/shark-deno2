import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from '@/views/Chart/Chart.vue'
import Add from '@/views/Add/Add.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/detail'
  },
  {
    path: '/chart',
    name: 'Chart',
    component: Chart
  },

  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail/Detail.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit/Edit.vue')
  },
  {
    path: '/setting',//子组件不需要加/
    component: () => import('../components/add/settings/setting.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'actived',

})

export default router
