<template>
    <div id="mainList">
        <div class="left">
            <configList></configList>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import configList from '@/components/middle/components/configList/configList.vue'
    export default {
        name: 'mainList',
        components: {
            configList
        },
        data() {
            return {

            }
        },
        mounted() {},
        methods: {}
    }
</script>
<style scoped>
    #mainList {
        padding-top: 61px;
        width: 100px;
    }
    .left{
       float: left;
       width:300px
    }
    .right{
        float: left;
    }
</style>