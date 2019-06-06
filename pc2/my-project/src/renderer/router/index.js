import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-vue',
      component: require('@/components/Main/main.vue').default,
      children:[
        {
            path: '',
            name:'middle',
            component: require('@/components/middle/middle.vue').default, 
            children:[
                {
                    path: '',
                    name:'findMusic',
                    component: require('@/components/findMusic/findMusic.vue').default,  
                }
            ]
        },
        {
            path: '/config',
            name:'config',
            component: require('@/components/config/config.vue').default,
         
        },
      
      ],
    }, 
    {
      path: '*',
      redirect: '/'
    }
  ]
})
