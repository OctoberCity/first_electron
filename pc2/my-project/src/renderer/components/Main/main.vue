<template>
    <div class="main">
        <musicTop></musicTop>
        <router-view></router-view> 
        <musicBottom></musicbottom>
    </div>
</template>
<style scoped>
    .main {
        width: 100px;
        height: 563px;
    }
</style>
<script>
    import musicTop from '@/components/common/top/top'
    import musicBottom from  '@/components/common/bottom/bottom'
    export default {
        name: 'Main',
        components: {
            musicTop,
            musicBottom
        },
        data() {
            return {
                collapsed: false,
                isFullscreen: false
            }
        },
        computed: {

        },
        methods: {
            turnToPage(route) {

            },
            handleCollapsedChange(state) {},
            handleCloseTag(res, type, route) {},
            handleClick(item) {
                this.turnToPage(item)
            }
        },
        watch: {

        },
        mounted() {

        }
    }
</script>