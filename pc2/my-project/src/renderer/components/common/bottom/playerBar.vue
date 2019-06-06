<template>
    <div id="playerBar">
        <audio v-show="false" ref='audio'  @timeupdate="onTimeupdate" @loadedmetadata="onLoadedmetadata" :src="musicSrc"
            controls="controls"></audio> 
        <div class="slider">
            <el-slider v-model="musicSlider" @change="onHandChangeBarLen"></el-slider>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'playerBar',
        props: {
            playOrPurse: {
                type: Boolean,
                required: true,
            },
            isMute:{
                type: Boolean,
                default: false
                        },
            muteBar:{
                type: Number,
                default:10
                }
        },
        components: {

        },
        data() {
            return {
                musicSrc: '../../../../../static/Naifu - Mysterious.mp3',
                currentTime: 0,
                allmusicTime: 0,
                musicSlider: 0,
            }
        },
        mounted() {},
        methods: {
            sendTimeInfo() {
                return this.$emit('musicTime',{currentTime:this.currentTime,allmusicTime:this.allmusicTime});
            },
            onLoadedmetadata(res) {
                this.allmusicTime = parseInt(res.target.duration); 
                this.$refs.audio.muted= this.isMute; 
                // this.$refs.audio.volume= this.muteBar; 
                this.sendTimeInfo() 
            },
            onTimeupdate(res) {
                this.currentTime = parseInt(res.target.currentTime);
                this.musicSlider = Math.floor((this.currentTime / this.allmusicTime) * 100);
                this.sendTimeInfo() 
            },
            onHandChangeBarLen(value) { 
                this.currentTime = (value / 100) * this.allmusicTime;
                this.$refs.audio.currentTime = this.currentTime;
                this.sendTimeInfo()
            }

        },
        watch: {
            playOrPurse: function (newplayOrPurse, oldplayOrPurse) {
                if (newplayOrPurse) {
                    this.$refs.audio.play()
                } else {
                    this.$refs.audio.pause()
                }
            }
        },
    }
</script>
<style scoped>
    #playerBar {
        padding-left:10px;
    }  
</style>