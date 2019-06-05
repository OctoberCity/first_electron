import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-vue',
      component: require('@/components/Main/main.vue').default
    }, 
    {
      path: '*',
      redirect: '/'
    }
  ]
})
