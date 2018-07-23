import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/containers/Table'
import Login from '@/containers/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/data',
      name: 'Table',
      component: Table
    }
  ]
})
