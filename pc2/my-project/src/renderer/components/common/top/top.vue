<template>
  <div id="top">
    <div class="top-body">
      <el-row>
        <el-col :span="3">
          <div class="brand">
            <img class="brand_img" src="#">
            <span class="brand_text">网易云音乐</span>
          </div>
        </el-col>
        <el-col :span="3">
          <routerHistory></routerHistory>
        </el-col>
        <el-col :span="4" class="search">
          <el-input placeholder="请输入歌名,歌手，电台" size="mini" suffix-icon="el-icon-search"></el-input>
        </el-col>
        <el-col :span="4" :offset="4">
          <div v-if="hasLogin" class="avatar">
            <el-image :src="avatar"></el-image>
            <span @click="dialogVisible = true">未登录</span>
          </div>
          <div v-else class="block">
            <el-image :src="avatar"></el-image>
            <span>已经登录</span>
          </div>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-thumb"></i>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-setting"></i>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-message"></i>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-bottom-left"></i>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-minus"></i>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-close" @click="closeWindow()"></i>
        </el-col>
      </el-row>
    </div>
    <el-dialog  :visible.sync="dialogVisible" width="350px">
     <Login @close="closeLogin()"></Login>         
    </el-dialog>
  </div>
</template>

<script>
import routerHistory from "./router.vue";
import Login from "../login/login.vue"
export default {
  name: "top",
  components: {
    routerHistory,
    Login
  },
  data() {
    return {
      hasLogin: true,
      dialogVisible:false,
      avatar:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    };
  },
  mounted() {},
  methods: {
    closeLogin(){
        this.dialogVisible = false;
    },
    closeWindow(){
      this.$electron.ipcRenderer.send("closeApp");
    }
  }
};
</script>
<style>
#top {
  position: absolute;
  width: 100%;
  padding: 15px 0px 10px 0px;
  display: inline-block;
  background-color: #c22f30;
}

#top .top-body {
  display: inline-block;
  width: 100%;
}

#top .brand_text {
  font-size: 14px;
  color: #fff;
  font-weight: bold;
}

#top  .search .el-input__inner {
  background-color: #f82828;
  font-size: 12px;
  width: 200px;
  height: 20px;
  line-height: 24px;
}

#top .el-icon-search {
  color: #fff;
}

#top .avatar {
  text-align: center;
}

#top .avatar img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}

#top .avatar span {
  color: #fff;
  font-size: 10px;
}
#top i {
  color: #fff;
}
</style>