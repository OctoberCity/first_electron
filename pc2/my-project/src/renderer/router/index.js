import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-vue',
      component: require('@/components/Main/main.vue').default,
      children: [
        {
          path: '',
          name: 'middle',
          component: require('@/components/middle/middle.vue').default,
          children: [
            {  // 查找音乐
              path: '',
              name: 'findMusic',
              component: require('@/components/findMusic/findMusic.vue').default,
              children: [
                {
                  // 个性推荐
                  path: '',
                  name: 'personRecommand',
                  component: require('@/components/findMusic/personRecommand/index.vue').default,
                },
                {
                  // 歌单
                  path: 'songList',
                  name: 'songList',
                  component: require('@/components/findMusic/songList/index.vue').default,
                },
                {
                  // 排行榜
                  path: 'rankList',
                  name: 'rankList',
                  component: require('@/components/findMusic/rankList/index.vue').default,
                },
                {
                  // 歌手
                  path: 'songer',
                  name: 'songer',
                  component: require('@/components/findMusic/songer/index.vue').default,
                },
                {
                  // 最新音乐
                  path: 'newsongList',
                  name: 'newsongList',
                  component: require('@/components/findMusic/newsongList/index.vue').default,
                }

              ]
            }
          ]
        },
        {
          path: '/config',
          name: 'config',
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
