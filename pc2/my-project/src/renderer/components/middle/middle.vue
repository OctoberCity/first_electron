<template>
  <div id="mainList">
    <div class="left">
      <configList></configList>
    </div>
    <div class="right">
      <router-view></router-view>
      <div class="padding_help"></div>
    </div>
  </div>
</template>

<script>
import configList from "@/components/middle/components/configList/configList.vue";
export default {
  name: "mainList",
  components: {
    configList
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
#mainList {
  padding-top: 61px; 
  width: 100%;
}
.left {
  float: left;
  width: 160px;
}
.right {
  float: right;
  padding: 10px 30px;
  overflow-y: auto;
  height: 500px;
}
.padding_help{
    height: 61px;
}
</style>