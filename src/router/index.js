import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/top'
import Janken from '@/components/jankenPage'
import Slot from '@/components/slotPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/janken',
      name: 'Janken',
      component: Janken
    },
    {
      path: '/slot',
      name: 'Slot',
      component: Slot
    },
  ]
})
