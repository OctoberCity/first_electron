import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/components/indexpage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: IndexPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
