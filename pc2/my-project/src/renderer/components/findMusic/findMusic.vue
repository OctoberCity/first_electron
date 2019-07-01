<template>
  <div id="findMusic">
    <div class="head">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo router-link"
        mode="horizontal"
        active-text-color="#f82828"
      >
        <el-menu-item index="1">
          <router-link  tag="span" :to="{ name: 'personRecommand' }">个性推荐</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link   tag="span" :to="{ name: 'songList' }">歌单</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link   tag="span" :to="{ name: 'rankList' }">排行榜</router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link   tag="span" :to="{ name: 'songer' }">歌手</router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link   tag="span" :to="{ name: 'newsongList' }">最新音乐</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>
    
    <script>
export default {
  components: {},
  data() {
    return {
      activeIndex: "1",
      banners: [],
      newSong: []
    };
  },
  mounted() {}
};
</script>
 <style scoped>
#findMusic {
  /* text-align: center; */
}
.router-link {
  padding: 0 150px;
} 
.head{
  margin-bottom:10px;
}
</style>