import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/main'
import Hotel from '@/view/hotel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    }
  ]
})
