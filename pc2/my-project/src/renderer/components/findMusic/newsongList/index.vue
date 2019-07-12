<template>
  <div id="newsongList">
    <div class="listbar">
      <el-menu :default-active="type" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="0">全部</el-menu-item>
        <el-menu-item index="7">华语</el-menu-item>
        <el-menu-item index="96">欧美</el-menu-item>
        <el-menu-item index="8">日本</el-menu-item>
        <el-menu-item index="16">韩国</el-menu-item>
      </el-menu>
    </div>
    <div class="music_body">
      <div
        class="body_item"
        v-loading="loading"
        :data="newSong"
        v-for="(item,index) in newSong"
        :key="index"
      >
        <span>{{index+1 < 10 ?'0'+(index+1):(index+1)}}</span>
        <img :src="item.album.blurPicUrl" />
        <span>{{item.name}}</span>
        <span>{{item.album.artists[0].name}}</span>
        <span>{{item.album.name}}</span>
        <!-- <span>{{item.album.artists[0].name}}</span> -->
      </div>
    </div>
  </div>
</template>
    
    <script>
import { get } from "@/api/axios";
import { constants } from "crypto";
export default {
  components: {},
  data() {
    return {
      banners: [],
      newSong: [],
      type: "0",
      loading: true
    };
  },
  mounted() {},
  methods: {
    // 获得新歌列表
    getList() {
      get("/banner").then(res => {
        this.banners = res.banners;
      });
    },
    // 获得最新音乐
    getNewMusicList() {
      get("/top/song", { type: this.type }).then(res => {
        console.log(res);
        this.newSong = res.data;
        this.loading = false;
      });
    },
    handleSelect() {
      this.getNewMusicList();
    }
  },
  created() {
    this.getList();
    this.getNewMusicList();
  }
};
</script>
    <style scoped>
.listbar {
  margin: 20px 0;
}
.listbar li {
  height: 20px;
  line-height: 20px;
  padding: 0 10px;
  color: #303133;
}
.music_body .body_item {
  display: flex;
  align-items: center;
  padding: 5px 0;
}

.music_body .body_item img {
  width: 40px;
  height: 40px;
}
</style>