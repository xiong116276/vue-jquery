import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import add from '@/components/add.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    {
      path: '/',
      redirect: '/home'
    }

  ]
})
