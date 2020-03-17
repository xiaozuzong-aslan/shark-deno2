import Vue from 'vue'
import VueRouter from 'vue-router'
import Chart from '../views/Chart.vue'

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
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/Edit.vue')
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
