<template>
  <div id="songList">
    <div>
      <el-button icon="el-icon-search" circle>全部歌单</el-button>
    </div>
    <div class="hot-label">
      <span>热门标签:</span>
      <span
        class="hot_label_item"
        @click="playlistdata()"
        v-for="(item, index) in hotLeable"
        :key="index"
      >{{item.name}}</span>
    </div>
    <div>
      <div class="block" v-for="(item,index) in playlist" :key="index"> 
        <el-image  class="item_body" :src="item.coverImgUrl"></el-image>
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
      hotLeable: [],
      playlist: []
    };
  },
  mounted() {},
  methods: {
    //  获得热门标签
    getHotList() {
      get("/playlist/hot").then(res => {
        this.hotLeable = res.tags;
      });
    },
    // 获得标签
    getCatList() {
      get("/playlist/catlist").then(res => {
        // this.catlist = res.tags;
      });
    },
    // 获得歌单
    playlistdata() {
      get("/top/playlist").then(res => {
        this.playlist = res.playlists;
        console.log(this.playlist);
      });
    }
  },
  created() {
    this.getHotList();
    this.getCatList();
    this.playlistdata();
  }
};
</script>
    <style scoped>
.hot-label span:first-child {
  font-size: 14px;
}

.hot-label .hot_label_item {
  padding: 0 10px;
  border-right: 1px #606266 solid;
  font-size: 13px;
}
.hot-label .hot_label_item:last-child {
  border-right: 1px #fff solid;
}
.block{
  /* display: inline-block */
}
.block .item_body{
   width:180px;
   height:180px;
}
</style>