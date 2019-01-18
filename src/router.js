import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CatchAll from './views/CatchAll.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'catch-all',
      component: CatchAll
    }
  ]
})
