import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../components/Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home2.vue')
  },
  {
    path: '/atividades',
    name: 'Atividades',
    component: () => import(/* webpackChunkName: "about" */ '../views/Atividades.vue')
  },
  {
    path: '/page/:name',
    name: 'page',
    component: Page,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
