<!--路由历史跳转组件 -->
<template>
    <div id="router">
       <i class="el-icon-arrow-left  router-left" @click="linkRouter('left')"></i>&nbsp;&nbsp;<i class="el-icon-arrow-right router-right" @click="linkRouter('right')"></i>
    </div>
</template>

<script>
    export default {
        name: 'router',
        data() {
            return {}
        },
        mounted() {},
        methods: {
            linkRouter(type){
                console.log(type)
                 if(type === 'left' ){
                     // 路由向前
                     this.$router.push(-1);
                     return ;
                 }
                 // 路由向后

            }
        }
    }
</script>
<style scoped>
 #router i{
     color: #fff;
 }
</style>