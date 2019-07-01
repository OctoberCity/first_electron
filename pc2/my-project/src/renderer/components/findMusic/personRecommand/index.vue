<template>
  <div id="personRecommand">
    <div class="banner">
      <el-carousel :interval="4000" type="card" height="140px">
        <el-carousel-item v-for="(item,index) in banners" :key="index">
          <img :src="item.imageUrl">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="recommandMucie">
      <div class="title">
        <span class="title_name">推荐歌单</span>
        <span class="more">更多></span>
      </div>
    </div>
    <div class="newMusicList">
      <div class="title">
        <span class="title_name">最新音乐</span>
        <span class="more">更多></span>
      </div>
      <div class="body">
        <div class="body_item" v-for="(item,index) in newSong" :key="index">
          <div class="image">
            <span>{{index+1 < 10 ?'0'+(index+1):(index+1)}}</span>
            <img :src="item.song.album.blurPicUrl" width="64px" height="64px">
          </div>
          <div class="song_somde">
            <span>{{item.name}}</span>
            <span>{{item.song.album.artists[0].name}}</span>
          </div>
        </div>
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
      newSong: []
    };
  },
  mounted() {},
  methods: {
    // 获得banner 轮播
    getList() {
      get("/banner").then(res => {
        this.banners = res.banners;
      });
    },
    // 获得最新音乐
    getNewMusicList() {
      get("/personalized/newsong").then(res => {
        console.log(res);
        this.newSong = res.result;
      });
    }
  },
  created() {
    this.getList();
    this.getNewMusicList();
  }
};
</script>
    <style scoped>
#findMusic { 
}
.banner {
  width: 700px;
}
.banner img {
  height: 140px;
}
.title {
  border-bottom: 1px solid #f2f2f2;
  margin-top: 10px;
  padding-bottom: 5px;
}
.title .title_name {
  font-size: 20px;
  font-weight: bold;
}
.title .more {
  float: right;
  font-size: 13px;
}
.newMusicList .body_item {
  height: 50px;
  line-height: 50px;
  padding: 10px;
  margin-top: 10px;
}
.newMusicList .body_item .image {
  display: inline-block;
}

.newMusicList .body_item .song_somde {
  display:inline-block;
  vertical-align: top
}
</style>