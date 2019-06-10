<!--登录弹出框组件 -->
<template>
  <div id="login">
    <div class="head">
      <i class="el-icon-close" @click="close()"></i>
    </div>
    <div class="middle">
      <div class="img_title">
        <img width="100%" :src="imgTitle">
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="phone">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="中国" value="1"></el-option>
          </el-select>
        </el-input>
        <el-input placeholder="请输入密码" v-model="password">
          <i slot="prefix" class="el-icon-lock"></i>
        </el-input>
      </div>
      <el-button class="login_btn" size="small">登录</el-button>
    </div>
    <div class="bottom">
      <span>其他登录方式</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      imgTitle: "../../../../../static/img/phone.png",
      phone: "",
      select: 1,
      password:'',
    };
  },
  mounted() {},
  methods: {
    close() {}
  }
};
</script>
<style scoped>
#login i {
    color: #000;
} 
#login .img_title {
  width: 100%;
  text-align: center;
}
#login .middle {
  margin: 10px 30px;
}
#login .login_btn{
    width: 100%;
    margin-top:10px;
    font-size: 20px;
    border-radius: 10px;
    color:#fff;
    background-color:  #c22f30;
}
</style>